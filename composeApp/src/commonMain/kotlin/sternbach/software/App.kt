package sternbach.software

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.calculateEndPadding
import androidx.compose.foundation.layout.calculateStartPadding
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Switch
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.ElevatedCard
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.State
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalLayoutDirection
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.dp
import com.kosherjava.zmanim.Zman
import com.kosherjava.zmanim.ZmanDescriptionFormatter
import com.kosherjava.zmanim.util.Location
import compose.icons.FeatherIcons
import compose.icons.feathericons.ArrowLeft
import compose.icons.feathericons.ArrowRight
import compose.icons.feathericons.Compass
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.datetime.Clock
import kotlinx.datetime.DateTimeUnit
import kotlinx.datetime.Instant
import kotlinx.datetime.TimeZone
import kotlinx.datetime.until
import presentation.ZmanCardModel
import sternbach.software.theme.AppTheme
import kotlin.math.absoluteValue

@OptIn(ExperimentalMaterial3Api::class)
@Composable
internal fun App(
    smallScreen: Boolean = false,
    nav: Navigation<Screen> = remember { Navigation(Screen.Home) }
) = AppTheme {
    val vm = remember { ZmanimViewModel(MainScope(), gpsSupported.value) }
    val now = vm.now.collectAsState(Clock.System.now())
    val zmanFormatter = remember { ZmanDescriptionFormatter() }
    Scaffold(topBar = {
        TopAppBar(
            { Text("Beautiful Zmanim") },
            navigationIcon = {
                IconButton({ nav.navigateToPrevious() }) {
                    Icon(
                        if (LocalLayoutDirection.current == LayoutDirection.Ltr) FeatherIcons.ArrowLeft
                        else FeatherIcons.ArrowRight, "Back"
                    )
                }
            },
            actions = {
                IconButton({ nav.navigateTo(Screen.InputLocation) }) {
                    Icon(FeatherIcons.Compass, "Location")
                }
            }
        )
    }) {
        Column(
            Modifier.padding(
                start = it.calculateStartPadding(LocalLayoutDirection.current),
                end = it.calculateEndPadding(LocalLayoutDirection.current),
                top = it.calculateTopPadding(),
                bottom = it.calculateBottomPadding(),
            )
        ) {

            nav.destination.collectAsState(Screen.Home).value.let {
                when (it) {
                    is Screen.Home ->
                        if(!gpsSupported.value)
                            nav.navigateTo(Screen.InputLocation, true)
                        else {
                            vm.startListeningForPosition()
                            currentLocation
                            nav.navigateTo(Screen.ZmanimScreen(null, "Zmanim for ${currentLocation.value}"))
                        }
                    is Screen.InputLocation -> InputLocationScreen(
                        smallScreen,
                        { nav.navigateTo(Screen.MultipleLocations(it)) },
                        vm
                    ) {
                        println("Lat/long selected")
                        nav.navigateTo(Screen.ZmanimScreen(null, "Zmanim for ${currentLocation.value}"))
                    }

                    is Screen.MultipleLocations -> MultipleLocationsList(it.locations) {
                        vm.getZmanimByLocationString(it.display_name) //TODO if this somehow has multiple options, the user is screwed because they can't see the screen. TODO what if they lose connection between the beggining of onClick and when this function is called again?
                    }

                    is Screen.ZmanimScreen -> {
                        if(it.zmanDescription != null) Text(it.zmanDescription, Modifier.fillMaxWidth(), textAlign = TextAlign.Center)
                        val zmanim =
                            it.zmanim?.also { println("Zmanim were passed as nav args") }
                                ?: vm.allZmanimCardModels.collectAsState(emptyList()).value.also {
                                    println(
                                        "Observing zmanim"
                                    )
                                }
                                ?: emptyList()
                        val containsValueBased = zmanim.any { it?.mainZman is Zman.ValueBased }
                        val containsDateBased = zmanim.any { it?.mainZman is Zman.DateBased }
                        if (containsValueBased && containsDateBased) ZmanimList(
                            smallScreen,
                            zmanim
                                .filter { it?.mainZman is Zman.ValueBased }
                                .let {
                                    it.ifEmpty { null }
                                } as List<ZmanCardModel<Zman.ValueBased>>?,
                            now.value,
                            vm,
                            zmanim
                                .filter { it?.mainZman is Zman.DateBased }
                                .let {
                                    it.ifEmpty { null }
                                } as List<ZmanCardModel<Zman.DateBased>>?,
                            zmanFormatter,
                            onValueBasedSelected = {
                                println("On value based selected: $it")
                                navigateToOtherOpinions(it, nav, zmanFormatter)
                            },
                            onDateBasedSelected = {
                                println("On date based selected: $it")
                                navigateToOtherOpinions(it, nav, zmanFormatter)
                            }
                        )
                        else ZmanimList(
                            smallScreen,
                            if (containsValueBased) zmanim as List<ZmanCardModel<Zman.ValueBased>>?
                            else null,
                            now.value,
                            vm,
                            if (containsDateBased) zmanim as List<ZmanCardModel<Zman.DateBased>>?
                            else null,
                            zmanFormatter,
                            onValueBasedSelected = {
                                println("On value based selected: $it")
                                navigateToOtherOpinions(it, nav, zmanFormatter)
                            },
                            onDateBasedSelected = {
                                println("On date based selected: $it")
                                navigateToOtherOpinions(it, nav, zmanFormatter)
                            }
                        )
                    }
                }
            }
        }
    }
}

