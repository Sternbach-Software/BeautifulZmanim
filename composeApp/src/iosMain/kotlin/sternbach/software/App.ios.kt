package sternbach.software

import platform.Foundation.NSURL
import platform.UIKit.UIApplication

internal actual fun openUrl(url: String?) {
    val nsUrl = url?.let { NSURL.URLWithString(it) } ?: return
    UIApplication.sharedApplication.openURL(nsUrl)
}
actual fun listenForPosition() {
    TODO()
}
actual fun stopListening() {
    TODO()
}
actual fun getLocationOnce() {
    TODO()
}
actual val gpsSupported: Boolean = true