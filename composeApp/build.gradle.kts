import org.jetbrains.compose.desktop.application.dsl.TargetFormat
import org.jetbrains.kotlin.cli.common.isWindows

plugins {
    alias(libs.plugins.multiplatform)
    alias(libs.plugins.compose)
    alias(libs.plugins.android.application)
//    alias(libs.plugins.libres)
    alias(libs.plugins.buildConfig)
    alias(libs.plugins.kotlinx.serialization)
    alias(libs.plugins.sqlDelight)
}

kotlin {
    androidTarget {
        compilations.all {
            kotlinOptions {
                jvmTarget = "17"
            }
        }
    }

    jvm()

    js {
        browser()
        binaries.executable()
    }

    listOf(
        iosX64(),
        iosArm64(),
        iosSimulatorArm64()
    ).forEach {
        it.binaries.framework {
            baseName = "ComposeApp"
            isStatic = true
        }
    }
    //generate executable binaries:
//    linuxX64 {
//        binaries.executable()
//    }
//    mingwX64 {
//        binaries.executable()
//    }
//    macosX64 {
//        binaries.executable()
//    }
//    linuxArm64 {
//        binaries.executable()
//    }
//    macosArm64 {
//        binaries.executable()
//    }


    sourceSets {
        commonMain.dependencies {
            implementation(compose.runtime)
            implementation(compose.material3)
            implementation(compose.materialIconsExtended)
//            implementation(libs.libres)
            implementation(libs.voyager.navigator)
            implementation(libs.composeImageLoader)
            implementation(libs.napier)
            implementation(libs.kotlinx.coroutines.core)
            implementation(libs.moko.mvvm)
            implementation(libs.ktor.core)
            implementation(libs.composeIcons.featherIcons)
            implementation(libs.kotlinx.serialization.json)
            implementation(libs.kotlinx.datetime)
            implementation(libs.multiplatformSettings)
            implementation(libs.multiplatformNoArgSettings)
            implementation(libs.kstore)
        }

        commonTest.dependencies {
            implementation(kotlin("test"))
        }

        androidMain.dependencies {
            implementation(libs.androidx.appcompat)
            implementation(libs.androidx.activityCompose)
            implementation(libs.compose.uitooling)
            implementation(libs.kotlinx.coroutines.android)
            implementation(libs.ktor.client.okhttp)
            implementation(libs.sqlDelight.driver.android)
            implementation(libs.google.accompanist.permissions)
            implementation(libs.play.services.base)
        }

        jvmMain.dependencies {
            implementation(compose.desktop.common)
            implementation(compose.desktop.currentOs)
            implementation(libs.ktor.client.okhttp)
            implementation(libs.sqlDelight.driver.sqlite)
        }

        jsMain.dependencies {
            implementation(compose.html.core)
            implementation(libs.sqlDelight.driver.js)
        }

        iosMain.dependencies {
            implementation(libs.ktor.client.darwin)
            implementation(libs.sqlDelight.driver.native)
        }

    }
}

android {
    namespace = "sternbach.software.beautifulzmanim"
    compileSdk = 34

    defaultConfig {
        minSdk = 24
        targetSdk = 34

        applicationId = "sternbach.software.beautifulzmanim.androidApp"
        versionCode = 3
        versionName = "1.0.3"
    }
    sourceSets["main"].apply {
        manifest.srcFile("src/androidMain/AndroidManifest.xml")
        res.srcDirs("src/androidMain/resources")
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    buildFeatures {
        compose = true
    }
    composeOptions {
        kotlinCompilerExtensionVersion = "1.5.4"
    }
}

compose.desktop {
    application {
        mainClass = "MainKt"

        nativeDistributions {
            targetFormats(TargetFormat.Dmg, TargetFormat.Msi, TargetFormat.Deb)
            packageName = "sternbach.software.beautifulzmanim.desktopApp"
            packageVersion = "1.0.0"
        }
    }
}

compose.experimental {
    web.application {}
}

//libres {
    // https://github.com/Skeptick/libres#setup
//}
//tasks.getByPath("jvmProcessResources").dependsOn("libresGenerateResources")
//tasks.getByPath("jvmSourcesJar").dependsOn("libresGenerateResources")
//tasks.getByPath("jsProcessResources").dependsOn("libresGenerateResources")

buildConfig {
    // BuildConfig configuration here.
    // https://github.com/gmazzo/gradle-buildconfig-plugin#usage-in-kts
}

sqldelight {
    databases {
        create("MyDatabase") {
            // Database configuration here.
            // https://cashapp.github.io/sqldelight
            packageName.set("sternbach.software.beautifulzmanim.db")
        }
    }
}
