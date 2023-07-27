package sternbach.software.simpleemr.ui.components.schedule

import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.horizontalScroll
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.sizeIn
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clipToBounds
import androidx.compose.ui.draw.drawBehind
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.Layout
import androidx.compose.ui.layout.ParentDataModifier
import androidx.compose.ui.layout.onGloballyPositioned
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.tooling.preview.PreviewParameter
import androidx.compose.ui.tooling.preview.PreviewParameterProvider
import androidx.compose.ui.unit.Density
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.core.graphics.toColorInt
import kotlinx.coroutines.delay
import kotlinx.coroutines.isActive
import sternbach.software.schedule.models.LocalDateEvent
import sternbach.software.simpleemr.BuildConfig
import sternbach.software.simpleemr.PositionedEvent
import sternbach.software.simpleemr.ScheduleSize
import sternbach.software.simpleemr.SplitType
import sternbach.software.simpleemr.clinicTVMode
import sternbach.software.simpleemr.ui.ViewModel
import sternbach.software.simpleemr.ui.theme.SimpleEMRTheme
import timber.log.Timber
import java.time.LocalDate
import java.time.LocalDateTime
import java.time.LocalTime
import java.time.format.DateTimeFormatter
import java.time.temporal.ChronoUnit
import kotlin.math.absoluteValue
import kotlin.math.roundToInt
import kotlin.time.Duration.Companion.seconds

val EventTimeFormatter = DateTimeFormatter.ofPattern("h:mm a")
private val HourFormatter = DateTimeFormatter.ofPattern("h a")
private val DayFormatter = DateTimeFormatter.ofPattern("EE, MMM d")
private val sampleEvents = listOf(
    LocalDateEvent(
        name = "Google I/O Keynote",
        bgColor = "#FFAFBBF2",
        fgColor = "#FFAFBBF2",
        start = LocalDateTime.parse("2021-05-18T09:00:00"),
        end = LocalDateTime.parse("2021-05-18T11:00:00"),
        description = "Tune in to find out about how we're furthering our mission to organize the world’s information and make it universally accessible and useful.",
    ),
    LocalDateEvent(
        name = "Developer Keynote",
        bgColor = "#FFAFBBF2",
        fgColor = "#FFAFBBF2",
        start = LocalDateTime.parse("2021-05-18T09:00:00"),
        end = LocalDateTime.parse("2021-05-18T10:00:00"),
        description = "Learn about the latest updates to our developer products and platforms from Google Developers.",
    ),
    LocalDateEvent(
        name = "What's new in Android",
        bgColor = "#FF1B998B",
        fgColor = "#FF1B998B",
        start = LocalDateTime.parse("2021-05-18T10:00:00"),
        end = LocalDateTime.parse("2021-05-18T11:00:00"),
        description = "In this Keynote, Chet Haase, Dan Sandler, and Romain Guy discuss the latest Android features and enhancements for developers.",
    ),
    LocalDateEvent(
        name = "What's new in Material Design",
        bgColor = "#FF6DD3CE",
        fgColor = "#FF6DD3CE",
        start = LocalDateTime.parse("2021-05-18T11:00:00"),
        end = LocalDateTime.parse("2021-05-18T11:45:00"),
        description = "Learn about the latest design improvements to help you build personal dynamic experiences with Material Design.",
    ),
    LocalDateEvent(
        name = "What's new in Machine Learning",
        bgColor = "#FFF4BFDB",
        fgColor = "#FFF4BFDB",
        start = LocalDateTime.parse("2021-05-18T10:00:00"),
        end = LocalDateTime.parse("2021-05-18T11:00:00"),
        description = "Learn about the latest and greatest in ML from Google. We’ll cover what’s available to developers when it comes to creating, understanding, and deploying models for a variety of different applications.",
    ),
    LocalDateEvent(
        name = "What's new in Machine Learning",
        bgColor = "#FFF4BFDB",
        fgColor = "#FFF4BFDB",
        start = LocalDateTime.parse("2021-05-18T10:30:00"),
        end = LocalDateTime.parse("2021-05-18T11:30:00"),
        description = "Learn about the latest and greatest in ML from Google. We’ll cover what’s available to developers when it comes to creating, understanding, and deploying models for a variety of different applications.",
    ),
    LocalDateEvent(
        name = "Jetpack Compose Basics",
        bgColor = "#FF1B998B",
        fgColor = "#FF1B998B",
        start = LocalDateTime.parse("2021-05-20T12:00:00"),
        end = LocalDateTime.parse("2021-05-20T13:00:00"),
        description = "This Workshop will take you through the basics of building your first app with Jetpack Compose, Android's new modern UI toolkit that simplifies and accelerates UI development on Android.",
    ),
)

