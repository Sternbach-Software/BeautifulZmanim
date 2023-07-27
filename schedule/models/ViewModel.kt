package sternbach.software.schedule.models

//import com.neurorehabmd.patientkiosk.networking.profitablebsapiandroidsdk.models.Patient
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.datetime.Clock
import kotlinx.datetime.LocalDate
import kotlinx.datetime.LocalDateTime
import kotlinx.datetime.LocalTime
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime
//import sternbach.software.simpleemr.api.ApiResponse

object ViewModel {
    val DAY_START_TIME: LocalTime = LocalTime(8, 0, 0)
    val DAY_END_TIME: LocalTime = LocalTime(18, 0, 0)
    val APP_START_TIME: LocalDateTime = getNowAndTime()
    val TODAY: LocalDate = APP_START_TIME.date
    val TIME_ZONE: TimeZone = TimeZone.currentSystemDefault()
    //to allow for testing
    fun getNowAndTime(): LocalDateTime {
        return Clock.System.now().toLocalDateTime(TIME_ZONE)
    }// LocalDateTime.now()//of(2023, 6, 16, 9,0,0)
    fun getNowTime(): LocalTime = getNowAndTime().time//of(9, 0, 0)
    fun getNow(): LocalDate = getNowAndTime().date//of(2023, Month.JUNE, 16)

