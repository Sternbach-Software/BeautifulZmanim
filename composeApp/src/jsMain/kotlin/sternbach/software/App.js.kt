package sternbach.software

import kotlinx.browser.window
import kotlinx.datetime.Clock
import kotlinx.datetime.Instant

internal actual fun openUrl(url: String?) {
    data class Config(
        val enableHighAccuracy: Boolean = true,
        val timeout: Int = 10_000,
        val maximumAge: Int = 0,
    )

    val geolocation = window.navigator.asDynamic().geolocation
    println(geolocation)
    println(geolocation.getCurrentPosition(::onSuccess, ::onError, Config()))
    url?.let { window.open(it) }
//    println(jsJodaTz.ZoneId.systemDefault().rules().isDaylightSavings(jsJodaTz.Instant.now()))

}

fun onSuccess(position: dynamic) {
    println("On success")
    println(position)
    println(position.coords)
    println(position.coords.latitude)
    println(position.coords.longitude)
    println(position.coords.altitude)
    val timestamp = position.timestamp
    val longTimestamp = /*runCatching {  timestamp.unsafeCast<String>().toLong() }.getOrNull() ?:*/ runCatching { timestamp.unsafeCast<Long>() }.getOrNull()
    println("Timestamp: $timestamp, longTimestamp: $longTimestamp")
    println("Last got location: ${if(longTimestamp == null) Clock.System.now() else Instant.fromEpochMilliseconds(longTimestamp)}")
}

fun onError(error: dynamic) {
    println("On error")
    println(error.message)
    when (error.code) {
        error.PERMISSION_DENIED -> {
            /*TODO*/
        }
        error.POSITION_UNAVAILABLE -> {
            /*TODO*/
        }
        error.TIMEOUT -> {
            /*TODO*/
        }
    }
}

@JsModule("@js-joda/timezone")
@JsNonModule
external object JsJodaTimeZoneModule

private val jsJodaTz = JsJodaTimeZoneModule