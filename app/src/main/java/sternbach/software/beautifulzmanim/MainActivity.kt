package sternbach.software.beautifulzmanim

import android.Manifest
import android.annotation.SuppressLint
import android.content.Context
import android.content.pm.PackageManager
import android.location.LocationManager
import android.location.LocationRequest
import android.os.Build
import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import sternbach.software.beautifulzmanim.ui.main.MainFragment
import java.util.*
import java.util.concurrent.Executors


class MainActivity : AppCompatActivity() {

    lateinit var locationManager: LocationManager

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        locationManager = getSystemService(Context.LOCATION_SERVICE) as LocationManager
        val location = if (ActivityCompat.checkSelfPermission(
                this, Manifest.permission.ACCESS_FINE_LOCATION
            ) != PackageManager.PERMISSION_GRANTED || ActivityCompat.checkSelfPermission(
                this, Manifest.permission.ACCESS_COARSE_LOCATION
            ) != PackageManager.PERMISSION_GRANTED
        ) {
            ActivityCompat.requestPermissions(
                this,
                arrayOf(
                    Manifest.permission.ACCESS_FINE_LOCATION,
                    Manifest.permission.ACCESS_COARSE_LOCATION
                ),
                1
            )
            // TODO: Consider calling
            //    ActivityCompat#requestPermissions
            // here to request the missing permissions, and then overriding
            //   public void onRequestPermissionsResult(int requestCode, String[] permissions,
            //                                          int[] grantResults)
            // to handle the case where the user grants the permission. See the documentation
            // for ActivityCompat#requestPermissions for more details.
            try {
                getLocation(locationManager)
            } catch (t: Throwable) {
                Log.e("MainActivity", "Couldn't get location.", t)
                null
            }
        } else getLocation(locationManager)
        Log.d("MainActivity", "Location: $location, saved state: $savedInstanceState")
        val latitude = location?.first
        val longitude = location?.second
        if (savedInstanceState == null && latitude != null && longitude != null) {
            Log.d("MainActivity", "Starting fragment")
            supportFragmentManager.beginTransaction()
                .replace(
                    R.id.container, MainFragment.newInstance(
                        latitude,
                        longitude
                    )
                )
                .commitNow()
            /*

        val provider = locationManager.getBestProvider(Criteria(), true)

        val providerList = locationManager.allProviders

        val geocoder = Geocoder(applicationContext, Locale.getDefault())
        try {

                val listAddresses: List<Address>? = geocoder.getFromLocation(latitude, longitude, 1)
                if (listAddresses?.isNotEmpty() == true) {
                    listAdresses[0].getAddressLine(0)
                }
            } catch (e: IOException) {
                e.printStackTrace()
            }*/
        } else {

        }
    }

    @SuppressLint("MissingPermission")
    private fun getLocation(locationManager: LocationManager) = locationManager.run {
        Log.d("MainActivity", "Providers: $allProviders, ${if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) isLocationEnabled else null}")
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
//            TODO("VERSION.SDK_INT < S")
        }
        if (location != null) location!!.latitude to location!!.longitude else 39.040531 to -77.028845
    }

    override fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<out String>,
        grantResults: IntArray
    ) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        val location = getLocation(locationManager)
        Log.d("MainActivity", "Got permission, Location: $location")
        supportFragmentManager.beginTransaction()
            .replace(
                R.id.container, MainFragment.newInstance(
                    location.first,
                    location.second
                )
            )
            .commitNow()
    }
}