    val SAMPLE_APPOINTMENTS_STARTING_NOW =
        getSampleResponse(LocalDateTime(TODAY, DAY_START_TIME)).data
    val SAMPLE_APPOINTMENTS_STARTING_AT_DAY_START = getSampleResponse(APP_START_TIME).data
    private fun getSampleResponse(dayStartTime: LocalDateTime) =
        ApiResponse(
            isSuccess = true,
            errorMessage = null,
            data = listOf(
                LocalDateEvent(
                    name = "Maxine Y.",
                    bgColor = "#ff0000",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(60),
                    end = dayStartTime.plusMinutes(120),
                    provider = Provider(id = 2, name = "Sternbach, Lea"),
                    status = LocalDateEvent.AppointmentStatus.Scheduled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "David K.",
                    bgColor = "#1a5173",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(60),
                    end = dayStartTime.plusMinutes(120),
                    provider = Provider(id = 19, name = "Fowlkes, Takiara"),
                    status = LocalDateEvent.AppointmentStatus.Scheduled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Pamela F.",
                    bgColor = "#808080",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(60),
                    end = dayStartTime.plusMinutes(120),
                    provider = Provider(id = 19, name = "Fowlkes, Takiara"),
                    status = LocalDateEvent.AppointmentStatus.Cancelled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Beverly W.",
                    bgColor = "#64b9d9",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(120),
                    end = dayStartTime.plusMinutes(180),
                    provider = Provider(id = 18, name = "Abraham, Victoria"),
                    status = LocalDateEvent.AppointmentStatus.Scheduled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Linda N.",
                    bgColor = "#1a5173",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(120),
                    end = dayStartTime.plusMinutes(180),
                    provider = Provider(id = 19, name = "Fowlkes, Takiara"),
                    status = LocalDateEvent.AppointmentStatus.Scheduled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Cyrena U.",
                    bgColor = "#1a5173",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(120),
                    end = dayStartTime.plusMinutes(180),
                    provider = Provider(id = 19, name = "Fowlkes, Takiara"),
                    status = LocalDateEvent.AppointmentStatus.Scheduled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Linda N.",
                    bgColor = "#64b9d9",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(180),
                    end = dayStartTime.plusMinutes(240),
                    provider = Provider(id = 18, name = "Abraham, Victoria"),
                    status = LocalDateEvent.AppointmentStatus.Scheduled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Lorraine N.",
                    bgColor = "#1a5173",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(180),
                    end = dayStartTime.plusMinutes(240),
                    provider = Provider(id = 19, name = "Fowlkes, Takiara"),
                    status = LocalDateEvent.AppointmentStatus.Scheduled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Beverly W.",
                    bgColor = "#1a5173",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(180),
                    end = dayStartTime.plusMinutes(240),
                    provider = Provider(id = 19, name = "Fowlkes, Takiara"),
                    status = LocalDateEvent.AppointmentStatus.Scheduled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Lunch",
                    bgColor = "#e281ca",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(240),
                    end = dayStartTime.plusMinutes(270),
                    provider = Provider(id = 2, name = "Sternbach, Lea"),
                    status = LocalDateEvent.AppointmentStatus.Scheduled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Lunch",
                    bgColor = "#e281ca",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(240),
                    end = dayStartTime.plusMinutes(270),
                    provider = Provider(id = 18, name = "Abraham, Victoria"),
                    status = LocalDateEvent.AppointmentStatus.Scheduled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Lunch",
                    bgColor = "#e281ca",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(240),
                    end = dayStartTime.plusMinutes(270),
                    provider = Provider(id = 19, name = "Fowlkes, Takiara"),
                    status = LocalDateEvent.AppointmentStatus.Scheduled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Magalie B.",
                    bgColor = "#64b9d9",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(270),
                    end = dayStartTime.plusMinutes(330),
                    provider = Provider(id = 18, name = "Abraham, Victoria"),
                    status = LocalDateEvent.AppointmentStatus.Scheduled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Benjamin R.",
                    bgColor = "#64b9d9",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(270),
                    end = dayStartTime.plusMinutes(330),
                    provider = Provider(id = 18, name = "Abraham, Victoria"),
                    status = LocalDateEvent.AppointmentStatus.Scheduled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Susan L.",
                    bgColor = "#808080",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(270),
                    end = dayStartTime.plusMinutes(330),
                    provider = Provider(id = 19, name = "Fowlkes, Takiara"),
                    status = LocalDateEvent.AppointmentStatus.Cancelled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Brian R.",
                    bgColor = "#1a5173",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(270),
                    end = dayStartTime.plusMinutes(330),
                    provider = Provider(id = 19, name = "Fowlkes, Takiara"),
                    status = LocalDateEvent.AppointmentStatus.Scheduled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Brian R.",
                    bgColor = "#64b9d9",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(330),
                    end = dayStartTime.plusMinutes(390),
                    provider = Provider(id = 18, name = "Abraham, Victoria"),
                    status = LocalDateEvent.AppointmentStatus.Scheduled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Eva Z.",
                    bgColor = "#808080",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(330),
                    end = dayStartTime.plusMinutes(390),
                    provider = Provider(id = 18, name = "Abraham, Victoria"),
                    status = LocalDateEvent.AppointmentStatus.Cancelled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Magalie B.",
                    bgColor = "#1a5173",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(330),
                    end = dayStartTime.plusMinutes(390),
                    provider = Provider(id = 19, name = "Fowlkes, Takiara"),
                    status = LocalDateEvent.AppointmentStatus.Scheduled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Benjamin R.",
                    bgColor = "#1a5173",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(330),
                    end = dayStartTime.plusMinutes(390),
                    provider = Provider(id = 19, name = "Fowlkes, Takiara"),
                    status = LocalDateEvent.AppointmentStatus.Scheduled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Stanley G.",
                    bgColor = "#64b9d9",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(390),
                    end = dayStartTime.plusMinutes(450),
                    provider = Provider(id = 18, name = "Abraham, Victoria"),
                    status = LocalDateEvent.AppointmentStatus.Scheduled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Sue T.",
                    bgColor = "#64b9d9",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(390),
                    end = dayStartTime.plusMinutes(450),
                    provider = Provider(id = 18, name = "Abraham, Victoria"),
                    status = LocalDateEvent.AppointmentStatus.Scheduled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Linda L.",
                    bgColor = "#1a5173",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(390),
                    end = dayStartTime.plusMinutes(450),
                    provider = Provider(id = 19, name = "Fowlkes, Takiara"),
                    status = LocalDateEvent.AppointmentStatus.Scheduled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Eva Z.",
                    bgColor = "#808080",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(390),
                    end = dayStartTime.plusMinutes(450),
                    provider = Provider(id = 19, name = "Fowlkes, Takiara"),
                    status = LocalDateEvent.AppointmentStatus.Cancelled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Sharon A.",
                    bgColor = "#808080",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(450),
                    end = dayStartTime.plusMinutes(510),
                    provider = Provider(id = 2, name = "Sternbach, Lea"),
                    status = LocalDateEvent.AppointmentStatus.Cancelled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Linda L.",
                    bgColor = "#64b9d9",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(450),
                    end = dayStartTime.plusMinutes(510),
                    provider = Provider(id = 18, name = "Abraham, Victoria"),
                    status = LocalDateEvent.AppointmentStatus.Scheduled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Stanley G.",
                    bgColor = "#1a5173",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(450),
                    end = dayStartTime.plusMinutes(510),
                    provider = Provider(id = 19, name = "Fowlkes, Takiara"),
                    status = LocalDateEvent.AppointmentStatus.Scheduled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Sue T.",
                    bgColor = "#1a5173",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(450),
                    end = dayStartTime.plusMinutes(510),
                    provider = Provider(id = 19, name = "Fowlkes, Takiara"),
                    status = LocalDateEvent.AppointmentStatus.Scheduled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Sharon A.",
                    bgColor = "#808080",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(510),
                    end = dayStartTime.plusMinutes(570),
                    provider = Provider(id = 19, name = "Fowlkes, Takiara"),
                    status = LocalDateEvent.AppointmentStatus.Cancelled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Maxine Y.",
                    bgColor = "#ff0000",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(510),
                    end = dayStartTime.plusMinutes(570),
                    provider = Provider(id = 19, name = "Fowlkes, Takiara"),
                    status = LocalDateEvent.AppointmentStatus.Scheduled,
                    checkInTimestamp = null,
                    description = null
                ),
                LocalDateEvent(
                    name = "Sarah G.",
                    bgColor = "#64b9d9",
                    fgColor = "#ffffff",
                    start = dayStartTime.plusMinutes(510),
                    end = dayStartTime.plusMinutes(570),
                    provider = Provider(id = 2, name = "Sternbach, Lea"),
                    status = LocalDateEvent.AppointmentStatus.Scheduled,
                    checkInTimestamp = null,
                    description = null
                )
            )
        )

    /*lateinit */var allAppointmentsForToday: MutableStateFlow<List<LocalDateEvent>> =
        MutableStateFlow(
            SAMPLE_APPOINTMENTS_STARTING_NOW
        )
    /*lateinit */var allAppointmentsForLoggedInTherapist: MutableStateFlow<List<LocalDateEvent>> =
        MutableStateFlow(
            SAMPLE_APPOINTMENTS_STARTING_NOW
        )
    lateinit var selectedPatient: Patient
    lateinit var loggedInProvider: Provider
}