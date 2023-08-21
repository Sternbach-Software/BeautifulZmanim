# BeautifulZmanim
A multi-platform zmanim app that uses Google Material Design, written in Kotlin Multiplatform. Compiles to Android, iOS, web, and desktop (through the JVM). Based on (Sternbach-Software)[https://github.com/Sternbach-Software]'s port of (KosherJava)[https://github.com/KosherJava/zmanim]: (KosherKotlin)[https://github.com/Sternbach-Software/KosherKotlin]

## Future 
### Future supported platforms 
 - Android-based flip-phones
 - WearOS
 - watchOS

### Future features
 - Multi-platform way to get location instead of having to type in longitude and latitude
   - Currently, existing libraries only support Android and iOS, not web and desktop:
     - https://github.com/line/abc-kmm-location
     - https://github.com/icerockdev/moko-geo

## Executables

Coming soon!

## Building from source
Note: to build Apple platform targets, you must be using a Mac.

### Before running!
 - check your system with [KDoctor](https://github.com/Kotlin/kdoctor)
 - install JDK 8 on your machine
 - add `local.properties` file to the project root and set a path to Android SDK there
 - run `./gradlew podInstall` in the project root

### Android
To run the application on Android device/emulator:  
 - open project in Android Studio and run imported android run configuration

To build the application bundle:
 - run `./gradlew :composeApp:assembleDebug`
 - find `.apk` file in `composeApp/build/outputs/apk/debug/composeApp-debug.apk`

### Desktop
Run the desktop application: `./gradlew :composeApp:run`

### iOS
To run the application on an iPhone device/simulator:
 - Open `iosApp/iosApp.xcworkspace` in Xcode and run standard configuration
 - Or use [Kotlin Multiplatform Mobile plugin](https://plugins.jetbrains.com/plugin/14936-kotlin-multiplatform-mobile) for Android Studio

### Browser
Run the browser application: `./gradlew :composeApp:jsBrowserDevelopmentRun`

# License
Licensed under the [AGPL 3.0](https://www.gnu.org/licenses/agpl-3.0.en.html). One of the things this means is that if you use any code in this repository, you must make your code publicly available. See the license for the full terms.

