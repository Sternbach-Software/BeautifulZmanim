package sternbach.software

import com.russhwolf.settings.Settings
import com.russhwolf.settings.set
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
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import presentation.ZmanCardModel
import sternbach.software.kosherkotlin.ComplexZmanimCalendar
import sternbach.software.kosherkotlin.Zman
import sternbach.software.kosherkotlin.ZmanimCalendar
import sternbach.software.kosherkotlin.metadata.ZmanCalculationMethod
import sternbach.software.kosherkotlin.metadata.ZmanDefinition
import sternbach.software.kosherkotlin.metadata.ZmanType
import sternbach.software.kosherkotlin.util.GeoLocation
import sternbach.software.kosherkotlin.util.Location

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
                runCatching { _now.value = Clock.System.now() }
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
        engine: ZmanimCalendar,
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
    private var _shaaZmanisValuesToDisplay: MutableStateFlow<List<Zman.ValueBased>?> =
        MutableStateFlow(null)
    private var _allZmanimToDisplay: MutableStateFlow<List<Zman.DateBased>?> =
        MutableStateFlow(null)
    val allShaosZmaniyos = MutableStateFlow<List<Zman.ValueBased>?>(null)
    val allZmanim = MutableStateFlow<List<Zman.DateBased>?>(null)
    val favoriteZmanim = MutableStateFlow<List<Zman<*>>?>(null)

    private var _now: MutableStateFlow<Instant> = MutableStateFlow(Clock.System.now())
    val calculatingZmanim: Flow<Boolean> get() = _calculatingZmanim

    val location: Flow<Location?> get() = _location
    val listeningForPosition: Flow<Boolean> get() = _listeningForPosition
    val shaaZmanisCardModel: Flow<ZmanCardModel>
        get() = _shaaZmanisValuesToDisplay
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
        transform: (Map.Entry<ZmanType, List<Zman.DateBased>>) -> ZmanCardModel?,
    ): List<ZmanCardModel> =
        mapNotNull(transform) //this function exists for type safety and readability

    val allZmanimCardModels: Flow<List<ZmanCardModel?>>
        get() = _allZmanimToDisplay
            .transform {
                println("Transforming _allZmanimToDisplay = $it")
                //println("Transforming ${_allZmanimToDisplay.value}")
                val toEmit = it
                    ?.transformToZmanCardModels(preferredOpinionTransform)
                if(toEmit != null) emit(toEmit)
                // ?: emit(null).also { println("Emiting null because _allZmanimToDisplay was null") }
            }
    private val preferredOpinionTransform: (Map.Entry<ZmanType, List<Zman.DateBased>>) -> ZmanCardModel? =
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
        transform: (Map.Entry<ZmanType, List<Zman.DateBased>>) -> ZmanCardModel?,
        pipelineOp: Iterable<Zman.DateBased>.() -> Iterable<Zman.DateBased> = { this },
    ) =
        this
            .filter { it.momentOfOccurrence != null }
            .pipelineOp()
            .groupBy { it.definition.type }
            .mapNotNullToCardModel(transform)
            .sortedBy { it.mainZman }

    val now: Flow<Instant> get() = _now

    fun getZmanimByOpinions(opinions: Iterable<ZmanCalculationMethod>): Flow<List<ZmanCardModel?>> {
        val noOtherOpinions =
            emptyList<Zman.DateBased>() //when by opinion, every card should be its own opinion
        return _allZmanimToDisplay
            .transform {
                it
                    ?.filter { it.definition.calculationMethod in opinions }
                    ?.map { ZmanCardModel(it, noOtherOpinions) }
                    ?.let { emit(it) }
            }
    }

    fun getZmanimByTypeWithAllOpinions(types: Iterable<ZmanType>): Flow<List<ZmanCardModel?>> =
        _allZmanimToDisplay
            .transform {
                it
                    ?.transformToZmanCardModels(preferredOpinionTransform) {
                        filter { it.definition.type in types }
                    }
                    ?.let { emit(it) }
            }

    /**
     * @param typeToOpinions a map of zman type and the opinions for that zman to be returned
     * (e.g [ZmanType.ALOS] to [[ZmanOpinion.Authority.GRA], [ZmanOpinion.Authority.MGA]] will only
     * return a [Flow] containing two [ZmanCardModel]s: one for the [ZmanOpinion.Authority.GRA]'s opinion on [ZmanType.ALOS]
     * and one for the [ZmanOpinion.Authority.MGA]'s opinion on [ZmanType.ALOS].
     * */
    fun getZmanimByTypeAndOpinions(typeToOpinions: Map<ZmanType, Iterable<ZmanCalculationMethod>>): Flow<List<ZmanCardModel?>> {
        return _allZmanimToDisplay
            .transform {
                it
                    ?.transformToZmanCardModels(preferredOpinionTransform) {
                        filter {
                            typeToOpinions[it.definition.type]?.let { opinions ->
                                it.definition.calculationMethod in opinions
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

    private suspend fun calculateAndEmitZmanim(cal: ZmanimCalendar) {
        println("Calculating zmanim for $cal")
        val allShaosZmaniyos = cal.allShaosZmaniyos.sortedBy { it.duration }
        val allZmanim = cal.allZmanim.sortedBy { it.momentOfOccurrence }
        this.allShaosZmaniyos.emit(allShaosZmaniyos)
        this.allZmanim.emit(allZmanim)
        val favoriteZmanimString = settings.getStringOrNull(FAVORITE_ZMANIM_PREF_KEY) ?: "[]"
        println("Favorite zmanim string: $favoriteZmanimString")
        val favoritedZmanimFromPersistedStorage = Json.Default.decodeFromString<List<ZmanDefinition>>(
            favoriteZmanimString
        )
        favoriteZmanim.emit((allZmanim + allShaosZmaniyos).filter { it.definition in favoritedZmanimFromPersistedStorage })
        //println("To freq map: ${listOfZmanim.map { it.type }.toFrequencyMap().toList().sortedByDescending { it.second }}")
        println("Got zmanim: values=$allShaosZmaniyos, listOfZmanim=${this.allZmanim}")
        _shaaZmanisValuesToDisplay.emit(
            allShaosZmaniyos
        )
        _allZmanimToDisplay.emit(
            allZmanim
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


    fun getOtherOpinions(shaaZmanisValues: List<Zman<*>>): List<Zman<*>> {
        val preferredOpinionForZmanType =
            shaaZmanisValues.firstOrNull()?.definition?.calculationMethod //TODO implement with settings
        return getOtherOpinons(shaaZmanisValues, preferredOpinionForZmanType)
    }

    private fun getOtherOpinons(
        shaaZmanisValues: List<Zman<*>>,
        preferredOpinionForZmanType: ZmanCalculationMethod?,
    ): List<Zman<*>> {
        val index = shaaZmanisValues.indexOfFirst { it.definition.calculationMethod == preferredOpinionForZmanType }
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
    fun <T> getZmanForZmanTypePreferredOpinion(type: ZmanType, zmanim: List<Zman<T>>): Zman<T>? {
        val preferredOpinionForZmanType =
            zmanim.firstOrNull()?.definition //TODO implement with settings
        return zmanim.firstOrNull { it.definition == preferredOpinionForZmanType }
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

    fun favoriteZman(it: Zman<*>) = scope.launch(Dispatchers.Default) {
        val prefsString = settings.getStringOrNull(FAVORITE_ZMANIM_PREF_KEY)
        if(prefsString != null) {
            val zmanim = Json.Default.decodeFromString<List<ZmanDefinition>>(prefsString)
            val newPrefsString = Json.Default.encodeToString(zmanim + it.definition)
            settings[FAVORITE_ZMANIM_PREF_KEY] = newPrefsString
            println("Zmanim saved correctly: ${settings.getStringOrNull(FAVORITE_ZMANIM_PREF_KEY) == newPrefsString}")
        } else {
            val newPrefsString = Json.Default.encodeToString(listOf(it.definition))
            settings[FAVORITE_ZMANIM_PREF_KEY] = newPrefsString
            println("Zmanim saved correctly: ${settings.getStringOrNull(FAVORITE_ZMANIM_PREF_KEY) == newPrefsString}")
        }
        val newFavorites = (favoriteZmanim.value ?: emptyList()) + it
        favoriteZmanim.emit(newFavorites)
        allShaosZmaniyos.emit(allShaosZmaniyos.value?.minus(newFavorites.filterIsInstance<Zman.ValueBased>().toSet()))
        allZmanim.emit(allZmanim.value?.minus(newFavorites.filterIsInstance<Zman.DateBased>().toSet()))
    }

    fun unfavoriteZman(it: Zman<*>) = scope.launch(Dispatchers.Default) {
        val prefsString = settings.getStringOrNull(FAVORITE_ZMANIM_PREF_KEY)
        if(prefsString != null) {
            val zmanim = Json.Default.decodeFromString<List<ZmanDefinition>>(prefsString)
            settings[FAVORITE_ZMANIM_PREF_KEY] = Json.Default.encodeToString(zmanim - it.definition)
        }
        val newFavorites = (favoriteZmanim.value ?: emptyList()) - it
        favoriteZmanim.emit(newFavorites)
        allShaosZmaniyos.emit(allShaosZmaniyos.value?.minus(newFavorites.filterIsInstance<Zman.ValueBased>().toSet()))
        allZmanim.emit(allZmanim.value?.minus(newFavorites.filterIsInstance<Zman.DateBased>().toSet()))
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

        val settings = Settings()
        const val FAVORITE_ZMANIM_PREF_KEY = "favorite"
    }
}