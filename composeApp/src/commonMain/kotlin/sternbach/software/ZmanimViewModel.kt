package sternbach.software

import com.kosherjava.zmanim.ComplexZmanimCalendar
import com.kosherjava.zmanim.Zman
import com.kosherjava.zmanim.ZmanOpinion
import com.kosherjava.zmanim.ZmanType
import com.kosherjava.zmanim.util.GeoLocation
import com.kosherjava.zmanim.util.Location
import io.ktor.client.call.body
import io.ktor.client.request.get
import io.ktor.http.Url
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.transform
import kotlinx.coroutines.isActive
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import kotlinx.datetime.Clock
import kotlinx.datetime.Instant
import kotlinx.datetime.TimeZone
import presentation.ZmanCardModel

class ZmanimViewModel(
    val scope: CoroutineScope,
//    private val engine: ComplexZmanimCalendar = ComplexZmanimCalendar()
) {

    val isOnline: MutableStateFlow<Boolean> = MutableStateFlow(false)
    val tz by lazy { TimeZone.currentSystemDefault() }
    private var _calculatingZmanim: MutableStateFlow<Boolean> = MutableStateFlow(false)
    private var _listeningForPosition: MutableStateFlow<Boolean> = MutableStateFlow(false)
    private var _shaaZmanisValues: MutableStateFlow<List<Zman.ValueBased<ZmanOpinion<Any>, Any>>?> =
        MutableStateFlow(
            null
        )
    private var _allZmanimToDisplay: MutableStateFlow<List<Zman.DateBased<ZmanOpinion<Any>, Any>>?> =
        MutableStateFlow(
            null
        )
    private var _now: MutableStateFlow<Instant> = MutableStateFlow(Clock.System.now())

    val calculatingZmanim: Flow<Boolean> get() = _calculatingZmanim
    val listeningForPosition: Flow<Boolean> get() = _listeningForPosition
    val shaaZmanisCardModel: Flow<ZmanCardModel<Zman.ValueBased<ZmanOpinion<Any>, Any>, ZmanOpinion<Any>, Any>?>
        get() = _shaaZmanisValues
            .transform {
                if (it != null) {
                    val otherOpinions = getOtherOpinions(it)
                    val preferred =
                        getPreferredOpinionForZmanType(ZmanType.SHAA_ZMANIS, it)
                    emit(
                        ZmanCardModel(
                            preferred,
                            otherOpinions
                        ) as ZmanCardModel<Zman.ValueBased<ZmanOpinion<Any>, Any>, ZmanOpinion<Any>, Any>?
                    )
                } else emit(null)
            }
    val allZmanimCardModels: Flow<List<ZmanCardModel<Zman.DateBased<ZmanOpinion<Any>, Any>, ZmanOpinion<Any>, Any>>?>
        get() = _allZmanimToDisplay
            .transform {
                //println("Transforming ${_allZmanimToDisplay.value}")
                it
                    ?.filter { it.momentOfOccurrence != null }
                    ?.groupBy { it.type }
                    //.toList()
                    //.sortedBy { it.second.minBy { it.momentOfOccurrence } }
                    ?.map {
                        ZmanCardModel(
                            getPreferredOpinionForZmanType(
                                it.key,
                                it.value
                            ),
                            getOtherOpinions(it.value)
                        )
                    }
                    ?.sortedBy { it.mainZman }
                    ?.let {
                        emit(it as List<ZmanCardModel<Zman.DateBased<ZmanOpinion<Any>, Any>, ZmanOpinion<Any>, Any>>?)
                    } //?: emit(null).also { println("Emiting null because _allZmanimToDisplay was null") }
            }
    val now: Flow<Instant> get() = _now

    init {
        //tick every second and update [now], and observe location flow
        scope.launch(Dispatchers.Default) {
            while (isActive) {
                _now.value = Clock.System.now()
                delay(1000)
            }

            location.collect {
                calculateZmanimBasedOnLocation(it)
            }
        }
    }

    private suspend fun calculateZmanimBasedOnLocation(it: Location?) {
        //println("calculateZmanimBasedOnLocation($it)")
        if (it != null) {
            val geoLocation = GeoLocation(
                it.locationName ?: "Current Location",
                it.latitude,
                it.longitude,
                it.elevation ?: 0.0,
                it.tz ?: tz
            )
            val cal = ComplexZmanimCalendar(geoLocation)
            val values = cal.allShaosZmaniyos.sortedBy { it.duration }
            val listOfZmanim =
                cal.allZmanim.distinct().sortedBy { it.momentOfOccurrence }
            //println("To freq map: ${listOfZmanim.map { it.type }.toFrequencyMap().toList().sortedByDescending { it.second }}")
            withContext(Dispatchers.Main.immediate) {
                _shaaZmanisValues.value =
                    values as List<Zman.ValueBased<ZmanOpinion<Any>, Any>>
                _allZmanimToDisplay.value =
                    listOfZmanim as List<Zman.DateBased<ZmanOpinion<Any>, Any>>
                _calculatingZmanim.value = false
            }
        } else withContext(Dispatchers.Main.immediate) {
            _calculatingZmanim.value = false
        }
    }

    fun getZmanimByLatLong(latitude: Double, longitude: Double, elevation: Double = 0.0) {
        scope.launch(Dispatchers.Default) {
            calculateZmanimBasedOnLocation(Location(latitude, longitude, elevation))
        }
    }

    fun getZmanimByLocationString(locationString: String) {
        _calculatingZmanim.value = true
        val client = io.ktor.client.HttpClient()
//        UserAgent.install(UserAgent.prepare { agent = "BeautifulZmanim" }, client)
        scope.launch(Dispatchers.Default) {
            val urlString =
                "https://nominatim.openstreetmap.org/search.php?q=${
                    encode(
                        locationString,
                        null
                    )
                }&format=jsonv2"
            val url = Url(urlString)
            println("URL encoded: $url")
            println("Created url: $url")
            val response = client.get(url)
            println("REsponse: $response")
            val body = response.body<OpenStreetMapAPI>()
            println("Body: $body")
            body.response.firstOrNull()?.let {
                println("First location: $it")
                currentLocation.value = Location(
                    it.lat.toDouble(),
                    it.lon.toDouble(),
                    tz = tz
                )
                withContext(Dispatchers.Main.immediate) {
                    _calculatingZmanim.value = false
                }
            } ?: {
                println("Error in getting location from openstreetmap.org.")
                errorInGettingLocation.value =
                    "Could not access GPS server (https://nominatim.openstreetmap.org)"

                _calculatingZmanim.value = false
            }
            println("Api response: $body")
        }
    }

    fun startListeningForPosition() {
        _listeningForPosition.value = true
        listenForPosition()
    }

    fun stopListeningForPosition() {
        _listeningForPosition.value = false
        stopListening()
    }

    fun getCurrentLocationOnce() {
        getLocationOnce()
    }

    private fun getZmanimCardModels(allZmanimToDisplay: List<Zman.DateBased<ZmanOpinion<Any>, Any>>) =
        allZmanimToDisplay


    fun <T : ZmanOpinion<A>, A> getOtherOpinions(shaaZmanisValues: List<Zman<T, A>>): List<Zman<T, A>> {
        return shaaZmanisValues.drop(1)
    }

    fun <
            T : Zman<A, B>,
            A : ZmanOpinion<B>,
            B,
            > getPreferredOpinionForZmanType(type: ZmanType, zmanim: List<T>): T {
        return zmanim.first() //TODO implement with settings
    }
}