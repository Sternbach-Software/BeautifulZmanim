(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json-js-ir'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json-js-ir'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-json-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-json-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.y5;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var protoOf = kotlin_kotlin.$_$.mf;
  var classMeta = kotlin_kotlin.$_$.zd;
  var VOID = kotlin_kotlin.$_$.jm;
  var setMetadataFor = kotlin_kotlin.$_$.nf;
  var Unit_getInstance = kotlin_kotlin.$_$.k6;
  var THROW_CCE = kotlin_kotlin.$_$.sk;
  var isObject = kotlin_kotlin.$_$.ze;
  var Companion_getInstance = kotlin_kotlin.$_$.h6;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.i6;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.g6;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.j6;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var setOf = kotlin_kotlin.$_$.jb;
  var numberToChar = kotlin_kotlin.$_$.gf;
  var fillArrayVal = kotlin_kotlin.$_$.fe;
  var Char = kotlin_kotlin.$_$.ak;
  var toByte = kotlin_kotlin.$_$.of;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Key, 'Key', classMeta);
  setMetadataFor(DescriptorSchemaCache, 'DescriptorSchemaCache', classMeta);
  //endregion
  function get_jsonUnquotedLiteralDescriptor() {
    _init_properties_JsonElement_kt__7cbdc2();
    return jsonUnquotedLiteralDescriptor;
  }
  var jsonUnquotedLiteralDescriptor;
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (properties_initialized_JsonElement_kt_abxy8s) {
    } else {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_getInstance()));
    }
  }
  function get_JsonDeserializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonDeserializationNamesKey;
  }
  var JsonDeserializationNamesKey;
  function get_JsonSerializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonSerializationNamesKey;
  }
  var JsonSerializationNamesKey;
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function _init_properties_JsonNamesMap_kt__cbbp0k() {
    if (properties_initialized_JsonNamesMap_kt_ljpf42) {
    } else {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonDeserializationNamesKey = new Key();
      JsonSerializationNamesKey = new Key();
    }
  }
  function _get_map__e6co1h($this) {
    return $this.map_1;
  }
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.map_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).set_rrqmqe_k$ = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.map_1;
    var value_0 = tmp0_getOrPut.get_1mhr4y_k$(descriptor);
    var tmp;
    if (value_0 == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      tmp$ret$0 = createMapForCache(2);
      var answer = tmp$ret$0;
      tmp0_getOrPut.put_3mhbri_k$(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    tmp$ret$1 = tmp;
    var tmp1_set = tmp$ret$1;
    var tmp2_set = key instanceof Key ? key : THROW_CCE();
    var tmp3_set = isObject(value) ? value : THROW_CCE();
    tmp1_set.put_3mhbri_k$(tmp2_set, tmp3_set);
  };
  protoOf(DescriptorSchemaCache).getOrPut_nie706_k$ = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.get_kuyzdy_k$(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.set_rrqmqe_k$(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).get_kuyzdy_k$ = function (descriptor, key) {
    var tmp0_safe_receiver = this.map_1.get_1mhr4y_k$(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.get_1mhr4y_k$(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return isObject(tmp_0) ? tmp_0 : null;
  };
  function get_unsignedNumberDescriptors() {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    } else {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_0(Companion_getInstance()).get_descriptor_wjt6a0_k$(), serializer_1(Companion_getInstance_0()).get_descriptor_wjt6a0_k$(), serializer_2(Companion_getInstance_1()).get_descriptor_wjt6a0_k$(), serializer_3(Companion_getInstance_2()).get_descriptor_wjt6a0_k$()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  function get_ESCAPE_MARKERS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_MARKERS;
  }
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    _init_properties_StringOps_kt__fcy1db();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 48;
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 97;
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (properties_initialized_StringOps_kt_wzaea7) {
    } else {
      properties_initialized_StringOps_kt_wzaea7 = true;
      var tmp$ret$7;
      // Inline function 'kotlin.apply' call
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(93), null);
      var tmp0_apply = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_STRINGS.<anonymous>' call
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          tmp0_apply[c] = '\\u' + new Char(c1) + new Char(c2) + new Char(c3) + new Char(c4);
        }
         while (inductionVariable <= 31);
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 34;
      tmp0_apply[tmp$ret$1] = '\\"';
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = 92;
      tmp0_apply[tmp$ret$2] = '\\\\';
      var tmp$ret$3;
      // Inline function 'kotlin.code' call
      tmp$ret$3 = 9;
      tmp0_apply[tmp$ret$3] = '\\t';
      var tmp$ret$4;
      // Inline function 'kotlin.code' call
      tmp$ret$4 = 8;
      tmp0_apply[tmp$ret$4] = '\\b';
      var tmp$ret$5;
      // Inline function 'kotlin.code' call
      tmp$ret$5 = 10;
      tmp0_apply[tmp$ret$5] = '\\n';
      var tmp$ret$6;
      // Inline function 'kotlin.code' call
      tmp$ret$6 = 13;
      tmp0_apply[tmp$ret$6] = '\\r';
      tmp0_apply[12] = '\\f';
      tmp$ret$7 = tmp0_apply;
      ESCAPE_STRINGS = tmp$ret$7;
      var tmp$ret$13;
      // Inline function 'kotlin.apply' call
      var tmp0_apply_0 = new Int8Array(93);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_MARKERS.<anonymous>' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          tmp0_apply_0[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      var tmp$ret$0_0;
      // Inline function 'kotlin.code' call
      tmp$ret$0_0 = 34;
      var tmp = tmp$ret$0_0;
      var tmp$ret$1_0;
      // Inline function 'kotlin.code' call
      tmp$ret$1_0 = 34;
      tmp0_apply_0[tmp] = toByte(tmp$ret$1_0);
      var tmp$ret$2_0;
      // Inline function 'kotlin.code' call
      tmp$ret$2_0 = 92;
      var tmp_0 = tmp$ret$2_0;
      var tmp$ret$3_0;
      // Inline function 'kotlin.code' call
      tmp$ret$3_0 = 92;
      tmp0_apply_0[tmp_0] = toByte(tmp$ret$3_0);
      var tmp$ret$4_0;
      // Inline function 'kotlin.code' call
      tmp$ret$4_0 = 9;
      var tmp_1 = tmp$ret$4_0;
      var tmp$ret$5_0;
      // Inline function 'kotlin.code' call
      tmp$ret$5_0 = 116;
      tmp0_apply_0[tmp_1] = toByte(tmp$ret$5_0);
      var tmp$ret$6_0;
      // Inline function 'kotlin.code' call
      tmp$ret$6_0 = 8;
      var tmp_2 = tmp$ret$6_0;
      var tmp$ret$7_0;
      // Inline function 'kotlin.code' call
      tmp$ret$7_0 = 98;
      tmp0_apply_0[tmp_2] = toByte(tmp$ret$7_0);
      var tmp$ret$8;
      // Inline function 'kotlin.code' call
      tmp$ret$8 = 10;
      var tmp_3 = tmp$ret$8;
      var tmp$ret$9;
      // Inline function 'kotlin.code' call
      tmp$ret$9 = 110;
      tmp0_apply_0[tmp_3] = toByte(tmp$ret$9);
      var tmp$ret$10;
      // Inline function 'kotlin.code' call
      tmp$ret$10 = 13;
      var tmp_4 = tmp$ret$10;
      var tmp$ret$11;
      // Inline function 'kotlin.code' call
      tmp$ret$11 = 114;
      tmp0_apply_0[tmp_4] = toByte(tmp$ret$11);
      var tmp$ret$12;
      // Inline function 'kotlin.code' call
      tmp$ret$12 = 102;
      tmp0_apply_0[12] = toByte(tmp$ret$12);
      tmp$ret$13 = tmp0_apply_0;
      ESCAPE_MARKERS = tmp$ret$13;
    }
  }
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  return _;
}));
