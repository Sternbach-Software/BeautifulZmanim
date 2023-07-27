(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'libres-libres-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'libres-libres-core'.");
    }
    root['libres-libres-core'] = factory(typeof this['libres-libres-core'] === 'undefined' ? {} : this['libres-libres-core'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Regex_init_$Create$ = kotlin_kotlin.$_$.m1;
  var Unit_getInstance = kotlin_kotlin.$_$.k6;
  //endregion
  //region block: pre-declaration
  //endregion
  function get_RegularFormatRegex() {
    _init_properties_FormattedString_kt__63a5dx();
    return RegularFormatRegex;
  }
  var RegularFormatRegex;
  var properties_initialized_FormattedString_kt_yermgz;
  function _init_properties_FormattedString_kt__63a5dx() {
    if (properties_initialized_FormattedString_kt_yermgz) {
    } else {
      properties_initialized_FormattedString_kt_yermgz = true;
      var tmp$ret$0;
      // Inline function 'kotlin.text.toRegex' call
      tmp$ret$0 = Regex_init_$Create$('%(\\d)\\$[s]');
      RegularFormatRegex = tmp$ret$0;
    }
  }
  return _;
}));
