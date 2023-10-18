package sternbach.software

import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableStateFlow

class Navigation<T>(initialDestination: T) {

    private val _destination: MutableStateFlow<T> = MutableStateFlow(initialDestination)
    private var backstack = ArrayDeque<T>()
    val destination: Flow<T> get() = _destination
    fun navigateToPrevious(): Boolean {
        val previousCopy = backstack.removeLastOrNull()
        return if(previousCopy != null) {
            _destination.value = previousCopy
            true
        } else false
    }
    fun navigateTo(screen: T, replaceCurrent: Boolean = false) {
        println("Navigating to $screen; backstack = $backstack, current = ${_destination.value}")
        if (replaceCurrent) backstack.removeLastOrNull()
        backstack.addLast(_destination.value)
        _destination.value = screen
    }
}