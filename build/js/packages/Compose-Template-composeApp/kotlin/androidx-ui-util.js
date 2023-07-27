(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-util'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-ui-util'.");
    }
    root['androidx-ui-util'] = factory(typeof this['androidx-ui-util'] === 'undefined' ? {} : this['androidx-ui-util'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Long = kotlin_kotlin.$_$.kk;
  var toLong = kotlin_kotlin.$_$.pf;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.v5;
  var floatFromBits = kotlin_kotlin.$_$.ge;
  var Unit_getInstance = kotlin_kotlin.$_$.k6;
  var toBits = kotlin_kotlin.$_$.bm;
  var get_lastIndex = kotlin_kotlin.$_$.fa;
  var compareTo = kotlin_kotlin.$_$.ae;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.q;
  var roundToInt = kotlin_kotlin.$_$.xf;
  //endregion
  //region block: pre-declaration
  //endregion
  function unpackInt1(value) {
    return value.shr_wjue3g_k$(32).toInt_1tsl84_k$();
  }
  function unpackInt2(value) {
    return value.and_jhajnj_k$(new Long(-1, 0)).toInt_1tsl84_k$();
  }
  function packInts(val1, val2) {
    return toLong(val1).shl_po5ip6_k$(32).or_s401rn_k$(toLong(val2).and_jhajnj_k$(new Long(-1, 0)));
  }
  function unpackFloat1(value) {
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = value.shr_wjue3g_k$(32).toInt_1tsl84_k$();
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    return tmp$ret$0;
  }
  function unpackFloat2(value) {
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = value.and_jhajnj_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    return tmp$ret$0;
  }
  function packFloats(val1, val2) {
    var v1 = toLong(toBits(val1));
    var v2 = toLong(toBits(val2));
    return v1.shl_po5ip6_k$(32).or_s401rn_k$(v2.and_jhajnj_k$(new Long(-1, 0)));
  }
  function fastMaxBy(_this__u8e3s4, selector) {
    // Inline function 'kotlin.contracts.contract' call
    if (_this__u8e3s4.isEmpty_y1axqb_k$())
      return null;
    var maxElem = _this__u8e3s4.get_fkrdnv_k$(0);
    var maxValue = selector(maxElem);
    var inductionVariable = 1;
    var last = get_lastIndex(_this__u8e3s4);
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var e = _this__u8e3s4.get_fkrdnv_k$(i);
        var v = selector(e);
        if (compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (!(i === last));
    return maxElem;
  }
  function fastForEach(_this__u8e3s4, action) {
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_fkrdnv_k$(index);
        action(item);
      }
       while (inductionVariable <= last);
  }
  function fastAny(_this__u8e3s4, predicate) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
        if (predicate(item))
          return true;
      }
       while (inductionVariable <= last);
    return false;
  }
  function fastForEachIndexed(_this__u8e3s4, action) {
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_fkrdnv_k$(index);
        action(index, item);
      }
       while (inductionVariable <= last);
  }
  function fastForEachReversed(_this__u8e3s4, action) {
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var item = _this__u8e3s4.get_fkrdnv_k$(index);
        action(item);
      }
       while (0 <= inductionVariable);
  }
  function fastAll(_this__u8e3s4, predicate) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.util.fastAll.<anonymous>' call
        if (!predicate(item))
          return false;
      }
       while (inductionVariable <= last);
    return true;
  }
  function fastMap(_this__u8e3s4, transform) {
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp0_plusAssign = transform(item);
        target.add_1j60pz_k$(tmp0_plusAssign);
      }
       while (inductionVariable <= last);
    return target;
  }
  function fastFirstOrNull(_this__u8e3s4, predicate) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.util.fastFirstOrNull.<anonymous>' call
        if (predicate(item))
          return item;
      }
       while (inductionVariable <= last);
    return null;
  }
  function fastSumBy(_this__u8e3s4, selector) {
    // Inline function 'kotlin.contracts.contract' call
    var sum = 0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.ui.util.fastSumBy.<anonymous>' call
        sum = sum + selector(item) | 0;
      }
       while (inductionVariable <= last);
    return sum;
  }
  function lerp(start, stop, fraction) {
    return (1 - fraction) * start + fraction * stop;
  }
  function lerp_0(start, stop, fraction) {
    return start + roundToInt((stop - start | 0) * fraction) | 0;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = lerp;
  _.$_$.b = lerp_0;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-ui-util.js.map
