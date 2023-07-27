# BeautifulZmanim
A multi-platform zmanim app that uses Google Material Design, written in Kotlin Multiplatform. Compiles to Android, iOS, web, and desktop (through the JVM).

## Future build targets 
 - Android-based flip-phones
 - Native desktop (currently only supports Desktop/JVM)
 - WearOS
 - watchOS

## Building from source

### Before running!
 - check your system with [KDoctor](https://github.com/Kotlin/kdoctor)
 - install JDK 8 on your machine
 - add `local.properties` file to the project root and set a path to Android SDK there
 - run `./gradlew podInstall` in the project root

#### Android
To run the application on android device/emulator:  
 - open project in Android Studio and run imported android run configuration

To build the application bundle:
 - run `./gradlew :composeApp:assembleDebug`
 - find `.apk` file in `composeApp/build/outputs/apk/debug/composeApp-debug.apk`

#### Desktop
Run the desktop application: `./gradlew :composeApp:run`

#### iOS
To run the application on iPhone device/simulator:
 - Open `iosApp/iosApp.xcworkspace` in Xcode and run standard configuration
 - Or use [Kotlin Multiplatform Mobile plugin](https://plugins.jetbrains.com/plugin/14936-kotlin-multiplatform-mobile) for Android Studio

#### Browser
Run the browser application: `./gradlew :composeApp:jsBrowserDevelopmentRun`

# License
Licensed under the [AGPL 3.0](https://www.gnu.org/licenses/agpl-3.0.en.html). One of the things this means is that if you use any code in this repository, you must make your code publicly available. See the license for the full terms.

