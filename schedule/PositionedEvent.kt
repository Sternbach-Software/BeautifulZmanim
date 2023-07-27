package sternbach.software.simpleemr

import sternbach.software.schedule.models.LocalDateEvent
import java.time.LocalDate
import java.time.LocalTime

data class PositionedEvent(
    val event: LocalDateEvent,
    val splitType: SplitType,
    val date: LocalDate,
    val start: LocalTime,
    val end: LocalTime,
    val col: Int = 0,
    val colSpan: Int = 1,
    val colTotal: Int = 1,
)