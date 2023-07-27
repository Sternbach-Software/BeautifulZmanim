(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-io.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-io.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof this['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'ktor-ktor-utils'.");
    }
    root['ktor-ktor-utils'] = factory(typeof this['ktor-ktor-utils'] === 'undefined' ? {} : this['ktor-ktor-utils'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-io'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.mf;
  var THROW_CCE = kotlin_kotlin.$_$.sk;
  var Annotation = kotlin_kotlin.$_$.xj;
  var classMeta = kotlin_kotlin.$_$.zd;
  var VOID = kotlin_kotlin.$_$.jm;
  var setMetadataFor = kotlin_kotlin.$_$.nf;
  var charSequenceLength = kotlin_kotlin.$_$.xd;
  var Unit_getInstance = kotlin_kotlin.$_$.k6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getStringHashCode = kotlin_kotlin.$_$.le;
  var interfaceMeta = kotlin_kotlin.$_$.oe;
  var BytePacketBuilder = kotlin_io_ktor_ktor_io.$_$.q;
  var get_lastIndex = kotlin_kotlin.$_$.ni;
  var charSequenceGet = kotlin_kotlin.$_$.wd;
  var Char = kotlin_kotlin.$_$.ak;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.v3;
  var equals = kotlin_kotlin.$_$.de;
  var writeText = kotlin_io_ktor_ktor_io.$_$.c1;
  var readBytes = kotlin_io_ktor_ktor_io.$_$.w;
  var Long = kotlin_kotlin.$_$.kk;
  var readAvailable = kotlin_io_ktor_ktor_io.$_$.v;
  var toByte = kotlin_kotlin.$_$.of;
  var numberToChar = kotlin_kotlin.$_$.gf;
  var indexOf = kotlin_kotlin.$_$.fi;
  var CoroutineImpl = kotlin_kotlin.$_$.id;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.sc;
  var readBytes_0 = kotlin_io_ktor_ktor_io.$_$.x;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.b1;
  var isObject = kotlin_kotlin.$_$.ze;
  var hashCode = kotlin_kotlin.$_$.me;
  var MutableMap = kotlin_kotlin.$_$.l7;
  var ensureNotNull = kotlin_kotlin.$_$.kl;
  var Entry = kotlin_kotlin.$_$.e7;
  var isInterface = kotlin_kotlin.$_$.xe;
  var MutableEntry = kotlin_kotlin.$_$.k7;
  var charArray = kotlin_kotlin.$_$.vd;
  var toString = kotlin_kotlin.$_$.d4;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e2;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.wc;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var get = kotlin_kotlin.$_$.dd;
  var fold = kotlin_kotlin.$_$.cd;
  var minusKey = kotlin_kotlin.$_$.ed;
  var plus = kotlin_kotlin.$_$.hd;
  var CoroutineExceptionHandler = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var MutableIterator = kotlin_kotlin.$_$.h7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.b8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.q;
  var Set = kotlin_kotlin.$_$.o7;
  var toString_0 = kotlin_kotlin.$_$.rf;
  var MutableSet = kotlin_kotlin.$_$.m7;
  var THROW_ISE = kotlin_kotlin.$_$.tk;
  var Enum = kotlin_kotlin.$_$.ek;
  var objectMeta = kotlin_kotlin.$_$.lf;
  var firstOrNull = kotlin_kotlin.$_$.l9;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.a1;
  var Map = kotlin_kotlin.$_$.f7;
  var toSet = kotlin_kotlin.$_$.ic;
  var emptySet = kotlin_kotlin.$_$.e9;
  var emptyMap = kotlin_kotlin.$_$.d9;
  var to = kotlin_kotlin.$_$.gm;
  var addAll = kotlin_kotlin.$_$.q7;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.n1;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.a4;
  var equals_0 = kotlin_kotlin.$_$.ai;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var Comparable = kotlin_kotlin.$_$.ck;
  var isSuspendFunction = kotlin_kotlin.$_$.bf;
  var MutableList = kotlin_kotlin.$_$.j7;
  var objectCreate = kotlin_kotlin.$_$.kf;
  var ArrayList = kotlin_kotlin.$_$.t6;
  var emptyList = kotlin_kotlin.$_$.c9;
  var get_lastIndex_0 = kotlin_kotlin.$_$.fa;
  var last = kotlin_kotlin.$_$.la;
  var mutableListOf = kotlin_kotlin.$_$.ta;
  var List = kotlin_kotlin.$_$.d7;
  var toMutableList = kotlin_kotlin.$_$.fc;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w1;
  var extendThrowable = kotlin_kotlin.$_$.ee;
  var captureStack = kotlin_kotlin.$_$.td;
  var recoverStackTrace = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var getKClass = kotlin_kotlin.$_$.e;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.r5;
  var Continuation = kotlin_kotlin.$_$.bd;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.w5;
  var Companion_getInstance = kotlin_kotlin.$_$.f6;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.e4;
  var createFailure = kotlin_kotlin.$_$.jl;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.f4;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.g4;
  var fillArrayVal = kotlin_kotlin.$_$.fe;
  var intercepted = kotlin_kotlin.$_$.vc;
  var toList = kotlin_kotlin.$_$.ac;
  var KProperty0 = kotlin_kotlin.$_$.bh;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ke;
  var lazy = kotlin_kotlin.$_$.sl;
  var isNaN_0 = kotlin_kotlin.$_$.ql;
  var numberToLong = kotlin_kotlin.$_$.jf;
  var IllegalStateException = kotlin_kotlin.$_$.ik;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.n2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(InternalAPI, 'InternalAPI', classMeta, VOID, [Annotation]);
  setMetadataFor(KtorDsl, 'KtorDsl', classMeta, VOID, [Annotation]);
  setMetadataFor(AttributeKey, 'AttributeKey', classMeta);
  function get_0(key) {
    var tmp0_elvis_lhs = this.getOrNull_gb0h81_k$(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('No instance for key ' + key);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function take(key) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.get_ny5huj_k$(key);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.Attributes.take.<anonymous>' call
    this.remove_5z2j18_k$(key);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function takeOrNull(key) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.getOrNull_gb0h81_k$(key);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.Attributes.takeOrNull.<anonymous>' call
    this.remove_5z2j18_k$(key);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  setMetadataFor(Attributes, 'Attributes', interfaceMeta);
  setMetadataFor($toByteArrayCOROUTINE$0, '$toByteArrayCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(CaseInsensitiveMap, 'CaseInsensitiveMap', classMeta, VOID, [MutableMap]);
  setMetadataFor(Entry_0, 'Entry', classMeta, VOID, [MutableEntry]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, CoroutineExceptionHandler]);
  setMetadataFor(DelegatingMutableSet$iterator$1, VOID, classMeta, VOID, [MutableIterator]);
  setMetadataFor(DelegatingMutableSet, 'DelegatingMutableSet', classMeta, VOID, [MutableSet]);
  setMetadataFor(Platform, 'Platform', classMeta, Enum);
  setMetadataFor(PlatformUtils, 'PlatformUtils', objectMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  function get_1(name) {
    var tmp0_safe_receiver = this.getAll_9rlpue_k$(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  }
  function contains(name) {
    return !(this.getAll_9rlpue_k$(name) == null);
  }
  function contains_0(name, value) {
    var tmp0_safe_receiver = this.getAll_9rlpue_k$(name);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.contains_2ehdt1_k$(value);
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function forEach(body) {
    var tmp0_forEach = this.entries_qbkxv4_k$();
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.StringValues.forEach.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$0 = element.get_key_18j28a_k$();
      var k = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$1 = element.get_value_j01efc_k$();
      var v = tmp$ret$1;
      body(k, v);
    }
    return Unit_getInstance();
  }
  setMetadataFor(StringValues, 'StringValues', interfaceMeta);
  setMetadataFor(StringValuesBuilder, 'StringValuesBuilder', interfaceMeta);
  setMetadataFor(StringValuesBuilderImpl, 'StringValuesBuilderImpl', classMeta, VOID, [StringValuesBuilder]);
  setMetadataFor(StringValuesImpl, 'StringValuesImpl', classMeta, VOID, [StringValues]);
  setMetadataFor(CaseInsensitiveString, 'CaseInsensitiveString', classMeta);
  setMetadataFor(CopyOnWriteHashMap, 'CopyOnWriteHashMap', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(GMTDate, 'GMTDate', classMeta, VOID, [Comparable]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(WeekDay, 'WeekDay', classMeta, Enum);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Month, 'Month', classMeta, Enum);
  setMetadataFor(Symbol, 'Symbol', classMeta);
  setMetadataFor($proceedLoopCOROUTINE$1, '$proceedLoopCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(PipelineContext, 'PipelineContext', classMeta, VOID, [CoroutineScope], VOID, VOID, [1, 0]);
  setMetadataFor(DebugPipelineContext, 'DebugPipelineContext', classMeta, PipelineContext, VOID, VOID, VOID, [1, 0]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(PhaseContent, 'PhaseContent', classMeta);
  setMetadataFor(Pipeline, 'Pipeline', classMeta, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(PipelinePhase, 'PipelinePhase', classMeta);
  setMetadataFor(InvalidPhaseException, 'InvalidPhaseException', classMeta, Error);
  setMetadataFor(PipelinePhaseRelation, 'PipelinePhaseRelation', classMeta);
  setMetadataFor(After, 'After', classMeta, PipelinePhaseRelation);
  setMetadataFor(Before, 'Before', classMeta, PipelinePhaseRelation);
  setMetadataFor(Last, 'Last', objectMeta, PipelinePhaseRelation);
  setMetadataFor(StackWalkingFailed, 'StackWalkingFailed', objectMeta);
  setMetadataFor(CoroutineStackFrame, 'CoroutineStackFrame', interfaceMeta);
  setMetadataFor(StackWalkingFailedFrame, 'StackWalkingFailedFrame', objectMeta, VOID, [CoroutineStackFrame, Continuation]);
  setMetadataFor(SuspendFunctionGun$continuation$1, VOID, classMeta, VOID, [Continuation, CoroutineStackFrame]);
  setMetadataFor(SuspendFunctionGun, 'SuspendFunctionGun', classMeta, PipelineContext, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(TypeInfo, 'TypeInfo', classMeta);
  setMetadataFor(AttributesJs, 'AttributesJs', classMeta, VOID, [Attributes]);
  setMetadataFor(InvalidTimestampException, 'InvalidTimestampException', classMeta, IllegalStateException);
  setMetadataFor(Logger, 'Logger', interfaceMeta);
  setMetadataFor(KtorSimpleLogger$1, VOID, classMeta, VOID, [Logger]);
  setMetadataFor(Type, 'Type', interfaceMeta);
  setMetadataFor(JsType, 'JsType', objectMeta, VOID, [Type]);
  //endregion
  function InternalAPI() {
  }
  protoOf(InternalAPI).equals = function (other) {
    if (!(other instanceof InternalAPI))
      return false;
    var tmp0_other_with_cast = other instanceof InternalAPI ? other : THROW_CCE();
    return true;
  };
  protoOf(InternalAPI).hashCode = function () {
    return 0;
  };
  protoOf(InternalAPI).toString = function () {
    return '@io.ktor.util.InternalAPI()';
  };
  function KtorDsl() {
  }
  protoOf(KtorDsl).equals = function (other) {
    if (!(other instanceof KtorDsl))
      return false;
    var tmp0_other_with_cast = other instanceof KtorDsl ? other : THROW_CCE();
    return true;
  };
  protoOf(KtorDsl).hashCode = function () {
    return 0;
  };
  protoOf(KtorDsl).toString = function () {
    return '@io.ktor.util.KtorDsl()';
  };
  function AttributeKey(name) {
    this.name_1 = name;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    var tmp0_isEmpty = this.name_1;
    tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
    if (tmp$ret$0) {
      throw IllegalStateException_init_$Create$("Name can't be blank");
    }
  }
  protoOf(AttributeKey).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(AttributeKey).toString = function () {
    return 'AttributeKey: ' + this.name_1;
  };
  protoOf(AttributeKey).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof AttributeKey)
      other;
    else
      THROW_CCE();
    if (!(this.name_1 === other.name_1))
      return false;
    return true;
  };
  protoOf(AttributeKey).hashCode = function () {
    return getStringHashCode(this.name_1);
  };
  function Attributes() {
  }
  function putAll(_this__u8e3s4, other) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = other.get_allKeys_dton90_k$();
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.putAll.<anonymous>' call
      _this__u8e3s4.put_btom12_k$(element instanceof AttributeKey ? element : THROW_CCE(), other.get_ny5huj_k$(element));
    }
  }
  function get_BASE64_INVERSE_ALPHABET() {
    _init_properties_Base64_kt__ymmsz3();
    return BASE64_INVERSE_ALPHABET;
  }
  var BASE64_INVERSE_ALPHABET;
  function get_BASE64_ALPHABET() {
    return BASE64_ALPHABET;
  }
  var BASE64_ALPHABET;
  function decodeBase64Bytes(_this__u8e3s4) {
    _init_properties_Base64_kt__ymmsz3();
    var tmp$ret$4;
    $l$block_0: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = new BytePacketBuilder();
      try {
        // Inline function 'io.ktor.util.decodeBase64Bytes.<anonymous>' call
        var tmp$ret$3;
        $l$block: {
          // Inline function 'kotlin.text.dropLastWhile' call
          var inductionVariable = get_lastIndex(_this__u8e3s4);
          if (0 <= inductionVariable)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var tmp$ret$0;
              // Inline function 'io.ktor.util.decodeBase64Bytes.<anonymous>.<anonymous>' call
              var tmp1__anonymous__uwfjfc = charSequenceGet(_this__u8e3s4, index);
              tmp$ret$0 = equals(new Char(tmp1__anonymous__uwfjfc), new Char(_Char___init__impl__6a9atx(61)));
              if (!tmp$ret$0) {
                var tmp$ret$2;
                // Inline function 'kotlin.text.substring' call
                var tmp0_substring = index + 1 | 0;
                var tmp$ret$1;
                // Inline function 'kotlin.js.asDynamic' call
                tmp$ret$1 = _this__u8e3s4;
                tmp$ret$2 = tmp$ret$1.substring(0, tmp0_substring);
                tmp$ret$3 = tmp$ret$2;
                break $l$block;
              }
            }
             while (0 <= inductionVariable);
          tmp$ret$3 = '';
        }
        writeText(builder, tmp$ret$3);
        tmp$ret$4 = builder.build_1k0s4u_k$();
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof Error) {
          var t = $p;
          builder.release_wtm6d2_k$();
          throw t;
        } else {
          throw $p;
        }
      }
    }
    return readBytes(decodeBase64Bytes_0(tmp$ret$4));
  }
  function decodeBase64Bytes_0(_this__u8e3s4) {
    _init_properties_Base64_kt__ymmsz3();
    var tmp$ret$4;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = new BytePacketBuilder();
      try {
        // Inline function 'io.ktor.util.decodeBase64Bytes.<anonymous>' call
        var data = new Int8Array(4);
        while (_this__u8e3s4.get_remaining_mwegr1_k$().compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
          var read = readAvailable(_this__u8e3s4, data);
          var tmp$ret$3;
          // Inline function 'kotlin.collections.foldIndexed' call
          var index = 0;
          var accumulator = 0;
          var indexedObject = data;
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var element = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$2;
            // Inline function 'io.ktor.util.decodeBase64Bytes.<anonymous>.<anonymous>' call
            var tmp1 = index;
            index = tmp1 + 1 | 0;
            var tmp0__anonymous__q1qw7t = tmp1;
            var tmp1__anonymous__uwfjfc = accumulator;
            var tmp$ret$1;
            // Inline function 'io.ktor.util.fromBase64' call
            var tmp$ret$0;
            // Inline function 'kotlin.experimental.and' call
            var tmp0_and = toByte(_get_BASE64_INVERSE_ALPHABET_$accessor$1rlrljx_ynhlmj()[element & 255]);
            var tmp1_and = _get_BASE64_MASK_$accessor$1rlrljx_e67tnp();
            tmp$ret$0 = toByte(tmp0_and & tmp1_and);
            tmp$ret$1 = tmp$ret$0;
            tmp$ret$2 = tmp1__anonymous__uwfjfc | tmp$ret$1 << imul(3 - tmp0__anonymous__q1qw7t | 0, 6);
            accumulator = tmp$ret$2;
          }
          tmp$ret$3 = accumulator;
          var chunk = tmp$ret$3;
          var inductionVariable_0 = data.length - 2 | 0;
          var last_0 = data.length - read | 0;
          if (last_0 <= inductionVariable_0)
            do {
              var index_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var origin = chunk >> imul(8, index_0) & 255;
              builder.writeByte_jvpujw_k$(toByte(origin));
            }
             while (!(index_0 === last_0));
        }
        tmp$ret$4 = builder.build_1k0s4u_k$();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          var t = $p;
          builder.release_wtm6d2_k$();
          throw t;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$4;
  }
  function get_BASE64_PAD() {
    return BASE64_PAD;
  }
  var BASE64_PAD;
  function fromBase64(_this__u8e3s4) {
    _init_properties_Base64_kt__ymmsz3();
    var tmp$ret$0;
    // Inline function 'kotlin.experimental.and' call
    var tmp0_and = toByte(_get_BASE64_INVERSE_ALPHABET_$accessor$1rlrljx_ynhlmj()[_this__u8e3s4 & 255]);
    var tmp1_and = _get_BASE64_MASK_$accessor$1rlrljx_e67tnp();
    tmp$ret$0 = toByte(tmp0_and & tmp1_and);
    return tmp$ret$0;
  }
  function get_BASE64_MASK() {
    return BASE64_MASK;
  }
  var BASE64_MASK;
  function _get_BASE64_INVERSE_ALPHABET_$accessor$1rlrljx_ynhlmj() {
    _init_properties_Base64_kt__ymmsz3();
    return get_BASE64_INVERSE_ALPHABET();
  }
  function _get_BASE64_MASK_$accessor$1rlrljx_e67tnp() {
    _init_properties_Base64_kt__ymmsz3();
    return 63;
  }
  var properties_initialized_Base64_kt_5g824v;
  function _init_properties_Base64_kt__ymmsz3() {
    if (properties_initialized_Base64_kt_5g824v) {
    } else {
      properties_initialized_Base64_kt_5g824v = true;
      var tmp = 0;
      var tmp_0 = 256;
      var tmp_1 = new Int32Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var tmp$ret$0;
        // Inline function 'io.ktor.util.BASE64_INVERSE_ALPHABET.<anonymous>' call
        tmp$ret$0 = indexOf('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', numberToChar(tmp_2));
        tmp_1[tmp_2] = tmp$ret$0;
        tmp = tmp + 1 | 0;
      }
      BASE64_INVERSE_ALPHABET = tmp_1;
    }
  }
  function toByteArray(_this__u8e3s4, $completion) {
    var tmp = new $toByteArrayCOROUTINE$0(_this__u8e3s4, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $toByteArrayCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($toByteArrayCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.readRemaining$default_pw759u_k$(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return readBytes_0(ARGUMENT);
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function _get_delegate__idh0py($this) {
    return $this.delegate_1;
  }
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj($this$$receiver) {
    return $this$$receiver.get_content_h02jrk_k$();
  }
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0($this$$receiver) {
    return caseInsensitive($this$$receiver);
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19($this$$receiver) {
    return new Entry_0($this$$receiver.get_key_18j28a_k$().get_content_h02jrk_k$(), $this$$receiver.get_value_j01efc_k$());
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19_0($this$$receiver) {
    return new Entry_0(caseInsensitive($this$$receiver.get_key_18j28a_k$()), $this$$receiver.get_value_j01efc_k$());
  }
  function CaseInsensitiveMap() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.delegate_1 = tmp$ret$0;
  }
  protoOf(CaseInsensitiveMap).get_size_woubt6_k$ = function () {
    return this.delegate_1.get_size_woubt6_k$();
  };
  protoOf(CaseInsensitiveMap).containsKey_mw51tt_k$ = function (key) {
    return this.delegate_1.containsKey_wgk31w_k$(new CaseInsensitiveString(key));
  };
  protoOf(CaseInsensitiveMap).containsKey_wgk31w_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.containsKey_mw51tt_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).containsValue_s86b1g_k$ = function (value) {
    return this.delegate_1.containsValue_5viga1_k$(value);
  };
  protoOf(CaseInsensitiveMap).containsValue_5viga1_k$ = function (value) {
    if (!isObject(value))
      return false;
    return this.containsValue_s86b1g_k$(isObject(value) ? value : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).get_4u8u51_k$ = function (key) {
    return this.delegate_1.get_1mhr4y_k$(caseInsensitive(key));
  };
  protoOf(CaseInsensitiveMap).get_1mhr4y_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.get_4u8u51_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).isEmpty_y1axqb_k$ = function () {
    return this.delegate_1.isEmpty_y1axqb_k$();
  };
  protoOf(CaseInsensitiveMap).clear_j9y8zo_k$ = function () {
    this.delegate_1.clear_j9y8zo_k$();
  };
  protoOf(CaseInsensitiveMap).put_syw8rk_k$ = function (key, value) {
    return this.delegate_1.put_3mhbri_k$(caseInsensitive(key), value);
  };
  protoOf(CaseInsensitiveMap).put_3mhbri_k$ = function (key, value) {
    var tmp = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
    return this.put_syw8rk_k$(tmp, isObject(value) ? value : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).putAll_mxv3jf_k$ = function (from) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = from.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.CaseInsensitiveMap.putAll.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.get_key_18j28a_k$();
      var key = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.get_value_j01efc_k$();
      var value = tmp$ret$2;
      this.put_syw8rk_k$(key, value);
    }
  };
  protoOf(CaseInsensitiveMap).putAll_mee1c3_k$ = function (from) {
    return this.putAll_mxv3jf_k$(from);
  };
  protoOf(CaseInsensitiveMap).remove_kj1003_k$ = function (key) {
    return this.delegate_1.remove_8hbkc0_k$(caseInsensitive(key));
  };
  protoOf(CaseInsensitiveMap).remove_8hbkc0_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.remove_kj1003_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).get_keys_wop4xp_k$ = function () {
    var tmp = this.delegate_1.get_keys_wop4xp_k$();
    var tmp_0 = CaseInsensitiveMap$_get_keys_$lambda_ptzlqj;
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0);
  };
  protoOf(CaseInsensitiveMap).get_entries_p20ztl_k$ = function () {
    var tmp = this.delegate_1.get_entries_p20ztl_k$();
    var tmp_0 = CaseInsensitiveMap$_get_entries_$lambda_r32w19;
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_entries_$lambda_r32w19_0);
  };
  protoOf(CaseInsensitiveMap).get_values_ksazhn_k$ = function () {
    return this.delegate_1.get_values_ksazhn_k$();
  };
  protoOf(CaseInsensitiveMap).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof CaseInsensitiveMap);
    }
    if (tmp)
      return false;
    return equals(other.delegate_1, this.delegate_1);
  };
  protoOf(CaseInsensitiveMap).hashCode = function () {
    return hashCode(this.delegate_1);
  };
  function Entry_0(key, value) {
    this.key_1 = key;
    this.value_1 = value;
  }
  protoOf(Entry_0).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(Entry_0).set_value_1aw66t_k$ = function (_set____db54di) {
    this.value_1 = _set____db54di;
  };
  protoOf(Entry_0).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Entry_0).setValue_csn29t_k$ = function (newValue) {
    this.value_1 = newValue;
    return this.value_1;
  };
  protoOf(Entry_0).setValue_i0ryyi_k$ = function (newValue) {
    return this.setValue_csn29t_k$((newValue == null ? true : isObject(newValue)) ? newValue : THROW_CCE());
  };
  protoOf(Entry_0).hashCode = function () {
    return (527 + hashCode(ensureNotNull(this.key_1)) | 0) + hashCode(ensureNotNull(this.value_1)) | 0;
  };
  protoOf(Entry_0).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(!(other == null) ? isInterface(other, Entry) : false);
    }
    if (tmp)
      return false;
    return equals(other.get_key_18j28a_k$(), this.key_1) ? equals(other.get_value_j01efc_k$(), this.value_1) : false;
  };
  protoOf(Entry_0).toString = function () {
    return '' + this.key_1 + '=' + this.value_1;
  };
  function toCharArray(_this__u8e3s4) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.length;
    var tmp_1 = charArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$0;
      // Inline function 'io.ktor.util.toCharArray.<anonymous>' call
      tmp$ret$0 = charSequenceGet(_this__u8e3s4, tmp_2);
      tmp_1[tmp_2] = tmp$ret$0;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function isLowerCase(_this__u8e3s4) {
    var tmp$ret$3;
    // Inline function 'kotlin.text.lowercaseChar' call
    var tmp$ret$2;
    // Inline function 'kotlin.text.lowercase' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = toString(_this__u8e3s4);
    tmp$ret$0 = tmp0_asDynamic;
    var tmp1_unsafeCast = tmp$ret$0.toLowerCase();
    tmp$ret$1 = tmp1_unsafeCast;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = charSequenceGet(tmp$ret$2, 0);
    return equals(new Char(tmp$ret$3), new Char(_this__u8e3s4));
  }
  function caseInsensitiveMap() {
    return new CaseInsensitiveMap();
  }
  function SilentSupervisor(parent) {
    parent = parent === VOID ? null : parent;
    var tmp = SupervisorJob(parent);
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    tmp$ret$0 = new _no_name_provided__qut3iv();
    return tmp.plus_rgw9wi_k$(tmp$ret$0);
  }
  function _no_name_provided__qut3iv() {
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  protoOf(_no_name_provided__qut3iv).handleException_w1h9is_k$ = function (context, exception) {
    var tmp$ret$0;
    // Inline function 'io.ktor.util.SilentSupervisor.<anonymous>' call
    tmp$ret$0 = Unit_getInstance();
    return tmp$ret$0;
  };
  function get_digits() {
    _init_properties_Crypto_kt__txayzl();
    return digits;
  }
  var digits;
  var properties_initialized_Crypto_kt_8g5vqb;
  function _init_properties_Crypto_kt__txayzl() {
    if (properties_initialized_Crypto_kt_8g5vqb) {
    } else {
      properties_initialized_Crypto_kt_8g5vqb = true;
      digits = toCharArray('0123456789abcdef');
    }
  }
  function _get_delegate__idh0py_0($this) {
    return $this.delegate_1;
  }
  function _get_convertTo__c5vn9f($this) {
    return $this.convertTo_1;
  }
  function _get_convert__pt3sfy($this) {
    return $this.convert_1;
  }
  function DelegatingMutableSet$iterator$1(this$0) {
    this.this$0__1 = this$0;
    this.delegateIterator_1 = this$0.delegate_1.iterator_jk1svi_k$();
  }
  protoOf(DelegatingMutableSet$iterator$1).get_delegateIterator_k9fnq4_k$ = function () {
    return this.delegateIterator_1;
  };
  protoOf(DelegatingMutableSet$iterator$1).hasNext_bitz1p_k$ = function () {
    return this.delegateIterator_1.hasNext_bitz1p_k$();
  };
  protoOf(DelegatingMutableSet$iterator$1).next_20eer_k$ = function () {
    return this.this$0__1.convertTo_1(this.delegateIterator_1.next_20eer_k$());
  };
  protoOf(DelegatingMutableSet$iterator$1).remove_le47v1_k$ = function () {
    return this.delegateIterator_1.remove_le47v1_k$();
  };
  function DelegatingMutableSet(delegate, convertTo, convert) {
    this.delegate_1 = delegate;
    this.convertTo_1 = convertTo;
    this.convert_1 = convert;
    this.size_1 = this.delegate_1.get_size_woubt6_k$();
  }
  protoOf(DelegatingMutableSet).convert_gqasvn_k$ = function (_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'io.ktor.util.DelegatingMutableSet.convert.<anonymous>' call
      tmp$ret$0 = this.convert_1(item);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(DelegatingMutableSet).convertTo_s3jdax_k$ = function (_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'io.ktor.util.DelegatingMutableSet.convertTo.<anonymous>' call
      tmp$ret$0 = this.convertTo_1(item);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(DelegatingMutableSet).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(DelegatingMutableSet).add_nixf5z_k$ = function (element) {
    return this.delegate_1.add_1j60pz_k$(this.convert_1(element));
  };
  protoOf(DelegatingMutableSet).add_1j60pz_k$ = function (element) {
    return this.add_nixf5z_k$((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(DelegatingMutableSet).addAll_84cfjo_k$ = function (elements) {
    return this.delegate_1.addAll_oxxjjk_k$(this.convert_gqasvn_k$(elements));
  };
  protoOf(DelegatingMutableSet).addAll_oxxjjk_k$ = function (elements) {
    return this.addAll_84cfjo_k$(elements);
  };
  protoOf(DelegatingMutableSet).clear_j9y8zo_k$ = function () {
    this.delegate_1.clear_j9y8zo_k$();
  };
  protoOf(DelegatingMutableSet).remove_l7hpva_k$ = function (element) {
    return this.delegate_1.remove_8hbkc6_k$(this.convert_1(element));
  };
  protoOf(DelegatingMutableSet).remove_8hbkc6_k$ = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.remove_l7hpva_k$((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(DelegatingMutableSet).removeAll_3c3xhl_k$ = function (elements) {
    return this.delegate_1.removeAll_99to5v_k$(this.convert_gqasvn_k$(elements));
  };
  protoOf(DelegatingMutableSet).removeAll_99to5v_k$ = function (elements) {
    return this.removeAll_3c3xhl_k$(elements);
  };
  protoOf(DelegatingMutableSet).retainAll_ob8bqg_k$ = function (elements) {
    return this.delegate_1.retainAll_j44sd0_k$(this.convert_gqasvn_k$(elements));
  };
  protoOf(DelegatingMutableSet).retainAll_j44sd0_k$ = function (elements) {
    return this.retainAll_ob8bqg_k$(elements);
  };
  protoOf(DelegatingMutableSet).contains_3fuugr_k$ = function (element) {
    return this.delegate_1.contains_2ehdt1_k$(this.convert_1(element));
  };
  protoOf(DelegatingMutableSet).contains_2ehdt1_k$ = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.contains_3fuugr_k$((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(DelegatingMutableSet).containsAll_qy1q42_k$ = function (elements) {
    return this.delegate_1.containsAll_jr3fla_k$(this.convert_gqasvn_k$(elements));
  };
  protoOf(DelegatingMutableSet).containsAll_jr3fla_k$ = function (elements) {
    return this.containsAll_qy1q42_k$(elements);
  };
  protoOf(DelegatingMutableSet).isEmpty_y1axqb_k$ = function () {
    return this.delegate_1.isEmpty_y1axqb_k$();
  };
  protoOf(DelegatingMutableSet).iterator_jk1svi_k$ = function () {
    return new DelegatingMutableSet$iterator$1(this);
  };
  protoOf(DelegatingMutableSet).hashCode = function () {
    return hashCode(this.delegate_1);
  };
  protoOf(DelegatingMutableSet).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(!(other == null) ? isInterface(other, Set) : false);
    }
    if (tmp)
      return false;
    var elements = this.convertTo_s3jdax_k$(this.delegate_1);
    var tmp_0;
    if (other.containsAll_jr3fla_k$(elements)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.containsAll' call
      var tmp0_containsAll = other;
      tmp$ret$0 = elements.containsAll_jr3fla_k$(tmp0_containsAll);
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  protoOf(DelegatingMutableSet).toString = function () {
    return toString_0(this.convertTo_s3jdax_k$(this.delegate_1));
  };
  var Platform_Jvm_instance;
  var Platform_Native_instance;
  var Platform_Browser_instance;
  var Platform_Node_instance;
  function values() {
    return [Platform_Jvm_getInstance(), Platform_Native_getInstance(), Platform_Browser_getInstance(), Platform_Node_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Jvm':
        return Platform_Jvm_getInstance();
      case 'Native':
        return Platform_Native_getInstance();
      case 'Browser':
        return Platform_Browser_getInstance();
      case 'Node':
        return Platform_Node_getInstance();
      default:
        Platform_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Platform_entriesInitialized;
  function Platform_initEntries() {
    if (Platform_entriesInitialized)
      return Unit_getInstance();
    Platform_entriesInitialized = true;
    Platform_Jvm_instance = new Platform('Jvm', 0);
    Platform_Native_instance = new Platform('Native', 1);
    Platform_Browser_instance = new Platform('Browser', 2);
    Platform_Node_instance = new Platform('Node', 3);
  }
  function Platform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PlatformUtils() {
    PlatformUtils_instance = this;
    this.IS_BROWSER_1 = get_platform(this).equals(Platform_Browser_getInstance());
    this.IS_NODE_1 = get_platform(this).equals(Platform_Node_getInstance());
    this.IS_JVM_1 = get_platform(this).equals(Platform_Jvm_getInstance());
    this.IS_NATIVE_1 = get_platform(this).equals(Platform_Native_getInstance());
    this.IS_DEVELOPMENT_MODE_1 = get_isDevelopmentMode(this);
    this.IS_NEW_MM_ENABLED_1 = get_isNewMemoryModel(this);
  }
  protoOf(PlatformUtils).get_IS_BROWSER_e36mbg_k$ = function () {
    return this.IS_BROWSER_1;
  };
  protoOf(PlatformUtils).get_IS_NODE_myvmya_k$ = function () {
    return this.IS_NODE_1;
  };
  protoOf(PlatformUtils).get_IS_JVM_qobnv_k$ = function () {
    return this.IS_JVM_1;
  };
  protoOf(PlatformUtils).get_IS_NATIVE_hc2lur_k$ = function () {
    return this.IS_NATIVE_1;
  };
  protoOf(PlatformUtils).get_IS_DEVELOPMENT_MODE_4qw7yr_k$ = function () {
    return this.IS_DEVELOPMENT_MODE_1;
  };
  protoOf(PlatformUtils).get_IS_NEW_MM_ENABLED_wrrkbx_k$ = function () {
    return this.IS_NEW_MM_ENABLED_1;
  };
  var PlatformUtils_instance;
  function PlatformUtils_getInstance() {
    if (PlatformUtils_instance == null)
      new PlatformUtils();
    return PlatformUtils_instance;
  }
  function Platform_Jvm_getInstance() {
    Platform_initEntries();
    return Platform_Jvm_instance;
  }
  function Platform_Native_getInstance() {
    Platform_initEntries();
    return Platform_Native_instance;
  }
  function Platform_Browser_getInstance() {
    Platform_initEntries();
    return Platform_Browser_instance;
  }
  function Platform_Node_getInstance() {
    Platform_initEntries();
    return Platform_Node_instance;
  }
  function Companion() {
    Companion_instance = this;
    this.Empty_1 = new StringValuesImpl();
  }
  protoOf(Companion).get_Empty_i9b85g_k$ = function () {
    return this.Empty_1;
  };
  protoOf(Companion).build_3ifsva_k$ = function (caseInsensitiveName, builder) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new StringValuesBuilderImpl(caseInsensitiveName);
    // Inline function 'kotlin.contracts.contract' call
    builder(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.build_1k0s4u_k$();
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function StringValues() {
  }
  function ensureListForKey($this, name) {
    var tmp0_elvis_lhs = $this.values_1.get_1mhr4y_k$(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$_0();
      var tmp0_also = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.ensureListForKey.<anonymous>' call
      $this.validateName_73vxr_k$(name);
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = $this.values_1;
      tmp0_set.put_3mhbri_k$(name, tmp0_also);
      tmp$ret$1 = tmp0_also;
      tmp = tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function StringValuesBuilderImpl$appendAll$lambda(this$0) {
    return function (name, values) {
      this$0.appendAll_a9dln0_k$(name, values);
      return Unit_getInstance();
    };
  }
  function StringValuesBuilderImpl$appendMissing$lambda(this$0) {
    return function (name, values) {
      this$0.appendMissing_4iwztl_k$(name, values);
      return Unit_getInstance();
    };
  }
  function StringValuesBuilderImpl(caseInsensitiveName, size) {
    caseInsensitiveName = caseInsensitiveName === VOID ? false : caseInsensitiveName;
    size = size === VOID ? 8 : size;
    this.caseInsensitiveName_1 = caseInsensitiveName;
    this.values_1 = this.caseInsensitiveName_1 ? caseInsensitiveMap() : LinkedHashMap_init_$Create$_0(size);
  }
  protoOf(StringValuesBuilderImpl).get_caseInsensitiveName_ehooe5_k$ = function () {
    return this.caseInsensitiveName_1;
  };
  protoOf(StringValuesBuilderImpl).get_values_ksazhn_k$ = function () {
    return this.values_1;
  };
  protoOf(StringValuesBuilderImpl).getAll_9rlpue_k$ = function (name) {
    return this.values_1.get_1mhr4y_k$(name);
  };
  protoOf(StringValuesBuilderImpl).contains_2gwgo2_k$ = function (name) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.contains' call
    var tmp0_contains = this.values_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.containsKey' call
    tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).containsKey_wgk31w_k$(name);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(StringValuesBuilderImpl).contains_t8xfkz_k$ = function (name, value) {
    var tmp0_safe_receiver = this.values_1.get_1mhr4y_k$(name);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.contains_2ehdt1_k$(value);
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(StringValuesBuilderImpl).names_1q9mbs_k$ = function () {
    return this.values_1.get_keys_wop4xp_k$();
  };
  protoOf(StringValuesBuilderImpl).isEmpty_y1axqb_k$ = function () {
    return this.values_1.isEmpty_y1axqb_k$();
  };
  protoOf(StringValuesBuilderImpl).entries_qbkxv4_k$ = function () {
    return unmodifiable(this.values_1.get_entries_p20ztl_k$());
  };
  protoOf(StringValuesBuilderImpl).set_vj6ab5_k$ = function (name, value) {
    this.validateValue_b0jkyf_k$(value);
    var list = ensureListForKey(this, name);
    list.clear_j9y8zo_k$();
    list.add_1j60pz_k$(value);
  };
  protoOf(StringValuesBuilderImpl).get_4u8u51_k$ = function (name) {
    var tmp0_safe_receiver = this.getAll_9rlpue_k$(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  protoOf(StringValuesBuilderImpl).append_ptbgmx_k$ = function (name, value) {
    this.validateValue_b0jkyf_k$(value);
    ensureListForKey(this, name).add_1j60pz_k$(value);
  };
  protoOf(StringValuesBuilderImpl).appendAll_4ib0tg_k$ = function (stringValues) {
    stringValues.forEach_arwel4_k$(StringValuesBuilderImpl$appendAll$lambda(this));
  };
  protoOf(StringValuesBuilderImpl).appendMissing_nf6jkx_k$ = function (stringValues) {
    stringValues.forEach_arwel4_k$(StringValuesBuilderImpl$appendMissing$lambda(this));
  };
  protoOf(StringValuesBuilderImpl).appendAll_a9dln0_k$ = function (name, values) {
    var tmp$ret$0;
    // Inline function 'kotlin.let' call
    var tmp0_let = ensureListForKey(this, name);
    // Inline function 'kotlin.contracts.contract' call
    var tmp0_iterator = values.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.appendAll.<anonymous>.<anonymous>' call
      this.validateValue_b0jkyf_k$(element);
      tmp0_let.add_1j60pz_k$(element);
    }
    tmp$ret$0 = Unit_getInstance();
  };
  protoOf(StringValuesBuilderImpl).appendMissing_4iwztl_k$ = function (name, values) {
    var tmp0_safe_receiver = this.values_1.get_1mhr4y_k$(name);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toSet(tmp0_safe_receiver);
    var existing = tmp1_elvis_lhs == null ? emptySet() : tmp1_elvis_lhs;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filter' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = values.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.appendMissing.<anonymous>' call
      tmp$ret$0 = !existing.contains_2ehdt1_k$(element);
      if (tmp$ret$0) {
        tmp0_filterTo.add_1j60pz_k$(element);
      }
    }
    tmp$ret$1 = tmp0_filterTo;
    tmp$ret$2 = tmp$ret$1;
    this.appendAll_a9dln0_k$(name, tmp$ret$2);
  };
  protoOf(StringValuesBuilderImpl).remove_d85afi_k$ = function (name) {
    this.values_1.remove_8hbkc0_k$(name);
  };
  protoOf(StringValuesBuilderImpl).removeKeysWithNoEntries_wkfko0_k$ = function () {
    var tmp$ret$4;
    // Inline function 'kotlin.collections.iterator' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.filter' call
    var tmp1_filter = this.values_1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = LinkedHashMap_init_$Create$();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp1_filter.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$1;
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.removeKeysWithNoEntries.<anonymous>' call
      tmp$ret$1 = element.get_value_j01efc_k$().isEmpty_y1axqb_k$();
      if (tmp$ret$1) {
        tmp0_filterTo.put_3mhbri_k$(element.get_key_18j28a_k$(), element.get_value_j01efc_k$());
      }
    }
    tmp$ret$2 = tmp0_filterTo;
    tmp$ret$3 = tmp$ret$2;
    var tmp2_iterator = tmp$ret$3;
    tmp$ret$4 = tmp2_iterator.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator_0 = tmp$ret$4;
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var tmp1_loop_parameter = tmp0_iterator_0.next_20eer_k$();
      var tmp$ret$5;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$5 = tmp1_loop_parameter.get_key_18j28a_k$();
      var k = tmp$ret$5;
      this.remove_d85afi_k$(k);
    }
  };
  protoOf(StringValuesBuilderImpl).remove_i8ugn6_k$ = function (name, value) {
    var tmp0_safe_receiver = this.values_1.get_1mhr4y_k$(name);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.remove_8hbkc6_k$(value);
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(StringValuesBuilderImpl).clear_j9y8zo_k$ = function () {
    this.values_1.clear_j9y8zo_k$();
  };
  protoOf(StringValuesBuilderImpl).build_1k0s4u_k$ = function () {
    return new StringValuesImpl(this.caseInsensitiveName_1, this.values_1);
  };
  protoOf(StringValuesBuilderImpl).validateName_73vxr_k$ = function (name) {
  };
  protoOf(StringValuesBuilderImpl).validateValue_b0jkyf_k$ = function (value) {
  };
  function listForKey($this, name) {
    return $this.values_1.get_1mhr4y_k$(name);
  }
  function StringValuesImpl(caseInsensitiveName, values) {
    caseInsensitiveName = caseInsensitiveName === VOID ? false : caseInsensitiveName;
    values = values === VOID ? emptyMap() : values;
    this.caseInsensitiveName_1 = caseInsensitiveName;
    var tmp;
    if (this.caseInsensitiveName_1) {
      tmp = caseInsensitiveMap();
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp$ret$0 = LinkedHashMap_init_$Create$();
      tmp = tmp$ret$0;
    }
    var newMap = tmp;
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$1 = values.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator = tmp$ret$1;
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.StringValuesImpl.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$2 = element.get_key_18j28a_k$();
      var key = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$3 = element.get_value_j01efc_k$();
      var value = tmp$ret$3;
      // Inline function 'kotlin.collections.set' call
      var tmp$ret$6;
      // Inline function 'kotlin.collections.List' call
      var tmp0_List = value.get_size_woubt6_k$();
      var tmp$ret$5;
      // Inline function 'kotlin.collections.MutableList' call
      var list = ArrayList_init_$Create$(tmp0_List);
      // Inline function 'kotlin.repeat' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp0_List)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.collections.MutableList.<anonymous>' call
          var tmp$ret$4;
          // Inline function 'io.ktor.util.StringValuesImpl.<anonymous>.<anonymous>' call
          tmp$ret$4 = value.get_fkrdnv_k$(index);
          list.add_1j60pz_k$(tmp$ret$4);
        }
         while (inductionVariable < tmp0_List);
      tmp$ret$5 = list;
      tmp$ret$6 = tmp$ret$5;
      var tmp1_set = tmp$ret$6;
      newMap.put_3mhbri_k$(key, tmp1_set);
    }
    this.values_1 = newMap;
  }
  protoOf(StringValuesImpl).get_caseInsensitiveName_ehooe5_k$ = function () {
    return this.caseInsensitiveName_1;
  };
  protoOf(StringValuesImpl).get_values_ksazhn_k$ = function () {
    return this.values_1;
  };
  protoOf(StringValuesImpl).get_4u8u51_k$ = function (name) {
    var tmp0_safe_receiver = listForKey(this, name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  protoOf(StringValuesImpl).getAll_9rlpue_k$ = function (name) {
    return listForKey(this, name);
  };
  protoOf(StringValuesImpl).contains_2gwgo2_k$ = function (name) {
    return !(listForKey(this, name) == null);
  };
  protoOf(StringValuesImpl).contains_t8xfkz_k$ = function (name, value) {
    var tmp0_safe_receiver = listForKey(this, name);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.contains_2ehdt1_k$(value);
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(StringValuesImpl).names_1q9mbs_k$ = function () {
    return unmodifiable(this.values_1.get_keys_wop4xp_k$());
  };
  protoOf(StringValuesImpl).isEmpty_y1axqb_k$ = function () {
    return this.values_1.isEmpty_y1axqb_k$();
  };
  protoOf(StringValuesImpl).entries_qbkxv4_k$ = function () {
    return unmodifiable(this.values_1.get_entries_p20ztl_k$());
  };
  protoOf(StringValuesImpl).forEach_arwel4_k$ = function (body) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.values_1;
    tmp$ret$0 = tmp0_iterator.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator_0 = tmp$ret$0;
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var tmp1_loop_parameter = tmp0_iterator_0.next_20eer_k$();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = tmp1_loop_parameter.get_key_18j28a_k$();
      var key = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = tmp1_loop_parameter.get_value_j01efc_k$();
      var value = tmp$ret$2;
      body(key, value);
    }
  };
  protoOf(StringValuesImpl).toString = function () {
    return 'StringValues(case=' + !this.caseInsensitiveName_1 + ') ' + this.entries_qbkxv4_k$();
  };
  protoOf(StringValuesImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(!(other == null) ? isInterface(other, StringValues) : false))
      return false;
    if (!(this.caseInsensitiveName_1 === other.get_caseInsensitiveName_ehooe5_k$()))
      return false;
    return entriesEquals(this.entries_qbkxv4_k$(), other.entries_qbkxv4_k$());
  };
  protoOf(StringValuesImpl).hashCode = function () {
    return entriesHashCode(this.entries_qbkxv4_k$(), imul(31, this.caseInsensitiveName_1 | 0));
  };
  function StringValuesBuilder() {
  }
  function appendAll(_this__u8e3s4, builder) {
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.appendAll.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = builder.entries_qbkxv4_k$();
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.appendAll.<anonymous>.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$0 = element.get_key_18j28a_k$();
      var name = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$1 = element.get_value_j01efc_k$();
      var values = tmp$ret$1;
      _this__u8e3s4.appendAll_a9dln0_k$(name, values);
    }
    tmp$ret$2 = _this__u8e3s4;
    return tmp$ret$2;
  }
  function flattenEntries(_this__u8e3s4) {
    var tmp$ret$5;
    // Inline function 'kotlin.collections.flatMap' call
    var tmp1_flatMap = _this__u8e3s4.entries_qbkxv4_k$();
    var tmp$ret$4;
    // Inline function 'kotlin.collections.flatMapTo' call
    var tmp0_flatMapTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp1_flatMap.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$3;
      // Inline function 'io.ktor.util.flattenEntries.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp1_map = element.get_value_j01efc_k$();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp1_map, 10));
      var tmp0_iterator_0 = tmp1_map.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator_0.next_20eer_k$();
        var tmp$ret$0;
        // Inline function 'io.ktor.util.flattenEntries.<anonymous>.<anonymous>' call
        tmp$ret$0 = to(element.get_key_18j28a_k$(), item);
        tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var list = tmp$ret$3;
      addAll(tmp0_flatMapTo, list);
    }
    tmp$ret$4 = tmp0_flatMapTo;
    tmp$ret$5 = tmp$ret$4;
    return tmp$ret$5;
  }
  function entriesEquals(a, b) {
    return equals(a, b);
  }
  function entriesHashCode(entries, seed) {
    return imul(seed, 31) + hashCode(entries) | 0;
  }
  function toLowerCasePreservingASCIIRules(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.indexOfFirst' call
      var inductionVariable = 0;
      var last = charSequenceLength(_this__u8e3s4) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0;
          // Inline function 'io.ktor.util.toLowerCasePreservingASCIIRules.<anonymous>' call
          var tmp0__anonymous__q1qw7t = charSequenceGet(_this__u8e3s4, index);
          tmp$ret$0 = !equals(new Char(toLowerCasePreservingASCII(tmp0__anonymous__q1qw7t)), new Char(tmp0__anonymous__q1qw7t));
          if (tmp$ret$0) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = -1;
    }
    var firstIndex = tmp$ret$1;
    if (firstIndex === -1) {
      return _this__u8e3s4;
    }
    var original = _this__u8e3s4;
    var tmp$ret$3;
    // Inline function 'kotlin.text.buildString' call
    var tmp2_buildString = _this__u8e3s4.length;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp1_apply = StringBuilder_init_$Create$(tmp2_buildString);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.toLowerCasePreservingASCIIRules.<anonymous>' call
    tmp1_apply.append_tbojcw_k$(original, 0, firstIndex);
    var inductionVariable_0 = firstIndex;
    var last_0 = get_lastIndex(original);
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        tmp1_apply.append_t8oh9e_k$(toLowerCasePreservingASCII(charSequenceGet(original, index_0)));
      }
       while (!(index_0 === last_0));
    tmp$ret$2 = tmp1_apply;
    tmp$ret$3 = tmp$ret$2.toString();
    return tmp$ret$3;
  }
  function toLowerCasePreservingASCII(ch) {
    var tmp0_subject = ch;
    var tmp;
    if (_Char___init__impl__6a9atx(65) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(90) : false) {
      tmp = Char__plus_impl_qi7pgj(ch, 32);
    } else if (_Char___init__impl__6a9atx(0) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(127) : false) {
      tmp = ch;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.text.lowercaseChar' call
      var tmp$ret$2;
      // Inline function 'kotlin.text.lowercase' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp0_asDynamic = toString(ch);
      tmp$ret$0 = tmp0_asDynamic;
      var tmp1_unsafeCast = tmp$ret$0.toLowerCase();
      tmp$ret$1 = tmp1_unsafeCast;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = charSequenceGet(tmp$ret$2, 0);
      tmp = tmp$ret$3;
    }
    return tmp;
  }
  function _get_hash__d7hhq5($this) {
    return $this.hash_1;
  }
  function CaseInsensitiveString(content) {
    this.content_1 = content;
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.text.lowercase' call
    var tmp0_lowercase = this.content_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_lowercase;
    tmp$ret$1 = tmp$ret$0.toLowerCase();
    tmp.hash_1 = getStringHashCode(tmp$ret$1);
  }
  protoOf(CaseInsensitiveString).get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  protoOf(CaseInsensitiveString).equals = function (other) {
    var tmp0_safe_receiver = other instanceof CaseInsensitiveString ? other : null;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.content_1;
    return (tmp1_safe_receiver == null ? null : equals_0(tmp1_safe_receiver, this.content_1, true)) === true;
  };
  protoOf(CaseInsensitiveString).hashCode = function () {
    return this.hash_1;
  };
  protoOf(CaseInsensitiveString).toString = function () {
    return this.content_1;
  };
  function caseInsensitive(_this__u8e3s4) {
    return new CaseInsensitiveString(_this__u8e3s4);
  }
  function _get_current__qcrdxk($this) {
    return $this.current_1;
  }
  function CopyOnWriteHashMap() {
    this.current_1 = atomic$ref$1(emptyMap());
  }
  protoOf(CopyOnWriteHashMap).put_3mhbri_k$ = function (key, value) {
    do {
      var old = this.current_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (old.get_1mhr4y_k$(key) === value)
        return value;
      var copy = HashMap_init_$Create$(old);
      var replaced = copy.put_3mhbri_k$(key, value);
      if (this.current_1.atomicfu$compareAndSet(old, copy))
        return replaced;
    }
     while (true);
  };
  protoOf(CopyOnWriteHashMap).get_1mhr4y_k$ = function (key) {
    return this.current_1.get_kotlinx$atomicfu$value_vi2am5_k$().get_1mhr4y_k$(key);
  };
  protoOf(CopyOnWriteHashMap).set_2x1s24_k$ = function (key, value) {
    this.put_3mhbri_k$(key, value);
  };
  protoOf(CopyOnWriteHashMap).remove_8hbkc0_k$ = function (key) {
    do {
      var old = this.current_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (old.get_1mhr4y_k$(key) == null)
        return null;
      var copy = HashMap_init_$Create$(old);
      var removed = copy.remove_8hbkc0_k$(key);
      if (this.current_1.atomicfu$compareAndSet(old, copy))
        return removed;
    }
     while (true);
  };
  protoOf(CopyOnWriteHashMap).computeIfAbsent_uwu79p_k$ = function (key, producer) {
    do {
      var old = this.current_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp0_safe_receiver = old.get_1mhr4y_k$(key);
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      var copy = HashMap_init_$Create$(old);
      var newValue = producer(key);
      // Inline function 'kotlin.collections.set' call
      copy.put_3mhbri_k$(key, newValue);
      if (this.current_1.atomicfu$compareAndSet(old, copy))
        return newValue;
    }
     while (true);
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.START_1 = GMTDate_0(new Long(0, 0));
  }
  protoOf(Companion_0).get_START_igje3d_k$ = function () {
    return this.START_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function GMTDate(seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) {
    Companion_getInstance_1();
    this.seconds_1 = seconds;
    this.minutes_1 = minutes;
    this.hours_1 = hours;
    this.dayOfWeek_1 = dayOfWeek;
    this.dayOfMonth_1 = dayOfMonth;
    this.dayOfYear_1 = dayOfYear;
    this.month_1 = month;
    this.year_1 = year;
    this.timestamp_1 = timestamp;
  }
  protoOf(GMTDate).get_seconds_xuhyfq_k$ = function () {
    return this.seconds_1;
  };
  protoOf(GMTDate).get_minutes_ivkhkm_k$ = function () {
    return this.minutes_1;
  };
  protoOf(GMTDate).get_hours_islejq_k$ = function () {
    return this.hours_1;
  };
  protoOf(GMTDate).get_dayOfWeek_3kfgci_k$ = function () {
    return this.dayOfWeek_1;
  };
  protoOf(GMTDate).get_dayOfMonth_vblo3a_k$ = function () {
    return this.dayOfMonth_1;
  };
  protoOf(GMTDate).get_dayOfYear_3ke6gp_k$ = function () {
    return this.dayOfYear_1;
  };
  protoOf(GMTDate).get_month_ivc8d3_k$ = function () {
    return this.month_1;
  };
  protoOf(GMTDate).get_year_woy26e_k$ = function () {
    return this.year_1;
  };
  protoOf(GMTDate).get_timestamp_9fccx9_k$ = function () {
    return this.timestamp_1;
  };
  protoOf(GMTDate).compareTo_bxxc9b_k$ = function (other) {
    return this.timestamp_1.compareTo_n4fqi2_k$(other.timestamp_1);
  };
  protoOf(GMTDate).compareTo_6thzaj_k$ = function (other) {
    return this.compareTo_bxxc9b_k$(other instanceof GMTDate ? other : THROW_CCE());
  };
  protoOf(GMTDate).component1_7eebsc_k$ = function () {
    return this.seconds_1;
  };
  protoOf(GMTDate).component2_7eebsb_k$ = function () {
    return this.minutes_1;
  };
  protoOf(GMTDate).component3_7eebsa_k$ = function () {
    return this.hours_1;
  };
  protoOf(GMTDate).component4_7eebs9_k$ = function () {
    return this.dayOfWeek_1;
  };
  protoOf(GMTDate).component5_7eebs8_k$ = function () {
    return this.dayOfMonth_1;
  };
  protoOf(GMTDate).component6_7eebs7_k$ = function () {
    return this.dayOfYear_1;
  };
  protoOf(GMTDate).component7_7eebs6_k$ = function () {
    return this.month_1;
  };
  protoOf(GMTDate).component8_7eebs5_k$ = function () {
    return this.year_1;
  };
  protoOf(GMTDate).component9_7eebs4_k$ = function () {
    return this.timestamp_1;
  };
  protoOf(GMTDate).copy_2irmzz_k$ = function (seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) {
    return new GMTDate(seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp);
  };
  protoOf(GMTDate).copy$default_425sc1_k$ = function (seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp, $super) {
    seconds = seconds === VOID ? this.seconds_1 : seconds;
    minutes = minutes === VOID ? this.minutes_1 : minutes;
    hours = hours === VOID ? this.hours_1 : hours;
    dayOfWeek = dayOfWeek === VOID ? this.dayOfWeek_1 : dayOfWeek;
    dayOfMonth = dayOfMonth === VOID ? this.dayOfMonth_1 : dayOfMonth;
    dayOfYear = dayOfYear === VOID ? this.dayOfYear_1 : dayOfYear;
    month = month === VOID ? this.month_1 : month;
    year = year === VOID ? this.year_1 : year;
    timestamp = timestamp === VOID ? this.timestamp_1 : timestamp;
    return $super === VOID ? this.copy_2irmzz_k$(seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) : $super.copy_2irmzz_k$.call(this, seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp);
  };
  protoOf(GMTDate).toString = function () {
    return 'GMTDate(seconds=' + this.seconds_1 + ', minutes=' + this.minutes_1 + ', hours=' + this.hours_1 + ', dayOfWeek=' + this.dayOfWeek_1 + ', dayOfMonth=' + this.dayOfMonth_1 + ', dayOfYear=' + this.dayOfYear_1 + ', month=' + this.month_1 + ', year=' + this.year_1 + ', timestamp=' + toString_0(this.timestamp_1) + ')';
  };
  protoOf(GMTDate).hashCode = function () {
    var result = this.seconds_1;
    result = imul(result, 31) + this.minutes_1 | 0;
    result = imul(result, 31) + this.hours_1 | 0;
    result = imul(result, 31) + this.dayOfWeek_1.hashCode() | 0;
    result = imul(result, 31) + this.dayOfMonth_1 | 0;
    result = imul(result, 31) + this.dayOfYear_1 | 0;
    result = imul(result, 31) + this.month_1.hashCode() | 0;
    result = imul(result, 31) + this.year_1 | 0;
    result = imul(result, 31) + this.timestamp_1.hashCode() | 0;
    return result;
  };
  protoOf(GMTDate).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GMTDate))
      return false;
    var tmp0_other_with_cast = other instanceof GMTDate ? other : THROW_CCE();
    if (!(this.seconds_1 === tmp0_other_with_cast.seconds_1))
      return false;
    if (!(this.minutes_1 === tmp0_other_with_cast.minutes_1))
      return false;
    if (!(this.hours_1 === tmp0_other_with_cast.hours_1))
      return false;
    if (!this.dayOfWeek_1.equals(tmp0_other_with_cast.dayOfWeek_1))
      return false;
    if (!(this.dayOfMonth_1 === tmp0_other_with_cast.dayOfMonth_1))
      return false;
    if (!(this.dayOfYear_1 === tmp0_other_with_cast.dayOfYear_1))
      return false;
    if (!this.month_1.equals(tmp0_other_with_cast.month_1))
      return false;
    if (!(this.year_1 === tmp0_other_with_cast.year_1))
      return false;
    if (!this.timestamp_1.equals(tmp0_other_with_cast.timestamp_1))
      return false;
    return true;
  };
  var WeekDay_MONDAY_instance;
  var WeekDay_TUESDAY_instance;
  var WeekDay_WEDNESDAY_instance;
  var WeekDay_THURSDAY_instance;
  var WeekDay_FRIDAY_instance;
  var WeekDay_SATURDAY_instance;
  var WeekDay_SUNDAY_instance;
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).from_btzjl5_k$ = function (ordinal) {
    return values_0()[ordinal];
  };
  protoOf(Companion_1).from_ev2bjd_k$ = function (value) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.find' call
    var tmp0_find = values_0();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var indexedObject = tmp0_find;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'io.ktor.util.date.Companion.from.<anonymous>' call
        tmp$ret$0 = element.value_1 === value;
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    tmp$ret$2 = tmp$ret$1;
    var tmp0_elvis_lhs = tmp$ret$2;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp1_error = 'Invalid day of week: ' + value;
      throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    WeekDay_initEntries();
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function values_0() {
    return [WeekDay_MONDAY_getInstance(), WeekDay_TUESDAY_getInstance(), WeekDay_WEDNESDAY_getInstance(), WeekDay_THURSDAY_getInstance(), WeekDay_FRIDAY_getInstance(), WeekDay_SATURDAY_getInstance(), WeekDay_SUNDAY_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'MONDAY':
        return WeekDay_MONDAY_getInstance();
      case 'TUESDAY':
        return WeekDay_TUESDAY_getInstance();
      case 'WEDNESDAY':
        return WeekDay_WEDNESDAY_getInstance();
      case 'THURSDAY':
        return WeekDay_THURSDAY_getInstance();
      case 'FRIDAY':
        return WeekDay_FRIDAY_getInstance();
      case 'SATURDAY':
        return WeekDay_SATURDAY_getInstance();
      case 'SUNDAY':
        return WeekDay_SUNDAY_getInstance();
      default:
        WeekDay_initEntries();
        THROW_ISE();
        break;
    }
  }
  var WeekDay_entriesInitialized;
  function WeekDay_initEntries() {
    if (WeekDay_entriesInitialized)
      return Unit_getInstance();
    WeekDay_entriesInitialized = true;
    WeekDay_MONDAY_instance = new WeekDay('MONDAY', 0, 'Mon');
    WeekDay_TUESDAY_instance = new WeekDay('TUESDAY', 1, 'Tue');
    WeekDay_WEDNESDAY_instance = new WeekDay('WEDNESDAY', 2, 'Wed');
    WeekDay_THURSDAY_instance = new WeekDay('THURSDAY', 3, 'Thu');
    WeekDay_FRIDAY_instance = new WeekDay('FRIDAY', 4, 'Fri');
    WeekDay_SATURDAY_instance = new WeekDay('SATURDAY', 5, 'Sat');
    WeekDay_SUNDAY_instance = new WeekDay('SUNDAY', 6, 'Sun');
    Companion_getInstance_2();
  }
  function WeekDay(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
  }
  protoOf(WeekDay).get_value_j01efc_k$ = function () {
    return this.value_1;
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
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).from_btzjl5_k$ = function (ordinal) {
    return values_1()[ordinal];
  };
  protoOf(Companion_2).from_ev2bjd_k$ = function (value) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.find' call
    var tmp0_find = values_1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var indexedObject = tmp0_find;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'io.ktor.util.date.Companion.from.<anonymous>' call
        tmp$ret$0 = element.value_1 === value;
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    tmp$ret$2 = tmp$ret$1;
    var tmp0_elvis_lhs = tmp$ret$2;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp1_error = 'Invalid month: ' + value;
      throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    Month_initEntries();
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function values_1() {
    return [Month_JANUARY_getInstance(), Month_FEBRUARY_getInstance(), Month_MARCH_getInstance(), Month_APRIL_getInstance(), Month_MAY_getInstance(), Month_JUNE_getInstance(), Month_JULY_getInstance(), Month_AUGUST_getInstance(), Month_SEPTEMBER_getInstance(), Month_OCTOBER_getInstance(), Month_NOVEMBER_getInstance(), Month_DECEMBER_getInstance()];
  }
  function valueOf_1(value) {
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
    Month_JANUARY_instance = new Month('JANUARY', 0, 'Jan');
    Month_FEBRUARY_instance = new Month('FEBRUARY', 1, 'Feb');
    Month_MARCH_instance = new Month('MARCH', 2, 'Mar');
    Month_APRIL_instance = new Month('APRIL', 3, 'Apr');
    Month_MAY_instance = new Month('MAY', 4, 'May');
    Month_JUNE_instance = new Month('JUNE', 5, 'Jun');
    Month_JULY_instance = new Month('JULY', 6, 'Jul');
    Month_AUGUST_instance = new Month('AUGUST', 7, 'Aug');
    Month_SEPTEMBER_instance = new Month('SEPTEMBER', 8, 'Sep');
    Month_OCTOBER_instance = new Month('OCTOBER', 9, 'Oct');
    Month_NOVEMBER_instance = new Month('NOVEMBER', 10, 'Nov');
    Month_DECEMBER_instance = new Month('DECEMBER', 11, 'Dec');
    Companion_getInstance_3();
  }
  function Month(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
  }
  protoOf(Month).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function WeekDay_MONDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_MONDAY_instance;
  }
  function WeekDay_TUESDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_TUESDAY_instance;
  }
  function WeekDay_WEDNESDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_WEDNESDAY_instance;
  }
  function WeekDay_THURSDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_THURSDAY_instance;
  }
  function WeekDay_FRIDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_FRIDAY_instance;
  }
  function WeekDay_SATURDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_SATURDAY_instance;
  }
  function WeekDay_SUNDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_SUNDAY_instance;
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
  function get_CONDITION_FALSE() {
    _init_properties_LockFreeLinkedList_kt__wekxce();
    return CONDITION_FALSE;
  }
  var CONDITION_FALSE;
  function get_ALREADY_REMOVED() {
    _init_properties_LockFreeLinkedList_kt__wekxce();
    return ALREADY_REMOVED;
  }
  var ALREADY_REMOVED;
  function get_LIST_EMPTY() {
    _init_properties_LockFreeLinkedList_kt__wekxce();
    return LIST_EMPTY;
  }
  var LIST_EMPTY;
  function get_REMOVE_PREPARED() {
    _init_properties_LockFreeLinkedList_kt__wekxce();
    return REMOVE_PREPARED;
  }
  var REMOVE_PREPARED;
  function get_NO_DECISION() {
    _init_properties_LockFreeLinkedList_kt__wekxce();
    return NO_DECISION;
  }
  var NO_DECISION;
  function Symbol(symbol) {
    this.symbol_1 = symbol;
  }
  protoOf(Symbol).get_symbol_jqdfoh_k$ = function () {
    return this.symbol_1;
  };
  protoOf(Symbol).toString = function () {
    return this.symbol_1;
  };
  var properties_initialized_LockFreeLinkedList_kt_lnmdgw;
  function _init_properties_LockFreeLinkedList_kt__wekxce() {
    if (properties_initialized_LockFreeLinkedList_kt_lnmdgw) {
    } else {
      properties_initialized_LockFreeLinkedList_kt_lnmdgw = true;
      CONDITION_FALSE = new Symbol('CONDITION_FALSE');
      ALREADY_REMOVED = new Symbol('ALREADY_REMOVED');
      LIST_EMPTY = new Symbol('LIST_EMPTY');
      REMOVE_PREPARED = new Symbol('REMOVE_PREPARED');
      NO_DECISION = new Symbol('NO_DECISION');
    }
  }
  function _get_interceptors__h4min7($this) {
    return $this.interceptors_1;
  }
  function _set_index__fyfqnn($this, _set____db54di) {
    $this.index_1 = _set____db54di;
  }
  function _get_index__g2optt($this) {
    return $this.index_1;
  }
  function proceedLoop($this, $completion) {
    var tmp = new $proceedLoopCOROUTINE$1($this, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $proceedLoopCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($proceedLoopCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(6);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.index0__1 = this._this__u8e3s4__1.index_1;
            if (this.index0__1 === -1) {
              this.set_state_a96kl8_k$(5);
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

            break;
          case 2:
            this.interceptors1__1 = this._this__u8e3s4__1.interceptors_1;
            if (this.index0__1 >= this.interceptors1__1.get_size_woubt6_k$()) {
              this._this__u8e3s4__1.finish_mgihxe_k$();
              this.set_state_a96kl8_k$(5);
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

            break;
          case 3:
            this.executeInterceptor2__1 = this.interceptors1__1.get_fkrdnv_k$(this.index0__1);
            this._this__u8e3s4__1.index_1 = this.index0__1 + 1 | 0;
            this.set_state_a96kl8_k$(4);
            var tmp_0 = this.executeInterceptor2__1;
            suspendResult = (isSuspendFunction(tmp_0, 2) ? tmp_0 : THROW_CCE())(this._this__u8e3s4__1, this._this__u8e3s4__1.subject_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 5:
            return this._this__u8e3s4__1.subject_1;
          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function DebugPipelineContext(context, interceptors, subject, coroutineContext) {
    PipelineContext.call(this, context);
    this.interceptors_1 = interceptors;
    this.coroutineContext_1 = coroutineContext;
    this.subject_1 = subject;
    this.index_1 = 0;
  }
  protoOf(DebugPipelineContext).get_coroutineContext_115oqo_k$ = function () {
    return this.coroutineContext_1;
  };
  protoOf(DebugPipelineContext).set_subject_r07meh_k$ = function (_set____db54di) {
    this.subject_1 = _set____db54di;
  };
  protoOf(DebugPipelineContext).get_subject_tmjbgd_k$ = function () {
    return this.subject_1;
  };
  protoOf(DebugPipelineContext).finish_mgihxe_k$ = function () {
    this.index_1 = -1;
  };
  protoOf(DebugPipelineContext).proceedWith_slnzfn_k$ = function (subject, $completion) {
    this.subject_1 = subject;
    var tmp0 = this.proceed_7g1848_k$($completion);
    return tmp0;
  };
  protoOf(DebugPipelineContext).proceed_7g1848_k$ = function ($completion) {
    var index = this.index_1;
    if (index < 0)
      return this.subject_1;
    if (index >= this.interceptors_1.get_size_woubt6_k$()) {
      this.finish_mgihxe_k$();
      return this.subject_1;
    }
    var tmp0 = proceedLoop(this, $completion);
    return tmp0;
  };
  protoOf(DebugPipelineContext).execute_kr9z5o_k$ = function (initial, $completion) {
    this.index_1 = 0;
    this.subject_1 = initial;
    var tmp0 = this.proceed_7g1848_k$($completion);
    return tmp0;
  };
  function _set_interceptors__wod97b($this, _set____db54di) {
    $this.interceptors_1 = _set____db54di;
  }
  function _get_interceptors__h4min7_0($this) {
    return $this.interceptors_1;
  }
  function PhaseContent_init_$Init$(phase, relation, $this) {
    var tmp = Companion_getInstance_4().SharedArrayList_1;
    PhaseContent.call($this, phase, relation, isInterface(tmp, MutableList) ? tmp : THROW_CCE());
    // Inline function 'kotlin.check' call
    var tmp0_check = Companion_getInstance_4().SharedArrayList_1.isEmpty_y1axqb_k$();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'io.ktor.util.pipeline.PhaseContent.<init>.<anonymous>' call
      tmp$ret$0 = 'The shared empty array list has been modified';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    return $this;
  }
  function PhaseContent_init_$Create$(phase, relation) {
    return PhaseContent_init_$Init$(phase, relation, objectCreate(protoOf(PhaseContent)));
  }
  function copyInterceptors($this) {
    $this.interceptors_1 = $this.copiedInterceptors_t6sa3y_k$();
    $this.shared_1 = false;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.SharedArrayList_1 = tmp$ret$0;
  }
  protoOf(Companion_3).get_SharedArrayList_vqimaf_k$ = function () {
    return this.SharedArrayList_1;
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function PhaseContent(phase, relation, interceptors) {
    Companion_getInstance_4();
    this.phase_1 = phase;
    this.relation_1 = relation;
    this.interceptors_1 = interceptors;
    this.shared_1 = true;
  }
  protoOf(PhaseContent).get_phase_iwuvki_k$ = function () {
    return this.phase_1;
  };
  protoOf(PhaseContent).get_relation_u22tol_k$ = function () {
    return this.relation_1;
  };
  protoOf(PhaseContent).set_shared_v5cvk7_k$ = function (_set____db54di) {
    this.shared_1 = _set____db54di;
  };
  protoOf(PhaseContent).get_shared_jgtlda_k$ = function () {
    return this.shared_1;
  };
  protoOf(PhaseContent).get_isEmpty_zauvru_k$ = function () {
    return this.interceptors_1.isEmpty_y1axqb_k$();
  };
  protoOf(PhaseContent).get_size_woubt6_k$ = function () {
    return this.interceptors_1.get_size_woubt6_k$();
  };
  protoOf(PhaseContent).addInterceptor_xxtyyr_k$ = function (interceptor) {
    if (this.shared_1) {
      copyInterceptors(this);
    }
    this.interceptors_1.add_1j60pz_k$(interceptor);
  };
  protoOf(PhaseContent).addTo_elyi0x_k$ = function (destination) {
    var interceptors = this.interceptors_1;
    if (destination instanceof ArrayList) {
      destination.ensureCapacity_ignus8_k$(destination.get_size_woubt6_k$() + interceptors.get_size_woubt6_k$() | 0);
    }
    var inductionVariable = 0;
    var last = interceptors.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        destination.add_1j60pz_k$(interceptors.get_fkrdnv_k$(index));
      }
       while (inductionVariable < last);
  };
  protoOf(PhaseContent).addTo_b8pbac_k$ = function (destination) {
    if (this.get_isEmpty_zauvru_k$())
      return Unit_getInstance();
    if (destination.get_isEmpty_zauvru_k$()) {
      destination.interceptors_1 = this.sharedInterceptors_rmg8b1_k$();
      destination.shared_1 = true;
      return Unit_getInstance();
    }
    if (destination.shared_1) {
      copyInterceptors(destination);
    }
    this.addTo_elyi0x_k$(destination.interceptors_1);
  };
  protoOf(PhaseContent).sharedInterceptors_rmg8b1_k$ = function () {
    this.shared_1 = true;
    return this.interceptors_1;
  };
  protoOf(PhaseContent).copiedInterceptors_t6sa3y_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var tmp0_apply = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.pipeline.PhaseContent.copiedInterceptors.<anonymous>' call
    tmp0_apply.addAll_oxxjjk_k$(this.interceptors_1);
    tmp$ret$1 = tmp0_apply;
    return tmp$ret$1;
  };
  protoOf(PhaseContent).toString = function () {
    return 'Phase `' + this.phase_1.get_name_woqyms_k$() + '`, ' + this.get_size_woubt6_k$() + ' handlers';
  };
  function _get_phasesRaw__qhc95r($this) {
    return $this.phasesRaw_1;
  }
  function _set_interceptorsQuantity__wbahq($this, _set____db54di) {
    $this.interceptorsQuantity_1 = _set____db54di;
  }
  function _get_interceptorsQuantity__d1rdim($this) {
    return $this.interceptorsQuantity_1;
  }
  function _get__interceptors__h3evks($this) {
    return $this._interceptors_1;
  }
  function _set_interceptors__wod97b_0($this, value) {
    $this._interceptors_1.set_kotlinx$atomicfu$value_koguff_k$(value);
  }
  function _get_interceptors__h4min7_1($this) {
    return $this._interceptors_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  }
  function _set_interceptorsListShared__d5l722($this, _set____db54di) {
    $this.interceptorsListShared_1 = _set____db54di;
  }
  function _get_interceptorsListShared__93i9dm($this) {
    return $this.interceptorsListShared_1;
  }
  function _set_interceptorsListSharedPhase__tmqge3($this, _set____db54di) {
    $this.interceptorsListSharedPhase_1 = _set____db54di;
  }
  function _get_interceptorsListSharedPhase__2d8553($this) {
    return $this.interceptorsListSharedPhase_1;
  }
  function Pipeline_init_$Init$(phase, interceptors, $this) {
    Pipeline.call($this, [phase]);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = interceptors.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.pipeline.Pipeline.<init>.<anonymous>' call
      $this.intercept_hnj3e1_k$(phase, element);
    }
    return $this;
  }
  function Pipeline_init_$Create$(phase, interceptors) {
    return Pipeline_init_$Init$(phase, interceptors, objectCreate(protoOf(Pipeline)));
  }
  function mergeInterceptors($this, from) {
    if ($this.interceptorsQuantity_1 === 0) {
      setInterceptorsListFromAnotherPipeline($this, from);
    } else {
      resetInterceptorsList($this);
    }
    var fromPhases = from.phasesRaw_1;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = fromPhases.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.pipeline.Pipeline.mergeInterceptors.<anonymous>' call
      var tmp0_elvis_lhs = element instanceof PipelinePhase ? element : null;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp = (element instanceof PhaseContent ? element : THROW_CCE()).get_phase_iwuvki_k$();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var fromPhase = tmp;
      var tmp_0;
      if (element instanceof PhaseContent) {
        tmp_0 = !element.get_isEmpty_zauvru_k$();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        if (element instanceof PhaseContent)
          element;
        else
          THROW_CCE();
        element.addTo_b8pbac_k$(ensureNotNull(findPhase($this, fromPhase)));
        var tmp1_this = $this;
        tmp1_this.interceptorsQuantity_1 = tmp1_this.interceptorsQuantity_1 + element.get_size_woubt6_k$() | 0;
      }
    }
  }
  function createContext($this, context, subject, coroutineContext) {
    return pipelineContextFor(context, sharedInterceptorsList($this), subject, coroutineContext, $this.get_developmentMode_eqiro5_k$());
  }
  function findPhase($this, phase) {
    var phasesList = $this.phasesRaw_1;
    var inductionVariable = 0;
    var last = phasesList.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.get_fkrdnv_k$(index);
        if (current === phase) {
          var content = PhaseContent_init_$Create$(phase, Last_getInstance());
          phasesList.set_meu351_k$(index, content);
          return content;
        }
        var tmp;
        if (current instanceof PhaseContent) {
          tmp = current.get_phase_iwuvki_k$() === phase;
        } else {
          tmp = false;
        }
        if (tmp) {
          return current instanceof PhaseContent ? current : THROW_CCE();
        }
      }
       while (inductionVariable < last);
    return null;
  }
  function findPhaseIndex($this, phase) {
    var phasesList = $this.phasesRaw_1;
    var inductionVariable = 0;
    var last = phasesList.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.get_fkrdnv_k$(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.get_phase_iwuvki_k$() === phase;
          } else {
            tmp_0 = false;
          }
          tmp = tmp_0;
        }
        if (tmp) {
          return index;
        }
      }
       while (inductionVariable < last);
    return -1;
  }
  function hasPhase($this, phase) {
    var phasesList = $this.phasesRaw_1;
    var inductionVariable = 0;
    var last = phasesList.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.get_fkrdnv_k$(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.get_phase_iwuvki_k$() === phase;
          } else {
            tmp_0 = false;
          }
          tmp = tmp_0;
        }
        if (tmp) {
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  }
  function cacheInterceptors($this) {
    var interceptorsQuantity = $this.interceptorsQuantity_1;
    if (interceptorsQuantity === 0) {
      notSharedInterceptorsList($this, emptyList());
      return emptyList();
    }
    var phases = $this.phasesRaw_1;
    if (interceptorsQuantity === 1) {
      var inductionVariable = 0;
      var last = get_lastIndex_0(phases);
      if (inductionVariable <= last)
        $l$loop_0: do {
          var phaseIndex = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = phases.get_fkrdnv_k$(phaseIndex);
          var tmp1_elvis_lhs = tmp instanceof PhaseContent ? tmp : null;
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var phaseContent = tmp_0;
          if (phaseContent.get_isEmpty_zauvru_k$())
            continue $l$loop_0;
          var interceptors = phaseContent.sharedInterceptors_rmg8b1_k$();
          setInterceptorsListFromPhase($this, phaseContent);
          return interceptors;
        }
         while (!(phaseIndex === last));
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var destination = tmp$ret$0;
    var inductionVariable_0 = 0;
    var last_0 = get_lastIndex_0(phases);
    if (inductionVariable_0 <= last_0)
      $l$loop_1: do {
        var phaseIndex_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp_1 = phases.get_fkrdnv_k$(phaseIndex_0);
        var tmp3_elvis_lhs = tmp_1 instanceof PhaseContent ? tmp_1 : null;
        var tmp_2;
        if (tmp3_elvis_lhs == null) {
          continue $l$loop_1;
        } else {
          tmp_2 = tmp3_elvis_lhs;
        }
        var phase = tmp_2;
        phase.addTo_elyi0x_k$(destination);
      }
       while (!(phaseIndex_0 === last_0));
    notSharedInterceptorsList($this, destination);
    return destination;
  }
  function fastPathMerge($this, from) {
    if (from.phasesRaw_1.isEmpty_y1axqb_k$()) {
      return true;
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = $this.phasesRaw_1;
    tmp$ret$0 = !tmp0_isNotEmpty.isEmpty_y1axqb_k$();
    if (tmp$ret$0) {
      return false;
    }
    var fromPhases = from.phasesRaw_1;
    var inductionVariable = 0;
    var last = get_lastIndex_0(fromPhases);
    if (inductionVariable <= last)
      $l$loop_0: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var fromPhaseOrContent = fromPhases.get_fkrdnv_k$(index);
        if (fromPhaseOrContent instanceof PipelinePhase) {
          $this.phasesRaw_1.add_1j60pz_k$(fromPhaseOrContent);
          continue $l$loop_0;
        }
        if (!(fromPhaseOrContent instanceof PhaseContent)) {
          continue $l$loop_0;
        }
        if (fromPhaseOrContent instanceof PhaseContent)
          fromPhaseOrContent;
        else
          THROW_CCE();
        $this.phasesRaw_1.add_1j60pz_k$(new PhaseContent(fromPhaseOrContent.get_phase_iwuvki_k$(), fromPhaseOrContent.get_relation_u22tol_k$(), fromPhaseOrContent.sharedInterceptors_rmg8b1_k$()));
        continue $l$loop_0;
      }
       while (!(index === last));
    var tmp1_this = $this;
    tmp1_this.interceptorsQuantity_1 = tmp1_this.interceptorsQuantity_1 + from.interceptorsQuantity_1 | 0;
    setInterceptorsListFromAnotherPipeline($this, from);
    return true;
  }
  function sharedInterceptorsList($this) {
    if (_get_interceptors__h4min7_1($this) == null) {
      cacheInterceptors($this);
    }
    $this.interceptorsListShared_1 = true;
    return ensureNotNull(_get_interceptors__h4min7_1($this));
  }
  function resetInterceptorsList($this) {
    _set_interceptors__wod97b_0($this, null);
    $this.interceptorsListShared_1 = false;
    $this.interceptorsListSharedPhase_1 = null;
  }
  function notSharedInterceptorsList($this, list) {
    _set_interceptors__wod97b_0($this, list);
    $this.interceptorsListShared_1 = false;
    $this.interceptorsListSharedPhase_1 = null;
  }
  function setInterceptorsListFromPhase($this, phaseContent) {
    _set_interceptors__wod97b_0($this, phaseContent.sharedInterceptors_rmg8b1_k$());
    $this.interceptorsListShared_1 = false;
    $this.interceptorsListSharedPhase_1 = phaseContent.get_phase_iwuvki_k$();
  }
  function setInterceptorsListFromAnotherPipeline($this, pipeline) {
    _set_interceptors__wod97b_0($this, sharedInterceptorsList(pipeline));
    $this.interceptorsListShared_1 = true;
    $this.interceptorsListSharedPhase_1 = null;
  }
  function tryAddToPhaseFastPath($this, phase, block) {
    var currentInterceptors = _get_interceptors__h4min7_1($this);
    if ($this.phasesRaw_1.isEmpty_y1axqb_k$() ? true : currentInterceptors == null) {
      return false;
    }
    var tmp;
    if ($this.interceptorsListShared_1) {
      tmp = true;
    } else {
      tmp = !(!(currentInterceptors == null) ? isInterface(currentInterceptors, MutableList) : false);
    }
    if (tmp) {
      return false;
    }
    if (equals($this.interceptorsListSharedPhase_1, phase)) {
      currentInterceptors.add_1j60pz_k$(block);
      return true;
    }
    if (equals(phase, last($this.phasesRaw_1)) ? true : findPhaseIndex($this, phase) === get_lastIndex_0($this.phasesRaw_1)) {
      ensureNotNull(findPhase($this, phase)).addInterceptor_xxtyyr_k$(block);
      currentInterceptors.add_1j60pz_k$(block);
      return true;
    }
    return false;
  }
  function insertRelativePhase($this, fromPhaseOrContent, fromPhase) {
    var tmp;
    if (fromPhaseOrContent === fromPhase) {
      tmp = Last_getInstance();
    } else {
      tmp = (fromPhaseOrContent instanceof PhaseContent ? fromPhaseOrContent : THROW_CCE()).get_relation_u22tol_k$();
    }
    var fromPhaseRelation = tmp;
    if (fromPhaseRelation instanceof Last) {
      $this.addPhase_safxef_k$(fromPhase);
    } else {
      var tmp_0;
      if (fromPhaseRelation instanceof Before) {
        tmp_0 = hasPhase($this, fromPhaseRelation.get_relativeTo_o3bmds_k$());
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        $this.insertPhaseBefore_mtrcmo_k$(fromPhaseRelation.get_relativeTo_o3bmds_k$(), fromPhase);
      } else {
        if (fromPhaseRelation instanceof After) {
          $this.insertPhaseAfter_v4shih_k$(fromPhaseRelation.get_relativeTo_o3bmds_k$(), fromPhase);
        } else {
          return false;
        }
      }
    }
    return true;
  }
  function Pipeline(phases) {
    this.attributes_1 = AttributesJsFn(true);
    this.developmentMode_1 = false;
    this.phasesRaw_1 = mutableListOf(phases.slice());
    this.interceptorsQuantity_1 = 0;
    this._interceptors_1 = atomic$ref$1(null);
    this.interceptorsListShared_1 = false;
    this.interceptorsListSharedPhase_1 = null;
  }
  protoOf(Pipeline).get_attributes_dgqof4_k$ = function () {
    return this.attributes_1;
  };
  protoOf(Pipeline).get_developmentMode_eqiro5_k$ = function () {
    return this.developmentMode_1;
  };
  protoOf(Pipeline).get_items_it823b_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = this.phasesRaw_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator = tmp1_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'io.ktor.util.pipeline.Pipeline.<get-items>.<anonymous>' call
      var tmp1_elvis_lhs = item instanceof PipelinePhase ? item : null;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        var tmp0_safe_receiver = item instanceof PhaseContent ? item : null;
        tmp = ensureNotNull(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_phase_iwuvki_k$());
      } else {
        tmp = tmp1_elvis_lhs;
      }
      tmp$ret$0 = tmp;
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(Pipeline).get_isEmpty_zauvru_k$ = function () {
    return this.interceptorsQuantity_1 === 0;
  };
  protoOf(Pipeline).execute_av1190_k$ = function (context, subject, $completion) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $completion.get_context_h02k06_k$();
    var tmp0 = createContext(this, context, subject, tmp$ret$0).execute_kr9z5o_k$(subject, $completion);
    return tmp0;
  };
  protoOf(Pipeline).addPhase_safxef_k$ = function (phase) {
    if (hasPhase(this, phase)) {
      return Unit_getInstance();
    }
    this.phasesRaw_1.add_1j60pz_k$(phase);
  };
  protoOf(Pipeline).insertPhaseAfter_v4shih_k$ = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_getInstance();
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference + ' was not registered for this pipeline');
    }
    var lastRelatedPhaseIndex = index;
    var inductionVariable = index + 1 | 0;
    var last = get_lastIndex_0(this.phasesRaw_1);
    if (inductionVariable <= last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.phasesRaw_1.get_fkrdnv_k$(i);
        var tmp1_safe_receiver = tmp instanceof PhaseContent ? tmp : null;
        var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_relation_u22tol_k$();
        var tmp_0;
        if (tmp2_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp2_elvis_lhs;
        }
        var relation = tmp_0;
        var tmp3_safe_receiver = relation instanceof After ? relation : null;
        var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.get_relativeTo_o3bmds_k$();
        var tmp_1;
        if (tmp4_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp_1 = tmp4_elvis_lhs;
        }
        var relatedTo = tmp_1;
        lastRelatedPhaseIndex = equals(relatedTo, reference) ? i : lastRelatedPhaseIndex;
      }
       while (!(i === last));
    this.phasesRaw_1.add_ydlf05_k$(lastRelatedPhaseIndex + 1 | 0, PhaseContent_init_$Create$(phase, new After(reference)));
  };
  protoOf(Pipeline).insertPhaseBefore_mtrcmo_k$ = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_getInstance();
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference + ' was not registered for this pipeline');
    }
    this.phasesRaw_1.add_ydlf05_k$(index, PhaseContent_init_$Create$(phase, new Before(reference)));
  };
  protoOf(Pipeline).intercept_hnj3e1_k$ = function (phase, block) {
    var tmp0_elvis_lhs = findPhase(this, phase);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new InvalidPhaseException('Phase ' + phase + ' was not registered for this pipeline');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var phaseContent = tmp;
    if (typeof block === 'function')
      block;
    else
      THROW_CCE();
    if (tryAddToPhaseFastPath(this, phase, block)) {
      var tmp1_this = this;
      var tmp2 = tmp1_this.interceptorsQuantity_1;
      tmp1_this.interceptorsQuantity_1 = tmp2 + 1 | 0;
      return Unit_getInstance();
    }
    phaseContent.addInterceptor_xxtyyr_k$(block);
    var tmp3_this = this;
    var tmp4 = tmp3_this.interceptorsQuantity_1;
    tmp3_this.interceptorsQuantity_1 = tmp4 + 1 | 0;
    resetInterceptorsList(this);
    this.afterIntercepted_wfopw4_k$();
  };
  protoOf(Pipeline).afterIntercepted_wfopw4_k$ = function () {
  };
  protoOf(Pipeline).interceptorsForPhase_thlg9s_k$ = function (phase) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.filterIsInstance' call
      var tmp1_filterIsInstance = this.phasesRaw_1;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var tmp0_filterIsInstanceTo = ArrayList_init_$Create$_0();
      var tmp0_iterator = tmp1_filterIsInstance.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        if (element instanceof PhaseContent) {
          tmp0_filterIsInstanceTo.add_1j60pz_k$(element);
        }
      }
      tmp$ret$0 = tmp0_filterIsInstanceTo;
      tmp$ret$1 = tmp$ret$0;
      var tmp2_firstOrNull = tmp$ret$1;
      var tmp0_iterator_0 = tmp2_firstOrNull.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        var tmp$ret$2;
        // Inline function 'io.ktor.util.pipeline.Pipeline.interceptorsForPhase.<anonymous>' call
        tmp$ret$2 = equals(element_0.get_phase_iwuvki_k$(), phase);
        if (tmp$ret$2) {
          tmp$ret$3 = element_0;
          break $l$block;
        }
      }
      tmp$ret$3 = null;
    }
    var tmp0_safe_receiver = tmp$ret$3;
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sharedInterceptors_rmg8b1_k$();
    var tmp1_elvis_lhs = (tmp == null ? true : isInterface(tmp, List)) ? tmp : THROW_CCE();
    return tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
  };
  protoOf(Pipeline).mergePhases_9ldwy7_k$ = function (from) {
    var fromPhases = from.phasesRaw_1;
    var toInsert = toMutableList(fromPhases);
    $l$loop: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$0 = !toInsert.isEmpty_y1axqb_k$();
      if (!tmp$ret$0) {
        break $l$loop;
      }
      var iterator = toInsert.iterator_jk1svi_k$();
      while (iterator.hasNext_bitz1p_k$()) {
        var fromPhaseOrContent = iterator.next_20eer_k$();
        var tmp0_elvis_lhs = fromPhaseOrContent instanceof PipelinePhase ? fromPhaseOrContent : null;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          tmp = (fromPhaseOrContent instanceof PhaseContent ? fromPhaseOrContent : THROW_CCE()).get_phase_iwuvki_k$();
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var fromPhase = tmp;
        if (hasPhase(this, fromPhase)) {
          iterator.remove_le47v1_k$();
        } else {
          var inserted = insertRelativePhase(this, fromPhaseOrContent, fromPhase);
          if (inserted) {
            iterator.remove_le47v1_k$();
          }
        }
      }
    }
  };
  protoOf(Pipeline).merge_sslh93_k$ = function (from) {
    if (fastPathMerge(this, from)) {
      return Unit_getInstance();
    }
    this.mergePhases_9ldwy7_k$(from);
    mergeInterceptors(this, from);
  };
  protoOf(Pipeline).resetFrom_hoxdu0_k$ = function (from) {
    this.phasesRaw_1.clear_j9y8zo_k$();
    // Inline function 'kotlin.check' call
    var tmp0_check = this.interceptorsQuantity_1 === 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    fastPathMerge(this, from);
  };
  protoOf(Pipeline).phaseInterceptors_2wllt5_k$ = function (phase) {
    var tmp0_safe_receiver = findPhase(this, phase);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sharedInterceptors_rmg8b1_k$();
    return tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
  };
  protoOf(Pipeline).interceptorsForTests_ygi3ty_k$ = function () {
    var tmp0_elvis_lhs = _get_interceptors__h4min7_1(this);
    return tmp0_elvis_lhs == null ? cacheInterceptors(this) : tmp0_elvis_lhs;
  };
  function PipelineContext(context) {
    this.context_1 = context;
  }
  protoOf(PipelineContext).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  function pipelineContextFor(context, interceptors, subject, coroutineContext, debugMode) {
    debugMode = debugMode === VOID ? false : debugMode;
    var tmp;
    if (get_DISABLE_SFG() ? true : debugMode) {
      tmp = new DebugPipelineContext(context, interceptors, subject, coroutineContext);
    } else {
      tmp = new SuspendFunctionGun(subject, context, interceptors);
    }
    return tmp;
  }
  function PipelinePhase(name) {
    this.name_1 = name;
  }
  protoOf(PipelinePhase).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(PipelinePhase).toString = function () {
    return "Phase('" + this.name_1 + "')";
  };
  function InvalidPhaseException(message) {
    extendThrowable(this, message);
    captureStack(this, InvalidPhaseException);
  }
  function After(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.relativeTo_1 = relativeTo;
  }
  protoOf(After).get_relativeTo_o3bmds_k$ = function () {
    return this.relativeTo_1;
  };
  function Before(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.relativeTo_1 = relativeTo;
  }
  protoOf(Before).get_relativeTo_o3bmds_k$ = function () {
    return this.relativeTo_1;
  };
  function Last() {
    Last_instance = this;
    PipelinePhaseRelation.call(this);
  }
  var Last_instance;
  function Last_getInstance() {
    if (Last_instance == null)
      new Last();
    return Last_instance;
  }
  function PipelinePhaseRelation() {
  }
  function recoverStackTraceBridge(exception, continuation) {
    var tmp;
    try {
      tmp = withCause(recoverStackTrace(exception, continuation), exception.cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var _ = $p;
        tmp_0 = exception;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function StackWalkingFailed() {
    StackWalkingFailed_instance = this;
  }
  protoOf(StackWalkingFailed).failedToCaptureStackFrame_fb449u_k$ = function () {
    // Inline function 'kotlin.error' call
    var tmp0_error = 'Failed to capture stack frame. This is usually happens when a coroutine is running so the frame stack is changing quickly and the coroutine debug agent is unable to capture it concurrently. You may retry running your test to see this particular trace.';
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  };
  var StackWalkingFailed_instance;
  function StackWalkingFailed_getInstance() {
    if (StackWalkingFailed_instance == null)
      new StackWalkingFailed();
    return StackWalkingFailed_instance;
  }
  function StackWalkingFailed$failedToCaptureStackFrame$ref($boundThis) {
    var l = function () {
      $boundThis.failedToCaptureStackFrame_fb449u_k$();
      return Unit_getInstance();
    };
    l.callableName = 'failedToCaptureStackFrame';
    return l;
  }
  function StackWalkingFailedFrame() {
    StackWalkingFailedFrame_instance = this;
  }
  protoOf(StackWalkingFailedFrame).get_callerFrame_pfdb95_k$ = function () {
    return null;
  };
  protoOf(StackWalkingFailedFrame).getStackTraceElement_um8m53_k$ = function () {
    var tmp = getKClass(StackWalkingFailed);
    return createStackTraceElement(tmp, StackWalkingFailed$failedToCaptureStackFrame$ref(StackWalkingFailed_getInstance()).callableName, 'StackWalkingFailed.kt', 8);
  };
  protoOf(StackWalkingFailedFrame).get_context_h02k06_k$ = function () {
    return EmptyCoroutineContext_getInstance();
  };
  protoOf(StackWalkingFailedFrame).resumeWith_hh4znz_k$ = function (result) {
    StackWalkingFailed_getInstance().failedToCaptureStackFrame_fb449u_k$();
  };
  protoOf(StackWalkingFailedFrame).resumeWith_s3a3yh_k$ = function (result) {
    return this.resumeWith_hh4znz_k$(result);
  };
  var StackWalkingFailedFrame_instance;
  function StackWalkingFailedFrame_getInstance() {
    if (StackWalkingFailedFrame_instance == null)
      new StackWalkingFailedFrame();
    return StackWalkingFailedFrame_instance;
  }
  function peekContinuation($this) {
    if ($this.currentIndex_1 === IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$())
      $this.currentIndex_1 = $this.this$0__1.lastSuspensionIndex_1;
    if ($this.currentIndex_1 < 0) {
      $this.currentIndex_1 = IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$();
      return null;
    }
    try {
      var tmp0_elvis_lhs = $this.this$0__1.suspensions_1[$this.currentIndex_1];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return StackWalkingFailedFrame_getInstance();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var result = tmp;
      var tmp1_this = $this;
      tmp1_this.currentIndex_1 = tmp1_this.currentIndex_1 - 1 | 0;
      return result;
    } catch ($p) {
      if ($p instanceof Error) {
        var _ = $p;
        return StackWalkingFailedFrame_getInstance();
      } else {
        throw $p;
      }
    }
  }
  function _get_blocks__xl8szf($this) {
    return $this.blocks_1;
  }
  function _get_continuation__y3gzck($this) {
    return $this.continuation_1;
  }
  function _get_suspensions__1l4o5($this) {
    return $this.suspensions_1;
  }
  function _set_lastSuspensionIndex__mqpay($this, _set____db54di) {
    $this.lastSuspensionIndex_1 = _set____db54di;
  }
  function _get_lastSuspensionIndex__cnzjle($this) {
    return $this.lastSuspensionIndex_1;
  }
  function _set_index__fyfqnn_0($this, _set____db54di) {
    $this.index_1 = _set____db54di;
  }
  function _get_index__g2optt_0($this) {
    return $this.index_1;
  }
  function loop($this, direct) {
    do {
      var currentIndex = $this.index_1;
      if (currentIndex === $this.blocks_1.get_size_woubt6_k$()) {
        if (!direct) {
          var tmp$ret$0;
          // Inline function 'kotlin.Companion.success' call
          var tmp0_success = Companion_getInstance();
          var tmp1_success = $this.subject_1;
          tmp$ret$0 = _Result___init__impl__xyqfz8(tmp1_success);
          resumeRootWith($this, tmp$ret$0);
          return false;
        }
        return true;
      }
      $this.index_1 = currentIndex + 1 | 0;
      var next = $this.blocks_1.get_fkrdnv_k$(currentIndex);
      try {
        var result = next($this, $this.subject_1, $this.continuation_1);
        if (result === get_COROUTINE_SUSPENDED())
          return false;
      } catch ($p) {
        if ($p instanceof Error) {
          var cause = $p;
          var tmp$ret$1;
          // Inline function 'kotlin.Companion.failure' call
          var tmp2_failure = Companion_getInstance();
          tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
          resumeRootWith($this, tmp$ret$1);
          return false;
        } else {
          throw $p;
        }
      }
    }
     while (true);
  }
  function resumeRootWith($this, result) {
    if ($this.lastSuspensionIndex_1 < 0) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('No more continuations to resume');
    }
    var next = ensureNotNull($this.suspensions_1[$this.lastSuspensionIndex_1]);
    var tmp0_this = $this;
    var tmp1 = tmp0_this.lastSuspensionIndex_1;
    tmp0_this.lastSuspensionIndex_1 = tmp1 - 1 | 0;
    $this.suspensions_1[tmp1] = null;
    if (!_Result___get_isFailure__impl__jpiriv(result)) {
      next.resumeWith_s3a3yh_k$(result);
    } else {
      var exception = recoverStackTraceBridge(ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result)), next);
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      next.resumeWith_s3a3yh_k$(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
    }
  }
  function discardLastRootContinuation($this) {
    if ($this.lastSuspensionIndex_1 < 0)
      throw IllegalStateException_init_$Create$('No more continuations to resume');
    var tmp0_this = $this;
    var tmp1 = tmp0_this.lastSuspensionIndex_1;
    tmp0_this.lastSuspensionIndex_1 = tmp1 - 1 | 0;
    $this.suspensions_1[tmp1] = null;
  }
  function addContinuation($this, continuation) {
    var tmp0_this = $this;
    tmp0_this.lastSuspensionIndex_1 = tmp0_this.lastSuspensionIndex_1 + 1 | 0;
    $this.suspensions_1[tmp0_this.lastSuspensionIndex_1] = continuation;
  }
  function SuspendFunctionGun$continuation$1(this$0) {
    this.this$0__1 = this$0;
    this.currentIndex_1 = IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$();
  }
  protoOf(SuspendFunctionGun$continuation$1).get_callerFrame_pfdb95_k$ = function () {
    var tmp = peekContinuation(this);
    return (!(tmp == null) ? isInterface(tmp, CoroutineStackFrame) : false) ? tmp : null;
  };
  protoOf(SuspendFunctionGun$continuation$1).set_currentIndex_8vvviy_k$ = function (_set____db54di) {
    this.currentIndex_1 = _set____db54di;
  };
  protoOf(SuspendFunctionGun$continuation$1).get_currentIndex_shwroi_k$ = function () {
    return this.currentIndex_1;
  };
  protoOf(SuspendFunctionGun$continuation$1).getStackTraceElement_um8m53_k$ = function () {
    return null;
  };
  protoOf(SuspendFunctionGun$continuation$1).get_context_h02k06_k$ = function () {
    var tmp0_safe_receiver = this.this$0__1.suspensions_1[this.this$0__1.lastSuspensionIndex_1];
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_context_h02k06_k$();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Not started');
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  protoOf(SuspendFunctionGun$continuation$1).resumeWith_k14j9i_k$ = function (result) {
    if (_Result___get_isFailure__impl__jpiriv(result)) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      var tmp1_failure = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result));
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
      resumeRootWith(this.this$0__1, tmp$ret$0);
      return Unit_getInstance();
    }
    loop(this.this$0__1, false);
  };
  protoOf(SuspendFunctionGun$continuation$1).resumeWith_s3a3yh_k$ = function (result) {
    return this.resumeWith_k14j9i_k$(result);
  };
  function SuspendFunctionGun(initial, context, blocks) {
    PipelineContext.call(this, context);
    this.blocks_1 = blocks;
    var tmp = this;
    tmp.continuation_1 = new SuspendFunctionGun$continuation$1(this);
    this.subject_1 = initial;
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.blocks_1.get_size_woubt6_k$();
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp_0.suspensions_1 = tmp$ret$0;
    this.lastSuspensionIndex_1 = -1;
    this.index_1 = 0;
  }
  protoOf(SuspendFunctionGun).get_coroutineContext_115oqo_k$ = function () {
    return this.continuation_1.get_context_h02k06_k$();
  };
  protoOf(SuspendFunctionGun).set_subject_r07meh_k$ = function (_set____db54di) {
    this.subject_1 = _set____db54di;
  };
  protoOf(SuspendFunctionGun).get_subject_tmjbgd_k$ = function () {
    return this.subject_1;
  };
  protoOf(SuspendFunctionGun).finish_mgihxe_k$ = function () {
    this.index_1 = this.blocks_1.get_size_woubt6_k$();
  };
  protoOf(SuspendFunctionGun).proceed_7g1848_k$ = function ($completion) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'io.ktor.util.pipeline.SuspendFunctionGun.proceed.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $completion;
      if (this.index_1 === this.blocks_1.get_size_woubt6_k$()) {
        tmp$ret$0 = this.subject_1;
        break $l$block_0;
      }
      addContinuation(this, intercepted(tmp0__anonymous__q1qw7t));
      if (loop(this, true)) {
        discardLastRootContinuation(this);
        tmp$ret$0 = this.subject_1;
        break $l$block_0;
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    var tmp0 = tmp$ret$0;
    return tmp0;
  };
  protoOf(SuspendFunctionGun).proceedWith_slnzfn_k$ = function (subject, $completion) {
    this.subject_1 = subject;
    var tmp0 = this.proceed_7g1848_k$($completion);
    return tmp0;
  };
  protoOf(SuspendFunctionGun).execute_kr9z5o_k$ = function (initial, $completion) {
    this.index_1 = 0;
    if (this.index_1 === this.blocks_1.get_size_woubt6_k$())
      return initial;
    this.subject_1 = initial;
    if (this.lastSuspensionIndex_1 >= 0)
      throw IllegalStateException_init_$Create$('Already started');
    var tmp0 = this.proceed_7g1848_k$($completion);
    return tmp0;
  };
  function TypeInfo(type, reifiedType, kotlinType) {
    kotlinType = kotlinType === VOID ? null : kotlinType;
    this.type_1 = type;
    this.reifiedType_1 = reifiedType;
    this.kotlinType_1 = kotlinType;
  }
  protoOf(TypeInfo).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(TypeInfo).get_reifiedType_xlupm1_k$ = function () {
    return this.reifiedType_1;
  };
  protoOf(TypeInfo).get_kotlinType_flgmsk_k$ = function () {
    return this.kotlinType_1;
  };
  protoOf(TypeInfo).component1_7eebsc_k$ = function () {
    return this.type_1;
  };
  protoOf(TypeInfo).component2_7eebsb_k$ = function () {
    return this.reifiedType_1;
  };
  protoOf(TypeInfo).component3_7eebsa_k$ = function () {
    return this.kotlinType_1;
  };
  protoOf(TypeInfo).copy_gu69mi_k$ = function (type, reifiedType, kotlinType) {
    return new TypeInfo(type, reifiedType, kotlinType);
  };
  protoOf(TypeInfo).copy$default_y4uyp_k$ = function (type, reifiedType, kotlinType, $super) {
    type = type === VOID ? this.type_1 : type;
    reifiedType = reifiedType === VOID ? this.reifiedType_1 : reifiedType;
    kotlinType = kotlinType === VOID ? this.kotlinType_1 : kotlinType;
    return $super === VOID ? this.copy_gu69mi_k$(type, reifiedType, kotlinType) : $super.copy_gu69mi_k$.call(this, type, reifiedType, kotlinType);
  };
  protoOf(TypeInfo).toString = function () {
    return 'TypeInfo(type=' + this.type_1 + ', reifiedType=' + this.reifiedType_1 + ', kotlinType=' + this.kotlinType_1 + ')';
  };
  protoOf(TypeInfo).hashCode = function () {
    var result = this.type_1.hashCode();
    result = imul(result, 31) + hashCode(this.reifiedType_1) | 0;
    result = imul(result, 31) + (this.kotlinType_1 == null ? 0 : hashCode(this.kotlinType_1)) | 0;
    return result;
  };
  protoOf(TypeInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypeInfo))
      return false;
    var tmp0_other_with_cast = other instanceof TypeInfo ? other : THROW_CCE();
    if (!this.type_1.equals(tmp0_other_with_cast.type_1))
      return false;
    if (!equals(this.reifiedType_1, tmp0_other_with_cast.reifiedType_1))
      return false;
    if (!equals(this.kotlinType_1, tmp0_other_with_cast.kotlinType_1))
      return false;
    return true;
  };
  function AttributesJsFn(concurrent) {
    concurrent = concurrent === VOID ? false : concurrent;
    return new AttributesJs();
  }
  function _get_map__e6co1h($this) {
    return $this.map_1;
  }
  function AttributesJs() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.map_1 = tmp$ret$0;
  }
  protoOf(AttributesJs).getOrNull_gb0h81_k$ = function (key) {
    var tmp = this.map_1.get_1mhr4y_k$(key);
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(AttributesJs).contains_z4wlmt_k$ = function (key) {
    return this.map_1.containsKey_wgk31w_k$(key);
  };
  protoOf(AttributesJs).put_btom12_k$ = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.map_1;
    tmp0_set.put_3mhbri_k$(key, value);
  };
  protoOf(AttributesJs).remove_5z2j18_k$ = function (key) {
    this.map_1.remove_8hbkc0_k$(key);
  };
  protoOf(AttributesJs).computeIfAbsent_ywdpog_k$ = function (key, block) {
    var tmp0_safe_receiver = this.map_1.get_1mhr4y_k$(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return isObject(tmp0_safe_receiver) ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$1;
    // Inline function 'kotlin.also' call
    var tmp0_also = block();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.AttributesJs.computeIfAbsent.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.map_1;
    tmp0_set.put_3mhbri_k$(key, tmp0_also);
    tmp$ret$1 = tmp0_also;
    return tmp$ret$1;
  };
  protoOf(AttributesJs).get_allKeys_dton90_k$ = function () {
    return toList(this.map_1.get_keys_wop4xp_k$());
  };
  function unmodifiable(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function get__crypto() {
    _init_properties_CryptoJs_kt__3vpuru();
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = _crypto$factory();
    tmp$ret$0 = _crypto$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  var _crypto$delegate;
  function _crypto$delegate$lambda() {
    _init_properties_CryptoJs_kt__3vpuru();
    var tmp0_subject = get_platform(PlatformUtils_getInstance());
    var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
    return tmp0 === 3 ? eval('require')('crypto') : window ? window.crypto ? window.crypto : window.msCrypto : self.crypto;
  }
  function _crypto$factory() {
    return getPropertyCallableRef('_crypto', 0, KProperty0, function () {
      return get__crypto();
    }, null);
  }
  var properties_initialized_CryptoJs_kt_linsrw;
  function _init_properties_CryptoJs_kt__3vpuru() {
    if (properties_initialized_CryptoJs_kt_linsrw) {
    } else {
      properties_initialized_CryptoJs_kt_linsrw = true;
      _crypto$delegate = lazy(_crypto$delegate$lambda);
    }
  }
  function get_platform(_this__u8e3s4) {
    var tmp = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
    var hasNodeApi = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
    return hasNodeApi ? Platform_Node_getInstance() : Platform_Browser_getInstance();
  }
  function get_isDevelopmentMode(_this__u8e3s4) {
    return false;
  }
  function get_isNewMemoryModel(_this__u8e3s4) {
    return true;
  }
  function CoroutineStackFrame() {
  }
  function createStackTraceElement(kClass, methodName, fileName, lineNumber) {
    return new Object();
  }
  function GMTDate_0(timestamp) {
    timestamp = timestamp === VOID ? null : timestamp;
    var tmp0_safe_receiver = timestamp;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toDouble_ygsx0s_k$();
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'io.ktor.util.date.GMTDate.<anonymous>' call
      tmp$ret$0 = new Date(tmp1_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp2_elvis_lhs = tmp;
    var date = tmp2_elvis_lhs == null ? new Date() : tmp2_elvis_lhs;
    if (isNaN_0(date.getTime()))
      throw new InvalidTimestampException(ensureNotNull(timestamp));
    var tmp$ret$2;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var dayOfWeek = Companion_getInstance_2().from_btzjl5_k$((date.getUTCDay() + 6 | 0) % 7 | 0);
    var month = Companion_getInstance_3().from_btzjl5_k$(date.getUTCMonth());
    return new GMTDate(date.getUTCSeconds(), date.getUTCMinutes(), date.getUTCHours(), dayOfWeek, date.getUTCDate(), date.getUTCFullYear(), month, date.getUTCFullYear(), numberToLong(date.getTime()));
  }
  function InvalidTimestampException(timestamp) {
    IllegalStateException_init_$Init$('Invalid date timestamp exception: ' + toString_0(timestamp), this);
    captureStack(this, InvalidTimestampException);
  }
  function KtorSimpleLogger(name) {
    return new KtorSimpleLogger$1();
  }
  function KtorSimpleLogger$1() {
  }
  protoOf(KtorSimpleLogger$1).error_3u4tx2_k$ = function (message) {
    console.error(message);
  };
  protoOf(KtorSimpleLogger$1).error_6edztm_k$ = function (message, cause) {
    console.error(message + ', cause: ' + cause);
  };
  protoOf(KtorSimpleLogger$1).warn_tjfcss_k$ = function (message) {
    console.warn(message);
  };
  protoOf(KtorSimpleLogger$1).warn_py06sc_k$ = function (message, cause) {
    console.warn(message + ', cause: ' + cause);
  };
  protoOf(KtorSimpleLogger$1).info_nf2s9o_k$ = function (message) {
    console.info(message);
  };
  protoOf(KtorSimpleLogger$1).info_djzsc4_k$ = function (message, cause) {
    console.info(message + ', cause: ' + cause);
  };
  protoOf(KtorSimpleLogger$1).debug_1nsf3z_k$ = function (message) {
    console.debug('DEBUG: ' + message);
  };
  protoOf(KtorSimpleLogger$1).debug_8ayuxd_k$ = function (message, cause) {
    console.debug('DEBUG: ' + message + ', cause: ' + cause);
  };
  protoOf(KtorSimpleLogger$1).trace_jqeghf_k$ = function (message) {
    console.debug('TRACE: ' + message);
  };
  protoOf(KtorSimpleLogger$1).trace_d3yjwj_k$ = function (message, cause) {
    console.debug('TRACE: ' + message + ', cause: ' + cause);
  };
  function Logger() {
  }
  function get_DISABLE_SFG() {
    return DISABLE_SFG;
  }
  var DISABLE_SFG;
  function withCause(_this__u8e3s4, cause) {
    return _this__u8e3s4;
  }
  function instanceOf(_this__u8e3s4, type) {
    return type.isInstance_6tn68w_k$(_this__u8e3s4);
  }
  function Type() {
  }
  function typeInfoImpl(reifiedType, kClass, kType) {
    return new TypeInfo(kClass, reifiedType, kType);
  }
  function JsType() {
    JsType_instance = this;
  }
  var JsType_instance;
  function JsType_getInstance() {
    if (JsType_instance == null)
      new JsType();
    return JsType_instance;
  }
  //region block: post-declaration
  protoOf(_no_name_provided__qut3iv).get_j1ktw6_k$ = get;
  protoOf(_no_name_provided__qut3iv).fold_iindx8_k$ = fold;
  protoOf(_no_name_provided__qut3iv).minusKey_y21q55_k$ = minusKey;
  protoOf(_no_name_provided__qut3iv).plus_rgw9wi_k$ = plus;
  protoOf(AttributesJs).get_ny5huj_k$ = get_0;
  protoOf(AttributesJs).take_o7aol2_k$ = take;
  protoOf(AttributesJs).takeOrNull_27pbq8_k$ = takeOrNull;
  //endregion
  //region block: init
  BASE64_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  BASE64_PAD = _Char___init__impl__6a9atx(61);
  BASE64_MASK = 63;
  DISABLE_SFG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = toByteArray;
  _.$_$.b = JsType_getInstance;
  _.$_$.c = PlatformUtils_getInstance;
  _.$_$.d = CopyOnWriteHashMap;
  _.$_$.e = GMTDate_0;
  _.$_$.f = KtorSimpleLogger;
  _.$_$.g = PipelineContext;
  _.$_$.h = PipelinePhase;
  _.$_$.i = Pipeline;
  _.$_$.j = instanceOf;
  _.$_$.k = typeInfoImpl;
  _.$_$.l = AttributeKey;
  _.$_$.m = AttributesJsFn;
  _.$_$.n = SilentSupervisor;
  _.$_$.o = contains_0;
  _.$_$.p = contains;
  _.$_$.q = forEach;
  _.$_$.r = get_1;
  _.$_$.s = StringValuesBuilderImpl;
  _.$_$.t = StringValuesBuilder;
  _.$_$.u = StringValuesImpl;
  _.$_$.v = StringValues;
  _.$_$.w = appendAll;
  _.$_$.x = caseInsensitiveMap;
  _.$_$.y = decodeBase64Bytes;
  _.$_$.z = flattenEntries;
  _.$_$.a1 = isLowerCase;
  _.$_$.b1 = get_platform;
  _.$_$.c1 = putAll;
  _.$_$.d1 = toCharArray;
  _.$_$.e1 = toLowerCasePreservingASCIIRules;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-utils.js.map
