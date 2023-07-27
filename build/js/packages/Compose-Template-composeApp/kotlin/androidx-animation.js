(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-animation-core.js', './androidx-ui-graphics.js', './kotlin-kotlin-stdlib-js-ir.js', './androidx-ui-unit.js', './androidx-ui.js', './androidx-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-animation-core.js'), require('./androidx-ui-graphics.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-ui-unit.js'), require('./androidx-ui.js'), require('./androidx-runtime.js'));
  else {
    if (typeof this['androidx-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation'. Its dependency 'androidx-animation-core' was not found. Please, check whether 'androidx-animation-core' is loaded prior to 'androidx-animation'.");
    }
    if (typeof this['androidx-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation'. Its dependency 'androidx-ui-graphics' was not found. Please, check whether 'androidx-ui-graphics' is loaded prior to 'androidx-animation'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-animation'.");
    }
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'androidx-animation'.");
    }
    if (typeof this['androidx-ui'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation'. Its dependency 'androidx-ui' was not found. Please, check whether 'androidx-ui' is loaded prior to 'androidx-animation'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'androidx-animation'.");
    }
    root['androidx-animation'] = factory(typeof this['androidx-animation'] === 'undefined' ? {} : this['androidx-animation'], this['androidx-animation-core'], this['androidx-ui-graphics'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-ui-unit'], this['androidx-ui'], this['androidx-runtime']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sign = Math.sign;
  var TwoWayConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.n;
  var ColorSpaces_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k3;
  var Color__convert_impl_so5m8t = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o2;
  var _Color___get_red__impl__cwrsk6 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r2;
  var _Color___get_green__impl__bta9rs = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p2;
  var _Color___get_blue__impl__xwez13 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m2;
  var Unit_getInstance = kotlin_kotlin.$_$.k6;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l2;
  var AnimationVector4D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.f;
  var coerceIn = kotlin_kotlin.$_$.ng;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k;
  var protoOf = kotlin_kotlin.$_$.mf;
  var THROW_CCE = kotlin_kotlin.$_$.sk;
  var Annotation = kotlin_kotlin.$_$.xj;
  var classMeta = kotlin_kotlin.$_$.zd;
  var VOID = kotlin_kotlin.$_$.jm;
  var setMetadataFor = kotlin_kotlin.$_$.nf;
  var objectMeta = kotlin_kotlin.$_$.lf;
  var Spring_getInstance = kotlin_org_jetbrains_compose_animation_animation_core.$_$.l1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s3;
  var get_VisibilityThreshold = kotlin_org_jetbrains_compose_animation_animation_core.$_$.t;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.e1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.x6;
  var equals = kotlin_kotlin.$_$.de;
  var getNumberHashCode = kotlin_kotlin.$_$.ie;
  var hashCode = kotlin_kotlin.$_$.me;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x;
  var TransformOrigin = kotlin_org_jetbrains_compose_ui_ui.$_$.o;
  var TransformOrigin__hashCode_impl_pmqpcw = kotlin_org_jetbrains_compose_ui_ui.$_$.c6;
  var _TransformOrigin___get_pivotFractionX__impl__a9pmci = kotlin_org_jetbrains_compose_ui_ui.$_$.d6;
  var _TransformOrigin___get_pivotFractionY__impl__ijwupp = kotlin_org_jetbrains_compose_ui_ui.$_$.e6;
  var AnimationVector2D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.e;
  var TransformOrigin_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.n;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u2;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q3;
  var get_VisibilityThreshold_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.s;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w;
  var Long = kotlin_kotlin.$_$.kk;
  var toString = kotlin_kotlin.$_$.rf;
  var numberToLong = kotlin_kotlin.$_$.jf;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var _Color___get_colorSpace__impl__jqqozk = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n2;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p3;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j2;
  var isObject = kotlin_kotlin.$_$.ze;
  var animateValueAsState$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.x;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var numberToInt = kotlin_kotlin.$_$.if;
  var FloatDecayAnimationSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.j;
  var createTransitionAnimation$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.z;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.u3;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var generateDecayAnimationSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ExperimentalAnimationApi, 'ExperimentalAnimationApi', classMeta, VOID, [Annotation]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(ExitTransition, 'ExitTransition', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(EnterTransition, 'EnterTransition', classMeta);
  setMetadataFor(TransitionData, 'TransitionData', classMeta);
  setMetadataFor(ExitTransitionImpl, 'ExitTransitionImpl', classMeta, ExitTransition);
  setMetadataFor(Fade, 'Fade', classMeta);
  setMetadataFor(Slide, 'Slide', classMeta);
  setMetadataFor(ChangeSize, 'ChangeSize', classMeta);
  setMetadataFor(Scale, 'Scale', classMeta);
  setMetadataFor(EnterTransitionImpl, 'EnterTransitionImpl', classMeta, EnterTransition);
  setMetadataFor(FlingInfo, 'FlingInfo', classMeta);
  setMetadataFor(FlingCalculator, 'FlingCalculator', classMeta);
  setMetadataFor(FlingResult, 'FlingResult', classMeta);
  setMetadataFor(AndroidFlingSpline, 'AndroidFlingSpline', objectMeta);
  setMetadataFor(SplineBasedFloatDecayAnimationSpec, 'SplineBasedFloatDecayAnimationSpec', classMeta, VOID, [FloatDecayAnimationSpec]);
  //endregion
  function get_ColorToVector() {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return ColorToVector;
  }
  var ColorToVector;
  function get_M1() {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return M1;
  }
  var M1;
  function get_InverseM1() {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return InverseM1;
  }
  var InverseM1;
  function multiplyColumn(column, x, y, z, matrix) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return x * matrix[column] + y * matrix[3 + column | 0] + z * matrix[6 + column | 0];
  }
  function get_VectorConverter(_this__u8e3s4) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return get_ColorToVector();
  }
  function ColorToVector$lambda(colorSpace) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    var tmp = ColorToVector$lambda$lambda;
    return TwoWayConverter(tmp, ColorToVector$lambda$lambda_0(colorSpace));
  }
  function ColorToVector$lambda$lambda(color) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    var colorXyz = Color__convert_impl_so5m8t(color.value_1, ColorSpaces_getInstance().get_CieXyz_38qfst_k$());
    var x = _Color___get_red__impl__cwrsk6(colorXyz);
    var y = _Color___get_green__impl__bta9rs(colorXyz);
    var z = _Color___get_blue__impl__xwez13(colorXyz);
    var tmp$ret$0;
    // Inline function 'kotlin.math.pow' call
    var tmp0_pow = multiplyColumn(0, x, y, z, get_M1());
    var tmp1_pow = 1.0 / 3.0;
    tmp$ret$0 = Math.pow(tmp0_pow, tmp1_pow);
    var l = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.pow' call
    var tmp2_pow = multiplyColumn(1, x, y, z, get_M1());
    var tmp3_pow = 1.0 / 3.0;
    tmp$ret$1 = Math.pow(tmp2_pow, tmp3_pow);
    var a = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.math.pow' call
    var tmp4_pow = multiplyColumn(2, x, y, z, get_M1());
    var tmp5_pow = 1.0 / 3.0;
    tmp$ret$2 = Math.pow(tmp4_pow, tmp5_pow);
    var b = tmp$ret$2;
    return new AnimationVector4D(_Color___get_alpha__impl__wcfyv1(color.value_1), l, a, b);
  }
  function ColorToVector$lambda$lambda_0($colorSpace) {
    return function (it) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = it.get_v2_kntnnf_k$();
      tmp$ret$0 = Math.pow(tmp0_pow, 3.0);
      var l = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.math.pow' call
      var tmp1_pow = it.get_v3_kntnne_k$();
      tmp$ret$1 = Math.pow(tmp1_pow, 3.0);
      var a = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.math.pow' call
      var tmp2_pow = it.get_v4_kntnnd_k$();
      tmp$ret$2 = Math.pow(tmp2_pow, 3.0);
      var b = tmp$ret$2;
      var x = multiplyColumn(0, l, a, b, get_InverseM1());
      var y = multiplyColumn(1, l, a, b, get_InverseM1());
      var z = multiplyColumn(2, l, a, b, get_InverseM1());
      var tmp0_alpha = coerceIn(it.get_v1_kntnng_k$(), 0.0, 1.0);
      var tmp1_red = coerceIn(x, -2.0, 2.0);
      var tmp2_green = coerceIn(y, -2.0, 2.0);
      var tmp3_blue = coerceIn(z, -2.0, 2.0);
      var tmp4_colorSpace = ColorSpaces_getInstance().get_CieXyz_38qfst_k$();
      var colorXyz = Color(tmp1_red, tmp2_green, tmp3_blue, tmp0_alpha, tmp4_colorSpace);
      return new Color_0(Color__convert_impl_so5m8t(colorXyz, $colorSpace));
    };
  }
  var properties_initialized_ColorVectorConverter_kt_jaoojo;
  function _init_properties_ColorVectorConverter_kt__qncuxy() {
    if (properties_initialized_ColorVectorConverter_kt_jaoojo) {
    } else {
      properties_initialized_ColorVectorConverter_kt_jaoojo = true;
      ColorToVector = ColorToVector$lambda;
      var tmp$ret$0;
      // Inline function 'kotlin.floatArrayOf' call
      tmp$ret$0 = new Float32Array([0.80405736, 0.026893456, 0.04586542, 0.3188387, 0.9319606, 0.26299807, -0.11419419, 0.05105356, 0.83999807]);
      M1 = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.floatArrayOf' call
      tmp$ret$0_0 = new Float32Array([1.2485008, -0.032856926, -0.057883114, -0.48331892, 1.1044513, -0.3194066, 0.19910365, -0.07159331, 1.202023]);
      InverseM1 = tmp$ret$0_0;
    }
  }
  function get_TransformOriginVectorConverter() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return TransformOriginVectorConverter;
  }
  var TransformOriginVectorConverter;
  function get_DefaultAlpha() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultAlpha;
  }
  var DefaultAlpha;
  function get_DefaultAlphaAndScaleSpring() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultAlphaAndScaleSpring;
  }
  var DefaultAlphaAndScaleSpring;
  function get_DefaultOffsetAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultOffsetAnimationSpec;
  }
  var DefaultOffsetAnimationSpec;
  function get_DefaultSizeAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultSizeAnimationSpec;
  }
  var DefaultSizeAnimationSpec;
  function ExperimentalAnimationApi() {
  }
  protoOf(ExperimentalAnimationApi).equals = function (other) {
    if (!(other instanceof ExperimentalAnimationApi))
      return false;
    var tmp0_other_with_cast = other instanceof ExperimentalAnimationApi ? other : THROW_CCE();
    return true;
  };
  protoOf(ExperimentalAnimationApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalAnimationApi).toString = function () {
    return '@androidx.compose.animation.ExperimentalAnimationApi()';
  };
  function Companion() {
    Companion_instance = this;
    this.None_1 = new ExitTransitionImpl(new TransitionData());
  }
  protoOf(Companion).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  var Companion_instance;
  function Companion_getInstance_4() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function get_$stableprop() {
    return 0;
  }
  function ExitTransition() {
    Companion_getInstance_4();
    this.$stable_1 = 0;
  }
  protoOf(ExitTransition).plus_3d7su1_k$ = function (exit) {
    var tmp0_elvis_lhs = this.get_data_wokkxf_k$().fade_1;
    var tmp = tmp0_elvis_lhs == null ? exit.get_data_wokkxf_k$().fade_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = this.get_data_wokkxf_k$().slide_1;
    var tmp_0 = tmp1_elvis_lhs == null ? exit.get_data_wokkxf_k$().slide_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = this.get_data_wokkxf_k$().changeSize_1;
    var tmp_1 = tmp2_elvis_lhs == null ? exit.get_data_wokkxf_k$().changeSize_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = this.get_data_wokkxf_k$().scale_1;
    return new ExitTransitionImpl(new TransitionData(tmp, tmp_0, tmp_1, tmp3_elvis_lhs == null ? exit.get_data_wokkxf_k$().scale_1 : tmp3_elvis_lhs));
  };
  protoOf(ExitTransition).equals = function (other) {
    var tmp;
    if (other instanceof ExitTransition) {
      tmp = other.get_data_wokkxf_k$().equals(this.get_data_wokkxf_k$());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ExitTransition).toString = function () {
    var tmp;
    if (this.equals(Companion_getInstance_4().None_1)) {
      tmp = 'ExitTransition.None';
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.run' call
      var tmp0_run = this.get_data_wokkxf_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.animation.ExitTransition.toString.<anonymous>' call
      var tmp3_safe_receiver = tmp0_run.fade_1;
      var tmp_0 = 'ExitTransition: \nFade - ' + (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString()) + ',\nSlide - ';
      var tmp2_safe_receiver = tmp0_run.slide_1;
      var tmp_1 = tmp_0 + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString()) + ',\nShrink - ';
      var tmp1_safe_receiver = tmp0_run.changeSize_1;
      var tmp_2 = tmp_1 + (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString()) + ',\nScale - ';
      var tmp0_safe_receiver = tmp0_run.scale_1;
      tmp$ret$0 = tmp_2 + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString());
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  protoOf(ExitTransition).hashCode = function () {
    return this.get_data_wokkxf_k$().hashCode();
  };
  function shrinkHorizontally(animationSpec, shrinkTowards, clip, targetWidth) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize(get_VisibilityThreshold(Companion_getInstance()))) : animationSpec;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_0().get_End_18ju7i_k$() : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (targetWidth === VOID) {
      tmp = shrinkHorizontally$lambda;
    } else {
      tmp = targetWidth;
    }
    targetWidth = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_0 = toAlignment(shrinkTowards);
    return shrinkOut(animationSpec, tmp_0, clip, shrinkHorizontally$lambda_0(targetWidth));
  }
  function fadeOut(animationSpec, targetAlpha) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$()) : animationSpec;
    targetAlpha = targetAlpha === VOID ? 0.0 : targetAlpha;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(new Fade(targetAlpha, animationSpec)));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.None_1 = new EnterTransitionImpl(new TransitionData());
  }
  protoOf(Companion_0).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_5() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function get_$stableprop_0() {
    return 0;
  }
  function EnterTransition() {
    Companion_getInstance_5();
    this.$stable_1 = 0;
  }
  protoOf(EnterTransition).plus_9f8al5_k$ = function (enter) {
    var tmp0_elvis_lhs = this.get_data_wokkxf_k$().fade_1;
    var tmp = tmp0_elvis_lhs == null ? enter.get_data_wokkxf_k$().fade_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = this.get_data_wokkxf_k$().slide_1;
    var tmp_0 = tmp1_elvis_lhs == null ? enter.get_data_wokkxf_k$().slide_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = this.get_data_wokkxf_k$().changeSize_1;
    var tmp_1 = tmp2_elvis_lhs == null ? enter.get_data_wokkxf_k$().changeSize_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = this.get_data_wokkxf_k$().scale_1;
    return new EnterTransitionImpl(new TransitionData(tmp, tmp_0, tmp_1, tmp3_elvis_lhs == null ? enter.get_data_wokkxf_k$().scale_1 : tmp3_elvis_lhs));
  };
  protoOf(EnterTransition).toString = function () {
    var tmp;
    if (this.equals(Companion_getInstance_5().None_1)) {
      tmp = 'EnterTransition.None';
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.run' call
      var tmp0_run = this.get_data_wokkxf_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.animation.EnterTransition.toString.<anonymous>' call
      var tmp3_safe_receiver = tmp0_run.fade_1;
      var tmp_0 = 'EnterTransition: \nFade - ' + (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString()) + ',\nSlide - ';
      var tmp2_safe_receiver = tmp0_run.slide_1;
      var tmp_1 = tmp_0 + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString()) + ',\nShrink - ';
      var tmp1_safe_receiver = tmp0_run.changeSize_1;
      var tmp_2 = tmp_1 + (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString()) + ',\nScale - ';
      var tmp0_safe_receiver = tmp0_run.scale_1;
      tmp$ret$0 = tmp_2 + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString());
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  protoOf(EnterTransition).equals = function (other) {
    var tmp;
    if (other instanceof EnterTransition) {
      tmp = other.get_data_wokkxf_k$().equals(this.get_data_wokkxf_k$());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EnterTransition).hashCode = function () {
    return this.get_data_wokkxf_k$().hashCode();
  };
  function expandHorizontally(animationSpec, expandFrom, clip, initialWidth) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize(get_VisibilityThreshold(Companion_getInstance()))) : animationSpec;
    expandFrom = expandFrom === VOID ? Companion_getInstance_0().get_End_18ju7i_k$() : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (initialWidth === VOID) {
      tmp = expandHorizontally$lambda;
    } else {
      tmp = initialWidth;
    }
    initialWidth = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_0 = toAlignment(expandFrom);
    return expandIn(animationSpec, tmp_0, clip, expandHorizontally$lambda_0(initialWidth));
  }
  function fadeIn(animationSpec, initialAlpha) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$()) : animationSpec;
    initialAlpha = initialAlpha === VOID ? 0.0 : initialAlpha;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(new Fade(initialAlpha, animationSpec)));
  }
  function TransitionData(fade, slide, changeSize, scale) {
    fade = fade === VOID ? null : fade;
    slide = slide === VOID ? null : slide;
    changeSize = changeSize === VOID ? null : changeSize;
    scale = scale === VOID ? null : scale;
    this.fade_1 = fade;
    this.slide_1 = slide;
    this.changeSize_1 = changeSize;
    this.scale_1 = scale;
  }
  protoOf(TransitionData).get_fade_woluit_k$ = function () {
    return this.fade_1;
  };
  protoOf(TransitionData).get_slide_iykyvc_k$ = function () {
    return this.slide_1;
  };
  protoOf(TransitionData).get_changeSize_fljy3e_k$ = function () {
    return this.changeSize_1;
  };
  protoOf(TransitionData).get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  protoOf(TransitionData).component1_7eebsc_k$ = function () {
    return this.fade_1;
  };
  protoOf(TransitionData).component2_7eebsb_k$ = function () {
    return this.slide_1;
  };
  protoOf(TransitionData).component3_7eebsa_k$ = function () {
    return this.changeSize_1;
  };
  protoOf(TransitionData).component4_7eebs9_k$ = function () {
    return this.scale_1;
  };
  protoOf(TransitionData).copy_zgcw61_k$ = function (fade, slide, changeSize, scale) {
    return new TransitionData(fade, slide, changeSize, scale);
  };
  protoOf(TransitionData).copy$default_rtbj4u_k$ = function (fade, slide, changeSize, scale, $super) {
    fade = fade === VOID ? this.fade_1 : fade;
    slide = slide === VOID ? this.slide_1 : slide;
    changeSize = changeSize === VOID ? this.changeSize_1 : changeSize;
    scale = scale === VOID ? this.scale_1 : scale;
    return $super === VOID ? this.copy_zgcw61_k$(fade, slide, changeSize, scale) : $super.copy_zgcw61_k$.call(this, fade, slide, changeSize, scale);
  };
  protoOf(TransitionData).toString = function () {
    return 'TransitionData(fade=' + this.fade_1 + ', slide=' + this.slide_1 + ', changeSize=' + this.changeSize_1 + ', scale=' + this.scale_1 + ')';
  };
  protoOf(TransitionData).hashCode = function () {
    var result = this.fade_1 == null ? 0 : this.fade_1.hashCode();
    result = imul(result, 31) + (this.slide_1 == null ? 0 : this.slide_1.hashCode()) | 0;
    result = imul(result, 31) + (this.changeSize_1 == null ? 0 : this.changeSize_1.hashCode()) | 0;
    result = imul(result, 31) + (this.scale_1 == null ? 0 : this.scale_1.hashCode()) | 0;
    return result;
  };
  protoOf(TransitionData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransitionData))
      return false;
    var tmp0_other_with_cast = other instanceof TransitionData ? other : THROW_CCE();
    if (!equals(this.fade_1, tmp0_other_with_cast.fade_1))
      return false;
    if (!equals(this.slide_1, tmp0_other_with_cast.slide_1))
      return false;
    if (!equals(this.changeSize_1, tmp0_other_with_cast.changeSize_1))
      return false;
    if (!equals(this.scale_1, tmp0_other_with_cast.scale_1))
      return false;
    return true;
  };
  function ExitTransitionImpl(data) {
    ExitTransition.call(this);
    this.data_1 = data;
  }
  protoOf(ExitTransitionImpl).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  function Fade(alpha, animationSpec) {
    this.alpha_1 = alpha;
    this.animationSpec_1 = animationSpec;
  }
  protoOf(Fade).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  protoOf(Fade).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Fade).component1_7eebsc_k$ = function () {
    return this.alpha_1;
  };
  protoOf(Fade).component2_7eebsb_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Fade).copy_sae5ax_k$ = function (alpha, animationSpec) {
    return new Fade(alpha, animationSpec);
  };
  protoOf(Fade).copy$default_y9588r_k$ = function (alpha, animationSpec, $super) {
    alpha = alpha === VOID ? this.alpha_1 : alpha;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    return $super === VOID ? this.copy_sae5ax_k$(alpha, animationSpec) : $super.copy_sae5ax_k$.call(this, alpha, animationSpec);
  };
  protoOf(Fade).toString = function () {
    return 'Fade(alpha=' + this.alpha_1 + ', animationSpec=' + this.animationSpec_1 + ')';
  };
  protoOf(Fade).hashCode = function () {
    var result = getNumberHashCode(this.alpha_1);
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    return result;
  };
  protoOf(Fade).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Fade))
      return false;
    var tmp0_other_with_cast = other instanceof Fade ? other : THROW_CCE();
    if (!equals(this.alpha_1, tmp0_other_with_cast.alpha_1))
      return false;
    if (!equals(this.animationSpec_1, tmp0_other_with_cast.animationSpec_1))
      return false;
    return true;
  };
  function Slide(slideOffset, animationSpec) {
    this.slideOffset_1 = slideOffset;
    this.animationSpec_1 = animationSpec;
  }
  protoOf(Slide).get_slideOffset_3j6nyd_k$ = function () {
    return this.slideOffset_1;
  };
  protoOf(Slide).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Slide).component1_7eebsc_k$ = function () {
    return this.slideOffset_1;
  };
  protoOf(Slide).component2_7eebsb_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Slide).copy_gp3dbw_k$ = function (slideOffset, animationSpec) {
    return new Slide(slideOffset, animationSpec);
  };
  protoOf(Slide).copy$default_40mtxb_k$ = function (slideOffset, animationSpec, $super) {
    slideOffset = slideOffset === VOID ? this.slideOffset_1 : slideOffset;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    return $super === VOID ? this.copy_gp3dbw_k$(slideOffset, animationSpec) : $super.copy_gp3dbw_k$.call(this, slideOffset, animationSpec);
  };
  protoOf(Slide).toString = function () {
    return 'Slide(slideOffset=' + this.slideOffset_1 + ', animationSpec=' + this.animationSpec_1 + ')';
  };
  protoOf(Slide).hashCode = function () {
    var result = hashCode(this.slideOffset_1);
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    return result;
  };
  protoOf(Slide).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Slide))
      return false;
    var tmp0_other_with_cast = other instanceof Slide ? other : THROW_CCE();
    if (!equals(this.slideOffset_1, tmp0_other_with_cast.slideOffset_1))
      return false;
    if (!equals(this.animationSpec_1, tmp0_other_with_cast.animationSpec_1))
      return false;
    return true;
  };
  function ChangeSize$_init_$lambda_705jnq(it) {
    return new IntSize(IntSize_0(0, 0));
  }
  function ChangeSize(alignment, size, animationSpec, clip) {
    var tmp;
    if (size === VOID) {
      tmp = ChangeSize$_init_$lambda_705jnq;
    } else {
      tmp = size;
    }
    size = tmp;
    clip = clip === VOID ? true : clip;
    this.alignment_1 = alignment;
    this.size_1 = size;
    this.animationSpec_1 = animationSpec;
    this.clip_1 = clip;
  }
  protoOf(ChangeSize).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(ChangeSize).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(ChangeSize).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(ChangeSize).get_clip_wok5uh_k$ = function () {
    return this.clip_1;
  };
  protoOf(ChangeSize).component1_7eebsc_k$ = function () {
    return this.alignment_1;
  };
  protoOf(ChangeSize).component2_7eebsb_k$ = function () {
    return this.size_1;
  };
  protoOf(ChangeSize).component3_7eebsa_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(ChangeSize).component4_7eebs9_k$ = function () {
    return this.clip_1;
  };
  protoOf(ChangeSize).copy_c1dznr_k$ = function (alignment, size, animationSpec, clip) {
    return new ChangeSize(alignment, size, animationSpec, clip);
  };
  protoOf(ChangeSize).copy$default_gegaug_k$ = function (alignment, size, animationSpec, clip, $super) {
    alignment = alignment === VOID ? this.alignment_1 : alignment;
    size = size === VOID ? this.size_1 : size;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    clip = clip === VOID ? this.clip_1 : clip;
    return $super === VOID ? this.copy_c1dznr_k$(alignment, size, animationSpec, clip) : $super.copy_c1dznr_k$.call(this, alignment, size, animationSpec, clip);
  };
  protoOf(ChangeSize).toString = function () {
    return 'ChangeSize(alignment=' + this.alignment_1 + ', size=' + this.size_1 + ', animationSpec=' + this.animationSpec_1 + ', clip=' + this.clip_1 + ')';
  };
  protoOf(ChangeSize).hashCode = function () {
    var result = hashCode(this.alignment_1);
    result = imul(result, 31) + hashCode(this.size_1) | 0;
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    result = imul(result, 31) + (this.clip_1 | 0) | 0;
    return result;
  };
  protoOf(ChangeSize).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChangeSize))
      return false;
    var tmp0_other_with_cast = other instanceof ChangeSize ? other : THROW_CCE();
    if (!equals(this.alignment_1, tmp0_other_with_cast.alignment_1))
      return false;
    if (!equals(this.size_1, tmp0_other_with_cast.size_1))
      return false;
    if (!equals(this.animationSpec_1, tmp0_other_with_cast.animationSpec_1))
      return false;
    if (!(this.clip_1 === tmp0_other_with_cast.clip_1))
      return false;
    return true;
  };
  function Scale(scale, transformOrigin, animationSpec) {
    this.scale_1 = scale;
    this.transformOrigin_1 = transformOrigin;
    this.animationSpec_1 = animationSpec;
  }
  protoOf(Scale).get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  protoOf(Scale).get_transformOrigin_q3dmip_k$ = function () {
    return this.transformOrigin_1;
  };
  protoOf(Scale).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Scale).component1_7eebsc_k$ = function () {
    return this.scale_1;
  };
  protoOf(Scale).component2_dvu46t_k$ = function () {
    return this.transformOrigin_1;
  };
  protoOf(Scale).component3_7eebsa_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Scale).copy_x7tq9e_k$ = function (scale, transformOrigin, animationSpec) {
    return new Scale(scale, transformOrigin, animationSpec);
  };
  protoOf(Scale).copy$default_unhhwl_k$ = function (scale, transformOrigin, animationSpec, $super) {
    scale = scale === VOID ? this.scale_1 : scale;
    transformOrigin = transformOrigin === VOID ? this.transformOrigin_1 : transformOrigin;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    return $super === VOID ? this.copy_x7tq9e_k$(scale, transformOrigin, animationSpec) : $super.copy_x7tq9e_k$.call(this, scale, new TransformOrigin(transformOrigin), animationSpec);
  };
  protoOf(Scale).toString = function () {
    return 'Scale(scale=' + this.scale_1 + ', transformOrigin=' + new TransformOrigin(this.transformOrigin_1) + ', animationSpec=' + this.animationSpec_1 + ')';
  };
  protoOf(Scale).hashCode = function () {
    var result = getNumberHashCode(this.scale_1);
    result = imul(result, 31) + TransformOrigin__hashCode_impl_pmqpcw(this.transformOrigin_1) | 0;
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    return result;
  };
  protoOf(Scale).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Scale))
      return false;
    var tmp0_other_with_cast = other instanceof Scale ? other : THROW_CCE();
    if (!equals(this.scale_1, tmp0_other_with_cast.scale_1))
      return false;
    if (!equals(this.transformOrigin_1, tmp0_other_with_cast.transformOrigin_1))
      return false;
    if (!equals(this.animationSpec_1, tmp0_other_with_cast.animationSpec_1))
      return false;
    return true;
  };
  function shrinkOut(animationSpec, shrinkTowards, clip, targetSize) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize(get_VisibilityThreshold(Companion_getInstance()))) : animationSpec;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_0().get_BottomEnd_ayz0tj_k$() : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (targetSize === VOID) {
      tmp = shrinkOut$lambda;
    } else {
      tmp = targetSize;
    }
    targetSize = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(VOID, VOID, new ChangeSize(shrinkTowards, targetSize, animationSpec, clip)));
  }
  function toAlignment(_this__u8e3s4) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp0_subject = _this__u8e3s4;
    return equals(tmp0_subject, Companion_getInstance_0().get_Start_ih4i6x_k$()) ? Companion_getInstance_0().get_CenterStart_2305fg_k$() : equals(tmp0_subject, Companion_getInstance_0().get_End_18ju7i_k$()) ? Companion_getInstance_0().get_CenterEnd_uti4xp_k$() : Companion_getInstance_0().get_Center_3arb0i_k$();
  }
  function EnterTransitionImpl(data) {
    EnterTransition.call(this);
    this.data_1 = data;
  }
  protoOf(EnterTransitionImpl).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  function expandIn(animationSpec, expandFrom, clip, initialSize) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize(get_VisibilityThreshold(Companion_getInstance()))) : animationSpec;
    expandFrom = expandFrom === VOID ? Companion_getInstance_0().get_BottomEnd_ayz0tj_k$() : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (initialSize === VOID) {
      tmp = expandIn$lambda;
    } else {
      tmp = initialSize;
    }
    initialSize = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(VOID, VOID, new ChangeSize(expandFrom, initialSize, animationSpec, clip)));
  }
  function TransformOriginVectorConverter$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new AnimationVector2D(_TransformOrigin___get_pivotFractionX__impl__a9pmci(it.packedValue_1), _TransformOrigin___get_pivotFractionY__impl__ijwupp(it.packedValue_1));
  }
  function TransformOriginVectorConverter$lambda_0(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new TransformOrigin(TransformOrigin_0(it.get_v1_kntnng_k$(), it.get_v2_kntnnf_k$()));
  }
  function shrinkHorizontally$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function shrinkHorizontally$lambda_0($targetWidth) {
    return function (it) {
      return new IntSize(IntSize_0($targetWidth(_IntSize___get_width__impl__d9yl4o(it.packedValue_1)), _IntSize___get_height__impl__prv63b(it.packedValue_1)));
    };
  }
  function expandHorizontally$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function expandHorizontally$lambda_0($initialWidth) {
    return function (it) {
      return new IntSize(IntSize_0($initialWidth(_IntSize___get_width__impl__d9yl4o(it.packedValue_1)), _IntSize___get_height__impl__prv63b(it.packedValue_1)));
    };
  }
  function shrinkOut$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new IntSize(IntSize_0(0, 0));
  }
  function expandIn$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new IntSize(IntSize_0(0, 0));
  }
  var properties_initialized_EnterExitTransition_kt_te1nvp;
  function _init_properties_EnterExitTransition_kt__2obrqf() {
    if (properties_initialized_EnterExitTransition_kt_te1nvp) {
    } else {
      properties_initialized_EnterExitTransition_kt_te1nvp = true;
      var tmp = TransformOriginVectorConverter$lambda;
      TransformOriginVectorConverter = TwoWayConverter(tmp, TransformOriginVectorConverter$lambda_0);
      DefaultAlpha = mutableStateOf(1.0);
      DefaultAlphaAndScaleSpring = spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$());
      DefaultOffsetAnimationSpec = spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntOffset(get_VisibilityThreshold_0(Companion_getInstance_1())));
      DefaultSizeAnimationSpec = spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize(get_VisibilityThreshold(Companion_getInstance())));
    }
  }
  function get_DecelerationRate() {
    _init_properties_FlingCalculator_kt__ornu7o();
    return DecelerationRate;
  }
  var DecelerationRate;
  function get_$stableprop_1() {
    return 0;
  }
  function _get_friction__4dx5ox($this) {
    return $this.friction_1;
  }
  function _get_magicPhysicalCoefficient__7ixkai($this) {
    return $this.magicPhysicalCoefficient_1;
  }
  function computeDeceleration($this, density) {
    return computeDeceleration_0(0.84, density.get_density_qy0267_k$());
  }
  function getSplineDeceleration($this, velocity) {
    return AndroidFlingSpline_getInstance().deceleration_b9qzl_k$(velocity, $this.friction_1 * $this.magicPhysicalCoefficient_1);
  }
  function FlingInfo(initialVelocity, distance, duration) {
    this.initialVelocity_1 = initialVelocity;
    this.distance_1 = distance;
    this.duration_1 = duration;
    this.$stable_1 = 0;
  }
  protoOf(FlingInfo).get_initialVelocity_xnobx4_k$ = function () {
    return this.initialVelocity_1;
  };
  protoOf(FlingInfo).get_distance_r171oi_k$ = function () {
    return this.distance_1;
  };
  protoOf(FlingInfo).get_duration_6a6kpp_k$ = function () {
    return this.duration_1;
  };
  protoOf(FlingInfo).position_axeral_k$ = function (time) {
    var tmp;
    if (this.duration_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = this.duration_1.toFloat_jhbgwv_k$();
      tmp$ret$0 = time.toFloat_jhbgwv_k$() / tmp0_div;
      tmp = tmp$ret$0;
    } else {
      tmp = 1.0;
    }
    var splinePos = tmp;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sign' call
    var tmp1_sign = this.initialVelocity_1;
    tmp$ret$1 = sign(tmp1_sign);
    return this.distance_1 * tmp$ret$1 * AndroidFlingSpline_getInstance().flingPosition_xrffyv_k$(splinePos).get_distanceCoefficient_3vhbop_k$();
  };
  protoOf(FlingInfo).velocity_v2xlvr_k$ = function (time) {
    var tmp;
    if (this.duration_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = this.duration_1.toFloat_jhbgwv_k$();
      tmp$ret$0 = time.toFloat_jhbgwv_k$() / tmp0_div;
      tmp = tmp$ret$0;
    } else {
      tmp = 1.0;
    }
    var splinePos = tmp;
    var tmp_0 = AndroidFlingSpline_getInstance().flingPosition_xrffyv_k$(splinePos).get_velocityCoefficient_w8qjlb_k$();
    var tmp$ret$1;
    // Inline function 'kotlin.math.sign' call
    var tmp1_sign = this.initialVelocity_1;
    tmp$ret$1 = sign(tmp1_sign);
    return tmp_0 * tmp$ret$1 * this.distance_1 / this.duration_1.toFloat_jhbgwv_k$() * 1000.0;
  };
  protoOf(FlingInfo).component1_7eebsc_k$ = function () {
    return this.initialVelocity_1;
  };
  protoOf(FlingInfo).component2_7eebsb_k$ = function () {
    return this.distance_1;
  };
  protoOf(FlingInfo).component3_7eebsa_k$ = function () {
    return this.duration_1;
  };
  protoOf(FlingInfo).copy_qho10f_k$ = function (initialVelocity, distance, duration) {
    return new FlingInfo(initialVelocity, distance, duration);
  };
  protoOf(FlingInfo).copy$default_wl6v6_k$ = function (initialVelocity, distance, duration, $super) {
    initialVelocity = initialVelocity === VOID ? this.initialVelocity_1 : initialVelocity;
    distance = distance === VOID ? this.distance_1 : distance;
    duration = duration === VOID ? this.duration_1 : duration;
    return $super === VOID ? this.copy_qho10f_k$(initialVelocity, distance, duration) : $super.copy_qho10f_k$.call(this, initialVelocity, distance, duration);
  };
  protoOf(FlingInfo).toString = function () {
    return 'FlingInfo(initialVelocity=' + this.initialVelocity_1 + ', distance=' + this.distance_1 + ', duration=' + toString(this.duration_1) + ')';
  };
  protoOf(FlingInfo).hashCode = function () {
    var result = getNumberHashCode(this.initialVelocity_1);
    result = imul(result, 31) + getNumberHashCode(this.distance_1) | 0;
    result = imul(result, 31) + this.duration_1.hashCode() | 0;
    return result;
  };
  protoOf(FlingInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlingInfo))
      return false;
    var tmp0_other_with_cast = other instanceof FlingInfo ? other : THROW_CCE();
    if (!equals(this.initialVelocity_1, tmp0_other_with_cast.initialVelocity_1))
      return false;
    if (!equals(this.distance_1, tmp0_other_with_cast.distance_1))
      return false;
    if (!this.duration_1.equals(tmp0_other_with_cast.duration_1))
      return false;
    return true;
  };
  function FlingCalculator(friction, density) {
    this.friction_1 = friction;
    this.density_1 = density;
    this.magicPhysicalCoefficient_1 = computeDeceleration(this, this.density_1);
  }
  protoOf(FlingCalculator).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(FlingCalculator).flingDuration_tlzcny_k$ = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    var tmp$ret$0;
    // Inline function 'kotlin.math.exp' call
    var tmp0_exp = l / decelMinusOne;
    tmp$ret$0 = Math.exp(tmp0_exp);
    return numberToLong(1000.0 * tmp$ret$0);
  };
  protoOf(FlingCalculator).flingDistance_fh7swt_k$ = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    var tmp = this.friction_1 * this.magicPhysicalCoefficient_1;
    var tmp$ret$0;
    // Inline function 'kotlin.math.exp' call
    var tmp0_exp = get_DecelerationRate() / decelMinusOne * l;
    tmp$ret$0 = Math.exp(tmp0_exp);
    return tmp * tmp$ret$0;
  };
  protoOf(FlingCalculator).flingInfo_gbiih0_k$ = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    var tmp = this.friction_1 * this.magicPhysicalCoefficient_1;
    var tmp$ret$0;
    // Inline function 'kotlin.math.exp' call
    var tmp0_exp = get_DecelerationRate() / decelMinusOne * l;
    tmp$ret$0 = Math.exp(tmp0_exp);
    var tmp_0 = tmp * tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.exp' call
    var tmp1_exp = l / decelMinusOne;
    tmp$ret$1 = Math.exp(tmp1_exp);
    return new FlingInfo(velocity, tmp_0, numberToLong(1000.0 * tmp$ret$1));
  };
  function computeDeceleration_0(friction, density) {
    _init_properties_FlingCalculator_kt__ornu7o();
    return 9.80665 * 39.37 * density * 160.0 * friction;
  }
  function get_InchesPerMeter() {
    return InchesPerMeter;
  }
  var InchesPerMeter;
  function get_GravityEarth() {
    return GravityEarth;
  }
  var GravityEarth;
  var properties_initialized_FlingCalculator_kt_aw7aky;
  function _init_properties_FlingCalculator_kt__ornu7o() {
    if (properties_initialized_FlingCalculator_kt_aw7aky) {
    } else {
      properties_initialized_FlingCalculator_kt_aw7aky = true;
      var tmp$ret$0;
      // Inline function 'kotlin.math.ln' call
      tmp$ret$0 = Math.log(0.78);
      var tmp = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.math.ln' call
      tmp$ret$1 = Math.log(0.9);
      DecelerationRate = tmp / tmp$ret$1;
    }
  }
  function get_colorDefaultSpring() {
    _init_properties_SingleValueAnimation_kt__hxy1sr();
    return colorDefaultSpring;
  }
  var colorDefaultSpring;
  function animateColorAsState$composable(targetValue, animationSpec, label, finishedListener, $composer, $changed, $default) {
    _init_properties_SingleValueAnimation_kt__hxy1sr();
    var animationSpec_0 = animationSpec;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-836854195);
    sourceInformation($composer_0, 'C(animateColorAsState$composable)P(3:c#ui.graphics.Color!1,2)62@2847L96,65@2955L124:SingleValueAnimation.kt#xbi5r1');
    if (!(($default & 2) === 0))
      animationSpec_0 = get_colorDefaultSpring();
    if (!(($default & 4) === 0))
      label_0 = 'ColorAnimation';
    if (!(($default & 8) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-836854195, $changed, -1, 'androidx.compose.animation.animateColorAsState$composable (SingleValueAnimation.kt:56)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = _Color___get_colorSpace__impl__jqqozk(targetValue);
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
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_3().get_Empty_i9b85g_k$()) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.animation.animateColorAsState$composable.<anonymous>' call
      tmp$ret$0 = get_VectorConverter(Companion_getInstance_2())(_Color___get_colorSpace__impl__jqqozk(targetValue));
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
    var converter = tmp$ret$4;
    var tmp_1 = new Color_0(targetValue);
    var tmp_2 = animationSpec_0;
    var tmp0_0 = animateValueAsState$composable(tmp_1, converter, tmp_2, null, label_0, finishedListener_0, $composer_0, 14 & $changed | 896 & $changed << 3 | 57344 & $changed << 6 | 458752 & $changed << 6, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  }
  var properties_initialized_SingleValueAnimation_kt_kqgwkj;
  function _init_properties_SingleValueAnimation_kt__hxy1sr() {
    if (properties_initialized_SingleValueAnimation_kt_kqgwkj) {
    } else {
      properties_initialized_SingleValueAnimation_kt_kqgwkj = true;
      colorDefaultSpring = spring();
    }
  }
  function get_$stableprop_2() {
    return 0;
  }
  function _get_NbSamples__pl9lcs($this) {
    return $this.NbSamples_1;
  }
  function _get_SplinePositions__4lf5u0($this) {
    return $this.SplinePositions_1;
  }
  function _get_SplineTimes__1bv5pg($this) {
    return $this.SplineTimes_1;
  }
  function FlingResult(distanceCoefficient, velocityCoefficient) {
    this.distanceCoefficient_1 = distanceCoefficient;
    this.velocityCoefficient_1 = velocityCoefficient;
    this.$stable_1 = 0;
  }
  protoOf(FlingResult).get_distanceCoefficient_3vhbop_k$ = function () {
    return this.distanceCoefficient_1;
  };
  protoOf(FlingResult).get_velocityCoefficient_w8qjlb_k$ = function () {
    return this.velocityCoefficient_1;
  };
  protoOf(FlingResult).component1_7eebsc_k$ = function () {
    return this.distanceCoefficient_1;
  };
  protoOf(FlingResult).component2_7eebsb_k$ = function () {
    return this.velocityCoefficient_1;
  };
  protoOf(FlingResult).copy_138fzp_k$ = function (distanceCoefficient, velocityCoefficient) {
    return new FlingResult(distanceCoefficient, velocityCoefficient);
  };
  protoOf(FlingResult).copy$default_6em5l2_k$ = function (distanceCoefficient, velocityCoefficient, $super) {
    distanceCoefficient = distanceCoefficient === VOID ? this.distanceCoefficient_1 : distanceCoefficient;
    velocityCoefficient = velocityCoefficient === VOID ? this.velocityCoefficient_1 : velocityCoefficient;
    return $super === VOID ? this.copy_138fzp_k$(distanceCoefficient, velocityCoefficient) : $super.copy_138fzp_k$.call(this, distanceCoefficient, velocityCoefficient);
  };
  protoOf(FlingResult).toString = function () {
    return 'FlingResult(distanceCoefficient=' + this.distanceCoefficient_1 + ', velocityCoefficient=' + this.velocityCoefficient_1 + ')';
  };
  protoOf(FlingResult).hashCode = function () {
    var result = getNumberHashCode(this.distanceCoefficient_1);
    result = imul(result, 31) + getNumberHashCode(this.velocityCoefficient_1) | 0;
    return result;
  };
  protoOf(FlingResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlingResult))
      return false;
    var tmp0_other_with_cast = other instanceof FlingResult ? other : THROW_CCE();
    if (!equals(this.distanceCoefficient_1, tmp0_other_with_cast.distanceCoefficient_1))
      return false;
    if (!equals(this.velocityCoefficient_1, tmp0_other_with_cast.velocityCoefficient_1))
      return false;
    return true;
  };
  function AndroidFlingSpline() {
    AndroidFlingSpline_instance = this;
    this.NbSamples_1 = 100;
    this.SplinePositions_1 = new Float32Array(101);
    this.SplineTimes_1 = new Float32Array(101);
    computeSplineInfo(this.SplinePositions_1, this.SplineTimes_1, 100);
  }
  protoOf(AndroidFlingSpline).flingPosition_xrffyv_k$ = function (time) {
    var index = numberToInt(100 * time);
    var distanceCoef = 1.0;
    var velocityCoef = 0.0;
    if (index < 100) {
      var tInf = index / 100;
      var tSup = (index + 1 | 0) / 100;
      var dInf = this.SplinePositions_1[index];
      var dSup = this.SplinePositions_1[index + 1 | 0];
      velocityCoef = (dSup - dInf) / (tSup - tInf);
      distanceCoef = dInf + (time - tInf) * velocityCoef;
    }
    return new FlingResult(distanceCoef, velocityCoef);
  };
  protoOf(AndroidFlingSpline).deceleration_b9qzl_k$ = function (velocity, friction) {
    var tmp$ret$1;
    // Inline function 'kotlin.math.ln' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    tmp$ret$0 = Math.abs(velocity);
    var tmp0_ln = 0.35 * tmp$ret$0 / friction;
    tmp$ret$1 = Math.log(tmp0_ln);
    return tmp$ret$1;
  };
  var AndroidFlingSpline_instance;
  function AndroidFlingSpline_getInstance() {
    if (AndroidFlingSpline_instance == null)
      new AndroidFlingSpline();
    return AndroidFlingSpline_instance;
  }
  function computeSplineInfo(splinePositions, splineTimes, nbSamples) {
    var xMin = 0.0;
    var yMin = 0.0;
    var inductionVariable = 0;
    if (inductionVariable < nbSamples)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var alpha = i / nbSamples;
        var xMax = 1.0;
        var x;
        var tx;
        var coef;
        $l$loop: while (true) {
          x = xMin + (xMax - xMin) / 2.0;
          coef = 3.0 * x * (1.0 - x);
          tx = coef * ((1.0 - x) * 0.175 + x * 0.35000002) + x * x * x;
          var tmp$ret$0;
          // Inline function 'kotlin.math.abs' call
          var tmp0_abs = tx - alpha;
          tmp$ret$0 = Math.abs(tmp0_abs);
          if (tmp$ret$0 < 1.0E-5)
            break $l$loop;
          if (tx > alpha)
            xMax = x;
          else
            xMin = x;
        }
        splinePositions[i] = coef * ((1.0 - x) * 0.5 + x) + x * x * x;
        var yMax = 1.0;
        var y;
        var dy;
        $l$loop_0: while (true) {
          y = yMin + (yMax - yMin) / 2.0;
          coef = 3.0 * y * (1.0 - y);
          dy = coef * ((1.0 - y) * 0.5 + y) + y * y * y;
          var tmp$ret$1;
          // Inline function 'kotlin.math.abs' call
          var tmp1_abs = dy - alpha;
          tmp$ret$1 = Math.abs(tmp1_abs);
          if (tmp$ret$1 < 1.0E-5)
            break $l$loop_0;
          if (dy > alpha)
            yMax = y;
          else
            yMin = y;
        }
        splineTimes[i] = coef * ((1.0 - y) * 0.175 + y * 0.35000002) + y * y * y;
      }
       while (inductionVariable < nbSamples);
    splineTimes[nbSamples] = 1.0;
    splinePositions[nbSamples] = splineTimes[nbSamples];
  }
  function get_Inflection() {
    return Inflection;
  }
  var Inflection;
  function get_P2() {
    return P2;
  }
  var P2;
  function get_P1() {
    return P1;
  }
  var P1;
  function get_StartTension() {
    return StartTension;
  }
  var StartTension;
  function _get_flingCalculator__k6f165($this) {
    return $this.flingCalculator_1;
  }
  function flingDistance($this, startVelocity) {
    var tmp = $this.flingCalculator_1.flingDistance_fh7swt_k$(startVelocity);
    var tmp$ret$0;
    // Inline function 'kotlin.math.sign' call
    tmp$ret$0 = sign(startVelocity);
    return tmp * tmp$ret$0;
  }
  function get_$stableprop_3() {
    return 0;
  }
  function SplineBasedFloatDecayAnimationSpec(density) {
    this.flingCalculator_1 = new FlingCalculator(get_platformFlingScrollFriction(), density);
    this.$stable_1 = 0;
  }
  protoOf(SplineBasedFloatDecayAnimationSpec).get_absVelocityThreshold_wsgqo5_k$ = function () {
    return 0.0;
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).getTargetValue_xs6ane_k$ = function (initialValue, initialVelocity) {
    return initialValue + flingDistance(this, initialVelocity);
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).getValueFromNanos_tm63l0_k$ = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_9s1fi3_k$(new Long(1000000, 0));
    return initialValue + this.flingCalculator_1.flingInfo_gbiih0_k$(initialVelocity).position_axeral_k$(playTimeMillis);
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).getDurationNanos_kuw0r9_k$ = function (initialValue, initialVelocity) {
    return this.flingCalculator_1.flingDuration_tlzcny_k$(initialVelocity).times_2zfqpc_k$(new Long(1000000, 0));
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).getVelocityFromNanos_1qiryk_k$ = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_9s1fi3_k$(new Long(1000000, 0));
    return this.flingCalculator_1.flingInfo_gbiih0_k$(initialVelocity).velocity_v2xlvr_k$(playTimeMillis);
  };
  function animateColor$composable(_this__u8e3s4, transitionSpec, label, targetValueByState, $composer, $changed, $default) {
    var transitionSpec_0 = transitionSpec;
    var label_0 = label;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1488075038);
    sourceInformation($composer_0, 'CC(animateColor$composable)P(2)68@3220L31,69@3287L70,73@3370L70:Transition.kt#xbi5r1');
    if (!(($default & 1) === 0)) {
      transitionSpec_0 = animateColor$composable$lambda;
    }
    if (!(($default & 2) === 0))
      label_0 = 'ColorAnimation';
    var colorSpace = _Color___get_colorSpace__impl__jqqozk(targetValueByState(_this__u8e3s4.get_targetState_kri3mx_k$(), $composer_0, 112 & $changed >> 6).value_1);
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = $composer_0;
    var $composer_1 = tmp3_remember$composable;
    $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = $composer_1.changed_ga7h3f_k$(colorSpace);
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_3().get_Empty_i9b85g_k$()) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.animation.animateColor$composable.<anonymous>' call
      tmp$ret$0 = get_VectorConverter(Companion_getInstance_2())(colorSpace);
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
    var typeConverter = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'androidx.compose.animation.core.animateValue$composable' call
    var tmp4_animateValue$composable = transitionSpec_0;
    var tmp5_animateValue$composable = label_0;
    var tmp6_animateValue$composable = $composer_0;
    var tmp7_animateValue$composable = 14 & $changed | 896 & $changed << 3 | 7168 & $changed << 3 | 57344 & $changed << 3;
    var transitionSpec_1 = tmp4_animateValue$composable;
    var label_1 = tmp5_animateValue$composable;
    var $composer_2 = tmp6_animateValue$composable;
    $composer_2.startReplaceableGroup_rp6air_k$(-1940744337);
    sourceInformation($composer_2, 'CC(animateValue$composable)P(3,2)856@34079L32,857@34134L31,858@34190L23,860@34226L89:Transition.kt#pdpnli');
    if (!(0 === 0)) {
      transitionSpec_1 = animateColor$composable$lambda_0;
    }
    if (!(0 === 0))
      label_1 = 'ValueAnimation';
    var initialValue = targetValueByState(_this__u8e3s4.get_currentState_snihnl_k$(), $composer_2, 112 & tmp7_animateValue$composable >> 9).value_1;
    var targetValue = targetValueByState(_this__u8e3s4.get_targetState_kri3mx_k$(), $composer_2, 112 & tmp7_animateValue$composable >> 9).value_1;
    var animationSpec = transitionSpec_1(_this__u8e3s4.get_segment_xwnoei_k$(), $composer_2, 112 & tmp7_animateValue$composable >> 3);
    var tmp0_0 = createTransitionAnimation$composable(_this__u8e3s4, new Color_0(initialValue), new Color_0(targetValue), animationSpec, typeConverter, label_1, $composer_2, 14 & tmp7_animateValue$composable | 57344 & tmp7_animateValue$composable << 9 | 458752 & tmp7_animateValue$composable << 6);
    $composer_2.endReplaceableGroup_er37p7_k$();
    tmp$ret$5 = tmp0_0;
    var tmp0_1 = tmp$ret$5;
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_1;
  }
  function animateColor$composable$lambda($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1457805428);
    if (isTraceInProgress()) {
      traceEventStart(-1457805428, $changed, -1, 'androidx.compose.animation.animateColor$composable.<anonymous> (Transition.kt:64)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  }
  function animateColor$composable$lambda_0($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-895531546);
    if (isTraceInProgress()) {
      traceEventStart(-895531546, $changed, -1, 'androidx.compose.animation.core.animateValue$composable.<anonymous> (Transition.kt:851)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  }
  function get_platformFlingScrollFriction() {
    return platformFlingScrollFriction;
  }
  var platformFlingScrollFriction;
  function rememberSplineBasedDecay$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(802798862);
    sourceInformation($composer_0, 'C(rememberSplineBasedDecay$composable)30@1256L7,31@1275L114:SplineBasedDecayAnimationSpec.js.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(802798862, $changed, -1, 'androidx.compose.animation.rememberSplineBasedDecay$composable (SplineBasedDecayAnimationSpec.js.kt:27)');
    }
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_11nid3_k$(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0;
    var density = tmp$ret$0;
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp5_remember$composable = density.get_density_qy0267_k$();
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
    if (tmp4_cache ? true : tmp2_let === Companion_getInstance_3().get_Empty_i9b85g_k$()) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.animation.rememberSplineBasedDecay$composable.<anonymous>' call
      tmp$ret$1 = generateDecayAnimationSpec(new SplineBasedFloatDecayAnimationSpec(density));
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
  //region block: init
  InchesPerMeter = 39.37;
  GravityEarth = 9.80665;
  Inflection = 0.35;
  P2 = 0.35000002;
  P1 = 0.175;
  StartTension = 0.5;
  platformFlingScrollFriction = 0.015;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_VectorConverter;
  _.$_$.b = animateColorAsState$composable;
  _.$_$.c = expandHorizontally;
  _.$_$.d = fadeIn;
  _.$_$.e = fadeOut;
  _.$_$.f = rememberSplineBasedDecay$composable;
  _.$_$.g = shrinkHorizontally;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-animation.js.map
