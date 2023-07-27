(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'uuid-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'uuid-js-ir'.");
    }
    root['uuid-js-ir'] = factory(typeof this['uuid-js-ir'] === 'undefined' ? {} : this['uuid-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var until = kotlin_kotlin.$_$.xg;
  var listOf = kotlin_kotlin.$_$.qa;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.v3;
  var Char__rangeTo_impl_tkncvp = kotlin_kotlin.$_$.b4;
  var plus = kotlin_kotlin.$_$.xa;
  //endregion
  //region block: pre-declaration
  //endregion
  function get_UUID_CHAR_RANGES() {
    _init_properties_uuid_kt__7swked();
    return UUID_CHAR_RANGES;
  }
  var UUID_CHAR_RANGES;
  function get_UUID_HYPHEN_INDICES() {
    _init_properties_uuid_kt__7swked();
    return UUID_HYPHEN_INDICES;
  }
  var UUID_HYPHEN_INDICES;
  function get_UUID_CHARS() {
    _init_properties_uuid_kt__7swked();
    return UUID_CHARS;
  }
  var UUID_CHARS;
  var properties_initialized_uuid_kt_pyvynx;
  function _init_properties_uuid_kt__7swked() {
    if (properties_initialized_uuid_kt_pyvynx) {
    } else {
      properties_initialized_uuid_kt_pyvynx = true;
      UUID_CHAR_RANGES = listOf([until(0, 8), until(9, 13), until(14, 18), until(19, 23), until(24, 36)]);
      UUID_HYPHEN_INDICES = listOf([8, 13, 18, 23]);
      UUID_CHARS = plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(102)));
    }
  }
  return _;
}));
