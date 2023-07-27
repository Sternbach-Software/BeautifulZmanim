package sternbach.software

import kotlinx.browser.window

internal actual fun openUrl(url: String?) {
    url?.let { window.open(it) }
//    println(jsJodaTz.ZoneId.systemDefault().rules().isDaylightSavings(jsJodaTz.Instant.now()))

}
@JsModule("@js-joda/timezone")
@JsNonModule
external object JsJodaTimeZoneModule
private val jsJodaTz = JsJodaTimeZoneModule