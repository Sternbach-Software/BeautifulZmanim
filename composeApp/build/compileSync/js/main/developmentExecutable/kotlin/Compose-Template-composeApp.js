(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@js-joda/timezone', './kotlin-kotlin-stdlib-js-ir.js', './androidx-runtime.js', './Kotlin-DateTime-library-kotlinx-datetime-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './androidx-ui-graphics.js', './androidx-ui-unit.js', './androidx-ui-text.js', './androidx-material3.js', './androidx-ui.js', './androidx-foundation-layout.js', './androidx-foundation.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@js-joda/timezone'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-runtime.js'), require('./Kotlin-DateTime-library-kotlinx-datetime-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./androidx-ui-graphics.js'), require('./androidx-ui-unit.js'), require('./androidx-ui-text.js'), require('./androidx-material3.js'), require('./androidx-ui.js'), require('./androidx-foundation-layout.js'), require('./androidx-foundation.js'));
  else {
    if (typeof JsJodaTimeZoneModule === 'undefined') {
      throw new Error("Error loading module 'Compose-Template-composeApp'. Its dependency '@js-joda/timezone' was not found. Please, check whether '@js-joda/timezone' is loaded prior to 'Compose-Template-composeApp'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Compose-Template-composeApp'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Compose-Template-composeApp'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'Compose-Template-composeApp'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'Compose-Template-composeApp'.");
    }
    if (typeof this['Kotlin-DateTime-library-kotlinx-datetime-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Compose-Template-composeApp'. Its dependency 'Kotlin-DateTime-library-kotlinx-datetime-js-ir' was not found. Please, check whether 'Kotlin-DateTime-library-kotlinx-datetime-js-ir' is loaded prior to 'Compose-Template-composeApp'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Compose-Template-composeApp'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'Compose-Template-composeApp'.");
    }
    if (typeof this['androidx-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'Compose-Template-composeApp'. Its dependency 'androidx-ui-graphics' was not found. Please, check whether 'androidx-ui-graphics' is loaded prior to 'Compose-Template-composeApp'.");
    }
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'Compose-Template-composeApp'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'Compose-Template-composeApp'.");
    }
    if (typeof this['androidx-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'Compose-Template-composeApp'. Its dependency 'androidx-ui-text' was not found. Please, check whether 'androidx-ui-text' is loaded prior to 'Compose-Template-composeApp'.");
    }
    if (typeof this['androidx-material3'] === 'undefined') {
      throw new Error("Error loading module 'Compose-Template-composeApp'. Its dependency 'androidx-material3' was not found. Please, check whether 'androidx-material3' is loaded prior to 'Compose-Template-composeApp'.");
    }
    if (typeof this['androidx-ui'] === 'undefined') {
      throw new Error("Error loading module 'Compose-Template-composeApp'. Its dependency 'androidx-ui' was not found. Please, check whether 'androidx-ui' is loaded prior to 'Compose-Template-composeApp'.");
    }
    if (typeof this['androidx-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'Compose-Template-composeApp'. Its dependency 'androidx-foundation-layout' was not found. Please, check whether 'androidx-foundation-layout' is loaded prior to 'Compose-Template-composeApp'.");
    }
    if (typeof this['androidx-foundation'] === 'undefined') {
      throw new Error("Error loading module 'Compose-Template-composeApp'. Its dependency 'androidx-foundation' was not found. Please, check whether 'androidx-foundation' is loaded prior to 'Compose-Template-composeApp'.");
    }
    root['Compose-Template-composeApp'] = factory(typeof this['Compose-Template-composeApp'] === 'undefined' ? {} : this['Compose-Template-composeApp'], JsJodaTimeZoneModule, this['kotlin-kotlin-stdlib-js-ir'], this['androidx-runtime'], this['Kotlin-DateTime-library-kotlinx-datetime-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['androidx-ui-graphics'], this['androidx-ui-unit'], this['androidx-ui-text'], this['androidx-material3'], this['androidx-ui'], this['androidx-foundation-layout'], this['androidx-foundation']);
  }
}(this, function (_, JsJodaTimeZoneModule, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_datetime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_foundation_foundation) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.mf;
  var objectMeta = kotlin_kotlin.$_$.lf;
  var VOID = kotlin_kotlin.$_$.jm;
  var setMetadataFor = kotlin_kotlin.$_$.nf;
  var THROW_CCE = kotlin_kotlin.$_$.sk;
  var isObject = kotlin_kotlin.$_$.ze;
  var Unit_getInstance = kotlin_kotlin.$_$.k6;
  var equals = kotlin_kotlin.$_$.de;
  var ReadWriteProperty = kotlin_kotlin.$_$.cg;
  var classMeta = kotlin_kotlin.$_$.zd;
  var getStringHashCode = kotlin_kotlin.$_$.le;
  var hashCode = kotlin_kotlin.$_$.me;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var NotImplementedError = kotlin_kotlin.$_$.mk;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.o1;
  var charSequenceLength = kotlin_kotlin.$_$.xd;
  var isCharSequence = kotlin_kotlin.$_$.te;
  var trim = kotlin_kotlin.$_$.rj;
  var toString = kotlin_kotlin.$_$.rf;
  var Triple = kotlin_kotlin.$_$.uk;
  var toLocalDateTime = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.v3;
  var coerceAtLeast = kotlin_kotlin.$_$.gg;
  var repeat = kotlin_kotlin.$_$.vi;
  var compareValues = kotlin_kotlin.$_$.nc;
  var CoroutineImpl = kotlin_kotlin.$_$.id;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w1;
  var isInterface = kotlin_kotlin.$_$.xe;
  var toDoubleOrNull = kotlin_kotlin.$_$.gj;
  var println = kotlin_kotlin.$_$.pd;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.sc;
  var Companion_getInstance = kotlin_kotlin.$_$.c6;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.i;
  var toDuration = kotlin_kotlin.$_$.vj;
  var Duration = kotlin_kotlin.$_$.tj;
  var to = kotlin_kotlin.$_$.gm;
  var listOf = kotlin_kotlin.$_$.qa;
  var sortedWith = kotlin_kotlin.$_$.ob;
  var Comparator = kotlin_kotlin.$_$.dk;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var Long = kotlin_kotlin.$_$.kk;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.z4;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k2;
  var _TextUnit___init__impl__r5fj1s = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w2;
  var _TextOverflow___init__impl__obguoe = kotlin_org_jetbrains_compose_ui_ui_text.$_$.v1;
  var Text$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.h;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.r;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j2;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var emptyList = kotlin_kotlin.$_$.c9;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.y6;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.v;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui.$_$.x6;
  var columnMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.u3;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var get_LocalLayoutDirection = kotlin_org_jetbrains_compose_ui_ui.$_$.z3;
  var get_LocalViewConfiguration = kotlin_org_jetbrains_compose_ui_ui.$_$.c4;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui.$_$.t6;
  var materializerOf = kotlin_org_jetbrains_compose_ui_ui.$_$.h3;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var ColumnScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.x;
  var fillMaxWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h2;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.n;
  var MaterialTheme_getInstance = kotlin_org_jetbrains_compose_material3_material3.$_$.l;
  var FixedOffsetTimeZone = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.s;
  var System_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.n;
  var offsetAt = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.w;
  var DurationUnit_SECONDS_getInstance = kotlin_kotlin.$_$.l;
  var toDuration_0 = kotlin_kotlin.$_$.wj;
  var _Duration___get_inWholeMilliseconds__impl__msfiry = kotlin_kotlin.$_$.k3;
  var OutlinedTextField$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.e;
  var Button$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.a;
  var CircularProgressIndicator$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.c;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var LazyColumn$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.n;
  var KMutableProperty0 = kotlin_kotlin.$_$.zg;
  var THROW_ISE = kotlin_kotlin.$_$.tk;
  var getLocalDelegateReference = kotlin_kotlin.$_$.he;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n2;
  var Duration__toString_impl_8d916b = kotlin_kotlin.$_$.t3;
  var ensureNotNull = kotlin_kotlin.$_$.kl;
  var Companion_getInstance_5 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.o;
  var until = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.c1;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.w5;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p3;
  var toString_0 = kotlin_kotlin.$_$.fm;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var emptyMap = kotlin_kotlin.$_$.d9;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var Card$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.b;
  var padStart = kotlin_kotlin.$_$.ri;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var padding_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.p;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l2;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var SuspendFunction1 = kotlin_kotlin.$_$.kd;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j;
  var isSystemInDarkTheme$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f1;
  var MaterialTheme$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.d;
  var Surface$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.g;
  var lightColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.k;
  var darkColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.j;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.q;
  var Shapes = kotlin_org_jetbrains_compose_material3_material3.$_$.f;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.f2;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.i2;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s1;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.r1;
  var Typography = kotlin_org_jetbrains_compose_material3_material3.$_$.i;
  var toInstant = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a1;
  var DatePeriod_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.i;
  var plus = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.x;
  var numberToLong = kotlin_kotlin.$_$.jf;
  var Companion_getInstance_9 = kotlin_kotlin.$_$.e6;
  var isNaN_0 = kotlin_kotlin.$_$.ql;
  var Duration__div_impl_dknbf4 = kotlin_kotlin.$_$.j3;
  var numberToInt = kotlin_kotlin.$_$.if;
  var toDuration_1 = kotlin_kotlin.$_$.uj;
  var _Duration___get_inWholeNanoseconds__impl__r5x4mr = kotlin_kotlin.$_$.l3;
  var LocalDateTime_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.l;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var LocalDateTime_init_$Create$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.k;
  var plus_0 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.y;
  var LocalTime_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.m;
  var Duration__times_impl_sfuzvp = kotlin_kotlin.$_$.q3;
  var maxOf = kotlin_kotlin.$_$.pc;
  var Companion_getInstance_10 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.p;
  var roundToLong = kotlin_kotlin.$_$.yf;
  var toLong = kotlin_kotlin.$_$.pf;
  var mapOf = kotlin_kotlin.$_$.sa;
  var StringBuilder = kotlin_kotlin.$_$.qh;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.m1;
  var numberRangeToNumber = kotlin_kotlin.$_$.ff;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i2;
  var Enum = kotlin_kotlin.$_$.ek;
  var objectCreate = kotlin_kotlin.$_$.kf;
  var DayOfWeek_SATURDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.c;
  var DayOfWeek_FRIDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var DayOfWeek_THURSDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.e;
  var compareTo = kotlin_kotlin.$_$.ae;
  var DayOfWeek_SUNDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.d;
  var DayOfWeek_TUESDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.f;
  var DayOfWeek_WEDNESDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.g;
  var DayOfWeek_MONDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var DurationUnit_DAYS_getInstance = kotlin_kotlin.$_$.g;
  var DurationUnit_HOURS_getInstance = kotlin_kotlin.$_$.h;
  var DurationUnit_MINUTES_getInstance = kotlin_kotlin.$_$.j;
  var LocalDate_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.j;
  var until_0 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.d1;
  var Companion_getInstance_11 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.q;
  var plus_1 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.z;
  var minus = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.v;
  var Comparable = kotlin_kotlin.$_$.ck;
  var rangeTo = kotlin_kotlin.$_$.ug;
  var atStartOfDayIn = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.t;
  var Month_FEBRUARY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.h;
  var daysUntil = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.u;
  var get_PI = kotlin_kotlin.$_$.sf;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.u5;
  var isInfinite = kotlin_kotlin.$_$.nl;
  var toBits = kotlin_kotlin.$_$.cm;
  var abs = kotlin_kotlin.$_$.tf;
  var interfaceMeta = kotlin_kotlin.$_$.oe;
  var take = kotlin_kotlin.$_$.ej;
  var ComposeWindow = kotlin_org_jetbrains_compose_ui_ui.$_$.k5;
  var _get_layer__eubrs0 = kotlin_org_jetbrains_compose_ui_ui.$_$.a6;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Res, 'Res', objectMeta);
  setMetadataFor(ResStrings, 'ResStrings', objectMeta);
  setMetadataFor(ResImages, 'ResImages', objectMeta);
  setMetadataFor(UNINITIALIZED_VALUE, 'UNINITIALIZED_VALUE', objectMeta);
  setMetadataFor(LazyMutable, 'LazyMutable', classMeta, VOID, [ReadWriteProperty]);
  setMetadataFor(ZmanCardModel, 'ZmanCardModel', classMeta);
  setMetadataFor(ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda$slambda_ggm0yy, 'ComposableSingletons$AppKt$lambda-4$lambda$slambda$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda$slambda_ggm0yy_1, 'ComposableSingletons$AppKt$lambda-4$lambda$slambda$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda_y10tvk, 'ComposableSingletons$AppKt$lambda-4$lambda$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  setMetadataFor(ComposableSingletons$AppKt$lambda_4$lambda$slambda_nvkcgm, 'ComposableSingletons$AppKt$lambda-4$lambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(ComposableSingletons$AppKt, 'ComposableSingletons$AppKt', objectMeta);
  setMetadataFor(ZmanCard$composable$slambda, 'ZmanCard$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(AstronomicalCalendar, 'AstronomicalCalendar', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(ZmanimCalendar, 'ZmanimCalendar', classMeta, AstronomicalCalendar);
  setMetadataFor(ComplexZmanimCalendar, 'ComplexZmanimCalendar', classMeta, ZmanimCalendar);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Daf, 'Daf', classMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(HebrewDateFormatter, 'HebrewDateFormatter', classMeta);
  setMetadataFor(Parsha, 'Parsha', classMeta, Enum);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(JewishDate, 'JewishDate', classMeta, VOID, [Comparable]);
  setMetadataFor(JewishCalendar, 'JewishCalendar', classMeta, JewishDate);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(TefilaRules, 'TefilaRules', classMeta);
  setMetadataFor(YerushalmiYomiCalculator, 'YerushalmiYomiCalculator', objectMeta);
  setMetadataFor(YomiCalculator, 'YomiCalculator', objectMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(AstronomicalCalculator, 'AstronomicalCalculator', classMeta);
  setMetadataFor(DateUtils, 'DateUtils', objectMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(GeoLocation, 'GeoLocation', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(NOAACalculator, 'NOAACalculator', classMeta, AstronomicalCalculator);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(SunTimesCalculator, 'SunTimesCalculator', classMeta, AstronomicalCalculator);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(Time, 'Time', classMeta);
  setMetadataFor(Formatter, 'Formatter', interfaceMeta);
  setMetadataFor(sam$com_kosherjava_zmanim_util_WeekFormat_Formatter$0, 'sam$com_kosherjava_zmanim_util_WeekFormat_Formatter$0', classMeta, VOID, [Formatter]);
  setMetadataFor(sam$com_kosherjava_zmanim_util_WeekFormat_Formatter$0_0, 'sam$com_kosherjava_zmanim_util_WeekFormat_Formatter$0', classMeta, VOID, [Formatter]);
  setMetadataFor(WeekFormat, 'WeekFormat', objectMeta);
  setMetadataFor(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  setMetadataFor(sam$kotlin_Comparator$0_1, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  setMetadataFor(sam$kotlin_Comparator$0_2, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(Zman, 'Zman', classMeta);
  setMetadataFor(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt', objectMeta);
  //endregion
  function get_$stableprop() {
    return 0;
  }
  function Res() {
    Res_instance = this;
    this.string_1 = ResStrings_getInstance();
    this.image_1 = ResImages_getInstance();
    this.$stable_1 = 0;
  }
  protoOf(Res).get_string_jnpst6_k$ = function () {
    return this.string_1;
  };
  protoOf(Res).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  var Res_instance;
  function Res_getInstance() {
    if (Res_instance == null)
      new Res();
    return Res_instance;
  }
  function get_$stableprop_0() {
    return 0;
  }
  function ResStrings() {
    ResStrings_instance = this;
    this.$stable_1 = 0;
  }
  var ResStrings_instance;
  function ResStrings_getInstance() {
    if (ResStrings_instance == null)
      new ResStrings();
    return ResStrings_instance;
  }
  function get_$stableprop_1() {
    return 0;
  }
  function ResImages() {
    ResImages_instance = this;
    this.$stable_1 = 0;
  }
  var ResImages_instance;
  function ResImages_getInstance() {
    if (ResImages_instance == null)
      new ResImages();
    return ResImages_instance;
  }
  function UNINITIALIZED_VALUE() {
    UNINITIALIZED_VALUE_instance = this;
  }
  var UNINITIALIZED_VALUE_instance;
  function UNINITIALIZED_VALUE_getInstance() {
    if (UNINITIALIZED_VALUE_instance == null)
      new UNINITIALIZED_VALUE();
    return UNINITIALIZED_VALUE_instance;
  }
  function _set_prop__9semvo($this, _set____db54di) {
    $this.prop_1 = _set____db54di;
  }
  function _get_prop__dc6mh4($this) {
    return $this.prop_1;
  }
  function get_$stableprop_2() {
    return 8;
  }
  function LazyMutable(initializer) {
    this.initializer_1 = initializer;
    this.prop_1 = UNINITIALIZED_VALUE_getInstance();
    this.sync_1 = new Object();
    this.$stable_1 = 8;
  }
  protoOf(LazyMutable).get_initializer_yawku1_k$ = function () {
    return this.initializer_1;
  };
  protoOf(LazyMutable).get_sync_woundw_k$ = function () {
    return this.sync_1;
  };
  protoOf(LazyMutable).getValue_1h979_k$ = function (thisRef, property) {
    var tmp;
    if (equals(this.prop_1, UNINITIALIZED_VALUE_getInstance())) {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      var tmp0_synchronized = this.sync_1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
      var tmp_0;
      if (equals(this.prop_1, UNINITIALIZED_VALUE_getInstance())) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = this.initializer_1();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'LazyMutable.getValue.<anonymous>.<anonymous>' call
        this.prop_1 = tmp0_also;
        tmp$ret$0 = tmp0_also;
        tmp_0 = tmp$ret$0;
      } else {
        var tmp_1 = this.prop_1;
        tmp_0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      }
      return tmp_0;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    } else {
      var tmp_2 = this.prop_1;
      tmp = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    }
    return tmp;
  };
  protoOf(LazyMutable).getValue_4lco8v_k$ = function (thisRef, property) {
    return this.getValue_1h979_k$((thisRef == null ? true : isObject(thisRef)) ? thisRef : THROW_CCE(), property);
  };
  protoOf(LazyMutable).setValue_o0pjfh_k$ = function (thisRef, property, value) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp0_synchronized = this.sync_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.prop_1 = value;
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  protoOf(LazyMutable).setValue_yh7md5_k$ = function (thisRef, property, value) {
    var tmp = (thisRef == null ? true : isObject(thisRef)) ? thisRef : THROW_CCE();
    return this.setValue_o0pjfh_k$(tmp, property, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  function get_$stableprop_3() {
    return 8;
  }
  function ZmanCardModel(zmanType, mainZmanOpinion, mainZmanTime, otherOpinions) {
    this.zmanType_1 = zmanType;
    this.mainZmanOpinion_1 = mainZmanOpinion;
    this.mainZmanTime_1 = mainZmanTime;
    this.otherOpinions_1 = otherOpinions;
    this.$stable_1 = 8;
  }
  protoOf(ZmanCardModel).get_zmanType_hvrzr7_k$ = function () {
    return this.zmanType_1;
  };
  protoOf(ZmanCardModel).get_mainZmanOpinion_e2y4kg_k$ = function () {
    return this.mainZmanOpinion_1;
  };
  protoOf(ZmanCardModel).get_mainZmanTime_qo4sdr_k$ = function () {
    return this.mainZmanTime_1;
  };
  protoOf(ZmanCardModel).get_otherOpinions_l3woug_k$ = function () {
    return this.otherOpinions_1;
  };
  protoOf(ZmanCardModel).component1_7eebsc_k$ = function () {
    return this.zmanType_1;
  };
  protoOf(ZmanCardModel).component2_7eebsb_k$ = function () {
    return this.mainZmanOpinion_1;
  };
  protoOf(ZmanCardModel).component3_7eebsa_k$ = function () {
    return this.mainZmanTime_1;
  };
  protoOf(ZmanCardModel).component4_7eebs9_k$ = function () {
    return this.otherOpinions_1;
  };
  protoOf(ZmanCardModel).copy_d2tms9_k$ = function (zmanType, mainZmanOpinion, mainZmanTime, otherOpinions) {
    return new ZmanCardModel(zmanType, mainZmanOpinion, mainZmanTime, otherOpinions);
  };
  protoOf(ZmanCardModel).copy$default_2f2r7b_k$ = function (zmanType, mainZmanOpinion, mainZmanTime, otherOpinions, $super) {
    zmanType = zmanType === VOID ? this.zmanType_1 : zmanType;
    mainZmanOpinion = mainZmanOpinion === VOID ? this.mainZmanOpinion_1 : mainZmanOpinion;
    mainZmanTime = mainZmanTime === VOID ? this.mainZmanTime_1 : mainZmanTime;
    otherOpinions = otherOpinions === VOID ? this.otherOpinions_1 : otherOpinions;
    return $super === VOID ? this.copy_d2tms9_k$(zmanType, mainZmanOpinion, mainZmanTime, otherOpinions) : $super.copy_d2tms9_k$.call(this, zmanType, mainZmanOpinion, mainZmanTime, otherOpinions);
  };
  protoOf(ZmanCardModel).toString = function () {
    return 'ZmanCardModel(zmanType=' + this.zmanType_1 + ', mainZmanOpinion=' + this.mainZmanOpinion_1 + ', mainZmanTime=' + this.mainZmanTime_1 + ', otherOpinions=' + this.otherOpinions_1 + ')';
  };
  protoOf(ZmanCardModel).hashCode = function () {
    var result = getStringHashCode(this.zmanType_1);
    result = imul(result, 31) + getStringHashCode(this.mainZmanOpinion_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.mainZmanTime_1) | 0;
    result = imul(result, 31) + hashCode(this.otherOpinions_1) | 0;
    return result;
  };
  protoOf(ZmanCardModel).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ZmanCardModel))
      return false;
    var tmp0_other_with_cast = other instanceof ZmanCardModel ? other : THROW_CCE();
    if (!(this.zmanType_1 === tmp0_other_with_cast.zmanType_1))
      return false;
    if (!(this.mainZmanOpinion_1 === tmp0_other_with_cast.mainZmanOpinion_1))
      return false;
    if (!(this.mainZmanTime_1 === tmp0_other_with_cast.mainZmanTime_1))
      return false;
    if (!equals(this.otherOpinions_1, tmp0_other_with_cast.otherOpinions_1))
      return false;
    return true;
  };
  function App() {
    illegalDecoyCallException('App');
  }
  function ZmanCard(model, content) {
    illegalDecoyCallException('ZmanCard');
  }
  function formatted(_this__u8e3s4, withColons) {
    var tmp;
    if (withColons) {
      var tmp_0;
      if (_this__u8e3s4.get_first_irdx8n_k$() === 0 ? _this__u8e3s4.get_second_jf7fjx_k$() > 0 : false) {
        tmp_0 = '' + _this__u8e3s4.get_second_jf7fjx_k$() + ':';
      } else if (_this__u8e3s4.get_first_irdx8n_k$() > 0) {
        tmp_0 = '' + _this__u8e3s4.get_first_irdx8n_k$() + ':' + formatted$formatted(_this__u8e3s4.get_second_jf7fjx_k$()) + ':';
      } else if (_this__u8e3s4.get_second_jf7fjx_k$() === 0) {
        tmp_0 = '00:';
      } else {
        var tmp0_TODO = 'Should not have happened. this=' + _this__u8e3s4;
        throw new NotImplementedError('An operation is not implemented: ' + tmp0_TODO);
      }
      var string = tmp_0;
      tmp = string + formatted$formatted(_this__u8e3s4.get_third_iz27um_k$());
    } else {
      tmp = timeFormattedConcisely(_this__u8e3s4.get_first_irdx8n_k$(), _this__u8e3s4.get_second_jf7fjx_k$(), _this__u8e3s4.get_third_iz27um_k$());
    }
    return tmp;
  }
  function timeFormattedConcisely(hour, minute, second) {
    var string = StringBuilder_init_$Create$();
    if (!(hour === 0)) {
      string.append_ssq29y_k$('' + hour + ' hr ');
    }
    if (!(minute === 0)) {
      string.append_ssq29y_k$('' + minute + ' min ');
    }
    if (!(second === 0)) {
      string.append_ssq29y_k$('' + second + ' sec');
    }
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$0 = charSequenceLength(string) === 0;
    if (tmp$ret$0) {
      tmp = '0 sec';
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.text.trim' call
      var tmp0_trim = string.toString();
      tmp$ret$1 = toString(trim(isCharSequence(tmp0_trim) ? tmp0_trim : THROW_CCE()));
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function toHrMinSec(_this__u8e3s4) {
    var hour = 0;
    var minute = 0;
    var second = _this__u8e3s4;
    minute = minute + (second / 60 | 0) | 0;
    hour = hour + (minute / 60 | 0) | 0;
    second = second % 60 | 0;
    minute = minute % 60 | 0;
    return new Triple(hour, minute, second);
  }
  function format(_this__u8e3s4, timeZone) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'sternbach.software.format.<anonymous>' call
    var datetime = toLocalDateTime(_this__u8e3s4, timeZone);
    tmp0_apply.append_ssq29y_k$(format$_anonymous_$pad_uy2ydt(datetime.get_hour_wonfal_k$()));
    tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(58));
    tmp0_apply.append_ssq29y_k$(format$_anonymous_$pad_uy2ydt(datetime.get_minute_gnc10d_k$()));
    tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(58));
    tmp0_apply.append_ssq29y_k$(format$_anonymous_$pad_uy2ydt(datetime.get_second_jf7fjx_k$()));
    tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(46));
    tmp0_apply.append_t8pm91_k$(datetime.get_nanosecond_fws9td_k$() / 1000000 | 0);
    tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
    tmp0_apply.append_t8pm91_k$(datetime.get_monthNumber_nb47ls_k$());
    tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(45));
    tmp0_apply.append_ssq29y_k$(format$_anonymous_$pad_uy2ydt(datetime.get_dayOfMonth_vblo3a_k$()));
    tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(45));
    tmp0_apply.append_t8pm91_k$(datetime.get_year_woy26e_k$());
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function getFormattedLabel(_this__u8e3s4) {
    return _this__u8e3s4 + ': ' + repeat(' ', coerceAtLeast(50 - _this__u8e3s4.length | 0, 10));
  }
  function ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda$lambda_c1502z(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'sternbach.software.ComposableSingletons$AppKt.lambda-4.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    tmp$ret$0 = a.get_first_irdx8n_k$();
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'sternbach.software.ComposableSingletons$AppKt.lambda-4.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    tmp$ret$1 = b.get_first_irdx8n_k$();
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda$lambda_c1502z_0(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'sternbach.software.ComposableSingletons$AppKt.lambda-4.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    tmp$ret$0 = a.get_first_irdx8n_k$();
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'sternbach.software.ComposableSingletons$AppKt.lambda-4.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    tmp$ret$1 = b.get_first_irdx8n_k$();
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda$slambda_ggm0yy($values, $listOfZmanim, $shaaZmanisValues$delegate, $allZmanim$delegate, $calculatingZmanim$delegate, resultContinuation) {
    this.$values_1 = $values;
    this.$listOfZmanim_1 = $listOfZmanim;
    this.$shaaZmanisValues$delegate_1 = $shaaZmanisValues$delegate;
    this.$allZmanim$delegate_1 = $allZmanim$delegate;
    this.$calculatingZmanim$delegate_1 = $calculatingZmanim$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda$slambda_ggm0yy).invoke_d6gbsu_k$ = function ($this$withContext, $completion) {
    var tmp = this.create_b6qu53_k$($this$withContext, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda$slambda_ggm0yy).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda$slambda_ggm0yy).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          invoke$lambda_8(this.$shaaZmanisValues$delegate_1, this.$values_1);
          invoke$lambda_10(this.$allZmanim$delegate_1, this.$listOfZmanim_1);
          invoke$lambda_4(this.$calculatingZmanim$delegate_1, false);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda$slambda_ggm0yy).create_b6qu53_k$ = function ($this$withContext, completion) {
    var i = new ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda$slambda_ggm0yy(this.$values_1, this.$listOfZmanim_1, this.$shaaZmanisValues$delegate_1, this.$allZmanim$delegate_1, this.$calculatingZmanim$delegate_1, completion);
    i.$this$withContext_1 = $this$withContext;
    return i;
  };
  protoOf(ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda$slambda_ggm0yy).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda$slambda_ggm0yy_0($values, $listOfZmanim, $shaaZmanisValues$delegate, $allZmanim$delegate, $calculatingZmanim$delegate, resultContinuation) {
    var i = new ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda$slambda_ggm0yy($values, $listOfZmanim, $shaaZmanisValues$delegate, $allZmanim$delegate, $calculatingZmanim$delegate, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.invoke_d6gbsu_k$($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda$slambda_ggm0yy_1($calculatingZmanim$delegate, resultContinuation) {
    this.$calculatingZmanim$delegate_1 = $calculatingZmanim$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda$slambda_ggm0yy_1).invoke_d6gbsu_k$ = function ($this$withContext, $completion) {
    var tmp = this.create_b6qu53_k$($this$withContext, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda$slambda_ggm0yy_1).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda$slambda_ggm0yy_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          invoke$lambda_4(this.$calculatingZmanim$delegate_1, false);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda$slambda_ggm0yy_1).create_b6qu53_k$ = function ($this$withContext, completion) {
    var i = new ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda$slambda_ggm0yy_1(this.$calculatingZmanim$delegate_1, completion);
    i.$this$withContext_1 = $this$withContext;
    return i;
  };
  protoOf(ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda$slambda_ggm0yy_1).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda$slambda_ggm0yy_2($calculatingZmanim$delegate, resultContinuation) {
    var i = new ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda$slambda_ggm0yy_1($calculatingZmanim$delegate, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.invoke_d6gbsu_k$($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda_y10tvk($tz, $latitude$delegate, $longitude$delegate, $shaaZmanisValues$delegate, $allZmanim$delegate, $calculatingZmanim$delegate, resultContinuation) {
    this.$tz_1 = $tz;
    this.$latitude$delegate_1 = $latitude$delegate;
    this.$longitude$delegate_1 = $longitude$delegate;
    this.$shaaZmanisValues$delegate_1 = $shaaZmanisValues$delegate;
    this.$allZmanim$delegate_1 = $allZmanim$delegate;
    this.$calculatingZmanim$delegate_1 = $calculatingZmanim$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda_y10tvk).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda_y10tvk).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda_y10tvk).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            this.latitudeDouble0__1 = toDoubleOrNull(invoke$lambda(this.$latitude$delegate_1));
            this.longitudeDouble1__1 = toDoubleOrNull(invoke$lambda_1(this.$longitude$delegate_1));
            println('Latitude: ' + this.latitudeDouble0__1);
            println('Longitude: ' + this.longitudeDouble1__1);
            if (!(this.latitudeDouble0__1 == null) ? !(this.longitudeDouble1__1 == null) : false) {
              this.geoLocation2__1 = GeoLocation_init_$Create$_0('Israel', this.latitudeDouble0__1, this.longitudeDouble1__1, 0.0, this.$tz_1);
              this.calendar3__1 = new ComplexZmanimCalendar(this.geoLocation2__1);
              var tmp_0 = this;
              var tmp0__get_milliseconds__kazo1t = Companion_getInstance();
              var tmp1__get_milliseconds__r2e6ua = this.calendar3__1.get_shaahZmanis19Point8Degrees_omnon1_k$();
              var tmp_1 = to(new Duration(toDuration(tmp1__get_milliseconds__r2e6ua, DurationUnit_MILLISECONDS_getInstance())), 'shaahZmanis19Point8Degrees');
              var tmp2__get_milliseconds__xtspmr = Companion_getInstance();
              var tmp3__get_milliseconds__ufwtjw = this.calendar3__1.get_shaahZmanis18Degrees_mmkhas_k$();
              var tmp_2 = to(new Duration(toDuration(tmp3__get_milliseconds__ufwtjw, DurationUnit_MILLISECONDS_getInstance())), 'shaahZmanis18Degrees');
              var tmp4__get_milliseconds__noiarf = Companion_getInstance();
              var tmp5__get_milliseconds__gx3ryy = this.calendar3__1.get_shaahZmanis26Degrees_vwanqn_k$();
              var tmp_3 = to(new Duration(toDuration(tmp5__get_milliseconds__gx3ryy, DurationUnit_MILLISECONDS_getInstance())), 'shaahZmanis26Degrees');
              var tmp6__get_milliseconds__a5p96h = Companion_getInstance();
              var tmp7__get_milliseconds__3eaqe0 = this.calendar3__1.get_shaahZmanis16Point1Degrees_bsasgd_k$();
              var tmp_4 = to(new Duration(toDuration(tmp7__get_milliseconds__3eaqe0, DurationUnit_MILLISECONDS_getInstance())), 'shaahZmanis16Point1Degrees');
              var tmp8__get_milliseconds__3d3seh = Companion_getInstance();
              var tmp9__get_milliseconds__a4ib6y = this.calendar3__1.get_shaahZmanis60Minutes_fjznzl_k$();
              var tmp_5 = to(new Duration(toDuration(tmp9__get_milliseconds__a4ib6y, DurationUnit_MILLISECONDS_getInstance())), 'shaahZmanis60Minutes');
              var tmp10__get_milliseconds__ozwx5u = Companion_getInstance();
              var tmp11__get_milliseconds__i8iedd = this.calendar3__1.get_shaahZmanis72MinutesZmanis_6seqxm_k$();
              var tmp_6 = to(new Duration(toDuration(tmp11__get_milliseconds__i8iedd, DurationUnit_MILLISECONDS_getInstance())), 'shaahZmanis72MinutesZmanis');
              var tmp12__get_milliseconds__bh3vkw = Companion_getInstance();
              var tmp13__get_milliseconds__4ppcsf = this.calendar3__1.get_shaahZmanis90Minutes_338cek_k$();
              var tmp_7 = to(new Duration(toDuration(tmp13__get_milliseconds__4ppcsf, DurationUnit_MILLISECONDS_getInstance())), 'shaahZmanis90Minutes');
              var tmp14__get_milliseconds__21p602 = Companion_getInstance();
              var tmp15__get_milliseconds__8t3osj = this.calendar3__1.get_shaahZmanis90MinutesZmanis_2cekv2_k$();
              var tmp_8 = to(new Duration(toDuration(tmp15__get_milliseconds__8t3osj, DurationUnit_MILLISECONDS_getInstance())), 'shaahZmanis90MinutesZmanis');
              var tmp16__get_milliseconds__fki7l0 = Companion_getInstance();
              var tmp17__get_milliseconds__mbwqdh = this.calendar3__1.get_shaahZmanis96MinutesZmanis_n7jdnc_k$();
              var tmp_9 = to(new Duration(toDuration(tmp17__get_milliseconds__mbwqdh, DurationUnit_MILLISECONDS_getInstance())), 'shaahZmanis96MinutesZmanis');
              var tmp18__get_milliseconds__t3b95y = Companion_getInstance();
              var tmp19__get_milliseconds__z6ea0p = this.calendar3__1.get_shaahZmanisAteretTorah_tormnv_k$();
              var tmp_10 = to(new Duration(toDuration(tmp19__get_milliseconds__z6ea0p, DurationUnit_MILLISECONDS_getInstance())), 'shaahZmanisAteretTorah');
              var tmp20__get_milliseconds__shqwkj = Companion_getInstance();
              var tmp21__get_milliseconds__lqcds2 = this.calendar3__1.get_shaahZmanisAlos16Point1ToTzais3Point8_sqd1dm_k$();
              var tmp_11 = to(new Duration(toDuration(tmp21__get_milliseconds__lqcds2, DurationUnit_MILLISECONDS_getInstance())), 'shaahZmanisAlos16Point1ToTzais3Point8');
              var tmp22__get_milliseconds__eyxuzl = Companion_getInstance();
              var tmp23__get_milliseconds__87jc74 = this.calendar3__1.get_shaahZmanisAlos16Point1ToTzais3Point7_sqd1dl_k$();
              var tmp_12 = to(new Duration(toDuration(tmp23__get_milliseconds__87jc74, DurationUnit_MILLISECONDS_getInstance())), 'shaahZmanisAlos16Point1ToTzais3Point7');
              var tmp24__get_milliseconds__1g4ten = Companion_getInstance();
              var tmp25__get_milliseconds__5b9pdu = this.calendar3__1.get_shaahZmanis96Minutes_rsae0e_k$();
              var tmp_13 = to(new Duration(toDuration(tmp25__get_milliseconds__5b9pdu, DurationUnit_MILLISECONDS_getInstance())), 'shaahZmanis96Minutes');
              var tmp26__get_milliseconds__c2o86b = Companion_getInstance();
              var tmp27__get_milliseconds__iu2qys = this.calendar3__1.get_shaahZmanis120Minutes_tajdj0_k$();
              var tmp_14 = to(new Duration(toDuration(tmp27__get_milliseconds__iu2qys, DurationUnit_MILLISECONDS_getInstance())), 'shaahZmanis120Minutes');
              var tmp28__get_milliseconds__plh9r9 = Companion_getInstance();
              var tmp29__get_milliseconds__wcvsjq = this.calendar3__1.get_shaahZmanis120MinutesZmanis_fd9yky_k$();
              var tmp30_sortedBy = listOf([tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, to(new Duration(toDuration(tmp29__get_milliseconds__wcvsjq, DurationUnit_MILLISECONDS_getInstance())), 'shaahZmanis120MinutesZmanis')]);
              var tmp_15 = ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda$lambda_c1502z;
              tmp_0.values4__1 = sortedWith(tmp30_sortedBy, new sam$kotlin_Comparator$0(tmp_15));
              var tmp_16 = this;
              var tmp31_sortedBy = listOf([to(this.calendar3__1.get_plagHamincha120MinutesZmanis_c7tnc8_k$(), 'plagHamincha120MinutesZmanis'), to(this.calendar3__1.get_plagHamincha120Minutes_khqp6q_k$(), 'plagHamincha120Minutes'), to(this.calendar3__1.get_alos60_b0gi1e_k$(), 'alos60'), to(this.calendar3__1.get_alos72Zmanis_sw9mn7_k$(), 'alos72Zmanis'), to(this.calendar3__1.get_alos96_b0gi45_k$(), 'alos96'), to(this.calendar3__1.get_alos90Zmanis_lt8yv_k$(), 'alos90Zmanis'), to(this.calendar3__1.get_alos96Zmanis_gfgee7_k$(), 'alos96Zmanis'), to(this.calendar3__1.get_alos90_b0gi3z_k$(), 'alos90'), to(this.calendar3__1.get_alos120_drcuax_k$(), 'alos120'), to(this.calendar3__1.get_alos120Zmanis_7vd9a9_k$(), 'alos120Zmanis'), to(this.calendar3__1.get_alos26Degrees_y8hrv9_k$(), 'alos26Degrees'), to(this.calendar3__1.get_alos18Degrees_hq8uxk_k$(), 'alos18Degrees'), to(this.calendar3__1.get_alos19Degrees_b3dm4n_k$(), 'alos19Degrees'), to(this.calendar3__1.get_alos19Point8Degrees_dy6s1t_k$(), 'alos19Point8Degrees'), to(this.calendar3__1.get_alos16Point1Degrees_mgrp1l_k$(), 'alos16Point1Degrees'), to(this.calendar3__1.get_misheyakir11Point5Degrees_grc5wf_k$(), 'misheyakir11Point5Degrees'), to(this.calendar3__1.get_misheyakir11Degrees_ml647a_k$(), 'misheyakir11Degrees'), to(this.calendar3__1.get_misheyakir10Point2Degrees_nu3nkr_k$(), 'misheyakir10Point2Degrees'), to(this.calendar3__1.get_misheyakir7Point65Degrees_ozu3jm_k$(), 'misheyakir7Point65Degrees'), to(this.calendar3__1.get_misheyakir9Point5Degrees_pwqs1i_k$(), 'misheyakir9Point5Degrees'), to(this.calendar3__1.get_sofZmanShmaMGA19Point8Degrees_lrgmt6_k$(), 'sofZmanShmaMGA19Point8Degrees'), to(this.calendar3__1.get_sofZmanShmaMGA16Point1Degrees_cuoy2k_k$(), 'sofZmanShmaMGA16Point1Degrees'), to(this.calendar3__1.get_sofZmanShmaMGA18Degrees_ls62xp_k$(), 'sofZmanShmaMGA18Degrees'), to(this.calendar3__1.get_sofZmanShmaMGA72MinutesZmanis_hukzlb_k$(), 'sofZmanShmaMGA72MinutesZmanis'), to(this.calendar3__1.get_sofZmanShmaMGA90Minutes_28ty1h_k$(), 'sofZmanShmaMGA90Minutes'), to(this.calendar3__1.get_sofZmanShmaMGA90MinutesZmanis_mal5nv_k$(), 'sofZmanShmaMGA90MinutesZmanis'), to(this.calendar3__1.get_sofZmanShmaMGA96Minutes_smosdh_k$(), 'sofZmanShmaMGA96Minutes'), to(this.calendar3__1.get_sofZmanShmaMGA96MinutesZmanis_1fgcvl_k$(), 'sofZmanShmaMGA96MinutesZmanis'), to(this.calendar3__1.get_sofZmanShma3HoursBeforeChatzos_bt0ag1_k$(), 'sofZmanShma3HoursBeforeChatzos'), to(this.calendar3__1.get_sofZmanShmaMGA120Minutes_34509f_k$(), 'sofZmanShmaMGA120Minutes'), to(this.calendar3__1.get_sofZmanShmaAlos16Point1ToSunset_p275ww_k$(), 'sofZmanShmaAlos16Point1ToSunset'), to(this.calendar3__1.get_sofZmanShmaAlos16Point1ToTzaisGeonim7Point083Degrees_bzql9b_k$(), 'sofZmanShmaAlos16Point1ToTzaisGeonim7Point083Degrees'), to(this.calendar3__1.get_sofZmanShmaKolEliyahu_fjtuft_k$(), 'sofZmanShmaKolEliyahu'), to(this.calendar3__1.get_sofZmanTfilaMGA19Point8Degrees_glssit_k$(), 'sofZmanTfilaMGA19Point8Degrees'), to(this.calendar3__1.get_sofZmanTfilaMGA16Point1Degrees_jt5okl_k$(), 'sofZmanTfilaMGA16Point1Degrees'), to(this.calendar3__1.get_sofZmanTfilaMGA18Degrees_bflvgk_k$(), 'sofZmanTfilaMGA18Degrees'), to(this.calendar3__1.get_sofZmanTfilaMGA72MinutesZmanis_et9n1u_k$(), 'sofZmanTfilaMGA72MinutesZmanis'), to(this.calendar3__1.get_sofZmanTfilaMGA90MinutesZmanis_ad9gza_k$(), 'sofZmanTfilaMGA90MinutesZmanis'), to(this.calendar3__1.get_sofZmanTfilaMGA96MinutesZmanis_v8e9rk_k$(), 'sofZmanTfilaMGA96MinutesZmanis'), to(this.calendar3__1.get_sofZmanTfila2HoursBeforeChatzos_r5j2ld_k$(), 'sofZmanTfila2HoursBeforeChatzos'), to(this.calendar3__1.get_minchaGedola30Minutes_kjd0dr_k$(), 'minchaGedola30Minutes'), to(this.calendar3__1.get_minchaGedola16Point1Degrees_dlfwnk_k$(), 'minchaGedola16Point1Degrees'), to(this.calendar3__1.get_minchaGedolaAhavatShalom_bbd5dq_k$(), 'minchaGedolaAhavatShalom'), to(this.calendar3__1.get_minchaGedolaGreaterThan30_lvavuv_k$(), 'minchaGedolaGreaterThan30'), to(this.calendar3__1.get_minchaKetana16Point1Degrees_ihd3fw_k$(), 'minchaKetana16Point1Degrees'), to(this.calendar3__1.get_minchaKetanaAhavatShalom_cqlpcq_k$(), 'minchaKetanaAhavatShalom'), to(this.calendar3__1.get_minchaKetana72Minutes_7mpkax_k$(), 'minchaKetana72Minutes'), to(this.calendar3__1.get_plagHamincha60Minutes_p05rcn_k$(), 'plagHamincha60Minutes'), to(this.calendar3__1.get_plagHamincha72Minutes_i9tdai_k$(), 'plagHamincha72Minutes'), to(this.calendar3__1.get_plagHamincha90Minutes_6cxqyi_k$(), 'plagHamincha90Minutes'), to(this.calendar3__1.get_plagHamincha96Minutes_xsnklo_k$(), 'plagHamincha96Minutes'), to(this.calendar3__1.get_plagHamincha96MinutesZmanis_o0nw9u_k$(), 'plagHamincha96MinutesZmanis'), to(this.calendar3__1.get_plagHamincha90MinutesZmanis_q5bcx0_k$(), 'plagHamincha90MinutesZmanis'), to(this.calendar3__1.get_plagHamincha72MinutesZmanis_ulbizk_k$(), 'plagHamincha72MinutesZmanis'), to(this.calendar3__1.get_plagHamincha16Point1Degrees_zfwhgt_k$(), 'plagHamincha16Point1Degrees'), to(this.calendar3__1.get_plagHamincha19Point8Degrees_tqwl3_k$(), 'plagHamincha19Point8Degrees'), to(this.calendar3__1.get_plagHamincha26Degrees_tonavf_k$(), 'plagHamincha26Degrees'), to(this.calendar3__1.get_plagHamincha18Degrees_d6edxq_k$(), 'plagHamincha18Degrees'), to(this.calendar3__1.get_plagAlosToSunset_qun5uz_k$(), 'plagAlosToSunset'), to(this.calendar3__1.get_plagAlos16Point1ToTzaisGeonim7Point083Degrees_phrykg_k$(), 'plagAlos16Point1ToTzaisGeonim7Point083Degrees'), to(this.calendar3__1.get_plagAhavatShalom_itgdns_k$(), 'plagAhavatShalom'), to(this.calendar3__1.get_bainHashmashosRT13Point24Degrees_j0h1y7_k$(), 'bainHashmashosRT13Point24Degrees'), to(this.calendar3__1.get_bainHasmashosRT13Point24Degrees_9qzk99_k$(), 'bainHasmashosRT13Point24Degrees'), to(this.calendar3__1.get_bainHashmashosRT58Point5Minutes_f4mg4t_k$(), 'bainHashmashosRT58Point5Minutes'), to(this.calendar3__1.get_bainHasmashosRT58Point5Minutes_ixxj39_k$(), 'bainHasmashosRT58Point5Minutes'), to(this.calendar3__1.get_bainHashmashosRT13Point5MinutesBefore7Point083Degrees_9zwr9a_k$(), 'bainHashmashosRT13Point5MinutesBefore7Point083Degrees'), to(this.calendar3__1.get_bainHasmashosRT13Point5MinutesBefore7Point083Degrees_bbtpio_k$(), 'bainHasmashosRT13Point5MinutesBefore7Point083Degrees'), to(this.calendar3__1.get_bainHashmashosRT2Stars_3qblzb_k$(), 'bainHashmashosRT2Stars'), to(this.calendar3__1.get_bainHasmashosRT2Stars_5dagy3_k$(), 'bainHasmashosRT2Stars'), to(this.calendar3__1.get_bainHashmashosYereim18Minutes_dz27hp_k$(), 'bainHashmashosYereim18Minutes'), to(this.calendar3__1.get_bainHasmashosYereim18Minutes_nwl7ol_k$(), 'bainHasmashosYereim18Minutes'), to(this.calendar3__1.get_bainHashmashosYereim3Point05Degrees_fedesm_k$(), 'bainHashmashosYereim3Point05Degrees'), to(this.calendar3__1.get_bainHasmashosYereim3Point05Degrees_1na7nc_k$(), 'bainHasmashosYereim3Point05Degrees'), to(this.calendar3__1.get_bainHashmashosYereim16Point875Minutes_njzrg7_k$(), 'bainHashmashosYereim16Point875Minutes'), to(this.calendar3__1.get_bainHasmashosYereim16Point875Minutes_j6k6yx_k$(), 'bainHasmashosYereim16Point875Minutes'), to(this.calendar3__1.get_bainHashmashosYereim2Point8Degrees_mxyde0_k$(), 'bainHashmashosYereim2Point8Degrees'), to(this.calendar3__1.get_bainHasmashosYereim2Point8Degrees_ew2kq_k$(), 'bainHasmashosYereim2Point8Degrees'), to(this.calendar3__1.get_bainHashmashosYereim13Point5Minutes_ulcqjx_k$(), 'bainHashmashosYereim13Point5Minutes'), to(this.calendar3__1.get_bainHasmashosYereim13Point5Minutes_qoo49x_k$(), 'bainHasmashosYereim13Point5Minutes'), to(this.calendar3__1.get_bainHashmashosYereim2Point1Degrees_blziw1_k$(), 'bainHashmashosYereim2Point1Degrees'), to(this.calendar3__1.get_bainHasmashosYereim2Point1Degrees_bqux2p_k$(), 'bainHasmashosYereim2Point1Degrees'), to(this.calendar3__1.get_tzaisGeonim3Point7Degrees_v1cup6_k$(), 'tzaisGeonim3Point7Degrees'), to(this.calendar3__1.get_tzaisGeonim3Point8Degrees_b64q7r_k$(), 'tzaisGeonim3Point8Degrees'), to(this.calendar3__1.get_tzaisGeonim5Point95Degrees_yflcxf_k$(), 'tzaisGeonim5Point95Degrees'), to(this.calendar3__1.get_tzaisGeonim3Point65Degrees_37p8ha_k$(), 'tzaisGeonim3Point65Degrees'), to(this.calendar3__1.get_tzaisGeonim3Point676Degrees_384824_k$(), 'tzaisGeonim3Point676Degrees'), to(this.calendar3__1.get_tzaisGeonim4Point61Degrees_g44jd9_k$(), 'tzaisGeonim4Point61Degrees'), to(this.calendar3__1.get_tzaisGeonim4Point37Degrees_xem7fu_k$(), 'tzaisGeonim4Point37Degrees'), to(this.calendar3__1.get_tzaisGeonim5Point88Degrees_8qcoy7_k$(), 'tzaisGeonim5Point88Degrees'), to(this.calendar3__1.get_tzaisGeonim4Point8Degrees_jj4lqw_k$(), 'tzaisGeonim4Point8Degrees'), to(this.calendar3__1.get_tzaisGeonim6Point45Degrees_49mmmp_k$(), 'tzaisGeonim6Point45Degrees'), to(this.calendar3__1.get_tzaisGeonim7Point083Degrees_enim0i_k$(), 'tzaisGeonim7Point083Degrees'), to(this.calendar3__1.get_tzaisGeonim7Point67Degrees_iiycc0_k$(), 'tzaisGeonim7Point67Degrees'), to(this.calendar3__1.get_tzaisGeonim8Point5Degrees_2m8kw7_k$(), 'tzaisGeonim8Point5Degrees'), to(this.calendar3__1.get_tzaisGeonim9Point3Degrees_7n3t7s_k$(), 'tzaisGeonim9Point3Degrees'), to(this.calendar3__1.get_tzaisGeonim9Point75Degrees_j5ahqj_k$(), 'tzaisGeonim9Point75Degrees'), to(this.calendar3__1.get_tzais60_clh3l6_k$(), 'tzais60'), to(this.calendar3__1.get_tzaisAteretTorah_b2yqb7_k$(), 'tzaisAteretTorah'), to(this.calendar3__1.get_tzais90Zmanis_rek38j_k$(), 'tzais90Zmanis'), to(this.calendar3__1.get_tzais96Zmanis_adafvh_k$(), 'tzais96Zmanis'), to(this.calendar3__1.get_tzais90_clh3il_k$(), 'tzais90'), to(this.calendar3__1.get_tzais120_zc5wz1_k$(), 'tzais120'), to(this.calendar3__1.get_tzais120Zmanis_thlunx_k$(), 'tzais120Zmanis'), to(this.calendar3__1.get_tzais16Point1Degrees_jdlr23_k$(), 'tzais16Point1Degrees'), to(this.calendar3__1.get_tzais26Degrees_cm96hl_k$(), 'tzais26Degrees'), to(this.calendar3__1.get_tzais18Degrees_3vzqg4_k$(), 'tzais18Degrees'), to(this.calendar3__1.get_tzais19Point8Degrees_f8jttn_k$(), 'tzais19Point8Degrees'), to(this.calendar3__1.get_tzais96_clh3if_k$(), 'tzais96'), to(this.calendar3__1.get_fixedLocalChatzos_xhtegq_k$(), 'fixedLocalChatzos'), to(this.calendar3__1.get_sofZmanShmaFixedLocal_s1mgf5_k$(), 'sofZmanShmaFixedLocal'), to(this.calendar3__1.get_sofZmanTfilaFixedLocal_89r0ea_k$(), 'sofZmanTfilaFixedLocal'), to(this.calendar3__1.get_sofZmanKidushLevanaBetweenMoldos_7t2x4m_k$(), 'sofZmanKidushLevanaBetweenMoldos'), to(this.calendar3__1.get_sofZmanKidushLevana15Days_nscjmf_k$(), 'sofZmanKidushLevana15Days'), to(this.calendar3__1.get_zmanMolad_dztoe4_k$(), 'zmanMolad'), to(this.calendar3__1.get_sofZmanBiurChametzGRA_osln0h_k$(), 'sofZmanBiurChametzGRA'), to(this.calendar3__1.get_getSofZmanBiurChametzMGA72Minutes_o4rffu_k$(), 'getSofZmanBiurChametzMGA72Minutes'), to(this.calendar3__1.get_sofZmanBiurChametzMGA16Point1Degrees_uz3gmn_k$(), 'sofZmanBiurChametzMGA16Point1Degrees'), to(this.calendar3__1.get_solarMidnight_zbyl54_k$(), 'solarMidnight'), to(this.calendar3__1.get_sofZmanShmaBaalHatanya_axw8os_k$(), 'sofZmanShmaBaalHatanya'), to(this.calendar3__1.get_sofZmanTfilaBaalHatanya_xta491_k$(), 'sofZmanTfilaBaalHatanya'), to(this.calendar3__1.get_sofZmanBiurChametzBaalHatanya_eecpov_k$(), 'sofZmanBiurChametzBaalHatanya'), to(this.calendar3__1.get_minchaGedolaBaalHatanya_uvgmyd_k$(), 'minchaGedolaBaalHatanya'), to(this.calendar3__1.get_minchaGedolaBaalHatanyaGreaterThan30_8qt0rn_k$(), 'minchaGedolaBaalHatanyaGreaterThan30'), to(this.calendar3__1.get_minchaKetanaBaalHatanya_cm5baf_k$(), 'minchaKetanaBaalHatanya'), to(this.calendar3__1.get_plagHaminchaBaalHatanya_ayi8q0_k$(), 'plagHaminchaBaalHatanya'), to(this.calendar3__1.get_tzaisBaalHatanya_i8jvqu_k$(), 'tzaisBaalHatanya'), to(this.calendar3__1.get_sofZmanShmaMGA18DegreesToFixedLocalChatzos_go2es1_k$(), 'sofZmanShmaMGA18DegreesToFixedLocalChatzos'), to(this.calendar3__1.get_sofZmanShmaMGA16Point1DegreesToFixedLocalChatzos_4chfps_k$(), 'sofZmanShmaMGA16Point1DegreesToFixedLocalChatzos'), to(this.calendar3__1.get_sofZmanShmaMGA90MinutesToFixedLocalChatzos_ibz59z_k$(), 'sofZmanShmaMGA90MinutesToFixedLocalChatzos'), to(this.calendar3__1.get_sofZmanShmaMGA72MinutesToFixedLocalChatzos_lwe2x9_k$(), 'sofZmanShmaMGA72MinutesToFixedLocalChatzos'), to(this.calendar3__1.get_sofZmanShmaGRASunriseToFixedLocalChatzos_n4bed1_k$(), 'sofZmanShmaGRASunriseToFixedLocalChatzos'), to(this.calendar3__1.get_sofZmanTfilaGRASunriseToFixedLocalChatzos_7eytm_k$(), 'sofZmanTfilaGRASunriseToFixedLocalChatzos'), to(this.calendar3__1.get_minchaGedolaGRAFixedLocalChatzos30Minutes_bj5654_k$(), 'minchaGedolaGRAFixedLocalChatzos30Minutes'), to(this.calendar3__1.get_minchaKetanaGRAFixedLocalChatzosToSunset_z5wc7r_k$(), 'minchaKetanaGRAFixedLocalChatzosToSunset'), to(this.calendar3__1.get_plagHaminchaGRAFixedLocalChatzosToSunset_i2rhfs_k$(), 'plagHaminchaGRAFixedLocalChatzosToSunset'), to(this.calendar3__1.get_tzais50_clh3m1_k$(), 'tzais50'), to(this.calendar3__1.get_samuchLeMinchaKetanaGRA_ltr0k5_k$(), 'samuchLeMinchaKetanaGRA'), to(this.calendar3__1.get_samuchLeMinchaKetana16Point1Degrees_3x9ojk_k$(), 'samuchLeMinchaKetana16Point1Degrees')]);
              var tmp_17 = ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda$lambda_c1502z_0;
              tmp_16.listOfZmanim5__1 = sortedWith(tmp31_sortedBy, new sam$kotlin_Comparator$0(tmp_17));
              this.set_state_a96kl8_k$(2);
              var tmp_18 = Dispatchers_getInstance().get_Main_wo5vz6_k$().get_immediate_r3y8eg_k$();
              suspendResult = withContext(tmp_18, ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda$slambda_ggm0yy_0(this.values4__1, this.listOfZmanim5__1, this.$shaaZmanisValues$delegate_1, this.$allZmanim$delegate_1, this.$calculatingZmanim$delegate_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(1);
              var tmp_19 = Dispatchers_getInstance().get_Main_wo5vz6_k$().get_immediate_r3y8eg_k$();
              suspendResult = withContext(tmp_19, ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda$slambda_ggm0yy_2(this.$calculatingZmanim$delegate_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 2:
            ;
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda_y10tvk).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda_y10tvk(this.$tz_1, this.$latitude$delegate_1, this.$longitude$delegate_1, this.$shaaZmanisValues$delegate_1, this.$allZmanim$delegate_1, this.$calculatingZmanim$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda_y10tvk).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda_y10tvk_0($tz, $latitude$delegate, $longitude$delegate, $shaaZmanisValues$delegate, $allZmanim$delegate, $calculatingZmanim$delegate, resultContinuation) {
    var i = new ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda_y10tvk($tz, $latitude$delegate, $longitude$delegate, $shaaZmanisValues$delegate, $allZmanim$delegate, $calculatingZmanim$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).compare_6tbigh_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.compare_6tbigh_k$(a, b);
  };
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function ComposableSingletons$AppKt$lambda_1$lambda_ua4ft5($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1671536155, $changed, -1, 'sternbach.software.ComposableSingletons$AppKt.lambda-1.<anonymous> (App.kt:76)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text$composable('Latitude', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, null, null, $composer_0, 6, 0, 65534);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function ComposableSingletons$AppKt$lambda_2$lambda_1ghyqy($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1959698500, $changed, -1, 'sternbach.software.ComposableSingletons$AppKt.lambda-2.<anonymous> (App.kt:84)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text$composable('Longitude', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, null, null, $composer_0, 6, 0, 65534);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AppKt$lambda_3$lambda_rd4ib9($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(737364485, $changed, -1, 'sternbach.software.ComposableSingletons$AppKt.lambda-3.<anonymous> (App.kt:104)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text$composable('Get zmanim', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, null, null, $composer_0, 6, 0, 65534);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function ComposableSingletons$AppKt$lambda_4$lambda_eud2lo($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1970214571, $changed, -1, 'sternbach.software.ComposableSingletons$AppKt.lambda-4.<anonymous> (App.kt:47)');
      }
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = $composer_0;
      var $composer_1 = tmp2_remember$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (false ? true : tmp0_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'sternbach.software.ComposableSingletons$AppKt.lambda-4.<anonymous>.<anonymous>' call
        tmp$ret$0 = Companion_getInstance_0().currentSystemDefault_9rduv_k$();
        var value = tmp$ret$0;
        tmp1_cache.updateRememberedValue_l1colo_k$(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      tmp$ret$1 = tmp;
      tmp$ret$2 = tmp$ret$1;
      var tmp_0 = tmp$ret$2;
      tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0;
      var tz = tmp$ret$4;
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp5_remember$composable = $composer_0;
      var $composer_2 = tmp5_remember$composable;
      $composer_2.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp4_cache = $composer_2;
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp3_let = tmp4_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (false ? true : tmp3_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var tmp$ret$5;
        // Inline function 'sternbach.software.ComposableSingletons$AppKt.lambda-4.<anonymous>.<anonymous>' call
        tmp$ret$5 = mutableStateOf('31.80157');
        var value_0 = tmp$ret$5;
        tmp4_cache.updateRememberedValue_l1colo_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp3_let;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      var tmp_2 = tmp$ret$7;
      tmp$ret$8 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      var tmp0_0 = tmp$ret$8;
      $composer_2.endReplaceableGroup_er37p7_k$();
      tmp$ret$9 = tmp0_0;
      var latitude$delegate = tmp$ret$9;
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp8_remember$composable = $composer_0;
      var $composer_3 = tmp8_remember$composable;
      $composer_3.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp7_cache = $composer_3;
      var tmp$ret$12;
      // Inline function 'kotlin.let' call
      var tmp6_let = tmp7_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (false ? true : tmp6_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var tmp$ret$10;
        // Inline function 'sternbach.software.ComposableSingletons$AppKt.lambda-4.<anonymous>.<anonymous>' call
        tmp$ret$10 = mutableStateOf('35.21765');
        var value_1 = tmp$ret$10;
        tmp7_cache.updateRememberedValue_l1colo_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = tmp6_let;
      }
      tmp$ret$11 = tmp_3;
      tmp$ret$12 = tmp$ret$11;
      var tmp_4 = tmp$ret$12;
      tmp$ret$13 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      var tmp0_1 = tmp$ret$13;
      $composer_3.endReplaceableGroup_er37p7_k$();
      tmp$ret$14 = tmp0_1;
      var longitude$delegate = tmp$ret$14;
      var tmp$ret$19;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp11_remember$composable = $composer_0;
      var $composer_4 = tmp11_remember$composable;
      $composer_4.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_4, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$18;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp10_cache = $composer_4;
      var tmp$ret$17;
      // Inline function 'kotlin.let' call
      var tmp9_let = tmp10_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_5;
      if (false ? true : tmp9_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var tmp$ret$15;
        // Inline function 'sternbach.software.ComposableSingletons$AppKt.lambda-4.<anonymous>.<anonymous>' call
        tmp$ret$15 = mutableStateOf(false);
        var value_2 = tmp$ret$15;
        tmp10_cache.updateRememberedValue_l1colo_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = tmp9_let;
      }
      tmp$ret$16 = tmp_5;
      tmp$ret$17 = tmp$ret$16;
      var tmp_6 = tmp$ret$17;
      tmp$ret$18 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      var tmp0_2 = tmp$ret$18;
      $composer_4.endReplaceableGroup_er37p7_k$();
      tmp$ret$19 = tmp0_2;
      var calculatingZmanim$delegate = tmp$ret$19;
      var tmp$ret$24;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp14_remember$composable = $composer_0;
      var $composer_5 = tmp14_remember$composable;
      $composer_5.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_5, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$23;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp13_cache = $composer_5;
      var tmp$ret$22;
      // Inline function 'kotlin.let' call
      var tmp12_let = tmp13_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$21;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_7;
      if (false ? true : tmp12_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var tmp$ret$20;
        // Inline function 'sternbach.software.ComposableSingletons$AppKt.lambda-4.<anonymous>.<anonymous>' call
        tmp$ret$20 = mutableStateOf(null);
        var value_3 = tmp$ret$20;
        tmp13_cache.updateRememberedValue_l1colo_k$(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = tmp12_let;
      }
      tmp$ret$21 = tmp_7;
      tmp$ret$22 = tmp$ret$21;
      var tmp_8 = tmp$ret$22;
      tmp$ret$23 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
      var tmp0_3 = tmp$ret$23;
      $composer_5.endReplaceableGroup_er37p7_k$();
      tmp$ret$24 = tmp0_3;
      var zmanim$delegate = tmp$ret$24;
      var tmp$ret$29;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp17_remember$composable = $composer_0;
      var $composer_6 = tmp17_remember$composable;
      $composer_6.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_6, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$28;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp16_cache = $composer_6;
      var tmp$ret$27;
      // Inline function 'kotlin.let' call
      var tmp15_let = tmp16_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$26;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_9;
      if (false ? true : tmp15_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var tmp$ret$25;
        // Inline function 'sternbach.software.ComposableSingletons$AppKt.lambda-4.<anonymous>.<anonymous>' call
        tmp$ret$25 = mutableStateOf(emptyList());
        var value_4 = tmp$ret$25;
        tmp16_cache.updateRememberedValue_l1colo_k$(value_4);
        tmp_9 = value_4;
      } else {
        tmp_9 = tmp15_let;
      }
      tmp$ret$26 = tmp_9;
      tmp$ret$27 = tmp$ret$26;
      var tmp_10 = tmp$ret$27;
      tmp$ret$28 = (tmp_10 == null ? true : isObject(tmp_10)) ? tmp_10 : THROW_CCE();
      var tmp0_4 = tmp$ret$28;
      $composer_6.endReplaceableGroup_er37p7_k$();
      tmp$ret$29 = tmp0_4;
      var shaaZmanisValues$delegate = tmp$ret$29;
      var tmp$ret$34;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp20_remember$composable = $composer_0;
      var $composer_7 = tmp20_remember$composable;
      $composer_7.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_7, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$33;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp19_cache = $composer_7;
      var tmp$ret$32;
      // Inline function 'kotlin.let' call
      var tmp18_let = tmp19_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$31;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_11;
      if (false ? true : tmp18_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var tmp$ret$30;
        // Inline function 'sternbach.software.ComposableSingletons$AppKt.lambda-4.<anonymous>.<anonymous>' call
        tmp$ret$30 = mutableStateOf(emptyList());
        var value_5 = tmp$ret$30;
        tmp19_cache.updateRememberedValue_l1colo_k$(value_5);
        tmp_11 = value_5;
      } else {
        tmp_11 = tmp18_let;
      }
      tmp$ret$31 = tmp_11;
      tmp$ret$32 = tmp$ret$31;
      var tmp_12 = tmp$ret$32;
      tmp$ret$33 = (tmp_12 == null ? true : isObject(tmp_12)) ? tmp_12 : THROW_CCE();
      var tmp0_5 = tmp$ret$33;
      $composer_7.endReplaceableGroup_er37p7_k$();
      tmp$ret$34 = tmp0_5;
      var allZmanim$delegate = tmp$ret$34;
      // Inline function 'androidx.compose.foundation.layout.Column$composable' call
      var tmp37_Column$composable = fillMaxSize(Companion_getInstance_2());
      var tmp38_Column$composable = null;
      var tmp39_Column$composable = null;
      var tmp40_Column$composable = $composer_0;
      var modifier = tmp37_Column$composable;
      var verticalArrangement = tmp38_Column$composable;
      var horizontalAlignment = tmp39_Column$composable;
      var $composer_8 = tmp40_Column$composable;
      $composer_8.startReplaceableGroup_rp6air_k$(860130704);
      sourceInformation($composer_8, 'CC(Column$composable)P(2,3,1)77@3913L61,78@3979L133:Column.kt#2w3rfo');
      if (!(0 === 0))
        modifier = Companion_getInstance_2();
      if (!(2 === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!(4 === 0))
        horizontalAlignment = Companion_getInstance_3().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_8, 0);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp32_Layout$composable = modifier;
      var tmp33_Layout$composable = $composer_8;
      var tmp34_Layout$composable = 48;
      var modifier_0 = tmp32_Layout$composable;
      var $composer_9 = tmp33_Layout$composable;
      $composer_9.startReplaceableGroup_rp6air_k$(1725976829);
      sourceInformation($composer_9, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance_2();
      var tmp$ret$35;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp21_$get_current$$composable_8cppjg = get_LocalDensity();
      var tmp22_$get_current$$composable_7u8ui5 = $composer_9;
      var $composer_10 = tmp22_$get_current$$composable_7u8ui5;
      sourceInformationMarkerStart($composer_10, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_6 = $composer_10.consume_11nid3_k$(tmp21_$get_current$$composable_8cppjg);
      sourceInformationMarkerEnd($composer_10);
      tmp$ret$35 = tmp0_6;
      var density = tmp$ret$35;
      var tmp$ret$36;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp23_$get_current$$composable_7brzgu = get_LocalLayoutDirection();
      var tmp24_$get_current$$composable_6tb4fj = $composer_9;
      var $composer_11 = tmp24_$get_current$$composable_6tb4fj;
      sourceInformationMarkerStart($composer_11, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_7 = $composer_11.consume_11nid3_k$(tmp23_$get_current$$composable_7brzgu);
      sourceInformationMarkerEnd($composer_11);
      tmp$ret$36 = tmp0_7;
      var layoutDirection = tmp$ret$36;
      var tmp$ret$37;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp25_$get_current$$composable_6au9e8 = get_LocalViewConfiguration();
      var tmp26_$get_current$$composable_5sdecx = $composer_9;
      var $composer_12 = tmp26_$get_current$$composable_5sdecx;
      sourceInformationMarkerStart($composer_12, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_8 = $composer_12.consume_11nid3_k$(tmp25_$get_current$$composable_6au9e8);
      sourceInformationMarkerEnd($composer_12);
      tmp$ret$37 = tmp0_8;
      var viewConfiguration = tmp$ret$37;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp27_ReusableComposeNode$composable = Companion_getInstance_4().get_Constructor_f7ieep_k$();
      var tmp28_ReusableComposeNode$composable = materializerOf(modifier_0);
      var tmp29_ReusableComposeNode$composable = $composer_9;
      var tmp30_ReusableComposeNode$composable = 6 | 7168 & tmp34_Layout$composable << 9;
      var $composer_13 = tmp29_ReusableComposeNode$composable;
      var tmp_13 = $composer_13.get_applier_bupu8u_k$();
      if (!isInterface(tmp_13, Applier)) {
        invalidApplier();
      }
      $composer_13.startReusableNode_jk07k2_k$();
      if ($composer_13.get_inserting_25mlsw_k$()) {
        $composer_13.createNode_p4ouwd_k$(tmp27_ReusableComposeNode$composable);
      } else {
        $composer_13.useNode_inlzo8_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp31__anonymous__cuukv7 = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss(tmp31__anonymous__cuukv7, measurePolicy, Companion_getInstance_4().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss(tmp31__anonymous__cuukv7, density, Companion_getInstance_4().get_SetDensity_gmdtxr_k$());
      Updater__set_impl_v7kwss(tmp31__anonymous__cuukv7, layoutDirection, Companion_getInstance_4().get_SetLayoutDirection_w7ypuk_k$());
      Updater__set_impl_v7kwss(tmp31__anonymous__cuukv7, viewConfiguration, Companion_getInstance_4().get_SetViewConfiguration_lke0s8_k$());
      tmp28_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_13)), $composer_13, 112 & tmp30_ReusableComposeNode$composable >> 3);
      $composer_13.startReplaceableGroup_rp6air_k$(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
      var tmp35__anonymous__6jvzyx = $composer_13;
      var tmp36__anonymous__bekn6g = 14 & tmp30_ReusableComposeNode$composable >> 9;
      var $composer_14 = tmp35__anonymous__6jvzyx;
      sourceInformationMarkerStart($composer_14, 1633582135, 'C79@4027L9:Column.kt#2w3rfo');
      // Inline function 'sternbach.software.ComposableSingletons$AppKt.lambda-4.<anonymous>.<anonymous>' call
      var tmp41__anonymous__4hupc2 = ColumnScopeInstance_getInstance();
      var tmp42__anonymous__ctxvh = $composer_14;
      var tmp43__anonymous__57il30 = 6;
      var $composer_15 = tmp42__anonymous__ctxvh;
      var tmp_14 = fillMaxWidth(Companion_getInstance_2());
      var tmp$ret$38;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$38 = _Dp___init__impl__ms3zkb(16);
      var modifier_1 = padding(tmp_14, tmp$ret$38);
      var tmp0_style = MaterialTheme_getInstance().$get_typography$$composable_fm42xb_k$($composer_15, 6).get_titleMedium_jd9h8k_k$();
      var tmp_15 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_16 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_17 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_18 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_19 = _TextOverflow___init__impl__obguoe(0);
      Text$composable('Beautiful Zmanim', modifier_1, tmp_15, tmp_16, null, null, null, tmp_17, null, null, tmp_18, tmp_19, false, 0, null, tmp0_style, $composer_15, 54, 0, 32764);
      var thisIs = tz instanceof FixedOffsetTimeZone;
      var tmp_20 = 'Time zone: ' + tz;
      var tmp_21 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_22 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_23 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_24 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_25 = _TextOverflow___init__impl__obguoe(0);
      Text$composable(tmp_20, null, tmp_21, tmp_22, null, null, null, tmp_23, null, null, tmp_24, tmp_25, false, 0, null, null, $composer_15, 0, 0, 65534);
      println('this is kotlinx.datetime.FixedOffsetTimeZone = ' + (tz instanceof FixedOffsetTimeZone));
      if (thisIs) {
        var tmp$ret$39;
        // Inline function 'kotlin.time.Companion.seconds' call
        var tmp0__get_seconds__yb22lo = Companion_getInstance();
        var tmp1__get_seconds__bshwyb = (tz instanceof FixedOffsetTimeZone ? tz : THROW_CCE()).get_offset_hjmqak_k$().get_totalSeconds_oq5924_k$();
        tmp$ret$39 = toDuration_0(tmp1__get_seconds__bshwyb, DurationUnit_SECONDS_getInstance());
        println('tz.offset.totalSeconds.seconds.inWholeMilliseconds = ' + toString(_Duration___get_inWholeMilliseconds__impl__msfiry(tmp$ret$39)));
      } else {
        var tmp$ret$40;
        // Inline function 'kotlin.time.Companion.seconds' call
        var tmp2__get_seconds__d525gu = Companion_getInstance();
        var tmp3__get_seconds__wyhu35 = offsetAt(tz, System_getInstance().now_2cba_k$()).get_totalSeconds_oq5924_k$();
        tmp$ret$40 = toDuration_0(tmp3__get_seconds__wyhu35, DurationUnit_SECONDS_getInstance());
        println('offsetAt(Clock.System.now()).totalSeconds.seconds.inWholeMilliseconds = ' + toString(_Duration___get_inWholeMilliseconds__impl__msfiry(tmp$ret$40)));
      }
      var tmp1_value = invoke$lambda(latitude$delegate);
      var tmp$ret$45;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp7_remember$composable = $composer_15;
      var $composer_16 = tmp7_remember$composable;
      $composer_16.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_16, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$44;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp5_cache = $composer_16;
      var tmp6_cache = $composer_16.changed_ga7h3f_k$(latitude$delegate);
      var tmp$ret$43;
      // Inline function 'kotlin.let' call
      var tmp4_let = tmp5_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$42;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_26;
      if (tmp6_cache ? true : tmp4_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var tmp$ret$41;
        // Inline function 'sternbach.software.ComposableSingletons$AppKt.lambda-4.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$41 = ComposableSingletons$AppKt$lambda_4$lambda$lambda_inzn4n(latitude$delegate);
        var value_6 = tmp$ret$41;
        tmp5_cache.updateRememberedValue_l1colo_k$(value_6);
        tmp_26 = value_6;
      } else {
        tmp_26 = tmp4_let;
      }
      tmp$ret$42 = tmp_26;
      tmp$ret$43 = tmp$ret$42;
      var tmp_27 = tmp$ret$43;
      tmp$ret$44 = (tmp_27 == null ? true : isObject(tmp_27)) ? tmp_27 : THROW_CCE();
      var tmp0_9 = tmp$ret$44;
      $composer_16.endReplaceableGroup_er37p7_k$();
      tmp$ret$45 = tmp0_9;
      var tmp_28 = tmp$ret$45;
      var tmp_29 = ComposableSingletons$AppKt_getInstance().lambda_1_r8sbbp_1;
      OutlinedTextField$composable(tmp1_value, tmp_28, modifier_1, false, false, null, tmp_29, null, null, null, null, false, null, null, null, true, 0, null, null, null, $composer_15, 1573248, 196608, 1015736);
      var tmp2_value = invoke$lambda_1(longitude$delegate);
      var tmp$ret$50;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp11_remember$composable_0 = $composer_15;
      var $composer_17 = tmp11_remember$composable_0;
      $composer_17.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_17, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$49;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp9_cache = $composer_17;
      var tmp10_cache_0 = $composer_17.changed_ga7h3f_k$(longitude$delegate);
      var tmp$ret$48;
      // Inline function 'kotlin.let' call
      var tmp8_let = tmp9_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$47;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_30;
      if (tmp10_cache_0 ? true : tmp8_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var tmp$ret$46;
        // Inline function 'sternbach.software.ComposableSingletons$AppKt.lambda-4.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$46 = ComposableSingletons$AppKt$lambda_4$lambda$lambda_inzn4n_0(longitude$delegate);
        var value_7 = tmp$ret$46;
        tmp9_cache.updateRememberedValue_l1colo_k$(value_7);
        tmp_30 = value_7;
      } else {
        tmp_30 = tmp8_let;
      }
      tmp$ret$47 = tmp_30;
      tmp$ret$48 = tmp$ret$47;
      var tmp_31 = tmp$ret$48;
      tmp$ret$49 = (tmp_31 == null ? true : isObject(tmp_31)) ? tmp_31 : THROW_CCE();
      var tmp0_10 = tmp$ret$49;
      $composer_17.endReplaceableGroup_er37p7_k$();
      tmp$ret$50 = tmp0_10;
      var tmp_32 = tmp$ret$50;
      var tmp_33 = ComposableSingletons$AppKt_getInstance().lambda_2_r8sbbo_1;
      OutlinedTextField$composable(tmp2_value, tmp_32, modifier_1, false, false, null, tmp_33, null, null, null, null, false, null, null, null, true, 0, null, null, null, $composer_15, 1573248, 196608, 1015736);
      var tmp$ret$55;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp15_remember$composable = $composer_15;
      var $composer_18 = tmp15_remember$composable;
      $composer_18.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_18, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$54;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp13_cache_0 = $composer_18;
      var tmp14_cache = $composer_18.changed_ga7h3f_k$(calculatingZmanim$delegate);
      var tmp$ret$53;
      // Inline function 'kotlin.let' call
      var tmp12_let_0 = tmp13_cache_0.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$52;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_34;
      if (tmp14_cache ? true : tmp12_let_0 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var tmp$ret$51;
        // Inline function 'sternbach.software.ComposableSingletons$AppKt.lambda-4.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$51 = ComposableSingletons$AppKt$lambda_4$lambda$lambda_inzn4n_1(calculatingZmanim$delegate);
        var value_8 = tmp$ret$51;
        tmp13_cache_0.updateRememberedValue_l1colo_k$(value_8);
        tmp_34 = value_8;
      } else {
        tmp_34 = tmp12_let_0;
      }
      tmp$ret$52 = tmp_34;
      tmp$ret$53 = tmp$ret$52;
      var tmp_35 = tmp$ret$53;
      tmp$ret$54 = (tmp_35 == null ? true : isObject(tmp_35)) ? tmp_35 : THROW_CCE();
      var tmp0_11 = tmp$ret$54;
      $composer_18.endReplaceableGroup_er37p7_k$();
      tmp$ret$55 = tmp0_11;
      var tmp_36 = tmp$ret$55;
      Button$composable(tmp_36, modifier_1, false, null, null, null, null, null, null, ComposableSingletons$AppKt_getInstance().lambda_3_r8sbbn_1, $composer_15, 805306416, 508);
      $composer_15.startReplaceableGroup_rp6air_k$(2121193717);
      if (invoke$lambda_3(calculatingZmanim$delegate)) {
        var tmp_37 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        CircularProgressIndicator$composable(null, tmp_37, _Dp___init__impl__ms3zkb(0.0), $composer_15, 0, 7);
        var tmp_38 = invoke$lambda_3(calculatingZmanim$delegate);
        var tmp$ret$60;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp19_remember$composable = $composer_15;
        var $composer_19 = tmp19_remember$composable;
        $composer_19.startReplaceableGroup_rp6air_k$(-1603429786);
        sourceInformation($composer_19, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var invalid = false;
        var indexedObject = [latitude$delegate, longitude$delegate, tz, shaaZmanisValues$delegate, allZmanim$delegate, calculatingZmanim$delegate];
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var key = indexedObject[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          invalid = !!(invalid | $composer_19.changed_ga7h3f_k$(key));
        }
        var tmp$ret$59;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp17_cache = $composer_19;
        var tmp18_cache = invalid;
        var tmp$ret$58;
        // Inline function 'kotlin.let' call
        var tmp16_let = tmp17_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$57;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_39;
        if (tmp18_cache ? true : tmp16_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          var tmp$ret$56;
          // Inline function 'sternbach.software.ComposableSingletons$AppKt.lambda-4.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$56 = ComposableSingletons$AppKt$lambda_4$lambda$slambda_nvkcgm_0(tz, latitude$delegate, longitude$delegate, shaaZmanisValues$delegate, allZmanim$delegate, calculatingZmanim$delegate, null);
          var value_9 = tmp$ret$56;
          tmp17_cache.updateRememberedValue_l1colo_k$(value_9);
          tmp_39 = value_9;
        } else {
          tmp_39 = tmp16_let;
        }
        tmp$ret$57 = tmp_39;
        tmp$ret$58 = tmp$ret$57;
        var tmp_40 = tmp$ret$58;
        tmp$ret$59 = (tmp_40 == null ? true : isObject(tmp_40)) ? tmp_40 : THROW_CCE();
        var tmp0_12 = tmp$ret$59;
        $composer_19.endReplaceableGroup_er37p7_k$();
        tmp$ret$60 = tmp0_12;
        LaunchedEffect$composable(tmp_38, tmp$ret$60, $composer_15, 0);
      }
      $composer_15.endReplaceableGroup_er37p7_k$();
      var tmp_41 = fillMaxWidth(Companion_getInstance_2());
      var tmp$ret$65;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp23_remember$composable = $composer_15;
      var $composer_20 = tmp23_remember$composable;
      $composer_20.startReplaceableGroup_rp6air_k$(-1058148781);
      sourceInformation($composer_20, 'CC(remember$composable)P(1,2,3):Composables.kt#9igjgp');
      var tmp$ret$64;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp21_cache = $composer_20;
      var tmp22_cache = !!(!!($composer_20.changed_ga7h3f_k$(shaaZmanisValues$delegate) | $composer_20.changed_ga7h3f_k$(allZmanim$delegate)) | $composer_20.changed_ga7h3f_k$(tz));
      var tmp$ret$63;
      // Inline function 'kotlin.let' call
      var tmp20_let = tmp21_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$62;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_42;
      if (tmp22_cache ? true : tmp20_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var tmp$ret$61;
        // Inline function 'sternbach.software.ComposableSingletons$AppKt.lambda-4.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$61 = ComposableSingletons$AppKt$lambda_4$lambda$lambda_inzn4n_2(shaaZmanisValues$delegate, allZmanim$delegate, tz);
        var value_10 = tmp$ret$61;
        tmp21_cache.updateRememberedValue_l1colo_k$(value_10);
        tmp_42 = value_10;
      } else {
        tmp_42 = tmp20_let;
      }
      tmp$ret$62 = tmp_42;
      tmp$ret$63 = tmp$ret$62;
      var tmp_43 = tmp$ret$63;
      tmp$ret$64 = (tmp_43 == null ? true : isObject(tmp_43)) ? tmp_43 : THROW_CCE();
      var tmp0_13 = tmp$ret$64;
      $composer_20.endReplaceableGroup_er37p7_k$();
      tmp$ret$65 = tmp0_13;
      LazyColumn$composable(tmp_41, null, null, false, null, null, null, false, tmp$ret$65, $composer_15, 6, 254);
      sourceInformationMarkerEnd($composer_14);
      $composer_13.endReplaceableGroup_er37p7_k$();
      $composer_13.endNode_3mkr10_k$();
      $composer_9.endReplaceableGroup_er37p7_k$();
      $composer_8.endReplaceableGroup_er37p7_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function invoke$lambda($latitude$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('latitude', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $latitude$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function invoke$lambda_0($latitude$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('latitude', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $latitude$delegate.set_value_rnwamw_k$(value);
  }
  function invoke$lambda_1($longitude$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('longitude', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $longitude$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function invoke$lambda_2($longitude$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('longitude', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $longitude$delegate.set_value_rnwamw_k$(value);
  }
  function invoke$lambda_3($calculatingZmanim$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('calculatingZmanim', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $calculatingZmanim$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function invoke$lambda_4($calculatingZmanim$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('calculatingZmanim', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $calculatingZmanim$delegate.set_value_rnwamw_k$(value);
  }
  function invoke$lambda_5($zmanim$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('zmanim', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $zmanim$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function invoke$lambda_6($zmanim$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('zmanim', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $zmanim$delegate.set_value_rnwamw_k$(value);
  }
  function invoke$lambda_7($shaaZmanisValues$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('shaaZmanisValues', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $shaaZmanisValues$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function invoke$lambda_8($shaaZmanisValues$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('shaaZmanisValues', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $shaaZmanisValues$delegate.set_value_rnwamw_k$(value);
  }
  function invoke$lambda_9($allZmanim$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('allZmanim', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $allZmanim$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function invoke$lambda_10($allZmanim$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('allZmanim', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $allZmanim$delegate.set_value_rnwamw_k$(value);
  }
  function ComposableSingletons$AppKt$lambda_4$lambda$lambda_inzn4n($latitude$delegate) {
    return function (it) {
      invoke$lambda_0($latitude$delegate, it);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda_4$lambda$lambda_inzn4n_0($longitude$delegate) {
    return function (it) {
      invoke$lambda_2($longitude$delegate, it);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda_4$lambda$lambda_inzn4n_1($calculatingZmanim$delegate) {
    return function () {
      invoke$lambda_4($calculatingZmanim$delegate, true);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda_4$lambda$slambda_nvkcgm($tz, $latitude$delegate, $longitude$delegate, $shaaZmanisValues$delegate, $allZmanim$delegate, $calculatingZmanim$delegate, resultContinuation) {
    this.$tz_1 = $tz;
    this.$latitude$delegate_1 = $latitude$delegate;
    this.$longitude$delegate_1 = $longitude$delegate;
    this.$shaaZmanisValues$delegate_1 = $shaaZmanisValues$delegate;
    this.$allZmanim$delegate_1 = $allZmanim$delegate;
    this.$calculatingZmanim$delegate_1 = $calculatingZmanim$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ComposableSingletons$AppKt$lambda_4$lambda$slambda_nvkcgm).invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ComposableSingletons$AppKt$lambda_4$lambda$slambda_nvkcgm).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ComposableSingletons$AppKt$lambda_4$lambda$slambda_nvkcgm).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          var tmp_0 = Dispatchers_getInstance().get_Default_goqax4_k$();
          launch(this.$this$LaunchedEffect_1, tmp_0, VOID, ComposableSingletons$AppKt$lambda_4$lambda$slambda$slambda_y10tvk_0(this.$tz_1, this.$latitude$delegate_1, this.$longitude$delegate_1, this.$shaaZmanisValues$delegate_1, this.$allZmanim$delegate_1, this.$calculatingZmanim$delegate_1, null));
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(ComposableSingletons$AppKt$lambda_4$lambda$slambda_nvkcgm).create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new ComposableSingletons$AppKt$lambda_4$lambda$slambda_nvkcgm(this.$tz_1, this.$latitude$delegate_1, this.$longitude$delegate_1, this.$shaaZmanisValues$delegate_1, this.$allZmanim$delegate_1, this.$calculatingZmanim$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(ComposableSingletons$AppKt$lambda_4$lambda$slambda_nvkcgm).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ComposableSingletons$AppKt$lambda_4$lambda$slambda_nvkcgm_0($tz, $latitude$delegate, $longitude$delegate, $shaaZmanisValues$delegate, $allZmanim$delegate, $calculatingZmanim$delegate, resultContinuation) {
    var i = new ComposableSingletons$AppKt$lambda_4$lambda$slambda_nvkcgm($tz, $latitude$delegate, $longitude$delegate, $shaaZmanisValues$delegate, $allZmanim$delegate, $calculatingZmanim$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ComposableSingletons$AppKt$lambda_4$lambda$lambda$lambda_inhy30(it) {
    return null;
  }
  function ComposableSingletons$AppKt$lambda_4$lambda$lambda$lambda_inhy30_0($tmp0_items$composable) {
    return function (index) {
      return null($tmp0_items$composable.get_fkrdnv_k$(index));
    };
  }
  function ComposableSingletons$AppKt$lambda_4$lambda$lambda$lambda_inhy30_1($tmp1_items$composable, $tmp0_items$composable) {
    return function (index) {
      return $tmp1_items$composable($tmp0_items$composable.get_fkrdnv_k$(index));
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_locru7_k$(p0, p1, p2, p3);
    };
  }
  function ComposableSingletons$AppKt$lambda_4$lambda$lambda$lambda_inhy30_2($tmp0_items$composable, $otherOpinions) {
    return function ($this$items, it, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C145@6530L22:LazyDsl.kt#428nma');
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$items) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (($changed & 112) === 0) {
        $dirty = $dirty | ($composer_0.changed_s0r703_k$(it) ? 32 : 16);
        tmp_0 = Unit_getInstance();
      }
      var tmp_1;
      if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-632812321, $dirty, -1, 'androidx.compose.foundation.lazy.items$composable.<anonymous> (LazyDsl.kt:144)');
        }
        // Inline function 'sternbach.software.ComposableSingletons$AppKt.lambda-4.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp2__anonymous__z9zvc9 = $tmp0_items$composable.get_fkrdnv_k$(it);
        var tmp3__anonymous__ufb84q = $composer_0;
        var tmp4__anonymous__pkmkx7 = 14 & $dirty;
        var $composer_1 = tmp3__anonymous__ufb84q;
        var tmp_2 = new ZmanCardModel('', tmp2__anonymous__z9zvc9.get_second_jf7fjx_k$(), Duration__toString_impl_8d916b(tmp2__anonymous__z9zvc9.get_first_irdx8n_k$().rawValue_1), $otherOpinions);
        ZmanCard$composable(tmp_2, null, $composer_1, 0, 2);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp_1 = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda_4$lambda$lambda$lambda_inhy30_3(it) {
    return null;
  }
  function ComposableSingletons$AppKt$lambda_4$lambda$lambda$lambda_inhy30_4($tmp5_items$composable) {
    return function (index) {
      return null($tmp5_items$composable.get_fkrdnv_k$(index));
    };
  }
  function ComposableSingletons$AppKt$lambda_4$lambda$lambda$lambda_inhy30_5($tmp6_items$composable, $tmp5_items$composable) {
    return function (index) {
      return $tmp6_items$composable($tmp5_items$composable.get_fkrdnv_k$(index));
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_locru7_k$(p0, p1, p2, p3);
    };
  }
  function ComposableSingletons$AppKt$lambda_4$lambda$lambda$lambda$lambda_ghf45l($tmp7__anonymous__zeghle) {
    return function (now, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(now) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(35989361, $changed, -1, 'sternbach.software.ComposableSingletons$AppKt.lambda-4.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (App.kt:316)');
        }
        var couldNotCompute = $tmp7__anonymous__zeghle.get_first_irdx8n_k$() == null;
        var secondsUntilZmanim = couldNotCompute ? IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$() : until(now, ensureNotNull($tmp7__anonymous__zeghle.get_first_irdx8n_k$()), Companion_getInstance_5().get_SECOND_3rkzul_k$()).toInt_1tsl84_k$();
        if (couldNotCompute) {
          $composer_0.startReplaceableGroup_rp6air_k$(539964765);
          var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_5 = _TextOverflow___init__impl__obguoe(0);
          Text$composable('N/A', null, tmp_1, tmp_2, null, null, null, tmp_3, null, null, tmp_4, tmp_5, false, 0, null, null, $composer_0, 6, 0, 65534);
          $composer_0.endReplaceableGroup_er37p7_k$();
        } else {
          $composer_0.startReplaceableGroup_rp6air_k$(539964802);
          var tmp_6 = formatted(toHrMinSec(secondsUntilZmanim), false);
          var tmp_7 = secondsUntilZmanim <= 0 ? Companion_getInstance_6().get_Red_fzly7h_k$() : Companion_getInstance_6().get_Green_91utzz_k$();
          var tmp_8 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_9 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_10 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_11 = _TextOverflow___init__impl__obguoe(0);
          Text$composable(tmp_6, null, tmp_7, tmp_8, null, null, null, tmp_9, null, null, tmp_10, tmp_11, false, 0, null, null, $composer_0, 0, 0, 65530);
          $composer_0.endReplaceableGroup_er37p7_k$();
        }
        var tmp_12;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_12 = Unit_getInstance();
        }
        tmp_0 = tmp_12;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AppKt$lambda_4$lambda$lambda$lambda_inhy30_6($tmp5_items$composable, $tz, $otherOpinions) {
    return function ($this$items, it, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C145@6530L22:LazyDsl.kt#428nma');
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$items) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (($changed & 112) === 0) {
        $dirty = $dirty | ($composer_0.changed_s0r703_k$(it) ? 32 : 16);
        tmp_0 = Unit_getInstance();
      }
      var tmp_1;
      if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-632812321, $dirty, -1, 'androidx.compose.foundation.lazy.items$composable.<anonymous> (LazyDsl.kt:144)');
        }
        // Inline function 'sternbach.software.ComposableSingletons$AppKt.lambda-4.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp7__anonymous__b0knam = $tmp5_items$composable.get_fkrdnv_k$(it);
        var tmp8__anonymous__65w033 = $composer_0;
        var tmp9__anonymous__1b7cvk = 14 & $dirty;
        var $composer_1 = tmp8__anonymous__65w033;
        var tmp_2 = tmp7__anonymous__b0knam.get_second_jf7fjx_k$();
        var tmp0_safe_receiver = tmp7__anonymous__b0knam.get_first_irdx8n_k$();
        var tmp_3 = new ZmanCardModel('', tmp_2, toString_0(tmp0_safe_receiver == null ? null : format(tmp0_safe_receiver, $tz)), $otherOpinions);
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'sternbach.software.ComposableSingletons$AppKt.lambda-4.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_4 = $composer_1;
        var dispatchReceiver = composableLambda(tmp_4, 35989361, true, ComposableSingletons$AppKt$lambda_4$lambda$lambda$lambda$lambda_ghf45l(tmp7__anonymous__b0knam));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_1;
        var $composer_2 = tmp3_remember$composable;
        $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_2;
        var tmp2_cache = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_5;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'sternbach.software.ComposableSingletons$AppKt.lambda-4.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_5(dispatchReceiver);
          var value = tmp$ret$0;
          tmp1_cache.updateRememberedValue_l1colo_k$(value);
          tmp_5 = value;
        } else {
          tmp_5 = tmp0_let;
        }
        tmp$ret$1 = tmp_5;
        tmp$ret$2 = tmp$ret$1;
        var tmp_6 = tmp$ret$2;
        tmp$ret$3 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_2.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        ZmanCard$composable(tmp_3, tmp$ret$6, $composer_1, 48, 0);
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_getInstance();
        }
        tmp_1 = tmp_7;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda_4$lambda$lambda_inzn4n_2($shaaZmanisValues$delegate, $allZmanim$delegate, $tz) {
    return function ($this$LazyColumn) {
      var otherOpinions = emptyMap();
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.lazy.items$composable' call
      var tmp0_items$composable = invoke$lambda_7($shaaZmanisValues$delegate);
      var tmp1_items$composable = ComposableSingletons$AppKt$lambda_4$lambda$lambda$lambda_inhy30;
      var tmp = tmp0_items$composable.get_size_woubt6_k$();
      var tmp_0;
      if (!(null == null)) {
        tmp_0 = ComposableSingletons$AppKt$lambda_4$lambda$lambda$lambda_inhy30_0(tmp0_items$composable);
      } else {
        tmp_0 = null;
      }
      var tmp_1 = tmp_0;
      var tmp_2 = ComposableSingletons$AppKt$lambda_4$lambda$lambda$lambda_inhy30_1(tmp1_items$composable, tmp0_items$composable);
      $this$LazyColumn.items$composable_x0xxle_k$(tmp, tmp_1, tmp_2, ComposableLambda$invoke$ref_3(composableLambdaInstance(-632812321, true, ComposableSingletons$AppKt$lambda_4$lambda$lambda$lambda_inhy30_2(tmp0_items$composable, otherOpinions))));
      tmp$ret$0 = Unit_getInstance();
      var tmp$ret$1;
      // Inline function 'androidx.compose.foundation.lazy.items$composable' call
      var tmp5_items$composable = invoke$lambda_9($allZmanim$delegate);
      var tmp6_items$composable = ComposableSingletons$AppKt$lambda_4$lambda$lambda$lambda_inhy30_3;
      var tmp_3 = tmp5_items$composable.get_size_woubt6_k$();
      var tmp_4;
      if (!(null == null)) {
        tmp_4 = ComposableSingletons$AppKt$lambda_4$lambda$lambda$lambda_inhy30_4(tmp5_items$composable);
      } else {
        tmp_4 = null;
      }
      var tmp_5 = tmp_4;
      var tmp_6 = ComposableSingletons$AppKt$lambda_4$lambda$lambda$lambda_inhy30_5(tmp6_items$composable, tmp5_items$composable);
      $this$LazyColumn.items$composable_x0xxle_k$(tmp_3, tmp_5, tmp_6, ComposableLambda$invoke$ref_4(composableLambdaInstance(-632812321, true, ComposableSingletons$AppKt$lambda_4$lambda$lambda$lambda_inhy30_6(tmp5_items$composable, $tz, otherOpinions))));
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AppKt$lambda_5$lambda_dz9egj(it, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1665195686, $changed, -1, 'sternbach.software.ComposableSingletons$AppKt.lambda-5.<anonymous> (App.kt:343)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$AppKt() {
    ComposableSingletons$AppKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(1671536155, false, ComposableSingletons$AppKt$lambda_1$lambda_ua4ft5));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(1959698500, false, ComposableSingletons$AppKt$lambda_2$lambda_1ghyqy));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(737364485, false, ComposableSingletons$AppKt$lambda_3$lambda_rd4ib9));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(1970214571, false, ComposableSingletons$AppKt$lambda_4$lambda_eud2lo));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(1665195686, false, ComposableSingletons$AppKt$lambda_5$lambda_dz9egj));
  }
  protoOf(ComposableSingletons$AppKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda_3_bzdzzq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda_4_bzdzzr_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda_5_bzdzzs_k$ = function () {
    return this.lambda_5_r8sbbl_1;
  };
  var ComposableSingletons$AppKt_instance;
  function ComposableSingletons$AppKt_getInstance() {
    if (ComposableSingletons$AppKt_instance == null)
      new ComposableSingletons$AppKt();
    return ComposableSingletons$AppKt_instance;
  }
  function App$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1135006148);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1135006148, $changed, -1, 'sternbach.software.App$composable (App.kt:47)');
      }
      AppTheme$composable(false, ComposableSingletons$AppKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 48, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(App$composable$lambda($changed));
    }
  }
  function ZmanCard$composable(model, content, $composer, $changed, $default) {
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-521824729);
    sourceInformation($composer_0, 'C(ZmanCard$composable)P(1)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(model) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        content_0._v = ComposableSingletons$AppKt_getInstance().lambda_5_r8sbbl_1;
      }
      if (isTraceInProgress()) {
        traceEventStart(-521824729, $dirty, -1, 'sternbach.software.ZmanCard$composable (App.kt:343)');
      }
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = $composer_0;
      var $composer_1 = tmp2_remember$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (false ? true : tmp0_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'sternbach.software.ZmanCard$composable.<anonymous>' call
        tmp$ret$0 = mutableStateOf(System_getInstance().now_2cba_k$());
        var value = tmp$ret$0;
        tmp1_cache.updateRememberedValue_l1colo_k$(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      tmp$ret$1 = tmp;
      tmp$ret$2 = tmp$ret$1;
      var tmp_0 = tmp$ret$2;
      tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0;
      var now$delegate = tmp$ret$4;
      var tmp_1 = fillMaxWidth(Companion_getInstance_2());
      var tmp$ret$5;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$5 = _Dp___init__impl__ms3zkb(8);
      var tmp_2 = padding(tmp_1, tmp$ret$5);
      var tmp$ret$12;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$11;
      // Inline function 'sternbach.software.ZmanCard$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 1941982230, true, ZmanCard$composable$lambda_1(model, content_0, $dirty, now$delegate));
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_2 = tmp3_remember$composable;
      $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      var tmp$ret$8;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var tmp$ret$6;
        // Inline function 'sternbach.software.ZmanCard$composable.<anonymous>.<anonymous>' call
        tmp$ret$6 = ComposableLambda$invoke$ref_7(dispatchReceiver);
        var value_0 = tmp$ret$6;
        tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = tmp0_let_0;
      }
      tmp$ret$7 = tmp_4;
      tmp$ret$8 = tmp$ret$7;
      var tmp_5 = tmp$ret$8;
      tmp$ret$9 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      var tmp0_0 = tmp$ret$9;
      $composer_2.endReplaceableGroup_er37p7_k$();
      tmp$ret$10 = tmp0_0;
      tmp$ret$11 = tmp$ret$10;
      tmp$ret$12 = tmp$ret$11;
      Card$composable(tmp_2, null, null, null, null, tmp$ret$12, $composer_0, 196614, 30);
      if (!(model.get_mainZmanTime_qo4sdr_k$() === 'null')) {
        var tmp$ret$17;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp6_remember$composable = $composer_0;
        var $composer_3 = tmp6_remember$composable;
        $composer_3.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$16;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp4_cache = $composer_3;
        var tmp5_cache = $composer_3.changed_ga7h3f_k$(now$delegate);
        var tmp$ret$15;
        // Inline function 'kotlin.let' call
        var tmp3_let = tmp4_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$14;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_6;
        if (tmp5_cache ? true : tmp3_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          var tmp$ret$13;
          // Inline function 'sternbach.software.ZmanCard$composable.<anonymous>' call
          tmp$ret$13 = ZmanCard$composable$slambda_0(now$delegate, null);
          var value_1 = tmp$ret$13;
          tmp4_cache.updateRememberedValue_l1colo_k$(value_1);
          tmp_6 = value_1;
        } else {
          tmp_6 = tmp3_let;
        }
        tmp$ret$14 = tmp_6;
        tmp$ret$15 = tmp$ret$14;
        var tmp_7 = tmp$ret$15;
        tmp$ret$16 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
        var tmp0_1 = tmp$ret$16;
        $composer_3.endReplaceableGroup_er37p7_k$();
        tmp$ret$17 = tmp0_1;
        LaunchedEffect$composable(Unit_getInstance(), tmp$ret$17, $composer_0, 6);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(ZmanCard$composable$lambda_2(model, content_0, $changed, $default));
    }
  }
  function formatted$formatted(_this__u8e3s4) {
    return _this__u8e3s4 === 0 ? '00' : _this__u8e3s4 < 10 ? '0' + _this__u8e3s4 : _this__u8e3s4.toString();
  }
  function format$_anonymous_$pad_uy2ydt(_this__u8e3s4) {
    return padStart(_this__u8e3s4.toString(), 2, _Char___init__impl__6a9atx(48));
  }
  function ZmanCard$composable$lambda($now$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('now', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $now$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function ZmanCard$composable$lambda_0($now$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('now', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $now$delegate.set_value_rnwamw_k$(value);
  }
  function App$composable$lambda($$changed) {
    return function ($composer, $force) {
      App$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ZmanCard$composable$lambda_1($model, $content, $$dirty, $now$delegate) {
    return function ($this$Card, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1941982230, $changed, -1, 'sternbach.software.ZmanCard$composable.<anonymous> (App.kt:347)');
        }
        var tmp_0 = $model.get_mainZmanOpinion_e2y4kg_k$();
        var tmp_1 = Companion_getInstance_2();
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$0 = _Dp___init__impl__ms3zkb(8);
        var tmp_2 = tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$1 = _Dp___init__impl__ms3zkb(4);
        var tmp_3 = padding_0(tmp_1, tmp_2, VOID, VOID, tmp$ret$1);
        var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_7 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_8 = _TextOverflow___init__impl__obguoe(0);
        Text$composable(tmp_0, tmp_3, tmp_4, tmp_5, null, null, null, tmp_6, null, null, tmp_7, tmp_8, false, 0, null, null, $composer_0, 48, 0, 65532);
        var tmp_9 = $model.get_mainZmanTime_qo4sdr_k$();
        var tmp_10 = Companion_getInstance_2();
        var tmp$ret$2;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$2 = _Dp___init__impl__ms3zkb(8);
        var tmp_11 = padding_0(tmp_10, tmp$ret$2);
        var tmp_12 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_14 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_15 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_16 = _TextOverflow___init__impl__obguoe(0);
        Text$composable(tmp_9, tmp_11, tmp_12, tmp_13, null, null, null, tmp_14, null, null, tmp_15, tmp_16, false, 0, null, null, $composer_0, 48, 0, 65532);
        $content._v(ZmanCard$composable$lambda($now$delegate), $composer_0, 112 & $$dirty);
        var tmp_17;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_17 = Unit_getInstance();
        }
        tmp = tmp_17;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ZmanCard$composable$slambda($now$delegate, resultContinuation) {
    this.$now$delegate_1 = $now$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ZmanCard$composable$slambda).invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ZmanCard$composable$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ZmanCard$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (!get_isActive(this.$this$LaunchedEffect_1)) {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

            ZmanCard$composable$lambda_0(this.$now$delegate_1, System_getInstance().now_2cba_k$());
            this.set_state_a96kl8_k$(2);
            suspendResult = delay(new Long(1000, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(ZmanCard$composable$slambda).create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new ZmanCard$composable$slambda(this.$now$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(ZmanCard$composable$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ZmanCard$composable$slambda_0($now$delegate, resultContinuation) {
    var i = new ZmanCard$composable$slambda($now$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ZmanCard$composable$lambda_2($model, $content, $$changed, $$default) {
    return function ($composer, $force) {
      ZmanCard$composable($model, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function get_md_theme_light_primary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_primary;
  }
  var md_theme_light_primary;
  function get_md_theme_light_onPrimary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onPrimary;
  }
  var md_theme_light_onPrimary;
  function get_md_theme_light_primaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_primaryContainer;
  }
  var md_theme_light_primaryContainer;
  function get_md_theme_light_onPrimaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onPrimaryContainer;
  }
  var md_theme_light_onPrimaryContainer;
  function get_md_theme_light_secondary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_secondary;
  }
  var md_theme_light_secondary;
  function get_md_theme_light_onSecondary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onSecondary;
  }
  var md_theme_light_onSecondary;
  function get_md_theme_light_secondaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_secondaryContainer;
  }
  var md_theme_light_secondaryContainer;
  function get_md_theme_light_onSecondaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onSecondaryContainer;
  }
  var md_theme_light_onSecondaryContainer;
  function get_md_theme_light_tertiary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_tertiary;
  }
  var md_theme_light_tertiary;
  function get_md_theme_light_onTertiary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onTertiary;
  }
  var md_theme_light_onTertiary;
  function get_md_theme_light_tertiaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_tertiaryContainer;
  }
  var md_theme_light_tertiaryContainer;
  function get_md_theme_light_onTertiaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onTertiaryContainer;
  }
  var md_theme_light_onTertiaryContainer;
  function get_md_theme_light_error() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_error;
  }
  var md_theme_light_error;
  function get_md_theme_light_errorContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_errorContainer;
  }
  var md_theme_light_errorContainer;
  function get_md_theme_light_onError() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onError;
  }
  var md_theme_light_onError;
  function get_md_theme_light_onErrorContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onErrorContainer;
  }
  var md_theme_light_onErrorContainer;
  function get_md_theme_light_background() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_background;
  }
  var md_theme_light_background;
  function get_md_theme_light_onBackground() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onBackground;
  }
  var md_theme_light_onBackground;
  function get_md_theme_light_surface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_surface;
  }
  var md_theme_light_surface;
  function get_md_theme_light_onSurface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onSurface;
  }
  var md_theme_light_onSurface;
  function get_md_theme_light_surfaceVariant() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_surfaceVariant;
  }
  var md_theme_light_surfaceVariant;
  function get_md_theme_light_onSurfaceVariant() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onSurfaceVariant;
  }
  var md_theme_light_onSurfaceVariant;
  function get_md_theme_light_outline() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_outline;
  }
  var md_theme_light_outline;
  function get_md_theme_light_inverseOnSurface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_inverseOnSurface;
  }
  var md_theme_light_inverseOnSurface;
  function get_md_theme_light_inverseSurface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_inverseSurface;
  }
  var md_theme_light_inverseSurface;
  function get_md_theme_light_inversePrimary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_inversePrimary;
  }
  var md_theme_light_inversePrimary;
  function get_md_theme_light_shadow() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_shadow;
  }
  var md_theme_light_shadow;
  function get_md_theme_light_surfaceTint() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_surfaceTint;
  }
  var md_theme_light_surfaceTint;
  function get_md_theme_light_outlineVariant() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_outlineVariant;
  }
  var md_theme_light_outlineVariant;
  function get_md_theme_light_scrim() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_scrim;
  }
  var md_theme_light_scrim;
  function get_md_theme_dark_primary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_primary;
  }
  var md_theme_dark_primary;
  function get_md_theme_dark_onPrimary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onPrimary;
  }
  var md_theme_dark_onPrimary;
  function get_md_theme_dark_primaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_primaryContainer;
  }
  var md_theme_dark_primaryContainer;
  function get_md_theme_dark_onPrimaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onPrimaryContainer;
  }
  var md_theme_dark_onPrimaryContainer;
  function get_md_theme_dark_secondary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_secondary;
  }
  var md_theme_dark_secondary;
  function get_md_theme_dark_onSecondary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onSecondary;
  }
  var md_theme_dark_onSecondary;
  function get_md_theme_dark_secondaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_secondaryContainer;
  }
  var md_theme_dark_secondaryContainer;
  function get_md_theme_dark_onSecondaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onSecondaryContainer;
  }
  var md_theme_dark_onSecondaryContainer;
  function get_md_theme_dark_tertiary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_tertiary;
  }
  var md_theme_dark_tertiary;
  function get_md_theme_dark_onTertiary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onTertiary;
  }
  var md_theme_dark_onTertiary;
  function get_md_theme_dark_tertiaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_tertiaryContainer;
  }
  var md_theme_dark_tertiaryContainer;
  function get_md_theme_dark_onTertiaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onTertiaryContainer;
  }
  var md_theme_dark_onTertiaryContainer;
  function get_md_theme_dark_error() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_error;
  }
  var md_theme_dark_error;
  function get_md_theme_dark_errorContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_errorContainer;
  }
  var md_theme_dark_errorContainer;
  function get_md_theme_dark_onError() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onError;
  }
  var md_theme_dark_onError;
  function get_md_theme_dark_onErrorContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onErrorContainer;
  }
  var md_theme_dark_onErrorContainer;
  function get_md_theme_dark_background() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_background;
  }
  var md_theme_dark_background;
  function get_md_theme_dark_onBackground() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onBackground;
  }
  var md_theme_dark_onBackground;
  function get_md_theme_dark_surface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_surface;
  }
  var md_theme_dark_surface;
  function get_md_theme_dark_onSurface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onSurface;
  }
  var md_theme_dark_onSurface;
  function get_md_theme_dark_surfaceVariant() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_surfaceVariant;
  }
  var md_theme_dark_surfaceVariant;
  function get_md_theme_dark_onSurfaceVariant() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onSurfaceVariant;
  }
  var md_theme_dark_onSurfaceVariant;
  function get_md_theme_dark_outline() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_outline;
  }
  var md_theme_dark_outline;
  function get_md_theme_dark_inverseOnSurface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_inverseOnSurface;
  }
  var md_theme_dark_inverseOnSurface;
  function get_md_theme_dark_inverseSurface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_inverseSurface;
  }
  var md_theme_dark_inverseSurface;
  function get_md_theme_dark_inversePrimary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_inversePrimary;
  }
  var md_theme_dark_inversePrimary;
  function get_md_theme_dark_shadow() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_shadow;
  }
  var md_theme_dark_shadow;
  function get_md_theme_dark_surfaceTint() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_surfaceTint;
  }
  var md_theme_dark_surfaceTint;
  function get_md_theme_dark_outlineVariant() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_outlineVariant;
  }
  var md_theme_dark_outlineVariant;
  function get_md_theme_dark_scrim() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_scrim;
  }
  var md_theme_dark_scrim;
  function get_seed() {
    _init_properties_Color_kt__6h0l1r();
    return seed;
  }
  var seed;
  var properties_initialized_Color_kt_bdybnx;
  function _init_properties_Color_kt__6h0l1r() {
    if (properties_initialized_Color_kt_bdybnx) {
    } else {
      properties_initialized_Color_kt_bdybnx = true;
      md_theme_light_primary = Color(new Long(-16750470, 0));
      md_theme_light_onPrimary = Color(new Long(-1, 0));
      md_theme_light_primaryContainer = Color(new Long(-5509633, 0));
      md_theme_light_onPrimaryContainer = Color(new Long(-16769242, 0));
      md_theme_light_secondary = Color(new Long(-16750226, 0));
      md_theme_light_onSecondary = Color(new Long(-1, 0));
      md_theme_light_secondaryContainer = Color(new Long(-9439490, 0));
      md_theme_light_onSecondaryContainer = Color(new Long(-16768990, 0));
      md_theme_light_tertiary = Color(new Long(-7320320, 0));
      md_theme_light_onTertiary = Color(new Long(-1, 0));
      md_theme_light_tertiaryContainer = Color(new Long(-9022, 0));
      md_theme_light_onTertiaryContainer = Color(new Long(-13757184, 0));
      md_theme_light_error = Color(new Long(-4580838, 0));
      md_theme_light_errorContainer = Color(new Long(-9514, 0));
      md_theme_light_onError = Color(new Long(-1, 0));
      md_theme_light_onErrorContainer = Color(new Long(-12517374, 0));
      md_theme_light_background = Color(new Long(-1025, 0));
      md_theme_light_onBackground = Color(new Long(-14542080, 0));
      md_theme_light_surface = Color(new Long(-1025, 0));
      md_theme_light_onSurface = Color(new Long(-14542080, 0));
      md_theme_light_surfaceVariant = Color(new Long(-2366233, 0));
      md_theme_light_onSurfaceVariant = Color(new Long(-12629941, 0));
      md_theme_light_outline = Color(new Long(-9406085, 0));
      md_theme_light_inverseOnSurface = Color(new Long(-3904, 0));
      md_theme_light_inverseSurface = Color(new Long(-12963840, 0));
      md_theme_light_inversePrimary = Color(new Long(-11151628, 0));
      md_theme_light_shadow = Color(new Long(-16777216, 0));
      md_theme_light_surfaceTint = Color(new Long(-16750470, 0));
      md_theme_light_outlineVariant = Color(new Long(-4208437, 0));
      md_theme_light_scrim = Color(new Long(-16777216, 0));
      md_theme_dark_primary = Color(new Long(-11151628, 0));
      md_theme_dark_onPrimary = Color(new Long(-16763328, 0));
      md_theme_dark_primaryContainer = Color(new Long(-16757156, 0));
      md_theme_dark_onPrimaryContainer = Color(new Long(-5509633, 0));
      md_theme_dark_secondary = Color(new Long(-11740702, 0));
      md_theme_dark_onSecondary = Color(new Long(-16763078, 0));
      md_theme_dark_secondaryContainer = Color(new Long(-16756909, 0));
      md_theme_dark_onSecondaryContainer = Color(new Long(-9439490, 0));
      md_theme_dark_tertiary = Color(new Long(-18564, 0));
      md_theme_dark_onTertiary = Color(new Long(-11720960, 0));
      md_theme_dark_tertiaryContainer = Color(new Long(-9619200, 0));
      md_theme_dark_onTertiaryContainer = Color(new Long(-9022, 0));
      md_theme_dark_error = Color(new Long(-19285, 0));
      md_theme_dark_errorContainer = Color(new Long(-7143414, 0));
      md_theme_dark_onError = Color(new Long(-9895931, 0));
      md_theme_dark_onErrorContainer = Color(new Long(-9514, 0));
      md_theme_dark_background = Color(new Long(-14542080, 0));
      md_theme_dark_onBackground = Color(new Long(-7580, 0));
      md_theme_dark_surface = Color(new Long(-14542080, 0));
      md_theme_dark_onSurface = Color(new Long(-7580, 0));
      md_theme_dark_surfaceVariant = Color(new Long(-12629941, 0));
      md_theme_dark_onSurfaceVariant = Color(new Long(-4208437, 0));
      md_theme_dark_outline = Color(new Long(-7761259, 0));
      md_theme_dark_inverseOnSurface = Color(new Long(-14542080, 0));
      md_theme_dark_inverseSurface = Color(new Long(-7580, 0));
      md_theme_dark_inversePrimary = Color(new Long(-16750470, 0));
      md_theme_dark_shadow = Color(new Long(-16777216, 0));
      md_theme_dark_surfaceTint = Color(new Long(-11151628, 0));
      md_theme_dark_outlineVariant = Color(new Long(-12629941, 0));
      md_theme_dark_scrim = Color(new Long(-16777216, 0));
      seed = Color(new Long(-13879751, 0));
    }
  }
  function get_LightColorScheme() {
    _init_properties_Theme_kt__w31tqv();
    return LightColorScheme;
  }
  var LightColorScheme;
  function get_DarkColorScheme() {
    _init_properties_Theme_kt__w31tqv();
    return DarkColorScheme;
  }
  var DarkColorScheme;
  function get_AppShapes() {
    _init_properties_Theme_kt__w31tqv();
    return AppShapes;
  }
  var AppShapes;
  function get_AppTypography() {
    _init_properties_Theme_kt__w31tqv();
    return AppTypography;
  }
  var AppTypography;
  function AppTheme(useDarkTheme, content) {
    _init_properties_Theme_kt__w31tqv();
    illegalDecoyCallException('AppTheme');
  }
  function AppTheme$composable(useDarkTheme, content, $composer, $changed, $default) {
    _init_properties_Theme_kt__w31tqv();
    var useDarkTheme_0 = {_v: useDarkTheme};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1901981540);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ((($default & 1) === 0 ? $composer_0.changed_i0nym2_k$(useDarkTheme_0._v) : false) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g7jseb_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          useDarkTheme_0._v = isSystemInDarkTheme$composable($composer_0, 0);
          $dirty = $dirty & -15;
        }
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
      }
      $composer_0.endDefaults_b0883g_k$();
      if (isTraceInProgress()) {
        traceEventStart(-1901981540, $dirty, -1, 'sternbach.software.theme.AppTheme$composable (Theme.kt:60)');
      }
      var tmp;
      if (!useDarkTheme_0._v) {
        tmp = get_LightColorScheme();
      } else {
        tmp = get_DarkColorScheme();
      }
      var colors = tmp;
      var tmp0_typography = get_AppTypography();
      var tmp1_shapes = get_AppShapes();
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'sternbach.software.theme.AppTheme$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -99116691, true, AppTheme$composable$lambda(content, $dirty));
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'sternbach.software.theme.AppTheme$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_8(dispatchReceiver);
        var value = tmp$ret$0;
        tmp1_cache.updateRememberedValue_l1colo_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      tmp$ret$1 = tmp_1;
      tmp$ret$2 = tmp$ret$1;
      var tmp_2 = tmp$ret$2;
      tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      MaterialTheme$composable(colors, tmp1_shapes, tmp0_typography, tmp$ret$6, $composer_0, 3504, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(AppTheme$composable$lambda_0(useDarkTheme_0, content, $changed, $default));
    }
  }
  function AppTheme$composable$lambda($content, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-99116691, $changed, -1, 'sternbach.software.theme.AppTheme$composable.<anonymous> (Theme.kt:74)');
        }
        var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
        var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
        Surface$composable(null, null, tmp_0, tmp_1, tmp_2, tmp_3, null, $content, $composer_0, 29360128 & $$dirty << 18, 127);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function AppTheme$composable$lambda_0($useDarkTheme, $content, $$changed, $$default) {
    return function ($composer, $force) {
      AppTheme$composable($useDarkTheme._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var properties_initialized_Theme_kt_uwj6hl;
  function _init_properties_Theme_kt__w31tqv() {
    if (properties_initialized_Theme_kt_uwj6hl) {
    } else {
      properties_initialized_Theme_kt_uwj6hl = true;
      var tmp0_primary = get_md_theme_light_primary();
      var tmp1_onPrimary = get_md_theme_light_onPrimary();
      var tmp2_secondary = get_md_theme_light_secondary();
      var tmp3_onSecondary = get_md_theme_light_onSecondary();
      var tmp4_error = get_md_theme_light_error();
      var tmp5_onError = get_md_theme_light_onError();
      var tmp6_background = get_md_theme_light_background();
      var tmp7_onBackground = get_md_theme_light_onBackground();
      var tmp8_surface = get_md_theme_light_surface();
      var tmp9_onSurface = get_md_theme_light_onSurface();
      LightColorScheme = lightColorScheme(tmp0_primary, tmp1_onPrimary, VOID, VOID, VOID, tmp2_secondary, tmp3_onSecondary, VOID, VOID, VOID, VOID, VOID, VOID, tmp6_background, tmp7_onBackground, tmp8_surface, tmp9_onSurface, VOID, VOID, VOID, VOID, VOID, tmp4_error, tmp5_onError);
      var tmp0_primary_0 = get_md_theme_dark_primary();
      var tmp1_onPrimary_0 = get_md_theme_dark_onPrimary();
      var tmp2_secondary_0 = get_md_theme_dark_secondary();
      var tmp3_onSecondary_0 = get_md_theme_dark_onSecondary();
      var tmp4_error_0 = get_md_theme_dark_error();
      var tmp5_onError_0 = get_md_theme_dark_onError();
      var tmp6_background_0 = get_md_theme_dark_background();
      var tmp7_onBackground_0 = get_md_theme_dark_onBackground();
      var tmp8_surface_0 = get_md_theme_dark_surface();
      var tmp9_onSurface_0 = get_md_theme_dark_onSurface();
      DarkColorScheme = darkColorScheme(tmp0_primary_0, tmp1_onPrimary_0, VOID, VOID, VOID, tmp2_secondary_0, tmp3_onSecondary_0, VOID, VOID, VOID, VOID, VOID, VOID, tmp6_background_0, tmp7_onBackground_0, tmp8_surface_0, tmp9_onSurface_0, VOID, VOID, VOID, VOID, VOID, tmp4_error_0, tmp5_onError_0);
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(2);
      var tmp = RoundedCornerShape(tmp$ret$0);
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(4);
      var tmp_0 = RoundedCornerShape(tmp$ret$1);
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$2 = _Dp___init__impl__ms3zkb(8);
      var tmp_1 = RoundedCornerShape(tmp$ret$2);
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$3 = _Dp___init__impl__ms3zkb(16);
      var tmp_2 = RoundedCornerShape(tmp$ret$3);
      var tmp$ret$4;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$4 = _Dp___init__impl__ms3zkb(32);
      AppShapes = new Shapes(tmp, tmp_0, tmp_1, tmp_2, RoundedCornerShape(tmp$ret$4));
      var tmp0_fontFamily = Companion_getInstance_7().get_Default_goqax4_k$();
      var tmp1_fontWeight = Companion_getInstance_8().get_Medium_1fiba6_k$();
      var tmp2_fontSize = get_sp(16);
      AppTypography = new Typography(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, TextStyle_init_$Create$(VOID, tmp2_fontSize, tmp1_fontWeight, VOID, VOID, tmp0_fontFamily));
    }
  }
  function _get_adjustedLocalDate__vypika($this) {
    var offset = $this.geoLocation_1.get_antimeridianAdjustment_135zw9_k$();
    return offset === 0 ? $this.localDate_1 : toLocalDateTime(plus(toInstant($this.localDate_1, $this.geoLocation_1.get_timeZone_4vh49u_k$()), DatePeriod_init_$Create$(VOID, VOID, offset), $this.geoLocation_1.get_timeZone_4vh49u_k$()), $this.geoLocation_1.get_timeZone_4vh49u_k$());
  }
  function Companion() {
    Companion_instance = this;
    this.GEOMETRIC_ZENITH_1 = 90.0;
    this.CIVIL_ZENITH_1 = 96.0;
    this.NAUTICAL_ZENITH_1 = 102.0;
    this.ASTRONOMICAL_ZENITH_1 = 108.0;
    this.MINUTE_MILLIS_1 = new Long(60000, 0);
    this.HOUR_MILLIS_1 = new Long(3600000, 0);
  }
  protoOf(Companion).get_GEOMETRIC_ZENITH_w4fb9d_k$ = function () {
    return this.GEOMETRIC_ZENITH_1;
  };
  protoOf(Companion).get_CIVIL_ZENITH_2h5bjl_k$ = function () {
    return this.CIVIL_ZENITH_1;
  };
  protoOf(Companion).get_NAUTICAL_ZENITH_93i6ft_k$ = function () {
    return this.NAUTICAL_ZENITH_1;
  };
  protoOf(Companion).get_ASTRONOMICAL_ZENITH_akullu_k$ = function () {
    return this.ASTRONOMICAL_ZENITH_1;
  };
  protoOf(Companion).get_MINUTE_MILLIS_eebl48_k$ = function () {
    return this.MINUTE_MILLIS_1;
  };
  protoOf(Companion).get_HOUR_MILLIS_8knouw_k$ = function () {
    return this.HOUR_MILLIS_1;
  };
  protoOf(Companion).getTimeOffset_mbzyq8_k$ = function (time, offset) {
    return this.getTimeOffset_dv9nut_k$(time, numberToLong(offset));
  };
  protoOf(Companion).getTimeOffset_dv9nut_k$ = function (time, offset) {
    if (time == null ? true : offset.equals(Companion_getInstance_9().get_MIN_VALUE_7nmmor_k$())) {
      return null;
    }
    var tmp$ret$0;
    // Inline function 'kotlin.time.Companion.milliseconds' call
    var tmp0__get_milliseconds__kazo1t = Companion_getInstance();
    tmp$ret$0 = toDuration(offset, DurationUnit_MILLISECONDS_getInstance());
    return time.plus_bswwzx_k$(tmp$ret$0);
  };
  var Companion_instance;
  function Companion_getInstance_12() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function get_$stableprop_4() {
    return 8;
  }
  function AstronomicalCalendar(geoLocation) {
    Companion_getInstance_12();
    this.geoLocation_1 = geoLocation;
    this.localDate_1 = toLocalDateTime(System_getInstance().now_2cba_k$(), this.geoLocation_1.get_timeZone_4vh49u_k$());
    this.astronomicalCalculator_1 = Companion_getInstance_19().get_default_qtagd4_k$();
    this.$stable_1 = 8;
  }
  protoOf(AstronomicalCalendar).set_geoLocation_1iyaeo_k$ = function (_set____db54di) {
    this.geoLocation_1 = _set____db54di;
  };
  protoOf(AstronomicalCalendar).get_geoLocation_g2drjx_k$ = function () {
    return this.geoLocation_1;
  };
  protoOf(AstronomicalCalendar).set_localDate_o7yuyk_k$ = function (_set____db54di) {
    this.localDate_1 = _set____db54di;
  };
  protoOf(AstronomicalCalendar).get_localDate_bfbdgw_k$ = function () {
    return this.localDate_1;
  };
  protoOf(AstronomicalCalendar).set_astronomicalCalculator_hytky8_k$ = function (_set____db54di) {
    this.astronomicalCalculator_1 = _set____db54di;
  };
  protoOf(AstronomicalCalendar).get_astronomicalCalculator_vhqk83_k$ = function () {
    return this.astronomicalCalculator_1;
  };
  protoOf(AstronomicalCalendar).get_sunrise_tfsl3o_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    Companion_getInstance_12();
    var tmp0_takeUnless = this.getUTCSunrise_v0npc6_k$(90.0);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.kosherjava.zmanim.AstronomicalCalendar.<get-sunrise>.<anonymous>' call
    tmp$ret$0 = isNaN_0(tmp0_takeUnless);
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'com.kosherjava.zmanim.AstronomicalCalendar.<get-sunrise>.<anonymous>' call
      tmp$ret$2 = this.getDateFromTime_ywfmqo_k$(tmp0_safe_receiver, true);
      tmp$ret$3 = tmp$ret$2;
      tmp_0 = tmp$ret$3;
    }
    return tmp_0;
  };
  protoOf(AstronomicalCalendar).get_seaLevelSunrise_ma2vhz_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    Companion_getInstance_12();
    var tmp0_takeUnless = this.getUTCSeaLevelSunrise_lf87td_k$(90.0);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.kosherjava.zmanim.AstronomicalCalendar.<get-seaLevelSunrise>.<anonymous>' call
    tmp$ret$0 = isNaN_0(tmp0_takeUnless);
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'com.kosherjava.zmanim.AstronomicalCalendar.<get-seaLevelSunrise>.<anonymous>' call
      tmp$ret$2 = this.getDateFromTime_ywfmqo_k$(tmp0_safe_receiver, true);
      tmp$ret$3 = tmp$ret$2;
      tmp_0 = tmp$ret$3;
    }
    return tmp_0;
  };
  protoOf(AstronomicalCalendar).get_beginCivilTwilight_x42jgj_k$ = function () {
    Companion_getInstance_12();
    return this.getSunriseOffsetByDegrees_7zo4v1_k$(96.0);
  };
  protoOf(AstronomicalCalendar).get_beginNauticalTwilight_k4hsux_k$ = function () {
    Companion_getInstance_12();
    return this.getSunriseOffsetByDegrees_7zo4v1_k$(102.0);
  };
  protoOf(AstronomicalCalendar).get_beginAstronomicalTwilight_74sszm_k$ = function () {
    Companion_getInstance_12();
    return this.getSunriseOffsetByDegrees_7zo4v1_k$(108.0);
  };
  protoOf(AstronomicalCalendar).get_sunset_jo78nz_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    Companion_getInstance_12();
    var tmp0_takeUnless = this.getUTCSunset_x24dgj_k$(90.0);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.kosherjava.zmanim.AstronomicalCalendar.<get-sunset>.<anonymous>' call
    tmp$ret$0 = isNaN_0(tmp0_takeUnless);
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'com.kosherjava.zmanim.AstronomicalCalendar.<get-sunset>.<anonymous>' call
      tmp$ret$2 = this.getDateFromTime_ywfmqo_k$(tmp0_safe_receiver, false);
      tmp$ret$3 = tmp$ret$2;
      tmp_0 = tmp$ret$3;
    }
    return tmp_0;
  };
  protoOf(AstronomicalCalendar).get_seaLevelSunset_hm0xos_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    Companion_getInstance_12();
    var tmp0_takeUnless = this.getUTCSeaLevelSunset_8hso94_k$(90.0);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.kosherjava.zmanim.AstronomicalCalendar.<get-seaLevelSunset>.<anonymous>' call
    tmp$ret$0 = isNaN_0(tmp0_takeUnless);
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'com.kosherjava.zmanim.AstronomicalCalendar.<get-seaLevelSunset>.<anonymous>' call
      tmp$ret$2 = this.getDateFromTime_ywfmqo_k$(tmp0_safe_receiver, false);
      tmp$ret$3 = tmp$ret$2;
      tmp_0 = tmp$ret$3;
    }
    return tmp_0;
  };
  protoOf(AstronomicalCalendar).get_endCivilTwilight_xdevu7_k$ = function () {
    Companion_getInstance_12();
    return this.getSunsetOffsetByDegrees_6r9vdc_k$(96.0);
  };
  protoOf(AstronomicalCalendar).get_endNauticalTwilight_26puop_k$ = function () {
    Companion_getInstance_12();
    return this.getSunsetOffsetByDegrees_6r9vdc_k$(102.0);
  };
  protoOf(AstronomicalCalendar).get_endAstronomicalTwilight_w9v4gc_k$ = function () {
    Companion_getInstance_12();
    return this.getSunsetOffsetByDegrees_6r9vdc_k$(108.0);
  };
  protoOf(AstronomicalCalendar).getSunriseOffsetByDegrees_7zo4v1_k$ = function (offsetZenith) {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.getUTCSunrise_v0npc6_k$(offsetZenith);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.kosherjava.zmanim.AstronomicalCalendar.getSunriseOffsetByDegrees.<anonymous>' call
    tmp$ret$0 = isNaN_0(tmp0_takeUnless);
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'com.kosherjava.zmanim.AstronomicalCalendar.getSunriseOffsetByDegrees.<anonymous>' call
      tmp$ret$2 = this.getDateFromTime_ywfmqo_k$(tmp0_safe_receiver, true);
      tmp$ret$3 = tmp$ret$2;
      tmp_0 = tmp$ret$3;
    }
    return tmp_0;
  };
  protoOf(AstronomicalCalendar).getSunsetOffsetByDegrees_6r9vdc_k$ = function (offsetZenith) {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.getUTCSunset_x24dgj_k$(offsetZenith);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.kosherjava.zmanim.AstronomicalCalendar.getSunsetOffsetByDegrees.<anonymous>' call
    tmp$ret$0 = isNaN_0(tmp0_takeUnless);
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'com.kosherjava.zmanim.AstronomicalCalendar.getSunsetOffsetByDegrees.<anonymous>' call
      tmp$ret$2 = this.getDateFromTime_ywfmqo_k$(tmp0_safe_receiver, false);
      tmp$ret$3 = tmp$ret$2;
      tmp_0 = tmp$ret$3;
    }
    return tmp_0;
  };
  protoOf(AstronomicalCalendar).getUTCSunrise_v0npc6_k$ = function (zenith) {
    return this.astronomicalCalculator_1.getUTCSunrise_z2odd2_k$(_get_adjustedLocalDate__vypika(this).get_date_wokkxj_k$(), this.geoLocation_1, zenith, true);
  };
  protoOf(AstronomicalCalendar).getUTCSeaLevelSunrise_lf87td_k$ = function (zenith) {
    return this.astronomicalCalculator_1.getUTCSunrise_z2odd2_k$(_get_adjustedLocalDate__vypika(this).get_date_wokkxj_k$(), this.geoLocation_1, zenith, false);
  };
  protoOf(AstronomicalCalendar).getUTCSunset_x24dgj_k$ = function (zenith) {
    return this.astronomicalCalculator_1.getUTCSunset_akkvrr_k$(_get_adjustedLocalDate__vypika(this).get_date_wokkxj_k$(), this.geoLocation_1, zenith, true);
  };
  protoOf(AstronomicalCalendar).getUTCSeaLevelSunset_8hso94_k$ = function (zenith) {
    return this.astronomicalCalculator_1.getUTCSunset_akkvrr_k$(_get_adjustedLocalDate__vypika(this).get_date_wokkxj_k$(), this.geoLocation_1, zenith, false);
  };
  protoOf(AstronomicalCalendar).get_temporalHour_vdfypb_k$ = function () {
    return this.getTemporalHour_6o7hf2_k$(this.get_seaLevelSunrise_ma2vhz_k$(), this.get_seaLevelSunset_hm0xos_k$());
  };
  protoOf(AstronomicalCalendar).getTemporalHour_6o7hf2_k$ = function (startOfday, endOfDay) {
    if (startOfday == null ? true : endOfDay == null) {
      return Companion_getInstance_9().get_MIN_VALUE_7nmmor_k$();
    }
    return _Duration___get_inWholeMilliseconds__impl__msfiry(Duration__div_impl_dknbf4(endOfDay.minus_q82skq_k$(startOfday), 12));
  };
  protoOf(AstronomicalCalendar).get_sunTransit_kmlcg_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.astronomicalCalculator_1.getUTCNoon_7pjs5g_k$(_get_adjustedLocalDate__vypika(this).get_date_wokkxj_k$(), this.geoLocation_1);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.kosherjava.zmanim.AstronomicalCalendar.<get-sunTransit>.<anonymous>' call
    tmp$ret$0 = isNaN_0(tmp0_takeUnless);
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'com.kosherjava.zmanim.AstronomicalCalendar.<get-sunTransit>.<anonymous>' call
      tmp$ret$2 = this.getDateFromTime_ywfmqo_k$(tmp0_safe_receiver, false);
      tmp$ret$3 = tmp$ret$2;
      tmp_0 = tmp$ret$3;
    }
    return tmp_0;
  };
  protoOf(AstronomicalCalendar).getSunTransit_pth1w3_k$ = function (startOfDay, endOfDay) {
    var tmp = Companion_getInstance_12();
    var tmp$ret$0;
    // Inline function 'kotlin.Long.times' call
    var tmp0_times = this.getTemporalHour_6o7hf2_k$(startOfDay, endOfDay);
    tmp$ret$0 = tmp0_times.times_2zfqpc_k$(new Long(6, 0));
    return tmp.getTimeOffset_dv9nut_k$(startOfDay, tmp$ret$0);
  };
  protoOf(AstronomicalCalendar).getDateFromTime_ywfmqo_k$ = function (time, isSunrise) {
    if (isNaN_0(time)) {
      return null;
    }
    var calculatedTime = time;
    var adjustedLocalDate = _get_adjustedLocalDate__vypika(this);
    var timeZone = Companion_getInstance_0().currentSystemDefault_9rduv_k$();
    var cal = toInstant(adjustedLocalDate, timeZone);
    var hours = numberToInt(calculatedTime);
    calculatedTime = calculatedTime - hours;
    calculatedTime = calculatedTime * 60;
    var minutes = numberToInt(calculatedTime);
    calculatedTime = calculatedTime - minutes;
    calculatedTime = calculatedTime * 60;
    var seconds = numberToInt(calculatedTime);
    calculatedTime = calculatedTime - seconds;
    var localTimeHours = numberToInt(this.geoLocation_1.get_longitude_asb1fq_k$() / 15);
    if (isSunrise ? (localTimeHours + hours | 0) > 18 : false)
      cal = plus(cal, DatePeriod_init_$Create$(VOID, VOID, -1), timeZone);
    else if (!isSunrise ? (localTimeHours + hours | 0) < 6 : false)
      cal = plus(cal, DatePeriod_init_$Create$(VOID, VOID, 1), timeZone);
    var dt = toLocalDateTime(cal, timeZone);
    var tmp = dt.get_year_woy26e_k$();
    var tmp_0 = dt.get_month_ivc8d3_k$();
    var tmp_1 = dt.get_dayOfMonth_vblo3a_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.time.Companion.milliseconds' call
    var tmp0__get_milliseconds__kazo1t = Companion_getInstance();
    var tmp1__get_milliseconds__r2e6ua = calculatedTime * 1000;
    tmp$ret$0 = toDuration_1(tmp1__get_milliseconds__r2e6ua, DurationUnit_MILLISECONDS_getInstance());
    return toInstant(LocalDateTime_init_$Create$(tmp, tmp_0, tmp_1, hours, minutes, seconds, _Duration___get_inWholeNanoseconds__impl__r5x4mr(tmp$ret$0).toInt_1tsl84_k$()), timeZone);
  };
  protoOf(AstronomicalCalendar).getSunriseSolarDipFromOffset_ugpeit_k$ = function (minutes) {
    var offsetByDegrees = this.get_seaLevelSunrise_ma2vhz_k$();
    var tmp = Companion_getInstance_12();
    var tmp_0 = this.get_seaLevelSunrise_ma2vhz_k$();
    Companion_getInstance_12();
    var offsetByTime = tmp.getTimeOffset_mbzyq8_k$(tmp_0, -(minutes * (new Long(60000, 0)).toDouble_ygsx0s_k$()));
    var degrees = 0.0;
    var incrementor = 1.0E-4;
    while (offsetByDegrees == null ? true : (minutes < 0.0 ? offsetByDegrees.compareTo_qie524_k$(ensureNotNull(offsetByTime)) < 0 : false) ? true : minutes > 0.0 ? offsetByDegrees.compareTo_qie524_k$(ensureNotNull(offsetByTime)) > 0 : false) {
      degrees = minutes > 0.0 ? degrees + incrementor : degrees - incrementor;
      Companion_getInstance_12();
      offsetByDegrees = this.getSunriseOffsetByDegrees_7zo4v1_k$(90.0 + degrees);
    }
    return degrees;
  };
  protoOf(AstronomicalCalendar).getSunsetSolarDipFromOffset_ecda42_k$ = function (minutes) {
    var offsetByDegrees = this.get_seaLevelSunset_hm0xos_k$();
    var tmp = Companion_getInstance_12();
    var tmp_0 = this.get_seaLevelSunset_hm0xos_k$();
    Companion_getInstance_12();
    var offsetByTime = tmp.getTimeOffset_mbzyq8_k$(tmp_0, minutes * (new Long(60000, 0)).toDouble_ygsx0s_k$());
    var degrees = 0.0;
    var incrementor = 0.001;
    while ((offsetByDegrees == null ? true : minutes > 0.0 ? offsetByDegrees.compareTo_qie524_k$(ensureNotNull(offsetByTime)) < 0 : false) ? true : minutes < 0.0 ? offsetByDegrees.compareTo_qie524_k$(ensureNotNull(offsetByTime)) > 0 : false) {
      degrees = minutes > 0.0 ? degrees + incrementor : degrees - incrementor;
      Companion_getInstance_12();
      offsetByDegrees = this.getSunsetOffsetByDegrees_6r9vdc_k$(90.0 + degrees);
    }
    return degrees;
  };
  protoOf(AstronomicalCalendar).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AstronomicalCalendar))
      return false;
    return (this.localDate_1.equals(other.localDate_1) ? this.geoLocation_1.equals(other.geoLocation_1) : false) ? equals(this.astronomicalCalculator_1, other.astronomicalCalculator_1) : false;
  };
  protoOf(AstronomicalCalendar).hashCode = function () {
    var result = 17;
    result = imul(37, result) + getKClassFromExpression(this).hashCode() | 0;
    result = result + (imul(37, result) + this.localDate_1.hashCode() | 0) | 0;
    result = result + (imul(37, result) + this.geoLocation_1.hashCode() | 0) | 0;
    result = result + (imul(37, result) + hashCode(this.astronomicalCalculator_1) | 0) | 0;
    return result;
  };
  protoOf(AstronomicalCalendar).copy_1tks5_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new AstronomicalCalendar(this.geoLocation_1.copy$default_ceu64i_k$());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.kosherjava.zmanim.AstronomicalCalendar.copy.<anonymous>' call
    tmp0_apply.astronomicalCalculator_1 = tmp0_apply.astronomicalCalculator_1.copy_1tks5_k$();
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  };
  function getZmanisBasedOffset($this, hours) {
    var shaahZmanis = $this.get_shaahZmanisGra_vf44pq_k$();
    if (shaahZmanis.equals(Companion_getInstance_9().get_MIN_VALUE_7nmmor_k$()) ? true : hours === 0.0) {
      return null;
    }
    var tmp = Companion_getInstance_12();
    var tmp_0 = hours > 0.0 ? $this.get_elevationAdjustedSunset_q5ajjs_k$() : $this.get_elevationAdjustedSunrise_t7toc3_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.Long.times' call
    tmp$ret$0 = shaahZmanis.toDouble_ygsx0s_k$() * hours;
    return tmp.getTimeOffset_dv9nut_k$(tmp_0, numberToLong(tmp$ret$0));
  }
  function getMoladBasedTime($this, moladBasedTime, alos, tzais, techila) {
    var tz = Companion_getInstance_0().currentSystemDefault_9rduv_k$();
    return !(moladBasedTime.compareTo_qie524_k$(toInstant(_get_midnightLastNight__cg60db($this), tz)) < 0 ? true : moladBasedTime.compareTo_qie524_k$(toInstant(_get_midnightTonight__trrack($this), tz)) > 0) ? (!(alos == null) ? true : !(tzais == null)) ? (techila ? !((!(tzais == null) ? moladBasedTime.compareTo_qie524_k$(tzais) < 0 : false) ? true : !(alos == null) ? moladBasedTime.compareTo_qie524_k$(alos) > 0 : false) : false) ? tzais : alos : moladBasedTime : null;
  }
  function _get_midnightLastNight__cg60db($this) {
    return LocalDateTime_init_$Create$_0($this.get_localDate_bfbdgw_k$().get_date_wokkxj_k$(), Companion_getInstance_13().MIDNIGHT_1);
  }
  function _get_midnightTonight__trrack($this) {
    return LocalDateTime_init_$Create$_0(plus_0($this.get_localDate_bfbdgw_k$().get_date_wokkxj_k$(), DatePeriod_init_$Create$(VOID, VOID, 1)), Companion_getInstance_13().MIDNIGHT_1);
  }
  function _get_sunriseBaalHatanya__iq0bnq($this) {
    Companion_getInstance_13();
    return $this.getSunriseOffsetByDegrees_7zo4v1_k$(91.583);
  }
  function _get_sunsetBaalHatanya__dpxx6n($this) {
    Companion_getInstance_13();
    return $this.getSunsetOffsetByDegrees_6r9vdc_k$(91.583);
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.MIDNIGHT_1 = LocalTime_init_$Create$(0, 0, 0);
    this.ZENITH_3_POINT_7__1 = 93.7;
    this.ZENITH_3_POINT_8__1 = 93.8;
    this.ZENITH_5_POINT_95__1 = 95.95;
    this.ZENITH_7_POINT_083__1 = 97.08333333333333;
    this.ZENITH_10_POINT_2__1 = 100.2;
    this.ZENITH_11_DEGREES_1 = 101.0;
    this.ZENITH_11_POINT_5__1 = 101.5;
    this.ZENITH_13_POINT_24__1 = 103.24;
    this.ZENITH_19_DEGREES_1 = 109.0;
    this.ZENITH_19_POINT_8__1 = 109.8;
    this.ZENITH_26_DEGREES_1 = 116.0;
    this.ZENITH_4_POINT_37__1 = 94.37;
    this.ZENITH_4_POINT_61__1 = 94.61;
    this.ZENITH_4_POINT_8__1 = 94.8;
    this.ZENITH_3_POINT_65__1 = 93.65;
    this.ZENITH_3_POINT_676__1 = 93.676;
    this.ZENITH_5_POINT_88__1 = 95.88;
    this.ZENITH_1_POINT_583__1 = 91.583;
    this.ZENITH_16_POINT_9__1 = 106.9;
    this.ZENITH_6_DEGREES_1 = 96.0;
    this.ZENITH_6_POINT_45__1 = 96.45;
    this.ZENITH_7_POINT_65__1 = 97.65;
    this.ZENITH_7_POINT_67__1 = 97.67;
    this.ZENITH_9_POINT_3__1 = 99.3;
    this.ZENITH_9_POINT_5__1 = 99.5;
    this.ZENITH_9_POINT_75__1 = 99.75;
    this.ZENITH_MINUS_2_POINT_1__1 = 87.9;
    this.ZENITH_MINUS_2_POINT_8__1 = 87.2;
    this.ZENITH_MINUS_3_POINT_05__1 = 86.95;
  }
  protoOf(Companion_0).get_MIDNIGHT_p17c0p_k$ = function () {
    return this.MIDNIGHT_1;
  };
  protoOf(Companion_0).get_ZENITH_3_POINT_7_6fmjnk_k$ = function () {
    return this.ZENITH_3_POINT_7__1;
  };
  protoOf(Companion_0).get_ZENITH_3_POINT_8_6fmjnj_k$ = function () {
    return this.ZENITH_3_POINT_8__1;
  };
  protoOf(Companion_0).get_ZENITH_5_POINT_95_74xb5d_k$ = function () {
    return this.ZENITH_5_POINT_95__1;
  };
  protoOf(Companion_0).get_ZENITH_7_POINT_083_jqqi0o_k$ = function () {
    return this.ZENITH_7_POINT_083__1;
  };
  protoOf(Companion_0).get_ZENITH_10_POINT_2_s1ewf3_k$ = function () {
    return this.ZENITH_10_POINT_2__1;
  };
  protoOf(Companion_0).get_ZENITH_11_DEGREES_uce1z8_k$ = function () {
    return this.ZENITH_11_DEGREES_1;
  };
  protoOf(Companion_0).get_ZENITH_11_POINT_5_1up4d9_k$ = function () {
    return this.ZENITH_11_POINT_5__1;
  };
  protoOf(Companion_0).get_ZENITH_13_POINT_24_73hcya_k$ = function () {
    return this.ZENITH_13_POINT_24__1;
  };
  protoOf(Companion_0).get_ZENITH_19_DEGREES_4au1l8_k$ = function () {
    return this.ZENITH_19_DEGREES_1;
  };
  protoOf(Companion_0).get_ZENITH_19_POINT_8_rw94r6_k$ = function () {
    return this.ZENITH_19_POINT_8__1;
  };
  protoOf(Companion_0).get_ZENITH_26_DEGREES_jp236w_k$ = function () {
    return this.ZENITH_26_DEGREES_1;
  };
  protoOf(Companion_0).get_ZENITH_4_POINT_37_adx9sq_k$ = function () {
    return this.ZENITH_4_POINT_37__1;
  };
  protoOf(Companion_0).get_ZENITH_4_POINT_61_adx9v5_k$ = function () {
    return this.ZENITH_4_POINT_61__1;
  };
  protoOf(Companion_0).get_ZENITH_4_POINT_8_ypdhj6_k$ = function () {
    return this.ZENITH_4_POINT_8__1;
  };
  protoOf(Companion_0).get_ZENITH_3_POINT_65_dmx8nq_k$ = function () {
    return this.ZENITH_3_POINT_65__1;
  };
  protoOf(Companion_0).get_ZENITH_3_POINT_676_3g1vc2_k$ = function () {
    return this.ZENITH_3_POINT_676__1;
  };
  protoOf(Companion_0).get_ZENITH_5_POINT_88_74xb4l_k$ = function () {
    return this.ZENITH_5_POINT_88__1;
  };
  protoOf(Companion_0).get_ZENITH_1_POINT_583_f1g4y1_k$ = function () {
    return this.ZENITH_1_POINT_583__1;
  };
  protoOf(Companion_0).get_ZENITH_16_POINT_9_9914d0_k$ = function () {
    return this.ZENITH_16_POINT_9__1;
  };
  protoOf(Companion_0).get_ZENITH_6_DEGREES_748maq_k$ = function () {
    return this.ZENITH_6_DEGREES_1;
  };
  protoOf(Companion_0).get_ZENITH_6_POINT_45_3vxc8l_k$ = function () {
    return this.ZENITH_6_POINT_45__1;
  };
  protoOf(Companion_0).get_ZENITH_7_POINT_65_mxdhu_k$ = function () {
    return this.ZENITH_7_POINT_65__1;
  };
  protoOf(Companion_0).get_ZENITH_7_POINT_67_mxdhw_k$ = function () {
    return this.ZENITH_7_POINT_67__1;
  };
  protoOf(Companion_0).get_ZENITH_9_POINT_3_rb1hj6_k$ = function () {
    return this.ZENITH_9_POINT_3__1;
  };
  protoOf(Companion_0).get_ZENITH_9_POINT_5_rb1hj8_k$ = function () {
    return this.ZENITH_9_POINT_5__1;
  };
  protoOf(Companion_0).get_ZENITH_9_POINT_75_5v2k29_k$ = function () {
    return this.ZENITH_9_POINT_75__1;
  };
  protoOf(Companion_0).get_ZENITH_MINUS_2_POINT_1_svqdrq_k$ = function () {
    return this.ZENITH_MINUS_2_POINT_1__1;
  };
  protoOf(Companion_0).get_ZENITH_MINUS_2_POINT_8_svqdrj_k$ = function () {
    return this.ZENITH_MINUS_2_POINT_8__1;
  };
  protoOf(Companion_0).get_ZENITH_MINUS_3_POINT_05_otqw17_k$ = function () {
    return this.ZENITH_MINUS_3_POINT_05__1;
  };
  var Companion_instance_0;
  function Companion_getInstance_13() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function get_$stableprop_5() {
    return 8;
  }
  function ComplexZmanimCalendar(location) {
    Companion_getInstance_13();
    location = location === VOID ? GeoLocation_init_$Create$_1() : location;
    ZmanimCalendar.call(this, location);
    this.ateretTorahSunsetOffset_1 = 40.0;
    this.$stable_3 = 8;
  }
  protoOf(ComplexZmanimCalendar).set_ateretTorahSunsetOffset_v5vo2x_k$ = function (_set____db54di) {
    this.ateretTorahSunsetOffset_1 = _set____db54di;
  };
  protoOf(ComplexZmanimCalendar).get_ateretTorahSunsetOffset_syzpt_k$ = function () {
    return this.ateretTorahSunsetOffset_1;
  };
  protoOf(ComplexZmanimCalendar).get_shaahZmanis19Point8Degrees_omnon1_k$ = function () {
    return this.getTemporalHour_6o7hf2_k$(this.get_alos19Point8Degrees_dy6s1t_k$(), this.get_tzais19Point8Degrees_f8jttn_k$());
  };
  protoOf(ComplexZmanimCalendar).get_shaahZmanis18Degrees_mmkhas_k$ = function () {
    return this.getTemporalHour_6o7hf2_k$(this.get_alos18Degrees_hq8uxk_k$(), this.get_tzais18Degrees_3vzqg4_k$());
  };
  protoOf(ComplexZmanimCalendar).get_shaahZmanis26Degrees_vwanqn_k$ = function () {
    return this.getTemporalHour_6o7hf2_k$(this.get_alos26Degrees_y8hrv9_k$(), this.get_tzais26Degrees_cm96hl_k$());
  };
  protoOf(ComplexZmanimCalendar).get_shaahZmanis16Point1Degrees_bsasgd_k$ = function () {
    return this.getTemporalHour_6o7hf2_k$(this.get_alos16Point1Degrees_mgrp1l_k$(), this.get_tzais16Point1Degrees_jdlr23_k$());
  };
  protoOf(ComplexZmanimCalendar).get_shaahZmanis60Minutes_fjznzl_k$ = function () {
    return this.getTemporalHour_6o7hf2_k$(this.get_alos60_b0gi1e_k$(), this.get_tzais60_clh3l6_k$());
  };
  protoOf(ComplexZmanimCalendar).get_shaahZmanis72Minutes_rpzgnk_k$ = function () {
    return this.get_shaahZmanisMGA_vf41bh_k$();
  };
  protoOf(ComplexZmanimCalendar).get_shaahZmanis72MinutesZmanis_6seqxm_k$ = function () {
    return this.getTemporalHour_6o7hf2_k$(this.get_alos72Zmanis_sw9mn7_k$(), this.get_tzais72Zmanis_fc3l29_k$());
  };
  protoOf(ComplexZmanimCalendar).get_shaahZmanis90Minutes_338cek_k$ = function () {
    return this.getTemporalHour_6o7hf2_k$(this.get_alos90_b0gi3z_k$(), this.get_tzais90_clh3il_k$());
  };
  protoOf(ComplexZmanimCalendar).get_shaahZmanis90MinutesZmanis_2cekv2_k$ = function () {
    return this.getTemporalHour_6o7hf2_k$(this.get_alos90Zmanis_lt8yv_k$(), this.get_tzais90Zmanis_rek38j_k$());
  };
  protoOf(ComplexZmanimCalendar).get_shaahZmanis96MinutesZmanis_n7jdnc_k$ = function () {
    return this.getTemporalHour_6o7hf2_k$(this.get_alos96Zmanis_gfgee7_k$(), this.get_tzais96Zmanis_adafvh_k$());
  };
  protoOf(ComplexZmanimCalendar).get_shaahZmanisAteretTorah_tormnv_k$ = function () {
    return this.getTemporalHour_6o7hf2_k$(this.get_alos72Zmanis_sw9mn7_k$(), this.get_tzaisAteretTorah_b2yqb7_k$());
  };
  protoOf(ComplexZmanimCalendar).get_shaahZmanisAlos16Point1ToTzais3Point8_sqd1dm_k$ = function () {
    return this.getTemporalHour_6o7hf2_k$(this.get_alos16Point1Degrees_mgrp1l_k$(), this.get_tzaisGeonim3Point8Degrees_b64q7r_k$());
  };
  protoOf(ComplexZmanimCalendar).get_shaahZmanisAlos16Point1ToTzais3Point7_sqd1dl_k$ = function () {
    return this.getTemporalHour_6o7hf2_k$(this.get_alos16Point1Degrees_mgrp1l_k$(), this.get_tzaisGeonim3Point7Degrees_v1cup6_k$());
  };
  protoOf(ComplexZmanimCalendar).get_shaahZmanis96Minutes_rsae0e_k$ = function () {
    return this.getTemporalHour_6o7hf2_k$(this.get_alos96_b0gi45_k$(), this.get_tzais96_clh3if_k$());
  };
  protoOf(ComplexZmanimCalendar).get_shaahZmanis120Minutes_tajdj0_k$ = function () {
    return this.getTemporalHour_6o7hf2_k$(this.get_alos120_drcuax_k$(), this.get_tzais120_zc5wz1_k$());
  };
  protoOf(ComplexZmanimCalendar).get_shaahZmanis120MinutesZmanis_fd9yky_k$ = function () {
    return this.getTemporalHour_6o7hf2_k$(this.get_alos120Zmanis_7vd9a9_k$(), this.get_tzais120Zmanis_thlunx_k$());
  };
  protoOf(ComplexZmanimCalendar).get_plagHamincha120MinutesZmanis_c7tnc8_k$ = function () {
    return this.getPlagHamincha_govymn_k$(this.get_alos120Zmanis_7vd9a9_k$(), this.get_tzais120Zmanis_thlunx_k$());
  };
  protoOf(ComplexZmanimCalendar).get_plagHamincha120Minutes_khqp6q_k$ = function () {
    return this.getPlagHamincha_govymn_k$(this.get_alos120_drcuax_k$(), this.get_tzais120_zc5wz1_k$());
  };
  protoOf(ComplexZmanimCalendar).get_alos60_b0gi1e_k$ = function () {
    return Companion_getInstance_12().getTimeOffset_dv9nut_k$(this.get_sunrise_tfsl3o_k$(), numberToLong(-60).times_2zfqpc_k$(Companion_getInstance_12().get_MINUTE_MILLIS_eebl48_k$()));
  };
  protoOf(ComplexZmanimCalendar).get_alos72Zmanis_sw9mn7_k$ = function () {
    return getZmanisBasedOffset(this, -1.2);
  };
  protoOf(ComplexZmanimCalendar).get_alos96_b0gi45_k$ = function () {
    return Companion_getInstance_12().getTimeOffset_dv9nut_k$(this.get_elevationAdjustedSunrise_t7toc3_k$(), numberToLong(-96).times_2zfqpc_k$(Companion_getInstance_12().get_MINUTE_MILLIS_eebl48_k$()));
  };
  protoOf(ComplexZmanimCalendar).get_alos90Zmanis_lt8yv_k$ = function () {
    return getZmanisBasedOffset(this, -1.5);
  };
  protoOf(ComplexZmanimCalendar).get_alos96Zmanis_gfgee7_k$ = function () {
    return getZmanisBasedOffset(this, -1.6);
  };
  protoOf(ComplexZmanimCalendar).get_alos90_b0gi3z_k$ = function () {
    return Companion_getInstance_12().getTimeOffset_dv9nut_k$(this.get_elevationAdjustedSunrise_t7toc3_k$(), numberToLong(-90).times_2zfqpc_k$(Companion_getInstance_12().get_MINUTE_MILLIS_eebl48_k$()));
  };
  protoOf(ComplexZmanimCalendar).get_alos120_drcuax_k$ = function () {
    return Companion_getInstance_12().getTimeOffset_dv9nut_k$(this.get_elevationAdjustedSunrise_t7toc3_k$(), numberToLong(-120).times_2zfqpc_k$(Companion_getInstance_12().get_MINUTE_MILLIS_eebl48_k$()));
  };
  protoOf(ComplexZmanimCalendar).get_alos120Zmanis_7vd9a9_k$ = function () {
    return getZmanisBasedOffset(this, -2.0);
  };
  protoOf(ComplexZmanimCalendar).get_alos26Degrees_y8hrv9_k$ = function () {
    Companion_getInstance_13();
    return this.getSunriseOffsetByDegrees_7zo4v1_k$(116.0);
  };
  protoOf(ComplexZmanimCalendar).get_alos18Degrees_hq8uxk_k$ = function () {
    return this.getSunriseOffsetByDegrees_7zo4v1_k$(Companion_getInstance_12().get_ASTRONOMICAL_ZENITH_akullu_k$());
  };
  protoOf(ComplexZmanimCalendar).get_alos19Degrees_b3dm4n_k$ = function () {
    Companion_getInstance_13();
    return this.getSunriseOffsetByDegrees_7zo4v1_k$(109.0);
  };
  protoOf(ComplexZmanimCalendar).get_alos19Point8Degrees_dy6s1t_k$ = function () {
    Companion_getInstance_13();
    return this.getSunriseOffsetByDegrees_7zo4v1_k$(109.8);
  };
  protoOf(ComplexZmanimCalendar).get_alos16Point1Degrees_mgrp1l_k$ = function () {
    return this.getSunriseOffsetByDegrees_7zo4v1_k$(Companion_getInstance_14().get_ZENITH_16_POINT_1_9914d8_k$());
  };
  protoOf(ComplexZmanimCalendar).get_misheyakir11Point5Degrees_grc5wf_k$ = function () {
    Companion_getInstance_13();
    return this.getSunriseOffsetByDegrees_7zo4v1_k$(101.5);
  };
  protoOf(ComplexZmanimCalendar).get_misheyakir11Degrees_ml647a_k$ = function () {
    Companion_getInstance_13();
    return this.getSunriseOffsetByDegrees_7zo4v1_k$(101.0);
  };
  protoOf(ComplexZmanimCalendar).get_misheyakir10Point2Degrees_nu3nkr_k$ = function () {
    Companion_getInstance_13();
    return this.getSunriseOffsetByDegrees_7zo4v1_k$(100.2);
  };
  protoOf(ComplexZmanimCalendar).get_misheyakir7Point65Degrees_ozu3jm_k$ = function () {
    Companion_getInstance_13();
    return this.getSunriseOffsetByDegrees_7zo4v1_k$(97.65);
  };
  protoOf(ComplexZmanimCalendar).get_misheyakir9Point5Degrees_pwqs1i_k$ = function () {
    Companion_getInstance_13();
    return this.getSunriseOffsetByDegrees_7zo4v1_k$(99.5);
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanShmaMGA19Point8Degrees_lrgmt6_k$ = function () {
    return this.getSofZmanShma_yr290t_k$(this.get_alos19Point8Degrees_dy6s1t_k$(), this.get_tzais19Point8Degrees_f8jttn_k$());
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanShmaMGA16Point1Degrees_cuoy2k_k$ = function () {
    return this.getSofZmanShma_yr290t_k$(this.get_alos16Point1Degrees_mgrp1l_k$(), this.get_tzais16Point1Degrees_jdlr23_k$());
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanShmaMGA18Degrees_ls62xp_k$ = function () {
    return this.getSofZmanShma_yr290t_k$(this.get_alos18Degrees_hq8uxk_k$(), this.get_tzais18Degrees_3vzqg4_k$());
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanShmaMGA72Minutes_qvl2ah_k$ = function () {
    return this.get_sofZmanShmaMGA_whpwxp_k$();
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanShmaMGA72MinutesZmanis_hukzlb_k$ = function () {
    return this.getSofZmanShma_yr290t_k$(this.get_alos72Zmanis_sw9mn7_k$(), this.get_tzais72Zmanis_fc3l29_k$());
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanShmaMGA90Minutes_28ty1h_k$ = function () {
    return this.getSofZmanShma_yr290t_k$(this.get_alos90_b0gi3z_k$(), this.get_tzais90_clh3il_k$());
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanShmaMGA90MinutesZmanis_mal5nv_k$ = function () {
    return this.getSofZmanShma_yr290t_k$(this.get_alos90Zmanis_lt8yv_k$(), this.get_tzais90Zmanis_rek38j_k$());
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanShmaMGA96Minutes_smosdh_k$ = function () {
    return this.getSofZmanShma_yr290t_k$(this.get_alos96_b0gi45_k$(), this.get_tzais96_clh3if_k$());
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanShmaMGA96MinutesZmanis_1fgcvl_k$ = function () {
    return this.getSofZmanShma_yr290t_k$(this.get_alos96Zmanis_gfgee7_k$(), this.get_tzais96Zmanis_adafvh_k$());
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanShma3HoursBeforeChatzos_bt0ag1_k$ = function () {
    return Companion_getInstance_12().getTimeOffset_dv9nut_k$(this.get_chatzos_dhmavx_k$(), numberToLong(-180).times_2zfqpc_k$(Companion_getInstance_12().get_MINUTE_MILLIS_eebl48_k$()));
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanShmaMGA120Minutes_34509f_k$ = function () {
    return this.getSofZmanShma_yr290t_k$(this.get_alos120_drcuax_k$(), this.get_tzais120_zc5wz1_k$());
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanShmaAlos16Point1ToSunset_p275ww_k$ = function () {
    return this.getSofZmanShma_yr290t_k$(this.get_alos16Point1Degrees_mgrp1l_k$(), this.get_elevationAdjustedSunset_q5ajjs_k$());
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanShmaAlos16Point1ToTzaisGeonim7Point083Degrees_bzql9b_k$ = function () {
    return this.getSofZmanShma_yr290t_k$(this.get_alos16Point1Degrees_mgrp1l_k$(), this.get_tzaisGeonim7Point083Degrees_enim0i_k$());
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanShmaKolEliyahu_fjtuft_k$ = function () {
    var chatzos = this.get_fixedLocalChatzos_xhtegq_k$();
    if (chatzos == null ? true : this.get_sunrise_tfsl3o_k$() == null) {
      return null;
    }
    var tmp0_elvis_lhs = this.get_elevationAdjustedSunrise_t7toc3_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var elevationAdjustedSunriseTime = tmp;
    var diff = _Duration___get_inWholeMilliseconds__impl__msfiry(Duration__div_impl_dknbf4(chatzos.minus_q82skq_k$(elevationAdjustedSunriseTime), 2));
    return Companion_getInstance_12().getTimeOffset_dv9nut_k$(chatzos, diff.unaryMinus_6uz0qp_k$());
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanTfilaMGA19Point8Degrees_glssit_k$ = function () {
    return this.getSofZmanTfila_eew59q_k$(this.get_alos19Point8Degrees_dy6s1t_k$(), this.get_tzais19Point8Degrees_f8jttn_k$());
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanTfilaMGA16Point1Degrees_jt5okl_k$ = function () {
    return this.getSofZmanTfila_eew59q_k$(this.get_alos16Point1Degrees_mgrp1l_k$(), this.get_tzais16Point1Degrees_jdlr23_k$());
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanTfilaMGA18Degrees_bflvgk_k$ = function () {
    return this.getSofZmanTfila_eew59q_k$(this.get_alos18Degrees_hq8uxk_k$(), this.get_tzais18Degrees_3vzqg4_k$());
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanTfilaMGA72Minutes_6c6w3s_k$ = function () {
    return this.get_sofZmanTfilaMGA_aksnb0_k$();
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanTfilaMGA72MinutesZmanis_et9n1u_k$ = function () {
    return this.getSofZmanTfila_eew59q_k$(this.get_alos72Zmanis_sw9mn7_k$(), this.get_tzais72Zmanis_fc3l29_k$());
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanTfilaMGA90Minutes_uyy0cs_k$ = function () {
    return this.getSofZmanTfila_eew59q_k$(this.get_alos90_b0gi3z_k$(), this.get_tzais90_clh3il_k$());
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanTfilaMGA90MinutesZmanis_ad9gza_k$ = function () {
    return this.getSofZmanTfila_eew59q_k$(this.get_alos90Zmanis_lt8yv_k$(), this.get_tzais90Zmanis_rek38j_k$());
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanTfilaMGA96Minutes_96nb7e_k$ = function () {
    return this.getSofZmanTfila_eew59q_k$(this.get_alos96_b0gi45_k$(), this.get_tzais96_clh3if_k$());
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanTfilaMGA96MinutesZmanis_v8e9rk_k$ = function () {
    return this.getSofZmanTfila_eew59q_k$(this.get_alos96Zmanis_gfgee7_k$(), this.get_tzais96Zmanis_adafvh_k$());
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanTfilaMGA120Minutes_w5cucs_k$ = function () {
    return this.getSofZmanTfila_eew59q_k$(this.get_alos120_drcuax_k$(), this.get_tzais120_zc5wz1_k$());
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanTfila2HoursBeforeChatzos_r5j2ld_k$ = function () {
    return Companion_getInstance_12().getTimeOffset_dv9nut_k$(this.get_chatzos_dhmavx_k$(), numberToLong(-120).times_2zfqpc_k$(Companion_getInstance_12().get_MINUTE_MILLIS_eebl48_k$()));
  };
  protoOf(ComplexZmanimCalendar).get_minchaGedola30Minutes_kjd0dr_k$ = function () {
    var tmp = Companion_getInstance_12();
    var tmp_0 = this.get_chatzos_dhmavx_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.Long.times' call
    var tmp0_times = Companion_getInstance_12().get_MINUTE_MILLIS_eebl48_k$();
    tmp$ret$0 = tmp0_times.times_2zfqpc_k$(new Long(30, 0));
    return tmp.getTimeOffset_dv9nut_k$(tmp_0, tmp$ret$0);
  };
  protoOf(ComplexZmanimCalendar).get_minchaGedola72Minutes_bfg3fx_k$ = function () {
    return this.getMinchaGedola_t8y6oc_k$(this.get_alos72_b0gi2b_k$(), this.get_tzais72_clh3k9_k$());
  };
  protoOf(ComplexZmanimCalendar).get_minchaGedola16Point1Degrees_dlfwnk_k$ = function () {
    return this.getMinchaGedola_t8y6oc_k$(this.get_alos16Point1Degrees_mgrp1l_k$(), this.get_tzais16Point1Degrees_jdlr23_k$());
  };
  protoOf(ComplexZmanimCalendar).get_minchaGedolaAhavatShalom_bbd5dq_k$ = function () {
    var tmp;
    if (this.get_minchaGedola30Minutes_kjd0dr_k$() == null ? true : this.get_minchaGedola_wb6zo1_k$() == null) {
      tmp = null;
    } else {
      var tmp_0 = ensureNotNull(this.get_minchaGedola30Minutes_kjd0dr_k$());
      var tmp_1 = Companion_getInstance_12();
      var tmp_2 = this.get_chatzos_dhmavx_k$();
      var tmp$ret$0;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = this.get_shaahZmanisAlos16Point1ToTzais3Point7_sqd1dl_k$();
      tmp$ret$0 = tmp0_div.div_9s1fi3_k$(new Long(2, 0));
      if (tmp_0.compareTo_qie524_k$(ensureNotNull(tmp_1.getTimeOffset_dv9nut_k$(tmp_2, tmp$ret$0))) > 0) {
        tmp = this.get_minchaGedola30Minutes_kjd0dr_k$();
      } else {
        var tmp_3 = Companion_getInstance_12();
        var tmp_4 = this.get_chatzos_dhmavx_k$();
        var tmp$ret$1;
        // Inline function 'kotlin.Long.div' call
        var tmp1_div = this.get_shaahZmanisAlos16Point1ToTzais3Point7_sqd1dl_k$();
        tmp$ret$1 = tmp1_div.div_9s1fi3_k$(new Long(2, 0));
        tmp = tmp_3.getTimeOffset_dv9nut_k$(tmp_4, tmp$ret$1);
      }
    }
    return tmp;
  };
  protoOf(ComplexZmanimCalendar).get_minchaGedolaGreaterThan30_lvavuv_k$ = function () {
    return (this.get_minchaGedola30Minutes_kjd0dr_k$() == null ? true : this.get_minchaGedola_wb6zo1_k$() == null) ? null : ensureNotNull(this.get_minchaGedola30Minutes_kjd0dr_k$()).compareTo_qie524_k$(ensureNotNull(this.get_minchaGedola_wb6zo1_k$())) > 0 ? this.get_minchaGedola30Minutes_kjd0dr_k$() : this.get_minchaGedola_wb6zo1_k$();
  };
  protoOf(ComplexZmanimCalendar).get_minchaKetana16Point1Degrees_ihd3fw_k$ = function () {
    return this.getMinchaKetana_dik9ps_k$(this.get_alos16Point1Degrees_mgrp1l_k$(), this.get_tzais16Point1Degrees_jdlr23_k$());
  };
  protoOf(ComplexZmanimCalendar).get_minchaKetanaAhavatShalom_cqlpcq_k$ = function () {
    var tmp = Companion_getInstance_12();
    var tmp_0 = this.get_tzaisGeonim3Point8Degrees_b64q7r_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.Long.times' call
    var tmp0_times = this.get_shaahZmanisAlos16Point1ToTzais3Point8_sqd1dm_k$().unaryMinus_6uz0qp_k$();
    tmp$ret$0 = tmp0_times.toDouble_ygsx0s_k$() * 2.5;
    return tmp.getTimeOffset_mbzyq8_k$(tmp_0, tmp$ret$0);
  };
  protoOf(ComplexZmanimCalendar).get_minchaKetana72Minutes_7mpkax_k$ = function () {
    return this.getMinchaKetana_dik9ps_k$(this.get_alos72_b0gi2b_k$(), this.get_tzais72_clh3k9_k$());
  };
  protoOf(ComplexZmanimCalendar).get_plagHamincha60Minutes_p05rcn_k$ = function () {
    return this.getPlagHamincha_govymn_k$(this.get_alos60_b0gi1e_k$(), this.get_tzais60_clh3l6_k$());
  };
  protoOf(ComplexZmanimCalendar).get_plagHamincha72Minutes_i9tdai_k$ = function () {
    return this.getPlagHamincha_govymn_k$(this.get_alos72_b0gi2b_k$(), this.get_tzais72_clh3k9_k$());
  };
  protoOf(ComplexZmanimCalendar).get_plagHamincha90Minutes_6cxqyi_k$ = function () {
    return this.getPlagHamincha_govymn_k$(this.get_alos90_b0gi3z_k$(), this.get_tzais90_clh3il_k$());
  };
  protoOf(ComplexZmanimCalendar).get_plagHamincha96Minutes_xsnklo_k$ = function () {
    return this.getPlagHamincha_govymn_k$(this.get_alos96_b0gi45_k$(), this.get_tzais96_clh3if_k$());
  };
  protoOf(ComplexZmanimCalendar).get_plagHamincha96MinutesZmanis_o0nw9u_k$ = function () {
    return this.getPlagHamincha_govymn_k$(this.get_alos96Zmanis_gfgee7_k$(), this.get_tzais96Zmanis_adafvh_k$());
  };
  protoOf(ComplexZmanimCalendar).get_plagHamincha90MinutesZmanis_q5bcx0_k$ = function () {
    return this.getPlagHamincha_govymn_k$(this.get_alos90Zmanis_lt8yv_k$(), this.get_tzais90Zmanis_rek38j_k$());
  };
  protoOf(ComplexZmanimCalendar).get_plagHamincha72MinutesZmanis_ulbizk_k$ = function () {
    return this.getPlagHamincha_govymn_k$(this.get_alos72Zmanis_sw9mn7_k$(), this.get_tzais72Zmanis_fc3l29_k$());
  };
  protoOf(ComplexZmanimCalendar).get_plagHamincha16Point1Degrees_zfwhgt_k$ = function () {
    return this.getPlagHamincha_govymn_k$(this.get_alos16Point1Degrees_mgrp1l_k$(), this.get_tzais16Point1Degrees_jdlr23_k$());
  };
  protoOf(ComplexZmanimCalendar).get_plagHamincha19Point8Degrees_tqwl3_k$ = function () {
    return this.getPlagHamincha_govymn_k$(this.get_alos19Point8Degrees_dy6s1t_k$(), this.get_tzais19Point8Degrees_f8jttn_k$());
  };
  protoOf(ComplexZmanimCalendar).get_plagHamincha26Degrees_tonavf_k$ = function () {
    return this.getPlagHamincha_govymn_k$(this.get_alos26Degrees_y8hrv9_k$(), this.get_tzais26Degrees_cm96hl_k$());
  };
  protoOf(ComplexZmanimCalendar).get_plagHamincha18Degrees_d6edxq_k$ = function () {
    return this.getPlagHamincha_govymn_k$(this.get_alos18Degrees_hq8uxk_k$(), this.get_tzais18Degrees_3vzqg4_k$());
  };
  protoOf(ComplexZmanimCalendar).get_plagAlosToSunset_qun5uz_k$ = function () {
    return this.getPlagHamincha_govymn_k$(this.get_alos16Point1Degrees_mgrp1l_k$(), this.get_elevationAdjustedSunset_q5ajjs_k$());
  };
  protoOf(ComplexZmanimCalendar).get_plagAlos16Point1ToTzaisGeonim7Point083Degrees_phrykg_k$ = function () {
    return this.getPlagHamincha_govymn_k$(this.get_alos16Point1Degrees_mgrp1l_k$(), this.get_tzaisGeonim7Point083Degrees_enim0i_k$());
  };
  protoOf(ComplexZmanimCalendar).get_plagAhavatShalom_itgdns_k$ = function () {
    var tmp = Companion_getInstance_12();
    var tmp_0 = this.get_tzaisGeonim3Point8Degrees_b64q7r_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.Long.times' call
    var tmp0_times = this.get_shaahZmanisAlos16Point1ToTzais3Point8_sqd1dm_k$().unaryMinus_6uz0qp_k$();
    tmp$ret$0 = tmp0_times.toDouble_ygsx0s_k$() * 1.25;
    return tmp.getTimeOffset_mbzyq8_k$(tmp_0, tmp$ret$0);
  };
  protoOf(ComplexZmanimCalendar).get_bainHashmashosRT13Point24Degrees_j0h1y7_k$ = function () {
    Companion_getInstance_13();
    return this.getSunsetOffsetByDegrees_6r9vdc_k$(103.24);
  };
  protoOf(ComplexZmanimCalendar).get_bainHasmashosRT13Point24Degrees_9qzk99_k$ = function () {
    return this.get_bainHashmashosRT13Point24Degrees_j0h1y7_k$();
  };
  protoOf(ComplexZmanimCalendar).get_bainHashmashosRT58Point5Minutes_f4mg4t_k$ = function () {
    return Companion_getInstance_12().getTimeOffset_mbzyq8_k$(this.get_elevationAdjustedSunset_q5ajjs_k$(), 58.5 * Companion_getInstance_12().get_MINUTE_MILLIS_eebl48_k$().toDouble_ygsx0s_k$());
  };
  protoOf(ComplexZmanimCalendar).get_bainHasmashosRT58Point5Minutes_ixxj39_k$ = function () {
    return this.get_bainHashmashosRT58Point5Minutes_f4mg4t_k$();
  };
  protoOf(ComplexZmanimCalendar).get_bainHashmashosRT13Point5MinutesBefore7Point083Degrees_9zwr9a_k$ = function () {
    var tmp = Companion_getInstance_12();
    Companion_getInstance_13();
    return tmp.getTimeOffset_mbzyq8_k$(this.getSunsetOffsetByDegrees_6r9vdc_k$(97.08333333333333), -13.5 * Companion_getInstance_12().get_MINUTE_MILLIS_eebl48_k$().toDouble_ygsx0s_k$());
  };
  protoOf(ComplexZmanimCalendar).get_bainHasmashosRT13Point5MinutesBefore7Point083Degrees_bbtpio_k$ = function () {
    return this.get_bainHashmashosRT13Point5MinutesBefore7Point083Degrees_9zwr9a_k$();
  };
  protoOf(ComplexZmanimCalendar).get_bainHashmashosRT2Stars_3qblzb_k$ = function () {
    var tmp0_safe_receiver = this.get_alos19Point8Degrees_dy6s1t_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'com.kosherjava.zmanim.ComplexZmanimCalendar.<get-bainHashmashosRT2Stars>.<anonymous>' call
      var tmp0_safe_receiver_0 = this.get_elevationAdjustedSunrise_t7toc3_k$();
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'com.kosherjava.zmanim.ComplexZmanimCalendar.<get-bainHashmashosRT2Stars>.<anonymous>.<anonymous>' call
        tmp$ret$0 = Companion_getInstance_12().getTimeOffset_dv9nut_k$(this.get_elevationAdjustedSunset_q5ajjs_k$(), _Duration___get_inWholeMilliseconds__impl__msfiry(Duration__times_impl_sfuzvp(tmp0_safe_receiver_0.minus_q82skq_k$(tmp0_safe_receiver), 0.2777777777777778)));
        tmp$ret$1 = tmp$ret$0;
        tmp_0 = tmp$ret$1;
      }
      tmp$ret$2 = tmp_0;
      tmp$ret$3 = tmp$ret$2;
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  protoOf(ComplexZmanimCalendar).get_bainHasmashosRT2Stars_5dagy3_k$ = function () {
    return this.get_bainHashmashosRT2Stars_3qblzb_k$();
  };
  protoOf(ComplexZmanimCalendar).get_bainHashmashosYereim18Minutes_dz27hp_k$ = function () {
    return Companion_getInstance_12().getTimeOffset_dv9nut_k$(this.get_elevationAdjustedSunset_q5ajjs_k$(), numberToLong(-18).times_2zfqpc_k$(Companion_getInstance_12().get_MINUTE_MILLIS_eebl48_k$()));
  };
  protoOf(ComplexZmanimCalendar).get_bainHasmashosYereim18Minutes_nwl7ol_k$ = function () {
    return this.get_bainHashmashosYereim18Minutes_dz27hp_k$();
  };
  protoOf(ComplexZmanimCalendar).get_bainHashmashosYereim3Point05Degrees_fedesm_k$ = function () {
    Companion_getInstance_13();
    return this.getSunsetOffsetByDegrees_6r9vdc_k$(86.95);
  };
  protoOf(ComplexZmanimCalendar).get_bainHasmashosYereim3Point05Degrees_1na7nc_k$ = function () {
    return this.get_bainHashmashosYereim3Point05Degrees_fedesm_k$();
  };
  protoOf(ComplexZmanimCalendar).get_bainHashmashosYereim16Point875Minutes_njzrg7_k$ = function () {
    return Companion_getInstance_12().getTimeOffset_mbzyq8_k$(this.get_elevationAdjustedSunset_q5ajjs_k$(), -16.875 * Companion_getInstance_12().get_MINUTE_MILLIS_eebl48_k$().toDouble_ygsx0s_k$());
  };
  protoOf(ComplexZmanimCalendar).get_bainHasmashosYereim16Point875Minutes_j6k6yx_k$ = function () {
    return this.get_bainHashmashosYereim16Point875Minutes_njzrg7_k$();
  };
  protoOf(ComplexZmanimCalendar).get_bainHashmashosYereim2Point8Degrees_mxyde0_k$ = function () {
    Companion_getInstance_13();
    return this.getSunsetOffsetByDegrees_6r9vdc_k$(87.2);
  };
  protoOf(ComplexZmanimCalendar).get_bainHasmashosYereim2Point8Degrees_ew2kq_k$ = function () {
    return this.get_bainHashmashosYereim2Point8Degrees_mxyde0_k$();
  };
  protoOf(ComplexZmanimCalendar).get_bainHashmashosYereim13Point5Minutes_ulcqjx_k$ = function () {
    return Companion_getInstance_12().getTimeOffset_mbzyq8_k$(this.get_elevationAdjustedSunset_q5ajjs_k$(), -13.5 * Companion_getInstance_12().get_MINUTE_MILLIS_eebl48_k$().toDouble_ygsx0s_k$());
  };
  protoOf(ComplexZmanimCalendar).get_bainHasmashosYereim13Point5Minutes_qoo49x_k$ = function () {
    return this.get_bainHashmashosYereim13Point5Minutes_ulcqjx_k$();
  };
  protoOf(ComplexZmanimCalendar).get_bainHashmashosYereim2Point1Degrees_blziw1_k$ = function () {
    Companion_getInstance_13();
    return this.getSunsetOffsetByDegrees_6r9vdc_k$(87.9);
  };
  protoOf(ComplexZmanimCalendar).get_bainHasmashosYereim2Point1Degrees_bqux2p_k$ = function () {
    return this.get_bainHashmashosYereim2Point1Degrees_blziw1_k$();
  };
  protoOf(ComplexZmanimCalendar).get_tzaisGeonim3Point7Degrees_v1cup6_k$ = function () {
    Companion_getInstance_13();
    return this.getSunsetOffsetByDegrees_6r9vdc_k$(93.7);
  };
  protoOf(ComplexZmanimCalendar).get_tzaisGeonim3Point8Degrees_b64q7r_k$ = function () {
    Companion_getInstance_13();
    return this.getSunsetOffsetByDegrees_6r9vdc_k$(93.8);
  };
  protoOf(ComplexZmanimCalendar).get_tzaisGeonim5Point95Degrees_yflcxf_k$ = function () {
    Companion_getInstance_13();
    return this.getSunsetOffsetByDegrees_6r9vdc_k$(95.95);
  };
  protoOf(ComplexZmanimCalendar).get_tzaisGeonim3Point65Degrees_37p8ha_k$ = function () {
    Companion_getInstance_13();
    return this.getSunsetOffsetByDegrees_6r9vdc_k$(93.65);
  };
  protoOf(ComplexZmanimCalendar).get_tzaisGeonim3Point676Degrees_384824_k$ = function () {
    Companion_getInstance_13();
    return this.getSunsetOffsetByDegrees_6r9vdc_k$(93.676);
  };
  protoOf(ComplexZmanimCalendar).get_tzaisGeonim4Point61Degrees_g44jd9_k$ = function () {
    Companion_getInstance_13();
    return this.getSunsetOffsetByDegrees_6r9vdc_k$(94.61);
  };
  protoOf(ComplexZmanimCalendar).get_tzaisGeonim4Point37Degrees_xem7fu_k$ = function () {
    Companion_getInstance_13();
    return this.getSunsetOffsetByDegrees_6r9vdc_k$(94.37);
  };
  protoOf(ComplexZmanimCalendar).get_tzaisGeonim5Point88Degrees_8qcoy7_k$ = function () {
    Companion_getInstance_13();
    return this.getSunsetOffsetByDegrees_6r9vdc_k$(95.88);
  };
  protoOf(ComplexZmanimCalendar).get_tzaisGeonim4Point8Degrees_jj4lqw_k$ = function () {
    Companion_getInstance_13();
    return this.getSunsetOffsetByDegrees_6r9vdc_k$(94.8);
  };
  protoOf(ComplexZmanimCalendar).get_tzaisGeonim6Point45Degrees_49mmmp_k$ = function () {
    Companion_getInstance_13();
    return this.getSunsetOffsetByDegrees_6r9vdc_k$(96.45);
  };
  protoOf(ComplexZmanimCalendar).get_tzaisGeonim7Point083Degrees_enim0i_k$ = function () {
    Companion_getInstance_13();
    return this.getSunsetOffsetByDegrees_6r9vdc_k$(97.08333333333333);
  };
  protoOf(ComplexZmanimCalendar).get_tzaisGeonim7Point67Degrees_iiycc0_k$ = function () {
    Companion_getInstance_13();
    return this.getSunsetOffsetByDegrees_6r9vdc_k$(97.67);
  };
  protoOf(ComplexZmanimCalendar).get_tzaisGeonim8Point5Degrees_2m8kw7_k$ = function () {
    return this.getSunsetOffsetByDegrees_6r9vdc_k$(Companion_getInstance_14().get_ZENITH_8_POINT_5_dtyjnh_k$());
  };
  protoOf(ComplexZmanimCalendar).get_tzaisGeonim9Point3Degrees_7n3t7s_k$ = function () {
    Companion_getInstance_13();
    return this.getSunsetOffsetByDegrees_6r9vdc_k$(99.3);
  };
  protoOf(ComplexZmanimCalendar).get_tzaisGeonim9Point75Degrees_j5ahqj_k$ = function () {
    Companion_getInstance_13();
    return this.getSunsetOffsetByDegrees_6r9vdc_k$(99.75);
  };
  protoOf(ComplexZmanimCalendar).get_tzais60_clh3l6_k$ = function () {
    return Companion_getInstance_12().getTimeOffset_dv9nut_k$(this.get_elevationAdjustedSunset_q5ajjs_k$(), numberToLong(60).times_2zfqpc_k$(Companion_getInstance_12().get_MINUTE_MILLIS_eebl48_k$()));
  };
  protoOf(ComplexZmanimCalendar).get_tzaisAteretTorah_b2yqb7_k$ = function () {
    return Companion_getInstance_12().getTimeOffset_mbzyq8_k$(this.get_elevationAdjustedSunset_q5ajjs_k$(), this.ateretTorahSunsetOffset_1 * Companion_getInstance_12().get_MINUTE_MILLIS_eebl48_k$().toDouble_ygsx0s_k$());
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanShmaAteretTorah_urp78b_k$ = function () {
    return this.getSofZmanShma_yr290t_k$(this.get_alos72Zmanis_sw9mn7_k$(), this.get_tzaisAteretTorah_b2yqb7_k$());
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanTfilahAteretTorah_k5mkzy_k$ = function () {
    return this.getSofZmanTfila_eew59q_k$(this.get_alos72Zmanis_sw9mn7_k$(), this.get_tzaisAteretTorah_b2yqb7_k$());
  };
  protoOf(ComplexZmanimCalendar).get_minchaGedolaAteretTorah_au4syq_k$ = function () {
    return this.getMinchaGedola_t8y6oc_k$(this.get_alos72Zmanis_sw9mn7_k$(), this.get_tzaisAteretTorah_b2yqb7_k$());
  };
  protoOf(ComplexZmanimCalendar).get_minchaKetanaAteretTorah_gpdarm_k$ = function () {
    return this.getMinchaKetana_dik9ps_k$(this.get_alos72Zmanis_sw9mn7_k$(), this.get_tzaisAteretTorah_b2yqb7_k$());
  };
  protoOf(ComplexZmanimCalendar).get_plagHaminchaAteretTorah_id0dc1_k$ = function () {
    return this.getPlagHamincha_govymn_k$(this.get_alos72Zmanis_sw9mn7_k$(), this.get_tzaisAteretTorah_b2yqb7_k$());
  };
  protoOf(ComplexZmanimCalendar).get_tzais72Zmanis_fc3l29_k$ = function () {
    return getZmanisBasedOffset(this, 1.2);
  };
  protoOf(ComplexZmanimCalendar).get_tzais90Zmanis_rek38j_k$ = function () {
    return getZmanisBasedOffset(this, 1.5);
  };
  protoOf(ComplexZmanimCalendar).get_tzais96Zmanis_adafvh_k$ = function () {
    return getZmanisBasedOffset(this, 1.6);
  };
  protoOf(ComplexZmanimCalendar).get_tzais90_clh3il_k$ = function () {
    return Companion_getInstance_12().getTimeOffset_dv9nut_k$(this.get_elevationAdjustedSunset_q5ajjs_k$(), numberToLong(90).times_2zfqpc_k$(Companion_getInstance_12().get_MINUTE_MILLIS_eebl48_k$()));
  };
  protoOf(ComplexZmanimCalendar).get_tzais120_zc5wz1_k$ = function () {
    return Companion_getInstance_12().getTimeOffset_dv9nut_k$(this.get_elevationAdjustedSunset_q5ajjs_k$(), numberToLong(120).times_2zfqpc_k$(Companion_getInstance_12().get_MINUTE_MILLIS_eebl48_k$()));
  };
  protoOf(ComplexZmanimCalendar).get_tzais120Zmanis_thlunx_k$ = function () {
    return getZmanisBasedOffset(this, 2.0);
  };
  protoOf(ComplexZmanimCalendar).get_tzais16Point1Degrees_jdlr23_k$ = function () {
    return this.getSunsetOffsetByDegrees_6r9vdc_k$(Companion_getInstance_14().get_ZENITH_16_POINT_1_9914d8_k$());
  };
  protoOf(ComplexZmanimCalendar).get_tzais26Degrees_cm96hl_k$ = function () {
    Companion_getInstance_13();
    return this.getSunsetOffsetByDegrees_6r9vdc_k$(116.0);
  };
  protoOf(ComplexZmanimCalendar).get_tzais18Degrees_3vzqg4_k$ = function () {
    return this.getSunsetOffsetByDegrees_6r9vdc_k$(Companion_getInstance_12().get_ASTRONOMICAL_ZENITH_akullu_k$());
  };
  protoOf(ComplexZmanimCalendar).get_tzais19Point8Degrees_f8jttn_k$ = function () {
    Companion_getInstance_13();
    return this.getSunsetOffsetByDegrees_6r9vdc_k$(109.8);
  };
  protoOf(ComplexZmanimCalendar).get_tzais96_clh3if_k$ = function () {
    return Companion_getInstance_12().getTimeOffset_dv9nut_k$(this.get_elevationAdjustedSunset_q5ajjs_k$(), numberToLong(96).times_2zfqpc_k$(Companion_getInstance_12().get_MINUTE_MILLIS_eebl48_k$()));
  };
  protoOf(ComplexZmanimCalendar).get_fixedLocalChatzos_xhtegq_k$ = function () {
    var tmp = Companion_getInstance_12();
    var tmp$ret$0;
    // Inline function 'kotlin.Long.div' call
    var tmp0_div = Companion_getInstance_20().get_rawOffset_ayohhm_k$(this.get_geoLocation_g2drjx_k$().get_timeZone_4vh49u_k$());
    var tmp1_div = Companion_getInstance_12().get_HOUR_MILLIS_8knouw_k$().toDouble_ygsx0s_k$();
    tmp$ret$0 = tmp0_div.toDouble_ygsx0s_k$() / tmp1_div;
    return tmp.getTimeOffset_dv9nut_k$(this.getDateFromTime_ywfmqo_k$(12.0 - tmp$ret$0, true), this.get_geoLocation_g2drjx_k$().get_localMeanTimeOffset_kr1cxl_k$().unaryMinus_6uz0qp_k$());
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanShmaFixedLocal_s1mgf5_k$ = function () {
    return Companion_getInstance_12().getTimeOffset_dv9nut_k$(this.get_fixedLocalChatzos_xhtegq_k$(), numberToLong(-180).times_2zfqpc_k$(Companion_getInstance_12().get_MINUTE_MILLIS_eebl48_k$()));
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanTfilaFixedLocal_89r0ea_k$ = function () {
    return Companion_getInstance_12().getTimeOffset_dv9nut_k$(this.get_fixedLocalChatzos_xhtegq_k$(), numberToLong(-120).times_2zfqpc_k$(Companion_getInstance_12().get_MINUTE_MILLIS_eebl48_k$()));
  };
  protoOf(ComplexZmanimCalendar).getSofZmanKidushLevanaBetweenMoldos_aabmab_k$ = function (alos, tzais) {
    var jewishCalendar = JewishCalendar_init_$Create$();
    jewishCalendar.setGregorianDate_ubgvip_k$(this.get_localDate_bfbdgw_k$().get_year_woy26e_k$(), this.get_localDate_bfbdgw_k$().get_monthNumber_nb47ls_k$(), this.get_localDate_bfbdgw_k$().get_dayOfMonth_vblo3a_k$());
    if (jewishCalendar.get_jewishDayOfMonth_adlgfs_k$() < 11 ? true : jewishCalendar.get_jewishDayOfMonth_adlgfs_k$() > 16) {
      return null;
    }
    return getMoladBasedTime(this, jewishCalendar.get_sofZmanKidushLevanaBetweenMoldos_7t2x4m_k$(), alos, tzais, false);
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanKidushLevanaBetweenMoldos_7t2x4m_k$ = function () {
    return this.getSofZmanKidushLevanaBetweenMoldos_aabmab_k$(null, null);
  };
  protoOf(ComplexZmanimCalendar).getSofZmanKidushLevana15Days_f2wgjk_k$ = function (alos, tzais) {
    var jewishCalendar = JewishCalendar_init_$Create$();
    jewishCalendar.setGregorianDate_ubgvip_k$(this.get_localDate_bfbdgw_k$().get_year_woy26e_k$(), this.get_localDate_bfbdgw_k$().get_monthNumber_nb47ls_k$(), this.get_localDate_bfbdgw_k$().get_dayOfMonth_vblo3a_k$());
    if (jewishCalendar.get_jewishDayOfMonth_adlgfs_k$() < 11 ? true : jewishCalendar.get_jewishDayOfMonth_adlgfs_k$() > 17) {
      return null;
    }
    return getMoladBasedTime(this, jewishCalendar.get_sofZmanKidushLevana15Days_nscjmf_k$(), alos, tzais, false);
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanKidushLevana15Days_nscjmf_k$ = function () {
    return this.getSofZmanKidushLevana15Days_f2wgjk_k$(null, null);
  };
  protoOf(ComplexZmanimCalendar).get_tchilasZmanKidushLevana3Days_o9bn1y_k$ = function () {
    return this.getTchilasZmanKidushLevana3Days_na82b_k$(null, null);
  };
  protoOf(ComplexZmanimCalendar).getTchilasZmanKidushLevana3Days_na82b_k$ = function (alos, tzais) {
    var jewishCalendar = JewishCalendar_init_$Create$();
    jewishCalendar.setGregorianDate_ubgvip_k$(this.get_localDate_bfbdgw_k$().get_year_woy26e_k$(), this.get_localDate_bfbdgw_k$().get_monthNumber_nb47ls_k$(), this.get_localDate_bfbdgw_k$().get_dayOfMonth_vblo3a_k$());
    if (jewishCalendar.get_jewishDayOfMonth_adlgfs_k$() > 5 ? jewishCalendar.get_jewishDayOfMonth_adlgfs_k$() < 30 : false) {
      return null;
    }
    var zman = getMoladBasedTime(this, jewishCalendar.get_tchilasZmanKidushLevana3Days_o9bn1y_k$(), alos, tzais, true);
    if (zman == null ? jewishCalendar.get_jewishDayOfMonth_adlgfs_k$() === 30 : false) {
      jewishCalendar.forward_tpa8te_k$(Companion_getInstance_5().get_MONTH_id5p9z_k$(), 1);
      zman = getMoladBasedTime(this, jewishCalendar.get_tchilasZmanKidushLevana3Days_o9bn1y_k$(), null, null, true);
    }
    return zman;
  };
  protoOf(ComplexZmanimCalendar).get_zmanMolad_dztoe4_k$ = function () {
    var jewishCalendar = JewishCalendar_init_$Create$();
    jewishCalendar.setGregorianDate_ubgvip_k$(this.get_localDate_bfbdgw_k$().get_year_woy26e_k$(), this.get_localDate_bfbdgw_k$().get_monthNumber_nb47ls_k$(), this.get_localDate_bfbdgw_k$().get_dayOfMonth_vblo3a_k$());
    if (jewishCalendar.get_jewishDayOfMonth_adlgfs_k$() > 2 ? jewishCalendar.get_jewishDayOfMonth_adlgfs_k$() < 27 : false) {
      return null;
    }
    var molad = getMoladBasedTime(this, jewishCalendar.get_moladAsInstant_l53bqj_k$(), null, null, true);
    if (molad == null ? jewishCalendar.get_jewishDayOfMonth_adlgfs_k$() > 26 : false) {
      jewishCalendar.forward_tpa8te_k$(Companion_getInstance_5().get_MONTH_id5p9z_k$(), 1);
      molad = getMoladBasedTime(this, jewishCalendar.get_moladAsInstant_l53bqj_k$(), null, null, true);
    }
    return molad;
  };
  protoOf(ComplexZmanimCalendar).getTchilasZmanKidushLevana7Days_tyym33_k$ = function (alos, tzais) {
    var jewishCalendar = JewishCalendar_init_$Create$();
    jewishCalendar.setGregorianDate_ubgvip_k$(this.get_localDate_bfbdgw_k$().get_year_woy26e_k$(), this.get_localDate_bfbdgw_k$().get_monthNumber_nb47ls_k$(), this.get_localDate_bfbdgw_k$().get_dayOfMonth_vblo3a_k$());
    if (jewishCalendar.get_jewishDayOfMonth_adlgfs_k$() < 4 ? true : jewishCalendar.get_jewishDayOfMonth_adlgfs_k$() > 9) {
      return null;
    }
    return getMoladBasedTime(this, jewishCalendar.get_tchilasZmanKidushLevana7Days_o74goi_k$(), alos, tzais, true);
  };
  protoOf(ComplexZmanimCalendar).get_tchilasZmanKidushLevana7Days_o74goi_k$ = function () {
    return this.getTchilasZmanKidushLevana7Days_tyym33_k$(null, null);
  };
  protoOf(ComplexZmanimCalendar).get_getSofZmanAchilasChametzGRA_snxgd6_k$ = function () {
    return this.get_sofZmanTfilaGRA_aksj4b_k$();
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanAchilasChametzMGA72Minutes_d74crn_k$ = function () {
    return this.get_sofZmanTfilaMGA72Minutes_6c6w3s_k$();
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanAchilasChametzMGA16Point1Degrees_695yre_k$ = function () {
    return this.get_sofZmanTfilaMGA16Point1Degrees_jt5okl_k$();
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanBiurChametzGRA_osln0h_k$ = function () {
    var tmp = Companion_getInstance_12();
    var tmp_0 = this.get_elevationAdjustedSunrise_t7toc3_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.Long.times' call
    var tmp0_times = this.get_shaahZmanisGra_vf44pq_k$();
    tmp$ret$0 = tmp0_times.times_2zfqpc_k$(new Long(5, 0));
    return tmp.getTimeOffset_dv9nut_k$(tmp_0, tmp$ret$0);
  };
  protoOf(ComplexZmanimCalendar).get_getSofZmanBiurChametzMGA72Minutes_o4rffu_k$ = function () {
    var tmp = Companion_getInstance_12();
    var tmp_0 = this.get_alos72_b0gi2b_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.Long.times' call
    var tmp0_times = this.get_shaahZmanisMGA_vf41bh_k$();
    tmp$ret$0 = tmp0_times.times_2zfqpc_k$(new Long(5, 0));
    return tmp.getTimeOffset_dv9nut_k$(tmp_0, tmp$ret$0);
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanBiurChametzMGA16Point1Degrees_uz3gmn_k$ = function () {
    var tmp = Companion_getInstance_12();
    var tmp_0 = this.get_alos16Point1Degrees_mgrp1l_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.Long.times' call
    var tmp0_times = this.get_shaahZmanis16Point1Degrees_bsasgd_k$();
    tmp$ret$0 = tmp0_times.times_2zfqpc_k$(new Long(5, 0));
    return tmp.getTimeOffset_dv9nut_k$(tmp_0, tmp$ret$0);
  };
  protoOf(ComplexZmanimCalendar).get_solarMidnight_zbyl54_k$ = function () {
    var clonedCal = new ZmanimCalendar(this.get_geoLocation_g2drjx_k$());
    var tz = this.get_geoLocation_g2drjx_k$().get_timeZone_4vh49u_k$();
    clonedCal.set_localDate_o7yuyk_k$(toLocalDateTime(plus(toInstant(clonedCal.get_localDate_bfbdgw_k$(), tz), DatePeriod_init_$Create$(VOID, VOID, 1), tz), tz));
    var tmp0_elvis_lhs = clonedCal.get_chatzos_dhmavx_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var chatzos = tmp;
    return Companion_getInstance_12().getTimeOffset_dv9nut_k$(chatzos, _Duration___get_inWholeMilliseconds__impl__msfiry(Duration__div_impl_dknbf4(chatzos.minus_q82skq_k$(chatzos), 2)));
  };
  protoOf(ComplexZmanimCalendar).get_shaahZmanisBaalHatanya_d90lu_k$ = function () {
    return this.getTemporalHour_6o7hf2_k$(_get_sunriseBaalHatanya__iq0bnq(this), _get_sunsetBaalHatanya__dpxx6n(this));
  };
  protoOf(ComplexZmanimCalendar).get_alosBaalHatanya_j61h72_k$ = function () {
    Companion_getInstance_13();
    return this.getSunriseOffsetByDegrees_7zo4v1_k$(106.9);
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanShmaBaalHatanya_axw8os_k$ = function () {
    return this.getSofZmanShma_yr290t_k$(_get_sunriseBaalHatanya__iq0bnq(this), _get_sunsetBaalHatanya__dpxx6n(this));
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanTfilaBaalHatanya_xta491_k$ = function () {
    return this.getSofZmanTfila_eew59q_k$(_get_sunriseBaalHatanya__iq0bnq(this), _get_sunsetBaalHatanya__dpxx6n(this));
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanAchilasChametzBaalHatanya_4nmpru_k$ = function () {
    return this.get_sofZmanTfilaBaalHatanya_xta491_k$();
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanBiurChametzBaalHatanya_eecpov_k$ = function () {
    var tmp = Companion_getInstance_12();
    var tmp_0 = _get_sunriseBaalHatanya__iq0bnq(this);
    var tmp$ret$0;
    // Inline function 'kotlin.Long.times' call
    var tmp0_times = this.get_shaahZmanisBaalHatanya_d90lu_k$();
    tmp$ret$0 = tmp0_times.times_2zfqpc_k$(new Long(5, 0));
    return tmp.getTimeOffset_dv9nut_k$(tmp_0, tmp$ret$0);
  };
  protoOf(ComplexZmanimCalendar).get_minchaGedolaBaalHatanya_uvgmyd_k$ = function () {
    return this.getMinchaGedola_t8y6oc_k$(_get_sunriseBaalHatanya__iq0bnq(this), _get_sunsetBaalHatanya__dpxx6n(this));
  };
  protoOf(ComplexZmanimCalendar).get_minchaGedolaBaalHatanyaGreaterThan30_8qt0rn_k$ = function () {
    var tmp0_safe_receiver = this.get_minchaGedola30Minutes_kjd0dr_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'com.kosherjava.zmanim.ComplexZmanimCalendar.<get-minchaGedolaBaalHatanyaGreaterThan30>.<anonymous>' call
      var tmp0_safe_receiver_0 = this.get_minchaGedolaBaalHatanya_uvgmyd_k$();
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'com.kosherjava.zmanim.ComplexZmanimCalendar.<get-minchaGedolaBaalHatanyaGreaterThan30>.<anonymous>.<anonymous>' call
        tmp$ret$0 = maxOf(tmp0_safe_receiver, tmp0_safe_receiver_0);
        tmp$ret$1 = tmp$ret$0;
        tmp_0 = tmp$ret$1;
      }
      tmp$ret$2 = tmp_0;
      tmp$ret$3 = tmp$ret$2;
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  protoOf(ComplexZmanimCalendar).get_minchaKetanaBaalHatanya_cm5baf_k$ = function () {
    return this.getMinchaKetana_dik9ps_k$(_get_sunriseBaalHatanya__iq0bnq(this), _get_sunsetBaalHatanya__dpxx6n(this));
  };
  protoOf(ComplexZmanimCalendar).get_plagHaminchaBaalHatanya_ayi8q0_k$ = function () {
    return this.getPlagHamincha_govymn_k$(_get_sunriseBaalHatanya__iq0bnq(this), _get_sunsetBaalHatanya__dpxx6n(this));
  };
  protoOf(ComplexZmanimCalendar).get_tzaisBaalHatanya_i8jvqu_k$ = function () {
    Companion_getInstance_13();
    return this.getSunsetOffsetByDegrees_6r9vdc_k$(96.0);
  };
  protoOf(ComplexZmanimCalendar).getFixedLocalChatzosBasedZmanim_bm7bhp_k$ = function (startOfHalfDay, endOfHalfDay, hours) {
    println('getFixedLocalChatzosBasedZmanim(startOfHalfDay = ' + startOfHalfDay + ', endOfHalfDay = ' + endOfHalfDay + ', hours = ' + hours);
    if (startOfHalfDay == null ? true : endOfHalfDay == null) {
      return null;
    }
    var startInEpochMilli = startOfHalfDay.toEpochMilliseconds_82cfls_k$();
    var endMinusStart = endOfHalfDay.toEpochMilliseconds_82cfls_k$().minus_llf5ei_k$(startInEpochMilli);
    println('End minus start: ' + toString(endMinusStart));
    var tmp$ret$0;
    // Inline function 'kotlin.Long.div' call
    tmp$ret$0 = endMinusStart.div_9s1fi3_k$(new Long(6, 0));
    var shaahZmanis = tmp$ret$0;
    println('Shaa zmanis: ' + toString(shaahZmanis));
    var tmp = Companion_getInstance_10();
    var tmp$ret$1;
    // Inline function 'kotlin.Long.times' call
    tmp$ret$1 = shaahZmanis.toDouble_ygsx0s_k$() * hours;
    return tmp.fromEpochMilliseconds_tgp1r9_k$(startInEpochMilli.plus_u6jwas_k$(roundToLong(tmp$ret$1)));
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanShmaMGA18DegreesToFixedLocalChatzos_go2es1_k$ = function () {
    return this.getFixedLocalChatzosBasedZmanim_bm7bhp_k$(this.get_alos18Degrees_hq8uxk_k$(), this.get_fixedLocalChatzos_xhtegq_k$(), 3.0);
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanShmaMGA16Point1DegreesToFixedLocalChatzos_4chfps_k$ = function () {
    return this.getFixedLocalChatzosBasedZmanim_bm7bhp_k$(this.get_alos16Point1Degrees_mgrp1l_k$(), this.get_fixedLocalChatzos_xhtegq_k$(), 3.0);
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanShmaMGA90MinutesToFixedLocalChatzos_ibz59z_k$ = function () {
    return this.getFixedLocalChatzosBasedZmanim_bm7bhp_k$(this.get_alos90_b0gi3z_k$(), this.get_fixedLocalChatzos_xhtegq_k$(), 3.0);
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanShmaMGA72MinutesToFixedLocalChatzos_lwe2x9_k$ = function () {
    return this.getFixedLocalChatzosBasedZmanim_bm7bhp_k$(this.get_alos72_b0gi2b_k$(), this.get_fixedLocalChatzos_xhtegq_k$(), 3.0);
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanShmaGRASunriseToFixedLocalChatzos_n4bed1_k$ = function () {
    return this.getFixedLocalChatzosBasedZmanim_bm7bhp_k$(this.get_sunrise_tfsl3o_k$(), this.get_fixedLocalChatzos_xhtegq_k$(), 3.0);
  };
  protoOf(ComplexZmanimCalendar).get_sofZmanTfilaGRASunriseToFixedLocalChatzos_7eytm_k$ = function () {
    return this.getFixedLocalChatzosBasedZmanim_bm7bhp_k$(this.get_sunrise_tfsl3o_k$(), this.get_fixedLocalChatzos_xhtegq_k$(), 4.0);
  };
  protoOf(ComplexZmanimCalendar).get_minchaGedolaGRAFixedLocalChatzos30Minutes_bj5654_k$ = function () {
    var tmp = Companion_getInstance_12();
    var tmp_0 = this.get_fixedLocalChatzos_xhtegq_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.Long.times' call
    var tmp0_times = Companion_getInstance_12().get_MINUTE_MILLIS_eebl48_k$();
    tmp$ret$0 = tmp0_times.times_2zfqpc_k$(new Long(30, 0));
    return tmp.getTimeOffset_dv9nut_k$(tmp_0, tmp$ret$0);
  };
  protoOf(ComplexZmanimCalendar).get_minchaKetanaGRAFixedLocalChatzosToSunset_z5wc7r_k$ = function () {
    return this.getFixedLocalChatzosBasedZmanim_bm7bhp_k$(this.get_fixedLocalChatzos_xhtegq_k$(), this.get_sunset_jo78nz_k$(), 3.5);
  };
  protoOf(ComplexZmanimCalendar).get_plagHaminchaGRAFixedLocalChatzosToSunset_i2rhfs_k$ = function () {
    return this.getFixedLocalChatzosBasedZmanim_bm7bhp_k$(this.get_fixedLocalChatzos_xhtegq_k$(), this.get_sunset_jo78nz_k$(), 4.75);
  };
  protoOf(ComplexZmanimCalendar).get_tzais50_clh3m1_k$ = function () {
    return Companion_getInstance_12().getTimeOffset_dv9nut_k$(this.get_elevationAdjustedSunset_q5ajjs_k$(), numberToLong(50).times_2zfqpc_k$(Companion_getInstance_12().get_MINUTE_MILLIS_eebl48_k$()));
  };
  protoOf(ComplexZmanimCalendar).get_samuchLeMinchaKetanaGRA_ltr0k5_k$ = function () {
    return this.getSamuchLeMinchaKetana_y838ys_k$(this.get_elevationAdjustedSunrise_t7toc3_k$(), this.get_elevationAdjustedSunset_q5ajjs_k$());
  };
  protoOf(ComplexZmanimCalendar).get_samuchLeMinchaKetana16Point1Degrees_3x9ojk_k$ = function () {
    return this.getSamuchLeMinchaKetana_y838ys_k$(this.get_alos16Point1Degrees_mgrp1l_k$(), this.get_tzais16Point1Degrees_jdlr23_k$());
  };
  protoOf(ComplexZmanimCalendar).get_samuchLeMinchaKetana72Minutes_6k8i59_k$ = function () {
    return this.getSamuchLeMinchaKetana_y838ys_k$(this.get_alos72_b0gi2b_k$(), this.get_tzais72_clh3k9_k$());
  };
  function Companion_1() {
    Companion_instance_1 = this;
    this.ZENITH_16_POINT_1__1 = 106.1;
    this.ZENITH_8_POINT_5__1 = 98.5;
  }
  protoOf(Companion_1).get_ZENITH_16_POINT_1_9914d8_k$ = function () {
    return this.ZENITH_16_POINT_1__1;
  };
  protoOf(Companion_1).get_ZENITH_8_POINT_5_dtyjnh_k$ = function () {
    return this.ZENITH_8_POINT_5__1;
  };
  var Companion_instance_1;
  function Companion_getInstance_14() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function get_$stableprop_6() {
    return 8;
  }
  function ZmanimCalendar(geoLocation) {
    Companion_getInstance_14();
    geoLocation = geoLocation === VOID ? GeoLocation_init_$Create$_1() : geoLocation;
    AstronomicalCalendar.call(this, geoLocation);
    this.isUseElevation_1 = false;
    this.candleLightingOffset_1 = 18.0;
    this.$stable_2 = 8;
  }
  protoOf(ZmanimCalendar).set_isUseElevation_ktaj9w_k$ = function (_set____db54di) {
    this.isUseElevation_1 = _set____db54di;
  };
  protoOf(ZmanimCalendar).get_isUseElevation_wra5g7_k$ = function () {
    return this.isUseElevation_1;
  };
  protoOf(ZmanimCalendar).set_candleLightingOffset_fkild5_k$ = function (_set____db54di) {
    this.candleLightingOffset_1 = _set____db54di;
  };
  protoOf(ZmanimCalendar).get_candleLightingOffset_cfz53f_k$ = function () {
    return this.candleLightingOffset_1;
  };
  protoOf(ZmanimCalendar).get_elevationAdjustedSunrise_t7toc3_k$ = function () {
    return this.isUseElevation_1 ? protoOf(AstronomicalCalendar).get_sunrise_tfsl3o_k$.call(this) : this.get_seaLevelSunrise_ma2vhz_k$();
  };
  protoOf(ZmanimCalendar).get_elevationAdjustedSunset_q5ajjs_k$ = function () {
    if (this.isUseElevation_1) {
      return protoOf(AstronomicalCalendar).get_sunset_jo78nz_k$.call(this);
    }
    return this.get_seaLevelSunset_hm0xos_k$();
  };
  protoOf(ZmanimCalendar).get_tzais_izdjh8_k$ = function () {
    Companion_getInstance_14();
    return this.getSunsetOffsetByDegrees_6r9vdc_k$(98.5);
  };
  protoOf(ZmanimCalendar).get_alosHashachar_v6748h_k$ = function () {
    Companion_getInstance_14();
    return this.getSunriseOffsetByDegrees_7zo4v1_k$(106.1);
  };
  protoOf(ZmanimCalendar).get_alos72_b0gi2b_k$ = function () {
    return Companion_getInstance_12().getTimeOffset_dv9nut_k$(this.get_elevationAdjustedSunrise_t7toc3_k$(), numberToLong(-72).times_2zfqpc_k$(Companion_getInstance_12().get_MINUTE_MILLIS_eebl48_k$()));
  };
  protoOf(ZmanimCalendar).get_chatzos_dhmavx_k$ = function () {
    return this.get_sunTransit_kmlcg_k$();
  };
  protoOf(ZmanimCalendar).getSofZmanShma_yr290t_k$ = function (startOfDay, endOfDay) {
    return this.getShaahZmanisBasedZman_2rz19b_k$(startOfDay, endOfDay, 3.0);
  };
  protoOf(ZmanimCalendar).get_sofZmanShmaGRA_whpsr0_k$ = function () {
    return this.getSofZmanShma_yr290t_k$(this.get_elevationAdjustedSunrise_t7toc3_k$(), this.get_elevationAdjustedSunset_q5ajjs_k$());
  };
  protoOf(ZmanimCalendar).get_sofZmanShmaMGA_whpwxp_k$ = function () {
    return this.getSofZmanShma_yr290t_k$(this.get_alos72_b0gi2b_k$(), this.get_tzais72_clh3k9_k$());
  };
  protoOf(ZmanimCalendar).get_tzais72_clh3k9_k$ = function () {
    return Companion_getInstance_12().getTimeOffset_dv9nut_k$(this.get_elevationAdjustedSunset_q5ajjs_k$(), numberToLong(72).times_2zfqpc_k$(Companion_getInstance_12().get_MINUTE_MILLIS_eebl48_k$()));
  };
  protoOf(ZmanimCalendar).get_candleLighting_wjg94y_k$ = function () {
    return Companion_getInstance_12().getTimeOffset_mbzyq8_k$(this.get_seaLevelSunset_hm0xos_k$(), -this.candleLightingOffset_1 * Companion_getInstance_12().get_MINUTE_MILLIS_eebl48_k$().toDouble_ygsx0s_k$());
  };
  protoOf(ZmanimCalendar).getSofZmanTfila_eew59q_k$ = function (startOfDay, endOfDay) {
    return this.getShaahZmanisBasedZman_2rz19b_k$(startOfDay, endOfDay, 4.0);
  };
  protoOf(ZmanimCalendar).get_sofZmanTfilaGRA_aksj4b_k$ = function () {
    return this.getSofZmanTfila_eew59q_k$(this.get_elevationAdjustedSunrise_t7toc3_k$(), this.get_elevationAdjustedSunset_q5ajjs_k$());
  };
  protoOf(ZmanimCalendar).get_sofZmanTfilaMGA_aksnb0_k$ = function () {
    return this.getSofZmanTfila_eew59q_k$(this.get_alos72_b0gi2b_k$(), this.get_tzais72_clh3k9_k$());
  };
  protoOf(ZmanimCalendar).getMinchaGedola_t8y6oc_k$ = function (startOfDay, endOfDay) {
    return this.getShaahZmanisBasedZman_2rz19b_k$(startOfDay, endOfDay, 6.5);
  };
  protoOf(ZmanimCalendar).get_minchaGedola_wb6zo1_k$ = function () {
    return this.getMinchaGedola_t8y6oc_k$(this.get_elevationAdjustedSunrise_t7toc3_k$(), this.get_elevationAdjustedSunset_q5ajjs_k$());
  };
  protoOf(ZmanimCalendar).getSamuchLeMinchaKetana_y838ys_k$ = function (startOfDay, endOfDay) {
    return this.getShaahZmanisBasedZman_2rz19b_k$(startOfDay, endOfDay, 9.0);
  };
  protoOf(ZmanimCalendar).getMinchaKetana_dik9ps_k$ = function (startOfDay, endOfDay) {
    return this.getShaahZmanisBasedZman_2rz19b_k$(startOfDay, endOfDay, 9.5);
  };
  protoOf(ZmanimCalendar).get_minchaKetana_y7nep9_k$ = function () {
    return this.getMinchaKetana_dik9ps_k$(this.get_elevationAdjustedSunrise_t7toc3_k$(), this.get_elevationAdjustedSunset_q5ajjs_k$());
  };
  protoOf(ZmanimCalendar).getPlagHamincha_govymn_k$ = function (startOfDay, endOfDay) {
    return this.getShaahZmanisBasedZman_2rz19b_k$(startOfDay, endOfDay, 10.75);
  };
  protoOf(ZmanimCalendar).get_plagHamincha_xfifny_k$ = function () {
    return this.getPlagHamincha_govymn_k$(this.get_elevationAdjustedSunrise_t7toc3_k$(), this.get_elevationAdjustedSunset_q5ajjs_k$());
  };
  protoOf(ZmanimCalendar).get_shaahZmanisGra_vf44pq_k$ = function () {
    return this.getTemporalHour_6o7hf2_k$(this.get_elevationAdjustedSunrise_t7toc3_k$(), this.get_elevationAdjustedSunset_q5ajjs_k$());
  };
  protoOf(ZmanimCalendar).get_shaahZmanisMGA_vf41bh_k$ = function () {
    return this.getTemporalHour_6o7hf2_k$(this.get_alos72_b0gi2b_k$(), this.get_tzais72_clh3k9_k$());
  };
  protoOf(ZmanimCalendar).isAssurBemlacha_42xaes_k$ = function (currentTime, tzais, inIsrael) {
    var jewishCalendar = JewishCalendar_init_$Create$();
    jewishCalendar.setGregorianDate_ubgvip_k$(this.get_localDate_bfbdgw_k$().get_year_woy26e_k$(), this.get_localDate_bfbdgw_k$().get_monthNumber_nb47ls_k$(), this.get_localDate_bfbdgw_k$().get_dayOfMonth_vblo3a_k$());
    jewishCalendar.set_inIsrael_kgc9y1_k$(inIsrael);
    return (jewishCalendar.hasCandleLighting_pkm0z7_k$() ? currentTime.compareTo_qie524_k$(ensureNotNull(this.get_elevationAdjustedSunset_q5ajjs_k$())) >= 0 : false) ? true : jewishCalendar.get_isAssurBemelacha_v39c81_k$() ? currentTime.compareTo_qie524_k$(ensureNotNull(tzais)) <= 0 : false;
  };
  protoOf(ZmanimCalendar).getShaahZmanisBasedZman_2rz19b_k$ = function (startOfDay, endOfDay, hours) {
    var tmp = Companion_getInstance_12();
    var tmp$ret$0;
    // Inline function 'kotlin.Long.times' call
    var tmp0_times = this.getTemporalHour_6o7hf2_k$(startOfDay, endOfDay);
    tmp$ret$0 = tmp0_times.toDouble_ygsx0s_k$() * hours;
    return tmp.getTimeOffset_mbzyq8_k$(startOfDay, tmp$ret$0);
  };
  function Companion_2() {
    Companion_instance_2 = this;
    this.BRACHOS_1 = 'Berachos';
    this.SHABBOS_1 = 'Shabbos';
    this.ERUVIN_1 = 'Eruvin';
    this.PESACHIM_1 = 'Pesachim';
    this.SHEKALIM_1 = 'Shekalim';
    this.YOMA_1 = 'Yoma';
    this.SUKKAH_1 = 'Sukkah';
    this.BEITZAH_1 = 'Beitzah';
    this.ROSH_HASHANA_1 = 'Rosh Hashana';
    this.TAANIS_1 = "Ta'anis";
    this.MEGILLAH_1 = 'Megillah';
    this.MOED_KATAN_1 = 'Moed Katan';
    this.CHAGIGAH_1 = 'Chagigah';
    this.KESUBOS_1 = 'Kesubos';
    this.KIDDUSHIN_1 = 'Kiddushin';
    this.BAVA_KAMMA_1 = 'Bava Kamma';
    this.MAKKOS_1 = 'Makkos';
    this.HORIYOS_1 = 'Horiyos';
    this.ZEVACHIM_1 = 'Zevachim';
    this.MENACHOS_1 = 'Menachos';
    this.CHULLIN_1 = 'Chullin';
    this.BECHOROS_1 = 'Bechoros';
    this.ARACHIN_1 = 'Arachin';
    this.TEMURAH_1 = 'Temurah';
    this.KERISOS_1 = 'Kerisos';
    this.MEILAH_1 = 'Meilah';
    this.KINNIM_1 = 'Kinnim';
    this.TAMID_1 = 'Tamid';
    this.MIDOS_1 = 'Midos';
    this.NIDDAH_1 = 'Niddah';
    this.YEVAMOS_1 = 'Yevamos';
    this.NEDARIM_1 = 'Nedarim';
    this.NAZIR_1 = 'Nazir';
    this.SOTAH_1 = 'Sotah';
    this.GITIN_1 = 'Gitin';
    this.BAVA_METZIA_1 = 'Bava Metzia';
    this.BAVA_BASRA_1 = 'Bava Basra';
    this.SANHEDRIN_1 = 'Sanhedrin';
    this.SHAVUOS_1 = 'Shevuos';
    this.AVODAH_ZARA_1 = 'Avodah Zarah';
    this.PEAH_1 = "Pe'ah";
    this.DEMAI_1 = 'Demai';
    this.KILAYIM_1 = 'Kilayim';
    this.SHEVIIS_1 = "Shevi'is";
    this.TERUMOS_1 = 'Terumos';
    this.MAASROS_1 = "Ma'asros";
    this.MAASER_SHENI_1 = "Ma'aser Sheni";
    this.CHALAH_1 = 'Chalah';
    this.ORLAH_1 = 'Orlah';
    this.BIKURIM_1 = 'Bikurim';
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [this.BRACHOS_1, this.SHABBOS_1, this.ERUVIN_1, this.PESACHIM_1, this.SHEKALIM_1, this.YOMA_1, this.SUKKAH_1, this.BEITZAH_1, this.ROSH_HASHANA_1, this.TAANIS_1, this.MEGILLAH_1, this.MOED_KATAN_1, this.CHAGIGAH_1, this.YEVAMOS_1, this.KESUBOS_1, this.NEDARIM_1, this.NAZIR_1, this.SOTAH_1, this.GITIN_1, this.KIDDUSHIN_1, this.BAVA_KAMMA_1, this.BAVA_METZIA_1, this.BAVA_BASRA_1, this.SANHEDRIN_1, this.MAKKOS_1, this.SHAVUOS_1, this.AVODAH_ZARA_1, this.HORIYOS_1, this.ZEVACHIM_1, this.MENACHOS_1, this.CHULLIN_1, this.BECHOROS_1, this.ARACHIN_1, this.TEMURAH_1, this.KERISOS_1, this.MEILAH_1, this.KINNIM_1, this.TAMID_1, this.MIDOS_1, this.NIDDAH_1];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp.masechtosBavliTransliterated_1 = tmp$ret$2;
    var tmp_0 = this;
    var tmp$ret$5;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = ['\u05D1\u05E8\u05DB\u05D5\u05EA', '\u05E9\u05D1\u05EA', '\u05E2\u05D9\u05E8\u05D5\u05D1\u05D9\u05DF', '\u05E4\u05E1\u05D7\u05D9\u05DD', '\u05E9\u05E7\u05DC\u05D9\u05DD', '\u05D9\u05D5\u05DE\u05D0', '\u05E1\u05D5\u05DB\u05D4', '\u05D1\u05D9\u05E6\u05D4', '\u05E8\u05D0\u05E9 \u05D4\u05E9\u05E0\u05D4', '\u05EA\u05E2\u05E0\u05D9\u05EA', '\u05DE\u05D2\u05D9\u05DC\u05D4', '\u05DE\u05D5\u05E2\u05D3 \u05E7\u05D8\u05DF', '\u05D7\u05D2\u05D9\u05D2\u05D4', '\u05D9\u05D1\u05DE\u05D5\u05EA', '\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA', '\u05E0\u05D3\u05E8\u05D9\u05DD', '\u05E0\u05D6\u05D9\u05E8', '\u05E1\u05D5\u05D8\u05D4', '\u05D2\u05D9\u05D8\u05D9\u05DF', '\u05E7\u05D9\u05D3\u05D5\u05E9\u05D9\u05DF', '\u05D1\u05D1\u05D0 \u05E7\u05DE\u05D0', '\u05D1\u05D1\u05D0 \u05DE\u05E6\u05D9\u05E2\u05D0', '\u05D1\u05D1\u05D0 \u05D1\u05EA\u05E8\u05D0', '\u05E1\u05E0\u05D4\u05D3\u05E8\u05D9\u05DF', '\u05DE\u05DB\u05D5\u05EA', '\u05E9\u05D1\u05D5\u05E2\u05D5\u05EA', '\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D6\u05E8\u05D4', '\u05D4\u05D5\u05E8\u05D9\u05D5\u05EA', '\u05D6\u05D1\u05D7\u05D9\u05DD', '\u05DE\u05E0\u05D7\u05D5\u05EA', '\u05D7\u05D5\u05DC\u05D9\u05DF', '\u05D1\u05DB\u05D5\u05E8\u05D5\u05EA', '\u05E2\u05E8\u05DB\u05D9\u05DF', '\u05EA\u05DE\u05D5\u05E8\u05D4', '\u05DB\u05E8\u05D9\u05EA\u05D5\u05EA', '\u05DE\u05E2\u05D9\u05DC\u05D4', '\u05E7\u05D9\u05E0\u05D9\u05DD', '\u05EA\u05DE\u05D9\u05D3', '\u05DE\u05D9\u05D3\u05D5\u05EA', '\u05E0\u05D3\u05D4'];
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    tmp_0.masechtosBavli_1 = tmp$ret$5;
    var tmp_1 = this;
    var tmp$ret$8;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf_0 = [this.BRACHOS_1, this.PEAH_1, this.DEMAI_1, this.KILAYIM_1, this.SHEVIIS_1, this.TERUMOS_1, this.MAASROS_1, this.MAASER_SHENI_1, this.CHALAH_1, this.ORLAH_1, this.BIKURIM_1, this.SHABBOS_1, this.ERUVIN_1, this.PESACHIM_1, this.BEITZAH_1, this.ROSH_HASHANA_1, this.YOMA_1, this.SUKKAH_1, this.TAANIS_1, this.SHEKALIM_1, this.MEGILLAH_1, this.CHAGIGAH_1, this.MOED_KATAN_1, this.YEVAMOS_1, this.KESUBOS_1, this.SOTAH_1, this.NEDARIM_1, this.NAZIR_1, this.GITIN_1, this.KIDDUSHIN_1, this.BAVA_KAMMA_1, this.BAVA_METZIA_1, this.BAVA_BASRA_1, this.SHAVUOS_1, this.MAKKOS_1, this.SANHEDRIN_1, this.AVODAH_ZARA_1, this.HORIYOS_1, this.NIDDAH_1, 'No Daf Today'];
    var tmp$ret$7;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$6;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$6 = tmp0_arrayOf_0;
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7;
    tmp_1.yerushalmiMasechtosTransliterated_1 = tmp$ret$8;
    var tmp_2 = this;
    var tmp$ret$11;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$10;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$9;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$9 = ['\u05D1\u05E8\u05DB\u05D5\u05EA', '\u05E4\u05D9\u05D0\u05D4', '\u05D3\u05DE\u05D0\u05D9', '\u05DB\u05DC\u05D0\u05D9\u05DD', '\u05E9\u05D1\u05D9\u05E2\u05D9\u05EA', '\u05EA\u05E8\u05D5\u05DE\u05D5\u05EA', '\u05DE\u05E2\u05E9\u05E8\u05D5\u05EA', '\u05DE\u05E2\u05E9\u05E8 \u05E9\u05E0\u05D9', '\u05D7\u05DC\u05D4', '\u05E2\u05D5\u05E8\u05DC\u05D4', '\u05D1\u05D9\u05DB\u05D5\u05E8\u05D9\u05DD', '\u05E9\u05D1\u05EA', '\u05E2\u05D9\u05E8\u05D5\u05D1\u05D9\u05DF', '\u05E4\u05E1\u05D7\u05D9\u05DD', '\u05D1\u05D9\u05E6\u05D4', '\u05E8\u05D0\u05E9 \u05D4\u05E9\u05E0\u05D4', '\u05D9\u05D5\u05DE\u05D0', '\u05E1\u05D5\u05DB\u05D4', '\u05EA\u05E2\u05E0\u05D9\u05EA', '\u05E9\u05E7\u05DC\u05D9\u05DD', '\u05DE\u05D2\u05D9\u05DC\u05D4', '\u05D7\u05D2\u05D9\u05D2\u05D4', '\u05DE\u05D5\u05E2\u05D3 \u05E7\u05D8\u05DF', '\u05D9\u05D1\u05DE\u05D5\u05EA', '\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA', '\u05E1\u05D5\u05D8\u05D4', '\u05E0\u05D3\u05E8\u05D9\u05DD', '\u05E0\u05D6\u05D9\u05E8', '\u05D2\u05D9\u05D8\u05D9\u05DF', '\u05E7\u05D9\u05D3\u05D5\u05E9\u05D9\u05DF', '\u05D1\u05D1\u05D0 \u05E7\u05DE\u05D0', '\u05D1\u05D1\u05D0 \u05DE\u05E6\u05D9\u05E2\u05D0', '\u05D1\u05D1\u05D0 \u05D1\u05EA\u05E8\u05D0', '\u05E9\u05D1\u05D5\u05E2\u05D5\u05EA', '\u05DE\u05DB\u05D5\u05EA', '\u05E1\u05E0\u05D4\u05D3\u05E8\u05D9\u05DF', '\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D6\u05E8\u05D4', '\u05D4\u05D5\u05E8\u05D9\u05D5\u05EA', '\u05E0\u05D9\u05D3\u05D4', '\u05D0\u05D9\u05DF \u05D3\u05E3 \u05D4\u05D9\u05D5\u05DD'];
    tmp$ret$10 = tmp$ret$9;
    tmp$ret$11 = tmp$ret$10;
    tmp_2.yerushalmiMasechtos_1 = tmp$ret$11;
  }
  protoOf(Companion_2).set_BRACHOS_es6laj_k$ = function (_set____db54di) {
    this.BRACHOS_1 = _set____db54di;
  };
  protoOf(Companion_2).get_BRACHOS_fetvgx_k$ = function () {
    return this.BRACHOS_1;
  };
  protoOf(Companion_2).set_SHABBOS_fbn7y7_k$ = function (_set____db54di) {
    this.SHABBOS_1 = _set____db54di;
  };
  protoOf(Companion_2).get_SHABBOS_nxci0p_k$ = function () {
    return this.SHABBOS_1;
  };
  protoOf(Companion_2).set_ERUVIN_iiwjmq_k$ = function (_set____db54di) {
    this.ERUVIN_1 = _set____db54di;
  };
  protoOf(Companion_2).get_ERUVIN_2nkr44_k$ = function () {
    return this.ERUVIN_1;
  };
  protoOf(Companion_2).set_PESACHIM_hcud6x_k$ = function (_set____db54di) {
    this.PESACHIM_1 = _set____db54di;
  };
  protoOf(Companion_2).get_PESACHIM_bc78mj_k$ = function () {
    return this.PESACHIM_1;
  };
  protoOf(Companion_2).set_SHEKALIM_jkbos5_k$ = function (_set____db54di) {
    this.SHEKALIM_1 = _set____db54di;
  };
  protoOf(Companion_2).get_SHEKALIM_tdj1bh_k$ = function () {
    return this.SHEKALIM_1;
  };
  protoOf(Companion_2).set_YOMA_xj23u3_k$ = function (_set____db54di) {
    this.YOMA_1 = _set____db54di;
  };
  protoOf(Companion_2).get_YOMA_wod5rn_k$ = function () {
    return this.YOMA_1;
  };
  protoOf(Companion_2).set_SUKKAH_gzqhm4_k$ = function (_set____db54di) {
    this.SUKKAH_1 = _set____db54di;
  };
  protoOf(Companion_2).get_SUKKAH_40ipyq_k$ = function () {
    return this.SUKKAH_1;
  };
  protoOf(Companion_2).set_BEITZAH_5ok0is_k$ = function (_set____db54di) {
    this.BEITZAH_1 = _set____db54di;
  };
  protoOf(Companion_2).get_BEITZAH_9dycve_k$ = function () {
    return this.BEITZAH_1;
  };
  protoOf(Companion_2).set_ROSH_HASHANA_uczcrg_k$ = function (_set____db54di) {
    this.ROSH_HASHANA_1 = _set____db54di;
  };
  protoOf(Companion_2).get_ROSH_HASHANA_i9oite_k$ = function () {
    return this.ROSH_HASHANA_1;
  };
  protoOf(Companion_2).set_TAANIS_txgran_k$ = function (_set____db54di) {
    this.TAANIS_1 = _set____db54di;
  };
  protoOf(Companion_2).get_TAANIS_46e51p_k$ = function () {
    return this.TAANIS_1;
  };
  protoOf(Companion_2).set_MEGILLAH_c0b4xg_k$ = function (_set____db54di) {
    this.MEGILLAH_1 = _set____db54di;
  };
  protoOf(Companion_2).get_MEGILLAH_wbxw5y_k$ = function () {
    return this.MEGILLAH_1;
  };
  protoOf(Companion_2).set_MOED_KATAN_8ld460_k$ = function (_set____db54di) {
    this.MOED_KATAN_1 = _set____db54di;
  };
  protoOf(Companion_2).get_MOED_KATAN_p1wlca_k$ = function () {
    return this.MOED_KATAN_1;
  };
  protoOf(Companion_2).set_CHAGIGAH_vfqc91_k$ = function (_set____db54di) {
    this.CHAGIGAH_1 = _set____db54di;
  };
  protoOf(Companion_2).get_CHAGIGAH_4q13kp_k$ = function () {
    return this.CHAGIGAH_1;
  };
  protoOf(Companion_2).set_KESUBOS_u4x35x_k$ = function (_set____db54di) {
    this.KESUBOS_1 = _set____db54di;
  };
  protoOf(Companion_2).get_KESUBOS_f73lr_k$ = function () {
    return this.KESUBOS_1;
  };
  protoOf(Companion_2).set_KIDDUSHIN_85c1mq_k$ = function (_set____db54di) {
    this.KIDDUSHIN_1 = _set____db54di;
  };
  protoOf(Companion_2).get_KIDDUSHIN_l3gapk_k$ = function () {
    return this.KIDDUSHIN_1;
  };
  protoOf(Companion_2).set_BAVA_KAMMA_zfhmjl_k$ = function (_set____db54di) {
    this.BAVA_KAMMA_1 = _set____db54di;
  };
  protoOf(Companion_2).get_BAVA_KAMMA_mrpr5r_k$ = function () {
    return this.BAVA_KAMMA_1;
  };
  protoOf(Companion_2).set_MAKKOS_ootseb_k$ = function (_set____db54di) {
    this.MAKKOS_1 = _set____db54di;
  };
  protoOf(Companion_2).get_MAKKOS_v942p_k$ = function () {
    return this.MAKKOS_1;
  };
  protoOf(Companion_2).set_HORIYOS_5afmls_k$ = function (_set____db54di) {
    this.HORIYOS_1 = _set____db54di;
  };
  protoOf(Companion_2).get_HORIYOS_vafc9i_k$ = function () {
    return this.HORIYOS_1;
  };
  protoOf(Companion_2).set_ZEVACHIM_5pmyuu_k$ = function (_set____db54di) {
    this.ZEVACHIM_1 = _set____db54di;
  };
  protoOf(Companion_2).get_ZEVACHIM_5t9uqg_k$ = function () {
    return this.ZEVACHIM_1;
  };
  protoOf(Companion_2).set_MENACHOS_1w7mpr_k$ = function (_set____db54di) {
    this.MENACHOS_1 = _set____db54di;
  };
  protoOf(Companion_2).get_MENACHOS_t56pnn_k$ = function () {
    return this.MENACHOS_1;
  };
  protoOf(Companion_2).set_CHULLIN_kv8eyu_k$ = function (_set____db54di) {
    this.CHULLIN_1 = _set____db54di;
  };
  protoOf(Companion_2).get_CHULLIN_pnxnbg_k$ = function () {
    return this.CHULLIN_1;
  };
  protoOf(Companion_2).set_BECHOROS_vgryje_k$ = function (_set____db54di) {
    this.BECHOROS_1 = _set____db54di;
  };
  protoOf(Companion_2).get_BECHOROS_3v2xmg_k$ = function () {
    return this.BECHOROS_1;
  };
  protoOf(Companion_2).set_ARACHIN_xb6w1h_k$ = function (_set____db54di) {
    this.ARACHIN_1 = _set____db54di;
  };
  protoOf(Companion_2).get_ARACHIN_qfl3l_k$ = function () {
    return this.ARACHIN_1;
  };
  protoOf(Companion_2).set_TEMURAH_qneaxd_k$ = function (_set____db54di) {
    this.TEMURAH_1 = _set____db54di;
  };
  protoOf(Companion_2).get_TEMURAH_ah53l5_k$ = function () {
    return this.TEMURAH_1;
  };
  protoOf(Companion_2).set_KERISOS_nr9vmx_k$ = function (_set____db54di) {
    this.KERISOS_1 = _set____db54di;
  };
  protoOf(Companion_2).get_KERISOS_fy7fn_k$ = function () {
    return this.KERISOS_1;
  };
  protoOf(Companion_2).set_MEILAH_qtocab_k$ = function (_set____db54di) {
    this.MEILAH_1 = _set____db54di;
  };
  protoOf(Companion_2).get_MEILAH_xf0vf_k$ = function () {
    return this.MEILAH_1;
  };
  protoOf(Companion_2).set_KINNIM_bjalf1_k$ = function (_set____db54di) {
    this.KINNIM_1 = _set____db54di;
  };
  protoOf(Companion_2).get_KINNIM_1m72j_k$ = function () {
    return this.KINNIM_1;
  };
  protoOf(Companion_2).set_TAMID_74w7zg_k$ = function (_set____db54di) {
    this.TAMID_1 = _set____db54di;
  };
  protoOf(Companion_2).get_TAMID_igralu_k$ = function () {
    return this.TAMID_1;
  };
  protoOf(Companion_2).set_MIDOS_dl5hr1_k$ = function (_set____db54di) {
    this.MIDOS_1 = _set____db54di;
  };
  protoOf(Companion_2).get_MIDOS_id1ntv_k$ = function () {
    return this.MIDOS_1;
  };
  protoOf(Companion_2).set_NIDDAH_vgrss3_k$ = function (_set____db54di) {
    this.NIDDAH_1 = _set____db54di;
  };
  protoOf(Companion_2).get_NIDDAH_1gkgrv_k$ = function () {
    return this.NIDDAH_1;
  };
  protoOf(Companion_2).set_YEVAMOS_ynib3f_k$ = function (_set____db54di) {
    this.YEVAMOS_1 = _set____db54di;
  };
  protoOf(Companion_2).get_YEVAMOS_7zog7j_k$ = function () {
    return this.YEVAMOS_1;
  };
  protoOf(Companion_2).set_NEDARIM_dc4no3_k$ = function (_set____db54di) {
    this.NEDARIM_1 = _set____db54di;
  };
  protoOf(Companion_2).get_NEDARIM_rnpntz_k$ = function () {
    return this.NEDARIM_1;
  };
  protoOf(Companion_2).set_NAZIR_fwld35_k$ = function (_set____db54di) {
    this.NAZIR_1 = _set____db54di;
  };
  protoOf(Companion_2).get_NAZIR_idgsp3_k$ = function () {
    return this.NAZIR_1;
  };
  protoOf(Companion_2).set_SOTAH_vqc2vk_k$ = function (_set____db54di) {
    this.SOTAH_1 = _set____db54di;
  };
  protoOf(Companion_2).get_SOTAH_iggkty_k$ = function () {
    return this.SOTAH_1;
  };
  protoOf(Companion_2).set_GITIN_38tz54_k$ = function (_set____db54di) {
    this.GITIN_1 = _set____db54di;
  };
  protoOf(Companion_2).get_GITIN_i9r7zi_k$ = function () {
    return this.GITIN_1;
  };
  protoOf(Companion_2).set_BAVA_METZIA_8j3tok_k$ = function (_set____db54di) {
    this.BAVA_METZIA_1 = _set____db54di;
  };
  protoOf(Companion_2).get_BAVA_METZIA_3fizum_k$ = function () {
    return this.BAVA_METZIA_1;
  };
  protoOf(Companion_2).set_BAVA_BASRA_yzakft_k$ = function (_set____db54di) {
    this.BAVA_BASRA_1 = _set____db54di;
  };
  protoOf(Companion_2).get_BAVA_BASRA_mmrqdz_k$ = function () {
    return this.BAVA_BASRA_1;
  };
  protoOf(Companion_2).set_SANHEDRIN_azry0v_k$ = function (_set____db54di) {
    this.SANHEDRIN_1 = _set____db54di;
  };
  protoOf(Companion_2).get_SANHEDRIN_crb9af_k$ = function () {
    return this.SANHEDRIN_1;
  };
  protoOf(Companion_2).set_SHAVUOS_751mdc_k$ = function (_set____db54di) {
    this.SHAVUOS_1 = _set____db54di;
  };
  protoOf(Companion_2).get_SHAVUOS_nwzc6y_k$ = function () {
    return this.SHAVUOS_1;
  };
  protoOf(Companion_2).set_AVODAH_ZARA_5enybv_k$ = function (_set____db54di) {
    this.AVODAH_ZARA_1 = _set____db54di;
  };
  protoOf(Companion_2).get_AVODAH_ZARA_ojlp2z_k$ = function () {
    return this.AVODAH_ZARA_1;
  };
  protoOf(Companion_2).set_PEAH_orthh5_k$ = function (_set____db54di) {
    this.PEAH_1 = _set____db54di;
  };
  protoOf(Companion_2).get_PEAH_wo776t_k$ = function () {
    return this.PEAH_1;
  };
  protoOf(Companion_2).set_DEMAI_fmapcr_k$ = function (_set____db54di) {
    this.DEMAI_1 = _set____db54di;
  };
  protoOf(Companion_2).get_DEMAI_i814vf_k$ = function () {
    return this.DEMAI_1;
  };
  protoOf(Companion_2).set_KILAYIM_ugd9ln_k$ = function (_set____db54di) {
    this.KILAYIM_1 = _set____db54di;
  };
  protoOf(Companion_2).get_KILAYIM_1csizl_k$ = function () {
    return this.KILAYIM_1;
  };
  protoOf(Companion_2).set_SHEVIIS_tiwbb2_k$ = function (_set____db54di) {
    this.SHEVIIS_1 = _set____db54di;
  };
  protoOf(Companion_2).get_SHEVIIS_nusev0_k$ = function () {
    return this.SHEVIIS_1;
  };
  protoOf(Companion_2).set_TERUMOS_jcaw7i_k$ = function (_set____db54di) {
    this.TERUMOS_1 = _set____db54di;
  };
  protoOf(Companion_2).get_TERUMOS_aee7zg_k$ = function () {
    return this.TERUMOS_1;
  };
  protoOf(Companion_2).set_MAASROS_4wu8ox_k$ = function (_set____db54di) {
    this.MAASROS_1 = _set____db54di;
  };
  protoOf(Companion_2).get_MAASROS_qrhqh3_k$ = function () {
    return this.MAASROS_1;
  };
  protoOf(Companion_2).set_MAASER_SHENI_qmwch6_k$ = function (_set____db54di) {
    this.MAASER_SHENI_1 = _set____db54di;
  };
  protoOf(Companion_2).get_MAASER_SHENI_8w1j20_k$ = function () {
    return this.MAASER_SHENI_1;
  };
  protoOf(Companion_2).set_CHALAH_qqx9pe_k$ = function (_set____db54di) {
    this.CHALAH_1 = _set____db54di;
  };
  protoOf(Companion_2).get_CHALAH_3rix6o_k$ = function () {
    return this.CHALAH_1;
  };
  protoOf(Companion_2).set_ORLAH_j6enun_k$ = function (_set____db54di) {
    this.ORLAH_1 = _set____db54di;
  };
  protoOf(Companion_2).get_ORLAH_ieb5hj_k$ = function () {
    return this.ORLAH_1;
  };
  protoOf(Companion_2).set_BIKURIM_nf2yoa_k$ = function (_set____db54di) {
    this.BIKURIM_1 = _set____db54di;
  };
  protoOf(Companion_2).get_BIKURIM_bb8wvw_k$ = function () {
    return this.BIKURIM_1;
  };
  protoOf(Companion_2).set_masechtosBavliTransliterated_n4fmvm_k$ = function (_set____db54di) {
    this.masechtosBavliTransliterated_1 = _set____db54di;
  };
  protoOf(Companion_2).get_masechtosBavliTransliterated_xakawu_k$ = function () {
    return this.masechtosBavliTransliterated_1;
  };
  protoOf(Companion_2).get_masechtosBavli_kyl4gg_k$ = function () {
    return this.masechtosBavli_1;
  };
  protoOf(Companion_2).set_yerushalmiMasechtosTransliterated_q4hahf_k$ = function (_set____db54di) {
    this.yerushalmiMasechtosTransliterated_1 = _set____db54di;
  };
  protoOf(Companion_2).get_yerushalmiMasechtosTransliterated_p2zvvd_k$ = function () {
    return this.yerushalmiMasechtosTransliterated_1;
  };
  protoOf(Companion_2).get_yerushalmiMasechtos_877b89_k$ = function () {
    return this.yerushalmiMasechtos_1;
  };
  protoOf(Companion_2).get_yerushlmiMasechtosTransliterated_o1wsjk_k$ = function () {
    return this.yerushalmiMasechtosTransliterated_1;
  };
  protoOf(Companion_2).get_yerushlmiMasechtos_gspur6_k$ = function () {
    return this.yerushalmiMasechtos_1;
  };
  var Companion_instance_2;
  function Companion_getInstance_15() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function get_$stableprop_7() {
    return 8;
  }
  function Daf(masechtaNumber, daf) {
    Companion_getInstance_15();
    this.masechtaNumber_1 = masechtaNumber;
    this.daf_1 = daf;
    this.$stable_1 = 8;
  }
  protoOf(Daf).set_masechtaNumber_hgukxa_k$ = function (_set____db54di) {
    this.masechtaNumber_1 = _set____db54di;
  };
  protoOf(Daf).get_masechtaNumber_u3874m_k$ = function () {
    return this.masechtaNumber_1;
  };
  protoOf(Daf).set_daf_h7herg_k$ = function (_set____db54di) {
    this.daf_1 = _set____db54di;
  };
  protoOf(Daf).get_daf_18j7j4_k$ = function () {
    return this.daf_1;
  };
  protoOf(Daf).get_masechtaTransliterated_lvszu9_k$ = function () {
    return Companion_getInstance_15().masechtosBavliTransliterated_1[this.masechtaNumber_1];
  };
  protoOf(Daf).get_masechta_rc6wu7_k$ = function () {
    return Companion_getInstance_15().masechtosBavli_1[this.masechtaNumber_1];
  };
  protoOf(Daf).get_yerushalmiMasechtaTransliterated_wyvpju_k$ = function () {
    return Companion_getInstance_15().yerushalmiMasechtosTransliterated_1[this.masechtaNumber_1];
  };
  protoOf(Daf).get_yerushlmiMasechtaTransliterated_5y7kpr_k$ = function () {
    return this.get_yerushalmiMasechtaTransliterated_wyvpju_k$();
  };
  protoOf(Daf).get_yerushalmiMasechta_r8bsac_k$ = function () {
    return Companion_getInstance_15().yerushalmiMasechtos_1[this.masechtaNumber_1];
  };
  protoOf(Daf).component1_7eebsc_k$ = function () {
    return this.masechtaNumber_1;
  };
  protoOf(Daf).component2_7eebsb_k$ = function () {
    return this.daf_1;
  };
  protoOf(Daf).copy_r83ead_k$ = function (masechtaNumber, daf) {
    return new Daf(masechtaNumber, daf);
  };
  protoOf(Daf).copy$default_ksoan9_k$ = function (masechtaNumber, daf, $super) {
    masechtaNumber = masechtaNumber === VOID ? this.masechtaNumber_1 : masechtaNumber;
    daf = daf === VOID ? this.daf_1 : daf;
    return $super === VOID ? this.copy_r83ead_k$(masechtaNumber, daf) : $super.copy_r83ead_k$.call(this, masechtaNumber, daf);
  };
  protoOf(Daf).toString = function () {
    return 'Daf(masechtaNumber=' + this.masechtaNumber_1 + ', daf=' + this.daf_1 + ')';
  };
  protoOf(Daf).hashCode = function () {
    var result = this.masechtaNumber_1;
    result = imul(result, 31) + this.daf_1 | 0;
    return result;
  };
  protoOf(Daf).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Daf))
      return false;
    var tmp0_other_with_cast = other instanceof Daf ? other : THROW_CCE();
    if (!(this.masechtaNumber_1 === tmp0_other_with_cast.masechtaNumber_1))
      return false;
    if (!(this.daf_1 === tmp0_other_with_cast.daf_1))
      return false;
    return true;
  };
  function _get_GERESH__mmj463($this) {
    return $this.GERESH_1;
  }
  function _get_GERSHAYIM__ndfyx8($this) {
    return $this.GERSHAYIM_1;
  }
  function _get_hebrewMonths__7ybcc9($this) {
    return $this.hebrewMonths_1;
  }
  function _get_hebrewDaysOfWeek__215e96($this) {
    return $this.hebrewDaysOfWeek_1;
  }
  function formatMolad($this, moladChalakim) {
    var adjustedChalakim = moladChalakim;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.div' call
    var tmp0_div = adjustedChalakim;
    var tmp1_div = 25920;
    tmp$ret$0 = tmp0_div.div_9s1fi3_k$(toLong(tmp1_div));
    var days = tmp$ret$0;
    var tmp = adjustedChalakim;
    var tmp$ret$1;
    // Inline function 'kotlin.Long.times' call
    var tmp2_times = days;
    var tmp3_times = 25920;
    tmp$ret$1 = tmp2_times.times_2zfqpc_k$(toLong(tmp3_times));
    adjustedChalakim = tmp.minus_llf5ei_k$(tmp$ret$1);
    var tmp$ret$2;
    // Inline function 'kotlin.Long.div' call
    var tmp4_div = adjustedChalakim;
    var tmp5_div = 1080;
    tmp$ret$2 = tmp4_div.div_9s1fi3_k$(toLong(tmp5_div));
    var hours = tmp$ret$2.toInt_1tsl84_k$();
    if (hours >= 6) {
      var tmp$ret$3;
      // Inline function 'kotlin.Long.plus' call
      var tmp6_plus = days;
      tmp$ret$3 = tmp6_plus.plus_u6jwas_k$(new Long(1, 0));
      days = tmp$ret$3;
    }
    adjustedChalakim = adjustedChalakim.minus_llf5ei_k$(numberToLong(hours).times_2zfqpc_k$(new Long(1080, 0)));
    var tmp$ret$4;
    // Inline function 'kotlin.Long.div' call
    var tmp7_div = adjustedChalakim;
    var tmp8_div = 18;
    tmp$ret$4 = tmp7_div.div_9s1fi3_k$(toLong(tmp8_div));
    var minutes = tmp$ret$4.toInt_1tsl84_k$();
    adjustedChalakim = adjustedChalakim.minus_llf5ei_k$(numberToLong(minutes).times_2zfqpc_k$(new Long(18, 0)));
    var tmp$ret$5;
    // Inline function 'kotlin.Long.rem' call
    var tmp9_rem = days;
    tmp$ret$5 = tmp9_rem.rem_9rbcjo_k$(new Long(7, 0));
    return 'Day: ' + tmp$ret$5 + ' hours: ' + hours + ', minutes ' + minutes + ', chalakim: ' + toString(adjustedChalakim);
  }
  function _set_weekFormat__yxmv4k($this, _set____db54di) {
    $this.weekFormat_1 = _set____db54di;
  }
  function _get_weekFormat__l18lpc($this) {
    return $this.weekFormat_1;
  }
  function _get_hebrewParshaMap__djz4rl($this) {
    return $this.hebrewParshaMap_1;
  }
  function _get_hebrewHolidays__fhar9t($this) {
    return $this.hebrewHolidays_1;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.GERESH_1 = '\u05F3';
    this.GERSHAYIM_1 = '\u05F4';
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ['\u05E0\u05D9\u05E1\u05DF', '\u05D0\u05D9\u05D9\u05E8', '\u05E1\u05D9\u05D5\u05DF', '\u05EA\u05DE\u05D5\u05D6', '\u05D0\u05D1', '\u05D0\u05DC\u05D5\u05DC', '\u05EA\u05E9\u05E8\u05D9', '\u05D7\u05E9\u05D5\u05DF', '\u05DB\u05E1\u05DC\u05D5', '\u05D8\u05D1\u05EA', '\u05E9\u05D1\u05D8', '\u05D0\u05D3\u05E8', '\u05D0\u05D3\u05E8 \u05D1', '\u05D0\u05D3\u05E8 \u05D0'];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp.hebrewMonths_1 = tmp$ret$2;
    var tmp_0 = this;
    var tmp$ret$5;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = ['\u05E8\u05D0\u05E9\u05D5\u05DF', '\u05E9\u05E0\u05D9', '\u05E9\u05DC\u05D9\u05E9\u05D9', '\u05E8\u05D1\u05D9\u05E2\u05D9', '\u05D7\u05DE\u05D9\u05E9\u05D9', '\u05E9\u05E9\u05D9', '\u05E9\u05D1\u05EA'];
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    tmp_0.hebrewDaysOfWeek_1 = tmp$ret$5;
    this.MINUTE_CHALAKIM_1 = 18;
    this.HOUR_CHALAKIM_1 = 1080;
    this.DAY_CHALAKIM_1 = 25920;
  }
  protoOf(Companion_3).get_MINUTE_CHALAKIM_wbm77k_k$ = function () {
    return this.MINUTE_CHALAKIM_1;
  };
  protoOf(Companion_3).get_HOUR_CHALAKIM_o4hnv4_k$ = function () {
    return this.HOUR_CHALAKIM_1;
  };
  protoOf(Companion_3).get_DAY_CHALAKIM_qrjzka_k$ = function () {
    return this.DAY_CHALAKIM_1;
  };
  var Companion_instance_3;
  function Companion_getInstance_16() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function get_$stableprop_8() {
    return 8;
  }
  function HebrewDateFormatter() {
    Companion_getInstance_16();
    this.isHebrewFormat_1 = false;
    this.isUseLongHebrewYears_1 = false;
    this.isUseGershGershayim_1 = true;
    this.isLongWeekFormat_1 = true;
    this.isUseFinalFormLetters_1 = false;
    this.weekFormat_1 = null;
    this.transliteratedParshiosList_1 = mapOf([to(Parsha_NONE_getInstance(), ''), to(Parsha_BERESHIS_getInstance(), 'Bereshis'), to(Parsha_NOACH_getInstance(), 'Noach'), to(Parsha_LECH_LECHA_getInstance(), 'Lech Lecha'), to(Parsha_VAYERA_getInstance(), 'Vayera'), to(Parsha_CHAYEI_SARA_getInstance(), 'Chayei Sara'), to(Parsha_TOLDOS_getInstance(), 'Toldos'), to(Parsha_VAYETZEI_getInstance(), 'Vayetzei'), to(Parsha_VAYISHLACH_getInstance(), 'Vayishlach'), to(Parsha_VAYESHEV_getInstance(), 'Vayeshev'), to(Parsha_MIKETZ_getInstance(), 'Miketz'), to(Parsha_VAYIGASH_getInstance(), 'Vayigash'), to(Parsha_VAYECHI_getInstance(), 'Vayechi'), to(Parsha_SHEMOS_getInstance(), 'Shemos'), to(Parsha_VAERA_getInstance(), 'Vaera'), to(Parsha_BO_getInstance(), 'Bo'), to(Parsha_BESHALACH_getInstance(), 'Beshalach'), to(Parsha_YISRO_getInstance(), 'Yisro'), to(Parsha_MISHPATIM_getInstance(), 'Mishpatim'), to(Parsha_TERUMAH_getInstance(), 'Terumah'), to(Parsha_TETZAVEH_getInstance(), 'Tetzaveh'), to(Parsha_KI_SISA_getInstance(), 'Ki Sisa'), to(Parsha_VAYAKHEL_getInstance(), 'Vayakhel'), to(Parsha_PEKUDEI_getInstance(), 'Pekudei'), to(Parsha_VAYIKRA_getInstance(), 'Vayikra'), to(Parsha_TZAV_getInstance(), 'Tzav'), to(Parsha_SHMINI_getInstance(), 'Shmini'), to(Parsha_TAZRIA_getInstance(), 'Tazria'), to(Parsha_METZORA_getInstance(), 'Metzora'), to(Parsha_ACHREI_MOS_getInstance(), 'Achrei Mos'), to(Parsha_KEDOSHIM_getInstance(), 'Kedoshim'), to(Parsha_EMOR_getInstance(), 'Emor'), to(Parsha_BEHAR_getInstance(), 'Behar'), to(Parsha_BECHUKOSAI_getInstance(), 'Bechukosai'), to(Parsha_BAMIDBAR_getInstance(), 'Bamidbar'), to(Parsha_NASSO_getInstance(), 'Nasso'), to(Parsha_BEHAALOSCHA_getInstance(), "Beha'aloscha"), to(Parsha_SHLACH_getInstance(), "Sh'lach"), to(Parsha_KORACH_getInstance(), 'Korach'), to(Parsha_CHUKAS_getInstance(), 'Chukas'), to(Parsha_BALAK_getInstance(), 'Balak'), to(Parsha_PINCHAS_getInstance(), 'Pinchas'), to(Parsha_MATOS_getInstance(), 'Matos'), to(Parsha_MASEI_getInstance(), 'Masei'), to(Parsha_DEVARIM_getInstance(), 'Devarim'), to(Parsha_VAESCHANAN_getInstance(), 'Vaeschanan'), to(Parsha_EIKEV_getInstance(), 'Eikev'), to(Parsha_REEH_getInstance(), "Re'eh"), to(Parsha_SHOFTIM_getInstance(), 'Shoftim'), to(Parsha_KI_SEITZEI_getInstance(), 'Ki Seitzei'), to(Parsha_KI_SAVO_getInstance(), 'Ki Savo'), to(Parsha_NITZAVIM_getInstance(), 'Nitzavim'), to(Parsha_VAYEILECH_getInstance(), 'Vayeilech'), to(Parsha_HAAZINU_getInstance(), "Ha'Azinu"), to(Parsha_VZOS_HABERACHA_getInstance(), 'Vezos Habracha'), to(Parsha_VAYAKHEL_PEKUDEI_getInstance(), 'Vayakhel Pekudei'), to(Parsha_TAZRIA_METZORA_getInstance(), 'Tazria Metzora'), to(Parsha_ACHREI_MOS_KEDOSHIM_getInstance(), 'Achrei Mos Kedoshim'), to(Parsha_BEHAR_BECHUKOSAI_getInstance(), 'Behar Bechukosai'), to(Parsha_CHUKAS_BALAK_getInstance(), 'Chukas Balak'), to(Parsha_MATOS_MASEI_getInstance(), 'Matos Masei'), to(Parsha_NITZAVIM_VAYEILECH_getInstance(), 'Nitzavim Vayeilech'), to(Parsha_SHKALIM_getInstance(), 'Shekalim'), to(Parsha_ZACHOR_getInstance(), 'Zachor'), to(Parsha_PARA_getInstance(), 'Parah'), to(Parsha_HACHODESH_getInstance(), 'Hachodesh'), to(Parsha_SHUVA_getInstance(), 'Shuva'), to(Parsha_SHIRA_getInstance(), 'Shira'), to(Parsha_HAGADOL_getInstance(), 'Hagadol'), to(Parsha_CHAZON_getInstance(), 'Chazon'), to(Parsha_NACHAMU_getInstance(), 'Nachamu')]);
    this.hebrewParshaMap_1 = mapOf([to(Parsha_NONE_getInstance(), ''), to(Parsha_BERESHIS_getInstance(), '\u05D1\u05E8\u05D0\u05E9\u05D9\u05EA'), to(Parsha_NOACH_getInstance(), '\u05E0\u05D7'), to(Parsha_LECH_LECHA_getInstance(), '\u05DC\u05DA \u05DC\u05DA'), to(Parsha_VAYERA_getInstance(), '\u05D5\u05D9\u05E8\u05D0'), to(Parsha_CHAYEI_SARA_getInstance(), '\u05D7\u05D9\u05D9 \u05E9\u05E8\u05D4'), to(Parsha_TOLDOS_getInstance(), '\u05EA\u05D5\u05DC\u05D3\u05D5\u05EA'), to(Parsha_VAYETZEI_getInstance(), '\u05D5\u05D9\u05E6\u05D0'), to(Parsha_VAYISHLACH_getInstance(), '\u05D5\u05D9\u05E9\u05DC\u05D7'), to(Parsha_VAYESHEV_getInstance(), '\u05D5\u05D9\u05E9\u05D1'), to(Parsha_MIKETZ_getInstance(), '\u05DE\u05E7\u05E5'), to(Parsha_VAYIGASH_getInstance(), '\u05D5\u05D9\u05D2\u05E9'), to(Parsha_VAYECHI_getInstance(), '\u05D5\u05D9\u05D7\u05D9'), to(Parsha_SHEMOS_getInstance(), '\u05E9\u05DE\u05D5\u05EA'), to(Parsha_VAERA_getInstance(), '\u05D5\u05D0\u05E8\u05D0'), to(Parsha_BO_getInstance(), '\u05D1\u05D0'), to(Parsha_BESHALACH_getInstance(), '\u05D1\u05E9\u05DC\u05D7'), to(Parsha_YISRO_getInstance(), '\u05D9\u05EA\u05E8\u05D5'), to(Parsha_MISHPATIM_getInstance(), '\u05DE\u05E9\u05E4\u05D8\u05D9\u05DD'), to(Parsha_TERUMAH_getInstance(), '\u05EA\u05E8\u05D5\u05DE\u05D4'), to(Parsha_TETZAVEH_getInstance(), '\u05EA\u05E6\u05D5\u05D4'), to(Parsha_KI_SISA_getInstance(), '\u05DB\u05D9 \u05EA\u05E9\u05D0'), to(Parsha_VAYAKHEL_getInstance(), '\u05D5\u05D9\u05E7\u05D4\u05DC'), to(Parsha_PEKUDEI_getInstance(), '\u05E4\u05E7\u05D5\u05D3\u05D9'), to(Parsha_VAYIKRA_getInstance(), '\u05D5\u05D9\u05E7\u05E8\u05D0'), to(Parsha_TZAV_getInstance(), '\u05E6\u05D5'), to(Parsha_SHMINI_getInstance(), '\u05E9\u05DE\u05D9\u05E0\u05D9'), to(Parsha_TAZRIA_getInstance(), '\u05EA\u05D6\u05E8\u05D9\u05E2'), to(Parsha_METZORA_getInstance(), '\u05DE\u05E6\u05E8\u05E2'), to(Parsha_ACHREI_MOS_getInstance(), '\u05D0\u05D7\u05E8\u05D9 \u05DE\u05D5\u05EA'), to(Parsha_KEDOSHIM_getInstance(), '\u05E7\u05D3\u05D5\u05E9\u05D9\u05DD'), to(Parsha_EMOR_getInstance(), '\u05D0\u05DE\u05D5\u05E8'), to(Parsha_BEHAR_getInstance(), '\u05D1\u05D4\u05E8'), to(Parsha_BECHUKOSAI_getInstance(), '\u05D1\u05D7\u05E7\u05EA\u05D9'), to(Parsha_BAMIDBAR_getInstance(), '\u05D1\u05DE\u05D3\u05D1\u05E8'), to(Parsha_NASSO_getInstance(), '\u05E0\u05E9\u05D0'), to(Parsha_BEHAALOSCHA_getInstance(), '\u05D1\u05D4\u05E2\u05DC\u05EA\u05DA'), to(Parsha_SHLACH_getInstance(), '\u05E9\u05DC\u05D7 \u05DC\u05DA'), to(Parsha_KORACH_getInstance(), '\u05E7\u05E8\u05D7'), to(Parsha_CHUKAS_getInstance(), '\u05D7\u05D5\u05E7\u05EA'), to(Parsha_BALAK_getInstance(), '\u05D1\u05DC\u05E7'), to(Parsha_PINCHAS_getInstance(), '\u05E4\u05D9\u05E0\u05D7\u05E1'), to(Parsha_MATOS_getInstance(), '\u05DE\u05D8\u05D5\u05EA'), to(Parsha_MASEI_getInstance(), '\u05DE\u05E1\u05E2\u05D9'), to(Parsha_DEVARIM_getInstance(), '\u05D3\u05D1\u05E8\u05D9\u05DD'), to(Parsha_VAESCHANAN_getInstance(), '\u05D5\u05D0\u05EA\u05D7\u05E0\u05DF'), to(Parsha_EIKEV_getInstance(), '\u05E2\u05E7\u05D1'), to(Parsha_REEH_getInstance(), '\u05E8\u05D0\u05D4'), to(Parsha_SHOFTIM_getInstance(), '\u05E9\u05D5\u05E4\u05D8\u05D9\u05DD'), to(Parsha_KI_SEITZEI_getInstance(), '\u05DB\u05D9 \u05EA\u05E6\u05D0'), to(Parsha_KI_SAVO_getInstance(), '\u05DB\u05D9 \u05EA\u05D1\u05D5\u05D0'), to(Parsha_NITZAVIM_getInstance(), '\u05E0\u05E6\u05D1\u05D9\u05DD'), to(Parsha_VAYEILECH_getInstance(), '\u05D5\u05D9\u05DC\u05DA'), to(Parsha_HAAZINU_getInstance(), '\u05D4\u05D0\u05D6\u05D9\u05E0\u05D5'), to(Parsha_VZOS_HABERACHA_getInstance(), '\u05D5\u05D6\u05D0\u05EA \u05D4\u05D1\u05E8\u05DB\u05D4 '), to(Parsha_VAYAKHEL_PEKUDEI_getInstance(), '\u05D5\u05D9\u05E7\u05D4\u05DC \u05E4\u05E7\u05D5\u05D3\u05D9'), to(Parsha_TAZRIA_METZORA_getInstance(), '\u05EA\u05D6\u05E8\u05D9\u05E2 \u05DE\u05E6\u05E8\u05E2'), to(Parsha_ACHREI_MOS_KEDOSHIM_getInstance(), '\u05D0\u05D7\u05E8\u05D9 \u05DE\u05D5\u05EA \u05E7\u05D3\u05D5\u05E9\u05D9\u05DD'), to(Parsha_BEHAR_BECHUKOSAI_getInstance(), '\u05D1\u05D4\u05E8 \u05D1\u05D7\u05E7\u05EA\u05D9'), to(Parsha_CHUKAS_BALAK_getInstance(), '\u05D7\u05D5\u05E7\u05EA \u05D1\u05DC\u05E7'), to(Parsha_MATOS_MASEI_getInstance(), '\u05DE\u05D8\u05D5\u05EA \u05DE\u05E1\u05E2\u05D9'), to(Parsha_NITZAVIM_VAYEILECH_getInstance(), '\u05E0\u05E6\u05D1\u05D9\u05DD \u05D5\u05D9\u05DC\u05DA'), to(Parsha_SHKALIM_getInstance(), '\u05E9\u05E7\u05DC\u05D9\u05DD'), to(Parsha_ZACHOR_getInstance(), '\u05D6\u05DB\u05D5\u05E8'), to(Parsha_PARA_getInstance(), '\u05E4\u05E8\u05D4'), to(Parsha_HACHODESH_getInstance(), '\u05D4\u05D7\u05D3\u05E9'), to(Parsha_SHUVA_getInstance(), '\u05E9\u05D5\u05D1\u05D4'), to(Parsha_SHIRA_getInstance(), '\u05E9\u05D9\u05E8\u05D4'), to(Parsha_HAGADOL_getInstance(), '\u05D4\u05D2\u05D3\u05D5\u05DC'), to(Parsha_CHAZON_getInstance(), '\u05D7\u05D6\u05D5\u05DF'), to(Parsha_NACHAMU_getInstance(), '\u05E0\u05D7\u05DE\u05D5')]);
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ['Nissan', 'Iyar', 'Sivan', 'Tammuz', 'Av', 'Elul', 'Tishrei', 'Cheshvan', 'Kislev', 'Teves', 'Shevat', 'Adar', 'Adar II', 'Adar I'];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp.transliteratedMonthList_1 = tmp$ret$2;
    this.hebrewOmerPrefix_1 = '\u05D1';
    this.transliteratedShabbosDayOfWeek_1 = 'Shabbos';
    var tmp_0 = this;
    var tmp$ret$5;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = ['Erev Pesach', 'Pesach', 'Chol Hamoed Pesach', 'Pesach Sheni', 'Erev Shavuos', 'Shavuos', 'Seventeenth of Tammuz', "Tishah B'Av", "Tu B'Av", 'Erev Rosh Hashana', 'Rosh Hashana', 'Fast of Gedalyah', 'Erev Yom Kippur', 'Yom Kippur', 'Erev Succos', 'Succos', 'Chol Hamoed Succos', 'Hoshana Rabbah', 'Shemini Atzeres', 'Simchas Torah', 'Erev Chanukah', 'Chanukah', 'Tenth of Teves', "Tu B'Shvat", 'Fast of Esther', 'Purim', 'Shushan Purim', 'Purim Katan', 'Rosh Chodesh', 'Yom HaShoah', 'Yom Hazikaron', "Yom Ha'atzmaut", 'Yom Yerushalayim', "Lag B'Omer", 'Shushan Purim Katan', 'Isru Chag'];
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    tmp_0.transliteratedHolidayList_1 = tmp$ret$5;
    var tmp_1 = this;
    var tmp$ret$8;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$7;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$6;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$6 = ['\u05E2\u05E8\u05D1 \u05E4\u05E1\u05D7', '\u05E4\u05E1\u05D7', '\u05D7\u05D5\u05DC \u05D4\u05DE\u05D5\u05E2\u05D3 \u05E4\u05E1\u05D7', '\u05E4\u05E1\u05D7 \u05E9\u05E0\u05D9', '\u05E2\u05E8\u05D1 \u05E9\u05D1\u05D5\u05E2\u05D5\u05EA', '\u05E9\u05D1\u05D5\u05E2\u05D5\u05EA', '\u05E9\u05D1\u05E2\u05D4 \u05E2\u05E9\u05E8 \u05D1\u05EA\u05DE\u05D5\u05D6', '\u05EA\u05E9\u05E2\u05D4 \u05D1\u05D0\u05D1', '\u05D8\u05F4\u05D5 \u05D1\u05D0\u05D1', '\u05E2\u05E8\u05D1 \u05E8\u05D0\u05E9 \u05D4\u05E9\u05E0\u05D4', '\u05E8\u05D0\u05E9 \u05D4\u05E9\u05E0\u05D4', '\u05E6\u05D5\u05DD \u05D2\u05D3\u05DC\u05D9\u05D4', '\u05E2\u05E8\u05D1 \u05D9\u05D5\u05DD \u05DB\u05D9\u05E4\u05D5\u05E8', '\u05D9\u05D5\u05DD \u05DB\u05D9\u05E4\u05D5\u05E8', '\u05E2\u05E8\u05D1 \u05E1\u05D5\u05DB\u05D5\u05EA', '\u05E1\u05D5\u05DB\u05D5\u05EA', '\u05D7\u05D5\u05DC \u05D4\u05DE\u05D5\u05E2\u05D3 \u05E1\u05D5\u05DB\u05D5\u05EA', '\u05D4\u05D5\u05E9\u05E2\u05E0\u05D0 \u05E8\u05D1\u05D4', '\u05E9\u05DE\u05D9\u05E0\u05D9 \u05E2\u05E6\u05E8\u05EA', '\u05E9\u05DE\u05D7\u05EA \u05EA\u05D5\u05E8\u05D4', '\u05E2\u05E8\u05D1 \u05D7\u05E0\u05D5\u05DB\u05D4', '\u05D7\u05E0\u05D5\u05DB\u05D4', '\u05E2\u05E9\u05E8\u05D4 \u05D1\u05D8\u05D1\u05EA', '\u05D8\u05F4\u05D5 \u05D1\u05E9\u05D1\u05D8', '\u05EA\u05E2\u05E0\u05D9\u05EA \u05D0\u05E1\u05EA\u05E8', '\u05E4\u05D5\u05E8\u05D9\u05DD', '\u05E4\u05D5\u05E8\u05D9\u05DD \u05E9\u05D5\u05E9\u05DF', '\u05E4\u05D5\u05E8\u05D9\u05DD \u05E7\u05D8\u05DF', '\u05E8\u05D0\u05E9 \u05D7\u05D5\u05D3\u05E9', '\u05D9\u05D5\u05DD \u05D4\u05E9\u05D5\u05D0\u05D4', '\u05D9\u05D5\u05DD \u05D4\u05D6\u05D9\u05DB\u05E8\u05D5\u05DF', '\u05D9\u05D5\u05DD \u05D4\u05E2\u05E6\u05DE\u05D0\u05D5\u05EA', '\u05D9\u05D5\u05DD \u05D9\u05E8\u05D5\u05E9\u05DC\u05D9\u05DD', '\u05DC\u05F4\u05D2 \u05D1\u05E2\u05D5\u05DE\u05E8', '\u05E4\u05D5\u05E8\u05D9\u05DD \u05E9\u05D5\u05E9\u05DF \u05E7\u05D8\u05DF', '\u05D0\u05E1\u05E8\u05D5 \u05D7\u05D2'];
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7;
    tmp_1.hebrewHolidays_1 = tmp$ret$8;
    this.$stable_1 = 8;
  }
  protoOf(HebrewDateFormatter).set_isHebrewFormat_dr7owk_k$ = function (_set____db54di) {
    this.isHebrewFormat_1 = _set____db54di;
  };
  protoOf(HebrewDateFormatter).get_isHebrewFormat_gimzx3_k$ = function () {
    return this.isHebrewFormat_1;
  };
  protoOf(HebrewDateFormatter).set_isUseLongHebrewYears_n6661a_k$ = function (_set____db54di) {
    this.isUseLongHebrewYears_1 = _set____db54di;
  };
  protoOf(HebrewDateFormatter).get_isUseLongHebrewYears_nqz56v_k$ = function () {
    return this.isUseLongHebrewYears_1;
  };
  protoOf(HebrewDateFormatter).set_isUseGershGershayim_t1fuyb_k$ = function (_set____db54di) {
    this.isUseGershGershayim_1 = _set____db54di;
  };
  protoOf(HebrewDateFormatter).get_isUseGershGershayim_v93cq8_k$ = function () {
    return this.isUseGershGershayim_1;
  };
  protoOf(HebrewDateFormatter).set_isLongWeekFormat_5aaovv_k$ = function (longWeekFormat) {
    this.isLongWeekFormat_1 = longWeekFormat;
    this.weekFormat_1 = longWeekFormat ? WeekFormat_getInstance().get_long_wopz2d_k$() : WeekFormat_getInstance().get_short_iyijpv_k$();
  };
  protoOf(HebrewDateFormatter).get_isLongWeekFormat_qmw56_k$ = function () {
    return this.isLongWeekFormat_1;
  };
  protoOf(HebrewDateFormatter).set_isUseFinalFormLetters_y5xfii_k$ = function (_set____db54di) {
    this.isUseFinalFormLetters_1 = _set____db54di;
  };
  protoOf(HebrewDateFormatter).get_isUseFinalFormLetters_k489jb_k$ = function () {
    return this.isUseFinalFormLetters_1;
  };
  protoOf(HebrewDateFormatter).set_transliteratedParshiosList_7wqulz_k$ = function (_set____db54di) {
    this.transliteratedParshiosList_1 = _set____db54di;
  };
  protoOf(HebrewDateFormatter).get_transliteratedParshiosList_favqfo_k$ = function () {
    return this.transliteratedParshiosList_1;
  };
  protoOf(HebrewDateFormatter).set_transliteratedMonthList_rzbhbn_k$ = function (_set____db54di) {
    this.transliteratedMonthList_1 = _set____db54di;
  };
  protoOf(HebrewDateFormatter).get_transliteratedMonthList_9a6y9l_k$ = function () {
    return this.transliteratedMonthList_1;
  };
  protoOf(HebrewDateFormatter).set_hebrewOmerPrefix_1m8bbb_k$ = function (_set____db54di) {
    this.hebrewOmerPrefix_1 = _set____db54di;
  };
  protoOf(HebrewDateFormatter).get_hebrewOmerPrefix_271tqz_k$ = function () {
    return this.hebrewOmerPrefix_1;
  };
  protoOf(HebrewDateFormatter).set_transliteratedShabbosDayOfWeek_z1wf2o_k$ = function (_set____db54di) {
    this.transliteratedShabbosDayOfWeek_1 = _set____db54di;
  };
  protoOf(HebrewDateFormatter).get_transliteratedShabbosDayOfWeek_prvkqa_k$ = function () {
    return this.transliteratedShabbosDayOfWeek_1;
  };
  protoOf(HebrewDateFormatter).set_transliteratedHolidayList_iggmx7_k$ = function (_set____db54di) {
    this.transliteratedHolidayList_1 = _set____db54di;
  };
  protoOf(HebrewDateFormatter).get_transliteratedHolidayList_dmy8pr_k$ = function () {
    return this.transliteratedHolidayList_1;
  };
  protoOf(HebrewDateFormatter).formatYomTov_98hcgs_k$ = function (jewishCalendar) {
    var index = jewishCalendar.get_yomTovIndex_vr5p8l_k$();
    if (index === Companion_getInstance_17().get_CHANUKAH_4u3ejc_k$()) {
      var dayOfChanukah = jewishCalendar.get_dayOfChanukah_hv8ie1_k$();
      return this.isHebrewFormat_1 ? this.formatHebrewNumber_ule0m6_k$(dayOfChanukah) + ' ' + this.hebrewHolidays_1[index] : this.transliteratedHolidayList_1[index] + ' ' + dayOfChanukah;
    }
    return index === -1 ? '' : this.isHebrewFormat_1 ? this.hebrewHolidays_1[index] : this.transliteratedHolidayList_1[index];
  };
  protoOf(HebrewDateFormatter).formatRoshChodesh_ebf7iw_k$ = function (jewishCalendar) {
    if (!jewishCalendar.get_isRoshChodesh_hma1gb_k$()) {
      return '';
    }
    var month = jewishCalendar.get_jewishMonth_g5uggl_k$();
    if (jewishCalendar.get_jewishDayOfMonth_adlgfs_k$() === 30) {
      if (month < Companion_getInstance_18().get_ADAR_wnxlnh_k$() ? true : month === Companion_getInstance_18().get_ADAR_wnxlnh_k$() ? jewishCalendar.get_isJewishLeapYear_rd302u_k$() : false) {
        var tmp0 = month;
        month = tmp0 + 1 | 0;
      } else {
        month = Companion_getInstance_18().get_NISSAN_1gucpd_k$();
      }
    }
    var copy = jewishCalendar.copy$default_ut2dsd_k$(VOID, VOID, VOID, jewishCalendar.get_inIsrael_sijatq_k$());
    copy.setJewishMonth_e5il1h_k$(month);
    return (this.isHebrewFormat_1 ? this.hebrewHolidays_1[Companion_getInstance_17().get_ROSH_CHODESH_j5uv7g_k$()] : this.transliteratedHolidayList_1[Companion_getInstance_17().get_ROSH_CHODESH_j5uv7g_k$()]) + ' ' + this.formatMonth_nnchl2_k$(jewishCalendar);
  };
  protoOf(HebrewDateFormatter).formatDayOfWeek_i26r6p_k$ = function (jewishDate) {
    var jewishDayOfWeek = Companion_getInstance_17().toJewishDayOfWeek_8o98we_k$(jewishDate.get_gregorianLocalDate_slbzek_k$().get_dayOfWeek_3kfgci_k$());
    var tmp;
    if (this.isHebrewFormat_1) {
      tmp = this.isLongWeekFormat_1 ? Companion_getInstance_16().hebrewDaysOfWeek_1[jewishDayOfWeek - 1 | 0] : jewishDayOfWeek === 7 ? this.formatHebrewNumber_ule0m6_k$(300) : this.formatHebrewNumber_ule0m6_k$(jewishDayOfWeek);
    } else if (jewishDayOfWeek === 7) {
      var tmp_0;
      if (this.isLongWeekFormat_1) {
        tmp_0 = this.transliteratedShabbosDayOfWeek_1;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.text.substring' call
        var tmp0_substring = this.transliteratedShabbosDayOfWeek_1;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_substring;
        tmp$ret$1 = tmp$ret$0.substring(0, 3);
        tmp_0 = tmp$ret$1;
      }
      tmp = tmp_0;
    } else {
      tmp = ensureNotNull(this.weekFormat_1).format_cwnfvf_k$(jewishDate.get_gregorianLocalDate_slbzek_k$());
    }
    return tmp;
  };
  protoOf(HebrewDateFormatter).format_pm8q1k_k$ = function (jewishDate) {
    return this.isHebrewFormat_1 ? this.formatHebrewNumber_ule0m6_k$(jewishDate.get_jewishDayOfMonth_adlgfs_k$()) + ' ' + this.formatMonth_nnchl2_k$(jewishDate) + ' ' + this.formatHebrewNumber_ule0m6_k$(jewishDate.get_jewishYear_9oxc94_k$()) : '' + jewishDate.get_jewishDayOfMonth_adlgfs_k$() + ' ' + this.formatMonth_nnchl2_k$(jewishDate) + ', ' + jewishDate.get_jewishYear_9oxc94_k$();
  };
  protoOf(HebrewDateFormatter).formatMonth_nnchl2_k$ = function (jewishDate) {
    var month = jewishDate.get_jewishMonth_g5uggl_k$();
    return this.isHebrewFormat_1 ? (jewishDate.get_isJewishLeapYear_rd302u_k$() ? month === Companion_getInstance_18().get_ADAR_wnxlnh_k$() : false) ? Companion_getInstance_16().hebrewMonths_1[13] + (this.isUseGershGershayim_1 ? Companion_getInstance_16().GERESH_1 : '') : (jewishDate.get_isJewishLeapYear_rd302u_k$() ? month === Companion_getInstance_18().get_ADAR_II_5vx2ke_k$() : false) ? Companion_getInstance_16().hebrewMonths_1[12] + (this.isUseGershGershayim_1 ? Companion_getInstance_16().GERESH_1 : '') : Companion_getInstance_16().hebrewMonths_1[month - 1 | 0] : (jewishDate.get_isJewishLeapYear_rd302u_k$() ? month === Companion_getInstance_18().get_ADAR_wnxlnh_k$() : false) ? this.transliteratedMonthList_1[13] : this.transliteratedMonthList_1[month - 1 | 0];
  };
  protoOf(HebrewDateFormatter).formatOmer_u7bqoz_k$ = function (jewishCalendar) {
    var omer = jewishCalendar.get_dayOfOmer_3kkeaz_k$();
    if (omer === -1)
      return '';
    return this.isHebrewFormat_1 ? this.formatHebrewNumber_ule0m6_k$(omer) + ' ' + this.hebrewOmerPrefix_1 + '\u05E2\u05D5\u05DE\u05E8' : omer === 33 ? this.transliteratedHolidayList_1[33] : 'Omer ' + omer;
  };
  protoOf(HebrewDateFormatter).getFormattedKviah_wj36ki_k$ = function (jewishYear) {
    var jewishDate = JewishDate_init_$Create$_0(jewishYear, Companion_getInstance_18().get_TISHREI_8hw56l_k$(), 1);
    var kviah = jewishDate.get_cheshvanKislevKviah_ou8twm_k$();
    var roshHashanaDayOfweek = Companion_getInstance_17().toJewishDayOfWeek_8o98we_k$(jewishDate.get_gregorianLocalDate_slbzek_k$().get_dayOfWeek_3kfgci_k$());
    var returnValue = new StringBuilder(this.formatHebrewNumber_ule0m6_k$(roshHashanaDayOfweek));
    var tmp0_subject = kviah;
    returnValue.append_ssq29y_k$(tmp0_subject === Companion_getInstance_18().get_CHASERIM_4wkb3l_k$() ? '\u05D7' : tmp0_subject === Companion_getInstance_18().get_SHELAIMIM_d82d5w_k$() ? '\u05E9' : '\u05DB');
    jewishDate.setJewishDate_x3447l_k$(jewishYear, Companion_getInstance_18().get_NISSAN_1gucpd_k$(), 15);
    var pesachDayOfweek = Companion_getInstance_17().toJewishDayOfWeek_8o98we_k$(jewishDate.get_gregorianLocalDate_slbzek_k$().get_dayOfWeek_3kfgci_k$());
    returnValue.append_ssq29y_k$(this.formatHebrewNumber_ule0m6_k$(pesachDayOfweek));
    var tmp$ret$1;
    // Inline function 'kotlin.text.replace' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.toRegex' call
    var tmp0_toRegex = Companion_getInstance_16().GERESH_1;
    tmp$ret$0 = Regex_init_$Create$(tmp0_toRegex);
    var tmp1_replace = tmp$ret$0;
    tmp$ret$1 = tmp1_replace.replace_838ra0_k$(returnValue, '');
    return tmp$ret$1;
  };
  protoOf(HebrewDateFormatter).formatDafYomiBavli_see8tk_k$ = function (daf) {
    return this.isHebrewFormat_1 ? daf.get_masechta_rc6wu7_k$() + ' ' + this.formatHebrewNumber_ule0m6_k$(daf.get_daf_18j7j4_k$()) : daf.get_masechtaTransliterated_lvszu9_k$() + ' ' + daf.get_daf_18j7j4_k$();
  };
  protoOf(HebrewDateFormatter).formatDafYomiYerushalmi_ulx4fu_k$ = function (daf) {
    if (daf == null)
      return this.isHebrewFormat_1 ? Companion_getInstance_15().get_yerushlmiMasechtos_gspur6_k$()[39] : Companion_getInstance_15().get_yerushlmiMasechtosTransliterated_o1wsjk_k$()[39];
    return this.isHebrewFormat_1 ? daf.get_yerushalmiMasechta_r8bsac_k$() + ' ' + this.formatHebrewNumber_ule0m6_k$(daf.get_daf_18j7j4_k$()) : daf.get_yerushlmiMasechtaTransliterated_5y7kpr_k$() + ' ' + daf.get_daf_18j7j4_k$();
  };
  protoOf(HebrewDateFormatter).formatHebrewNumber_ule0m6_k$ = function (number) {
    var num = number;
    var range = numberRangeToNumber(0, 9999);
    // Inline function 'kotlin.require' call
    var containsLower = range.get_first_irdx8n_k$();
    var tmp0_require = num <= range.get_last_wopotb_k$() ? containsLower <= num : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.kosherjava.zmanim.hebrewcalendar.HebrewDateFormatter.formatHebrewNumber.<anonymous>' call
      tmp$ret$0 = (num < range.get_first_irdx8n_k$() ? 'negative numbers' : 'numbers > ' + range.get_last_wopotb_k$()) + " can't be formatted";
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var ALAFIM = '\u05D0\u05DC\u05E4\u05D9\u05DD';
    var EFES = '\u05D0\u05E4\u05E1';
    var tmp$ret$3;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = ['', '\u05E7', '\u05E8', '\u05E9', '\u05EA', '\u05EA\u05E7', '\u05EA\u05E8', '\u05EA\u05E9', '\u05EA\u05EA', '\u05EA\u05EA\u05E7'];
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var jHundreds = tmp$ret$3;
    var tmp$ret$6;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = ['', '\u05D9', '\u05DB', '\u05DC', '\u05DE', '\u05E0', '\u05E1', '\u05E2', '\u05E4', '\u05E6'];
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    var jTens = tmp$ret$6;
    var tmp$ret$9;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$8;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$7;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$7 = ['', '\u05D9', '\u05DA', '\u05DC', '\u05DD', '\u05DF', '\u05E1', '\u05E2', '\u05E3', '\u05E5'];
    tmp$ret$8 = tmp$ret$7;
    tmp$ret$9 = tmp$ret$8;
    var jTenEnds = tmp$ret$9;
    var tmp$ret$12;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$11;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$10;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$10 = ['\u05D8\u05D5', '\u05D8\u05D6'];
    tmp$ret$11 = tmp$ret$10;
    tmp$ret$12 = tmp$ret$11;
    var tavTaz = tmp$ret$12;
    var tmp$ret$15;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$14;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$13;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$13 = ['', '\u05D0', '\u05D1', '\u05D2', '\u05D3', '\u05D4', '\u05D5', '\u05D6', '\u05D7', '\u05D8'];
    tmp$ret$14 = tmp$ret$13;
    tmp$ret$15 = tmp$ret$14;
    var jOnes = tmp$ret$15;
    if (num === 0)
      return EFES;
    var shortNumber = num % 1000 | 0;
    var singleDigitNumber = (shortNumber < 11 ? true : shortNumber < 100 ? (shortNumber % 10 | 0) === 0 : false) ? true : shortNumber <= 400 ? (shortNumber % 100 | 0) === 0 : false;
    var thousands = num / 1000 | 0;
    var sb = StringBuilder_init_$Create$();
    if ((num % 1000 | 0) === 0) {
      sb.append_ssq29y_k$(jOnes[thousands]);
      if (this.isUseGershGershayim_1) {
        sb.append_ssq29y_k$(Companion_getInstance_16().GERESH_1);
      }
      sb.append_ssq29y_k$(' ');
      sb.append_ssq29y_k$(ALAFIM);
      return sb.toString();
    } else if (this.isUseLongHebrewYears_1 ? num >= 1000 : false) {
      sb.append_ssq29y_k$(jOnes[thousands]);
      if (this.isUseGershGershayim_1) {
        sb.append_ssq29y_k$(Companion_getInstance_16().GERESH_1);
      }
      sb.append_ssq29y_k$(' ');
    }
    num = num % 1000 | 0;
    var hundreds = num / 100 | 0;
    sb.append_ssq29y_k$(jHundreds[hundreds]);
    num = num % 100 | 0;
    switch (num) {
      case 15:
        sb.append_ssq29y_k$(tavTaz[0]);
        ;
        break;
      case 16:
        sb.append_ssq29y_k$(tavTaz[1]);
        ;
        break;
      default:
        var tens = num / 10 | 0;
        if ((num % 10 | 0) === 0) {
          if (!singleDigitNumber) {
            if (this.isUseFinalFormLetters_1) {
              sb.append_ssq29y_k$(jTenEnds[tens]);
            } else {
              sb.append_ssq29y_k$(jTens[tens]);
            }
          } else {
            sb.append_ssq29y_k$(jTens[tens]);
          }
        } else {
          sb.append_ssq29y_k$(jTens[tens]);
          num = num % 10 | 0;
          sb.append_ssq29y_k$(jOnes[num]);
        }

        break;
    }
    if (this.isUseGershGershayim_1) {
      if (singleDigitNumber) {
        sb.append_ssq29y_k$(Companion_getInstance_16().GERESH_1);
      } else {
        sb.insert_eitq2w_k$(sb.get_length_g42xv3_k$() - 1 | 0, Companion_getInstance_16().GERSHAYIM_1);
      }
    }
    return sb.toString();
  };
  protoOf(HebrewDateFormatter).formatParsha_any8al_k$ = function (jewishCalendar) {
    return this.isHebrewFormat_1 ? this.hebrewParshaMap_1.get_1mhr4y_k$(jewishCalendar.get_parshah_buk1ho_k$()) : this.transliteratedParshiosList_1.get_1mhr4y_k$(jewishCalendar.get_parshah_buk1ho_k$());
  };
  protoOf(HebrewDateFormatter).formatSpecialParsha_1ahq42_k$ = function (jewishCalendar) {
    return this.isHebrewFormat_1 ? this.hebrewParshaMap_1.get_1mhr4y_k$(jewishCalendar.get_specialShabbos_2nwun4_k$()) : this.transliteratedParshiosList_1.get_1mhr4y_k$(jewishCalendar.get_specialShabbos_2nwun4_k$());
  };
  var Parsha_NONE_instance;
  var Parsha_BERESHIS_instance;
  var Parsha_NOACH_instance;
  var Parsha_LECH_LECHA_instance;
  var Parsha_VAYERA_instance;
  var Parsha_CHAYEI_SARA_instance;
  var Parsha_TOLDOS_instance;
  var Parsha_VAYETZEI_instance;
  var Parsha_VAYISHLACH_instance;
  var Parsha_VAYESHEV_instance;
  var Parsha_MIKETZ_instance;
  var Parsha_VAYIGASH_instance;
  var Parsha_VAYECHI_instance;
  var Parsha_SHEMOS_instance;
  var Parsha_VAERA_instance;
  var Parsha_BO_instance;
  var Parsha_BESHALACH_instance;
  var Parsha_YISRO_instance;
  var Parsha_MISHPATIM_instance;
  var Parsha_TERUMAH_instance;
  var Parsha_TETZAVEH_instance;
  var Parsha_KI_SISA_instance;
  var Parsha_VAYAKHEL_instance;
  var Parsha_PEKUDEI_instance;
  var Parsha_VAYIKRA_instance;
  var Parsha_TZAV_instance;
  var Parsha_SHMINI_instance;
  var Parsha_TAZRIA_instance;
  var Parsha_METZORA_instance;
  var Parsha_ACHREI_MOS_instance;
  var Parsha_KEDOSHIM_instance;
  var Parsha_EMOR_instance;
  var Parsha_BEHAR_instance;
  var Parsha_BECHUKOSAI_instance;
  var Parsha_BAMIDBAR_instance;
  var Parsha_NASSO_instance;
  var Parsha_BEHAALOSCHA_instance;
  var Parsha_SHLACH_instance;
  var Parsha_KORACH_instance;
  var Parsha_CHUKAS_instance;
  var Parsha_BALAK_instance;
  var Parsha_PINCHAS_instance;
  var Parsha_MATOS_instance;
  var Parsha_MASEI_instance;
  var Parsha_DEVARIM_instance;
  var Parsha_VAESCHANAN_instance;
  var Parsha_EIKEV_instance;
  var Parsha_REEH_instance;
  var Parsha_SHOFTIM_instance;
  var Parsha_KI_SEITZEI_instance;
  var Parsha_KI_SAVO_instance;
  var Parsha_NITZAVIM_instance;
  var Parsha_VAYEILECH_instance;
  var Parsha_HAAZINU_instance;
  var Parsha_VZOS_HABERACHA_instance;
  var Parsha_VAYAKHEL_PEKUDEI_instance;
  var Parsha_TAZRIA_METZORA_instance;
  var Parsha_ACHREI_MOS_KEDOSHIM_instance;
  var Parsha_BEHAR_BECHUKOSAI_instance;
  var Parsha_CHUKAS_BALAK_instance;
  var Parsha_MATOS_MASEI_instance;
  var Parsha_NITZAVIM_VAYEILECH_instance;
  var Parsha_SHKALIM_instance;
  var Parsha_ZACHOR_instance;
  var Parsha_PARA_instance;
  var Parsha_HACHODESH_instance;
  var Parsha_SHUVA_instance;
  var Parsha_SHIRA_instance;
  var Parsha_HAGADOL_instance;
  var Parsha_CHAZON_instance;
  var Parsha_NACHAMU_instance;
  function values() {
    return [Parsha_NONE_getInstance(), Parsha_BERESHIS_getInstance(), Parsha_NOACH_getInstance(), Parsha_LECH_LECHA_getInstance(), Parsha_VAYERA_getInstance(), Parsha_CHAYEI_SARA_getInstance(), Parsha_TOLDOS_getInstance(), Parsha_VAYETZEI_getInstance(), Parsha_VAYISHLACH_getInstance(), Parsha_VAYESHEV_getInstance(), Parsha_MIKETZ_getInstance(), Parsha_VAYIGASH_getInstance(), Parsha_VAYECHI_getInstance(), Parsha_SHEMOS_getInstance(), Parsha_VAERA_getInstance(), Parsha_BO_getInstance(), Parsha_BESHALACH_getInstance(), Parsha_YISRO_getInstance(), Parsha_MISHPATIM_getInstance(), Parsha_TERUMAH_getInstance(), Parsha_TETZAVEH_getInstance(), Parsha_KI_SISA_getInstance(), Parsha_VAYAKHEL_getInstance(), Parsha_PEKUDEI_getInstance(), Parsha_VAYIKRA_getInstance(), Parsha_TZAV_getInstance(), Parsha_SHMINI_getInstance(), Parsha_TAZRIA_getInstance(), Parsha_METZORA_getInstance(), Parsha_ACHREI_MOS_getInstance(), Parsha_KEDOSHIM_getInstance(), Parsha_EMOR_getInstance(), Parsha_BEHAR_getInstance(), Parsha_BECHUKOSAI_getInstance(), Parsha_BAMIDBAR_getInstance(), Parsha_NASSO_getInstance(), Parsha_BEHAALOSCHA_getInstance(), Parsha_SHLACH_getInstance(), Parsha_KORACH_getInstance(), Parsha_CHUKAS_getInstance(), Parsha_BALAK_getInstance(), Parsha_PINCHAS_getInstance(), Parsha_MATOS_getInstance(), Parsha_MASEI_getInstance(), Parsha_DEVARIM_getInstance(), Parsha_VAESCHANAN_getInstance(), Parsha_EIKEV_getInstance(), Parsha_REEH_getInstance(), Parsha_SHOFTIM_getInstance(), Parsha_KI_SEITZEI_getInstance(), Parsha_KI_SAVO_getInstance(), Parsha_NITZAVIM_getInstance(), Parsha_VAYEILECH_getInstance(), Parsha_HAAZINU_getInstance(), Parsha_VZOS_HABERACHA_getInstance(), Parsha_VAYAKHEL_PEKUDEI_getInstance(), Parsha_TAZRIA_METZORA_getInstance(), Parsha_ACHREI_MOS_KEDOSHIM_getInstance(), Parsha_BEHAR_BECHUKOSAI_getInstance(), Parsha_CHUKAS_BALAK_getInstance(), Parsha_MATOS_MASEI_getInstance(), Parsha_NITZAVIM_VAYEILECH_getInstance(), Parsha_SHKALIM_getInstance(), Parsha_ZACHOR_getInstance(), Parsha_PARA_getInstance(), Parsha_HACHODESH_getInstance(), Parsha_SHUVA_getInstance(), Parsha_SHIRA_getInstance(), Parsha_HAGADOL_getInstance(), Parsha_CHAZON_getInstance(), Parsha_NACHAMU_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'NONE':
        return Parsha_NONE_getInstance();
      case 'BERESHIS':
        return Parsha_BERESHIS_getInstance();
      case 'NOACH':
        return Parsha_NOACH_getInstance();
      case 'LECH_LECHA':
        return Parsha_LECH_LECHA_getInstance();
      case 'VAYERA':
        return Parsha_VAYERA_getInstance();
      case 'CHAYEI_SARA':
        return Parsha_CHAYEI_SARA_getInstance();
      case 'TOLDOS':
        return Parsha_TOLDOS_getInstance();
      case 'VAYETZEI':
        return Parsha_VAYETZEI_getInstance();
      case 'VAYISHLACH':
        return Parsha_VAYISHLACH_getInstance();
      case 'VAYESHEV':
        return Parsha_VAYESHEV_getInstance();
      case 'MIKETZ':
        return Parsha_MIKETZ_getInstance();
      case 'VAYIGASH':
        return Parsha_VAYIGASH_getInstance();
      case 'VAYECHI':
        return Parsha_VAYECHI_getInstance();
      case 'SHEMOS':
        return Parsha_SHEMOS_getInstance();
      case 'VAERA':
        return Parsha_VAERA_getInstance();
      case 'BO':
        return Parsha_BO_getInstance();
      case 'BESHALACH':
        return Parsha_BESHALACH_getInstance();
      case 'YISRO':
        return Parsha_YISRO_getInstance();
      case 'MISHPATIM':
        return Parsha_MISHPATIM_getInstance();
      case 'TERUMAH':
        return Parsha_TERUMAH_getInstance();
      case 'TETZAVEH':
        return Parsha_TETZAVEH_getInstance();
      case 'KI_SISA':
        return Parsha_KI_SISA_getInstance();
      case 'VAYAKHEL':
        return Parsha_VAYAKHEL_getInstance();
      case 'PEKUDEI':
        return Parsha_PEKUDEI_getInstance();
      case 'VAYIKRA':
        return Parsha_VAYIKRA_getInstance();
      case 'TZAV':
        return Parsha_TZAV_getInstance();
      case 'SHMINI':
        return Parsha_SHMINI_getInstance();
      case 'TAZRIA':
        return Parsha_TAZRIA_getInstance();
      case 'METZORA':
        return Parsha_METZORA_getInstance();
      case 'ACHREI_MOS':
        return Parsha_ACHREI_MOS_getInstance();
      case 'KEDOSHIM':
        return Parsha_KEDOSHIM_getInstance();
      case 'EMOR':
        return Parsha_EMOR_getInstance();
      case 'BEHAR':
        return Parsha_BEHAR_getInstance();
      case 'BECHUKOSAI':
        return Parsha_BECHUKOSAI_getInstance();
      case 'BAMIDBAR':
        return Parsha_BAMIDBAR_getInstance();
      case 'NASSO':
        return Parsha_NASSO_getInstance();
      case 'BEHAALOSCHA':
        return Parsha_BEHAALOSCHA_getInstance();
      case 'SHLACH':
        return Parsha_SHLACH_getInstance();
      case 'KORACH':
        return Parsha_KORACH_getInstance();
      case 'CHUKAS':
        return Parsha_CHUKAS_getInstance();
      case 'BALAK':
        return Parsha_BALAK_getInstance();
      case 'PINCHAS':
        return Parsha_PINCHAS_getInstance();
      case 'MATOS':
        return Parsha_MATOS_getInstance();
      case 'MASEI':
        return Parsha_MASEI_getInstance();
      case 'DEVARIM':
        return Parsha_DEVARIM_getInstance();
      case 'VAESCHANAN':
        return Parsha_VAESCHANAN_getInstance();
      case 'EIKEV':
        return Parsha_EIKEV_getInstance();
      case 'REEH':
        return Parsha_REEH_getInstance();
      case 'SHOFTIM':
        return Parsha_SHOFTIM_getInstance();
      case 'KI_SEITZEI':
        return Parsha_KI_SEITZEI_getInstance();
      case 'KI_SAVO':
        return Parsha_KI_SAVO_getInstance();
      case 'NITZAVIM':
        return Parsha_NITZAVIM_getInstance();
      case 'VAYEILECH':
        return Parsha_VAYEILECH_getInstance();
      case 'HAAZINU':
        return Parsha_HAAZINU_getInstance();
      case 'VZOS_HABERACHA':
        return Parsha_VZOS_HABERACHA_getInstance();
      case 'VAYAKHEL_PEKUDEI':
        return Parsha_VAYAKHEL_PEKUDEI_getInstance();
      case 'TAZRIA_METZORA':
        return Parsha_TAZRIA_METZORA_getInstance();
      case 'ACHREI_MOS_KEDOSHIM':
        return Parsha_ACHREI_MOS_KEDOSHIM_getInstance();
      case 'BEHAR_BECHUKOSAI':
        return Parsha_BEHAR_BECHUKOSAI_getInstance();
      case 'CHUKAS_BALAK':
        return Parsha_CHUKAS_BALAK_getInstance();
      case 'MATOS_MASEI':
        return Parsha_MATOS_MASEI_getInstance();
      case 'NITZAVIM_VAYEILECH':
        return Parsha_NITZAVIM_VAYEILECH_getInstance();
      case 'SHKALIM':
        return Parsha_SHKALIM_getInstance();
      case 'ZACHOR':
        return Parsha_ZACHOR_getInstance();
      case 'PARA':
        return Parsha_PARA_getInstance();
      case 'HACHODESH':
        return Parsha_HACHODESH_getInstance();
      case 'SHUVA':
        return Parsha_SHUVA_getInstance();
      case 'SHIRA':
        return Parsha_SHIRA_getInstance();
      case 'HAGADOL':
        return Parsha_HAGADOL_getInstance();
      case 'CHAZON':
        return Parsha_CHAZON_getInstance();
      case 'NACHAMU':
        return Parsha_NACHAMU_getInstance();
      default:
        Parsha_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Parsha_entriesInitialized;
  function Parsha_initEntries() {
    if (Parsha_entriesInitialized)
      return Unit_getInstance();
    Parsha_entriesInitialized = true;
    Parsha_NONE_instance = new Parsha('NONE', 0);
    Parsha_BERESHIS_instance = new Parsha('BERESHIS', 1);
    Parsha_NOACH_instance = new Parsha('NOACH', 2);
    Parsha_LECH_LECHA_instance = new Parsha('LECH_LECHA', 3);
    Parsha_VAYERA_instance = new Parsha('VAYERA', 4);
    Parsha_CHAYEI_SARA_instance = new Parsha('CHAYEI_SARA', 5);
    Parsha_TOLDOS_instance = new Parsha('TOLDOS', 6);
    Parsha_VAYETZEI_instance = new Parsha('VAYETZEI', 7);
    Parsha_VAYISHLACH_instance = new Parsha('VAYISHLACH', 8);
    Parsha_VAYESHEV_instance = new Parsha('VAYESHEV', 9);
    Parsha_MIKETZ_instance = new Parsha('MIKETZ', 10);
    Parsha_VAYIGASH_instance = new Parsha('VAYIGASH', 11);
    Parsha_VAYECHI_instance = new Parsha('VAYECHI', 12);
    Parsha_SHEMOS_instance = new Parsha('SHEMOS', 13);
    Parsha_VAERA_instance = new Parsha('VAERA', 14);
    Parsha_BO_instance = new Parsha('BO', 15);
    Parsha_BESHALACH_instance = new Parsha('BESHALACH', 16);
    Parsha_YISRO_instance = new Parsha('YISRO', 17);
    Parsha_MISHPATIM_instance = new Parsha('MISHPATIM', 18);
    Parsha_TERUMAH_instance = new Parsha('TERUMAH', 19);
    Parsha_TETZAVEH_instance = new Parsha('TETZAVEH', 20);
    Parsha_KI_SISA_instance = new Parsha('KI_SISA', 21);
    Parsha_VAYAKHEL_instance = new Parsha('VAYAKHEL', 22);
    Parsha_PEKUDEI_instance = new Parsha('PEKUDEI', 23);
    Parsha_VAYIKRA_instance = new Parsha('VAYIKRA', 24);
    Parsha_TZAV_instance = new Parsha('TZAV', 25);
    Parsha_SHMINI_instance = new Parsha('SHMINI', 26);
    Parsha_TAZRIA_instance = new Parsha('TAZRIA', 27);
    Parsha_METZORA_instance = new Parsha('METZORA', 28);
    Parsha_ACHREI_MOS_instance = new Parsha('ACHREI_MOS', 29);
    Parsha_KEDOSHIM_instance = new Parsha('KEDOSHIM', 30);
    Parsha_EMOR_instance = new Parsha('EMOR', 31);
    Parsha_BEHAR_instance = new Parsha('BEHAR', 32);
    Parsha_BECHUKOSAI_instance = new Parsha('BECHUKOSAI', 33);
    Parsha_BAMIDBAR_instance = new Parsha('BAMIDBAR', 34);
    Parsha_NASSO_instance = new Parsha('NASSO', 35);
    Parsha_BEHAALOSCHA_instance = new Parsha('BEHAALOSCHA', 36);
    Parsha_SHLACH_instance = new Parsha('SHLACH', 37);
    Parsha_KORACH_instance = new Parsha('KORACH', 38);
    Parsha_CHUKAS_instance = new Parsha('CHUKAS', 39);
    Parsha_BALAK_instance = new Parsha('BALAK', 40);
    Parsha_PINCHAS_instance = new Parsha('PINCHAS', 41);
    Parsha_MATOS_instance = new Parsha('MATOS', 42);
    Parsha_MASEI_instance = new Parsha('MASEI', 43);
    Parsha_DEVARIM_instance = new Parsha('DEVARIM', 44);
    Parsha_VAESCHANAN_instance = new Parsha('VAESCHANAN', 45);
    Parsha_EIKEV_instance = new Parsha('EIKEV', 46);
    Parsha_REEH_instance = new Parsha('REEH', 47);
    Parsha_SHOFTIM_instance = new Parsha('SHOFTIM', 48);
    Parsha_KI_SEITZEI_instance = new Parsha('KI_SEITZEI', 49);
    Parsha_KI_SAVO_instance = new Parsha('KI_SAVO', 50);
    Parsha_NITZAVIM_instance = new Parsha('NITZAVIM', 51);
    Parsha_VAYEILECH_instance = new Parsha('VAYEILECH', 52);
    Parsha_HAAZINU_instance = new Parsha('HAAZINU', 53);
    Parsha_VZOS_HABERACHA_instance = new Parsha('VZOS_HABERACHA', 54);
    Parsha_VAYAKHEL_PEKUDEI_instance = new Parsha('VAYAKHEL_PEKUDEI', 55);
    Parsha_TAZRIA_METZORA_instance = new Parsha('TAZRIA_METZORA', 56);
    Parsha_ACHREI_MOS_KEDOSHIM_instance = new Parsha('ACHREI_MOS_KEDOSHIM', 57);
    Parsha_BEHAR_BECHUKOSAI_instance = new Parsha('BEHAR_BECHUKOSAI', 58);
    Parsha_CHUKAS_BALAK_instance = new Parsha('CHUKAS_BALAK', 59);
    Parsha_MATOS_MASEI_instance = new Parsha('MATOS_MASEI', 60);
    Parsha_NITZAVIM_VAYEILECH_instance = new Parsha('NITZAVIM_VAYEILECH', 61);
    Parsha_SHKALIM_instance = new Parsha('SHKALIM', 62);
    Parsha_ZACHOR_instance = new Parsha('ZACHOR', 63);
    Parsha_PARA_instance = new Parsha('PARA', 64);
    Parsha_HACHODESH_instance = new Parsha('HACHODESH', 65);
    Parsha_SHUVA_instance = new Parsha('SHUVA', 66);
    Parsha_SHIRA_instance = new Parsha('SHIRA', 67);
    Parsha_HAGADOL_instance = new Parsha('HAGADOL', 68);
    Parsha_CHAZON_instance = new Parsha('CHAZON', 69);
    Parsha_NACHAMU_instance = new Parsha('NACHAMU', 70);
  }
  function Parsha(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function JewishCalendar_init_$Init$($this) {
    JewishDate_init_$Init$_2($this);
    JewishCalendar.call($this);
    return $this;
  }
  function JewishCalendar_init_$Create$() {
    return JewishCalendar_init_$Init$(objectCreate(protoOf(JewishCalendar)));
  }
  function JewishCalendar_init_$Init$_0(date, $this) {
    JewishDate_init_$Init$_1(toLocalDateTime(date, Companion_getInstance_0().currentSystemDefault_9rduv_k$()).get_date_wokkxj_k$(), $this);
    JewishCalendar.call($this);
    return $this;
  }
  function JewishCalendar_init_$Create$_0(date) {
    return JewishCalendar_init_$Init$_0(date, objectCreate(protoOf(JewishCalendar)));
  }
  function JewishCalendar_init_$Init$_1(date, $this) {
    JewishDate_init_$Init$_1(date, $this);
    JewishCalendar.call($this);
    return $this;
  }
  function JewishCalendar_init_$Create$_1(date) {
    return JewishCalendar_init_$Init$_1(date, objectCreate(protoOf(JewishCalendar)));
  }
  function JewishCalendar_init_$Init$_2(jewishYear, jewishMonth, jewishDayOfMonth, $this) {
    JewishDate_init_$Init$_0(jewishYear, jewishMonth, jewishDayOfMonth, $this);
    JewishCalendar.call($this);
    return $this;
  }
  function JewishCalendar_init_$Create$_2(jewishYear, jewishMonth, jewishDayOfMonth) {
    return JewishCalendar_init_$Init$_2(jewishYear, jewishMonth, jewishDayOfMonth, objectCreate(protoOf(JewishCalendar)));
  }
  function JewishCalendar_init_$Init$_3(jewishYear, jewishMonth, jewishDayOfMonth, inIsrael, $this) {
    JewishDate_init_$Init$_0(jewishYear, jewishMonth, jewishDayOfMonth, $this);
    JewishCalendar.call($this);
    $this.inIsrael_1 = inIsrael;
    return $this;
  }
  function JewishCalendar_init_$Create$_3(jewishYear, jewishMonth, jewishDayOfMonth, inIsrael) {
    return JewishCalendar_init_$Init$_3(jewishYear, jewishMonth, jewishDayOfMonth, inIsrael, objectCreate(protoOf(JewishCalendar)));
  }
  function _get_parshaYearType__h96vyv($this) {
    var roshHashanaDayOfWeek = (Companion_getInstance_18().getJewishCalendarElapsedDays_fz890_k$($this.get_jewishYear_9oxc94_k$()) + 1 | 0) % 7 | 0;
    if (roshHashanaDayOfWeek === 0) {
      roshHashanaDayOfWeek = 7;
    }
    if ($this.get_isJewishLeapYear_rd302u_k$()) {
      var tmp0_subject = roshHashanaDayOfWeek;
      Companion_getInstance_17();
      if (tmp0_subject === 2) {
        if ($this.get_isKislevShort_db8add_k$())
          return $this.inIsrael_1 ? 14 : 6;
        else if ($this.get_isCheshvanLong_f03r7_k$())
          return $this.inIsrael_1 ? 15 : 7;
      } else {
        Companion_getInstance_17();
        if (tmp0_subject === 3) {
          return $this.inIsrael_1 ? 15 : 7;
        } else {
          Companion_getInstance_17();
          if (tmp0_subject === 5) {
            if ($this.get_isKislevShort_db8add_k$())
              return 8;
            if ($this.get_isCheshvanLong_f03r7_k$())
              return 9;
          } else {
            Companion_getInstance_17();
            if (tmp0_subject === 7) {
              if ($this.get_isKislevShort_db8add_k$())
                return 10;
              if ($this.get_isCheshvanLong_f03r7_k$())
                return $this.inIsrael_1 ? 16 : 11;
            }
          }
        }
      }
    } else {
      var tmp1_subject = roshHashanaDayOfWeek;
      Companion_getInstance_17();
      if (tmp1_subject === 2) {
        if ($this.get_isKislevShort_db8add_k$())
          return 0;
        if ($this.get_isCheshvanLong_f03r7_k$())
          return $this.inIsrael_1 ? 12 : 1;
      } else {
        Companion_getInstance_17();
        if (tmp1_subject === 3) {
          return $this.inIsrael_1 ? 12 : 1;
        } else {
          Companion_getInstance_17();
          if (tmp1_subject === 5) {
            if ($this.get_isCheshvanLong_f03r7_k$())
              return 3;
            if (!$this.get_isKislevShort_db8add_k$())
              return $this.inIsrael_1 ? 13 : 2;
          } else {
            Companion_getInstance_17();
            if (tmp1_subject === 7) {
              if ($this.get_isKislevShort_db8add_k$())
                return 4;
              if ($this.get_isCheshvanLong_f03r7_k$())
                return 5;
            }
          }
        }
      }
    }
    return -1;
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.NO_HOLIDAY_1 = -1;
    this.EREV_PESACH_1 = 0;
    this.PESACH_1 = 1;
    this.CHOL_HAMOED_PESACH_1 = 2;
    this.PESACH_SHENI_1 = 3;
    this.EREV_SHAVUOS_1 = 4;
    this.SHAVUOS_1 = 5;
    this.SEVENTEEN_OF_TAMMUZ_1 = 6;
    this.TISHA_BEAV_1 = 7;
    this.TU_BEAV_1 = 8;
    this.EREV_ROSH_HASHANA_1 = 9;
    this.ROSH_HASHANA_1 = 10;
    this.FAST_OF_GEDALYAH_1 = 11;
    this.EREV_YOM_KIPPUR_1 = 12;
    this.YOM_KIPPUR_1 = 13;
    this.EREV_SUCCOS_1 = 14;
    this.SUCCOS_1 = 15;
    this.CHOL_HAMOED_SUCCOS_1 = 16;
    this.HOSHANA_RABBA_1 = 17;
    this.SHEMINI_ATZERES_1 = 18;
    this.SIMCHAS_TORAH_1 = 19;
    this.CHANUKAH_1 = 21;
    this.TENTH_OF_TEVES_1 = 22;
    this.TU_BESHVAT_1 = 23;
    this.FAST_OF_ESTHER_1 = 24;
    this.PURIM_1 = 25;
    this.SHUSHAN_PURIM_1 = 26;
    this.PURIM_KATAN_1 = 27;
    this.ROSH_CHODESH_1 = 28;
    this.YOM_HASHOAH_1 = 29;
    this.YOM_HAZIKARON_1 = 30;
    this.YOM_HAATZMAUT_1 = 31;
    this.YOM_YERUSHALAYIM_1 = 32;
    this.LAG_BAOMER_1 = 33;
    this.SHUSHAN_PURIM_KATAN_1 = 34;
    this.ISRU_CHAG_1 = 35;
    this.YOM_KIPPUR_KATAN_1 = 36;
    this.BEHAB_1 = 37;
    var tmp = this;
    var tmp$ret$53;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [Parsha_NONE_getInstance(), Parsha_VAYEILECH_getInstance(), Parsha_HAAZINU_getInstance(), Parsha_NONE_getInstance(), Parsha_BERESHIS_getInstance(), Parsha_NOACH_getInstance(), Parsha_LECH_LECHA_getInstance(), Parsha_VAYERA_getInstance(), Parsha_CHAYEI_SARA_getInstance(), Parsha_TOLDOS_getInstance(), Parsha_VAYETZEI_getInstance(), Parsha_VAYISHLACH_getInstance(), Parsha_VAYESHEV_getInstance(), Parsha_MIKETZ_getInstance(), Parsha_VAYIGASH_getInstance(), Parsha_VAYECHI_getInstance(), Parsha_SHEMOS_getInstance(), Parsha_VAERA_getInstance(), Parsha_BO_getInstance(), Parsha_BESHALACH_getInstance(), Parsha_YISRO_getInstance(), Parsha_MISHPATIM_getInstance(), Parsha_TERUMAH_getInstance(), Parsha_TETZAVEH_getInstance(), Parsha_KI_SISA_getInstance(), Parsha_VAYAKHEL_PEKUDEI_getInstance(), Parsha_VAYIKRA_getInstance(), Parsha_TZAV_getInstance(), Parsha_NONE_getInstance(), Parsha_SHMINI_getInstance(), Parsha_TAZRIA_METZORA_getInstance(), Parsha_ACHREI_MOS_KEDOSHIM_getInstance(), Parsha_EMOR_getInstance(), Parsha_BEHAR_BECHUKOSAI_getInstance(), Parsha_BAMIDBAR_getInstance(), Parsha_NASSO_getInstance(), Parsha_BEHAALOSCHA_getInstance(), Parsha_SHLACH_getInstance(), Parsha_KORACH_getInstance(), Parsha_CHUKAS_getInstance(), Parsha_BALAK_getInstance(), Parsha_PINCHAS_getInstance(), Parsha_MATOS_MASEI_getInstance(), Parsha_DEVARIM_getInstance(), Parsha_VAESCHANAN_getInstance(), Parsha_EIKEV_getInstance(), Parsha_REEH_getInstance(), Parsha_SHOFTIM_getInstance(), Parsha_KI_SEITZEI_getInstance(), Parsha_KI_SAVO_getInstance(), Parsha_NITZAVIM_VAYEILECH_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp_0 = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'kotlin.arrayOf' call
    var tmp1_arrayOf = [Parsha_NONE_getInstance(), Parsha_VAYEILECH_getInstance(), Parsha_HAAZINU_getInstance(), Parsha_NONE_getInstance(), Parsha_BERESHIS_getInstance(), Parsha_NOACH_getInstance(), Parsha_LECH_LECHA_getInstance(), Parsha_VAYERA_getInstance(), Parsha_CHAYEI_SARA_getInstance(), Parsha_TOLDOS_getInstance(), Parsha_VAYETZEI_getInstance(), Parsha_VAYISHLACH_getInstance(), Parsha_VAYESHEV_getInstance(), Parsha_MIKETZ_getInstance(), Parsha_VAYIGASH_getInstance(), Parsha_VAYECHI_getInstance(), Parsha_SHEMOS_getInstance(), Parsha_VAERA_getInstance(), Parsha_BO_getInstance(), Parsha_BESHALACH_getInstance(), Parsha_YISRO_getInstance(), Parsha_MISHPATIM_getInstance(), Parsha_TERUMAH_getInstance(), Parsha_TETZAVEH_getInstance(), Parsha_KI_SISA_getInstance(), Parsha_VAYAKHEL_PEKUDEI_getInstance(), Parsha_VAYIKRA_getInstance(), Parsha_TZAV_getInstance(), Parsha_NONE_getInstance(), Parsha_SHMINI_getInstance(), Parsha_TAZRIA_METZORA_getInstance(), Parsha_ACHREI_MOS_KEDOSHIM_getInstance(), Parsha_EMOR_getInstance(), Parsha_BEHAR_BECHUKOSAI_getInstance(), Parsha_BAMIDBAR_getInstance(), Parsha_NONE_getInstance(), Parsha_NASSO_getInstance(), Parsha_BEHAALOSCHA_getInstance(), Parsha_SHLACH_getInstance(), Parsha_KORACH_getInstance(), Parsha_CHUKAS_BALAK_getInstance(), Parsha_PINCHAS_getInstance(), Parsha_MATOS_MASEI_getInstance(), Parsha_DEVARIM_getInstance(), Parsha_VAESCHANAN_getInstance(), Parsha_EIKEV_getInstance(), Parsha_REEH_getInstance(), Parsha_SHOFTIM_getInstance(), Parsha_KI_SEITZEI_getInstance(), Parsha_KI_SAVO_getInstance(), Parsha_NITZAVIM_VAYEILECH_getInstance()];
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = tmp1_arrayOf;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    var tmp_1 = tmp$ret$5;
    var tmp$ret$8;
    // Inline function 'kotlin.arrayOf' call
    var tmp2_arrayOf = [Parsha_NONE_getInstance(), Parsha_HAAZINU_getInstance(), Parsha_NONE_getInstance(), Parsha_NONE_getInstance(), Parsha_BERESHIS_getInstance(), Parsha_NOACH_getInstance(), Parsha_LECH_LECHA_getInstance(), Parsha_VAYERA_getInstance(), Parsha_CHAYEI_SARA_getInstance(), Parsha_TOLDOS_getInstance(), Parsha_VAYETZEI_getInstance(), Parsha_VAYISHLACH_getInstance(), Parsha_VAYESHEV_getInstance(), Parsha_MIKETZ_getInstance(), Parsha_VAYIGASH_getInstance(), Parsha_VAYECHI_getInstance(), Parsha_SHEMOS_getInstance(), Parsha_VAERA_getInstance(), Parsha_BO_getInstance(), Parsha_BESHALACH_getInstance(), Parsha_YISRO_getInstance(), Parsha_MISHPATIM_getInstance(), Parsha_TERUMAH_getInstance(), Parsha_TETZAVEH_getInstance(), Parsha_KI_SISA_getInstance(), Parsha_VAYAKHEL_PEKUDEI_getInstance(), Parsha_VAYIKRA_getInstance(), Parsha_TZAV_getInstance(), Parsha_NONE_getInstance(), Parsha_NONE_getInstance(), Parsha_SHMINI_getInstance(), Parsha_TAZRIA_METZORA_getInstance(), Parsha_ACHREI_MOS_KEDOSHIM_getInstance(), Parsha_EMOR_getInstance(), Parsha_BEHAR_BECHUKOSAI_getInstance(), Parsha_BAMIDBAR_getInstance(), Parsha_NASSO_getInstance(), Parsha_BEHAALOSCHA_getInstance(), Parsha_SHLACH_getInstance(), Parsha_KORACH_getInstance(), Parsha_CHUKAS_getInstance(), Parsha_BALAK_getInstance(), Parsha_PINCHAS_getInstance(), Parsha_MATOS_MASEI_getInstance(), Parsha_DEVARIM_getInstance(), Parsha_VAESCHANAN_getInstance(), Parsha_EIKEV_getInstance(), Parsha_REEH_getInstance(), Parsha_SHOFTIM_getInstance(), Parsha_KI_SEITZEI_getInstance(), Parsha_KI_SAVO_getInstance(), Parsha_NITZAVIM_getInstance()];
    var tmp$ret$7;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$6;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$6 = tmp2_arrayOf;
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7;
    var tmp_2 = tmp$ret$8;
    var tmp$ret$11;
    // Inline function 'kotlin.arrayOf' call
    var tmp3_arrayOf = [Parsha_NONE_getInstance(), Parsha_HAAZINU_getInstance(), Parsha_NONE_getInstance(), Parsha_NONE_getInstance(), Parsha_BERESHIS_getInstance(), Parsha_NOACH_getInstance(), Parsha_LECH_LECHA_getInstance(), Parsha_VAYERA_getInstance(), Parsha_CHAYEI_SARA_getInstance(), Parsha_TOLDOS_getInstance(), Parsha_VAYETZEI_getInstance(), Parsha_VAYISHLACH_getInstance(), Parsha_VAYESHEV_getInstance(), Parsha_MIKETZ_getInstance(), Parsha_VAYIGASH_getInstance(), Parsha_VAYECHI_getInstance(), Parsha_SHEMOS_getInstance(), Parsha_VAERA_getInstance(), Parsha_BO_getInstance(), Parsha_BESHALACH_getInstance(), Parsha_YISRO_getInstance(), Parsha_MISHPATIM_getInstance(), Parsha_TERUMAH_getInstance(), Parsha_TETZAVEH_getInstance(), Parsha_KI_SISA_getInstance(), Parsha_VAYAKHEL_getInstance(), Parsha_PEKUDEI_getInstance(), Parsha_VAYIKRA_getInstance(), Parsha_TZAV_getInstance(), Parsha_NONE_getInstance(), Parsha_SHMINI_getInstance(), Parsha_TAZRIA_METZORA_getInstance(), Parsha_ACHREI_MOS_KEDOSHIM_getInstance(), Parsha_EMOR_getInstance(), Parsha_BEHAR_BECHUKOSAI_getInstance(), Parsha_BAMIDBAR_getInstance(), Parsha_NASSO_getInstance(), Parsha_BEHAALOSCHA_getInstance(), Parsha_SHLACH_getInstance(), Parsha_KORACH_getInstance(), Parsha_CHUKAS_getInstance(), Parsha_BALAK_getInstance(), Parsha_PINCHAS_getInstance(), Parsha_MATOS_MASEI_getInstance(), Parsha_DEVARIM_getInstance(), Parsha_VAESCHANAN_getInstance(), Parsha_EIKEV_getInstance(), Parsha_REEH_getInstance(), Parsha_SHOFTIM_getInstance(), Parsha_KI_SEITZEI_getInstance(), Parsha_KI_SAVO_getInstance(), Parsha_NITZAVIM_getInstance()];
    var tmp$ret$10;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$9;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$9 = tmp3_arrayOf;
    tmp$ret$10 = tmp$ret$9;
    tmp$ret$11 = tmp$ret$10;
    var tmp_3 = tmp$ret$11;
    var tmp$ret$14;
    // Inline function 'kotlin.arrayOf' call
    var tmp4_arrayOf = [Parsha_NONE_getInstance(), Parsha_NONE_getInstance(), Parsha_HAAZINU_getInstance(), Parsha_NONE_getInstance(), Parsha_NONE_getInstance(), Parsha_BERESHIS_getInstance(), Parsha_NOACH_getInstance(), Parsha_LECH_LECHA_getInstance(), Parsha_VAYERA_getInstance(), Parsha_CHAYEI_SARA_getInstance(), Parsha_TOLDOS_getInstance(), Parsha_VAYETZEI_getInstance(), Parsha_VAYISHLACH_getInstance(), Parsha_VAYESHEV_getInstance(), Parsha_MIKETZ_getInstance(), Parsha_VAYIGASH_getInstance(), Parsha_VAYECHI_getInstance(), Parsha_SHEMOS_getInstance(), Parsha_VAERA_getInstance(), Parsha_BO_getInstance(), Parsha_BESHALACH_getInstance(), Parsha_YISRO_getInstance(), Parsha_MISHPATIM_getInstance(), Parsha_TERUMAH_getInstance(), Parsha_TETZAVEH_getInstance(), Parsha_KI_SISA_getInstance(), Parsha_VAYAKHEL_PEKUDEI_getInstance(), Parsha_VAYIKRA_getInstance(), Parsha_TZAV_getInstance(), Parsha_NONE_getInstance(), Parsha_SHMINI_getInstance(), Parsha_TAZRIA_METZORA_getInstance(), Parsha_ACHREI_MOS_KEDOSHIM_getInstance(), Parsha_EMOR_getInstance(), Parsha_BEHAR_BECHUKOSAI_getInstance(), Parsha_BAMIDBAR_getInstance(), Parsha_NASSO_getInstance(), Parsha_BEHAALOSCHA_getInstance(), Parsha_SHLACH_getInstance(), Parsha_KORACH_getInstance(), Parsha_CHUKAS_getInstance(), Parsha_BALAK_getInstance(), Parsha_PINCHAS_getInstance(), Parsha_MATOS_MASEI_getInstance(), Parsha_DEVARIM_getInstance(), Parsha_VAESCHANAN_getInstance(), Parsha_EIKEV_getInstance(), Parsha_REEH_getInstance(), Parsha_SHOFTIM_getInstance(), Parsha_KI_SEITZEI_getInstance(), Parsha_KI_SAVO_getInstance(), Parsha_NITZAVIM_getInstance()];
    var tmp$ret$13;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$12;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$12 = tmp4_arrayOf;
    tmp$ret$13 = tmp$ret$12;
    tmp$ret$14 = tmp$ret$13;
    var tmp_4 = tmp$ret$14;
    var tmp$ret$17;
    // Inline function 'kotlin.arrayOf' call
    var tmp5_arrayOf = [Parsha_NONE_getInstance(), Parsha_NONE_getInstance(), Parsha_HAAZINU_getInstance(), Parsha_NONE_getInstance(), Parsha_NONE_getInstance(), Parsha_BERESHIS_getInstance(), Parsha_NOACH_getInstance(), Parsha_LECH_LECHA_getInstance(), Parsha_VAYERA_getInstance(), Parsha_CHAYEI_SARA_getInstance(), Parsha_TOLDOS_getInstance(), Parsha_VAYETZEI_getInstance(), Parsha_VAYISHLACH_getInstance(), Parsha_VAYESHEV_getInstance(), Parsha_MIKETZ_getInstance(), Parsha_VAYIGASH_getInstance(), Parsha_VAYECHI_getInstance(), Parsha_SHEMOS_getInstance(), Parsha_VAERA_getInstance(), Parsha_BO_getInstance(), Parsha_BESHALACH_getInstance(), Parsha_YISRO_getInstance(), Parsha_MISHPATIM_getInstance(), Parsha_TERUMAH_getInstance(), Parsha_TETZAVEH_getInstance(), Parsha_KI_SISA_getInstance(), Parsha_VAYAKHEL_PEKUDEI_getInstance(), Parsha_VAYIKRA_getInstance(), Parsha_TZAV_getInstance(), Parsha_NONE_getInstance(), Parsha_SHMINI_getInstance(), Parsha_TAZRIA_METZORA_getInstance(), Parsha_ACHREI_MOS_KEDOSHIM_getInstance(), Parsha_EMOR_getInstance(), Parsha_BEHAR_BECHUKOSAI_getInstance(), Parsha_BAMIDBAR_getInstance(), Parsha_NASSO_getInstance(), Parsha_BEHAALOSCHA_getInstance(), Parsha_SHLACH_getInstance(), Parsha_KORACH_getInstance(), Parsha_CHUKAS_getInstance(), Parsha_BALAK_getInstance(), Parsha_PINCHAS_getInstance(), Parsha_MATOS_MASEI_getInstance(), Parsha_DEVARIM_getInstance(), Parsha_VAESCHANAN_getInstance(), Parsha_EIKEV_getInstance(), Parsha_REEH_getInstance(), Parsha_SHOFTIM_getInstance(), Parsha_KI_SEITZEI_getInstance(), Parsha_KI_SAVO_getInstance(), Parsha_NITZAVIM_VAYEILECH_getInstance()];
    var tmp$ret$16;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$15;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$15 = tmp5_arrayOf;
    tmp$ret$16 = tmp$ret$15;
    tmp$ret$17 = tmp$ret$16;
    var tmp_5 = tmp$ret$17;
    var tmp$ret$20;
    // Inline function 'kotlin.arrayOf' call
    var tmp6_arrayOf = [Parsha_NONE_getInstance(), Parsha_VAYEILECH_getInstance(), Parsha_HAAZINU_getInstance(), Parsha_NONE_getInstance(), Parsha_BERESHIS_getInstance(), Parsha_NOACH_getInstance(), Parsha_LECH_LECHA_getInstance(), Parsha_VAYERA_getInstance(), Parsha_CHAYEI_SARA_getInstance(), Parsha_TOLDOS_getInstance(), Parsha_VAYETZEI_getInstance(), Parsha_VAYISHLACH_getInstance(), Parsha_VAYESHEV_getInstance(), Parsha_MIKETZ_getInstance(), Parsha_VAYIGASH_getInstance(), Parsha_VAYECHI_getInstance(), Parsha_SHEMOS_getInstance(), Parsha_VAERA_getInstance(), Parsha_BO_getInstance(), Parsha_BESHALACH_getInstance(), Parsha_YISRO_getInstance(), Parsha_MISHPATIM_getInstance(), Parsha_TERUMAH_getInstance(), Parsha_TETZAVEH_getInstance(), Parsha_KI_SISA_getInstance(), Parsha_VAYAKHEL_getInstance(), Parsha_PEKUDEI_getInstance(), Parsha_VAYIKRA_getInstance(), Parsha_TZAV_getInstance(), Parsha_SHMINI_getInstance(), Parsha_TAZRIA_getInstance(), Parsha_METZORA_getInstance(), Parsha_NONE_getInstance(), Parsha_ACHREI_MOS_getInstance(), Parsha_KEDOSHIM_getInstance(), Parsha_EMOR_getInstance(), Parsha_BEHAR_getInstance(), Parsha_BECHUKOSAI_getInstance(), Parsha_BAMIDBAR_getInstance(), Parsha_NONE_getInstance(), Parsha_NASSO_getInstance(), Parsha_BEHAALOSCHA_getInstance(), Parsha_SHLACH_getInstance(), Parsha_KORACH_getInstance(), Parsha_CHUKAS_BALAK_getInstance(), Parsha_PINCHAS_getInstance(), Parsha_MATOS_MASEI_getInstance(), Parsha_DEVARIM_getInstance(), Parsha_VAESCHANAN_getInstance(), Parsha_EIKEV_getInstance(), Parsha_REEH_getInstance(), Parsha_SHOFTIM_getInstance(), Parsha_KI_SEITZEI_getInstance(), Parsha_KI_SAVO_getInstance(), Parsha_NITZAVIM_VAYEILECH_getInstance()];
    var tmp$ret$19;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$18;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$18 = tmp6_arrayOf;
    tmp$ret$19 = tmp$ret$18;
    tmp$ret$20 = tmp$ret$19;
    var tmp_6 = tmp$ret$20;
    var tmp$ret$23;
    // Inline function 'kotlin.arrayOf' call
    var tmp7_arrayOf = [Parsha_NONE_getInstance(), Parsha_VAYEILECH_getInstance(), Parsha_HAAZINU_getInstance(), Parsha_NONE_getInstance(), Parsha_BERESHIS_getInstance(), Parsha_NOACH_getInstance(), Parsha_LECH_LECHA_getInstance(), Parsha_VAYERA_getInstance(), Parsha_CHAYEI_SARA_getInstance(), Parsha_TOLDOS_getInstance(), Parsha_VAYETZEI_getInstance(), Parsha_VAYISHLACH_getInstance(), Parsha_VAYESHEV_getInstance(), Parsha_MIKETZ_getInstance(), Parsha_VAYIGASH_getInstance(), Parsha_VAYECHI_getInstance(), Parsha_SHEMOS_getInstance(), Parsha_VAERA_getInstance(), Parsha_BO_getInstance(), Parsha_BESHALACH_getInstance(), Parsha_YISRO_getInstance(), Parsha_MISHPATIM_getInstance(), Parsha_TERUMAH_getInstance(), Parsha_TETZAVEH_getInstance(), Parsha_KI_SISA_getInstance(), Parsha_VAYAKHEL_getInstance(), Parsha_PEKUDEI_getInstance(), Parsha_VAYIKRA_getInstance(), Parsha_TZAV_getInstance(), Parsha_SHMINI_getInstance(), Parsha_TAZRIA_getInstance(), Parsha_METZORA_getInstance(), Parsha_NONE_getInstance(), Parsha_NONE_getInstance(), Parsha_ACHREI_MOS_getInstance(), Parsha_KEDOSHIM_getInstance(), Parsha_EMOR_getInstance(), Parsha_BEHAR_getInstance(), Parsha_BECHUKOSAI_getInstance(), Parsha_BAMIDBAR_getInstance(), Parsha_NASSO_getInstance(), Parsha_BEHAALOSCHA_getInstance(), Parsha_SHLACH_getInstance(), Parsha_KORACH_getInstance(), Parsha_CHUKAS_getInstance(), Parsha_BALAK_getInstance(), Parsha_PINCHAS_getInstance(), Parsha_MATOS_MASEI_getInstance(), Parsha_DEVARIM_getInstance(), Parsha_VAESCHANAN_getInstance(), Parsha_EIKEV_getInstance(), Parsha_REEH_getInstance(), Parsha_SHOFTIM_getInstance(), Parsha_KI_SEITZEI_getInstance(), Parsha_KI_SAVO_getInstance(), Parsha_NITZAVIM_getInstance()];
    var tmp$ret$22;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$21;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$21 = tmp7_arrayOf;
    tmp$ret$22 = tmp$ret$21;
    tmp$ret$23 = tmp$ret$22;
    var tmp_7 = tmp$ret$23;
    var tmp$ret$26;
    // Inline function 'kotlin.arrayOf' call
    var tmp8_arrayOf = [Parsha_NONE_getInstance(), Parsha_HAAZINU_getInstance(), Parsha_NONE_getInstance(), Parsha_NONE_getInstance(), Parsha_BERESHIS_getInstance(), Parsha_NOACH_getInstance(), Parsha_LECH_LECHA_getInstance(), Parsha_VAYERA_getInstance(), Parsha_CHAYEI_SARA_getInstance(), Parsha_TOLDOS_getInstance(), Parsha_VAYETZEI_getInstance(), Parsha_VAYISHLACH_getInstance(), Parsha_VAYESHEV_getInstance(), Parsha_MIKETZ_getInstance(), Parsha_VAYIGASH_getInstance(), Parsha_VAYECHI_getInstance(), Parsha_SHEMOS_getInstance(), Parsha_VAERA_getInstance(), Parsha_BO_getInstance(), Parsha_BESHALACH_getInstance(), Parsha_YISRO_getInstance(), Parsha_MISHPATIM_getInstance(), Parsha_TERUMAH_getInstance(), Parsha_TETZAVEH_getInstance(), Parsha_KI_SISA_getInstance(), Parsha_VAYAKHEL_getInstance(), Parsha_PEKUDEI_getInstance(), Parsha_VAYIKRA_getInstance(), Parsha_TZAV_getInstance(), Parsha_SHMINI_getInstance(), Parsha_TAZRIA_getInstance(), Parsha_METZORA_getInstance(), Parsha_ACHREI_MOS_getInstance(), Parsha_NONE_getInstance(), Parsha_KEDOSHIM_getInstance(), Parsha_EMOR_getInstance(), Parsha_BEHAR_getInstance(), Parsha_BECHUKOSAI_getInstance(), Parsha_BAMIDBAR_getInstance(), Parsha_NASSO_getInstance(), Parsha_BEHAALOSCHA_getInstance(), Parsha_SHLACH_getInstance(), Parsha_KORACH_getInstance(), Parsha_CHUKAS_getInstance(), Parsha_BALAK_getInstance(), Parsha_PINCHAS_getInstance(), Parsha_MATOS_getInstance(), Parsha_MASEI_getInstance(), Parsha_DEVARIM_getInstance(), Parsha_VAESCHANAN_getInstance(), Parsha_EIKEV_getInstance(), Parsha_REEH_getInstance(), Parsha_SHOFTIM_getInstance(), Parsha_KI_SEITZEI_getInstance(), Parsha_KI_SAVO_getInstance(), Parsha_NITZAVIM_getInstance()];
    var tmp$ret$25;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$24;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$24 = tmp8_arrayOf;
    tmp$ret$25 = tmp$ret$24;
    tmp$ret$26 = tmp$ret$25;
    var tmp_8 = tmp$ret$26;
    var tmp$ret$29;
    // Inline function 'kotlin.arrayOf' call
    var tmp9_arrayOf = [Parsha_NONE_getInstance(), Parsha_HAAZINU_getInstance(), Parsha_NONE_getInstance(), Parsha_NONE_getInstance(), Parsha_BERESHIS_getInstance(), Parsha_NOACH_getInstance(), Parsha_LECH_LECHA_getInstance(), Parsha_VAYERA_getInstance(), Parsha_CHAYEI_SARA_getInstance(), Parsha_TOLDOS_getInstance(), Parsha_VAYETZEI_getInstance(), Parsha_VAYISHLACH_getInstance(), Parsha_VAYESHEV_getInstance(), Parsha_MIKETZ_getInstance(), Parsha_VAYIGASH_getInstance(), Parsha_VAYECHI_getInstance(), Parsha_SHEMOS_getInstance(), Parsha_VAERA_getInstance(), Parsha_BO_getInstance(), Parsha_BESHALACH_getInstance(), Parsha_YISRO_getInstance(), Parsha_MISHPATIM_getInstance(), Parsha_TERUMAH_getInstance(), Parsha_TETZAVEH_getInstance(), Parsha_KI_SISA_getInstance(), Parsha_VAYAKHEL_getInstance(), Parsha_PEKUDEI_getInstance(), Parsha_VAYIKRA_getInstance(), Parsha_TZAV_getInstance(), Parsha_SHMINI_getInstance(), Parsha_TAZRIA_getInstance(), Parsha_METZORA_getInstance(), Parsha_ACHREI_MOS_getInstance(), Parsha_NONE_getInstance(), Parsha_KEDOSHIM_getInstance(), Parsha_EMOR_getInstance(), Parsha_BEHAR_getInstance(), Parsha_BECHUKOSAI_getInstance(), Parsha_BAMIDBAR_getInstance(), Parsha_NASSO_getInstance(), Parsha_BEHAALOSCHA_getInstance(), Parsha_SHLACH_getInstance(), Parsha_KORACH_getInstance(), Parsha_CHUKAS_getInstance(), Parsha_BALAK_getInstance(), Parsha_PINCHAS_getInstance(), Parsha_MATOS_getInstance(), Parsha_MASEI_getInstance(), Parsha_DEVARIM_getInstance(), Parsha_VAESCHANAN_getInstance(), Parsha_EIKEV_getInstance(), Parsha_REEH_getInstance(), Parsha_SHOFTIM_getInstance(), Parsha_KI_SEITZEI_getInstance(), Parsha_KI_SAVO_getInstance(), Parsha_NITZAVIM_VAYEILECH_getInstance()];
    var tmp$ret$28;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$27;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$27 = tmp9_arrayOf;
    tmp$ret$28 = tmp$ret$27;
    tmp$ret$29 = tmp$ret$28;
    var tmp_9 = tmp$ret$29;
    var tmp$ret$32;
    // Inline function 'kotlin.arrayOf' call
    var tmp10_arrayOf = [Parsha_NONE_getInstance(), Parsha_NONE_getInstance(), Parsha_HAAZINU_getInstance(), Parsha_NONE_getInstance(), Parsha_NONE_getInstance(), Parsha_BERESHIS_getInstance(), Parsha_NOACH_getInstance(), Parsha_LECH_LECHA_getInstance(), Parsha_VAYERA_getInstance(), Parsha_CHAYEI_SARA_getInstance(), Parsha_TOLDOS_getInstance(), Parsha_VAYETZEI_getInstance(), Parsha_VAYISHLACH_getInstance(), Parsha_VAYESHEV_getInstance(), Parsha_MIKETZ_getInstance(), Parsha_VAYIGASH_getInstance(), Parsha_VAYECHI_getInstance(), Parsha_SHEMOS_getInstance(), Parsha_VAERA_getInstance(), Parsha_BO_getInstance(), Parsha_BESHALACH_getInstance(), Parsha_YISRO_getInstance(), Parsha_MISHPATIM_getInstance(), Parsha_TERUMAH_getInstance(), Parsha_TETZAVEH_getInstance(), Parsha_KI_SISA_getInstance(), Parsha_VAYAKHEL_getInstance(), Parsha_PEKUDEI_getInstance(), Parsha_VAYIKRA_getInstance(), Parsha_TZAV_getInstance(), Parsha_SHMINI_getInstance(), Parsha_TAZRIA_getInstance(), Parsha_METZORA_getInstance(), Parsha_NONE_getInstance(), Parsha_ACHREI_MOS_getInstance(), Parsha_KEDOSHIM_getInstance(), Parsha_EMOR_getInstance(), Parsha_BEHAR_getInstance(), Parsha_BECHUKOSAI_getInstance(), Parsha_BAMIDBAR_getInstance(), Parsha_NASSO_getInstance(), Parsha_BEHAALOSCHA_getInstance(), Parsha_SHLACH_getInstance(), Parsha_KORACH_getInstance(), Parsha_CHUKAS_getInstance(), Parsha_BALAK_getInstance(), Parsha_PINCHAS_getInstance(), Parsha_MATOS_MASEI_getInstance(), Parsha_DEVARIM_getInstance(), Parsha_VAESCHANAN_getInstance(), Parsha_EIKEV_getInstance(), Parsha_REEH_getInstance(), Parsha_SHOFTIM_getInstance(), Parsha_KI_SEITZEI_getInstance(), Parsha_KI_SAVO_getInstance(), Parsha_NITZAVIM_VAYEILECH_getInstance()];
    var tmp$ret$31;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$30;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$30 = tmp10_arrayOf;
    tmp$ret$31 = tmp$ret$30;
    tmp$ret$32 = tmp$ret$31;
    var tmp_10 = tmp$ret$32;
    var tmp$ret$35;
    // Inline function 'kotlin.arrayOf' call
    var tmp11_arrayOf = [Parsha_NONE_getInstance(), Parsha_NONE_getInstance(), Parsha_HAAZINU_getInstance(), Parsha_NONE_getInstance(), Parsha_NONE_getInstance(), Parsha_BERESHIS_getInstance(), Parsha_NOACH_getInstance(), Parsha_LECH_LECHA_getInstance(), Parsha_VAYERA_getInstance(), Parsha_CHAYEI_SARA_getInstance(), Parsha_TOLDOS_getInstance(), Parsha_VAYETZEI_getInstance(), Parsha_VAYISHLACH_getInstance(), Parsha_VAYESHEV_getInstance(), Parsha_MIKETZ_getInstance(), Parsha_VAYIGASH_getInstance(), Parsha_VAYECHI_getInstance(), Parsha_SHEMOS_getInstance(), Parsha_VAERA_getInstance(), Parsha_BO_getInstance(), Parsha_BESHALACH_getInstance(), Parsha_YISRO_getInstance(), Parsha_MISHPATIM_getInstance(), Parsha_TERUMAH_getInstance(), Parsha_TETZAVEH_getInstance(), Parsha_KI_SISA_getInstance(), Parsha_VAYAKHEL_getInstance(), Parsha_PEKUDEI_getInstance(), Parsha_VAYIKRA_getInstance(), Parsha_TZAV_getInstance(), Parsha_SHMINI_getInstance(), Parsha_TAZRIA_getInstance(), Parsha_METZORA_getInstance(), Parsha_NONE_getInstance(), Parsha_ACHREI_MOS_getInstance(), Parsha_KEDOSHIM_getInstance(), Parsha_EMOR_getInstance(), Parsha_BEHAR_getInstance(), Parsha_BECHUKOSAI_getInstance(), Parsha_BAMIDBAR_getInstance(), Parsha_NONE_getInstance(), Parsha_NASSO_getInstance(), Parsha_BEHAALOSCHA_getInstance(), Parsha_SHLACH_getInstance(), Parsha_KORACH_getInstance(), Parsha_CHUKAS_BALAK_getInstance(), Parsha_PINCHAS_getInstance(), Parsha_MATOS_MASEI_getInstance(), Parsha_DEVARIM_getInstance(), Parsha_VAESCHANAN_getInstance(), Parsha_EIKEV_getInstance(), Parsha_REEH_getInstance(), Parsha_SHOFTIM_getInstance(), Parsha_KI_SEITZEI_getInstance(), Parsha_KI_SAVO_getInstance(), Parsha_NITZAVIM_VAYEILECH_getInstance()];
    var tmp$ret$34;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$33;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$33 = tmp11_arrayOf;
    tmp$ret$34 = tmp$ret$33;
    tmp$ret$35 = tmp$ret$34;
    var tmp_11 = tmp$ret$35;
    var tmp$ret$38;
    // Inline function 'kotlin.arrayOf' call
    var tmp12_arrayOf = [Parsha_NONE_getInstance(), Parsha_VAYEILECH_getInstance(), Parsha_HAAZINU_getInstance(), Parsha_NONE_getInstance(), Parsha_BERESHIS_getInstance(), Parsha_NOACH_getInstance(), Parsha_LECH_LECHA_getInstance(), Parsha_VAYERA_getInstance(), Parsha_CHAYEI_SARA_getInstance(), Parsha_TOLDOS_getInstance(), Parsha_VAYETZEI_getInstance(), Parsha_VAYISHLACH_getInstance(), Parsha_VAYESHEV_getInstance(), Parsha_MIKETZ_getInstance(), Parsha_VAYIGASH_getInstance(), Parsha_VAYECHI_getInstance(), Parsha_SHEMOS_getInstance(), Parsha_VAERA_getInstance(), Parsha_BO_getInstance(), Parsha_BESHALACH_getInstance(), Parsha_YISRO_getInstance(), Parsha_MISHPATIM_getInstance(), Parsha_TERUMAH_getInstance(), Parsha_TETZAVEH_getInstance(), Parsha_KI_SISA_getInstance(), Parsha_VAYAKHEL_PEKUDEI_getInstance(), Parsha_VAYIKRA_getInstance(), Parsha_TZAV_getInstance(), Parsha_NONE_getInstance(), Parsha_SHMINI_getInstance(), Parsha_TAZRIA_METZORA_getInstance(), Parsha_ACHREI_MOS_KEDOSHIM_getInstance(), Parsha_EMOR_getInstance(), Parsha_BEHAR_BECHUKOSAI_getInstance(), Parsha_BAMIDBAR_getInstance(), Parsha_NASSO_getInstance(), Parsha_BEHAALOSCHA_getInstance(), Parsha_SHLACH_getInstance(), Parsha_KORACH_getInstance(), Parsha_CHUKAS_getInstance(), Parsha_BALAK_getInstance(), Parsha_PINCHAS_getInstance(), Parsha_MATOS_MASEI_getInstance(), Parsha_DEVARIM_getInstance(), Parsha_VAESCHANAN_getInstance(), Parsha_EIKEV_getInstance(), Parsha_REEH_getInstance(), Parsha_SHOFTIM_getInstance(), Parsha_KI_SEITZEI_getInstance(), Parsha_KI_SAVO_getInstance(), Parsha_NITZAVIM_VAYEILECH_getInstance()];
    var tmp$ret$37;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$36;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$36 = tmp12_arrayOf;
    tmp$ret$37 = tmp$ret$36;
    tmp$ret$38 = tmp$ret$37;
    var tmp_12 = tmp$ret$38;
    var tmp$ret$41;
    // Inline function 'kotlin.arrayOf' call
    var tmp13_arrayOf = [Parsha_NONE_getInstance(), Parsha_HAAZINU_getInstance(), Parsha_NONE_getInstance(), Parsha_NONE_getInstance(), Parsha_BERESHIS_getInstance(), Parsha_NOACH_getInstance(), Parsha_LECH_LECHA_getInstance(), Parsha_VAYERA_getInstance(), Parsha_CHAYEI_SARA_getInstance(), Parsha_TOLDOS_getInstance(), Parsha_VAYETZEI_getInstance(), Parsha_VAYISHLACH_getInstance(), Parsha_VAYESHEV_getInstance(), Parsha_MIKETZ_getInstance(), Parsha_VAYIGASH_getInstance(), Parsha_VAYECHI_getInstance(), Parsha_SHEMOS_getInstance(), Parsha_VAERA_getInstance(), Parsha_BO_getInstance(), Parsha_BESHALACH_getInstance(), Parsha_YISRO_getInstance(), Parsha_MISHPATIM_getInstance(), Parsha_TERUMAH_getInstance(), Parsha_TETZAVEH_getInstance(), Parsha_KI_SISA_getInstance(), Parsha_VAYAKHEL_PEKUDEI_getInstance(), Parsha_VAYIKRA_getInstance(), Parsha_TZAV_getInstance(), Parsha_NONE_getInstance(), Parsha_SHMINI_getInstance(), Parsha_TAZRIA_METZORA_getInstance(), Parsha_ACHREI_MOS_KEDOSHIM_getInstance(), Parsha_EMOR_getInstance(), Parsha_BEHAR_getInstance(), Parsha_BECHUKOSAI_getInstance(), Parsha_BAMIDBAR_getInstance(), Parsha_NASSO_getInstance(), Parsha_BEHAALOSCHA_getInstance(), Parsha_SHLACH_getInstance(), Parsha_KORACH_getInstance(), Parsha_CHUKAS_getInstance(), Parsha_BALAK_getInstance(), Parsha_PINCHAS_getInstance(), Parsha_MATOS_MASEI_getInstance(), Parsha_DEVARIM_getInstance(), Parsha_VAESCHANAN_getInstance(), Parsha_EIKEV_getInstance(), Parsha_REEH_getInstance(), Parsha_SHOFTIM_getInstance(), Parsha_KI_SEITZEI_getInstance(), Parsha_KI_SAVO_getInstance(), Parsha_NITZAVIM_getInstance()];
    var tmp$ret$40;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$39;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$39 = tmp13_arrayOf;
    tmp$ret$40 = tmp$ret$39;
    tmp$ret$41 = tmp$ret$40;
    var tmp_13 = tmp$ret$41;
    var tmp$ret$44;
    // Inline function 'kotlin.arrayOf' call
    var tmp14_arrayOf = [Parsha_NONE_getInstance(), Parsha_VAYEILECH_getInstance(), Parsha_HAAZINU_getInstance(), Parsha_NONE_getInstance(), Parsha_BERESHIS_getInstance(), Parsha_NOACH_getInstance(), Parsha_LECH_LECHA_getInstance(), Parsha_VAYERA_getInstance(), Parsha_CHAYEI_SARA_getInstance(), Parsha_TOLDOS_getInstance(), Parsha_VAYETZEI_getInstance(), Parsha_VAYISHLACH_getInstance(), Parsha_VAYESHEV_getInstance(), Parsha_MIKETZ_getInstance(), Parsha_VAYIGASH_getInstance(), Parsha_VAYECHI_getInstance(), Parsha_SHEMOS_getInstance(), Parsha_VAERA_getInstance(), Parsha_BO_getInstance(), Parsha_BESHALACH_getInstance(), Parsha_YISRO_getInstance(), Parsha_MISHPATIM_getInstance(), Parsha_TERUMAH_getInstance(), Parsha_TETZAVEH_getInstance(), Parsha_KI_SISA_getInstance(), Parsha_VAYAKHEL_getInstance(), Parsha_PEKUDEI_getInstance(), Parsha_VAYIKRA_getInstance(), Parsha_TZAV_getInstance(), Parsha_SHMINI_getInstance(), Parsha_TAZRIA_getInstance(), Parsha_METZORA_getInstance(), Parsha_NONE_getInstance(), Parsha_ACHREI_MOS_getInstance(), Parsha_KEDOSHIM_getInstance(), Parsha_EMOR_getInstance(), Parsha_BEHAR_getInstance(), Parsha_BECHUKOSAI_getInstance(), Parsha_BAMIDBAR_getInstance(), Parsha_NASSO_getInstance(), Parsha_BEHAALOSCHA_getInstance(), Parsha_SHLACH_getInstance(), Parsha_KORACH_getInstance(), Parsha_CHUKAS_getInstance(), Parsha_BALAK_getInstance(), Parsha_PINCHAS_getInstance(), Parsha_MATOS_MASEI_getInstance(), Parsha_DEVARIM_getInstance(), Parsha_VAESCHANAN_getInstance(), Parsha_EIKEV_getInstance(), Parsha_REEH_getInstance(), Parsha_SHOFTIM_getInstance(), Parsha_KI_SEITZEI_getInstance(), Parsha_KI_SAVO_getInstance(), Parsha_NITZAVIM_VAYEILECH_getInstance()];
    var tmp$ret$43;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$42;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$42 = tmp14_arrayOf;
    tmp$ret$43 = tmp$ret$42;
    tmp$ret$44 = tmp$ret$43;
    var tmp_14 = tmp$ret$44;
    var tmp$ret$47;
    // Inline function 'kotlin.arrayOf' call
    var tmp15_arrayOf = [Parsha_NONE_getInstance(), Parsha_VAYEILECH_getInstance(), Parsha_HAAZINU_getInstance(), Parsha_NONE_getInstance(), Parsha_BERESHIS_getInstance(), Parsha_NOACH_getInstance(), Parsha_LECH_LECHA_getInstance(), Parsha_VAYERA_getInstance(), Parsha_CHAYEI_SARA_getInstance(), Parsha_TOLDOS_getInstance(), Parsha_VAYETZEI_getInstance(), Parsha_VAYISHLACH_getInstance(), Parsha_VAYESHEV_getInstance(), Parsha_MIKETZ_getInstance(), Parsha_VAYIGASH_getInstance(), Parsha_VAYECHI_getInstance(), Parsha_SHEMOS_getInstance(), Parsha_VAERA_getInstance(), Parsha_BO_getInstance(), Parsha_BESHALACH_getInstance(), Parsha_YISRO_getInstance(), Parsha_MISHPATIM_getInstance(), Parsha_TERUMAH_getInstance(), Parsha_TETZAVEH_getInstance(), Parsha_KI_SISA_getInstance(), Parsha_VAYAKHEL_getInstance(), Parsha_PEKUDEI_getInstance(), Parsha_VAYIKRA_getInstance(), Parsha_TZAV_getInstance(), Parsha_SHMINI_getInstance(), Parsha_TAZRIA_getInstance(), Parsha_METZORA_getInstance(), Parsha_NONE_getInstance(), Parsha_ACHREI_MOS_getInstance(), Parsha_KEDOSHIM_getInstance(), Parsha_EMOR_getInstance(), Parsha_BEHAR_getInstance(), Parsha_BECHUKOSAI_getInstance(), Parsha_BAMIDBAR_getInstance(), Parsha_NASSO_getInstance(), Parsha_BEHAALOSCHA_getInstance(), Parsha_SHLACH_getInstance(), Parsha_KORACH_getInstance(), Parsha_CHUKAS_getInstance(), Parsha_BALAK_getInstance(), Parsha_PINCHAS_getInstance(), Parsha_MATOS_getInstance(), Parsha_MASEI_getInstance(), Parsha_DEVARIM_getInstance(), Parsha_VAESCHANAN_getInstance(), Parsha_EIKEV_getInstance(), Parsha_REEH_getInstance(), Parsha_SHOFTIM_getInstance(), Parsha_KI_SEITZEI_getInstance(), Parsha_KI_SAVO_getInstance(), Parsha_NITZAVIM_getInstance()];
    var tmp$ret$46;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$45;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$45 = tmp15_arrayOf;
    tmp$ret$46 = tmp$ret$45;
    tmp$ret$47 = tmp$ret$46;
    var tmp_15 = tmp$ret$47;
    var tmp$ret$50;
    // Inline function 'kotlin.arrayOf' call
    var tmp16_arrayOf = [Parsha_NONE_getInstance(), Parsha_NONE_getInstance(), Parsha_HAAZINU_getInstance(), Parsha_NONE_getInstance(), Parsha_NONE_getInstance(), Parsha_BERESHIS_getInstance(), Parsha_NOACH_getInstance(), Parsha_LECH_LECHA_getInstance(), Parsha_VAYERA_getInstance(), Parsha_CHAYEI_SARA_getInstance(), Parsha_TOLDOS_getInstance(), Parsha_VAYETZEI_getInstance(), Parsha_VAYISHLACH_getInstance(), Parsha_VAYESHEV_getInstance(), Parsha_MIKETZ_getInstance(), Parsha_VAYIGASH_getInstance(), Parsha_VAYECHI_getInstance(), Parsha_SHEMOS_getInstance(), Parsha_VAERA_getInstance(), Parsha_BO_getInstance(), Parsha_BESHALACH_getInstance(), Parsha_YISRO_getInstance(), Parsha_MISHPATIM_getInstance(), Parsha_TERUMAH_getInstance(), Parsha_TETZAVEH_getInstance(), Parsha_KI_SISA_getInstance(), Parsha_VAYAKHEL_getInstance(), Parsha_PEKUDEI_getInstance(), Parsha_VAYIKRA_getInstance(), Parsha_TZAV_getInstance(), Parsha_SHMINI_getInstance(), Parsha_TAZRIA_getInstance(), Parsha_METZORA_getInstance(), Parsha_NONE_getInstance(), Parsha_ACHREI_MOS_getInstance(), Parsha_KEDOSHIM_getInstance(), Parsha_EMOR_getInstance(), Parsha_BEHAR_getInstance(), Parsha_BECHUKOSAI_getInstance(), Parsha_BAMIDBAR_getInstance(), Parsha_NASSO_getInstance(), Parsha_BEHAALOSCHA_getInstance(), Parsha_SHLACH_getInstance(), Parsha_KORACH_getInstance(), Parsha_CHUKAS_getInstance(), Parsha_BALAK_getInstance(), Parsha_PINCHAS_getInstance(), Parsha_MATOS_MASEI_getInstance(), Parsha_DEVARIM_getInstance(), Parsha_VAESCHANAN_getInstance(), Parsha_EIKEV_getInstance(), Parsha_REEH_getInstance(), Parsha_SHOFTIM_getInstance(), Parsha_KI_SEITZEI_getInstance(), Parsha_KI_SAVO_getInstance(), Parsha_NITZAVIM_VAYEILECH_getInstance()];
    var tmp$ret$49;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$48;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$48 = tmp16_arrayOf;
    tmp$ret$49 = tmp$ret$48;
    tmp$ret$50 = tmp$ret$49;
    var tmp17_arrayOf = [tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp_15, tmp$ret$50];
    var tmp$ret$52;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$51;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$51 = tmp17_arrayOf;
    tmp$ret$52 = tmp$ret$51;
    tmp$ret$53 = tmp$ret$52;
    tmp.parshalist_1 = tmp$ret$53;
    this.SUNDAY_1 = 1;
    this.MONDAY_1 = 2;
    this.TUESDAY_1 = 3;
    this.WEDNESDAY_1 = 4;
    this.THURSDAY_1 = 5;
    this.FRIDAY_1 = 6;
    this.SATURDAY_1 = 7;
  }
  protoOf(Companion_4).get_NO_HOLIDAY_93d325_k$ = function () {
    return this.NO_HOLIDAY_1;
  };
  protoOf(Companion_4).get_EREV_PESACH_rejvcw_k$ = function () {
    return this.EREV_PESACH_1;
  };
  protoOf(Companion_4).get_PESACH_2cq1td_k$ = function () {
    return this.PESACH_1;
  };
  protoOf(Companion_4).get_CHOL_HAMOED_PESACH_vzsgbr_k$ = function () {
    return this.CHOL_HAMOED_PESACH_1;
  };
  protoOf(Companion_4).get_PESACH_SHENI_bpo119_k$ = function () {
    return this.PESACH_SHENI_1;
  };
  protoOf(Companion_4).get_EREV_SHAVUOS_n026w9_k$ = function () {
    return this.EREV_SHAVUOS_1;
  };
  protoOf(Companion_4).get_SHAVUOS_nwzc6y_k$ = function () {
    return this.SHAVUOS_1;
  };
  protoOf(Companion_4).get_SEVENTEEN_OF_TAMMUZ_r6l5x5_k$ = function () {
    return this.SEVENTEEN_OF_TAMMUZ_1;
  };
  protoOf(Companion_4).get_TISHA_BEAV_bmunpl_k$ = function () {
    return this.TISHA_BEAV_1;
  };
  protoOf(Companion_4).get_TU_BEAV_2mv8z7_k$ = function () {
    return this.TU_BEAV_1;
  };
  protoOf(Companion_4).get_EREV_ROSH_HASHANA_rgnaa9_k$ = function () {
    return this.EREV_ROSH_HASHANA_1;
  };
  protoOf(Companion_4).get_ROSH_HASHANA_i9oite_k$ = function () {
    return this.ROSH_HASHANA_1;
  };
  protoOf(Companion_4).get_FAST_OF_GEDALYAH_ygohi5_k$ = function () {
    return this.FAST_OF_GEDALYAH_1;
  };
  protoOf(Companion_4).get_EREV_YOM_KIPPUR_n37riz_k$ = function () {
    return this.EREV_YOM_KIPPUR_1;
  };
  protoOf(Companion_4).get_YOM_KIPPUR_ewtovo_k$ = function () {
    return this.YOM_KIPPUR_1;
  };
  protoOf(Companion_4).get_EREV_SUCCOS_pqwgoy_k$ = function () {
    return this.EREV_SUCCOS_1;
  };
  protoOf(Companion_4).get_SUCCOS_40dghb_k$ = function () {
    return this.SUCCOS_1;
  };
  protoOf(Companion_4).get_CHOL_HAMOED_SUCCOS_uc51nt_k$ = function () {
    return this.CHOL_HAMOED_SUCCOS_1;
  };
  protoOf(Companion_4).get_HOSHANA_RABBA_ecm04e_k$ = function () {
    return this.HOSHANA_RABBA_1;
  };
  protoOf(Companion_4).get_SHEMINI_ATZERES_w6i2vz_k$ = function () {
    return this.SHEMINI_ATZERES_1;
  };
  protoOf(Companion_4).get_SIMCHAS_TORAH_7etu2s_k$ = function () {
    return this.SIMCHAS_TORAH_1;
  };
  protoOf(Companion_4).get_CHANUKAH_4u3ejc_k$ = function () {
    return this.CHANUKAH_1;
  };
  protoOf(Companion_4).get_TENTH_OF_TEVES_29giou_k$ = function () {
    return this.TENTH_OF_TEVES_1;
  };
  protoOf(Companion_4).get_TU_BESHVAT_gikfes_k$ = function () {
    return this.TU_BESHVAT_1;
  };
  protoOf(Companion_4).get_FAST_OF_ESTHER_4c4k65_k$ = function () {
    return this.FAST_OF_ESTHER_1;
  };
  protoOf(Companion_4).get_PURIM_iewzoo_k$ = function () {
    return this.PURIM_1;
  };
  protoOf(Companion_4).get_SHUSHAN_PURIM_2re19x_k$ = function () {
    return this.SHUSHAN_PURIM_1;
  };
  protoOf(Companion_4).get_PURIM_KATAN_yrw8h8_k$ = function () {
    return this.PURIM_KATAN_1;
  };
  protoOf(Companion_4).get_ROSH_CHODESH_j5uv7g_k$ = function () {
    return this.ROSH_CHODESH_1;
  };
  protoOf(Companion_4).get_YOM_HASHOAH_cttq6h_k$ = function () {
    return this.YOM_HASHOAH_1;
  };
  protoOf(Companion_4).get_YOM_HAZIKARON_7pjq2m_k$ = function () {
    return this.YOM_HAZIKARON_1;
  };
  protoOf(Companion_4).get_YOM_HAATZMAUT_e1yh5c_k$ = function () {
    return this.YOM_HAATZMAUT_1;
  };
  protoOf(Companion_4).get_YOM_YERUSHALAYIM_gbwr98_k$ = function () {
    return this.YOM_YERUSHALAYIM_1;
  };
  protoOf(Companion_4).get_LAG_BAOMER_fmajpc_k$ = function () {
    return this.LAG_BAOMER_1;
  };
  protoOf(Companion_4).get_SHUSHAN_PURIM_KATAN_4kqbbd_k$ = function () {
    return this.SHUSHAN_PURIM_KATAN_1;
  };
  protoOf(Companion_4).get_ISRU_CHAG_rncojw_k$ = function () {
    return this.ISRU_CHAG_1;
  };
  protoOf(Companion_4).get_YOM_KIPPUR_KATAN_t1rwag_k$ = function () {
    return this.YOM_KIPPUR_KATAN_1;
  };
  protoOf(Companion_4).get_BEHAB_i6xfz1_k$ = function () {
    return this.BEHAB_1;
  };
  protoOf(Companion_4).get_parshalist_yy06pa_k$ = function () {
    return this.parshalist_1;
  };
  protoOf(Companion_4).get_SUNDAY_40khqx_k$ = function () {
    return this.SUNDAY_1;
  };
  protoOf(Companion_4).get_MONDAY_12zztl_k$ = function () {
    return this.MONDAY_1;
  };
  protoOf(Companion_4).get_TUESDAY_30v2d8_k$ = function () {
    return this.TUESDAY_1;
  };
  protoOf(Companion_4).get_WEDNESDAY_6m5cp9_k$ = function () {
    return this.WEDNESDAY_1;
  };
  protoOf(Companion_4).get_THURSDAY_74z9ur_k$ = function () {
    return this.THURSDAY_1;
  };
  protoOf(Companion_4).get_FRIDAY_26r63c_k$ = function () {
    return this.FRIDAY_1;
  };
  protoOf(Companion_4).get_SATURDAY_h7e1ky_k$ = function () {
    return this.SATURDAY_1;
  };
  protoOf(Companion_4).toJewishDayOfWeek_8o98we_k$ = function (_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
    var tmp;
    switch (tmp0) {
      case 6:
        tmp = 1;
        break;
      case 0:
        tmp = 2;
        break;
      case 1:
        tmp = 3;
        break;
      case 2:
        tmp = 4;
        break;
      case 3:
        tmp = 5;
        break;
      case 4:
        tmp = 6;
        break;
      case 5:
        tmp = 7;
        break;
      default:
        throw IllegalArgumentException_init_$Create$('Day of week must be SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, or SATURDAY');
    }
    return tmp;
  };
  var Companion_instance_4;
  function Companion_getInstance_17() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function get_$stableprop_9() {
    return 8;
  }
  function Parsha_NONE_getInstance() {
    Parsha_initEntries();
    return Parsha_NONE_instance;
  }
  function Parsha_BERESHIS_getInstance() {
    Parsha_initEntries();
    return Parsha_BERESHIS_instance;
  }
  function Parsha_NOACH_getInstance() {
    Parsha_initEntries();
    return Parsha_NOACH_instance;
  }
  function Parsha_LECH_LECHA_getInstance() {
    Parsha_initEntries();
    return Parsha_LECH_LECHA_instance;
  }
  function Parsha_VAYERA_getInstance() {
    Parsha_initEntries();
    return Parsha_VAYERA_instance;
  }
  function Parsha_CHAYEI_SARA_getInstance() {
    Parsha_initEntries();
    return Parsha_CHAYEI_SARA_instance;
  }
  function Parsha_TOLDOS_getInstance() {
    Parsha_initEntries();
    return Parsha_TOLDOS_instance;
  }
  function Parsha_VAYETZEI_getInstance() {
    Parsha_initEntries();
    return Parsha_VAYETZEI_instance;
  }
  function Parsha_VAYISHLACH_getInstance() {
    Parsha_initEntries();
    return Parsha_VAYISHLACH_instance;
  }
  function Parsha_VAYESHEV_getInstance() {
    Parsha_initEntries();
    return Parsha_VAYESHEV_instance;
  }
  function Parsha_MIKETZ_getInstance() {
    Parsha_initEntries();
    return Parsha_MIKETZ_instance;
  }
  function Parsha_VAYIGASH_getInstance() {
    Parsha_initEntries();
    return Parsha_VAYIGASH_instance;
  }
  function Parsha_VAYECHI_getInstance() {
    Parsha_initEntries();
    return Parsha_VAYECHI_instance;
  }
  function Parsha_SHEMOS_getInstance() {
    Parsha_initEntries();
    return Parsha_SHEMOS_instance;
  }
  function Parsha_VAERA_getInstance() {
    Parsha_initEntries();
    return Parsha_VAERA_instance;
  }
  function Parsha_BO_getInstance() {
    Parsha_initEntries();
    return Parsha_BO_instance;
  }
  function Parsha_BESHALACH_getInstance() {
    Parsha_initEntries();
    return Parsha_BESHALACH_instance;
  }
  function Parsha_YISRO_getInstance() {
    Parsha_initEntries();
    return Parsha_YISRO_instance;
  }
  function Parsha_MISHPATIM_getInstance() {
    Parsha_initEntries();
    return Parsha_MISHPATIM_instance;
  }
  function Parsha_TERUMAH_getInstance() {
    Parsha_initEntries();
    return Parsha_TERUMAH_instance;
  }
  function Parsha_TETZAVEH_getInstance() {
    Parsha_initEntries();
    return Parsha_TETZAVEH_instance;
  }
  function Parsha_KI_SISA_getInstance() {
    Parsha_initEntries();
    return Parsha_KI_SISA_instance;
  }
  function Parsha_VAYAKHEL_getInstance() {
    Parsha_initEntries();
    return Parsha_VAYAKHEL_instance;
  }
  function Parsha_PEKUDEI_getInstance() {
    Parsha_initEntries();
    return Parsha_PEKUDEI_instance;
  }
  function Parsha_VAYIKRA_getInstance() {
    Parsha_initEntries();
    return Parsha_VAYIKRA_instance;
  }
  function Parsha_TZAV_getInstance() {
    Parsha_initEntries();
    return Parsha_TZAV_instance;
  }
  function Parsha_SHMINI_getInstance() {
    Parsha_initEntries();
    return Parsha_SHMINI_instance;
  }
  function Parsha_TAZRIA_getInstance() {
    Parsha_initEntries();
    return Parsha_TAZRIA_instance;
  }
  function Parsha_METZORA_getInstance() {
    Parsha_initEntries();
    return Parsha_METZORA_instance;
  }
  function Parsha_ACHREI_MOS_getInstance() {
    Parsha_initEntries();
    return Parsha_ACHREI_MOS_instance;
  }
  function Parsha_KEDOSHIM_getInstance() {
    Parsha_initEntries();
    return Parsha_KEDOSHIM_instance;
  }
  function Parsha_EMOR_getInstance() {
    Parsha_initEntries();
    return Parsha_EMOR_instance;
  }
  function Parsha_BEHAR_getInstance() {
    Parsha_initEntries();
    return Parsha_BEHAR_instance;
  }
  function Parsha_BECHUKOSAI_getInstance() {
    Parsha_initEntries();
    return Parsha_BECHUKOSAI_instance;
  }
  function Parsha_BAMIDBAR_getInstance() {
    Parsha_initEntries();
    return Parsha_BAMIDBAR_instance;
  }
  function Parsha_NASSO_getInstance() {
    Parsha_initEntries();
    return Parsha_NASSO_instance;
  }
  function Parsha_BEHAALOSCHA_getInstance() {
    Parsha_initEntries();
    return Parsha_BEHAALOSCHA_instance;
  }
  function Parsha_SHLACH_getInstance() {
    Parsha_initEntries();
    return Parsha_SHLACH_instance;
  }
  function Parsha_KORACH_getInstance() {
    Parsha_initEntries();
    return Parsha_KORACH_instance;
  }
  function Parsha_CHUKAS_getInstance() {
    Parsha_initEntries();
    return Parsha_CHUKAS_instance;
  }
  function Parsha_BALAK_getInstance() {
    Parsha_initEntries();
    return Parsha_BALAK_instance;
  }
  function Parsha_PINCHAS_getInstance() {
    Parsha_initEntries();
    return Parsha_PINCHAS_instance;
  }
  function Parsha_MATOS_getInstance() {
    Parsha_initEntries();
    return Parsha_MATOS_instance;
  }
  function Parsha_MASEI_getInstance() {
    Parsha_initEntries();
    return Parsha_MASEI_instance;
  }
  function Parsha_DEVARIM_getInstance() {
    Parsha_initEntries();
    return Parsha_DEVARIM_instance;
  }
  function Parsha_VAESCHANAN_getInstance() {
    Parsha_initEntries();
    return Parsha_VAESCHANAN_instance;
  }
  function Parsha_EIKEV_getInstance() {
    Parsha_initEntries();
    return Parsha_EIKEV_instance;
  }
  function Parsha_REEH_getInstance() {
    Parsha_initEntries();
    return Parsha_REEH_instance;
  }
  function Parsha_SHOFTIM_getInstance() {
    Parsha_initEntries();
    return Parsha_SHOFTIM_instance;
  }
  function Parsha_KI_SEITZEI_getInstance() {
    Parsha_initEntries();
    return Parsha_KI_SEITZEI_instance;
  }
  function Parsha_KI_SAVO_getInstance() {
    Parsha_initEntries();
    return Parsha_KI_SAVO_instance;
  }
  function Parsha_NITZAVIM_getInstance() {
    Parsha_initEntries();
    return Parsha_NITZAVIM_instance;
  }
  function Parsha_VAYEILECH_getInstance() {
    Parsha_initEntries();
    return Parsha_VAYEILECH_instance;
  }
  function Parsha_HAAZINU_getInstance() {
    Parsha_initEntries();
    return Parsha_HAAZINU_instance;
  }
  function Parsha_VZOS_HABERACHA_getInstance() {
    Parsha_initEntries();
    return Parsha_VZOS_HABERACHA_instance;
  }
  function Parsha_VAYAKHEL_PEKUDEI_getInstance() {
    Parsha_initEntries();
    return Parsha_VAYAKHEL_PEKUDEI_instance;
  }
  function Parsha_TAZRIA_METZORA_getInstance() {
    Parsha_initEntries();
    return Parsha_TAZRIA_METZORA_instance;
  }
  function Parsha_ACHREI_MOS_KEDOSHIM_getInstance() {
    Parsha_initEntries();
    return Parsha_ACHREI_MOS_KEDOSHIM_instance;
  }
  function Parsha_BEHAR_BECHUKOSAI_getInstance() {
    Parsha_initEntries();
    return Parsha_BEHAR_BECHUKOSAI_instance;
  }
  function Parsha_CHUKAS_BALAK_getInstance() {
    Parsha_initEntries();
    return Parsha_CHUKAS_BALAK_instance;
  }
  function Parsha_MATOS_MASEI_getInstance() {
    Parsha_initEntries();
    return Parsha_MATOS_MASEI_instance;
  }
  function Parsha_NITZAVIM_VAYEILECH_getInstance() {
    Parsha_initEntries();
    return Parsha_NITZAVIM_VAYEILECH_instance;
  }
  function Parsha_SHKALIM_getInstance() {
    Parsha_initEntries();
    return Parsha_SHKALIM_instance;
  }
  function Parsha_ZACHOR_getInstance() {
    Parsha_initEntries();
    return Parsha_ZACHOR_instance;
  }
  function Parsha_PARA_getInstance() {
    Parsha_initEntries();
    return Parsha_PARA_instance;
  }
  function Parsha_HACHODESH_getInstance() {
    Parsha_initEntries();
    return Parsha_HACHODESH_instance;
  }
  function Parsha_SHUVA_getInstance() {
    Parsha_initEntries();
    return Parsha_SHUVA_instance;
  }
  function Parsha_SHIRA_getInstance() {
    Parsha_initEntries();
    return Parsha_SHIRA_instance;
  }
  function Parsha_HAGADOL_getInstance() {
    Parsha_initEntries();
    return Parsha_HAGADOL_instance;
  }
  function Parsha_CHAZON_getInstance() {
    Parsha_initEntries();
    return Parsha_CHAZON_instance;
  }
  function Parsha_NACHAMU_getInstance() {
    Parsha_initEntries();
    return Parsha_NACHAMU_instance;
  }
  protoOf(JewishCalendar).set_inIsrael_kgc9y1_k$ = function (_set____db54di) {
    this.inIsrael_1 = _set____db54di;
  };
  protoOf(JewishCalendar).get_inIsrael_sijatq_k$ = function () {
    return this.inIsrael_1;
  };
  protoOf(JewishCalendar).set_isMukafChoma_2hh3d8_k$ = function (_set____db54di) {
    this.isMukafChoma_1 = _set____db54di;
  };
  protoOf(JewishCalendar).get_isMukafChoma_zcambb_k$ = function () {
    return this.isMukafChoma_1;
  };
  protoOf(JewishCalendar).set_isUseModernHolidays_djgvgv_k$ = function (_set____db54di) {
    this.isUseModernHolidays_1 = _set____db54di;
  };
  protoOf(JewishCalendar).get_isUseModernHolidays_ljq43y_k$ = function () {
    return this.isUseModernHolidays_1;
  };
  protoOf(JewishCalendar).get_isBirkasHachamah_3qgu1i_k$ = function () {
    var elapsedDays = Companion_getInstance_18().getJewishCalendarElapsedDays_fz890_k$(this.get_jewishYear_9oxc94_k$()) + this.get_daysSinceStartOfJewishYear_ikimfy_k$() | 0;
    return elapsedDays % 10227.0 === 172.0;
  };
  protoOf(JewishCalendar).get_parshah_buk1ho_k$ = function () {
    if (!this.get_gregorianLocalDate_slbzek_k$().get_dayOfWeek_3kfgci_k$().equals(DayOfWeek_SATURDAY_getInstance())) {
      return Parsha_NONE_getInstance();
    }
    var yearType = _get_parshaYearType__h96vyv(this);
    var roshHashanaDayOfWeek = Companion_getInstance_18().getJewishCalendarElapsedDays_fz890_k$(this.get_jewishYear_9oxc94_k$()) % 7 | 0;
    var day = roshHashanaDayOfWeek + this.get_daysSinceStartOfJewishYear_ikimfy_k$() | 0;
    if (yearType >= 0) {
      return Companion_getInstance_17().parshalist_1[yearType][day / 7 | 0];
    }
    return Parsha_NONE_getInstance();
  };
  protoOf(JewishCalendar).get_upcomingParshah_mdu08o_k$ = function () {
    var copy = this.copy$default_ut2dsd_k$(VOID, VOID, VOID, this.inIsrael_1);
    var daysToShabbos = ((Companion_getInstance_17().toJewishDayOfWeek_8o98we_k$(DayOfWeek_SATURDAY_getInstance()) - Companion_getInstance_17().toJewishDayOfWeek_8o98we_k$(this.get_gregorianLocalDate_slbzek_k$().get_dayOfWeek_3kfgci_k$()) | 0) + 7 | 0) % 7 | 0;
    if (!this.get_gregorianLocalDate_slbzek_k$().get_dayOfWeek_3kfgci_k$().equals(DayOfWeek_SATURDAY_getInstance())) {
      copy.forward_tpa8te_k$(Companion_getInstance_5().get_DAY_18jw19_k$(), daysToShabbos);
    } else {
      copy.forward_tpa8te_k$(Companion_getInstance_5().get_DAY_18jw19_k$(), 7);
    }
    while (copy.get_parshah_buk1ho_k$().equals(Parsha_NONE_getInstance())) {
      copy.forward_tpa8te_k$(Companion_getInstance_5().get_DAY_18jw19_k$(), 7);
    }
    return copy.get_parshah_buk1ho_k$();
  };
  protoOf(JewishCalendar).get_specialShabbos_2nwun4_k$ = function () {
    if (this.get_gregorianLocalDate_slbzek_k$().get_dayOfWeek_3kfgci_k$().equals(DayOfWeek_SATURDAY_getInstance())) {
      if ((this.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_SHEVAT_3t9shu_k$() ? !this.get_isJewishLeapYear_rd302u_k$() : false) ? true : this.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_ADAR_wnxlnh_k$() ? this.get_isJewishLeapYear_rd302u_k$() : false) {
        if ((this.get_jewishDayOfMonth_adlgfs_k$() === 25 ? true : this.get_jewishDayOfMonth_adlgfs_k$() === 27) ? true : this.get_jewishDayOfMonth_adlgfs_k$() === 29) {
          return Parsha_SHKALIM_getInstance();
        }
      }
      if ((this.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_ADAR_wnxlnh_k$() ? !this.get_isJewishLeapYear_rd302u_k$() : false) ? true : this.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_ADAR_II_5vx2ke_k$()) {
        if (this.get_jewishDayOfMonth_adlgfs_k$() === 1) {
          return Parsha_SHKALIM_getInstance();
        }
        if (((this.get_jewishDayOfMonth_adlgfs_k$() === 8 ? true : this.get_jewishDayOfMonth_adlgfs_k$() === 9) ? true : this.get_jewishDayOfMonth_adlgfs_k$() === 11) ? true : this.get_jewishDayOfMonth_adlgfs_k$() === 13) {
          return Parsha_ZACHOR_getInstance();
        }
        if (((this.get_jewishDayOfMonth_adlgfs_k$() === 18 ? true : this.get_jewishDayOfMonth_adlgfs_k$() === 20) ? true : this.get_jewishDayOfMonth_adlgfs_k$() === 22) ? true : this.get_jewishDayOfMonth_adlgfs_k$() === 23) {
          return Parsha_PARA_getInstance();
        }
        if ((this.get_jewishDayOfMonth_adlgfs_k$() === 25 ? true : this.get_jewishDayOfMonth_adlgfs_k$() === 27) ? true : this.get_jewishDayOfMonth_adlgfs_k$() === 29) {
          return Parsha_HACHODESH_getInstance();
        }
      }
      if (this.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_NISSAN_1gucpd_k$()) {
        if (this.get_jewishDayOfMonth_adlgfs_k$() === 1) {
          return Parsha_HACHODESH_getInstance();
        }
        if (this.get_jewishDayOfMonth_adlgfs_k$() >= 8 ? this.get_jewishDayOfMonth_adlgfs_k$() <= 14 : false) {
          return Parsha_HAGADOL_getInstance();
        }
      }
      if (this.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_AV_kntow2_k$()) {
        if (this.get_jewishDayOfMonth_adlgfs_k$() >= 4 ? this.get_jewishDayOfMonth_adlgfs_k$() <= 9 : false) {
          return Parsha_CHAZON_getInstance();
        }
        if (this.get_jewishDayOfMonth_adlgfs_k$() >= 10 ? this.get_jewishDayOfMonth_adlgfs_k$() <= 16 : false) {
          return Parsha_NACHAMU_getInstance();
        }
      }
      if (this.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_TISHREI_8hw56l_k$()) {
        if (this.get_jewishDayOfMonth_adlgfs_k$() >= 3 ? this.get_jewishDayOfMonth_adlgfs_k$() <= 8 : false) {
          return Parsha_SHUVA_getInstance();
        }
      }
      if (this.get_parshah_buk1ho_k$().equals(Parsha_BESHALACH_getInstance())) {
        return Parsha_SHIRA_getInstance();
      }
    }
    return Parsha_NONE_getInstance();
  };
  protoOf(JewishCalendar).get_yomTovIndex_vr5p8l_k$ = function () {
    var day = this.get_jewishDayOfMonth_adlgfs_k$();
    var dayOfWeek = this.get_gregorianLocalDate_slbzek_k$().get_dayOfWeek_3kfgci_k$();
    var tmp0_subject = this.get_jewishMonth_g5uggl_k$();
    if (tmp0_subject === Companion_getInstance_18().get_NISSAN_1gucpd_k$()) {
      var tmp;
      if (day === 14) {
        Companion_getInstance_17();
        tmp = 0;
      } else {
        if ((day === 15 ? true : day === 21) ? true : !this.inIsrael_1 ? day === 16 ? true : day === 22 : false) {
          Companion_getInstance_17();
          tmp = 1;
        } else {
          var tmp_0;
          var tmp$ret$1;
          // Inline function 'kotlin.takeIf' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_1;
          var tmp$ret$0;
          // Inline function 'com.kosherjava.zmanim.hebrewcalendar.JewishCalendar.<get-yomTovIndex>.<anonymous>' call
          tmp$ret$0 = this.inIsrael_1;
          if (tmp$ret$0) {
            tmp_1 = 16;
          } else {
            tmp_1 = null;
          }
          tmp$ret$1 = tmp_1;
          var tmp1_elvis_lhs = tmp$ret$1;
          if ((tmp1_elvis_lhs == null ? 17 : tmp1_elvis_lhs) <= day) {
            tmp_0 = day <= 20;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            Companion_getInstance_17();
            tmp = 2;
          } else {
            if ((day === 22 ? this.inIsrael_1 : false) ? true : day === 23 ? !this.inIsrael_1 : false) {
              Companion_getInstance_17();
              tmp = 35;
            } else {
              if (this.isUseModernHolidays_1 ? ((day === 26 ? dayOfWeek.equals(DayOfWeek_THURSDAY_getInstance()) : false) ? true : day === 28 ? dayOfWeek.equals(DayOfWeek_MONDAY_getInstance()) : false) ? true : (day === 27 ? !dayOfWeek.equals(DayOfWeek_SUNDAY_getInstance()) : false) ? !dayOfWeek.equals(DayOfWeek_FRIDAY_getInstance()) : false : false) {
                Companion_getInstance_17();
                tmp = 29;
              } else {
                Companion_getInstance_17();
                tmp = -1;
              }
            }
          }
        }
      }
      return tmp;
    } else if (tmp0_subject === Companion_getInstance_18().get_IYAR_wo354a_k$()) {
      var tmp_2;
      if (this.isUseModernHolidays_1 ? (((2 <= day ? day <= 3 : false) ? dayOfWeek.equals(DayOfWeek_WEDNESDAY_getInstance()) : false) ? true : day === 4 ? dayOfWeek.equals(DayOfWeek_TUESDAY_getInstance()) : false) ? true : day === 5 ? dayOfWeek.equals(DayOfWeek_MONDAY_getInstance()) : false : false) {
        Companion_getInstance_17();
        tmp_2 = 30;
      } else if (this.isUseModernHolidays_1 ? (((3 <= day ? day <= 4 : false) ? dayOfWeek.equals(DayOfWeek_THURSDAY_getInstance()) : false) ? true : day === 5 ? dayOfWeek.equals(DayOfWeek_WEDNESDAY_getInstance()) : false) ? true : day === 6 ? dayOfWeek.equals(DayOfWeek_TUESDAY_getInstance()) : false : false) {
        Companion_getInstance_17();
        tmp_2 = 31;
      } else if (day === 14) {
        Companion_getInstance_17();
        tmp_2 = 3;
      } else if (day === 18) {
        Companion_getInstance_17();
        tmp_2 = 33;
      } else if (this.isUseModernHolidays_1 ? day === 28 : false) {
        Companion_getInstance_17();
        tmp_2 = 32;
      } else {
        Companion_getInstance_17();
        tmp_2 = -1;
      }
      return tmp_2;
    } else if (tmp0_subject === Companion_getInstance_18().get_SIVAN_igcsec_k$()) {
      var tmp_3;
      if (day === 5) {
        Companion_getInstance_17();
        tmp_3 = 4;
      } else if (day === 6 ? true : day === 7 ? !this.inIsrael_1 : false) {
        Companion_getInstance_17();
        tmp_3 = 5;
      } else if ((day === 7 ? this.inIsrael_1 : false) ? true : day === 8 ? !this.inIsrael_1 : false) {
        Companion_getInstance_17();
        tmp_3 = 35;
      } else {
        Companion_getInstance_17();
        tmp_3 = -1;
      }
      return tmp_3;
    } else if (tmp0_subject === Companion_getInstance_18().get_TAMMUZ_46lsfv_k$()) {
      if ((day === 17 ? !dayOfWeek.equals(DayOfWeek_SATURDAY_getInstance()) : false) ? true : day === 18 ? dayOfWeek.equals(DayOfWeek_SUNDAY_getInstance()) : false) {
        Companion_getInstance_17();
        return 6;
      }
    } else if (tmp0_subject === Companion_getInstance_18().get_AV_kntow2_k$()) {
      var tmp_4;
      if ((day === 10 ? dayOfWeek.equals(DayOfWeek_SUNDAY_getInstance()) : false) ? true : day === 9 ? !dayOfWeek.equals(DayOfWeek_SATURDAY_getInstance()) : false) {
        Companion_getInstance_17();
        tmp_4 = 7;
      } else if (day === 15) {
        Companion_getInstance_17();
        tmp_4 = 8;
      } else {
        Companion_getInstance_17();
        tmp_4 = -1;
      }
      return tmp_4;
    } else if (tmp0_subject === Companion_getInstance_18().get_ELUL_wo0c07_k$()) {
      if (day === 29) {
        Companion_getInstance_17();
        return 9;
      }
    } else if (tmp0_subject === Companion_getInstance_18().get_TISHREI_8hw56l_k$()) {
      var tmp_5;
      if (day === 1 ? true : day === 2) {
        Companion_getInstance_17();
        tmp_5 = 10;
      } else if ((day === 3 ? !dayOfWeek.equals(DayOfWeek_SATURDAY_getInstance()) : false) ? true : day === 4 ? dayOfWeek.equals(DayOfWeek_SUNDAY_getInstance()) : false) {
        Companion_getInstance_17();
        tmp_5 = 11;
      } else if (day === 9) {
        Companion_getInstance_17();
        tmp_5 = 12;
      } else if (day === 10) {
        Companion_getInstance_17();
        tmp_5 = 13;
      } else if (day === 14) {
        Companion_getInstance_17();
        tmp_5 = 14;
      } else if (day === 15 ? true : day === 16 ? !this.inIsrael_1 : false) {
        Companion_getInstance_17();
        tmp_5 = 15;
      } else if ((17 <= day ? day <= 20 : false) ? true : day === 16 ? this.inIsrael_1 : false) {
        Companion_getInstance_17();
        tmp_5 = 16;
      } else if (day === 21) {
        Companion_getInstance_17();
        tmp_5 = 17;
      } else if (day === 22) {
        Companion_getInstance_17();
        tmp_5 = 18;
      } else if (day === 23 ? !this.inIsrael_1 : false) {
        Companion_getInstance_17();
        tmp_5 = 19;
      } else if ((day === 23 ? this.inIsrael_1 : false) ? true : day === 24 ? !this.inIsrael_1 : false) {
        Companion_getInstance_17();
        tmp_5 = 35;
      } else {
        Companion_getInstance_17();
        tmp_5 = -1;
      }
      return tmp_5;
    } else if (tmp0_subject === Companion_getInstance_18().get_KISLEV_1pcfl_k$()) {
      if (day >= 25) {
        Companion_getInstance_17();
        return 21;
      }
    } else if (tmp0_subject === Companion_getInstance_18().get_TEVES_igu156_k$()) {
      if (1 <= day ? day <= (this.get_isKislevShort_db8add_k$() ? 3 : 2) : false) {
        Companion_getInstance_17();
        return 21;
      }
      if (day === 10) {
        Companion_getInstance_17();
        return 22;
      }
    } else if (tmp0_subject === Companion_getInstance_18().get_SHEVAT_3t9shu_k$()) {
      if (day === 15) {
        Companion_getInstance_17();
        return 23;
      }
    } else if (tmp0_subject === Companion_getInstance_18().get_ADAR_wnxlnh_k$()) {
      if (!this.get_isJewishLeapYear_rd302u_k$()) {
        var tmp_6;
        var tmp_7;
        if ((11 <= day ? day <= 12 : false) ? dayOfWeek.equals(DayOfWeek_THURSDAY_getInstance()) : false) {
          tmp_7 = true;
        } else {
          var tmp_8;
          if (day === 13) {
            var containsLower = DayOfWeek_FRIDAY_getInstance();
            tmp_8 = !(compareTo(dayOfWeek, DayOfWeek_SATURDAY_getInstance()) <= 0 ? 0 <= compareTo(dayOfWeek, containsLower) : false);
          } else {
            tmp_8 = false;
          }
          tmp_7 = tmp_8;
        }
        if (tmp_7) {
          Companion_getInstance_17();
          tmp_6 = 24;
        } else {
          if (day === 14) {
            Companion_getInstance_17();
            tmp_6 = 25;
          } else {
            if (day === 15) {
              Companion_getInstance_17();
              tmp_6 = 26;
            } else {
              Companion_getInstance_17();
              tmp_6 = -1;
            }
          }
        }
        return tmp_6;
      } else {
        if (day === 14) {
          Companion_getInstance_17();
          return 27;
        }
        if (day === 15) {
          Companion_getInstance_17();
          return 34;
        }
      }
    } else if (tmp0_subject === Companion_getInstance_18().get_ADAR_II_5vx2ke_k$()) {
      var tmp_9;
      if (((11 <= day ? day <= 12 : false) ? dayOfWeek.equals(DayOfWeek_THURSDAY_getInstance()) : false) ? true : day === 13 ? !(dayOfWeek.equals(DayOfWeek_FRIDAY_getInstance()) ? true : dayOfWeek.equals(DayOfWeek_SATURDAY_getInstance())) : false) {
        Companion_getInstance_17();
        tmp_9 = 24;
      } else if (day === 14) {
        Companion_getInstance_17();
        tmp_9 = 25;
      } else if (day === 15) {
        Companion_getInstance_17();
        tmp_9 = 26;
      } else {
        Companion_getInstance_17();
        tmp_9 = -1;
      }
      return tmp_9;
    }
    Companion_getInstance_17();
    return -1;
  };
  protoOf(JewishCalendar).get_isYomTov_wna2eh_k$ = function () {
    var holidayIndex = this.get_yomTovIndex_vr5p8l_k$();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (this.get_isErevYomTov_2y1d9n_k$()) {
      var tmp_2;
      Companion_getInstance_17();
      if (!(holidayIndex === 17)) {
        tmp_2 = true;
      } else {
        var tmp_3;
        Companion_getInstance_17();
        if (holidayIndex === 2) {
          tmp_3 = !(this.get_jewishDayOfMonth_adlgfs_k$() === 20);
        } else {
          tmp_3 = false;
        }
        tmp_2 = tmp_3;
      }
      tmp_1 = tmp_2;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      var tmp_4;
      if (this.get_isTaanis_z8efe1_k$()) {
        Companion_getInstance_17();
        tmp_4 = !(holidayIndex === 13);
      } else {
        tmp_4 = false;
      }
      tmp_0 = tmp_4;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      Companion_getInstance_17();
      tmp = holidayIndex === 35;
    }
    if (tmp) {
      return false;
    }
    return !(this.get_yomTovIndex_vr5p8l_k$() === -1);
  };
  protoOf(JewishCalendar).get_isYomTovAssurBemelacha_ha0hff_k$ = function () {
    var holidayIndex = this.get_yomTovIndex_vr5p8l_k$();
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    Companion_getInstance_17();
    if (holidayIndex === 1) {
      tmp_4 = true;
    } else {
      Companion_getInstance_17();
      tmp_4 = holidayIndex === 5;
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      Companion_getInstance_17();
      tmp_3 = holidayIndex === 15;
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      Companion_getInstance_17();
      tmp_2 = holidayIndex === 18;
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      Companion_getInstance_17();
      tmp_1 = holidayIndex === 19;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      Companion_getInstance_17();
      tmp_0 = holidayIndex === 10;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      Companion_getInstance_17();
      tmp = holidayIndex === 13;
    }
    return tmp;
  };
  protoOf(JewishCalendar).get_isAssurBemelacha_v39c81_k$ = function () {
    return this.get_gregorianLocalDate_slbzek_k$().get_dayOfWeek_3kfgci_k$().equals(DayOfWeek_SATURDAY_getInstance()) ? true : this.get_isYomTovAssurBemelacha_ha0hff_k$();
  };
  protoOf(JewishCalendar).hasCandleLighting_pkm0z7_k$ = function () {
    return this.get_isTomorrowShabbosOrYomTov_73gvwf_k$();
  };
  protoOf(JewishCalendar).get_isTomorrowShabbosOrYomTov_73gvwf_k$ = function () {
    return (this.get_gregorianLocalDate_slbzek_k$().get_dayOfWeek_3kfgci_k$().equals(DayOfWeek_FRIDAY_getInstance()) ? true : this.get_isErevYomTov_2y1d9n_k$()) ? true : this.get_isErevYomTovSheni_6v1uc6_k$();
  };
  protoOf(JewishCalendar).get_isErevYomTovSheni_6v1uc6_k$ = function () {
    return (this.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_TISHREI_8hw56l_k$() ? this.get_jewishDayOfMonth_adlgfs_k$() === 1 : false) ? true : !this.inIsrael_1 ? ((this.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_NISSAN_1gucpd_k$() ? this.get_jewishDayOfMonth_adlgfs_k$() === 15 ? true : this.get_jewishDayOfMonth_adlgfs_k$() === 21 : false) ? true : this.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_TISHREI_8hw56l_k$() ? this.get_jewishDayOfMonth_adlgfs_k$() === 15 ? true : this.get_jewishDayOfMonth_adlgfs_k$() === 22 : false) ? true : this.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_SIVAN_igcsec_k$() ? this.get_jewishDayOfMonth_adlgfs_k$() === 6 : false : false;
  };
  protoOf(JewishCalendar).get_isAseresYemeiTeshuva_m2f88b_k$ = function () {
    return this.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_TISHREI_8hw56l_k$() ? this.get_jewishDayOfMonth_adlgfs_k$() <= 10 : false;
  };
  protoOf(JewishCalendar).get_isPesach_xz1jcr_k$ = function () {
    var holidayIndex = this.get_yomTovIndex_vr5p8l_k$();
    var tmp;
    Companion_getInstance_17();
    if (holidayIndex === 1) {
      tmp = true;
    } else {
      Companion_getInstance_17();
      tmp = holidayIndex === 2;
    }
    return tmp;
  };
  protoOf(JewishCalendar).get_isCholHamoedPesach_th2w6v_k$ = function () {
    var tmp = this.get_yomTovIndex_vr5p8l_k$();
    Companion_getInstance_17();
    return tmp === 2;
  };
  protoOf(JewishCalendar).get_isShavuos_wwg1uk_k$ = function () {
    var tmp = this.get_yomTovIndex_vr5p8l_k$();
    Companion_getInstance_17();
    return tmp === 5;
  };
  protoOf(JewishCalendar).get_isRoshHashana_gq3p29_k$ = function () {
    var tmp = this.get_yomTovIndex_vr5p8l_k$();
    Companion_getInstance_17();
    return tmp === 10;
  };
  protoOf(JewishCalendar).get_isYomKippur_pq19c1_k$ = function () {
    var tmp = this.get_yomTovIndex_vr5p8l_k$();
    Companion_getInstance_17();
    return tmp === 13;
  };
  protoOf(JewishCalendar).get_isSuccos_zef3yf_k$ = function () {
    var holidayIndex = this.get_yomTovIndex_vr5p8l_k$();
    var tmp;
    var tmp_0;
    Companion_getInstance_17();
    if (holidayIndex === 15) {
      tmp_0 = true;
    } else {
      Companion_getInstance_17();
      tmp_0 = holidayIndex === 16;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      Companion_getInstance_17();
      tmp = holidayIndex === 17;
    }
    return tmp;
  };
  protoOf(JewishCalendar).get_isHoshanaRabba_kyqsqb_k$ = function () {
    var tmp = this.get_yomTovIndex_vr5p8l_k$();
    Companion_getInstance_17();
    return tmp === 17;
  };
  protoOf(JewishCalendar).get_isShminiAtzeres_xl4igz_k$ = function () {
    var tmp = this.get_yomTovIndex_vr5p8l_k$();
    Companion_getInstance_17();
    return tmp === 18;
  };
  protoOf(JewishCalendar).get_isSimchasTorah_e55jb7_k$ = function () {
    var tmp = this.get_yomTovIndex_vr5p8l_k$();
    Companion_getInstance_17();
    return tmp === 19;
  };
  protoOf(JewishCalendar).get_isCholHamoedSuccos_v4qaut_k$ = function () {
    var holidayIndex = this.get_yomTovIndex_vr5p8l_k$();
    var tmp;
    Companion_getInstance_17();
    if (holidayIndex === 16) {
      tmp = true;
    } else {
      Companion_getInstance_17();
      tmp = holidayIndex === 17;
    }
    return tmp;
  };
  protoOf(JewishCalendar).get_isCholHamoed_9h87hr_k$ = function () {
    return this.get_isCholHamoedPesach_th2w6v_k$() ? true : this.get_isCholHamoedSuccos_v4qaut_k$();
  };
  protoOf(JewishCalendar).get_isErevYomTov_2y1d9n_k$ = function () {
    var holidayIndex = this.get_yomTovIndex_vr5p8l_k$();
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    Companion_getInstance_17();
    if (holidayIndex === 0) {
      tmp_4 = true;
    } else {
      Companion_getInstance_17();
      tmp_4 = holidayIndex === 4;
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      Companion_getInstance_17();
      tmp_3 = holidayIndex === 9;
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      Companion_getInstance_17();
      tmp_2 = holidayIndex === 12;
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      Companion_getInstance_17();
      tmp_1 = holidayIndex === 14;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      Companion_getInstance_17();
      tmp_0 = holidayIndex === 17;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      var tmp_5;
      Companion_getInstance_17();
      if (holidayIndex === 2) {
        tmp_5 = this.get_jewishDayOfMonth_adlgfs_k$() === 20;
      } else {
        tmp_5 = false;
      }
      tmp = tmp_5;
    }
    return tmp;
  };
  protoOf(JewishCalendar).get_isErevRoshChodesh_v0821p_k$ = function () {
    return this.get_jewishDayOfMonth_adlgfs_k$() === 29 ? !(this.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_ELUL_wo0c07_k$()) : false;
  };
  protoOf(JewishCalendar).get_isYomKippurKatan_xjz1ro_k$ = function () {
    var dayOfWeek = this.get_gregorianLocalDate_slbzek_k$().get_dayOfWeek_3kfgci_k$();
    var month = this.get_jewishMonth_g5uggl_k$();
    var day = this.get_jewishDayOfMonth_adlgfs_k$();
    return (((month === Companion_getInstance_18().get_ELUL_wo0c07_k$() ? true : month === Companion_getInstance_18().get_TISHREI_8hw56l_k$()) ? true : month === Companion_getInstance_18().get_KISLEV_1pcfl_k$()) ? true : month === Companion_getInstance_18().get_NISSAN_1gucpd_k$()) ? false : ((day === 29 ? !dayOfWeek.equals(DayOfWeek_FRIDAY_getInstance()) : false) ? !dayOfWeek.equals(DayOfWeek_SATURDAY_getInstance()) : false) ? true : ((27 <= day ? day <= 28 : false) ? dayOfWeek.equals(DayOfWeek_THURSDAY_getInstance()) : false) ? true : false;
  };
  protoOf(JewishCalendar).get_isBeHaB_z91jxv_k$ = function () {
    var dayOfWeek = this.get_gregorianLocalDate_slbzek_k$().get_dayOfWeek_3kfgci_k$();
    var month = this.get_jewishMonth_g5uggl_k$();
    var day = this.get_jewishDayOfMonth_adlgfs_k$();
    return (month === Companion_getInstance_18().get_CHESHVAN_6sssev_k$() ? true : month === Companion_getInstance_18().get_IYAR_wo354a_k$()) ? (dayOfWeek.equals(DayOfWeek_MONDAY_getInstance()) ? 5 <= day ? day <= 17 : false : false) ? true : dayOfWeek.equals(DayOfWeek_THURSDAY_getInstance()) ? 8 <= day ? day <= 13 : false : false : false;
  };
  protoOf(JewishCalendar).get_isTaanis_z8efe1_k$ = function () {
    var holidayIndex = this.get_yomTovIndex_vr5p8l_k$();
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    Companion_getInstance_17();
    if (holidayIndex === 6) {
      tmp_3 = true;
    } else {
      Companion_getInstance_17();
      tmp_3 = holidayIndex === 7;
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      Companion_getInstance_17();
      tmp_2 = holidayIndex === 13;
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      Companion_getInstance_17();
      tmp_1 = holidayIndex === 11;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      Companion_getInstance_17();
      tmp_0 = holidayIndex === 22;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      Companion_getInstance_17();
      tmp = holidayIndex === 24;
    }
    return tmp;
  };
  protoOf(JewishCalendar).get_isTaanisBechoros_igec7u_k$ = function () {
    var day = this.get_jewishDayOfMonth_adlgfs_k$();
    var dayOfWeek = this.get_gregorianLocalDate_slbzek_k$().get_dayOfWeek_3kfgci_k$();
    return this.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_NISSAN_1gucpd_k$() ? (day === 14 ? !dayOfWeek.equals(DayOfWeek_SATURDAY_getInstance()) : false) ? true : day === 12 ? dayOfWeek.equals(DayOfWeek_THURSDAY_getInstance()) : false : false;
  };
  protoOf(JewishCalendar).get_dayOfChanukah_hv8ie1_k$ = function () {
    return this.get_isChanukah_9lgvj2_k$() ? this.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_KISLEV_1pcfl_k$() ? this.get_jewishDayOfMonth_adlgfs_k$() - 24 | 0 : this.get_isKislevShort_db8add_k$() ? this.get_jewishDayOfMonth_adlgfs_k$() + 5 | 0 : this.get_jewishDayOfMonth_adlgfs_k$() + 6 | 0 : -1;
  };
  protoOf(JewishCalendar).get_isChanukah_9lgvj2_k$ = function () {
    var tmp = this.get_yomTovIndex_vr5p8l_k$();
    Companion_getInstance_17();
    return tmp === 21;
  };
  protoOf(JewishCalendar).get_isPurim_zh1rem_k$ = function () {
    var tmp;
    if (this.isMukafChoma_1) {
      var tmp_0 = this.get_yomTovIndex_vr5p8l_k$();
      Companion_getInstance_17();
      tmp = tmp_0 === 26;
    } else {
      var tmp_1 = this.get_yomTovIndex_vr5p8l_k$();
      Companion_getInstance_17();
      tmp = tmp_1 === 25;
    }
    return tmp;
  };
  protoOf(JewishCalendar).get_isRoshChodesh_hma1gb_k$ = function () {
    return (this.get_jewishDayOfMonth_adlgfs_k$() === 1 ? !(this.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_TISHREI_8hw56l_k$()) : false) ? true : this.get_jewishDayOfMonth_adlgfs_k$() === 30;
  };
  protoOf(JewishCalendar).get_isMacharChodesh_p9isxv_k$ = function () {
    return this.get_gregorianLocalDate_slbzek_k$().get_dayOfWeek_3kfgci_k$().equals(DayOfWeek_SATURDAY_getInstance()) ? this.get_jewishDayOfMonth_adlgfs_k$() === 30 ? true : this.get_jewishDayOfMonth_adlgfs_k$() === 29 : false;
  };
  protoOf(JewishCalendar).get_isShabbosMevorchim_j4okk3_k$ = function () {
    return ((this.get_gregorianLocalDate_slbzek_k$().get_dayOfWeek_3kfgci_k$().equals(DayOfWeek_SATURDAY_getInstance()) ? this.get_jewishDayOfMonth_adlgfs_k$() >= 23 : false) ? this.get_jewishDayOfMonth_adlgfs_k$() <= 29 : false) ? !(this.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_ELUL_wo0c07_k$()) : false;
  };
  protoOf(JewishCalendar).get_dayOfOmer_3kkeaz_k$ = function () {
    var month = this.get_jewishMonth_g5uggl_k$();
    var day = this.get_jewishDayOfMonth_adlgfs_k$();
    return (month === Companion_getInstance_18().get_NISSAN_1gucpd_k$() ? day >= 16 : false) ? day - 15 | 0 : month === Companion_getInstance_18().get_IYAR_wo354a_k$() ? day + 15 | 0 : (month === Companion_getInstance_18().get_SIVAN_igcsec_k$() ? day < 6 : false) ? day + 44 | 0 : -1;
  };
  protoOf(JewishCalendar).get_isTishaBav_69vwb7_k$ = function () {
    var tmp = this.get_yomTovIndex_vr5p8l_k$();
    Companion_getInstance_17();
    return tmp === 7;
  };
  protoOf(JewishCalendar).get_moladAsInstant_l53bqj_k$ = function () {
    var molad = protoOf(JewishDate).get_molad_ivc6f8_k$.call(this);
    var locationName = 'Jerusalem, Israel';
    var latitude = 31.778;
    var longitude = 35.2354;
    var yerushalayimStandardTZ = Companion_getInstance_0().of_yqlxgq_k$('GMT+2');
    var geo = GeoLocation_init_$Create$(locationName, latitude, longitude, yerushalayimStandardTZ);
    var localDate = molad.get_gregorianLocalDate_slbzek_k$();
    var moladSeconds = imul(molad.get_moladChalakim_yipwla_k$(), 10) / 3.0;
    var tmp = toInstant(LocalDateTime_init_$Create$_0(localDate, LocalTime_init_$Create$(molad.get_moladHours_upz2mt_k$(), molad.get_moladMinutes_owelrv_k$(), numberToInt(moladSeconds), numberToInt(1000 * (moladSeconds - numberToInt(moladSeconds))))), yerushalayimStandardTZ);
    var tmp$ret$0;
    // Inline function 'kotlin.time.Companion.milliseconds' call
    var tmp0__get_milliseconds__kazo1t = Companion_getInstance();
    var tmp1__get_milliseconds__r2e6ua = imul(-1, geo.get_localMeanTimeOffset_kr1cxl_k$().toInt_1tsl84_k$());
    tmp$ret$0 = toDuration_0(tmp1__get_milliseconds__r2e6ua, DurationUnit_MILLISECONDS_getInstance());
    return tmp.plus_bswwzx_k$(tmp$ret$0);
  };
  protoOf(JewishCalendar).get_tchilasZmanKidushLevana3Days_o9bn1y_k$ = function () {
    var tmp = this.get_moladAsInstant_l53bqj_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.time.Companion.days' call
    var tmp0__get_days__891ty2 = Companion_getInstance();
    tmp$ret$0 = toDuration_0(3, DurationUnit_DAYS_getInstance());
    return tmp.plus_bswwzx_k$(tmp$ret$0);
  };
  protoOf(JewishCalendar).get_tchilasZmanKidushLevana7Days_o74goi_k$ = function () {
    var tmp = this.get_moladAsInstant_l53bqj_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.time.Companion.days' call
    var tmp0__get_days__891ty2 = Companion_getInstance();
    tmp$ret$0 = toDuration_0(7, DurationUnit_DAYS_getInstance());
    return tmp.plus_bswwzx_k$(tmp$ret$0);
  };
  protoOf(JewishCalendar).get_sofZmanKidushLevanaBetweenMoldos_7t2x4m_k$ = function () {
    var tmp = this.get_moladAsInstant_l53bqj_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.time.Companion.days' call
    var tmp0__get_days__891ty2 = Companion_getInstance();
    tmp$ret$0 = toDuration_0(14, DurationUnit_DAYS_getInstance());
    var tmp_0 = tmp.plus_bswwzx_k$(tmp$ret$0);
    var tmp$ret$1;
    // Inline function 'kotlin.time.Companion.hours' call
    var tmp1__get_hours__v2r09v = Companion_getInstance();
    tmp$ret$1 = toDuration_0(18, DurationUnit_HOURS_getInstance());
    var tmp_1 = tmp_0.plus_bswwzx_k$(tmp$ret$1);
    var tmp$ret$2;
    // Inline function 'kotlin.time.Companion.minutes' call
    var tmp2__get_minutes__or31gy = Companion_getInstance();
    tmp$ret$2 = toDuration_0(22, DurationUnit_MINUTES_getInstance());
    var tmp_2 = tmp_1.plus_bswwzx_k$(tmp$ret$2);
    var tmp$ret$3;
    // Inline function 'kotlin.time.Companion.seconds' call
    var tmp3__get_seconds__wyhu35 = Companion_getInstance();
    tmp$ret$3 = toDuration_0(1, DurationUnit_SECONDS_getInstance());
    var tmp_3 = tmp_2.plus_bswwzx_k$(tmp$ret$3);
    var tmp$ret$4;
    // Inline function 'kotlin.time.Companion.milliseconds' call
    var tmp4__get_milliseconds__noiarf = Companion_getInstance();
    tmp$ret$4 = toDuration_0(666, DurationUnit_MILLISECONDS_getInstance());
    return tmp_3.plus_bswwzx_k$(tmp$ret$4);
  };
  protoOf(JewishCalendar).get_sofZmanKidushLevana15Days_nscjmf_k$ = function () {
    var tmp = this.get_moladAsInstant_l53bqj_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.time.Companion.days' call
    var tmp0__get_days__891ty2 = Companion_getInstance();
    tmp$ret$0 = toDuration_0(15, DurationUnit_DAYS_getInstance());
    return tmp.plus_bswwzx_k$(tmp$ret$0);
  };
  protoOf(JewishCalendar).get_dafYomiBavli_p7pi7y_k$ = function () {
    return YomiCalculator_getInstance().getDafYomiBavli_5lk8z4_k$(this);
  };
  protoOf(JewishCalendar).get_dafYomiYerushalmi_m0718d_k$ = function () {
    return YerushalmiYomiCalculator_getInstance().getDafYomiYerushalmi_a8mgq9_k$(this);
  };
  protoOf(JewishCalendar).get_tekufasTishreiElapsedDays_djzmhx_k$ = function () {
    var days = (Companion_getInstance_18().getJewishCalendarElapsedDays_fz890_k$(this.get_jewishYear_9oxc94_k$()) + (this.get_daysSinceStartOfJewishYear_ikimfy_k$() - 1 | 0) | 0) + 0.5;
    var solar = (this.get_jewishYear_9oxc94_k$() - 1 | 0) * 365.25;
    var tmp$ret$0;
    // Inline function 'kotlin.math.floor' call
    var tmp0_floor = days - solar;
    tmp$ret$0 = Math.floor(tmp0_floor);
    return numberToInt(tmp$ret$0);
  };
  protoOf(JewishCalendar).get_isVeseinTalUmatarStartDate_4xnxam_k$ = function () {
    if (this.inIsrael_1) {
      if (this.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_CHESHVAN_6sssev_k$() ? this.get_jewishDayOfMonth_adlgfs_k$() === 7 : false) {
        return true;
      }
    } else {
      var tmp0_subject = this.get_gregorianLocalDate_slbzek_k$().get_dayOfWeek_3kfgci_k$();
      var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
      switch (tmp0) {
        case 5:
          return false;
        case 6:
          return this.get_tekufasTishreiElapsedDays_djzmhx_k$() === 48 ? true : this.get_tekufasTishreiElapsedDays_djzmhx_k$() === 47;
        default:
          return this.get_tekufasTishreiElapsedDays_djzmhx_k$() === 47;
      }
    }
    return false;
  };
  protoOf(JewishCalendar).get_isVeseinTalUmatarStartingTonight_ddcapx_k$ = function () {
    if (this.inIsrael_1) {
      if (this.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_CHESHVAN_6sssev_k$() ? this.get_jewishDayOfMonth_adlgfs_k$() === 6 : false) {
        return true;
      }
    } else {
      var tmp0_subject = this.get_gregorianLocalDate_slbzek_k$().get_dayOfWeek_3kfgci_k$();
      var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
      switch (tmp0) {
        case 4:
          return false;
        case 5:
          return this.get_tekufasTishreiElapsedDays_djzmhx_k$() === 47 ? true : this.get_tekufasTishreiElapsedDays_djzmhx_k$() === 46;
        default:
          return this.get_tekufasTishreiElapsedDays_djzmhx_k$() === 46;
      }
    }
    return false;
  };
  protoOf(JewishCalendar).get_isVeseinTalUmatarRecited_iv67k8_k$ = function () {
    if (this.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_NISSAN_1gucpd_k$() ? this.get_jewishDayOfMonth_adlgfs_k$() < 15 : false)
      return true;
    if (this.get_jewishMonth_g5uggl_k$() < Companion_getInstance_18().get_CHESHVAN_6sssev_k$())
      return false;
    return this.inIsrael_1 ? !(this.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_CHESHVAN_6sssev_k$()) ? true : this.get_jewishDayOfMonth_adlgfs_k$() >= 7 : this.get_tekufasTishreiElapsedDays_djzmhx_k$() >= 47;
  };
  protoOf(JewishCalendar).get_isVeseinBerachaRecited_wdjhw7_k$ = function () {
    return !this.get_isVeseinTalUmatarRecited_iv67k8_k$();
  };
  protoOf(JewishCalendar).get_isMashivHaruachStartDate_y99anl_k$ = function () {
    return this.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_TISHREI_8hw56l_k$() ? this.get_jewishDayOfMonth_adlgfs_k$() === 22 : false;
  };
  protoOf(JewishCalendar).get_isMashivHaruachEndDate_vzeooo_k$ = function () {
    return this.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_NISSAN_1gucpd_k$() ? this.get_jewishDayOfMonth_adlgfs_k$() === 15 : false;
  };
  protoOf(JewishCalendar).get_isMashivHaruachRecited_ci8id5_k$ = function () {
    return this.compareTo_ffbwj5_k$(JewishDate_init_$Create$_0(this.get_jewishYear_9oxc94_k$(), Companion_getInstance_18().get_TISHREI_8hw56l_k$(), 22)) > 0 ? this.compareTo_ffbwj5_k$(JewishDate_init_$Create$_0(this.get_jewishYear_9oxc94_k$(), Companion_getInstance_18().get_NISSAN_1gucpd_k$(), 15)) < 0 : false;
  };
  protoOf(JewishCalendar).get_isMoridHatalRecited_3yeq6k_k$ = function () {
    return (!this.get_isMashivHaruachRecited_ci8id5_k$() ? true : this.get_isMashivHaruachStartDate_y99anl_k$()) ? true : this.get_isMashivHaruachEndDate_vzeooo_k$();
  };
  protoOf(JewishCalendar).get_isIsruChag_m871at_k$ = function () {
    var tmp = this.get_yomTovIndex_vr5p8l_k$();
    Companion_getInstance_17();
    return tmp === 35;
  };
  protoOf(JewishCalendar).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JewishCalendar))
      return false;
    return this.get_absDate_igev1l_k$() === other.get_absDate_igev1l_k$() ? this.inIsrael_1 === other.inIsrael_1 : false;
  };
  protoOf(JewishCalendar).hashCode = function () {
    var result = 17;
    result = imul(37, result) + getKClassFromExpression(this).hashCode() | 0;
    result = result + ((imul(37, result) + this.get_absDate_igev1l_k$() | 0) + (this.inIsrael_1 ? 1 : 3) | 0) | 0;
    return result;
  };
  protoOf(JewishCalendar).copy_qpmv4i_k$ = function (jewishYear, jewishMonth, jewishDayOfMonth, inIsrael) {
    return JewishCalendar_init_$Create$_3(jewishYear, jewishMonth, jewishDayOfMonth, inIsrael);
  };
  protoOf(JewishCalendar).copy$default_ut2dsd_k$ = function (jewishYear, jewishMonth, jewishDayOfMonth, inIsrael, $super) {
    jewishYear = jewishYear === VOID ? this.get_jewishYear_9oxc94_k$() : jewishYear;
    jewishMonth = jewishMonth === VOID ? this.get_jewishMonth_g5uggl_k$() : jewishMonth;
    jewishDayOfMonth = jewishDayOfMonth === VOID ? this.get_jewishDayOfMonth_adlgfs_k$() : jewishDayOfMonth;
    inIsrael = inIsrael === VOID ? this.inIsrael_1 : inIsrael;
    return $super === VOID ? this.copy_qpmv4i_k$(jewishYear, jewishMonth, jewishDayOfMonth, inIsrael) : $super.copy_qpmv4i_k$.call(this, jewishYear, jewishMonth, jewishDayOfMonth, inIsrael);
  };
  function JewishCalendar() {
    Companion_getInstance_17();
    this.inIsrael_1 = false;
    this.isMukafChoma_1 = false;
    this.isUseModernHolidays_1 = false;
    this.$stable_2 = 8;
  }
  function _get_JEWISH_EPOCH__rf9zlt($this) {
    return $this.JEWISH_EPOCH_1;
  }
  function _get_CHALAKIM_PER_MINUTE__um863q($this) {
    return $this.CHALAKIM_PER_MINUTE_1;
  }
  function _get_CHALAKIM_PER_HOUR__wmzjgq($this) {
    return $this.CHALAKIM_PER_HOUR_1;
  }
  function _get_CHALAKIM_PER_DAY__esqymq($this) {
    return $this.CHALAKIM_PER_DAY_1;
  }
  function _get_CHALAKIM_PER_MONTH__jq4oku($this) {
    return $this.CHALAKIM_PER_MONTH_1;
  }
  function _get_CHALAKIM_MOLAD_TOHU__g581i($this) {
    return $this.CHALAKIM_MOLAD_TOHU_1;
  }
  function getLastDayOfGregorianMonth($this, month, year) {
    var tmp0_subject = month;
    switch (tmp0_subject) {
      case 2:
        return (((year % 4 | 0) === 0 ? !((year % 100 | 0) === 0) : false) ? true : (year % 400 | 0) === 0) ? 29 : 28;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
      default:
        return 31;
    }
  }
  function gregorianDateToAbsDate($this, date) {
    var year = date.get_year_woy26e_k$();
    var month = date.get_monthNumber_nb47ls_k$();
    var dayOfMonth = date.get_dayOfMonth_vblo3a_k$();
    var absDate = dayOfMonth;
    var inductionVariable = month - 1 | 0;
    if (1 <= inductionVariable)
      do {
        var m = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        absDate = absDate + getLastDayOfGregorianMonth($this, m, year) | 0;
      }
       while (1 <= inductionVariable);
    return (((absDate + imul(365, year - 1 | 0) | 0) + ((year - 1 | 0) / 4 | 0) | 0) - ((year - 1 | 0) / 100 | 0) | 0) + ((year - 1 | 0) / 400 | 0) | 0;
  }
  function getLastMonthOfJewishYear($this, year) {
    return $this.get_isJewishLeapYear_rz2ihl_k$(year) ? 13 : 12;
  }
  function addDechiyos($this, year, moladDay, moladParts) {
    var roshHashanaDay = moladDay;
    if ((moladParts >= 19440 ? true : ((moladDay % 7 | 0) === 2 ? moladParts >= 9924 : false) ? !$this.get_isJewishLeapYear_rz2ihl_k$(year) : false) ? true : ((moladDay % 7 | 0) === 1 ? moladParts >= 16789 : false) ? $this.get_isJewishLeapYear_rz2ihl_k$(year - 1 | 0) : false) {
      roshHashanaDay = roshHashanaDay + 1 | 0;
    }
    if (((roshHashanaDay % 7 | 0) === 0 ? true : (roshHashanaDay % 7 | 0) === 3) ? true : (roshHashanaDay % 7 | 0) === 5) {
      roshHashanaDay = roshHashanaDay + 1 | 0;
    }
    return roshHashanaDay;
  }
  function getChalakimSinceMoladTohu($this, year, month) {
    var monthOfYear = getJewishMonthOfYear($this, year, month);
    var monthsElapsed = ((imul(235, (year - 1 | 0) / 19 | 0) + imul(12, (year - 1 | 0) % 19 | 0) | 0) + ((imul(7, (year - 1 | 0) % 19 | 0) + 1 | 0) / 19 | 0) | 0) + (monthOfYear - 1 | 0) | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.times' call
    var tmp0_times = new Long(765433, 0);
    tmp$ret$0 = tmp0_times.times_2zfqpc_k$(toLong(monthsElapsed));
    return numberToLong(31524).plus_u6jwas_k$(tmp$ret$0);
  }
  function getJewishMonthOfYear($this, year, month) {
    var isLeapYear = $this.get_isJewishLeapYear_rz2ihl_k$(year);
    return ((month + (isLeapYear ? 6 : 5) | 0) % (isLeapYear ? 13 : 12) | 0) + 1 | 0;
  }
  function validateJewishDate($this, year, month, dayOfMonth, hours, minutes, chalakim) {
    // Inline function 'kotlin.require' call
    var tmp0_require = !(month < 1 ? true : month > getLastMonthOfJewishYear($this, year));
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.kosherjava.zmanim.hebrewcalendar.Companion.validateJewishDate.<anonymous>' call
      tmp$ret$0 = 'The Jewish month has to be between 1 and 12 (or 13 on a leap year). ' + month + ' is invalid for the year ' + year + '.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = !(dayOfMonth < 1 ? true : dayOfMonth > 30);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'com.kosherjava.zmanim.hebrewcalendar.Companion.validateJewishDate.<anonymous>' call
      tmp$ret$1 = "The Jewish day of month can't be < 1 or > 30.  " + dayOfMonth + ' is invalid.';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0;
    if (year < 3761) {
      tmp_0 = true;
    } else {
      var tmp_1;
      if (year === 3761) {
        var containsLower = 7;
        tmp_1 = month < 10 ? containsLower <= month : false;
      } else {
        tmp_1 = false;
      }
      tmp_0 = tmp_1;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = (year === 3761 ? month === 10 : false) ? dayOfMonth < 18 : false;
    }
    var tmp2_require = !tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      var tmp$ret$2;
      // Inline function 'com.kosherjava.zmanim.hebrewcalendar.Companion.validateJewishDate.<anonymous>' call
      tmp$ret$2 = "A Jewish date earlier than 18 Teves, 3761 (1/1/1 Gregorian) can't be set. " + year + ', ' + month + ', ' + dayOfMonth + ' is invalid.';
      var message_1 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.require' call
    var tmp3_require = !(hours < 0 ? true : hours > 23);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp3_require) {
      var tmp$ret$3;
      // Inline function 'com.kosherjava.zmanim.hebrewcalendar.Companion.validateJewishDate.<anonymous>' call
      tmp$ret$3 = "Hours < 0 or > 23 can't be set. " + hours + ' is invalid.';
      var message_2 = tmp$ret$3;
      throw IllegalArgumentException_init_$Create$(toString(message_2));
    }
    // Inline function 'kotlin.require' call
    var tmp4_require = !(minutes < 0 ? true : minutes > 59);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp4_require) {
      var tmp$ret$4;
      // Inline function 'com.kosherjava.zmanim.hebrewcalendar.Companion.validateJewishDate.<anonymous>' call
      tmp$ret$4 = "Minutes < 0 or > 59 can't be set. " + minutes + ' is invalid.';
      var message_3 = tmp$ret$4;
      throw IllegalArgumentException_init_$Create$(toString(message_3));
    }
    // Inline function 'kotlin.require' call
    var tmp5_require = !(chalakim < 0 ? true : chalakim > 17);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp5_require) {
      var tmp$ret$5;
      // Inline function 'com.kosherjava.zmanim.hebrewcalendar.Companion.validateJewishDate.<anonymous>' call
      tmp$ret$5 = "Chalakim/parts < 0 or > 17 can't be set. " + chalakim + ' is invalid. For larger numbers such as 793 (TaShTzaG) break the chalakim into minutes (18 chalakim per minutes, so it would be 44 minutes and 1 chelek in the case of 793 (TaShTzaG)';
      var message_4 = tmp$ret$5;
      throw IllegalArgumentException_init_$Create$(toString(message_4));
    }
  }
  function validateGregorianDate($this, year, month, dayOfMonth) {
    validateGregorianMonth($this, month);
    validateGregorianDayOfMonth($this, dayOfMonth);
    validateGregorianYear($this, year);
  }
  function validateGregorianMonth($this, month) {
    // Inline function 'kotlin.require' call
    var tmp0_require = !(month > 11 ? true : month < 0);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.kosherjava.zmanim.hebrewcalendar.Companion.validateGregorianMonth.<anonymous>' call
      tmp$ret$0 = 'The Gregorian month has to be between 0 - 11. ' + month + ' is invalid.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function validateGregorianDayOfMonth($this, dayOfMonth) {
    // Inline function 'kotlin.require' call
    var tmp0_require = dayOfMonth > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.kosherjava.zmanim.hebrewcalendar.Companion.validateGregorianDayOfMonth.<anonymous>' call
      tmp$ret$0 = "The day of month can't be less than 1. " + dayOfMonth + ' is invalid.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function validateGregorianYear($this, year) {
    // Inline function 'kotlin.require' call
    var tmp0_require = year >= 1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.kosherjava.zmanim.hebrewcalendar.Companion.validateGregorianYear.<anonymous>' call
      tmp$ret$0 = "Years < 1 can't be calculated. " + year + ' is invalid.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function getDaysInJewishMonth($this, month, year) {
    return (((((((month === 2 ? true : month === 4) ? true : month === 6) ? true : month === 8 ? !$this.get_isCheshvanLong_n8iuqy_k$(year) : false) ? true : month === 9 ? $this.get_isKislevShort_nu5gwi_k$(year) : false) ? true : month === 10) ? true : month === 12 ? !$this.get_isJewishLeapYear_rz2ihl_k$(year) : false) ? true : month === 13) ? 29 : 30;
  }
  function jewishDateToAbsDate($this, year, month, dayOfMonth) {
    return ($this.getDaysSinceStartOfJewishYear_dg8qkq_k$(year, month, dayOfMonth) + $this.getJewishCalendarElapsedDays_fz890_k$(year) | 0) + -1373429 | 0;
  }
  function moladToAbsDate($this, chalakim) {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.div' call
    var tmp0_div = 25920;
    tmp$ret$0 = chalakim.div_9s1fi3_k$(toLong(tmp0_div));
    return tmp$ret$0.toInt_1tsl84_k$() + -1373429 | 0;
  }
  function JewishDate_init_$Init$(molad, $this) {
    JewishDate.call($this);
    absDateToDate($this, moladToAbsDate(Companion_getInstance_18(), molad));
    Companion_getInstance_18();
    var conjunctionDay = molad.div_9s1fi3_k$(toLong(25920)).toInt_1tsl84_k$();
    Companion_getInstance_18();
    var conjunctionParts = molad.minus_llf5ei_k$(numberToLong(conjunctionDay).times_2zfqpc_k$(toLong(25920))).toInt_1tsl84_k$();
    setMoladTime($this, conjunctionParts);
    return $this;
  }
  function JewishDate_init_$Create$(molad) {
    return JewishDate_init_$Init$(molad, objectCreate(protoOf(JewishDate)));
  }
  function JewishDate_init_$Init$_0(jewishYear, jewishMonth, jewishDayOfMonth, $this) {
    JewishDate.call($this);
    $this.setJewishDate_x3447l_k$(jewishYear, jewishMonth, jewishDayOfMonth);
    return $this;
  }
  function JewishDate_init_$Create$_0(jewishYear, jewishMonth, jewishDayOfMonth) {
    return JewishDate_init_$Init$_0(jewishYear, jewishMonth, jewishDayOfMonth, objectCreate(protoOf(JewishDate)));
  }
  function JewishDate_init_$Init$_1(localDate, $this) {
    JewishDate.call($this);
    $this.setDate_rkreno_k$(localDate);
    return $this;
  }
  function JewishDate_init_$Create$_1(localDate) {
    return JewishDate_init_$Init$_1(localDate, objectCreate(protoOf(JewishDate)));
  }
  function JewishDate_init_$Init$_2($this) {
    JewishDate.call($this);
    $this.resetDate_xgmjrx_k$();
    return $this;
  }
  function JewishDate_init_$Create$_2() {
    return JewishDate_init_$Init$_2(objectCreate(protoOf(JewishDate)));
  }
  function _set_jewishMonth__3nny49($this, _set____db54di) {
    $this.jewishMonth_1 = _set____db54di;
  }
  function _set_jewishDay__l2nnx1($this, _set____db54di) {
    $this.jewishDay_1 = _set____db54di;
  }
  function _get_jewishDay__886shj($this) {
    return $this.jewishDay_1;
  }
  function _set_jewishYear__dorbrc($this, _set____db54di) {
    $this.jewishYear_1 = _set____db54di;
  }
  function absDateToDate($this, absDate) {
    var year = absDate / 366 | 0;
    while (absDate >= gregorianDateToAbsDate(Companion_getInstance_18(), LocalDate_init_$Create$(year + 1 | 0, 1, 1))) {
      var tmp0 = year;
      year = tmp0 + 1 | 0;
    }
    var month = 1;
    while (absDate > gregorianDateToAbsDate(Companion_getInstance_18(), LocalDate_init_$Create$(year, month, getLastDayOfGregorianMonth(Companion_getInstance_18(), month, year)))) {
      var tmp1 = month;
      month = tmp1 + 1 | 0;
    }
    var dayOfMonth = (absDate - gregorianDateToAbsDate(Companion_getInstance_18(), LocalDate_init_$Create$(year, month, 1)) | 0) + 1 | 0;
    setInternalGregorianDate($this, year, month, dayOfMonth);
  }
  function absDateToJewishDate($this) {
    var tmp = $this;
    var tmp_0 = $this.get_absDate_igev1l_k$();
    Companion_getInstance_18();
    tmp.jewishYear_1 = (tmp_0 - -1373429 | 0) / 366 | 0;
    $l$loop: while (true) {
      var tmp_1 = $this.get_absDate_igev1l_k$();
      var tmp_2 = Companion_getInstance_18();
      var tmp_3 = $this.jewishYear_1 + 1 | 0;
      Companion_getInstance_18();
      if (!(tmp_1 >= jewishDateToAbsDate(tmp_2, tmp_3, 7, 1))) {
        break $l$loop;
      }
      var tmp0_this = $this;
      var tmp1 = tmp0_this.jewishYear_1;
      tmp0_this.jewishYear_1 = tmp1 + 1 | 0;
    }
    var tmp_4 = $this;
    var tmp_5;
    var tmp_6 = $this.get_absDate_igev1l_k$();
    var tmp_7 = Companion_getInstance_18();
    var tmp_8 = $this.jewishYear_1;
    Companion_getInstance_18();
    if (tmp_6 < jewishDateToAbsDate(tmp_7, tmp_8, 1, 1)) {
      Companion_getInstance_18();
      tmp_5 = 7;
    } else {
      Companion_getInstance_18();
      tmp_5 = 1;
    }
    tmp_4.jewishMonth_1 = tmp_5;
    while ($this.get_absDate_igev1l_k$() > jewishDateToAbsDate(Companion_getInstance_18(), $this.jewishYear_1, $this.jewishMonth_1, $this.get_daysInJewishMonth_hh28m1_k$())) {
      var tmp2_this = $this;
      var tmp3 = tmp2_this.jewishMonth_1;
      tmp2_this.jewishMonth_1 = tmp3 + 1 | 0;
    }
    $this.jewishDay_1 = ($this.get_absDate_igev1l_k$() - jewishDateToAbsDate(Companion_getInstance_18(), $this.jewishYear_1, $this.jewishMonth_1, 1) | 0) + 1 | 0;
  }
  function setMoladTime($this, chalakim) {
    var adjustedChalakim = chalakim;
    var tmp = $this;
    var tmp_0 = adjustedChalakim;
    Companion_getInstance_18();
    tmp.moladHours_1 = tmp_0 / 1080 | 0;
    var tmp_1 = adjustedChalakim;
    var tmp_2 = $this.moladHours_1;
    Companion_getInstance_18();
    adjustedChalakim = tmp_1 - imul(tmp_2, 1080) | 0;
    var tmp_3 = $this;
    var tmp_4 = adjustedChalakim;
    Companion_getInstance_18();
    tmp_3.moladMinutes_1 = tmp_4 / 18 | 0;
    var tmp_5 = $this;
    var tmp_6 = adjustedChalakim;
    var tmp_7 = $this.moladMinutes_1;
    Companion_getInstance_18();
    tmp_5.moladChalakim_1 = tmp_6 - imul(tmp_7, 18) | 0;
  }
  function setInternalGregorianDate($this, year, month, dayOfMonth) {
    var dom = dayOfMonth;
    if (dom > getLastDayOfGregorianMonth(Companion_getInstance_18(), month, year)) {
      dom = getLastDayOfGregorianMonth(Companion_getInstance_18(), month, year);
    }
    $this.gregorianLocalDate_1 = LocalDate_init_$Create$(year, month, dom);
    absDateToJewishDate($this);
    return $this;
  }
  function forwardJewishMonth($this, amount) {
    // Inline function 'kotlin.require' call
    var tmp0_require = amount >= 1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.kosherjava.zmanim.hebrewcalendar.JewishDate.forwardJewishMonth.<anonymous>' call
      tmp$ret$0 = 'the amount of months to forward has to be greater than zero.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < amount)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = $this.jewishMonth_1;
        Companion_getInstance_18();
        if (tmp === 6) {
          Companion_getInstance_18();
          $this.setJewishMonth_e5il1h_k$(7);
          $this.setJewishYear_x8h8rk_k$($this.jewishYear_1 + 1 | 0);
        } else {
          var tmp_0;
          var tmp_1;
          if (!$this.get_isJewishLeapYear_rd302u_k$()) {
            var tmp_2 = $this.jewishMonth_1;
            Companion_getInstance_18();
            tmp_1 = tmp_2 === 12;
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            tmp_0 = true;
          } else {
            var tmp_3;
            if ($this.get_isJewishLeapYear_rd302u_k$()) {
              var tmp_4 = $this.jewishMonth_1;
              Companion_getInstance_18();
              tmp_3 = tmp_4 === 13;
            } else {
              tmp_3 = false;
            }
            tmp_0 = tmp_3;
          }
          if (tmp_0) {
            Companion_getInstance_18();
            $this.setJewishMonth_e5il1h_k$(1);
          } else {
            $this.setJewishMonth_e5il1h_k$($this.jewishMonth_1 + 1 | 0);
          }
        }
      }
       while (inductionVariable < amount);
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.NISSAN_1 = 1;
    this.IYAR_1 = 2;
    this.SIVAN_1 = 3;
    this.TAMMUZ_1 = 4;
    this.AV_1 = 5;
    this.ELUL_1 = 6;
    this.TISHREI_1 = 7;
    this.CHESHVAN_1 = 8;
    this.KISLEV_1 = 9;
    this.TEVES_1 = 10;
    this.SHEVAT_1 = 11;
    this.ADAR_1 = 12;
    this.ADAR_II_1 = 13;
    this.JEWISH_EPOCH_1 = -1373429;
    this.CHALAKIM_PER_MINUTE_1 = 18;
    this.CHALAKIM_PER_HOUR_1 = 1080;
    this.CHALAKIM_PER_DAY_1 = 25920;
    this.CHALAKIM_PER_MONTH_1 = new Long(765433, 0);
    this.CHALAKIM_MOLAD_TOHU_1 = 31524;
    this.CHASERIM_1 = 0;
    this.KESIDRAN_1 = 1;
    this.SHELAIMIM_1 = 2;
  }
  protoOf(Companion_5).get_NISSAN_1gucpd_k$ = function () {
    return this.NISSAN_1;
  };
  protoOf(Companion_5).get_IYAR_wo354a_k$ = function () {
    return this.IYAR_1;
  };
  protoOf(Companion_5).get_SIVAN_igcsec_k$ = function () {
    return this.SIVAN_1;
  };
  protoOf(Companion_5).get_TAMMUZ_46lsfv_k$ = function () {
    return this.TAMMUZ_1;
  };
  protoOf(Companion_5).get_AV_kntow2_k$ = function () {
    return this.AV_1;
  };
  protoOf(Companion_5).get_ELUL_wo0c07_k$ = function () {
    return this.ELUL_1;
  };
  protoOf(Companion_5).get_TISHREI_8hw56l_k$ = function () {
    return this.TISHREI_1;
  };
  protoOf(Companion_5).get_CHESHVAN_6sssev_k$ = function () {
    return this.CHESHVAN_1;
  };
  protoOf(Companion_5).get_KISLEV_1pcfl_k$ = function () {
    return this.KISLEV_1;
  };
  protoOf(Companion_5).get_TEVES_igu156_k$ = function () {
    return this.TEVES_1;
  };
  protoOf(Companion_5).get_SHEVAT_3t9shu_k$ = function () {
    return this.SHEVAT_1;
  };
  protoOf(Companion_5).get_ADAR_wnxlnh_k$ = function () {
    return this.ADAR_1;
  };
  protoOf(Companion_5).get_ADAR_II_5vx2ke_k$ = function () {
    return this.ADAR_II_1;
  };
  protoOf(Companion_5).get_CHASERIM_4wkb3l_k$ = function () {
    return this.CHASERIM_1;
  };
  protoOf(Companion_5).get_KESIDRAN_d9ob0s_k$ = function () {
    return this.KESIDRAN_1;
  };
  protoOf(Companion_5).get_SHELAIMIM_d82d5w_k$ = function () {
    return this.SHELAIMIM_1;
  };
  protoOf(Companion_5).get_isJewishLeapYear_rz2ihl_k$ = function (_this__u8e3s4) {
    return ((imul(7, _this__u8e3s4) + 1 | 0) % 19 | 0) < 7;
  };
  protoOf(Companion_5).getJewishCalendarElapsedDays_fz890_k$ = function (year) {
    var chalakimSince = getChalakimSinceMoladTohu(this, year, 7);
    var moladDay = chalakimSince.div_9s1fi3_k$(new Long(25920, 0)).toInt_1tsl84_k$();
    var moladParts = chalakimSince.minus_llf5ei_k$(numberToLong(moladDay).times_2zfqpc_k$(new Long(25920, 0))).toInt_1tsl84_k$();
    return addDechiyos(this, year, moladDay, moladParts);
  };
  protoOf(Companion_5).get_daysInJewishYear_300lv3_k$ = function (_this__u8e3s4) {
    return this.getJewishCalendarElapsedDays_fz890_k$(_this__u8e3s4 + 1 | 0) - this.getJewishCalendarElapsedDays_fz890_k$(_this__u8e3s4) | 0;
  };
  protoOf(Companion_5).get_isCheshvanLong_n8iuqy_k$ = function (_this__u8e3s4) {
    return (this.get_daysInJewishYear_300lv3_k$(_this__u8e3s4) % 10 | 0) === 5;
  };
  protoOf(Companion_5).get_isKislevShort_nu5gwi_k$ = function (_this__u8e3s4) {
    return (this.get_daysInJewishYear_300lv3_k$(_this__u8e3s4) % 10 | 0) === 3;
  };
  protoOf(Companion_5).getDaysSinceStartOfJewishYear_dg8qkq_k$ = function (year, month, dayOfMonth) {
    var elapsedDays = dayOfMonth;
    if (month < 7) {
      var inductionVariable = 7;
      var last = getLastMonthOfJewishYear(this, year);
      if (inductionVariable <= last)
        do {
          var m = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          elapsedDays = elapsedDays + getDaysInJewishMonth(this, m, year) | 0;
        }
         while (!(m === last));
      var inductionVariable_0 = 1;
      if (inductionVariable_0 < month)
        do {
          var m_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          elapsedDays = elapsedDays + getDaysInJewishMonth(this, m_0, year) | 0;
        }
         while (inductionVariable_0 < month);
    } else {
      var inductionVariable_1 = 7;
      if (inductionVariable_1 < month)
        do {
          var m_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          elapsedDays = elapsedDays + getDaysInJewishMonth(this, m_1, year) | 0;
        }
         while (inductionVariable_1 < month);
    }
    return elapsedDays;
  };
  var Companion_instance_5;
  function Companion_getInstance_18() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function get_$stableprop_10() {
    return 8;
  }
  protoOf(JewishDate).get_jewishMonth_g5uggl_k$ = function () {
    return this.jewishMonth_1;
  };
  protoOf(JewishDate).get_jewishYear_9oxc94_k$ = function () {
    return this.jewishYear_1;
  };
  protoOf(JewishDate).set_moladHours_fc7ytr_k$ = function (_set____db54di) {
    this.moladHours_1 = _set____db54di;
  };
  protoOf(JewishDate).get_moladHours_upz2mt_k$ = function () {
    return this.moladHours_1;
  };
  protoOf(JewishDate).set_moladMinutes_tx3fvl_k$ = function (_set____db54di) {
    this.moladMinutes_1 = _set____db54di;
  };
  protoOf(JewishDate).get_moladMinutes_owelrv_k$ = function () {
    return this.moladMinutes_1;
  };
  protoOf(JewishDate).set_moladChalakim_swh1we_k$ = function (_set____db54di) {
    this.moladChalakim_1 = _set____db54di;
  };
  protoOf(JewishDate).get_moladChalakim_yipwla_k$ = function () {
    return this.moladChalakim_1;
  };
  protoOf(JewishDate).get_absDate_igev1l_k$ = function () {
    return until_0(this.JAN_1_0001__1, this.gregorianLocalDate_1, Companion_getInstance_5().get_DAY_18jw19_k$());
  };
  protoOf(JewishDate).get_JAN_1_0001_s23m5c_k$ = function () {
    return this.JAN_1_0001__1;
  };
  protoOf(JewishDate).get_isJewishLeapYear_rd302u_k$ = function () {
    return Companion_getInstance_18().get_isJewishLeapYear_rz2ihl_k$(this.jewishYear_1);
  };
  protoOf(JewishDate).get_chalakimSinceMoladTohu_f0kon6_k$ = function () {
    return getChalakimSinceMoladTohu(Companion_getInstance_18(), this.jewishYear_1, this.jewishMonth_1);
  };
  protoOf(JewishDate).get_daysInJewishYear_wnbo90_k$ = function () {
    return Companion_getInstance_18().get_daysInJewishYear_300lv3_k$(this.jewishYear_1);
  };
  protoOf(JewishDate).get_isCheshvanLong_f03r7_k$ = function () {
    return Companion_getInstance_18().get_isCheshvanLong_n8iuqy_k$(this.jewishYear_1);
  };
  protoOf(JewishDate).get_isKislevShort_db8add_k$ = function () {
    return Companion_getInstance_18().get_isKislevShort_nu5gwi_k$(this.jewishYear_1);
  };
  protoOf(JewishDate).get_cheshvanKislevKviah_ou8twm_k$ = function () {
    var tmp;
    if (this.get_isCheshvanLong_f03r7_k$() ? !this.get_isKislevShort_db8add_k$() : false) {
      Companion_getInstance_18();
      tmp = 2;
    } else if (!this.get_isCheshvanLong_f03r7_k$() ? this.get_isKislevShort_db8add_k$() : false) {
      Companion_getInstance_18();
      tmp = 0;
    } else {
      Companion_getInstance_18();
      tmp = 1;
    }
    return tmp;
  };
  protoOf(JewishDate).get_daysInJewishMonth_hh28m1_k$ = function () {
    return getDaysInJewishMonth(Companion_getInstance_18(), this.jewishMonth_1, this.jewishYear_1);
  };
  protoOf(JewishDate).get_molad_ivc6f8_k$ = function () {
    var moladDate = JewishDate_init_$Create$(this.get_chalakimSinceMoladTohu_f0kon6_k$());
    if (moladDate.moladHours_1 >= 6) {
      moladDate.forward_tpa8te_k$(Companion_getInstance_5().get_DAY_18jw19_k$(), 1);
    }
    moladDate.moladHours_1 = (moladDate.moladHours_1 + 18 | 0) % 24 | 0;
    return moladDate;
  };
  protoOf(JewishDate).setDate_rkreno_k$ = function (date) {
    this.gregorianLocalDate_1 = date;
    absDateToJewishDate(this);
    return this;
  };
  protoOf(JewishDate).get_daysSinceStartOfJewishYear_ikimfy_k$ = function () {
    return Companion_getInstance_18().getDaysSinceStartOfJewishYear_dg8qkq_k$(this.jewishYear_1, this.jewishMonth_1, this.get_jewishDayOfMonth_adlgfs_k$());
  };
  protoOf(JewishDate).setGregorianDate_ubgvip_k$ = function (year, month, dayOfMonth) {
    validateGregorianDate(Companion_getInstance_18(), year, month, dayOfMonth);
    setInternalGregorianDate(this, year, month + 1 | 0, dayOfMonth);
    return this;
  };
  protoOf(JewishDate).setJewishDate_x3447l_k$ = function (year, month, dayOfMonth) {
    this.setJewishDate_9jk05u_k$(year, month, dayOfMonth, 0, 0, 0);
    return this;
  };
  protoOf(JewishDate).setJewishDate_9jk05u_k$ = function (year, month, dayOfMonth, hours, minutes, chalakim) {
    var dom = dayOfMonth;
    validateJewishDate(Companion_getInstance_18(), year, month, dom, hours, minutes, chalakim);
    if (dom > getDaysInJewishMonth(Companion_getInstance_18(), month, year)) {
      dom = getDaysInJewishMonth(Companion_getInstance_18(), month, year);
    }
    this.jewishMonth_1 = month;
    this.jewishDay_1 = dom;
    this.jewishYear_1 = year;
    this.moladHours_1 = hours;
    this.moladMinutes_1 = minutes;
    this.moladChalakim_1 = chalakim;
    absDateToDate(this, this.get_absDate_igev1l_k$());
    return this;
  };
  protoOf(JewishDate).set_gregorianLocalDate_37enwl_k$ = function (_set____db54di) {
    this.gregorianLocalDate_1 = _set____db54di;
  };
  protoOf(JewishDate).get_gregorianLocalDate_slbzek_k$ = function () {
    return this.gregorianLocalDate_1;
  };
  protoOf(JewishDate).resetDate_xgmjrx_k$ = function () {
    this.setDate_rkreno_k$(DateUtils_getInstance().now_x1bz8r_k$(Companion_getInstance_11()));
    return this;
  };
  protoOf(JewishDate).toString = function () {
    return (new HebrewDateFormatter()).format_pm8q1k_k$(this);
  };
  protoOf(JewishDate).forward_tpa8te_k$ = function (field, amount) {
    // Inline function 'kotlin.require' call
    var tmp0_require = !((!equals(field, Companion_getInstance_5().get_DAY_18jw19_k$()) ? !equals(field, Companion_getInstance_5().get_MONTH_id5p9z_k$()) : false) ? !equals(field, Companion_getInstance_5().get_YEAR_wocy2u_k$()) : false);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.kosherjava.zmanim.hebrewcalendar.JewishDate.forward.<anonymous>' call
      tmp$ret$0 = 'Unsupported field was passed to Forward. Only DateTimeUnit.DATE, DateTimeUnit.MONTH or DateTimeUnit.YEAR are supported.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = amount >= 1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'com.kosherjava.zmanim.hebrewcalendar.JewishDate.forward.<anonymous>' call
      tmp$ret$1 = 'JewishDate.forward() does not support amounts less than 1. See JewishDate.back()';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp0_subject = field;
    if (equals(tmp0_subject, Companion_getInstance_5().get_DAY_18jw19_k$())) {
      var inductionVariable = 0;
      if (inductionVariable < amount)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          this.gregorianLocalDate_1 = plus_1(this.gregorianLocalDate_1, 1, Companion_getInstance_5().get_DAY_18jw19_k$());
          if (this.jewishDay_1 === this.get_daysInJewishMonth_hh28m1_k$()) {
            var tmp2_subject = this.jewishMonth_1;
            Companion_getInstance_18();
            if (tmp2_subject === 6) {
              var tmp3_this = this;
              var tmp4 = tmp3_this.jewishYear_1;
              tmp3_this.jewishYear_1 = tmp4 + 1 | 0;
              var tmp5_this = this;
              var tmp6 = tmp5_this.jewishMonth_1;
              tmp5_this.jewishMonth_1 = tmp6 + 1 | 0;
              this.jewishDay_1 = 1;
            } else {
              if (tmp2_subject === getLastMonthOfJewishYear(Companion_getInstance_18(), this.jewishYear_1)) {
                var tmp = this;
                Companion_getInstance_18();
                tmp.jewishMonth_1 = 1;
                this.jewishDay_1 = 1;
              } else {
                var tmp7_this = this;
                var tmp8 = tmp7_this.jewishMonth_1;
                tmp7_this.jewishMonth_1 = tmp8 + 1 | 0;
                this.jewishDay_1 = 1;
              }
            }
          } else {
            var tmp9_this = this;
            var tmp10 = tmp9_this.jewishDay_1;
            tmp9_this.jewishDay_1 = tmp10 + 1 | 0;
          }
        }
         while (inductionVariable < amount);
    } else if (equals(tmp0_subject, Companion_getInstance_5().get_MONTH_id5p9z_k$())) {
      forwardJewishMonth(this, amount);
    } else if (equals(tmp0_subject, Companion_getInstance_5().get_YEAR_wocy2u_k$())) {
      this.setJewishYear_x8h8rk_k$(this.jewishYear_1 + amount | 0);
    } else {
      throw IllegalArgumentException_init_$Create$('Unsupported field was passed to Forward. Only DateTimeUnit.DATE, DateTimeUnit.MONTH or DateTimeUnit.YEAR are supported.');
    }
    return this;
  };
  protoOf(JewishDate).back_1sn3b_k$ = function () {
    this.gregorianLocalDate_1 = minus(this.gregorianLocalDate_1, 1, Companion_getInstance_5().get_DAY_18jw19_k$());
    if (this.jewishDay_1 === 1) {
      var tmp0_subject = this.jewishMonth_1;
      Companion_getInstance_18();
      if (tmp0_subject === 1)
        this.jewishMonth_1 = getLastMonthOfJewishYear(Companion_getInstance_18(), this.jewishYear_1);
      else {
        Companion_getInstance_18();
        if (tmp0_subject === 7) {
          var tmp1_this = this;
          var tmp2 = tmp1_this.jewishYear_1;
          tmp1_this.jewishYear_1 = tmp2 - 1 | 0;
          var tmp3_this = this;
          var tmp4 = tmp3_this.jewishMonth_1;
          tmp3_this.jewishMonth_1 = tmp4 - 1 | 0;
        } else {
          var tmp5_this = this;
          var tmp6 = tmp5_this.jewishMonth_1;
          tmp5_this.jewishMonth_1 = tmp6 - 1 | 0;
        }
      }
      this.jewishDay_1 = this.get_daysInJewishMonth_hh28m1_k$();
    } else {
      var tmp7_this = this;
      var tmp8 = tmp7_this.jewishDay_1;
      tmp7_this.jewishDay_1 = tmp8 - 1 | 0;
    }
    return this;
  };
  protoOf(JewishDate).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JewishDate))
      return false;
    return this.get_absDate_igev1l_k$() === other.get_absDate_igev1l_k$();
  };
  protoOf(JewishDate).compareTo_ffbwj5_k$ = function (other) {
    return compareTo(this.get_absDate_igev1l_k$(), other.get_absDate_igev1l_k$());
  };
  protoOf(JewishDate).compareTo_6thzaj_k$ = function (other) {
    return this.compareTo_ffbwj5_k$(other instanceof JewishDate ? other : THROW_CCE());
  };
  protoOf(JewishDate).set_jewishDayOfMonth_ddk01w_k$ = function (dayOfMonth) {
    this.setJewishDate_x3447l_k$(this.jewishYear_1, this.jewishMonth_1, dayOfMonth);
  };
  protoOf(JewishDate).get_jewishDayOfMonth_adlgfs_k$ = function () {
    return this.jewishDay_1;
  };
  protoOf(JewishDate).setGregorianYear_yoz1b4_k$ = function (year) {
    validateGregorianYear(Companion_getInstance_18(), year);
    setInternalGregorianDate(this, year, this.gregorianLocalDate_1.get_monthNumber_nb47ls_k$(), this.gregorianLocalDate_1.get_dayOfMonth_vblo3a_k$());
    return this;
  };
  protoOf(JewishDate).setGregorianDayOfMonth_jisxkg_k$ = function (dayOfMonth) {
    validateGregorianDayOfMonth(Companion_getInstance_18(), dayOfMonth);
    setInternalGregorianDate(this, this.gregorianLocalDate_1.get_year_woy26e_k$(), this.gregorianLocalDate_1.get_monthNumber_nb47ls_k$(), dayOfMonth);
    return this;
  };
  protoOf(JewishDate).setJewishMonth_e5il1h_k$ = function (month) {
    this.setJewishDate_x3447l_k$(this.jewishYear_1, month, this.jewishDay_1);
    return this;
  };
  protoOf(JewishDate).setJewishYear_x8h8rk_k$ = function (year) {
    this.setJewishDate_x3447l_k$(year, this.jewishMonth_1, this.jewishDay_1);
    return this;
  };
  protoOf(JewishDate).copy_n318ac_k$ = function (jewishYear, jewishMonth, jewishDayOfMonth) {
    return JewishDate_init_$Create$_0(jewishYear, jewishMonth, jewishDayOfMonth);
  };
  protoOf(JewishDate).copy$default_24pf9e_k$ = function (jewishYear, jewishMonth, jewishDayOfMonth, $super) {
    jewishYear = jewishYear === VOID ? this.jewishYear_1 : jewishYear;
    jewishMonth = jewishMonth === VOID ? this.jewishMonth_1 : jewishMonth;
    jewishDayOfMonth = jewishDayOfMonth === VOID ? this.get_jewishDayOfMonth_adlgfs_k$() : jewishDayOfMonth;
    return $super === VOID ? this.copy_n318ac_k$(jewishYear, jewishMonth, jewishDayOfMonth) : $super.copy_n318ac_k$.call(this, jewishYear, jewishMonth, jewishDayOfMonth);
  };
  protoOf(JewishDate).hashCode = function () {
    var result = 17;
    result = imul(37, result) + getKClassFromExpression(this).hashCode() | 0;
    result = result + (imul(37, result) + this.get_absDate_igev1l_k$() | 0) | 0;
    return result;
  };
  function JewishDate() {
    Companion_getInstance_18();
    this.jewishMonth_1 = 0;
    this.jewishDay_1 = 0;
    this.jewishYear_1 = 0;
    this.moladHours_1 = 0;
    this.moladMinutes_1 = 0;
    this.moladChalakim_1 = 0;
    this.JAN_1_0001__1 = LocalDate_init_$Create$(1, 1, 1);
    this.gregorianLocalDate_1 = DateUtils_getInstance().now_x1bz8r_k$(Companion_getInstance_11());
    this.$stable_1 = 8;
  }
  function get_$stableprop_11() {
    return 8;
  }
  function TefilaRules() {
    this.isTachanunRecitedEndOfTishrei_1 = true;
    this.isTachanunRecitedWeekAfterShavuos_1 = false;
    this.isTachanunRecited13SivanOutOfIsrael_1 = true;
    this.isTachanunRecitedPesachSheni_1 = false;
    this.isTachanunRecited15IyarOutOfIsrael_1 = true;
    this.isTachanunRecitedMinchaErevLagBaomer_1 = false;
    this.isTachanunRecitedShivasYemeiHamiluim_1 = true;
    this.isTachanunRecitedWeekOfHod_1 = true;
    this.isTachanunRecitedWeekOfPurim_1 = true;
    this.isTachanunRecitedFridays_1 = true;
    this.isTachanunRecitedSundays_1 = true;
    this.isTachanunRecitedMinchaAllYear_1 = true;
    this.$stable_1 = 8;
  }
  protoOf(TefilaRules).set_isTachanunRecitedEndOfTishrei_p0qk8c_k$ = function (_set____db54di) {
    this.isTachanunRecitedEndOfTishrei_1 = _set____db54di;
  };
  protoOf(TefilaRules).get_isTachanunRecitedEndOfTishrei_ii5m3t_k$ = function () {
    return this.isTachanunRecitedEndOfTishrei_1;
  };
  protoOf(TefilaRules).set_isTachanunRecitedWeekAfterShavuos_xjs1t3_k$ = function (_set____db54di) {
    this.isTachanunRecitedWeekAfterShavuos_1 = _set____db54di;
  };
  protoOf(TefilaRules).get_isTachanunRecitedWeekAfterShavuos_wj1shi_k$ = function () {
    return this.isTachanunRecitedWeekAfterShavuos_1;
  };
  protoOf(TefilaRules).set_isTachanunRecited13SivanOutOfIsrael_rywioc_k$ = function (_set____db54di) {
    this.isTachanunRecited13SivanOutOfIsrael_1 = _set____db54di;
  };
  protoOf(TefilaRules).get_isTachanunRecited13SivanOutOfIsrael_kt0nux_k$ = function () {
    return this.isTachanunRecited13SivanOutOfIsrael_1;
  };
  protoOf(TefilaRules).set_isTachanunRecitedPesachSheni_suq933_k$ = function (_set____db54di) {
    this.isTachanunRecitedPesachSheni_1 = _set____db54di;
  };
  protoOf(TefilaRules).get_isTachanunRecitedPesachSheni_y1wjxw_k$ = function () {
    return this.isTachanunRecitedPesachSheni_1;
  };
  protoOf(TefilaRules).set_isTachanunRecited15IyarOutOfIsrael_okpfok_k$ = function (_set____db54di) {
    this.isTachanunRecited15IyarOutOfIsrael_1 = _set____db54di;
  };
  protoOf(TefilaRules).get_isTachanunRecited15IyarOutOfIsrael_nxjwa9_k$ = function () {
    return this.isTachanunRecited15IyarOutOfIsrael_1;
  };
  protoOf(TefilaRules).set_isTachanunRecitedMinchaErevLagBaomer_ymvjbk_k$ = function (_set____db54di) {
    this.isTachanunRecitedMinchaErevLagBaomer_1 = _set____db54di;
  };
  protoOf(TefilaRules).get_isTachanunRecitedMinchaErevLagBaomer_6uhyxn_k$ = function () {
    return this.isTachanunRecitedMinchaErevLagBaomer_1;
  };
  protoOf(TefilaRules).set_isTachanunRecitedShivasYemeiHamiluim_3diwhb_k$ = function (_set____db54di) {
    this.isTachanunRecitedShivasYemeiHamiluim_1 = _set____db54di;
  };
  protoOf(TefilaRules).get_isTachanunRecitedShivasYemeiHamiluim_5on82k_k$ = function () {
    return this.isTachanunRecitedShivasYemeiHamiluim_1;
  };
  protoOf(TefilaRules).set_isTachanunRecitedWeekOfHod_5gjqdq_k$ = function (_set____db54di) {
    this.isTachanunRecitedWeekOfHod_1 = _set____db54di;
  };
  protoOf(TefilaRules).get_isTachanunRecitedWeekOfHod_d3wv6r_k$ = function () {
    return this.isTachanunRecitedWeekOfHod_1;
  };
  protoOf(TefilaRules).set_isTachanunRecitedWeekOfPurim_gyzqwy_k$ = function (_set____db54di) {
    this.isTachanunRecitedWeekOfPurim_1 = _set____db54di;
  };
  protoOf(TefilaRules).get_isTachanunRecitedWeekOfPurim_p3xd7b_k$ = function () {
    return this.isTachanunRecitedWeekOfPurim_1;
  };
  protoOf(TefilaRules).set_isTachanunRecitedFridays_lya834_k$ = function (_set____db54di) {
    this.isTachanunRecitedFridays_1 = _set____db54di;
  };
  protoOf(TefilaRules).get_isTachanunRecitedFridays_y6dz2d_k$ = function () {
    return this.isTachanunRecitedFridays_1;
  };
  protoOf(TefilaRules).set_isTachanunRecitedSundays_9ieigx_k$ = function (_set____db54di) {
    this.isTachanunRecitedSundays_1 = _set____db54di;
  };
  protoOf(TefilaRules).get_isTachanunRecitedSundays_de3c6s_k$ = function () {
    return this.isTachanunRecitedSundays_1;
  };
  protoOf(TefilaRules).set_isTachanunRecitedMinchaAllYear_lt47jk_k$ = function (_set____db54di) {
    this.isTachanunRecitedMinchaAllYear_1 = _set____db54di;
  };
  protoOf(TefilaRules).get_isTachanunRecitedMinchaAllYear_sk7s4l_k$ = function () {
    return this.isTachanunRecitedMinchaAllYear_1;
  };
  protoOf(TefilaRules).isTachanunRecitedShacharis_dv3z7v_k$ = function (jewishCalendar) {
    var holidayIndex = jewishCalendar.get_yomTovIndex_vr5p8l_k$();
    var day = jewishCalendar.get_jewishDayOfMonth_adlgfs_k$();
    var month = jewishCalendar.get_jewishMonth_g5uggl_k$();
    return !((((((((((((((jewishCalendar.get_gregorianLocalDate_slbzek_k$().get_dayOfWeek_3kfgci_k$().equals(DayOfWeek_SATURDAY_getInstance()) ? true : !this.isTachanunRecitedSundays_1 ? jewishCalendar.get_gregorianLocalDate_slbzek_k$().get_dayOfWeek_3kfgci_k$().equals(DayOfWeek_SUNDAY_getInstance()) : false) ? true : !this.isTachanunRecitedFridays_1 ? jewishCalendar.get_gregorianLocalDate_slbzek_k$().get_dayOfWeek_3kfgci_k$().equals(DayOfWeek_FRIDAY_getInstance()) : false) ? true : month === Companion_getInstance_18().get_NISSAN_1gucpd_k$()) ? true : month === Companion_getInstance_18().get_TISHREI_8hw56l_k$() ? (!this.isTachanunRecitedEndOfTishrei_1 ? day > 8 : false) ? true : this.isTachanunRecitedEndOfTishrei_1 ? 9 <= day ? day <= 21 : false : false : false) ? true : month === Companion_getInstance_18().get_SIVAN_igcsec_k$() ? (this.isTachanunRecitedWeekAfterShavuos_1 ? day < 7 : false) ? true : !this.isTachanunRecitedWeekAfterShavuos_1 ? day < ((!jewishCalendar.get_inIsrael_sijatq_k$() ? !this.isTachanunRecited13SivanOutOfIsrael_1 : false) ? 14 : 13) : false : false) ? true : jewishCalendar.get_isYomTov_wna2eh_k$() ? !jewishCalendar.get_isTaanis_z8efe1_k$() ? true : !this.isTachanunRecitedPesachSheni_1 ? holidayIndex === Companion_getInstance_17().get_PESACH_SHENI_bpo119_k$() : false : false) ? true : (((!jewishCalendar.get_inIsrael_sijatq_k$() ? !this.isTachanunRecitedPesachSheni_1 : false) ? !this.isTachanunRecited15IyarOutOfIsrael_1 : false) ? jewishCalendar.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_IYAR_wo354a_k$() : false) ? day === 15 : false) ? true : holidayIndex === Companion_getInstance_17().get_TISHA_BEAV_bmunpl_k$()) ? true : jewishCalendar.get_isIsruChag_m871at_k$()) ? true : jewishCalendar.get_isRoshChodesh_hma1gb_k$()) ? true : (!this.isTachanunRecitedShivasYemeiHamiluim_1 ? (!jewishCalendar.get_isJewishLeapYear_rd302u_k$() ? month === Companion_getInstance_18().get_ADAR_wnxlnh_k$() : false) ? true : jewishCalendar.get_isJewishLeapYear_rd302u_k$() ? month === Companion_getInstance_18().get_ADAR_II_5vx2ke_k$() : false : false) ? day > 22 : false) ? true : (!this.isTachanunRecitedWeekOfPurim_1 ? (!jewishCalendar.get_isJewishLeapYear_rd302u_k$() ? month === Companion_getInstance_18().get_ADAR_wnxlnh_k$() : false) ? true : jewishCalendar.get_isJewishLeapYear_rd302u_k$() ? month === Companion_getInstance_18().get_ADAR_II_5vx2ke_k$() : false : false) ? 11 <= day ? day <= 17 : false : false) ? true : jewishCalendar.get_isUseModernHolidays_ljq43y_k$() ? holidayIndex === Companion_getInstance_17().get_YOM_HAATZMAUT_e1yh5c_k$() ? true : holidayIndex === Companion_getInstance_17().get_YOM_YERUSHALAYIM_gbwr98_k$() : false) ? true : (!this.isTachanunRecitedWeekOfHod_1 ? month === Companion_getInstance_18().get_IYAR_wo354a_k$() : false) ? 14 <= day ? day <= 20 : false : false);
  };
  protoOf(TefilaRules).isTachanunRecitedMincha_92ln43_k$ = function (jewishCalendar) {
    var tomorrow = jewishCalendar.copy$default_ut2dsd_k$(VOID, VOID, VOID, jewishCalendar.get_inIsrael_sijatq_k$());
    tomorrow.forward_tpa8te_k$(Companion_getInstance_5().get_DAY_18jw19_k$(), 1);
    var yomTovIndex = tomorrow.get_yomTovIndex_vr5p8l_k$();
    return !((((!this.isTachanunRecitedMinchaAllYear_1 ? true : jewishCalendar.get_gregorianLocalDate_slbzek_k$().get_dayOfWeek_3kfgci_k$().equals(DayOfWeek_FRIDAY_getInstance())) ? true : !this.isTachanunRecitedShacharis_dv3z7v_k$(jewishCalendar)) ? true : ((!this.isTachanunRecitedShacharis_dv3z7v_k$(tomorrow) ? !(yomTovIndex === Companion_getInstance_17().get_EREV_ROSH_HASHANA_rgnaa9_k$()) : false) ? !(yomTovIndex === Companion_getInstance_17().get_EREV_YOM_KIPPUR_n37riz_k$()) : false) ? !(yomTovIndex === Companion_getInstance_17().get_PESACH_SHENI_bpo119_k$()) : false) ? true : !this.isTachanunRecitedMinchaErevLagBaomer_1 ? yomTovIndex === Companion_getInstance_17().get_LAG_BAOMER_fmajpc_k$() : false);
  };
  protoOf(TefilaRules).isVeseinTalUmatarStartDate_5f10u2_k$ = function (jewishCalendar) {
    var tmp;
    if (jewishCalendar.get_inIsrael_sijatq_k$()) {
      tmp = jewishCalendar.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_CHESHVAN_6sssev_k$() ? jewishCalendar.get_jewishDayOfMonth_adlgfs_k$() === 7 : false;
    } else {
      var tmp0_subject = jewishCalendar.get_gregorianLocalDate_slbzek_k$().get_dayOfWeek_3kfgci_k$();
      var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
      switch (tmp0) {
        case 5:
          tmp = false;
          break;
        case 6:
          tmp = jewishCalendar.get_tekufasTishreiElapsedDays_djzmhx_k$() === 48 ? true : jewishCalendar.get_tekufasTishreiElapsedDays_djzmhx_k$() === 47;
          break;
        default:
          tmp = jewishCalendar.get_tekufasTishreiElapsedDays_djzmhx_k$() === 47;
          break;
      }
    }
    return tmp;
  };
  protoOf(TefilaRules).isVeseinTalUmatarStartingTonight_y2kcab_k$ = function (jewishCalendar) {
    var tmp;
    if (jewishCalendar.get_inIsrael_sijatq_k$()) {
      tmp = jewishCalendar.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_CHESHVAN_6sssev_k$() ? jewishCalendar.get_jewishDayOfMonth_adlgfs_k$() === 6 : false;
    } else {
      var tmp0_subject = jewishCalendar.get_gregorianLocalDate_slbzek_k$().get_dayOfWeek_3kfgci_k$();
      var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
      switch (tmp0) {
        case 4:
          tmp = false;
          break;
        case 5:
          tmp = jewishCalendar.get_tekufasTishreiElapsedDays_djzmhx_k$() === 47 ? true : jewishCalendar.get_tekufasTishreiElapsedDays_djzmhx_k$() === 46;
          break;
        default:
          tmp = jewishCalendar.get_tekufasTishreiElapsedDays_djzmhx_k$() === 46;
          break;
      }
    }
    return tmp;
  };
  protoOf(TefilaRules).isVeseinTalUmatarRecited_1p9jcg_k$ = function (jewishCalendar) {
    return (jewishCalendar.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_NISSAN_1gucpd_k$() ? jewishCalendar.get_jewishDayOfMonth_adlgfs_k$() < 15 : false) ? true : jewishCalendar.get_jewishMonth_g5uggl_k$() < Companion_getInstance_18().get_CHESHVAN_6sssev_k$() ? false : jewishCalendar.get_inIsrael_sijatq_k$() ? !(jewishCalendar.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_CHESHVAN_6sssev_k$()) ? true : jewishCalendar.get_jewishDayOfMonth_adlgfs_k$() >= 7 : jewishCalendar.get_tekufasTishreiElapsedDays_djzmhx_k$() >= 47;
  };
  protoOf(TefilaRules).isVeseinBerachaRecited_jv2foh_k$ = function (jewishCalendar) {
    return !this.isVeseinTalUmatarRecited_1p9jcg_k$(jewishCalendar);
  };
  protoOf(TefilaRules).isMashivHaruachStartDate_t923wn_k$ = function (jewishCalendar) {
    return jewishCalendar.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_TISHREI_8hw56l_k$() ? jewishCalendar.get_jewishDayOfMonth_adlgfs_k$() === 22 : false;
  };
  protoOf(TefilaRules).isMashivHaruachEndDate_s7emdc_k$ = function (jewishCalendar) {
    return jewishCalendar.get_jewishMonth_g5uggl_k$() === Companion_getInstance_18().get_NISSAN_1gucpd_k$() ? jewishCalendar.get_jewishDayOfMonth_adlgfs_k$() === 15 : false;
  };
  protoOf(TefilaRules).isMashivHaruachRecited_yp94un_k$ = function (jewishCalendar) {
    return this.isBetween_4ougf_k$(jewishCalendar, JewishDate_init_$Create$_0(jewishCalendar.get_jewishYear_9oxc94_k$(), Companion_getInstance_18().get_TISHREI_8hw56l_k$(), 22), JewishDate_init_$Create$_0(jewishCalendar.get_jewishYear_9oxc94_k$(), Companion_getInstance_18().get_NISSAN_1gucpd_k$(), 15));
  };
  protoOf(TefilaRules).isBetween_4ougf_k$ = function (_this__u8e3s4, startDate, endDate) {
    return _this__u8e3s4.compareTo_ffbwj5_k$(startDate) > 0 ? _this__u8e3s4.compareTo_ffbwj5_k$(endDate) < 0 : false;
  };
  protoOf(TefilaRules).isMoridHatalRecited_tpxoom_k$ = function (jewishCalendar) {
    return (!this.isMashivHaruachRecited_yp94un_k$(jewishCalendar) ? true : this.isMashivHaruachStartDate_t923wn_k$(jewishCalendar)) ? true : this.isMashivHaruachEndDate_s7emdc_k$(jewishCalendar);
  };
  protoOf(TefilaRules).isHallelRecited_khbhu9_k$ = function (jewishCalendar) {
    var day = jewishCalendar.get_jewishDayOfMonth_adlgfs_k$();
    var month = jewishCalendar.get_jewishMonth_g5uggl_k$();
    var holidayIndex = jewishCalendar.get_yomTovIndex_vr5p8l_k$();
    var inIsrael = jewishCalendar.get_inIsrael_sijatq_k$();
    return ((((jewishCalendar.get_isRoshChodesh_hma1gb_k$() ? true : jewishCalendar.get_isChanukah_9lgvj2_k$()) ? true : (month === Companion_getInstance_18().get_NISSAN_1gucpd_k$() ? day >= 15 : false) ? (inIsrael ? day <= 21 : false) ? true : !inIsrael ? day <= 22 : false : false) ? true : (month === Companion_getInstance_18().get_IYAR_wo354a_k$() ? jewishCalendar.get_isUseModernHolidays_ljq43y_k$() : false) ? holidayIndex === Companion_getInstance_17().get_YOM_HAATZMAUT_e1yh5c_k$() ? true : holidayIndex === Companion_getInstance_17().get_YOM_YERUSHALAYIM_gbwr98_k$() : false) ? true : (month === Companion_getInstance_18().get_SIVAN_igcsec_k$() ? day === 6 : false) ? true : !inIsrael ? day === 7 : false) ? true : (month === Companion_getInstance_18().get_TISHREI_8hw56l_k$() ? day >= 15 : false) ? day <= 22 ? true : !inIsrael ? day <= 23 : false : false;
  };
  protoOf(TefilaRules).isHallelShalemRecited_k1e7p3_k$ = function (jewishCalendar) {
    var day = jewishCalendar.get_jewishDayOfMonth_adlgfs_k$();
    var month = jewishCalendar.get_jewishMonth_g5uggl_k$();
    var inIsrael = jewishCalendar.get_inIsrael_sijatq_k$();
    return this.isHallelRecited_khbhu9_k$(jewishCalendar) ? !((jewishCalendar.get_isRoshChodesh_hma1gb_k$() ? !jewishCalendar.get_isChanukah_9lgvj2_k$() : false) ? true : month === Companion_getInstance_18().get_NISSAN_1gucpd_k$() ? day > (inIsrael ? 15 : 16) : false) : false;
  };
  protoOf(TefilaRules).isAlHanissimRecited_qjyelu_k$ = function (jewishCalendar) {
    return jewishCalendar.get_isPurim_zh1rem_k$() ? true : jewishCalendar.get_isChanukah_9lgvj2_k$();
  };
  protoOf(TefilaRules).isYaalehVeyavoRecited_6z8zwr_k$ = function (jewishCalendar) {
    return ((((((jewishCalendar.get_isPesach_xz1jcr_k$() ? true : jewishCalendar.get_isShavuos_wwg1uk_k$()) ? true : jewishCalendar.get_isRoshHashana_gq3p29_k$()) ? true : jewishCalendar.get_isYomKippur_pq19c1_k$()) ? true : jewishCalendar.get_isSuccos_zef3yf_k$()) ? true : jewishCalendar.get_isShminiAtzeres_xl4igz_k$()) ? true : jewishCalendar.get_isSimchasTorah_e55jb7_k$()) ? true : jewishCalendar.get_isRoshChodesh_hma1gb_k$();
  };
  function _get_DAF_YOMI_START_DAY__sib0al($this) {
    return $this.DAF_YOMI_START_DAY_1;
  }
  function _get_DAY_MILIS__z6hl7q($this) {
    return $this.DAY_MILIS_1;
  }
  function _get_WHOLE_SHAS_DAFS__raljw7($this) {
    return $this.WHOLE_SHAS_DAFS_1;
  }
  function _get_BLATT_PER_MASECHTA__a69xjd($this) {
    return $this.BLATT_PER_MASECHTA_1;
  }
  function getNumOfSpecialDays($this, start, end) {
    var startYear = JewishCalendar_init_$Create$_0(start).get_jewishYear_9oxc94_k$();
    var endYear = JewishCalendar_init_$Create$_0(end).get_jewishYear_9oxc94_k$();
    var specialDays = 0;
    var yom_kippur = JewishCalendar_init_$Create$_2(5770, 7, 10);
    var tisha_beav = JewishCalendar_init_$Create$_2(5770, 5, 9);
    var inductionVariable = startYear;
    if (inductionVariable <= endYear)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        yom_kippur.setJewishYear_x8h8rk_k$(i);
        tisha_beav.setJewishYear_x8h8rk_k$(i);
        var timeZone = Companion_getInstance_0().currentSystemDefault_9rduv_k$();
        var startToEnd = rangeTo(start, end);
        if (startToEnd.contains_2ehdtg_k$(atStartOfDayIn(yom_kippur.get_gregorianLocalDate_slbzek_k$(), timeZone))) {
          var tmp1 = specialDays;
          specialDays = tmp1 + 1 | 0;
        }
        if (startToEnd.contains_2ehdtg_k$(atStartOfDayIn(tisha_beav.get_gregorianLocalDate_slbzek_k$(), timeZone))) {
          var tmp2 = specialDays;
          specialDays = tmp2 + 1 | 0;
        }
      }
       while (!(i === endYear));
    return specialDays;
  }
  function get_$stableprop_12() {
    return 8;
  }
  function YerushalmiYomiCalculator() {
    YerushalmiYomiCalculator_instance = this;
    this.timeZone_1 = Companion_getInstance_0().currentSystemDefault_9rduv_k$();
    this.DAF_YOMI_START_DAY_1 = toInstant(LocalDateTime_init_$Create$(1980, Month_FEBRUARY_getInstance(), 2, 0, 0, 0, 0), this.timeZone_1);
    this.DAY_MILIS_1 = 86400000;
    this.WHOLE_SHAS_DAFS_1 = 1554;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$0 = new Int32Array([68, 37, 34, 44, 31, 59, 26, 33, 28, 20, 13, 92, 65, 71, 22, 22, 42, 26, 26, 33, 34, 22, 19, 85, 72, 47, 40, 47, 54, 48, 44, 37, 34, 44, 9, 57, 37, 19, 13]);
    tmp.BLATT_PER_MASECHTA_1 = tmp$ret$0;
    this.$stable_1 = 8;
  }
  protoOf(YerushalmiYomiCalculator).set_timeZone_r5or0b_k$ = function (_set____db54di) {
    this.timeZone_1 = _set____db54di;
  };
  protoOf(YerushalmiYomiCalculator).get_timeZone_4vh49u_k$ = function () {
    return this.timeZone_1;
  };
  protoOf(YerushalmiYomiCalculator).getDafYomiYerushalmi_a8mgq9_k$ = function (calendar) {
    var requested = toInstant(LocalDateTime_init_$Create$_0(calendar.get_gregorianLocalDate_slbzek_k$(), LocalTime_init_$Create$(0, 0, 0)), this.timeZone_1);
    var masechta = 0;
    var dafYomi = null;
    if (calendar.get_yomTovIndex_vr5p8l_k$() === Companion_getInstance_17().get_YOM_KIPPUR_ewtovo_k$() ? true : calendar.get_yomTovIndex_vr5p8l_k$() === Companion_getInstance_17().get_TISHA_BEAV_bmunpl_k$()) {
      return null;
    }
    // Inline function 'kotlin.require' call
    var tmp0_require = requested.compareTo_qie524_k$(this.DAF_YOMI_START_DAY_1) >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.kosherjava.zmanim.hebrewcalendar.YerushalmiYomiCalculator.getDafYomiYerushalmi.<anonymous>' call
      tmp$ret$0 = '' + requested + ' is prior to organized Daf Yomi Yerushalmi cycles that started on ' + YerushalmiYomiCalculator_getInstance().DAF_YOMI_START_DAY_1;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var nextCycle = this.DAF_YOMI_START_DAY_1;
    var prevCycle = System_getInstance().now_2cba_k$();
    while (requested.compareTo_qie524_k$(nextCycle) > 0) {
      prevCycle = nextCycle;
      var tmp = nextCycle;
      var tmp$ret$1;
      // Inline function 'kotlin.time.Companion.days' call
      var tmp1__get_days__adwit5 = Companion_getInstance();
      var tmp2__get_days__cir7o8 = 1554;
      tmp$ret$1 = toDuration_0(tmp2__get_days__cir7o8, DurationUnit_DAYS_getInstance());
      nextCycle = tmp.plus_bswwzx_k$(tmp$ret$1);
      var tmp_0 = nextCycle;
      var tmp$ret$2;
      // Inline function 'kotlin.time.Companion.days' call
      var tmp3__get_days__enlwjb = Companion_getInstance();
      var tmp4__get_days__gsglee = getNumOfSpecialDays(this, prevCycle, nextCycle);
      tmp$ret$2 = toDuration_0(tmp4__get_days__gsglee, DurationUnit_DAYS_getInstance());
      nextCycle = tmp_0.plus_bswwzx_k$(tmp$ret$2);
    }
    var dafNo = daysUntil(prevCycle, requested, this.timeZone_1);
    var specialDays = getNumOfSpecialDays(this, prevCycle, requested);
    var total = dafNo - specialDays | 0;
    var inductionVariable = 0;
    var last = this.BLATT_PER_MASECHTA_1.length - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (total < this.BLATT_PER_MASECHTA_1[j]) {
          dafYomi = new Daf(masechta, total + 1 | 0);
          break $l$loop;
        }
        total = total - this.BLATT_PER_MASECHTA_1[j] | 0;
        var tmp1 = masechta;
        masechta = tmp1 + 1 | 0;
      }
       while (inductionVariable <= last);
    return dafYomi;
  };
  var YerushalmiYomiCalculator_instance;
  function YerushalmiYomiCalculator_getInstance() {
    if (YerushalmiYomiCalculator_instance == null)
      new YerushalmiYomiCalculator();
    return YerushalmiYomiCalculator_instance;
  }
  function _get_dafYomiStartDay__ymhles($this) {
    return $this.dafYomiStartDay_1;
  }
  function _get_dafYomiJulianStartDay__7gi0fb($this) {
    return $this.dafYomiJulianStartDay_1;
  }
  function _get_shekalimChangeDay__44jm35($this) {
    return $this.shekalimChangeDay_1;
  }
  function _get_shekalimJulianChangeDay__lpts1o($this) {
    return $this.shekalimJulianChangeDay_1;
  }
  function get_$stableprop_13() {
    return 0;
  }
  function YomiCalculator() {
    YomiCalculator_instance = this;
    this.dafYomiStartDay_1 = LocalDate_init_$Create$(1923, 9, 11);
    this.dafYomiJulianStartDay_1 = numberToInt(DateUtils_getInstance().getJulianDay_mht2hh_k$(this.dafYomiStartDay_1));
    this.shekalimChangeDay_1 = LocalDate_init_$Create$(1975, 6, 24);
    this.shekalimJulianChangeDay_1 = numberToInt(DateUtils_getInstance().getJulianDay_mht2hh_k$(this.shekalimChangeDay_1));
    this.$stable_1 = 0;
  }
  protoOf(YomiCalculator).getDafYomiBavli_5lk8z4_k$ = function (jewishCalendar) {
    var tmp$ret$0;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$0 = new Int32Array([64, 157, 105, 121, 22, 88, 56, 40, 35, 31, 32, 29, 27, 122, 112, 91, 66, 49, 90, 82, 119, 119, 176, 113, 24, 49, 76, 14, 120, 110, 142, 61, 34, 34, 28, 22, 4, 9, 5, 73]);
    var blattPerMasechta = tmp$ret$0;
    var LocalDate = jewishCalendar.get_gregorianLocalDate_slbzek_k$();
    var dafYomi = null;
    var julianDay = numberToInt(DateUtils_getInstance().getJulianDay_mht2hh_k$(LocalDate));
    var cycleNo;
    var dafNo;
    // Inline function 'kotlin.require' call
    var tmp0_require = LocalDate.compareTo_2osj5o_k$(this.dafYomiStartDay_1) >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'com.kosherjava.zmanim.hebrewcalendar.YomiCalculator.getDafYomiBavli.<anonymous>' call
      tmp$ret$1 = '' + LocalDate + ' is prior to organized Daf Yomi Bavli cycles that started on ' + YomiCalculator_getInstance().dafYomiStartDay_1;
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (LocalDate.compareTo_2osj5o_k$(this.shekalimChangeDay_1) >= 0) {
      cycleNo = 8 + ((julianDay - this.shekalimJulianChangeDay_1 | 0) / 2711 | 0) | 0;
      dafNo = (julianDay - this.shekalimJulianChangeDay_1 | 0) % 2711 | 0;
    } else {
      cycleNo = 1 + ((julianDay - this.dafYomiJulianStartDay_1 | 0) / 2702 | 0) | 0;
      dafNo = (julianDay - this.dafYomiJulianStartDay_1 | 0) % 2702 | 0;
    }
    var total = 0;
    var masechta = -1;
    var blatt;
    if (cycleNo <= 7) {
      blattPerMasechta[4] = 13;
    } else {
      blattPerMasechta[4] = 22;
    }
    var inductionVariable = 0;
    var last = blattPerMasechta.length - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1 = masechta;
        masechta = tmp1 + 1 | 0;
        total = (total + blattPerMasechta[j] | 0) - 1 | 0;
        if (dafNo < total) {
          blatt = (1 + blattPerMasechta[j] | 0) - (total - dafNo | 0) | 0;
          var tmp2_subject = masechta;
          switch (tmp2_subject) {
            case 36:
              blatt = blatt + 21 | 0;
              break;
            case 37:
              blatt = blatt + 24 | 0;
              break;
            case 38:
              blatt = blatt + 32 | 0;
              break;
          }
          dafYomi = new Daf(masechta, blatt);
          break $l$loop;
        }
      }
       while (inductionVariable <= last);
    return dafYomi;
  };
  var YomiCalculator_instance;
  function YomiCalculator_getInstance() {
    if (YomiCalculator_instance == null)
      new YomiCalculator();
    return YomiCalculator_instance;
  }
  function _get_GEOMETRIC_ZENITH__b1pqs3($this) {
    return $this.GEOMETRIC_ZENITH_1;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.DEGREES_TO_RADIANS_1 = 0.017453292519943295;
    this.RADIANS_TO_DEGREES_1 = 57.29577951308232;
    this.GEOMETRIC_ZENITH_1 = 90.0;
  }
  protoOf(Companion_6).get_DEGREES_TO_RADIANS_v1cdhr_k$ = function () {
    return this.DEGREES_TO_RADIANS_1;
  };
  protoOf(Companion_6).get_RADIANS_TO_DEGREES_84upjt_k$ = function () {
    return this.RADIANS_TO_DEGREES_1;
  };
  protoOf(Companion_6).toDegrees_3ndphx_k$ = function (angrad) {
    return angrad * 57.29577951308232;
  };
  protoOf(Companion_6).toRadians_q39aye_k$ = function (angdeg) {
    return angdeg * 0.017453292519943295;
  };
  protoOf(Companion_6).get_default_qtagd4_k$ = function () {
    return new NOAACalculator();
  };
  var Companion_instance_6;
  function Companion_getInstance_19() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function get_$stableprop_14() {
    return 8;
  }
  function AstronomicalCalculator() {
    Companion_getInstance_19();
    this.refraction_1 = 0.5666666666666667;
    this.solarRadius_1 = 0.26666666666666666;
    this.earthRadius_1 = 6356.9;
    this.$stable_1 = 8;
  }
  protoOf(AstronomicalCalculator).set_refraction_ckd9c_k$ = function (_set____db54di) {
    this.refraction_1 = _set____db54di;
  };
  protoOf(AstronomicalCalculator).get_refraction_rmmgci_k$ = function () {
    return this.refraction_1;
  };
  protoOf(AstronomicalCalculator).set_solarRadius_otaryc_k$ = function (_set____db54di) {
    this.solarRadius_1 = _set____db54di;
  };
  protoOf(AstronomicalCalculator).get_solarRadius_2q428a_k$ = function () {
    return this.solarRadius_1;
  };
  protoOf(AstronomicalCalculator).set_earthRadius_4c5clp_k$ = function (_set____db54di) {
    this.earthRadius_1 = _set____db54di;
  };
  protoOf(AstronomicalCalculator).get_earthRadius_ois9nx_k$ = function () {
    return this.earthRadius_1;
  };
  protoOf(AstronomicalCalculator).getElevationAdjustment_z813oz_k$ = function (elevation) {
    var tmp = Companion_getInstance_19();
    var tmp$ret$0;
    // Inline function 'kotlin.math.acos' call
    var tmp0_acos = this.earthRadius_1 / (this.earthRadius_1 + elevation / 1000);
    tmp$ret$0 = Math.acos(tmp0_acos);
    return tmp.toDegrees_3ndphx_k$(tmp$ret$0);
  };
  protoOf(AstronomicalCalculator).adjustZenith_qy46d5_k$ = function (zenith, elevation) {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.kosherjava.zmanim.util.AstronomicalCalculator.adjustZenith.<anonymous>' call
    Companion_getInstance_19();
    tmp$ret$0 = zenith === 90.0;
    if (!tmp$ret$0) {
      tmp = zenith;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_elvis_lhs = tmp$ret$1;
    return tmp0_elvis_lhs == null ? zenith + this.solarRadius_1 + this.refraction_1 + this.getElevationAdjustment_z813oz_k$(elevation) : tmp0_elvis_lhs;
  };
  function get_$stableprop_15() {
    return 0;
  }
  function DateUtils() {
    DateUtils_instance = this;
    this.$stable_1 = 0;
  }
  protoOf(DateUtils).getJulianDay_mht2hh_k$ = function (date) {
    var year = date.get_year_woy26e_k$();
    var month = date.get_monthNumber_nb47ls_k$();
    var day = date.get_dayOfMonth_vblo3a_k$();
    if (month <= 2) {
      year = year - 1 | 0;
      month = month + 12 | 0;
    }
    var a = year / 100 | 0;
    var b = (2 - a | 0) + (a / 4 | 0) | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.math.floor' call
    var tmp0_floor = 365.25 * (year + 4716 | 0);
    tmp$ret$0 = Math.floor(tmp0_floor);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.floor' call
    var tmp1_floor = 30.6001 * (month + 1 | 0);
    tmp$ret$1 = Math.floor(tmp1_floor);
    return tmp + tmp$ret$1 + day + b - 1524.5;
  };
  protoOf(DateUtils).now_x1bz8r_k$ = function (_this__u8e3s4) {
    return toLocalDateTime(System_getInstance().now_2cba_k$(), Companion_getInstance_0().currentSystemDefault_9rduv_k$()).get_date_wokkxj_k$();
  };
  var DateUtils_instance;
  function DateUtils_getInstance() {
    if (DateUtils_instance == null)
      new DateUtils();
    return DateUtils_instance;
  }
  function _get_DISTANCE__5dyliu($this) {
    return $this.DISTANCE_1;
  }
  function _get_INITIAL_BEARING__41jl6q($this) {
    return $this.INITIAL_BEARING_1;
  }
  function _get_FINAL_BEARING__5nmggc($this) {
    return $this.FINAL_BEARING_1;
  }
  function _get_MINUTE_MILLIS__4iwov4($this) {
    return $this.MINUTE_MILLIS_1;
  }
  function _get_HOUR_MILLIS__4h8mgg($this) {
    return $this.HOUR_MILLIS_1;
  }
  function GeoLocation_init_$Init$(name, latitude, longitude, timeZone, $this) {
    GeoLocation_init_$Init$_0(name, latitude, longitude, 0.0, timeZone, $this);
    return $this;
  }
  function GeoLocation_init_$Create$(name, latitude, longitude, timeZone) {
    return GeoLocation_init_$Init$(name, latitude, longitude, timeZone, objectCreate(protoOf(GeoLocation)));
  }
  function GeoLocation_init_$Init$_0(name, latitude, longitude, elevation, timeZone, $this) {
    GeoLocation.call($this, timeZone, name);
    $this.set_latitude_w9j8q1_k$(latitude);
    $this.set_longitude_nwpge8_k$(longitude);
    $this.set_elevation_qws0sy_k$(elevation);
    return $this;
  }
  function GeoLocation_init_$Create$_0(name, latitude, longitude, elevation, timeZone) {
    return GeoLocation_init_$Init$_0(name, latitude, longitude, elevation, timeZone, objectCreate(protoOf(GeoLocation)));
  }
  function GeoLocation_init_$Init$_1($this) {
    GeoLocation.call($this, Companion_getInstance_0().get_UTC_18jizp_k$(), 'Greenwich, England');
    $this.set_longitude_nwpge8_k$(0.0);
    $this.set_latitude_w9j8q1_k$(51.4772);
    return $this;
  }
  function GeoLocation_init_$Create$_1() {
    return GeoLocation_init_$Init$_1(objectCreate(protoOf(GeoLocation)));
  }
  function vincentyFormula($this, location, formula) {
    var a = 6378137.0;
    var b = 6356752.3142;
    var f = 0.0033528106647474805;
    var L = Companion_getInstance_19().toRadians_q39aye_k$(location.longitude_1 - $this.longitude_1);
    var tmp$ret$1;
    // Inline function 'kotlin.math.atan' call
    var tmp = 1 - f;
    var tmp$ret$0;
    // Inline function 'kotlin.math.tan' call
    var tmp0_tan = Companion_getInstance_19().toRadians_q39aye_k$($this.latitude_1);
    tmp$ret$0 = Math.tan(tmp0_tan);
    var tmp1_atan = tmp * tmp$ret$0;
    tmp$ret$1 = Math.atan(tmp1_atan);
    var U1 = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.math.atan' call
    var tmp_0 = 1 - f;
    var tmp$ret$2;
    // Inline function 'kotlin.math.tan' call
    var tmp2_tan = Companion_getInstance_19().toRadians_q39aye_k$(location.latitude_1);
    tmp$ret$2 = Math.tan(tmp2_tan);
    var tmp3_atan = tmp_0 * tmp$ret$2;
    tmp$ret$3 = Math.atan(tmp3_atan);
    var U2 = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.math.sin' call
    tmp$ret$4 = Math.sin(U1);
    var sinU1 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'kotlin.math.cos' call
    tmp$ret$5 = Math.cos(U1);
    var cosU1 = tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'kotlin.math.sin' call
    tmp$ret$6 = Math.sin(U2);
    var sinU2 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'kotlin.math.cos' call
    tmp$ret$7 = Math.cos(U2);
    var cosU2 = tmp$ret$7;
    var lambda = L;
    var lambdaP = 2 * get_PI();
    var iterLimit = 20.0;
    var sinLambda = 0.0;
    var cosLambda = 0.0;
    var sinSigma = 0.0;
    var cosSigma = 0.0;
    var sigma = 0.0;
    var sinAlpha;
    var cosSqAlpha = 0.0;
    var cos2SigmaM = 0.0;
    var C;
    $l$loop: while (true) {
      var tmp_1;
      var tmp$ret$8;
      // Inline function 'kotlin.math.abs' call
      var tmp4_abs = lambda - lambdaP;
      tmp$ret$8 = Math.abs(tmp4_abs);
      if (tmp$ret$8 > 1.0E-12) {
        iterLimit = iterLimit - 1;
        tmp_1 = iterLimit > 0.0;
      } else {
        tmp_1 = false;
      }
      if (!tmp_1) {
        break $l$loop;
      }
      var tmp$ret$9;
      // Inline function 'kotlin.math.sin' call
      var tmp5_sin = lambda;
      tmp$ret$9 = Math.sin(tmp5_sin);
      sinLambda = tmp$ret$9;
      var tmp$ret$10;
      // Inline function 'kotlin.math.cos' call
      var tmp6_cos = lambda;
      tmp$ret$10 = Math.cos(tmp6_cos);
      cosLambda = tmp$ret$10;
      var tmp$ret$11;
      // Inline function 'kotlin.math.sqrt' call
      var tmp7_sqrt = cosU2 * sinLambda * (cosU2 * sinLambda) + (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda) * (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda);
      tmp$ret$11 = Math.sqrt(tmp7_sqrt);
      sinSigma = tmp$ret$11;
      if (sinSigma === 0.0)
        return 0.0;
      cosSigma = sinU1 * sinU2 + cosU1 * cosU2 * cosLambda;
      var tmp$ret$12;
      // Inline function 'kotlin.math.atan2' call
      var tmp8_atan2 = sinSigma;
      var tmp9_atan2 = cosSigma;
      tmp$ret$12 = Math.atan2(tmp8_atan2, tmp9_atan2);
      sigma = tmp$ret$12;
      sinAlpha = cosU1 * cosU2 * sinLambda / sinSigma;
      cosSqAlpha = 1 - sinAlpha * sinAlpha;
      cos2SigmaM = cosSigma - 2 * sinU1 * sinU2 / cosSqAlpha;
      if (isNaN_0(cos2SigmaM))
        cos2SigmaM = 0.0;
      C = f / 16 * cosSqAlpha * (4 + f * (4 - 3 * cosSqAlpha));
      lambdaP = lambda;
      lambda = L + (1 - C) * f * sinAlpha * (sigma + C * sinSigma * (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM)));
    }
    if (iterLimit === 0.0)
      return DoubleCompanionObject_getInstance().get_NaN_18jnv2_k$();
    var uSq = cosSqAlpha * (a * a - b * b) / (b * b);
    var A = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
    var B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));
    var deltaSigma = B * sinSigma * (cos2SigmaM + B / 4 * (cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM) - B / 6 * cos2SigmaM * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * cos2SigmaM * cos2SigmaM)));
    var distance = b * A * (sigma - deltaSigma);
    var tmp_2 = Companion_getInstance_19();
    var tmp$ret$13;
    // Inline function 'kotlin.math.atan2' call
    var tmp10_atan2 = cosU2 * sinLambda;
    var tmp11_atan2 = cosU1 * sinU2 - sinU1 * cosU2 * cosLambda;
    tmp$ret$13 = Math.atan2(tmp10_atan2, tmp11_atan2);
    var fwdAz = tmp_2.toDegrees_3ndphx_k$(tmp$ret$13);
    var tmp_3 = Companion_getInstance_19();
    var tmp$ret$14;
    // Inline function 'kotlin.math.atan2' call
    var tmp12_atan2 = cosU1 * sinLambda;
    var tmp13_atan2 = -sinU1 * cosU2 + cosU1 * sinU2 * cosLambda;
    tmp$ret$14 = Math.atan2(tmp12_atan2, tmp13_atan2);
    var revAz = tmp_3.toDegrees_3ndphx_k$(tmp$ret$14);
    var tmp0_subject = formula;
    var tmp_4;
    Companion_getInstance_20();
    if (tmp0_subject === 0) {
      tmp_4 = distance;
    } else {
      Companion_getInstance_20();
      if (tmp0_subject === 1) {
        tmp_4 = fwdAz;
      } else {
        Companion_getInstance_20();
        if (tmp0_subject === 2) {
          tmp_4 = revAz;
        } else {
          tmp_4 = DoubleCompanionObject_getInstance().get_NaN_18jnv2_k$();
        }
      }
    }
    return tmp_4;
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.DISTANCE_1 = 0;
    this.INITIAL_BEARING_1 = 1;
    this.FINAL_BEARING_1 = 2;
    this.MINUTE_MILLIS_1 = new Long(60000, 0);
    this.HOUR_MILLIS_1 = new Long(3600000, 0);
  }
  protoOf(Companion_7).get_rawOffset_ayohhm_k$ = function (_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof FixedOffsetTimeZone) {
      var tmp$ret$0;
      // Inline function 'kotlin.time.Companion.seconds' call
      var tmp0__get_seconds__yb22lo = Companion_getInstance();
      var tmp1__get_seconds__bshwyb = _this__u8e3s4.get_offset_hjmqak_k$().get_totalSeconds_oq5924_k$();
      tmp$ret$0 = toDuration_0(tmp1__get_seconds__bshwyb, DurationUnit_SECONDS_getInstance());
      tmp = _Duration___get_inWholeMilliseconds__impl__msfiry(tmp$ret$0);
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.time.Companion.seconds' call
      var tmp2__get_seconds__d525gu = Companion_getInstance();
      var tmp3__get_seconds__wyhu35 = offsetAt(_this__u8e3s4, System_getInstance().now_2cba_k$()).get_totalSeconds_oq5924_k$();
      tmp$ret$1 = toDuration_0(tmp3__get_seconds__wyhu35, DurationUnit_SECONDS_getInstance());
      tmp = _Duration___get_inWholeMilliseconds__impl__msfiry(tmp$ret$1);
    }
    return tmp;
  };
  var Companion_instance_7;
  function Companion_getInstance_20() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function get_$stableprop_16() {
    return 8;
  }
  function GeoLocation(timeZone, locationName) {
    Companion_getInstance_20();
    this.timeZone_1 = timeZone;
    this.locationName_1 = locationName;
    this.latitude_1 = 0.0;
    this.longitude_1 = 0.0;
    this.elevation_1 = 0.0;
    this.$stable_1 = 8;
  }
  protoOf(GeoLocation).set_timeZone_r5or0b_k$ = function (_set____db54di) {
    this.timeZone_1 = _set____db54di;
  };
  protoOf(GeoLocation).get_timeZone_4vh49u_k$ = function () {
    return this.timeZone_1;
  };
  protoOf(GeoLocation).set_locationName_cjupx1_k$ = function (_set____db54di) {
    this.locationName_1 = _set____db54di;
  };
  protoOf(GeoLocation).get_locationName_3kqvjd_k$ = function () {
    return this.locationName_1;
  };
  protoOf(GeoLocation).set_latitude_w9j8q1_k$ = function (value) {
    // Inline function 'kotlin.require' call
    var tmp0_require = !(this.latitude_1 > 90.0 ? true : this.latitude_1 < -90.0);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.kosherjava.zmanim.util.GeoLocation.<set-latitude>.<anonymous>' call
      tmp$ret$0 = 'Latitude must be between -90 and  90';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.latitude_1 = value;
  };
  protoOf(GeoLocation).get_latitude_feukvp_k$ = function () {
    return this.latitude_1;
  };
  protoOf(GeoLocation).set_longitude_nwpge8_k$ = function (value) {
    // Inline function 'kotlin.require' call
    var tmp0_require = !(this.longitude_1 > 180.0 ? true : this.longitude_1 < -180.0);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.kosherjava.zmanim.util.GeoLocation.<set-longitude>.<anonymous>' call
      tmp$ret$0 = 'Longitude must be between -180 and  180';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.longitude_1 = value;
  };
  protoOf(GeoLocation).get_longitude_asb1fq_k$ = function () {
    return this.longitude_1;
  };
  protoOf(GeoLocation).set_elevation_qws0sy_k$ = function (elevation) {
    // Inline function 'kotlin.require' call
    var tmp0_require = elevation >= 0.0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.kosherjava.zmanim.util.GeoLocation.<set-elevation>.<anonymous>' call
      tmp$ret$0 = 'Elevation cannot be negative';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = !(isNaN_0(elevation) ? true : isInfinite(elevation));
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'com.kosherjava.zmanim.util.GeoLocation.<set-elevation>.<anonymous>' call
      tmp$ret$1 = 'Elevation must not be NaN or infinite';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.elevation_1 = elevation;
  };
  protoOf(GeoLocation).get_elevation_8fwyb8_k$ = function () {
    return this.elevation_1;
  };
  protoOf(GeoLocation).setLatitude_c71ees_k$ = function (degrees, minutes, seconds, direction) {
    var tempLat = degrees + (minutes + seconds / 60.0) / 60.0;
    // Inline function 'kotlin.require' call
    var tmp0_require = !(tempLat > 90.0 ? true : tempLat < 0.0);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.kosherjava.zmanim.util.GeoLocation.setLatitude.<anonymous>' call
      tmp$ret$0 = 'Latitude must be between 0 and  90. Use direction of S instead of negative.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (direction === 'S') {
      tempLat = tempLat * -1.0;
    } else {
      // Inline function 'kotlin.require' call
      var tmp1_require = direction === 'N';
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_require) {
        var tmp$ret$1;
        // Inline function 'com.kosherjava.zmanim.util.GeoLocation.setLatitude.<anonymous>' call
        tmp$ret$1 = 'Latitude direction must be N or S';
        var message_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    this.set_latitude_w9j8q1_k$(tempLat);
    return this;
  };
  protoOf(GeoLocation).setLongitude_5q9wuj_k$ = function (degrees, minutes, seconds, direction) {
    var longTemp = degrees + (minutes + seconds / 60.0) / 60.0;
    if (longTemp > 180.0 ? true : this.longitude_1 < 0.0) {
      throw IllegalArgumentException_init_$Create$('Longitude must be between 0 and  180.  Use a direction of W instead of negative.');
    }
    if (direction === 'W') {
      longTemp = longTemp * -1.0;
    } else {
      // Inline function 'kotlin.require' call
      var tmp0_require = direction === 'E';
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'com.kosherjava.zmanim.util.GeoLocation.setLongitude.<anonymous>' call
        tmp$ret$0 = 'Longitude direction must be E or W';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    this.set_longitude_nwpge8_k$(longTemp);
    return this;
  };
  protoOf(GeoLocation).get_localMeanTimeOffset_kr1cxl_k$ = function () {
    var tmp = this.longitude_1 * 4;
    Companion_getInstance_20();
    return numberToLong(tmp * (new Long(60000, 0)).toDouble_ygsx0s_k$() - Companion_getInstance_20().get_rawOffset_ayohhm_k$(this.timeZone_1).toDouble_ygsx0s_k$());
  };
  protoOf(GeoLocation).get_antimeridianAdjustment_135zw9_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.div' call
    var tmp0_div = this.get_localMeanTimeOffset_kr1cxl_k$();
    Companion_getInstance_20();
    var tmp1_div = (new Long(3600000, 0)).toDouble_ygsx0s_k$();
    tmp$ret$0 = tmp0_div.toDouble_ygsx0s_k$() / tmp1_div;
    var localHoursOffset = tmp$ret$0;
    if (localHoursOffset >= 20.0) {
      return 1;
    } else if (localHoursOffset <= -20.0) {
      return -1;
    }
    return 0;
  };
  protoOf(GeoLocation).getGeodesicInitialBearing_cppng1_k$ = function (location) {
    Companion_getInstance_20();
    return vincentyFormula(this, location, 1);
  };
  protoOf(GeoLocation).getGeodesicFinalBearing_4myav3_k$ = function (location) {
    Companion_getInstance_20();
    return vincentyFormula(this, location, 2);
  };
  protoOf(GeoLocation).getGeodesicDistance_rtj83o_k$ = function (location) {
    Companion_getInstance_20();
    return vincentyFormula(this, location, 0);
  };
  protoOf(GeoLocation).getRhumbLineBearing_2t0yge_k$ = function (location) {
    var dLon = Companion_getInstance_19().toRadians_q39aye_k$(location.longitude_1 - this.longitude_1);
    var tmp$ret$2;
    // Inline function 'kotlin.math.ln' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.tan' call
    var tmp0_tan = Companion_getInstance_19().toRadians_q39aye_k$(location.latitude_1) / 2 + get_PI() / 4;
    tmp$ret$0 = Math.tan(tmp0_tan);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.tan' call
    var tmp1_tan = Companion_getInstance_19().toRadians_q39aye_k$(this.latitude_1) / 2 + get_PI() / 4;
    tmp$ret$1 = Math.tan(tmp1_tan);
    var tmp2_ln = tmp / tmp$ret$1;
    tmp$ret$2 = Math.log(tmp2_ln);
    var dPhi = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.math.abs' call
    var tmp3_abs = dLon;
    tmp$ret$3 = Math.abs(tmp3_abs);
    if (tmp$ret$3 > get_PI())
      dLon = dLon > 0.0 ? -(2 * get_PI() - dLon) : 2 * get_PI() + dLon;
    var tmp_0 = Companion_getInstance_19();
    var tmp$ret$4;
    // Inline function 'kotlin.math.atan2' call
    var tmp4_atan2 = dLon;
    tmp$ret$4 = Math.atan2(tmp4_atan2, dPhi);
    return tmp_0.toDegrees_3ndphx_k$(tmp$ret$4);
  };
  protoOf(GeoLocation).getRhumbLineDistance_2wpxjx_k$ = function (location) {
    var earthRadius = 6378137.0;
    var dLat = Companion_getInstance_19().toRadians_q39aye_k$(location.latitude_1) - Companion_getInstance_19().toRadians_q39aye_k$(this.latitude_1);
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = Companion_getInstance_19().toRadians_q39aye_k$(location.longitude_1) - Companion_getInstance_19().toRadians_q39aye_k$(this.longitude_1);
    tmp$ret$0 = Math.abs(tmp0_abs);
    var dLon = tmp$ret$0;
    var tmp$ret$3;
    // Inline function 'kotlin.math.ln' call
    var tmp$ret$1;
    // Inline function 'kotlin.math.tan' call
    var tmp1_tan = Companion_getInstance_19().toRadians_q39aye_k$(location.latitude_1) / 2 + get_PI() / 4;
    tmp$ret$1 = Math.tan(tmp1_tan);
    var tmp = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.math.tan' call
    var tmp2_tan = Companion_getInstance_19().toRadians_q39aye_k$(this.latitude_1) / 2 + get_PI() / 4;
    tmp$ret$2 = Math.tan(tmp2_tan);
    var tmp3_ln = tmp / tmp$ret$2;
    tmp$ret$3 = Math.log(tmp3_ln);
    var dPhi = tmp$ret$3;
    var q = dLat / dPhi;
    var tmp$ret$4;
    // Inline function 'kotlin.math.abs' call
    var tmp4_abs = q;
    tmp$ret$4 = Math.abs(tmp4_abs);
    if (tmp$ret$4 > DoubleCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$()) {
      var tmp$ret$5;
      // Inline function 'kotlin.math.cos' call
      var tmp5_cos = Companion_getInstance_19().toRadians_q39aye_k$(this.latitude_1);
      tmp$ret$5 = Math.cos(tmp5_cos);
      q = tmp$ret$5;
    }
    if (dLon > get_PI()) {
      dLon = 2 * get_PI() - dLon;
    }
    var tmp$ret$6;
    // Inline function 'kotlin.math.sqrt' call
    var tmp6_sqrt = dLat * dLat + q * q * dLon * dLon;
    tmp$ret$6 = Math.sqrt(tmp6_sqrt);
    var d = tmp$ret$6;
    return d * earthRadius;
  };
  protoOf(GeoLocation).toXML_1tsvj0_k$ = function () {
    var sb = StringBuilder_init_$Create$();
    sb.append_ssq29y_k$('<GeoLocation>\n');
    sb.append_ssq29y_k$('\t<LocationName>').append_ssq29y_k$(this.locationName_1).append_ssq29y_k$('<\/LocationName>\n');
    sb.append_ssq29y_k$('\t<Latitude>').append_t8pm91_k$(this.latitude_1).append_ssq29y_k$('<\/Latitude>\n');
    sb.append_ssq29y_k$('\t<Longitude>').append_t8pm91_k$(this.longitude_1).append_ssq29y_k$('<\/Longitude>\n');
    sb.append_ssq29y_k$('\t<Elevation>').append_t8pm91_k$(this.elevation_1).append_ssq29y_k$(' Meters').append_ssq29y_k$('<\/Elevation>\n');
    sb.append_ssq29y_k$('\t<TimezoneName>').append_ssq29y_k$(ensureNotNull(this.timeZone_1).get_id_kntnx8_k$()).append_ssq29y_k$('<\/TimezoneName>\n');
    sb.append_ssq29y_k$('\t<TimeZoneDisplayName>').append_ssq29y_k$(ensureNotNull(this.timeZone_1).get_id_kntnx8_k$()).append_ssq29y_k$('<\/TimeZoneDisplayName>\n');
    var tmp = sb.append_ssq29y_k$('\t<TimezoneGMTOffset>');
    var tmp_0 = Companion_getInstance_20().get_rawOffset_ayohhm_k$(ensureNotNull(this.timeZone_1));
    Companion_getInstance_20();
    tmp.append_t8pm91_k$(tmp_0.div_9s1fi3_k$(new Long(3600000, 0))).append_ssq29y_k$('<\/TimezoneGMTOffset>\n');
    var tmp_1 = sb.append_ssq29y_k$('\t<TimezoneDSTOffset>');
    var tmp_2 = Companion_getInstance_20().get_rawOffset_ayohhm_k$(ensureNotNull(this.timeZone_1));
    Companion_getInstance_20();
    tmp_1.append_t8pm91_k$(tmp_2.div_9s1fi3_k$(new Long(3600000, 0))).append_ssq29y_k$('<\/TimezoneDSTOffset>\n');
    sb.append_ssq29y_k$('<\/GeoLocation>');
    return sb.toString();
  };
  protoOf(GeoLocation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GeoLocation))
      return false;
    return (((toBits(this.latitude_1).equals(toBits(other.latitude_1)) ? toBits(this.longitude_1).equals(toBits(other.longitude_1)) : false) ? this.elevation_1 === other.elevation_1 : false) ? this.locationName_1 === other.locationName_1 : false) ? this.timeZone_1.equals(other.timeZone_1) : false;
  };
  protoOf(GeoLocation).hashCode = function () {
    var result = 17;
    var latLong = toBits(this.latitude_1);
    var lonLong = toBits(this.longitude_1);
    var elevLong = toBits(this.elevation_1);
    var latInt = latLong.xor_jjua9n_k$(latLong.ushr_rr8rvr_k$(32)).toInt_1tsl84_k$();
    var lonInt = lonLong.xor_jjua9n_k$(lonLong.ushr_rr8rvr_k$(32)).toInt_1tsl84_k$();
    var elevInt = elevLong.xor_jjua9n_k$(elevLong.ushr_rr8rvr_k$(32)).toInt_1tsl84_k$();
    result = imul(37, result) + getKClassFromExpression(this).hashCode() | 0;
    result = result + (imul(37, result) + latInt | 0) | 0;
    result = result + (imul(37, result) + lonInt | 0) | 0;
    result = result + (imul(37, result) + elevInt | 0) | 0;
    result = result + (imul(37, result) + getStringHashCode(this.locationName_1) | 0) | 0;
    result = result + (imul(37, result) + this.timeZone_1.hashCode() | 0) | 0;
    return result;
  };
  protoOf(GeoLocation).toString = function () {
    var sb = StringBuilder_init_$Create$();
    sb.append_ssq29y_k$('\nLocation Name:\t\t\t').append_ssq29y_k$(this.locationName_1);
    sb.append_ssq29y_k$('\nLatitude:\t\t\t').append_t8pm91_k$(this.latitude_1).append_ssq29y_k$('\xB0');
    sb.append_ssq29y_k$('\nLongitude:\t\t\t').append_t8pm91_k$(this.longitude_1).append_ssq29y_k$('\xB0');
    sb.append_ssq29y_k$('\nElevation:\t\t\t').append_t8pm91_k$(this.elevation_1).append_ssq29y_k$(' Meters');
    sb.append_ssq29y_k$('\nTimezone ID:\t\t\t').append_ssq29y_k$(ensureNotNull(this.timeZone_1).get_id_kntnx8_k$());
    sb.append_ssq29y_k$('\nTimezone Display Name:\t\t').append_ssq29y_k$(ensureNotNull(this.timeZone_1).get_id_kntnx8_k$()).append_ssq29y_k$(' (').append_ssq29y_k$(ensureNotNull(this.timeZone_1).get_id_kntnx8_k$()).append_ssq29y_k$(')');
    var tmp = sb.append_ssq29y_k$('\nTimezone GMT Offset:\t\t');
    var tmp_0 = Companion_getInstance_20().get_rawOffset_ayohhm_k$(ensureNotNull(this.timeZone_1));
    Companion_getInstance_20();
    tmp.append_t8pm91_k$(tmp_0.div_9s1fi3_k$(new Long(3600000, 0)));
    var tmp_1 = sb.append_ssq29y_k$('\nTimezone DST Offset:\t\t');
    var tmp_2 = Companion_getInstance_20().get_rawOffset_ayohhm_k$(ensureNotNull(this.timeZone_1));
    Companion_getInstance_20();
    tmp_1.append_t8pm91_k$(tmp_2.div_9s1fi3_k$(new Long(3600000, 0)));
    return sb.toString();
  };
  protoOf(GeoLocation).component1_7eebsc_k$ = function () {
    return this.timeZone_1;
  };
  protoOf(GeoLocation).component2_7eebsb_k$ = function () {
    return this.locationName_1;
  };
  protoOf(GeoLocation).copy_gzivhm_k$ = function (timeZone, locationName) {
    return new GeoLocation(timeZone, locationName);
  };
  protoOf(GeoLocation).copy$default_ceu64i_k$ = function (timeZone, locationName, $super) {
    timeZone = timeZone === VOID ? this.timeZone_1 : timeZone;
    locationName = locationName === VOID ? this.locationName_1 : locationName;
    return $super === VOID ? this.copy_gzivhm_k$(timeZone, locationName) : $super.copy_gzivhm_k$.call(this, timeZone, locationName);
  };
  function _get_JULIAN_DAY_JAN_1_2000__exm24w($this) {
    return $this.JULIAN_DAY_JAN_1_2000__1;
  }
  function _get_JULIAN_DAYS_PER_CENTURY__be6rzx($this) {
    return $this.JULIAN_DAYS_PER_CENTURY_1;
  }
  function getJulianCenturiesFromJulianDay($this, julianDay) {
    return (julianDay - 2451545.0) / 36525.0;
  }
  function getJulianDayFromJulianCenturies($this, julianCenturies) {
    return julianCenturies * 36525.0 + 2451545.0;
  }
  function getSunGeometricMeanLongitude($this, julianCenturies) {
    var longitude = 280.46646 + julianCenturies * (36000.76983 + 3.032E-4 * julianCenturies);
    while (longitude > 360.0)
      longitude = longitude - 360.0;
    while (longitude < 0.0)
      longitude = longitude + 360.0;
    return longitude;
  }
  function getSunGeometricMeanAnomaly($this, julianCenturies) {
    return 357.52911 + julianCenturies * (35999.05029 - 1.537E-4 * julianCenturies);
  }
  function getEarthOrbitEccentricity($this, julianCenturies) {
    return 0.016708634 - julianCenturies * (4.2037E-5 + 1.267E-7 * julianCenturies);
  }
  function getSunEquationOfCenter($this, julianCenturies) {
    var m = getSunGeometricMeanAnomaly($this, julianCenturies);
    var mrad = Companion_getInstance_19().toRadians_q39aye_k$(m);
    var tmp$ret$0;
    // Inline function 'kotlin.math.sin' call
    tmp$ret$0 = Math.sin(mrad);
    var sinm = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sin' call
    var tmp0_sin = mrad + mrad;
    tmp$ret$1 = Math.sin(tmp0_sin);
    var sin2m = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.math.sin' call
    var tmp1_sin = mrad + mrad + mrad;
    tmp$ret$2 = Math.sin(tmp1_sin);
    var sin3m = tmp$ret$2;
    return sinm * (1.914602 - julianCenturies * (0.004817 + 1.4E-5 * julianCenturies)) + sin2m * (0.019993 - 1.01E-4 * julianCenturies) + sin3m * 2.89E-4;
  }
  function getSunTrueLongitude($this, julianCenturies) {
    var sunLongitude = getSunGeometricMeanLongitude($this, julianCenturies);
    var center = getSunEquationOfCenter($this, julianCenturies);
    return sunLongitude + center;
  }
  function getSunApparentLongitude($this, julianCenturies) {
    var sunTrueLongitude = getSunTrueLongitude($this, julianCenturies);
    var omega = 125.04 - 1934.136 * julianCenturies;
    var tmp = sunTrueLongitude - 0.00569;
    var tmp$ret$0;
    // Inline function 'kotlin.math.sin' call
    var tmp0_sin = Companion_getInstance_19().toRadians_q39aye_k$(omega);
    tmp$ret$0 = Math.sin(tmp0_sin);
    var lambda = tmp - 0.00478 * tmp$ret$0;
    return lambda;
  }
  function getMeanObliquityOfEcliptic($this, julianCenturies) {
    var seconds = 21.448 - julianCenturies * (46.815 + julianCenturies * (5.9E-4 - julianCenturies * 0.001813));
    return 23.0 + (26.0 + seconds / 60.0) / 60.0;
  }
  function getObliquityCorrection($this, julianCenturies) {
    var obliquityOfEcliptic = getMeanObliquityOfEcliptic($this, julianCenturies);
    var omega = 125.04 - 1934.136 * julianCenturies;
    var tmp$ret$0;
    // Inline function 'kotlin.math.cos' call
    var tmp0_cos = Companion_getInstance_19().toRadians_q39aye_k$(omega);
    tmp$ret$0 = Math.cos(tmp0_cos);
    return obliquityOfEcliptic + 0.00256 * tmp$ret$0;
  }
  function getSunDeclination($this, julianCenturies) {
    var obliquityCorrection = getObliquityCorrection($this, julianCenturies);
    var lambda = getSunApparentLongitude($this, julianCenturies);
    var tmp$ret$0;
    // Inline function 'kotlin.math.sin' call
    var tmp0_sin = Companion_getInstance_19().toRadians_q39aye_k$(obliquityCorrection);
    tmp$ret$0 = Math.sin(tmp0_sin);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sin' call
    var tmp1_sin = Companion_getInstance_19().toRadians_q39aye_k$(lambda);
    tmp$ret$1 = Math.sin(tmp1_sin);
    var sint = tmp * tmp$ret$1;
    var tmp_0 = Companion_getInstance_19();
    var tmp$ret$2;
    // Inline function 'kotlin.math.asin' call
    tmp$ret$2 = Math.asin(sint);
    var theta = tmp_0.toDegrees_3ndphx_k$(tmp$ret$2);
    return theta;
  }
  function getEquationOfTime($this, julianCenturies) {
    var epsilon = getObliquityCorrection($this, julianCenturies);
    var geomMeanLongSun = getSunGeometricMeanLongitude($this, julianCenturies);
    var eccentricityEarthOrbit = getEarthOrbitEccentricity($this, julianCenturies);
    var geomMeanAnomalySun = getSunGeometricMeanAnomaly($this, julianCenturies);
    var tmp$ret$0;
    // Inline function 'kotlin.math.tan' call
    var tmp0_tan = Companion_getInstance_19().toRadians_q39aye_k$(epsilon) / 2.0;
    tmp$ret$0 = Math.tan(tmp0_tan);
    var y = tmp$ret$0;
    y = y * y;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sin' call
    var tmp1_sin = 2.0 * Companion_getInstance_19().toRadians_q39aye_k$(geomMeanLongSun);
    tmp$ret$1 = Math.sin(tmp1_sin);
    var sin2l0 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.math.sin' call
    var tmp2_sin = Companion_getInstance_19().toRadians_q39aye_k$(geomMeanAnomalySun);
    tmp$ret$2 = Math.sin(tmp2_sin);
    var sinm = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.math.cos' call
    var tmp3_cos = 2.0 * Companion_getInstance_19().toRadians_q39aye_k$(geomMeanLongSun);
    tmp$ret$3 = Math.cos(tmp3_cos);
    var cos2l0 = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.math.sin' call
    var tmp4_sin = 4.0 * Companion_getInstance_19().toRadians_q39aye_k$(geomMeanLongSun);
    tmp$ret$4 = Math.sin(tmp4_sin);
    var sin4l0 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'kotlin.math.sin' call
    var tmp5_sin = 2.0 * Companion_getInstance_19().toRadians_q39aye_k$(geomMeanAnomalySun);
    tmp$ret$5 = Math.sin(tmp5_sin);
    var sin2m = tmp$ret$5;
    var equationOfTime = y * sin2l0 - 2.0 * eccentricityEarthOrbit * sinm + 4.0 * eccentricityEarthOrbit * y * sinm * cos2l0 - 0.5 * y * y * sin4l0 - 1.25 * eccentricityEarthOrbit * eccentricityEarthOrbit * sin2m;
    return Companion_getInstance_19().toDegrees_3ndphx_k$(equationOfTime) * 4.0;
  }
  function getSunHourAngleAtSunrise($this, lat, solarDec, zenith) {
    var latRad = Companion_getInstance_19().toRadians_q39aye_k$(lat);
    var sdRad = Companion_getInstance_19().toRadians_q39aye_k$(solarDec);
    var tmp$ret$5;
    // Inline function 'kotlin.math.acos' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.cos' call
    var tmp0_cos = Companion_getInstance_19().toRadians_q39aye_k$(zenith);
    tmp$ret$0 = Math.cos(tmp0_cos);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.cos' call
    tmp$ret$1 = Math.cos(latRad);
    var tmp_0 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.math.cos' call
    tmp$ret$2 = Math.cos(sdRad);
    var tmp_1 = tmp / (tmp_0 * tmp$ret$2);
    var tmp$ret$3;
    // Inline function 'kotlin.math.tan' call
    tmp$ret$3 = Math.tan(latRad);
    var tmp_2 = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.math.tan' call
    tmp$ret$4 = Math.tan(sdRad);
    var tmp1_acos = tmp_1 - tmp_2 * tmp$ret$4;
    tmp$ret$5 = Math.acos(tmp1_acos);
    return tmp$ret$5;
  }
  function getSunHourAngleAtSunset($this, lat, solarDec, zenith) {
    var latRad = Companion_getInstance_19().toRadians_q39aye_k$(lat);
    var sdRad = Companion_getInstance_19().toRadians_q39aye_k$(solarDec);
    var tmp$ret$5;
    // Inline function 'kotlin.math.acos' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.cos' call
    var tmp0_cos = Companion_getInstance_19().toRadians_q39aye_k$(zenith);
    tmp$ret$0 = Math.cos(tmp0_cos);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.cos' call
    tmp$ret$1 = Math.cos(latRad);
    var tmp_0 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.math.cos' call
    tmp$ret$2 = Math.cos(sdRad);
    var tmp_1 = tmp / (tmp_0 * tmp$ret$2);
    var tmp$ret$3;
    // Inline function 'kotlin.math.tan' call
    tmp$ret$3 = Math.tan(latRad);
    var tmp_2 = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.math.tan' call
    tmp$ret$4 = Math.tan(sdRad);
    var tmp1_acos = tmp_1 - tmp_2 * tmp$ret$4;
    tmp$ret$5 = Math.acos(tmp1_acos);
    var hourAngle = tmp$ret$5;
    return -hourAngle;
  }
  function getSunriseUTC($this, julianDay, latitude, longitude, zenith) {
    var julianCenturies = getJulianCenturiesFromJulianDay($this, julianDay);
    var noonmin = getSolarNoonUTC($this, julianCenturies, longitude);
    var tnoon = getJulianCenturiesFromJulianDay($this, julianDay + noonmin / 1440.0);
    var eqTime = getEquationOfTime($this, tnoon);
    var solarDec = getSunDeclination($this, tnoon);
    var hourAngle = getSunHourAngleAtSunrise($this, latitude, solarDec, zenith);
    var delta = longitude - Companion_getInstance_19().toDegrees_3ndphx_k$(hourAngle);
    var timeDiff = 4 * delta;
    var timeUTC = 720 + timeDiff - eqTime;
    var newt = getJulianCenturiesFromJulianDay($this, getJulianDayFromJulianCenturies($this, julianCenturies) + timeUTC / 1440.0);
    eqTime = getEquationOfTime($this, newt);
    solarDec = getSunDeclination($this, newt);
    hourAngle = getSunHourAngleAtSunrise($this, latitude, solarDec, zenith);
    delta = longitude - Companion_getInstance_19().toDegrees_3ndphx_k$(hourAngle);
    timeDiff = 4 * delta;
    timeUTC = 720 + timeDiff - eqTime;
    return timeUTC;
  }
  function getSolarNoonUTC($this, julianCenturies, longitude) {
    var tnoon = getJulianCenturiesFromJulianDay($this, getJulianDayFromJulianCenturies($this, julianCenturies) + longitude / 360.0);
    var eqTime = getEquationOfTime($this, tnoon);
    var solNoonUTC = 720 + longitude * 4 - eqTime;
    var newt = getJulianCenturiesFromJulianDay($this, getJulianDayFromJulianCenturies($this, julianCenturies) - 0.5 + solNoonUTC / 1440.0);
    eqTime = getEquationOfTime($this, newt);
    return 720 + longitude * 4 - eqTime;
  }
  function getSunsetUTC($this, julianDay, latitude, longitude, zenith) {
    var julianCenturies = getJulianCenturiesFromJulianDay($this, julianDay);
    var noonmin = getSolarNoonUTC($this, julianCenturies, longitude);
    var tnoon = getJulianCenturiesFromJulianDay($this, julianDay + noonmin / 1440.0);
    var eqTime = getEquationOfTime($this, tnoon);
    var solarDec = getSunDeclination($this, tnoon);
    var hourAngle = getSunHourAngleAtSunset($this, latitude, solarDec, zenith);
    var delta = longitude - Companion_getInstance_19().toDegrees_3ndphx_k$(hourAngle);
    var timeDiff = 4 * delta;
    var timeUTC = 720 + timeDiff - eqTime;
    var newt = getJulianCenturiesFromJulianDay($this, getJulianDayFromJulianCenturies($this, julianCenturies) + timeUTC / 1440.0);
    eqTime = getEquationOfTime($this, newt);
    solarDec = getSunDeclination($this, newt);
    hourAngle = getSunHourAngleAtSunset($this, latitude, solarDec, zenith);
    delta = longitude - Companion_getInstance_19().toDegrees_3ndphx_k$(hourAngle);
    timeDiff = 4 * delta;
    timeUTC = 720 + timeDiff - eqTime;
    return timeUTC;
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.JULIAN_DAY_JAN_1_2000__1 = 2451545.0;
    this.JULIAN_DAYS_PER_CENTURY_1 = 36525.0;
  }
  protoOf(Companion_8).getSolarElevation_wg7rf9_k$ = function (cal, lat, lon) {
    var tmp0_container = this.getHourAngleLatAndDec_nvkslm_k$(cal, lat, lon);
    var hourAngle_rad = tmp0_container.component1_7eebsc_k$();
    var lat_rad = tmp0_container.component2_7eebsb_k$();
    var dec_rad = tmp0_container.component3_7eebsa_k$();
    var tmp = Companion_getInstance_19();
    var tmp$ret$5;
    // Inline function 'kotlin.math.asin' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.sin' call
    tmp$ret$0 = Math.sin(lat_rad);
    var tmp_0 = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sin' call
    tmp$ret$1 = Math.sin(dec_rad);
    var tmp_1 = tmp_0 * tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.math.cos' call
    tmp$ret$2 = Math.cos(lat_rad);
    var tmp_2 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.math.cos' call
    tmp$ret$3 = Math.cos(dec_rad);
    var tmp_3 = tmp_2 * tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.math.cos' call
    tmp$ret$4 = Math.cos(hourAngle_rad);
    var tmp0_asin = tmp_1 + tmp_3 * tmp$ret$4;
    tmp$ret$5 = Math.asin(tmp0_asin);
    return tmp.toDegrees_3ndphx_k$(tmp$ret$5);
  };
  protoOf(Companion_8).getSolarAzimuth_g051wm_k$ = function (cal, lat, lon) {
    var tmp0_container = this.getHourAngleLatAndDec_nvkslm_k$(cal, lat, lon);
    var hourAngle_rad = tmp0_container.component1_7eebsc_k$();
    var dec_rad = tmp0_container.component2_7eebsb_k$();
    var lat_rad = tmp0_container.component3_7eebsa_k$();
    var tmp = Companion_getInstance_19();
    var tmp$ret$5;
    // Inline function 'kotlin.math.atan' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.sin' call
    tmp$ret$0 = Math.sin(hourAngle_rad);
    var tmp_0 = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.cos' call
    tmp$ret$1 = Math.cos(hourAngle_rad);
    var tmp_1 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.math.sin' call
    tmp$ret$2 = Math.sin(lat_rad);
    var tmp_2 = tmp_1 * tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.math.tan' call
    tmp$ret$3 = Math.tan(dec_rad);
    var tmp_3 = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.math.cos' call
    tmp$ret$4 = Math.cos(lat_rad);
    var tmp0_atan = tmp_0 / (tmp_2 - tmp_3 * tmp$ret$4);
    tmp$ret$5 = Math.atan(tmp0_atan);
    return tmp.toDegrees_3ndphx_k$(tmp$ret$5) + 180;
  };
  protoOf(Companion_8).getHourAngleLatAndDec_nvkslm_k$ = function (cal, lat, lon) {
    var julianDay = DateUtils_getInstance().getJulianDay_mht2hh_k$(cal.get_date_wokkxj_k$());
    var julianCenturies = getJulianCenturiesFromJulianDay(this, julianDay);
    var eot = getEquationOfTime(this, julianCenturies);
    var longitude = cal.get_hour_wonfal_k$() + 12.0 + (cal.get_minute_gnc10d_k$() + eot + cal.get_second_jf7fjx_k$() / 60.0) / 60.0;
    longitude = -(longitude * 360.0 / 24.0) % 360.0;
    var hourAngle_rad = Companion_getInstance_19().toRadians_q39aye_k$(lon - longitude);
    var declination = getSunDeclination(this, julianCenturies);
    var dec_rad = Companion_getInstance_19().toRadians_q39aye_k$(declination);
    var lat_rad = Companion_getInstance_19().toRadians_q39aye_k$(lat);
    return new Triple(hourAngle_rad, lat_rad, dec_rad);
  };
  var Companion_instance_8;
  function Companion_getInstance_21() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function get_$stableprop_17() {
    return 0;
  }
  function NOAACalculator() {
    Companion_getInstance_21();
    AstronomicalCalculator.call(this);
    this.$stable_2 = 0;
  }
  protoOf(NOAACalculator).copy_1tks5_k$ = function () {
    return new NOAACalculator();
  };
  protoOf(NOAACalculator).get_calculatorName_lwl1va_k$ = function () {
    return 'US National Oceanic and Atmospheric Administration Algorithm';
  };
  protoOf(NOAACalculator).getUTCSunrise_z2odd2_k$ = function (LocalDate, geoLocation, zenith, adjustForElevation) {
    var elevation = adjustForElevation ? geoLocation.get_elevation_8fwyb8_k$() : 0.0;
    var adjustedZenith = this.adjustZenith_qy46d5_k$(zenith, elevation);
    var sunrise = getSunriseUTC(Companion_getInstance_21(), DateUtils_getInstance().getJulianDay_mht2hh_k$(LocalDate), geoLocation.get_latitude_feukvp_k$(), -geoLocation.get_longitude_asb1fq_k$(), adjustedZenith);
    sunrise = sunrise / 60;
    while (sunrise < 0.0)
      sunrise = sunrise + 24.0;
    while (sunrise >= 24.0)
      sunrise = sunrise - 24.0;
    return sunrise;
  };
  protoOf(NOAACalculator).getUTCSunset_akkvrr_k$ = function (LocalDate, geoLocation, zenith, adjustForElevation) {
    var elevation = adjustForElevation ? geoLocation.get_elevation_8fwyb8_k$() : 0.0;
    var adjustedZenith = this.adjustZenith_qy46d5_k$(zenith, elevation);
    var sunset = getSunsetUTC(Companion_getInstance_21(), DateUtils_getInstance().getJulianDay_mht2hh_k$(LocalDate), geoLocation.get_latitude_feukvp_k$(), -geoLocation.get_longitude_asb1fq_k$(), adjustedZenith);
    sunset = sunset / 60;
    while (sunset < 0.0)
      sunset = sunset + 24.0;
    while (sunset >= 24.0)
      sunset = sunset - 24.0;
    return sunset;
  };
  protoOf(NOAACalculator).getUTCNoon_7pjs5g_k$ = function (LocalDate, geoLocation) {
    var julianDay = DateUtils_getInstance().getJulianDay_mht2hh_k$(LocalDate);
    var julianCenturies = getJulianCenturiesFromJulianDay(Companion_getInstance_21(), julianDay);
    var noon = getSolarNoonUTC(Companion_getInstance_21(), julianCenturies, -geoLocation.get_longitude_asb1fq_k$());
    noon = noon / 60;
    while (noon < 0.0)
      noon = noon + 24.0;
    while (noon >= 24.0)
      noon = noon - 24.0;
    return noon;
  };
  function _get_DEG_PER_HOUR__h6c2do($this) {
    return $this.DEG_PER_HOUR_1;
  }
  function sinDeg($this, deg) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.sin' call
    var tmp0_sin = deg * 2.0 * get_PI() / 360.0;
    tmp$ret$0 = Math.sin(tmp0_sin);
    return tmp$ret$0;
  }
  function acosDeg($this, x) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.acos' call
    tmp$ret$0 = Math.acos(x);
    return tmp$ret$0 * 360.0 / (2 * get_PI());
  }
  function asinDeg($this, x) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.asin' call
    tmp$ret$0 = Math.asin(x);
    return tmp$ret$0 * 360.0 / (2 * get_PI());
  }
  function tanDeg($this, deg) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.tan' call
    var tmp0_tan = deg * 2.0 * get_PI() / 360.0;
    tmp$ret$0 = Math.tan(tmp0_tan);
    return tmp$ret$0;
  }
  function cosDeg($this, deg) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.cos' call
    var tmp0_cos = deg * 2.0 * get_PI() / 360.0;
    tmp$ret$0 = Math.cos(tmp0_cos);
    return tmp$ret$0;
  }
  function getHoursFromMeridian($this, longitude) {
    return longitude / $this.DEG_PER_HOUR_1;
  }
  function getApproxTimeDays($this, dayOfYear, hoursFromMeridian, isSunrise) {
    if (isSunrise) {
      return dayOfYear + (6.0 - hoursFromMeridian) / 24;
    } else {
      return dayOfYear + (18.0 - hoursFromMeridian) / 24;
    }
  }
  function getMeanAnomaly($this, dayOfYear, longitude, isSunrise) {
    return 0.9856 * getApproxTimeDays($this, dayOfYear, getHoursFromMeridian($this, longitude), isSunrise) - 3.289;
  }
  function getSunTrueLongitude_0($this, sunMeanAnomaly) {
    var l = sunMeanAnomaly + 1.916 * sinDeg($this, sunMeanAnomaly) + 0.02 * sinDeg($this, 2 * sunMeanAnomaly) + 282.634;
    if (l >= 360.0) {
      l = l - 360.0;
    }
    if (l < 0.0) {
      l = l + 360.0;
    }
    return l;
  }
  function getSunRightAscensionHours($this, sunTrueLongitude) {
    var a = 0.91764 * tanDeg($this, sunTrueLongitude);
    var tmp = 360.0 / (2.0 * get_PI());
    var tmp$ret$0;
    // Inline function 'kotlin.math.atan' call
    tmp$ret$0 = Math.atan(a);
    var ra = tmp * tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.floor' call
    var tmp0_floor = sunTrueLongitude / 90.0;
    tmp$ret$1 = Math.floor(tmp0_floor);
    var lQuadrant = tmp$ret$1 * 90.0;
    var tmp$ret$2;
    // Inline function 'kotlin.math.floor' call
    var tmp1_floor = ra / 90.0;
    tmp$ret$2 = Math.floor(tmp1_floor);
    var raQuadrant = tmp$ret$2 * 90.0;
    ra = ra + (lQuadrant - raQuadrant);
    return ra / $this.DEG_PER_HOUR_1;
  }
  function getCosLocalHourAngle($this, sunTrueLongitude, latitude, zenith) {
    var sinDec = 0.39782 * sinDeg($this, sunTrueLongitude);
    var cosDec = cosDeg($this, asinDeg($this, sinDec));
    return (cosDeg($this, zenith) - sinDec * sinDeg($this, latitude)) / (cosDec * cosDeg($this, latitude));
  }
  function getLocalMeanTime($this, localHour, sunRightAscensionHours, approxTimeDays) {
    return localHour + sunRightAscensionHours - 0.06571 * approxTimeDays - 6.622;
  }
  function getTimeUTC($this, LocalDate, geoLocation, zenith, isSunrise) {
    var dayOfYear = LocalDate.get_dayOfYear_3ke6gp_k$();
    var sunMeanAnomaly = getMeanAnomaly($this, dayOfYear, geoLocation.get_longitude_asb1fq_k$(), isSunrise);
    var sunTrueLong = getSunTrueLongitude_0($this, sunMeanAnomaly);
    var sunRightAscensionHours = getSunRightAscensionHours($this, sunTrueLong);
    var cosLocalHourAngle = getCosLocalHourAngle($this, sunTrueLong, geoLocation.get_latitude_feukvp_k$(), zenith);
    var localHourAngle = 0.0;
    if (isSunrise) {
      localHourAngle = 360.0 - acosDeg($this, cosLocalHourAngle);
    } else {
      localHourAngle = acosDeg($this, cosLocalHourAngle);
    }
    var localHour = localHourAngle / $this.DEG_PER_HOUR_1;
    var localMeanTime = getLocalMeanTime($this, localHour, sunRightAscensionHours, getApproxTimeDays($this, dayOfYear, getHoursFromMeridian($this, geoLocation.get_longitude_asb1fq_k$()), isSunrise));
    var pocessedTime = localMeanTime - getHoursFromMeridian($this, geoLocation.get_longitude_asb1fq_k$());
    while (pocessedTime < 0.0) {
      pocessedTime = pocessedTime + 24.0;
    }
    while (pocessedTime >= 24.0) {
      pocessedTime = pocessedTime - 24.0;
    }
    return pocessedTime;
  }
  function Companion_9() {
    Companion_instance_9 = this;
    this.DEG_PER_HOUR_1 = 15.0;
  }
  var Companion_instance_9;
  function Companion_getInstance_22() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function get_$stableprop_18() {
    return 0;
  }
  function SunTimesCalculator() {
    Companion_getInstance_22();
    AstronomicalCalculator.call(this);
    this.$stable_2 = 0;
  }
  protoOf(SunTimesCalculator).copy_1tks5_k$ = function () {
    return new SunTimesCalculator();
  };
  protoOf(SunTimesCalculator).get_calculatorName_lwl1va_k$ = function () {
    return 'US Naval Almanac Algorithm';
  };
  protoOf(SunTimesCalculator).getUTCSunrise_z2odd2_k$ = function (LocalDate, geoLocation, zenith, adjustForElevation) {
    var doubleTime;
    var elevation = adjustForElevation ? geoLocation.get_elevation_8fwyb8_k$() : 0.0;
    var adjustedZenith = this.adjustZenith_qy46d5_k$(zenith, elevation);
    doubleTime = getTimeUTC(Companion_getInstance_22(), LocalDate, geoLocation, adjustedZenith, true);
    return doubleTime;
  };
  protoOf(SunTimesCalculator).getUTCSunset_akkvrr_k$ = function (LocalDate, geoLocation, zenith, adjustForElevation) {
    var doubleTime = DoubleCompanionObject_getInstance().get_NaN_18jnv2_k$();
    var elevation = adjustForElevation ? geoLocation.get_elevation_8fwyb8_k$() : 0.0;
    var adjustedZenith = this.adjustZenith_qy46d5_k$(zenith, elevation);
    doubleTime = getTimeUTC(Companion_getInstance_22(), LocalDate, geoLocation, adjustedZenith, false);
    return doubleTime;
  };
  protoOf(SunTimesCalculator).getUTCNoon_7pjs5g_k$ = function (LocalDate, geoLocation) {
    var sunrise = this.getUTCSunrise_z2odd2_k$(LocalDate, geoLocation, 90.0, true);
    var sunset = this.getUTCSunset_akkvrr_k$(LocalDate, geoLocation, 90.0, true);
    return sunrise + (sunset - sunrise) / 2;
  };
  function _get_SECOND_MILLIS__qvi64g($this) {
    return $this.SECOND_MILLIS_1;
  }
  function _get_MINUTE_MILLIS__4iwov4_0($this) {
    return $this.MINUTE_MILLIS_1;
  }
  function _get_HOUR_MILLIS__4h8mgg_0($this) {
    return $this.HOUR_MILLIS_1;
  }
  function Time_init_$Init$(millis, $this) {
    Time_init_$Init$_0(numberToInt(millis), $this);
    return $this;
  }
  function Time_init_$Create$(millis) {
    return Time_init_$Init$(millis, objectCreate(protoOf(Time)));
  }
  function Time_init_$Init$_0(millis, $this) {
    Time.call($this);
    var adjustedMillis = millis;
    if (adjustedMillis < 0) {
      $this.isNegative_1 = true;
      adjustedMillis = abs(adjustedMillis);
    }
    var tmp = $this;
    var tmp_0 = adjustedMillis;
    Companion_getInstance_23();
    tmp.hours_1 = tmp_0 / 3600000 | 0;
    var tmp_1 = adjustedMillis;
    var tmp_2 = $this.hours_1;
    Companion_getInstance_23();
    adjustedMillis = tmp_1 - imul(tmp_2, 3600000) | 0;
    var tmp_3 = $this;
    var tmp_4 = adjustedMillis;
    Companion_getInstance_23();
    tmp_3.minutes_1 = tmp_4 / 60000 | 0;
    var tmp_5 = adjustedMillis;
    var tmp_6 = $this.minutes_1;
    Companion_getInstance_23();
    adjustedMillis = tmp_5 - imul(tmp_6, 60000) | 0;
    var tmp_7 = $this;
    var tmp_8 = adjustedMillis;
    Companion_getInstance_23();
    tmp_7.seconds_1 = tmp_8 / 1000 | 0;
    var tmp_9 = adjustedMillis;
    var tmp_10 = $this.seconds_1;
    Companion_getInstance_23();
    adjustedMillis = tmp_9 - imul(tmp_10, 1000) | 0;
    $this.milliseconds_1 = adjustedMillis;
    return $this;
  }
  function Time_init_$Create$_0(millis) {
    return Time_init_$Init$_0(millis, objectCreate(protoOf(Time)));
  }
  function Companion_10() {
    Companion_instance_10 = this;
    this.SECOND_MILLIS_1 = 1000;
    this.MINUTE_MILLIS_1 = 60000;
    this.HOUR_MILLIS_1 = 3600000;
  }
  var Companion_instance_10;
  function Companion_getInstance_23() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function get_$stableprop_19() {
    return 8;
  }
  function Time(hours, minutes, seconds, milliseconds, isNegative) {
    Companion_getInstance_23();
    hours = hours === VOID ? 0 : hours;
    minutes = minutes === VOID ? 0 : minutes;
    seconds = seconds === VOID ? 0 : seconds;
    milliseconds = milliseconds === VOID ? 0 : milliseconds;
    isNegative = isNegative === VOID ? false : isNegative;
    this.hours_1 = hours;
    this.minutes_1 = minutes;
    this.seconds_1 = seconds;
    this.milliseconds_1 = milliseconds;
    this.isNegative_1 = isNegative;
    this.$stable_1 = 8;
  }
  protoOf(Time).set_hours_fd051e_k$ = function (_set____db54di) {
    this.hours_1 = _set____db54di;
  };
  protoOf(Time).get_hours_islejq_k$ = function () {
    return this.hours_1;
  };
  protoOf(Time).set_minutes_911lym_k$ = function (_set____db54di) {
    this.minutes_1 = _set____db54di;
  };
  protoOf(Time).get_minutes_ivkhkm_k$ = function () {
    return this.minutes_1;
  };
  protoOf(Time).set_seconds_5a1wi6_k$ = function (_set____db54di) {
    this.seconds_1 = _set____db54di;
  };
  protoOf(Time).get_seconds_xuhyfq_k$ = function () {
    return this.seconds_1;
  };
  protoOf(Time).set_milliseconds_j27on3_k$ = function (_set____db54di) {
    this.milliseconds_1 = _set____db54di;
  };
  protoOf(Time).get_milliseconds_5yabtn_k$ = function () {
    return this.milliseconds_1;
  };
  protoOf(Time).set_isNegative_tozpil_k$ = function (_set____db54di) {
    this.isNegative_1 = _set____db54di;
  };
  protoOf(Time).get_isNegative_i24zqw_k$ = function () {
    return this.isNegative_1;
  };
  protoOf(Time).get_time_wouyhi_k$ = function () {
    var tmp = this.hours_1;
    Companion_getInstance_23();
    var tmp_0 = imul(tmp, 3600000);
    var tmp_1 = this.minutes_1;
    Companion_getInstance_23();
    var tmp_2 = tmp_0 + imul(tmp_1, 60000) | 0;
    var tmp_3 = this.seconds_1;
    Companion_getInstance_23();
    return (tmp_2 + imul(tmp_3, 1000) | 0) + this.milliseconds_1 | 0;
  };
  protoOf(Time).component1_7eebsc_k$ = function () {
    return this.hours_1;
  };
  protoOf(Time).component2_7eebsb_k$ = function () {
    return this.minutes_1;
  };
  protoOf(Time).component3_7eebsa_k$ = function () {
    return this.seconds_1;
  };
  protoOf(Time).component4_7eebs9_k$ = function () {
    return this.milliseconds_1;
  };
  protoOf(Time).component5_7eebs8_k$ = function () {
    return this.isNegative_1;
  };
  protoOf(Time).copy_7wsw0r_k$ = function (hours, minutes, seconds, milliseconds, isNegative) {
    return new Time(hours, minutes, seconds, milliseconds, isNegative);
  };
  protoOf(Time).copy$default_yev4zr_k$ = function (hours, minutes, seconds, milliseconds, isNegative, $super) {
    hours = hours === VOID ? this.hours_1 : hours;
    minutes = minutes === VOID ? this.minutes_1 : minutes;
    seconds = seconds === VOID ? this.seconds_1 : seconds;
    milliseconds = milliseconds === VOID ? this.milliseconds_1 : milliseconds;
    isNegative = isNegative === VOID ? this.isNegative_1 : isNegative;
    return $super === VOID ? this.copy_7wsw0r_k$(hours, minutes, seconds, milliseconds, isNegative) : $super.copy_7wsw0r_k$.call(this, hours, minutes, seconds, milliseconds, isNegative);
  };
  protoOf(Time).toString = function () {
    return 'Time(hours=' + this.hours_1 + ', minutes=' + this.minutes_1 + ', seconds=' + this.seconds_1 + ', milliseconds=' + this.milliseconds_1 + ', isNegative=' + this.isNegative_1 + ')';
  };
  protoOf(Time).hashCode = function () {
    var result = this.hours_1;
    result = imul(result, 31) + this.minutes_1 | 0;
    result = imul(result, 31) + this.seconds_1 | 0;
    result = imul(result, 31) + this.milliseconds_1 | 0;
    result = imul(result, 31) + (this.isNegative_1 | 0) | 0;
    return result;
  };
  protoOf(Time).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Time))
      return false;
    var tmp0_other_with_cast = other instanceof Time ? other : THROW_CCE();
    if (!(this.hours_1 === tmp0_other_with_cast.hours_1))
      return false;
    if (!(this.minutes_1 === tmp0_other_with_cast.minutes_1))
      return false;
    if (!(this.seconds_1 === tmp0_other_with_cast.seconds_1))
      return false;
    if (!(this.milliseconds_1 === tmp0_other_with_cast.milliseconds_1))
      return false;
    if (!(this.isNegative_1 === tmp0_other_with_cast.isNegative_1))
      return false;
    return true;
  };
  function Formatter() {
  }
  function get_$stableprop_20() {
    return 0;
  }
  function sam$com_kosherjava_zmanim_util_WeekFormat_Formatter$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$com_kosherjava_zmanim_util_WeekFormat_Formatter$0).format_cwnfvf_k$ = function (input) {
    return this.function_1(input);
  };
  function sam$com_kosherjava_zmanim_util_WeekFormat_Formatter$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$com_kosherjava_zmanim_util_WeekFormat_Formatter$0_0).format_cwnfvf_k$ = function (input) {
    return this.function_1(input);
  };
  function WeekFormat$long$lambda(it) {
    return WeekFormat_getInstance().get_dayName_i44kog_k$(it);
  }
  function WeekFormat$short$lambda(it) {
    return take(WeekFormat_getInstance().get_dayName_i44kog_k$(it), 3);
  }
  function WeekFormat() {
    WeekFormat_instance = this;
    var tmp = this;
    var tmp_0 = WeekFormat$long$lambda;
    tmp.long_1 = new sam$com_kosherjava_zmanim_util_WeekFormat_Formatter$0(tmp_0);
    var tmp_1 = this;
    var tmp_2 = WeekFormat$short$lambda;
    tmp_1.short_1 = new sam$com_kosherjava_zmanim_util_WeekFormat_Formatter$0_0(tmp_2);
    this.$stable_1 = 0;
  }
  protoOf(WeekFormat).get_long_wopz2d_k$ = function () {
    return this.long_1;
  };
  protoOf(WeekFormat).get_short_iyijpv_k$ = function () {
    return this.short_1;
  };
  protoOf(WeekFormat).get_dayName_i44kog_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_dayOfWeek_3kfgci_k$().get_name_woqyms_k$();
  };
  var WeekFormat_instance;
  function WeekFormat_getInstance() {
    if (WeekFormat_instance == null)
      new WeekFormat();
    return WeekFormat_instance;
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).compare_6tbigh_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.compare_6tbigh_k$(a, b);
  };
  function sam$kotlin_Comparator$0_1(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_1).compare_6tbigh_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).compare = function (a, b) {
    return this.compare_6tbigh_k$(a, b);
  };
  function sam$kotlin_Comparator$0_2(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_2).compare_6tbigh_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_2).compare = function (a, b) {
    return this.compare_6tbigh_k$(a, b);
  };
  function Zman$Companion$DATE_ORDER$lambda(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'com.kosherjava.zmanim.util.Companion.DATE_ORDER.<anonymous>' call
    var tmp0_safe_receiver = a;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zman_1;
    tmp$ret$0 = tmp1_elvis_lhs == null ? Companion_getInstance_9().get_MAX_VALUE_54a9lf_k$() : tmp1_elvis_lhs;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'com.kosherjava.zmanim.util.Companion.DATE_ORDER.<anonymous>' call
    var tmp0_safe_receiver_0 = b;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.zman_1;
    tmp$ret$1 = tmp1_elvis_lhs_0 == null ? Companion_getInstance_9().get_MAX_VALUE_54a9lf_k$() : tmp1_elvis_lhs_0;
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function Zman$Companion$NAME_ORDER$lambda(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'com.kosherjava.zmanim.util.Companion.NAME_ORDER.<anonymous>' call
    var tmp0_safe_receiver = a;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.label_1;
    tmp$ret$0 = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'com.kosherjava.zmanim.util.Companion.NAME_ORDER.<anonymous>' call
    var tmp0_safe_receiver_0 = b;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.label_1;
    tmp$ret$1 = tmp1_elvis_lhs_0 == null ? '' : tmp1_elvis_lhs_0;
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function Zman$Companion$DURATION_ORDER$lambda(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'com.kosherjava.zmanim.util.Companion.DURATION_ORDER.<anonymous>' call
    var tmp0_safe_receiver = a;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.duration_1;
    tmp$ret$0 = tmp1_elvis_lhs == null ? Companion_getInstance_9().get_MAX_VALUE_54a9lf_k$() : tmp1_elvis_lhs;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'com.kosherjava.zmanim.util.Companion.DURATION_ORDER.<anonymous>' call
    var tmp0_safe_receiver_0 = b;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.duration_1;
    tmp$ret$1 = tmp1_elvis_lhs_0 == null ? Companion_getInstance_9().get_MAX_VALUE_54a9lf_k$() : tmp1_elvis_lhs_0;
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function Companion_11() {
    Companion_instance_11 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = Zman$Companion$DATE_ORDER$lambda;
    tmp$ret$0 = new sam$kotlin_Comparator$0_0(tmp_0);
    tmp.DATE_ORDER_1 = tmp$ret$0;
    var tmp_1 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_2 = Zman$Companion$NAME_ORDER$lambda;
    tmp$ret$1 = new sam$kotlin_Comparator$0_1(tmp_2);
    tmp_1.NAME_ORDER_1 = tmp$ret$1;
    var tmp_3 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_4 = Zman$Companion$DURATION_ORDER$lambda;
    tmp$ret$2 = new sam$kotlin_Comparator$0_2(tmp_4);
    tmp_3.DURATION_ORDER_1 = tmp$ret$2;
  }
  protoOf(Companion_11).get_DATE_ORDER_hejuna_k$ = function () {
    return this.DATE_ORDER_1;
  };
  protoOf(Companion_11).get_NAME_ORDER_3rgyrh_k$ = function () {
    return this.NAME_ORDER_1;
  };
  protoOf(Companion_11).get_DURATION_ORDER_dg86vg_k$ = function () {
    return this.DURATION_ORDER_1;
  };
  var Companion_instance_11;
  function Companion_getInstance_24() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function get_$stableprop_21() {
    return 8;
  }
  function Zman(label, zman, duration, description) {
    Companion_getInstance_24();
    zman = zman === VOID ? null : zman;
    duration = duration === VOID ? null : duration;
    description = description === VOID ? null : description;
    this.label_1 = label;
    this.zman_1 = zman;
    this.duration_1 = duration;
    this.description_1 = description;
    // Inline function 'kotlin.require' call
    var tmp0_require = !(this.duration_1 == null) ? true : !(this.zman_1 == null);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.kosherjava.zmanim.util.Zman.<anonymous>' call
      tmp$ret$0 = 'Either zman or duration must be non-null.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.$stable_1 = 8;
  }
  protoOf(Zman).set_label_9c26t7_k$ = function (_set____db54di) {
    this.label_1 = _set____db54di;
  };
  protoOf(Zman).get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  protoOf(Zman).set_zman_ebbogp_k$ = function (_set____db54di) {
    this.zman_1 = _set____db54di;
  };
  protoOf(Zman).get_zman_woyv3d_k$ = function () {
    return this.zman_1;
  };
  protoOf(Zman).set_duration_n385gt_k$ = function (_set____db54di) {
    this.duration_1 = _set____db54di;
  };
  protoOf(Zman).get_duration_6a6kpp_k$ = function () {
    return this.duration_1;
  };
  protoOf(Zman).set_description_skssc0_k$ = function (_set____db54di) {
    this.description_1 = _set____db54di;
  };
  protoOf(Zman).get_description_emjre5_k$ = function () {
    return this.description_1;
  };
  protoOf(Zman).toString = function () {
    var sb = StringBuilder_init_$Create$();
    sb.append_ssq29y_k$('\nLabel:\t\t\t').append_ssq29y_k$(this.label_1);
    sb.append_ssq29y_k$('\nZman:\t\t\t').append_t8pm91_k$(this.zman_1);
    sb.append_ssq29y_k$('\nDuration:\t\t\t').append_t8pm91_k$(this.duration_1);
    sb.append_ssq29y_k$('\nDescription:\t\t\t').append_ssq29y_k$(this.description_1);
    return sb.toString();
  };
  protoOf(Zman).component1_7eebsc_k$ = function () {
    return this.label_1;
  };
  protoOf(Zman).component2_7eebsb_k$ = function () {
    return this.zman_1;
  };
  protoOf(Zman).component3_7eebsa_k$ = function () {
    return this.duration_1;
  };
  protoOf(Zman).component4_7eebs9_k$ = function () {
    return this.description_1;
  };
  protoOf(Zman).copy_w9abgm_k$ = function (label, zman, duration, description) {
    return new Zman(label, zman, duration, description);
  };
  protoOf(Zman).copy$default_rmyipo_k$ = function (label, zman, duration, description, $super) {
    label = label === VOID ? this.label_1 : label;
    zman = zman === VOID ? this.zman_1 : zman;
    duration = duration === VOID ? this.duration_1 : duration;
    description = description === VOID ? this.description_1 : description;
    return $super === VOID ? this.copy_w9abgm_k$(label, zman, duration, description) : $super.copy_w9abgm_k$.call(this, label, zman, duration, description);
  };
  protoOf(Zman).hashCode = function () {
    var result = getStringHashCode(this.label_1);
    result = imul(result, 31) + (this.zman_1 == null ? 0 : this.zman_1.hashCode()) | 0;
    result = imul(result, 31) + (this.duration_1 == null ? 0 : this.duration_1.hashCode()) | 0;
    result = imul(result, 31) + (this.description_1 == null ? 0 : getStringHashCode(this.description_1)) | 0;
    return result;
  };
  protoOf(Zman).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Zman))
      return false;
    var tmp0_other_with_cast = other instanceof Zman ? other : THROW_CCE();
    if (!(this.label_1 === tmp0_other_with_cast.label_1))
      return false;
    if (!equals(this.zman_1, tmp0_other_with_cast.zman_1))
      return false;
    if (!equals(this.duration_1, tmp0_other_with_cast.duration_1))
      return false;
    if (!(this.description_1 == tmp0_other_with_cast.description_1))
      return false;
    return true;
  };
  function get_CANVAS_ELEMENT_ID() {
    return CANVAS_ELEMENT_ID;
  }
  var CANVAS_ELEMENT_ID;
  function BrowserViewportWindow(title, content) {
    illegalDecoyCallException('BrowserViewportWindow');
  }
  function BrowserViewportWindow$composable(title, content) {
    title = title === VOID ? 'Untitled' : title;
    var htmlHeadElement = ensureNotNull(document.head);
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp = document.createElement('style');
    var tmp0_apply = tmp instanceof HTMLStyleElement ? tmp : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'BrowserViewportWindow$composable.<anonymous>' call
    tmp0_apply.type = 'text/css';
    tmp0_apply.appendChild(document.createTextNode('html, body {\n    overflow: hidden;\n    margin: 0 !important;\n    padding: 0 !important;\n}\n\n#ComposeTarget {\n    outline: none;\n}'));
    tmp$ret$0 = tmp0_apply;
    htmlHeadElement.appendChild(tmp$ret$0);
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp_0 = document.getElementById('ComposeTarget');
    var tmp1_apply = tmp_0 instanceof HTMLCanvasElement ? tmp_0 : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'BrowserViewportWindow$composable.<anonymous>' call
    BrowserViewportWindow$composable$fillViewportSize(tmp1_apply);
    tmp$ret$1 = tmp1_apply;
    var canvas = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.apply' call
    var tmp2_apply = new ComposeWindow();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'BrowserViewportWindow$composable.<anonymous>' call
    var tmp_1 = window;
    tmp_1.addEventListener('resize', BrowserViewportWindow$composable$lambda(tmp2_apply, canvas));
    var tmp0_elvis_lhs = htmlHeadElement.getElementsByTagName('title').item(0);
    var tmp_2;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$2;
      // Inline function 'kotlin.also' call
      var tmp0_also = document.createElement('title');
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'BrowserViewportWindow$composable.<anonymous>.<anonymous>' call
      htmlHeadElement.appendChild(tmp0_also);
      tmp$ret$2 = tmp0_also;
      tmp_2 = tmp$ret$2;
    } else {
      tmp_2 = tmp0_elvis_lhs;
    }
    var tmp_3 = tmp_2;
    var htmlTitleElement = tmp_3 instanceof HTMLTitleElement ? tmp_3 : THROW_CCE();
    htmlTitleElement.textContent = title;
    tmp2_apply.setContent$composable_jlpbvd_k$(ComposableLambda$invoke$ref_9(composableLambdaInstance(-145463447, true, BrowserViewportWindow$composable$lambda_0(content, tmp2_apply))));
    tmp$ret$3 = tmp2_apply;
  }
  function BrowserViewportWindow$composable$fillViewportSize(_this__u8e3s4) {
    _this__u8e3s4.setAttribute('width', '' + window.innerWidth);
    _this__u8e3s4.setAttribute('height', '' + window.innerHeight);
  }
  function BrowserViewportWindow$composable$lambda($tmp2_apply, $canvas) {
    return function (it) {
      var scale = _get_layer__eubrs0($tmp2_apply).get_layer_iujprc_k$().get_contentScale_i3wrkq_k$();
      var density = window.devicePixelRatio;
      BrowserViewportWindow$composable$fillViewportSize($canvas);
      _get_layer__eubrs0($tmp2_apply).get_layer_iujprc_k$().attachTo$default_j17uco_k$($canvas);
      _get_layer__eubrs0($tmp2_apply).get_layer_iujprc_k$().needRedraw_3ktdcs_k$();
      _get_layer__eubrs0($tmp2_apply).setSize_x2oib2_k$(numberToInt($canvas.width / scale * density), numberToInt($canvas.height / scale * density));
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function BrowserViewportWindow$composable$lambda_0($content, $tmp2_apply) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-145463447, $changed, -1, 'BrowserViewportWindow$composable.<anonymous>.<anonymous> (BrowserViewportWindow.kt:74)');
        }
        $content($tmp2_apply, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function main() {
    onWasmReady(main$lambda);
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($this$BrowserViewportWindow, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(652971169, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (main.kt:5)');
      }
      App$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(652971169, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function main$lambda() {
    BrowserViewportWindow$composable('Compose Template', ComposableSingletons$MainKt_getInstance().lambda_1_r8sbbp_1);
    return Unit_getInstance();
  }
  function get_jsJodaTz() {
    _init_properties_App_js_kt__3q82y();
    return jsJodaTz;
  }
  var jsJodaTz;
  function openUrl(url) {
    _init_properties_App_js_kt__3q82y();
    var tmp0_safe_receiver = url;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'sternbach.software.openUrl.<anonymous>' call
      tmp$ret$0 = window.open(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
    }
  }
  var properties_initialized_App_js_kt_rqxoc8;
  function _init_properties_App_js_kt__3q82y() {
    if (properties_initialized_App_js_kt_rqxoc8) {
    } else {
      properties_initialized_App_js_kt_rqxoc8 = true;
      jsJodaTz = JsJodaTimeZoneModule;
    }
  }
  //region block: init
  CANVAS_ELEMENT_ID = 'ComposeTarget';
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=Compose-Template-composeApp.js.map
