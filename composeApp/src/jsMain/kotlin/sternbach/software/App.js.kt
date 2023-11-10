package sternbach.software

import androidx.compose.runtime.MutableState
import androidx.compose.runtime.mutableStateOf
import sternbach.software.kosherkotlin.util.Location
import kotlinx.browser.window
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.flow.collectLatest
import kotlinx.coroutines.launch
import kotlinx.datetime.Clock

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
    println("geolocation: $geolocation")
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
    currentLocation.value = newLocation
    println("New location: $newLocation")
}
val vm by lazy { ZmanimViewModel(MainScope()) }
fun onError(error: dynamic) {
    println("On error")
    val message = error.message.unsafeCast<String>()
    println(message)
    (gpsSupported as MutableState<Boolean>).value = false
    if(error.code == error.POSITION_UNAVAILABLE) MainScope().launch(Dispatchers.Default) {
        vm.isOnline.collectLatest {
            if(it) {
                (gpsSupported as MutableState<Boolean>).value = true
            }
        }
    }
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
actual var gpsSupported: androidx.compose.runtime.State<Boolean> = mutableStateOf(true).also { state ->
//    getIsOnline {
//        state.value = it
//    }
}

actual fun getLocationOnce() {
    initGeolocationAndOptions()
    geolocation.getCurrentPosition(::onSuccess, ::onError, options)
}