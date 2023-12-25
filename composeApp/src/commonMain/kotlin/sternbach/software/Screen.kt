package sternbach.software

import sternbach.software.kosherkotlin.Zman
import presentation.ZmanCardModel

sealed class Screen {
    data object Home : Screen()
    data object InputLocation : Screen()
    sealed class Settings : Screen() {
        data object Root : Settings()
        data object Opinions : Settings()
    }
    data class MultipleLocations(val locations: List<OpenStreetMapAPI.Place>): Screen()
    data class ZmanimScreen(val zmanim: List<ZmanCardModel>?, val zmanDescription: String? = null): Screen()
}