@Composable
fun Schedule(
    events: List<LocalDateEvent>,
    modifier: Modifier = Modifier,
    clinicTVMode: Boolean = false,
    daysMappedToTherapistNames: Map<LocalDate, String>? = null,
    eventContent: @Composable (positionedEvent: PositionedEvent, currentTime: LocalTime, onClick: (LocalDateEvent) -> Unit) -> Unit = { event, time, onClick ->
        BasicEvent(
            currentTime = time,
            positionedEvent = event,
            onClick = onClick
        )
    },
    dayHeader: @Composable (day: LocalDate) -> Unit = {
        if (clinicTVMode) daysMappedToTherapistNames!![it]?.let {
            BasicDayHeader(text = it)
        } else BasicDayHeader(day = it)
    },
    timeLabel: @Composable (time: LocalTime) -> Unit = { BasicSidebarLabel(time = it) },
    minDate: LocalDate = events.minByOrNull { it.start }?.start?.toLocalDate()
        ?: ViewModel.getNow(),
    maxDate: LocalDate = events.maxByOrNull { it.end }?.end?.toLocalDate() ?: ViewModel.getNow(),
    minTime: LocalTime = LocalTime.MIN,
    maxTime: LocalTime = LocalTime.MAX,
    daySize: ScheduleSize = ScheduleSize.FixedCount(
        daysMappedToTherapistNames
            ?.takeIf { it.isNotEmpty() /*consider null if empty*/ }
            ?.values
            ?.size
            ?: /*if not tv mode, get num days*/minDate.until(maxDate, ChronoUnit.DAYS).toInt()
    ),
    hourSize: ScheduleSize = ScheduleSize.FixedCount(
        minTime.until(maxTime, ChronoUnit.HOURS).toInt()
    ),
    scheduleItemClicked: (LocalDateEvent) -> Unit = {},
) {
    val numDays = (daySize as? ScheduleSize.FixedCount)?.count?.toInt() ?: (ChronoUnit.DAYS.between(
        minDate,
        maxDate
    ).toInt() + 1)
    val numHours =
        (hourSize as? ScheduleSize.FixedCount)?.count?.toInt() ?: (ChronoUnit.HOURS.between(
            minDate,
            maxDate
        ).toInt() + 1)
    val verticalScrollState = rememberScrollState()
    val horizontalScrollState = rememberScrollState()
    var sidebarWidth by remember { mutableStateOf(0) }
    var headerHeight by remember { mutableStateOf(0) }
    var currentTime by remember {
        mutableStateOf(
            ViewModel.getNowTime()
                .let { if (BuildConfig.SPEED_UP_TIME) ViewModel.DAY_START_TIME else it })
    }
    LaunchedEffect(events) {
        while (isActive) {
            delay(if (BuildConfig.SPEED_UP_TIME) 1_0 else 1_000)
            currentTime =
                if (BuildConfig.SPEED_UP_TIME) currentTime.plusMinutes(1)
                else currentTime.plusSeconds(1)
        }
    }
    BoxWithConstraints(modifier = modifier) {
        val dayWidth: Dp = when (daySize) {
            is ScheduleSize.FixedSize -> daySize.size
            is ScheduleSize.FixedCount -> with(LocalDensity.current) { ((constraints.maxWidth - sidebarWidth) / daySize.count).toDp() }
            is ScheduleSize.Adaptive -> with(LocalDensity.current) {
                maxOf(
                    ((constraints.maxWidth - sidebarWidth) / numDays).toDp(),
                    daySize.minSize
                )
            }

            else -> {
                TODO("Impossible")
            }
        }
        val hourHeight: Dp = when (hourSize) {
            is ScheduleSize.FixedSize -> hourSize.size
            is ScheduleSize.FixedCount -> with(LocalDensity.current) { ((constraints.maxHeight - headerHeight) / hourSize.count).toDp() }
            is ScheduleSize.Adaptive -> with(LocalDensity.current) {
                maxOf(
                    ((constraints.maxHeight - headerHeight) / numHours).toDp(),
                    hourSize.minSize
                )
            }

            else -> {
                TODO("Impossible")
            }
        }
        Column(modifier = modifier) {
            ScheduleHeader(
                minDate = minDate,
                maxDate = maxDate,
                dayWidth = dayWidth,
                dayHeader = dayHeader,
                modifier = Modifier
                    .padding(start = with(LocalDensity.current) { sidebarWidth.toDp() })
                    .horizontalScroll(horizontalScrollState)
                    .onGloballyPositioned { headerHeight = it.size.height }
            )
            Box {
                Row(
                    modifier = Modifier
//                        .weight(1f)
//                        .align(Alignment.Start)
                ) {
                    ScheduleSidebar(
                        hourHeight = hourHeight,
                        minTime = minTime,
                        maxTime = maxTime,
                        label = timeLabel,
                        modifier = Modifier
                            .verticalScroll(verticalScrollState)
                            .onGloballyPositioned { sidebarWidth = it.size.width }
                    )
                    BasicSchedule(
                        events = events,
                        eventContent = eventContent,
                        minDate = minDate,
                        maxDate = maxDate,
                        minTime = minTime,
                        maxTime = maxTime,
                        dayWidth = dayWidth,
                        hourHeight = hourHeight,
                        modifier = Modifier
                            .verticalScroll(verticalScrollState)
                            .horizontalScroll(horizontalScrollState),
                        onClick = scheduleItemClicked,
                        currentTime = currentTime
                    )
                }
                Canvas(Modifier.fillMaxSize()) {
                    //draw line for current time:
                    if (currentTime in minTime..maxTime) {
                        val y =
                            currentTime.minusHours(8L)
                                .toSecondOfDay().seconds.inWholeMinutes / 60F * hourHeight.toPx()
                        drawLine(
                            Color.Yellow.copy(alpha = 0.65f),
                            start = Offset(0f, y),
                            end = Offset(size.width, y),
                            strokeWidth = 2.dp.toPx()
                        )
                    }
                }
            }
        }
    }
}

