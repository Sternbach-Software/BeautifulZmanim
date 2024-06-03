package presentation.components

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Star
import androidx.compose.material.icons.filled.StarBorder
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.ElevatedCard
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButtonDefaults
import androidx.compose.material3.IconToggleButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.window.Dialog
import androidx.compose.ui.window.DialogProperties
import sternbach.software.kosherkotlin.Zman
import sternbach.software.kosherkotlin.ZmanDescriptionFormatter
import kotlinx.datetime.Instant
import kotlinx.datetime.TimeZone
import presentation.ZmanCardModel

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
            model.mainZman.definition.type.friendlyNameEnglish,
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

@OptIn(ExperimentalMaterial3Api::class)
@Composable
internal fun ZmanCard(
    modifier: Modifier,
    currentTime: Instant,
    currentTimeZone: TimeZone,
    zman: Zman<*>,
    zmanIsFavorite: Boolean = false,
    showMomentOfOccurenceOrDuration: Boolean = false,
    showOpinion: Boolean = true,
    showTimeRemaining: Boolean = false,
    formatter: ZmanDescriptionFormatter = ZmanDescriptionFormatter(),
    onZmanFavorited: (isFavorite: Boolean) -> Unit = {},
    content: @Composable (modifier: Modifier, zman: Instant?, now: Instant) -> Unit = { _, _, _ -> },
) {
    var displayDescription by remember { mutableStateOf(false) }

    ElevatedCard(
        onClick = {
            println("Card clicked.")
            displayDescription = true
        },
        modifier = modifier,
        elevation = CardDefaults.cardElevation(8.dp),
        shape = RoundedCornerShape(8.dp),
    ) {
        Column(verticalArrangement = Arrangement.SpaceEvenly) {
            Text(
                zman.definition.type.friendlyNameEnglish,
                Modifier.fillMaxWidth().padding(end = 8.dp),
                style = MaterialTheme.typography.titleLarge,
                textAlign = TextAlign.Center
            )
            if (showOpinion) Text(
                formatter.formatShortDescription(zman, true),
                Modifier.fillMaxWidth(),
                style = MaterialTheme.typography.titleMedium,
                textAlign = TextAlign.Center
            )
            if (showMomentOfOccurenceOrDuration) Text(
                zman.formatted(currentTimeZone, ""),
                Modifier.fillMaxWidth(),
                style = MaterialTheme.typography.bodyMedium,
                textAlign = TextAlign.Center
            )
            if (showTimeRemaining && zman is Zman.DateBased) content(
                Modifier, zman.momentOfOccurrence, currentTime
            )
            Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.Center) {

                Surface(
                    shape = CircleShape,
                    modifier = Modifier
                        .padding(6.dp)
                        .size(48.dp),
                    color = Color(0x33000000)
                ) {
                    IconToggleButton(
//                    modifier = Modifier.padding(8.dp),
                        checked = zmanIsFavorite,
                        onCheckedChange = {
                            onZmanFavorited(!zmanIsFavorite)
                        },
                        colors = IconButtonDefaults.iconToggleButtonColors(
                            checkedContentColor = Color(
                                0xffffe234
                            )
                        )
                    ) {

                        Icon(
                            modifier = modifier.graphicsLayer {
                                scaleX = 1.3f
                                scaleY = 1.3f
                            },
                            imageVector = if (zmanIsFavorite) {
                                Icons.Filled.Star
                            } else {
                                Icons.Default.StarBorder
                            },
                            contentDescription = null
                        )
                    }
                }
                /*IconButton({
                    displayDescription = true
                }) {
                    Icon(Icons.Default.Info, "description")
                }*/
                if (displayDescription) Dialog({ displayDescription = false }, DialogProperties()) {
                    Card {
                        Column(Modifier.padding(8.dp)) {
                            Text(formatter.formatLongDescription(zman.definition))
                            Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.End) {
                                TextButton(
                                    { displayDescription = false }
                                ) {
                                    Text("OK")
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
