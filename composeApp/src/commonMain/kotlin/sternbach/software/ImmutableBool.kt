package sternbach.software

import androidx.compose.runtime.State

data class ImmutableBool(override val value: Boolean) : State<Boolean>