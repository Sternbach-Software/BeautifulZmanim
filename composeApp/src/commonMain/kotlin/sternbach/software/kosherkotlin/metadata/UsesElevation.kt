package sternbach.software.kosherkotlin.metadata

import kotlinx.serialization.Serializable

@Serializable
enum class UsesElevation {
        IF_SET, NEVER, ALWAYS, UNSPECIFIED
    }