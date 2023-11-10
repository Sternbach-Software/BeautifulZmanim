package presentation.screens

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.ElevatedCard
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Switch
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import sternbach.software.kosherkotlin.Zman
import sternbach.software.kosherkotlin.ZmanDescriptionFormatter
import kotlinx.coroutines.MainScope
import kotlinx.datetime.DateTimeUnit
import kotlinx.datetime.Instant
import kotlinx.datetime.TimeZone
import kotlinx.datetime.until
import presentation.ZmanCardModel
import sternbach.software.OpenStreetMapAPI
import sternbach.software.ZmanimViewModel
import sternbach.software.gpsSupported
import kotlin.math.absoluteValue

@OptIn(ExperimentalMaterial3Api::class)
@Composable
internal fun InputLocationScreen(
    smallScreen: Boolean,
    onMultipleLocations: (List<OpenStreetMapAPI.Place>) -> Unit,
    zmanimViewModel: ZmanimViewModel = remember { ZmanimViewModel(MainScope()) },
    onLocationUpdated: () -> Unit = {},
) {

    var locationString by remember { mutableStateOf("123 Jane Street") }
    var longitude by remember { mutableStateOf("35.21633") }
    var latitude by remember { mutableStateOf("31.76904") }
    var elevation by remember { mutableStateOf("754") }
    var errorMessage by remember { mutableStateOf("") }
    var calculatingLocation by remember { mutableStateOf(false) }

    val isOnline = zmanimViewModel.isOnline.collectAsState(false)
    val calculatingZmanim = zmanimViewModel.calculatingZmanim.collectAsState(false)
    val listeningForPosition = zmanimViewModel.listeningForPosition.collectAsState(false)

    Column(
        modifier = Modifier.fillMaxSize().padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {

        val fillMaxWidth = Modifier.fillMaxWidth()
        val fillMaxWidthPlusPadding = fillMaxWidth.padding(16.dp)

        Text(
            text = "Beautiful Zmanim",
            style = MaterialTheme.typography.titleMedium,
            modifier = Modifier.padding(bottom = 8.dp)
        )

        if (errorMessage.isNotBlank()) Text(
            errorMessage,
            color = Color.Red,
            textAlign = TextAlign.Center
        )

        if (gpsSupported.value) Row {
            Switch(
                checked = listeningForPosition.value,
                onCheckedChange = {
                    if (it) zmanimViewModel.startListeningForPosition()
                    else zmanimViewModel.stopListeningForPosition()
                },
            )
            Text("Get live zmanim")
        }

        val content = @Composable {
            println("Is online: ${isOnline.value}")
            if (isOnline.value) Column(horizontalAlignment = Alignment.CenterHorizontally) {
                Text(
                    text = "Enter your location below"
                )
                Text(
                    "Address, state, zip, country:"
                )
                OutlinedTextField(
                    value = locationString,
                    onValueChange = { locationString = it },
                    label = { Text("Location") },
                    singleLine = true,
                )
                Button(
                    onClick = {
                        zmanimViewModel.getZmanimByLocationString(
                            locationString,
                            {
                                errorMessage = "No location found. Please try again."
                            },
                            {
                                onLocationUpdated()
                            },
                            onMultipleLocations
                        )
                    }
                ) {
                    Text("Get zmanim by location")
                }
            }
            Column(horizontalAlignment = Alignment.CenterHorizontally) {
                Text(
                    "${if (isOnline.value) "Alternatively, you can p" else "P"}ut in your coordinates (and optionally your elevation to get more accurate results, if you would like to see opinions which factor in elevation):",
                    textAlign = TextAlign.Center
                )

                val content = @Composable {
                    OutlinedTextField(
                        value = longitude,
                        onValueChange = { longitude = it },
                        label = { Text("Longitude") },
                        singleLine = true
                    )
                    OutlinedTextField(
                        value = latitude,
                        onValueChange = { latitude = it },
                        label = { Text("Latitude") },
                        singleLine = true
                    )
                    OutlinedTextField(
                        value = elevation,
                        onValueChange = { elevation = it },
                        label = { Text("Elevation") },
                        singleLine = true
                    )
                }
                if (smallScreen) Column { content() }
                else Row(
                    horizontalArrangement = Arrangement.spacedBy(8.dp),
                    content = { content() })
                Button(
                    onClick = {

//                openUrl("https://www.google.com/maps/search/?api=1&query=$latitude,$longitudde")
                        if (
                            latitude.toDoubleOrNull()?.let {
                                longitude.toDoubleOrNull()?.let { it1 ->
                                    zmanimViewModel.getZmanimByLatLong(
                                        it,
                                        it1,
                                        elevation.toDoubleOrNull() ?: 0.0
                                    )

                                    onLocationUpdated()
                                }
                            } == null
                        ) {

                            println("Error parsing lat and long")
                            errorMessage = "Latitude or longitude values invalid"
                        }
                    }
                ) {
                    Text("Get zmanim by latitude and longitude")
                }
            }
        }
        val arrangment =
            if (isOnline.value && !smallScreen) /*only one widget will display*/ Arrangement.SpaceEvenly
            else Arrangement.Center
        if (smallScreen) {
            Column(
                verticalArrangement = arrangment,
                horizontalAlignment = Alignment.CenterHorizontally
            ) { content() }
        } else Row(
            horizontalArrangement = arrangment
        ) { content() }

        if (calculatingLocation) CircularProgressIndicator()
        else Text("Location: ${zmanimViewModel.location.collectAsState(null).value?.locationName ?: "N/A"}")
        if (calculatingZmanim.value) CircularProgressIndicator()
        /* scrolls to active item, but recomposes too often
        val zmanim =
            allZmanimToDisplay.value
        println("Zmanim: $zmanim")
        val indexOfUpcomingZman = if(zmanim != null)  remember {  //only calculate on initial composition
            zmanim
                .indexOfFirst {
                    it
                        .mainZman
                        .momentOfOccurrence
                        ?.let { it >= now.value } == true
                }
                .coerceAtLeast(0)
        } else 0
        println("indexOfUpcomingZman = $indexOfUpcomingZman")
        val state = rememberLazyGridState(
            indexOfUpcomingZman
        )
        if(indexOfUpcomingZman > 0) {
            println("Scrolling to $indexOfUpcomingZman")
//          onInitialComposition:
            rememberCoroutineScope().launch(Dispatchers.Main.immediate) {
                state.animateScrollToItem(indexOfUpcomingZman)
            }
        }*/
    }
}