package sternbach.software

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.material.Switch
import androidx.compose.material3.Button
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import com.kosherjava.zmanim.Zman
import com.kosherjava.zmanim.ZmanOpinion
import com.kosherjava.zmanim.ZmanType
import com.kosherjava.zmanim.util.Location
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.datetime.Clock
import kotlinx.datetime.DateTimeUnit
import kotlinx.datetime.Instant
import kotlinx.datetime.TimeZone
import kotlinx.datetime.until
import presentation.ZmanCardModel
import sternbach.software.theme.AppTheme
import kotlin.math.absoluteValue

@OptIn(ExperimentalMaterial3Api::class)
@Composable
internal fun App() = AppTheme {
    var locationString by remember { mutableStateOf("123 Jane Street") }
    var longitude by remember { mutableStateOf("35.21633") }
    var latitude by remember { mutableStateOf("31.76904") }
    val vm = ZmanimViewModel(MainScope())
    val calculatingZmanim = vm.calculatingZmanim.collectAsState(false)
    val listeningForPosition = vm.listeningForPosition.collectAsState(false)
    val shaaZmanisValues = vm.shaaZmanisCardModel.collectAsState(null)
    val allZmanimToDisplay = vm.allZmanimCardModels.collectAsState(null)
    val now = vm.now.collectAsState(Clock.System.now())

    Column(modifier = Modifier.fillMaxSize().padding(16.dp)) {

        val fillMaxWidth = Modifier.fillMaxWidth()
        val modifier = fillMaxWidth.padding(16.dp)

        Text(
            text = "Beautiful Zmanim",
            style = MaterialTheme.typography.titleMedium,
            modifier = Modifier.padding(bottom = 8.dp)
        )
        Text(
            text = if (!gpsSupported) "Enter your location below"
            else "Click the toggle to listen to live updates of your current location.",
            style = MaterialTheme.typography.bodyMedium,
            modifier = fillMaxWidth
        )
        if (gpsSupported) Row {
            Switch(
                checked = listeningForPosition.value,
                onCheckedChange = {
                    if (it) vm.startListeningForPosition()
                    else vm.stopListeningForPosition()
                },
            )
            Text("Get live zmanim")
        }
        else {
            Text(
                "Address, state, zip, country:", fillMaxWidth
            )
            OutlinedTextField(
                value = locationString,
                onValueChange = { locationString = it },
                label = { Text("Location") },
                singleLine = true,
                modifier = fillMaxWidth
            )
            Button(
                modifier = fillMaxWidth,
                onClick = { vm.getZmanimByLocationString(locationString) }) {
                Text("Get zmanim by location")
            }
            Text(
                "Alternatively, you can put in your coordinates (and optionally your elevation to get more accurate results, if you would like to see opinions which factor in elevation):",
                fillMaxWidth
            )

            OutlinedTextField(
                value = longitude,
                onValueChange = { longitude = it },
                label = { Text("Longitude") },
                singleLine = true,
                modifier = fillMaxWidth
            )
            OutlinedTextField(
                value = latitude,
                onValueChange = { latitude = it },
                label = { Text("Latitude") },
                singleLine = true,
                modifier = fillMaxWidth
            )
            Button(
                onClick = {
//                openUrl("https://www.google.com/maps/search/?api=1&query=$latitude,$longitudde")
                    latitude.toDoubleOrNull()?.let {
                        longitude.toDoubleOrNull()?.let { it1 ->
                            vm.getZmanimByLatLong(it, it1)
                        }
                    } ?: println("Error parsing lat and long")/* Handle login logic here */
                }, modifier = fillMaxWidth
            ) {
                Text("Get zmanim by latitude and longitude")
            }
        }
        if (calculatingZmanim.value) CircularProgressIndicator()

        LazyVerticalGrid(GridCells.Fixed(3), fillMaxWidth) {
            shaaZmanisValues.value?.let {
                item {
                    ZmanCard(
                        modifier, now.value, it, showOpinion = true, showMomentOfOccurenceOrDuration = true
                    )
                }
            }
            allZmanimToDisplay.value?.let {
                items(
                    it
                ) { model ->

                    Row {
                        ZmanCard(
                            modifier, now.value, model, showMomentOfOccurenceOrDuration = true, showTimeRemaining = true
                        ) { modifier, zman, now ->
                            TimeRemainingText(zman, modifier, now)
                        }
                    }
                }
            }
        }
    }
}

