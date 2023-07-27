(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './androidx-runtime.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-runtime.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'voyager-voyager-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'voyager-voyager-core'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'voyager-voyager-core'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'voyager-voyager-core'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'voyager-voyager-core'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'voyager-voyager-core'.");
    }
    root['voyager-voyager-core'] = factory(typeof this['voyager-voyager-core'] === 'undefined' ? {} : this['voyager-voyager-core'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-runtime'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.mf;
  var THROW_CCE = kotlin_kotlin.$_$.sk;
  var Annotation = kotlin_kotlin.$_$.xj;
  var classMeta = kotlin_kotlin.$_$.zd;
  var VOID = kotlin_kotlin.$_$.jm;
  var setMetadataFor = kotlin_kotlin.$_$.nf;
  var DisposableEffectScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var interfaceMeta = kotlin_kotlin.$_$.oe;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var isInterface = kotlin_kotlin.$_$.xe;
  var Unit_getInstance = kotlin_kotlin.$_$.k6;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j2;
  var isObject = kotlin_kotlin.$_$.ze;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var objectMeta = kotlin_kotlin.$_$.lf;
  var toMutableList = kotlin_kotlin.$_$.fc;
  var removeFirst = kotlin_kotlin.$_$.db;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var removeFirstOrNull = kotlin_kotlin.$_$.cb;
  var asSequence = kotlin_kotlin.$_$.w7;
  var filter = kotlin_kotlin.$_$.ih;
  var map = kotlin_kotlin.$_$.kh;
  var startsWith = kotlin_kotlin.$_$.bj;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var equals = kotlin_kotlin.$_$.de;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var toList = kotlin_kotlin.$_$.bc;
  var objectCreate = kotlin_kotlin.$_$.kf;
  var lastOrNull = kotlin_kotlin.$_$.ja;
  var toString = kotlin_kotlin.$_$.rf;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i2;
  var toMutableStateList = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var neverEqualPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var derivedStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var addAll = kotlin_kotlin.$_$.q7;
  var get_lastIndex = kotlin_kotlin.$_$.fa;
  var removeLast = kotlin_kotlin.$_$.fb;
  var KMutableProperty1 = kotlin_kotlin.$_$.ah;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ke;
  var KProperty1 = kotlin_kotlin.$_$.ch;
  var THROW_ISE = kotlin_kotlin.$_$.tk;
  var Enum = kotlin_kotlin.$_$.ek;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.b1;
  var MutableMap = kotlin_kotlin.$_$.l7;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.e1;
  var MutableSet = kotlin_kotlin.$_$.m7;
  var emptyList = kotlin_kotlin.$_$.c9;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ExperimentalVoyagerApi, 'ExperimentalVoyagerApi', classMeta, VOID, [Annotation]);
  setMetadataFor(InternalVoyagerApi, 'InternalVoyagerApi', classMeta, VOID, [Annotation]);
  setMetadataFor(NavigatorScreenLifecycleProvider, 'NavigatorScreenLifecycleProvider', interfaceMeta);
  setMetadataFor(ScreenLifecycleProvider, 'ScreenLifecycleProvider', interfaceMeta);
  function ProvideBeforeScreenContent(provideSaveableState, content) {
    illegalDecoyCallException('ProvideBeforeScreenContent');
  }
  function onDispose(screen) {
  }
  function ProvideBeforeScreenContent$composable(provideSaveableState, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(873401682);
    sourceInformation($composer_0, 'C(ProvideBeforeScreenContent$composable)P(1)');
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(873401682, $dirty, -1, 'cafe.adriel.voyager.core.lifecycle.ScreenLifecycleOwner.ProvideBeforeScreenContent$composable (ScreenLifecycleOwner.kt:14)');
      }
      content($composer_0, 14 & $dirty >> 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_rcvr = this;
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(ScreenLifecycleOwner$ProvideBeforeScreenContent$composable$lambda(tmp0_rcvr, provideSaveableState, content, $changed));
    }
  }
  setMetadataFor(ScreenLifecycleOwner, 'ScreenLifecycleOwner', interfaceMeta);
  setMetadataFor(DefaultScreenLifecycleOwner, 'DefaultScreenLifecycleOwner', objectMeta, VOID, [ScreenLifecycleOwner]);
  setMetadataFor(ScreenLifecycleStore, 'ScreenLifecycleStore', objectMeta);
  function onDispose_0() {
  }
  setMetadataFor(ScreenModel, 'ScreenModel', interfaceMeta);
  setMetadataFor(ScreenModelStore, 'ScreenModelStore', objectMeta);
  setMetadataFor(Stack, 'Stack', interfaceMeta);
  setMetadataFor(SnapshotStateStack, 'SnapshotStateStack', classMeta, VOID, [Stack]);
  setMetadataFor(StackEvent, 'StackEvent', classMeta, Enum);
  setMetadataFor(ThreadSafeMap, 'ThreadSafeMap', classMeta, VOID, [MutableMap]);
  setMetadataFor(ThreadSafeSet, 'ThreadSafeSet', classMeta, VOID, [MutableSet]);
  setMetadataFor(ConfigurationChecker, 'ConfigurationChecker', classMeta);
  setMetadataFor(DefaultNavigatorScreenLifecycleProvider, 'DefaultNavigatorScreenLifecycleProvider', classMeta, VOID, [NavigatorScreenLifecycleProvider]);
  function get_key() {
    return commonKeyGeneration(this);
  }
  setMetadataFor(Screen, 'Screen', interfaceMeta);
  //endregion
  function ExperimentalVoyagerApi() {
  }
  protoOf(ExperimentalVoyagerApi).equals = function (other) {
    if (!(other instanceof ExperimentalVoyagerApi))
      return false;
    var tmp0_other_with_cast = other instanceof ExperimentalVoyagerApi ? other : THROW_CCE();
    return true;
  };
  protoOf(ExperimentalVoyagerApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalVoyagerApi).toString = function () {
    return '@cafe.adriel.voyager.core.annotation.ExperimentalVoyagerApi()';
  };
  function InternalVoyagerApi() {
  }
  protoOf(InternalVoyagerApi).equals = function (other) {
    if (!(other instanceof InternalVoyagerApi))
      return false;
    var tmp0_other_with_cast = other instanceof InternalVoyagerApi ? other : THROW_CCE();
    return true;
  };
  protoOf(InternalVoyagerApi).hashCode = function () {
    return 0;
  };
  protoOf(InternalVoyagerApi).toString = function () {
    return '@cafe.adriel.voyager.core.annotation.InternalVoyagerApi()';
  };
  function get_InternalDisposableEffectScope() {
    _init_properties_DisposableEffect_kt__naxsgf();
    return InternalDisposableEffectScope;
  }
  var InternalDisposableEffectScope;
  var properties_initialized_DisposableEffect_kt_4atvkd;
  function _init_properties_DisposableEffect_kt__naxsgf() {
    if (properties_initialized_DisposableEffect_kt_4atvkd) {
    } else {
      properties_initialized_DisposableEffect_kt_4atvkd = true;
      InternalDisposableEffectScope = new DisposableEffectScope();
    }
  }
  function get_LocalNavigatorScreenLifecycleProvider() {
    _init_properties_NavigatorScreenLifecycle_kt__3cieg7();
    return LocalNavigatorScreenLifecycleProvider;
  }
  var LocalNavigatorScreenLifecycleProvider;
  function NavigatorScreenLifecycleProvider() {
  }
  function LocalNavigatorScreenLifecycleProvider$lambda() {
    _init_properties_NavigatorScreenLifecycle_kt__3cieg7();
    return new DefaultNavigatorScreenLifecycleProvider();
  }
  var properties_initialized_NavigatorScreenLifecycle_kt_uc7c89;
  function _init_properties_NavigatorScreenLifecycle_kt__3cieg7() {
    if (properties_initialized_NavigatorScreenLifecycle_kt_uc7c89) {
    } else {
      properties_initialized_NavigatorScreenLifecycle_kt_uc7c89 = true;
      LocalNavigatorScreenLifecycleProvider = staticCompositionLocalOf(LocalNavigatorScreenLifecycleProvider$lambda);
    }
  }
  function rememberScreenLifecycleOwner$composable(screen, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1573571947);
    sourceInformation($composer_0, 'C(rememberScreenLifecycleOwner$composable)');
    if (isTraceInProgress()) {
      traceEventStart(-1573571947, $changed, -1, 'cafe.adriel.voyager.core.lifecycle.rememberScreenLifecycleOwner$composable (ScreenLifecycle.kt:21)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = screen.get_key_18j28a_k$();
    var tmp4_remember$composable = $composer_0;
    var $composer_1 = tmp4_remember$composable;
    $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = $composer_1.changed_ga7h3f_k$(tmp3_remember$composable);
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var tmp$ret$0;
      // Inline function 'cafe.adriel.voyager.core.lifecycle.rememberScreenLifecycleOwner$composable.<anonymous>' call
      var tmp0_subject = screen;
      var tmp_0;
      if (isInterface(tmp0_subject, ScreenLifecycleProvider)) {
        tmp_0 = screen.getLifecycleOwner_tgznhd_k$();
      } else {
        tmp_0 = DefaultScreenLifecycleOwner_getInstance();
      }
      tmp$ret$0 = tmp_0;
      var value = tmp$ret$0;
      tmp1_cache.updateRememberedValue_l1colo_k$(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    var tmp_1 = tmp$ret$2;
    tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    var tmp0 = tmp$ret$3;
    $composer_1.endReplaceableGroup_er37p7_k$();
    tmp$ret$4 = tmp0;
    var tmp0_0 = tmp$ret$4;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  }
  function getNavigatorScreenLifecycleOwner$composable(screen, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1973166787);
    sourceInformation($composer_0, 'C(getNavigatorScreenLifecycleOwner$composable)');
    if (isTraceInProgress()) {
      traceEventStart(-1973166787, $changed, -1, 'cafe.adriel.voyager.core.lifecycle.getNavigatorScreenLifecycleOwner$composable (ScreenLifecycle.kt:34)');
    }
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalNavigatorScreenLifecycleProvider();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_11nid3_k$(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0;
    var navigatorScreenLifecycleProvider = tmp$ret$0;
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp5_remember$composable = screen.get_key_18j28a_k$();
    var tmp6_remember$composable = $composer_0;
    var $composer_2 = tmp6_remember$composable;
    $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
    sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp3_cache = $composer_2;
    var tmp4_cache = $composer_2.changed_ga7h3f_k$(tmp5_remember$composable);
    var tmp$ret$3;
    // Inline function 'kotlin.let' call
    var tmp2_let = tmp3_cache.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp4_cache ? true : tmp2_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var tmp$ret$1;
      // Inline function 'cafe.adriel.voyager.core.lifecycle.getNavigatorScreenLifecycleOwner$composable.<anonymous>' call
      tmp$ret$1 = navigatorScreenLifecycleProvider.provide_cjbgr0_k$(screen);
      var value = tmp$ret$1;
      tmp3_cache.updateRememberedValue_l1colo_k$(value);
      tmp = value;
    } else {
      tmp = tmp2_let;
    }
    tmp$ret$2 = tmp;
    tmp$ret$3 = tmp$ret$2;
    var tmp_0 = tmp$ret$3;
    tmp$ret$4 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0_0 = tmp$ret$4;
    $composer_2.endReplaceableGroup_er37p7_k$();
    tmp$ret$5 = tmp0_0;
    var tmp0_1 = tmp$ret$5;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_1;
  }
  function ScreenLifecycleProvider() {
  }
  function ScreenLifecycleOwner$ProvideBeforeScreenContent$composable$lambda($tmp0_rcvr, $provideSaveableState, $content, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.ProvideBeforeScreenContent$composable_6gw3qm_k$($provideSaveableState, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ScreenLifecycleOwner() {
  }
  function get_$stableprop() {
    return 0;
  }
  function DefaultScreenLifecycleOwner() {
    DefaultScreenLifecycleOwner_instance = this;
    this.$stable_1 = 0;
  }
  var DefaultScreenLifecycleOwner_instance;
  function DefaultScreenLifecycleOwner_getInstance() {
    if (DefaultScreenLifecycleOwner_instance == null)
      new DefaultScreenLifecycleOwner();
    return DefaultScreenLifecycleOwner_instance;
  }
  function _get_owners__kco8vf($this) {
    return $this.owners_1;
  }
  function _get_newOwners__t8hifj($this) {
    return $this.newOwners_1;
  }
  function get_$stableprop_0() {
    return 0;
  }
  function ScreenLifecycleStore() {
    ScreenLifecycleStore_instance = this;
    this.owners_1 = ThreadSafeMap_init_$Create$();
    this.newOwners_1 = ThreadSafeMap_init_$Create$();
    this.$stable_1 = 0;
  }
  protoOf(ScreenLifecycleStore).get_hworzp_k$ = function (screen, factory) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.owners_1;
    var tmp1_getOrPut = screen.get_key_18j28a_k$();
    var value = tmp0_getOrPut.get_1mhr4y_k$(tmp1_getOrPut);
    var tmp;
    if (value == null) {
      var tmp$ret$0;
      // Inline function 'cafe.adriel.voyager.core.lifecycle.ScreenLifecycleStore.get.<anonymous>' call
      tmp$ret$0 = factory(screen.get_key_18j28a_k$());
      var answer = tmp$ret$0;
      tmp0_getOrPut.put_3mhbri_k$(tmp1_getOrPut, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    tmp$ret$1 = tmp;
    return tmp$ret$1;
  };
  protoOf(ScreenLifecycleStore).register_ragiew_k$ = function (screen, screenLifecycleOwnerType, factory) {
    var tmp$ret$4;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.newOwners_1;
    var tmp1_getOrPut = screen.get_key_18j28a_k$();
    var value = tmp0_getOrPut.get_1mhr4y_k$(tmp1_getOrPut);
    var tmp;
    if (value == null) {
      var tmp$ret$1;
      // Inline function 'cafe.adriel.voyager.core.lifecycle.ScreenLifecycleStore.register.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = ThreadSafeMap_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'cafe.adriel.voyager.core.lifecycle.ScreenLifecycleStore.register.<anonymous>.<anonymous>' call
      tmp0_apply.put_3mhbri_k$(screenLifecycleOwnerType, factory(screen.get_key_18j28a_k$()));
      tmp$ret$0 = tmp0_apply;
      tmp$ret$1 = tmp$ret$0;
      var answer = tmp$ret$1;
      tmp0_getOrPut.put_3mhbri_k$(tmp1_getOrPut, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    tmp$ret$2 = tmp;
    var tmp2_getOrPut = tmp$ret$2;
    var value_0 = tmp2_getOrPut.get_1mhr4y_k$(screenLifecycleOwnerType);
    var tmp_0;
    if (value_0 == null) {
      var tmp$ret$3;
      // Inline function 'cafe.adriel.voyager.core.lifecycle.ScreenLifecycleStore.register.<anonymous>' call
      tmp$ret$3 = factory(screen.get_key_18j28a_k$());
      var answer_0 = tmp$ret$3;
      tmp2_getOrPut.put_3mhbri_k$(screenLifecycleOwnerType, answer_0);
      tmp_0 = answer_0;
    } else {
      tmp_0 = value_0;
    }
    tmp$ret$4 = tmp_0;
    return tmp$ret$4;
  };
  protoOf(ScreenLifecycleStore).remove_mhx0ps_k$ = function (screen) {
    var tmp0_safe_receiver = this.owners_1.remove_8hbkc0_k$(screen.get_key_18j28a_k$());
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.onDispose_n2dqvw_k$(screen);
    }
    var tmp1_safe_receiver = this.newOwners_1.remove_8hbkc0_k$(screen.get_key_18j28a_k$());
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$0 = tmp1_safe_receiver.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      var tmp0_iterator = tmp$ret$0;
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'cafe.adriel.voyager.core.lifecycle.ScreenLifecycleStore.remove.<anonymous>' call
        element.get_value_j01efc_k$().onDispose_n2dqvw_k$(screen);
      }
    }
  };
  var ScreenLifecycleStore_instance;
  function ScreenLifecycleStore_getInstance() {
    if (ScreenLifecycleStore_instance == null)
      new ScreenLifecycleStore();
    return ScreenLifecycleStore_instance;
  }
  function MultipleProvideBeforeScreenContent$composable(screenLifecycleOwners, provideSaveableState, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1501901490);
    sourceInformation($composer_0, 'C(MultipleProvideBeforeScreenContent$composable)P(2,1)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(screenLifecycleOwners) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(provideSaveableState) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1501901490, $dirty, -1, 'cafe.adriel.voyager.core.lifecycle.MultipleProvideBeforeScreenContent$composable (multipleScreenLifecycleOwnerUtil.kt:10)');
      }
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$0 = !screenLifecycleOwners.isEmpty_y1axqb_k$();
      if (tmp$ret$0) {
        $composer_0.startReplaceableGroup_rp6air_k$(1797447199);
        var copy = toMutableList(screenLifecycleOwners);
        var tmp = removeFirst(copy);
        RecursiveProvideBeforeScreenContent$composable(tmp, provideSaveableState, content, MultipleProvideBeforeScreenContent$composable$lambda(copy), $composer_0, 112 & $dirty | 896 & $dirty);
        $composer_0.endReplaceableGroup_er37p7_k$();
      } else {
        $composer_0.startReplaceableGroup_rp6air_k$(1797447521);
        content($composer_0, 14 & $dirty >> 6);
        $composer_0.endReplaceableGroup_er37p7_k$();
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(MultipleProvideBeforeScreenContent$composable$lambda_0(screenLifecycleOwners, provideSaveableState, content, $changed));
    }
  }
  function RecursiveProvideBeforeScreenContent$composable(screenLifecycleOwner, provideSaveableState, content, nextOrNull, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1619323667);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(screenLifecycleOwner) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(provideSaveableState) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(nextOrNull) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1619323667, $dirty, -1, 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable (multipleScreenLifecycleOwnerUtil.kt:29)');
      }
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(-1603429786);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid = false;
      var indexedObject = [screenLifecycleOwner, provideSaveableState, content, nextOrNull];
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var key = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        invalid = !!(invalid | $composer_1.changed_ga7h3f_k$(key));
      }
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = invalid;
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>' call
        tmp$ret$0 = nextOrNull();
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
      var next = tmp$ret$4;
      if (!(next == null)) {
        $composer_0.startReplaceableGroup_rp6air_k$(1622838414);
        var tmp$ret$11;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$10;
        // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -6550589, true, RecursiveProvideBeforeScreenContent$composable$lambda(next, provideSaveableState, content, nextOrNull, $dirty));
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable_0 = $composer_0;
        var $composer_2 = tmp3_remember$composable_0;
        $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_2;
        var tmp2_cache_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp2_cache_0 ? true : tmp0_let_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var tmp$ret$5;
          // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>.<anonymous>' call
          tmp$ret$5 = ComposableLambda$invoke$ref(dispatchReceiver);
          var value_0 = tmp$ret$5;
          tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = tmp0_let_0;
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
        var recursiveContent = tmp$ret$11;
        var tmp$ret$18;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$17;
        // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>' call
        var tmp_4 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_4, 1066119455, true, RecursiveProvideBeforeScreenContent$composable$lambda_0(provideSaveableState, recursiveContent, $dirty));
        var tmp$ret$16;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable_1 = $composer_0;
        var $composer_3 = tmp3_remember$composable_1;
        $composer_3.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$15;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_1 = $composer_3;
        var tmp2_cache_1 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_0);
        var tmp$ret$14;
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = tmp1_cache_1.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_5;
        if (tmp2_cache_1 ? true : tmp0_let_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var tmp$ret$12;
          // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>.<anonymous>' call
          tmp$ret$12 = ComposableLambda$invoke$ref_0(dispatchReceiver_0);
          var value_1 = tmp$ret$12;
          tmp1_cache_1.updateRememberedValue_l1colo_k$(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = tmp0_let_1;
        }
        tmp$ret$13 = tmp_5;
        tmp$ret$14 = tmp$ret$13;
        var tmp_6 = tmp$ret$14;
        tmp$ret$15 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
        var tmp0_1 = tmp$ret$15;
        $composer_3.endReplaceableGroup_er37p7_k$();
        tmp$ret$16 = tmp0_1;
        tmp$ret$17 = tmp$ret$16;
        tmp$ret$18 = tmp$ret$17;
        var tmp_7 = tmp$ret$18;
        var tmp$ret$25;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$24;
        // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>' call
        var tmp_8 = $composer_0;
        var dispatchReceiver_1 = composableLambda(tmp_8, -864887491, true, RecursiveProvideBeforeScreenContent$composable$lambda_1(recursiveContent));
        var tmp$ret$23;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable_2 = $composer_0;
        var $composer_4 = tmp3_remember$composable_2;
        $composer_4.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$22;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_2 = $composer_4;
        var tmp2_cache_2 = $composer_4.changed_ga7h3f_k$(dispatchReceiver_1);
        var tmp$ret$21;
        // Inline function 'kotlin.let' call
        var tmp0_let_2 = tmp1_cache_2.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$20;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_9;
        if (tmp2_cache_2 ? true : tmp0_let_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var tmp$ret$19;
          // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>.<anonymous>' call
          tmp$ret$19 = ComposableLambda$invoke$ref_1(dispatchReceiver_1);
          var value_2 = tmp$ret$19;
          tmp1_cache_2.updateRememberedValue_l1colo_k$(value_2);
          tmp_9 = value_2;
        } else {
          tmp_9 = tmp0_let_2;
        }
        tmp$ret$20 = tmp_9;
        tmp$ret$21 = tmp$ret$20;
        var tmp_10 = tmp$ret$21;
        tmp$ret$22 = (tmp_10 == null ? true : isObject(tmp_10)) ? tmp_10 : THROW_CCE();
        var tmp0_2 = tmp$ret$22;
        $composer_4.endReplaceableGroup_er37p7_k$();
        tmp$ret$23 = tmp0_2;
        tmp$ret$24 = tmp$ret$23;
        tmp$ret$25 = tmp$ret$24;
        screenLifecycleOwner.ProvideBeforeScreenContent$composable_6gw3qm_k$(tmp_7, tmp$ret$25, $composer_0, 54 | 896 & $dirty << 6);
        $composer_0.endReplaceableGroup_er37p7_k$();
      } else {
        $composer_0.startReplaceableGroup_rp6air_k$(1622838971);
        var tmp$ret$32;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$31;
        // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>' call
        var tmp_11 = $composer_0;
        var dispatchReceiver_2 = composableLambda(tmp_11, 747742056, true, RecursiveProvideBeforeScreenContent$composable$lambda_2(provideSaveableState, $dirty));
        var tmp$ret$30;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable_3 = $composer_0;
        var $composer_5 = tmp3_remember$composable_3;
        $composer_5.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_5, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$29;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_3 = $composer_5;
        var tmp2_cache_3 = $composer_5.changed_ga7h3f_k$(dispatchReceiver_2);
        var tmp$ret$28;
        // Inline function 'kotlin.let' call
        var tmp0_let_3 = tmp1_cache_3.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$27;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_12;
        if (tmp2_cache_3 ? true : tmp0_let_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var tmp$ret$26;
          // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>.<anonymous>' call
          tmp$ret$26 = ComposableLambda$invoke$ref_2(dispatchReceiver_2);
          var value_3 = tmp$ret$26;
          tmp1_cache_3.updateRememberedValue_l1colo_k$(value_3);
          tmp_12 = value_3;
        } else {
          tmp_12 = tmp0_let_3;
        }
        tmp$ret$27 = tmp_12;
        tmp$ret$28 = tmp$ret$27;
        var tmp_13 = tmp$ret$28;
        tmp$ret$29 = (tmp_13 == null ? true : isObject(tmp_13)) ? tmp_13 : THROW_CCE();
        var tmp0_3 = tmp$ret$29;
        $composer_5.endReplaceableGroup_er37p7_k$();
        tmp$ret$30 = tmp0_3;
        tmp$ret$31 = tmp$ret$30;
        tmp$ret$32 = tmp$ret$31;
        var tmp_14 = tmp$ret$32;
        var tmp$ret$39;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$38;
        // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>' call
        var tmp_15 = $composer_0;
        var dispatchReceiver_3 = composableLambda(tmp_15, -755941626, true, RecursiveProvideBeforeScreenContent$composable$lambda_3(content, $dirty));
        var tmp$ret$37;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable_4 = $composer_0;
        var $composer_6 = tmp3_remember$composable_4;
        $composer_6.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_6, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$36;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_4 = $composer_6;
        var tmp2_cache_4 = $composer_6.changed_ga7h3f_k$(dispatchReceiver_3);
        var tmp$ret$35;
        // Inline function 'kotlin.let' call
        var tmp0_let_4 = tmp1_cache_4.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$34;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_16;
        if (tmp2_cache_4 ? true : tmp0_let_4 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var tmp$ret$33;
          // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>.<anonymous>' call
          tmp$ret$33 = ComposableLambda$invoke$ref_3(dispatchReceiver_3);
          var value_4 = tmp$ret$33;
          tmp1_cache_4.updateRememberedValue_l1colo_k$(value_4);
          tmp_16 = value_4;
        } else {
          tmp_16 = tmp0_let_4;
        }
        tmp$ret$34 = tmp_16;
        tmp$ret$35 = tmp$ret$34;
        var tmp_17 = tmp$ret$35;
        tmp$ret$36 = (tmp_17 == null ? true : isObject(tmp_17)) ? tmp_17 : THROW_CCE();
        var tmp0_4 = tmp$ret$36;
        $composer_6.endReplaceableGroup_er37p7_k$();
        tmp$ret$37 = tmp0_4;
        tmp$ret$38 = tmp$ret$37;
        tmp$ret$39 = tmp$ret$38;
        screenLifecycleOwner.ProvideBeforeScreenContent$composable_6gw3qm_k$(tmp_14, tmp$ret$39, $composer_0, 54 | 896 & $dirty << 6);
        $composer_0.endReplaceableGroup_er37p7_k$();
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(RecursiveProvideBeforeScreenContent$composable$lambda_4(screenLifecycleOwner, provideSaveableState, content, nextOrNull, $changed));
    }
  }
  function MultipleProvideBeforeScreenContent$composable$lambda($copy) {
    return function () {
      return removeFirstOrNull($copy);
    };
  }
  function MultipleProvideBeforeScreenContent$composable$lambda_0($screenLifecycleOwners, $provideSaveableState, $content, $$changed) {
    return function ($composer, $force) {
      MultipleProvideBeforeScreenContent$composable($screenLifecycleOwners, $provideSaveableState, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function RecursiveProvideBeforeScreenContent$composable$lambda($next, $provideSaveableState, $content, $nextOrNull, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-6550589, $changed, -1, 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous> (multipleScreenLifecycleOwnerUtil.kt:37)');
        }
        RecursiveProvideBeforeScreenContent$composable($next, $provideSaveableState, $content, $nextOrNull, $composer_0, 112 & $$dirty | 896 & $$dirty | 7168 & $$dirty);
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
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function RecursiveProvideBeforeScreenContent$composable$lambda_0($provideSaveableState, $recursiveContent, $$dirty) {
    return function (suffixKey, $anonymous$parameter$1$, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(suffixKey) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1066119455, $dirty, -1, 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous> (multipleScreenLifecycleOwnerUtil.kt:46)');
        }
        $provideSaveableState(suffixKey, $recursiveContent, $composer_0, 48 | 14 & $dirty | 896 & $$dirty << 3);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_locru7_k$(p0, p1, p2, p3);
    };
  }
  function RecursiveProvideBeforeScreenContent$composable$lambda_1($recursiveContent) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-864887491, $changed, -1, 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous> (multipleScreenLifecycleOwnerUtil.kt:49)');
        }
        $recursiveContent($composer_0, 6);
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
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function RecursiveProvideBeforeScreenContent$composable$lambda_2($provideSaveableState, $$dirty) {
    return function (suffixKey, content, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(suffixKey) ? 4 : 2);
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
          traceEventStart(747742056, $dirty, -1, 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous> (multipleScreenLifecycleOwnerUtil.kt:55)');
        }
        $provideSaveableState(suffixKey, content, $composer_0, 14 & $dirty | 112 & $dirty | 896 & $$dirty << 3);
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
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_locru7_k$(p0, p1, p2, p3);
    };
  }
  function RecursiveProvideBeforeScreenContent$composable$lambda_3($content, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-755941626, $changed, -1, 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous> (multipleScreenLifecycleOwnerUtil.kt:58)');
        }
        $content($composer_0, 14 & $$dirty >> 6);
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
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function RecursiveProvideBeforeScreenContent$composable$lambda_4($screenLifecycleOwner, $provideSaveableState, $content, $nextOrNull, $$changed) {
    return function ($composer, $force) {
      RecursiveProvideBeforeScreenContent$composable($screenLifecycleOwner, $provideSaveableState, $content, $nextOrNull, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ScreenModel() {
  }
  function onEach(_this__u8e3s4, $this, screen, block) {
    var tmp = asSequence(_this__u8e3s4);
    var tmp_0 = filter(tmp, ScreenModelStore$onEach$lambda(screen));
    var tmp0_forEach = map(tmp_0, ScreenModelStore$onEach$lambda_0);
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      block(element);
    }
    return Unit_getInstance();
  }
  function get_$stableprop_1() {
    return 0;
  }
  function ScreenModelStore$remove$lambda(key) {
    var tmp0_safe_receiver = ScreenModelStore_getInstance().screenModels_1.get_1mhr4y_k$(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.onDispose_qsasq7_k$();
    }
    var tmp1_this = ScreenModelStore_getInstance();
    // Inline function 'kotlin.collections.minusAssign' call
    var tmp0_minusAssign = tmp1_this.screenModels_1;
    tmp0_minusAssign.remove_8hbkc0_k$(key);
    return Unit_getInstance();
  }
  function ScreenModelStore$remove$lambda_0(key) {
    var tmp0_safe_receiver = ScreenModelStore_getInstance().dependencies_1.get_1mhr4y_k$(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var instance = tmp0_safe_receiver.component1_7eebsc_k$();
      var onDispose = tmp0_safe_receiver.component2_7eebsb_k$();
      tmp$ret$0 = onDispose(instance);
    }
    var tmp1_this = ScreenModelStore_getInstance();
    // Inline function 'kotlin.collections.minusAssign' call
    var tmp0_minusAssign = tmp1_this.dependencies_1;
    tmp0_minusAssign.remove_8hbkc0_k$(key);
    return Unit_getInstance();
  }
  function ScreenModelStore$onEach$lambda($screen) {
    return function (it) {
      return startsWith(it.get_key_18j28a_k$(), $screen.get_key_18j28a_k$());
    };
  }
  function ScreenModelStore$onEach$lambda_0(it) {
    return it.get_key_18j28a_k$();
  }
  function ScreenModelStore() {
    ScreenModelStore_instance = this;
    this.screenModels_1 = ThreadSafeMap_init_$Create$();
    this.dependencies_1 = ThreadSafeMap_init_$Create$();
    this.lastScreenModelKey_1 = MutableStateFlow(null);
    this.$stable_1 = 0;
  }
  protoOf(ScreenModelStore).get_screenModels_q55txd_k$ = function () {
    return this.screenModels_1;
  };
  protoOf(ScreenModelStore).get_dependencies_cvhxma_k$ = function () {
    return this.dependencies_1;
  };
  protoOf(ScreenModelStore).get_lastScreenModelKey_z0eben_k$ = function () {
    return this.lastScreenModelKey_1;
  };
  protoOf(ScreenModelStore).getDependencyKey_vru134_k$ = function (screenModel, name) {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
      var tmp0_firstNotNullOfOrNull = this.screenModels_1;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$0 = tmp0_firstNotNullOfOrNull.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      var tmp0_iterator = tmp$ret$0;
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$1;
        // Inline function 'cafe.adriel.voyager.core.model.ScreenModelStore.getDependencyKey.<anonymous>' call
        tmp$ret$1 = equals(element.get_value_j01efc_k$(), screenModel) ? element.get_key_18j28a_k$() : null;
        var result = tmp$ret$1;
        if (!(result == null)) {
          tmp$ret$2 = result;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var tmp1_elvis_lhs = tmp$ret$2;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = this.lastScreenModelKey_1.get_value_j01efc_k$();
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$4;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$3;
        // Inline function 'cafe.adriel.voyager.core.model.ScreenModelStore.getDependencyKey.<anonymous>' call
        tmp$ret$3 = '' + tmp0_safe_receiver + ':' + name;
        tmp$ret$4 = tmp$ret$3;
        tmp_0 = tmp$ret$4;
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var tmp2_elvis_lhs = tmp;
    return tmp2_elvis_lhs == null ? 'standalone:' + name : tmp2_elvis_lhs;
  };
  protoOf(ScreenModelStore).remove_mhx0ps_k$ = function (screen) {
    onEach(this.screenModels_1, this, screen, ScreenModelStore$remove$lambda);
    onEach(this.dependencies_1, this, screen, ScreenModelStore$remove$lambda_0);
  };
  var ScreenModelStore_instance;
  function ScreenModelStore_getInstance() {
    if (ScreenModelStore_instance == null)
      new ScreenModelStore();
    return ScreenModelStore_instance;
  }
  function commonKeyGeneration(_this__u8e3s4) {
    var tmp0_elvis_lhs = get_multiplatformName(getKClassFromExpression(_this__u8e3s4));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Default ScreenKey not found, please provide your own key');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SnapshotStateStack_init_$Init$(items, minSize, $this) {
    minSize = minSize === VOID ? 0 : minSize;
    SnapshotStateStack.call($this, toList(items), minSize);
    return $this;
  }
  function SnapshotStateStack_init_$Create$(items, minSize) {
    return SnapshotStateStack_init_$Init$(items, minSize, objectCreate(protoOf(SnapshotStateStack)));
  }
  function _set_lastEvent__pgcjtr($this, _set____db54di) {
    var tmp0_setValue = lastEvent$factory();
    return $this.lastEvent$delegate_1.set_value_rnwamw_k$(_set____db54di);
  }
  function get_$stableprop_2() {
    return 0;
  }
  function SnapshotStateStack$items$delegate$lambda(this$0) {
    return function () {
      return this$0.stateStack_1.toList_edfyo7_k$();
    };
  }
  function SnapshotStateStack$lastItemOrNull$delegate$lambda(this$0) {
    return function () {
      return lastOrNull(this$0.stateStack_1);
    };
  }
  function SnapshotStateStack$lastOrNull$delegate$lambda(this$0) {
    return function () {
      return this$0.get_lastItemOrNull_32n3yc_k$();
    };
  }
  function SnapshotStateStack$size$delegate$lambda(this$0) {
    return function () {
      return this$0.stateStack_1.get_size_woubt6_k$();
    };
  }
  function SnapshotStateStack$isEmpty$delegate$lambda(this$0) {
    return function () {
      return this$0.stateStack_1.isEmpty_y1axqb_k$();
    };
  }
  function SnapshotStateStack$canPop$delegate$lambda(this$0, $minSize) {
    return function () {
      return this$0.stateStack_1.get_size_woubt6_k$() > $minSize;
    };
  }
  function SnapshotStateStack$popAll$lambda(it) {
    return false;
  }
  function SnapshotStateStack$popUntil$lambda(this$0, $predicate, $success) {
    return function () {
      var tmp0_safe_receiver = this$0.get_lastItemOrNull_32n3yc_k$();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp$ret$0 = $predicate(tmp0_safe_receiver);
        tmp = tmp$ret$0;
      }
      var tmp1_safe_receiver = tmp;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'cafe.adriel.voyager.core.stack.SnapshotStateStack.popUntil.<anonymous>.<anonymous>' call
        $success._v = tmp1_safe_receiver;
        tmp$ret$1 = tmp1_safe_receiver;
        tmp_0 = tmp$ret$1;
      }
      var tmp2_safe_receiver = tmp_0;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : !tmp2_safe_receiver;
      return tmp3_elvis_lhs == null ? false : tmp3_elvis_lhs;
    };
  }
  function SnapshotStateStack(items, minSize) {
    minSize = minSize === VOID ? 0 : minSize;
    // Inline function 'kotlin.require' call
    var tmp0_require = minSize >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'cafe.adriel.voyager.core.stack.SnapshotStateStack.<anonymous>' call
      tmp$ret$0 = 'Min size ' + minSize + ' is less than zero';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = items.get_size_woubt6_k$() >= minSize;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'cafe.adriel.voyager.core.stack.SnapshotStateStack.<anonymous>' call
      tmp$ret$1 = 'Stack size ' + items.get_size_woubt6_k$() + ' is less than the min size ' + minSize;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.stateStack_1 = toMutableStateList(items);
    this.lastEvent$delegate_1 = mutableStateOf(StackEvent_Idle_getInstance(), neverEqualPolicy());
    var tmp = this;
    tmp.items$delegate_1 = derivedStateOf(SnapshotStateStack$items$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.lastItemOrNull$delegate_1 = derivedStateOf(SnapshotStateStack$lastItemOrNull$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.lastOrNull$delegate_1 = derivedStateOf(SnapshotStateStack$lastOrNull$delegate$lambda(this));
    var tmp_2 = this;
    tmp_2.size$delegate_1 = derivedStateOf(SnapshotStateStack$size$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.isEmpty$delegate_1 = derivedStateOf(SnapshotStateStack$isEmpty$delegate$lambda(this));
    var tmp_4 = this;
    tmp_4.canPop$delegate_1 = derivedStateOf(SnapshotStateStack$canPop$delegate$lambda(this, minSize));
    this.$stable_1 = 0;
  }
  protoOf(SnapshotStateStack).get_stateStack_o4ci68_k$ = function () {
    return this.stateStack_1;
  };
  protoOf(SnapshotStateStack).get_lastEvent_tm6i9x_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = lastEvent$factory_0();
    tmp$ret$0 = this.lastEvent$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(SnapshotStateStack).get_items_it823b_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = items$factory();
    tmp$ret$0 = this.items$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(SnapshotStateStack).get_lastItemOrNull_32n3yc_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = lastItemOrNull$factory();
    tmp$ret$0 = this.lastItemOrNull$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(SnapshotStateStack).get_lastOrNull_9yph3d_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = lastOrNull$factory();
    tmp$ret$0 = this.lastOrNull$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(SnapshotStateStack).get_size_woubt6_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = size$factory();
    tmp$ret$0 = this.size$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(SnapshotStateStack).get_isEmpty_zauvru_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = isEmpty$factory();
    tmp$ret$0 = this.isEmpty$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(SnapshotStateStack).get_canPop_bsgoru_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = canPop$factory();
    tmp$ret$0 = this.canPop$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(SnapshotStateStack).push_s4xdd3_k$ = function (item) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.stateStack_1;
    tmp0_plusAssign.add_1j60pz_k$(item);
    _set_lastEvent__pgcjtr(this, StackEvent_Push_getInstance());
  };
  protoOf(SnapshotStateStack).push_fslscd_k$ = function (items) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.stateStack_1;
    addAll(tmp0_plusAssign, items);
    _set_lastEvent__pgcjtr(this, StackEvent_Push_getInstance());
  };
  protoOf(SnapshotStateStack).replace_6dty19_k$ = function (item) {
    if (this.stateStack_1.isEmpty_y1axqb_k$()) {
      this.push_s4xdd3_k$(item);
    } else {
      this.stateStack_1.set_meu35g_k$(get_lastIndex(this.stateStack_1), item);
    }
    _set_lastEvent__pgcjtr(this, StackEvent_Replace_getInstance());
  };
  protoOf(SnapshotStateStack).replaceAll_jthrx0_k$ = function (item) {
    this.stateStack_1.clear_j9y8zo_k$();
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.stateStack_1;
    tmp0_plusAssign.add_1j60pz_k$(item);
    _set_lastEvent__pgcjtr(this, StackEvent_Replace_getInstance());
  };
  protoOf(SnapshotStateStack).replaceAll_xiv8ls_k$ = function (items) {
    this.stateStack_1.clear_j9y8zo_k$();
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.stateStack_1;
    addAll(tmp0_plusAssign, items);
    _set_lastEvent__pgcjtr(this, StackEvent_Replace_getInstance());
  };
  protoOf(SnapshotStateStack).pop_2dsh_k$ = function () {
    var tmp;
    if (this.get_canPop_bsgoru_k$()) {
      removeLast(this.stateStack_1);
      _set_lastEvent__pgcjtr(this, StackEvent_Pop_getInstance());
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SnapshotStateStack).popAll_u9cw1r_k$ = function () {
    this.popUntil_xktkhk_k$(SnapshotStateStack$popAll$lambda);
  };
  protoOf(SnapshotStateStack).popUntil_xktkhk_k$ = function (predicate) {
    var success = {_v: false};
    var shouldPop = SnapshotStateStack$popUntil$lambda(this, predicate, success);
    while (this.get_canPop_bsgoru_k$() ? shouldPop() : false) {
      removeLast(this.stateStack_1);
    }
    _set_lastEvent__pgcjtr(this, StackEvent_Pop_getInstance());
    return success._v;
  };
  protoOf(SnapshotStateStack).plusAssign_mgw5ag_k$ = function (item) {
    this.push_s4xdd3_k$(item);
  };
  protoOf(SnapshotStateStack).plusAssign_vinuks_k$ = function (items) {
    this.push_fslscd_k$(items);
  };
  protoOf(SnapshotStateStack).clearEvent_bn57no_k$ = function () {
    _set_lastEvent__pgcjtr(this, StackEvent_Idle_getInstance());
  };
  function toMutableStateStack(_this__u8e3s4, minSize) {
    minSize = minSize === VOID ? 0 : minSize;
    return new SnapshotStateStack(_this__u8e3s4, minSize);
  }
  function lastEvent$factory() {
    return getPropertyCallableRef('lastEvent', 1, KMutableProperty1, function (receiver) {
      return receiver.get_lastEvent_tm6i9x_k$();
    }, function (receiver, value) {
      return _set_lastEvent__pgcjtr(receiver, value);
    });
  }
  function lastEvent$factory_0() {
    return getPropertyCallableRef('lastEvent', 1, KMutableProperty1, function (receiver) {
      return receiver.get_lastEvent_tm6i9x_k$();
    }, function (receiver, value) {
      return _set_lastEvent__pgcjtr(receiver, value);
    });
  }
  function items$factory() {
    return getPropertyCallableRef('items', 1, KProperty1, function (receiver) {
      return receiver.get_items_it823b_k$();
    }, null);
  }
  function lastItemOrNull$factory() {
    return getPropertyCallableRef('lastItemOrNull', 1, KProperty1, function (receiver) {
      return receiver.get_lastItemOrNull_32n3yc_k$();
    }, null);
  }
  function lastOrNull$factory() {
    return getPropertyCallableRef('lastOrNull', 1, KProperty1, function (receiver) {
      return receiver.get_lastOrNull_9yph3d_k$();
    }, null);
  }
  function size$factory() {
    return getPropertyCallableRef('size', 1, KProperty1, function (receiver) {
      return receiver.get_size_woubt6_k$();
    }, null);
  }
  function isEmpty$factory() {
    return getPropertyCallableRef('isEmpty', 1, KProperty1, function (receiver) {
      return receiver.get_isEmpty_zauvru_k$();
    }, null);
  }
  function canPop$factory() {
    return getPropertyCallableRef('canPop', 1, KProperty1, function (receiver) {
      return receiver.get_canPop_bsgoru_k$();
    }, null);
  }
  function Stack() {
  }
  var StackEvent_Push_instance;
  var StackEvent_Replace_instance;
  var StackEvent_Pop_instance;
  var StackEvent_Idle_instance;
  function values() {
    return [StackEvent_Push_getInstance(), StackEvent_Replace_getInstance(), StackEvent_Pop_getInstance(), StackEvent_Idle_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Push':
        return StackEvent_Push_getInstance();
      case 'Replace':
        return StackEvent_Replace_getInstance();
      case 'Pop':
        return StackEvent_Pop_getInstance();
      case 'Idle':
        return StackEvent_Idle_getInstance();
      default:
        StackEvent_initEntries();
        THROW_ISE();
        break;
    }
  }
  var StackEvent_entriesInitialized;
  function StackEvent_initEntries() {
    if (StackEvent_entriesInitialized)
      return Unit_getInstance();
    StackEvent_entriesInitialized = true;
    StackEvent_Push_instance = new StackEvent('Push', 0);
    StackEvent_Replace_instance = new StackEvent('Replace', 1);
    StackEvent_Pop_instance = new StackEvent('Pop', 2);
    StackEvent_Idle_instance = new StackEvent('Idle', 3);
  }
  function StackEvent(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function StackEvent_Push_getInstance() {
    StackEvent_initEntries();
    return StackEvent_Push_instance;
  }
  function StackEvent_Replace_getInstance() {
    StackEvent_initEntries();
    return StackEvent_Replace_instance;
  }
  function StackEvent_Pop_getInstance() {
    StackEvent_initEntries();
    return StackEvent_Pop_instance;
  }
  function StackEvent_Idle_getInstance() {
    StackEvent_initEntries();
    return StackEvent_Idle_instance;
  }
  function _get_delegate__idh0py($this) {
    return $this.delegate_1;
  }
  function ThreadSafeMap_init_$Init$($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    ThreadSafeMap.call($this, tmp$ret$0);
    return $this;
  }
  function ThreadSafeMap_init_$Create$() {
    return ThreadSafeMap_init_$Init$(objectCreate(protoOf(ThreadSafeMap)));
  }
  function _get_syncObject__eretwv($this) {
    return $this.syncObject_1;
  }
  function get_$stableprop_3() {
    return 8;
  }
  function ThreadSafeMap(delegate) {
    this.delegate_1 = delegate;
    this.syncObject_1 = new Object();
    this.$stable_1 = 8;
  }
  protoOf(ThreadSafeMap).get_size_woubt6_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = this.syncObject_1;
    var tmp$ret$0;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeMap.<get-size>.<anonymous>' call
    tmp$ret$0 = this.delegate_1.get_size_woubt6_k$();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ThreadSafeMap).containsKey_wgk31w_k$ = function (key) {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = this.syncObject_1;
    var tmp$ret$0;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeMap.containsKey.<anonymous>' call
    tmp$ret$0 = this.delegate_1.containsKey_wgk31w_k$(key);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ThreadSafeMap).containsValue_5viga1_k$ = function (value) {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = this.syncObject_1;
    var tmp$ret$0;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeMap.containsValue.<anonymous>' call
    tmp$ret$0 = this.delegate_1.containsValue_5viga1_k$(value);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ThreadSafeMap).get_1mhr4y_k$ = function (key) {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = this.syncObject_1;
    var tmp$ret$0;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeMap.get.<anonymous>' call
    tmp$ret$0 = this.delegate_1.get_1mhr4y_k$(key);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ThreadSafeMap).isEmpty_y1axqb_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = this.syncObject_1;
    var tmp$ret$0;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeMap.isEmpty.<anonymous>' call
    tmp$ret$0 = this.delegate_1.isEmpty_y1axqb_k$();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ThreadSafeMap).get_entries_p20ztl_k$ = function () {
    return this.delegate_1.get_entries_p20ztl_k$();
  };
  protoOf(ThreadSafeMap).get_keys_wop4xp_k$ = function () {
    return this.delegate_1.get_keys_wop4xp_k$();
  };
  protoOf(ThreadSafeMap).get_values_ksazhn_k$ = function () {
    return this.delegate_1.get_values_ksazhn_k$();
  };
  protoOf(ThreadSafeMap).clear_j9y8zo_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = this.syncObject_1;
    this.delegate_1.clear_j9y8zo_k$();
    tmp$ret$0 = Unit_getInstance();
  };
  protoOf(ThreadSafeMap).put_3mhbri_k$ = function (key, value) {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = this.syncObject_1;
    var tmp$ret$0;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeMap.put.<anonymous>' call
    tmp$ret$0 = this.delegate_1.put_3mhbri_k$(key, value);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ThreadSafeMap).putAll_mee1c3_k$ = function (from) {
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = this.syncObject_1;
    this.delegate_1.putAll_mee1c3_k$(from);
    tmp$ret$0 = Unit_getInstance();
  };
  protoOf(ThreadSafeMap).remove_8hbkc0_k$ = function (key) {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = this.syncObject_1;
    var tmp$ret$0;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeMap.remove.<anonymous>' call
    tmp$ret$0 = this.delegate_1.remove_8hbkc0_k$(key);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  function _get_delegate__idh0py_0($this) {
    return $this.delegate_1;
  }
  function ThreadSafeSet_init_$Init$($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$0 = LinkedHashSet_init_$Create$();
    ThreadSafeSet.call($this, tmp$ret$0);
    return $this;
  }
  function ThreadSafeSet_init_$Create$() {
    return ThreadSafeSet_init_$Init$(objectCreate(protoOf(ThreadSafeSet)));
  }
  function _get_syncObject__eretwv_0($this) {
    return $this.syncObject_1;
  }
  function get_$stableprop_4() {
    return 8;
  }
  function ThreadSafeSet(delegate) {
    this.delegate_1 = delegate;
    this.syncObject_1 = new Object();
    this.$stable_1 = 8;
  }
  protoOf(ThreadSafeSet).get_size_woubt6_k$ = function () {
    return this.delegate_1.get_size_woubt6_k$();
  };
  protoOf(ThreadSafeSet).contains_2ehdtg_k$ = function (element) {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = this.syncObject_1;
    var tmp$ret$0;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeSet.contains.<anonymous>' call
    tmp$ret$0 = this.delegate_1.contains_2ehdt1_k$(element);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ThreadSafeSet).contains_2ehdt1_k$ = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.contains_2ehdtg_k$((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(ThreadSafeSet).containsAll_jr3fy7_k$ = function (elements) {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = this.syncObject_1;
    var tmp$ret$0;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeSet.containsAll.<anonymous>' call
    tmp$ret$0 = this.delegate_1.containsAll_jr3fla_k$(elements);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ThreadSafeSet).containsAll_jr3fla_k$ = function (elements) {
    return this.containsAll_jr3fy7_k$(elements);
  };
  protoOf(ThreadSafeSet).isEmpty_y1axqb_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = this.syncObject_1;
    var tmp$ret$0;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeSet.isEmpty.<anonymous>' call
    tmp$ret$0 = this.delegate_1.isEmpty_y1axqb_k$();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ThreadSafeSet).iterator_jk1svi_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = this.syncObject_1;
    var tmp$ret$0;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeSet.iterator.<anonymous>' call
    tmp$ret$0 = this.delegate_1.iterator_jk1svi_k$();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ThreadSafeSet).add_1j60qe_k$ = function (element) {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = this.syncObject_1;
    var tmp$ret$0;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeSet.add.<anonymous>' call
    tmp$ret$0 = this.delegate_1.add_1j60pz_k$(element);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ThreadSafeSet).add_1j60pz_k$ = function (element) {
    return this.add_1j60qe_k$((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(ThreadSafeSet).addAll_oxxjwh_k$ = function (elements) {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = this.syncObject_1;
    var tmp$ret$0;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeSet.addAll.<anonymous>' call
    tmp$ret$0 = this.delegate_1.addAll_oxxjjk_k$(elements);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ThreadSafeSet).addAll_oxxjjk_k$ = function (elements) {
    return this.addAll_oxxjwh_k$(elements);
  };
  protoOf(ThreadSafeSet).clear_j9y8zo_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = this.syncObject_1;
    this.delegate_1.clear_j9y8zo_k$();
    tmp$ret$0 = Unit_getInstance();
    return tmp$ret$0;
  };
  protoOf(ThreadSafeSet).remove_8hbkbr_k$ = function (element) {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = this.syncObject_1;
    var tmp$ret$0;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeSet.remove.<anonymous>' call
    tmp$ret$0 = this.delegate_1.remove_8hbkc6_k$(element);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ThreadSafeSet).remove_8hbkc6_k$ = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.remove_8hbkbr_k$((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(ThreadSafeSet).removeAll_99tois_k$ = function (elements) {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = this.syncObject_1;
    var tmp$ret$0;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeSet.removeAll.<anonymous>' call
    tmp$ret$0 = this.delegate_1.removeAll_99to5v_k$(elements);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ThreadSafeSet).removeAll_99to5v_k$ = function (elements) {
    return this.removeAll_99tois_k$(elements);
  };
  protoOf(ThreadSafeSet).retainAll_j44spx_k$ = function (elements) {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = this.syncObject_1;
    var tmp$ret$0;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeSet.retainAll.<anonymous>' call
    tmp$ret$0 = this.delegate_1.retainAll_j44sd0_k$(elements);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ThreadSafeSet).retainAll_j44sd0_k$ = function (elements) {
    return this.retainAll_j44spx_k$(elements);
  };
  function get_configurationChecker() {
    _init_properties_ConfigurationChecker_kt__y5hypr();
    return configurationChecker;
  }
  var configurationChecker;
  function ConfigurationChecker() {
  }
  protoOf(ConfigurationChecker).isChangingConfigurations_8pvl5g_k$ = function () {
    return false;
  };
  var properties_initialized_ConfigurationChecker_kt_7ida0v;
  function _init_properties_ConfigurationChecker_kt__y5hypr() {
    if (properties_initialized_ConfigurationChecker_kt_7ida0v) {
    } else {
      properties_initialized_ConfigurationChecker_kt_7ida0v = true;
      configurationChecker = new ConfigurationChecker();
    }
  }
  function DefaultNavigatorScreenLifecycleProvider() {
  }
  protoOf(DefaultNavigatorScreenLifecycleProvider).provide_cjbgr0_k$ = function (screen) {
    return emptyList();
  };
  function get_multiplatformName(_this__u8e3s4) {
    return _this__u8e3s4.get_simpleName_r6f8py_k$();
  }
  function Screen() {
  }
  //region block: post-declaration
  protoOf(DefaultScreenLifecycleOwner).ProvideBeforeScreenContent_qq6ek4_k$ = ProvideBeforeScreenContent;
  protoOf(DefaultScreenLifecycleOwner).onDispose_n2dqvw_k$ = onDispose;
  protoOf(DefaultScreenLifecycleOwner).ProvideBeforeScreenContent$composable_6gw3qm_k$ = ProvideBeforeScreenContent$composable;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = MultipleProvideBeforeScreenContent$composable;
  _.$_$.b = getNavigatorScreenLifecycleOwner$composable;
  _.$_$.c = rememberScreenLifecycleOwner$composable;
  _.$_$.d = Screen;
  _.$_$.e = Stack;
  _.$_$.f = toMutableStateStack;
  _.$_$.g = StackEvent_Pop_getInstance;
  _.$_$.h = StackEvent_Replace_getInstance;
  _.$_$.i = ThreadSafeSet_init_$Create$;
  _.$_$.j = ScreenLifecycleStore_getInstance;
  _.$_$.k = ScreenModelStore_getInstance;
  //endregion
  return _;
}));
