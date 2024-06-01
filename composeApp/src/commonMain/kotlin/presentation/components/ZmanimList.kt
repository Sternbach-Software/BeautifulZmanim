package presentation.components

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.ElevatedCard
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import sternbach.software.kosherkotlin.Zman
import sternbach.software.kosherkotlin.ZmanDescriptionFormatter
import kotlinx.datetime.DateTimeUnit
import kotlinx.datetime.Instant
import kotlinx.datetime.TimeZone
import kotlinx.datetime.until
import presentation.ZmanCardModel
import sternbach.software.ZmanimViewModel
import kotlin.math.absoluteValue
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