package sternbach.software

import com.kosherjava.zmanim.ComplexZmanimCalendar
import com.kosherjava.zmanim.Zman
import com.kosherjava.zmanim.ZmanCalculationMethod
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

class ZmanimViewModel {

    lateinit var scope: CoroutineScope
    var alwaysObserveLiveLocation: Boolean = false
        private set
    constructor(scope: CoroutineScope,
                alwaysObserveLiveLocation: Boolean = false,) {
        this.scope = scope
        this.alwaysObserveLiveLocation = alwaysObserveLiveLocation
        if (alwaysObserveLiveLocation && gpsSupported.value) scope.launch(Dispatchers.Default) {
            println("Starting to listen for position")
            currentLocation.collect {
                println("Got location: $it")
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
        _location.value = engine.geoLocation.toLocation()
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
        _location.value = geoLocation.toLocation()
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
        _location.value = location
        scope.launch(Dispatchers.Default) {
            calculateAndEmitZmanim(ComplexZmanimCalendar(location.toGeoLocation()))
        }
    }

    private val client by lazy { HttpClient() }

    private var _isOnline: Boolean = false
    private var _calculatingZmanim: MutableStateFlow<Boolean> = MutableStateFlow(false)
    private var _listeningForPosition: MutableStateFlow<Boolean> = MutableStateFlow(false)
    private var _location: MutableStateFlow<Location?> = MutableStateFlow(null)
    private var _shaaZmanisValues: MutableStateFlow<List<Zman.ValueBased>?> =
        MutableStateFlow(null)
    private var _allZmanimToDisplay: MutableStateFlow<List<Zman.DateBased>?> =
        MutableStateFlow(null)
    private var _now: MutableStateFlow<Instant> = MutableStateFlow(Clock.System.now())
    val calculatingZmanim: Flow<Boolean> get() = _calculatingZmanim

    val location: Flow<Location?> get() = _location
    val listeningForPosition: Flow<Boolean> get() = _listeningForPosition
    val shaaZmanisCardModel: Flow<ZmanCardModel<Zman.ValueBased>>
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
                        )
                    )
                } //else emit(null)
            }

    fun Map<ZmanType, List<Zman.DateBased>>.mapNotNullToCardModel(
        transform: (Map.Entry<ZmanType, List<Zman.DateBased>>) -> ZmanCardModel<Zman.DateBased>?,
    ): List<ZmanCardModel<Zman.DateBased>> =
        mapNotNull(transform) //this function exists for type safety and readability

    val allZmanimCardModels: Flow<List<ZmanCardModel<Zman.DateBased>?>>
        get() = _allZmanimToDisplay
            .transform {
                println("Transforming _allZmanimToDisplay = $it")
                //println("Transforming ${_allZmanimToDisplay.value}")
                it
                    ?.transformToZmanCardModels(preferredOpinionTransform)
                    ?.let { emit(it) }
                // ?: emit(null).also { println("Emiting null because _allZmanimToDisplay was null") }
            }
    private val preferredOpinionTransform: (Map.Entry<ZmanType, List<Zman.DateBased>>) -> ZmanCardModel<Zman.DateBased>? =
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

    private fun List<Zman.DateBased>.transformToZmanCardModels(
        transform: (Map.Entry<ZmanType, List<Zman.DateBased>>) -> ZmanCardModel<Zman.DateBased>?,
        pipelineOp: Iterable<Zman.DateBased>.() -> Iterable<Zman.DateBased> = { this },
    ) =
        this
            .filter { it.momentOfOccurrence != null }
            .pipelineOp()
            .groupBy { it.type }
            .mapNotNullToCardModel(transform)
            .sortedBy { it.mainZman }

    val now: Flow<Instant> get() = _now

    fun getZmanimByOpinions(opinions: Iterable<ZmanCalculationMethod<*>>): Flow<List<ZmanCardModel<Zman.DateBased>?>> {
        val noOtherOpinions =
            emptyList<Zman.DateBased>() //when by opinion, every card should be its own opinion
        return _allZmanimToDisplay
            .transform {
                it
                    ?.filter { it.rules.zmanToCalcMethodUsed?.let { opinions.union(it.values).isNotEmpty() } != null }
                    ?.map { ZmanCardModel(it, noOtherOpinions) }
                    ?.let { emit(it) }
            }
    }

    fun getZmanimByTypeWithAllOpinions(types: Iterable<ZmanType>): Flow<List<ZmanCardModel<Zman.DateBased>?>> =
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
    fun getZmanimByTypeAndOpinions(typeToOpinions: Map<ZmanType, Iterable<ZmanCalculationMethod<*>>>): Flow<List<ZmanCardModel<Zman.DateBased>?>> {
        return _allZmanimToDisplay
            .transform {
                it
                    ?.transformToZmanCardModels(preferredOpinionTransform) {
                        filter {
                            typeToOpinions[it.type]?.let { opinions ->
                                it.rules.zmanToCalcMethodUsed?.let { opinions.union(it.values).isNotEmpty() } != null
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

    private suspend fun calculateZmanimBasedOnLocation(it: GeoLocation?) {
        println("calculateZmanimBasedOnLocation($it)")
        if (it != null) {
            println("geo location is not null")
            _calculatingZmanim.value = true
            _location.value = it.toLocation()
            calculateAndEmitZmanim(ComplexZmanimCalendar(it))
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
            values
        )
        _allZmanimToDisplay.emit(
            listOfZmanim
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

    fun getZmanimByLocationString(
        locationString: String,
        onNoLocations: () -> Unit = {},
        onLocationFound: (OpenStreetMapAPI.Place) -> Unit = {},
        onMultipleLocations: (List<OpenStreetMapAPI.Place>) -> Unit = {}
    ) {
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
                        onLocationFound(it)
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

    private fun List<Zman.DateBased>.asZmanimCardModels() =
        this


    fun getOtherOpinions(shaaZmanisValues: List<Zman>): List<Zman> {
        val preferredOpinionForZmanType =
            shaaZmanisValues.firstOrNull()?.rules?.mainCalculationMethodUsed //TODO implement with settings
        return getOtherOpinons(shaaZmanisValues, preferredOpinionForZmanType)
    }

    private fun getOtherOpinons(
        shaaZmanisValues: List<Zman>,
        preferredOpinionForZmanType: ZmanCalculationMethod<*>?,
    ): List<Zman> {
        val index = shaaZmanisValues.indexOfFirst { it.rules.zmanToCalcMethodUsed?.containsValue(preferredOpinionForZmanType) == true }
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
    fun <T : Zman> getZmanForZmanTypePreferredOpinion(type: ZmanType, zmanim: List<T>): T? {
        val preferredOpinionForZmanType =
            zmanim.firstOrNull()?.rules //TODO implement with settings
        return zmanim.firstOrNull { it.rules == preferredOpinionForZmanType }
    }

    val isOnline: Flow<Boolean> = channelFlow {
        val flow = this
        println("Flow turned on, emitting $_isOnline")
        flow.send(_isOnline)
        while (currentCoroutineContext().isActive) {
            println("Checking if online")
            kotlin.runCatching {
                getIsOnline {
                    println("Got is online: $it, previous: $_isOnline")
                    if (_isOnline != it) {
                        _isOnline = it
                        flow.send(it)
                    }
                }
            }.getOrElse {
                it.printStackTrace()
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
        val tz by lazy { TimeZone.currentSystemDefault() }

        fun GeoLocation.toLocation() = Location(
            latitude,
            longitude,
            elevation,
            tz = timeZone,
            locationName = locationName
        )

        fun Location.toGeoLocation() = GeoLocation(
            locationName ?: "Current Location",
            latitude,
            longitude,
            elevation ?: 0.0,
            tz ?: this@Companion.tz
        )
    }
}