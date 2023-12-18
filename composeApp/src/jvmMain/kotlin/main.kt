import androidx.compose.ui.unit.DpSize
import androidx.compose.ui.window.Window
import androidx.compose.ui.window.application
import androidx.compose.ui.window.rememberWindowState
import sternbach.software.App

fun main() = application {
    Window(
        title = "Beautiful Zmanim",
        state = rememberWindowState(size = DpSize.Unspecified),
        onCloseRequest = ::exitApplication,
    ) { App() }
}