private fun <T: Zman> navigateToOtherOpinions(
    it: ZmanCardModel<T>,
    nav: Navigation<Screen>,
    zmanFormatter: ZmanDescriptionFormatter
) {
    if (it.otherOpinions.isNotEmpty()) nav.navigateTo(
        Screen.ZmanimScreen(
            it
                .otherOpinions
                .map {
                    ZmanCardModel(
                        it,
                        emptyList()
                    )
                },
            zmanFormatter.formatLongDescription(it.mainZman)
        )
    )
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
private fun MultipleLocationsList(
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

@OptIn(ExperimentalMaterial3Api::class)
@Composable
private fun InputLocationScreen(
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

        if(calculatingLocation) CircularProgressIndicator()
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

@Composable
private fun ZmanimList(
    smallScreen: Boolean,
    shaaZmanisValues: List<ZmanCardModel<Zman.ValueBased>>?,
    now: Instant,
    vm: ZmanimViewModel,
    allZmanimToDisplay: List<ZmanCardModel<Zman.DateBased>>?,
    zmanFormatter: ZmanDescriptionFormatter = ZmanDescriptionFormatter(),
    onValueBasedSelected: (ZmanCardModel<Zman.ValueBased>) -> Unit = {},
    onDateBasedSelected: (ZmanCardModel<Zman.DateBased>) -> Unit = {}
) {
    LazyVerticalGrid(
        GridCells.Fixed(if (smallScreen) 2 else 6),
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
private fun TimeRemainingText(
    zman: Instant?,
    modifier: Modifier,
    now: Instant,
) {
    if (zman == null) Text(
        "N/A",
        modifier.fillMaxWidth(),
        textAlign = TextAlign.Center
    )
    else {
        val (secondsUntilZmanim, timeRemaining) = getSecondsUntilZmanAndTimeRemaining(zman, now)
        Text(
            timeRemaining,
            modifier.fillMaxWidth(),
            color = if (secondsUntilZmanim <= 0) Color.Red else Color.Green,
            textAlign = TextAlign.Center
        )
    }
}

const val SECONDS_IN_HOUR = 60 * 60


private fun getSecondsUntilZmanAndTimeRemaining(
    zman: Instant,
    now: Instant,
): Pair<Int, String> {
    val secondsUntilZmanim = now.until(zman, DateTimeUnit.SECOND).toInt()
    //println("Seconds from $now until $zman: $secondsUntilZmanim")
    return secondsUntilZmanim to secondsUntilZmanim.toHrMinSec()
        .formatted(false, secondsUntilZmanim in 0..SECONDS_IN_HOUR)
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun <T : Zman> ZmanCard(
    modifier: Modifier,
    currentTime: Instant,
    currentTimeZone: TimeZone,
    model: ZmanCardModel<T>,
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
            model.mainZman.type.friendlyNameEnglish,
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
            Modifier, (model.mainZman as Zman.DateBased).momentOfOccurrence, currentTime
        )
        val startPadding = Modifier.padding(start = 2.dp)
    }
}

/**
 * Takes a [Triple] of <hour,minute,second> and returns either e.g. "05:32:15", or "5 hr 32 min 15 sec".
 * Valid outputs: 12:34, 00:12, 00:00, 1:00:00, 1:12:00
 * Invalid outputs: "00:00:00", "00:01:00", "1:5:3"
 * */
fun Triple<Int, Int, Int>.formatted(withColons: Boolean, includeSeconds: Boolean): String {
    fun Int.formatted() = when {
        this == 0 -> "00"
        this < 10 -> "0$this"
        else -> this.toString()
    }
    return if (withColons) {
        val string = when {
            first == 0 && second != 0 -> "${if (third == 0) second else second.absoluteValue}:"
            first != 0 -> "$first:${second.absoluteValue.formatted()}:"
            second == 0 -> "00:"
            else -> TODO("Should not have happened. this=$this") //how beautiful! Also deals with first == 0 && second == 0
        }
        if (includeSeconds) string + third.formatted()
        else string
    } else timeFormattedConcisely(first, second, third, includeSeconds)
}

/**
 * Takes an hour, minute, and second, and will return a string with only those values which are not equal to 0 (e.g. "5 hr 15 sec", "5 hr 32 min 15 sec")
 * */
fun timeFormattedConcisely(hour: Int, minute: Int, second: Int, includeSeconds: Boolean): String {
    val string = StringBuilder()
    if (hour != 0) string.append("$hour hr ")
    if (minute != 0) string.append("${if (string.isEmpty()) minute else minute.absoluteValue} min ")
    if (includeSeconds && second != 0) string.append("${if (string.isEmpty()) second else second.absoluteValue} sec")
    return if (string.isEmpty()) "0 sec" else string.toString().trim()
}

fun Int.toHrMinSec(): Triple<Int, Int, Int> {
    var hour = 0
    var minute = 0
    var second = this
    minute += (second / 60)
    hour += (minute / 60)
    second %= 60
    minute %= 60
    return Triple(hour, minute, second)
}

/**
 * Copyright (C) 2007 The Android Open Source Project
 *
 * Encodes characters in the given string as '%'-escaped octets
 * using the UTF-8 scheme. Leaves letters ("A-Z", "a-z"), numbers
 * ("0-9"), and unreserved characters ("_-!.~'()*") intact. Encodes
 * all other characters with the exception of those specified in the
 * allow argument.
 *
 * @param s string to encode
 * @param allow set of additional characters to allow in the encoded form,
 * null if no characters should be skipped
 * @return an encoded version of s suitable for use as a URI component,
 * or null if s is null
 */
fun encode(s: String?, allow: String?): String? {
    if (s == null) {
        return null
    }

    // Lazily-initialized buffers.
    var encoded: StringBuilder? = null
    val oldLength = s.length

    // This loop alternates between copying over allowed characters and
    // encoding in chunks. This results in fewer method calls and
    // allocations than encoding one character at a time.
    var current = 0
    while (current < oldLength) {
        // Start in "copying" mode where we copy over allowed chars.

        // Find the next character which needs to be encoded.
        var nextToEncode = current
        while (nextToEncode < oldLength && isAllowed(s[nextToEncode], allow)) {
            nextToEncode++
        }

        // If there's nothing more to encode...
        if (nextToEncode == oldLength) {
            return if (current == 0) {
                // We didn't need to encode anything!
                s
            } else {
                // Presumably, we've already done some encoding.
                encoded!!.append(s, current, oldLength)
                encoded.toString()
            }
        }
        if (encoded == null) {
            encoded = StringBuilder()
        }
        if (nextToEncode > current) {
            // Append allowed characters leading up to this point.
            encoded.append(s, current, nextToEncode)
        } else {
            // assert nextToEncode == current
        }

        // Switch to "encoding" mode.

        // Find the next allowed character.
        current = nextToEncode
        var nextAllowed = current + 1
        while (nextAllowed < oldLength && !isAllowed(s[nextAllowed], allow)) {
            nextAllowed++
        }

        // Convert the substring to bytes and encode the bytes as
        // '%'-escaped octets.
        val toEncode = s.substring(current, nextAllowed)
        try {
            val HEX_DIGITS = "0123456789ABCDEF".toCharArray()
            val bytes = toEncode.encodeToByteArray()
            val bytesLength = bytes.size
            for (i in 0 until bytesLength) {
                encoded.append('%')
                encoded.append(HEX_DIGITS[bytes[i].toInt() and 0xf0 shr 4])
                encoded.append(HEX_DIGITS[bytes[i].toInt() and 0xf])
            }
        } catch (t: Throwable) {
            t.printStackTrace()
        }
        current = nextAllowed
    }

    // Encoded could still be null at this point if s is empty.
    return encoded?.toString() ?: s
}

/**
 * Returns true if the given character is allowed.
 *
 * @param c character to check
 * @param allow characters to allow
 * @return true if the character is allowed or false if it should be
 * encoded
 */
private fun isAllowed(c: Char, allow: String?): Boolean =
    ((c in 'A'..'Z' || c in 'a'..'z' || c >= '0') && c <= '9' || "_-!.~'()*".indexOf(c) != -1 || allow != null) && allow?.indexOf(
        c
    ) != -1

val currentLocation = MutableStateFlow<Location?>(null)
val errorInGettingLocation = MutableStateFlow<String?>(null)
internal expect fun openUrl(url: String?)
expect fun listenForPosition()
expect fun stopListening()
expect fun getLocationOnce()
expect var gpsSupported: State<Boolean>

