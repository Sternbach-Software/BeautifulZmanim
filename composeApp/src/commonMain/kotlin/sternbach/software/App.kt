package sternbach.software

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.kosherjava.zmanim.ComplexZmanimCalendar
import com.kosherjava.zmanim.util.GeoLocation
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.isActive
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import kotlinx.datetime.Clock
import kotlinx.datetime.DateTimeUnit
import kotlinx.datetime.FixedOffsetTimeZone
import kotlinx.datetime.Instant
import kotlinx.datetime.TimeZone
import kotlinx.datetime.offsetAt
import kotlinx.datetime.toLocalDateTime
import kotlinx.datetime.until
import presentation.ZmanCardModel
import sternbach.software.theme.AppTheme
import kotlin.time.Duration
import kotlin.time.Duration.Companion.milliseconds
import kotlin.time.Duration.Companion.seconds

@OptIn(ExperimentalMaterial3Api::class)
@Composable
internal fun App() = AppTheme {
    val tz = remember { TimeZone.currentSystemDefault() }
    var latitude by remember { mutableStateOf("31.80157") }
    var longitude by remember { mutableStateOf("35.21765") }
    var calculatingZmanim by remember { mutableStateOf(false) }
    var zmanim by remember { mutableStateOf<ZmanCardModel?>(null) }
    var shaaZmanisValues by remember { mutableStateOf<List<Pair<Duration, String>>>(emptyList()) }
    var allZmanim: List<Pair<Instant?, String>> by remember { mutableStateOf(emptyList()) }
//    var passwordVisibility by remember { mutableStateOf(false) }

    Column(modifier = Modifier.fillMaxSize()) {

        val modifier = Modifier.fillMaxWidth().padding(16.dp)

        Text(
            text = "Beautiful Zmanim",
            style = MaterialTheme.typography.titleMedium,
            modifier = modifier
        )

        val thisIs = tz is kotlinx.datetime.FixedOffsetTimeZone
        Text("Time zone: $tz", modifier)
        println("this is kotlinx.datetime.FixedOffsetTimeZone = ${tz is kotlinx.datetime.FixedOffsetTimeZone}")
        if(thisIs) println("tz.offset.totalSeconds.seconds.inWholeMilliseconds = ${(tz as FixedOffsetTimeZone).offset.totalSeconds.seconds.inWholeMilliseconds}")
        else println("offsetAt(Clock.System.now()).totalSeconds.seconds.inWholeMilliseconds = ${tz.offsetAt(Clock.System.now()).totalSeconds.seconds.inWholeMilliseconds}")
        println("")

        OutlinedTextField(
            value = latitude,
            onValueChange = { latitude = it },
            label = { Text("Latitude") },
            singleLine = true,
            modifier = modifier
        )

        OutlinedTextField(
            value = longitude,
            onValueChange = { longitude = it },
            label = { Text("Longitude") },
            singleLine = true,
//            visualTransformation = if (passwordVisibility) VisualTransformation.None else PasswordVisualTransformation(),
            modifier = modifier,
//            keyboardOptions = KeyboardOptions(
//                keyboardType = KeyboardType.Password
//            ),
//            trailingIcon = {
//                IconButton(onClick = { passwordVisibility = !passwordVisibility }) {
//                    val imageVector = if (passwordVisibility) Icons.Default.Close else Icons.Default.Edit
//                    Icon(imageVector, contentDescription = if (passwordVisibility) "Hide password" else "Show password")
//                }
//            }
        )
        Button(
            onClick = {
                calculatingZmanim = true
                /* Handle login logic here */
            },
            modifier = modifier
        ) {
            Text("Get zmanim")
        }
        if (calculatingZmanim) {
            CircularProgressIndicator()
            LaunchedEffect(calculatingZmanim) {
                launch(Dispatchers.Default) {
                    val latitudeDouble = latitude.toDoubleOrNull()
                    val longitudeDouble = longitude.toDoubleOrNull()
                    println("Latitude: $latitudeDouble")
                    println("Longitude: $longitudeDouble")
                    if (latitudeDouble != null && longitudeDouble != null) {
                        val geoLocation = GeoLocation(
                            "Israel",
                            latitudeDouble,
                            longitudeDouble,
                            0.0,
                            tz
                        )
                        val calendar = ComplexZmanimCalendar(geoLocation)
                        calendar.apply {
                            val values = listOf(
                                shaahZmanis19Point8Degrees.milliseconds to "shaahZmanis19Point8Degrees",
                                shaahZmanis18Degrees.milliseconds to "shaahZmanis18Degrees",
                                shaahZmanis26Degrees.milliseconds to "shaahZmanis26Degrees",
                                shaahZmanis16Point1Degrees.milliseconds to "shaahZmanis16Point1Degrees",
                                shaahZmanis60Minutes.milliseconds to "shaahZmanis60Minutes",
                                shaahZmanis72MinutesZmanis.milliseconds to "shaahZmanis72MinutesZmanis",
                                shaahZmanis90Minutes.milliseconds to "shaahZmanis90Minutes",
                                shaahZmanis90MinutesZmanis.milliseconds to "shaahZmanis90MinutesZmanis",
                                shaahZmanis96MinutesZmanis.milliseconds to "shaahZmanis96MinutesZmanis",
                                shaahZmanisAteretTorah.milliseconds to "shaahZmanisAteretTorah",
                                shaahZmanisAlos16Point1ToTzais3Point8.milliseconds to "shaahZmanisAlos16Point1ToTzais3Point8",
                                shaahZmanisAlos16Point1ToTzais3Point7.milliseconds to "shaahZmanisAlos16Point1ToTzais3Point7",
                                shaahZmanis96Minutes.milliseconds to "shaahZmanis96Minutes",
                                shaahZmanis120Minutes.milliseconds to "shaahZmanis120Minutes",
                                shaahZmanis120MinutesZmanis.milliseconds to "shaahZmanis120MinutesZmanis"
                            ).sortedBy { it.first }
                            val listOfZmanim = listOf(
                                plagHamincha120MinutesZmanis to "plagHamincha120MinutesZmanis",
                                plagHamincha120Minutes to "plagHamincha120Minutes",
                                alos60 to "alos60",
                                alos72Zmanis to "alos72Zmanis",
                                alos96 to "alos96",
                                alos90Zmanis to "alos90Zmanis",
                                alos96Zmanis to "alos96Zmanis",
                                alos90 to "alos90",
                                alos120 to "alos120",
                                alos120Zmanis to "alos120Zmanis",
                                alos26Degrees to "alos26Degrees",
                                alos18Degrees to "alos18Degrees",
                                alos19Degrees to "alos19Degrees",
                                alos19Point8Degrees to "alos19Point8Degrees",
                                alos16Point1Degrees to "alos16Point1Degrees",
                                misheyakir11Point5Degrees to "misheyakir11Point5Degrees",
                                misheyakir11Degrees to "misheyakir11Degrees",
                                misheyakir10Point2Degrees to "misheyakir10Point2Degrees",
                                misheyakir7Point65Degrees to "misheyakir7Point65Degrees",
                                misheyakir9Point5Degrees to "misheyakir9Point5Degrees",
                                sofZmanShmaMGA19Point8Degrees to "sofZmanShmaMGA19Point8Degrees",
                                sofZmanShmaMGA16Point1Degrees to "sofZmanShmaMGA16Point1Degrees",
                                sofZmanShmaMGA18Degrees to "sofZmanShmaMGA18Degrees",
                                sofZmanShmaMGA72MinutesZmanis to "sofZmanShmaMGA72MinutesZmanis",
                                sofZmanShmaMGA90Minutes to "sofZmanShmaMGA90Minutes",
                                sofZmanShmaMGA90MinutesZmanis to "sofZmanShmaMGA90MinutesZmanis",
                                sofZmanShmaMGA96Minutes to "sofZmanShmaMGA96Minutes",
                                sofZmanShmaMGA96MinutesZmanis to "sofZmanShmaMGA96MinutesZmanis",
                                sofZmanShma3HoursBeforeChatzos to "sofZmanShma3HoursBeforeChatzos",
                                sofZmanShmaMGA120Minutes to "sofZmanShmaMGA120Minutes",
                                sofZmanShmaAlos16Point1ToSunset to "sofZmanShmaAlos16Point1ToSunset",
                                sofZmanShmaAlos16Point1ToTzaisGeonim7Point083Degrees to "sofZmanShmaAlos16Point1ToTzaisGeonim7Point083Degrees",
                                sofZmanShmaKolEliyahu to "sofZmanShmaKolEliyahu",
                                sofZmanTfilaMGA19Point8Degrees to "sofZmanTfilaMGA19Point8Degrees",
                                sofZmanTfilaMGA16Point1Degrees to "sofZmanTfilaMGA16Point1Degrees",
                                sofZmanTfilaMGA18Degrees to "sofZmanTfilaMGA18Degrees",
                                sofZmanTfilaMGA72MinutesZmanis to "sofZmanTfilaMGA72MinutesZmanis",
                                sofZmanTfilaMGA90MinutesZmanis to "sofZmanTfilaMGA90MinutesZmanis",
                                sofZmanTfilaMGA96MinutesZmanis to "sofZmanTfilaMGA96MinutesZmanis",
                                sofZmanTfila2HoursBeforeChatzos to "sofZmanTfila2HoursBeforeChatzos",
                                minchaGedola30Minutes to "minchaGedola30Minutes",
                                minchaGedola16Point1Degrees to "minchaGedola16Point1Degrees",
                                minchaGedolaAhavatShalom to "minchaGedolaAhavatShalom",
                                minchaGedolaGreaterThan30 to "minchaGedolaGreaterThan30",
                                minchaKetana16Point1Degrees to "minchaKetana16Point1Degrees",
                                minchaKetanaAhavatShalom to "minchaKetanaAhavatShalom",
                                minchaKetana72Minutes to "minchaKetana72Minutes",
                                plagHamincha60Minutes to "plagHamincha60Minutes",
                                plagHamincha72Minutes to "plagHamincha72Minutes",
                                plagHamincha90Minutes to "plagHamincha90Minutes",
                                plagHamincha96Minutes to "plagHamincha96Minutes",
                                plagHamincha96MinutesZmanis to "plagHamincha96MinutesZmanis",
                                plagHamincha90MinutesZmanis to "plagHamincha90MinutesZmanis",
                                plagHamincha72MinutesZmanis to "plagHamincha72MinutesZmanis",
                                plagHamincha16Point1Degrees to "plagHamincha16Point1Degrees",
                                plagHamincha19Point8Degrees to "plagHamincha19Point8Degrees",
                                plagHamincha26Degrees to "plagHamincha26Degrees",
                                plagHamincha18Degrees to "plagHamincha18Degrees",
                                plagAlosToSunset to "plagAlosToSunset",
                                plagAlos16Point1ToTzaisGeonim7Point083Degrees to "plagAlos16Point1ToTzaisGeonim7Point083Degrees",
                                plagAhavatShalom to "plagAhavatShalom",
                                bainHashmashosRT13Point24Degrees to "bainHashmashosRT13Point24Degrees",
                                bainHasmashosRT13Point24Degrees to "bainHasmashosRT13Point24Degrees",
                                bainHashmashosRT58Point5Minutes to "bainHashmashosRT58Point5Minutes",
                                bainHasmashosRT58Point5Minutes to "bainHasmashosRT58Point5Minutes",
                                bainHashmashosRT13Point5MinutesBefore7Point083Degrees to "bainHashmashosRT13Point5MinutesBefore7Point083Degrees",
                                bainHasmashosRT13Point5MinutesBefore7Point083Degrees to "bainHasmashosRT13Point5MinutesBefore7Point083Degrees",
                                bainHashmashosRT2Stars to "bainHashmashosRT2Stars",
                                bainHasmashosRT2Stars to "bainHasmashosRT2Stars",
                                bainHashmashosYereim18Minutes to "bainHashmashosYereim18Minutes",
                                bainHasmashosYereim18Minutes to "bainHasmashosYereim18Minutes",
                                bainHashmashosYereim3Point05Degrees to "bainHashmashosYereim3Point05Degrees",
                                bainHasmashosYereim3Point05Degrees to "bainHasmashosYereim3Point05Degrees",
                                bainHashmashosYereim16Point875Minutes to "bainHashmashosYereim16Point875Minutes",
                                bainHasmashosYereim16Point875Minutes to "bainHasmashosYereim16Point875Minutes",
                                bainHashmashosYereim2Point8Degrees to "bainHashmashosYereim2Point8Degrees",
                                bainHasmashosYereim2Point8Degrees to "bainHasmashosYereim2Point8Degrees",
                                bainHashmashosYereim13Point5Minutes to "bainHashmashosYereim13Point5Minutes",
                                bainHasmashosYereim13Point5Minutes to "bainHasmashosYereim13Point5Minutes",
                                bainHashmashosYereim2Point1Degrees to "bainHashmashosYereim2Point1Degrees",
                                bainHasmashosYereim2Point1Degrees to "bainHasmashosYereim2Point1Degrees",
                                tzaisGeonim3Point7Degrees to "tzaisGeonim3Point7Degrees",
                                tzaisGeonim3Point8Degrees to "tzaisGeonim3Point8Degrees",
                                tzaisGeonim5Point95Degrees to "tzaisGeonim5Point95Degrees",
                                tzaisGeonim3Point65Degrees to "tzaisGeonim3Point65Degrees",
                                tzaisGeonim3Point676Degrees to "tzaisGeonim3Point676Degrees",
                                tzaisGeonim4Point61Degrees to "tzaisGeonim4Point61Degrees",
                                tzaisGeonim4Point37Degrees to "tzaisGeonim4Point37Degrees",
                                tzaisGeonim5Point88Degrees to "tzaisGeonim5Point88Degrees",
                                tzaisGeonim4Point8Degrees to "tzaisGeonim4Point8Degrees",
                                tzaisGeonim6Point45Degrees to "tzaisGeonim6Point45Degrees",
                                tzaisGeonim7Point083Degrees to "tzaisGeonim7Point083Degrees",
                                tzaisGeonim7Point67Degrees to "tzaisGeonim7Point67Degrees",
                                tzaisGeonim8Point5Degrees to "tzaisGeonim8Point5Degrees",
                                tzaisGeonim9Point3Degrees to "tzaisGeonim9Point3Degrees",
                                tzaisGeonim9Point75Degrees to "tzaisGeonim9Point75Degrees",
                                tzais60 to "tzais60",
                                tzaisAteretTorah to "tzaisAteretTorah",
                                tzais90Zmanis to "tzais90Zmanis",
                                tzais96Zmanis to "tzais96Zmanis",
                                tzais90 to "tzais90",
                                tzais120 to "tzais120",
                                tzais120Zmanis to "tzais120Zmanis",
                                tzais16Point1Degrees to "tzais16Point1Degrees",
                                tzais26Degrees to "tzais26Degrees",
                                tzais18Degrees to "tzais18Degrees",
                                tzais19Point8Degrees to "tzais19Point8Degrees",
                                tzais96 to "tzais96",
                                fixedLocalChatzos to "fixedLocalChatzos",
                                sofZmanShmaFixedLocal to "sofZmanShmaFixedLocal",
                                sofZmanTfilaFixedLocal to "sofZmanTfilaFixedLocal",
                                sofZmanKidushLevanaBetweenMoldos to "sofZmanKidushLevanaBetweenMoldos",
                                sofZmanKidushLevana15Days to "sofZmanKidushLevana15Days",
                                zmanMolad to "zmanMolad",
                                sofZmanBiurChametzGRA to "sofZmanBiurChametzGRA",
                                getSofZmanBiurChametzMGA72Minutes to "getSofZmanBiurChametzMGA72Minutes",
                                sofZmanBiurChametzMGA16Point1Degrees to "sofZmanBiurChametzMGA16Point1Degrees",
                                solarMidnight to "solarMidnight",
                                sofZmanShmaBaalHatanya to "sofZmanShmaBaalHatanya",
                                sofZmanTfilaBaalHatanya to "sofZmanTfilaBaalHatanya",
                                sofZmanBiurChametzBaalHatanya to "sofZmanBiurChametzBaalHatanya",
                                minchaGedolaBaalHatanya to "minchaGedolaBaalHatanya",
                                minchaGedolaBaalHatanyaGreaterThan30 to "minchaGedolaBaalHatanyaGreaterThan30",
                                minchaKetanaBaalHatanya to "minchaKetanaBaalHatanya",
                                plagHaminchaBaalHatanya to "plagHaminchaBaalHatanya",
                                tzaisBaalHatanya to "tzaisBaalHatanya",
                                sofZmanShmaMGA18DegreesToFixedLocalChatzos to "sofZmanShmaMGA18DegreesToFixedLocalChatzos",
                                sofZmanShmaMGA16Point1DegreesToFixedLocalChatzos to "sofZmanShmaMGA16Point1DegreesToFixedLocalChatzos",
                                sofZmanShmaMGA90MinutesToFixedLocalChatzos to "sofZmanShmaMGA90MinutesToFixedLocalChatzos",
                                sofZmanShmaMGA72MinutesToFixedLocalChatzos to "sofZmanShmaMGA72MinutesToFixedLocalChatzos",
                                sofZmanShmaGRASunriseToFixedLocalChatzos to "sofZmanShmaGRASunriseToFixedLocalChatzos",
                                sofZmanTfilaGRASunriseToFixedLocalChatzos to "sofZmanTfilaGRASunriseToFixedLocalChatzos",
                                minchaGedolaGRAFixedLocalChatzos30Minutes to "minchaGedolaGRAFixedLocalChatzos30Minutes",
                                minchaKetanaGRAFixedLocalChatzosToSunset to "minchaKetanaGRAFixedLocalChatzosToSunset",
                                plagHaminchaGRAFixedLocalChatzosToSunset to "plagHaminchaGRAFixedLocalChatzosToSunset",
                                tzais50 to "tzais50",
                                samuchLeMinchaKetanaGRA to "samuchLeMinchaKetanaGRA",
                                samuchLeMinchaKetana16Point1Degrees to "samuchLeMinchaKetana16Point1Degrees"
                            ).sortedBy { it.first }
                            withContext(Dispatchers.Main.immediate) {
                                shaaZmanisValues = values
                                allZmanim = listOfZmanim
                                calculatingZmanim = false
                            }
                        }
                    } else withContext(Dispatchers.Main.immediate) {
                        calculatingZmanim = false
                    }
                }
            }
        }

        LazyColumn(Modifier.fillMaxWidth()) {
            val otherOpinions = emptyMap<String, String>()
            items(shaaZmanisValues) {
                ZmanCard(
                    ZmanCardModel(
                        "",
                        it.second,
                        it.first.toString(),
                        otherOpinions
                    )
                )
            }
            items(allZmanim) {

                ZmanCard(
                    ZmanCardModel(
                        "",
                        it.second,
                        it.first?.format(tz).toString(),
                        otherOpinions
                    )
                ) { now ->
                    val couldNotCompute = it.first == null
                    val secondsUntilZmanim = if (couldNotCompute) Int.MIN_VALUE else
                        now
                            .until(it.first!!, DateTimeUnit.SECOND)
                            .toInt()
                    if(couldNotCompute) Text("N/A")
                    else Text(
                        secondsUntilZmanim
                            .toHrMinSec()
                            .formatted(false),
                        color = if (secondsUntilZmanim <= 0) Color.Red else Color.Green
                    )
                }
            }
        }

        /*TextButton(
            onClick = { openUrl("https://github.com/terrakok") },
            modifier = Modifier.fillMaxWidth().padding(16.dp)
        ) {
            Text("Open github")
        }*/
    }
}

