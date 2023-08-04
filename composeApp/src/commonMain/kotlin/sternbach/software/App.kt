package sternbach.software

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Button
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
import com.kosherjava.zmanim.Zman
import com.kosherjava.zmanim.ZmanOpinion
import com.kosherjava.zmanim.ZmanType
import com.kosherjava.zmanim.util.GeoLocation
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.isActive
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import kotlinx.datetime.Clock
import kotlinx.datetime.DateTimeUnit
import kotlinx.datetime.Instant
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime
import kotlinx.datetime.until
import presentation.ZmanCardModel
import sternbach.software.theme.AppTheme

@OptIn(ExperimentalMaterial3Api::class)
@Composable
internal fun App() = AppTheme {
    val tz = remember { TimeZone.currentSystemDefault() }
    var latitude by remember { mutableStateOf("31.80157") }
    var longitude by remember { mutableStateOf("35.21765") }
    var calculatingZmanim by remember { mutableStateOf(false) }
    var shaaZmanisValues:  List<Zman.ValueBased<ZmanOpinion<Any>, Any>> by remember { mutableStateOf(emptyList()) }
    var allZmanimToDisplay: List<Zman.DateBased<ZmanOpinion<Any>, Any>> by remember { mutableStateOf(emptyList()) }
    var now by remember { mutableStateOf(Clock.System.now()) }

    Column(modifier = Modifier.fillMaxSize()) {

        val modifier = Modifier.fillMaxWidth().padding(16.dp)

        Text(
            text = "Beautiful Zmanim",
            style = MaterialTheme.typography.titleMedium,
            modifier = modifier
        )

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
                            val values = allShaosZmaniyos.sortedBy { it.duration }
                            val listOfZmanim = allZmanim.sortedBy { it.momentOfOccurrence }
                            withContext(Dispatchers.Main.immediate) {
                                shaaZmanisValues = values as List<Zman.ValueBased<ZmanOpinion<Any>, Any>>
                                allZmanimToDisplay = listOfZmanim as List<Zman.DateBased<ZmanOpinion<Any>, Any>>
                                calculatingZmanim = false
                            }
                        }
                    } else withContext(Dispatchers.Main.immediate) {
                        calculatingZmanim = false
                    }
                }
            }
        }


        LaunchedEffect(Unit) {
            launch(Dispatchers.Default) {
                while (isActive) {
                    delay(1_000)
                    withContext(Dispatchers.Main.immediate) {
                        now = Clock.System.now()
                    }
                }
            }
        }

        LazyColumn(Modifier.fillMaxWidth()) {
            if (shaaZmanisValues.isNotEmpty()) {
                val otherOpinions = getOtherOpinions(shaaZmanisValues)
                val preferred =
                    getPreferredOpinionForZmanType(ZmanType.SHAA_ZMANIS, shaaZmanisValues)
                val model =
                    ZmanCardModel<Zman<ZmanOpinion<Any>, Any>, ZmanOpinion<Any>, Any>(
                        preferred.type,
                        preferred.opinion,
                        preferred.duration.toString(),
                        otherOpinions
                    )
                item {
                    ZmanCard(
                        modifier,
                        now,
                        model
                    )
                }
            }
            if (allZmanimToDisplay.isNotEmpty()) {
                val groupedByOpinion:
                        List<
                                ZmanCardModel<
                                        Zman<
                                                ZmanOpinion<Any>,
                                                Any
                                                >,
                                        ZmanOpinion<Any>,
                                        Any,
                                        >
                                > = allZmanimToDisplay
                    .groupBy { it.type }
                    .mapNotNull {
                        it.key.let { type ->
                            ZmanCardModel(
                                type,
                                getPreferredOpinionForZmanType(
                                    type,
                                    it.value
                                ).opinion,
                                getPreferredOpinionForZmanType(
                                    type,
                                    it.value
                                ).momentOfOccurrence?.toString() ?: "N/A",
                                getOtherOpinions(it.value)
                            )
                        }
                    } as List<ZmanCardModel<Zman<ZmanOpinion<Any>, Any>, ZmanOpinion<Any>, Any>>
                items(
                    groupedByOpinion
                ) { model ->

                    ZmanCard(
                        modifier,
                        now,
                        model
                    ) { modifier, now ->
                        TimeRemainingText(now, modifier, now)
                    }
                }
            }
        }
    }
}

fun <T : ZmanOpinion<A>, A> getOtherOpinions(shaaZmanisValues: List<Zman<T, A>>): List<Zman<T, A>> {
    return shaaZmanisValues.drop(1)
}

@Composable
private fun TimeRemainingText(
    it: Instant?,
    modifier: Modifier,
    now: Instant,
) {
    if (it == null) Text(
        "N/A",
        modifier,
    )
    else {
        val (secondsUntilZmanim, timeRemaining) =
            getSecondsUntilZmanAndTimeRemaining(it, now)
        Text(
            timeRemaining,
            modifier,
            color = if (secondsUntilZmanim <= 0) Color.Red else Color.Green
        )
    }
}

fun <
        T : Zman<A, B>,
        A : ZmanOpinion<B>,
        B,
        > getPreferredOpinionForZmanType(type: ZmanType, zmanim: List<T>): T {
    return zmanim.first() //TODO implement with settings
}

private fun getSecondsUntilZmanAndTimeRemaining(
    zman: Instant,
    now: Instant,
): Pair<Int, String> {
    val secondsUntilZmanim = now.until(zman, DateTimeUnit.SECOND).toInt()
    return secondsUntilZmanim to secondsUntilZmanim
        .toHrMinSec()
        .formatted(false)
}

@Composable
fun <T : Zman<A, B>, A: ZmanOpinion<B>, B> ZmanCard(
    modifier: Modifier,
    currentTime: Instant,
    model: ZmanCardModel<T, A, B>,
    content: @Composable (modifier: Modifier, now: Instant) -> Unit = { _, _ -> },
) {
    var isExpanded by remember { mutableStateOf(false) }
    androidx.compose.material.Card(
        modifier.clickable { isExpanded = !isExpanded },
        elevation = 4.dp
    ) {
        Column {
            val padding = Modifier.padding(start = 8.dp, bottom = 4.dp)
            Text(model.zmanType.friendlyNameEnglish, padding)
            Text(model.mainZmanOpinion.format(), padding)
            Text(model.mainZmanTime, Modifier.padding(start = 8.dp))
            content(padding, currentTime)
            val startPadding = Modifier.padding(start = 2.dp)
            if (isExpanded) for (zman in model.otherOpinions) {
                Row {
                    Text(zman.opinion.format())
                    if (zman is Zman.DateBased<*, *>) TimeRemainingText(
                        zman.momentOfOccurrence,
                        startPadding,
                        currentTime
                    )
                    else Text((zman as Zman.ValueBased<*, *>).duration.toString(), startPadding)
                }
            }
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