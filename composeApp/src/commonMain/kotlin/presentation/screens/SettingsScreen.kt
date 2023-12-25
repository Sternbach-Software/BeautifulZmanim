package presentation.screens

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.defaultMinSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.requiredHeight
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.selection.toggleable
import androidx.compose.material3.Checkbox
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.mutableStateMapOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.unit.dp
import kotlinx.coroutines.flow.transform
import sternbach.software.Navigation
import sternbach.software.Screen
import sternbach.software.ZmanimViewModel
import sternbach.software.kosherkotlin.ZmanDescriptionFormatter
import sternbach.software.kosherkotlin.metadata.ZmanDefinition

@Composable
fun SettingsScreen(
    nav: Navigation<Screen>,
) {
    val settings =
        listOf(Screen.Settings.Opinions to ("Zmanim" to "Choose which zmanim appear in the list"))
    for ((screen, labels) in settings) {
        Column(Modifier
            .clickable {
                nav.navigateTo(screen)
            }
            .fillMaxWidth()
            .padding(16.dp)
        ) {
            Text(text = labels.first, style = MaterialTheme.typography.labelLarge)
            Text(text = labels.second, style = MaterialTheme.typography.labelMedium)
        }
    }
}