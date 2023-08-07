package sternbach.software

import com.kosherjava.zmanim.util.Location
import kotlinx.browser.window
import kotlinx.datetime.Clock
import kotlinx.datetime.Instant

private var geolocation: dynamic = null
private var listener: dynamic = null
private var options: Options? = null

internal actual fun openUrl(url: String?) {
    url?.let { window.open(it) }
//    println(jsJodaTz.ZoneId.systemDefault().rules().isDaylightSavings(jsJodaTz.Instant.now()))

}

private data class Options(
    val enableHighAccuracy: Boolean = true,
    val timeout: Int = 10_000,
    val maximumAge: Int = 0,
)
actual fun listenForPosition() {
    initGeolocationAndOptions()
    initListener()
}

private fun initListener() {
    listener = geolocation.watchPosition(::onSuccess, ::onError, options)
}

private fun initGeolocationAndOptions() {
    geolocation = window.navigator.asDynamic().geolocation
    println(geolocation)
    options = Options()
}

actual fun stopListening() {
    geolocation.clearWatch(listener)
}

fun onSuccess(position: dynamic) {
    println("On success")
    val newLocation = Location(
        position.coords.latitude.unsafeCast<Double>(),
        position.coords.longitude.unsafeCast<Double>(),

        position.coords.altitude?.unsafeCast<Double?>(),
        position.coords.accuracy?.unsafeCast<Double?>(),
        runCatching { position.timestamp.unsafeCast<Long>() }.getOrNull() ?: Clock.System.now().toEpochMilliseconds(),
    )
    location.value = newLocation
    println("New location: $newLocation")
}

fun onError(error: dynamic) {
    println("On error")
    val message = error.message.unsafeCast<String>()
    println(message)
    errorInGettingLocation.value = message
    /*when (error.code) {
        error.PERMISSION_DENIED -> {
            *//*TODO*//*
        }

        error.POSITION_UNAVAILABLE -> {
            *//*TODO*//*
        }

        error.TIMEOUT -> {
            *//*TODO*//*
        }
    }*/
}

@JsModule("@js-joda/timezone")
@JsNonModule
external object JsJodaTimeZoneModule

private val jsJodaTz = JsJodaTimeZoneModule
actual val gpsSupported: Boolean = true
actual fun getLocationOnce() {
    initGeolocationAndOptions()
    geolocation.getCurrentPosition(::onSuccess, ::onError, options)
}