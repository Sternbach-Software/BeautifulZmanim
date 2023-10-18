package presentation

import com.kosherjava.zmanim.Zman

/**
 * @param mainZmanOpinion the user-readable opinion of how the zman was generated (e.g. 72 minutes)
 * @param mainZmanTime the user-readable time/moment the zman will occur (e.g. 1:23 PM)
 * */
data class ZmanCardModel(
    val mainZman: Zman<*>,
    val otherOpinions: List<Zman<*>>
)