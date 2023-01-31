package sternbach.software.beautifulzmanim.ui.main

import KotlinFunctionLibrary.formatted
import KotlinFunctionLibrary.toHrMinSec
import android.content.Context
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.android.gms.common.ConnectionResult
import com.google.android.gms.common.GoogleApiAvailability
import com.kosherjava.zmanim.ComplexZmanimCalendar
import org.joda.time.format.DateTimeFormat
import sternbach.software.beautifulzmanim.R
import java.util.*
import java.util.concurrent.TimeUnit

class MainFragment : Fragment() {

    companion object {
        const val LATITUDE_KEY = "latitude"
        const val LONGITUDE_KEY = "longitude"
        fun newInstance(latitude: Double?, longitude: Double?) = MainFragment().apply {
            arguments = Bundle().apply {
                if (latitude != null) putDouble(LATITUDE_KEY, latitude)
                if (longitude != null) putDouble(LONGITUDE_KEY, longitude)
            }
        }
    }

    private lateinit var viewModel: MainViewModel
    private lateinit var zmanim: ComplexZmanimCalendar

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        viewModel = ViewModelProvider(this)[MainViewModel::class.java]
        val args = requireArguments()
        zmanim = viewModel.getZmanim(args.getDouble(LATITUDE_KEY), args.getDouble(LONGITUDE_KEY))
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?
    ): View {
        val root = inflater.inflate(R.layout.fragment_main, container, false)
        root.findViewById<RecyclerView>(R.id.zmanim_recycler_view).apply {
            layoutManager = LinearLayoutManager(this@MainFragment.context)
            val dayZmanis: (Int) -> String =
                { "Day is $it זמניות minutes before sunrise / after sunset: \n" }
            val accTo: (String) -> String = { "According to $it: \n" }
            val dayReg: (Int) -> String = { "Day is $it minutes before sunrise / after sunset: \n" }
            val dayDeg: (String) -> String = { "Day is $it˚ below sunrise / sunset: \n" }
            adapter = ZmanimListAdapter(
                listOf(
                    ZmanCardModel(
                        "Sha'ah Zmanis",
                        zmanim.shaahZmanisGra.formatted(accTo("Gra")),
                        listOf(
                            zmanim.shaahZmanisBaalHatanya.formatted(accTo("Baal HaTanya")),
                            zmanim.shaahZmanisAteretTorah.formatted(accTo("Yeshivat Ateret Torah")),
                            zmanim.shaahZmanis72MinutesZmanis.formatted(dayZmanis(72)),
                            zmanim.shaahZmanis60Minutes.formatted(dayReg(60)),
                            zmanim.shaahZmanis72Minutes.formatted(dayReg(72)),
                            zmanim.shaahZmanisMGA.formatted(accTo("Magen Avraham")),
                            zmanim.shaahZmanis90MinutesZmanis.formatted(dayZmanis(90)),
                            zmanim.shaahZmanis96MinutesZmanis.formatted(dayZmanis(96)),
                            zmanim.shaahZmanis16Point1Degrees.formatted(dayDeg("16.1")),
                            zmanim.shaahZmanis90Minutes.formatted(dayReg(90)),
                            zmanim.shaahZmanis18Degrees.formatted(dayDeg("18")),
                            zmanim.shaahZmanis96Minutes.formatted(dayReg(96)),
                            zmanim.shaahZmanis120MinutesZmanis.formatted(dayZmanis(120)),
                            zmanim.shaahZmanis19Point8Degrees.formatted(dayDeg("19.8")),
                            zmanim.shaahZmanis120Minutes.formatted(dayReg(120)),
                            zmanim.shaahZmanis26Degrees.formatted(dayDeg("26"))
                        )
                    ),/*
                    ZmanCardModel(
                        "Morning guard (אשמורת הבוקר)",
                        zmanim.
                    ),*/
                    ZmanCardModel(
                        "Dawn (עלות)",
                        zmanim.alosBaalHatanya.formatted(accTo("Baal HaTanya")),
                        listOf(

                        )
                    )
                )
            )
            return root
        }
    }

    private fun Long.formatted(prefix: String) = prefix + TimeUnit
        .MILLISECONDS
        .toSeconds(this)
        .toInt()
        .toHrMinSec()
        .formatted(false)

    private val timeFormatter: org.joda.time.format.DateTimeFormatter =
        DateTimeFormat.forPattern("h:mm:ss a")//ofPattern("")

    private fun Date.formatted(prefix: String) = prefix + timeFormatter.print(this.time)


    /**
     * Check if google play services installed (so that it can be installed on kosher phones)
     * */
    fun isGooglePlayServicesAvailable(context: Context) =
        GoogleApiAvailability.getInstance()
            .isGooglePlayServicesAvailable(context) == ConnectionResult.SUCCESS
}