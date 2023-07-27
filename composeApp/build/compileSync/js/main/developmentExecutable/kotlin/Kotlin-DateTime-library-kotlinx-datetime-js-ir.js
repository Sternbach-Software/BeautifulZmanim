(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@js-joda/core', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@js-joda/core'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'));
  else {
    if (typeof this['@js-joda/core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'. Its dependency '@js-joda/core' was not found. Please, check whether '@js-joda/core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'.");
    }
    root['Kotlin-DateTime-library-kotlinx-datetime-js-ir'] = factory(typeof this['Kotlin-DateTime-library-kotlinx-datetime-js-ir'] === 'undefined' ? {} : this['Kotlin-DateTime-library-kotlinx-datetime-js-ir'], this['@js-joda/core'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir']);
  }
}(this, function (_, $module$_js_joda_core_gcv2k, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var ChronoUnit = $module$_js_joda_core_gcv2k.ChronoUnit;
  var Instant = $module$_js_joda_core_gcv2k.Instant;
  var Clock = $module$_js_joda_core_gcv2k.Clock;
  var OffsetDateTime = $module$_js_joda_core_gcv2k.OffsetDateTime;
  var Duration = $module$_js_joda_core_gcv2k.Duration;
  var LocalDate = $module$_js_joda_core_gcv2k.LocalDate;
  var LocalDateTime = $module$_js_joda_core_gcv2k.LocalDateTime;
  var LocalTime = $module$_js_joda_core_gcv2k.LocalTime;
  var ZoneOffset = $module$_js_joda_core_gcv2k.ZoneOffset;
  var ZoneId = $module$_js_joda_core_gcv2k.ZoneId;
  var protoOf = kotlin_kotlin.$_$.mf;
  var objectMeta = kotlin_kotlin.$_$.lf;
  var VOID = kotlin_kotlin.$_$.jm;
  var setMetadataFor = kotlin_kotlin.$_$.nf;
  var interfaceMeta = kotlin_kotlin.$_$.oe;
  var toString = kotlin_kotlin.$_$.rf;
  var Char = kotlin_kotlin.$_$.ak;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.w5;
  var toLong = kotlin_kotlin.$_$.pf;
  var Long = kotlin_kotlin.$_$.kk;
  var Unit_getInstance = kotlin_kotlin.$_$.k6;
  var charSequenceGet = kotlin_kotlin.$_$.wd;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.v3;
  var equals = kotlin_kotlin.$_$.de;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.y3;
  var ArithmeticException = kotlin_kotlin.$_$.yj;
  var uppercaseChar = kotlin_kotlin.$_$.sj;
  var repeat = kotlin_kotlin.$_$.vi;
  var toInt = kotlin_kotlin.$_$.kj;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.o1;
  var abs = kotlin_kotlin.$_$.tf;
  var padStart = kotlin_kotlin.$_$.ri;
  var classMeta = kotlin_kotlin.$_$.zd;
  var objectCreate = kotlin_kotlin.$_$.kf;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i2;
  var Companion_getInstance = kotlin_kotlin.$_$.c6;
  var DurationUnit_NANOSECONDS_getInstance = kotlin_kotlin.$_$.k;
  var toDuration = kotlin_kotlin.$_$.vj;
  var asList = kotlin_kotlin.$_$.u7;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.f2;
  var captureStack = kotlin_kotlin.$_$.td;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.h2;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.d2;
  var IllegalArgumentException_init_$Init$_2 = kotlin_kotlin.$_$.j2;
  var IllegalArgumentException = kotlin_kotlin.$_$.hk;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.a3;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.b3;
  var RuntimeException_init_$Init$_1 = kotlin_kotlin.$_$.z2;
  var RuntimeException_init_$Init$_2 = kotlin_kotlin.$_$.d3;
  var RuntimeException = kotlin_kotlin.$_$.rk;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.e6;
  var ArithmeticException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var numberToLong = kotlin_kotlin.$_$.jf;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var THROW_CCE = kotlin_kotlin.$_$.sk;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var emptyList = kotlin_kotlin.$_$.c9;
  var getKClass = kotlin_kotlin.$_$.e;
  var arrayOf = kotlin_kotlin.$_$.gl;
  var createKType = kotlin_kotlin.$_$.b;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var isInterface = kotlin_kotlin.$_$.xe;
  var buildClassSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var Companion_getInstance_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var MissingFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.a6;
  var THROW_ISE = kotlin_kotlin.$_$.tk;
  var Enum = kotlin_kotlin.$_$.ek;
  var numberToInt = kotlin_kotlin.$_$.if;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.tl;
  var numberToDouble = kotlin_kotlin.$_$.hf;
  var indexOf = kotlin_kotlin.$_$.fi;
  var charSequenceLength = kotlin_kotlin.$_$.xd;
  var _Duration___get_inWholeSeconds__impl__hpy7b3 = kotlin_kotlin.$_$.m3;
  var _Duration___get_nanosecondsComponent__impl__nh19kq = kotlin_kotlin.$_$.o3;
  var Duration__unaryMinus_impl_x2k1y0 = kotlin_kotlin.$_$.u3;
  var DurationUnit_SECONDS_getInstance = kotlin_kotlin.$_$.l;
  var toDuration_0 = kotlin_kotlin.$_$.uj;
  var Duration__plus_impl_yu9v8f = kotlin_kotlin.$_$.p3;
  var Comparable = kotlin_kotlin.$_$.ck;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.e2;
  var toSet = kotlin_kotlin.$_$.jc;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Clock_0, 'Clock', interfaceMeta);
  setMetadataFor(System, 'System', objectMeta, VOID, [Clock_0]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(DateTimePeriod, 'DateTimePeriod', classMeta, VOID, VOID, VOID, {0: DateTimePeriodIso8601Serializer_getInstance});
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(DatePeriod, 'DatePeriod', classMeta, DateTimePeriod, VOID, VOID, {0: DatePeriodIso8601Serializer_getInstance});
  setMetadataFor(DateTimePeriodImpl, 'DateTimePeriodImpl', classMeta, DateTimePeriod);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(DateTimeUnit, 'DateTimeUnit', classMeta, VOID, VOID, VOID, {0: DateTimeUnitSerializer_getInstance});
  setMetadataFor(TimeBased, 'TimeBased', classMeta, DateTimeUnit, VOID, VOID, {0: TimeBasedDateTimeUnitSerializer_getInstance});
  setMetadataFor(DateBased, 'DateBased', classMeta, DateTimeUnit, VOID, VOID, {0: DateBasedDateTimeUnitSerializer_getInstance});
  setMetadataFor(DayBased, 'DayBased', classMeta, DateBased, VOID, VOID, {0: DayBasedDateTimeUnitSerializer_getInstance});
  setMetadataFor(MonthBased, 'MonthBased', classMeta, DateBased, VOID, VOID, {0: MonthBasedDateTimeUnitSerializer_getInstance});
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(DateTimeFormatException, 'DateTimeFormatException', classMeta, IllegalArgumentException);
  setMetadataFor(DateTimeArithmeticException, 'DateTimeArithmeticException', classMeta, RuntimeException);
  setMetadataFor(IllegalTimeZoneException, 'IllegalTimeZoneException', classMeta, IllegalArgumentException);
  setMetadataFor(DivRemResult, 'DivRemResult', classMeta);
  setMetadataFor(DatePeriodIso8601Serializer, 'DatePeriodIso8601Serializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DateTimePeriodIso8601Serializer, 'DateTimePeriodIso8601Serializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(TimeBasedDateTimeUnitSerializer, 'TimeBasedDateTimeUnitSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DateBasedDateTimeUnitSerializer, 'DateBasedDateTimeUnitSerializer', objectMeta, AbstractPolymorphicSerializer);
  setMetadataFor(DayBasedDateTimeUnitSerializer, 'DayBasedDateTimeUnitSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(MonthBasedDateTimeUnitSerializer, 'MonthBasedDateTimeUnitSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DateTimeUnitSerializer, 'DateTimeUnitSerializer', objectMeta, AbstractPolymorphicSerializer);
  setMetadataFor(InstantIso8601Serializer, 'InstantIso8601Serializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(LocalDateIso8601Serializer, 'LocalDateIso8601Serializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(LocalDateTimeIso8601Serializer, 'LocalDateTimeIso8601Serializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(LocalTimeIso8601Serializer, 'LocalTimeIso8601Serializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(TimeZoneSerializer, 'TimeZoneSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(FixedOffsetTimeZoneSerializer, 'FixedOffsetTimeZoneSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UtcOffsetSerializer, 'UtcOffsetSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DayOfWeek_0, 'DayOfWeek', classMeta, Enum);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(Instant_0, 'Instant', classMeta, VOID, [Comparable], VOID, {0: InstantIso8601Serializer_getInstance});
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(LocalDate_0, 'LocalDate', classMeta, VOID, [Comparable], VOID, {0: LocalDateIso8601Serializer_getInstance});
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(LocalDateTime_0, 'LocalDateTime', classMeta, VOID, [Comparable], VOID, {0: LocalDateTimeIso8601Serializer_getInstance});
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(LocalTime_0, 'LocalTime', classMeta, VOID, [Comparable], VOID, {0: LocalTimeIso8601Serializer_getInstance});
  setMetadataFor(Month_0, 'Month', classMeta, Enum);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(TimeZone, 'TimeZone', classMeta, VOID, VOID, VOID, {0: TimeZoneSerializer_getInstance});
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(FixedOffsetTimeZone, 'FixedOffsetTimeZone', classMeta, TimeZone, VOID, VOID, {0: FixedOffsetTimeZoneSerializer_getInstance});
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(UtcOffset, 'UtcOffset', classMeta, VOID, VOID, VOID, {0: UtcOffsetSerializer_getInstance});
  //endregion
  function System() {
    System_instance = this;
  }
  protoOf(System).now_2cba_k$ = function () {
    return Companion_getInstance_10().now_2cba_k$();
  };
  var System_instance;
  function System_getInstance() {
    if (System_instance == null)
      new System();
    return System_instance;
  }
  function Companion() {
    Companion_instance = this;
  }
  var Companion_instance;
  function Companion_getInstance_2() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Clock_0() {
  }
  function parse$parseException(message, position) {
    throw DateTimeFormatException_init_$Create$_0('Parse error at char ' + position + ': ' + message);
  }
  function parse$toIntThrowing(_this__u8e3s4, iStart, component) {
    if (_this__u8e3s4.compareTo_n4fqi2_k$(toLong(IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$())) < 0 ? true : _this__u8e3s4.compareTo_n4fqi2_k$(toLong(IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$())) > 0) {
      parse$parseException('Value ' + toString(_this__u8e3s4) + " does not fit into an Int, which is required for component '" + new Char(component) + "'", iStart);
    }
    return _this__u8e3s4.toInt_1tsl84_k$();
  }
  function allNonpositive($this) {
    return (($this.get_totalMonths_16su1e_k$() <= 0 ? $this.get_days_wokl28_k$() <= 0 : false) ? $this.get_totalNanoseconds_r96768_k$().compareTo_n4fqi2_k$(new Long(0, 0)) <= 0 : false) ? !(($this.get_totalMonths_16su1e_k$() | $this.get_days_wokl28_k$()) === 0) ? true : !$this.get_totalNanoseconds_r96768_k$().equals(new Long(0, 0)) : false;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).parse_4mmrzm_k$ = function (text) {
    var START = 0;
    var AFTER_P = 1;
    var AFTER_YEAR = 2;
    var AFTER_MONTH = 3;
    var AFTER_WEEK = 4;
    var AFTER_DAY = 5;
    var AFTER_T = 6;
    var AFTER_HOUR = 7;
    var AFTER_MINUTE = 8;
    var AFTER_SECOND_AND_NANO = 9;
    var state = START;
    var i = 0;
    var sign = 1;
    var years = 0;
    var months = 0;
    var weeks = 0;
    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    var nanoseconds = 0;
    $l$loop_0: while (true) {
      if (i >= text.length) {
        if (state === START) {
          parse$parseException("Unexpected end of input; 'P' designator is required", i);
        }
        if (state === AFTER_T) {
          parse$parseException("Unexpected end of input; at least one time component is required after 'T'", i);
        }
        var tmp$ret$0;
        // Inline function 'kotlin.Long.plus' call
        var tmp0_plus = toLong(days);
        var tmp1_plus = imul(weeks, 7);
        tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(toLong(tmp1_plus));
        var n = tmp$ret$0;
        var tmp;
        var containsLower = IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$();
        if (n.compareTo_n4fqi2_k$(toLong(IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$())) <= 0 ? toLong(containsLower).compareTo_n4fqi2_k$(n) <= 0 : false) {
          tmp = n.toInt_1tsl84_k$();
        } else {
          parse$parseException("The total number of days under 'D' and 'W' designators should fit into an Int", 0);
        }
        var daysTotal = tmp;
        return DateTimePeriod_0(years, months, daysTotal, hours, minutes, seconds, toLong(nanoseconds));
      }
      if (state === START) {
        if ((i + 1 | 0) >= text.length ? equals(new Char(charSequenceGet(text, i)), new Char(_Char___init__impl__6a9atx(43))) ? true : equals(new Char(charSequenceGet(text, i)), new Char(_Char___init__impl__6a9atx(45))) : false) {
          parse$parseException("Unexpected end of string; 'P' designator is required", i);
        }
        var tmp0_subject = charSequenceGet(text, i);
        if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(43))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(45)))) {
          if (equals(new Char(charSequenceGet(text, i)), new Char(_Char___init__impl__6a9atx(45))))
            sign = -1;
          if (!equals(new Char(charSequenceGet(text, i + 1 | 0)), new Char(_Char___init__impl__6a9atx(80)))) {
            parse$parseException("Expected 'P', got '" + new Char(charSequenceGet(text, i + 1 | 0)) + "'", i + 1 | 0);
          }
          i = i + 2 | 0;
        } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(80)))) {
          i = i + 1 | 0;
        } else {
          parse$parseException("Expected '+', '-', 'P', got '" + new Char(charSequenceGet(text, i)) + "'", i);
        }
        state = AFTER_P;
        continue $l$loop_0;
      }
      var localSign = sign;
      var iStart = i;
      var tmp1_subject = charSequenceGet(text, i);
      if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(43))) ? true : equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(45)))) {
        if (equals(new Char(charSequenceGet(text, i)), new Char(_Char___init__impl__6a9atx(45))))
          localSign = imul(localSign, -1);
        i = i + 1 | 0;
        var tmp_0;
        if (i >= text.length) {
          tmp_0 = true;
        } else {
          var containsArg = charSequenceGet(text, i);
          tmp_0 = !(_Char___init__impl__6a9atx(48) <= containsArg ? containsArg <= _Char___init__impl__6a9atx(57) : false);
        }
        if (tmp_0) {
          parse$parseException("A number expected after '" + new Char(charSequenceGet(text, i)) + "'", i);
        }
      } else if (_Char___init__impl__6a9atx(48) <= tmp1_subject ? tmp1_subject <= _Char___init__impl__6a9atx(57) : false) {
      } else if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(84)))) {
        if (state >= AFTER_T) {
          parse$parseException("Only one 'T' designator is allowed", i);
        }
        state = AFTER_T;
        i = i + 1 | 0;
        continue $l$loop_0;
      }
      var number = new Long(0, 0);
      $l$loop_1: while (true) {
        var tmp_1;
        if (i < text.length) {
          var containsArg_0 = charSequenceGet(text, i);
          tmp_1 = _Char___init__impl__6a9atx(48) <= containsArg_0 ? containsArg_0 <= _Char___init__impl__6a9atx(57) : false;
        } else {
          tmp_1 = false;
        }
        if (!tmp_1) {
          break $l$loop_1;
        }
        try {
          number = safeAdd(safeMultiply(number, new Long(10, 0)), toLong(Char__minus_impl_a2frrh(charSequenceGet(text, i), _Char___init__impl__6a9atx(48))));
        } catch ($p) {
          if ($p instanceof ArithmeticException) {
            var e = $p;
            parse$parseException('The number is too large', iStart);
          } else {
            throw $p;
          }
        }
        i = i + 1 | 0;
      }
      var tmp$ret$1;
      // Inline function 'kotlin.Long.times' call
      var tmp2_times = number;
      var tmp3_times = localSign;
      tmp$ret$1 = tmp2_times.times_2zfqpc_k$(toLong(tmp3_times));
      number = tmp$ret$1;
      if (i === text.length) {
        parse$parseException('Expected a designator after the numerical value', i);
      }
      var wrongOrder = "Wrong component order: should be 'Y', 'M', 'W', 'D', then designator 'T', then 'H', 'M', 'S'";
      var tmp2_subject = uppercaseChar(charSequenceGet(text, i));
      if (equals(new Char(tmp2_subject), new Char(_Char___init__impl__6a9atx(89)))) {
        if (state >= AFTER_YEAR) {
          parse$parseException(wrongOrder, i);
        }
        state = AFTER_YEAR;
        years = parse$toIntThrowing(number, iStart, _Char___init__impl__6a9atx(89));
      } else if (equals(new Char(tmp2_subject), new Char(_Char___init__impl__6a9atx(77)))) {
        if (state >= AFTER_T) {
          if (state >= AFTER_MINUTE) {
            parse$parseException(wrongOrder, i);
          }
          state = AFTER_MINUTE;
          minutes = parse$toIntThrowing(number, iStart, _Char___init__impl__6a9atx(77));
        } else {
          if (state >= AFTER_MONTH) {
            parse$parseException(wrongOrder, i);
          }
          state = AFTER_MONTH;
          months = parse$toIntThrowing(number, iStart, _Char___init__impl__6a9atx(77));
        }
      } else if (equals(new Char(tmp2_subject), new Char(_Char___init__impl__6a9atx(87)))) {
        if (state >= AFTER_WEEK) {
          parse$parseException(wrongOrder, i);
        }
        state = AFTER_WEEK;
        weeks = parse$toIntThrowing(number, iStart, _Char___init__impl__6a9atx(87));
      } else if (equals(new Char(tmp2_subject), new Char(_Char___init__impl__6a9atx(68)))) {
        if (state >= AFTER_DAY) {
          parse$parseException(wrongOrder, i);
        }
        state = AFTER_DAY;
        days = parse$toIntThrowing(number, iStart, _Char___init__impl__6a9atx(68));
      } else if (equals(new Char(tmp2_subject), new Char(_Char___init__impl__6a9atx(72)))) {
        if (state >= AFTER_HOUR ? true : state < AFTER_T) {
          parse$parseException(wrongOrder, i);
        }
        state = AFTER_HOUR;
        hours = parse$toIntThrowing(number, iStart, _Char___init__impl__6a9atx(72));
      } else if (equals(new Char(tmp2_subject), new Char(_Char___init__impl__6a9atx(83)))) {
        if (state >= AFTER_SECOND_AND_NANO ? true : state < AFTER_T) {
          parse$parseException(wrongOrder, i);
        }
        state = AFTER_SECOND_AND_NANO;
        seconds = parse$toIntThrowing(number, iStart, _Char___init__impl__6a9atx(83));
      } else if (equals(new Char(tmp2_subject), new Char(_Char___init__impl__6a9atx(46))) ? true : equals(new Char(tmp2_subject), new Char(_Char___init__impl__6a9atx(44)))) {
        i = i + 1 | 0;
        if (i >= text.length) {
          parse$parseException("Expected designator 'S' after " + new Char(charSequenceGet(text, i - 1 | 0)), i);
        }
        var iStartFraction = i;
        $l$loop_2: while (true) {
          var tmp_2;
          if (i < text.length) {
            var containsArg_1 = charSequenceGet(text, i);
            tmp_2 = _Char___init__impl__6a9atx(48) <= containsArg_1 ? containsArg_1 <= _Char___init__impl__6a9atx(57) : false;
          } else {
            tmp_2 = false;
          }
          if (!tmp_2) {
            break $l$loop_2;
          }
          i = i + 1 | 0;
        }
        var fractionLength = i - iStartFraction | 0;
        if (fractionLength > 9) {
          parse$parseException('Only the nanosecond fractions of a second are supported', iStartFraction);
        }
        var tmp$ret$3;
        // Inline function 'kotlin.text.substring' call
        var tmp4_substring = i;
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = text;
        tmp$ret$3 = tmp$ret$2.substring(iStartFraction, tmp4_substring);
        var fractionalPart = tmp$ret$3 + repeat('0', 9 - fractionLength | 0);
        nanoseconds = imul(toInt(fractionalPart, 10), localSign);
        if (!equals(new Char(charSequenceGet(text, i)), new Char(_Char___init__impl__6a9atx(83)))) {
          parse$parseException("Expected the 'S' designator after a fraction", i);
        }
        if (state >= AFTER_SECOND_AND_NANO ? true : state < AFTER_T) {
          parse$parseException(wrongOrder, i);
        }
        state = AFTER_SECOND_AND_NANO;
        seconds = parse$toIntThrowing(number, iStart, _Char___init__impl__6a9atx(83));
      } else {
        parse$parseException('Expected a designator after the numerical value', i);
      }
      i = i + 1 | 0;
    }
  };
  protoOf(Companion_0).serializer_9w0wvi_k$ = function () {
    return DateTimePeriodIso8601Serializer_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_3() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function DateTimePeriod() {
    Companion_getInstance_3();
  }
  protoOf(DateTimePeriod).get_years_j1r3xp_k$ = function () {
    return this.get_totalMonths_16su1e_k$() / 12 | 0;
  };
  protoOf(DateTimePeriod).get_months_gqmrjw_k$ = function () {
    return this.get_totalMonths_16su1e_k$() % 12 | 0;
  };
  protoOf(DateTimePeriod).get_hours_islejq_k$ = function () {
    return this.get_totalNanoseconds_r96768_k$().div_9s1fi3_k$(new Long(817405952, 838)).toInt_1tsl84_k$();
  };
  protoOf(DateTimePeriod).get_minutes_ivkhkm_k$ = function () {
    return this.get_totalNanoseconds_r96768_k$().rem_9rbcjo_k$(new Long(817405952, 838)).div_9s1fi3_k$(new Long(-129542144, 13)).toInt_1tsl84_k$();
  };
  protoOf(DateTimePeriod).get_seconds_xuhyfq_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.div' call
    var tmp0_div = this.get_totalNanoseconds_r96768_k$().rem_9rbcjo_k$(new Long(-129542144, 13));
    var tmp1_div = get_NANOS_PER_ONE();
    tmp$ret$0 = tmp0_div.div_9s1fi3_k$(toLong(tmp1_div));
    return tmp$ret$0.toInt_1tsl84_k$();
  };
  protoOf(DateTimePeriod).get_nanoseconds_3zfxge_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.rem' call
    var tmp0_rem = this.get_totalNanoseconds_r96768_k$();
    var tmp1_rem = get_NANOS_PER_ONE();
    tmp$ret$0 = tmp0_rem.rem_9rbcjo_k$(toLong(tmp1_rem));
    return tmp$ret$0.toInt_1tsl84_k$();
  };
  protoOf(DateTimePeriod).toString = function () {
    var tmp$ret$4;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.datetime.DateTimePeriod.toString.<anonymous>' call
    var tmp;
    if (allNonpositive(this)) {
      tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(45));
      tmp = -1;
    } else {
      tmp = 1;
    }
    var sign = tmp;
    tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(80));
    if (!(this.get_years_j1r3xp_k$() === 0)) {
      tmp0_apply.append_t8pm91_k$(imul(this.get_years_j1r3xp_k$(), sign)).append_t8oh9e_k$(_Char___init__impl__6a9atx(89));
    }
    if (!(this.get_months_gqmrjw_k$() === 0)) {
      tmp0_apply.append_t8pm91_k$(imul(this.get_months_gqmrjw_k$(), sign)).append_t8oh9e_k$(_Char___init__impl__6a9atx(77));
    }
    if (!(this.get_days_wokl28_k$() === 0)) {
      tmp0_apply.append_t8pm91_k$(imul(this.get_days_wokl28_k$(), sign)).append_t8oh9e_k$(_Char___init__impl__6a9atx(68));
    }
    var t = 'T';
    if (!(this.get_hours_islejq_k$() === 0)) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = tmp0_apply.append_ssq29y_k$(t).append_t8pm91_k$(imul(this.get_hours_islejq_k$(), sign)).append_t8oh9e_k$(_Char___init__impl__6a9atx(72));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.datetime.DateTimePeriod.toString.<anonymous>.<anonymous>' call
      t = '';
      tmp$ret$0 = tmp0_also;
    }
    if (!(this.get_minutes_ivkhkm_k$() === 0)) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp1_also = tmp0_apply.append_ssq29y_k$(t).append_t8pm91_k$(imul(this.get_minutes_ivkhkm_k$(), sign)).append_t8oh9e_k$(_Char___init__impl__6a9atx(77));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.datetime.DateTimePeriod.toString.<anonymous>.<anonymous>' call
      t = '';
      tmp$ret$1 = tmp1_also;
    }
    if (!((this.get_seconds_xuhyfq_k$() | this.get_nanoseconds_3zfxge_k$()) === 0)) {
      tmp0_apply.append_ssq29y_k$(t);
      tmp0_apply.append_t8pm91_k$(!(this.get_seconds_xuhyfq_k$() === 0) ? imul(this.get_seconds_xuhyfq_k$(), sign) : imul(this.get_nanoseconds_3zfxge_k$(), sign) < 0 ? '-0' : '0');
      if (!(this.get_nanoseconds_3zfxge_k$() === 0)) {
        var tmp_0 = tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(46));
        var tmp$ret$2;
        // Inline function 'kotlin.math.absoluteValue' call
        var tmp2__get_absoluteValue__uu8ln7 = this.get_nanoseconds_3zfxge_k$();
        tmp$ret$2 = abs(tmp2__get_absoluteValue__uu8ln7);
        tmp_0.append_ssq29y_k$(padStart(tmp$ret$2.toString(), 9, _Char___init__impl__6a9atx(48)));
      }
      tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(83));
    }
    if (tmp0_apply.get_length_g42xv3_k$() === 1) {
      tmp0_apply.append_ssq29y_k$('0D');
    }
    tmp$ret$3 = tmp0_apply;
    tmp$ret$4 = tmp$ret$3.toString();
    return tmp$ret$4;
  };
  protoOf(DateTimePeriod).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DateTimePeriod))
      return false;
    if (!(this.get_totalMonths_16su1e_k$() === other.get_totalMonths_16su1e_k$()))
      return false;
    if (!(this.get_days_wokl28_k$() === other.get_days_wokl28_k$()))
      return false;
    if (!this.get_totalNanoseconds_r96768_k$().equals(other.get_totalNanoseconds_r96768_k$()))
      return false;
    return true;
  };
  protoOf(DateTimePeriod).hashCode = function () {
    var result = this.get_totalMonths_16su1e_k$();
    result = imul(31, result) + this.get_days_wokl28_k$() | 0;
    result = imul(31, result) + this.get_totalNanoseconds_r96768_k$().hashCode() | 0;
    return result;
  };
  function DatePeriod_init_$Init$(years, months, days, $this) {
    years = years === VOID ? 0 : years;
    months = months === VOID ? 0 : months;
    days = days === VOID ? 0 : days;
    DatePeriod.call($this, totalMonths(years, months), days);
    return $this;
  }
  function DatePeriod_init_$Create$(years, months, days) {
    return DatePeriod_init_$Init$(years, months, days, objectCreate(protoOf(DatePeriod)));
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).parse_4mmrzm_k$ = function (text) {
    var period = Companion_getInstance_3().parse_4mmrzm_k$(text);
    var tmp;
    if (period instanceof DatePeriod) {
      tmp = period;
    } else {
      throw DateTimeFormatException_init_$Create$_0('Period ' + period + ' (parsed from string ' + text + ') is not date-based');
    }
    return tmp;
  };
  protoOf(Companion_1).serializer_9w0wvi_k$ = function () {
    return DatePeriodIso8601Serializer_getInstance();
  };
  var Companion_instance_1;
  function Companion_getInstance_4() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function DatePeriod(totalMonths, days) {
    Companion_getInstance_4();
    DateTimePeriod.call(this);
    this.totalMonths_1 = totalMonths;
    this.days_1 = days;
  }
  protoOf(DatePeriod).get_totalMonths_16su1e_k$ = function () {
    return this.totalMonths_1;
  };
  protoOf(DatePeriod).get_days_wokl28_k$ = function () {
    return this.days_1;
  };
  protoOf(DatePeriod).get_hours_islejq_k$ = function () {
    return 0;
  };
  protoOf(DatePeriod).get_minutes_ivkhkm_k$ = function () {
    return 0;
  };
  protoOf(DatePeriod).get_seconds_xuhyfq_k$ = function () {
    return 0;
  };
  protoOf(DatePeriod).get_nanoseconds_3zfxge_k$ = function () {
    return 0;
  };
  protoOf(DatePeriod).get_totalNanoseconds_r96768_k$ = function () {
    return new Long(0, 0);
  };
  function DateTimePeriod_0(years, months, days, hours, minutes, seconds, nanoseconds) {
    years = years === VOID ? 0 : years;
    months = months === VOID ? 0 : months;
    days = days === VOID ? 0 : days;
    hours = hours === VOID ? 0 : hours;
    minutes = minutes === VOID ? 0 : minutes;
    seconds = seconds === VOID ? 0 : seconds;
    nanoseconds = nanoseconds === VOID ? new Long(0, 0) : nanoseconds;
    return buildDateTimePeriod(totalMonths(years, months), days, totalNanoseconds(hours, minutes, seconds, nanoseconds));
  }
  function DateTimePeriodImpl(totalMonths, days, totalNanoseconds) {
    DateTimePeriod.call(this);
    this.totalMonths_1 = totalMonths;
    this.days_1 = days;
    this.totalNanoseconds_1 = totalNanoseconds;
  }
  protoOf(DateTimePeriodImpl).get_totalMonths_16su1e_k$ = function () {
    return this.totalMonths_1;
  };
  protoOf(DateTimePeriodImpl).get_days_wokl28_k$ = function () {
    return this.days_1;
  };
  protoOf(DateTimePeriodImpl).get_totalNanoseconds_r96768_k$ = function () {
    return this.totalNanoseconds_1;
  };
  function totalMonths(years, months) {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.times' call
    var tmp0_times = toLong(years);
    tmp$ret$0 = tmp0_times.times_2zfqpc_k$(new Long(12, 0));
    var totalMonths = tmp$ret$0.plus_u6jwas_k$(toLong(months));
    var tmp;
    var containsLower = IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$();
    if (totalMonths.compareTo_n4fqi2_k$(toLong(IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$())) <= 0 ? toLong(containsLower).compareTo_n4fqi2_k$(totalMonths) <= 0 : false) {
      tmp = totalMonths.toInt_1tsl84_k$();
    } else {
      throw IllegalArgumentException_init_$Create$('The total number of months in ' + years + ' years and ' + months + ' months overflows an Int');
    }
    return tmp;
  }
  function buildDateTimePeriod(totalMonths, days, totalNanoseconds) {
    totalMonths = totalMonths === VOID ? 0 : totalMonths;
    days = days === VOID ? 0 : days;
    return !totalNanoseconds.equals(new Long(0, 0)) ? new DateTimePeriodImpl(totalMonths, days, totalNanoseconds) : new DatePeriod(totalMonths, days);
  }
  function totalNanoseconds(hours, minutes, seconds, nanoseconds) {
    var tmp$ret$1;
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$0;
    // Inline function 'kotlin.Long.times' call
    var tmp0_times = toLong(hours);
    tmp$ret$0 = tmp0_times.times_2zfqpc_k$(new Long(60, 0));
    var tmp1_plus = tmp$ret$0;
    tmp$ret$1 = tmp1_plus.plus_u6jwas_k$(toLong(minutes));
    var totalMinutes = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.Long.times' call
    tmp$ret$2 = totalMinutes.times_2zfqpc_k$(new Long(60, 0));
    var totalMinutesAsSeconds = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.Long.div' call
    var tmp2_div = get_NANOS_PER_ONE();
    tmp$ret$3 = nanoseconds.div_9s1fi3_k$(toLong(tmp2_div));
    var minutesAndNanosecondsAsSeconds = totalMinutesAsSeconds.plus_u6jwas_k$(tmp$ret$3);
    var tmp$ret$4;
    // Inline function 'kotlin.Long.plus' call
    tmp$ret$4 = minutesAndNanosecondsAsSeconds.plus_u6jwas_k$(toLong(seconds));
    var totalSeconds = tmp$ret$4;
    var tmp;
    try {
      var tmp_0 = new Long(1000000000, 0);
      var tmp$ret$5;
      // Inline function 'kotlin.Long.rem' call
      var tmp3_rem = get_NANOS_PER_ONE();
      tmp$ret$5 = nanoseconds.rem_9rbcjo_k$(toLong(tmp3_rem));
      tmp = multiplyAndAdd(totalSeconds, tmp_0, tmp$ret$5);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof ArithmeticException) {
        var e = $p;
        throw IllegalArgumentException_init_$Create$('The total number of nanoseconds in ' + hours + ' hours, ' + minutes + ' minutes, ' + seconds + ' seconds, and ' + toString(nanoseconds) + ' nanoseconds overflows a Long');
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function _get_unitName__gfdlz0($this) {
    return $this.unitName_1;
  }
  function _get_unitScale__ef1qsr($this) {
    return $this.unitScale_1;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).serializer_9w0wvi_k$ = function () {
    return TimeBasedDateTimeUnitSerializer_getInstance();
  };
  var Companion_instance_2;
  function Companion_getInstance_5() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).serializer_9w0wvi_k$ = function () {
    return DateBasedDateTimeUnitSerializer_getInstance();
  };
  var Companion_instance_3;
  function Companion_getInstance_6() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).serializer_9w0wvi_k$ = function () {
    return DayBasedDateTimeUnitSerializer_getInstance();
  };
  var Companion_instance_4;
  function Companion_getInstance_7() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  protoOf(Companion_5).serializer_9w0wvi_k$ = function () {
    return MonthBasedDateTimeUnitSerializer_getInstance();
  };
  var Companion_instance_5;
  function Companion_getInstance_8() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function TimeBased(nanoseconds) {
    Companion_getInstance_5();
    DateTimeUnit.call(this);
    this.nanoseconds_1 = nanoseconds;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.nanoseconds_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.datetime.TimeBased.<anonymous>' call
      tmp$ret$0 = 'Unit duration must be positive, but was ' + toString(this.nanoseconds_1) + ' ns.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.nanoseconds_1.rem_9rbcjo_k$(new Long(817405952, 838)).equals(new Long(0, 0))) {
      this.unitName_1 = 'HOUR';
      this.unitScale_1 = this.nanoseconds_1.div_9s1fi3_k$(new Long(817405952, 838));
    } else {
      if (this.nanoseconds_1.rem_9rbcjo_k$(new Long(-129542144, 13)).equals(new Long(0, 0))) {
        this.unitName_1 = 'MINUTE';
        this.unitScale_1 = this.nanoseconds_1.div_9s1fi3_k$(new Long(-129542144, 13));
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.Long.rem' call
        var tmp1_rem = this.nanoseconds_1;
        tmp$ret$1 = tmp1_rem.rem_9rbcjo_k$(new Long(1000000000, 0));
        if (tmp$ret$1.equals(new Long(0, 0))) {
          this.unitName_1 = 'SECOND';
          var tmp = this;
          var tmp$ret$2;
          // Inline function 'kotlin.Long.div' call
          var tmp2_div = this.nanoseconds_1;
          tmp$ret$2 = tmp2_div.div_9s1fi3_k$(new Long(1000000000, 0));
          tmp.unitScale_1 = tmp$ret$2;
        } else {
          var tmp$ret$3;
          // Inline function 'kotlin.Long.rem' call
          var tmp3_rem = this.nanoseconds_1;
          tmp$ret$3 = tmp3_rem.rem_9rbcjo_k$(new Long(1000000, 0));
          if (tmp$ret$3.equals(new Long(0, 0))) {
            this.unitName_1 = 'MILLISECOND';
            var tmp_0 = this;
            var tmp$ret$4;
            // Inline function 'kotlin.Long.div' call
            var tmp4_div = this.nanoseconds_1;
            tmp$ret$4 = tmp4_div.div_9s1fi3_k$(new Long(1000000, 0));
            tmp_0.unitScale_1 = tmp$ret$4;
          } else {
            var tmp$ret$5;
            // Inline function 'kotlin.Long.rem' call
            var tmp5_rem = this.nanoseconds_1;
            tmp$ret$5 = tmp5_rem.rem_9rbcjo_k$(new Long(1000, 0));
            if (tmp$ret$5.equals(new Long(0, 0))) {
              this.unitName_1 = 'MICROSECOND';
              var tmp_1 = this;
              var tmp$ret$6;
              // Inline function 'kotlin.Long.div' call
              var tmp6_div = this.nanoseconds_1;
              tmp$ret$6 = tmp6_div.div_9s1fi3_k$(new Long(1000, 0));
              tmp_1.unitScale_1 = tmp$ret$6;
            } else {
              this.unitName_1 = 'NANOSECOND';
              this.unitScale_1 = this.nanoseconds_1;
            }
          }
        }
      }
    }
  }
  protoOf(TimeBased).get_nanoseconds_3zfxge_k$ = function () {
    return this.nanoseconds_1;
  };
  protoOf(TimeBased).times_vzczyd_k$ = function (scalar) {
    return new TimeBased(safeMultiply(this.nanoseconds_1, toLong(scalar)));
  };
  protoOf(TimeBased).get_duration_vbkdal_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.time.Companion.nanoseconds' call
    var tmp0__get_nanoseconds__hup2jk = Companion_getInstance();
    var tmp1__get_nanoseconds__vth17j = this.nanoseconds_1;
    tmp$ret$0 = toDuration(tmp1__get_nanoseconds__vth17j, DurationUnit_NANOSECONDS_getInstance());
    return tmp$ret$0;
  };
  protoOf(TimeBased).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof TimeBased) {
        tmp_0 = this.nanoseconds_1.equals(other.nanoseconds_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(TimeBased).hashCode = function () {
    return this.nanoseconds_1.toInt_1tsl84_k$() ^ this.nanoseconds_1.shr_wjue3g_k$(IntCompanionObject_getInstance().get_SIZE_BITS_7qhjj9_k$()).toInt_1tsl84_k$();
  };
  protoOf(TimeBased).toString = function () {
    return this.formatToString_emjhp0_k$(this.unitScale_1, this.unitName_1);
  };
  function DateBased() {
    Companion_getInstance_6();
    DateTimeUnit.call(this);
  }
  function DayBased(days) {
    Companion_getInstance_7();
    DateBased.call(this);
    this.days_1 = days;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.days_1 > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.datetime.DayBased.<anonymous>' call
      tmp$ret$0 = 'Unit duration must be positive, but was ' + this.days_1 + ' days.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(DayBased).get_days_wokl28_k$ = function () {
    return this.days_1;
  };
  protoOf(DayBased).times_vzczyd_k$ = function (scalar) {
    return new DayBased(safeMultiply_0(this.days_1, scalar));
  };
  protoOf(DayBased).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof DayBased) {
        tmp_0 = this.days_1 === other.days_1;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(DayBased).hashCode = function () {
    return this.days_1 ^ 65536;
  };
  protoOf(DayBased).toString = function () {
    return (this.days_1 % 7 | 0) === 0 ? this.formatToString_gxx3vh_k$(this.days_1 / 7 | 0, 'WEEK') : this.formatToString_gxx3vh_k$(this.days_1, 'DAY');
  };
  function MonthBased(months) {
    Companion_getInstance_8();
    DateBased.call(this);
    this.months_1 = months;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.months_1 > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.datetime.MonthBased.<anonymous>' call
      tmp$ret$0 = 'Unit duration must be positive, but was ' + this.months_1 + ' months.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(MonthBased).get_months_gqmrjw_k$ = function () {
    return this.months_1;
  };
  protoOf(MonthBased).times_vzczyd_k$ = function (scalar) {
    return new MonthBased(safeMultiply_0(this.months_1, scalar));
  };
  protoOf(MonthBased).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof MonthBased) {
        tmp_0 = this.months_1 === other.months_1;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(MonthBased).hashCode = function () {
    return this.months_1 ^ 131072;
  };
  protoOf(MonthBased).toString = function () {
    return (this.months_1 % 1200 | 0) === 0 ? this.formatToString_gxx3vh_k$(this.months_1 / 1200 | 0, 'CENTURY') : (this.months_1 % 12 | 0) === 0 ? this.formatToString_gxx3vh_k$(this.months_1 / 12 | 0, 'YEAR') : (this.months_1 % 3 | 0) === 0 ? this.formatToString_gxx3vh_k$(this.months_1 / 3 | 0, 'QUARTER') : this.formatToString_gxx3vh_k$(this.months_1, 'MONTH');
  };
  function Companion_6() {
    Companion_instance_6 = this;
    this.NANOSECOND_1 = new TimeBased(new Long(1, 0));
    this.MICROSECOND_1 = this.NANOSECOND_1.times_vzczyd_k$(1000);
    this.MILLISECOND_1 = this.MICROSECOND_1.times_vzczyd_k$(1000);
    this.SECOND_1 = this.MILLISECOND_1.times_vzczyd_k$(1000);
    this.MINUTE_1 = this.SECOND_1.times_vzczyd_k$(60);
    this.HOUR_1 = this.MINUTE_1.times_vzczyd_k$(60);
    this.DAY_1 = new DayBased(1);
    this.WEEK_1 = this.DAY_1.times_vzczyd_k$(7);
    this.MONTH_1 = new MonthBased(1);
    this.QUARTER_1 = this.MONTH_1.times_vzczyd_k$(3);
    this.YEAR_1 = this.MONTH_1.times_vzczyd_k$(12);
    this.CENTURY_1 = this.YEAR_1.times_vzczyd_k$(100);
  }
  protoOf(Companion_6).get_NANOSECOND_nxlhgx_k$ = function () {
    return this.NANOSECOND_1;
  };
  protoOf(Companion_6).get_MICROSECOND_rmegy9_k$ = function () {
    return this.MICROSECOND_1;
  };
  protoOf(Companion_6).get_MILLISECOND_ald81k_k$ = function () {
    return this.MILLISECOND_1;
  };
  protoOf(Companion_6).get_SECOND_3rkzul_k$ = function () {
    return this.SECOND_1;
  };
  protoOf(Companion_6).get_MINUTE_zplb1_k$ = function () {
    return this.MINUTE_1;
  };
  protoOf(Companion_6).get_HOUR_wo2b71_k$ = function () {
    return this.HOUR_1;
  };
  protoOf(Companion_6).get_DAY_18jw19_k$ = function () {
    return this.DAY_1;
  };
  protoOf(Companion_6).get_WEEK_wobo71_k$ = function () {
    return this.WEEK_1;
  };
  protoOf(Companion_6).get_MONTH_id5p9z_k$ = function () {
    return this.MONTH_1;
  };
  protoOf(Companion_6).get_QUARTER_nwunj7_k$ = function () {
    return this.QUARTER_1;
  };
  protoOf(Companion_6).get_YEAR_wocy2u_k$ = function () {
    return this.YEAR_1;
  };
  protoOf(Companion_6).get_CENTURY_o53irv_k$ = function () {
    return this.CENTURY_1;
  };
  protoOf(Companion_6).serializer_9w0wvi_k$ = function () {
    return DateTimeUnitSerializer_getInstance();
  };
  var Companion_instance_6;
  function Companion_getInstance_9() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function DateTimeUnit() {
    Companion_getInstance_9();
  }
  protoOf(DateTimeUnit).formatToString_gxx3vh_k$ = function (value, unit) {
    return value === 1 ? unit : '' + value + '-' + unit;
  };
  protoOf(DateTimeUnit).formatToString_emjhp0_k$ = function (value, unit) {
    return value.equals(new Long(1, 0)) ? unit : toString(value) + '-' + unit;
  };
  function get_allDaysOfWeek() {
    _init_properties_DayOfWeek_kt__jlq111();
    return allDaysOfWeek;
  }
  var allDaysOfWeek;
  function DayOfWeek(isoDayNumber) {
    _init_properties_DayOfWeek_kt__jlq111();
    // Inline function 'kotlin.require' call
    var tmp0_require = 1 <= isoDayNumber ? isoDayNumber <= 7 : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return get_allDaysOfWeek().get_fkrdnv_k$(isoDayNumber - 1 | 0);
  }
  var properties_initialized_DayOfWeek_kt_chtv49;
  function _init_properties_DayOfWeek_kt__jlq111() {
    if (properties_initialized_DayOfWeek_kt_chtv49) {
    } else {
      properties_initialized_DayOfWeek_kt_chtv49 = true;
      allDaysOfWeek = asList(values());
    }
  }
  function DateTimeFormatException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$() {
    var tmp = DateTimeFormatException_init_$Init$(objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_0(message) {
    var tmp = DateTimeFormatException_init_$Init$_0(message, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_0);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_1(cause, $this) {
    IllegalArgumentException_init_$Init$_1(cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_1(cause) {
    var tmp = DateTimeFormatException_init_$Init$_1(cause, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_1);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_2(message, cause, $this) {
    IllegalArgumentException_init_$Init$_2(message, cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_2(message, cause) {
    var tmp = DateTimeFormatException_init_$Init$_2(message, cause, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_2);
    return tmp;
  }
  function DateTimeFormatException() {
    captureStack(this, DateTimeFormatException);
  }
  function DateTimeArithmeticException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$() {
    var tmp = DateTimeArithmeticException_init_$Init$(objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$);
    return tmp;
  }
  function DateTimeArithmeticException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$_0(message) {
    var tmp = DateTimeArithmeticException_init_$Init$_0(message, objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$_0);
    return tmp;
  }
  function DateTimeArithmeticException_init_$Init$_1(cause, $this) {
    RuntimeException_init_$Init$_1(cause, $this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$_1(cause) {
    var tmp = DateTimeArithmeticException_init_$Init$_1(cause, objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$_1);
    return tmp;
  }
  function DateTimeArithmeticException_init_$Init$_2(message, cause, $this) {
    RuntimeException_init_$Init$_2(message, cause, $this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$_2(message, cause) {
    var tmp = DateTimeArithmeticException_init_$Init$_2(message, cause, objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$_2);
    return tmp;
  }
  function DateTimeArithmeticException() {
    captureStack(this, DateTimeArithmeticException);
  }
  function IllegalTimeZoneException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_$Create$() {
    var tmp = IllegalTimeZoneException_init_$Init$(objectCreate(protoOf(IllegalTimeZoneException)));
    captureStack(tmp, IllegalTimeZoneException_init_$Create$);
    return tmp;
  }
  function IllegalTimeZoneException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_$Create$_0(message) {
    var tmp = IllegalTimeZoneException_init_$Init$_0(message, objectCreate(protoOf(IllegalTimeZoneException)));
    captureStack(tmp, IllegalTimeZoneException_init_$Create$_0);
    return tmp;
  }
  function IllegalTimeZoneException_init_$Init$_1(cause, $this) {
    IllegalArgumentException_init_$Init$_1(cause, $this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_$Create$_1(cause) {
    var tmp = IllegalTimeZoneException_init_$Init$_1(cause, objectCreate(protoOf(IllegalTimeZoneException)));
    captureStack(tmp, IllegalTimeZoneException_init_$Create$_1);
    return tmp;
  }
  function IllegalTimeZoneException_init_$Init$_2(message, cause, $this) {
    IllegalArgumentException_init_$Init$_2(message, cause, $this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_$Create$_2(message, cause) {
    var tmp = IllegalTimeZoneException_init_$Init$_2(message, cause, objectCreate(protoOf(IllegalTimeZoneException)));
    captureStack(tmp, IllegalTimeZoneException_init_$Create$_2);
    return tmp;
  }
  function IllegalTimeZoneException() {
    captureStack(this, IllegalTimeZoneException);
  }
  function daysUntil(_this__u8e3s4, other, timeZone) {
    return clampToInt(until_0(_this__u8e3s4, other, Companion_getInstance_9().get_DAY_18jw19_k$(), timeZone));
  }
  function get_DISTANT_PAST_SECONDS() {
    return DISTANT_PAST_SECONDS;
  }
  var DISTANT_PAST_SECONDS;
  function get_DISTANT_FUTURE_SECONDS() {
    return DISTANT_FUTURE_SECONDS;
  }
  var DISTANT_FUTURE_SECONDS;
  function until(_this__u8e3s4, other, unit) {
    var tmp;
    try {
      tmp = multiplyAddAndDivide(other.get_epochSeconds_w76ght_k$().minus_llf5ei_k$(_this__u8e3s4.get_epochSeconds_w76ght_k$()), toLong(get_NANOS_PER_ONE()), toLong(other.get_nanosecondsOfSecond_n2ey8j_k$() - _this__u8e3s4.get_nanosecondsOfSecond_n2ey8j_k$() | 0), unit.get_nanoseconds_3zfxge_k$());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof ArithmeticException) {
        var e = $p;
        tmp_0 = _this__u8e3s4.compareTo_qie524_k$(other) < 0 ? Companion_getInstance_0().get_MAX_VALUE_54a9lf_k$() : Companion_getInstance_0().get_MIN_VALUE_7nmmor_k$();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function get_allMonths() {
    _init_properties_Month_kt__aau5fy();
    return allMonths;
  }
  var allMonths;
  function get_number(_this__u8e3s4) {
    _init_properties_Month_kt__aau5fy();
    return _this__u8e3s4.get_ordinal_ip24qg_k$() + 1 | 0;
  }
  function Month(number) {
    _init_properties_Month_kt__aau5fy();
    // Inline function 'kotlin.require' call
    var tmp0_require = 1 <= number ? number <= 12 : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return get_allMonths().get_fkrdnv_k$(number - 1 | 0);
  }
  var properties_initialized_Month_kt_gieo9c;
  function _init_properties_Month_kt__aau5fy() {
    if (properties_initialized_Month_kt_gieo9c) {
    } else {
      properties_initialized_Month_kt_gieo9c = true;
      allMonths = asList(values_0());
    }
  }
  function asTimeZone(_this__u8e3s4) {
    return FixedOffsetTimeZone_init_$Create$(_this__u8e3s4);
  }
  function get_NANOS_PER_MILLI() {
    return NANOS_PER_MILLI;
  }
  var NANOS_PER_MILLI;
  function get_MILLIS_PER_ONE() {
    return MILLIS_PER_ONE;
  }
  var MILLIS_PER_ONE;
  function get_NANOS_PER_ONE() {
    return NANOS_PER_ONE;
  }
  var NANOS_PER_ONE;
  function multiplyAndAdd(d, n, r) {
    var md = d;
    var mr = r;
    if (d.compareTo_n4fqi2_k$(new Long(0, 0)) > 0 ? r.compareTo_n4fqi2_k$(new Long(0, 0)) < 0 : false) {
      var tmp0 = md;
      md = tmp0.dec_24n6_k$();
      mr = mr.plus_u6jwas_k$(n);
    } else if (d.compareTo_n4fqi2_k$(new Long(0, 0)) < 0 ? r.compareTo_n4fqi2_k$(new Long(0, 0)) > 0 : false) {
      var tmp1 = md;
      md = tmp1.inc_28ke_k$();
      mr = mr.minus_llf5ei_k$(n);
    }
    return safeAdd(safeMultiply(md, n), mr);
  }
  function clampToInt(_this__u8e3s4) {
    return _this__u8e3s4.compareTo_n4fqi2_k$(toLong(IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$())) > 0 ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : _this__u8e3s4.compareTo_n4fqi2_k$(toLong(IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$())) < 0 ? IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$() : _this__u8e3s4.toInt_1tsl84_k$();
  }
  function multiplyAddAndDivide(d, n, r, m) {
    var md = d;
    var mr = r;
    if (d.compareTo_n4fqi2_k$(new Long(0, 0)) > 0 ? r.compareTo_n4fqi2_k$(new Long(0, 0)) < 0 : false) {
      var tmp0 = md;
      md = tmp0.dec_24n6_k$();
      mr = mr.plus_u6jwas_k$(n);
    } else if (d.compareTo_n4fqi2_k$(new Long(0, 0)) < 0 ? r.compareTo_n4fqi2_k$(new Long(0, 0)) > 0 : false) {
      var tmp1 = md;
      md = tmp1.inc_28ke_k$();
      mr = mr.minus_llf5ei_k$(n);
    }
    if (md.equals(new Long(0, 0))) {
      return mr.div_9s1fi3_k$(m);
    }
    var tmp2_container = multiplyAndDivide(md, n, m);
    var rd = tmp2_container.component1_7eebsc_k$();
    var rr = tmp2_container.component2_7eebsb_k$();
    return safeAdd(rd, safeAdd(mr.div_9s1fi3_k$(m), safeAdd(mr.rem_9rbcjo_k$(m), rr).div_9s1fi3_k$(m)));
  }
  function DivRemResult(q, r) {
    this.q_1 = q;
    this.r_1 = r;
  }
  protoOf(DivRemResult).get_q_1mhr60_k$ = function () {
    return this.q_1;
  };
  protoOf(DivRemResult).get_r_1mhr61_k$ = function () {
    return this.r_1;
  };
  protoOf(DivRemResult).component1_7eebsc_k$ = function () {
    return this.q_1;
  };
  protoOf(DivRemResult).component2_7eebsb_k$ = function () {
    return this.r_1;
  };
  function multiplyAndDivide(a, b, c) {
    if (a.equals(new Long(0, 0)) ? true : b.equals(new Long(0, 0)))
      return new DivRemResult(new Long(0, 0), new Long(0, 0));
    var ab = safeMultiplyOrZero(a, b);
    if (!ab.equals(new Long(0, 0)))
      return new DivRemResult(ab.div_9s1fi3_k$(c), ab.rem_9rbcjo_k$(c));
    if (b.equals(c))
      return new DivRemResult(a, new Long(0, 0));
    if (a.equals(c))
      return new DivRemResult(b, new Long(0, 0));
    var ae = a.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0 ? new Long(0, 0) : new Long(-1, -1);
    var be = b.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0 ? new Long(0, 0) : new Long(-1, -1);
    var tmp$ret$0;
    // Inline function 'kotlinx.datetime.internal.low' call
    tmp$ret$0 = a.and_jhajnj_k$(new Long(-1, 0));
    var al = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlinx.datetime.internal.high' call
    tmp$ret$1 = a.shr_wjue3g_k$(32).and_jhajnj_k$(new Long(-1, 0));
    var ah = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlinx.datetime.internal.low' call
    tmp$ret$2 = b.and_jhajnj_k$(new Long(-1, 0));
    var bl = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlinx.datetime.internal.high' call
    tmp$ret$3 = b.shr_wjue3g_k$(32).and_jhajnj_k$(new Long(-1, 0));
    var bh = tmp$ret$3;
    var w = ae.times_2zfqpc_k$(bh).plus_u6jwas_k$(ah.times_2zfqpc_k$(be));
    var x = ae.times_2zfqpc_k$(bl).plus_u6jwas_k$(ah.times_2zfqpc_k$(bh)).plus_u6jwas_k$(al.times_2zfqpc_k$(be));
    var y1 = ah.times_2zfqpc_k$(bl);
    var y2 = al.times_2zfqpc_k$(bh);
    var z = al.times_2zfqpc_k$(bl);
    var tmp$ret$4;
    // Inline function 'kotlinx.datetime.internal.low' call
    tmp$ret$4 = z.and_jhajnj_k$(new Long(-1, 0));
    var r4 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'kotlinx.datetime.internal.low' call
    tmp$ret$5 = y1.and_jhajnj_k$(new Long(-1, 0));
    var tmp = tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'kotlinx.datetime.internal.low' call
    tmp$ret$6 = y2.and_jhajnj_k$(new Long(-1, 0));
    var tmp_0 = tmp.plus_u6jwas_k$(tmp$ret$6);
    var tmp$ret$7;
    // Inline function 'kotlinx.datetime.internal.high' call
    tmp$ret$7 = z.shr_wjue3g_k$(32).and_jhajnj_k$(new Long(-1, 0));
    var r3c = tmp_0.plus_u6jwas_k$(tmp$ret$7);
    var tmp$ret$8;
    // Inline function 'kotlinx.datetime.internal.low' call
    tmp$ret$8 = r3c.and_jhajnj_k$(new Long(-1, 0));
    var r3 = tmp$ret$8;
    var tmp$ret$9;
    // Inline function 'kotlinx.datetime.internal.high' call
    tmp$ret$9 = r3c.shr_wjue3g_k$(32).and_jhajnj_k$(new Long(-1, 0));
    var tmp_1 = tmp$ret$9;
    var tmp$ret$10;
    // Inline function 'kotlinx.datetime.internal.low' call
    tmp$ret$10 = x.and_jhajnj_k$(new Long(-1, 0));
    var tmp_2 = tmp_1.plus_u6jwas_k$(tmp$ret$10);
    var tmp$ret$11;
    // Inline function 'kotlinx.datetime.internal.high' call
    tmp$ret$11 = y1.shr_wjue3g_k$(32).and_jhajnj_k$(new Long(-1, 0));
    var tmp_3 = tmp_2.plus_u6jwas_k$(tmp$ret$11);
    var tmp$ret$12;
    // Inline function 'kotlinx.datetime.internal.high' call
    tmp$ret$12 = y2.shr_wjue3g_k$(32).and_jhajnj_k$(new Long(-1, 0));
    var r2c = tmp_3.plus_u6jwas_k$(tmp$ret$12);
    var tmp$ret$13;
    // Inline function 'kotlinx.datetime.internal.low' call
    tmp$ret$13 = r2c.and_jhajnj_k$(new Long(-1, 0));
    var r2 = tmp$ret$13;
    var tmp$ret$14;
    // Inline function 'kotlinx.datetime.internal.high' call
    tmp$ret$14 = r2c.shr_wjue3g_k$(32).and_jhajnj_k$(new Long(-1, 0));
    var tmp_4 = tmp$ret$14;
    var tmp$ret$15;
    // Inline function 'kotlinx.datetime.internal.high' call
    tmp$ret$15 = x.shr_wjue3g_k$(32).and_jhajnj_k$(new Long(-1, 0));
    var tmp_5 = tmp_4.plus_u6jwas_k$(tmp$ret$15);
    var tmp$ret$16;
    // Inline function 'kotlinx.datetime.internal.low' call
    tmp$ret$16 = w.and_jhajnj_k$(new Long(-1, 0));
    var r1 = tmp_5.plus_u6jwas_k$(tmp$ret$16);
    var abl = r3.shl_po5ip6_k$(32).or_s401rn_k$(r4);
    var abh = r1.shl_po5ip6_k$(32).or_s401rn_k$(r2);
    var tmp_6;
    var tmp$ret$17;
    // Inline function 'kotlinx.datetime.internal.indexBit' call
    var tmp0_indexBit = abh;
    tmp$ret$17 = tmp0_indexBit.shr_wjue3g_k$(63).and_jhajnj_k$(new Long(1, 0));
    if (tmp$ret$17.equals(new Long(1, 0))) {
      tmp_6 = -1;
    } else {
      tmp_6 = 1;
    }
    var sign = tmp_6;
    if (sign === -1) {
      var tmp$ret$18;
      // Inline function 'kotlin.Long.plus' call
      var tmp1_plus = abl.inv_28kx_k$();
      tmp$ret$18 = tmp1_plus.plus_u6jwas_k$(new Long(1, 0));
      abl = tmp$ret$18;
      abh = abh.inv_28kx_k$();
      if (abl.equals(new Long(0, 0))) {
        var tmp$ret$19;
        // Inline function 'kotlin.Long.plus' call
        var tmp2_plus = abh;
        tmp$ret$19 = tmp2_plus.plus_u6jwas_k$(new Long(1, 0));
        abh = tmp$ret$19;
      }
    }
    var q = new Long(0, 0);
    var r = new Long(0, 0);
    var inductionVariable = 127;
    if (0 <= inductionVariable)
      do {
        var bitNo = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp_7;
        if (bitNo < 64) {
          var tmp$ret$20;
          // Inline function 'kotlinx.datetime.internal.indexBit' call
          var tmp3_indexBit = abl;
          tmp$ret$20 = tmp3_indexBit.shr_wjue3g_k$(bitNo).and_jhajnj_k$(new Long(1, 0));
          tmp_7 = tmp$ret$20;
        } else {
          var tmp$ret$21;
          // Inline function 'kotlinx.datetime.internal.indexBit' call
          var tmp4_indexBit = abh;
          var tmp5_indexBit = bitNo - 64 | 0;
          tmp$ret$21 = tmp4_indexBit.shr_wjue3g_k$(tmp5_indexBit).and_jhajnj_k$(new Long(1, 0));
          tmp_7 = tmp$ret$21;
        }
        var nextBit = tmp_7;
        r = r.shl_po5ip6_k$(1).or_s401rn_k$(nextBit);
        if (r.compareTo_n4fqi2_k$(c) >= 0 ? true : r.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
          r = r.minus_llf5ei_k$(c);
          if (bitNo < 63)
            q = q.or_s401rn_k$((new Long(1, 0)).shl_po5ip6_k$(bitNo));
          else
            throw ArithmeticException_init_$Create$('The result of a multiplication followed by division overflows a long');
        }
      }
       while (0 <= inductionVariable);
    return new DivRemResult(numberToLong(sign).times_2zfqpc_k$(q), numberToLong(sign).times_2zfqpc_k$(r));
  }
  function safeMultiplyOrZero(a, b) {
    var tmp0_subject = b;
    if (tmp0_subject.equals(new Long(-1, -1))) {
      if (a.equals(Companion_getInstance_0().get_MIN_VALUE_7nmmor_k$())) {
        return new Long(0, 0);
      }
      return a.unaryMinus_6uz0qp_k$();
    } else if (tmp0_subject.equals(new Long(1, 0)))
      return a;
    var total = a.times_2zfqpc_k$(b);
    if (!total.div_9s1fi3_k$(b).equals(a)) {
      return new Long(0, 0);
    }
    return total;
  }
  function low(x) {
    return x.and_jhajnj_k$(new Long(-1, 0));
  }
  function high(x) {
    return x.shr_wjue3g_k$(32).and_jhajnj_k$(new Long(-1, 0));
  }
  function indexBit(value, bit) {
    return value.shr_wjue3g_k$(bit).and_jhajnj_k$(new Long(1, 0));
  }
  function DatePeriodIso8601Serializer() {
    DatePeriodIso8601Serializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('DatePeriod', STRING_getInstance());
  }
  protoOf(DatePeriodIso8601Serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(DatePeriodIso8601Serializer).deserialize_2t41fm_k$ = function (decoder) {
    var period = Companion_getInstance_3().parse_4mmrzm_k$(decoder.decodeString_x3hxsx_k$());
    var tmp;
    if (period instanceof DatePeriod) {
      tmp = period;
    } else {
      throw SerializationException_init_$Create$('' + period + ' is not a date-based period');
    }
    return tmp;
  };
  protoOf(DatePeriodIso8601Serializer).serialize_4gofyo_k$ = function (encoder, value) {
    encoder.encodeString_90sumj_k$(value.toString());
  };
  protoOf(DatePeriodIso8601Serializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_4gofyo_k$(encoder, value instanceof DatePeriod ? value : THROW_CCE());
  };
  var DatePeriodIso8601Serializer_instance;
  function DatePeriodIso8601Serializer_getInstance() {
    if (DatePeriodIso8601Serializer_instance == null)
      new DatePeriodIso8601Serializer();
    return DatePeriodIso8601Serializer_instance;
  }
  function DateTimePeriodIso8601Serializer() {
    DateTimePeriodIso8601Serializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('DateTimePeriod', STRING_getInstance());
  }
  protoOf(DateTimePeriodIso8601Serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(DateTimePeriodIso8601Serializer).deserialize_2t41fm_k$ = function (decoder) {
    return Companion_getInstance_3().parse_4mmrzm_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(DateTimePeriodIso8601Serializer).serialize_oq4c4d_k$ = function (encoder, value) {
    encoder.encodeString_90sumj_k$(value.toString());
  };
  protoOf(DateTimePeriodIso8601Serializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_oq4c4d_k$(encoder, value instanceof DateTimePeriod ? value : THROW_CCE());
  };
  var DateTimePeriodIso8601Serializer_instance;
  function DateTimePeriodIso8601Serializer_getInstance() {
    if (DateTimePeriodIso8601Serializer_instance == null)
      new DateTimePeriodIso8601Serializer();
    return DateTimePeriodIso8601Serializer_instance;
  }
  function TimeBasedDateTimeUnitSerializer$descriptor$lambda($this$buildClassSerialDescriptor) {
    // Inline function 'kotlinx.serialization.descriptors.element' call
    var tmp1_element = emptyList();
    var tmp$ret$1;
    // Inline function 'kotlinx.serialization.serializer' call
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp0_cast = serializer(createKType(getKClass(Long), arrayOf([]), false));
    tmp$ret$0 = isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE();
    tmp$ret$1 = tmp$ret$0;
    var descriptor = tmp$ret$1.get_descriptor_wjt6a0_k$();
    $this$buildClassSerialDescriptor.element_t1rubu_k$('nanoseconds', descriptor, tmp1_element, false);
    return Unit_getInstance();
  }
  function TimeBasedDateTimeUnitSerializer() {
    TimeBasedDateTimeUnitSerializer_instance = this;
    var tmp = this;
    tmp.descriptor_1 = buildClassSerialDescriptor('TimeBased', [], TimeBasedDateTimeUnitSerializer$descriptor$lambda);
  }
  protoOf(TimeBasedDateTimeUnitSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(TimeBasedDateTimeUnitSerializer).serialize_nbaar_k$ = function (encoder, value) {
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var tmp0_encodeStructure = this.descriptor_1;
    var composite = encoder.beginStructure_dv3yt3_k$(tmp0_encodeStructure);
    // Inline function 'kotlinx.datetime.serializers.TimeBasedDateTimeUnitSerializer.serialize.<anonymous>' call
    composite.encodeLongElement_xtv8il_k$(TimeBasedDateTimeUnitSerializer_getInstance().descriptor_1, 0, value.get_nanoseconds_3zfxge_k$());
    composite.endStructure_e64gd4_k$(tmp0_encodeStructure);
  };
  protoOf(TimeBasedDateTimeUnitSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_nbaar_k$(encoder, value instanceof TimeBased ? value : THROW_CCE());
  };
  protoOf(TimeBasedDateTimeUnitSerializer).deserialize_2t41fm_k$ = function (decoder) {
    var seen = {_v: false};
    var nanoseconds = {_v: new Long(0, 0)};
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = this.descriptor_1;
    var composite = decoder.beginStructure_dv3yt3_k$(tmp0_decodeStructure);
    var tmp;
    if (composite.decodeSequentially_xlblqy_k$()) {
      nanoseconds._v = composite.decodeLongElement_kyznym_k$(TimeBasedDateTimeUnitSerializer_getInstance().descriptor_1, 0);
      seen._v = true;
      tmp = Unit_getInstance();
    } else {
      loop: while (true) {
        var elementIndex = composite.decodeElementIndex_nk5a2l_k$(TimeBasedDateTimeUnitSerializer_getInstance().descriptor_1);
        if (elementIndex === 0) {
          nanoseconds._v = composite.decodeLongElement_kyznym_k$(TimeBasedDateTimeUnitSerializer_getInstance().descriptor_1, 0);
          seen._v = true;
        } else if (elementIndex === Companion_getInstance_1().get_DECODE_DONE_1b8fna_k$())
          break loop;
        else
          throw UnknownFieldException_init_$Create$(elementIndex);
      }
      tmp = Unit_getInstance();
    }
    var result = tmp;
    composite.endStructure_e64gd4_k$(tmp0_decodeStructure);
    tmp$ret$0 = result;
    if (!seen._v)
      throw MissingFieldException_init_$Create$('nanoseconds');
    return new TimeBased(nanoseconds._v);
  };
  var TimeBasedDateTimeUnitSerializer_instance;
  function TimeBasedDateTimeUnitSerializer_getInstance() {
    if (TimeBasedDateTimeUnitSerializer_instance == null)
      new TimeBasedDateTimeUnitSerializer();
    return TimeBasedDateTimeUnitSerializer_instance;
  }
  function _get_impl__d88w17($this) {
    return $this.impl_1;
  }
  function DateBasedDateTimeUnitSerializer() {
    DateBasedDateTimeUnitSerializer_instance = this;
    AbstractPolymorphicSerializer.call(this);
    var tmp = this;
    var tmp_0 = getKClass(DateBased);
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [getKClass(DayBased), getKClass(MonthBased)];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp_1 = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'kotlin.arrayOf' call
    var tmp1_arrayOf = [DayBasedDateTimeUnitSerializer_getInstance(), MonthBasedDateTimeUnitSerializer_getInstance()];
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = tmp1_arrayOf;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    tmp.impl_1 = new SealedClassSerializer('kotlinx.datetime.DateTimeUnit.DateBased', tmp_0, tmp_1, tmp$ret$5);
  }
  protoOf(DateBasedDateTimeUnitSerializer).findPolymorphicSerializerOrNull_e7t5h9_k$ = function (decoder, klassName) {
    return this.impl_1.findPolymorphicSerializerOrNull_e7t5h9_k$(decoder, klassName);
  };
  protoOf(DateBasedDateTimeUnitSerializer).findPolymorphicSerializerOrNull_5wir90_k$ = function (encoder, value) {
    return this.impl_1.findPolymorphicSerializerOrNull_mimmn_k$(encoder, value);
  };
  protoOf(DateBasedDateTimeUnitSerializer).findPolymorphicSerializerOrNull_mimmn_k$ = function (encoder, value) {
    return this.findPolymorphicSerializerOrNull_5wir90_k$(encoder, value instanceof DateBased ? value : THROW_CCE());
  };
  protoOf(DateBasedDateTimeUnitSerializer).get_baseClass_lygw3m_k$ = function () {
    return getKClass(DateBased);
  };
  protoOf(DateBasedDateTimeUnitSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.impl_1.get_descriptor_wjt6a0_k$();
  };
  var DateBasedDateTimeUnitSerializer_instance;
  function DateBasedDateTimeUnitSerializer_getInstance() {
    if (DateBasedDateTimeUnitSerializer_instance == null)
      new DateBasedDateTimeUnitSerializer();
    return DateBasedDateTimeUnitSerializer_instance;
  }
  function DayBasedDateTimeUnitSerializer$descriptor$lambda($this$buildClassSerialDescriptor) {
    // Inline function 'kotlinx.serialization.descriptors.element' call
    var tmp1_element = emptyList();
    var tmp$ret$1;
    // Inline function 'kotlinx.serialization.serializer' call
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp0_cast = serializer(createKType(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$(), arrayOf([]), false));
    tmp$ret$0 = isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE();
    tmp$ret$1 = tmp$ret$0;
    var descriptor = tmp$ret$1.get_descriptor_wjt6a0_k$();
    $this$buildClassSerialDescriptor.element_t1rubu_k$('days', descriptor, tmp1_element, false);
    return Unit_getInstance();
  }
  function DayBasedDateTimeUnitSerializer() {
    DayBasedDateTimeUnitSerializer_instance = this;
    var tmp = this;
    tmp.descriptor_1 = buildClassSerialDescriptor('DayBased', [], DayBasedDateTimeUnitSerializer$descriptor$lambda);
  }
  protoOf(DayBasedDateTimeUnitSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(DayBasedDateTimeUnitSerializer).serialize_y8w6aw_k$ = function (encoder, value) {
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var tmp0_encodeStructure = this.descriptor_1;
    var composite = encoder.beginStructure_dv3yt3_k$(tmp0_encodeStructure);
    // Inline function 'kotlinx.datetime.serializers.DayBasedDateTimeUnitSerializer.serialize.<anonymous>' call
    composite.encodeIntElement_utywpf_k$(DayBasedDateTimeUnitSerializer_getInstance().descriptor_1, 0, value.get_days_wokl28_k$());
    composite.endStructure_e64gd4_k$(tmp0_encodeStructure);
  };
  protoOf(DayBasedDateTimeUnitSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_y8w6aw_k$(encoder, value instanceof DayBased ? value : THROW_CCE());
  };
  protoOf(DayBasedDateTimeUnitSerializer).deserialize_2t41fm_k$ = function (decoder) {
    var seen = {_v: false};
    var days = {_v: 0};
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = this.descriptor_1;
    var composite = decoder.beginStructure_dv3yt3_k$(tmp0_decodeStructure);
    var tmp;
    if (composite.decodeSequentially_xlblqy_k$()) {
      days._v = composite.decodeIntElement_cmpvet_k$(DayBasedDateTimeUnitSerializer_getInstance().descriptor_1, 0);
      seen._v = true;
      tmp = Unit_getInstance();
    } else {
      loop: while (true) {
        var elementIndex = composite.decodeElementIndex_nk5a2l_k$(DayBasedDateTimeUnitSerializer_getInstance().descriptor_1);
        if (elementIndex === 0) {
          days._v = composite.decodeIntElement_cmpvet_k$(DayBasedDateTimeUnitSerializer_getInstance().descriptor_1, 0);
          seen._v = true;
        } else if (elementIndex === Companion_getInstance_1().get_DECODE_DONE_1b8fna_k$())
          break loop;
        else
          throw UnknownFieldException_init_$Create$(elementIndex);
      }
      tmp = Unit_getInstance();
    }
    var result = tmp;
    composite.endStructure_e64gd4_k$(tmp0_decodeStructure);
    tmp$ret$0 = result;
    if (!seen._v)
      throw MissingFieldException_init_$Create$('days');
    return new DayBased(days._v);
  };
  var DayBasedDateTimeUnitSerializer_instance;
  function DayBasedDateTimeUnitSerializer_getInstance() {
    if (DayBasedDateTimeUnitSerializer_instance == null)
      new DayBasedDateTimeUnitSerializer();
    return DayBasedDateTimeUnitSerializer_instance;
  }
  function MonthBasedDateTimeUnitSerializer$descriptor$lambda($this$buildClassSerialDescriptor) {
    // Inline function 'kotlinx.serialization.descriptors.element' call
    var tmp1_element = emptyList();
    var tmp$ret$1;
    // Inline function 'kotlinx.serialization.serializer' call
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp0_cast = serializer(createKType(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$(), arrayOf([]), false));
    tmp$ret$0 = isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE();
    tmp$ret$1 = tmp$ret$0;
    var descriptor = tmp$ret$1.get_descriptor_wjt6a0_k$();
    $this$buildClassSerialDescriptor.element_t1rubu_k$('months', descriptor, tmp1_element, false);
    return Unit_getInstance();
  }
  function MonthBasedDateTimeUnitSerializer() {
    MonthBasedDateTimeUnitSerializer_instance = this;
    var tmp = this;
    tmp.descriptor_1 = buildClassSerialDescriptor('MonthBased', [], MonthBasedDateTimeUnitSerializer$descriptor$lambda);
  }
  protoOf(MonthBasedDateTimeUnitSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(MonthBasedDateTimeUnitSerializer).serialize_x1nm4s_k$ = function (encoder, value) {
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var tmp0_encodeStructure = this.descriptor_1;
    var composite = encoder.beginStructure_dv3yt3_k$(tmp0_encodeStructure);
    // Inline function 'kotlinx.datetime.serializers.MonthBasedDateTimeUnitSerializer.serialize.<anonymous>' call
    composite.encodeIntElement_utywpf_k$(MonthBasedDateTimeUnitSerializer_getInstance().descriptor_1, 0, value.get_months_gqmrjw_k$());
    composite.endStructure_e64gd4_k$(tmp0_encodeStructure);
  };
  protoOf(MonthBasedDateTimeUnitSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_x1nm4s_k$(encoder, value instanceof MonthBased ? value : THROW_CCE());
  };
  protoOf(MonthBasedDateTimeUnitSerializer).deserialize_2t41fm_k$ = function (decoder) {
    var seen = {_v: false};
    var months = {_v: 0};
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = this.descriptor_1;
    var composite = decoder.beginStructure_dv3yt3_k$(tmp0_decodeStructure);
    var tmp;
    if (composite.decodeSequentially_xlblqy_k$()) {
      months._v = composite.decodeIntElement_cmpvet_k$(MonthBasedDateTimeUnitSerializer_getInstance().descriptor_1, 0);
      seen._v = true;
      tmp = Unit_getInstance();
    } else {
      loop: while (true) {
        var elementIndex = composite.decodeElementIndex_nk5a2l_k$(MonthBasedDateTimeUnitSerializer_getInstance().descriptor_1);
        if (elementIndex === 0) {
          months._v = composite.decodeIntElement_cmpvet_k$(MonthBasedDateTimeUnitSerializer_getInstance().descriptor_1, 0);
          seen._v = true;
        } else if (elementIndex === Companion_getInstance_1().get_DECODE_DONE_1b8fna_k$())
          break loop;
        else
          throw UnknownFieldException_init_$Create$(elementIndex);
      }
      tmp = Unit_getInstance();
    }
    var result = tmp;
    composite.endStructure_e64gd4_k$(tmp0_decodeStructure);
    tmp$ret$0 = result;
    if (!seen._v)
      throw MissingFieldException_init_$Create$('months');
    return new MonthBased(months._v);
  };
  var MonthBasedDateTimeUnitSerializer_instance;
  function MonthBasedDateTimeUnitSerializer_getInstance() {
    if (MonthBasedDateTimeUnitSerializer_instance == null)
      new MonthBasedDateTimeUnitSerializer();
    return MonthBasedDateTimeUnitSerializer_instance;
  }
  function _get_impl__d88w17_0($this) {
    return $this.impl_1;
  }
  function DateTimeUnitSerializer() {
    DateTimeUnitSerializer_instance = this;
    AbstractPolymorphicSerializer.call(this);
    var tmp = this;
    var tmp_0 = getKClass(DateTimeUnit);
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [getKClass(DayBased), getKClass(MonthBased), getKClass(TimeBased)];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp_1 = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'kotlin.arrayOf' call
    var tmp1_arrayOf = [DayBasedDateTimeUnitSerializer_getInstance(), MonthBasedDateTimeUnitSerializer_getInstance(), TimeBasedDateTimeUnitSerializer_getInstance()];
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = tmp1_arrayOf;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    tmp.impl_1 = new SealedClassSerializer('kotlinx.datetime.DateTimeUnit', tmp_0, tmp_1, tmp$ret$5);
  }
  protoOf(DateTimeUnitSerializer).findPolymorphicSerializerOrNull_e7t5h9_k$ = function (decoder, klassName) {
    return this.impl_1.findPolymorphicSerializerOrNull_e7t5h9_k$(decoder, klassName);
  };
  protoOf(DateTimeUnitSerializer).findPolymorphicSerializerOrNull_f2xs8_k$ = function (encoder, value) {
    return this.impl_1.findPolymorphicSerializerOrNull_mimmn_k$(encoder, value);
  };
  protoOf(DateTimeUnitSerializer).findPolymorphicSerializerOrNull_mimmn_k$ = function (encoder, value) {
    return this.findPolymorphicSerializerOrNull_f2xs8_k$(encoder, value instanceof DateTimeUnit ? value : THROW_CCE());
  };
  protoOf(DateTimeUnitSerializer).get_baseClass_lygw3m_k$ = function () {
    return getKClass(DateTimeUnit);
  };
  protoOf(DateTimeUnitSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.impl_1.get_descriptor_wjt6a0_k$();
  };
  var DateTimeUnitSerializer_instance;
  function DateTimeUnitSerializer_getInstance() {
    if (DateTimeUnitSerializer_instance == null)
      new DateTimeUnitSerializer();
    return DateTimeUnitSerializer_instance;
  }
  function InstantIso8601Serializer() {
    InstantIso8601Serializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('Instant', STRING_getInstance());
  }
  protoOf(InstantIso8601Serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(InstantIso8601Serializer).deserialize_2t41fm_k$ = function (decoder) {
    return Companion_getInstance_10().parse_4mmrzm_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(InstantIso8601Serializer).serialize_pxaiqm_k$ = function (encoder, value) {
    encoder.encodeString_90sumj_k$(value.toString());
  };
  protoOf(InstantIso8601Serializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_pxaiqm_k$(encoder, value instanceof Instant_0 ? value : THROW_CCE());
  };
  var InstantIso8601Serializer_instance;
  function InstantIso8601Serializer_getInstance() {
    if (InstantIso8601Serializer_instance == null)
      new InstantIso8601Serializer();
    return InstantIso8601Serializer_instance;
  }
  function LocalDateIso8601Serializer() {
    LocalDateIso8601Serializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('LocalDate', STRING_getInstance());
  }
  protoOf(LocalDateIso8601Serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(LocalDateIso8601Serializer).deserialize_2t41fm_k$ = function (decoder) {
    return Companion_getInstance_11().parse_4mmrzm_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(LocalDateIso8601Serializer).serialize_15ohu2_k$ = function (encoder, value) {
    encoder.encodeString_90sumj_k$(value.toString());
  };
  protoOf(LocalDateIso8601Serializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_15ohu2_k$(encoder, value instanceof LocalDate_0 ? value : THROW_CCE());
  };
  var LocalDateIso8601Serializer_instance;
  function LocalDateIso8601Serializer_getInstance() {
    if (LocalDateIso8601Serializer_instance == null)
      new LocalDateIso8601Serializer();
    return LocalDateIso8601Serializer_instance;
  }
  function LocalDateTimeIso8601Serializer() {
    LocalDateTimeIso8601Serializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('LocalDateTime', STRING_getInstance());
  }
  protoOf(LocalDateTimeIso8601Serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(LocalDateTimeIso8601Serializer).deserialize_2t41fm_k$ = function (decoder) {
    return Companion_getInstance_12().parse_4mmrzm_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(LocalDateTimeIso8601Serializer).serialize_wlz4tf_k$ = function (encoder, value) {
    encoder.encodeString_90sumj_k$(value.toString());
  };
  protoOf(LocalDateTimeIso8601Serializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_wlz4tf_k$(encoder, value instanceof LocalDateTime_0 ? value : THROW_CCE());
  };
  var LocalDateTimeIso8601Serializer_instance;
  function LocalDateTimeIso8601Serializer_getInstance() {
    if (LocalDateTimeIso8601Serializer_instance == null)
      new LocalDateTimeIso8601Serializer();
    return LocalDateTimeIso8601Serializer_instance;
  }
  function LocalTimeIso8601Serializer() {
    LocalTimeIso8601Serializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('LocalTime', STRING_getInstance());
  }
  protoOf(LocalTimeIso8601Serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(LocalTimeIso8601Serializer).deserialize_2t41fm_k$ = function (decoder) {
    return Companion_getInstance_13().parse_4mmrzm_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(LocalTimeIso8601Serializer).serialize_yltg6j_k$ = function (encoder, value) {
    encoder.encodeString_90sumj_k$(value.toString());
  };
  protoOf(LocalTimeIso8601Serializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_yltg6j_k$(encoder, value instanceof LocalTime_0 ? value : THROW_CCE());
  };
  var LocalTimeIso8601Serializer_instance;
  function LocalTimeIso8601Serializer_getInstance() {
    if (LocalTimeIso8601Serializer_instance == null)
      new LocalTimeIso8601Serializer();
    return LocalTimeIso8601Serializer_instance;
  }
  function TimeZoneSerializer() {
    TimeZoneSerializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('TimeZone', STRING_getInstance());
  }
  protoOf(TimeZoneSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(TimeZoneSerializer).deserialize_2t41fm_k$ = function (decoder) {
    return Companion_getInstance_14().of_yqlxgq_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(TimeZoneSerializer).serialize_mleona_k$ = function (encoder, value) {
    encoder.encodeString_90sumj_k$(value.get_id_kntnx8_k$());
  };
  protoOf(TimeZoneSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_mleona_k$(encoder, value instanceof TimeZone ? value : THROW_CCE());
  };
  var TimeZoneSerializer_instance;
  function TimeZoneSerializer_getInstance() {
    if (TimeZoneSerializer_instance == null)
      new TimeZoneSerializer();
    return TimeZoneSerializer_instance;
  }
  function FixedOffsetTimeZoneSerializer() {
    FixedOffsetTimeZoneSerializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('FixedOffsetTimeZone', STRING_getInstance());
  }
  protoOf(FixedOffsetTimeZoneSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(FixedOffsetTimeZoneSerializer).deserialize_2t41fm_k$ = function (decoder) {
    var zone = Companion_getInstance_14().of_yqlxgq_k$(decoder.decodeString_x3hxsx_k$());
    if (zone instanceof FixedOffsetTimeZone) {
      return zone;
    } else {
      throw SerializationException_init_$Create$("Timezone identifier '" + zone + "' does not correspond to a fixed-offset timezone");
    }
  };
  protoOf(FixedOffsetTimeZoneSerializer).serialize_3ifcpv_k$ = function (encoder, value) {
    encoder.encodeString_90sumj_k$(value.get_id_kntnx8_k$());
  };
  protoOf(FixedOffsetTimeZoneSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_3ifcpv_k$(encoder, value instanceof FixedOffsetTimeZone ? value : THROW_CCE());
  };
  var FixedOffsetTimeZoneSerializer_instance;
  function FixedOffsetTimeZoneSerializer_getInstance() {
    if (FixedOffsetTimeZoneSerializer_instance == null)
      new FixedOffsetTimeZoneSerializer();
    return FixedOffsetTimeZoneSerializer_instance;
  }
  function UtcOffsetSerializer() {
    UtcOffsetSerializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('UtcOffset', STRING_getInstance());
  }
  protoOf(UtcOffsetSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(UtcOffsetSerializer).deserialize_2t41fm_k$ = function (decoder) {
    return Companion_getInstance_16().parse_4mmrzm_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(UtcOffsetSerializer).serialize_ghsvo4_k$ = function (encoder, value) {
    encoder.encodeString_90sumj_k$(value.toString());
  };
  protoOf(UtcOffsetSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_ghsvo4_k$(encoder, value instanceof UtcOffset ? value : THROW_CCE());
  };
  var UtcOffsetSerializer_instance;
  function UtcOffsetSerializer_getInstance() {
    if (UtcOffsetSerializer_instance == null)
      new UtcOffsetSerializer();
    return UtcOffsetSerializer_instance;
  }
  var DayOfWeek_MONDAY_instance;
  var DayOfWeek_TUESDAY_instance;
  var DayOfWeek_WEDNESDAY_instance;
  var DayOfWeek_THURSDAY_instance;
  var DayOfWeek_FRIDAY_instance;
  var DayOfWeek_SATURDAY_instance;
  var DayOfWeek_SUNDAY_instance;
  function values() {
    return [DayOfWeek_MONDAY_getInstance(), DayOfWeek_TUESDAY_getInstance(), DayOfWeek_WEDNESDAY_getInstance(), DayOfWeek_THURSDAY_getInstance(), DayOfWeek_FRIDAY_getInstance(), DayOfWeek_SATURDAY_getInstance(), DayOfWeek_SUNDAY_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'MONDAY':
        return DayOfWeek_MONDAY_getInstance();
      case 'TUESDAY':
        return DayOfWeek_TUESDAY_getInstance();
      case 'WEDNESDAY':
        return DayOfWeek_WEDNESDAY_getInstance();
      case 'THURSDAY':
        return DayOfWeek_THURSDAY_getInstance();
      case 'FRIDAY':
        return DayOfWeek_FRIDAY_getInstance();
      case 'SATURDAY':
        return DayOfWeek_SATURDAY_getInstance();
      case 'SUNDAY':
        return DayOfWeek_SUNDAY_getInstance();
      default:
        DayOfWeek_initEntries();
        THROW_ISE();
        break;
    }
  }
  var DayOfWeek_entriesInitialized;
  function DayOfWeek_initEntries() {
    if (DayOfWeek_entriesInitialized)
      return Unit_getInstance();
    DayOfWeek_entriesInitialized = true;
    DayOfWeek_MONDAY_instance = new DayOfWeek_0('MONDAY', 0);
    DayOfWeek_TUESDAY_instance = new DayOfWeek_0('TUESDAY', 1);
    DayOfWeek_WEDNESDAY_instance = new DayOfWeek_0('WEDNESDAY', 2);
    DayOfWeek_THURSDAY_instance = new DayOfWeek_0('THURSDAY', 3);
    DayOfWeek_FRIDAY_instance = new DayOfWeek_0('FRIDAY', 4);
    DayOfWeek_SATURDAY_instance = new DayOfWeek_0('SATURDAY', 5);
    DayOfWeek_SUNDAY_instance = new DayOfWeek_0('SUNDAY', 6);
  }
  function DayOfWeek_0(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toDayOfWeek(_this__u8e3s4) {
    return DayOfWeek(numberToInt(_this__u8e3s4.value()));
  }
  function DayOfWeek_MONDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_MONDAY_instance;
  }
  function DayOfWeek_TUESDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_TUESDAY_instance;
  }
  function DayOfWeek_WEDNESDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_WEDNESDAY_instance;
  }
  function DayOfWeek_THURSDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_THURSDAY_instance;
  }
  function DayOfWeek_FRIDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_FRIDAY_instance;
  }
  function DayOfWeek_SATURDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_SATURDAY_instance;
  }
  function DayOfWeek_SUNDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_SUNDAY_instance;
  }
  function until_0(_this__u8e3s4, other, unit, timeZone) {
    var tmp;
    try {
      var thisZdt = atZone(_this__u8e3s4, timeZone);
      var otherZdt = atZone(other, timeZone);
      var tmp0_subject = unit;
      var tmp_0;
      if (tmp0_subject instanceof TimeBased) {
        tmp_0 = until(_this__u8e3s4, other, unit);
      } else {
        if (tmp0_subject instanceof DayBased) {
          tmp_0 = numberToLong(numberToDouble(thisZdt.until(otherZdt, ChronoUnit.DAYS)) / unit.get_days_wokl28_k$());
        } else {
          if (tmp0_subject instanceof MonthBased) {
            tmp_0 = numberToLong(numberToDouble(thisZdt.until(otherZdt, ChronoUnit.MONTHS)) / unit.get_months_gqmrjw_k$());
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof ArithmeticException) {
        var e = $p;
        tmp_1 = _this__u8e3s4.compareTo_qie524_k$(other) < 0 ? Companion_getInstance_0().get_MAX_VALUE_54a9lf_k$() : Companion_getInstance_0().get_MIN_VALUE_7nmmor_k$();
      } else {
        if ($p instanceof Error) {
          var e_0 = $p;
          var tmp_2;
          if (isJodaDateTimeException(e_0)) {
            throw DateTimeArithmeticException_init_$Create$_1(e_0);
          } else {
            throw e_0;
          }
          tmp_1 = tmp_2;
        } else {
          throw $p;
        }
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function fixOffsetRepresentation($this, isoString) {
    var time = indexOf(isoString, _Char___init__impl__6a9atx(84), VOID, true);
    if (time === -1)
      return isoString;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.indexOfLast' call
      var inductionVariable = charSequenceLength(isoString) - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp$ret$0;
          // Inline function 'kotlinx.datetime.Companion.fixOffsetRepresentation.<anonymous>' call
          var tmp0__anonymous__q1qw7t = charSequenceGet(isoString, index);
          tmp$ret$0 = equals(new Char(tmp0__anonymous__q1qw7t), new Char(_Char___init__impl__6a9atx(43))) ? true : equals(new Char(tmp0__anonymous__q1qw7t), new Char(_Char___init__impl__6a9atx(45)));
          if (tmp$ret$0) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (0 <= inductionVariable);
      tmp$ret$1 = -1;
    }
    var offset = tmp$ret$1;
    if (offset < time)
      return isoString;
    var separator = indexOf(isoString, _Char___init__impl__6a9atx(58), offset);
    return !(separator === -1) ? isoString : isoString + ':00';
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.DISTANT_PAST_1 = new Instant_0(Instant.ofEpochSecond(get_DISTANT_PAST_SECONDS(), 999999999));
    this.DISTANT_FUTURE_1 = new Instant_0(Instant.ofEpochSecond(get_DISTANT_FUTURE_SECONDS(), 0));
    this.MIN_1 = new Instant_0(Instant.MIN);
    this.MAX_1 = new Instant_0(Instant.MAX);
  }
  protoOf(Companion_7).now_2cba_k$ = function () {
    return new Instant_0(Clock.systemUTC().instant());
  };
  protoOf(Companion_7).fromEpochMilliseconds_tgp1r9_k$ = function (epochMilliseconds) {
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = get_MILLIS_PER_ONE();
      tmp$ret$0 = epochMilliseconds.div_9s1fi3_k$(toLong(tmp0_div));
      var tmp_0 = tmp$ret$0;
      var tmp$ret$2;
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$1;
      // Inline function 'kotlin.Long.rem' call
      var tmp1_rem = get_MILLIS_PER_ONE();
      tmp$ret$1 = epochMilliseconds.rem_9rbcjo_k$(toLong(tmp1_rem));
      var tmp2_times = tmp$ret$1;
      var tmp3_times = get_NANOS_PER_MILLI();
      tmp$ret$2 = tmp2_times.times_2zfqpc_k$(toLong(tmp3_times));
      tmp = this.fromEpochSeconds_fot8oc_k$(tmp_0, tmp$ret$2);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        if (!isJodaDateTimeException(e))
          throw e;
        tmp_1 = epochMilliseconds.compareTo_n4fqi2_k$(new Long(0, 0)) > 0 ? this.MAX_1 : this.MIN_1;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  };
  protoOf(Companion_7).parse_4mmrzm_k$ = function (isoString) {
    var tmp;
    try {
      tmp = new Instant_0(OffsetDateTime.parse(fixOffsetRepresentation(this, isoString)).toInstant());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeParseException(e))
          throw DateTimeFormatException_init_$Create$_1(e);
        throw e;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_7).fromEpochSeconds_fot8oc_k$ = function (epochSeconds, nanosecondAdjustment) {
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.floorDiv' call
      var tmp0_floorDiv = toLong(get_NANOS_PER_ONE());
      var q = nanosecondAdjustment.div_9s1fi3_k$(tmp0_floorDiv);
      if (nanosecondAdjustment.xor_jjua9n_k$(tmp0_floorDiv).compareTo_n4fqi2_k$(new Long(0, 0)) < 0 ? !q.times_2zfqpc_k$(tmp0_floorDiv).equals(nanosecondAdjustment) : false) {
        var tmp0 = q;
        q = tmp0.dec_24n6_k$();
      }
      tmp$ret$0 = q;
      var secs = safeAdd(epochSeconds, tmp$ret$0);
      var tmp$ret$1;
      // Inline function 'kotlin.mod' call
      var tmp1_mod = toLong(get_NANOS_PER_ONE());
      var r = nanosecondAdjustment.rem_9rbcjo_k$(tmp1_mod);
      tmp$ret$1 = r.plus_u6jwas_k$(tmp1_mod.and_jhajnj_k$(r.xor_jjua9n_k$(tmp1_mod).and_jhajnj_k$(r.or_s401rn_k$(r.unaryMinus_6uz0qp_k$())).shr_wjue3g_k$(63)));
      var nos = tmp$ret$1.toInt_1tsl84_k$();
      tmp = new Instant_0(Instant.ofEpochSecond(secs, nos));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        var tmp_1;
        if (!isJodaDateTimeException(e)) {
          tmp_1 = !(e instanceof ArithmeticException);
        } else {
          tmp_1 = false;
        }
        if (tmp_1)
          throw e;
        tmp_0 = epochSeconds.compareTo_n4fqi2_k$(new Long(0, 0)) > 0 ? this.MAX_1 : this.MIN_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_7).fromEpochSeconds$default_351ke6_k$ = function (epochSeconds, nanosecondAdjustment, $super) {
    nanosecondAdjustment = nanosecondAdjustment === VOID ? new Long(0, 0) : nanosecondAdjustment;
    return $super === VOID ? this.fromEpochSeconds_fot8oc_k$(epochSeconds, nanosecondAdjustment) : $super.fromEpochSeconds_fot8oc_k$.call(this, epochSeconds, nanosecondAdjustment);
  };
  protoOf(Companion_7).fromEpochSeconds_xv3a1j_k$ = function (epochSeconds, nanosecondAdjustment) {
    var tmp;
    try {
      tmp = new Instant_0(Instant.ofEpochSecond(epochSeconds, nanosecondAdjustment));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (!isJodaDateTimeException(e))
          throw e;
        tmp_0 = epochSeconds.compareTo_n4fqi2_k$(new Long(0, 0)) > 0 ? this.MAX_1 : this.MIN_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_7).get_DISTANT_PAST_yzdqbd_k$ = function () {
    return this.DISTANT_PAST_1;
  };
  protoOf(Companion_7).get_DISTANT_FUTURE_gftwmi_k$ = function () {
    return this.DISTANT_FUTURE_1;
  };
  protoOf(Companion_7).get_MIN_18jp6f_k$ = function () {
    return this.MIN_1;
  };
  protoOf(Companion_7).get_MAX_18jpd1_k$ = function () {
    return this.MAX_1;
  };
  protoOf(Companion_7).serializer_9w0wvi_k$ = function () {
    return InstantIso8601Serializer_getInstance();
  };
  var Companion_instance_7;
  function Companion_getInstance_10() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function Instant_0(value) {
    Companion_getInstance_10();
    this.value_1 = value;
  }
  protoOf(Instant_0).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Instant_0).get_epochSeconds_w76ght_k$ = function () {
    return numberToLong(this.value_1.epochSecond());
  };
  protoOf(Instant_0).get_nanosecondsOfSecond_n2ey8j_k$ = function () {
    return numberToInt(this.value_1.nano());
  };
  protoOf(Instant_0).toEpochMilliseconds_82cfls_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$0;
    // Inline function 'kotlin.Long.times' call
    var tmp0_times = this.get_epochSeconds_w76ght_k$();
    var tmp1_times = get_MILLIS_PER_ONE();
    tmp$ret$0 = tmp0_times.times_2zfqpc_k$(toLong(tmp1_times));
    var tmp2_plus = tmp$ret$0;
    var tmp3_plus = this.get_nanosecondsOfSecond_n2ey8j_k$() / get_NANOS_PER_MILLI() | 0;
    tmp$ret$1 = tmp2_plus.plus_u6jwas_k$(toLong(tmp3_plus));
    return tmp$ret$1;
  };
  protoOf(Instant_0).plus_bswwzx_k$ = function (duration) {
    var tmp$ret$0;
    // Inline function 'kotlin.time.Duration.toComponents' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp0__anonymous__q1qw7t = _Duration___get_inWholeSeconds__impl__hpy7b3(duration);
    var tmp1__anonymous__uwfjfc = _Duration___get_nanosecondsComponent__impl__nh19kq(duration);
    var tmp;
    try {
      tmp = new Instant_0(this.plusFix_dvs02v_k$(tmp0__anonymous__q1qw7t.toDouble_ygsx0s_k$(), tmp1__anonymous__uwfjfc));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (!isJodaDateTimeException(e))
          throw e;
        tmp_0 = tmp0__anonymous__q1qw7t.compareTo_n4fqi2_k$(new Long(0, 0)) > 0 ? Companion_getInstance_10().MAX_1 : Companion_getInstance_10().MIN_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
    return tmp$ret$0;
  };
  protoOf(Instant_0).plusFix_dvs02v_k$ = function (seconds, nanos) {
    var newSeconds = numberToDouble(this.value_1.epochSecond()) + seconds;
    var newNanos = numberToDouble(this.value_1.nano()) + nanos;
    return Instant.ofEpochSecond(newSeconds, newNanos);
  };
  protoOf(Instant_0).minus_luqxh3_k$ = function (duration) {
    return this.plus_bswwzx_k$(Duration__unaryMinus_impl_x2k1y0(duration));
  };
  protoOf(Instant_0).minus_q82skq_k$ = function (other) {
    var diff = Duration.between(other.value_1, this.value_1);
    var tmp$ret$0;
    // Inline function 'kotlin.time.Companion.seconds' call
    var tmp0__get_seconds__yb22lo = Companion_getInstance();
    var tmp1__get_seconds__bshwyb = numberToDouble(diff.seconds());
    tmp$ret$0 = toDuration_0(tmp1__get_seconds__bshwyb, DurationUnit_SECONDS_getInstance());
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.time.Companion.nanoseconds' call
    var tmp2__get_nanoseconds__p8v23m = Companion_getInstance();
    var tmp3__get_nanoseconds__ba33fn = numberToDouble(diff.nano());
    tmp$ret$1 = toDuration_0(tmp3__get_nanoseconds__ba33fn, DurationUnit_NANOSECONDS_getInstance());
    return Duration__plus_impl_yu9v8f(tmp, tmp$ret$1);
  };
  protoOf(Instant_0).compareTo_qie524_k$ = function (other) {
    return numberToInt(this.value_1.compareTo(other.value_1));
  };
  protoOf(Instant_0).compareTo_6thzaj_k$ = function (other) {
    return this.compareTo_qie524_k$(other instanceof Instant_0 ? other : THROW_CCE());
  };
  protoOf(Instant_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof Instant_0) {
        tmp_0 = equals(this.value_1, other.value_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Instant_0).hashCode = function () {
    return numberToInt(this.value_1.hashCode());
  };
  protoOf(Instant_0).toString = function () {
    return this.value_1.toString();
  };
  function plus(_this__u8e3s4, period, timeZone) {
    var tmp;
    try {
      var thisZdt = _this__u8e3s4.value_1.atZone(timeZone.get_zoneId_mw7isw_k$());
      var tmp$ret$14;
      // Inline function 'kotlin.let' call
      var tmp$ret$13;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$12;
      // Inline function 'kotlinx.datetime.plus.<anonymous>' call
      var tmp$ret$11;
      // Inline function 'kotlin.run' call
      var tmp$ret$9;
      // Inline function 'kotlin.run' call
      var tmp$ret$7;
      // Inline function 'kotlin.run' call
      var tmp$ret$5;
      // Inline function 'kotlin.run' call
      var tmp$ret$3;
      // Inline function 'kotlin.run' call
      var tmp$ret$1;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.datetime.plus.<anonymous>.<anonymous>' call
      tmp$ret$0 = !(period.get_totalMonths_16su1e_k$() === 0) ? thisZdt.plusMonths(period.get_totalMonths_16su1e_k$()) : thisZdt;
      tmp$ret$1 = tmp$ret$0;
      var tmp0_run = tmp$ret$1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'kotlinx.datetime.plus.<anonymous>.<anonymous>' call
      tmp$ret$2 = !(period.get_days_wokl28_k$() === 0) ? tmp0_run.plusDays(period.get_days_wokl28_k$()) : tmp0_run;
      tmp$ret$3 = tmp$ret$2;
      var tmp1_run = tmp$ret$3;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'kotlinx.datetime.plus.<anonymous>.<anonymous>' call
      tmp$ret$4 = !(period.get_hours_islejq_k$() === 0) ? tmp1_run.plusHours(period.get_hours_islejq_k$()) : tmp1_run;
      tmp$ret$5 = tmp$ret$4;
      var tmp2_run = tmp$ret$5;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'kotlinx.datetime.plus.<anonymous>.<anonymous>' call
      tmp$ret$6 = !(period.get_minutes_ivkhkm_k$() === 0) ? tmp2_run.plusMinutes(period.get_minutes_ivkhkm_k$()) : tmp2_run;
      tmp$ret$7 = tmp$ret$6;
      var tmp3_run = tmp$ret$7;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$8;
      // Inline function 'kotlinx.datetime.plus.<anonymous>.<anonymous>' call
      tmp$ret$8 = !(period.get_seconds_xuhyfq_k$() === 0) ? tmp3_run.plusSeconds(period.get_seconds_xuhyfq_k$()) : tmp3_run;
      tmp$ret$9 = tmp$ret$8;
      var tmp4_run = tmp$ret$9;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$10;
      // Inline function 'kotlinx.datetime.plus.<anonymous>.<anonymous>' call
      tmp$ret$10 = !(period.get_nanoseconds_3zfxge_k$() === 0) ? tmp4_run.plusNanos(period.get_nanoseconds_3zfxge_k$()) : tmp4_run;
      tmp$ret$11 = tmp$ret$10;
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      var tmp0_let = tmp$ret$13.toInstant();
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$14 = new Instant_0(tmp0_let);
      tmp = tmp$ret$14;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw DateTimeArithmeticException_init_$Create$_1(e);
        throw e;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function atZone(_this__u8e3s4, zone) {
    return _this__u8e3s4.value_1.atZone(zone.get_zoneId_mw7isw_k$());
  }
  function isJodaDateTimeException(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    return tmp$ret$0.name == 'DateTimeException';
  }
  function isJodaDateTimeParseException(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    return tmp$ret$0.name == 'DateTimeParseException';
  }
  function isJodaArithmeticException(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    return tmp$ret$0.name == 'ArithmeticException';
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.MIN_1 = new LocalDate_0(LocalDate.MIN);
    this.MAX_1 = new LocalDate_0(LocalDate.MAX);
  }
  protoOf(Companion_8).parse_4mmrzm_k$ = function (isoString) {
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_let = LocalDate.parse(isoString);
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = new LocalDate_0(tmp0_let);
      tmp = tmp$ret$0;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeParseException(e))
          throw DateTimeFormatException_init_$Create$_1(e);
        throw e;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_8).get_MIN_18jp6f_k$ = function () {
    return this.MIN_1;
  };
  protoOf(Companion_8).get_MAX_18jpd1_k$ = function () {
    return this.MAX_1;
  };
  protoOf(Companion_8).fromEpochDays_tguvf_k$ = function (epochDays) {
    var tmp;
    try {
      tmp = new LocalDate_0(LocalDate.ofEpochDay(epochDays));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_8).serializer_9w0wvi_k$ = function () {
    return LocalDateIso8601Serializer_getInstance();
  };
  var Companion_instance_8;
  function Companion_getInstance_11() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function LocalDate_init_$Init$(year, monthNumber, dayOfMonth, $this) {
    var tmp;
    try {
      tmp = LocalDate.of(year, monthNumber, dayOfMonth);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    LocalDate_0.call($this, tmp);
    return $this;
  }
  function LocalDate_init_$Create$(year, monthNumber, dayOfMonth) {
    return LocalDate_init_$Init$(year, monthNumber, dayOfMonth, objectCreate(protoOf(LocalDate_0)));
  }
  function LocalDate_init_$Init$_0(year, month, dayOfMonth, $this) {
    LocalDate_init_$Init$(year, get_number(month), dayOfMonth, $this);
    return $this;
  }
  function LocalDate_init_$Create$_0(year, month, dayOfMonth) {
    return LocalDate_init_$Init$_0(year, month, dayOfMonth, objectCreate(protoOf(LocalDate_0)));
  }
  function LocalDate_0(value) {
    Companion_getInstance_11();
    this.value_1 = value;
  }
  protoOf(LocalDate_0).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(LocalDate_0).get_year_woy26e_k$ = function () {
    return numberToInt(this.value_1.year());
  };
  protoOf(LocalDate_0).get_monthNumber_nb47ls_k$ = function () {
    return numberToInt(this.value_1.monthValue());
  };
  protoOf(LocalDate_0).get_month_ivc8d3_k$ = function () {
    return toMonth(this.value_1.month());
  };
  protoOf(LocalDate_0).get_dayOfMonth_vblo3a_k$ = function () {
    return numberToInt(this.value_1.dayOfMonth());
  };
  protoOf(LocalDate_0).get_dayOfWeek_3kfgci_k$ = function () {
    return toDayOfWeek(this.value_1.dayOfWeek());
  };
  protoOf(LocalDate_0).get_dayOfYear_3ke6gp_k$ = function () {
    return numberToInt(this.value_1.dayOfYear());
  };
  protoOf(LocalDate_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDate_0) {
        tmp_0 = equals(this.value_1, other.value_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDate_0).hashCode = function () {
    return numberToInt(this.value_1.hashCode());
  };
  protoOf(LocalDate_0).toString = function () {
    return this.value_1.toString();
  };
  protoOf(LocalDate_0).compareTo_2osj5o_k$ = function (other) {
    return numberToInt(this.value_1.compareTo(other.value_1));
  };
  protoOf(LocalDate_0).compareTo_6thzaj_k$ = function (other) {
    return this.compareTo_2osj5o_k$(other instanceof LocalDate_0 ? other : THROW_CCE());
  };
  protoOf(LocalDate_0).toEpochDays_tp9eth_k$ = function () {
    return numberToInt(this.value_1.toEpochDay());
  };
  function plus_0(_this__u8e3s4, period) {
    var tmp;
    try {
      var tmp$ret$6;
      // Inline function 'kotlin.let' call
      var tmp$ret$5;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'kotlinx.datetime.plus.<anonymous>' call
      var tmp$ret$3;
      // Inline function 'kotlin.run' call
      var tmp$ret$1;
      // Inline function 'kotlin.run' call
      var tmp0_run = _this__u8e3s4.value_1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.datetime.plus.<anonymous>.<anonymous>' call
      tmp$ret$0 = !(period.get_totalMonths_16su1e_k$() === 0) ? tmp0_run.plusMonths(period.get_totalMonths_16su1e_k$()) : tmp0_run;
      tmp$ret$1 = tmp$ret$0;
      var tmp1_run = tmp$ret$1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'kotlinx.datetime.plus.<anonymous>.<anonymous>' call
      tmp$ret$2 = !(period.get_days_wokl28_k$() === 0) ? tmp1_run.plusDays(period.get_days_wokl28_k$()) : tmp1_run;
      tmp$ret$3 = tmp$ret$2;
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      var tmp0_let = tmp$ret$5;
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$6 = new LocalDate_0(tmp0_let);
      tmp = tmp$ret$6;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e) ? true : isJodaArithmeticException(e))
          throw DateTimeArithmeticException_init_$Create$_1(e);
        throw e;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function until_1(_this__u8e3s4, other, unit) {
    var tmp0_subject = unit;
    var tmp;
    if (tmp0_subject instanceof MonthBased) {
      tmp = monthsUntil(_this__u8e3s4, other) / unit.get_months_gqmrjw_k$() | 0;
    } else {
      if (tmp0_subject instanceof DayBased) {
        tmp = daysUntil_0(_this__u8e3s4, other) / unit.get_days_wokl28_k$() | 0;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function plus_1(_this__u8e3s4, value, unit) {
    return plusNumber(_this__u8e3s4, value, unit);
  }
  function minus(_this__u8e3s4, value, unit) {
    return plusNumber(_this__u8e3s4, -value | 0, unit);
  }
  function monthsUntil(_this__u8e3s4, other) {
    return numberToInt(_this__u8e3s4.value_1.until(other.value_1, ChronoUnit.MONTHS));
  }
  function daysUntil_0(_this__u8e3s4, other) {
    return numberToInt(_this__u8e3s4.value_1.until(other.value_1, ChronoUnit.DAYS));
  }
  function plusNumber(_this__u8e3s4, value, unit) {
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_subject = unit;
      var tmp_0;
      if (tmp0_subject instanceof DayBased) {
        tmp_0 = _this__u8e3s4.value_1.plusDays(numberToDouble(value) * unit.get_days_wokl28_k$());
      } else {
        if (tmp0_subject instanceof MonthBased) {
          tmp_0 = _this__u8e3s4.value_1.plusMonths(numberToDouble(value) * unit.get_months_gqmrjw_k$());
        } else {
          noWhenBranchMatchedException();
        }
      }
      var tmp0_let = tmp_0;
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = new LocalDate_0(tmp0_let);
      tmp = tmp$ret$0;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        if (!isJodaDateTimeException(e) ? !isJodaArithmeticException(e) : false)
          throw e;
        throw DateTimeArithmeticException_init_$Create$_2('The result of adding ' + toString(value) + ' of ' + unit + ' to ' + _this__u8e3s4 + ' is out of LocalDate range.', e);
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function LocalDateTime_init_$Init$(year, monthNumber, dayOfMonth, hour, minute, second, nanosecond, $this) {
    second = second === VOID ? 0 : second;
    nanosecond = nanosecond === VOID ? 0 : nanosecond;
    var tmp;
    try {
      tmp = LocalDateTime.of(year, monthNumber, dayOfMonth, hour, minute, second, nanosecond);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    LocalDateTime_0.call($this, tmp);
    return $this;
  }
  function LocalDateTime_init_$Create$(year, monthNumber, dayOfMonth, hour, minute, second, nanosecond) {
    return LocalDateTime_init_$Init$(year, monthNumber, dayOfMonth, hour, minute, second, nanosecond, objectCreate(protoOf(LocalDateTime_0)));
  }
  function LocalDateTime_init_$Init$_0(year, month, dayOfMonth, hour, minute, second, nanosecond, $this) {
    second = second === VOID ? 0 : second;
    nanosecond = nanosecond === VOID ? 0 : nanosecond;
    LocalDateTime_init_$Init$(year, get_number(month), dayOfMonth, hour, minute, second, nanosecond, $this);
    return $this;
  }
  function LocalDateTime_init_$Create$_0(year, month, dayOfMonth, hour, minute, second, nanosecond) {
    return LocalDateTime_init_$Init$_0(year, month, dayOfMonth, hour, minute, second, nanosecond, objectCreate(protoOf(LocalDateTime_0)));
  }
  function LocalDateTime_init_$Init$_1(date, time, $this) {
    LocalDateTime_0.call($this, LocalDateTime.of(date.get_value_j01efc_k$(), time.get_value_j01efc_k$()));
    return $this;
  }
  function LocalDateTime_init_$Create$_1(date, time) {
    return LocalDateTime_init_$Init$_1(date, time, objectCreate(protoOf(LocalDateTime_0)));
  }
  function Companion_9() {
    Companion_instance_9 = this;
    this.MIN_1 = new LocalDateTime_0(LocalDateTime.MIN);
    this.MAX_1 = new LocalDateTime_0(LocalDateTime.MAX);
  }
  protoOf(Companion_9).parse_4mmrzm_k$ = function (isoString) {
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_let = LocalDateTime.parse(isoString);
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = new LocalDateTime_0(tmp0_let);
      tmp = tmp$ret$0;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeParseException(e))
          throw DateTimeFormatException_init_$Create$_1(e);
        throw e;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_9).get_MIN_18jp6f_k$ = function () {
    return this.MIN_1;
  };
  protoOf(Companion_9).get_MAX_18jpd1_k$ = function () {
    return this.MAX_1;
  };
  protoOf(Companion_9).serializer_9w0wvi_k$ = function () {
    return LocalDateTimeIso8601Serializer_getInstance();
  };
  var Companion_instance_9;
  function Companion_getInstance_12() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function LocalDateTime_0(value) {
    Companion_getInstance_12();
    this.value_1 = value;
  }
  protoOf(LocalDateTime_0).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(LocalDateTime_0).get_year_woy26e_k$ = function () {
    return numberToInt(this.value_1.year());
  };
  protoOf(LocalDateTime_0).get_monthNumber_nb47ls_k$ = function () {
    return numberToInt(this.value_1.monthValue());
  };
  protoOf(LocalDateTime_0).get_month_ivc8d3_k$ = function () {
    return toMonth(this.value_1.month());
  };
  protoOf(LocalDateTime_0).get_dayOfMonth_vblo3a_k$ = function () {
    return numberToInt(this.value_1.dayOfMonth());
  };
  protoOf(LocalDateTime_0).get_dayOfWeek_3kfgci_k$ = function () {
    return toDayOfWeek(this.value_1.dayOfWeek());
  };
  protoOf(LocalDateTime_0).get_dayOfYear_3ke6gp_k$ = function () {
    return numberToInt(this.value_1.dayOfYear());
  };
  protoOf(LocalDateTime_0).get_hour_wonfal_k$ = function () {
    return numberToInt(this.value_1.hour());
  };
  protoOf(LocalDateTime_0).get_minute_gnc10d_k$ = function () {
    return numberToInt(this.value_1.minute());
  };
  protoOf(LocalDateTime_0).get_second_jf7fjx_k$ = function () {
    return numberToInt(this.value_1.second());
  };
  protoOf(LocalDateTime_0).get_nanosecond_fws9td_k$ = function () {
    return numberToInt(this.value_1.nano());
  };
  protoOf(LocalDateTime_0).get_date_wokkxj_k$ = function () {
    return new LocalDate_0(this.value_1.toLocalDate());
  };
  protoOf(LocalDateTime_0).get_time_wouyhi_k$ = function () {
    return new LocalTime_0(this.value_1.toLocalTime());
  };
  protoOf(LocalDateTime_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDateTime_0) {
        tmp_0 = equals(this.value_1, other.value_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDateTime_0).hashCode = function () {
    return numberToInt(this.value_1.hashCode());
  };
  protoOf(LocalDateTime_0).toString = function () {
    return this.value_1.toString();
  };
  protoOf(LocalDateTime_0).compareTo_r4pomh_k$ = function (other) {
    return numberToInt(this.value_1.compareTo(other.value_1));
  };
  protoOf(LocalDateTime_0).compareTo_6thzaj_k$ = function (other) {
    return this.compareTo_r4pomh_k$(other instanceof LocalDateTime_0 ? other : THROW_CCE());
  };
  function LocalTime_init_$Init$(hour, minute, second, nanosecond, $this) {
    second = second === VOID ? 0 : second;
    nanosecond = nanosecond === VOID ? 0 : nanosecond;
    var tmp;
    try {
      tmp = LocalTime.of(hour, minute, second, nanosecond);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    LocalTime_0.call($this, tmp);
    return $this;
  }
  function LocalTime_init_$Create$(hour, minute, second, nanosecond) {
    return LocalTime_init_$Init$(hour, minute, second, nanosecond, objectCreate(protoOf(LocalTime_0)));
  }
  function Companion_10() {
    Companion_instance_10 = this;
    this.MIN_1 = new LocalTime_0(LocalTime.MIN);
    this.MAX_1 = new LocalTime_0(LocalTime.MAX);
  }
  protoOf(Companion_10).parse_4mmrzm_k$ = function (isoString) {
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_let = LocalTime.parse(isoString);
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = new LocalTime_0(tmp0_let);
      tmp = tmp$ret$0;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeParseException(e))
          throw DateTimeFormatException_init_$Create$_1(e);
        throw e;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_10).fromSecondOfDay_3y3ipy_k$ = function (secondOfDay) {
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_let = LocalTime.ofSecondOfDay(secondOfDay, 0);
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = new LocalTime_0(tmp0_let);
      tmp = tmp$ret$0;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        throw IllegalArgumentException_init_$Create$_0(e);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_10).fromMillisecondOfDay_7twkp9_k$ = function (millisecondOfDay) {
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_let = LocalTime.ofNanoOfDay(millisecondOfDay * 1000000.0);
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = new LocalTime_0(tmp0_let);
      tmp = tmp$ret$0;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        throw IllegalArgumentException_init_$Create$_0(e);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_10).fromNanosecondOfDay_tc0fz7_k$ = function (nanosecondOfDay) {
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_let = LocalTime.ofNanoOfDay(nanosecondOfDay.toDouble_ygsx0s_k$());
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = new LocalTime_0(tmp0_let);
      tmp = tmp$ret$0;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        throw IllegalArgumentException_init_$Create$_0(e);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_10).get_MIN_18jp6f_k$ = function () {
    return this.MIN_1;
  };
  protoOf(Companion_10).get_MAX_18jpd1_k$ = function () {
    return this.MAX_1;
  };
  protoOf(Companion_10).serializer_9w0wvi_k$ = function () {
    return LocalTimeIso8601Serializer_getInstance();
  };
  var Companion_instance_10;
  function Companion_getInstance_13() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function LocalTime_0(value) {
    Companion_getInstance_13();
    this.value_1 = value;
  }
  protoOf(LocalTime_0).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(LocalTime_0).get_hour_wonfal_k$ = function () {
    return numberToInt(this.value_1.hour());
  };
  protoOf(LocalTime_0).get_minute_gnc10d_k$ = function () {
    return numberToInt(this.value_1.minute());
  };
  protoOf(LocalTime_0).get_second_jf7fjx_k$ = function () {
    return numberToInt(this.value_1.second());
  };
  protoOf(LocalTime_0).get_nanosecond_fws9td_k$ = function () {
    return numberToInt(this.value_1.nano());
  };
  protoOf(LocalTime_0).toSecondOfDay_a2clsa_k$ = function () {
    return numberToInt(this.value_1.toSecondOfDay());
  };
  protoOf(LocalTime_0).toMillisecondOfDay_936hwh_k$ = function () {
    return numberToInt(numberToDouble(this.value_1.toNanoOfDay()) / get_NANOS_PER_MILLI());
  };
  protoOf(LocalTime_0).toNanosecondOfDay_dywvsy_k$ = function () {
    return numberToLong(this.value_1.toNanoOfDay());
  };
  protoOf(LocalTime_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalTime_0) {
        tmp_0 = equals(this.value_1, other.value_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalTime_0).hashCode = function () {
    return numberToInt(this.value_1.hashCode());
  };
  protoOf(LocalTime_0).toString = function () {
    return this.value_1.toString();
  };
  protoOf(LocalTime_0).compareTo_2p2wpn_k$ = function (other) {
    return numberToInt(this.value_1.compareTo(other.value_1));
  };
  protoOf(LocalTime_0).compareTo_6thzaj_k$ = function (other) {
    return this.compareTo_2p2wpn_k$(other instanceof LocalTime_0 ? other : THROW_CCE());
  };
  var Month_JANUARY_instance;
  var Month_FEBRUARY_instance;
  var Month_MARCH_instance;
  var Month_APRIL_instance;
  var Month_MAY_instance;
  var Month_JUNE_instance;
  var Month_JULY_instance;
  var Month_AUGUST_instance;
  var Month_SEPTEMBER_instance;
  var Month_OCTOBER_instance;
  var Month_NOVEMBER_instance;
  var Month_DECEMBER_instance;
  function values_0() {
    return [Month_JANUARY_getInstance(), Month_FEBRUARY_getInstance(), Month_MARCH_getInstance(), Month_APRIL_getInstance(), Month_MAY_getInstance(), Month_JUNE_getInstance(), Month_JULY_getInstance(), Month_AUGUST_getInstance(), Month_SEPTEMBER_getInstance(), Month_OCTOBER_getInstance(), Month_NOVEMBER_getInstance(), Month_DECEMBER_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'JANUARY':
        return Month_JANUARY_getInstance();
      case 'FEBRUARY':
        return Month_FEBRUARY_getInstance();
      case 'MARCH':
        return Month_MARCH_getInstance();
      case 'APRIL':
        return Month_APRIL_getInstance();
      case 'MAY':
        return Month_MAY_getInstance();
      case 'JUNE':
        return Month_JUNE_getInstance();
      case 'JULY':
        return Month_JULY_getInstance();
      case 'AUGUST':
        return Month_AUGUST_getInstance();
      case 'SEPTEMBER':
        return Month_SEPTEMBER_getInstance();
      case 'OCTOBER':
        return Month_OCTOBER_getInstance();
      case 'NOVEMBER':
        return Month_NOVEMBER_getInstance();
      case 'DECEMBER':
        return Month_DECEMBER_getInstance();
      default:
        Month_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Month_entriesInitialized;
  function Month_initEntries() {
    if (Month_entriesInitialized)
      return Unit_getInstance();
    Month_entriesInitialized = true;
    Month_JANUARY_instance = new Month_0('JANUARY', 0);
    Month_FEBRUARY_instance = new Month_0('FEBRUARY', 1);
    Month_MARCH_instance = new Month_0('MARCH', 2);
    Month_APRIL_instance = new Month_0('APRIL', 3);
    Month_MAY_instance = new Month_0('MAY', 4);
    Month_JUNE_instance = new Month_0('JUNE', 5);
    Month_JULY_instance = new Month_0('JULY', 6);
    Month_AUGUST_instance = new Month_0('AUGUST', 7);
    Month_SEPTEMBER_instance = new Month_0('SEPTEMBER', 8);
    Month_OCTOBER_instance = new Month_0('OCTOBER', 9);
    Month_NOVEMBER_instance = new Month_0('NOVEMBER', 10);
    Month_DECEMBER_instance = new Month_0('DECEMBER', 11);
  }
  function Month_0(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toMonth(_this__u8e3s4) {
    return Month(numberToInt(_this__u8e3s4.value()));
  }
  function Month_JANUARY_getInstance() {
    Month_initEntries();
    return Month_JANUARY_instance;
  }
  function Month_FEBRUARY_getInstance() {
    Month_initEntries();
    return Month_FEBRUARY_instance;
  }
  function Month_MARCH_getInstance() {
    Month_initEntries();
    return Month_MARCH_instance;
  }
  function Month_APRIL_getInstance() {
    Month_initEntries();
    return Month_APRIL_instance;
  }
  function Month_MAY_getInstance() {
    Month_initEntries();
    return Month_MAY_instance;
  }
  function Month_JUNE_getInstance() {
    Month_initEntries();
    return Month_JUNE_instance;
  }
  function Month_JULY_getInstance() {
    Month_initEntries();
    return Month_JULY_instance;
  }
  function Month_AUGUST_getInstance() {
    Month_initEntries();
    return Month_AUGUST_instance;
  }
  function Month_SEPTEMBER_getInstance() {
    Month_initEntries();
    return Month_SEPTEMBER_instance;
  }
  function Month_OCTOBER_getInstance() {
    Month_initEntries();
    return Month_OCTOBER_instance;
  }
  function Month_NOVEMBER_getInstance() {
    Month_initEntries();
    return Month_NOVEMBER_instance;
  }
  function Month_DECEMBER_getInstance() {
    Month_initEntries();
    return Month_DECEMBER_instance;
  }
  function toLocalDateTime(_this__u8e3s4, timeZone) {
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_let = LocalDateTime.ofInstant(_this__u8e3s4.get_value_j01efc_k$(), timeZone.zoneId_1);
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = new LocalDateTime_0(tmp0_let);
      tmp = tmp$ret$0;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw DateTimeArithmeticException_init_$Create$_1(e);
        throw e;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function ofZone($this, zoneId) {
    var tmp;
    if (zoneId instanceof ZoneOffset) {
      tmp = FixedOffsetTimeZone_init_$Create$(new UtcOffset(zoneId));
    } else {
      if (zoneId.rules().isFixedOffset()) {
        var tmp_0 = zoneId.normalized();
        tmp = new FixedOffsetTimeZone(new UtcOffset(tmp_0 instanceof ZoneOffset ? tmp_0 : THROW_CCE()), zoneId);
      } else {
        tmp = new TimeZone(zoneId);
      }
    }
    return tmp;
  }
  function Companion_11() {
    Companion_instance_11 = this;
    this.UTC_1 = asTimeZone(new UtcOffset(ZoneOffset.UTC));
  }
  protoOf(Companion_11).currentSystemDefault_9rduv_k$ = function () {
    return ofZone(this, ZoneId.systemDefault());
  };
  protoOf(Companion_11).get_UTC_18jizp_k$ = function () {
    return this.UTC_1;
  };
  protoOf(Companion_11).of_yqlxgq_k$ = function (zoneId) {
    var tmp;
    try {
      tmp = ofZone(this, ZoneId.of(zoneId));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalTimeZoneException_init_$Create$_1(e);
        throw e;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_11).get_availableZoneIds_kceyfo_k$ = function () {
    return toSet(ZoneId.getAvailableZoneIds());
  };
  protoOf(Companion_11).serializer_9w0wvi_k$ = function () {
    return TimeZoneSerializer_getInstance();
  };
  var Companion_instance_11;
  function Companion_getInstance_14() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function TimeZone(zoneId) {
    Companion_getInstance_14();
    this.zoneId_1 = zoneId;
  }
  protoOf(TimeZone).get_zoneId_mw7isw_k$ = function () {
    return this.zoneId_1;
  };
  protoOf(TimeZone).get_id_kntnx8_k$ = function () {
    return this.zoneId_1.id();
  };
  protoOf(TimeZone).toLocalDateTime_5zkmq3_k$ = function (_this__u8e3s4) {
    return toLocalDateTime(_this__u8e3s4, this);
  };
  protoOf(TimeZone).toInstant_cougqz_k$ = function (_this__u8e3s4) {
    return toInstant(_this__u8e3s4, this);
  };
  protoOf(TimeZone).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof TimeZone) {
        tmp_0 = equals(this.zoneId_1, other.zoneId_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(TimeZone).hashCode = function () {
    return numberToInt(this.zoneId_1.hashCode());
  };
  protoOf(TimeZone).toString = function () {
    return this.zoneId_1.toString();
  };
  function FixedOffsetTimeZone_init_$Init$(offset, $this) {
    FixedOffsetTimeZone.call($this, offset, offset.get_zoneOffset_xw9ey0_k$());
    return $this;
  }
  function FixedOffsetTimeZone_init_$Create$(offset) {
    return FixedOffsetTimeZone_init_$Init$(offset, objectCreate(protoOf(FixedOffsetTimeZone)));
  }
  function Companion_12() {
    Companion_instance_12 = this;
  }
  protoOf(Companion_12).serializer_9w0wvi_k$ = function () {
    return FixedOffsetTimeZoneSerializer_getInstance();
  };
  var Companion_instance_12;
  function Companion_getInstance_15() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function FixedOffsetTimeZone(offset, zoneId) {
    Companion_getInstance_15();
    TimeZone.call(this, zoneId);
    this.offset_1 = offset;
  }
  protoOf(FixedOffsetTimeZone).get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  protoOf(FixedOffsetTimeZone).get_totalSeconds_oq5924_k$ = function () {
    return this.offset_1.get_totalSeconds_oq5924_k$();
  };
  function toInstant(_this__u8e3s4, timeZone) {
    var tmp$ret$0;
    // Inline function 'kotlin.let' call
    var tmp0_let = _this__u8e3s4.get_value_j01efc_k$().atZone(timeZone.zoneId_1).toInstant();
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = new Instant_0(tmp0_let);
    return tmp$ret$0;
  }
  function atStartOfDayIn(_this__u8e3s4, timeZone) {
    var tmp$ret$0;
    // Inline function 'kotlin.let' call
    var tmp0_let = _this__u8e3s4.get_value_j01efc_k$().atStartOfDay(timeZone.zoneId_1).toInstant();
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = new Instant_0(tmp0_let);
    return tmp$ret$0;
  }
  function offsetAt(_this__u8e3s4, instant) {
    var tmp$ret$0;
    // Inline function 'kotlin.let' call
    var tmp0_let = _this__u8e3s4.zoneId_1.rules().offsetOfInstant(instant.get_value_j01efc_k$());
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = new UtcOffset(tmp0_let);
    return tmp$ret$0;
  }
  function Companion_13() {
    Companion_instance_13 = this;
    this.ZERO_1 = new UtcOffset(ZoneOffset.UTC);
  }
  protoOf(Companion_13).get_ZERO_wodlgx_k$ = function () {
    return this.ZERO_1;
  };
  protoOf(Companion_13).parse_4mmrzm_k$ = function (offsetString) {
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_let = ZoneOffset.of(offsetString);
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = new UtcOffset(tmp0_let);
      tmp = tmp$ret$0;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw DateTimeFormatException_init_$Create$_1(e);
        throw e;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_13).serializer_9w0wvi_k$ = function () {
    return UtcOffsetSerializer_getInstance();
  };
  var Companion_instance_13;
  function Companion_getInstance_16() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function UtcOffset(zoneOffset) {
    Companion_getInstance_16();
    this.zoneOffset_1 = zoneOffset;
  }
  protoOf(UtcOffset).get_zoneOffset_xw9ey0_k$ = function () {
    return this.zoneOffset_1;
  };
  protoOf(UtcOffset).get_totalSeconds_oq5924_k$ = function () {
    return numberToInt(this.zoneOffset_1.totalSeconds());
  };
  protoOf(UtcOffset).hashCode = function () {
    return numberToInt(this.zoneOffset_1.hashCode());
  };
  protoOf(UtcOffset).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffset) {
      tmp = equals(this.zoneOffset_1, other.zoneOffset_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffset).toString = function () {
    return this.zoneOffset_1.toString();
  };
  function safeAdd(a, b) {
    var sum = a.plus_u6jwas_k$(b);
    if (a.xor_jjua9n_k$(sum).compareTo_n4fqi2_k$(new Long(0, 0)) < 0 ? a.xor_jjua9n_k$(b).compareTo_n4fqi2_k$(new Long(0, 0)) >= 0 : false) {
      throw ArithmeticException_init_$Create$('Addition overflows a long: ' + toString(a) + ' + ' + toString(b));
    }
    return sum;
  }
  function safeMultiply(a, b) {
    var tmp0_subject = b;
    if (tmp0_subject.equals(new Long(-1, -1))) {
      if (a.equals(Companion_getInstance_0().get_MIN_VALUE_7nmmor_k$())) {
        throw ArithmeticException_init_$Create$('Multiplication overflows a long: ' + toString(a) + ' * ' + toString(b));
      }
      return a.unaryMinus_6uz0qp_k$();
    } else if (tmp0_subject.equals(new Long(0, 0)))
      return new Long(0, 0);
    else if (tmp0_subject.equals(new Long(1, 0)))
      return a;
    var total = a.times_2zfqpc_k$(b);
    if (!total.div_9s1fi3_k$(b).equals(a)) {
      throw ArithmeticException_init_$Create$('Multiplication overflows a long: ' + toString(a) + ' * ' + toString(b));
    }
    return total;
  }
  function safeMultiply_0(a, b) {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.times' call
    var tmp0_times = toLong(a);
    tmp$ret$0 = tmp0_times.times_2zfqpc_k$(toLong(b));
    var result = tmp$ret$0;
    if (result.compareTo_n4fqi2_k$(toLong(IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$())) > 0 ? true : result.compareTo_n4fqi2_k$(toLong(IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$())) < 0)
      throw ArithmeticException_init_$Create$('Multiplication overflows Int range: ' + a + ' * ' + b + '.');
    return result.toInt_1tsl84_k$();
  }
  //region block: init
  DISTANT_PAST_SECONDS = new Long(-931914497, -750);
  DISTANT_FUTURE_SECONDS = new Long(1151527680, 720);
  NANOS_PER_MILLI = 1000000;
  MILLIS_PER_ONE = 1000;
  NANOS_PER_ONE = 1000000000;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DayOfWeek_FRIDAY_getInstance;
  _.$_$.b = DayOfWeek_MONDAY_getInstance;
  _.$_$.c = DayOfWeek_SATURDAY_getInstance;
  _.$_$.d = DayOfWeek_SUNDAY_getInstance;
  _.$_$.e = DayOfWeek_THURSDAY_getInstance;
  _.$_$.f = DayOfWeek_TUESDAY_getInstance;
  _.$_$.g = DayOfWeek_WEDNESDAY_getInstance;
  _.$_$.h = Month_FEBRUARY_getInstance;
  _.$_$.i = DatePeriod_init_$Create$;
  _.$_$.j = LocalDate_init_$Create$;
  _.$_$.k = LocalDateTime_init_$Create$_1;
  _.$_$.l = LocalDateTime_init_$Create$_0;
  _.$_$.m = LocalTime_init_$Create$;
  _.$_$.n = System_getInstance;
  _.$_$.o = Companion_getInstance_9;
  _.$_$.p = Companion_getInstance_10;
  _.$_$.q = Companion_getInstance_11;
  _.$_$.r = Companion_getInstance_14;
  _.$_$.s = FixedOffsetTimeZone;
  _.$_$.t = atStartOfDayIn;
  _.$_$.u = daysUntil;
  _.$_$.v = minus;
  _.$_$.w = offsetAt;
  _.$_$.x = plus;
  _.$_$.y = plus_0;
  _.$_$.z = plus_1;
  _.$_$.a1 = toInstant;
  _.$_$.b1 = toLocalDateTime;
  _.$_$.c1 = until;
  _.$_$.d1 = until_1;
  //endregion
  return _;
}));

//# sourceMappingURL=Kotlin-DateTime-library-kotlinx-datetime-js-ir.js.map