@Composable
fun BasicSchedule(
    events: List<LocalDateEvent>,
    modifier: Modifier = Modifier,
    eventContent: @Composable (positionedEvent: PositionedEvent, currentTime: LocalTime, onClick: (LocalDateEvent) -> Unit) -> Unit = { event, time, onClick ->
        BasicEvent(
            currentTime = time,
            positionedEvent = event,
            onClick = onClick
        )
    },
    currentTime: LocalTime,
    minDate: LocalDate = events.minByOrNull(LocalDateEvent::start)?.start?.toLocalDate()
        ?: ViewModel.getNow(),
    maxDate: LocalDate = events.maxByOrNull(LocalDateEvent::end)?.end?.toLocalDate()
        ?: ViewModel.getNow(),
    minTime: LocalTime = LocalTime.MIN,
    maxTime: LocalTime = LocalTime.MAX,
    dayWidth: Dp,
    hourHeight: Dp,
    onClick: (LocalDateEvent) -> Unit,
) {
    val numDays = ChronoUnit.DAYS.between(minDate, maxDate).toInt() + 1
    val numMinutes = ChronoUnit.MINUTES.between(minTime, maxTime).toInt() + 1
    val numHours = numMinutes / 60
    val dividerColor = if (MaterialTheme.colors.isLight) Color.LightGray else Color.DarkGray
    val positionedEvents =
        remember(events) { arrangeEvents(splitEvents(events.sortedBy(LocalDateEvent::start))).filter { it.end > minTime && it.start < maxTime } }
    Layout(
        content = {
            positionedEvents.forEach { positionedEvent ->
                Box(modifier = Modifier.eventData(positionedEvent)) {
                    eventContent(positionedEvent, currentTime, onClick)
                }
            }
        },
        modifier = modifier
            .drawBehind {
                val firstHour = minTime.truncatedTo(ChronoUnit.HOURS)
                val firstHourOffsetMinutes =
                    if (firstHour == minTime) 0 else ChronoUnit.MINUTES.between(
                        minTime,
                        firstHour.plusHours(1)
                    )
                val firstHourOffset = (firstHourOffsetMinutes / 60f) * hourHeight.toPx()
                //draw grid lines:
                repeat(numHours) {
                    drawLine(
                        dividerColor,
                        start = Offset(0f, it * hourHeight.toPx() + firstHourOffset),
                        end = Offset(size.width, it * hourHeight.toPx() + firstHourOffset),
                        strokeWidth = 1.dp.toPx()
                    )
                }
                repeat(numDays - 1) {
                    drawLine(
                        dividerColor,
                        start = Offset((it + 1) * dayWidth.toPx(), 0f),
                        end = Offset((it + 1) * dayWidth.toPx(), size.height),
                        strokeWidth = 1.dp.toPx()
                    )
                }
            }

    ) { measureables, constraints ->
        val height = (hourHeight.toPx() * (numMinutes / 60f)).roundToInt()
        val width = dayWidth.roundToPx() * numDays
        val placeablesWithEvents = measureables.map { measurable ->
            val splitEvent = measurable.parentData as PositionedEvent
            val eventDurationMinutes =
                ChronoUnit.MINUTES.between(splitEvent.start, minOf(splitEvent.end, maxTime))
            val eventHeight =
                ((eventDurationMinutes / 60f) * hourHeight.toPx()).roundToInt().absoluteValue
            val eventWidth =
                ((splitEvent.colSpan.toFloat() / splitEvent.colTotal.toFloat()) * dayWidth.toPx()).roundToInt()
            val placeable = measurable.measure(
                constraints.copy(
                    minWidth = eventWidth,
                    maxWidth = eventWidth,
                    minHeight = eventHeight,
                    maxHeight = eventHeight
                )
            )
            Pair(placeable, splitEvent)
        }
        layout(width, height) {
            placeablesWithEvents.forEach { (placeable, splitEvent) ->
                val eventOffsetMinutes = if (splitEvent.start > minTime) ChronoUnit.MINUTES.between(
                    minTime,
                    splitEvent.start
                ) else 0
                val eventY = ((eventOffsetMinutes / 60f) * hourHeight.toPx()).roundToInt()
                val eventOffsetDays = ChronoUnit.DAYS.between(minDate, splitEvent.date).toInt()
                val eventX =
                    eventOffsetDays * dayWidth.roundToPx() + (splitEvent.col * (dayWidth.toPx() / splitEvent.colTotal.toFloat())).roundToInt()
                placeable.place(eventX, eventY)
            }
        }
    }
}

