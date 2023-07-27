(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-utils.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-utils.js'));
  else {
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-events'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-events'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-events'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-events'.");
    }
    if (typeof this['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-events'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-events'.");
    }
    root['ktor-ktor-events'] = factory(typeof this['ktor-ktor-events'] === 'undefined' ? {} : this['ktor-ktor-events'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-utils']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_kotlin, kotlin_io_ktor_ktor_utils) {
  'use strict';
  //region block: imports
  var LinkedListNode = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var protoOf = kotlin_kotlin.$_$.mf;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z1;
  var classMeta = kotlin_kotlin.$_$.zd;
  var VOID = kotlin_kotlin.$_$.jm;
  var setMetadataFor = kotlin_kotlin.$_$.nf;
  var LinkedListHead = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var CopyOnWriteHashMap = kotlin_io_ktor_ktor_utils.$_$.d;
  var equals = kotlin_kotlin.$_$.de;
  var THROW_CCE = kotlin_kotlin.$_$.sk;
  var addSuppressed = kotlin_kotlin.$_$.fl;
  var Unit_getInstance = kotlin_kotlin.$_$.k6;
  //endregion
  //region block: pre-declaration
  setMetadataFor(HandlerRegistration, 'HandlerRegistration', classMeta, LinkedListNode, [LinkedListNode, DisposableHandle]);
  setMetadataFor(Events, 'Events', classMeta);
  setMetadataFor(EventDefinition, 'EventDefinition', classMeta);
  //endregion
  function _get_handlers__pkfn2a($this) {
    return $this.handlers_1;
  }
  function HandlerRegistration(handler) {
    LinkedListNode.call(this);
    this.handler_1 = handler;
  }
  protoOf(HandlerRegistration).get_handler_cq14kh_k$ = function () {
    return this.handler_1;
  };
  protoOf(HandlerRegistration).dispose_3n44we_k$ = function () {
    this.remove_fgfybg_k$();
  };
  function Events$subscribe$lambda(it) {
    return new LinkedListHead();
  }
  function Events() {
    this.handlers_1 = new CopyOnWriteHashMap();
  }
  protoOf(Events).subscribe_uolsjj_k$ = function (definition, handler) {
    var registration = new HandlerRegistration(handler);
    this.handlers_1.computeIfAbsent_uwu79p_k$(definition, Events$subscribe$lambda).addLast_uyctnf_k$(registration);
    return registration;
  };
  protoOf(Events).unsubscribe_4y4hkn_k$ = function (definition, handler) {
    var tmp0_safe_receiver = this.handlers_1.get_1mhr4y_k$(definition);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
      var cur = tmp0_safe_receiver.get__next_inmai1_k$();
      while (!equals(cur, tmp0_safe_receiver)) {
        if (cur instanceof HandlerRegistration) {
          // Inline function 'io.ktor.events.Events.unsubscribe.<anonymous>' call
          var tmp0__anonymous__q1qw7t = cur;
          if (equals(tmp0__anonymous__q1qw7t.handler_1, handler)) {
            tmp0__anonymous__q1qw7t.remove_fgfybg_k$();
          }
        }
        cur = cur.get__next_inmai1_k$();
      }
    }
  };
  protoOf(Events).raise_ojaa37_k$ = function (definition, value) {
    var exception = null;
    var tmp0_safe_receiver = this.handlers_1.get_1mhr4y_k$(definition);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
      var cur = tmp0_safe_receiver.get__next_inmai1_k$();
      while (!equals(cur, tmp0_safe_receiver)) {
        if (cur instanceof HandlerRegistration) {
          // Inline function 'io.ktor.events.Events.raise.<anonymous>' call
          var tmp0__anonymous__q1qw7t = cur;
          try {
            var tmp = tmp0__anonymous__q1qw7t.handler_1;
            (typeof tmp === 'function' ? tmp : THROW_CCE())(value);
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              var tmp0_safe_receiver_0 = exception;
              var tmp_0;
              if (tmp0_safe_receiver_0 == null) {
                tmp_0 = null;
              } else {
                addSuppressed(tmp0_safe_receiver_0, e);
                tmp_0 = Unit_getInstance();
              }
              var tmp1_elvis_lhs = tmp_0;
              if (tmp1_elvis_lhs == null) {
                var tmp$ret$0;
                // Inline function 'kotlin.run' call
                // Inline function 'kotlin.contracts.contract' call
                exception = e;
                tmp$ret$0 = Unit_getInstance();
              } else {
              }
            } else {
              throw $p;
            }
          }
        }
        cur = cur.get__next_inmai1_k$();
      }
    }
    var tmp1_safe_receiver = exception;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp1_safe_receiver;
    }
  };
  function EventDefinition() {
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = EventDefinition;
  _.$_$.b = Events;
  //endregion
  return _;
}));
