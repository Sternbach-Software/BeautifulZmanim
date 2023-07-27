package sternbach.software.schedule.models

import java.time.LocalDateTime

data class LocalDateEvent(
    val name: String,
    val bgColor: String,
    val fgColor: String,
    var start: LocalDateTime,
    var end: LocalDateTime,
    val provider: Provider? = null,
    val status: AppointmentStatus = AppointmentStatus.CheckedIn,
//    @JsonAdapter()
    val checkInTimestamp: LocalDateTime? = null,
    val description: String? = null,
    val hippaName: String? = "",
    ) {
    enum class AppointmentStatus {
        Cancelled, NoShow, Scheduled, CheckedIn, CheckedOut
    }
}