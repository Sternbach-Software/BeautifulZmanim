(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'uri-kmp-uri'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'uri-kmp-uri'.");
    }
    root['uri-kmp-uri'] = factory(typeof this['uri-kmp-uri'] === 'undefined' ? {} : this['uri-kmp-uri'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.mf;
  var interfaceMeta = kotlin_kotlin.$_$.oe;
  var VOID = kotlin_kotlin.$_$.jm;
  var setMetadataFor = kotlin_kotlin.$_$.nf;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.v3;
  var charArrayOf = kotlin_kotlin.$_$.ud;
  var Unit_getInstance = kotlin_kotlin.$_$.k6;
  var concatToString = kotlin_kotlin.$_$.sh;
  var objectMeta = kotlin_kotlin.$_$.lf;
  var AbstractList = kotlin_kotlin.$_$.m6;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.t2;
  var toString = kotlin_kotlin.$_$.rf;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i2;
  var RandomAccess = kotlin_kotlin.$_$.n7;
  var classMeta = kotlin_kotlin.$_$.zd;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.am;
  var fillArrayVal = kotlin_kotlin.$_$.fe;
  var arrayCopy = kotlin_kotlin.$_$.s7;
  var ensureNotNull = kotlin_kotlin.$_$.kl;
  var charSequenceLength = kotlin_kotlin.$_$.xd;
  var THROW_CCE = kotlin_kotlin.$_$.sk;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.h3;
  var equals = kotlin_kotlin.$_$.de;
  var Companion_getInstance = kotlin_kotlin.$_$.f6;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.e4;
  var createFailure = kotlin_kotlin.$_$.jl;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.i4;
  var isObject = kotlin_kotlin.$_$.ze;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.g4;
  var emptySet = kotlin_kotlin.$_$.e9;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.e1;
  var indexOf = kotlin_kotlin.$_$.fi;
  var emptyList = kotlin_kotlin.$_$.c9;
  var AssertionError_init_$Create$ = kotlin_kotlin.$_$.r1;
  var Exception = kotlin_kotlin.$_$.gk;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.r;
  var regionMatches = kotlin_kotlin.$_$.si;
  var compareTo = kotlin_kotlin.$_$.ae;
  var isInterface = kotlin_kotlin.$_$.xe;
  var Comparable = kotlin_kotlin.$_$.ck;
  var Char = kotlin_kotlin.$_$.ak;
  var lazy = kotlin_kotlin.$_$.sl;
  var decodeToString = kotlin_kotlin.$_$.yh;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.e2;
  var charSequenceGet = kotlin_kotlin.$_$.wd;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.c4;
  var Char__rangeTo_impl_tkncvp = kotlin_kotlin.$_$.b4;
  var setOf = kotlin_kotlin.$_$.jb;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.o1;
  var encodeToByteArray = kotlin_kotlin.$_$.zh;
  var decodeToString_0 = kotlin_kotlin.$_$.xh;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.n1;
  var toByte = kotlin_kotlin.$_$.of;
  var KProperty1 = kotlin_kotlin.$_$.ch;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ke;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.a2;
  var captureStack = kotlin_kotlin.$_$.td;
  var defineProp = kotlin_kotlin.$_$.be;
  var startsWith = kotlin_kotlin.$_$.bj;
  var last = kotlin_kotlin.$_$.la;
  var lastIndexOf = kotlin_kotlin.$_$.oi;
  var toInt = kotlin_kotlin.$_$.jj;
  var NumberFormatException = kotlin_kotlin.$_$.ok;
  var getStringHashCode = kotlin_kotlin.$_$.le;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Builder, 'Builder', interfaceMeta);
  setMetadataFor(NotCachedHolder, 'NotCachedHolder', objectMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(PathSegments, 'PathSegments', classMeta, AbstractList, [AbstractList, RandomAccess]);
  setMetadataFor(PathSegmentsBuilder, 'PathSegmentsBuilder', classMeta);
  setMetadataFor(Builder_0, 'Builder', classMeta, VOID, [Builder]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  function get_isOpaque() {
    return !this.get_isHierarchical_yyaz18_k$();
  }
  function get_isAbsolute() {
    return !this.get_isRelative_skgyhr_k$();
  }
  function getQueryParameterNames() {
    if (this.get_isOpaque_xnqi0k_k$()) {
      Companion_getInstance_1();
      throw UnsupportedOperationException_init_$Create$("This isn't a hierarchical URI.");
    }
    var tmp0_elvis_lhs = this.get_encodedQuery_28s95p_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return emptySet();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var query = tmp;
    var names = LinkedHashSet_init_$Create$();
    var start = 0;
    do {
      var next = indexOf(query, _Char___init__impl__6a9atx(38), start);
      var end = next === -1 ? query.length : next;
      var separator = indexOf(query, _Char___init__impl__6a9atx(61), start);
      if (separator > end ? true : separator === -1) {
        separator = end;
      }
      var tmp$ret$1;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = start;
      var tmp1_substring = separator;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = query;
      tmp$ret$1 = tmp$ret$0.substring(tmp0_substring, tmp1_substring);
      var name = tmp$ret$1;
      names.add_1j60pz_k$(UriCodec_getInstance().decode$default_593vyu_k$(name));
      start = end + 1 | 0;
    }
     while (start < query.length);
    return names;
  }
  function getQueryParameters(key) {
    if (this.get_isOpaque_xnqi0k_k$()) {
      Companion_getInstance_1();
      throw UnsupportedOperationException_init_$Create$("This isn't a hierarchical URI.");
    }
    var tmp0_elvis_lhs = this.get_encodedQuery_28s95p_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return emptyList();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var query = tmp;
    var tmp_0;
    try {
      tmp_0 = UriCodec_getInstance().encode_fhegd1_k$(key);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Exception) {
        var e = $p;
        throw AssertionError_init_$Create$(e);
      } else {
        throw $p;
      }
      tmp_0 = tmp_1;
    }
    var encodedKey = tmp_0;
    var values = ArrayList_init_$Create$();
    var start = 0;
    $l$loop: do {
      var nextAmpersand = indexOf(query, _Char___init__impl__6a9atx(38), start);
      var end = !(nextAmpersand === -1) ? nextAmpersand : query.length;
      var separator = indexOf(query, _Char___init__impl__6a9atx(61), start);
      if (separator > end ? true : separator === -1) {
        separator = end;
      }
      if ((separator - start | 0) === encodedKey.length ? regionMatches(query, start, encodedKey, 0, encodedKey.length) : false) {
        if (separator === end) {
          values.add_1j60pz_k$('');
        } else {
          var tmp_2 = UriCodec_getInstance();
          var tmp$ret$1;
          // Inline function 'kotlin.text.substring' call
          var tmp0_substring = separator + 1 | 0;
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = query;
          tmp$ret$1 = tmp$ret$0.substring(tmp0_substring, end);
          values.add_1j60pz_k$(tmp_2.decode$default_593vyu_k$(tmp$ret$1));
        }
      }
      var tmp_3;
      if (!(nextAmpersand === -1)) {
        tmp_3 = nextAmpersand + 1 | 0;
      } else {
        break $l$loop;
      }
      start = tmp_3;
    }
     while (true);
    return values;
  }
  function getQueryParameter(key) {
    var tmp0_elvis_lhs = this.get_encodedQuery_28s95p_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var query = tmp;
    if (this.get_isOpaque_xnqi0k_k$()) {
      Companion_getInstance_1();
      throw UnsupportedOperationException_init_$Create$("This isn't a hierarchical URI.");
    }
    var encodedKey = UriCodec_getInstance().encode_za6sgl_k$(key, null);
    var length = query.length;
    var start = 0;
    $l$loop: do {
      var nextAmpersand = indexOf(query, _Char___init__impl__6a9atx(38), start);
      var end = !(nextAmpersand === -1) ? nextAmpersand : length;
      var separator = indexOf(query, _Char___init__impl__6a9atx(61), start);
      if (separator > end ? true : separator === -1) {
        separator = end;
      }
      if ((separator - start | 0) === encodedKey.length ? regionMatches(query, start, encodedKey, 0, encodedKey.length) : false) {
        var tmp_0;
        if (separator === end) {
          tmp_0 = '';
        } else {
          var tmp$ret$1;
          // Inline function 'kotlin.text.substring' call
          var tmp0_substring = separator + 1 | 0;
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = query;
          tmp$ret$1 = tmp$ret$0.substring(tmp0_substring, end);
          var encodedValue = tmp$ret$1;
          tmp_0 = UriCodec_getInstance().decode_qyx8z_k$(encodedValue, true, false);
        }
        return tmp_0;
      }
      var tmp_1;
      if (!(nextAmpersand === -1)) {
        tmp_1 = nextAmpersand + 1 | 0;
      } else {
        break $l$loop;
      }
      start = tmp_1;
    }
     while (true);
    return null;
  }
  function getBooleanQueryParameter(key, defaultValue) {
    var tmp0_elvis_lhs = this.getQueryParameter_reobt6_k$(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var flag = tmp;
    var tmp$ret$1;
    // Inline function 'kotlin.text.lowercase' call
    var tmp0_lowercase = flag;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_lowercase;
    tmp$ret$1 = tmp$ret$0.toLowerCase();
    flag = tmp$ret$1;
    return !('false' === flag) ? !('0' === flag) : false;
  }
  function normalizeScheme() {
    var tmp0_elvis_lhs = this.get_scheme_je6tv2_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var scheme = tmp;
    var tmp$ret$1;
    // Inline function 'kotlin.text.lowercase' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = scheme;
    tmp$ret$1 = tmp$ret$0.toLowerCase();
    var lowerScheme = tmp$ret$1;
    return scheme === lowerScheme ? this : this.buildUpon_n637i0_k$().scheme_nlylt1_k$(lowerScheme).build_1k0s4u_k$();
  }
  function compareTo_0(other) {
    return compareTo(toString(this), toString(other));
  }
  function compareTo_1(other) {
    return this.compareTo_v5oyyz_k$((!(other == null) ? isInterface(other, Uri) : false) ? other : THROW_CCE());
  }
  setMetadataFor(Uri, 'Uri', interfaceMeta, VOID, [Comparable]);
  setMetadataFor(ByteBuffer, 'ByteBuffer', classMeta);
  setMetadataFor(UriCodec, 'UriCodec', objectMeta);
  setMetadataFor(UriSyntaxException, 'UriSyntaxException', classMeta, Exception);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(AbstractPart, 'AbstractPart', classMeta);
  setMetadataFor(Part, 'Part', classMeta, AbstractPart);
  setMetadataFor(EmptyPart, 'EmptyPart', classMeta, Part);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(PathPart, 'PathPart', classMeta, AbstractPart);
  setMetadataFor(AbstractHierarchicalUri, 'AbstractHierarchicalUri', classMeta, VOID, [Uri]);
  setMetadataFor(HierarchicalUri, 'HierarchicalUri', classMeta, AbstractHierarchicalUri);
  setMetadataFor(OpaqueUri, 'OpaqueUri', classMeta, VOID, [Uri]);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(StringUri, 'StringUri', classMeta, AbstractHierarchicalUri);
  //endregion
  function Builder() {
  }
  function NotCachedHolder() {
    NotCachedHolder_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.charArrayOf' call
    tmp$ret$0 = charArrayOf([_Char___init__impl__6a9atx(78), _Char___init__impl__6a9atx(79), _Char___init__impl__6a9atx(84), _Char___init__impl__6a9atx(32), _Char___init__impl__6a9atx(67), _Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(67), _Char___init__impl__6a9atx(72), _Char___init__impl__6a9atx(69), _Char___init__impl__6a9atx(68)]);
    tmp.NotCached_1 = concatToString(tmp$ret$0);
  }
  protoOf(NotCachedHolder).get_NotCached_fzv8j8_k$ = function () {
    return this.NotCached_1;
  };
  var NotCachedHolder_instance;
  function NotCachedHolder_getInstance() {
    if (NotCachedHolder_instance == null)
      new NotCachedHolder();
    return NotCachedHolder_instance;
  }
  function _get_segments__2ewn9x($this) {
    return $this.segments_1;
  }
  function Companion() {
    Companion_instance = this;
    this.EMPTY_1 = new PathSegments(null, 0);
  }
  protoOf(Companion).get_EMPTY_i8q41w_k$ = function () {
    return this.EMPTY_1;
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function PathSegments(segments, size) {
    Companion_getInstance_0();
    AbstractList.call(this);
    this.segments_1 = segments;
    this.size_1 = size;
  }
  protoOf(PathSegments).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(PathSegments).get_fkrdnv_k$ = function (index) {
    if (index >= this.size_1) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' should be less than ' + this.size_1);
    }
    var tmp$ret$2;
    // Inline function 'kotlin.requireNotNull' call
    var tmp0_requireNotNull = this.segments_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_requireNotNull == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.requireNotNull.<anonymous>' call
        tmp$ret$0 = 'Required value was null.';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0_requireNotNull;
        break $l$block;
      }
    }
    tmp$ret$2 = tmp$ret$1;
    return this.segments_1[index];
  };
  function _set_segments__adzo6v($this, _set____db54di) {
    $this.segments_1 = _set____db54di;
  }
  function _get_segments__2ewn9x_0($this) {
    var tmp = $this.segments_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('segments');
    }
  }
  function _set_size__9twho6($this, _set____db54di) {
    $this.size_1 = _set____db54di;
  }
  function _get_size__ddoh9m($this) {
    return $this.size_1;
  }
  function PathSegmentsBuilder() {
    this.size_1 = 0;
  }
  protoOf(PathSegmentsBuilder).add_6nc4hd_k$ = function (segment) {
    if (!(this.segments_1 == null)) {
      if ((this.size_1 + 1 | 0) === _get_segments__2ewn9x_0(this).length) {
        var tmp = 0;
        var tmp_0 = imul(_get_segments__2ewn9x_0(this).length, 2);
        var tmp$ret$0;
        // Inline function 'kotlin.arrayOfNulls' call
        tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
        var tmp_1 = tmp$ret$0;
        while (tmp < tmp_0) {
          var tmp_2 = tmp;
          var tmp$ret$1;
          // Inline function 'com.eygraber.uri.PathSegmentsBuilder.add.<anonymous>' call
          tmp$ret$1 = '';
          tmp_1[tmp_2] = tmp$ret$1;
          tmp = tmp + 1 | 0;
        }
        var expanded = tmp_1;
        var tmp$ret$2;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp0_copyInto = _get_segments__2ewn9x_0(this);
        var tmp1_copyInto = tmp0_copyInto.length;
        arrayCopy(tmp0_copyInto, expanded, 0, 0, tmp1_copyInto);
        tmp$ret$2 = expanded;
        this.segments_1 = expanded;
      }
    } else {
      var tmp_3 = this;
      var tmp_4 = 0;
      var tmp_5 = 4;
      var tmp$ret$3;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$3 = fillArrayVal(Array(tmp_5), null);
      var tmp_6 = tmp$ret$3;
      while (tmp_4 < tmp_5) {
        var tmp_7 = tmp_4;
        var tmp$ret$4;
        // Inline function 'com.eygraber.uri.PathSegmentsBuilder.add.<anonymous>' call
        tmp$ret$4 = '';
        tmp_6[tmp_7] = tmp$ret$4;
        tmp_4 = tmp_4 + 1 | 0;
      }
      tmp_3.segments_1 = tmp_6;
    }
    var tmp_8 = _get_segments__2ewn9x_0(this);
    var tmp0_this = this;
    var tmp1 = tmp0_this.size_1;
    tmp0_this.size_1 = tmp1 + 1 | 0;
    tmp_8[tmp1] = segment;
  };
  protoOf(PathSegmentsBuilder).build_1k0s4u_k$ = function () {
    return !(this.segments_1 == null) ? new PathSegments(_get_segments__2ewn9x_0(this), this.size_1) : Companion_getInstance_0().EMPTY_1;
  };
  function _set_scheme__2zskby($this, _set____db54di) {
    $this.scheme_1 = _set____db54di;
  }
  function _get_scheme__1j1zp6($this) {
    return $this.scheme_1;
  }
  function _set_opaquePart__7nxlk3($this, _set____db54di) {
    $this.opaquePart_1 = _set____db54di;
  }
  function _get_opaquePart__7eazl5($this) {
    return $this.opaquePart_1;
  }
  function _set_authority__4pu42m($this, _set____db54di) {
    $this.authority_1 = _set____db54di;
  }
  function _get_authority__ol0cby($this) {
    return $this.authority_1;
  }
  function _set_path__9s3vma($this, _set____db54di) {
    $this.path_1 = _set____db54di;
  }
  function _get_path__dbvv7q($this) {
    return $this.path_1;
  }
  function _set_query__juo6m5($this, _set____db54di) {
    $this.query_1 = _set____db54di;
  }
  function _get_query__c6g9vb($this) {
    return $this.query_1;
  }
  function _set_fragment__rezdrt($this, _set____db54di) {
    $this.fragment_1 = _set____db54di;
  }
  function _get_fragment__ut8cqj($this) {
    return $this.fragment_1;
  }
  function hasSchemeOrAuthority($this) {
    return !($this.scheme_1 == null) ? true : !($this.authority_1 == null) ? !($this.authority_1 === Companion_getInstance_3().get_NULL_wo69cg_k$()) : false;
  }
  function _get_NOT_HIERARCHICAL__9ghr6e($this) {
    return $this.NOT_HIERARCHICAL_1;
  }
  function Builder_0() {
    this.scheme_1 = null;
    this.opaquePart_1 = null;
    this.authority_1 = null;
    this.path_1 = null;
    this.query_1 = null;
    this.fragment_1 = null;
  }
  protoOf(Builder_0).isSchemeSet_gykghf_k$ = function () {
    return !(this.scheme_1 == null);
  };
  protoOf(Builder_0).isAuthoritySet_2mmoo9_k$ = function () {
    return !(this.authority_1 == null);
  };
  protoOf(Builder_0).scheme_nlylt1_k$ = function (scheme) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.eygraber.uri.Builder.scheme.<anonymous>' call
    this.scheme_1 = scheme;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  protoOf(Builder_0).opaquePart_yaw0xf_k$ = function (opaquePart) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.eygraber.uri.Builder.opaquePart.<anonymous>' call
    this.opaquePart_1 = opaquePart;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  protoOf(Builder_0).opaquePart_5e1dt8_k$ = function (opaquePart) {
    return this.opaquePart_yaw0xf_k$(Companion_getInstance_3().fromDecoded_ql8e30_k$(opaquePart));
  };
  protoOf(Builder_0).encodedOpaquePart_azn9ky_k$ = function (opaquePart) {
    return this.opaquePart_yaw0xf_k$(Companion_getInstance_3().fromEncoded_su55pg_k$(opaquePart));
  };
  protoOf(Builder_0).authority_bpgigs_k$ = function (authority) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.eygraber.uri.Builder.authority.<anonymous>' call
    this.opaquePart_1 = null;
    this.authority_1 = authority;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  protoOf(Builder_0).authority_j2qo59_k$ = function (authority) {
    return this.authority_bpgigs_k$(Companion_getInstance_3().fromDecoded_ql8e30_k$(authority));
  };
  protoOf(Builder_0).encodedAuthority_wan6cr_k$ = function (authority) {
    return this.authority_bpgigs_k$(Companion_getInstance_3().fromEncoded_su55pg_k$(authority));
  };
  protoOf(Builder_0).path_1mubi5_k$ = function (path) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.eygraber.uri.Builder.path.<anonymous>' call
    this.opaquePart_1 = null;
    this.path_1 = path;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  protoOf(Builder_0).path_psutt1_k$ = function (path) {
    return this.path_1mubi5_k$(Companion_getInstance_4().fromDecoded_ql8e30_k$(path));
  };
  protoOf(Builder_0).encodedPath_5uy0ml_k$ = function (path) {
    return this.path_1mubi5_k$(Companion_getInstance_4().fromEncoded_su55pg_k$(path));
  };
  protoOf(Builder_0).appendPath_hmsqn2_k$ = function (newSegment) {
    return this.path_1mubi5_k$(Companion_getInstance_4().appendDecodedSegment_iv9mtm_k$(this.path_1, newSegment));
  };
  protoOf(Builder_0).appendEncodedPath_bbeip4_k$ = function (newSegment) {
    return this.path_1mubi5_k$(Companion_getInstance_4().appendEncodedSegment_eldbqa_k$(this.path_1, newSegment));
  };
  protoOf(Builder_0).query_cuj5sv_k$ = function (query) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.eygraber.uri.Builder.query.<anonymous>' call
    this.opaquePart_1 = null;
    this.query_1 = query;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  protoOf(Builder_0).query_ml7amw_k$ = function (query) {
    return this.query_cuj5sv_k$(Companion_getInstance_3().fromDecoded_ql8e30_k$(query));
  };
  protoOf(Builder_0).encodedQuery_9ngqfa_k$ = function (query) {
    return this.query_cuj5sv_k$(Companion_getInstance_3().fromEncoded_su55pg_k$(query));
  };
  protoOf(Builder_0).fragment_68d40n_k$ = function (fragment) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.eygraber.uri.Builder.fragment.<anonymous>' call
    this.fragment_1 = fragment;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  protoOf(Builder_0).fragment_tk4mq8_k$ = function (fragment) {
    return this.fragment_68d40n_k$(Companion_getInstance_3().fromDecoded_ql8e30_k$(fragment));
  };
  protoOf(Builder_0).encodedFragment_w9yuci_k$ = function (fragment) {
    return this.fragment_68d40n_k$(Companion_getInstance_3().fromEncoded_su55pg_k$(fragment));
  };
  protoOf(Builder_0).appendQueryParameter_z9190a_k$ = function (key, value) {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.eygraber.uri.Builder.appendQueryParameter.<anonymous>' call
    this.opaquePart_1 = null;
    var encodedKey = UriCodec_getInstance().encode_za6sgl_k$(key, null);
    var encodedValue = UriCodec_getInstance().encodeOrNull_dq9k5c_k$(value, null);
    var encodedParameter = encodedKey + '=' + encodedValue;
    if (this.query_1 == null) {
      this.query_1 = Companion_getInstance_3().fromEncoded_su55pg_k$(encodedParameter);
      return this;
    }
    var oldQuery = ensureNotNull(this.query_1).get_encoded_pbfil7_k$();
    var tmp = this;
    var tmp_0;
    var tmp_1;
    if (oldQuery == null) {
      tmp_1 = true;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.text.isEmpty' call
      tmp$ret$0 = charSequenceLength(oldQuery) === 0;
      tmp_1 = tmp$ret$0;
    }
    if (tmp_1) {
      tmp_0 = Companion_getInstance_3().fromEncoded_su55pg_k$(encodedParameter);
    } else {
      tmp_0 = Companion_getInstance_3().fromEncoded_su55pg_k$('' + oldQuery + '&' + encodedParameter);
    }
    tmp.query_1 = tmp_0;
    tmp$ret$1 = this;
    return tmp$ret$1;
  };
  protoOf(Builder_0).clearQuery_cbz69x_k$ = function () {
    return this.query_cuj5sv_k$((null == null ? true : null instanceof Part) ? null : THROW_CCE());
  };
  protoOf(Builder_0).build_1k0s4u_k$ = function () {
    var opaquePart = this.opaquePart_1;
    var tmp;
    if (opaquePart == null) {
      var path = this.path_1;
      if (path == null ? true : equals(path, Companion_getInstance_4().get_NULL_wo69cg_k$())) {
        path = Companion_getInstance_4().get_EMPTY_i8q41w_k$();
      } else {
        if (hasSchemeOrAuthority(this)) {
          path = Companion_getInstance_4().makeAbsolute_mrju1q_k$(path);
        }
      }
      tmp = new HierarchicalUri(this.scheme_1, this.authority_1, path, this.query_1, this.fragment_1);
    } else {
      if (this.scheme_1 == null) {
        throw UnsupportedOperationException_init_$Create$('An opaque URI must have a scheme.');
      }
      tmp = new OpaqueUri(this.scheme_1, opaquePart, this.fragment_1);
    }
    return tmp;
  };
  protoOf(Builder_0).toString = function () {
    return toString(this.build_1k0s4u_k$());
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.NOT_HIERARCHICAL_1 = "This isn't a hierarchical URI.";
    this.EMPTY_1 = new HierarchicalUri(null, Companion_getInstance_3().get_NULL_wo69cg_k$(), Companion_getInstance_4().get_EMPTY_i8q41w_k$(), Companion_getInstance_3().get_NULL_wo69cg_k$(), Companion_getInstance_3().get_NULL_wo69cg_k$());
  }
  protoOf(Companion_0).get_EMPTY_i8q41w_k$ = function () {
    return this.EMPTY_1;
  };
  protoOf(Companion_0).parse_4mmrzm_k$ = function (uriString) {
    return new StringUri(uriString);
  };
  protoOf(Companion_0).parseOrNull_vj4jtw_k$ = function (uriString) {
    var tmp$ret$4;
    // Inline function 'kotlin.Result.getOrNull' call
    var tmp$ret$3;
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      var tmp$ret$0;
      // Inline function 'com.eygraber.uri.Companion.parseOrNull.<anonymous>' call
      tmp$ret$0 = new StringUri(uriString);
      var tmp1_success = tmp$ret$0;
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp1_success);
      tmp = tmp$ret$1;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.failure' call
        var tmp2_failure = Companion_getInstance();
        tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(e));
        tmp_0 = tmp$ret$2;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    tmp$ret$3 = tmp;
    var tmp3_getOrNull = tmp$ret$3;
    var tmp_1;
    if (_Result___get_isFailure__impl__jpiriv(tmp3_getOrNull)) {
      tmp_1 = null;
    } else {
      var tmp_2 = _Result___get_value__impl__bjfvqg(tmp3_getOrNull);
      tmp_1 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    }
    tmp$ret$4 = tmp_1;
    return tmp$ret$4;
  };
  protoOf(Companion_0).fromParts_g44m5y_k$ = function (scheme, ssp, fragment) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (scheme == null) {
        var tmp$ret$0;
        // Inline function 'com.eygraber.uri.Companion.fromParts.<anonymous>' call
        tmp$ret$0 = 'scheme';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = scheme;
        break $l$block;
      }
    }
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (ssp == null) {
        var tmp$ret$2;
        // Inline function 'com.eygraber.uri.Companion.fromParts.<anonymous>' call
        tmp$ret$2 = 'ssp';
        var message_0 = tmp$ret$2;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      } else {
        tmp$ret$3 = ssp;
        break $l$block_0;
      }
    }
    return new OpaqueUri(scheme, Companion_getInstance_3().fromDecoded_ql8e30_k$(ssp), Companion_getInstance_3().fromDecoded_ql8e30_k$(fragment));
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Uri() {
  }
  function _get_size__ddoh9m_0($this) {
    return $this.size_1;
  }
  function _get_buffer__tgqkad($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = buffer$factory();
    tmp$ret$0 = $this.buffer$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function _set_writePosition__sxej31($this, _set____db54di) {
    $this.writePosition_1 = _set____db54di;
  }
  function UriCodec$ByteBuffer$buffer$delegate$lambda(this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = this$0.size_1;
      var tmp_1 = new Int8Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var tmp$ret$0;
        // Inline function 'com.eygraber.uri.ByteBuffer.buffer$delegate.<anonymous>.<anonymous>' call
        tmp$ret$0 = 0;
        tmp_1[tmp_2] = tmp$ret$0;
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function isAllowed($this, c, allow) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var progression = $this.lowercaseAsciiAlphaRange_1;
    var containsLower = progression.get_first_en5qmg_k$();
    if (c <= progression.get_last_rp1s9s_k$() ? containsLower <= c : false) {
      tmp_2 = true;
    } else {
      var progression_0 = $this.uppercaseAsciiAlphaRange_1;
      var containsLower_0 = progression_0.get_first_en5qmg_k$();
      tmp_2 = c <= progression_0.get_last_rp1s9s_k$() ? containsLower_0 <= c : false;
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      var progression_1 = $this.digitAsciiRange_1;
      var containsLower_1 = progression_1.get_first_en5qmg_k$();
      tmp_1 = c <= progression_1.get_last_rp1s9s_k$() ? containsLower_1 <= c : false;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = $this.defaultAllowedSet_1.contains_2ehdt1_k$(new Char(c));
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !(allow == null) ? !(indexOf(allow, c) === -1) : false;
    }
    return tmp;
  }
  function ByteBuffer(size) {
    this.size_1 = size;
    var tmp = this;
    tmp.buffer$delegate_1 = lazy(UriCodec$ByteBuffer$buffer$delegate$lambda(this));
    this.writePosition_1 = 0;
  }
  protoOf(ByteBuffer).get_writePosition_jdt81t_k$ = function () {
    return this.writePosition_1;
  };
  protoOf(ByteBuffer).writeByte_jvpujw_k$ = function (byte) {
    var tmp = _get_buffer__tgqkad(this);
    var tmp0_this = this;
    var tmp1 = tmp0_this.writePosition_1;
    tmp0_this.writePosition_1 = tmp1 + 1 | 0;
    tmp[tmp1] = byte;
  };
  protoOf(ByteBuffer).decodeToStringAndReset_4xj976_k$ = function () {
    var tmp;
    try {
      tmp = decodeToString(_get_buffer__tgqkad(this), 0, this.writePosition_1, false);
    }finally {
      this.writePosition_1 = 0;
    }
    return tmp;
  };
  function flushDecodingByteAccumulator(_this__u8e3s4, $this, builder, throwOnFailure) {
    if (_this__u8e3s4.writePosition_1 === 0)
      return Unit_getInstance();
    try {
      builder.append_ssq29y_k$(_this__u8e3s4.decodeToStringAndReset_4xj976_k$());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        if (throwOnFailure) {
          throw IllegalArgumentException_init_$Create$_0(e);
        } else {
          builder.append_t8oh9e_k$(_Char___init__impl__6a9atx(65533));
        }
      } else {
        throw $p;
      }
    }
  }
  function unexpectedCharacterException($this, uri, name, unexpected, index) {
    var nameString = name == null ? '' : ' in [' + name + ']';
    return new UriSyntaxException(uri, 'Unexpected character' + nameString + ': ' + new Char(unexpected), index);
  }
  function getNextCharacter($this, uri, index, end, name) {
    if (index >= end) {
      var nameString = name == null ? '' : ' in [' + name + ']';
      throw new UriSyntaxException(uri, 'Unexpected end of string ' + nameString, index);
    }
    return charSequenceGet(uri, index);
  }
  function hexCharToValue($this, c) {
    var tmp0_subject = c;
    var tmp;
    var progression = $this.digitAsciiRange_1;
    var containsLower = progression.get_first_en5qmg_k$();
    if (tmp0_subject <= progression.get_last_rp1s9s_k$() ? containsLower <= tmp0_subject : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(c);
      var tmp_0 = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 48;
      tmp = tmp_0 - tmp$ret$1 | 0;
    } else {
      var progression_0 = $this.lowercaseHexRange_1;
      var containsLower_0 = progression_0.get_first_en5qmg_k$();
      if (tmp0_subject <= progression_0.get_last_rp1s9s_k$() ? containsLower_0 <= tmp0_subject : false) {
        var tmp$ret$2;
        // Inline function 'kotlin.code' call
        tmp$ret$2 = Char__toInt_impl_vasixd(c);
        var tmp_1 = 10 + tmp$ret$2 | 0;
        var tmp$ret$3;
        // Inline function 'kotlin.code' call
        tmp$ret$3 = 97;
        tmp = tmp_1 - tmp$ret$3 | 0;
      } else {
        var progression_1 = $this.uppercaseHexRange_1;
        var containsLower_1 = progression_1.get_first_en5qmg_k$();
        if (tmp0_subject <= progression_1.get_last_rp1s9s_k$() ? containsLower_1 <= tmp0_subject : false) {
          var tmp$ret$4;
          // Inline function 'kotlin.code' call
          tmp$ret$4 = Char__toInt_impl_vasixd(c);
          var tmp_2 = 10 + tmp$ret$4 | 0;
          var tmp$ret$5;
          // Inline function 'kotlin.code' call
          tmp$ret$5 = 65;
          tmp = tmp_2 - tmp$ret$5 | 0;
        } else {
          tmp = -1;
        }
      }
    }
    return tmp;
  }
  function _get_lowercaseAsciiAlphaRange__v15zak($this) {
    return $this.lowercaseAsciiAlphaRange_1;
  }
  function _get_lowercaseHexRange__anytqa($this) {
    return $this.lowercaseHexRange_1;
  }
  function _get_uppercaseAsciiAlphaRange__2tsikt($this) {
    return $this.uppercaseAsciiAlphaRange_1;
  }
  function _get_uppercaseHexRange__6k3i0z($this) {
    return $this.uppercaseHexRange_1;
  }
  function _get_digitAsciiRange__w0fgl4($this) {
    return $this.digitAsciiRange_1;
  }
  function _get_defaultAllowedSet__eftjp2($this) {
    return $this.defaultAllowedSet_1;
  }
  function _get_hexDigits__71exdc($this) {
    return $this.hexDigits_1;
  }
  function _get_INVALID_INPUT_CHARACTER__nvstol($this) {
    return $this.INVALID_INPUT_CHARACTER_1;
  }
  function UriCodec() {
    UriCodec_instance = this;
    this.lowercaseAsciiAlphaRange_1 = Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122));
    this.lowercaseHexRange_1 = Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(102));
    this.uppercaseAsciiAlphaRange_1 = Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90));
    this.uppercaseHexRange_1 = Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(70));
    this.digitAsciiRange_1 = Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57));
    this.defaultAllowedSet_1 = setOf([new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(126)), new Char(_Char___init__impl__6a9atx(39)), new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(42))]);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.charArrayOf' call
    tmp$ret$0 = charArrayOf([_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(49), _Char___init__impl__6a9atx(50), _Char___init__impl__6a9atx(51), _Char___init__impl__6a9atx(52), _Char___init__impl__6a9atx(53), _Char___init__impl__6a9atx(54), _Char___init__impl__6a9atx(55), _Char___init__impl__6a9atx(56), _Char___init__impl__6a9atx(57), _Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(66), _Char___init__impl__6a9atx(67), _Char___init__impl__6a9atx(68), _Char___init__impl__6a9atx(69), _Char___init__impl__6a9atx(70)]);
    tmp.hexDigits_1 = tmp$ret$0;
    this.INVALID_INPUT_CHARACTER_1 = _Char___init__impl__6a9atx(65533);
  }
  protoOf(UriCodec).encodeOrNull_uk1468_k$ = function (s) {
    return s == null ? null : this.encode_za6sgl_k$(s, null);
  };
  protoOf(UriCodec).encodeOrNull_dq9k5c_k$ = function (s, allow) {
    return s == null ? null : this.encode_za6sgl_k$(s, allow);
  };
  protoOf(UriCodec).encode_fhegd1_k$ = function (s) {
    return this.encode_za6sgl_k$(s, null);
  };
  protoOf(UriCodec).encode_za6sgl_k$ = function (s, allow) {
    var encoded = null;
    var oldLength = s.length;
    var current = 0;
    while (current < oldLength) {
      var nextToEncode = current;
      while (nextToEncode < oldLength ? isAllowed(this, charSequenceGet(s, nextToEncode), allow) : false) {
        var tmp0 = nextToEncode;
        nextToEncode = tmp0 + 1 | 0;
      }
      if (nextToEncode === oldLength) {
        var tmp;
        if (current === 0) {
          tmp = s;
        } else {
          ensureNotNull(encoded).append_tbojcw_k$(s, current, oldLength);
          tmp = encoded.toString();
        }
        return tmp;
      }
      if (encoded == null) {
        encoded = StringBuilder_init_$Create$();
      }
      if (nextToEncode > current) {
        encoded.append_tbojcw_k$(s, current, nextToEncode);
      } else {
      }
      current = nextToEncode;
      var nextAllowed = current + 1 | 0;
      while (nextAllowed < oldLength ? !isAllowed(this, charSequenceGet(s, nextAllowed), allow) : false) {
        var tmp1 = nextAllowed;
        nextAllowed = tmp1 + 1 | 0;
      }
      var tmp$ret$1;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = current;
      var tmp1_substring = nextAllowed;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = s;
      tmp$ret$1 = tmp$ret$0.substring(tmp0_substring, tmp1_substring);
      var toEncode = tmp$ret$1;
      try {
        var bytes = encodeToByteArray(toEncode);
        var bytesLength = bytes.length;
        var inductionVariable = 0;
        if (inductionVariable < bytesLength)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            encoded.append_t8oh9e_k$(_Char___init__impl__6a9atx(37));
            encoded.append_t8oh9e_k$(this.hexDigits_1[(bytes[i] & 240) >> 4]);
            encoded.append_t8oh9e_k$(this.hexDigits_1[bytes[i] & 15]);
          }
           while (inductionVariable < bytesLength);
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          throw AssertionError_init_$Create$(e);
        } else {
          throw $p;
        }
      }
      current = nextAllowed;
    }
    decodeToString_0(new Int8Array(0));
    var tmp3_safe_receiver = encoded;
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString();
    return tmp4_elvis_lhs == null ? s : tmp4_elvis_lhs;
  };
  protoOf(UriCodec).decodeOrNull_3f0e4o_k$ = function (s, convertPlus, throwOnFailure) {
    return s == null ? null : this.decode_qyx8z_k$(s, convertPlus, throwOnFailure);
  };
  protoOf(UriCodec).decodeOrNull$default_r8omdl_k$ = function (s, convertPlus, throwOnFailure, $super) {
    convertPlus = convertPlus === VOID ? false : convertPlus;
    throwOnFailure = throwOnFailure === VOID ? false : throwOnFailure;
    return $super === VOID ? this.decodeOrNull_3f0e4o_k$(s, convertPlus, throwOnFailure) : $super.decodeOrNull_3f0e4o_k$.call(this, s, convertPlus, throwOnFailure);
  };
  protoOf(UriCodec).decode_qyx8z_k$ = function (s, convertPlus, throwOnFailure) {
    var builder = StringBuilder_init_$Create$_0(s.length);
    var tmp$ret$5;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new ByteBuffer(s.length);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.eygraber.uri.UriCodec.decode.<anonymous>' call
    var i = 0;
    while (i < s.length) {
      var tmp0 = i;
      i = tmp0 + 1 | 0;
      var c = charSequenceGet(s, tmp0);
      if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(43)))) {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'com.eygraber.uri.UriCodec.flushDecodingByteAccumulator' call
          var tmp0_flushDecodingByteAccumulator = UriCodec_getInstance();
          if (tmp0_apply.writePosition_1 === 0) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          try {
            builder.append_ssq29y_k$(tmp0_apply.decodeToStringAndReset_4xj976_k$());
          } catch ($p) {
            if ($p instanceof Exception) {
              var e = $p;
              if (throwOnFailure) {
                throw IllegalArgumentException_init_$Create$_0(e);
              } else {
                builder.append_t8oh9e_k$(_Char___init__impl__6a9atx(65533));
              }
            } else {
              throw $p;
            }
          }
        }
        builder.append_t8oh9e_k$(convertPlus ? _Char___init__impl__6a9atx(32) : _Char___init__impl__6a9atx(43));
      } else if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(37)))) {
        var hexValue = 0;
        var inductionVariable = 0;
        if (inductionVariable <= 1)
          $l$loop: do {
            var j = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp;
            try {
              tmp = getNextCharacter(UriCodec_getInstance(), s, i, s.length, null);
            } catch ($p) {
              var tmp_0;
              if ($p instanceof UriSyntaxException) {
                var e_0 = $p;
                var tmp_1;
                if (throwOnFailure) {
                  throw IllegalArgumentException_init_$Create$_0(e_0);
                } else {
                  var tmp$ret$1;
                  $l$block_0: {
                    // Inline function 'com.eygraber.uri.UriCodec.flushDecodingByteAccumulator' call
                    var tmp1_flushDecodingByteAccumulator = UriCodec_getInstance();
                    if (tmp0_apply.writePosition_1 === 0) {
                      tmp$ret$1 = Unit_getInstance();
                      break $l$block_0;
                    }
                    try {
                      builder.append_ssq29y_k$(tmp0_apply.decodeToStringAndReset_4xj976_k$());
                    } catch ($p) {
                      if ($p instanceof Exception) {
                        var e_1 = $p;
                        if (throwOnFailure) {
                          throw IllegalArgumentException_init_$Create$_0(e_1);
                        } else {
                          builder.append_t8oh9e_k$(_Char___init__impl__6a9atx(65533));
                        }
                      } else {
                        throw $p;
                      }
                    }
                  }
                  UriCodec_getInstance();
                  builder.append_t8oh9e_k$(_Char___init__impl__6a9atx(65533));
                  return builder.toString();
                }
                tmp_0 = tmp_1;
              } else {
                throw $p;
              }
              tmp = tmp_0;
            }
            var nextC = tmp;
            var tmp2 = i;
            i = tmp2 + 1 | 0;
            var newDigit = hexCharToValue(UriCodec_getInstance(), nextC);
            if (newDigit < 0) {
              if (throwOnFailure) {
                throw IllegalArgumentException_init_$Create$_0(unexpectedCharacterException(UriCodec_getInstance(), s, null, nextC, i - 1 | 0));
              } else {
                var tmp$ret$2;
                $l$block_1: {
                  // Inline function 'com.eygraber.uri.UriCodec.flushDecodingByteAccumulator' call
                  var tmp2_flushDecodingByteAccumulator = UriCodec_getInstance();
                  if (tmp0_apply.writePosition_1 === 0) {
                    tmp$ret$2 = Unit_getInstance();
                    break $l$block_1;
                  }
                  try {
                    builder.append_ssq29y_k$(tmp0_apply.decodeToStringAndReset_4xj976_k$());
                  } catch ($p) {
                    if ($p instanceof Exception) {
                      var e_2 = $p;
                      if (throwOnFailure) {
                        throw IllegalArgumentException_init_$Create$_0(e_2);
                      } else {
                        builder.append_t8oh9e_k$(_Char___init__impl__6a9atx(65533));
                      }
                    } else {
                      throw $p;
                    }
                  }
                }
                UriCodec_getInstance();
                builder.append_t8oh9e_k$(_Char___init__impl__6a9atx(65533));
                break $l$loop;
              }
            }
            hexValue = toByte((hexValue * 16 | 0) + newDigit | 0);
          }
           while (inductionVariable <= 1);
        tmp0_apply.writeByte_jvpujw_k$(hexValue);
      } else {
        var tmp$ret$3;
        $l$block_2: {
          // Inline function 'com.eygraber.uri.UriCodec.flushDecodingByteAccumulator' call
          var tmp3_flushDecodingByteAccumulator = UriCodec_getInstance();
          if (tmp0_apply.writePosition_1 === 0) {
            tmp$ret$3 = Unit_getInstance();
            break $l$block_2;
          }
          try {
            builder.append_ssq29y_k$(tmp0_apply.decodeToStringAndReset_4xj976_k$());
          } catch ($p) {
            if ($p instanceof Exception) {
              var e_3 = $p;
              if (throwOnFailure) {
                throw IllegalArgumentException_init_$Create$_0(e_3);
              } else {
                builder.append_t8oh9e_k$(_Char___init__impl__6a9atx(65533));
              }
            } else {
              throw $p;
            }
          }
        }
        builder.append_t8oh9e_k$(c);
      }
    }
    var tmp$ret$4;
    $l$block_3: {
      // Inline function 'com.eygraber.uri.UriCodec.flushDecodingByteAccumulator' call
      var tmp4_flushDecodingByteAccumulator = UriCodec_getInstance();
      if (tmp0_apply.writePosition_1 === 0) {
        tmp$ret$4 = Unit_getInstance();
        break $l$block_3;
      }
      try {
        builder.append_ssq29y_k$(tmp0_apply.decodeToStringAndReset_4xj976_k$());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e_4 = $p;
          if (throwOnFailure) {
            throw IllegalArgumentException_init_$Create$_0(e_4);
          } else {
            builder.append_t8oh9e_k$(_Char___init__impl__6a9atx(65533));
          }
        } else {
          throw $p;
        }
      }
    }
    tmp$ret$5 = tmp0_apply;
    return builder.toString();
  };
  protoOf(UriCodec).decode$default_593vyu_k$ = function (s, convertPlus, throwOnFailure, $super) {
    convertPlus = convertPlus === VOID ? false : convertPlus;
    throwOnFailure = throwOnFailure === VOID ? false : throwOnFailure;
    return $super === VOID ? this.decode_qyx8z_k$(s, convertPlus, throwOnFailure) : $super.decode_qyx8z_k$.call(this, s, convertPlus, throwOnFailure);
  };
  var UriCodec_instance;
  function UriCodec_getInstance() {
    if (UriCodec_instance == null)
      new UriCodec();
    return UriCodec_instance;
  }
  function buffer$factory() {
    return getPropertyCallableRef('buffer', 1, KProperty1, function (receiver) {
      return _get_buffer__tgqkad(receiver);
    }, null);
  }
  function _get_internalReason__jlhbg6($this) {
    return $this.internalReason_1;
  }
  function UriSyntaxException(input, internalReason, index) {
    index = index === VOID ? -1 : index;
    Exception_init_$Init$(internalReason, this);
    captureStack(this, UriSyntaxException);
    this.input_1 = input;
    this.internalReason_1 = internalReason;
    this.index_1 = index;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.index_1 >= -1;
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
  protoOf(UriSyntaxException).get_input_it4gip_k$ = function () {
    return this.input_1;
  };
  protoOf(UriSyntaxException).get_index_it478p_k$ = function () {
    return this.index_1;
  };
  protoOf(UriSyntaxException).get_reason_iy4m6l_k$ = function () {
    return this.get_message_h23axq_k$();
  };
  protoOf(UriSyntaxException).get_message_h23axq_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.eygraber.uri.UriSyntaxException.<get-message>.<anonymous>' call
    tmp0_apply.append_ssq29y_k$(this.internalReason_1);
    if (this.index_1 > -1) {
      tmp0_apply.append_ssq29y_k$(' at index ');
      tmp0_apply.append_t8pm91_k$(this.index_1);
    }
    tmp0_apply.append_ssq29y_k$(': ');
    tmp0_apply.append_ssq29y_k$(this.input_1);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  defineProp(protoOf(UriSyntaxException), 'message', function () {
    return this.get_message_h23axq_k$();
  });
  function get_NOT_FOUND() {
    return NOT_FOUND;
  }
  var NOT_FOUND;
  function _get_internalDecoded__fpdua0($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = internalDecoded$factory();
    tmp$ret$0 = $this.internalDecoded$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function _get_internalEncoded__35l2u8($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = internalEncoded$factory();
    tmp$ret$0 = $this.internalEncoded$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function _get_mCanonicalRepresentation__i0himv($this) {
    return $this.mCanonicalRepresentation_1;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.REPRESENTATION_ENCODED_1 = 1;
    this.REPRESENTATION_DECODED_1 = 2;
  }
  protoOf(Companion_1).get_REPRESENTATION_ENCODED_gn97r9_k$ = function () {
    return this.REPRESENTATION_ENCODED_1;
  };
  protoOf(Companion_1).get_REPRESENTATION_DECODED_2ajo0j_k$ = function () {
    return this.REPRESENTATION_DECODED_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function AbstractPart$internalDecoded$delegate$lambda(this$0, $decoded, $encoded) {
    return function () {
      var tmp;
      if (this$0.wasEncodedCached_1 ? true : $decoded === NotCachedHolder_getInstance().get_NotCached_fzv8j8_k$()) {
        tmp = UriCodec_getInstance().decodeOrNull$default_r8omdl_k$($encoded);
      } else {
        tmp = $decoded;
      }
      return tmp;
    };
  }
  function AbstractPart$internalEncoded$delegate$lambda($encoded, this$0, $decoded) {
    return function () {
      return $encoded === NotCachedHolder_getInstance().get_NotCached_fzv8j8_k$() ? this$0.encode_h8cak6_k$($decoded) : $encoded;
    };
  }
  function AbstractPart(encoded, decoded) {
    Companion_getInstance_2();
    this.wasEncodedCached_1 = !(encoded === NotCachedHolder_getInstance().get_NotCached_fzv8j8_k$());
    this.wasDecodedCached_1 = !(decoded === NotCachedHolder_getInstance().get_NotCached_fzv8j8_k$());
    var tmp = this;
    tmp.internalDecoded$delegate_1 = lazy(AbstractPart$internalDecoded$delegate$lambda(this, decoded, encoded));
    var tmp_0 = this;
    tmp_0.internalEncoded$delegate_1 = lazy(AbstractPart$internalEncoded$delegate$lambda(encoded, this, decoded));
    var tmp_1 = this;
    var tmp_2;
    if (!(encoded === NotCachedHolder_getInstance().get_NotCached_fzv8j8_k$())) {
      Companion_getInstance_2();
      tmp_2 = 1;
    } else if (!(decoded === NotCachedHolder_getInstance().get_NotCached_fzv8j8_k$())) {
      Companion_getInstance_2();
      tmp_2 = 2;
    } else {
      throw IllegalArgumentException_init_$Create$('Neither encoded nor decoded');
    }
    tmp_1.mCanonicalRepresentation_1 = tmp_2;
  }
  protoOf(AbstractPart).get_wasEncodedCached_bu4btc_k$ = function () {
    return this.wasEncodedCached_1;
  };
  protoOf(AbstractPart).get_wasDecodedCached_q73wdk_k$ = function () {
    return this.wasDecodedCached_1;
  };
  protoOf(AbstractPart).get_decoded_qrvnm5_k$ = function () {
    return _get_internalDecoded__fpdua0(this);
  };
  protoOf(AbstractPart).get_encoded_pbfil7_k$ = function () {
    return _get_internalEncoded__35l2u8(this);
  };
  function internalDecoded$factory() {
    return getPropertyCallableRef('internalDecoded', 1, KProperty1, function (receiver) {
      return _get_internalDecoded__fpdua0(receiver);
    }, null);
  }
  function internalEncoded$factory() {
    return getPropertyCallableRef('internalEncoded', 1, KProperty1, function (receiver) {
      return _get_internalEncoded__35l2u8(receiver);
    }, null);
  }
  function EmptyPart(value) {
    Part.call(this, value, value);
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = value == null ? true : charSequenceLength(value) === 0;
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'com.eygraber.uri.parts.EmptyPart.<anonymous>' call
      tmp$ret$1 = 'Expected empty value, got: ' + value;
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.isEmpty_1 = true;
  }
  protoOf(EmptyPart).get_isEmpty_zauvru_k$ = function () {
    return this.isEmpty_1;
  };
  function Companion_2() {
    Companion_instance_2 = this;
    this.NULL_1 = new EmptyPart(null);
    this.EMPTY_1 = new EmptyPart('');
  }
  protoOf(Companion_2).get_NULL_wo69cg_k$ = function () {
    return this.NULL_1;
  };
  protoOf(Companion_2).get_EMPTY_i8q41w_k$ = function () {
    return this.EMPTY_1;
  };
  protoOf(Companion_2).nonNull_chg1al_k$ = function (part) {
    var tmp0_elvis_lhs = part;
    return tmp0_elvis_lhs == null ? this.NULL_1 : tmp0_elvis_lhs;
  };
  protoOf(Companion_2).fromEncoded_su55pg_k$ = function (encoded) {
    return this.from_7tha22_k$(encoded, NotCachedHolder_getInstance().get_NotCached_fzv8j8_k$());
  };
  protoOf(Companion_2).fromDecoded_ql8e30_k$ = function (decoded) {
    return this.from_7tha22_k$(NotCachedHolder_getInstance().get_NotCached_fzv8j8_k$(), decoded);
  };
  protoOf(Companion_2).from_7tha22_k$ = function (encoded, decoded) {
    var tmp;
    if (encoded == null) {
      tmp = this.NULL_1;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.text.isEmpty' call
      tmp$ret$0 = charSequenceLength(encoded) === 0;
      if (tmp$ret$0) {
        tmp = this.EMPTY_1;
      } else {
        if (decoded == null) {
          tmp = this.NULL_1;
        } else {
          var tmp$ret$1;
          // Inline function 'kotlin.text.isEmpty' call
          tmp$ret$1 = charSequenceLength(decoded) === 0;
          if (tmp$ret$1) {
            tmp = this.EMPTY_1;
          } else {
            tmp = new Part(encoded, decoded);
          }
        }
      }
    }
    return tmp;
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Part(encoded, decoded) {
    Companion_getInstance_3();
    AbstractPart.call(this, encoded, decoded);
  }
  protoOf(Part).get_isEmpty_zauvru_k$ = function () {
    return false;
  };
  protoOf(Part).encode_h8cak6_k$ = function (decoded) {
    return UriCodec_getInstance().encodeOrNull_uk1468_k$(decoded);
  };
  function Companion_3() {
    Companion_instance_3 = this;
    this.NULL_1 = new PathPart(null, null);
    this.EMPTY_1 = new PathPart('', '');
  }
  protoOf(Companion_3).get_NULL_wo69cg_k$ = function () {
    return this.NULL_1;
  };
  protoOf(Companion_3).get_EMPTY_i8q41w_k$ = function () {
    return this.EMPTY_1;
  };
  protoOf(Companion_3).appendEncodedSegment_eldbqa_k$ = function (oldPart, newSegment) {
    if (oldPart == null) {
      return this.fromEncoded_su55pg_k$('/' + newSegment);
    }
    var oldPath = oldPart.get_encoded_pbfil7_k$();
    if (oldPath == null) {
      oldPath = '';
    }
    var oldPathLength = oldPath.length;
    var newPath = oldPathLength === 0 ? '/' + newSegment : equals(new Char(charSequenceGet(oldPath, oldPathLength - 1 | 0)), new Char(_Char___init__impl__6a9atx(47))) ? oldPath + newSegment : '' + oldPath + '/' + newSegment;
    return this.fromEncoded_su55pg_k$(newPath);
  };
  protoOf(Companion_3).appendDecodedSegment_iv9mtm_k$ = function (oldPart, decoded) {
    var encoded = UriCodec_getInstance().encode_fhegd1_k$(decoded);
    return this.appendEncodedSegment_eldbqa_k$(oldPart, encoded);
  };
  protoOf(Companion_3).fromEncoded_su55pg_k$ = function (encoded) {
    return this.from_7tha22_k$(encoded, NotCachedHolder_getInstance().get_NotCached_fzv8j8_k$());
  };
  protoOf(Companion_3).fromDecoded_ql8e30_k$ = function (decoded) {
    return this.from_7tha22_k$(NotCachedHolder_getInstance().get_NotCached_fzv8j8_k$(), decoded);
  };
  protoOf(Companion_3).from_7tha22_k$ = function (encoded, decoded) {
    if (encoded == null) {
      return this.NULL_1;
    }
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$0 = charSequenceLength(encoded) === 0;
    if (tmp$ret$0) {
      tmp = this.EMPTY_1;
    } else {
      tmp = new PathPart(encoded, decoded);
    }
    return tmp;
  };
  protoOf(Companion_3).makeAbsolute_mrju1q_k$ = function (oldPart) {
    var oldPath = oldPart.get_wasEncodedCached_bu4btc_k$() ? oldPart.get_encoded_pbfil7_k$() : oldPart.get_decoded_qrvnm5_k$();
    var tmp;
    var tmp_0;
    if (oldPath == null) {
      tmp_0 = true;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.text.isEmpty' call
      tmp$ret$0 = charSequenceLength(oldPath) === 0;
      tmp_0 = tmp$ret$0;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = startsWith(oldPath, '/');
    }
    if (tmp) {
      return oldPart;
    }
    var newEncoded = oldPart.get_wasEncodedCached_bu4btc_k$() ? '/' + oldPart.get_encoded_pbfil7_k$() : NotCachedHolder_getInstance().get_NotCached_fzv8j8_k$();
    var newDecoded = oldPart.get_wasDecodedCached_q73wdk_k$() ? '/' + oldPart.get_decoded_qrvnm5_k$() : NotCachedHolder_getInstance().get_NotCached_fzv8j8_k$();
    return new PathPart(newEncoded, newDecoded);
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function PathPart$pathSegments$delegate$lambda($encoded) {
    return function () {
      var tmp0_elvis_lhs = $encoded;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return Companion_getInstance_0().get_EMPTY_i8q41w_k$();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var path = tmp;
      var segmentBuilder = new PathSegmentsBuilder();
      var previous = 0;
      var current;
      $l$loop: while (true) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = indexOf(path, _Char___init__impl__6a9atx(47), previous);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.eygraber.uri.parts.PathPart.pathSegments$delegate.<anonymous>.<anonymous>' call
        current = tmp0_also;
        tmp$ret$0 = tmp0_also;
        if (!(tmp$ret$0 > -1)) {
          break $l$loop;
        }
        if (previous < current) {
          var tmp_0 = UriCodec_getInstance();
          var tmp$ret$2;
          // Inline function 'kotlin.text.substring' call
          var tmp1_substring = previous;
          var tmp2_substring = current;
          var tmp$ret$1;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$1 = path;
          tmp$ret$2 = tmp$ret$1.substring(tmp1_substring, tmp2_substring);
          segmentBuilder.add_6nc4hd_k$(tmp_0.decode$default_593vyu_k$(tmp$ret$2));
        }
        previous = current + 1 | 0;
      }
      var tmp_1;
      if (previous < path.length) {
        var tmp_2 = UriCodec_getInstance();
        var tmp$ret$4;
        // Inline function 'kotlin.text.substring' call
        var tmp3_substring = previous;
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = path;
        tmp$ret$4 = tmp$ret$3.substring(tmp3_substring);
        segmentBuilder.add_6nc4hd_k$(tmp_2.decode$default_593vyu_k$(tmp$ret$4));
        tmp_1 = Unit_getInstance();
      }
      return segmentBuilder.build_1k0s4u_k$();
    };
  }
  function PathPart(encoded, decoded) {
    Companion_getInstance_4();
    AbstractPart.call(this, encoded, decoded);
    var tmp = this;
    tmp.pathSegments$delegate_1 = lazy(PathPart$pathSegments$delegate$lambda(encoded));
  }
  protoOf(PathPart).encode_h8cak6_k$ = function (decoded) {
    return UriCodec_getInstance().encodeOrNull_dq9k5c_k$(decoded, '/');
  };
  protoOf(PathPart).get_pathSegments_2e2s6m_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = pathSegments$factory();
    tmp$ret$0 = this.pathSegments$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  function pathSegments$factory() {
    return getPropertyCallableRef('pathSegments', 1, KProperty1, function (receiver) {
      return receiver.get_pathSegments_2e2s6m_k$();
    }, null);
  }
  function _get__userInfo__u1z7bt($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = _userInfo$factory();
    tmp$ret$0 = $this._userInfo$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function findPortSeparator($this, authority) {
    var inductionVariable = authority.length - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        var tmp0__get_code__88qj9g = charSequenceGet(authority, i);
        tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
        var character = tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'kotlin.code' call
        tmp$ret$1 = 58;
        if (tmp$ret$1 === character)
          return i;
        var tmp;
        var tmp$ret$2;
        // Inline function 'kotlin.code' call
        tmp$ret$2 = 48;
        if (character < tmp$ret$2) {
          tmp = true;
        } else {
          var tmp$ret$3;
          // Inline function 'kotlin.code' call
          tmp$ret$3 = 57;
          tmp = character > tmp$ret$3;
        }
        if (tmp)
          return get_NOT_FOUND();
      }
       while (0 <= inductionVariable);
    return get_NOT_FOUND();
  }
  function AbstractHierarchicalUri$lastPathSegment$delegate$lambda(this$0) {
    return function () {
      var segments = this$0.get_pathSegments_2e2s6m_k$();
      return segments.isEmpty_y1axqb_k$() ? null : last(segments);
    };
  }
  function AbstractHierarchicalUri$_userInfo$delegate$lambda(this$0) {
    return function () {
      var tmp0_elvis_lhs = this$0.get_encodedAuthority_lr69gi_k$();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return Companion_getInstance_3().fromEncoded_su55pg_k$(null);
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var authority = tmp;
      var end = lastIndexOf(authority, _Char___init__impl__6a9atx(64));
      var tmp_0 = Companion_getInstance_3();
      var tmp_1;
      if (end === get_NOT_FOUND()) {
        tmp_1 = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.text.substring' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = authority;
        tmp$ret$1 = tmp$ret$0.substring(0, end);
        tmp_1 = tmp$ret$1;
      }
      return tmp_0.fromEncoded_su55pg_k$(tmp_1);
    };
  }
  function AbstractHierarchicalUri$userInfo$delegate$lambda(this$0) {
    return function () {
      return _get__userInfo__u1z7bt(this$0).get_decoded_qrvnm5_k$();
    };
  }
  function AbstractHierarchicalUri$encodedUserInfo$delegate$lambda(this$0) {
    return function () {
      return _get__userInfo__u1z7bt(this$0).get_encoded_pbfil7_k$();
    };
  }
  function AbstractHierarchicalUri$host$delegate$lambda(this$0) {
    return function () {
      var tmp0_elvis_lhs = this$0.get_encodedAuthority_lr69gi_k$();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return null;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var authority = tmp;
      var userInfoSeparator = lastIndexOf(authority, _Char___init__impl__6a9atx(64));
      var portSeparator = findPortSeparator(this$0, authority);
      var tmp_0;
      if (portSeparator === get_NOT_FOUND()) {
        var tmp$ret$1;
        // Inline function 'kotlin.text.substring' call
        var tmp0_substring = userInfoSeparator + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = authority;
        tmp$ret$1 = tmp$ret$0.substring(tmp0_substring);
        tmp_0 = tmp$ret$1;
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.text.substring' call
        var tmp1_substring = userInfoSeparator + 1 | 0;
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = authority;
        tmp$ret$3 = tmp$ret$2.substring(tmp1_substring, portSeparator);
        tmp_0 = tmp$ret$3;
      }
      var encodedHost = tmp_0;
      return UriCodec_getInstance().decode$default_593vyu_k$(encodedHost);
    };
  }
  function AbstractHierarchicalUri$port$delegate$lambda(this$0) {
    return function () {
      var tmp0_elvis_lhs = this$0.get_encodedAuthority_lr69gi_k$();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return -1;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var authority = tmp;
      var portSeparator = findPortSeparator(this$0, authority);
      var tmp_0;
      if (portSeparator === get_NOT_FOUND()) {
        return -1;
      }
      var tmp_1 = UriCodec_getInstance();
      var tmp$ret$1;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = portSeparator + 1 | 0;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = authority;
      tmp$ret$1 = tmp$ret$0.substring(tmp0_substring);
      var portString = tmp_1.decode$default_593vyu_k$(tmp$ret$1);
      var tmp_2;
      try {
        tmp_2 = toInt(portString);
      } catch ($p) {
        var tmp_3;
        if ($p instanceof NumberFormatException) {
          var e = $p;
          tmp_3 = -1;
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      return tmp_2;
    };
  }
  function AbstractHierarchicalUri() {
    var tmp = this;
    tmp.lastPathSegment$delegate_1 = lazy(AbstractHierarchicalUri$lastPathSegment$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0._userInfo$delegate_1 = lazy(AbstractHierarchicalUri$_userInfo$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.userInfo$delegate_1 = lazy(AbstractHierarchicalUri$userInfo$delegate$lambda(this));
    var tmp_2 = this;
    tmp_2.encodedUserInfo$delegate_1 = lazy(AbstractHierarchicalUri$encodedUserInfo$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.host$delegate_1 = lazy(AbstractHierarchicalUri$host$delegate$lambda(this));
    var tmp_4 = this;
    tmp_4.port$delegate_1 = lazy(AbstractHierarchicalUri$port$delegate$lambda(this));
  }
  protoOf(AbstractHierarchicalUri).get_lastPathSegment_846wf_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = lastPathSegment$factory();
    tmp$ret$0 = this.lastPathSegment$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(AbstractHierarchicalUri).get_userInfo_ytbsgy_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = userInfo$factory();
    tmp$ret$0 = this.userInfo$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(AbstractHierarchicalUri).get_encodedUserInfo_39hxzy_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = encodedUserInfo$factory();
    tmp$ret$0 = this.encodedUserInfo$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(AbstractHierarchicalUri).get_host_wonf8x_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = host$factory();
    tmp$ret$0 = this.host$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(AbstractHierarchicalUri).get_port_wosj4a_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = port$factory();
    tmp$ret$0 = this.port$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(AbstractHierarchicalUri).compareTo_6thzaj_k$ = function (other) {
    return this.compareTo_v5oyyz_k$((!(other == null) ? isInterface(other, Uri) : false) ? other : THROW_CCE());
  };
  function lastPathSegment$factory() {
    return getPropertyCallableRef('lastPathSegment', 1, KProperty1, function (receiver) {
      return receiver.get_lastPathSegment_846wf_k$();
    }, null);
  }
  function _userInfo$factory() {
    return getPropertyCallableRef('_userInfo', 1, KProperty1, function (receiver) {
      return _get__userInfo__u1z7bt(receiver);
    }, null);
  }
  function userInfo$factory() {
    return getPropertyCallableRef('userInfo', 1, KProperty1, function (receiver) {
      return receiver.get_userInfo_ytbsgy_k$();
    }, null);
  }
  function encodedUserInfo$factory() {
    return getPropertyCallableRef('encodedUserInfo', 1, KProperty1, function (receiver) {
      return receiver.get_encodedUserInfo_39hxzy_k$();
    }, null);
  }
  function host$factory() {
    return getPropertyCallableRef('host', 1, KProperty1, function (receiver) {
      return receiver.get_host_wonf8x_k$();
    }, null);
  }
  function port$factory() {
    return getPropertyCallableRef('port', 1, KProperty1, function (receiver) {
      return receiver.get_port_wosj4a_k$();
    }, null);
  }
  function _get_authorityPart__2eumyj($this) {
    return $this.authorityPart_1;
  }
  function _get_pathPart__i0uz2r($this) {
    return $this.pathPart_1;
  }
  function _get_queryPart__onb3u2($this) {
    return $this.queryPart_1;
  }
  function _get_fragmentPart__iqsq0o($this) {
    return $this.fragmentPart_1;
  }
  function _get_ssp__e6gvb5($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = ssp$factory();
    tmp$ret$0 = $this.ssp$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function makeSchemeSpecificPart($this) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.eygraber.uri.uris.HierarchicalUri.makeSchemeSpecificPart.<anonymous>' call
    appendSspTo(tmp0_apply, $this);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function appendSspTo(_this__u8e3s4, $this) {
    var encodedAuthority = $this.authorityPart_1.get_encoded_pbfil7_k$();
    if (!(encodedAuthority == null)) {
      _this__u8e3s4.append_ssq29y_k$('//').append_ssq29y_k$(encodedAuthority);
    }
    var encodedPath = $this.pathPart_1.get_encoded_pbfil7_k$();
    if (!(encodedPath == null)) {
      _this__u8e3s4.append_ssq29y_k$(encodedPath);
    }
    if (!$this.queryPart_1.get_isEmpty_zauvru_k$()) {
      _this__u8e3s4.append_t8oh9e_k$(_Char___init__impl__6a9atx(63)).append_ssq29y_k$($this.queryPart_1.get_encoded_pbfil7_k$());
    }
  }
  function _get_uriString__5epoks($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = uriString$factory();
    tmp$ret$0 = $this.uriString$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function HierarchicalUri$ssp$delegate$lambda(this$0) {
    return function () {
      return Companion_getInstance_3().fromEncoded_su55pg_k$(makeSchemeSpecificPart(this$0));
    };
  }
  function HierarchicalUri$encodedSchemeSpecificPart$delegate$lambda(this$0) {
    return function () {
      return _get_ssp__e6gvb5(this$0).get_encoded_pbfil7_k$();
    };
  }
  function HierarchicalUri$schemeSpecificPart$delegate$lambda(this$0) {
    return function () {
      return _get_ssp__e6gvb5(this$0).get_decoded_qrvnm5_k$();
    };
  }
  function HierarchicalUri$authority$delegate$lambda(this$0) {
    return function () {
      return this$0.authorityPart_1.get_decoded_qrvnm5_k$();
    };
  }
  function HierarchicalUri$encodedAuthority$delegate$lambda(this$0) {
    return function () {
      return this$0.authorityPart_1.get_encoded_pbfil7_k$();
    };
  }
  function HierarchicalUri$encodedPath$delegate$lambda(this$0) {
    return function () {
      return this$0.pathPart_1.get_encoded_pbfil7_k$();
    };
  }
  function HierarchicalUri$path$delegate$lambda(this$0) {
    return function () {
      return this$0.pathPart_1.get_decoded_qrvnm5_k$();
    };
  }
  function HierarchicalUri$query$delegate$lambda(this$0) {
    return function () {
      return this$0.queryPart_1.get_decoded_qrvnm5_k$();
    };
  }
  function HierarchicalUri$encodedQuery$delegate$lambda(this$0) {
    return function () {
      return this$0.queryPart_1.get_encoded_pbfil7_k$();
    };
  }
  function HierarchicalUri$fragment$delegate$lambda(this$0) {
    return function () {
      return this$0.fragmentPart_1.get_decoded_qrvnm5_k$();
    };
  }
  function HierarchicalUri$encodedFragment$delegate$lambda(this$0) {
    return function () {
      return this$0.fragmentPart_1.get_encoded_pbfil7_k$();
    };
  }
  function HierarchicalUri$pathSegments$delegate$lambda(this$0) {
    return function () {
      return this$0.pathPart_1.get_pathSegments_2e2s6m_k$();
    };
  }
  function HierarchicalUri$uriString$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$1;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.eygraber.uri.uris.HierarchicalUri.uriString$delegate.<anonymous>.<anonymous>' call
      if (!(this$0.scheme_1 == null)) {
        tmp0_apply.append_ssq29y_k$(this$0.scheme_1).append_t8oh9e_k$(_Char___init__impl__6a9atx(58));
      }
      appendSspTo(tmp0_apply, this$0);
      if (!this$0.fragmentPart_1.get_isEmpty_zauvru_k$()) {
        tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(35)).append_ssq29y_k$(this$0.get_encodedFragment_jm6jcb_k$());
      }
      tmp$ret$0 = tmp0_apply;
      tmp$ret$1 = tmp$ret$0.toString();
      return tmp$ret$1;
    };
  }
  function HierarchicalUri(scheme, _authorityPart, _pathPart, _queryPart, _fragmentPart) {
    AbstractHierarchicalUri.call(this);
    this.scheme_1 = scheme;
    this.authorityPart_1 = Companion_getInstance_3().nonNull_chg1al_k$(_authorityPart);
    var tmp = this;
    var tmp0_elvis_lhs = _pathPart;
    tmp.pathPart_1 = tmp0_elvis_lhs == null ? Companion_getInstance_4().get_NULL_wo69cg_k$() : tmp0_elvis_lhs;
    this.queryPart_1 = Companion_getInstance_3().nonNull_chg1al_k$(_queryPart);
    this.fragmentPart_1 = Companion_getInstance_3().nonNull_chg1al_k$(_fragmentPart);
    this.isHierarchical_1 = true;
    this.isRelative_1 = this.scheme_1 == null;
    var tmp_0 = this;
    tmp_0.ssp$delegate_1 = lazy(HierarchicalUri$ssp$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.encodedSchemeSpecificPart$delegate_1 = lazy(HierarchicalUri$encodedSchemeSpecificPart$delegate$lambda(this));
    var tmp_2 = this;
    tmp_2.schemeSpecificPart$delegate_1 = lazy(HierarchicalUri$schemeSpecificPart$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.authority$delegate_1 = lazy(HierarchicalUri$authority$delegate$lambda(this));
    var tmp_4 = this;
    tmp_4.encodedAuthority$delegate_1 = lazy(HierarchicalUri$encodedAuthority$delegate$lambda(this));
    var tmp_5 = this;
    tmp_5.encodedPath$delegate_1 = lazy(HierarchicalUri$encodedPath$delegate$lambda(this));
    var tmp_6 = this;
    tmp_6.path$delegate_1 = lazy(HierarchicalUri$path$delegate$lambda(this));
    var tmp_7 = this;
    tmp_7.query$delegate_1 = lazy(HierarchicalUri$query$delegate$lambda(this));
    var tmp_8 = this;
    tmp_8.encodedQuery$delegate_1 = lazy(HierarchicalUri$encodedQuery$delegate$lambda(this));
    var tmp_9 = this;
    tmp_9.fragment$delegate_1 = lazy(HierarchicalUri$fragment$delegate$lambda(this));
    var tmp_10 = this;
    tmp_10.encodedFragment$delegate_1 = lazy(HierarchicalUri$encodedFragment$delegate$lambda(this));
    var tmp_11 = this;
    tmp_11.pathSegments$delegate_1 = lazy(HierarchicalUri$pathSegments$delegate$lambda(this));
    var tmp_12 = this;
    tmp_12.uriString$delegate_1 = lazy(HierarchicalUri$uriString$delegate$lambda(this));
  }
  protoOf(HierarchicalUri).get_scheme_je6tv2_k$ = function () {
    return this.scheme_1;
  };
  protoOf(HierarchicalUri).get_isHierarchical_yyaz18_k$ = function () {
    return this.isHierarchical_1;
  };
  protoOf(HierarchicalUri).get_isRelative_skgyhr_k$ = function () {
    return this.isRelative_1;
  };
  protoOf(HierarchicalUri).get_encodedSchemeSpecificPart_us2mxb_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = encodedSchemeSpecificPart$factory();
    tmp$ret$0 = this.encodedSchemeSpecificPart$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(HierarchicalUri).get_schemeSpecificPart_vjrot_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = schemeSpecificPart$factory();
    tmp$ret$0 = this.schemeSpecificPart$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(HierarchicalUri).get_authority_wx29i2_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = authority$factory();
    tmp$ret$0 = this.authority$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(HierarchicalUri).get_encodedAuthority_lr69gi_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = encodedAuthority$factory();
    tmp$ret$0 = this.encodedAuthority$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(HierarchicalUri).get_encodedPath_p9zwnq_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = encodedPath$factory();
    tmp$ret$0 = this.encodedPath$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(HierarchicalUri).get_path_wos8ry_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = path$factory();
    tmp$ret$0 = this.path$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(HierarchicalUri).get_query_ixn1y7_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = query$factory();
    tmp$ret$0 = this.query$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(HierarchicalUri).get_encodedQuery_28s95p_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = encodedQuery$factory();
    tmp$ret$0 = this.encodedQuery$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(HierarchicalUri).get_fragment_bxnb4p_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = fragment$factory();
    tmp$ret$0 = this.fragment$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(HierarchicalUri).get_encodedFragment_jm6jcb_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = encodedFragment$factory();
    tmp$ret$0 = this.encodedFragment$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(HierarchicalUri).get_pathSegments_2e2s6m_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = pathSegments$factory_0();
    tmp$ret$0 = this.pathSegments$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(HierarchicalUri).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Uri) : false) {
      tmp = this.toString() === toString(other);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(HierarchicalUri).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  protoOf(HierarchicalUri).toString = function () {
    return _get_uriString__5epoks(this);
  };
  protoOf(HierarchicalUri).buildUpon_n637i0_k$ = function () {
    return (new Builder_0()).scheme_nlylt1_k$(this.scheme_1).authority_bpgigs_k$(this.authorityPart_1).path_1mubi5_k$(this.pathPart_1).query_cuj5sv_k$(this.queryPart_1).fragment_68d40n_k$(this.fragmentPart_1);
  };
  protoOf(HierarchicalUri).compareTo_6thzaj_k$ = function (other) {
    return this.compareTo_v5oyyz_k$((!(other == null) ? isInterface(other, Uri) : false) ? other : THROW_CCE());
  };
  function ssp$factory() {
    return getPropertyCallableRef('ssp', 1, KProperty1, function (receiver) {
      return _get_ssp__e6gvb5(receiver);
    }, null);
  }
  function encodedSchemeSpecificPart$factory() {
    return getPropertyCallableRef('encodedSchemeSpecificPart', 1, KProperty1, function (receiver) {
      return receiver.get_encodedSchemeSpecificPart_us2mxb_k$();
    }, null);
  }
  function schemeSpecificPart$factory() {
    return getPropertyCallableRef('schemeSpecificPart', 1, KProperty1, function (receiver) {
      return receiver.get_schemeSpecificPart_vjrot_k$();
    }, null);
  }
  function authority$factory() {
    return getPropertyCallableRef('authority', 1, KProperty1, function (receiver) {
      return receiver.get_authority_wx29i2_k$();
    }, null);
  }
  function encodedAuthority$factory() {
    return getPropertyCallableRef('encodedAuthority', 1, KProperty1, function (receiver) {
      return receiver.get_encodedAuthority_lr69gi_k$();
    }, null);
  }
  function encodedPath$factory() {
    return getPropertyCallableRef('encodedPath', 1, KProperty1, function (receiver) {
      return receiver.get_encodedPath_p9zwnq_k$();
    }, null);
  }
  function path$factory() {
    return getPropertyCallableRef('path', 1, KProperty1, function (receiver) {
      return receiver.get_path_wos8ry_k$();
    }, null);
  }
  function query$factory() {
    return getPropertyCallableRef('query', 1, KProperty1, function (receiver) {
      return receiver.get_query_ixn1y7_k$();
    }, null);
  }
  function encodedQuery$factory() {
    return getPropertyCallableRef('encodedQuery', 1, KProperty1, function (receiver) {
      return receiver.get_encodedQuery_28s95p_k$();
    }, null);
  }
  function fragment$factory() {
    return getPropertyCallableRef('fragment', 1, KProperty1, function (receiver) {
      return receiver.get_fragment_bxnb4p_k$();
    }, null);
  }
  function encodedFragment$factory() {
    return getPropertyCallableRef('encodedFragment', 1, KProperty1, function (receiver) {
      return receiver.get_encodedFragment_jm6jcb_k$();
    }, null);
  }
  function pathSegments$factory_0() {
    return getPropertyCallableRef('pathSegments', 1, KProperty1, function (receiver) {
      return receiver.get_pathSegments_2e2s6m_k$();
    }, null);
  }
  function uriString$factory() {
    return getPropertyCallableRef('uriString', 1, KProperty1, function (receiver) {
      return _get_uriString__5epoks(receiver);
    }, null);
  }
  function _get_ssp__e6gvb5_0($this) {
    return $this.ssp_1;
  }
  function _get_fragmentPart__iqsq0o_0($this) {
    return $this.fragmentPart_1;
  }
  function _get_cachedString__4i410o($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = cachedString$factory();
    tmp$ret$0 = $this.cachedString$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function OpaqueUri$encodedSchemeSpecificPart$delegate$lambda(this$0) {
    return function () {
      return this$0.ssp_1.get_encoded_pbfil7_k$();
    };
  }
  function OpaqueUri$schemeSpecificPart$delegate$lambda(this$0) {
    return function () {
      return this$0.ssp_1.get_decoded_qrvnm5_k$();
    };
  }
  function OpaqueUri$fragment$delegate$lambda(this$0) {
    return function () {
      return this$0.fragmentPart_1.get_decoded_qrvnm5_k$();
    };
  }
  function OpaqueUri$encodedFragment$delegate$lambda(this$0) {
    return function () {
      return this$0.fragmentPart_1.get_encoded_pbfil7_k$();
    };
  }
  function OpaqueUri$cachedString$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$1;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.eygraber.uri.uris.OpaqueUri.cachedString$delegate.<anonymous>.<anonymous>' call
      tmp0_apply.append_ssq29y_k$(this$0.scheme_1).append_t8oh9e_k$(_Char___init__impl__6a9atx(58));
      tmp0_apply.append_ssq29y_k$(this$0.get_encodedSchemeSpecificPart_us2mxb_k$());
      if (!this$0.fragmentPart_1.get_isEmpty_zauvru_k$()) {
        tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(35)).append_ssq29y_k$(this$0.get_encodedFragment_jm6jcb_k$());
      }
      tmp$ret$0 = tmp0_apply;
      tmp$ret$1 = tmp$ret$0.toString();
      return tmp$ret$1;
    };
  }
  function OpaqueUri(scheme, ssp, _fragmentPart) {
    this.scheme_1 = scheme;
    this.ssp_1 = ssp;
    var tmp = this;
    var tmp0_elvis_lhs = _fragmentPart;
    tmp.fragmentPart_1 = tmp0_elvis_lhs == null ? Companion_getInstance_3().get_NULL_wo69cg_k$() : tmp0_elvis_lhs;
    this.isHierarchical_1 = false;
    this.isRelative_1 = this.scheme_1 == null;
    var tmp_0 = this;
    tmp_0.encodedSchemeSpecificPart$delegate_1 = lazy(OpaqueUri$encodedSchemeSpecificPart$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.schemeSpecificPart$delegate_1 = lazy(OpaqueUri$schemeSpecificPart$delegate$lambda(this));
    this.authority_1 = null;
    this.encodedAuthority_1 = null;
    this.path_1 = null;
    this.encodedPath_1 = null;
    this.query_1 = null;
    this.encodedQuery_1 = null;
    var tmp_2 = this;
    tmp_2.fragment$delegate_1 = lazy(OpaqueUri$fragment$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.encodedFragment$delegate_1 = lazy(OpaqueUri$encodedFragment$delegate$lambda(this));
    this.pathSegments_1 = emptyList();
    this.lastPathSegment_1 = null;
    this.userInfo_1 = null;
    this.encodedUserInfo_1 = null;
    this.host_1 = null;
    this.port_1 = -1;
    var tmp_4 = this;
    tmp_4.cachedString$delegate_1 = lazy(OpaqueUri$cachedString$delegate$lambda(this));
  }
  protoOf(OpaqueUri).get_scheme_je6tv2_k$ = function () {
    return this.scheme_1;
  };
  protoOf(OpaqueUri).get_isHierarchical_yyaz18_k$ = function () {
    return this.isHierarchical_1;
  };
  protoOf(OpaqueUri).get_isRelative_skgyhr_k$ = function () {
    return this.isRelative_1;
  };
  protoOf(OpaqueUri).get_encodedSchemeSpecificPart_us2mxb_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = encodedSchemeSpecificPart$factory_0();
    tmp$ret$0 = this.encodedSchemeSpecificPart$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(OpaqueUri).get_schemeSpecificPart_vjrot_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = schemeSpecificPart$factory_0();
    tmp$ret$0 = this.schemeSpecificPart$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(OpaqueUri).get_authority_wx29i2_k$ = function () {
    return this.authority_1;
  };
  protoOf(OpaqueUri).get_encodedAuthority_lr69gi_k$ = function () {
    return this.encodedAuthority_1;
  };
  protoOf(OpaqueUri).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(OpaqueUri).get_encodedPath_p9zwnq_k$ = function () {
    return this.encodedPath_1;
  };
  protoOf(OpaqueUri).get_query_ixn1y7_k$ = function () {
    return this.query_1;
  };
  protoOf(OpaqueUri).get_encodedQuery_28s95p_k$ = function () {
    return this.encodedQuery_1;
  };
  protoOf(OpaqueUri).get_fragment_bxnb4p_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = fragment$factory_0();
    tmp$ret$0 = this.fragment$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(OpaqueUri).get_encodedFragment_jm6jcb_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = encodedFragment$factory_0();
    tmp$ret$0 = this.encodedFragment$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(OpaqueUri).get_pathSegments_2e2s6m_k$ = function () {
    return this.pathSegments_1;
  };
  protoOf(OpaqueUri).get_lastPathSegment_846wf_k$ = function () {
    return this.lastPathSegment_1;
  };
  protoOf(OpaqueUri).get_userInfo_ytbsgy_k$ = function () {
    return this.userInfo_1;
  };
  protoOf(OpaqueUri).get_encodedUserInfo_39hxzy_k$ = function () {
    return this.encodedUserInfo_1;
  };
  protoOf(OpaqueUri).get_host_wonf8x_k$ = function () {
    return this.host_1;
  };
  protoOf(OpaqueUri).get_port_wosj4a_k$ = function () {
    return this.port_1;
  };
  protoOf(OpaqueUri).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Uri) : false) {
      tmp = this.toString() === toString(other);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(OpaqueUri).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  protoOf(OpaqueUri).toString = function () {
    return _get_cachedString__4i410o(this);
  };
  protoOf(OpaqueUri).buildUpon_n637i0_k$ = function () {
    return (new Builder_0()).scheme_nlylt1_k$(this.scheme_1).opaquePart_yaw0xf_k$(this.ssp_1).fragment_68d40n_k$(this.fragmentPart_1);
  };
  protoOf(OpaqueUri).compareTo_6thzaj_k$ = function (other) {
    return this.compareTo_v5oyyz_k$((!(other == null) ? isInterface(other, Uri) : false) ? other : THROW_CCE());
  };
  function encodedSchemeSpecificPart$factory_0() {
    return getPropertyCallableRef('encodedSchemeSpecificPart', 1, KProperty1, function (receiver) {
      return receiver.get_encodedSchemeSpecificPart_us2mxb_k$();
    }, null);
  }
  function schemeSpecificPart$factory_0() {
    return getPropertyCallableRef('schemeSpecificPart', 1, KProperty1, function (receiver) {
      return receiver.get_schemeSpecificPart_vjrot_k$();
    }, null);
  }
  function fragment$factory_0() {
    return getPropertyCallableRef('fragment', 1, KProperty1, function (receiver) {
      return receiver.get_fragment_bxnb4p_k$();
    }, null);
  }
  function encodedFragment$factory_0() {
    return getPropertyCallableRef('encodedFragment', 1, KProperty1, function (receiver) {
      return receiver.get_encodedFragment_jm6jcb_k$();
    }, null);
  }
  function cachedString$factory() {
    return getPropertyCallableRef('cachedString', 1, KProperty1, function (receiver) {
      return _get_cachedString__4i410o(receiver);
    }, null);
  }
  function _get_uriString__5epoks_0($this) {
    return $this.uriString_1;
  }
  function _get_cachedSsi__l34qja($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = cachedSsi$factory();
    tmp$ret$0 = $this.cachedSsi$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function _get_cachedFsi__l3d1d5($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = cachedFsi$factory();
    tmp$ret$0 = $this.cachedFsi$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function _get_ssp__e6gvb5_1($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = ssp$factory_0();
    tmp$ret$0 = $this.ssp$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function _get_authorityPart__2eumyj_0($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = authorityPart$factory();
    tmp$ret$0 = $this.authorityPart$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function _get_pathPart__i0uz2r_0($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = pathPart$factory();
    tmp$ret$0 = $this.pathPart$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function _get_queryPart__onb3u2_0($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = queryPart$factory();
    tmp$ret$0 = $this.queryPart$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function _get_fragmentPart__iqsq0o_1($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = fragmentPart$factory();
    tmp$ret$0 = $this.fragmentPart$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).parseAuthority_euxrzi_k$ = function (uriString, ssi) {
    var length = uriString.length;
    var tmp;
    if ((length > (ssi + 2 | 0) ? equals(new Char(charSequenceGet(uriString, ssi + 1 | 0)), new Char(_Char___init__impl__6a9atx(47))) : false) ? equals(new Char(charSequenceGet(uriString, ssi + 2 | 0)), new Char(_Char___init__impl__6a9atx(47))) : false) {
      var end = ssi + 3 | 0;
      $l$loop_0: while (end < length) {
        var c = charSequenceGet(uriString, end);
        if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(47))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(92))))
          break $l$loop_0;
        if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(63))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(35))))
          break $l$loop_0;
        var tmp0 = end;
        end = tmp0 + 1 | 0;
      }
      var tmp$ret$1;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = ssi + 3 | 0;
      var tmp1_substring = end;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = uriString;
      tmp$ret$1 = tmp$ret$0.substring(tmp0_substring, tmp1_substring);
      tmp = tmp$ret$1;
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(Companion_4).parsePath_ys55ka_k$ = function (uriString, ssi) {
    var length = uriString.length;
    var pathStart;
    if ((length > (ssi + 2 | 0) ? equals(new Char(charSequenceGet(uriString, ssi + 1 | 0)), new Char(_Char___init__impl__6a9atx(47))) : false) ? equals(new Char(charSequenceGet(uriString, ssi + 2 | 0)), new Char(_Char___init__impl__6a9atx(47))) : false) {
      pathStart = ssi + 3 | 0;
      $l$loop: while (pathStart < length) {
        var c = charSequenceGet(uriString, pathStart);
        if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(63))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(35))))
          return '';
        if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(47))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(92))))
          break $l$loop;
        var tmp0 = pathStart;
        pathStart = tmp0 + 1 | 0;
      }
    } else {
      pathStart = ssi + 1 | 0;
    }
    var pathEnd = pathStart;
    $l$loop_0: while (pathEnd < length) {
      var c_0 = charSequenceGet(uriString, pathEnd);
      if (equals(new Char(c_0), new Char(_Char___init__impl__6a9atx(63))) ? true : equals(new Char(c_0), new Char(_Char___init__impl__6a9atx(35))))
        break $l$loop_0;
      var tmp1 = pathEnd;
      pathEnd = tmp1 + 1 | 0;
    }
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = pathStart;
    var tmp1_substring = pathEnd;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = uriString;
    tmp$ret$1 = tmp$ret$0.substring(tmp0_substring, tmp1_substring);
    return tmp$ret$1;
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function StringUri$cachedSsi$delegate$lambda(this$0) {
    return function () {
      return indexOf(this$0.uriString_1, _Char___init__impl__6a9atx(58));
    };
  }
  function StringUri$cachedFsi$delegate$lambda(this$0) {
    return function () {
      return indexOf(this$0.uriString_1, _Char___init__impl__6a9atx(35), _get_cachedSsi__l34qja(this$0));
    };
  }
  function StringUri$isHierarchical$delegate$lambda(this$0) {
    return function () {
      var ssi = _get_cachedSsi__l34qja(this$0);
      var tmp;
      if (ssi === get_NOT_FOUND()) {
        tmp = true;
      } else {
        var tmp0_subject = this$0.uriString_1.length;
        tmp = tmp0_subject === (ssi + 1 | 0) ? false : equals(new Char(charSequenceGet(this$0.uriString_1, ssi + 1 | 0)), new Char(_Char___init__impl__6a9atx(47)));
      }
      return tmp;
    };
  }
  function StringUri$isRelative$delegate$lambda(this$0) {
    return function () {
      return _get_cachedSsi__l34qja(this$0) === get_NOT_FOUND();
    };
  }
  function StringUri$scheme$delegate$lambda(this$0) {
    return function () {
      var ssi = _get_cachedSsi__l34qja(this$0);
      var tmp;
      if (ssi === get_NOT_FOUND()) {
        tmp = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.text.substring' call
        var tmp0_substring = this$0.uriString_1;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_substring;
        tmp$ret$1 = tmp$ret$0.substring(0, ssi);
        tmp = tmp$ret$1;
      }
      return tmp;
    };
  }
  function StringUri$ssp$delegate$lambda(this$0) {
    return function () {
      var ssi = _get_cachedSsi__l34qja(this$0);
      var fsi = _get_cachedFsi__l3d1d5(this$0);
      var tmp = Companion_getInstance_3();
      var tmp_0;
      if (fsi === get_NOT_FOUND()) {
        var tmp$ret$1;
        // Inline function 'kotlin.text.substring' call
        var tmp0_substring = this$0.uriString_1;
        var tmp1_substring = ssi + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_substring;
        tmp$ret$1 = tmp$ret$0.substring(tmp1_substring);
        tmp_0 = tmp$ret$1;
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.text.substring' call
        var tmp2_substring = this$0.uriString_1;
        var tmp3_substring = ssi + 1 | 0;
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = tmp2_substring;
        tmp$ret$3 = tmp$ret$2.substring(tmp3_substring, fsi);
        tmp_0 = tmp$ret$3;
      }
      return tmp.fromEncoded_su55pg_k$(tmp_0);
    };
  }
  function StringUri$authorityPart$delegate$lambda(this$0) {
    return function () {
      var encodedAuthority = Companion_getInstance_5().parseAuthority_euxrzi_k$(this$0.uriString_1, _get_cachedSsi__l34qja(this$0));
      return Companion_getInstance_3().fromEncoded_su55pg_k$(encodedAuthority);
    };
  }
  function StringUri$authority$delegate$lambda(this$0) {
    return function () {
      return _get_authorityPart__2eumyj_0(this$0).get_decoded_qrvnm5_k$();
    };
  }
  function StringUri$encodedAuthority$delegate$lambda(this$0) {
    return function () {
      return _get_authorityPart__2eumyj_0(this$0).get_encoded_pbfil7_k$();
    };
  }
  function StringUri$pathPart$delegate$lambda(this$0) {
    return function () {
      var ssi = _get_cachedSsi__l34qja(this$0);
      var tmp;
      if (ssi > -1) {
        var schemeOnly = (ssi + 1 | 0) === this$0.uriString_1.length;
        tmp = schemeOnly ? null : !equals(new Char(charSequenceGet(this$0.uriString_1, ssi + 1 | 0)), new Char(_Char___init__impl__6a9atx(47))) ? null : Companion_getInstance_5().parsePath_ys55ka_k$(this$0.uriString_1, ssi);
      } else {
        tmp = Companion_getInstance_5().parsePath_ys55ka_k$(this$0.uriString_1, ssi);
      }
      var encoded = tmp;
      return Companion_getInstance_4().fromEncoded_su55pg_k$(encoded);
    };
  }
  function StringUri$path$delegate$lambda(this$0) {
    return function () {
      return _get_pathPart__i0uz2r_0(this$0).get_decoded_qrvnm5_k$();
    };
  }
  function StringUri$encodedPath$delegate$lambda(this$0) {
    return function () {
      return _get_pathPart__i0uz2r_0(this$0).get_encoded_pbfil7_k$();
    };
  }
  function StringUri$pathSegments$delegate$lambda(this$0) {
    return function () {
      return _get_pathPart__i0uz2r_0(this$0).get_pathSegments_2e2s6m_k$();
    };
  }
  function StringUri$queryPart$delegate$lambda(this$0) {
    return function () {
      var qsi = indexOf(this$0.uriString_1, _Char___init__impl__6a9atx(63), _get_cachedSsi__l34qja(this$0));
      var tmp;
      if (qsi === get_NOT_FOUND()) {
        tmp = null;
      } else {
        var fsi = _get_cachedFsi__l3d1d5(this$0);
        var tmp_0;
        if (fsi === get_NOT_FOUND()) {
          var tmp$ret$1;
          // Inline function 'kotlin.text.substring' call
          var tmp0_substring = this$0.uriString_1;
          var tmp1_substring = qsi + 1 | 0;
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_substring;
          tmp$ret$1 = tmp$ret$0.substring(tmp1_substring);
          tmp_0 = tmp$ret$1;
        } else if (fsi < qsi) {
          tmp_0 = null;
        } else {
          var tmp$ret$3;
          // Inline function 'kotlin.text.substring' call
          var tmp2_substring = this$0.uriString_1;
          var tmp3_substring = qsi + 1 | 0;
          var tmp$ret$2;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$2 = tmp2_substring;
          tmp$ret$3 = tmp$ret$2.substring(tmp3_substring, fsi);
          tmp_0 = tmp$ret$3;
        }
        tmp = tmp_0;
      }
      var encoded = tmp;
      return Companion_getInstance_3().fromEncoded_su55pg_k$(encoded);
    };
  }
  function StringUri$query$delegate$lambda(this$0) {
    return function () {
      return _get_queryPart__onb3u2_0(this$0).get_decoded_qrvnm5_k$();
    };
  }
  function StringUri$encodedQuery$delegate$lambda(this$0) {
    return function () {
      return _get_queryPart__onb3u2_0(this$0).get_encoded_pbfil7_k$();
    };
  }
  function StringUri$fragmentPart$delegate$lambda(this$0) {
    return function () {
      var fsi = _get_cachedFsi__l3d1d5(this$0);
      var tmp = Companion_getInstance_3();
      var tmp_0;
      if (fsi === get_NOT_FOUND()) {
        tmp_0 = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.text.substring' call
        var tmp0_substring = this$0.uriString_1;
        var tmp1_substring = fsi + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_substring;
        tmp$ret$1 = tmp$ret$0.substring(tmp1_substring);
        tmp_0 = tmp$ret$1;
      }
      return tmp.fromEncoded_su55pg_k$(tmp_0);
    };
  }
  function StringUri$fragment$delegate$lambda(this$0) {
    return function () {
      return _get_fragmentPart__iqsq0o_1(this$0).get_decoded_qrvnm5_k$();
    };
  }
  function StringUri$encodedFragment$delegate$lambda(this$0) {
    return function () {
      return _get_fragmentPart__iqsq0o_1(this$0).get_encoded_pbfil7_k$();
    };
  }
  function StringUri(uriString) {
    Companion_getInstance_5();
    AbstractHierarchicalUri.call(this);
    this.uriString_1 = uriString;
    var tmp = this;
    tmp.cachedSsi$delegate_1 = lazy(StringUri$cachedSsi$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.cachedFsi$delegate_1 = lazy(StringUri$cachedFsi$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.isHierarchical$delegate_1 = lazy(StringUri$isHierarchical$delegate$lambda(this));
    var tmp_2 = this;
    tmp_2.isRelative$delegate_1 = lazy(StringUri$isRelative$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.scheme$delegate_1 = lazy(StringUri$scheme$delegate$lambda(this));
    var tmp_4 = this;
    tmp_4.ssp$delegate_1 = lazy(StringUri$ssp$delegate$lambda(this));
    var tmp_5 = this;
    tmp_5.authorityPart$delegate_1 = lazy(StringUri$authorityPart$delegate$lambda(this));
    var tmp_6 = this;
    tmp_6.authority$delegate_1 = lazy(StringUri$authority$delegate$lambda(this));
    var tmp_7 = this;
    tmp_7.encodedAuthority$delegate_1 = lazy(StringUri$encodedAuthority$delegate$lambda(this));
    var tmp_8 = this;
    tmp_8.pathPart$delegate_1 = lazy(StringUri$pathPart$delegate$lambda(this));
    var tmp_9 = this;
    tmp_9.path$delegate_1 = lazy(StringUri$path$delegate$lambda(this));
    var tmp_10 = this;
    tmp_10.encodedPath$delegate_1 = lazy(StringUri$encodedPath$delegate$lambda(this));
    var tmp_11 = this;
    tmp_11.pathSegments$delegate_1 = lazy(StringUri$pathSegments$delegate$lambda(this));
    var tmp_12 = this;
    tmp_12.queryPart$delegate_1 = lazy(StringUri$queryPart$delegate$lambda(this));
    var tmp_13 = this;
    tmp_13.query$delegate_1 = lazy(StringUri$query$delegate$lambda(this));
    var tmp_14 = this;
    tmp_14.encodedQuery$delegate_1 = lazy(StringUri$encodedQuery$delegate$lambda(this));
    var tmp_15 = this;
    tmp_15.fragmentPart$delegate_1 = lazy(StringUri$fragmentPart$delegate$lambda(this));
    var tmp_16 = this;
    tmp_16.fragment$delegate_1 = lazy(StringUri$fragment$delegate$lambda(this));
    var tmp_17 = this;
    tmp_17.encodedFragment$delegate_1 = lazy(StringUri$encodedFragment$delegate$lambda(this));
  }
  protoOf(StringUri).get_isHierarchical_yyaz18_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = isHierarchical$factory();
    tmp$ret$0 = this.isHierarchical$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(StringUri).get_isRelative_skgyhr_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = isRelative$factory();
    tmp$ret$0 = this.isRelative$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(StringUri).get_scheme_je6tv2_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = scheme$factory();
    tmp$ret$0 = this.scheme$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(StringUri).get_encodedSchemeSpecificPart_us2mxb_k$ = function () {
    return _get_ssp__e6gvb5_1(this).get_encoded_pbfil7_k$();
  };
  protoOf(StringUri).get_schemeSpecificPart_vjrot_k$ = function () {
    return _get_ssp__e6gvb5_1(this).get_decoded_qrvnm5_k$();
  };
  protoOf(StringUri).get_authority_wx29i2_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = authority$factory_0();
    tmp$ret$0 = this.authority$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(StringUri).get_encodedAuthority_lr69gi_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = encodedAuthority$factory_0();
    tmp$ret$0 = this.encodedAuthority$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(StringUri).get_path_wos8ry_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = path$factory_0();
    tmp$ret$0 = this.path$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(StringUri).get_encodedPath_p9zwnq_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = encodedPath$factory_0();
    tmp$ret$0 = this.encodedPath$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(StringUri).get_pathSegments_2e2s6m_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = pathSegments$factory_1();
    tmp$ret$0 = this.pathSegments$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(StringUri).get_query_ixn1y7_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = query$factory_0();
    tmp$ret$0 = this.query$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(StringUri).get_encodedQuery_28s95p_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = encodedQuery$factory_0();
    tmp$ret$0 = this.encodedQuery$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(StringUri).get_fragment_bxnb4p_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = fragment$factory_1();
    tmp$ret$0 = this.fragment$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(StringUri).get_encodedFragment_jm6jcb_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = encodedFragment$factory_1();
    tmp$ret$0 = this.encodedFragment$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(StringUri).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Uri) : false) {
      tmp = this.toString() === toString(other);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StringUri).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  protoOf(StringUri).toString = function () {
    return this.uriString_1;
  };
  protoOf(StringUri).buildUpon_n637i0_k$ = function () {
    var tmp;
    if (this.get_isHierarchical_yyaz18_k$()) {
      tmp = (new Builder_0()).scheme_nlylt1_k$(this.get_scheme_je6tv2_k$()).authority_bpgigs_k$(_get_authorityPart__2eumyj_0(this)).path_1mubi5_k$(_get_pathPart__i0uz2r_0(this)).query_cuj5sv_k$(_get_queryPart__onb3u2_0(this)).fragment_68d40n_k$(_get_fragmentPart__iqsq0o_1(this));
    } else {
      tmp = (new Builder_0()).scheme_nlylt1_k$(this.get_scheme_je6tv2_k$()).opaquePart_yaw0xf_k$(_get_ssp__e6gvb5_1(this)).fragment_68d40n_k$(_get_fragmentPart__iqsq0o_1(this));
    }
    return tmp;
  };
  protoOf(StringUri).compareTo_6thzaj_k$ = function (other) {
    return this.compareTo_v5oyyz_k$((!(other == null) ? isInterface(other, Uri) : false) ? other : THROW_CCE());
  };
  function cachedSsi$factory() {
    return getPropertyCallableRef('cachedSsi', 1, KProperty1, function (receiver) {
      return _get_cachedSsi__l34qja(receiver);
    }, null);
  }
  function cachedFsi$factory() {
    return getPropertyCallableRef('cachedFsi', 1, KProperty1, function (receiver) {
      return _get_cachedFsi__l3d1d5(receiver);
    }, null);
  }
  function isHierarchical$factory() {
    return getPropertyCallableRef('isHierarchical', 1, KProperty1, function (receiver) {
      return receiver.get_isHierarchical_yyaz18_k$();
    }, null);
  }
  function isRelative$factory() {
    return getPropertyCallableRef('isRelative', 1, KProperty1, function (receiver) {
      return receiver.get_isRelative_skgyhr_k$();
    }, null);
  }
  function scheme$factory() {
    return getPropertyCallableRef('scheme', 1, KProperty1, function (receiver) {
      return receiver.get_scheme_je6tv2_k$();
    }, null);
  }
  function ssp$factory_0() {
    return getPropertyCallableRef('ssp', 1, KProperty1, function (receiver) {
      return _get_ssp__e6gvb5_1(receiver);
    }, null);
  }
  function authorityPart$factory() {
    return getPropertyCallableRef('authorityPart', 1, KProperty1, function (receiver) {
      return _get_authorityPart__2eumyj_0(receiver);
    }, null);
  }
  function authority$factory_0() {
    return getPropertyCallableRef('authority', 1, KProperty1, function (receiver) {
      return receiver.get_authority_wx29i2_k$();
    }, null);
  }
  function encodedAuthority$factory_0() {
    return getPropertyCallableRef('encodedAuthority', 1, KProperty1, function (receiver) {
      return receiver.get_encodedAuthority_lr69gi_k$();
    }, null);
  }
  function pathPart$factory() {
    return getPropertyCallableRef('pathPart', 1, KProperty1, function (receiver) {
      return _get_pathPart__i0uz2r_0(receiver);
    }, null);
  }
  function path$factory_0() {
    return getPropertyCallableRef('path', 1, KProperty1, function (receiver) {
      return receiver.get_path_wos8ry_k$();
    }, null);
  }
  function encodedPath$factory_0() {
    return getPropertyCallableRef('encodedPath', 1, KProperty1, function (receiver) {
      return receiver.get_encodedPath_p9zwnq_k$();
    }, null);
  }
  function pathSegments$factory_1() {
    return getPropertyCallableRef('pathSegments', 1, KProperty1, function (receiver) {
      return receiver.get_pathSegments_2e2s6m_k$();
    }, null);
  }
  function queryPart$factory() {
    return getPropertyCallableRef('queryPart', 1, KProperty1, function (receiver) {
      return _get_queryPart__onb3u2_0(receiver);
    }, null);
  }
  function query$factory_0() {
    return getPropertyCallableRef('query', 1, KProperty1, function (receiver) {
      return receiver.get_query_ixn1y7_k$();
    }, null);
  }
  function encodedQuery$factory_0() {
    return getPropertyCallableRef('encodedQuery', 1, KProperty1, function (receiver) {
      return receiver.get_encodedQuery_28s95p_k$();
    }, null);
  }
  function fragmentPart$factory() {
    return getPropertyCallableRef('fragmentPart', 1, KProperty1, function (receiver) {
      return _get_fragmentPart__iqsq0o_1(receiver);
    }, null);
  }
  function fragment$factory_1() {
    return getPropertyCallableRef('fragment', 1, KProperty1, function (receiver) {
      return receiver.get_fragment_bxnb4p_k$();
    }, null);
  }
  function encodedFragment$factory_1() {
    return getPropertyCallableRef('encodedFragment', 1, KProperty1, function (receiver) {
      return receiver.get_encodedFragment_jm6jcb_k$();
    }, null);
  }
  //region block: post-declaration
  protoOf(AbstractHierarchicalUri).get_isOpaque_xnqi0k_k$ = get_isOpaque;
  protoOf(AbstractHierarchicalUri).get_isAbsolute_4pnyd2_k$ = get_isAbsolute;
  protoOf(AbstractHierarchicalUri).getQueryParameterNames_ip5h67_k$ = getQueryParameterNames;
  protoOf(AbstractHierarchicalUri).getQueryParameters_mmwlzv_k$ = getQueryParameters;
  protoOf(AbstractHierarchicalUri).getQueryParameter_reobt6_k$ = getQueryParameter;
  protoOf(AbstractHierarchicalUri).getBooleanQueryParameter_w3u6ug_k$ = getBooleanQueryParameter;
  protoOf(AbstractHierarchicalUri).normalizeScheme_jartaq_k$ = normalizeScheme;
  protoOf(AbstractHierarchicalUri).compareTo_v5oyyz_k$ = compareTo_0;
  protoOf(HierarchicalUri).get_isOpaque_xnqi0k_k$ = get_isOpaque;
  protoOf(HierarchicalUri).get_isAbsolute_4pnyd2_k$ = get_isAbsolute;
  protoOf(HierarchicalUri).getQueryParameterNames_ip5h67_k$ = getQueryParameterNames;
  protoOf(HierarchicalUri).getQueryParameters_mmwlzv_k$ = getQueryParameters;
  protoOf(HierarchicalUri).getQueryParameter_reobt6_k$ = getQueryParameter;
  protoOf(HierarchicalUri).getBooleanQueryParameter_w3u6ug_k$ = getBooleanQueryParameter;
  protoOf(HierarchicalUri).normalizeScheme_jartaq_k$ = normalizeScheme;
  protoOf(HierarchicalUri).compareTo_v5oyyz_k$ = compareTo_0;
  protoOf(OpaqueUri).get_isOpaque_xnqi0k_k$ = get_isOpaque;
  protoOf(OpaqueUri).get_isAbsolute_4pnyd2_k$ = get_isAbsolute;
  protoOf(OpaqueUri).getQueryParameterNames_ip5h67_k$ = getQueryParameterNames;
  protoOf(OpaqueUri).getQueryParameters_mmwlzv_k$ = getQueryParameters;
  protoOf(OpaqueUri).getQueryParameter_reobt6_k$ = getQueryParameter;
  protoOf(OpaqueUri).getBooleanQueryParameter_w3u6ug_k$ = getBooleanQueryParameter;
  protoOf(OpaqueUri).normalizeScheme_jartaq_k$ = normalizeScheme;
  protoOf(OpaqueUri).compareTo_v5oyyz_k$ = compareTo_0;
  protoOf(StringUri).get_isOpaque_xnqi0k_k$ = get_isOpaque;
  protoOf(StringUri).get_isAbsolute_4pnyd2_k$ = get_isAbsolute;
  protoOf(StringUri).getQueryParameterNames_ip5h67_k$ = getQueryParameterNames;
  protoOf(StringUri).getQueryParameters_mmwlzv_k$ = getQueryParameters;
  protoOf(StringUri).getQueryParameter_reobt6_k$ = getQueryParameter;
  protoOf(StringUri).getBooleanQueryParameter_w3u6ug_k$ = getBooleanQueryParameter;
  protoOf(StringUri).normalizeScheme_jartaq_k$ = normalizeScheme;
  protoOf(StringUri).compareTo_v5oyyz_k$ = compareTo_0;
  //endregion
  //region block: init
  NOT_FOUND = -1;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Companion_getInstance_1;
  //endregion
  return _;
}));
