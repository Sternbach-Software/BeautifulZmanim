package presentation.screens

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Card
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import sternbach.software.OpenStreetMapAPI

@OptIn(ExperimentalMaterial3Api::class)
@Composable
internal fun MultipleLocationsList(
    possibleLocations: List<OpenStreetMapAPI.Place>,
    onLocationSelected: (OpenStreetMapAPI.Place) -> Unit,
) {
    Column(
        modifier = Modifier.fillMaxSize().padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Text("There were multiple locations with that name, please choose one:")
        LazyColumn {
            items(possibleLocations.sortedBy { it.display_name.length }) {
                Card(
                    modifier = Modifier.fillParentMaxWidth().padding(bottom = 8.dp),
                    onClick = { onLocationSelected(it) }
                ) {
                    Text(
                        it.display_name,
                        Modifier.padding(8.dp).fillMaxWidth(),
                        textAlign = TextAlign.Center
                    )
                }
            }
        }
    }
}