@Composable
fun BasicEvent(
    positionedEvent: PositionedEvent,
    currentTime: LocalTime,
    modifier: Modifier = Modifier,
    onClick: (LocalDateEvent) -> Unit = {},
) {
    val event = positionedEvent.event
    val topRadius =
        if (positionedEvent.splitType == SplitType.Start || positionedEvent.splitType == SplitType.Both) 0.dp else 4.dp
    val bottomRadius =
        if (positionedEvent.splitType == SplitType.End || positionedEvent.splitType == SplitType.Both) 0.dp else 4.dp
    Box {
        Column(
            modifier = modifier
                .fillMaxSize()
                .padding(
                    end = 2.dp,
                    bottom = if (positionedEvent.splitType == SplitType.End) 0.dp else 2.dp
                )
                .clipToBounds()
                .let {
                    if (clinicTVMode && isEventNow(
                            currentTime,
                            event
                        ) && event.status == LocalDateEvent.AppointmentStatus.CheckedIn
                    ) it.border(3.dp, Color.Yellow)
                    else it
                }
                .background(
                    Color(event.bgColor.toColorInt()).copy(
                        alpha = getOpacityForEvent(currentTime, event)
                    ),
                    shape = RoundedCornerShape(
                        topStart = topRadius,
                        topEnd = topRadius,
                        bottomEnd = bottomRadius,
                        bottomStart = bottomRadius,
                    )
                )
                .clickable { onClick(event) }
                .padding(4.dp)
                .drawBehind {
                    if (event.status == LocalDateEvent.AppointmentStatus.Cancelled) {
                        val strokeWidth = 6.dp.toPx()
                        val color = Color.DarkGray
                        drawLine( //top-right to bottom-left
                            color,
                            start = Offset(size.width, 0F),
                            end = Offset(0F, size.height),
                            strokeWidth = strokeWidth
                        )
                        drawLine( //top-left to bottom-right
                            color,
                            start = Offset(0F, 0F),
                            end = Offset(size.width, size.height),
                            strokeWidth = strokeWidth
                        )
                    }
                }
        ) {

            /*Text(
                text = "${event.start.format(EventTimeFormatter)} - ${
                    event.end.format(
                        EventTimeFormatter
                    )
                }",
                style = textStyleWithTimeOpacity(
                    MaterialTheme.typography.caption,
                    currentTime,
                    event
                ),
                maxLines = 1,
                overflow = TextOverflow.Clip,
            )*/

            Text(
                text = event.hippaName?.takeIf { it.isNotBlank() } ?: event.name,
                style = textStyleWithTimeOpacity(
                    MaterialTheme.typography.body1,
                    currentTime,
                    event
                ),
                fontWeight = FontWeight.Bold,
                overflow = TextOverflow.Clip,
            )

            if (event.description != null) {
                Text(
                    text = event.description,
                    style = textStyleWithTimeOpacity(
                        MaterialTheme.typography.body2,
                        currentTime,
                        event
                    ),
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis,
                )
            }
        }
    }
}

