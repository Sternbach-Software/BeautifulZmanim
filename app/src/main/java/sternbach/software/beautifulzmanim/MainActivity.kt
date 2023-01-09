package sternbach.software.beautifulzmanim

import android.Manifest
import android.content.Context
import android.content.pm.PackageManager
import android.location.*
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import sternbach.software.beautifulzmanim.ui.main.MainFragment
import java.io.IOException
import java.util.*


class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val locationManager = getSystemService(Context.LOCATION_SERVICE) as LocationManager
        val location: Location?
        location = if (ActivityCompat.checkSelfPermission(
                this, Manifest.permission.ACCESS_FINE_LOCATION
            ) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(
                this, Manifest.permission.ACCESS_COARSE_LOCATION
            ) != PackageManager.PERMISSION_GRANTED
        ) {
            ActivityCompat.requestPermissions(this, arrayOf(Manifest.permission.ACCESS_FINE_LOCATION, Manifest.permission.ACCESS_COARSE_LOCATION), 1)
    // TODO: Consider calling
            //    ActivityCompat#requestPermissions
            // here to request the missing permissions, and then overriding
            //   public void onRequestPermissionsResult(int requestCode, String[] permissions,
            //                                          int[] grantResults)
            // to handle the case where the user grants the permission. See the documentation
            // for ActivityCompat#requestPermissions for more details.
            locationManager.getLastKnownLocation(LocationManager.GPS_PROVIDER) //maybe you can use GPS_PROVIDER even if they don't have google play services, not sure. I don't know how accurate NETWORK_PROVIDER is
        } else null
        val provider = locationManager.getBestProvider(Criteria(), true)

        val providerList = locationManager.allProviders

        val geocoder = Geocoder(applicationContext, Locale.getDefault())
        val latitude = location?.latitude
        val longitude = location?.longitude
        try {
            val listAddresses: List<Address>? = geocoder.getFromLocation(latitude, longitude, 1)
            if (null != listAddresses && listAddresses.size > 0) {
                val _Location: String = listAddresses[0].getAddressLine(0)
            }
        } catch (e: IOException) {
            e.printStackTrace()
        }
        if (savedInstanceState == null) {
            supportFragmentManager.beginTransaction()
                .replace(R.id.container, MainFragment.newInstance(latitude, longitude))
                .commitNow()
        }
    }
}