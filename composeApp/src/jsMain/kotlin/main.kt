import sternbach.software.App
import org.jetbrains.skiko.wasm.onWasmReady

fun main() {
    onWasmReady {
        BrowserViewportWindow("Beautiful Zmanim") {
            App()
        }
    }
}
