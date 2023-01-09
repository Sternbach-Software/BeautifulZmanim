package sternbach.software.beautifulzmanim.ui.main

import android.location.Location
import androidx.lifecycle.ViewModel
import com.kosherjava.zmanim.ComplexZmanimCalendar
import com.kosherjava.zmanim.util.GeoLocation
import java.util.*

class MainViewModel : ViewModel() {
    fun getZmanim(_location: Location): ComplexZmanimCalendar {


        val locationName = "Lakewood, NJ";
        val latitude = _location.latitude
        val longitude = _location.longitude
        val elevation = 0.0; //optional elevation
        val timeZone = TimeZone.getTimeZone("America/New_York");
        val location =  GeoLocation(locationName, latitude, longitude, elevation, timeZone);
        return ComplexZmanimCalendar(location)
    }
}