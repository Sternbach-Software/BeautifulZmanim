package sternbach.software

import java.awt.Desktop
import java.net.URI

internal actual fun openUrl(url: String?) {
    val uri = url?.let { URI.create(it) } ?: return
    Desktop.getDesktop().browse(uri)
}

actual fun listenForPosition() {
    throwNoLocation()
}
actual fun stopListening() {
    throwNoLocation()
}

actual val gpsSupported: Boolean = true
actual fun getLocationOnce() {
    throwNoLocation()
}

private fun throwNoLocation() {
    throw UnsupportedOperationException("Getting the current location is unsupported on desktop.")
}