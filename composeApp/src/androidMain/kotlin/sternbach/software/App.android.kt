package sternbach.software

import android.annotation.SuppressLint
import android.app.Application
import android.content.Context
import android.content.Intent
import android.location.LocationManager
import android.location.LocationRequest
import android.net.Uri
import android.os.Build
import android.os.Build.VERSION
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.tooling.preview.Preview
import com.google.android.gms.common.ConnectionResult
import com.google.android.gms.common.GoogleApiAvailability
import java.util.concurrent.Executors

class AndroidApp : Application() {
    companion object {
        lateinit var INSTANCE: AndroidApp
    }

    override fun onCreate() {
        super.onCreate()
        INSTANCE = this
    }
}

class AppActivity : ComponentActivity() {


    /**
     * Check if google play services installed (so that it can be installed on kosher phones)
     * */
    fun isGooglePlayServicesAvailable(context: Context) =
        GoogleApiAvailability.getInstance()
            .isGooglePlayServicesAvailable(context) == ConnectionResult.SUCCESS
    @SuppressLint("MissingPermission")
    private fun getLocation(locationManager: LocationManager) = locationManager.run {
        println("MainActivity - Providers: $allProviders, ${if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) isLocationEnabled else null}")
        var location = getLastKnownLocation(LocationManager.GPS_PROVIDER)
            ?: getLastKnownLocation(LocationManager.NETWORK_PROVIDER)
            ?: getLastKnownLocation(LocationManager.PASSIVE_PROVIDER)
        if (location == null && Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            getCurrentLocation(
                LocationManager.GPS_PROVIDER,
                LocationRequest.Builder(LocationRequest.PASSIVE_INTERVAL).build(),
                null,
                Executors.newSingleThreadExecutor()
            ) {
                location = it
            }
        } else {
            TODO("VERSION.SDK_INT < ${Build.VERSION_CODES. S}")
        }
        if (location != null) location!!.latitude to location!!.longitude else 39.040531 to -77.028845
    }
    var nav: Navigation<Screen>? = null
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            nav = remember { Navigation(Screen.InputLocation) }
            App(true, nav!!)
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

actual fun listenForPosition() {
    TODO()
}

actual fun stopListening() {
    TODO()
}

actual var gpsSupported: androidx.compose.runtime.State<Boolean> = ImmutableBool(false)//TODO change to true and implement getting permissions
actual fun getLocationOnce() {
    TODO()
}