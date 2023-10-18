package sternbach.software

import android.annotation.SuppressLint
import android.app.Application
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.location.Geocoder
import android.location.Location
import android.location.LocationManager
import android.location.LocationRequest
import android.net.Uri
import android.os.Build
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.core.content.ContextCompat
import com.google.android.gms.common.ConnectionResult
import com.google.android.gms.common.GoogleApiAvailability
import com.kosherjava.zmanim.util.GeoLocation
import kotlinx.coroutines.DelicateCoroutinesApi
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.collectLatest
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.launch
import sternbach.software.ZmanimViewModel.Companion.toLocation
import java.util.Locale
import java.util.concurrent.Executors


class AndroidApp : Application() {
    companion object {
        lateinit var INSTANCE: AndroidApp
        lateinit var locationManager: LocationManager
    }

    override fun onCreate() {
        super.onCreate()
        INSTANCE = this
    }
}

class AppActivity : ComponentActivity() {

    var nav: Navigation<Screen>? = null
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        AndroidApp.locationManager = getSystemService(Context.LOCATION_SERVICE) as LocationManager
        setContent {
            //check if permission granted:
            val hasLocationPermission = (ContextCompat.checkSelfPermission(
                this,
                android.Manifest.permission.ACCESS_FINE_LOCATION
            )
                    == PackageManager.PERMISSION_GRANTED)
            val content = @Composable {
                nav = remember { Navigation(Screen.Home) }
                App(true, nav!!)
            }
            if(!hasLocationPermission) {
                PermissionBox(
                    Modifier,
                    permissions = listOf(android.Manifest.permission.ACCESS_FINE_LOCATION),
                    description = "This app requires location permission to work",
                    onGranted = {
                        println("Permissions granted: $it")
                        listenForPosition()
                        content()
                    }
                )
            } else {
                listenForPosition()
                content()
            }

        }
    }

    @Deprecated("Deprecated in Java")
    override fun onBackPressed() {
        if(nav?.navigateToPrevious() == false) super.onBackPressed()
    }
}

@Preview
@Composable
fun AndroidAppPreview() {
    App(true)
}

internal actual fun openUrl(url: String?) {
    val uri = url?.let { Uri.parse(it) } ?: return
    val intent = Intent().apply {
        action = Intent.ACTION_VIEW
        data = uri
        addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
    }
    AndroidApp.INSTANCE.startActivity(intent)
}
/**
 * Check if google play services installed (so that it can be installed on kosher phones)
 * */
fun isGooglePlayServicesAvailable(context: Context) =
    GoogleApiAvailability.getInstance()
        .isGooglePlayServicesAvailable(context) == ConnectionResult.SUCCESS
@OptIn(DelicateCoroutinesApi::class)
suspend fun getGeoLocation(location: Location, context: Context, onLocationNameAvailable: suspend (GeoLocation) -> Unit) {
    val geo = Geocoder(context, Locale.getDefault())
    if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) geo.getFromLocation(
        location.latitude,
        location.longitude, 1) {
        val mainAddress = it[0]
        GlobalScope.launch {
            onLocationNameAvailable(
                GeoLocation(
                    "${mainAddress.featureName}, ${mainAddress.locality}, ${mainAddress.adminArea}, ${mainAddress.countryName}",
                    location.latitude,
                    location.longitude,
                    location.altitude, ZmanimViewModel.tz
                )
            )
        }
    } else {
        val addresses = geo.getFromLocation(location.latitude, location.longitude, 1)
        if (addresses!!.isEmpty()) {
            onLocationNameAvailable(
                GeoLocation(
                    "Location name unavailable",
                    location.latitude,
                    location.longitude,
                    location.altitude,
                    ZmanimViewModel.tz
                )
            )
        } else {
            val mainAddress = addresses!![0]
            onLocationNameAvailable(
                GeoLocation(
                    "${mainAddress.featureName}, ${mainAddress.locality}, ${mainAddress.adminArea}, ${mainAddress.countryName}",
                    location.latitude,
                    location.longitude,
                    location.altitude,
                    ZmanimViewModel.tz
                )
            )
        }
    }
}

@SuppressLint("MissingPermission")
private fun getLocation(locationManager: LocationManager, context: Context): Flow<GeoLocation> = flow {
    locationManager.run {
        println("MainActivity - Providers: $allProviders, ${if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) isLocationEnabled else null}")
        val location = getLastKnnownLocation()
        if (location == null) {
            if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.S)
                getCurrentLocation(
                    LocationManager.GPS_PROVIDER,
                    LocationRequest.Builder(LocationRequest.PASSIVE_INTERVAL).build(),
                    null,
                    Executors.newSingleThreadExecutor()
                ) {
                    GlobalScope.launch {
                        getGeoLocation(it, context) {
                            emit(it)
                        }
                    }
                } else println("VERSION.SDK_INT < ${Build.VERSION_CODES.S}")
        } else {
            getGeoLocation(location, context) {
                emit(it)
            }
        }
    }
}

@SuppressLint("MissingPermission")
private fun LocationManager.getLastKnnownLocation() =
    (getLastKnownLocation(LocationManager.GPS_PROVIDER)
        ?: getLastKnownLocation(LocationManager.NETWORK_PROVIDER)
        ?: getLastKnownLocation(LocationManager.PASSIVE_PROVIDER))

actual fun listenForPosition() {
    println("Listening for position on Android")
    println("Location: ${AndroidApp.locationManager.getLastKnnownLocation()}")
    runCatching {
        val location = getLocation(AndroidApp.locationManager, AndroidApp.INSTANCE)
        GlobalScope.launch {
            location.collectLatest {
                println("New location: $it")
                kotlin.runCatching {
                    currentLocation.value = it.toLocation()
                }
            }
        }
    }
}

actual fun stopListening() {
}

actual var gpsSupported: androidx.compose.runtime.State<Boolean> = ImmutableBool(true)//TODO change to true and implement getting permissions
actual fun getLocationOnce() {

}