@Composable
fun ZmanCard(model: ZmanCardModel, content: @Composable (now: Instant) -> Unit = {}) {
    var now by remember { mutableStateOf(Clock.System.now()) }
    Card(
        Modifier.fillMaxWidth().padding(8.dp)
    ) {
        Text(model.mainZmanOpinion, Modifier.padding(start = 8.dp, bottom = 4.dp))
        Text(model.mainZmanTime, Modifier.padding(start = 8.dp))
        content(now)
    }
    if (model.mainZmanTime != "null"/*TODO standardize this - is it "N/A"? null? Something else?*/) LaunchedEffect(
        Unit
    ) {
        while (isActive) {
            now = Clock.System.now()
            delay(1_000)
        }
    }
}

/**
 * Takes a [Triple] of <hour,minute,second> and returns either e.g. "05:32:15", or "5 hr 32 min 15 sec".
 * Valid outputs: 12:34, 00:12, 00:00, 1:00:00, 1:12:00
 * Invalid outputs: "00:00:00", "00:01:00", "1:5:3"
 * */
fun Triple<Int, Int, Int>.formatted(withColons: Boolean): String {
    fun Int.formatted() = when {
        this == 0 -> "00"
        this < 10 -> "0$this"
        else -> this.toString()
    }
    return if (withColons) {
        val string = when {
            first == 0 && second > 0 -> "$second:"
            first > 0 -> "$first:${second.formatted()}:"
            second == 0 -> "00:"
            else -> TODO("Should not have happened. this=$this") //how beautiful! Also deals with first == 0 && second == 0
        }
        string + third.formatted()
    } else timeFormattedConcisely(first, second, third)
}

