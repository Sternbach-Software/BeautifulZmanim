package sternbach.software

import kotlinx.serialization.Serializable

@Serializable
data class OpenStreetMapAPI(
    val response: List<Place>
) {
    @Serializable
    data class Place(
        val place_id: Int = 123_456_789,
        val licence: String = "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        val osm_type: String = "way",
        val osm_id: Int = 123_456_789,
        val lat: String,
        val lon: String,
        val category: String = "building",
        val type: String = "yes", //??
        val place_rank: Int,
        val importance: Double,
        val addresstype: String = "building",
        val name: String = "",
        val display_name: String,
        val boundingbox: List<String> = emptyList(),
    )
}
