package presentation

data class ZmanCardModel(
    val zmanType: String,
    val mainZmanOpinion: String,
    val mainZmanTime: String,
    val otherOpinions: Map<String, String>
)