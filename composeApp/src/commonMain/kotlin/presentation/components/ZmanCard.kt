package presentation.components

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
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
import kotlin.math.absoluteValue
@OptIn(ExperimentalMaterial3Api::class)
@Composable
internal fun ZmanCard(
    modifier: Modifier,
    currentTime: Instant,
    currentTimeZone: TimeZone,
    model: ZmanCardModel,
    showMomentOfOccurenceOrDuration: Boolean = false,
    showOpinion: Boolean = true,
    showTimeRemaining: Boolean = false,
    formatter: ZmanDescriptionFormatter = ZmanDescriptionFormatter(),
    onClick: () -> Unit = {},
    content: @Composable (modifier: Modifier, zman: Instant?, now: Instant) -> Unit = { _, _, _ -> },
) = ElevatedCard(
    onClick = {
        println("Card clicked.")
        onClick()
    },
    modifier = modifier,
    elevation = CardDefaults.cardElevation(8.dp),
    shape = RoundedCornerShape(8.dp),
) {
    Column(verticalArrangement = Arrangement.SpaceEvenly) {
        Text(
            model.mainZman.rules.type.friendlyNameEnglish,
            Modifier.fillMaxWidth(),
            style = MaterialTheme.typography.titleLarge,
            textAlign = TextAlign.Center
        )
        if (showOpinion) Text(
            formatter.formatShortDescription(model.mainZman, true),
            Modifier.fillMaxWidth(),
            style = MaterialTheme.typography.titleMedium,
            textAlign = TextAlign.Center
        )
        if (showMomentOfOccurenceOrDuration) Text(
            model.mainZman.formatted(currentTimeZone, ""),
            Modifier.fillMaxWidth(),
            style = MaterialTheme.typography.bodyMedium,
            textAlign = TextAlign.Center
        )
        if (showTimeRemaining && model.mainZman is Zman.DateBased) content(
            Modifier, (model.mainZman).momentOfOccurrence, currentTime
        )
        val startPadding = Modifier.padding(start = 2.dp)
    }
}
