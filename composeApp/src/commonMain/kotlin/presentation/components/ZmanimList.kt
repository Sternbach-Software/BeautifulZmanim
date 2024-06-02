package presentation.components

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridScope
import androidx.compose.foundation.lazy.staggeredgrid.LazyVerticalStaggeredGrid
import androidx.compose.foundation.lazy.staggeredgrid.StaggeredGridCells
import androidx.compose.foundation.lazy.staggeredgrid.StaggeredGridItemSpan
import androidx.compose.foundation.lazy.staggeredgrid.items
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Switch
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import sternbach.software.kosherkotlin.Zman
import sternbach.software.kosherkotlin.ZmanDescriptionFormatter
import kotlinx.datetime.Instant
import presentation.ZmanCardModel
import sternbach.software.ZmanimViewModel

@Composable
internal fun ZmanimList(
    smallScreen: Boolean,
    shaaZmanisValues: List<ZmanCardModel>?,
    now: Instant,
    vm: ZmanimViewModel,
    allZmanimToDisplay: List<ZmanCardModel>?,
    zmanFormatter: ZmanDescriptionFormatter = ZmanDescriptionFormatter(),
    onValueBasedSelected: (ZmanCardModel) -> Unit = {},
    onDateBasedSelected: (ZmanCardModel) -> Unit = {}
) {
    LazyColumn(
//        GridCells.Fixed(if (smallScreen) 2 else 6),
        Modifier.fillMaxWidth()/*, state*/
    ) {
        shaaZmanisValues?.let {
            println("Shaa zmanis received: $it")
            items(it) { model ->
                ZmanCard(
                    Modifier.fillMaxSize().padding(8.dp),
                    now,
                    ZmanimViewModel.tz,
                    model,
                    formatter = zmanFormatter,
                    showOpinion = true,
                    showMomentOfOccurenceOrDuration = true,
                    onClick = {
                        println("onValueBasedSelected($model)")
                        onValueBasedSelected(model)
                    }
                )
            }
        }
        allZmanimToDisplay?.let {
            println("Zmanim received: $it")
            items(
                it
            ) { model ->
                ZmanCard(
                    Modifier.fillMaxSize().padding(8.dp),
                    now,
                    ZmanimViewModel.tz,
                    model,
                    formatter = zmanFormatter,
                    showMomentOfOccurenceOrDuration = true,
                    showTimeRemaining = true,
                    onClick = {
                        println("onDateBasedSelected($model)")
                        onDateBasedSelected(model)
                    }
                ) { modifier, zman, now ->
                    TimeRemainingText(zman, modifier, now)
                }
            }
        }
    }
}

@Composable
internal fun ZmanimList(
    allZmanim: List<Zman<*>>?,
    favoriteZmanim: List<Zman<*>>?,
    onZmanFavorited: (isFavorite: Boolean, Zman<*>) -> Unit,
    now: Instant,
    zmanFormatter: ZmanDescriptionFormatter = ZmanDescriptionFormatter(),
) {
    var onlyUpcoming by remember { mutableStateOf(false) }

    Column {

        Row(
            Modifier.fillMaxWidth(),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.End
        ) {
            Text("Upcoming times", Modifier.clickable { onlyUpcoming = !onlyUpcoming })
            Switch(onlyUpcoming, { onlyUpcoming = it }, Modifier.padding(end = 8.dp))
        }
        LazyVerticalStaggeredGrid(
            StaggeredGridCells.Adaptive(150.dp),
            Modifier.fillMaxWidth()/*, state*/
        ) {
            item(span = StaggeredGridItemSpan.FullLine) {
                Text(
                    "Favorite zmanim",
                    Modifier.padding(8.dp),
                    style = MaterialTheme.typography.headlineMedium
                )
            }
            ZmanList(favoriteZmanim, onlyUpcoming, true, now, zmanFormatter, onZmanFavorited)

            item(span = StaggeredGridItemSpan.FullLine) {
                Text(
                    "All zmanim",
                    Modifier.padding(8.dp),
                    style = MaterialTheme.typography.headlineMedium
                )
            }
            ZmanList(
                if(allZmanim == null) null
                else if (favoriteZmanim == null) allZmanim
                else allZmanim - favoriteZmanim,
                onlyUpcoming,
                false,
                now,
                zmanFormatter,
                onZmanFavorited
            )
        }
    }
}

private fun LazyStaggeredGridScope.ZmanList(
    zmanim: List<Zman<*>>?,
    onlyUpcoming: Boolean,
    isFavorite: Boolean,
    now: Instant,
    zmanFormatter: ZmanDescriptionFormatter,
    onZmanFavorited: (isFavorite: Boolean, Zman<*>) -> Unit
) {
    if (zmanim != null) {
        println("Zmanim received: $zmanim")
        items(
            zmanim.let {
                if (onlyUpcoming) it.filter {
                    if (it is Zman.DateBased) it.momentOfOccurrence?.let { it > now } == true
                    else true
                }
                else it
            }
        ) { zman ->
            ZmanCard(
                Modifier.fillMaxSize().padding(8.dp),
                now,
                ZmanimViewModel.tz,
                zman,
                zmanIsFavorite = isFavorite,
                formatter = zmanFormatter,
                showMomentOfOccurenceOrDuration = true,
                showTimeRemaining = true,
                onZmanFavorited = {
                    println("onZmanFavorited($zman)")
                    onZmanFavorited(it, zman)
                }
            ) { modifier, instant, now ->
                if (zman is Zman.DateBased) TimeRemainingText(instant, modifier, now)
            }
        }
    }
}