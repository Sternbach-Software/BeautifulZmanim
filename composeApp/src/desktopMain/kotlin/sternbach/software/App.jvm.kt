package sternbach.software

import androidx.compose.runtime.SnapshotMutationPolicy
import androidx.compose.runtime.derivedStateOf
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

actual var gpsSupported: androidx.compose.runtime.State<Boolean> = ImmutableBool(false)
actual fun getLocationOnce() {
    throwNoLocation()
}

private fun throwNoLocation() {
    throw UnsupportedOperationException("Getting the current location is unsupported on desktop.")
}