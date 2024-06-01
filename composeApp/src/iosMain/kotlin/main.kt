import androidx.compose.ui.window.ComposeUIViewController
import sternbach.software.App
import platform.UIKit.UIViewController

@Suppress("unused")
fun MainViewController(): UIViewController {
    return ComposeUIViewController { App(true) }
}
