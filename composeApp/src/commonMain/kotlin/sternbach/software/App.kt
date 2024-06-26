package sternbach.software

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.calculateEndPadding
import androidx.compose.foundation.layout.calculateStartPadding
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.State
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalLayoutDirection
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.LayoutDirection
import compose.icons.FeatherIcons
import compose.icons.feathericons.ArrowLeft
import compose.icons.feathericons.ArrowRight
import compose.icons.feathericons.Compass
import compose.icons.feathericons.Settings
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.transform
import kotlinx.datetime.Clock
import presentation.ZmanCardModel
import presentation.components.ListOfAllZmanDefinitions
import presentation.components.ZmanimList
import presentation.screens.InputLocationScreen
import presentation.screens.MultipleLocationsList
import presentation.screens.SettingsScreen
import sternbach.software.kosherkotlin.Zman
import sternbach.software.kosherkotlin.ZmanDescriptionFormatter
import sternbach.software.kosherkotlin.util.Location
import sternbach.software.theme.AppTheme

@OptIn(ExperimentalMaterial3Api::class)
@Composable
internal fun App(
    smallScreen: Boolean = false,
    nav: Navigation<Screen> = remember { Navigation(Screen.Home) }
) = AppTheme {
    val vm = remember { ZmanimViewModel(MainScope(), gpsSupported.value) }
    val now = vm.now.collectAsState(Clock.System.now())
    val zmanFormatter = remember { ZmanDescriptionFormatter() }
    Scaffold(
        topBar = {
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
                    /*IconButton({ nav.navigateTo(Screen.Settings.Root) }) {
                        Icon(FeatherIcons.Settings, "Settings")
                    }*/
                }
            )
        }
    ) {
        Column(
            Modifier.padding(
                start = it.calculateStartPadding(LocalLayoutDirection.current),
                end = it.calculateEndPadding(LocalLayoutDirection.current),
                top = it.calculateTopPadding(),
                bottom = it.calculateBottomPadding(),
            )
        ) {

            nav.destination.collectAsState(Screen.Home).value.let {
                val location = currentLocation.collectAsState(null)
                when (it) {
                    is Screen.Home ->
                        if (!gpsSupported.value)
                            nav.navigateTo(Screen.InputLocation, true)
                        else {
                            vm.startListeningForPosition()
                            nav.navigateTo(Screen.ZmanimScreen(null, null), false)
                        }

                    is Screen.InputLocation -> InputLocationScreen(
                        smallScreen,
                        { nav.navigateTo(Screen.MultipleLocations(it)) },
                        vm
                    ) {
                        println("Lat/long selected")
                        nav.navigateTo(Screen.ZmanimScreen(null, null))
                    }

                    is Screen.MultipleLocations -> MultipleLocationsList(it.locations) {
                        println("Location selected: ${it.display_name}")
                        vm.getZmanimByLocationString(
                            it.display_name,
                            onLocationFound = {
                                nav.navigateTo(Screen.ZmanimScreen(null, it.display_name))
                            },
                            onNoLocations = {},
                            onMultipleLocations = {
                                nav.navigateTo(Screen.ZmanimScreen(null, it.firstOrNull()?.display_name))
                            }
                        ) //TODO if this somehow has multiple options, the user is screwed because they can't see the screen. TODO what if they lose connection between the beggining of onClick and when this function is called again?
                    }

                    is Screen.Settings -> when (it) {
                        is Screen.Settings.Root -> SettingsScreen(nav)
                        is Screen.Settings.Opinions -> ListOfAllZmanDefinitions(vm)
                    }

                    is Screen.ZmanimScreen -> {
                        Text(
                            it.zmanDescription ?: "Zmanim for ${location.value?.locationName}",
                            Modifier.fillMaxWidth(),
                            textAlign = TextAlign.Center
                        )
                        val zmanim = vm.allZmanim.transform { emit(it?.filter { it.momentOfOccurrence != null }) }.collectAsState(emptyList())
                        val favoritedZmanim = vm.favoriteZmanim.collectAsState(emptyList())
                        ZmanimList(
                            zmanim.value ?: emptyList(),
                            favoritedZmanim.value ?: emptyList(),
                            { isFavorite, zman ->
                                println("On date based selected: $it")
                                if(isFavorite) vm.favoriteZman(zman)
                                else vm.unfavoriteZman(zman)
//                                navigateToOtherOpinions(it, nav, zmanFormatter)
                            },
                            now.value,
                            zmanFormatter,
                        )
                    }
                }
            }
        }
    }
}

private fun navigateToOtherOpinions(
    it: ZmanCardModel,
    nav: Navigation<Screen>,
    zmanFormatter: ZmanDescriptionFormatter
) {
    nav.navigateTo(
        Screen.ZmanimScreen(
            it
                .otherOpinions
                .map {
                    ZmanCardModel(
                        it,
                        emptyList()
                    )
                }
                .ifEmpty {
                    listOf(
                        ZmanCardModel(
                            it.mainZman,
                            emptyList()
                        )
                    )
                },
            zmanFormatter.formatLongDescription(it.mainZman)
        )
    )
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
expect fun listenForPosition()
expect fun stopListening()
expect fun getLocationOnce()
expect var gpsSupported: State<Boolean>

