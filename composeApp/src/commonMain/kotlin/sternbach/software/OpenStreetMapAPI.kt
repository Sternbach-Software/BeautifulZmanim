package sternbach.software

data class OpenStreetMapAPI(
    val response: List<Place>
) {
    data class Place(
        val place_id: Int = 123_456_789,
        val licence: String = "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        val osm_type: String = "way",
        val osm_id: Int = 123_456_789,
        val boundingbox: List<String> = emptyList(),
        val lat: String,
        val lon: String,
        val display_name: String,
        val place_rank: Int,
        val category: String = "building",
        val type: String = "yes", //??
        val importance: Double,
    )
}
