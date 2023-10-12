package sternbach.software

import com.kosherjava.zmanim.Zman
import presentation.ZmanCardModel

sealed class Screen {
    object InputLocation : Screen()
    data class MultipleLocations(val locations: List<OpenStreetMapAPI.Place>): Screen()
    data class ZmanimScreen(val zmanim: List<ZmanCardModel<Zman>>?, val zmanDescription: String? = null): Screen()
}
