package sternbach.software

import sternbach.software.kosherkotlin.Zman
import presentation.ZmanCardModel

sealed class Screen {
    object Home : Screen()
    object InputLocation : Screen()
    data class MultipleLocations(val locations: List<OpenStreetMapAPI.Place>): Screen()
    data class ZmanimScreen(val zmanim: List<ZmanCardModel>?, val zmanDescription: String? = null): Screen()
}
