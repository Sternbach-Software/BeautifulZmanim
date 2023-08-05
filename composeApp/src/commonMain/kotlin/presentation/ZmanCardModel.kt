package presentation

import com.kosherjava.zmanim.Zman
import com.kosherjava.zmanim.ZmanOpinion
import com.kosherjava.zmanim.ZmanType

/**
 * @param mainZmanOpinion the user-readable opinion of how the zman was generated (e.g. 72 minutes)
 * @param mainZmanTime the user-readable time/moment the zman will occur (e.g. 1:23 PM)
 * */
data class ZmanCardModel<T: Zman<A, B>, A: ZmanOpinion<B>, B>(
    val mainZman: T,
    val otherOpinions: List<T>
)