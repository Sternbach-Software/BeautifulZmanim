package sternbach.software.theme

import androidx.compose.material3.ColorScheme
import androidx.compose.runtime.Composable

@Composable
actual fun getColorScheme(useDarkTheme: Boolean): ColorScheme = defaultColorScheme(useDarkTheme)