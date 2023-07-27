(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-runtime.js', './kotlin-kotlin-stdlib-js-ir.js', './voyager-voyager-core.js', './androidx-runtime-saveable.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-runtime.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./voyager-voyager-core.js'), require('./androidx-runtime-saveable.js'));
  else {
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'voyager-voyager-navigator'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'voyager-voyager-navigator'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'voyager-voyager-navigator'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'voyager-voyager-navigator'.");
    }
    if (typeof this['voyager-voyager-core'] === 'undefined') {
      throw new Error("Error loading module 'voyager-voyager-navigator'. Its dependency 'voyager-voyager-core' was not found. Please, check whether 'voyager-voyager-core' is loaded prior to 'voyager-voyager-navigator'.");
    }
    if (typeof this['androidx-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'voyager-voyager-navigator'. Its dependency 'androidx-runtime-saveable' was not found. Please, check whether 'androidx-runtime-saveable' is loaded prior to 'voyager-voyager-navigator'.");
    }
    root['voyager-voyager-navigator'] = factory(typeof this['voyager-voyager-navigator'] === 'undefined' ? {} : this['voyager-voyager-navigator'], this['androidx-runtime'], this['kotlin-kotlin-stdlib-js-ir'], this['voyager-voyager-core'], this['androidx-runtime-saveable']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_cafe_adriel_voyager_voyager_core, kotlin_org_jetbrains_compose_runtime_runtime_saveable) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var startsWith = kotlin_kotlin.$_$.bj;
  var Unit_getInstance = kotlin_kotlin.$_$.k6;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var VOID = kotlin_kotlin.$_$.jm;
  var toMutableStateStack = kotlin_cafe_adriel_voyager_voyager_core.$_$.f;
  var derivedStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var ThreadSafeSet_init_$Create$ = kotlin_cafe_adriel_voyager_voyager_core.$_$.i;
  var protoOf = kotlin_kotlin.$_$.mf;
  var THROW_CCE = kotlin_kotlin.$_$.sk;
  var Screen = kotlin_cafe_adriel_voyager_voyager_core.$_$.d;
  var isInterface = kotlin_kotlin.$_$.xe;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var ScreenModelStore_getInstance = kotlin_cafe_adriel_voyager_voyager_core.$_$.k;
  var ScreenLifecycleStore_getInstance = kotlin_cafe_adriel_voyager_voyager_core.$_$.j;
  var asSequence = kotlin_kotlin.$_$.x7;
  var filter = kotlin_kotlin.$_$.ih;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var rememberScreenLifecycleOwner$composable = kotlin_cafe_adriel_voyager_voyager_core.$_$.c;
  var getNavigatorScreenLifecycleOwner$composable = kotlin_cafe_adriel_voyager_voyager_core.$_$.b;
  var listOf = kotlin_kotlin.$_$.pa;
  var plus = kotlin_kotlin.$_$.ya;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j2;
  var isObject = kotlin_kotlin.$_$.ze;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var MultipleProvideBeforeScreenContent$composable = kotlin_cafe_adriel_voyager_voyager_core.$_$.a;
  var Stack = kotlin_cafe_adriel_voyager_voyager_core.$_$.e;
  var classMeta = kotlin_kotlin.$_$.zd;
  var setMetadataFor = kotlin_kotlin.$_$.nf;
  var KProperty1 = kotlin_kotlin.$_$.ch;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ke;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var interfaceMeta = kotlin_kotlin.$_$.oe;
  var listSaver = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.f;
  var StackEvent_Pop_getInstance = kotlin_cafe_adriel_voyager_voyager_core.$_$.g;
  var StackEvent_Replace_getInstance = kotlin_cafe_adriel_voyager_voyager_core.$_$.h;
  var setOf = kotlin_kotlin.$_$.jb;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Navigator, 'Navigator', classMeta, VOID, [Stack]);
  setMetadataFor(NavigatorDisposeBehavior, 'NavigatorDisposeBehavior', classMeta);
  setMetadataFor(NavigatorSaver, 'NavigatorSaver', interfaceMeta);
  setMetadataFor(sam$cafe_adriel_voyager_navigator_NavigatorSaver$0, 'sam$cafe_adriel_voyager_navigator_NavigatorSaver$0', classMeta, VOID, [NavigatorSaver]);
  //endregion
  function get_LocalNavigator() {
    _init_properties_Navigator_kt__ww6let();
    return LocalNavigator;
  }
  var LocalNavigator;
  function get_MaxSupportedRadix() {
    _init_properties_Navigator_kt__ww6let();
    return MaxSupportedRadix;
  }
  var MaxSupportedRadix;
  function _get_stateHolder__mr3l2k($this) {
    return $this.stateHolder_1;
  }
  function _get_stateKeys__ppd06s($this) {
    return $this.stateKeys_1;
  }
  function popUntilRoot($this, navigator) {
    var $this_0 = $this;
    var navigator_0 = navigator;
    $l$1: do {
      $l$0: do {
        navigator_0.popAll_u9cw1r_k$();
        if (!(navigator_0.parent_1 == null)) {
          var tmp0 = $this_0;
          var tmp1 = navigator_0.parent_1;
          $this_0 = tmp0;
          navigator_0 = tmp1;
          continue $l$0;
        }
        break $l$1;
      }
       while (false);
    }
     while (true);
  }
  function get_$stableprop() {
    return 8;
  }
  function saveableState$composable$provideSaveableState(stateKey, this$0, suffixKey, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(645671963);
    if (isTraceInProgress()) {
      traceEventStart(645671963, $changed, -1, 'cafe.adriel.voyager.navigator.Navigator.saveableState$composable.provideSaveableState (Navigator.kt:135)');
    }
    var providedStateKey = stateKey + ':' + suffixKey;
    var tmp0_this = this$0;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.stateKeys_1;
    tmp0_plusAssign.add_1j60pz_k$(providedStateKey);
    this$0.stateHolder_1.SaveableStateProvider$composable_n5yi3h_k$(providedStateKey, content, $composer_0, 112 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
  }
  function Navigator$lastItem$delegate$lambda(this$0) {
    return function () {
      var tmp0_elvis_lhs = this$0.get_lastItemOrNull_32n3yc_k$();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$('Navigator has no screen');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      return tmp;
    };
  }
  function Navigator$last$delegate$lambda(this$0) {
    return function () {
      return this$0.get_lastItem_f337v6_k$();
    };
  }
  function Navigator$dispose$lambda($screen) {
    return function (it) {
      return startsWith(it, $screen.get_key_18j28a_k$());
    };
  }
  function Navigator$saveableState$composable$lambda($stateKey, this$0) {
    return function (suffix, content, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(suffix) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (($changed & 112) === 0) {
        $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
        tmp_0 = Unit_getInstance();
      }
      var tmp_1;
      if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1585690675, $dirty, -1, 'cafe.adriel.voyager.navigator.Navigator.saveableState$composable.<anonymous> (Navigator.kt:149)');
        }
        saveableState$composable$provideSaveableState($stateKey, this$0, suffix, content, $composer_0, 14 & $dirty | 112 & $dirty);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp_1 = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_locru7_k$(p0, p1, p2, p3);
    };
  }
  function Navigator$saveableState$composable$lambda_0(this$0, $stateKey, $content, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-720851089, $changed, -1, 'cafe.adriel.voyager.navigator.Navigator.saveableState$composable.<anonymous> (Navigator.kt:150)');
        }
        this$0.stateHolder_1.SaveableStateProvider$composable_n5yi3h_k$($stateKey, $content, $composer_0, 112 & $$dirty >> 3);
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
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function Navigator$saveableState$composable$lambda_1($tmp0_rcvr, $key, $screen, $content, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.saveableState$composable_ptkxfo_k$($key, $screen._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Navigator(screens, key, stateHolder, disposeBehavior, parent) {
    parent = parent === VOID ? null : parent;
    this.key_1 = key;
    this.stateHolder_1 = stateHolder;
    this.disposeBehavior_1 = disposeBehavior;
    this.parent_1 = parent;
    this.$$delegate_0__1 = toMutableStateStack(screens, 1);
    var tmp = this;
    var tmp0_safe_receiver = this.parent_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.level_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver + 1 | 0;
    tmp.level_1 = tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs;
    var tmp_0 = this;
    tmp_0.lastItem$delegate_1 = derivedStateOf(Navigator$lastItem$delegate$lambda(this));
    this.stateKeys_1 = ThreadSafeSet_init_$Create$();
    var tmp_1 = this;
    tmp_1.last$delegate_1 = derivedStateOf(Navigator$last$delegate$lambda(this));
    this.$stable_1 = 8;
  }
  protoOf(Navigator).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(Navigator).get_disposeBehavior_22mwrc_k$ = function () {
    return this.disposeBehavior_1;
  };
  protoOf(Navigator).get_parent_hy4reb_k$ = function () {
    return this.parent_1;
  };
  protoOf(Navigator).get_canPop_bsgoru_k$ = function () {
    return this.$$delegate_0__1.get_canPop_bsgoru_k$();
  };
  protoOf(Navigator).get_isEmpty_zauvru_k$ = function () {
    return this.$$delegate_0__1.get_isEmpty_zauvru_k$();
  };
  protoOf(Navigator).get_items_it823b_k$ = function () {
    return this.$$delegate_0__1.get_items_it823b_k$();
  };
  protoOf(Navigator).get_lastEvent_tm6i9x_k$ = function () {
    return this.$$delegate_0__1.get_lastEvent_tm6i9x_k$();
  };
  protoOf(Navigator).get_lastItemOrNull_32n3yc_k$ = function () {
    return this.$$delegate_0__1.get_lastItemOrNull_32n3yc_k$();
  };
  protoOf(Navigator).get_lastOrNull_9yph3d_k$ = function () {
    return this.$$delegate_0__1.get_lastOrNull_9yph3d_k$();
  };
  protoOf(Navigator).get_size_woubt6_k$ = function () {
    return this.$$delegate_0__1.get_size_woubt6_k$();
  };
  protoOf(Navigator).clearEvent_bn57no_k$ = function () {
    this.$$delegate_0__1.clearEvent_bn57no_k$();
  };
  protoOf(Navigator).plusAssign_8w5cij_k$ = function (item) {
    this.$$delegate_0__1.plusAssign_mgw5ag_k$(item);
  };
  protoOf(Navigator).plusAssign_mgw5ag_k$ = function (item) {
    return this.plusAssign_8w5cij_k$((!(item == null) ? isInterface(item, Screen) : false) ? item : THROW_CCE());
  };
  protoOf(Navigator).plusAssign_9ntwtz_k$ = function (items) {
    this.$$delegate_0__1.plusAssign_vinuks_k$(items);
  };
  protoOf(Navigator).plusAssign_vinuks_k$ = function (items) {
    return this.plusAssign_9ntwtz_k$(items);
  };
  protoOf(Navigator).pop_2dsh_k$ = function () {
    return this.$$delegate_0__1.pop_2dsh_k$();
  };
  protoOf(Navigator).popAll_u9cw1r_k$ = function () {
    this.$$delegate_0__1.popAll_u9cw1r_k$();
  };
  protoOf(Navigator).popUntil_falg17_k$ = function (predicate) {
    return this.$$delegate_0__1.popUntil_xktkhk_k$(predicate);
  };
  protoOf(Navigator).popUntil_xktkhk_k$ = function (predicate) {
    return this.popUntil_falg17_k$(predicate);
  };
  protoOf(Navigator).push_1609yu_k$ = function (item) {
    this.$$delegate_0__1.push_s4xdd3_k$(item);
  };
  protoOf(Navigator).push_s4xdd3_k$ = function (item) {
    return this.push_1609yu_k$((!(item == null) ? isInterface(item, Screen) : false) ? item : THROW_CCE());
  };
  protoOf(Navigator).push_7v7ed6_k$ = function (items) {
    this.$$delegate_0__1.push_fslscd_k$(items);
  };
  protoOf(Navigator).push_fslscd_k$ = function (items) {
    return this.push_7v7ed6_k$(items);
  };
  protoOf(Navigator).replace_v8lff4_k$ = function (item) {
    this.$$delegate_0__1.replace_6dty19_k$(item);
  };
  protoOf(Navigator).replace_6dty19_k$ = function (item) {
    return this.replace_v8lff4_k$((!(item == null) ? isInterface(item, Screen) : false) ? item : THROW_CCE());
  };
  protoOf(Navigator).replaceAll_deqygn_k$ = function (item) {
    this.$$delegate_0__1.replaceAll_jthrx0_k$(item);
  };
  protoOf(Navigator).replaceAll_jthrx0_k$ = function (item) {
    return this.replaceAll_deqygn_k$((!(item == null) ? isInterface(item, Screen) : false) ? item : THROW_CCE());
  };
  protoOf(Navigator).replaceAll_hgudnx_k$ = function (items) {
    this.$$delegate_0__1.replaceAll_xiv8ls_k$(items);
  };
  protoOf(Navigator).replaceAll_xiv8ls_k$ = function (items) {
    return this.replaceAll_hgudnx_k$(items);
  };
  protoOf(Navigator).get_level_ium7h7_k$ = function () {
    return this.level_1;
  };
  protoOf(Navigator).get_lastItem_f337v6_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = lastItem$factory();
    tmp$ret$0 = this.lastItem$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(Navigator).get_last_wopotb_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = last$factory();
    tmp$ret$0 = this.last$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(Navigator).saveableState_d3c4ne_k$ = function (key, screen, content) {
    illegalDecoyCallException('saveableState');
  };
  protoOf(Navigator).popUntilRoot_3d8sse_k$ = function () {
    popUntilRoot(this, this);
  };
  protoOf(Navigator).dispose_hhvyfv_k$ = function (screen) {
    ScreenModelStore_getInstance().remove_mhx0ps_k$(screen);
    ScreenLifecycleStore_getInstance().remove_mhx0ps_k$(screen);
    // Inline function 'kotlin.sequences.forEach' call
    var tmp = asSequence(this.stateKeys_1);
    var tmp0_forEach = filter(tmp, Navigator$dispose$lambda(screen));
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'cafe.adriel.voyager.navigator.Navigator.dispose.<anonymous>' call
      this.stateHolder_1.removeState_5vvsww_k$(element);
      var tmp0_this = this;
      // Inline function 'kotlin.collections.minusAssign' call
      var tmp0_minusAssign = tmp0_this.stateKeys_1;
      tmp0_minusAssign.remove_8hbkc6_k$(element);
    }
  };
  protoOf(Navigator).saveableState$composable_ptkxfo_k$ = function (key, screen, content, $composer, $changed, $default) {
    var screen_0 = {_v: screen};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(742290439);
    sourceInformation($composer_0, 'C(saveableState$composable)P(1,2)');
    var $dirty = $changed;
    if (!(($default & 2) === 0)) {
      screen_0._v = this.get_lastItem_f337v6_k$();
      $dirty = $dirty & -113;
    }
    if (isTraceInProgress()) {
      traceEventStart(742290439, $dirty, -1, 'cafe.adriel.voyager.navigator.Navigator.saveableState$composable (Navigator.kt:126)');
    }
    var stateKey = screen_0._v.get_key_18j28a_k$() + ':' + key;
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.stateKeys_1;
    tmp0_plusAssign.add_1j60pz_k$(stateKey);
    var lifecycleOwner = rememberScreenLifecycleOwner$composable(screen_0._v, $composer_0, 14 & $dirty >> 3);
    var navigatorScreenLifecycleOwners = getNavigatorScreenLifecycleOwner$composable(screen_0._v, $composer_0, 14 & $dirty >> 3);
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp4_remember$composable = $composer_0;
    var $composer_1 = tmp4_remember$composable;
    $composer_1.startReplaceableGroup_rp6air_k$(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp2_cache = $composer_1;
    var tmp3_cache = !!($composer_1.changed_ga7h3f_k$(lifecycleOwner) | $composer_1.changed_ga7h3f_k$(navigatorScreenLifecycleOwners));
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp1_let = tmp2_cache.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp3_cache ? true : tmp1_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var tmp$ret$0;
      // Inline function 'cafe.adriel.voyager.navigator.Navigator.saveableState$composable.<anonymous>' call
      tmp$ret$0 = plus(listOf(lifecycleOwner), navigatorScreenLifecycleOwners);
      var value = tmp$ret$0;
      tmp2_cache.updateRememberedValue_l1colo_k$(value);
      tmp = value;
    } else {
      tmp = tmp1_let;
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    var tmp_0 = tmp$ret$2;
    tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$3;
    $composer_1.endReplaceableGroup_er37p7_k$();
    tmp$ret$4 = tmp0;
    var composed = tmp$ret$4;
    var tmp$ret$11;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$10;
    // Inline function 'cafe.adriel.voyager.navigator.Navigator.saveableState$composable.<anonymous>' call
    var tmp_1 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_1, -1585690675, true, Navigator$saveableState$composable$lambda(stateKey, this));
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = $composer_0;
    var $composer_2 = tmp3_remember$composable;
    $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
    sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_2;
    var tmp2_cache_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_2;
    if (tmp2_cache_0 ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var tmp$ret$5;
      // Inline function 'cafe.adriel.voyager.navigator.Navigator.saveableState$composable.<anonymous>.<anonymous>' call
      tmp$ret$5 = ComposableLambda$invoke$ref(dispatchReceiver);
      var value_0 = tmp$ret$5;
      tmp1_cache.updateRememberedValue_l1colo_k$(value_0);
      tmp_2 = value_0;
    } else {
      tmp_2 = tmp0_let;
    }
    tmp$ret$6 = tmp_2;
    tmp$ret$7 = tmp$ret$6;
    var tmp_3 = tmp$ret$7;
    tmp$ret$8 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
    var tmp0_0 = tmp$ret$8;
    $composer_2.endReplaceableGroup_er37p7_k$();
    tmp$ret$9 = tmp0_0;
    tmp$ret$10 = tmp$ret$9;
    tmp$ret$11 = tmp$ret$10;
    var tmp_4 = tmp$ret$11;
    var tmp$ret$18;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$17;
    // Inline function 'cafe.adriel.voyager.navigator.Navigator.saveableState$composable.<anonymous>' call
    var tmp_5 = $composer_0;
    var dispatchReceiver_0 = composableLambda(tmp_5, -720851089, true, Navigator$saveableState$composable$lambda_0(this, stateKey, content, $dirty));
    var tmp$ret$16;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable_0 = $composer_0;
    var $composer_3 = tmp3_remember$composable_0;
    $composer_3.startReplaceableGroup_rp6air_k$(-838505973);
    sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$15;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache_0 = $composer_3;
    var tmp2_cache_1 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_0);
    var tmp$ret$14;
    // Inline function 'kotlin.let' call
    var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$13;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_6;
    if (tmp2_cache_1 ? true : tmp0_let_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var tmp$ret$12;
      // Inline function 'cafe.adriel.voyager.navigator.Navigator.saveableState$composable.<anonymous>.<anonymous>' call
      tmp$ret$12 = ComposableLambda$invoke$ref_0(dispatchReceiver_0);
      var value_1 = tmp$ret$12;
      tmp1_cache_0.updateRememberedValue_l1colo_k$(value_1);
      tmp_6 = value_1;
    } else {
      tmp_6 = tmp0_let_0;
    }
    tmp$ret$13 = tmp_6;
    tmp$ret$14 = tmp$ret$13;
    var tmp_7 = tmp$ret$14;
    tmp$ret$15 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
    var tmp0_1 = tmp$ret$15;
    $composer_3.endReplaceableGroup_er37p7_k$();
    tmp$ret$16 = tmp0_1;
    tmp$ret$17 = tmp$ret$16;
    tmp$ret$18 = tmp$ret$17;
    MultipleProvideBeforeScreenContent$composable(composed, tmp_4, tmp$ret$18, $composer_0, 432);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_rcvr = this;
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(Navigator$saveableState$composable$lambda_1(tmp0_rcvr, key, screen_0, content, $changed, $default));
    }
  };
  function get_$stableprop_0() {
    return 0;
  }
  function NavigatorDisposeBehavior(disposeNestedNavigators, disposeSteps) {
    disposeNestedNavigators = disposeNestedNavigators === VOID ? true : disposeNestedNavigators;
    disposeSteps = disposeSteps === VOID ? true : disposeSteps;
    this.disposeNestedNavigators_1 = disposeNestedNavigators;
    this.disposeSteps_1 = disposeSteps;
    this.$stable_1 = 0;
  }
  protoOf(NavigatorDisposeBehavior).get_disposeNestedNavigators_xxash5_k$ = function () {
    return this.disposeNestedNavigators_1;
  };
  protoOf(NavigatorDisposeBehavior).get_disposeSteps_h47es1_k$ = function () {
    return this.disposeSteps_1;
  };
  protoOf(NavigatorDisposeBehavior).component1_7eebsc_k$ = function () {
    return this.disposeNestedNavigators_1;
  };
  protoOf(NavigatorDisposeBehavior).component2_7eebsb_k$ = function () {
    return this.disposeSteps_1;
  };
  protoOf(NavigatorDisposeBehavior).copy_wywl1_k$ = function (disposeNestedNavigators, disposeSteps) {
    return new NavigatorDisposeBehavior(disposeNestedNavigators, disposeSteps);
  };
  protoOf(NavigatorDisposeBehavior).copy$default_3smvuc_k$ = function (disposeNestedNavigators, disposeSteps, $super) {
    disposeNestedNavigators = disposeNestedNavigators === VOID ? this.disposeNestedNavigators_1 : disposeNestedNavigators;
    disposeSteps = disposeSteps === VOID ? this.disposeSteps_1 : disposeSteps;
    return $super === VOID ? this.copy_wywl1_k$(disposeNestedNavigators, disposeSteps) : $super.copy_wywl1_k$.call(this, disposeNestedNavigators, disposeSteps);
  };
  protoOf(NavigatorDisposeBehavior).toString = function () {
    return 'NavigatorDisposeBehavior(disposeNestedNavigators=' + this.disposeNestedNavigators_1 + ', disposeSteps=' + this.disposeSteps_1 + ')';
  };
  protoOf(NavigatorDisposeBehavior).hashCode = function () {
    var result = this.disposeNestedNavigators_1 | 0;
    result = imul(result, 31) + (this.disposeSteps_1 | 0) | 0;
    return result;
  };
  protoOf(NavigatorDisposeBehavior).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NavigatorDisposeBehavior))
      return false;
    var tmp0_other_with_cast = other instanceof NavigatorDisposeBehavior ? other : THROW_CCE();
    if (!(this.disposeNestedNavigators_1 === tmp0_other_with_cast.disposeNestedNavigators_1))
      return false;
    if (!(this.disposeSteps_1 === tmp0_other_with_cast.disposeSteps_1))
      return false;
    return true;
  };
  function LocalNavigator$lambda() {
    _init_properties_Navigator_kt__ww6let();
    return null;
  }
  function lastItem$factory() {
    return getPropertyCallableRef('lastItem', 1, KProperty1, function (receiver) {
      return receiver.get_lastItem_f337v6_k$();
    }, null);
  }
  function last$factory() {
    return getPropertyCallableRef('last', 1, KProperty1, function (receiver) {
      return receiver.get_last_wopotb_k$();
    }, null);
  }
  var properties_initialized_Navigator_kt_hi8lg9;
  function _init_properties_Navigator_kt__ww6let() {
    if (properties_initialized_Navigator_kt_hi8lg9) {
    } else {
      properties_initialized_Navigator_kt_hi8lg9 = true;
      LocalNavigator = staticCompositionLocalOf(LocalNavigator$lambda);
      MaxSupportedRadix = 36;
    }
  }
  function get_LocalNavigatorSaver() {
    _init_properties_NavigatorSaver_kt__tlqrj2();
    return LocalNavigatorSaver;
  }
  var LocalNavigatorSaver;
  function NavigatorSaver() {
  }
  function defaultNavigatorSaver() {
    _init_properties_NavigatorSaver_kt__tlqrj2();
    var tmp = defaultNavigatorSaver$lambda;
    return new sam$cafe_adriel_voyager_navigator_NavigatorSaver$0(tmp);
  }
  function sam$cafe_adriel_voyager_navigator_NavigatorSaver$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$cafe_adriel_voyager_navigator_NavigatorSaver$0).saver_9jikbq_k$ = function (initialScreens, key, stateHolder, disposeBehavior, parent) {
    return this.function_1(initialScreens, key, stateHolder, disposeBehavior, parent);
  };
  function LocalNavigatorSaver$lambda() {
    _init_properties_NavigatorSaver_kt__tlqrj2();
    return defaultNavigatorSaver();
  }
  function defaultNavigatorSaver$lambda(_anonymous_parameter_0__qggqh8, key, stateHolder, disposeBehavior, parent) {
    _init_properties_NavigatorSaver_kt__tlqrj2();
    var tmp = defaultNavigatorSaver$lambda$lambda;
    return listSaver(tmp, defaultNavigatorSaver$lambda$lambda_0(key, stateHolder, disposeBehavior, parent));
  }
  function defaultNavigatorSaver$lambda$lambda($this$listSaver, navigator) {
    _init_properties_NavigatorSaver_kt__tlqrj2();
    return navigator.get_items_it823b_k$();
  }
  function defaultNavigatorSaver$lambda$lambda_0($key, $stateHolder, $disposeBehavior, $parent) {
    return function (items) {
      return new Navigator(items, $key, $stateHolder, $disposeBehavior, $parent);
    };
  }
  var properties_initialized_NavigatorSaver_kt_fldups;
  function _init_properties_NavigatorSaver_kt__tlqrj2() {
    if (properties_initialized_NavigatorSaver_kt_fldups) {
    } else {
      properties_initialized_NavigatorSaver_kt_fldups = true;
      LocalNavigatorSaver = staticCompositionLocalOf(LocalNavigatorSaver$lambda);
    }
  }
  function get_disposableEvents() {
    _init_properties_NavigatorDisposable_kt__vh123p();
    return disposableEvents;
  }
  var disposableEvents;
  var properties_initialized_NavigatorDisposable_kt_m7icmf;
  function _init_properties_NavigatorDisposable_kt__vh123p() {
    if (properties_initialized_NavigatorDisposable_kt_m7icmf) {
    } else {
      properties_initialized_NavigatorDisposable_kt_m7icmf = true;
      disposableEvents = setOf([StackEvent_Pop_getInstance(), StackEvent_Replace_getInstance()]);
    }
  }
  function get_LocalNavigatorStateHolder() {
    _init_properties_NavigatorSaverInternal_kt__hwzrut();
    return LocalNavigatorStateHolder;
  }
  var LocalNavigatorStateHolder;
  function LocalNavigatorStateHolder$lambda() {
    _init_properties_NavigatorSaverInternal_kt__hwzrut();
    throw IllegalStateException_init_$Create$('LocalNavigatorStateHolder not initialized');
  }
  var properties_initialized_NavigatorSaverInternal_kt_5u8j7n;
  function _init_properties_NavigatorSaverInternal_kt__hwzrut() {
    if (properties_initialized_NavigatorSaverInternal_kt_5u8j7n) {
    } else {
      properties_initialized_NavigatorSaverInternal_kt_5u8j7n = true;
      LocalNavigatorStateHolder = staticCompositionLocalOf(LocalNavigatorStateHolder$lambda);
    }
  }
  return _;
}));

//# sourceMappingURL=voyager-voyager-navigator.js.map