@Composable
private fun TimeRemainingText(
    zman: Instant?,
    modifier: Modifier,
    now: Instant,
) {
    if (zman == null) Text(
        "N/A",
        modifier.fillMaxWidth(),
        textAlign = TextAlign.Center
    )
    else {
        val (secondsUntilZmanim, timeRemaining) = getSecondsUntilZmanAndTimeRemaining(zman, now)
        Text(
            timeRemaining,
            modifier.fillMaxWidth(),
            color = if (secondsUntilZmanim <= 0) Color.Red else Color.Green,
            textAlign = TextAlign.Center
        )
    }
}

const val SECONDS_IN_HOUR = 60 * 60


private fun getSecondsUntilZmanAndTimeRemaining(
    zman: Instant,
    now: Instant,
): Pair<Int, String> {
    val secondsUntilZmanim = now.until(zman, DateTimeUnit.SECOND).toInt()
    //println("Seconds from $now until $zman: $secondsUntilZmanim")
    return secondsUntilZmanim to secondsUntilZmanim.toHrMinSec()
        .formatted(false, secondsUntilZmanim in 0..SECONDS_IN_HOUR)
}

val expandedCards: MutableMap<ZmanType, Boolean> = mutableMapOf()

@Composable
fun <T : Zman<A, B>, A : ZmanOpinion<B>, B> ZmanCard(
    modifier: Modifier,
    currentTime: Instant,
    model: ZmanCardModel<T, A, B>,
    showMomentOfOccurenceOrDuration: Boolean = false,
    showOpinion: Boolean = false,
    showTimeRemaining: Boolean = false,
    content: @Composable (modifier: Modifier, zman: Instant?, now: Instant) -> Unit = { _, _, _ -> },
) {
    val tz = remember { TimeZone.currentSystemDefault() }
    var isExpanded by remember { mutableStateOf(expandedCards[model.mainZman.type] ?: false) }
    androidx.compose.material.Card(
        modifier.clickable {
            val new = !isExpanded
            expandedCards[model.mainZman.type] = new
            isExpanded = new
        }, backgroundColor = MaterialTheme.colorScheme.primaryContainer, elevation = 4.dp
    ) {
        Column {
            val padding = Modifier.padding(start = 8.dp, bottom = 4.dp)
            Text(
                model.mainZman.type.friendlyNameEnglish,
                padding.fillMaxWidth(),
                style = MaterialTheme.typography.titleLarge,
                textAlign = TextAlign.Center
            )
            if (showOpinion) Text(
                model.mainZman.opinion.format(),
                padding.fillMaxWidth(),
                style = MaterialTheme.typography.titleMedium,
                textAlign = TextAlign.Center
            )
            if (showMomentOfOccurenceOrDuration) Text(
                model.mainZman.formatted(tz, ""),
                padding.fillMaxWidth(),
                style = MaterialTheme.typography.bodyMedium,
                textAlign = TextAlign.Center
            )
            if (showTimeRemaining && model.mainZman is Zman.DateBased<*, *>) content(
                padding, (model.mainZman as Zman.DateBased<*, *>).momentOfOccurrence, currentTime
            )
            val startPadding = Modifier.padding(start = 2.dp)
            if (isExpanded) for ((index, zman) in model.otherOpinions.withIndex()) {
                Column(
                    Modifier.padding(start = 8.dp, end = 8.dp, bottom = 8.dp)
                        .background(if (index % 2 == 0) MaterialTheme.colorScheme.surfaceVariant else MaterialTheme.colorScheme.surface)
                        .fillMaxWidth()
                ) {
                    if (showOpinion) Text(
                        zman.opinion.format(),
                        Modifier.fillMaxWidth(),
                        textAlign = TextAlign.Center
                    )
                    if (showMomentOfOccurenceOrDuration)
                        if (zman is Zman.DateBased<*, *>) TimeRemainingText(
                            zman.momentOfOccurrence, startPadding.fillMaxWidth(), currentTime
                        )
                        else Text(
                            (zman as Zman.ValueBased<*, *>).formatted(tz, ""),
                            startPadding.fillMaxWidth(),
                            textAlign = TextAlign.Center
                        )
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
fun Triple<Int, Int, Int>.formatted(withColons: Boolean, includeSeconds: Boolean): String {
    fun Int.formatted() = when {
        this == 0 -> "00"
        this < 10 -> "0$this"
        else -> this.toString()
    }
    return if (withColons) {
        val string = when {
            first == 0 && second != 0 -> "${if (third == 0) second else second.absoluteValue}:"
            first != 0 -> "$first:${second.absoluteValue.formatted()}:"
            second == 0 -> "00:"
            else -> TODO("Should not have happened. this=$this") //how beautiful! Also deals with first == 0 && second == 0
        }
        if (includeSeconds) string + third.formatted()
        else string
    } else timeFormattedConcisely(first, second, third, includeSeconds)
}

/**
 * Takes an hour, minute, and second, and will return a string with only those values which are not equal to 0 (e.g. "5 hr 15 sec", "5 hr 32 min 15 sec")
 * */
fun timeFormattedConcisely(hour: Int, minute: Int, second: Int, includeSeconds: Boolean): String {
    val string = StringBuilder()
    if (hour != 0) string.append("$hour hr ")
    if (minute != 0) string.append("${if (string.isEmpty()) minute else minute.absoluteValue} min ")
    if (includeSeconds && second != 0) string.append("${if (string.isEmpty()) second else second.absoluteValue} sec")
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

/**
 * Copyright (C) 2007 The Android Open Source Project
 *
 * Encodes characters in the given string as '%'-escaped octets
 * using the UTF-8 scheme. Leaves letters ("A-Z", "a-z"), numbers
 * ("0-9"), and unreserved characters ("_-!.~'()*") intact. Encodes
 * all other characters with the exception of those specified in the
 * allow argument.
 *
 * @param s string to encode
 * @param allow set of additional characters to allow in the encoded form,
 * null if no characters should be skipped
 * @return an encoded version of s suitable for use as a URI component,
 * or null if s is null
 */
fun encode(s: String?, allow: String?): String? {
    if (s == null) {
        return null
    }

    // Lazily-initialized buffers.
    var encoded: StringBuilder? = null
    val oldLength = s.length

    // This loop alternates between copying over allowed characters and
    // encoding in chunks. This results in fewer method calls and
    // allocations than encoding one character at a time.
    var current = 0
    while (current < oldLength) {
        // Start in "copying" mode where we copy over allowed chars.

        // Find the next character which needs to be encoded.
        var nextToEncode = current
        while (nextToEncode < oldLength && isAllowed(s[nextToEncode], allow)) {
            nextToEncode++
        }

        // If there's nothing more to encode...
        if (nextToEncode == oldLength) {
            return if (current == 0) {
                // We didn't need to encode anything!
                s
            } else {
                // Presumably, we've already done some encoding.
                encoded!!.append(s, current, oldLength)
                encoded.toString()
            }
        }
        if (encoded == null) {
            encoded = StringBuilder()
        }
        if (nextToEncode > current) {
            // Append allowed characters leading up to this point.
            encoded.append(s, current, nextToEncode)
        } else {
            // assert nextToEncode == current
        }

        // Switch to "encoding" mode.

        // Find the next allowed character.
        current = nextToEncode
        var nextAllowed = current + 1
        while (nextAllowed < oldLength && !isAllowed(s[nextAllowed], allow)) {
            nextAllowed++
        }

        // Convert the substring to bytes and encode the bytes as
        // '%'-escaped octets.
        val toEncode = s.substring(current, nextAllowed)
        try {
            val HEX_DIGITS = "0123456789ABCDEF".toCharArray()
            val bytes = toEncode.encodeToByteArray()
            val bytesLength = bytes.size
            for (i in 0 until bytesLength) {
                encoded.append('%')
                encoded.append(HEX_DIGITS[bytes[i].toInt() and 0xf0 shr 4])
                encoded.append(HEX_DIGITS[bytes[i].toInt() and 0xf])
            }
        } catch (t: Throwable) {
            t.printStackTrace()
        }
        current = nextAllowed
    }

    // Encoded could still be null at this point if s is empty.
    return encoded?.toString() ?: s
}

/**
 * Returns true if the given character is allowed.
 *
 * @param c character to check
 * @param allow characters to allow
 * @return true if the character is allowed or false if it should be
 * encoded
 */
private fun isAllowed(c: Char, allow: String?): Boolean =
    ((c in 'A'..'Z' || c in 'a'..'z' || c >= '0') && c <= '9' || "_-!.~'()*".indexOf(c) != -1 || allow != null) && allow?.indexOf(
        c
    ) != -1

val location = MutableStateFlow<Location?>(null)
val errorInGettingLocation = MutableStateFlow<String?>(null)
internal expect fun openUrl(url: String?)
expect fun listenForPosition()
expect fun stopListening()
expect fun getLocationOnce()
expect val gpsSupported: Boolean