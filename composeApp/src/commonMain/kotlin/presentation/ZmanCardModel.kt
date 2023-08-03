package presentation

import zmanim.Zman
import zmanim.ZmanType

/**
 * @param mainZmanOpinion the user-readable opinion of how the zman was generated (e.g. 72 minutes)
 * @param mainZmanTime the user-readable time/moment the zman will occur (e.g. 1:23 PM)
 * */
data class ZmanCardModel<T: Zman>(
    val zmanType: ZmanType,
    val mainZmanOpinion: String,
    val mainZmanTime: String,
    val otherOpinions: List<T>
)