@Composable
private fun textStyleWithTimeOpacity(
    style: TextStyle,
    currentTime: LocalTime,
    event: LocalDateEvent,
): TextStyle {
    val textColor = event.fgColor?.toColorInt()?.let { Color(it) }
    return style.copy(
        color = style.color.copy(
            alpha =
            getOpacityForEvent(currentTime, event),
            red = textColor?.red ?: style.color.red,
            green = textColor?.green ?: style.color.green,
            blue = textColor?.blue ?: style.color.blue,
        )
    )
}

@Composable
private fun getOpacityForEvent(
    currentTime: LocalTime,
    event: LocalDateEvent,
) = 1F//if (clinicTVMode && !isEventNow(currentTime, event)) .5F else 1F

@Composable
private fun isEventNow(
    currentTime: LocalTime,
    event: LocalDateEvent,
) = currentTime.isAfter(event.start.toLocalTime()) && currentTime.isBefore(
    event.end.toLocalTime()
)

class EventsProvider : PreviewParameterProvider<LocalDateEvent> {
    override val values = sampleEvents.asSequence()
}

@Preview(showBackground = true)
@Composable
fun EventPreview(
    @PreviewParameter(EventsProvider::class) event: LocalDateEvent,
) {
    SimpleEMRTheme {
        BasicEvent(
            PositionedEvent(
                event,
                SplitType.None,
                event.start.toLocalDate(),
                event.start.toLocalTime(),
                event.end.toLocalTime()
            ),
            modifier = Modifier.sizeIn(maxHeight = 64.dp),
            currentTime = ViewModel.getNowTime()
        )
    }
}

