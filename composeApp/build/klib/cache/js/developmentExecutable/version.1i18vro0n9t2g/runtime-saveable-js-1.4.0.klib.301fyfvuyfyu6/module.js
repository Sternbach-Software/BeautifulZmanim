(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './androidx-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-runtime-saveable'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-runtime-saveable'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-runtime-saveable'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'androidx-runtime-saveable'.");
    }
    root['androidx-runtime-saveable'] = factory(typeof this['androidx-runtime-saveable'] === 'undefined' ? {} : this['androidx-runtime-saveable'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var THROW_CCE = kotlin_kotlin.$_$.sk;
  var Unit_getInstance = kotlin_kotlin.$_$.k6;
  var toString = kotlin_kotlin.$_$.rf;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var charSequenceLength = kotlin_kotlin.$_$.xd;
  var $get_currentCompositeKeyHash$$composable_u3vbzj = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  var toString_0 = kotlin_kotlin.$_$.nj;
  var isInterface = kotlin_kotlin.$_$.xe;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j2;
  var isObject = kotlin_kotlin.$_$.ze;
  var rememberUpdatedState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var toString_1 = kotlin_kotlin.$_$.fm;
  var referentialEqualityPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var structuralEqualityPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var neverEqualPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o1;
  var SnapshotMutableState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var protoOf = kotlin_kotlin.$_$.mf;
  var classMeta = kotlin_kotlin.$_$.zd;
  var VOID = kotlin_kotlin.$_$.jm;
  var setMetadataFor = kotlin_kotlin.$_$.nf;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var interfaceMeta = kotlin_kotlin.$_$.oe;
  var toMutableMap = kotlin_kotlin.$_$.hc;
  var objectMeta = kotlin_kotlin.$_$.lf;
  var Map = kotlin_kotlin.$_$.f7;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.b1;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var get_reuseKey = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var DisposableEffect$composable_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var isBlank = kotlin_kotlin.$_$.gi;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.q;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var arrayListOf = kotlin_kotlin.$_$.t7;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SaverScope, 'SaverScope', interfaceMeta);
  setMetadataFor(sam$androidx_compose_runtime_saveable_SaverScope$0, 'sam$androidx_compose_runtime_saveable_SaverScope$0', classMeta, VOID, [SaverScope]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(SaveableStateHolder, 'SaveableStateHolder', interfaceMeta);
  setMetadataFor(RegistryHolder, 'RegistryHolder', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(SaveableStateHolderImpl, 'SaveableStateHolderImpl', classMeta, VOID, [SaveableStateHolder]);
  setMetadataFor(Entry, 'Entry', interfaceMeta);
  setMetadataFor(SaveableStateRegistry_0, 'SaveableStateRegistry', interfaceMeta);
  setMetadataFor(SaveableStateRegistryImpl$registerProvider$3, VOID, classMeta, VOID, [Entry]);
  setMetadataFor(SaveableStateRegistryImpl, 'SaveableStateRegistryImpl', classMeta, VOID, [SaveableStateRegistry_0]);
  setMetadataFor(Saver, 'Saver', interfaceMeta);
  setMetadataFor(Saver$1, VOID, classMeta, VOID, [Saver]);
  //endregion
  function listSaver(save, restore) {
    var tmp = listSaver$lambda(save);
    return Saver_0(tmp, typeof restore === 'function' ? restore : THROW_CCE());
  }
  function listSaver$lambda($save) {
    return function ($this$Saver, it) {
      var list = $save($this$Saver, it);
      var inductionVariable = 0;
      var last = list.get_size_woubt6_k$() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = list.get_fkrdnv_k$(index);
          if (!(item == null)) {
            // Inline function 'kotlin.require' call
            var tmp0_require = $this$Saver.canBeSaved_nnajrq_k$(item);
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
          }
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$1 = !list.isEmpty_y1axqb_k$();
      if (tmp$ret$1) {
        tmp_0 = ArrayList_init_$Create$(list);
      } else {
        tmp_0 = null;
      }
      return tmp_0;
    };
  }
  function get_MaxSupportedRadix() {
    return MaxSupportedRadix;
  }
  var MaxSupportedRadix;
  function rememberSaveable$composable(inputs, saver, key, init, $composer, $changed, $default) {
    var saver_0 = {_v: saver};
    var key_0 = key;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1490773347);
    sourceInformation($composer_0, 'C(rememberSaveable$composable)P(1,3,2)80@3500L7,82@3597L244,95@4209L27,96@4262L27,98@4299L441:RememberSaveable.kt#r2ddri');
    if (!(($default & 2) === 0)) {
      saver_0._v = autoSaver();
    }
    if (!(($default & 4) === 0))
      key_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-1490773347, $changed, -1, 'androidx.compose.runtime.saveable.rememberSaveable$composable (RememberSaveable.kt:65)');
    }
    $composer_0.startReplaceableGroup_rp6air_k$(1790924732);
    sourceInformation($composer_0, '75@3334L23');
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNullOrEmpty' call
    var tmp0_isNullOrEmpty = key_0;
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = tmp0_isNullOrEmpty == null ? true : charSequenceLength(tmp0_isNullOrEmpty) === 0;
    if (!tmp$ret$0) {
      tmp = key_0;
    } else {
      tmp = toString_0($get_currentCompositeKeyHash$$composable_u3vbzj($composer_0, 0), MaxSupportedRadix);
    }
    var tmp1_group = tmp;
    $composer_0.endReplaceableGroup_er37p7_k$();
    var finalKey = tmp1_group;
    var tmp_0 = saver_0._v;
    if (!(tmp_0 == null) ? isInterface(tmp_0, Saver) : false)
      tmp_0;
    else
      THROW_CCE();
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp1_$get_current$$composable_gn3xww = get_LocalSaveableStateRegistry();
    var tmp2_$get_current$$composable_g4n2vl = $composer_0;
    var $composer_1 = tmp2_$get_current$$composable_g4n2vl;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_11nid3_k$(tmp1_$get_current$$composable_gn3xww);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$1 = tmp0;
    var registry = tmp$ret$1;
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp6_remember$composable = inputs.slice();
    var tmp7_remember$composable = $composer_0;
    var $composer_2 = tmp7_remember$composable;
    $composer_2.startReplaceableGroup_rp6air_k$(-1603429786);
    sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var indexedObject = tmp6_remember$composable;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var key_1 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      invalid = !!(invalid | $composer_2.changed_ga7h3f_k$(key_1));
    }
    var tmp$ret$7;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp4_cache = $composer_2;
    var tmp5_cache = invalid;
    var tmp$ret$6;
    // Inline function 'kotlin.let' call
    var tmp3_let = tmp4_cache.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp5_cache ? true : tmp3_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.saveable.rememberSaveable$composable.<anonymous>' call
      var tmp0_safe_receiver = registry;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.consumeRestored_kptfch_k$(finalKey);
      var tmp_2;
      if (tmp1_safe_receiver == null) {
        tmp_2 = null;
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.saveable.rememberSaveable$composable.<anonymous>.<anonymous>' call
        tmp$ret$2 = saver_0._v.restore_uzeo8_k$(tmp1_safe_receiver);
        tmp$ret$3 = tmp$ret$2;
        tmp_2 = tmp$ret$3;
      }
      var restored = tmp_2;
      var tmp2_elvis_lhs = restored;
      tmp$ret$4 = tmp2_elvis_lhs == null ? init() : tmp2_elvis_lhs;
      var value = tmp$ret$4;
      tmp4_cache.updateRememberedValue_l1colo_k$(value);
      tmp_1 = value;
    } else {
      tmp_1 = tmp3_let;
    }
    tmp$ret$5 = tmp_1;
    tmp$ret$6 = tmp$ret$5;
    var tmp_3 = tmp$ret$6;
    tmp$ret$7 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
    var tmp0_0 = tmp$ret$7;
    $composer_2.endReplaceableGroup_er37p7_k$();
    tmp$ret$8 = tmp0_0;
    var value_0 = tmp$ret$8;
    if (!(registry == null)) {
      var saverState = rememberUpdatedState$composable(saver_0._v, $composer_0, 0);
      var valueState = rememberUpdatedState$composable(value_0, $composer_0, 0);
      DisposableEffect$composable(registry, finalKey, rememberSaveable$composable$lambda(registry, finalKey, saverState, valueState), $composer_0, 0);
    }
    var tmp0_1 = value_0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_1;
  }
  function requireCanBeSaved(_this__u8e3s4, value) {
    if (!(value == null) ? !_this__u8e3s4.canBeSaved_nnajrq_k$(value) : false) {
      var tmp;
      if (!(value == null) ? isInterface(value, SnapshotMutableState) : false) {
        var tmp_0;
        if ((!(value.get_policy_i5q4hn_k$() === neverEqualPolicy()) ? !(value.get_policy_i5q4hn_k$() === structuralEqualityPolicy()) : false) ? !(value.get_policy_i5q4hn_k$() === referentialEqualityPolicy()) : false) {
          tmp_0 = 'If you use a custom SnapshotMutationPolicy for your MutableState you have to write a custom Saver';
        } else {
          tmp_0 = 'MutableState containing ' + toString_1(value.get_value_j01efc_k$()) + ' cannot be saved using the current ' + 'SaveableStateRegistry. The default implementation only supports types ' + 'which can be stored inside the Bundle. Please consider implementing a ' + 'custom Saver for this class and pass it as a stateSaver parameter to ' + 'rememberSaveable().';
        }
        tmp = tmp_0;
      } else {
        tmp = toString_1(value) + ' cannot be saved using the current SaveableStateRegistry. The default ' + 'implementation only supports types which can be stored inside the Bundle' + '. Please consider implementing a custom Saver for this class and pass it' + ' to rememberSaveable().';
      }
      throw IllegalArgumentException_init_$Create$(tmp);
    }
  }
  function sam$androidx_compose_runtime_saveable_SaverScope$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_saveable_SaverScope$0).canBeSaved_nnajrq_k$ = function (value) {
    return this.function_1(value);
  };
  function rememberSaveable$composable$lambda$lambda$lambda($registry) {
    return function (it) {
      return $registry.canBeSaved_nnajrq_k$(it);
    };
  }
  function rememberSaveable$composable$lambda$lambda($saverState, $valueState, $registry) {
    return function () {
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      var tmp0_with = $saverState.get_value_j01efc_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.saveable.rememberSaveable$composable.<anonymous>.<anonymous>.<anonymous>' call
      var tmp = rememberSaveable$composable$lambda$lambda$lambda($registry);
      tmp$ret$0 = tmp0_with.save_ef702r_k$(new sam$androidx_compose_runtime_saveable_SaverScope$0(tmp), $valueState.get_value_j01efc_k$());
      tmp$ret$1 = tmp$ret$0;
      return tmp$ret$1;
    };
  }
  function _no_name_provided__qut3iv($entry) {
    this.$entry_1 = $entry;
  }
  protoOf(_no_name_provided__qut3iv).dispose_3n44we_k$ = function () {
    // Inline function 'androidx.compose.runtime.saveable.rememberSaveable$composable.<anonymous>.<anonymous>' call
    this.$entry_1.unregister_ibszrp_k$();
  };
  function rememberSaveable$composable$lambda($registry, $finalKey, $saverState, $valueState) {
    return function ($this$DisposableEffect) {
      var valueProvider = rememberSaveable$composable$lambda$lambda($saverState, $valueState, $registry);
      requireCanBeSaved($registry, valueProvider());
      var entry = $registry.registerProvider_h94pml_k$($finalKey, valueProvider);
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv(entry);
      return tmp$ret$0;
    };
  }
  function SaveableStateHolder() {
  }
  function rememberSaveableStateHolder$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1658217662);
    sourceInformation($composer_0, 'C(rememberSaveableStateHolder$composable)*61@2439L41,59@2369L111,64@2554L7:SaveableStateHolder.kt#r2ddri');
    if (isTraceInProgress()) {
      traceEventStart(-1658217662, $changed, -1, 'androidx.compose.runtime.saveable.rememberSaveableStateHolder$composable (SaveableStateHolder.kt:58)');
    }
    var tmp$ret$6;
    // Inline function 'kotlin.apply' call
    var tmp = Companion_getInstance_0().Saver_1;
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp2_remember$composable = $composer_0;
    var $composer_1 = tmp2_remember$composable;
    $composer_1.startReplaceableGroup_rp6air_k$(547886695);
    sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_0;
    if (false ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.saveable.rememberSaveableStateHolder$composable.<anonymous>' call
      tmp$ret$0 = rememberSaveableStateHolder$composable$lambda;
      var value = tmp$ret$0;
      tmp1_cache.updateRememberedValue_l1colo_k$(value);
      tmp_0 = value;
    } else {
      tmp_0 = tmp0_let;
    }
    tmp$ret$1 = tmp_0;
    tmp$ret$2 = tmp$ret$1;
    var tmp_1 = tmp$ret$2;
    tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    var tmp0 = tmp$ret$3;
    $composer_1.endReplaceableGroup_er37p7_k$();
    tmp$ret$4 = tmp0;
    var tmp3_apply = rememberSaveable$composable([], tmp, null, tmp$ret$4, $composer_0, 8, 4);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.saveable.rememberSaveableStateHolder$composable.<anonymous>' call
    var tmp_2 = tmp3_apply;
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalSaveableStateRegistry();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_2 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_0 = $composer_2.consume_11nid3_k$(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_2);
    tmp$ret$5 = tmp0_0;
    tmp_2.parentSaveableStateRegistry_1 = tmp$ret$5;
    tmp$ret$6 = tmp3_apply;
    var tmp1_group = tmp$ret$6;
    var tmp0_1 = tmp1_group;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_1;
  }
  function SaveableStateHolderImpl$RegistryHolder$registry$lambda(this$0) {
    return function (it) {
      var tmp0_safe_receiver = this$0.parentSaveableStateRegistry_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.canBeSaved_nnajrq_k$(it);
      return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
    };
  }
  function SaveableStateHolderImpl$Companion$Saver$lambda($this$Saver, it) {
    return saveAll(it);
  }
  function SaveableStateHolderImpl$Companion$Saver$lambda_0(it) {
    return new SaveableStateHolderImpl(it);
  }
  function _get_savedStates__8lkyig($this) {
    return $this.savedStates_1;
  }
  function _get_registryHolders__cest15($this) {
    return $this.registryHolders_1;
  }
  function saveAll($this) {
    var map = toMutableMap($this.savedStates_1);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = $this.registryHolders_1.get_values_ksazhn_k$();
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.saveAll.<anonymous>' call
      element.saveTo_j93loz_k$(map);
    }
    var tmp$ret$1;
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp;
    if (map.isEmpty_y1axqb_k$()) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.saveAll.<anonymous>' call
      tmp$ret$0 = null;
      tmp = tmp$ret$0;
    } else {
      tmp = map;
    }
    tmp$ret$1 = tmp;
    return tmp$ret$1;
  }
  function RegistryHolder($outer, key) {
    this.$this_1 = $outer;
    this.key_1 = key;
    this.shouldSave_1 = true;
    var tmp = this;
    var tmp_0 = this.$this_1.savedStates_1.get_1mhr4y_k$(this.key_1);
    tmp.registry_1 = SaveableStateRegistry(tmp_0, SaveableStateHolderImpl$RegistryHolder$registry$lambda(this.$this_1));
  }
  protoOf(RegistryHolder).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(RegistryHolder).set_shouldSave_ihm4ck_k$ = function (_set____db54di) {
    this.shouldSave_1 = _set____db54di;
  };
  protoOf(RegistryHolder).get_shouldSave_p014mf_k$ = function () {
    return this.shouldSave_1;
  };
  protoOf(RegistryHolder).get_registry_rt8npi_k$ = function () {
    return this.registry_1;
  };
  protoOf(RegistryHolder).saveTo_j93loz_k$ = function (map) {
    if (this.shouldSave_1) {
      var savedData = this.registry_1.performSave_ohn24i_k$();
      if (savedData.isEmpty_y1axqb_k$()) {
        // Inline function 'kotlin.collections.minusAssign' call
        var tmp0_minusAssign = this.key_1;
        map.remove_8hbkc0_k$(tmp0_minusAssign);
      } else {
        // Inline function 'kotlin.collections.set' call
        var tmp1_set = this.key_1;
        map.put_3mhbri_k$(tmp1_set, savedData);
      }
    }
  };
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = SaveableStateHolderImpl$Companion$Saver$lambda;
    tmp.Saver_1 = Saver_0(tmp_0, SaveableStateHolderImpl$Companion$Saver$lambda_0);
  }
  protoOf(Companion).get_Saver_igssp8_k$ = function () {
    return this.Saver_1;
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function _no_name_provided__qut3iv_0($registryHolder, this$0, $key) {
    this.$registryHolder_1 = $registryHolder;
    this.this$0__1 = this$0;
    this.$key_1 = $key;
  }
  protoOf(_no_name_provided__qut3iv_0).dispose_3n44we_k$ = function () {
    // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider$composable.<anonymous>.<anonymous>.<anonymous>' call
    this.$registryHolder_1.saveTo_j93loz_k$(this.this$0__1.savedStates_1);
    var tmp0_this = this.this$0__1;
    // Inline function 'kotlin.collections.minusAssign' call
    var tmp0_minusAssign = tmp0_this.registryHolders_1;
    tmp0_minusAssign.remove_8hbkc0_k$(this.$key_1);
  };
  function SaveableStateHolderImpl$SaveableStateProvider$composable$lambda(this$0, $key, $registryHolder) {
    return function ($this$DisposableEffect) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.contains' call
      var tmp0_contains = this$0.registryHolders_1;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.containsKey' call
      tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).containsKey_wgk31w_k$($key);
      tmp$ret$1 = tmp$ret$0;
      var tmp1_require = !tmp$ret$1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (!tmp1_require) {
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider$composable.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$2 = 'Key ' + toString($key) + ' was used multiple times ';
        var message = tmp$ret$2;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var tmp0_this = this$0;
      var tmp2_minusAssign = tmp0_this.savedStates_1;
      tmp2_minusAssign.remove_8hbkc0_k$($key);
      var tmp3_set = this$0.registryHolders_1;
      tmp3_set.put_3mhbri_k$($key, $registryHolder);
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$3 = new _no_name_provided__qut3iv_0($registryHolder, this$0, $key);
      return tmp$ret$3;
    };
  }
  function SaveableStateHolderImpl$SaveableStateProvider$composable$lambda_0($tmp0_rcvr, $key, $content, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.SaveableStateProvider$composable_n5yi3h_k$($key, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SaveableStateHolderImpl(savedStates) {
    Companion_getInstance_0();
    var tmp;
    if (savedStates === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp$ret$0 = LinkedHashMap_init_$Create$();
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = savedStates;
    }
    savedStates = tmp;
    this.savedStates_1 = savedStates;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$1 = LinkedHashMap_init_$Create$();
    tmp_0.registryHolders_1 = tmp$ret$1;
    this.parentSaveableStateRegistry_1 = null;
  }
  protoOf(SaveableStateHolderImpl).set_parentSaveableStateRegistry_ghb2py_k$ = function (_set____db54di) {
    this.parentSaveableStateRegistry_1 = _set____db54di;
  };
  protoOf(SaveableStateHolderImpl).get_parentSaveableStateRegistry_5mprdw_k$ = function () {
    return this.parentSaveableStateRegistry_1;
  };
  protoOf(SaveableStateHolderImpl).SaveableStateProvider_2masgx_k$ = function (key, content) {
    illegalDecoyCallException('SaveableStateProvider');
  };
  protoOf(SaveableStateHolderImpl).removeState_5vvsww_k$ = function (key) {
    var registryHolder = this.registryHolders_1.get_1mhr4y_k$(key);
    if (!(registryHolder == null)) {
      registryHolder.shouldSave_1 = false;
    } else {
      var tmp0_this = this;
      // Inline function 'kotlin.collections.minusAssign' call
      var tmp0_minusAssign = tmp0_this.savedStates_1;
      tmp0_minusAssign.remove_8hbkc0_k$(key);
    }
  };
  protoOf(SaveableStateHolderImpl).SaveableStateProvider$composable_n5yi3h_k$ = function (key, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1898146948);
    sourceInformation($composer_0, 'C(SaveableStateProvider$composable)P(1)75@2967L923:SaveableStateHolder.kt#r2ddri');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(1898146948, $dirty, -1, 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider$composable (SaveableStateHolder.kt:74)');
    }
    // Inline function 'androidx.compose.runtime.ReusableContent$composable' call
    var tmp0_ReusableContent$composable = $composer_0;
    var tmp1_ReusableContent$composable = 14 & $dirty;
    var $composer_1 = tmp0_ReusableContent$composable;
    $composer_1.startReplaceableGroup_rp6air_k$(1346827672);
    sourceInformation($composer_1, 'CC(ReusableContent$composable)P(1)145@5313L9:Composables.kt#9igjgp');
    $composer_1.startReusableGroup_2z9l41_k$(get_reuseKey(), key);
    // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider$composable.<anonymous>' call
    var tmp2__anonymous__z9zvc9 = $composer_1;
    var tmp3__anonymous__ufb84q = 14 & tmp1_ReusableContent$composable >> 3;
    var $composer_2 = tmp2__anonymous__z9zvc9;
    sourceInformationMarkerStart($composer_2, -65727059, 'C76@3023L321,83@3357L150,87@3520L360:SaveableStateHolder.kt#r2ddri');
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp2_remember$composable = $composer_2;
    var $composer_3 = tmp2_remember$composable;
    $composer_3.startReplaceableGroup_rp6air_k$(547886695);
    sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_3;
    var tmp$ret$3;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (false ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider$composable.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.require' call
      var tmp0_safe_receiver = this.parentSaveableStateRegistry_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.canBeSaved_nnajrq_k$(key);
      var tmp0_require = tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider$composable.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$0 = 'Type of the key ' + toString(key) + ' is not supported. On Android you can only use types ' + 'which can be stored inside the Bundle.';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp$ret$1 = new RegistryHolder(this, key);
      var value = tmp$ret$1;
      tmp1_cache.updateRememberedValue_l1colo_k$(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$2 = tmp;
    tmp$ret$3 = tmp$ret$2;
    var tmp_0 = tmp$ret$3;
    tmp$ret$4 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$4;
    $composer_3.endReplaceableGroup_er37p7_k$();
    tmp$ret$5 = tmp0;
    var registryHolder = tmp$ret$5;
    CompositionLocalProvider$composable([get_LocalSaveableStateRegistry().provides_3e53yf_k$(registryHolder.registry_1)], content, $composer_2, 112 & $dirty);
    DisposableEffect$composable_0(Unit_getInstance(), SaveableStateHolderImpl$SaveableStateProvider$composable$lambda(this, key, registryHolder), $composer_2, 6);
    sourceInformationMarkerEnd($composer_2);
    $composer_1.endReusableGroup_jxruvs_k$();
    $composer_1.endReplaceableGroup_er37p7_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_rcvr = this;
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(SaveableStateHolderImpl$SaveableStateProvider$composable$lambda_0(tmp0_rcvr, key, content, $changed));
    }
  };
  function rememberSaveableStateHolder$composable$lambda() {
    return new SaveableStateHolderImpl();
  }
  function get_LocalSaveableStateRegistry() {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return LocalSaveableStateRegistry;
  }
  var LocalSaveableStateRegistry;
  function SaveableStateRegistry(restoredValues, canBeSaved) {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return new SaveableStateRegistryImpl(restoredValues, canBeSaved);
  }
  function Entry() {
  }
  function SaveableStateRegistry_0() {
  }
  function _get_canBeSaved__pps3rd($this) {
    return $this.canBeSaved_1;
  }
  function _get_restored__60hukr($this) {
    return $this.restored_1;
  }
  function _get_valueProviders__d74c8q($this) {
    return $this.valueProviders_1;
  }
  function SaveableStateRegistryImpl$registerProvider$3(this$0, $key, $valueProvider) {
    this.this$0__1 = this$0;
    this.$key_1 = $key;
    this.$valueProvider_1 = $valueProvider;
  }
  protoOf(SaveableStateRegistryImpl$registerProvider$3).unregister_ibszrp_k$ = function () {
    var list = this.this$0__1.valueProviders_1.remove_8hbkc0_k$(this.$key_1);
    var tmp0_safe_receiver = list;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.remove_8hbkc6_k$(this.$valueProvider_1);
    var tmp;
    if (!(list == null)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$0 = !list.isEmpty_y1axqb_k$();
      tmp = tmp$ret$0;
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = this.this$0__1.valueProviders_1;
      tmp0_set.put_3mhbri_k$(this.$key_1, list);
    }
  };
  function SaveableStateRegistryImpl(restored, canBeSaved) {
    this.canBeSaved_1 = canBeSaved;
    var tmp = this;
    var tmp0_safe_receiver = restored;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toMutableMap(tmp0_safe_receiver);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp$ret$0 = LinkedHashMap_init_$Create$();
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    tmp.restored_1 = tmp_0;
    var tmp_1 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$1 = LinkedHashMap_init_$Create$();
    tmp_1.valueProviders_1 = tmp$ret$1;
  }
  protoOf(SaveableStateRegistryImpl).canBeSaved_nnajrq_k$ = function (value) {
    return this.canBeSaved_1(value);
  };
  protoOf(SaveableStateRegistryImpl).consumeRestored_kptfch_k$ = function (key) {
    var list = this.restored_1.remove_8hbkc0_k$(key);
    var tmp;
    var tmp_0;
    if (!(list == null)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$0 = !list.isEmpty_y1axqb_k$();
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      if (list.get_size_woubt6_k$() > 1) {
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = this.restored_1;
        var tmp1_set = list.subList_d153ha_k$(1, list.get_size_woubt6_k$());
        tmp0_set.put_3mhbri_k$(key, tmp1_set);
      }
      tmp = list.get_fkrdnv_k$(0);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SaveableStateRegistryImpl).registerProvider_h94pml_k$ = function (key, valueProvider) {
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(key);
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateRegistryImpl.registerProvider.<anonymous>' call
      tmp$ret$1 = 'Registered key is empty or blank';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp$ret$4;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp1_getOrPut = this.valueProviders_1;
    var value = tmp1_getOrPut.get_1mhr4y_k$(key);
    var tmp;
    if (value == null) {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateRegistryImpl.registerProvider.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$2 = ArrayList_init_$Create$_0();
      tmp$ret$3 = tmp$ret$2;
      var answer = tmp$ret$3;
      tmp1_getOrPut.put_3mhbri_k$(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    tmp$ret$4 = tmp;
    tmp$ret$4.add_1j60pz_k$(valueProvider);
    return new SaveableStateRegistryImpl$registerProvider$3(this, key, valueProvider);
  };
  protoOf(SaveableStateRegistryImpl).performSave_ohn24i_k$ = function () {
    var map = toMutableMap(this.restored_1);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.valueProviders_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp0_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateRegistryImpl.performSave.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.get_key_18j28a_k$();
      var key = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.get_value_j01efc_k$();
      var list = tmp$ret$2;
      if (list.get_size_woubt6_k$() === 1) {
        var value = list.get_fkrdnv_k$(0)();
        if (!(value == null)) {
          // Inline function 'kotlin.check' call
          var tmp0_check = this.canBeSaved_nnajrq_k$(value);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.check' call
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp0_check) {
            var tmp$ret$3;
            // Inline function 'kotlin.check.<anonymous>' call
            tmp$ret$3 = 'Check failed.';
            var message = tmp$ret$3;
            throw IllegalStateException_init_$Create$(toString(message));
          }
          // Inline function 'kotlin.collections.set' call
          var tmp1_set = arrayListOf([value]);
          map.put_3mhbri_k$(key, tmp1_set);
        }
      } else {
        // Inline function 'kotlin.collections.set' call
        var tmp$ret$7;
        // Inline function 'kotlin.collections.List' call
        var tmp2_List = list.get_size_woubt6_k$();
        var tmp$ret$6;
        // Inline function 'kotlin.collections.MutableList' call
        var list_0 = ArrayList_init_$Create$_1(tmp2_List);
        // Inline function 'kotlin.repeat' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < tmp2_List)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'kotlin.collections.MutableList.<anonymous>' call
            var tmp$ret$5;
            // Inline function 'androidx.compose.runtime.saveable.SaveableStateRegistryImpl.performSave.<anonymous>.<anonymous>' call
            var value_0 = list.get_fkrdnv_k$(index)();
            if (!(value_0 == null)) {
              // Inline function 'kotlin.check' call
              var tmp0_check_0 = this.canBeSaved_nnajrq_k$(value_0);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlin.check' call
              // Inline function 'kotlin.contracts.contract' call
              if (!tmp0_check_0) {
                var tmp$ret$4;
                // Inline function 'kotlin.check.<anonymous>' call
                tmp$ret$4 = 'Check failed.';
                var message_0 = tmp$ret$4;
                throw IllegalStateException_init_$Create$(toString(message_0));
              }
            }
            tmp$ret$5 = value_0;
            list_0.add_1j60pz_k$(tmp$ret$5);
          }
           while (inductionVariable < tmp2_List);
        tmp$ret$6 = list_0;
        tmp$ret$7 = tmp$ret$6;
        var tmp3_set = tmp$ret$7;
        map.put_3mhbri_k$(key, tmp3_set);
      }
    }
    return map;
  };
  function LocalSaveableStateRegistry$lambda() {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return null;
  }
  var properties_initialized_SaveableStateRegistry_kt_4lrdzt;
  function _init_properties_SaveableStateRegistry_kt__lr5zhh() {
    if (properties_initialized_SaveableStateRegistry_kt_4lrdzt) {
    } else {
      properties_initialized_SaveableStateRegistry_kt_4lrdzt = true;
      LocalSaveableStateRegistry = staticCompositionLocalOf(LocalSaveableStateRegistry$lambda);
    }
  }
  function get_AutoSaver() {
    _init_properties_Saver_kt__z47nhf();
    return AutoSaver;
  }
  var AutoSaver;
  function Saver() {
  }
  function Saver_0(save, restore) {
    _init_properties_Saver_kt__z47nhf();
    return new Saver$1(save, restore);
  }
  function SaverScope() {
  }
  function autoSaver() {
    _init_properties_Saver_kt__z47nhf();
    var tmp = get_AutoSaver();
    return isInterface(tmp, Saver) ? tmp : THROW_CCE();
  }
  function AutoSaver$lambda($this$Saver, it) {
    _init_properties_Saver_kt__z47nhf();
    return it;
  }
  function AutoSaver$lambda_0(it) {
    _init_properties_Saver_kt__z47nhf();
    return it;
  }
  function Saver$1($save, $restore) {
    this.$save_1 = $save;
    this.$restore_1 = $restore;
  }
  protoOf(Saver$1).save_ef702r_k$ = function (_this__u8e3s4, value) {
    return this.$save_1(_this__u8e3s4, value);
  };
  protoOf(Saver$1).restore_uzeo8_k$ = function (value) {
    return this.$restore_1(value);
  };
  var properties_initialized_Saver_kt_ch40dh;
  function _init_properties_Saver_kt__z47nhf() {
    if (properties_initialized_Saver_kt_ch40dh) {
    } else {
      properties_initialized_Saver_kt_ch40dh = true;
      var tmp = AutoSaver$lambda;
      AutoSaver = Saver_0(tmp, AutoSaver$lambda_0);
    }
  }
  //region block: init
  MaxSupportedRadix = 36;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_LocalSaveableStateRegistry;
  _.$_$.b = SaveableStateHolder;
  _.$_$.c = SaveableStateRegistry;
  _.$_$.d = SaveableStateRegistry_0;
  _.$_$.e = Saver_0;
  _.$_$.f = listSaver;
  _.$_$.g = rememberSaveable$composable;
  _.$_$.h = rememberSaveableStateHolder$composable;
  //endregion
  return _;
}));
