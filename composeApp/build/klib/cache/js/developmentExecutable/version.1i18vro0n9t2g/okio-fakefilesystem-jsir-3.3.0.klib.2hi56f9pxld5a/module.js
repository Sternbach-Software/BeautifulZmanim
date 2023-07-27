(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './okio-parent-okio-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js', './Kotlin-DateTime-library-kotlinx-datetime-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./okio-parent-okio-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./Kotlin-DateTime-library-kotlinx-datetime-js-ir.js'));
  else {
    if (typeof this['okio-parent-okio-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'okio-parent-okio-fakefilesystem-js-ir'. Its dependency 'okio-parent-okio-js-ir' was not found. Please, check whether 'okio-parent-okio-js-ir' is loaded prior to 'okio-parent-okio-fakefilesystem-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'okio-parent-okio-fakefilesystem-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'okio-parent-okio-fakefilesystem-js-ir'.");
    }
    if (typeof this['Kotlin-DateTime-library-kotlinx-datetime-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'okio-parent-okio-fakefilesystem-js-ir'. Its dependency 'Kotlin-DateTime-library-kotlinx-datetime-js-ir' was not found. Please, check whether 'Kotlin-DateTime-library-kotlinx-datetime-js-ir' is loaded prior to 'okio-parent-okio-fakefilesystem-js-ir'.");
    }
    root['okio-parent-okio-fakefilesystem-js-ir'] = factory(typeof this['okio-parent-okio-fakefilesystem-js-ir'] === 'undefined' ? {} : this['okio-parent-okio-fakefilesystem-js-ir'], this['okio-parent-okio-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['Kotlin-DateTime-library-kotlinx-datetime-js-ir']);
  }
}(this, function (_, kotlin_com_squareup_okio_okio, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_datetime) {
  'use strict';
  //region block: imports
  var Companion_getInstance = kotlin_com_squareup_okio_okio.$_$.b;
  var protoOf = kotlin_kotlin.$_$.mf;
  var VOID = kotlin_kotlin.$_$.jm;
  var toLong = kotlin_kotlin.$_$.pf;
  var classMeta = kotlin_kotlin.$_$.zd;
  var setMetadataFor = kotlin_kotlin.$_$.nf;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.b1;
  var Unit_getInstance = kotlin_kotlin.$_$.k6;
  var THROW_ISE = kotlin_kotlin.$_$.tk;
  var FileNotFoundException = kotlin_com_squareup_okio_okio.$_$.j;
  var IOException_init_$Create$ = kotlin_com_squareup_okio_okio.$_$.a;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.b8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.q;
  var sorted = kotlin_kotlin.$_$.pb;
  var toString = kotlin_kotlin.$_$.rf;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i2;
  var IOException = kotlin_com_squareup_okio_okio.$_$.m;
  var ensureNotNull = kotlin_kotlin.$_$.kl;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.b2;
  var equals = kotlin_kotlin.$_$.de;
  var ArrayIndexOutOfBoundsException = kotlin_com_squareup_okio_okio.$_$.d;
  var Long = kotlin_kotlin.$_$.kk;
  var Enum = kotlin_kotlin.$_$.ek;
  var FileHandle = kotlin_com_squareup_okio_okio.$_$.h;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var Buffer = kotlin_com_squareup_okio_okio.$_$.e;
  var FileSystem = kotlin_com_squareup_okio_okio.$_$.k;
  var System_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.n;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var Companion_getInstance_0 = kotlin_com_squareup_okio_okio.$_$.c;
  var addAll = kotlin_kotlin.$_$.r7;
  var sort = kotlin_kotlin.$_$.qb;
  var toSet = kotlin_kotlin.$_$.ic;
  var firstOrNull = kotlin_kotlin.$_$.l9;
  var joinToString = kotlin_kotlin.$_$.da;
  var trimMargin = kotlin_kotlin.$_$.qj;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.q2;
  var contains = kotlin_kotlin.$_$.uh;
  var emptyMap = kotlin_kotlin.$_$.d9;
  var FileMetadata = kotlin_com_squareup_okio_okio.$_$.i;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Element, 'Element', classMeta);
  setMetadataFor(File, 'File', classMeta, Element);
  setMetadataFor(Directory, 'Directory', classMeta, Element);
  setMetadataFor(Symlink, 'Symlink', classMeta, Element);
  setMetadataFor(PathLookupResult, 'PathLookupResult', classMeta);
  setMetadataFor(OpenFile, 'OpenFile', classMeta);
  setMetadataFor(Operation, 'Operation', classMeta, Enum);
  setMetadataFor(FakeFileHandle, 'FakeFileHandle', classMeta, FileHandle);
  setMetadataFor(FakeFileSystem, 'FakeFileSystem', classMeta, FileSystem);
  //endregion
  function File(createdAt) {
    Element.call(this, createdAt);
    this.data_1 = Companion_getInstance().get_EMPTY_i8q41w_k$();
  }
  protoOf(File).set_data_7phjs4_k$ = function (_set____db54di) {
    this.data_1 = _set____db54di;
  };
  protoOf(File).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(File).get_metadata_vs95vc_k$ = function () {
    return FileMetadata_0(true, VOID, VOID, toLong(this.data_1.get_size_woubt6_k$()), this.createdAt_1, this.lastModifiedAt_1, this.lastAccessedAt_1, this.extras_1);
  };
  function Directory(createdAt) {
    Element.call(this, createdAt);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.children_1 = tmp$ret$0;
  }
  protoOf(Directory).get_children_4cwbp4_k$ = function () {
    return this.children_1;
  };
  protoOf(Directory).get_metadata_vs95vc_k$ = function () {
    return FileMetadata_0(VOID, true, VOID, VOID, this.createdAt_1, this.lastModifiedAt_1, this.lastAccessedAt_1, this.extras_1);
  };
  function Symlink(createdAt, target) {
    Element.call(this, createdAt);
    this.target_1 = target;
  }
  protoOf(Symlink).get_target_juba8q_k$ = function () {
    return this.target_1;
  };
  protoOf(Symlink).get_metadata_vs95vc_k$ = function () {
    return FileMetadata_0(VOID, VOID, this.target_1, VOID, this.createdAt_1, this.lastModifiedAt_1, this.lastAccessedAt_1, this.extras_1);
  };
  var Operation_READ_instance;
  var Operation_WRITE_instance;
  function values() {
    return [Operation_READ_getInstance(), Operation_WRITE_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'READ':
        return Operation_READ_getInstance();
      case 'WRITE':
        return Operation_WRITE_getInstance();
      default:
        Operation_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Operation_entriesInitialized;
  function Operation_initEntries() {
    if (Operation_entriesInitialized)
      return Unit_getInstance();
    Operation_entriesInitialized = true;
    Operation_READ_instance = new Operation('READ', 0);
    Operation_WRITE_instance = new Operation('WRITE', 1);
  }
  function _get_openFile__lc5ly3($this) {
    return $this.openFile_1;
  }
  function _get_file__d6iv67($this) {
    return $this.file_1;
  }
  function _set_closed__kdb0et($this, _set____db54di) {
    $this.closed_2 = _set____db54di;
  }
  function _get_closed__iwkfs1($this) {
    return $this.closed_2;
  }
  function _get_roots__bsizts($this) {
    return $this.roots_1;
  }
  function _get_openFiles__m6td98($this) {
    return $this.openFiles_1;
  }
  function canonicalizeInternal($this, path) {
    return $this.workingDirectory_1.resolve_c64hwk_k$(path, true);
  }
  function list($this, dir, throwOnFailure) {
    var canonicalPath = canonicalizeInternal($this, dir);
    var lookupResult = lookupPath$default($this, canonicalPath);
    var tmp0_safe_receiver = lookupResult;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.element_1) == null) {
      if (throwOnFailure)
        throw new FileNotFoundException('no such directory: ' + dir);
      else
        return null;
    }
    var tmp = lookupResult.element_1;
    var tmp1_elvis_lhs = tmp instanceof Directory ? tmp : null;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp_1;
      if (throwOnFailure) {
        throw IOException_init_$Create$('not a directory: ' + dir);
      } else {
        return null;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var element = tmp_0;
    element.access$default_28jz3f_k$($this.clock_1.now_2cba_k$());
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = element.children_1.get_keys_wop4xp_k$();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator = tmp1_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'okio.fakefilesystem.FakeFileSystem.list.<anonymous>' call
      tmp$ret$0 = dir.div_ka9lgp_k$(item);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return sorted(tmp$ret$2);
  }
  function open($this, file, readWrite, mustCreate, mustExist) {
    // Inline function 'kotlin.require' call
    var tmp0_require = !mustCreate ? true : !mustExist;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.fakefilesystem.FakeFileSystem.open.<anonymous>' call
      tmp$ret$0 = 'Cannot require mustCreate and mustExist at the same time.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var canonicalPath = canonicalizeInternal($this, file);
    var lookupResult = lookupPath$default($this, canonicalPath, VOID, VOID, readWrite);
    var now = $this.clock_1.now_2cba_k$();
    var element;
    var operation;
    var tmp;
    var tmp0_safe_receiver = lookupResult;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.element_1) == null) {
      tmp = mustExist;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw IOException_init_$Create$('' + file + " doesn't exist.");
    }
    var tmp_0;
    var tmp1_safe_receiver = lookupResult;
    if (!((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.element_1) == null)) {
      tmp_0 = mustCreate;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      throw IOException_init_$Create$('' + file + ' already exists.');
    }
    if (readWrite) {
      var tmp2_safe_receiver = lookupResult;
      var tmp_1 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.element_1;
      if (tmp_1 instanceof Directory) {
        throw IOException_init_$Create$('destination is a directory: ' + file);
      }
      if (!$this.allowWritesWhileWriting_1) {
        var tmp3_safe_receiver = findOpenFile($this, canonicalPath, Operation_WRITE_getInstance());
        if (tmp3_safe_receiver == null)
          null;
        else {
          var tmp$ret$1;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          throw new IOException('file is already open for writing ' + file, tmp3_safe_receiver.backtrace_1);
        }
      }
      if (!$this.allowReadsWhileWriting_1) {
        var tmp4_safe_receiver = findOpenFile($this, canonicalPath, Operation_READ_getInstance());
        if (tmp4_safe_receiver == null)
          null;
        else {
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          throw new IOException('file is already open for reading ' + file, tmp4_safe_receiver.backtrace_1);
        }
      }
      var tmp5_safe_receiver = lookupResult;
      var tmp6_elvis_lhs = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.parent_1;
      var tmp_2;
      if (tmp6_elvis_lhs == null) {
        throw new FileNotFoundException('parent directory does not exist');
      } else {
        tmp_2 = tmp6_elvis_lhs;
      }
      var parent = tmp_2;
      parent.access_wqc0q1_k$(now, true);
      var existing = lookupResult.element_1;
      var tmp7_safe_receiver = existing;
      var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.createdAt_1;
      element = new File(tmp8_elvis_lhs == null ? now : tmp8_elvis_lhs);
      // Inline function 'kotlin.collections.set' call
      var tmp1_set = parent.children_1;
      var tmp2_set = ensureNotNull(lookupResult.segment_1);
      tmp1_set.put_3mhbri_k$(tmp2_set, element);
      operation = Operation_WRITE_getInstance();
      if (existing instanceof File) {
        element.data_1 = existing.data_1;
      }
    } else {
      var tmp9_safe_receiver = lookupResult;
      var tmp10_elvis_lhs = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.element_1;
      var tmp_3;
      if (tmp10_elvis_lhs == null) {
        throw new FileNotFoundException('no such file: ' + file);
      } else {
        tmp_3 = tmp10_elvis_lhs;
      }
      var existing_0 = tmp_3;
      var tmp11_elvis_lhs = existing_0 instanceof File ? existing_0 : null;
      var tmp_4;
      if (tmp11_elvis_lhs == null) {
        throw IOException_init_$Create$('not a file: ' + file);
      } else {
        tmp_4 = tmp11_elvis_lhs;
      }
      element = tmp_4;
      operation = Operation_READ_getInstance();
      if (!$this.allowReadsWhileWriting_1) {
        var tmp12_safe_receiver = findOpenFile($this, canonicalPath, Operation_WRITE_getInstance());
        if (tmp12_safe_receiver == null)
          null;
        else {
          var tmp$ret$3;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          throw new IOException('file is already open for writing ' + file, tmp12_safe_receiver.backtrace_1);
        }
      }
    }
    element.access_wqc0q1_k$($this.clock_1.now_2cba_k$(), readWrite);
    var openFile = new OpenFile(canonicalPath, operation, Exception_init_$Create$('file opened for ' + operation + ' here'));
    var tmp13_this = $this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp3_plusAssign = tmp13_this.openFiles_1;
    tmp3_plusAssign.add_1j60pz_k$(openFile);
    return new FakeFileHandle($this, readWrite, openFile, element);
  }
  function open$default($this, file, readWrite, mustCreate, mustExist, $super) {
    mustCreate = mustCreate === VOID ? false : mustCreate;
    mustExist = mustExist === VOID ? false : mustExist;
    return open($this, file, readWrite, mustCreate, mustExist);
  }
  function lookupPath($this, canonicalPath, recurseCount, resolveLastSymlink, createRootOnDemand) {
    if (recurseCount > 40) {
      throw IOException_init_$Create$('symlink cycle?');
    }
    var rootPath = ensureNotNull(canonicalPath.get_root_wott0r_k$());
    var root = $this.roots_1.get_1mhr4y_k$(rootPath);
    if (root == null) {
      if (!createRootOnDemand)
        return null;
      root = new Directory($this.clock_1.now_2cba_k$());
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = $this.roots_1;
      var tmp1_set = root;
      tmp0_set.put_3mhbri_k$(rootPath, tmp1_set);
    }
    var parent = null;
    var lastSegment = null;
    var current = root;
    var currentPath = rootPath;
    var segmentsTraversed = 0;
    var segments = canonicalPath.get_segmentsBytes_2hnqta_k$();
    var tmp0_iterator = segments.iterator_jk1svi_k$();
    $l$loop_1: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var segment = tmp0_iterator.next_20eer_k$();
      lastSegment = segment;
      if (!(current instanceof Directory)) {
        throw IOException_init_$Create$('not a directory: ' + currentPath);
      }
      parent = current;
      var tmp1_elvis_lhs = current.children_1.get_1mhr4y_k$(segment);
      var tmp;
      if (tmp1_elvis_lhs == null) {
        break $l$loop_1;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      current = tmp;
      currentPath = currentPath.div_ka9lgp_k$(segment);
      var tmp2 = segmentsTraversed;
      segmentsTraversed = tmp2 + 1 | 0;
      var isLastSegment = segmentsTraversed === segments.get_size_woubt6_k$();
      var followSymlinks = !isLastSegment ? true : resolveLastSymlink;
      var tmp_0;
      if (current instanceof Symlink) {
        tmp_0 = followSymlinks;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        current.access$default_28jz3f_k$($this.clock_1.now_2cba_k$());
        currentPath = ensureNotNull(currentPath.get_parent_hy4reb_k$()).resolve_c64hwk_k$(current.target_1, true);
        var tmp3_elvis_lhs = lookupPath$default($this, currentPath, recurseCount + 1 | 0, VOID, createRootOnDemand);
        var tmp_1;
        if (tmp3_elvis_lhs == null) {
          break $l$loop_1;
        } else {
          tmp_1 = tmp3_elvis_lhs;
        }
        var symlinkLookupResult = tmp_1;
        parent = symlinkLookupResult.parent_1;
        lastSegment = symlinkLookupResult.segment_1;
        var tmp4_elvis_lhs = symlinkLookupResult.element_1;
        var tmp_2;
        if (tmp4_elvis_lhs == null) {
          break $l$loop_1;
        } else {
          tmp_2 = tmp4_elvis_lhs;
        }
        current = tmp_2;
      }
    }
    var tmp5_subject = segmentsTraversed;
    return tmp5_subject === segments.get_size_woubt6_k$() ? new PathLookupResult(parent, lastSegment, current) : tmp5_subject === (segments.get_size_woubt6_k$() - 1 | 0) ? new PathLookupResult(parent, lastSegment, null) : null;
  }
  function lookupPath$default($this, canonicalPath, recurseCount, resolveLastSymlink, createRootOnDemand, $super) {
    recurseCount = recurseCount === VOID ? 0 : recurseCount;
    resolveLastSymlink = resolveLastSymlink === VOID ? true : resolveLastSymlink;
    createRootOnDemand = createRootOnDemand === VOID ? false : createRootOnDemand;
    return lookupPath($this, canonicalPath, recurseCount, resolveLastSymlink, createRootOnDemand);
  }
  function PathLookupResult(parent, segment, element) {
    this.parent_1 = parent;
    this.segment_1 = segment;
    this.element_1 = element;
  }
  protoOf(PathLookupResult).get_parent_hy4reb_k$ = function () {
    return this.parent_1;
  };
  protoOf(PathLookupResult).get_segment_xwnoei_k$ = function () {
    return this.segment_1;
  };
  protoOf(PathLookupResult).get_element_q8gf71_k$ = function () {
    return this.element_1;
  };
  function requireParent(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.parent_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw IOException_init_$Create$('parent directory does not exist');
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function Element(createdAt) {
    this.createdAt_1 = createdAt;
    this.lastModifiedAt_1 = this.createdAt_1;
    this.lastAccessedAt_1 = this.createdAt_1;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.extras_1 = tmp$ret$0;
  }
  protoOf(Element).get_createdAt_ierzpu_k$ = function () {
    return this.createdAt_1;
  };
  protoOf(Element).set_lastModifiedAt_lmr410_k$ = function (_set____db54di) {
    this.lastModifiedAt_1 = _set____db54di;
  };
  protoOf(Element).get_lastModifiedAt_eex2at_k$ = function () {
    return this.lastModifiedAt_1;
  };
  protoOf(Element).set_lastAccessedAt_8i8uy2_k$ = function (_set____db54di) {
    this.lastAccessedAt_1 = _set____db54di;
  };
  protoOf(Element).get_lastAccessedAt_hxtzv9_k$ = function () {
    return this.lastAccessedAt_1;
  };
  protoOf(Element).get_extras_d3bq0c_k$ = function () {
    return this.extras_1;
  };
  protoOf(Element).access_wqc0q1_k$ = function (now, modified) {
    this.lastAccessedAt_1 = now;
    if (modified) {
      this.lastModifiedAt_1 = now;
    }
  };
  protoOf(Element).access$default_28jz3f_k$ = function (now, modified, $super) {
    modified = modified === VOID ? false : modified;
    var tmp;
    if ($super === VOID) {
      this.access_wqc0q1_k$(now, modified);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.access_wqc0q1_k$.call(this, now, modified);
    }
    return tmp;
  };
  function findOpenFile($this, canonicalPath, operation) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_firstOrNull = $this.openFiles_1;
      var tmp0_iterator = tmp0_firstOrNull.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$0;
        // Inline function 'okio.fakefilesystem.FakeFileSystem.findOpenFile.<anonymous>' call
        tmp$ret$0 = element.canonicalPath_1.equals(canonicalPath) ? operation == null ? true : equals(operation, element.operation_1) : false;
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  }
  function findOpenFile$default($this, canonicalPath, operation, $super) {
    operation = operation === VOID ? null : operation;
    return findOpenFile($this, canonicalPath, operation);
  }
  function checkOffsetAndCount($this, size, offset, byteCount) {
    if ((offset.or_s401rn_k$(byteCount).compareTo_n4fqi2_k$(new Long(0, 0)) < 0 ? true : offset.compareTo_n4fqi2_k$(size) > 0) ? true : size.minus_llf5ei_k$(offset).compareTo_n4fqi2_k$(byteCount) < 0) {
      throw new ArrayIndexOutOfBoundsException('size=' + toString(size) + ' offset=' + toString(offset) + ' byteCount=' + toString(byteCount));
    }
  }
  function OpenFile(canonicalPath, operation, backtrace) {
    this.canonicalPath_1 = canonicalPath;
    this.operation_1 = operation;
    this.backtrace_1 = backtrace;
  }
  protoOf(OpenFile).get_canonicalPath_xvwets_k$ = function () {
    return this.canonicalPath_1;
  };
  protoOf(OpenFile).get_operation_z0nqyq_k$ = function () {
    return this.operation_1;
  };
  protoOf(OpenFile).get_backtrace_uwy979_k$ = function () {
    return this.backtrace_1;
  };
  function Operation(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FakeFileHandle($outer, readWrite, openFile, file) {
    this.$this_1 = $outer;
    FileHandle.call(this, readWrite);
    this.openFile_1 = openFile;
    this.file_1 = file;
    this.closed_2 = false;
  }
  protoOf(FakeFileHandle).protectedResize_d7riqt_k$ = function (size) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.closed_2;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.fakefilesystem.FakeFileHandle.protectedResize.<anonymous>' call
      tmp$ret$0 = 'closed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp$ret$1;
    // Inline function 'kotlin.Long.minus' call
    var tmp1_minus = this.file_1.data_1.get_size_woubt6_k$();
    tmp$ret$1 = size.minus_llf5ei_k$(toLong(tmp1_minus));
    var delta = tmp$ret$1;
    if (delta.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
      this.file_1.data_1 = (new Buffer()).write_cdq4rf_k$(this.file_1.data_1).write_3dsjb8_k$(new Int8Array(delta.toInt_1tsl84_k$())).readByteString_nzt46n_k$();
    } else {
      this.file_1.data_1 = this.file_1.data_1.substring_8we4nj_k$(0, size.toInt_1tsl84_k$());
    }
    this.file_1.access_wqc0q1_k$(this.$this_1.clock_1.now_2cba_k$(), true);
  };
  protoOf(FakeFileHandle).protectedSize_pls3bj_k$ = function () {
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.closed_2;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.fakefilesystem.FakeFileHandle.protectedSize.<anonymous>' call
      tmp$ret$0 = 'closed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return toLong(this.file_1.data_1.get_size_woubt6_k$());
  };
  protoOf(FakeFileHandle).protectedRead_7hai39_k$ = function (fileOffset, array, arrayOffset, byteCount) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.closed_2;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.fakefilesystem.FakeFileHandle.protectedRead.<anonymous>' call
      tmp$ret$0 = 'closed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    checkOffsetAndCount(this.$this_1, toLong(array.length), toLong(arrayOffset), toLong(byteCount));
    var fileOffsetInt = fileOffset.toInt_1tsl84_k$();
    var tmp$ret$1;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp1_minOf = this.file_1.data_1.get_size_woubt6_k$() - fileOffsetInt | 0;
    tmp$ret$1 = Math.min(tmp1_minOf, byteCount);
    var toCopy = tmp$ret$1;
    if (toCopy <= 0)
      return -1;
    var inductionVariable = 0;
    if (inductionVariable < toCopy)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i + arrayOffset | 0] = this.file_1.data_1.get_fkrdnv_k$(i + fileOffsetInt | 0);
      }
       while (inductionVariable < toCopy);
    return toCopy;
  };
  protoOf(FakeFileHandle).protectedWrite_nq7nbd_k$ = function (fileOffset, array, arrayOffset, byteCount) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.closed_2;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.fakefilesystem.FakeFileHandle.protectedWrite.<anonymous>' call
      tmp$ret$0 = 'closed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    checkOffsetAndCount(this.$this_1, toLong(array.length), toLong(arrayOffset), toLong(byteCount));
    var buffer = new Buffer();
    var tmp = this.file_1.data_1;
    var tmp$ret$1;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp1_minOf = fileOffset.toInt_1tsl84_k$();
    var tmp2_minOf = this.file_1.data_1.get_size_woubt6_k$();
    tmp$ret$1 = Math.min(tmp1_minOf, tmp2_minOf);
    buffer.write_ljfx17_k$(tmp, 0, tmp$ret$1);
    while (buffer.get_size_woubt6_k$().compareTo_n4fqi2_k$(fileOffset) < 0) {
      buffer.writeByte_fjn38a_k$(0);
    }
    buffer.write_v9wlwc_k$(array, arrayOffset, byteCount);
    if (buffer.get_size_woubt6_k$().compareTo_n4fqi2_k$(toLong(this.file_1.data_1.get_size_woubt6_k$())) < 0) {
      buffer.write_ljfx17_k$(this.file_1.data_1, buffer.get_size_woubt6_k$().toInt_1tsl84_k$(), this.file_1.data_1.get_size_woubt6_k$() - buffer.get_size_woubt6_k$().toInt_1tsl84_k$() | 0);
    }
    this.file_1.data_1 = buffer.snapshot_4plubo_k$();
    this.file_1.access_wqc0q1_k$(this.$this_1.clock_1.now_2cba_k$(), true);
  };
  protoOf(FakeFileHandle).protectedFlush_gofihn_k$ = function () {
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.closed_2;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.fakefilesystem.FakeFileHandle.protectedFlush.<anonymous>' call
      tmp$ret$0 = 'closed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(FakeFileHandle).protectedClose_aig21z_k$ = function () {
    if (this.closed_2)
      return Unit_getInstance();
    this.closed_2 = true;
    this.file_1.access_wqc0q1_k$(this.$this_1.clock_1.now_2cba_k$(), this.get_readWrite_a0tpds_k$());
    var tmp0_this = this.$this_1;
    // Inline function 'kotlin.collections.minusAssign' call
    var tmp0_minusAssign = tmp0_this.openFiles_1;
    var tmp1_minusAssign = this.openFile_1;
    tmp0_minusAssign.remove_8hbkc6_k$(tmp1_minusAssign);
  };
  protoOf(FakeFileHandle).toString = function () {
    return 'FileHandler(' + this.openFile_1.canonicalPath_1 + ')';
  };
  function FakeFileSystem$checkNoOpenFiles$lambda(it) {
    return it.canonicalPath_1.toString();
  }
  function Operation_READ_getInstance() {
    Operation_initEntries();
    return Operation_READ_instance;
  }
  function Operation_WRITE_getInstance() {
    Operation_initEntries();
    return Operation_WRITE_instance;
  }
  function FakeFileSystem(clock) {
    clock = clock === VOID ? System_getInstance() : clock;
    FileSystem.call(this);
    this.clock_1 = clock;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.roots_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$_0();
    tmp_0.openFiles_1 = tmp$ret$1;
    this.workingDirectory_1 = Companion_getInstance_0().toPath$default_pj4dm7_k$('/');
    this.allowMovingOpenFiles_1 = false;
    this.allowDeletingOpenFiles_1 = false;
    this.allowClobberingEmptyDirectories_1 = false;
    this.allowWritesWhileWriting_1 = false;
    this.allowReadsWhileWriting_1 = false;
    this.allowSymlinks_1 = false;
  }
  protoOf(FakeFileSystem).get_clock_ipsdt1_k$ = function () {
    return this.clock_1;
  };
  protoOf(FakeFileSystem).set_workingDirectory_238tly_k$ = function (value) {
    // Inline function 'kotlin.require' call
    var tmp0_require = value.get_isAbsolute_4pnyd2_k$();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.fakefilesystem.FakeFileSystem.<set-workingDirectory>.<anonymous>' call
      tmp$ret$0 = 'expected an absolute path but was ' + value;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.workingDirectory_1 = value;
  };
  protoOf(FakeFileSystem).get_workingDirectory_6kprlx_k$ = function () {
    return this.workingDirectory_1;
  };
  protoOf(FakeFileSystem).set_allowMovingOpenFiles_f8mpbq_k$ = function (_set____db54di) {
    this.allowMovingOpenFiles_1 = _set____db54di;
  };
  protoOf(FakeFileSystem).get_allowMovingOpenFiles_jd2z6p_k$ = function () {
    return this.allowMovingOpenFiles_1;
  };
  protoOf(FakeFileSystem).set_allowDeletingOpenFiles_riza40_k$ = function (_set____db54di) {
    this.allowDeletingOpenFiles_1 = _set____db54di;
  };
  protoOf(FakeFileSystem).get_allowDeletingOpenFiles_4s03i3_k$ = function () {
    return this.allowDeletingOpenFiles_1;
  };
  protoOf(FakeFileSystem).set_allowClobberingEmptyDirectories_gaz2ds_k$ = function (_set____db54di) {
    this.allowClobberingEmptyDirectories_1 = _set____db54di;
  };
  protoOf(FakeFileSystem).get_allowClobberingEmptyDirectories_b8ilxp_k$ = function () {
    return this.allowClobberingEmptyDirectories_1;
  };
  protoOf(FakeFileSystem).set_allowWritesWhileWriting_9co9xa_k$ = function (_set____db54di) {
    this.allowWritesWhileWriting_1 = _set____db54di;
  };
  protoOf(FakeFileSystem).get_allowWritesWhileWriting_g9tem7_k$ = function () {
    return this.allowWritesWhileWriting_1;
  };
  protoOf(FakeFileSystem).set_allowReadsWhileWriting_6vyefh_k$ = function (_set____db54di) {
    this.allowReadsWhileWriting_1 = _set____db54di;
  };
  protoOf(FakeFileSystem).get_allowReadsWhileWriting_1gdu20_k$ = function () {
    return this.allowReadsWhileWriting_1;
  };
  protoOf(FakeFileSystem).set_allowSymlinks_lzttaj_k$ = function (_set____db54di) {
    this.allowSymlinks_1 = _set____db54di;
  };
  protoOf(FakeFileSystem).get_allowSymlinks_ltz90u_k$ = function () {
    return this.allowSymlinks_1;
  };
  protoOf(FakeFileSystem).get_allPaths_2avdre_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var result = tmp$ret$0;
    var tmp0_iterator = this.roots_1.get_keys_wop4xp_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var path = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlin.collections.plusAssign' call
      var tmp0_plusAssign = this.listRecursively$default_jaqovm_k$(path);
      addAll(result, tmp0_plusAssign);
    }
    sort(result);
    return toSet(result);
  };
  protoOf(FakeFileSystem).get_openPaths_xulel7_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = this.openFiles_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator = tmp1_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'okio.fakefilesystem.FakeFileSystem.<get-openPaths>.<anonymous>' call
      tmp$ret$0 = item.canonicalPath_1;
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(FakeFileSystem).checkNoOpenFiles_2sjk0j_k$ = function () {
    var tmp0_elvis_lhs = firstOrNull(this.openFiles_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var firstOpenFile = tmp;
    throw IllegalStateException_init_$Create$_0(trimMargin('\n      |expected 0 open files, but found:\n      |    ' + joinToString(this.openFiles_1, '\n    ', VOID, VOID, VOID, VOID, FakeFileSystem$checkNoOpenFiles$lambda) + '\n      '), firstOpenFile.backtrace_1);
  };
  protoOf(FakeFileSystem).emulateWindows_fg59vl_k$ = function () {
    if (!contains(this.workingDirectory_1.toString(), '\\')) {
      this.set_workingDirectory_238tly_k$(Companion_getInstance_0().toPath$default_pj4dm7_k$('F:\\'));
    }
    this.allowMovingOpenFiles_1 = false;
    this.allowDeletingOpenFiles_1 = false;
    this.allowClobberingEmptyDirectories_1 = true;
    this.allowWritesWhileWriting_1 = true;
    this.allowReadsWhileWriting_1 = true;
  };
  protoOf(FakeFileSystem).emulateUnix_xy3tu2_k$ = function () {
    if (!contains(this.workingDirectory_1.toString(), '/')) {
      this.set_workingDirectory_238tly_k$(Companion_getInstance_0().toPath$default_pj4dm7_k$('/'));
    }
    this.allowMovingOpenFiles_1 = true;
    this.allowDeletingOpenFiles_1 = true;
    this.allowClobberingEmptyDirectories_1 = false;
    this.allowWritesWhileWriting_1 = true;
    this.allowReadsWhileWriting_1 = true;
    this.allowSymlinks_1 = true;
  };
  protoOf(FakeFileSystem).canonicalize_o7gwdq_k$ = function (path) {
    var canonicalPath = canonicalizeInternal(this, path);
    var tmp0_safe_receiver = lookupPath$default(this, canonicalPath);
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.element_1) == null) {
      throw new FileNotFoundException('no such file: ' + path);
    }
    return canonicalPath;
  };
  protoOf(FakeFileSystem).setExtra_o6o7ik_k$ = function (path, type, value) {
    var canonicalPath = canonicalizeInternal(this, path);
    var tmp0_createRootOnDemand = canonicalPath.get_isRoot_ew5h6d_k$();
    var lookupResult = lookupPath$default(this, canonicalPath, VOID, false, tmp0_createRootOnDemand);
    var tmp1_safe_receiver = lookupResult;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.element_1;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      throw new FileNotFoundException('no such file: ' + path);
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var element = tmp;
    if (value == null) {
      element.extras_1.remove_8hbkc0_k$(type);
    } else {
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = element.extras_1;
      tmp0_set.put_3mhbri_k$(type, value);
    }
  };
  protoOf(FakeFileSystem).metadataOrNull_o2zylx_k$ = function (path) {
    var canonicalPath = canonicalizeInternal(this, path);
    var tmp0_createRootOnDemand = canonicalPath.get_isRoot_ew5h6d_k$();
    var lookupResult = lookupPath$default(this, canonicalPath, VOID, false, tmp0_createRootOnDemand);
    var tmp1_safe_receiver = lookupResult;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.element_1;
    return tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_metadata_vs95vc_k$();
  };
  protoOf(FakeFileSystem).list_b0hy9c_k$ = function (dir) {
    return ensureNotNull(list(this, dir, true));
  };
  protoOf(FakeFileSystem).listOrNull_hfnr0a_k$ = function (dir) {
    return list(this, dir, false);
  };
  protoOf(FakeFileSystem).source_i9y171_k$ = function (file) {
    var fileHandle = this.openReadOnly_uide6a_k$(file);
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = fileHandle.source$default_4ve6z5_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'okio.fakefilesystem.FakeFileSystem.source.<anonymous>' call
    fileHandle.close_ymq55z_k$();
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(FakeFileSystem).sink_kx3u5n_k$ = function (file, mustCreate) {
    var fileHandle = open$default(this, file, true, mustCreate);
    fileHandle.resize_xe6twz_k$(new Long(0, 0));
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = fileHandle.sink$default_vnymk7_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'okio.fakefilesystem.FakeFileSystem.sink.<anonymous>' call
    fileHandle.close_ymq55z_k$();
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(FakeFileSystem).appendingSink_wq1hv_k$ = function (file, mustExist) {
    var fileHandle = open$default(this, file, true, VOID, mustExist);
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = fileHandle.appendingSink_2rohx_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'okio.fakefilesystem.FakeFileSystem.appendingSink.<anonymous>' call
    fileHandle.close_ymq55z_k$();
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(FakeFileSystem).openReadOnly_uide6a_k$ = function (file) {
    return open$default(this, file, false);
  };
  protoOf(FakeFileSystem).openReadWrite_3grmsx_k$ = function (file, mustCreate, mustExist) {
    return open(this, file, true, mustCreate, mustExist);
  };
  protoOf(FakeFileSystem).createDirectory_p6p9h6_k$ = function (dir, mustCreate) {
    var canonicalPath = canonicalizeInternal(this, dir);
    var lookupResult = lookupPath$default(this, canonicalPath, VOID, VOID, true);
    if (canonicalPath.get_isRoot_ew5h6d_k$()) {
      return Unit_getInstance();
    }
    var tmp;
    if (mustCreate) {
      var tmp0_safe_receiver = lookupResult;
      tmp = !((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.element_1) == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      throw IOException_init_$Create$('already exists: ' + dir);
    }
    var parentDirectory = requireParent(lookupResult, this);
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = parentDirectory.children_1;
    var tmp1_set = canonicalPath.get_nameBytes_shaewn_k$();
    var tmp2_set = new Directory(this.clock_1.now_2cba_k$());
    tmp0_set.put_3mhbri_k$(tmp1_set, tmp2_set);
  };
  protoOf(FakeFileSystem).atomicMove_4s4vkh_k$ = function (source, target) {
    var canonicalSource = canonicalizeInternal(this, source);
    var canonicalTarget = canonicalizeInternal(this, target);
    var targetLookupResult = lookupPath$default(this, canonicalTarget, VOID, VOID, true);
    var sourceLookupResult = lookupPath$default(this, canonicalSource, VOID, false);
    var tmp0_safe_receiver = targetLookupResult;
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.element_1;
    if (tmp instanceof Directory) {
      throw IOException_init_$Create$('target is a directory: ' + target);
    }
    var targetParent = requireParent(targetLookupResult, this);
    if (!this.allowMovingOpenFiles_1) {
      var tmp1_safe_receiver = findOpenFile$default(this, canonicalSource);
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        throw new IOException('source is open ' + source, tmp1_safe_receiver.backtrace_1);
      }
      var tmp2_safe_receiver = findOpenFile$default(this, canonicalTarget);
      if (tmp2_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        throw new IOException('target is open ' + target, tmp2_safe_receiver.backtrace_1);
      }
    }
    if (!this.allowClobberingEmptyDirectories_1) {
      var tmp_0;
      var tmp3_safe_receiver = sourceLookupResult;
      var tmp_1 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.element_1;
      if (tmp_1 instanceof Directory) {
        var tmp4_safe_receiver = targetLookupResult;
        var tmp_2 = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.element_1;
        tmp_0 = tmp_2 instanceof File;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        throw IOException_init_$Create$('source is a directory and target is a file');
      }
    }
    var sourceParent = requireParent(sourceLookupResult, this);
    var tmp5_elvis_lhs = sourceParent.children_1.remove_8hbkc0_k$(canonicalSource.get_nameBytes_shaewn_k$());
    var tmp_3;
    if (tmp5_elvis_lhs == null) {
      throw new FileNotFoundException("source doesn't exist: " + source);
    } else {
      tmp_3 = tmp5_elvis_lhs;
    }
    var removed = tmp_3;
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = targetParent.children_1;
    var tmp1_set = canonicalTarget.get_nameBytes_shaewn_k$();
    tmp0_set.put_3mhbri_k$(tmp1_set, removed);
  };
  protoOf(FakeFileSystem).delete_vgm02c_k$ = function (path, mustExist) {
    var canonicalPath = canonicalizeInternal(this, path);
    var lookupResult = lookupPath$default(this, canonicalPath, VOID, false, true);
    var tmp0_safe_receiver = lookupResult;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.element_1) == null) {
      if (mustExist) {
        throw new FileNotFoundException('no such file: ' + path);
      } else {
        return Unit_getInstance();
      }
    }
    var tmp;
    var tmp_0 = lookupResult.element_1;
    if (tmp_0 instanceof Directory) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp0_isNotEmpty = lookupResult.element_1.children_1;
      tmp$ret$0 = !tmp0_isNotEmpty.isEmpty_y1axqb_k$();
      tmp = tmp$ret$0;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw IOException_init_$Create$('non-empty directory');
    }
    if (!this.allowDeletingOpenFiles_1) {
      var tmp1_safe_receiver = findOpenFile$default(this, canonicalPath);
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        throw new IOException('file is open ' + path, tmp1_safe_receiver.backtrace_1);
      }
    }
    var directory = requireParent(lookupResult, this);
    directory.children_1.remove_8hbkc0_k$(canonicalPath.get_nameBytes_shaewn_k$());
  };
  protoOf(FakeFileSystem).createSymlink_au6v20_k$ = function (source, target) {
    var canonicalSource = canonicalizeInternal(this, source);
    var existingLookupResult = lookupPath$default(this, canonicalSource, VOID, VOID, true);
    var tmp0_safe_receiver = existingLookupResult;
    if (!((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.element_1) == null)) {
      throw IOException_init_$Create$('already exists: ' + source);
    }
    var parent = requireParent(existingLookupResult, this);
    if (!this.allowSymlinks_1) {
      throw IOException_init_$Create$('symlinks are not supported');
    }
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = parent.children_1;
    var tmp1_set = canonicalSource.get_nameBytes_shaewn_k$();
    var tmp2_set = new Symlink(this.clock_1.now_2cba_k$(), target);
    tmp0_set.put_3mhbri_k$(tmp1_set, tmp2_set);
  };
  protoOf(FakeFileSystem).toString = function () {
    return 'FakeFileSystem';
  };
  function FileMetadata_0(isRegularFile, isDirectory, symlinkTarget, size, createdAt, lastModifiedAt, lastAccessedAt, extras) {
    isRegularFile = isRegularFile === VOID ? false : isRegularFile;
    isDirectory = isDirectory === VOID ? false : isDirectory;
    symlinkTarget = symlinkTarget === VOID ? null : symlinkTarget;
    size = size === VOID ? null : size;
    createdAt = createdAt === VOID ? null : createdAt;
    lastModifiedAt = lastModifiedAt === VOID ? null : lastModifiedAt;
    lastAccessedAt = lastAccessedAt === VOID ? null : lastAccessedAt;
    var tmp;
    if (extras === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.mapOf' call
      tmp$ret$0 = emptyMap();
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = extras;
    }
    extras = tmp;
    var tmp0_safe_receiver = createdAt;
    var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toEpochMilliseconds_82cfls_k$();
    var tmp1_safe_receiver = lastModifiedAt;
    var tmp_1 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toEpochMilliseconds_82cfls_k$();
    var tmp2_safe_receiver = lastAccessedAt;
    return new FileMetadata(isRegularFile, isDirectory, symlinkTarget, size, tmp_0, tmp_1, tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toEpochMilliseconds_82cfls_k$(), extras);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = FakeFileSystem;
  //endregion
  return _;
}));