private class EventDataModifier(
    val positionedEvent: PositionedEvent,
) : ParentDataModifier {
    override fun Density.modifyParentData(parentData: Any?) = positionedEvent
}

private fun Modifier.eventData(positionedEvent: PositionedEvent) =
    this.then(EventDataModifier(positionedEvent))

@Composable
fun BasicDayHeader(
//    therapists: List<String>
    modifier: Modifier = Modifier,
    day: LocalDate? = null,
    text: String = day!!.format(DayFormatter),
) {
    Column {

        Text(
            text = text,
            textAlign = TextAlign.Center,
            modifier = modifier
                .fillMaxWidth()
                .padding(4.dp)
        )
        /*LazyRow {
            items(therapists) {
                Text(it,
                    textAlign = TextAlign.Center,
                    modifier = modifier
                        .fillMaxWidth()
                        .padding(4.dp)
                )
            }
        }*/
    }
}

@Preview(showBackground = true)
@Composable
fun BasicDayHeaderPreview() {
    SimpleEMRTheme {
        BasicDayHeader(day = ViewModel.getNow())
    }
}

@Composable
fun ScheduleHeader(
    minDate: LocalDate,
    maxDate: LocalDate,
    dayWidth: Dp,
    modifier: Modifier = Modifier,
    dayHeader: @Composable (day: LocalDate) -> Unit = { BasicDayHeader(day = it) },
) {
    Row(modifier = modifier.background(Color.DarkGray)) {
        val numDays = ChronoUnit.DAYS.between(minDate, maxDate).toInt() + 1
        repeat(numDays) { i ->
            Box(modifier = Modifier.width(dayWidth)) {
                dayHeader(minDate.plusDays(i.toLong()))
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun ScheduleHeaderPreview() {
    SimpleEMRTheme {
        ScheduleHeader(
            minDate = ViewModel.getNow(),
            maxDate = ViewModel.getNow().plusDays(5),
            dayWidth = 256.dp,
        )
    }
}

@Composable
fun BasicSidebarLabel(
    time: LocalTime,
    modifier: Modifier = Modifier,
) {
    Text(
        text = time.format(HourFormatter),
        modifier = modifier
            .fillMaxHeight()
            .padding(4.dp)
    )
}

@Preview(showBackground = true)
@Composable
fun BasicSidebarLabelPreview() {
    SimpleEMRTheme {
        BasicSidebarLabel(time = LocalTime.NOON, Modifier.sizeIn(maxHeight = 64.dp))
    }
}

@Composable
fun ScheduleSidebar(
    hourHeight: Dp,
    modifier: Modifier = Modifier,
    minTime: LocalTime = LocalTime.MIN,
    maxTime: LocalTime = LocalTime.MAX,
    label: @Composable (time: LocalTime) -> Unit = { BasicSidebarLabel(time = it) },
) {
    val numMinutes = ChronoUnit.MINUTES.between(minTime, maxTime).toInt() + 1
    val numHours = numMinutes / 60
    val firstHour = minTime.truncatedTo(ChronoUnit.HOURS)
    val firstHourOffsetMinutes =
        if (firstHour == minTime) 0 else ChronoUnit.MINUTES.between(minTime, firstHour.plusHours(1))
    val firstHourOffset = hourHeight * (firstHourOffsetMinutes / 60f)
    val startTime = if (firstHour == minTime) firstHour else firstHour.plusHours(1)
    Column(modifier = modifier) {
        Spacer(modifier = Modifier.height(firstHourOffset))
        repeat(numHours) { i ->
            Box(modifier = Modifier.height(hourHeight)) {
                label(startTime.plusHours(i.toLong()))
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun ScheduleSidebarPreview() {
    SimpleEMRTheme {
        ScheduleSidebar(hourHeight = 64.dp)
    }
}

private fun splitEvents(events: List<LocalDateEvent>): List<PositionedEvent> {
    return events
        .map { event ->
            val startDate = event.start.toLocalDate()
            val endDate = event.end.toLocalDate()
            if (startDate == endDate) {
                listOf(
                    PositionedEvent(
                        event,
                        SplitType.None,
                        event.start.toLocalDate(),
                        event.start.toLocalTime(),
                        event.end.toLocalTime()
                    )
                )
            } else {
                val days = ChronoUnit.DAYS.between(startDate, endDate)
                val splitEvents = mutableListOf<PositionedEvent>()
                for (i in 0..days) {
                    val date = startDate.plusDays(i)
                    splitEvents += PositionedEvent(
                        event,
                        splitType = if (date == startDate) SplitType.End else if (date == endDate) SplitType.Start else SplitType.Both,
                        date = date,
                        start = if (date == startDate) event.start.toLocalTime() else LocalTime.MIN,
                        end = if (date == endDate) event.end.toLocalTime() else LocalTime.MAX,
                    )
                }
                splitEvents
            }
        }
        .flatten()
}

private fun PositionedEvent.overlapsWith(other: PositionedEvent): Boolean {
    return date == other.date && start < other.end && end > other.start
}

private fun List<PositionedEvent>.timesOverlapWith(event: PositionedEvent): Boolean {
    return any { it.overlapsWith(event) }
}

private fun arrangeEvents(events: List<PositionedEvent>): List<PositionedEvent> {
    val positionedEvents = mutableListOf<PositionedEvent>()
    val groupEvents: MutableList<MutableList<PositionedEvent>> = mutableListOf()

    fun resetGroup() {
        Timber.d("Reset group.")
        groupEvents.forEachIndexed { colIndex, col ->
            Timber.d("Group event: colIndex = $colIndex")
            col.forEach { event ->
                Timber.d("col.event: $event")
                positionedEvents.add(event.copy(col = colIndex, colTotal = groupEvents.size))
            }
        }
        groupEvents.clear()
    }

    events.forEach { event ->
        var firstFreeCol = -1
        var numFreeCol = 0
        for (i in 0 until groupEvents.size) {
            val col = groupEvents[i]
            if (col.timesOverlapWith(event)) {
                if (firstFreeCol < 0) continue else break
            }
            if (firstFreeCol < 0) firstFreeCol = i
            numFreeCol++
        }

        when {
            // Overlaps with all, add a new column
            firstFreeCol < 0 -> {
                groupEvents += mutableListOf(event)
                // Expand anything that spans into the previous column and doesn't overlap with this event
                for (ci in 0 until groupEvents.size - 1) {
                    val col = groupEvents[ci]
                    col.forEachIndexed { ei, e ->
                        if (ci + e.colSpan == groupEvents.size - 1 && !e.overlapsWith(event)) {
                            col[ei] = e.copy(colSpan = e.colSpan + 1)
                        }
                    }
                }
            }
            // No overlap with any, start a new group
            numFreeCol == groupEvents.size -> {
                resetGroup()
                groupEvents += mutableListOf(event)
            }
            // At least one column free, add to first free column and expand to as many as possible
            else -> {
                groupEvents[firstFreeCol] += event.copy(colSpan = numFreeCol)
            }
        }
    }
    resetGroup()
    return positionedEvents
}

@Preview(showBackground = true)
@Composable
fun SchedulePreview() {
    SimpleEMRTheme {
        Schedule(sampleEvents)
    }
}