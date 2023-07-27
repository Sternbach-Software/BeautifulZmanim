(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'insetsx-insetsx'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'insetsx-insetsx'.");
    }
    root['insetsx-insetsx'] = factory(typeof this['insetsx-insetsx'] === 'undefined' ? {} : this['insetsx-insetsx'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.mf;
  var interfaceMeta = kotlin_kotlin.$_$.oe;
  var VOID = kotlin_kotlin.$_$.jm;
  var setMetadataFor = kotlin_kotlin.$_$.nf;
  var objectMeta = kotlin_kotlin.$_$.lf;
  var classMeta = kotlin_kotlin.$_$.zd;
  //endregion
  //region block: pre-declaration
  setMetadataFor(WindowInsetsController, 'WindowInsetsController', interfaceMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(SystemBarsBehavior, 'SystemBarsBehavior', classMeta);
  //endregion
  function WindowInsetsController() {
  }
  function _get_instance__ozkija($this) {
    return $this.instance_1;
  }
  function Companion() {
    Companion_instance = this;
    this.instance_1 = new SystemBarsBehavior();
    this.Default_1 = this.instance_1;
    this.Immersive_1 = this.instance_1;
  }
  protoOf(Companion).get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  protoOf(Companion).get_Immersive_ak65u6_k$ = function () {
    return this.Immersive_1;
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function get_$stableprop() {
    return 0;
  }
  function SystemBarsBehavior() {
    Companion_getInstance();
    this.$stable_1 = 0;
  }
  function get_value() {
    return value;
  }
  var value;
  //region block: init
  value = null;
  //endregion
  return _;
}));
