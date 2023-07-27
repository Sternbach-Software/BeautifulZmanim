(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'core-koin-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'core-koin-core-js-ir'.");
    }
    root['core-koin-core-js-ir'] = factory(typeof this['core-koin-core-js-ir'] === 'undefined' ? {} : this['core-koin-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.mf;
  var VOID = kotlin_kotlin.$_$.jm;
  var Unit_getInstance = kotlin_kotlin.$_$.k6;
  var Pair = kotlin_kotlin.$_$.pk;
  var classMeta = kotlin_kotlin.$_$.zd;
  var setMetadataFor = kotlin_kotlin.$_$.nf;
  var objectMeta = kotlin_kotlin.$_$.lf;
  var listOf = kotlin_kotlin.$_$.pa;
  var toList = kotlin_kotlin.$_$.bc;
  var THROW_CCE = kotlin_kotlin.$_$.sk;
  var Annotation = kotlin_kotlin.$_$.xj;
  var interfaceMeta = kotlin_kotlin.$_$.oe;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var hashCode = kotlin_kotlin.$_$.me;
  var emptyList = kotlin_kotlin.$_$.c9;
  var equals = kotlin_kotlin.$_$.de;
  var joinToString = kotlin_kotlin.$_$.da;
  var THROW_ISE = kotlin_kotlin.$_$.tk;
  var Enum = kotlin_kotlin.$_$.ek;
  var Exception = kotlin_kotlin.$_$.gk;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.a2;
  var captureStack = kotlin_kotlin.$_$.td;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.c2;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.u;
  var Map = kotlin_kotlin.$_$.f7;
  var isInterface = kotlin_kotlin.$_$.xe;
  var toString = kotlin_kotlin.$_$.rf;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var isObject = kotlin_kotlin.$_$.ze;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.y;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.r;
  var addAll = kotlin_kotlin.$_$.p7;
  var addAll_0 = kotlin_kotlin.$_$.q7;
  var listOf_0 = kotlin_kotlin.$_$.qa;
  var plus = kotlin_kotlin.$_$.ya;
  var getStringHashCode = kotlin_kotlin.$_$.le;
  var emptySet = kotlin_kotlin.$_$.e9;
  var first = kotlin_kotlin.$_$.p9;
  var plus_0 = kotlin_kotlin.$_$.wa;
  var toList_0 = kotlin_kotlin.$_$.ac;
  var distinct = kotlin_kotlin.$_$.a9;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.b8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.p;
  var removeAll = kotlin_kotlin.$_$.bb;
  var DurationUnit_NANOSECONDS_getInstance = kotlin_kotlin.$_$.k;
  var toDuration = kotlin_kotlin.$_$.vj;
  var Companion_getInstance = kotlin_kotlin.$_$.c6;
  var Duration__minus_impl_q5cfm7 = kotlin_kotlin.$_$.n3;
  var DurationUnit_SECONDS_getInstance = kotlin_kotlin.$_$.l;
  var Duration__toDouble_impl_a56y2b = kotlin_kotlin.$_$.r3;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.i;
  var println = kotlin_kotlin.$_$.pd;
  var isArray = kotlin_kotlin.$_$.pe;
  var roundToLong = kotlin_kotlin.$_$.yf;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.z1;
  var split = kotlin_kotlin.$_$.aj;
  var Default_getInstance = kotlin_kotlin.$_$.z5;
  var getNumberHashCode = kotlin_kotlin.$_$.ie;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.m;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Koin, 'Koin', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(KoinApplication, 'KoinApplication', classMeta);
  setMetadataFor(KoinInternalApi, 'KoinInternalApi', classMeta, VOID, [Annotation]);
  function getKoin() {
    return KoinPlatformTools_getInstance().defaultContext_m5e9ci_k$().get_26vq_k$();
  }
  setMetadataFor(KoinComponent, 'KoinComponent', interfaceMeta);
  function closeScope() {
    if (this.get_scope_iyfcq3_k$().isNotClosed_x1h9n9_k$()) {
      this.get_scope_iyfcq3_k$().close_ymq55z_k$();
    }
  }
  setMetadataFor(KoinScopeComponent, 'KoinScopeComponent', interfaceMeta, VOID, [KoinComponent]);
  setMetadataFor(KoinContext, 'KoinContext', interfaceMeta);
  setMetadataFor(BeanDefinition, 'BeanDefinition', classMeta);
  setMetadataFor(Kind, 'Kind', classMeta, Enum);
  setMetadataFor(Callbacks, 'Callbacks', classMeta);
  setMetadataFor(KoinDefinition, 'KoinDefinition', classMeta);
  setMetadataFor(ClosedScopeException, 'ClosedScopeException', classMeta, Exception);
  setMetadataFor(DefinitionOverrideException, 'DefinitionOverrideException', classMeta, Exception);
  setMetadataFor(DefinitionParameterException, 'DefinitionParameterException', classMeta, Exception);
  setMetadataFor(InstanceCreationException, 'InstanceCreationException', classMeta, Exception);
  setMetadataFor(KoinAppAlreadyStartedException, 'KoinAppAlreadyStartedException', classMeta, Exception);
  setMetadataFor(MissingPropertyException, 'MissingPropertyException', classMeta, Exception);
  setMetadataFor(NoBeanDefFoundException, 'NoBeanDefFoundException', classMeta, Exception);
  setMetadataFor(NoParameterFoundException, 'NoParameterFoundException', classMeta, Exception);
  setMetadataFor(ScopeAlreadyCreatedException, 'ScopeAlreadyCreatedException', classMeta, Exception);
  setMetadataFor(ScopeNotCreatedException, 'ScopeNotCreatedException', classMeta, Exception);
  setMetadataFor(ExtensionManager, 'ExtensionManager', classMeta);
  setMetadataFor(KoinExtension, 'KoinExtension', interfaceMeta);
  setMetadataFor(InstanceFactory, 'InstanceFactory', classMeta);
  setMetadataFor(FactoryInstanceFactory, 'FactoryInstanceFactory', classMeta, InstanceFactory);
  setMetadataFor(InstanceContext, 'InstanceContext', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(ScopedInstanceFactory, 'ScopedInstanceFactory', classMeta, InstanceFactory);
  setMetadataFor(SingleInstanceFactory, 'SingleInstanceFactory', classMeta, InstanceFactory);
  setMetadataFor(Logger, 'Logger', classMeta);
  setMetadataFor(EmptyLogger, 'EmptyLogger', classMeta, Logger);
  setMetadataFor(Level, 'Level', classMeta, Enum);
  setMetadataFor(KoinApplicationDslMarker, 'KoinApplicationDslMarker', classMeta, VOID, [Annotation]);
  setMetadataFor(KoinDslMarker, 'KoinDslMarker', classMeta, VOID, [Annotation]);
  setMetadataFor(Module, 'Module', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(ParametersHolder, 'ParametersHolder', classMeta);
  setMetadataFor(Qualifier, 'Qualifier', interfaceMeta);
  setMetadataFor(StringQualifier, 'StringQualifier', classMeta, VOID, [Qualifier]);
  setMetadataFor(TypeQualifier, 'TypeQualifier', classMeta, VOID, [Qualifier]);
  setMetadataFor(InstanceRegistry, 'InstanceRegistry', classMeta);
  setMetadataFor(PropertyRegistry, 'PropertyRegistry', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(ScopeRegistry, 'ScopeRegistry', classMeta);
  setMetadataFor(Scope, 'Scope', classMeta);
  setMetadataFor(ScopeCallback, 'ScopeCallback', interfaceMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Timer, 'Timer', classMeta);
  setMetadataFor(ScopeDSL, 'ScopeDSL', classMeta);
  setMetadataFor(GlobalContext, 'GlobalContext', objectMeta, VOID, [KoinContext]);
  setMetadataFor(PrintLogger, 'PrintLogger', classMeta, Logger);
  setMetadataFor(TimeSource, 'TimeSource', interfaceMeta);
  setMetadataFor(NodeJsHrTimeSource, 'NodeJsHrTimeSource', classMeta, VOID, [TimeSource]);
  setMetadataFor(PerformanceNowTimeSource, 'PerformanceNowTimeSource', classMeta, VOID, [TimeSource]);
  setMetadataFor(DateNowTimeSource, 'DateNowTimeSource', classMeta, VOID, [TimeSource]);
  setMetadataFor(KoinPlatformTimeTools, 'KoinPlatformTimeTools', objectMeta);
  setMetadataFor(KoinPlatformTools, 'KoinPlatformTools', objectMeta);
  //endregion
  function _set_logger__t1fpfd($this, _set____db54di) {
    $this.logger_1 = _set____db54di;
  }
  function Koin() {
    this.scopeRegistry_1 = new ScopeRegistry(this);
    this.instanceRegistry_1 = new InstanceRegistry(this);
    this.propertyRegistry_1 = new PropertyRegistry(this);
    this.extensionManager_1 = new ExtensionManager(this);
    this.logger_1 = new EmptyLogger();
  }
  protoOf(Koin).get_scopeRegistry_7zu3y0_k$ = function () {
    return this.scopeRegistry_1;
  };
  protoOf(Koin).get_instanceRegistry_jmeu6d_k$ = function () {
    return this.instanceRegistry_1;
  };
  protoOf(Koin).get_propertyRegistry_kqppff_k$ = function () {
    return this.propertyRegistry_1;
  };
  protoOf(Koin).get_extensionManager_eii7d5_k$ = function () {
    return this.extensionManager_1;
  };
  protoOf(Koin).get_logger_g9gejd_k$ = function () {
    return this.logger_1;
  };
  protoOf(Koin).setupLogger_t3ovmf_k$ = function (logger) {
    this.logger_1 = logger;
  };
  protoOf(Koin).get_ocvqe2_k$ = function (clazz, qualifier, parameters) {
    return this.scopeRegistry_1.get_rootScope_60k1zr_k$().get_ocvqe2_k$(clazz, qualifier, parameters);
  };
  protoOf(Koin).get$default_fc03dc_k$ = function (clazz, qualifier, parameters, $super) {
    qualifier = qualifier === VOID ? null : qualifier;
    parameters = parameters === VOID ? null : parameters;
    return $super === VOID ? this.get_ocvqe2_k$(clazz, qualifier, parameters) : $super.get_ocvqe2_k$.call(this, clazz, qualifier, parameters);
  };
  protoOf(Koin).getOrNull_re75dc_k$ = function (clazz, qualifier, parameters) {
    return this.scopeRegistry_1.get_rootScope_60k1zr_k$().getOrNull_re75dc_k$(clazz, qualifier, parameters);
  };
  protoOf(Koin).getOrNull$default_blr1zu_k$ = function (clazz, qualifier, parameters, $super) {
    qualifier = qualifier === VOID ? null : qualifier;
    parameters = parameters === VOID ? null : parameters;
    return $super === VOID ? this.getOrNull_re75dc_k$(clazz, qualifier, parameters) : $super.getOrNull_re75dc_k$.call(this, clazz, qualifier, parameters);
  };
  protoOf(Koin).createScope_l554vf_k$ = function (scopeId, qualifier, source) {
    return this.scopeRegistry_1.createScope_l554vf_k$(scopeId, qualifier, source);
  };
  protoOf(Koin).createScope$default_ulhgka_k$ = function (scopeId, qualifier, source, $super) {
    source = source === VOID ? null : source;
    return $super === VOID ? this.createScope_l554vf_k$(scopeId, qualifier, source) : $super.createScope_l554vf_k$.call(this, scopeId, qualifier, source);
  };
  protoOf(Koin).createScope_fk2d7g_k$ = function (t) {
    var scopeId = getScopeId(t);
    var qualifier = getScopeName(t);
    return this.scopeRegistry_1.createScope_l554vf_k$(scopeId, qualifier, null);
  };
  protoOf(Koin).getOrCreateScope_lw764y_k$ = function (scopeId, qualifier, source) {
    var tmp0_elvis_lhs = this.scopeRegistry_1.getScopeOrNull_vptix3_k$(scopeId);
    return tmp0_elvis_lhs == null ? this.createScope_l554vf_k$(scopeId, qualifier, source) : tmp0_elvis_lhs;
  };
  protoOf(Koin).getOrCreateScope$default_a5b1qr_k$ = function (scopeId, qualifier, source, $super) {
    source = source === VOID ? null : source;
    return $super === VOID ? this.getOrCreateScope_lw764y_k$(scopeId, qualifier, source) : $super.getOrCreateScope_lw764y_k$.call(this, scopeId, qualifier, source);
  };
  protoOf(Koin).getScope_gk9t7n_k$ = function (scopeId) {
    var tmp0_elvis_lhs = this.scopeRegistry_1.getScopeOrNull_vptix3_k$(scopeId);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new ScopeNotCreatedException("No scope found for id '" + scopeId + "'");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(Koin).getScopeOrNull_vptix3_k$ = function (scopeId) {
    return this.scopeRegistry_1.getScopeOrNull_vptix3_k$(scopeId);
  };
  protoOf(Koin).deleteScope_z9844p_k$ = function (scopeId) {
    this.scopeRegistry_1.deleteScope_z9844p_k$(scopeId);
  };
  protoOf(Koin).getProperty_n7ug6a_k$ = function (key, defaultValue) {
    var tmp0_elvis_lhs = this.propertyRegistry_1.getProperty_sqfjxw_k$(key);
    return tmp0_elvis_lhs == null ? defaultValue : tmp0_elvis_lhs;
  };
  protoOf(Koin).getProperty_gwh1jd_k$ = function (key) {
    return this.propertyRegistry_1.getProperty_sqfjxw_k$(key);
  };
  protoOf(Koin).setProperty_e3jw15_k$ = function (key, value) {
    this.propertyRegistry_1.saveProperty_d7jy4s_k$(key, value);
  };
  protoOf(Koin).deleteProperty_9xld72_k$ = function (key) {
    this.propertyRegistry_1.deleteProperty_9xld72_k$(key);
  };
  protoOf(Koin).close_ymq55z_k$ = function () {
    this.scopeRegistry_1.close_ymq55z_k$();
    this.instanceRegistry_1.close_ymq55z_k$();
    this.propertyRegistry_1.close_ymq55z_k$();
    this.extensionManager_1.close_ymq55z_k$();
  };
  protoOf(Koin).loadModules_73nei7_k$ = function (modules, allowOverride) {
    var flattedModules = flatten(modules);
    this.instanceRegistry_1.loadModules_thcdwd_k$(flattedModules, allowOverride);
    this.scopeRegistry_1.loadScopes_a69qav_k$(flattedModules);
  };
  protoOf(Koin).loadModules$default_hae98_k$ = function (modules, allowOverride, $super) {
    allowOverride = allowOverride === VOID ? true : allowOverride;
    var tmp;
    if ($super === VOID) {
      this.loadModules_73nei7_k$(modules, allowOverride);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.loadModules_73nei7_k$.call(this, modules, allowOverride);
    }
    return tmp;
  };
  protoOf(Koin).unloadModules_rmaqm6_k$ = function (modules) {
    var flattedModules = flatten(modules);
    this.instanceRegistry_1.unloadModules_rv8cqk_k$(flattedModules);
  };
  protoOf(Koin).createEagerInstances_b51alt_k$ = function () {
    // Inline function 'org.koin.core.logger.Logger.debug' call
    var tmp1_debug = this.logger_1;
    // Inline function 'org.koin.core.logger.Logger.log' call
    var tmp0_log = Level_DEBUG_getInstance();
    if (tmp1_debug.isAt_9azl0c_k$(tmp0_log)) {
      tmp1_debug.display_ojtox1_k$(tmp0_log, 'Eager instances ...');
    }
    var tmp$ret$2;
    // Inline function 'org.koin.core.time.measureDuration' call
    var tmp$ret$1;
    // Inline function 'org.koin.core.time.measureTimedValue' call
    var start = KoinPlatformTimeTools_getInstance().getTimeInNanoSeconds_rsnqv1_k$();
    this.instanceRegistry_1.createAllEagerInstances_wwsk6y_k$();
    var value = Unit_getInstance();
    var stop = KoinPlatformTimeTools_getInstance().getTimeInNanoSeconds_rsnqv1_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.Long.div' call
    var tmp2_div = stop.minus_llf5ei_k$(start);
    var tmp3_div = Companion_getInstance_4().get_NANO_TO_MILLI_vas3xn_k$();
    tmp$ret$0 = tmp2_div.toDouble_ygsx0s_k$() / tmp3_div;
    tmp$ret$1 = new Pair(Unit_getInstance(), tmp$ret$0);
    tmp$ret$2 = tmp$ret$1.get_second_jf7fjx_k$();
    var duration = tmp$ret$2;
    // Inline function 'org.koin.core.logger.Logger.debug' call
    var tmp5_debug = this.logger_1;
    var tmp6_debug = 'Eager instances created in ' + duration + ' ms';
    // Inline function 'org.koin.core.logger.Logger.log' call
    var tmp4_log = Level_DEBUG_getInstance();
    if (tmp5_debug.isAt_9azl0c_k$(tmp4_log)) {
      tmp5_debug.display_ojtox1_k$(tmp4_log, tmp6_debug);
    }
  };
  function _set_allowOverride__dpyqb4($this, _set____db54di) {
    $this.allowOverride_1 = _set____db54di;
  }
  function _get_allowOverride__1hss78($this) {
    return $this.allowOverride_1;
  }
  function loadModules($this, modules) {
    $this.koin_1.loadModules_73nei7_k$(modules, $this.allowOverride_1);
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).init_1xdsg_k$ = function () {
    var app = new KoinApplication();
    return app;
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function KoinApplication() {
    Companion_getInstance_0();
    this.koin_1 = new Koin();
    this.allowOverride_1 = true;
  }
  protoOf(KoinApplication).get_koin_wopbyq_k$ = function () {
    return this.koin_1;
  };
  protoOf(KoinApplication).modules_t1cy66_k$ = function (modules) {
    return this.modules_nsjcs4_k$(listOf(modules));
  };
  protoOf(KoinApplication).modules_srpak2_k$ = function (modules) {
    return this.modules_nsjcs4_k$(toList(modules));
  };
  protoOf(KoinApplication).modules_nsjcs4_k$ = function (modules) {
    if (this.koin_1.get_logger_g9gejd_k$().isAt_9azl0c_k$(Level_INFO_getInstance())) {
      var tmp$ret$2;
      // Inline function 'org.koin.core.time.measureDuration' call
      var tmp$ret$1;
      // Inline function 'org.koin.core.time.measureTimedValue' call
      var start = KoinPlatformTimeTools_getInstance().getTimeInNanoSeconds_rsnqv1_k$();
      loadModules(this, modules);
      var value = Unit_getInstance();
      var stop = KoinPlatformTimeTools_getInstance().getTimeInNanoSeconds_rsnqv1_k$();
      var tmp$ret$0;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = stop.minus_llf5ei_k$(start);
      var tmp1_div = Companion_getInstance_4().get_NANO_TO_MILLI_vas3xn_k$();
      tmp$ret$0 = tmp0_div.toDouble_ygsx0s_k$() / tmp1_div;
      tmp$ret$1 = new Pair(Unit_getInstance(), tmp$ret$0);
      tmp$ret$2 = tmp$ret$1.get_second_jf7fjx_k$();
      var duration = tmp$ret$2;
      var count = this.koin_1.get_instanceRegistry_jmeu6d_k$().size_23och_k$();
      this.koin_1.get_logger_g9gejd_k$().display_ojtox1_k$(Level_INFO_getInstance(), 'loaded ' + count + ' definitions in ' + duration + ' ms');
    } else {
      loadModules(this, modules);
    }
    return this;
  };
  protoOf(KoinApplication).createEagerInstances_b51alt_k$ = function () {
    this.koin_1.createEagerInstances_b51alt_k$();
  };
  protoOf(KoinApplication).allowOverride_46f8bw_k$ = function (override) {
    this.allowOverride_1 = override;
  };
  protoOf(KoinApplication).properties_3p74wn_k$ = function (values) {
    this.koin_1.get_propertyRegistry_kqppff_k$().saveProperties_q6b72h_k$(values);
    return this;
  };
  protoOf(KoinApplication).logger_a4b4sr_k$ = function (logger) {
    this.koin_1.setupLogger_t3ovmf_k$(logger);
    return this;
  };
  protoOf(KoinApplication).printLogger_ccsebg_k$ = function (level) {
    this.koin_1.setupLogger_t3ovmf_k$(KoinPlatformTools_getInstance().defaultLogger_36wu3s_k$(level));
    return this;
  };
  protoOf(KoinApplication).printLogger$default_uuzvn9_k$ = function (level, $super) {
    level = level === VOID ? Level_INFO_getInstance() : level;
    return $super === VOID ? this.printLogger_ccsebg_k$(level) : $super.printLogger_ccsebg_k$.call(this, level);
  };
  protoOf(KoinApplication).close_ymq55z_k$ = function () {
    this.koin_1.close_ymq55z_k$();
  };
  protoOf(KoinApplication).unloadModules_rmaqm6_k$ = function (modules) {
    this.koin_1.unloadModules_rmaqm6_k$(modules);
  };
  protoOf(KoinApplication).unloadModules_6yds8i_k$ = function (module_0) {
    this.koin_1.unloadModules_rmaqm6_k$(listOf(module_0));
  };
  function KoinInternalApi() {
  }
  protoOf(KoinInternalApi).equals = function (other) {
    if (!(other instanceof KoinInternalApi))
      return false;
    var tmp0_other_with_cast = other instanceof KoinInternalApi ? other : THROW_CCE();
    return true;
  };
  protoOf(KoinInternalApi).hashCode = function () {
    return 0;
  };
  protoOf(KoinInternalApi).toString = function () {
    return '@org.koin.core.annotation.KoinInternalApi()';
  };
  function KoinComponent() {
  }
  function KoinScopeComponent() {
  }
  function getScopeId(_this__u8e3s4) {
    return getFullName(getKClassFromExpression(_this__u8e3s4)) + '@' + hashCode(_this__u8e3s4);
  }
  function getScopeName(_this__u8e3s4) {
    return new TypeQualifier(getKClassFromExpression(_this__u8e3s4));
  }
  function KoinContext() {
  }
  function BeanDefinition$toString$lambda(it) {
    return getFullName(it);
  }
  function BeanDefinition(scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes) {
    qualifier = qualifier === VOID ? null : qualifier;
    var tmp;
    if (secondaryTypes === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0 = emptyList();
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = secondaryTypes;
    }
    secondaryTypes = tmp;
    this.scopeQualifier_1 = scopeQualifier;
    this.primaryType_1 = primaryType;
    this.qualifier_1 = qualifier;
    this.definition_1 = definition;
    this.kind_1 = kind;
    this.secondaryTypes_1 = secondaryTypes;
    this.callbacks_1 = new Callbacks();
    this._createdAtStart_1 = false;
  }
  protoOf(BeanDefinition).get_scopeQualifier_eby6kf_k$ = function () {
    return this.scopeQualifier_1;
  };
  protoOf(BeanDefinition).get_primaryType_gbcb1_k$ = function () {
    return this.primaryType_1;
  };
  protoOf(BeanDefinition).set_qualifier_yyxnv6_k$ = function (_set____db54di) {
    this.qualifier_1 = _set____db54di;
  };
  protoOf(BeanDefinition).get_qualifier_c4gvsv_k$ = function () {
    return this.qualifier_1;
  };
  protoOf(BeanDefinition).get_definition_y2whcs_k$ = function () {
    return this.definition_1;
  };
  protoOf(BeanDefinition).get_kind_wop7ml_k$ = function () {
    return this.kind_1;
  };
  protoOf(BeanDefinition).set_secondaryTypes_1bfdsj_k$ = function (_set____db54di) {
    this.secondaryTypes_1 = _set____db54di;
  };
  protoOf(BeanDefinition).get_secondaryTypes_du752m_k$ = function () {
    return this.secondaryTypes_1;
  };
  protoOf(BeanDefinition).set_callbacks_g4fbls_k$ = function (_set____db54di) {
    this.callbacks_1 = _set____db54di;
  };
  protoOf(BeanDefinition).get_callbacks_8qyswr_k$ = function () {
    return this.callbacks_1;
  };
  protoOf(BeanDefinition).set__createdAtStart_93sokg_k$ = function (_set____db54di) {
    this._createdAtStart_1 = _set____db54di;
  };
  protoOf(BeanDefinition).get__createdAtStart_6om28z_k$ = function () {
    return this._createdAtStart_1;
  };
  protoOf(BeanDefinition).toString = function () {
    var defKind = this.kind_1.toString();
    var defType = "'" + getFullName(this.primaryType_1) + "'";
    var tmp0_safe_receiver = this.qualifier_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'org.koin.core.definition.BeanDefinition.toString.<anonymous>' call
      tmp$ret$0 = ',qualifier:' + this.qualifier_1;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var defName = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var tmp$ret$3;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.scopeQualifier_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'org.koin.core.definition.BeanDefinition.toString.<anonymous>' call
    tmp$ret$2 = equals(tmp0_let, Companion_getInstance_3().get_rootScopeQualifier_6qrm0v_k$()) ? '' : ',scope:' + this.scopeQualifier_1;
    tmp$ret$3 = tmp$ret$2;
    var defScope = tmp$ret$3;
    var tmp_0;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp1_isNotEmpty = this.secondaryTypes_1;
    tmp$ret$4 = !tmp1_isNotEmpty.isEmpty_y1axqb_k$();
    if (tmp$ret$4) {
      var tmp_1 = this.secondaryTypes_1;
      var typesAsString = joinToString(tmp_1, ',', VOID, VOID, VOID, VOID, BeanDefinition$toString$lambda);
      tmp_0 = ',binds:' + typesAsString;
    } else {
      tmp_0 = '';
    }
    var defOtherTypes = tmp_0;
    return '[' + defKind + ':' + defType + defName + defScope + defOtherTypes + ']';
  };
  protoOf(BeanDefinition).equals = function (other) {
    if (this === other)
      return true;
    if (other instanceof BeanDefinition)
      other;
    else
      THROW_CCE();
    if (!this.primaryType_1.equals(other.primaryType_1))
      return false;
    if (!equals(this.qualifier_1, other.qualifier_1))
      return false;
    if (!equals(this.scopeQualifier_1, other.scopeQualifier_1))
      return false;
    return true;
  };
  protoOf(BeanDefinition).hasType_mittxs_k$ = function (clazz) {
    return this.primaryType_1.equals(clazz) ? true : this.secondaryTypes_1.contains_2ehdt1_k$(clazz);
  };
  protoOf(BeanDefinition).is_rou4qj_k$ = function (clazz, qualifier, scopeDefinition) {
    return (this.hasType_mittxs_k$(clazz) ? equals(this.qualifier_1, qualifier) : false) ? equals(this.scopeQualifier_1, scopeDefinition) : false;
  };
  protoOf(BeanDefinition).hashCode = function () {
    var tmp0_safe_receiver = this.qualifier_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = imul(31, result) + this.primaryType_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.scopeQualifier_1) | 0;
    return result;
  };
  protoOf(BeanDefinition).component1_7eebsc_k$ = function () {
    return this.scopeQualifier_1;
  };
  protoOf(BeanDefinition).component2_7eebsb_k$ = function () {
    return this.primaryType_1;
  };
  protoOf(BeanDefinition).component3_7eebsa_k$ = function () {
    return this.qualifier_1;
  };
  protoOf(BeanDefinition).component4_7eebs9_k$ = function () {
    return this.definition_1;
  };
  protoOf(BeanDefinition).component5_7eebs8_k$ = function () {
    return this.kind_1;
  };
  protoOf(BeanDefinition).component6_7eebs7_k$ = function () {
    return this.secondaryTypes_1;
  };
  protoOf(BeanDefinition).copy_vf00vz_k$ = function (scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes) {
    return new BeanDefinition(scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes);
  };
  protoOf(BeanDefinition).copy$default_siw79e_k$ = function (scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes, $super) {
    scopeQualifier = scopeQualifier === VOID ? this.scopeQualifier_1 : scopeQualifier;
    primaryType = primaryType === VOID ? this.primaryType_1 : primaryType;
    qualifier = qualifier === VOID ? this.qualifier_1 : qualifier;
    definition = definition === VOID ? this.definition_1 : definition;
    kind = kind === VOID ? this.kind_1 : kind;
    secondaryTypes = secondaryTypes === VOID ? this.secondaryTypes_1 : secondaryTypes;
    return $super === VOID ? this.copy_vf00vz_k$(scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes) : $super.copy_vf00vz_k$.call(this, scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes);
  };
  function indexKey(clazz, typeQualifier, scopeQualifier) {
    var tmp0_safe_receiver = typeQualifier;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_value_j01efc_k$();
    var tq = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    return getFullName(clazz) + ':' + tq + ':' + scopeQualifier;
  }
  var Kind_Singleton_instance;
  var Kind_Factory_instance;
  var Kind_Scoped_instance;
  function values() {
    return [Kind_Singleton_getInstance(), Kind_Factory_getInstance(), Kind_Scoped_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Singleton':
        return Kind_Singleton_getInstance();
      case 'Factory':
        return Kind_Factory_getInstance();
      case 'Scoped':
        return Kind_Scoped_getInstance();
      default:
        Kind_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Kind_entriesInitialized;
  function Kind_initEntries() {
    if (Kind_entriesInitialized)
      return Unit_getInstance();
    Kind_entriesInitialized = true;
    Kind_Singleton_instance = new Kind('Singleton', 0);
    Kind_Factory_instance = new Kind('Factory', 1);
    Kind_Scoped_instance = new Kind('Scoped', 2);
  }
  function Kind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Kind_Singleton_getInstance() {
    Kind_initEntries();
    return Kind_Singleton_instance;
  }
  function Kind_Factory_getInstance() {
    Kind_initEntries();
    return Kind_Factory_instance;
  }
  function Kind_Scoped_getInstance() {
    Kind_initEntries();
    return Kind_Scoped_instance;
  }
  function Callbacks(onClose) {
    onClose = onClose === VOID ? null : onClose;
    this.onClose_1 = onClose;
  }
  protoOf(Callbacks).get_onClose_l3bvrk_k$ = function () {
    return this.onClose_1;
  };
  protoOf(Callbacks).component1_7eebsc_k$ = function () {
    return this.onClose_1;
  };
  protoOf(Callbacks).copy_otr263_k$ = function (onClose) {
    return new Callbacks(onClose);
  };
  protoOf(Callbacks).copy$default_61flae_k$ = function (onClose, $super) {
    onClose = onClose === VOID ? this.onClose_1 : onClose;
    return $super === VOID ? this.copy_otr263_k$(onClose) : $super.copy_otr263_k$.call(this, onClose);
  };
  protoOf(Callbacks).toString = function () {
    return 'Callbacks(onClose=' + this.onClose_1 + ')';
  };
  protoOf(Callbacks).hashCode = function () {
    return this.onClose_1 == null ? 0 : hashCode(this.onClose_1);
  };
  protoOf(Callbacks).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Callbacks))
      return false;
    var tmp0_other_with_cast = other instanceof Callbacks ? other : THROW_CCE();
    if (!equals(this.onClose_1, tmp0_other_with_cast.onClose_1))
      return false;
    return true;
  };
  function KoinDefinition(module_0, factory) {
    this.module_1 = module_0;
    this.factory_1 = factory;
  }
  protoOf(KoinDefinition).get_module_gqgeid_k$ = function () {
    return this.module_1;
  };
  protoOf(KoinDefinition).get_factory_gsiw2n_k$ = function () {
    return this.factory_1;
  };
  protoOf(KoinDefinition).component1_7eebsc_k$ = function () {
    return this.module_1;
  };
  protoOf(KoinDefinition).component2_7eebsb_k$ = function () {
    return this.factory_1;
  };
  protoOf(KoinDefinition).copy_58yqa1_k$ = function (module_0, factory) {
    return new KoinDefinition(module_0, factory);
  };
  protoOf(KoinDefinition).copy$default_9e2phb_k$ = function (module_0, factory, $super) {
    module_0 = module_0 === VOID ? this.module_1 : module_0;
    factory = factory === VOID ? this.factory_1 : factory;
    return $super === VOID ? this.copy_58yqa1_k$(module_0, factory) : $super.copy_58yqa1_k$.call(this, module_0, factory);
  };
  protoOf(KoinDefinition).toString = function () {
    return 'KoinDefinition(module=' + this.module_1 + ', factory=' + this.factory_1 + ')';
  };
  protoOf(KoinDefinition).hashCode = function () {
    var result = this.module_1.hashCode();
    result = imul(result, 31) + this.factory_1.hashCode() | 0;
    return result;
  };
  protoOf(KoinDefinition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KoinDefinition))
      return false;
    var tmp0_other_with_cast = other instanceof KoinDefinition ? other : THROW_CCE();
    if (!this.module_1.equals(tmp0_other_with_cast.module_1))
      return false;
    if (!this.factory_1.equals(tmp0_other_with_cast.factory_1))
      return false;
    return true;
  };
  function ClosedScopeException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, ClosedScopeException);
  }
  function DefinitionOverrideException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, DefinitionOverrideException);
  }
  function DefinitionParameterException(str) {
    Exception_init_$Init$(str, this);
    captureStack(this, DefinitionParameterException);
  }
  function InstanceCreationException(msg, parent) {
    Exception_init_$Init$_0(msg, parent, this);
    captureStack(this, InstanceCreationException);
  }
  function KoinAppAlreadyStartedException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, KoinAppAlreadyStartedException);
  }
  function MissingPropertyException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, MissingPropertyException);
  }
  function NoBeanDefFoundException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, NoBeanDefFoundException);
  }
  function NoParameterFoundException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, NoParameterFoundException);
  }
  function ScopeAlreadyCreatedException(s) {
    Exception_init_$Init$(s, this);
    captureStack(this, ScopeAlreadyCreatedException);
  }
  function ScopeNotCreatedException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, ScopeNotCreatedException);
  }
  function ExtensionManager(_koin) {
    this._koin_1 = _koin;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp$ret$0 = HashMap_init_$Create$();
    tmp.extensions_1 = tmp$ret$0;
  }
  protoOf(ExtensionManager).get__koin_inkklb_k$ = function () {
    return this._koin_1;
  };
  protoOf(ExtensionManager).get_extensions_kxksyl_k$ = function () {
    return this.extensions_1;
  };
  protoOf(ExtensionManager).registerExtension_wpmw0q_k$ = function (id, extension) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.extensions_1;
    tmp0_set.put_3mhbri_k$(id, extension);
    extension.set_koin_31a29x_k$(this._koin_1);
  };
  protoOf(ExtensionManager).close_ymq55z_k$ = function () {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.extensions_1.get_values_ksazhn_k$();
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.extension.ExtensionManager.close.<anonymous>' call
      element.onClose_8526ew_k$();
    }
  };
  function KoinExtension() {
  }
  function FactoryInstanceFactory(beanDefinition) {
    InstanceFactory.call(this, beanDefinition);
  }
  protoOf(FactoryInstanceFactory).isCreated_3z08on_k$ = function (context) {
    return false;
  };
  protoOf(FactoryInstanceFactory).drop_jzjibc_k$ = function (scope) {
    var tmp0_safe_receiver = this.get_beanDefinition_b177zg_k$().get_callbacks_8qyswr_k$().get_onClose_l3bvrk_k$();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(null);
  };
  protoOf(FactoryInstanceFactory).dropAll_wlge75_k$ = function () {
  };
  protoOf(FactoryInstanceFactory).get_kchvk2_k$ = function (context) {
    return this.create_jnbvc8_k$(context);
  };
  function InstanceContext(logger, scope, parameters) {
    parameters = parameters === VOID ? null : parameters;
    this.logger_1 = logger;
    this.scope_1 = scope;
    this.parameters_1 = parameters;
  }
  protoOf(InstanceContext).get_logger_g9gejd_k$ = function () {
    return this.logger_1;
  };
  protoOf(InstanceContext).get_scope_iyfcq3_k$ = function () {
    return this.scope_1;
  };
  protoOf(InstanceContext).get_parameters_cl4rkd_k$ = function () {
    return this.parameters_1;
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.ERROR_SEPARATOR_1 = '\n\t';
  }
  protoOf(Companion_0).get_ERROR_SEPARATOR_l3t0ed_k$ = function () {
    return this.ERROR_SEPARATOR_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function InstanceFactory(beanDefinition) {
    Companion_getInstance_1();
    this.beanDefinition_1 = beanDefinition;
  }
  protoOf(InstanceFactory).get_beanDefinition_b177zg_k$ = function () {
    return this.beanDefinition_1;
  };
  protoOf(InstanceFactory).create_jnbvc8_k$ = function (context) {
    // Inline function 'org.koin.core.logger.Logger.debug' call
    var tmp1_debug = context.get_logger_g9gejd_k$();
    var tmp2_debug = "| (+) '" + this.beanDefinition_1 + "'";
    // Inline function 'org.koin.core.logger.Logger.log' call
    var tmp0_log = Level_DEBUG_getInstance();
    if (tmp1_debug.isAt_9azl0c_k$(tmp0_log)) {
      tmp1_debug.display_ojtox1_k$(tmp0_log, tmp2_debug);
    }
    try {
      var tmp0_elvis_lhs = context.get_parameters_cl4rkd_k$();
      var parameters = tmp0_elvis_lhs == null ? emptyParametersHolder() : tmp0_elvis_lhs;
      return this.beanDefinition_1.get_definition_y2whcs_k$()(context.get_scope_iyfcq3_k$(), parameters);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var stack = KoinPlatformTools_getInstance().getStackTrace_hzwm26_k$(e);
        // Inline function 'org.koin.core.logger.Logger.error' call
        var tmp4_error = context.get_logger_g9gejd_k$();
        var tmp5_error = "* Instance creation error : could not create instance for '" + this.beanDefinition_1 + "': " + stack;
        // Inline function 'org.koin.core.logger.Logger.log' call
        var tmp3_log = Level_ERROR_getInstance();
        if (tmp4_error.isAt_9azl0c_k$(tmp3_log)) {
          tmp4_error.display_ojtox1_k$(tmp3_log, tmp5_error);
        }
        throw new InstanceCreationException("Could not create instance for '" + this.beanDefinition_1 + "'", e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(InstanceFactory).isCreated$default_pq4kcj_k$ = function (context, $super) {
    context = context === VOID ? null : context;
    return $super === VOID ? this.isCreated_3z08on_k$(context) : $super.isCreated_3z08on_k$.call(this, context);
  };
  protoOf(InstanceFactory).drop$default_e3zkdq_k$ = function (scope, $super) {
    scope = scope === VOID ? null : scope;
    var tmp;
    if ($super === VOID) {
      this.drop_jzjibc_k$(scope);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drop_jzjibc_k$.call(this, scope);
    }
    return tmp;
  };
  protoOf(InstanceFactory).equals = function (other) {
    var tmp0_safe_receiver = other instanceof InstanceFactory ? other : null;
    var other_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.beanDefinition_1;
    return this.beanDefinition_1.equals(other_0);
  };
  protoOf(InstanceFactory).hashCode = function () {
    return this.beanDefinition_1.hashCode();
  };
  function _set_values__uvbruz($this, _set____db54di) {
    $this.values_1 = _set____db54di;
  }
  function _get_values__tel787($this) {
    return $this.values_1;
  }
  function ScopedInstanceFactory$get$lambda(this$0, $context) {
    return function () {
      var tmp;
      if (!this$0.isCreated_3z08on_k$($context)) {
        var tmp0_set = this$0.values_1;
        var tmp1_set = $context.get_scope_iyfcq3_k$().get_id_kntnx8_k$();
        var tmp2_set = this$0.create_jnbvc8_k$($context);
        tmp0_set.put_3mhbri_k$(tmp1_set, tmp2_set);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ScopedInstanceFactory(beanDefinition) {
    InstanceFactory.call(this, beanDefinition);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp$ret$0 = HashMap_init_$Create$();
    tmp.values_1 = tmp$ret$0;
  }
  protoOf(ScopedInstanceFactory).isCreated_3z08on_k$ = function (context) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.get' call
    var tmp0_get = this.values_1;
    var tmp0_safe_receiver = context;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_scope_iyfcq3_k$();
    var tmp1_get = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_id_kntnx8_k$();
    tmp$ret$0 = (isInterface(tmp0_get, Map) ? tmp0_get : THROW_CCE()).get_1mhr4y_k$(tmp1_get);
    return !(tmp$ret$0 == null);
  };
  protoOf(ScopedInstanceFactory).drop_jzjibc_k$ = function (scope) {
    var tmp0_safe_receiver = scope;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'org.koin.core.instance.ScopedInstanceFactory.drop.<anonymous>' call
      var tmp0_safe_receiver_0 = this.get_beanDefinition_b177zg_k$().get_callbacks_8qyswr_k$().get_onClose_l3bvrk_k$();
      if (tmp0_safe_receiver_0 == null)
        null;
      else
        tmp0_safe_receiver_0(this.values_1.get_1mhr4y_k$(tmp0_safe_receiver.get_id_kntnx8_k$()));
      tmp$ret$0 = this.values_1.remove_8hbkc0_k$(tmp0_safe_receiver.get_id_kntnx8_k$());
      tmp$ret$1 = tmp$ret$0;
    }
  };
  protoOf(ScopedInstanceFactory).create_jnbvc8_k$ = function (context) {
    var tmp;
    if (this.values_1.get_1mhr4y_k$(context.get_scope_iyfcq3_k$().get_id_kntnx8_k$()) == null) {
      tmp = protoOf(InstanceFactory).create_jnbvc8_k$.call(this, context);
    } else {
      var tmp0_elvis_lhs = this.values_1.get_1mhr4y_k$(context.get_scope_iyfcq3_k$().get_id_kntnx8_k$());
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp0_error = 'Scoped instance not found for ' + context.get_scope_iyfcq3_k$().get_id_kntnx8_k$() + ' in ' + this.get_beanDefinition_b177zg_k$();
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ScopedInstanceFactory).get_kchvk2_k$ = function (context) {
    if (!equals(context.get_scope_iyfcq3_k$().get_scopeQualifier_eby6kf_k$(), this.get_beanDefinition_b177zg_k$().get_scopeQualifier_eby6kf_k$())) {
      // Inline function 'kotlin.error' call
      var tmp0_error = 'Wrong Scope: trying to open instance for ' + context.get_scope_iyfcq3_k$().get_id_kntnx8_k$() + ' in ' + this.get_beanDefinition_b177zg_k$();
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
    var tmp = KoinPlatformTools_getInstance();
    tmp.synchronized_5h0e7m_k$(this, ScopedInstanceFactory$get$lambda(this, context));
    var tmp0_elvis_lhs = this.values_1.get_1mhr4y_k$(context.get_scope_iyfcq3_k$().get_id_kntnx8_k$());
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var tmp1_error = 'Scoped instance not found for ' + context.get_scope_iyfcq3_k$().get_id_kntnx8_k$() + ' in ' + this.get_beanDefinition_b177zg_k$();
      throw IllegalStateException_init_$Create$(toString(tmp1_error));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(ScopedInstanceFactory).dropAll_wlge75_k$ = function () {
    this.values_1.clear_j9y8zo_k$();
  };
  protoOf(ScopedInstanceFactory).refreshInstance_qwbym6_k$ = function (scopeID, instance) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.values_1;
    var tmp1_set = isObject(instance) ? instance : THROW_CCE();
    tmp0_set.put_3mhbri_k$(scopeID, tmp1_set);
  };
  function _set_value__lx0xdg($this, _set____db54di) {
    $this.value_1 = _set____db54di;
  }
  function _get_value__a43j40($this) {
    return $this.value_1;
  }
  function getValue($this) {
    var tmp0_elvis_lhs = $this.value_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("Single instance created couldn't return value");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SingleInstanceFactory$get$lambda(this$0, $context) {
    return function () {
      var tmp;
      if (!this$0.isCreated_3z08on_k$($context)) {
        this$0.value_1 = this$0.create_jnbvc8_k$($context);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SingleInstanceFactory(beanDefinition) {
    InstanceFactory.call(this, beanDefinition);
    this.value_1 = null;
  }
  protoOf(SingleInstanceFactory).isCreated_3z08on_k$ = function (context) {
    return !(this.value_1 == null);
  };
  protoOf(SingleInstanceFactory).drop_jzjibc_k$ = function (scope) {
    var tmp0_safe_receiver = this.get_beanDefinition_b177zg_k$().get_callbacks_8qyswr_k$().get_onClose_l3bvrk_k$();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(this.value_1);
    this.value_1 = null;
  };
  protoOf(SingleInstanceFactory).dropAll_wlge75_k$ = function () {
    this.drop$default_e3zkdq_k$();
  };
  protoOf(SingleInstanceFactory).create_jnbvc8_k$ = function (context) {
    var tmp;
    if (this.value_1 == null) {
      tmp = protoOf(InstanceFactory).create_jnbvc8_k$.call(this, context);
    } else {
      tmp = getValue(this);
    }
    return tmp;
  };
  protoOf(SingleInstanceFactory).get_kchvk2_k$ = function (context) {
    var tmp = KoinPlatformTools_getInstance();
    tmp.synchronized_5h0e7m_k$(this, SingleInstanceFactory$get$lambda(this, context));
    return getValue(this);
  };
  function EmptyLogger() {
    Logger.call(this, Level_NONE_getInstance());
  }
  protoOf(EmptyLogger).display_ojtox1_k$ = function (level, msg) {
  };
  function Logger(level) {
    level = level === VOID ? Level_INFO_getInstance() : level;
    this.level_1 = level;
  }
  protoOf(Logger).set_level_rig2n_k$ = function (_set____db54di) {
    this.level_1 = _set____db54di;
  };
  protoOf(Logger).get_level_ium7h7_k$ = function () {
    return this.level_1;
  };
  protoOf(Logger).debug_1nsf3z_k$ = function (msg) {
    // Inline function 'org.koin.core.logger.Logger.log' call
    var tmp0_log = Level_DEBUG_getInstance();
    if (this.isAt_9azl0c_k$(tmp0_log)) {
      this.display_ojtox1_k$(tmp0_log, msg);
    }
  };
  protoOf(Logger).info_nf2s9o_k$ = function (msg) {
    // Inline function 'org.koin.core.logger.Logger.log' call
    var tmp0_log = Level_INFO_getInstance();
    if (this.isAt_9azl0c_k$(tmp0_log)) {
      this.display_ojtox1_k$(tmp0_log, msg);
    }
  };
  protoOf(Logger).warn_tjfcss_k$ = function (msg) {
    // Inline function 'org.koin.core.logger.Logger.log' call
    var tmp0_log = Level_WARNING_getInstance();
    if (this.isAt_9azl0c_k$(tmp0_log)) {
      this.display_ojtox1_k$(tmp0_log, msg);
    }
  };
  protoOf(Logger).error_3u4tx2_k$ = function (msg) {
    // Inline function 'org.koin.core.logger.Logger.log' call
    var tmp0_log = Level_ERROR_getInstance();
    if (this.isAt_9azl0c_k$(tmp0_log)) {
      this.display_ojtox1_k$(tmp0_log, msg);
    }
  };
  protoOf(Logger).isAt_9azl0c_k$ = function (lvl) {
    return this.level_1.compareTo_6thzay_k$(lvl) <= 0;
  };
  protoOf(Logger).log_5yx0bh_k$ = function (lvl, msg) {
    if (this.isAt_9azl0c_k$(lvl)) {
      this.display_ojtox1_k$(lvl, msg);
    }
  };
  protoOf(Logger).log_a77iie_k$ = function (lvl, msg) {
    if (this.isAt_9azl0c_k$(lvl)) {
      this.display_ojtox1_k$(lvl, msg());
    }
  };
  var Level_DEBUG_instance;
  var Level_INFO_instance;
  var Level_WARNING_instance;
  var Level_ERROR_instance;
  var Level_NONE_instance;
  function values_0() {
    return [Level_DEBUG_getInstance(), Level_INFO_getInstance(), Level_WARNING_getInstance(), Level_ERROR_getInstance(), Level_NONE_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'DEBUG':
        return Level_DEBUG_getInstance();
      case 'INFO':
        return Level_INFO_getInstance();
      case 'WARNING':
        return Level_WARNING_getInstance();
      case 'ERROR':
        return Level_ERROR_getInstance();
      case 'NONE':
        return Level_NONE_getInstance();
      default:
        Level_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Level_entriesInitialized;
  function Level_initEntries() {
    if (Level_entriesInitialized)
      return Unit_getInstance();
    Level_entriesInitialized = true;
    Level_DEBUG_instance = new Level('DEBUG', 0);
    Level_INFO_instance = new Level('INFO', 1);
    Level_WARNING_instance = new Level('WARNING', 2);
    Level_ERROR_instance = new Level('ERROR', 3);
    Level_NONE_instance = new Level('NONE', 4);
  }
  function Level(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function get_KOIN_TAG() {
    return KOIN_TAG;
  }
  var KOIN_TAG;
  function Level_DEBUG_getInstance() {
    Level_initEntries();
    return Level_DEBUG_instance;
  }
  function Level_INFO_getInstance() {
    Level_initEntries();
    return Level_INFO_instance;
  }
  function Level_WARNING_getInstance() {
    Level_initEntries();
    return Level_WARNING_instance;
  }
  function Level_ERROR_getInstance() {
    Level_initEntries();
    return Level_ERROR_instance;
  }
  function Level_NONE_getInstance() {
    Level_initEntries();
    return Level_NONE_instance;
  }
  function KoinApplicationDslMarker() {
  }
  protoOf(KoinApplicationDslMarker).equals = function (other) {
    if (!(other instanceof KoinApplicationDslMarker))
      return false;
    var tmp0_other_with_cast = other instanceof KoinApplicationDslMarker ? other : THROW_CCE();
    return true;
  };
  protoOf(KoinApplicationDslMarker).hashCode = function () {
    return 0;
  };
  protoOf(KoinApplicationDslMarker).toString = function () {
    return '@org.koin.core.module.KoinApplicationDslMarker()';
  };
  function KoinDslMarker() {
  }
  protoOf(KoinDslMarker).equals = function (other) {
    if (!(other instanceof KoinDslMarker))
      return false;
    var tmp0_other_with_cast = other instanceof KoinDslMarker ? other : THROW_CCE();
    return true;
  };
  protoOf(KoinDslMarker).hashCode = function () {
    return 0;
  };
  protoOf(KoinDslMarker).toString = function () {
    return '@org.koin.core.module.KoinDslMarker()';
  };
  function Module(_createdAtStart) {
    _createdAtStart = _createdAtStart === VOID ? false : _createdAtStart;
    this._createdAtStart_1 = _createdAtStart;
    this.id_1 = KoinPlatformTools_getInstance().generateId_52067k_k$();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.hashSetOf' call
    tmp$ret$0 = HashSet_init_$Create$();
    tmp.eagerInstances_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp$ret$1 = HashMap_init_$Create$();
    tmp_0.mappings_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.hashSetOf' call
    tmp$ret$2 = HashSet_init_$Create$();
    tmp_1.scopes_1 = tmp$ret$2;
    var tmp_2 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$3 = ArrayList_init_$Create$();
    tmp_2.includedModules_1 = tmp$ret$3;
  }
  protoOf(Module).get__createdAtStart_6om28z_k$ = function () {
    return this._createdAtStart_1;
  };
  protoOf(Module).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(Module).set_eagerInstances_hoqzvt_k$ = function (_set____db54di) {
    this.eagerInstances_1 = _set____db54di;
  };
  protoOf(Module).get_eagerInstances_3ljm7j_k$ = function () {
    return this.eagerInstances_1;
  };
  protoOf(Module).get_mappings_sl63f6_k$ = function () {
    return this.mappings_1;
  };
  protoOf(Module).get_isLoaded_w81k7s_k$ = function () {
    return this.mappings_1.get_size_woubt6_k$() > 0;
  };
  protoOf(Module).get_scopes_jebiqw_k$ = function () {
    return this.scopes_1;
  };
  protoOf(Module).get_includedModules_c46mo2_k$ = function () {
    return this.includedModules_1;
  };
  protoOf(Module).includes_8t8lz5_k$ = function (module_0) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.includedModules_1;
    addAll(tmp0_plusAssign, module_0);
  };
  protoOf(Module).includes_xeftjz_k$ = function (module_0) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.includedModules_1;
    addAll_0(tmp0_plusAssign, module_0);
  };
  protoOf(Module).scope_nbttwr_k$ = function (qualifier, scopeSet) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new ScopeDSL(qualifier, this);
    // Inline function 'kotlin.contracts.contract' call
    scopeSet(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    this.scopes_1.add_1j60pz_k$(qualifier);
  };
  protoOf(Module).indexPrimaryType_6kc2cm_k$ = function (instanceFactory) {
    var def = instanceFactory.get_beanDefinition_b177zg_k$();
    var mapping = indexKey(def.get_primaryType_gbcb1_k$(), def.get_qualifier_c4gvsv_k$(), def.get_scopeQualifier_eby6kf_k$());
    this.saveMapping_hfn11c_k$(mapping, instanceFactory);
  };
  protoOf(Module).indexSecondaryTypes_mp47ev_k$ = function (instanceFactory) {
    var def = instanceFactory.get_beanDefinition_b177zg_k$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = def.get_secondaryTypes_du752m_k$();
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.module.Module.indexSecondaryTypes.<anonymous>' call
      var mapping = indexKey(element, def.get_qualifier_c4gvsv_k$(), def.get_scopeQualifier_eby6kf_k$());
      this.saveMapping_hfn11c_k$(mapping, instanceFactory);
    }
  };
  protoOf(Module).prepareForCreationAtStart_9th3a_k$ = function (instanceFactory) {
    this.eagerInstances_1.add_1j60pz_k$(instanceFactory);
  };
  protoOf(Module).saveMapping_hfn11c_k$ = function (mapping, factory) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.mappings_1;
    tmp0_set.put_3mhbri_k$(mapping, factory);
  };
  protoOf(Module).plus_xvzq0b_k$ = function (module_0) {
    return listOf_0([this, module_0]);
  };
  protoOf(Module).plus_nbsegx_k$ = function (modules) {
    return plus(listOf(this), modules);
  };
  protoOf(Module).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof Module)
      other;
    else
      THROW_CCE();
    if (!(this.id_1 === other.id_1))
      return false;
    return true;
  };
  protoOf(Module).hashCode = function () {
    return getStringHashCode(this.id_1);
  };
  function flatten(modules, newModules) {
    newModules = newModules === VOID ? emptySet() : newModules;
    var modules_0 = modules;
    var newModules_0 = newModules;
    $l$1: do {
      $l$0: do {
        var tmp;
        if (modules_0.isEmpty_y1axqb_k$()) {
          tmp = newModules_0;
        } else {
          var tmp0_elvis_lhs = first(modules_0);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            throw IllegalStateException_init_$Create$('Flatten - No head element in list');
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var head = tmp_0;
          var tail = modules_0.subList_d153ha_k$(1, modules_0.get_size_woubt6_k$());
          var tmp_1;
          if (head.includedModules_1.isEmpty_y1axqb_k$()) {
            var tmp0 = tail;
            var tmp1 = plus_0(newModules_0, head);
            modules_0 = tmp0;
            newModules_0 = tmp1;
            continue $l$0;
          } else {
            var tmp2 = plus(head.includedModules_1, tail);
            var tmp3 = plus_0(newModules_0, head);
            modules_0 = tmp2;
            newModules_0 = tmp3;
            continue $l$0;
          }
          tmp = tmp_1;
        }
        return tmp;
      }
       while (false);
    }
     while (true);
  }
  function overrideError(factory, mapping) {
    throw new DefinitionOverrideException('Already existing definition for ' + factory.get_beanDefinition_b177zg_k$() + ' at ' + mapping);
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.MAX_PARAMS_1 = 5;
  }
  protoOf(Companion_1).get_MAX_PARAMS_jgsgie_k$ = function () {
    return this.MAX_PARAMS_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ParametersHolder(_values) {
    Companion_getInstance_2();
    var tmp;
    if (_values === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = _values;
    }
    _values = tmp;
    this._values_1 = _values;
  }
  protoOf(ParametersHolder).get__values_wfmpnc_k$ = function () {
    return this._values_1;
  };
  protoOf(ParametersHolder).get_values_ksazhn_k$ = function () {
    return this._values_1;
  };
  protoOf(ParametersHolder).elementAt_7ihs0k_k$ = function (i, clazz) {
    var tmp;
    if (this._values_1.get_size_woubt6_k$() > i) {
      var tmp_0 = this._values_1.get_fkrdnv_k$(i);
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      throw new NoParameterFoundException("Can't get injected parameter #" + i + ' from ' + this + " for type '" + getFullName(clazz) + "'");
    }
    return tmp;
  };
  protoOf(ParametersHolder).get_mntx2v_k$ = function (i) {
    var tmp = this._values_1.get_fkrdnv_k$(i);
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(ParametersHolder).set_z4t7y1_k$ = function (i, t) {
    this._values_1.set_meu351_k$(i, isObject(t) ? t : THROW_CCE());
  };
  protoOf(ParametersHolder).size_23och_k$ = function () {
    return this._values_1.get_size_woubt6_k$();
  };
  protoOf(ParametersHolder).isEmpty_y1axqb_k$ = function () {
    return this.size_23och_k$() === 0;
  };
  protoOf(ParametersHolder).isNotEmpty_cjxbwk_k$ = function () {
    return !this.isEmpty_y1axqb_k$();
  };
  protoOf(ParametersHolder).insert_i5ixxy_k$ = function (index, value) {
    this._values_1.add_ydlf05_k$(index, value);
    return this;
  };
  protoOf(ParametersHolder).add_ylbznn_k$ = function (value) {
    this._values_1.add_1j60pz_k$(value);
    return this;
  };
  protoOf(ParametersHolder).getOrNull_7f05lo_k$ = function (clazz) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
      var tmp0_firstNotNullOfOrNull = this._values_1;
      var tmp0_iterator = tmp0_firstNotNullOfOrNull.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$0;
        // Inline function 'org.koin.core.parameter.ParametersHolder.getOrNull.<anonymous>' call
        var tmp;
        if (clazz.isInstance_6tn68w_k$(element)) {
          tmp = (element == null ? true : isObject(element)) ? element : null;
        } else {
          tmp = null;
        }
        tmp$ret$0 = tmp;
        var result = tmp$ret$0;
        if (!(result == null)) {
          tmp$ret$1 = result;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  protoOf(ParametersHolder).toString = function () {
    return 'DefinitionParameters' + toList_0(this._values_1);
  };
  function emptyParametersHolder() {
    return new ParametersHolder();
  }
  function Qualifier() {
  }
  function _q(name) {
    return new StringQualifier(name);
  }
  function StringQualifier(value) {
    this.value_1 = value;
  }
  protoOf(StringQualifier).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(StringQualifier).toString = function () {
    return this.value_1;
  };
  protoOf(StringQualifier).component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  protoOf(StringQualifier).copy_3t26ic_k$ = function (value) {
    return new StringQualifier(value);
  };
  protoOf(StringQualifier).copy$default_4g62tr_k$ = function (value, $super) {
    value = value === VOID ? this.value_1 : value;
    return $super === VOID ? this.copy_3t26ic_k$(value) : $super.copy_3t26ic_k$.call(this, value);
  };
  protoOf(StringQualifier).hashCode = function () {
    return getStringHashCode(this.value_1);
  };
  protoOf(StringQualifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StringQualifier))
      return false;
    var tmp0_other_with_cast = other instanceof StringQualifier ? other : THROW_CCE();
    if (!(this.value_1 === tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  function TypeQualifier(type) {
    this.type_1 = type;
    this.value_1 = getFullName(this.type_1);
  }
  protoOf(TypeQualifier).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(TypeQualifier).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(TypeQualifier).toString = function () {
    return "q:'" + this.value_1 + "'";
  };
  protoOf(TypeQualifier).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof TypeQualifier)
      other;
    else
      THROW_CCE();
    if (!(this.value_1 === other.value_1))
      return false;
    return true;
  };
  protoOf(TypeQualifier).hashCode = function () {
    return getStringHashCode(this.value_1);
  };
  function _get__instances__1pxuuk($this) {
    return $this._instances_1;
  }
  function _get_eagerInstances__e0lc9n($this) {
    return $this.eagerInstances_1;
  }
  function addAllEagerInstances($this, module_0) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = module_0.get_eagerInstances_3ljm7j_k$();
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.registry.InstanceRegistry.addAllEagerInstances.<anonymous>' call
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = $this.eagerInstances_1;
      var tmp1_set = element.hashCode();
      tmp0_set.put_3mhbri_k$(tmp1_set, element);
    }
  }
  function loadModule($this, module_0, allowOverride) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = module_0.get_mappings_sl63f6_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp0_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.registry.InstanceRegistry.loadModule.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.get_key_18j28a_k$();
      var mapping = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.get_value_j01efc_k$();
      var factory = tmp$ret$2;
      $this.saveMapping$default_o2gh03_k$(allowOverride, mapping, factory);
    }
  }
  function createEagerInstances($this, eagerInstances) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$0 = !eagerInstances.isEmpty_y1axqb_k$();
    if (tmp$ret$0) {
      var defaultContext = new InstanceContext($this._koin_1.get_logger_g9gejd_k$(), $this._koin_1.get_scopeRegistry_7zu3y0_k$().get_rootScope_60k1zr_k$());
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = eagerInstances.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'org.koin.core.registry.InstanceRegistry.createEagerInstances.<anonymous>' call
        element.get_kchvk2_k$(defaultContext);
      }
    }
  }
  function unloadModule($this, module_0) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = module_0.get_mappings_sl63f6_k$().get_keys_wop4xp_k$();
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.registry.InstanceRegistry.unloadModule.<anonymous>' call
      if ($this._instances_1.containsKey_wgk31w_k$(element)) {
        var tmp0_safe_receiver = $this._instances_1.get_1mhr4y_k$(element);
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.dropAll_wlge75_k$();
        }
        $this._instances_1.remove_8hbkc0_k$(element);
      }
    }
  }
  function InstanceRegistry(_koin) {
    this._koin_1 = _koin;
    this._instances_1 = KoinPlatformTools_getInstance().safeHashMap_vw883b_k$();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp$ret$0 = HashMap_init_$Create$();
    tmp.eagerInstances_1 = tmp$ret$0;
  }
  protoOf(InstanceRegistry).get__koin_inkklb_k$ = function () {
    return this._koin_1;
  };
  protoOf(InstanceRegistry).get_instances_8zuh1x_k$ = function () {
    return this._instances_1;
  };
  protoOf(InstanceRegistry).loadModules_thcdwd_k$ = function (modules, allowOverride) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = modules.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.registry.InstanceRegistry.loadModules.<anonymous>' call
      loadModule(this, element, allowOverride);
      addAllEagerInstances(this, element);
    }
  };
  protoOf(InstanceRegistry).createAllEagerInstances_wwsk6y_k$ = function () {
    createEagerInstances(this, this.eagerInstances_1.get_values_ksazhn_k$());
    this.eagerInstances_1.clear_j9y8zo_k$();
  };
  protoOf(InstanceRegistry).saveMapping_nypaps_k$ = function (allowOverride, mapping, factory, logWarning) {
    if (this._instances_1.containsKey_wgk31w_k$(mapping)) {
      if (!allowOverride) {
        overrideError(factory, mapping);
      } else {
        if (logWarning) {
          // Inline function 'org.koin.core.logger.Logger.warn' call
          var tmp1_warn = this._koin_1.get_logger_g9gejd_k$();
          var tmp2_warn = "(+) override index '" + mapping + "' -> '" + factory.get_beanDefinition_b177zg_k$() + "'";
          // Inline function 'org.koin.core.logger.Logger.log' call
          var tmp0_log = Level_WARNING_getInstance();
          if (tmp1_warn.isAt_9azl0c_k$(tmp0_log)) {
            tmp1_warn.display_ojtox1_k$(tmp0_log, tmp2_warn);
          }
        }
      }
    }
    // Inline function 'org.koin.core.logger.Logger.debug' call
    var tmp4_debug = this._koin_1.get_logger_g9gejd_k$();
    var tmp5_debug = "(+) index '" + mapping + "' -> '" + factory.get_beanDefinition_b177zg_k$() + "'";
    // Inline function 'org.koin.core.logger.Logger.log' call
    var tmp3_log = Level_DEBUG_getInstance();
    if (tmp4_debug.isAt_9azl0c_k$(tmp3_log)) {
      tmp4_debug.display_ojtox1_k$(tmp3_log, tmp5_debug);
    }
    // Inline function 'kotlin.collections.set' call
    var tmp6_set = this._instances_1;
    tmp6_set.put_3mhbri_k$(mapping, factory);
  };
  protoOf(InstanceRegistry).saveMapping$default_o2gh03_k$ = function (allowOverride, mapping, factory, logWarning, $super) {
    logWarning = logWarning === VOID ? true : logWarning;
    var tmp;
    if ($super === VOID) {
      this.saveMapping_nypaps_k$(allowOverride, mapping, factory, logWarning);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.saveMapping_nypaps_k$.call(this, allowOverride, mapping, factory, logWarning);
    }
    return tmp;
  };
  protoOf(InstanceRegistry).resolveDefinition_bo7uo6_k$ = function (clazz, qualifier, scopeQualifier) {
    var indexKey_0 = indexKey(clazz, qualifier, scopeQualifier);
    return this._instances_1.get_1mhr4y_k$(indexKey_0);
  };
  protoOf(InstanceRegistry).resolveInstance_cs8p06_k$ = function (qualifier, clazz, scopeQualifier, instanceContext) {
    var tmp0_safe_receiver = this.resolveDefinition_bo7uo6_k$(clazz, qualifier, scopeQualifier);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_kchvk2_k$(instanceContext);
    return (tmp == null ? true : isObject(tmp)) ? tmp : null;
  };
  protoOf(InstanceRegistry).dropScopeInstances_gs4w8h_k$ = function (scope) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp1_filterIsInstance = this._instances_1.get_values_ksazhn_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
    var tmp0_iterator = tmp1_filterIsInstance.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      if (element instanceof ScopedInstanceFactory) {
        tmp0_filterIsInstanceTo.add_1j60pz_k$(element);
      }
    }
    tmp$ret$0 = tmp0_filterIsInstanceTo;
    tmp$ret$1 = tmp$ret$0;
    var tmp2_forEach = tmp$ret$1;
    var tmp0_iterator_0 = tmp2_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'org.koin.core.registry.InstanceRegistry.dropScopeInstances.<anonymous>' call
      element_0.drop_jzjibc_k$(scope);
    }
  };
  protoOf(InstanceRegistry).close_ymq55z_k$ = function () {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this._instances_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp0_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.registry.InstanceRegistry.close.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.get_key_18j28a_k$();
      var key = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.get_value_j01efc_k$();
      var factory = tmp$ret$2;
      factory.dropAll_wlge75_k$();
    }
    this._instances_1.clear_j9y8zo_k$();
  };
  protoOf(InstanceRegistry).getAll_w2pul7_k$ = function (clazz, instanceContext) {
    var tmp$ret$8;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$5;
    // Inline function 'kotlin.collections.filter' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filter' call
    var tmp1_filter = this._instances_1.get_values_ksazhn_k$();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = tmp1_filter.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'org.koin.core.registry.InstanceRegistry.getAll.<anonymous>' call
      tmp$ret$0 = equals(element.get_beanDefinition_b177zg_k$().get_scopeQualifier_eby6kf_k$(), instanceContext.get_scope_iyfcq3_k$().get_scopeQualifier_eby6kf_k$());
      if (tmp$ret$0) {
        tmp0_filterTo.add_1j60pz_k$(element);
      }
    }
    tmp$ret$1 = tmp0_filterTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp3_filter = tmp$ret$2;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp2_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator_0 = tmp3_filter.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      var tmp$ret$3;
      // Inline function 'org.koin.core.registry.InstanceRegistry.getAll.<anonymous>' call
      tmp$ret$3 = element_0.get_beanDefinition_b177zg_k$().get_primaryType_gbcb1_k$().equals(clazz) ? true : element_0.get_beanDefinition_b177zg_k$().get_secondaryTypes_du752m_k$().contains_2ehdt1_k$(clazz);
      if (tmp$ret$3) {
        tmp2_filterTo.add_1j60pz_k$(element_0);
      }
    }
    tmp$ret$4 = tmp2_filterTo;
    tmp$ret$5 = tmp$ret$4;
    var tmp5_map = distinct(tmp$ret$5);
    var tmp$ret$7;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp4_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp5_map, 10));
    var tmp0_iterator_1 = tmp5_map.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_1.next_20eer_k$();
      var tmp$ret$6;
      // Inline function 'org.koin.core.registry.InstanceRegistry.getAll.<anonymous>' call
      var tmp = item.get_kchvk2_k$(instanceContext);
      tmp$ret$6 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      tmp4_mapTo.add_1j60pz_k$(tmp$ret$6);
    }
    tmp$ret$7 = tmp4_mapTo;
    tmp$ret$8 = tmp$ret$7;
    return tmp$ret$8;
  };
  protoOf(InstanceRegistry).unloadModules_rv8cqk_k$ = function (modules) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = modules.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.registry.InstanceRegistry.unloadModules.<anonymous>' call
      unloadModule(this, element);
    }
  };
  protoOf(InstanceRegistry).size_23och_k$ = function () {
    return this._instances_1.get_size_woubt6_k$();
  };
  function _get__values__6yksts($this) {
    return $this._values_1;
  }
  function PropertyRegistry(_koin) {
    this._koin_1 = _koin;
    this._values_1 = KoinPlatformTools_getInstance().safeHashMap_vw883b_k$();
  }
  protoOf(PropertyRegistry).get__koin_inkklb_k$ = function () {
    return this._koin_1;
  };
  protoOf(PropertyRegistry).saveProperties_q6b72h_k$ = function (properties) {
    // Inline function 'org.koin.core.logger.Logger.debug' call
    var tmp1_debug = this._koin_1.get_logger_g9gejd_k$();
    var tmp2_debug = 'load ' + properties.get_size_woubt6_k$() + ' properties';
    // Inline function 'org.koin.core.logger.Logger.log' call
    var tmp0_log = Level_DEBUG_getInstance();
    if (tmp1_debug.isAt_9azl0c_k$(tmp0_log)) {
      tmp1_debug.display_ojtox1_k$(tmp0_log, tmp2_debug);
    }
    this._values_1.putAll_mee1c3_k$(properties);
  };
  protoOf(PropertyRegistry).saveProperty_d7jy4s_k$ = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this._values_1;
    tmp0_set.put_3mhbri_k$(key, value);
  };
  protoOf(PropertyRegistry).deleteProperty_9xld72_k$ = function (key) {
    this._values_1.remove_8hbkc0_k$(key);
  };
  protoOf(PropertyRegistry).getProperty_sqfjxw_k$ = function (key) {
    var tmp = this._values_1.get_1mhr4y_k$(key);
    return (tmp == null ? true : isObject(tmp)) ? tmp : null;
  };
  protoOf(PropertyRegistry).close_ymq55z_k$ = function () {
    this._values_1.clear_j9y8zo_k$();
  };
  function _get_ROOT_SCOPE_ID__69ax66($this) {
    return $this.ROOT_SCOPE_ID_1;
  }
  function _get__koin__kul7yv($this) {
    return $this._koin_1;
  }
  function _get__scopeDefinitions__3phb96($this) {
    return $this._scopeDefinitions_1;
  }
  function _get__scopes__yy5frn($this) {
    return $this._scopes_1;
  }
  function closeAllScopes($this) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = $this._scopes_1.get_values_ksazhn_k$();
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.registry.ScopeRegistry.closeAllScopes.<anonymous>' call
      element.close_ymq55z_k$();
    }
  }
  function loadModule_0($this, module_0) {
    $this._scopeDefinitions_1.addAll_oxxjjk_k$(module_0.get_scopes_jebiqw_k$());
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.ROOT_SCOPE_ID_1 = '_root_';
    this.rootScopeQualifier_1 = _q('_root_');
  }
  protoOf(Companion_2).get_rootScopeQualifier_6qrm0v_k$ = function () {
    return this.rootScopeQualifier_1;
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function ScopeRegistry(_koin) {
    Companion_getInstance_3();
    this._koin_1 = _koin;
    this._scopeDefinitions_1 = HashSet_init_$Create$();
    this._scopes_1 = KoinPlatformTools_getInstance().safeHashMap_vw883b_k$();
    var tmp = this;
    var tmp_0 = Companion_getInstance_3().rootScopeQualifier_1;
    Companion_getInstance_3();
    tmp.rootScope_1 = new Scope(tmp_0, '_root_', true, this._koin_1);
    this._scopeDefinitions_1.add_1j60pz_k$(this.rootScope_1.get_scopeQualifier_eby6kf_k$());
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this._scopes_1;
    var tmp1_set = this.rootScope_1.get_id_kntnx8_k$();
    var tmp2_set = this.rootScope_1;
    tmp0_set.put_3mhbri_k$(tmp1_set, tmp2_set);
  }
  protoOf(ScopeRegistry).get_scopeDefinitions_dqva97_k$ = function () {
    return this._scopeDefinitions_1;
  };
  protoOf(ScopeRegistry).get_rootScope_60k1zr_k$ = function () {
    return this.rootScope_1;
  };
  protoOf(ScopeRegistry).getScopeOrNull_vptix3_k$ = function (scopeId) {
    return this._scopes_1.get_1mhr4y_k$(scopeId);
  };
  protoOf(ScopeRegistry).createScope_l554vf_k$ = function (scopeId, qualifier, source) {
    // Inline function 'org.koin.core.logger.Logger.debug' call
    var tmp1_debug = this._koin_1.get_logger_g9gejd_k$();
    var tmp2_debug = "|- (+) Scope - id:'" + scopeId + "' q:" + qualifier;
    // Inline function 'org.koin.core.logger.Logger.log' call
    var tmp0_log = Level_DEBUG_getInstance();
    if (tmp1_debug.isAt_9azl0c_k$(tmp0_log)) {
      tmp1_debug.display_ojtox1_k$(tmp0_log, tmp2_debug);
    }
    if (!this._scopeDefinitions_1.contains_2ehdt1_k$(qualifier)) {
      // Inline function 'org.koin.core.logger.Logger.warn' call
      var tmp4_warn = this._koin_1.get_logger_g9gejd_k$();
      var tmp5_warn = "| Scope '" + qualifier + "' not defined. Creating it ...";
      // Inline function 'org.koin.core.logger.Logger.log' call
      var tmp3_log = Level_WARNING_getInstance();
      if (tmp4_warn.isAt_9azl0c_k$(tmp3_log)) {
        tmp4_warn.display_ojtox1_k$(tmp3_log, tmp5_warn);
      }
      this._scopeDefinitions_1.add_1j60pz_k$(qualifier);
    }
    var tmp$ret$1;
    // Inline function 'kotlin.collections.contains' call
    var tmp6_contains = this._scopes_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.containsKey' call
    tmp$ret$0 = (isInterface(tmp6_contains, Map) ? tmp6_contains : THROW_CCE()).containsKey_wgk31w_k$(scopeId);
    tmp$ret$1 = tmp$ret$0;
    if (tmp$ret$1) {
      throw new ScopeAlreadyCreatedException("Scope with id '" + scopeId + "' is already created");
    }
    var scope = new Scope(qualifier, scopeId, VOID, this._koin_1);
    var tmp0_safe_receiver = source;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      scope.set__source_t801al_k$(source);
      tmp$ret$2 = Unit_getInstance();
    }
    scope.linkTo_ao6bsx_k$([this.rootScope_1]);
    // Inline function 'kotlin.collections.set' call
    var tmp7_set = this._scopes_1;
    tmp7_set.put_3mhbri_k$(scopeId, scope);
    return scope;
  };
  protoOf(ScopeRegistry).createScope$default_md4ikd_k$ = function (scopeId, qualifier, source, $super) {
    source = source === VOID ? null : source;
    return $super === VOID ? this.createScope_l554vf_k$(scopeId, qualifier, source) : $super.createScope_l554vf_k$.call(this, scopeId, qualifier, source);
  };
  protoOf(ScopeRegistry).deleteScope_z9844p_k$ = function (scopeId) {
    var tmp0_safe_receiver = this._scopes_1.get_1mhr4y_k$(scopeId);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.deleteScope_azve1r_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
  };
  protoOf(ScopeRegistry).deleteScope_azve1r_k$ = function (scope) {
    this._koin_1.get_instanceRegistry_jmeu6d_k$().dropScopeInstances_gs4w8h_k$(scope);
    this._scopes_1.remove_8hbkc0_k$(scope.get_id_kntnx8_k$());
  };
  protoOf(ScopeRegistry).close_ymq55z_k$ = function () {
    closeAllScopes(this);
    this._scopes_1.clear_j9y8zo_k$();
    this._scopeDefinitions_1.clear_j9y8zo_k$();
  };
  protoOf(ScopeRegistry).loadScopes_a69qav_k$ = function (modules) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = modules.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.registry.ScopeRegistry.loadScopes.<anonymous>' call
      loadModule_0(this, element);
    }
  };
  function _get_linkedScopes__komjf1($this) {
    return $this.linkedScopes_1;
  }
  function _get__callbacks__jvmpss($this) {
    return $this._callbacks_1;
  }
  function _set__closed__rya7c6($this, _set____db54di) {
    $this._closed_1 = _set____db54di;
  }
  function _get__closed__hglk9y($this) {
    return $this._closed_1;
  }
  function resolveInstance($this, qualifier, clazz, parameterDef) {
    if ($this._closed_1) {
      throw new ClosedScopeException("Scope '" + $this.id_1 + "' is closed");
    }
    var tmp0_safe_receiver = parameterDef;
    var parameters = tmp0_safe_receiver == null ? null : tmp0_safe_receiver();
    if (!(parameters == null)) {
      // Inline function 'org.koin.core.logger.Logger.log' call
      var tmp0_log = $this._koin_1.get_logger_g9gejd_k$();
      var tmp1_log = Level_DEBUG_getInstance();
      if (tmp0_log.isAt_9azl0c_k$(tmp1_log)) {
        var tmp$ret$0;
        // Inline function 'org.koin.core.scope.Scope.resolveInstance.<anonymous>' call
        tmp$ret$0 = '| >> parameters ' + parameters + ' ';
        tmp0_log.display_ojtox1_k$(tmp1_log, tmp$ret$0);
      }
      var tmp = KoinPlatformTools_getInstance();
      tmp.synchronized_5h0e7m_k$($this, Scope$resolveInstance$lambda($this, parameters));
    }
    var instanceContext = new InstanceContext($this._koin_1.get_logger_g9gejd_k$(), $this, parameters);
    var value = resolveValue($this, qualifier, clazz, instanceContext, parameterDef);
    if (!(parameters == null)) {
      // Inline function 'org.koin.core.logger.Logger.debug' call
      var tmp3_debug = $this._koin_1.get_logger_g9gejd_k$();
      // Inline function 'org.koin.core.logger.Logger.log' call
      var tmp2_log = Level_DEBUG_getInstance();
      if (tmp3_debug.isAt_9azl0c_k$(tmp2_log)) {
        tmp3_debug.display_ojtox1_k$(tmp2_log, '| << parameters');
      }
      var tmp_0 = KoinPlatformTools_getInstance();
      tmp_0.synchronized_5h0e7m_k$($this, Scope$resolveInstance$lambda_0($this));
    }
    return value;
  }
  function resolveValue($this, qualifier, clazz, instanceContext, parameterDef) {
    var tmp0_elvis_lhs = $this._koin_1.get_instanceRegistry_jmeu6d_k$().resolveInstance_cs8p06_k$(qualifier, clazz, $this.scopeQualifier_1, instanceContext);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>' call
      // Inline function 'org.koin.core.logger.Logger.debug' call
      var tmp1_debug = $this._koin_1.get_logger_g9gejd_k$();
      var tmp2_debug = "|- ? t:'" + getFullName(clazz) + "' - q:'" + qualifier + "' look in injected parameters";
      // Inline function 'org.koin.core.logger.Logger.log' call
      var tmp0_log = Level_DEBUG_getInstance();
      if (tmp1_debug.isAt_9azl0c_k$(tmp0_log)) {
        tmp1_debug.display_ojtox1_k$(tmp0_log, tmp2_debug);
      }
      var tmp0_safe_receiver = $this._parameterStack_1.firstOrNull_j0zfvq_k$();
      tmp$ret$0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getOrNull_7f05lo_k$(clazz);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$5;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>' call
      // Inline function 'org.koin.core.logger.Logger.debug' call
      var tmp1_debug_0 = $this._koin_1.get_logger_g9gejd_k$();
      var tmp2_debug_0 = "|- ? t:'" + getFullName(clazz) + "' - q:'" + qualifier + "' look at scope source";
      // Inline function 'org.koin.core.logger.Logger.log' call
      var tmp0_log_0 = Level_DEBUG_getInstance();
      if (tmp1_debug_0.isAt_9azl0c_k$(tmp0_log_0)) {
        tmp1_debug_0.display_ojtox1_k$(tmp0_log_0, tmp2_debug_0);
      }
      var tmp0_safe_receiver_0 = $this._source_1;
      var tmp_1;
      if (tmp0_safe_receiver_0 == null) {
        tmp_1 = null;
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$2;
        // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>.<anonymous>' call
        var tmp_2;
        if (getKClassFromExpression(tmp0_safe_receiver_0).equals(clazz) ? qualifier == null : false) {
          var tmp_3 = $this._source_1;
          tmp_2 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : null;
        } else {
          tmp_2 = null;
        }
        tmp$ret$2 = tmp_2;
        tmp$ret$3 = tmp$ret$2;
        tmp_1 = tmp$ret$3;
      }
      tmp$ret$4 = tmp_1;
      tmp$ret$5 = tmp$ret$4;
      tmp_0 = tmp$ret$5;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var tmp2_elvis_lhs = tmp_0;
    var tmp_4;
    if (tmp2_elvis_lhs == null) {
      var tmp$ret$7;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>' call
      // Inline function 'org.koin.core.logger.Logger.debug' call
      var tmp1_debug_1 = $this._koin_1.get_logger_g9gejd_k$();
      var tmp2_debug_1 = "|- ? t:'" + getFullName(clazz) + "' - q:'" + qualifier + "' look in other scopes";
      // Inline function 'org.koin.core.logger.Logger.log' call
      var tmp0_log_1 = Level_DEBUG_getInstance();
      if (tmp1_debug_1.isAt_9azl0c_k$(tmp0_log_1)) {
        tmp1_debug_1.display_ojtox1_k$(tmp0_log_1, tmp2_debug_1);
      }
      tmp$ret$6 = findInOtherScope($this, clazz, qualifier, parameterDef);
      tmp$ret$7 = tmp$ret$6;
      tmp_4 = tmp$ret$7;
    } else {
      tmp_4 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_4;
    var tmp_5;
    if (tmp3_elvis_lhs == null) {
      var tmp$ret$9;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$8;
      // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>' call
      var tmp_6 = KoinPlatformTools_getInstance();
      tmp_6.synchronized_5h0e7m_k$($this, Scope$resolveValue$lambda($this));
      // Inline function 'org.koin.core.logger.Logger.debug' call
      var tmp1_debug_2 = $this._koin_1.get_logger_g9gejd_k$();
      // Inline function 'org.koin.core.logger.Logger.log' call
      var tmp0_log_2 = Level_DEBUG_getInstance();
      if (tmp1_debug_2.isAt_9azl0c_k$(tmp0_log_2)) {
        tmp1_debug_2.display_ojtox1_k$(tmp0_log_2, '|- << parameters');
      }
      throwDefinitionNotFound($this, qualifier, clazz);
      tmp$ret$9 = tmp$ret$8;
      tmp_5 = tmp$ret$9;
    } else {
      tmp_5 = tmp3_elvis_lhs;
    }
    return tmp_5;
  }
  function getFromSource($this, clazz) {
    var tmp;
    if (clazz.isInstance_6tn68w_k$($this._source_1)) {
      var tmp_0 = $this._source_1;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : null;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function findInOtherScope($this, clazz, qualifier, parameters) {
    var instance = null;
    var tmp0_iterator = $this.linkedScopes_1.iterator_jk1svi_k$();
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var scope = tmp0_iterator.next_20eer_k$();
      instance = scope.getOrNull_re75dc_k$(clazz, qualifier, parameters);
      if (!(instance == null))
        break $l$loop;
    }
    return instance;
  }
  function throwDefinitionNotFound($this, qualifier, clazz) {
    var tmp0_safe_receiver = qualifier;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'org.koin.core.scope.Scope.throwDefinitionNotFound.<anonymous>' call
      tmp$ret$0 = " & qualifier:'" + qualifier + "'";
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var qualifierString = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    throw new NoBeanDefFoundException("No definition found for class:'" + getFullName(clazz) + "' q:'" + qualifierString + "'. Check your definitions!");
  }
  function Scope$resolveInstance$lambda(this$0, $parameters) {
    return function () {
      this$0._parameterStack_1.addFirst_qo8i10_k$($parameters);
      return Unit_getInstance();
    };
  }
  function Scope$resolveInstance$lambda_0(this$0) {
    return function () {
      return this$0._parameterStack_1.removeFirstOrNull_eges3a_k$();
    };
  }
  function Scope$resolveValue$lambda(this$0) {
    return function () {
      this$0._parameterStack_1.clear_j9y8zo_k$();
      return Unit_getInstance();
    };
  }
  function Scope$close$lambda(this$0) {
    return function () {
      var tmp1_debug = this$0._koin_1.get_logger_g9gejd_k$();
      var tmp2_debug = "|- (-) Scope - id:'" + this$0.id_1 + "'";
      var tmp0_log = Level_DEBUG_getInstance();
      var tmp;
      if (tmp1_debug.isAt_9azl0c_k$(tmp0_log)) {
        tmp1_debug.display_ojtox1_k$(tmp0_log, tmp2_debug);
        tmp = Unit_getInstance();
      }
      var tmp3_forEach = this$0._callbacks_1;
      var tmp0_iterator = tmp3_forEach.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'org.koin.core.scope.Scope.close.<anonymous>.<anonymous>' call
        element.onScopeClose_lijfi1_k$(this$0);
      }
      this$0._callbacks_1.clear_j9y8zo_k$();
      this$0._source_1 = null;
      this$0._closed_1 = true;
      this$0._koin_1.get_scopeRegistry_7zu3y0_k$().deleteScope_azve1r_k$(this$0);
      return Unit_getInstance();
    };
  }
  function Scope(scopeQualifier, id, isRoot, _koin) {
    isRoot = isRoot === VOID ? false : isRoot;
    this.scopeQualifier_1 = scopeQualifier;
    this.id_1 = id;
    this.isRoot_1 = isRoot;
    this._koin_1 = _koin;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.linkedScopes_1 = tmp$ret$0;
    this._source_1 = null;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0._callbacks_1 = tmp$ret$1;
    this._parameterStack_1 = ArrayDeque_init_$Create$();
    this._closed_1 = false;
  }
  protoOf(Scope).get_scopeQualifier_eby6kf_k$ = function () {
    return this.scopeQualifier_1;
  };
  protoOf(Scope).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(Scope).get_isRoot_ew5h6d_k$ = function () {
    return this.isRoot_1;
  };
  protoOf(Scope).get__koin_inkklb_k$ = function () {
    return this._koin_1;
  };
  protoOf(Scope).set__source_t801al_k$ = function (_set____db54di) {
    this._source_1 = _set____db54di;
  };
  protoOf(Scope).get__source_v8cndd_k$ = function () {
    return this._source_1;
  };
  protoOf(Scope).get_closed_byjrzp_k$ = function () {
    return this._closed_1;
  };
  protoOf(Scope).isNotClosed_x1h9n9_k$ = function () {
    return !this.get_closed_byjrzp_k$();
  };
  protoOf(Scope).get__parameterStack_bsr1cl_k$ = function () {
    return this._parameterStack_1;
  };
  protoOf(Scope).get_logger_g9gejd_k$ = function () {
    return this._koin_1.get_logger_g9gejd_k$();
  };
  protoOf(Scope).create_849kn2_k$ = function (links) {
    this.linkedScopes_1.addAll_oxxjjk_k$(links);
  };
  protoOf(Scope).linkTo_ao6bsx_k$ = function (scopes) {
    if (!this.isRoot_1) {
      addAll(this.linkedScopes_1, scopes);
    } else {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$("Can't add scope link to a root scope");
    }
  };
  protoOf(Scope).unlink_p4pscd_k$ = function (scopes) {
    if (!this.isRoot_1) {
      removeAll(this.linkedScopes_1, scopes);
    } else {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$("Can't remove scope link to a root scope");
    }
  };
  protoOf(Scope).getOrNull_re75dc_k$ = function (clazz, qualifier, parameters) {
    var tmp;
    try {
      tmp = this.get_ocvqe2_k$(clazz, qualifier, parameters);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof ClosedScopeException) {
        var e = $p;
        // Inline function 'org.koin.core.logger.Logger.debug' call
        var tmp1_debug = this._koin_1.get_logger_g9gejd_k$();
        var tmp2_debug = '* Scope closed - no instance found for ' + getFullName(clazz) + ' on scope ' + this.toString();
        // Inline function 'org.koin.core.logger.Logger.log' call
        var tmp0_log = Level_DEBUG_getInstance();
        if (tmp1_debug.isAt_9azl0c_k$(tmp0_log)) {
          tmp1_debug.display_ojtox1_k$(tmp0_log, tmp2_debug);
        }
        tmp_0 = null;
      } else {
        if ($p instanceof NoBeanDefFoundException) {
          var e_0 = $p;
          // Inline function 'org.koin.core.logger.Logger.debug' call
          var tmp4_debug = this._koin_1.get_logger_g9gejd_k$();
          var tmp5_debug = '* No instance found for ' + getFullName(clazz) + ' on scope ' + this.toString();
          // Inline function 'org.koin.core.logger.Logger.log' call
          var tmp3_log = Level_DEBUG_getInstance();
          if (tmp4_debug.isAt_9azl0c_k$(tmp3_log)) {
            tmp4_debug.display_ojtox1_k$(tmp3_log, tmp5_debug);
          }
          tmp_0 = null;
        } else {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Scope).getOrNull$default_s869rp_k$ = function (clazz, qualifier, parameters, $super) {
    qualifier = qualifier === VOID ? null : qualifier;
    parameters = parameters === VOID ? null : parameters;
    return $super === VOID ? this.getOrNull_re75dc_k$(clazz, qualifier, parameters) : $super.getOrNull_re75dc_k$.call(this, clazz, qualifier, parameters);
  };
  protoOf(Scope).get_ocvqe2_k$ = function (clazz, qualifier, parameters) {
    var tmp;
    if (this._koin_1.get_logger_g9gejd_k$().isAt_9azl0c_k$(Level_DEBUG_getInstance())) {
      var tmp0_safe_receiver = qualifier;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'org.koin.core.scope.Scope.get.<anonymous>' call
        tmp$ret$0 = " with qualifier '" + qualifier + "'";
        tmp$ret$1 = tmp$ret$0;
        tmp_0 = tmp$ret$1;
      }
      var tmp1_elvis_lhs = tmp_0;
      var qualifierString = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
      this._koin_1.get_logger_g9gejd_k$().display_ojtox1_k$(Level_DEBUG_getInstance(), "|- '" + getFullName(clazz) + "'" + qualifierString + ' ...');
      var start = KoinPlatformTimeTools_getInstance().getTimeInNanoSeconds_rsnqv1_k$();
      var instance = resolveInstance(this, qualifier, clazz, parameters);
      var stop = KoinPlatformTimeTools_getInstance().getTimeInNanoSeconds_rsnqv1_k$();
      var tmp$ret$2;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = stop.minus_llf5ei_k$(start);
      var tmp1_div = Companion_getInstance_4().get_NANO_TO_MILLI_vas3xn_k$();
      tmp$ret$2 = tmp0_div.toDouble_ygsx0s_k$() / tmp1_div;
      var duration = tmp$ret$2;
      this._koin_1.get_logger_g9gejd_k$().display_ojtox1_k$(Level_DEBUG_getInstance(), "|- '" + getFullName(clazz) + "' in " + duration + ' ms');
      tmp = instance;
    } else {
      tmp = resolveInstance(this, qualifier, clazz, parameters);
    }
    return tmp;
  };
  protoOf(Scope).get$default_7tnyut_k$ = function (clazz, qualifier, parameters, $super) {
    qualifier = qualifier === VOID ? null : qualifier;
    parameters = parameters === VOID ? null : parameters;
    return $super === VOID ? this.get_ocvqe2_k$(clazz, qualifier, parameters) : $super.get_ocvqe2_k$.call(this, clazz, qualifier, parameters);
  };
  protoOf(Scope).getKoin_18vqwx_k$ = function () {
    return this._koin_1;
  };
  protoOf(Scope).getScope_gk9t7n_k$ = function (scopeID) {
    return this.getKoin_18vqwx_k$().getScope_gk9t7n_k$(scopeID);
  };
  protoOf(Scope).registerCallback_afgz6r_k$ = function (callback) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this._callbacks_1;
    tmp0_plusAssign.add_1j60pz_k$(callback);
  };
  protoOf(Scope).getAll_bcjfbj_k$ = function (clazz) {
    var context = new InstanceContext(this._koin_1.get_logger_g9gejd_k$(), this);
    var tmp = this._koin_1.get_instanceRegistry_jmeu6d_k$().getAll_w2pul7_k$(clazz, context);
    var tmp$ret$2;
    // Inline function 'kotlin.collections.flatMap' call
    var tmp1_flatMap = this.linkedScopes_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.flatMapTo' call
    var tmp0_flatMapTo = ArrayList_init_$Create$();
    var tmp0_iterator = tmp1_flatMap.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'org.koin.core.scope.Scope.getAll.<anonymous>' call
      tmp$ret$0 = element.getAll_bcjfbj_k$(clazz);
      var list = tmp$ret$0;
      addAll_0(tmp0_flatMapTo, list);
    }
    tmp$ret$1 = tmp0_flatMapTo;
    tmp$ret$2 = tmp$ret$1;
    return plus(tmp, tmp$ret$2);
  };
  protoOf(Scope).getProperty_n7ug6a_k$ = function (key, defaultValue) {
    return this._koin_1.getProperty_n7ug6a_k$(key, defaultValue);
  };
  protoOf(Scope).getPropertyOrNull_ynzecz_k$ = function (key) {
    return this._koin_1.getProperty_gwh1jd_k$(key);
  };
  protoOf(Scope).getProperty_gwh1jd_k$ = function (key) {
    var tmp0_elvis_lhs = this._koin_1.getProperty_gwh1jd_k$(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new MissingPropertyException("Property '" + key + "' not found");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(Scope).close_ymq55z_k$ = function () {
    var tmp = KoinPlatformTools_getInstance();
    return tmp.synchronized_5h0e7m_k$(this, Scope$close$lambda(this));
  };
  protoOf(Scope).toString = function () {
    return "['" + this.id_1 + "']";
  };
  protoOf(Scope).component1_7eebsc_k$ = function () {
    return this.scopeQualifier_1;
  };
  protoOf(Scope).component2_7eebsb_k$ = function () {
    return this.id_1;
  };
  protoOf(Scope).component3_7eebsa_k$ = function () {
    return this.isRoot_1;
  };
  protoOf(Scope).component4_7eebs9_k$ = function () {
    return this._koin_1;
  };
  protoOf(Scope).copy_k0w8jt_k$ = function (scopeQualifier, id, isRoot, _koin) {
    return new Scope(scopeQualifier, id, isRoot, _koin);
  };
  protoOf(Scope).copy$default_mrpe7e_k$ = function (scopeQualifier, id, isRoot, _koin, $super) {
    scopeQualifier = scopeQualifier === VOID ? this.scopeQualifier_1 : scopeQualifier;
    id = id === VOID ? this.id_1 : id;
    isRoot = isRoot === VOID ? this.isRoot_1 : isRoot;
    _koin = _koin === VOID ? this._koin_1 : _koin;
    return $super === VOID ? this.copy_k0w8jt_k$(scopeQualifier, id, isRoot, _koin) : $super.copy_k0w8jt_k$.call(this, scopeQualifier, id, isRoot, _koin);
  };
  protoOf(Scope).hashCode = function () {
    var result = hashCode(this.scopeQualifier_1);
    result = imul(result, 31) + getStringHashCode(this.id_1) | 0;
    result = imul(result, 31) + (this.isRoot_1 | 0) | 0;
    result = imul(result, 31) + hashCode(this._koin_1) | 0;
    return result;
  };
  protoOf(Scope).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Scope))
      return false;
    var tmp0_other_with_cast = other instanceof Scope ? other : THROW_CCE();
    if (!equals(this.scopeQualifier_1, tmp0_other_with_cast.scopeQualifier_1))
      return false;
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.isRoot_1 === tmp0_other_with_cast.isRoot_1))
      return false;
    if (!equals(this._koin_1, tmp0_other_with_cast._koin_1))
      return false;
    return true;
  };
  function ScopeCallback() {
  }
  function measureDuration(code) {
    var tmp$ret$1;
    // Inline function 'org.koin.core.time.measureTimedValue' call
    var start = KoinPlatformTimeTools_getInstance().getTimeInNanoSeconds_rsnqv1_k$();
    var value = code();
    var stop = KoinPlatformTimeTools_getInstance().getTimeInNanoSeconds_rsnqv1_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.Long.div' call
    var tmp0_div = stop.minus_llf5ei_k$(start);
    var tmp1_div = Companion_getInstance_4().get_NANO_TO_MILLI_vas3xn_k$();
    tmp$ret$0 = tmp0_div.toDouble_ygsx0s_k$() / tmp1_div;
    tmp$ret$1 = new Pair(Unit_getInstance(), tmp$ret$0);
    return tmp$ret$1.get_second_jf7fjx_k$();
  }
  function measureTimedValue(code) {
    var start = KoinPlatformTimeTools_getInstance().getTimeInNanoSeconds_rsnqv1_k$();
    var value = code();
    var stop = KoinPlatformTimeTools_getInstance().getTimeInNanoSeconds_rsnqv1_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.Long.div' call
    var tmp0_div = stop.minus_llf5ei_k$(start);
    var tmp1_div = Companion_getInstance_4().get_NANO_TO_MILLI_vas3xn_k$();
    tmp$ret$0 = tmp0_div.toDouble_ygsx0s_k$() / tmp1_div;
    return new Pair(value, tmp$ret$0);
  }
  function _set_end__4w58cq($this, _set____db54di) {
    $this.end_1 = _set____db54di;
  }
  function _set_time__9ug0mi($this, _set____db54di) {
    $this.time_1 = _set____db54di;
  }
  function _get_time__de807y($this) {
    return $this.time_1;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.NANO_TO_MILLI_1 = 1000000.0;
  }
  protoOf(Companion_3).get_NANO_TO_MILLI_vas3xn_k$ = function () {
    return this.NANO_TO_MILLI_1;
  };
  protoOf(Companion_3).start_1tchgi_k$ = function () {
    return new Timer();
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Timer() {
    Companion_getInstance_4();
    this.start_1 = toDuration(KoinPlatformTimeTools_getInstance().getTimeInNanoSeconds_rsnqv1_k$(), DurationUnit_NANOSECONDS_getInstance());
    this.end_1 = Companion_getInstance().get_ZERO_jbbt8n_k$();
    this.time_1 = Companion_getInstance().get_ZERO_jbbt8n_k$();
  }
  protoOf(Timer).get_start_qung27_k$ = function () {
    return this.start_1;
  };
  protoOf(Timer).get_end_mptdy0_k$ = function () {
    return this.end_1;
  };
  protoOf(Timer).stop_pnanjl_k$ = function () {
    if (equals(this.end_1, Companion_getInstance().get_ZERO_jbbt8n_k$())) {
      this.end_1 = toDuration(KoinPlatformTimeTools_getInstance().getTimeInNanoSeconds_rsnqv1_k$(), DurationUnit_NANOSECONDS_getInstance());
      this.time_1 = Duration__minus_impl_q5cfm7(this.end_1, this.start_1);
    }
  };
  protoOf(Timer).getTimeInSeconds_yztox5_k$ = function () {
    return Duration__toDouble_impl_a56y2b(this.time_1, DurationUnit_SECONDS_getInstance());
  };
  protoOf(Timer).getTimeInMillis_nlapf2_k$ = function () {
    return Duration__toDouble_impl_a56y2b(this.time_1, DurationUnit_MILLISECONDS_getInstance());
  };
  protoOf(Timer).getTimeInNanos_wumpnb_k$ = function () {
    return Duration__toDouble_impl_a56y2b(this.time_1, DurationUnit_NANOSECONDS_getInstance());
  };
  function ScopeDSL(scopeQualifier, module_0) {
    this.scopeQualifier_1 = scopeQualifier;
    this.module_1 = module_0;
  }
  protoOf(ScopeDSL).get_scopeQualifier_eby6kf_k$ = function () {
    return this.scopeQualifier_1;
  };
  protoOf(ScopeDSL).get_module_gqgeid_k$ = function () {
    return this.module_1;
  };
  function get_classNames() {
    _init_properties_KClassExt_kt__5ro5b2();
    return classNames;
  }
  var classNames;
  function getFullName(_this__u8e3s4) {
    _init_properties_KClassExt_kt__5ro5b2();
    var tmp0_elvis_lhs = get_classNames().get_1mhr4y_k$(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? saveCache(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function saveCache(_this__u8e3s4) {
    _init_properties_KClassExt_kt__5ro5b2();
    var name = KoinPlatformTools_getInstance().getClassName_lv7ybb_k$(_this__u8e3s4);
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = get_classNames();
    tmp0_set.put_3mhbri_k$(_this__u8e3s4, name);
    return name;
  }
  var properties_initialized_KClassExt_kt_dizwhw;
  function _init_properties_KClassExt_kt__5ro5b2() {
    if (properties_initialized_KClassExt_kt_dizwhw) {
    } else {
      properties_initialized_KClassExt_kt_dizwhw = true;
      classNames = KoinPlatformTools_getInstance().safeHashMap_vw883b_k$();
    }
  }
  function _set__koin__b6j8il($this, _set____db54di) {
    $this._koin_1 = _set____db54di;
  }
  function _get__koin__kul7yv_0($this) {
    return $this._koin_1;
  }
  function register($this, koinApplication) {
    if (!($this._koin_1 == null)) {
      throw new KoinAppAlreadyStartedException('A Koin Application has already been started');
    }
    $this._koin_1 = koinApplication.get_koin_wopbyq_k$();
  }
  function GlobalContext() {
    GlobalContext_instance = this;
    this._koin_1 = null;
  }
  protoOf(GlobalContext).get_26vq_k$ = function () {
    var tmp0_elvis_lhs = this._koin_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('KoinApplication has not been started');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(GlobalContext).getOrNull_bcsbgg_k$ = function () {
    return this._koin_1;
  };
  protoOf(GlobalContext).stopKoin_tx9yna_k$ = function () {
    var tmp0_safe_receiver = this._koin_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.close_ymq55z_k$();
    }
    this._koin_1 = null;
  };
  protoOf(GlobalContext).startKoin_8ozxgf_k$ = function (koinApplication) {
    register(this, koinApplication);
    return koinApplication;
  };
  protoOf(GlobalContext).startKoin_yxprxe_k$ = function (appDeclaration) {
    var koinApplication = Companion_getInstance_0().init_1xdsg_k$();
    register(this, koinApplication);
    appDeclaration(koinApplication);
    return koinApplication;
  };
  protoOf(GlobalContext).loadKoinModules_acl9k2_k$ = function (module_0) {
    this.get_26vq_k$().loadModules$default_hae98_k$(listOf(module_0));
  };
  protoOf(GlobalContext).loadKoinModules_rr41ua_k$ = function (modules) {
    this.get_26vq_k$().loadModules$default_hae98_k$(modules);
  };
  protoOf(GlobalContext).unloadKoinModules_3oxx93_k$ = function (module_0) {
    this.get_26vq_k$().unloadModules_rmaqm6_k$(listOf(module_0));
  };
  protoOf(GlobalContext).unloadKoinModules_hag4mj_k$ = function (modules) {
    this.get_26vq_k$().unloadModules_rmaqm6_k$(modules);
  };
  var GlobalContext_instance;
  function GlobalContext_getInstance() {
    if (GlobalContext_instance == null)
      new GlobalContext();
    return GlobalContext_instance;
  }
  function PrintLogger(level) {
    level = level === VOID ? Level_INFO_getInstance() : level;
    Logger.call(this, level);
  }
  protoOf(PrintLogger).display_ojtox1_k$ = function (level, msg) {
    println('[' + level + '] ' + get_KOIN_TAG() + ' ' + msg);
  };
  function TimeSource() {
  }
  function getTimeSource() {
    var tmp = typeof process !== 'undefined' && process.versions && !!process.versions.node;
    var isNode = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
    var tmp_0;
    if (isNode) {
      tmp_0 = new NodeJsHrTimeSource();
    } else {
      var tmp_1 = self.performance && !!self.performance.now;
      var isPerformanceNowSupported = (!(tmp_1 == null) ? typeof tmp_1 === 'boolean' : false) ? tmp_1 : THROW_CCE();
      var tmp_2;
      if (isPerformanceNowSupported) {
        tmp_2 = new PerformanceNowTimeSource();
      } else {
        tmp_2 = new DateNowTimeSource();
      }
      tmp_0 = tmp_2;
    }
    return tmp_0;
  }
  function NodeJsHrTimeSource() {
  }
  protoOf(NodeJsHrTimeSource).markNow_dvnky1_k$ = function () {
    var tmp = process.hrtime();
    var tmp0_container = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = tmp0_container[0];
    var seconds = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = tmp0_container[1];
    var nanos = tmp$ret$1;
    return roundToLong(seconds * 1000000000 + nanos);
  };
  function PerformanceNowTimeSource() {
  }
  protoOf(PerformanceNowTimeSource).markNow_dvnky1_k$ = function () {
    var tmp = self.performance.now();
    return roundToLong(((!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE()) * 1000000);
  };
  function DateNowTimeSource() {
  }
  protoOf(DateNowTimeSource).markNow_dvnky1_k$ = function () {
    return roundToLong(Date.now() * 1000000);
  };
  function KoinPlatformTimeTools() {
    KoinPlatformTimeTools_instance = this;
  }
  protoOf(KoinPlatformTimeTools).getTimeInNanoSeconds_rsnqv1_k$ = function () {
    return getTimeSource().markNow_dvnky1_k$();
  };
  var KoinPlatformTimeTools_instance;
  function KoinPlatformTimeTools_getInstance() {
    if (KoinPlatformTimeTools_instance == null)
      new KoinPlatformTimeTools();
    return KoinPlatformTimeTools_instance;
  }
  function KoinPlatformTools() {
    KoinPlatformTools_instance = this;
  }
  protoOf(KoinPlatformTools).getStackTrace_hzwm26_k$ = function (e) {
    return e.toString() + split(Exception_init_$Create$().toString(), ['\n']);
  };
  protoOf(KoinPlatformTools).getClassName_lv7ybb_k$ = function (kClass) {
    var tmp0_elvis_lhs = kClass.get_simpleName_r6f8py_k$();
    return tmp0_elvis_lhs == null ? 'KClass@' + kClass.hashCode() : tmp0_elvis_lhs;
  };
  protoOf(KoinPlatformTools).generateId_52067k_k$ = function () {
    return getNumberHashCode(Default_getInstance().nextDouble_s2xvfg_k$()).toString();
  };
  protoOf(KoinPlatformTools).defaultLazyMode_cannh4_k$ = function () {
    return LazyThreadSafetyMode_NONE_getInstance();
  };
  protoOf(KoinPlatformTools).defaultLogger_36wu3s_k$ = function (level) {
    return new PrintLogger(level);
  };
  protoOf(KoinPlatformTools).defaultLogger$default_mag1p7_k$ = function (level, $super) {
    level = level === VOID ? Level_INFO_getInstance() : level;
    return $super === VOID ? this.defaultLogger_36wu3s_k$(level) : $super.defaultLogger_36wu3s_k$.call(this, level);
  };
  protoOf(KoinPlatformTools).defaultContext_m5e9ci_k$ = function () {
    return GlobalContext_getInstance();
  };
  protoOf(KoinPlatformTools).synchronized_5h0e7m_k$ = function (lock, block) {
    return block();
  };
  protoOf(KoinPlatformTools).safeHashMap_vw883b_k$ = function () {
    return HashMap_init_$Create$();
  };
  var KoinPlatformTools_instance;
  function KoinPlatformTools_getInstance() {
    if (KoinPlatformTools_instance == null)
      new KoinPlatformTools();
    return KoinPlatformTools_instance;
  }
  //region block: init
  KOIN_TAG = '[Koin]';
  //endregion
  return _;
}));
