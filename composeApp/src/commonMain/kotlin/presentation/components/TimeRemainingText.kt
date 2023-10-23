package presentation.components

import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.style.TextAlign
import kotlinx.datetime.DateTimeUnit
import kotlinx.datetime.Instant
import kotlinx.datetime.until
import kotlin.math.absoluteValue

@Composable
internal fun TimeRemainingText(
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