/**
 * Takes an hour, minute, and second, and will return a string with only those values which are not equal to 0 (e.g. "5 hr 15 sec", "5 hr 32 min 15 sec")
 * */
fun timeFormattedConcisely(hour: Int, minute: Int, second: Int): String {
    val string = StringBuilder()
    if (hour != 0) string.append("$hour hr ")
    if (minute != 0) string.append("$minute min ")
    if (second != 0) string.append("$second sec")
    return if (string.isEmpty()) "0 sec" else string.toString().trim()
}

fun Int.toHrMinSec(): Triple<Int, Int, Int> {
    var hour = 0
    var minute = 0
    var second = this
    minute += (second / 60)
    hour += (minute / 60)
    second %= 60
    minute %= 60
    return Triple(hour, minute, second)
}

private fun Instant.format(timeZone: TimeZone) = buildString {
    fun Int.pad() = /*if(this == 0) "12" else*/ toString().padStart(2, '0')
    val datetime = this@format.toLocalDateTime(timeZone)
    append(datetime.hour.pad())
    append(':')
    append(datetime.minute.pad())
    append(':')
    append(datetime.second.pad())
    append('.')
    append(datetime.nanosecond / 1_000_000)
    append(' ')
    append(datetime.monthNumber)
    append('-')
    append(datetime.dayOfMonth.pad())
    append('-')
    append(datetime.year)
}

private fun String.getFormattedLabel() =
    "$this: ${" ".repeat(50.minus(length).coerceAtLeast(10))}"

internal expect fun openUrl(url: String?)