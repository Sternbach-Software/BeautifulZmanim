(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './okio-parent-okio-js-ir.js', './ktor-ktor-client-core.js', './skiko-kjs.js', './ktor-ktor-http.js', './ktor-ktor-utils.js', './uri-kmp-uri.js', './androidx-ui-geometry.js', './androidx-ui-graphics.js', './androidx-ui-unit.js', './androidx-runtime.js', './okio-parent-okio-fakefilesystem-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./okio-parent-okio-js-ir.js'), require('./ktor-ktor-client-core.js'), require('./skiko-kjs.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-utils.js'), require('./uri-kmp-uri.js'), require('./androidx-ui-geometry.js'), require('./androidx-ui-graphics.js'), require('./androidx-ui-unit.js'), require('./androidx-runtime.js'), require('./okio-parent-okio-fakefilesystem-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-imageLoader-image-loader'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'compose-imageLoader-image-loader'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-imageLoader-image-loader'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'compose-imageLoader-image-loader'.");
    }
    if (typeof this['okio-parent-okio-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-imageLoader-image-loader'. Its dependency 'okio-parent-okio-js-ir' was not found. Please, check whether 'okio-parent-okio-js-ir' is loaded prior to 'compose-imageLoader-image-loader'.");
    }
    if (typeof this['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-imageLoader-image-loader'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'compose-imageLoader-image-loader'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'compose-imageLoader-image-loader'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'compose-imageLoader-image-loader'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'compose-imageLoader-image-loader'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'compose-imageLoader-image-loader'.");
    }
    if (typeof this['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'compose-imageLoader-image-loader'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'compose-imageLoader-image-loader'.");
    }
    if (typeof this['uri-kmp-uri'] === 'undefined') {
      throw new Error("Error loading module 'compose-imageLoader-image-loader'. Its dependency 'uri-kmp-uri' was not found. Please, check whether 'uri-kmp-uri' is loaded prior to 'compose-imageLoader-image-loader'.");
    }
    if (typeof this['androidx-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-imageLoader-image-loader'. Its dependency 'androidx-ui-geometry' was not found. Please, check whether 'androidx-ui-geometry' is loaded prior to 'compose-imageLoader-image-loader'.");
    }
    if (typeof this['androidx-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-imageLoader-image-loader'. Its dependency 'androidx-ui-graphics' was not found. Please, check whether 'androidx-ui-graphics' is loaded prior to 'compose-imageLoader-image-loader'.");
    }
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-imageLoader-image-loader'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'compose-imageLoader-image-loader'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-imageLoader-image-loader'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'compose-imageLoader-image-loader'.");
    }
    if (typeof this['okio-parent-okio-fakefilesystem-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-imageLoader-image-loader'. Its dependency 'okio-parent-okio-fakefilesystem-js-ir' was not found. Please, check whether 'okio-parent-okio-fakefilesystem-js-ir' is loaded prior to 'compose-imageLoader-image-loader'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-imageLoader-image-loader'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'compose-imageLoader-image-loader'.");
    }
    root['compose-imageLoader-image-loader'] = factory(typeof this['compose-imageLoader-image-loader'] === 'undefined' ? {} : this['compose-imageLoader-image-loader'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['okio-parent-okio-js-ir'], this['ktor-ktor-client-core'], this['skiko-kjs'], this['ktor-ktor-http'], this['ktor-ktor-utils'], this['uri-kmp-uri'], this['androidx-ui-geometry'], this['androidx-ui-graphics'], this['androidx-ui-unit'], this['androidx-runtime'], this['okio-parent-okio-fakefilesystem-js-ir'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_squareup_okio_okio, kotlin_io_ktor_ktor_client_core, kotlin_org_jetbrains_skiko_skiko, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_utils, kotlin_com_eygraber_uri, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_squareup_okio_okio_fakefilesystem, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.mf;
  var interfaceMeta = kotlin_kotlin.$_$.oe;
  var VOID = kotlin_kotlin.$_$.jm;
  var setMetadataFor = kotlin_kotlin.$_$.nf;
  var CoroutineImpl = kotlin_kotlin.$_$.id;
  var Unit_getInstance = kotlin_kotlin.$_$.k6;
  var THROW_CCE = kotlin_kotlin.$_$.sk;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w1;
  var isInterface = kotlin_kotlin.$_$.xe;
  var Companion_getInstance = kotlin_kotlin.$_$.f6;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.sc;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.e4;
  var createFailure = kotlin_kotlin.$_$.jl;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.f4;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.i4;
  var isObject = kotlin_kotlin.$_$.ze;
  var classMeta = kotlin_kotlin.$_$.zd;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var SuspendFunction1 = kotlin_kotlin.$_$.kd;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e2;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v1;
  var THROW_ISE = kotlin_kotlin.$_$.tk;
  var Enum = kotlin_kotlin.$_$.ek;
  var Closeable = kotlin_com_squareup_okio_okio.$_$.f;
  var Long = kotlin_kotlin.$_$.kk;
  var toString = kotlin_kotlin.$_$.rf;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var numberToLong = kotlin_kotlin.$_$.jf;
  var coerceIn = kotlin_kotlin.$_$.pg;
  var Exception = kotlin_kotlin.$_$.gk;
  var equals = kotlin_kotlin.$_$.de;
  var buffer = kotlin_com_squareup_okio_okio.$_$.p;
  var charSequenceLength = kotlin_kotlin.$_$.xd;
  var IOException_init_$Create$ = kotlin_com_squareup_okio_okio.$_$.a;
  var EOFException = kotlin_com_squareup_okio_okio.$_$.g;
  var addSuppressed = kotlin_kotlin.$_$.fl;
  var ensureNotNull = kotlin_kotlin.$_$.kl;
  var buffer_0 = kotlin_com_squareup_okio_okio.$_$.q;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.v3;
  var indexOf = kotlin_kotlin.$_$.fi;
  var startsWith = kotlin_kotlin.$_$.bj;
  var charArrayOf = kotlin_kotlin.$_$.ud;
  var split = kotlin_kotlin.$_$.zi;
  var toLong = kotlin_kotlin.$_$.pf;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n2;
  var booleanArray = kotlin_kotlin.$_$.sd;
  var longArray = kotlin_kotlin.$_$.ef;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.q;
  var StringBuilder = kotlin_kotlin.$_$.qh;
  var toLong_0 = kotlin_kotlin.$_$.mj;
  var NumberFormatException = kotlin_kotlin.$_$.ok;
  var IOException = kotlin_com_squareup_okio_okio.$_$.m;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.m1;
  var objectMeta = kotlin_kotlin.$_$.lf;
  var ForwardingFileSystem = kotlin_com_squareup_okio_okio.$_$.l;
  var blackholeSink = kotlin_com_squareup_okio_okio.$_$.o;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.d1;
  var copyToArray = kotlin_kotlin.$_$.z8;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g2;
  var Companion_getInstance_0 = kotlin_com_squareup_okio_okio.$_$.b;
  var plus = kotlin_kotlin.$_$.va;
  var emptyMap = kotlin_kotlin.$_$.d9;
  var emptySet = kotlin_kotlin.$_$.e9;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.b1;
  var toSet = kotlin_kotlin.$_$.ic;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var firstOrNull = kotlin_kotlin.$_$.l9;
  var until = kotlin_kotlin.$_$.xg;
  var to = kotlin_kotlin.$_$.gm;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.c3;
  var plus_0 = kotlin_kotlin.$_$.ya;
  var toMutableList = kotlin_kotlin.$_$.fc;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.f;
  var hashCode = kotlin_kotlin.$_$.me;
  var Bitmap = kotlin_org_jetbrains_skiko_skiko.$_$.a9;
  var Url = kotlin_io_ktor_ktor_http.$_$.w;
  var contentType = kotlin_io_ktor_ktor_http.$_$.d1;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.c;
  var url = kotlin_io_ktor_ktor_client_core.$_$.d;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.e;
  var bodyAsChannel = kotlin_io_ktor_ktor_client_core.$_$.a;
  var isSuccess = kotlin_io_ktor_ktor_http.$_$.f1;
  var lazy = kotlin_kotlin.$_$.sl;
  var RuntimeException = kotlin_kotlin.$_$.rk;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.b3;
  var captureStack = kotlin_kotlin.$_$.td;
  var KProperty1 = kotlin_kotlin.$_$.ch;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ke;
  var split_0 = kotlin_kotlin.$_$.aj;
  var removePrefix = kotlin_kotlin.$_$.ti;
  var removeSuffix = kotlin_kotlin.$_$.ui;
  var last = kotlin_kotlin.$_$.la;
  var decodeBase64Bytes = kotlin_io_ktor_ktor_utils.$_$.y;
  var Url_0 = kotlin_io_ktor_ktor_http.$_$.v;
  var Companion_getInstance_1 = kotlin_com_eygraber_uri.$_$.a;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.tl;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.g4;
  var emptyList = kotlin_kotlin.$_$.c9;
  var listOfNotNull = kotlin_kotlin.$_$.oa;
  var _Result___get_isSuccess__impl__sndoy8 = kotlin_kotlin.$_$.h4;
  var objectCreate = kotlin_kotlin.$_$.kf;
  var toMutableMap = kotlin_kotlin.$_$.hc;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p3;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n3;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s3;
  var CanvasDrawScope = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u2;
  var ImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m;
  var Canvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u1;
  var FileNotFoundException = kotlin_com_squareup_okio_okio.$_$.j;
  var Sink = kotlin_com_squareup_okio_okio.$_$.n;
  var Buffer = kotlin_com_squareup_okio_okio.$_$.e;
  var toByteArray = kotlin_io_ktor_ktor_utils.$_$.a;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var Density = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var FakeFileSystem = kotlin_com_squareup_okio_okio_fakefilesystem.$_$.a;
  var KProperty0 = kotlin_kotlin.$_$.bh;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var plus_1 = kotlin_kotlin.$_$.ul;
  var MutableMap = kotlin_kotlin.$_$.l7;
  var Js_getInstance = kotlin_io_ktor_ktor_client_core.$_$.b;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var Companion_getInstance_6 = kotlin_org_jetbrains_skiko_skiko.$_$.x7;
  var Companion_getInstance_7 = kotlin_org_jetbrains_skiko_skiko.$_$.b8;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$_$.f8;
  var Companion_getInstance_9 = kotlin_org_jetbrains_skiko_skiko.$_$.v7;
  var SVGDOM_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.m7;
  var asComposeImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c1;
  var Bitmap_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.o7;
  var withIndex = kotlin_kotlin.$_$.lc;
  var Companion_getInstance_10 = kotlin_kotlin.$_$.c6;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.i;
  var toDuration = kotlin_kotlin.$_$.wj;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var Painter = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var numberToInt = kotlin_kotlin.$_$.if;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x;
  var RememberObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var SVGLengthUnit_PX_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r;
  var SVGLength = kotlin_org_jetbrains_skiko_skiko.$_$.z8;
  var SVGPreserveAspectRatioAlign_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s;
  var SVGPreserveAspectRatio_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.n7;
  var get_nativeCanvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l1;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var Companion_getInstance_11 = kotlin_org_jetbrains_skiko_skiko.$_$.l8;
  var Size__times_impl_fnp4nc = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ImageLoader, 'ImageLoader', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(RealImageLoader$execute$slambda, 'RealImageLoader$execute$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(RealImageLoader, 'RealImageLoader', classMeta, VOID, [ImageLoader], VOID, VOID, [1]);
  setMetadataFor(ImageLoaderConfigBuilder, 'ImageLoaderConfigBuilder', classMeta);
  setMetadataFor(ImageLoaderConfig, 'ImageLoaderConfig', classMeta);
  setMetadataFor(ImageLoaderEngine, 'ImageLoaderEngine', classMeta);
  setMetadataFor(CachePolicy, 'CachePolicy', classMeta, Enum);
  setMetadataFor(Snapshot, 'Snapshot', interfaceMeta, VOID, [Closeable]);
  setMetadataFor(Editor, 'Editor', interfaceMeta);
  setMetadataFor(DiskCache, 'DiskCache', interfaceMeta);
  setMetadataFor(DiskCacheBuilder, 'DiskCacheBuilder', classMeta);
  setMetadataFor(Snapshot_0, 'Snapshot', classMeta, VOID, [Closeable]);
  setMetadataFor(Editor_0, 'Editor', classMeta);
  setMetadataFor(Entry, 'Entry', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(DiskLruCache$fileSystem$1, VOID, classMeta, ForwardingFileSystem);
  setMetadataFor(DiskLruCache$launchCleanup$slambda, 'DiskLruCache$launchCleanup$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(DiskLruCache, 'DiskLruCache', classMeta, VOID, [Closeable]);
  setMetadataFor(ForwardingSink, 'ForwardingSink', classMeta, VOID, [Sink]);
  setMetadataFor(FaultHidingSink, 'FaultHidingSink', classMeta, ForwardingSink);
  setMetadataFor(RealSnapshot, 'RealSnapshot', classMeta, VOID, [Snapshot]);
  setMetadataFor(RealEditor, 'RealEditor', classMeta, VOID, [Editor]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(RealDiskCache, 'RealDiskCache', classMeta, VOID, [DiskCache]);
  setMetadataFor(MemoryCache, 'MemoryCache', interfaceMeta);
  setMetadataFor(MemoryCacheBuilder, 'MemoryCacheBuilder', classMeta);
  setMetadataFor(RealMemoryCache, 'RealMemoryCache', classMeta, VOID, [MemoryCache]);
  setMetadataFor(StrongMemoryCache, 'StrongMemoryCache', interfaceMeta);
  setMetadataFor(InternalValue, 'InternalValue', classMeta);
  setMetadataFor(LruCache, 'LruCache', classMeta);
  setMetadataFor(RealStrongMemoryCache$cache$1, VOID, classMeta, LruCache);
  setMetadataFor(RealStrongMemoryCache, 'RealStrongMemoryCache', classMeta, VOID, [StrongMemoryCache]);
  setMetadataFor(EmptyStrongMemoryCache, 'EmptyStrongMemoryCache', classMeta, VOID, [StrongMemoryCache]);
  setMetadataFor(WeakMemoryCache, 'WeakMemoryCache', interfaceMeta);
  setMetadataFor(InternalValue_0, 'InternalValue', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(RealWeakMemoryCache, 'RealWeakMemoryCache', classMeta, VOID, [WeakMemoryCache]);
  setMetadataFor(EmptyWeakMemoryCache, 'EmptyWeakMemoryCache', objectMeta, VOID, [WeakMemoryCache]);
  setMetadataFor($decodeCOROUTINE$0, '$decodeCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(ComponentRegistry, 'ComponentRegistry', classMeta, VOID, VOID, VOID, VOID, [3]);
  setMetadataFor(ComponentRegistryBuilder, 'ComponentRegistryBuilder', classMeta);
  setMetadataFor(Factory, 'Factory', interfaceMeta, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(Decoder, 'Decoder', interfaceMeta, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(DecodeResult, 'DecodeResult', interfaceMeta);
  setMetadataFor(Bitmap_0, 'Bitmap', classMeta, VOID, [DecodeResult]);
  setMetadataFor(Image, 'Image', classMeta, VOID, [DecodeResult]);
  setMetadataFor(Painter_0, 'Painter', classMeta, VOID, [DecodeResult]);
  setMetadataFor(Factory_2, 'Factory', interfaceMeta);
  setMetadataFor(Factory_0, 'Factory', classMeta, VOID, [Factory_2]);
  setMetadataFor($fetchCOROUTINE$1, '$fetchCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(Fetcher, 'Fetcher', interfaceMeta, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(Base64Fetcher, 'Base64Fetcher', classMeta, VOID, [Fetcher], VOID, VOID, [0]);
  setMetadataFor(Factory_1, 'Factory', classMeta, VOID, [Factory_2]);
  setMetadataFor(BitmapFetcher, 'BitmapFetcher', classMeta, VOID, [Fetcher], VOID, VOID, [0]);
  setMetadataFor(FetchResult, 'FetchResult', interfaceMeta);
  setMetadataFor(Source, 'Source', classMeta, VOID, [FetchResult]);
  setMetadataFor(Bitmap_1, 'Bitmap', classMeta, VOID, [FetchResult]);
  setMetadataFor(Image_0, 'Image', classMeta, VOID, [FetchResult]);
  setMetadataFor(Painter_1, 'Painter', classMeta, VOID, [FetchResult]);
  setMetadataFor(Factory_3, 'Factory', classMeta, VOID, [Factory_2]);
  setMetadataFor($fetchCOROUTINE$2, '$fetchCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(KtorUrlFetcher, 'KtorUrlFetcher', classMeta, VOID, [Fetcher], VOID, VOID, [0]);
  setMetadataFor(KtorUrlRequestException, 'KtorUrlRequestException', classMeta, RuntimeException);
  setMetadataFor(Keyer, 'Keyer', interfaceMeta);
  setMetadataFor(KtorUrlKeyer, 'KtorUrlKeyer', classMeta, VOID, [Keyer]);
  setMetadataFor(Mapper, 'Mapper', interfaceMeta);
  setMetadataFor(Base64Mapper, 'Base64Mapper', classMeta, VOID, [Mapper]);
  setMetadataFor(Base64Image, 'Base64Image', classMeta);
  setMetadataFor(KtorUrlMapper, 'KtorUrlMapper', classMeta, VOID, [Mapper]);
  setMetadataFor(StringUriMapper, 'StringUriMapper', classMeta, VOID, [Mapper]);
  setMetadataFor($proceedCOROUTINE$3, '$proceedCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor($decodeCOROUTINE$4, '$decodeCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(Interceptor, 'Interceptor', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(DecodeInterceptor, 'DecodeInterceptor', classMeta, VOID, [Interceptor], VOID, VOID, [1, 2, 3]);
  setMetadataFor($interceptCOROUTINE$5, '$interceptCOROUTINE$5', classMeta, CoroutineImpl);
  setMetadataFor(DiskCacheInterceptor, 'DiskCacheInterceptor', classMeta, VOID, [Interceptor], VOID, VOID, [1]);
  setMetadataFor($interceptCOROUTINE$6, '$interceptCOROUTINE$6', classMeta, CoroutineImpl);
  setMetadataFor($fetchCOROUTINE$7, '$fetchCOROUTINE$7', classMeta, CoroutineImpl);
  setMetadataFor(FetchInterceptor, 'FetchInterceptor', classMeta, VOID, [Interceptor], VOID, VOID, [1, 3]);
  function get_options() {
    var tmp$ret$1;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.get_config_c0698r_k$().get_defaultOptions_p6uk0q_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.seiko.imageloader.intercept.Chain.<get-options>.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.get_request_jdwg4m_k$().get_optionsBuilders_r3f2ml_k$();
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.seiko.imageloader.intercept.Chain.<get-options>.<anonymous>.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = element(tmp0_also);
    }
    tmp$ret$1 = tmp0_also;
    return tmp$ret$1;
  }
  setMetadataFor(Chain, 'Chain', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(InterceptorsBuilder, 'InterceptorsBuilder', classMeta);
  setMetadataFor(MappedInterceptor, 'MappedInterceptor', classMeta, VOID, [Interceptor], VOID, VOID, [1]);
  setMetadataFor($interceptCOROUTINE$8, '$interceptCOROUTINE$8', classMeta, CoroutineImpl);
  setMetadataFor(MemoryCacheInterceptor, 'MemoryCacheInterceptor', classMeta, VOID, [Interceptor], VOID, VOID, [1]);
  setMetadataFor(RealInterceptorChain, 'RealInterceptorChain', classMeta, VOID, [Chain], VOID, VOID, [1]);
  setMetadataFor(DataSource, 'DataSource', classMeta, Enum);
  setMetadataFor(ImageRequest, 'ImageRequest', classMeta);
  setMetadataFor(ImageRequestBuilder, 'ImageRequestBuilder', classMeta);
  setMetadataFor(ImageRequestEvent, 'ImageRequestEvent', interfaceMeta);
  setMetadataFor(Prepare, 'Prepare', objectMeta, VOID, [ImageRequestEvent]);
  setMetadataFor(ReadMemoryCache, 'ReadMemoryCache', classMeta, VOID, [ImageRequestEvent]);
  setMetadataFor(ReadDiskCache, 'ReadDiskCache', classMeta, VOID, [ImageRequestEvent]);
  setMetadataFor(ImageResult, 'ImageResult', interfaceMeta);
  setMetadataFor(Source_0, 'Source', classMeta, VOID, [ImageResult]);
  setMetadataFor(Bitmap_2, 'Bitmap', classMeta, VOID, [ImageResult]);
  setMetadataFor(Image_1, 'Image', classMeta, VOID, [ImageResult]);
  setMetadataFor(Painter_2, 'Painter', classMeta, VOID, [ImageResult]);
  setMetadataFor(Error_0, 'Error', classMeta, VOID, [ImageResult]);
  setMetadataFor(NullRequestData, 'NullRequestData', objectMeta);
  setMetadataFor(ImageConfig, 'ImageConfig', classMeta, Enum);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Options, 'Options', classMeta);
  setMetadataFor(Scale, 'Scale', classMeta, Enum);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(SizeResolver, 'SizeResolver', interfaceMeta, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(SizeResolver$1, VOID, classMeta, VOID, [SizeResolver], VOID, VOID, [0]);
  setMetadataFor(DrawCache, 'DrawCache', classMeta);
  setMetadataFor(Logger, 'Logger', interfaceMeta);
  setMetadataFor(Logger$Companion$None$1, VOID, classMeta, VOID, [Logger]);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(LogPriority, 'LogPriority', classMeta, Enum);
  setMetadataFor($sourceCOROUTINE$9, '$sourceCOROUTINE$9', classMeta, CoroutineImpl);
  setMetadataFor(ImageLoaderProvidableCompositionLocal, 'ImageLoaderProvidableCompositionLocal', classMeta);
  setMetadataFor(WeakReference, 'WeakReference', classMeta);
  setMetadataFor(AtomicBoolean, 'AtomicBoolean', classMeta);
  setMetadataFor(Factory_4, 'Factory', classMeta, VOID, [Factory], VOID, VOID, [2]);
  setMetadataFor(GifDecoder, 'GifDecoder', classMeta, VOID, [Decoder], VOID, VOID, [0]);
  setMetadataFor(Factory_5, 'Factory', classMeta, VOID, [Factory], VOID, VOID, [2]);
  setMetadataFor(SkiaImageDecoder, 'SkiaImageDecoder', classMeta, VOID, [Decoder], VOID, VOID, [0]);
  setMetadataFor(Factory_6, 'Factory', classMeta, VOID, [Factory], VOID, VOID, [2]);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor($decodeCOROUTINE$10, '$decodeCOROUTINE$10', classMeta, CoroutineImpl);
  setMetadataFor(SvgDecoder, 'SvgDecoder', classMeta, VOID, [Decoder], VOID, VOID, [0]);
  setMetadataFor(GifPainter$onRemembered$slambda, 'GifPainter$onRemembered$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(GifPainter, 'GifPainter', classMeta, Painter, [Painter, RememberObserver]);
  setMetadataFor(SVGPainter, 'SVGPainter', classMeta, Painter);
  //endregion
  function ImageLoader() {
  }
  function ImageLoader_0(requestCoroutineContext, block) {
    requestCoroutineContext = requestCoroutineContext === VOID ? get_ioDispatcher() : requestCoroutineContext;
    return new RealImageLoader(requestCoroutineContext, ImageLoaderConfig_0(block));
  }
  function _get_requestCoroutineContext__yqejyt($this) {
    return $this.requestCoroutineContext_1;
  }
  function RealImageLoader$execute$slambda($request, this$0, resultContinuation) {
    this.$request_1 = $request;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RealImageLoader$execute$slambda).invoke_ugfh8_k$ = function ($this$withContext, $completion) {
    var tmp = this.create_b6qu53_k$($this$withContext, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RealImageLoader$execute$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_ugfh8_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RealImageLoader$execute$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_exceptionState_s9sevl_k$(2);
            var tmp_0 = this;
            tmp_0.tmp0_success1__1 = Companion_getInstance();
            this.$request_1.call_2btplb_k$(Prepare_getInstance());
            this.set_state_a96kl8_k$(1);
            suspendResult = RealInterceptorChain_init_$Create$(this.$request_1, this.this$0__1.config_1).proceed_erlbth_k$(this.$request_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1_success = suspendResult;
            this.TRY_RESULT0__1 = _Result___init__impl__xyqfz8(tmp1_success);
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Error) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_2 = this;
              var tmp2_failure = Companion_getInstance();
              tmp_2.TRY_RESULT0__1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.set_state_a96kl8_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp3_getOrElse = this.TRY_RESULT0__1;
            var exception = Result__exceptionOrNull_impl_p6xea9(tmp3_getOrElse);
            var tmp_3;
            if (exception == null) {
              var tmp_4 = _Result___get_value__impl__bjfvqg(tmp3_getOrElse);
              tmp_3 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
            } else {
              tmp_3 = new Error_0(this.$request_1, exception);
            }

            return tmp_3;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(RealImageLoader$execute$slambda).create_b6qu53_k$ = function ($this$withContext, completion) {
    var i = new RealImageLoader$execute$slambda(this.$request_1, this.this$0__1, completion);
    i.$this$withContext_1 = $this$withContext;
    return i;
  };
  protoOf(RealImageLoader$execute$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function RealImageLoader$execute$slambda_0($request, this$0, resultContinuation) {
    var i = new RealImageLoader$execute$slambda($request, this$0, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.invoke_ugfh8_k$($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RealImageLoader(requestCoroutineContext, config) {
    this.requestCoroutineContext_1 = requestCoroutineContext;
    this.config_1 = config;
  }
  protoOf(RealImageLoader).get_config_c0698r_k$ = function () {
    return this.config_1;
  };
  protoOf(RealImageLoader).execute_o0wbhq_k$ = function (request, $completion) {
    var tmp0 = withContext(this.requestCoroutineContext_1, RealImageLoader$execute$slambda_0(request, this, null), $completion);
    return tmp0;
  };
  function _get_interceptorsBuilder__9pbvdo($this) {
    return $this.interceptorsBuilder_1;
  }
  function _get_componentsBuilder__p5hj64($this) {
    return $this.componentsBuilder_1;
  }
  function get_$stableprop() {
    return 8;
  }
  function ImageLoaderConfigBuilder() {
    this.imageScope_1 = CoroutineScope_0(SupervisorJob().plus_rgw9wi_k$(Dispatchers_getInstance().get_Main_wo5vz6_k$().get_immediate_r3y8eg_k$()));
    this.logger_1 = Companion_getInstance_17().get_None_wo6tgh_k$();
    this.options_1 = new Options();
    this.interceptorsBuilder_1 = new InterceptorsBuilder();
    this.componentsBuilder_1 = new ComponentRegistryBuilder();
    this.$stable_1 = 8;
  }
  protoOf(ImageLoaderConfigBuilder).set_imageScope_jzhhq6_k$ = function (_set____db54di) {
    this.imageScope_1 = _set____db54di;
  };
  protoOf(ImageLoaderConfigBuilder).get_imageScope_qsz29u_k$ = function () {
    return this.imageScope_1;
  };
  protoOf(ImageLoaderConfigBuilder).set_logger_5pynjt_k$ = function (_set____db54di) {
    this.logger_1 = _set____db54di;
  };
  protoOf(ImageLoaderConfigBuilder).get_logger_g9gejd_k$ = function () {
    return this.logger_1;
  };
  protoOf(ImageLoaderConfigBuilder).set_options_16ilny_k$ = function (_set____db54di) {
    this.options_1 = _set____db54di;
  };
  protoOf(ImageLoaderConfigBuilder).get_options_jecmyz_k$ = function () {
    return this.options_1;
  };
  protoOf(ImageLoaderConfigBuilder).interceptor_mzbear_k$ = function (builder) {
    var tmp$ret$0;
    // Inline function 'kotlin.run' call
    var tmp0_run = this.interceptorsBuilder_1;
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = builder(tmp0_run);
  };
  protoOf(ImageLoaderConfigBuilder).components_f373zj_k$ = function (builder) {
    var tmp$ret$0;
    // Inline function 'kotlin.run' call
    var tmp0_run = this.componentsBuilder_1;
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = builder(tmp0_run);
  };
  protoOf(ImageLoaderConfigBuilder).build_1k0s4u_k$ = function () {
    var tmp2_imageScope = this.imageScope_1;
    var tmp3_logger = this.logger_1;
    var tmp4_defaultOptions = this.options_1;
    var tmp0_interceptors = this.interceptorsBuilder_1.build_1k0s4u_k$();
    var tmp1_componentRegistry = this.componentsBuilder_1.build_1k0s4u_k$();
    var tmp5_engine = new ImageLoaderEngine(tmp1_componentRegistry, tmp0_interceptors);
    return new ImageLoaderConfig(tmp2_imageScope, tmp4_defaultOptions, tmp5_engine, tmp3_logger);
  };
  function get_$stableprop_0() {
    return 8;
  }
  function ImageLoaderConfig(imageScope, defaultOptions, engine, logger) {
    this.imageScope_1 = imageScope;
    this.defaultOptions_1 = defaultOptions;
    this.engine_1 = engine;
    this.logger_1 = logger;
    this.$stable_1 = 8;
  }
  protoOf(ImageLoaderConfig).get_imageScope_qsz29u_k$ = function () {
    return this.imageScope_1;
  };
  protoOf(ImageLoaderConfig).get_defaultOptions_p6uk0q_k$ = function () {
    return this.defaultOptions_1;
  };
  protoOf(ImageLoaderConfig).get_engine_cxlavf_k$ = function () {
    return this.engine_1;
  };
  protoOf(ImageLoaderConfig).get_logger_g9gejd_k$ = function () {
    return this.logger_1;
  };
  function ImageLoaderConfig_0(block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new ImageLoaderConfigBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.build_1k0s4u_k$();
  }
  function get_$stableprop_1() {
    return 0;
  }
  function ImageLoaderEngine(componentRegistry, interceptors) {
    this.componentRegistry_1 = componentRegistry;
    this.interceptors_1 = interceptors;
    this.$stable_1 = 0;
  }
  protoOf(ImageLoaderEngine).get_componentRegistry_9xd8z5_k$ = function () {
    return this.componentRegistry_1;
  };
  protoOf(ImageLoaderEngine).get_interceptors_e78bex_k$ = function () {
    return this.interceptors_1;
  };
  var CachePolicy_ENABLED_instance;
  var CachePolicy_READ_ONLY_instance;
  var CachePolicy_WRITE_ONLY_instance;
  var CachePolicy_DISABLED_instance;
  function values() {
    return [CachePolicy_ENABLED_getInstance(), CachePolicy_READ_ONLY_getInstance(), CachePolicy_WRITE_ONLY_getInstance(), CachePolicy_DISABLED_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'ENABLED':
        return CachePolicy_ENABLED_getInstance();
      case 'READ_ONLY':
        return CachePolicy_READ_ONLY_getInstance();
      case 'WRITE_ONLY':
        return CachePolicy_WRITE_ONLY_getInstance();
      case 'DISABLED':
        return CachePolicy_DISABLED_getInstance();
      default:
        CachePolicy_initEntries();
        THROW_ISE();
        break;
    }
  }
  var CachePolicy_entriesInitialized;
  function CachePolicy_initEntries() {
    if (CachePolicy_entriesInitialized)
      return Unit_getInstance();
    CachePolicy_entriesInitialized = true;
    CachePolicy_ENABLED_instance = new CachePolicy('ENABLED', 0, true, true);
    CachePolicy_READ_ONLY_instance = new CachePolicy('READ_ONLY', 1, true, false);
    CachePolicy_WRITE_ONLY_instance = new CachePolicy('WRITE_ONLY', 2, false, true);
    CachePolicy_DISABLED_instance = new CachePolicy('DISABLED', 3, false, false);
  }
  function CachePolicy(name, ordinal, readEnabled, writeEnabled) {
    Enum.call(this, name, ordinal);
    this.readEnabled_1 = readEnabled;
    this.writeEnabled_1 = writeEnabled;
  }
  protoOf(CachePolicy).get_readEnabled_oyc6n2_k$ = function () {
    return this.readEnabled_1;
  };
  protoOf(CachePolicy).get_writeEnabled_mrjiqz_k$ = function () {
    return this.writeEnabled_1;
  };
  function CachePolicy_ENABLED_getInstance() {
    CachePolicy_initEntries();
    return CachePolicy_ENABLED_instance;
  }
  function CachePolicy_READ_ONLY_getInstance() {
    CachePolicy_initEntries();
    return CachePolicy_READ_ONLY_instance;
  }
  function CachePolicy_WRITE_ONLY_getInstance() {
    CachePolicy_initEntries();
    return CachePolicy_WRITE_ONLY_instance;
  }
  function CachePolicy_DISABLED_getInstance() {
    CachePolicy_initEntries();
    return CachePolicy_DISABLED_instance;
  }
  function Snapshot() {
  }
  function Editor() {
  }
  function DiskCache() {
  }
  function _set_directory__nte77c($this, _set____db54di) {
    $this.directory_1 = _set____db54di;
  }
  function _get_directory__hwved8($this) {
    return $this.directory_1;
  }
  function _set_fileSystem__dgqbpw($this, _set____db54di) {
    $this.fileSystem_1 = _set____db54di;
  }
  function _get_fileSystem__siywv4($this) {
    return $this.fileSystem_1;
  }
  function _set_maxSizePercent__ni8lpl($this, _set____db54di) {
    $this.maxSizePercent_1 = _set____db54di;
  }
  function _get_maxSizePercent__20uubv($this) {
    return $this.maxSizePercent_1;
  }
  function _set_minimumMaxSizeBytes__i6frm7($this, _set____db54di) {
    $this.minimumMaxSizeBytes_1 = _set____db54di;
  }
  function _get_minimumMaxSizeBytes__4vpipv($this) {
    return $this.minimumMaxSizeBytes_1;
  }
  function _set_maximumMaxSizeBytes__bf7tt($this, _set____db54di) {
    $this.maximumMaxSizeBytes_1 = _set____db54di;
  }
  function _get_maximumMaxSizeBytes__czb12j($this) {
    return $this.maximumMaxSizeBytes_1;
  }
  function _set_maxSizeBytes__bar9an($this, _set____db54di) {
    $this.maxSizeBytes_1 = _set____db54di;
  }
  function _get_maxSizeBytes__48zh9h($this) {
    return $this.maxSizeBytes_1;
  }
  function _set_cleanupDispatcher__3laldm($this, _set____db54di) {
    $this.cleanupDispatcher_1 = _set____db54di;
  }
  function _get_cleanupDispatcher__i4iawq($this) {
    return $this.cleanupDispatcher_1;
  }
  function get_$stableprop_2() {
    return 8;
  }
  function DiskCacheBuilder() {
    this.directory_1 = null;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'com.seiko.imageloader.cache.disk.systemFileSystem' call
    tmp$ret$0 = get_fakeFileSystem();
    tmp.fileSystem_1 = tmp$ret$0;
    this.maxSizePercent_1 = 0.02;
    var tmp_0 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.Long.times' call
    var tmp$ret$1;
    // Inline function 'kotlin.Long.times' call
    tmp$ret$1 = new Long(10240, 0);
    var tmp0_times = tmp$ret$1;
    tmp$ret$2 = tmp0_times.times_2zfqpc_k$(new Long(1024, 0));
    tmp_0.minimumMaxSizeBytes_1 = tmp$ret$2;
    var tmp_1 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.Long.times' call
    var tmp$ret$3;
    // Inline function 'kotlin.Long.times' call
    tmp$ret$3 = new Long(256000, 0);
    var tmp0_times_0 = tmp$ret$3;
    tmp$ret$4 = tmp0_times_0.times_2zfqpc_k$(new Long(1024, 0));
    tmp_1.maximumMaxSizeBytes_1 = tmp$ret$4;
    this.maxSizeBytes_1 = new Long(0, 0);
    this.cleanupDispatcher_1 = get_ioDispatcher();
    this.$stable_1 = 8;
  }
  protoOf(DiskCacheBuilder).directory_hnnzea_k$ = function (directory) {
    this.directory_1 = directory;
  };
  protoOf(DiskCacheBuilder).fileSystem_ep74wi_k$ = function (fileSystem) {
    this.fileSystem_1 = fileSystem;
  };
  protoOf(DiskCacheBuilder).maxSizePercent_txd6tu_k$ = function (percent) {
    // Inline function 'kotlin.require' call
    var tmp0_require = 0.0 <= percent ? percent <= 1.0 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.seiko.imageloader.cache.disk.DiskCacheBuilder.maxSizePercent.<anonymous>' call
      tmp$ret$0 = 'size must be in the range [0.0, 1.0].';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.maxSizeBytes_1 = new Long(0, 0);
    this.maxSizePercent_1 = percent;
  };
  protoOf(DiskCacheBuilder).minimumMaxSizeBytes_63otxv_k$ = function (size) {
    // Inline function 'kotlin.require' call
    var tmp0_require = size.compareTo_n4fqi2_k$(new Long(0, 0)) > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.seiko.imageloader.cache.disk.DiskCacheBuilder.minimumMaxSizeBytes.<anonymous>' call
      tmp$ret$0 = 'size must be > 0.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.minimumMaxSizeBytes_1 = size;
  };
  protoOf(DiskCacheBuilder).maximumMaxSizeBytes_b91hfj_k$ = function (size) {
    // Inline function 'kotlin.require' call
    var tmp0_require = size.compareTo_n4fqi2_k$(new Long(0, 0)) > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.seiko.imageloader.cache.disk.DiskCacheBuilder.maximumMaxSizeBytes.<anonymous>' call
      tmp$ret$0 = 'size must be > 0.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.maximumMaxSizeBytes_1 = size;
  };
  protoOf(DiskCacheBuilder).maxSizeBytes_wa70ov_k$ = function (size) {
    // Inline function 'kotlin.require' call
    var tmp0_require = size.compareTo_n4fqi2_k$(new Long(0, 0)) > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.seiko.imageloader.cache.disk.DiskCacheBuilder.maxSizeBytes.<anonymous>' call
      tmp$ret$0 = 'size must be > 0.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.maxSizePercent_1 = 0.0;
    this.maxSizeBytes_1 = size;
  };
  protoOf(DiskCacheBuilder).cleanupDispatcher_gwidba_k$ = function (dispatcher) {
    this.cleanupDispatcher_1 = dispatcher;
  };
  protoOf(DiskCacheBuilder).build_1k0s4u_k$ = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      var tmp0_checkNotNull = this.directory_1;
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_checkNotNull == null) {
        var tmp$ret$0;
        // Inline function 'com.seiko.imageloader.cache.disk.DiskCacheBuilder.build.<anonymous>' call
        tmp$ret$0 = 'directory == null';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0_checkNotNull;
        break $l$block;
      }
    }
    var directory = tmp$ret$1;
    var tmp;
    if (this.maxSizePercent_1 > 0.0) {
      var tmp_0;
      try {
        var size = this.maxSizePercent_1 * directorySize(directory).toDouble_ygsx0s_k$();
        tmp_0 = coerceIn(numberToLong(size), this.minimumMaxSizeBytes_1, this.maximumMaxSizeBytes_1);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Exception) {
          var _ = $p;
          tmp_1 = this.minimumMaxSizeBytes_1;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else {
      tmp = this.maxSizeBytes_1;
    }
    var maxSize = tmp;
    return new RealDiskCache(maxSize, directory, this.fileSystem_1, this.cleanupDispatcher_1);
  };
  function DiskCache_0(block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new DiskCacheBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.build_1k0s4u_k$();
  }
  function _get_entry__hykpy9($this) {
    return $this.entry_1;
  }
  function _get_closed__iwkfs1($this) {
    return $this.closed_1;
  }
  function _set_closed__kdb0et($this, _set____db54di) {
    $this.closed_1 = _set____db54di;
  }
  function _get_closed__iwkfs1_0($this) {
    return $this.closed_1;
  }
  function complete($this, success) {
    var tmp$ret$2;
    // Inline function 'com.seiko.imageloader.util.synchronized' call
    var tmp0_synchronized = $this.$this_1.syncObject_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'kotlin.check' call
    var tmp0_check = !$this.closed_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.seiko.imageloader.cache.disk.Editor.complete.<anonymous>.<anonymous>' call
      tmp$ret$0 = 'editor is closed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (equals($this.entry_1.currentEditor_1, $this)) {
      completeEdit($this.$this_1, $this, success);
    }
    $this.closed_1 = true;
    tmp$ret$1 = Unit_getInstance();
    tmp$ret$2 = tmp$ret$1;
  }
  function _get_CLEAN__ylnxa0($this) {
    return $this.CLEAN_1;
  }
  function _get_DIRTY__y60zhd($this) {
    return $this.DIRTY_1;
  }
  function _get_REMOVE__3aymm1($this) {
    return $this.REMOVE_1;
  }
  function _get_READ__cuv33p($this) {
    return $this.READ_1;
  }
  function _get_LEGAL_KEY_PATTERN__v5vnwn($this) {
    return $this.LEGAL_KEY_PATTERN_1;
  }
  function sink$createDirectories(receiver, p0) {
    receiver.createDirectories$default_tnk8i5_k$(p0);
  }
  function _get_directory__hwved8_0($this) {
    return $this.directory_1;
  }
  function _get_maxSize__tb5fbo($this) {
    return $this.maxSize_1;
  }
  function _get_appVersion__jdhr04($this) {
    return $this.appVersion_1;
  }
  function _get_valueCount__8mgy0d($this) {
    return $this.valueCount_1;
  }
  function _get_journalFile__fg8j32($this) {
    return $this.journalFile_1;
  }
  function _get_journalFileTmp__l9i2tj($this) {
    return $this.journalFileTmp_1;
  }
  function _get_journalFileBackup__yrc0l8($this) {
    return $this.journalFileBackup_1;
  }
  function _get_lruEntries__vxc62y($this) {
    return $this.lruEntries_1;
  }
  function _get_cleanupScope__q7zg05($this) {
    return $this.cleanupScope_1;
  }
  function _set_size__9twho6($this, _set____db54di) {
    $this.size_1 = _set____db54di;
  }
  function _get_size__ddoh9m($this) {
    return $this.size_1;
  }
  function _set_operationsSinceRewrite__rjj4mf($this, _set____db54di) {
    $this.operationsSinceRewrite_1 = _set____db54di;
  }
  function _get_operationsSinceRewrite__5afo6r($this) {
    return $this.operationsSinceRewrite_1;
  }
  function _set_journalWriter__c6q7lx($this, _set____db54di) {
    $this.journalWriter_1 = _set____db54di;
  }
  function _get_journalWriter__rehq49($this) {
    return $this.journalWriter_1;
  }
  function _set_hasJournalErrors__x1nmxb($this, _set____db54di) {
    $this.hasJournalErrors_1 = _set____db54di;
  }
  function _get_hasJournalErrors__8wc5z1($this) {
    return $this.hasJournalErrors_1;
  }
  function _set_initialized__9jqmof($this, _set____db54di) {
    $this.initialized_1 = _set____db54di;
  }
  function _get_initialized__kqnjnh($this) {
    return $this.initialized_1;
  }
  function _set_closed__kdb0et_0($this, _set____db54di) {
    $this.closed_1 = _set____db54di;
  }
  function _get_closed__iwkfs1_1($this) {
    return $this.closed_1;
  }
  function _set_mostRecentTrimFailed__hbjli2($this, _set____db54di) {
    $this.mostRecentTrimFailed_1 = _set____db54di;
  }
  function _get_mostRecentTrimFailed__3dgxhq($this) {
    return $this.mostRecentTrimFailed_1;
  }
  function _set_mostRecentRebuildFailed__8rrm8l($this, _set____db54di) {
    $this.mostRecentRebuildFailed_1 = _set____db54di;
  }
  function _get_mostRecentRebuildFailed__t8x0i1($this) {
    return $this.mostRecentRebuildFailed_1;
  }
  function _get_syncObject__eretwv($this) {
    return $this.syncObject_1;
  }
  function _get_fileSystem__siywv4_0($this) {
    return $this.fileSystem_1;
  }
  function readJournal($this) {
    var tmp$ret$3;
    // Inline function 'okio.FileSystem.read' call
    var tmp1_read = $this.fileSystem_1;
    var tmp2_read = $this.journalFile_1;
    var tmp$ret$2;
    // Inline function 'okio.use' call
    var tmp0_use = buffer(tmp1_read.source_i9y171_k$(tmp2_read));
    var result = null;
    var thrown = null;
    try {
      var tmp$ret$1;
      // Inline function 'okio.FileSystem.read.<anonymous>' call
      var magic = tmp0_use.readUtf8LineStrict_40ilic_k$();
      var version = tmp0_use.readUtf8LineStrict_40ilic_k$();
      var appVersionString = tmp0_use.readUtf8LineStrict_40ilic_k$();
      var valueCountString = tmp0_use.readUtf8LineStrict_40ilic_k$();
      var blank = tmp0_use.readUtf8LineStrict_40ilic_k$();
      var tmp;
      var tmp_0;
      var tmp_1;
      var tmp_2;
      Companion_getInstance_12();
      if (!('libcore.io.DiskLruCache' === magic)) {
        tmp_2 = true;
      } else {
        Companion_getInstance_12();
        tmp_2 = !('1' === version);
      }
      if (tmp_2) {
        tmp_1 = true;
      } else {
        tmp_1 = !($this.appVersion_1.toString() === appVersionString);
      }
      if (tmp_1) {
        tmp_0 = true;
      } else {
        tmp_0 = !($this.valueCount_1.toString() === valueCountString);
      }
      if (tmp_0) {
        tmp = true;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.text.isNotEmpty' call
        tmp$ret$0 = charSequenceLength(blank) > 0;
        tmp = tmp$ret$0;
      }
      if (tmp) {
        throw IOException_init_$Create$('unexpected journal header: ' + ('[' + magic + ', ' + version + ', ' + appVersionString + ', ' + valueCountString + ', ' + blank + ']'));
      }
      var lineCount = 0;
      $l$loop: while (true) {
        try {
          readJournalLine($this, tmp0_use.readUtf8LineStrict_40ilic_k$());
          var tmp0 = lineCount;
          lineCount = tmp0 + 1 | 0;
        } catch ($p) {
          if ($p instanceof EOFException) {
            var _ = $p;
            break $l$loop;
          } else {
            throw $p;
          }
        }
      }
      $this.operationsSinceRewrite_1 = lineCount - $this.lruEntries_1.get_size_woubt6_k$() | 0;
      var tmp_3;
      if (!tmp0_use.exhausted_p1jt55_k$()) {
        writeJournal($this);
        tmp_3 = Unit_getInstance();
      } else {
        $this.journalWriter_1 = newJournalWriter($this);
        tmp_3 = Unit_getInstance();
      }
      tmp$ret$1 = tmp_3;
      result = Unit_getInstance();
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        thrown = t;
      } else {
        throw $p;
      }
    }
    finally {
      try {
        var tmp0_safe_receiver = tmp0_use;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.close_ymq55z_k$();
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var t_0 = $p;
          if (thrown == null)
            thrown = t_0;
          else {
            addSuppressed(thrown, t_0);
          }
        } else {
          throw $p;
        }
      }
    }
    if (!(thrown == null))
      throw thrown;
    tmp$ret$2 = ensureNotNull(result);
    tmp$ret$3 = tmp$ret$2;
  }
  function newJournalWriter($this) {
    var fileSink = $this.fileSystem_1.appendingSink$default_51iym0_k$($this.journalFile_1);
    var faultHidingSink = new FaultHidingSink(fileSink, DiskLruCache$newJournalWriter$lambda($this));
    return buffer_0(faultHidingSink);
  }
  function readJournalLine($this, line) {
    var firstSpace = indexOf(line, _Char___init__impl__6a9atx(32));
    if (firstSpace === -1)
      throw IOException_init_$Create$('unexpected journal line: ' + line);
    var keyBegin = firstSpace + 1 | 0;
    var secondSpace = indexOf(line, _Char___init__impl__6a9atx(32), keyBegin);
    var key;
    if (secondSpace === -1) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.substring' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = line;
      tmp$ret$1 = tmp$ret$0.substring(keyBegin);
      key = tmp$ret$1;
      var tmp;
      Companion_getInstance_12();
      if (firstSpace === 'REMOVE'.length) {
        Companion_getInstance_12();
        tmp = startsWith(line, 'REMOVE');
      } else {
        tmp = false;
      }
      if (tmp) {
        $this.lruEntries_1.remove_8hbkc0_k$(key);
        return Unit_getInstance();
      }
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.text.substring' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = line;
      tmp$ret$3 = tmp$ret$2.substring(keyBegin, secondSpace);
      key = tmp$ret$3;
    }
    var tmp$ret$5;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = $this.lruEntries_1;
    var value = tmp0_getOrPut.get_1mhr4y_k$(key);
    var tmp_0;
    if (value == null) {
      var tmp$ret$4;
      // Inline function 'com.seiko.imageloader.cache.disk.DiskLruCache.readJournalLine.<anonymous>' call
      tmp$ret$4 = new Entry($this, key);
      var answer = tmp$ret$4;
      tmp0_getOrPut.put_3mhbri_k$(key, answer);
      tmp_0 = answer;
    } else {
      tmp_0 = value;
    }
    tmp$ret$5 = tmp_0;
    var entry = tmp$ret$5;
    var tmp_1;
    var tmp_2;
    if (!(secondSpace === -1)) {
      Companion_getInstance_12();
      tmp_2 = firstSpace === 'CLEAN'.length;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      Companion_getInstance_12();
      tmp_1 = startsWith(line, 'CLEAN');
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp$ret$7;
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = secondSpace + 1 | 0;
      var tmp$ret$6;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$6 = line;
      tmp$ret$7 = tmp$ret$6.substring(tmp1_substring);
      var parts = split(tmp$ret$7, charArrayOf([_Char___init__impl__6a9atx(32)]));
      entry.readable_1 = true;
      entry.currentEditor_1 = null;
      entry.setLengths_cqit45_k$(parts);
    } else {
      var tmp_3;
      var tmp_4;
      if (secondSpace === -1) {
        Companion_getInstance_12();
        tmp_4 = firstSpace === 'DIRTY'.length;
      } else {
        tmp_4 = false;
      }
      if (tmp_4) {
        Companion_getInstance_12();
        tmp_3 = startsWith(line, 'DIRTY');
      } else {
        tmp_3 = false;
      }
      if (tmp_3) {
        entry.currentEditor_1 = new Editor_0($this, entry);
      } else {
        var tmp_5;
        var tmp_6;
        if (secondSpace === -1) {
          Companion_getInstance_12();
          tmp_6 = firstSpace === 'READ'.length;
        } else {
          tmp_6 = false;
        }
        if (tmp_6) {
          Companion_getInstance_12();
          tmp_5 = startsWith(line, 'READ');
        } else {
          tmp_5 = false;
        }
        if (tmp_5) {
        } else {
          throw IOException_init_$Create$('unexpected journal line: ' + line);
        }
      }
    }
  }
  function processJournal($this) {
    var size = new Long(0, 0);
    var iterator = $this.lruEntries_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (iterator.hasNext_bitz1p_k$()) {
      var entry = iterator.next_20eer_k$();
      if (entry.currentEditor_1 == null) {
        var inductionVariable = 0;
        var last = $this.valueCount_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            size = size.plus_u6jwas_k$(entry.lengths_1[i]);
          }
           while (inductionVariable < last);
      } else {
        entry.currentEditor_1 = null;
        var inductionVariable_0 = 0;
        var last_0 = $this.valueCount_1;
        if (inductionVariable_0 < last_0)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            $this.fileSystem_1.delete$default_7nynlj_k$(entry.cleanFiles_1.get_fkrdnv_k$(i_0));
            $this.fileSystem_1.delete$default_7nynlj_k$(entry.dirtyFiles_1.get_fkrdnv_k$(i_0));
          }
           while (inductionVariable_0 < last_0);
        iterator.remove_le47v1_k$();
      }
    }
    $this.size_1 = size;
  }
  function writeJournal($this) {
    var tmp0_safe_receiver = $this.journalWriter_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.close_ymq55z_k$();
    }
    var tmp$ret$11;
    // Inline function 'okio.FileSystem.write' call
    var tmp1_write = $this.fileSystem_1;
    var tmp2_write = $this.journalFileTmp_1;
    var tmp$ret$10;
    // Inline function 'okio.use' call
    var tmp0_use = buffer_0(tmp1_write.sink_kx3u5n_k$(tmp2_write, false));
    var result = null;
    var thrown = null;
    try {
      var tmp$ret$9;
      // Inline function 'okio.FileSystem.write.<anonymous>' call
      Companion_getInstance_12();
      var tmp = tmp0_use.writeUtf8_688wup_k$('libcore.io.DiskLruCache');
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 10;
      tmp.writeByte_fjn38a_k$(tmp$ret$0);
      Companion_getInstance_12();
      var tmp_0 = tmp0_use.writeUtf8_688wup_k$('1');
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 10;
      tmp_0.writeByte_fjn38a_k$(tmp$ret$1);
      var tmp_1 = tmp0_use.writeDecimalLong_mc98i0_k$(toLong($this.appVersion_1));
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = 10;
      tmp_1.writeByte_fjn38a_k$(tmp$ret$2);
      var tmp_2 = tmp0_use.writeDecimalLong_mc98i0_k$(toLong($this.valueCount_1));
      var tmp$ret$3;
      // Inline function 'kotlin.code' call
      tmp$ret$3 = 10;
      tmp_2.writeByte_fjn38a_k$(tmp$ret$3);
      var tmp$ret$4;
      // Inline function 'kotlin.code' call
      tmp$ret$4 = 10;
      tmp0_use.writeByte_fjn38a_k$(tmp$ret$4);
      var tmp0_iterator = $this.lruEntries_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var entry = tmp0_iterator.next_20eer_k$();
        if (!(entry.currentEditor_1 == null)) {
          Companion_getInstance_12();
          tmp0_use.writeUtf8_688wup_k$('DIRTY');
          var tmp$ret$5;
          // Inline function 'kotlin.code' call
          tmp$ret$5 = 32;
          tmp0_use.writeByte_fjn38a_k$(tmp$ret$5);
          tmp0_use.writeUtf8_688wup_k$(entry.key_1);
          var tmp$ret$6;
          // Inline function 'kotlin.code' call
          tmp$ret$6 = 10;
          tmp0_use.writeByte_fjn38a_k$(tmp$ret$6);
        } else {
          Companion_getInstance_12();
          tmp0_use.writeUtf8_688wup_k$('CLEAN');
          var tmp$ret$7;
          // Inline function 'kotlin.code' call
          tmp$ret$7 = 32;
          tmp0_use.writeByte_fjn38a_k$(tmp$ret$7);
          tmp0_use.writeUtf8_688wup_k$(entry.key_1);
          entry.writeLengths_qcxv0k_k$(tmp0_use);
          var tmp$ret$8;
          // Inline function 'kotlin.code' call
          tmp$ret$8 = 10;
          tmp0_use.writeByte_fjn38a_k$(tmp$ret$8);
        }
      }
      tmp$ret$9 = Unit_getInstance();
      result = Unit_getInstance();
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        thrown = t;
      } else {
        throw $p;
      }
    }
    finally {
      try {
        var tmp0_safe_receiver_0 = tmp0_use;
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          tmp0_safe_receiver_0.close_ymq55z_k$();
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var t_0 = $p;
          if (thrown == null)
            thrown = t_0;
          else {
            addSuppressed(thrown, t_0);
          }
        } else {
          throw $p;
        }
      }
    }
    if (!(thrown == null))
      throw thrown;
    tmp$ret$10 = ensureNotNull(result);
    tmp$ret$11 = tmp$ret$10;
    if ($this.fileSystem_1.exists_5k0sy6_k$($this.journalFile_1)) {
      $this.fileSystem_1.atomicMove_4s4vkh_k$($this.journalFile_1, $this.journalFileBackup_1);
      $this.fileSystem_1.atomicMove_4s4vkh_k$($this.journalFileTmp_1, $this.journalFile_1);
      $this.fileSystem_1.delete$default_7nynlj_k$($this.journalFileBackup_1);
    } else {
      $this.fileSystem_1.atomicMove_4s4vkh_k$($this.journalFileTmp_1, $this.journalFile_1);
    }
    $this.journalWriter_1 = newJournalWriter($this);
    $this.operationsSinceRewrite_1 = 0;
    $this.hasJournalErrors_1 = false;
    $this.mostRecentRebuildFailed_1 = false;
  }
  function completeEdit($this, editor, success) {
    var entry = editor.entry_1;
    // Inline function 'kotlin.check' call
    var tmp0_check = equals(entry.currentEditor_1, editor);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (success ? !entry.zombie_1 : false) {
      var inductionVariable = 0;
      var last = $this.valueCount_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (editor.written_1[i] ? !$this.fileSystem_1.exists_5k0sy6_k$(entry.dirtyFiles_1.get_fkrdnv_k$(i)) : false) {
            editor.abort_l9xn1b_k$();
            return Unit_getInstance();
          }
        }
         while (inductionVariable < last);
      var inductionVariable_0 = 0;
      var last_0 = $this.valueCount_1;
      if (inductionVariable_0 < last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var dirty = entry.dirtyFiles_1.get_fkrdnv_k$(i_0);
          var clean = entry.cleanFiles_1.get_fkrdnv_k$(i_0);
          if ($this.fileSystem_1.exists_5k0sy6_k$(dirty)) {
            $this.fileSystem_1.atomicMove_4s4vkh_k$(dirty, clean);
          } else {
            createFile($this.fileSystem_1, entry.cleanFiles_1.get_fkrdnv_k$(i_0));
          }
          var oldLength = entry.lengths_1[i_0];
          var tmp2_elvis_lhs = $this.fileSystem_1.metadata_6heaht_k$(clean).get_size_woubt6_k$();
          var newLength = tmp2_elvis_lhs == null ? new Long(0, 0) : tmp2_elvis_lhs;
          entry.lengths_1[i_0] = newLength;
          $this.size_1 = $this.size_1.minus_llf5ei_k$(oldLength).plus_u6jwas_k$(newLength);
        }
         while (inductionVariable_0 < last_0);
    } else {
      var inductionVariable_1 = 0;
      var last_1 = $this.valueCount_1;
      if (inductionVariable_1 < last_1)
        do {
          var i_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          $this.fileSystem_1.delete$default_7nynlj_k$(entry.dirtyFiles_1.get_fkrdnv_k$(i_1));
        }
         while (inductionVariable_1 < last_1);
    }
    entry.currentEditor_1 = null;
    if (entry.zombie_1) {
      removeEntry($this, entry);
      return Unit_getInstance();
    }
    var tmp4_this = $this;
    var tmp5 = tmp4_this.operationsSinceRewrite_1;
    tmp4_this.operationsSinceRewrite_1 = tmp5 + 1 | 0;
    var tmp$ret$5;
    // Inline function 'kotlin.apply' call
    var tmp1_apply = ensureNotNull($this.journalWriter_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.seiko.imageloader.cache.disk.DiskLruCache.completeEdit.<anonymous>' call
    if (success ? true : entry.readable_1) {
      entry.readable_1 = true;
      Companion_getInstance_12();
      tmp1_apply.writeUtf8_688wup_k$('CLEAN');
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 32;
      tmp1_apply.writeByte_fjn38a_k$(tmp$ret$1);
      tmp1_apply.writeUtf8_688wup_k$(entry.key_1);
      entry.writeLengths_qcxv0k_k$(tmp1_apply);
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = 10;
      tmp1_apply.writeByte_fjn38a_k$(tmp$ret$2);
    } else {
      $this.lruEntries_1.remove_8hbkc0_k$(entry.key_1);
      Companion_getInstance_12();
      tmp1_apply.writeUtf8_688wup_k$('REMOVE');
      var tmp$ret$3;
      // Inline function 'kotlin.code' call
      tmp$ret$3 = 32;
      tmp1_apply.writeByte_fjn38a_k$(tmp$ret$3);
      tmp1_apply.writeUtf8_688wup_k$(entry.key_1);
      var tmp$ret$4;
      // Inline function 'kotlin.code' call
      tmp$ret$4 = 10;
      tmp1_apply.writeByte_fjn38a_k$(tmp$ret$4);
    }
    tmp1_apply.flush_sgqoqb_k$();
    tmp$ret$5 = tmp1_apply;
    if ($this.size_1.compareTo_n4fqi2_k$($this.maxSize_1) > 0 ? true : journalRewriteRequired($this)) {
      launchCleanup($this);
    }
  }
  function journalRewriteRequired($this) {
    return $this.operationsSinceRewrite_1 >= 2000;
  }
  function removeEntry($this, entry) {
    if (entry.lockingSnapshotCount_1 > 0) {
      var tmp0_safe_receiver = $this.journalWriter_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$2;
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.seiko.imageloader.cache.disk.DiskLruCache.removeEntry.<anonymous>' call
        Companion_getInstance_12();
        tmp0_safe_receiver.writeUtf8_688wup_k$('DIRTY');
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = 32;
        tmp0_safe_receiver.writeByte_fjn38a_k$(tmp$ret$0);
        tmp0_safe_receiver.writeUtf8_688wup_k$(entry.key_1);
        var tmp$ret$1;
        // Inline function 'kotlin.code' call
        tmp$ret$1 = 10;
        tmp0_safe_receiver.writeByte_fjn38a_k$(tmp$ret$1);
        tmp0_safe_receiver.flush_sgqoqb_k$();
        tmp$ret$2 = tmp0_safe_receiver;
      }
    }
    if (entry.lockingSnapshotCount_1 > 0 ? true : !(entry.currentEditor_1 == null)) {
      entry.zombie_1 = true;
      return true;
    }
    var tmp1_safe_receiver = entry.currentEditor_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.detach_fasf5q_k$();
    }
    var inductionVariable = 0;
    var last = $this.valueCount_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $this.fileSystem_1.delete$default_7nynlj_k$(entry.cleanFiles_1.get_fkrdnv_k$(i));
        var tmp3_this = $this;
        tmp3_this.size_1 = tmp3_this.size_1.minus_llf5ei_k$(entry.lengths_1[i]);
        entry.lengths_1[i] = new Long(0, 0);
      }
       while (inductionVariable < last);
    var tmp4_this = $this;
    var tmp5 = tmp4_this.operationsSinceRewrite_1;
    tmp4_this.operationsSinceRewrite_1 = tmp5 + 1 | 0;
    var tmp6_safe_receiver = $this.journalWriter_1;
    if (tmp6_safe_receiver == null)
      null;
    else {
      var tmp$ret$5;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.seiko.imageloader.cache.disk.DiskLruCache.removeEntry.<anonymous>' call
      Companion_getInstance_12();
      tmp6_safe_receiver.writeUtf8_688wup_k$('REMOVE');
      var tmp$ret$3;
      // Inline function 'kotlin.code' call
      tmp$ret$3 = 32;
      tmp6_safe_receiver.writeByte_fjn38a_k$(tmp$ret$3);
      tmp6_safe_receiver.writeUtf8_688wup_k$(entry.key_1);
      var tmp$ret$4;
      // Inline function 'kotlin.code' call
      tmp$ret$4 = 10;
      tmp6_safe_receiver.writeByte_fjn38a_k$(tmp$ret$4);
      tmp$ret$5 = tmp6_safe_receiver;
    }
    $this.lruEntries_1.remove_8hbkc0_k$(entry.key_1);
    if (journalRewriteRequired($this)) {
      launchCleanup($this);
    }
    return true;
  }
  function checkNotClosed($this) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !$this.closed_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.seiko.imageloader.cache.disk.DiskLruCache.checkNotClosed.<anonymous>' call
      tmp$ret$0 = 'cache is closed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function trimToSize($this) {
    while ($this.size_1.compareTo_n4fqi2_k$($this.maxSize_1) > 0) {
      if (!removeOldestEntry($this))
        return Unit_getInstance();
    }
    $this.mostRecentTrimFailed_1 = false;
  }
  function removeOldestEntry($this) {
    var tmp0_iterator = $this.lruEntries_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var toEvict = tmp0_iterator.next_20eer_k$();
      if (!toEvict.zombie_1) {
        removeEntry($this, toEvict);
        return true;
      }
    }
    return false;
  }
  function delete_0($this) {
    $this.close_ymq55z_k$();
    deleteContents($this.fileSystem_1, $this.directory_1);
  }
  function launchCleanup($this) {
    launch($this.cleanupScope_1, VOID, VOID, DiskLruCache$launchCleanup$slambda_0($this, null));
  }
  function validateKey($this, key) {
    // Inline function 'kotlin.require' call
    var tmp0_require = Companion_getInstance_12().LEGAL_KEY_PATTERN_1.matches_qvb2fs_k$(key);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.seiko.imageloader.cache.disk.DiskLruCache.validateKey.<anonymous>' call
      tmp$ret$0 = 'keys must match regex [a-z0-9_-]{1,120}: "' + key + '"';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function Snapshot_0($outer, entry) {
    this.$this_1 = $outer;
    this.entry_1 = entry;
    this.closed_1 = new AtomicBoolean(false);
  }
  protoOf(Snapshot_0).file_a4wb23_k$ = function (index) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.closed_1.get_26vq_k$();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.seiko.imageloader.cache.disk.Snapshot.file.<anonymous>' call
      tmp$ret$0 = 'snapshot is closed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return this.entry_1.cleanFiles_1.get_fkrdnv_k$(index);
  };
  protoOf(Snapshot_0).close_ymq55z_k$ = function () {
    if (this.closed_1.compareAndSet_34bjtc_k$(false, true)) {
      var tmp$ret$1;
      // Inline function 'com.seiko.imageloader.util.synchronized' call
      var tmp0_synchronized = this.$this_1.syncObject_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp0_this = this.entry_1;
      var tmp1 = tmp0_this.lockingSnapshotCount_1;
      tmp0_this.lockingSnapshotCount_1 = tmp1 - 1 | 0;
      var tmp;
      if (this.entry_1.lockingSnapshotCount_1 === 0 ? this.entry_1.zombie_1 : false) {
        removeEntry(this.$this_1, this.entry_1);
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
    }
  };
  protoOf(Snapshot_0).closeAndEdit_yimkix_k$ = function () {
    var tmp$ret$1;
    // Inline function 'com.seiko.imageloader.util.synchronized' call
    var tmp0_synchronized = this.$this_1.syncObject_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.close_ymq55z_k$();
    return this.$this_1.edit_e8aybt_k$(this.entry_1.key_1);
    tmp$ret$1 = tmp$ret$0;
  };
  function Editor_0($outer, entry) {
    this.$this_1 = $outer;
    this.entry_1 = entry;
    this.closed_1 = false;
    this.written_1 = booleanArray(this.$this_1.valueCount_1);
  }
  protoOf(Editor_0).get_entry_iqxd1l_k$ = function () {
    return this.entry_1;
  };
  protoOf(Editor_0).get_written_rry7fy_k$ = function () {
    return this.written_1;
  };
  protoOf(Editor_0).file_a4wb23_k$ = function (index) {
    var tmp$ret$3;
    // Inline function 'com.seiko.imageloader.util.synchronized' call
    var tmp0_synchronized = this.$this_1.syncObject_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.closed_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.seiko.imageloader.cache.disk.Editor.file.<anonymous>.<anonymous>' call
      tmp$ret$0 = 'editor is closed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.written_1[index] = true;
    var tmp$ret$1;
    // Inline function 'kotlin.also' call
    var tmp1_also = this.entry_1.dirtyFiles_1.get_fkrdnv_k$(index);
    var tmp2_also = this.$this_1.fileSystem_1;
    // Inline function 'kotlin.contracts.contract' call
    createFile(tmp2_also, tmp1_also);
    tmp$ret$1 = tmp1_also;
    return tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
  };
  protoOf(Editor_0).detach_fasf5q_k$ = function () {
    if (equals(this.entry_1.currentEditor_1, this)) {
      this.entry_1.zombie_1 = true;
    }
  };
  protoOf(Editor_0).commit_vp98fa_k$ = function () {
    return complete(this, true);
  };
  protoOf(Editor_0).commitAndGet_ki4bmy_k$ = function () {
    var tmp$ret$1;
    // Inline function 'com.seiko.imageloader.util.synchronized' call
    var tmp0_synchronized = this.$this_1.syncObject_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.commit_vp98fa_k$();
    return this.$this_1.get_4u8u51_k$(this.entry_1.key_1);
    tmp$ret$1 = tmp$ret$0;
  };
  protoOf(Editor_0).abort_l9xn1b_k$ = function () {
    return complete(this, false);
  };
  function Entry($outer, key) {
    this.$this_1 = $outer;
    this.key_1 = key;
    this.lengths_1 = longArray(this.$this_1.valueCount_1);
    this.cleanFiles_1 = ArrayList_init_$Create$(this.$this_1.valueCount_1);
    this.dirtyFiles_1 = ArrayList_init_$Create$(this.$this_1.valueCount_1);
    this.readable_1 = false;
    this.zombie_1 = false;
    this.currentEditor_1 = null;
    this.lockingSnapshotCount_1 = 0;
    var fileBuilder = (new StringBuilder(this.key_1)).append_t8oh9e_k$(_Char___init__impl__6a9atx(46));
    var truncateTo = fileBuilder.get_length_g42xv3_k$();
    var inductionVariable = 0;
    var last = this.$this_1.valueCount_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        fileBuilder.append_t8pm91_k$(i);
        var tmp1_this = this;
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp0_plusAssign = tmp1_this.cleanFiles_1;
        var tmp1_plusAssign = this.$this_1.directory_1.div_otgkuo_k$(fileBuilder.toString());
        tmp0_plusAssign.add_1j60pz_k$(tmp1_plusAssign);
        fileBuilder.append_ssq29y_k$('.tmp');
        var tmp2_this = this;
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp2_plusAssign = tmp2_this.dirtyFiles_1;
        var tmp3_plusAssign = this.$this_1.directory_1.div_otgkuo_k$(fileBuilder.toString());
        tmp2_plusAssign.add_1j60pz_k$(tmp3_plusAssign);
        fileBuilder.setLength_kzn4fs_k$(truncateTo);
      }
       while (inductionVariable < last);
  }
  protoOf(Entry).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(Entry).get_lengths_2aqs10_k$ = function () {
    return this.lengths_1;
  };
  protoOf(Entry).get_cleanFiles_yknzyh_k$ = function () {
    return this.cleanFiles_1;
  };
  protoOf(Entry).get_dirtyFiles_boy8e_k$ = function () {
    return this.dirtyFiles_1;
  };
  protoOf(Entry).set_readable_yh2tb8_k$ = function (_set____db54di) {
    this.readable_1 = _set____db54di;
  };
  protoOf(Entry).get_readable_ovw33t_k$ = function () {
    return this.readable_1;
  };
  protoOf(Entry).set_zombie_oluwpm_k$ = function (_set____db54di) {
    this.zombie_1 = _set____db54di;
  };
  protoOf(Entry).get_zombie_mw6ucv_k$ = function () {
    return this.zombie_1;
  };
  protoOf(Entry).set_currentEditor_czjtqq_k$ = function (_set____db54di) {
    this.currentEditor_1 = _set____db54di;
  };
  protoOf(Entry).get_currentEditor_t0a8t9_k$ = function () {
    return this.currentEditor_1;
  };
  protoOf(Entry).set_lockingSnapshotCount_fvhe4h_k$ = function (_set____db54di) {
    this.lockingSnapshotCount_1 = _set____db54di;
  };
  protoOf(Entry).get_lockingSnapshotCount_rgcd3x_k$ = function () {
    return this.lockingSnapshotCount_1;
  };
  protoOf(Entry).setLengths_cqit45_k$ = function (strings) {
    if (!(strings.get_size_woubt6_k$() === this.$this_1.valueCount_1)) {
      throw IOException_init_$Create$('unexpected journal line: ' + strings);
    }
    try {
      var inductionVariable = 0;
      var last = strings.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          this.lengths_1[i] = toLong_0(strings.get_fkrdnv_k$(i));
        }
         while (inductionVariable <= last);
    } catch ($p) {
      if ($p instanceof NumberFormatException) {
        var _ = $p;
        throw IOException_init_$Create$('unexpected journal line: ' + strings);
      } else {
        throw $p;
      }
    }
  };
  protoOf(Entry).writeLengths_qcxv0k_k$ = function (writer) {
    var indexedObject = this.lengths_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var length = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 32;
      writer.writeByte_fjn38a_k$(tmp$ret$0).writeDecimalLong_mc98i0_k$(length);
    }
  };
  protoOf(Entry).snapshot_4plubo_k$ = function () {
    if (!this.readable_1)
      return null;
    if (!(this.currentEditor_1 == null) ? true : this.zombie_1)
      return null;
    // Inline function 'com.seiko.imageloader.util.forEachIndices' call
    var tmp0_forEachIndices = this.cleanFiles_1;
    var inductionVariable = 0;
    var last = tmp0_forEachIndices.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'com.seiko.imageloader.cache.disk.Entry.snapshot.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_forEachIndices.get_fkrdnv_k$(i);
        if (!this.$this_1.fileSystem_1.exists_5k0sy6_k$(tmp1__anonymous__uwfjfc)) {
          try {
            removeEntry(this.$this_1, this);
          } catch ($p) {
            if ($p instanceof IOException) {
              var _ = $p;
            } else {
              throw $p;
            }
          }
          return null;
        }
      }
       while (inductionVariable <= last);
    var tmp0_this = this;
    var tmp1 = tmp0_this.lockingSnapshotCount_1;
    tmp0_this.lockingSnapshotCount_1 = tmp1 + 1 | 0;
    return new Snapshot_0(this.$this_1, this);
  };
  function Companion() {
    Companion_instance = this;
    this.JOURNAL_FILE_1 = 'journal';
    this.JOURNAL_FILE_TMP_1 = 'journal.tmp';
    this.JOURNAL_FILE_BACKUP_1 = 'journal.bkp';
    this.MAGIC_1 = 'libcore.io.DiskLruCache';
    this.VERSION_1 = '1';
    this.CLEAN_1 = 'CLEAN';
    this.DIRTY_1 = 'DIRTY';
    this.REMOVE_1 = 'REMOVE';
    this.READ_1 = 'READ';
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.text.toRegex' call
    tmp$ret$0 = Regex_init_$Create$('[a-z\\d_-]{1,120}');
    tmp.LEGAL_KEY_PATTERN_1 = tmp$ret$0;
  }
  protoOf(Companion).get_JOURNAL_FILE_vtvrvx_k$ = function () {
    return this.JOURNAL_FILE_1;
  };
  protoOf(Companion).get_JOURNAL_FILE_TMP_qfab39_k$ = function () {
    return this.JOURNAL_FILE_TMP_1;
  };
  protoOf(Companion).get_JOURNAL_FILE_BACKUP_sdq17w_k$ = function () {
    return this.JOURNAL_FILE_BACKUP_1;
  };
  protoOf(Companion).get_MAGIC_icwm04_k$ = function () {
    return this.MAGIC_1;
  };
  protoOf(Companion).get_VERSION_iyczin_k$ = function () {
    return this.VERSION_1;
  };
  var Companion_instance;
  function Companion_getInstance_12() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function DiskLruCache$fileSystem$1($fileSystem) {
    ForwardingFileSystem.call(this, $fileSystem);
  }
  protoOf(DiskLruCache$fileSystem$1).sink_kx3u5n_k$ = function (file, mustCreate) {
    var tmp0_safe_receiver = file.get_parent_hy4reb_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      sink$createDirectories(this, tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    return protoOf(ForwardingFileSystem).sink_kx3u5n_k$.call(this, file, mustCreate);
  };
  function DiskLruCache$newJournalWriter$lambda(this$0) {
    return function (it) {
      this$0.hasJournalErrors_1 = true;
      return Unit_getInstance();
    };
  }
  function DiskLruCache$launchCleanup$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DiskLruCache$launchCleanup$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DiskLruCache$launchCleanup$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DiskLruCache$launchCleanup$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          var tmp0_synchronized = this.this$0__1.syncObject_1;
          if (!this.this$0__1.initialized_1 ? true : this.this$0__1.closed_1)
            return Unit_getInstance();
          try {
            trimToSize(this.this$0__1);
          } catch ($p) {
            if ($p instanceof IOException) {
              var _ = $p;
              this.this$0__1.mostRecentTrimFailed_1 = true;
            } else {
              throw $p;
            }
          }
          try {
            if (journalRewriteRequired(this.this$0__1)) {
              writeJournal(this.this$0__1);
            }
          } catch ($p) {
            if ($p instanceof IOException) {
              var __0 = $p;
              this.this$0__1.mostRecentRebuildFailed_1 = true;
              this.this$0__1.journalWriter_1 = buffer_0(blackholeSink());
            } else {
              throw $p;
            }
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(DiskLruCache$launchCleanup$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new DiskLruCache$launchCleanup$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(DiskLruCache$launchCleanup$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function DiskLruCache$launchCleanup$slambda_0(this$0, resultContinuation) {
    var i = new DiskLruCache$launchCleanup$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DiskLruCache(fileSystem, directory, cleanupDispatcher, maxSize, appVersion, valueCount) {
    Companion_getInstance_12();
    this.directory_1 = directory;
    this.maxSize_1 = maxSize;
    this.appVersion_1 = appVersion;
    this.valueCount_1 = valueCount;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.maxSize_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.seiko.imageloader.cache.disk.DiskLruCache.<anonymous>' call
      tmp$ret$0 = 'maxSize <= 0';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = this.valueCount_1 > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'com.seiko.imageloader.cache.disk.DiskLruCache.<anonymous>' call
      tmp$ret$1 = 'valueCount <= 0';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp = this;
    Companion_getInstance_12();
    tmp.journalFile_1 = this.directory_1.div_otgkuo_k$('journal');
    var tmp_0 = this;
    Companion_getInstance_12();
    tmp_0.journalFileTmp_1 = this.directory_1.div_otgkuo_k$('journal.tmp');
    var tmp_1 = this;
    Companion_getInstance_12();
    tmp_1.journalFileBackup_1 = this.directory_1.div_otgkuo_k$('journal.bkp');
    this.lruEntries_1 = LinkedHashMap_init_$Create$(5, 0.75);
    this.cleanupScope_1 = CoroutineScope_0(SupervisorJob().plus_rgw9wi_k$(cleanupDispatcher.limitedParallelism_glrman_k$(1)));
    this.size_1 = new Long(0, 0);
    this.operationsSinceRewrite_1 = 0;
    this.journalWriter_1 = null;
    this.hasJournalErrors_1 = false;
    this.initialized_1 = false;
    this.closed_1 = false;
    this.mostRecentTrimFailed_1 = false;
    this.mostRecentRebuildFailed_1 = false;
    this.syncObject_1 = new Object();
    var tmp_2 = this;
    tmp_2.fileSystem_1 = new DiskLruCache$fileSystem$1(fileSystem);
  }
  protoOf(DiskLruCache).initialize_oabr29_k$ = function () {
    if (this.initialized_1)
      return Unit_getInstance();
    this.fileSystem_1.delete$default_7nynlj_k$(this.journalFileTmp_1);
    if (this.fileSystem_1.exists_5k0sy6_k$(this.journalFileBackup_1)) {
      if (this.fileSystem_1.exists_5k0sy6_k$(this.journalFile_1)) {
        this.fileSystem_1.delete$default_7nynlj_k$(this.journalFileBackup_1);
      } else {
        this.fileSystem_1.atomicMove_4s4vkh_k$(this.journalFileBackup_1, this.journalFile_1);
      }
    }
    if (this.fileSystem_1.exists_5k0sy6_k$(this.journalFile_1)) {
      try {
        readJournal(this);
        processJournal(this);
        this.initialized_1 = true;
        return Unit_getInstance();
      } catch ($p) {
        if ($p instanceof IOException) {
          var _ = $p;
        } else {
          throw $p;
        }
      }
      try {
        delete_0(this);
      }finally {
        this.closed_1 = false;
      }
    }
    writeJournal(this);
    this.initialized_1 = true;
  };
  protoOf(DiskLruCache).get_4u8u51_k$ = function (key) {
    checkNotClosed(this);
    validateKey(this, key);
    this.initialize_oabr29_k$();
    var tmp0_safe_receiver = this.lruEntries_1.get_1mhr4y_k$(key);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.snapshot_4plubo_k$();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var snapshot = tmp;
    var tmp2_this = this;
    var tmp3 = tmp2_this.operationsSinceRewrite_1;
    tmp2_this.operationsSinceRewrite_1 = tmp3 + 1 | 0;
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = ensureNotNull(this.journalWriter_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.seiko.imageloader.cache.disk.DiskLruCache.get.<anonymous>' call
    Companion_getInstance_12();
    tmp0_apply.writeUtf8_688wup_k$('READ');
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = 32;
    tmp0_apply.writeByte_fjn38a_k$(tmp$ret$0);
    tmp0_apply.writeUtf8_688wup_k$(key);
    var tmp$ret$1;
    // Inline function 'kotlin.code' call
    tmp$ret$1 = 10;
    tmp0_apply.writeByte_fjn38a_k$(tmp$ret$1);
    tmp$ret$2 = tmp0_apply;
    if (journalRewriteRequired(this)) {
      launchCleanup(this);
    }
    return snapshot;
  };
  protoOf(DiskLruCache).edit_e8aybt_k$ = function (key) {
    checkNotClosed(this);
    validateKey(this, key);
    this.initialize_oabr29_k$();
    var entry = this.lruEntries_1.get_1mhr4y_k$(key);
    var tmp0_safe_receiver = entry;
    if (!((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.currentEditor_1) == null)) {
      return null;
    }
    if (!(entry == null) ? !(entry.lockingSnapshotCount_1 === 0) : false) {
      return null;
    }
    if (this.mostRecentTrimFailed_1 ? true : this.mostRecentRebuildFailed_1) {
      launchCleanup(this);
      return null;
    }
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = ensureNotNull(this.journalWriter_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.seiko.imageloader.cache.disk.DiskLruCache.edit.<anonymous>' call
    Companion_getInstance_12();
    tmp0_apply.writeUtf8_688wup_k$('DIRTY');
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = 32;
    tmp0_apply.writeByte_fjn38a_k$(tmp$ret$0);
    tmp0_apply.writeUtf8_688wup_k$(key);
    var tmp$ret$1;
    // Inline function 'kotlin.code' call
    tmp$ret$1 = 10;
    tmp0_apply.writeByte_fjn38a_k$(tmp$ret$1);
    tmp0_apply.flush_sgqoqb_k$();
    tmp$ret$2 = tmp0_apply;
    if (this.hasJournalErrors_1) {
      return null;
    }
    if (entry == null) {
      entry = new Entry(this, key);
      // Inline function 'kotlin.collections.set' call
      var tmp1_set = this.lruEntries_1;
      var tmp2_set = entry;
      tmp1_set.put_3mhbri_k$(key, tmp2_set);
    }
    var editor = new Editor_0(this, entry);
    entry.currentEditor_1 = editor;
    return editor;
  };
  protoOf(DiskLruCache).size_23och_k$ = function () {
    this.initialize_oabr29_k$();
    return this.size_1;
  };
  protoOf(DiskLruCache).remove_kj1003_k$ = function (key) {
    checkNotClosed(this);
    validateKey(this, key);
    this.initialize_oabr29_k$();
    var tmp0_elvis_lhs = this.lruEntries_1.get_1mhr4y_k$(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var entry = tmp;
    var removed = removeEntry(this, entry);
    if (removed ? this.size_1.compareTo_n4fqi2_k$(this.maxSize_1) <= 0 : false)
      this.mostRecentTrimFailed_1 = false;
    return removed;
  };
  protoOf(DiskLruCache).close_ymq55z_k$ = function () {
    if (!this.initialized_1 ? true : this.closed_1) {
      this.closed_1 = true;
      return Unit_getInstance();
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = this.lruEntries_1.get_values_ksazhn_k$();
    tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    var indexedObject = tmp$ret$0;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var entry = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (!(entry.currentEditor_1 == null)) {
        var tmp1_safe_receiver = entry.currentEditor_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          tmp1_safe_receiver.detach_fasf5q_k$();
        }
      }
    }
    trimToSize(this);
    cancel(this.cleanupScope_1);
    ensureNotNull(this.journalWriter_1).close_ymq55z_k$();
    this.journalWriter_1 = null;
    this.closed_1 = true;
  };
  protoOf(DiskLruCache).evictAll_sd7znr_k$ = function () {
    this.initialize_oabr29_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = this.lruEntries_1.get_values_ksazhn_k$();
    tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    var indexedObject = tmp$ret$0;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var entry = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      removeEntry(this, entry);
    }
    this.mostRecentTrimFailed_1 = false;
  };
  function _get_onException__a5todb($this) {
    return $this.onException_1;
  }
  function _set_hasErrors__t94ssg($this, _set____db54di) {
    $this.hasErrors_1 = _set____db54di;
  }
  function _get_hasErrors__ch4ss4($this) {
    return $this.hasErrors_1;
  }
  function FaultHidingSink(delegate, onException) {
    ForwardingSink.call(this, delegate);
    this.onException_1 = onException;
    this.hasErrors_1 = false;
  }
  protoOf(FaultHidingSink).write_x0zrut_k$ = function (source, byteCount) {
    if (this.hasErrors_1) {
      source.skip_vl0dd4_k$(byteCount);
      return Unit_getInstance();
    }
    try {
      protoOf(ForwardingSink).write_x0zrut_k$.call(this, source, byteCount);
    } catch ($p) {
      if ($p instanceof IOException) {
        var e = $p;
        this.hasErrors_1 = true;
        this.onException_1(e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(FaultHidingSink).flush_sgqoqb_k$ = function () {
    try {
      protoOf(ForwardingSink).flush_sgqoqb_k$.call(this);
    } catch ($p) {
      if ($p instanceof IOException) {
        var e = $p;
        this.hasErrors_1 = true;
        this.onException_1(e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(FaultHidingSink).close_ymq55z_k$ = function () {
    try {
      protoOf(ForwardingSink).close_ymq55z_k$.call(this);
    } catch ($p) {
      if ($p instanceof IOException) {
        var e = $p;
        this.hasErrors_1 = true;
        this.onException_1(e);
      } else {
        throw $p;
      }
    }
  };
  function _get_snapshot__shtuvb($this) {
    return $this.snapshot_1;
  }
  function _get_editor__6kl8ou($this) {
    return $this.editor_1;
  }
  function _get_ENTRY_METADATA__qj5p1r($this) {
    return $this.ENTRY_METADATA_1;
  }
  function _get_ENTRY_DATA__65kstw($this) {
    return $this.ENTRY_DATA_1;
  }
  function _get_cache__j44d4h($this) {
    return $this.cache_1;
  }
  function hash(_this__u8e3s4, $this) {
    return Companion_getInstance_0().encodeUtf8_lzqk50_k$(_this__u8e3s4).sha256_exzwt5_k$().hex_27mj_k$();
  }
  function RealSnapshot(snapshot) {
    this.snapshot_1 = snapshot;
  }
  protoOf(RealSnapshot).get_metadata_vs95vc_k$ = function () {
    Companion_getInstance_13();
    return this.snapshot_1.file_a4wb23_k$(0);
  };
  protoOf(RealSnapshot).get_data_wokkxf_k$ = function () {
    Companion_getInstance_13();
    return this.snapshot_1.file_a4wb23_k$(1);
  };
  protoOf(RealSnapshot).close_ymq55z_k$ = function () {
    return this.snapshot_1.close_ymq55z_k$();
  };
  protoOf(RealSnapshot).closeAndEdit_yimkix_k$ = function () {
    var tmp0_safe_receiver = this.snapshot_1.closeAndEdit_yimkix_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = new RealEditor(tmp0_safe_receiver);
      tmp = tmp$ret$0;
    }
    return tmp;
  };
  function RealEditor(editor) {
    this.editor_1 = editor;
  }
  protoOf(RealEditor).get_metadata_vs95vc_k$ = function () {
    Companion_getInstance_13();
    return this.editor_1.file_a4wb23_k$(0);
  };
  protoOf(RealEditor).get_data_wokkxf_k$ = function () {
    Companion_getInstance_13();
    return this.editor_1.file_a4wb23_k$(1);
  };
  protoOf(RealEditor).commit_vp98fa_k$ = function () {
    return this.editor_1.commit_vp98fa_k$();
  };
  protoOf(RealEditor).commitAndGet_ki4bmy_k$ = function () {
    var tmp0_safe_receiver = this.editor_1.commitAndGet_ki4bmy_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = new RealSnapshot(tmp0_safe_receiver);
      tmp = tmp$ret$0;
    }
    return tmp;
  };
  protoOf(RealEditor).abort_l9xn1b_k$ = function () {
    return this.editor_1.abort_l9xn1b_k$();
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.ENTRY_METADATA_1 = 0;
    this.ENTRY_DATA_1 = 1;
  }
  var Companion_instance_0;
  function Companion_getInstance_13() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function RealDiskCache(maxSize, directory, fileSystem, cleanupDispatcher) {
    Companion_getInstance_13();
    this.maxSize_1 = maxSize;
    this.directory_1 = directory;
    this.fileSystem_1 = fileSystem;
    this.cache_1 = new DiskLruCache(this.fileSystem_1, this.directory_1, cleanupDispatcher, this.maxSize_1, 1, 2);
  }
  protoOf(RealDiskCache).get_maxSize_f83j4s_k$ = function () {
    return this.maxSize_1;
  };
  protoOf(RealDiskCache).get_directory_7ekq4c_k$ = function () {
    return this.directory_1;
  };
  protoOf(RealDiskCache).get_fileSystem_9p6nv8_k$ = function () {
    return this.fileSystem_1;
  };
  protoOf(RealDiskCache).get_size_woubt6_k$ = function () {
    return this.cache_1.size_23och_k$();
  };
  protoOf(RealDiskCache).get_4u8u51_k$ = function (key) {
    var tmp0_safe_receiver = this.cache_1.get_4u8u51_k$(hash(key, this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = new RealSnapshot(tmp0_safe_receiver);
      tmp = tmp$ret$0;
    }
    return tmp;
  };
  protoOf(RealDiskCache).edit_e8aybt_k$ = function (key) {
    var tmp0_safe_receiver = this.cache_1.edit_e8aybt_k$(hash(key, this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = new RealEditor(tmp0_safe_receiver);
      tmp = tmp$ret$0;
    }
    return tmp;
  };
  protoOf(RealDiskCache).remove_kj1003_k$ = function (key) {
    return this.cache_1.remove_kj1003_k$(hash(key, this));
  };
  protoOf(RealDiskCache).clear_j9y8zo_k$ = function () {
    this.cache_1.evictAll_sd7znr_k$();
  };
  function MemoryCache() {
  }
  function _set_maxSizeBytes__bar9an_0($this, _set____db54di) {
    $this.maxSizeBytes_1 = _set____db54di;
  }
  function _get_maxSizeBytes__48zh9h_0($this) {
    return $this.maxSizeBytes_1;
  }
  function _set_strongReferencesEnabled__5s1k3n($this, _set____db54di) {
    $this.strongReferencesEnabled_1 = _set____db54di;
  }
  function _get_strongReferencesEnabled__ep3u5t($this) {
    return $this.strongReferencesEnabled_1;
  }
  function _set_weakReferencesEnabled__435hng($this, _set____db54di) {
    $this.weakReferencesEnabled_1 = _set____db54di;
  }
  function _get_weakReferencesEnabled__a8ru34($this) {
    return $this.weakReferencesEnabled_1;
  }
  function get_$stableprop_3() {
    return 8;
  }
  function MemoryCacheBuilder() {
    this.maxSizeBytes_1 = 0;
    this.strongReferencesEnabled_1 = true;
    this.weakReferencesEnabled_1 = true;
    this.$stable_1 = 8;
  }
  protoOf(MemoryCacheBuilder).maxSizeBytes_tju0p6_k$ = function (size) {
    // Inline function 'kotlin.require' call
    var tmp0_require = size >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.seiko.imageloader.cache.memory.MemoryCacheBuilder.maxSizeBytes.<anonymous>' call
      tmp$ret$0 = 'size must be >= 0.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.maxSizeBytes_1 = size;
  };
  protoOf(MemoryCacheBuilder).strongReferencesEnabled_oiacd5_k$ = function (enable) {
    this.strongReferencesEnabled_1 = enable;
  };
  protoOf(MemoryCacheBuilder).weakReferencesEnabled_6d6czc_k$ = function (enable) {
    this.weakReferencesEnabled_1 = enable;
  };
  protoOf(MemoryCacheBuilder).build_1k0s4u_k$ = function () {
    var tmp;
    if (this.weakReferencesEnabled_1) {
      tmp = new RealWeakMemoryCache();
    } else {
      tmp = EmptyWeakMemoryCache_getInstance();
    }
    var weakMemoryCache = tmp;
    var tmp_0;
    if (this.strongReferencesEnabled_1) {
      var tmp_1;
      if (this.maxSizeBytes_1 > 0) {
        tmp_1 = new RealStrongMemoryCache(this.maxSizeBytes_1, weakMemoryCache);
      } else {
        tmp_1 = new EmptyStrongMemoryCache(weakMemoryCache);
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = new EmptyStrongMemoryCache(weakMemoryCache);
    }
    var strongMemoryCache = tmp_0;
    return new RealMemoryCache(strongMemoryCache, weakMemoryCache);
  };
  function MemoryCache_0(block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new MemoryCacheBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.build_1k0s4u_k$();
  }
  function _get_strongMemoryCache__2pnl21($this) {
    return $this.strongMemoryCache_1;
  }
  function _get_weakMemoryCache__eo3r9k($this) {
    return $this.weakMemoryCache_1;
  }
  function RealMemoryCache(strongMemoryCache, weakMemoryCache) {
    this.strongMemoryCache_1 = strongMemoryCache;
    this.weakMemoryCache_1 = weakMemoryCache;
  }
  protoOf(RealMemoryCache).get_size_woubt6_k$ = function () {
    return this.strongMemoryCache_1.get_size_woubt6_k$();
  };
  protoOf(RealMemoryCache).get_maxSize_f83j4s_k$ = function () {
    return this.strongMemoryCache_1.get_maxSize_f83j4s_k$();
  };
  protoOf(RealMemoryCache).get_keys_wop4xp_k$ = function () {
    return plus(this.strongMemoryCache_1.get_keys_wop4xp_k$(), this.weakMemoryCache_1.get_keys_wop4xp_k$());
  };
  protoOf(RealMemoryCache).get_4u8u51_k$ = function (key) {
    var tmp0_elvis_lhs = this.strongMemoryCache_1.get_4u8u51_k$(key);
    return tmp0_elvis_lhs == null ? this.weakMemoryCache_1.get_4u8u51_k$(key) : tmp0_elvis_lhs;
  };
  protoOf(RealMemoryCache).set_wv9iv0_k$ = function (key, value) {
    this.strongMemoryCache_1.set_e4re7g_k$(key, value, emptyMap());
  };
  protoOf(RealMemoryCache).remove_kj1003_k$ = function (key) {
    var removedStrong = this.strongMemoryCache_1.remove_kj1003_k$(key);
    var removedWeak = this.weakMemoryCache_1.remove_kj1003_k$(key);
    return removedStrong ? true : removedWeak;
  };
  protoOf(RealMemoryCache).clear_j9y8zo_k$ = function () {
    this.strongMemoryCache_1.clearMemory_7uzv4t_k$();
    this.weakMemoryCache_1.clearMemory_7uzv4t_k$();
  };
  function StrongMemoryCache() {
  }
  function _get_weakMemoryCache__eo3r9k_0($this) {
    return $this.weakMemoryCache_1;
  }
  function _get_cache__j44d4h_0($this) {
    return $this.cache_1;
  }
  function InternalValue(image, extras, size) {
    this.image_1 = image;
    this.extras_1 = extras;
    this.size_1 = size;
  }
  protoOf(InternalValue).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(InternalValue).get_extras_d3bq0c_k$ = function () {
    return this.extras_1;
  };
  protoOf(InternalValue).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  function RealStrongMemoryCache$cache$1($maxSize, this$0) {
    this.this$0__1 = this$0;
    LruCache.call(this, $maxSize);
  }
  protoOf(RealStrongMemoryCache$cache$1).sizeOf_ktfath_k$ = function (key, value) {
    return value.size_1;
  };
  protoOf(RealStrongMemoryCache$cache$1).sizeOf_xsmc0r_k$ = function (key, value) {
    var tmp = typeof key === 'string' ? key : THROW_CCE();
    return this.sizeOf_ktfath_k$(tmp, value instanceof InternalValue ? value : THROW_CCE());
  };
  protoOf(RealStrongMemoryCache$cache$1).entryRemoved_h63nq5_k$ = function (evicted, key, oldValue, newValue) {
    return this.this$0__1.weakMemoryCache_1.set_p2k4gj_k$(key, oldValue.image_1, oldValue.extras_1, oldValue.size_1);
  };
  protoOf(RealStrongMemoryCache$cache$1).entryRemoved_l91vrc_k$ = function (evicted, key, oldValue, newValue) {
    var tmp = typeof key === 'string' ? key : THROW_CCE();
    var tmp_0 = oldValue instanceof InternalValue ? oldValue : THROW_CCE();
    return this.entryRemoved_h63nq5_k$(evicted, tmp, tmp_0, (newValue == null ? true : newValue instanceof InternalValue) ? newValue : THROW_CCE());
  };
  function RealStrongMemoryCache(maxSize, weakMemoryCache) {
    this.weakMemoryCache_1 = weakMemoryCache;
    var tmp = this;
    tmp.cache_1 = new RealStrongMemoryCache$cache$1(maxSize, this);
  }
  protoOf(RealStrongMemoryCache).get_size_woubt6_k$ = function () {
    return this.cache_1.size_23och_k$();
  };
  protoOf(RealStrongMemoryCache).get_maxSize_f83j4s_k$ = function () {
    return this.cache_1.maxSize_dyjl39_k$();
  };
  protoOf(RealStrongMemoryCache).get_keys_wop4xp_k$ = function () {
    return this.cache_1.snapshot_4plubo_k$().get_keys_wop4xp_k$();
  };
  protoOf(RealStrongMemoryCache).get_4u8u51_k$ = function (key) {
    var tmp0_safe_receiver = this.cache_1.get_1mhr4y_k$(key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.image_1;
  };
  protoOf(RealStrongMemoryCache).set_e4re7g_k$ = function (key, image, extras) {
    var size = get_size(image);
    if (size <= this.get_maxSize_f83j4s_k$()) {
      this.cache_1.put_3mhbri_k$(key, new InternalValue(image, extras, size));
    } else {
      this.cache_1.remove_8hbkc0_k$(key);
      this.weakMemoryCache_1.set_p2k4gj_k$(key, image, extras, size);
    }
  };
  protoOf(RealStrongMemoryCache).remove_kj1003_k$ = function (key) {
    return !(this.cache_1.remove_8hbkc0_k$(key) == null);
  };
  protoOf(RealStrongMemoryCache).clearMemory_7uzv4t_k$ = function () {
    this.cache_1.evictAll_sd7znr_k$();
  };
  function _get_weakMemoryCache__eo3r9k_1($this) {
    return $this.weakMemoryCache_1;
  }
  function EmptyStrongMemoryCache(weakMemoryCache) {
    this.weakMemoryCache_1 = weakMemoryCache;
  }
  protoOf(EmptyStrongMemoryCache).get_size_woubt6_k$ = function () {
    return 0;
  };
  protoOf(EmptyStrongMemoryCache).get_maxSize_f83j4s_k$ = function () {
    return 0;
  };
  protoOf(EmptyStrongMemoryCache).get_keys_wop4xp_k$ = function () {
    return emptySet();
  };
  protoOf(EmptyStrongMemoryCache).get_4u8u51_k$ = function (key) {
    return null;
  };
  protoOf(EmptyStrongMemoryCache).set_e4re7g_k$ = function (key, image, extras) {
    this.weakMemoryCache_1.set_p2k4gj_k$(key, image, extras, get_size(image));
  };
  protoOf(EmptyStrongMemoryCache).remove_kj1003_k$ = function (key) {
    return false;
  };
  protoOf(EmptyStrongMemoryCache).clearMemory_7uzv4t_k$ = function () {
  };
  function WeakMemoryCache() {
  }
  function _get_CLEAN_UP_INTERVAL__upkbmm($this) {
    return $this.CLEAN_UP_INTERVAL_1;
  }
  function _set_operationsSinceCleanUp__arn42n($this, _set____db54di) {
    $this.operationsSinceCleanUp_1 = _set____db54di;
  }
  function _get_operationsSinceCleanUp__bhgcd1($this) {
    return $this.operationsSinceCleanUp_1;
  }
  function cleanUpIfNecessary($this) {
    var tmp0_this = $this;
    var tmp1 = tmp0_this.operationsSinceCleanUp_1;
    tmp0_this.operationsSinceCleanUp_1 = tmp1 + 1 | 0;
    Companion_getInstance_14();
    if (tmp1 >= 10) {
      $this.cleanUp_l18vwt_k$();
    }
  }
  function InternalValue_0(identityHashCode, image, extras, size) {
    this.identityHashCode_1 = identityHashCode;
    this.image_1 = image;
    this.extras_1 = extras;
    this.size_1 = size;
  }
  protoOf(InternalValue_0).get_identityHashCode_4lvuwu_k$ = function () {
    return this.identityHashCode_1;
  };
  protoOf(InternalValue_0).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(InternalValue_0).get_extras_d3bq0c_k$ = function () {
    return this.extras_1;
  };
  protoOf(InternalValue_0).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  function Companion_1() {
    Companion_instance_1 = this;
    this.CLEAN_UP_INTERVAL_1 = 10;
  }
  var Companion_instance_1;
  function Companion_getInstance_14() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function RealWeakMemoryCache() {
    Companion_getInstance_14();
    this.cache_1 = LinkedHashMap_init_$Create$_0();
    this.operationsSinceCleanUp_1 = 0;
  }
  protoOf(RealWeakMemoryCache).get_cache_ipl461_k$ = function () {
    return this.cache_1;
  };
  protoOf(RealWeakMemoryCache).get_keys_wop4xp_k$ = function () {
    return toSet(this.cache_1.get_keys_wop4xp_k$());
  };
  protoOf(RealWeakMemoryCache).get_4u8u51_k$ = function (key) {
    var tmp0_elvis_lhs = this.cache_1.get_1mhr4y_k$(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var values = tmp;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'com.seiko.imageloader.util.firstNotNullOfOrNullIndices' call
      var inductionVariable = 0;
      var last = values.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0;
          // Inline function 'com.seiko.imageloader.cache.memory.RealWeakMemoryCache.get.<anonymous>' call
          var tmp0__anonymous__q1qw7t = values.get_fkrdnv_k$(i);
          tmp$ret$0 = tmp0__anonymous__q1qw7t.image_1.get_26vq_k$();
          var tmp1_safe_receiver = tmp$ret$0;
          if (tmp1_safe_receiver == null)
            null;
          else {
            var tmp$ret$2;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            tmp$ret$1 = tmp1_safe_receiver;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = null;
    }
    var value = tmp$ret$1;
    cleanUpIfNecessary(this);
    return value;
  };
  protoOf(RealWeakMemoryCache).set_p2k4gj_k$ = function (key, image, extras, size) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.cache_1;
    var value = tmp0_getOrPut.get_1mhr4y_k$(key);
    var tmp;
    if (value == null) {
      var tmp$ret$1;
      // Inline function 'com.seiko.imageloader.cache.memory.RealWeakMemoryCache.set.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.arrayListOf' call
      tmp$ret$0 = ArrayList_init_$Create$_0();
      tmp$ret$1 = tmp$ret$0;
      var answer = tmp$ret$1;
      tmp0_getOrPut.put_3mhbri_k$(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    tmp$ret$2 = tmp;
    var values = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$4;
    $l$block: {
      // Inline function 'com.seiko.imageloader.cache.memory.RealWeakMemoryCache.set.<anonymous>' call
      var tmp$ret$3;
      // Inline function 'com.seiko.imageloader.identityHashCode' call
      tmp$ret$3 = image.hashCode();
      var identityHashCode = tmp$ret$3;
      var newValue = new InternalValue_0(identityHashCode, new WeakReference(image), extras, size);
      var inductionVariable = 0;
      var last = values.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var value_0 = values.get_fkrdnv_k$(index);
          if (size >= value_0.size_1) {
            if (value_0.identityHashCode_1 === identityHashCode ? value_0.image_1.get_26vq_k$() === image : false) {
              values.set_meu351_k$(index, newValue);
            } else {
              values.add_ydlf05_k$(index, newValue);
            }
            tmp$ret$4 = Unit_getInstance();
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      // Inline function 'kotlin.collections.plusAssign' call
      values.add_1j60pz_k$(newValue);
    }
    tmp$ret$5 = tmp$ret$4;
    cleanUpIfNecessary(this);
  };
  protoOf(RealWeakMemoryCache).remove_kj1003_k$ = function (key) {
    return !(this.cache_1.remove_8hbkc0_k$(key) == null);
  };
  protoOf(RealWeakMemoryCache).clearMemory_7uzv4t_k$ = function () {
    this.operationsSinceCleanUp_1 = 0;
    this.cache_1.clear_j9y8zo_k$();
  };
  protoOf(RealWeakMemoryCache).cleanUp_l18vwt_k$ = function () {
    this.operationsSinceCleanUp_1 = 0;
    var iterator = this.cache_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (iterator.hasNext_bitz1p_k$()) {
      var list = iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.count' call
      tmp$ret$0 = list.get_size_woubt6_k$();
      if (tmp$ret$0 <= 1) {
        var tmp0_safe_receiver = firstOrNull(list);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.image_1;
        if ((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_26vq_k$()) == null) {
          iterator.remove_le47v1_k$();
        }
      } else {
        // Inline function 'com.seiko.imageloader.util.removeIfIndices' call
        var numDeleted = 0;
        var inductionVariable = 0;
        var last = list.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var rawIndex = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var index = rawIndex - numDeleted | 0;
            var tmp$ret$1;
            // Inline function 'com.seiko.imageloader.cache.memory.RealWeakMemoryCache.cleanUp.<anonymous>' call
            var tmp0__anonymous__q1qw7t = list.get_fkrdnv_k$(index);
            tmp$ret$1 = tmp0__anonymous__q1qw7t.image_1.get_26vq_k$() == null;
            if (tmp$ret$1) {
              list.removeAt_qvpkxi_k$(index);
              var tmp1 = numDeleted;
              numDeleted = tmp1 + 1 | 0;
            }
          }
           while (inductionVariable <= last);
        if (list.isEmpty_y1axqb_k$()) {
          iterator.remove_le47v1_k$();
        }
      }
    }
  };
  function EmptyWeakMemoryCache() {
    EmptyWeakMemoryCache_instance = this;
  }
  protoOf(EmptyWeakMemoryCache).get_keys_wop4xp_k$ = function () {
    return emptySet();
  };
  protoOf(EmptyWeakMemoryCache).get_4u8u51_k$ = function (key) {
    return null;
  };
  protoOf(EmptyWeakMemoryCache).set_p2k4gj_k$ = function (key, image, extras, size) {
    return Unit_getInstance();
  };
  protoOf(EmptyWeakMemoryCache).remove_kj1003_k$ = function (key) {
    return false;
  };
  protoOf(EmptyWeakMemoryCache).clearMemory_7uzv4t_k$ = function () {
    return Unit_getInstance();
  };
  var EmptyWeakMemoryCache_instance;
  function EmptyWeakMemoryCache_getInstance() {
    if (EmptyWeakMemoryCache_instance == null)
      new EmptyWeakMemoryCache();
    return EmptyWeakMemoryCache_instance;
  }
  function _get_mappers__wnn2td($this) {
    return $this.mappers_1;
  }
  function _get_keyers__obfpdw($this) {
    return $this.keyers_1;
  }
  function _get_fetcherFactories__36gp2i($this) {
    return $this.fetcherFactories_1;
  }
  function _get_decoderFactories__lw7taf($this) {
    return $this.decoderFactories_1;
  }
  function get_$stableprop_4() {
    return 0;
  }
  function $decodeCOROUTINE$0(_this__u8e3s4, source, options, startIndex, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.source_1 = source;
    this.options_1 = options;
    this.startIndex_1 = startIndex;
  }
  protoOf($decodeCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            this.tmp0_iterator0__1 = until(this.startIndex_1, this._this__u8e3s4__1.decoderFactories_1.get_size_woubt6_k$()).iterator_jk1svi_k$();
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (!this.tmp0_iterator0__1.hasNext_bitz1p_k$()) {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

            this.index1__1 = this.tmp0_iterator0__1.next_20eer_k$();
            this.factory2__1 = this._this__u8e3s4__1.decoderFactories_1.get_fkrdnv_k$(this.index1__1);
            this.set_state_a96kl8_k$(2);
            suspendResult = this.factory2__1.create_3frw9z_k$(this.source_1, this.options_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp1_safe_receiver = suspendResult;
            if (tmp1_safe_receiver == null)
              null;
            else {
              return to(tmp1_safe_receiver, this.index1__1);
            }

            ;
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 3:
            throw RuntimeException_init_$Create$('Unable to create a decoder that supports: ' + this.source_1);
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function ComponentRegistry(mappers, keyers, fetcherFactories, decoderFactories) {
    this.mappers_1 = mappers;
    this.keyers_1 = keyers;
    this.fetcherFactories_1 = fetcherFactories;
    this.decoderFactories_1 = decoderFactories;
    this.$stable_1 = 0;
  }
  protoOf(ComponentRegistry).merge_tbf0ny_k$ = function (component) {
    return new ComponentRegistry(plus_0(this.mappers_1, component.mappers_1), plus_0(this.keyers_1, component.keyers_1), plus_0(this.fetcherFactories_1, component.fetcherFactories_1), plus_0(this.decoderFactories_1, component.decoderFactories_1));
  };
  protoOf(ComponentRegistry).newBuilder_dnl2aj_k$ = function () {
    return new ComponentRegistryBuilder(toMutableList(this.mappers_1), toMutableList(this.keyers_1), toMutableList(this.fetcherFactories_1), toMutableList(this.decoderFactories_1));
  };
  protoOf(ComponentRegistry).map_67jg4i_k$ = function (data, options) {
    var mappedData = data;
    // Inline function 'com.seiko.imageloader.util.forEachIndices' call
    var tmp0_forEachIndices = this.mappers_1;
    var inductionVariable = 0;
    var last = tmp0_forEachIndices.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'com.seiko.imageloader.component.ComponentRegistry.map.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_forEachIndices.get_fkrdnv_k$(i);
        var tmp0_safe_receiver = tmp1__anonymous__uwfjfc.map_67jg4i_k$(mappedData, options);
        if (tmp0_safe_receiver == null)
          null;
        else {
          var tmp$ret$0;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          mappedData = tmp0_safe_receiver;
          tmp$ret$0 = Unit_getInstance();
        }
      }
       while (inductionVariable <= last);
    return mappedData;
  };
  protoOf(ComponentRegistry).key_movuxx_k$ = function (data, options) {
    // Inline function 'com.seiko.imageloader.util.forEachIndices' call
    var tmp0_forEachIndices = this.keyers_1;
    var inductionVariable = 0;
    var last = tmp0_forEachIndices.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'com.seiko.imageloader.component.ComponentRegistry.key.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_forEachIndices.get_fkrdnv_k$(i);
        var tmp0_safe_receiver = tmp1__anonymous__uwfjfc.key_movuxx_k$(data, options);
        if (tmp0_safe_receiver == null)
          null;
        else {
          var tmp$ret$0;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          return tmp0_safe_receiver;
        }
      }
       while (inductionVariable <= last);
    return null;
  };
  protoOf(ComponentRegistry).fetch_i4u8g1_k$ = function (data, options, startIndex) {
    var inductionVariable = startIndex;
    var last = this.fetcherFactories_1.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var factory = this.fetcherFactories_1.get_fkrdnv_k$(index);
        var tmp1_safe_receiver = factory.create_3e8cu6_k$(data, options);
        if (tmp1_safe_receiver == null)
          null;
        else {
          var tmp$ret$0;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          return to(tmp1_safe_receiver, index);
        }
      }
       while (inductionVariable < last);
    throw RuntimeException_init_$Create$('Unable to create a fetcher that supports: ' + toString(data));
  };
  protoOf(ComponentRegistry).fetch$default_9cisai_k$ = function (data, options, startIndex, $super) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    return $super === VOID ? this.fetch_i4u8g1_k$(data, options, startIndex) : $super.fetch_i4u8g1_k$.call(this, data, options, startIndex);
  };
  protoOf(ComponentRegistry).decode_tcmig_k$ = function (source, options, startIndex, $completion) {
    var tmp = new $decodeCOROUTINE$0(this, source, options, startIndex, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ComponentRegistry).decode$default_ddwlxp_k$ = function (source, options, startIndex, $completion, $super) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    return $super === VOID ? this.decode_tcmig_k$(source, options, startIndex, $completion) : $super.decode_tcmig_k$.call(this, source, options, startIndex, $completion);
  };
  function _get_mappers__wnn2td_0($this) {
    return $this.mappers_1;
  }
  function _get_keyers__obfpdw_0($this) {
    return $this.keyers_1;
  }
  function _get_fetcherFactories__36gp2i_0($this) {
    return $this.fetcherFactories_1;
  }
  function _get_decoderFactories__lw7taf_0($this) {
    return $this.decoderFactories_1;
  }
  function get_$stableprop_5() {
    return 0;
  }
  function ComponentRegistryBuilder(mappers, keyers, fetcherFactories, decoderFactories) {
    var tmp;
    if (mappers === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$_0();
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = mappers;
    }
    mappers = tmp;
    var tmp_0;
    if (keyers === VOID) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0_1 = ArrayList_init_$Create$_0();
      tmp$ret$1 = Unit_getInstance();
      tmp_0 = tmp$ret$0_1;
    } else {
      tmp_0 = keyers;
    }
    keyers = tmp_0;
    var tmp_1;
    if (fetcherFactories === VOID) {
      var tmp$ret$0_2;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0_2 = ArrayList_init_$Create$_0();
      tmp$ret$2 = Unit_getInstance();
      tmp_1 = tmp$ret$0_2;
    } else {
      tmp_1 = fetcherFactories;
    }
    fetcherFactories = tmp_1;
    var tmp_2;
    if (decoderFactories === VOID) {
      var tmp$ret$0_3;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0_3 = ArrayList_init_$Create$_0();
      tmp$ret$3 = Unit_getInstance();
      tmp_2 = tmp$ret$0_3;
    } else {
      tmp_2 = decoderFactories;
    }
    decoderFactories = tmp_2;
    this.mappers_1 = mappers;
    this.keyers_1 = keyers;
    this.fetcherFactories_1 = fetcherFactories;
    this.decoderFactories_1 = decoderFactories;
    this.$stable_1 = 0;
  }
  protoOf(ComponentRegistryBuilder).add_wgujoh_k$ = function (mapper) {
    this.mappers_1.add_1j60pz_k$(mapper);
  };
  protoOf(ComponentRegistryBuilder).add_m644ei_k$ = function (keyer) {
    this.keyers_1.add_1j60pz_k$(keyer);
  };
  protoOf(ComponentRegistryBuilder).add_hhhns3_k$ = function (fetcherFactory) {
    this.fetcherFactories_1.add_1j60pz_k$(fetcherFactory);
  };
  protoOf(ComponentRegistryBuilder).add_j0y680_k$ = function (decoderFactory) {
    this.decoderFactories_1.add_1j60pz_k$(decoderFactory);
  };
  protoOf(ComponentRegistryBuilder).build_1k0s4u_k$ = function () {
    return new ComponentRegistry(this.mappers_1, this.keyers_1, this.fetcherFactories_1, this.decoderFactories_1);
  };
  function setupKtorComponents(_this__u8e3s4, httpClient) {
    var tmp;
    if (httpClient === VOID) {
      tmp = setupKtorComponents$lambda;
    } else {
      tmp = httpClient;
    }
    httpClient = tmp;
    _this__u8e3s4.add_wgujoh_k$(new KtorUrlMapper());
    _this__u8e3s4.add_m644ei_k$(new KtorUrlKeyer());
    _this__u8e3s4.add_hhhns3_k$(new Factory_3(httpClient));
  }
  function setupBase64Components(_this__u8e3s4) {
    _this__u8e3s4.add_wgujoh_k$(new Base64Mapper());
    _this__u8e3s4.add_hhhns3_k$(new Factory_0());
  }
  function setupCommonComponents(_this__u8e3s4) {
    _this__u8e3s4.add_wgujoh_k$(new StringUriMapper());
    _this__u8e3s4.add_hhhns3_k$(new Factory_1());
  }
  function setupKtorComponents$lambda() {
    return new HttpClient(get_httpEngine());
  }
  function Factory() {
  }
  function Decoder() {
  }
  function get_$stableprop_6() {
    return 0;
  }
  function get_$stableprop_7() {
    return 0;
  }
  function get_$stableprop_8() {
    return 0;
  }
  function Bitmap_0(bitmap) {
    this.bitmap_1 = bitmap;
    this.$stable_1 = 0;
  }
  protoOf(Bitmap_0).get_bitmap_bfxu7s_k$ = function () {
    return this.bitmap_1;
  };
  protoOf(Bitmap_0).component1_7eebsc_k$ = function () {
    return this.bitmap_1;
  };
  protoOf(Bitmap_0).copy_9at8gv_k$ = function (bitmap) {
    return new Bitmap_0(bitmap);
  };
  protoOf(Bitmap_0).copy$default_xdv5pl_k$ = function (bitmap, $super) {
    bitmap = bitmap === VOID ? this.bitmap_1 : bitmap;
    return $super === VOID ? this.copy_9at8gv_k$(bitmap) : $super.copy_9at8gv_k$.call(this, bitmap);
  };
  protoOf(Bitmap_0).toString = function () {
    return 'Bitmap(bitmap=' + this.bitmap_1 + ')';
  };
  protoOf(Bitmap_0).hashCode = function () {
    return this.bitmap_1.hashCode();
  };
  protoOf(Bitmap_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Bitmap_0))
      return false;
    var tmp0_other_with_cast = other instanceof Bitmap_0 ? other : THROW_CCE();
    if (!this.bitmap_1.equals(tmp0_other_with_cast.bitmap_1))
      return false;
    return true;
  };
  function Image(image) {
    this.image_1 = image;
    this.$stable_1 = 0;
  }
  protoOf(Image).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(Image).component1_7eebsc_k$ = function () {
    return this.image_1;
  };
  protoOf(Image).copy_roqp3r_k$ = function (image) {
    return new Image(image);
  };
  protoOf(Image).copy$default_uz2swl_k$ = function (image, $super) {
    image = image === VOID ? this.image_1 : image;
    return $super === VOID ? this.copy_roqp3r_k$(image) : $super.copy_roqp3r_k$.call(this, image);
  };
  protoOf(Image).toString = function () {
    return 'Image(image=' + this.image_1 + ')';
  };
  protoOf(Image).hashCode = function () {
    return this.image_1.hashCode();
  };
  protoOf(Image).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Image))
      return false;
    var tmp0_other_with_cast = other instanceof Image ? other : THROW_CCE();
    if (!this.image_1.equals(tmp0_other_with_cast.image_1))
      return false;
    return true;
  };
  function Painter_0(painter) {
    this.painter_1 = painter;
    this.$stable_1 = 0;
  }
  protoOf(Painter_0).get_painter_bzl4ri_k$ = function () {
    return this.painter_1;
  };
  protoOf(Painter_0).component1_7eebsc_k$ = function () {
    return this.painter_1;
  };
  protoOf(Painter_0).copy_wrwn88_k$ = function (painter) {
    return new Painter_0(painter);
  };
  protoOf(Painter_0).copy$default_40q9dm_k$ = function (painter, $super) {
    painter = painter === VOID ? this.painter_1 : painter;
    return $super === VOID ? this.copy_wrwn88_k$(painter) : $super.copy_wrwn88_k$.call(this, painter);
  };
  protoOf(Painter_0).toString = function () {
    return 'Painter(painter=' + this.painter_1 + ')';
  };
  protoOf(Painter_0).hashCode = function () {
    return hashCode(this.painter_1);
  };
  protoOf(Painter_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Painter_0))
      return false;
    var tmp0_other_with_cast = other instanceof Painter_0 ? other : THROW_CCE();
    if (!equals(this.painter_1, tmp0_other_with_cast.painter_1))
      return false;
    return true;
  };
  function DecodeResult() {
  }
  function get_$stableprop_9() {
    return 0;
  }
  function _get_data__d5abxd($this) {
    return $this.data_1;
  }
  function Factory_0() {
    this.$stable_1 = 0;
  }
  protoOf(Factory_0).create_3e8cu6_k$ = function (data, options) {
    if (!(data instanceof Base64Image))
      return null;
    return new Base64Fetcher(data);
  };
  function get_$stableprop_10() {
    return 0;
  }
  function Base64Fetcher$fetch$lambda(this$0) {
    return function ($this$extraData) {
      mimeType($this$extraData, this$0.data_1.get_contentType_7git4a_k$());
      return Unit_getInstance();
    };
  }
  function $fetchCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($fetchCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = bufferedSource(this._this__u8e3s4__1.data_1.get_content_h02jrk_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new Source(ARGUMENT, extraData(Base64Fetcher$fetch$lambda(this._this__u8e3s4__1)));
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function Base64Fetcher(data) {
    this.data_1 = data;
    this.$stable_1 = 0;
  }
  protoOf(Base64Fetcher).fetch_rkyo2v_k$ = function ($completion) {
    var tmp = new $fetchCOROUTINE$1(this, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Base64Fetcher).fetch_2oi2os_k$ = function ($completion) {
    return this.fetch_rkyo2v_k$($completion);
  };
  function get_$stableprop_11() {
    return 0;
  }
  function _get_data__d5abxd_0($this) {
    return $this.data_1;
  }
  function Factory_1() {
    this.$stable_1 = 0;
  }
  protoOf(Factory_1).create_3e8cu6_k$ = function (data, options) {
    if (!(data instanceof Bitmap))
      return null;
    return new BitmapFetcher(data);
  };
  function get_$stableprop_12() {
    return 0;
  }
  function BitmapFetcher(data) {
    this.data_1 = data;
    this.$stable_1 = 0;
  }
  protoOf(BitmapFetcher).fetch_rkyo2v_k$ = function ($completion) {
    return new Bitmap_1(this.data_1);
  };
  protoOf(BitmapFetcher).fetch_2oi2os_k$ = function ($completion) {
    return this.fetch_rkyo2v_k$($completion);
  };
  function Factory_2() {
  }
  function Fetcher() {
  }
  function get_$stableprop_13() {
    return 0;
  }
  function get_$stableprop_14() {
    return 0;
  }
  function get_$stableprop_15() {
    return 0;
  }
  function get_$stableprop_16() {
    return 0;
  }
  function Source(source, extra) {
    extra = extra === VOID ? get_EmptyExtraData() : extra;
    this.source_1 = source;
    this.extra_1 = extra;
    this.$stable_1 = 0;
  }
  protoOf(Source).get_source_jl0x7o_k$ = function () {
    return this.source_1;
  };
  protoOf(Source).get_extra_ir3qw7_k$ = function () {
    return this.extra_1;
  };
  protoOf(Source).component1_7eebsc_k$ = function () {
    return this.source_1;
  };
  protoOf(Source).component2_7eebsb_k$ = function () {
    return this.extra_1;
  };
  protoOf(Source).copy_do7q6m_k$ = function (source, extra) {
    return new Source(source, extra);
  };
  protoOf(Source).copy$default_a0olqg_k$ = function (source, extra, $super) {
    source = source === VOID ? this.source_1 : source;
    extra = extra === VOID ? this.extra_1 : extra;
    return $super === VOID ? this.copy_do7q6m_k$(source, extra) : $super.copy_do7q6m_k$.call(this, source, extra);
  };
  protoOf(Source).toString = function () {
    return 'Source(source=' + this.source_1 + ', extra=' + this.extra_1 + ')';
  };
  protoOf(Source).hashCode = function () {
    var result = hashCode(this.source_1);
    result = imul(result, 31) + hashCode(this.extra_1) | 0;
    return result;
  };
  protoOf(Source).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Source))
      return false;
    var tmp0_other_with_cast = other instanceof Source ? other : THROW_CCE();
    if (!equals(this.source_1, tmp0_other_with_cast.source_1))
      return false;
    if (!equals(this.extra_1, tmp0_other_with_cast.extra_1))
      return false;
    return true;
  };
  function Bitmap_1(bitmap) {
    this.bitmap_1 = bitmap;
    this.$stable_1 = 0;
  }
  protoOf(Bitmap_1).get_bitmap_bfxu7s_k$ = function () {
    return this.bitmap_1;
  };
  protoOf(Bitmap_1).component1_7eebsc_k$ = function () {
    return this.bitmap_1;
  };
  protoOf(Bitmap_1).copy_9at8gv_k$ = function (bitmap) {
    return new Bitmap_1(bitmap);
  };
  protoOf(Bitmap_1).copy$default_2la9yy_k$ = function (bitmap, $super) {
    bitmap = bitmap === VOID ? this.bitmap_1 : bitmap;
    return $super === VOID ? this.copy_9at8gv_k$(bitmap) : $super.copy_9at8gv_k$.call(this, bitmap);
  };
  protoOf(Bitmap_1).toString = function () {
    return 'Bitmap(bitmap=' + this.bitmap_1 + ')';
  };
  protoOf(Bitmap_1).hashCode = function () {
    return this.bitmap_1.hashCode();
  };
  protoOf(Bitmap_1).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Bitmap_1))
      return false;
    var tmp0_other_with_cast = other instanceof Bitmap_1 ? other : THROW_CCE();
    if (!this.bitmap_1.equals(tmp0_other_with_cast.bitmap_1))
      return false;
    return true;
  };
  function Image_0(image) {
    this.image_1 = image;
    this.$stable_1 = 0;
  }
  protoOf(Image_0).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(Image_0).component1_7eebsc_k$ = function () {
    return this.image_1;
  };
  protoOf(Image_0).copy_roqp3r_k$ = function (image) {
    return new Image_0(image);
  };
  protoOf(Image_0).copy$default_mxu3tk_k$ = function (image, $super) {
    image = image === VOID ? this.image_1 : image;
    return $super === VOID ? this.copy_roqp3r_k$(image) : $super.copy_roqp3r_k$.call(this, image);
  };
  protoOf(Image_0).toString = function () {
    return 'Image(image=' + this.image_1 + ')';
  };
  protoOf(Image_0).hashCode = function () {
    return this.image_1.hashCode();
  };
  protoOf(Image_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Image_0))
      return false;
    var tmp0_other_with_cast = other instanceof Image_0 ? other : THROW_CCE();
    if (!this.image_1.equals(tmp0_other_with_cast.image_1))
      return false;
    return true;
  };
  function Painter_1(painter) {
    this.painter_1 = painter;
    this.$stable_1 = 0;
  }
  protoOf(Painter_1).get_painter_bzl4ri_k$ = function () {
    return this.painter_1;
  };
  protoOf(Painter_1).component1_7eebsc_k$ = function () {
    return this.painter_1;
  };
  protoOf(Painter_1).copy_wrwn88_k$ = function (painter) {
    return new Painter_1(painter);
  };
  protoOf(Painter_1).copy$default_h7e43t_k$ = function (painter, $super) {
    painter = painter === VOID ? this.painter_1 : painter;
    return $super === VOID ? this.copy_wrwn88_k$(painter) : $super.copy_wrwn88_k$.call(this, painter);
  };
  protoOf(Painter_1).toString = function () {
    return 'Painter(painter=' + this.painter_1 + ')';
  };
  protoOf(Painter_1).hashCode = function () {
    return hashCode(this.painter_1);
  };
  protoOf(Painter_1).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Painter_1))
      return false;
    var tmp0_other_with_cast = other instanceof Painter_1 ? other : THROW_CCE();
    if (!equals(this.painter_1, tmp0_other_with_cast.painter_1))
      return false;
    return true;
  };
  function FetchResult() {
  }
  function _get_httpClient__2ty1zc($this) {
    return $this.httpClient_1;
  }
  function get_$stableprop_17() {
    return 0;
  }
  function _get_httpUrl__wyk5re($this) {
    return $this.httpUrl_1;
  }
  function _get_httpClient__2ty1zc_0($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = httpClient$factory();
    tmp$ret$0 = $this.httpClient$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function Factory_3(httpClient) {
    this.httpClient_1 = httpClient;
    this.$stable_1 = 0;
  }
  protoOf(Factory_3).create_3e8cu6_k$ = function (data, options) {
    if (data instanceof Url)
      return new KtorUrlFetcher(data, this.httpClient_1);
    return null;
  };
  function get_$stableprop_18() {
    return 8;
  }
  function KtorUrlFetcher$fetch$lambda($response) {
    return function ($this$extraData) {
      var tmp0_safe_receiver = contentType($response);
      mimeType($this$extraData, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString());
      return Unit_getInstance();
    };
  }
  function $fetchCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($fetchCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(5);
            var tmp_0 = this;
            tmp_0.tmp2_request0__1 = _get_httpClient__2ty1zc_0(this._this__u8e3s4__1);
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this._this__u8e3s4__1.httpUrl_1);
            ;
            tmp_1.tmp1_request1__1 = tmp0_apply;
            this.set_state_a96kl8_k$(1);
            suspendResult = (new HttpStatement(this.tmp1_request1__1, this.tmp2_request0__1)).execute_t7l9ha_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.response2__1 = suspendResult;
            if (isSuccess(this.response2__1.get_status_jnf6d7_k$())) {
              this.set_state_a96kl8_k$(3);
              suspendResult = bodyAsChannel(this.response2__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

            break;
          case 2:
            throw new KtorUrlRequestException('code:' + this.response2__1.get_status_jnf6d7_k$().get_value_j01efc_k$() + ', ' + this.response2__1.get_status_jnf6d7_k$().get_description_emjre5_k$());
          case 3:
            this.ARGUMENT3__1 = suspendResult;
            this.set_state_a96kl8_k$(4);
            suspendResult = source_0(this.ARGUMENT3__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var ARGUMENT = suspendResult;
            return new Source(ARGUMENT, extraData(KtorUrlFetcher$fetch$lambda(this.response2__1)));
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function KtorUrlFetcher(httpUrl, httpClient) {
    this.httpUrl_1 = httpUrl;
    this.httpClient$delegate_1 = lazy(httpClient);
    this.$stable_1 = 8;
  }
  protoOf(KtorUrlFetcher).fetch_rkyo2v_k$ = function ($completion) {
    var tmp = new $fetchCOROUTINE$2(this, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KtorUrlFetcher).fetch_2oi2os_k$ = function ($completion) {
    return this.fetch_rkyo2v_k$($completion);
  };
  function KtorUrlRequestException(msg) {
    RuntimeException_init_$Init$(msg, this);
    captureStack(this, KtorUrlRequestException);
  }
  function httpClient$factory() {
    return getPropertyCallableRef('httpClient', 1, KProperty1, function (receiver) {
      return _get_httpClient__2ty1zc_0(receiver);
    }, null);
  }
  function Keyer() {
  }
  function get_$stableprop_19() {
    return 0;
  }
  function KtorUrlKeyer() {
    this.$stable_1 = 0;
  }
  protoOf(KtorUrlKeyer).key_movuxx_k$ = function (data, options) {
    if (!(data instanceof Url))
      return null;
    return toString(data);
  };
  function isApplicable($this, data) {
    return startsWith(data, 'data:');
  }
  function get_$stableprop_20() {
    return 0;
  }
  function Base64Mapper() {
    this.$stable_1 = 0;
  }
  protoOf(Base64Mapper).map_67jg4i_k$ = function (data, options) {
    if (!(typeof data === 'string'))
      return null;
    if (!isApplicable(this, data))
      return null;
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = split_0(data, [',']);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'com.seiko.imageloader.component.mapper.Base64Mapper.map.<anonymous>' call
    var tmp0_safe_receiver = firstOrNull(tmp0_let);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : removePrefix(tmp0_safe_receiver, 'data:');
    var contentType = tmp1_safe_receiver == null ? null : removeSuffix(tmp1_safe_receiver, ';base64');
    var content = last(tmp0_let);
    tmp$ret$0 = new Base64Image(contentType, decodeBase64Bytes(content));
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  function get_$stableprop_21() {
    return 0;
  }
  function Base64Image(contentType, content) {
    this.contentType_1 = contentType;
    this.content_1 = content;
    this.$stable_1 = 0;
  }
  protoOf(Base64Image).get_contentType_7git4a_k$ = function () {
    return this.contentType_1;
  };
  protoOf(Base64Image).get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  function isApplicable_0($this, data) {
    return startsWith(data, 'http');
  }
  function get_$stableprop_22() {
    return 0;
  }
  function KtorUrlMapper() {
    this.$stable_1 = 0;
  }
  protoOf(KtorUrlMapper).map_67jg4i_k$ = function (data, options) {
    if (!(typeof data === 'string'))
      return null;
    if (!isApplicable_0(this, data))
      return null;
    return Url_0(data);
  };
  function Mapper() {
  }
  function get_$stableprop_23() {
    return 0;
  }
  function StringUriMapper() {
    this.$stable_1 = 0;
  }
  protoOf(StringUriMapper).map_67jg4i_k$ = function (data, options) {
    if (!(typeof data === 'string'))
      return null;
    return Companion_getInstance_1().parseOrNull_vj4jtw_k$(data);
  };
  function proceed($this, chain, request, $completion) {
    var tmp = new $proceedCOROUTINE$3($this, chain, request, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function toImageResult(_this__u8e3s4, $this, request) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof Bitmap_0) {
      tmp = new Bitmap_2(request, _this__u8e3s4.get_bitmap_bfxu7s_k$());
    } else {
      if (tmp0_subject instanceof Image) {
        tmp = new Image_1(request, _this__u8e3s4.get_image_it3i2a_k$());
      } else {
        if (tmp0_subject instanceof Painter_0) {
          tmp = new Painter_2(request, _this__u8e3s4.get_painter_bzl4ri_k$());
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function decode($this, components, source, options, $completion) {
    var tmp = new $decodeCOROUTINE$4($this, components, source, options, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function get_$stableprop_24() {
    return 0;
  }
  function DecodeInterceptor$proceed$lambda$lambda($options) {
    return function ($this$options) {
      $this$options.set_retryIfDiskDecodeError_olfes4_k$(false);
      var tmp0_subject = $options.get_diskCachePolicy_b6aqha_k$();
      var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
      $this$options.set_diskCachePolicy_13pb4e_k$((tmp0 === 0 ? true : tmp0 === 1) ? CachePolicy_WRITE_ONLY_getInstance() : $options.get_diskCachePolicy_b6aqha_k$());
      return Unit_getInstance();
    };
  }
  function DecodeInterceptor$proceed$lambda($options) {
    return function ($this$newBuilder) {
      $this$newBuilder.options_d14j1o_k$(DecodeInterceptor$proceed$lambda$lambda($options));
      return Unit_getInstance();
    };
  }
  function $proceedCOROUTINE$3(_this__u8e3s4, chain, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.chain_1 = chain;
    this.request_1 = request;
  }
  protoOf($proceedCOROUTINE$3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(9);
            this.options0__1 = this.chain_1.get_options_jecmyz_k$();
            this.set_state_a96kl8_k$(1);
            suspendResult = this.chain_1.proceed_erlbth_k$(this.request_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.result1__1 = suspendResult;
            var tmp_0 = this.result1__1;
            if (tmp_0 instanceof Source_0) {
              this.set_exceptionState_s9sevl_k$(3);
              var tmp_1 = this;
              tmp_1.tmp0_success4__1 = Companion_getInstance();
              this.set_state_a96kl8_k$(2);
              suspendResult = decode(this._this__u8e3s4__1, this.chain_1.get_components_rknech_k$(), this.result1__1, this.options0__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.WHEN_RESULT2__1 = this.result1__1;
              this.set_state_a96kl8_k$(8);
              continue $sm;
            }

            break;
          case 2:
            this.tmp1_success5__1 = suspendResult;
            this.TRY_RESULT3__1 = _Result___init__impl__xyqfz8(this.tmp1_success5__1);
            this.set_exceptionState_s9sevl_k$(9);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 3:
            this.set_exceptionState_s9sevl_k$(9);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Error) {
              this.e6__1 = this.get_exception_x0n6w6_k$();
              var tmp_3 = this;
              var tmp2_failure = Companion_getInstance();
              tmp_3.TRY_RESULT3__1 = _Result___init__impl__xyqfz8(createFailure(this.e6__1));
              this.set_state_a96kl8_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 4:
            this.set_exceptionState_s9sevl_k$(9);
            this.tmp3_fold7__1 = this.TRY_RESULT3__1;
            this.exception8__1 = Result__exceptionOrNull_impl_p6xea9(this.tmp3_fold7__1);
            if (this.exception8__1 == null) {
              var tmp_4 = this;
              var tmp_5 = _Result___get_value__impl__bjfvqg(this.tmp3_fold7__1);
              var tmp4__anonymous__pkmkx7 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
              tmp_4.WHEN_RESULT9__1 = toImageResult(tmp4__anonymous__pkmkx7, this._this__u8e3s4__1, this.request_1);
              this.set_state_a96kl8_k$(7);
              continue $sm;
            } else {
              if (this.options0__1.get_retryIfDiskDecodeError_p5wx8h_k$() ? this.result1__1.get_dataSource_vce0e_k$().equals(DataSource_Disk_getInstance()) : false) {
                var tmp_6 = this;
                tmp_6.noDiskCacheRequest11__1 = this.request_1.newBuilder_xp52zh_k$(DecodeInterceptor$proceed$lambda(this.options0__1));
                this.set_state_a96kl8_k$(5);
                suspendResult = proceed(this._this__u8e3s4__1, this.chain_1, this.noDiskCacheRequest11__1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_7 = this;
                tmp_7.WHEN_RESULT10__1 = new Error_0(this.request_1, this.exception8__1);
                this.set_state_a96kl8_k$(6);
                continue $sm;
              }
            }

            break;
          case 5:
            this.WHEN_RESULT10__1 = suspendResult;
            this.set_state_a96kl8_k$(6);
            continue $sm;
          case 6:
            this.WHEN_RESULT9__1 = this.WHEN_RESULT10__1;
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 7:
            this.WHEN_RESULT2__1 = this.WHEN_RESULT9__1;
            this.set_state_a96kl8_k$(8);
            continue $sm;
          case 8:
            return this.WHEN_RESULT2__1;
          case 9:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 9) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function $decodeCOROUTINE$4(_this__u8e3s4, components, source, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.components_1 = components;
    this.source_1 = source;
    this.options_1 = options;
  }
  protoOf($decodeCOROUTINE$4).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(5);
            this.searchIndex0__1 = 0;
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (false) {
              this.set_state_a96kl8_k$(6);
              continue $sm;
            }

            this.set_state_a96kl8_k$(2);
            suspendResult = this.components_1.decode_tcmig_k$(this.source_1, this.options_1, this.searchIndex0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tmp0_container2__1 = suspendResult;
            this.decoder3__1 = this.tmp0_container2__1.component1_7eebsc_k$();
            this.index4__1 = this.tmp0_container2__1.component2_7eebsb_k$();
            this.searchIndex0__1 = this.index4__1 + 1 | 0;
            this.set_state_a96kl8_k$(3);
            suspendResult = this.decoder3__1.decode_gwsgab_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var result = suspendResult;
            if (!(result == null)) {
              this.decodeResult1__1 = result;
              this.set_state_a96kl8_k$(6);
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

            break;
          case 4:
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 5:
            throw this.get_exception_x0n6w6_k$();
          case 6:
            return this.decodeResult1__1;
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function DecodeInterceptor() {
    this.$stable_1 = 0;
  }
  protoOf(DecodeInterceptor).intercept_vhxvbx_k$ = function (chain, $completion) {
    var tmp0 = proceed(this, chain, chain.get_request_jdwg4m_k$(), $completion);
    return tmp0;
  };
  function _get_diskCache__chwufg($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = diskCache$factory();
    tmp$ret$0 = $this.diskCache$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function _get_fileSystem__siywv4_1($this) {
    return _get_diskCache__chwufg($this).get_fileSystem_9p6nv8_k$();
  }
  function readFromDiskCache($this, options, cacheKey) {
    var tmp;
    if (options.get_diskCachePolicy_b6aqha_k$().get_readEnabled_oyc6n2_k$()) {
      tmp = _get_diskCache__chwufg($this).get_4u8u51_k$(cacheKey);
    } else {
      tmp = null;
    }
    return tmp;
  }
  function writeToDiskCache($this, options, cacheKey, snapshot, source) {
    if (!options.get_diskCachePolicy_b6aqha_k$().get_writeEnabled_mrjiqz_k$()) {
      var tmp0_safe_receiver = snapshot;
      if (tmp0_safe_receiver == null)
        null;
      else {
        closeQuietly(tmp0_safe_receiver);
      }
      return null;
    }
    var tmp1_safe_receiver = snapshot;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.closeAndEdit_yimkix_k$();
    var tmp3_elvis_lhs = tmp2_elvis_lhs == null ? _get_diskCache__chwufg($this).edit_e8aybt_k$(cacheKey) : tmp2_elvis_lhs;
    var tmp;
    if (tmp3_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp3_elvis_lhs;
    }
    var editor = tmp;
    try {
      var tmp$ret$3;
      // Inline function 'okio.FileSystem.write' call
      var tmp1_write = _get_fileSystem__siywv4_1($this);
      var tmp2_write = editor.get_data_wokkxf_k$();
      var tmp$ret$2;
      // Inline function 'okio.use' call
      var tmp0_use = buffer_0(tmp1_write.sink_kx3u5n_k$(tmp2_write, false));
      var result = null;
      var thrown = null;
      try {
        var tmp$ret$1;
        // Inline function 'okio.FileSystem.write.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'com.seiko.imageloader.intercept.DiskCacheInterceptor.writeToDiskCache.<anonymous>' call
        tmp$ret$0 = tmp0_use.writeAll_rsmo5y_k$(source);
        tmp$ret$1 = tmp$ret$0;
        result = tmp$ret$1;
      } catch ($p) {
        if ($p instanceof Error) {
          var t = $p;
          thrown = t;
        } else {
          throw $p;
        }
      }
      finally {
        try {
          var tmp0_safe_receiver_0 = tmp0_use;
          if (tmp0_safe_receiver_0 == null)
            null;
          else {
            tmp0_safe_receiver_0.close_ymq55z_k$();
          }
        } catch ($p) {
          if ($p instanceof Error) {
            var t_0 = $p;
            if (thrown == null)
              thrown = t_0;
            else {
              addSuppressed(thrown, t_0);
            }
          } else {
            throw $p;
          }
        }
      }
      if (!(thrown == null))
        throw thrown;
      tmp$ret$2 = ensureNotNull(result);
      tmp$ret$3 = tmp$ret$2;
      return editor.commitAndGet_ki4bmy_k$();
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        abortQuietly(editor);
        throw e;
      } else {
        throw $p;
      }
    }
    finally {
      closeQuietly(source);
    }
  }
  function source(_this__u8e3s4, $this) {
    return buffer(_get_fileSystem__siywv4_1($this).source_i9y171_k$(_this__u8e3s4.get_data_wokkxf_k$()));
  }
  function get_$stableprop_25() {
    return 8;
  }
  function DiskCacheInterceptor$intercept$lambda() {
    return 'read disk cache error:';
  }
  function DiskCacheInterceptor$intercept$lambda_0() {
    return 'read disk cache';
  }
  function DiskCacheInterceptor$intercept$lambda_1() {
    return 'write disk cache error:';
  }
  function DiskCacheInterceptor$intercept$lambda_2() {
    return 'write disk cache';
  }
  function $interceptCOROUTINE$5(_this__u8e3s4, chain, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.chain_1 = chain;
  }
  protoOf($interceptCOROUTINE$5).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            this.request0__1 = this.chain_1.get_request_jdwg4m_k$();
            this.options1__1 = this.chain_1.get_options_jecmyz_k$();
            this.logger2__1 = this.chain_1.get_config_c0698r_k$().get_logger_g9gejd_k$();
            this.tmp0_elvis_lhs3__1 = this.chain_1.get_components_rknech_k$().key_movuxx_k$(this.request0__1.get_data_wokkxf_k$(), this.options1__1);
            if (this.tmp0_elvis_lhs3__1 == null) {
              this.set_state_a96kl8_k$(1);
              suspendResult = this.chain_1.proceed_erlbth_k$(this.request0__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.WHEN_RESULT4__1 = this.tmp0_elvis_lhs3__1;
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

            break;
          case 1:
            var tmp_0 = this;
            return suspendResult;
          case 2:
            this.cacheKey5__1 = this.WHEN_RESULT4__1;
            var tmp_1 = this;
            var tmp_2;
            try {
              var tmp0_success = Companion_getInstance();
              var tmp1_success = readFromDiskCache(this._this__u8e3s4__1, this.options1__1, this.cacheKey5__1);
              tmp_2 = _Result___init__impl__xyqfz8(tmp1_success);
            } catch ($p) {
              var tmp_3;
              if ($p instanceof Error) {
                var e = $p;
                var tmp2_failure = Companion_getInstance();
                tmp_3 = _Result___init__impl__xyqfz8(createFailure(e));
              } else {
                throw $p;
              }
              tmp_2 = tmp_3;
            }

            var tmp3_onFailure = tmp_2;
            var tmp0_safe_receiver = Result__exceptionOrNull_impl_p6xea9(tmp3_onFailure);
            if (tmp0_safe_receiver == null)
              null;
            else {
              var tmp_4 = this.request0__1.get_data_wokkxf_k$();
              w(this.logger2__1, 'DiskCacheInterceptor', tmp_4, tmp0_safe_receiver, DiskCacheInterceptor$intercept$lambda);
            }

            ;
            var tmp4_getOrNull = tmp3_onFailure;
            var tmp_5;
            if (_Result___get_isFailure__impl__jpiriv(tmp4_getOrNull)) {
              tmp_5 = null;
            } else {
              var tmp_6 = _Result___get_value__impl__bjfvqg(tmp4_getOrNull);
              tmp_5 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
            }

            tmp_1.snapshot6__1 = tmp_5;
            this.request0__1.call_2btplb_k$(new ReadDiskCache(!(this.snapshot6__1 == null)));
            if (!(this.snapshot6__1 == null)) {
              var tmp_7 = this.request0__1.get_data_wokkxf_k$();
              d(this.logger2__1, 'DiskCacheInterceptor', tmp_7, DiskCacheInterceptor$intercept$lambda_0);
              return new Source_0(this.request0__1, source(this.snapshot6__1, this._this__u8e3s4__1), DataSource_Disk_getInstance());
            }

            this.set_state_a96kl8_k$(3);
            suspendResult = this.chain_1.proceed_erlbth_k$(this.request0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var result = suspendResult;
            var tmp1_subject = result;
            if (tmp1_subject instanceof Source_0) {
              var tmp_8 = this;
              var tmp_9;
              try {
                var tmp5_success = Companion_getInstance();
                var tmp6_success = writeToDiskCache(this._this__u8e3s4__1, this.options1__1, this.cacheKey5__1, this.snapshot6__1, result.get_source_jl0x7o_k$());
                tmp_9 = _Result___init__impl__xyqfz8(tmp6_success);
              } catch ($p) {
                var tmp_10;
                if ($p instanceof Error) {
                  var e_0 = $p;
                  var tmp7_failure = Companion_getInstance();
                  tmp_10 = _Result___init__impl__xyqfz8(createFailure(e_0));
                } else {
                  throw $p;
                }
                tmp_9 = tmp_10;
              }
              var tmp8_onFailure = tmp_9;
              var tmp0_safe_receiver_0 = Result__exceptionOrNull_impl_p6xea9(tmp8_onFailure);
              if (tmp0_safe_receiver_0 == null)
                null;
              else {
                var tmp_11 = this.request0__1.get_data_wokkxf_k$();
                w(this.logger2__1, 'DiskCacheInterceptor', tmp_11, tmp0_safe_receiver_0, DiskCacheInterceptor$intercept$lambda_1);
              }
              var tmp9_getOrNull = tmp8_onFailure;
              var tmp_12;
              if (_Result___get_isFailure__impl__jpiriv(tmp9_getOrNull)) {
                tmp_12 = null;
              } else {
                var tmp_13 = _Result___get_value__impl__bjfvqg(tmp9_getOrNull);
                tmp_12 = (tmp_13 == null ? true : isObject(tmp_13)) ? tmp_13 : THROW_CCE();
              }
              tmp_8.snapshot6__1 = tmp_12;
              if (!(this.snapshot6__1 == null)) {
                var tmp_14 = this.request0__1.get_data_wokkxf_k$();
                d(this.logger2__1, 'DiskCacheInterceptor', tmp_14, DiskCacheInterceptor$intercept$lambda_2);
                return result.copy$default_xshvau_k$(VOID, source(this.snapshot6__1, this._this__u8e3s4__1));
              }
            } else {
            }

            return result;
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e_1;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e_1);
        }
      }
     while (true);
  };
  function DiskCacheInterceptor(diskCache) {
    this.diskCache$delegate_1 = lazy(diskCache);
    this.$stable_1 = 8;
  }
  protoOf(DiskCacheInterceptor).intercept_vhxvbx_k$ = function (chain, $completion) {
    var tmp = new $interceptCOROUTINE$5(this, chain, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function abortQuietly(_this__u8e3s4) {
    try {
      _this__u8e3s4.abort_l9xn1b_k$();
    } catch ($p) {
      if ($p instanceof Exception) {
        var _ = $p;
      } else {
        throw $p;
      }
    }
  }
  function diskCache$factory() {
    return getPropertyCallableRef('diskCache', 1, KProperty1, function (receiver) {
      return _get_diskCache__chwufg(receiver);
    }, null);
  }
  function toImageResult_0(_this__u8e3s4, $this, request) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof Source) {
      tmp = new Source_0(request, _this__u8e3s4.get_source_jl0x7o_k$(), DataSource_Engine_getInstance(), _this__u8e3s4.get_extra_ir3qw7_k$());
    } else {
      if (tmp0_subject instanceof Bitmap_1) {
        tmp = new Bitmap_2(request, _this__u8e3s4.get_bitmap_bfxu7s_k$());
      } else {
        if (tmp0_subject instanceof Image_0) {
          tmp = new Image_1(request, _this__u8e3s4.get_image_it3i2a_k$());
        } else {
          if (tmp0_subject instanceof Painter_1) {
            tmp = new Painter_2(request, _this__u8e3s4.get_painter_bzl4ri_k$());
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
    }
    return tmp;
  }
  function fetch($this, components, request, options, $completion) {
    var tmp = new $fetchCOROUTINE$7($this, components, request, options, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function get_$stableprop_26() {
    return 0;
  }
  function $interceptCOROUTINE$6(_this__u8e3s4, chain, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.chain_1 = chain;
  }
  protoOf($interceptCOROUTINE$6).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.request0__1 = this.chain_1.get_request_jdwg4m_k$();
            this.options1__1 = this.chain_1.get_options_jecmyz_k$();
            this.set_exceptionState_s9sevl_k$(2);
            var tmp_0 = this;
            tmp_0.tmp0_success3__1 = Companion_getInstance();
            this.set_state_a96kl8_k$(1);
            suspendResult = fetch(this._this__u8e3s4__1, this.chain_1.get_components_rknech_k$(), this.request0__1, this.options1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1_success = suspendResult;
            this.TRY_RESULT2__1 = _Result___init__impl__xyqfz8(tmp1_success);
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Error) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_2 = this;
              var tmp2_failure = Companion_getInstance();
              tmp_2.TRY_RESULT2__1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.set_state_a96kl8_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp3_fold = this.TRY_RESULT2__1;
            var exception = Result__exceptionOrNull_impl_p6xea9(tmp3_fold);
            var tmp_3;
            if (exception == null) {
              var tmp_4 = _Result___get_value__impl__bjfvqg(tmp3_fold);
              var tmp4__anonymous__pkmkx7 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
              tmp_3 = toImageResult_0(tmp4__anonymous__pkmkx7, this._this__u8e3s4__1, this.request0__1);
            } else {
              tmp_3 = new Error_0(this.request0__1, exception);
            }

            return tmp_3;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e_0);
        }
      }
     while (true);
  };
  function $fetchCOROUTINE$7(_this__u8e3s4, components, request, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.components_1 = components;
    this.request_1 = request;
    this.options_1 = options;
  }
  protoOf($fetchCOROUTINE$7).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            this.searchIndex0__1 = 0;
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (false) {
              this.set_state_a96kl8_k$(5);
              continue $sm;
            }

            this.tmp0_container2__1 = this.components_1.fetch_i4u8g1_k$(this.request_1.get_data_wokkxf_k$(), this.options_1, this.searchIndex0__1);
            this.fetcher3__1 = this.tmp0_container2__1.component1_7eebsc_k$();
            this.index4__1 = this.tmp0_container2__1.component2_7eebsb_k$();
            this.searchIndex0__1 = this.index4__1 + 1 | 0;
            this.set_state_a96kl8_k$(2);
            suspendResult = this.fetcher3__1.fetch_2oi2os_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var result = suspendResult;
            if (!(result == null)) {
              this.fetchResult1__1 = result;
              this.set_state_a96kl8_k$(5);
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

            break;
          case 3:
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 4:
            throw this.get_exception_x0n6w6_k$();
          case 5:
            return this.fetchResult1__1;
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function FetchInterceptor() {
    this.$stable_1 = 0;
  }
  protoOf(FetchInterceptor).intercept_vhxvbx_k$ = function (chain, $completion) {
    var tmp = new $interceptCOROUTINE$6(this, chain, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function Chain() {
  }
  function Interceptor() {
  }
  function _get_interceptors__h4min7($this) {
    return $this.interceptors_1;
  }
  function _set_memoryCache__lvcbo($this, _set____db54di) {
    $this.memoryCache_1 = _set____db54di;
  }
  function _get_memoryCache__uw9ink($this) {
    return $this.memoryCache_1;
  }
  function _set_diskCache__gsxlz4($this, _set____db54di) {
    $this.diskCache_1 = _set____db54di;
  }
  function _get_diskCache__chwufg_0($this) {
    return $this.diskCache_1;
  }
  function get_$stableprop_27() {
    return 8;
  }
  function InterceptorsBuilder$memoryCacheConfig$lambda($block) {
    return function () {
      return MemoryCache_0($block);
    };
  }
  function InterceptorsBuilder$diskCacheConfig$lambda($block) {
    return function () {
      return DiskCache_0($block);
    };
  }
  function InterceptorsBuilder() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.interceptors_1 = tmp$ret$0;
    this.memoryCache_1 = null;
    this.diskCache_1 = null;
    this.useDefaultInterceptors_1 = true;
    this.$stable_1 = 8;
  }
  protoOf(InterceptorsBuilder).set_useDefaultInterceptors_ge1tdo_k$ = function (_set____db54di) {
    this.useDefaultInterceptors_1 = _set____db54di;
  };
  protoOf(InterceptorsBuilder).get_useDefaultInterceptors_a4nw0h_k$ = function () {
    return this.useDefaultInterceptors_1;
  };
  protoOf(InterceptorsBuilder).addInterceptor_g96s6l_k$ = function (interceptor) {
    this.interceptors_1.add_1j60pz_k$(interceptor);
  };
  protoOf(InterceptorsBuilder).addInterceptors_sipj38_k$ = function (interceptors) {
    this.interceptors_1.addAll_oxxjjk_k$(interceptors);
  };
  protoOf(InterceptorsBuilder).memoryCacheConfig_4x9wfz_k$ = function (block) {
    var tmp = this;
    tmp.memoryCache_1 = InterceptorsBuilder$memoryCacheConfig$lambda(block);
  };
  protoOf(InterceptorsBuilder).memoryCache_aw6a2i_k$ = function (block) {
    this.memoryCache_1 = block;
  };
  protoOf(InterceptorsBuilder).diskCacheConfig_l840nv_k$ = function (block) {
    var tmp = this;
    tmp.diskCache_1 = InterceptorsBuilder$diskCacheConfig$lambda(block);
  };
  protoOf(InterceptorsBuilder).diskCache_5oi016_k$ = function (block) {
    this.diskCache_1 = block;
  };
  protoOf(InterceptorsBuilder).build_1k0s4u_k$ = function () {
    var tmp;
    if (this.useDefaultInterceptors_1) {
      var tmp_0 = new MappedInterceptor();
      var tmp0_safe_receiver = this.memoryCache_1;
      var tmp_1;
      if (tmp0_safe_receiver == null) {
        tmp_1 = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'com.seiko.imageloader.intercept.InterceptorsBuilder.build.<anonymous>' call
        tmp$ret$0 = new MemoryCacheInterceptor(tmp0_safe_receiver);
        tmp$ret$1 = tmp$ret$0;
        tmp_1 = tmp$ret$1;
      }
      var tmp_2 = tmp_1;
      var tmp_3 = new DecodeInterceptor();
      var tmp1_safe_receiver = this.diskCache_1;
      var tmp_4;
      if (tmp1_safe_receiver == null) {
        tmp_4 = null;
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$2;
        // Inline function 'com.seiko.imageloader.intercept.InterceptorsBuilder.build.<anonymous>' call
        tmp$ret$2 = new DiskCacheInterceptor(tmp1_safe_receiver);
        tmp$ret$3 = tmp$ret$2;
        tmp_4 = tmp$ret$3;
      }
      tmp = listOfNotNull([tmp_0, tmp_2, tmp_3, tmp_4, new FetchInterceptor()]);
    } else {
      tmp = emptyList();
    }
    return plus_0(this.interceptors_1, tmp);
  };
  function get_$stableprop_28() {
    return 0;
  }
  function MappedInterceptor$intercept$lambda($mappedData) {
    return function () {
      return 'map -> ' + toString($mappedData);
    };
  }
  function MappedInterceptor$intercept$lambda_0($mappedData) {
    return function ($this$newBuilder) {
      $this$newBuilder.data_w7ncka_k$($mappedData);
      return Unit_getInstance();
    };
  }
  function MappedInterceptor() {
    this.$stable_1 = 0;
  }
  protoOf(MappedInterceptor).intercept_vhxvbx_k$ = function (chain, $completion) {
    var request = chain.get_request_jdwg4m_k$();
    var options = chain.get_options_jecmyz_k$();
    var logger = chain.get_config_c0698r_k$().get_logger_g9gejd_k$();
    var mappedData = chain.get_components_rknech_k$().map_67jg4i_k$(request.get_data_wokkxf_k$(), options);
    var tmp = request.get_data_wokkxf_k$();
    d(logger, 'MappedInterceptor', tmp, MappedInterceptor$intercept$lambda(mappedData));
    var newRequest = request.newBuilder_xp52zh_k$(MappedInterceptor$intercept$lambda_0(mappedData));
    var tmp0 = chain.proceed_erlbth_k$(newRequest, $completion);
    return tmp0;
  };
  function _get_memoryCache__uw9ink_0($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = memoryCache$factory();
    tmp$ret$0 = $this.memoryCache$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function readFromMemoryCache($this, options, cacheKey) {
    var tmp;
    if (options.get_memoryCachePolicy_xij562_k$().get_readEnabled_oyc6n2_k$()) {
      tmp = _get_memoryCache__uw9ink_0($this).get_4u8u51_k$(cacheKey);
    } else {
      tmp = null;
    }
    return tmp;
  }
  function writeToMemoryCache($this, options, cacheKey, image) {
    if (!options.get_memoryCachePolicy_xij562_k$().get_writeEnabled_mrjiqz_k$())
      return false;
    _get_memoryCache__uw9ink_0($this).set_wv9iv0_k$(cacheKey, image);
    return true;
  }
  function get_$stableprop_29() {
    return 8;
  }
  function MemoryCacheInterceptor$intercept$lambda() {
    return 'read memory cache error:';
  }
  function MemoryCacheInterceptor$intercept$lambda_0() {
    return 'read memory cache.';
  }
  function MemoryCacheInterceptor$intercept$lambda_1() {
    return 'write memory cache error:';
  }
  function MemoryCacheInterceptor$intercept$lambda_2() {
    return 'write memory cache.';
  }
  function $interceptCOROUTINE$8(_this__u8e3s4, chain, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.chain_1 = chain;
  }
  protoOf($interceptCOROUTINE$8).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            this.request0__1 = this.chain_1.get_request_jdwg4m_k$();
            this.options1__1 = this.chain_1.get_options_jecmyz_k$();
            this.logger2__1 = this.chain_1.get_config_c0698r_k$().get_logger_g9gejd_k$();
            this.tmp0_elvis_lhs3__1 = this.chain_1.get_components_rknech_k$().key_movuxx_k$(this.request0__1.get_data_wokkxf_k$(), this.options1__1);
            if (this.tmp0_elvis_lhs3__1 == null) {
              this.set_state_a96kl8_k$(1);
              suspendResult = this.chain_1.proceed_erlbth_k$(this.request0__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.WHEN_RESULT4__1 = this.tmp0_elvis_lhs3__1;
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

            break;
          case 1:
            var tmp_0 = this;
            return suspendResult;
          case 2:
            this.cacheKey5__1 = this.WHEN_RESULT4__1;
            var tmp_1 = this;
            var tmp_2;
            try {
              var tmp0_success = Companion_getInstance();
              var tmp1_success = readFromMemoryCache(this._this__u8e3s4__1, this.options1__1, this.cacheKey5__1);
              tmp_2 = _Result___init__impl__xyqfz8(tmp1_success);
            } catch ($p) {
              var tmp_3;
              if ($p instanceof Error) {
                var e = $p;
                var tmp2_failure = Companion_getInstance();
                tmp_3 = _Result___init__impl__xyqfz8(createFailure(e));
              } else {
                throw $p;
              }
              tmp_2 = tmp_3;
            }

            var tmp3_onFailure = tmp_2;
            var tmp0_safe_receiver = Result__exceptionOrNull_impl_p6xea9(tmp3_onFailure);
            if (tmp0_safe_receiver == null)
              null;
            else {
              var tmp_4 = this.request0__1.get_data_wokkxf_k$();
              w(this.logger2__1, 'MemoryCacheInterceptor', tmp_4, tmp0_safe_receiver, MemoryCacheInterceptor$intercept$lambda);
            }

            ;
            var tmp4_getOrNull = tmp3_onFailure;
            var tmp_5;
            if (_Result___get_isFailure__impl__jpiriv(tmp4_getOrNull)) {
              tmp_5 = null;
            } else {
              var tmp_6 = _Result___get_value__impl__bjfvqg(tmp4_getOrNull);
              tmp_5 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
            }

            tmp_1.memoryCacheValue6__1 = tmp_5;
            this.request0__1.call_2btplb_k$(new ReadMemoryCache(!(this.memoryCacheValue6__1 == null)));
            if (!(this.memoryCacheValue6__1 == null)) {
              var tmp_7 = this.request0__1.get_data_wokkxf_k$();
              d(this.logger2__1, 'MemoryCacheInterceptor', tmp_7, MemoryCacheInterceptor$intercept$lambda_0);
              return new Bitmap_2(this.request0__1, this.memoryCacheValue6__1);
            }

            this.set_state_a96kl8_k$(3);
            suspendResult = this.chain_1.proceed_erlbth_k$(this.request0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var result = suspendResult;
            var tmp1_subject = result;
            if (tmp1_subject instanceof Bitmap_2) {
              var tmp_8;
              try {
                var tmp5_success = Companion_getInstance();
                var tmp6_success = writeToMemoryCache(this._this__u8e3s4__1, this.options1__1, this.cacheKey5__1, result.get_bitmap_bfxu7s_k$());
                tmp_8 = _Result___init__impl__xyqfz8(tmp6_success);
              } catch ($p) {
                var tmp_9;
                if ($p instanceof Error) {
                  var e_0 = $p;
                  var tmp7_failure = Companion_getInstance();
                  tmp_9 = _Result___init__impl__xyqfz8(createFailure(e_0));
                } else {
                  throw $p;
                }
                tmp_8 = tmp_9;
              }
              var tmp8_onFailure = tmp_8;
              var tmp0_safe_receiver_0 = Result__exceptionOrNull_impl_p6xea9(tmp8_onFailure);
              if (tmp0_safe_receiver_0 == null)
                null;
              else {
                var tmp_10 = this.request0__1.get_data_wokkxf_k$();
                w(this.logger2__1, 'MemoryCacheInterceptor', tmp_10, tmp0_safe_receiver_0, MemoryCacheInterceptor$intercept$lambda_1);
              }
              var tmp9_onSuccess = tmp8_onFailure;
              if (_Result___get_isSuccess__impl__sndoy8(tmp9_onSuccess)) {
                var tmp_11 = _Result___get_value__impl__bjfvqg(tmp9_onSuccess);
                var tmp10__anonymous__yfiz50 = (tmp_11 == null ? true : isObject(tmp_11)) ? tmp_11 : THROW_CCE();
                if (tmp10__anonymous__yfiz50) {
                  var tmp_12 = this.request0__1.get_data_wokkxf_k$();
                  d(this.logger2__1, 'MemoryCacheInterceptor', tmp_12, MemoryCacheInterceptor$intercept$lambda_2);
                }
              }
            } else {
            }

            return result;
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e_1;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e_1);
        }
      }
     while (true);
  };
  function MemoryCacheInterceptor(memoryCache) {
    this.memoryCache$delegate_1 = lazy(memoryCache);
    this.$stable_1 = 8;
  }
  protoOf(MemoryCacheInterceptor).intercept_vhxvbx_k$ = function (chain, $completion) {
    var tmp = new $interceptCOROUTINE$8(this, chain, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function memoryCache$factory() {
    return getPropertyCallableRef('memoryCache', 1, KProperty1, function (receiver) {
      return _get_memoryCache__uw9ink_0(receiver);
    }, null);
  }
  function _get_index__g2optt($this) {
    return $this.index_1;
  }
  function _get_interceptors__h4min7_0($this) {
    return $this.interceptors_1;
  }
  function RealInterceptorChain_init_$Init$(initialRequest, config, $this) {
    var tmp0_safe_receiver = initialRequest.get_interceptors_e78bex_k$();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : plus_0(tmp0_safe_receiver, config.get_engine_cxlavf_k$().get_interceptors_e78bex_k$());
    var tmp4_interceptors = tmp1_elvis_lhs == null ? config.get_engine_cxlavf_k$().get_interceptors_e78bex_k$() : tmp1_elvis_lhs;
    var tmp2_safe_receiver = initialRequest.get_components_rknech_k$();
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.merge_tbf0ny_k$(config.get_engine_cxlavf_k$().get_componentRegistry_9xd8z5_k$());
    var tmp5_components = tmp3_elvis_lhs == null ? config.get_engine_cxlavf_k$().get_componentRegistry_9xd8z5_k$() : tmp3_elvis_lhs;
    RealInterceptorChain.call($this, initialRequest, initialRequest, config, 0, tmp4_interceptors, tmp5_components);
    return $this;
  }
  function RealInterceptorChain_init_$Create$(initialRequest, config) {
    return RealInterceptorChain_init_$Init$(initialRequest, config, objectCreate(protoOf(RealInterceptorChain)));
  }
  function copy($this, index, request) {
    var tmp0_initialRequest = $this.initialRequest_1;
    var tmp1_config = $this.config_1;
    var tmp2_interceptors = $this.interceptors_1;
    var tmp3_components = $this.components_1;
    return new RealInterceptorChain(tmp0_initialRequest, request, tmp1_config, index, tmp2_interceptors, tmp3_components);
  }
  function RealInterceptorChain(initialRequest, request, config, index, interceptors, components) {
    this.initialRequest_1 = initialRequest;
    this.request_1 = request;
    this.config_1 = config;
    this.index_1 = index;
    this.interceptors_1 = interceptors;
    this.components_1 = components;
  }
  protoOf(RealInterceptorChain).get_initialRequest_4bioc4_k$ = function () {
    return this.initialRequest_1;
  };
  protoOf(RealInterceptorChain).get_request_jdwg4m_k$ = function () {
    return this.request_1;
  };
  protoOf(RealInterceptorChain).get_config_c0698r_k$ = function () {
    return this.config_1;
  };
  protoOf(RealInterceptorChain).get_components_rknech_k$ = function () {
    return this.components_1;
  };
  protoOf(RealInterceptorChain).proceed_erlbth_k$ = function (request, $completion) {
    // Inline function 'kotlin.check' call
    var tmp0_check = this.index_1 < this.interceptors_1.get_size_woubt6_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var interceptor = this.interceptors_1.get_fkrdnv_k$(this.index_1);
    var next = copy(this, this.index_1 + 1 | 0, request);
    var tmp0 = interceptor.intercept_vhxvbx_k$(next, $completion);
    return tmp0;
  };
  var DataSource_Disk_instance;
  var DataSource_Engine_instance;
  function values_0() {
    return [DataSource_Disk_getInstance(), DataSource_Engine_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'Disk':
        return DataSource_Disk_getInstance();
      case 'Engine':
        return DataSource_Engine_getInstance();
      default:
        DataSource_initEntries();
        THROW_ISE();
        break;
    }
  }
  var DataSource_entriesInitialized;
  function DataSource_initEntries() {
    if (DataSource_entriesInitialized)
      return Unit_getInstance();
    DataSource_entriesInitialized = true;
    DataSource_Disk_instance = new DataSource('Disk', 0);
    DataSource_Engine_instance = new DataSource('Engine', 1);
  }
  function DataSource(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function DataSource_Disk_getInstance() {
    DataSource_initEntries();
    return DataSource_Disk_instance;
  }
  function DataSource_Engine_getInstance() {
    DataSource_initEntries();
    return DataSource_Engine_instance;
  }
  function get_mimeType(_this__u8e3s4) {
    var tmp = _this__u8e3s4.get_1mhr4y_k$('KEY_MIME_TYPE');
    return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : null;
  }
  function get_EmptyExtraData() {
    return emptyMap();
  }
  function get_KEY_MIME_TYPE() {
    return KEY_MIME_TYPE;
  }
  var KEY_MIME_TYPE;
  function extraData(block) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.buildMap' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.buildMapInternal' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = LinkedHashMap_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.build_1k0s4u_k$();
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function mimeType(_this__u8e3s4, type) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = type == null ? true : charSequenceLength(type) === 0;
    if (!tmp$ret$0) {
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = 'KEY_MIME_TYPE';
      _this__u8e3s4.put_3mhbri_k$(tmp0_set, type);
    }
  }
  function get_$stableprop_30() {
    return 0;
  }
  function ImageRequest(data, optionsBuilders, extra, components, interceptors, eventListener) {
    this.data_1 = data;
    this.optionsBuilders_1 = optionsBuilders;
    this.extra_1 = extra;
    this.components_1 = components;
    this.interceptors_1 = interceptors;
    this.eventListener_1 = eventListener;
    this.$stable_1 = 0;
  }
  protoOf(ImageRequest).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(ImageRequest).get_optionsBuilders_r3f2ml_k$ = function () {
    return this.optionsBuilders_1;
  };
  protoOf(ImageRequest).get_extra_ir3qw7_k$ = function () {
    return this.extra_1;
  };
  protoOf(ImageRequest).get_components_rknech_k$ = function () {
    return this.components_1;
  };
  protoOf(ImageRequest).get_interceptors_e78bex_k$ = function () {
    return this.interceptors_1;
  };
  protoOf(ImageRequest).get_eventListener_aiqsaj_k$ = function () {
    return this.eventListener_1;
  };
  protoOf(ImageRequest).call_2btplb_k$ = function (event) {
    var tmp0_safe_receiver = this.eventListener_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tmp0_safe_receiver.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.seiko.imageloader.model.ImageRequest.call.<anonymous>' call
        element(event);
      }
    }
  };
  protoOf(ImageRequest).newBuilder_xp52zh_k$ = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = ImageRequestBuilder_init_$Create$_0(this);
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.build_1k0s4u_k$();
  };
  function _set_data__9licbx($this, _set____db54di) {
    $this.data_1 = _set____db54di;
  }
  function _get_data__d5abxd_1($this) {
    return $this.data_1;
  }
  function _set_extraData__w1qfcb($this, _set____db54di) {
    $this.extraData_1 = _set____db54di;
  }
  function _get_extraData__9oj689($this) {
    return $this.extraData_1;
  }
  function _get_optionsBuilders__1ms5p7($this) {
    return $this.optionsBuilders_1;
  }
  function _set_componentBuilder__lqhbnr($this, _set____db54di) {
    $this.componentBuilder_1 = _set____db54di;
  }
  function _get_componentBuilder__7cmxf1($this) {
    return $this.componentBuilder_1;
  }
  function _set_interceptors__wod97b($this, _set____db54di) {
    $this.interceptors_1 = _set____db54di;
  }
  function _get_interceptors__h4min7_1($this) {
    return $this.interceptors_1;
  }
  function _set_eventListener__jk1vo7($this, _set____db54di) {
    $this.eventListener_1 = _set____db54di;
  }
  function _get_eventListener__4cad5v($this) {
    return $this.eventListener_1;
  }
  function ImageRequestBuilder_init_$Init$($this) {
    ImageRequestBuilder.call($this);
    $this.data_1 = null;
    $this.extraData_1 = null;
    var tmp = $this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.optionsBuilders_1 = tmp$ret$0;
    $this.componentBuilder_1 = null;
    $this.interceptors_1 = null;
    $this.eventListener_1 = null;
    return $this;
  }
  function ImageRequestBuilder_init_$Create$() {
    return ImageRequestBuilder_init_$Init$(objectCreate(protoOf(ImageRequestBuilder)));
  }
  function ImageRequestBuilder_init_$Init$_0(request, $this) {
    ImageRequestBuilder.call($this);
    $this.data_1 = request.data_1;
    $this.extraData_1 = request.extra_1;
    $this.optionsBuilders_1 = toMutableList(request.optionsBuilders_1);
    var tmp = $this;
    var tmp0_safe_receiver = request.components_1;
    tmp.componentBuilder_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.newBuilder_dnl2aj_k$();
    var tmp_0 = $this;
    var tmp1_safe_receiver = request.interceptors_1;
    tmp_0.interceptors_1 = tmp1_safe_receiver == null ? null : toMutableList(tmp1_safe_receiver);
    var tmp_1 = $this;
    var tmp2_safe_receiver = request.eventListener_1;
    tmp_1.eventListener_1 = tmp2_safe_receiver == null ? null : toMutableList(tmp2_safe_receiver);
    return $this;
  }
  function ImageRequestBuilder_init_$Create$_0(request) {
    return ImageRequestBuilder_init_$Init$_0(request, objectCreate(protoOf(ImageRequestBuilder)));
  }
  function get_$stableprop_31() {
    return 8;
  }
  function ImageRequestBuilder$size$lambda($sizeResolver) {
    return function ($this$add) {
      $this$add.set_sizeResolver_mqx238_k$($sizeResolver);
      return Unit_getInstance();
    };
  }
  function ImageRequestBuilder$scale$lambda($scale) {
    return function ($this$add) {
      $this$add.set_scale_la1byq_k$($scale);
      return Unit_getInstance();
    };
  }
  protoOf(ImageRequestBuilder).data_w7ncka_k$ = function (data) {
    this.data_1 = data;
  };
  protoOf(ImageRequestBuilder).size_2urj2n_k$ = function (sizeResolver) {
    this.optionsBuilders_1.add_1j60pz_k$(ImageRequestBuilder$size$lambda(sizeResolver));
  };
  protoOf(ImageRequestBuilder).scale_eecl1x_k$ = function (scale) {
    this.optionsBuilders_1.add_1j60pz_k$(ImageRequestBuilder$scale$lambda(scale));
  };
  protoOf(ImageRequestBuilder).options_d14j1o_k$ = function (block) {
    this.optionsBuilders_1.add_1j60pz_k$(block);
  };
  protoOf(ImageRequestBuilder).components_f373zj_k$ = function (builder) {
    var tmp$ret$1;
    // Inline function 'kotlin.run' call
    var tmp0_elvis_lhs = this.componentBuilder_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new ComponentRegistryBuilder();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.seiko.imageloader.model.ImageRequestBuilder.components.<anonymous>' call
      this.componentBuilder_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_run = tmp;
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$1 = builder(tmp1_run);
  };
  protoOf(ImageRequestBuilder).addInterceptor_g96s6l_k$ = function (interceptor) {
    var tmp0_elvis_lhs = this.interceptors_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$_0();
      var tmp0_also = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.seiko.imageloader.model.ImageRequestBuilder.addInterceptor.<anonymous>' call
      this.interceptors_1 = tmp0_also;
      tmp$ret$1 = tmp0_also;
      tmp = tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.add_1j60pz_k$(interceptor);
  };
  protoOf(ImageRequestBuilder).eventListener_un9r7e_k$ = function (listener) {
    var tmp0_elvis_lhs = this.eventListener_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$_0();
      var tmp0_also = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.seiko.imageloader.model.ImageRequestBuilder.eventListener.<anonymous>' call
      this.eventListener_1 = tmp0_also;
      tmp$ret$1 = tmp0_also;
      tmp = tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.add_1j60pz_k$(listener);
  };
  protoOf(ImageRequestBuilder).extra_34wpeg_k$ = function (builder) {
    var tmp = this;
    var tmp0_safe_receiver = this.extraData_1;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.takeUnless' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_1;
      var tmp$ret$0;
      // Inline function 'com.seiko.imageloader.model.ImageRequestBuilder.extra.<anonymous>' call
      tmp$ret$0 = tmp0_safe_receiver.isEmpty_y1axqb_k$();
      if (!tmp$ret$0) {
        tmp_1 = tmp0_safe_receiver;
      } else {
        tmp_1 = null;
      }
      tmp$ret$1 = tmp_1;
      tmp_0 = tmp$ret$1;
    }
    var tmp1_safe_receiver = tmp_0;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : toMutableMap(tmp1_safe_receiver);
    var tmp_2;
    if (tmp2_safe_receiver == null) {
      tmp_2 = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      builder(tmp2_safe_receiver);
      tmp$ret$2 = tmp2_safe_receiver;
      tmp_2 = tmp$ret$2;
    }
    var tmp3_elvis_lhs = tmp_2;
    tmp.extraData_1 = tmp3_elvis_lhs == null ? extraData(builder) : tmp3_elvis_lhs;
  };
  protoOf(ImageRequestBuilder).build_1k0s4u_k$ = function () {
    var tmp0_elvis_lhs = this.data_1;
    var tmp3_data = tmp0_elvis_lhs == null ? NullRequestData_getInstance() : tmp0_elvis_lhs;
    var tmp4_optionsBuilders = this.optionsBuilders_1;
    var tmp2_safe_receiver = this.componentBuilder_1;
    var tmp5_components = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.build_1k0s4u_k$();
    var tmp6_interceptors = this.interceptors_1;
    var tmp1_elvis_lhs = this.extraData_1;
    var tmp7_extra = tmp1_elvis_lhs == null ? get_EmptyExtraData() : tmp1_elvis_lhs;
    var tmp8_eventListener = this.eventListener_1;
    return new ImageRequest(tmp3_data, tmp4_optionsBuilders, tmp7_extra, tmp5_components, tmp6_interceptors, tmp8_eventListener);
  };
  function ImageRequestBuilder() {
    this.$stable_1 = 8;
  }
  function get_$stableprop_32() {
    return 0;
  }
  function get_$stableprop_33() {
    return 0;
  }
  function get_$stableprop_34() {
    return 0;
  }
  function Prepare() {
    Prepare_instance = this;
    this.$stable_1 = 0;
  }
  var Prepare_instance;
  function Prepare_getInstance() {
    if (Prepare_instance == null)
      new Prepare();
    return Prepare_instance;
  }
  function ReadMemoryCache(hasCache) {
    this.hasCache_1 = hasCache;
    this.$stable_1 = 0;
  }
  protoOf(ReadMemoryCache).get_hasCache_twtkbz_k$ = function () {
    return this.hasCache_1;
  };
  protoOf(ReadMemoryCache).component1_7eebsc_k$ = function () {
    return this.hasCache_1;
  };
  protoOf(ReadMemoryCache).copy_85j4f9_k$ = function (hasCache) {
    return new ReadMemoryCache(hasCache);
  };
  protoOf(ReadMemoryCache).copy$default_dtwxb5_k$ = function (hasCache, $super) {
    hasCache = hasCache === VOID ? this.hasCache_1 : hasCache;
    return $super === VOID ? this.copy_85j4f9_k$(hasCache) : $super.copy_85j4f9_k$.call(this, hasCache);
  };
  protoOf(ReadMemoryCache).toString = function () {
    return 'ReadMemoryCache(hasCache=' + this.hasCache_1 + ')';
  };
  protoOf(ReadMemoryCache).hashCode = function () {
    return this.hasCache_1 | 0;
  };
  protoOf(ReadMemoryCache).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReadMemoryCache))
      return false;
    var tmp0_other_with_cast = other instanceof ReadMemoryCache ? other : THROW_CCE();
    if (!(this.hasCache_1 === tmp0_other_with_cast.hasCache_1))
      return false;
    return true;
  };
  function ReadDiskCache(hasCache) {
    this.hasCache_1 = hasCache;
    this.$stable_1 = 0;
  }
  protoOf(ReadDiskCache).get_hasCache_twtkbz_k$ = function () {
    return this.hasCache_1;
  };
  protoOf(ReadDiskCache).component1_7eebsc_k$ = function () {
    return this.hasCache_1;
  };
  protoOf(ReadDiskCache).copy_85j4f9_k$ = function (hasCache) {
    return new ReadDiskCache(hasCache);
  };
  protoOf(ReadDiskCache).copy$default_vufbi5_k$ = function (hasCache, $super) {
    hasCache = hasCache === VOID ? this.hasCache_1 : hasCache;
    return $super === VOID ? this.copy_85j4f9_k$(hasCache) : $super.copy_85j4f9_k$.call(this, hasCache);
  };
  protoOf(ReadDiskCache).toString = function () {
    return 'ReadDiskCache(hasCache=' + this.hasCache_1 + ')';
  };
  protoOf(ReadDiskCache).hashCode = function () {
    return this.hasCache_1 | 0;
  };
  protoOf(ReadDiskCache).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReadDiskCache))
      return false;
    var tmp0_other_with_cast = other instanceof ReadDiskCache ? other : THROW_CCE();
    if (!(this.hasCache_1 === tmp0_other_with_cast.hasCache_1))
      return false;
    return true;
  };
  function ImageRequestEvent() {
  }
  function get_$stableprop_35() {
    return 0;
  }
  function get_$stableprop_36() {
    return 0;
  }
  function get_$stableprop_37() {
    return 0;
  }
  function get_$stableprop_38() {
    return 0;
  }
  function get_$stableprop_39() {
    return 0;
  }
  function Source_0(request, source, dataSource, extra) {
    extra = extra === VOID ? get_EmptyExtraData() : extra;
    this.request_1 = request;
    this.source_1 = source;
    this.dataSource_1 = dataSource;
    this.extra_1 = extra;
    this.$stable_1 = 0;
  }
  protoOf(Source_0).get_request_jdwg4m_k$ = function () {
    return this.request_1;
  };
  protoOf(Source_0).get_source_jl0x7o_k$ = function () {
    return this.source_1;
  };
  protoOf(Source_0).get_dataSource_vce0e_k$ = function () {
    return this.dataSource_1;
  };
  protoOf(Source_0).get_extra_ir3qw7_k$ = function () {
    return this.extra_1;
  };
  protoOf(Source_0).component1_7eebsc_k$ = function () {
    return this.request_1;
  };
  protoOf(Source_0).component2_7eebsb_k$ = function () {
    return this.source_1;
  };
  protoOf(Source_0).component3_7eebsa_k$ = function () {
    return this.dataSource_1;
  };
  protoOf(Source_0).component4_7eebs9_k$ = function () {
    return this.extra_1;
  };
  protoOf(Source_0).copy_93r6qd_k$ = function (request, source, dataSource, extra) {
    return new Source_0(request, source, dataSource, extra);
  };
  protoOf(Source_0).copy$default_xshvau_k$ = function (request, source, dataSource, extra, $super) {
    request = request === VOID ? this.request_1 : request;
    source = source === VOID ? this.source_1 : source;
    dataSource = dataSource === VOID ? this.dataSource_1 : dataSource;
    extra = extra === VOID ? this.extra_1 : extra;
    return $super === VOID ? this.copy_93r6qd_k$(request, source, dataSource, extra) : $super.copy_93r6qd_k$.call(this, request, source, dataSource, extra);
  };
  protoOf(Source_0).toString = function () {
    return 'Source(request=' + this.request_1 + ', source=' + this.source_1 + ', dataSource=' + this.dataSource_1 + ', extra=' + this.extra_1 + ')';
  };
  protoOf(Source_0).hashCode = function () {
    var result = hashCode(this.request_1);
    result = imul(result, 31) + hashCode(this.source_1) | 0;
    result = imul(result, 31) + this.dataSource_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.extra_1) | 0;
    return result;
  };
  protoOf(Source_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Source_0))
      return false;
    var tmp0_other_with_cast = other instanceof Source_0 ? other : THROW_CCE();
    if (!equals(this.request_1, tmp0_other_with_cast.request_1))
      return false;
    if (!equals(this.source_1, tmp0_other_with_cast.source_1))
      return false;
    if (!this.dataSource_1.equals(tmp0_other_with_cast.dataSource_1))
      return false;
    if (!equals(this.extra_1, tmp0_other_with_cast.extra_1))
      return false;
    return true;
  };
  function Bitmap_2(request, bitmap) {
    this.request_1 = request;
    this.bitmap_1 = bitmap;
    this.$stable_1 = 0;
  }
  protoOf(Bitmap_2).get_request_jdwg4m_k$ = function () {
    return this.request_1;
  };
  protoOf(Bitmap_2).get_bitmap_bfxu7s_k$ = function () {
    return this.bitmap_1;
  };
  protoOf(Bitmap_2).component1_7eebsc_k$ = function () {
    return this.request_1;
  };
  protoOf(Bitmap_2).component2_7eebsb_k$ = function () {
    return this.bitmap_1;
  };
  protoOf(Bitmap_2).copy_j1df7z_k$ = function (request, bitmap) {
    return new Bitmap_2(request, bitmap);
  };
  protoOf(Bitmap_2).copy$default_rm5dc6_k$ = function (request, bitmap, $super) {
    request = request === VOID ? this.request_1 : request;
    bitmap = bitmap === VOID ? this.bitmap_1 : bitmap;
    return $super === VOID ? this.copy_j1df7z_k$(request, bitmap) : $super.copy_j1df7z_k$.call(this, request, bitmap);
  };
  protoOf(Bitmap_2).toString = function () {
    return 'Bitmap(request=' + this.request_1 + ', bitmap=' + this.bitmap_1 + ')';
  };
  protoOf(Bitmap_2).hashCode = function () {
    var result = hashCode(this.request_1);
    result = imul(result, 31) + this.bitmap_1.hashCode() | 0;
    return result;
  };
  protoOf(Bitmap_2).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Bitmap_2))
      return false;
    var tmp0_other_with_cast = other instanceof Bitmap_2 ? other : THROW_CCE();
    if (!equals(this.request_1, tmp0_other_with_cast.request_1))
      return false;
    if (!this.bitmap_1.equals(tmp0_other_with_cast.bitmap_1))
      return false;
    return true;
  };
  function Image_1(request, image) {
    this.request_1 = request;
    this.image_1 = image;
    this.$stable_1 = 0;
  }
  protoOf(Image_1).get_request_jdwg4m_k$ = function () {
    return this.request_1;
  };
  protoOf(Image_1).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(Image_1).component1_7eebsc_k$ = function () {
    return this.request_1;
  };
  protoOf(Image_1).component2_7eebsb_k$ = function () {
    return this.image_1;
  };
  protoOf(Image_1).copy_aqf45h_k$ = function (request, image) {
    return new Image_1(request, image);
  };
  protoOf(Image_1).copy$default_2cm8ia_k$ = function (request, image, $super) {
    request = request === VOID ? this.request_1 : request;
    image = image === VOID ? this.image_1 : image;
    return $super === VOID ? this.copy_aqf45h_k$(request, image) : $super.copy_aqf45h_k$.call(this, request, image);
  };
  protoOf(Image_1).toString = function () {
    return 'Image(request=' + this.request_1 + ', image=' + this.image_1 + ')';
  };
  protoOf(Image_1).hashCode = function () {
    var result = hashCode(this.request_1);
    result = imul(result, 31) + this.image_1.hashCode() | 0;
    return result;
  };
  protoOf(Image_1).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Image_1))
      return false;
    var tmp0_other_with_cast = other instanceof Image_1 ? other : THROW_CCE();
    if (!equals(this.request_1, tmp0_other_with_cast.request_1))
      return false;
    if (!this.image_1.equals(tmp0_other_with_cast.image_1))
      return false;
    return true;
  };
  function Painter_2(request, painter) {
    this.request_1 = request;
    this.painter_1 = painter;
    this.$stable_1 = 0;
  }
  protoOf(Painter_2).get_request_jdwg4m_k$ = function () {
    return this.request_1;
  };
  protoOf(Painter_2).get_painter_bzl4ri_k$ = function () {
    return this.painter_1;
  };
  protoOf(Painter_2).component1_7eebsc_k$ = function () {
    return this.request_1;
  };
  protoOf(Painter_2).component2_7eebsb_k$ = function () {
    return this.painter_1;
  };
  protoOf(Painter_2).copy_u6etkq_k$ = function (request, painter) {
    return new Painter_2(request, painter);
  };
  protoOf(Painter_2).copy$default_t03ukj_k$ = function (request, painter, $super) {
    request = request === VOID ? this.request_1 : request;
    painter = painter === VOID ? this.painter_1 : painter;
    return $super === VOID ? this.copy_u6etkq_k$(request, painter) : $super.copy_u6etkq_k$.call(this, request, painter);
  };
  protoOf(Painter_2).toString = function () {
    return 'Painter(request=' + this.request_1 + ', painter=' + this.painter_1 + ')';
  };
  protoOf(Painter_2).hashCode = function () {
    var result = hashCode(this.request_1);
    result = imul(result, 31) + hashCode(this.painter_1) | 0;
    return result;
  };
  protoOf(Painter_2).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Painter_2))
      return false;
    var tmp0_other_with_cast = other instanceof Painter_2 ? other : THROW_CCE();
    if (!equals(this.request_1, tmp0_other_with_cast.request_1))
      return false;
    if (!equals(this.painter_1, tmp0_other_with_cast.painter_1))
      return false;
    return true;
  };
  function Error_0(request, error) {
    this.request_1 = request;
    this.error_1 = error;
    this.$stable_1 = 0;
  }
  protoOf(Error_0).get_request_jdwg4m_k$ = function () {
    return this.request_1;
  };
  protoOf(Error_0).get_error_iqzvfj_k$ = function () {
    return this.error_1;
  };
  protoOf(Error_0).component1_7eebsc_k$ = function () {
    return this.request_1;
  };
  protoOf(Error_0).component2_7eebsb_k$ = function () {
    return this.error_1;
  };
  protoOf(Error_0).copy_u4hcr3_k$ = function (request, error) {
    return new Error_0(request, error);
  };
  protoOf(Error_0).copy$default_e2dzpn_k$ = function (request, error, $super) {
    request = request === VOID ? this.request_1 : request;
    error = error === VOID ? this.error_1 : error;
    return $super === VOID ? this.copy_u4hcr3_k$(request, error) : $super.copy_u4hcr3_k$.call(this, request, error);
  };
  protoOf(Error_0).toString = function () {
    return 'Error(request=' + this.request_1 + ', error=' + this.error_1 + ')';
  };
  protoOf(Error_0).hashCode = function () {
    var result = hashCode(this.request_1);
    result = imul(result, 31) + hashCode(this.error_1) | 0;
    return result;
  };
  protoOf(Error_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Error_0))
      return false;
    var tmp0_other_with_cast = other instanceof Error_0 ? other : THROW_CCE();
    if (!equals(this.request_1, tmp0_other_with_cast.request_1))
      return false;
    if (!equals(this.error_1, tmp0_other_with_cast.error_1))
      return false;
    return true;
  };
  function ImageResult() {
  }
  function get_$stableprop_40() {
    return 0;
  }
  function NullRequestData() {
    NullRequestData_instance = this;
    this.$stable_1 = 0;
  }
  protoOf(NullRequestData).toString = function () {
    return 'imageloader.request.NullRequestData';
  };
  var NullRequestData_instance;
  function NullRequestData_getInstance() {
    if (NullRequestData_instance == null)
      new NullRequestData();
    return NullRequestData_instance;
  }
  var ImageConfig_ALPHA_8_instance;
  var ImageConfig_ARGB_8888_instance;
  var ImageConfig_RGBA_F16_instance;
  var ImageConfig_HARDWARE_instance;
  function values_1() {
    return [ImageConfig_ALPHA_8_getInstance(), ImageConfig_ARGB_8888_getInstance(), ImageConfig_RGBA_F16_getInstance(), ImageConfig_HARDWARE_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'ALPHA_8':
        return ImageConfig_ALPHA_8_getInstance();
      case 'ARGB_8888':
        return ImageConfig_ARGB_8888_getInstance();
      case 'RGBA_F16':
        return ImageConfig_RGBA_F16_getInstance();
      case 'HARDWARE':
        return ImageConfig_HARDWARE_getInstance();
      default:
        ImageConfig_initEntries();
        THROW_ISE();
        break;
    }
  }
  var ImageConfig_entriesInitialized;
  function ImageConfig_initEntries() {
    if (ImageConfig_entriesInitialized)
      return Unit_getInstance();
    ImageConfig_entriesInitialized = true;
    ImageConfig_ALPHA_8_instance = new ImageConfig('ALPHA_8', 0);
    ImageConfig_ARGB_8888_instance = new ImageConfig('ARGB_8888', 1);
    ImageConfig_RGBA_F16_instance = new ImageConfig('RGBA_F16', 2);
    ImageConfig_HARDWARE_instance = new ImageConfig('HARDWARE', 3);
  }
  function ImageConfig(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.REPEAT_INFINITE_1 = -1;
  }
  protoOf(Companion_2).get_REPEAT_INFINITE_2e67gv_k$ = function () {
    return this.REPEAT_INFINITE_1;
  };
  var Companion_instance_2;
  function Companion_getInstance_15() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function get_$stableprop_41() {
    return 8;
  }
  function ImageConfig_ALPHA_8_getInstance() {
    ImageConfig_initEntries();
    return ImageConfig_ALPHA_8_instance;
  }
  function ImageConfig_ARGB_8888_getInstance() {
    ImageConfig_initEntries();
    return ImageConfig_ARGB_8888_instance;
  }
  function ImageConfig_RGBA_F16_getInstance() {
    ImageConfig_initEntries();
    return ImageConfig_RGBA_F16_instance;
  }
  function ImageConfig_HARDWARE_getInstance() {
    ImageConfig_initEntries();
    return ImageConfig_HARDWARE_instance;
  }
  function Options(allowInexactSize, premultipliedAlpha, retryIfDiskDecodeError, config, scale, sizeResolver, memoryCachePolicy, diskCachePolicy, playAnimate) {
    Companion_getInstance_15();
    allowInexactSize = allowInexactSize === VOID ? false : allowInexactSize;
    premultipliedAlpha = premultipliedAlpha === VOID ? true : premultipliedAlpha;
    retryIfDiskDecodeError = retryIfDiskDecodeError === VOID ? true : retryIfDiskDecodeError;
    config = config === VOID ? ImageConfig_ARGB_8888_getInstance() : config;
    scale = scale === VOID ? Scale_AUTO_getInstance() : scale;
    sizeResolver = sizeResolver === VOID ? Companion_getInstance_16().get_Unspecified_el0w4u_k$() : sizeResolver;
    memoryCachePolicy = memoryCachePolicy === VOID ? CachePolicy_ENABLED_getInstance() : memoryCachePolicy;
    diskCachePolicy = diskCachePolicy === VOID ? CachePolicy_ENABLED_getInstance() : diskCachePolicy;
    playAnimate = playAnimate === VOID ? true : playAnimate;
    this.allowInexactSize_1 = allowInexactSize;
    this.premultipliedAlpha_1 = premultipliedAlpha;
    this.retryIfDiskDecodeError_1 = retryIfDiskDecodeError;
    this.config_1 = config;
    this.scale_1 = scale;
    this.sizeResolver_1 = sizeResolver;
    this.memoryCachePolicy_1 = memoryCachePolicy;
    this.diskCachePolicy_1 = diskCachePolicy;
    this.playAnimate_1 = playAnimate;
    var tmp = this;
    Companion_getInstance_15();
    tmp.repeatCount_1 = -1;
    this.$stable_1 = 8;
  }
  protoOf(Options).set_allowInexactSize_4s2wq_k$ = function (_set____db54di) {
    this.allowInexactSize_1 = _set____db54di;
  };
  protoOf(Options).get_allowInexactSize_oi0b8b_k$ = function () {
    return this.allowInexactSize_1;
  };
  protoOf(Options).set_premultipliedAlpha_if0nac_k$ = function (_set____db54di) {
    this.premultipliedAlpha_1 = _set____db54di;
  };
  protoOf(Options).get_premultipliedAlpha_wtnhn3_k$ = function () {
    return this.premultipliedAlpha_1;
  };
  protoOf(Options).set_retryIfDiskDecodeError_olfes4_k$ = function (_set____db54di) {
    this.retryIfDiskDecodeError_1 = _set____db54di;
  };
  protoOf(Options).get_retryIfDiskDecodeError_p5wx8h_k$ = function () {
    return this.retryIfDiskDecodeError_1;
  };
  protoOf(Options).set_config_z8t2q5_k$ = function (_set____db54di) {
    this.config_1 = _set____db54di;
  };
  protoOf(Options).get_config_c0698r_k$ = function () {
    return this.config_1;
  };
  protoOf(Options).set_scale_la1byq_k$ = function (_set____db54di) {
    this.scale_1 = _set____db54di;
  };
  protoOf(Options).get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  protoOf(Options).set_sizeResolver_mqx238_k$ = function (_set____db54di) {
    this.sizeResolver_1 = _set____db54di;
  };
  protoOf(Options).get_sizeResolver_v7l9bk_k$ = function () {
    return this.sizeResolver_1;
  };
  protoOf(Options).set_memoryCachePolicy_w7w3si_k$ = function (_set____db54di) {
    this.memoryCachePolicy_1 = _set____db54di;
  };
  protoOf(Options).get_memoryCachePolicy_xij562_k$ = function () {
    return this.memoryCachePolicy_1;
  };
  protoOf(Options).set_diskCachePolicy_13pb4e_k$ = function (_set____db54di) {
    this.diskCachePolicy_1 = _set____db54di;
  };
  protoOf(Options).get_diskCachePolicy_b6aqha_k$ = function () {
    return this.diskCachePolicy_1;
  };
  protoOf(Options).set_playAnimate_vqv9kp_k$ = function (_set____db54di) {
    this.playAnimate_1 = _set____db54di;
  };
  protoOf(Options).get_playAnimate_9telp8_k$ = function () {
    return this.playAnimate_1;
  };
  protoOf(Options).set_repeatCount_ff947b_k$ = function (value) {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    Companion_getInstance_15();
    var tmp0_maxOf = -1;
    tmp$ret$0 = Math.max(value, tmp0_maxOf);
    tmp.repeatCount_1 = tmp$ret$0;
  };
  protoOf(Options).get_repeatCount_v59ovp_k$ = function () {
    return this.repeatCount_1;
  };
  protoOf(Options).component1_7eebsc_k$ = function () {
    return this.allowInexactSize_1;
  };
  protoOf(Options).component2_7eebsb_k$ = function () {
    return this.premultipliedAlpha_1;
  };
  protoOf(Options).component3_7eebsa_k$ = function () {
    return this.retryIfDiskDecodeError_1;
  };
  protoOf(Options).component4_7eebs9_k$ = function () {
    return this.config_1;
  };
  protoOf(Options).component5_7eebs8_k$ = function () {
    return this.scale_1;
  };
  protoOf(Options).component6_7eebs7_k$ = function () {
    return this.sizeResolver_1;
  };
  protoOf(Options).component7_7eebs6_k$ = function () {
    return this.memoryCachePolicy_1;
  };
  protoOf(Options).component8_7eebs5_k$ = function () {
    return this.diskCachePolicy_1;
  };
  protoOf(Options).component9_7eebs4_k$ = function () {
    return this.playAnimate_1;
  };
  protoOf(Options).copy_2ac3ud_k$ = function (allowInexactSize, premultipliedAlpha, retryIfDiskDecodeError, config, scale, sizeResolver, memoryCachePolicy, diskCachePolicy, playAnimate) {
    return new Options(allowInexactSize, premultipliedAlpha, retryIfDiskDecodeError, config, scale, sizeResolver, memoryCachePolicy, diskCachePolicy, playAnimate);
  };
  protoOf(Options).copy$default_p6f5se_k$ = function (allowInexactSize, premultipliedAlpha, retryIfDiskDecodeError, config, scale, sizeResolver, memoryCachePolicy, diskCachePolicy, playAnimate, $super) {
    allowInexactSize = allowInexactSize === VOID ? this.allowInexactSize_1 : allowInexactSize;
    premultipliedAlpha = premultipliedAlpha === VOID ? this.premultipliedAlpha_1 : premultipliedAlpha;
    retryIfDiskDecodeError = retryIfDiskDecodeError === VOID ? this.retryIfDiskDecodeError_1 : retryIfDiskDecodeError;
    config = config === VOID ? this.config_1 : config;
    scale = scale === VOID ? this.scale_1 : scale;
    sizeResolver = sizeResolver === VOID ? this.sizeResolver_1 : sizeResolver;
    memoryCachePolicy = memoryCachePolicy === VOID ? this.memoryCachePolicy_1 : memoryCachePolicy;
    diskCachePolicy = diskCachePolicy === VOID ? this.diskCachePolicy_1 : diskCachePolicy;
    playAnimate = playAnimate === VOID ? this.playAnimate_1 : playAnimate;
    return $super === VOID ? this.copy_2ac3ud_k$(allowInexactSize, premultipliedAlpha, retryIfDiskDecodeError, config, scale, sizeResolver, memoryCachePolicy, diskCachePolicy, playAnimate) : $super.copy_2ac3ud_k$.call(this, allowInexactSize, premultipliedAlpha, retryIfDiskDecodeError, config, scale, sizeResolver, memoryCachePolicy, diskCachePolicy, playAnimate);
  };
  protoOf(Options).toString = function () {
    return 'Options(allowInexactSize=' + this.allowInexactSize_1 + ', premultipliedAlpha=' + this.premultipliedAlpha_1 + ', retryIfDiskDecodeError=' + this.retryIfDiskDecodeError_1 + ', config=' + this.config_1 + ', scale=' + this.scale_1 + ', sizeResolver=' + this.sizeResolver_1 + ', memoryCachePolicy=' + this.memoryCachePolicy_1 + ', diskCachePolicy=' + this.diskCachePolicy_1 + ', playAnimate=' + this.playAnimate_1 + ')';
  };
  protoOf(Options).hashCode = function () {
    var result = this.allowInexactSize_1 | 0;
    result = imul(result, 31) + (this.premultipliedAlpha_1 | 0) | 0;
    result = imul(result, 31) + (this.retryIfDiskDecodeError_1 | 0) | 0;
    result = imul(result, 31) + this.config_1.hashCode() | 0;
    result = imul(result, 31) + this.scale_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.sizeResolver_1) | 0;
    result = imul(result, 31) + this.memoryCachePolicy_1.hashCode() | 0;
    result = imul(result, 31) + this.diskCachePolicy_1.hashCode() | 0;
    result = imul(result, 31) + (this.playAnimate_1 | 0) | 0;
    return result;
  };
  protoOf(Options).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Options))
      return false;
    var tmp0_other_with_cast = other instanceof Options ? other : THROW_CCE();
    if (!(this.allowInexactSize_1 === tmp0_other_with_cast.allowInexactSize_1))
      return false;
    if (!(this.premultipliedAlpha_1 === tmp0_other_with_cast.premultipliedAlpha_1))
      return false;
    if (!(this.retryIfDiskDecodeError_1 === tmp0_other_with_cast.retryIfDiskDecodeError_1))
      return false;
    if (!this.config_1.equals(tmp0_other_with_cast.config_1))
      return false;
    if (!this.scale_1.equals(tmp0_other_with_cast.scale_1))
      return false;
    if (!equals(this.sizeResolver_1, tmp0_other_with_cast.sizeResolver_1))
      return false;
    if (!this.memoryCachePolicy_1.equals(tmp0_other_with_cast.memoryCachePolicy_1))
      return false;
    if (!this.diskCachePolicy_1.equals(tmp0_other_with_cast.diskCachePolicy_1))
      return false;
    if (!(this.playAnimate_1 === tmp0_other_with_cast.playAnimate_1))
      return false;
    return true;
  };
  var Scale_AUTO_instance;
  var Scale_FILL_instance;
  var Scale_FIT_instance;
  function values_2() {
    return [Scale_AUTO_getInstance(), Scale_FILL_getInstance(), Scale_FIT_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'AUTO':
        return Scale_AUTO_getInstance();
      case 'FILL':
        return Scale_FILL_getInstance();
      case 'FIT':
        return Scale_FIT_getInstance();
      default:
        Scale_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Scale_entriesInitialized;
  function Scale_initEntries() {
    if (Scale_entriesInitialized)
      return Unit_getInstance();
    Scale_entriesInitialized = true;
    Scale_AUTO_instance = new Scale('AUTO', 0);
    Scale_FILL_instance = new Scale('FILL', 1);
    Scale_FIT_instance = new Scale('FIT', 2);
  }
  function Scale(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Scale_AUTO_getInstance() {
    Scale_initEntries();
    return Scale_AUTO_instance;
  }
  function Scale_FILL_getInstance() {
    Scale_initEntries();
    return Scale_FILL_instance;
  }
  function Scale_FIT_getInstance() {
    Scale_initEntries();
    return Scale_FIT_instance;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.Unspecified_1 = SizeResolver_0(Companion_getInstance_2().get_Unspecified_o59ai8_k$());
  }
  protoOf(Companion_3).get_Unspecified_el0w4u_k$ = function () {
    return this.Unspecified_1;
  };
  var Companion_instance_3;
  function Companion_getInstance_16() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function SizeResolver() {
  }
  function SizeResolver_0(size) {
    return new SizeResolver$1(size);
  }
  function SizeResolver$1($size) {
    this.$size_1 = $size;
  }
  protoOf(SizeResolver$1).size_rytwsh_k$ = function (_this__u8e3s4, $completion) {
    return new Size(this.$size_1);
  };
  function forEachIndices(_this__u8e3s4, action) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        action(_this__u8e3s4.get_fkrdnv_k$(i));
      }
       while (inductionVariable <= last);
  }
  function firstNotNullOfOrNullIndices(_this__u8e3s4, transform) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_safe_receiver = transform(_this__u8e3s4.get_fkrdnv_k$(i));
        if (tmp1_safe_receiver == null)
          null;
        else {
          var tmp$ret$0;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          return tmp1_safe_receiver;
        }
      }
       while (inductionVariable <= last);
    return null;
  }
  function removeIfIndices(_this__u8e3s4, predicate) {
    var numDeleted = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var rawIndex = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var index = rawIndex - numDeleted | 0;
        if (predicate(_this__u8e3s4.get_fkrdnv_k$(index))) {
          _this__u8e3s4.removeAt_qvpkxi_k$(index);
          var tmp1 = numDeleted;
          numDeleted = tmp1 + 1 | 0;
        }
      }
       while (inductionVariable <= last);
  }
  function _set_cachedCanvas__k6eyd9($this, _set____db54di) {
    $this.cachedCanvas_1 = _set____db54di;
  }
  function _get_cachedCanvas__zayd1r($this) {
    return $this.cachedCanvas_1;
  }
  function _set_scopeDensity__i5999($this, _set____db54di) {
    $this.scopeDensity_1 = _set____db54di;
  }
  function _get_scopeDensity__f1lhav($this) {
    return $this.scopeDensity_1;
  }
  function _set_layoutDirection__jzuy7k($this, _set____db54di) {
    $this.layoutDirection_1 = _set____db54di;
  }
  function _get_layoutDirection__u3l5q4($this) {
    return $this.layoutDirection_1;
  }
  function _set_size__9twho6_0($this, _set____db54di) {
    $this.size_1 = _set____db54di;
  }
  function _get_size__ddoh9m_0($this) {
    return $this.size_1;
  }
  function _get_cacheScope__m83lt3($this) {
    return $this.cacheScope_1;
  }
  function clear(_this__u8e3s4, $this) {
    _this__u8e3s4.drawRect$default_agcbs4_k$(Companion_getInstance_3().get_Black_wh3yn9_k$(), VOID, VOID, VOID, VOID, VOID, Companion_getInstance_4().get_Clear_9hhqh4_k$());
  }
  function DrawCache() {
    this.mCachedImage_1 = null;
    this.cachedCanvas_1 = null;
    this.scopeDensity_1 = null;
    this.layoutDirection_1 = LayoutDirection_Ltr_getInstance();
    this.size_1 = Companion_getInstance_5().get_Zero_4ip44w_k$();
    this.cacheScope_1 = new CanvasDrawScope();
  }
  protoOf(DrawCache).set_mCachedImage_auypvc_k$ = function (_set____db54di) {
    this.mCachedImage_1 = _set____db54di;
  };
  protoOf(DrawCache).get_mCachedImage_2okowb_k$ = function () {
    return this.mCachedImage_1;
  };
  protoOf(DrawCache).drawCachedImage_sd15qx_k$ = function (size, density, layoutDirection, block) {
    this.scopeDensity_1 = density;
    this.layoutDirection_1 = layoutDirection;
    var targetImage = this.mCachedImage_1;
    var targetCanvas = this.cachedCanvas_1;
    if (((targetImage == null ? true : targetCanvas == null) ? true : _IntSize___get_width__impl__d9yl4o(size) > targetImage.get_width_j0q4yl_k$()) ? true : _IntSize___get_height__impl__prv63b(size) > targetImage.get_height_e7t92o_k$()) {
      targetImage = ImageBitmap(_IntSize___get_width__impl__d9yl4o(size), _IntSize___get_height__impl__prv63b(size));
      targetCanvas = Canvas(targetImage);
      this.mCachedImage_1 = targetImage;
      this.cachedCanvas_1 = targetCanvas;
    }
    this.size_1 = size;
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw' call
    var tmp2_draw = this.cacheScope_1;
    var tmp3_draw = targetCanvas;
    var tmp4_draw = toSize(size);
    var tmp0_container = tmp2_draw.get_drawParams_ncgfpp_k$();
    var prevDensity = tmp0_container.component1_7eebsc_k$();
    var prevLayoutDirection = tmp0_container.component2_7eebsb_k$();
    var prevCanvas = tmp0_container.component3_7eebsa_k$();
    var prevSize = tmp0_container.component4_e3pqs9_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = tmp2_draw.get_drawParams_ncgfpp_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
    tmp0_apply.set_density_kzqph6_k$(density);
    tmp0_apply.set_layoutDirection_g6d9ui_k$(layoutDirection);
    tmp0_apply.set_canvas_eyjvr_k$(tmp3_draw);
    tmp0_apply.set_size_xj1bzm_k$(tmp4_draw);
    tmp$ret$0 = tmp0_apply;
    tmp3_draw.save_erlm4_k$();
    // Inline function 'com.seiko.imageloader.util.DrawCache.drawCachedImage.<anonymous>' call
    clear(tmp2_draw, this);
    block(tmp2_draw);
    tmp3_draw.restore_a2id37_k$();
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp1_apply = tmp2_draw.get_drawParams_ncgfpp_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
    tmp1_apply.set_density_kzqph6_k$(prevDensity);
    tmp1_apply.set_layoutDirection_g6d9ui_k$(prevLayoutDirection);
    tmp1_apply.set_canvas_eyjvr_k$(prevCanvas);
    tmp1_apply.set_size_xj1bzm_k$(prevSize);
    tmp$ret$1 = tmp1_apply;
    targetImage.prepareToDraw_sbmxaj_k$();
  };
  protoOf(DrawCache).drawInto_n4yq1_k$ = function (target, alpha, colorFilter) {
    var targetImage = this.mCachedImage_1;
    // Inline function 'kotlin.check' call
    var tmp0_check = !(targetImage == null);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.seiko.imageloader.util.DrawCache.drawInto.<anonymous>' call
      tmp$ret$0 = 'drawCachedImage must be invoked first before attempting to draw the result into another destination';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    target.drawImage$default_q3yuzr_k$(targetImage, VOID, this.size_1, VOID, VOID, alpha, VOID, colorFilter);
  };
  protoOf(DrawCache).drawInto$default_ifah1y_k$ = function (target, alpha, colorFilter, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    var tmp;
    if ($super === VOID) {
      this.drawInto_n4yq1_k$(target, alpha, colorFilter);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawInto_n4yq1_k$.call(this, target, alpha, colorFilter);
    }
    return tmp;
  };
  function closeQuietly(_this__u8e3s4) {
    try {
      _this__u8e3s4.close_ymq55z_k$();
    } catch ($p) {
      if ($p instanceof RuntimeException) {
        var e = $p;
        throw e;
      } else {
        if ($p instanceof Exception) {
          var _ = $p;
        } else {
          throw $p;
        }
      }
    }
  }
  function createFile(_this__u8e3s4, file) {
    if (!_this__u8e3s4.exists_5k0sy6_k$(file)) {
      closeQuietly(_this__u8e3s4.sink$default_cgm7j4_k$(file));
    }
  }
  function deleteContents(_this__u8e3s4, directory) {
    var exception = null;
    var tmp;
    try {
      tmp = _this__u8e3s4.list_b0hy9c_k$(directory);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof FileNotFoundException) {
        var _ = $p;
        return Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var files = tmp;
    var tmp0_iterator = files.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var file = tmp0_iterator.next_20eer_k$();
      try {
        if (_this__u8e3s4.metadata_6heaht_k$(file).get_isDirectory_hgpbzu_k$()) {
          deleteContents(_this__u8e3s4, file);
        }
        _this__u8e3s4.delete$default_7nynlj_k$(file);
      } catch ($p) {
        if ($p instanceof IOException) {
          var e = $p;
          if (exception == null) {
            exception = e;
          }
        } else {
          throw $p;
        }
      }
    }
    if (!(exception == null)) {
      throw exception;
    }
  }
  function _get_delegate__idh0py($this) {
    return $this.delegate_1;
  }
  function get_$stableprop_42() {
    return 8;
  }
  function ForwardingSink(delegate) {
    this.delegate_1 = delegate;
    this.$stable_1 = 8;
  }
  protoOf(ForwardingSink).write_x0zrut_k$ = function (source, byteCount) {
    return this.delegate_1.write_x0zrut_k$(source, byteCount);
  };
  protoOf(ForwardingSink).flush_sgqoqb_k$ = function () {
    return this.delegate_1.flush_sgqoqb_k$();
  };
  protoOf(ForwardingSink).timeout_lq9okf_k$ = function () {
    return this.delegate_1.timeout_lq9okf_k$();
  };
  protoOf(ForwardingSink).close_ymq55z_k$ = function () {
    return this.delegate_1.close_ymq55z_k$();
  };
  function Logger$Companion$None$1() {
  }
  protoOf(Logger$Companion$None$1).isLoggable_guo2zw_k$ = function (priority) {
    return false;
  };
  protoOf(Logger$Companion$None$1).log_ky6yr2_k$ = function (priority, tag, data, throwable, message) {
    return Unit_getInstance();
  };
  function Companion_4() {
    Companion_instance_4 = this;
    var tmp = this;
    tmp.None_1 = new Logger$Companion$None$1();
  }
  protoOf(Companion_4).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  var Companion_instance_4;
  function Companion_getInstance_17() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Logger() {
  }
  var LogPriority_VERBOSE_instance;
  var LogPriority_DEBUG_instance;
  var LogPriority_INFO_instance;
  var LogPriority_WARN_instance;
  var LogPriority_ERROR_instance;
  var LogPriority_ASSERT_instance;
  function values_3() {
    return [LogPriority_VERBOSE_getInstance(), LogPriority_DEBUG_getInstance(), LogPriority_INFO_getInstance(), LogPriority_WARN_getInstance(), LogPriority_ERROR_getInstance(), LogPriority_ASSERT_getInstance()];
  }
  function valueOf_3(value) {
    switch (value) {
      case 'VERBOSE':
        return LogPriority_VERBOSE_getInstance();
      case 'DEBUG':
        return LogPriority_DEBUG_getInstance();
      case 'INFO':
        return LogPriority_INFO_getInstance();
      case 'WARN':
        return LogPriority_WARN_getInstance();
      case 'ERROR':
        return LogPriority_ERROR_getInstance();
      case 'ASSERT':
        return LogPriority_ASSERT_getInstance();
      default:
        LogPriority_initEntries();
        THROW_ISE();
        break;
    }
  }
  var LogPriority_entriesInitialized;
  function LogPriority_initEntries() {
    if (LogPriority_entriesInitialized)
      return Unit_getInstance();
    LogPriority_entriesInitialized = true;
    LogPriority_VERBOSE_instance = new LogPriority('VERBOSE', 0);
    LogPriority_DEBUG_instance = new LogPriority('DEBUG', 1);
    LogPriority_INFO_instance = new LogPriority('INFO', 2);
    LogPriority_WARN_instance = new LogPriority('WARN', 3);
    LogPriority_ERROR_instance = new LogPriority('ERROR', 4);
    LogPriority_ASSERT_instance = new LogPriority('ASSERT', 5);
  }
  function LogPriority(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function d(_this__u8e3s4, tag, data, message) {
    var tmp0_log = LogPriority_DEBUG_getInstance();
    var tmp;
    if (_this__u8e3s4.isLoggable_guo2zw_k$(tmp0_log)) {
      _this__u8e3s4.log_ky6yr2_k$(tmp0_log, tag, data, null, message());
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function w(_this__u8e3s4, tag, data, throwable, message) {
    var tmp0_log = LogPriority_WARN_getInstance();
    var tmp;
    if (_this__u8e3s4.isLoggable_guo2zw_k$(tmp0_log)) {
      _this__u8e3s4.log_ky6yr2_k$(tmp0_log, tag, data, throwable, message());
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function log(_this__u8e3s4, priority, tag, data, throwable, message) {
    data = data === VOID ? null : data;
    throwable = throwable === VOID ? null : throwable;
    if (_this__u8e3s4.isLoggable_guo2zw_k$(priority)) {
      _this__u8e3s4.log_ky6yr2_k$(priority, tag, data, throwable, message());
    }
  }
  function LogPriority_VERBOSE_getInstance() {
    LogPriority_initEntries();
    return LogPriority_VERBOSE_instance;
  }
  function LogPriority_DEBUG_getInstance() {
    LogPriority_initEntries();
    return LogPriority_DEBUG_instance;
  }
  function LogPriority_INFO_getInstance() {
    LogPriority_initEntries();
    return LogPriority_INFO_instance;
  }
  function LogPriority_WARN_getInstance() {
    LogPriority_initEntries();
    return LogPriority_WARN_instance;
  }
  function LogPriority_ERROR_getInstance() {
    LogPriority_initEntries();
    return LogPriority_ERROR_instance;
  }
  function LogPriority_ASSERT_getInstance() {
    LogPriority_initEntries();
    return LogPriority_ASSERT_instance;
  }
  function get_LEFT_ANGLE_BRACKET() {
    _init_properties_SourceType_kt__ssiu23();
    return LEFT_ANGLE_BRACKET;
  }
  var LEFT_ANGLE_BRACKET;
  function get_SVG_TAG() {
    _init_properties_SourceType_kt__ssiu23();
    return SVG_TAG;
  }
  var SVG_TAG;
  function get_GIF_HEADER_87A() {
    _init_properties_SourceType_kt__ssiu23();
    return GIF_HEADER_87A;
  }
  var GIF_HEADER_87A;
  function get_GIF_HEADER_89A() {
    _init_properties_SourceType_kt__ssiu23();
    return GIF_HEADER_89A;
  }
  var GIF_HEADER_89A;
  function get_WEBP_HEADER_RIFF() {
    _init_properties_SourceType_kt__ssiu23();
    return WEBP_HEADER_RIFF;
  }
  var WEBP_HEADER_RIFF;
  function get_WEBP_HEADER_WEBP() {
    _init_properties_SourceType_kt__ssiu23();
    return WEBP_HEADER_WEBP;
  }
  var WEBP_HEADER_WEBP;
  function get_WEBP_HEADER_VPX8() {
    _init_properties_SourceType_kt__ssiu23();
    return WEBP_HEADER_VPX8;
  }
  var WEBP_HEADER_VPX8;
  function get_HEIF_HEADER_FTYP() {
    _init_properties_SourceType_kt__ssiu23();
    return HEIF_HEADER_FTYP;
  }
  var HEIF_HEADER_FTYP;
  function get_HEIF_HEADER_MSF1() {
    _init_properties_SourceType_kt__ssiu23();
    return HEIF_HEADER_MSF1;
  }
  var HEIF_HEADER_MSF1;
  function get_HEIF_HEADER_HEVC() {
    _init_properties_SourceType_kt__ssiu23();
    return HEIF_HEADER_HEVC;
  }
  var HEIF_HEADER_HEVC;
  function get_HEIF_HEADER_HEVX() {
    _init_properties_SourceType_kt__ssiu23();
    return HEIF_HEADER_HEVX;
  }
  var HEIF_HEADER_HEVX;
  function isGif(source) {
    _init_properties_SourceType_kt__ssiu23();
    return source.rangeEquals_xn2170_k$(new Long(0, 0), get_GIF_HEADER_89A()) ? true : source.rangeEquals_xn2170_k$(new Long(0, 0), get_GIF_HEADER_87A());
  }
  function isSvg(source) {
    _init_properties_SourceType_kt__ssiu23();
    return source.rangeEquals_xn2170_k$(new Long(0, 0), get_LEFT_ANGLE_BRACKET()) ? !indexOf_0(source, get_SVG_TAG(), new Long(0, 0), new Long(1024, 0)).equals(new Long(-1, -1)) : false;
  }
  function indexOf_0(_this__u8e3s4, bytes, fromIndex, toIndex) {
    _init_properties_SourceType_kt__ssiu23();
    // Inline function 'kotlin.require' call
    var tmp0_require = bytes.get_size_woubt6_k$() > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.seiko.imageloader.util.indexOf.<anonymous>' call
      tmp$ret$0 = 'bytes is empty';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var firstByte = bytes.get_fkrdnv_k$(0);
    var tmp$ret$1;
    // Inline function 'kotlin.Long.minus' call
    var tmp1_minus = bytes.get_size_woubt6_k$();
    tmp$ret$1 = toIndex.minus_llf5ei_k$(toLong(tmp1_minus));
    var lastIndex = tmp$ret$1;
    var currentIndex = fromIndex;
    while (currentIndex.compareTo_n4fqi2_k$(lastIndex) < 0) {
      currentIndex = _this__u8e3s4.indexOf_b1qwk3_k$(firstByte, currentIndex, lastIndex);
      if (currentIndex.equals(new Long(-1, -1)) ? true : _this__u8e3s4.rangeEquals_xn2170_k$(currentIndex, bytes)) {
        return currentIndex;
      }
      var tmp0 = currentIndex;
      currentIndex = tmp0.inc_28ke_k$();
    }
    return new Long(-1, -1);
  }
  var properties_initialized_SourceType_kt_ykvai1;
  function _init_properties_SourceType_kt__ssiu23() {
    if (properties_initialized_SourceType_kt_ykvai1) {
    } else {
      properties_initialized_SourceType_kt_ykvai1 = true;
      LEFT_ANGLE_BRACKET = Companion_getInstance_0().encodeUtf8_lzqk50_k$('<');
      SVG_TAG = Companion_getInstance_0().encodeUtf8_lzqk50_k$('<svg');
      GIF_HEADER_87A = Companion_getInstance_0().encodeUtf8_lzqk50_k$('GIF87a');
      GIF_HEADER_89A = Companion_getInstance_0().encodeUtf8_lzqk50_k$('GIF89a');
      WEBP_HEADER_RIFF = Companion_getInstance_0().encodeUtf8_lzqk50_k$('RIFF');
      WEBP_HEADER_WEBP = Companion_getInstance_0().encodeUtf8_lzqk50_k$('WEBP');
      WEBP_HEADER_VPX8 = Companion_getInstance_0().encodeUtf8_lzqk50_k$('VP8X');
      HEIF_HEADER_FTYP = Companion_getInstance_0().encodeUtf8_lzqk50_k$('ftyp');
      HEIF_HEADER_MSF1 = Companion_getInstance_0().encodeUtf8_lzqk50_k$('msf1');
      HEIF_HEADER_HEVC = Companion_getInstance_0().encodeUtf8_lzqk50_k$('hevc');
      HEIF_HEADER_HEVX = Companion_getInstance_0().encodeUtf8_lzqk50_k$('hevx');
    }
  }
  function get_LocalImageLoader() {
    _init_properties_LocalImageLoader_kt__yxe8hp();
    return LocalImageLoader;
  }
  var LocalImageLoader;
  var properties_initialized_LocalImageLoader_kt_pv083p;
  function _init_properties_LocalImageLoader_kt__yxe8hp() {
    if (properties_initialized_LocalImageLoader_kt_pv083p) {
    } else {
      properties_initialized_LocalImageLoader_kt_pv083p = true;
      LocalImageLoader = createImageLoaderProvidableCompositionLocal();
    }
  }
  function get_identityHashCode(_this__u8e3s4) {
    return _this__u8e3s4.hashCode();
  }
  function source_0(_this__u8e3s4, $completion) {
    var tmp = new $sourceCOROUTINE$9(_this__u8e3s4, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function bufferedSource(_this__u8e3s4, $completion) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Buffer();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.seiko.imageloader.util.bufferedSource.<anonymous>' call
    tmp0_apply.write_3dsjb8_k$(_this__u8e3s4);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function $sourceCOROUTINE$9(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($sourceCOROUTINE$9).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            var tmp_0 = this;
            tmp_0.tmp0_apply0__1 = new Buffer();
            this.set_state_a96kl8_k$(1);
            suspendResult = toByteArray(this._this__u8e3s4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.tmp0_apply0__1.write_3dsjb8_k$(ARGUMENT);
            ;
            return this.tmp0_apply0__1;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function get_$stableprop_43() {
    return 0;
  }
  function ImageLoaderProvidableCompositionLocal(delegate) {
    this.delegate_1 = delegate;
    this.$stable_1 = 0;
  }
  protoOf(ImageLoaderProvidableCompositionLocal).get_delegate_i94tki_k$ = function () {
    return this.delegate_1;
  };
  protoOf(ImageLoaderProvidableCompositionLocal).get_current_jwi6j4_k$ = function () {
    illegalDecoyCallException('<get-current>');
  };
  protoOf(ImageLoaderProvidableCompositionLocal).provides_oeb7zz_k$ = function (value) {
    return this.delegate_1.provides_3e53yf_k$(value);
  };
  protoOf(ImageLoaderProvidableCompositionLocal).$get_current$$composable_lr7uxx_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = this.delegate_1;
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_11nid3_k$(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0;
    var tmp0_0 = tmp$ret$0;
    return tmp0_0;
  };
  function createImageLoaderProvidableCompositionLocal() {
    return new ImageLoaderProvidableCompositionLocal(staticCompositionLocalOf(createImageLoaderProvidableCompositionLocal$lambda));
  }
  function createImageLoaderProvidableCompositionLocal$lambda() {
    return ImageLoader_0(VOID, createImageLoaderProvidableCompositionLocal$lambda$lambda);
  }
  function createImageLoaderProvidableCompositionLocal$lambda$lambda($this$ImageLoader) {
    $this$ImageLoader.components_f373zj_k$(createImageLoaderProvidableCompositionLocal$lambda$lambda$lambda($this$ImageLoader));
    return Unit_getInstance();
  }
  function createImageLoaderProvidableCompositionLocal$lambda$lambda$lambda($this_ImageLoader) {
    return function ($this$components) {
      setupDefaultComponents($this$components, $this_ImageLoader.get_imageScope_qsz29u_k$());
      return Unit_getInstance();
    };
  }
  function setupDefaultComponents(_this__u8e3s4, imageScope, density, httpClient) {
    imageScope = imageScope === VOID ? CoroutineScope_0(get_ioDispatcher()) : imageScope;
    density = density === VOID ? Density(2.0) : density;
    var tmp;
    if (httpClient === VOID) {
      tmp = setupDefaultComponents$lambda;
    } else {
      tmp = httpClient;
    }
    httpClient = tmp;
    setupKtorComponents(_this__u8e3s4, httpClient);
    setupBase64Components(_this__u8e3s4);
    setupCommonComponents(_this__u8e3s4);
    setupSkiaComponents(_this__u8e3s4, imageScope, density);
  }
  function setupDefaultComponents$lambda() {
    return new HttpClient(get_httpEngine());
  }
  function get_fakeFileSystem() {
    _init_properties_DiskCacheBuilder_js_kt__jc1ott();
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = fakeFileSystem$factory();
    tmp$ret$0 = fakeFileSystem$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  var fakeFileSystem$delegate;
  function get_systemFileSystem() {
    _init_properties_DiskCacheBuilder_js_kt__jc1ott();
    return get_fakeFileSystem();
  }
  function directorySize(directory) {
    _init_properties_DiskCacheBuilder_js_kt__jc1ott();
    var tmp$ret$1;
    // Inline function 'kotlin.Long.times' call
    var tmp$ret$0;
    // Inline function 'kotlin.Long.times' call
    tmp$ret$0 = new Long(131072, 0);
    var tmp0_times = tmp$ret$0;
    tmp$ret$1 = tmp0_times.times_2zfqpc_k$(new Long(1024, 0));
    return tmp$ret$1;
  }
  function fakeFileSystem$delegate$lambda() {
    _init_properties_DiskCacheBuilder_js_kt__jc1ott();
    return new FakeFileSystem();
  }
  function fakeFileSystem$factory() {
    return getPropertyCallableRef('fakeFileSystem', 0, KProperty0, function () {
      return get_fakeFileSystem();
    }, null);
  }
  var properties_initialized_DiskCacheBuilder_js_kt_aist9r;
  function _init_properties_DiskCacheBuilder_js_kt__jc1ott() {
    if (properties_initialized_DiskCacheBuilder_js_kt_aist9r) {
    } else {
      properties_initialized_DiskCacheBuilder_js_kt_aist9r = true;
      fakeFileSystem$delegate = lazy(fakeFileSystem$delegate$lambda);
    }
  }
  function _set__maxSize__pnvxrj($this, _set____db54di) {
    $this._maxSize_1 = _set____db54di;
  }
  function _get__maxSize__wkbsqt($this) {
    return $this._maxSize_1;
  }
  function _set__size__bau3qd($this, _set____db54di) {
    $this._size_1 = _set____db54di;
  }
  function _get__size__kqacr3($this) {
    return $this._size_1;
  }
  function _set__putCount__jtvoje($this, _set____db54di) {
    $this._putCount_1 = _set____db54di;
  }
  function _get__putCount__9gyrv6($this) {
    return $this._putCount_1;
  }
  function _set__createCount__y52ujn($this, _set____db54di) {
    $this._createCount_1 = _set____db54di;
  }
  function _get__createCount__lcagvd($this) {
    return $this._createCount_1;
  }
  function _set__evictionCount__m5cs1y($this, _set____db54di) {
    $this._evictionCount_1 = _set____db54di;
  }
  function _get__evictionCount__ncntvq($this) {
    return $this._evictionCount_1;
  }
  function _set__hitCount__fhqwzu($this, _set____db54di) {
    $this._hitCount_1 = _set____db54di;
  }
  function _get__hitCount__q8iokq($this) {
    return $this._hitCount_1;
  }
  function _set__missCount__hocw65($this, _set____db54di) {
    $this._missCount_1 = _set____db54di;
  }
  function _get__missCount__wqlhbd($this) {
    return $this._missCount_1;
  }
  function _get_map__e6co1h($this) {
    return $this.map_1;
  }
  function _get_syncObject__eretwv_0($this) {
    return $this.syncObject_1;
  }
  function safeSizeOf($this, key, value) {
    var result = $this.sizeOf_xsmc0r_k$(key, value);
    // Inline function 'kotlin.check' call
    var tmp0_check = result >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.seiko.imageloader.util.LruCache.safeSizeOf.<anonymous>' call
      tmp$ret$0 = 'Negative size: ' + key + '=' + value;
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return result;
  }
  function get_$stableprop_44() {
    return 8;
  }
  function LruCache(maxSize) {
    this._maxSize_1 = 0;
    this._size_1 = 0;
    this._putCount_1 = 0;
    this._createCount_1 = 0;
    this._evictionCount_1 = 0;
    this._hitCount_1 = 0;
    this._missCount_1 = 0;
    this.syncObject_1 = new Object();
    // Inline function 'kotlin.require' call
    var tmp0_require = maxSize > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.seiko.imageloader.util.LruCache.<anonymous>' call
      tmp$ret$0 = 'maxSize <= 0';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this._maxSize_1 = maxSize;
    this.map_1 = LinkedHashMap_init_$Create$(0, 0.75);
    this.$stable_1 = 8;
  }
  protoOf(LruCache).size_23och_k$ = function () {
    var tmp$ret$2;
    // Inline function 'com.seiko.imageloader.util.synchronized' call
    var tmp0_synchronized = this.syncObject_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'com.seiko.imageloader.util.LruCache.size.<anonymous>' call
    tmp$ret$0 = this._size_1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(LruCache).maxSize_dyjl39_k$ = function () {
    var tmp$ret$2;
    // Inline function 'com.seiko.imageloader.util.synchronized' call
    var tmp0_synchronized = this.syncObject_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'com.seiko.imageloader.util.LruCache.maxSize.<anonymous>' call
    tmp$ret$0 = this._maxSize_1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(LruCache).resize_w0jdrw_k$ = function (maxSize) {
    // Inline function 'kotlin.require' call
    var tmp0_require = maxSize > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.seiko.imageloader.util.LruCache.resize.<anonymous>' call
      tmp$ret$0 = 'maxSize <= 0';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp$ret$2;
    // Inline function 'com.seiko.imageloader.util.synchronized' call
    var tmp1_synchronized = this.syncObject_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this._maxSize_1 = maxSize;
    tmp$ret$1 = Unit_getInstance();
    tmp$ret$2 = tmp$ret$1;
    this.trimToSize_kob4eq_k$(maxSize);
  };
  protoOf(LruCache).get_1mhr4y_k$ = function (key) {
    var mapValue = null;
    var tmp$ret$2;
    // Inline function 'com.seiko.imageloader.util.synchronized' call
    var tmp0_synchronized = this.syncObject_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'com.seiko.imageloader.util.LruCache.get.<anonymous>' call
    mapValue = this.map_1.get_1mhr4y_k$(key);
    if (!(mapValue == null)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._hitCount_1;
      tmp0_this._hitCount_1 = tmp1 + 1 | 0;
      return mapValue;
    }
    var tmp2_this = this;
    var tmp3 = tmp2_this._missCount_1;
    tmp2_this._missCount_1 = tmp3 + 1 | 0;
    tmp$ret$0 = tmp3;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp0_elvis_lhs = this.create_u3tv48_k$(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var createdValue = tmp;
    var tmp$ret$5;
    // Inline function 'com.seiko.imageloader.util.synchronized' call
    var tmp1_synchronized = this.syncObject_1;
    var tmp$ret$4;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$3;
    // Inline function 'com.seiko.imageloader.util.LruCache.get.<anonymous>' call
    var tmp0_this_0 = this;
    var tmp1_0 = tmp0_this_0._createCount_1;
    tmp0_this_0._createCount_1 = tmp1_0 + 1 | 0;
    mapValue = this.map_1.put_3mhbri_k$(key, createdValue);
    var tmp_0;
    if (!(mapValue == null)) {
      tmp_0 = this.map_1.put_3mhbri_k$(key, ensureNotNull(mapValue));
    } else {
      var tmp2_this_0 = this;
      tmp2_this_0._size_1 = tmp2_this_0._size_1 + safeSizeOf(this, key, createdValue) | 0;
      tmp_0 = Unit_getInstance();
    }
    tmp$ret$3 = tmp_0;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    var tmp_1;
    if (!(mapValue == null)) {
      this.entryRemoved_l91vrc_k$(false, key, createdValue, mapValue);
      tmp_1 = mapValue;
    } else {
      this.trimToSize_kob4eq_k$(this._maxSize_1);
      tmp_1 = createdValue;
    }
    return tmp_1;
  };
  protoOf(LruCache).put_3mhbri_k$ = function (key, value) {
    var previous = null;
    var tmp$ret$3;
    // Inline function 'com.seiko.imageloader.util.synchronized' call
    var tmp0_synchronized = this.syncObject_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$1;
    // Inline function 'com.seiko.imageloader.util.LruCache.put.<anonymous>' call
    var tmp0_this = this;
    var tmp1 = tmp0_this._putCount_1;
    tmp0_this._putCount_1 = tmp1 + 1 | 0;
    var tmp2_this = this;
    tmp2_this._size_1 = tmp2_this._size_1 + safeSizeOf(this, key, value) | 0;
    previous = this.map_1.put_3mhbri_k$(key, value);
    var tmp3_safe_receiver = previous;
    var tmp;
    if (tmp3_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp0_this_0 = this;
      tmp0_this_0._size_1 = tmp0_this_0._size_1 - safeSizeOf(this, key, tmp3_safe_receiver) | 0;
      tmp$ret$0 = Unit_getInstance();
      tmp = Unit_getInstance();
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp0_safe_receiver = previous;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.entryRemoved_l91vrc_k$(false, key, tmp0_safe_receiver, value);
      tmp$ret$4 = Unit_getInstance();
    }
    this.trimToSize_kob4eq_k$(this._maxSize_1);
    return previous;
  };
  protoOf(LruCache).trimToSize_kob4eq_k$ = function (maxSize) {
    while (true) {
      var key = null;
      var value = null;
      var tmp$ret$6;
      // Inline function 'com.seiko.imageloader.util.synchronized' call
      var tmp0_synchronized = this.syncObject_1;
      var tmp$ret$5;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$4;
      // Inline function 'com.seiko.imageloader.util.LruCache.trimToSize.<anonymous>' call
      // Inline function 'kotlin.check' call
      var tmp0_check = !(this._size_1 < 0 ? true : this.map_1.isEmpty_y1axqb_k$() ? !(this._size_1 === 0) : false);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'com.seiko.imageloader.util.LruCache.trimToSize.<anonymous>.<anonymous>' call
        tmp$ret$0 = plus_1(getKClassFromExpression(this).get_simpleName_r6f8py_k$(), '.sizeOf() is reporting inconsistent results!');
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      if (this._size_1 <= maxSize ? true : this.map_1.isEmpty_y1axqb_k$()) {
        return Unit_getInstance();
      }
      var tmp0_container = this.map_1.get_entries_p20ztl_k$().iterator_jk1svi_k$().next_20eer_k$();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = tmp0_container.get_key_18j28a_k$();
      var key1 = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = tmp0_container.get_value_j01efc_k$();
      var value1 = tmp$ret$2;
      key = key1;
      value = value1;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.remove' call
      var tmp1_remove = this.map_1;
      var tmp2_remove = key;
      tmp$ret$3 = (isInterface(tmp1_remove, MutableMap) ? tmp1_remove : THROW_CCE()).remove_8hbkc0_k$(tmp2_remove);
      var tmp1_this = this;
      tmp1_this._size_1 = tmp1_this._size_1 - safeSizeOf(this, ensureNotNull(key), ensureNotNull(value)) | 0;
      var tmp2_this = this;
      var tmp3 = tmp2_this._evictionCount_1;
      tmp2_this._evictionCount_1 = tmp3 + 1 | 0;
      tmp$ret$4 = tmp3;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      this.entryRemoved_l91vrc_k$(true, ensureNotNull(key), ensureNotNull(value), null);
    }
  };
  protoOf(LruCache).remove_8hbkc0_k$ = function (key) {
    var previous = null;
    var tmp$ret$3;
    // Inline function 'com.seiko.imageloader.util.synchronized' call
    var tmp0_synchronized = this.syncObject_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$1;
    // Inline function 'com.seiko.imageloader.util.LruCache.remove.<anonymous>' call
    previous = this.map_1.remove_8hbkc0_k$(key);
    var tmp0_safe_receiver = previous;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp0_this = this;
      tmp0_this._size_1 = tmp0_this._size_1 - safeSizeOf(this, key, tmp0_safe_receiver) | 0;
      tmp$ret$0 = Unit_getInstance();
      tmp = Unit_getInstance();
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp0_safe_receiver_0 = previous;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.entryRemoved_l91vrc_k$(false, key, tmp0_safe_receiver_0, null);
      tmp$ret$4 = Unit_getInstance();
    }
    return previous;
  };
  protoOf(LruCache).entryRemoved_l91vrc_k$ = function (evicted, key, oldValue, newValue) {
    return Unit_getInstance();
  };
  protoOf(LruCache).create_u3tv48_k$ = function (key) {
    return null;
  };
  protoOf(LruCache).sizeOf_xsmc0r_k$ = function (key, value) {
    return 1;
  };
  protoOf(LruCache).evictAll_sd7znr_k$ = function () {
    this.trimToSize_kob4eq_k$(-1);
  };
  protoOf(LruCache).snapshot_4plubo_k$ = function () {
    var copy = LinkedHashMap_init_$Create$_0();
    var tmp$ret$3;
    // Inline function 'com.seiko.imageloader.util.synchronized' call
    var tmp0_synchronized = this.syncObject_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_forEach = this.map_1.get_entries_p20ztl_k$();
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.seiko.imageloader.util.LruCache.snapshot.<anonymous>.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$0 = element.get_key_18j28a_k$();
      var key = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$1 = element.get_value_j01efc_k$();
      var value = tmp$ret$1;
      // Inline function 'kotlin.collections.set' call
      copy.put_3mhbri_k$(key, value);
    }
    tmp$ret$2 = Unit_getInstance();
    tmp$ret$3 = tmp$ret$2;
    return copy;
  };
  function get_ioDispatcher() {
    return Dispatchers_getInstance().get_Default_goqax4_k$();
  }
  function get_httpEngine() {
    return Js_getInstance().create$default_jugl06_k$();
  }
  function _set_weakRef__mfwweu($this, _set____db54di) {
    $this.weakRef_1 = _set____db54di;
  }
  function _get_weakRef__myyv7a($this) {
    return $this.weakRef_1;
  }
  function _set_strongRefFallback__mnfw1l($this, _set____db54di) {
    $this.strongRefFallback_1 = _set____db54di;
  }
  function _get_strongRefFallback__qnv9n7($this) {
    return $this.strongRefFallback_1;
  }
  function get_$stableprop_45() {
    return 8;
  }
  function WeakReference(referred) {
    try {
      this.weakRef_1 = new WeakRef(aWrapped);
      this.strongRefFallback_1 = null;
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        this.strongRefFallback_1 = referred;
        this.weakRef_1 = null;
      } else {
        throw $p;
      }
    }
    this.$stable_1 = 8;
  }
  protoOf(WeakReference).get_26vq_k$ = function () {
    var tmp;
    if (this.weakRef_1 == null) {
      tmp = this.strongRefFallback_1;
    } else {
      var tmp_0 = this.weakRef_1.deref();
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    }
    return tmp;
  };
  function synchronized(lock, block) {
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    tmp$ret$0 = block();
    return tmp$ret$0;
  }
  function _get_atomic__qk09xc($this) {
    return $this.atomic_1;
  }
  function get_$stableprop_46() {
    return 0;
  }
  function AtomicBoolean(referred) {
    this.atomic_1 = atomic$boolean$1(referred);
    this.$stable_1 = 0;
  }
  protoOf(AtomicBoolean).get_26vq_k$ = function () {
    return this.atomic_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(AtomicBoolean).compareAndSet_34bjtc_k$ = function (expect, update) {
    return this.atomic_1.atomicfu$compareAndSet(expect, update);
  };
  function get_size(_this__u8e3s4) {
    return imul(_this__u8e3s4.get_height_e7t92o_k$(), _this__u8e3s4.get_rowBytes_viqv7q_k$());
  }
  function setupSkiaComponents(_this__u8e3s4, imageScope, density) {
    imageScope = imageScope === VOID ? CoroutineScope_0(get_ioDispatcher()) : imageScope;
    density = density === VOID ? Density(2.0) : density;
    _this__u8e3s4.add_j0y680_k$(new Factory_6(density));
    _this__u8e3s4.add_j0y680_k$(new Factory_4(imageScope));
    _this__u8e3s4.add_j0y680_k$(new Factory_5());
  }
  function _get_imageScope__4ip3w2($this) {
    return $this.imageScope_1;
  }
  function get_$stableprop_47() {
    return 8;
  }
  function _get_channel__c6e3yq($this) {
    return $this.channel_1;
  }
  function _get_imageScope__4ip3w2_0($this) {
    return $this.imageScope_1;
  }
  function _get_options__xuq71v($this) {
    return $this.options_1;
  }
  function Factory_4(imageScope) {
    this.imageScope_1 = imageScope;
    this.$stable_1 = 8;
  }
  protoOf(Factory_4).create_3frw9z_k$ = function (source, options, $completion) {
    if (!isGif(source.get_source_jl0x7o_k$()))
      return null;
    return new GifDecoder(source.get_source_jl0x7o_k$(), this.imageScope_1, options);
  };
  function get_$stableprop_48() {
    return 8;
  }
  function GifDecoder(channel, imageScope, options) {
    this.channel_1 = channel;
    this.imageScope_1 = imageScope;
    this.options_1 = options;
    this.$stable_1 = 8;
  }
  protoOf(GifDecoder).decode_l60xm2_k$ = function ($completion) {
    var codec = Companion_getInstance_6().makeFromData_65gxva_k$(Companion_getInstance_7().makeFromBytes$default_b8cybj_k$(this.channel_1.readByteArray_52wnjv_k$()));
    return new Painter_0(new GifPainter(codec, this.imageScope_1, this.options_1.get_playAnimate_9telp8_k$(), this.options_1.get_repeatCount_v59ovp_k$()));
  };
  protoOf(GifDecoder).decode_gwsgab_k$ = function ($completion) {
    return this.decode_l60xm2_k$($completion);
  };
  function get_$stableprop_49() {
    return 0;
  }
  function _get_channel__c6e3yq_0($this) {
    return $this.channel_1;
  }
  function Factory_5() {
    this.$stable_1 = 0;
  }
  protoOf(Factory_5).create_g5el86_k$ = function (source, options, $completion) {
    return new SkiaImageDecoder(source.get_source_jl0x7o_k$());
  };
  protoOf(Factory_5).create_3frw9z_k$ = function (source, options, $completion) {
    return this.create_g5el86_k$(source, options, $completion);
  };
  function get_$stableprop_50() {
    return 8;
  }
  function SkiaImageDecoder(channel) {
    this.channel_1 = channel;
    this.$stable_1 = 8;
  }
  protoOf(SkiaImageDecoder).decode_l60xm2_k$ = function ($completion) {
    var image = Companion_getInstance_8().makeFromEncoded_eatg37_k$(this.channel_1.readByteArray_52wnjv_k$());
    return new Bitmap_0(Companion_getInstance_9().makeFromImage_b5hj39_k$(image));
  };
  protoOf(SkiaImageDecoder).decode_gwsgab_k$ = function ($completion) {
    return this.decode_l60xm2_k$($completion);
  };
  function _get_density__l5pazb($this) {
    return $this.density_1;
  }
  function isApplicable_1($this, source) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.seiko.imageloader.model.mimeType' call
    var tmp0__get_mimeType__866ghv = source.get_extra_ir3qw7_k$();
    var tmp_0 = tmp0__get_mimeType__866ghv.get_1mhr4y_k$(get_KEY_MIME_TYPE());
    tmp$ret$0 = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : null;
    var tmp_1 = tmp$ret$0;
    Companion_getInstance_18();
    if (tmp_1 === 'image/svg+xml') {
      tmp = true;
    } else {
      tmp = isSvg(source.get_source_jl0x7o_k$());
    }
    return tmp;
  }
  function get_$stableprop_51() {
    return 0;
  }
  function _get_MIME_TYPE_SVG__3qmfdl($this) {
    return $this.MIME_TYPE_SVG_1;
  }
  function _get_source__4cuw5s($this) {
    return $this.source_1;
  }
  function _get_density__l5pazb_0($this) {
    return $this.density_1;
  }
  function _get_options__xuq71v_0($this) {
    return $this.options_1;
  }
  function Factory_6(density) {
    this.density_1 = density;
    this.$stable_1 = 0;
  }
  protoOf(Factory_6).create_3frw9z_k$ = function (source, options, $completion) {
    if (!isApplicable_1(this, source))
      return null;
    return new SvgDecoder(source, this.density_1, options);
  };
  function Companion_5() {
    Companion_instance_5 = this;
    this.MIME_TYPE_SVG_1 = 'image/svg+xml';
  }
  var Companion_instance_5;
  function Companion_getInstance_18() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function get_$stableprop_52() {
    return 8;
  }
  function $decodeCOROUTINE$10(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($decodeCOROUTINE$10).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.data0__1 = Companion_getInstance_7().makeFromBytes$default_b8cybj_k$(this._this__u8e3s4__1.source_1.get_source_jl0x7o_k$().readByteArray_52wnjv_k$());
            var tmp_0 = this;
            tmp_0.tmp0_run1__1 = this._this__u8e3s4__1.options_1.get_sizeResolver_v7l9bk_k$();
            this.set_state_a96kl8_k$(1);
            suspendResult = this.tmp0_run1__1.size_rytwsh_k$(this._this__u8e3s4__1.density_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 1:
            var unboxed = suspendResult.packedValue_1;
            suspendResult = new Size(unboxed);
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            var requestSize = suspendResult.packedValue_1;
            return new Painter_0(new SVGPainter(SVGDOM_init_$Create$(this.data0__1), this._this__u8e3s4__1.density_1, requestSize));
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function SvgDecoder(source, density, options) {
    Companion_getInstance_18();
    this.source_1 = source;
    this.density_1 = density;
    this.options_1 = options;
    this.$stable_1 = 8;
  }
  protoOf(SvgDecoder).decode_l60xm2_k$ = function ($completion) {
    var tmp = new $decodeCOROUTINE$10(this, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SvgDecoder).decode_gwsgab_k$ = function ($completion) {
    return this.decode_l60xm2_k$($completion);
  };
  function _get_codec__iweo3p($this) {
    return $this.codec_1;
  }
  function _get_imageScope__4ip3w2_1($this) {
    return $this.imageScope_1;
  }
  function _get_playAnimate__2m5yxw($this) {
    return $this.playAnimate_1;
  }
  function _get_repeatCount__jbl9ur($this) {
    return $this.repeatCount_1;
  }
  function _set_bitmapCache__ghrnla($this, _set____db54di) {
    $this.bitmapCache_1 = _set____db54di;
  }
  function _get_bitmapCache__dsmiqm($this) {
    return $this.bitmapCache_1;
  }
  function _set_drawImageBitmap__9cr2rj($this, _set____db54di) {
    $this.drawImageBitmap_1 = _set____db54di;
  }
  function _get_drawImageBitmap__jghaa3($this) {
    return $this.drawImageBitmap_1;
  }
  function _set_rememberJob__d3by0b($this, _set____db54di) {
    $this.rememberJob_1 = _set____db54di;
  }
  function _get_rememberJob__h728bl($this) {
    return $this.rememberJob_1;
  }
  function clear_0($this) {
    if ($this.rememberJob_1 == null)
      return Unit_getInstance();
    var tmp0_safe_receiver = $this.rememberJob_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.cancel$default_64jlsz_k$();
    }
    $this.rememberJob_1 = null;
    $this.bitmapCache_1 = null;
    $this.drawImageBitmap_1.set_value_rnwamw_k$(null);
  }
  function getImageBitmap($this, codec, frameIndex) {
    var bitmap = recycleBitmap($this, codec);
    codec.readPixels_6lonyn_k$(bitmap, frameIndex);
    return asComposeImageBitmap(bitmap);
  }
  function recycleBitmap($this, codec) {
    var tmp0_safe_receiver = $this.bitmapCache_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'com.seiko.imageloader.util.GifPainter.recycleBitmap.<anonymous>' call
      var tmp_0;
      var tmp_1;
      var tmp_2 = codec.get_width_j0q4yl_k$();
      var tmp0_safe_receiver_0 = $this.bitmapCache_1;
      if (tmp_2 === (tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.get_width_j0q4yl_k$())) {
        var tmp_3 = codec.get_height_e7t92o_k$();
        var tmp1_safe_receiver = $this.bitmapCache_1;
        tmp_1 = tmp_3 === (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_height_e7t92o_k$());
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp$ret$0;
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.seiko.imageloader.util.GifPainter.recycleBitmap.<anonymous>.<anonymous>' call
        tmp0_safe_receiver.allocPixels_jyyvpm_k$(codec.get_imageInfo_60i77k_k$());
        tmp$ret$0 = tmp0_safe_receiver;
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = null;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_4;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$4;
      // Inline function 'kotlin.also' call
      var tmp$ret$3;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Bitmap_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.seiko.imageloader.util.GifPainter.recycleBitmap.<anonymous>' call
      tmp0_apply.allocPixels_jyyvpm_k$(codec.get_imageInfo_60i77k_k$());
      tmp$ret$3 = tmp0_apply;
      var tmp1_also = tmp$ret$3;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.seiko.imageloader.util.GifPainter.recycleBitmap.<anonymous>' call
      $this.bitmapCache_1 = tmp1_also;
      tmp$ret$4 = tmp1_also;
      tmp_4 = tmp$ret$4;
    } else {
      tmp_4 = tmp1_elvis_lhs;
    }
    return tmp_4;
  }
  function GifPainter$onRemembered$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GifPainter$onRemembered$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(GifPainter$onRemembered$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GifPainter$onRemembered$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(5);
            var tmp0_isEmpty = this.this$0__1.codec_1.get_framesInfo_od2nlv_k$();
            if (tmp0_isEmpty.length === 0) {
              this.set_state_a96kl8_k$(7);
              continue $sm;
            } else {
              if (this.this$0__1.codec_1.get_framesInfo_od2nlv_k$().length === 1 ? true : !this.this$0__1.playAnimate_1) {
                this.this$0__1.drawImageBitmap_1.set_value_rnwamw_k$(getImageBitmap(this.this$0__1, this.this$0__1.codec_1, 0));
                this.set_state_a96kl8_k$(7);
                continue $sm;
              } else {
                this.loopIteration0__1 = -1;
                this.set_state_a96kl8_k$(1);
                continue $sm;
              }
            }

            break;
          case 1:
            var tmp_0;
            if (this.this$0__1.repeatCount_1 === Companion_getInstance_15().get_REPEAT_INFINITE_2e67gv_k$()) {
              tmp_0 = true;
            } else {
              var tmp0 = this.loopIteration0__1;
              this.loopIteration0__1 = tmp0 + 1 | 0;
              tmp_0 = tmp0 < this.this$0__1.repeatCount_1;
            }

            if (!tmp_0) {
              this.set_state_a96kl8_k$(6);
              continue $sm;
            }

            this.tmp1_iterator1__1 = withIndex(this.this$0__1.codec_1.get_framesInfo_od2nlv_k$()).iterator_jk1svi_k$();
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            if (!this.tmp1_iterator1__1.hasNext_bitz1p_k$()) {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

            this.tmp2_loop_parameter2__1 = this.tmp1_iterator1__1.next_20eer_k$();
            this.index3__1 = this.tmp2_loop_parameter2__1.component1_7eebsc_k$();
            this.frame4__1 = this.tmp2_loop_parameter2__1.component2_7eebsb_k$();
            this.this$0__1.drawImageBitmap_1.set_value_rnwamw_k$(getImageBitmap(this.this$0__1, this.this$0__1.codec_1, this.index3__1));
            this.set_state_a96kl8_k$(3);
            var tmp1__get_milliseconds__r2e6ua = Companion_getInstance_10();
            var tmp2__get_milliseconds__xtspmr = this.frame4__1.get_duration_6a6kpp_k$();
            suspendResult = delay(toDuration(tmp2__get_milliseconds__xtspmr, DurationUnit_MILLISECONDS_getInstance()), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 4:
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 5:
            throw this.get_exception_x0n6w6_k$();
          case 6:
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 7:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(GifPainter$onRemembered$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new GifPainter$onRemembered$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(GifPainter$onRemembered$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function GifPainter$onRemembered$slambda_0(this$0, resultContinuation) {
    var i = new GifPainter$onRemembered$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function GifPainter(codec, imageScope, playAnimate, repeatCount) {
    playAnimate = playAnimate === VOID ? true : playAnimate;
    repeatCount = repeatCount === VOID ? Companion_getInstance_15().get_REPEAT_INFINITE_2e67gv_k$() : repeatCount;
    Painter.call(this);
    this.codec_1 = codec;
    this.imageScope_1 = imageScope;
    this.playAnimate_1 = playAnimate;
    this.repeatCount_1 = repeatCount;
    this.bitmapCache_1 = null;
    this.drawImageBitmap_1 = mutableStateOf(null);
    this.rememberJob_1 = null;
  }
  protoOf(GifPainter).get_intrinsicSize_x61on3_k$ = function () {
    return Size_0(this.codec_1.get_width_j0q4yl_k$(), this.codec_1.get_height_e7t92o_k$());
  };
  protoOf(GifPainter).onRemembered_6899sq_k$ = function () {
    if (!(this.rememberJob_1 == null))
      return Unit_getInstance();
    var tmp = this;
    tmp.rememberJob_1 = launch(this.imageScope_1, VOID, VOID, GifPainter$onRemembered$slambda_0(this, null));
  };
  protoOf(GifPainter).onAbandoned_1hgzvg_k$ = function () {
    clear_0(this);
  };
  protoOf(GifPainter).onForgotten_pcab12_k$ = function () {
    clear_0(this);
  };
  protoOf(GifPainter).onDraw_lvum79_k$ = function (_this__u8e3s4) {
    var tmp0_safe_receiver = this.drawImageBitmap_1.get_value_j01efc_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var intSize = IntSize(numberToInt(_Size___get_width__impl__58y75t(_this__u8e3s4.get_size_x9ctfw_k$())), numberToInt(_Size___get_height__impl__a04p02(_this__u8e3s4.get_size_x9ctfw_k$())));
      _this__u8e3s4.drawImage$default_q3yuzr_k$(tmp0_safe_receiver, VOID, VOID, VOID, intSize);
      tmp$ret$0 = Unit_getInstance();
    }
  };
  function _get_dom__e677gv($this) {
    return $this.dom_1;
  }
  function _get_density__l5pazb_1($this) {
    return $this.density_1;
  }
  function _get_requestSize__mb3vz3($this) {
    return $this.requestSize_1;
  }
  function _get_root__dd8asp($this) {
    return $this.root_1;
  }
  function _get_defaultSizePx__5mf98n($this) {
    return $this.defaultSizePx_1;
  }
  function _set_previousDrawSize__4vz6xn($this, _set____db54di) {
    $this.previousDrawSize_1 = _set____db54di;
  }
  function _get_previousDrawSize__xz3g0f($this) {
    return $this.previousDrawSize_1;
  }
  function _set_alpha__c56vtz($this, _set____db54di) {
    $this.alpha_2 = _set____db54di;
  }
  function _get_alpha__jvxknh($this) {
    return $this.alpha_2;
  }
  function _set_colorFilter__ke9voq($this, _set____db54di) {
    $this.colorFilter_2 = _set____db54di;
  }
  function _get_colorFilter__kcfzyi($this) {
    return $this.colorFilter_2;
  }
  function _get_drawCache__uyo1al($this) {
    return $this.drawCache_1;
  }
  function drawSvg(_this__u8e3s4, $this, size) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.get_drawContext_ffwztu_k$().get_canvas_bshgm9_k$();
    var tmp0_safe_receiver = $this.root_1;
    if (tmp0_safe_receiver == null) {
    } else {
      tmp0_safe_receiver.set_width_psrxbd_k$(new SVGLength(_Size___get_width__impl__58y75t(size), SVGLengthUnit_PX_getInstance()));
    }
    var tmp1_safe_receiver = $this.root_1;
    if (tmp1_safe_receiver == null) {
    } else {
      tmp1_safe_receiver.set_height_tprbqq_k$(new SVGLength(_Size___get_height__impl__a04p02(size), SVGLengthUnit_PX_getInstance()));
    }
    var tmp2_safe_receiver = $this.root_1;
    if (tmp2_safe_receiver == null) {
    } else {
      tmp2_safe_receiver.set_preserveAspectRatio_digk65_k$(SVGPreserveAspectRatio_init_$Create$(SVGPreserveAspectRatioAlign_NONE_getInstance()));
    }
    $this.dom_1.render_7q72zv_k$(get_nativeCanvas(tmp0__anonymous__q1qw7t));
    tmp$ret$0 = Unit_getInstance();
  }
  function SVGPainter$onDraw$lambda(this$0) {
    return function ($this$drawCachedImage) {
      drawSvg($this$drawCachedImage, this$0, $this$drawCachedImage.get_size_x9ctfw_k$());
      return Unit_getInstance();
    };
  }
  function SVGPainter(dom, density, requestSize) {
    requestSize = requestSize === VOID ? Companion_getInstance_2().get_Unspecified_o59ai8_k$() : requestSize;
    Painter.call(this);
    this.dom_1 = dom;
    this.density_1 = density;
    this.requestSize_1 = requestSize;
    this.root_1 = this.dom_1.get_root_wott0r_k$();
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'com.seiko.imageloader.util.SVGPainter.defaultSizePx.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.geometry.isSpecified' call
      var tmp0__get_isSpecified__cddt7f = this.requestSize_1;
      tmp$ret$0 = !_Size___get_packedValue__impl__7rlt1o(tmp0__get_isSpecified__cddt7f).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_2().get_Unspecified_o59ai8_k$()));
      if (tmp$ret$0) {
        tmp$ret$1 = this.requestSize_1;
        break $l$block;
      }
      var tmp0_safe_receiver = this.root_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_width_j0q4yl_k$();
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.withUnit_iqhn7n_k$(SVGLengthUnit_PX_getInstance());
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_value_j01efc_k$();
      var width = tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs;
      var tmp4_safe_receiver = this.root_1;
      var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.get_height_e7t92o_k$();
      var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.withUnit_iqhn7n_k$(SVGLengthUnit_PX_getInstance());
      var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.get_value_j01efc_k$();
      var height = tmp7_elvis_lhs == null ? 0.0 : tmp7_elvis_lhs;
      var tmp_0;
      if (width === 0.0 ? height === 0.0 : false) {
        tmp_0 = Companion_getInstance_2().get_Unspecified_o59ai8_k$();
      } else {
        tmp_0 = Size_0(width, height);
      }
      tmp$ret$1 = tmp_0;
    }
    tmp$ret$2 = tmp$ret$1;
    tmp.defaultSizePx_1 = tmp$ret$2;
    var tmp_1;
    var tmp0_safe_receiver_0 = this.root_1;
    if ((tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.get_viewBox_8rz1fh_k$()) == null) {
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.geometry.isSpecified' call
      var tmp0__get_isSpecified__cddt7f_0 = this.defaultSizePx_1;
      tmp$ret$3 = !_Size___get_packedValue__impl__7rlt1o(tmp0__get_isSpecified__cddt7f_0).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_2().get_Unspecified_o59ai8_k$()));
      tmp_1 = tmp$ret$3;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp1_safe_receiver_0 = this.root_1;
      if (tmp1_safe_receiver_0 == null) {
      } else {
        tmp1_safe_receiver_0.set_viewBox_tl0fwc_k$(Companion_getInstance_11().makeXYWH_bits74_k$(0.0, 0.0, _Size___get_width__impl__58y75t(this.defaultSizePx_1), _Size___get_height__impl__a04p02(this.defaultSizePx_1)));
      }
    }
    this.previousDrawSize_1 = Companion_getInstance_2().get_Unspecified_o59ai8_k$();
    this.alpha_2 = 1.0;
    this.colorFilter_2 = null;
    this.drawCache_1 = new DrawCache();
  }
  protoOf(SVGPainter).get_intrinsicSize_x61on3_k$ = function () {
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    var tmp0__get_isSpecified__cddt7f = this.defaultSizePx_1;
    tmp$ret$0 = !_Size___get_packedValue__impl__7rlt1o(tmp0__get_isSpecified__cddt7f).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_2().get_Unspecified_o59ai8_k$()));
    if (tmp$ret$0) {
      tmp = Size__times_impl_fnp4nc(this.defaultSizePx_1, this.density_1.get_density_qy0267_k$());
    } else {
      tmp = Companion_getInstance_2().get_Unspecified_o59ai8_k$();
    }
    return tmp;
  };
  protoOf(SVGPainter).applyAlpha_luh7xa_k$ = function (alpha) {
    this.alpha_2 = alpha;
    return true;
  };
  protoOf(SVGPainter).applyColorFilter_lr96qs_k$ = function (colorFilter) {
    this.colorFilter_2 = colorFilter;
    return true;
  };
  protoOf(SVGPainter).onDraw_lvum79_k$ = function (_this__u8e3s4) {
    if (!equals(this.previousDrawSize_1, _this__u8e3s4.get_size_x9ctfw_k$())) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.ceil' call
      var tmp0_ceil = _Size___get_width__impl__58y75t(_this__u8e3s4.get_size_x9ctfw_k$());
      tmp$ret$0 = Math.ceil(tmp0_ceil);
      var tmp = numberToInt(tmp$ret$0);
      var tmp$ret$1;
      // Inline function 'kotlin.math.ceil' call
      var tmp1_ceil = _Size___get_height__impl__a04p02(_this__u8e3s4.get_size_x9ctfw_k$());
      tmp$ret$1 = Math.ceil(tmp1_ceil);
      var tmp_0 = IntSize(tmp, numberToInt(tmp$ret$1));
      var tmp_1 = _this__u8e3s4.get_layoutDirection_7e37v0_k$();
      this.drawCache_1.drawCachedImage_sd15qx_k$(tmp_0, _this__u8e3s4, tmp_1, SVGPainter$onDraw$lambda(this));
    }
    this.drawCache_1.drawInto_n4yq1_k$(_this__u8e3s4, this.alpha_2, this.colorFilter_2);
  };
  //region block: post-declaration
  protoOf(RealInterceptorChain).get_options_jecmyz_k$ = get_options;
  //endregion
  //region block: init
  KEY_MIME_TYPE = 'KEY_MIME_TYPE';
  //endregion
  return _;
}));
