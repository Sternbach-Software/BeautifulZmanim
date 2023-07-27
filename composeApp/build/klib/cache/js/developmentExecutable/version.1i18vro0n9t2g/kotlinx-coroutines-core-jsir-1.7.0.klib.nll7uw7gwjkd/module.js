(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    root['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] = factory(typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined' ? {} : this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.mf;
  var THROW_CCE = kotlin_kotlin.$_$.sk;
  var isObject = kotlin_kotlin.$_$.ze;
  var Unit_getInstance = kotlin_kotlin.$_$.k6;
  var plus = kotlin_kotlin.$_$.hd;
  var get = kotlin_kotlin.$_$.dd;
  var fold = kotlin_kotlin.$_$.cd;
  var minusKey = kotlin_kotlin.$_$.ed;
  var Continuation = kotlin_kotlin.$_$.bd;
  var classMeta = kotlin_kotlin.$_$.zd;
  var VOID = kotlin_kotlin.$_$.jm;
  var setMetadataFor = kotlin_kotlin.$_$.nf;
  var Annotation = kotlin_kotlin.$_$.xj;
  var CoroutineImpl = kotlin_kotlin.$_$.id;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.sc;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.r5;
  var Key_getInstance = kotlin_kotlin.$_$.q5;
  var equals = kotlin_kotlin.$_$.de;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.uc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var intercepted = kotlin_kotlin.$_$.vc;
  var isInterface = kotlin_kotlin.$_$.xe;
  var interfaceMeta = kotlin_kotlin.$_$.oe;
  var toString = kotlin_kotlin.$_$.rf;
  var toString_0 = kotlin_kotlin.$_$.fm;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var objectMeta = kotlin_kotlin.$_$.lf;
  var hashCode = kotlin_kotlin.$_$.me;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.f4;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.i4;
  var Companion_getInstance = kotlin_kotlin.$_$.f6;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.e4;
  var createFailure = kotlin_kotlin.$_$.jl;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.xc;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.wc;
  var get_0 = kotlin_kotlin.$_$.yc;
  var minusKey_0 = kotlin_kotlin.$_$.zc;
  var ContinuationInterceptor = kotlin_kotlin.$_$.ad;
  var Key = kotlin_kotlin.$_$.gd;
  var Element = kotlin_kotlin.$_$.fd;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.e3;
  var getStringHashCode = kotlin_kotlin.$_$.le;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.k1;
  var THROW_ISE = kotlin_kotlin.$_$.tk;
  var Enum = kotlin_kotlin.$_$.ek;
  var startCoroutine = kotlin_kotlin.$_$.nd;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.tl;
  var startCoroutine_0 = kotlin_kotlin.$_$.od;
  var Long = kotlin_kotlin.$_$.kk;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.e6;
  var _Duration___get_inWholeMilliseconds__impl__msfiry = kotlin_kotlin.$_$.k3;
  var coerceAtLeast = kotlin_kotlin.$_$.eg;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.c6;
  var Duration__compareTo_impl_pchp0f = kotlin_kotlin.$_$.i3;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.p;
  var RuntimeException = kotlin_kotlin.$_$.rk;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.d3;
  var captureStack = kotlin_kotlin.$_$.td;
  var Error_0 = kotlin_kotlin.$_$.fk;
  var Error_init_$Init$ = kotlin_kotlin.$_$.w1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.o1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.am;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.q;
  var CancellationException = kotlin_kotlin.$_$.rc;
  var ArrayList = kotlin_kotlin.$_$.t6;
  var SequenceScope = kotlin_kotlin.$_$.fh;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.q2;
  var sequence = kotlin_kotlin.$_$.mh;
  var anyToString = kotlin_kotlin.$_$.qd;
  var SuspendFunction1 = kotlin_kotlin.$_$.kd;
  var UnsupportedOperationException = kotlin_kotlin.$_$.el;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.h3;
  var emptySequence = kotlin_kotlin.$_$.hh;
  var objectCreate = kotlin_kotlin.$_$.kf;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.h1;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.i;
  var toDuration = kotlin_kotlin.$_$.vj;
  var returnIfSuspended = kotlin_kotlin.$_$.o;
  var atomicfu$AtomicRefArray$ofNulls = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.kl;
  var toLong = kotlin_kotlin.$_$.pf;
  var addSuppressed = kotlin_kotlin.$_$.fl;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i2;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var listOf = kotlin_kotlin.$_$.qa;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.u2;
  var compareTo = kotlin_kotlin.$_$.ae;
  var last = kotlin_kotlin.$_$.pi;
  var Char = kotlin_kotlin.$_$.ak;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.v3;
  var IllegalStateException = kotlin_kotlin.$_$.ik;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.n2;
  var NoSuchElementException = kotlin_kotlin.$_$.lk;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.v2;
  var getKClass = kotlin_kotlin.$_$.e;
  var Unit = kotlin_kotlin.$_$.dl;
  var arrayIterator = kotlin_kotlin.$_$.rd;
  var fillArrayVal = kotlin_kotlin.$_$.fe;
  var copyOf = kotlin_kotlin.$_$.x8;
  var emptyList = kotlin_kotlin.$_$.c9;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.w5;
  var listOf_0 = kotlin_kotlin.$_$.pa;
  var joinToString = kotlin_kotlin.$_$.da;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.w2;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.zl;
  var Exception = kotlin_kotlin.$_$.gk;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.y1;
  var toLongOrNull = kotlin_kotlin.$_$.lj;
  var createCoroutineUnintercepted_0 = kotlin_kotlin.$_$.tc;
  var isSuspendFunction = kotlin_kotlin.$_$.bf;
  var List = kotlin_kotlin.$_$.d7;
  var Collection = kotlin_kotlin.$_$.u6;
  var plus_0 = kotlin_kotlin.$_$.za;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$_$.j1;
  var removeFirstOrNull = kotlin_kotlin.$_$.cb;
  var MutableList = kotlin_kotlin.$_$.j7;
  var coerceIn = kotlin_kotlin.$_$.pg;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.x;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.b3;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.e1;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.g3;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.cancel_4b7aim_k$(cause);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.cancel_4b7aim_k$.call(this, cause);
    }
    return tmp;
  }
  function cancel() {
    return this.cancel_4b7aim_k$(null);
  }
  function cancel$default_0(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.cancel_as6ug7_k$(cause) : $super.cancel_as6ug7_k$.call(this, cause);
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $super) {
    onCancelling = onCancelling === VOID ? false : onCancelling;
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    return $super === VOID ? this.invokeOnCompletion_npwpyn_k$(onCancelling, invokeImmediately, handler) : $super.invokeOnCompletion_npwpyn_k$.call(this, onCancelling, invokeImmediately, handler);
  }
  function plus_1(other) {
    return other;
  }
  setMetadataFor(Job, 'Job', interfaceMeta, VOID, [Element], VOID, VOID, [0]);
  setMetadataFor(ChildJob, 'ChildJob', interfaceMeta, VOID, [Job], VOID, VOID, [0]);
  setMetadataFor(ParentJob, 'ParentJob', interfaceMeta, VOID, [Job], VOID, VOID, [0]);
  setMetadataFor(JobSupport, 'JobSupport', classMeta, VOID, [Job, ChildJob, ParentJob], VOID, VOID, [0]);
  setMetadataFor(CoroutineScope, 'CoroutineScope', interfaceMeta);
  setMetadataFor(AbstractCoroutine, 'AbstractCoroutine', classMeta, JobSupport, [JobSupport, Job, Continuation, CoroutineScope], VOID, VOID, [0]);
  setMetadataFor(InternalCoroutinesApi, 'InternalCoroutinesApi', classMeta, VOID, [Annotation]);
  setMetadataFor(ExperimentalCoroutinesApi, 'ExperimentalCoroutinesApi', classMeta, VOID, [Annotation]);
  setMetadataFor(DelicateCoroutinesApi, 'DelicateCoroutinesApi', classMeta, VOID, [Annotation]);
  setMetadataFor(FlowPreview, 'FlowPreview', classMeta, VOID, [Annotation]);
  setMetadataFor($joinAllCOROUTINE$0, '$joinAllCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(StandaloneCoroutine, 'StandaloneCoroutine', classMeta, AbstractCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', classMeta, StandaloneCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(CoroutineStackFrame, 'CoroutineStackFrame', interfaceMeta);
  setMetadataFor(ScopeCoroutine, 'ScopeCoroutine', classMeta, AbstractCoroutine, [AbstractCoroutine, CoroutineStackFrame], VOID, VOID, [0]);
  setMetadataFor(DispatchedCoroutine, 'DispatchedCoroutine', classMeta, ScopeCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor($awaitCOROUTINE$1, '$awaitCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(Deferred, 'Deferred', interfaceMeta, VOID, [Job], VOID, VOID, [0]);
  setMetadataFor(DeferredCoroutine, 'DeferredCoroutine', classMeta, AbstractCoroutine, [AbstractCoroutine, Deferred], VOID, VOID, [0]);
  setMetadataFor(LazyDeferredCoroutine, 'LazyDeferredCoroutine', classMeta, DeferredCoroutine, VOID, VOID, VOID, [0]);
  function tryResume$default(value, idempotent, $super) {
    idempotent = idempotent === VOID ? null : idempotent;
    return $super === VOID ? this.tryResume_10oxem_k$(value, idempotent) : $super.tryResume_10oxem_k$.call(this, value, idempotent);
  }
  function cancel$default_1(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.cancel_as6ug7_k$(cause) : $super.cancel_as6ug7_k$.call(this, cause);
  }
  setMetadataFor(CancellableContinuation, 'CancellableContinuation', interfaceMeta, VOID, [Continuation]);
  setMetadataFor(CancelHandlerBase, 'CancelHandlerBase', classMeta);
  setMetadataFor(NotCompleted, 'NotCompleted', interfaceMeta);
  setMetadataFor(CancelHandler, 'CancelHandler', classMeta, CancelHandlerBase, [CancelHandlerBase, NotCompleted]);
  setMetadataFor(DisposeOnCancel, 'DisposeOnCancel', classMeta, CancelHandler);
  setMetadataFor(Runnable, 'Runnable', interfaceMeta);
  setMetadataFor(SchedulerTask, 'SchedulerTask', classMeta, VOID, [Runnable]);
  setMetadataFor(DispatchedTask, 'DispatchedTask', classMeta, SchedulerTask);
  setMetadataFor(Waiter, 'Waiter', interfaceMeta);
  setMetadataFor(CancellableContinuationImpl, 'CancellableContinuationImpl', classMeta, DispatchedTask, [DispatchedTask, CancellableContinuation, CoroutineStackFrame, Waiter]);
  setMetadataFor(BeforeResumeCancelHandler, 'BeforeResumeCancelHandler', classMeta, CancelHandler);
  setMetadataFor(Active, 'Active', objectMeta, VOID, [NotCompleted]);
  setMetadataFor(CompletedContinuation, 'CompletedContinuation', classMeta);
  setMetadataFor(InvokeOnCancel, 'InvokeOnCancel', classMeta, CancelHandler);
  setMetadataFor(CompletableDeferred, 'CompletableDeferred', interfaceMeta, VOID, [Deferred], VOID, VOID, [0]);
  setMetadataFor($awaitCOROUTINE$2, '$awaitCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(CompletableDeferredImpl, 'CompletableDeferredImpl', classMeta, JobSupport, [JobSupport, CompletableDeferred], VOID, VOID, [0]);
  setMetadataFor(CompletableJob, 'CompletableJob', interfaceMeta, VOID, [Job], VOID, VOID, [0]);
  setMetadataFor(CompletedExceptionally, 'CompletedExceptionally', classMeta);
  setMetadataFor(CancelledContinuation, 'CancelledContinuation', classMeta, CompletedExceptionally);
  setMetadataFor(CompletedWithCancellation, 'CompletedWithCancellation', classMeta);
  setMetadataFor(Key_0, 'Key', objectMeta, AbstractCoroutineContextKey);
  setMetadataFor(CoroutineDispatcher, 'CoroutineDispatcher', classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor]);
  setMetadataFor(Key_1, 'Key', objectMeta, VOID, [Key]);
  setMetadataFor(CoroutineExceptionHandler, 'CoroutineExceptionHandler', interfaceMeta, VOID, [Element]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, CoroutineExceptionHandler]);
  setMetadataFor(Key_2, 'Key', objectMeta, VOID, [Key]);
  setMetadataFor(CoroutineName, 'CoroutineName', classMeta, AbstractCoroutineContextElement);
  setMetadataFor(GlobalScope, 'GlobalScope', objectMeta, VOID, [CoroutineScope]);
  setMetadataFor(CoroutineStart, 'CoroutineStart', classMeta, Enum);
  setMetadataFor(CopyableThrowable, 'CopyableThrowable', interfaceMeta);
  function delay(time, $completion) {
    if (time.compareTo_n4fqi2_k$(new Long(0, 0)) <= 0)
      return Unit_getInstance();
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.initCancellability_sh6jkn_k$();
    // Inline function 'kotlinx.coroutines.Delay.delay.<anonymous>' call
    this.scheduleResumeAfterDelay_5x4w1l_k$(time, cancellable);
    tmp$ret$0 = cancellable.getResult_clfhg3_k$();
    var tmp0 = tmp$ret$0;
    return tmp0;
  }
  function invokeOnTimeout(timeMillis, block, context) {
    return get_DefaultDelay().invokeOnTimeout_sx2bqq_k$(timeMillis, block, context);
  }
  setMetadataFor(Delay, 'Delay', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(DelayWithTimeoutDiagnostics, 'DelayWithTimeoutDiagnostics', interfaceMeta, VOID, [Delay], VOID, VOID, [1]);
  setMetadataFor(EventLoop, 'EventLoop', classMeta, CoroutineDispatcher);
  setMetadataFor(ThreadLocalEventLoop, 'ThreadLocalEventLoop', objectMeta);
  setMetadataFor(CompletionHandlerException, 'CompletionHandlerException', classMeta, RuntimeException);
  setMetadataFor(CoroutinesInternalError, 'CoroutinesInternalError', classMeta, Error_0);
  setMetadataFor(DisposableHandle, 'DisposableHandle', interfaceMeta);
  setMetadataFor(Key_3, 'Key', objectMeta, VOID, [Key]);
  setMetadataFor(ChildHandle, 'ChildHandle', interfaceMeta, VOID, [DisposableHandle]);
  setMetadataFor(NonDisposableHandle, 'NonDisposableHandle', objectMeta, VOID, [DisposableHandle, ChildHandle]);
  setMetadataFor(Incomplete, 'Incomplete', interfaceMeta);
  setMetadataFor(Empty, 'Empty', classMeta, VOID, [Incomplete]);
  setMetadataFor(LinkedListNode, 'LinkedListNode', classMeta, VOID, [DisposableHandle]);
  setMetadataFor(LinkedListHead, 'LinkedListHead', classMeta, LinkedListNode);
  setMetadataFor(NodeList, 'NodeList', classMeta, LinkedListHead, [LinkedListHead, Incomplete]);
  setMetadataFor(CompletionHandlerBase, 'CompletionHandlerBase', classMeta, LinkedListNode);
  setMetadataFor(JobNode, 'JobNode', classMeta, CompletionHandlerBase, [CompletionHandlerBase, DisposableHandle, Incomplete]);
  setMetadataFor(SelectOnJoinCompletionHandler, 'SelectOnJoinCompletionHandler', classMeta, JobNode);
  setMetadataFor(Finishing, 'Finishing', classMeta, VOID, [Incomplete]);
  setMetadataFor(ChildCompletion, 'ChildCompletion', classMeta, JobNode);
  setMetadataFor(AwaitContinuation, 'AwaitContinuation', classMeta, CancellableContinuationImpl);
  setMetadataFor(SelectOnAwaitCompletionHandler, 'SelectOnAwaitCompletionHandler', classMeta, JobNode);
  setMetadataFor(JobSupport$_get_children_$slambda_k839f8, 'JobSupport$<get-children>$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(JobCancellingNode, 'JobCancellingNode', classMeta, JobNode);
  setMetadataFor(InactiveNodeList, 'InactiveNodeList', classMeta, VOID, [Incomplete]);
  setMetadataFor(ChildHandleNode, 'ChildHandleNode', classMeta, JobCancellingNode, [JobCancellingNode, ChildHandle]);
  setMetadataFor(InvokeOnCancelling, 'InvokeOnCancelling', classMeta, JobCancellingNode);
  setMetadataFor(InvokeOnCompletion, 'InvokeOnCompletion', classMeta, JobNode);
  setMetadataFor(ResumeOnCompletion, 'ResumeOnCompletion', classMeta, JobNode);
  setMetadataFor(ResumeAwaitOnCompletion, 'ResumeAwaitOnCompletion', classMeta, JobNode);
  setMetadataFor(IncompleteStateBox, 'IncompleteStateBox', classMeta);
  setMetadataFor(ChildContinuation, 'ChildContinuation', classMeta, JobCancellingNode);
  setMetadataFor(JobImpl, 'JobImpl', classMeta, JobSupport, [JobSupport, CompletableJob], VOID, VOID, [0]);
  setMetadataFor(DisposeOnCompletion, 'DisposeOnCompletion', classMeta, JobNode);
  setMetadataFor(MainCoroutineDispatcher, 'MainCoroutineDispatcher', classMeta, CoroutineDispatcher);
  setMetadataFor(NonCancellable, 'NonCancellable', objectMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, Job], VOID, VOID, [0]);
  setMetadataFor(SupervisorJobImpl, 'SupervisorJobImpl', classMeta, JobImpl, VOID, VOID, VOID, [0]);
  setMetadataFor(TimeoutCancellationException, 'TimeoutCancellationException', classMeta, CancellationException, [CancellationException, CopyableThrowable]);
  setMetadataFor(TimeoutCoroutine, 'TimeoutCoroutine', classMeta, ScopeCoroutine, [ScopeCoroutine, Runnable], VOID, VOID, [0]);
  setMetadataFor($withTimeoutOrNullCOROUTINE$3, '$withTimeoutOrNullCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(Unconfined, 'Unconfined', objectMeta, CoroutineDispatcher);
  setMetadataFor(Key_4, 'Key', objectMeta, VOID, [Key]);
  setMetadataFor(YieldContext, 'YieldContext', classMeta, AbstractCoroutineContextElement);
  setMetadataFor(BufferOverflow, 'BufferOverflow', classMeta, Enum);
  setMetadataFor(ConcurrentLinkedListNode, 'ConcurrentLinkedListNode', classMeta);
  setMetadataFor(Segment, 'Segment', classMeta, ConcurrentLinkedListNode, [ConcurrentLinkedListNode, NotCompleted]);
  setMetadataFor(ChannelSegment, 'ChannelSegment', classMeta, Segment);
  setMetadataFor($hasNextCOROUTINE$7, '$hasNextCOROUTINE$7', classMeta, CoroutineImpl);
  setMetadataFor(SenderWithOnUndeliveredElementCancellationHandler, 'SenderWithOnUndeliveredElementCancellationHandler', classMeta, BeforeResumeCancelHandler, [BeforeResumeCancelHandler, DisposableHandle]);
  setMetadataFor(SendBroadcast, 'SendBroadcast', classMeta, VOID, [Waiter]);
  function next0($completion) {
    var tmp = new $next0COROUTINE$8(this, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  setMetadataFor(ChannelIterator, 'ChannelIterator', interfaceMeta, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(BufferedChannelIterator, 'BufferedChannelIterator', classMeta, BeforeResumeCancelHandler, [ChannelIterator, BeforeResumeCancelHandler, Waiter], VOID, VOID, [0, 3]);
  setMetadataFor($sendCOROUTINE$4, '$sendCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor($receiveCOROUTINE$5, '$receiveCOROUTINE$5', classMeta, CoroutineImpl);
  setMetadataFor($receiveCatchingCOROUTINE$6, '$receiveCatchingCOROUTINE$6', classMeta, CoroutineImpl);
  function close$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.close_9zy44b_k$(cause) : $super.close_9zy44b_k$.call(this, cause);
  }
  function offer(element) {
    var result = this.trySend_3hclq4_k$(element);
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result))
      return true;
    var tmp0_elvis_lhs = ChannelResult__exceptionOrNull_impl_16ei30(result);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    throw recoverStackTrace_0(tmp);
  }
  setMetadataFor(SendChannel, 'SendChannel', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  function cancel$default_2(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.cancel_4b7aim_k$(cause);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.cancel_4b7aim_k$.call(this, cause);
    }
    return tmp;
  }
  function cancel_0() {
    return this.cancel_4b7aim_k$(null);
  }
  function cancel$default_3(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.cancel_as6ug7_k$(cause) : $super.cancel_as6ug7_k$.call(this, cause);
  }
  function poll() {
    var result = this.tryReceive_5r5v2p_k$();
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result))
      return ChannelResult__getOrThrow_impl_od1axs(result);
    var tmp0_elvis_lhs = ChannelResult__exceptionOrNull_impl_16ei30(result);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    throw recoverStackTrace_0(tmp);
  }
  function receiveOrNull($completion) {
    var tmp = new $receiveOrNullCOROUTINE$9(this, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function get_onReceiveOrNull() {
    return (this instanceof BufferedChannel ? this : THROW_CCE()).get_onReceiveOrNull_5u62it_k$();
  }
  setMetadataFor(ReceiveChannel, 'ReceiveChannel', interfaceMeta, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(Channel, 'Channel', interfaceMeta, VOID, [SendChannel, ReceiveChannel], VOID, VOID, [1, 0]);
  setMetadataFor(BufferedChannel, 'BufferedChannel', classMeta, VOID, [Channel], VOID, VOID, [1, 4, 0, 3]);
  setMetadataFor(WaiterEB, 'WaiterEB', classMeta);
  setMetadataFor(ReceiveCatching, 'ReceiveCatching', classMeta, VOID, [Waiter]);
  setMetadataFor(Factory, 'Factory', objectMeta);
  setMetadataFor(Failed, 'Failed', classMeta);
  setMetadataFor(Closed, 'Closed', classMeta, Failed);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(ChannelResult, 'ChannelResult', classMeta);
  setMetadataFor($next0COROUTINE$8, '$next0COROUTINE$8', classMeta, CoroutineImpl);
  setMetadataFor(ClosedSendChannelException, 'ClosedSendChannelException', classMeta, IllegalStateException);
  setMetadataFor(ClosedReceiveChannelException, 'ClosedReceiveChannelException', classMeta, NoSuchElementException);
  setMetadataFor($receiveOrNullCOROUTINE$9, '$receiveOrNullCOROUTINE$9', classMeta, CoroutineImpl);
  setMetadataFor(ChannelCoroutine, 'ChannelCoroutine', classMeta, AbstractCoroutine, [AbstractCoroutine, Channel], VOID, VOID, [0, 1]);
  setMetadataFor($consumeEachCOROUTINE$10, '$consumeEachCOROUTINE$10', classMeta, CoroutineImpl);
  setMetadataFor(ConflatedBufferedChannel, 'ConflatedBufferedChannel', classMeta, BufferedChannel, VOID, VOID, VOID, [1, 0]);
  setMetadataFor(ProducerScope, 'ProducerScope', interfaceMeta, VOID, [CoroutineScope, SendChannel], VOID, VOID, [1]);
  setMetadataFor(ProducerCoroutine, 'ProducerCoroutine', classMeta, ChannelCoroutine, [ChannelCoroutine, ProducerScope], VOID, VOID, [0, 1]);
  setMetadataFor(Flow, 'Flow', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(CancellableFlow, 'CancellableFlow', interfaceMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(AbstractFlow, 'AbstractFlow', classMeta, VOID, [Flow, CancellableFlow], VOID, VOID, [1]);
  setMetadataFor(SafeFlow, 'SafeFlow', classMeta, AbstractFlow, VOID, VOID, VOID, [1]);
  setMetadataFor(EmptyFlow, 'EmptyFlow', objectMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor($emitAllImplCOROUTINE$11, '$emitAllImplCOROUTINE$11', classMeta, CoroutineImpl);
  setMetadataFor($collectCOROUTINE$0, '$collectCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(FlowCollector, 'FlowCollector', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(SharedFlow, 'SharedFlow', interfaceMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(MutableSharedFlow, 'MutableSharedFlow', interfaceMeta, VOID, [SharedFlow, FlowCollector], VOID, VOID, [1]);
  setMetadataFor(Emitter, 'Emitter', classMeta, VOID, [DisposableHandle]);
  setMetadataFor($collectCOROUTINE$12, '$collectCOROUTINE$12', classMeta, CoroutineImpl);
  setMetadataFor(AbstractSharedFlow, 'AbstractSharedFlow', classMeta);
  function fuse$default(context, capacity, onBufferOverflow, $super) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? Factory_getInstance().get_OPTIONAL_CHANNEL_c6wrw3_k$() : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    return $super === VOID ? this.fuse_pocnsz_k$(context, capacity, onBufferOverflow) : $super.fuse_pocnsz_k$.call(this, context, capacity, onBufferOverflow);
  }
  setMetadataFor(FusibleFlow, 'FusibleFlow', interfaceMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(SharedFlowImpl, 'SharedFlowImpl', classMeta, AbstractSharedFlow, [AbstractSharedFlow, MutableSharedFlow, CancellableFlow, FusibleFlow], VOID, VOID, [1]);
  setMetadataFor(AbstractSharedFlowSlot, 'AbstractSharedFlowSlot', classMeta);
  setMetadataFor(SharedFlowSlot, 'SharedFlowSlot', classMeta, AbstractSharedFlowSlot);
  setMetadataFor(StateFlow, 'StateFlow', interfaceMeta, VOID, [SharedFlow], VOID, VOID, [1]);
  setMetadataFor(MutableStateFlow, 'MutableStateFlow', interfaceMeta, VOID, [StateFlow, MutableSharedFlow], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$13, '$collectCOROUTINE$13', classMeta, CoroutineImpl);
  setMetadataFor(StateFlowImpl, 'StateFlowImpl', classMeta, AbstractSharedFlow, [AbstractSharedFlow, MutableStateFlow, CancellableFlow, FusibleFlow], VOID, VOID, [1]);
  setMetadataFor(StateFlowSlot, 'StateFlowSlot', classMeta, AbstractSharedFlowSlot, VOID, VOID, VOID, [0]);
  setMetadataFor(SubscriptionCountStateFlow, 'SubscriptionCountStateFlow', classMeta, SharedFlowImpl, [StateFlow, SharedFlowImpl], VOID, VOID, [1]);
  setMetadataFor(ChannelFlow, 'ChannelFlow', classMeta, VOID, [FusibleFlow], VOID, VOID, [1]);
  setMetadataFor(ChannelFlowOperator, 'ChannelFlowOperator', classMeta, ChannelFlow, VOID, VOID, VOID, [1, 2]);
  setMetadataFor(ChannelFlowOperatorImpl, 'ChannelFlowOperatorImpl', classMeta, ChannelFlowOperator, VOID, VOID, VOID, [1]);
  setMetadataFor(ChannelFlowOperator$collectWithContextUndispatched$slambda, 'ChannelFlowOperator$collectWithContextUndispatched$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$14, '$collectCOROUTINE$14', classMeta, CoroutineImpl);
  setMetadataFor(ChannelFlow$_get_collectToFun_$slambda_j53z2e, 'ChannelFlow$<get-collectToFun>$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(ChannelFlow$collect$slambda, 'ChannelFlow$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(UndispatchedContextCollector$emitRef$slambda, 'UndispatchedContextCollector$emitRef$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(UndispatchedContextCollector, 'UndispatchedContextCollector', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(StackFrameContinuation, 'StackFrameContinuation', classMeta, VOID, [Continuation, CoroutineStackFrame]);
  setMetadataFor(NopCollector, 'NopCollector', objectMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(SendingCollector, 'SendingCollector', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(ThrowingCollector, 'ThrowingCollector', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(unsafeTransform$o$collect$slambda, 'unsafeTransform$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$15, '$collectCOROUTINE$15', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor($emitCOROUTINE$18, '$emitCOROUTINE$18', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_2, VOID, classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$17, '$collectCOROUTINE$17', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_3, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor($emitCOROUTINE$19, '$emitCOROUTINE$19', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_4, VOID, classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor($collectWhileCOROUTINE$16, '$collectWhileCOROUTINE$16', classMeta, CoroutineImpl);
  setMetadataFor($onSubscriptionCOROUTINE$20, '$onSubscriptionCOROUTINE$20', classMeta, CoroutineImpl);
  setMetadataFor(SubscribedFlowCollector, 'SubscribedFlowCollector', classMeta, VOID, [FlowCollector], VOID, VOID, [1, 0]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(filter$o$collect$slambda, 'filter$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$21, '$collectCOROUTINE$21', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_5, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor($emitCOROUTINE$23, '$emitCOROUTINE$23', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_6, VOID, classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor($firstCOROUTINE$22, '$firstCOROUTINE$22', classMeta, CoroutineImpl);
  setMetadataFor(OpDescriptor, 'OpDescriptor', classMeta);
  setMetadataFor(AtomicOp, 'AtomicOp', classMeta, OpDescriptor);
  setMetadataFor(SegmentOrClosed, 'SegmentOrClosed', classMeta);
  setMetadataFor(ExceptionSuccessfullyProcessed, 'ExceptionSuccessfullyProcessed', objectMeta, Exception);
  setMetadataFor(DispatchedContinuation, 'DispatchedContinuation', classMeta, DispatchedTask, [DispatchedTask, CoroutineStackFrame, Continuation]);
  setMetadataFor(InlineList, 'InlineList', classMeta);
  setMetadataFor(Worker, 'Worker', classMeta, VOID, [Runnable]);
  setMetadataFor(LimitedDispatcher, 'LimitedDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Delay], VOID, VOID, [1]);
  setMetadataFor(LockFreeTaskQueue, 'LockFreeTaskQueue', classMeta);
  setMetadataFor(Placeholder, 'Placeholder', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(LockFreeTaskQueueCore, 'LockFreeTaskQueueCore', classMeta);
  setMetadataFor(UndeliveredElementException, 'UndeliveredElementException', classMeta, RuntimeException);
  setMetadataFor(ContextScope, 'ContextScope', classMeta, VOID, [CoroutineScope]);
  setMetadataFor(Symbol, 'Symbol', classMeta);
  setMetadataFor(_no_name_provided__qut3iv_7, VOID, classMeta, VOID, [Runnable]);
  setMetadataFor(OnTimeout, 'OnTimeout', classMeta);
  setMetadataFor(SelectClause, 'SelectClause', interfaceMeta);
  setMetadataFor(SelectClause0, 'SelectClause0', interfaceMeta, VOID, [SelectClause]);
  setMetadataFor(SelectClause0Impl, 'SelectClause0Impl', classMeta, VOID, [SelectClause0]);
  setMetadataFor(SelectInstance, 'SelectInstance', interfaceMeta);
  setMetadataFor(SelectClause1, 'SelectClause1', interfaceMeta, VOID, [SelectClause]);
  setMetadataFor(SelectClause1Impl, 'SelectClause1Impl', classMeta, VOID, [SelectClause1]);
  setMetadataFor($invokeBlockCOROUTINE$28, '$invokeBlockCOROUTINE$28', classMeta, CoroutineImpl);
  setMetadataFor(ClauseData, 'ClauseData', classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($doSelectCOROUTINE$24, '$doSelectCOROUTINE$24', classMeta, CoroutineImpl);
  setMetadataFor($doSelectSuspendCOROUTINE$25, '$doSelectSuspendCOROUTINE$25', classMeta, CoroutineImpl);
  setMetadataFor($completeCOROUTINE$26, '$completeCOROUTINE$26', classMeta, CoroutineImpl);
  setMetadataFor($processResultAndInvokeBlockRecoveringExceptionCOROUTINE$27, '$processResultAndInvokeBlockRecoveringExceptionCOROUTINE$27', classMeta, CoroutineImpl);
  function invoke(_this__u8e3s4, block) {
    return this.invoke_17htpp_k$(_this__u8e3s4, null, block);
  }
  function onTimeout(timeMillis, block) {
    return onTimeout_0(this, timeMillis, block);
  }
  setMetadataFor(SelectBuilder, 'SelectBuilder', interfaceMeta);
  setMetadataFor(SelectInstanceInternal, 'SelectInstanceInternal', interfaceMeta, VOID, [SelectInstance, Waiter]);
  setMetadataFor(SelectImplementation, 'SelectImplementation', classMeta, CancelHandler, [CancelHandler, SelectBuilder, SelectInstanceInternal], VOID, VOID, [0, 2]);
  setMetadataFor(TrySelectDetailedResult, 'TrySelectDetailedResult', classMeta, Enum);
  setMetadataFor(SelectClause2, 'SelectClause2', interfaceMeta, VOID, [SelectClause]);
  setMetadataFor(SelectClause2Impl, 'SelectClause2Impl', classMeta, VOID, [SelectClause2]);
  function tryLock$default(owner, $super) {
    owner = owner === VOID ? null : owner;
    return $super === VOID ? this.tryLock_jl1wg7_k$(owner) : $super.tryLock_jl1wg7_k$.call(this, owner);
  }
  function lock$default(owner, $completion, $super) {
    owner = owner === VOID ? null : owner;
    return $super === VOID ? this.lock_25dizd_k$(owner, $completion) : $super.lock_25dizd_k$.call(this, owner, $completion);
  }
  function unlock$default(owner, $super) {
    owner = owner === VOID ? null : owner;
    var tmp;
    if ($super === VOID) {
      this.unlock_uksyr8_k$(owner);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.unlock_uksyr8_k$.call(this, owner);
    }
    return tmp;
  }
  setMetadataFor(Mutex, 'Mutex', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(CancellableContinuationWithOwner, 'CancellableContinuationWithOwner', classMeta, VOID, [CancellableContinuation, Waiter]);
  setMetadataFor(SelectInstanceWithOwner, 'SelectInstanceWithOwner', classMeta, VOID, [SelectInstanceInternal]);
  setMetadataFor(Semaphore, 'Semaphore', interfaceMeta, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(SemaphoreImpl, 'SemaphoreImpl', classMeta, VOID, [Semaphore], VOID, VOID, [0]);
  setMetadataFor(MutexImpl, 'MutexImpl', classMeta, SemaphoreImpl, [SemaphoreImpl, Mutex], VOID, VOID, [1, 0]);
  setMetadataFor($withLockCOROUTINE$29, '$withLockCOROUTINE$29', classMeta, CoroutineImpl);
  setMetadataFor(SemaphoreSegment, 'SemaphoreSegment', classMeta, Segment);
  setMetadataFor(CloseableCoroutineDispatcher, 'CloseableCoroutineDispatcher', classMeta, CoroutineDispatcher);
  setMetadataFor(UndispatchedCoroutine, 'UndispatchedCoroutine', classMeta, ScopeCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(Dispatchers, 'Dispatchers', objectMeta);
  setMetadataFor(JsMainDispatcher, 'JsMainDispatcher', classMeta, MainCoroutineDispatcher);
  setMetadataFor(UnconfinedEventLoop, 'UnconfinedEventLoop', classMeta, EventLoop);
  setMetadataFor(JobCancellationException, 'JobCancellationException', classMeta, CancellationException);
  setMetadataFor(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Delay], VOID, VOID, [1]);
  setMetadataFor(NodeDispatcher, 'NodeDispatcher', objectMeta, SetTimeoutBasedDispatcher, VOID, VOID, VOID, [1]);
  setMetadataFor(SetTimeoutDispatcher, 'SetTimeoutDispatcher', objectMeta, SetTimeoutBasedDispatcher, VOID, VOID, VOID, [1]);
  setMetadataFor(MessageQueue, 'MessageQueue', classMeta, VOID, [MutableList]);
  setMetadataFor(ScheduledMessageQueue, 'ScheduledMessageQueue', classMeta, MessageQueue);
  setMetadataFor(ClearTimeout, 'ClearTimeout', classMeta, CancelHandler, [CancelHandler, DisposableHandle]);
  setMetadataFor(WindowClearTimeout, 'WindowClearTimeout', classMeta, ClearTimeout);
  setMetadataFor(WindowDispatcher, 'WindowDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Delay], VOID, VOID, [1]);
  setMetadataFor(WindowMessageQueue, 'WindowMessageQueue', classMeta, MessageQueue);
  setMetadataFor(_no_name_provided__qut3iv_8, VOID, classMeta, VOID, [Runnable]);
  setMetadataFor(AbortFlowException, 'AbortFlowException', classMeta, CancellationException);
  setMetadataFor(SafeCollector, 'SafeCollector', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(DiagnosticCoroutineContextException, 'DiagnosticCoroutineContextException', classMeta, RuntimeException);
  setMetadataFor(CommonThreadLocal, 'CommonThreadLocal', classMeta);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.initParentJob_4c2lht_k$(parentContext.get_j1ktw6_k$(Key_getInstance_3()));
    }
    this.context_1 = parentContext.plus_rgw9wi_k$(this);
  }
  protoOf(AbstractCoroutine).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(AbstractCoroutine).get_coroutineContext_115oqo_k$ = function () {
    return this.context_1;
  };
  protoOf(AbstractCoroutine).get_isActive_quafmh_k$ = function () {
    return protoOf(JobSupport).get_isActive_quafmh_k$.call(this);
  };
  protoOf(AbstractCoroutine).onCompleted_wmtzyo_k$ = function (value) {
  };
  protoOf(AbstractCoroutine).onCancelled_oqqex5_k$ = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).cancellationExceptionMessage_a64063_k$ = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).onCompletionInternal_39c1g8_k$ = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.onCancelled_oqqex5_k$(state.get_cause_iplhs0_k$(), state.get_handled_cq14k3_k$());
    } else {
      this.onCompleted_wmtzyo_k$((state == null ? true : isObject(state)) ? state : THROW_CCE());
    }
  };
  protoOf(AbstractCoroutine).resumeWith_s3a3yh_k$ = function (result) {
    var state = this.makeCompletingOnce_b13xy2_k$(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_getInstance();
    this.afterResume_ufx9w9_k$(state);
  };
  protoOf(AbstractCoroutine).afterResume_ufx9w9_k$ = function (state) {
    return this.afterCompletion_2ogq6g_k$(state);
  };
  protoOf(AbstractCoroutine).handleOnCompletionException_o179kb_k$ = function (exception) {
    handleCoroutineException(this.context_1, exception);
  };
  protoOf(AbstractCoroutine).nameString_cd9e9w_k$ = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.context_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).nameString_cd9e9w_k$.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).nameString_cd9e9w_k$.call(this);
  };
  protoOf(AbstractCoroutine).start_eui3tp_k$ = function (start, receiver, block) {
    start.invoke_gvylz3_k$(block, receiver, this);
  };
  function InternalCoroutinesApi() {
  }
  protoOf(InternalCoroutinesApi).equals = function (other) {
    if (!(other instanceof InternalCoroutinesApi))
      return false;
    var tmp0_other_with_cast = other instanceof InternalCoroutinesApi ? other : THROW_CCE();
    return true;
  };
  protoOf(InternalCoroutinesApi).hashCode = function () {
    return 0;
  };
  protoOf(InternalCoroutinesApi).toString = function () {
    return '@kotlinx.coroutines.InternalCoroutinesApi()';
  };
  function ExperimentalCoroutinesApi() {
  }
  protoOf(ExperimentalCoroutinesApi).equals = function (other) {
    if (!(other instanceof ExperimentalCoroutinesApi))
      return false;
    var tmp0_other_with_cast = other instanceof ExperimentalCoroutinesApi ? other : THROW_CCE();
    return true;
  };
  protoOf(ExperimentalCoroutinesApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalCoroutinesApi).toString = function () {
    return '@kotlinx.coroutines.ExperimentalCoroutinesApi()';
  };
  function DelicateCoroutinesApi() {
  }
  protoOf(DelicateCoroutinesApi).equals = function (other) {
    if (!(other instanceof DelicateCoroutinesApi))
      return false;
    var tmp0_other_with_cast = other instanceof DelicateCoroutinesApi ? other : THROW_CCE();
    return true;
  };
  protoOf(DelicateCoroutinesApi).hashCode = function () {
    return 0;
  };
  protoOf(DelicateCoroutinesApi).toString = function () {
    return '@kotlinx.coroutines.DelicateCoroutinesApi()';
  };
  function FlowPreview() {
  }
  protoOf(FlowPreview).equals = function (other) {
    if (!(other instanceof FlowPreview))
      return false;
    var tmp0_other_with_cast = other instanceof FlowPreview ? other : THROW_CCE();
    return true;
  };
  protoOf(FlowPreview).hashCode = function () {
    return 0;
  };
  protoOf(FlowPreview).toString = function () {
    return '@kotlinx.coroutines.FlowPreview()';
  };
  function joinAll(_this__u8e3s4, $completion) {
    var tmp = new $joinAllCOROUTINE$0(_this__u8e3s4, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $joinAllCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($joinAllCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            this.tmp0_iterator0__1 = this._this__u8e3s4__1.iterator_jk1svi_k$();
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (!this.tmp0_iterator0__1.hasNext_bitz1p_k$()) {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

            this.element1__1 = this.tmp0_iterator0__1.next_20eer_k$();
            this.set_state_a96kl8_k$(2);
            suspendResult = this.element1__1.join_kbq7u1_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 3:
            return Unit_getInstance();
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
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.get_isLazy_ew1d53_k$() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.start_eui3tp_k$(start, coroutine, block);
    return coroutine;
  }
  function withContext(context, block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.withContext.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $completion;
      var oldContext = tmp0__anonymous__q1qw7t.get_context_h02k06_k$();
      var newContext = newCoroutineContext_0(oldContext, context);
      ensureActive(newContext);
      if (newContext === oldContext) {
        var coroutine = new ScopeCoroutine(newContext, tmp0__anonymous__q1qw7t);
        tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
        break $l$block_0;
      }
      if (equals(newContext.get_j1ktw6_k$(Key_getInstance()), oldContext.get_j1ktw6_k$(Key_getInstance()))) {
        var coroutine_0 = new UndispatchedCoroutine(newContext, tmp0__anonymous__q1qw7t);
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        var tmp0_withCoroutineContext = coroutine_0.get_context_h02k06_k$();
        tmp$ret$0 = startUndispatchedOrReturn(coroutine_0, coroutine_0, block);
        break $l$block_0;
      }
      var coroutine_1 = new DispatchedCoroutine(newContext, tmp0__anonymous__q1qw7t);
      startCoroutineCancellable(block, coroutine_1, coroutine_1);
      tmp$ret$0 = coroutine_1.getResult_clfhg3_k$();
    }
    var tmp0 = tmp$ret$0;
    return tmp0;
  }
  function async(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.get_isLazy_ew1d53_k$() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.start_eui3tp_k$(start, coroutine, block);
    return coroutine;
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).handleJobException_oc4gxk_k$ = function (exception) {
    handleCoroutineException(this.get_context_h02k06_k$(), exception);
    return true;
  };
  function _get_continuation__y3gzck($this) {
    return $this.continuation_1;
  }
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.continuation_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).onStart_qth026_k$ = function () {
    startCoroutineCancellable_0(this.continuation_1, this);
  };
  function _get__decision__uou2k6($this) {
    return $this._decision_1;
  }
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this._decision_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.trySuspend.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this._decision_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already suspended');
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this._decision_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.tryResume.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this._decision_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already resumed');
      }
    }
  }
  function DispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
    this._decision_1 = atomic$int$1(0);
  }
  protoOf(DispatchedCoroutine).afterCompletion_2ogq6g_k$ = function (state) {
    this.afterResume_ufx9w9_k$(state);
  };
  protoOf(DispatchedCoroutine).afterResume_ufx9w9_k$ = function (state) {
    if (tryResume(this))
      return Unit_getInstance();
    resumeCancellableWith(intercepted(this.get_uCont_iyyiam_k$()), recoverResult(state, this.get_uCont_iyyiam_k$()));
  };
  protoOf(DispatchedCoroutine).getResult_clfhg3_k$ = function () {
    if (trySuspend(this))
      return get_COROUTINE_SUSPENDED();
    var state = unboxState(this.get_state_iypx7s_k$());
    if (state instanceof CompletedExceptionally)
      throw state.get_cause_iplhs0_k$();
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  function $awaitCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.awaitInternal_pz51jj_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : isObject(suspendResult)) ? suspendResult : THROW_CCE();
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
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(DeferredCoroutine).getCompleted_nczk2z_k$ = function () {
    var tmp = this.getCompletedInternal_26f4i6_k$();
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(DeferredCoroutine).await_xhs9og_k$ = function ($completion) {
    var tmp = new $awaitCOROUTINE$1(this, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DeferredCoroutine).get_onAwait_l48qpe_k$ = function () {
    var tmp = this.get_onAwaitInternal_onp3dh_k$();
    return isInterface(tmp, SelectClause1) ? tmp : THROW_CCE();
  };
  function _get_continuation__y3gzck_0($this) {
    return $this.continuation_1;
  }
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.continuation_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyDeferredCoroutine).onStart_qth026_k$ = function () {
    startCoroutineCancellable_0(this.continuation_1, this);
  };
  function get_UNDECIDED() {
    return UNDECIDED;
  }
  var UNDECIDED;
  function get_SUSPENDED() {
    return SUSPENDED;
  }
  var SUSPENDED;
  function get_RESUMED() {
    return RESUMED;
  }
  var RESUMED;
  function suspendCancellableCoroutine(block, $completion) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.initCancellability_sh6jkn_k$();
    block(cancellable);
    tmp$ret$0 = cancellable.getResult_clfhg3_k$();
    var tmp0 = tmp$ret$0;
    return tmp0;
  }
  function CancellableContinuation() {
  }
  function disposeOnCancellation(_this__u8e3s4, handle) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new DisposeOnCancel(handle);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return _this__u8e3s4.invokeOnCancellation_yygv6h_k$(tmp$ret$1);
  }
  function suspendCancellableCoroutineReusable(block, $completion) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    try {
      block(cancellable);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.releaseClaimedReusableContinuation_4y1z8b_k$();
        throw e;
      } else {
        throw $p;
      }
    }
    tmp$ret$0 = cancellable.getResult_clfhg3_k$();
    var tmp0 = tmp$ret$0;
    return tmp0;
  }
  function _get_handle__ls055p($this) {
    return $this.handle_1;
  }
  function DisposeOnCancel(handle) {
    CancelHandler.call(this);
    this.handle_1 = handle;
  }
  protoOf(DisposeOnCancel).invoke_7fb7sc_k$ = function (cause) {
    return this.handle_1.dispose_3n44we_k$();
  };
  protoOf(DisposeOnCancel).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  protoOf(DisposeOnCancel).toString = function () {
    return 'DisposeOnCancel[' + this.handle_1 + ']';
  };
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE());
    }
    var tmp0_safe_receiver = delegate.claimReusableCancellableContinuation_oatv30_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.getOrCreateCancellableContinuation.<anonymous>' call
      tmp$ret$0 = tmp0_safe_receiver.resetStateReusable_a3kq5v_k$();
      if (tmp$ret$0) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp$ret$1 = tmp_0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE_REUSABLE());
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function get_RESUME_TOKEN() {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get__decisionAndIndex__k6ut8l($this) {
    return $this._decisionAndIndex_1;
  }
  function _get__state__37adl3($this) {
    return $this._state_1;
  }
  function _get__parentHandle__f9kzhc($this) {
    return $this._parentHandle_1;
  }
  function _get_parentHandle__f8dcex($this) {
    return $this._parentHandle_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.get_state_iypx7s_k$();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.get_resumeMode_te1i4n_k$())) {
      var tmp_0 = $this.delegate_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).isReusable_hrfetn_k$();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.delegate_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.postponeCancellation_723ard_k$(cause);
  }
  function callCancelHandlerSafely($this, block) {
    try {
      block();
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.get_context_h02k06_k$(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, ex));
      } else {
        throw $p;
      }
    }
  }
  function callCancelHandler($this, handler, cause) {
    var tmp;
    try {
      invokeIt(handler, cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.get_context_h02k06_k$(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, ex));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function callSegmentOnCancellation($this, segment, cause) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.index' call
    var tmp0__get_index__prvnk7 = $this._decisionAndIndex_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    tmp$ret$0 = tmp0__get_index__prvnk7 & 536870911;
    var index = tmp$ret$0;
    // Inline function 'kotlin.check' call
    var tmp1_check = !(index === 536870911);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callSegmentOnCancellation.<anonymous>' call
      tmp$ret$1 = 'The index for Segment.onCancellation(..) is broken';
      var message = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callSegmentOnCancellation.<anonymous>' call
      segment.onCancellation_8vow63_k$(index, cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.get_context_h02k06_k$(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, ex));
      } else {
        throw $p;
      }
    }
  }
  function trySuspend_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this._decisionAndIndex_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.trySuspend.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.decision' call
      tmp$ret$0 = tmp1__anonymous__uwfjfc >> _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i();
      var tmp0_subject = tmp$ret$0;
      switch (tmp0_subject) {
        case 0:
          var tmp$ret$2;
          // Inline function 'kotlinx.coroutines.decisionAndIndex' call
          var tmp0_decisionAndIndex = 1;
          var tmp$ret$1;
          // Inline function 'kotlinx.coroutines.index' call
          tmp$ret$1 = tmp1__anonymous__uwfjfc & 536870911;
          var tmp1_decisionAndIndex = tmp$ret$1;
          tmp$ret$2 = (tmp0_decisionAndIndex << _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) + tmp1_decisionAndIndex | 0;

          if ($this._decisionAndIndex_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, tmp$ret$2))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already suspended');
      }
    }
  }
  function tryResume_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this._decisionAndIndex_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResume.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.decision' call
      tmp$ret$0 = tmp1__anonymous__uwfjfc >> _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i();
      var tmp0_subject = tmp$ret$0;
      switch (tmp0_subject) {
        case 0:
          var tmp$ret$2;
          // Inline function 'kotlinx.coroutines.decisionAndIndex' call
          var tmp0_decisionAndIndex = 2;
          var tmp$ret$1;
          // Inline function 'kotlinx.coroutines.index' call
          tmp$ret$1 = tmp1__anonymous__uwfjfc & 536870911;
          var tmp1_decisionAndIndex = tmp$ret$1;
          tmp$ret$2 = (tmp0_decisionAndIndex << _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) + tmp1_decisionAndIndex | 0;

          if ($this._decisionAndIndex_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, tmp$ret$2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already resumed');
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.get_context_h02k06_k$().get_j1ktw6_k$(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ChildContinuation($this);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    var handle = parent.invokeOnCompletion$default_gp7u53_k$(true, VOID, tmp$ret$1);
    $this._parentHandle_1.atomicfu$compareAndSet(null, handle);
    return handle;
  }
  function invokeOnCancellationImpl($this, handler) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellationImpl.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (tmp0_subject instanceof Active) {
        if ($this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, handler))
          return Unit_getInstance();
      } else {
        var tmp;
        if (tmp0_subject instanceof CancelHandler) {
          tmp = true;
        } else {
          tmp = tmp0_subject instanceof Segment;
        }
        if (tmp) {
          multipleHandlersError($this, handler, tmp1__anonymous__uwfjfc);
        } else {
          if (tmp0_subject instanceof CompletedExceptionally) {
            if (!tmp1__anonymous__uwfjfc.makeHandled_ws9oq6_k$()) {
              multipleHandlersError($this, handler, tmp1__anonymous__uwfjfc);
            }
            if (tmp1__anonymous__uwfjfc instanceof CancelledContinuation) {
              var tmp1_safe_receiver = tmp1__anonymous__uwfjfc instanceof CompletedExceptionally ? tmp1__anonymous__uwfjfc : null;
              var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_cause_iplhs0_k$();
              if (handler instanceof CancelHandler) {
                $this.callCancelHandler_qcjvzx_k$(handler, cause);
              } else {
                var segment = handler instanceof Segment ? handler : THROW_CCE();
                callSegmentOnCancellation($this, segment, cause);
              }
            }
            return Unit_getInstance();
          } else {
            if (tmp0_subject instanceof CompletedContinuation) {
              if (!(tmp1__anonymous__uwfjfc.cancelHandler_1 == null)) {
                multipleHandlersError($this, handler, tmp1__anonymous__uwfjfc);
              }
              var tmp_0;
              if (handler instanceof BeforeResumeCancelHandler) {
                tmp_0 = true;
              } else {
                tmp_0 = handler instanceof Segment;
              }
              if (tmp_0)
                return Unit_getInstance();
              if (handler instanceof CancelHandler)
                handler;
              else
                THROW_CCE();
              if (tmp1__anonymous__uwfjfc.get_cancelled_ge9r54_k$()) {
                $this.callCancelHandler_qcjvzx_k$(handler, tmp1__anonymous__uwfjfc.cancelCause_1);
                return Unit_getInstance();
              }
              var update = tmp1__anonymous__uwfjfc.copy$default_g8p7u0_k$(VOID, handler);
              if ($this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update))
                return Unit_getInstance();
            } else {
              var tmp_1;
              if (handler instanceof BeforeResumeCancelHandler) {
                tmp_1 = true;
              } else {
                tmp_1 = handler instanceof Segment;
              }
              if (tmp_1)
                return Unit_getInstance();
              if (handler instanceof CancelHandler)
                handler;
              else
                THROW_CCE();
              var update_0 = new CompletedContinuation(tmp1__anonymous__uwfjfc, handler);
              if ($this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update_0))
                return Unit_getInstance();
            }
          }
        }
      }
    }
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var tmp0_error = "It's prohibited to register multiple handlers, tried to register " + toString(handler) + ', already has ' + toString_0(state);
    throw IllegalStateException_init_$Create$(toString(tmp0_error));
  }
  function makeCancelHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler;
    } else {
      tmp = new InvokeOnCancel(handler);
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume_0($this))
      return Unit_getInstance();
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) ? idempotent == null : false) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          var tmp_2;
          if (state instanceof CancelHandler) {
            tmp_2 = !(state instanceof BeforeResumeCancelHandler);
          } else {
            tmp_2 = false;
          }
          tmp_1 = tmp_2;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          tmp = new CompletedContinuation(proposedUpdate, state instanceof CancelHandler ? state : null, onCancellation, idempotent);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this._state_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
        var tmp0_subject = tmp1__anonymous__uwfjfc;
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
          var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, resumeMode, onCancellation, null);
          if (!$this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return Unit_getInstance();
        } else {
          if (tmp0_subject instanceof CancelledContinuation) {
            if (tmp1__anonymous__uwfjfc.makeResumed_vjvawn_k$()) {
              var tmp1_safe_receiver = onCancellation;
              if (tmp1_safe_receiver == null)
                null;
              else {
                var tmp$ret$1;
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                $this.callOnCancellation_adp92k_k$(tmp1_safe_receiver, tmp1__anonymous__uwfjfc.get_cause_iplhs0_k$());
                tmp$ret$1 = Unit_getInstance();
              }
              return Unit_getInstance();
            }
          }
        }
        alreadyResumedError($this, proposedUpdate);
      }
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this._state_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResumeImpl.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
        var tmp0_subject = tmp1__anonymous__uwfjfc;
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
          var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, $this.get_resumeMode_te1i4n_k$(), onCancellation, idempotent);
          if (!$this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          detachChildIfNonResuable($this);
          return get_RESUME_TOKEN();
        } else {
          if (tmp0_subject instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) ? tmp1__anonymous__uwfjfc.idempotentResume_1 === idempotent : false) {
              // Inline function 'kotlinx.coroutines.assert' call
              tmp = get_RESUME_TOKEN();
            } else {
              tmp = null;
            }
            return tmp;
          } else {
            return null;
          }
        }
      }
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var tmp0_error = 'Already resumed, but proposed with update ' + toString_0(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString(tmp0_error));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.detachChild_qdtbew_k$();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.delegate_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.context_1 = this.delegate_1.get_context_h02k06_k$();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    var tmp0_decisionAndIndex = 0;
    var tmp1_decisionAndIndex = 536870911;
    tmp$ret$0 = (tmp0_decisionAndIndex << _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) + tmp1_decisionAndIndex | 0;
    tmp._decisionAndIndex_1 = atomic$int$1(tmp$ret$0);
    this._state_1 = atomic$ref$1(Active_getInstance());
    this._parentHandle_1 = atomic$ref$1(null);
  }
  protoOf(CancellableContinuationImpl).get_delegate_i94tki_k$ = function () {
    return this.delegate_1;
  };
  protoOf(CancellableContinuationImpl).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(CancellableContinuationImpl).get_state_iypx7s_k$ = function () {
    return this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(CancellableContinuationImpl).get_isActive_quafmh_k$ = function () {
    var tmp = this.get_state_iypx7s_k$();
    return !(tmp == null) ? isInterface(tmp, NotCompleted) : false;
  };
  protoOf(CancellableContinuationImpl).get_isCompleted_a6j6c8_k$ = function () {
    var tmp = this.get_state_iypx7s_k$();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).get_isCancelled_trk8pu_k$ = function () {
    var tmp = this.get_state_iypx7s_k$();
    return tmp instanceof CancelledContinuation;
  };
  protoOf(CancellableContinuationImpl).initCancellability_sh6jkn_k$ = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.get_isCompleted_a6j6c8_k$()) {
      handle.dispose_3n44we_k$();
      this._parentHandle_1.set_kotlinx$atomicfu$value_koguff_k$(NonDisposableHandle_getInstance());
    }
  };
  protoOf(CancellableContinuationImpl).resetStateReusable_a3kq5v_k$ = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.idempotentResume_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.detachChild_qdtbew_k$();
      return false;
    }
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    var tmp0_decisionAndIndex = 0;
    var tmp1_decisionAndIndex = 536870911;
    tmp$ret$0 = (tmp0_decisionAndIndex << _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) + tmp1_decisionAndIndex | 0;
    this._decisionAndIndex_1.set_kotlinx$atomicfu$value_3lx0f_k$(tmp$ret$0);
    this._state_1.set_kotlinx$atomicfu$value_koguff_k$(Active_getInstance());
    return true;
  };
  protoOf(CancellableContinuationImpl).get_callerFrame_pfdb95_k$ = function () {
    var tmp = this.delegate_1;
    return isInterface(tmp, CoroutineStackFrame) ? tmp : null;
  };
  protoOf(CancellableContinuationImpl).getStackTraceElement_um8m53_k$ = function () {
    return null;
  };
  protoOf(CancellableContinuationImpl).takeState_olvzuy_k$ = function () {
    return this.get_state_iypx7s_k$();
  };
  protoOf(CancellableContinuationImpl).cancelCompletedResult_tweln2_k$ = function (takenState, cause) {
    var tmp0_loop = this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        throw IllegalStateException_init_$Create$('Not completed');
      } else {
        if (tmp0_subject instanceof CompletedExceptionally)
          return Unit_getInstance();
        else {
          if (tmp0_subject instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            var tmp0_check = !tmp1__anonymous__uwfjfc.get_cancelled_ge9r54_k$();
            // Inline function 'kotlin.contracts.contract' call
            if (!tmp0_check) {
              var tmp$ret$0;
              // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>.<anonymous>' call
              tmp$ret$0 = 'Must be called at most once';
              var message = tmp$ret$0;
              throw IllegalStateException_init_$Create$(toString(message));
            }
            var update = tmp1__anonymous__uwfjfc.copy$default_g8p7u0_k$(VOID, VOID, VOID, VOID, cause);
            if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
              tmp1__anonymous__uwfjfc.invokeHandlers_2wd6qe_k$(this, cause);
              return Unit_getInstance();
            }
          } else {
            if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, new CompletedContinuation(tmp1__anonymous__uwfjfc, VOID, VOID, VOID, cause))) {
              return Unit_getInstance();
            }
          }
        }
      }
    }
    return Unit_getInstance();
  };
  protoOf(CancellableContinuationImpl).cancel_as6ug7_k$ = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancel.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
        if (!(!(tmp1__anonymous__uwfjfc == null) ? isInterface(tmp1__anonymous__uwfjfc, NotCompleted) : false))
          return false;
        var tmp;
        if (tmp1__anonymous__uwfjfc instanceof CancelHandler) {
          tmp = true;
        } else {
          tmp = tmp1__anonymous__uwfjfc instanceof Segment;
        }
        var update = new CancelledContinuation(this, cause, tmp);
        if (!this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }
        var tmp0_subject = tmp1__anonymous__uwfjfc;
        if (tmp0_subject instanceof CancelHandler) {
          this.callCancelHandler_qcjvzx_k$(tmp1__anonymous__uwfjfc, cause);
        } else {
          if (tmp0_subject instanceof Segment) {
            callSegmentOnCancellation(this, tmp1__anonymous__uwfjfc, cause);
          }
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.get_resumeMode_te1i4n_k$());
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).parentCancelled_uc06zq_k$ = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.cancel_as6ug7_k$(cause);
    detachChildIfNonResuable(this);
  };
  protoOf(CancellableContinuationImpl).callCancelHandler_qcjvzx_k$ = function (handler, cause) {
    var tmp;
    try {
      handler.invoke(cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.get_context_h02k06_k$(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, ex));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).callOnCancellation_adp92k_k$ = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.get_context_h02k06_k$(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this, ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).getContinuationCancellationCause_62o4c9_k$ = function (parent) {
    return parent.getCancellationException_8i1q6u_k$();
  };
  protoOf(CancellableContinuationImpl).getResult_clfhg3_k$ = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend_0(this)) {
      if (_get_parentHandle__f8dcex(this) == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        this.releaseClaimedReusableContinuation_4y1z8b_k$();
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      this.releaseClaimedReusableContinuation_4y1z8b_k$();
    }
    var state = this.get_state_iypx7s_k$();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.get_cause_iplhs0_k$(), this);
    if (get_isCancellableMode(this.get_resumeMode_te1i4n_k$())) {
      var job = this.get_context_h02k06_k$().get_j1ktw6_k$(Key_getInstance_3());
      if (!(job == null) ? !job.get_isActive_quafmh_k$() : false) {
        var cause = job.getCancellationException_8i1q6u_k$();
        this.cancelCompletedResult_tweln2_k$(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.getSuccessfulResult_t876z0_k$(state);
  };
  protoOf(CancellableContinuationImpl).releaseClaimedReusableContinuation_4y1z8b_k$ = function () {
    var tmp = this.delegate_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tryReleaseClaimedContinuation_5s4a1c_k$(this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    this.detachChild_qdtbew_k$();
    this.cancel_as6ug7_k$(cancellationCause);
  };
  protoOf(CancellableContinuationImpl).resumeWith_s3a3yh_k$ = function (result) {
    return resumeImpl$default(this, toState(result, this), this.get_resumeMode_te1i4n_k$());
  };
  protoOf(CancellableContinuationImpl).resume_l1w5in_k$ = function (value, onCancellation) {
    return resumeImpl(this, value, this.get_resumeMode_te1i4n_k$(), onCancellation);
  };
  protoOf(CancellableContinuationImpl).invokeOnCancellation_gome2h_k$ = function (segment, index) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp0_update = this._decisionAndIndex_1;
      while (true) {
        var cur = tmp0_update.get_kotlinx$atomicfu$value_vi2am5_k$();
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>' call
        // Inline function 'kotlin.check' call
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.index' call
        tmp$ret$0 = cur & 536870911;
        var tmp0_check = tmp$ret$0 === 536870911;
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_check) {
          var tmp$ret$1;
          // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>.<anonymous>' call
          tmp$ret$1 = 'invokeOnCancellation should be called at most once';
          var message = tmp$ret$1;
          throw IllegalStateException_init_$Create$(toString(message));
        }
        var tmp$ret$3;
        // Inline function 'kotlinx.coroutines.decisionAndIndex' call
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.decision' call
        tmp$ret$2 = cur >> _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i();
        var tmp1_decisionAndIndex = tmp$ret$2;
        tmp$ret$3 = (tmp1_decisionAndIndex << _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) + index | 0;
        tmp$ret$4 = tmp$ret$3;
        var upd = tmp$ret$4;
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$5 = Unit_getInstance();
          break $l$block;
        }
      }
    }
    invokeOnCancellationImpl(this, segment);
  };
  protoOf(CancellableContinuationImpl).invokeOnCancellation_yygv6h_k$ = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    invokeOnCancellationImpl(this, cancelHandler);
  };
  protoOf(CancellableContinuationImpl).detachChild_qdtbew_k$ = function () {
    var tmp0_elvis_lhs = _get_parentHandle__f8dcex(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.dispose_3n44we_k$();
    this._parentHandle_1.set_kotlinx$atomicfu$value_koguff_k$(NonDisposableHandle_getInstance());
  };
  protoOf(CancellableContinuationImpl).tryResume_10oxem_k$ = function (value, idempotent) {
    return tryResumeImpl(this, value, idempotent, null);
  };
  protoOf(CancellableContinuationImpl).tryResume_93jc0s_k$ = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  protoOf(CancellableContinuationImpl).tryResumeWithException_3icka9_k$ = function (exception) {
    return tryResumeImpl(this, new CompletedExceptionally(exception), null, null);
  };
  protoOf(CancellableContinuationImpl).completeResume_fu4ex_k$ = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.get_resumeMode_te1i4n_k$());
  };
  protoOf(CancellableContinuationImpl).resumeUndispatched_re4yxz_k$ = function (_this__u8e3s4, value) {
    var tmp = this.delegate_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    var tmp0_safe_receiver = dc;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_dispatcher_usy1bk_k$()) === _this__u8e3s4) {
      tmp_0 = get_MODE_UNDISPATCHED();
    } else {
      tmp_0 = this.get_resumeMode_te1i4n_k$();
    }
    resumeImpl$default(this, value, tmp_0);
  };
  protoOf(CancellableContinuationImpl).resumeUndispatchedWithException_xuy3rd_k$ = function (_this__u8e3s4, exception) {
    var tmp = this.delegate_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0 = new CompletedExceptionally(exception);
    var tmp_1;
    var tmp0_safe_receiver = dc;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_dispatcher_usy1bk_k$()) === _this__u8e3s4) {
      tmp_1 = get_MODE_UNDISPATCHED();
    } else {
      tmp_1 = this.get_resumeMode_te1i4n_k$();
    }
    resumeImpl$default(this, tmp_0, tmp_1);
  };
  protoOf(CancellableContinuationImpl).getSuccessfulResult_t876z0_k$ = function (state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof CompletedContinuation) {
      var tmp_0 = state.result_1;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).getExceptionalResult_bnge6_k$ = function (state) {
    var tmp0_safe_receiver = protoOf(DispatchedTask).getExceptionalResult_bnge6_k$.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.getExceptionalResult.<anonymous>' call
      tmp$ret$0 = recoverStackTrace(tmp0_safe_receiver, this.delegate_1);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.nameString_cd9e9w_k$() + '(' + toDebugString(this.delegate_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).nameString_cd9e9w_k$ = function () {
    return 'CancellableContinuation';
  };
  function BeforeResumeCancelHandler() {
    CancelHandler.call(this);
  }
  function NotCompleted() {
  }
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  function decisionAndIndex(decision, index) {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return (decision << _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) + index | 0;
  }
  function get_UNDECIDED_0() {
    return UNDECIDED_0;
  }
  var UNDECIDED_0;
  function get_NO_INDEX() {
    return NO_INDEX;
  }
  var NO_INDEX;
  function Active() {
    Active_instance = this;
  }
  protoOf(Active).toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    cancelHandler = cancelHandler === VOID ? null : cancelHandler;
    onCancellation = onCancellation === VOID ? null : onCancellation;
    idempotentResume = idempotentResume === VOID ? null : idempotentResume;
    cancelCause = cancelCause === VOID ? null : cancelCause;
    this.result_1 = result;
    this.cancelHandler_1 = cancelHandler;
    this.onCancellation_1 = onCancellation;
    this.idempotentResume_1 = idempotentResume;
    this.cancelCause_1 = cancelCause;
  }
  protoOf(CompletedContinuation).get_result_iyg5d2_k$ = function () {
    return this.result_1;
  };
  protoOf(CompletedContinuation).get_cancelHandler_w4ijbb_k$ = function () {
    return this.cancelHandler_1;
  };
  protoOf(CompletedContinuation).get_onCancellation_no7t6d_k$ = function () {
    return this.onCancellation_1;
  };
  protoOf(CompletedContinuation).get_idempotentResume_61d27l_k$ = function () {
    return this.idempotentResume_1;
  };
  protoOf(CompletedContinuation).get_cancelCause_cj8bx6_k$ = function () {
    return this.cancelCause_1;
  };
  protoOf(CompletedContinuation).get_cancelled_ge9r54_k$ = function () {
    return !(this.cancelCause_1 == null);
  };
  protoOf(CompletedContinuation).invokeHandlers_2wd6qe_k$ = function (cont, cause) {
    var tmp0_safe_receiver = this.cancelHandler_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.callCancelHandler_qcjvzx_k$(tmp0_safe_receiver, cause);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = this.onCancellation_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.callOnCancellation_adp92k_k$(tmp1_safe_receiver, cause);
      tmp$ret$1 = Unit_getInstance();
    }
  };
  protoOf(CompletedContinuation).component1_7eebsc_k$ = function () {
    return this.result_1;
  };
  protoOf(CompletedContinuation).component2_7eebsb_k$ = function () {
    return this.cancelHandler_1;
  };
  protoOf(CompletedContinuation).component3_7eebsa_k$ = function () {
    return this.onCancellation_1;
  };
  protoOf(CompletedContinuation).component4_7eebs9_k$ = function () {
    return this.idempotentResume_1;
  };
  protoOf(CompletedContinuation).component5_7eebs8_k$ = function () {
    return this.cancelCause_1;
  };
  protoOf(CompletedContinuation).copy_q5vocy_k$ = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).copy$default_g8p7u0_k$ = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.result_1 : result;
    cancelHandler = cancelHandler === VOID ? this.cancelHandler_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.onCancellation_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.idempotentResume_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.cancelCause_1 : cancelCause;
    return $super === VOID ? this.copy_q5vocy_k$(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.copy_q5vocy_k$.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString_0(this.result_1) + ', cancelHandler=' + this.cancelHandler_1 + ', onCancellation=' + this.onCancellation_1 + ', idempotentResume=' + toString_0(this.idempotentResume_1) + ', cancelCause=' + this.cancelCause_1 + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.result_1 == null ? 0 : hashCode(this.result_1);
    result = imul(result, 31) + (this.cancelHandler_1 == null ? 0 : hashCode(this.cancelHandler_1)) | 0;
    result = imul(result, 31) + (this.onCancellation_1 == null ? 0 : hashCode(this.onCancellation_1)) | 0;
    result = imul(result, 31) + (this.idempotentResume_1 == null ? 0 : hashCode(this.idempotentResume_1)) | 0;
    result = imul(result, 31) + (this.cancelCause_1 == null ? 0 : hashCode(this.cancelCause_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.result_1, tmp0_other_with_cast.result_1))
      return false;
    if (!equals(this.cancelHandler_1, tmp0_other_with_cast.cancelHandler_1))
      return false;
    if (!equals(this.onCancellation_1, tmp0_other_with_cast.onCancellation_1))
      return false;
    if (!equals(this.idempotentResume_1, tmp0_other_with_cast.idempotentResume_1))
      return false;
    if (!equals(this.cancelCause_1, tmp0_other_with_cast.cancelCause_1))
      return false;
    return true;
  };
  function get_index(_this__u8e3s4) {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return _this__u8e3s4 & 536870911;
  }
  function get_decision(_this__u8e3s4) {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return _this__u8e3s4 >> _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i();
  }
  function get_SUSPENDED_0() {
    return SUSPENDED_0;
  }
  var SUSPENDED_0;
  function get_RESUMED_0() {
    return RESUMED_0;
  }
  var RESUMED_0;
  function _get_handler__z70553($this) {
    return $this.handler_1;
  }
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.handler_1 = handler;
  }
  protoOf(InvokeOnCancel).invoke_7fb7sc_k$ = function (cause) {
    this.handler_1(cause);
  };
  protoOf(InvokeOnCancel).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  protoOf(InvokeOnCancel).toString = function () {
    return 'InvokeOnCancel[' + get_classSimpleName(this.handler_1) + '@' + get_hexAddress(this) + ']';
  };
  function get_DECISION_SHIFT() {
    return DECISION_SHIFT;
  }
  var DECISION_SHIFT;
  function get_INDEX_MASK() {
    return INDEX_MASK;
  }
  var INDEX_MASK;
  function _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i() {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return 29;
  }
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function _init_properties_CancellableContinuationImpl_kt__6rrtdd() {
    if (properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
    } else {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableDeferred() {
  }
  function CompletableDeferred_0(parent) {
    parent = parent === VOID ? null : parent;
    return new CompletableDeferredImpl(parent);
  }
  function $awaitCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.awaitInternal_pz51jj_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : isObject(suspendResult)) ? suspendResult : THROW_CCE();
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
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.initParentJob_4c2lht_k$(parent);
  }
  protoOf(CompletableDeferredImpl).get_onCancelComplete_4lfsth_k$ = function () {
    return true;
  };
  protoOf(CompletableDeferredImpl).getCompleted_nczk2z_k$ = function () {
    var tmp = this.getCompletedInternal_26f4i6_k$();
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(CompletableDeferredImpl).await_xhs9og_k$ = function ($completion) {
    var tmp = new $awaitCOROUTINE$2(this, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(CompletableDeferredImpl).get_onAwait_l48qpe_k$ = function () {
    var tmp = this.get_onAwaitInternal_onp3dh_k$();
    return isInterface(tmp, SelectClause1) ? tmp : THROW_CCE();
  };
  protoOf(CompletableDeferredImpl).complete_8y7ynm_k$ = function (value) {
    return this.makeCompleting_2ycklh_k$(value);
  };
  protoOf(CompletableDeferredImpl).completeExceptionally_7s0ccc_k$ = function (exception) {
    return this.makeCompleting_2ycklh_k$(new CompletedExceptionally(exception));
  };
  function CompletableJob() {
  }
  function _get__handled__q1dawe($this) {
    return $this._handled_1;
  }
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.cause_1 = cause;
    this._handled_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).get_cause_iplhs0_k$ = function () {
    return this.cause_1;
  };
  protoOf(CompletedExceptionally).get_handled_cq14k3_k$ = function () {
    return this._handled_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(CompletedExceptionally).makeHandled_ws9oq6_k$ = function () {
    return this._handled_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.cause_1 + ']';
  };
  function _get__resumed__kg85kj($this) {
    return $this._resumed_1;
  }
  function CancelledContinuation(continuation, cause, handled) {
    var tmp0_elvis_lhs = cause;
    CompletedExceptionally.call(this, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Continuation ' + continuation + ' was cancelled normally') : tmp0_elvis_lhs, handled);
    this._resumed_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).makeResumed_vjvawn_k$ = function () {
    return this._resumed_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    var tmp$ret$2;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp$ret$0 = tmp0__anonymous__q1qw7t;
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp$ret$1 = new CompletedExceptionally(recoverStackTrace(exception, caller));
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    return tmp$ret$2;
  }
  function toState_0(_this__u8e3s4, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp$ret$2;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp$ret$0 = !(onCancellation == null) ? new CompletedWithCancellation(tmp0__anonymous__q1qw7t, onCancellation) : tmp0__anonymous__q1qw7t;
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp$ret$1 = new CompletedExceptionally(exception);
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    return tmp$ret$2;
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.result_1 = result;
    this.onCancellation_1 = onCancellation;
  }
  protoOf(CompletedWithCancellation).get_result_iyg5d2_k$ = function () {
    return this.result_1;
  };
  protoOf(CompletedWithCancellation).get_onCancellation_no7t6d_k$ = function () {
    return this.onCancellation_1;
  };
  protoOf(CompletedWithCancellation).component1_7eebsc_k$ = function () {
    return this.result_1;
  };
  protoOf(CompletedWithCancellation).component2_7eebsb_k$ = function () {
    return this.onCancellation_1;
  };
  protoOf(CompletedWithCancellation).copy_eadg01_k$ = function (result, onCancellation) {
    return new CompletedWithCancellation(result, onCancellation);
  };
  protoOf(CompletedWithCancellation).copy$default_y4c1k2_k$ = function (result, onCancellation, $super) {
    result = result === VOID ? this.result_1 : result;
    onCancellation = onCancellation === VOID ? this.onCancellation_1 : onCancellation;
    return $super === VOID ? this.copy_eadg01_k$(result, onCancellation) : $super.copy_eadg01_k$.call(this, result, onCancellation);
  };
  protoOf(CompletedWithCancellation).toString = function () {
    return 'CompletedWithCancellation(result=' + toString_0(this.result_1) + ', onCancellation=' + this.onCancellation_1 + ')';
  };
  protoOf(CompletedWithCancellation).hashCode = function () {
    var result = this.result_1 == null ? 0 : hashCode(this.result_1);
    result = imul(result, 31) + hashCode(this.onCancellation_1) | 0;
    return result;
  };
  protoOf(CompletedWithCancellation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.result_1, tmp0_other_with_cast.result_1))
      return false;
    if (!equals(this.onCancellation_1, tmp0_other_with_cast.onCancellation_1))
      return false;
    return true;
  };
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      var tmp1_failure = recoverStackTrace(state.cause_1, uCont);
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp2_success = Companion_getInstance();
      var tmp3_success = (state == null ? true : isObject(state)) ? state : THROW_CCE();
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp3_success);
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key_0() {
    Key_instance = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key_0();
    return Key_instance;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  protoOf(CoroutineDispatcher).isDispatchNeeded_fmz9vn_k$ = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).limitedParallelism_glrman_k$ = function (parallelism) {
    checkParallelism(parallelism);
    return new LimitedDispatcher(this, parallelism);
  };
  protoOf(CoroutineDispatcher).dispatchYield_ww21f6_k$ = function (context, block) {
    return this.dispatch_o98ux7_k$(context, block);
  };
  protoOf(CoroutineDispatcher).interceptContinuation_gcmqkx_k$ = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).releaseInterceptedContinuation_4i98ok_k$ = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.release_wtm6d2_k$();
  };
  protoOf(CoroutineDispatcher).plus_jld99k_k$ = function (other) {
    return other;
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.get_j1ktw6_k$(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.handleException_w1h9is_k$(context, exception);
        return Unit_getInstance();
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleUncaughtCoroutineException(context, handlerException(exception, t));
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    handleUncaughtCoroutineException(context, exception);
  }
  function Key_1() {
    Key_instance_0 = this;
  }
  var Key_instance_0;
  function Key_getInstance_1() {
    if (Key_instance_0 == null)
      new Key_1();
    return Key_instance_0;
  }
  function CoroutineExceptionHandler() {
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.handlerException.<anonymous>' call
    // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function CoroutineExceptionHandler_0(handler) {
    return new _no_name_provided__qut3iv(handler);
  }
  function _no_name_provided__qut3iv($handler) {
    this.$handler_1 = $handler;
    AbstractCoroutineContextElement.call(this, Key_getInstance_1());
  }
  protoOf(_no_name_provided__qut3iv).handleException_w1h9is_k$ = function (context, exception) {
    return this.$handler_1(context, exception);
  };
  function Key_2() {
    Key_instance_1 = this;
  }
  var Key_instance_1;
  function Key_getInstance_2() {
    if (Key_instance_1 == null)
      new Key_2();
    return Key_instance_1;
  }
  function CoroutineName(name) {
    Key_getInstance_2();
    AbstractCoroutineContextElement.call(this, Key_getInstance_2());
    this.name_1 = name;
  }
  protoOf(CoroutineName).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(CoroutineName).toString = function () {
    return 'CoroutineName(' + this.name_1 + ')';
  };
  protoOf(CoroutineName).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(CoroutineName).copy_3t26ic_k$ = function (name) {
    return new CoroutineName(name);
  };
  protoOf(CoroutineName).copy$default_hajcdj_k$ = function (name, $super) {
    name = name === VOID ? this.name_1 : name;
    return $super === VOID ? this.copy_3t26ic_k$(name) : $super.copy_3t26ic_k$.call(this, name);
  };
  protoOf(CoroutineName).hashCode = function () {
    return getStringHashCode(this.name_1);
  };
  protoOf(CoroutineName).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CoroutineName))
      return false;
    var tmp0_other_with_cast = other instanceof CoroutineName ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    return true;
  };
  function CoroutineScope() {
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.get_j1ktw6_k$(Key_getInstance_3()) == null) ? context : context.plus_rgw9wi_k$(Job_0()));
  }
  function coroutineScope(block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.coroutineScope.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var coroutine = new ScopeCoroutine(tmp0__anonymous__q1qw7t.get_context_h02k06_k$(), tmp0__anonymous__q1qw7t);
    tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
    var tmp0 = tmp$ret$0;
    return tmp0;
  }
  function cancel_1(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_elvis_lhs = _this__u8e3s4.get_coroutineContext_115oqo_k$().get_j1ktw6_k$(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'Scope cannot be cancelled because it does not have a job: ' + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.cancel_4b7aim_k$(cause);
  }
  function cancel_2(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return cancel_1(_this__u8e3s4, CancellationException_init_$Create$_0(message, cause));
  }
  function GlobalScope() {
    GlobalScope_instance = this;
  }
  protoOf(GlobalScope).get_coroutineContext_115oqo_k$ = function () {
    return EmptyCoroutineContext_getInstance();
  };
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    if (GlobalScope_instance == null)
      new GlobalScope();
    return GlobalScope_instance;
  }
  function currentCoroutineContext($completion) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $completion.get_context_h02k06_k$();
    return tmp$ret$0;
  }
  function get_isActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.get_coroutineContext_115oqo_k$().get_j1ktw6_k$(Key_getInstance_3());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isActive_quafmh_k$();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  function values() {
    return [CoroutineStart_DEFAULT_getInstance(), CoroutineStart_LAZY_getInstance(), CoroutineStart_ATOMIC_getInstance(), CoroutineStart_UNDISPATCHED_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'DEFAULT':
        return CoroutineStart_DEFAULT_getInstance();
      case 'LAZY':
        return CoroutineStart_LAZY_getInstance();
      case 'ATOMIC':
        return CoroutineStart_ATOMIC_getInstance();
      case 'UNDISPATCHED':
        return CoroutineStart_UNDISPATCHED_getInstance();
      default:
        CoroutineStart_initEntries();
        THROW_ISE();
        break;
    }
  }
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_getInstance();
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).invoke_80e41m_k$ = function (block, completion) {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
    var tmp;
    switch (tmp0) {
      case 0:
        startCoroutineCancellable_1(block, completion);
        tmp = Unit_getInstance();
        break;
      case 2:
        startCoroutine(block, completion);
        tmp = Unit_getInstance();
        break;
      case 3:
        startCoroutineUndispatched(block, completion);
        tmp = Unit_getInstance();
        break;
      case 1:
        tmp = Unit_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).invoke_gvylz3_k$ = function (block, receiver, completion) {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
    var tmp;
    switch (tmp0) {
      case 0:
        startCoroutineCancellable(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 2:
        startCoroutine_0(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 3:
        startCoroutineUndispatched_0(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 1:
        tmp = Unit_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).get_isLazy_ew1d53_k$ = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_ATOMIC_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_ATOMIC_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function CopyableThrowable() {
  }
  function Deferred() {
  }
  function Delay() {
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.get_j1ktw6_k$(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function delay_0(timeMillis, $completion) {
    if (timeMillis.compareTo_n4fqi2_k$(new Long(0, 0)) <= 0)
      return Unit_getInstance();
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.initCancellability_sh6jkn_k$();
    // Inline function 'kotlinx.coroutines.delay.<anonymous>' call
    if (timeMillis.compareTo_n4fqi2_k$(Companion_getInstance_0().get_MAX_VALUE_54a9lf_k$()) < 0) {
      get_delay(cancellable.get_context_h02k06_k$()).scheduleResumeAfterDelay_5x4w1l_k$(timeMillis, cancellable);
    }
    tmp$ret$0 = cancellable.getResult_clfhg3_k$();
    var tmp0 = tmp$ret$0;
    return tmp0;
  }
  function delay_1(duration, $completion) {
    var tmp0 = delay_0(toDelayMillis(duration), $completion);
    return tmp0;
  }
  function DelayWithTimeoutDiagnostics() {
  }
  function toDelayMillis(_this__u8e3s4) {
    return Duration__compareTo_impl_pchp0f(_this__u8e3s4, Companion_getInstance_1().get_ZERO_jbbt8n_k$()) > 0 ? coerceAtLeast(_Duration___get_inWholeMilliseconds__impl__msfiry(_this__u8e3s4), new Long(1, 0)) : new Long(0, 0);
  }
  function get_DISPOSED_TASK() {
    _init_properties_EventLoop_common_kt__pwfggr();
    return DISPOSED_TASK;
  }
  var DISPOSED_TASK;
  function get_CLOSED_EMPTY() {
    _init_properties_EventLoop_common_kt__pwfggr();
    return CLOSED_EMPTY;
  }
  var CLOSED_EMPTY;
  function _set_useCount__kwzmz3($this, _set____db54di) {
    $this.useCount_1 = _set____db54di;
  }
  function _get_useCount__843bib($this) {
    return $this.useCount_1;
  }
  function _set_shared__q6vn2($this, _set____db54di) {
    $this.shared_1 = _set____db54di;
  }
  function _get_shared__qjozq($this) {
    return $this.shared_1;
  }
  function _set_unconfinedQueue__ri92ob($this, _set____db54di) {
    $this.unconfinedQueue_1 = _set____db54di;
  }
  function _get_unconfinedQueue__heiv5r($this) {
    return $this.unconfinedQueue_1;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.useCount_1 = new Long(0, 0);
    this.shared_1 = false;
    this.unconfinedQueue_1 = null;
  }
  protoOf(EventLoop).processNextEvent_jmndfc_k$ = function () {
    if (!this.processUnconfinedEvent_mypjl6_k$())
      return Companion_getInstance_0().get_MAX_VALUE_54a9lf_k$();
    return new Long(0, 0);
  };
  protoOf(EventLoop).get_isEmpty_zauvru_k$ = function () {
    return this.get_isUnconfinedQueueEmpty_mi405s_k$();
  };
  protoOf(EventLoop).get_nextTime_88vw7r_k$ = function () {
    var tmp0_elvis_lhs = this.unconfinedQueue_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance_0().get_MAX_VALUE_54a9lf_k$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    return queue.isEmpty_y1axqb_k$() ? Companion_getInstance_0().get_MAX_VALUE_54a9lf_k$() : new Long(0, 0);
  };
  protoOf(EventLoop).processUnconfinedEvent_mypjl6_k$ = function () {
    var tmp0_elvis_lhs = this.unconfinedQueue_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.removeFirstOrNull_eges3a_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.run_mw4iiu_k$();
    return true;
  };
  protoOf(EventLoop).shouldBeProcessedFromContext_tzcyz7_k$ = function () {
    return false;
  };
  protoOf(EventLoop).dispatchUnconfined_do6j6f_k$ = function (task) {
    var tmp0_elvis_lhs = this.unconfinedQueue_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = ArrayDeque_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.unconfinedQueue_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.addLast_i401o4_k$(task);
  };
  protoOf(EventLoop).get_isActive_quafmh_k$ = function () {
    return this.useCount_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0;
  };
  protoOf(EventLoop).get_isUnconfinedLoopActive_g78ri6_k$ = function () {
    return this.useCount_1.compareTo_n4fqi2_k$(delta(this, true)) >= 0;
  };
  protoOf(EventLoop).get_isUnconfinedQueueEmpty_mi405s_k$ = function () {
    var tmp0_safe_receiver = this.unconfinedQueue_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.isEmpty_y1axqb_k$();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  protoOf(EventLoop).incrementUseCount_ocukpa_k$ = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.useCount_1 = tmp0_this.useCount_1.plus_u6jwas_k$(delta(this, unconfined));
    if (!unconfined)
      this.shared_1 = true;
  };
  protoOf(EventLoop).incrementUseCount$default_cfnf22_k$ = function (unconfined, $super) {
    unconfined = unconfined === VOID ? false : unconfined;
    var tmp;
    if ($super === VOID) {
      this.incrementUseCount_ocukpa_k$(unconfined);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.incrementUseCount_ocukpa_k$.call(this, unconfined);
    }
    return tmp;
  };
  protoOf(EventLoop).decrementUseCount_saho26_k$ = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.useCount_1 = tmp0_this.useCount_1.minus_llf5ei_k$(delta(this, unconfined));
    if (this.useCount_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0)
      return Unit_getInstance();
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.shared_1) {
      this.shutdown_cq5p8b_k$();
    }
  };
  protoOf(EventLoop).decrementUseCount$default_fi51yi_k$ = function (unconfined, $super) {
    unconfined = unconfined === VOID ? false : unconfined;
    var tmp;
    if ($super === VOID) {
      this.decrementUseCount_saho26_k$(unconfined);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.decrementUseCount_saho26_k$.call(this, unconfined);
    }
    return tmp;
  };
  protoOf(EventLoop).limitedParallelism_glrman_k$ = function (parallelism) {
    checkParallelism(parallelism);
    return this;
  };
  protoOf(EventLoop).shutdown_cq5p8b_k$ = function () {
  };
  function _get_ref__e6fxpa($this) {
    return $this.ref_1;
  }
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.ref_1 = commonThreadLocal(new Symbol('ThreadLocalEventLoop'));
  }
  protoOf(ThreadLocalEventLoop).get_eventLoop_913645_k$ = function () {
    var tmp0_elvis_lhs = this.ref_1.get_26vq_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = createEventLoop();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().ref_1.set_hda1d2_k$(tmp0_also);
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ThreadLocalEventLoop).currentOrNull_z5p8mb_k$ = function () {
    return this.ref_1.get_26vq_k$();
  };
  protoOf(ThreadLocalEventLoop).resetEventLoop_a6lzlu_k$ = function () {
    this.ref_1.set_hda1d2_k$(null);
  };
  protoOf(ThreadLocalEventLoop).setEventLoop_d3g3n0_k$ = function (eventLoop) {
    this.ref_1.set_hda1d2_k$(eventLoop);
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  var properties_initialized_EventLoop_common_kt_cfxg9p;
  function _init_properties_EventLoop_common_kt__pwfggr() {
    if (properties_initialized_EventLoop_common_kt_cfxg9p) {
    } else {
      properties_initialized_EventLoop_common_kt_cfxg9p = true;
      DISPOSED_TASK = new Symbol('REMOVED_TASK');
      CLOSED_EMPTY = new Symbol('CLOSED_EMPTY');
    }
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function DisposableHandle() {
  }
  function Key_3() {
    Key_instance_2 = this;
  }
  var Key_instance_2;
  function Key_getInstance_3() {
    if (Key_instance_2 == null)
      new Key_3();
    return Key_instance_2;
  }
  function Job() {
  }
  function ChildJob() {
  }
  function ParentJob() {
  }
  function ChildHandle() {
  }
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  protoOf(NonDisposableHandle).get_parent_hy4reb_k$ = function () {
    return null;
  };
  protoOf(NonDisposableHandle).dispose_3n44we_k$ = function () {
  };
  protoOf(NonDisposableHandle).childCancelled_fdoq8t_k$ = function (cause) {
    return false;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.get_j1ktw6_k$(Key_getInstance_3());
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.get_isActive_quafmh_k$())
      throw _this__u8e3s4.getCancellationException_8i1q6u_k$();
  }
  function Job_0(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.get_j1ktw6_k$(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = "Current context doesn't contain Job in it: " + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancelAndJoin(_this__u8e3s4, $completion) {
    _this__u8e3s4.cancel$default_64jlsz_k$();
    var tmp0 = _this__u8e3s4.join_kbq7u1_k$($completion);
    return tmp0;
  }
  function get_isActive_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.get_j1ktw6_k$(Key_getInstance_3());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isActive_quafmh_k$();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function cancel_3(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return _this__u8e3s4.cancel_4b7aim_k$(CancellationException_init_$Create$_0(message, cause));
  }
  function disposeOnCompletion(_this__u8e3s4, handle) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new DisposeOnCompletion(handle);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return _this__u8e3s4.invokeOnCompletion_t2apld_k$(tmp$ret$1);
  }
  function cancel_4(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_safe_receiver = _this__u8e3s4.get_j1ktw6_k$(Key_getInstance_3());
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.cancel_4b7aim_k$(cause);
    }
  }
  function get_COMPLETING_ALREADY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    _init_properties_JobSupport_kt__68f172();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    _init_properties_JobSupport_kt__68f172();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.isActive_1 = isActive;
  }
  protoOf(Empty).get_isActive_quafmh_k$ = function () {
    return this.isActive_1;
  };
  protoOf(Empty).get_list_wopuqv_k$ = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.isActive_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LinkedListHead.call(this);
  }
  protoOf(NodeList).get_isActive_quafmh_k$ = function () {
    return true;
  };
  protoOf(NodeList).get_list_wopuqv_k$ = function () {
    return this;
  };
  protoOf(NodeList).getString_xqex6i_k$ = function (state) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    tmp0_apply.append_ssq29y_k$('List{');
    tmp0_apply.append_ssq29y_k$(state);
    tmp0_apply.append_ssq29y_k$('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = this.get__next_inmai1_k$();
    while (!equals(cur, this)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        if (first)
          first = false;
        else {
          tmp0_apply.append_ssq29y_k$(', ');
        }
        tmp0_apply.append_t8pm91_k$(tmp0__anonymous__q1qw7t);
      }
      cur = cur.get__next_inmai1_k$();
    }
    tmp0_apply.append_ssq29y_k$(']');
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.getString_xqex6i_k$('Active') : protoOf(LinkedListHead).toString.call(this);
  };
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  protoOf(JobNode).set_job_d610gu_k$ = function (_set____db54di) {
    this.job_1 = _set____db54di;
  };
  protoOf(JobNode).get_job_18j2r0_k$ = function () {
    var tmp = this.job_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).get_isActive_quafmh_k$ = function () {
    return true;
  };
  protoOf(JobNode).get_list_wopuqv_k$ = function () {
    return null;
  };
  protoOf(JobNode).dispose_3n44we_k$ = function () {
    return this.get_job_18j2r0_k$().removeNode_o3o6t1_k$(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.get_job_18j2r0_k$()) + ']';
  };
  function _get_select__irrld($this) {
    return $this.select_1;
  }
  function _get__isCompleting__kxhw32($this) {
    return $this._isCompleting_1;
  }
  function _get__rootCause__pzi6w3($this) {
    return $this._rootCause_1;
  }
  function _get__exceptionsHolder__e2tfjy($this) {
    return $this._exceptionsHolder_1;
  }
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this._exceptionsHolder_1.set_kotlinx$atomicfu$value_koguff_k$(value);
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this._exceptionsHolder_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function _get_parent__oo9xup($this) {
    return $this.parent_1;
  }
  function _get_state__b8zcm8($this) {
    return $this.state_1;
  }
  function _get_child__j05w3v($this) {
    return $this.child_1;
  }
  function _get_proposedUpdate__cai7fg($this) {
    return $this.proposedUpdate_1;
  }
  function _get_job__e6b14k($this) {
    return $this.job_1;
  }
  function _get_select__irrld_0($this) {
    return $this.select_1;
  }
  function _get__state__37adl3_0($this) {
    return $this._state_1;
  }
  function _get__parentHandle__f9kzhc_0($this) {
    return $this._parentHandle_1;
  }
  function loopOnState($this, block) {
    while (true) {
      block($this.get_state_iypx7s_k$());
    }
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_cause_iplhs0_k$();
    var wasCancelling;
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.get_isCancelling_o1apv_k$();
    var exceptions = state.sealLocked_11gdw4_k$(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    tmp$ret$0 = finalCause;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var finalException = tmp$ret$2;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.handleJobException_oc4gxk_k$(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).makeHandled_ws9oq6_k$();
      }
    }
    if (!wasCancelling) {
      $this.onCancelling_bxyn9n_k$(finalException);
    }
    $this.onCompletionInternal_39c1g8_k$(finalState);
    var casSuccess = $this._state_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.isEmpty_y1axqb_k$()) {
      if (state.get_isCancelling_o1apv_k$()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        var tmp0_elvis_lhs = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs, null, $this);
        return tmp$ret$0;
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = exceptions.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
        tmp$ret$1 = !(element instanceof CancellationException);
        if (tmp$ret$1) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.get_fkrdnv_k$(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = exceptions.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_0.next_20eer_k$();
          var tmp$ret$3;
          // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          tmp$ret$3 = tmp;
          if (tmp$ret$3) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.get_size_woubt6_k$() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions.get_size_woubt6_k$());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var exception = tmp0_iterator.next_20eer_k$();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.add_1j60pz_k$(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this._state_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.onCancelling_bxyn9n_k$(null);
    $this.onCompletionInternal_39c1g8_k$(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.get_parentHandle_gmoqez_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.dispose_3n44we_k$();
      $this.set_parentHandle_voxu0m_k$(NonDisposableHandle_getInstance());
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_cause_iplhs0_k$();
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.handleOnCompletionException_o179kb_k$(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + $this, ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.get_list_wopuqv_k$();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.onCancelling_bxyn9n_k$(cause);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = list.get__next_inmai1_k$();
    while (!equals(cur, list)) {
      if (cur instanceof JobCancellingNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        try {
          tmp0__anonymous__q1qw7t.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              var tmp$ret$0;
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp$ret$0 = tmp0_safe_receiver;
              tmp = tmp$ret$0;
            }
            var tmp1_elvis_lhs = tmp;
            if (tmp1_elvis_lhs == null) {
              var tmp$ret$1;
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, ex);
              tmp$ret$1 = Unit_getInstance();
            } else
              tmp1_elvis_lhs;
          } else {
            throw $p;
          }
        }
      }
      cur = cur.get__next_inmai1_k$();
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.handleOnCompletionException_o179kb_k$(tmp0_safe_receiver_0);
      tmp$ret$2 = Unit_getInstance();
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.get_isScopedCoroutine_rwmmff_k$())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.get_parentHandle_gmoqez_k$();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }
    return parent.childCancelled_fdoq8t_k$(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = _this__u8e3s4.get__next_inmai1_k$();
    while (!equals(cur, _this__u8e3s4)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        try {
          tmp0__anonymous__q1qw7t.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              var tmp$ret$0;
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp$ret$0 = tmp0_safe_receiver;
              tmp = tmp$ret$0;
            }
            var tmp1_elvis_lhs = tmp;
            if (tmp1_elvis_lhs == null) {
              var tmp$ret$1;
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, ex);
              tmp$ret$1 = Unit_getInstance();
            } else
              tmp1_elvis_lhs;
          } else {
            throw $p;
          }
        }
      }
      cur = cur.get__next_inmai1_k$();
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.handleOnCompletionException_o179kb_k$(tmp0_safe_receiver_0);
      tmp$ret$2 = Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    var tmp0_subject = state;
    if (tmp0_subject instanceof Empty) {
      if (state.isActive_1)
        return 0;
      if (!$this._state_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.onStart_qth026_k$();
      return 1;
    } else {
      if (tmp0_subject instanceof InactiveNodeList) {
        if (!$this._state_1.atomicfu$compareAndSet(state, state.list_1))
          return -1;
        $this.onStart_qth026_k$();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.JobSupport.makeNode.<anonymous>' call
        // Inline function 'kotlinx.coroutines.assert' call
        tmp$ret$0 = tmp1_safe_receiver;
        tmp_0 = tmp$ret$0;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.job_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIf' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.addLastAtomic.<anonymous>' call
      tmp$ret$0 = $this.get_state_iypx7s_k$() === expect;
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.addLast_uyctnf_k$(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.isActive_1 ? list : new InactiveNodeList(list);
    $this._state_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.addOneIfEmpty_cbgboi_k$(new NodeList());
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    tmp$ret$0 = state.get__next_inmai1_k$();
    var list = tmp$ret$0;
    $this._state_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.joinInternal.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $this.get_state_iypx7s_k$();
      if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false))
        return false;
      if (startInternal($this, tmp0__anonymous__q1qw7t) >= 0)
        return true;
    }
  }
  function joinSuspend($this, $completion) {
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.initCancellability_sh6jkn_k$();
    // Inline function 'kotlinx.coroutines.JobSupport.joinSuspend.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ResumeOnCompletion(cancellable);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    disposeOnCancellation(cancellable, $this.invokeOnCompletion_t2apld_k$(tmp$ret$1));
    tmp$ret$2 = cancellable.getResult_clfhg3_k$();
    var tmp0 = tmp$ret$2;
    return tmp0;
  }
  function registerSelectForOnJoin($this, select, ignoredParam) {
    if (!joinInternal($this)) {
      select.selectInRegistrationPhase_lcwf8x_k$(Unit_getInstance());
      return Unit_getInstance();
    }
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new SelectOnJoinCompletionHandler($this, select);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    var disposableHandle = $this.invokeOnCompletion_t2apld_k$(tmp$ret$1);
    select.disposeOnCompletion_c9dn6_k$(disposableHandle);
  }
  function SelectOnJoinCompletionHandler($outer, select) {
    this.$this_1 = $outer;
    JobNode.call(this);
    this.select_1 = select;
  }
  protoOf(SelectOnJoinCompletionHandler).invoke_7fb7sc_k$ = function (cause) {
    this.select_1.trySelect_fbege0_k$(this.$this_1, Unit_getInstance());
  };
  protoOf(SelectOnJoinCompletionHandler).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $this.get_state_iypx7s_k$();
      var tmp;
      if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (tmp0__anonymous__q1qw7t instanceof Finishing) {
          tmp_0 = tmp0__anonymous__q1qw7t.get_isCompleting_vi2bwp_k$();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp0_subject = cause;
    var tmp;
    if (tmp0_subject == null ? true : tmp0_subject instanceof Error) {
      var tmp1_elvis_lhs = cause;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        var tmp0_elvis_lhs = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs, null, $this);
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).getChildJobCancellationCause_wx9uoh_k$();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$8;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
        var tmp0__anonymous__q1qw7t = $this.get_state_iypx7s_k$();
        var tmp0_subject = tmp0__anonymous__q1qw7t;
        if (tmp0_subject instanceof Finishing) {
          var tmp$ret$5;
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$4;
          // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
          var tmp$ret$3;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (tmp0__anonymous__q1qw7t.get_isSealed_zdv4z3_k$())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp0__anonymous__q1qw7t.get_isCancelling_o1apv_k$();
          if (!(cause == null) ? true : !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              var tmp$ret$0;
              // Inline function 'kotlin.also' call
              var tmp0_also = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also;
              tmp$ret$0 = tmp0_also;
              tmp = tmp$ret$0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp0__anonymous__q1qw7t.addExceptionLocked_jeuhbd_k$(causeException);
          }
          var tmp$ret$2;
          // Inline function 'kotlin.takeIf' call
          var tmp1_takeIf = tmp0__anonymous__q1qw7t.get_rootCause_69dwxu_k$();
          // Inline function 'kotlin.contracts.contract' call
          var tmp_0;
          var tmp$ret$1;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$1 = !wasCancelling;
          if (tmp$ret$1) {
            tmp_0 = tmp1_takeIf;
          } else {
            tmp_0 = null;
          }
          tmp$ret$2 = tmp_0;
          tmp$ret$3 = tmp$ret$2;
          tmp$ret$4 = tmp$ret$3;
          tmp$ret$5 = tmp$ret$4;
          var notifyRootCause = tmp$ret$5;
          var tmp1_safe_receiver = notifyRootCause;
          if (tmp1_safe_receiver == null)
            null;
          else {
            var tmp$ret$6;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            notifyCancelling($this, tmp0__anonymous__q1qw7t.list_1, tmp1_safe_receiver);
            tmp$ret$6 = Unit_getInstance();
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              var tmp$ret$7;
              // Inline function 'kotlin.also' call
              var tmp0_also_0 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also_0;
              tmp$ret$7 = tmp0_also_0;
              tmp_1 = tmp$ret$7;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (tmp0__anonymous__q1qw7t.get_isActive_quafmh_k$()) {
              if (tryMakeCancelling($this, tmp0__anonymous__q1qw7t, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var tmp1_error = 'Cannot happen in ' + toString_0(tmp0__anonymous__q1qw7t);
                throw IllegalStateException_init_$Create$(toString(tmp1_error));
              } else if (finalState === get_COMPLETING_RETRY()) {
                tmp$ret$8 = Unit_getInstance();
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state.get_list_wopuqv_k$();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_subject = state;
      var tmp_0;
      if (tmp0_subject instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (tmp0_subject instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var tmp0_error = 'State should have list: ' + state;
          throw IllegalStateException_init_$Create$(toString(tmp0_error));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this._state_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    var tmp$ret$4;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (finishing.get_isCompleting_vi2bwp_k$())
      return get_COMPLETING_ALREADY();
    finishing.set_isCompleting_i5ljas_k$(true);
    if (!(finishing === state)) {
      if (!$this._state_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.get_isCancelling_o1apv_k$();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      finishing.addExceptionLocked_jeuhbd_k$(tmp0_safe_receiver.get_cause_iplhs0_k$());
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp$ret$2;
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = finishing.get_rootCause_69dwxu_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
    tmp$ret$1 = !wasCancelling;
    if (tmp$ret$1) {
      tmp_0 = tmp0_takeIf;
    } else {
      tmp_0 = null;
    }
    tmp$ret$2 = tmp_0;
    notifyRootCause = tmp$ret$2;
    tmp$ret$3 = Unit_getInstance();
    tmp$ret$4 = tmp$ret$3;
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      notifyCancelling($this, list, tmp2_safe_receiver);
      tmp$ret$5 = Unit_getInstance();
    }
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_cause_iplhs0_k$();
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.get_list_wopuqv_k$();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var tmp = child_0.childJob_1;
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        var tmp0__get_asHandler__gq3rkj = new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0);
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
        tmp$ret$1 = tmp$ret$0;
        var handle = tmp.invokeOnCompletion$default_gp7u53_k$(VOID, false, tmp$ret$1);
        if (!(handle === NonDisposableHandle_getInstance()))
          return true;
        var tmp0_elvis_lhs = nextChild(child_0, $this_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp_0;
        var tmp0 = $this_0;
        var tmp1 = state_0;
        var tmp2 = nextChild_0;
        var tmp3 = proposedUpdate_0;
        $this_0 = tmp0;
        state_0 = tmp1;
        child_0 = tmp2;
        proposedUpdate_0 = tmp3;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.afterCompletion_2ogq6g_k$(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      var tmp0__get_isRemoved__hsfvgr = cur;
      tmp$ret$0 = tmp0__get_isRemoved__hsfvgr.get__removed_p9514a_k$();
      if (!tmp$ret$0) {
        break $l$loop;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var tmp1__get_prevNode__b1i0ed = cur;
      tmp$ret$1 = tmp1__get_prevNode__b1i0ed.get__prev_inntnt_k$();
      cur = tmp$ret$1;
    }
    $l$loop_0: while (true) {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
      var tmp2__get_nextNode__ek7k4a = cur;
      tmp$ret$2 = tmp2__get_nextNode__ek7k4a.get__next_inmai1_k$();
      cur = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      var tmp3__get_isRemoved__lodk3s = cur;
      tmp$ret$3 = tmp3__get_isRemoved__lodk3s.get__removed_p9514a_k$();
      if (tmp$ret$3)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.get_isCancelling_o1apv_k$() ? 'Cancelling' : state.get_isCompleting_vi2bwp_k$() ? 'Completing' : 'Active';
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
        tmp = state.get_isActive_quafmh_k$() ? 'Active' : 'New';
      } else {
        if (tmp0_subject instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this.list_1 = list;
    this._isCompleting_1 = atomic$boolean$1(isCompleting);
    this._rootCause_1 = atomic$ref$1(rootCause);
    this._exceptionsHolder_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).get_list_wopuqv_k$ = function () {
    return this.list_1;
  };
  protoOf(Finishing).set_isCompleting_i5ljas_k$ = function (value) {
    this._isCompleting_1.set_kotlinx$atomicfu$value_rpu4go_k$(value);
  };
  protoOf(Finishing).get_isCompleting_vi2bwp_k$ = function () {
    return this._isCompleting_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(Finishing).set_rootCause_s52kuy_k$ = function (value) {
    this._rootCause_1.set_kotlinx$atomicfu$value_koguff_k$(value);
  };
  protoOf(Finishing).get_rootCause_69dwxu_k$ = function () {
    return this._rootCause_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(Finishing).get_isSealed_zdv4z3_k$ = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).get_isCancelling_o1apv_k$ = function () {
    return !(this.get_rootCause_69dwxu_k$() == null);
  };
  protoOf(Finishing).get_isActive_quafmh_k$ = function () {
    return this.get_rootCause_69dwxu_k$() == null;
  };
  protoOf(Finishing).sealLocked_11gdw4_k$ = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
        tmp0_also.add_1j60pz_k$(eh);
        tmp$ret$0 = tmp0_also;
        tmp = tmp$ret$0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var tmp1_error = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(tmp1_error));
        }
      }
    }
    var list = tmp;
    var rootCause = this.get_rootCause_69dwxu_k$();
    var tmp0_safe_receiver = rootCause;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      list.add_ydlf05_k$(0, tmp0_safe_receiver);
      tmp$ret$1 = Unit_getInstance();
    }
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.add_1j60pz_k$(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).addExceptionLocked_jeuhbd_k$ = function (exception) {
    var rootCause = this.get_rootCause_69dwxu_k$();
    if (rootCause == null) {
      this.set_rootCause_s52kuy_k$(exception);
      return Unit_getInstance();
    }
    if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        var tmp$ret$0;
        // Inline function 'kotlin.apply' call
        var tmp0_apply = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.addExceptionLocked.<anonymous>' call
        tmp0_apply.add_1j60pz_k$(eh);
        tmp0_apply.add_1j60pz_k$(exception);
        tmp$ret$0 = tmp0_apply;
        _set_exceptionsHolder__tqm22h(this, tmp$ret$0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).add_1j60pz_k$(exception);
        } else {
          var tmp1_error = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(tmp1_error));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.get_isCancelling_o1apv_k$() + ', completing=' + this.get_isCompleting_vi2bwp_k$() + ', rootCause=' + this.get_rootCause_69dwxu_k$() + ', exceptions=' + toString_0(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.list_1 + ']';
  };
  function _get_isCancelling__hlz7m9(_this__u8e3s4, $this) {
    var tmp;
    if (_this__u8e3s4 instanceof Finishing) {
      tmp = _this__u8e3s4.get_isCancelling_o1apv_k$();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.parent_1 = parent;
    this.state_1 = state;
    this.child_1 = child;
    this.proposedUpdate_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).invoke_7fb7sc_k$ = function (cause) {
    continueCompleting(this.parent_1, this.state_1, this.child_1, this.proposedUpdate_1);
  };
  protoOf(ChildCompletion).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, get_MODE_CANCELLABLE());
    this.job_1 = job;
  }
  protoOf(AwaitContinuation).getContinuationCancellationCause_62o4c9_k$ = function (parent) {
    var state = this.job_1.get_state_iypx7s_k$();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.get_rootCause_69dwxu_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
    }
    if (state instanceof CompletedExceptionally)
      return state.get_cause_iplhs0_k$();
    return parent.getCancellationException_8i1q6u_k$();
  };
  protoOf(AwaitContinuation).nameString_cd9e9w_k$ = function () {
    return 'AwaitContinuation';
  };
  function awaitSuspend($this, $completion) {
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.JobSupport.awaitSuspend.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cont = new AwaitContinuation(intercepted(tmp0__anonymous__q1qw7t), $this);
    cont.initCancellability_sh6jkn_k$();
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ResumeAwaitOnCompletion(cont);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    disposeOnCancellation(cont, $this.invokeOnCompletion_t2apld_k$(tmp$ret$1));
    tmp$ret$2 = cont.getResult_clfhg3_k$();
    var tmp0 = tmp$ret$2;
    return tmp0;
  }
  function onAwaitInternalRegFunc($this, select, ignoredParam) {
    $l$loop: while (true) {
      var state = $this.get_state_iypx7s_k$();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        var tmp;
        if (state instanceof CompletedExceptionally) {
          tmp = state;
        } else {
          tmp = unboxState(state);
        }
        var result = tmp;
        select.selectInRegistrationPhase_lcwf8x_k$(result);
        return Unit_getInstance();
      }
      if (startInternal($this, state) >= 0)
        break $l$loop;
    }
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new SelectOnAwaitCompletionHandler($this, select);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    var disposableHandle = $this.invokeOnCompletion_t2apld_k$(tmp$ret$1);
    select.disposeOnCompletion_c9dn6_k$(disposableHandle);
  }
  function onAwaitInternalProcessResFunc($this, ignoredParam, result) {
    if (result instanceof CompletedExceptionally)
      throw result.get_cause_iplhs0_k$();
    return result;
  }
  function SelectOnAwaitCompletionHandler($outer, select) {
    this.$this_1 = $outer;
    JobNode.call(this);
    this.select_1 = select;
  }
  protoOf(SelectOnAwaitCompletionHandler).invoke_7fb7sc_k$ = function (cause) {
    var state = this.$this_1.get_state_iypx7s_k$();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = state;
    } else {
      tmp = unboxState(state);
    }
    var result = tmp;
    this.select_1.trySelect_fbege0_k$(this.$this_1, result);
  };
  protoOf(SelectOnAwaitCompletionHandler).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  function JobSupport$registerSelectForOnJoin$ref() {
    var l = function (p0, p1, p2) {
      registerSelectForOnJoin(p0, p1, p2);
      return Unit_getInstance();
    };
    l.callableName = 'registerSelectForOnJoin';
    return l;
  }
  function JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JobSupport$_get_children_$slambda_k839f8).invoke_6hwafz_k$ = function ($this$sequence, $completion) {
    var tmp = this.create_d86qwy_k$($this$sequence, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_6hwafz_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(8);
            this.state0__1 = this.this$0__1.get_state_iypx7s_k$();
            var tmp_0 = this.state0__1;
            if (tmp_0 instanceof ChildHandleNode) {
              this.set_state_a96kl8_k$(6);
              suspendResult = this.$this$sequence_1.yield_24z9an_k$(this.state0__1.childJob_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.state0__1;
              if (!(tmp_1 == null) ? isInterface(tmp_1, Incomplete) : false) {
                this.tmp0_safe_receiver1__1 = this.state0__1.get_list_wopuqv_k$();
                if (this.tmp0_safe_receiver1__1 == null) {
                  this.WHEN_RESULT2__1 = null;
                  this.set_state_a96kl8_k$(5);
                  continue $sm;
                } else {
                  this.cur3__1 = this.tmp0_safe_receiver1__1.get__next_inmai1_k$();
                  this.set_state_a96kl8_k$(1);
                  continue $sm;
                }
              } else {
                this.set_state_a96kl8_k$(7);
                continue $sm;
              }
            }

            break;
          case 1:
            if (!!equals(this.cur3__1, this.tmp0_safe_receiver1__1)) {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

            var tmp_2 = this.cur3__1;
            if (tmp_2 instanceof ChildHandleNode) {
              var tmp_3 = this;
              tmp_3.tmp0__anonymous_4_q5x4yb_1 = this.cur3__1;
              this.set_state_a96kl8_k$(2);
              suspendResult = this.$this$sequence_1.yield_24z9an_k$(this.tmp0__anonymous_4_q5x4yb_1.childJob_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

            break;
          case 2:
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            this.cur3__1 = this.cur3__1.get__next_inmai1_k$();
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 4:
            this.WHEN_RESULT2__1 = Unit_getInstance();
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 5:
            ;
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 6:
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 7:
            return Unit_getInstance();
          case 8:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 8) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).create_d86qwy_k$ = function ($this$sequence, completion) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this.this$0__1, completion);
    i.$this$sequence_1 = $this$sequence;
    return i;
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).create_xubfvz_k$ = function (value, completion) {
    return this.create_d86qwy_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  function JobSupport$_get_children_$slambda_k839f8_0(this$0, resultContinuation) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.invoke_6hwafz_k$($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JobSupport$onAwaitInternalRegFunc$ref() {
    var l = function (p0, p1, p2) {
      onAwaitInternalRegFunc(p0, p1, p2);
      return Unit_getInstance();
    };
    l.callableName = 'onAwaitInternalRegFunc';
    return l;
  }
  function JobSupport$onAwaitInternalProcessResFunc$ref() {
    var l = function (p0, p1, p2) {
      return onAwaitInternalProcessResFunc(p0, p1, p2);
    };
    l.callableName = 'onAwaitInternalProcessResFunc';
    return l;
  }
  function JobSupport(active) {
    this._state_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this._parentHandle_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).get_key_18j28a_k$ = function () {
    return Key_getInstance_3();
  };
  protoOf(JobSupport).set_parentHandle_voxu0m_k$ = function (value) {
    this._parentHandle_1.set_kotlinx$atomicfu$value_koguff_k$(value);
  };
  protoOf(JobSupport).get_parentHandle_gmoqez_k$ = function () {
    return this._parentHandle_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(JobSupport).get_parent_hy4reb_k$ = function () {
    var tmp0_safe_receiver = this.get_parentHandle_gmoqez_k$();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_parent_hy4reb_k$();
  };
  protoOf(JobSupport).initParentJob_4c2lht_k$ = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.set_parentHandle_voxu0m_k$(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }
    parent.start_1tchgi_k$();
    var handle = parent.attachChild_ik9c8b_k$(this);
    this.set_parentHandle_voxu0m_k$(handle);
    if (this.get_isCompleted_a6j6c8_k$()) {
      handle.dispose_3n44we_k$();
      this.set_parentHandle_voxu0m_k$(NonDisposableHandle_getInstance());
    }
  };
  protoOf(JobSupport).get_state_iypx7s_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.<get-state>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (!(tmp1__anonymous__uwfjfc instanceof OpDescriptor))
        return tmp1__anonymous__uwfjfc;
      tmp1__anonymous__uwfjfc.perform_8emi3i_k$(this);
    }
  };
  protoOf(JobSupport).get_isActive_quafmh_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.get_isActive_quafmh_k$();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).get_isCompleted_a6j6c8_k$ = function () {
    var tmp = this.get_state_iypx7s_k$();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).get_isCancelled_trk8pu_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      var tmp_0;
      if (state instanceof Finishing) {
        tmp_0 = state.get_isCancelling_o1apv_k$();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobSupport).start_1tchgi_k$ = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.get_state_iypx7s_k$();
      var tmp0_subject = startInternal(this, tmp0__anonymous__q1qw7t);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).onStart_qth026_k$ = function () {
  };
  protoOf(JobSupport).getCancellationException_8i1q6u_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.get_rootCause_69dwxu_k$();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.toCancellationException_8ve25p_k$(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString(tmp1_error));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.toCancellationException$default_9ghy63_k$(state.get_cause_iplhs0_k$());
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).toCancellationException_8ve25p_k$ = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs_0 = message;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs_0, _this__u8e3s4, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).toCancellationException$default_9ghy63_k$ = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.toCancellationException_8ve25p_k$(_this__u8e3s4, message) : $super.toCancellationException_8ve25p_k$.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).get_completionCause_bxx3i4_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_elvis_lhs = state.get_rootCause_69dwxu_k$();
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp0_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString(tmp1_error));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = state.get_cause_iplhs0_k$();
        } else {
          tmp = null;
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).get_completionCauseHandled_bdr920_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.get_state_iypx7s_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.JobSupport.<get-completionCauseHandled>.<anonymous>' call
    var tmp;
    if (tmp0_let instanceof CompletedExceptionally) {
      tmp = tmp0_let.get_handled_cq14k3_k$();
    } else {
      tmp = false;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(JobSupport).invokeOnCompletion_t2apld_k$ = function (handler) {
    return this.invokeOnCompletion_npwpyn_k$(false, true, handler);
  };
  protoOf(JobSupport).invokeOnCompletion_npwpyn_k$ = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletion.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.get_state_iypx7s_k$();
        var tmp0_subject = tmp0__anonymous__q1qw7t;
        if (tmp0_subject instanceof Empty) {
          if (tmp0__anonymous__q1qw7t.isActive_1) {
            if (this._state_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, node))
              return node;
          } else {
            promoteEmptyToNodeList(this, tmp0__anonymous__q1qw7t);
          }
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
            var list = tmp0__anonymous__q1qw7t.get_list_wopuqv_k$();
            if (list == null) {
              promoteSingleToNodeList(this, tmp0__anonymous__q1qw7t instanceof JobNode ? tmp0__anonymous__q1qw7t : THROW_CCE());
            } else {
              var rootCause = null;
              var handle = NonDisposableHandle_getInstance();
              var tmp;
              if (onCancelling) {
                tmp = tmp0__anonymous__q1qw7t instanceof Finishing;
              } else {
                tmp = false;
              }
              if (tmp) {
                var tmp$ret$3;
                // Inline function 'kotlinx.coroutines.internal.synchronized' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$2;
                // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
                rootCause = tmp0__anonymous__q1qw7t.get_rootCause_69dwxu_k$();
                var tmp_0;
                var tmp_1;
                if (rootCause == null) {
                  tmp_1 = true;
                } else {
                  var tmp_2;
                  var tmp$ret$0;
                  // Inline function 'kotlinx.coroutines.isHandlerOf' call
                  tmp$ret$0 = handler instanceof ChildHandleNode;
                  if (tmp$ret$0) {
                    tmp_2 = !tmp0__anonymous__q1qw7t.get_isCompleting_vi2bwp_k$();
                  } else {
                    tmp_2 = false;
                  }
                  tmp_1 = tmp_2;
                }
                if (tmp_1) {
                  if (!addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node)) {
                    tmp$ret$1 = Unit_getInstance();
                    break $l$block;
                  }
                  if (rootCause == null)
                    return node;
                  handle = node;
                  tmp_0 = Unit_getInstance();
                }
                tmp$ret$2 = tmp_0;
                tmp$ret$3 = tmp$ret$2;
              }
              if (!(rootCause == null)) {
                if (invokeImmediately) {
                  invokeIt(handler, rootCause);
                }
                return handle;
              } else {
                if (addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node))
                  return node;
              }
            }
          } else {
            if (invokeImmediately) {
              var tmp1_safe_receiver = tmp0__anonymous__q1qw7t instanceof CompletedExceptionally ? tmp0__anonymous__q1qw7t : null;
              invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_cause_iplhs0_k$());
            }
            return NonDisposableHandle_getInstance();
          }
        }
      }
    }
  };
  protoOf(JobSupport).join_kbq7u1_k$ = function ($completion) {
    if (!joinInternal(this)) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.getCoroutineContext' call
      tmp$ret$0 = $completion.get_context_h02k06_k$();
      ensureActive(tmp$ret$0);
      return Unit_getInstance();
    }
    var tmp0 = joinSuspend(this, $completion);
    return tmp0;
  };
  protoOf(JobSupport).get_onJoin_hnj4j6_k$ = function () {
    var tmp = JobSupport$registerSelectForOnJoin$ref();
    return new SelectClause0Impl(this, typeof tmp === 'function' ? tmp : THROW_CCE());
  };
  protoOf(JobSupport).removeNode_o3o6t1_k$ = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.get_state_iypx7s_k$();
      var tmp0_subject = tmp0__anonymous__q1qw7t;
      if (tmp0_subject instanceof JobNode) {
        if (!(tmp0__anonymous__q1qw7t === node))
          return Unit_getInstance();
        if (this._state_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, get_EMPTY_ACTIVE()))
          return Unit_getInstance();
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          if (!(tmp0__anonymous__q1qw7t.get_list_wopuqv_k$() == null)) {
            node.remove_fgfybg_k$();
          }
          return Unit_getInstance();
        } else {
          return Unit_getInstance();
        }
      }
    }
  };
  protoOf(JobSupport).get_onCancelComplete_4lfsth_k$ = function () {
    return false;
  };
  protoOf(JobSupport).cancel_4b7aim_k$ = function (cause) {
    var tmp0_elvis_lhs = cause;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs_0 = null;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs_0, null, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    this.cancelInternal_wqrppy_k$(tmp);
  };
  protoOf(JobSupport).cancellationExceptionMessage_a64063_k$ = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).cancel_as6ug7_k$ = function (cause) {
    var tmp0_safe_receiver = cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.toCancellationException$default_9ghy63_k$(tmp0_safe_receiver);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs = null;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs, null, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    this.cancelInternal_wqrppy_k$(tmp);
    return true;
  };
  protoOf(JobSupport).cancelInternal_wqrppy_k$ = function (cause) {
    this.cancelImpl_5ls1mt_k$(cause);
  };
  protoOf(JobSupport).parentCancelled_53w4ri_k$ = function (parentJob) {
    this.cancelImpl_5ls1mt_k$(parentJob);
  };
  protoOf(JobSupport).childCancelled_fdoq8t_k$ = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.cancelImpl_5ls1mt_k$(cause) ? this.get_handlesException_f6my9f_k$() : false;
  };
  protoOf(JobSupport).cancelCoroutine_dy4tw5_k$ = function (cause) {
    return this.cancelImpl_5ls1mt_k$(cause);
  };
  protoOf(JobSupport).cancelImpl_5ls1mt_k$ = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.get_onCancelComplete_4lfsth_k$()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.afterCompletion_2ogq6g_k$(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).defaultCancellationException_lkdizi_k$ = function (message, cause) {
    var tmp0_elvis_lhs = message;
    return new JobCancellationException(tmp0_elvis_lhs == null ? this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs, cause, this);
  };
  protoOf(JobSupport).getChildJobCancellationCause_wx9uoh_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.get_rootCause_69dwxu_k$();
    } else {
      if (tmp0_subject instanceof CompletedExceptionally) {
        tmp = state.get_cause_iplhs0_k$();
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          var tmp0_error = 'Cannot be cancelling child in this state: ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(tmp0_error));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  protoOf(JobSupport).makeCompleting_2ycklh_k$ = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompleting.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.get_state_iypx7s_k$();
        var finalState = tryMakeCompleting(this, tmp0__anonymous__q1qw7t, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        } else {
          this.afterCompletion_2ogq6g_k$(finalState);
          return true;
        }
      }
    }
  };
  protoOf(JobSupport).makeCompletingOnce_b13xy2_k$ = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.get_state_iypx7s_k$();
        var finalState = tryMakeCompleting(this, tmp0__anonymous__q1qw7t, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString_0(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
        else if (finalState === get_COMPLETING_RETRY()) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).get_children_4cwbp4_k$ = function () {
    return sequence(JobSupport$_get_children_$slambda_k839f8_0(this, null));
  };
  protoOf(JobSupport).attachChild_ik9c8b_k$ = function (child) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ChildHandleNode(child);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    var tmp = this.invokeOnCompletion$default_gp7u53_k$(true, VOID, tmp$ret$1);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  protoOf(JobSupport).handleOnCompletionException_o179kb_k$ = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).onCancelling_bxyn9n_k$ = function (cause) {
  };
  protoOf(JobSupport).get_isScopedCoroutine_rwmmff_k$ = function () {
    return false;
  };
  protoOf(JobSupport).get_handlesException_f6my9f_k$ = function () {
    return true;
  };
  protoOf(JobSupport).handleJobException_oc4gxk_k$ = function (exception) {
    return false;
  };
  protoOf(JobSupport).onCompletionInternal_39c1g8_k$ = function (state) {
  };
  protoOf(JobSupport).afterCompletion_2ogq6g_k$ = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.toDebugString_v3moy1_k$() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).toDebugString_v3moy1_k$ = function () {
    return this.nameString_cd9e9w_k$() + '{' + stateString(this, this.get_state_iypx7s_k$()) + '}';
  };
  protoOf(JobSupport).nameString_cd9e9w_k$ = function () {
    return get_classSimpleName(this);
  };
  protoOf(JobSupport).get_isCompletedExceptionally_i25lfz_k$ = function () {
    var tmp = this.get_state_iypx7s_k$();
    return tmp instanceof CompletedExceptionally;
  };
  protoOf(JobSupport).getCompletionExceptionOrNull_snuvbb_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.getCompletionExceptionOrNull.<anonymous>' call
      tmp$ret$0 = 'This job has not completed yet';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _get_exceptionOrNull__b3j7js(state, this);
  };
  protoOf(JobSupport).getCompletedInternal_26f4i6_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.getCompletedInternal.<anonymous>' call
      tmp$ret$0 = 'This job has not completed yet';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (state instanceof CompletedExceptionally)
      throw state.get_cause_iplhs0_k$();
    return unboxState(state);
  };
  protoOf(JobSupport).awaitInternal_pz51jj_k$ = function ($completion) {
    $l$loop: while (true) {
      var state = this.get_state_iypx7s_k$();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          // Inline function 'kotlinx.coroutines.internal.recoverAndThrow' call
          var tmp0_recoverAndThrow = state.get_cause_iplhs0_k$();
          throw tmp0_recoverAndThrow;
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    var tmp0 = awaitSuspend(this, $completion);
    return tmp0;
  };
  protoOf(JobSupport).get_onAwaitInternal_onp3dh_k$ = function () {
    var tmp = JobSupport$onAwaitInternalRegFunc$ref();
    var tmp_0 = typeof tmp === 'function' ? tmp : THROW_CCE();
    var tmp_1 = JobSupport$onAwaitInternalProcessResFunc$ref();
    return new SelectClause1Impl(this, tmp_0, typeof tmp_1 === 'function' ? tmp_1 : THROW_CCE());
  };
  function boxIncomplete(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  function get_FALSE() {
    return FALSE;
  }
  var FALSE;
  function get_TRUE() {
    return TRUE;
  }
  var TRUE;
  function get_RETRY() {
    return RETRY;
  }
  var RETRY;
  function InactiveNodeList(list) {
    this.list_1 = list;
  }
  protoOf(InactiveNodeList).get_list_wopuqv_k$ = function () {
    return this.list_1;
  };
  protoOf(InactiveNodeList).get_isActive_quafmh_k$ = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.list_1.getString_xqex6i_k$('New') : anyToString(this);
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.childJob_1 = childJob;
  }
  protoOf(ChildHandleNode).get_childJob_4cx54m_k$ = function () {
    return this.childJob_1;
  };
  protoOf(ChildHandleNode).get_parent_hy4reb_k$ = function () {
    return this.get_job_18j2r0_k$();
  };
  protoOf(ChildHandleNode).invoke_7fb7sc_k$ = function (cause) {
    return this.childJob_1.parentCancelled_53w4ri_k$(this.get_job_18j2r0_k$());
  };
  protoOf(ChildHandleNode).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  protoOf(ChildHandleNode).childCancelled_fdoq8t_k$ = function (cause) {
    return this.get_job_18j2r0_k$().childCancelled_fdoq8t_k$(cause);
  };
  function _get_handler__z70553_0($this) {
    return $this.handler_1;
  }
  function _get__invoked__yhwoci($this) {
    return $this._invoked_1;
  }
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.handler_1 = handler;
    this._invoked_1 = atomic$int$1(0);
  }
  protoOf(InvokeOnCancelling).invoke_7fb7sc_k$ = function (cause) {
    if (this._invoked_1.atomicfu$compareAndSet(0, 1))
      this.handler_1(cause);
  };
  protoOf(InvokeOnCancelling).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  function _get_handler__z70553_1($this) {
    return $this.handler_1;
  }
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.handler_1 = handler;
  }
  protoOf(InvokeOnCompletion).invoke_7fb7sc_k$ = function (cause) {
    return this.handler_1(cause);
  };
  protoOf(InvokeOnCompletion).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  function _get_continuation__y3gzck_1($this) {
    return $this.continuation_1;
  }
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.continuation_1 = continuation;
  }
  protoOf(ResumeOnCompletion).invoke_7fb7sc_k$ = function (cause) {
    var tmp$ret$1;
    // Inline function 'kotlin.coroutines.resume' call
    var tmp1_resume = this.continuation_1;
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.success' call
    var tmp0_success = Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
    tmp1_resume.resumeWith_s3a3yh_k$(tmp$ret$0);
    tmp$ret$1 = Unit_getInstance();
    return tmp$ret$1;
  };
  protoOf(ResumeOnCompletion).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.state_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function _get_continuation__y3gzck_2($this) {
    return $this.continuation_1;
  }
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.continuation_1 = continuation;
  }
  protoOf(ResumeAwaitOnCompletion).invoke_7fb7sc_k$ = function (cause) {
    var state = this.get_job_18j2r0_k$().get_state_iypx7s_k$();
    // Inline function 'kotlinx.coroutines.assert' call
    if (state instanceof CompletedExceptionally) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp1_resumeWithException = this.continuation_1;
      var tmp2_resumeWithException = state.get_cause_iplhs0_k$();
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp2_resumeWithException));
      tmp1_resumeWithException.resumeWith_s3a3yh_k$(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp4_resume = this.continuation_1;
      var tmp = unboxState(state);
      var tmp5_resume = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      var tmp$ret$2;
      // Inline function 'kotlin.Companion.success' call
      var tmp3_success = Companion_getInstance();
      tmp$ret$2 = _Result___init__impl__xyqfz8(tmp5_resume);
      tmp4_resume.resumeWith_s3a3yh_k$(tmp$ret$2);
      tmp$ret$3 = Unit_getInstance();
    }
  };
  protoOf(ResumeAwaitOnCompletion).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  function IncompleteStateBox(state) {
    this.state_1 = state;
  }
  protoOf(IncompleteStateBox).get_state_iypx7s_k$ = function () {
    return this.state_1;
  };
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.child_1 = child;
  }
  protoOf(ChildContinuation).get_child_ipppmb_k$ = function () {
    return this.child_1;
  };
  protoOf(ChildContinuation).invoke_7fb7sc_k$ = function (cause) {
    this.child_1.parentCancelled_uc06zq_k$(this.child_1.getContinuationCancellationCause_62o4c9_k$(this.get_job_18j2r0_k$()));
  };
  protoOf(ChildContinuation).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  function handlesException($this) {
    var tmp = $this.get_parentHandle_gmoqez_k$();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_job_18j2r0_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.get_handlesException_f6my9f_k$())
        return true;
      var tmp_1 = parentJob.get_parentHandle_gmoqez_k$();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_job_18j2r0_k$();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.initParentJob_4c2lht_k$(parent);
    this.handlesException_1 = handlesException(this);
  }
  protoOf(JobImpl).get_onCancelComplete_4lfsth_k$ = function () {
    return true;
  };
  protoOf(JobImpl).get_handlesException_f6my9f_k$ = function () {
    return this.handlesException_1;
  };
  protoOf(JobImpl).complete_9ww6vb_k$ = function () {
    return this.makeCompleting_2ycklh_k$(Unit_getInstance());
  };
  protoOf(JobImpl).completeExceptionally_7s0ccc_k$ = function (exception) {
    return this.makeCompleting_2ycklh_k$(new CompletedExceptionally(exception));
  };
  function _get_handle__ls055p_0($this) {
    return $this.handle_1;
  }
  function DisposeOnCompletion(handle) {
    JobNode.call(this);
    this.handle_1 = handle;
  }
  protoOf(DisposeOnCompletion).invoke_7fb7sc_k$ = function (cause) {
    return this.handle_1.dispose_3n44we_k$();
  };
  protoOf(DisposeOnCompletion).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function _init_properties_JobSupport_kt__68f172() {
    if (properties_initialized_JobSupport_kt_5iq8a4) {
    } else {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.toStringInternalImpl_hcqz93_k$();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).limitedParallelism_glrman_k$ = function (parallelism) {
    checkParallelism(parallelism);
    return this;
  };
  protoOf(MainCoroutineDispatcher).toStringInternalImpl_hcqz93_k$ = function () {
    var main = Dispatchers_getInstance().get_Main_wo5vz6_k$();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.get_immediate_r3y8eg_k$();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function _get_message__rinilm($this) {
    return $this.message_1;
  }
  function NonCancellable() {
    NonCancellable_instance = this;
    AbstractCoroutineContextElement.call(this, Key_getInstance_3());
    this.message_1 = "NonCancellable can be used only as an argument for 'withContext', direct usages of its API are prohibited";
  }
  protoOf(NonCancellable).get_parent_hy4reb_k$ = function () {
    return null;
  };
  protoOf(NonCancellable).get_isActive_quafmh_k$ = function () {
    return true;
  };
  protoOf(NonCancellable).get_isCompleted_a6j6c8_k$ = function () {
    return false;
  };
  protoOf(NonCancellable).get_isCancelled_trk8pu_k$ = function () {
    return false;
  };
  protoOf(NonCancellable).start_1tchgi_k$ = function () {
    return false;
  };
  protoOf(NonCancellable).join_kbq7u1_k$ = function ($completion) {
    throw UnsupportedOperationException_init_$Create$('This job is always active');
  };
  protoOf(NonCancellable).get_onJoin_hnj4j6_k$ = function () {
    throw UnsupportedOperationException_init_$Create$('This job is always active');
  };
  protoOf(NonCancellable).getCancellationException_8i1q6u_k$ = function () {
    throw IllegalStateException_init_$Create$('This job is always active');
  };
  protoOf(NonCancellable).invokeOnCompletion_t2apld_k$ = function (handler) {
    return NonDisposableHandle_getInstance();
  };
  protoOf(NonCancellable).invokeOnCompletion_npwpyn_k$ = function (onCancelling, invokeImmediately, handler) {
    return NonDisposableHandle_getInstance();
  };
  protoOf(NonCancellable).cancel_4b7aim_k$ = function (cause) {
  };
  protoOf(NonCancellable).cancel_as6ug7_k$ = function (cause) {
    return false;
  };
  protoOf(NonCancellable).get_children_4cwbp4_k$ = function () {
    return emptySequence();
  };
  protoOf(NonCancellable).attachChild_ik9c8b_k$ = function (child) {
    return NonDisposableHandle_getInstance();
  };
  protoOf(NonCancellable).toString = function () {
    return 'NonCancellable';
  };
  var NonCancellable_instance;
  function NonCancellable_getInstance() {
    if (NonCancellable_instance == null)
      new NonCancellable();
    return NonCancellable_instance;
  }
  function SupervisorJob(parent) {
    parent = parent === VOID ? null : parent;
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  protoOf(SupervisorJobImpl).childCancelled_fdoq8t_k$ = function (cause) {
    return false;
  };
  function TimeoutCancellationException_init_$Init$(message, $this) {
    TimeoutCancellationException.call($this, message, null);
    return $this;
  }
  function TimeoutCancellationException_init_$Create$(message) {
    var tmp = TimeoutCancellationException_init_$Init$(message, objectCreate(protoOf(TimeoutCancellationException)));
    captureStack(tmp, TimeoutCancellationException_init_$Create$);
    return tmp;
  }
  function TimeoutCancellationException(message, coroutine) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, TimeoutCancellationException);
    this.coroutine_1 = coroutine;
  }
  protoOf(TimeoutCancellationException).get_coroutine_cnpmtt_k$ = function () {
    return this.coroutine_1;
  };
  protoOf(TimeoutCancellationException).createCopy_mmw9ld_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_elvis_lhs = this.message;
    var tmp0_also = new TimeoutCancellationException(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, this.coroutine_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.TimeoutCancellationException.createCopy.<anonymous>' call
    initCause(tmp0_also, this);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  function withTimeout(timeMillis, block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    if (timeMillis.compareTo_n4fqi2_k$(new Long(0, 0)) <= 0)
      throw TimeoutCancellationException_init_$Create$('Timed out immediately');
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.withTimeout.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    tmp$ret$0 = setupTimeout(new TimeoutCoroutine(timeMillis, tmp0__anonymous__q1qw7t), block);
    var tmp0 = tmp$ret$0;
    return tmp0;
  }
  function withTimeoutOrNull(timeMillis, block, $completion) {
    var tmp = new $withTimeoutOrNullCOROUTINE$3(timeMillis, block, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function setupTimeout(coroutine, block) {
    var cont = coroutine.get_uCont_iyyiam_k$();
    var context = cont.get_context_h02k06_k$();
    disposeOnCompletion(coroutine, get_delay(context).invokeOnTimeout_sx2bqq_k$(coroutine.time_1, coroutine, coroutine.get_context_h02k06_k$()));
    return startUndispatchedOrReturnIgnoreTimeout(coroutine, coroutine, block);
  }
  function TimeoutCoroutine(time, uCont) {
    ScopeCoroutine.call(this, uCont.get_context_h02k06_k$(), uCont);
    this.time_1 = time;
  }
  protoOf(TimeoutCoroutine).get_time_wouyhi_k$ = function () {
    return this.time_1;
  };
  protoOf(TimeoutCoroutine).run_mw4iiu_k$ = function () {
    this.cancelCoroutine_dy4tw5_k$(TimeoutCancellationException_0(this.time_1, get_delay(this.get_context_h02k06_k$()), this));
  };
  protoOf(TimeoutCoroutine).nameString_cd9e9w_k$ = function () {
    return protoOf(ScopeCoroutine).nameString_cd9e9w_k$.call(this) + '(timeMillis=' + toString(this.time_1) + ')';
  };
  function TimeoutCancellationException_0(time, delay, coroutine) {
    var tmp0_safe_receiver = isInterface(delay, DelayWithTimeoutDiagnostics) ? delay : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.time.Companion.milliseconds' call
      var tmp0__get_milliseconds__kazo1t = Companion_getInstance_1();
      tmp$ret$0 = toDuration(time, DurationUnit_MILLISECONDS_getInstance());
      tmp = tmp0_safe_receiver.timeoutMessage_ufjw75_k$(tmp$ret$0);
    }
    var tmp1_elvis_lhs = tmp;
    var message = tmp1_elvis_lhs == null ? 'Timed out waiting for ' + toString(time) + ' ms' : tmp1_elvis_lhs;
    return new TimeoutCancellationException(message, coroutine);
  }
  function $withTimeoutOrNullCOROUTINE$3(timeMillis, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.timeMillis_1 = timeMillis;
    this.block_1 = block;
  }
  protoOf($withTimeoutOrNullCOROUTINE$3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            if (this.timeMillis_1.compareTo_n4fqi2_k$(new Long(0, 0)) <= 0)
              return null;
            this.coroutine0__1 = {_v: null};
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp0__anonymous__q1qw7t = this;
            var timeoutCoroutine = new TimeoutCoroutine(this.timeMillis_1, tmp0__anonymous__q1qw7t);
            this.coroutine0__1._v = timeoutCoroutine;
            suspendResult = returnIfSuspended(setupTimeout(timeoutCoroutine, this.block_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof TimeoutCancellationException) {
              var e = this.get_exception_x0n6w6_k$();
              if (e.coroutine_1 === this.coroutine0__1._v) {
                return null;
              }
              throw e;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_s9sevl_k$(3);
            return Unit_getInstance();
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
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).limitedParallelism_glrman_k$ = function (parallelism) {
    throw UnsupportedOperationException_init_$Create$('limitedParallelism is not supported for Dispatchers.Unconfined');
  };
  protoOf(Unconfined).isDispatchNeeded_fmz9vn_k$ = function (context) {
    return false;
  };
  protoOf(Unconfined).dispatch_o98ux7_k$ = function (context, block) {
    var yieldContext = context.get_j1ktw6_k$(Key_getInstance_4());
    if (!(yieldContext == null)) {
      yieldContext.dispatcherWasUnconfined_1 = true;
      return Unit_getInstance();
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  protoOf(Unconfined).toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_4() {
    Key_instance_3 = this;
  }
  var Key_instance_3;
  function Key_getInstance_4() {
    if (Key_instance_3 == null)
      new Key_4();
    return Key_instance_3;
  }
  function YieldContext() {
    Key_getInstance_4();
    AbstractCoroutineContextElement.call(this, Key_getInstance_4());
    this.dispatcherWasUnconfined_1 = false;
  }
  protoOf(YieldContext).set_dispatcherWasUnconfined_6oi8pp_k$ = function (_set____db54di) {
    this.dispatcherWasUnconfined_1 = _set____db54di;
  };
  protoOf(YieldContext).get_dispatcherWasUnconfined_gkf39i_k$ = function () {
    return this.dispatcherWasUnconfined_1;
  };
  function Waiter() {
  }
  function yield_0($completion) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.yield.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $completion;
      var context = tmp0__anonymous__q1qw7t.get_context_h02k06_k$();
      ensureActive(context);
      var tmp = intercepted(tmp0__anonymous__q1qw7t);
      var tmp0_elvis_lhs = tmp instanceof DispatchedContinuation ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var cont = tmp_0;
      if (cont.get_dispatcher_usy1bk_k$().isDispatchNeeded_fmz9vn_k$(context)) {
        cont.dispatchYield_r38es3_k$(context, Unit_getInstance());
      } else {
        var yieldContext = new YieldContext();
        cont.dispatchYield_r38es3_k$(context.plus_rgw9wi_k$(yieldContext), Unit_getInstance());
        if (yieldContext.get_dispatcherWasUnconfined_gkf39i_k$()) {
          tmp$ret$0 = yieldUndispatched(cont) ? get_COROUTINE_SUSPENDED() : Unit_getInstance();
          break $l$block_0;
        }
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    var tmp0 = tmp$ret$0;
    return tmp0;
  }
  function get_NO_ELEMENT() {
    _init_properties_BroadcastChannel_kt__6bnf1a();
    return NO_ELEMENT;
  }
  var NO_ELEMENT;
  var properties_initialized_BroadcastChannel_kt_tirhqc;
  function _init_properties_BroadcastChannel_kt__6bnf1a() {
    if (properties_initialized_BroadcastChannel_kt_tirhqc) {
    } else {
      properties_initialized_BroadcastChannel_kt_tirhqc = true;
      NO_ELEMENT = new Symbol('NO_ELEMENT');
    }
  }
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  function values_0() {
    return [BufferOverflow_SUSPEND_getInstance(), BufferOverflow_DROP_OLDEST_getInstance(), BufferOverflow_DROP_LATEST_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'SUSPEND':
        return BufferOverflow_SUSPEND_getInstance();
      case 'DROP_OLDEST':
        return BufferOverflow_DROP_OLDEST_getInstance();
      case 'DROP_LATEST':
        return BufferOverflow_DROP_LATEST_getInstance();
      default:
        BufferOverflow_initEntries();
        THROW_ISE();
        break;
    }
  }
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_getInstance();
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function BufferOverflow_DROP_LATEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_LATEST_instance;
  }
  function get_NULL_SEGMENT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NULL_SEGMENT;
  }
  var NULL_SEGMENT;
  function get_SEGMENT_SIZE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SEGMENT_SIZE;
  }
  var SEGMENT_SIZE;
  function get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  }
  var EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  function get_BUFFERED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return BUFFERED;
  }
  var BUFFERED;
  function get_IN_BUFFER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return IN_BUFFER;
  }
  var IN_BUFFER;
  function get_RESUMING_BY_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_RCV;
  }
  var RESUMING_BY_RCV;
  function get_RESUMING_BY_EB() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_EB;
  }
  var RESUMING_BY_EB;
  function get_POISONED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return POISONED;
  }
  var POISONED;
  function get_DONE_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return DONE_RCV;
  }
  var DONE_RCV;
  function get_INTERRUPTED_SEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_SEND;
  }
  var INTERRUPTED_SEND;
  function get_INTERRUPTED_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_RCV;
  }
  var INTERRUPTED_RCV;
  function get_CHANNEL_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CHANNEL_CLOSED;
  }
  var CHANNEL_CLOSED;
  function get_SUSPEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND;
  }
  var SUSPEND;
  function get_SUSPEND_NO_WAITER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND_NO_WAITER;
  }
  var SUSPEND_NO_WAITER;
  function get_FAILED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return FAILED;
  }
  var FAILED;
  function get_NO_RECEIVE_RESULT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_RECEIVE_RESULT;
  }
  var NO_RECEIVE_RESULT;
  function get_CLOSE_HANDLER_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_CLOSED;
  }
  var CLOSE_HANDLER_CLOSED;
  function get_CLOSE_HANDLER_INVOKED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_INVOKED;
  }
  var CLOSE_HANDLER_INVOKED;
  function get_NO_CLOSE_CAUSE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_CLOSE_CAUSE;
  }
  var NO_CLOSE_CAUSE;
  function _get__channel__lc0xvd($this) {
    return $this._channel_1;
  }
  function _get_data__d5abxd($this) {
    return $this.data_1;
  }
  function setElementLazy($this, index, value) {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    var tmp0_lazySet = $this.data_1.atomicfu$get(imul(index, 2));
    tmp0_lazySet.set_kotlinx$atomicfu$value_koguff_k$(value);
  }
  function ChannelSegment(id, prev, channel, pointers) {
    Segment.call(this, id, prev, pointers);
    this._channel_1 = channel;
    this.data_1 = atomicfu$AtomicRefArray$ofNulls(imul(get_SEGMENT_SIZE(), 2));
  }
  protoOf(ChannelSegment).get_channel_dhi7tm_k$ = function () {
    return ensureNotNull(this._channel_1);
  };
  protoOf(ChannelSegment).get_numberOfSlots_n3mgwk_k$ = function () {
    return get_SEGMENT_SIZE();
  };
  protoOf(ChannelSegment).storeElement_ffxh39_k$ = function (index, element) {
    setElementLazy(this, index, element);
  };
  protoOf(ChannelSegment).getElement_hln8g5_k$ = function (index) {
    var tmp = this.data_1.atomicfu$get(imul(index, 2)).get_kotlinx$atomicfu$value_vi2am5_k$();
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(ChannelSegment).retrieveElement_pz16u9_k$ = function (index) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.getElement_hln8g5_k$(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.ChannelSegment.retrieveElement.<anonymous>' call
    this.cleanElement_uqemvx_k$(index);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(ChannelSegment).cleanElement_uqemvx_k$ = function (index) {
    setElementLazy(this, index, null);
  };
  protoOf(ChannelSegment).getState_atldmu_k$ = function (index) {
    return this.data_1.atomicfu$get(imul(index, 2) + 1 | 0).get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(ChannelSegment).setState_ebqv3y_k$ = function (index, value) {
    this.data_1.atomicfu$get(imul(index, 2) + 1 | 0).set_kotlinx$atomicfu$value_koguff_k$(value);
  };
  protoOf(ChannelSegment).casState_9z8uvb_k$ = function (index, from, to) {
    return this.data_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$compareAndSet(from, to);
  };
  protoOf(ChannelSegment).getAndSetState_20wpe6_k$ = function (index, update) {
    return this.data_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$getAndSet(update);
  };
  protoOf(ChannelSegment).onCancellation_8vow63_k$ = function (index, cause) {
    this.onCancellation_rc3o73_k$(index);
  };
  protoOf(ChannelSegment).onSenderCancellationWithOnUndeliveredElement_3qqzo7_k$ = function (index, context) {
    var element = this.getElement_hln8g5_k$(index);
    if (this.onCancellation_rc3o73_k$(index)) {
      callUndeliveredElement(ensureNotNull(this.get_channel_dhi7tm_k$().onUndeliveredElement_1), element, context);
    }
  };
  protoOf(ChannelSegment).onCancellation_rc3o73_k$ = function (index) {
    var tmp$ret$1;
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$0;
    // Inline function 'kotlin.Long.times' call
    var tmp0_times = this.get_id_kntnx8_k$();
    var tmp1_times = get_SEGMENT_SIZE();
    tmp$ret$0 = tmp0_times.times_2zfqpc_k$(toLong(tmp1_times));
    var tmp2_plus = tmp$ret$0;
    tmp$ret$1 = tmp2_plus.plus_u6jwas_k$(toLong(index));
    var globalIndex = tmp$ret$1;
    var s = this.get_channel_dhi7tm_k$().get_sendersCounter_csvgw7_k$();
    var r = this.get_channel_dhi7tm_k$().get_receiversCounter_b035j5_k$();
    var isSender;
    var isReceiver;
    $l$loop_0: while (true) {
      var cur = this.data_1.atomicfu$get(imul(index, 2) + 1 | 0).get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp;
      if (!(cur == null) ? isInterface(cur, Waiter) : false) {
        tmp = true;
      } else {
        tmp = cur instanceof WaiterEB;
      }
      if (tmp) {
        isSender = globalIndex.compareTo_n4fqi2_k$(s) < 0 ? globalIndex.compareTo_n4fqi2_k$(r) >= 0 : false;
        isReceiver = globalIndex.compareTo_n4fqi2_k$(r) < 0 ? globalIndex.compareTo_n4fqi2_k$(s) >= 0 : false;
        if (!isSender ? !isReceiver : false) {
          this.cleanElement_uqemvx_k$(index);
          return true;
        }
        var update = isSender ? get_INTERRUPTED_SEND() : get_INTERRUPTED_RCV();
        if (this.data_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$compareAndSet(cur, update))
          break $l$loop_0;
      } else {
        if (cur === get_INTERRUPTED_SEND() ? true : cur === get_INTERRUPTED_RCV()) {
          this.cleanElement_uqemvx_k$(index);
          return true;
        } else {
          if (cur === get_RESUMING_BY_EB() ? true : cur === get_RESUMING_BY_RCV())
            continue $l$loop_0;
          else {
            if (cur === get_DONE_RCV() ? true : cur === get_BUFFERED())
              return false;
            else {
              if (cur === get_CHANNEL_CLOSED()) {
                return false;
              } else {
                var tmp3_error = 'unexpected state: ' + toString_0(cur);
                throw IllegalStateException_init_$Create$(toString(tmp3_error));
              }
            }
          }
        }
      }
    }
    this.cleanElement_uqemvx_k$(index);
    this.onCancelledRequest_awh8xx_k$(index, isReceiver);
    return true;
  };
  protoOf(ChannelSegment).onCancelledRequest_awh8xx_k$ = function (index, receiver) {
    if (receiver) {
      var tmp = this.get_channel_dhi7tm_k$();
      var tmp$ret$1;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$0;
      // Inline function 'kotlin.Long.times' call
      var tmp0_times = this.get_id_kntnx8_k$();
      var tmp1_times = get_SEGMENT_SIZE();
      tmp$ret$0 = tmp0_times.times_2zfqpc_k$(toLong(tmp1_times));
      var tmp2_plus = tmp$ret$0;
      tmp$ret$1 = tmp2_plus.plus_u6jwas_k$(toLong(index));
      tmp.waitExpandBufferCompletion_kty46c_k$(tmp$ret$1);
    }
    this.onSlotCleaned_dnmt5m_k$();
  };
  function _get_segment__iepbr6($this) {
    return $this.segment_1;
  }
  function _get_index__g2optt($this) {
    return $this.index_1;
  }
  function _get_context__ps0bpe($this) {
    return $this.context_1;
  }
  function _set_receiveResult__70wql7($this, _set____db54di) {
    $this.receiveResult_1 = _set____db54di;
  }
  function _get_receiveResult__m8o93j($this) {
    return $this.receiveResult_1;
  }
  function _set_continuation__ijq8sg($this, _set____db54di) {
    $this.continuation_1 = _set____db54di;
  }
  function _get_continuation__y3gzck_3($this) {
    return $this.continuation_1;
  }
  function _set_segment__77iylu($this, _set____db54di) {
    $this.segment_1 = _set____db54di;
  }
  function _get_segment__iepbr6_0($this) {
    return $this.segment_1;
  }
  function _set_index__fyfqnn($this, _set____db54di) {
    $this.index_1 = _set____db54di;
  }
  function _get_index__g2optt_0($this) {
    return $this.index_1;
  }
  function onClosedHasNext($this) {
    $this.receiveResult_1 = get_CHANNEL_CLOSED();
    var tmp0_elvis_lhs = $this.$this_1.get_closeCause_gbqkm2_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var cause = tmp;
    throw recoverStackTrace_0(cause);
  }
  function hasNextOnNoWaiterSuspend($this, segment, index, r, $completion) {
    var tmp$ret$5;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannelIterator.hasNextOnNoWaiterSuspend.<anonymous>' call
      $this.continuation_1 = cancellable;
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var updCellResult = updateCellReceive($this.$this_1, segment, index, r, $this);
      if (updCellResult === _get_SUSPEND_$accessor$yt74tm_ccb8g1_0()) {
        prepareReceiverForSuspension($this, $this.$this_1, segment, index);
      } else if (updCellResult === _get_FAILED_$accessor$yt74tm_h47uk8_0()) {
        if (r.compareTo_n4fqi2_k$($this.$this_1.get_sendersCounter_csvgw7_k$()) < 0) {
          segment.cleanPrev_rmgs7f_k$();
        }
        var tmp$ret$0;
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = $this.$this_1.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
          $l$loop_0: while (true) {
            if ($this.$this_1.get_isClosedForReceive_v0r77d_k$()) {
              onClosedHasNextNoWaiterSuspend($this);
              tmp$ret$0 = Unit_getInstance();
              break $l$block_0;
            }
            var r_0 = $this.$this_1.receivers_1.atomicfu$getAndIncrement$long();
            var tmp$ret$1;
            // Inline function 'kotlin.Long.div' call
            var tmp0_div = get_SEGMENT_SIZE();
            tmp$ret$1 = r_0.div_9s1fi3_k$(toLong(tmp0_div));
            var id = tmp$ret$1;
            var tmp$ret$2;
            // Inline function 'kotlin.Long.rem' call
            var tmp1_rem = get_SEGMENT_SIZE();
            tmp$ret$2 = r_0.rem_9rbcjo_k$(toLong(tmp1_rem));
            var i = tmp$ret$2.toInt_1tsl84_k$();
            if (!segment_0.get_id_kntnx8_k$().equals(id)) {
              var tmp0_elvis_lhs = findSegmentReceive($this.$this_1, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive($this.$this_1, segment_0, i, r_0, $this);
            var tmp_0;
            if (updCellResult_0 === _get_SUSPEND_$accessor$yt74tm_ccb8g1_0()) {
              var tmp1_safe_receiver = isInterface($this, Waiter) ? $this : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp1_safe_receiver, $this.$this_1, segment_0, i);
              }
              var tmp$ret$3;
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter.<anonymous>' call
              var tmp2__anonymous__z9zvc9 = segment_0;
              tmp$ret$3 = Unit_getInstance();
              tmp_0 = tmp$ret$3;
            } else if (updCellResult_0 === _get_FAILED_$accessor$yt74tm_h47uk8_0()) {
              if (r_0.compareTo_n4fqi2_k$($this.$this_1.get_sendersCounter_csvgw7_k$()) < 0) {
                segment_0.cleanPrev_rmgs7f_k$();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
              var tmp$ret$4;
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl.<anonymous>' call
              var tmp3__anonymous__ufb84q = segment_0;
              throw IllegalStateException_init_$Create$('unexpected');
              tmp_0 = tmp$ret$4;
            } else {
              segment_0.cleanPrev_rmgs7f_k$();
              var tmp4__anonymous__pkmkx7 = (updCellResult_0 == null ? true : isObject(updCellResult_0)) ? updCellResult_0 : THROW_CCE();
              $this.receiveResult_1 = tmp4__anonymous__pkmkx7;
              $this.continuation_1 = null;
              var tmp0_safe_receiver = $this.$this_1.onUndeliveredElement_1;
              cancellable.resume_l1w5in_k$(true, tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, tmp4__anonymous__pkmkx7, cancellable.get_context_h02k06_k$()));
              tmp_0 = Unit_getInstance();
            }
            tmp$ret$0 = tmp_0;
            break $l$block_0;
          }
        }
      } else {
        segment.cleanPrev_rmgs7f_k$();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannelIterator.hasNextOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        var tmp5__anonymous__kpxxpo = (updCellResult == null ? true : isObject(updCellResult)) ? updCellResult : THROW_CCE();
        $this.receiveResult_1 = tmp5__anonymous__kpxxpo;
        $this.continuation_1 = null;
        var tmp0_safe_receiver_0 = $this.$this_1.onUndeliveredElement_1;
        cancellable.resume_l1w5in_k$(true, tmp0_safe_receiver_0 == null ? null : bindCancellationFun(tmp0_safe_receiver_0, tmp5__anonymous__kpxxpo, cancellable.get_context_h02k06_k$()));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.releaseClaimedReusableContinuation_4y1z8b_k$();
        throw e;
      } else {
        throw $p;
      }
    }
    tmp$ret$5 = cancellable.getResult_clfhg3_k$();
    var tmp0 = tmp$ret$5;
    return tmp0;
  }
  function onClosedHasNextNoWaiterSuspend($this) {
    var cont = ensureNotNull($this.continuation_1);
    $this.continuation_1 = null;
    $this.receiveResult_1 = get_CHANNEL_CLOSED();
    var cause = $this.$this_1.get_closeCause_gbqkm2_k$();
    if (cause == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      cont.resumeWith_s3a3yh_k$(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp2_resumeWithException = recoverStackTrace(cause, cont);
      var tmp$ret$2;
      // Inline function 'kotlin.Companion.failure' call
      var tmp1_failure = Companion_getInstance();
      tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(tmp2_resumeWithException));
      cont.resumeWith_s3a3yh_k$(tmp$ret$2);
      tmp$ret$3 = Unit_getInstance();
    }
  }
  function $hasNextCOROUTINE$7(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($hasNextCOROUTINE$7).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(8);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.segment1__1 = this._this__u8e3s4__1.$this_1.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            if (false) {
              this.set_state_a96kl8_k$(9);
              continue $sm;
            }

            if (this._this__u8e3s4__1.$this_1.get_isClosedForReceive_v0r77d_k$()) {
              var tmp_0 = this;
              tmp_0.tmp$ret$00__1 = onClosedHasNext(this._this__u8e3s4__1);
              this.set_state_a96kl8_k$(10);
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

            break;
          case 3:
            this.r2__1 = this._this__u8e3s4__1.$this_1.receivers_1.atomicfu$getAndIncrement$long();
            var tmp_1 = this;
            var tmp0_div = get_SEGMENT_SIZE();
            tmp_1.id3__1 = this.r2__1.div_9s1fi3_k$(toLong(tmp0_div));
            var tmp_2 = this;
            var tmp1_rem = get_SEGMENT_SIZE();
            tmp_2.i4__1 = this.r2__1.rem_9rbcjo_k$(toLong(tmp1_rem)).toInt_1tsl84_k$();
            if (!this.segment1__1.get_id_kntnx8_k$().equals(this.id3__1)) {
              this.tmp0_elvis_lhs5__1 = findSegmentReceive(this._this__u8e3s4__1.$this_1, this.id3__1, this.segment1__1);
              if (this.tmp0_elvis_lhs5__1 == null) {
                this.set_state_a96kl8_k$(2);
                var tmp_3 = this;
                continue $sm;
              } else {
                this.WHEN_RESULT6__1 = this.tmp0_elvis_lhs5__1;
                this.set_state_a96kl8_k$(4);
                continue $sm;
              }
            } else {
              this.set_state_a96kl8_k$(5);
              continue $sm;
            }

            break;
          case 4:
            this.segment1__1 = this.WHEN_RESULT6__1;
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 5:
            this.updCellResult7__1 = updateCellReceive(this._this__u8e3s4__1.$this_1, this.segment1__1, this.i4__1, this.r2__1, null);
            if (this.updCellResult7__1 === _get_SUSPEND_$accessor$yt74tm_ccb8g1_0()) {
              var tmp_4 = this;
              var tmp1_safe_receiver = (!(null == null) ? isInterface(null, Waiter) : false) ? null : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp1_safe_receiver, this._this__u8e3s4__1.$this_1, this.segment1__1, this.i4__1);
              }
              var tmp2__anonymous__z9zvc9 = this.segment1__1;
              throw IllegalStateException_init_$Create$('unreachable');
            } else {
              if (this.updCellResult7__1 === _get_FAILED_$accessor$yt74tm_h47uk8_0()) {
                if (this.r2__1.compareTo_n4fqi2_k$(this._this__u8e3s4__1.$this_1.get_sendersCounter_csvgw7_k$()) < 0) {
                  this.segment1__1.cleanPrev_rmgs7f_k$();
                }
                this.set_state_a96kl8_k$(2);
                var tmp_5 = this;
                continue $sm;
              } else {
                if (this.updCellResult7__1 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
                  var tmp_6 = this;
                  tmp_6.tmp3__anonymous_9_js7afj_1 = this.segment1__1;
                  this.set_state_a96kl8_k$(6);
                  suspendResult = hasNextOnNoWaiterSuspend(this._this__u8e3s4__1, this.tmp3__anonymous_9_js7afj_1, this.i4__1, this.r2__1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_7 = this;
                  this.segment1__1.cleanPrev_rmgs7f_k$();
                  var tmp_8 = this.updCellResult7__1;
                  var tmp4__anonymous__pkmkx7 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
                  this._this__u8e3s4__1.receiveResult_1 = tmp4__anonymous__pkmkx7;
                  tmp_7.WHEN_RESULT8__1 = true;
                  this.set_state_a96kl8_k$(7);
                  continue $sm;
                }
              }
            }

            break;
          case 6:
            var tmp_9 = this;
            return suspendResult;
          case 7:
            this.tmp$ret$00__1 = this.WHEN_RESULT8__1;
            this.set_state_a96kl8_k$(10);
            continue $sm;
          case 8:
            throw this.get_exception_x0n6w6_k$();
          case 9:
            if (false) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(10);
            continue $sm;
          case 10:
            return this.tmp$ret$00__1;
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 8) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function _get_capacity__a9k9f3($this) {
    return $this.capacity_1;
  }
  function _get_sendersAndCloseStatus__3cwhts($this) {
    return $this.sendersAndCloseStatus_1;
  }
  function _get_receivers__i60qs3($this) {
    return $this.receivers_1;
  }
  function _get_bufferEnd__9w25o6($this) {
    return $this.bufferEnd_1;
  }
  function _get_bufferEndCounter__2d4hee($this) {
    return $this.bufferEnd_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  }
  function _get_completedExpandBuffersAndPauseFlag__og9unm($this) {
    return $this.completedExpandBuffersAndPauseFlag_1;
  }
  function _get_isRendezvousOrUnlimited__3mdufi($this) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = _get_bufferEndCounter__2d4hee($this);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.<get-isRendezvousOrUnlimited>.<anonymous>' call
    tmp$ret$0 = tmp0_let.equals(new Long(0, 0)) ? true : tmp0_let.equals(new Long(-1, 2147483647));
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function _get_sendSegment__j86hsq($this) {
    return $this.sendSegment_1;
  }
  function _get_receiveSegment__r6b8p1($this) {
    return $this.receiveSegment_1;
  }
  function _get_bufferEndSegment__l9058z($this) {
    return $this.bufferEndSegment_1;
  }
  function onClosedSend($this, element, $completion) {
    var tmp$ret$4;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.initCancellability_sh6jkn_k$();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.onClosedSend.<anonymous>' call
      var tmp0_safe_receiver = $this.onUndeliveredElement_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        addSuppressed(tmp1_safe_receiver, $this.get_sendException_qpq1ry_k$());
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance();
        var tmp1_failure = recoverStackTrace(tmp1_safe_receiver, cancellable);
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
        cancellable.resumeWith_s3a3yh_k$(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
      var tmp2_resumeWithStackTrace = $this.get_sendException_qpq1ry_k$();
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure_0 = Companion_getInstance();
      var tmp1_failure_0 = recoverStackTrace(tmp2_resumeWithStackTrace, cancellable);
      tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure_0));
      cancellable.resumeWith_s3a3yh_k$(tmp$ret$3);
    }
    tmp$ret$4 = cancellable.getResult_clfhg3_k$();
    var tmp0 = tmp$ret$4;
    return tmp0;
  }
  function sendOnNoWaiterSuspend($this, segment, index, element, s, $completion) {
    var tmp$ret$14;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>' call
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImplOnNoWaiter' call
      var tmp0_subject = updateCellSend($this, segment, index, element, s, cancellable, false);
      if (tmp0_subject === _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8_0()) {
        segment.cleanPrev_rmgs7f_k$();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cancellable.resumeWith_s3a3yh_k$(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
      } else if (tmp0_subject === _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m_0()) {
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        var tmp$ret$3;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success_0 = Companion_getInstance();
        tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cancellable.resumeWith_s3a3yh_k$(tmp$ret$2);
        tmp$ret$3 = Unit_getInstance();
      } else if (tmp0_subject === _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf_0()) {
        prepareSenderForSuspension(cancellable, $this, segment, index);
      } else if (tmp0_subject === _get_RESULT_CLOSED_$accessor$yt74tm_10v48j_0()) {
        if (s.compareTo_n4fqi2_k$($this.get_receiversCounter_b035j5_k$()) < 0) {
          segment.cleanPrev_rmgs7f_k$();
        }
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        onClosedSendOnNoWaiterSuspend($this, element, cancellable);
      } else if (tmp0_subject === _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0_0()) {
        segment.cleanPrev_rmgs7f_k$();
        var tmp$ret$7;
        $l$block_5: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
          var segment_0 = $this.sendSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
          $l$loop_0: while (true) {
            var sendersAndCloseStatusCur = $this.sendersAndCloseStatus_1.atomicfu$getAndIncrement$long();
            var tmp$ret$4;
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
            tmp$ret$4 = sendersAndCloseStatusCur.and_jhajnj_k$(new Long(-1, 268435455));
            var s_0 = tmp$ret$4;
            var closed = _get_isClosedForSend0__kxgf9m(sendersAndCloseStatusCur, $this);
            var tmp$ret$5;
            // Inline function 'kotlin.Long.div' call
            var tmp0_div = get_SEGMENT_SIZE();
            tmp$ret$5 = s_0.div_9s1fi3_k$(toLong(tmp0_div));
            var id = tmp$ret$5;
            var tmp$ret$6;
            // Inline function 'kotlin.Long.rem' call
            var tmp1_rem = get_SEGMENT_SIZE();
            tmp$ret$6 = s_0.rem_9rbcjo_k$(toLong(tmp1_rem));
            var i = tmp$ret$6.toInt_1tsl84_k$();
            if (!segment_0.get_id_kntnx8_k$().equals(id)) {
              var tmp0_elvis_lhs = findSegmentSend($this, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                var tmp_0;
                if (closed) {
                  onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                  tmp$ret$7 = Unit_getInstance();
                  break $l$block_5;
                } else {
                  continue $l$loop_0;
                }
                tmp = tmp_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var tmp1_subject = updateCellSend($this, segment_0, i, element, s_0, cancellable, closed);
            if (tmp1_subject === _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8_0()) {
              segment_0.cleanPrev_rmgs7f_k$();
              var tmp$ret$9;
              // Inline function 'kotlin.coroutines.resume' call
              var tmp$ret$8;
              // Inline function 'kotlin.Companion.success' call
              var tmp0_success_1 = Companion_getInstance();
              tmp$ret$8 = _Result___init__impl__xyqfz8(Unit_getInstance());
              cancellable.resumeWith_s3a3yh_k$(tmp$ret$8);
              tmp$ret$9 = Unit_getInstance();
              tmp$ret$7 = tmp$ret$9;
              break $l$block_5;
            } else if (tmp1_subject === _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m_0()) {
              var tmp$ret$11;
              // Inline function 'kotlin.coroutines.resume' call
              var tmp$ret$10;
              // Inline function 'kotlin.Companion.success' call
              var tmp0_success_2 = Companion_getInstance();
              tmp$ret$10 = _Result___init__impl__xyqfz8(Unit_getInstance());
              cancellable.resumeWith_s3a3yh_k$(tmp$ret$10);
              tmp$ret$11 = Unit_getInstance();
              tmp$ret$7 = tmp$ret$11;
              break $l$block_5;
            } else if (tmp1_subject === _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf_0()) {
              if (closed) {
                segment_0.onSlotCleaned_dnmt5m_k$();
                onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                tmp$ret$7 = Unit_getInstance();
                break $l$block_5;
              }
              var tmp2_safe_receiver = isInterface(cancellable, Waiter) ? cancellable : null;
              if (tmp2_safe_receiver == null)
                null;
              else {
                prepareSenderForSuspension(tmp2_safe_receiver, $this, segment_0, i);
              }
              var tmp$ret$12;
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImplOnNoWaiter.<anonymous>' call
              var tmp2__anonymous__z9zvc9 = segment_0;
              tmp$ret$12 = Unit_getInstance();
              tmp$ret$7 = tmp$ret$12;
              break $l$block_5;
            } else if (tmp1_subject === _get_RESULT_CLOSED_$accessor$yt74tm_10v48j_0()) {
              if (s_0.compareTo_n4fqi2_k$($this.get_receiversCounter_b035j5_k$()) < 0) {
                segment_0.cleanPrev_rmgs7f_k$();
              }
              onClosedSendOnNoWaiterSuspend($this, element, cancellable);
              tmp$ret$7 = Unit_getInstance();
              break $l$block_5;
            } else if (tmp1_subject === _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0_0()) {
              segment_0.cleanPrev_rmgs7f_k$();
              continue $l$loop_0;
            } else if (tmp1_subject === _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m()) {
              var tmp$ret$13;
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl.<anonymous>' call
              var tmp3__anonymous__ufb84q = segment_0;
              throw IllegalStateException_init_$Create$('unexpected');
              tmp$ret$7 = tmp$ret$13;
              break $l$block_5;
            }
          }
        }
      } else {
        // Inline function 'kotlin.error' call
        throw IllegalStateException_init_$Create$('unexpected');
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.releaseClaimedReusableContinuation_4y1z8b_k$();
        throw e;
      } else {
        throw $p;
      }
    }
    tmp$ret$14 = cancellable.getResult_clfhg3_k$();
    var tmp0 = tmp$ret$14;
    return tmp0;
  }
  function prepareSenderForSuspension(_this__u8e3s4, $this, segment, index) {
    if ($this.onUndeliveredElement_1 == null) {
      _this__u8e3s4.invokeOnCancellation_gome2h_k$(segment, index);
    } else {
      var tmp0_subject = _this__u8e3s4;
      if (isInterface(tmp0_subject, CancellableContinuation)) {
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        var tmp0__get_asHandler__gq3rkj = new SenderWithOnUndeliveredElementCancellationHandler($this, segment, index, _this__u8e3s4.get_context_h02k06_k$());
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
        tmp$ret$1 = tmp$ret$0;
        _this__u8e3s4.invokeOnCancellation_yygv6h_k$(tmp$ret$1);
      } else {
        if (isInterface(tmp0_subject, SelectInstance)) {
          _this__u8e3s4.disposeOnCompletion_c9dn6_k$(new SenderWithOnUndeliveredElementCancellationHandler($this, segment, index, _this__u8e3s4.get_context_h02k06_k$()));
        } else {
          if (tmp0_subject instanceof SendBroadcast) {
            var tmp$ret$3;
            // Inline function 'kotlinx.coroutines.asHandler' call
            var tmp1__get_asHandler__vxa5yk = new SenderWithOnUndeliveredElementCancellationHandler($this, segment, index, _this__u8e3s4.cont_1.get_context_h02k06_k$());
            var tmp$ret$2;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$2 = tmp1__get_asHandler__vxa5yk;
            tmp$ret$3 = tmp$ret$2;
            _this__u8e3s4.cont_1.invokeOnCancellation_yygv6h_k$(tmp$ret$3);
          } else {
            var tmp2_error = 'unexpected sender: ' + _this__u8e3s4;
            throw IllegalStateException_init_$Create$(toString(tmp2_error));
          }
        }
      }
    }
  }
  function SenderWithOnUndeliveredElementCancellationHandler($outer, segment, index, context) {
    this.$this_1 = $outer;
    BeforeResumeCancelHandler.call(this);
    this.segment_1 = segment;
    this.index_1 = index;
    this.context_1 = context;
  }
  protoOf(SenderWithOnUndeliveredElementCancellationHandler).dispose_3n44we_k$ = function () {
    this.segment_1.onSenderCancellationWithOnUndeliveredElement_3qqzo7_k$(this.index_1, this.context_1);
  };
  protoOf(SenderWithOnUndeliveredElementCancellationHandler).invoke_7fb7sc_k$ = function (cause) {
    return this.dispose_3n44we_k$();
  };
  protoOf(SenderWithOnUndeliveredElementCancellationHandler).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  function onClosedSendOnNoWaiterSuspend($this, element, cont) {
    var tmp0_safe_receiver = $this.onUndeliveredElement_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      callUndeliveredElement(tmp0_safe_receiver, element, cont.get_context_h02k06_k$());
    }
    var tmp$ret$1;
    // Inline function 'kotlin.coroutines.resumeWithException' call
    var tmp1_resumeWithException = recoverStackTrace($this.get_sendException_qpq1ry_k$(), cont);
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    var tmp0_failure = Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_resumeWithException));
    cont.resumeWith_s3a3yh_k$(tmp$ret$0);
    tmp$ret$1 = Unit_getInstance();
  }
  function SendBroadcast(cont) {
    this.cont_1 = cont;
    var tmp = this;
    tmp.$$delegate_0__1 = cont instanceof CancellableContinuationImpl ? cont : THROW_CCE();
  }
  protoOf(SendBroadcast).get_cont_wok86z_k$ = function () {
    return this.cont_1;
  };
  protoOf(SendBroadcast).invokeOnCancellation_gome2h_k$ = function (segment, index) {
    this.$$delegate_0__1.invokeOnCancellation_gome2h_k$(segment, index);
  };
  function sendImplOnNoWaiter($this, segment, index, element, s, waiter, onRendezvousOrBuffered, onClosed) {
    var tmp0_subject = updateCellSend($this, segment, index, element, s, waiter, false);
    if (tmp0_subject === _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8_0()) {
      segment.cleanPrev_rmgs7f_k$();
      onRendezvousOrBuffered();
    } else if (tmp0_subject === _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m_0()) {
      onRendezvousOrBuffered();
    } else if (tmp0_subject === _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf_0()) {
      prepareSenderForSuspension(waiter, $this, segment, index);
    } else if (tmp0_subject === _get_RESULT_CLOSED_$accessor$yt74tm_10v48j_0()) {
      if (s.compareTo_n4fqi2_k$($this.get_receiversCounter_b035j5_k$()) < 0) {
        segment.cleanPrev_rmgs7f_k$();
      }
      onClosed();
    } else if (tmp0_subject === _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0_0()) {
      segment.cleanPrev_rmgs7f_k$();
      var tmp$ret$3;
      $l$block_5: {
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
        var segment_0 = $this.sendSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
        $l$loop_0: while (true) {
          var sendersAndCloseStatusCur = $this.sendersAndCloseStatus_1.atomicfu$getAndIncrement$long();
          var tmp$ret$0;
          // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
          tmp$ret$0 = sendersAndCloseStatusCur.and_jhajnj_k$(new Long(-1, 268435455));
          var s_0 = tmp$ret$0;
          var closed = _get_isClosedForSend0__kxgf9m(sendersAndCloseStatusCur, $this);
          var tmp$ret$1;
          // Inline function 'kotlin.Long.div' call
          var tmp0_div = get_SEGMENT_SIZE();
          tmp$ret$1 = s_0.div_9s1fi3_k$(toLong(tmp0_div));
          var id = tmp$ret$1;
          var tmp$ret$2;
          // Inline function 'kotlin.Long.rem' call
          var tmp1_rem = get_SEGMENT_SIZE();
          tmp$ret$2 = s_0.rem_9rbcjo_k$(toLong(tmp1_rem));
          var i = tmp$ret$2.toInt_1tsl84_k$();
          if (!segment_0.get_id_kntnx8_k$().equals(id)) {
            var tmp0_elvis_lhs = findSegmentSend($this, id, segment_0);
            var tmp;
            if (tmp0_elvis_lhs == null) {
              var tmp_0;
              if (closed) {
                tmp$ret$3 = onClosed();
                break $l$block_5;
              } else {
                continue $l$loop_0;
              }
              tmp = tmp_0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            segment_0 = tmp;
          }
          var tmp1_subject = updateCellSend($this, segment_0, i, element, s_0, waiter, closed);
          if (tmp1_subject === _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8_0()) {
            segment_0.cleanPrev_rmgs7f_k$();
            tmp$ret$3 = onRendezvousOrBuffered();
            break $l$block_5;
          } else if (tmp1_subject === _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m_0()) {
            tmp$ret$3 = onRendezvousOrBuffered();
            break $l$block_5;
          } else if (tmp1_subject === _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf_0()) {
            if (closed) {
              segment_0.onSlotCleaned_dnmt5m_k$();
              tmp$ret$3 = onClosed();
              break $l$block_5;
            }
            var tmp2_safe_receiver = isInterface(waiter, Waiter) ? waiter : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              prepareSenderForSuspension(tmp2_safe_receiver, $this, segment_0, i);
            }
            var tmp$ret$4;
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImplOnNoWaiter.<anonymous>' call
            var tmp2__anonymous__z9zvc9 = segment_0;
            tmp$ret$4 = Unit_getInstance();
            tmp$ret$3 = tmp$ret$4;
            break $l$block_5;
          } else if (tmp1_subject === _get_RESULT_CLOSED_$accessor$yt74tm_10v48j_0()) {
            if (s_0.compareTo_n4fqi2_k$($this.get_receiversCounter_b035j5_k$()) < 0) {
              segment_0.cleanPrev_rmgs7f_k$();
            }
            tmp$ret$3 = onClosed();
            break $l$block_5;
          } else if (tmp1_subject === _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0_0()) {
            segment_0.cleanPrev_rmgs7f_k$();
            continue $l$loop_0;
          } else if (tmp1_subject === _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m()) {
            var tmp$ret$5;
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl.<anonymous>' call
            var tmp3__anonymous__ufb84q = segment_0;
            throw IllegalStateException_init_$Create$('unexpected');
            tmp$ret$3 = tmp$ret$5;
            break $l$block_5;
          }
        }
      }
    } else {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('unexpected');
    }
  }
  function updateCellSend($this, segment, index, element, s, waiter, closed) {
    segment.storeElement_ffxh39_k$(index, element);
    if (closed)
      return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
    var state = segment.getState_atldmu_k$(index);
    if (state === null) {
      if (bufferOrRendezvousSend($this, s)) {
        if (segment.casState_9z8uvb_k$(index, null, get_BUFFERED())) {
          return _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m_0();
        }
      } else {
        if (waiter == null) {
          return _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m();
        } else {
          if (segment.casState_9z8uvb_k$(index, null, waiter))
            return _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf_0();
        }
      }
    } else {
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        segment.cleanElement_uqemvx_k$(index);
        var tmp;
        if (tryResumeReceiver(state, $this, element)) {
          segment.setState_ebqv3y_k$(index, get_DONE_RCV());
          $this.onReceiveDequeued_4wpjax_k$();
          tmp = _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8_0();
        } else {
          if (!(segment.getAndSetState_20wpe6_k$(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.onCancelledRequest_awh8xx_k$(index, true);
          }
          tmp = _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0_0();
        }
        return tmp;
      }
    }
    return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
  }
  function updateCellSendSlow($this, segment, index, element, s, waiter, closed) {
    while (true) {
      var state = segment.getState_atldmu_k$(index);
      if (state === null) {
        if (bufferOrRendezvousSend($this, s) ? !closed : false) {
          if (segment.casState_9z8uvb_k$(index, null, get_BUFFERED())) {
            return _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m_0();
          }
        } else {
          if (closed) {
            if (segment.casState_9z8uvb_k$(index, null, get_INTERRUPTED_SEND())) {
              segment.onCancelledRequest_awh8xx_k$(index, false);
              return _get_RESULT_CLOSED_$accessor$yt74tm_10v48j_0();
            }
          } else if (waiter == null)
            return _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m();
          else if (segment.casState_9z8uvb_k$(index, null, waiter))
            return _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf_0();
        }
      } else if (state === get_IN_BUFFER()) {
        if (segment.casState_9z8uvb_k$(index, state, get_BUFFERED())) {
          return _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m_0();
        }
      } else if (state === get_INTERRUPTED_RCV()) {
        segment.cleanElement_uqemvx_k$(index);
        return _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0_0();
      } else if (state === get_POISONED()) {
        segment.cleanElement_uqemvx_k$(index);
        return _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0_0();
      } else if (state === get_CHANNEL_CLOSED()) {
        segment.cleanElement_uqemvx_k$(index);
        completeCloseOrCancel($this);
        return _get_RESULT_CLOSED_$accessor$yt74tm_10v48j_0();
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        segment.cleanElement_uqemvx_k$(index);
        var tmp;
        if (state instanceof WaiterEB) {
          tmp = state.waiter_1;
        } else {
          tmp = state;
        }
        var receiver = tmp;
        var tmp_0;
        if (tryResumeReceiver(receiver, $this, element)) {
          segment.setState_ebqv3y_k$(index, get_DONE_RCV());
          $this.onReceiveDequeued_4wpjax_k$();
          tmp_0 = _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8_0();
        } else {
          if (!(segment.getAndSetState_20wpe6_k$(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.onCancelledRequest_awh8xx_k$(index, true);
          }
          tmp_0 = _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0_0();
        }
        return tmp_0;
      }
    }
  }
  function shouldSendSuspend($this, curSendersAndCloseStatus) {
    if (_get_isClosedForSend0__kxgf9m(curSendersAndCloseStatus, $this))
      return false;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    tmp$ret$0 = curSendersAndCloseStatus.and_jhajnj_k$(new Long(-1, 268435455));
    return !bufferOrRendezvousSend($this, tmp$ret$0);
  }
  function bufferOrRendezvousSend($this, curSenders) {
    var tmp;
    if (curSenders.compareTo_n4fqi2_k$(_get_bufferEndCounter__2d4hee($this)) < 0) {
      tmp = true;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.plus' call
      var tmp0_plus = $this.get_receiversCounter_b035j5_k$();
      var tmp1_plus = $this.capacity_1;
      tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(toLong(tmp1_plus));
      tmp = curSenders.compareTo_n4fqi2_k$(tmp$ret$0) < 0;
    }
    return tmp;
  }
  function tryResumeReceiver(_this__u8e3s4, $this, element) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (isInterface(tmp0_subject, SelectInstance)) {
      tmp = _this__u8e3s4.trySelect_fbege0_k$($this, element);
    } else {
      if (tmp0_subject instanceof ReceiveCatching) {
        if (_this__u8e3s4 instanceof ReceiveCatching)
          _this__u8e3s4;
        else
          THROW_CCE();
        var tmp_0 = new ChannelResult(Companion_getInstance_2().success_qotpmt_k$(element));
        var tmp1_safe_receiver = $this.onUndeliveredElement_1;
        tmp = tryResume0(_this__u8e3s4.cont_1, tmp_0, tmp1_safe_receiver == null ? null : bindCancellationFun(tmp1_safe_receiver, element, _this__u8e3s4.cont_1.get_context_h02k06_k$()));
      } else {
        if (tmp0_subject instanceof BufferedChannelIterator) {
          if (_this__u8e3s4 instanceof BufferedChannelIterator)
            _this__u8e3s4;
          else
            THROW_CCE();
          tmp = _this__u8e3s4.tryResumeHasNext_lklmbv_k$(element);
        } else {
          if (isInterface(tmp0_subject, CancellableContinuation)) {
            if (isInterface(_this__u8e3s4, CancellableContinuation))
              _this__u8e3s4;
            else
              THROW_CCE();
            var tmp2_safe_receiver = $this.onUndeliveredElement_1;
            tmp = tryResume0(_this__u8e3s4, element, tmp2_safe_receiver == null ? null : bindCancellationFun(tmp2_safe_receiver, element, _this__u8e3s4.get_context_h02k06_k$()));
          } else {
            var tmp0_error = 'Unexpected receiver type: ' + toString(_this__u8e3s4);
            throw IllegalStateException_init_$Create$(toString(tmp0_error));
          }
        }
      }
    }
    return tmp;
  }
  function receiveOnNoWaiterSuspend($this, segment, index, r, $completion) {
    var tmp$ret$5;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveOnNoWaiterSuspend.<anonymous>' call
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var updCellResult = updateCellReceive($this, segment, index, r, cancellable);
      if (updCellResult === _get_SUSPEND_$accessor$yt74tm_ccb8g1_0()) {
        prepareReceiverForSuspension(cancellable, $this, segment, index);
      } else if (updCellResult === _get_FAILED_$accessor$yt74tm_h47uk8_0()) {
        if (r.compareTo_n4fqi2_k$($this.get_sendersCounter_csvgw7_k$()) < 0) {
          segment.cleanPrev_rmgs7f_k$();
        }
        var tmp$ret$0;
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = $this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
          $l$loop_0: while (true) {
            if ($this.get_isClosedForReceive_v0r77d_k$()) {
              onClosedReceiveOnNoWaiterSuspend($this, cancellable);
              tmp$ret$0 = Unit_getInstance();
              break $l$block_0;
            }
            var r_0 = $this.receivers_1.atomicfu$getAndIncrement$long();
            var tmp$ret$1;
            // Inline function 'kotlin.Long.div' call
            var tmp0_div = get_SEGMENT_SIZE();
            tmp$ret$1 = r_0.div_9s1fi3_k$(toLong(tmp0_div));
            var id = tmp$ret$1;
            var tmp$ret$2;
            // Inline function 'kotlin.Long.rem' call
            var tmp1_rem = get_SEGMENT_SIZE();
            tmp$ret$2 = r_0.rem_9rbcjo_k$(toLong(tmp1_rem));
            var i = tmp$ret$2.toInt_1tsl84_k$();
            if (!segment_0.get_id_kntnx8_k$().equals(id)) {
              var tmp0_elvis_lhs = findSegmentReceive($this, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive($this, segment_0, i, r_0, cancellable);
            var tmp_0;
            if (updCellResult_0 === _get_SUSPEND_$accessor$yt74tm_ccb8g1_0()) {
              var tmp1_safe_receiver = isInterface(cancellable, Waiter) ? cancellable : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp1_safe_receiver, $this, segment_0, i);
              }
              var tmp$ret$3;
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter.<anonymous>' call
              var tmp2__anonymous__z9zvc9 = segment_0;
              tmp$ret$3 = Unit_getInstance();
              tmp_0 = tmp$ret$3;
            } else if (updCellResult_0 === _get_FAILED_$accessor$yt74tm_h47uk8_0()) {
              if (r_0.compareTo_n4fqi2_k$($this.get_sendersCounter_csvgw7_k$()) < 0) {
                segment_0.cleanPrev_rmgs7f_k$();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
              var tmp$ret$4;
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl.<anonymous>' call
              var tmp3__anonymous__ufb84q = segment_0;
              throw IllegalStateException_init_$Create$('unexpected');
              tmp_0 = tmp$ret$4;
            } else {
              segment_0.cleanPrev_rmgs7f_k$();
              var tmp4__anonymous__pkmkx7 = (updCellResult_0 == null ? true : isObject(updCellResult_0)) ? updCellResult_0 : THROW_CCE();
              var tmp0_safe_receiver = $this.onUndeliveredElement_1;
              var onCancellation = tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, tmp4__anonymous__pkmkx7, cancellable.get_context_h02k06_k$());
              cancellable.resume_l1w5in_k$(tmp4__anonymous__pkmkx7, onCancellation);
              tmp_0 = Unit_getInstance();
            }
            tmp$ret$0 = tmp_0;
            break $l$block_0;
          }
        }
      } else {
        segment.cleanPrev_rmgs7f_k$();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        var tmp5__anonymous__kpxxpo = (updCellResult == null ? true : isObject(updCellResult)) ? updCellResult : THROW_CCE();
        var tmp0_safe_receiver_0 = $this.onUndeliveredElement_1;
        var onCancellation_0 = tmp0_safe_receiver_0 == null ? null : bindCancellationFun(tmp0_safe_receiver_0, tmp5__anonymous__kpxxpo, cancellable.get_context_h02k06_k$());
        cancellable.resume_l1w5in_k$(tmp5__anonymous__kpxxpo, onCancellation_0);
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.releaseClaimedReusableContinuation_4y1z8b_k$();
        throw e;
      } else {
        throw $p;
      }
    }
    tmp$ret$5 = cancellable.getResult_clfhg3_k$();
    var tmp0 = tmp$ret$5;
    return tmp0;
  }
  function prepareReceiverForSuspension(_this__u8e3s4, $this, segment, index) {
    $this.onReceiveEnqueued_xu1a6p_k$();
    _this__u8e3s4.invokeOnCancellation_gome2h_k$(segment, index);
  }
  function onClosedReceiveOnNoWaiterSuspend($this, cont) {
    var tmp$ret$1;
    // Inline function 'kotlin.coroutines.resumeWithException' call
    var tmp1_resumeWithException = _get_receiveException__foorc1($this);
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    var tmp0_failure = Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_resumeWithException));
    cont.resumeWith_s3a3yh_k$(tmp$ret$0);
    tmp$ret$1 = Unit_getInstance();
  }
  function receiveCatchingOnNoWaiterSuspend($this, segment, index, r, $completion) {
    var tmp$ret$5;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveCatchingOnNoWaiterSuspend.<anonymous>' call
      var waiter = new ReceiveCatching(cancellable instanceof CancellableContinuationImpl ? cancellable : THROW_CCE());
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var updCellResult = updateCellReceive($this, segment, index, r, waiter);
      if (updCellResult === _get_SUSPEND_$accessor$yt74tm_ccb8g1_0()) {
        prepareReceiverForSuspension(waiter, $this, segment, index);
      } else if (updCellResult === _get_FAILED_$accessor$yt74tm_h47uk8_0()) {
        if (r.compareTo_n4fqi2_k$($this.get_sendersCounter_csvgw7_k$()) < 0) {
          segment.cleanPrev_rmgs7f_k$();
        }
        var tmp$ret$0;
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = $this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
          $l$loop_0: while (true) {
            if ($this.get_isClosedForReceive_v0r77d_k$()) {
              onClosedReceiveCatchingOnNoWaiterSuspend($this, cancellable);
              tmp$ret$0 = Unit_getInstance();
              break $l$block_0;
            }
            var r_0 = $this.receivers_1.atomicfu$getAndIncrement$long();
            var tmp$ret$1;
            // Inline function 'kotlin.Long.div' call
            var tmp0_div = get_SEGMENT_SIZE();
            tmp$ret$1 = r_0.div_9s1fi3_k$(toLong(tmp0_div));
            var id = tmp$ret$1;
            var tmp$ret$2;
            // Inline function 'kotlin.Long.rem' call
            var tmp1_rem = get_SEGMENT_SIZE();
            tmp$ret$2 = r_0.rem_9rbcjo_k$(toLong(tmp1_rem));
            var i = tmp$ret$2.toInt_1tsl84_k$();
            if (!segment_0.get_id_kntnx8_k$().equals(id)) {
              var tmp0_elvis_lhs = findSegmentReceive($this, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive($this, segment_0, i, r_0, waiter);
            var tmp_0;
            if (updCellResult_0 === _get_SUSPEND_$accessor$yt74tm_ccb8g1_0()) {
              var tmp1_safe_receiver = isInterface(waiter, Waiter) ? waiter : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp1_safe_receiver, $this, segment_0, i);
              }
              var tmp$ret$3;
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter.<anonymous>' call
              var tmp2__anonymous__z9zvc9 = segment_0;
              tmp$ret$3 = Unit_getInstance();
              tmp_0 = tmp$ret$3;
            } else if (updCellResult_0 === _get_FAILED_$accessor$yt74tm_h47uk8_0()) {
              if (r_0.compareTo_n4fqi2_k$($this.get_sendersCounter_csvgw7_k$()) < 0) {
                segment_0.cleanPrev_rmgs7f_k$();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
              var tmp$ret$4;
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl.<anonymous>' call
              var tmp3__anonymous__ufb84q = segment_0;
              throw IllegalStateException_init_$Create$('unexpected');
              tmp_0 = tmp$ret$4;
            } else {
              segment_0.cleanPrev_rmgs7f_k$();
              var tmp4__anonymous__pkmkx7 = (updCellResult_0 == null ? true : isObject(updCellResult_0)) ? updCellResult_0 : THROW_CCE();
              var tmp_1 = new ChannelResult(Companion_getInstance_2().success_qotpmt_k$(tmp4__anonymous__pkmkx7));
              var tmp0_safe_receiver = $this.onUndeliveredElement_1;
              cancellable.resume_l1w5in_k$(tmp_1, tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, tmp4__anonymous__pkmkx7, cancellable.get_context_h02k06_k$()));
              tmp_0 = Unit_getInstance();
            }
            tmp$ret$0 = tmp_0;
            break $l$block_0;
          }
        }
      } else {
        segment.cleanPrev_rmgs7f_k$();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveCatchingOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        var tmp5__anonymous__kpxxpo = (updCellResult == null ? true : isObject(updCellResult)) ? updCellResult : THROW_CCE();
        var tmp_2 = new ChannelResult(Companion_getInstance_2().success_qotpmt_k$(tmp5__anonymous__kpxxpo));
        var tmp0_safe_receiver_0 = $this.onUndeliveredElement_1;
        cancellable.resume_l1w5in_k$(tmp_2, tmp0_safe_receiver_0 == null ? null : bindCancellationFun(tmp0_safe_receiver_0, tmp5__anonymous__kpxxpo, cancellable.get_context_h02k06_k$()));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.releaseClaimedReusableContinuation_4y1z8b_k$();
        throw e;
      } else {
        throw $p;
      }
    }
    tmp$ret$5 = cancellable.getResult_clfhg3_k$();
    var tmp_3 = tmp$ret$5;
    if (tmp_3 === get_COROUTINE_SUSPENDED())
      return tmp_3;
    var tmp0 = new ChannelResult(tmp_3.holder_1);
    return tmp0;
  }
  function onClosedReceiveCatchingOnNoWaiterSuspend($this, cont) {
    var tmp$ret$1;
    // Inline function 'kotlin.coroutines.resume' call
    var tmp1_resume = Companion_getInstance_2().closed_raq7mh_k$($this.get_closeCause_gbqkm2_k$());
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.success' call
    var tmp0_success = Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(new ChannelResult(tmp1_resume));
    cont.resumeWith_s3a3yh_k$(tmp$ret$0);
    tmp$ret$1 = Unit_getInstance();
  }
  function receiveImpl($this, waiter, onElementRetrieved, onSuspend, onClosed, onNoWaiterSuspend) {
    var segment = $this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    $l$loop_0: while (true) {
      if ($this.get_isClosedForReceive_v0r77d_k$())
        return onClosed();
      var r = $this.receivers_1.atomicfu$getAndIncrement$long();
      var tmp$ret$0;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = get_SEGMENT_SIZE();
      tmp$ret$0 = r.div_9s1fi3_k$(toLong(tmp0_div));
      var id = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.Long.rem' call
      var tmp1_rem = get_SEGMENT_SIZE();
      tmp$ret$1 = r.rem_9rbcjo_k$(toLong(tmp1_rem));
      var i = tmp$ret$1.toInt_1tsl84_k$();
      if (!segment.get_id_kntnx8_k$().equals(id)) {
        var tmp0_elvis_lhs = findSegmentReceive($this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      var updCellResult = updateCellReceive($this, segment, i, r, waiter);
      var tmp_0;
      if (updCellResult === _get_SUSPEND_$accessor$yt74tm_ccb8g1_0()) {
        var tmp1_safe_receiver = (!(waiter == null) ? isInterface(waiter, Waiter) : false) ? waiter : null;
        if (tmp1_safe_receiver == null)
          null;
        else {
          prepareReceiverForSuspension(tmp1_safe_receiver, $this, segment, i);
        }
        tmp_0 = onSuspend(segment, i, r);
      } else if (updCellResult === _get_FAILED_$accessor$yt74tm_h47uk8_0()) {
        if (r.compareTo_n4fqi2_k$($this.get_sendersCounter_csvgw7_k$()) < 0) {
          segment.cleanPrev_rmgs7f_k$();
        }
        continue $l$loop_0;
      } else if (updCellResult === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
        tmp_0 = onNoWaiterSuspend(segment, i, r);
      } else {
        segment.cleanPrev_rmgs7f_k$();
        tmp_0 = onElementRetrieved((updCellResult == null ? true : isObject(updCellResult)) ? updCellResult : THROW_CCE());
      }
      return tmp_0;
    }
  }
  function receiveImplOnNoWaiter($this, segment, index, r, waiter, onElementRetrieved, onClosed) {
    var updCellResult = updateCellReceive($this, segment, index, r, waiter);
    if (updCellResult === _get_SUSPEND_$accessor$yt74tm_ccb8g1_0()) {
      prepareReceiverForSuspension(waiter, $this, segment, index);
    } else if (updCellResult === _get_FAILED_$accessor$yt74tm_h47uk8_0()) {
      if (r.compareTo_n4fqi2_k$($this.get_sendersCounter_csvgw7_k$()) < 0) {
        segment.cleanPrev_rmgs7f_k$();
      }
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
        var segment_0 = $this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
        $l$loop_0: while (true) {
          if ($this.get_isClosedForReceive_v0r77d_k$()) {
            tmp$ret$0 = onClosed();
            break $l$block_0;
          }
          var r_0 = $this.receivers_1.atomicfu$getAndIncrement$long();
          var tmp$ret$1;
          // Inline function 'kotlin.Long.div' call
          var tmp0_div = get_SEGMENT_SIZE();
          tmp$ret$1 = r_0.div_9s1fi3_k$(toLong(tmp0_div));
          var id = tmp$ret$1;
          var tmp$ret$2;
          // Inline function 'kotlin.Long.rem' call
          var tmp1_rem = get_SEGMENT_SIZE();
          tmp$ret$2 = r_0.rem_9rbcjo_k$(toLong(tmp1_rem));
          var i = tmp$ret$2.toInt_1tsl84_k$();
          if (!segment_0.get_id_kntnx8_k$().equals(id)) {
            var tmp0_elvis_lhs = findSegmentReceive($this, id, segment_0);
            var tmp;
            if (tmp0_elvis_lhs == null) {
              continue $l$loop_0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            segment_0 = tmp;
          }
          var updCellResult_0 = updateCellReceive($this, segment_0, i, r_0, waiter);
          var tmp_0;
          if (updCellResult_0 === _get_SUSPEND_$accessor$yt74tm_ccb8g1_0()) {
            var tmp1_safe_receiver = isInterface(waiter, Waiter) ? waiter : null;
            if (tmp1_safe_receiver == null)
              null;
            else {
              prepareReceiverForSuspension(tmp1_safe_receiver, $this, segment_0, i);
            }
            var tmp$ret$3;
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter.<anonymous>' call
            var tmp2__anonymous__z9zvc9 = segment_0;
            tmp$ret$3 = Unit_getInstance();
            tmp_0 = tmp$ret$3;
          } else if (updCellResult_0 === _get_FAILED_$accessor$yt74tm_h47uk8_0()) {
            if (r_0.compareTo_n4fqi2_k$($this.get_sendersCounter_csvgw7_k$()) < 0) {
              segment_0.cleanPrev_rmgs7f_k$();
            }
            continue $l$loop_0;
          } else if (updCellResult_0 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
            var tmp$ret$4;
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl.<anonymous>' call
            var tmp3__anonymous__ufb84q = segment_0;
            throw IllegalStateException_init_$Create$('unexpected');
            tmp_0 = tmp$ret$4;
          } else {
            segment_0.cleanPrev_rmgs7f_k$();
            tmp_0 = onElementRetrieved((updCellResult_0 == null ? true : isObject(updCellResult_0)) ? updCellResult_0 : THROW_CCE());
          }
          tmp$ret$0 = tmp_0;
          break $l$block_0;
        }
      }
    } else {
      segment.cleanPrev_rmgs7f_k$();
      onElementRetrieved((updCellResult == null ? true : isObject(updCellResult)) ? updCellResult : THROW_CCE());
    }
  }
  function updateCellReceive($this, segment, index, r, waiter) {
    var state = segment.getState_atldmu_k$(index);
    if (state === null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var tmp0__get_sendersCounter__qlexar = $this.sendersAndCloseStatus_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      tmp$ret$0 = tmp0__get_sendersCounter__qlexar.and_jhajnj_k$(new Long(-1, 268435455));
      var senders = tmp$ret$0;
      if (r.compareTo_n4fqi2_k$(senders) >= 0) {
        if (waiter === null) {
          return _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky();
        }
        if (segment.casState_9z8uvb_k$(index, state, waiter)) {
          expandBuffer($this);
          return _get_SUSPEND_$accessor$yt74tm_ccb8g1_0();
        }
      }
    } else if (state === get_BUFFERED())
      if (segment.casState_9z8uvb_k$(index, state, get_DONE_RCV())) {
        expandBuffer($this);
        return segment.retrieveElement_pz16u9_k$(index);
      }
    return updateCellReceiveSlow($this, segment, index, r, waiter);
  }
  function updateCellReceiveSlow($this, segment, index, r, waiter) {
    $l$loop: while (true) {
      var state = segment.getState_atldmu_k$(index);
      if (state === null ? true : state === get_IN_BUFFER()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var tmp0__get_sendersCounter__qlexar = $this.sendersAndCloseStatus_1.get_kotlinx$atomicfu$value_vi2am5_k$();
        tmp$ret$0 = tmp0__get_sendersCounter__qlexar.and_jhajnj_k$(new Long(-1, 268435455));
        var senders = tmp$ret$0;
        if (r.compareTo_n4fqi2_k$(senders) < 0) {
          if (segment.casState_9z8uvb_k$(index, state, get_POISONED())) {
            expandBuffer($this);
            return _get_FAILED_$accessor$yt74tm_h47uk8_0();
          }
        } else {
          if (waiter === null) {
            return _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky();
          }
          if (segment.casState_9z8uvb_k$(index, state, waiter)) {
            expandBuffer($this);
            return _get_SUSPEND_$accessor$yt74tm_ccb8g1_0();
          }
        }
      } else if (state === get_BUFFERED()) {
        if (segment.casState_9z8uvb_k$(index, state, get_DONE_RCV())) {
          expandBuffer($this);
          return segment.retrieveElement_pz16u9_k$(index);
        }
      } else if (state === get_INTERRUPTED_SEND())
        return _get_FAILED_$accessor$yt74tm_h47uk8_0();
      else if (state === get_POISONED())
        return _get_FAILED_$accessor$yt74tm_h47uk8_0();
      else if (state === get_CHANNEL_CLOSED()) {
        expandBuffer($this);
        return _get_FAILED_$accessor$yt74tm_h47uk8_0();
      } else if (state === get_RESUMING_BY_EB())
        continue $l$loop;
      else {
        if (segment.casState_9z8uvb_k$(index, state, get_RESUMING_BY_RCV())) {
          var helpExpandBuffer = state instanceof WaiterEB;
          var tmp;
          if (state instanceof WaiterEB) {
            tmp = state.waiter_1;
          } else {
            tmp = state;
          }
          var sender = tmp;
          var tmp_0;
          if (tryResumeSender(sender, $this, segment, index)) {
            segment.setState_ebqv3y_k$(index, get_DONE_RCV());
            expandBuffer($this);
            tmp_0 = segment.retrieveElement_pz16u9_k$(index);
          } else {
            segment.setState_ebqv3y_k$(index, get_INTERRUPTED_SEND());
            segment.onCancelledRequest_awh8xx_k$(index, false);
            if (helpExpandBuffer) {
              expandBuffer($this);
            }
            tmp_0 = _get_FAILED_$accessor$yt74tm_h47uk8_0();
          }
          return tmp_0;
        }
      }
    }
  }
  function tryResumeSender(_this__u8e3s4, $this, segment, index) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (isInterface(tmp0_subject, CancellableContinuation)) {
      if (isInterface(_this__u8e3s4, CancellableContinuation))
        _this__u8e3s4;
      else
        THROW_CCE();
      tmp = tryResume0(_this__u8e3s4, Unit_getInstance());
    } else {
      if (isInterface(tmp0_subject, SelectInstance)) {
        if (_this__u8e3s4 instanceof SelectImplementation)
          _this__u8e3s4;
        else
          THROW_CCE();
        var trySelectResult = _this__u8e3s4.trySelectDetailed_t8yc08_k$($this, Unit_getInstance());
        if (trySelectResult === TrySelectDetailedResult_REREGISTER_getInstance()) {
          segment.cleanElement_uqemvx_k$(index);
        }
        tmp = trySelectResult === TrySelectDetailedResult_SUCCESSFUL_getInstance();
      } else {
        if (tmp0_subject instanceof SendBroadcast) {
          tmp = tryResume0(_this__u8e3s4.cont_1, true);
        } else {
          var tmp0_error = 'Unexpected waiter: ' + toString(_this__u8e3s4);
          throw IllegalStateException_init_$Create$(toString(tmp0_error));
        }
      }
    }
    return tmp;
  }
  function expandBuffer($this) {
    if (_get_isRendezvousOrUnlimited__3mdufi($this))
      return Unit_getInstance();
    var segment = $this.bufferEndSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    try_again: while (true) {
      var b = $this.bufferEnd_1.atomicfu$getAndIncrement$long();
      var tmp$ret$0;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = get_SEGMENT_SIZE();
      tmp$ret$0 = b.div_9s1fi3_k$(toLong(tmp0_div));
      var id = tmp$ret$0;
      var s = $this.get_sendersCounter_csvgw7_k$();
      if (s.compareTo_n4fqi2_k$(b) <= 0) {
        if (segment.get_id_kntnx8_k$().compareTo_n4fqi2_k$(id) < 0 ? !(segment.get_next_wor1vg_k$() == null) : false) {
          moveSegmentBufferEndToSpecifiedOrLast($this, id, segment);
        }
        incCompletedExpandBufferAttempts$default($this);
        return Unit_getInstance();
      }
      if (!segment.get_id_kntnx8_k$().equals(id)) {
        var tmp0_elvis_lhs = findSegmentBufferEnd($this, id, segment, b);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue try_again;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      var tmp$ret$1;
      // Inline function 'kotlin.Long.rem' call
      var tmp1_rem = get_SEGMENT_SIZE();
      tmp$ret$1 = b.rem_9rbcjo_k$(toLong(tmp1_rem));
      var i = tmp$ret$1.toInt_1tsl84_k$();
      if (updateCellExpandBuffer($this, segment, i, b)) {
        incCompletedExpandBufferAttempts$default($this);
        return Unit_getInstance();
      } else {
        incCompletedExpandBufferAttempts$default($this);
        continue try_again;
      }
    }
  }
  function updateCellExpandBuffer($this, segment, index, b) {
    var state = segment.getState_atldmu_k$(index);
    if (!(state == null) ? isInterface(state, Waiter) : false) {
      if (b.compareTo_n4fqi2_k$($this.receivers_1.get_kotlinx$atomicfu$value_vi2am5_k$()) >= 0) {
        if (segment.casState_9z8uvb_k$(index, state, get_RESUMING_BY_EB())) {
          var tmp;
          if (tryResumeSender(state, $this, segment, index)) {
            segment.setState_ebqv3y_k$(index, get_BUFFERED());
            tmp = true;
          } else {
            segment.setState_ebqv3y_k$(index, get_INTERRUPTED_SEND());
            segment.onCancelledRequest_awh8xx_k$(index, false);
            tmp = false;
          }
          return tmp;
        }
      }
    }
    return updateCellExpandBufferSlow($this, segment, index, b);
  }
  function updateCellExpandBufferSlow($this, segment, index, b) {
    $l$loop: while (true) {
      var state = segment.getState_atldmu_k$(index);
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        if (b.compareTo_n4fqi2_k$($this.receivers_1.get_kotlinx$atomicfu$value_vi2am5_k$()) < 0) {
          if (segment.casState_9z8uvb_k$(index, state, new WaiterEB(state)))
            return true;
        } else {
          if (segment.casState_9z8uvb_k$(index, state, get_RESUMING_BY_EB())) {
            var tmp;
            if (tryResumeSender(state, $this, segment, index)) {
              segment.setState_ebqv3y_k$(index, get_BUFFERED());
              tmp = true;
            } else {
              segment.setState_ebqv3y_k$(index, get_INTERRUPTED_SEND());
              segment.onCancelledRequest_awh8xx_k$(index, false);
              tmp = false;
            }
            return tmp;
          }
        }
      } else {
        if (state === get_INTERRUPTED_SEND())
          return false;
        else {
          if (state === null) {
            if (segment.casState_9z8uvb_k$(index, state, get_IN_BUFFER()))
              return true;
          } else {
            if (state === get_BUFFERED())
              return true;
            else {
              if ((state === get_POISONED() ? true : state === get_DONE_RCV()) ? true : state === get_INTERRUPTED_RCV())
                return true;
              else {
                if (state === get_CHANNEL_CLOSED())
                  return true;
                else {
                  if (state === get_RESUMING_BY_RCV())
                    continue $l$loop;
                  else {
                    var tmp0_error = 'Unexpected cell state: ' + toString_0(state);
                    throw IllegalStateException_init_$Create$(toString(tmp0_error));
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  function incCompletedExpandBufferAttempts($this, nAttempts) {
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.completedExpandBuffersAndPauseFlag_1.atomicfu$addAndGet$long(nAttempts);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.incCompletedExpandBufferAttempts.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
    tmp$ret$0 = !tmp0_also.and_jhajnj_k$(new Long(0, 1073741824)).equals(new Long(0, 0));
    if (tmp$ret$0) {
      $l$loop: while (true) {
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
        var tmp0__get_ebPauseExpandBuffers__r9jmrz = $this.completedExpandBuffersAndPauseFlag_1.get_kotlinx$atomicfu$value_vi2am5_k$();
        tmp$ret$1 = !tmp0__get_ebPauseExpandBuffers__r9jmrz.and_jhajnj_k$(new Long(0, 1073741824)).equals(new Long(0, 0));
        if (!tmp$ret$1) {
          break $l$loop;
        }
      }
    }
    tmp$ret$2 = tmp0_also;
  }
  function incCompletedExpandBufferAttempts$default($this, nAttempts, $super) {
    nAttempts = nAttempts === VOID ? new Long(1, 0) : nAttempts;
    return incCompletedExpandBufferAttempts($this, nAttempts);
  }
  function onClosedSelectOnSend($this, element, select) {
    var tmp0_safe_receiver = $this.onUndeliveredElement_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      callUndeliveredElement(tmp0_safe_receiver, element, select.get_context_h02k06_k$());
    }
    select.selectInRegistrationPhase_lcwf8x_k$(get_CHANNEL_CLOSED());
  }
  function processResultSelectSend($this, ignoredParam, selectResult) {
    var tmp;
    if (selectResult === get_CHANNEL_CLOSED()) {
      throw $this.get_sendException_qpq1ry_k$();
    } else {
      tmp = $this;
    }
    return tmp;
  }
  function registerSelectForReceive($this, select, ignoredParam) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
      var segment = $this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      $l$loop_0: while (true) {
        if ($this.get_isClosedForReceive_v0r77d_k$()) {
          onClosedSelectOnReceive($this, select);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_0;
        }
        var r = $this.receivers_1.atomicfu$getAndIncrement$long();
        var tmp$ret$1;
        // Inline function 'kotlin.Long.div' call
        var tmp0_div = get_SEGMENT_SIZE();
        tmp$ret$1 = r.div_9s1fi3_k$(toLong(tmp0_div));
        var id = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'kotlin.Long.rem' call
        var tmp1_rem = get_SEGMENT_SIZE();
        tmp$ret$2 = r.rem_9rbcjo_k$(toLong(tmp1_rem));
        var i = tmp$ret$2.toInt_1tsl84_k$();
        if (!segment.get_id_kntnx8_k$().equals(id)) {
          var tmp0_elvis_lhs = findSegmentReceive($this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var updCellResult = updateCellReceive($this, segment, i, r, select);
        var tmp_0;
        if (updCellResult === _get_SUSPEND_$accessor$yt74tm_ccb8g1_0()) {
          var tmp1_safe_receiver = isInterface(select, Waiter) ? select : null;
          if (tmp1_safe_receiver == null)
            null;
          else {
            prepareReceiverForSuspension(tmp1_safe_receiver, $this, segment, i);
          }
          var tmp$ret$3;
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.registerSelectForReceive.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = segment;
          tmp$ret$3 = Unit_getInstance();
          tmp_0 = tmp$ret$3;
        } else if (updCellResult === _get_FAILED_$accessor$yt74tm_h47uk8_0()) {
          if (r.compareTo_n4fqi2_k$($this.get_sendersCounter_csvgw7_k$()) < 0) {
            segment.cleanPrev_rmgs7f_k$();
          }
          continue $l$loop_0;
        } else if (updCellResult === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
          var tmp$ret$4;
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl.<anonymous>' call
          var tmp3__anonymous__ufb84q = segment;
          throw IllegalStateException_init_$Create$('unexpected');
          tmp_0 = tmp$ret$4;
        } else {
          segment.cleanPrev_rmgs7f_k$();
          var tmp4__anonymous__pkmkx7 = (updCellResult == null ? true : isObject(updCellResult)) ? updCellResult : THROW_CCE();
          select.selectInRegistrationPhase_lcwf8x_k$(tmp4__anonymous__pkmkx7);
          tmp_0 = Unit_getInstance();
        }
        tmp$ret$0 = tmp_0;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  }
  function onClosedSelectOnReceive($this, select) {
    select.selectInRegistrationPhase_lcwf8x_k$(get_CHANNEL_CLOSED());
  }
  function processResultSelectReceive($this, ignoredParam, selectResult) {
    var tmp;
    if (selectResult === get_CHANNEL_CLOSED()) {
      throw _get_receiveException__foorc1($this);
    } else {
      tmp = selectResult;
    }
    return tmp;
  }
  function processResultSelectReceiveOrNull($this, ignoredParam, selectResult) {
    var tmp;
    if (selectResult === get_CHANNEL_CLOSED()) {
      var tmp_0;
      if ($this.get_closeCause_gbqkm2_k$() == null) {
        tmp_0 = null;
      } else {
        throw _get_receiveException__foorc1($this);
      }
      tmp = tmp_0;
    } else {
      tmp = selectResult;
    }
    return tmp;
  }
  function processResultSelectReceiveCatching($this, ignoredParam, selectResult) {
    var tmp;
    if (selectResult === get_CHANNEL_CLOSED()) {
      tmp = Companion_getInstance_2().closed_raq7mh_k$($this.get_closeCause_gbqkm2_k$());
    } else {
      var tmp_0 = Companion_getInstance_2();
      tmp = tmp_0.success_qotpmt_k$((selectResult == null ? true : isObject(selectResult)) ? selectResult : THROW_CCE());
    }
    return new ChannelResult(tmp);
  }
  function _get_onUndeliveredElementReceiveCancellationConstructor__scoip3($this) {
    return $this.onUndeliveredElementReceiveCancellationConstructor_1;
  }
  function BufferedChannelIterator($outer) {
    this.$this_1 = $outer;
    BeforeResumeCancelHandler.call(this);
    this.receiveResult_1 = get_NO_RECEIVE_RESULT();
    this.continuation_1 = null;
    this.segment_1 = null;
    this.index_1 = -1;
  }
  protoOf(BufferedChannelIterator).invoke_7fb7sc_k$ = function (cause) {
    var tmp0_safe_receiver = this.segment_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.onCancellation_8vow63_k$(this.index_1, null);
    }
  };
  protoOf(BufferedChannelIterator).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  protoOf(BufferedChannelIterator).hasNext_4tgia2_k$ = function ($completion) {
    var tmp = new $hasNextCOROUTINE$7(this, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BufferedChannelIterator).invokeOnCancellation_gome2h_k$ = function (segment, index) {
    this.segment_1 = segment;
    this.index_1 = index;
    var tmp0_safe_receiver = this.continuation_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.asHandler' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = this;
      tmp$ret$1 = tmp$ret$0;
      tmp0_safe_receiver.invokeOnCancellation_yygv6h_k$(tmp$ret$1);
    }
  };
  protoOf(BufferedChannelIterator).next_20eer_k$ = function () {
    var result = this.receiveResult_1;
    // Inline function 'kotlin.check' call
    var tmp0_check = !(result === get_NO_RECEIVE_RESULT());
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.BufferedChannelIterator.next.<anonymous>' call
      tmp$ret$0 = '`hasNext()` has not been invoked';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.receiveResult_1 = get_NO_RECEIVE_RESULT();
    if (result === get_CHANNEL_CLOSED())
      throw recoverStackTrace_0(_get_receiveException__foorc1(this.$this_1));
    return (result == null ? true : isObject(result)) ? result : THROW_CCE();
  };
  protoOf(BufferedChannelIterator).tryResumeHasNext_lklmbv_k$ = function (element) {
    var cont = ensureNotNull(this.continuation_1);
    this.continuation_1 = null;
    this.receiveResult_1 = element;
    var tmp0_safe_receiver = this.$this_1.onUndeliveredElement_1;
    return tryResume0(cont, true, tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, element, cont.get_context_h02k06_k$()));
  };
  protoOf(BufferedChannelIterator).tryResumeHasNextOnClosedChannel_mblfgi_k$ = function () {
    var cont = ensureNotNull(this.continuation_1);
    this.continuation_1 = null;
    this.receiveResult_1 = get_CHANNEL_CLOSED();
    var cause = this.$this_1.get_closeCause_gbqkm2_k$();
    if (cause == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      cont.resumeWith_s3a3yh_k$(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp2_resumeWithException = recoverStackTrace(cause, cont);
      var tmp$ret$2;
      // Inline function 'kotlin.Companion.failure' call
      var tmp1_failure = Companion_getInstance();
      tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(tmp2_resumeWithException));
      cont.resumeWith_s3a3yh_k$(tmp$ret$2);
      tmp$ret$3 = Unit_getInstance();
    }
  };
  function _get__closeCause__c2eaw1($this) {
    return $this._closeCause_1;
  }
  function _get_receiveException__foorc1($this) {
    var tmp0_elvis_lhs = $this.get_closeCause_gbqkm2_k$();
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  }
  function _get_closeHandler__gfpg7t($this) {
    return $this.closeHandler_1;
  }
  function invokeCloseHandler($this) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.getAndUpdate' call
      var tmp0_getAndUpdate = $this.closeHandler_1;
      while (true) {
        var cur = tmp0_getAndUpdate.get_kotlinx$atomicfu$value_vi2am5_k$();
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.invokeCloseHandler.<anonymous>' call
        var tmp;
        if (cur === null) {
          tmp = get_CLOSE_HANDLER_CLOSED();
        } else {
          tmp = get_CLOSE_HANDLER_INVOKED();
        }
        tmp$ret$0 = tmp;
        var upd = tmp$ret$0;
        if (tmp0_getAndUpdate.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = cur;
          break $l$block;
        }
      }
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var closeHandler = tmp_0;
    if (typeof closeHandler === 'function')
      closeHandler;
    else
      THROW_CCE();
    closeHandler($this.get_closeCause_gbqkm2_k$());
  }
  function markClosed($this) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp0_update = $this.sendersAndCloseStatus_1;
      while (true) {
        var cur = tmp0_update.get_kotlinx$atomicfu$value_vi2am5_k$();
        var tmp$ret$3;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.markClosed.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        tmp$ret$0 = cur.shr_wjue3g_k$(60).toInt_1tsl84_k$();
        var tmp0_subject = tmp$ret$0;
        var tmp;
        switch (tmp0_subject) {
          case 0:
            var tmp$ret$1;
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
            tmp$ret$1 = cur.and_jhajnj_k$(new Long(-1, 268435455));

            tmp = constructSendersAndCloseStatus(tmp$ret$1, 2);
            break;
          case 1:
            var tmp$ret$2;
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
            tmp$ret$2 = cur.and_jhajnj_k$(new Long(-1, 268435455));

            tmp = constructSendersAndCloseStatus(tmp$ret$2, 3);
            break;
          default:
            return Unit_getInstance();
        }
        tmp$ret$3 = tmp;
        var upd = tmp$ret$3;
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$4 = Unit_getInstance();
          break $l$block;
        }
      }
    }
    return tmp$ret$4;
  }
  function markCancelled($this) {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp0_update = $this.sendersAndCloseStatus_1;
      while (true) {
        var cur = tmp0_update.get_kotlinx$atomicfu$value_vi2am5_k$();
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.markCancelled.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        tmp$ret$0 = cur.and_jhajnj_k$(new Long(-1, 268435455));
        tmp$ret$1 = constructSendersAndCloseStatus(tmp$ret$0, 3);
        var upd = tmp$ret$1;
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$2 = Unit_getInstance();
          break $l$block;
        }
      }
    }
    return tmp$ret$2;
  }
  function markCancellationStarted($this) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp0_update = $this.sendersAndCloseStatus_1;
      while (true) {
        var cur = tmp0_update.get_kotlinx$atomicfu$value_vi2am5_k$();
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.markCancellationStarted.<anonymous>' call
        var tmp;
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        tmp$ret$0 = cur.shr_wjue3g_k$(60).toInt_1tsl84_k$();
        if (tmp$ret$0 === 0) {
          var tmp$ret$1;
          // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
          tmp$ret$1 = cur.and_jhajnj_k$(new Long(-1, 268435455));
          tmp = constructSendersAndCloseStatus(tmp$ret$1, 1);
        } else {
          return Unit_getInstance();
        }
        tmp$ret$2 = tmp;
        var upd = tmp$ret$2;
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$3 = Unit_getInstance();
          break $l$block;
        }
      }
    }
    return tmp$ret$3;
  }
  function completeCloseOrCancel($this) {
    $this.get_isClosedForSend_ajczci_k$();
  }
  function completeClose($this, sendersCur) {
    var lastSegment = closeLinkedList($this);
    if ($this.get_isConflatedDropOldest_qp2q39_k$()) {
      var lastBufferedCellGlobalIndex = markAllEmptyCellsAsClosed($this, lastSegment);
      if (!lastBufferedCellGlobalIndex.equals(new Long(-1, -1))) {
        $this.dropFirstElementUntilTheSpecifiedCellIsInTheBuffer_v9ze1j_k$(lastBufferedCellGlobalIndex);
      }
    }
    cancelSuspendedReceiveRequests($this, lastSegment, sendersCur);
    return lastSegment;
  }
  function completeCancel($this, sendersCur) {
    var lastSegment = completeClose($this, sendersCur);
    removeUnprocessedElements($this, lastSegment);
  }
  function closeLinkedList($this) {
    var lastSegment = $this.bufferEndSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.let' call
    var tmp0_let = $this.sendSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (tmp0_let.get_id_kntnx8_k$().compareTo_n4fqi2_k$(lastSegment.get_id_kntnx8_k$()) > 0) {
      lastSegment = tmp0_let;
      tmp = Unit_getInstance();
    }
    tmp$ret$0 = tmp;
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp1_let = $this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    if (tmp1_let.get_id_kntnx8_k$().compareTo_n4fqi2_k$(lastSegment.get_id_kntnx8_k$()) > 0) {
      lastSegment = tmp1_let;
      tmp_0 = Unit_getInstance();
    }
    tmp$ret$1 = tmp_0;
    return close(lastSegment);
  }
  function markAllEmptyCellsAsClosed($this, lastSegment) {
    var segment = lastSegment;
    while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp$ret$1;
          // Inline function 'kotlin.Long.plus' call
          var tmp$ret$0;
          // Inline function 'kotlin.Long.times' call
          var tmp0_times = segment.get_id_kntnx8_k$();
          var tmp1_times = get_SEGMENT_SIZE();
          tmp$ret$0 = tmp0_times.times_2zfqpc_k$(toLong(tmp1_times));
          var tmp2_plus = tmp$ret$0;
          tmp$ret$1 = tmp2_plus.plus_u6jwas_k$(toLong(index));
          var globalIndex = tmp$ret$1;
          if (globalIndex.compareTo_n4fqi2_k$($this.get_receiversCounter_b035j5_k$()) < 0)
            return new Long(-1, -1);
          cell_update: while (true) {
            var state = segment.getState_atldmu_k$(index);
            if (state === null ? true : state === get_IN_BUFFER()) {
              if (segment.casState_9z8uvb_k$(index, state, get_CHANNEL_CLOSED())) {
                segment.onSlotCleaned_dnmt5m_k$();
                break cell_update;
              }
            } else if (state === get_BUFFERED())
              return globalIndex;
            else
              break cell_update;
          }
        }
         while (0 <= inductionVariable);
      var tmp1_elvis_lhs = segment.get_prev_wosl18_k$();
      var tmp;
      if (tmp1_elvis_lhs == null) {
        return new Long(-1, -1);
      } else {
        tmp = tmp1_elvis_lhs;
      }
      segment = tmp;
    }
  }
  function removeUnprocessedElements($this, lastSegment) {
    var onUndeliveredElement = $this.onUndeliveredElement_1;
    var undeliveredElementException = null;
    var suspendedSenders = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp$ret$1;
          // Inline function 'kotlin.Long.plus' call
          var tmp$ret$0;
          // Inline function 'kotlin.Long.times' call
          var tmp0_times = segment.get_id_kntnx8_k$();
          var tmp1_times = get_SEGMENT_SIZE();
          tmp$ret$0 = tmp0_times.times_2zfqpc_k$(toLong(tmp1_times));
          var tmp2_plus = tmp$ret$0;
          tmp$ret$1 = tmp2_plus.plus_u6jwas_k$(toLong(index));
          var globalIndex = tmp$ret$1;
          update_cell: while (true) {
            var state = segment.getState_atldmu_k$(index);
            if (state === get_DONE_RCV())
              break process_segments;
            else {
              if (state === get_BUFFERED()) {
                if (globalIndex.compareTo_n4fqi2_k$($this.get_receiversCounter_b035j5_k$()) < 0)
                  break process_segments;
                if (segment.casState_9z8uvb_k$(index, state, get_CHANNEL_CLOSED())) {
                  if (!(onUndeliveredElement == null)) {
                    var element = segment.getElement_hln8g5_k$(index);
                    undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element, undeliveredElementException);
                  }
                  segment.cleanElement_uqemvx_k$(index);
                  segment.onSlotCleaned_dnmt5m_k$();
                  break update_cell;
                }
              } else {
                if (state === get_IN_BUFFER() ? true : state === null) {
                  if (segment.casState_9z8uvb_k$(index, state, get_CHANNEL_CLOSED())) {
                    segment.onSlotCleaned_dnmt5m_k$();
                    break update_cell;
                  }
                } else {
                  var tmp;
                  if (!(state == null) ? isInterface(state, Waiter) : false) {
                    tmp = true;
                  } else {
                    tmp = state instanceof WaiterEB;
                  }
                  if (tmp) {
                    if (globalIndex.compareTo_n4fqi2_k$($this.get_receiversCounter_b035j5_k$()) < 0)
                      break process_segments;
                    var tmp_0;
                    if (state instanceof WaiterEB) {
                      tmp_0 = state.waiter_1;
                    } else {
                      tmp_0 = (!(state == null) ? isInterface(state, Waiter) : false) ? state : THROW_CCE();
                    }
                    var sender = tmp_0;
                    if (segment.casState_9z8uvb_k$(index, state, get_CHANNEL_CLOSED())) {
                      if (!(onUndeliveredElement == null)) {
                        var element_0 = segment.getElement_hln8g5_k$(index);
                        undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element_0, undeliveredElementException);
                      }
                      suspendedSenders = InlineList__plus_impl_nuetvo(suspendedSenders, sender);
                      segment.cleanElement_uqemvx_k$(index);
                      segment.onSlotCleaned_dnmt5m_k$();
                      break update_cell;
                    }
                  } else {
                    if (state === get_RESUMING_BY_EB() ? true : state === get_RESUMING_BY_RCV())
                      break process_segments;
                    else {
                      if (state === get_RESUMING_BY_EB())
                        continue update_cell;
                      else {
                        break update_cell;
                      }
                    }
                  }
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      var tmp1_elvis_lhs = segment.get_prev_wosl18_k$();
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        break process_segments;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      segment = tmp_1;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp3_forEachReversed = suspendedSenders;
      var tmp0_subject = _get_holder__f6h5pd(tmp3_forEachReversed);
      if (tmp0_subject == null) {
        tmp$ret$2 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.removeUnprocessedElements.<anonymous>' call
          var tmp_2 = _get_holder__f6h5pd(tmp3_forEachReversed);
          var tmp4__anonymous__pkmkx7 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
          resumeSenderOnCancelledChannel(tmp4__anonymous__pkmkx7, $this);
        } else {
          var tmp_3 = _get_holder__f6h5pd(tmp3_forEachReversed);
          var list = tmp_3 instanceof ArrayList ? tmp_3 : THROW_CCE();
          var inductionVariable_0 = list.get_size_woubt6_k$() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.removeUnprocessedElements.<anonymous>' call
              var tmp5__anonymous__kpxxpo = list.get_fkrdnv_k$(i);
              resumeSenderOnCancelledChannel(tmp5__anonymous__kpxxpo, $this);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
    var tmp2_safe_receiver = undeliveredElementException;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp2_safe_receiver;
    }
  }
  function cancelSuspendedReceiveRequests($this, lastSegment, sendersCounter) {
    var suspendedReceivers = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (!(segment == null)) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp$ret$1;
          // Inline function 'kotlin.Long.plus' call
          var tmp$ret$0;
          // Inline function 'kotlin.Long.times' call
          var tmp0_times = segment.get_id_kntnx8_k$();
          var tmp1_times = get_SEGMENT_SIZE();
          tmp$ret$0 = tmp0_times.times_2zfqpc_k$(toLong(tmp1_times));
          var tmp2_plus = tmp$ret$0;
          tmp$ret$1 = tmp2_plus.plus_u6jwas_k$(toLong(index));
          if (tmp$ret$1.compareTo_n4fqi2_k$(sendersCounter) < 0)
            break process_segments;
          cell_update: while (true) {
            var state = segment.getState_atldmu_k$(index);
            if (state === null ? true : state === get_IN_BUFFER()) {
              if (segment.casState_9z8uvb_k$(index, state, get_CHANNEL_CLOSED())) {
                segment.onSlotCleaned_dnmt5m_k$();
                break cell_update;
              }
            } else {
              if (state instanceof WaiterEB) {
                if (segment.casState_9z8uvb_k$(index, state, get_CHANNEL_CLOSED())) {
                  suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state.waiter_1);
                  segment.onCancelledRequest_awh8xx_k$(index, true);
                  break cell_update;
                }
              } else {
                if (!(state == null) ? isInterface(state, Waiter) : false) {
                  if (segment.casState_9z8uvb_k$(index, state, get_CHANNEL_CLOSED())) {
                    suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state);
                    segment.onCancelledRequest_awh8xx_k$(index, true);
                    break cell_update;
                  }
                } else {
                  break cell_update;
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      segment = segment.get_prev_wosl18_k$();
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp3_forEachReversed = suspendedReceivers;
      var tmp0_subject = _get_holder__f6h5pd(tmp3_forEachReversed);
      if (tmp0_subject == null) {
        tmp$ret$2 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.cancelSuspendedReceiveRequests.<anonymous>' call
          var tmp = _get_holder__f6h5pd(tmp3_forEachReversed);
          var tmp4__anonymous__pkmkx7 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          resumeReceiverOnClosedChannel(tmp4__anonymous__pkmkx7, $this);
        } else {
          var tmp_0 = _get_holder__f6h5pd(tmp3_forEachReversed);
          var list = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable_0 = list.get_size_woubt6_k$() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.cancelSuspendedReceiveRequests.<anonymous>' call
              var tmp5__anonymous__kpxxpo = list.get_fkrdnv_k$(i);
              resumeReceiverOnClosedChannel(tmp5__anonymous__kpxxpo, $this);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
  }
  function resumeReceiverOnClosedChannel(_this__u8e3s4, $this) {
    return resumeWaiterOnClosedChannel(_this__u8e3s4, $this, true);
  }
  function resumeSenderOnCancelledChannel(_this__u8e3s4, $this) {
    return resumeWaiterOnClosedChannel(_this__u8e3s4, $this, false);
  }
  function resumeWaiterOnClosedChannel(_this__u8e3s4, $this, receiver) {
    var tmp0_subject = _this__u8e3s4;
    if (tmp0_subject instanceof SendBroadcast) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp1_resume = _this__u8e3s4.cont_1;
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      tmp1_resume.resumeWith_s3a3yh_k$(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
    } else {
      if (isInterface(tmp0_subject, CancellableContinuation)) {
        var tmp$ret$3;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp3_resumeWithException = _this__u8e3s4;
        var tmp4_resumeWithException = receiver ? _get_receiveException__foorc1($this) : $this.get_sendException_qpq1ry_k$();
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.failure' call
        var tmp2_failure = Companion_getInstance();
        tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(tmp4_resumeWithException));
        tmp3_resumeWithException.resumeWith_s3a3yh_k$(tmp$ret$2);
        tmp$ret$3 = Unit_getInstance();
      } else {
        if (tmp0_subject instanceof ReceiveCatching) {
          var tmp$ret$5;
          // Inline function 'kotlin.coroutines.resume' call
          var tmp6_resume = _this__u8e3s4.cont_1;
          var tmp7_resume = Companion_getInstance_2().closed_raq7mh_k$($this.get_closeCause_gbqkm2_k$());
          var tmp$ret$4;
          // Inline function 'kotlin.Companion.success' call
          var tmp5_success = Companion_getInstance();
          tmp$ret$4 = _Result___init__impl__xyqfz8(new ChannelResult(tmp7_resume));
          tmp6_resume.resumeWith_s3a3yh_k$(tmp$ret$4);
          tmp$ret$5 = Unit_getInstance();
        } else {
          if (tmp0_subject instanceof BufferedChannelIterator) {
            _this__u8e3s4.tryResumeHasNextOnClosedChannel_mblfgi_k$();
          } else {
            if (isInterface(tmp0_subject, SelectInstance)) {
              _this__u8e3s4.trySelect_fbege0_k$($this, get_CHANNEL_CLOSED());
            } else {
              var tmp8_error = 'Unexpected waiter: ' + _this__u8e3s4;
              throw IllegalStateException_init_$Create$(toString(tmp8_error));
            }
          }
        }
      }
    }
  }
  function _get_isClosedForSend0__kxgf9m(_this__u8e3s4, $this) {
    return isClosed($this, _this__u8e3s4, false);
  }
  function _get_isClosedForReceive0__f7qknl(_this__u8e3s4, $this) {
    return isClosed($this, _this__u8e3s4, true);
  }
  function isClosed($this, sendersAndCloseStatusCur, isClosedForReceive) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    tmp$ret$0 = sendersAndCloseStatusCur.shr_wjue3g_k$(60).toInt_1tsl84_k$();
    var tmp0_subject = tmp$ret$0;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = false;
        break;
      case 1:
        tmp = false;
        break;
      case 2:
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        tmp$ret$1 = sendersAndCloseStatusCur.and_jhajnj_k$(new Long(-1, 268435455));

        completeClose($this, tmp$ret$1);
        ;
        tmp = isClosedForReceive ? !$this.hasElements_nmp74f_k$() : true;
        break;
      case 3:
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        tmp$ret$2 = sendersAndCloseStatusCur.and_jhajnj_k$(new Long(-1, 268435455));

        completeCancel($this, tmp$ret$2);
        tmp = true;
        break;
      default:
        var tmp$ret$3;
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        tmp$ret$3 = sendersAndCloseStatusCur.shr_wjue3g_k$(60).toInt_1tsl84_k$();

        var tmp0_error = 'unexpected close status: ' + tmp$ret$3;
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
    return tmp;
  }
  function isCellNonEmpty($this, segment, index, globalIndex) {
    while (true) {
      var state = segment.getState_atldmu_k$(index);
      if (state === null ? true : state === get_IN_BUFFER()) {
        if (segment.casState_9z8uvb_k$(index, state, get_POISONED())) {
          expandBuffer($this);
          return false;
        }
      } else if (state === get_BUFFERED())
        return true;
      else if (state === get_INTERRUPTED_SEND())
        return false;
      else if (state === get_CHANNEL_CLOSED())
        return false;
      else if (state === get_DONE_RCV())
        return false;
      else if (state === get_POISONED())
        return false;
      else if (state === get_RESUMING_BY_EB())
        return true;
      else if (state === get_RESUMING_BY_RCV())
        return false;
      else
        return globalIndex.equals($this.get_receiversCounter_b035j5_k$());
    }
  }
  function findSegmentSend($this, id, startFrom) {
    var tmp$ret$6;
    // Inline function 'kotlin.let' call
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      var tmp2_findSegmentAndMoveForward = $this.sendSegment_1;
      var tmp3_findSegmentAndMoveForward = createSegmentFunction();
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp3_findSegmentAndMoveForward);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var tmp1_moveForward = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var tmp0__anonymous__q1qw7t = tmp2_findSegmentAndMoveForward.get_kotlinx$atomicfu$value_vi2am5_k$();
              if (tmp0__anonymous__q1qw7t.get_id_kntnx8_k$().compareTo_n4fqi2_k$(tmp1_moveForward.get_id_kntnx8_k$()) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!tmp1_moveForward.tryIncPointers_5qlhqx_k$()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (tmp2_findSegmentAndMoveForward.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, tmp1_moveForward)) {
                if (tmp0__anonymous__q1qw7t.decPointers_43xfc_k$()) {
                  tmp0__anonymous__q1qw7t.remove_le47v1_k$();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (tmp1_moveForward.decPointers_43xfc_k$()) {
                tmp1_moveForward.remove_le47v1_k$();
              }
            }
            tmp$ret$0 = Unit_getInstance();
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$1 = s;
          break $l$block_2;
        }
      }
    }
    var tmp4_let = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$5;
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.findSegmentSend.<anonymous>' call
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(tmp4_let)) {
      completeCloseOrCancel($this);
      var tmp$ret$2;
      // Inline function 'kotlin.Long.times' call
      var tmp0_times = startFrom.get_id_kntnx8_k$();
      var tmp1_times = get_SEGMENT_SIZE();
      tmp$ret$2 = tmp0_times.times_2zfqpc_k$(toLong(tmp1_times));
      if (tmp$ret$2.compareTo_n4fqi2_k$($this.get_receiversCounter_b035j5_k$()) < 0) {
        startFrom.cleanPrev_rmgs7f_k$();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp4_let);
      var tmp_1;
      if (segment.get_id_kntnx8_k$().compareTo_n4fqi2_k$(id) > 0) {
        var tmp$ret$3;
        // Inline function 'kotlin.Long.times' call
        var tmp2_times = segment.get_id_kntnx8_k$();
        var tmp3_times = get_SEGMENT_SIZE();
        tmp$ret$3 = tmp2_times.times_2zfqpc_k$(toLong(tmp3_times));
        updateSendersCounterIfLower($this, tmp$ret$3);
        var tmp$ret$4;
        // Inline function 'kotlin.Long.times' call
        var tmp4_times = segment.get_id_kntnx8_k$();
        var tmp5_times = get_SEGMENT_SIZE();
        tmp$ret$4 = tmp4_times.times_2zfqpc_k$(toLong(tmp5_times));
        if (tmp$ret$4.compareTo_n4fqi2_k$($this.get_receiversCounter_b035j5_k$()) < 0) {
          segment.cleanPrev_rmgs7f_k$();
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    tmp$ret$5 = tmp_0;
    tmp$ret$6 = tmp$ret$5;
    return tmp$ret$6;
  }
  function findSegmentReceive($this, id, startFrom) {
    var tmp$ret$8;
    // Inline function 'kotlin.let' call
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      var tmp2_findSegmentAndMoveForward = $this.receiveSegment_1;
      var tmp3_findSegmentAndMoveForward = createSegmentFunction();
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp3_findSegmentAndMoveForward);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var tmp1_moveForward = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var tmp0__anonymous__q1qw7t = tmp2_findSegmentAndMoveForward.get_kotlinx$atomicfu$value_vi2am5_k$();
              if (tmp0__anonymous__q1qw7t.get_id_kntnx8_k$().compareTo_n4fqi2_k$(tmp1_moveForward.get_id_kntnx8_k$()) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!tmp1_moveForward.tryIncPointers_5qlhqx_k$()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (tmp2_findSegmentAndMoveForward.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, tmp1_moveForward)) {
                if (tmp0__anonymous__q1qw7t.decPointers_43xfc_k$()) {
                  tmp0__anonymous__q1qw7t.remove_le47v1_k$();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (tmp1_moveForward.decPointers_43xfc_k$()) {
                tmp1_moveForward.remove_le47v1_k$();
              }
            }
            tmp$ret$0 = Unit_getInstance();
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$1 = s;
          break $l$block_2;
        }
      }
    }
    var tmp4_let = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$7;
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.findSegmentReceive.<anonymous>' call
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(tmp4_let)) {
      completeCloseOrCancel($this);
      var tmp$ret$2;
      // Inline function 'kotlin.Long.times' call
      var tmp0_times = startFrom.get_id_kntnx8_k$();
      var tmp1_times = get_SEGMENT_SIZE();
      tmp$ret$2 = tmp0_times.times_2zfqpc_k$(toLong(tmp1_times));
      if (tmp$ret$2.compareTo_n4fqi2_k$($this.get_sendersCounter_csvgw7_k$()) < 0) {
        startFrom.cleanPrev_rmgs7f_k$();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp4_let);
      var tmp_1;
      if (!_get_isRendezvousOrUnlimited__3mdufi($this)) {
        var tmp$ret$3;
        // Inline function 'kotlin.Long.div' call
        var tmp2_div = _get_bufferEndCounter__2d4hee($this);
        var tmp3_div = get_SEGMENT_SIZE();
        tmp$ret$3 = tmp2_div.div_9s1fi3_k$(toLong(tmp3_div));
        tmp_1 = id.compareTo_n4fqi2_k$(tmp$ret$3) <= 0;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp$ret$4;
        $l$block_5: {
          // Inline function 'kotlinx.coroutines.internal.moveForward' call
          var tmp5_moveForward = $this.bufferEndSegment_1;
          while (true) {
            // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
            var tmp4__anonymous__pkmkx7 = tmp5_moveForward.get_kotlinx$atomicfu$value_vi2am5_k$();
            if (tmp4__anonymous__pkmkx7.get_id_kntnx8_k$().compareTo_n4fqi2_k$(segment.get_id_kntnx8_k$()) >= 0) {
              tmp$ret$4 = true;
              break $l$block_5;
            }
            if (!segment.tryIncPointers_5qlhqx_k$()) {
              tmp$ret$4 = false;
              break $l$block_5;
            }
            if (tmp5_moveForward.atomicfu$compareAndSet(tmp4__anonymous__pkmkx7, segment)) {
              if (tmp4__anonymous__pkmkx7.decPointers_43xfc_k$()) {
                tmp4__anonymous__pkmkx7.remove_le47v1_k$();
              }
              tmp$ret$4 = true;
              break $l$block_5;
            }
            if (segment.decPointers_43xfc_k$()) {
              segment.remove_le47v1_k$();
            }
          }
          tmp$ret$4 = Unit_getInstance();
        }
      }
      var tmp_2;
      if (segment.get_id_kntnx8_k$().compareTo_n4fqi2_k$(id) > 0) {
        var tmp$ret$5;
        // Inline function 'kotlin.Long.times' call
        var tmp6_times = segment.get_id_kntnx8_k$();
        var tmp7_times = get_SEGMENT_SIZE();
        tmp$ret$5 = tmp6_times.times_2zfqpc_k$(toLong(tmp7_times));
        updateReceiversCounterIfLower($this, tmp$ret$5);
        var tmp$ret$6;
        // Inline function 'kotlin.Long.times' call
        var tmp8_times = segment.get_id_kntnx8_k$();
        var tmp9_times = get_SEGMENT_SIZE();
        tmp$ret$6 = tmp8_times.times_2zfqpc_k$(toLong(tmp9_times));
        if (tmp$ret$6.compareTo_n4fqi2_k$($this.get_sendersCounter_csvgw7_k$()) < 0) {
          segment.cleanPrev_rmgs7f_k$();
        }
        tmp_2 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_2 = segment;
      }
      tmp_0 = tmp_2;
    }
    tmp$ret$7 = tmp_0;
    tmp$ret$8 = tmp$ret$7;
    return tmp$ret$8;
  }
  function findSegmentBufferEnd($this, id, startFrom, currentBufferEndCounter) {
    var tmp$ret$6;
    // Inline function 'kotlin.let' call
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      var tmp2_findSegmentAndMoveForward = $this.bufferEndSegment_1;
      var tmp3_findSegmentAndMoveForward = createSegmentFunction();
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp3_findSegmentAndMoveForward);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var tmp1_moveForward = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var tmp0__anonymous__q1qw7t = tmp2_findSegmentAndMoveForward.get_kotlinx$atomicfu$value_vi2am5_k$();
              if (tmp0__anonymous__q1qw7t.get_id_kntnx8_k$().compareTo_n4fqi2_k$(tmp1_moveForward.get_id_kntnx8_k$()) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!tmp1_moveForward.tryIncPointers_5qlhqx_k$()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (tmp2_findSegmentAndMoveForward.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, tmp1_moveForward)) {
                if (tmp0__anonymous__q1qw7t.decPointers_43xfc_k$()) {
                  tmp0__anonymous__q1qw7t.remove_le47v1_k$();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (tmp1_moveForward.decPointers_43xfc_k$()) {
                tmp1_moveForward.remove_le47v1_k$();
              }
            }
            tmp$ret$0 = Unit_getInstance();
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$1 = s;
          break $l$block_2;
        }
      }
    }
    var tmp4_let = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$5;
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.findSegmentBufferEnd.<anonymous>' call
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(tmp4_let)) {
      completeCloseOrCancel($this);
      moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom);
      incCompletedExpandBufferAttempts$default($this);
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp4_let);
      var tmp_1;
      if (segment.get_id_kntnx8_k$().compareTo_n4fqi2_k$(id) > 0) {
        var tmp$ret$2;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$2 = currentBufferEndCounter.plus_u6jwas_k$(new Long(1, 0));
        var tmp_2 = tmp$ret$2;
        var tmp$ret$3;
        // Inline function 'kotlin.Long.times' call
        var tmp0_times = segment.get_id_kntnx8_k$();
        var tmp1_times = get_SEGMENT_SIZE();
        tmp$ret$3 = tmp0_times.times_2zfqpc_k$(toLong(tmp1_times));
        if ($this.bufferEnd_1.atomicfu$compareAndSet(tmp_2, tmp$ret$3)) {
          var tmp$ret$4;
          // Inline function 'kotlin.Long.times' call
          var tmp2_times = segment.get_id_kntnx8_k$();
          var tmp3_times = get_SEGMENT_SIZE();
          tmp$ret$4 = tmp2_times.times_2zfqpc_k$(toLong(tmp3_times));
          incCompletedExpandBufferAttempts($this, tmp$ret$4.minus_llf5ei_k$(currentBufferEndCounter));
        } else {
          incCompletedExpandBufferAttempts$default($this);
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    tmp$ret$5 = tmp_0;
    tmp$ret$6 = tmp$ret$5;
    return tmp$ret$6;
  }
  function moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom) {
    var segment = startFrom;
    $l$loop: while (segment.get_id_kntnx8_k$().compareTo_n4fqi2_k$(id) < 0) {
      var tmp0_elvis_lhs = segment.get_next_wor1vg_k$();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      segment = tmp;
    }
    while (true) {
      $l$loop_0: while (segment.get_isRemoved_gzdz59_k$()) {
        var tmp1_elvis_lhs = segment.get_next_wor1vg_k$();
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        segment = tmp_0;
      }
      var tmp$ret$0;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.moveForward' call
        var tmp1_moveForward = $this.bufferEndSegment_1;
        var tmp2_moveForward = segment;
        while (true) {
          // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
          var tmp0__anonymous__q1qw7t = tmp1_moveForward.get_kotlinx$atomicfu$value_vi2am5_k$();
          if (tmp0__anonymous__q1qw7t.get_id_kntnx8_k$().compareTo_n4fqi2_k$(tmp2_moveForward.get_id_kntnx8_k$()) >= 0) {
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (!tmp2_moveForward.tryIncPointers_5qlhqx_k$()) {
            tmp$ret$0 = false;
            break $l$block_1;
          }
          if (tmp1_moveForward.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, tmp2_moveForward)) {
            if (tmp0__anonymous__q1qw7t.decPointers_43xfc_k$()) {
              tmp0__anonymous__q1qw7t.remove_le47v1_k$();
            }
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (tmp2_moveForward.decPointers_43xfc_k$()) {
            tmp2_moveForward.remove_le47v1_k$();
          }
        }
        tmp$ret$0 = Unit_getInstance();
      }
      if (tmp$ret$0)
        return Unit_getInstance();
    }
  }
  function updateSendersCounterIfLower($this, value) {
    var tmp0_loop = $this.sendersAndCloseStatus_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.updateSendersCounterIfLower.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      tmp$ret$0 = tmp1__anonymous__uwfjfc.and_jhajnj_k$(new Long(-1, 268435455));
      var curCounter = tmp$ret$0;
      if (curCounter.compareTo_n4fqi2_k$(value) >= 0)
        return Unit_getInstance();
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
      tmp$ret$1 = tmp1__anonymous__uwfjfc.shr_wjue3g_k$(60).toInt_1tsl84_k$();
      var update = constructSendersAndCloseStatus(curCounter, tmp$ret$1);
      if ($this.sendersAndCloseStatus_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update))
        return Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function updateReceiversCounterIfLower($this, value) {
    var tmp0_loop = $this.receivers_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.updateReceiversCounterIfLower.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (tmp1__anonymous__uwfjfc.compareTo_n4fqi2_k$(value) >= 0)
        return Unit_getInstance();
      if ($this.receivers_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, value))
        return Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function BufferedChannel$sendImpl$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi, _anonymous_parameter_3__qggqen) {
    throw IllegalStateException_init_$Create$('unexpected');
  }
  function BufferedChannel$receiveImpl$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
    throw IllegalStateException_init_$Create$('unexpected');
  }
  function BufferedChannel$registerSelectForSend$ref() {
    var l = function (p0, p1, p2) {
      p0.registerSelectForSend_k87hef_k$(p1, p2);
      return Unit_getInstance();
    };
    l.callableName = 'registerSelectForSend';
    return l;
  }
  function BufferedChannel$processResultSelectSend$ref() {
    var l = function (p0, p1, p2) {
      return processResultSelectSend(p0, p1, p2);
    };
    l.callableName = 'processResultSelectSend';
    return l;
  }
  function BufferedChannel$registerSelectForReceive$ref() {
    var l = function (p0, p1, p2) {
      registerSelectForReceive(p0, p1, p2);
      return Unit_getInstance();
    };
    l.callableName = 'registerSelectForReceive';
    return l;
  }
  function BufferedChannel$processResultSelectReceive$ref() {
    var l = function (p0, p1, p2) {
      return processResultSelectReceive(p0, p1, p2);
    };
    l.callableName = 'processResultSelectReceive';
    return l;
  }
  function BufferedChannel$registerSelectForReceive$ref_0() {
    var l = function (p0, p1, p2) {
      registerSelectForReceive(p0, p1, p2);
      return Unit_getInstance();
    };
    l.callableName = 'registerSelectForReceive';
    return l;
  }
  function BufferedChannel$processResultSelectReceiveCatching$ref() {
    var l = function (p0, p1, p2) {
      return processResultSelectReceiveCatching(p0, p1, p2);
    };
    l.callableName = 'processResultSelectReceiveCatching';
    return l;
  }
  function BufferedChannel$registerSelectForReceive$ref_1() {
    var l = function (p0, p1, p2) {
      registerSelectForReceive(p0, p1, p2);
      return Unit_getInstance();
    };
    l.callableName = 'registerSelectForReceive';
    return l;
  }
  function BufferedChannel$processResultSelectReceiveOrNull$ref() {
    var l = function (p0, p1, p2) {
      return processResultSelectReceiveOrNull(p0, p1, p2);
    };
    l.callableName = 'processResultSelectReceiveOrNull';
    return l;
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda($element, this$0, $select) {
    return function (it) {
      var tmp;
      if (!($element === get_CHANNEL_CLOSED())) {
        callUndeliveredElement(this$0.onUndeliveredElement_1, ($element == null ? true : isObject($element)) ? $element : THROW_CCE(), $select.get_context_h02k06_k$());
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this$0) {
    return function (select, _anonymous_parameter_1__qggqgd, element) {
      return BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda(element, this$0, select);
    };
  }
  function $sendCOROUTINE$4(_this__u8e3s4, element, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.element_1 = element;
  }
  protoOf($sendCOROUTINE$4).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(11);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.segment1__1 = this._this__u8e3s4__1.sendSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            if (false) {
              this.set_state_a96kl8_k$(12);
              continue $sm;
            }

            this.sendersAndCloseStatusCur2__1 = this._this__u8e3s4__1.sendersAndCloseStatus_1.atomicfu$getAndIncrement$long();
            var tmp_0 = this;
            tmp_0.s3__1 = this.sendersAndCloseStatusCur2__1.and_jhajnj_k$(new Long(-1, 268435455));
            this.closed4__1 = _get_isClosedForSend0__kxgf9m(this.sendersAndCloseStatusCur2__1, this._this__u8e3s4__1);
            var tmp_1 = this;
            var tmp0_div = get_SEGMENT_SIZE();
            tmp_1.id5__1 = this.s3__1.div_9s1fi3_k$(toLong(tmp0_div));
            var tmp_2 = this;
            var tmp1_rem = get_SEGMENT_SIZE();
            tmp_2.i6__1 = this.s3__1.rem_9rbcjo_k$(toLong(tmp1_rem)).toInt_1tsl84_k$();
            if (!this.segment1__1.get_id_kntnx8_k$().equals(this.id5__1)) {
              this.tmp0_elvis_lhs7__1 = findSegmentSend(this._this__u8e3s4__1, this.id5__1, this.segment1__1);
              if (this.tmp0_elvis_lhs7__1 == null) {
                if (this.closed4__1) {
                  this.set_state_a96kl8_k$(10);
                  suspendResult = onClosedSend(this._this__u8e3s4__1, this.element_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.set_state_a96kl8_k$(2);
                  continue $sm;
                }
              } else {
                this.WHEN_RESULT8__1 = this.tmp0_elvis_lhs7__1;
                this.set_state_a96kl8_k$(3);
                continue $sm;
              }
            } else {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

            break;
          case 3:
            this.segment1__1 = this.WHEN_RESULT8__1;
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            this.tmp1_subject9__1 = updateCellSend(this._this__u8e3s4__1, this.segment1__1, this.i6__1, this.element_1, this.s3__1, null, this.closed4__1);
            if (this.tmp1_subject9__1 === _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8_0()) {
              this.segment1__1.cleanPrev_rmgs7f_k$();
              var tmp_3 = this;
              tmp_3.tmp$ret$00__1 = Unit_getInstance();
              this.set_state_a96kl8_k$(13);
              continue $sm;
            } else {
              if (this.tmp1_subject9__1 === _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m_0()) {
                var tmp_4 = this;
                tmp_4.tmp$ret$00__1 = Unit_getInstance();
                this.set_state_a96kl8_k$(13);
                continue $sm;
              } else {
                if (this.tmp1_subject9__1 === _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf_0()) {
                  if (this.closed4__1) {
                    this.segment1__1.onSlotCleaned_dnmt5m_k$();
                    this.set_state_a96kl8_k$(9);
                    suspendResult = onClosedSend(this._this__u8e3s4__1, this.element_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    this.set_state_a96kl8_k$(8);
                    continue $sm;
                  }
                } else {
                  if (this.tmp1_subject9__1 === _get_RESULT_CLOSED_$accessor$yt74tm_10v48j_0()) {
                    if (this.s3__1.compareTo_n4fqi2_k$(this._this__u8e3s4__1.get_receiversCounter_b035j5_k$()) < 0) {
                      this.segment1__1.cleanPrev_rmgs7f_k$();
                    }
                    this.set_state_a96kl8_k$(7);
                    suspendResult = onClosedSend(this._this__u8e3s4__1, this.element_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (this.tmp1_subject9__1 === _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0_0()) {
                      this.segment1__1.cleanPrev_rmgs7f_k$();
                      this.set_state_a96kl8_k$(2);
                      continue $sm;
                    } else {
                      if (this.tmp1_subject9__1 === _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m()) {
                        var tmp_5 = this;
                        tmp_5.tmp3__anonymous_10_pzqik7__1 = this.segment1__1;
                        this.set_state_a96kl8_k$(6);
                        suspendResult = sendOnNoWaiterSuspend(this._this__u8e3s4__1, this.tmp3__anonymous_10_pzqik7__1, this.i6__1, this.element_1, this.s3__1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.set_state_a96kl8_k$(5);
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

            break;
          case 5:
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 6:
            this.tmp$ret$00__1 = suspendResult;
            this.set_state_a96kl8_k$(13);
            continue $sm;
          case 7:
            this.tmp$ret$00__1 = suspendResult;
            this.set_state_a96kl8_k$(13);
            continue $sm;
          case 8:
            var tmp2_safe_receiver = (!(null == null) ? isInterface(null, Waiter) : false) ? null : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              prepareSenderForSuspension(tmp2_safe_receiver, this._this__u8e3s4__1, this.segment1__1, this.i6__1);
            }

            ;
            var tmp_6 = this;
            var tmp2__anonymous__z9zvc9 = this.segment1__1;
            tmp_6.tmp$ret$00__1 = Unit_getInstance();
            this.set_state_a96kl8_k$(13);
            continue $sm;
          case 9:
            this.tmp$ret$00__1 = suspendResult;
            this.set_state_a96kl8_k$(13);
            continue $sm;
          case 10:
            this.tmp$ret$00__1 = suspendResult;
            this.set_state_a96kl8_k$(13);
            continue $sm;
          case 11:
            throw this.get_exception_x0n6w6_k$();
          case 12:
            if (false) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(13);
            continue $sm;
          case 13:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 11) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function $receiveCOROUTINE$5(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($receiveCOROUTINE$5).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(8);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.segment1__1 = this._this__u8e3s4__1.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            if (false) {
              this.set_state_a96kl8_k$(9);
              continue $sm;
            }

            if (this._this__u8e3s4__1.get_isClosedForReceive_v0r77d_k$()) {
              var tmp_0 = this;
              throw recoverStackTrace_0(_get_receiveException__foorc1(this._this__u8e3s4__1));
            } else {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

            break;
          case 3:
            this.r2__1 = this._this__u8e3s4__1.receivers_1.atomicfu$getAndIncrement$long();
            var tmp_1 = this;
            var tmp0_div = get_SEGMENT_SIZE();
            tmp_1.id3__1 = this.r2__1.div_9s1fi3_k$(toLong(tmp0_div));
            var tmp_2 = this;
            var tmp1_rem = get_SEGMENT_SIZE();
            tmp_2.i4__1 = this.r2__1.rem_9rbcjo_k$(toLong(tmp1_rem)).toInt_1tsl84_k$();
            if (!this.segment1__1.get_id_kntnx8_k$().equals(this.id3__1)) {
              this.tmp0_elvis_lhs5__1 = findSegmentReceive(this._this__u8e3s4__1, this.id3__1, this.segment1__1);
              if (this.tmp0_elvis_lhs5__1 == null) {
                this.set_state_a96kl8_k$(2);
                var tmp_3 = this;
                continue $sm;
              } else {
                this.WHEN_RESULT6__1 = this.tmp0_elvis_lhs5__1;
                this.set_state_a96kl8_k$(4);
                continue $sm;
              }
            } else {
              this.set_state_a96kl8_k$(5);
              continue $sm;
            }

            break;
          case 4:
            this.segment1__1 = this.WHEN_RESULT6__1;
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 5:
            this.updCellResult7__1 = updateCellReceive(this._this__u8e3s4__1, this.segment1__1, this.i4__1, this.r2__1, null);
            if (this.updCellResult7__1 === _get_SUSPEND_$accessor$yt74tm_ccb8g1_0()) {
              var tmp_4 = this;
              var tmp1_safe_receiver = (!(null == null) ? isInterface(null, Waiter) : false) ? null : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp1_safe_receiver, this._this__u8e3s4__1, this.segment1__1, this.i4__1);
              }
              var tmp2__anonymous__z9zvc9 = this.segment1__1;
              throw IllegalStateException_init_$Create$('unexpected');
            } else {
              if (this.updCellResult7__1 === _get_FAILED_$accessor$yt74tm_h47uk8_0()) {
                if (this.r2__1.compareTo_n4fqi2_k$(this._this__u8e3s4__1.get_sendersCounter_csvgw7_k$()) < 0) {
                  this.segment1__1.cleanPrev_rmgs7f_k$();
                }
                this.set_state_a96kl8_k$(2);
                var tmp_5 = this;
                continue $sm;
              } else {
                if (this.updCellResult7__1 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
                  var tmp_6 = this;
                  tmp_6.tmp3__anonymous_9_js7afj_1 = this.segment1__1;
                  this.set_state_a96kl8_k$(6);
                  suspendResult = receiveOnNoWaiterSuspend(this._this__u8e3s4__1, this.tmp3__anonymous_9_js7afj_1, this.i4__1, this.r2__1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_7 = this;
                  this.segment1__1.cleanPrev_rmgs7f_k$();
                  var tmp_8 = this.updCellResult7__1;
                  var tmp4__anonymous__pkmkx7 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
                  return tmp4__anonymous__pkmkx7;
                }
              }
            }

            break;
          case 6:
            this.WHEN_RESULT8__1 = suspendResult;
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 7:
            this.tmp$ret$00__1 = this.WHEN_RESULT8__1;
            this.set_state_a96kl8_k$(10);
            continue $sm;
          case 8:
            throw this.get_exception_x0n6w6_k$();
          case 9:
            if (false) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(10);
            continue $sm;
          case 10:
            return this.tmp$ret$00__1;
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 8) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function $receiveCatchingCOROUTINE$6(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($receiveCatchingCOROUTINE$6).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(9);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.segment1__1 = this._this__u8e3s4__1.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            if (false) {
              this.set_state_a96kl8_k$(10);
              continue $sm;
            }

            if (this._this__u8e3s4__1.get_isClosedForReceive_v0r77d_k$()) {
              var tmp_0 = this;
              tmp_0.tmp$ret$00__1 = Companion_getInstance_2().closed_raq7mh_k$(this._this__u8e3s4__1.get_closeCause_gbqkm2_k$());
              this.set_state_a96kl8_k$(11);
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

            break;
          case 3:
            this.r2__1 = this._this__u8e3s4__1.receivers_1.atomicfu$getAndIncrement$long();
            var tmp_1 = this;
            var tmp0_div = get_SEGMENT_SIZE();
            tmp_1.id3__1 = this.r2__1.div_9s1fi3_k$(toLong(tmp0_div));
            var tmp_2 = this;
            var tmp1_rem = get_SEGMENT_SIZE();
            tmp_2.i4__1 = this.r2__1.rem_9rbcjo_k$(toLong(tmp1_rem)).toInt_1tsl84_k$();
            if (!this.segment1__1.get_id_kntnx8_k$().equals(this.id3__1)) {
              this.tmp0_elvis_lhs5__1 = findSegmentReceive(this._this__u8e3s4__1, this.id3__1, this.segment1__1);
              if (this.tmp0_elvis_lhs5__1 == null) {
                this.set_state_a96kl8_k$(2);
                var tmp_3 = this;
                continue $sm;
              } else {
                this.WHEN_RESULT6__1 = this.tmp0_elvis_lhs5__1;
                this.set_state_a96kl8_k$(4);
                continue $sm;
              }
            } else {
              this.set_state_a96kl8_k$(5);
              continue $sm;
            }

            break;
          case 4:
            this.segment1__1 = this.WHEN_RESULT6__1;
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 5:
            this.updCellResult7__1 = updateCellReceive(this._this__u8e3s4__1, this.segment1__1, this.i4__1, this.r2__1, null);
            if (this.updCellResult7__1 === _get_SUSPEND_$accessor$yt74tm_ccb8g1_0()) {
              var tmp_4 = this;
              var tmp1_safe_receiver = (!(null == null) ? isInterface(null, Waiter) : false) ? null : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp1_safe_receiver, this._this__u8e3s4__1, this.segment1__1, this.i4__1);
              }
              var tmp2__anonymous__z9zvc9 = this.segment1__1;
              throw IllegalStateException_init_$Create$('unexpected');
            } else {
              if (this.updCellResult7__1 === _get_FAILED_$accessor$yt74tm_h47uk8_0()) {
                if (this.r2__1.compareTo_n4fqi2_k$(this._this__u8e3s4__1.get_sendersCounter_csvgw7_k$()) < 0) {
                  this.segment1__1.cleanPrev_rmgs7f_k$();
                }
                this.set_state_a96kl8_k$(2);
                var tmp_5 = this;
                continue $sm;
              } else {
                if (this.updCellResult7__1 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
                  var tmp_6 = this;
                  tmp_6.tmp3__anonymous_9_js7afj_1 = this.segment1__1;
                  this.set_state_a96kl8_k$(6);
                  suspendResult = receiveCatchingOnNoWaiterSuspend(this._this__u8e3s4__1, this.tmp3__anonymous_9_js7afj_1, this.i4__1, this.r2__1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  this.set_state_a96kl8_k$(7);
                  continue $sm;
                } else {
                  var tmp_7 = this;
                  this.segment1__1.cleanPrev_rmgs7f_k$();
                  var tmp_8 = this.updCellResult7__1;
                  var tmp4__anonymous__pkmkx7 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
                  tmp_7.WHEN_RESULT8__1 = Companion_getInstance_2().success_qotpmt_k$(tmp4__anonymous__pkmkx7);
                  this.set_state_a96kl8_k$(8);
                  continue $sm;
                }
              }
            }

            break;
          case 6:
            var unboxed = suspendResult.holder_1;
            suspendResult = new ChannelResult(unboxed);
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 7:
            this.WHEN_RESULT8__1 = suspendResult.holder_1;
            this.set_state_a96kl8_k$(8);
            continue $sm;
          case 8:
            this.tmp$ret$00__1 = this.WHEN_RESULT8__1;
            this.set_state_a96kl8_k$(11);
            continue $sm;
          case 9:
            throw this.get_exception_x0n6w6_k$();
          case 10:
            if (false) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(11);
            continue $sm;
          case 11:
            return new ChannelResult(this.tmp$ret$00__1);
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
  function BufferedChannel(capacity, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    this.capacity_1 = capacity;
    this.onUndeliveredElement_1 = onUndeliveredElement;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.capacity_1 >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.<anonymous>' call
      tmp$ret$0 = 'Invalid channel capacity: ' + this.capacity_1 + ', should be >=0';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.sendersAndCloseStatus_1 = atomic$long$1(new Long(0, 0));
    this.receivers_1 = atomic$long$1(new Long(0, 0));
    this.bufferEnd_1 = atomic$long$1(initialBufferEnd(this.capacity_1));
    this.completedExpandBuffersAndPauseFlag_1 = atomic$long$1(_get_bufferEndCounter__2d4hee(this));
    var firstSegment = new ChannelSegment(new Long(0, 0), null, this, 3);
    this.sendSegment_1 = atomic$ref$1(firstSegment);
    this.receiveSegment_1 = atomic$ref$1(firstSegment);
    var tmp = this;
    var tmp_0;
    if (_get_isRendezvousOrUnlimited__3mdufi(this)) {
      var tmp_1 = get_NULL_SEGMENT();
      tmp_0 = tmp_1 instanceof ChannelSegment ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = firstSegment;
    }
    tmp.bufferEndSegment_1 = atomic$ref$1(tmp_0);
    var tmp_2 = this;
    var tmp0_safe_receiver = this.onUndeliveredElement_1;
    var tmp_3;
    if (tmp0_safe_receiver == null) {
      tmp_3 = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.onUndeliveredElementReceiveCancellationConstructor.<anonymous>' call
      tmp$ret$1 = BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this);
      tmp$ret$2 = tmp$ret$1;
      tmp_3 = tmp$ret$2;
    }
    tmp_2.onUndeliveredElementReceiveCancellationConstructor_1 = tmp_3;
    this._closeCause_1 = atomic$ref$1(get_NO_CLOSE_CAUSE());
    this.closeHandler_1 = atomic$ref$1(null);
  }
  protoOf(BufferedChannel).get_onUndeliveredElement_a8l4w7_k$ = function () {
    return this.onUndeliveredElement_1;
  };
  protoOf(BufferedChannel).get_sendersCounter_csvgw7_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    var tmp0__get_sendersCounter__qlexar = this.sendersAndCloseStatus_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    tmp$ret$0 = tmp0__get_sendersCounter__qlexar.and_jhajnj_k$(new Long(-1, 268435455));
    return tmp$ret$0;
  };
  protoOf(BufferedChannel).get_receiversCounter_b035j5_k$ = function () {
    return this.receivers_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(BufferedChannel).send_4idxxh_k$ = function (element, $completion) {
    var tmp = new $sendCOROUTINE$4(this, element, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BufferedChannel).trySend_3hclq4_k$ = function (element) {
    if (shouldSendSuspend(this, this.sendersAndCloseStatus_1.get_kotlinx$atomicfu$value_vi2am5_k$()))
      return Companion_getInstance_2().failure_gnxj6a_k$();
    var tmp$ret$4;
    $l$block_5: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var tmp2_sendImpl = get_INTERRUPTED_SEND();
      var segment = this.sendSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = this.sendersAndCloseStatus_1.atomicfu$getAndIncrement$long();
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        tmp$ret$0 = sendersAndCloseStatusCur.and_jhajnj_k$(new Long(-1, 268435455));
        var s = tmp$ret$0;
        var closed = _get_isClosedForSend0__kxgf9m(sendersAndCloseStatusCur, this);
        var tmp$ret$1;
        // Inline function 'kotlin.Long.div' call
        var tmp0_div = get_SEGMENT_SIZE();
        tmp$ret$1 = s.div_9s1fi3_k$(toLong(tmp0_div));
        var id = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'kotlin.Long.rem' call
        var tmp1_rem = get_SEGMENT_SIZE();
        tmp$ret$2 = s.rem_9rbcjo_k$(toLong(tmp1_rem));
        var i = tmp$ret$2.toInt_1tsl84_k$();
        if (!segment.get_id_kntnx8_k$().equals(id)) {
          var tmp0_elvis_lhs = findSegmentSend(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              var tmp$ret$3;
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
              tmp$ret$3 = Companion_getInstance_2().closed_raq7mh_k$(this.get_sendException_qpq1ry_k$());
              tmp$ret$4 = tmp$ret$3;
              break $l$block_5;
            } else {
              continue $l$loop_0;
            }
            tmp = tmp_0;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var tmp1_subject = updateCellSend(this, segment, i, element, s, tmp2_sendImpl, closed);
        if (tmp1_subject === _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8_0()) {
          segment.cleanPrev_rmgs7f_k$();
          var tmp$ret$5;
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
          tmp$ret$5 = Companion_getInstance_2().success_qotpmt_k$(Unit_getInstance());
          tmp$ret$4 = tmp$ret$5;
          break $l$block_5;
        } else if (tmp1_subject === _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m_0()) {
          var tmp$ret$6;
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
          tmp$ret$6 = Companion_getInstance_2().success_qotpmt_k$(Unit_getInstance());
          tmp$ret$4 = tmp$ret$6;
          break $l$block_5;
        } else if (tmp1_subject === _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf_0()) {
          if (closed) {
            segment.onSlotCleaned_dnmt5m_k$();
            var tmp$ret$7;
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
            tmp$ret$7 = Companion_getInstance_2().closed_raq7mh_k$(this.get_sendException_qpq1ry_k$());
            tmp$ret$4 = tmp$ret$7;
            break $l$block_5;
          }
          var tmp2_safe_receiver = isInterface(tmp2_sendImpl, Waiter) ? tmp2_sendImpl : null;
          if (tmp2_safe_receiver == null)
            null;
          else {
            prepareSenderForSuspension(tmp2_safe_receiver, this, segment, i);
          }
          var tmp$ret$8;
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
          var tmp3__anonymous__ufb84q = segment;
          tmp3__anonymous__ufb84q.onSlotCleaned_dnmt5m_k$();
          tmp$ret$8 = Companion_getInstance_2().failure_gnxj6a_k$();
          tmp$ret$4 = tmp$ret$8;
          break $l$block_5;
        } else if (tmp1_subject === _get_RESULT_CLOSED_$accessor$yt74tm_10v48j_0()) {
          if (s.compareTo_n4fqi2_k$(this.get_receiversCounter_b035j5_k$()) < 0) {
            segment.cleanPrev_rmgs7f_k$();
          }
          var tmp$ret$9;
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
          tmp$ret$9 = Companion_getInstance_2().closed_raq7mh_k$(this.get_sendException_qpq1ry_k$());
          tmp$ret$4 = tmp$ret$9;
          break $l$block_5;
        } else if (tmp1_subject === _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0_0()) {
          segment.cleanPrev_rmgs7f_k$();
          continue $l$loop_0;
        } else if (tmp1_subject === _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m()) {
          var tmp$ret$10;
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl.<anonymous>' call
          var tmp4__anonymous__pkmkx7 = segment;
          throw IllegalStateException_init_$Create$('unexpected');
          tmp$ret$4 = tmp$ret$10;
          break $l$block_5;
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(BufferedChannel).sendBroadcast_k45lqc_k$ = function (element, $completion) {
    var tmp$ret$17;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.initCancellability_sh6jkn_k$();
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendBroadcast.<anonymous>' call
    // Inline function 'kotlin.check' call
    var tmp0_check = this.onUndeliveredElement_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendBroadcast.<anonymous>.<anonymous>' call
      tmp$ret$0 = 'the `onUndeliveredElement` feature is unsupported for `sendBroadcast(e)`';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp$ret$6;
    $l$block_5: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var tmp3_sendImpl = new SendBroadcast(cancellable);
      var segment = this.sendSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = this.sendersAndCloseStatus_1.atomicfu$getAndIncrement$long();
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        tmp$ret$1 = sendersAndCloseStatusCur.and_jhajnj_k$(new Long(-1, 268435455));
        var s = tmp$ret$1;
        var closed = _get_isClosedForSend0__kxgf9m(sendersAndCloseStatusCur, this);
        var tmp$ret$2;
        // Inline function 'kotlin.Long.div' call
        var tmp1_div = get_SEGMENT_SIZE();
        tmp$ret$2 = s.div_9s1fi3_k$(toLong(tmp1_div));
        var id = tmp$ret$2;
        var tmp$ret$3;
        // Inline function 'kotlin.Long.rem' call
        var tmp2_rem = get_SEGMENT_SIZE();
        tmp$ret$3 = s.rem_9rbcjo_k$(toLong(tmp2_rem));
        var i = tmp$ret$3.toInt_1tsl84_k$();
        if (!segment.get_id_kntnx8_k$().equals(id)) {
          var tmp0_elvis_lhs = findSegmentSend(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              var tmp$ret$5;
              // Inline function 'kotlin.coroutines.resume' call
              var tmp$ret$4;
              // Inline function 'kotlin.Companion.success' call
              var tmp0_success = Companion_getInstance();
              tmp$ret$4 = _Result___init__impl__xyqfz8(false);
              cancellable.resumeWith_s3a3yh_k$(tmp$ret$4);
              tmp$ret$5 = Unit_getInstance();
              tmp$ret$6 = tmp$ret$5;
              break $l$block_5;
            } else {
              continue $l$loop_0;
            }
            tmp = tmp_0;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var tmp1_subject = updateCellSend(this, segment, i, element, s, tmp3_sendImpl, closed);
        if (tmp1_subject === _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8_0()) {
          segment.cleanPrev_rmgs7f_k$();
          var tmp$ret$8;
          // Inline function 'kotlin.coroutines.resume' call
          var tmp$ret$7;
          // Inline function 'kotlin.Companion.success' call
          var tmp0_success_0 = Companion_getInstance();
          tmp$ret$7 = _Result___init__impl__xyqfz8(true);
          cancellable.resumeWith_s3a3yh_k$(tmp$ret$7);
          tmp$ret$8 = Unit_getInstance();
          tmp$ret$6 = tmp$ret$8;
          break $l$block_5;
        } else if (tmp1_subject === _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m_0()) {
          var tmp$ret$10;
          // Inline function 'kotlin.coroutines.resume' call
          var tmp$ret$9;
          // Inline function 'kotlin.Companion.success' call
          var tmp0_success_1 = Companion_getInstance();
          tmp$ret$9 = _Result___init__impl__xyqfz8(true);
          cancellable.resumeWith_s3a3yh_k$(tmp$ret$9);
          tmp$ret$10 = Unit_getInstance();
          tmp$ret$6 = tmp$ret$10;
          break $l$block_5;
        } else if (tmp1_subject === _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf_0()) {
          if (closed) {
            segment.onSlotCleaned_dnmt5m_k$();
            var tmp$ret$12;
            // Inline function 'kotlin.coroutines.resume' call
            var tmp$ret$11;
            // Inline function 'kotlin.Companion.success' call
            var tmp0_success_2 = Companion_getInstance();
            tmp$ret$11 = _Result___init__impl__xyqfz8(false);
            cancellable.resumeWith_s3a3yh_k$(tmp$ret$11);
            tmp$ret$12 = Unit_getInstance();
            tmp$ret$6 = tmp$ret$12;
            break $l$block_5;
          }
          var tmp2_safe_receiver = isInterface(tmp3_sendImpl, Waiter) ? tmp3_sendImpl : null;
          if (tmp2_safe_receiver == null)
            null;
          else {
            prepareSenderForSuspension(tmp2_safe_receiver, this, segment, i);
          }
          var tmp$ret$13;
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendBroadcast.<anonymous>.<anonymous>' call
          var tmp4__anonymous__pkmkx7 = segment;
          tmp$ret$13 = Unit_getInstance();
          tmp$ret$6 = tmp$ret$13;
          break $l$block_5;
        } else if (tmp1_subject === _get_RESULT_CLOSED_$accessor$yt74tm_10v48j_0()) {
          if (s.compareTo_n4fqi2_k$(this.get_receiversCounter_b035j5_k$()) < 0) {
            segment.cleanPrev_rmgs7f_k$();
          }
          var tmp$ret$15;
          // Inline function 'kotlin.coroutines.resume' call
          var tmp$ret$14;
          // Inline function 'kotlin.Companion.success' call
          var tmp0_success_3 = Companion_getInstance();
          tmp$ret$14 = _Result___init__impl__xyqfz8(false);
          cancellable.resumeWith_s3a3yh_k$(tmp$ret$14);
          tmp$ret$15 = Unit_getInstance();
          tmp$ret$6 = tmp$ret$15;
          break $l$block_5;
        } else if (tmp1_subject === _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0_0()) {
          segment.cleanPrev_rmgs7f_k$();
          continue $l$loop_0;
        } else if (tmp1_subject === _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m()) {
          var tmp$ret$16;
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl.<anonymous>' call
          var tmp5__anonymous__kpxxpo = segment;
          throw IllegalStateException_init_$Create$('unexpected');
          tmp$ret$6 = tmp$ret$16;
          break $l$block_5;
        }
      }
    }
    tmp$ret$17 = cancellable.getResult_clfhg3_k$();
    var tmp0 = tmp$ret$17;
    return tmp0;
  };
  protoOf(BufferedChannel).sendImpl_wigg0n_k$ = function (element, waiter, onRendezvousOrBuffered, onSuspend, onClosed, onNoWaiterSuspend) {
    var segment = this.sendSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    $l$loop_0: while (true) {
      var sendersAndCloseStatusCur = this.sendersAndCloseStatus_1.atomicfu$getAndIncrement$long();
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      tmp$ret$0 = sendersAndCloseStatusCur.and_jhajnj_k$(new Long(-1, 268435455));
      var s = tmp$ret$0;
      var closed = _get_isClosedForSend0__kxgf9m(sendersAndCloseStatusCur, this);
      var tmp$ret$1;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = get_SEGMENT_SIZE();
      tmp$ret$1 = s.div_9s1fi3_k$(toLong(tmp0_div));
      var id = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.Long.rem' call
      var tmp1_rem = get_SEGMENT_SIZE();
      tmp$ret$2 = s.rem_9rbcjo_k$(toLong(tmp1_rem));
      var i = tmp$ret$2.toInt_1tsl84_k$();
      if (!segment.get_id_kntnx8_k$().equals(id)) {
        var tmp0_elvis_lhs = findSegmentSend(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0;
          if (closed) {
            return onClosed();
          } else {
            continue $l$loop_0;
          }
          tmp = tmp_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      var tmp1_subject = updateCellSend(this, segment, i, element, s, waiter, closed);
      if (tmp1_subject === _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8_0()) {
        segment.cleanPrev_rmgs7f_k$();
        return onRendezvousOrBuffered();
      } else if (tmp1_subject === _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m_0()) {
        return onRendezvousOrBuffered();
      } else if (tmp1_subject === _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf_0()) {
        if (closed) {
          segment.onSlotCleaned_dnmt5m_k$();
          return onClosed();
        }
        var tmp2_safe_receiver = (!(waiter == null) ? isInterface(waiter, Waiter) : false) ? waiter : null;
        if (tmp2_safe_receiver == null)
          null;
        else {
          prepareSenderForSuspension(tmp2_safe_receiver, this, segment, i);
        }
        return onSuspend(segment, i);
      } else if (tmp1_subject === _get_RESULT_CLOSED_$accessor$yt74tm_10v48j_0()) {
        if (s.compareTo_n4fqi2_k$(this.get_receiversCounter_b035j5_k$()) < 0) {
          segment.cleanPrev_rmgs7f_k$();
        }
        return onClosed();
      } else if (tmp1_subject === _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0_0()) {
        segment.cleanPrev_rmgs7f_k$();
        continue $l$loop_0;
      } else if (tmp1_subject === _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m()) {
        return onNoWaiterSuspend(segment, i, element, s);
      }
    }
  };
  protoOf(BufferedChannel).shouldSendSuspend_te8nq7_k$ = function () {
    return shouldSendSuspend(this, this.sendersAndCloseStatus_1.get_kotlinx$atomicfu$value_vi2am5_k$());
  };
  protoOf(BufferedChannel).onReceiveEnqueued_xu1a6p_k$ = function () {
  };
  protoOf(BufferedChannel).onReceiveDequeued_4wpjax_k$ = function () {
  };
  protoOf(BufferedChannel).receive_ihhf9g_k$ = function ($completion) {
    var tmp = new $receiveCOROUTINE$5(this, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BufferedChannel).receiveCatching_wrys2l_k$ = function ($completion) {
    var tmp = new $receiveCatchingCOROUTINE$6(this, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    var tmp_0 = tmp.doResume_5yljmg_k$();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return new ChannelResult(tmp_0.holder_1);
  };
  protoOf(BufferedChannel).tryReceive_5r5v2p_k$ = function () {
    var r = this.receivers_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var sendersAndCloseStatusCur = this.sendersAndCloseStatus_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if (_get_isClosedForReceive0__f7qknl(sendersAndCloseStatusCur, this)) {
      return Companion_getInstance_2().closed_raq7mh_k$(this.get_closeCause_gbqkm2_k$());
    }
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    tmp$ret$0 = sendersAndCloseStatusCur.and_jhajnj_k$(new Long(-1, 268435455));
    var s = tmp$ret$0;
    if (r.compareTo_n4fqi2_k$(s) >= 0)
      return Companion_getInstance_2().failure_gnxj6a_k$();
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
      var tmp2_receiveImpl = get_INTERRUPTED_RCV();
      var segment = this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      $l$loop_0: while (true) {
        if (this.get_isClosedForReceive_v0r77d_k$()) {
          var tmp$ret$1;
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.tryReceive.<anonymous>' call
          tmp$ret$1 = Companion_getInstance_2().closed_raq7mh_k$(this.get_closeCause_gbqkm2_k$());
          tmp$ret$2 = tmp$ret$1;
          break $l$block_0;
        }
        var r_0 = this.receivers_1.atomicfu$getAndIncrement$long();
        var tmp$ret$3;
        // Inline function 'kotlin.Long.div' call
        var tmp0_div = get_SEGMENT_SIZE();
        tmp$ret$3 = r_0.div_9s1fi3_k$(toLong(tmp0_div));
        var id = tmp$ret$3;
        var tmp$ret$4;
        // Inline function 'kotlin.Long.rem' call
        var tmp1_rem = get_SEGMENT_SIZE();
        tmp$ret$4 = r_0.rem_9rbcjo_k$(toLong(tmp1_rem));
        var i = tmp$ret$4.toInt_1tsl84_k$();
        if (!segment.get_id_kntnx8_k$().equals(id)) {
          var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var updCellResult = updateCellReceive(this, segment, i, r_0, tmp2_receiveImpl);
        var tmp_0;
        if (updCellResult === _get_SUSPEND_$accessor$yt74tm_ccb8g1_0()) {
          var tmp1_safe_receiver = isInterface(tmp2_receiveImpl, Waiter) ? tmp2_receiveImpl : null;
          if (tmp1_safe_receiver == null)
            null;
          else {
            prepareReceiverForSuspension(tmp1_safe_receiver, this, segment, i);
          }
          var tmp$ret$5;
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.tryReceive.<anonymous>' call
          var tmp3__anonymous__ufb84q = segment;
          this.waitExpandBufferCompletion_kty46c_k$(r_0);
          tmp3__anonymous__ufb84q.onSlotCleaned_dnmt5m_k$();
          tmp$ret$5 = Companion_getInstance_2().failure_gnxj6a_k$();
          tmp_0 = tmp$ret$5;
        } else if (updCellResult === _get_FAILED_$accessor$yt74tm_h47uk8_0()) {
          if (r_0.compareTo_n4fqi2_k$(this.get_sendersCounter_csvgw7_k$()) < 0) {
            segment.cleanPrev_rmgs7f_k$();
          }
          continue $l$loop_0;
        } else if (updCellResult === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
          var tmp$ret$6;
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl.<anonymous>' call
          var tmp4__anonymous__pkmkx7 = segment;
          throw IllegalStateException_init_$Create$('unexpected');
          tmp_0 = tmp$ret$6;
        } else {
          segment.cleanPrev_rmgs7f_k$();
          var tmp$ret$7;
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.tryReceive.<anonymous>' call
          var tmp5__anonymous__kpxxpo = (updCellResult == null ? true : isObject(updCellResult)) ? updCellResult : THROW_CCE();
          tmp$ret$7 = Companion_getInstance_2().success_qotpmt_k$(tmp5__anonymous__kpxxpo);
          tmp_0 = tmp$ret$7;
        }
        tmp$ret$2 = tmp_0;
        break $l$block_0;
      }
    }
    return tmp$ret$2;
  };
  protoOf(BufferedChannel).dropFirstElementUntilTheSpecifiedCellIsInTheBuffer_v9ze1j_k$ = function (globalCellIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    var segment = this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    $l$loop_0: while (true) {
      var r = this.receivers_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp$ret$1;
      // Inline function 'kotlin.math.max' call
      var tmp$ret$0;
      // Inline function 'kotlin.Long.plus' call
      var tmp0_plus = this.capacity_1;
      tmp$ret$0 = r.plus_u6jwas_k$(toLong(tmp0_plus));
      var tmp1_max = tmp$ret$0;
      var tmp2_max = _get_bufferEndCounter__2d4hee(this);
      tmp$ret$1 = tmp1_max.compareTo_n4fqi2_k$(tmp2_max) >= 0 ? tmp1_max : tmp2_max;
      if (globalCellIndex.compareTo_n4fqi2_k$(tmp$ret$1) < 0)
        return Unit_getInstance();
      var tmp$ret$2;
      // Inline function 'kotlin.Long.plus' call
      tmp$ret$2 = r.plus_u6jwas_k$(new Long(1, 0));
      if (!this.receivers_1.atomicfu$compareAndSet(r, tmp$ret$2))
        continue $l$loop_0;
      var tmp$ret$3;
      // Inline function 'kotlin.Long.div' call
      var tmp3_div = get_SEGMENT_SIZE();
      tmp$ret$3 = r.div_9s1fi3_k$(toLong(tmp3_div));
      var id = tmp$ret$3;
      var tmp$ret$4;
      // Inline function 'kotlin.Long.rem' call
      var tmp4_rem = get_SEGMENT_SIZE();
      tmp$ret$4 = r.rem_9rbcjo_k$(toLong(tmp4_rem));
      var i = tmp$ret$4.toInt_1tsl84_k$();
      if (!segment.get_id_kntnx8_k$().equals(id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      var updCellResult = updateCellReceive(this, segment, i, r, null);
      if (updCellResult === _get_FAILED_$accessor$yt74tm_h47uk8_0()) {
        if (r.compareTo_n4fqi2_k$(this.get_sendersCounter_csvgw7_k$()) < 0) {
          segment.cleanPrev_rmgs7f_k$();
        }
      } else {
        segment.cleanPrev_rmgs7f_k$();
        var tmp1_safe_receiver = this.onUndeliveredElement_1;
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          tmp_0 = callUndeliveredElementCatchingException(tmp1_safe_receiver, (updCellResult == null ? true : isObject(updCellResult)) ? updCellResult : THROW_CCE());
        }
        var tmp2_safe_receiver = tmp_0;
        if (tmp2_safe_receiver == null)
          null;
        else {
          var tmp$ret$5;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          throw tmp2_safe_receiver;
        }
      }
    }
  };
  protoOf(BufferedChannel).waitExpandBufferCompletion_kty46c_k$ = function (globalIndex) {
    if (_get_isRendezvousOrUnlimited__3mdufi(this))
      return Unit_getInstance();
    while (_get_bufferEndCounter__2d4hee(this).compareTo_n4fqi2_k$(globalIndex) <= 0) {
    }
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS();
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.waitExpandBufferCompletion.<anonymous>' call
        var b = _get_bufferEndCounter__2d4hee(this);
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var tmp0__get_ebCompletedCounter__8ntbml = this.completedExpandBuffersAndPauseFlag_1.get_kotlinx$atomicfu$value_vi2am5_k$();
        tmp$ret$0 = tmp0__get_ebCompletedCounter__8ntbml.and_jhajnj_k$(new Long(-1, 1073741823));
        var ebCompleted = tmp$ret$0;
        if (b.equals(ebCompleted) ? b.equals(_get_bufferEndCounter__2d4hee(this)) : false)
          return Unit_getInstance();
      }
       while (inductionVariable < tmp0_repeat);
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp1_update = this.completedExpandBuffersAndPauseFlag_1;
      while (true) {
        var cur = tmp1_update.get_kotlinx$atomicfu$value_vi2am5_k$();
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.waitExpandBufferCompletion.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        tmp$ret$1 = cur.and_jhajnj_k$(new Long(-1, 1073741823));
        tmp$ret$2 = constructEBCompletedAndPauseFlag(tmp$ret$1, true);
        var upd = tmp$ret$2;
        if (tmp1_update.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$3 = Unit_getInstance();
          break $l$block;
        }
      }
    }
    while (true) {
      var b_0 = _get_bufferEndCounter__2d4hee(this);
      var ebCompletedAndBit = this.completedExpandBuffersAndPauseFlag_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp$ret$4;
      // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
      tmp$ret$4 = ebCompletedAndBit.and_jhajnj_k$(new Long(-1, 1073741823));
      var ebCompleted_0 = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
      tmp$ret$5 = !ebCompletedAndBit.and_jhajnj_k$(new Long(0, 1073741824)).equals(new Long(0, 0));
      var pauseExpandBuffers = tmp$ret$5;
      if (b_0.equals(ebCompleted_0) ? b_0.equals(_get_bufferEndCounter__2d4hee(this)) : false) {
        var tmp$ret$8;
        $l$block_0: {
          // Inline function 'kotlinx.atomicfu.update' call
          var tmp2_update = this.completedExpandBuffersAndPauseFlag_1;
          while (true) {
            var cur_0 = tmp2_update.get_kotlinx$atomicfu$value_vi2am5_k$();
            var tmp$ret$7;
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.waitExpandBufferCompletion.<anonymous>' call
            var tmp$ret$6;
            // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
            tmp$ret$6 = cur_0.and_jhajnj_k$(new Long(-1, 1073741823));
            tmp$ret$7 = constructEBCompletedAndPauseFlag(tmp$ret$6, false);
            var upd_0 = tmp$ret$7;
            if (tmp2_update.atomicfu$compareAndSet(cur_0, upd_0)) {
              tmp$ret$8 = Unit_getInstance();
              break $l$block_0;
            }
          }
        }
        return Unit_getInstance();
      }
      if (!pauseExpandBuffers) {
        this.completedExpandBuffersAndPauseFlag_1.atomicfu$compareAndSet(ebCompletedAndBit, constructEBCompletedAndPauseFlag(ebCompleted_0, true));
      }
    }
  };
  protoOf(BufferedChannel).get_onSend_hnoo40_k$ = function () {
    var tmp = BufferedChannel$registerSelectForSend$ref();
    var tmp_0 = typeof tmp === 'function' ? tmp : THROW_CCE();
    var tmp_1 = BufferedChannel$processResultSelectSend$ref();
    return new SelectClause2Impl(this, tmp_0, typeof tmp_1 === 'function' ? tmp_1 : THROW_CCE());
  };
  protoOf(BufferedChannel).registerSelectForSend_k87hef_k$ = function (select, element) {
    var tmp$ret$3;
    $l$block_5: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var tmp2_sendImpl = (element == null ? true : isObject(element)) ? element : THROW_CCE();
      var segment = this.sendSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = this.sendersAndCloseStatus_1.atomicfu$getAndIncrement$long();
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        tmp$ret$0 = sendersAndCloseStatusCur.and_jhajnj_k$(new Long(-1, 268435455));
        var s = tmp$ret$0;
        var closed = _get_isClosedForSend0__kxgf9m(sendersAndCloseStatusCur, this);
        var tmp$ret$1;
        // Inline function 'kotlin.Long.div' call
        var tmp0_div = get_SEGMENT_SIZE();
        tmp$ret$1 = s.div_9s1fi3_k$(toLong(tmp0_div));
        var id = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'kotlin.Long.rem' call
        var tmp1_rem = get_SEGMENT_SIZE();
        tmp$ret$2 = s.rem_9rbcjo_k$(toLong(tmp1_rem));
        var i = tmp$ret$2.toInt_1tsl84_k$();
        if (!segment.get_id_kntnx8_k$().equals(id)) {
          var tmp0_elvis_lhs = findSegmentSend(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              onClosedSelectOnSend(this, element, select);
              tmp$ret$3 = Unit_getInstance();
              break $l$block_5;
            } else {
              continue $l$loop_0;
            }
            tmp = tmp_0;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var tmp1_subject = updateCellSend(this, segment, i, tmp2_sendImpl, s, select, closed);
        if (tmp1_subject === _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8_0()) {
          segment.cleanPrev_rmgs7f_k$();
          select.selectInRegistrationPhase_lcwf8x_k$(Unit_getInstance());
          tmp$ret$3 = Unit_getInstance();
          break $l$block_5;
        } else if (tmp1_subject === _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m_0()) {
          select.selectInRegistrationPhase_lcwf8x_k$(Unit_getInstance());
          tmp$ret$3 = Unit_getInstance();
          break $l$block_5;
        } else if (tmp1_subject === _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf_0()) {
          if (closed) {
            segment.onSlotCleaned_dnmt5m_k$();
            onClosedSelectOnSend(this, element, select);
            tmp$ret$3 = Unit_getInstance();
            break $l$block_5;
          }
          var tmp2_safe_receiver = isInterface(select, Waiter) ? select : null;
          if (tmp2_safe_receiver == null)
            null;
          else {
            prepareSenderForSuspension(tmp2_safe_receiver, this, segment, i);
          }
          var tmp$ret$4;
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.registerSelectForSend.<anonymous>' call
          var tmp3__anonymous__ufb84q = segment;
          tmp$ret$4 = Unit_getInstance();
          tmp$ret$3 = tmp$ret$4;
          break $l$block_5;
        } else if (tmp1_subject === _get_RESULT_CLOSED_$accessor$yt74tm_10v48j_0()) {
          if (s.compareTo_n4fqi2_k$(this.get_receiversCounter_b035j5_k$()) < 0) {
            segment.cleanPrev_rmgs7f_k$();
          }
          onClosedSelectOnSend(this, element, select);
          tmp$ret$3 = Unit_getInstance();
          break $l$block_5;
        } else if (tmp1_subject === _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0_0()) {
          segment.cleanPrev_rmgs7f_k$();
          continue $l$loop_0;
        } else if (tmp1_subject === _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m()) {
          var tmp$ret$5;
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl.<anonymous>' call
          var tmp4__anonymous__pkmkx7 = segment;
          throw IllegalStateException_init_$Create$('unexpected');
          tmp$ret$3 = tmp$ret$5;
          break $l$block_5;
        }
      }
    }
    return tmp$ret$3;
  };
  protoOf(BufferedChannel).get_onReceive_mimw11_k$ = function () {
    var tmp = BufferedChannel$registerSelectForReceive$ref();
    var tmp_0 = typeof tmp === 'function' ? tmp : THROW_CCE();
    var tmp_1 = BufferedChannel$processResultSelectReceive$ref();
    return new SelectClause1Impl(this, tmp_0, typeof tmp_1 === 'function' ? tmp_1 : THROW_CCE(), this.onUndeliveredElementReceiveCancellationConstructor_1);
  };
  protoOf(BufferedChannel).get_onReceiveCatching_ajg9xa_k$ = function () {
    var tmp = BufferedChannel$registerSelectForReceive$ref_0();
    var tmp_0 = typeof tmp === 'function' ? tmp : THROW_CCE();
    var tmp_1 = BufferedChannel$processResultSelectReceiveCatching$ref();
    return new SelectClause1Impl(this, tmp_0, typeof tmp_1 === 'function' ? tmp_1 : THROW_CCE(), this.onUndeliveredElementReceiveCancellationConstructor_1);
  };
  protoOf(BufferedChannel).get_onReceiveOrNull_5u62it_k$ = function () {
    var tmp = BufferedChannel$registerSelectForReceive$ref_1();
    var tmp_0 = typeof tmp === 'function' ? tmp : THROW_CCE();
    var tmp_1 = BufferedChannel$processResultSelectReceiveOrNull$ref();
    return new SelectClause1Impl(this, tmp_0, typeof tmp_1 === 'function' ? tmp_1 : THROW_CCE(), this.onUndeliveredElementReceiveCancellationConstructor_1);
  };
  protoOf(BufferedChannel).iterator_jk1svi_k$ = function () {
    return new BufferedChannelIterator(this);
  };
  protoOf(BufferedChannel).get_closeCause_gbqkm2_k$ = function () {
    var tmp = this._closeCause_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    return (tmp == null ? true : tmp instanceof Error) ? tmp : THROW_CCE();
  };
  protoOf(BufferedChannel).get_sendException_qpq1ry_k$ = function () {
    var tmp0_elvis_lhs = this.get_closeCause_gbqkm2_k$();
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  protoOf(BufferedChannel).onClosedIdempotent_yw89kj_k$ = function () {
  };
  protoOf(BufferedChannel).close_9zy44b_k$ = function (cause) {
    return this.closeOrCancelImpl_jocjg8_k$(cause, false);
  };
  protoOf(BufferedChannel).cancel_as6ug7_k$ = function (cause) {
    return this.cancelImpl_51zief_k$(cause);
  };
  protoOf(BufferedChannel).cancel_2kogtl_k$ = function () {
    this.cancelImpl_51zief_k$(null);
  };
  protoOf(BufferedChannel).cancel_4b7aim_k$ = function (cause) {
    this.cancelImpl_51zief_k$(cause);
  };
  protoOf(BufferedChannel).cancelImpl_51zief_k$ = function (cause) {
    var tmp0_elvis_lhs = cause;
    return this.closeOrCancelImpl_jocjg8_k$(tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Channel was cancelled') : tmp0_elvis_lhs, true);
  };
  protoOf(BufferedChannel).closeOrCancelImpl_jocjg8_k$ = function (cause, cancel) {
    if (cancel) {
      markCancellationStarted(this);
    }
    var closedByThisOperation = this._closeCause_1.atomicfu$compareAndSet(get_NO_CLOSE_CAUSE(), cause);
    if (cancel) {
      markCancelled(this);
    } else {
      markClosed(this);
    }
    completeCloseOrCancel(this);
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.closeOrCancelImpl.<anonymous>' call
    this.onClosedIdempotent_yw89kj_k$();
    if (closedByThisOperation) {
      invokeCloseHandler(this);
    }
    tmp$ret$0 = closedByThisOperation;
    return tmp$ret$0;
  };
  protoOf(BufferedChannel).invokeOnClose_88rhe6_k$ = function (handler) {
    if (this.closeHandler_1.atomicfu$compareAndSet(null, handler)) {
      return Unit_getInstance();
    }
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.closeHandler_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.invokeOnClose.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (tmp1__anonymous__uwfjfc === get_CLOSE_HANDLER_CLOSED()) {
        if (this.closeHandler_1.atomicfu$compareAndSet(get_CLOSE_HANDLER_CLOSED(), get_CLOSE_HANDLER_INVOKED())) {
          handler(this.get_closeCause_gbqkm2_k$());
          return Unit_getInstance();
        }
      } else if (tmp1__anonymous__uwfjfc === get_CLOSE_HANDLER_INVOKED()) {
        // Inline function 'kotlin.error' call
        throw IllegalStateException_init_$Create$('Another handler was already registered and successfully invoked');
      } else {
        // Inline function 'kotlin.error' call
        var tmp0_error = 'Another handler is already registered: ' + toString_0(tmp1__anonymous__uwfjfc);
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
    }
  };
  protoOf(BufferedChannel).get_isConflatedDropOldest_qp2q39_k$ = function () {
    return false;
  };
  protoOf(BufferedChannel).get_isClosedForSend_ajczci_k$ = function () {
    return _get_isClosedForSend0__kxgf9m(this.sendersAndCloseStatus_1.get_kotlinx$atomicfu$value_vi2am5_k$(), this);
  };
  protoOf(BufferedChannel).get_isClosedForReceive_v0r77d_k$ = function () {
    return _get_isClosedForReceive0__f7qknl(this.sendersAndCloseStatus_1.get_kotlinx$atomicfu$value_vi2am5_k$(), this);
  };
  protoOf(BufferedChannel).get_isEmpty_zauvru_k$ = function () {
    if (this.get_isClosedForReceive_v0r77d_k$())
      return false;
    if (this.hasElements_nmp74f_k$())
      return false;
    return !this.get_isClosedForReceive_v0r77d_k$();
  };
  protoOf(BufferedChannel).hasElements_nmp74f_k$ = function () {
    $l$loop: while (true) {
      var segment = this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      var r = this.get_receiversCounter_b035j5_k$();
      var s = this.get_sendersCounter_csvgw7_k$();
      if (s.compareTo_n4fqi2_k$(r) <= 0)
        return false;
      var tmp$ret$0;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = get_SEGMENT_SIZE();
      tmp$ret$0 = r.div_9s1fi3_k$(toLong(tmp0_div));
      var id = tmp$ret$0;
      if (!segment.get_id_kntnx8_k$().equals(id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0;
          if (this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$().get_id_kntnx8_k$().compareTo_n4fqi2_k$(id) < 0) {
            return false;
          } else {
            continue $l$loop;
          }
          tmp = tmp_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      segment.cleanPrev_rmgs7f_k$();
      var tmp$ret$1;
      // Inline function 'kotlin.Long.rem' call
      var tmp1_rem = get_SEGMENT_SIZE();
      tmp$ret$1 = r.rem_9rbcjo_k$(toLong(tmp1_rem));
      var i = tmp$ret$1.toInt_1tsl84_k$();
      if (isCellNonEmpty(this, segment, i, r))
        return true;
      var tmp$ret$2;
      // Inline function 'kotlin.Long.plus' call
      tmp$ret$2 = r.plus_u6jwas_k$(new Long(1, 0));
      this.receivers_1.atomicfu$compareAndSet(r, tmp$ret$2);
    }
  };
  protoOf(BufferedChannel).toString = function () {
    var sb = StringBuilder_init_$Create$();
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var tmp0__get_sendersCloseStatus__mqty6d = this.sendersAndCloseStatus_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    tmp$ret$0 = tmp0__get_sendersCloseStatus__mqty6d.shr_wjue3g_k$(60).toInt_1tsl84_k$();
    var tmp0_subject = tmp$ret$0;
    if (tmp0_subject === 2) {
      sb.append_ssq29y_k$('closed,');
    } else if (tmp0_subject === 3) {
      sb.append_ssq29y_k$('cancelled,');
    }
    sb.append_ssq29y_k$('capacity=' + this.capacity_1 + ',');
    sb.append_ssq29y_k$('data=[');
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlin.collections.minBy' call
      var tmp$ret$3;
      // Inline function 'kotlin.collections.filter' call
      var tmp2_filter = listOf([this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$(), this.sendSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$(), this.bufferEndSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$()]);
      var tmp$ret$2;
      // Inline function 'kotlin.collections.filterTo' call
      var tmp1_filterTo = ArrayList_init_$Create$_0();
      var tmp0_iterator = tmp2_filter.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.toString.<anonymous>' call
        tmp$ret$1 = !(element === get_NULL_SEGMENT());
        if (tmp$ret$1) {
          tmp1_filterTo.add_1j60pz_k$(element);
        }
      }
      tmp$ret$2 = tmp1_filterTo;
      tmp$ret$3 = tmp$ret$2;
      var tmp3_minBy = tmp$ret$3;
      var iterator = tmp3_minBy.iterator_jk1svi_k$();
      if (!iterator.hasNext_bitz1p_k$())
        throw NoSuchElementException_init_$Create$();
      var minElem = iterator.next_20eer_k$();
      if (!iterator.hasNext_bitz1p_k$()) {
        tmp$ret$4 = minElem;
        break $l$block;
      }
      var tmp$ret$5;
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.toString.<anonymous>' call
      var tmp4__anonymous__pkmkx7 = minElem;
      tmp$ret$5 = tmp4__anonymous__pkmkx7.get_id_kntnx8_k$();
      var minValue = tmp$ret$5;
      do {
        var e = iterator.next_20eer_k$();
        var tmp$ret$6;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.toString.<anonymous>' call
        tmp$ret$6 = e.get_id_kntnx8_k$();
        var v = tmp$ret$6;
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.hasNext_bitz1p_k$());
      tmp$ret$4 = minElem;
    }
    var firstSegment = tmp$ret$4;
    var r = this.get_receiversCounter_b035j5_k$();
    var s = this.get_sendersCounter_csvgw7_k$();
    var segment = firstSegment;
    append_elements: while (true) {
      var inductionVariable = 0;
      var last_0 = get_SEGMENT_SIZE();
      if (inductionVariable < last_0)
        process_cell: do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$8;
          // Inline function 'kotlin.Long.plus' call
          var tmp$ret$7;
          // Inline function 'kotlin.Long.times' call
          var tmp5_times = segment.get_id_kntnx8_k$();
          var tmp6_times = get_SEGMENT_SIZE();
          tmp$ret$7 = tmp5_times.times_2zfqpc_k$(toLong(tmp6_times));
          var tmp7_plus = tmp$ret$7;
          tmp$ret$8 = tmp7_plus.plus_u6jwas_k$(toLong(i));
          var globalCellIndex = tmp$ret$8;
          if (globalCellIndex.compareTo_n4fqi2_k$(s) >= 0 ? globalCellIndex.compareTo_n4fqi2_k$(r) >= 0 : false)
            break append_elements;
          var cellState = segment.getState_atldmu_k$(i);
          var element_0 = segment.getElement_hln8g5_k$(i);
          var tmp2_subject = cellState;
          var tmp;
          if (!(tmp2_subject == null) ? isInterface(tmp2_subject, CancellableContinuation) : false) {
            tmp = (globalCellIndex.compareTo_n4fqi2_k$(r) < 0 ? globalCellIndex.compareTo_n4fqi2_k$(s) >= 0 : false) ? 'receive' : (globalCellIndex.compareTo_n4fqi2_k$(s) < 0 ? globalCellIndex.compareTo_n4fqi2_k$(r) >= 0 : false) ? 'send' : 'cont';
          } else {
            if (!(tmp2_subject == null) ? isInterface(tmp2_subject, SelectInstance) : false) {
              tmp = (globalCellIndex.compareTo_n4fqi2_k$(r) < 0 ? globalCellIndex.compareTo_n4fqi2_k$(s) >= 0 : false) ? 'onReceive' : (globalCellIndex.compareTo_n4fqi2_k$(s) < 0 ? globalCellIndex.compareTo_n4fqi2_k$(r) >= 0 : false) ? 'onSend' : 'select';
            } else {
              if (tmp2_subject instanceof ReceiveCatching) {
                tmp = 'receiveCatching';
              } else {
                if (tmp2_subject instanceof SendBroadcast) {
                  tmp = 'sendBroadcast';
                } else {
                  if (tmp2_subject instanceof WaiterEB) {
                    tmp = 'EB(' + toString_0(cellState) + ')';
                  } else {
                    if (equals(tmp2_subject, get_RESUMING_BY_RCV()) ? true : equals(tmp2_subject, get_RESUMING_BY_EB())) {
                      tmp = 'resuming_sender';
                    } else {
                      if ((((((tmp2_subject == null ? true : equals(tmp2_subject, get_IN_BUFFER())) ? true : equals(tmp2_subject, get_DONE_RCV())) ? true : equals(tmp2_subject, get_POISONED())) ? true : equals(tmp2_subject, get_INTERRUPTED_RCV())) ? true : equals(tmp2_subject, get_INTERRUPTED_SEND())) ? true : equals(tmp2_subject, get_CHANNEL_CLOSED())) {
                        continue process_cell;
                      } else {
                        tmp = toString(cellState);
                      }
                    }
                  }
                }
              }
            }
          }
          var cellStateString = tmp;
          if (!(element_0 == null)) {
            sb.append_ssq29y_k$('(' + cellStateString + ',' + element_0 + '),');
          } else {
            sb.append_ssq29y_k$(cellStateString + ',');
          }
        }
         while (inductionVariable < last_0);
      var tmp3_elvis_lhs = segment.get_next_wor1vg_k$();
      var tmp_0;
      if (tmp3_elvis_lhs == null) {
        break append_elements;
      } else {
        tmp_0 = tmp3_elvis_lhs;
      }
      segment = tmp_0;
    }
    if (equals(new Char(last(sb)), new Char(_Char___init__impl__6a9atx(44)))) {
      sb.deleteAt_w9fbwd_k$(sb.get_length_g42xv3_k$() - 1 | 0);
    }
    sb.append_ssq29y_k$(']');
    return sb.toString();
  };
  protoOf(BufferedChannel).toStringDebug_vfge9z_k$ = function () {
    var sb = StringBuilder_init_$Create$();
    var tmp = toString(this.get_sendersCounter_csvgw7_k$());
    var tmp_0 = toString(this.get_receiversCounter_b035j5_k$());
    var tmp_1 = toString(_get_bufferEndCounter__2d4hee(this));
    var tmp_2 = toString(this.completedExpandBuffersAndPauseFlag_1.get_kotlinx$atomicfu$value_vi2am5_k$());
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var tmp0__get_sendersCloseStatus__mqty6d = this.sendersAndCloseStatus_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    tmp$ret$0 = tmp0__get_sendersCloseStatus__mqty6d.shr_wjue3g_k$(60).toInt_1tsl84_k$();
    sb.append_ssq29y_k$('S=' + tmp + ',R=' + tmp_0 + ',B=' + tmp_1 + ",B'=" + tmp_2 + ',C=' + tmp$ret$0 + ',');
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var tmp1__get_sendersCloseStatus__n9at7o = this.sendersAndCloseStatus_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    tmp$ret$1 = tmp1__get_sendersCloseStatus__n9at7o.shr_wjue3g_k$(60).toInt_1tsl84_k$();
    var tmp0_subject = tmp$ret$1;
    switch (tmp0_subject) {
      case 1:
        sb.append_ssq29y_k$('CANCELLATION_STARTED,');
        ;
        break;
      case 2:
        sb.append_ssq29y_k$('CLOSED,');
        ;
        break;
      case 3:
        sb.append_ssq29y_k$('CANCELLED,');
        ;
        break;
    }
    sb.append_ssq29y_k$('SEND_SEGM=' + get_hexAddress(this.sendSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$()) + ',RCV_SEGM=' + get_hexAddress(this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$()));
    if (!_get_isRendezvousOrUnlimited__3mdufi(this)) {
      sb.append_ssq29y_k$(',EB_SEGM=' + get_hexAddress(this.bufferEndSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$()));
    }
    sb.append_ssq29y_k$('  ');
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlin.collections.minBy' call
      var tmp$ret$4;
      // Inline function 'kotlin.collections.filter' call
      var tmp3_filter = listOf([this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$(), this.sendSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$(), this.bufferEndSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$()]);
      var tmp$ret$3;
      // Inline function 'kotlin.collections.filterTo' call
      var tmp2_filterTo = ArrayList_init_$Create$_0();
      var tmp0_iterator = tmp3_filter.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.toStringDebug.<anonymous>' call
        tmp$ret$2 = !(element === get_NULL_SEGMENT());
        if (tmp$ret$2) {
          tmp2_filterTo.add_1j60pz_k$(element);
        }
      }
      tmp$ret$3 = tmp2_filterTo;
      tmp$ret$4 = tmp$ret$3;
      var tmp4_minBy = tmp$ret$4;
      var iterator = tmp4_minBy.iterator_jk1svi_k$();
      if (!iterator.hasNext_bitz1p_k$())
        throw NoSuchElementException_init_$Create$();
      var minElem = iterator.next_20eer_k$();
      if (!iterator.hasNext_bitz1p_k$()) {
        tmp$ret$5 = minElem;
        break $l$block;
      }
      var tmp$ret$6;
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.toStringDebug.<anonymous>' call
      var tmp5__anonymous__kpxxpo = minElem;
      tmp$ret$6 = tmp5__anonymous__kpxxpo.get_id_kntnx8_k$();
      var minValue = tmp$ret$6;
      do {
        var e = iterator.next_20eer_k$();
        var tmp$ret$7;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.toStringDebug.<anonymous>' call
        tmp$ret$7 = e.get_id_kntnx8_k$();
        var v = tmp$ret$7;
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.hasNext_bitz1p_k$());
      tmp$ret$5 = minElem;
    }
    var firstSegment = tmp$ret$5;
    var segment = firstSegment;
    $l$loop: while (true) {
      var tmp_3 = get_hexAddress(segment);
      var tmp_4 = segment.get_isRemoved_gzdz59_k$() ? '*' : '';
      var tmp_5 = toString(segment.get_id_kntnx8_k$());
      var tmp1_safe_receiver = segment.get_prev_wosl18_k$();
      sb.append_ssq29y_k$(tmp_3 + '=[' + tmp_4 + tmp_5 + ',prev=' + (tmp1_safe_receiver == null ? null : get_hexAddress(tmp1_safe_receiver)) + ',');
      // Inline function 'kotlin.repeat' call
      var tmp6_repeat = get_SEGMENT_SIZE();
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp6_repeat)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.toStringDebug.<anonymous>' call
          var cellState = segment.getState_atldmu_k$(index);
          var element_0 = segment.getElement_hln8g5_k$(index);
          var tmp0_subject_0 = cellState;
          var tmp_6;
          if (!(tmp0_subject_0 == null) ? isInterface(tmp0_subject_0, CancellableContinuation) : false) {
            tmp_6 = 'cont';
          } else {
            if (!(tmp0_subject_0 == null) ? isInterface(tmp0_subject_0, SelectInstance) : false) {
              tmp_6 = 'select';
            } else {
              if (tmp0_subject_0 instanceof ReceiveCatching) {
                tmp_6 = 'receiveCatching';
              } else {
                if (tmp0_subject_0 instanceof SendBroadcast) {
                  tmp_6 = 'send(broadcast)';
                } else {
                  if (tmp0_subject_0 instanceof WaiterEB) {
                    tmp_6 = 'EB(' + toString_0(cellState) + ')';
                  } else {
                    tmp_6 = toString_0(cellState);
                  }
                }
              }
            }
          }
          var cellStateString = tmp_6;
          sb.append_ssq29y_k$('[' + index + ']=(' + cellStateString + ',' + element_0 + '),');
        }
         while (inductionVariable < tmp6_repeat);
      var tmp2_safe_receiver = segment.get_next_wor1vg_k$();
      sb.append_ssq29y_k$('next=' + (tmp2_safe_receiver == null ? null : get_hexAddress(tmp2_safe_receiver)) + ']  ');
      var tmp3_elvis_lhs = segment.get_next_wor1vg_k$();
      var tmp_7;
      if (tmp3_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp_7 = tmp3_elvis_lhs;
      }
      segment = tmp_7;
    }
    return sb.toString();
  };
  protoOf(BufferedChannel).checkSegmentStructureInvariants_c69rmy_k$ = function () {
    if (_get_isRendezvousOrUnlimited__3mdufi(this)) {
      // Inline function 'kotlin.check' call
      var tmp0_check = this.bufferEndSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$() === get_NULL_SEGMENT();
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.checkSegmentStructureInvariants.<anonymous>' call
        tmp$ret$0 = 'bufferEndSegment must be NULL_SEGMENT for rendezvous and unlimited channels; they do not manipulate it.\n' + ('Channel state: ' + this);
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
    } else {
      // Inline function 'kotlin.check' call
      var tmp1_check = this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$().get_id_kntnx8_k$().compareTo_n4fqi2_k$(this.bufferEndSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$().get_id_kntnx8_k$()) <= 0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_check) {
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.checkSegmentStructureInvariants.<anonymous>' call
        tmp$ret$1 = 'bufferEndSegment should not have lower id than receiveSegment.\n' + ('Channel state: ' + this);
        var message_0 = tmp$ret$1;
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
    }
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlin.collections.minBy' call
      var tmp$ret$4;
      // Inline function 'kotlin.collections.filter' call
      var tmp3_filter = listOf([this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$(), this.sendSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$(), this.bufferEndSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$()]);
      var tmp$ret$3;
      // Inline function 'kotlin.collections.filterTo' call
      var tmp2_filterTo = ArrayList_init_$Create$_0();
      var tmp0_iterator = tmp3_filter.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.checkSegmentStructureInvariants.<anonymous>' call
        tmp$ret$2 = !(element === get_NULL_SEGMENT());
        if (tmp$ret$2) {
          tmp2_filterTo.add_1j60pz_k$(element);
        }
      }
      tmp$ret$3 = tmp2_filterTo;
      tmp$ret$4 = tmp$ret$3;
      var tmp4_minBy = tmp$ret$4;
      var iterator = tmp4_minBy.iterator_jk1svi_k$();
      if (!iterator.hasNext_bitz1p_k$())
        throw NoSuchElementException_init_$Create$();
      var minElem = iterator.next_20eer_k$();
      if (!iterator.hasNext_bitz1p_k$()) {
        tmp$ret$5 = minElem;
        break $l$block;
      }
      var tmp$ret$6;
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.checkSegmentStructureInvariants.<anonymous>' call
      var tmp5__anonymous__kpxxpo = minElem;
      tmp$ret$6 = tmp5__anonymous__kpxxpo.get_id_kntnx8_k$();
      var minValue = tmp$ret$6;
      do {
        var e = iterator.next_20eer_k$();
        var tmp$ret$7;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.checkSegmentStructureInvariants.<anonymous>' call
        tmp$ret$7 = e.get_id_kntnx8_k$();
        var v = tmp$ret$7;
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.hasNext_bitz1p_k$());
      tmp$ret$5 = minElem;
    }
    var firstSegment = tmp$ret$5;
    // Inline function 'kotlin.check' call
    var tmp6_check = firstSegment.get_prev_wosl18_k$() == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp6_check) {
      var tmp$ret$8;
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.checkSegmentStructureInvariants.<anonymous>' call
      tmp$ret$8 = 'All processed segments should be unreachable from the data structure, but the `prev` link of the leftmost segment is non-null.\n' + ('Channel state: ' + this);
      var message_1 = tmp$ret$8;
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    var segment = firstSegment;
    while (!(segment.get_next_wor1vg_k$() == null)) {
      // Inline function 'kotlin.check' call
      var tmp7_check = ensureNotNull(segment.get_next_wor1vg_k$()).get_prev_wosl18_k$() == null ? true : ensureNotNull(segment.get_next_wor1vg_k$()).get_prev_wosl18_k$() === segment;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp7_check) {
        var tmp$ret$9;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.checkSegmentStructureInvariants.<anonymous>' call
        tmp$ret$9 = 'The `segment.next.prev === segment` invariant is violated.\n' + ('Channel state: ' + this);
        var message_2 = tmp$ret$9;
        throw IllegalStateException_init_$Create$(toString(message_2));
      }
      var interruptedOrClosedCells = 0;
      var inductionVariable = 0;
      var last = get_SEGMENT_SIZE();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var state = segment.getState_atldmu_k$(i);
          if (equals(state, get_BUFFERED())) {
          } else {
            if (!(state == null) ? isInterface(state, Waiter) : false) {
            } else {
              if ((equals(state, get_INTERRUPTED_RCV()) ? true : equals(state, get_INTERRUPTED_SEND())) ? true : equals(state, get_CHANNEL_CLOSED())) {
                // Inline function 'kotlin.check' call
                var tmp8_check = segment.getElement_hln8g5_k$(i) == null;
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'kotlin.check' call
                // Inline function 'kotlin.contracts.contract' call
                if (!tmp8_check) {
                  var tmp$ret$10;
                  // Inline function 'kotlin.check.<anonymous>' call
                  tmp$ret$10 = 'Check failed.';
                  var message_3 = tmp$ret$10;
                  throw IllegalStateException_init_$Create$(toString(message_3));
                }
                var tmp1 = interruptedOrClosedCells;
                interruptedOrClosedCells = tmp1 + 1 | 0;
              } else {
                if (equals(state, get_POISONED()) ? true : equals(state, get_DONE_RCV())) {
                  // Inline function 'kotlin.check' call
                  var tmp9_check = segment.getElement_hln8g5_k$(i) == null;
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'kotlin.check' call
                  // Inline function 'kotlin.contracts.contract' call
                  if (!tmp9_check) {
                    var tmp$ret$11;
                    // Inline function 'kotlin.check.<anonymous>' call
                    tmp$ret$11 = 'Check failed.';
                    var message_4 = tmp$ret$11;
                    throw IllegalStateException_init_$Create$(toString(message_4));
                  }
                } else {
                  var tmp10_error = 'Unexpected segment cell state: ' + toString_0(state) + '.\nChannel state: ' + this;
                  throw IllegalStateException_init_$Create$(toString(tmp10_error));
                }
              }
            }
          }
        }
         while (inductionVariable < last);
      if (interruptedOrClosedCells === get_SEGMENT_SIZE()) {
        // Inline function 'kotlin.check' call
        var tmp11_check = (segment === this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$() ? true : segment === this.sendSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$()) ? true : segment === this.bufferEndSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp11_check) {
          var tmp$ret$12;
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.checkSegmentStructureInvariants.<anonymous>' call
          tmp$ret$12 = 'Logically removed segment is reachable.\nChannel state: ' + this;
          var message_5 = tmp$ret$12;
          throw IllegalStateException_init_$Create$(toString(message_5));
        }
      }
      segment = ensureNotNull(segment.get_next_wor1vg_k$());
    }
  };
  function WaiterEB(waiter) {
    this.waiter_1 = waiter;
  }
  protoOf(WaiterEB).get_waiter_l9ao6j_k$ = function () {
    return this.waiter_1;
  };
  protoOf(WaiterEB).toString = function () {
    return 'WaiterEB(' + this.waiter_1 + ')';
  };
  function initialBufferEnd(capacity) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    var tmp0_subject = capacity;
    return tmp0_subject === Factory_getInstance().get_RENDEZVOUS_7qhqgu_k$() ? new Long(0, 0) : tmp0_subject === Factory_getInstance().get_UNLIMITED_eshsm0_k$() ? new Long(-1, 2147483647) : toLong(capacity);
  }
  function get_sendersCounter(_this__u8e3s4) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return _this__u8e3s4.and_jhajnj_k$(new Long(-1, 268435455));
  }
  function get_BUFFER_END_RENDEZVOUS() {
    return BUFFER_END_RENDEZVOUS;
  }
  var BUFFER_END_RENDEZVOUS;
  function get_BUFFER_END_UNLIMITED() {
    return BUFFER_END_UNLIMITED;
  }
  var BUFFER_END_UNLIMITED;
  function get_RESULT_RENDEZVOUS() {
    return RESULT_RENDEZVOUS;
  }
  var RESULT_RENDEZVOUS;
  function get_RESULT_BUFFERED() {
    return RESULT_BUFFERED;
  }
  var RESULT_BUFFERED;
  function get_RESULT_SUSPEND() {
    return RESULT_SUSPEND;
  }
  var RESULT_SUSPEND;
  function get_RESULT_CLOSED() {
    return RESULT_CLOSED;
  }
  var RESULT_CLOSED;
  function get_RESULT_FAILED() {
    return RESULT_FAILED;
  }
  var RESULT_FAILED;
  function get_RESULT_SUSPEND_NO_WAITER() {
    return RESULT_SUSPEND_NO_WAITER;
  }
  var RESULT_SUSPEND_NO_WAITER;
  function ReceiveCatching(cont) {
    this.cont_1 = cont;
  }
  protoOf(ReceiveCatching).get_cont_wok86z_k$ = function () {
    return this.cont_1;
  };
  protoOf(ReceiveCatching).invokeOnCancellation_gome2h_k$ = function (segment, index) {
    this.cont_1.invokeOnCancellation_gome2h_k$(segment, index);
  };
  function tryResume0(_this__u8e3s4, value, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_BufferedChannel_kt__d6uc4y();
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = _this__u8e3s4.tryResume_93jc0s_k$(value, null, onCancellation);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.tryResume0.<anonymous>' call
    var tmp;
    if (!(tmp0_let == null)) {
      _this__u8e3s4.completeResume_fu4ex_k$(tmp0_let);
      tmp = true;
    } else {
      tmp = false;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function get_ebPauseExpandBuffers(_this__u8e3s4) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return !_this__u8e3s4.and_jhajnj_k$(new Long(0, 1073741824)).equals(new Long(0, 0));
  }
  function get_ebCompletedCounter(_this__u8e3s4) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return _this__u8e3s4.and_jhajnj_k$(new Long(-1, 1073741823));
  }
  function constructEBCompletedAndPauseFlag(counter, pauseEB) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return (pauseEB ? new Long(0, 1073741824) : new Long(0, 0)).plus_u6jwas_k$(counter);
  }
  function get_sendersCloseStatus(_this__u8e3s4) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return _this__u8e3s4.shr_wjue3g_k$(60).toInt_1tsl84_k$();
  }
  function get_CLOSE_STATUS_ACTIVE() {
    return CLOSE_STATUS_ACTIVE;
  }
  var CLOSE_STATUS_ACTIVE;
  function constructSendersAndCloseStatus(counter, closeStatus) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return toLong(closeStatus).shl_po5ip6_k$(60).plus_u6jwas_k$(counter);
  }
  function get_CLOSE_STATUS_CLOSED() {
    return CLOSE_STATUS_CLOSED;
  }
  var CLOSE_STATUS_CLOSED;
  function get_CLOSE_STATUS_CANCELLATION_STARTED() {
    return CLOSE_STATUS_CANCELLATION_STARTED;
  }
  var CLOSE_STATUS_CANCELLATION_STARTED;
  function get_CLOSE_STATUS_CANCELLED() {
    return CLOSE_STATUS_CANCELLED;
  }
  var CLOSE_STATUS_CANCELLED;
  function createSegmentFunction() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return createSegment$ref();
  }
  function get_SENDERS_COUNTER_MASK() {
    return SENDERS_COUNTER_MASK;
  }
  var SENDERS_COUNTER_MASK;
  function get_EB_COMPLETED_PAUSE_EXPAND_BUFFERS_BIT() {
    return EB_COMPLETED_PAUSE_EXPAND_BUFFERS_BIT;
  }
  var EB_COMPLETED_PAUSE_EXPAND_BUFFERS_BIT;
  function get_EB_COMPLETED_COUNTER_MASK() {
    return EB_COMPLETED_COUNTER_MASK;
  }
  var EB_COMPLETED_COUNTER_MASK;
  function get_SENDERS_CLOSE_STATUS_SHIFT() {
    return SENDERS_CLOSE_STATUS_SHIFT;
  }
  var SENDERS_CLOSE_STATUS_SHIFT;
  function createSegment(id, prev) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return new ChannelSegment(id, prev, prev.get_channel_dhi7tm_k$(), 0);
  }
  function _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 0;
  }
  function _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 1;
  }
  function _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 2;
  }
  function _get_RESULT_CLOSED_$accessor$yt74tm_10v48j() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 4;
  }
  function _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 5;
  }
  function _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 3;
  }
  function _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8_0() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 0;
  }
  function _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m_0() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 1;
  }
  function _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf_0() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 2;
  }
  function _get_RESULT_CLOSED_$accessor$yt74tm_10v48j_0() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 4;
  }
  function _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0_0() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 5;
  }
  function _get_SUSPEND_$accessor$yt74tm_ccb8g1() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return get_SUSPEND();
  }
  function _get_FAILED_$accessor$yt74tm_h47uk8() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return get_FAILED();
  }
  function _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return get_SUSPEND_NO_WAITER();
  }
  function _get_SUSPEND_$accessor$yt74tm_ccb8g1_0() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return get_SUSPEND();
  }
  function _get_FAILED_$accessor$yt74tm_h47uk8_0() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return get_FAILED();
  }
  function createSegment$ref() {
    var l = function (p0, p1) {
      return createSegment(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  var properties_initialized_BufferedChannel_kt_58tjvw;
  function _init_properties_BufferedChannel_kt__d6uc4y() {
    if (properties_initialized_BufferedChannel_kt_58tjvw) {
    } else {
      properties_initialized_BufferedChannel_kt_58tjvw = true;
      NULL_SEGMENT = new ChannelSegment(new Long(-1, -1), null, null, 0);
      SEGMENT_SIZE = systemProp('kotlinx.coroutines.bufferedChannel.segmentSize', 32);
      EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS = systemProp('kotlinx.coroutines.bufferedChannel.expandBufferCompletionWaitIterations', 10000);
      BUFFERED = new Symbol('BUFFERED');
      IN_BUFFER = new Symbol('SHOULD_BUFFER');
      RESUMING_BY_RCV = new Symbol('S_RESUMING_BY_RCV');
      RESUMING_BY_EB = new Symbol('RESUMING_BY_EB');
      POISONED = new Symbol('POISONED');
      DONE_RCV = new Symbol('DONE_RCV');
      INTERRUPTED_SEND = new Symbol('INTERRUPTED_SEND');
      INTERRUPTED_RCV = new Symbol('INTERRUPTED_RCV');
      CHANNEL_CLOSED = new Symbol('CHANNEL_CLOSED');
      SUSPEND = new Symbol('SUSPEND');
      SUSPEND_NO_WAITER = new Symbol('SUSPEND_NO_WAITER');
      FAILED = new Symbol('FAILED');
      NO_RECEIVE_RESULT = new Symbol('NO_RECEIVE_RESULT');
      CLOSE_HANDLER_CLOSED = new Symbol('CLOSE_HANDLER_CLOSED');
      CLOSE_HANDLER_INVOKED = new Symbol('CLOSE_HANDLER_INVOKED');
      NO_CLOSE_CAUSE = new Symbol('NO_CLOSE_CAUSE');
    }
  }
  function Factory() {
    Factory_instance = this;
    this.UNLIMITED_1 = 2147483647;
    this.RENDEZVOUS_1 = 0;
    this.CONFLATED_1 = -1;
    this.BUFFERED_1 = -2;
    this.OPTIONAL_CHANNEL_1 = -3;
    this.DEFAULT_BUFFER_PROPERTY_NAME_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.CHANNEL_DEFAULT_CAPACITY_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  protoOf(Factory).get_UNLIMITED_eshsm0_k$ = function () {
    return this.UNLIMITED_1;
  };
  protoOf(Factory).get_RENDEZVOUS_7qhqgu_k$ = function () {
    return this.RENDEZVOUS_1;
  };
  protoOf(Factory).get_CONFLATED_tox14f_k$ = function () {
    return this.CONFLATED_1;
  };
  protoOf(Factory).get_BUFFERED_qzy754_k$ = function () {
    return this.BUFFERED_1;
  };
  protoOf(Factory).get_OPTIONAL_CHANNEL_c6wrw3_k$ = function () {
    return this.OPTIONAL_CHANNEL_1;
  };
  protoOf(Factory).get_DEFAULT_BUFFER_PROPERTY_NAME_rafy59_k$ = function () {
    return this.DEFAULT_BUFFER_PROPERTY_NAME_1;
  };
  protoOf(Factory).get_CHANNEL_DEFAULT_CAPACITY_4xco1p_k$ = function () {
    return this.CHANNEL_DEFAULT_CAPACITY_1;
  };
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function Channel() {
  }
  function _get_failed__jtpc32($this) {
    return $this.failed_1;
  }
  function _ChannelResult___init__impl__siwsuf(holder) {
    return holder;
  }
  function _ChannelResult___get_holder__impl__pm9gzw($this) {
    return $this;
  }
  function _ChannelResult___get_isSuccess__impl__odq1z9($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return !(tmp instanceof Failed);
  }
  function _ChannelResult___get_isFailure__impl__nz6ehu($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return tmp instanceof Failed;
  }
  function _ChannelResult___get_isClosed__impl__mg7kuu($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return tmp instanceof Closed;
  }
  function ChannelResult__getOrNull_impl_f5e07h($this) {
    var tmp;
    var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp_0 instanceof Failed)) {
      var tmp_1 = _ChannelResult___get_holder__impl__pm9gzw($this);
      tmp = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  }
  function ChannelResult__getOrThrow_impl_od1axs($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp instanceof Failed)) {
      var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
      return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    }
    var tmp_1;
    var tmp_2 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (tmp_2 instanceof Closed) {
      tmp_1 = !(_ChannelResult___get_holder__impl__pm9gzw($this).cause_1 == null);
    } else {
      tmp_1 = false;
    }
    if (tmp_1)
      throw _ChannelResult___get_holder__impl__pm9gzw($this).cause_1;
    // Inline function 'kotlin.error' call
    var tmp0_error = "Trying to call 'getOrThrow' on a failed channel result: " + toString_0(_ChannelResult___get_holder__impl__pm9gzw($this));
    throw IllegalStateException_init_$Create$(toString(tmp0_error));
  }
  function ChannelResult__exceptionOrNull_impl_16ei30($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.cause_1;
  }
  function Failed() {
  }
  protoOf(Failed).toString = function () {
    return 'Failed';
  };
  function Closed(cause) {
    Failed.call(this);
    this.cause_1 = cause;
  }
  protoOf(Closed).get_cause_iplhs0_k$ = function () {
    return this.cause_1;
  };
  protoOf(Closed).equals = function (other) {
    var tmp;
    if (other instanceof Closed) {
      tmp = equals(this.cause_1, other.cause_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Closed).hashCode = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.cause_1;
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp$ret$0;
  };
  protoOf(Closed).toString = function () {
    return 'Closed(' + this.cause_1 + ')';
  };
  function Companion() {
    Companion_instance = this;
    this.failed_1 = new Failed();
  }
  protoOf(Companion).success_qotpmt_k$ = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  protoOf(Companion).failure_gnxj6a_k$ = function () {
    return _ChannelResult___init__impl__siwsuf(this.failed_1);
  };
  protoOf(Companion).closed_raq7mh_k$ = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed(cause));
  };
  var Companion_instance;
  function Companion_getInstance_2() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ChannelResult__toString_impl_rrcqu7($this) {
    var tmp0_subject = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp;
    if (tmp0_subject instanceof Closed) {
      tmp = toString(_ChannelResult___get_holder__impl__pm9gzw($this));
    } else {
      tmp = 'Value(' + toString_0(_ChannelResult___get_holder__impl__pm9gzw($this)) + ')';
    }
    return tmp;
  }
  function ChannelResult__hashCode_impl_lilec2($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function ChannelResult__equals_impl_f471ri($this, other) {
    if (!(other instanceof ChannelResult))
      return false;
    var tmp0_other_with_cast = other instanceof ChannelResult ? other.holder_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance_2();
    this.holder_1 = holder;
  }
  protoOf(ChannelResult).toString = function () {
    return ChannelResult__toString_impl_rrcqu7(this.holder_1);
  };
  protoOf(ChannelResult).hashCode = function () {
    return ChannelResult__hashCode_impl_lilec2(this.holder_1);
  };
  protoOf(ChannelResult).equals = function (other) {
    return ChannelResult__equals_impl_f471ri(this.holder_1, other);
  };
  function $next0COROUTINE$8(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($next0COROUTINE$8).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.hasNext_4tgia2_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (!ARGUMENT) {
              throw new ClosedReceiveChannelException(get_DEFAULT_CLOSE_MESSAGE());
            } else {
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

            break;
          case 2:
            return this._this__u8e3s4__1.next_20eer_k$();
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
  function ChannelIterator() {
  }
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  function SendChannel() {
  }
  function $receiveOrNullCOROUTINE$9(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($receiveOrNullCOROUTINE$9).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.receiveCatching_wrys2l_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 1:
            var unboxed = suspendResult.holder_1;
            suspendResult = new ChannelResult(unboxed);
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            var ARGUMENT = suspendResult.holder_1;
            return ChannelResult__getOrNull_impl_f5e07h(ARGUMENT);
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
  function ReceiveChannel() {
  }
  function Channel_0(capacity, onBufferOverflow, onUndeliveredElement) {
    var tmp;
    if (capacity === VOID) {
      Factory_getInstance();
      tmp = 0;
    } else {
      tmp = capacity;
    }
    capacity = tmp;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    var tmp0_subject = capacity;
    var tmp_0;
    Factory_getInstance();
    if (tmp0_subject === 0) {
      var tmp_1;
      if (onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
        Factory_getInstance();
        tmp_1 = new BufferedChannel(0, onUndeliveredElement);
      } else {
        tmp_1 = new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
      }
      tmp_0 = tmp_1;
    } else {
      Factory_getInstance();
      if (tmp0_subject === -1) {
        // Inline function 'kotlin.require' call
        var tmp0_require = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance());
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_require) {
          var tmp$ret$0;
          // Inline function 'kotlinx.coroutines.channels.Channel.<anonymous>' call
          tmp$ret$0 = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
          var message = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
        tmp_0 = new ConflatedBufferedChannel(1, BufferOverflow_DROP_OLDEST_getInstance(), onUndeliveredElement);
      } else {
        Factory_getInstance();
        if (tmp0_subject === 2147483647) {
          Factory_getInstance();
          tmp_0 = new BufferedChannel(2147483647, onUndeliveredElement);
        } else {
          Factory_getInstance();
          if (tmp0_subject === -2) {
            tmp_0 = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(Factory_getInstance().CHANNEL_DEFAULT_CAPACITY_1, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
          } else {
            tmp_0 = onBufferOverflow === BufferOverflow_SUSPEND_getInstance() ? new BufferedChannel(capacity, onUndeliveredElement) : new ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement);
          }
        }
      }
    }
    return tmp_0;
  }
  function onClosed(_this__u8e3s4, action) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp = _ChannelResult___get_holder__impl__pm9gzw(_this__u8e3s4);
    if (tmp instanceof Closed)
      action(ChannelResult__exceptionOrNull_impl_16ei30(_this__u8e3s4));
    return _this__u8e3s4;
  }
  function onSuccess(_this__u8e3s4, action) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp = _ChannelResult___get_holder__impl__pm9gzw(_this__u8e3s4);
    if (!(tmp instanceof Failed)) {
      var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw(_this__u8e3s4);
      action((tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE());
    }
    return _this__u8e3s4;
  }
  function ChannelCoroutine(parentContext, _channel, initParentJob, active) {
    AbstractCoroutine.call(this, parentContext, initParentJob, active);
    this._channel_1 = _channel;
  }
  protoOf(ChannelCoroutine).get__channel_jf1gul_k$ = function () {
    return this._channel_1;
  };
  protoOf(ChannelCoroutine).get_isClosedForReceive_v0r77d_k$ = function () {
    return this._channel_1.get_isClosedForReceive_v0r77d_k$();
  };
  protoOf(ChannelCoroutine).get_isClosedForSend_ajczci_k$ = function () {
    return this._channel_1.get_isClosedForSend_ajczci_k$();
  };
  protoOf(ChannelCoroutine).get_isEmpty_zauvru_k$ = function () {
    return this._channel_1.get_isEmpty_zauvru_k$();
  };
  protoOf(ChannelCoroutine).get_onReceive_mimw11_k$ = function () {
    return this._channel_1.get_onReceive_mimw11_k$();
  };
  protoOf(ChannelCoroutine).get_onReceiveCatching_ajg9xa_k$ = function () {
    return this._channel_1.get_onReceiveCatching_ajg9xa_k$();
  };
  protoOf(ChannelCoroutine).get_onReceiveOrNull_5u62it_k$ = function () {
    return this._channel_1.get_onReceiveOrNull_5u62it_k$();
  };
  protoOf(ChannelCoroutine).get_onSend_hnoo40_k$ = function () {
    return this._channel_1.get_onSend_hnoo40_k$();
  };
  protoOf(ChannelCoroutine).close_9zy44b_k$ = function (cause) {
    return this._channel_1.close_9zy44b_k$(cause);
  };
  protoOf(ChannelCoroutine).invokeOnClose_88rhe6_k$ = function (handler) {
    this._channel_1.invokeOnClose_88rhe6_k$(handler);
  };
  protoOf(ChannelCoroutine).iterator_jk1svi_k$ = function () {
    return this._channel_1.iterator_jk1svi_k$();
  };
  protoOf(ChannelCoroutine).offer_pm4fdq_k$ = function (element) {
    return this._channel_1.offer_pm4fdq_k$(element);
  };
  protoOf(ChannelCoroutine).poll_21vi7_k$ = function () {
    return this._channel_1.poll_21vi7_k$();
  };
  protoOf(ChannelCoroutine).receive_ihhf9g_k$ = function ($completion) {
    var tmp0 = this._channel_1.receive_ihhf9g_k$($completion);
    return tmp0;
  };
  protoOf(ChannelCoroutine).receiveCatching_wrys2l_k$ = function ($completion) {
    var tmp = this._channel_1.receiveCatching_wrys2l_k$($completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    var tmp0 = new ChannelResult(tmp.holder_1);
    return tmp0;
  };
  protoOf(ChannelCoroutine).receiveOrNull_5cvr9l_k$ = function ($completion) {
    var tmp0 = this._channel_1.receiveOrNull_5cvr9l_k$($completion);
    return tmp0;
  };
  protoOf(ChannelCoroutine).send_4idxxh_k$ = function (element, $completion) {
    var tmp0 = this._channel_1.send_4idxxh_k$(element, $completion);
    return tmp0;
  };
  protoOf(ChannelCoroutine).tryReceive_5r5v2p_k$ = function () {
    return this._channel_1.tryReceive_5r5v2p_k$();
  };
  protoOf(ChannelCoroutine).trySend_3hclq4_k$ = function (element) {
    return this._channel_1.trySend_3hclq4_k$(element);
  };
  protoOf(ChannelCoroutine).get_channel_dhi7tm_k$ = function () {
    return this;
  };
  protoOf(ChannelCoroutine).cancel_2kogtl_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
    var tmp0_elvis_lhs = null;
    tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs, null, this);
    this.cancelInternal_wqrppy_k$(tmp$ret$0);
  };
  protoOf(ChannelCoroutine).cancel_as6ug7_k$ = function (cause) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
    var tmp0_elvis_lhs = null;
    tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs, null, this);
    this.cancelInternal_wqrppy_k$(tmp$ret$0);
    return true;
  };
  protoOf(ChannelCoroutine).cancel$default_do42m4_k$ = function (cause, $super) {
    return this.cancel$default_midxay_k$(cause, ($super == null ? true : $super instanceof ChannelCoroutine) ? $super : THROW_CCE());
  };
  protoOf(ChannelCoroutine).cancel_4b7aim_k$ = function (cause) {
    if (this.get_isCancelled_trk8pu_k$())
      return Unit_getInstance();
    var tmp0_elvis_lhs = cause;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs_0 = null;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs_0, null, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    this.cancelInternal_wqrppy_k$(tmp);
  };
  protoOf(ChannelCoroutine).cancel$default_l3ut5j_k$ = function (cause, $super) {
    return this.cancel$default_64jlsz_k$(cause, ($super == null ? true : $super instanceof ChannelCoroutine) ? $super : THROW_CCE());
  };
  protoOf(ChannelCoroutine).cancelInternal_wqrppy_k$ = function (cause) {
    var exception = this.toCancellationException$default_9ghy63_k$(cause);
    this._channel_1.cancel_4b7aim_k$(exception);
    this.cancelCoroutine_dy4tw5_k$(exception);
  };
  function get_DEFAULT_CLOSE_MESSAGE() {
    return DEFAULT_CLOSE_MESSAGE;
  }
  var DEFAULT_CLOSE_MESSAGE;
  function consumeEach(_this__u8e3s4, action, $completion) {
    var tmp = new $consumeEachCOROUTINE$10(_this__u8e3s4, action, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function consume(_this__u8e3s4, block) {
    // Inline function 'kotlin.contracts.contract' call
    var cause = null;
    try {
      return block(_this__u8e3s4);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cause = e;
        throw e;
      } else {
        throw $p;
      }
    }
    finally {
      cancelConsumed(_this__u8e3s4, cause);
    }
  }
  function cancelConsumed(_this__u8e3s4, cause) {
    var tmp0_safe_receiver = cause;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.cancelConsumed.<anonymous>' call
      var tmp0_elvis_lhs = tmp0_safe_receiver instanceof CancellationException ? tmp0_safe_receiver : null;
      tmp$ret$0 = tmp0_elvis_lhs == null ? CancellationException_init_$Create$_0('Channel was consumed, consumer had failed', tmp0_safe_receiver) : tmp0_elvis_lhs;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    _this__u8e3s4.cancel_4b7aim_k$(tmp);
  }
  function $consumeEachCOROUTINE$10(_this__u8e3s4, action, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.action_1 = action;
  }
  protoOf($consumeEachCOROUTINE$10).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(10);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.cause1__1 = null;
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_s9sevl_k$(9);
            this.set_exceptionState_s9sevl_k$(8);
            this.tmp0_iterator4__1 = this._this__u8e3s4__1.iterator_jk1svi_k$();
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            this.set_state_a96kl8_k$(5);
            suspendResult = this.tmp0_iterator4__1.hasNext_4tgia2_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.set_state_a96kl8_k$(6);
              continue $sm;
            }

            var e = this.tmp0_iterator4__1.next_20eer_k$();
            this.action_1(e);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 6:
            this.tmp$ret$03__1 = Unit_getInstance();
            this.set_exceptionState_s9sevl_k$(10);
            this.set_state_a96kl8_k$(7);
            var tmp_0 = this;
            continue $sm;
          case 7:
            var tmp_1 = this;
            cancelConsumed(this._this__u8e3s4__1, this.cause1__1);
            tmp_1.tmp$ret$40__1 = Unit_getInstance();
            this.set_state_a96kl8_k$(12);
            continue $sm;
          case 8:
            this.set_exceptionState_s9sevl_k$(9);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Error) {
              var e_0 = this.get_exception_x0n6w6_k$();
              var tmp_3 = this;
              this.cause1__1 = e_0;
              throw e_0;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 9:
            this.set_exceptionState_s9sevl_k$(10);
            var t = this.get_exception_x0n6w6_k$();
            cancelConsumed(this._this__u8e3s4__1, this.cause1__1);
            ;
            throw t;
          case 10:
            throw this.get_exception_x0n6w6_k$();
          case 11:
            cancelConsumed(this._this__u8e3s4__1, this.cause1__1);
            ;
            if (false) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(12);
            continue $sm;
          case 12:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 10) {
          throw e_1;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e_1);
        }
      }
     while (true);
  };
  function _get_capacity__a9k9f3_0($this) {
    return $this.capacity_2;
  }
  function _get_onBufferOverflow__4ha2pi($this) {
    return $this.onBufferOverflow_1;
  }
  function trySendImpl($this, element, isSendOp) {
    return $this.onBufferOverflow_1 === BufferOverflow_DROP_LATEST_getInstance() ? trySendDropLatest($this, element, isSendOp) : trySendDropOldest($this, element);
  }
  function trySendDropLatest($this, element, isSendOp) {
    var result = protoOf(BufferedChannel).trySend_3hclq4_k$.call($this, element);
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result) ? true : _ChannelResult___get_isClosed__impl__mg7kuu(result))
      return result;
    if (isSendOp) {
      var tmp0_safe_receiver = $this.get_onUndeliveredElement_a8l4w7_k$();
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        throw tmp1_safe_receiver;
      }
    }
    return Companion_getInstance_2().success_qotpmt_k$(Unit_getInstance());
  }
  function trySendDropOldest($this, element) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var tmp2_sendImpl = get_BUFFERED();
      var segment = _get_sendSegment__j86hsq($this).get_kotlinx$atomicfu$value_vi2am5_k$();
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = _get_sendersAndCloseStatus__3cwhts($this).atomicfu$getAndIncrement$long();
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        tmp$ret$0 = sendersAndCloseStatusCur.and_jhajnj_k$(get_SENDERS_COUNTER_MASK());
        var s = tmp$ret$0;
        var closed = _get_isClosedForSend0__kxgf9m(sendersAndCloseStatusCur, $this);
        var tmp$ret$1;
        // Inline function 'kotlin.Long.div' call
        var tmp0_div = get_SEGMENT_SIZE();
        tmp$ret$1 = s.div_9s1fi3_k$(toLong(tmp0_div));
        var id = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'kotlin.Long.rem' call
        var tmp1_rem = get_SEGMENT_SIZE();
        tmp$ret$2 = s.rem_9rbcjo_k$(toLong(tmp1_rem));
        var i = tmp$ret$2.toInt_1tsl84_k$();
        if (!segment.get_id_kntnx8_k$().equals(id)) {
          var tmp0_elvis_lhs = findSegmentSend($this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              return Companion_getInstance_2().closed_raq7mh_k$($this.get_sendException_qpq1ry_k$());
            } else {
              continue $l$loop_0;
            }
            tmp = tmp_0;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var tmp1_subject = updateCellSend($this, segment, i, element, s, tmp2_sendImpl, closed);
        if (tmp1_subject === _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8()) {
          segment.cleanPrev_rmgs7f_k$();
          return Companion_getInstance_2().success_qotpmt_k$(Unit_getInstance());
        } else if (tmp1_subject === _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m()) {
          return Companion_getInstance_2().success_qotpmt_k$(Unit_getInstance());
        } else if (tmp1_subject === _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf()) {
          if (closed) {
            segment.onSlotCleaned_dnmt5m_k$();
            return Companion_getInstance_2().closed_raq7mh_k$($this.get_sendException_qpq1ry_k$());
          }
          var tmp2_safe_receiver = isInterface(tmp2_sendImpl, Waiter) ? tmp2_sendImpl : null;
          if (tmp2_safe_receiver == null)
            null;
          else {
            prepareSenderForSuspension(tmp2_safe_receiver, $this, segment, i);
          }
          var tmp3__anonymous__ufb84q = segment;
          var tmp$ret$5;
          // Inline function 'kotlin.Long.plus' call
          var tmp$ret$4;
          // Inline function 'kotlin.Long.times' call
          var tmp0_times = tmp3__anonymous__ufb84q.get_id_kntnx8_k$();
          var tmp1_times = get_SEGMENT_SIZE();
          tmp$ret$4 = tmp0_times.times_2zfqpc_k$(toLong(tmp1_times));
          var tmp2_plus = tmp$ret$4;
          tmp$ret$5 = tmp2_plus.plus_u6jwas_k$(toLong(i));
          $this.dropFirstElementUntilTheSpecifiedCellIsInTheBuffer_v9ze1j_k$(tmp$ret$5);
          return Companion_getInstance_2().success_qotpmt_k$(Unit_getInstance());
        } else if (tmp1_subject === _get_RESULT_CLOSED_$accessor$yt74tm_10v48j()) {
          if (s.compareTo_n4fqi2_k$($this.get_receiversCounter_b035j5_k$()) < 0) {
            segment.cleanPrev_rmgs7f_k$();
          }
          return Companion_getInstance_2().closed_raq7mh_k$($this.get_sendException_qpq1ry_k$());
        } else if (tmp1_subject === _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0()) {
          segment.cleanPrev_rmgs7f_k$();
          continue $l$loop_0;
        } else if (tmp1_subject === _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m()) {
          var tmp$ret$6;
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl.<anonymous>' call
          var tmp4__anonymous__pkmkx7 = segment;
          throw IllegalStateException_init_$Create$('unexpected');
          tmp$ret$3 = tmp$ret$6;
          break $l$block;
        }
      }
    }
    return tmp$ret$3;
  }
  function ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    BufferedChannel.call(this, capacity, onUndeliveredElement);
    this.capacity_2 = capacity;
    this.onBufferOverflow_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    var tmp0_require = !(this.onBufferOverflow_1 === BufferOverflow_SUSPEND_getInstance());
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.ConflatedBufferedChannel.<anonymous>' call
      tmp$ret$0 = 'This implementation does not support suspension for senders, use ' + getKClass(BufferedChannel).get_simpleName_r6f8py_k$() + ' instead';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = this.capacity_2 >= 1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.channels.ConflatedBufferedChannel.<anonymous>' call
      tmp$ret$1 = 'Buffered channel capacity must be at least 1, but ' + this.capacity_2 + ' was specified';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(ConflatedBufferedChannel).get_isConflatedDropOldest_qp2q39_k$ = function () {
    return this.onBufferOverflow_1.equals(BufferOverflow_DROP_OLDEST_getInstance());
  };
  protoOf(ConflatedBufferedChannel).send_4idxxh_k$ = function (element, $completion) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.channels.onClosed' call
    var tmp0_onClosed = trySendImpl(this, element, true);
    // Inline function 'kotlin.contracts.contract' call
    var tmp = _ChannelResult___get_holder__impl__pm9gzw(tmp0_onClosed);
    if (tmp instanceof Closed) {
      // Inline function 'kotlinx.coroutines.channels.ConflatedBufferedChannel.send.<anonymous>' call
      var tmp1__anonymous__uwfjfc = ChannelResult__exceptionOrNull_impl_16ei30(tmp0_onClosed);
      var tmp0_safe_receiver = this.get_onUndeliveredElement_a8l4w7_k$();
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        addSuppressed(tmp1_safe_receiver, this.get_sendException_qpq1ry_k$());
        throw tmp1_safe_receiver;
      }
      throw this.get_sendException_qpq1ry_k$();
    }
    tmp$ret$1 = tmp0_onClosed;
    return Unit_getInstance();
  };
  protoOf(ConflatedBufferedChannel).sendBroadcast_k45lqc_k$ = function (element, $completion) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.onSuccess' call
    var tmp0_onSuccess = trySendImpl(this, element, true);
    // Inline function 'kotlin.contracts.contract' call
    var tmp = _ChannelResult___get_holder__impl__pm9gzw(tmp0_onSuccess);
    if (!(tmp instanceof Failed)) {
      // Inline function 'kotlinx.coroutines.channels.ConflatedBufferedChannel.sendBroadcast.<anonymous>' call
      var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw(tmp0_onSuccess);
      var tmp1__anonymous__uwfjfc = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      return true;
    }
    tmp$ret$0 = tmp0_onSuccess;
    return false;
  };
  protoOf(ConflatedBufferedChannel).trySend_3hclq4_k$ = function (element) {
    return trySendImpl(this, element, false);
  };
  protoOf(ConflatedBufferedChannel).registerSelectForSend_k87hef_k$ = function (select, element) {
    var tmp$ret$3;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.trySend_3hclq4_k$((element == null ? true : isObject(element)) ? element : THROW_CCE());
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.channels.ConflatedBufferedChannel.registerSelectForSend.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.channels.onClosed' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.onSuccess' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp = _ChannelResult___get_holder__impl__pm9gzw(tmp0_let);
    if (!(tmp instanceof Failed)) {
      // Inline function 'kotlinx.coroutines.channels.ConflatedBufferedChannel.registerSelectForSend.<anonymous>.<anonymous>' call
      var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw(tmp0_let);
      var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      select.selectInRegistrationPhase_lcwf8x_k$(Unit_getInstance());
      return Unit_getInstance();
    }
    tmp$ret$0 = tmp0_let;
    var tmp1_onClosed = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    var tmp_1 = _ChannelResult___get_holder__impl__pm9gzw(tmp1_onClosed);
    if (tmp_1 instanceof Closed) {
      // Inline function 'kotlinx.coroutines.channels.ConflatedBufferedChannel.registerSelectForSend.<anonymous>.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = ChannelResult__exceptionOrNull_impl_16ei30(tmp1_onClosed);
      select.selectInRegistrationPhase_lcwf8x_k$(get_CHANNEL_CLOSED());
      return Unit_getInstance();
    }
    tmp$ret$1 = tmp1_onClosed;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('unreachable');
  };
  protoOf(ConflatedBufferedChannel).shouldSendSuspend_te8nq7_k$ = function () {
    return false;
  };
  function ProducerScope() {
  }
  function produce(_this__u8e3s4, context, capacity, onBufferOverflow, start, onCompletion, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    onCompletion = onCompletion === VOID ? null : onCompletion;
    var channel = Channel_0(capacity, onBufferOverflow);
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = new ProducerCoroutine(newContext, channel);
    if (!(onCompletion == null)) {
      coroutine.invokeOnCompletion_t2apld_k$(onCompletion);
    }
    coroutine.start_eui3tp_k$(start, coroutine, block);
    return coroutine;
  }
  function ProducerCoroutine(parentContext, channel) {
    ChannelCoroutine.call(this, parentContext, channel, true, true);
  }
  protoOf(ProducerCoroutine).get_isActive_quafmh_k$ = function () {
    return protoOf(ChannelCoroutine).get_isActive_quafmh_k$.call(this);
  };
  protoOf(ProducerCoroutine).onCompleted_pxpqwj_k$ = function (value) {
    this.get__channel_jf1gul_k$().close$default_4vjk8d_k$();
  };
  protoOf(ProducerCoroutine).onCompleted_wmtzyo_k$ = function (value) {
    return this.onCompleted_pxpqwj_k$(value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(ProducerCoroutine).onCancelled_oqqex5_k$ = function (cause, handled) {
    var processed = this.get__channel_jf1gul_k$().close_9zy44b_k$(cause);
    if (!processed ? !handled : false) {
      handleCoroutineException(this.get_context_h02k06_k$(), cause);
    }
  };
  protoOf(ProducerCoroutine).cancel$default_do42m4_k$ = function (cause, $super) {
    return this.cancel$default_midxay_k$(cause, ($super == null ? true : $super instanceof ProducerCoroutine) ? $super : THROW_CCE());
  };
  protoOf(ProducerCoroutine).cancel$default_l3ut5j_k$ = function (cause, $super) {
    return this.cancel$default_64jlsz_k$(cause, ($super == null ? true : $super instanceof ProducerCoroutine) ? $super : THROW_CCE());
  };
  function flow(block) {
    return new SafeFlow(block);
  }
  function emptyFlow() {
    return EmptyFlow_getInstance();
  }
  function _get_block__jewopo($this) {
    return $this.block_1;
  }
  function SafeFlow(block) {
    AbstractFlow.call(this);
    this.block_1 = block;
  }
  protoOf(SafeFlow).collectSafely_b70wvn_k$ = function (collector, $completion) {
    var tmp0 = this.block_1(collector, $completion);
    return tmp0;
  };
  function EmptyFlow() {
    EmptyFlow_instance = this;
  }
  protoOf(EmptyFlow).collect_j6umol_k$ = function (collector, $completion) {
    return Unit_getInstance();
  };
  protoOf(EmptyFlow).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_j6umol_k$(collector, $completion);
  };
  var EmptyFlow_instance;
  function EmptyFlow_getInstance() {
    if (EmptyFlow_instance == null)
      new EmptyFlow();
    return EmptyFlow_instance;
  }
  function emitAll(_this__u8e3s4, channel, $completion) {
    var tmp0 = emitAllImpl(_this__u8e3s4, channel, true, $completion);
    return tmp0;
  }
  function emitAllImpl(_this__u8e3s4, channel, consume, $completion) {
    var tmp = new $emitAllImplCOROUTINE$11(_this__u8e3s4, channel, consume, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $emitAllImplCOROUTINE$11(_this__u8e3s4, channel, consume, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.channel_1 = channel;
    this.consume_1 = consume;
  }
  protoOf($emitAllImplCOROUTINE$11).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(9);
            ensureActive_1(this._this__u8e3s4__1);
            this.cause0__1 = null;
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(7);
            this.set_exceptionState_s9sevl_k$(6);
            this.tmp0_iterator2__1 = this.channel_1.iterator_jk1svi_k$();
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            this.set_state_a96kl8_k$(3);
            suspendResult = this.tmp0_iterator2__1.hasNext_4tgia2_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            if (!suspendResult) {
              this.set_state_a96kl8_k$(5);
              continue $sm;
            }

            this.element3__1 = this.tmp0_iterator2__1.next_20eer_k$();
            this.set_state_a96kl8_k$(4);
            suspendResult = this._this__u8e3s4__1.emit_1fbrsb_k$(this.element3__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 5:
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_s9sevl_k$(9);
            this.set_state_a96kl8_k$(8);
            continue $sm;
          case 6:
            this.set_exceptionState_s9sevl_k$(7);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Error) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_1 = this;
              this.cause0__1 = e;
              throw e;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 7:
            this.set_exceptionState_s9sevl_k$(9);
            var t = this.get_exception_x0n6w6_k$();
            if (this.consume_1) {
              cancelConsumed(this.channel_1, this.cause0__1);
            }

            throw t;
          case 8:
            if (this.consume_1) {
              cancelConsumed(this.channel_1, this.cause0__1);
            }

            return Unit_getInstance();
          case 9:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 9) {
          throw e_0;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e_0);
        }
      }
     while (true);
  };
  function Flow() {
  }
  function $collectCOROUTINE$0(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(5);
            var tmp_0 = this;
            tmp_0.safeCollector0__1 = new SafeCollector(this.collector_1, this.get_context_h02k06_k$());
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(4);
            this.set_state_a96kl8_k$(2);
            suspendResult = this._this__u8e3s4__1.collectSafely_b70wvn_k$(this.safeCollector0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tmp$ret$01__1 = suspendResult;
            this.set_exceptionState_s9sevl_k$(5);
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            this.safeCollector0__1.releaseIntercepted_5cexvt_k$();
            ;
            return Unit_getInstance();
          case 4:
            this.set_exceptionState_s9sevl_k$(5);
            var t = this.get_exception_x0n6w6_k$();
            this.safeCollector0__1.releaseIntercepted_5cexvt_k$();
            ;
            throw t;
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
  function AbstractFlow() {
  }
  protoOf(AbstractFlow).collect_llpwvh_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$0(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function FlowCollector() {
  }
  function get_NO_VALUE() {
    _init_properties_SharedFlow_kt__umasnn();
    return NO_VALUE;
  }
  var NO_VALUE;
  function MutableSharedFlow() {
  }
  function SharedFlow() {
  }
  function fuseSharedFlow(_this__u8e3s4, context, capacity, onBufferOverflow) {
    _init_properties_SharedFlow_kt__umasnn();
    if ((capacity === Factory_getInstance().get_RENDEZVOUS_7qhqgu_k$() ? true : capacity === Factory_getInstance().get_OPTIONAL_CHANNEL_c6wrw3_k$()) ? onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) : false) {
      return _this__u8e3s4;
    }
    return new ChannelFlowOperatorImpl(_this__u8e3s4, context, capacity, onBufferOverflow);
  }
  function _get_replay__f4ufwc($this) {
    return $this.replay_1;
  }
  function _get_bufferCapacity__1egje9($this) {
    return $this.bufferCapacity_1;
  }
  function _get_onBufferOverflow__4ha2pi_0($this) {
    return $this.onBufferOverflow_1;
  }
  function _set_buffer__uxh4x5($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad($this) {
    return $this.buffer_1;
  }
  function _set_replayIndex__ufyvqy($this, _set____db54di) {
    $this.replayIndex_1 = _set____db54di;
  }
  function _get_replayIndex__aaqzwa($this) {
    return $this.replayIndex_1;
  }
  function _set_minCollectorIndex__ukunhq($this, _set____db54di) {
    $this.minCollectorIndex_1 = _set____db54di;
  }
  function _get_minCollectorIndex__8v1r7e($this) {
    return $this.minCollectorIndex_1;
  }
  function _set_bufferSize__x9ue96($this, _set____db54di) {
    $this.bufferSize_1 = _set____db54di;
  }
  function _get_bufferSize__mp12kq($this) {
    return $this.bufferSize_1;
  }
  function _set_queueSize__jc2i7h($this, _set____db54di) {
    $this.queueSize_1 = _set____db54di;
  }
  function _get_queueSize__9yry73($this) {
    return $this.queueSize_1;
  }
  function _get_head__d7jo8b($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp0_minOf = $this.minCollectorIndex_1;
    var tmp1_minOf = $this.replayIndex_1;
    tmp$ret$0 = tmp0_minOf.compareTo_n4fqi2_k$(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf;
    return tmp$ret$0;
  }
  function _get_replaySize__dxgnb1($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    var tmp1_plus = $this.bufferSize_1;
    tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(toLong(tmp1_plus));
    return tmp$ret$0.minus_llf5ei_k$($this.replayIndex_1).toInt_1tsl84_k$();
  }
  function _get_totalSize__xhdb3o($this) {
    return $this.bufferSize_1 + $this.queueSize_1 | 0;
  }
  function _get_bufferEndIndex__d2rk18($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    var tmp1_plus = $this.bufferSize_1;
    tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(toLong(tmp1_plus));
    return tmp$ret$0;
  }
  function _get_queueEndIndex__4m025l($this) {
    var tmp$ret$1;
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    var tmp1_plus = $this.bufferSize_1;
    tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(toLong(tmp1_plus));
    var tmp2_plus = tmp$ret$0;
    var tmp3_plus = $this.queueSize_1;
    tmp$ret$1 = tmp2_plus.plus_u6jwas_k$(toLong(tmp3_plus));
    return tmp$ret$1;
  }
  function tryEmitLocked($this, value) {
    if ($this.get_nCollectors_gh2yp7_k$() === 0)
      return tryEmitNoCollectorsLocked($this, value);
    if ($this.bufferSize_1 >= $this.bufferCapacity_1 ? $this.minCollectorIndex_1.compareTo_n4fqi2_k$($this.replayIndex_1) <= 0 : false) {
      var tmp0_subject = $this.onBufferOverflow_1;
      var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
      switch (tmp0) {
        case 0:
          return false;
        case 2:
          return true;
        case 1:
          break;
      }
    }
    enqueueLocked($this, value);
    var tmp1_this = $this;
    var tmp2 = tmp1_this.bufferSize_1;
    tmp1_this.bufferSize_1 = tmp2 + 1 | 0;
    if ($this.bufferSize_1 > $this.bufferCapacity_1) {
      dropOldestLocked($this);
    }
    if (_get_replaySize__dxgnb1($this) > $this.replay_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.plus' call
      var tmp0_plus = $this.replayIndex_1;
      tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(new Long(1, 0));
      updateBufferLocked($this, tmp$ret$0, $this.minCollectorIndex_1, _get_bufferEndIndex__d2rk18($this), _get_queueEndIndex__4m025l($this));
    }
    return true;
  }
  function tryEmitNoCollectorsLocked($this, value) {
    // Inline function 'kotlinx.coroutines.assert' call
    if ($this.replay_1 === 0)
      return true;
    enqueueLocked($this, value);
    var tmp0_this = $this;
    var tmp1 = tmp0_this.bufferSize_1;
    tmp0_this.bufferSize_1 = tmp1 + 1 | 0;
    if ($this.bufferSize_1 > $this.replay_1) {
      dropOldestLocked($this);
    }
    var tmp = $this;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    var tmp1_plus = $this.bufferSize_1;
    tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(toLong(tmp1_plus));
    tmp.minCollectorIndex_1 = tmp$ret$0;
    return true;
  }
  function dropOldestLocked($this) {
    setBufferAt(ensureNotNull($this.buffer_1), _get_head__d7jo8b($this), null);
    var tmp0_this = $this;
    var tmp1 = tmp0_this.bufferSize_1;
    tmp0_this.bufferSize_1 = tmp1 - 1 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(new Long(1, 0));
    var newHead = tmp$ret$0;
    if ($this.replayIndex_1.compareTo_n4fqi2_k$(newHead) < 0)
      $this.replayIndex_1 = newHead;
    if ($this.minCollectorIndex_1.compareTo_n4fqi2_k$(newHead) < 0) {
      correctCollectorIndexesOnDropOldest($this, newHead);
    }
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function correctCollectorIndexesOnDropOldest($this, newHead) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.get_nCollectors_gh2yp7_k$() === 0) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var tmp0_safe_receiver = $this.get_slots_iyl3po_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.correctCollectorIndexesOnDropOldest.<anonymous>' call
            if (element.index_1.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0 ? element.index_1.compareTo_n4fqi2_k$(newHead) < 0 : false) {
              element.index_1 = newHead;
            }
          }
        }
      }
    }
    $this.minCollectorIndex_1 = newHead;
  }
  function enqueueLocked($this, item) {
    var curSize = _get_totalSize__xhdb3o($this);
    var curBuffer = $this.buffer_1;
    var buffer = curBuffer == null ? growBuffer($this, null, 0, 2) : curSize >= curBuffer.length ? growBuffer($this, curBuffer, curSize, imul(curBuffer.length, 2)) : curBuffer;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(toLong(curSize));
    setBufferAt(buffer, tmp$ret$0, item);
  }
  function growBuffer($this, curBuffer, curSize, newSize) {
    // Inline function 'kotlin.check' call
    var tmp0_check = newSize > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.growBuffer.<anonymous>' call
      tmp$ret$0 = 'Buffer size overflow';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp$ret$1;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$1 = fillArrayVal(Array(newSize), null);
    var tmp1_also = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.growBuffer.<anonymous>' call
    $this.buffer_1 = tmp1_also;
    tmp$ret$2 = tmp1_also;
    var newBuffer = tmp$ret$2;
    if (curBuffer == null)
      return newBuffer;
    var head = _get_head__d7jo8b($this);
    var inductionVariable = 0;
    if (inductionVariable < curSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$3;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$3 = head.plus_u6jwas_k$(toLong(i));
        var tmp = tmp$ret$3;
        var tmp$ret$4;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$4 = head.plus_u6jwas_k$(toLong(i));
        setBufferAt(newBuffer, tmp, getBufferAt(curBuffer, tmp$ret$4));
      }
       while (inductionVariable < curSize);
    return newBuffer;
  }
  function emitSuspend($this, value, $completion) {
    var tmp$ret$10;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.initCancellability_sh6jkn_k$();
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>' call
    var resumes = get_EMPTY_RESUMES();
    var tmp$ret$6;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$5;
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>.<anonymous>' call
      if (tryEmitLocked($this, value)) {
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cancellable.resumeWith_s3a3yh_k$(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
        resumes = findSlotsToResumeLocked($this, resumes);
        tmp$ret$2 = null;
        break $l$block;
      }
      var tmp$ret$4;
      // Inline function 'kotlin.also' call
      var tmp$ret$3;
      // Inline function 'kotlin.Long.plus' call
      var tmp1_plus = _get_head__d7jo8b($this);
      var tmp2_plus = _get_totalSize__xhdb3o($this);
      tmp$ret$3 = tmp1_plus.plus_u6jwas_k$(toLong(tmp2_plus));
      var tmp3_also = new Emitter($this, tmp$ret$3, value, cancellable);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>.<anonymous>.<anonymous>' call
      enqueueLocked($this, tmp3_also);
      var tmp0_this = $this;
      var tmp1 = tmp0_this.queueSize_1;
      tmp0_this.queueSize_1 = tmp1 + 1 | 0;
      if ($this.bufferCapacity_1 === 0)
        resumes = findSlotsToResumeLocked($this, resumes);
      tmp$ret$4 = tmp3_also;
      tmp$ret$2 = tmp$ret$4;
    }
    tmp$ret$5 = tmp$ret$2;
    tmp$ret$6 = tmp$ret$5;
    var emitter = tmp$ret$6;
    var tmp0_safe_receiver = emitter;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      disposeOnCancellation(cancellable, tmp0_safe_receiver);
      tmp$ret$7 = Unit_getInstance();
    }
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var r = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp2_safe_receiver = r;
      if (tmp2_safe_receiver == null)
        null;
      else {
        var tmp$ret$9;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$8;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success_0 = Companion_getInstance();
        tmp$ret$8 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp2_safe_receiver.resumeWith_s3a3yh_k$(tmp$ret$8);
        tmp$ret$9 = Unit_getInstance();
      }
    }
    tmp$ret$10 = cancellable.getResult_clfhg3_k$();
    var tmp0 = tmp$ret$10;
    return tmp0;
  }
  function cancelEmitter($this, emitter) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (emitter.index_1.compareTo_n4fqi2_k$(_get_head__d7jo8b($this)) < 0)
      return Unit_getInstance();
    var buffer = ensureNotNull($this.buffer_1);
    if (!(getBufferAt(buffer, emitter.index_1) === emitter))
      return Unit_getInstance();
    setBufferAt(buffer, emitter.index_1, get_NO_VALUE());
    cleanupTailLocked($this);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function updateBufferLocked($this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    tmp$ret$0 = newMinCollectorIndex.compareTo_n4fqi2_k$(newReplayIndex) <= 0 ? newMinCollectorIndex : newReplayIndex;
    var newHead = tmp$ret$0;
    // Inline function 'kotlinx.coroutines.assert' call
    var inductionVariable = _get_head__d7jo8b($this);
    if (inductionVariable.compareTo_n4fqi2_k$(newHead) < 0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable.plus_u6jwas_k$(new Long(1, 0));
        setBufferAt(ensureNotNull($this.buffer_1), index, null);
      }
       while (inductionVariable.compareTo_n4fqi2_k$(newHead) < 0);
    $this.replayIndex_1 = newReplayIndex;
    $this.minCollectorIndex_1 = newMinCollectorIndex;
    $this.bufferSize_1 = newBufferEndIndex.minus_llf5ei_k$(newHead).toInt_1tsl84_k$();
    $this.queueSize_1 = newQueueEndIndex.minus_llf5ei_k$(newBufferEndIndex).toInt_1tsl84_k$();
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function cleanupTailLocked($this) {
    if ($this.bufferCapacity_1 === 0 ? $this.queueSize_1 <= 1 : false)
      return Unit_getInstance();
    var buffer = ensureNotNull($this.buffer_1);
    $l$loop: while (true) {
      var tmp;
      if ($this.queueSize_1 > 0) {
        var tmp$ret$1;
        // Inline function 'kotlin.Long.minus' call
        var tmp$ret$0;
        // Inline function 'kotlin.Long.plus' call
        var tmp0_plus = _get_head__d7jo8b($this);
        var tmp1_plus = _get_totalSize__xhdb3o($this);
        tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(toLong(tmp1_plus));
        var tmp2_minus = tmp$ret$0;
        tmp$ret$1 = tmp2_minus.minus_llf5ei_k$(new Long(1, 0));
        tmp = getBufferAt(buffer, tmp$ret$1) === get_NO_VALUE();
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      var tmp0_this = $this;
      var tmp1 = tmp0_this.queueSize_1;
      tmp0_this.queueSize_1 = tmp1 - 1 | 0;
      var tmp$ret$2;
      // Inline function 'kotlin.Long.plus' call
      var tmp3_plus = _get_head__d7jo8b($this);
      var tmp4_plus = _get_totalSize__xhdb3o($this);
      tmp$ret$2 = tmp3_plus.plus_u6jwas_k$(toLong(tmp4_plus));
      setBufferAt(buffer, tmp$ret$2, null);
    }
  }
  function tryTakeValue($this, slot) {
    var resumes = get_EMPTY_RESUMES();
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.tryTakeValue.<anonymous>' call
    var index = tryPeekLocked($this, slot);
    var tmp;
    if (index.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
      tmp = get_NO_VALUE();
    } else {
      var oldIndex = slot.index_1;
      var newValue = getPeekedValueLockedAt($this, index);
      var tmp_0 = slot;
      var tmp$ret$0;
      // Inline function 'kotlin.Long.plus' call
      tmp$ret$0 = index.plus_u6jwas_k$(new Long(1, 0));
      tmp_0.index_1 = tmp$ret$0;
      resumes = $this.updateCollectorIndexLocked_lspmte_k$(oldIndex);
      tmp = newValue;
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var value = tmp$ret$3;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var resume = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_safe_receiver = resume;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$5;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$4;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp1_safe_receiver.resumeWith_s3a3yh_k$(tmp$ret$4);
        tmp$ret$5 = Unit_getInstance();
      }
    }
    return value;
  }
  function tryPeekLocked($this, slot) {
    var index = slot.index_1;
    if (index.compareTo_n4fqi2_k$(_get_bufferEndIndex__d2rk18($this)) < 0)
      return index;
    if ($this.bufferCapacity_1 > 0)
      return new Long(-1, -1);
    if (index.compareTo_n4fqi2_k$(_get_head__d7jo8b($this)) > 0)
      return new Long(-1, -1);
    if ($this.queueSize_1 === 0)
      return new Long(-1, -1);
    return index;
  }
  function getPeekedValueLockedAt($this, index) {
    var item = getBufferAt(ensureNotNull($this.buffer_1), index);
    var tmp;
    if (item instanceof Emitter) {
      tmp = item.value_1;
    } else {
      tmp = item;
    }
    return tmp;
  }
  function awaitValue($this, slot, $completion) {
    var tmp$ret$5;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.initCancellability_sh6jkn_k$();
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.awaitValue.<anonymous>' call
    var tmp$ret$4;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.awaitValue.<anonymous>.<anonymous>' call
      var index = tryPeekLocked($this, slot);
      if (index.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
        slot.cont_1 = cancellable;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cancellable.resumeWith_s3a3yh_k$(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
        tmp$ret$2 = Unit_getInstance();
        break $l$block;
      }
      slot.cont_1 = cancellable;
    }
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = cancellable.getResult_clfhg3_k$();
    var tmp0 = tmp$ret$5;
    return tmp0;
  }
  function findSlotsToResumeLocked($this, resumesIn) {
    var resumes = resumesIn;
    var resumeCount = resumesIn.length;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.get_nCollectors_gh2yp7_k$() === 0) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var tmp0_safe_receiver = $this.get_slots_iyl3po_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            var tmp$ret$1;
            $l$block_1: {
              // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.findSlotsToResumeLocked.<anonymous>' call
              var tmp0_elvis_lhs = element.cont_1;
              var tmp;
              if (tmp0_elvis_lhs == null) {
                tmp$ret$1 = Unit_getInstance();
                break $l$block_1;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              var cont = tmp;
              if (tryPeekLocked($this, element).compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
                tmp$ret$1 = Unit_getInstance();
                break $l$block_1;
              }
              if (resumeCount >= resumes.length) {
                var tmp_0 = resumes;
                var tmp$ret$2;
                // Inline function 'kotlin.comparisons.maxOf' call
                var tmp0_maxOf = imul(2, resumes.length);
                tmp$ret$2 = Math.max(2, tmp0_maxOf);
                resumes = copyOf(tmp_0, tmp$ret$2);
              }
              var tmp_1 = resumes;
              var tmp1 = resumeCount;
              resumeCount = tmp1 + 1 | 0;
              tmp_1[tmp1] = cont;
              element.cont_1 = null;
            }
          }
        }
      }
    }
    return resumes;
  }
  function Emitter(flow, index, value, cont) {
    this.flow_1 = flow;
    this.index_1 = index;
    this.value_1 = value;
    this.cont_1 = cont;
  }
  protoOf(Emitter).get_flow_wom2yf_k$ = function () {
    return this.flow_1;
  };
  protoOf(Emitter).set_index_e0930u_k$ = function (_set____db54di) {
    this.index_1 = _set____db54di;
  };
  protoOf(Emitter).get_index_it478p_k$ = function () {
    return this.index_1;
  };
  protoOf(Emitter).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Emitter).get_cont_wok86z_k$ = function () {
    return this.cont_1;
  };
  protoOf(Emitter).dispose_3n44we_k$ = function () {
    return cancelEmitter(this.flow_1, this);
  };
  function $collectCOROUTINE$12(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$12).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(13);
            this.slot0__1 = this._this__u8e3s4__1.allocateSlot_67zie3_k$();
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(12);
            var tmp_0 = this.collector_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.set_state_a96kl8_k$(2);
              suspendResult = this.collector_1.onSubscription_igsb49_k$(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

            break;
          case 2:
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.collectorJob2__1 = this.get_context_h02k06_k$().get_j1ktw6_k$(Key_getInstance_3());
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            if (false) {
              this.set_state_a96kl8_k$(10);
              continue $sm;
            }

            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 5:
            if (false) {
              this.set_state_a96kl8_k$(8);
              continue $sm;
            }

            this.newValue3__1 = tryTakeValue(this._this__u8e3s4__1, this.slot0__1);
            if (!(this.newValue3__1 === get_NO_VALUE())) {
              this.set_state_a96kl8_k$(8);
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(6);
              continue $sm;
            }

            break;
          case 6:
            this.set_state_a96kl8_k$(7);
            suspendResult = awaitValue(this._this__u8e3s4__1, this.slot0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 8:
            var tmp0_safe_receiver = this.collectorJob2__1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            ;
            this.set_state_a96kl8_k$(9);
            var tmp_2 = this.newValue3__1;
            suspendResult = this.collector_1.emit_1fbrsb_k$((tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 10:
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_s9sevl_k$(13);
            this.set_state_a96kl8_k$(11);
            continue $sm;
          case 11:
            this._this__u8e3s4__1.freeSlot_w9jsdv_k$(this.slot0__1);
            ;
            return Unit_getInstance();
          case 12:
            this.set_exceptionState_s9sevl_k$(13);
            var t = this.get_exception_x0n6w6_k$();
            this._this__u8e3s4__1.freeSlot_w9jsdv_k$(this.slot0__1);
            ;
            throw t;
          case 13:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 13) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function SharedFlowImpl(replay, bufferCapacity, onBufferOverflow) {
    AbstractSharedFlow.call(this);
    this.replay_1 = replay;
    this.bufferCapacity_1 = bufferCapacity;
    this.onBufferOverflow_1 = onBufferOverflow;
    this.buffer_1 = null;
    this.replayIndex_1 = new Long(0, 0);
    this.minCollectorIndex_1 = new Long(0, 0);
    this.bufferSize_1 = 0;
    this.queueSize_1 = 0;
  }
  protoOf(SharedFlowImpl).get_replayCache_uwub8y_k$ = function () {
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.<get-replayCache>.<anonymous>' call
    var replaySize = _get_replaySize__dxgnb1(this);
    if (replaySize === 0)
      return emptyList();
    var result = ArrayList_init_$Create$(replaySize);
    var buffer = ensureNotNull(this.buffer_1);
    var inductionVariable = 0;
    if (inductionVariable < replaySize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$0;
        // Inline function 'kotlin.Long.plus' call
        var tmp0_plus = this.replayIndex_1;
        tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(toLong(i));
        var tmp = getBufferAt(buffer, tmp$ret$0);
        var tmp1_plusAssign = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
        result.add_1j60pz_k$(tmp1_plusAssign);
      }
       while (inductionVariable < replaySize);
    tmp$ret$1 = result;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  protoOf(SharedFlowImpl).get_lastReplayedLocked_pnaey7_k$ = function () {
    var tmp = ensureNotNull(this.buffer_1);
    var tmp$ret$1;
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = this.replayIndex_1;
    var tmp1_plus = _get_replaySize__dxgnb1(this);
    tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(toLong(tmp1_plus));
    var tmp2_minus = tmp$ret$0;
    tmp$ret$1 = tmp2_minus.minus_llf5ei_k$(new Long(1, 0));
    var tmp_0 = getBufferAt(tmp, tmp$ret$1);
    return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
  };
  protoOf(SharedFlowImpl).collect_4rdebi_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$12(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SharedFlowImpl).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_4rdebi_k$(collector, $completion);
  };
  protoOf(SharedFlowImpl).tryEmit_4zef7h_k$ = function (value) {
    var resumes = get_EMPTY_RESUMES();
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.tryEmit.<anonymous>' call
    var tmp;
    if (tryEmitLocked(this, value)) {
      resumes = findSlotsToResumeLocked(this, resumes);
      tmp = true;
    } else {
      tmp = false;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var emitted = tmp$ret$2;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var cont = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_safe_receiver = cont;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$3;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp1_safe_receiver.resumeWith_s3a3yh_k$(tmp$ret$3);
        tmp$ret$4 = Unit_getInstance();
      }
    }
    return emitted;
  };
  protoOf(SharedFlowImpl).emit_1fbrsb_k$ = function (value, $completion) {
    if (this.tryEmit_4zef7h_k$(value))
      return Unit_getInstance();
    var tmp0 = emitSuspend(this, value, $completion);
    return tmp0;
  };
  protoOf(SharedFlowImpl).updateNewCollectorIndexLocked_xl3tlm_k$ = function () {
    var index = this.replayIndex_1;
    if (index.compareTo_n4fqi2_k$(this.minCollectorIndex_1) < 0)
      this.minCollectorIndex_1 = index;
    return index;
  };
  protoOf(SharedFlowImpl).updateCollectorIndexLocked_lspmte_k$ = function (oldIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (oldIndex.compareTo_n4fqi2_k$(this.minCollectorIndex_1) > 0)
      return get_EMPTY_RESUMES();
    var head = _get_head__d7jo8b(this);
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = this.bufferSize_1;
    tmp$ret$0 = head.plus_u6jwas_k$(toLong(tmp0_plus));
    var newMinCollectorIndex = tmp$ret$0;
    if (this.bufferCapacity_1 === 0 ? this.queueSize_1 > 0 : false) {
      var tmp0 = newMinCollectorIndex;
      newMinCollectorIndex = tmp0.inc_28ke_k$();
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if (this.get_nCollectors_gh2yp7_k$() === 0) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      }
      var tmp0_safe_receiver = this.get_slots_iyl3po_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.updateCollectorIndexLocked.<anonymous>' call
            if (element.index_1.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0 ? element.index_1.compareTo_n4fqi2_k$(newMinCollectorIndex) < 0 : false)
              newMinCollectorIndex = element.index_1;
          }
        }
      }
    }
    // Inline function 'kotlinx.coroutines.assert' call
    if (newMinCollectorIndex.compareTo_n4fqi2_k$(this.minCollectorIndex_1) <= 0)
      return get_EMPTY_RESUMES();
    var newBufferEndIndex = _get_bufferEndIndex__d2rk18(this);
    var tmp;
    if (this.get_nCollectors_gh2yp7_k$() > 0) {
      var newBufferSize0 = newBufferEndIndex.minus_llf5ei_k$(newMinCollectorIndex).toInt_1tsl84_k$();
      var tmp$ret$2;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp1_minOf = this.queueSize_1;
      var tmp2_minOf = this.bufferCapacity_1 - newBufferSize0 | 0;
      tmp$ret$2 = Math.min(tmp1_minOf, tmp2_minOf);
      tmp = tmp$ret$2;
    } else {
      tmp = this.queueSize_1;
    }
    var maxResumeCount = tmp;
    var resumes = get_EMPTY_RESUMES();
    var tmp$ret$3;
    // Inline function 'kotlin.Long.plus' call
    var tmp3_plus = newBufferEndIndex;
    var tmp4_plus = this.queueSize_1;
    tmp$ret$3 = tmp3_plus.plus_u6jwas_k$(toLong(tmp4_plus));
    var newQueueEndIndex = tmp$ret$3;
    if (maxResumeCount > 0) {
      var tmp$ret$4;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$4 = fillArrayVal(Array(maxResumeCount), null);
      resumes = tmp$ret$4;
      var resumeCount = 0;
      var buffer = ensureNotNull(this.buffer_1);
      var inductionVariable = newBufferEndIndex;
      if (inductionVariable.compareTo_n4fqi2_k$(newQueueEndIndex) < 0)
        $l$loop: do {
          var curEmitterIndex = inductionVariable;
          inductionVariable = inductionVariable.plus_u6jwas_k$(new Long(1, 0));
          var emitter = getBufferAt(buffer, curEmitterIndex);
          if (!(emitter === get_NO_VALUE())) {
            if (emitter instanceof Emitter)
              emitter;
            else
              THROW_CCE();
            var tmp_0 = resumes;
            var tmp2 = resumeCount;
            resumeCount = tmp2 + 1 | 0;
            tmp_0[tmp2] = emitter.cont_1;
            setBufferAt(buffer, curEmitterIndex, get_NO_VALUE());
            setBufferAt(buffer, newBufferEndIndex, emitter.value_1);
            var tmp3 = newBufferEndIndex;
            newBufferEndIndex = tmp3.inc_28ke_k$();
            if (resumeCount >= maxResumeCount)
              break $l$loop;
          }
        }
         while (inductionVariable.compareTo_n4fqi2_k$(newQueueEndIndex) < 0);
    }
    var newBufferSize1 = newBufferEndIndex.minus_llf5ei_k$(head).toInt_1tsl84_k$();
    if (this.get_nCollectors_gh2yp7_k$() === 0)
      newMinCollectorIndex = newBufferEndIndex;
    var tmp$ret$7;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp8_maxOf = this.replayIndex_1;
    var tmp$ret$6;
    // Inline function 'kotlin.Long.minus' call
    var tmp6_minus = newBufferEndIndex;
    var tmp$ret$5;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp5_minOf = this.replay_1;
    tmp$ret$5 = Math.min(tmp5_minOf, newBufferSize1);
    var tmp7_minus = tmp$ret$5;
    tmp$ret$6 = tmp6_minus.minus_llf5ei_k$(toLong(tmp7_minus));
    var tmp9_maxOf = tmp$ret$6;
    tmp$ret$7 = tmp8_maxOf.compareTo_n4fqi2_k$(tmp9_maxOf) >= 0 ? tmp8_maxOf : tmp9_maxOf;
    var newReplayIndex = tmp$ret$7;
    if ((this.bufferCapacity_1 === 0 ? newReplayIndex.compareTo_n4fqi2_k$(newQueueEndIndex) < 0 : false) ? equals(getBufferAt(ensureNotNull(this.buffer_1), newReplayIndex), get_NO_VALUE()) : false) {
      var tmp4 = newBufferEndIndex;
      newBufferEndIndex = tmp4.inc_28ke_k$();
      var tmp5 = newReplayIndex;
      newReplayIndex = tmp5.inc_28ke_k$();
    }
    updateBufferLocked(this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex);
    cleanupTailLocked(this);
    var tmp$ret$9;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp10_isNotEmpty = resumes;
    var tmp$ret$8;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$8 = tmp10_isNotEmpty.length === 0;
    tmp$ret$9 = !tmp$ret$8;
    if (tmp$ret$9)
      resumes = findSlotsToResumeLocked(this, resumes);
    return resumes;
  };
  protoOf(SharedFlowImpl).createSlot_mn6f4q_k$ = function () {
    return new SharedFlowSlot();
  };
  protoOf(SharedFlowImpl).createSlotArray_n47sjm_k$ = function (size) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(size), null);
    return tmp$ret$0;
  };
  protoOf(SharedFlowImpl).resetReplayCache_tzw4vv_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    updateBufferLocked(this, _get_bufferEndIndex__d2rk18(this), this.minCollectorIndex_1, _get_bufferEndIndex__d2rk18(this), _get_queueEndIndex__4m025l(this));
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(SharedFlowImpl).fuse_pocnsz_k$ = function (context, capacity, onBufferOverflow) {
    return fuseSharedFlow(this, context, capacity, onBufferOverflow);
  };
  function SharedFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.index_1 = new Long(-1, -1);
    this.cont_1 = null;
  }
  protoOf(SharedFlowSlot).set_index_e0930u_k$ = function (_set____db54di) {
    this.index_1 = _set____db54di;
  };
  protoOf(SharedFlowSlot).get_index_it478p_k$ = function () {
    return this.index_1;
  };
  protoOf(SharedFlowSlot).set_cont_hmvecm_k$ = function (_set____db54di) {
    this.cont_1 = _set____db54di;
  };
  protoOf(SharedFlowSlot).get_cont_wok86z_k$ = function () {
    return this.cont_1;
  };
  protoOf(SharedFlowSlot).allocateLocked_qtt5lr_k$ = function (flow) {
    if (this.index_1.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0)
      return false;
    this.index_1 = flow.updateNewCollectorIndexLocked_xl3tlm_k$();
    return true;
  };
  protoOf(SharedFlowSlot).allocateLocked_8qz7hq_k$ = function (flow) {
    return this.allocateLocked_qtt5lr_k$(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  protoOf(SharedFlowSlot).freeLocked_o4dpjk_k$ = function (flow) {
    // Inline function 'kotlinx.coroutines.assert' call
    var oldIndex = this.index_1;
    this.index_1 = new Long(-1, -1);
    this.cont_1 = null;
    return flow.updateCollectorIndexLocked_lspmte_k$(oldIndex);
  };
  protoOf(SharedFlowSlot).freeLocked_l0ao83_k$ = function (flow) {
    return this.freeLocked_o4dpjk_k$(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  function getBufferAt(_this__u8e3s4, index) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[index.toInt_1tsl84_k$() & (_this__u8e3s4.length - 1 | 0)];
  }
  function setBufferAt(_this__u8e3s4, index, item) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[index.toInt_1tsl84_k$() & (_this__u8e3s4.length - 1 | 0)] = item;
  }
  function MutableSharedFlow_0(replay, extraBufferCapacity, onBufferOverflow) {
    replay = replay === VOID ? 0 : replay;
    extraBufferCapacity = extraBufferCapacity === VOID ? 0 : extraBufferCapacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    _init_properties_SharedFlow_kt__umasnn();
    // Inline function 'kotlin.require' call
    var tmp0_require = replay >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      tmp$ret$0 = 'replay cannot be negative, but was ' + replay;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = extraBufferCapacity >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      tmp$ret$1 = 'extraBufferCapacity cannot be negative, but was ' + extraBufferCapacity;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    var tmp2_require = (replay > 0 ? true : extraBufferCapacity > 0) ? true : onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance());
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      tmp$ret$2 = 'replay or extraBufferCapacity must be positive with non-default onBufferOverflow strategy ' + onBufferOverflow;
      var message_1 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var bufferCapacity0 = replay + extraBufferCapacity | 0;
    var bufferCapacity = bufferCapacity0 < 0 ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : bufferCapacity0;
    return new SharedFlowImpl(replay, bufferCapacity, onBufferOverflow);
  }
  var properties_initialized_SharedFlow_kt_tmefor;
  function _init_properties_SharedFlow_kt__umasnn() {
    if (properties_initialized_SharedFlow_kt_tmefor) {
    } else {
      properties_initialized_SharedFlow_kt_tmefor = true;
      NO_VALUE = new Symbol('NO_VALUE');
    }
  }
  function get_NONE() {
    _init_properties_StateFlow_kt__eu9yi5();
    return NONE;
  }
  var NONE;
  function get_PENDING() {
    _init_properties_StateFlow_kt__eu9yi5();
    return PENDING;
  }
  var PENDING;
  function MutableStateFlow() {
  }
  function MutableStateFlow_0(value) {
    _init_properties_StateFlow_kt__eu9yi5();
    var tmp0_elvis_lhs = value;
    return new StateFlowImpl(tmp0_elvis_lhs == null ? get_NULL() : tmp0_elvis_lhs);
  }
  function StateFlow() {
  }
  function _get__state__37adl3_1($this) {
    return $this._state_1;
  }
  function _set_sequence__iw30om($this, _set____db54di) {
    $this.sequence_1 = _set____db54di;
  }
  function _get_sequence__636p7u($this) {
    return $this.sequence_1;
  }
  function updateState($this, expectedState, newState) {
    var curSequence;
    var curSlots;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var oldState = $this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if (!(expectedState == null) ? !equals(oldState, expectedState) : false)
      return false;
    if (equals(oldState, newState))
      return true;
    $this._state_1.set_kotlinx$atomicfu$value_koguff_k$(newState);
    curSequence = $this.sequence_1;
    if ((curSequence & 1) === 0) {
      var tmp0 = curSequence;
      curSequence = tmp0 + 1 | 0;
      $this.sequence_1 = curSequence;
    } else {
      $this.sequence_1 = curSequence + 2 | 0;
      return true;
    }
    curSlots = $this.get_slots_iyl3po_k$();
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    while (true) {
      var tmp0_safe_receiver = curSlots;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'kotlinx.coroutines.flow.StateFlowImpl.updateState.<anonymous>' call
          var tmp0_safe_receiver_0 = element;
          if (tmp0_safe_receiver_0 == null)
            null;
          else {
            tmp0_safe_receiver_0.makePending_e81oco_k$();
          }
        }
      }
      var tmp$ret$3;
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
      if ($this.sequence_1 === curSequence) {
        $this.sequence_1 = curSequence + 1 | 0;
        return true;
      }
      curSequence = $this.sequence_1;
      curSlots = $this.get_slots_iyl3po_k$();
      tmp$ret$2 = Unit_getInstance();
      tmp$ret$3 = tmp$ret$2;
    }
  }
  function $collectCOROUTINE$13(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$13).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(12);
            this.slot0__1 = this._this__u8e3s4__1.allocateSlot_67zie3_k$();
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(11);
            var tmp_0 = this.collector_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.set_state_a96kl8_k$(2);
              suspendResult = this.collector_1.onSubscription_igsb49_k$(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

            break;
          case 2:
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.collectorJob2__1 = this.get_context_h02k06_k$().get_j1ktw6_k$(Key_getInstance_3());
            this.oldState3__1 = null;
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            if (false) {
              this.set_state_a96kl8_k$(9);
              continue $sm;
            }

            this.newState4__1 = this._this__u8e3s4__1._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
            var tmp0_safe_receiver = this.collectorJob2__1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            ;
            if (this.oldState3__1 == null ? true : !equals(this.oldState3__1, this.newState4__1)) {
              this.set_state_a96kl8_k$(5);
              var tmp0_unbox = get_NULL();
              var tmp_2;
              if (this.newState4__1 === tmp0_unbox) {
                tmp_2 = (null == null ? true : isObject(null)) ? null : THROW_CCE();
              } else {
                var tmp_3 = this.newState4__1;
                tmp_2 = isObject(tmp_3) ? tmp_3 : THROW_CCE();
              }
              suspendResult = this.collector_1.emit_1fbrsb_k$(tmp_2, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(6);
              continue $sm;
            }

            break;
          case 5:
            this.oldState3__1 = this.newState4__1;
            this.set_state_a96kl8_k$(6);
            continue $sm;
          case 6:
            if (!this.slot0__1.takePending_f3q49c_k$()) {
              this.set_state_a96kl8_k$(7);
              suspendResult = this.slot0__1.awaitPending_yebmnm_k$(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(8);
              continue $sm;
            }

            break;
          case 7:
            this.set_state_a96kl8_k$(8);
            continue $sm;
          case 8:
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 9:
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_s9sevl_k$(12);
            this.set_state_a96kl8_k$(10);
            continue $sm;
          case 10:
            this._this__u8e3s4__1.freeSlot_w9jsdv_k$(this.slot0__1);
            ;
            return Unit_getInstance();
          case 11:
            this.set_exceptionState_s9sevl_k$(12);
            var t = this.get_exception_x0n6w6_k$();
            this._this__u8e3s4__1.freeSlot_w9jsdv_k$(this.slot0__1);
            ;
            throw t;
          case 12:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 12) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function StateFlowImpl(initialState) {
    AbstractSharedFlow.call(this);
    this._state_1 = atomic$ref$1(initialState);
    this.sequence_1 = 0;
  }
  protoOf(StateFlowImpl).set_value_rnwamw_k$ = function (value) {
    var tmp0_elvis_lhs = value;
    updateState(this, null, tmp0_elvis_lhs == null ? get_NULL() : tmp0_elvis_lhs);
  };
  protoOf(StateFlowImpl).get_value_j01efc_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.Symbol.unbox' call
    var tmp0_unbox = get_NULL();
    var tmp1_unbox = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var tmp;
    if (tmp1_unbox === tmp0_unbox) {
      tmp = (null == null ? true : isObject(null)) ? null : THROW_CCE();
    } else {
      tmp = isObject(tmp1_unbox) ? tmp1_unbox : THROW_CCE();
    }
    tmp$ret$0 = tmp;
    return tmp$ret$0;
  };
  protoOf(StateFlowImpl).compareAndSet_fjyiiu_k$ = function (expect, update) {
    var tmp0_elvis_lhs = expect;
    var tmp = tmp0_elvis_lhs == null ? get_NULL() : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = update;
    return updateState(this, tmp, tmp1_elvis_lhs == null ? get_NULL() : tmp1_elvis_lhs);
  };
  protoOf(StateFlowImpl).get_replayCache_uwub8y_k$ = function () {
    return listOf_0(this.get_value_j01efc_k$());
  };
  protoOf(StateFlowImpl).tryEmit_4zef7h_k$ = function (value) {
    this.set_value_rnwamw_k$(value);
    return true;
  };
  protoOf(StateFlowImpl).emit_1fbrsb_k$ = function (value, $completion) {
    this.set_value_rnwamw_k$(value);
    return Unit_getInstance();
  };
  protoOf(StateFlowImpl).resetReplayCache_tzw4vv_k$ = function () {
    throw UnsupportedOperationException_init_$Create$('MutableStateFlow.resetReplayCache is not supported');
  };
  protoOf(StateFlowImpl).collect_4rdebi_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$13(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(StateFlowImpl).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_4rdebi_k$(collector, $completion);
  };
  protoOf(StateFlowImpl).createSlot_mn6f4q_k$ = function () {
    return new StateFlowSlot();
  };
  protoOf(StateFlowImpl).createSlotArray_n47sjm_k$ = function (size) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(size), null);
    return tmp$ret$0;
  };
  protoOf(StateFlowImpl).fuse_pocnsz_k$ = function (context, capacity, onBufferOverflow) {
    return fuseStateFlow(this, context, capacity, onBufferOverflow);
  };
  function _get__state__37adl3_2($this) {
    return $this._state_1;
  }
  function StateFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this._state_1 = atomic$ref$1(null);
  }
  protoOf(StateFlowSlot).allocateLocked_v1uryr_k$ = function (flow) {
    if (!(this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$() == null))
      return false;
    this._state_1.set_kotlinx$atomicfu$value_koguff_k$(get_NONE());
    return true;
  };
  protoOf(StateFlowSlot).allocateLocked_8qz7hq_k$ = function (flow) {
    return this.allocateLocked_v1uryr_k$(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).freeLocked_l01cri_k$ = function (flow) {
    this._state_1.set_kotlinx$atomicfu$value_koguff_k$(null);
    return get_EMPTY_RESUMES();
  };
  protoOf(StateFlowSlot).freeLocked_l0ao83_k$ = function (flow) {
    return this.freeLocked_l01cri_k$(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).makePending_e81oco_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.flow.StateFlowSlot.makePending.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (tmp1__anonymous__uwfjfc == null)
        return Unit_getInstance();
      else if (tmp1__anonymous__uwfjfc === get_PENDING())
        return Unit_getInstance();
      else if (tmp1__anonymous__uwfjfc === get_NONE()) {
        if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, get_PENDING()))
          return Unit_getInstance();
      } else {
        if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, get_NONE())) {
          var tmp$ret$1;
          // Inline function 'kotlin.coroutines.resume' call
          var tmp1_resume = tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl ? tmp1__anonymous__uwfjfc : THROW_CCE();
          var tmp$ret$0;
          // Inline function 'kotlin.Companion.success' call
          var tmp0_success = Companion_getInstance();
          tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
          tmp1_resume.resumeWith_s3a3yh_k$(tmp$ret$0);
          tmp$ret$1 = Unit_getInstance();
          return Unit_getInstance();
        }
      }
    }
  };
  protoOf(StateFlowSlot).takePending_f3q49c_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.let' call
    var tmp0_let = ensureNotNull(this._state_1.atomicfu$getAndSet(get_NONE()));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.assert' call
    return tmp0_let === get_PENDING();
    return tmp$ret$0;
  };
  protoOf(StateFlowSlot).awaitPending_yebmnm_k$ = function ($completion) {
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.initCancellability_sh6jkn_k$();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.StateFlowSlot.awaitPending.<anonymous>' call
      // Inline function 'kotlinx.coroutines.assert' call
      if (this._state_1.atomicfu$compareAndSet(get_NONE(), cancellable)) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      var tmp$ret$2;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_getInstance());
      cancellable.resumeWith_s3a3yh_k$(tmp$ret$1);
      tmp$ret$2 = Unit_getInstance();
    }
    tmp$ret$3 = cancellable.getResult_clfhg3_k$();
    var tmp0 = tmp$ret$3;
    return tmp0;
  };
  function fuseStateFlow(_this__u8e3s4, context, capacity, onBufferOverflow) {
    _init_properties_StateFlow_kt__eu9yi5();
    // Inline function 'kotlinx.coroutines.assert' call
    if (((0 <= capacity ? capacity <= 1 : false) ? true : capacity === Factory_getInstance().get_BUFFERED_qzy754_k$()) ? onBufferOverflow.equals(BufferOverflow_DROP_OLDEST_getInstance()) : false) {
      return _this__u8e3s4;
    }
    return fuseSharedFlow(_this__u8e3s4, context, capacity, onBufferOverflow);
  }
  var properties_initialized_StateFlow_kt_nsqikx;
  function _init_properties_StateFlow_kt__eu9yi5() {
    if (properties_initialized_StateFlow_kt_nsqikx) {
    } else {
      properties_initialized_StateFlow_kt_nsqikx = true;
      NONE = new Symbol('NONE');
      PENDING = new Symbol('PENDING');
    }
  }
  function get_EMPTY_RESUMES() {
    _init_properties_AbstractSharedFlow_kt__h2xygb();
    return EMPTY_RESUMES;
  }
  var EMPTY_RESUMES;
  function _set_slots__knzp9s($this, _set____db54di) {
    $this.slots_1 = _set____db54di;
  }
  function _set_nCollectors__60nrap($this, _set____db54di) {
    $this.nCollectors_1 = _set____db54di;
  }
  function _set_nextIndex__5mwvzu($this, _set____db54di) {
    $this.nextIndex_1 = _set____db54di;
  }
  function _get_nextIndex__nnxkeq($this) {
    return $this.nextIndex_1;
  }
  function _set__subscriptionCount__l7i64c($this, _set____db54di) {
    $this._subscriptionCount_1 = _set____db54di;
  }
  function _get__subscriptionCount__fvqkqg($this) {
    return $this._subscriptionCount_1;
  }
  function AbstractSharedFlow() {
    this.slots_1 = null;
    this.nCollectors_1 = 0;
    this.nextIndex_1 = 0;
    this._subscriptionCount_1 = null;
  }
  protoOf(AbstractSharedFlow).get_slots_iyl3po_k$ = function () {
    return this.slots_1;
  };
  protoOf(AbstractSharedFlow).get_nCollectors_gh2yp7_k$ = function () {
    return this.nCollectors_1;
  };
  protoOf(AbstractSharedFlow).get_subscriptionCount_9h9j93_k$ = function () {
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.<get-subscriptionCount>.<anonymous>' call
    var tmp0_elvis_lhs = this._subscriptionCount_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new SubscriptionCountStateFlow(this.nCollectors_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.<get-subscriptionCount>.<anonymous>.<anonymous>' call
      this._subscriptionCount_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  protoOf(AbstractSharedFlow).allocateSlot_67zie3_k$ = function () {
    var subscriptionCount;
    var tmp$ret$5;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$4;
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>' call
    var curSlots = this.slots_1;
    var tmp;
    if (curSlots == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = this.createSlotArray_n47sjm_k$(2);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
      this.slots_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      var tmp_0;
      if (this.nCollectors_1 >= curSlots.length) {
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        var tmp1_also = copyOf(curSlots, imul(2, curSlots.length));
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
        this.slots_1 = tmp1_also;
        tmp$ret$1 = tmp1_also;
        tmp_0 = tmp$ret$1;
      } else {
        tmp_0 = curSlots;
      }
      tmp = tmp_0;
    }
    var slots = tmp;
    var index = this.nextIndex_1;
    var slot;
    $l$loop: while (true) {
      var tmp0_elvis_lhs = slots[index];
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$2;
        // Inline function 'kotlin.also' call
        var tmp2_also = this.createSlot_mn6f4q_k$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
        slots[index] = tmp2_also;
        tmp$ret$2 = tmp2_also;
        tmp_1 = tmp$ret$2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      slot = tmp_1;
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      if (index >= slots.length)
        index = 0;
      if ((slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).allocateLocked_8qz7hq_k$(this))
        break $l$loop;
    }
    this.nextIndex_1 = index;
    var tmp2_this = this;
    var tmp3 = tmp2_this.nCollectors_1;
    tmp2_this.nCollectors_1 = tmp3 + 1 | 0;
    subscriptionCount = this._subscriptionCount_1;
    tmp$ret$3 = slot;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    var slot_0 = tmp$ret$5;
    var tmp0_safe_receiver = subscriptionCount;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.increment_t15t82_k$(1);
    return slot_0;
  };
  protoOf(AbstractSharedFlow).freeSlot_w9jsdv_k$ = function (slot) {
    var subscriptionCount;
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.freeSlot.<anonymous>' call
    var tmp0_this = this;
    var tmp1 = tmp0_this.nCollectors_1;
    tmp0_this.nCollectors_1 = tmp1 - 1 | 0;
    subscriptionCount = this._subscriptionCount_1;
    if (this.nCollectors_1 === 0)
      this.nextIndex_1 = 0;
    tmp$ret$0 = (slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).freeLocked_l0ao83_k$(this);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var resumes = tmp$ret$2;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var cont = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_safe_receiver = cont;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$3;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp1_safe_receiver.resumeWith_s3a3yh_k$(tmp$ret$3);
        tmp$ret$4 = Unit_getInstance();
      }
    }
    var tmp2_safe_receiver = subscriptionCount;
    if (tmp2_safe_receiver == null)
      null;
    else
      tmp2_safe_receiver.increment_t15t82_k$(-1);
  };
  protoOf(AbstractSharedFlow).forEachSlotLocked_fx14oo_k$ = function (block) {
    if (this.nCollectors_1 === 0)
      return Unit_getInstance();
    var tmp0_safe_receiver = this.slots_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
        if (!(element == null))
          block(element);
      }
    }
  };
  function AbstractSharedFlowSlot() {
  }
  function SubscriptionCountStateFlow(initialValue) {
    SharedFlowImpl.call(this, 1, IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$(), BufferOverflow_DROP_OLDEST_getInstance());
    this.tryEmit_4zef7h_k$(initialValue);
  }
  protoOf(SubscriptionCountStateFlow).get_value_j01efc_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.internal.SubscriptionCountStateFlow.<get-value>.<anonymous>' call
    tmp$ret$0 = this.get_lastReplayedLocked_pnaey7_k$();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(SubscriptionCountStateFlow).increment_t15t82_k$ = function (delta) {
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.internal.SubscriptionCountStateFlow.increment.<anonymous>' call
    tmp$ret$0 = this.tryEmit_4zef7h_k$(this.get_lastReplayedLocked_pnaey7_k$() + delta | 0);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  var properties_initialized_AbstractSharedFlow_kt_2mpafr;
  function _init_properties_AbstractSharedFlow_kt__h2xygb() {
    if (properties_initialized_AbstractSharedFlow_kt_2mpafr) {
    } else {
      properties_initialized_AbstractSharedFlow_kt_2mpafr = true;
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(0), null);
      EMPTY_RESUMES = tmp$ret$0;
    }
  }
  function FusibleFlow() {
  }
  function ChannelFlowOperatorImpl(flow, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? Factory_getInstance().get_OPTIONAL_CHANNEL_c6wrw3_k$() : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlowOperator.call(this, flow, context, capacity, onBufferOverflow);
  }
  protoOf(ChannelFlowOperatorImpl).create_ne139a_k$ = function (context, capacity, onBufferOverflow) {
    return new ChannelFlowOperatorImpl(this.flow_1, context, capacity, onBufferOverflow);
  };
  protoOf(ChannelFlowOperatorImpl).dropChannelOperators_b7m5cr_k$ = function () {
    return this.flow_1;
  };
  protoOf(ChannelFlowOperatorImpl).flowCollect_ltb8cl_k$ = function (collector, $completion) {
    var tmp0 = this.flow_1.collect_llpwvh_k$(collector, $completion);
    return tmp0;
  };
  function collectWithContextUndispatched($this, collector, newContext, $completion) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $completion.get_context_h02k06_k$();
    var originalContextCollector = withUndispatchedContextCollector(collector, tmp$ret$0);
    var tmp0 = withContextUndispatched(newContext, originalContextCollector, VOID, ChannelFlowOperator$collectWithContextUndispatched$slambda_0($this, null), $completion);
    return tmp0;
  }
  function ChannelFlowOperator$collectWithContextUndispatched$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).invoke_i6lhpd_k$ = function (it, $completion) {
    var tmp = this.create_w91w5e_k$(it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_i6lhpd_k$((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.this$0__1.flowCollect_ltb8cl_k$(this.it_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
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
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).create_w91w5e_k$ = function (it, completion) {
    var i = new ChannelFlowOperator$collectWithContextUndispatched$slambda(this.this$0__1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_w91w5e_k$((!(value == null) ? isInterface(value, FlowCollector) : false) ? value : THROW_CCE(), completion);
  };
  function ChannelFlowOperator$collectWithContextUndispatched$slambda_0(this$0, resultContinuation) {
    var i = new ChannelFlowOperator$collectWithContextUndispatched$slambda(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_i6lhpd_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$14(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$14).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(7);
            if (this._this__u8e3s4__1.capacity_1 === Factory_getInstance().get_OPTIONAL_CHANNEL_c6wrw3_k$()) {
              var tmp_0 = this;
              tmp_0.collectContext0__1 = this.get_context_h02k06_k$();
              this.newContext1__1 = this.collectContext0__1.plus_rgw9wi_k$(this._this__u8e3s4__1.context_1);
              if (equals(this.newContext1__1, this.collectContext0__1)) {
                this.set_state_a96kl8_k$(6);
                suspendResult = this._this__u8e3s4__1.flowCollect_ltb8cl_k$(this.collector_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.set_state_a96kl8_k$(1);
                continue $sm;
              }
            } else {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

            break;
          case 1:
            if (equals(this.newContext1__1.get_j1ktw6_k$(Key_getInstance()), this.collectContext0__1.get_j1ktw6_k$(Key_getInstance()))) {
              this.set_state_a96kl8_k$(5);
              suspendResult = collectWithContextUndispatched(this._this__u8e3s4__1, this.collector_1, this.newContext1__1, this);
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
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            this.set_state_a96kl8_k$(4);
            suspendResult = protoOf(ChannelFlow).collect_llpwvh_k$.call(this._this__u8e3s4__1, this.collector_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            return Unit_getInstance();
          case 6:
            return Unit_getInstance();
          case 7:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 7) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function ChannelFlowOperator(flow, context, capacity, onBufferOverflow) {
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this.flow_1 = flow;
  }
  protoOf(ChannelFlowOperator).get_flow_wom2yf_k$ = function () {
    return this.flow_1;
  };
  protoOf(ChannelFlowOperator).collectTo_cxc1tf_k$ = function (scope, $completion) {
    var tmp0 = this.flowCollect_ltb8cl_k$(new SendingCollector(scope), $completion);
    return tmp0;
  };
  protoOf(ChannelFlowOperator).collect_llpwvh_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$14(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChannelFlowOperator).toString = function () {
    return '' + this.flow_1 + ' -> ' + protoOf(ChannelFlow).toString.call(this);
  };
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).invoke_7587ie_k$ = function (it, $completion) {
    var tmp = this.create_xnm1el_k$(it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_7587ie_k$((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.this$0__1.collectTo_cxc1tf_k$(this.it_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
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
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).create_xnm1el_k$ = function (it, completion) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this.this$0__1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).create_xubfvz_k$ = function (value, completion) {
    return this.create_xnm1el_k$((!(value == null) ? isInterface(value, ProducerScope) : false) ? value : THROW_CCE(), completion);
  };
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this$0, resultContinuation) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_7587ie_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow$collect$slambda($collector, this$0, resultContinuation) {
    this.$collector_1 = $collector;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$collect$slambda).invoke_d6gbsu_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_b6qu53_k$($this$coroutineScope, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChannelFlow$collect$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = emitAll(this.$collector_1, this.this$0__1.produceImpl_3l1x6h_k$(this.$this$coroutineScope_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
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
  protoOf(ChannelFlow$collect$slambda).create_b6qu53_k$ = function ($this$coroutineScope, completion) {
    var i = new ChannelFlow$collect$slambda(this.$collector_1, this.this$0__1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(ChannelFlow$collect$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ChannelFlow$collect$slambda_0($collector, this$0, resultContinuation) {
    var i = new ChannelFlow$collect$slambda($collector, this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_d6gbsu_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow(context, capacity, onBufferOverflow) {
    this.context_1 = context;
    this.capacity_1 = capacity;
    this.onBufferOverflow_1 = onBufferOverflow;
    // Inline function 'kotlinx.coroutines.assert' call
  }
  protoOf(ChannelFlow).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(ChannelFlow).get_capacity_wxbgcd_k$ = function () {
    return this.capacity_1;
  };
  protoOf(ChannelFlow).get_onBufferOverflow_51en86_k$ = function () {
    return this.onBufferOverflow_1;
  };
  protoOf(ChannelFlow).get_collectToFun_va2loj_k$ = function () {
    return ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this, null);
  };
  protoOf(ChannelFlow).get_produceCapacity_7smiwf_k$ = function () {
    return this.capacity_1 === Factory_getInstance().get_OPTIONAL_CHANNEL_c6wrw3_k$() ? Factory_getInstance().get_BUFFERED_qzy754_k$() : this.capacity_1;
  };
  protoOf(ChannelFlow).dropChannelOperators_b7m5cr_k$ = function () {
    return null;
  };
  protoOf(ChannelFlow).fuse_pocnsz_k$ = function (context, capacity, onBufferOverflow) {
    // Inline function 'kotlinx.coroutines.assert' call
    var newContext = context.plus_rgw9wi_k$(this.context_1);
    var newCapacity;
    var newOverflow;
    if (!onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
      newCapacity = capacity;
      newOverflow = onBufferOverflow;
    } else {
      var tmp;
      if (this.capacity_1 === Factory_getInstance().get_OPTIONAL_CHANNEL_c6wrw3_k$()) {
        tmp = capacity;
      } else if (capacity === Factory_getInstance().get_OPTIONAL_CHANNEL_c6wrw3_k$()) {
        tmp = this.capacity_1;
      } else if (this.capacity_1 === Factory_getInstance().get_BUFFERED_qzy754_k$()) {
        tmp = capacity;
      } else if (capacity === Factory_getInstance().get_BUFFERED_qzy754_k$()) {
        tmp = this.capacity_1;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        // Inline function 'kotlinx.coroutines.assert' call
        var sum = this.capacity_1 + capacity | 0;
        tmp = sum >= 0 ? sum : Factory_getInstance().get_UNLIMITED_eshsm0_k$();
      }
      newCapacity = tmp;
      newOverflow = this.onBufferOverflow_1;
    }
    if ((equals(newContext, this.context_1) ? newCapacity === this.capacity_1 : false) ? newOverflow.equals(this.onBufferOverflow_1) : false)
      return this;
    return this.create_ne139a_k$(newContext, newCapacity, newOverflow);
  };
  protoOf(ChannelFlow).produceImpl_3l1x6h_k$ = function (scope) {
    return produce(scope, this.context_1, this.get_produceCapacity_7smiwf_k$(), this.onBufferOverflow_1, CoroutineStart_ATOMIC_getInstance(), VOID, this.get_collectToFun_va2loj_k$());
  };
  protoOf(ChannelFlow).collect_llpwvh_k$ = function (collector, $completion) {
    var tmp0 = coroutineScope(ChannelFlow$collect$slambda_0(collector, this, null), $completion);
    return tmp0;
  };
  protoOf(ChannelFlow).additionalToStringProps_j3cp6l_k$ = function () {
    return null;
  };
  protoOf(ChannelFlow).toString = function () {
    var props = ArrayList_init_$Create$(4);
    var tmp0_safe_receiver = this.additionalToStringProps_j3cp6l_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.flow.internal.ChannelFlow.toString.<anonymous>' call
      tmp$ret$0 = props.add_1j60pz_k$(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
    }
    if (!(this.context_1 === EmptyCoroutineContext_getInstance())) {
      props.add_1j60pz_k$('context=' + this.context_1);
    }
    if (!(this.capacity_1 === Factory_getInstance().get_OPTIONAL_CHANNEL_c6wrw3_k$())) {
      props.add_1j60pz_k$('capacity=' + this.capacity_1);
    }
    if (!this.onBufferOverflow_1.equals(BufferOverflow_SUSPEND_getInstance())) {
      props.add_1j60pz_k$('onBufferOverflow=' + this.onBufferOverflow_1);
    }
    return get_classSimpleName(this) + '[' + joinToString(props, ', ') + ']';
  };
  function withUndispatchedContextCollector(_this__u8e3s4, emitContext) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    var tmp_0;
    if (tmp0_subject instanceof SendingCollector) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof NopCollector;
    }
    if (tmp_0) {
      tmp = _this__u8e3s4;
    } else {
      tmp = new UndispatchedContextCollector(_this__u8e3s4, emitContext);
    }
    return tmp;
  }
  function withContextUndispatched(newContext, value, countOrElement, block, $completion) {
    countOrElement = countOrElement === VOID ? threadContextElements(newContext) : countOrElement;
    var tmp$ret$4;
    // Inline function 'kotlinx.coroutines.flow.internal.withContextUndispatched.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.withCoroutineContext' call
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.flow.internal.withContextUndispatched.<anonymous>.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
    var tmp0_startCoroutineUninterceptedOrReturn = new StackFrameContinuation(tmp0__anonymous__q1qw7t, newContext);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = block;
    var a = tmp$ret$0;
    tmp$ret$1 = typeof a === 'function' ? a(value, tmp0_startCoroutineUninterceptedOrReturn) : block.invoke_5zdxxo_k$(value, tmp0_startCoroutineUninterceptedOrReturn);
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var tmp0 = tmp$ret$4;
    return tmp0;
  }
  function _get_emitContext__5m2ab9($this) {
    return $this.emitContext_1;
  }
  function _get_countOrElement__mr0q9r($this) {
    return $this.countOrElement_1;
  }
  function _get_emitRef__jc7zqn($this) {
    return $this.emitRef_1;
  }
  function UndispatchedContextCollector$emitRef$slambda($downstream, resultContinuation) {
    this.$downstream_1 = $downstream;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UndispatchedContextCollector$emitRef$slambda).invoke_tr8wvu_k$ = function (it, $completion) {
    var tmp = this.create_aq37ol_k$(it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(UndispatchedContextCollector$emitRef$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_tr8wvu_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UndispatchedContextCollector$emitRef$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$downstream_1.emit_1fbrsb_k$(this.it_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
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
  protoOf(UndispatchedContextCollector$emitRef$slambda).create_aq37ol_k$ = function (it, completion) {
    var i = new UndispatchedContextCollector$emitRef$slambda(this.$downstream_1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(UndispatchedContextCollector$emitRef$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_aq37ol_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), completion);
  };
  function UndispatchedContextCollector$emitRef$slambda_0($downstream, resultContinuation) {
    var i = new UndispatchedContextCollector$emitRef$slambda($downstream, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_tr8wvu_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UndispatchedContextCollector(downstream, emitContext) {
    this.emitContext_1 = emitContext;
    this.countOrElement_1 = threadContextElements(this.emitContext_1);
    var tmp = this;
    tmp.emitRef_1 = UndispatchedContextCollector$emitRef$slambda_0(downstream, null);
  }
  protoOf(UndispatchedContextCollector).emit_1fbrsb_k$ = function (value, $completion) {
    var tmp0 = withContextUndispatched(this.emitContext_1, value, this.countOrElement_1, this.emitRef_1, $completion);
    return tmp0;
  };
  function _get_uCont__b1l76e($this) {
    return $this.uCont_1;
  }
  function StackFrameContinuation(uCont, context) {
    this.uCont_1 = uCont;
    this.context_1 = context;
  }
  protoOf(StackFrameContinuation).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(StackFrameContinuation).get_callerFrame_pfdb95_k$ = function () {
    var tmp = this.uCont_1;
    return isInterface(tmp, CoroutineStackFrame) ? tmp : null;
  };
  protoOf(StackFrameContinuation).resumeWith_s3a3yh_k$ = function (result) {
    this.uCont_1.resumeWith_s3a3yh_k$(result);
  };
  protoOf(StackFrameContinuation).getStackTraceElement_um8m53_k$ = function () {
    return null;
  };
  function checkOwnership(_this__u8e3s4, owner) {
    if (!(_this__u8e3s4.get_owner_iwkx3e_k$() === owner))
      throw _this__u8e3s4;
  }
  function NopCollector() {
    NopCollector_instance = this;
  }
  protoOf(NopCollector).emit_pisoht_k$ = function (value, $completion) {
    return Unit_getInstance();
  };
  protoOf(NopCollector).emit_1fbrsb_k$ = function (value, $completion) {
    return this.emit_pisoht_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), $completion);
  };
  var NopCollector_instance;
  function NopCollector_getInstance() {
    if (NopCollector_instance == null)
      new NopCollector();
    return NopCollector_instance;
  }
  function get_NULL() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return NULL;
  }
  var NULL;
  function get_UNINITIALIZED() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return UNINITIALIZED;
  }
  var UNINITIALIZED;
  function get_DONE() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return DONE;
  }
  var DONE;
  var properties_initialized_NullSurrogate_kt_39v8bl;
  function _init_properties_NullSurrogate_kt__n2yti9() {
    if (properties_initialized_NullSurrogate_kt_39v8bl) {
    } else {
      properties_initialized_NullSurrogate_kt_39v8bl = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }
  }
  function unsafeFlow(block) {
    return new _no_name_provided__qut3iv_0(block);
  }
  function checkContext(_this__u8e3s4, currentContext) {
    var result = currentContext.fold_iindx8_k$(0, checkContext$lambda(_this__u8e3s4));
    if (!(result === _this__u8e3s4.get_collectContextSize_pumapd_k$())) {
      // Inline function 'kotlin.error' call
      var tmp0_error = 'Flow invariant is violated:\n' + ('\t\tFlow was collected in ' + _this__u8e3s4.get_collectContext_m0m2mq_k$() + ',\n') + ('\t\tbut emission happened in ' + currentContext + '.\n') + "\t\tPlease refer to 'flow' documentation or use 'flowOn' instead";
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
  }
  function transitiveCoroutineParent(_this__u8e3s4, collectJob) {
    var $this = _this__u8e3s4;
    var collectJob_0 = collectJob;
    $l$1: do {
      $l$0: do {
        if ($this === null)
          return null;
        if ($this === collectJob_0)
          return $this;
        if (!($this instanceof ScopeCoroutine))
          return $this;
        var tmp0 = $this.get_parent_hy4reb_k$();
        var tmp1 = collectJob_0;
        $this = tmp0;
        collectJob_0 = tmp1;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function _no_name_provided__qut3iv_0($block) {
    this.$block_1 = $block;
  }
  protoOf(_no_name_provided__qut3iv_0).collect_llpwvh_k$ = function (collector, $completion) {
    var tmp0 = this.$block_1(collector, $completion);
    return tmp0;
  };
  function checkContext$lambda($this_checkContext) {
    return function (count, element) {
      var key = element.get_key_18j28a_k$();
      var collectElement = $this_checkContext.get_collectContext_m0m2mq_k$().get_j1ktw6_k$(key);
      var tmp;
      if (!(key === Key_getInstance_3())) {
        return !(element === collectElement) ? IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$() : count + 1 | 0;
      }
      var collectJob = (collectElement == null ? true : isInterface(collectElement, Job)) ? collectElement : THROW_CCE();
      var emissionParentJob = transitiveCoroutineParent(isInterface(element, Job) ? element : THROW_CCE(), collectJob);
      var tmp_0;
      if (!(emissionParentJob === collectJob)) {
        var tmp0_error = 'Flow invariant is violated:\n\t\tEmission from another coroutine is detected.\n' + ('\t\tChild of ' + emissionParentJob + ', expected child of ' + collectJob + '.\n') + '\t\tFlowCollector is not thread-safe and concurrent emissions are prohibited.\n' + "\t\tTo mitigate this restriction please use 'channelFlow' builder instead of 'flow'";
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
      return collectJob == null ? count : count + 1 | 0;
    };
  }
  function _get_channel__c6e3yq($this) {
    return $this.channel_1;
  }
  function SendingCollector(channel) {
    this.channel_1 = channel;
  }
  protoOf(SendingCollector).emit_1fbrsb_k$ = function (value, $completion) {
    var tmp0 = this.channel_1.send_4idxxh_k$(value, $completion);
    return tmp0;
  };
  function CancellableFlow() {
  }
  function get_defaultKeySelector() {
    _init_properties_Distinct_kt__4eindw();
    return defaultKeySelector;
  }
  var defaultKeySelector;
  function get_defaultAreEquivalent() {
    _init_properties_Distinct_kt__4eindw();
    return defaultAreEquivalent;
  }
  var defaultAreEquivalent;
  function defaultKeySelector$lambda(it) {
    _init_properties_Distinct_kt__4eindw();
    return it;
  }
  function defaultAreEquivalent$lambda(old, new_0) {
    _init_properties_Distinct_kt__4eindw();
    return equals(old, new_0);
  }
  var properties_initialized_Distinct_kt_uy8c72;
  function _init_properties_Distinct_kt__4eindw() {
    if (properties_initialized_Distinct_kt_uy8c72) {
    } else {
      properties_initialized_Distinct_kt_uy8c72 = true;
      defaultKeySelector = defaultKeySelector$lambda;
      defaultAreEquivalent = defaultAreEquivalent$lambda;
    }
  }
  function ensureActive_1(_this__u8e3s4) {
    if (_this__u8e3s4 instanceof ThrowingCollector)
      throw _this__u8e3s4.e_1;
  }
  function ThrowingCollector(e) {
    this.e_1 = e;
  }
  protoOf(ThrowingCollector).get_e_1mhr5o_k$ = function () {
    return this.e_1;
  };
  protoOf(ThrowingCollector).emit_pisoht_k$ = function (value, $completion) {
    throw this.e_1;
  };
  protoOf(ThrowingCollector).emit_1fbrsb_k$ = function (value, $completion) {
    return this.emit_pisoht_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), $completion);
  };
  function unsafeTransform(_this__u8e3s4, transform) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$0 = new _no_name_provided__qut3iv_1(_this__u8e3s4, transform);
    return tmp$ret$0;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).emit_1fbrsb_k$ = function (value, $completion) {
    var tmp0 = this.function_1(value, $completion);
    return tmp0;
  };
  function unsafeTransform$o$collect$slambda($transform, $collector, resultContinuation) {
    this.$transform_1 = $transform;
    this.$collector_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(unsafeTransform$o$collect$slambda).invoke_tr8wvu_k$ = function (value, $completion) {
    var tmp = this.create_aq37ol_k$(value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(unsafeTransform$o$collect$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_tr8wvu_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(unsafeTransform$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$transform_1(this.$collector_1, this.value_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
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
  protoOf(unsafeTransform$o$collect$slambda).create_aq37ol_k$ = function (value, completion) {
    var i = new unsafeTransform$o$collect$slambda(this.$transform_1, this.$collector_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(unsafeTransform$o$collect$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_aq37ol_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), completion);
  };
  function unsafeTransform$o$collect$slambda_0($transform, $collector, resultContinuation) {
    var i = new unsafeTransform$o$collect$slambda($transform, $collector, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_tr8wvu_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$15(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$15).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = unsafeTransform$o$collect$slambda_0(this._this__u8e3s4__1.$transform_1, this.collector_1, null);
            suspendResult = this._this__u8e3s4__1.$this_unsafeTransform_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
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
  function _no_name_provided__qut3iv_1($this_unsafeTransform, $transform) {
    this.$this_unsafeTransform_1 = $this_unsafeTransform;
    this.$transform_1 = $transform;
  }
  protoOf(_no_name_provided__qut3iv_1).collect_aabnv5_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$15(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_1).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_aabnv5_k$(collector, $completion);
  };
  function takeWhile(_this__u8e3s4, predicate) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$0 = new _no_name_provided__qut3iv_3(_this__u8e3s4, predicate);
    return tmp$ret$0;
  }
  function collectWhile(_this__u8e3s4, predicate, $completion) {
    var tmp = new $collectWhileCOROUTINE$16(_this__u8e3s4, predicate, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $emitCOROUTINE$18(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.value_1 = value;
  }
  protoOf($emitCOROUTINE$18).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(5);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.$predicate_1(this.value_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              this.set_state_a96kl8_k$(2);
              suspendResult = this._this__u8e3s4__1.$collector_1.emit_1fbrsb_k$(this.value_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_0 = this;
              tmp_0.WHEN_RESULT0__1 = false;
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

            break;
          case 2:
            this.WHEN_RESULT0__1 = true;
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            var ARGUMENT = this.WHEN_RESULT0__1;
            if (!ARGUMENT) {
              throw new AbortFlowException(this._this__u8e3s4__1);
            } else {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

            ;
            break;
          case 4:
            return Unit_getInstance();
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
  function _no_name_provided__qut3iv_2($predicate, $collector) {
    this.$predicate_1 = $predicate;
    this.$collector_1 = $collector;
  }
  protoOf(_no_name_provided__qut3iv_2).emit_1fbrsb_k$ = function (value, $completion) {
    var tmp = new $emitCOROUTINE$18(this, value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function $collectCOROUTINE$17(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$17).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_0 = this;
            tmp_0.collector0__1 = new _no_name_provided__qut3iv_2(this._this__u8e3s4__1.$predicate_1, this.collector_1);
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.$this_takeWhile_1.collect_llpwvh_k$(this.collector0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof AbortFlowException) {
              var e = this.get_exception_x0n6w6_k$();
              checkOwnership(e, this.collector0__1);
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
            return Unit_getInstance();
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
  function _no_name_provided__qut3iv_3($this_takeWhile, $predicate) {
    this.$this_takeWhile_1 = $this_takeWhile;
    this.$predicate_1 = $predicate;
  }
  protoOf(_no_name_provided__qut3iv_3).collect_llpwvh_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$17(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function $emitCOROUTINE$19(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.value_1 = value;
  }
  protoOf($emitCOROUTINE$19).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.$predicate_1(this.value_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (!ARGUMENT) {
              throw new AbortFlowException(this._this__u8e3s4__1);
            } else {
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

            break;
          case 2:
            return Unit_getInstance();
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
  function _no_name_provided__qut3iv_4($predicate) {
    this.$predicate_1 = $predicate;
  }
  protoOf(_no_name_provided__qut3iv_4).emit_1fbrsb_k$ = function (value, $completion) {
    var tmp = new $emitCOROUTINE$19(this, value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function $collectWhileCOROUTINE$16(_this__u8e3s4, predicate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.predicate_1 = predicate;
  }
  protoOf($collectWhileCOROUTINE$16).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_0 = this;
            tmp_0.collector0__1 = new _no_name_provided__qut3iv_4(this.predicate_1);
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.collect_llpwvh_k$(this.collector0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof AbortFlowException) {
              var e = this.get_exception_x0n6w6_k$();
              checkOwnership(e, this.collector0__1);
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
            return Unit_getInstance();
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
  function get_DEFAULT_CONCURRENCY() {
    _init_properties_Merge_kt__cbpr96();
    return DEFAULT_CONCURRENCY;
  }
  var DEFAULT_CONCURRENCY;
  function get_DEFAULT_CONCURRENCY_PROPERTY_NAME() {
    return DEFAULT_CONCURRENCY_PROPERTY_NAME;
  }
  var DEFAULT_CONCURRENCY_PROPERTY_NAME;
  var properties_initialized_Merge_kt_dhn6vs;
  function _init_properties_Merge_kt__cbpr96() {
    if (properties_initialized_Merge_kt_dhn6vs) {
    } else {
      properties_initialized_Merge_kt_dhn6vs = true;
      DEFAULT_CONCURRENCY = systemProp('kotlinx.coroutines.flow.defaultConcurrency', 16, 1, IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$());
    }
  }
  function _get_collector__klro10($this) {
    return $this.collector_1;
  }
  function _get_action__ikx8yd($this) {
    return $this.action_1;
  }
  function $onSubscriptionCOROUTINE$20(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($onSubscriptionCOROUTINE$20).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(7);
            var tmp_0 = this;
            tmp_0.safeCollector0__1 = new SafeCollector(this._this__u8e3s4__1.collector_1, this.get_context_h02k06_k$());
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(6);
            this.set_state_a96kl8_k$(2);
            suspendResult = this._this__u8e3s4__1.action_1(this.safeCollector0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tmp$ret$01__1 = suspendResult;
            this.set_exceptionState_s9sevl_k$(7);
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            this.safeCollector0__1.releaseIntercepted_5cexvt_k$();
            ;
            var tmp_1 = this._this__u8e3s4__1.collector_1;
            if (tmp_1 instanceof SubscribedFlowCollector) {
              this.set_state_a96kl8_k$(4);
              suspendResult = this._this__u8e3s4__1.collector_1.onSubscription_igsb49_k$(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(5);
              continue $sm;
            }

            break;
          case 4:
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            this.set_exceptionState_s9sevl_k$(7);
            var t = this.get_exception_x0n6w6_k$();
            this.safeCollector0__1.releaseIntercepted_5cexvt_k$();
            ;
            throw t;
          case 7:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 7) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function SubscribedFlowCollector(collector, action) {
    this.collector_1 = collector;
    this.action_1 = action;
  }
  protoOf(SubscribedFlowCollector).emit_1fbrsb_k$ = function (value, $completion) {
    var tmp0 = this.collector_1.emit_1fbrsb_k$(value, $completion);
    return tmp0;
  };
  protoOf(SubscribedFlowCollector).onSubscription_igsb49_k$ = function ($completion) {
    var tmp = new $onSubscriptionCOROUTINE$20(this, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function filter(_this__u8e3s4, predicate) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$0 = new _no_name_provided__qut3iv_5(_this__u8e3s4, predicate);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).emit_1fbrsb_k$ = function (value, $completion) {
    var tmp0 = this.function_1(value, $completion);
    return tmp0;
  };
  function filter$o$collect$slambda($predicate, $collector, resultContinuation) {
    this.$predicate_1 = $predicate;
    this.$collector_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(filter$o$collect$slambda).invoke_tr8wvu_k$ = function (value, $completion) {
    var tmp = this.create_aq37ol_k$(value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(filter$o$collect$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_tr8wvu_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(filter$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(6);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.set_state_a96kl8_k$(2);
            suspendResult = this.$predicate_1(this.value_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (suspendResult) {
              this.set_state_a96kl8_k$(4);
              suspendResult = this.$collector_1.emit_1fbrsb_k$(this.value_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

            break;
          case 3:
            if (false) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 4:
            this.tmp$ret$00__1 = suspendResult;
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(filter$o$collect$slambda).create_aq37ol_k$ = function (value, completion) {
    var i = new filter$o$collect$slambda(this.$predicate_1, this.$collector_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(filter$o$collect$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_aq37ol_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), completion);
  };
  function filter$o$collect$slambda_0($predicate, $collector, resultContinuation) {
    var i = new filter$o$collect$slambda($predicate, $collector, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_tr8wvu_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$21(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$21).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = filter$o$collect$slambda_0(this._this__u8e3s4__1.$predicate_1, this.collector_1, null);
            suspendResult = this._this__u8e3s4__1.$this_filter_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
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
  function _no_name_provided__qut3iv_5($this_filter, $predicate) {
    this.$this_filter_1 = $this_filter;
    this.$predicate_1 = $predicate;
  }
  protoOf(_no_name_provided__qut3iv_5).collect_llpwvh_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$21(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function collect(_this__u8e3s4, $completion) {
    var tmp0 = _this__u8e3s4.collect_llpwvh_k$(NopCollector_getInstance(), $completion);
    return tmp0;
  }
  function first(_this__u8e3s4, predicate, $completion) {
    var tmp = new $firstCOROUTINE$22(_this__u8e3s4, predicate, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $emitCOROUTINE$23(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.value_1 = value;
  }
  protoOf($emitCOROUTINE$23).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.$predicate_1(this.value_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              var tmp_0 = this;
              this._this__u8e3s4__1.$result_1._v = this.value_1;
              tmp_0.WHEN_RESULT0__1 = false;
              this.set_state_a96kl8_k$(2);
              continue $sm;
            } else {
              var tmp_1 = this;
              tmp_1.WHEN_RESULT0__1 = true;
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

            break;
          case 2:
            var ARGUMENT = this.WHEN_RESULT0__1;
            if (!ARGUMENT) {
              throw new AbortFlowException(this._this__u8e3s4__1);
            } else {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

            ;
            break;
          case 3:
            return Unit_getInstance();
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
  function _no_name_provided__qut3iv_6($predicate, $result) {
    this.$predicate_1 = $predicate;
    this.$result_1 = $result;
  }
  protoOf(_no_name_provided__qut3iv_6).emit_1fbrsb_k$ = function (value, $completion) {
    var tmp = new $emitCOROUTINE$23(this, value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function $firstCOROUTINE$22(_this__u8e3s4, predicate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.predicate_1 = predicate;
  }
  protoOf($firstCOROUTINE$22).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.result0__1 = {_v: get_NULL()};
            var tmp_0 = this;
            tmp_0.collector1__1 = new _no_name_provided__qut3iv_6(this.predicate_1, this.result0__1);
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.collect_llpwvh_k$(this.collector1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof AbortFlowException) {
              var e = this.get_exception_x0n6w6_k$();
              checkOwnership(e, this.collector1__1);
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
            if (this.result0__1._v === get_NULL())
              throw NoSuchElementException_init_$Create$_0('Expected at least one element matching the predicate ' + this.predicate_1);
            var tmp_2 = this.result0__1._v;
            return (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
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
  function get_NO_DECISION() {
    _init_properties_Atomic_kt__5uvtv9();
    return NO_DECISION;
  }
  var NO_DECISION;
  function OpDescriptor() {
  }
  protoOf(OpDescriptor).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function _get__consensus__nhzvjh($this) {
    return $this._consensus_1;
  }
  function decide($this, decision) {
    // Inline function 'kotlinx.coroutines.assert' call
    var current = $this._consensus_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if (!(current === get_NO_DECISION()))
      return current;
    if ($this._consensus_1.atomicfu$compareAndSet(get_NO_DECISION(), decision))
      return decision;
    return $this._consensus_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  }
  function AtomicOp() {
    OpDescriptor.call(this);
    this._consensus_1 = atomic$ref$1(get_NO_DECISION());
  }
  protoOf(AtomicOp).get_atomicOp_p2pkuj_k$ = function () {
    return this;
  };
  protoOf(AtomicOp).perform_8emi3i_k$ = function (affected) {
    var decision = this._consensus_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if (decision === get_NO_DECISION()) {
      decision = decide(this, this.prepare_gq68ys_k$((affected == null ? true : isObject(affected)) ? affected : THROW_CCE()));
    }
    this.complete_fye4ce_k$((affected == null ? true : isObject(affected)) ? affected : THROW_CCE(), decision);
    return decision;
  };
  var properties_initialized_Atomic_kt_vn225v;
  function _init_properties_Atomic_kt__5uvtv9() {
    if (properties_initialized_Atomic_kt_vn225v) {
    } else {
      properties_initialized_Atomic_kt_vn225v = true;
      NO_DECISION = new Symbol('NO_DECISION');
    }
  }
  function get_CLOSED() {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    return CLOSED;
  }
  var CLOSED;
  function _get_cleanedAndPointers__hkgc2u($this) {
    return $this.cleanedAndPointers_1;
  }
  function Segment(id, prev, pointers) {
    ConcurrentLinkedListNode.call(this, prev);
    this.id_1 = id;
    this.cleanedAndPointers_1 = atomic$int$1(pointers << 16);
  }
  protoOf(Segment).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(Segment).get_isRemoved_gzdz59_k$ = function () {
    return this.cleanedAndPointers_1.get_kotlinx$atomicfu$value_vi2am5_k$() === this.get_numberOfSlots_n3mgwk_k$() ? !this.get_isTail_ew6gmb_k$() : false;
  };
  protoOf(Segment).tryIncPointers_5qlhqx_k$ = function () {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.internal.addConditionally' call
      var tmp0_addConditionally = this.cleanedAndPointers_1;
      var tmp1_addConditionally = 65536;
      while (true) {
        var cur = tmp0_addConditionally.get_kotlinx$atomicfu$value_vi2am5_k$();
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.internal.Segment.tryIncPointers.<anonymous>' call
        tmp$ret$0 = !(cur === this.get_numberOfSlots_n3mgwk_k$()) ? true : this.get_isTail_ew6gmb_k$();
        if (!tmp$ret$0) {
          tmp$ret$1 = false;
          break $l$block_0;
        }
        if (tmp0_addConditionally.atomicfu$compareAndSet(cur, cur + tmp1_addConditionally | 0)) {
          tmp$ret$1 = true;
          break $l$block_0;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(Segment).decPointers_43xfc_k$ = function () {
    return this.cleanedAndPointers_1.atomicfu$addAndGet(-65536) === this.get_numberOfSlots_n3mgwk_k$() ? !this.get_isTail_ew6gmb_k$() : false;
  };
  protoOf(Segment).onSlotCleaned_dnmt5m_k$ = function () {
    if (this.cleanedAndPointers_1.atomicfu$incrementAndGet() === this.get_numberOfSlots_n3mgwk_k$()) {
      this.remove_le47v1_k$();
    }
  };
  function close(_this__u8e3s4) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    while (true) {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var tmp1_nextOrIfClosed = cur;
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = _get_nextOrClosed__w0gmuv(tmp1_nextOrIfClosed);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed.<anonymous>' call
      var tmp;
      if (tmp0_let === get_CLOSED()) {
        return cur;
      } else {
        tmp = (tmp0_let == null ? true : tmp0_let instanceof ConcurrentLinkedListNode) ? tmp0_let : THROW_CCE();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var next = tmp$ret$2;
      if (next === null) {
        if (cur.markAsClosed_42mcdn_k$())
          return cur;
      } else {
        cur = next;
      }
    }
  }
  function _SegmentOrClosed___init__impl__jnexvb(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _SegmentOrClosed___get_isClosed__impl__qmxmlo($this) {
    return _get_value__a43j40($this) === get_CLOSED();
  }
  function _SegmentOrClosed___get_segment__impl__jvcr9l($this) {
    var tmp;
    if (_get_value__a43j40($this) === get_CLOSED()) {
      throw IllegalStateException_init_$Create$('Does not contain segment');
    } else {
      var tmp_0 = _get_value__a43j40($this);
      tmp = tmp_0 instanceof Segment ? tmp_0 : THROW_CCE();
    }
    return tmp;
  }
  function SegmentOrClosed__toString_impl_pzb2an($this) {
    return 'SegmentOrClosed(value=' + toString_0($this) + ')';
  }
  function SegmentOrClosed__hashCode_impl_4855hs($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function SegmentOrClosed__equals_impl_6erq1g($this, other) {
    if (!(other instanceof SegmentOrClosed))
      return false;
    var tmp0_other_with_cast = other instanceof SegmentOrClosed ? other.value_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function SegmentOrClosed(value) {
    this.value_1 = value;
  }
  protoOf(SegmentOrClosed).toString = function () {
    return SegmentOrClosed__toString_impl_pzb2an(this.value_1);
  };
  protoOf(SegmentOrClosed).hashCode = function () {
    return SegmentOrClosed__hashCode_impl_4855hs(this.value_1);
  };
  protoOf(SegmentOrClosed).equals = function (other) {
    return SegmentOrClosed__equals_impl_6erq1g(this.value_1, other);
  };
  function findSegmentAndMoveForward(_this__u8e3s4, id, startFrom, createNewSegment) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    while (true) {
      var s = findSegmentInternal(startFrom, id, createNewSegment);
      var tmp;
      if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
        tmp = true;
      } else {
        var tmp$ret$0;
        $l$block_1: {
          // Inline function 'kotlinx.coroutines.internal.moveForward' call
          var tmp1_moveForward = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          while (true) {
            // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
            var tmp0__anonymous__q1qw7t = _this__u8e3s4.get_kotlinx$atomicfu$value_vi2am5_k$();
            if (tmp0__anonymous__q1qw7t.id_1.compareTo_n4fqi2_k$(tmp1_moveForward.id_1) >= 0) {
              tmp$ret$0 = true;
              break $l$block_1;
            }
            if (!tmp1_moveForward.tryIncPointers_5qlhqx_k$()) {
              tmp$ret$0 = false;
              break $l$block_1;
            }
            if (_this__u8e3s4.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, tmp1_moveForward)) {
              if (tmp0__anonymous__q1qw7t.decPointers_43xfc_k$()) {
                tmp0__anonymous__q1qw7t.remove_le47v1_k$();
              }
              tmp$ret$0 = true;
              break $l$block_1;
            }
            if (tmp1_moveForward.decPointers_43xfc_k$()) {
              tmp1_moveForward.remove_le47v1_k$();
            }
          }
          tmp$ret$0 = Unit_getInstance();
        }
        tmp = tmp$ret$0;
      }
      if (tmp)
        return s;
    }
  }
  function moveForward(_this__u8e3s4, to) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
      var tmp0__anonymous__q1qw7t = _this__u8e3s4.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (tmp0__anonymous__q1qw7t.id_1.compareTo_n4fqi2_k$(to.id_1) >= 0)
        return true;
      if (!to.tryIncPointers_5qlhqx_k$())
        return false;
      if (_this__u8e3s4.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, to)) {
        if (tmp0__anonymous__q1qw7t.decPointers_43xfc_k$()) {
          tmp0__anonymous__q1qw7t.remove_le47v1_k$();
        }
        return true;
      }
      if (to.decPointers_43xfc_k$()) {
        to.remove_le47v1_k$();
      }
    }
    return Unit_getInstance();
  }
  function _get__next__kt3wsh($this) {
    return $this._next_1;
  }
  function _get__prev__krsetd($this) {
    return $this._prev_1;
  }
  function _get_nextOrClosed__w0gmuv($this) {
    return $this._next_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  }
  function _get_aliveSegmentLeft__mr4ndu($this) {
    var cur = $this.get_prev_wosl18_k$();
    while (!(cur === null) ? cur.get_isRemoved_gzdz59_k$() : false)
      cur = cur._prev_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    return cur;
  }
  function _get_aliveSegmentRight__7ulr0b($this) {
    // Inline function 'kotlinx.coroutines.assert' call
    var cur = ensureNotNull($this.get_next_wor1vg_k$());
    while (cur.get_isRemoved_gzdz59_k$()) {
      var tmp0_elvis_lhs = cur.get_next_wor1vg_k$();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return cur;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      cur = tmp;
    }
    return cur;
  }
  function ConcurrentLinkedListNode(prev) {
    this._next_1 = atomic$ref$1(null);
    this._prev_1 = atomic$ref$1(prev);
  }
  protoOf(ConcurrentLinkedListNode).nextOrIfClosed_gkev8z_k$ = function (onClosedAction) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = _get_nextOrClosed__w0gmuv(this);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed.<anonymous>' call
    var tmp;
    if (tmp0_let === get_CLOSED()) {
      onClosedAction();
      tmp = throwKotlinNothingValueException();
    } else {
      tmp = (tmp0_let == null ? true : tmp0_let instanceof ConcurrentLinkedListNode) ? tmp0_let : THROW_CCE();
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ConcurrentLinkedListNode).get_next_wor1vg_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = _get_nextOrClosed__w0gmuv(this);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed.<anonymous>' call
    var tmp;
    if (tmp0_let === get_CLOSED()) {
      return null;
    } else {
      tmp = (tmp0_let == null ? true : tmp0_let instanceof ConcurrentLinkedListNode) ? tmp0_let : THROW_CCE();
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(ConcurrentLinkedListNode).trySetNext_coo0vr_k$ = function (value) {
    return this._next_1.atomicfu$compareAndSet(null, value);
  };
  protoOf(ConcurrentLinkedListNode).get_isTail_ew6gmb_k$ = function () {
    return this.get_next_wor1vg_k$() == null;
  };
  protoOf(ConcurrentLinkedListNode).get_prev_wosl18_k$ = function () {
    return this._prev_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(ConcurrentLinkedListNode).cleanPrev_rmgs7f_k$ = function () {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    var tmp0_lazySet = this._prev_1;
    tmp0_lazySet.set_kotlinx$atomicfu$value_koguff_k$(null);
  };
  protoOf(ConcurrentLinkedListNode).markAsClosed_42mcdn_k$ = function () {
    return this._next_1.atomicfu$compareAndSet(null, get_CLOSED());
  };
  protoOf(ConcurrentLinkedListNode).remove_le47v1_k$ = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.get_isTail_ew6gmb_k$())
      return Unit_getInstance();
    $l$loop_0: while (true) {
      var prev = _get_aliveSegmentLeft__mr4ndu(this);
      var next = _get_aliveSegmentRight__7ulr0b(this);
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.atomicfu.update' call
        var tmp0_update = next._prev_1;
        while (true) {
          var cur = tmp0_update.get_kotlinx$atomicfu$value_vi2am5_k$();
          var tmp$ret$0;
          // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.remove.<anonymous>' call
          tmp$ret$0 = cur === null ? null : prev;
          var upd = tmp$ret$0;
          if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
            tmp$ret$1 = Unit_getInstance();
            break $l$block;
          }
        }
      }
      if (!(prev === null)) {
        prev._next_1.set_kotlinx$atomicfu$value_koguff_k$(next);
      }
      if (next.get_isRemoved_gzdz59_k$() ? !next.get_isTail_ew6gmb_k$() : false)
        continue $l$loop_0;
      if (!(prev === null) ? prev.get_isRemoved_gzdz59_k$() : false)
        continue $l$loop_0;
      return Unit_getInstance();
    }
  };
  function get_POINTERS_SHIFT() {
    return POINTERS_SHIFT;
  }
  var POINTERS_SHIFT;
  function addConditionally(_this__u8e3s4, delta, condition) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    while (true) {
      var cur = _this__u8e3s4.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (!condition(cur))
        return false;
      if (_this__u8e3s4.atomicfu$compareAndSet(cur, cur + delta | 0))
        return true;
    }
  }
  function findSegmentInternal(_this__u8e3s4, id, createNewSegment) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    $l$loop: while (cur.id_1.compareTo_n4fqi2_k$(id) < 0 ? true : cur.get_isRemoved_gzdz59_k$()) {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var tmp1_nextOrIfClosed = cur;
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = _get_nextOrClosed__w0gmuv(tmp1_nextOrIfClosed);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed.<anonymous>' call
      var tmp;
      if (tmp0_let === get_CLOSED()) {
        return _SegmentOrClosed___init__impl__jnexvb(get_CLOSED());
      } else {
        tmp = (tmp0_let == null ? true : tmp0_let instanceof ConcurrentLinkedListNode) ? tmp0_let : THROW_CCE();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var next = tmp$ret$2;
      if (!(next == null)) {
        cur = next;
        continue $l$loop;
      }
      var tmp$ret$3;
      // Inline function 'kotlin.Long.plus' call
      var tmp2_plus = cur.id_1;
      tmp$ret$3 = tmp2_plus.plus_u6jwas_k$(new Long(1, 0));
      var newTail = createNewSegment(tmp$ret$3, cur);
      if (cur.trySetNext_coo0vr_k$(newTail)) {
        if (cur.get_isRemoved_gzdz59_k$()) {
          cur.remove_le47v1_k$();
        }
        cur = newTail;
      }
    }
    return _SegmentOrClosed___init__impl__jnexvb(cur);
  }
  var properties_initialized_ConcurrentLinkedList_kt_kwt434;
  function _init_properties_ConcurrentLinkedList_kt__5gcgzy() {
    if (properties_initialized_ConcurrentLinkedList_kt_kwt434) {
    } else {
      properties_initialized_ConcurrentLinkedList_kt_kwt434 = true;
      CLOSED = new Symbol('CLOSED');
    }
  }
  function handleUncaughtCoroutineException(context, exception) {
    var tmp0_iterator = get_platformExceptionHandlers().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var handler = tmp0_iterator.next_20eer_k$();
      try {
        handler.handleException_w1h9is_k$(context, exception);
      } catch ($p) {
        if ($p instanceof ExceptionSuccessfullyProcessed) {
          var _ = $p;
          return Unit_getInstance();
        } else {
          if ($p instanceof Error) {
            var t = $p;
            propagateExceptionFinalResort(handlerException(exception, t));
          } else {
            throw $p;
          }
        }
      }
    }
    try {
      addSuppressed(exception, new DiagnosticCoroutineContextException(context));
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
      } else {
        throw $p;
      }
    }
    propagateExceptionFinalResort(exception);
  }
  function ExceptionSuccessfullyProcessed() {
    ExceptionSuccessfullyProcessed_instance = this;
    Exception_init_$Init$(this);
    captureStack(this, ExceptionSuccessfullyProcessed);
  }
  var ExceptionSuccessfullyProcessed_instance;
  function ExceptionSuccessfullyProcessed_getInstance() {
    if (ExceptionSuccessfullyProcessed_instance == null)
      new ExceptionSuccessfullyProcessed();
    return ExceptionSuccessfullyProcessed_instance;
  }
  function get_UNDEFINED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function _get__reusableCancellableContinuation__ic28e($this) {
    return $this._reusableCancellableContinuation_1;
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this._reusableCancellableContinuation_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, get_MODE_UNINITIALIZED());
    this.dispatcher_1 = dispatcher;
    this.continuation_1 = continuation;
    this._state_1 = get_UNDEFINED();
    this.countOrElement_1 = threadContextElements(this.get_context_h02k06_k$());
    this._reusableCancellableContinuation_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).get_dispatcher_usy1bk_k$ = function () {
    return this.dispatcher_1;
  };
  protoOf(DispatchedContinuation).get_continuation_7yron4_k$ = function () {
    return this.continuation_1;
  };
  protoOf(DispatchedContinuation).get_context_h02k06_k$ = function () {
    return this.continuation_1.get_context_h02k06_k$();
  };
  protoOf(DispatchedContinuation).set__state_9u8p4v_k$ = function (_set____db54di) {
    this._state_1 = _set____db54di;
  };
  protoOf(DispatchedContinuation).get__state_a6aoij_k$ = function () {
    return this._state_1;
  };
  protoOf(DispatchedContinuation).get_callerFrame_pfdb95_k$ = function () {
    var tmp = this.continuation_1;
    return isInterface(tmp, CoroutineStackFrame) ? tmp : null;
  };
  protoOf(DispatchedContinuation).getStackTraceElement_um8m53_k$ = function () {
    return null;
  };
  protoOf(DispatchedContinuation).get_countOrElement_ut92s3_k$ = function () {
    return this.countOrElement_1;
  };
  protoOf(DispatchedContinuation).isReusable_hrfetn_k$ = function () {
    return !(this._reusableCancellableContinuation_1.get_kotlinx$atomicfu$value_vi2am5_k$() == null);
  };
  protoOf(DispatchedContinuation).awaitReusability_itz0u_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._reusableCancellableContinuation_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (!(tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()))
        return Unit_getInstance();
    }
  };
  protoOf(DispatchedContinuation).release_wtm6d2_k$ = function () {
    this.awaitReusability_itz0u_k$();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.detachChild_qdtbew_k$();
    }
  };
  protoOf(DispatchedContinuation).claimReusableCancellableContinuation_oatv30_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._reusableCancellableContinuation_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.claimReusableCancellableContinuation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (tmp1__anonymous__uwfjfc === null) {
        this._reusableCancellableContinuation_1.set_kotlinx$atomicfu$value_koguff_k$(get_REUSABLE_CLAIMED());
        return null;
      } else {
        if (tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl) {
          if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, get_REUSABLE_CLAIMED())) {
            return tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl ? tmp1__anonymous__uwfjfc : THROW_CCE();
          }
        } else {
          if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
          } else {
            if (tmp1__anonymous__uwfjfc instanceof Error) {
            } else {
              var tmp0_error = 'Inconsistent state ' + toString_0(tmp1__anonymous__uwfjfc);
              throw IllegalStateException_init_$Create$(toString(tmp0_error));
            }
          }
        }
      }
    }
  };
  protoOf(DispatchedContinuation).tryReleaseClaimedContinuation_5s4a1c_k$ = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._reusableCancellableContinuation_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.tryReleaseClaimedContinuation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
        if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (tmp1__anonymous__uwfjfc instanceof Error) {
          // Inline function 'kotlin.require' call
          var tmp0_require = this._reusableCancellableContinuation_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null);
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
          return tmp1__anonymous__uwfjfc;
        } else {
          var tmp1_error = 'Inconsistent state ' + toString_0(tmp1__anonymous__uwfjfc);
          throw IllegalStateException_init_$Create$(toString(tmp1_error));
        }
      }
    }
  };
  protoOf(DispatchedContinuation).postponeCancellation_723ard_k$ = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._reusableCancellableContinuation_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.postponeCancellation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (equals(tmp0_subject, get_REUSABLE_CLAIMED())) {
        if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (tmp0_subject instanceof Error)
          return true;
        else {
          if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).takeState_olvzuy_k$ = function () {
    var state = this._state_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this._state_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).get_delegate_i94tki_k$ = function () {
    return this;
  };
  protoOf(DispatchedContinuation).resumeWith_s3a3yh_k$ = function (result) {
    var context = this.continuation_1.get_context_h02k06_k$();
    var state = toState_0(result);
    if (this.dispatcher_1.isDispatchNeeded_fmz9vn_k$(context)) {
      this._state_1 = state;
      this.set_resumeMode_b1d3vh_k$(get_MODE_ATOMIC());
      this.dispatcher_1.dispatch_o98ux7_k$(context, this);
    } else {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        var tmp0_executeUnconfined = get_MODE_ATOMIC();
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_913645_k$();
        if (false ? eventLoop.get_isUnconfinedQueueEmpty_mi405s_k$() : false) {
          tmp$ret$0 = false;
          break $l$block;
        }
        var tmp;
        if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
          this._state_1 = state;
          this.set_resumeMode_b1d3vh_k$(tmp0_executeUnconfined);
          eventLoop.dispatchUnconfined_do6j6f_k$(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.incrementUseCount_ocukpa_k$(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            var tmp$ret$1;
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            var tmp0_withCoroutineContext = this.get_context_h02k06_k$();
            var tmp1_withCoroutineContext = this.countOrElement_1;
            this.continuation_1.resumeWith_s3a3yh_k$(result);
            tmp$ret$1 = Unit_getInstance();
            $l$loop: while (true) {
              if (!eventLoop.processUnconfinedEvent_mypjl6_k$())
                break $l$loop;
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.handleFatalException_56zdfo_k$(e, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.decrementUseCount_saho26_k$(true);
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
      }
    }
  };
  protoOf(DispatchedContinuation).resumeCancellableWith_tuk66b_k$ = function (result, onCancellation) {
    var state = toState_0(result, onCancellation);
    if (this.dispatcher_1.isDispatchNeeded_fmz9vn_k$(this.get_context_h02k06_k$())) {
      this._state_1 = state;
      this.set_resumeMode_b1d3vh_k$(get_MODE_CANCELLABLE());
      this.dispatcher_1.dispatch_o98ux7_k$(this.get_context_h02k06_k$(), this);
    } else {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_913645_k$();
        if (false ? eventLoop.get_isUnconfinedQueueEmpty_mi405s_k$() : false) {
          tmp$ret$0 = false;
          break $l$block;
        }
        var tmp;
        if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
          this._state_1 = state;
          this.set_resumeMode_b1d3vh_k$(tmp0_executeUnconfined);
          eventLoop.dispatchUnconfined_do6j6f_k$(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.incrementUseCount_ocukpa_k$(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
            var tmp$ret$3;
            $l$block_0: {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
              var job = this.get_context_h02k06_k$().get_j1ktw6_k$(Key_getInstance_3());
              if (!(job == null) ? !job.get_isActive_quafmh_k$() : false) {
                var cause = job.getCancellationException_8i1q6u_k$();
                this.cancelCompletedResult_tweln2_k$(state, cause);
                var tmp$ret$2;
                // Inline function 'kotlin.coroutines.resumeWithException' call
                var tmp$ret$1;
                // Inline function 'kotlin.Companion.failure' call
                var tmp0_failure = Companion_getInstance();
                tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                this.resumeWith_s3a3yh_k$(tmp$ret$1);
                tmp$ret$2 = Unit_getInstance();
                tmp$ret$3 = true;
                break $l$block_0;
              }
              tmp$ret$3 = false;
            }
            if (!tmp$ret$3) {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
              var tmp$ret$4;
              // Inline function 'kotlinx.coroutines.withContinuationContext' call
              var tmp1_withContinuationContext = this.continuation_1;
              var tmp2_withContinuationContext = this.countOrElement_1;
              this.continuation_1.resumeWith_s3a3yh_k$(result);
              tmp$ret$4 = Unit_getInstance();
            }
            $l$loop: while (true) {
              if (!eventLoop.processUnconfinedEvent_mypjl6_k$())
                break $l$loop;
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.handleFatalException_56zdfo_k$(e, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.decrementUseCount_saho26_k$(true);
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
      }
    }
  };
  protoOf(DispatchedContinuation).cancelCompletedResult_tweln2_k$ = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.get_onCancellation_no7t6d_k$()(cause);
    }
  };
  protoOf(DispatchedContinuation).resumeCancelled_vc1wm3_k$ = function (state) {
    var job = this.get_context_h02k06_k$().get_j1ktw6_k$(Key_getInstance_3());
    if (!(job == null) ? !job.get_isActive_quafmh_k$() : false) {
      var cause = job.getCancellationException_8i1q6u_k$();
      this.cancelCompletedResult_tweln2_k$(state, cause);
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
      this.resumeWith_s3a3yh_k$(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return true;
    }
    return false;
  };
  protoOf(DispatchedContinuation).resumeUndispatchedWith_xz834r_k$ = function (result) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.withContinuationContext' call
    var tmp0_withContinuationContext = this.continuation_1;
    var tmp1_withContinuationContext = this.countOrElement_1;
    this.continuation_1.resumeWith_s3a3yh_k$(result);
    tmp$ret$0 = Unit_getInstance();
  };
  protoOf(DispatchedContinuation).dispatchYield_r38es3_k$ = function (context, value) {
    this._state_1 = value;
    this.set_resumeMode_b1d3vh_k$(get_MODE_CANCELLABLE());
    this.dispatcher_1.dispatchYield_ww21f6_k$(context, this);
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.dispatcher_1 + ', ' + toDebugString(this.continuation_1) + ']';
  };
  function executeUnconfined(_this__u8e3s4, contState, mode, doYield, block) {
    doYield = doYield === VOID ? false : doYield;
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    // Inline function 'kotlinx.coroutines.assert' call
    var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_913645_k$();
    if (doYield ? eventLoop.get_isUnconfinedQueueEmpty_mi405s_k$() : false)
      return false;
    var tmp;
    if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
      _this__u8e3s4._state_1 = contState;
      _this__u8e3s4.set_resumeMode_b1d3vh_k$(mode);
      eventLoop.dispatchUnconfined_do6j6f_k$(_this__u8e3s4);
      tmp = true;
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.incrementUseCount_ocukpa_k$(true);
      try {
        block();
        $l$loop: while (true) {
          if (!eventLoop.processUnconfinedEvent_mypjl6_k$())
            break $l$loop;
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.handleFatalException_56zdfo_k$(e, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.decrementUseCount_saho26_k$(true);
      }
      tmp = false;
    }
    return tmp;
  }
  function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof DispatchedContinuation) {
      var tmp1_resumeCancellableWith = _this__u8e3s4;
      var state = toState_0(result, onCancellation);
      var tmp_0;
      if (tmp1_resumeCancellableWith.dispatcher_1.isDispatchNeeded_fmz9vn_k$(tmp1_resumeCancellableWith.get_context_h02k06_k$())) {
        tmp1_resumeCancellableWith._state_1 = state;
        tmp1_resumeCancellableWith.set_resumeMode_b1d3vh_k$(get_MODE_CANCELLABLE());
        tmp1_resumeCancellableWith.dispatcher_1.dispatch_o98ux7_k$(tmp1_resumeCancellableWith.get_context_h02k06_k$(), tmp1_resumeCancellableWith);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_913645_k$();
          if (false ? eventLoop.get_isUnconfinedQueueEmpty_mi405s_k$() : false) {
            tmp$ret$0 = false;
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
            tmp1_resumeCancellableWith._state_1 = state;
            tmp1_resumeCancellableWith.set_resumeMode_b1d3vh_k$(tmp0_executeUnconfined);
            eventLoop.dispatchUnconfined_do6j6f_k$(tmp1_resumeCancellableWith);
            tmp_1 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.incrementUseCount_ocukpa_k$(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = tmp1_resumeCancellableWith.get_context_h02k06_k$().get_j1ktw6_k$(Key_getInstance_3());
                if (!(job == null) ? !job.get_isActive_quafmh_k$() : false) {
                  var cause = job.getCancellationException_8i1q6u_k$();
                  tmp1_resumeCancellableWith.cancelCompletedResult_tweln2_k$(state, cause);
                  var tmp$ret$2;
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  var tmp$ret$1;
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp0_failure = Companion_getInstance();
                  tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  tmp1_resumeCancellableWith.resumeWith_s3a3yh_k$(tmp$ret$1);
                  tmp$ret$2 = Unit_getInstance();
                  tmp$ret$3 = true;
                  break $l$block_0;
                }
                tmp$ret$3 = false;
              }
              if (!tmp$ret$3) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                var tmp$ret$4;
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                var tmp1_withContinuationContext = tmp1_resumeCancellableWith.continuation_1;
                var tmp2_withContinuationContext = tmp1_resumeCancellableWith.countOrElement_1;
                tmp1_resumeCancellableWith.continuation_1.resumeWith_s3a3yh_k$(result);
                tmp$ret$4 = Unit_getInstance();
              }
              $l$loop: while (true) {
                if (!eventLoop.processUnconfinedEvent_mypjl6_k$())
                  break $l$loop;
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                tmp1_resumeCancellableWith.handleFatalException_56zdfo_k$(e, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.decrementUseCount_saho26_k$(true);
            }
            tmp_1 = false;
          }
          tmp$ret$0 = tmp_1;
        }
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      _this__u8e3s4.resumeWith_s3a3yh_k$(result);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function yieldUndispatched(_this__u8e3s4) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
      var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
      // Inline function 'kotlinx.coroutines.assert' call
      var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_913645_k$();
      if (eventLoop.get_isUnconfinedQueueEmpty_mi405s_k$()) {
        tmp$ret$0 = false;
        break $l$block;
      }
      var tmp;
      if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
        _this__u8e3s4._state_1 = Unit_getInstance();
        _this__u8e3s4.set_resumeMode_b1d3vh_k$(tmp0_executeUnconfined);
        eventLoop.dispatchUnconfined_do6j6f_k$(_this__u8e3s4);
        tmp = true;
      } else {
        // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
        eventLoop.incrementUseCount_ocukpa_k$(true);
        try {
          // Inline function 'kotlinx.coroutines.internal.yieldUndispatched.<anonymous>' call
          _this__u8e3s4.run_mw4iiu_k$();
          $l$loop: while (true) {
            if (!eventLoop.processUnconfinedEvent_mypjl6_k$())
              break $l$loop;
          }
        } catch ($p) {
          if ($p instanceof Error) {
            var e = $p;
            _this__u8e3s4.handleFatalException_56zdfo_k$(e, null);
          } else {
            throw $p;
          }
        }
        finally {
          eventLoop.decrementUseCount_saho26_k$(true);
        }
        tmp = false;
      }
      tmp$ret$0 = tmp;
    }
    return tmp$ret$0;
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function _init_properties_DispatchedContinuation_kt__tnmqc0() {
    if (properties_initialized_DispatchedContinuation_kt_2siadq) {
    } else {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function get_MODE_CANCELLABLE() {
    return MODE_CANCELLABLE;
  }
  var MODE_CANCELLABLE;
  function resumeWithStackTrace(_this__u8e3s4, exception) {
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    var tmp0_failure = Companion_getInstance();
    var tmp1_failure = recoverStackTrace(exception, _this__u8e3s4);
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
    _this__u8e3s4.resumeWith_s3a3yh_k$(tmp$ret$0);
  }
  function get_MODE_CANCELLABLE_REUSABLE() {
    return MODE_CANCELLABLE_REUSABLE;
  }
  var MODE_CANCELLABLE_REUSABLE;
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.resumeMode_1 = resumeMode;
  }
  protoOf(DispatchedTask).set_resumeMode_b1d3vh_k$ = function (_set____db54di) {
    this.resumeMode_1 = _set____db54di;
  };
  protoOf(DispatchedTask).get_resumeMode_te1i4n_k$ = function () {
    return this.resumeMode_1;
  };
  protoOf(DispatchedTask).cancelCompletedResult_tweln2_k$ = function (takenState, cause) {
  };
  protoOf(DispatchedTask).getSuccessfulResult_t876z0_k$ = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  protoOf(DispatchedTask).getExceptionalResult_bnge6_k$ = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_cause_iplhs0_k$();
  };
  protoOf(DispatchedTask).run_mw4iiu_k$ = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    get_taskContext(this);
    var taskContext = Unit_getInstance();
    var fatalException = null;
    try {
      var tmp = this.get_delegate_i94tki_k$();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.get_continuation_7yron4_k$();
      var tmp$ret$5;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      var tmp0_withContinuationContext = delegate.get_countOrElement_ut92s3_k$();
      var context = continuation.get_context_h02k06_k$();
      var state = this.takeState_olvzuy_k$();
      var exception = this.getExceptionalResult_bnge6_k$(state);
      var job = (exception == null ? get_isCancellableMode(this.resumeMode_1) : false) ? context.get_j1ktw6_k$(Key_getInstance_3()) : null;
      var tmp_0;
      if (!(job == null) ? !job.get_isActive_quafmh_k$() : false) {
        var cause = job.getCancellationException_8i1q6u_k$();
        this.cancelCompletedResult_tweln2_k$(state, cause);
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance();
        var tmp1_failure = recoverStackTrace(cause, continuation);
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
        continuation.resumeWith_s3a3yh_k$(tmp$ret$0);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp_1;
        if (!(exception == null)) {
          var tmp$ret$2;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$1;
          // Inline function 'kotlin.Companion.failure' call
          var tmp2_failure = Companion_getInstance();
          tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.resumeWith_s3a3yh_k$(tmp$ret$1);
          tmp$ret$2 = Unit_getInstance();
          tmp_1 = tmp$ret$2;
        } else {
          var tmp$ret$4;
          // Inline function 'kotlin.coroutines.resume' call
          var tmp4_resume = this.getSuccessfulResult_t876z0_k$(state);
          var tmp$ret$3;
          // Inline function 'kotlin.Companion.success' call
          var tmp3_success = Companion_getInstance();
          tmp$ret$3 = _Result___init__impl__xyqfz8(tmp4_resume);
          continuation.resumeWith_s3a3yh_k$(tmp$ret$3);
          tmp$ret$4 = Unit_getInstance();
          tmp_1 = tmp$ret$4;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$5 = tmp_0;
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        fatalException = e;
      } else {
        throw $p;
      }
    }
    finally {
      var tmp$ret$8;
      // Inline function 'kotlin.runCatching' call
      var tmp_2;
      try {
        var tmp$ret$6;
        // Inline function 'kotlin.Companion.success' call
        var tmp1_success = Companion_getInstance();
        var tmp2_success = Unit_getInstance();
        tmp$ret$6 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp_2 = tmp$ret$6;
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Error) {
          var e_0 = $p;
          var tmp$ret$7;
          // Inline function 'kotlin.Companion.failure' call
          var tmp3_failure = Companion_getInstance();
          tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure(e_0));
          tmp_3 = tmp$ret$7;
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      tmp$ret$8 = tmp_2;
      var result = tmp$ret$8;
      this.handleFatalException_56zdfo_k$(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  protoOf(DispatchedTask).handleFatalException_56zdfo_k$ = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
      // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    }
    var tmp0_elvis_lhs = exception;
    var cause = tmp0_elvis_lhs == null ? finallyException : tmp0_elvis_lhs;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.get_delegate_i94tki_k$().get_context_h02k06_k$(), reason);
  };
  function get_MODE_UNINITIALIZED() {
    return MODE_UNINITIALIZED;
  }
  var MODE_UNINITIALIZED;
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 ? true : _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.get_delegate_i94tki_k$();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.resumeMode_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.get_dispatcher_usy1bk_k$();
      var context = delegate.get_context_h02k06_k$();
      if (dispatcher.isDispatchNeeded_fmz9vn_k$(context)) {
        dispatcher.dispatch_o98ux7_k$(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function get_MODE_UNDISPATCHED() {
    return MODE_UNDISPATCHED;
  }
  var MODE_UNDISPATCHED;
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_913645_k$();
    if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
      eventLoop.dispatchUnconfined_do6j6f_k$(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.incrementUseCount_ocukpa_k$(true);
      try {
        // Inline function 'kotlinx.coroutines.resumeUnconfined.<anonymous>' call
        resume(_this__u8e3s4, _this__u8e3s4.get_delegate_i94tki_k$(), true);
        $l$loop: while (true) {
          if (!eventLoop.processUnconfinedEvent_mypjl6_k$())
            break $l$loop;
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.handleFatalException_56zdfo_k$(e, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.decrementUseCount_saho26_k$(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.takeState_olvzuy_k$();
    var exception = _this__u8e3s4.getExceptionalResult_bnge6_k$(state);
    var tmp;
    if (!(exception == null)) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp1_success = Companion_getInstance();
      var tmp2_success = _this__u8e3s4.getSuccessfulResult_t876z0_k$(state);
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp2_success);
      tmp = tmp$ret$1;
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var tmp5_resumeUndispatchedWith = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      var tmp3_withContinuationContext = tmp5_resumeUndispatchedWith.get_continuation_7yron4_k$();
      var tmp4_withContinuationContext = tmp5_resumeUndispatchedWith.get_countOrElement_ut92s3_k$();
      tmp5_resumeUndispatchedWith.get_continuation_7yron4_k$().resumeWith_s3a3yh_k$(result);
      tmp$ret$2 = Unit_getInstance();
    } else {
      delegate.resumeWith_s3a3yh_k$(result);
    }
  }
  function runUnconfinedEventLoop(_this__u8e3s4, eventLoop, block) {
    eventLoop.incrementUseCount_ocukpa_k$(true);
    try {
      block();
      $l$loop: while (true) {
        if (!eventLoop.processUnconfinedEvent_mypjl6_k$())
          break $l$loop;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        _this__u8e3s4.handleFatalException_56zdfo_k$(e, null);
      } else {
        throw $p;
      }
    }
    finally {
      eventLoop.decrementUseCount_saho26_k$(true);
    }
  }
  function get_MODE_ATOMIC() {
    return MODE_ATOMIC;
  }
  var MODE_ATOMIC;
  function _InlineList___init__impl__z8n56(holder) {
    holder = holder === VOID ? null : holder;
    return holder;
  }
  function _get_holder__f6h5pd($this) {
    return $this;
  }
  function InlineList__plus_impl_nuetvo($this, element) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_subject = _get_holder__f6h5pd($this);
    var tmp;
    if (tmp0_subject == null) {
      tmp = _InlineList___init__impl__z8n56(element);
    } else {
      if (tmp0_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__f6h5pd($this);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).add_1j60pz_k$(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        var tmp_1 = _get_holder__f6h5pd($this);
        list.add_1j60pz_k$((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
        list.add_1j60pz_k$(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function InlineList__forEachReversed_impl_jituug($this, action) {
    var tmp0_subject = _get_holder__f6h5pd($this);
    if (tmp0_subject == null)
      return Unit_getInstance();
    else {
      if (!(tmp0_subject instanceof ArrayList)) {
        var tmp = _get_holder__f6h5pd($this);
        action((tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE());
      } else {
        var tmp_0 = _get_holder__f6h5pd($this);
        var list = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
        var inductionVariable = list.get_size_woubt6_k$() - 1 | 0;
        if (0 <= inductionVariable)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            action(list.get_fkrdnv_k$(i));
          }
           while (0 <= inductionVariable);
      }
    }
  }
  function InlineList__toString_impl_1aej86($this) {
    return 'InlineList(holder=' + toString_0($this) + ')';
  }
  function InlineList__hashCode_impl_n1kg11($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function InlineList__equals_impl_wwe0i1($this, other) {
    if (!(other instanceof InlineList))
      return false;
    var tmp0_other_with_cast = other instanceof InlineList ? other.holder_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function InlineList(holder) {
    this.holder_1 = holder;
  }
  protoOf(InlineList).toString = function () {
    return InlineList__toString_impl_1aej86(this.holder_1);
  };
  protoOf(InlineList).hashCode = function () {
    return InlineList__hashCode_impl_n1kg11(this.holder_1);
  };
  protoOf(InlineList).equals = function (other) {
    return InlineList__equals_impl_wwe0i1(this.holder_1, other);
  };
  function checkParallelism(_this__u8e3s4) {
    var tmp0_require = _this__u8e3s4 >= 1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.checkParallelism.<anonymous>' call
      tmp$ret$0 = 'Expected positive parallelism level, but got ' + _this__u8e3s4;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function _set_currentTask__l6mrzb($this, _set____db54di) {
    $this.currentTask_1 = _set____db54di;
  }
  function _get_currentTask__jk33nx($this) {
    return $this.currentTask_1;
  }
  function _get_dispatcher__dketks($this) {
    return $this.dispatcher_1;
  }
  function _get_parallelism__25q2h7($this) {
    return $this.parallelism_1;
  }
  function _get_runningWorkers__wolfe3($this) {
    return $this.runningWorkers_1;
  }
  function _get_queue__c6g84g($this) {
    return $this.queue_1;
  }
  function _get_workerAllocationLock__l5417m($this) {
    return $this.workerAllocationLock_1;
  }
  function dispatchInternal($this, block, startWorker) {
    $this.queue_1.addLast_3l8aar_k$(block);
    if ($this.runningWorkers_1.get_kotlinx$atomicfu$value_vi2am5_k$() >= $this.parallelism_1)
      return Unit_getInstance();
    if (!tryAllocateWorker($this))
      return Unit_getInstance();
    var tmp0_elvis_lhs = obtainTaskOrDeallocateWorker($this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var task = tmp;
    startWorker(new Worker($this, task));
  }
  function tryAllocateWorker($this) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp0_synchronized = $this.workerAllocationLock_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if ($this.runningWorkers_1.get_kotlinx$atomicfu$value_vi2am5_k$() >= $this.parallelism_1)
      return false;
    $this.runningWorkers_1.atomicfu$incrementAndGet();
    return true;
    tmp$ret$1 = tmp$ret$0;
  }
  function obtainTaskOrDeallocateWorker($this) {
    while (true) {
      var nextTask = $this.queue_1.removeFirstOrNull_eges3a_k$();
      if (nextTask == null) {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.internal.synchronized' call
        var tmp0_synchronized = $this.workerAllocationLock_1;
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.internal.LimitedDispatcher.obtainTaskOrDeallocateWorker.<anonymous>' call
        $this.runningWorkers_1.atomicfu$decrementAndGet();
        if ($this.queue_1.get_size_woubt6_k$() === 0)
          return null;
        tmp$ret$0 = $this.runningWorkers_1.atomicfu$incrementAndGet();
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
      } else
        return nextTask;
    }
  }
  function Worker($outer, currentTask) {
    this.$this_1 = $outer;
    this.currentTask_1 = currentTask;
  }
  protoOf(Worker).run_mw4iiu_k$ = function () {
    var fairnessCounter = 0;
    while (true) {
      try {
        this.currentTask_1.run_mw4iiu_k$();
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          handleCoroutineException(EmptyCoroutineContext_getInstance(), e);
        } else {
          throw $p;
        }
      }
      var tmp = this;
      var tmp0_elvis_lhs = obtainTaskOrDeallocateWorker(this.$this_1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        return Unit_getInstance();
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp.currentTask_1 = tmp_0;
      var tmp_1;
      fairnessCounter = fairnessCounter + 1 | 0;
      if (fairnessCounter >= 16) {
        tmp_1 = this.$this_1.dispatcher_1.isDispatchNeeded_fmz9vn_k$(this.$this_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        this.$this_1.dispatcher_1.dispatch_o98ux7_k$(this.$this_1, this);
        return Unit_getInstance();
      }
    }
  };
  function LimitedDispatcher(dispatcher, parallelism) {
    CoroutineDispatcher.call(this);
    this.dispatcher_1 = dispatcher;
    this.parallelism_1 = parallelism;
    var tmp = this;
    var tmp0_elvis_lhs = isInterface(dispatcher, Delay) ? dispatcher : null;
    tmp.$$delegate_0__1 = tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
    this.runningWorkers_1 = atomic$int$1(0);
    this.queue_1 = new LockFreeTaskQueue(false);
    this.workerAllocationLock_1 = new Object();
  }
  protoOf(LimitedDispatcher).delay_sw4t2e_k$ = function (time, $completion) {
    var tmp0 = this.$$delegate_0__1.delay_sw4t2e_k$(time, $completion);
    return tmp0;
  };
  protoOf(LimitedDispatcher).invokeOnTimeout_sx2bqq_k$ = function (timeMillis, block, context) {
    return this.$$delegate_0__1.invokeOnTimeout_sx2bqq_k$(timeMillis, block, context);
  };
  protoOf(LimitedDispatcher).scheduleResumeAfterDelay_5x4w1l_k$ = function (timeMillis, continuation) {
    this.$$delegate_0__1.scheduleResumeAfterDelay_5x4w1l_k$(timeMillis, continuation);
  };
  protoOf(LimitedDispatcher).limitedParallelism_glrman_k$ = function (parallelism) {
    checkParallelism(parallelism);
    if (parallelism >= this.parallelism_1)
      return this;
    return protoOf(CoroutineDispatcher).limitedParallelism_glrman_k$.call(this, parallelism);
  };
  protoOf(LimitedDispatcher).dispatch_o98ux7_k$ = function (context, block) {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.internal.LimitedDispatcher.dispatchInternal' call
      this.queue_1.addLast_3l8aar_k$(block);
      if (this.runningWorkers_1.get_kotlinx$atomicfu$value_vi2am5_k$() >= this.parallelism_1) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_1;
      }
      if (!tryAllocateWorker(this)) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_1;
      }
      var tmp0_elvis_lhs = obtainTaskOrDeallocateWorker(this);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_1;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var task = tmp;
      // Inline function 'kotlinx.coroutines.internal.LimitedDispatcher.dispatch.<anonymous>' call
      var tmp0__anonymous__q1qw7t = new Worker(this, task);
      this.dispatcher_1.dispatch_o98ux7_k$(this, tmp0__anonymous__q1qw7t);
    }
  };
  protoOf(LimitedDispatcher).dispatchYield_ww21f6_k$ = function (context, block) {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.internal.LimitedDispatcher.dispatchInternal' call
      this.queue_1.addLast_3l8aar_k$(block);
      if (this.runningWorkers_1.get_kotlinx$atomicfu$value_vi2am5_k$() >= this.parallelism_1) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_1;
      }
      if (!tryAllocateWorker(this)) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_1;
      }
      var tmp0_elvis_lhs = obtainTaskOrDeallocateWorker(this);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_1;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var task = tmp;
      // Inline function 'kotlinx.coroutines.internal.LimitedDispatcher.dispatchYield.<anonymous>' call
      var tmp0__anonymous__q1qw7t = new Worker(this, task);
      this.dispatcher_1.dispatchYield_ww21f6_k$(this, tmp0__anonymous__q1qw7t);
    }
  };
  function _get__cur__d2ko2y($this) {
    return $this._cur_1;
  }
  function LockFreeTaskQueue(singleConsumer) {
    var tmp = this;
    Companion_getInstance_3();
    tmp._cur_1 = atomic$ref$1(new LockFreeTaskQueueCore(8, singleConsumer));
  }
  protoOf(LockFreeTaskQueue).get_isEmpty_zauvru_k$ = function () {
    return this._cur_1.get_kotlinx$atomicfu$value_vi2am5_k$().get_isEmpty_zauvru_k$();
  };
  protoOf(LockFreeTaskQueue).get_size_woubt6_k$ = function () {
    return this._cur_1.get_kotlinx$atomicfu$value_vi2am5_k$().get_size_woubt6_k$();
  };
  protoOf(LockFreeTaskQueue).close_ymq55z_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._cur_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueue.close.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (tmp1__anonymous__uwfjfc.close_1keygo_k$())
        return Unit_getInstance();
      this._cur_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, tmp1__anonymous__uwfjfc.next_20eer_k$());
    }
  };
  protoOf(LockFreeTaskQueue).addLast_3l8aar_k$ = function (element) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._cur_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueue.addLast.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp0_subject = tmp1__anonymous__uwfjfc.addLast_3l8aar_k$(element);
      Companion_getInstance_3();
      if (tmp0_subject === 0)
        return true;
      else {
        Companion_getInstance_3();
        if (tmp0_subject === 2)
          return false;
        else {
          Companion_getInstance_3();
          if (tmp0_subject === 1) {
            this._cur_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, tmp1__anonymous__uwfjfc.next_20eer_k$());
          }
        }
      }
    }
  };
  protoOf(LockFreeTaskQueue).removeFirstOrNull_eges3a_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._cur_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueue.removeFirstOrNull.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      var result = tmp1__anonymous__uwfjfc.removeFirstOrNull_eges3a_k$();
      if (!(result === Companion_getInstance_3().REMOVE_FROZEN_1)) {
        return (result == null ? true : isObject(result)) ? result : THROW_CCE();
      }
      this._cur_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, tmp1__anonymous__uwfjfc.next_20eer_k$());
    }
  };
  protoOf(LockFreeTaskQueue).map_o73y3q_k$ = function (transform) {
    return this._cur_1.get_kotlinx$atomicfu$value_vi2am5_k$().map_o73y3q_k$(transform);
  };
  protoOf(LockFreeTaskQueue).isClosed_baxhhm_k$ = function () {
    return this._cur_1.get_kotlinx$atomicfu$value_vi2am5_k$().isClosed_baxhhm_k$();
  };
  function _get_capacity__a9k9f3_1($this) {
    return $this.capacity_1;
  }
  function _get_singleConsumer__485sb7($this) {
    return $this.singleConsumer_1;
  }
  function _get_mask__da8grj($this) {
    return $this.mask_1;
  }
  function _get__next__kt3wsh_0($this) {
    return $this._next_1;
  }
  function _get__state__37adl3_3($this) {
    return $this._state_1;
  }
  function _get_array__jslnqg($this) {
    return $this.array_1;
  }
  function fillPlaceholder($this, index, element) {
    var old = $this.array_1.atomicfu$get(index & $this.mask_1).get_kotlinx$atomicfu$value_vi2am5_k$();
    var tmp;
    if (old instanceof Placeholder) {
      tmp = old.index_1 === index;
    } else {
      tmp = false;
    }
    if (tmp) {
      $this.array_1.atomicfu$get(index & $this.mask_1).set_kotlinx$atomicfu$value_koguff_k$(element);
      return $this;
    }
    return null;
  }
  function removeSlowPath($this, oldHead, newHead) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.removeSlowPath.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
      var tmp0_withState = Companion_getInstance_3();
      var head = tmp1__anonymous__uwfjfc.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
      var tail = tmp1__anonymous__uwfjfc.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
      // Inline function 'kotlinx.coroutines.assert' call
      Companion_getInstance_3();
      if (!tmp1__anonymous__uwfjfc.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0))) {
        return $this.next_20eer_k$();
      }
      var tmp;
      if ($this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, Companion_getInstance_3().updateHead_eajy5c_k$(tmp1__anonymous__uwfjfc, newHead))) {
        $this.array_1.atomicfu$get(head & $this.mask_1).set_kotlinx$atomicfu$value_koguff_k$(null);
        return null;
      }
      tmp$ret$0 = tmp;
    }
  }
  function markFrozen($this) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.updateAndGet' call
      var tmp0_updateAndGet = $this._state_1;
      while (true) {
        var cur = tmp0_updateAndGet.get_kotlinx$atomicfu$value_vi2am5_k$();
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.markFrozen.<anonymous>' call
        Companion_getInstance_3();
        if (!cur.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
          return cur;
        Companion_getInstance_3();
        tmp$ret$0 = cur.or_s401rn_k$(new Long(0, 268435456));
        var upd = tmp$ret$0;
        if (tmp0_updateAndGet.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = upd;
          break $l$block;
        }
      }
    }
    return tmp$ret$1;
  }
  function allocateOrGetNextCopy($this, state) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this._next_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.allocateOrGetNextCopy.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (!(tmp1__anonymous__uwfjfc == null))
        return tmp1__anonymous__uwfjfc;
      $this._next_1.atomicfu$compareAndSet(null, allocateNextCopy($this, state));
    }
  }
  function allocateNextCopy($this, state) {
    var next = new LockFreeTaskQueueCore(imul($this.capacity_1, 2), $this.singleConsumer_1);
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
    var tmp0_withState = Companion_getInstance_3();
    var head = state.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
    var tail = state.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
    var index = head;
    while (!((index & $this.mask_1) === (tail & $this.mask_1))) {
      var tmp0_elvis_lhs = $this.array_1.atomicfu$get(index & $this.mask_1).get_kotlinx$atomicfu$value_vi2am5_k$();
      var value = tmp0_elvis_lhs == null ? new Placeholder(index) : tmp0_elvis_lhs;
      next.array_1.atomicfu$get(index & next.mask_1).set_kotlinx$atomicfu$value_koguff_k$(value);
      var tmp1 = index;
      index = tmp1 + 1 | 0;
    }
    var tmp = Companion_getInstance_3();
    Companion_getInstance_3();
    next._state_1.set_kotlinx$atomicfu$value_sbfhx2_k$(tmp.wo_iscla2_k$(state, new Long(0, 268435456)));
    tmp$ret$0 = Unit_getInstance();
    return next;
  }
  function Placeholder(index) {
    this.index_1 = index;
  }
  protoOf(Placeholder).get_index_it478p_k$ = function () {
    return this.index_1;
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.INITIAL_CAPACITY_1 = 8;
    this.CAPACITY_BITS_1 = 30;
    this.MAX_CAPACITY_MASK_1 = 1073741823;
    this.HEAD_SHIFT_1 = 0;
    this.HEAD_MASK_1 = new Long(1073741823, 0);
    this.TAIL_SHIFT_1 = 30;
    this.TAIL_MASK_1 = new Long(-1073741824, 268435455);
    this.FROZEN_SHIFT_1 = 60;
    this.FROZEN_MASK_1 = new Long(0, 268435456);
    this.CLOSED_SHIFT_1 = 61;
    this.CLOSED_MASK_1 = new Long(0, 536870912);
    this.MIN_ADD_SPIN_CAPACITY_1 = 1024;
    this.REMOVE_FROZEN_1 = new Symbol('REMOVE_FROZEN');
    this.ADD_SUCCESS_1 = 0;
    this.ADD_FROZEN_1 = 1;
    this.ADD_CLOSED_1 = 2;
  }
  protoOf(Companion_0).get_INITIAL_CAPACITY_tvo5ku_k$ = function () {
    return this.INITIAL_CAPACITY_1;
  };
  protoOf(Companion_0).get_CAPACITY_BITS_m7bade_k$ = function () {
    return this.CAPACITY_BITS_1;
  };
  protoOf(Companion_0).get_MAX_CAPACITY_MASK_bnmlt9_k$ = function () {
    return this.MAX_CAPACITY_MASK_1;
  };
  protoOf(Companion_0).get_HEAD_SHIFT_ww01xo_k$ = function () {
    return this.HEAD_SHIFT_1;
  };
  protoOf(Companion_0).get_HEAD_MASK_jkay7y_k$ = function () {
    return this.HEAD_MASK_1;
  };
  protoOf(Companion_0).get_TAIL_SHIFT_z9ya0s_k$ = function () {
    return this.TAIL_SHIFT_1;
  };
  protoOf(Companion_0).get_TAIL_MASK_h71l4e_k$ = function () {
    return this.TAIL_MASK_1;
  };
  protoOf(Companion_0).get_FROZEN_SHIFT_9ve6oc_k$ = function () {
    return this.FROZEN_SHIFT_1;
  };
  protoOf(Companion_0).get_FROZEN_MASK_gcrlj6_k$ = function () {
    return this.FROZEN_MASK_1;
  };
  protoOf(Companion_0).get_CLOSED_SHIFT_v5gopk_k$ = function () {
    return this.CLOSED_SHIFT_1;
  };
  protoOf(Companion_0).get_CLOSED_MASK_agddhm_k$ = function () {
    return this.CLOSED_MASK_1;
  };
  protoOf(Companion_0).get_MIN_ADD_SPIN_CAPACITY_z2m7z7_k$ = function () {
    return this.MIN_ADD_SPIN_CAPACITY_1;
  };
  protoOf(Companion_0).get_REMOVE_FROZEN_w56qum_k$ = function () {
    return this.REMOVE_FROZEN_1;
  };
  protoOf(Companion_0).get_ADD_SUCCESS_vnro04_k$ = function () {
    return this.ADD_SUCCESS_1;
  };
  protoOf(Companion_0).get_ADD_FROZEN_bsr1ax_k$ = function () {
    return this.ADD_FROZEN_1;
  };
  protoOf(Companion_0).get_ADD_CLOSED_db6t8t_k$ = function () {
    return this.ADD_CLOSED_1;
  };
  protoOf(Companion_0).wo_iscla2_k$ = function (_this__u8e3s4, other) {
    return _this__u8e3s4.and_jhajnj_k$(other.inv_28kx_k$());
  };
  protoOf(Companion_0).updateHead_eajy5c_k$ = function (_this__u8e3s4, newHead) {
    return this.wo_iscla2_k$(_this__u8e3s4, new Long(1073741823, 0)).or_s401rn_k$(toLong(newHead).shl_po5ip6_k$(0));
  };
  protoOf(Companion_0).updateTail_fwivqo_k$ = function (_this__u8e3s4, newTail) {
    return this.wo_iscla2_k$(_this__u8e3s4, new Long(-1073741824, 268435455)).or_s401rn_k$(toLong(newTail).shl_po5ip6_k$(30));
  };
  protoOf(Companion_0).withState_mwp87b_k$ = function (_this__u8e3s4, block) {
    var head = _this__u8e3s4.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
    var tail = _this__u8e3s4.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
    return block(head, tail);
  };
  protoOf(Companion_0).addFailReason_gc2gzp_k$ = function (_this__u8e3s4) {
    return !_this__u8e3s4.and_jhajnj_k$(new Long(0, 536870912)).equals(new Long(0, 0)) ? 2 : 1;
  };
  var Companion_instance_0;
  function Companion_getInstance_3() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function LockFreeTaskQueueCore(capacity, singleConsumer) {
    Companion_getInstance_3();
    this.capacity_1 = capacity;
    this.singleConsumer_1 = singleConsumer;
    this.mask_1 = this.capacity_1 - 1 | 0;
    this._next_1 = atomic$ref$1(null);
    this._state_1 = atomic$long$1(new Long(0, 0));
    this.array_1 = atomicfu$AtomicRefArray$ofNulls(this.capacity_1);
    // Inline function 'kotlin.check' call
    Companion_getInstance_3();
    var tmp0_check = this.mask_1 <= 1073741823;
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
    // Inline function 'kotlin.check' call
    var tmp1_check = (this.capacity_1 & this.mask_1) === 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$1 = 'Check failed.';
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
  }
  protoOf(LockFreeTaskQueueCore).get_isEmpty_zauvru_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
    var tmp0_withState = Companion_getInstance_3();
    var tmp1_withState = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var head = tmp1_withState.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
    var tail = tmp1_withState.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.<get-isEmpty>.<anonymous>' call
    tmp$ret$0 = head === tail;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(LockFreeTaskQueueCore).get_size_woubt6_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
    var tmp0_withState = Companion_getInstance_3();
    var tmp1_withState = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var head = tmp1_withState.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
    var tail = tmp1_withState.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.<get-size>.<anonymous>' call
    var tmp = tail - head | 0;
    Companion_getInstance_3();
    tmp$ret$0 = tmp & 1073741823;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(LockFreeTaskQueueCore).close_1keygo_k$ = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp0_update = this._state_1;
      while (true) {
        var cur = tmp0_update.get_kotlinx$atomicfu$value_vi2am5_k$();
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.close.<anonymous>' call
        Companion_getInstance_3();
        if (!cur.and_jhajnj_k$(new Long(0, 536870912)).equals(new Long(0, 0)))
          return true;
        Companion_getInstance_3();
        if (!cur.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
          return false;
        Companion_getInstance_3();
        tmp$ret$0 = cur.or_s401rn_k$(new Long(0, 536870912));
        var upd = tmp$ret$0;
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = Unit_getInstance();
          break $l$block;
        }
      }
    }
    return true;
  };
  protoOf(LockFreeTaskQueueCore).addLast_3l8aar_k$ = function (element) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.addLast.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
        Companion_getInstance_3();
        var tmp = new Long(0, 268435456);
        Companion_getInstance_3();
        if (!tmp1__anonymous__uwfjfc.and_jhajnj_k$(tmp.or_s401rn_k$(new Long(0, 536870912))).equals(new Long(0, 0)))
          return Companion_getInstance_3().addFailReason_gc2gzp_k$(tmp1__anonymous__uwfjfc);
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
        var tmp0_withState = Companion_getInstance_3();
        var head = tmp1__anonymous__uwfjfc.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
        var tail = tmp1__anonymous__uwfjfc.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
        var mask = this.mask_1;
        if (((tail + 2 | 0) & mask) === (head & mask)) {
          Companion_getInstance_3();
          return 1;
        }
        if (!this.singleConsumer_1 ? !(this.array_1.atomicfu$get(tail & mask).get_kotlinx$atomicfu$value_vi2am5_k$() == null) : false) {
          var tmp_0;
          Companion_getInstance_3();
          if (this.capacity_1 < 1024) {
            tmp_0 = true;
          } else {
            var tmp_1 = tail - head | 0;
            Companion_getInstance_3();
            tmp_0 = (tmp_1 & 1073741823) > this.capacity_1 >> 1;
          }
          if (tmp_0) {
            Companion_getInstance_3();
            return 1;
          }
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }
        var tmp_2 = tail + 1 | 0;
        Companion_getInstance_3();
        var newTail = tmp_2 & 1073741823;
        var tmp_3;
        if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, Companion_getInstance_3().updateTail_fwivqo_k$(tmp1__anonymous__uwfjfc, newTail))) {
          this.array_1.atomicfu$get(tail & mask).set_kotlinx$atomicfu$value_koguff_k$(element);
          var cur = this;
          $l$loop_0: while (true) {
            var tmp_4 = cur._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
            Companion_getInstance_3();
            if (tmp_4.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
              break $l$loop_0;
            var tmp0_elvis_lhs = fillPlaceholder(cur.next_20eer_k$(), tail, element);
            var tmp_5;
            if (tmp0_elvis_lhs == null) {
              break $l$loop_0;
            } else {
              tmp_5 = tmp0_elvis_lhs;
            }
            cur = tmp_5;
          }
          Companion_getInstance_3();
          return 0;
        }
        tmp$ret$1 = tmp_3;
      }
    }
  };
  protoOf(LockFreeTaskQueueCore).removeFirstOrNull_eges3a_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.removeFirstOrNull.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
        Companion_getInstance_3();
        if (!tmp1__anonymous__uwfjfc.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
          return Companion_getInstance_3().REMOVE_FROZEN_1;
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
        var tmp0_withState = Companion_getInstance_3();
        var head = tmp1__anonymous__uwfjfc.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
        var tail = tmp1__anonymous__uwfjfc.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
        if ((tail & this.mask_1) === (head & this.mask_1))
          return null;
        var element = this.array_1.atomicfu$get(head & this.mask_1).get_kotlinx$atomicfu$value_vi2am5_k$();
        if (element == null) {
          if (this.singleConsumer_1)
            return null;
          tmp$ret$0 = Unit_getInstance();
          break $l$block_0;
        }
        if (element instanceof Placeholder)
          return null;
        var tmp = head + 1 | 0;
        Companion_getInstance_3();
        var newHead = tmp & 1073741823;
        if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, Companion_getInstance_3().updateHead_eajy5c_k$(tmp1__anonymous__uwfjfc, newHead))) {
          this.array_1.atomicfu$get(head & this.mask_1).set_kotlinx$atomicfu$value_koguff_k$(null);
          return element;
        }
        if (!this.singleConsumer_1) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block_0;
        }
        var cur = this;
        while (true) {
          var tmp0_elvis_lhs = removeSlowPath(cur, head, newHead);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            return element;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          cur = tmp_0;
        }
        tmp$ret$1 = Unit_getInstance();
      }
    }
  };
  protoOf(LockFreeTaskQueueCore).next_20eer_k$ = function () {
    return allocateOrGetNextCopy(this, markFrozen(this));
  };
  protoOf(LockFreeTaskQueueCore).map_o73y3q_k$ = function (transform) {
    var res = ArrayList_init_$Create$(this.capacity_1);
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
    var tmp0_withState = Companion_getInstance_3();
    var tmp1_withState = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var head = tmp1_withState.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
    var tail = tmp1_withState.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
    var index = head;
    while (!((index & this.mask_1) === (tail & this.mask_1))) {
      var element = this.array_1.atomicfu$get(index & this.mask_1).get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp;
      if (!(element == null)) {
        tmp = !(element instanceof Placeholder);
      } else {
        tmp = false;
      }
      if (tmp) {
        res.add_1j60pz_k$(transform(isObject(element) ? element : THROW_CCE()));
      }
      var tmp0 = index;
      index = tmp0 + 1 | 0;
    }
    tmp$ret$0 = Unit_getInstance();
    return res;
  };
  protoOf(LockFreeTaskQueueCore).isClosed_baxhhm_k$ = function () {
    var tmp = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    Companion_getInstance_3();
    return !tmp.and_jhajnj_k$(new Long(0, 536870912)).equals(new Long(0, 0));
  };
  function callUndeliveredElement(_this__u8e3s4, element, context) {
    var tmp0_safe_receiver = callUndeliveredElementCatchingException(_this__u8e3s4, element, null);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      handleCoroutineException(context, tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  function callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException) {
    undeliveredElementException = undeliveredElementException === VOID ? null : undeliveredElementException;
    try {
      _this__u8e3s4(element);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        if (!(undeliveredElementException == null) ? !(undeliveredElementException.cause === ex) : false) {
          // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + element, ex);
        }
      } else {
        throw $p;
      }
    }
    return undeliveredElementException;
  }
  function bindCancellationFun(_this__u8e3s4, element, context) {
    return bindCancellationFun$lambda(_this__u8e3s4, element, context);
  }
  function bindCancellationFun$lambda($this_bindCancellationFun, $element, $context) {
    return function (_anonymous_parameter_0__qggqh8) {
      callUndeliveredElement($this_bindCancellationFun, $element, $context);
      return Unit_getInstance();
    };
  }
  function ContextScope(context) {
    this.coroutineContext_1 = context;
  }
  protoOf(ContextScope).get_coroutineContext_115oqo_k$ = function () {
    return this.coroutineContext_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + this.coroutineContext_1 + ')';
  };
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.uCont_1 = uCont;
  }
  protoOf(ScopeCoroutine).get_uCont_iyyiam_k$ = function () {
    return this.uCont_1;
  };
  protoOf(ScopeCoroutine).get_callerFrame_pfdb95_k$ = function () {
    var tmp = this.uCont_1;
    return isInterface(tmp, CoroutineStackFrame) ? tmp : null;
  };
  protoOf(ScopeCoroutine).getStackTraceElement_um8m53_k$ = function () {
    return null;
  };
  protoOf(ScopeCoroutine).get_isScopedCoroutine_rwmmff_k$ = function () {
    return true;
  };
  protoOf(ScopeCoroutine).afterCompletion_2ogq6g_k$ = function (state) {
    resumeCancellableWith(intercepted(this.uCont_1), recoverResult(state, this.uCont_1));
  };
  protoOf(ScopeCoroutine).afterResume_ufx9w9_k$ = function (state) {
    this.uCont_1.resumeWith_s3a3yh_k$(recoverResult(state, this.uCont_1));
  };
  function Symbol(symbol) {
    this.symbol_1 = symbol;
  }
  protoOf(Symbol).get_symbol_jqdfoh_k$ = function () {
    return this.symbol_1;
  };
  protoOf(Symbol).toString = function () {
    return '<' + this.symbol_1 + '>';
  };
  protoOf(Symbol).unbox_4pmzbj_k$ = function (value) {
    var tmp;
    if (value === this) {
      tmp = (null == null ? true : isObject(null)) ? null : THROW_CCE();
    } else {
      tmp = (value == null ? true : isObject(value)) ? value : THROW_CCE();
    }
    return tmp;
  };
  function synchronized(lock, block) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    tmp$ret$0 = block();
    return tmp$ret$0;
  }
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? 1 : minValue;
    maxValue = maxValue === VOID ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : maxValue;
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).toInt_1tsl84_k$();
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? new Long(1, 0) : minValue;
    maxValue = maxValue === VOID ? Companion_getInstance_0().get_MAX_VALUE_54a9lf_k$() : maxValue;
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp0_error = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parsed = tmp_0;
    if (!(minValue.compareTo_n4fqi2_k$(parsed) <= 0 ? parsed.compareTo_n4fqi2_k$(maxValue) <= 0 : false)) {
      // Inline function 'kotlin.error' call
      var tmp1_error = "System property '" + propertyName + "' should be in range " + toString(minValue) + '..' + toString(maxValue) + ", but is '" + toString(parsed) + "'";
      throw IllegalStateException_init_$Create$(toString(tmp1_error));
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$glj1hg(completion, e);
        tmp_1 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp_0, tmp$ret$0);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$glj1hg(fatalCompletion, e);
        tmp_1 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable_1(_this__u8e3s4, completion) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted_0(_this__u8e3s4, completion));
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp_0, tmp$ret$0);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$glj1hg(completion, e);
        tmp_1 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function runSafely(completion, block) {
    try {
      block();
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$glj1hg(completion, e);
      } else {
        throw $p;
      }
    }
  }
  function dispatcherFailure(completion, e) {
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    var tmp0_failure = Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.resumeWith_s3a3yh_k$(tmp$ret$0);
    throw e;
  }
  function dispatcherFailure$accessor$glj1hg(completion, e) {
    return dispatcherFailure(completion, e);
  }
  function startUndispatchedOrReturn(_this__u8e3s4, receiver, block) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = block;
        var a = tmp$ret$0;
        tmp$ret$1 = typeof a === 'function' ? a(receiver, _this__u8e3s4) : block.invoke_5zdxxo_k$(receiver, _this__u8e3s4);
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.makeCompletingOnce_b13xy2_k$(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        var tmp0__anonymous__q1qw7t = state.get_cause_iplhs0_k$();
        tmp$ret$4 = true;
        if (tmp$ret$4) {
          throw recoverStackTrace(state.get_cause_iplhs0_k$(), _this__u8e3s4.get_uCont_iyyiam_k$());
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.get_cause_iplhs0_k$(), _this__u8e3s4.get_uCont_iyyiam_k$());
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$3 = tmp_1;
    }
    return tmp$ret$3;
  }
  function startUndispatchedOrReturnIgnoreTimeout(_this__u8e3s4, receiver, block) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturnIgnoreTimeout.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = block;
        var a = tmp$ret$0;
        tmp$ret$1 = typeof a === 'function' ? a(receiver, _this__u8e3s4) : block.invoke_5zdxxo_k$(receiver, _this__u8e3s4);
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.makeCompletingOnce_b13xy2_k$(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturnIgnoreTimeout.<anonymous>' call
        var tmp0__anonymous__q1qw7t = state.get_cause_iplhs0_k$();
        var tmp_3;
        if (tmp0__anonymous__q1qw7t instanceof TimeoutCancellationException) {
          tmp_3 = tmp0__anonymous__q1qw7t.get_coroutine_cnpmtt_k$() === _this__u8e3s4;
        } else {
          tmp_3 = false;
        }
        tmp$ret$4 = !tmp_3;
        if (tmp$ret$4) {
          throw recoverStackTrace(state.get_cause_iplhs0_k$(), _this__u8e3s4.get_uCont_iyyiam_k$());
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.get_cause_iplhs0_k$(), _this__u8e3s4.get_uCont_iyyiam_k$());
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$3 = tmp_1;
    }
    return tmp$ret$3;
  }
  function startCoroutineUndispatched(_this__u8e3s4, completion) {
    var tmp$ret$8;
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      tmp$ret$0 = completion;
      var actualCompletion = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$5;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        var tmp0_withCoroutineContext = completion.get_context_h02k06_k$();
        var tmp$ret$3;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = _this__u8e3s4;
        var a = tmp$ret$1;
        tmp$ret$2 = typeof a === 'function' ? a(actualCompletion) : _this__u8e3s4.invoke_34if6s_k$(actualCompletion);
        tmp$ret$3 = tmp$ret$2;
        tmp$ret$4 = tmp$ret$3;
        tmp$ret$5 = tmp$ret$4;
        tmp = tmp$ret$5;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          var tmp$ret$7;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$6;
          // Inline function 'kotlin.Companion.failure' call
          var tmp0_failure = Companion_getInstance();
          tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(e));
          actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$6);
          tmp$ret$7 = Unit_getInstance();
          tmp$ret$8 = Unit_getInstance();
          break $l$block;
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        var tmp$ret$10;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp2_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlin.Companion.success' call
        var tmp1_success = Companion_getInstance();
        tmp$ret$9 = _Result___init__impl__xyqfz8(tmp2_resume);
        actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$9);
        tmp$ret$10 = Unit_getInstance();
      }
    }
  }
  function startCoroutineUndispatched_0(_this__u8e3s4, receiver, completion) {
    var tmp$ret$8;
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      tmp$ret$0 = completion;
      var actualCompletion = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$5;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        var tmp0_withCoroutineContext = completion.get_context_h02k06_k$();
        var tmp$ret$3;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = _this__u8e3s4;
        var a = tmp$ret$1;
        tmp$ret$2 = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.invoke_5zdxxo_k$(receiver, actualCompletion);
        tmp$ret$3 = tmp$ret$2;
        tmp$ret$4 = tmp$ret$3;
        tmp$ret$5 = tmp$ret$4;
        tmp = tmp$ret$5;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          var tmp$ret$7;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$6;
          // Inline function 'kotlin.Companion.failure' call
          var tmp0_failure = Companion_getInstance();
          tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(e));
          actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$6);
          tmp$ret$7 = Unit_getInstance();
          tmp$ret$8 = Unit_getInstance();
          break $l$block;
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        var tmp$ret$10;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp2_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlin.Companion.success' call
        var tmp1_success = Companion_getInstance();
        tmp$ret$9 = _Result___init__impl__xyqfz8(tmp2_resume);
        actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$9);
        tmp$ret$10 = Unit_getInstance();
      }
    }
  }
  function undispatchedResult(_this__u8e3s4, shouldThrow, startBlock) {
    var tmp;
    try {
      tmp = startBlock();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        tmp_0 = new CompletedExceptionally(e);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var result = tmp;
    if (result === get_COROUTINE_SUSPENDED())
      return get_COROUTINE_SUSPENDED();
    var state = _this__u8e3s4.makeCompletingOnce_b13xy2_k$(result);
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return get_COROUTINE_SUSPENDED();
    var tmp_1;
    if (state instanceof CompletedExceptionally) {
      var tmp_2;
      if (shouldThrow(state.get_cause_iplhs0_k$())) {
        throw recoverStackTrace(state.get_cause_iplhs0_k$(), _this__u8e3s4.get_uCont_iyyiam_k$());
      } else {
        if (result instanceof CompletedExceptionally) {
          throw recoverStackTrace(result.get_cause_iplhs0_k$(), _this__u8e3s4.get_uCont_iyyiam_k$());
        } else {
          tmp_2 = result;
        }
      }
      tmp_1 = tmp_2;
    } else {
      tmp_1 = unboxState(state);
    }
    return tmp_1;
  }
  function startDirect(completion, block) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
    tmp$ret$0 = completion;
    var actualCompletion = tmp$ret$0;
    var tmp;
    try {
      tmp = block(actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        var tmp$ret$2;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp$ret$1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance();
        tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(e));
        actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$1);
        tmp$ret$2 = Unit_getInstance();
        return Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var value = tmp;
    if (!(value === get_COROUTINE_SUSPENDED())) {
      var tmp$ret$4;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp2_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.success' call
      var tmp1_success = Companion_getInstance();
      tmp$ret$3 = _Result___init__impl__xyqfz8(tmp2_resume);
      actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$3);
      tmp$ret$4 = Unit_getInstance();
    }
  }
  function onTimeout_0(_this__u8e3s4, timeMillis, block) {
    return _this__u8e3s4.invoke_l7qztr_k$((new OnTimeout(timeMillis)).get_selectClause_ul7s9g_k$(), block);
  }
  function _get_timeMillis__1zae14($this) {
    return $this.timeMillis_1;
  }
  function register($this, select, ignoredParam) {
    if ($this.timeMillis_1.compareTo_n4fqi2_k$(new Long(0, 0)) <= 0) {
      select.selectInRegistrationPhase_lcwf8x_k$(Unit_getInstance());
      return Unit_getInstance();
    }
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.Runnable' call
    tmp$ret$0 = new _no_name_provided__qut3iv_7(select, $this);
    var action = tmp$ret$0;
    if (select instanceof SelectImplementation)
      select;
    else
      THROW_CCE();
    var context = select.get_context_h02k06_k$();
    var disposableHandle = get_delay(context).invokeOnTimeout_sx2bqq_k$($this.timeMillis_1, action, context);
    select.disposeOnCompletion_c9dn6_k$(disposableHandle);
  }
  function OnTimeout$register$ref() {
    var l = function (p0, p1, p2) {
      register(p0, p1, p2);
      return Unit_getInstance();
    };
    l.callableName = 'register';
    return l;
  }
  function _no_name_provided__qut3iv_7($select, this$0) {
    this.$select_1 = $select;
    this.this$0__1 = this$0;
  }
  protoOf(_no_name_provided__qut3iv_7).run_mw4iiu_k$ = function () {
    // Inline function 'kotlinx.coroutines.selects.OnTimeout.register.<anonymous>' call
    this.$select_1.trySelect_fbege0_k$(this.this$0__1, Unit_getInstance());
  };
  function OnTimeout(timeMillis) {
    this.timeMillis_1 = timeMillis;
  }
  protoOf(OnTimeout).get_selectClause_ul7s9g_k$ = function () {
    var tmp = OnTimeout$register$ref();
    return new SelectClause0Impl(this, typeof tmp === 'function' ? tmp : THROW_CCE());
  };
  function get_DUMMY_PROCESS_RESULT_FUNCTION() {
    _init_properties_Select_kt__zhm2jg();
    return DUMMY_PROCESS_RESULT_FUNCTION;
  }
  var DUMMY_PROCESS_RESULT_FUNCTION;
  function get_STATE_REG() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_REG;
  }
  var STATE_REG;
  function get_STATE_COMPLETED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_COMPLETED;
  }
  var STATE_COMPLETED;
  function get_STATE_CANCELLED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_CANCELLED;
  }
  var STATE_CANCELLED;
  function get_NO_RESULT() {
    _init_properties_Select_kt__zhm2jg();
    return NO_RESULT;
  }
  var NO_RESULT;
  function get_PARAM_CLAUSE_0() {
    _init_properties_Select_kt__zhm2jg();
    return PARAM_CLAUSE_0;
  }
  var PARAM_CLAUSE_0;
  function SelectClause0() {
  }
  function SelectClause0Impl(clauseObject, regFunc, onCancellationConstructor) {
    onCancellationConstructor = onCancellationConstructor === VOID ? null : onCancellationConstructor;
    this.clauseObject_1 = clauseObject;
    this.regFunc_1 = regFunc;
    this.onCancellationConstructor_1 = onCancellationConstructor;
    this.processResFunc_1 = get_DUMMY_PROCESS_RESULT_FUNCTION();
  }
  protoOf(SelectClause0Impl).get_clauseObject_ilo9nb_k$ = function () {
    return this.clauseObject_1;
  };
  protoOf(SelectClause0Impl).get_regFunc_j7ktjj_k$ = function () {
    return this.regFunc_1;
  };
  protoOf(SelectClause0Impl).get_onCancellationConstructor_4kgej5_k$ = function () {
    return this.onCancellationConstructor_1;
  };
  protoOf(SelectClause0Impl).get_processResFunc_ky2xuq_k$ = function () {
    return this.processResFunc_1;
  };
  function SelectInstance() {
  }
  function SelectClause1() {
  }
  function SelectClause1Impl(clauseObject, regFunc, processResFunc, onCancellationConstructor) {
    onCancellationConstructor = onCancellationConstructor === VOID ? null : onCancellationConstructor;
    this.clauseObject_1 = clauseObject;
    this.regFunc_1 = regFunc;
    this.processResFunc_1 = processResFunc;
    this.onCancellationConstructor_1 = onCancellationConstructor;
  }
  protoOf(SelectClause1Impl).get_clauseObject_ilo9nb_k$ = function () {
    return this.clauseObject_1;
  };
  protoOf(SelectClause1Impl).get_regFunc_j7ktjj_k$ = function () {
    return this.regFunc_1;
  };
  protoOf(SelectClause1Impl).get_processResFunc_ky2xuq_k$ = function () {
    return this.processResFunc_1;
  };
  protoOf(SelectClause1Impl).get_onCancellationConstructor_4kgej5_k$ = function () {
    return this.onCancellationConstructor_1;
  };
  function _get_regFunc__n7mheh($this) {
    return $this.regFunc_1;
  }
  function _get_processResFunc__6f7ziu($this) {
    return $this.processResFunc_1;
  }
  function _get_param__cy9u70($this) {
    return $this.param_1;
  }
  function _get_block__jewopo_0($this) {
    return $this.block_1;
  }
  function $invokeBlockCOROUTINE$28(_this__u8e3s4, argument, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.argument_1 = argument;
  }
  protoOf($invokeBlockCOROUTINE$28).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            this.block0__1 = this._this__u8e3s4__1.block_1;
            if (this._this__u8e3s4__1.param_1 === get_PARAM_CLAUSE_0()) {
              var tmp_0 = this.block0__1;
              if (isSuspendFunction(tmp_0, 0))
                tmp_0;
              else
                THROW_CCE();
              this.set_state_a96kl8_k$(2);
              suspendResult = this.block0__1(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.block0__1;
              if (isSuspendFunction(tmp_1, 1))
                tmp_1;
              else
                THROW_CCE();
              this.set_state_a96kl8_k$(1);
              suspendResult = this.block0__1(this.argument_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.WHEN_RESULT1__1 = suspendResult;
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 2:
            this.WHEN_RESULT1__1 = suspendResult;
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            return this.WHEN_RESULT1__1;
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
  function _get_state__b8zcm8_0($this) {
    return $this.state_1;
  }
  function _get_inRegistrationPhase__dkcj1o($this) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = $this.state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.selects.SelectImplementation.<get-inRegistrationPhase>.<anonymous>' call
    var tmp;
    if (tmp0_let === get_STATE_REG()) {
      tmp = true;
    } else {
      tmp = isInterface(tmp0_let, List);
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function _get_isSelected__uy0hmu($this) {
    var tmp = $this.state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    return tmp instanceof ClauseData;
  }
  function _get_isCancelled__nhbn6y($this) {
    return $this.state_1.get_kotlinx$atomicfu$value_vi2am5_k$() === get_STATE_CANCELLED();
  }
  function _set_clauses__1890kh($this, _set____db54di) {
    $this.clauses_1 = _set____db54di;
  }
  function _get_clauses__odz9sj($this) {
    return $this.clauses_1;
  }
  function _set_disposableHandleOrSegment__6b4y0z($this, _set____db54di) {
    $this.disposableHandleOrSegment_1 = _set____db54di;
  }
  function _get_disposableHandleOrSegment__8jzgzb($this) {
    return $this.disposableHandleOrSegment_1;
  }
  function _set_indexInSegment__2cjdhh($this, _set____db54di) {
    $this.indexInSegment_1 = _set____db54di;
  }
  function _get_indexInSegment__n6k2jz($this) {
    return $this.indexInSegment_1;
  }
  function _set_internalResult__q6gt25($this, _set____db54di) {
    $this.internalResult_1 = _set____db54di;
  }
  function _get_internalResult__jbjsvj($this) {
    return $this.internalResult_1;
  }
  function doSelectSuspend($this, $completion) {
    var tmp = new $doSelectSuspendCOROUTINE$25($this, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function checkClauseObject($this, clauseObject) {
    var clauses = ensureNotNull($this.clauses_1);
    // Inline function 'kotlin.check' call
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.none' call
      var tmp;
      if (isInterface(clauses, Collection)) {
        tmp = clauses.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = clauses.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.selects.SelectImplementation.checkClauseObject.<anonymous>' call
        tmp$ret$1 = element.clauseObject_1 === clauseObject;
        if (tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    var tmp0_check = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.selects.SelectImplementation.checkClauseObject.<anonymous>' call
      tmp$ret$2 = 'Cannot use select clauses on the same object: ' + toString(clauseObject);
      var message = tmp$ret$2;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function waitUntilSelected($this, $completion) {
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.initCancellability_sh6jkn_k$();
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.selects.SelectImplementation.waitUntilSelected.<anonymous>' call
      // Inline function 'kotlinx.atomicfu.loop' call
      var tmp0_loop = $this.state_1;
      while (true) {
        // Inline function 'kotlinx.coroutines.selects.SelectImplementation.waitUntilSelected.<anonymous>.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
        if (tmp1__anonymous__uwfjfc === get_STATE_REG()) {
          if ($this.state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, cancellable)) {
            var tmp$ret$1;
            // Inline function 'kotlinx.coroutines.asHandler' call
            var tmp$ret$0;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$0 = $this;
            tmp$ret$1 = tmp$ret$0;
            cancellable.invokeOnCancellation_yygv6h_k$(tmp$ret$1);
            tmp$ret$2 = Unit_getInstance();
            break $l$block_0;
          }
        } else {
          if (isInterface(tmp1__anonymous__uwfjfc, List)) {
            if ($this.state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, get_STATE_REG())) {
              if (isInterface(tmp1__anonymous__uwfjfc, List))
                tmp1__anonymous__uwfjfc;
              else
                THROW_CCE();
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_forEach = tmp1__anonymous__uwfjfc;
              var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
              while (tmp0_iterator.hasNext_bitz1p_k$()) {
                var element = tmp0_iterator.next_20eer_k$();
                // Inline function 'kotlinx.coroutines.selects.SelectImplementation.waitUntilSelected.<anonymous>.<anonymous>.<anonymous>' call
                reregisterClause($this, element);
              }
            }
          } else {
            if (tmp1__anonymous__uwfjfc instanceof ClauseData) {
              cancellable.resume_l1w5in_k$(Unit_getInstance(), tmp1__anonymous__uwfjfc.createOnCancellationAction_jtzpl4_k$($this, $this.internalResult_1));
              tmp$ret$2 = Unit_getInstance();
              break $l$block_0;
            } else {
              var tmp1_error = 'unexpected state: ' + toString(tmp1__anonymous__uwfjfc);
              throw IllegalStateException_init_$Create$(toString(tmp1_error));
            }
          }
        }
      }
    }
    tmp$ret$3 = cancellable.getResult_clfhg3_k$();
    var tmp0 = tmp$ret$3;
    return tmp0;
  }
  function reregisterClause($this, clauseObject) {
    var clause = ensureNotNull(findClause($this, clauseObject));
    clause.disposableHandleOrSegment_1 = null;
    clause.indexInSegment_1 = -1;
    $this.register_25jldt_k$(clause, true);
  }
  function trySelectInternal($this, clauseObject, internalResult) {
    $l$loop: while (true) {
      var curState = $this.state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (isInterface(curState, CancellableContinuation)) {
        var tmp0_elvis_lhs = findClause($this, clauseObject);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var clause = tmp;
        var onCancellation = clause.createOnCancellationAction_jtzpl4_k$($this, internalResult);
        if ($this.state_1.atomicfu$compareAndSet(curState, clause)) {
          var cont = isInterface(curState, CancellableContinuation) ? curState : THROW_CCE();
          $this.internalResult_1 = internalResult;
          if (tryResume_1(cont, onCancellation))
            return 0;
          $this.internalResult_1 = null;
          return 2;
        }
      } else {
        var tmp_0;
        if (equals(curState, get_STATE_COMPLETED())) {
          tmp_0 = true;
        } else {
          tmp_0 = curState instanceof ClauseData;
        }
        if (tmp_0)
          return 3;
        else {
          if (equals(curState, get_STATE_CANCELLED()))
            return 2;
          else {
            if (equals(curState, get_STATE_REG())) {
              if ($this.state_1.atomicfu$compareAndSet(curState, listOf_0(clauseObject)))
                return 1;
            } else {
              if (isInterface(curState, List)) {
                if ($this.state_1.atomicfu$compareAndSet(curState, plus_0(curState, clauseObject)))
                  return 1;
              } else {
                var tmp0_error = 'Unexpected state: ' + toString(curState);
                throw IllegalStateException_init_$Create$(toString(tmp0_error));
              }
            }
          }
        }
      }
    }
  }
  function findClause($this, clauseObject) {
    var tmp0_elvis_lhs = $this.clauses_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = clauses.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.selects.SelectImplementation.findClause.<anonymous>' call
        tmp$ret$0 = element.clauseObject_1 === clauseObject;
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    tmp$ret$2 = tmp$ret$1;
    var tmp1_elvis_lhs = tmp$ret$2;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp0_error = 'Clause with object ' + toString(clauseObject) + ' is not found';
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function complete($this, $completion) {
    var tmp = new $completeCOROUTINE$26($this, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function processResultAndInvokeBlockRecoveringException($this, clause, internalResult, $completion) {
    var tmp = new $processResultAndInvokeBlockRecoveringExceptionCOROUTINE$27($this, clause, internalResult, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function cleanup($this, selectedClause) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = $this.clauses_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = clauses.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlinx.coroutines.selects.SelectImplementation.cleanup.<anonymous>' call
      if (!(element === selectedClause)) {
        element.dispose_3n44we_k$();
      }
    }
    $this.state_1.set_kotlinx$atomicfu$value_koguff_k$(get_STATE_COMPLETED());
    $this.internalResult_1 = get_NO_RESULT();
    $this.clauses_1 = null;
  }
  function ClauseData(clauseObject, regFunc, processResFunc, param, block, onCancellationConstructor) {
    this.clauseObject_1 = clauseObject;
    this.regFunc_1 = regFunc;
    this.processResFunc_1 = processResFunc;
    this.param_1 = param;
    this.block_1 = block;
    this.onCancellationConstructor_1 = onCancellationConstructor;
    this.disposableHandleOrSegment_1 = null;
    this.indexInSegment_1 = -1;
  }
  protoOf(ClauseData).get_clauseObject_ilo9nb_k$ = function () {
    return this.clauseObject_1;
  };
  protoOf(ClauseData).get_onCancellationConstructor_4kgej5_k$ = function () {
    return this.onCancellationConstructor_1;
  };
  protoOf(ClauseData).set_disposableHandleOrSegment_lf6uzp_k$ = function (_set____db54di) {
    this.disposableHandleOrSegment_1 = _set____db54di;
  };
  protoOf(ClauseData).get_disposableHandleOrSegment_te0n1d_k$ = function () {
    return this.disposableHandleOrSegment_1;
  };
  protoOf(ClauseData).set_indexInSegment_d6jqif_k$ = function (_set____db54di) {
    this.indexInSegment_1 = _set____db54di;
  };
  protoOf(ClauseData).get_indexInSegment_ra2xy3_k$ = function () {
    return this.indexInSegment_1;
  };
  protoOf(ClauseData).tryRegisterAsWaiter_8fq9mc_k$ = function (select) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    this.regFunc_1(this.clauseObject_1, select, this.param_1);
    return select.internalResult_1 === get_NO_RESULT();
  };
  protoOf(ClauseData).processResult_nsa4yb_k$ = function (result) {
    return this.processResFunc_1(this.clauseObject_1, this.param_1, result);
  };
  protoOf(ClauseData).invokeBlock_3ht1wi_k$ = function (argument, $completion) {
    var tmp = new $invokeBlockCOROUTINE$28(this, argument, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ClauseData).dispose_3n44we_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.disposableHandleOrSegment_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.selects.ClauseData.dispose.<anonymous>' call
    var tmp;
    if (tmp0_with instanceof Segment) {
      tmp0_with.onCancellation_8vow63_k$(this.indexInSegment_1, null);
      tmp = Unit_getInstance();
    } else {
      var tmp0_safe_receiver = (!(tmp0_with == null) ? isInterface(tmp0_with, DisposableHandle) : false) ? tmp0_with : null;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        tmp0_safe_receiver.dispose_3n44we_k$();
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
  };
  protoOf(ClauseData).createOnCancellationAction_jtzpl4_k$ = function (select, internalResult) {
    var tmp0_safe_receiver = this.onCancellationConstructor_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver(select, this.param_1, internalResult);
  };
  function $doSelectCOROUTINE$24(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($doSelectCOROUTINE$24).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            if (_get_isSelected__uy0hmu(this._this__u8e3s4__1)) {
              this.set_state_a96kl8_k$(2);
              suspendResult = complete(this._this__u8e3s4__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(1);
              suspendResult = doSelectSuspend(this._this__u8e3s4__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.WHEN_RESULT0__1 = suspendResult;
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 2:
            this.WHEN_RESULT0__1 = suspendResult;
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            return this.WHEN_RESULT0__1;
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
  function $doSelectSuspendCOROUTINE$25(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($doSelectSuspendCOROUTINE$25).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = waitUntilSelected(this._this__u8e3s4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_a96kl8_k$(2);
            suspendResult = complete(this._this__u8e3s4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function $completeCOROUTINE$26(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($completeCOROUTINE$26).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            var tmp_0 = this;
            var tmp_1 = this._this__u8e3s4__1.state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
            tmp_0.selectedClause0__1 = tmp_1 instanceof ClauseData ? tmp_1 : THROW_CCE();
            this.internalResult1__1 = this._this__u8e3s4__1.internalResult_1;
            cleanup(this._this__u8e3s4__1, this.selectedClause0__1);
            if (!get_RECOVER_STACK_TRACES()) {
              this.blockArgument3__1 = this.selectedClause0__1.processResult_nsa4yb_k$(this.internalResult1__1);
              this.set_state_a96kl8_k$(2);
              suspendResult = this.selectedClause0__1.invokeBlock_3ht1wi_k$(this.blockArgument3__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(1);
              suspendResult = processResultAndInvokeBlockRecoveringException(this._this__u8e3s4__1, this.selectedClause0__1, this.internalResult1__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.WHEN_RESULT2__1 = suspendResult;
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 2:
            this.WHEN_RESULT2__1 = suspendResult;
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            return this.WHEN_RESULT2__1;
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
  function $processResultAndInvokeBlockRecoveringExceptionCOROUTINE$27(_this__u8e3s4, clause, internalResult, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.clause_1 = clause;
    this.internalResult_1 = internalResult;
  }
  protoOf($processResultAndInvokeBlockRecoveringExceptionCOROUTINE$27).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_exceptionState_s9sevl_k$(2);
            this.blockArgument1__1 = this.clause_1.processResult_nsa4yb_k$(this.internalResult_1);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.clause_1.invokeBlock_3ht1wi_k$(this.blockArgument1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.TRY_RESULT0__1 = suspendResult;
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Error) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_1 = this;
              throw e;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_s9sevl_k$(3);
            return this.TRY_RESULT0__1;
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
  function SelectImplementation(context) {
    CancelHandler.call(this);
    this.context_1 = context;
    this.state_1 = atomic$ref$1(get_STATE_REG());
    this.clauses_1 = ArrayList_init_$Create$(2);
    this.disposableHandleOrSegment_1 = null;
    this.indexInSegment_1 = -1;
    this.internalResult_1 = get_NO_RESULT();
  }
  protoOf(SelectImplementation).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(SelectImplementation).doSelect_cnaj6b_k$ = function ($completion) {
    var tmp = new $doSelectCOROUTINE$24(this, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SelectImplementation).invoke_l7qztr_k$ = function (_this__u8e3s4, block) {
    return this.register$default_wh0lbo_k$(new ClauseData(_this__u8e3s4.get_clauseObject_ilo9nb_k$(), _this__u8e3s4.get_regFunc_j7ktjj_k$(), _this__u8e3s4.get_processResFunc_ky2xuq_k$(), get_PARAM_CLAUSE_0(), block, _this__u8e3s4.get_onCancellationConstructor_4kgej5_k$()));
  };
  protoOf(SelectImplementation).invoke_b55i6y_k$ = function (_this__u8e3s4, block) {
    return this.register$default_wh0lbo_k$(new ClauseData(_this__u8e3s4.get_clauseObject_ilo9nb_k$(), _this__u8e3s4.get_regFunc_j7ktjj_k$(), _this__u8e3s4.get_processResFunc_ky2xuq_k$(), null, block, _this__u8e3s4.get_onCancellationConstructor_4kgej5_k$()));
  };
  protoOf(SelectImplementation).invoke_17htpp_k$ = function (_this__u8e3s4, param, block) {
    return this.register$default_wh0lbo_k$(new ClauseData(_this__u8e3s4.get_clauseObject_ilo9nb_k$(), _this__u8e3s4.get_regFunc_j7ktjj_k$(), _this__u8e3s4.get_processResFunc_ky2xuq_k$(), param, block, _this__u8e3s4.get_onCancellationConstructor_4kgej5_k$()));
  };
  protoOf(SelectImplementation).register_25jldt_k$ = function (_this__u8e3s4, reregister) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.selects.SelectImplementation.register.<anonymous>' call
    tmp$ret$0 = tmp0_let instanceof ClauseData;
    tmp$ret$1 = tmp$ret$0;
    if (tmp$ret$1)
      return Unit_getInstance();
    if (!reregister) {
      checkClauseObject(this, _this__u8e3s4.clauseObject_1);
    }
    if (_this__u8e3s4.tryRegisterAsWaiter_8fq9mc_k$(this)) {
      if (!reregister) {
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp1_plusAssign = ensureNotNull(this.clauses_1);
        tmp1_plusAssign.add_1j60pz_k$(_this__u8e3s4);
      }
      _this__u8e3s4.disposableHandleOrSegment_1 = this.disposableHandleOrSegment_1;
      _this__u8e3s4.indexInSegment_1 = this.indexInSegment_1;
      this.disposableHandleOrSegment_1 = null;
      this.indexInSegment_1 = -1;
    } else {
      this.state_1.set_kotlinx$atomicfu$value_koguff_k$(_this__u8e3s4);
    }
  };
  protoOf(SelectImplementation).register$default_wh0lbo_k$ = function (_this__u8e3s4, reregister, $super) {
    reregister = reregister === VOID ? false : reregister;
    var tmp;
    if ($super === VOID) {
      this.register_25jldt_k$(_this__u8e3s4, reregister);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.register_25jldt_k$.call(this, _this__u8e3s4, reregister);
    }
    return tmp;
  };
  protoOf(SelectImplementation).disposeOnCompletion_c9dn6_k$ = function (disposableHandle) {
    this.disposableHandleOrSegment_1 = disposableHandle;
  };
  protoOf(SelectImplementation).invokeOnCancellation_gome2h_k$ = function (segment, index) {
    this.disposableHandleOrSegment_1 = segment;
    this.indexInSegment_1 = index;
  };
  protoOf(SelectImplementation).selectInRegistrationPhase_lcwf8x_k$ = function (internalResult) {
    this.internalResult_1 = internalResult;
  };
  protoOf(SelectImplementation).trySelect_fbege0_k$ = function (clauseObject, result) {
    return trySelectInternal(this, clauseObject, result) === 0;
  };
  protoOf(SelectImplementation).trySelectDetailed_t8yc08_k$ = function (clauseObject, result) {
    return TrySelectDetailedResult_0(trySelectInternal(this, clauseObject, result));
  };
  protoOf(SelectImplementation).invoke_7fb7sc_k$ = function (cause) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp0_update = this.state_1;
      while (true) {
        var cur = tmp0_update.get_kotlinx$atomicfu$value_vi2am5_k$();
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.selects.SelectImplementation.invoke.<anonymous>' call
        if (cur === get_STATE_COMPLETED())
          return Unit_getInstance();
        tmp$ret$0 = get_STATE_CANCELLED();
        var upd = tmp$ret$0;
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = Unit_getInstance();
          break $l$block;
        }
      }
    }
    var tmp0_elvis_lhs = this.clauses_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = clauses.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlinx.coroutines.selects.SelectImplementation.invoke.<anonymous>' call
      element.dispose_3n44we_k$();
    }
    this.internalResult_1 = get_NO_RESULT();
    this.clauses_1 = null;
  };
  protoOf(SelectImplementation).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  var TrySelectDetailedResult_SUCCESSFUL_instance;
  var TrySelectDetailedResult_REREGISTER_instance;
  var TrySelectDetailedResult_CANCELLED_instance;
  var TrySelectDetailedResult_ALREADY_SELECTED_instance;
  function values_1() {
    return [TrySelectDetailedResult_SUCCESSFUL_getInstance(), TrySelectDetailedResult_REREGISTER_getInstance(), TrySelectDetailedResult_CANCELLED_getInstance(), TrySelectDetailedResult_ALREADY_SELECTED_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'SUCCESSFUL':
        return TrySelectDetailedResult_SUCCESSFUL_getInstance();
      case 'REREGISTER':
        return TrySelectDetailedResult_REREGISTER_getInstance();
      case 'CANCELLED':
        return TrySelectDetailedResult_CANCELLED_getInstance();
      case 'ALREADY_SELECTED':
        return TrySelectDetailedResult_ALREADY_SELECTED_getInstance();
      default:
        TrySelectDetailedResult_initEntries();
        THROW_ISE();
        break;
    }
  }
  var TrySelectDetailedResult_entriesInitialized;
  function TrySelectDetailedResult_initEntries() {
    if (TrySelectDetailedResult_entriesInitialized)
      return Unit_getInstance();
    TrySelectDetailedResult_entriesInitialized = true;
    TrySelectDetailedResult_SUCCESSFUL_instance = new TrySelectDetailedResult('SUCCESSFUL', 0);
    TrySelectDetailedResult_REREGISTER_instance = new TrySelectDetailedResult('REREGISTER', 1);
    TrySelectDetailedResult_CANCELLED_instance = new TrySelectDetailedResult('CANCELLED', 2);
    TrySelectDetailedResult_ALREADY_SELECTED_instance = new TrySelectDetailedResult('ALREADY_SELECTED', 3);
  }
  function TrySelectDetailedResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SelectClause2() {
  }
  function SelectClause2Impl(clauseObject, regFunc, processResFunc, onCancellationConstructor) {
    onCancellationConstructor = onCancellationConstructor === VOID ? null : onCancellationConstructor;
    this.clauseObject_1 = clauseObject;
    this.regFunc_1 = regFunc;
    this.processResFunc_1 = processResFunc;
    this.onCancellationConstructor_1 = onCancellationConstructor;
  }
  protoOf(SelectClause2Impl).get_clauseObject_ilo9nb_k$ = function () {
    return this.clauseObject_1;
  };
  protoOf(SelectClause2Impl).get_regFunc_j7ktjj_k$ = function () {
    return this.regFunc_1;
  };
  protoOf(SelectClause2Impl).get_processResFunc_ky2xuq_k$ = function () {
    return this.processResFunc_1;
  };
  protoOf(SelectClause2Impl).get_onCancellationConstructor_4kgej5_k$ = function () {
    return this.onCancellationConstructor_1;
  };
  function SelectClause() {
  }
  function SelectInstanceInternal() {
  }
  function SelectBuilder() {
  }
  function get_TRY_SELECT_SUCCESSFUL() {
    return TRY_SELECT_SUCCESSFUL;
  }
  var TRY_SELECT_SUCCESSFUL;
  function TrySelectDetailedResult_0(trySelectInternalResult) {
    _init_properties_Select_kt__zhm2jg();
    var tmp0_subject = trySelectInternalResult;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = TrySelectDetailedResult_SUCCESSFUL_getInstance();
        break;
      case 1:
        tmp = TrySelectDetailedResult_REREGISTER_getInstance();
        break;
      case 2:
        tmp = TrySelectDetailedResult_CANCELLED_getInstance();
        break;
      case 3:
        tmp = TrySelectDetailedResult_ALREADY_SELECTED_getInstance();
        break;
      default:
        var tmp0_error = 'Unexpected internal result: ' + trySelectInternalResult;
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
    return tmp;
  }
  function tryResume_1(_this__u8e3s4, onCancellation) {
    _init_properties_Select_kt__zhm2jg();
    var tmp0_elvis_lhs = _this__u8e3s4.tryResume_93jc0s_k$(Unit_getInstance(), null, onCancellation);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp;
    _this__u8e3s4.completeResume_fu4ex_k$(token);
    return true;
  }
  function get_TRY_SELECT_CANCELLED() {
    return TRY_SELECT_CANCELLED;
  }
  var TRY_SELECT_CANCELLED;
  function get_TRY_SELECT_ALREADY_SELECTED() {
    return TRY_SELECT_ALREADY_SELECTED;
  }
  var TRY_SELECT_ALREADY_SELECTED;
  function get_TRY_SELECT_REREGISTER() {
    return TRY_SELECT_REREGISTER;
  }
  var TRY_SELECT_REREGISTER;
  function DUMMY_PROCESS_RESULT_FUNCTION$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
    _init_properties_Select_kt__zhm2jg();
    return null;
  }
  function TrySelectDetailedResult_SUCCESSFUL_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_SUCCESSFUL_instance;
  }
  function TrySelectDetailedResult_REREGISTER_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_REREGISTER_instance;
  }
  function TrySelectDetailedResult_CANCELLED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_CANCELLED_instance;
  }
  function TrySelectDetailedResult_ALREADY_SELECTED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_ALREADY_SELECTED_instance;
  }
  var properties_initialized_Select_kt_7rpl36;
  function _init_properties_Select_kt__zhm2jg() {
    if (properties_initialized_Select_kt_7rpl36) {
    } else {
      properties_initialized_Select_kt_7rpl36 = true;
      DUMMY_PROCESS_RESULT_FUNCTION = DUMMY_PROCESS_RESULT_FUNCTION$lambda;
      STATE_REG = new Symbol('STATE_REG');
      STATE_COMPLETED = new Symbol('STATE_COMPLETED');
      STATE_CANCELLED = new Symbol('STATE_CANCELLED');
      NO_RESULT = new Symbol('NO_RESULT');
      PARAM_CLAUSE_0 = new Symbol('PARAM_CLAUSE_0');
    }
  }
  function get_NO_OWNER() {
    _init_properties_Mutex_kt__jod56b();
    return NO_OWNER;
  }
  var NO_OWNER;
  function get_ON_LOCK_ALREADY_LOCKED_BY_OWNER() {
    _init_properties_Mutex_kt__jod56b();
    return ON_LOCK_ALREADY_LOCKED_BY_OWNER;
  }
  var ON_LOCK_ALREADY_LOCKED_BY_OWNER;
  function Mutex() {
  }
  function Mutex_0(locked) {
    locked = locked === VOID ? false : locked;
    _init_properties_Mutex_kt__jod56b();
    return new MutexImpl(locked);
  }
  function withLock(_this__u8e3s4, owner, action, $completion) {
    owner = owner === VOID ? null : owner;
    var tmp = new $withLockCOROUTINE$29(_this__u8e3s4, owner, action, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function MutexImpl$CancellableContinuationWithOwner$tryResume$lambda(this$0, this$1) {
    return function (it) {
      this$0.owner_1.set_kotlinx$atomicfu$value_koguff_k$(this$1.owner_1);
      this$0.unlock_uksyr8_k$(this$1.owner_1);
      return Unit_getInstance();
    };
  }
  function MutexImpl$CancellableContinuationWithOwner$resume$lambda(this$0, this$1) {
    return function (it) {
      this$0.unlock_uksyr8_k$(this$1.owner_1);
      return Unit_getInstance();
    };
  }
  function _get_owner__d3agea($this) {
    return $this.owner_1;
  }
  function _get_onSelectCancellationUnlockConstructor__xa87eh($this) {
    return $this.onSelectCancellationUnlockConstructor_1;
  }
  function lockSuspend($this, owner, $completion) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    try {
      // Inline function 'kotlinx.coroutines.sync.MutexImpl.lockSuspend.<anonymous>' call
      var contWithOwner = new CancellableContinuationWithOwner($this, cancellable, owner);
      $this.acquireCont(contWithOwner);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.releaseClaimedReusableContinuation_4y1z8b_k$();
        throw e;
      } else {
        throw $p;
      }
    }
    tmp$ret$0 = cancellable.getResult_clfhg3_k$();
    var tmp0 = tmp$ret$0;
    return tmp0;
  }
  function tryLockImpl($this, owner) {
    $l$loop: while (true) {
      if ($this.tryAcquire_4pp2ed_k$()) {
        // Inline function 'kotlinx.coroutines.assert' call
        $this.owner_1.set_kotlinx$atomicfu$value_koguff_k$(owner);
        return 0;
      } else {
        if (!(owner == null)) {
          if ($this.holdsLock_9pqa81_k$(owner))
            return 2;
          if (!$this.get_isLocked_w82zdp_k$())
            continue $l$loop;
        }
        return 1;
      }
    }
  }
  function CancellableContinuationWithOwner($outer, cont, owner) {
    this.$this_1 = $outer;
    this.cont_1 = cont;
    this.owner_1 = owner;
  }
  protoOf(CancellableContinuationWithOwner).get_cont_wok86z_k$ = function () {
    return this.cont_1;
  };
  protoOf(CancellableContinuationWithOwner).get_owner_iwkx3e_k$ = function () {
    return this.owner_1;
  };
  protoOf(CancellableContinuationWithOwner).get_context_h02k06_k$ = function () {
    return this.cont_1.get_context_h02k06_k$();
  };
  protoOf(CancellableContinuationWithOwner).get_isActive_quafmh_k$ = function () {
    return this.cont_1.get_isActive_quafmh_k$();
  };
  protoOf(CancellableContinuationWithOwner).get_isCancelled_trk8pu_k$ = function () {
    return this.cont_1.get_isCancelled_trk8pu_k$();
  };
  protoOf(CancellableContinuationWithOwner).get_isCompleted_a6j6c8_k$ = function () {
    return this.cont_1.get_isCompleted_a6j6c8_k$();
  };
  protoOf(CancellableContinuationWithOwner).cancel_as6ug7_k$ = function (cause) {
    return this.cont_1.cancel_as6ug7_k$(cause);
  };
  protoOf(CancellableContinuationWithOwner).completeResume_fu4ex_k$ = function (token) {
    this.cont_1.completeResume_fu4ex_k$(token);
  };
  protoOf(CancellableContinuationWithOwner).initCancellability_sh6jkn_k$ = function () {
    this.cont_1.initCancellability_sh6jkn_k$();
  };
  protoOf(CancellableContinuationWithOwner).invokeOnCancellation_yygv6h_k$ = function (handler) {
    this.cont_1.invokeOnCancellation_yygv6h_k$(handler);
  };
  protoOf(CancellableContinuationWithOwner).resumeWith_k14j9i_k$ = function (result) {
    this.cont_1.resumeWith_s3a3yh_k$(result);
  };
  protoOf(CancellableContinuationWithOwner).resumeWith_s3a3yh_k$ = function (result) {
    return this.resumeWith_k14j9i_k$(result);
  };
  protoOf(CancellableContinuationWithOwner).tryResume_o6yqo5_k$ = function (value, idempotent) {
    return this.cont_1.tryResume_10oxem_k$(Unit_getInstance(), idempotent);
  };
  protoOf(CancellableContinuationWithOwner).tryResume_10oxem_k$ = function (value, idempotent) {
    return this.tryResume_o6yqo5_k$(value instanceof Unit ? value : THROW_CCE(), idempotent);
  };
  protoOf(CancellableContinuationWithOwner).tryResumeWithException_3icka9_k$ = function (exception) {
    return this.cont_1.tryResumeWithException_3icka9_k$(exception);
  };
  protoOf(CancellableContinuationWithOwner).resumeUndispatched_6go1bq_k$ = function (_this__u8e3s4, value) {
    this.cont_1.resumeUndispatched_re4yxz_k$(_this__u8e3s4, Unit_getInstance());
  };
  protoOf(CancellableContinuationWithOwner).resumeUndispatched_re4yxz_k$ = function (_this__u8e3s4, value) {
    return this.resumeUndispatched_6go1bq_k$(_this__u8e3s4, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(CancellableContinuationWithOwner).resumeUndispatchedWithException_xuy3rd_k$ = function (_this__u8e3s4, exception) {
    this.cont_1.resumeUndispatchedWithException_xuy3rd_k$(_this__u8e3s4, exception);
  };
  protoOf(CancellableContinuationWithOwner).invokeOnCancellation_gome2h_k$ = function (segment, index) {
    this.cont_1.invokeOnCancellation_gome2h_k$(segment, index);
  };
  protoOf(CancellableContinuationWithOwner).tryResume_23vxtz_k$ = function (value, idempotent, onCancellation) {
    // Inline function 'kotlinx.coroutines.assert' call
    var token = this.cont_1.tryResume_93jc0s_k$(Unit_getInstance(), idempotent, MutexImpl$CancellableContinuationWithOwner$tryResume$lambda(this.$this_1, this));
    if (!(token == null)) {
      // Inline function 'kotlinx.coroutines.assert' call
      this.$this_1.owner_1.set_kotlinx$atomicfu$value_koguff_k$(this.owner_1);
    }
    return token;
  };
  protoOf(CancellableContinuationWithOwner).tryResume_93jc0s_k$ = function (value, idempotent, onCancellation) {
    return this.tryResume_23vxtz_k$(value instanceof Unit ? value : THROW_CCE(), idempotent, onCancellation);
  };
  protoOf(CancellableContinuationWithOwner).resume_gzep9w_k$ = function (value, onCancellation) {
    // Inline function 'kotlinx.coroutines.assert' call
    this.$this_1.owner_1.set_kotlinx$atomicfu$value_koguff_k$(this.owner_1);
    this.cont_1.resume_l1w5in_k$(Unit_getInstance(), MutexImpl$CancellableContinuationWithOwner$resume$lambda(this.$this_1, this));
  };
  protoOf(CancellableContinuationWithOwner).resume_l1w5in_k$ = function (value, onCancellation) {
    return this.resume_gzep9w_k$(value instanceof Unit ? value : THROW_CCE(), onCancellation);
  };
  function SelectInstanceWithOwner($outer, select, owner) {
    this.$this_1 = $outer;
    this.select_1 = select;
    this.owner_1 = owner;
  }
  protoOf(SelectInstanceWithOwner).get_select_jfcyrp_k$ = function () {
    return this.select_1;
  };
  protoOf(SelectInstanceWithOwner).get_owner_iwkx3e_k$ = function () {
    return this.owner_1;
  };
  protoOf(SelectInstanceWithOwner).get_context_h02k06_k$ = function () {
    return this.select_1.get_context_h02k06_k$();
  };
  protoOf(SelectInstanceWithOwner).disposeOnCompletion_c9dn6_k$ = function (disposableHandle) {
    this.select_1.disposeOnCompletion_c9dn6_k$(disposableHandle);
  };
  protoOf(SelectInstanceWithOwner).invokeOnCancellation_gome2h_k$ = function (segment, index) {
    this.select_1.invokeOnCancellation_gome2h_k$(segment, index);
  };
  protoOf(SelectInstanceWithOwner).trySelect_fbege0_k$ = function (clauseObject, result) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.select_1.trySelect_fbege0_k$(clauseObject, result);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.sync.SelectInstanceWithOwner.trySelect.<anonymous>' call
    if (tmp0_also) {
      this.$this_1.owner_1.set_kotlinx$atomicfu$value_koguff_k$(this.owner_1);
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(SelectInstanceWithOwner).selectInRegistrationPhase_lcwf8x_k$ = function (internalResult) {
    // Inline function 'kotlinx.coroutines.assert' call
    this.$this_1.owner_1.set_kotlinx$atomicfu$value_koguff_k$(this.owner_1);
    this.select_1.selectInRegistrationPhase_lcwf8x_k$(internalResult);
  };
  function MutexImpl$onSelectCancellationUnlockConstructor$lambda$lambda(this$0, $owner) {
    return function (it) {
      this$0.unlock_uksyr8_k$($owner);
      return Unit_getInstance();
    };
  }
  function MutexImpl$onSelectCancellationUnlockConstructor$lambda(this$0) {
    return function (_anonymous_parameter_0__qggqh8, owner, _anonymous_parameter_2__qggqfi) {
      return MutexImpl$onSelectCancellationUnlockConstructor$lambda$lambda(this$0, owner);
    };
  }
  function MutexImpl$onLockRegFunction$ref() {
    var l = function (p0, p1, p2) {
      p0.onLockRegFunction_f2ghk7_k$(p1, p2);
      return Unit_getInstance();
    };
    l.callableName = 'onLockRegFunction';
    return l;
  }
  function MutexImpl$onLockProcessResult$ref() {
    var l = function (p0, p1, p2) {
      return p0.onLockProcessResult_btrkik_k$(p1, p2);
    };
    l.callableName = 'onLockProcessResult';
    return l;
  }
  function MutexImpl(locked) {
    SemaphoreImpl.call(this, 1, locked ? 1 : 0);
    this.owner_1 = atomic$ref$1(locked ? null : get_NO_OWNER());
    var tmp = this;
    tmp.onSelectCancellationUnlockConstructor_1 = MutexImpl$onSelectCancellationUnlockConstructor$lambda(this);
  }
  protoOf(MutexImpl).get_isLocked_w82zdp_k$ = function () {
    return this.get_availablePermits_tq8ya0_k$() === 0;
  };
  protoOf(MutexImpl).holdsLock_9pqa81_k$ = function (owner) {
    $l$loop: while (true) {
      if (!this.get_isLocked_w82zdp_k$())
        return false;
      var curOwner = this.owner_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (curOwner === get_NO_OWNER())
        continue $l$loop;
      return curOwner === owner;
    }
  };
  protoOf(MutexImpl).lock_25dizd_k$ = function (owner, $completion) {
    if (this.tryLock_jl1wg7_k$(owner))
      return Unit_getInstance();
    var tmp0 = lockSuspend(this, owner, $completion);
    return tmp0;
  };
  protoOf(MutexImpl).tryLock_jl1wg7_k$ = function (owner) {
    var tmp0_subject = tryLockImpl(this, owner);
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = true;
        break;
      case 1:
        tmp = false;
        break;
      case 2:
        var tmp0_error = 'This mutex is already locked by the specified owner: ' + toString_0(owner);
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      default:
        throw IllegalStateException_init_$Create$('unexpected');
    }
    return tmp;
  };
  protoOf(MutexImpl).unlock_uksyr8_k$ = function (owner) {
    $l$loop_0: while (true) {
      // Inline function 'kotlin.check' call
      var tmp0_check = this.get_isLocked_w82zdp_k$();
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>' call
        tmp$ret$0 = 'This mutex is not locked';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var curOwner = this.owner_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (curOwner === get_NO_OWNER())
        continue $l$loop_0;
      // Inline function 'kotlin.check' call
      var tmp1_check = curOwner === owner ? true : owner == null;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_check) {
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>' call
        tmp$ret$1 = 'This mutex is locked by ' + toString_0(curOwner) + ', but ' + toString_0(owner) + ' is expected';
        var message_0 = tmp$ret$1;
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      if (!this.owner_1.atomicfu$compareAndSet(curOwner, get_NO_OWNER()))
        continue $l$loop_0;
      this.release_wtm6d2_k$();
      return Unit_getInstance();
    }
  };
  protoOf(MutexImpl).get_onLock_hnkecz_k$ = function () {
    var tmp = MutexImpl$onLockRegFunction$ref();
    var tmp_0 = typeof tmp === 'function' ? tmp : THROW_CCE();
    var tmp_1 = MutexImpl$onLockProcessResult$ref();
    return new SelectClause2Impl(this, tmp_0, typeof tmp_1 === 'function' ? tmp_1 : THROW_CCE(), this.onSelectCancellationUnlockConstructor_1);
  };
  protoOf(MutexImpl).onLockRegFunction_f2ghk7_k$ = function (select, owner) {
    if (!(owner == null) ? this.holdsLock_9pqa81_k$(owner) : false) {
      select.selectInRegistrationPhase_lcwf8x_k$(get_ON_LOCK_ALREADY_LOCKED_BY_OWNER());
    } else {
      this.onAcquireRegFunction_pnwa92_k$(new SelectInstanceWithOwner(this, isInterface(select, SelectInstanceInternal) ? select : THROW_CCE(), owner), owner);
    }
  };
  protoOf(MutexImpl).onLockProcessResult_btrkik_k$ = function (owner, result) {
    if (equals(result, get_ON_LOCK_ALREADY_LOCKED_BY_OWNER())) {
      // Inline function 'kotlin.error' call
      var tmp0_error = 'This mutex is already locked by the specified owner: ' + toString_0(owner);
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
    return this;
  };
  protoOf(MutexImpl).toString = function () {
    return 'Mutex@' + get_hexAddress(this) + '[isLocked=' + this.get_isLocked_w82zdp_k$() + ',owner=' + toString_0(this.owner_1.get_kotlinx$atomicfu$value_vi2am5_k$()) + ']';
  };
  function get_TRY_LOCK_SUCCESS() {
    return TRY_LOCK_SUCCESS;
  }
  var TRY_LOCK_SUCCESS;
  function get_TRY_LOCK_FAILED() {
    return TRY_LOCK_FAILED;
  }
  var TRY_LOCK_FAILED;
  function get_TRY_LOCK_ALREADY_LOCKED_BY_OWNER() {
    return TRY_LOCK_ALREADY_LOCKED_BY_OWNER;
  }
  var TRY_LOCK_ALREADY_LOCKED_BY_OWNER;
  function $withLockCOROUTINE$29(_this__u8e3s4, owner, action, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.owner_1 = owner;
    this.action_1 = action;
  }
  protoOf($withLockCOROUTINE$29).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.lock_25dizd_k$(this.owner_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp$ret$2;
            l$ret$3: do {
              var tmp$ret$0;
              l$ret$1: do {
                var tmp_0;
                try {
                  tmp$ret$0 = this.action_1();
                  break l$ret$1;
                } catch ($p) {
                  var tmp_1;
                  {
                    var t = $p;
                    this._this__u8e3s4__1.unlock_uksyr8_k$(this.owner_1);
                    throw t;
                  }
                  tmp_0 = tmp_1;
                }
                tmp$ret$0 = tmp_0;
              }
               while (false);
              var tmp_2 = tmp$ret$0;
              this._this__u8e3s4__1.unlock_uksyr8_k$(this.owner_1);
              return tmp_2;
            }
             while (false);
            this._this__u8e3s4__1.unlock_uksyr8_k$(this.owner_1);
            ;
            return Unit_getInstance();
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
  var properties_initialized_Mutex_kt_yv4p3j;
  function _init_properties_Mutex_kt__jod56b() {
    if (properties_initialized_Mutex_kt_yv4p3j) {
    } else {
      properties_initialized_Mutex_kt_yv4p3j = true;
      NO_OWNER = new Symbol('NO_OWNER');
      ON_LOCK_ALREADY_LOCKED_BY_OWNER = new Symbol('ALREADY_LOCKED_BY_OWNER');
    }
  }
  function get_MAX_SPIN_CYCLES() {
    _init_properties_Semaphore_kt__t514r6();
    return MAX_SPIN_CYCLES;
  }
  var MAX_SPIN_CYCLES;
  function get_PERMIT() {
    _init_properties_Semaphore_kt__t514r6();
    return PERMIT;
  }
  var PERMIT;
  function get_TAKEN() {
    _init_properties_Semaphore_kt__t514r6();
    return TAKEN;
  }
  var TAKEN;
  function get_BROKEN() {
    _init_properties_Semaphore_kt__t514r6();
    return BROKEN;
  }
  var BROKEN;
  function get_CANCELLED() {
    _init_properties_Semaphore_kt__t514r6();
    return CANCELLED;
  }
  var CANCELLED;
  function get_SEGMENT_SIZE_0() {
    _init_properties_Semaphore_kt__t514r6();
    return SEGMENT_SIZE_0;
  }
  var SEGMENT_SIZE_0;
  function _get_permits__smw693($this) {
    return $this.permits_1;
  }
  function _get_head__d7jo8b_0($this) {
    return $this.head_1;
  }
  function _get_deqIdx__7j4qua($this) {
    return $this.deqIdx_1;
  }
  function _get_tail__de2tiz($this) {
    return $this.tail_1;
  }
  function _get_enqIdx__beo4xi($this) {
    return $this.enqIdx_1;
  }
  function _get__availablePermits__1ygm4d($this) {
    return $this._availablePermits_1;
  }
  function _get_onCancellationRelease__ahfh3g($this) {
    return $this.onCancellationRelease_1;
  }
  function acquireSlowPath($this, $completion) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    try {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.acquireSlowPath.<anonymous>' call
        if (addAcquireToQueue($this, cancellable)) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }
        $this.acquireCont(cancellable);
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.releaseClaimedReusableContinuation_4y1z8b_k$();
        throw e;
      } else {
        throw $p;
      }
    }
    tmp$ret$1 = cancellable.getResult_clfhg3_k$();
    var tmp0 = tmp$ret$1;
    return tmp0;
  }
  function acquire($this, waiter, suspend, onAcquired) {
    while (true) {
      var p = decPermits($this);
      if (p > 0) {
        onAcquired(waiter);
        return Unit_getInstance();
      }
      if (suspend(waiter))
        return Unit_getInstance();
    }
  }
  function decPermits($this) {
    $l$loop: while (true) {
      var p = $this._availablePermits_1.atomicfu$getAndDecrement();
      if (p > $this.permits_1)
        continue $l$loop;
      return p;
    }
  }
  function coerceAvailablePermitsAtMaximum($this) {
    $l$loop_0: while (true) {
      var cur = $this._availablePermits_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (cur <= $this.permits_1)
        break $l$loop_0;
      if ($this._availablePermits_1.atomicfu$compareAndSet(cur, $this.permits_1))
        break $l$loop_0;
    }
  }
  function addAcquireToQueue($this, waiter) {
    var curTail = $this.tail_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var enqIdx = $this.enqIdx_1.atomicfu$getAndIncrement$long();
    var createNewSegment = createSegment$ref_0();
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      var tmp3_findSegmentAndMoveForward = $this.tail_1;
      var tmp$ret$0;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = get_SEGMENT_SIZE_0();
      tmp$ret$0 = enqIdx.div_9s1fi3_k$(toLong(tmp0_div));
      var tmp4_findSegmentAndMoveForward = tmp$ret$0;
      while (true) {
        var s = findSegmentInternal(curTail, tmp4_findSegmentAndMoveForward, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var tmp2_moveForward = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var tmp1__anonymous__uwfjfc = tmp3_findSegmentAndMoveForward.get_kotlinx$atomicfu$value_vi2am5_k$();
              if (tmp1__anonymous__uwfjfc.get_id_kntnx8_k$().compareTo_n4fqi2_k$(tmp2_moveForward.get_id_kntnx8_k$()) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp2_moveForward.tryIncPointers_5qlhqx_k$()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp3_findSegmentAndMoveForward.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, tmp2_moveForward)) {
                if (tmp1__anonymous__uwfjfc.decPointers_43xfc_k$()) {
                  tmp1__anonymous__uwfjfc.remove_le47v1_k$();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp2_moveForward.decPointers_43xfc_k$()) {
                tmp2_moveForward.remove_le47v1_k$();
              }
            }
            tmp$ret$1 = Unit_getInstance();
          }
          tmp = tmp$ret$1;
        }
        if (tmp) {
          tmp$ret$2 = s;
          break $l$block_2;
        }
      }
    }
    var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp$ret$2);
    var tmp$ret$3;
    // Inline function 'kotlin.Long.rem' call
    var tmp5_rem = get_SEGMENT_SIZE_0();
    tmp$ret$3 = enqIdx.rem_9rbcjo_k$(toLong(tmp5_rem));
    var i = tmp$ret$3.toInt_1tsl84_k$();
    var tmp$ret$4;
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
    tmp$ret$4 = segment.acquirers_1.atomicfu$get(i).atomicfu$compareAndSet(null, waiter);
    if (tmp$ret$4) {
      waiter.invokeOnCancellation_gome2h_k$(segment, i);
      return true;
    }
    var tmp$ret$5;
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
    var tmp6_cas = get_PERMIT();
    var tmp7_cas = get_TAKEN();
    tmp$ret$5 = segment.acquirers_1.atomicfu$get(i).atomicfu$compareAndSet(tmp6_cas, tmp7_cas);
    if (tmp$ret$5) {
      var tmp0_subject = waiter;
      if (isInterface(tmp0_subject, CancellableContinuation)) {
        if (isInterface(waiter, CancellableContinuation))
          waiter;
        else
          THROW_CCE();
        waiter.resume_l1w5in_k$(Unit_getInstance(), $this.onCancellationRelease_1);
      } else {
        if (isInterface(tmp0_subject, SelectInstance)) {
          waiter.selectInRegistrationPhase_lcwf8x_k$(Unit_getInstance());
        } else {
          var tmp8_error = 'unexpected: ' + waiter;
          throw IllegalStateException_init_$Create$(toString(tmp8_error));
        }
      }
      return true;
    }
    // Inline function 'kotlinx.coroutines.assert' call
    return false;
  }
  function tryResumeNextFromQueue($this) {
    var curHead = $this.head_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var deqIdx = $this.deqIdx_1.atomicfu$getAndIncrement$long();
    var tmp$ret$0;
    // Inline function 'kotlin.Long.div' call
    var tmp0_div = get_SEGMENT_SIZE_0();
    tmp$ret$0 = deqIdx.div_9s1fi3_k$(toLong(tmp0_div));
    var id = tmp$ret$0;
    var createNewSegment = createSegment$ref_1();
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      var tmp3_findSegmentAndMoveForward = $this.head_1;
      while (true) {
        var s = findSegmentInternal(curHead, id, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var tmp2_moveForward = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var tmp1__anonymous__uwfjfc = tmp3_findSegmentAndMoveForward.get_kotlinx$atomicfu$value_vi2am5_k$();
              if (tmp1__anonymous__uwfjfc.get_id_kntnx8_k$().compareTo_n4fqi2_k$(tmp2_moveForward.get_id_kntnx8_k$()) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp2_moveForward.tryIncPointers_5qlhqx_k$()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp3_findSegmentAndMoveForward.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, tmp2_moveForward)) {
                if (tmp1__anonymous__uwfjfc.decPointers_43xfc_k$()) {
                  tmp1__anonymous__uwfjfc.remove_le47v1_k$();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp2_moveForward.decPointers_43xfc_k$()) {
                tmp2_moveForward.remove_le47v1_k$();
              }
            }
            tmp$ret$1 = Unit_getInstance();
          }
          tmp = tmp$ret$1;
        }
        if (tmp) {
          tmp$ret$2 = s;
          break $l$block_2;
        }
      }
    }
    var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp$ret$2);
    segment.cleanPrev_rmgs7f_k$();
    if (segment.get_id_kntnx8_k$().compareTo_n4fqi2_k$(id) > 0)
      return false;
    var tmp$ret$3;
    // Inline function 'kotlin.Long.rem' call
    var tmp4_rem = get_SEGMENT_SIZE_0();
    tmp$ret$3 = deqIdx.rem_9rbcjo_k$(toLong(tmp4_rem));
    var i = tmp$ret$3.toInt_1tsl84_k$();
    var tmp$ret$4;
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.getAndSet' call
    var tmp5_getAndSet = get_PERMIT();
    tmp$ret$4 = segment.acquirers_1.atomicfu$get(i).atomicfu$getAndSet(tmp5_getAndSet);
    var cellState = tmp$ret$4;
    if (cellState === null) {
      // Inline function 'kotlin.repeat' call
      var tmp6_repeat = get_MAX_SPIN_CYCLES();
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp6_repeat)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.tryResumeNextFromQueue.<anonymous>' call
          var tmp$ret$5;
          // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.get' call
          tmp$ret$5 = segment.acquirers_1.atomicfu$get(i).get_kotlinx$atomicfu$value_vi2am5_k$();
          if (tmp$ret$5 === get_TAKEN())
            return true;
        }
         while (inductionVariable < tmp6_repeat);
      var tmp$ret$6;
      // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
      var tmp7_cas = get_PERMIT();
      var tmp8_cas = get_BROKEN();
      tmp$ret$6 = segment.acquirers_1.atomicfu$get(i).atomicfu$compareAndSet(tmp7_cas, tmp8_cas);
      return !tmp$ret$6;
    } else if (cellState === get_CANCELLED())
      return false;
    else
      return tryResumeAcquire(cellState, $this);
  }
  function tryResumeAcquire(_this__u8e3s4, $this) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (isInterface(tmp0_subject, CancellableContinuation)) {
      if (isInterface(_this__u8e3s4, CancellableContinuation))
        _this__u8e3s4;
      else
        THROW_CCE();
      var token = _this__u8e3s4.tryResume_93jc0s_k$(Unit_getInstance(), null, $this.onCancellationRelease_1);
      var tmp_0;
      if (!(token == null)) {
        _this__u8e3s4.completeResume_fu4ex_k$(token);
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      if (isInterface(tmp0_subject, SelectInstance)) {
        tmp = _this__u8e3s4.trySelect_fbege0_k$($this, Unit_getInstance());
      } else {
        var tmp0_error = 'unexpected: ' + toString(_this__u8e3s4);
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
    }
    return tmp;
  }
  function SemaphoreImpl$onCancellationRelease$lambda(this$0) {
    return function (_anonymous_parameter_0__qggqh8) {
      this$0.release_wtm6d2_k$();
      return Unit_getInstance();
    };
  }
  function createSegment$ref_0() {
    var l = function (p0, p1) {
      return createSegment_0(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  function createSegment$ref_1() {
    var l = function (p0, p1) {
      return createSegment_0(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  function SemaphoreImpl(permits, acquiredPermits) {
    this.permits_1 = permits;
    this.deqIdx_1 = atomic$long$1(new Long(0, 0));
    this.enqIdx_1 = atomic$long$1(new Long(0, 0));
    // Inline function 'kotlin.require' call
    var tmp0_require = this.permits_1 > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.<anonymous>' call
      tmp$ret$0 = 'Semaphore should have at least 1 permit, but had ' + this.permits_1;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = 0 <= acquiredPermits ? acquiredPermits <= this.permits_1 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.<anonymous>' call
      tmp$ret$1 = 'The number of acquired permits should be in 0..' + this.permits_1;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var s = new SemaphoreSegment(new Long(0, 0), null, 2);
    this.head_1 = atomic$ref$1(s);
    this.tail_1 = atomic$ref$1(s);
    this._availablePermits_1 = atomic$int$1(this.permits_1 - acquiredPermits | 0);
    var tmp = this;
    tmp.onCancellationRelease_1 = SemaphoreImpl$onCancellationRelease$lambda(this);
  }
  protoOf(SemaphoreImpl).get_availablePermits_tq8ya0_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.math.max' call
    var tmp0_max = this._availablePermits_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    tmp$ret$0 = Math.max(tmp0_max, 0);
    return tmp$ret$0;
  };
  protoOf(SemaphoreImpl).tryAcquire_4pp2ed_k$ = function () {
    $l$loop: while (true) {
      var p = this._availablePermits_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (p > this.permits_1) {
        coerceAvailablePermitsAtMaximum(this);
        continue $l$loop;
      }
      if (p <= 0)
        return false;
      if (this._availablePermits_1.atomicfu$compareAndSet(p, p - 1 | 0))
        return true;
    }
  };
  protoOf(SemaphoreImpl).acquire_qew2v7_k$ = function ($completion) {
    var p = decPermits(this);
    if (p > 0)
      return Unit_getInstance();
    var tmp0 = acquireSlowPath(this, $completion);
    return tmp0;
  };
  protoOf(SemaphoreImpl).acquireCont = function (waiter) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.acquire' call
      while (true) {
        var p = decPermits(this);
        if (p > 0) {
          // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.acquire.<anonymous>' call
          waiter.resume_l1w5in_k$(Unit_getInstance(), this.onCancellationRelease_1);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_0;
        }
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.acquire.<anonymous>' call
        tmp$ret$1 = addAcquireToQueue(this, isInterface(waiter, Waiter) ? waiter : THROW_CCE());
        if (tmp$ret$1) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block_0;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(SemaphoreImpl).onAcquireRegFunction_pnwa92_k$ = function (select, ignoredParam) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.acquire' call
      while (true) {
        var p = decPermits(this);
        if (p > 0) {
          // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.onAcquireRegFunction.<anonymous>' call
          select.selectInRegistrationPhase_lcwf8x_k$(Unit_getInstance());
          tmp$ret$0 = Unit_getInstance();
          break $l$block_0;
        }
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.onAcquireRegFunction.<anonymous>' call
        tmp$ret$1 = addAcquireToQueue(this, isInterface(select, Waiter) ? select : THROW_CCE());
        if (tmp$ret$1) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block_0;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(SemaphoreImpl).release_wtm6d2_k$ = function () {
    while (true) {
      var p = this._availablePermits_1.atomicfu$getAndIncrement();
      if (p >= this.permits_1) {
        coerceAvailablePermitsAtMaximum(this);
        // Inline function 'kotlin.error' call
        var tmp0_error = 'The number of released permits cannot be greater than ' + this.permits_1;
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
      if (p >= 0)
        return Unit_getInstance();
      if (tryResumeNextFromQueue(this))
        return Unit_getInstance();
    }
  };
  function Semaphore() {
  }
  function SemaphoreSegment(id, prev, pointers) {
    Segment.call(this, id, prev, pointers);
    this.acquirers_1 = atomicfu$AtomicRefArray$ofNulls(get_SEGMENT_SIZE_0());
  }
  protoOf(SemaphoreSegment).get_acquirers_qnahw2_k$ = function () {
    return this.acquirers_1;
  };
  protoOf(SemaphoreSegment).get_numberOfSlots_n3mgwk_k$ = function () {
    return get_SEGMENT_SIZE_0();
  };
  protoOf(SemaphoreSegment).get_fkrdnv_k$ = function (index) {
    return this.acquirers_1.atomicfu$get(index).get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(SemaphoreSegment).set_6kfy4v_k$ = function (index, value) {
    this.acquirers_1.atomicfu$get(index).set_kotlinx$atomicfu$value_koguff_k$(value);
  };
  protoOf(SemaphoreSegment).cas_b4wiuq_k$ = function (index, expected, value) {
    return this.acquirers_1.atomicfu$get(index).atomicfu$compareAndSet(expected, value);
  };
  protoOf(SemaphoreSegment).getAndSet_r9fgkf_k$ = function (index, value) {
    return this.acquirers_1.atomicfu$get(index).atomicfu$getAndSet(value);
  };
  protoOf(SemaphoreSegment).onCancellation_8vow63_k$ = function (index, cause) {
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.set' call
    var tmp0_set = get_CANCELLED();
    this.acquirers_1.atomicfu$get(index).set_kotlinx$atomicfu$value_koguff_k$(tmp0_set);
    this.onSlotCleaned_dnmt5m_k$();
  };
  protoOf(SemaphoreSegment).toString = function () {
    return 'SemaphoreSegment[id=' + toString(this.get_id_kntnx8_k$()) + ', hashCode=' + hashCode(this) + ']';
  };
  function createSegment_0(id, prev) {
    _init_properties_Semaphore_kt__t514r6();
    return new SemaphoreSegment(id, prev, 0);
  }
  var properties_initialized_Semaphore_kt_uqcwok;
  function _init_properties_Semaphore_kt__t514r6() {
    if (properties_initialized_Semaphore_kt_uqcwok) {
    } else {
      properties_initialized_Semaphore_kt_uqcwok = true;
      MAX_SPIN_CYCLES = systemProp('kotlinx.coroutines.semaphore.maxSpinCycles', 100);
      PERMIT = new Symbol('PERMIT');
      TAKEN = new Symbol('TAKEN');
      BROKEN = new Symbol('BROKEN');
      CANCELLED = new Symbol('CANCELLED');
      SEGMENT_SIZE_0 = systemProp('kotlinx.coroutines.semaphore.segmentSize', 16);
    }
  }
  function CloseableCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  function invokeIt(_this__u8e3s4, cause) {
    var tmp0_subject = typeof _this__u8e3s4;
    if (tmp0_subject === 'function')
      _this__u8e3s4(cause);
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = _this__u8e3s4;
      tmp$ret$0.invoke(cause);
    }
  }
  function get_asHandler(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    return tmp$ret$0;
  }
  function get_asHandler_0(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    return tmp$ret$0;
  }
  function CancelHandlerBase() {
  }
  function toDebugString(_this__u8e3s4) {
    return toString(_this__u8e3s4);
  }
  function withContinuationContext(continuation, countOrElement, block) {
    return block();
  }
  function withCoroutineContext(context, countOrElement, block) {
    return block();
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().get_Default_goqax4_k$();
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_asDynamic = window;
        tmp$ret$0 = tmp0_asDynamic;
        tmp_1 = tmp$ret$0 != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp1_asDynamic = window;
        tmp$ret$1 = tmp1_asDynamic;
        tmp_0 = !(typeof tmp$ret$1.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' ? true : typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) ? navigator.userAgent.match('\\bjsdom\\b') : false;
  }
  function get_UNDEFINED_0() {
    return UNDEFINED_0;
  }
  var UNDEFINED_0;
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.get_coroutineContext_115oqo_k$().plus_rgw9wi_k$(context);
    return (!(combined === Dispatchers_getInstance().get_Default_goqax4_k$()) ? combined.get_j1ktw6_k$(Key_getInstance()) == null : false) ? combined.plus_rgw9wi_k$(Dispatchers_getInstance().get_Default_goqax4_k$()) : combined;
  }
  function newCoroutineContext_0(_this__u8e3s4, addedContext) {
    return _this__u8e3s4.plus_rgw9wi_k$(addedContext);
  }
  function UndispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(UndispatchedCoroutine).afterResume_ufx9w9_k$ = function (state) {
    return this.get_uCont_iyyiam_k$().resumeWith_s3a3yh_k$(recoverResult(state, this.get_uCont_iyyiam_k$()));
  };
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function set_counter(_set____db54di) {
    counter = _set____db54di;
  }
  function get_counter() {
    return counter;
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).get_simpleName_r6f8py_k$();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    var result = tmp$ret$0.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = _this__u8e3s4;
      tmp$ret$1.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function assert(value) {
  }
  function _get_mainDispatcher__sm5ex7($this) {
    return $this.mainDispatcher_1;
  }
  function _set_injectedMainDispatcher__9278zd($this, _set____db54di) {
    $this.injectedMainDispatcher_1 = _set____db54di;
  }
  function _get_injectedMainDispatcher__d6w7gb($this) {
    return $this.injectedMainDispatcher_1;
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.Default_1 = createDefaultDispatcher();
    this.Unconfined_1 = Unconfined_getInstance();
    this.mainDispatcher_1 = new JsMainDispatcher(this.Default_1, false);
    this.injectedMainDispatcher_1 = null;
  }
  protoOf(Dispatchers).get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  protoOf(Dispatchers).get_Main_wo5vz6_k$ = function () {
    var tmp0_elvis_lhs = this.injectedMainDispatcher_1;
    return tmp0_elvis_lhs == null ? this.mainDispatcher_1 : tmp0_elvis_lhs;
  };
  protoOf(Dispatchers).get_Unconfined_sfvx0q_k$ = function () {
    return this.Unconfined_1;
  };
  protoOf(Dispatchers).injectMain_isae1a_k$ = function (dispatcher) {
    this.injectedMainDispatcher_1 = dispatcher;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function _get_invokeImmediately__pxbc17($this) {
    return $this.invokeImmediately_1;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.delegate_1 = delegate;
    this.invokeImmediately_1 = invokeImmediately;
    this.immediate_1 = this.invokeImmediately_1 ? this : new JsMainDispatcher(this.delegate_1, true);
  }
  protoOf(JsMainDispatcher).get_delegate_i94tki_k$ = function () {
    return this.delegate_1;
  };
  protoOf(JsMainDispatcher).get_immediate_r3y8eg_k$ = function () {
    return this.immediate_1;
  };
  protoOf(JsMainDispatcher).isDispatchNeeded_fmz9vn_k$ = function (context) {
    return !this.invokeImmediately_1;
  };
  protoOf(JsMainDispatcher).dispatch_o98ux7_k$ = function (context, block) {
    return this.delegate_1.dispatch_o98ux7_k$(context, block);
  };
  protoOf(JsMainDispatcher).dispatchYield_ww21f6_k$ = function (context, block) {
    return this.delegate_1.dispatchYield_ww21f6_k$(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.toStringInternalImpl_hcqz93_k$();
    return tmp0_elvis_lhs == null ? this.delegate_1.toString() : tmp0_elvis_lhs;
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).dispatch_o98ux7_k$ = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function get_RECOVER_STACK_TRACES() {
    return RECOVER_STACK_TRACES;
  }
  var RECOVER_STACK_TRACES;
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    captureStack(this, JobCancellationException);
    this.job_1 = job;
  }
  protoOf(JobCancellationException).get_job_18j2r0_k$ = function () {
    return this.job_1;
  };
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + this.job_1;
  };
  protoOf(JobCancellationException).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.job_1, this.job_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobCancellationException).hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.job_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function addSuppressedThrowable(_this__u8e3s4, other) {
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).scheduleQueueProcessing_nyddyc_k$ = function () {
    process.nextTick(this.messageQueue_1.processQueue_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).scheduleQueueProcessing_nyddyc_k$ = function () {
    setTimeout(this.messageQueue_1.processQueue_1, 0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.process_mza50i_k$();
      return Unit_getInstance();
    };
  }
  function ScheduledMessageQueue($outer) {
    this.$this_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp.processQueue_1 = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).get_processQueue_xqf7it_k$ = function () {
    return this.processQueue_1;
  };
  protoOf(ScheduledMessageQueue).schedule_o6nex2_k$ = function () {
    this.$this_1.scheduleQueueProcessing_nyddyc_k$();
  };
  protoOf(ScheduledMessageQueue).reschedule_mh206x_k$ = function () {
    setTimeout(this.processQueue_1, 0);
  };
  function SetTimeoutBasedDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.run_mw4iiu_k$();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.resumeUndispatched_re4yxz_k$(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.messageQueue_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).get_messageQueue_gxtffx_k$ = function () {
    return this.messageQueue_1;
  };
  protoOf(SetTimeoutBasedDispatcher).limitedParallelism_glrman_k$ = function (parallelism) {
    checkParallelism(parallelism);
    return this;
  };
  protoOf(SetTimeoutBasedDispatcher).dispatch_o98ux7_k$ = function (context, block) {
    this.messageQueue_1.enqueue_w6uc33_k$(block);
  };
  protoOf(SetTimeoutBasedDispatcher).invokeOnTimeout_sx2bqq_k$ = function (timeMillis, block, context) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new ClearTimeout(handle);
  };
  protoOf(SetTimeoutBasedDispatcher).scheduleResumeAfterDelay_5x4w1l_k$ = function (timeMillis, continuation) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ClearTimeout(handle);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    continuation.invokeOnCancellation_yygv6h_k$(tmp$ret$1);
  };
  function _set_scheduled__8qlfaw($this, _set____db54di) {
    $this.scheduled_1 = _set____db54di;
  }
  function _get_scheduled__wzo69o($this) {
    return $this.scheduled_1;
  }
  function MessageQueue() {
    this.$$delegate_0__1 = ArrayDeque_init_$Create$();
    this.yieldEvery_1 = 16;
    this.scheduled_1 = false;
  }
  protoOf(MessageQueue).get_size_woubt6_k$ = function () {
    return this.$$delegate_0__1.get_size_woubt6_k$();
  };
  protoOf(MessageQueue).add_sdn2ev_k$ = function (index, element) {
    this.$$delegate_0__1.add_ydlf05_k$(index, element);
  };
  protoOf(MessageQueue).add_ydlf05_k$ = function (index, element) {
    return this.add_sdn2ev_k$(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).add_evrolh_k$ = function (element) {
    return this.$$delegate_0__1.add_1j60pz_k$(element);
  };
  protoOf(MessageQueue).add_1j60pz_k$ = function (element) {
    return this.add_evrolh_k$((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).addAll_b4nzcr_k$ = function (index, elements) {
    return this.$$delegate_0__1.addAll_ikuqlt_k$(index, elements);
  };
  protoOf(MessageQueue).addAll_ikuqlt_k$ = function (index, elements) {
    return this.addAll_b4nzcr_k$(index, elements);
  };
  protoOf(MessageQueue).addAll_d24tgk_k$ = function (elements) {
    return this.$$delegate_0__1.addAll_oxxjjk_k$(elements);
  };
  protoOf(MessageQueue).addAll_oxxjjk_k$ = function (elements) {
    return this.addAll_d24tgk_k$(elements);
  };
  protoOf(MessageQueue).clear_j9y8zo_k$ = function () {
    this.$$delegate_0__1.clear_j9y8zo_k$();
  };
  protoOf(MessageQueue).contains_ncu795_k$ = function (element) {
    return this.$$delegate_0__1.contains_2ehdt1_k$(element);
  };
  protoOf(MessageQueue).contains_2ehdt1_k$ = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.contains_ncu795_k$((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).containsAll_7tlwii_k$ = function (elements) {
    return this.$$delegate_0__1.containsAll_jr3fla_k$(elements);
  };
  protoOf(MessageQueue).containsAll_jr3fla_k$ = function (elements) {
    return this.containsAll_7tlwii_k$(elements);
  };
  protoOf(MessageQueue).get_fkrdnv_k$ = function (index) {
    return this.$$delegate_0__1.get_fkrdnv_k$(index);
  };
  protoOf(MessageQueue).indexOf_jb5lyb_k$ = function (element) {
    return this.$$delegate_0__1.indexOf_dcv8dt_k$(element);
  };
  protoOf(MessageQueue).indexOf_dcv8dt_k$ = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.indexOf_jb5lyb_k$((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).isEmpty_y1axqb_k$ = function () {
    return this.$$delegate_0__1.isEmpty_y1axqb_k$();
  };
  protoOf(MessageQueue).iterator_jk1svi_k$ = function () {
    return this.$$delegate_0__1.iterator_jk1svi_k$();
  };
  protoOf(MessageQueue).lastIndexOf_ssctn7_k$ = function (element) {
    return this.$$delegate_0__1.lastIndexOf_rzx8t5_k$(element);
  };
  protoOf(MessageQueue).lastIndexOf_rzx8t5_k$ = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.lastIndexOf_ssctn7_k$((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).listIterator_xjshxw_k$ = function () {
    return this.$$delegate_0__1.listIterator_xjshxw_k$();
  };
  protoOf(MessageQueue).listIterator_5hanv9_k$ = function (index) {
    return this.$$delegate_0__1.listIterator_5hanv9_k$(index);
  };
  protoOf(MessageQueue).remove_6hyhu_k$ = function (element) {
    return this.$$delegate_0__1.remove_8hbkc6_k$(element);
  };
  protoOf(MessageQueue).remove_8hbkc6_k$ = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.remove_6hyhu_k$((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).removeAll_xxzywv_k$ = function (elements) {
    return this.$$delegate_0__1.removeAll_99to5v_k$(elements);
  };
  protoOf(MessageQueue).removeAll_99to5v_k$ = function (elements) {
    return this.removeAll_xxzywv_k$(elements);
  };
  protoOf(MessageQueue).removeAt_qvpkxi_k$ = function (index) {
    return this.$$delegate_0__1.removeAt_qvpkxi_k$(index);
  };
  protoOf(MessageQueue).retainAll_ji2a0w_k$ = function (elements) {
    return this.$$delegate_0__1.retainAll_j44sd0_k$(elements);
  };
  protoOf(MessageQueue).retainAll_j44sd0_k$ = function (elements) {
    return this.retainAll_ji2a0w_k$(elements);
  };
  protoOf(MessageQueue).set_d7vdyx_k$ = function (index, element) {
    return this.$$delegate_0__1.set_meu351_k$(index, element);
  };
  protoOf(MessageQueue).set_meu351_k$ = function (index, element) {
    return this.set_d7vdyx_k$(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).subList_d153ha_k$ = function (fromIndex, toIndex) {
    return this.$$delegate_0__1.subList_d153ha_k$(fromIndex, toIndex);
  };
  protoOf(MessageQueue).get_yieldEvery_1qy12h_k$ = function () {
    return this.yieldEvery_1;
  };
  protoOf(MessageQueue).enqueue_w6uc33_k$ = function (element) {
    this.add_evrolh_k$(element);
    if (!this.scheduled_1) {
      this.scheduled_1 = true;
      this.schedule_o6nex2_k$();
    }
  };
  protoOf(MessageQueue).process_mza50i_k$ = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var tmp0_repeat = this.yieldEvery_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = removeFirstOrNull(this);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_getInstance();
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.run_mw4iiu_k$();
        }
         while (inductionVariable < tmp0_repeat);
    }finally {
      if (this.isEmpty_y1axqb_k$()) {
        this.scheduled_1 = false;
      } else {
        this.reschedule_mh206x_k$();
      }
    }
  };
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).toInt_1tsl84_k$();
  }
  function ClearTimeout(handle) {
    CancelHandler.call(this);
    this.handle_1 = handle;
  }
  protoOf(ClearTimeout).get_handle_e5p7ht_k$ = function () {
    return this.handle_1;
  };
  protoOf(ClearTimeout).dispose_3n44we_k$ = function () {
    clearTimeout(this.handle_1);
  };
  protoOf(ClearTimeout).invoke_7fb7sc_k$ = function (cause) {
    this.dispose_3n44we_k$();
  };
  protoOf(ClearTimeout).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  protoOf(ClearTimeout).toString = function () {
    return 'ClearTimeout[' + this.handle_1 + ']';
  };
  function get_MAX_DELAY() {
    return MAX_DELAY;
  }
  var MAX_DELAY;
  function _get_window__ax0zxh($this) {
    return $this.window_1;
  }
  function _get_queue__c6g84g_0($this) {
    return $this.queue_1;
  }
  function WindowClearTimeout($outer, handle) {
    this.$this_1 = $outer;
    ClearTimeout.call(this, handle);
  }
  protoOf(WindowClearTimeout).dispose_3n44we_k$ = function () {
    this.$this_1.window_1.clearTimeout(this.handle_1);
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.resumeUndispatched_re4yxz_k$(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.run_mw4iiu_k$();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.window_1 = window_0;
    this.queue_1 = new WindowMessageQueue(this.window_1);
  }
  protoOf(WindowDispatcher).dispatch_o98ux7_k$ = function (context, block) {
    return this.queue_1.enqueue_w6uc33_k$(block);
  };
  protoOf(WindowDispatcher).scheduleResumeAfterDelay_5x4w1l_k$ = function (timeMillis, continuation) {
    var handle = this.window_1.setTimeout(WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new WindowClearTimeout(this, handle);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    continuation.invokeOnCancellation_yygv6h_k$(tmp$ret$1);
  };
  protoOf(WindowDispatcher).invokeOnTimeout_sx2bqq_k$ = function (timeMillis, block, context) {
    var handle = this.window_1.setTimeout(WindowDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new WindowClearTimeout(this, handle);
  };
  function _get_window__ax0zxh_0($this) {
    return $this.window_1;
  }
  function _get_messageName__5th09r($this) {
    return $this.messageName_1;
  }
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.window_1 ? event.data == this$0.messageName_1 : false) {
        event.stopPropagation();
        this$0.process_mza50i_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.process_mza50i_k$();
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.window_1 = window_0;
    this.messageName_1 = 'dispatchCoroutine';
    this.window_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).schedule_o6nex2_k$ = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).reschedule_mh206x_k$ = function () {
    this.window_1.postMessage(this.messageName_1, '*');
  };
  function Runnable() {
  }
  function Runnable_0(block) {
    return new _no_name_provided__qut3iv_8(block);
  }
  function _no_name_provided__qut3iv_8($block) {
    this.$block_1 = $block;
  }
  protoOf(_no_name_provided__qut3iv_8).run_mw4iiu_k$ = function () {
    this.$block_1();
  };
  function SchedulerTask() {
  }
  function get_taskContext(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function afterTask(_this__u8e3s4) {
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    var tmp0_elvis_lhs = tmp$ret$0.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$2;
      // Inline function 'kotlin.also' call
      var tmp0_also = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.asCoroutineDispatcher.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = _this__u8e3s4;
      tmp$ret$1.coroutineDispatcher = tmp0_also;
      tmp$ret$2 = tmp0_also;
      tmp = tmp$ret$2;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbortFlowException(owner) {
    CancellationException_init_$Init$('Flow was aborted, no more elements needed', this);
    captureStack(this, AbortFlowException);
    this.owner_1 = owner;
  }
  protoOf(AbortFlowException).get_owner_iwkx3e_k$ = function () {
    return this.owner_1;
  };
  function _set_lastEmissionContext__smyz7($this, _set____db54di) {
    $this.lastEmissionContext_1 = _set____db54di;
  }
  function _get_lastEmissionContext__e3d7vj($this) {
    return $this.lastEmissionContext_1;
  }
  function SafeCollector$collectContextSize$lambda(count, _anonymous_parameter_1__qggqgd) {
    return count + 1 | 0;
  }
  function SafeCollector(collector, collectContext) {
    this.collector_1 = collector;
    this.collectContext_1 = collectContext;
    var tmp = this;
    tmp.collectContextSize_1 = this.collectContext_1.fold_iindx8_k$(0, SafeCollector$collectContextSize$lambda);
    this.lastEmissionContext_1 = null;
  }
  protoOf(SafeCollector).get_collector_vd7hgc_k$ = function () {
    return this.collector_1;
  };
  protoOf(SafeCollector).get_collectContext_m0m2mq_k$ = function () {
    return this.collectContext_1;
  };
  protoOf(SafeCollector).get_collectContextSize_pumapd_k$ = function () {
    return this.collectContextSize_1;
  };
  protoOf(SafeCollector).emit_1fbrsb_k$ = function (value, $completion) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $completion.get_context_h02k06_k$();
    tmp$ret$1 = tmp$ret$0;
    var currentContext = tmp$ret$1;
    ensureActive(currentContext);
    if (!(this.lastEmissionContext_1 === currentContext)) {
      checkContext(this, currentContext);
      this.lastEmissionContext_1 = currentContext;
    }
    var tmp0 = this.collector_1.emit_1fbrsb_k$(value, $completion);
    return tmp0;
  };
  protoOf(SafeCollector).releaseIntercepted_5cexvt_k$ = function () {
  };
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function get_platformExceptionHandlers_() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return platformExceptionHandlers_;
  }
  var platformExceptionHandlers_;
  function get_platformExceptionHandlers() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return get_platformExceptionHandlers_();
  }
  function propagateExceptionFinalResort(exception) {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    console.error(exception);
  }
  function DiagnosticCoroutineContextException(context) {
    RuntimeException_init_$Init$_0(toString(context), this);
    captureStack(this, DiagnosticCoroutineContextException);
  }
  var properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx;
  function _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf() {
    if (properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx) {
    } else {
      properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx = true;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableSetOf' call
      tmp$ret$0 = LinkedHashSet_init_$Create$();
      platformExceptionHandlers_ = tmp$ret$0;
    }
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  protoOf(LinkedListHead).get_isEmpty_zauvru_k$ = function () {
    return this._next_1 === this;
  };
  protoOf(LinkedListHead).remove_fgfybg_k$ = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  function LinkedListNode() {
    this._next_1 = this;
    this._prev_1 = this;
    this._removed_1 = false;
  }
  protoOf(LinkedListNode).set__next_ir5h2x_k$ = function (_set____db54di) {
    this._next_1 = _set____db54di;
  };
  protoOf(LinkedListNode).get__next_inmai1_k$ = function () {
    return this._next_1;
  };
  protoOf(LinkedListNode).set__prev_qmwz5z_k$ = function (_set____db54di) {
    this._prev_1 = _set____db54di;
  };
  protoOf(LinkedListNode).get__prev_inntnt_k$ = function () {
    return this._prev_1;
  };
  protoOf(LinkedListNode).set__removed_pin64r_k$ = function (_set____db54di) {
    this._removed_1 = _set____db54di;
  };
  protoOf(LinkedListNode).get__removed_p9514a_k$ = function () {
    return this._removed_1;
  };
  protoOf(LinkedListNode).get_nextNode_88zlwi_k$ = function () {
    return this._next_1;
  };
  protoOf(LinkedListNode).get_prevNode_i5bmvy_k$ = function () {
    return this._prev_1;
  };
  protoOf(LinkedListNode).get_isRemoved_gzdz59_k$ = function () {
    return this._removed_1;
  };
  protoOf(LinkedListNode).addLast_uyctnf_k$ = function (node) {
    var prev = this._prev_1;
    node._next_1 = this;
    node._prev_1 = prev;
    prev._next_1 = node;
    this._prev_1 = node;
  };
  protoOf(LinkedListNode).remove_fgfybg_k$ = function () {
    return this.removeImpl_i5v938_k$();
  };
  protoOf(LinkedListNode).dispose_3n44we_k$ = function () {
    this.remove_fgfybg_k$();
  };
  protoOf(LinkedListNode).removeImpl_i5v938_k$ = function () {
    if (this._removed_1)
      return false;
    var prev = this._prev_1;
    var next = this._next_1;
    prev._next_1 = next;
    next._prev_1 = prev;
    this._removed_1 = true;
    return true;
  };
  protoOf(LinkedListNode).addOneIfEmpty_cbgboi_k$ = function (node) {
    if (!(this._next_1 === this))
      return false;
    this.addLast_uyctnf_k$(node);
    return true;
  };
  protoOf(LinkedListNode).addLastIf_h8xph4_k$ = function (node, condition) {
    if (!condition())
      return false;
    this.addLast_uyctnf_k$(node);
    return true;
  };
  protoOf(LinkedListNode).addLastIfPrev_bzlxtw_k$ = function (node, predicate) {
    if (!predicate(this._prev_1))
      return false;
    this.addLast_uyctnf_k$(node);
    return true;
  };
  protoOf(LinkedListNode).addLastIfPrevAndIf_gphed7_k$ = function (node, predicate, condition) {
    if (!predicate(this._prev_1))
      return false;
    if (!condition())
      return false;
    this.addLast_uyctnf_k$(node);
    return true;
  };
  protoOf(LinkedListNode).helpRemove_v3vfak_k$ = function () {
  };
  protoOf(LinkedListNode).removeFirstOrNull_eges3a_k$ = function () {
    var next = this._next_1;
    if (next === this)
      return null;
    // Inline function 'kotlin.check' call
    var tmp0_check = next.removeImpl_i5v938_k$();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstOrNull.<anonymous>' call
      tmp$ret$0 = 'Should remove';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return next;
  };
  function probeCoroutineCreated(completion) {
    return completion;
  }
  function unwrap(exception) {
    return exception;
  }
  function recoverAndThrow(exception, $completion) {
    throw exception;
  }
  function initCause(_this__u8e3s4, cause) {
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function CoroutineStackFrame() {
  }
  function synchronizedImpl(lock, block) {
    return block();
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function _set_value__lx0xdg($this, _set____db54di) {
    $this.value_1 = _set____db54di;
  }
  function _get_value__a43j40_0($this) {
    return $this.value_1;
  }
  function CommonThreadLocal() {
    this.value_1 = null;
  }
  protoOf(CommonThreadLocal).get_26vq_k$ = function () {
    var tmp = this.value_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(CommonThreadLocal).set_hda1d2_k$ = function (value) {
    this.value_1 = value;
  };
  function commonThreadLocal(name) {
    return new CommonThreadLocal();
  }
  //region block: post-declaration
  protoOf(JobSupport).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(JobSupport).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(JobSupport).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(JobSupport).cancel_2kogtl_k$ = cancel;
  protoOf(JobSupport).plus_ee14jq_k$ = plus_1;
  protoOf(JobSupport).plus_rgw9wi_k$ = plus;
  protoOf(JobSupport).get_j1ktw6_k$ = get;
  protoOf(JobSupport).fold_iindx8_k$ = fold;
  protoOf(JobSupport).minusKey_y21q55_k$ = minusKey;
  protoOf(AbstractCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(AbstractCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(AbstractCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(AbstractCoroutine).cancel_2kogtl_k$ = cancel;
  protoOf(AbstractCoroutine).plus_ee14jq_k$ = plus_1;
  protoOf(AbstractCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(AbstractCoroutine).get_j1ktw6_k$ = get;
  protoOf(AbstractCoroutine).fold_iindx8_k$ = fold;
  protoOf(AbstractCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(StandaloneCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(StandaloneCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(StandaloneCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(StandaloneCoroutine).cancel_2kogtl_k$ = cancel;
  protoOf(StandaloneCoroutine).plus_ee14jq_k$ = plus_1;
  protoOf(StandaloneCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(StandaloneCoroutine).get_j1ktw6_k$ = get;
  protoOf(StandaloneCoroutine).fold_iindx8_k$ = fold;
  protoOf(StandaloneCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(LazyStandaloneCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(LazyStandaloneCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(LazyStandaloneCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(LazyStandaloneCoroutine).cancel_2kogtl_k$ = cancel;
  protoOf(LazyStandaloneCoroutine).plus_ee14jq_k$ = plus_1;
  protoOf(LazyStandaloneCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(LazyStandaloneCoroutine).get_j1ktw6_k$ = get;
  protoOf(LazyStandaloneCoroutine).fold_iindx8_k$ = fold;
  protoOf(LazyStandaloneCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(ScopeCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(ScopeCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(ScopeCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(ScopeCoroutine).cancel_2kogtl_k$ = cancel;
  protoOf(ScopeCoroutine).plus_ee14jq_k$ = plus_1;
  protoOf(ScopeCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(ScopeCoroutine).get_j1ktw6_k$ = get;
  protoOf(ScopeCoroutine).fold_iindx8_k$ = fold;
  protoOf(ScopeCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(DispatchedCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(DispatchedCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(DispatchedCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(DispatchedCoroutine).cancel_2kogtl_k$ = cancel;
  protoOf(DispatchedCoroutine).plus_ee14jq_k$ = plus_1;
  protoOf(DispatchedCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(DispatchedCoroutine).get_j1ktw6_k$ = get;
  protoOf(DispatchedCoroutine).fold_iindx8_k$ = fold;
  protoOf(DispatchedCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(DeferredCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(DeferredCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(DeferredCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(DeferredCoroutine).cancel_2kogtl_k$ = cancel;
  protoOf(DeferredCoroutine).plus_ee14jq_k$ = plus_1;
  protoOf(DeferredCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(DeferredCoroutine).get_j1ktw6_k$ = get;
  protoOf(DeferredCoroutine).fold_iindx8_k$ = fold;
  protoOf(DeferredCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(LazyDeferredCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(LazyDeferredCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(LazyDeferredCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(LazyDeferredCoroutine).cancel_2kogtl_k$ = cancel;
  protoOf(LazyDeferredCoroutine).plus_ee14jq_k$ = plus_1;
  protoOf(LazyDeferredCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(LazyDeferredCoroutine).get_j1ktw6_k$ = get;
  protoOf(LazyDeferredCoroutine).fold_iindx8_k$ = fold;
  protoOf(LazyDeferredCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(CancellableContinuationImpl).cancel$default_hru8c2_k$ = cancel$default_1;
  protoOf(CancellableContinuationImpl).tryResume$default_32aap5_k$ = tryResume$default;
  protoOf(CompletableDeferredImpl).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(CompletableDeferredImpl).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(CompletableDeferredImpl).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(CompletableDeferredImpl).cancel_2kogtl_k$ = cancel;
  protoOf(CompletableDeferredImpl).plus_ee14jq_k$ = plus_1;
  protoOf(CompletableDeferredImpl).plus_rgw9wi_k$ = plus;
  protoOf(CompletableDeferredImpl).get_j1ktw6_k$ = get;
  protoOf(CompletableDeferredImpl).fold_iindx8_k$ = fold;
  protoOf(CompletableDeferredImpl).minusKey_y21q55_k$ = minusKey;
  protoOf(CoroutineDispatcher).get_j1ktw6_k$ = get_0;
  protoOf(CoroutineDispatcher).fold_iindx8_k$ = fold;
  protoOf(CoroutineDispatcher).minusKey_y21q55_k$ = minusKey_0;
  protoOf(CoroutineDispatcher).plus_rgw9wi_k$ = plus;
  protoOf(_no_name_provided__qut3iv).get_j1ktw6_k$ = get;
  protoOf(_no_name_provided__qut3iv).fold_iindx8_k$ = fold;
  protoOf(_no_name_provided__qut3iv).minusKey_y21q55_k$ = minusKey;
  protoOf(_no_name_provided__qut3iv).plus_rgw9wi_k$ = plus;
  protoOf(CoroutineName).get_j1ktw6_k$ = get;
  protoOf(CoroutineName).fold_iindx8_k$ = fold;
  protoOf(CoroutineName).minusKey_y21q55_k$ = minusKey;
  protoOf(CoroutineName).plus_rgw9wi_k$ = plus;
  protoOf(EventLoop).plus_rgw9wi_k$ = plus;
  protoOf(EventLoop).get_j1ktw6_k$ = get_0;
  protoOf(EventLoop).fold_iindx8_k$ = fold;
  protoOf(EventLoop).minusKey_y21q55_k$ = minusKey_0;
  protoOf(AwaitContinuation).cancel$default_hru8c2_k$ = cancel$default_1;
  protoOf(AwaitContinuation).tryResume$default_32aap5_k$ = tryResume$default;
  protoOf(JobImpl).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(JobImpl).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(JobImpl).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(JobImpl).cancel_2kogtl_k$ = cancel;
  protoOf(JobImpl).plus_ee14jq_k$ = plus_1;
  protoOf(JobImpl).plus_rgw9wi_k$ = plus;
  protoOf(JobImpl).get_j1ktw6_k$ = get;
  protoOf(JobImpl).fold_iindx8_k$ = fold;
  protoOf(JobImpl).minusKey_y21q55_k$ = minusKey;
  protoOf(MainCoroutineDispatcher).plus_rgw9wi_k$ = plus;
  protoOf(MainCoroutineDispatcher).get_j1ktw6_k$ = get_0;
  protoOf(MainCoroutineDispatcher).fold_iindx8_k$ = fold;
  protoOf(MainCoroutineDispatcher).minusKey_y21q55_k$ = minusKey_0;
  protoOf(NonCancellable).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(NonCancellable).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(NonCancellable).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(NonCancellable).get_j1ktw6_k$ = get;
  protoOf(NonCancellable).fold_iindx8_k$ = fold;
  protoOf(NonCancellable).minusKey_y21q55_k$ = minusKey;
  protoOf(NonCancellable).plus_rgw9wi_k$ = plus;
  protoOf(NonCancellable).plus_ee14jq_k$ = plus_1;
  protoOf(NonCancellable).cancel_2kogtl_k$ = cancel;
  protoOf(SupervisorJobImpl).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(SupervisorJobImpl).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(SupervisorJobImpl).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(SupervisorJobImpl).cancel_2kogtl_k$ = cancel;
  protoOf(SupervisorJobImpl).plus_ee14jq_k$ = plus_1;
  protoOf(SupervisorJobImpl).plus_rgw9wi_k$ = plus;
  protoOf(SupervisorJobImpl).get_j1ktw6_k$ = get;
  protoOf(SupervisorJobImpl).fold_iindx8_k$ = fold;
  protoOf(SupervisorJobImpl).minusKey_y21q55_k$ = minusKey;
  protoOf(TimeoutCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(TimeoutCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(TimeoutCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(TimeoutCoroutine).cancel_2kogtl_k$ = cancel;
  protoOf(TimeoutCoroutine).plus_ee14jq_k$ = plus_1;
  protoOf(TimeoutCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(TimeoutCoroutine).get_j1ktw6_k$ = get;
  protoOf(TimeoutCoroutine).fold_iindx8_k$ = fold;
  protoOf(TimeoutCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(Unconfined).plus_rgw9wi_k$ = plus;
  protoOf(Unconfined).get_j1ktw6_k$ = get_0;
  protoOf(Unconfined).fold_iindx8_k$ = fold;
  protoOf(Unconfined).minusKey_y21q55_k$ = minusKey_0;
  protoOf(YieldContext).get_j1ktw6_k$ = get;
  protoOf(YieldContext).fold_iindx8_k$ = fold;
  protoOf(YieldContext).minusKey_y21q55_k$ = minusKey;
  protoOf(YieldContext).plus_rgw9wi_k$ = plus;
  protoOf(BufferedChannelIterator).next0_nshvhy_k$ = next0;
  protoOf(BufferedChannel).close$default_4vjk8d_k$ = close$default;
  protoOf(BufferedChannel).cancel$default_do42m4_k$ = cancel$default_3;
  protoOf(BufferedChannel).cancel$default_l3ut5j_k$ = cancel$default_2;
  protoOf(BufferedChannel).offer_pm4fdq_k$ = offer;
  protoOf(BufferedChannel).poll_21vi7_k$ = poll;
  protoOf(BufferedChannel).receiveOrNull_5cvr9l_k$ = receiveOrNull;
  protoOf(ChannelCoroutine).close$default_4vjk8d_k$ = close$default;
  protoOf(ChannelCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(ChannelCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(ChannelCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(ChannelCoroutine).plus_ee14jq_k$ = plus_1;
  protoOf(ChannelCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(ChannelCoroutine).get_j1ktw6_k$ = get;
  protoOf(ChannelCoroutine).fold_iindx8_k$ = fold;
  protoOf(ChannelCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(ConflatedBufferedChannel).close$default_4vjk8d_k$ = close$default;
  protoOf(ConflatedBufferedChannel).cancel$default_do42m4_k$ = cancel$default_3;
  protoOf(ConflatedBufferedChannel).cancel$default_l3ut5j_k$ = cancel$default_2;
  protoOf(ConflatedBufferedChannel).offer_pm4fdq_k$ = offer;
  protoOf(ConflatedBufferedChannel).poll_21vi7_k$ = poll;
  protoOf(ConflatedBufferedChannel).receiveOrNull_5cvr9l_k$ = receiveOrNull;
  protoOf(ProducerCoroutine).close$default_4vjk8d_k$ = close$default;
  protoOf(ProducerCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(ProducerCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(ProducerCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(ProducerCoroutine).plus_ee14jq_k$ = plus_1;
  protoOf(ProducerCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(ProducerCoroutine).get_j1ktw6_k$ = get;
  protoOf(ProducerCoroutine).fold_iindx8_k$ = fold;
  protoOf(ProducerCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(SharedFlowImpl).fuse$default_fjb5uq_k$ = fuse$default;
  protoOf(StateFlowImpl).fuse$default_fjb5uq_k$ = fuse$default;
  protoOf(SubscriptionCountStateFlow).fuse$default_fjb5uq_k$ = fuse$default;
  protoOf(ChannelFlow).fuse$default_fjb5uq_k$ = fuse$default;
  protoOf(ChannelFlowOperator).fuse$default_fjb5uq_k$ = fuse$default;
  protoOf(ChannelFlowOperatorImpl).fuse$default_fjb5uq_k$ = fuse$default;
  protoOf(LimitedDispatcher).plus_rgw9wi_k$ = plus;
  protoOf(LimitedDispatcher).get_j1ktw6_k$ = get_0;
  protoOf(LimitedDispatcher).fold_iindx8_k$ = fold;
  protoOf(LimitedDispatcher).minusKey_y21q55_k$ = minusKey_0;
  protoOf(SelectImplementation).invoke_bvxgnl_k$ = invoke;
  protoOf(SelectImplementation).onTimeout_oq3k0u_k$ = onTimeout;
  protoOf(CancellableContinuationWithOwner).cancel$default_hru8c2_k$ = cancel$default_1;
  protoOf(CancellableContinuationWithOwner).tryResume$default_32aap5_k$ = tryResume$default;
  protoOf(MutexImpl).lock$default_6ude1f_k$ = lock$default;
  protoOf(MutexImpl).tryLock$default_rul8cl_k$ = tryLock$default;
  protoOf(MutexImpl).unlock$default_u8q7s8_k$ = unlock$default;
  protoOf(CloseableCoroutineDispatcher).plus_rgw9wi_k$ = plus;
  protoOf(CloseableCoroutineDispatcher).get_j1ktw6_k$ = get_0;
  protoOf(CloseableCoroutineDispatcher).fold_iindx8_k$ = fold;
  protoOf(CloseableCoroutineDispatcher).minusKey_y21q55_k$ = minusKey_0;
  protoOf(UndispatchedCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(UndispatchedCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(UndispatchedCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(UndispatchedCoroutine).cancel_2kogtl_k$ = cancel;
  protoOf(UndispatchedCoroutine).plus_ee14jq_k$ = plus_1;
  protoOf(UndispatchedCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(UndispatchedCoroutine).get_j1ktw6_k$ = get;
  protoOf(UndispatchedCoroutine).fold_iindx8_k$ = fold;
  protoOf(UndispatchedCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(JsMainDispatcher).plus_rgw9wi_k$ = plus;
  protoOf(JsMainDispatcher).get_j1ktw6_k$ = get_0;
  protoOf(JsMainDispatcher).fold_iindx8_k$ = fold;
  protoOf(JsMainDispatcher).minusKey_y21q55_k$ = minusKey_0;
  protoOf(UnconfinedEventLoop).plus_rgw9wi_k$ = plus;
  protoOf(UnconfinedEventLoop).get_j1ktw6_k$ = get_0;
  protoOf(UnconfinedEventLoop).fold_iindx8_k$ = fold;
  protoOf(UnconfinedEventLoop).minusKey_y21q55_k$ = minusKey_0;
  protoOf(SetTimeoutBasedDispatcher).plus_rgw9wi_k$ = plus;
  protoOf(SetTimeoutBasedDispatcher).get_j1ktw6_k$ = get_0;
  protoOf(SetTimeoutBasedDispatcher).fold_iindx8_k$ = fold;
  protoOf(SetTimeoutBasedDispatcher).minusKey_y21q55_k$ = minusKey_0;
  protoOf(SetTimeoutBasedDispatcher).delay_sw4t2e_k$ = delay;
  protoOf(NodeDispatcher).plus_rgw9wi_k$ = plus;
  protoOf(NodeDispatcher).get_j1ktw6_k$ = get_0;
  protoOf(NodeDispatcher).fold_iindx8_k$ = fold;
  protoOf(NodeDispatcher).minusKey_y21q55_k$ = minusKey_0;
  protoOf(NodeDispatcher).delay_sw4t2e_k$ = delay;
  protoOf(SetTimeoutDispatcher).plus_rgw9wi_k$ = plus;
  protoOf(SetTimeoutDispatcher).get_j1ktw6_k$ = get_0;
  protoOf(SetTimeoutDispatcher).fold_iindx8_k$ = fold;
  protoOf(SetTimeoutDispatcher).minusKey_y21q55_k$ = minusKey_0;
  protoOf(SetTimeoutDispatcher).delay_sw4t2e_k$ = delay;
  protoOf(WindowDispatcher).plus_rgw9wi_k$ = plus;
  protoOf(WindowDispatcher).get_j1ktw6_k$ = get_0;
  protoOf(WindowDispatcher).fold_iindx8_k$ = fold;
  protoOf(WindowDispatcher).minusKey_y21q55_k$ = minusKey_0;
  protoOf(WindowDispatcher).delay_sw4t2e_k$ = delay;
  //endregion
  //region block: init
  UNDECIDED = 0;
  SUSPENDED = 1;
  RESUMED = 2;
  UNDECIDED_0 = 0;
  NO_INDEX = 536870911;
  SUSPENDED_0 = 1;
  RESUMED_0 = 2;
  DECISION_SHIFT = 29;
  INDEX_MASK = 536870911;
  FALSE = 0;
  TRUE = 1;
  RETRY = -1;
  BUFFER_END_RENDEZVOUS = new Long(0, 0);
  BUFFER_END_UNLIMITED = new Long(-1, 2147483647);
  RESULT_RENDEZVOUS = 0;
  RESULT_BUFFERED = 1;
  RESULT_SUSPEND = 2;
  RESULT_CLOSED = 4;
  RESULT_FAILED = 5;
  RESULT_SUSPEND_NO_WAITER = 3;
  CLOSE_STATUS_ACTIVE = 0;
  CLOSE_STATUS_CLOSED = 2;
  CLOSE_STATUS_CANCELLATION_STARTED = 1;
  CLOSE_STATUS_CANCELLED = 3;
  SENDERS_COUNTER_MASK = new Long(-1, 268435455);
  EB_COMPLETED_PAUSE_EXPAND_BUFFERS_BIT = new Long(0, 1073741824);
  EB_COMPLETED_COUNTER_MASK = new Long(-1, 1073741823);
  SENDERS_CLOSE_STATUS_SHIFT = 60;
  DEFAULT_CLOSE_MESSAGE = 'Channel was closed';
  DEFAULT_CONCURRENCY_PROPERTY_NAME = 'kotlinx.coroutines.flow.defaultConcurrency';
  POINTERS_SHIFT = 16;
  MODE_CANCELLABLE = 1;
  MODE_CANCELLABLE_REUSABLE = 2;
  MODE_UNINITIALIZED = -1;
  MODE_UNDISPATCHED = 4;
  MODE_ATOMIC = 0;
  TRY_SELECT_SUCCESSFUL = 0;
  TRY_SELECT_CANCELLED = 2;
  TRY_SELECT_ALREADY_SELECTED = 3;
  TRY_SELECT_REREGISTER = 1;
  TRY_LOCK_SUCCESS = 0;
  TRY_LOCK_FAILED = 1;
  TRY_LOCK_ALREADY_LOCKED_BY_OWNER = 2;
  UNDEFINED_0 = 'undefined';
  counter = 0;
  DEBUG = false;
  RECOVER_STACK_TRACES = false;
  MAX_DELAY = new Long(2147483647, 0);
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = BufferOverflow_DROP_OLDEST_getInstance;
  _.$_$.b = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.c = collect;
  _.$_$.d = first;
  _.$_$.e = delay;
  _.$_$.f = cancelAndJoin;
  _.$_$.g = coroutineScope;
  _.$_$.h = delay_0;
  _.$_$.i = delay_1;
  _.$_$.j = joinAll;
  _.$_$.k = withContext;
  _.$_$.l = withTimeoutOrNull;
  _.$_$.m = withTimeout;
  _.$_$.n = yield_0;
  _.$_$.o = cancel$default_0;
  _.$_$.p = cancel$default;
  _.$_$.q = invokeOnCompletion$default;
  _.$_$.r = ChannelResult__getOrNull_impl_f5e07h;
  _.$_$.s = _ChannelResult___get_isSuccess__impl__odq1z9;
  _.$_$.t = Factory_getInstance;
  _.$_$.u = Key_getInstance_0;
  _.$_$.v = Key_getInstance_1;
  _.$_$.w = Key_getInstance_2;
  _.$_$.x = Dispatchers_getInstance;
  _.$_$.y = GlobalScope_getInstance;
  _.$_$.z = Key_getInstance_3;
  _.$_$.a1 = NonCancellable_getInstance;
  _.$_$.b1 = Channel_0;
  _.$_$.c1 = cancelConsumed;
  _.$_$.d1 = FlowCollector;
  _.$_$.e1 = Flow;
  _.$_$.f1 = MutableSharedFlow_0;
  _.$_$.g1 = MutableStateFlow_0;
  _.$_$.h1 = emptyFlow;
  _.$_$.i1 = flow;
  _.$_$.j1 = takeWhile;
  _.$_$.k1 = LinkedListHead;
  _.$_$.l1 = LinkedListNode;
  _.$_$.m1 = recoverStackTrace;
  _.$_$.n1 = Mutex_0;
  _.$_$.o1 = CancellableContinuationImpl;
  _.$_$.p1 = CloseableCoroutineDispatcher;
  _.$_$.q1 = CompletableDeferred_0;
  _.$_$.r1 = CompletableJob;
  _.$_$.s1 = CoroutineDispatcher;
  _.$_$.t1 = CoroutineExceptionHandler;
  _.$_$.u1 = CoroutineName;
  _.$_$.v1 = CoroutineScope_0;
  _.$_$.w1 = CoroutineScope;
  _.$_$.x1 = invokeOnTimeout;
  _.$_$.y1 = Delay;
  _.$_$.z1 = DisposableHandle;
  _.$_$.a2 = Job_0;
  _.$_$.b2 = Job;
  _.$_$.c2 = get_MODE_CANCELLABLE;
  _.$_$.d2 = Runnable;
  _.$_$.e2 = SupervisorJob;
  _.$_$.f2 = async;
  _.$_$.g2 = cancel_1;
  _.$_$.h2 = cancel_4;
  _.$_$.i2 = cancel_2;
  _.$_$.j2 = cancel_3;
  _.$_$.k2 = get_isActive_0;
  _.$_$.l2 = get_isActive;
  _.$_$.m2 = get_job;
  _.$_$.n2 = launch;
  //endregion
  return _;
}));
