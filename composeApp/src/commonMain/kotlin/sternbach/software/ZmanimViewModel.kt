package sternbach.software

import com.kosherjava.zmanim.ComplexZmanimCalendar
import com.kosherjava.zmanim.Zman
import com.kosherjava.zmanim.ZmanOpinion
import com.kosherjava.zmanim.ZmanType
import com.kosherjava.zmanim.util.GeoLocation
import com.kosherjava.zmanim.util.Location
import io.ktor.client.HttpClient
import io.ktor.client.request.get
import io.ktor.client.statement.bodyAsText
import io.ktor.http.Url
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.currentCoroutineContext
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.channelFlow
import kotlinx.coroutines.flow.transform
import kotlinx.coroutines.isActive
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import kotlinx.datetime.Clock
import kotlinx.datetime.Instant
import kotlinx.datetime.TimeZone
import kotlinx.serialization.json.Json
import presentation.ZmanCardModel

class ZmanimViewModel(
    val scope: CoroutineScope,
    val alwaysObserveLiveLocation: Boolean = false,
) {
    /**
     * @param engine the [ComplexZmanimCalendar] used to immediately emit zmanim to the flows
     * [allZmanimCardModels] & [shaaZmanisCardModel].
     * */
    constructor(
        scope: CoroutineScope,
        engine: ComplexZmanimCalendar,
        alwaysObserveLiveLocation: Boolean = false,
    ) : this(scope, alwaysObserveLiveLocation) {
        _calculatingZmanim.value = true
        scope.launch(Dispatchers.Default) {
            calculateAndEmitZmanim(engine)
        }
    }

    /**
     * @param geoLocation the [GeoLocation] used to construct the [ComplexZmanimCalendar] which will
     * be used to immediately emit zmanim to the flows [allZmanimCardModels] & [shaaZmanisCardModel].
     * */
    constructor(
        scope: CoroutineScope,
        geoLocation: GeoLocation,
        alwaysObserveLiveLocation: Boolean = false,
    ) : this(scope, alwaysObserveLiveLocation) {
        _calculatingZmanim.value = true
        scope.launch(Dispatchers.Default) {
            calculateAndEmitZmanim(ComplexZmanimCalendar(geoLocation))
        }
    }

    /**
     * @param location the [Location] used to construct the [ComplexZmanimCalendar] which will
     * be used to immediately emit zmanim to the flows [allZmanimCardModels] & [shaaZmanisCardModel].
     * */
    constructor(
        scope: CoroutineScope,
        location: Location,
        alwaysObserveLiveLocation: Boolean = false,
    ) : this(scope, alwaysObserveLiveLocation) {
        _calculatingZmanim.value = true
        scope.launch(Dispatchers.Default) {
            calculateAndEmitZmanim(ComplexZmanimCalendar(location.toGeoLocation()))
        }
    }

    init {
        if (alwaysObserveLiveLocation && gpsSupported.value) scope.launch(Dispatchers.Default) {
            currentLocation.collect {
                _calculatingZmanim.value = true
                calculateZmanimBasedOnLocation(it)
            }
        }
        //tick every second and update [now]
        scope.launch(Dispatchers.Default) {
            while (isActive) {
                val instant = Clock.System.now()
                if (instant != null && _now != null) runCatching { _now.value = instant }
                delay(1000)
            }
        }
    }

    val tz by lazy { TimeZone.currentSystemDefault() }
    private val client by lazy { HttpClient() }

    private var _isOnline: Boolean = false
    private var _calculatingZmanim: MutableStateFlow<Boolean> = MutableStateFlow(false)
    private var _listeningForPosition: MutableStateFlow<Boolean> = MutableStateFlow(false)
    private var _shaaZmanisValues: MutableStateFlow<List<Zman.ValueBased<ZmanOpinion<Any>, Any>>?> =
        MutableStateFlow(null)
    private var _allZmanimToDisplay: MutableStateFlow<List<Zman.DateBased<ZmanOpinion<Any>, Any>>?> =
        MutableStateFlow(null)
    private var _now: MutableStateFlow<Instant> = MutableStateFlow(Clock.System.now())

    val calculatingZmanim: Flow<Boolean> get() = _calculatingZmanim
    val listeningForPosition: Flow<Boolean> get() = _listeningForPosition
    val shaaZmanisCardModel: Flow<ZmanCardModel<Zman.ValueBased<ZmanOpinion<Any>, Any>, ZmanOpinion<Any>, Any>?>
        get() = _shaaZmanisValues
            .transform {
                println("Transforming _shaaZmanisVaues: $it")
                if (it != null) {
                    val preferred =
                        getZmanForZmanTypePreferredOpinion(ZmanType.SHAA_ZMANIS, it)
                    val otherOpinions = if (preferred != null) it.minus(preferred) else it
                    if (preferred != null) emit(
                        ZmanCardModel(
                            preferred,
                            otherOpinions
                        ) as ZmanCardModel<Zman.ValueBased<ZmanOpinion<Any>, Any>, ZmanOpinion<Any>, Any>?
                    )
                } //else emit(null)
            }

    fun Map<ZmanType, List<Zman.DateBased<ZmanOpinion<Any>, Any>>>.mapNotNullToCardModel(
        transform: (Map.Entry<ZmanType, List<Zman.DateBased<ZmanOpinion<Any>, Any>>>) -> ZmanCardModel<Zman.DateBased<ZmanOpinion<Any>, Any>, ZmanOpinion<Any>, Any>?,
    ): List<ZmanCardModel<Zman.DateBased<ZmanOpinion<Any>, Any>, ZmanOpinion<Any>, Any>> =
        mapNotNull(transform) //this function exists for type safety and readability

    val allZmanimCardModels: Flow<List<ZmanCardModel<Zman.DateBased<ZmanOpinion<Any>, Any>, ZmanOpinion<Any>, Any>>?>
        get() = _allZmanimToDisplay
            .transform {
                println("Transforming _allZmanimToDisplay = $it")
                //println("Transforming ${_allZmanimToDisplay.value}")
                it
                    ?.transformToZmanCardModels(preferredOpinionTransform)
                    ?.let { emit(it) }
                // ?: emit(null).also { println("Emiting null because _allZmanimToDisplay was null") }
            }
    private val preferredOpinionTransform: (Map.Entry<ZmanType, List<Zman.DateBased<ZmanOpinion<Any>, Any>>>) -> ZmanCardModel<Zman.DateBased<ZmanOpinion<Any>, Any>, ZmanOpinion<Any>, Any>? =
        {
            getZmanForZmanTypePreferredOpinion(
                it.key,
                it.value
            )?.let { preferredZman ->
                ZmanCardModel(
                    preferredZman,
                    it.value.minus(preferredZman).sorted()
                )
            }
        }

    private fun List<Zman.DateBased<ZmanOpinion<Any>, Any>>.transformToZmanCardModels(
        transform: (Map.Entry<ZmanType, List<Zman.DateBased<ZmanOpinion<Any>, Any>>>) -> ZmanCardModel<Zman.DateBased<ZmanOpinion<Any>, Any>, ZmanOpinion<Any>, Any>?,
        pipelineOp: Iterable<Zman.DateBased<ZmanOpinion<Any>, Any>>.() -> Iterable<Zman.DateBased<ZmanOpinion<Any>, Any>> = { this },
    ) =
        this
            .filter { it.momentOfOccurrence != null }
            .pipelineOp()
            .groupBy { it.type }
            .mapNotNullToCardModel(transform)
            .sortedBy { it.mainZman }

    val now: Flow<Instant> get() = _now

    fun getZmanimByOpinions(opinions: Iterable<ZmanOpinion<Any>>): Flow<List<ZmanCardModel<Zman.DateBased<ZmanOpinion<Any>, Any>, ZmanOpinion<Any>, Any>>?> {
        val noOtherOpinions =
            emptyList<Zman.DateBased<ZmanOpinion<Any>, Any>>() //when by opinion, every card should be its own opinion
        return _allZmanimToDisplay
            .transform {
                it
                    ?.filter { it.opinion in opinions }
                    ?.map { ZmanCardModel(it, noOtherOpinions) }
                    ?.let { emit(it) }
            }
    }

    fun getZmanimByTypeWithAllOpinions(types: Iterable<ZmanType>): Flow<List<ZmanCardModel<Zman.DateBased<ZmanOpinion<Any>, Any>, ZmanOpinion<Any>, Any>>?> =
        _allZmanimToDisplay
            .transform {
                it
                    ?.transformToZmanCardModels(preferredOpinionTransform) {
                        filter { it.type in types }
                    }
                    ?.let { emit(it) }
            }

    /**
     * @param typeToOpinions a map of zman type and the opinions for that zman to be returned
     * (e.g [ZmanType.ALOS] to [[ZmanOpinion.Authority.GRA], [ZmanOpinion.Authority.MGA]] will only
     * return a [Flow] containing two [ZmanCardModel]s: one for the [ZmanOpinion.Authority.GRA]'s opinion on [ZmanType.ALOS]
     * and one for the [ZmanOpinion.Authority.MGA]'s opinion on [ZmanType.ALOS].
     * */
    fun getZmanimByTypeAndOpinions(typeToOpinions: Map<ZmanType, Iterable<ZmanOpinion<Any>>>): Flow<List<ZmanCardModel<Zman.DateBased<ZmanOpinion<Any>, Any>, ZmanOpinion<Any>, Any>>?> {
        return _allZmanimToDisplay
            .transform {
                it
                    ?.transformToZmanCardModels(preferredOpinionTransform) {
                        filter {
                            typeToOpinions[it.type]?.let { opinions ->
                                it.opinion in opinions
                            }
                                ?: false
                        }
                    }
                    ?.let { emit(it) }
            }
    }

    private suspend fun calculateZmanimBasedOnLocation(it: Location?) = it?.let {
        calculateZmanimBasedOnLocation(it.toGeoLocation())
    }

    private fun Location.toGeoLocation() = GeoLocation(
        locationName ?: "Current Location",
        latitude,
        longitude,
        elevation ?: 0.0,
        tz ?: this@ZmanimViewModel.tz
    )

    private suspend fun calculateZmanimBasedOnLocation(it: GeoLocation?) {
        println("calculateZmanimBasedOnLocation($it)")
        if (it != null) {
            println("geo location is not null")
            _calculatingZmanim.value = true
            calculateAndEmitZmanim(
                ComplexZmanimCalendar(it)
            )
        } else withContext(Dispatchers.Main.immediate) {
            println("geo location was null!")
            _calculatingZmanim.value = false
        }
    }

    private suspend fun calculateAndEmitZmanim(cal: ComplexZmanimCalendar) {
        println("Calculating zmanim for $cal")
        val values = cal.allShaosZmaniyos.sortedBy { it.duration }
        val listOfZmanim =
            cal.allZmanim.distinct().sortedBy { it.momentOfOccurrence }
        //println("To freq map: ${listOfZmanim.map { it.type }.toFrequencyMap().toList().sortedByDescending { it.second }}")
        println("Got zmanim: values=$values, listOfZmanim=$listOfZmanim")
        _shaaZmanisValues.emit(
            values as List<Zman.ValueBased<ZmanOpinion<Any>, Any>>
        )
        _allZmanimToDisplay.emit(
            listOfZmanim as List<Zman.DateBased<ZmanOpinion<Any>, Any>>
        )
        _calculatingZmanim.emit(false)
        println("Emitted all values")

    }

    fun getZmanimByLatLong(latitude: Double, longitude: Double, elevation: Double = 0.0) {
        _calculatingZmanim.value = true
        scope.launch(Dispatchers.Default) {
            val it = Location(latitude, longitude, elevation)
            println("GOT LOCATION: $it")
            calculateZmanimBasedOnLocation(it)
        }
    }

    fun getZmanimByLocationString(locationString: String, onNoLocations: () -> Unit, onMultipleLocations: (List<OpenStreetMapAPI.Place>) -> Unit) {
        _calculatingZmanim.value = true
//        UserAgent.install(UserAgent.prepare { agent = "BeautifulZmanim" }, client)
        scope.launch(Dispatchers.Default) {
            kotlin.runCatching {

                val urlString =
                    "$OPEN_STREET_MAP_BASE_URL/search.php?q=${
                        encode(
                            locationString,
                            null
                        )
                    }&format=jsonv2"
                val url = Url(urlString)
                println("URL encoded: $url")
                println("Created url: $url")
                val response = client.get(url)
                val string = response.bodyAsText()
                println("Response: $response, string: $string")

                val body = Json.Default.decodeFromString<List<OpenStreetMapAPI.Place>>(string)
                println("Body: $body")
                if(body.isEmpty()) {
                    onNoLocations()
                    _calculatingZmanim.value = false
                    errorInGettingLocation.value = "No location found."
                }
                else if(body.size == 1) calculateZmanimBasedOnLocation(
                    body.first().let {
                        println("First location: $it")
                        Location(
                            it.lat.toDouble(),
                            it.lon.toDouble(),
                            tz = tz
                        )
                    }
                )
                else onMultipleLocations(body)
                println("Api response: $body")
            }.getOrElse {
                println("Error in getting location from openstreetmap.org.")
                errorInGettingLocation.value =
                    "Could not access GPS server ($OPEN_STREET_MAP_BASE_URL)"

                _calculatingZmanim.value = false
                it.printStackTrace()
            }
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

    private fun List<Zman.DateBased<ZmanOpinion<Any>, Any>>.asZmanimCardModels() =
        this


    fun <T : ZmanOpinion<A>, A> getOtherOpinions(shaaZmanisValues: List<Zman<T, A>>): List<Zman<T, A>> {
        val preferredOpinionForZmanType =
            shaaZmanisValues.firstOrNull()?.opinion //TODO implement with settings
        return getOtherOpinons(shaaZmanisValues, preferredOpinionForZmanType)
    }

    private fun <A, T : ZmanOpinion<A>> getOtherOpinons(
        shaaZmanisValues: List<Zman<T, A>>,
        preferredOpinionForZmanType: T?,
    ): List<Zman<T, A>> {
        val index = shaaZmanisValues.indexOfFirst { it.opinion == preferredOpinionForZmanType }
        return index
            .takeIf { it >= 0 }
            ?.let {
                shaaZmanisValues.toMutableList().apply { removeAt(index) }
            }
            ?: shaaZmanisValues //preferred opinion does not occur?
    }

    /**
     * @return null if preferred opinion is not found in [zmanim] (e.g. does not occur on given date ([now]) at [currentLocation])
     * */
    fun <
            T : Zman<A, B>,
            A : ZmanOpinion<B>,
            B,
            > getZmanForZmanTypePreferredOpinion(type: ZmanType, zmanim: List<T>): T? {
        val preferredOpinionForZmanType =
            zmanim.firstOrNull()?.opinion //TODO implement with settings
        return zmanim.firstOrNull { it.opinion == preferredOpinionForZmanType }
    }

    val isOnline: Flow<Boolean> = channelFlow {
        val flow = this
        println("Flow turned on, emitting $_isOnline")
        flow.send(_isOnline)
        while (currentCoroutineContext().isActive) {
            println("Checking if online")
            getIsOnline {
                println("Got is online: $it, previous: $_isOnline")
                if (_isOnline != it) {
                    _isOnline = it
                    flow.send(it)
                }
            }
            delay(60_000)
        }
    }

    private fun getIsOnline(onResult: suspend (isOnline: Boolean) -> Unit) {
        scope.launch(Dispatchers.Default) {
            kotlin.runCatching {
                val code = client.get(OPEN_STREET_MAP_BASE_URL).status.value
                println("Got code: $code")
                onResult(code in 200 until 300)
            }
                .exceptionOrNull()
                ?.printStackTrace()
        }
    }

    companion object {
        private const val OPEN_STREET_MAP_BASE_URL = "https://nominatim.openstreetmap.org"

    }
}