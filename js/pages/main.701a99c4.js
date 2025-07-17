/*! For license information please see main.701a99c4.js.LICENSE.txt */
( () => {
    "use strict";
    var e = {
        4: (e, t, n) => {
            var r = n(853)
              , a = n(43)
              , l = n(950);
            function i(e) {
                var t = "https://react.dev/errors/" + e;
                if (1 < arguments.length) {
                    t += "?args[]=" + encodeURIComponent(arguments[1]);
                    for (var n = 2; n < arguments.length; n++)
                        t += "&args[]=" + encodeURIComponent(arguments[n])
                }
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            function o(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
            }
            var s = Symbol.for("react.element")
              , c = Symbol.for("react.transitional.element")
              , u = Symbol.for("react.portal")
              , d = Symbol.for("react.fragment")
              , f = Symbol.for("react.strict_mode")
              , p = Symbol.for("react.profiler")
              , m = Symbol.for("react.provider")
              , h = Symbol.for("react.consumer")
              , g = Symbol.for("react.context")
              , v = Symbol.for("react.forward_ref")
              , y = Symbol.for("react.suspense")
              , b = Symbol.for("react.suspense_list")
              , x = Symbol.for("react.memo")
              , w = Symbol.for("react.lazy");
            Symbol.for("react.scope"),
            Symbol.for("react.debug_trace_mode");
            var k = Symbol.for("react.offscreen");
            Symbol.for("react.legacy_hidden"),
            Symbol.for("react.tracing_marker");
            var S = Symbol.for("react.memo_cache_sentinel")
              , j = Symbol.iterator;
            function N(e) {
                return null === e || "object" !== typeof e ? null : "function" === typeof (e = j && e[j] || e["@@iterator"]) ? e : null
            }
            var E = Symbol.for("react.client.reference");
            function C(e) {
                if (null == e)
                    return null;
                if ("function" === typeof e)
                    return e.$$typeof === E ? null : e.displayName || e.name || null;
                if ("string" === typeof e)
                    return e;
                switch (e) {
                case d:
                    return "Fragment";
                case u:
                    return "Portal";
                case p:
                    return "Profiler";
                case f:
                    return "StrictMode";
                case y:
                    return "Suspense";
                case b:
                    return "SuspenseList"
                }
                if ("object" === typeof e)
                    switch (e.$$typeof) {
                    case g:
                        return (e.displayName || "Context") + ".Provider";
                    case h:
                        return (e._context.displayName || "Context") + ".Consumer";
                    case v:
                        var t = e.render;
                        return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"),
                        e;
                    case x:
                        return null !== (t = e.displayName || null) ? t : C(e.type) || "Memo";
                    case w:
                        t = e._payload,
                        e = e._init;
                        try {
                            return C(e(t))
                        } catch (n) {}
                    }
                return null
            }
            var T, P, L = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = Object.assign;
            function _(e) {
                if (void 0 === T)
                    try {
                        throw Error()
                    } catch (n) {
                        var t = n.stack.trim().match(/\n( *(at )?)/);
                        T = t && t[1] || "",
                        P = -1 < n.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
                    }
                return "\n" + T + e + P
            }
            var A = !1;
            function R(e, t) {
                if (!e || A)
                    return "";
                A = !0;
                var n = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    var r = {
                        DetermineComponentFrameRoot: function() {
                            try {
                                if (t) {
                                    var n = function() {
                                        throw Error()
                                    };
                                    if (Object.defineProperty(n.prototype, "props", {
                                        set: function() {
                                            throw Error()
                                        }
                                    }),
                                    "object" === typeof Reflect && Reflect.construct) {
                                        try {
                                            Reflect.construct(n, [])
                                        } catch (a) {
                                            var r = a
                                        }
                                        Reflect.construct(e, [], n)
                                    } else {
                                        try {
                                            n.call()
                                        } catch (l) {
                                            r = l
                                        }
                                        e.call(n.prototype)
                                    }
                                } else {
                                    try {
                                        throw Error()
                                    } catch (i) {
                                        r = i
                                    }
                                    (n = e()) && "function" === typeof n.catch && n.catch((function() {}
                                    ))
                                }
                            } catch (o) {
                                if (o && r && "string" === typeof o.stack)
                                    return [o.stack, r.stack]
                            }
                            return [null, null]
                        }
                    };
                    r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                    var a = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
                    a && a.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                        value: "DetermineComponentFrameRoot"
                    });
                    var l = r.DetermineComponentFrameRoot()
                      , i = l[0]
                      , o = l[1];
                    if (i && o) {
                        var s = i.split("\n")
                          , c = o.split("\n");
                        for (a = r = 0; r < s.length && !s[r].includes("DetermineComponentFrameRoot"); )
                            r++;
                        for (; a < c.length && !c[a].includes("DetermineComponentFrameRoot"); )
                            a++;
                        if (r === s.length || a === c.length)
                            for (r = s.length - 1,
                            a = c.length - 1; 1 <= r && 0 <= a && s[r] !== c[a]; )
                                a--;
                        for (; 1 <= r && 0 <= a; r--,
                        a--)
                            if (s[r] !== c[a]) {
                                if (1 !== r || 1 !== a)
                                    do {
                                        if (r--,
                                        0 > --a || s[r] !== c[a]) {
                                            var u = "\n" + s[r].replace(" at new ", " at ");
                                            return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)),
                                            u
                                        }
                                    } while (1 <= r && 0 <= a);
                                break
                            }
                    }
                } finally {
                    A = !1,
                    Error.prepareStackTrace = n
                }
                return (n = e ? e.displayName || e.name : "") ? _(n) : ""
            }
            function O(e) {
                switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    return _(e.type);
                case 16:
                    return _("Lazy");
                case 13:
                    return _("Suspense");
                case 19:
                    return _("SuspenseList");
                case 0:
                case 15:
                    return e = R(e.type, !1);
                case 11:
                    return e = R(e.type.render, !1);
                case 1:
                    return e = R(e.type, !0);
                default:
                    return ""
                }
            }
            function M(e) {
                try {
                    var t = "";
                    do {
                        t += O(e),
                        e = e.return
                    } while (e);
                    return t
                } catch (n) {
                    return "\nError generating stack: " + n.message + "\n" + n.stack
                }
            }
            function I(e) {
                var t = e
                  , n = e;
                if (e.alternate)
                    for (; t.return; )
                        t = t.return;
                else {
                    e = t;
                    do {
                        0 !== (4098 & (t = e).flags) && (n = t.return),
                        e = t.return
                    } while (e)
                }
                return 3 === t.tag ? n : null
            }
            function D(e) {
                if (13 === e.tag) {
                    var t = e.memoizedState;
                    if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)),
                    null !== t)
                        return t.dehydrated
                }
                return null
            }
            function F(e) {
                if (I(e) !== e)
                    throw Error(i(188))
            }
            function W(e) {
                var t = e.tag;
                if (5 === t || 26 === t || 27 === t || 6 === t)
                    return e;
                for (e = e.child; null !== e; ) {
                    if (null !== (t = W(e)))
                        return t;
                    e = e.sibling
                }
                return null
            }
            var U = Array.isArray
              , H = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
              , B = {
                pending: !1,
                data: null,
                method: null,
                action: null
            }
              , $ = []
              , V = -1;
            function G(e) {
                return {
                    current: e
                }
            }
            function q(e) {
                0 > V || (e.current = $[V],
                $[V] = null,
                V--)
            }
            function Q(e, t) {
                V++,
                $[V] = e.current,
                e.current = t
            }
            var K = G(null)
              , Y = G(null)
              , X = G(null)
              , J = G(null);
            function Z(e, t) {
                switch (Q(X, t),
                Q(Y, e),
                Q(K, null),
                e = t.nodeType) {
                case 9:
                case 11:
                    t = (t = t.documentElement) && (t = t.namespaceURI) ? Yu(t) : 0;
                    break;
                default:
                    if (t = (e = 8 === e ? t.parentNode : t).tagName,
                    e = e.namespaceURI)
                        t = Xu(e = Yu(e), t);
                    else
                        switch (t) {
                        case "svg":
                            t = 1;
                            break;
                        case "math":
                            t = 2;
                            break;
                        default:
                            t = 0
                        }
                }
                q(K),
                Q(K, t)
            }
            function ee() {
                q(K),
                q(Y),
                q(X)
            }
            function te(e) {
                null !== e.memoizedState && Q(J, e);
                var t = K.current
                  , n = Xu(t, e.type);
                t !== n && (Q(Y, e),
                Q(K, n))
            }
            function ne(e) {
                Y.current === e && (q(K),
                q(Y)),
                J.current === e && (q(J),
                Md._currentValue = B)
            }
            var re = Object.prototype.hasOwnProperty
              , ae = r.unstable_scheduleCallback
              , le = r.unstable_cancelCallback
              , ie = r.unstable_shouldYield
              , oe = r.unstable_requestPaint
              , se = r.unstable_now
              , ce = r.unstable_getCurrentPriorityLevel
              , ue = r.unstable_ImmediatePriority
              , de = r.unstable_UserBlockingPriority
              , fe = r.unstable_NormalPriority
              , pe = r.unstable_LowPriority
              , me = r.unstable_IdlePriority
              , he = r.log
              , ge = r.unstable_setDisableYieldValue
              , ve = null
              , ye = null;
            function be(e) {
                if ("function" === typeof he && ge(e),
                ye && "function" === typeof ye.setStrictMode)
                    try {
                        ye.setStrictMode(ve, e)
                    } catch (t) {}
            }
            var xe = Math.clz32 ? Math.clz32 : function(e) {
                return 0 === (e >>>= 0) ? 32 : 31 - (we(e) / ke | 0) | 0
            }
              , we = Math.log
              , ke = Math.LN2;
            var Se = 128
              , je = 4194304;
            function Ne(e) {
                var t = 42 & e;
                if (0 !== t)
                    return t;
                switch (e & -e) {
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 4:
                    return 4;
                case 8:
                    return 8;
                case 16:
                    return 16;
                case 32:
                    return 32;
                case 64:
                    return 64;
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return 4194176 & e;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                    return 62914560 & e;
                case 67108864:
                    return 67108864;
                case 134217728:
                    return 134217728;
                case 268435456:
                    return 268435456;
                case 536870912:
                    return 536870912;
                case 1073741824:
                    return 0;
                default:
                    return e
                }
            }
            function Ee(e, t) {
                var n = e.pendingLanes;
                if (0 === n)
                    return 0;
                var r = 0
                  , a = e.suspendedLanes
                  , l = e.pingedLanes
                  , i = e.warmLanes;
                e = 0 !== e.finishedLanes;
                var o = 134217727 & n;
                return 0 !== o ? 0 !== (n = o & ~a) ? r = Ne(n) : 0 !== (l &= o) ? r = Ne(l) : e || 0 !== (i = o & ~i) && (r = Ne(i)) : 0 !== (o = n & ~a) ? r = Ne(o) : 0 !== l ? r = Ne(l) : e || 0 !== (i = n & ~i) && (r = Ne(i)),
                0 === r ? 0 : 0 !== t && t !== r && 0 === (t & a) && ((a = r & -r) >= (i = t & -t) || 32 === a && 0 !== (4194176 & i)) ? t : r
            }
            function Ce(e, t) {
                return 0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t)
            }
            function Te(e, t) {
                switch (e) {
                case 1:
                case 2:
                case 4:
                case 8:
                    return t + 250;
                case 16:
                case 32:
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return t + 5e3;
                default:
                    return -1
                }
            }
            function Pe() {
                var e = Se;
                return 0 === (4194176 & (Se <<= 1)) && (Se = 128),
                e
            }
            function Le() {
                var e = je;
                return 0 === (62914560 & (je <<= 1)) && (je = 4194304),
                e
            }
            function ze(e) {
                for (var t = [], n = 0; 31 > n; n++)
                    t.push(e);
                return t
            }
            function _e(e, t) {
                e.pendingLanes |= t,
                268435456 !== t && (e.suspendedLanes = 0,
                e.pingedLanes = 0,
                e.warmLanes = 0)
            }
            function Ae(e, t, n) {
                e.pendingLanes |= t,
                e.suspendedLanes &= ~t;
                var r = 31 - xe(t);
                e.entangledLanes |= t,
                e.entanglements[r] = 1073741824 | e.entanglements[r] | 4194218 & n
            }
            function Re(e, t) {
                var n = e.entangledLanes |= t;
                for (e = e.entanglements; n; ) {
                    var r = 31 - xe(n)
                      , a = 1 << r;
                    a & t | e[r] & t && (e[r] |= t),
                    n &= ~a
                }
            }
            function Oe(e) {
                return 2 < (e &= -e) ? 8 < e ? 0 !== (134217727 & e) ? 32 : 268435456 : 8 : 2
            }
            function Me() {
                var e = H.p;
                return 0 !== e ? e : void 0 === (e = window.event) ? 32 : Xd(e.type)
            }
            var Ie = Math.random().toString(36).slice(2)
              , De = "__reactFiber$" + Ie
              , Fe = "__reactProps$" + Ie
              , We = "__reactContainer$" + Ie
              , Ue = "__reactEvents$" + Ie
              , He = "__reactListeners$" + Ie
              , Be = "__reactHandles$" + Ie
              , $e = "__reactResources$" + Ie
              , Ve = "__reactMarker$" + Ie;
            function Ge(e) {
                delete e[De],
                delete e[Fe],
                delete e[Ue],
                delete e[He],
                delete e[Be]
            }
            function qe(e) {
                var t = e[De];
                if (t)
                    return t;
                for (var n = e.parentNode; n; ) {
                    if (t = n[We] || n[De]) {
                        if (n = t.alternate,
                        null !== t.child || null !== n && null !== n.child)
                            for (e = sd(e); null !== e; ) {
                                if (n = e[De])
                                    return n;
                                e = sd(e)
                            }
                        return t
                    }
                    n = (e = n).parentNode
                }
                return null
            }
            function Qe(e) {
                if (e = e[De] || e[We]) {
                    var t = e.tag;
                    if (5 === t || 6 === t || 13 === t || 26 === t || 27 === t || 3 === t)
                        return e
                }
                return null
            }
            function Ke(e) {
                var t = e.tag;
                if (5 === t || 26 === t || 27 === t || 6 === t)
                    return e.stateNode;
                throw Error(i(33))
            }
            function Ye(e) {
                var t = e[$e];
                return t || (t = e[$e] = {
                    hoistableStyles: new Map,
                    hoistableScripts: new Map
                }),
                t
            }
            function Xe(e) {
                e[Ve] = !0
            }
            var Je = new Set
              , Ze = {};
            function et(e, t) {
                tt(e, t),
                tt(e + "Capture", t)
            }
            function tt(e, t) {
                for (Ze[e] = t,
                e = 0; e < t.length; e++)
                    Je.add(t[e])
            }
            var nt = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement)
              , rt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
              , at = {}
              , lt = {};
            function it(e, t, n) {
                if (a = t,
                re.call(lt, a) || !re.call(at, a) && (rt.test(a) ? lt[a] = !0 : (at[a] = !0,
                0)))
                    if (null === n)
                        e.removeAttribute(t);
                    else {
                        switch (typeof n) {
                        case "undefined":
                        case "function":
                        case "symbol":
                            return void e.removeAttribute(t);
                        case "boolean":
                            var r = t.toLowerCase().slice(0, 5);
                            if ("data-" !== r && "aria-" !== r)
                                return void e.removeAttribute(t)
                        }
                        e.setAttribute(t, "" + n)
                    }
                var a
            }
            function ot(e, t, n) {
                if (null === n)
                    e.removeAttribute(t);
                else {
                    switch (typeof n) {
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        return void e.removeAttribute(t)
                    }
                    e.setAttribute(t, "" + n)
                }
            }
            function st(e, t, n, r) {
                if (null === r)
                    e.removeAttribute(n);
                else {
                    switch (typeof r) {
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        return void e.removeAttribute(n)
                    }
                    e.setAttributeNS(t, n, "" + r)
                }
            }
            function ct(e) {
                switch (typeof e) {
                case "bigint":
                case "boolean":
                case "number":
                case "string":
                case "undefined":
                case "object":
                    return e;
                default:
                    return ""
                }
            }
            function ut(e) {
                var t = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
            }
            function dt(e) {
                e._valueTracker || (e._valueTracker = function(e) {
                    var t = ut(e) ? "checked" : "value"
                      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
                      , r = "" + e[t];
                    if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                        var a = n.get
                          , l = n.set;
                        return Object.defineProperty(e, t, {
                            configurable: !0,
                            get: function() {
                                return a.call(this)
                            },
                            set: function(e) {
                                r = "" + e,
                                l.call(this, e)
                            }
                        }),
                        Object.defineProperty(e, t, {
                            enumerable: n.enumerable
                        }),
                        {
                            getValue: function() {
                                return r
                            },
                            setValue: function(e) {
                                r = "" + e
                            },
                            stopTracking: function() {
                                e._valueTracker = null,
                                delete e[t]
                            }
                        }
                    }
                }(e))
            }
            function ft(e) {
                if (!e)
                    return !1;
                var t = e._valueTracker;
                if (!t)
                    return !0;
                var n = t.getValue()
                  , r = "";
                return e && (r = ut(e) ? e.checked ? "true" : "false" : e.value),
                (e = r) !== n && (t.setValue(e),
                !0)
            }
            function pt(e) {
                if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0)))
                    return null;
                try {
                    return e.activeElement || e.body
                } catch (t) {
                    return e.body
                }
            }
            var mt = /[\n"\\]/g;
            function ht(e) {
                return e.replace(mt, (function(e) {
                    return "\\" + e.charCodeAt(0).toString(16) + " "
                }
                ))
            }
            function gt(e, t, n, r, a, l, i, o) {
                e.name = "",
                null != i && "function" !== typeof i && "symbol" !== typeof i && "boolean" !== typeof i ? e.type = i : e.removeAttribute("type"),
                null != t ? "number" === i ? (0 === t && "" === e.value || e.value != t) && (e.value = "" + ct(t)) : e.value !== "" + ct(t) && (e.value = "" + ct(t)) : "submit" !== i && "reset" !== i || e.removeAttribute("value"),
                null != t ? yt(e, i, ct(t)) : null != n ? yt(e, i, ct(n)) : null != r && e.removeAttribute("value"),
                null == a && null != l && (e.defaultChecked = !!l),
                null != a && (e.checked = a && "function" !== typeof a && "symbol" !== typeof a),
                null != o && "function" !== typeof o && "symbol" !== typeof o && "boolean" !== typeof o ? e.name = "" + ct(o) : e.removeAttribute("name")
            }
            function vt(e, t, n, r, a, l, i, o) {
                if (null != l && "function" !== typeof l && "symbol" !== typeof l && "boolean" !== typeof l && (e.type = l),
                null != t || null != n) {
                    if (!("submit" !== l && "reset" !== l || void 0 !== t && null !== t))
                        return;
                    n = null != n ? "" + ct(n) : "",
                    t = null != t ? "" + ct(t) : n,
                    o || t === e.value || (e.value = t),
                    e.defaultValue = t
                }
                r = "function" !== typeof (r = null != r ? r : a) && "symbol" !== typeof r && !!r,
                e.checked = o ? e.checked : !!r,
                e.defaultChecked = !!r,
                null != i && "function" !== typeof i && "symbol" !== typeof i && "boolean" !== typeof i && (e.name = i)
            }
            function yt(e, t, n) {
                "number" === t && pt(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n)
            }
            function bt(e, t, n, r) {
                if (e = e.options,
                t) {
                    t = {};
                    for (var a = 0; a < n.length; a++)
                        t["$" + n[a]] = !0;
                    for (n = 0; n < e.length; n++)
                        a = t.hasOwnProperty("$" + e[n].value),
                        e[n].selected !== a && (e[n].selected = a),
                        a && r && (e[n].defaultSelected = !0)
                } else {
                    for (n = "" + ct(n),
                    t = null,
                    a = 0; a < e.length; a++) {
                        if (e[a].value === n)
                            return e[a].selected = !0,
                            void (r && (e[a].defaultSelected = !0));
                        null !== t || e[a].disabled || (t = e[a])
                    }
                    null !== t && (t.selected = !0)
                }
            }
            function xt(e, t, n) {
                null == t || ((t = "" + ct(t)) !== e.value && (e.value = t),
                null != n) ? e.defaultValue = null != n ? "" + ct(n) : "" : e.defaultValue !== t && (e.defaultValue = t)
            }
            function wt(e, t, n, r) {
                if (null == t) {
                    if (null != r) {
                        if (null != n)
                            throw Error(i(92));
                        if (U(r)) {
                            if (1 < r.length)
                                throw Error(i(93));
                            r = r[0]
                        }
                        n = r
                    }
                    null == n && (n = ""),
                    t = n
                }
                n = ct(t),
                e.defaultValue = n,
                (r = e.textContent) === n && "" !== r && null !== r && (e.value = r)
            }
            function kt(e, t) {
                if (t) {
                    var n = e.firstChild;
                    if (n && n === e.lastChild && 3 === n.nodeType)
                        return void (n.nodeValue = t)
                }
                e.textContent = t
            }
            var St = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
            function jt(e, t, n) {
                var r = 0 === t.indexOf("--");
                null == n || "boolean" === typeof n || "" === n ? r ? e.setProperty(t, "") : "float" === t ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : "number" !== typeof n || 0 === n || St.has(t) ? "float" === t ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px"
            }
            function Nt(e, t, n) {
                if (null != t && "object" !== typeof t)
                    throw Error(i(62));
                if (e = e.style,
                null != n) {
                    for (var r in n)
                        !n.hasOwnProperty(r) || null != t && t.hasOwnProperty(r) || (0 === r.indexOf("--") ? e.setProperty(r, "") : "float" === r ? e.cssFloat = "" : e[r] = "");
                    for (var a in t)
                        r = t[a],
                        t.hasOwnProperty(a) && n[a] !== r && jt(e, a, r)
                } else
                    for (var l in t)
                        t.hasOwnProperty(l) && jt(e, l, t[l])
            }
            function Et(e) {
                if (-1 === e.indexOf("-"))
                    return !1;
                switch (e) {
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0
                }
            }
            var Ct = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
              , Tt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
            function Pt(e) {
                return Tt.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
            }
            var Lt = null;
            function zt(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
                3 === e.nodeType ? e.parentNode : e
            }
            var _t = null
              , At = null;
            function Rt(e) {
                var t = Qe(e);
                if (t && (e = t.stateNode)) {
                    var n = e[Fe] || null;
                    e: switch (e = t.stateNode,
                    t.type) {
                    case "input":
                        if (gt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
                        t = n.name,
                        "radio" === n.type && null != t) {
                            for (n = e; n.parentNode; )
                                n = n.parentNode;
                            for (n = n.querySelectorAll('input[name="' + ht("" + t) + '"][type="radio"]'),
                            t = 0; t < n.length; t++) {
                                var r = n[t];
                                if (r !== e && r.form === e.form) {
                                    var a = r[Fe] || null;
                                    if (!a)
                                        throw Error(i(90));
                                    gt(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name)
                                }
                            }
                            for (t = 0; t < n.length; t++)
                                (r = n[t]).form === e.form && ft(r)
                        }
                        break e;
                    case "textarea":
                        xt(e, n.value, n.defaultValue);
                        break e;
                    case "select":
                        null != (t = n.value) && bt(e, !!n.multiple, t, !1)
                    }
                }
            }
            var Ot = !1;
            function Mt(e, t, n) {
                if (Ot)
                    return e(t, n);
                Ot = !0;
                try {
                    return e(t)
                } finally {
                    if (Ot = !1,
                    (null !== _t || null !== At) && (Dc(),
                    _t && (t = _t,
                    e = At,
                    At = _t = null,
                    Rt(t),
                    e)))
                        for (t = 0; t < e.length; t++)
                            Rt(e[t])
                }
            }
            function It(e, t) {
                var n = e.stateNode;
                if (null === n)
                    return null;
                var r = n[Fe] || null;
                if (null === r)
                    return null;
                n = r[t];
                e: switch (t) {
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                case "onMouseEnter":
                    (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)),
                    e = !r;
                    break e;
                default:
                    e = !1
                }
                if (e)
                    return null;
                if (n && "function" !== typeof n)
                    throw Error(i(231, t, typeof n));
                return n
            }
            var Dt = !1;
            if (nt)
                try {
                    var Ft = {};
                    Object.defineProperty(Ft, "passive", {
                        get: function() {
                            Dt = !0
                        }
                    }),
                    window.addEventListener("test", Ft, Ft),
                    window.removeEventListener("test", Ft, Ft)
                } catch (kf) {
                    Dt = !1
                }
            var Wt = null
              , Ut = null
              , Ht = null;
            function Bt() {
                if (Ht)
                    return Ht;
                var e, t, n = Ut, r = n.length, a = "value"in Wt ? Wt.value : Wt.textContent, l = a.length;
                for (e = 0; e < r && n[e] === a[e]; e++)
                    ;
                var i = r - e;
                for (t = 1; t <= i && n[r - t] === a[l - t]; t++)
                    ;
                return Ht = a.slice(e, 1 < t ? 1 - t : void 0)
            }
            function $t(e) {
                var t = e.keyCode;
                return "charCode"in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t,
                10 === e && (e = 13),
                32 <= e || 13 === e ? e : 0
            }
            function Vt() {
                return !0
            }
            function Gt() {
                return !1
            }
            function qt(e) {
                function t(t, n, r, a, l) {
                    for (var i in this._reactName = t,
                    this._targetInst = r,
                    this.type = n,
                    this.nativeEvent = a,
                    this.target = l,
                    this.currentTarget = null,
                    e)
                        e.hasOwnProperty(i) && (t = e[i],
                        this[i] = t ? t(a) : a[i]);
                    return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? Vt : Gt,
                    this.isPropagationStopped = Gt,
                    this
                }
                return z(t.prototype, {
                    preventDefault: function() {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1),
                        this.isDefaultPrevented = Vt)
                    },
                    stopPropagation: function() {
                        var e = this.nativeEvent;
                        e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0),
                        this.isPropagationStopped = Vt)
                    },
                    persist: function() {},
                    isPersistent: Vt
                }),
                t
            }
            var Qt, Kt, Yt, Xt = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function(e) {
                    return e.timeStamp || Date.now()
                },
                defaultPrevented: 0,
                isTrusted: 0
            }, Jt = qt(Xt), Zt = z({}, Xt, {
                view: 0,
                detail: 0
            }), en = qt(Zt), tn = z({}, Zt, {
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                getModifierState: pn,
                button: 0,
                buttons: 0,
                relatedTarget: function(e) {
                    return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                },
                movementX: function(e) {
                    return "movementX"in e ? e.movementX : (e !== Yt && (Yt && "mousemove" === e.type ? (Qt = e.screenX - Yt.screenX,
                    Kt = e.screenY - Yt.screenY) : Kt = Qt = 0,
                    Yt = e),
                    Qt)
                },
                movementY: function(e) {
                    return "movementY"in e ? e.movementY : Kt
                }
            }), nn = qt(tn), rn = qt(z({}, tn, {
                dataTransfer: 0
            })), an = qt(z({}, Zt, {
                relatedTarget: 0
            })), ln = qt(z({}, Xt, {
                animationName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            })), on = qt(z({}, Xt, {
                clipboardData: function(e) {
                    return "clipboardData"in e ? e.clipboardData : window.clipboardData
                }
            })), sn = qt(z({}, Xt, {
                data: 0
            })), cn = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified"
            }, un = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta"
            }, dn = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey"
            };
            function fn(e) {
                var t = this.nativeEvent;
                return t.getModifierState ? t.getModifierState(e) : !!(e = dn[e]) && !!t[e]
            }
            function pn() {
                return fn
            }
            var mn = qt(z({}, Zt, {
                key: function(e) {
                    if (e.key) {
                        var t = cn[e.key] || e.key;
                        if ("Unidentified" !== t)
                            return t
                    }
                    return "keypress" === e.type ? 13 === (e = $t(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? un[e.keyCode] || "Unidentified" : ""
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: pn,
                charCode: function(e) {
                    return "keypress" === e.type ? $t(e) : 0
                },
                keyCode: function(e) {
                    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                },
                which: function(e) {
                    return "keypress" === e.type ? $t(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                }
            }))
              , hn = qt(z({}, tn, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0
            }))
              , gn = qt(z({}, Zt, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: pn
            }))
              , vn = qt(z({}, Xt, {
                propertyName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }))
              , yn = qt(z({}, tn, {
                deltaX: function(e) {
                    return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
                },
                deltaY: function(e) {
                    return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
                },
                deltaZ: 0,
                deltaMode: 0
            }))
              , bn = qt(z({}, Xt, {
                newState: 0,
                oldState: 0
            }))
              , xn = [9, 13, 27, 32]
              , wn = nt && "CompositionEvent"in window
              , kn = null;
            nt && "documentMode"in document && (kn = document.documentMode);
            var Sn = nt && "TextEvent"in window && !kn
              , jn = nt && (!wn || kn && 8 < kn && 11 >= kn)
              , Nn = String.fromCharCode(32)
              , En = !1;
            function Cn(e, t) {
                switch (e) {
                case "keyup":
                    return -1 !== xn.indexOf(t.keyCode);
                case "keydown":
                    return 229 !== t.keyCode;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1
                }
            }
            function Tn(e) {
                return "object" === typeof (e = e.detail) && "data"in e ? e.data : null
            }
            var Pn = !1;
            var Ln = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };
            function zn(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === t ? !!Ln[e.type] : "textarea" === t
            }
            function _n(e, t, n, r) {
                _t ? At ? At.push(r) : At = [r] : _t = r,
                0 < (t = Mu(t, "onChange")).length && (n = new Jt("onChange","change",null,n,r),
                e.push({
                    event: n,
                    listeners: t
                }))
            }
            var An = null
              , Rn = null;
            function On(e) {
                Tu(e, 0)
            }
            function Mn(e) {
                if (ft(Ke(e)))
                    return e
            }
            function In(e, t) {
                if ("change" === e)
                    return t
            }
            var Dn = !1;
            if (nt) {
                var Fn;
                if (nt) {
                    var Wn = "oninput"in document;
                    if (!Wn) {
                        var Un = document.createElement("div");
                        Un.setAttribute("oninput", "return;"),
                        Wn = "function" === typeof Un.oninput
                    }
                    Fn = Wn
                } else
                    Fn = !1;
                Dn = Fn && (!document.documentMode || 9 < document.documentMode)
            }
            function Hn() {
                An && (An.detachEvent("onpropertychange", Bn),
                Rn = An = null)
            }
            function Bn(e) {
                if ("value" === e.propertyName && Mn(Rn)) {
                    var t = [];
                    _n(t, Rn, e, zt(e)),
                    Mt(On, t)
                }
            }
            function $n(e, t, n) {
                "focusin" === e ? (Hn(),
                Rn = n,
                (An = t).attachEvent("onpropertychange", Bn)) : "focusout" === e && Hn()
            }
            function Vn(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e)
                    return Mn(Rn)
            }
            function Gn(e, t) {
                if ("click" === e)
                    return Mn(t)
            }
            function qn(e, t) {
                if ("input" === e || "change" === e)
                    return Mn(t)
            }
            var Qn = "function" === typeof Object.is ? Object.is : function(e, t) {
                return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
            }
            ;
            function Kn(e, t) {
                if (Qn(e, t))
                    return !0;
                if ("object" !== typeof e || null === e || "object" !== typeof t || null === t)
                    return !1;
                var n = Object.keys(e)
                  , r = Object.keys(t);
                if (n.length !== r.length)
                    return !1;
                for (r = 0; r < n.length; r++) {
                    var a = n[r];
                    if (!re.call(t, a) || !Qn(e[a], t[a]))
                        return !1
                }
                return !0
            }
            function Yn(e) {
                for (; e && e.firstChild; )
                    e = e.firstChild;
                return e
            }
            function Xn(e, t) {
                var n, r = Yn(e);
                for (e = 0; r; ) {
                    if (3 === r.nodeType) {
                        if (n = e + r.textContent.length,
                        e <= t && n >= t)
                            return {
                                node: r,
                                offset: t - e
                            };
                        e = n
                    }
                    e: {
                        for (; r; ) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break e
                            }
                            r = r.parentNode
                        }
                        r = void 0
                    }
                    r = Yn(r)
                }
            }
            function Jn(e, t) {
                return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? Jn(e, t.parentNode) : "contains"in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
            }
            function Zn(e) {
                for (var t = pt((e = null != e && null != e.ownerDocument && null != e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window).document); t instanceof e.HTMLIFrameElement; ) {
                    try {
                        var n = "string" === typeof t.contentWindow.location.href
                    } catch (r) {
                        n = !1
                    }
                    if (!n)
                        break;
                    t = pt((e = t.contentWindow).document)
                }
                return t
            }
            function er(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
            }
            function tr(e, t) {
                var n = Zn(t);
                t = e.focusedElem;
                var r = e.selectionRange;
                if (n !== t && t && t.ownerDocument && Jn(t.ownerDocument.documentElement, t)) {
                    if (null !== r && er(t))
                        if (e = r.start,
                        void 0 === (n = r.end) && (n = e),
                        "selectionStart"in t)
                            t.selectionStart = e,
                            t.selectionEnd = Math.min(n, t.value.length);
                        else if ((n = (e = t.ownerDocument || document) && e.defaultView || window).getSelection) {
                            n = n.getSelection();
                            var a = t.textContent.length
                              , l = Math.min(r.start, a);
                            r = void 0 === r.end ? l : Math.min(r.end, a),
                            !n.extend && l > r && (a = r,
                            r = l,
                            l = a),
                            a = Xn(t, l);
                            var i = Xn(t, r);
                            a && i && (1 !== n.rangeCount || n.anchorNode !== a.node || n.anchorOffset !== a.offset || n.focusNode !== i.node || n.focusOffset !== i.offset) && ((e = e.createRange()).setStart(a.node, a.offset),
                            n.removeAllRanges(),
                            l > r ? (n.addRange(e),
                            n.extend(i.node, i.offset)) : (e.setEnd(i.node, i.offset),
                            n.addRange(e)))
                        }
                    for (e = [],
                    n = t; n = n.parentNode; )
                        1 === n.nodeType && e.push({
                            element: n,
                            left: n.scrollLeft,
                            top: n.scrollTop
                        });
                    for ("function" === typeof t.focus && t.focus(),
                    t = 0; t < e.length; t++)
                        (n = e[t]).element.scrollLeft = n.left,
                        n.element.scrollTop = n.top
                }
            }
            var nr = nt && "documentMode"in document && 11 >= document.documentMode
              , rr = null
              , ar = null
              , lr = null
              , ir = !1;
            function or(e, t, n) {
                var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                ir || null == rr || rr !== pt(r) || ("selectionStart"in (r = rr) && er(r) ? r = {
                    start: r.selectionStart,
                    end: r.selectionEnd
                } : r = {
                    anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset
                },
                lr && Kn(lr, r) || (lr = r,
                0 < (r = Mu(ar, "onSelect")).length && (t = new Jt("onSelect","select",null,t,n),
                e.push({
                    event: t,
                    listeners: r
                }),
                t.target = rr)))
            }
            function sr(e, t) {
                var n = {};
                return n[e.toLowerCase()] = t.toLowerCase(),
                n["Webkit" + e] = "webkit" + t,
                n["Moz" + e] = "moz" + t,
                n
            }
            var cr = {
                animationend: sr("Animation", "AnimationEnd"),
                animationiteration: sr("Animation", "AnimationIteration"),
                animationstart: sr("Animation", "AnimationStart"),
                transitionrun: sr("Transition", "TransitionRun"),
                transitionstart: sr("Transition", "TransitionStart"),
                transitioncancel: sr("Transition", "TransitionCancel"),
                transitionend: sr("Transition", "TransitionEnd")
            }
              , ur = {}
              , dr = {};
            function fr(e) {
                if (ur[e])
                    return ur[e];
                if (!cr[e])
                    return e;
                var t, n = cr[e];
                for (t in n)
                    if (n.hasOwnProperty(t) && t in dr)
                        return ur[e] = n[t];
                return e
            }
            nt && (dr = document.createElement("div").style,
            "AnimationEvent"in window || (delete cr.animationend.animation,
            delete cr.animationiteration.animation,
            delete cr.animationstart.animation),
            "TransitionEvent"in window || delete cr.transitionend.transition);
            var pr = fr("animationend")
              , mr = fr("animationiteration")
              , hr = fr("animationstart")
              , gr = fr("transitionrun")
              , vr = fr("transitionstart")
              , yr = fr("transitioncancel")
              , br = fr("transitionend")
              , xr = new Map
              , wr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");
            function kr(e, t) {
                xr.set(e, t),
                et(t, [e])
            }
            var Sr = []
              , jr = 0
              , Nr = 0;
            function Er() {
                for (var e = jr, t = Nr = jr = 0; t < e; ) {
                    var n = Sr[t];
                    Sr[t++] = null;
                    var r = Sr[t];
                    Sr[t++] = null;
                    var a = Sr[t];
                    Sr[t++] = null;
                    var l = Sr[t];
                    if (Sr[t++] = null,
                    null !== r && null !== a) {
                        var i = r.pending;
                        null === i ? a.next = a : (a.next = i.next,
                        i.next = a),
                        r.pending = a
                    }
                    0 !== l && Lr(n, a, l)
                }
            }
            function Cr(e, t, n, r) {
                Sr[jr++] = e,
                Sr[jr++] = t,
                Sr[jr++] = n,
                Sr[jr++] = r,
                Nr |= r,
                e.lanes |= r,
                null !== (e = e.alternate) && (e.lanes |= r)
            }
            function Tr(e, t, n, r) {
                return Cr(e, t, n, r),
                zr(e)
            }
            function Pr(e, t) {
                return Cr(e, null, null, t),
                zr(e)
            }
            function Lr(e, t, n) {
                e.lanes |= n;
                var r = e.alternate;
                null !== r && (r.lanes |= n);
                for (var a = !1, l = e.return; null !== l; )
                    l.childLanes |= n,
                    null !== (r = l.alternate) && (r.childLanes |= n),
                    22 === l.tag && (null === (e = l.stateNode) || 1 & e._visibility || (a = !0)),
                    e = l,
                    l = l.return;
                a && null !== t && 3 === e.tag && (l = e.stateNode,
                a = 31 - xe(n),
                null === (e = (l = l.hiddenUpdates)[a]) ? l[a] = [t] : e.push(t),
                t.lane = 536870912 | n)
            }
            function zr(e) {
                if (50 < Tc)
                    throw Tc = 0,
                    Pc = null,
                    Error(i(185));
                for (var t = e.return; null !== t; )
                    t = (e = t).return;
                return 3 === e.tag ? e.stateNode : null
            }
            var _r = {}
              , Ar = new WeakMap;
            function Rr(e, t) {
                if ("object" === typeof e && null !== e) {
                    var n = Ar.get(e);
                    return void 0 !== n ? n : (t = {
                        value: e,
                        source: t,
                        stack: M(t)
                    },
                    Ar.set(e, t),
                    t)
                }
                return {
                    value: e,
                    source: t,
                    stack: M(t)
                }
            }
            var Or = []
              , Mr = 0
              , Ir = null
              , Dr = 0
              , Fr = []
              , Wr = 0
              , Ur = null
              , Hr = 1
              , Br = "";
            function $r(e, t) {
                Or[Mr++] = Dr,
                Or[Mr++] = Ir,
                Ir = e,
                Dr = t
            }
            function Vr(e, t, n) {
                Fr[Wr++] = Hr,
                Fr[Wr++] = Br,
                Fr[Wr++] = Ur,
                Ur = e;
                var r = Hr;
                e = Br;
                var a = 32 - xe(r) - 1;
                r &= ~(1 << a),
                n += 1;
                var l = 32 - xe(t) + a;
                if (30 < l) {
                    var i = a - a % 5;
                    l = (r & (1 << i) - 1).toString(32),
                    r >>= i,
                    a -= i,
                    Hr = 1 << 32 - xe(t) + a | n << a | r,
                    Br = l + e
                } else
                    Hr = 1 << l | n << a | r,
                    Br = e
            }
            function Gr(e) {
                null !== e.return && ($r(e, 1),
                Vr(e, 1, 0))
            }
            function qr(e) {
                for (; e === Ir; )
                    Ir = Or[--Mr],
                    Or[Mr] = null,
                    Dr = Or[--Mr],
                    Or[Mr] = null;
                for (; e === Ur; )
                    Ur = Fr[--Wr],
                    Fr[Wr] = null,
                    Br = Fr[--Wr],
                    Fr[Wr] = null,
                    Hr = Fr[--Wr],
                    Fr[Wr] = null
            }
            var Qr = null
              , Kr = null
              , Yr = !1
              , Xr = null
              , Jr = !1
              , Zr = Error(i(519));
            function ea(e) {
                throw la(Rr(Error(i(418, "")), e)),
                Zr
            }
            function ta(e) {
                var t = e.stateNode
                  , n = e.type
                  , r = e.memoizedProps;
                switch (t[De] = e,
                t[Fe] = r,
                n) {
                case "dialog":
                    Pu("cancel", t),
                    Pu("close", t);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    Pu("load", t);
                    break;
                case "video":
                case "audio":
                    for (n = 0; n < Eu.length; n++)
                        Pu(Eu[n], t);
                    break;
                case "source":
                    Pu("error", t);
                    break;
                case "img":
                case "image":
                case "link":
                    Pu("error", t),
                    Pu("load", t);
                    break;
                case "details":
                    Pu("toggle", t);
                    break;
                case "input":
                    Pu("invalid", t),
                    vt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0),
                    dt(t);
                    break;
                case "select":
                    Pu("invalid", t);
                    break;
                case "textarea":
                    Pu("invalid", t),
                    wt(t, r.value, r.defaultValue, r.children),
                    dt(t)
                }
                "string" !== typeof (n = r.children) && "number" !== typeof n && "bigint" !== typeof n || t.textContent === "" + n || !0 === r.suppressHydrationWarning || Hu(t.textContent, n) ? (null != r.popover && (Pu("beforetoggle", t),
                Pu("toggle", t)),
                null != r.onScroll && Pu("scroll", t),
                null != r.onScrollEnd && Pu("scrollend", t),
                null != r.onClick && (t.onclick = Bu),
                t = !0) : t = !1,
                t || ea(e)
            }
            function na(e) {
                for (Qr = e.return; Qr; )
                    switch (Qr.tag) {
                    case 3:
                    case 27:
                        return void (Jr = !0);
                    case 5:
                    case 13:
                        return void (Jr = !1);
                    default:
                        Qr = Qr.return
                    }
            }
            function ra(e) {
                if (e !== Qr)
                    return !1;
                if (!Yr)
                    return na(e),
                    Yr = !0,
                    !1;
                var t, n = !1;
                if ((t = 3 !== e.tag && 27 !== e.tag) && ((t = 5 === e.tag) && (t = !("form" !== (t = e.type) && "button" !== t) || Ju(e.type, e.memoizedProps)),
                t = !t),
                t && (n = !0),
                n && Kr && ea(e),
                na(e),
                13 === e.tag) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                        throw Error(i(317));
                    e: {
                        for (e = e.nextSibling,
                        n = 0; e; ) {
                            if (8 === e.nodeType)
                                if ("/$" === (t = e.data)) {
                                    if (0 === n) {
                                        Kr = od(e.nextSibling);
                                        break e
                                    }
                                    n--
                                } else
                                    "$" !== t && "$!" !== t && "$?" !== t || n++;
                            e = e.nextSibling
                        }
                        Kr = null
                    }
                } else
                    Kr = Qr ? od(e.stateNode.nextSibling) : null;
                return !0
            }
            function aa() {
                Kr = Qr = null,
                Yr = !1
            }
            function la(e) {
                null === Xr ? Xr = [e] : Xr.push(e)
            }
            var ia = Error(i(460))
              , oa = Error(i(474))
              , sa = {
                then: function() {}
            };
            function ca(e) {
                return "fulfilled" === (e = e.status) || "rejected" === e
            }
            function ua() {}
            function da(e, t, n) {
                switch (void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(ua, ua),
                t = n),
                t.status) {
                case "fulfilled":
                    return t.value;
                case "rejected":
                    if ((e = t.reason) === ia)
                        throw Error(i(483));
                    throw e;
                default:
                    if ("string" === typeof t.status)
                        t.then(ua, ua);
                    else {
                        if (null !== (e = tc) && 100 < e.shellSuspendCounter)
                            throw Error(i(482));
                        (e = t).status = "pending",
                        e.then((function(e) {
                            if ("pending" === t.status) {
                                var n = t;
                                n.status = "fulfilled",
                                n.value = e
                            }
                        }
                        ), (function(e) {
                            if ("pending" === t.status) {
                                var n = t;
                                n.status = "rejected",
                                n.reason = e
                            }
                        }
                        ))
                    }
                    switch (t.status) {
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        if ((e = t.reason) === ia)
                            throw Error(i(483));
                        throw e
                    }
                    throw fa = t,
                    ia
                }
            }
            var fa = null;
            function pa() {
                if (null === fa)
                    throw Error(i(459));
                var e = fa;
                return fa = null,
                e
            }
            var ma = null
              , ha = 0;
            function ga(e) {
                var t = ha;
                return ha += 1,
                null === ma && (ma = []),
                da(ma, e, t)
            }
            function va(e, t) {
                t = t.props.ref,
                e.ref = void 0 !== t ? t : null
            }
            function ya(e, t) {
                if (t.$$typeof === s)
                    throw Error(i(525));
                throw e = Object.prototype.toString.call(t),
                Error(i(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
            }
            function ba(e) {
                return (0,
                e._init)(e._payload)
            }
            function xa(e) {
                function t(t, n) {
                    if (e) {
                        var r = t.deletions;
                        null === r ? (t.deletions = [n],
                        t.flags |= 16) : r.push(n)
                    }
                }
                function n(n, r) {
                    if (!e)
                        return null;
                    for (; null !== r; )
                        t(n, r),
                        r = r.sibling;
                    return null
                }
                function r(e) {
                    for (var t = new Map; null !== e; )
                        null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
                        e = e.sibling;
                    return t
                }
                function a(e, t) {
                    return (e = Is(e, t)).index = 0,
                    e.sibling = null,
                    e
                }
                function l(t, n, r) {
                    return t.index = r,
                    e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 33554434,
                    n) : r : (t.flags |= 33554434,
                    n) : (t.flags |= 1048576,
                    n)
                }
                function o(t) {
                    return e && null === t.alternate && (t.flags |= 33554434),
                    t
                }
                function s(e, t, n, r) {
                    return null === t || 6 !== t.tag ? ((t = Hs(n, e.mode, r)).return = e,
                    t) : ((t = a(t, n)).return = e,
                    t)
                }
                function f(e, t, n, r) {
                    var l = n.type;
                    return l === d ? m(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === l || "object" === typeof l && null !== l && l.$$typeof === w && ba(l) === t.type) ? (va(t = a(t, n.props), n),
                    t.return = e,
                    t) : (va(t = Fs(n.type, n.key, n.props, null, e.mode, r), n),
                    t.return = e,
                    t)
                }
                function p(e, t, n, r) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Bs(n, e.mode, r)).return = e,
                    t) : ((t = a(t, n.children || [])).return = e,
                    t)
                }
                function m(e, t, n, r, l) {
                    return null === t || 7 !== t.tag ? ((t = Ws(n, e.mode, r, l)).return = e,
                    t) : ((t = a(t, n)).return = e,
                    t)
                }
                function h(e, t, n) {
                    if ("string" === typeof t && "" !== t || "number" === typeof t || "bigint" === typeof t)
                        return (t = Hs("" + t, e.mode, n)).return = e,
                        t;
                    if ("object" === typeof t && null !== t) {
                        switch (t.$$typeof) {
                        case c:
                            return va(n = Fs(t.type, t.key, t.props, null, e.mode, n), t),
                            n.return = e,
                            n;
                        case u:
                            return (t = Bs(t, e.mode, n)).return = e,
                            t;
                        case w:
                            return h(e, t = (0,
                            t._init)(t._payload), n)
                        }
                        if (U(t) || N(t))
                            return (t = Ws(t, e.mode, n, null)).return = e,
                            t;
                        if ("function" === typeof t.then)
                            return h(e, ga(t), n);
                        if (t.$$typeof === g)
                            return h(e, Eo(e, t), n);
                        ya(e, t)
                    }
                    return null
                }
                function v(e, t, n, r) {
                    var a = null !== t ? t.key : null;
                    if ("string" === typeof n && "" !== n || "number" === typeof n || "bigint" === typeof n)
                        return null !== a ? null : s(e, t, "" + n, r);
                    if ("object" === typeof n && null !== n) {
                        switch (n.$$typeof) {
                        case c:
                            return n.key === a ? f(e, t, n, r) : null;
                        case u:
                            return n.key === a ? p(e, t, n, r) : null;
                        case w:
                            return v(e, t, n = (a = n._init)(n._payload), r)
                        }
                        if (U(n) || N(n))
                            return null !== a ? null : m(e, t, n, r, null);
                        if ("function" === typeof n.then)
                            return v(e, t, ga(n), r);
                        if (n.$$typeof === g)
                            return v(e, t, Eo(e, n), r);
                        ya(e, n)
                    }
                    return null
                }
                function y(e, t, n, r, a) {
                    if ("string" === typeof r && "" !== r || "number" === typeof r || "bigint" === typeof r)
                        return s(t, e = e.get(n) || null, "" + r, a);
                    if ("object" === typeof r && null !== r) {
                        switch (r.$$typeof) {
                        case c:
                            return f(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                        case u:
                            return p(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                        case w:
                            return y(e, t, n, r = (0,
                            r._init)(r._payload), a)
                        }
                        if (U(r) || N(r))
                            return m(t, e = e.get(n) || null, r, a, null);
                        if ("function" === typeof r.then)
                            return y(e, t, n, ga(r), a);
                        if (r.$$typeof === g)
                            return y(e, t, n, Eo(t, r), a);
                        ya(t, r)
                    }
                    return null
                }
                function b(s, f, p, m) {
                    if ("object" === typeof p && null !== p && p.type === d && null === p.key && (p = p.props.children),
                    "object" === typeof p && null !== p) {
                        switch (p.$$typeof) {
                        case c:
                            e: {
                                for (var x = p.key; null !== f; ) {
                                    if (f.key === x) {
                                        if ((x = p.type) === d) {
                                            if (7 === f.tag) {
                                                n(s, f.sibling),
                                                (m = a(f, p.props.children)).return = s,
                                                s = m;
                                                break e
                                            }
                                        } else if (f.elementType === x || "object" === typeof x && null !== x && x.$$typeof === w && ba(x) === f.type) {
                                            n(s, f.sibling),
                                            va(m = a(f, p.props), p),
                                            m.return = s,
                                            s = m;
                                            break e
                                        }
                                        n(s, f);
                                        break
                                    }
                                    t(s, f),
                                    f = f.sibling
                                }
                                p.type === d ? ((m = Ws(p.props.children, s.mode, m, p.key)).return = s,
                                s = m) : (va(m = Fs(p.type, p.key, p.props, null, s.mode, m), p),
                                m.return = s,
                                s = m)
                            }
                            return o(s);
                        case u:
                            e: {
                                for (x = p.key; null !== f; ) {
                                    if (f.key === x) {
                                        if (4 === f.tag && f.stateNode.containerInfo === p.containerInfo && f.stateNode.implementation === p.implementation) {
                                            n(s, f.sibling),
                                            (m = a(f, p.children || [])).return = s,
                                            s = m;
                                            break e
                                        }
                                        n(s, f);
                                        break
                                    }
                                    t(s, f),
                                    f = f.sibling
                                }
                                (m = Bs(p, s.mode, m)).return = s,
                                s = m
                            }
                            return o(s);
                        case w:
                            return b(s, f, p = (x = p._init)(p._payload), m)
                        }
                        if (U(p))
                            return function(a, i, o, s) {
                                for (var c = null, u = null, d = i, f = i = 0, p = null; null !== d && f < o.length; f++) {
                                    d.index > f ? (p = d,
                                    d = null) : p = d.sibling;
                                    var m = v(a, d, o[f], s);
                                    if (null === m) {
                                        null === d && (d = p);
                                        break
                                    }
                                    e && d && null === m.alternate && t(a, d),
                                    i = l(m, i, f),
                                    null === u ? c = m : u.sibling = m,
                                    u = m,
                                    d = p
                                }
                                if (f === o.length)
                                    return n(a, d),
                                    Yr && $r(a, f),
                                    c;
                                if (null === d) {
                                    for (; f < o.length; f++)
                                        null !== (d = h(a, o[f], s)) && (i = l(d, i, f),
                                        null === u ? c = d : u.sibling = d,
                                        u = d);
                                    return Yr && $r(a, f),
                                    c
                                }
                                for (d = r(d); f < o.length; f++)
                                    null !== (p = y(d, a, f, o[f], s)) && (e && null !== p.alternate && d.delete(null === p.key ? f : p.key),
                                    i = l(p, i, f),
                                    null === u ? c = p : u.sibling = p,
                                    u = p);
                                return e && d.forEach((function(e) {
                                    return t(a, e)
                                }
                                )),
                                Yr && $r(a, f),
                                c
                            }(s, f, p, m);
                        if (N(p)) {
                            if ("function" !== typeof (x = N(p)))
                                throw Error(i(150));
                            return function(a, o, s, c) {
                                if (null == s)
                                    throw Error(i(151));
                                for (var u = null, d = null, f = o, p = o = 0, m = null, g = s.next(); null !== f && !g.done; p++,
                                g = s.next()) {
                                    f.index > p ? (m = f,
                                    f = null) : m = f.sibling;
                                    var b = v(a, f, g.value, c);
                                    if (null === b) {
                                        null === f && (f = m);
                                        break
                                    }
                                    e && f && null === b.alternate && t(a, f),
                                    o = l(b, o, p),
                                    null === d ? u = b : d.sibling = b,
                                    d = b,
                                    f = m
                                }
                                if (g.done)
                                    return n(a, f),
                                    Yr && $r(a, p),
                                    u;
                                if (null === f) {
                                    for (; !g.done; p++,
                                    g = s.next())
                                        null !== (g = h(a, g.value, c)) && (o = l(g, o, p),
                                        null === d ? u = g : d.sibling = g,
                                        d = g);
                                    return Yr && $r(a, p),
                                    u
                                }
                                for (f = r(f); !g.done; p++,
                                g = s.next())
                                    null !== (g = y(f, a, p, g.value, c)) && (e && null !== g.alternate && f.delete(null === g.key ? p : g.key),
                                    o = l(g, o, p),
                                    null === d ? u = g : d.sibling = g,
                                    d = g);
                                return e && f.forEach((function(e) {
                                    return t(a, e)
                                }
                                )),
                                Yr && $r(a, p),
                                u
                            }(s, f, p = x.call(p), m)
                        }
                        if ("function" === typeof p.then)
                            return b(s, f, ga(p), m);
                        if (p.$$typeof === g)
                            return b(s, f, Eo(s, p), m);
                        ya(s, p)
                    }
                    return "string" === typeof p && "" !== p || "number" === typeof p || "bigint" === typeof p ? (p = "" + p,
                    null !== f && 6 === f.tag ? (n(s, f.sibling),
                    (m = a(f, p)).return = s,
                    s = m) : (n(s, f),
                    (m = Hs(p, s.mode, m)).return = s,
                    s = m),
                    o(s)) : n(s, f)
                }
                return function(e, t, n, r) {
                    try {
                        ha = 0;
                        var a = b(e, t, n, r);
                        return ma = null,
                        a
                    } catch (i) {
                        if (i === ia)
                            throw i;
                        var l = Os(29, i, null, e.mode);
                        return l.lanes = r,
                        l.return = e,
                        l
                    }
                }
            }
            var wa = xa(!0)
              , ka = xa(!1)
              , Sa = G(null)
              , ja = G(0);
            function Na(e, t) {
                Q(ja, e = cc),
                Q(Sa, t),
                cc = e | t.baseLanes
            }
            function Ea() {
                Q(ja, cc),
                Q(Sa, Sa.current)
            }
            function Ca() {
                cc = ja.current,
                q(Sa),
                q(ja)
            }
            var Ta = G(null)
              , Pa = null;
            function La(e) {
                var t = e.alternate;
                Q(Ra, 1 & Ra.current),
                Q(Ta, e),
                null === Pa && (null === t || null !== Sa.current || null !== t.memoizedState) && (Pa = e)
            }
            function za(e) {
                if (22 === e.tag) {
                    if (Q(Ra, Ra.current),
                    Q(Ta, e),
                    null === Pa) {
                        var t = e.alternate;
                        null !== t && null !== t.memoizedState && (Pa = e)
                    }
                } else
                    _a()
            }
            function _a() {
                Q(Ra, Ra.current),
                Q(Ta, Ta.current)
            }
            function Aa(e) {
                q(Ta),
                Pa === e && (Pa = null),
                q(Ra)
            }
            var Ra = G(0);
            function Oa(e) {
                for (var t = e; null !== t; ) {
                    if (13 === t.tag) {
                        var n = t.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data))
                            return t
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if (0 !== (128 & t.flags))
                            return t
                    } else if (null !== t.child) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break;
                    for (; null === t.sibling; ) {
                        if (null === t.return || t.return === e)
                            return null;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
                return null
            }
            var Ma = "undefined" !== typeof AbortController ? AbortController : function() {
                var e = []
                  , t = this.signal = {
                    aborted: !1,
                    addEventListener: function(t, n) {
                        e.push(n)
                    }
                };
                this.abort = function() {
                    t.aborted = !0,
                    e.forEach((function(e) {
                        return e()
                    }
                    ))
                }
            }
              , Ia = r.unstable_scheduleCallback
              , Da = r.unstable_NormalPriority
              , Fa = {
                $$typeof: g,
                Consumer: null,
                Provider: null,
                _currentValue: null,
                _currentValue2: null,
                _threadCount: 0
            };
            function Wa() {
                return {
                    controller: new Ma,
                    data: new Map,
                    refCount: 0
                }
            }
            function Ua(e) {
                e.refCount--,
                0 === e.refCount && Ia(Da, (function() {
                    e.controller.abort()
                }
                ))
            }
            var Ha = null
              , Ba = 0
              , $a = 0
              , Va = null;
            function Ga() {
                if (0 === --Ba && null !== Ha) {
                    null !== Va && (Va.status = "fulfilled");
                    var e = Ha;
                    Ha = null,
                    $a = 0,
                    Va = null;
                    for (var t = 0; t < e.length; t++)
                        (0,
                        e[t])()
                }
            }
            var qa = L.S;
            L.S = function(e, t) {
                "object" === typeof t && null !== t && "function" === typeof t.then && function(e, t) {
                    if (null === Ha) {
                        var n = Ha = [];
                        Ba = 0,
                        $a = wu(),
                        Va = {
                            status: "pending",
                            value: void 0,
                            then: function(e) {
                                n.push(e)
                            }
                        }
                    }
                    Ba++,
                    t.then(Ga, Ga)
                }(0, t),
                null !== qa && qa(e, t)
            }
            ;
            var Qa = G(null);
            function Ka() {
                var e = Qa.current;
                return null !== e ? e : tc.pooledCache
            }
            function Ya(e, t) {
                Q(Qa, null === t ? Qa.current : t.pool)
            }
            function Xa() {
                var e = Ka();
                return null === e ? null : {
                    parent: Fa._currentValue,
                    pool: e
                }
            }
            var Ja = 0
              , Za = null
              , el = null
              , tl = null
              , nl = !1
              , rl = !1
              , al = !1
              , ll = 0
              , il = 0
              , ol = null
              , sl = 0;
            function cl() {
                throw Error(i(321))
            }
            function ul(e, t) {
                if (null === t)
                    return !1;
                for (var n = 0; n < t.length && n < e.length; n++)
                    if (!Qn(e[n], t[n]))
                        return !1;
                return !0
            }
            function dl(e, t, n, r, a, l) {
                return Ja = l,
                Za = t,
                t.memoizedState = null,
                t.updateQueue = null,
                t.lanes = 0,
                L.H = null === e || null === e.memoizedState ? Ni : Ei,
                al = !1,
                l = n(r, a),
                al = !1,
                rl && (l = pl(t, n, r, a)),
                fl(e),
                l
            }
            function fl(e) {
                L.H = ji;
                var t = null !== el && null !== el.next;
                if (Ja = 0,
                tl = el = Za = null,
                nl = !1,
                il = 0,
                ol = null,
                t)
                    throw Error(i(300));
                null === e || Bi || null !== (e = e.dependencies) && So(e) && (Bi = !0)
            }
            function pl(e, t, n, r) {
                Za = e;
                var a = 0;
                do {
                    if (rl && (ol = null),
                    il = 0,
                    rl = !1,
                    25 <= a)
                        throw Error(i(301));
                    if (a += 1,
                    tl = el = null,
                    null != e.updateQueue) {
                        var l = e.updateQueue;
                        l.lastEffect = null,
                        l.events = null,
                        l.stores = null,
                        null != l.memoCache && (l.memoCache.index = 0)
                    }
                    L.H = Ci,
                    l = t(n, r)
                } while (rl);
                return l
            }
            function ml() {
                var e = L.H
                  , t = e.useState()[0];
                return t = "function" === typeof t.then ? xl(t) : t,
                e = e.useState()[0],
                (null !== el ? el.memoizedState : null) !== e && (Za.flags |= 1024),
                t
            }
            function hl() {
                var e = 0 !== ll;
                return ll = 0,
                e
            }
            function gl(e, t, n) {
                t.updateQueue = e.updateQueue,
                t.flags &= -2053,
                e.lanes &= ~n
            }
            function vl(e) {
                if (nl) {
                    for (e = e.memoizedState; null !== e; ) {
                        var t = e.queue;
                        null !== t && (t.pending = null),
                        e = e.next
                    }
                    nl = !1
                }
                Ja = 0,
                tl = el = Za = null,
                rl = !1,
                il = ll = 0,
                ol = null
            }
            function yl() {
                var e = {
                    memoizedState: null,
                    baseState: null,
                    baseQueue: null,
                    queue: null,
                    next: null
                };
                return null === tl ? Za.memoizedState = tl = e : tl = tl.next = e,
                tl
            }
            function bl() {
                if (null === el) {
                    var e = Za.alternate;
                    e = null !== e ? e.memoizedState : null
                } else
                    e = el.next;
                var t = null === tl ? Za.memoizedState : tl.next;
                if (null !== t)
                    tl = t,
                    el = e;
                else {
                    if (null === e) {
                        if (null === Za.alternate)
                            throw Error(i(467));
                        throw Error(i(310))
                    }
                    e = {
                        memoizedState: (el = e).memoizedState,
                        baseState: el.baseState,
                        baseQueue: el.baseQueue,
                        queue: el.queue,
                        next: null
                    },
                    null === tl ? Za.memoizedState = tl = e : tl = tl.next = e
                }
                return tl
            }
            function xl(e) {
                var t = il;
                return il += 1,
                null === ol && (ol = []),
                e = da(ol, e, t),
                t = Za,
                null === (null === tl ? t.memoizedState : tl.next) && (t = t.alternate,
                L.H = null === t || null === t.memoizedState ? Ni : Ei),
                e
            }
            function wl(e) {
                if (null !== e && "object" === typeof e) {
                    if ("function" === typeof e.then)
                        return xl(e);
                    if (e.$$typeof === g)
                        return No(e)
                }
                throw Error(i(438, String(e)))
            }
            function kl(e) {
                var t = null
                  , n = Za.updateQueue;
                if (null !== n && (t = n.memoCache),
                null == t) {
                    var r = Za.alternate;
                    null !== r && (null !== (r = r.updateQueue) && (null != (r = r.memoCache) && (t = {
                        data: r.data.map((function(e) {
                            return e.slice()
                        }
                        )),
                        index: 0
                    })))
                }
                if (null == t && (t = {
                    data: [],
                    index: 0
                }),
                null === n && (n = {
                    lastEffect: null,
                    events: null,
                    stores: null,
                    memoCache: null
                },
                Za.updateQueue = n),
                n.memoCache = t,
                void 0 === (n = t.data[t.index]))
                    for (n = t.data[t.index] = Array(e),
                    r = 0; r < e; r++)
                        n[r] = S;
                return t.index++,
                n
            }
            function Sl(e, t) {
                return "function" === typeof t ? t(e) : t
            }
            function jl(e) {
                return Nl(bl(), el, e)
            }
            function Nl(e, t, n) {
                var r = e.queue;
                if (null === r)
                    throw Error(i(311));
                r.lastRenderedReducer = n;
                var a = e.baseQueue
                  , l = r.pending;
                if (null !== l) {
                    if (null !== a) {
                        var o = a.next;
                        a.next = l.next,
                        l.next = o
                    }
                    t.baseQueue = a = l,
                    r.pending = null
                }
                if (l = e.baseState,
                null === a)
                    e.memoizedState = l;
                else {
                    var s = o = null
                      , c = null
                      , u = t = a.next
                      , d = !1;
                    do {
                        var f = -536870913 & u.lane;
                        if (f !== u.lane ? (rc & f) === f : (Ja & f) === f) {
                            var p = u.revertLane;
                            if (0 === p)
                                null !== c && (c = c.next = {
                                    lane: 0,
                                    revertLane: 0,
                                    action: u.action,
                                    hasEagerState: u.hasEagerState,
                                    eagerState: u.eagerState,
                                    next: null
                                }),
                                f === $a && (d = !0);
                            else {
                                if ((Ja & p) === p) {
                                    u = u.next,
                                    p === $a && (d = !0);
                                    continue
                                }
                                f = {
                                    lane: 0,
                                    revertLane: u.revertLane,
                                    action: u.action,
                                    hasEagerState: u.hasEagerState,
                                    eagerState: u.eagerState,
                                    next: null
                                },
                                null === c ? (s = c = f,
                                o = l) : c = c.next = f,
                                Za.lanes |= p,
                                dc |= p
                            }
                            f = u.action,
                            al && n(l, f),
                            l = u.hasEagerState ? u.eagerState : n(l, f)
                        } else
                            p = {
                                lane: f,
                                revertLane: u.revertLane,
                                action: u.action,
                                hasEagerState: u.hasEagerState,
                                eagerState: u.eagerState,
                                next: null
                            },
                            null === c ? (s = c = p,
                            o = l) : c = c.next = p,
                            Za.lanes |= f,
                            dc |= f;
                        u = u.next
                    } while (null !== u && u !== t);
                    if (null === c ? o = l : c.next = s,
                    !Qn(l, e.memoizedState) && (Bi = !0,
                    d && null !== (n = Va)))
                        throw n;
                    e.memoizedState = l,
                    e.baseState = o,
                    e.baseQueue = c,
                    r.lastRenderedState = l
                }
                return null === a && (r.lanes = 0),
                [e.memoizedState, r.dispatch]
            }
            function El(e) {
                var t = bl()
                  , n = t.queue;
                if (null === n)
                    throw Error(i(311));
                n.lastRenderedReducer = e;
                var r = n.dispatch
                  , a = n.pending
                  , l = t.memoizedState;
                if (null !== a) {
                    n.pending = null;
                    var o = a = a.next;
                    do {
                        l = e(l, o.action),
                        o = o.next
                    } while (o !== a);
                    Qn(l, t.memoizedState) || (Bi = !0),
                    t.memoizedState = l,
                    null === t.baseQueue && (t.baseState = l),
                    n.lastRenderedState = l
                }
                return [l, r]
            }
            function Cl(e, t, n) {
                var r = Za
                  , a = bl()
                  , l = Yr;
                if (l) {
                    if (void 0 === n)
                        throw Error(i(407));
                    n = n()
                } else
                    n = t();
                var o = !Qn((el || a).memoizedState, n);
                if (o && (a.memoizedState = n,
                Bi = !0),
                a = a.queue,
                Jl(Ll.bind(null, r, a, e), [e]),
                a.getSnapshot !== t || o || null !== tl && 1 & tl.memoizedState.tag) {
                    if (r.flags |= 2048,
                    ql(9, Pl.bind(null, r, a, n, t), {
                        destroy: void 0
                    }, null),
                    null === tc)
                        throw Error(i(349));
                    l || 0 !== (60 & Ja) || Tl(r, t, n)
                }
                return n
            }
            function Tl(e, t, n) {
                e.flags |= 16384,
                e = {
                    getSnapshot: t,
                    value: n
                },
                null === (t = Za.updateQueue) ? (t = {
                    lastEffect: null,
                    events: null,
                    stores: null,
                    memoCache: null
                },
                Za.updateQueue = t,
                t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
            }
            function Pl(e, t, n, r) {
                t.value = n,
                t.getSnapshot = r,
                zl(t) && _l(e)
            }
            function Ll(e, t, n) {
                return n((function() {
                    zl(t) && _l(e)
                }
                ))
            }
            function zl(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !Qn(e, n)
                } catch (r) {
                    return !0
                }
            }
            function _l(e) {
                var t = Pr(e, 2);
                null !== t && _c(t, e, 2)
            }
            function Al(e) {
                var t = yl();
                if ("function" === typeof e) {
                    var n = e;
                    if (e = n(),
                    al) {
                        be(!0);
                        try {
                            n()
                        } finally {
                            be(!1)
                        }
                    }
                }
                return t.memoizedState = t.baseState = e,
                t.queue = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Sl,
                    lastRenderedState: e
                },
                t
            }
            function Rl(e, t, n, r) {
                return e.baseState = n,
                Nl(e, el, "function" === typeof r ? r : Sl)
            }
            function Ol(e, t, n, r, a) {
                if (wi(e))
                    throw Error(i(485));
                if (null !== (e = t.action)) {
                    var l = {
                        payload: a,
                        action: e,
                        next: null,
                        isTransition: !0,
                        status: "pending",
                        value: null,
                        reason: null,
                        listeners: [],
                        then: function(e) {
                            l.listeners.push(e)
                        }
                    };
                    null !== L.T ? n(!0) : l.isTransition = !1,
                    r(l),
                    null === (n = t.pending) ? (l.next = t.pending = l,
                    Ml(t, l)) : (l.next = n.next,
                    t.pending = n.next = l)
                }
            }
            function Ml(e, t) {
                var n = t.action
                  , r = t.payload
                  , a = e.state;
                if (t.isTransition) {
                    var l = L.T
                      , i = {};
                    L.T = i;
                    try {
                        var o = n(a, r)
                          , s = L.S;
                        null !== s && s(i, o),
                        Il(e, t, o)
                    } catch (c) {
                        Fl(e, t, c)
                    } finally {
                        L.T = l
                    }
                } else
                    try {
                        Il(e, t, l = n(a, r))
                    } catch (u) {
                        Fl(e, t, u)
                    }
            }
            function Il(e, t, n) {
                null !== n && "object" === typeof n && "function" === typeof n.then ? n.then((function(n) {
                    Dl(e, t, n)
                }
                ), (function(n) {
                    return Fl(e, t, n)
                }
                )) : Dl(e, t, n)
            }
            function Dl(e, t, n) {
                t.status = "fulfilled",
                t.value = n,
                Wl(t),
                e.state = n,
                null !== (t = e.pending) && ((n = t.next) === t ? e.pending = null : (n = n.next,
                t.next = n,
                Ml(e, n)))
            }
            function Fl(e, t, n) {
                var r = e.pending;
                if (e.pending = null,
                null !== r) {
                    r = r.next;
                    do {
                        t.status = "rejected",
                        t.reason = n,
                        Wl(t),
                        t = t.next
                    } while (t !== r)
                }
                e.action = null
            }
            function Wl(e) {
                e = e.listeners;
                for (var t = 0; t < e.length; t++)
                    (0,
                    e[t])()
            }
            function Ul(e, t) {
                return t
            }
            function Hl(e, t) {
                if (Yr) {
                    var n = tc.formState;
                    if (null !== n) {
                        e: {
                            var r = Za;
                            if (Yr) {
                                if (Kr) {
                                    t: {
                                        for (var a = Kr, l = Jr; 8 !== a.nodeType; ) {
                                            if (!l) {
                                                a = null;
                                                break t
                                            }
                                            if (null === (a = od(a.nextSibling))) {
                                                a = null;
                                                break t
                                            }
                                        }
                                        a = "F!" === (l = a.data) || "F" === l ? a : null
                                    }
                                    if (a) {
                                        Kr = od(a.nextSibling),
                                        r = "F!" === a.data;
                                        break e
                                    }
                                }
                                ea(r)
                            }
                            r = !1
                        }
                        r && (t = n[0])
                    }
                }
                return (n = yl()).memoizedState = n.baseState = t,
                r = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Ul,
                    lastRenderedState: t
                },
                n.queue = r,
                n = yi.bind(null, Za, r),
                r.dispatch = n,
                r = Al(!1),
                l = xi.bind(null, Za, !1, r.queue),
                a = {
                    state: t,
                    dispatch: null,
                    action: e,
                    pending: null
                },
                (r = yl()).queue = a,
                n = Ol.bind(null, Za, a, l, n),
                a.dispatch = n,
                r.memoizedState = e,
                [t, n, !1]
            }
            function Bl(e) {
                return $l(bl(), el, e)
            }
            function $l(e, t, n) {
                t = Nl(e, t, Ul)[0],
                e = jl(Sl)[0],
                t = "object" === typeof t && null !== t && "function" === typeof t.then ? xl(t) : t;
                var r = bl()
                  , a = r.queue
                  , l = a.dispatch;
                return n !== r.memoizedState && (Za.flags |= 2048,
                ql(9, Vl.bind(null, a, n), {
                    destroy: void 0
                }, null)),
                [t, l, e]
            }
            function Vl(e, t) {
                e.action = t
            }
            function Gl(e) {
                var t = bl()
                  , n = el;
                if (null !== n)
                    return $l(t, n, e);
                bl(),
                t = t.memoizedState;
                var r = (n = bl()).queue.dispatch;
                return n.memoizedState = e,
                [t, r, !1]
            }
            function ql(e, t, n, r) {
                return e = {
                    tag: e,
                    create: t,
                    inst: n,
                    deps: r,
                    next: null
                },
                null === (t = Za.updateQueue) && (t = {
                    lastEffect: null,
                    events: null,
                    stores: null,
                    memoCache: null
                },
                Za.updateQueue = t),
                null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next,
                n.next = e,
                e.next = r,
                t.lastEffect = e),
                e
            }
            function Ql() {
                return bl().memoizedState
            }
            function Kl(e, t, n, r) {
                var a = yl();
                Za.flags |= e,
                a.memoizedState = ql(1 | t, n, {
                    destroy: void 0
                }, void 0 === r ? null : r)
            }
            function Yl(e, t, n, r) {
                var a = bl();
                r = void 0 === r ? null : r;
                var l = a.memoizedState.inst;
                null !== el && null !== r && ul(r, el.memoizedState.deps) ? a.memoizedState = ql(t, n, l, r) : (Za.flags |= e,
                a.memoizedState = ql(1 | t, n, l, r))
            }
            function Xl(e, t) {
                Kl(8390656, 8, e, t)
            }
            function Jl(e, t) {
                Yl(2048, 8, e, t)
            }
            function Zl(e, t) {
                return Yl(4, 2, e, t)
            }
            function ei(e, t) {
                return Yl(4, 4, e, t)
            }
            function ti(e, t) {
                if ("function" === typeof t) {
                    e = e();
                    var n = t(e);
                    return function() {
                        "function" === typeof n ? n() : t(null)
                    }
                }
                if (null !== t && void 0 !== t)
                    return e = e(),
                    t.current = e,
                    function() {
                        t.current = null
                    }
            }
            function ni(e, t, n) {
                n = null !== n && void 0 !== n ? n.concat([e]) : null,
                Yl(4, 4, ti.bind(null, t, e), n)
            }
            function ri() {}
            function ai(e, t) {
                var n = bl();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== t && ul(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
                e)
            }
            function li(e, t) {
                var n = bl();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                if (null !== t && ul(t, r[1]))
                    return r[0];
                if (r = e(),
                al) {
                    be(!0);
                    try {
                        e()
                    } finally {
                        be(!1)
                    }
                }
                return n.memoizedState = [r, t],
                r
            }
            function ii(e, t, n) {
                return void 0 === n || 0 !== (1073741824 & Ja) ? e.memoizedState = t : (e.memoizedState = n,
                e = zc(),
                Za.lanes |= e,
                dc |= e,
                n)
            }
            function oi(e, t, n, r) {
                return Qn(n, t) ? n : null !== Sa.current ? (e = ii(e, n, r),
                Qn(e, t) || (Bi = !0),
                e) : 0 === (42 & Ja) ? (Bi = !0,
                e.memoizedState = n) : (e = zc(),
                Za.lanes |= e,
                dc |= e,
                t)
            }
            function si(e, t, n, r, a) {
                var l = H.p;
                H.p = 0 !== l && 8 > l ? l : 8;
                var i = L.T
                  , o = {};
                L.T = o,
                xi(e, !1, t, n);
                try {
                    var s = a()
                      , c = L.S;
                    if (null !== c && c(o, s),
                    null !== s && "object" === typeof s && "function" === typeof s.then)
                        bi(e, t, function(e, t) {
                            var n = []
                              , r = {
                                status: "pending",
                                value: null,
                                reason: null,
                                then: function(e) {
                                    n.push(e)
                                }
                            };
                            return e.then((function() {
                                r.status = "fulfilled",
                                r.value = t;
                                for (var e = 0; e < n.length; e++)
                                    (0,
                                    n[e])(t)
                            }
                            ), (function(e) {
                                for (r.status = "rejected",
                                r.reason = e,
                                e = 0; e < n.length; e++)
                                    (0,
                                    n[e])(void 0)
                            }
                            )),
                            r
                        }(s, r), Lc());
                    else
                        bi(e, t, r, Lc())
                } catch (u) {
                    bi(e, t, {
                        then: function() {},
                        status: "rejected",
                        reason: u
                    }, Lc())
                } finally {
                    H.p = l,
                    L.T = i
                }
            }
            function ci() {}
            function ui(e, t, n, r) {
                if (5 !== e.tag)
                    throw Error(i(476));
                var a = di(e).queue;
                si(e, a, t, B, null === n ? ci : function() {
                    return fi(e),
                    n(r)
                }
                )
            }
            function di(e) {
                var t = e.memoizedState;
                if (null !== t)
                    return t;
                var n = {};
                return (t = {
                    memoizedState: B,
                    baseState: B,
                    baseQueue: null,
                    queue: {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: Sl,
                        lastRenderedState: B
                    },
                    next: null
                }).next = {
                    memoizedState: n,
                    baseState: n,
                    baseQueue: null,
                    queue: {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: Sl,
                        lastRenderedState: n
                    },
                    next: null
                },
                e.memoizedState = t,
                null !== (e = e.alternate) && (e.memoizedState = t),
                t
            }
            function fi(e) {
                bi(e, di(e).next.queue, {}, Lc())
            }
            function pi() {
                return No(Md)
            }
            function mi() {
                return bl().memoizedState
            }
            function hi() {
                return bl().memoizedState
            }
            function gi(e) {
                for (var t = e.return; null !== t; ) {
                    switch (t.tag) {
                    case 24:
                    case 3:
                        var n = Lc()
                          , r = _o(t, e = zo(n), n);
                        return null !== r && (_c(r, t, n),
                        Ao(r, t, n)),
                        t = {
                            cache: Wa()
                        },
                        void (e.payload = t)
                    }
                    t = t.return
                }
            }
            function vi(e, t, n) {
                var r = Lc();
                n = {
                    lane: r,
                    revertLane: 0,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                },
                wi(e) ? ki(t, n) : null !== (n = Tr(e, t, n, r)) && (_c(n, e, r),
                Si(n, t, r))
            }
            function yi(e, t, n) {
                bi(e, t, n, Lc())
            }
            function bi(e, t, n, r) {
                var a = {
                    lane: r,
                    revertLane: 0,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                };
                if (wi(e))
                    ki(t, a);
                else {
                    var l = e.alternate;
                    if (0 === e.lanes && (null === l || 0 === l.lanes) && null !== (l = t.lastRenderedReducer))
                        try {
                            var i = t.lastRenderedState
                              , o = l(i, n);
                            if (a.hasEagerState = !0,
                            a.eagerState = o,
                            Qn(o, i))
                                return Cr(e, t, a, 0),
                                null === tc && Er(),
                                !1
                        } catch (s) {}
                    if (null !== (n = Tr(e, t, a, r)))
                        return _c(n, e, r),
                        Si(n, t, r),
                        !0
                }
                return !1
            }
            function xi(e, t, n, r) {
                if (r = {
                    lane: 2,
                    revertLane: wu(),
                    action: r,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                },
                wi(e)) {
                    if (t)
                        throw Error(i(479))
                } else
                    null !== (t = Tr(e, n, r, 2)) && _c(t, e, 2)
            }
            function wi(e) {
                var t = e.alternate;
                return e === Za || null !== t && t === Za
            }
            function ki(e, t) {
                rl = nl = !0;
                var n = e.pending;
                null === n ? t.next = t : (t.next = n.next,
                n.next = t),
                e.pending = t
            }
            function Si(e, t, n) {
                if (0 !== (4194176 & n)) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes,
                    t.lanes = n,
                    Re(e, n)
                }
            }
            var ji = {
                readContext: No,
                use: wl,
                useCallback: cl,
                useContext: cl,
                useEffect: cl,
                useImperativeHandle: cl,
                useLayoutEffect: cl,
                useInsertionEffect: cl,
                useMemo: cl,
                useReducer: cl,
                useRef: cl,
                useState: cl,
                useDebugValue: cl,
                useDeferredValue: cl,
                useTransition: cl,
                useSyncExternalStore: cl,
                useId: cl
            };
            ji.useCacheRefresh = cl,
            ji.useMemoCache = cl,
            ji.useHostTransitionStatus = cl,
            ji.useFormState = cl,
            ji.useActionState = cl,
            ji.useOptimistic = cl;
            var Ni = {
                readContext: No,
                use: wl,
                useCallback: function(e, t) {
                    return yl().memoizedState = [e, void 0 === t ? null : t],
                    e
                },
                useContext: No,
                useEffect: Xl,
                useImperativeHandle: function(e, t, n) {
                    n = null !== n && void 0 !== n ? n.concat([e]) : null,
                    Kl(4194308, 4, ti.bind(null, t, e), n)
                },
                useLayoutEffect: function(e, t) {
                    return Kl(4194308, 4, e, t)
                },
                useInsertionEffect: function(e, t) {
                    Kl(4, 2, e, t)
                },
                useMemo: function(e, t) {
                    var n = yl();
                    t = void 0 === t ? null : t;
                    var r = e();
                    if (al) {
                        be(!0);
                        try {
                            e()
                        } finally {
                            be(!1)
                        }
                    }
                    return n.memoizedState = [r, t],
                    r
                },
                useReducer: function(e, t, n) {
                    var r = yl();
                    if (void 0 !== n) {
                        var a = n(t);
                        if (al) {
                            be(!0);
                            try {
                                n(t)
                            } finally {
                                be(!1)
                            }
                        }
                    } else
                        a = t;
                    return r.memoizedState = r.baseState = a,
                    e = {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: a
                    },
                    r.queue = e,
                    e = e.dispatch = vi.bind(null, Za, e),
                    [r.memoizedState, e]
                },
                useRef: function(e) {
                    return e = {
                        current: e
                    },
                    yl().memoizedState = e
                },
                useState: function(e) {
                    var t = (e = Al(e)).queue
                      , n = yi.bind(null, Za, t);
                    return t.dispatch = n,
                    [e.memoizedState, n]
                },
                useDebugValue: ri,
                useDeferredValue: function(e, t) {
                    return ii(yl(), e, t)
                },
                useTransition: function() {
                    var e = Al(!1);
                    return e = si.bind(null, Za, e.queue, !0, !1),
                    yl().memoizedState = e,
                    [!1, e]
                },
                useSyncExternalStore: function(e, t, n) {
                    var r = Za
                      , a = yl();
                    if (Yr) {
                        if (void 0 === n)
                            throw Error(i(407));
                        n = n()
                    } else {
                        if (n = t(),
                        null === tc)
                            throw Error(i(349));
                        0 !== (60 & rc) || Tl(r, t, n)
                    }
                    a.memoizedState = n;
                    var l = {
                        value: n,
                        getSnapshot: t
                    };
                    return a.queue = l,
                    Xl(Ll.bind(null, r, l, e), [e]),
                    r.flags |= 2048,
                    ql(9, Pl.bind(null, r, l, n, t), {
                        destroy: void 0
                    }, null),
                    n
                },
                useId: function() {
                    var e = yl()
                      , t = tc.identifierPrefix;
                    if (Yr) {
                        var n = Br;
                        t = ":" + t + "R" + (n = (Hr & ~(1 << 32 - xe(Hr) - 1)).toString(32) + n),
                        0 < (n = ll++) && (t += "H" + n.toString(32)),
                        t += ":"
                    } else
                        t = ":" + t + "r" + (n = sl++).toString(32) + ":";
                    return e.memoizedState = t
                },
                useCacheRefresh: function() {
                    return yl().memoizedState = gi.bind(null, Za)
                }
            };
            Ni.useMemoCache = kl,
            Ni.useHostTransitionStatus = pi,
            Ni.useFormState = Hl,
            Ni.useActionState = Hl,
            Ni.useOptimistic = function(e) {
                var t = yl();
                t.memoizedState = t.baseState = e;
                var n = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = n,
                t = xi.bind(null, Za, !0, n),
                n.dispatch = t,
                [e, t]
            }
            ;
            var Ei = {
                readContext: No,
                use: wl,
                useCallback: ai,
                useContext: No,
                useEffect: Jl,
                useImperativeHandle: ni,
                useInsertionEffect: Zl,
                useLayoutEffect: ei,
                useMemo: li,
                useReducer: jl,
                useRef: Ql,
                useState: function() {
                    return jl(Sl)
                },
                useDebugValue: ri,
                useDeferredValue: function(e, t) {
                    return oi(bl(), el.memoizedState, e, t)
                },
                useTransition: function() {
                    var e = jl(Sl)[0]
                      , t = bl().memoizedState;
                    return ["boolean" === typeof e ? e : xl(e), t]
                },
                useSyncExternalStore: Cl,
                useId: mi
            };
            Ei.useCacheRefresh = hi,
            Ei.useMemoCache = kl,
            Ei.useHostTransitionStatus = pi,
            Ei.useFormState = Bl,
            Ei.useActionState = Bl,
            Ei.useOptimistic = function(e, t) {
                return Rl(bl(), 0, e, t)
            }
            ;
            var Ci = {
                readContext: No,
                use: wl,
                useCallback: ai,
                useContext: No,
                useEffect: Jl,
                useImperativeHandle: ni,
                useInsertionEffect: Zl,
                useLayoutEffect: ei,
                useMemo: li,
                useReducer: El,
                useRef: Ql,
                useState: function() {
                    return El(Sl)
                },
                useDebugValue: ri,
                useDeferredValue: function(e, t) {
                    var n = bl();
                    return null === el ? ii(n, e, t) : oi(n, el.memoizedState, e, t)
                },
                useTransition: function() {
                    var e = El(Sl)[0]
                      , t = bl().memoizedState;
                    return ["boolean" === typeof e ? e : xl(e), t]
                },
                useSyncExternalStore: Cl,
                useId: mi
            };
            function Ti(e, t, n, r) {
                n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : z({}, t, n),
                e.memoizedState = n,
                0 === e.lanes && (e.updateQueue.baseState = n)
            }
            Ci.useCacheRefresh = hi,
            Ci.useMemoCache = kl,
            Ci.useHostTransitionStatus = pi,
            Ci.useFormState = Gl,
            Ci.useActionState = Gl,
            Ci.useOptimistic = function(e, t) {
                var n = bl();
                return null !== el ? Rl(n, 0, e, t) : (n.baseState = e,
                [e, n.queue.dispatch])
            }
            ;
            var Pi = {
                isMounted: function(e) {
                    return !!(e = e._reactInternals) && I(e) === e
                },
                enqueueSetState: function(e, t, n) {
                    e = e._reactInternals;
                    var r = Lc()
                      , a = zo(r);
                    a.payload = t,
                    void 0 !== n && null !== n && (a.callback = n),
                    null !== (t = _o(e, a, r)) && (_c(t, e, r),
                    Ao(t, e, r))
                },
                enqueueReplaceState: function(e, t, n) {
                    e = e._reactInternals;
                    var r = Lc()
                      , a = zo(r);
                    a.tag = 1,
                    a.payload = t,
                    void 0 !== n && null !== n && (a.callback = n),
                    null !== (t = _o(e, a, r)) && (_c(t, e, r),
                    Ao(t, e, r))
                },
                enqueueForceUpdate: function(e, t) {
                    e = e._reactInternals;
                    var n = Lc()
                      , r = zo(n);
                    r.tag = 2,
                    void 0 !== t && null !== t && (r.callback = t),
                    null !== (t = _o(e, r, n)) && (_c(t, e, n),
                    Ao(t, e, n))
                }
            };
            function Li(e, t, n, r, a, l, i) {
                return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, l, i) : !t.prototype || !t.prototype.isPureReactComponent || (!Kn(n, r) || !Kn(a, l))
            }
            function zi(e, t, n, r) {
                e = t.state,
                "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
                "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
                t.state !== e && Pi.enqueueReplaceState(t, t.state, null)
            }
            function _i(e, t) {
                var n = t;
                if ("ref"in t)
                    for (var r in n = {},
                    t)
                        "ref" !== r && (n[r] = t[r]);
                if (e = e.defaultProps)
                    for (var a in n === t && (n = z({}, n)),
                    e)
                        void 0 === n[a] && (n[a] = e[a]);
                return n
            }
            var Ai = "function" === typeof reportError ? reportError : function(e) {
                if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
                    var t = new window.ErrorEvent("error",{
                        bubbles: !0,
                        cancelable: !0,
                        message: "object" === typeof e && null !== e && "string" === typeof e.message ? String(e.message) : String(e),
                        error: e
                    });
                    if (!window.dispatchEvent(t))
                        return
                } else if ("object" === typeof process && "function" === typeof process.emit)
                    return void process.emit("uncaughtException", e);
                console.error(e)
            }
            ;
            function Ri(e) {
                Ai(e)
            }
            function Oi(e) {
                console.error(e)
            }
            function Mi(e) {
                Ai(e)
            }
            function Ii(e, t) {
                try {
                    (0,
                    e.onUncaughtError)(t.value, {
                        componentStack: t.stack
                    })
                } catch (n) {
                    setTimeout((function() {
                        throw n
                    }
                    ))
                }
            }
            function Di(e, t, n) {
                try {
                    (0,
                    e.onCaughtError)(n.value, {
                        componentStack: n.stack,
                        errorBoundary: 1 === t.tag ? t.stateNode : null
                    })
                } catch (r) {
                    setTimeout((function() {
                        throw r
                    }
                    ))
                }
            }
            function Fi(e, t, n) {
                return (n = zo(n)).tag = 3,
                n.payload = {
                    element: null
                },
                n.callback = function() {
                    Ii(e, t)
                }
                ,
                n
            }
            function Wi(e) {
                return (e = zo(e)).tag = 3,
                e
            }
            function Ui(e, t, n, r) {
                var a = n.type.getDerivedStateFromError;
                if ("function" === typeof a) {
                    var l = r.value;
                    e.payload = function() {
                        return a(l)
                    }
                    ,
                    e.callback = function() {
                        Di(t, n, r)
                    }
                }
                var i = n.stateNode;
                null !== i && "function" === typeof i.componentDidCatch && (e.callback = function() {
                    Di(t, n, r),
                    "function" !== typeof a && (null === kc ? kc = new Set([this]) : kc.add(this));
                    var e = r.stack;
                    this.componentDidCatch(r.value, {
                        componentStack: null !== e ? e : ""
                    })
                }
                )
            }
            var Hi = Error(i(461))
              , Bi = !1;
            function $i(e, t, n, r) {
                t.child = null === e ? ka(t, null, n, r) : wa(t, e.child, n, r)
            }
            function Vi(e, t, n, r, a) {
                n = n.render;
                var l = t.ref;
                if ("ref"in r) {
                    var i = {};
                    for (var o in r)
                        "ref" !== o && (i[o] = r[o])
                } else
                    i = r;
                return jo(t),
                r = dl(e, t, n, i, l, a),
                o = hl(),
                null === e || Bi ? (Yr && o && Gr(t),
                t.flags |= 1,
                $i(e, t, r, a),
                t.child) : (gl(e, t, a),
                fo(e, t, a))
            }
            function Gi(e, t, n, r, a) {
                if (null === e) {
                    var l = n.type;
                    return "function" !== typeof l || Ms(l) || void 0 !== l.defaultProps || null !== n.compare ? ((e = Fs(n.type, null, r, t, t.mode, a)).ref = t.ref,
                    e.return = t,
                    t.child = e) : (t.tag = 15,
                    t.type = l,
                    qi(e, t, l, r, a))
                }
                if (l = e.child,
                !po(e, a)) {
                    var i = l.memoizedProps;
                    if ((n = null !== (n = n.compare) ? n : Kn)(i, r) && e.ref === t.ref)
                        return fo(e, t, a)
                }
                return t.flags |= 1,
                (e = Is(l, r)).ref = t.ref,
                e.return = t,
                t.child = e
            }
            function qi(e, t, n, r, a) {
                if (null !== e) {
                    var l = e.memoizedProps;
                    if (Kn(l, r) && e.ref === t.ref) {
                        if (Bi = !1,
                        t.pendingProps = r = l,
                        !po(e, a))
                            return t.lanes = e.lanes,
                            fo(e, t, a);
                        0 !== (131072 & e.flags) && (Bi = !0)
                    }
                }
                return Xi(e, t, n, r, a)
            }
            function Qi(e, t, n) {
                var r = t.pendingProps
                  , a = r.children
                  , l = 0 !== (2 & t.stateNode._pendingVisibility)
                  , i = null !== e ? e.memoizedState : null;
                if (Yi(e, t),
                "hidden" === r.mode || l) {
                    if (0 !== (128 & t.flags)) {
                        if (r = null !== i ? i.baseLanes | n : n,
                        null !== e) {
                            for (a = t.child = e.child,
                            l = 0; null !== a; )
                                l = l | a.lanes | a.childLanes,
                                a = a.sibling;
                            t.childLanes = l & ~r
                        } else
                            t.childLanes = 0,
                            t.child = null;
                        return Ki(e, t, r, n)
                    }
                    if (0 === (536870912 & n))
                        return t.lanes = t.childLanes = 536870912,
                        Ki(e, t, null !== i ? i.baseLanes | n : n, n);
                    t.memoizedState = {
                        baseLanes: 0,
                        cachePool: null
                    },
                    null !== e && Ya(0, null !== i ? i.cachePool : null),
                    null !== i ? Na(t, i) : Ea(),
                    za(t)
                } else
                    null !== i ? (Ya(0, i.cachePool),
                    Na(t, i),
                    _a(),
                    t.memoizedState = null) : (null !== e && Ya(0, null),
                    Ea(),
                    _a());
                return $i(e, t, a, n),
                t.child
            }
            function Ki(e, t, n, r) {
                var a = Ka();
                return a = null === a ? null : {
                    parent: Fa._currentValue,
                    pool: a
                },
                t.memoizedState = {
                    baseLanes: n,
                    cachePool: a
                },
                null !== e && Ya(0, null),
                Ea(),
                za(t),
                null !== e && ko(e, t, r, !0),
                null
            }
            function Yi(e, t) {
                var n = t.ref;
                if (null === n)
                    null !== e && null !== e.ref && (t.flags |= 2097664);
                else {
                    if ("function" !== typeof n && "object" !== typeof n)
                        throw Error(i(284));
                    null !== e && e.ref === n || (t.flags |= 2097664)
                }
            }
            function Xi(e, t, n, r, a) {
                return jo(t),
                n = dl(e, t, n, r, void 0, a),
                r = hl(),
                null === e || Bi ? (Yr && r && Gr(t),
                t.flags |= 1,
                $i(e, t, n, a),
                t.child) : (gl(e, t, a),
                fo(e, t, a))
            }
            function Ji(e, t, n, r, a, l) {
                return jo(t),
                t.updateQueue = null,
                n = pl(t, r, n, a),
                fl(e),
                r = hl(),
                null === e || Bi ? (Yr && r && Gr(t),
                t.flags |= 1,
                $i(e, t, n, l),
                t.child) : (gl(e, t, l),
                fo(e, t, l))
            }
            function Zi(e, t, n, r, a) {
                if (jo(t),
                null === t.stateNode) {
                    var l = _r
                      , i = n.contextType;
                    "object" === typeof i && null !== i && (l = No(i)),
                    l = new n(r,l),
                    t.memoizedState = null !== l.state && void 0 !== l.state ? l.state : null,
                    l.updater = Pi,
                    t.stateNode = l,
                    l._reactInternals = t,
                    (l = t.stateNode).props = r,
                    l.state = t.memoizedState,
                    l.refs = {},
                    Po(t),
                    i = n.contextType,
                    l.context = "object" === typeof i && null !== i ? No(i) : _r,
                    l.state = t.memoizedState,
                    "function" === typeof (i = n.getDerivedStateFromProps) && (Ti(t, n, i, r),
                    l.state = t.memoizedState),
                    "function" === typeof n.getDerivedStateFromProps || "function" === typeof l.getSnapshotBeforeUpdate || "function" !== typeof l.UNSAFE_componentWillMount && "function" !== typeof l.componentWillMount || (i = l.state,
                    "function" === typeof l.componentWillMount && l.componentWillMount(),
                    "function" === typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount(),
                    i !== l.state && Pi.enqueueReplaceState(l, l.state, null),
                    Io(t, r, l, a),
                    Mo(),
                    l.state = t.memoizedState),
                    "function" === typeof l.componentDidMount && (t.flags |= 4194308),
                    r = !0
                } else if (null === e) {
                    l = t.stateNode;
                    var o = t.memoizedProps
                      , s = _i(n, o);
                    l.props = s;
                    var c = l.context
                      , u = n.contextType;
                    i = _r,
                    "object" === typeof u && null !== u && (i = No(u));
                    var d = n.getDerivedStateFromProps;
                    u = "function" === typeof d || "function" === typeof l.getSnapshotBeforeUpdate,
                    o = t.pendingProps !== o,
                    u || "function" !== typeof l.UNSAFE_componentWillReceiveProps && "function" !== typeof l.componentWillReceiveProps || (o || c !== i) && zi(t, l, r, i),
                    To = !1;
                    var f = t.memoizedState;
                    l.state = f,
                    Io(t, r, l, a),
                    Mo(),
                    c = t.memoizedState,
                    o || f !== c || To ? ("function" === typeof d && (Ti(t, n, d, r),
                    c = t.memoizedState),
                    (s = To || Li(t, n, s, r, f, c, i)) ? (u || "function" !== typeof l.UNSAFE_componentWillMount && "function" !== typeof l.componentWillMount || ("function" === typeof l.componentWillMount && l.componentWillMount(),
                    "function" === typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount()),
                    "function" === typeof l.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof l.componentDidMount && (t.flags |= 4194308),
                    t.memoizedProps = r,
                    t.memoizedState = c),
                    l.props = r,
                    l.state = c,
                    l.context = i,
                    r = s) : ("function" === typeof l.componentDidMount && (t.flags |= 4194308),
                    r = !1)
                } else {
                    l = t.stateNode,
                    Lo(e, t),
                    u = _i(n, i = t.memoizedProps),
                    l.props = u,
                    d = t.pendingProps,
                    f = l.context,
                    c = n.contextType,
                    s = _r,
                    "object" === typeof c && null !== c && (s = No(c)),
                    (c = "function" === typeof (o = n.getDerivedStateFromProps) || "function" === typeof l.getSnapshotBeforeUpdate) || "function" !== typeof l.UNSAFE_componentWillReceiveProps && "function" !== typeof l.componentWillReceiveProps || (i !== d || f !== s) && zi(t, l, r, s),
                    To = !1,
                    f = t.memoizedState,
                    l.state = f,
                    Io(t, r, l, a),
                    Mo();
                    var p = t.memoizedState;
                    i !== d || f !== p || To || null !== e && null !== e.dependencies && So(e.dependencies) ? ("function" === typeof o && (Ti(t, n, o, r),
                    p = t.memoizedState),
                    (u = To || Li(t, n, u, r, f, p, s) || null !== e && null !== e.dependencies && So(e.dependencies)) ? (c || "function" !== typeof l.UNSAFE_componentWillUpdate && "function" !== typeof l.componentWillUpdate || ("function" === typeof l.componentWillUpdate && l.componentWillUpdate(r, p, s),
                    "function" === typeof l.UNSAFE_componentWillUpdate && l.UNSAFE_componentWillUpdate(r, p, s)),
                    "function" === typeof l.componentDidUpdate && (t.flags |= 4),
                    "function" === typeof l.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof l.componentDidUpdate || i === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
                    "function" !== typeof l.getSnapshotBeforeUpdate || i === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
                    t.memoizedProps = r,
                    t.memoizedState = p),
                    l.props = r,
                    l.state = p,
                    l.context = s,
                    r = u) : ("function" !== typeof l.componentDidUpdate || i === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
                    "function" !== typeof l.getSnapshotBeforeUpdate || i === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
                    r = !1)
                }
                return l = r,
                Yi(e, t),
                r = 0 !== (128 & t.flags),
                l || r ? (l = t.stateNode,
                n = r && "function" !== typeof n.getDerivedStateFromError ? null : l.render(),
                t.flags |= 1,
                null !== e && r ? (t.child = wa(t, e.child, null, a),
                t.child = wa(t, null, n, a)) : $i(e, t, n, a),
                t.memoizedState = l.state,
                e = t.child) : e = fo(e, t, a),
                e
            }
            function eo(e, t, n, r) {
                return aa(),
                t.flags |= 256,
                $i(e, t, n, r),
                t.child
            }
            var to = {
                dehydrated: null,
                treeContext: null,
                retryLane: 0
            };
            function no(e) {
                return {
                    baseLanes: e,
                    cachePool: Xa()
                }
            }
            function ro(e, t, n) {
                return e = null !== e ? e.childLanes & ~n : 0,
                t && (e |= mc),
                e
            }
            function ao(e, t, n) {
                var r, a = t.pendingProps, l = !1, o = 0 !== (128 & t.flags);
                if ((r = o) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & Ra.current)),
                r && (l = !0,
                t.flags &= -129),
                r = 0 !== (32 & t.flags),
                t.flags &= -33,
                null === e) {
                    if (Yr) {
                        if (l ? La(t) : _a(),
                        Yr) {
                            var s, c = Kr;
                            if (s = c) {
                                e: {
                                    for (s = c,
                                    c = Jr; 8 !== s.nodeType; ) {
                                        if (!c) {
                                            c = null;
                                            break e
                                        }
                                        if (null === (s = od(s.nextSibling))) {
                                            c = null;
                                            break e
                                        }
                                    }
                                    c = s
                                }
                                null !== c ? (t.memoizedState = {
                                    dehydrated: c,
                                    treeContext: null !== Ur ? {
                                        id: Hr,
                                        overflow: Br
                                    } : null,
                                    retryLane: 536870912
                                },
                                (s = Os(18, null, null, 0)).stateNode = c,
                                s.return = t,
                                t.child = s,
                                Qr = t,
                                Kr = null,
                                s = !0) : s = !1
                            }
                            s || ea(t)
                        }
                        if (null !== (c = t.memoizedState) && null !== (c = c.dehydrated))
                            return "$!" === c.data ? t.lanes = 16 : t.lanes = 536870912,
                            null;
                        Aa(t)
                    }
                    return c = a.children,
                    a = a.fallback,
                    l ? (_a(),
                    c = io({
                        mode: "hidden",
                        children: c
                    }, l = t.mode),
                    a = Ws(a, l, n, null),
                    c.return = t,
                    a.return = t,
                    c.sibling = a,
                    t.child = c,
                    (l = t.child).memoizedState = no(n),
                    l.childLanes = ro(e, r, n),
                    t.memoizedState = to,
                    a) : (La(t),
                    lo(t, c))
                }
                if (null !== (s = e.memoizedState) && null !== (c = s.dehydrated)) {
                    if (o)
                        256 & t.flags ? (La(t),
                        t.flags &= -257,
                        t = oo(e, t, n)) : null !== t.memoizedState ? (_a(),
                        t.child = e.child,
                        t.flags |= 128,
                        t = null) : (_a(),
                        l = a.fallback,
                        c = t.mode,
                        a = io({
                            mode: "visible",
                            children: a.children
                        }, c),
                        (l = Ws(l, c, n, null)).flags |= 2,
                        a.return = t,
                        l.return = t,
                        a.sibling = l,
                        t.child = a,
                        wa(t, e.child, null, n),
                        (a = t.child).memoizedState = no(n),
                        a.childLanes = ro(e, r, n),
                        t.memoizedState = to,
                        t = l);
                    else if (La(t),
                    "$!" === c.data) {
                        if (r = c.nextSibling && c.nextSibling.dataset)
                            var u = r.dgst;
                        r = u,
                        (a = Error(i(419))).stack = "",
                        a.digest = r,
                        la({
                            value: a,
                            source: null,
                            stack: null
                        }),
                        t = oo(e, t, n)
                    } else if (Bi || ko(e, t, n, !1),
                    r = 0 !== (n & e.childLanes),
                    Bi || r) {
                        if (null !== (r = tc)) {
                            if (0 !== (42 & (a = n & -n)))
                                a = 1;
                            else
                                switch (a) {
                                case 2:
                                    a = 1;
                                    break;
                                case 8:
                                    a = 4;
                                    break;
                                case 32:
                                    a = 16;
                                    break;
                                case 128:
                                case 256:
                                case 512:
                                case 1024:
                                case 2048:
                                case 4096:
                                case 8192:
                                case 16384:
                                case 32768:
                                case 65536:
                                case 131072:
                                case 262144:
                                case 524288:
                                case 1048576:
                                case 2097152:
                                case 4194304:
                                case 8388608:
                                case 16777216:
                                case 33554432:
                                    a = 64;
                                    break;
                                case 268435456:
                                    a = 134217728;
                                    break;
                                default:
                                    a = 0
                                }
                            if (0 !== (a = 0 !== (a & (r.suspendedLanes | n)) ? 0 : a) && a !== s.retryLane)
                                throw s.retryLane = a,
                                Pr(e, a),
                                _c(r, e, a),
                                Hi
                        }
                        "$?" === c.data || $c(),
                        t = oo(e, t, n)
                    } else
                        "$?" === c.data ? (t.flags |= 128,
                        t.child = e.child,
                        t = ou.bind(null, e),
                        c._reactRetry = t,
                        t = null) : (e = s.treeContext,
                        Kr = od(c.nextSibling),
                        Qr = t,
                        Yr = !0,
                        Xr = null,
                        Jr = !1,
                        null !== e && (Fr[Wr++] = Hr,
                        Fr[Wr++] = Br,
                        Fr[Wr++] = Ur,
                        Hr = e.id,
                        Br = e.overflow,
                        Ur = t),
                        (t = lo(t, a.children)).flags |= 4096);
                    return t
                }
                return l ? (_a(),
                l = a.fallback,
                c = t.mode,
                u = (s = e.child).sibling,
                (a = Is(s, {
                    mode: "hidden",
                    children: a.children
                })).subtreeFlags = 31457280 & s.subtreeFlags,
                null !== u ? l = Is(u, l) : (l = Ws(l, c, n, null)).flags |= 2,
                l.return = t,
                a.return = t,
                a.sibling = l,
                t.child = a,
                a = l,
                l = t.child,
                null === (c = e.child.memoizedState) ? c = no(n) : (null !== (s = c.cachePool) ? (u = Fa._currentValue,
                s = s.parent !== u ? {
                    parent: u,
                    pool: u
                } : s) : s = Xa(),
                c = {
                    baseLanes: c.baseLanes | n,
                    cachePool: s
                }),
                l.memoizedState = c,
                l.childLanes = ro(e, r, n),
                t.memoizedState = to,
                a) : (La(t),
                e = (n = e.child).sibling,
                (n = Is(n, {
                    mode: "visible",
                    children: a.children
                })).return = t,
                n.sibling = null,
                null !== e && (null === (r = t.deletions) ? (t.deletions = [e],
                t.flags |= 16) : r.push(e)),
                t.child = n,
                t.memoizedState = null,
                n)
            }
            function lo(e, t) {
                return (t = io({
                    mode: "visible",
                    children: t
                }, e.mode)).return = e,
                e.child = t
            }
            function io(e, t) {
                return Us(e, t, 0, null)
            }
            function oo(e, t, n) {
                return wa(t, e.child, null, n),
                (e = lo(t, t.pendingProps.children)).flags |= 2,
                t.memoizedState = null,
                e
            }
            function so(e, t, n) {
                e.lanes |= t;
                var r = e.alternate;
                null !== r && (r.lanes |= t),
                xo(e.return, t, n)
            }
            function co(e, t, n, r, a) {
                var l = e.memoizedState;
                null === l ? e.memoizedState = {
                    isBackwards: t,
                    rendering: null,
                    renderingStartTime: 0,
                    last: r,
                    tail: n,
                    tailMode: a
                } : (l.isBackwards = t,
                l.rendering = null,
                l.renderingStartTime = 0,
                l.last = r,
                l.tail = n,
                l.tailMode = a)
            }
            function uo(e, t, n) {
                var r = t.pendingProps
                  , a = r.revealOrder
                  , l = r.tail;
                if ($i(e, t, r.children, n),
                0 !== (2 & (r = Ra.current)))
                    r = 1 & r | 2,
                    t.flags |= 128;
                else {
                    if (null !== e && 0 !== (128 & e.flags))
                        e: for (e = t.child; null !== e; ) {
                            if (13 === e.tag)
                                null !== e.memoizedState && so(e, n, t);
                            else if (19 === e.tag)
                                so(e, n, t);
                            else if (null !== e.child) {
                                e.child.return = e,
                                e = e.child;
                                continue
                            }
                            if (e === t)
                                break e;
                            for (; null === e.sibling; ) {
                                if (null === e.return || e.return === t)
                                    break e;
                                e = e.return
                            }
                            e.sibling.return = e.return,
                            e = e.sibling
                        }
                    r &= 1
                }
                switch (Q(Ra, r),
                a) {
                case "forwards":
                    for (n = t.child,
                    a = null; null !== n; )
                        null !== (e = n.alternate) && null === Oa(e) && (a = n),
                        n = n.sibling;
                    null === (n = a) ? (a = t.child,
                    t.child = null) : (a = n.sibling,
                    n.sibling = null),
                    co(t, !1, a, n, l);
                    break;
                case "backwards":
                    for (n = null,
                    a = t.child,
                    t.child = null; null !== a; ) {
                        if (null !== (e = a.alternate) && null === Oa(e)) {
                            t.child = a;
                            break
                        }
                        e = a.sibling,
                        a.sibling = n,
                        n = a,
                        a = e
                    }
                    co(t, !0, n, null, l);
                    break;
                case "together":
                    co(t, !1, null, null, void 0);
                    break;
                default:
                    t.memoizedState = null
                }
                return t.child
            }
            function fo(e, t, n) {
                if (null !== e && (t.dependencies = e.dependencies),
                dc |= t.lanes,
                0 === (n & t.childLanes)) {
                    if (null === e)
                        return null;
                    if (ko(e, t, n, !1),
                    0 === (n & t.childLanes))
                        return null
                }
                if (null !== e && t.child !== e.child)
                    throw Error(i(153));
                if (null !== t.child) {
                    for (n = Is(e = t.child, e.pendingProps),
                    t.child = n,
                    n.return = t; null !== e.sibling; )
                        e = e.sibling,
                        (n = n.sibling = Is(e, e.pendingProps)).return = t;
                    n.sibling = null
                }
                return t.child
            }
            function po(e, t) {
                return 0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !So(e))
            }
            function mo(e, t, n) {
                if (null !== e)
                    if (e.memoizedProps !== t.pendingProps)
                        Bi = !0;
                    else {
                        if (!po(e, n) && 0 === (128 & t.flags))
                            return Bi = !1,
                            function(e, t, n) {
                                switch (t.tag) {
                                case 3:
                                    Z(t, t.stateNode.containerInfo),
                                    yo(t, Fa, e.memoizedState.cache),
                                    aa();
                                    break;
                                case 27:
                                case 5:
                                    te(t);
                                    break;
                                case 4:
                                    Z(t, t.stateNode.containerInfo);
                                    break;
                                case 10:
                                    yo(t, t.type, t.memoizedProps.value);
                                    break;
                                case 13:
                                    var r = t.memoizedState;
                                    if (null !== r)
                                        return null !== r.dehydrated ? (La(t),
                                        t.flags |= 128,
                                        null) : 0 !== (n & t.child.childLanes) ? ao(e, t, n) : (La(t),
                                        null !== (e = fo(e, t, n)) ? e.sibling : null);
                                    La(t);
                                    break;
                                case 19:
                                    var a = 0 !== (128 & e.flags);
                                    if ((r = 0 !== (n & t.childLanes)) || (ko(e, t, n, !1),
                                    r = 0 !== (n & t.childLanes)),
                                    a) {
                                        if (r)
                                            return uo(e, t, n);
                                        t.flags |= 128
                                    }
                                    if (null !== (a = t.memoizedState) && (a.rendering = null,
                                    a.tail = null,
                                    a.lastEffect = null),
                                    Q(Ra, Ra.current),
                                    r)
                                        break;
                                    return null;
                                case 22:
                                case 23:
                                    return t.lanes = 0,
                                    Qi(e, t, n);
                                case 24:
                                    yo(t, Fa, e.memoizedState.cache)
                                }
                                return fo(e, t, n)
                            }(e, t, n);
                        Bi = 0 !== (131072 & e.flags)
                    }
                else
                    Bi = !1,
                    Yr && 0 !== (1048576 & t.flags) && Vr(t, Dr, t.index);
                switch (t.lanes = 0,
                t.tag) {
                case 16:
                    e: {
                        e = t.pendingProps;
                        var r = t.elementType
                          , a = r._init;
                        if (r = a(r._payload),
                        t.type = r,
                        "function" !== typeof r) {
                            if (void 0 !== r && null !== r) {
                                if ((a = r.$$typeof) === v) {
                                    t.tag = 11,
                                    t = Vi(null, t, r, e, n);
                                    break e
                                }
                                if (a === x) {
                                    t.tag = 14,
                                    t = Gi(null, t, r, e, n);
                                    break e
                                }
                            }
                            throw t = C(r) || r,
                            Error(i(306, t, ""))
                        }
                        Ms(r) ? (e = _i(r, e),
                        t.tag = 1,
                        t = Zi(null, t, r, e, n)) : (t.tag = 0,
                        t = Xi(null, t, r, e, n))
                    }
                    return t;
                case 0:
                    return Xi(e, t, t.type, t.pendingProps, n);
                case 1:
                    return Zi(e, t, r = t.type, a = _i(r, t.pendingProps), n);
                case 3:
                    e: {
                        if (Z(t, t.stateNode.containerInfo),
                        null === e)
                            throw Error(i(387));
                        var l = t.pendingProps;
                        r = (a = t.memoizedState).element,
                        Lo(e, t),
                        Io(t, l, null, n);
                        var o = t.memoizedState;
                        if (l = o.cache,
                        yo(t, Fa, l),
                        l !== a.cache && wo(t, [Fa], n, !0),
                        Mo(),
                        l = o.element,
                        a.isDehydrated) {
                            if (a = {
                                element: l,
                                isDehydrated: !1,
                                cache: o.cache
                            },
                            t.updateQueue.baseState = a,
                            t.memoizedState = a,
                            256 & t.flags) {
                                t = eo(e, t, l, n);
                                break e
                            }
                            if (l !== r) {
                                la(r = Rr(Error(i(424)), t)),
                                t = eo(e, t, l, n);
                                break e
                            }
                            for (Kr = od(t.stateNode.containerInfo.firstChild),
                            Qr = t,
                            Yr = !0,
                            Xr = null,
                            Jr = !0,
                            n = ka(t, null, l, n),
                            t.child = n; n; )
                                n.flags = -3 & n.flags | 4096,
                                n = n.sibling
                        } else {
                            if (aa(),
                            l === r) {
                                t = fo(e, t, n);
                                break e
                            }
                            $i(e, t, l, n)
                        }
                        t = t.child
                    }
                    return t;
                case 26:
                    return Yi(e, t),
                    null === e ? (n = gd(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : Yr || (n = t.type,
                    e = t.pendingProps,
                    (r = Ku(X.current).createElement(n))[De] = t,
                    r[Fe] = e,
                    Gu(r, n, e),
                    Xe(r),
                    t.stateNode = r) : t.memoizedState = gd(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
                    null;
                case 27:
                    return te(t),
                    null === e && Yr && (r = t.stateNode = cd(t.type, t.pendingProps, X.current),
                    Qr = t,
                    Jr = !0,
                    Kr = od(r.firstChild)),
                    r = t.pendingProps.children,
                    null !== e || Yr ? $i(e, t, r, n) : t.child = wa(t, null, r, n),
                    Yi(e, t),
                    t.child;
                case 5:
                    return null === e && Yr && ((a = r = Kr) && (null !== (r = function(e, t, n, r) {
                        for (; 1 === e.nodeType; ) {
                            var a = n;
                            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                                if (!r && ("INPUT" !== e.nodeName || "hidden" !== e.type))
                                    break
                            } else if (r) {
                                if (!e[Ve])
                                    switch (t) {
                                    case "meta":
                                        if (!e.hasAttribute("itemprop"))
                                            break;
                                        return e;
                                    case "link":
                                        if ("stylesheet" === (l = e.getAttribute("rel")) && e.hasAttribute("data-precedence"))
                                            break;
                                        if (l !== a.rel || e.getAttribute("href") !== (null == a.href ? null : a.href) || e.getAttribute("crossorigin") !== (null == a.crossOrigin ? null : a.crossOrigin) || e.getAttribute("title") !== (null == a.title ? null : a.title))
                                            break;
                                        return e;
                                    case "style":
                                        if (e.hasAttribute("data-precedence"))
                                            break;
                                        return e;
                                    case "script":
                                        if (((l = e.getAttribute("src")) !== (null == a.src ? null : a.src) || e.getAttribute("type") !== (null == a.type ? null : a.type) || e.getAttribute("crossorigin") !== (null == a.crossOrigin ? null : a.crossOrigin)) && l && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                                            break;
                                        return e;
                                    default:
                                        return e
                                    }
                            } else {
                                if ("input" !== t || "hidden" !== e.type)
                                    return e;
                                var l = null == a.name ? null : "" + a.name;
                                if ("hidden" === a.type && e.getAttribute("name") === l)
                                    return e
                            }
                            if (null === (e = od(e.nextSibling)))
                                break
                        }
                        return null
                    }(r, t.type, t.pendingProps, Jr)) ? (t.stateNode = r,
                    Qr = t,
                    Kr = od(r.firstChild),
                    Jr = !1,
                    a = !0) : a = !1),
                    a || ea(t)),
                    te(t),
                    a = t.type,
                    l = t.pendingProps,
                    o = null !== e ? e.memoizedProps : null,
                    r = l.children,
                    Ju(a, l) ? r = null : null !== o && Ju(a, o) && (t.flags |= 32),
                    null !== t.memoizedState && (a = dl(e, t, ml, null, null, n),
                    Md._currentValue = a),
                    Yi(e, t),
                    $i(e, t, r, n),
                    t.child;
                case 6:
                    return null === e && Yr && ((e = n = Kr) && (null !== (n = function(e, t, n) {
                        if ("" === t)
                            return null;
                        for (; 3 !== e.nodeType; ) {
                            if ((1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) && !n)
                                return null;
                            if (null === (e = od(e.nextSibling)))
                                return null
                        }
                        return e
                    }(n, t.pendingProps, Jr)) ? (t.stateNode = n,
                    Qr = t,
                    Kr = null,
                    e = !0) : e = !1),
                    e || ea(t)),
                    null;
                case 13:
                    return ao(e, t, n);
                case 4:
                    return Z(t, t.stateNode.containerInfo),
                    r = t.pendingProps,
                    null === e ? t.child = wa(t, null, r, n) : $i(e, t, r, n),
                    t.child;
                case 11:
                    return Vi(e, t, t.type, t.pendingProps, n);
                case 7:
                    return $i(e, t, t.pendingProps, n),
                    t.child;
                case 8:
                case 12:
                    return $i(e, t, t.pendingProps.children, n),
                    t.child;
                case 10:
                    return r = t.pendingProps,
                    yo(t, t.type, r.value),
                    $i(e, t, r.children, n),
                    t.child;
                case 9:
                    return a = t.type._context,
                    r = t.pendingProps.children,
                    jo(t),
                    r = r(a = No(a)),
                    t.flags |= 1,
                    $i(e, t, r, n),
                    t.child;
                case 14:
                    return Gi(e, t, t.type, t.pendingProps, n);
                case 15:
                    return qi(e, t, t.type, t.pendingProps, n);
                case 19:
                    return uo(e, t, n);
                case 22:
                    return Qi(e, t, n);
                case 24:
                    return jo(t),
                    r = No(Fa),
                    null === e ? (null === (a = Ka()) && (a = tc,
                    l = Wa(),
                    a.pooledCache = l,
                    l.refCount++,
                    null !== l && (a.pooledCacheLanes |= n),
                    a = l),
                    t.memoizedState = {
                        parent: r,
                        cache: a
                    },
                    Po(t),
                    yo(t, Fa, a)) : (0 !== (e.lanes & n) && (Lo(e, t),
                    Io(t, null, null, n),
                    Mo()),
                    a = e.memoizedState,
                    l = t.memoizedState,
                    a.parent !== r ? (a = {
                        parent: r,
                        cache: r
                    },
                    t.memoizedState = a,
                    0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = a),
                    yo(t, Fa, r)) : (r = l.cache,
                    yo(t, Fa, r),
                    r !== a.cache && wo(t, [Fa], n, !0))),
                    $i(e, t, t.pendingProps.children, n),
                    t.child;
                case 29:
                    throw t.pendingProps
                }
                throw Error(i(156, t.tag))
            }
            var ho = G(null)
              , go = null
              , vo = null;
            function yo(e, t, n) {
                Q(ho, t._currentValue),
                t._currentValue = n
            }
            function bo(e) {
                e._currentValue = ho.current,
                q(ho)
            }
            function xo(e, t, n) {
                for (; null !== e; ) {
                    var r = e.alternate;
                    if ((e.childLanes & t) !== t ? (e.childLanes |= t,
                    null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
                    e === n)
                        break;
                    e = e.return
                }
            }
            function wo(e, t, n, r) {
                var a = e.child;
                for (null !== a && (a.return = e); null !== a; ) {
                    var l = a.dependencies;
                    if (null !== l) {
                        var o = a.child;
                        l = l.firstContext;
                        e: for (; null !== l; ) {
                            var s = l;
                            l = a;
                            for (var c = 0; c < t.length; c++)
                                if (s.context === t[c]) {
                                    l.lanes |= n,
                                    null !== (s = l.alternate) && (s.lanes |= n),
                                    xo(l.return, n, e),
                                    r || (o = null);
                                    break e
                                }
                            l = s.next
                        }
                    } else if (18 === a.tag) {
                        if (null === (o = a.return))
                            throw Error(i(341));
                        o.lanes |= n,
                        null !== (l = o.alternate) && (l.lanes |= n),
                        xo(o, n, e),
                        o = null
                    } else
                        o = a.child;
                    if (null !== o)
                        o.return = a;
                    else
                        for (o = a; null !== o; ) {
                            if (o === e) {
                                o = null;
                                break
                            }
                            if (null !== (a = o.sibling)) {
                                a.return = o.return,
                                o = a;
                                break
                            }
                            o = o.return
                        }
                    a = o
                }
            }
            function ko(e, t, n, r) {
                e = null;
                for (var a = t, l = !1; null !== a; ) {
                    if (!l)
                        if (0 !== (524288 & a.flags))
                            l = !0;
                        else if (0 !== (262144 & a.flags))
                            break;
                    if (10 === a.tag) {
                        var o = a.alternate;
                        if (null === o)
                            throw Error(i(387));
                        if (null !== (o = o.memoizedProps)) {
                            var s = a.type;
                            Qn(a.pendingProps.value, o.value) || (null !== e ? e.push(s) : e = [s])
                        }
                    } else if (a === J.current) {
                        if (null === (o = a.alternate))
                            throw Error(i(387));
                        o.memoizedState.memoizedState !== a.memoizedState.memoizedState && (null !== e ? e.push(Md) : e = [Md])
                    }
                    a = a.return
                }
                null !== e && wo(t, e, n, r),
                t.flags |= 262144
            }
            function So(e) {
                for (e = e.firstContext; null !== e; ) {
                    if (!Qn(e.context._currentValue, e.memoizedValue))
                        return !0;
                    e = e.next
                }
                return !1
            }
            function jo(e) {
                go = e,
                vo = null,
                null !== (e = e.dependencies) && (e.firstContext = null)
            }
            function No(e) {
                return Co(go, e)
            }
            function Eo(e, t) {
                return null === go && jo(e),
                Co(e, t)
            }
            function Co(e, t) {
                var n = t._currentValue;
                if (t = {
                    context: t,
                    memoizedValue: n,
                    next: null
                },
                null === vo) {
                    if (null === e)
                        throw Error(i(308));
                    vo = t,
                    e.dependencies = {
                        lanes: 0,
                        firstContext: t
                    },
                    e.flags |= 524288
                } else
                    vo = vo.next = t;
                return n
            }
            var To = !1;
            function Po(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {
                        pending: null,
                        lanes: 0,
                        hiddenCallbacks: null
                    },
                    callbacks: null
                }
            }
            function Lo(e, t) {
                e = e.updateQueue,
                t.updateQueue === e && (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    callbacks: null
                })
            }
            function zo(e) {
                return {
                    lane: e,
                    tag: 0,
                    payload: null,
                    callback: null,
                    next: null
                }
            }
            function _o(e, t, n) {
                var r = e.updateQueue;
                if (null === r)
                    return null;
                if (r = r.shared,
                0 !== (2 & ec)) {
                    var a = r.pending;
                    return null === a ? t.next = t : (t.next = a.next,
                    a.next = t),
                    r.pending = t,
                    t = zr(e),
                    Lr(e, null, n),
                    t
                }
                return Cr(e, r, t, n),
                zr(e)
            }
            function Ao(e, t, n) {
                if (null !== (t = t.updateQueue) && (t = t.shared,
                0 !== (4194176 & n))) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes,
                    t.lanes = n,
                    Re(e, n)
                }
            }
            function Ro(e, t) {
                var n = e.updateQueue
                  , r = e.alternate;
                if (null !== r && n === (r = r.updateQueue)) {
                    var a = null
                      , l = null;
                    if (null !== (n = n.firstBaseUpdate)) {
                        do {
                            var i = {
                                lane: n.lane,
                                tag: n.tag,
                                payload: n.payload,
                                callback: null,
                                next: null
                            };
                            null === l ? a = l = i : l = l.next = i,
                            n = n.next
                        } while (null !== n);
                        null === l ? a = l = t : l = l.next = t
                    } else
                        a = l = t;
                    return n = {
                        baseState: r.baseState,
                        firstBaseUpdate: a,
                        lastBaseUpdate: l,
                        shared: r.shared,
                        callbacks: r.callbacks
                    },
                    void (e.updateQueue = n)
                }
                null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t,
                n.lastBaseUpdate = t
            }
            var Oo = !1;
            function Mo() {
                if (Oo) {
                    if (null !== Va)
                        throw Va
                }
            }
            function Io(e, t, n, r) {
                Oo = !1;
                var a = e.updateQueue;
                To = !1;
                var l = a.firstBaseUpdate
                  , i = a.lastBaseUpdate
                  , o = a.shared.pending;
                if (null !== o) {
                    a.shared.pending = null;
                    var s = o
                      , c = s.next;
                    s.next = null,
                    null === i ? l = c : i.next = c,
                    i = s;
                    var u = e.alternate;
                    null !== u && ((o = (u = u.updateQueue).lastBaseUpdate) !== i && (null === o ? u.firstBaseUpdate = c : o.next = c,
                    u.lastBaseUpdate = s))
                }
                if (null !== l) {
                    var d = a.baseState;
                    for (i = 0,
                    u = c = s = null,
                    o = l; ; ) {
                        var f = -536870913 & o.lane
                          , p = f !== o.lane;
                        if (p ? (rc & f) === f : (r & f) === f) {
                            0 !== f && f === $a && (Oo = !0),
                            null !== u && (u = u.next = {
                                lane: 0,
                                tag: o.tag,
                                payload: o.payload,
                                callback: null,
                                next: null
                            });
                            e: {
                                var m = e
                                  , h = o;
                                f = t;
                                var g = n;
                                switch (h.tag) {
                                case 1:
                                    if ("function" === typeof (m = h.payload)) {
                                        d = m.call(g, d, f);
                                        break e
                                    }
                                    d = m;
                                    break e;
                                case 3:
                                    m.flags = -65537 & m.flags | 128;
                                case 0:
                                    if (null === (f = "function" === typeof (m = h.payload) ? m.call(g, d, f) : m) || void 0 === f)
                                        break e;
                                    d = z({}, d, f);
                                    break e;
                                case 2:
                                    To = !0
                                }
                            }
                            null !== (f = o.callback) && (e.flags |= 64,
                            p && (e.flags |= 8192),
                            null === (p = a.callbacks) ? a.callbacks = [f] : p.push(f))
                        } else
                            p = {
                                lane: f,
                                tag: o.tag,
                                payload: o.payload,
                                callback: o.callback,
                                next: null
                            },
                            null === u ? (c = u = p,
                            s = d) : u = u.next = p,
                            i |= f;
                        if (null === (o = o.next)) {
                            if (null === (o = a.shared.pending))
                                break;
                            o = (p = o).next,
                            p.next = null,
                            a.lastBaseUpdate = p,
                            a.shared.pending = null
                        }
                    }
                    null === u && (s = d),
                    a.baseState = s,
                    a.firstBaseUpdate = c,
                    a.lastBaseUpdate = u,
                    null === l && (a.shared.lanes = 0),
                    dc |= i,
                    e.lanes = i,
                    e.memoizedState = d
                }
            }
            function Do(e, t) {
                if ("function" !== typeof e)
                    throw Error(i(191, e));
                e.call(t)
            }
            function Fo(e, t) {
                var n = e.callbacks;
                if (null !== n)
                    for (e.callbacks = null,
                    e = 0; e < n.length; e++)
                        Do(n[e], t)
            }
            function Wo(e, t) {
                try {
                    var n = t.updateQueue
                      , r = null !== n ? n.lastEffect : null;
                    if (null !== r) {
                        var a = r.next;
                        n = a;
                        do {
                            if ((n.tag & e) === e) {
                                r = void 0;
                                var l = n.create
                                  , i = n.inst;
                                r = l(),
                                i.destroy = r
                            }
                            n = n.next
                        } while (n !== a)
                    }
                } catch (o) {
                    ru(t, t.return, o)
                }
            }
            function Uo(e, t, n) {
                try {
                    var r = t.updateQueue
                      , a = null !== r ? r.lastEffect : null;
                    if (null !== a) {
                        var l = a.next;
                        r = l;
                        do {
                            if ((r.tag & e) === e) {
                                var i = r.inst
                                  , o = i.destroy;
                                if (void 0 !== o) {
                                    i.destroy = void 0,
                                    a = t;
                                    var s = n;
                                    try {
                                        o()
                                    } catch (c) {
                                        ru(a, s, c)
                                    }
                                }
                            }
                            r = r.next
                        } while (r !== l)
                    }
                } catch (c) {
                    ru(t, t.return, c)
                }
            }
            function Ho(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    var n = e.stateNode;
                    try {
                        Fo(t, n)
                    } catch (r) {
                        ru(e, e.return, r)
                    }
                }
            }
            function Bo(e, t, n) {
                n.props = _i(e.type, e.memoizedProps),
                n.state = e.memoizedState;
                try {
                    n.componentWillUnmount()
                } catch (r) {
                    ru(e, t, r)
                }
            }
            function $o(e, t) {
                try {
                    var n = e.ref;
                    if (null !== n) {
                        var r = e.stateNode;
                        switch (e.tag) {
                        case 26:
                        case 27:
                        case 5:
                            var a = r;
                            break;
                        default:
                            a = r
                        }
                        "function" === typeof n ? e.refCleanup = n(a) : n.current = a
                    }
                } catch (l) {
                    ru(e, t, l)
                }
            }
            function Vo(e, t) {
                var n = e.ref
                  , r = e.refCleanup;
                if (null !== n)
                    if ("function" === typeof r)
                        try {
                            r()
                        } catch (a) {
                            ru(e, t, a)
                        } finally {
                            e.refCleanup = null,
                            null != (e = e.alternate) && (e.refCleanup = null)
                        }
                    else if ("function" === typeof n)
                        try {
                            n(null)
                        } catch (l) {
                            ru(e, t, l)
                        }
                    else
                        n.current = null
            }
            function Go(e) {
                var t = e.type
                  , n = e.memoizedProps
                  , r = e.stateNode;
                try {
                    e: switch (t) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        n.autoFocus && r.focus();
                        break e;
                    case "img":
                        n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet)
                    }
                } catch (a) {
                    ru(e, e.return, a)
                }
            }
            function qo(e, t, n) {
                try {
                    var r = e.stateNode;
                    !function(e, t, n, r) {
                        switch (t) {
                        case "div":
                        case "span":
                        case "svg":
                        case "path":
                        case "a":
                        case "g":
                        case "p":
                        case "li":
                            break;
                        case "input":
                            var a = null
                              , l = null
                              , o = null
                              , s = null
                              , c = null
                              , u = null
                              , d = null;
                            for (m in n) {
                                var f = n[m];
                                if (n.hasOwnProperty(m) && null != f)
                                    switch (m) {
                                    case "checked":
                                    case "value":
                                        break;
                                    case "defaultValue":
                                        c = f;
                                    default:
                                        r.hasOwnProperty(m) || $u(e, t, m, null, r, f)
                                    }
                            }
                            for (var p in r) {
                                var m = r[p];
                                if (f = n[p],
                                r.hasOwnProperty(p) && (null != m || null != f))
                                    switch (p) {
                                    case "type":
                                        l = m;
                                        break;
                                    case "name":
                                        a = m;
                                        break;
                                    case "checked":
                                        u = m;
                                        break;
                                    case "defaultChecked":
                                        d = m;
                                        break;
                                    case "value":
                                        o = m;
                                        break;
                                    case "defaultValue":
                                        s = m;
                                        break;
                                    case "children":
                                    case "dangerouslySetInnerHTML":
                                        if (null != m)
                                            throw Error(i(137, t));
                                        break;
                                    default:
                                        m !== f && $u(e, t, p, m, r, f)
                                    }
                            }
                            return void gt(e, o, s, c, u, d, l, a);
                        case "select":
                            for (l in m = o = s = p = null,
                            n)
                                if (c = n[l],
                                n.hasOwnProperty(l) && null != c)
                                    switch (l) {
                                    case "value":
                                        break;
                                    case "multiple":
                                        m = c;
                                    default:
                                        r.hasOwnProperty(l) || $u(e, t, l, null, r, c)
                                    }
                            for (a in r)
                                if (l = r[a],
                                c = n[a],
                                r.hasOwnProperty(a) && (null != l || null != c))
                                    switch (a) {
                                    case "value":
                                        p = l;
                                        break;
                                    case "defaultValue":
                                        s = l;
                                        break;
                                    case "multiple":
                                        o = l;
                                    default:
                                        l !== c && $u(e, t, a, l, r, c)
                                    }
                            return t = s,
                            n = o,
                            r = m,
                            void (null != p ? bt(e, !!n, p, !1) : !!r !== !!n && (null != t ? bt(e, !!n, t, !0) : bt(e, !!n, n ? [] : "", !1)));
                        case "textarea":
                            for (s in m = p = null,
                            n)
                                if (a = n[s],
                                n.hasOwnProperty(s) && null != a && !r.hasOwnProperty(s))
                                    switch (s) {
                                    case "value":
                                    case "children":
                                        break;
                                    default:
                                        $u(e, t, s, null, r, a)
                                    }
                            for (o in r)
                                if (a = r[o],
                                l = n[o],
                                r.hasOwnProperty(o) && (null != a || null != l))
                                    switch (o) {
                                    case "value":
                                        p = a;
                                        break;
                                    case "defaultValue":
                                        m = a;
                                        break;
                                    case "children":
                                        break;
                                    case "dangerouslySetInnerHTML":
                                        if (null != a)
                                            throw Error(i(91));
                                        break;
                                    default:
                                        a !== l && $u(e, t, o, a, r, l)
                                    }
                            return void xt(e, p, m);
                        case "option":
                            for (var h in n)
                                if (p = n[h],
                                n.hasOwnProperty(h) && null != p && !r.hasOwnProperty(h))
                                    if ("selected" === h)
                                        e.selected = !1;
                                    else
                                        $u(e, t, h, null, r, p);
                            for (c in r)
                                if (p = r[c],
                                m = n[c],
                                r.hasOwnProperty(c) && p !== m && (null != p || null != m))
                                    if ("selected" === c)
                                        e.selected = p && "function" !== typeof p && "symbol" !== typeof p;
                                    else
                                        $u(e, t, c, p, r, m);
                            return;
                        case "img":
                        case "link":
                        case "area":
                        case "base":
                        case "br":
                        case "col":
                        case "embed":
                        case "hr":
                        case "keygen":
                        case "meta":
                        case "param":
                        case "source":
                        case "track":
                        case "wbr":
                        case "menuitem":
                            for (var g in n)
                                p = n[g],
                                n.hasOwnProperty(g) && null != p && !r.hasOwnProperty(g) && $u(e, t, g, null, r, p);
                            for (u in r)
                                if (p = r[u],
                                m = n[u],
                                r.hasOwnProperty(u) && p !== m && (null != p || null != m))
                                    switch (u) {
                                    case "children":
                                    case "dangerouslySetInnerHTML":
                                        if (null != p)
                                            throw Error(i(137, t));
                                        break;
                                    default:
                                        $u(e, t, u, p, r, m)
                                    }
                            return;
                        default:
                            if (Et(t)) {
                                for (var v in n)
                                    p = n[v],
                                    n.hasOwnProperty(v) && void 0 !== p && !r.hasOwnProperty(v) && Vu(e, t, v, void 0, r, p);
                                for (d in r)
                                    p = r[d],
                                    m = n[d],
                                    !r.hasOwnProperty(d) || p === m || void 0 === p && void 0 === m || Vu(e, t, d, p, r, m);
                                return
                            }
                        }
                        for (var y in n)
                            p = n[y],
                            n.hasOwnProperty(y) && null != p && !r.hasOwnProperty(y) && $u(e, t, y, null, r, p);
                        for (f in r)
                            p = r[f],
                            m = n[f],
                            !r.hasOwnProperty(f) || p === m || null == p && null == m || $u(e, t, f, p, r, m)
                    }(r, e.type, n, t),
                    r[Fe] = t
                } catch (a) {
                    ru(e, e.return, a)
                }
            }
            function Qo(e) {
                return 5 === e.tag || 3 === e.tag || 26 === e.tag || 27 === e.tag || 4 === e.tag
            }
            function Ko(e) {
                e: for (; ; ) {
                    for (; null === e.sibling; ) {
                        if (null === e.return || Qo(e.return))
                            return null;
                        e = e.return
                    }
                    for (e.sibling.return = e.return,
                    e = e.sibling; 5 !== e.tag && 6 !== e.tag && 27 !== e.tag && 18 !== e.tag; ) {
                        if (2 & e.flags)
                            continue e;
                        if (null === e.child || 4 === e.tag)
                            continue e;
                        e.child.return = e,
                        e = e.child
                    }
                    if (!(2 & e.flags))
                        return e.stateNode
                }
            }
            function Yo(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r)
                    e = e.stateNode,
                    t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                    null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Bu));
                else if (4 !== r && 27 !== r && null !== (e = e.child))
                    for (Yo(e, t, n),
                    e = e.sibling; null !== e; )
                        Yo(e, t, n),
                        e = e.sibling
            }
            function Xo(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r)
                    e = e.stateNode,
                    t ? n.insertBefore(e, t) : n.appendChild(e);
                else if (4 !== r && 27 !== r && null !== (e = e.child))
                    for (Xo(e, t, n),
                    e = e.sibling; null !== e; )
                        Xo(e, t, n),
                        e = e.sibling
            }
            var Jo = !1
              , Zo = !1
              , es = !1
              , ts = "function" === typeof WeakSet ? WeakSet : Set
              , ns = null
              , rs = !1;
            function as(e, t, n) {
                var r = n.flags;
                switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    vs(e, n),
                    4 & r && Wo(5, n);
                    break;
                case 1:
                    if (vs(e, n),
                    4 & r)
                        if (e = n.stateNode,
                        null === t)
                            try {
                                e.componentDidMount()
                            } catch (o) {
                                ru(n, n.return, o)
                            }
                        else {
                            var a = _i(n.type, t.memoizedProps);
                            t = t.memoizedState;
                            try {
                                e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate)
                            } catch (s) {
                                ru(n, n.return, s)
                            }
                        }
                    64 & r && Ho(n),
                    512 & r && $o(n, n.return);
                    break;
                case 3:
                    if (vs(e, n),
                    64 & r && null !== (r = n.updateQueue)) {
                        if (e = null,
                        null !== n.child)
                            switch (n.child.tag) {
                            case 27:
                            case 5:
                            case 1:
                                e = n.child.stateNode
                            }
                        try {
                            Fo(r, e)
                        } catch (o) {
                            ru(n, n.return, o)
                        }
                    }
                    break;
                case 26:
                    vs(e, n),
                    512 & r && $o(n, n.return);
                    break;
                case 27:
                case 5:
                    vs(e, n),
                    null === t && 4 & r && Go(n),
                    512 & r && $o(n, n.return);
                    break;
                case 12:
                default:
                    vs(e, n);
                    break;
                case 13:
                    vs(e, n),
                    4 & r && us(e, n);
                    break;
                case 22:
                    if (!(a = null !== n.memoizedState || Jo)) {
                        t = null !== t && null !== t.memoizedState || Zo;
                        var l = Jo
                          , i = Zo;
                        Jo = a,
                        (Zo = t) && !i ? bs(e, n, 0 !== (8772 & n.subtreeFlags)) : vs(e, n),
                        Jo = l,
                        Zo = i
                    }
                    512 & r && ("manual" === n.memoizedProps.mode ? $o(n, n.return) : Vo(n, n.return))
                }
            }
            function ls(e) {
                var t = e.alternate;
                null !== t && (e.alternate = null,
                ls(t)),
                e.child = null,
                e.deletions = null,
                e.sibling = null,
                5 === e.tag && (null !== (t = e.stateNode) && Ge(t)),
                e.stateNode = null,
                e.return = null,
                e.dependencies = null,
                e.memoizedProps = null,
                e.memoizedState = null,
                e.pendingProps = null,
                e.stateNode = null,
                e.updateQueue = null
            }
            var is = null
              , os = !1;
            function ss(e, t, n) {
                for (n = n.child; null !== n; )
                    cs(e, t, n),
                    n = n.sibling
            }
            function cs(e, t, n) {
                if (ye && "function" === typeof ye.onCommitFiberUnmount)
                    try {
                        ye.onCommitFiberUnmount(ve, n)
                    } catch (i) {}
                switch (n.tag) {
                case 26:
                    Zo || Vo(n, t),
                    ss(e, t, n),
                    n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
                    break;
                case 27:
                    Zo || Vo(n, t);
                    var r = is
                      , a = os;
                    for (is = n.stateNode,
                    ss(e, t, n),
                    t = (n = n.stateNode).attributes; t.length; )
                        n.removeAttributeNode(t[0]);
                    Ge(n),
                    is = r,
                    os = a;
                    break;
                case 5:
                    Zo || Vo(n, t);
                case 6:
                    a = is;
                    var l = os;
                    if (is = null,
                    ss(e, t, n),
                    os = l,
                    null !== (is = a))
                        if (os)
                            try {
                                e = is,
                                r = n.stateNode,
                                8 === e.nodeType ? e.parentNode.removeChild(r) : e.removeChild(r)
                            } catch (o) {
                                ru(n, t, o)
                            }
                        else
                            try {
                                is.removeChild(n.stateNode)
                            } catch (o) {
                                ru(n, t, o)
                            }
                    break;
                case 18:
                    null !== is && (os ? (t = is,
                    n = n.stateNode,
                    8 === t.nodeType ? ld(t.parentNode, n) : 1 === t.nodeType && ld(t, n),
                    gf(t)) : ld(is, n.stateNode));
                    break;
                case 4:
                    r = is,
                    a = os,
                    is = n.stateNode.containerInfo,
                    os = !0,
                    ss(e, t, n),
                    is = r,
                    os = a;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    Zo || Uo(2, n, t),
                    Zo || Uo(4, n, t),
                    ss(e, t, n);
                    break;
                case 1:
                    Zo || (Vo(n, t),
                    "function" === typeof (r = n.stateNode).componentWillUnmount && Bo(n, t, r)),
                    ss(e, t, n);
                    break;
                case 21:
                    ss(e, t, n);
                    break;
                case 22:
                    Zo || Vo(n, t),
                    Zo = (r = Zo) || null !== n.memoizedState,
                    ss(e, t, n),
                    Zo = r;
                    break;
                default:
                    ss(e, t, n)
                }
            }
            function us(e, t) {
                if (null === t.memoizedState && (null !== (e = t.alternate) && (null !== (e = e.memoizedState) && null !== (e = e.dehydrated))))
                    try {
                        gf(e)
                    } catch (n) {
                        ru(t, t.return, n)
                    }
            }
            function ds(e, t) {
                var n = function(e) {
                    switch (e.tag) {
                    case 13:
                    case 19:
                        var t = e.stateNode;
                        return null === t && (t = e.stateNode = new ts),
                        t;
                    case 22:
                        return null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new ts),
                        t;
                    default:
                        throw Error(i(435, e.tag))
                    }
                }(e);
                t.forEach((function(t) {
                    var r = su.bind(null, e, t);
                    n.has(t) || (n.add(t),
                    t.then(r, r))
                }
                ))
            }
            function fs(e, t) {
                var n = t.deletions;
                if (null !== n)
                    for (var r = 0; r < n.length; r++) {
                        var a = n[r]
                          , l = e
                          , o = t
                          , s = o;
                        e: for (; null !== s; ) {
                            switch (s.tag) {
                            case 27:
                            case 5:
                                is = s.stateNode,
                                os = !1;
                                break e;
                            case 3:
                            case 4:
                                is = s.stateNode.containerInfo,
                                os = !0;
                                break e
                            }
                            s = s.return
                        }
                        if (null === is)
                            throw Error(i(160));
                        cs(l, o, a),
                        is = null,
                        os = !1,
                        null !== (l = a.alternate) && (l.return = null),
                        a.return = null
                    }
                if (13878 & t.subtreeFlags)
                    for (t = t.child; null !== t; )
                        ms(t, e),
                        t = t.sibling
            }
            var ps = null;
            function ms(e, t) {
                var n = e.alternate
                  , r = e.flags;
                switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    fs(t, e),
                    hs(e),
                    4 & r && (Uo(3, e, e.return),
                    Wo(3, e),
                    Uo(5, e, e.return));
                    break;
                case 1:
                    fs(t, e),
                    hs(e),
                    512 & r && (Zo || null === n || Vo(n, n.return)),
                    64 & r && Jo && (null !== (e = e.updateQueue) && (null !== (r = e.callbacks) && (n = e.shared.hiddenCallbacks,
                    e.shared.hiddenCallbacks = null === n ? r : n.concat(r))));
                    break;
                case 26:
                    var a = ps;
                    if (fs(t, e),
                    hs(e),
                    512 & r && (Zo || null === n || Vo(n, n.return)),
                    4 & r) {
                        var l = null !== n ? n.memoizedState : null;
                        if (r = e.memoizedState,
                        null === n)
                            if (null === r)
                                if (null === e.stateNode) {
                                    e: {
                                        r = e.type,
                                        n = e.memoizedProps,
                                        a = a.ownerDocument || a;
                                        t: switch (r) {
                                        case "title":
                                            (!(l = a.getElementsByTagName("title")[0]) || l[Ve] || l[De] || "http://www.w3.org/2000/svg" === l.namespaceURI || l.hasAttribute("itemprop")) && (l = a.createElement(r),
                                            a.head.insertBefore(l, a.querySelector("head > title"))),
                                            Gu(l, r, n),
                                            l[De] = e,
                                            Xe(l),
                                            r = l;
                                            break e;
                                        case "link":
                                            var o = Cd("link", "href", a).get(r + (n.href || ""));
                                            if (o)
                                                for (var s = 0; s < o.length; s++)
                                                    if ((l = o[s]).getAttribute("href") === (null == n.href ? null : n.href) && l.getAttribute("rel") === (null == n.rel ? null : n.rel) && l.getAttribute("title") === (null == n.title ? null : n.title) && l.getAttribute("crossorigin") === (null == n.crossOrigin ? null : n.crossOrigin)) {
                                                        o.splice(s, 1);
                                                        break t
                                                    }
                                            Gu(l = a.createElement(r), r, n),
                                            a.head.appendChild(l);
                                            break;
                                        case "meta":
                                            if (o = Cd("meta", "content", a).get(r + (n.content || "")))
                                                for (s = 0; s < o.length; s++)
                                                    if ((l = o[s]).getAttribute("content") === (null == n.content ? null : "" + n.content) && l.getAttribute("name") === (null == n.name ? null : n.name) && l.getAttribute("property") === (null == n.property ? null : n.property) && l.getAttribute("http-equiv") === (null == n.httpEquiv ? null : n.httpEquiv) && l.getAttribute("charset") === (null == n.charSet ? null : n.charSet)) {
                                                        o.splice(s, 1);
                                                        break t
                                                    }
                                            Gu(l = a.createElement(r), r, n),
                                            a.head.appendChild(l);
                                            break;
                                        default:
                                            throw Error(i(468, r))
                                        }
                                        l[De] = e,
                                        Xe(l),
                                        r = l
                                    }
                                    e.stateNode = r
                                } else
                                    Td(a, e.type, e.stateNode);
                            else
                                e.stateNode = kd(a, r, e.memoizedProps);
                        else
                            l !== r ? (null === l ? null !== n.stateNode && (n = n.stateNode).parentNode.removeChild(n) : l.count--,
                            null === r ? Td(a, e.type, e.stateNode) : kd(a, r, e.memoizedProps)) : null === r && null !== e.stateNode && qo(e, e.memoizedProps, n.memoizedProps)
                    }
                    break;
                case 27:
                    if (4 & r && null === e.alternate) {
                        a = e.stateNode,
                        l = e.memoizedProps;
                        try {
                            for (var c = a.firstChild; c; ) {
                                var u = c.nextSibling
                                  , d = c.nodeName;
                                c[Ve] || "HEAD" === d || "BODY" === d || "SCRIPT" === d || "STYLE" === d || "LINK" === d && "stylesheet" === c.rel.toLowerCase() || a.removeChild(c),
                                c = u
                            }
                            for (var f = e.type, p = a.attributes; p.length; )
                                a.removeAttributeNode(p[0]);
                            Gu(a, f, l),
                            a[De] = e,
                            a[Fe] = l
                        } catch (h) {
                            ru(e, e.return, h)
                        }
                    }
                case 5:
                    if (fs(t, e),
                    hs(e),
                    512 & r && (Zo || null === n || Vo(n, n.return)),
                    32 & e.flags) {
                        a = e.stateNode;
                        try {
                            kt(a, "")
                        } catch (h) {
                            ru(e, e.return, h)
                        }
                    }
                    4 & r && null != e.stateNode && qo(e, a = e.memoizedProps, null !== n ? n.memoizedProps : a),
                    1024 & r && (es = !0);
                    break;
                case 6:
                    if (fs(t, e),
                    hs(e),
                    4 & r) {
                        if (null === e.stateNode)
                            throw Error(i(162));
                        r = e.memoizedProps,
                        n = e.stateNode;
                        try {
                            n.nodeValue = r
                        } catch (h) {
                            ru(e, e.return, h)
                        }
                    }
                    break;
                case 3:
                    if (Ed = null,
                    a = ps,
                    ps = fd(t.containerInfo),
                    fs(t, e),
                    ps = a,
                    hs(e),
                    4 & r && null !== n && n.memoizedState.isDehydrated)
                        try {
                            gf(t.containerInfo)
                        } catch (h) {
                            ru(e, e.return, h)
                        }
                    es && (es = !1,
                    gs(e));
                    break;
                case 4:
                    r = ps,
                    ps = fd(e.stateNode.containerInfo),
                    fs(t, e),
                    hs(e),
                    ps = r;
                    break;
                case 12:
                    fs(t, e),
                    hs(e);
                    break;
                case 13:
                    fs(t, e),
                    hs(e),
                    8192 & e.child.flags && null !== e.memoizedState !== (null !== n && null !== n.memoizedState) && (bc = se()),
                    4 & r && (null !== (r = e.updateQueue) && (e.updateQueue = null,
                    ds(e, r)));
                    break;
                case 22:
                    if (512 & r && (Zo || null === n || Vo(n, n.return)),
                    c = null !== e.memoizedState,
                    u = null !== n && null !== n.memoizedState,
                    Jo = (d = Jo) || c,
                    Zo = (f = Zo) || u,
                    fs(t, e),
                    Zo = f,
                    Jo = d,
                    hs(e),
                    (t = e.stateNode)._current = e,
                    t._visibility &= -3,
                    t._visibility |= 2 & t._pendingVisibility,
                    8192 & r && (t._visibility = c ? -2 & t._visibility : 1 | t._visibility,
                    c && (t = Jo || Zo,
                    null === n || u || t || ys(e)),
                    null === e.memoizedProps || "manual" !== e.memoizedProps.mode))
                        e: for (n = null,
                        t = e; ; ) {
                            if (5 === t.tag || 26 === t.tag || 27 === t.tag) {
                                if (null === n) {
                                    u = n = t;
                                    try {
                                        if (a = u.stateNode,
                                        c)
                                            "function" === typeof (l = a.style).setProperty ? l.setProperty("display", "none", "important") : l.display = "none";
                                        else {
                                            o = u.stateNode;
                                            var m = void 0 !== (s = u.memoizedProps.style) && null !== s && s.hasOwnProperty("display") ? s.display : null;
                                            o.style.display = null == m || "boolean" === typeof m ? "" : ("" + m).trim()
                                        }
                                    } catch (h) {
                                        ru(u, u.return, h)
                                    }
                                }
                            } else if (6 === t.tag) {
                                if (null === n) {
                                    u = t;
                                    try {
                                        u.stateNode.nodeValue = c ? "" : u.memoizedProps
                                    } catch (h) {
                                        ru(u, u.return, h)
                                    }
                                }
                            } else if ((22 !== t.tag && 23 !== t.tag || null === t.memoizedState || t === e) && null !== t.child) {
                                t.child.return = t,
                                t = t.child;
                                continue
                            }
                            if (t === e)
                                break e;
                            for (; null === t.sibling; ) {
                                if (null === t.return || t.return === e)
                                    break e;
                                n === t && (n = null),
                                t = t.return
                            }
                            n === t && (n = null),
                            t.sibling.return = t.return,
                            t = t.sibling
                        }
                    4 & r && (null !== (r = e.updateQueue) && (null !== (n = r.retryQueue) && (r.retryQueue = null,
                    ds(e, n))));
                    break;
                case 19:
                    fs(t, e),
                    hs(e),
                    4 & r && (null !== (r = e.updateQueue) && (e.updateQueue = null,
                    ds(e, r)));
                    break;
                case 21:
                    break;
                default:
                    fs(t, e),
                    hs(e)
                }
            }
            function hs(e) {
                var t = e.flags;
                if (2 & t) {
                    try {
                        if (27 !== e.tag) {
                            e: {
                                for (var n = e.return; null !== n; ) {
                                    if (Qo(n)) {
                                        var r = n;
                                        break e
                                    }
                                    n = n.return
                                }
                                throw Error(i(160))
                            }
                            switch (r.tag) {
                            case 27:
                                var a = r.stateNode;
                                Xo(e, Ko(e), a);
                                break;
                            case 5:
                                var l = r.stateNode;
                                32 & r.flags && (kt(l, ""),
                                r.flags &= -33),
                                Xo(e, Ko(e), l);
                                break;
                            case 3:
                            case 4:
                                var o = r.stateNode.containerInfo;
                                Yo(e, Ko(e), o);
                                break;
                            default:
                                throw Error(i(161))
                            }
                        }
                    } catch (s) {
                        ru(e, e.return, s)
                    }
                    e.flags &= -3
                }
                4096 & t && (e.flags &= -4097)
            }
            function gs(e) {
                if (1024 & e.subtreeFlags)
                    for (e = e.child; null !== e; ) {
                        var t = e;
                        gs(t),
                        5 === t.tag && 1024 & t.flags && t.stateNode.reset(),
                        e = e.sibling
                    }
            }
            function vs(e, t) {
                if (8772 & t.subtreeFlags)
                    for (t = t.child; null !== t; )
                        as(e, t.alternate, t),
                        t = t.sibling
            }
            function ys(e) {
                for (e = e.child; null !== e; ) {
                    var t = e;
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        Uo(4, t, t.return),
                        ys(t);
                        break;
                    case 1:
                        Vo(t, t.return);
                        var n = t.stateNode;
                        "function" === typeof n.componentWillUnmount && Bo(t, t.return, n),
                        ys(t);
                        break;
                    case 26:
                    case 27:
                    case 5:
                        Vo(t, t.return),
                        ys(t);
                        break;
                    case 22:
                        Vo(t, t.return),
                        null === t.memoizedState && ys(t);
                        break;
                    default:
                        ys(t)
                    }
                    e = e.sibling
                }
            }
            function bs(e, t, n) {
                for (n = n && 0 !== (8772 & t.subtreeFlags),
                t = t.child; null !== t; ) {
                    var r = t.alternate
                      , a = e
                      , l = t
                      , i = l.flags;
                    switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                        bs(a, l, n),
                        Wo(4, l);
                        break;
                    case 1:
                        if (bs(a, l, n),
                        "function" === typeof (a = (r = l).stateNode).componentDidMount)
                            try {
                                a.componentDidMount()
                            } catch (c) {
                                ru(r, r.return, c)
                            }
                        if (null !== (a = (r = l).updateQueue)) {
                            var o = r.stateNode;
                            try {
                                var s = a.shared.hiddenCallbacks;
                                if (null !== s)
                                    for (a.shared.hiddenCallbacks = null,
                                    a = 0; a < s.length; a++)
                                        Do(s[a], o)
                            } catch (c) {
                                ru(r, r.return, c)
                            }
                        }
                        n && 64 & i && Ho(l),
                        $o(l, l.return);
                        break;
                    case 26:
                    case 27:
                    case 5:
                        bs(a, l, n),
                        n && null === r && 4 & i && Go(l),
                        $o(l, l.return);
                        break;
                    case 12:
                    default:
                        bs(a, l, n);
                        break;
                    case 13:
                        bs(a, l, n),
                        n && 4 & i && us(a, l);
                        break;
                    case 22:
                        null === l.memoizedState && bs(a, l, n),
                        $o(l, l.return)
                    }
                    t = t.sibling
                }
            }
            function xs(e, t) {
                var n = null;
                null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool),
                e = null,
                null !== t.memoizedState && null !== t.memoizedState.cachePool && (e = t.memoizedState.cachePool.pool),
                e !== n && (null != e && e.refCount++,
                null != n && Ua(n))
            }
            function ws(e, t) {
                e = null,
                null !== t.alternate && (e = t.alternate.memoizedState.cache),
                (t = t.memoizedState.cache) !== e && (t.refCount++,
                null != e && Ua(e))
            }
            function ks(e, t, n, r) {
                if (10256 & t.subtreeFlags)
                    for (t = t.child; null !== t; )
                        Ss(e, t, n, r),
                        t = t.sibling
            }
            function Ss(e, t, n, r) {
                var a = t.flags;
                switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    ks(e, t, n, r),
                    2048 & a && Wo(9, t);
                    break;
                case 3:
                    ks(e, t, n, r),
                    2048 & a && (e = null,
                    null !== t.alternate && (e = t.alternate.memoizedState.cache),
                    (t = t.memoizedState.cache) !== e && (t.refCount++,
                    null != e && Ua(e)));
                    break;
                case 12:
                    if (2048 & a) {
                        ks(e, t, n, r),
                        e = t.stateNode;
                        try {
                            var l = t.memoizedProps
                              , i = l.id
                              , o = l.onPostCommit;
                            "function" === typeof o && o(i, null === t.alternate ? "mount" : "update", e.passiveEffectDuration, -0)
                        } catch (s) {
                            ru(t, t.return, s)
                        }
                    } else
                        ks(e, t, n, r);
                    break;
                case 23:
                    break;
                case 22:
                    l = t.stateNode,
                    null !== t.memoizedState ? 4 & l._visibility ? ks(e, t, n, r) : Ns(e, t) : 4 & l._visibility ? ks(e, t, n, r) : (l._visibility |= 4,
                    js(e, t, n, r, 0 !== (10256 & t.subtreeFlags))),
                    2048 & a && xs(t.alternate, t);
                    break;
                case 24:
                    ks(e, t, n, r),
                    2048 & a && ws(t.alternate, t);
                    break;
                default:
                    ks(e, t, n, r)
                }
            }
            function js(e, t, n, r, a) {
                for (a = a && 0 !== (10256 & t.subtreeFlags),
                t = t.child; null !== t; ) {
                    var l = e
                      , i = t
                      , o = n
                      , s = r
                      , c = i.flags;
                    switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                        js(l, i, o, s, a),
                        Wo(8, i);
                        break;
                    case 23:
                        break;
                    case 22:
                        var u = i.stateNode;
                        null !== i.memoizedState ? 4 & u._visibility ? js(l, i, o, s, a) : Ns(l, i) : (u._visibility |= 4,
                        js(l, i, o, s, a)),
                        a && 2048 & c && xs(i.alternate, i);
                        break;
                    case 24:
                        js(l, i, o, s, a),
                        a && 2048 & c && ws(i.alternate, i);
                        break;
                    default:
                        js(l, i, o, s, a)
                    }
                    t = t.sibling
                }
            }
            function Ns(e, t) {
                if (10256 & t.subtreeFlags)
                    for (t = t.child; null !== t; ) {
                        var n = e
                          , r = t
                          , a = r.flags;
                        switch (r.tag) {
                        case 22:
                            Ns(n, r),
                            2048 & a && xs(r.alternate, r);
                            break;
                        case 24:
                            Ns(n, r),
                            2048 & a && ws(r.alternate, r);
                            break;
                        default:
                            Ns(n, r)
                        }
                        t = t.sibling
                    }
            }
            var Es = 8192;
            function Cs(e) {
                if (e.subtreeFlags & Es)
                    for (e = e.child; null !== e; )
                        Ts(e),
                        e = e.sibling
            }
            function Ts(e) {
                switch (e.tag) {
                case 26:
                    Cs(e),
                    e.flags & Es && null !== e.memoizedState && function(e, t, n) {
                        if (null === Ld)
                            throw Error(i(475));
                        var r = Ld;
                        if ("stylesheet" === t.type && ("string" !== typeof n.media || !1 !== matchMedia(n.media).matches) && 0 === (4 & t.state.loading)) {
                            if (null === t.instance) {
                                var a = vd(n.href)
                                  , l = e.querySelector(yd(a));
                                if (l)
                                    return null !== (e = l._p) && "object" === typeof e && "function" === typeof e.then && (r.count++,
                                    r = _d.bind(r),
                                    e.then(r, r)),
                                    t.state.loading |= 4,
                                    t.instance = l,
                                    void Xe(l);
                                l = e.ownerDocument || e,
                                n = bd(n),
                                (a = ud.get(a)) && jd(n, a),
                                Xe(l = l.createElement("link"));
                                var o = l;
                                o._p = new Promise((function(e, t) {
                                    o.onload = e,
                                    o.onerror = t
                                }
                                )),
                                Gu(l, "link", n),
                                t.instance = l
                            }
                            null === r.stylesheets && (r.stylesheets = new Map),
                            r.stylesheets.set(t, e),
                            (e = t.state.preload) && 0 === (3 & t.state.loading) && (r.count++,
                            t = _d.bind(r),
                            e.addEventListener("load", t),
                            e.addEventListener("error", t))
                        }
                    }(ps, e.memoizedState, e.memoizedProps);
                    break;
                case 5:
                default:
                    Cs(e);
                    break;
                case 3:
                case 4:
                    var t = ps;
                    ps = fd(e.stateNode.containerInfo),
                    Cs(e),
                    ps = t;
                    break;
                case 22:
                    null === e.memoizedState && (null !== (t = e.alternate) && null !== t.memoizedState ? (t = Es,
                    Es = 16777216,
                    Cs(e),
                    Es = t) : Cs(e))
                }
            }
            function Ps(e) {
                var t = e.alternate;
                if (null !== t && null !== (e = t.child)) {
                    t.child = null;
                    do {
                        t = e.sibling,
                        e.sibling = null,
                        e = t
                    } while (null !== e)
                }
            }
            function Ls(e) {
                var t = e.deletions;
                if (0 !== (16 & e.flags)) {
                    if (null !== t)
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            ns = r,
                            As(r, e)
                        }
                    Ps(e)
                }
                if (10256 & e.subtreeFlags)
                    for (e = e.child; null !== e; )
                        zs(e),
                        e = e.sibling
            }
            function zs(e) {
                switch (e.tag) {
                case 0:
                case 11:
                case 15:
                    Ls(e),
                    2048 & e.flags && Uo(9, e, e.return);
                    break;
                case 3:
                case 12:
                default:
                    Ls(e);
                    break;
                case 22:
                    var t = e.stateNode;
                    null !== e.memoizedState && 4 & t._visibility && (null === e.return || 13 !== e.return.tag) ? (t._visibility &= -5,
                    _s(e)) : Ls(e)
                }
            }
            function _s(e) {
                var t = e.deletions;
                if (0 !== (16 & e.flags)) {
                    if (null !== t)
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            ns = r,
                            As(r, e)
                        }
                    Ps(e)
                }
                for (e = e.child; null !== e; ) {
                    switch ((t = e).tag) {
                    case 0:
                    case 11:
                    case 15:
                        Uo(8, t, t.return),
                        _s(t);
                        break;
                    case 22:
                        4 & (n = t.stateNode)._visibility && (n._visibility &= -5,
                        _s(t));
                        break;
                    default:
                        _s(t)
                    }
                    e = e.sibling
                }
            }
            function As(e, t) {
                for (; null !== ns; ) {
                    var n = ns;
                    switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Uo(8, n, t);
                        break;
                    case 23:
                    case 22:
                        if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
                            var r = n.memoizedState.cachePool.pool;
                            null != r && r.refCount++
                        }
                        break;
                    case 24:
                        Ua(n.memoizedState.cache)
                    }
                    if (null !== (r = n.child))
                        r.return = n,
                        ns = r;
                    else
                        e: for (n = e; null !== ns; ) {
                            var a = (r = ns).sibling
                              , l = r.return;
                            if (ls(r),
                            r === n) {
                                ns = null;
                                break e
                            }
                            if (null !== a) {
                                a.return = l,
                                ns = a;
                                break e
                            }
                            ns = l
                        }
                }
            }
            function Rs(e, t, n, r) {
                this.tag = e,
                this.key = n,
                this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
                this.index = 0,
                this.refCleanup = this.ref = null,
                this.pendingProps = t,
                this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
                this.mode = r,
                this.subtreeFlags = this.flags = 0,
                this.deletions = null,
                this.childLanes = this.lanes = 0,
                this.alternate = null
            }
            function Os(e, t, n, r) {
                return new Rs(e,t,n,r)
            }
            function Ms(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }
            function Is(e, t) {
                var n = e.alternate;
                return null === n ? ((n = Os(e.tag, t, e.key, e.mode)).elementType = e.elementType,
                n.type = e.type,
                n.stateNode = e.stateNode,
                n.alternate = e,
                e.alternate = n) : (n.pendingProps = t,
                n.type = e.type,
                n.flags = 0,
                n.subtreeFlags = 0,
                n.deletions = null),
                n.flags = 31457280 & e.flags,
                n.childLanes = e.childLanes,
                n.lanes = e.lanes,
                n.child = e.child,
                n.memoizedProps = e.memoizedProps,
                n.memoizedState = e.memoizedState,
                n.updateQueue = e.updateQueue,
                t = e.dependencies,
                n.dependencies = null === t ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                },
                n.sibling = e.sibling,
                n.index = e.index,
                n.ref = e.ref,
                n.refCleanup = e.refCleanup,
                n
            }
            function Ds(e, t) {
                e.flags &= 31457282;
                var n = e.alternate;
                return null === n ? (e.childLanes = 0,
                e.lanes = t,
                e.child = null,
                e.subtreeFlags = 0,
                e.memoizedProps = null,
                e.memoizedState = null,
                e.updateQueue = null,
                e.dependencies = null,
                e.stateNode = null) : (e.childLanes = n.childLanes,
                e.lanes = n.lanes,
                e.child = n.child,
                e.subtreeFlags = 0,
                e.deletions = null,
                e.memoizedProps = n.memoizedProps,
                e.memoizedState = n.memoizedState,
                e.updateQueue = n.updateQueue,
                e.type = n.type,
                t = n.dependencies,
                e.dependencies = null === t ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                }),
                e
            }
            function Fs(e, t, n, r, a, l) {
                var o = 0;
                if (r = e,
                "function" === typeof e)
                    Ms(e) && (o = 1);
                else if ("string" === typeof e)
                    o = function(e, t, n) {
                        if (1 === n || null != t.itemProp)
                            return !1;
                        switch (e) {
                        case "meta":
                        case "title":
                            return !0;
                        case "style":
                            if ("string" !== typeof t.precedence || "string" !== typeof t.href || "" === t.href)
                                break;
                            return !0;
                        case "link":
                            if ("string" !== typeof t.rel || "string" !== typeof t.href || "" === t.href || t.onLoad || t.onError)
                                break;
                            return "stylesheet" !== t.rel || (e = t.disabled,
                            "string" === typeof t.precedence && null == e);
                        case "script":
                            if (t.async && "function" !== typeof t.async && "symbol" !== typeof t.async && !t.onLoad && !t.onError && t.src && "string" === typeof t.src)
                                return !0
                        }
                        return !1
                    }(e, n, K.current) ? 26 : "html" === e || "head" === e || "body" === e ? 27 : 5;
                else
                    e: switch (e) {
                    case d:
                        return Ws(n.children, a, l, t);
                    case f:
                        o = 8,
                        a |= 24;
                        break;
                    case p:
                        return (e = Os(12, n, t, 2 | a)).elementType = p,
                        e.lanes = l,
                        e;
                    case y:
                        return (e = Os(13, n, t, a)).elementType = y,
                        e.lanes = l,
                        e;
                    case b:
                        return (e = Os(19, n, t, a)).elementType = b,
                        e.lanes = l,
                        e;
                    case k:
                        return Us(n, a, l, t);
                    default:
                        if ("object" === typeof e && null !== e)
                            switch (e.$$typeof) {
                            case m:
                            case g:
                                o = 10;
                                break e;
                            case h:
                                o = 9;
                                break e;
                            case v:
                                o = 11;
                                break e;
                            case x:
                                o = 14;
                                break e;
                            case w:
                                o = 16,
                                r = null;
                                break e
                            }
                        o = 29,
                        n = Error(i(130, null === e ? "null" : typeof e, "")),
                        r = null
                    }
                return (t = Os(o, n, t, a)).elementType = e,
                t.type = r,
                t.lanes = l,
                t
            }
            function Ws(e, t, n, r) {
                return (e = Os(7, e, r, t)).lanes = n,
                e
            }
            function Us(e, t, n, r) {
                (e = Os(22, e, r, t)).elementType = k,
                e.lanes = n;
                var a = {
                    _visibility: 1,
                    _pendingVisibility: 1,
                    _pendingMarkers: null,
                    _retryCache: null,
                    _transitions: null,
                    _current: null,
                    detach: function() {
                        var e = a._current;
                        if (null === e)
                            throw Error(i(456));
                        if (0 === (2 & a._pendingVisibility)) {
                            var t = Pr(e, 2);
                            null !== t && (a._pendingVisibility |= 2,
                            _c(t, e, 2))
                        }
                    },
                    attach: function() {
                        var e = a._current;
                        if (null === e)
                            throw Error(i(456));
                        if (0 !== (2 & a._pendingVisibility)) {
                            var t = Pr(e, 2);
                            null !== t && (a._pendingVisibility &= -3,
                            _c(t, e, 2))
                        }
                    }
                };
                return e.stateNode = a,
                e
            }
            function Hs(e, t, n) {
                return (e = Os(6, e, null, t)).lanes = n,
                e
            }
            function Bs(e, t, n) {
                return (t = Os(4, null !== e.children ? e.children : [], e.key, t)).lanes = n,
                t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                },
                t
            }
            function $s(e) {
                e.flags |= 4
            }
            function Vs(e, t) {
                if ("stylesheet" !== t.type || 0 !== (4 & t.state.loading))
                    e.flags &= -16777217;
                else if (e.flags |= 16777216,
                !Pd(t)) {
                    if (null !== (t = Ta.current) && ((4194176 & rc) === rc ? null !== Pa : (62914560 & rc) !== rc && 0 === (536870912 & rc) || t !== Pa))
                        throw fa = sa,
                        oa;
                    e.flags |= 8192
                }
            }
            function Gs(e, t) {
                null !== t && (e.flags |= 4),
                16384 & e.flags && (t = 22 !== e.tag ? Le() : 536870912,
                e.lanes |= t,
                hc |= t)
            }
            function qs(e, t) {
                if (!Yr)
                    switch (e.tailMode) {
                    case "hidden":
                        t = e.tail;
                        for (var n = null; null !== t; )
                            null !== t.alternate && (n = t),
                            t = t.sibling;
                        null === n ? e.tail = null : n.sibling = null;
                        break;
                    case "collapsed":
                        n = e.tail;
                        for (var r = null; null !== n; )
                            null !== n.alternate && (r = n),
                            n = n.sibling;
                        null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
            }
            function Qs(e) {
                var t = null !== e.alternate && e.alternate.child === e.child
                  , n = 0
                  , r = 0;
                if (t)
                    for (var a = e.child; null !== a; )
                        n |= a.lanes | a.childLanes,
                        r |= 31457280 & a.subtreeFlags,
                        r |= 31457280 & a.flags,
                        a.return = e,
                        a = a.sibling;
                else
                    for (a = e.child; null !== a; )
                        n |= a.lanes | a.childLanes,
                        r |= a.subtreeFlags,
                        r |= a.flags,
                        a.return = e,
                        a = a.sibling;
                return e.subtreeFlags |= r,
                e.childLanes = n,
                t
            }
            function Ks(e, t, n) {
                var r = t.pendingProps;
                switch (qr(t),
                t.tag) {
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                case 1:
                    return Qs(t),
                    null;
                case 3:
                    return n = t.stateNode,
                    r = null,
                    null !== e && (r = e.memoizedState.cache),
                    t.memoizedState.cache !== r && (t.flags |= 2048),
                    bo(Fa),
                    ee(),
                    n.pendingContext && (n.context = n.pendingContext,
                    n.pendingContext = null),
                    null !== e && null !== e.child || (ra(t) ? $s(t) : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024,
                    null !== Xr && (Rc(Xr),
                    Xr = null))),
                    Qs(t),
                    null;
                case 26:
                    return n = t.memoizedState,
                    null === e ? ($s(t),
                    null !== n ? (Qs(t),
                    Vs(t, n)) : (Qs(t),
                    t.flags &= -16777217)) : n ? n !== e.memoizedState ? ($s(t),
                    Qs(t),
                    Vs(t, n)) : (Qs(t),
                    t.flags &= -16777217) : (e.memoizedProps !== r && $s(t),
                    Qs(t),
                    t.flags &= -16777217),
                    null;
                case 27:
                    ne(t),
                    n = X.current;
                    var a = t.type;
                    if (null !== e && null != t.stateNode)
                        e.memoizedProps !== r && $s(t);
                    else {
                        if (!r) {
                            if (null === t.stateNode)
                                throw Error(i(166));
                            return Qs(t),
                            null
                        }
                        e = K.current,
                        ra(t) ? ta(t) : (e = cd(a, r, n),
                        t.stateNode = e,
                        $s(t))
                    }
                    return Qs(t),
                    null;
                case 5:
                    if (ne(t),
                    n = t.type,
                    null !== e && null != t.stateNode)
                        e.memoizedProps !== r && $s(t);
                    else {
                        if (!r) {
                            if (null === t.stateNode)
                                throw Error(i(166));
                            return Qs(t),
                            null
                        }
                        if (e = K.current,
                        ra(t))
                            ta(t);
                        else {
                            switch (a = Ku(X.current),
                            e) {
                            case 1:
                                e = a.createElementNS("http://www.w3.org/2000/svg", n);
                                break;
                            case 2:
                                e = a.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                break;
                            default:
                                switch (n) {
                                case "svg":
                                    e = a.createElementNS("http://www.w3.org/2000/svg", n);
                                    break;
                                case "math":
                                    e = a.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                    break;
                                case "script":
                                    (e = a.createElement("div")).innerHTML = "<script><\/script>",
                                    e = e.removeChild(e.firstChild);
                                    break;
                                case "select":
                                    e = "string" === typeof r.is ? a.createElement("select", {
                                        is: r.is
                                    }) : a.createElement("select"),
                                    r.multiple ? e.multiple = !0 : r.size && (e.size = r.size);
                                    break;
                                default:
                                    e = "string" === typeof r.is ? a.createElement(n, {
                                        is: r.is
                                    }) : a.createElement(n)
                                }
                            }
                            e[De] = t,
                            e[Fe] = r;
                            e: for (a = t.child; null !== a; ) {
                                if (5 === a.tag || 6 === a.tag)
                                    e.appendChild(a.stateNode);
                                else if (4 !== a.tag && 27 !== a.tag && null !== a.child) {
                                    a.child.return = a,
                                    a = a.child;
                                    continue
                                }
                                if (a === t)
                                    break e;
                                for (; null === a.sibling; ) {
                                    if (null === a.return || a.return === t)
                                        break e;
                                    a = a.return
                                }
                                a.sibling.return = a.return,
                                a = a.sibling
                            }
                            t.stateNode = e;
                            e: switch (Gu(e, n, r),
                            n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                e = !!r.autoFocus;
                                break e;
                            case "img":
                                e = !0;
                                break e;
                            default:
                                e = !1
                            }
                            e && $s(t)
                        }
                    }
                    return Qs(t),
                    t.flags &= -16777217,
                    null;
                case 6:
                    if (e && null != t.stateNode)
                        e.memoizedProps !== r && $s(t);
                    else {
                        if ("string" !== typeof r && null === t.stateNode)
                            throw Error(i(166));
                        if (e = X.current,
                        ra(t)) {
                            if (e = t.stateNode,
                            n = t.memoizedProps,
                            r = null,
                            null !== (a = Qr))
                                switch (a.tag) {
                                case 27:
                                case 5:
                                    r = a.memoizedProps
                                }
                            e[De] = t,
                            (e = !!(e.nodeValue === n || null !== r && !0 === r.suppressHydrationWarning || Hu(e.nodeValue, n))) || ea(t)
                        } else
                            (e = Ku(e).createTextNode(r))[De] = t,
                            t.stateNode = e
                    }
                    return Qs(t),
                    null;
                case 13:
                    if (r = t.memoizedState,
                    null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                        if (a = ra(t),
                        null !== r && null !== r.dehydrated) {
                            if (null === e) {
                                if (!a)
                                    throw Error(i(318));
                                if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null))
                                    throw Error(i(317));
                                a[De] = t
                            } else
                                aa(),
                                0 === (128 & t.flags) && (t.memoizedState = null),
                                t.flags |= 4;
                            Qs(t),
                            a = !1
                        } else
                            null !== Xr && (Rc(Xr),
                            Xr = null),
                            a = !0;
                        if (!a)
                            return 256 & t.flags ? (Aa(t),
                            t) : (Aa(t),
                            null)
                    }
                    if (Aa(t),
                    0 !== (128 & t.flags))
                        return t.lanes = n,
                        t;
                    if (n = null !== r,
                    e = null !== e && null !== e.memoizedState,
                    n) {
                        a = null,
                        null !== (r = t.child).alternate && null !== r.alternate.memoizedState && null !== r.alternate.memoizedState.cachePool && (a = r.alternate.memoizedState.cachePool.pool);
                        var l = null;
                        null !== r.memoizedState && null !== r.memoizedState.cachePool && (l = r.memoizedState.cachePool.pool),
                        l !== a && (r.flags |= 2048)
                    }
                    return n !== e && n && (t.child.flags |= 8192),
                    Gs(t, t.updateQueue),
                    Qs(t),
                    null;
                case 4:
                    return ee(),
                    null === e && _u(t.stateNode.containerInfo),
                    Qs(t),
                    null;
                case 10:
                    return bo(t.type),
                    Qs(t),
                    null;
                case 19:
                    if (q(Ra),
                    null === (a = t.memoizedState))
                        return Qs(t),
                        null;
                    if (r = 0 !== (128 & t.flags),
                    null === (l = a.rendering))
                        if (r)
                            qs(a, !1);
                        else {
                            if (0 !== uc || null !== e && 0 !== (128 & e.flags))
                                for (e = t.child; null !== e; ) {
                                    if (null !== (l = Oa(e))) {
                                        for (t.flags |= 128,
                                        qs(a, !1),
                                        e = l.updateQueue,
                                        t.updateQueue = e,
                                        Gs(t, e),
                                        t.subtreeFlags = 0,
                                        e = n,
                                        n = t.child; null !== n; )
                                            Ds(n, e),
                                            n = n.sibling;
                                        return Q(Ra, 1 & Ra.current | 2),
                                        t.child
                                    }
                                    e = e.sibling
                                }
                            null !== a.tail && se() > xc && (t.flags |= 128,
                            r = !0,
                            qs(a, !1),
                            t.lanes = 4194304)
                        }
                    else {
                        if (!r)
                            if (null !== (e = Oa(l))) {
                                if (t.flags |= 128,
                                r = !0,
                                e = e.updateQueue,
                                t.updateQueue = e,
                                Gs(t, e),
                                qs(a, !0),
                                null === a.tail && "hidden" === a.tailMode && !l.alternate && !Yr)
                                    return Qs(t),
                                    null
                            } else
                                2 * se() - a.renderingStartTime > xc && 536870912 !== n && (t.flags |= 128,
                                r = !0,
                                qs(a, !1),
                                t.lanes = 4194304);
                        a.isBackwards ? (l.sibling = t.child,
                        t.child = l) : (null !== (e = a.last) ? e.sibling = l : t.child = l,
                        a.last = l)
                    }
                    return null !== a.tail ? (t = a.tail,
                    a.rendering = t,
                    a.tail = t.sibling,
                    a.renderingStartTime = se(),
                    t.sibling = null,
                    e = Ra.current,
                    Q(Ra, r ? 1 & e | 2 : 1 & e),
                    t) : (Qs(t),
                    null);
                case 22:
                case 23:
                    return Aa(t),
                    Ca(),
                    r = null !== t.memoizedState,
                    null !== e ? null !== e.memoizedState !== r && (t.flags |= 8192) : r && (t.flags |= 8192),
                    r ? 0 !== (536870912 & n) && 0 === (128 & t.flags) && (Qs(t),
                    6 & t.subtreeFlags && (t.flags |= 8192)) : Qs(t),
                    null !== (n = t.updateQueue) && Gs(t, n.retryQueue),
                    n = null,
                    null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool),
                    r = null,
                    null !== t.memoizedState && null !== t.memoizedState.cachePool && (r = t.memoizedState.cachePool.pool),
                    r !== n && (t.flags |= 2048),
                    null !== e && q(Qa),
                    null;
                case 24:
                    return n = null,
                    null !== e && (n = e.memoizedState.cache),
                    t.memoizedState.cache !== n && (t.flags |= 2048),
                    bo(Fa),
                    Qs(t),
                    null;
                case 25:
                    return null
                }
                throw Error(i(156, t.tag))
            }
            function Ys(e, t) {
                switch (qr(t),
                t.tag) {
                case 1:
                    return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128,
                    t) : null;
                case 3:
                    return bo(Fa),
                    ee(),
                    0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128,
                    t) : null;
                case 26:
                case 27:
                case 5:
                    return ne(t),
                    null;
                case 13:
                    if (Aa(t),
                    null !== (e = t.memoizedState) && null !== e.dehydrated) {
                        if (null === t.alternate)
                            throw Error(i(340));
                        aa()
                    }
                    return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128,
                    t) : null;
                case 19:
                    return q(Ra),
                    null;
                case 4:
                    return ee(),
                    null;
                case 10:
                    return bo(t.type),
                    null;
                case 22:
                case 23:
                    return Aa(t),
                    Ca(),
                    null !== e && q(Qa),
                    65536 & (e = t.flags) ? (t.flags = -65537 & e | 128,
                    t) : null;
                case 24:
                    return bo(Fa),
                    null;
                default:
                    return null
                }
            }
            function Xs(e, t) {
                switch (qr(t),
                t.tag) {
                case 3:
                    bo(Fa),
                    ee();
                    break;
                case 26:
                case 27:
                case 5:
                    ne(t);
                    break;
                case 4:
                    ee();
                    break;
                case 13:
                    Aa(t);
                    break;
                case 19:
                    q(Ra);
                    break;
                case 10:
                    bo(t.type);
                    break;
                case 22:
                case 23:
                    Aa(t),
                    Ca(),
                    null !== e && q(Qa);
                    break;
                case 24:
                    bo(Fa)
                }
            }
            var Js = {
                getCacheForType: function(e) {
                    var t = No(Fa)
                      , n = t.data.get(e);
                    return void 0 === n && (n = e(),
                    t.data.set(e, n)),
                    n
                }
            }
              , Zs = "function" === typeof WeakMap ? WeakMap : Map
              , ec = 0
              , tc = null
              , nc = null
              , rc = 0
              , ac = 0
              , lc = null
              , ic = !1
              , oc = !1
              , sc = !1
              , cc = 0
              , uc = 0
              , dc = 0
              , fc = 0
              , pc = 0
              , mc = 0
              , hc = 0
              , gc = null
              , vc = null
              , yc = !1
              , bc = 0
              , xc = 1 / 0
              , wc = null
              , kc = null
              , Sc = !1
              , jc = null
              , Nc = 0
              , Ec = 0
              , Cc = null
              , Tc = 0
              , Pc = null;
            function Lc() {
                if (0 !== (2 & ec) && 0 !== rc)
                    return rc & -rc;
                if (null !== L.T) {
                    return 0 !== $a ? $a : wu()
                }
                return Me()
            }
            function zc() {
                0 === mc && (mc = 0 === (536870912 & rc) || Yr ? Pe() : 536870912);
                var e = Ta.current;
                return null !== e && (e.flags |= 32),
                mc
            }
            function _c(e, t, n) {
                (e === tc && 2 === ac || null !== e.cancelPendingCommit) && (Wc(e, 0),
                Ic(e, rc, mc, !1)),
                _e(e, n),
                0 !== (2 & ec) && e === tc || (e === tc && (0 === (2 & ec) && (fc |= n),
                4 === uc && Ic(e, rc, mc, !1)),
                hu(e))
            }
            function Ac(e, t, n) {
                if (0 !== (6 & ec))
                    throw Error(i(327));
                for (var r = !n && 0 === (60 & t) && 0 === (t & e.expiredLanes) || Ce(e, t), a = r ? function(e, t) {
                    var n = ec;
                    ec |= 2;
                    var r = Hc()
                      , a = Bc();
                    tc !== e || rc !== t ? (wc = null,
                    xc = se() + 500,
                    Wc(e, t)) : oc = Ce(e, t);
                    e: for (; ; )
                        try {
                            if (0 !== ac && null !== nc) {
                                t = nc;
                                var l = lc;
                                t: switch (ac) {
                                case 1:
                                    ac = 0,
                                    lc = null,
                                    Yc(e, t, l, 1);
                                    break;
                                case 2:
                                    if (ca(l)) {
                                        ac = 0,
                                        lc = null,
                                        Kc(t);
                                        break
                                    }
                                    t = function() {
                                        2 === ac && tc === e && (ac = 7),
                                        hu(e)
                                    }
                                    ,
                                    l.then(t, t);
                                    break e;
                                case 3:
                                    ac = 7;
                                    break e;
                                case 4:
                                    ac = 5;
                                    break e;
                                case 7:
                                    ca(l) ? (ac = 0,
                                    lc = null,
                                    Kc(t)) : (ac = 0,
                                    lc = null,
                                    Yc(e, t, l, 7));
                                    break;
                                case 5:
                                    var o = null;
                                    switch (nc.tag) {
                                    case 26:
                                        o = nc.memoizedState;
                                    case 5:
                                    case 27:
                                        var s = nc;
                                        if (!o || Pd(o)) {
                                            ac = 0,
                                            lc = null;
                                            var c = s.sibling;
                                            if (null !== c)
                                                nc = c;
                                            else {
                                                var u = s.return;
                                                null !== u ? (nc = u,
                                                Xc(u)) : nc = null
                                            }
                                            break t
                                        }
                                    }
                                    ac = 0,
                                    lc = null,
                                    Yc(e, t, l, 5);
                                    break;
                                case 6:
                                    ac = 0,
                                    lc = null,
                                    Yc(e, t, l, 6);
                                    break;
                                case 8:
                                    Fc(),
                                    uc = 6;
                                    break e;
                                default:
                                    throw Error(i(462))
                                }
                            }
                            qc();
                            break
                        } catch (d) {
                            Uc(e, d)
                        }
                    return vo = go = null,
                    L.H = r,
                    L.A = a,
                    ec = n,
                    null !== nc ? 0 : (tc = null,
                    rc = 0,
                    Er(),
                    uc)
                }(e, t) : Vc(e, t, !0), l = r; ; ) {
                    if (0 === a) {
                        oc && !r && Ic(e, t, 0, !1);
                        break
                    }
                    if (6 === a)
                        Ic(e, t, 0, !ic);
                    else {
                        if (n = e.current.alternate,
                        l && !Mc(n)) {
                            a = Vc(e, t, !1),
                            l = !1;
                            continue
                        }
                        if (2 === a) {
                            if (l = t,
                            e.errorRecoveryDisabledLanes & l)
                                var o = 0;
                            else
                                o = 0 !== (o = -536870913 & e.pendingLanes) ? o : 536870912 & o ? 536870912 : 0;
                            if (0 !== o) {
                                t = o;
                                e: {
                                    var s = e;
                                    a = gc;
                                    var c = s.current.memoizedState.isDehydrated;
                                    if (c && (Wc(s, o).flags |= 256),
                                    2 !== (o = Vc(s, o, !1))) {
                                        if (sc && !c) {
                                            s.errorRecoveryDisabledLanes |= l,
                                            fc |= l,
                                            a = 4;
                                            break e
                                        }
                                        l = vc,
                                        vc = a,
                                        null !== l && Rc(l)
                                    }
                                    a = o
                                }
                                if (l = !1,
                                2 !== a)
                                    continue
                            }
                        }
                        if (1 === a) {
                            Wc(e, 0),
                            Ic(e, t, 0, !0);
                            break
                        }
                        e: {
                            switch (r = e,
                            a) {
                            case 0:
                            case 1:
                                throw Error(i(345));
                            case 4:
                                if ((4194176 & t) === t) {
                                    Ic(r, t, mc, !ic);
                                    break e
                                }
                                break;
                            case 2:
                                vc = null;
                                break;
                            case 3:
                            case 5:
                                break;
                            default:
                                throw Error(i(329))
                            }
                            if (r.finishedWork = n,
                            r.finishedLanes = t,
                            (62914560 & t) === t && 10 < (l = bc + 300 - se())) {
                                if (Ic(r, t, mc, !ic),
                                0 !== Ee(r, 0))
                                    break e;
                                r.timeoutHandle = ed(Oc.bind(null, r, n, vc, wc, yc, t, mc, fc, hc, ic, 2, -0, 0), l)
                            } else
                                Oc(r, n, vc, wc, yc, t, mc, fc, hc, ic, 0, -0, 0)
                        }
                    }
                    break
                }
                hu(e)
            }
            function Rc(e) {
                null === vc ? vc = e : vc.push.apply(vc, e)
            }
            function Oc(e, t, n, r, a, l, o, s, c, u, d, f, p) {
                var m = t.subtreeFlags;
                if ((8192 & m || 16785408 === (16785408 & m)) && (Ld = {
                    stylesheets: null,
                    count: 0,
                    unsuspend: zd
                },
                Ts(t),
                null !== (t = function() {
                    if (null === Ld)
                        throw Error(i(475));
                    var e = Ld;
                    return e.stylesheets && 0 === e.count && Rd(e, e.stylesheets),
                    0 < e.count ? function(t) {
                        var n = setTimeout((function() {
                            if (e.stylesheets && Rd(e, e.stylesheets),
                            e.unsuspend) {
                                var t = e.unsuspend;
                                e.unsuspend = null,
                                t()
                            }
                        }
                        ), 6e4);
                        return e.unsuspend = t,
                        function() {
                            e.unsuspend = null,
                            clearTimeout(n)
                        }
                    }
                    : null
                }())))
                    return e.cancelPendingCommit = t(Zc.bind(null, e, n, r, a, o, s, c, 1, f, p)),
                    void Ic(e, l, o, !u);
                Zc(e, n, r, a, o, s, c, d, f, p)
            }
            function Mc(e) {
                for (var t = e; ; ) {
                    var n = t.tag;
                    if ((0 === n || 11 === n || 15 === n) && 16384 & t.flags && (null !== (n = t.updateQueue) && null !== (n = n.stores)))
                        for (var r = 0; r < n.length; r++) {
                            var a = n[r]
                              , l = a.getSnapshot;
                            a = a.value;
                            try {
                                if (!Qn(l(), a))
                                    return !1
                            } catch (i) {
                                return !1
                            }
                        }
                    if (n = t.child,
                    16384 & t.subtreeFlags && null !== n)
                        n.return = t,
                        t = n;
                    else {
                        if (t === e)
                            break;
                        for (; null === t.sibling; ) {
                            if (null === t.return || t.return === e)
                                return !0;
                            t = t.return
                        }
                        t.sibling.return = t.return,
                        t = t.sibling
                    }
                }
                return !0
            }
            function Ic(e, t, n, r) {
                t &= ~pc,
                t &= ~fc,
                e.suspendedLanes |= t,
                e.pingedLanes &= ~t,
                r && (e.warmLanes |= t),
                r = e.expirationTimes;
                for (var a = t; 0 < a; ) {
                    var l = 31 - xe(a)
                      , i = 1 << l;
                    r[l] = -1,
                    a &= ~i
                }
                0 !== n && Ae(e, n, t)
            }
            function Dc() {
                return 0 !== (6 & ec) || (gu(0, !1),
                !1)
            }
            function Fc() {
                if (null !== nc) {
                    if (0 === ac)
                        var e = nc.return;
                    else
                        vo = go = null,
                        vl(e = nc),
                        ma = null,
                        ha = 0,
                        e = nc;
                    for (; null !== e; )
                        Xs(e.alternate, e),
                        e = e.return;
                    nc = null
                }
            }
            function Wc(e, t) {
                e.finishedWork = null,
                e.finishedLanes = 0;
                var n = e.timeoutHandle;
                -1 !== n && (e.timeoutHandle = -1,
                td(n)),
                null !== (n = e.cancelPendingCommit) && (e.cancelPendingCommit = null,
                n()),
                Fc(),
                tc = e,
                nc = n = Is(e.current, null),
                rc = t,
                ac = 0,
                lc = null,
                ic = !1,
                oc = Ce(e, t),
                sc = !1,
                hc = mc = pc = fc = dc = uc = 0,
                vc = gc = null,
                yc = !1,
                0 !== (8 & t) && (t |= 32 & t);
                var r = e.entangledLanes;
                if (0 !== r)
                    for (e = e.entanglements,
                    r &= t; 0 < r; ) {
                        var a = 31 - xe(r)
                          , l = 1 << a;
                        t |= e[a],
                        r &= ~l
                    }
                return cc = t,
                Er(),
                n
            }
            function Uc(e, t) {
                Za = null,
                L.H = ji,
                t === ia ? (t = pa(),
                ac = 3) : t === oa ? (t = pa(),
                ac = 4) : ac = t === Hi ? 8 : null !== t && "object" === typeof t && "function" === typeof t.then ? 6 : 1,
                lc = t,
                null === nc && (uc = 1,
                Ii(e, Rr(t, e.current)))
            }
            function Hc() {
                var e = L.H;
                return L.H = ji,
                null === e ? ji : e
            }
            function Bc() {
                var e = L.A;
                return L.A = Js,
                e
            }
            function $c() {
                uc = 4,
                ic || (4194176 & rc) !== rc && null !== Ta.current || (oc = !0),
                0 === (134217727 & dc) && 0 === (134217727 & fc) || null === tc || Ic(tc, rc, mc, !1)
            }
            function Vc(e, t, n) {
                var r = ec;
                ec |= 2;
                var a = Hc()
                  , l = Bc();
                tc === e && rc === t || (wc = null,
                Wc(e, t)),
                t = !1;
                var i = uc;
                e: for (; ; )
                    try {
                        if (0 !== ac && null !== nc) {
                            var o = nc
                              , s = lc;
                            switch (ac) {
                            case 8:
                                Fc(),
                                i = 6;
                                break e;
                            case 3:
                            case 2:
                            case 6:
                                null === Ta.current && (t = !0);
                                var c = ac;
                                if (ac = 0,
                                lc = null,
                                Yc(e, o, s, c),
                                n && oc) {
                                    i = 0;
                                    break e
                                }
                                break;
                            default:
                                c = ac,
                                ac = 0,
                                lc = null,
                                Yc(e, o, s, c)
                            }
                        }
                        Gc(),
                        i = uc;
                        break
                    } catch (u) {
                        Uc(e, u)
                    }
                return t && e.shellSuspendCounter++,
                vo = go = null,
                ec = r,
                L.H = a,
                L.A = l,
                null === nc && (tc = null,
                rc = 0,
                Er()),
                i
            }
            function Gc() {
                for (; null !== nc; )
                    Qc(nc)
            }
            function qc() {
                for (; null !== nc && !ie(); )
                    Qc(nc)
            }
            function Qc(e) {
                var t = mo(e.alternate, e, cc);
                e.memoizedProps = e.pendingProps,
                null === t ? Xc(e) : nc = t
            }
            function Kc(e) {
                var t = e
                  , n = t.alternate;
                switch (t.tag) {
                case 15:
                case 0:
                    t = Ji(n, t, t.pendingProps, t.type, void 0, rc);
                    break;
                case 11:
                    t = Ji(n, t, t.pendingProps, t.type.render, t.ref, rc);
                    break;
                case 5:
                    vl(t);
                default:
                    Xs(n, t),
                    t = mo(n, t = nc = Ds(t, cc), cc)
                }
                e.memoizedProps = e.pendingProps,
                null === t ? Xc(e) : nc = t
            }
            function Yc(e, t, n, r) {
                vo = go = null,
                vl(t),
                ma = null,
                ha = 0;
                var a = t.return;
                try {
                    if (function(e, t, n, r, a) {
                        if (n.flags |= 32768,
                        null !== r && "object" === typeof r && "function" === typeof r.then) {
                            if (null !== (t = n.alternate) && ko(t, n, a, !0),
                            null !== (n = Ta.current)) {
                                switch (n.tag) {
                                case 13:
                                    return null === Pa ? $c() : null === n.alternate && 0 === uc && (uc = 3),
                                    n.flags &= -257,
                                    n.flags |= 65536,
                                    n.lanes = a,
                                    r === sa ? n.flags |= 16384 : (null === (t = n.updateQueue) ? n.updateQueue = new Set([r]) : t.add(r),
                                    au(e, r, a)),
                                    !1;
                                case 22:
                                    return n.flags |= 65536,
                                    r === sa ? n.flags |= 16384 : (null === (t = n.updateQueue) ? (t = {
                                        transitions: null,
                                        markerInstances: null,
                                        retryQueue: new Set([r])
                                    },
                                    n.updateQueue = t) : null === (n = t.retryQueue) ? t.retryQueue = new Set([r]) : n.add(r),
                                    au(e, r, a)),
                                    !1
                                }
                                throw Error(i(435, n.tag))
                            }
                            return au(e, r, a),
                            $c(),
                            !1
                        }
                        if (Yr)
                            return null !== (t = Ta.current) ? (0 === (65536 & t.flags) && (t.flags |= 256),
                            t.flags |= 65536,
                            t.lanes = a,
                            r !== Zr && la(Rr(e = Error(i(422), {
                                cause: r
                            }), n))) : (r !== Zr && la(Rr(t = Error(i(423), {
                                cause: r
                            }), n)),
                            (e = e.current.alternate).flags |= 65536,
                            a &= -a,
                            e.lanes |= a,
                            r = Rr(r, n),
                            Ro(e, a = Fi(e.stateNode, r, a)),
                            4 !== uc && (uc = 2)),
                            !1;
                        var l = Error(i(520), {
                            cause: r
                        });
                        if (l = Rr(l, n),
                        null === gc ? gc = [l] : gc.push(l),
                        4 !== uc && (uc = 2),
                        null === t)
                            return !0;
                        r = Rr(r, n),
                        n = t;
                        do {
                            switch (n.tag) {
                            case 3:
                                return n.flags |= 65536,
                                e = a & -a,
                                n.lanes |= e,
                                Ro(n, e = Fi(n.stateNode, r, e)),
                                !1;
                            case 1:
                                if (t = n.type,
                                l = n.stateNode,
                                0 === (128 & n.flags) && ("function" === typeof t.getDerivedStateFromError || null !== l && "function" === typeof l.componentDidCatch && (null === kc || !kc.has(l))))
                                    return n.flags |= 65536,
                                    a &= -a,
                                    n.lanes |= a,
                                    Ui(a = Wi(a), e, n, r),
                                    Ro(n, a),
                                    !1
                            }
                            n = n.return
                        } while (null !== n);
                        return !1
                    }(e, a, t, n, rc))
                        return uc = 1,
                        Ii(e, Rr(n, e.current)),
                        void (nc = null)
                } catch (l) {
                    if (null !== a)
                        throw nc = a,
                        l;
                    return uc = 1,
                    Ii(e, Rr(n, e.current)),
                    void (nc = null)
                }
                32768 & t.flags ? (Yr || 1 === r ? e = !0 : oc || 0 !== (536870912 & rc) ? e = !1 : (ic = e = !0,
                (2 === r || 3 === r || 6 === r) && (null !== (r = Ta.current) && 13 === r.tag && (r.flags |= 16384))),
                Jc(t, e)) : Xc(t)
            }
            function Xc(e) {
                var t = e;
                do {
                    if (0 !== (32768 & t.flags))
                        return void Jc(t, ic);
                    e = t.return;
                    var n = Ks(t.alternate, t, cc);
                    if (null !== n)
                        return void (nc = n);
                    if (null !== (t = t.sibling))
                        return void (nc = t);
                    nc = t = e
                } while (null !== t);
                0 === uc && (uc = 5)
            }
            function Jc(e, t) {
                do {
                    var n = Ys(e.alternate, e);
                    if (null !== n)
                        return n.flags &= 32767,
                        void (nc = n);
                    if (null !== (n = e.return) && (n.flags |= 32768,
                    n.subtreeFlags = 0,
                    n.deletions = null),
                    !t && null !== (e = e.sibling))
                        return void (nc = e);
                    nc = e = n
                } while (null !== e);
                uc = 6,
                nc = null
            }
            function Zc(e, t, n, r, a, l, o, s, c, u) {
                var d = L.T
                  , f = H.p;
                try {
                    H.p = 2,
                    L.T = null,
                    function(e, t, n, r, a, l, o, s) {
                        do {
                            tu()
                        } while (null !== jc);
                        if (0 !== (6 & ec))
                            throw Error(i(327));
                        var c = e.finishedWork;
                        if (r = e.finishedLanes,
                        null === c)
                            return null;
                        if (e.finishedWork = null,
                        e.finishedLanes = 0,
                        c === e.current)
                            throw Error(i(177));
                        e.callbackNode = null,
                        e.callbackPriority = 0,
                        e.cancelPendingCommit = null;
                        var u = c.lanes | c.childLanes;
                        if (function(e, t, n, r, a, l) {
                            var i = e.pendingLanes;
                            e.pendingLanes = n,
                            e.suspendedLanes = 0,
                            e.pingedLanes = 0,
                            e.warmLanes = 0,
                            e.expiredLanes &= n,
                            e.entangledLanes &= n,
                            e.errorRecoveryDisabledLanes &= n,
                            e.shellSuspendCounter = 0;
                            var o = e.entanglements
                              , s = e.expirationTimes
                              , c = e.hiddenUpdates;
                            for (n = i & ~n; 0 < n; ) {
                                var u = 31 - xe(n)
                                  , d = 1 << u;
                                o[u] = 0,
                                s[u] = -1;
                                var f = c[u];
                                if (null !== f)
                                    for (c[u] = null,
                                    u = 0; u < f.length; u++) {
                                        var p = f[u];
                                        null !== p && (p.lane &= -536870913)
                                    }
                                n &= ~d
                            }
                            0 !== r && Ae(e, r, 0),
                            0 !== l && 0 === a && 0 !== e.tag && (e.suspendedLanes |= l & ~(i & ~t))
                        }(e, r, u |= Nr, l, o, s),
                        e === tc && (nc = tc = null,
                        rc = 0),
                        0 === (10256 & c.subtreeFlags) && 0 === (10256 & c.flags) || Sc || (Sc = !0,
                        Ec = u,
                        Cc = n,
                        function(e, t) {
                            ae(e, t)
                        }(fe, (function() {
                            return tu(),
                            null
                        }
                        ))),
                        n = 0 !== (15990 & c.flags),
                        0 !== (15990 & c.subtreeFlags) || n ? (n = L.T,
                        L.T = null,
                        l = H.p,
                        H.p = 2,
                        o = ec,
                        ec |= 4,
                        function(e, t) {
                            if (e = e.containerInfo,
                            qu = $d,
                            er(e = Zn(e))) {
                                if ("selectionStart"in e)
                                    var n = {
                                        start: e.selectionStart,
                                        end: e.selectionEnd
                                    };
                                else
                                    e: {
                                        var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                        if (r && 0 !== r.rangeCount) {
                                            n = r.anchorNode;
                                            var a = r.anchorOffset
                                              , l = r.focusNode;
                                            r = r.focusOffset;
                                            try {
                                                n.nodeType,
                                                l.nodeType
                                            } catch (g) {
                                                n = null;
                                                break e
                                            }
                                            var o = 0
                                              , s = -1
                                              , c = -1
                                              , u = 0
                                              , d = 0
                                              , f = e
                                              , p = null;
                                            t: for (; ; ) {
                                                for (var m; f !== n || 0 !== a && 3 !== f.nodeType || (s = o + a),
                                                f !== l || 0 !== r && 3 !== f.nodeType || (c = o + r),
                                                3 === f.nodeType && (o += f.nodeValue.length),
                                                null !== (m = f.firstChild); )
                                                    p = f,
                                                    f = m;
                                                for (; ; ) {
                                                    if (f === e)
                                                        break t;
                                                    if (p === n && ++u === a && (s = o),
                                                    p === l && ++d === r && (c = o),
                                                    null !== (m = f.nextSibling))
                                                        break;
                                                    p = (f = p).parentNode
                                                }
                                                f = m
                                            }
                                            n = -1 === s || -1 === c ? null : {
                                                start: s,
                                                end: c
                                            }
                                        } else
                                            n = null
                                    }
                                n = n || {
                                    start: 0,
                                    end: 0
                                }
                            } else
                                n = null;
                            for (Qu = {
                                focusedElem: e,
                                selectionRange: n
                            },
                            $d = !1,
                            ns = t; null !== ns; )
                                if (e = (t = ns).child,
                                0 !== (1028 & t.subtreeFlags) && null !== e)
                                    e.return = t,
                                    ns = e;
                                else
                                    for (; null !== ns; ) {
                                        switch (l = (t = ns).alternate,
                                        e = t.flags,
                                        t.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                        case 5:
                                        case 26:
                                        case 27:
                                        case 6:
                                        case 4:
                                        case 17:
                                            break;
                                        case 1:
                                            if (0 !== (1024 & e) && null !== l) {
                                                e = void 0,
                                                n = t,
                                                a = l.memoizedProps,
                                                l = l.memoizedState,
                                                r = n.stateNode;
                                                try {
                                                    var h = _i(n.type, a, (n.elementType,
                                                    n.type));
                                                    e = r.getSnapshotBeforeUpdate(h, l),
                                                    r.__reactInternalSnapshotBeforeUpdate = e
                                                } catch (v) {
                                                    ru(n, n.return, v)
                                                }
                                            }
                                            break;
                                        case 3:
                                            if (0 !== (1024 & e))
                                                if (9 === (n = (e = t.stateNode.containerInfo).nodeType))
                                                    id(e);
                                                else if (1 === n)
                                                    switch (e.nodeName) {
                                                    case "HEAD":
                                                    case "HTML":
                                                    case "BODY":
                                                        id(e);
                                                        break;
                                                    default:
                                                        e.textContent = ""
                                                    }
                                            break;
                                        default:
                                            if (0 !== (1024 & e))
                                                throw Error(i(163))
                                        }
                                        if (null !== (e = t.sibling)) {
                                            e.return = t.return,
                                            ns = e;
                                            break
                                        }
                                        ns = t.return
                                    }
                            h = rs,
                            rs = !1
                        }(e, c),
                        ms(c, e),
                        tr(Qu, e.containerInfo),
                        $d = !!qu,
                        Qu = qu = null,
                        e.current = c,
                        as(e, c.alternate, c),
                        oe(),
                        ec = o,
                        H.p = l,
                        L.T = n) : e.current = c,
                        Sc ? (Sc = !1,
                        jc = e,
                        Nc = r) : eu(e, u),
                        u = e.pendingLanes,
                        0 === u && (kc = null),
                        function(e) {
                            if (ye && "function" === typeof ye.onCommitFiberRoot)
                                try {
                                    ye.onCommitFiberRoot(ve, e, void 0, 128 === (128 & e.current.flags))
                                } catch (t) {}
                        }(c.stateNode),
                        hu(e),
                        null !== t)
                            for (a = e.onRecoverableError,
                            c = 0; c < t.length; c++)
                                u = t[c],
                                a(u.value, {
                                    componentStack: u.stack
                                });
                        0 !== (3 & Nc) && tu(),
                        u = e.pendingLanes,
                        0 !== (4194218 & r) && 0 !== (42 & u) ? e === Pc ? Tc++ : (Tc = 0,
                        Pc = e) : Tc = 0,
                        gu(0, !1)
                    }(e, t, n, r, f, a, l, o)
                } finally {
                    L.T = d,
                    H.p = f
                }
            }
            function eu(e, t) {
                0 === (e.pooledCacheLanes &= t) && (null != (t = e.pooledCache) && (e.pooledCache = null,
                Ua(t)))
            }
            function tu() {
                if (null !== jc) {
                    var e = jc
                      , t = Ec;
                    Ec = 0;
                    var n = Oe(Nc)
                      , r = L.T
                      , a = H.p;
                    try {
                        if (H.p = 32 > n ? 32 : n,
                        L.T = null,
                        null === jc)
                            var l = !1;
                        else {
                            n = Cc,
                            Cc = null;
                            var o = jc
                              , s = Nc;
                            if (jc = null,
                            Nc = 0,
                            0 !== (6 & ec))
                                throw Error(i(331));
                            var c = ec;
                            if (ec |= 4,
                            zs(o.current),
                            Ss(o, o.current, s, n),
                            ec = c,
                            gu(0, !1),
                            ye && "function" === typeof ye.onPostCommitFiberRoot)
                                try {
                                    ye.onPostCommitFiberRoot(ve, o)
                                } catch (u) {}
                            l = !0
                        }
                        return l
                    } finally {
                        H.p = a,
                        L.T = r,
                        eu(e, t)
                    }
                }
                return !1
            }
            function nu(e, t, n) {
                t = Rr(n, t),
                null !== (e = _o(e, t = Fi(e.stateNode, t, 2), 2)) && (_e(e, 2),
                hu(e))
            }
            function ru(e, t, n) {
                if (3 === e.tag)
                    nu(e, e, n);
                else
                    for (; null !== t; ) {
                        if (3 === t.tag) {
                            nu(t, e, n);
                            break
                        }
                        if (1 === t.tag) {
                            var r = t.stateNode;
                            if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === kc || !kc.has(r))) {
                                e = Rr(n, e),
                                null !== (r = _o(t, n = Wi(2), 2)) && (Ui(n, r, t, e),
                                _e(r, 2),
                                hu(r));
                                break
                            }
                        }
                        t = t.return
                    }
            }
            function au(e, t, n) {
                var r = e.pingCache;
                if (null === r) {
                    r = e.pingCache = new Zs;
                    var a = new Set;
                    r.set(t, a)
                } else
                    void 0 === (a = r.get(t)) && (a = new Set,
                    r.set(t, a));
                a.has(n) || (sc = !0,
                a.add(n),
                e = lu.bind(null, e, t, n),
                t.then(e, e))
            }
            function lu(e, t, n) {
                var r = e.pingCache;
                null !== r && r.delete(t),
                e.pingedLanes |= e.suspendedLanes & n,
                e.warmLanes &= ~n,
                tc === e && (rc & n) === n && (4 === uc || 3 === uc && (62914560 & rc) === rc && 300 > se() - bc ? 0 === (2 & ec) && Wc(e, 0) : pc |= n,
                hc === rc && (hc = 0)),
                hu(e)
            }
            function iu(e, t) {
                0 === t && (t = Le()),
                null !== (e = Pr(e, t)) && (_e(e, t),
                hu(e))
            }
            function ou(e) {
                var t = e.memoizedState
                  , n = 0;
                null !== t && (n = t.retryLane),
                iu(e, n)
            }
            function su(e, t) {
                var n = 0;
                switch (e.tag) {
                case 13:
                    var r = e.stateNode
                      , a = e.memoizedState;
                    null !== a && (n = a.retryLane);
                    break;
                case 19:
                    r = e.stateNode;
                    break;
                case 22:
                    r = e.stateNode._retryCache;
                    break;
                default:
                    throw Error(i(314))
                }
                null !== r && r.delete(t),
                iu(e, n)
            }
            var cu = null
              , uu = null
              , du = !1
              , fu = !1
              , pu = !1
              , mu = 0;
            function hu(e) {
                var t;
                e !== uu && null === e.next && (null === uu ? cu = uu = e : uu = uu.next = e),
                fu = !0,
                du || (du = !0,
                t = vu,
                rd((function() {
                    0 !== (6 & ec) ? ae(ue, t) : t()
                }
                )))
            }
            function gu(e, t) {
                if (!pu && fu) {
                    pu = !0;
                    do {
                        for (var n = !1, r = cu; null !== r; ) {
                            if (!t)
                                if (0 !== e) {
                                    var a = r.pendingLanes;
                                    if (0 === a)
                                        var l = 0;
                                    else {
                                        var i = r.suspendedLanes
                                          , o = r.pingedLanes;
                                        l = (1 << 31 - xe(42 | e) + 1) - 1,
                                        l = 201326677 & (l &= a & ~(i & ~o)) ? 201326677 & l | 1 : l ? 2 | l : 0
                                    }
                                    0 !== l && (n = !0,
                                    xu(r, l))
                                } else
                                    l = rc,
                                    0 === (3 & (l = Ee(r, r === tc ? l : 0))) || Ce(r, l) || (n = !0,
                                    xu(r, l));
                            r = r.next
                        }
                    } while (n);
                    pu = !1
                }
            }
            function vu() {
                fu = du = !1;
                var e = 0;
                0 !== mu && (function() {
                    var e = window.event;
                    if (e && "popstate" === e.type)
                        return e !== Zu && (Zu = e,
                        !0);
                    return Zu = null,
                    !1
                }() && (e = mu),
                mu = 0);
                for (var t = se(), n = null, r = cu; null !== r; ) {
                    var a = r.next
                      , l = yu(r, t);
                    0 === l ? (r.next = null,
                    null === n ? cu = a : n.next = a,
                    null === a && (uu = n)) : (n = r,
                    (0 !== e || 0 !== (3 & l)) && (fu = !0)),
                    r = a
                }
                gu(e, !1)
            }
            function yu(e, t) {
                for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, l = -62914561 & e.pendingLanes; 0 < l; ) {
                    var i = 31 - xe(l)
                      , o = 1 << i
                      , s = a[i];
                    -1 === s ? 0 !== (o & n) && 0 === (o & r) || (a[i] = Te(o, t)) : s <= t && (e.expiredLanes |= o),
                    l &= ~o
                }
                if (n = rc,
                n = Ee(e, e === (t = tc) ? n : 0),
                r = e.callbackNode,
                0 === n || e === t && 2 === ac || null !== e.cancelPendingCommit)
                    return null !== r && null !== r && le(r),
                    e.callbackNode = null,
                    e.callbackPriority = 0;
                if (0 === (3 & n) || Ce(e, n)) {
                    if ((t = n & -n) === e.callbackPriority)
                        return t;
                    switch (null !== r && le(r),
                    Oe(n)) {
                    case 2:
                    case 8:
                        n = de;
                        break;
                    case 32:
                    default:
                        n = fe;
                        break;
                    case 268435456:
                        n = me
                    }
                    return r = bu.bind(null, e),
                    n = ae(n, r),
                    e.callbackPriority = t,
                    e.callbackNode = n,
                    t
                }
                return null !== r && null !== r && le(r),
                e.callbackPriority = 2,
                e.callbackNode = null,
                2
            }
            function bu(e, t) {
                var n = e.callbackNode;
                if (tu() && e.callbackNode !== n)
                    return null;
                var r = rc;
                return 0 === (r = Ee(e, e === tc ? r : 0)) ? null : (Ac(e, r, t),
                yu(e, se()),
                null != e.callbackNode && e.callbackNode === n ? bu.bind(null, e) : null)
            }
            function xu(e, t) {
                if (tu())
                    return null;
                Ac(e, t, !0)
            }
            function wu() {
                return 0 === mu && (mu = Pe()),
                mu
            }
            function ku(e) {
                return null == e || "symbol" === typeof e || "boolean" === typeof e ? null : "function" === typeof e ? e : Pt("" + e)
            }
            function Su(e, t) {
                var n = t.ownerDocument.createElement("input");
                return n.name = t.name,
                n.value = t.value,
                e.id && n.setAttribute("form", e.id),
                t.parentNode.insertBefore(n, t),
                e = new FormData(e),
                n.parentNode.removeChild(n),
                e
            }
            for (var ju = 0; ju < wr.length; ju++) {
                var Nu = wr[ju];
                kr(Nu.toLowerCase(), "on" + (Nu[0].toUpperCase() + Nu.slice(1)))
            }
            kr(pr, "onAnimationEnd"),
            kr(mr, "onAnimationIteration"),
            kr(hr, "onAnimationStart"),
            kr("dblclick", "onDoubleClick"),
            kr("focusin", "onFocus"),
            kr("focusout", "onBlur"),
            kr(gr, "onTransitionRun"),
            kr(vr, "onTransitionStart"),
            kr(yr, "onTransitionCancel"),
            kr(br, "onTransitionEnd"),
            tt("onMouseEnter", ["mouseout", "mouseover"]),
            tt("onMouseLeave", ["mouseout", "mouseover"]),
            tt("onPointerEnter", ["pointerout", "pointerover"]),
            tt("onPointerLeave", ["pointerout", "pointerover"]),
            et("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
            et("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
            et("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
            et("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
            et("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
            et("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var Eu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
              , Cu = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eu));
            function Tu(e, t) {
                t = 0 !== (4 & t);
                for (var n = 0; n < e.length; n++) {
                    var r = e[n]
                      , a = r.event;
                    r = r.listeners;
                    e: {
                        var l = void 0;
                        if (t)
                            for (var i = r.length - 1; 0 <= i; i--) {
                                var o = r[i]
                                  , s = o.instance
                                  , c = o.currentTarget;
                                if (o = o.listener,
                                s !== l && a.isPropagationStopped())
                                    break e;
                                l = o,
                                a.currentTarget = c;
                                try {
                                    l(a)
                                } catch (u) {
                                    Ai(u)
                                }
                                a.currentTarget = null,
                                l = s
                            }
                        else
                            for (i = 0; i < r.length; i++) {
                                if (s = (o = r[i]).instance,
                                c = o.currentTarget,
                                o = o.listener,
                                s !== l && a.isPropagationStopped())
                                    break e;
                                l = o,
                                a.currentTarget = c;
                                try {
                                    l(a)
                                } catch (u) {
                                    Ai(u)
                                }
                                a.currentTarget = null,
                                l = s
                            }
                    }
                }
            }
            function Pu(e, t) {
                var n = t[Ue];
                void 0 === n && (n = t[Ue] = new Set);
                var r = e + "__bubble";
                n.has(r) || (Au(t, e, 2, !1),
                n.add(r))
            }
            function Lu(e, t, n) {
                var r = 0;
                t && (r |= 4),
                Au(n, e, r, t)
            }
            var zu = "_reactListening" + Math.random().toString(36).slice(2);
            function _u(e) {
                if (!e[zu]) {
                    e[zu] = !0,
                    Je.forEach((function(t) {
                        "selectionchange" !== t && (Cu.has(t) || Lu(t, !1, e),
                        Lu(t, !0, e))
                    }
                    ));
                    var t = 9 === e.nodeType ? e : e.ownerDocument;
                    null === t || t[zu] || (t[zu] = !0,
                    Lu("selectionchange", !1, t))
                }
            }
            function Au(e, t, n, r) {
                switch (Xd(t)) {
                case 2:
                    var a = Vd;
                    break;
                case 8:
                    a = Gd;
                    break;
                default:
                    a = qd
                }
                n = a.bind(null, t, n, e),
                a = void 0,
                !Dt || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0),
                r ? void 0 !== a ? e.addEventListener(t, n, {
                    capture: !0,
                    passive: a
                }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {
                    passive: a
                }) : e.addEventListener(t, n, !1)
            }
            function Ru(e, t, n, r, a) {
                var l = r;
                if (0 === (1 & t) && 0 === (2 & t) && null !== r)
                    e: for (; ; ) {
                        if (null === r)
                            return;
                        var i = r.tag;
                        if (3 === i || 4 === i) {
                            var o = r.stateNode.containerInfo;
                            if (o === a || 8 === o.nodeType && o.parentNode === a)
                                break;
                            if (4 === i)
                                for (i = r.return; null !== i; ) {
                                    var s = i.tag;
                                    if ((3 === s || 4 === s) && ((s = i.stateNode.containerInfo) === a || 8 === s.nodeType && s.parentNode === a))
                                        return;
                                    i = i.return
                                }
                            for (; null !== o; ) {
                                if (null === (i = qe(o)))
                                    return;
                                if (5 === (s = i.tag) || 6 === s || 26 === s || 27 === s) {
                                    r = l = i;
                                    continue e
                                }
                                o = o.parentNode
                            }
                        }
                        r = r.return
                    }
                Mt((function() {
                    var r = l
                      , a = zt(n)
                      , i = [];
                    e: {
                        var o = xr.get(e);
                        if (void 0 !== o) {
                            var s = Jt
                              , c = e;
                            switch (e) {
                            case "keypress":
                                if (0 === $t(n))
                                    break e;
                            case "keydown":
                            case "keyup":
                                s = mn;
                                break;
                            case "focusin":
                                c = "focus",
                                s = an;
                                break;
                            case "focusout":
                                c = "blur",
                                s = an;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                s = an;
                                break;
                            case "click":
                                if (2 === n.button)
                                    break e;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                s = nn;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                s = rn;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                s = gn;
                                break;
                            case pr:
                            case mr:
                            case hr:
                                s = ln;
                                break;
                            case br:
                                s = vn;
                                break;
                            case "scroll":
                            case "scrollend":
                                s = en;
                                break;
                            case "wheel":
                                s = yn;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                s = on;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                s = hn;
                                break;
                            case "toggle":
                            case "beforetoggle":
                                s = bn
                            }
                            var u = 0 !== (4 & t)
                              , d = !u && ("scroll" === e || "scrollend" === e)
                              , f = u ? null !== o ? o + "Capture" : null : o;
                            u = [];
                            for (var p, m = r; null !== m; ) {
                                var h = m;
                                if (p = h.stateNode,
                                5 !== (h = h.tag) && 26 !== h && 27 !== h || null === p || null === f || null != (h = It(m, f)) && u.push(Ou(m, h, p)),
                                d)
                                    break;
                                m = m.return
                            }
                            0 < u.length && (o = new s(o,c,null,n,a),
                            i.push({
                                event: o,
                                listeners: u
                            }))
                        }
                    }
                    if (0 === (7 & t)) {
                        if (s = "mouseout" === e || "pointerout" === e,
                        (!(o = "mouseover" === e || "pointerover" === e) || n === Lt || !(c = n.relatedTarget || n.fromElement) || !qe(c) && !c[We]) && (s || o) && (o = a.window === a ? a : (o = a.ownerDocument) ? o.defaultView || o.parentWindow : window,
                        s ? (s = r,
                        null !== (c = (c = n.relatedTarget || n.toElement) ? qe(c) : null) && (d = I(c),
                        u = c.tag,
                        c !== d || 5 !== u && 27 !== u && 6 !== u) && (c = null)) : (s = null,
                        c = r),
                        s !== c)) {
                            if (u = nn,
                            h = "onMouseLeave",
                            f = "onMouseEnter",
                            m = "mouse",
                            "pointerout" !== e && "pointerover" !== e || (u = hn,
                            h = "onPointerLeave",
                            f = "onPointerEnter",
                            m = "pointer"),
                            d = null == s ? o : Ke(s),
                            p = null == c ? o : Ke(c),
                            (o = new u(h,m + "leave",s,n,a)).target = d,
                            o.relatedTarget = p,
                            h = null,
                            qe(a) === r && ((u = new u(f,m + "enter",c,n,a)).target = p,
                            u.relatedTarget = d,
                            h = u),
                            d = h,
                            s && c)
                                e: {
                                    for (f = c,
                                    m = 0,
                                    p = u = s; p; p = Iu(p))
                                        m++;
                                    for (p = 0,
                                    h = f; h; h = Iu(h))
                                        p++;
                                    for (; 0 < m - p; )
                                        u = Iu(u),
                                        m--;
                                    for (; 0 < p - m; )
                                        f = Iu(f),
                                        p--;
                                    for (; m--; ) {
                                        if (u === f || null !== f && u === f.alternate)
                                            break e;
                                        u = Iu(u),
                                        f = Iu(f)
                                    }
                                    u = null
                                }
                            else
                                u = null;
                            null !== s && Du(i, o, s, u, !1),
                            null !== c && null !== d && Du(i, d, c, u, !0)
                        }
                        if ("select" === (s = (o = r ? Ke(r) : window).nodeName && o.nodeName.toLowerCase()) || "input" === s && "file" === o.type)
                            var g = In;
                        else if (zn(o))
                            if (Dn)
                                g = qn;
                            else {
                                g = Vn;
                                var v = $n
                            }
                        else
                            !(s = o.nodeName) || "input" !== s.toLowerCase() || "checkbox" !== o.type && "radio" !== o.type ? r && Et(r.elementType) && (g = In) : g = Gn;
                        switch (g && (g = g(e, r)) ? _n(i, g, n, a) : (v && v(e, o, r),
                        "focusout" === e && r && "number" === o.type && null != r.memoizedProps.value && yt(o, "number", o.value)),
                        v = r ? Ke(r) : window,
                        e) {
                        case "focusin":
                            (zn(v) || "true" === v.contentEditable) && (rr = v,
                            ar = r,
                            lr = null);
                            break;
                        case "focusout":
                            lr = ar = rr = null;
                            break;
                        case "mousedown":
                            ir = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            ir = !1,
                            or(i, n, a);
                            break;
                        case "selectionchange":
                            if (nr)
                                break;
                        case "keydown":
                        case "keyup":
                            or(i, n, a)
                        }
                        var y;
                        if (wn)
                            e: {
                                switch (e) {
                                case "compositionstart":
                                    var b = "onCompositionStart";
                                    break e;
                                case "compositionend":
                                    b = "onCompositionEnd";
                                    break e;
                                case "compositionupdate":
                                    b = "onCompositionUpdate";
                                    break e
                                }
                                b = void 0
                            }
                        else
                            Pn ? Cn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
                        b && (jn && "ko" !== n.locale && (Pn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Pn && (y = Bt()) : (Ut = "value"in (Wt = a) ? Wt.value : Wt.textContent,
                        Pn = !0)),
                        0 < (v = Mu(r, b)).length && (b = new sn(b,e,null,n,a),
                        i.push({
                            event: b,
                            listeners: v
                        }),
                        y ? b.data = y : null !== (y = Tn(n)) && (b.data = y))),
                        (y = Sn ? function(e, t) {
                            switch (e) {
                            case "compositionend":
                                return Tn(t);
                            case "keypress":
                                return 32 !== t.which ? null : (En = !0,
                                Nn);
                            case "textInput":
                                return (e = t.data) === Nn && En ? null : e;
                            default:
                                return null
                            }
                        }(e, n) : function(e, t) {
                            if (Pn)
                                return "compositionend" === e || !wn && Cn(e, t) ? (e = Bt(),
                                Ht = Ut = Wt = null,
                                Pn = !1,
                                e) : null;
                            switch (e) {
                            case "paste":
                            default:
                                return null;
                            case "keypress":
                                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                    if (t.char && 1 < t.char.length)
                                        return t.char;
                                    if (t.which)
                                        return String.fromCharCode(t.which)
                                }
                                return null;
                            case "compositionend":
                                return jn && "ko" !== t.locale ? null : t.data
                            }
                        }(e, n)) && (0 < (b = Mu(r, "onBeforeInput")).length && (v = new sn("onBeforeInput","beforeinput",null,n,a),
                        i.push({
                            event: v,
                            listeners: b
                        }),
                        v.data = y)),
                        function(e, t, n, r, a) {
                            if ("submit" === t && n && n.stateNode === a) {
                                var l = ku((a[Fe] || null).action)
                                  , i = r.submitter;
                                i && null !== (t = (t = i[Fe] || null) ? ku(t.formAction) : i.getAttribute("formAction")) && (l = t,
                                i = null);
                                var o = new Jt("action","action",null,r,a);
                                e.push({
                                    event: o,
                                    listeners: [{
                                        instance: null,
                                        listener: function() {
                                            if (r.defaultPrevented) {
                                                if (0 !== mu) {
                                                    var e = i ? Su(a, i) : new FormData(a);
                                                    ui(n, {
                                                        pending: !0,
                                                        data: e,
                                                        method: a.method,
                                                        action: l
                                                    }, null, e)
                                                }
                                            } else
                                                "function" === typeof l && (o.preventDefault(),
                                                e = i ? Su(a, i) : new FormData(a),
                                                ui(n, {
                                                    pending: !0,
                                                    data: e,
                                                    method: a.method,
                                                    action: l
                                                }, l, e))
                                        },
                                        currentTarget: a
                                    }]
                                })
                            }
                        }(i, e, r, n, a)
                    }
                    Tu(i, t)
                }
                ))
            }
            function Ou(e, t, n) {
                return {
                    instance: e,
                    listener: t,
                    currentTarget: n
                }
            }
            function Mu(e, t) {
                for (var n = t + "Capture", r = []; null !== e; ) {
                    var a = e
                      , l = a.stateNode;
                    5 !== (a = a.tag) && 26 !== a && 27 !== a || null === l || (null != (a = It(e, n)) && r.unshift(Ou(e, a, l)),
                    null != (a = It(e, t)) && r.push(Ou(e, a, l))),
                    e = e.return
                }
                return r
            }
            function Iu(e) {
                if (null === e)
                    return null;
                do {
                    e = e.return
                } while (e && 5 !== e.tag && 27 !== e.tag);
                return e || null
            }
            function Du(e, t, n, r, a) {
                for (var l = t._reactName, i = []; null !== n && n !== r; ) {
                    var o = n
                      , s = o.alternate
                      , c = o.stateNode;
                    if (o = o.tag,
                    null !== s && s === r)
                        break;
                    5 !== o && 26 !== o && 27 !== o || null === c || (s = c,
                    a ? null != (c = It(n, l)) && i.unshift(Ou(n, c, s)) : a || null != (c = It(n, l)) && i.push(Ou(n, c, s))),
                    n = n.return
                }
                0 !== i.length && e.push({
                    event: t,
                    listeners: i
                })
            }
            var Fu = /\r\n?/g
              , Wu = /\u0000|\uFFFD/g;
            function Uu(e) {
                return ("string" === typeof e ? e : "" + e).replace(Fu, "\n").replace(Wu, "")
            }
            function Hu(e, t) {
                return t = Uu(t),
                Uu(e) === t
            }
            function Bu() {}
            function $u(e, t, n, r, a, l) {
                switch (n) {
                case "children":
                    "string" === typeof r ? "body" === t || "textarea" === t && "" === r || kt(e, r) : ("number" === typeof r || "bigint" === typeof r) && "body" !== t && kt(e, "" + r);
                    break;
                case "className":
                    ot(e, "class", r);
                    break;
                case "tabIndex":
                    ot(e, "tabindex", r);
                    break;
                case "dir":
                case "role":
                case "viewBox":
                case "width":
                case "height":
                    ot(e, n, r);
                    break;
                case "style":
                    Nt(e, r, l);
                    break;
                case "data":
                    if ("object" !== t) {
                        ot(e, "data", r);
                        break
                    }
                case "src":
                case "href":
                    if ("" === r && ("a" !== t || "href" !== n)) {
                        e.removeAttribute(n);
                        break
                    }
                    if (null == r || "function" === typeof r || "symbol" === typeof r || "boolean" === typeof r) {
                        e.removeAttribute(n);
                        break
                    }
                    r = Pt("" + r),
                    e.setAttribute(n, r);
                    break;
                case "action":
                case "formAction":
                    if ("function" === typeof r) {
                        e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                        break
                    }
                    if ("function" === typeof l && ("formAction" === n ? ("input" !== t && $u(e, t, "name", a.name, a, null),
                    $u(e, t, "formEncType", a.formEncType, a, null),
                    $u(e, t, "formMethod", a.formMethod, a, null),
                    $u(e, t, "formTarget", a.formTarget, a, null)) : ($u(e, t, "encType", a.encType, a, null),
                    $u(e, t, "method", a.method, a, null),
                    $u(e, t, "target", a.target, a, null))),
                    null == r || "symbol" === typeof r || "boolean" === typeof r) {
                        e.removeAttribute(n);
                        break
                    }
                    r = Pt("" + r),
                    e.setAttribute(n, r);
                    break;
                case "onClick":
                    null != r && (e.onclick = Bu);
                    break;
                case "onScroll":
                    null != r && Pu("scroll", e);
                    break;
                case "onScrollEnd":
                    null != r && Pu("scrollend", e);
                    break;
                case "dangerouslySetInnerHTML":
                    if (null != r) {
                        if ("object" !== typeof r || !("__html"in r))
                            throw Error(i(61));
                        if (null != (n = r.__html)) {
                            if (null != a.children)
                                throw Error(i(60));
                            e.innerHTML = n
                        }
                    }
                    break;
                case "multiple":
                    e.multiple = r && "function" !== typeof r && "symbol" !== typeof r;
                    break;
                case "muted":
                    e.muted = r && "function" !== typeof r && "symbol" !== typeof r;
                    break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                case "autoFocus":
                    break;
                case "xlinkHref":
                    if (null == r || "function" === typeof r || "boolean" === typeof r || "symbol" === typeof r) {
                        e.removeAttribute("xlink:href");
                        break
                    }
                    n = Pt("" + r),
                    e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
                    break;
                case "contentEditable":
                case "spellCheck":
                case "draggable":
                case "value":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                    null != r && "function" !== typeof r && "symbol" !== typeof r ? e.setAttribute(n, "" + r) : e.removeAttribute(n);
                    break;
                case "inert":
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                    r && "function" !== typeof r && "symbol" !== typeof r ? e.setAttribute(n, "") : e.removeAttribute(n);
                    break;
                case "capture":
                case "download":
                    !0 === r ? e.setAttribute(n, "") : !1 !== r && null != r && "function" !== typeof r && "symbol" !== typeof r ? e.setAttribute(n, r) : e.removeAttribute(n);
                    break;
                case "cols":
                case "rows":
                case "size":
                case "span":
                    null != r && "function" !== typeof r && "symbol" !== typeof r && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
                    break;
                case "rowSpan":
                case "start":
                    null == r || "function" === typeof r || "symbol" === typeof r || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
                    break;
                case "popover":
                    Pu("beforetoggle", e),
                    Pu("toggle", e),
                    it(e, "popover", r);
                    break;
                case "xlinkActuate":
                    st(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
                    break;
                case "xlinkArcrole":
                    st(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
                    break;
                case "xlinkRole":
                    st(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
                    break;
                case "xlinkShow":
                    st(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
                    break;
                case "xlinkTitle":
                    st(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
                    break;
                case "xlinkType":
                    st(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
                    break;
                case "xmlBase":
                    st(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
                    break;
                case "xmlLang":
                    st(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
                    break;
                case "xmlSpace":
                    st(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
                    break;
                case "is":
                    it(e, "is", r);
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    (!(2 < n.length) || "o" !== n[0] && "O" !== n[0] || "n" !== n[1] && "N" !== n[1]) && it(e, n = Ct.get(n) || n, r)
                }
            }
            function Vu(e, t, n, r, a, l) {
                switch (n) {
                case "style":
                    Nt(e, r, l);
                    break;
                case "dangerouslySetInnerHTML":
                    if (null != r) {
                        if ("object" !== typeof r || !("__html"in r))
                            throw Error(i(61));
                        if (null != (n = r.__html)) {
                            if (null != a.children)
                                throw Error(i(60));
                            e.innerHTML = n
                        }
                    }
                    break;
                case "children":
                    "string" === typeof r ? kt(e, r) : ("number" === typeof r || "bigint" === typeof r) && kt(e, "" + r);
                    break;
                case "onScroll":
                    null != r && Pu("scroll", e);
                    break;
                case "onScrollEnd":
                    null != r && Pu("scrollend", e);
                    break;
                case "onClick":
                    null != r && (e.onclick = Bu);
                    break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "innerHTML":
                case "ref":
                case "innerText":
                case "textContent":
                    break;
                default:
                    Ze.hasOwnProperty(n) || ("o" !== n[0] || "n" !== n[1] || (a = n.endsWith("Capture"),
                    t = n.slice(2, a ? n.length - 7 : void 0),
                    "function" === typeof (l = null != (l = e[Fe] || null) ? l[n] : null) && e.removeEventListener(t, l, a),
                    "function" !== typeof r) ? n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : it(e, n, r) : ("function" !== typeof l && null !== l && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)),
                    e.addEventListener(t, r, a)))
                }
            }
            function Gu(e, t, n) {
                switch (t) {
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                    break;
                case "img":
                    Pu("error", e),
                    Pu("load", e);
                    var r, a = !1, l = !1;
                    for (r in n)
                        if (n.hasOwnProperty(r)) {
                            var o = n[r];
                            if (null != o)
                                switch (r) {
                                case "src":
                                    a = !0;
                                    break;
                                case "srcSet":
                                    l = !0;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    throw Error(i(137, t));
                                default:
                                    $u(e, t, r, o, n, null)
                                }
                        }
                    return l && $u(e, t, "srcSet", n.srcSet, n, null),
                    void (a && $u(e, t, "src", n.src, n, null));
                case "input":
                    Pu("invalid", e);
                    var s = r = o = l = null
                      , c = null
                      , u = null;
                    for (a in n)
                        if (n.hasOwnProperty(a)) {
                            var d = n[a];
                            if (null != d)
                                switch (a) {
                                case "name":
                                    l = d;
                                    break;
                                case "type":
                                    o = d;
                                    break;
                                case "checked":
                                    c = d;
                                    break;
                                case "defaultChecked":
                                    u = d;
                                    break;
                                case "value":
                                    r = d;
                                    break;
                                case "defaultValue":
                                    s = d;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (null != d)
                                        throw Error(i(137, t));
                                    break;
                                default:
                                    $u(e, t, a, d, n, null)
                                }
                        }
                    return vt(e, r, s, c, u, o, l, !1),
                    void dt(e);
                case "select":
                    for (l in Pu("invalid", e),
                    a = o = r = null,
                    n)
                        if (n.hasOwnProperty(l) && null != (s = n[l]))
                            switch (l) {
                            case "value":
                                r = s;
                                break;
                            case "defaultValue":
                                o = s;
                                break;
                            case "multiple":
                                a = s;
                            default:
                                $u(e, t, l, s, n, null)
                            }
                    return t = r,
                    n = o,
                    e.multiple = !!a,
                    void (null != t ? bt(e, !!a, t, !1) : null != n && bt(e, !!a, n, !0));
                case "textarea":
                    for (o in Pu("invalid", e),
                    r = l = a = null,
                    n)
                        if (n.hasOwnProperty(o) && null != (s = n[o]))
                            switch (o) {
                            case "value":
                                a = s;
                                break;
                            case "defaultValue":
                                l = s;
                                break;
                            case "children":
                                r = s;
                                break;
                            case "dangerouslySetInnerHTML":
                                if (null != s)
                                    throw Error(i(91));
                                break;
                            default:
                                $u(e, t, o, s, n, null)
                            }
                    return wt(e, a, l, r),
                    void dt(e);
                case "option":
                    for (c in n)
                        if (n.hasOwnProperty(c) && null != (a = n[c]))
                            if ("selected" === c)
                                e.selected = a && "function" !== typeof a && "symbol" !== typeof a;
                            else
                                $u(e, t, c, a, n, null);
                    return;
                case "dialog":
                    Pu("cancel", e),
                    Pu("close", e);
                    break;
                case "iframe":
                case "object":
                    Pu("load", e);
                    break;
                case "video":
                case "audio":
                    for (a = 0; a < Eu.length; a++)
                        Pu(Eu[a], e);
                    break;
                case "image":
                    Pu("error", e),
                    Pu("load", e);
                    break;
                case "details":
                    Pu("toggle", e);
                    break;
                case "embed":
                case "source":
                case "link":
                    Pu("error", e),
                    Pu("load", e);
                case "area":
                case "base":
                case "br":
                case "col":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "track":
                case "wbr":
                case "menuitem":
                    for (u in n)
                        if (n.hasOwnProperty(u) && null != (a = n[u]))
                            switch (u) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(i(137, t));
                            default:
                                $u(e, t, u, a, n, null)
                            }
                    return;
                default:
                    if (Et(t)) {
                        for (d in n)
                            n.hasOwnProperty(d) && (void 0 !== (a = n[d]) && Vu(e, t, d, a, n, void 0));
                        return
                    }
                }
                for (s in n)
                    n.hasOwnProperty(s) && (null != (a = n[s]) && $u(e, t, s, a, n, null))
            }
            var qu = null
              , Qu = null;
            function Ku(e) {
                return 9 === e.nodeType ? e : e.ownerDocument
            }
            function Yu(e) {
                switch (e) {
                case "http://www.w3.org/2000/svg":
                    return 1;
                case "http://www.w3.org/1998/Math/MathML":
                    return 2;
                default:
                    return 0
                }
            }
            function Xu(e, t) {
                if (0 === e)
                    switch (t) {
                    case "svg":
                        return 1;
                    case "math":
                        return 2;
                    default:
                        return 0
                    }
                return 1 === e && "foreignObject" === t ? 0 : e
            }
            function Ju(e, t) {
                return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "bigint" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
            }
            var Zu = null;
            var ed = "function" === typeof setTimeout ? setTimeout : void 0
              , td = "function" === typeof clearTimeout ? clearTimeout : void 0
              , nd = "function" === typeof Promise ? Promise : void 0
              , rd = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof nd ? function(e) {
                return nd.resolve(null).then(e).catch(ad)
            }
            : ed;
            function ad(e) {
                setTimeout((function() {
                    throw e
                }
                ))
            }
            function ld(e, t) {
                var n = t
                  , r = 0;
                do {
                    var a = n.nextSibling;
                    if (e.removeChild(n),
                    a && 8 === a.nodeType)
                        if ("/$" === (n = a.data)) {
                            if (0 === r)
                                return e.removeChild(a),
                                void gf(t);
                            r--
                        } else
                            "$" !== n && "$?" !== n && "$!" !== n || r++;
                    n = a
                } while (n);
                gf(t)
            }
            function id(e) {
                var t = e.firstChild;
                for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
                    var n = t;
                    switch (t = t.nextSibling,
                    n.nodeName) {
                    case "HTML":
                    case "HEAD":
                    case "BODY":
                        id(n),
                        Ge(n);
                        continue;
                    case "SCRIPT":
                    case "STYLE":
                        continue;
                    case "LINK":
                        if ("stylesheet" === n.rel.toLowerCase())
                            continue
                    }
                    e.removeChild(n)
                }
            }
            function od(e) {
                for (; null != e; e = e.nextSibling) {
                    var t = e.nodeType;
                    if (1 === t || 3 === t)
                        break;
                    if (8 === t) {
                        if ("$" === (t = e.data) || "$!" === t || "$?" === t || "F!" === t || "F" === t)
                            break;
                        if ("/$" === t)
                            return null
                    }
                }
                return e
            }
            function sd(e) {
                e = e.previousSibling;
                for (var t = 0; e; ) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("$" === n || "$!" === n || "$?" === n) {
                            if (0 === t)
                                return e;
                            t--
                        } else
                            "/$" === n && t++
                    }
                    e = e.previousSibling
                }
                return null
            }
            function cd(e, t, n) {
                switch (t = Ku(n),
                e) {
                case "html":
                    if (!(e = t.documentElement))
                        throw Error(i(452));
                    return e;
                case "head":
                    if (!(e = t.head))
                        throw Error(i(453));
                    return e;
                case "body":
                    if (!(e = t.body))
                        throw Error(i(454));
                    return e;
                default:
                    throw Error(i(451))
                }
            }
            var ud = new Map
              , dd = new Set;
            function fd(e) {
                return "function" === typeof e.getRootNode ? e.getRootNode() : e.ownerDocument
            }
            var pd = H.d;
            H.d = {
                f: function() {
                    var e = pd.f()
                      , t = Dc();
                    return e || t
                },
                r: function(e) {
                    var t = Qe(e);
                    null !== t && 5 === t.tag && "form" === t.type ? fi(t) : pd.r(e)
                },
                D: function(e) {
                    pd.D(e),
                    hd("dns-prefetch", e, null)
                },
                C: function(e, t) {
                    pd.C(e, t),
                    hd("preconnect", e, t)
                },
                L: function(e, t, n) {
                    pd.L(e, t, n);
                    var r = md;
                    if (r && e && t) {
                        var a = 'link[rel="preload"][as="' + ht(t) + '"]';
                        "image" === t && n && n.imageSrcSet ? (a += '[imagesrcset="' + ht(n.imageSrcSet) + '"]',
                        "string" === typeof n.imageSizes && (a += '[imagesizes="' + ht(n.imageSizes) + '"]')) : a += '[href="' + ht(e) + '"]';
                        var l = a;
                        switch (t) {
                        case "style":
                            l = vd(e);
                            break;
                        case "script":
                            l = xd(e)
                        }
                        ud.has(l) || (e = z({
                            rel: "preload",
                            href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                            as: t
                        }, n),
                        ud.set(l, e),
                        null !== r.querySelector(a) || "style" === t && r.querySelector(yd(l)) || "script" === t && r.querySelector(wd(l)) || (Gu(t = r.createElement("link"), "link", e),
                        Xe(t),
                        r.head.appendChild(t)))
                    }
                },
                m: function(e, t) {
                    pd.m(e, t);
                    var n = md;
                    if (n && e) {
                        var r = t && "string" === typeof t.as ? t.as : "script"
                          , a = 'link[rel="modulepreload"][as="' + ht(r) + '"][href="' + ht(e) + '"]'
                          , l = a;
                        switch (r) {
                        case "audioworklet":
                        case "paintworklet":
                        case "serviceworker":
                        case "sharedworker":
                        case "worker":
                        case "script":
                            l = xd(e)
                        }
                        if (!ud.has(l) && (e = z({
                            rel: "modulepreload",
                            href: e
                        }, t),
                        ud.set(l, e),
                        null === n.querySelector(a))) {
                            switch (r) {
                            case "audioworklet":
                            case "paintworklet":
                            case "serviceworker":
                            case "sharedworker":
                            case "worker":
                            case "script":
                                if (n.querySelector(wd(l)))
                                    return
                            }
                            Gu(r = n.createElement("link"), "link", e),
                            Xe(r),
                            n.head.appendChild(r)
                        }
                    }
                },
                X: function(e, t) {
                    pd.X(e, t);
                    var n = md;
                    if (n && e) {
                        var r = Ye(n).hoistableScripts
                          , a = xd(e)
                          , l = r.get(a);
                        l || ((l = n.querySelector(wd(a))) || (e = z({
                            src: e,
                            async: !0
                        }, t),
                        (t = ud.get(a)) && Nd(e, t),
                        Xe(l = n.createElement("script")),
                        Gu(l, "link", e),
                        n.head.appendChild(l)),
                        l = {
                            type: "script",
                            instance: l,
                            count: 1,
                            state: null
                        },
                        r.set(a, l))
                    }
                },
                S: function(e, t, n) {
                    pd.S(e, t, n);
                    var r = md;
                    if (r && e) {
                        var a = Ye(r).hoistableStyles
                          , l = vd(e);
                        t = t || "default";
                        var i = a.get(l);
                        if (!i) {
                            var o = {
                                loading: 0,
                                preload: null
                            };
                            if (i = r.querySelector(yd(l)))
                                o.loading = 5;
                            else {
                                e = z({
                                    rel: "stylesheet",
                                    href: e,
                                    "data-precedence": t
                                }, n),
                                (n = ud.get(l)) && jd(e, n);
                                var s = i = r.createElement("link");
                                Xe(s),
                                Gu(s, "link", e),
                                s._p = new Promise((function(e, t) {
                                    s.onload = e,
                                    s.onerror = t
                                }
                                )),
                                s.addEventListener("load", (function() {
                                    o.loading |= 1
                                }
                                )),
                                s.addEventListener("error", (function() {
                                    o.loading |= 2
                                }
                                )),
                                o.loading |= 4,
                                Sd(i, t, r)
                            }
                            i = {
                                type: "stylesheet",
                                instance: i,
                                count: 1,
                                state: o
                            },
                            a.set(l, i)
                        }
                    }
                },
                M: function(e, t) {
                    pd.M(e, t);
                    var n = md;
                    if (n && e) {
                        var r = Ye(n).hoistableScripts
                          , a = xd(e)
                          , l = r.get(a);
                        l || ((l = n.querySelector(wd(a))) || (e = z({
                            src: e,
                            async: !0,
                            type: "module"
                        }, t),
                        (t = ud.get(a)) && Nd(e, t),
                        Xe(l = n.createElement("script")),
                        Gu(l, "link", e),
                        n.head.appendChild(l)),
                        l = {
                            type: "script",
                            instance: l,
                            count: 1,
                            state: null
                        },
                        r.set(a, l))
                    }
                }
            };
            var md = "undefined" === typeof document ? null : document;
            function hd(e, t, n) {
                var r = md;
                if (r && "string" === typeof t && t) {
                    var a = ht(t);
                    a = 'link[rel="' + e + '"][href="' + a + '"]',
                    "string" === typeof n && (a += '[crossorigin="' + n + '"]'),
                    dd.has(a) || (dd.add(a),
                    e = {
                        rel: e,
                        crossOrigin: n,
                        href: t
                    },
                    null === r.querySelector(a) && (Gu(t = r.createElement("link"), "link", e),
                    Xe(t),
                    r.head.appendChild(t)))
                }
            }
            function gd(e, t, n, r) {
                var a, l, o, s, c = (c = X.current) ? fd(c) : null;
                if (!c)
                    throw Error(i(446));
                switch (e) {
                case "meta":
                case "title":
                    return null;
                case "style":
                    return "string" === typeof n.precedence && "string" === typeof n.href ? (t = vd(n.href),
                    (r = (n = Ye(c).hoistableStyles).get(t)) || (r = {
                        type: "style",
                        instance: null,
                        count: 0,
                        state: null
                    },
                    n.set(t, r)),
                    r) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
                case "link":
                    if ("stylesheet" === n.rel && "string" === typeof n.href && "string" === typeof n.precedence) {
                        e = vd(n.href);
                        var u = Ye(c).hoistableStyles
                          , d = u.get(e);
                        if (d || (c = c.ownerDocument || c,
                        d = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        },
                        u.set(e, d),
                        (u = c.querySelector(yd(e))) && !u._p && (d.instance = u,
                        d.state.loading = 5),
                        ud.has(e) || (n = {
                            rel: "preload",
                            as: "style",
                            href: n.href,
                            crossOrigin: n.crossOrigin,
                            integrity: n.integrity,
                            media: n.media,
                            hrefLang: n.hrefLang,
                            referrerPolicy: n.referrerPolicy
                        },
                        ud.set(e, n),
                        u || (a = c,
                        l = e,
                        o = n,
                        s = d.state,
                        a.querySelector('link[rel="preload"][as="style"][' + l + "]") ? s.loading = 1 : (l = a.createElement("link"),
                        s.preload = l,
                        l.addEventListener("load", (function() {
                            return s.loading |= 1
                        }
                        )),
                        l.addEventListener("error", (function() {
                            return s.loading |= 2
                        }
                        )),
                        Gu(l, "link", o),
                        Xe(l),
                        a.head.appendChild(l))))),
                        t && null === r)
                            throw Error(i(528, ""));
                        return d
                    }
                    if (t && null !== r)
                        throw Error(i(529, ""));
                    return null;
                case "script":
                    return t = n.async,
                    "string" === typeof (n = n.src) && t && "function" !== typeof t && "symbol" !== typeof t ? (t = xd(n),
                    (r = (n = Ye(c).hoistableScripts).get(t)) || (r = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null
                    },
                    n.set(t, r)),
                    r) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
                default:
                    throw Error(i(444, e))
                }
            }
            function vd(e) {
                return 'href="' + ht(e) + '"'
            }
            function yd(e) {
                return 'link[rel="stylesheet"][' + e + "]"
            }
            function bd(e) {
                return z({}, e, {
                    "data-precedence": e.precedence,
                    precedence: null
                })
            }
            function xd(e) {
                return '[src="' + ht(e) + '"]'
            }
            function wd(e) {
                return "script[async]" + e
            }
            function kd(e, t, n) {
                if (t.count++,
                null === t.instance)
                    switch (t.type) {
                    case "style":
                        var r = e.querySelector('style[data-href~="' + ht(n.href) + '"]');
                        if (r)
                            return t.instance = r,
                            Xe(r),
                            r;
                        var a = z({}, n, {
                            "data-href": n.href,
                            "data-precedence": n.precedence,
                            href: null,
                            precedence: null
                        });
                        return Xe(r = (e.ownerDocument || e).createElement("style")),
                        Gu(r, "style", a),
                        Sd(r, n.precedence, e),
                        t.instance = r;
                    case "stylesheet":
                        a = vd(n.href);
                        var l = e.querySelector(yd(a));
                        if (l)
                            return t.state.loading |= 4,
                            t.instance = l,
                            Xe(l),
                            l;
                        r = bd(n),
                        (a = ud.get(a)) && jd(r, a),
                        Xe(l = (e.ownerDocument || e).createElement("link"));
                        var o = l;
                        return o._p = new Promise((function(e, t) {
                            o.onload = e,
                            o.onerror = t
                        }
                        )),
                        Gu(l, "link", r),
                        t.state.loading |= 4,
                        Sd(l, n.precedence, e),
                        t.instance = l;
                    case "script":
                        return l = xd(n.src),
                        (a = e.querySelector(wd(l))) ? (t.instance = a,
                        Xe(a),
                        a) : (r = n,
                        (a = ud.get(l)) && Nd(r = z({}, n), a),
                        Xe(a = (e = e.ownerDocument || e).createElement("script")),
                        Gu(a, "link", r),
                        e.head.appendChild(a),
                        t.instance = a);
                    case "void":
                        return null;
                    default:
                        throw Error(i(443, t.type))
                    }
                else
                    "stylesheet" === t.type && 0 === (4 & t.state.loading) && (r = t.instance,
                    t.state.loading |= 4,
                    Sd(r, n.precedence, e));
                return t.instance
            }
            function Sd(e, t, n) {
                for (var r = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = r.length ? r[r.length - 1] : null, l = a, i = 0; i < r.length; i++) {
                    var o = r[i];
                    if (o.dataset.precedence === t)
                        l = o;
                    else if (l !== a)
                        break
                }
                l ? l.parentNode.insertBefore(e, l.nextSibling) : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild)
            }
            function jd(e, t) {
                null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
                null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
                null == e.title && (e.title = t.title)
            }
            function Nd(e, t) {
                null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
                null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
                null == e.integrity && (e.integrity = t.integrity)
            }
            var Ed = null;
            function Cd(e, t, n) {
                if (null === Ed) {
                    var r = new Map
                      , a = Ed = new Map;
                    a.set(n, r)
                } else
                    (r = (a = Ed).get(n)) || (r = new Map,
                    a.set(n, r));
                if (r.has(e))
                    return r;
                for (r.set(e, null),
                n = n.getElementsByTagName(e),
                a = 0; a < n.length; a++) {
                    var l = n[a];
                    if (!(l[Ve] || l[De] || "link" === e && "stylesheet" === l.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== l.namespaceURI) {
                        var i = l.getAttribute(t) || "";
                        i = e + i;
                        var o = r.get(i);
                        o ? o.push(l) : r.set(i, [l])
                    }
                }
                return r
            }
            function Td(e, t, n) {
                (e = e.ownerDocument || e).head.insertBefore(n, "title" === t ? e.querySelector("head > title") : null)
            }
            function Pd(e) {
                return "stylesheet" !== e.type || 0 !== (3 & e.state.loading)
            }
            var Ld = null;
            function zd() {}
            function _d() {
                if (this.count--,
                0 === this.count)
                    if (this.stylesheets)
                        Rd(this, this.stylesheets);
                    else if (this.unsuspend) {
                        var e = this.unsuspend;
                        this.unsuspend = null,
                        e()
                    }
            }
            var Ad = null;
            function Rd(e, t) {
                e.stylesheets = null,
                null !== e.unsuspend && (e.count++,
                Ad = new Map,
                t.forEach(Od, e),
                Ad = null,
                _d.call(e))
            }
            function Od(e, t) {
                if (!(4 & t.state.loading)) {
                    var n = Ad.get(e);
                    if (n)
                        var r = n.get(null);
                    else {
                        n = new Map,
                        Ad.set(e, n);
                        for (var a = e.querySelectorAll("link[data-precedence],style[data-precedence]"), l = 0; l < a.length; l++) {
                            var i = a[l];
                            "LINK" !== i.nodeName && "not all" === i.getAttribute("media") || (n.set(i.dataset.precedence, i),
                            r = i)
                        }
                        r && n.set(null, r)
                    }
                    i = (a = t.instance).getAttribute("data-precedence"),
                    (l = n.get(i) || r) === r && n.set(null, a),
                    n.set(i, a),
                    this.count++,
                    r = _d.bind(this),
                    a.addEventListener("load", r),
                    a.addEventListener("error", r),
                    l ? l.parentNode.insertBefore(a, l.nextSibling) : (e = 9 === e.nodeType ? e.head : e).insertBefore(a, e.firstChild),
                    t.state.loading |= 4
                }
            }
            var Md = {
                $$typeof: g,
                Provider: null,
                Consumer: null,
                _currentValue: B,
                _currentValue2: B,
                _threadCount: 0
            };
            function Id(e, t, n, r, a, l, i, o) {
                this.tag = 1,
                this.containerInfo = e,
                this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
                this.timeoutHandle = -1,
                this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
                this.callbackPriority = 0,
                this.expirationTimes = ze(-1),
                this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
                this.entanglements = ze(0),
                this.hiddenUpdates = ze(null),
                this.identifierPrefix = r,
                this.onUncaughtError = a,
                this.onCaughtError = l,
                this.onRecoverableError = i,
                this.pooledCache = null,
                this.pooledCacheLanes = 0,
                this.formState = o,
                this.incompleteTransitions = new Map
            }
            function Dd(e, t, n, r, a, l, i, o, s, c, u, d) {
                return e = new Id(e,t,n,i,o,s,c,d),
                t = 1,
                !0 === l && (t |= 24),
                l = Os(3, null, null, t),
                e.current = l,
                l.stateNode = e,
                (t = Wa()).refCount++,
                e.pooledCache = t,
                t.refCount++,
                l.memoizedState = {
                    element: r,
                    isDehydrated: n,
                    cache: t
                },
                Po(l),
                e
            }
            function Fd(e) {
                return e ? e = _r : _r
            }
            function Wd(e, t, n, r, a, l) {
                a = Fd(a),
                null === r.context ? r.context = a : r.pendingContext = a,
                (r = zo(t)).payload = {
                    element: n
                },
                null !== (l = void 0 === l ? null : l) && (r.callback = l),
                null !== (n = _o(e, r, t)) && (_c(n, 0, t),
                Ao(n, e, t))
            }
            function Ud(e, t) {
                if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                    var n = e.retryLane;
                    e.retryLane = 0 !== n && n < t ? n : t
                }
            }
            function Hd(e, t) {
                Ud(e, t),
                (e = e.alternate) && Ud(e, t)
            }
            function Bd(e) {
                if (13 === e.tag) {
                    var t = Pr(e, 67108864);
                    null !== t && _c(t, 0, 67108864),
                    Hd(e, 67108864)
                }
            }
            var $d = !0;
            function Vd(e, t, n, r) {
                var a = L.T;
                L.T = null;
                var l = H.p;
                try {
                    H.p = 2,
                    qd(e, t, n, r)
                } finally {
                    H.p = l,
                    L.T = a
                }
            }
            function Gd(e, t, n, r) {
                var a = L.T;
                L.T = null;
                var l = H.p;
                try {
                    H.p = 8,
                    qd(e, t, n, r)
                } finally {
                    H.p = l,
                    L.T = a
                }
            }
            function qd(e, t, n, r) {
                if ($d) {
                    var a = Qd(r);
                    if (null === a)
                        Ru(e, t, r, Kd, n),
                        of(e, r);
                    else if (function(e, t, n, r, a) {
                        switch (t) {
                        case "focusin":
                            return Zd = sf(Zd, e, t, n, r, a),
                            !0;
                        case "dragenter":
                            return ef = sf(ef, e, t, n, r, a),
                            !0;
                        case "mouseover":
                            return tf = sf(tf, e, t, n, r, a),
                            !0;
                        case "pointerover":
                            var l = a.pointerId;
                            return nf.set(l, sf(nf.get(l) || null, e, t, n, r, a)),
                            !0;
                        case "gotpointercapture":
                            return l = a.pointerId,
                            rf.set(l, sf(rf.get(l) || null, e, t, n, r, a)),
                            !0
                        }
                        return !1
                    }(a, e, t, n, r))
                        r.stopPropagation();
                    else if (of(e, r),
                    4 & t && -1 < lf.indexOf(e)) {
                        for (; null !== a; ) {
                            var l = Qe(a);
                            if (null !== l)
                                switch (l.tag) {
                                case 3:
                                    if ((l = l.stateNode).current.memoizedState.isDehydrated) {
                                        var i = Ne(l.pendingLanes);
                                        if (0 !== i) {
                                            var o = l;
                                            for (o.pendingLanes |= 2,
                                            o.entangledLanes |= 2; i; ) {
                                                var s = 1 << 31 - xe(i);
                                                o.entanglements[1] |= s,
                                                i &= ~s
                                            }
                                            hu(l),
                                            0 === (6 & ec) && (xc = se() + 500,
                                            gu(0, !1))
                                        }
                                    }
                                    break;
                                case 13:
                                    null !== (o = Pr(l, 2)) && _c(o, 0, 2),
                                    Dc(),
                                    Hd(l, 2)
                                }
                            if (null === (l = Qd(r)) && Ru(e, t, r, Kd, n),
                            l === a)
                                break;
                            a = l
                        }
                        null !== a && r.stopPropagation()
                    } else
                        Ru(e, t, r, null, n)
                }
            }
            function Qd(e) {
                return Yd(e = zt(e))
            }
            var Kd = null;
            function Yd(e) {
                if (Kd = null,
                null !== (e = qe(e))) {
                    var t = I(e);
                    if (null === t)
                        e = null;
                    else {
                        var n = t.tag;
                        if (13 === n) {
                            if (null !== (e = D(t)))
                                return e;
                            e = null
                        } else if (3 === n) {
                            if (t.stateNode.current.memoizedState.isDehydrated)
                                return 3 === t.tag ? t.stateNode.containerInfo : null;
                            e = null
                        } else
                            t !== e && (e = null)
                    }
                }
                return Kd = e,
                null
            }
            function Xd(e) {
                switch (e) {
                case "beforetoggle":
                case "cancel":
                case "click":
                case "close":
                case "contextmenu":
                case "copy":
                case "cut":
                case "auxclick":
                case "dblclick":
                case "dragend":
                case "dragstart":
                case "drop":
                case "focusin":
                case "focusout":
                case "input":
                case "invalid":
                case "keydown":
                case "keypress":
                case "keyup":
                case "mousedown":
                case "mouseup":
                case "paste":
                case "pause":
                case "play":
                case "pointercancel":
                case "pointerdown":
                case "pointerup":
                case "ratechange":
                case "reset":
                case "resize":
                case "seeked":
                case "submit":
                case "toggle":
                case "touchcancel":
                case "touchend":
                case "touchstart":
                case "volumechange":
                case "change":
                case "selectionchange":
                case "textInput":
                case "compositionstart":
                case "compositionend":
                case "compositionupdate":
                case "beforeblur":
                case "afterblur":
                case "beforeinput":
                case "blur":
                case "fullscreenchange":
                case "focus":
                case "hashchange":
                case "popstate":
                case "select":
                case "selectstart":
                    return 2;
                case "drag":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "mousemove":
                case "mouseout":
                case "mouseover":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "scroll":
                case "touchmove":
                case "wheel":
                case "mouseenter":
                case "mouseleave":
                case "pointerenter":
                case "pointerleave":
                    return 8;
                case "message":
                    switch (ce()) {
                    case ue:
                        return 2;
                    case de:
                        return 8;
                    case fe:
                    case pe:
                        return 32;
                    case me:
                        return 268435456;
                    default:
                        return 32
                    }
                default:
                    return 32
                }
            }
            var Jd = !1
              , Zd = null
              , ef = null
              , tf = null
              , nf = new Map
              , rf = new Map
              , af = []
              , lf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
            function of(e, t) {
                switch (e) {
                case "focusin":
                case "focusout":
                    Zd = null;
                    break;
                case "dragenter":
                case "dragleave":
                    ef = null;
                    break;
                case "mouseover":
                case "mouseout":
                    tf = null;
                    break;
                case "pointerover":
                case "pointerout":
                    nf.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    rf.delete(t.pointerId)
                }
            }
            function sf(e, t, n, r, a, l) {
                return null === e || e.nativeEvent !== l ? (e = {
                    blockedOn: t,
                    domEventName: n,
                    eventSystemFlags: r,
                    nativeEvent: l,
                    targetContainers: [a]
                },
                null !== t && (null !== (t = Qe(t)) && Bd(t)),
                e) : (e.eventSystemFlags |= r,
                t = e.targetContainers,
                null !== a && -1 === t.indexOf(a) && t.push(a),
                e)
            }
            function cf(e) {
                var t = qe(e.target);
                if (null !== t) {
                    var n = I(t);
                    if (null !== n)
                        if (13 === (t = n.tag)) {
                            if (null !== (t = D(n)))
                                return e.blockedOn = t,
                                void function(e, t) {
                                    var n = H.p;
                                    try {
                                        return H.p = e,
                                        t()
                                    } finally {
                                        H.p = n
                                    }
                                }(e.priority, (function() {
                                    if (13 === n.tag) {
                                        var e = Lc()
                                          , t = Pr(n, e);
                                        null !== t && _c(t, 0, e),
                                        Hd(n, e)
                                    }
                                }
                                ))
                        } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                            return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                }
                e.blockedOn = null
            }
            function uf(e) {
                if (null !== e.blockedOn)
                    return !1;
                for (var t = e.targetContainers; 0 < t.length; ) {
                    var n = Qd(e.nativeEvent);
                    if (null !== n)
                        return null !== (t = Qe(n)) && Bd(t),
                        e.blockedOn = n,
                        !1;
                    var r = new (n = e.nativeEvent).constructor(n.type,n);
                    Lt = r,
                    n.target.dispatchEvent(r),
                    Lt = null,
                    t.shift()
                }
                return !0
            }
            function df(e, t, n) {
                uf(e) && n.delete(t)
            }
            function ff() {
                Jd = !1,
                null !== Zd && uf(Zd) && (Zd = null),
                null !== ef && uf(ef) && (ef = null),
                null !== tf && uf(tf) && (tf = null),
                nf.forEach(df),
                rf.forEach(df)
            }
            function pf(e, t) {
                e.blockedOn === t && (e.blockedOn = null,
                Jd || (Jd = !0,
                r.unstable_scheduleCallback(r.unstable_NormalPriority, ff)))
            }
            var mf = null;
            function hf(e) {
                mf !== e && (mf = e,
                r.unstable_scheduleCallback(r.unstable_NormalPriority, (function() {
                    mf === e && (mf = null);
                    for (var t = 0; t < e.length; t += 3) {
                        var n = e[t]
                          , r = e[t + 1]
                          , a = e[t + 2];
                        if ("function" !== typeof r) {
                            if (null === Yd(r || n))
                                continue;
                            break
                        }
                        var l = Qe(n);
                        null !== l && (e.splice(t, 3),
                        t -= 3,
                        ui(l, {
                            pending: !0,
                            data: a,
                            method: n.method,
                            action: r
                        }, r, a))
                    }
                }
                )))
            }
            function gf(e) {
                function t(t) {
                    return pf(t, e)
                }
                null !== Zd && pf(Zd, e),
                null !== ef && pf(ef, e),
                null !== tf && pf(tf, e),
                nf.forEach(t),
                rf.forEach(t);
                for (var n = 0; n < af.length; n++) {
                    var r = af[n];
                    r.blockedOn === e && (r.blockedOn = null)
                }
                for (; 0 < af.length && null === (n = af[0]).blockedOn; )
                    cf(n),
                    null === n.blockedOn && af.shift();
                if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
                    for (r = 0; r < n.length; r += 3) {
                        var a = n[r]
                          , l = n[r + 1]
                          , i = a[Fe] || null;
                        if ("function" === typeof l)
                            i || hf(n);
                        else if (i) {
                            var o = null;
                            if (l && l.hasAttribute("formAction")) {
                                if (a = l,
                                i = l[Fe] || null)
                                    o = i.formAction;
                                else if (null !== Yd(a))
                                    continue
                            } else
                                o = i.action;
                            "function" === typeof o ? n[r + 1] = o : (n.splice(r, 3),
                            r -= 3),
                            hf(n)
                        }
                    }
            }
            function vf(e) {
                this._internalRoot = e
            }
            function yf(e) {
                this._internalRoot = e
            }
            yf.prototype.render = vf.prototype.render = function(e) {
                var t = this._internalRoot;
                if (null === t)
                    throw Error(i(409));
                Wd(t.current, Lc(), e, t, null, null)
            }
            ,
            yf.prototype.unmount = vf.prototype.unmount = function() {
                var e = this._internalRoot;
                if (null !== e) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    0 === e.tag && tu(),
                    Wd(e.current, 2, null, e, null, null),
                    Dc(),
                    t[We] = null
                }
            }
            ,
            yf.prototype.unstable_scheduleHydration = function(e) {
                if (e) {
                    var t = Me();
                    e = {
                        blockedOn: null,
                        target: e,
                        priority: t
                    };
                    for (var n = 0; n < af.length && 0 !== t && t < af[n].priority; n++)
                        ;
                    af.splice(n, 0, e),
                    0 === n && cf(e)
                }
            }
            ;
            var bf = a.version;
            if ("19.0.0" !== bf)
                throw Error(i(527, bf, "19.0.0"));
            H.findDOMNode = function(e) {
                var t = e._reactInternals;
                if (void 0 === t) {
                    if ("function" === typeof e.render)
                        throw Error(i(188));
                    throw e = Object.keys(e).join(","),
                    Error(i(268, e))
                }
                return e = function(e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = I(e)))
                            throw Error(i(188));
                        return t !== e ? null : e
                    }
                    for (var n = e, r = t; ; ) {
                        var a = n.return;
                        if (null === a)
                            break;
                        var l = a.alternate;
                        if (null === l) {
                            if (null !== (r = a.return)) {
                                n = r;
                                continue
                            }
                            break
                        }
                        if (a.child === l.child) {
                            for (l = a.child; l; ) {
                                if (l === n)
                                    return F(a),
                                    e;
                                if (l === r)
                                    return F(a),
                                    t;
                                l = l.sibling
                            }
                            throw Error(i(188))
                        }
                        if (n.return !== r.return)
                            n = a,
                            r = l;
                        else {
                            for (var o = !1, s = a.child; s; ) {
                                if (s === n) {
                                    o = !0,
                                    n = a,
                                    r = l;
                                    break
                                }
                                if (s === r) {
                                    o = !0,
                                    r = a,
                                    n = l;
                                    break
                                }
                                s = s.sibling
                            }
                            if (!o) {
                                for (s = l.child; s; ) {
                                    if (s === n) {
                                        o = !0,
                                        n = l,
                                        r = a;
                                        break
                                    }
                                    if (s === r) {
                                        o = !0,
                                        r = l,
                                        n = a;
                                        break
                                    }
                                    s = s.sibling
                                }
                                if (!o)
                                    throw Error(i(189))
                            }
                        }
                        if (n.alternate !== r)
                            throw Error(i(190))
                    }
                    if (3 !== n.tag)
                        throw Error(i(188));
                    return n.stateNode.current === n ? e : t
                }(t),
                e = null === (e = null !== e ? W(e) : null) ? null : e.stateNode
            }
            ;
            var xf = {
                bundleType: 0,
                version: "19.0.0",
                rendererPackageName: "react-dom",
                currentDispatcherRef: L,
                findFiberByHostInstance: qe,
                reconcilerVersion: "19.0.0"
            };
            if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var wf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!wf.isDisabled && wf.supportsFiber)
                    try {
                        ve = wf.inject(xf),
                        ye = wf
                    } catch (Sf) {}
            }
            t.createRoot = function(e, t) {
                if (!o(e))
                    throw Error(i(299));
                var n = !1
                  , r = ""
                  , a = Ri
                  , l = Oi
                  , s = Mi;
                return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onUncaughtError && (a = t.onUncaughtError),
                void 0 !== t.onCaughtError && (l = t.onCaughtError),
                void 0 !== t.onRecoverableError && (s = t.onRecoverableError),
                void 0 !== t.unstable_transitionCallbacks && t.unstable_transitionCallbacks),
                t = Dd(e, 1, !1, null, 0, n, r, a, l, s, 0, null),
                e[We] = t.current,
                _u(8 === e.nodeType ? e.parentNode : e),
                new vf(t)
            }
            ,
            t.hydrateRoot = function(e, t, n) {
                if (!o(e))
                    throw Error(i(299));
                var r = !1
                  , a = ""
                  , l = Ri
                  , s = Oi
                  , c = Mi
                  , u = null;
                return null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (r = !0),
                void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
                void 0 !== n.onUncaughtError && (l = n.onUncaughtError),
                void 0 !== n.onCaughtError && (s = n.onCaughtError),
                void 0 !== n.onRecoverableError && (c = n.onRecoverableError),
                void 0 !== n.unstable_transitionCallbacks && n.unstable_transitionCallbacks,
                void 0 !== n.formState && (u = n.formState)),
                (t = Dd(e, 1, !0, t, 0, r, a, l, s, c, 0, u)).context = Fd(null),
                n = t.current,
                (a = zo(r = Lc())).callback = null,
                _o(n, a, r),
                t.current.lanes = r,
                _e(t, r),
                hu(t),
                e[We] = t.current,
                _u(e),
                new yf(t)
            }
            ,
            t.version = "19.0.0"
        }
        ,
        672: (e, t, n) => {
            var r = n(43);
            function a(e) {
                var t = "https://react.dev/errors/" + e;
                if (1 < arguments.length) {
                    t += "?args[]=" + encodeURIComponent(arguments[1]);
                    for (var n = 2; n < arguments.length; n++)
                        t += "&args[]=" + encodeURIComponent(arguments[n])
                }
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            function l() {}
            var i = {
                d: {
                    f: l,
                    r: function() {
                        throw Error(a(522))
                    },
                    D: l,
                    C: l,
                    L: l,
                    m: l,
                    X: l,
                    S: l,
                    M: l
                },
                p: 0,
                findDOMNode: null
            }
              , o = Symbol.for("react.portal");
            var s = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
            function c(e, t) {
                return "font" === e ? "" : "string" === typeof t ? "use-credentials" === t ? t : "" : void 0
            }
            t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i,
            t.createPortal = function(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)
                    throw Error(a(299));
                return function(e, t, n) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: o,
                        key: null == r ? null : "" + r,
                        children: e,
                        containerInfo: t,
                        implementation: n
                    }
                }(e, t, null, n)
            }
            ,
            t.flushSync = function(e) {
                var t = s.T
                  , n = i.p;
                try {
                    if (s.T = null,
                    i.p = 2,
                    e)
                        return e()
                } finally {
                    s.T = t,
                    i.p = n,
                    i.d.f()
                }
            }
            ,
            t.preconnect = function(e, t) {
                "string" === typeof e && (t ? t = "string" === typeof (t = t.crossOrigin) ? "use-credentials" === t ? t : "" : void 0 : t = null,
                i.d.C(e, t))
            }
            ,
            t.prefetchDNS = function(e) {
                "string" === typeof e && i.d.D(e)
            }
            ,
            t.preinit = function(e, t) {
                if ("string" === typeof e && t && "string" === typeof t.as) {
                    var n = t.as
                      , r = c(n, t.crossOrigin)
                      , a = "string" === typeof t.integrity ? t.integrity : void 0
                      , l = "string" === typeof t.fetchPriority ? t.fetchPriority : void 0;
                    "style" === n ? i.d.S(e, "string" === typeof t.precedence ? t.precedence : void 0, {
                        crossOrigin: r,
                        integrity: a,
                        fetchPriority: l
                    }) : "script" === n && i.d.X(e, {
                        crossOrigin: r,
                        integrity: a,
                        fetchPriority: l,
                        nonce: "string" === typeof t.nonce ? t.nonce : void 0
                    })
                }
            }
            ,
            t.preinitModule = function(e, t) {
                if ("string" === typeof e)
                    if ("object" === typeof t && null !== t) {
                        if (null == t.as || "script" === t.as) {
                            var n = c(t.as, t.crossOrigin);
                            i.d.M(e, {
                                crossOrigin: n,
                                integrity: "string" === typeof t.integrity ? t.integrity : void 0,
                                nonce: "string" === typeof t.nonce ? t.nonce : void 0
                            })
                        }
                    } else
                        null == t && i.d.M(e)
            }
            ,
            t.preload = function(e, t) {
                if ("string" === typeof e && "object" === typeof t && null !== t && "string" === typeof t.as) {
                    var n = t.as
                      , r = c(n, t.crossOrigin);
                    i.d.L(e, n, {
                        crossOrigin: r,
                        integrity: "string" === typeof t.integrity ? t.integrity : void 0,
                        nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                        type: "string" === typeof t.type ? t.type : void 0,
                        fetchPriority: "string" === typeof t.fetchPriority ? t.fetchPriority : void 0,
                        referrerPolicy: "string" === typeof t.referrerPolicy ? t.referrerPolicy : void 0,
                        imageSrcSet: "string" === typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                        imageSizes: "string" === typeof t.imageSizes ? t.imageSizes : void 0,
                        media: "string" === typeof t.media ? t.media : void 0
                    })
                }
            }
            ,
            t.preloadModule = function(e, t) {
                if ("string" === typeof e)
                    if (t) {
                        var n = c(t.as, t.crossOrigin);
                        i.d.m(e, {
                            as: "string" === typeof t.as && "script" !== t.as ? t.as : void 0,
                            crossOrigin: n,
                            integrity: "string" === typeof t.integrity ? t.integrity : void 0
                        })
                    } else
                        i.d.m(e)
            }
            ,
            t.requestFormReset = function(e) {
                i.d.r(e)
            }
            ,
            t.unstable_batchedUpdates = function(e, t) {
                return e(t)
            }
            ,
            t.useFormState = function(e, t, n) {
                return s.H.useFormState(e, t, n)
            }
            ,
            t.useFormStatus = function() {
                return s.H.useHostTransitionStatus()
            }
            ,
            t.version = "19.0.0"
        }
        ,
        391: (e, t, n) => {
            !function e() {
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
                    try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (t) {
                        console.error(t)
                    }
            }(),
            e.exports = n(4)
        }
        ,
        950: (e, t, n) => {
            !function e() {
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
                    try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (t) {
                        console.error(t)
                    }
            }(),
            e.exports = n(672)
        }
        ,
        358: (e, t) => {
            const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/
              , r = /^[\u0021-\u003A\u003C-\u007E]*$/
              , a = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i
              , l = /^[\u0020-\u003A\u003D-\u007E]*$/
              , i = Object.prototype.toString
              , o = ( () => {
                const e = function() {};
                return e.prototype = Object.create(null),
                e
            }
            )();
            function s(e, t, n) {
                do {
                    const n = e.charCodeAt(t);
                    if (32 !== n && 9 !== n)
                        return t
                } while (++t < n);
                return n
            }
            function c(e, t, n) {
                for (; t > n; ) {
                    const n = e.charCodeAt(--t);
                    if (32 !== n && 9 !== n)
                        return t + 1
                }
                return n
            }
            function u(e) {
                if (-1 === e.indexOf("%"))
                    return e;
                try {
                    return decodeURIComponent(e)
                } catch (t) {
                    return e
                }
            }
        }
        ,
        799: (e, t) => {
            var n = Symbol.for("react.transitional.element")
              , r = Symbol.for("react.fragment");
            function a(e, t, r) {
                var a = null;
                if (void 0 !== r && (a = "" + r),
                void 0 !== t.key && (a = "" + t.key),
                "key"in t)
                    for (var l in r = {},
                    t)
                        "key" !== l && (r[l] = t[l]);
                else
                    r = t;
                return t = r.ref,
                {
                    $$typeof: n,
                    type: e,
                    key: a,
                    ref: void 0 !== t ? t : null,
                    props: r
                }
            }
            t.Fragment = r,
            t.jsx = a,
            t.jsxs = a
        }
        ,
        288: (e, t) => {
            var n = Symbol.for("react.transitional.element")
              , r = Symbol.for("react.portal")
              , a = Symbol.for("react.fragment")
              , l = Symbol.for("react.strict_mode")
              , i = Symbol.for("react.profiler")
              , o = Symbol.for("react.consumer")
              , s = Symbol.for("react.context")
              , c = Symbol.for("react.forward_ref")
              , u = Symbol.for("react.suspense")
              , d = Symbol.for("react.memo")
              , f = Symbol.for("react.lazy")
              , p = Symbol.iterator;
            var m = {
                isMounted: function() {
                    return !1
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            }
              , h = Object.assign
              , g = {};
            function v(e, t, n) {
                this.props = e,
                this.context = t,
                this.refs = g,
                this.updater = n || m
            }
            function y() {}
            function b(e, t, n) {
                this.props = e,
                this.context = t,
                this.refs = g,
                this.updater = n || m
            }
            v.prototype.isReactComponent = {},
            v.prototype.setState = function(e, t) {
                if ("object" !== typeof e && "function" !== typeof e && null != e)
                    throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
            }
            ,
            v.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }
            ,
            y.prototype = v.prototype;
            var x = b.prototype = new y;
            x.constructor = b,
            h(x, v.prototype),
            x.isPureReactComponent = !0;
            var w = Array.isArray
              , k = {
                H: null,
                A: null,
                T: null,
                S: null
            }
              , S = Object.prototype.hasOwnProperty;
            function j(e, t, r, a, l, i) {
                return r = i.ref,
                {
                    $$typeof: n,
                    type: e,
                    key: t,
                    ref: void 0 !== r ? r : null,
                    props: i
                }
            }
            function N(e) {
                return "object" === typeof e && null !== e && e.$$typeof === n
            }
            var E = /\/+/g;
            function C(e, t) {
                return "object" === typeof e && null !== e && null != e.key ? function(e) {
                    var t = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return "$" + e.replace(/[=:]/g, (function(e) {
                        return t[e]
                    }
                    ))
                }("" + e.key) : t.toString(36)
            }
            function T() {}
            function P(e, t, a, l, i) {
                var o = typeof e;
                "undefined" !== o && "boolean" !== o || (e = null);
                var s, c, u = !1;
                if (null === e)
                    u = !0;
                else
                    switch (o) {
                    case "bigint":
                    case "string":
                    case "number":
                        u = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                        case n:
                        case r:
                            u = !0;
                            break;
                        case f:
                            return P((u = e._init)(e._payload), t, a, l, i)
                        }
                    }
                if (u)
                    return i = i(e),
                    u = "" === l ? "." + C(e, 0) : l,
                    w(i) ? (a = "",
                    null != u && (a = u.replace(E, "$&/") + "/"),
                    P(i, t, a, "", (function(e) {
                        return e
                    }
                    ))) : null != i && (N(i) && (s = i,
                    c = a + (null == i.key || e && e.key === i.key ? "" : ("" + i.key).replace(E, "$&/") + "/") + u,
                    i = j(s.type, c, void 0, 0, 0, s.props)),
                    t.push(i)),
                    1;
                u = 0;
                var d, m = "" === l ? "." : l + ":";
                if (w(e))
                    for (var h = 0; h < e.length; h++)
                        u += P(l = e[h], t, a, o = m + C(l, h), i);
                else if ("function" === typeof (h = null === (d = e) || "object" !== typeof d ? null : "function" === typeof (d = p && d[p] || d["@@iterator"]) ? d : null))
                    for (e = h.call(e),
                    h = 0; !(l = e.next()).done; )
                        u += P(l = l.value, t, a, o = m + C(l, h++), i);
                else if ("object" === o) {
                    if ("function" === typeof e.then)
                        return P(function(e) {
                            switch (e.status) {
                            case "fulfilled":
                                return e.value;
                            case "rejected":
                                throw e.reason;
                            default:
                                switch ("string" === typeof e.status ? e.then(T, T) : (e.status = "pending",
                                e.then((function(t) {
                                    "pending" === e.status && (e.status = "fulfilled",
                                    e.value = t)
                                }
                                ), (function(t) {
                                    "pending" === e.status && (e.status = "rejected",
                                    e.reason = t)
                                }
                                ))),
                                e.status) {
                                case "fulfilled":
                                    return e.value;
                                case "rejected":
                                    throw e.reason
                                }
                            }
                            throw e
                        }(e), t, a, l, i);
                    throw t = String(e),
                    Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.")
                }
                return u
            }
            function L(e, t, n) {
                if (null == e)
                    return e;
                var r = []
                  , a = 0;
                return P(e, r, "", "", (function(e) {
                    return t.call(n, e, a++)
                }
                )),
                r
            }
            function z(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    (t = t()).then((function(t) {
                        0 !== e._status && -1 !== e._status || (e._status = 1,
                        e._result = t)
                    }
                    ), (function(t) {
                        0 !== e._status && -1 !== e._status || (e._status = 2,
                        e._result = t)
                    }
                    )),
                    -1 === e._status && (e._status = 0,
                    e._result = t)
                }
                if (1 === e._status)
                    return e._result.default;
                throw e._result
            }
            var _ = "function" === typeof reportError ? reportError : function(e) {
                if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
                    var t = new window.ErrorEvent("error",{
                        bubbles: !0,
                        cancelable: !0,
                        message: "object" === typeof e && null !== e && "string" === typeof e.message ? String(e.message) : String(e),
                        error: e
                    });
                    if (!window.dispatchEvent(t))
                        return
                } else if ("object" === typeof process && "function" === typeof process.emit)
                    return void process.emit("uncaughtException", e);
                console.error(e)
            }
            ;
            function A() {}
            t.Children = {
                map: L,
                forEach: function(e, t, n) {
                    L(e, (function() {
                        t.apply(this, arguments)
                    }
                    ), n)
                },
                count: function(e) {
                    var t = 0;
                    return L(e, (function() {
                        t++
                    }
                    )),
                    t
                },
                toArray: function(e) {
                    return L(e, (function(e) {
                        return e
                    }
                    )) || []
                },
                only: function(e) {
                    if (!N(e))
                        throw Error("React.Children.only expected to receive a single React element child.");
                    return e
                }
            },
            t.Component = v,
            t.Fragment = a,
            t.Profiler = i,
            t.PureComponent = b,
            t.StrictMode = l,
            t.Suspense = u,
            t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k,
            t.act = function() {
                throw Error("act(...) is not supported in production builds of React.")
            }
            ,
            t.cache = function(e) {
                return function() {
                    return e.apply(null, arguments)
                }
            }
            ,
            t.cloneElement = function(e, t, n) {
                if (null === e || void 0 === e)
                    throw Error("The argument must be a React element, but you passed " + e + ".");
                var r = h({}, e.props)
                  , a = e.key;
                if (null != t)
                    for (l in void 0 !== t.ref && void 0,
                    void 0 !== t.key && (a = "" + t.key),
                    t)
                        !S.call(t, l) || "key" === l || "__self" === l || "__source" === l || "ref" === l && void 0 === t.ref || (r[l] = t[l]);
                var l = arguments.length - 2;
                if (1 === l)
                    r.children = n;
                else if (1 < l) {
                    for (var i = Array(l), o = 0; o < l; o++)
                        i[o] = arguments[o + 2];
                    r.children = i
                }
                return j(e.type, a, void 0, 0, 0, r)
            }
            ,
            t.createContext = function(e) {
                return (e = {
                    $$typeof: s,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = e,
                e.Consumer = {
                    $$typeof: o,
                    _context: e
                },
                e
            }
            ,
            t.createElement = function(e, t, n) {
                var r, a = {}, l = null;
                if (null != t)
                    for (r in void 0 !== t.key && (l = "" + t.key),
                    t)
                        S.call(t, r) && "key" !== r && "__self" !== r && "__source" !== r && (a[r] = t[r]);
                var i = arguments.length - 2;
                if (1 === i)
                    a.children = n;
                else if (1 < i) {
                    for (var o = Array(i), s = 0; s < i; s++)
                        o[s] = arguments[s + 2];
                    a.children = o
                }
                if (e && e.defaultProps)
                    for (r in i = e.defaultProps)
                        void 0 === a[r] && (a[r] = i[r]);
                return j(e, l, void 0, 0, 0, a)
            }
            ,
            t.createRef = function() {
                return {
                    current: null
                }
            }
            ,
            t.forwardRef = function(e) {
                return {
                    $$typeof: c,
                    render: e
                }
            }
            ,
            t.isValidElement = N,
            t.lazy = function(e) {
                return {
                    $$typeof: f,
                    _payload: {
                        _status: -1,
                        _result: e
                    },
                    _init: z
                }
            }
            ,
            t.memo = function(e, t) {
                return {
                    $$typeof: d,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            }
            ,
            t.startTransition = function(e) {
                var t = k.T
                  , n = {};
                k.T = n;
                try {
                    var r = e()
                      , a = k.S;
                    null !== a && a(n, r),
                    "object" === typeof r && null !== r && "function" === typeof r.then && r.then(A, _)
                } catch (l) {
                    _(l)
                } finally {
                    k.T = t
                }
            }
            ,
            t.unstable_useCacheRefresh = function() {
                return k.H.useCacheRefresh()
            }
            ,
            t.use = function(e) {
                return k.H.use(e)
            }
            ,
            t.useActionState = function(e, t, n) {
                return k.H.useActionState(e, t, n)
            }
            ,
            t.useCallback = function(e, t) {
                return k.H.useCallback(e, t)
            }
            ,
            t.useContext = function(e) {
                return k.H.useContext(e)
            }
            ,
            t.useDebugValue = function() {}
            ,
            t.useDeferredValue = function(e, t) {
                return k.H.useDeferredValue(e, t)
            }
            ,
            t.useEffect = function(e, t) {
                return k.H.useEffect(e, t)
            }
            ,
            t.useId = function() {
                return k.H.useId()
            }
            ,
            t.useImperativeHandle = function(e, t, n) {
                return k.H.useImperativeHandle(e, t, n)
            }
            ,
            t.useInsertionEffect = function(e, t) {
                return k.H.useInsertionEffect(e, t)
            }
            ,
            t.useLayoutEffect = function(e, t) {
                return k.H.useLayoutEffect(e, t)
            }
            ,
            t.useMemo = function(e, t) {
                return k.H.useMemo(e, t)
            }
            ,
            t.useOptimistic = function(e, t) {
                return k.H.useOptimistic(e, t)
            }
            ,
            t.useReducer = function(e, t, n) {
                return k.H.useReducer(e, t, n)
            }
            ,
            t.useRef = function(e) {
                return k.H.useRef(e)
            }
            ,
            t.useState = function(e) {
                return k.H.useState(e)
            }
            ,
            t.useSyncExternalStore = function(e, t, n) {
                return k.H.useSyncExternalStore(e, t, n)
            }
            ,
            t.useTransition = function() {
                return k.H.useTransition()
            }
            ,
            t.version = "19.0.0"
        }
        ,
        43: (e, t, n) => {
            e.exports = n(288)
        }
        ,
        579: (e, t, n) => {
            e.exports = n(799)
        }
        ,
        896: (e, t) => {
            function n(e, t) {
                var n = e.length;
                e.push(t);
                e: for (; 0 < n; ) {
                    var r = n - 1 >>> 1
                      , a = e[r];
                    if (!(0 < l(a, t)))
                        break e;
                    e[r] = t,
                    e[n] = a,
                    n = r
                }
            }
            function r(e) {
                return 0 === e.length ? null : e[0]
            }
            function a(e) {
                if (0 === e.length)
                    return null;
                var t = e[0]
                  , n = e.pop();
                if (n !== t) {
                    e[0] = n;
                    e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
                        var o = 2 * (r + 1) - 1
                          , s = e[o]
                          , c = o + 1
                          , u = e[c];
                        if (0 > l(s, n))
                            c < a && 0 > l(u, s) ? (e[r] = u,
                            e[c] = n,
                            r = c) : (e[r] = s,
                            e[o] = n,
                            r = o);
                        else {
                            if (!(c < a && 0 > l(u, n)))
                                break e;
                            e[r] = u,
                            e[c] = n,
                            r = c
                        }
                    }
                }
                return t
            }
            function l(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }
            if (t.unstable_now = void 0,
            "object" === typeof performance && "function" === typeof performance.now) {
                var i = performance;
                t.unstable_now = function() {
                    return i.now()
                }
            } else {
                var o = Date
                  , s = o.now();
                t.unstable_now = function() {
                    return o.now() - s
                }
            }
            var c = []
              , u = []
              , d = 1
              , f = null
              , p = 3
              , m = !1
              , h = !1
              , g = !1
              , v = "function" === typeof setTimeout ? setTimeout : null
              , y = "function" === typeof clearTimeout ? clearTimeout : null
              , b = "undefined" !== typeof setImmediate ? setImmediate : null;
            function x(e) {
                for (var t = r(u); null !== t; ) {
                    if (null === t.callback)
                        a(u);
                    else {
                        if (!(t.startTime <= e))
                            break;
                        a(u),
                        t.sortIndex = t.expirationTime,
                        n(c, t)
                    }
                    t = r(u)
                }
            }
            function w(e) {
                if (g = !1,
                x(e),
                !h)
                    if (null !== r(c))
                        h = !0,
                        z();
                    else {
                        var t = r(u);
                        null !== t && _(w, t.startTime - e)
                    }
            }
            var k, S = !1, j = -1, N = 5, E = -1;
            function C() {
                return !(t.unstable_now() - E < N)
            }
            function T() {
                if (S) {
                    var e = t.unstable_now();
                    E = e;
                    var n = !0;
                    try {
                        e: {
                            h = !1,
                            g && (g = !1,
                            y(j),
                            j = -1),
                            m = !0;
                            var l = p;
                            try {
                                t: {
                                    for (x(e),
                                    f = r(c); null !== f && !(f.expirationTime > e && C()); ) {
                                        var i = f.callback;
                                        if ("function" === typeof i) {
                                            f.callback = null,
                                            p = f.priorityLevel;
                                            var o = i(f.expirationTime <= e);
                                            if (e = t.unstable_now(),
                                            "function" === typeof o) {
                                                f.callback = o,
                                                x(e),
                                                n = !0;
                                                break t
                                            }
                                            f === r(c) && a(c),
                                            x(e)
                                        } else
                                            a(c);
                                        f = r(c)
                                    }
                                    if (null !== f)
                                        n = !0;
                                    else {
                                        var s = r(u);
                                        null !== s && _(w, s.startTime - e),
                                        n = !1
                                    }
                                }
                                break e
                            } finally {
                                f = null,
                                p = l,
                                m = !1
                            }
                            n = void 0
                        }
                    } finally {
                        n ? k() : S = !1
                    }
                }
            }
            if ("function" === typeof b)
                k = function() {
                    b(T)
                }
                ;
            else if ("undefined" !== typeof MessageChannel) {
                var P = new MessageChannel
                  , L = P.port2;
                P.port1.onmessage = T,
                k = function() {
                    L.postMessage(null)
                }
            } else
                k = function() {
                    v(T, 0)
                }
                ;
            function z() {
                S || (S = !0,
                k())
            }
            function _(e, n) {
                j = v((function() {
                    e(t.unstable_now())
                }
                ), n)
            }
            t.unstable_IdlePriority = 5,
            t.unstable_ImmediatePriority = 1,
            t.unstable_LowPriority = 4,
            t.unstable_NormalPriority = 3,
            t.unstable_Profiling = null,
            t.unstable_UserBlockingPriority = 2,
            t.unstable_cancelCallback = function(e) {
                e.callback = null
            }
            ,
            t.unstable_continueExecution = function() {
                h || m || (h = !0,
                z())
            }
            ,
            t.unstable_forceFrameRate = function(e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < e ? Math.floor(1e3 / e) : 5
            }
            ,
            t.unstable_getCurrentPriorityLevel = function() {
                return p
            }
            ,
            t.unstable_getFirstCallbackNode = function() {
                return r(c)
            }
            ,
            t.unstable_next = function(e) {
                switch (p) {
                case 1:
                case 2:
                case 3:
                    var t = 3;
                    break;
                default:
                    t = p
                }
                var n = p;
                p = t;
                try {
                    return e()
                } finally {
                    p = n
                }
            }
            ,
            t.unstable_pauseExecution = function() {}
            ,
            t.unstable_requestPaint = function() {}
            ,
            t.unstable_runWithPriority = function(e, t) {
                switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    e = 3
                }
                var n = p;
                p = e;
                try {
                    return t()
                } finally {
                    p = n
                }
            }
            ,
            t.unstable_scheduleCallback = function(e, a, l) {
                var i = t.unstable_now();
                switch ("object" === typeof l && null !== l ? l = "number" === typeof (l = l.delay) && 0 < l ? i + l : i : l = i,
                e) {
                case 1:
                    var o = -1;
                    break;
                case 2:
                    o = 250;
                    break;
                case 5:
                    o = 1073741823;
                    break;
                case 4:
                    o = 1e4;
                    break;
                default:
                    o = 5e3
                }
                return e = {
                    id: d++,
                    callback: a,
                    priorityLevel: e,
                    startTime: l,
                    expirationTime: o = l + o,
                    sortIndex: -1
                },
                l > i ? (e.sortIndex = l,
                n(u, e),
                null === r(c) && e === r(u) && (g ? (y(j),
                j = -1) : g = !0,
                _(w, l - i))) : (e.sortIndex = o,
                n(c, e),
                h || m || (h = !0,
                z())),
                e
            }
            ,
            t.unstable_shouldYield = C,
            t.unstable_wrapCallback = function(e) {
                var t = p;
                return function() {
                    var n = p;
                    p = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        p = n
                    }
                }
            }
        }
        ,
        853: (e, t, n) => {
            e.exports = n(896)
        }
        ,
        770: (e, t, n) => {
            e.exports = n.p + "static/media/Hwee_Pink_TAN.d112bd6cc95995593d23.png"
        }
        ,
        233: (e, t, n) => {
            e.exports = n.p + "static/media/\u5f35\u5609\u6df5.5de95e6800426b26ece2.png"
        }
        ,
        30: (e, t, n) => {
            e.exports = n.p + "static/media/\u674e\u80b2\u6770.dd7e4319e2a865b4f375.png"
        }
        ,
        758: (e, t, n) => {
            e.exports = n.p + "static/media/\u674e\u97f6\u66fc.50c5a59a7d1f1bb5be32.png"
        }
        ,
        340: (e, t, n) => {
            e.exports = n.p + "static/media/\u6eab\u6021\u73b2.1e23c099bbba93404342.png"
        }
        ,
        377: (e, t, n) => {
            e.exports = n.p + "static/media/\u8607\u6dfb\u8ca1.e92517b2f01b372bed82.png"
        }
        ,
        219: (e, t, n) => {
            e.exports = n.p + "static/media/\u9b4f\u5b8f\u5b87.b376444a8ced3b6a0858.png"
        }
    }
      , t = {};
    function n(r) {
        var a = t[r];
        if (void 0 !== a)
            return a.exports;
        var l = t[r] = {
            exports: {}
        };
        return e[r](l, l.exports, n),
        l.exports
    }
    n.p = "/";
    var r = n(43)
      , a = n(391);
    function l(e, t) {
        if (null == e)
            return {};
        var n, r, a = function(e, t) {
            if (null == e)
                return {};
            var n = {};
            for (var r in e)
                if ({}.hasOwnProperty.call(e, r)) {
                    if (-1 !== t.indexOf(r))
                        continue;
                    n[r] = e[r]
                }
            return n
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            for (r = 0; r < l.length; r++)
                n = l[r],
                -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
        }
        return a
    }
    function i(e) {
        return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        i(e)
    }
    function o(e) {
        var t = function(e, t) {
            if ("object" != i(e) || !e)
                return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != i(r))
                    return r;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == i(t) ? t : t + ""
    }
    function s(e, t, n) {
        return (t = o(t))in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function u(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? c(Object(n), !0).forEach((function(t) {
                s(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    n(358);
    const d = ["page"]
      , f = ["page", "matches"]
      , p = ["onClick", "discover", "prefetch", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
      , m = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"]
      , h = ["discover", "fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"];
    var g = "popstate";
    function v() {
        return j((function(e, t) {
            let {pathname: n, search: r, hash: a} = e.location;
            return w("", {
                pathname: n,
                search: r,
                hash: a
            }, t.state && t.state.usr || null, t.state && t.state.key || "default")
        }
        ), (function(e, t) {
            return "string" === typeof t ? t : k(t)
        }
        ), null, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
    }
    function y(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
            throw new Error(t)
    }
    function b(e, t) {
        if (!e) {
            "undefined" !== typeof console && console.warn(t);
            try {
                throw new Error(t)
            } catch (n) {}
        }
    }
    function x(e, t) {
        return {
            usr: e.state,
            key: e.key,
            idx: t
        }
    }
    function w(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
          , r = arguments.length > 3 ? arguments[3] : void 0;
        return u(u({
            pathname: "string" === typeof e ? e : e.pathname,
            search: "",
            hash: ""
        }, "string" === typeof t ? S(t) : t), {}, {
            state: n,
            key: t && t.key || r || Math.random().toString(36).substring(2, 10)
        })
    }
    function k(e) {
        let {pathname: t="/", search: n="", hash: r=""} = e;
        return n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
        r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
        t
    }
    function S(e) {
        let t = {};
        if (e) {
            let n = e.indexOf("#");
            n >= 0 && (t.hash = e.substring(n),
            e = e.substring(0, n));
            let r = e.indexOf("?");
            r >= 0 && (t.search = e.substring(r),
            e = e.substring(0, r)),
            e && (t.pathname = e)
        }
        return t
    }
    function j(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
          , {window: a=document.defaultView, v5Compat: l=!1} = r
          , i = a.history
          , o = "POP"
          , s = null
          , c = d();
        function d() {
            return (i.state || {
                idx: null
            }).idx
        }
        function f() {
            o = "POP";
            let e = d()
              , t = null == e ? null : e - c;
            c = e,
            s && s({
                action: o,
                location: m.location,
                delta: t
            })
        }
        function p(e) {
            let t = "null" !== a.location.origin ? a.location.origin : a.location.href
              , n = "string" === typeof e ? e : k(e);
            return n = n.replace(/ $/, "%20"),
            y(t, "No window.location.(origin|href) available to create URL for href: ".concat(n)),
            new URL(n,t)
        }
        null == c && (c = 0,
        i.replaceState(u(u({}, i.state), {}, {
            idx: c
        }), ""));
        let m = {
            get action() {
                return o
            },
            get location() {
                return e(a, i)
            },
            listen(e) {
                if (s)
                    throw new Error("A history only accepts one active listener");
                return a.addEventListener(g, f),
                s = e,
                () => {
                    a.removeEventListener(g, f),
                    s = null
                }
            },
            createHref: e => t(a, e),
            createURL: p,
            encodeLocation(e) {
                let t = p(e);
                return {
                    pathname: t.pathname,
                    search: t.search,
                    hash: t.hash
                }
            },
            push: function(e, t) {
                o = "PUSH";
                let r = w(m.location, e, t);
                n && n(r, e),
                c = d() + 1;
                let u = x(r, c)
                  , f = m.createHref(r);
                try {
                    i.pushState(u, "", f)
                } catch (p) {
                    if (p instanceof DOMException && "DataCloneError" === p.name)
                        throw p;
                    a.location.assign(f)
                }
                l && s && s({
                    action: o,
                    location: m.location,
                    delta: 1
                })
            },
            replace: function(e, t) {
                o = "REPLACE";
                let r = w(m.location, e, t);
                n && n(r, e),
                c = d();
                let a = x(r, c)
                  , u = m.createHref(r);
                i.replaceState(a, "", u),
                l && s && s({
                    action: o,
                    location: m.location,
                    delta: 0
                })
            },
            go: e => i.go(e)
        };
        return m
    }
    function N(e, t) {
        return E(e, t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/", !1)
    }
    function E(e, t, n, r) {
        let a = W(("string" === typeof t ? S(t) : t).pathname || "/", n);
        if (null == a)
            return null;
        let l = C(e);
        !function(e) {
            e.sort(( (e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
                let n = e.length === t.length && e.slice(0, -1).every(( (e, n) => e === t[n]));
                return n ? e[e.length - 1] - t[t.length - 1] : 0
            }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
        }(l);
        let i = null;
        for (let o = 0; null == i && o < l.length; ++o) {
            let e = F(a);
            i = I(l[o], e, r)
        }
        return i
    }
    function C(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
          , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []
          , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ""
          , a = (e, a, l) => {
            let i = {
                relativePath: void 0 === l ? e.path || "" : l,
                caseSensitive: !0 === e.caseSensitive,
                childrenIndex: a,
                route: e
            };
            i.relativePath.startsWith("/") && (y(i.relativePath.startsWith(r), 'Absolute route path "'.concat(i.relativePath, '" nested under path "').concat(r, '" is not valid. An absolute child route path must start with the combined path of all its parent routes.')),
            i.relativePath = i.relativePath.slice(r.length));
            let o = V([r, i.relativePath])
              , s = n.concat(i);
            e.children && e.children.length > 0 && (y(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "'.concat(o, '".')),
            C(e.children, t, s, o)),
            (null != e.path || e.index) && t.push({
                path: o,
                score: M(o, e.index),
                routesMeta: s
            })
        }
        ;
        return e.forEach(( (e, t) => {
            var n;
            if ("" !== e.path && null !== (n = e.path) && void 0 !== n && n.includes("?"))
                for (let r of T(e.path))
                    a(e, t, r);
            else
                a(e, t)
        }
        )),
        t
    }
    function T(e) {
        let t = e.split("/");
        if (0 === t.length)
            return [];
        let[n,...r] = t
          , a = n.endsWith("?")
          , l = n.replace(/\?$/, "");
        if (0 === r.length)
            return a ? [l, ""] : [l];
        let i = T(r.join("/"))
          , o = [];
        return o.push(...i.map((e => "" === e ? l : [l, e].join("/")))),
        a && o.push(...i),
        o.map((t => e.startsWith("/") && "" === t ? "/" : t))
    }
    var P = /^:[\w-]+$/
      , L = 3
      , z = 2
      , _ = 1
      , A = 10
      , R = -2
      , O = e => "*" === e;
    function M(e, t) {
        let n = e.split("/")
          , r = n.length;
        return n.some(O) && (r += R),
        t && (r += z),
        n.filter((e => !O(e))).reduce(( (e, t) => e + (P.test(t) ? L : "" === t ? _ : A)), r)
    }
    function I(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          , {routesMeta: r} = e
          , a = {}
          , l = "/"
          , i = [];
        for (let o = 0; o < r.length; ++o) {
            let e = r[o]
              , s = o === r.length - 1
              , c = "/" === l ? t : t.slice(l.length) || "/"
              , u = D({
                path: e.relativePath,
                caseSensitive: e.caseSensitive,
                end: s
            }, c)
              , d = e.route;
            if (!u && s && n && !r[r.length - 1].route.index && (u = D({
                path: e.relativePath,
                caseSensitive: e.caseSensitive,
                end: !1
            }, c)),
            !u)
                return null;
            Object.assign(a, u.params),
            i.push({
                params: a,
                pathname: V([l, u.pathname]),
                pathnameBase: G(V([l, u.pathnameBase])),
                route: d
            }),
            "/" !== u.pathnameBase && (l = V([l, u.pathnameBase]))
        }
        return i
    }
    function D(e, t) {
        "string" === typeof e && (e = {
            path: e,
            caseSensitive: !1,
            end: !0
        });
        let[n,r] = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            b("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "'.concat(e, '" will be treated as if it were "').concat(e.replace(/\*$/, "/*"), '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "').concat(e.replace(/\*$/, "/*"), '".'));
            let r = []
              , a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, ( (e, t, n) => (r.push({
                paramName: t,
                isOptional: null != n
            }),
            n ? "/?([^\\/]+)?" : "/([^\\/]+)")));
            e.endsWith("*") ? (r.push({
                paramName: "*"
            }),
            a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            let l = new RegExp(a,t ? void 0 : "i");
            return [l, r]
        }(e.path, e.caseSensitive, e.end)
          , a = t.match(n);
        if (!a)
            return null;
        let l = a[0]
          , i = l.replace(/(.)\/+$/, "$1")
          , o = a.slice(1);
        return {
            params: r.reduce(( (e, t, n) => {
                let {paramName: r, isOptional: a} = t;
                if ("*" === r) {
                    let e = o[n] || "";
                    i = l.slice(0, l.length - e.length).replace(/(.)\/+$/, "$1")
                }
                const s = o[n];
                return e[r] = a && !s ? void 0 : (s || "").replace(/%2F/g, "/"),
                e
            }
            ), {}),
            pathname: l,
            pathnameBase: i,
            pattern: e
        }
    }
    function F(e) {
        try {
            return e.split("/").map((e => decodeURIComponent(e).replace(/\//g, "%2F"))).join("/")
        } catch (t) {
            return b(!1, 'The URL path "'.concat(e, '" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (').concat(t, ").")),
            e
        }
    }
    function W(e, t) {
        if ("/" === t)
            return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase()))
            return null;
        let n = t.endsWith("/") ? t.length - 1 : t.length
          , r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/"
    }
    function U(e, t, n, r) {
        return "Cannot include a '".concat(e, "' character in a manually specified `to.").concat(t, "` field [").concat(JSON.stringify(r), "].  Please separate it out to the `to.").concat(n, '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.')
    }
    function H(e) {
        return e.filter(( (e, t) => 0 === t || e.route.path && e.route.path.length > 0))
    }
    function B(e) {
        let t = H(e);
        return t.map(( (e, n) => n === t.length - 1 ? e.pathname : e.pathnameBase))
    }
    function $(e, t, n) {
        let r, a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        "string" === typeof e ? r = S(e) : (r = u({}, e),
        y(!r.pathname || !r.pathname.includes("?"), U("?", "pathname", "search", r)),
        y(!r.pathname || !r.pathname.includes("#"), U("#", "pathname", "hash", r)),
        y(!r.search || !r.search.includes("#"), U("#", "search", "hash", r)));
        let l, i = "" === e || "" === r.pathname, o = i ? "/" : r.pathname;
        if (null == o)
            l = n;
        else {
            let e = t.length - 1;
            if (!a && o.startsWith("..")) {
                let t = o.split("/");
                for (; ".." === t[0]; )
                    t.shift(),
                    e -= 1;
                r.pathname = t.join("/")
            }
            l = e >= 0 ? t[e] : "/"
        }
        let s = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/"
              , {pathname: n, search: r="", hash: a=""} = "string" === typeof e ? S(e) : e
              , l = n ? n.startsWith("/") ? n : function(e, t) {
                let n = t.replace(/\/+$/, "").split("/");
                return e.split("/").forEach((e => {
                    ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e)
                }
                )),
                n.length > 1 ? n.join("/") : "/"
            }(n, t) : t;
            return {
                pathname: l,
                search: q(r),
                hash: Q(a)
            }
        }(r, l)
          , c = o && "/" !== o && o.endsWith("/")
          , d = (i || "." === o) && n.endsWith("/");
        return s.pathname.endsWith("/") || !c && !d || (s.pathname += "/"),
        s
    }
    var V = e => e.join("/").replace(/\/\/+/g, "/")
      , G = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
      , q = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : ""
      , Q = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "";
    function K(e) {
        return null != e && "number" === typeof e.status && "string" === typeof e.statusText && "boolean" === typeof e.internal && "data"in e
    }
    var Y = ["POST", "PUT", "PATCH", "DELETE"]
      , X = (new Set(Y),
    ["GET", ...Y]);
    new Set(X),
    Symbol("ResetLoaderData");
    var J = r.createContext(null);
    J.displayName = "DataRouter";
    var Z = r.createContext(null);
    Z.displayName = "DataRouterState";
    var ee = r.createContext({
        isTransitioning: !1
    });
    ee.displayName = "ViewTransition";
    var te = r.createContext(new Map);
    te.displayName = "Fetchers";
    var ne = r.createContext(null);
    ne.displayName = "Await";
    var re = r.createContext(null);
    re.displayName = "Navigation";
    var ae = r.createContext(null);
    ae.displayName = "Location";
    var le = r.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    });
    le.displayName = "Route";
    var ie = r.createContext(null);
    ie.displayName = "RouteError";
    function oe() {
        return null != r.useContext(ae)
    }
    function se() {
        return y(oe(), "useLocation() may be used only in the context of a <Router> component."),
        r.useContext(ae).location
    }
    var ce = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
    function ue(e) {
        r.useContext(re).static || r.useLayoutEffect(e)
    }
    function de() {
        let {isDataRoute: e} = r.useContext(le);
        return e ? function() {
            let {router: e} = xe("useNavigate")
              , t = ke("useNavigate")
              , n = r.useRef(!1);
            ue(( () => {
                n.current = !0
            }
            ));
            let a = r.useCallback((async function(r) {
                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                b(n.current, ce),
                n.current && ("number" === typeof r ? e.navigate(r) : await e.navigate(r, u({
                    fromRouteId: t
                }, a)))
            }
            ), [e, t]);
            return a
        }() : function() {
            y(oe(), "useNavigate() may be used only in the context of a <Router> component.");
            let e = r.useContext(J)
              , {basename: t, navigator: n} = r.useContext(re)
              , {matches: a} = r.useContext(le)
              , {pathname: l} = se()
              , i = JSON.stringify(B(a))
              , o = r.useRef(!1);
            ue(( () => {
                o.current = !0
            }
            ));
            let s = r.useCallback((function(r) {
                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (b(o.current, ce),
                !o.current)
                    return;
                if ("number" === typeof r)
                    return void n.go(r);
                let s = $(r, JSON.parse(i), l, "path" === a.relative);
                null == e && "/" !== t && (s.pathname = "/" === s.pathname ? t : V([t, s.pathname])),
                (a.replace ? n.replace : n.push)(s, a.state, a)
            }
            ), [t, n, i, l, e]);
            return s
        }()
    }
    r.createContext(null);
    function fe(e) {
        let {relative: t} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , {matches: n} = r.useContext(le)
          , {pathname: a} = se()
          , l = JSON.stringify(B(n));
        return r.useMemo(( () => $(e, JSON.parse(l), a, "path" === t)), [e, l, a, t])
    }
    function pe(e, t, n, a) {
        y(oe(), "useRoutes() may be used only in the context of a <Router> component.");
        let {navigator: l, static: i} = r.useContext(re)
          , {matches: o} = r.useContext(le)
          , s = o[o.length - 1]
          , c = s ? s.params : {}
          , d = s ? s.pathname : "/"
          , f = s ? s.pathnameBase : "/"
          , p = s && s.route;
        {
            let e = p && p.path || "";
            Ne(d, !p || e.endsWith("*") || e.endsWith("*?"), 'You rendered descendant <Routes> (or called `useRoutes()`) at "'.concat(d, '" (under <Route path="').concat(e, '">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won\'t match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="').concat(e, '"> to <Route path="').concat("/" === e ? "*" : "".concat(e, "/*"), '">.'))
        }
        let m, h = se();
        if (t) {
            var g;
            let e = "string" === typeof t ? S(t) : t;
            y("/" === f || (null === (g = e.pathname) || void 0 === g ? void 0 : g.startsWith(f)), 'When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "'.concat(f, '" but pathname "').concat(e.pathname, '" was given in the `location` prop.')),
            m = e
        } else
            m = h;
        let v = m.pathname || "/"
          , x = v;
        if ("/" !== f) {
            let e = f.replace(/^\//, "").split("/");
            x = "/" + v.replace(/^\//, "").split("/").slice(e.length).join("/")
        }
        let w = !i && n && n.matches && n.matches.length > 0 ? n.matches : N(e, {
            pathname: x
        });
        b(p || null != w, 'No routes matched location "'.concat(m.pathname).concat(m.search).concat(m.hash, '" ')),
        b(null == w || void 0 !== w[w.length - 1].route.element || void 0 !== w[w.length - 1].route.Component || void 0 !== w[w.length - 1].route.lazy, 'Matched leaf route at location "'.concat(m.pathname).concat(m.search).concat(m.hash, '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'));
        let k = ye(w && w.map((e => Object.assign({}, e, {
            params: Object.assign({}, c, e.params),
            pathname: V([f, l.encodeLocation ? l.encodeLocation(e.pathname).pathname : e.pathname]),
            pathnameBase: "/" === e.pathnameBase ? f : V([f, l.encodeLocation ? l.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
        }))), o, n, a);
        return t && k ? r.createElement(ae.Provider, {
            value: {
                location: u({
                    pathname: "/",
                    search: "",
                    hash: "",
                    state: null,
                    key: "default"
                }, m),
                navigationType: "POP"
            }
        }, k) : k
    }
    function me() {
        let e = Se()
          , t = K(e) ? "".concat(e.status, " ").concat(e.statusText) : e instanceof Error ? e.message : JSON.stringify(e)
          , n = e instanceof Error ? e.stack : null
          , a = "rgba(200,200,200, 0.5)"
          , l = {
            padding: "0.5rem",
            backgroundColor: a
        }
          , i = {
            padding: "2px 4px",
            backgroundColor: a
        }
          , o = null;
        return console.error("Error handled by React Router default ErrorBoundary:", e),
        o = r.createElement(r.Fragment, null, r.createElement("p", null, "\ud83d\udcbf Hey developer \ud83d\udc4b"), r.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", r.createElement("code", {
            style: i
        }, "ErrorBoundary"), " or", " ", r.createElement("code", {
            style: i
        }, "errorElement"), " prop on your route.")),
        r.createElement(r.Fragment, null, r.createElement("h2", null, "Unexpected Application Error!"), r.createElement("h3", {
            style: {
                fontStyle: "italic"
            }
        }, t), n ? r.createElement("pre", {
            style: l
        }, n) : null, o)
    }
    var he = r.createElement(me, null)
      , ge = class extends r.Component {
        constructor(e) {
            super(e),
            this.state = {
                location: e.location,
                revalidation: e.revalidation,
                error: e.error
            }
        }
        static getDerivedStateFromError(e) {
            return {
                error: e
            }
        }
        static getDerivedStateFromProps(e, t) {
            return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation
            } : {
                error: void 0 !== e.error ? e.error : t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation
            }
        }
        componentDidCatch(e, t) {
            console.error("React Router caught the following error during render", e, t)
        }
        render() {
            return void 0 !== this.state.error ? r.createElement(le.Provider, {
                value: this.props.routeContext
            }, r.createElement(ie.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children
        }
    }
    ;
    function ve(e) {
        let {routeContext: t, match: n, children: a} = e
          , l = r.useContext(J);
        return l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id),
        r.createElement(le.Provider, {
            value: t
        }, a)
    }
    function ye(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
          , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (null == e) {
            if (!n)
                return null;
            if (n.errors)
                e = n.matches;
            else {
                if (0 !== t.length || n.initialized || !(n.matches.length > 0))
                    return null;
                e = n.matches
            }
        }
        let a = e
          , l = null === n || void 0 === n ? void 0 : n.errors;
        if (null != l) {
            let e = a.findIndex((e => e.route.id && void 0 !== (null === l || void 0 === l ? void 0 : l[e.route.id])));
            y(e >= 0, "Could not find a matching route for errors on route IDs: ".concat(Object.keys(l).join(","))),
            a = a.slice(0, Math.min(a.length, e + 1))
        }
        let i = !1
          , o = -1;
        if (n)
            for (let r = 0; r < a.length; r++) {
                let e = a[r];
                if ((e.route.HydrateFallback || e.route.hydrateFallbackElement) && (o = r),
                e.route.id) {
                    let {loaderData: t, errors: r} = n
                      , l = e.route.loader && !t.hasOwnProperty(e.route.id) && (!r || void 0 === r[e.route.id]);
                    if (e.route.lazy || l) {
                        i = !0,
                        a = o >= 0 ? a.slice(0, o + 1) : [a[0]];
                        break
                    }
                }
            }
        return a.reduceRight(( (e, s, c) => {
            let u, d = !1, f = null, p = null;
            n && (u = l && s.route.id ? l[s.route.id] : void 0,
            f = s.route.errorElement || he,
            i && (o < 0 && 0 === c ? (Ne("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"),
            d = !0,
            p = null) : o === c && (d = !0,
            p = s.route.hydrateFallbackElement || null)));
            let m = t.concat(a.slice(0, c + 1))
              , h = () => {
                let t;
                return t = u ? f : d ? p : s.route.Component ? r.createElement(s.route.Component, null) : s.route.element ? s.route.element : e,
                r.createElement(ve, {
                    match: s,
                    routeContext: {
                        outlet: e,
                        matches: m,
                        isDataRoute: null != n
                    },
                    children: t
                })
            }
            ;
            return n && (s.route.ErrorBoundary || s.route.errorElement || 0 === c) ? r.createElement(ge, {
                location: n.location,
                revalidation: n.revalidation,
                component: f,
                error: u,
                children: h(),
                routeContext: {
                    outlet: null,
                    matches: m,
                    isDataRoute: !0
                }
            }) : h()
        }
        ), null)
    }
    function be(e) {
        return "".concat(e, " must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.")
    }
    function xe(e) {
        let t = r.useContext(J);
        return y(t, be(e)),
        t
    }
    function we(e) {
        let t = r.useContext(Z);
        return y(t, be(e)),
        t
    }
    function ke(e) {
        let t = function(e) {
            let t = r.useContext(le);
            return y(t, be(e)),
            t
        }(e)
          , n = t.matches[t.matches.length - 1];
        return y(n.route.id, "".concat(e, ' can only be used on routes that contain a unique "id"')),
        n.route.id
    }
    function Se() {
        var e;
        let t = r.useContext(ie)
          , n = we("useRouteError")
          , a = ke("useRouteError");
        return void 0 !== t ? t : null === (e = n.errors) || void 0 === e ? void 0 : e[a]
    }
    var je = {};
    function Ne(e, t, n) {
        t || je[e] || (je[e] = !0,
        b(!1, n))
    }
    r.memo((function(e) {
        let {routes: t, future: n, state: r} = e;
        return pe(t, void 0, r, n)
    }
    ));
    function Ee(e) {
        y(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
    }
    function Ce(e) {
        let {basename: t="/", children: n=null, location: a, navigationType: l="POP", navigator: i, static: o=!1} = e;
        y(!oe(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
        let s = t.replace(/^\/*/, "/")
          , c = r.useMemo(( () => ({
            basename: s,
            navigator: i,
            static: o,
            future: {}
        })), [s, i, o]);
        "string" === typeof a && (a = S(a));
        let {pathname: u="/", search: d="", hash: f="", state: p=null, key: m="default"} = a
          , h = r.useMemo(( () => {
            let e = W(u, s);
            return null == e ? null : {
                location: {
                    pathname: e,
                    search: d,
                    hash: f,
                    state: p,
                    key: m
                },
                navigationType: l
            }
        }
        ), [s, u, d, f, p, m, l]);
        return b(null != h, '<Router basename="'.concat(s, '"> is not able to match the URL "').concat(u).concat(d).concat(f, "\" because it does not start with the basename, so the <Router> won't render anything.")),
        null == h ? null : r.createElement(re.Provider, {
            value: c
        }, r.createElement(ae.Provider, {
            children: n,
            value: h
        }))
    }
    function Te(e) {
        let {children: t, location: n} = e;
        return pe(Pe(t), n)
    }
    r.Component;
    function Pe(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
          , n = [];
        return r.Children.forEach(e, ( (e, a) => {
            if (!r.isValidElement(e))
                return;
            let l = [...t, a];
            if (e.type === r.Fragment)
                return void n.push.apply(n, Pe(e.props.children, l));
            y(e.type === Ee, "[".concat("string" === typeof e.type ? e.type : e.type.name, "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>")),
            y(!e.props.index || !e.props.children, "An index route cannot have child routes.");
            let i = {
                id: e.props.id || l.join("-"),
                caseSensitive: e.props.caseSensitive,
                element: e.props.element,
                Component: e.props.Component,
                index: e.props.index,
                path: e.props.path,
                loader: e.props.loader,
                action: e.props.action,
                hydrateFallbackElement: e.props.hydrateFallbackElement,
                HydrateFallback: e.props.HydrateFallback,
                errorElement: e.props.errorElement,
                ErrorBoundary: e.props.ErrorBoundary,
                hasErrorBoundary: !0 === e.props.hasErrorBoundary || null != e.props.ErrorBoundary || null != e.props.errorElement,
                shouldRevalidate: e.props.shouldRevalidate,
                handle: e.props.handle,
                lazy: e.props.lazy
            };
            e.props.children && (i.children = Pe(e.props.children, l)),
            n.push(i)
        }
        )),
        n
    }
    var Le = "get"
      , ze = "application/x-www-form-urlencoded";
    function _e(e) {
        return null != e && "string" === typeof e.tagName
    }
    var Ae = null;
    var Re = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
    function Oe(e) {
        return null == e || Re.has(e) ? e : (b(!1, '"'.concat(e, '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` and will default to "').concat(ze, '"')),
        null)
    }
    function Me(e, t) {
        let n, r, a, l, i;
        if (_e(o = e) && "form" === o.tagName.toLowerCase()) {
            let i = e.getAttribute("action");
            r = i ? W(i, t) : null,
            n = e.getAttribute("method") || Le,
            a = Oe(e.getAttribute("enctype")) || ze,
            l = new FormData(e)
        } else if (function(e) {
            return _e(e) && "button" === e.tagName.toLowerCase()
        }(e) || function(e) {
            return _e(e) && "input" === e.tagName.toLowerCase()
        }(e) && ("submit" === e.type || "image" === e.type)) {
            let i = e.form;
            if (null == i)
                throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
            let o = e.getAttribute("formaction") || i.getAttribute("action");
            if (r = o ? W(o, t) : null,
            n = e.getAttribute("formmethod") || i.getAttribute("method") || Le,
            a = Oe(e.getAttribute("formenctype")) || Oe(i.getAttribute("enctype")) || ze,
            l = new FormData(i,e),
            !function() {
                if (null === Ae)
                    try {
                        new FormData(document.createElement("form"),0),
                        Ae = !1
                    } catch (e) {
                        Ae = !0
                    }
                return Ae
            }()) {
                let {name: t, type: n, value: r} = e;
                if ("image" === n) {
                    let e = t ? "".concat(t, ".") : "";
                    l.append("".concat(e, "x"), "0"),
                    l.append("".concat(e, "y"), "0")
                } else
                    t && l.append(t, r)
            }
        } else {
            if (_e(e))
                throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
            n = Le,
            r = null,
            a = ze,
            i = e
        }
        var o;
        return l && "text/plain" === a && (i = l,
        l = void 0),
        {
            action: r,
            method: n.toLowerCase(),
            encType: a,
            formData: l,
            body: i
        }
    }
    function Ie(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
            throw new Error(t)
    }
    async function De(e, t) {
        if (e.id in t)
            return t[e.id];
        try {
            let n = await import(e.module);
            return t[e.id] = n,
            n
        } catch (n) {
            return console.error("Error loading route module `".concat(e.module, "`, reloading page...")),
            console.error(n),
            window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
            window.location.reload(),
            new Promise(( () => {}
            ))
        }
    }
    function Fe(e) {
        return null != e && "string" === typeof e.page
    }
    function We(e) {
        return null != e && (null == e.href ? "preload" === e.rel && "string" === typeof e.imageSrcSet && "string" === typeof e.imageSizes : "string" === typeof e.rel && "string" === typeof e.href)
    }
    function Ue(e, t, n, r, a, l) {
        let i = (e, t) => !n[t] || e.route.id !== n[t].route.id
          , o = (e, t) => {
            var r;
            return n[t].pathname !== e.pathname || (null === (r = n[t].route.path) || void 0 === r ? void 0 : r.endsWith("*")) && n[t].params["*"] !== e.params["*"]
        }
        ;
        return "assets" === l ? t.filter(( (e, t) => i(e, t) || o(e, t))) : "data" === l ? t.filter(( (t, l) => {
            let s = r.routes[t.route.id];
            if (!s || !s.hasLoader)
                return !1;
            if (i(t, l) || o(t, l))
                return !0;
            if (t.route.shouldRevalidate) {
                var c;
                let r = t.route.shouldRevalidate({
                    currentUrl: new URL(a.pathname + a.search + a.hash,window.origin),
                    currentParams: (null === (c = n[0]) || void 0 === c ? void 0 : c.params) || {},
                    nextUrl: new URL(e,window.origin),
                    nextParams: t.params,
                    defaultShouldRevalidate: !0
                });
                if ("boolean" === typeof r)
                    return r
            }
            return !0
        }
        )) : []
    }
    function He(e) {
        return [...new Set(e)]
    }
    function Be(e, t) {
        let n = new Set
          , r = new Set(t);
        return e.reduce(( (e, a) => {
            if (t && !Fe(a) && "script" === a.as && a.href && r.has(a.href))
                return e;
            let l = JSON.stringify(function(e) {
                let t = {}
                  , n = Object.keys(e).sort();
                for (let r of n)
                    t[r] = e[r];
                return t
            }(a));
            return n.has(l) || (n.add(l),
            e.push({
                key: l,
                link: a
            })),
            e
        }
        ), [])
    }
    function $e(e) {
        return {
            __html: e
        }
    }
    Symbol("SingleFetchRedirect");
    function Ve(e) {
        let t = "string" === typeof e ? new URL(e,"undefined" === typeof window ? "server://singlefetch/" : window.location.origin) : e;
        return "/" === t.pathname ? t.pathname = "_root.data" : t.pathname = "".concat(t.pathname.replace(/\/$/, ""), ".data"),
        t
    }
    r.Component;
    function Ge(e) {
        let {error: t, isOutsideRemixApp: n} = e;
        console.error(t);
        let a, l = r.createElement("script", {
            dangerouslySetInnerHTML: {
                __html: '\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      '
            }
        });
        if (K(t))
            return r.createElement(qe, {
                title: "Unhandled Thrown Response!"
            }, r.createElement("h1", {
                style: {
                    fontSize: "24px"
                }
            }, t.status, " ", t.statusText), l);
        if (t instanceof Error)
            a = t;
        else {
            let e = null == t ? "Unknown Error" : "object" === typeof t && "toString"in t ? t.toString() : JSON.stringify(t);
            a = new Error(e)
        }
        return r.createElement(qe, {
            title: "Application Error!",
            isOutsideRemixApp: n
        }, r.createElement("h1", {
            style: {
                fontSize: "24px"
            }
        }, "Application Error"), r.createElement("pre", {
            style: {
                padding: "2rem",
                background: "hsla(10, 50%, 50%, 0.1)",
                color: "red",
                overflow: "auto"
            }
        }, a.stack), l)
    }
    function qe(e) {
        var t;
        let {title: n, renderScripts: a, isOutsideRemixApp: l, children: i} = e
          , {routeModules: o} = Je();
        return null !== (t = o.root) && void 0 !== t && t.Layout && !l ? i : r.createElement("html", {
            lang: "en"
        }, r.createElement("head", null, r.createElement("meta", {
            charSet: "utf-8"
        }), r.createElement("meta", {
            name: "viewport",
            content: "width=device-width,initial-scale=1,viewport-fit=cover"
        }), r.createElement("title", null, n)), r.createElement("body", null, r.createElement("main", {
            style: {
                fontFamily: "system-ui, sans-serif",
                padding: "2rem"
            }
        }, i, a ? r.createElement(lt, null) : null)))
    }
    function Qe(e) {
        return !e
    }
    function Ke() {
        let e = r.useContext(J);
        return Ie(e, "You must render this element inside a <DataRouterContext.Provider> element"),
        e
    }
    function Ye() {
        let e = r.useContext(Z);
        return Ie(e, "You must render this element inside a <DataRouterStateContext.Provider> element"),
        e
    }
    var Xe = r.createContext(void 0);
    function Je() {
        let e = r.useContext(Xe);
        return Ie(e, "You must render this element inside a <HydratedRouter> element"),
        e
    }
    function Ze(e, t) {
        return n => {
            e && e(n),
            n.defaultPrevented || t(n)
        }
    }
    function et(e, t, n) {
        if (n && !at)
            return [e[0]];
        if (t) {
            let n = e.findIndex((e => void 0 !== t[e.route.id]));
            return e.slice(0, n + 1)
        }
        return e
    }
    function tt(e) {
        let {page: t} = e
          , n = l(e, d)
          , {router: a} = Ke()
          , i = r.useMemo(( () => N(a.routes, t, a.basename)), [a.routes, t, a.basename]);
        return i ? r.createElement(rt, u({
            page: t,
            matches: i
        }, n)) : null
    }
    function nt(e) {
        let {manifest: t, routeModules: n} = Je()
          , [a,l] = r.useState([]);
        return r.useEffect(( () => {
            let r = !1;
            return async function(e, t, n) {
                return Be((await Promise.all(e.map((async e => {
                    let r = t.routes[e.route.id];
                    if (r) {
                        let e = await De(r, n);
                        return e.links ? e.links() : []
                    }
                    return []
                }
                )))).flat(1).filter(We).filter((e => "stylesheet" === e.rel || "preload" === e.rel)).map((e => "stylesheet" === e.rel ? u(u({}, e), {}, {
                    rel: "prefetch",
                    as: "style"
                }) : u(u({}, e), {}, {
                    rel: "prefetch"
                }))))
            }(e, t, n).then((e => {
                r || l(e)
            }
            )),
            () => {
                r = !0
            }
        }
        ), [e, t, n]),
        a
    }
    function rt(e) {
        let {page: t, matches: n} = e
          , a = l(e, f)
          , i = se()
          , {manifest: o, routeModules: s} = Je()
          , {loaderData: c, matches: d} = Ye()
          , p = r.useMemo(( () => Ue(t, n, d, o, i, "data")), [t, n, d, o, i])
          , m = r.useMemo(( () => Ue(t, n, d, o, i, "assets")), [t, n, d, o, i])
          , h = r.useMemo(( () => {
            if (t === i.pathname + i.search + i.hash)
                return [];
            let e = new Set
              , r = !1;
            if (n.forEach((t => {
                var n;
                let a = o.routes[t.route.id];
                a && a.hasLoader && (!p.some((e => e.route.id === t.route.id)) && t.route.id in c && null !== (n = s[t.route.id]) && void 0 !== n && n.shouldRevalidate || a.hasClientLoader ? r = !0 : e.add(t.route.id))
            }
            )),
            0 === e.size)
                return [];
            let a = Ve(t);
            return r && e.size > 0 && a.searchParams.set("_routes", n.filter((t => e.has(t.route.id))).map((e => e.route.id)).join(",")),
            [a.pathname + a.search]
        }
        ), [c, i, o, p, n, t, s])
          , g = r.useMemo(( () => function(e, t) {
            return He(e.map((e => {
                let n = t.routes[e.route.id];
                if (!n)
                    return [];
                let r = [n.module];
                return n.imports && (r = r.concat(n.imports)),
                r
            }
            )).flat(1))
        }(m, o)), [m, o])
          , v = nt(m);
        return r.createElement(r.Fragment, null, h.map((e => r.createElement("link", u({
            key: e,
            rel: "prefetch",
            as: "fetch",
            href: e
        }, a)))), g.map((e => r.createElement("link", u({
            key: e,
            rel: "modulepreload",
            href: e
        }, a)))), v.map((e => {
            let {key: t, link: n} = e;
            return r.createElement("link", u({
                key: t
            }, n))
        }
        )))
    }
    Xe.displayName = "FrameworkContext";
    var at = !1;
    function lt(e) {
        let {manifest: t, serverHandoffString: n, isSpaMode: a, renderMeta: l} = Je()
          , {router: i, static: o, staticContext: s} = Ke()
          , {matches: c} = Ye()
          , d = Qe(a);
        l && (l.didRenderScripts = !0);
        let f = et(c, null, a);
        r.useEffect(( () => {
            at = !0
        }
        ), []);
        let p = r.useMemo(( () => {
            var a;
            let l = s ? "window.__reactRouterContext = ".concat(n, ";").concat("window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());") : " "
              , c = o ? "".concat(null !== (a = t.hmr) && void 0 !== a && a.runtime ? "import ".concat(JSON.stringify(t.hmr.runtime), ";") : "").concat(d ? "" : "import ".concat(JSON.stringify(t.url)), ";\n").concat(f.map(( (e, n) => "import * as route".concat(n, " from ").concat(JSON.stringify(t.routes[e.route.id].module), ";"))).join("\n"), "\n  ").concat(d ? "window.__reactRouterManifest = ".concat(JSON.stringify(function(e, t) {
                let n = new Set(t.state.matches.map((e => e.route.id)))
                  , r = t.state.location.pathname.split("/").filter(Boolean)
                  , a = ["/"];
                for (r.pop(); r.length > 0; )
                    a.push("/".concat(r.join("/"))),
                    r.pop();
                a.forEach((e => {
                    let r = N(t.routes, e, t.basename);
                    r && r.forEach((e => n.add(e.route.id)))
                }
                ));
                let l = [...n].reduce(( (t, n) => Object.assign(t, {
                    [n]: e.routes[n]
                })), {});
                return u(u({}, e), {}, {
                    routes: l
                })
            }(t, i), null, 2), ";") : "", "\n  window.__reactRouterRouteModules = {").concat(f.map(( (e, t) => "".concat(JSON.stringify(e.route.id), ":route").concat(t))).join(","), "};\n\nimport(").concat(JSON.stringify(t.entry.module), ");") : " ";
            return r.createElement(r.Fragment, null, r.createElement("script", u(u({}, e), {}, {
                suppressHydrationWarning: !0,
                dangerouslySetInnerHTML: $e(l),
                type: void 0
            })), r.createElement("script", u(u({}, e), {}, {
                suppressHydrationWarning: !0,
                dangerouslySetInnerHTML: $e(c),
                type: "module",
                async: !0
            })))
        }
        ), [])
          , m = f.map((e => {
            let n = t.routes[e.route.id];
            return n ? (n.imports || []).concat([n.module]) : []
        }
        )).flat(1)
          , h = at ? [] : t.entry.imports.concat(m);
        return at ? null : r.createElement(r.Fragment, null, d ? null : r.createElement("link", {
            rel: "modulepreload",
            href: t.url,
            crossOrigin: e.crossOrigin
        }), r.createElement("link", {
            rel: "modulepreload",
            href: t.entry.module,
            crossOrigin: e.crossOrigin
        }), (g = h,
        [...new Set(g)]).map((t => r.createElement("link", {
            key: t,
            rel: "modulepreload",
            href: t,
            crossOrigin: e.crossOrigin
        }))), p);
        var g
    }
    function it() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return e => {
            t.forEach((t => {
                "function" === typeof t ? t(e) : null != t && (t.current = e)
            }
            ))
        }
    }
    var ot = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement;
    try {
        ot && (window.__reactRouterVersion = "7.1.5")
    } catch (Wt) {}
    function st(e) {
        let {basename: t, children: n, window: a} = e
          , l = r.useRef();
        null == l.current && (l.current = v({
            window: a,
            v5Compat: !0
        }));
        let i = l.current
          , [o,s] = r.useState({
            action: i.action,
            location: i.location
        })
          , c = r.useCallback((e => {
            r.startTransition(( () => s(e)))
        }
        ), [s]);
        return r.useLayoutEffect(( () => i.listen(c)), [i, c]),
        r.createElement(Ce, {
            basename: t,
            children: n,
            location: o.location,
            navigationType: o.action,
            navigator: i
        })
    }
    var ct = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
      , ut = r.forwardRef((function(e, t) {
        let n, {onClick: a, discover: i="render", prefetch: o="none", relative: s, reloadDocument: c, replace: d, state: f, target: m, to: h, preventScrollReset: g, viewTransition: v} = e, x = l(e, p), {basename: w} = r.useContext(re), S = "string" === typeof h && ct.test(h), j = !1;
        if ("string" === typeof h && S && (n = h,
        ot))
            try {
                let e = new URL(window.location.href)
                  , t = h.startsWith("//") ? new URL(e.protocol + h) : new URL(h)
                  , n = W(t.pathname, w);
                t.origin === e.origin && null != n ? h = n + t.search + t.hash : j = !0
            } catch (Wt) {
                b(!1, '<Link to="'.concat(h, '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.'))
            }
        let N = function(e) {
            let {relative: t} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            y(oe(), "useHref() may be used only in the context of a <Router> component.");
            let {basename: n, navigator: a} = r.useContext(re)
              , {hash: l, pathname: i, search: o} = fe(e, {
                relative: t
            })
              , s = i;
            return "/" !== n && (s = "/" === i ? n : V([n, i])),
            a.createHref({
                pathname: s,
                search: o,
                hash: l
            })
        }(h, {
            relative: s
        })
          , [E,C,T] = function(e, t) {
            let n = r.useContext(Xe)
              , [a,l] = r.useState(!1)
              , [i,o] = r.useState(!1)
              , {onFocus: s, onBlur: c, onMouseEnter: u, onMouseLeave: d, onTouchStart: f} = t
              , p = r.useRef(null);
            r.useEffect(( () => {
                if ("render" === e && o(!0),
                "viewport" === e) {
                    let e = new IntersectionObserver((e => {
                        e.forEach((e => {
                            o(e.isIntersecting)
                        }
                        ))
                    }
                    ),{
                        threshold: .5
                    });
                    return p.current && e.observe(p.current),
                    () => {
                        e.disconnect()
                    }
                }
            }
            ), [e]),
            r.useEffect(( () => {
                if (a) {
                    let e = setTimeout(( () => {
                        o(!0)
                    }
                    ), 100);
                    return () => {
                        clearTimeout(e)
                    }
                }
            }
            ), [a]);
            let m = () => {
                l(!0)
            }
              , h = () => {
                l(!1),
                o(!1)
            }
            ;
            return n ? "intent" !== e ? [i, p, {}] : [i, p, {
                onFocus: Ze(s, m),
                onBlur: Ze(c, h),
                onMouseEnter: Ze(u, m),
                onMouseLeave: Ze(d, h),
                onTouchStart: Ze(f, m)
            }] : [!1, p, {}]
        }(o, x)
          , P = function(e) {
            let {target: t, replace: n, state: a, preventScrollReset: l, relative: i, viewTransition: o} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , s = de()
              , c = se()
              , u = fe(e, {
                relative: i
            });
            return r.useCallback((r => {
                if (function(e, t) {
                    return 0 === e.button && (!t || "_self" === t) && !function(e) {
                        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                    }(e)
                }(r, t)) {
                    r.preventDefault();
                    let t = void 0 !== n ? n : k(c) === k(u);
                    s(e, {
                        replace: t,
                        state: a,
                        preventScrollReset: l,
                        relative: i,
                        viewTransition: o
                    })
                }
            }
            ), [c, s, u, n, a, t, e, l, i, o])
        }(h, {
            replace: d,
            state: f,
            target: m,
            preventScrollReset: g,
            relative: s,
            viewTransition: v
        });
        let L = r.createElement("a", u(u(u({}, x), T), {}, {
            href: n || N,
            onClick: j || c ? a : function(e) {
                a && a(e),
                e.defaultPrevented || P(e)
            }
            ,
            ref: it(t, C),
            target: m,
            "data-discover": S || "render" !== i ? void 0 : "true"
        }));
        return E && !S ? r.createElement(r.Fragment, null, L, r.createElement(tt, {
            page: N
        })) : L
    }
    ));
    ut.displayName = "Link",
    r.forwardRef((function(e, t) {
        let {"aria-current": n="page", caseSensitive: a=!1, className: i="", end: o=!1, style: s, to: c, viewTransition: d, children: f} = e
          , p = l(e, m)
          , h = fe(c, {
            relative: p.relative
        })
          , g = se()
          , v = r.useContext(Z)
          , {navigator: b, basename: x} = r.useContext(re)
          , w = null != v && function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = r.useContext(ee);
            y(null != n, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
            let {basename: a} = pt("useViewTransitionState")
              , l = fe(e, {
                relative: t.relative
            });
            if (!n.isTransitioning)
                return !1;
            let i = W(n.currentLocation.pathname, a) || n.currentLocation.pathname
              , o = W(n.nextLocation.pathname, a) || n.nextLocation.pathname;
            return null != D(l.pathname, o) || null != D(l.pathname, i)
        }(h) && !0 === d
          , k = b.encodeLocation ? b.encodeLocation(h).pathname : h.pathname
          , S = g.pathname
          , j = v && v.navigation && v.navigation.location ? v.navigation.location.pathname : null;
        a || (S = S.toLowerCase(),
        j = j ? j.toLowerCase() : null,
        k = k.toLowerCase()),
        j && x && (j = W(j, x) || j);
        const N = "/" !== k && k.endsWith("/") ? k.length - 1 : k.length;
        let E, C = S === k || !o && S.startsWith(k) && "/" === S.charAt(N), T = null != j && (j === k || !o && j.startsWith(k) && "/" === j.charAt(k.length)), P = {
            isActive: C,
            isPending: T,
            isTransitioning: w
        }, L = C ? n : void 0;
        E = "function" === typeof i ? i(P) : [i, C ? "active" : null, T ? "pending" : null, w ? "transitioning" : null].filter(Boolean).join(" ");
        let z = "function" === typeof s ? s(P) : s;
        return r.createElement(ut, u(u({}, p), {}, {
            "aria-current": L,
            className: E,
            ref: t,
            style: z,
            to: c,
            viewTransition: d
        }), "function" === typeof f ? f(P) : f)
    }
    )).displayName = "NavLink";
    var dt = r.forwardRef(( (e, t) => {
        let {discover: n="render", fetcherKey: a, navigate: i, reloadDocument: o, replace: s, state: c, method: d=Le, action: f, onSubmit: p, relative: m, preventScrollReset: g, viewTransition: v} = e
          , b = l(e, h)
          , x = gt()
          , w = function(e) {
            let {relative: t} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , {basename: n} = r.useContext(re)
              , a = r.useContext(le);
            y(a, "useFormAction must be used inside a RouteContext");
            let[l] = a.matches.slice(-1)
              , i = u({}, fe(e || ".", {
                relative: t
            }))
              , o = se();
            if (null == e) {
                i.search = o.search;
                let e = new URLSearchParams(i.search)
                  , t = e.getAll("index");
                if (t.some((e => "" === e))) {
                    e.delete("index"),
                    t.filter((e => e)).forEach((t => e.append("index", t)));
                    let n = e.toString();
                    i.search = n ? "?".concat(n) : ""
                }
            }
            e && "." !== e || !l.route.index || (i.search = i.search ? i.search.replace(/^\?/, "?index&") : "?index");
            "/" !== n && (i.pathname = "/" === i.pathname ? n : V([n, i.pathname]));
            return k(i)
        }(f, {
            relative: m
        })
          , S = "get" === d.toLowerCase() ? "get" : "post"
          , j = "string" === typeof f && ct.test(f);
        return r.createElement("form", u(u({
            ref: t,
            method: S,
            action: w,
            onSubmit: o ? p : e => {
                if (p && p(e),
                e.defaultPrevented)
                    return;
                e.preventDefault();
                let t = e.nativeEvent.submitter
                  , n = (null === t || void 0 === t ? void 0 : t.getAttribute("formmethod")) || d;
                x(t || e.currentTarget, {
                    fetcherKey: a,
                    method: n,
                    navigate: i,
                    replace: s,
                    state: c,
                    relative: m,
                    preventScrollReset: g,
                    viewTransition: v
                })
            }
        }, b), {}, {
            "data-discover": j || "render" !== n ? void 0 : "true"
        }))
    }
    ));
    function ft(e) {
        return "".concat(e, " must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.")
    }
    function pt(e) {
        let t = r.useContext(J);
        return y(t, ft(e)),
        t
    }
    dt.displayName = "Form";
    var mt = 0
      , ht = () => "__".concat(String(++mt), "__");
    function gt() {
        let {router: e} = pt("useSubmit")
          , {basename: t} = r.useContext(re)
          , n = ke("useRouteId");
        return r.useCallback((async function(r) {
            let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , {action: l, method: i, encType: o, formData: s, body: c} = Me(r, t);
            if (!1 === a.navigate) {
                let t = a.fetcherKey || ht();
                await e.fetch(t, n, a.action || l, {
                    preventScrollReset: a.preventScrollReset,
                    formData: s,
                    body: c,
                    formMethod: a.method || i,
                    formEncType: a.encType || o,
                    flushSync: a.flushSync
                })
            } else
                await e.navigate(a.action || l, {
                    preventScrollReset: a.preventScrollReset,
                    formData: s,
                    body: c,
                    formMethod: a.method || i,
                    formEncType: a.encType || o,
                    replace: a.replace,
                    state: a.state,
                    fromRouteId: n,
                    flushSync: a.flushSync,
                    viewTransition: a.viewTransition
                })
        }
        ), [e, t, n])
    }
    new TextEncoder;
    var vt = n(579);
    const yt = {
        sidebar: {
            width: "250px",
            backgroundColor: "#5d2f0a",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            borderRight: "1px solid #dee2e6",
            padding: "20px 0",
            transition: "transform 0.3s ease",
            zIndex: 1e3,
            overflowY: "auto",
            overflowX: "hidden"
        },
        sidebarMobile: {
            width: "80vw",
            maxWidth: "300px"
        },
        sidebarCollapsed: {
            transform: "translateX(-100%)"
        },
        toggleButton: {
            position: "fixed",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "#5d2f0a",
            color: "#ecf0f1",
            border: "none",
            padding: "15px",
            borderRadius: "5px",
            cursor: "pointer",
            zIndex: 1002,
            transition: "all 0.3s ease",
            fontSize: "18px",
            boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        toggleButtonExpanded: {
            left: "260px"
        },
        sidebarOverlay: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
            display: "none"
        },
        sidebarOverlayActive: {
            display: "block"
        },
        sidebarHeader: {
            padding: "0 20px 20px",
            borderBottom: "1px solid #dee2e6"
        },
        sidebarHeaderTitle: {
            margin: 0,
            color: "#ecf0f1",
            fontSize: "1.2em"
        },
        sidebarHeaderTitleMobile: {
            fontSize: "1.1em"
        },
        sidebarNav: {
            padding: "20px"
        },
        sidebarNavMobile: {
            padding: "15px"
        },
        navLink: {
            display: "block",
            padding: "12px 12px",
            color: "#ecf0f1",
            textDecoration: "none",
            borderRadius: "4px",
            marginBottom: "8px"
        },
        navLinkMobile: {
            padding: "10px 10px",
            fontSize: "0.95em"
        },
        navLinkActive: {
            backgroundColor: "#a0522d",
            color: "white",
            borderRadius: "4px"
        },
        navGroup: {
            margin: "8px 0"
        },
        navGroupTitle: {
            fontSize: "1em",
            color: "#ecf0f1",
            margin: "10px 0",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%"
        },
        navGroupLink: {
            flex: 1,
            display: "flex",
            alignItems: "center"
        },
        navGroupTitleMobile: {
            fontSize: "0.95em"
        },
        subNav: {
            paddingLeft: "20px",
            display: "none"
        },
        subNavOpen: {
            display: "block",
            paddingLeft: "20px",
            marginTop: "8px"
        },
        subNavMobile: {
            paddingLeft: "15px"
        },
        arrow: {
            transition: "transform 0.3s",
            marginLeft: "10px",
            display: "flex",
            alignItems: "center",
            flexShrink: 0
        },
        arrowOpen: {
            transform: "rotate(90deg)"
        }
    };
    const bt = function(e) {
        let {onToggle: t} = e;
        const n = se()
          , [a,l] = (0,
        r.useState)(( () => ({
            committee: n.pathname.includes("committee"),
            "mc-papers": !0,
            "wasn-papers": !0
        })))
          , [i,o] = (0,
        r.useState)(!0)
          , [s,c] = (0,
        r.useState)(!1)
          , [d,f] = (0,
        r.useState)(0);
        (0,
        r.useEffect)(( () => {
            const e = () => {
                const e = window.innerWidth
                  , n = e <= 768;
                c(n),
                n ? (f(Math.min(.8 * e, 300)),
                o(!1),
                t && t(!1)) : (f(250),
                o(!0),
                t && t(!0))
            }
            ;
            return e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
        }
        ), []),
        (0,
        r.useEffect)(( () => {
            l((e => ({
                committee: n.pathname.includes("committee"),
                "mc-papers": !0,
                "wasn-papers": !0
            })))
        }
        ), [n.pathname]);
        const p = e => {
            l((t => u(u({}, t), {}, {
                [e]: !t[e]
            })))
        }
        ;
        return (0,
        vt.jsxs)(vt.Fragment, {
            children: [(0,
            vt.jsx)("div", {
                style: u(u({}, yt.sidebarOverlay), s && i ? yt.sidebarOverlayActive : {}),
                onClick: () => {
                    s && i && (o(!1),
                    t && t(!1))
                }
            }), (0,
            vt.jsxs)("div", {
                style: u(u(u({}, yt.sidebar), s ? yt.sidebarMobile : {}), i ? {} : yt.sidebarCollapsed),
                children: [(0,
                vt.jsx)("div", {
                    style: yt.sidebarHeader,
                    children: (0,
                    vt.jsx)("h3", {
                        style: u(u({}, yt.sidebarHeaderTitle), s ? yt.sidebarHeaderTitleMobile : {}),
                        children: "2025 MC & WASN"
                    })
                }), (0,
                vt.jsxs)("nav", {
                    style: u(u({}, yt.sidebarNav), s ? yt.sidebarNavMobile : {}),
                    children: [(0,
                    vt.jsx)(ut, {
                        to: "/",
                        style: u(u(u({}, yt.navLink), s ? yt.navLinkMobile : {}), "/" === n.pathname ? yt.navLinkActive : {}),
                        onClick: () => {
                            s && (o(!1),
                            t && t(!1))
                        }
                        ,
                        children: "\u9996\u9801"
                    }), (0,
                    vt.jsxs)("div", {
                        style: yt.navGroup,
                        children: [(0,
                        vt.jsxs)("div", {
                            style: u(u({}, yt.navGroupTitle), s ? yt.navGroupTitleMobile : {}),
                            onClick: () => p("committee"),
                            children: [(0,
                            vt.jsx)("div", {
                                style: yt.navGroupLink,
                                children: (0,
                                vt.jsx)(ut, {
                                    to: "/committee",
                                    style: u(u(u(u({}, yt.navLink), s ? yt.navLinkMobile : {}), "/committee" === n.pathname ? yt.navLinkActive : {}), {}, {
                                        marginBottom: 0,
                                        width: "100%"
                                    }),
                                    onClick: e => {
                                        e.stopPropagation(),
                                        s && (o(!1),
                                        t && t(!1))
                                    }
                                    ,
                                    children: "\u5927\u6703\u7d44\u7e54"
                                })
                            }), (0,
                            vt.jsx)("span", {
                                style: u(u({}, yt.arrow), a.committee ? yt.arrowOpen : {}),
                                children: "\u25b6"
                            })]
                        }), (0,
                        vt.jsxs)("div", {
                            style: u(u(u({}, yt.subNav), s ? yt.subNavMobile : {}), a.committee ? yt.subNavOpen : {}),
                            children: [(0,
                            vt.jsx)(ut, {
                                to: "/mc-committee",
                                style: u(u(u({}, yt.navLink), s ? yt.navLinkMobile : {}), "/mc-committee" === n.pathname ? yt.navLinkActive : {}),
                                onClick: () => {
                                    s && (o(!1),
                                    t && t(!1))
                                }
                                ,
                                children: "MC \u59d4\u54e1\u6703"
                            }), (0,
                            vt.jsx)(ut, {
                                to: "/wasn-committee",
                                style: u(u(u({}, yt.navLink), s ? yt.navLinkMobile : {}), "/wasn-committee" === n.pathname ? yt.navLinkActive : {}),
                                onClick: () => {
                                    s && (o(!1),
                                    t && t(!1))
                                }
                                ,
                                children: "WASN \u59d4\u54e1\u6703"
                            })]
                        })]
                    }), (0,
                    vt.jsx)(ut, {
                        to: "/agenda",
                        style: u(u(u({}, yt.navLink), s ? yt.navLinkMobile : {}), "/agenda" === n.pathname ? yt.navLinkActive : {}),
                        onClick: () => {
                            s && (o(!1),
                            t && t(!1))
                        }
                        ,
                        children: "\u5927\u6703\u8b70\u7a0b"
                    }), (0,
                    vt.jsx)(ut, {
                        to: "/speech",
                        style: u(u(u({}, yt.navLink), s ? yt.navLinkMobile : {}), "/speech" === n.pathname ? yt.navLinkActive : {}),
                        onClick: () => {
                            s && (o(!1),
                            t && t(!1))
                        }
                        ,
                        children: "\u5c08\u984c\u6f14\u8b1b"
                    }), (0,
                    vt.jsx)(ut, {
                        to: "/discussion",
                        style: u(u(u({}, yt.navLink), s ? yt.navLinkMobile : {}), "/discussion" === n.pathname ? yt.navLinkActive : {}),
                        onClick: () => {
                            s && (o(!1),
                            t && t(!1))
                        }
                        ,
                        children: "\u8de8\u57df\u8ad6\u58c7"
                    }), (0,
                    vt.jsxs)("div", {
                        style: yt.navGroup,
                        children: [(0,
                        vt.jsxs)("div", {
                            style: u(u({}, yt.navGroupTitle), s ? yt.navGroupTitleMobile : {}),
                            onClick: () => p("mc-papers"),
                            children: [(0,
                            vt.jsx)("div", {
                                style: yt.navGroupLink,
                                children: (0,
                                vt.jsx)(ut, {
                                    to: "/mc-papers",
                                    style: u(u(u(u({}, yt.navLink), s ? yt.navLinkMobile : {}), "/mc-papers" === n.pathname ? yt.navLinkActive : {}), {}, {
                                        marginBottom: 0,
                                        width: "100%"
                                    }),
                                    onClick: e => {
                                        e.stopPropagation(),
                                        s && (o(!1),
                                        t && t(!1))
                                    }
                                    ,
                                    children: "MC \u8ad6\u6587\u5fb5\u7a3f\u4e3b\u984c"
                                })
                            }), (0,
                            vt.jsx)("span", {
                                style: u(u({}, yt.arrow), a["mc-papers"] ? yt.arrowOpen : {}),
                                children: "\u25b6"
                            })]
                        }), (0,
                        vt.jsx)("div", {
                            style: u(u(u({}, yt.subNav), s ? yt.subNavMobile : {}), a["mc-papers"] ? yt.subNavOpen : {}),
                            children: (0,
                            vt.jsx)(ut, {
                                to: "/mc-submission",
                                style: u(u(u({}, yt.navLink), s ? yt.navLinkMobile : {}), "/mc-submission" === n.pathname ? yt.navLinkActive : {}),
                                onClick: () => {
                                    s && (o(!1),
                                    t && t(!1))
                                }
                                ,
                                children: "MC \u8ad6\u6587\u6295\u7a3f"
                            })
                        })]
                    }), (0,
                    vt.jsxs)("div", {
                        style: yt.navGroup,
                        children: [(0,
                        vt.jsxs)("div", {
                            style: u(u({}, yt.navGroupTitle), s ? yt.navGroupTitleMobile : {}),
                            onClick: () => p("wasn-papers"),
                            children: [(0,
                            vt.jsx)("div", {
                                style: yt.navGroupLink,
                                children: (0,
                                vt.jsx)(ut, {
                                    to: "/wasn-papers",
                                    style: u(u(u(u({}, yt.navLink), s ? yt.navLinkMobile : {}), "/wasn-papers" === n.pathname ? yt.navLinkActive : {}), {}, {
                                        marginBottom: 0,
                                        width: "100%"
                                    }),
                                    onClick: e => {
                                        e.stopPropagation(),
                                        s && (o(!1),
                                        t && t(!1))
                                    }
                                    ,
                                    children: "WASN \u8ad6\u6587\u5fb5\u7a3f\u4e3b\u984c"
                                })
                            }), (0,
                            vt.jsx)("span", {
                                style: u(u({}, yt.arrow), a["wasn-papers"] ? yt.arrowOpen : {}),
                                children: "\u25b6"
                            })]
                        }), (0,
                        vt.jsx)("div", {
                            style: u(u(u({}, yt.subNav), s ? yt.subNavMobile : {}), a["wasn-papers"] ? yt.subNavOpen : {}),
                            children: (0,
                            vt.jsx)(ut, {
                                to: "/wasn-submission",
                                style: u(u(u({}, yt.navLink), s ? yt.navLinkMobile : {}), "/wasn-submission" === n.pathname ? yt.navLinkActive : {}),
                                onClick: () => {
                                    s && (o(!1),
                                    t && t(!1))
                                }
                                ,
                                children: "WASN \u8ad6\u6587\u6295\u7a3f"
                            })
                        })]
                    }), (0,
                    vt.jsx)(ut, {
                        to: "/registration",
                        style: u(u(u({}, yt.navLink), s ? yt.navLinkMobile : {}), "/registration" === n.pathname ? yt.navLinkActive : {}),
                        onClick: () => {
                            s && (o(!1),
                            t && t(!1))
                        }
                        ,
                        children: "\u5927\u6703\u8a3b\u518a"
                    }), (0,
                    vt.jsx)(ut, {
                        to: "/transportation",
                        style: u(u(u({}, yt.navLink), s ? yt.navLinkMobile : {}), "/transportation" === n.pathname ? yt.navLinkActive : {}),
                        onClick: () => {
                            s && (o(!1),
                            t && t(!1))
                        }
                        ,
                        children: "\u4ea4\u901a\u8cc7\u8a0a"
                    }), (0,
                    vt.jsx)(ut, {
                        to: "/sponsorship",
                        style: u(u(u({}, yt.navLink), s ? yt.navLinkMobile : {}), "/sponsorship" === n.pathname ? yt.navLinkActive : {}),
                        onClick: () => {
                            s && (o(!1),
                            t && t(!1))
                        }
                        ,
                        children: "\u8d0a\u52a9\u8fa6\u6cd5"
                    })]
                })]
            }), (0,
            vt.jsx)("button", {
                style: u(u({}, yt.toggleButton), {}, {
                    left: i ? s ? "".concat(d + 10, "px") : "260px" : "10px"
                }),
                onClick: () => {
                    const e = !i;
                    o(e),
                    t && t(e)
                }
                ,
                "aria-label": i ? "Collapse sidebar" : "Expand sidebar",
                children: i ? "\u25c0" : "\u25b6"
            })]
        })
    }
      , xt = {
        footer: {
            backgroundColor: "#5d2f0a",
            color: "#ecf0f1",
            padding: "30px",
            borderRadius: "8px",
            marginTop: "40px",
            textAlign: "center"
        }
    };
    const wt = function() {
        return (0,
        vt.jsxs)("footer", {
            style: xt.footer,
            children: [(0,
            vt.jsx)("p", {
                children: "\u570b\u7acb\u81fa\u7063\u5927\u8cc7\u8a0a\u5de5\u7a0b\u5b78\u7cfb MC/WASN 2025\u5de5\u4f5c\u5c0f\u7d44"
            }), (0,
            vt.jsx)("p", {
                children: "\u806f\u7d61\u4eba\uff1a\u5ed6\u829d\u52e4\u3000E-mail\uff1amc.wasn.2025@gmail.com"
            }), (0,
            vt.jsx)("p", {
                children: "\xa9 MC/WASN 2025"
            })]
        })
    }
      , kt = n.p + "static/media/background.d803e43d2dbb82cb3e77.png"
      , St = () => {
        const [e,t] = (0,
        r.useState)(!1)
          , [n,a] = (0,
        r.useState)(!0);
        (0,
        r.useEffect)(( () => {
            const e = () => {
                const e = window.innerWidth;
                t(e <= 768),
                a(e > 768)
            }
            ;
            return e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
        }
        ), []);
        return (0,
        vt.jsxs)("div", {
            style: {
                display: "flex",
                position: "relative"
            },
            children: [(0,
            vt.jsx)(bt, {
                onToggle: e => {
                    a(e)
                }
            }), (0,
            vt.jsx)("div", {
                className: "main-content",
                style: {
                    marginLeft: !e && n ? "250px" : "0"
                },
                children: (0,
                vt.jsxs)("div", {
                    className: "container",
                    children: [(0,
                    vt.jsxs)("header", {
                        className: "header",
                        style: {
                            backgroundImage: "url(".concat(kt, ")"),
                            backgroundSize: "cover",
                            backgroundPosition: "50% 60%",
                            backgroundRepeat: "no-repeat"
                        },
                        children: [(0,
                        vt.jsx)("h1", {
                            className: "title",
                            children: "\u884c\u52d5\u8a08\u7b97\u7814\u8a0e\u6703\u66a8 \u7121\u7dda\u3001\u96a8\u610f\u53ca\u611f\u6e2c\u7db2\u8def\u7814\u8a0e\u6703"
                        }), (0,
                        vt.jsx)("h2", {
                            className: "subtitle",
                            children: "2025\u5e7408\u670825-26\u65e5 @ \u96c6\u601d\u53f0\u5927\u6703\u8b70\u4e2d\u5fc3"
                        }), (0,
                        vt.jsx)("p", {
                            className: "highlight-text",
                            children: "\u9081\u5411\u81ea\u4e3b\u667a\u6167\u7684\u524d\u77bb\u884c\u52d5\u901a\u8a0a\u8207\u611f\u77e5\u6280\u8853"
                        })]
                    }), (0,
                    vt.jsxs)("div", {
                        className: "content-wrapper ".concat(e ? "content-wrapper-mobile" : ""),
                        children: [(0,
                        vt.jsxs)("section", {
                            className: "section",
                            children: [(0,
                            vt.jsx)("h2", {
                                className: "subtitle",
                                children: "\u516c\u544a\u4e8b\u9805"
                            }), (0,
                            vt.jsxs)("ul", {
                                className: "list",
                                children: [(0,
                                vt.jsx)("li", {
                                    className: "list-item",
                                    children: "(2025/03/19) \u7814\u8a0e\u6703\u7db2\u7ad9\u6210\u7acb"
                                }), (0,
                                vt.jsx)("li", {
                                    className: "list-item",
                                    children: "(2025/04/30) \u6295\u7a3f\u7cfb\u7d71\u4e0a\u7dda"
                                }), (0,
                                vt.jsxs)("li", {
                                    className: "list-item",
                                    children: ["(2025/04/30) ", (0,
                                    vt.jsx)("a", {
                                        href: "https://drive.google.com/file/d/1ZsKR6yNjg3U0nO-WKzjj5eYrGW6iJ7wK/view?usp=sharing",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "link",
                                        style: {
                                            textDecoration: "underline"
                                        },
                                        children: "CFP\u9023\u7d50"
                                    })]
                                }), (0,
                                vt.jsxs)("li", {
                                    className: "list-item",
                                    children: ["(2025/05/20) \u7814\u8a0e\u6703\u5fb5\u6c42\u8d0a\u52a9\u5ee0\u5546 (", (0,
                                    vt.jsx)(ut, {
                                        to: "./sponsorship",
                                        className: "link",
                                        style: {
                                            textDecoration: "underline"
                                        },
                                        children: "\u5ee0\u5546\u8d0a\u52a9\u8fa6\u6cd5"
                                    }), ")"]
                                }), (0,
                                vt.jsxs)("li", {
                                    className: "list-item",
                                    children: ["(2025/06/13) \u6295\u7a3f\u7db2\u5740\u8acb\u898b\u9023\u7d50(", (0,
                                    vt.jsx)(ut, {
                                        to: "./mc-submission",
                                        className: "link",
                                        style: {
                                            textDecoration: "underline"
                                        },
                                        children: "MC2025"
                                    }), ")\u3001 (", (0,
                                    vt.jsx)(ut, {
                                        to: "./wasn-submission",
                                        className: "link",
                                        style: {
                                            textDecoration: "underline"
                                        },
                                        children: "WASN2025"
                                    }), ")\uff0c\u6b61\u8fce\u8e34\u8e8d\u6295\u7a3f"]
                                }), (0,
                                vt.jsxs)("li", {
                                    className: "list-item",
                                    children: ["(2025/06/13) \u8b70\u7a0b\u8868\u66f4\u65b0\uff0c\u8a73\u60c5\u8acb\u898b\u9023\u7d50(", (0,
                                    vt.jsx)(ut, {
                                        to: "./agenda",
                                        className: "link",
                                        style: {
                                            textDecoration: "underline"
                                        },
                                        children: "\u5927\u6703\u8b70\u7a0b"
                                    }), ")"]
                                }), (0,
                                vt.jsxs)("li", {
                                    className: "list-item",
                                    children: ["(2025/06/13) \u5c08\u984c\u6f14\u8b1b\u3001\u8de8\u57df\u8ad6\u58c7\u66f4\u65b0\uff0c\u8a73\u60c5\u8acb\u898b\u9023\u7d50(", (0,
                                    vt.jsx)(ut, {
                                        to: "./speech",
                                        className: "link",
                                        style: {
                                            textDecoration: "underline"
                                        },
                                        children: "\u5c08\u984c\u6f14\u8b1b"
                                    }), ")\u3001 (", (0,
                                    vt.jsx)(ut, {
                                        to: "./discussion",
                                        className: "link",
                                        style: {
                                            textDecoration: "underline"
                                        },
                                        children: "\u8de8\u57df\u8ad6\u58c7"
                                    }), ")"]
                                })]
                            })]
                        }), (0,
                        vt.jsxs)("section", {
                            className: "section",
                            children: [(0,
                            vt.jsx)("h2", {
                                className: "subtitle",
                                children: "\u91cd\u8981\u65e5\u671f"
                            }), (0,
                            vt.jsxs)("ul", {
                                className: "list",
                                children: [(0,
                                vt.jsxs)("li", {
                                    className: "list-item important-date-item",
                                    children: [(0,
                                    vt.jsx)("span", {
                                        children: "\u8ad6\u6587\u6295\u7a3f\u622a\u6b62:"
                                    }), (0,
                                    vt.jsxs)("div", {
                                        children: [(0,
                                        vt.jsx)("div", {
                                            children: "2025\u5e7407\u67084\u65e5(Fri) Firm deadline"
                                        }), (0,
                                        vt.jsx)("div", {
                                            style: {
                                                textDecoration: "line-through"
                                            },
                                            children: "2025\u5e7406\u670827\u65e5(Fri)"
                                        }), (0,
                                        vt.jsx)("div", {
                                            style: {
                                                textDecoration: "line-through"
                                            },
                                            children: "2025\u5e7406\u670813\u65e5(Fri)"
                                        }), (0,
                                        vt.jsx)("div", {
                                            style: {
                                                textDecoration: "line-through"
                                            },
                                            children: "2025\u5e7406\u670806\u65e5(Fri)"
                                        })]
                                    })]
                                }), (0,
                                vt.jsx)("li", {
                                    className: "list-item",
                                    children: "\u5be9\u67e5\u7d50\u679c\u901a\u77e5: 2025\u5e7407\u670818\u65e5 (Fri)"
                                }), (0,
                                vt.jsx)("li", {
                                    className: "list-item",
                                    children: "\u5b8c\u7a3f\u4e0a\u50b3\u622a\u6b62: 2025\u5e7408\u670801\u65e5 (Fri)"
                                }), (0,
                                vt.jsx)("li", {
                                    className: "list-item",
                                    children: "\u8ad6\u6587\u8a3b\u518a\u622a\u6b62: 2025\u5e7408\u670808\u65e5 (Fri)"
                                })]
                            })]
                        })]
                    }), (0,
                    vt.jsxs)("section", {
                        className: "section",
                        children: [(0,
                        vt.jsx)("h2", {
                            className: "subtitle",
                            children: "\u95dc\u65bcMC 2025"
                        }), (0,
                        vt.jsx)("p", {
                            children: "\u96a8\u8457\u884c\u52d5\u901a\u8a0a\u6280\u8853\uff085G/6G\uff09\u7684\u8fc5\u901f\u767c\u5c55\uff0c\u884c\u52d5\u8a08\u7b97\uff08Mobile Computing, MC\uff09 \u5df2\u6210\u70ba\u73fe\u4ee3\u79d1\u6280\u8207\u7522\u696d\u5275\u65b0\u7684\u95dc\u9375\u9818\u57df\u3002 MC 2025 \u570b\u969b\u6703\u8b70\u532f\u805a\u5168\u7403\u5b78\u8853\u8207\u7522\u696d\u5c08\u5bb6\uff0c\u5171\u540c\u63a2\u8a0e\u884c\u52d5\u8a08\u7b97\u7684\u6700\u65b0\u9032\u5c55\u3001\u6311\u6230\u8207\u672a\u4f86\u8da8\u52e2\u3002\u672c\u5c46\u6703\u8b70\u5c07\u6db5\u84cb\u884c\u52d5\u8a08\u7b97\u8207\u901a\u8a0a\u6280\u8853\u7684\u6838\u5fc3\u8b70\u984c\uff0c\u4e26\u95dc\u6ce8\u5176\u8207\u4eba\u5de5\u667a\u6167\uff08AI\uff09\u3001\u5927\u6578\u64da\u3001\u7269\u806f\u7db2\uff08IoT\uff09\u7b49\u524d\u6cbf\u6280\u8853\u7684\u6df1\u5ea6\u878d\u5408\u3002 \u5728 5G/6G \u7db2\u8def\u7684\u9a45\u52d5\u4e0b\uff0c\u884c\u52d5\u8a08\u7b97\u7684\u61c9\u7528\u5834\u666f\u6b63\u6301\u7e8c\u62d3\u5c55\uff0c\u4e0d\u50c5\u4fc3\u9032\u9ad8\u6548\u3001\u9748\u6d3b\u7684\u8a08\u7b97\u80fd\u529b\u8207\u8cc7\u8a0a\u5b58\u53d6\uff0c\u4ea6\u63a8\u52d5\u667a\u6167\u578b\u61c9\u7528\u7684\u5feb\u901f\u767c\u5c55\u3002 \u672c\u6b21\u6703\u8b70\u5c07\u63a2\u8a0e\u7684\u8b70\u984c\u5305\u62ec\u884c\u52d5\u7db2\u8def\u9023\u901a\u6027\u3001\u7269\u806f\u7db2\u67b6\u69cb\u3001\u96f2\u7aef\u8207\u908a\u7de3\u904b\u7b97\u5354\u4f5c\u3001\u884c\u52d5\u5b89\u5168\u8207\u96b1\u79c1\u4fdd\u8b77\uff0c\u4ee5\u53ca\u667a\u6167\u61c9\u7528\u6280\u8853\uff0c\u4f8b\u5982\u7fa4\u773e\u5916\u5305\u3001\u81ea\u52d5\u99d5\u99db\u3001\u793e\u7fa4\u7db2\u7d61\u5206\u6790\u7b49\u3002\u900f\u904e\u672c\u6b21\u6703\u8b70\uff0c\u8207\u6703\u8005\u5c07\u6df1\u5165\u4e86\u89e3\u884c\u52d5\u8a08\u7b97\u7684\u6280\u8853\u6311\u6230\u8207\u672a\u4f86\u6a5f\u9047\uff0c\u4e26\u5171\u540c\u63a8\u52d5\u8a72\u9818\u57df\u7684\u5275\u65b0\u767c\u5c55\u3002 MC 2025 \u4e0d\u50c5\u63d0\u4f9b\u6700\u524d\u6cbf\u7684\u5b78\u8853\u7814\u7a76\u4ea4\u6d41\u6a5f\u6703\uff0c\u4e5f\u81f4\u529b\u65bc\u4fc3\u9032\u7522\u696d\u754c\u8207\u5b78\u8853\u754c\u7684\u5408\u4f5c\uff0c\u5171\u540c\u63a2\u7d22\u884c\u52d5\u8a08\u7b97\u6280\u8853\u5982\u4f55\u5851\u9020\u672a\u4f86\u6578\u4f4d\u751f\u6d3b\u3002 \u900f\u904e\u672c\u6b21\u570b\u969b\u6703\u8b70\uff0c\u6211\u5011\u671f\u671b\u63a8\u52d5\u66f4\u667a\u6167\u3001\u66f4\u9ad8\u6548\u3001\u66f4\u5b89\u5168\u7684\u884c\u52d5\u8a08\u7b97\u751f\u614b\uff0c\u9081\u5411\u6578\u4f4d\u5316\u3001\u667a\u80fd\u5316\u7684\u672a\u4f86\u793e\u6703\u3002"
                        })]
                    }), (0,
                    vt.jsxs)("section", {
                        className: "section",
                        children: [(0,
                        vt.jsx)("h2", {
                            className: "subtitle",
                            children: "\u95dc\u65bcWASN 2025"
                        }), (0,
                        vt.jsx)("p", {
                            children: "\u96a8\u8457\u7121\u7dda\u901a\u8a0a\u6280\u8853\u7684\u6301\u7e8c\u6f14\u9032\uff0c\u7121\u7dda\u3001\u96a8\u610f\u53ca\u611f\u6e2c\u7db2\u8def\uff08Wireless, Ad-hoc, and Sensor Networks, WASN\uff09 \u5728\u79d1\u6280\u9818\u57df\u4e2d\u767c\u63ee\u8457\u65e5\u76ca\u91cd\u8981\u7684\u4f5c\u7528\u3002 \u6b64\u985e\u7db2\u8def\u6280\u8853\u7684\u767c\u5c55\uff0c\u4e0d\u50c5\u63a8\u52d5\u4e86\u7269\u806f\u7db2\uff08IoT\uff09\u8207\u667a\u6167\u611f\u6e2c\u6280\u8853\u7684\u5ee3\u6cdb\u61c9\u7528\uff0c\u4ea6\u4fc3\u6210\u4e86\u8af8\u591a\u5275\u65b0\u5834\u666f\u7684\u5be6\u73fe\uff0c\u5982\u667a\u6167\u57ce\u5e02\u3001\u667a\u6167\u91ab\u7642\u3001\u7cbe\u6e96\u8fb2\u696d\u3001\u74b0\u5883\u76e3\u6e2c\u53ca\u5de5\u696d\u81ea\u52d5\u5316\u7b49\u3002 \u9019\u4e9b\u6280\u8853\u9032\u6b65\u70ba\u6578\u4f4d\u5316\u8f49\u578b\u6ce8\u5165\u4e86\u65b0\u7684\u52d5\u80fd\uff0c\u63a8\u52d5\u793e\u6703\u9081\u5411\u66f4\u667a\u6167\u5316\u3001\u9ad8\u6548\u80fd\u7684\u672a\u4f86\u3002 WASN \u5177\u6709\u9ad8\u5ea6\u7684\u9748\u6d3b\u6027\u8207\u64f4\u5c55\u6027\uff0c\u80fd\u5920\u5be6\u73fe\u5c0d\u74b0\u5883\u3001\u7269\u7406\u5c0d\u8c61\u53ca\u5404\u985e\u6578\u64da\u7684\u5373\u6642\u611f\u77e5\u3001\u6536\u96c6\u8207\u50b3\u8f38\uff0c\u9032\u4e00\u6b65\u63d0\u5347\u667a\u6167\u61c9\u7528\u7684\u6df1\u5ea6\u8207\u5ee3\u5ea6\u3002 \u7136\u800c\uff0c\u96a8\u8457\u7121\u7dda\u611f\u6e2c\u6280\u8853\u7684\u666e\u53ca\u8207\u61c9\u7528\u898f\u6a21\u7684\u64f4\u5927\uff0c\u4ea6\u884d\u751f\u51fa\u8af8\u591a\u6311\u6230\uff0c\u5305\u62ec\u7db2\u8def\u9023\u7d50\u7a69\u5b9a\u6027\u3001\u6578\u64da\u96b1\u79c1\u4fdd\u8b77\u3001\u8cc7\u6e90\u7ba1\u7406\u8207\u80fd\u6e90\u6548\u7387\u63d0\u5347\u3001\u7db2\u8def\u5b89\u5168\u98a8\u96aa\u7b49\uff0c\u4e9f\u9700\u900f\u904e\u6280\u8853\u5275\u65b0\u8207\u5b78\u8853\u7814\u7a76\u5c0b\u6c42\u6709\u6548\u89e3\u6c7a\u65b9\u6848\u3002 WASN 2025 \u570b\u969b\u7814\u8a0e\u6703 \u5c07\u532f\u805a\u5168\u7403\u5b78\u8853\u754c\u3001\u7522\u696d\u754c\u53ca\u653f\u5e9c\u6a5f\u69cb\u7684\u5c08\u5bb6\u5b78\u8005\uff0c\u91dd\u5c0d\u7121\u7dda\u3001\u96a8\u610f\u53ca\u611f\u6e2c\u7db2\u8def\u7684\u524d\u6cbf\u767c\u5c55\u3001\u95dc\u9375\u6280\u8853\u53ca\u61c9\u7528\u6311\u6230\u9032\u884c\u6df1\u5165\u63a2\u8a0e\u3002 \u672c\u7814\u8a0e\u6703\u65e8\u5728\u4fc3\u9032\u8de8\u9818\u57df\u7684\u5b78\u8853\u4ea4\u6d41\u8207\u6280\u8853\u5408\u4f5c\uff0c\u63a8\u52d5\u667a\u6167\u7db2\u8def\u3001\u96f2\u7aef\u8a08\u7b97\u53ca\u7121\u6240\u4e0d\u5728\u7684\u667a\u6167\u670d\u52d9\u767c\u5c55\uff0c\u4e26\u5f37\u5316\u76f8\u95dc\u7522\u696d\u7684\u6280\u8853\u7814\u767c\u8207\u7af6\u722d\u529b\u3002\u900f\u904e\u672c\u6b21\u7814\u8a0e\u6703\uff0c\u6211\u5011\u671f\u671b\u6fc0\u767c\u66f4\u591a\u5275\u65b0\u601d\u7dad\u8207\u524d\u77bb\u6027\u7814\u7a76\uff0c\u5171\u540c\u958b\u5275\u7121\u7dda\u7db2\u8def\u6280\u8853\u7684\u65b0\u7d00\u5143\u3002"
                        })]
                    }), (0,
                    vt.jsxs)("section", {
                        className: "section",
                        children: [(0,
                        vt.jsx)("p", {
                            children: "\u6307\u5c0e\u55ae\u4f4d\uff1a\u570b\u5bb6\u79d1\u5b78\u53ca\u6280\u8853\u59d4\u54e1\u6703"
                        }), (0,
                        vt.jsx)("p", {
                            children: "\u4e3b\u8fa6\u55ae\u4f4d\uff1a\u570b\u7acb\u81fa\u7063\u5927\u5b78\u8cc7\u8a0a\u5de5\u7a0b\u5b78\u7cfb"
                        }), (0,
                        vt.jsx)("p", {
                            children: "\u5354\u8fa6\u55ae\u4f4d\uff1a\u4e2d\u592e\u7814\u7a76\u9662\u8cc7\u8a0a\u79d1\u6280\u5275\u65b0\u7814\u7a76\u4e2d\u5fc3\u3001\u81fa\u5927IoX\u5275\u65b0\u7814\u7a76\u4e2d\u5fc3\u3001\u570b\u79d1\u6703\u5de5\u7a0b\u8655\u5de5\u7a0b\u79d1\u6280\u63a8\u5c55\u4e2d\u5fc3"
                        }), (0,
                        vt.jsx)("p", {
                            children: "\u4e3b\u8981\u8d0a\u52a9\u55ae\u4f4d\uff1a\u4e2d\u83ef\u96fb\u4fe1\u7814\u7a76\u9662"
                        })]
                    }), (0,
                    vt.jsx)(wt, {})]
                })
            })]
        })
    }
      , jt = () => {
        const [e,t] = (0,
        r.useState)(!1)
          , [n,a] = (0,
        r.useState)(!0);
        (0,
        r.useEffect)(( () => {
            const e = () => {
                const e = window.innerWidth;
                t(e <= 768)
            }
            ;
            return e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
        }
        ), []);
        const l = t => t.map(( (t, n) => e ? (0,
        vt.jsxs)("div", {
            className: "subtext-row",
            children: [(0,
            vt.jsxs)("div", {
                className: "name-title",
                children: [(0,
                vt.jsx)("span", {
                    children: t.name
                }), (0,
                vt.jsx)("span", {
                    children: t.title
                })]
            }), (0,
            vt.jsx)("div", {
                className: "affiliation",
                children: t.affiliation
            })]
        }, n) : (0,
        vt.jsxs)(r.Fragment, {
            children: [(0,
            vt.jsx)("p", {
                className: "subtext-item",
                children: t.name
            }), (0,
            vt.jsx)("p", {
                className: "subtext-item",
                children: t.title
            }), (0,
            vt.jsx)("p", {
                className: "subtext-item",
                children: t.affiliation
            })]
        }, n)))
          , i = {
            honorary: {
                name: "\u5ed6\u5a49\u541b",
                title: "\u6559\u6388",
                affiliation: "\u570b\u7acb\u81fa\u7063\u5927\u5b78 \u526f\u6821\u9577"
            },
            honoraryVice: {
                name: "\u9673\u5168\u6728",
                title: "\u6559\u6388",
                affiliation: "\u570b\u7acb\u4e2d\u8208\u5927\u5b78 \u526f\u6821\u9577"
            },
            steering: [{
                name: "\u6797\u4e00\u5e73",
                title: "\u6559\u6388",
                affiliation: "\u570b\u7acb\u967d\u660e\u4ea4\u901a\u5927\u5b78\u8cc7\u8a0a\u5de5\u7a0b\u5b78\u7cfb \u7d42\u8eab\u8b1b\u5ea7\u6559\u6388"
            }, {
                name: "\u8a31\u5065\u5e73",
                title: "\u6559\u6388",
                affiliation: "\u570b\u7acb\u6e05\u83ef\u5927\u5b78\u8cc7\u8a0a\u5de5\u7a0b\u5b78\u7cfb \u8b1b\u5ea7\u6559\u6388"
            }, {
                name: "\u66fe\u715c\u68cb",
                title: "\u6559\u6388",
                affiliation: "\u570b\u7acb\u967d\u660e\u4ea4\u901a\u5927\u5b78\u8cc7\u8a0a\u5de5\u7a0b\u5b78\u7cfb \u7d42\u8eab\u8b1b\u5ea7\u6559\u6388"
            }],
            general: [{
                name: "\u9004\u611b\u541b",
                title: "\u6559\u6388",
                affiliation: "\u4e2d\u592e\u7814\u7a76\u9662\u8cc7\u8a0a\u79d1\u6280\u5275\u65b0\u7814\u7a76\u4e2d\u5fc3 \u7279\u8058\u7814\u7a76\u54e1\u517c\u4e3b\u4efb"
            }, {
                name: "\u8521\u6e05\u6c60",
                title: "\u6559\u6388",
                affiliation: "\u570b\u7acb\u4e2d\u8208\u5927\u5b78\u96fb\u6a5f\u5de5\u7a0b\u5b78\u7cfb \u7279\u8058\u6559\u6388/\u96fb\u8cc7\u5b78\u9662\u9662\u9577"
            }],
            program: [{
                name: "\u5deb\u82b3\u749f",
                title: "\u526f\u6559\u6388",
                affiliation: "\u570b\u7acb\u81fa\u7063\u5927\u5b78\u8cc7\u8a0a\u5de5\u7a0b\u5b78\u7cfb"
            }, {
                name: "\u66fe\u5b78\u6587",
                title: "\u6559\u6388",
                affiliation: "\u570b\u7acb\u4e2d\u8208\u5927\u5b78\u8cc7\u8a0a\u5de5\u7a0b\u5b78\u7cfb \u7279\u8058\u6559\u6388"
            }],
            publication: [{
                name: "\u9673\u5f65\u5b89",
                title: "\u52a9\u7406\u6559\u6388",
                affiliation: "\u5143\u667a\u5927\u5b78\u8cc7\u8a0a\u5de5\u7a0b\u5b78\u7cfb"
            }, {
                name: "Edwin Ren Yi",
                title: "\u526f\u6559\u6388",
                affiliation: "University of East Anglia, UK"
            }],
            local: [{
                name: "\u8521\u6b23\u7a46",
                title: "\u6559\u6388",
                affiliation: "\u570b\u7acb\u81fa\u7063\u5927\u5b78\u8cc7\u8a0a\u5de5\u7a0b\u5b78\u7cfb \u526f\u6559\u52d9\u9577/\u81fa\u5927IoX\u5275\u65b0\u7814\u7a76\u4e2d\u5fc3\u4e3b\u4efb"
            }, {
                name: "\u6797\u5fe0\u7def",
                title: "\u526f\u6559\u6388",
                affiliation: "\u570b\u7acb\u81fa\u7063\u5927\u5b78\u8cc7\u8a0a\u5de5\u7a0b\u5b78\u7cfb \u526f\u7cfb\u4e3b\u4efb"
            }],
            publicity: [{
                name: "\u674e\u7687\u8fb0",
                title: "\u6559\u6388",
                affiliation: "\u570b\u7acb\u4e2d\u6b63\u5927\u5b78\u901a\u8a0a\u5de5\u7a0b\u5b78\u7cfb"
            }, {
                name: "\u8a31\u7d93\u570b",
                title: "\u52a9\u7406\u6559\u6388",
                affiliation: "\u570b\u7acb\u4e2d\u6b63\u5927\u5b78\u8cc7\u8a0a\u7ba1\u7406\u5b78\u7cfb"
            }],
            registration: [{
                name: "\u6797\u5950\u541b",
                title: "\u79d8\u66f8",
                affiliation: "\u570b\u7acb\u81fa\u7063\u5927\u5b78IoX\u5275\u65b0\u7814\u7a76\u4e2d\u5fc3"
            }],
            web: [{
                name: "\u7a0b\u6db5\u5be7",
                title: "\u7814\u7a76\u751f",
                affiliation: "\u570b\u7acb\u81fa\u7063\u5927\u5b78\u8cc7\u6599\u79d1\u5b78\u5b78\u4f4d\u5b78\u7a0b"
            }, {
                name: "\u674e\u4ec1\u5049",
                title: "\u7814\u7a76\u751f",
                affiliation: "\u570b\u7acb\u81fa\u7063\u5927\u5b78\u8cc7\u8a0a\u5de5\u7a0b\u5b78\u7cfb"
            }, {
                name: "\u674e\u6d69\u9298",
                title: "\u7814\u7a76\u751f",
                affiliation: "\u570b\u7acb\u81fa\u7063\u5927\u5b78\u8cc7\u8a0a\u7db2\u8def\u8207\u591a\u5a92\u9ad4\u7814\u7a76\u6240"
            }],
            financial: [{
                name: "\u5ed6\u829d\u52e4",
                title: "\u52a9\u7406",
                affiliation: "\u570b\u7acb\u81fa\u7063\u5927\u5b78\u8cc7\u8a0a\u5de5\u7a0b\u5b78\u7cfb"
            }]
        };
        return (0,
        vt.jsxs)("div", {
            style: {
                display: "flex",
                position: "relative"
            },
            children: [(0,
            vt.jsx)(bt, {
                onToggle: e => {
                    a(e)
                }
            }), (0,
            vt.jsx)("div", {
                className: "main-content",
                style: {
                    marginLeft: e ? "0" : n ? "250px" : "0"
                },
                children: (0,
                vt.jsxs)("div", {
                    className: "container",
                    children: [(0,
                    vt.jsx)("header", {
                        className: "header",
                        style: {
                            backgroundImage: "url(".concat(kt, ")")
                        },
                        children: (0,
                        vt.jsx)("h1", {
                            className: "title",
                            children: "\u5927\u6703\u7d44\u7e54"
                        })
                    }), (0,
                    vt.jsxs)("section", {
                        className: "section ".concat(e ? "section-mobile" : ""),
                        children: [(0,
                        vt.jsx)("h2", {
                            className: "subtitle-committee",
                            children: "Honorary Chair"
                        }), (0,
                        vt.jsx)("div", {
                            className: "subtext ".concat(e ? "subtext-mobile" : ""),
                            children: l([i.honorary])
                        }), (0,
                        vt.jsx)("h2", {
                            className: "subtitle-committee",
                            children: "Honorary Vice Chairs"
                        }), (0,
                        vt.jsx)("div", {
                            className: "subtext ".concat(e ? "subtext-mobile" : ""),
                            children: l([i.honoraryVice])
                        }), (0,
                        vt.jsx)("h2", {
                            className: "subtitle-committee",
                            children: "Steering Chairs"
                        }), (0,
                        vt.jsx)("div", {
                            className: "subtext ".concat(e ? "subtext-mobile" : ""),
                            children: l(i.steering)
                        }), (0,
                        vt.jsx)("h2", {
                            className: "subtitle-committee",
                            children: "General Chairs"
                        }), (0,
                        vt.jsx)("div", {
                            className: "subtext ".concat(e ? "subtext-mobile" : ""),
                            children: l(i.general)
                        }), (0,
                        vt.jsx)("h2", {
                            className: "subtitle-committee",
                            children: "Program Chairs"
                        }), (0,
                        vt.jsx)("div", {
                            className: "subtext ".concat(e ? "subtext-mobile" : ""),
                            children: l(i.program)
                        }), (0,
                        vt.jsx)("h2", {
                            className: "subtitle-committee",
                            children: "Publication Chairs"
                        }), (0,
                        vt.jsx)("div", {
                            className: "subtext ".concat(e ? "subtext-mobile" : ""),
                            children: l(i.publication)
                        }), (0,
                        vt.jsx)("h2", {
                            className: "subtitle-committee",
                            children: "Local Chairs"
                        }), (0,
                        vt.jsx)("div", {
                            className: "subtext ".concat(e ? "subtext-mobile" : ""),
                            children: l(i.local)
                        }), (0,
                        vt.jsx)("h2", {
                            className: "subtitle-committee",
                            children: "Publicity Chairs"
                        }), (0,
                        vt.jsx)("div", {
                            className: "subtext ".concat(e ? "subtext-mobile" : ""),
                            children: l(i.publicity)
                        }), (0,
                        vt.jsx)("h2", {
                            className: "subtitle-committee",
                            children: "Registration Chairs"
                        }), (0,
                        vt.jsx)("div", {
                            className: "subtext ".concat(e ? "subtext-mobile" : ""),
                            children: l(i.registration)
                        }), (0,
                        vt.jsx)("h2", {
                            className: "subtitle-committee",
                            children: "Web Chairs"
                        }), (0,
                        vt.jsx)("div", {
                            className: "subtext ".concat(e ? "subtext-mobile" : ""),
                            children: l(i.web)
                        }), (0,
                        vt.jsx)("h2", {
                            className: "subtitle-committee",
                            children: "Financial Chairs"
                        }), (0,
                        vt.jsx)("div", {
                            className: "subtext ".concat(e ? "subtext-mobile" : ""),
                            children: l(i.financial)
                        })]
                    }), (0,
                    vt.jsx)(wt, {})]
                })
            })]
        })
    }
      , Nt = () => {
        const [e,t] = (0,
        r.useState)(!1)
          , [n,a] = (0,
        r.useState)(!0);
        (0,
        r.useEffect)(( () => {
            const e = () => {
                const e = window.innerWidth;
                t(e <= 768)
            }
            ;
            return e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
        }
        ), []);
        const l = {
            column1: ["\u738b\u53cb\u7fa4\u6559\u6388 \u570b\u7acb\u4e2d\u5c71\u5927\u5b78", "\u738b\u80fd\u4e2d\u6559\u6388 \u570b\u7acb\u806f\u5408\u5927\u5b78", "\u6731\u5b97\u8ce2\u6559\u6388 \u570b\u7acb\u96f2\u6797\u79d1\u6280\u5927\u5b78", "\u5433\u4e16\u7433\u6559\u6388 \u9577\u5e9a\u5927\u5b78", "\u6797\u52fb\u851a\u6559\u6388 \u570b\u7acb\u967d\u660e\u4ea4\u901a\u5927\u5b78", "\u6797\u81f4\u5b87\u6559\u6388 \u570b\u7acb\u81fa\u7063\u6d77\u6d0b\u5927\u5b78", "\u6797\u671d\u8208\u6559\u6388 \u570b\u7acb\u81fa\u5357\u5927\u5b78", "\u80e1\u8a8c\u9e9f\u6559\u6388 \u570b\u7acb\u4e2d\u592e\u5927\u5b78", "\u4fde\u5f81\u6b66\u6559\u6388 \u4e2d\u83ef\u5927\u5b78", "\u838a\u6771\u7a4e\u6559\u6388 \u570b\u7acb\u81fa\u5317\u5927\u5b78", "\u9023\u7d39\u5b87\u6559\u6388 \u570b\u7acb\u967d\u660e\u4ea4\u901a\u5927\u5b78", "\u9ad8\u69ae\u99ff\u6559\u6388 \u570b\u7acb\u6e05\u83ef\u5927\u5b78", "\u9673\u6c38\u9686\u6559\u6388 \u570b\u7acb\u81fa\u4e2d\u79d1\u6280\u5927\u5b78", "\u9673\u5b97\u79a7\u6559\u6388 \u570b\u7acb\u81fa\u5357\u5927\u5b78", "\u9673\u6631\u5609\u6559\u6388 \u570b\u7acb\u4e2d\u592e\u5927\u5b78", "\u9673\u70c8\u6b66\u6559\u6388 \u9022\u7532\u5927\u5b78", "\u9673\u7dad\u7f8e\u6559\u6388 \u570b\u7acb\u81fa\u7063\u79d1\u6280\u5927\u5b78", "\u9673\u61f7\u6069\u6559\u6388 \u4e9e\u6d32\u5927\u5b78", "\u8a31\u667a\u821c\u6559\u6388 \u4e16\u65b0\u5927\u5b78", "\u6881\u4e16\u8070\u6559\u6388 \u570b\u7acb\u81fa\u5317\u5e02\u7acb\u5927\u5b78", "\u5f35\u5b8f\u7fa9\u6559\u6388 \u570b\u7acb\u5609\u7fa9\u5927\u5b78", "\u5f35\u6797\u714c\u6559\u6388 \u570b\u7acb\u81fa\u4e2d\u6559\u80b2\u5927\u5b78", "\u9ec3\u6c38\u767c\u6559\u6388 \u671d\u967d\u79d1\u6280\u5927\u5b78", "\u9ec3\u5d07\u6e90\u6559\u6388 \u9577\u5e9a\u5927\u5b78", "\u66fe\u5efa\u8d85\u6559\u6388 \u570b\u7acb\u967d\u660e\u4ea4\u901a\u5927\u5b78", "\u694a\u7af9\u661f\u6559\u6388 \u570b\u7acb\u6210\u529f\u5927\u5b78", "\u694a\u821c\u4ec1\u6559\u6388 \u570b\u7acb\u6e05\u83ef\u5927\u5b78", "\u8d99\u5fd7\u6c11\u6559\u6388 \u570b\u7acb\u81fa\u7063\u6d77\u6d0b\u5927\u5b78", "\u8521\u5b50\u5091\u6559\u6388 \u570b\u7acb\u653f\u6cbb\u5927\u5b78", "\u8521\u6b23\u7a46\u6559\u6388 \u570b\u7acb\u81fa\u7063\u5927\u5b78", "\u5ed6\u6587\u83ef\u6559\u6388 \u570b\u7acb\u81fa\u5317\u5546\u696d\u5927\u5b78", "\u5289\u70b3\u5b8f\u6559\u6388 \u570b\u7acb\u9ad8\u96c4\u79d1\u6280\u5927\u5b78", "\u6f58\u4ec1\u7fa9\u6559\u6388 \u570b\u7acb\u4e2d\u6b63\u5927\u5b78", "\u8b1d\u5947\u6587\u6559\u6388 \u570b\u7acb\u4e2d\u6b63\u5927\u5b78", "\u7c21\u6690\u54f2\u6559\u6388 \u570b\u7acb\u6771\u83ef\u5927\u5b78", "\u8607\u6689\u51f1\u6559\u6388 \u570b\u7acb\u864e\u5c3e\u79d1\u6280\u5927\u5b78", "\u9673\u8018\u5fd7\u6559\u6388 \u570b\u7acb\u6e05\u83ef\u5927\u5b78"],
            column2: ["\u738b\u4e15\u4e2d\u6559\u6388 \u570b\u7acb\u4e2d\u8208\u5927\u5b78", "\u77f3\u8cb4\u5e73\u6559\u6388 \u6de1\u6c5f\u5927\u5b78", "\u5442\u653f\u4fee\u6559\u6388 \u570b\u7acb\u81fa\u7063\u79d1\u6280\u5927\u5b78", "\u90b1\u5fb7\u6cc9\u6559\u6388 \u570b\u7acb\u6e05\u83ef\u5927\u5b78", "\u6797\u3000\u98a8\u6559\u6388 \u570b\u7acb\u81fa\u7063\u5927\u5b78", "\u6797\u5bb6\u745c\u6559\u6388 \u570b\u7acb\u4e2d\u592e\u5927\u5b78", "\u5468\u7acb\u5fb7\u6559\u6388 \u570b\u7acb\u4e2d\u592e\u5927\u5b78", "\u67ef\u5d34\u5091\u535a\u58eb \u8003\u8a66\u9662\u9293\u6558\u90e8", "\u65bd\u6df5\u8000\u6559\u6388 \u570b\u7acb\u4e2d\u6b63\u5927\u5b78", "\u838a\u6e05\u667a\u6559\u6388 \u570b\u7acb\u5c4f\u6771\u5927\u5b78", "\u7fc1\u6c38\u660c\u6559\u6388 \u975c\u5b9c\u5927\u5b78", "\u9673\u4ec1\u6689\u6559\u6388 \u9577\u5e9a\u5927\u5b78", "\u9673\u4f36\u5fd7\u6559\u6388 \u4e2d\u592e\u7814\u7a76\u9662", "\u9673\u5efa\u5fd7\u6559\u6388 \u570b\u7acb\u967d\u660e\u4ea4\u901a\u5927\u5b78", "\u9673\u4fca\u826f\u6559\u6388 \u570b\u7acb\u81fa\u7063\u79d1\u6280\u5927\u5b78", "\u9673\u88d5\u8ce2\u6559\u6388 \u570b\u7acb\u81fa\u5317\u5927\u5b78", "\u5a41\u5fb7\u6b0a\u6559\u6388 \u9577\u5e9a\u5927\u5b78", "\u8a31\u6176\u8ce2\u6559\u6388 \u4e9e\u6d32\u5927\u5b78", "\u6881\u5bb6\u9298\u6559\u6388 \u570b\u7acb\u81fa\u5357\u5927\u5b78", "\u5f35\u82f1\u8d85\u6559\u6388 \u570b\u7acb\u5f70\u5316\u5e2b\u7bc4\u5927\u5b78", "\u5f35\u745e\u96c4\u6559\u6388 \u570b\u7acb\u81fa\u5317\u5546\u696d\u5927\u5b78", "\u9ec3\u4fca\u9f8d\u6559\u6388 \u570b\u7acb\u967d\u660e\u4ea4\u901a\u5927\u5b78", "\u9ec3\u555f\u5bcc\u6559\u6388 \u570b\u7acb\u4e2d\u6b63\u5927\u5b78", "\u84af\u601d\u9f4a\u6559\u6388 \u570b\u7acb\u81fa\u5317\u5546\u696d\u5927\u5b78", "\u694a\u660e\u8c6a\u6559\u6388 \u4e2d\u539f\u5927\u5b78", "\u6eab\u6f14\u798f\u6559\u6388 \u570b\u7acb\u81fa\u5317\u5927\u5b78", "\u8d99\u79a7\u7da0\u6559\u6388 \u570b\u7acb\u967d\u660e\u4ea4\u901a\u5927\u5b78", "\u8521\u660e\u5cf0\u6559\u6388 \u570b\u7acb\u806f\u5408\u5927\u5b78", "\u8521\u5d07\u7152\u6559\u6388 \u570b\u7acb\u4e2d\u5c71\u5927\u5b78", "\u912d\u5efa\u5bcc\u6559\u6388 \u570b\u7acb\u81fa\u7063\u6d77\u6d0b\u5927\u5b78", "\u5289\u50b3\u9298\u6559\u6388 \u570b\u7acb\u81fa\u5317\u79d1\u6280\u5927\u5b78", "\u8cf4\u50b3\u6dc7\u6559\u6388 \u570b\u7acb\u4e2d\u6b63\u5927\u5b78", "\u7c21\u5ef7\u8ed2\u6559\u6388 \u570b\u7acb\u4e2d\u6b63\u5927\u5b78", "\u8607\u6dd1\u8335\u6559\u6388 \u570b\u7acb\u6210\u529f\u5927\u5b78", "\u56b4\u529b\u884c\u6559\u6388 \u570b\u7acb\u967d\u660e\u4ea4\u901a\u5927\u5b78", "\u738b\u5fd7\u5b87\u6559\u6388 \u4e2d\u592e\u7814\u7a76\u9662\u8cc7\u8a0a\u79d1\u6280\u5275\u65b0\u7814\u7a76\u4e2d\u5fc3"]
        }
          , i = e ? [...l.column1, ...l.column2].sort() : {
            column1: l.column1,
            column2: l.column2
        };
        return (0,
        vt.jsxs)("div", {
            style: {
                display: "flex",
                position: "relative"
            },
            children: [(0,
            vt.jsx)(bt, {
                onToggle: e => {
                    a(e)
                }
            }), (0,
            vt.jsx)("div", {
                className: "main-content",
                style: {
                    marginLeft: e ? "0" : n ? "250px" : "0"
                },
                children: (0,
                vt.jsxs)("div", {
                    className: "container",
                    children: [(0,
                    vt.jsx)("header", {
                        className: "header",
                        children: (0,
                        vt.jsx)("h1", {
                            className: "title",
                            children: "MC \u59d4\u54e1\u6703\u6210\u54e1"
                        })
                    }), (0,
                    vt.jsx)("section", {
                        className: "section ".concat(e ? "section-mobile" : ""),
                        children: (0,
                        vt.jsx)("div", {
                            className: "column-list ".concat(e ? "column-list-mobile" : ""),
                            children: e ? (0,
                            vt.jsx)("ul", {
                                className: "list",
                                children: i.map(( (e, t) => (0,
                                vt.jsx)("li", {
                                    className: "list-item list-item-mobile",
                                    children: e
                                }, t)))
                            }) : (0,
                            vt.jsxs)(vt.Fragment, {
                                children: [(0,
                                vt.jsx)("ul", {
                                    className: "list",
                                    children: l.column1.map(( (e, t) => (0,
                                    vt.jsx)("li", {
                                        className: "list-item",
                                        children: e
                                    }, t)))
                                }), (0,
                                vt.jsx)("ul", {
                                    className: "list",
                                    children: l.column2.map(( (e, t) => (0,
                                    vt.jsx)("li", {
                                        className: "list-item",
                                        children: e
                                    }, t)))
                                })]
                            })
                        })
                    }), (0,
                    vt.jsx)(wt, {})]
                })
            })]
        })
    }
      , Et = () => {
        const [e,t] = (0,
        r.useState)(!1)
          , [n,a] = (0,
        r.useState)(!0);
        (0,
        r.useEffect)(( () => {
            const e = () => {
                const e = window.innerWidth;
                t(e <= 768)
            }
            ;
            return e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
        }
        ), []);
        const l = {
            column1: ["\u738b\u53cb\u7fa4\u6559\u6388 \u570b\u7acb\u4e2d\u5c71\u5927\u5b78", "\u738b\u80fd\u4e2d\u6559\u6388 \u570b\u7acb\u806f\u5408\u5927\u5b78", "\u738b\u9d3b\u7337\u6559\u6388 \u570b\u7acb\u9ad8\u96c4\u79d1\u6280\u5927\u5b78", "\u6731\u5b97\u8ce2\u6559\u6388 \u570b\u7acb\u96f2\u6797\u79d1\u6280\u5927\u5b78", "\u5433\u4e16\u7433\u6559\u6388 \u9577\u5e9a\u5927\u5b78", "\u6797\u52fb\u851a\u6559\u6388 \u570b\u7acb\u967d\u660e\u4ea4\u901a\u5927\u5b78", "\u6797\u81f4\u5b87\u6559\u6388 \u570b\u7acb\u81fa\u7063\u6d77\u6d0b\u5927\u5b78", "\u6797\u671d\u8208\u6559\u6388 \u570b\u7acb\u81fa\u5357\u5927\u5b78", "\u5468\u8087\u57fa\u6559\u6388 \u570b\u7acb\u9ad8\u96c4\u79d1\u6280\u5927\u5b78", "\u67ef\u5d34\u5091\u535a\u58eb \u8003\u8a66\u9662\u9293\u6558\u90e8", "\u65bd\u6df5\u8000\u6559\u6388 \u570b\u7acb\u4e2d\u6b63\u5927\u5b78", "\u838a\u6e05\u667a\u6559\u6388 \u570b\u7acb\u5c4f\u6771\u5927\u5b78", "\u7fc1\u6c38\u660c\u6559\u6388 \u975c\u5b9c\u5927\u5b78", "\u9673\u4ec1\u6689\u6559\u6388 \u9577\u5e9a\u5927\u5b78", "\u9673\u4f36\u5fd7\u6559\u6388 \u4e2d\u592e\u7814\u7a76\u9662", "\u9673\u5efa\u5fd7\u6559\u6388 \u570b\u7acb\u967d\u660e\u4ea4\u901a\u5927\u5b78", "\u9673\u4fca\u826f\u6559\u6388 \u570b\u7acb\u81fa\u7063\u79d1\u6280\u5927\u5b78", "\u9673\u88d5\u8ce2\u6559\u6388 \u570b\u7acb\u81fa\u5317\u5927\u5b78", "\u9673\u61f7\u6069\u6559\u6388 \u4e9e\u6d32\u5927\u5b78", "\u8a31\u667a\u821c\u6559\u6388 \u4e16\u65b0\u5927\u5b78", "\u6881\u4e16\u8070\u6559\u6388 \u570b\u7acb\u81fa\u5317\u5e02\u7acb\u5927\u5b78", "\u5f35\u5fd7\u52c7\u6559\u6388 \u6de1\u6c5f\u5927\u5b78", "\u5f35\u82f1\u8d85\u6559\u6388 \u570b\u7acb\u5f70\u5316\u5e2b\u7bc4\u5927\u5b78", "\u5f35\u745e\u96c4\u6559\u6388 \u570b\u7acb\u81fa\u5317\u5546\u696d\u5927\u5b78", "\u9ec3\u4fca\u9f8d\u6559\u6388 \u570b\u7acb\u967d\u660e\u4ea4\u901a\u5927\u5b78", "\u9ec3\u555f\u5bcc\u6559\u6388 \u570b\u7acb\u4e2d\u6b63\u5927\u5b78", "\u84af\u601d\u9f4a\u6559\u6388 \u570b\u7acb\u81fa\u5317\u5546\u696d\u5927\u5b78", "\u694a\u660e\u8c6a\u6559\u6388 \u4e2d\u539f\u5927\u5b78", "\u694a\u821c\u4ec1\u6559\u6388 \u570b\u7acb\u6e05\u83ef\u5927\u5b78", "\u8d99\u5fd7\u6c11\u6559\u6388 \u570b\u7acb\u81fa\u7063\u6d77\u6d0b\u5927\u5b78", "\u8521\u5b50\u5091\u6559\u6388 \u570b\u7acb\u653f\u6cbb\u5927\u5b78", "\u8521\u5d07\u7152\u6559\u6388 \u570b\u7acb\u4e2d\u5c71\u5927\u5b78", "\u912d\u5efa\u5bcc\u6559\u6388 \u570b\u7acb\u81fa\u7063\u6d77\u6d0b\u5927\u5b78", "\u5289\u50b3\u9298\u6559\u6388 \u570b\u7acb\u81fa\u5317\u79d1\u6280\u5927\u5b78", "\u8cf4\u50b3\u6dc7\u6559\u6388 \u570b\u7acb\u4e2d\u6b63\u5927\u5b78", "\u7c21\u5ef7\u8ed2\u6559\u6388 \u570b\u7acb\u4e2d\u6b63\u5927\u5b78", "\u8607\u6dd1\u8335\u6559\u6388 \u570b\u7acb\u6210\u529f\u5927\u5b78", "\u56b4\u529b\u884c\u6559\u6388 \u570b\u7acb\u967d\u660e\u4ea4\u901a\u5927\u5b78"],
            column2: ["\u738b\u4e15\u4e2d\u6559\u6388 \u570b\u7acb\u4e2d\u8208\u5927\u5b78", "\u738b\u849e\u541b\u6559\u6388 \u570b\u7acb\u967d\u660e\u4ea4\u901a\u5927\u5b78", "\u77f3\u8cb4\u5e73\u6559\u6388 \u6de1\u6c5f\u5927\u5b78", "\u5442\u653f\u4fee\u6559\u6388 \u570b\u7acb\u81fa\u7063\u79d1\u6280\u5927\u5b78", "\u90b1\u5fb7\u6cc9\u6559\u6388 \u570b\u7acb\u6e05\u83ef\u5927\u5b78", "\u6797\u3000\u98a8\u6559\u6388 \u570b\u7acb\u81fa\u7063\u5927\u5b78", "\u6797\u5bb6\u745c\u6559\u6388 \u570b\u7acb\u4e2d\u592e\u5927\u5b78", "\u5468\u7acb\u5fb7\u6559\u6388 \u570b\u7acb\u4e2d\u592e\u5927\u5b78", "\u4fde\u5f81\u6b66\u6559\u6388 \u4e2d\u83ef\u5927\u5b78", "\u838a\u6771\u7a4e\u6559\u6388 \u570b\u7acb\u81fa\u5317\u5927\u5b78", "\u9023\u7d39\u5b87\u6559\u6388 \u570b\u7acb\u967d\u660e\u4ea4\u901a\u5927\u5b78", "\u9ad8\u69ae\u99ff\u6559\u6388 \u570b\u7acb\u6e05\u83ef\u5927\u5b78", "\u9673\u6c38\u9686\u6559\u6388 \u570b\u7acb\u81fa\u4e2d\u79d1\u6280\u5927\u5b78", "\u9673\u5b97\u79a7\u6559\u6388 \u570b\u7acb\u81fa\u5357\u5927\u5b78", "\u9673\u6631\u5609\u6559\u6388 \u570b\u7acb\u4e2d\u592e\u5927\u5b78", "\u9673\u70c8\u6b66\u6559\u6388 \u9022\u7532\u5927\u5b78", "\u9673\u7dad\u7f8e\u6559\u6388 \u570b\u7acb\u81fa\u7063\u79d1\u6280\u5927\u5b78", "\u5a41\u5fb7\u6b0a\u6559\u6388 \u9577\u5e9a\u5927\u5b78", "\u8a31\u6176\u8ce2\u6559\u6388 \u4e9e\u6d32\u5927\u5b78", "\u6881\u5bb6\u9298\u6559\u6388 \u570b\u7acb\u81fa\u5357\u5927\u5b78", "\u5f35\u5b8f\u7fa9\u6559\u6388 \u570b\u7acb\u5609\u7fa9\u5927\u5b78", "\u5f35\u6797\u714c\u6559\u6388 \u570b\u7acb\u81fa\u4e2d\u6559\u80b2\u5927\u5b78", "\u9ec3\u6c38\u767c\u6559\u6388 \u671d\u967d\u79d1\u6280\u5927\u5b78", "\u9ec3\u5d07\u6e90\u6559\u6388 \u9577\u5e9a\u5927\u5b78", "\u66fe\u5efa\u8d85\u6559\u6388 \u570b\u7acb\u967d\u660e\u4ea4\u901a\u5927\u5b78", "\u694a\u7af9\u661f\u6559\u6388 \u570b\u7acb\u6210\u529f\u5927\u5b78", "\u694a\u671d\u68df\u6559\u6388 \u6771\u6d77\u5927\u5b78", "\u6eab\u6f14\u798f\u6559\u6388 \u570b\u7acb\u81fa\u5317\u5927\u5b78", "\u8d99\u79a7\u7da0\u6559\u6388 \u570b\u7acb\u967d\u660e\u4ea4\u901a\u5927\u5b78", "\u8521\u660e\u5cf0\u6559\u6388 \u570b\u7acb\u806f\u5408\u5927\u5b78", "\u5ed6\u6587\u83ef\u6559\u6388 \u570b\u7acb\u81fa\u5317\u5546\u696d\u5927\u5b78", "\u5289\u70b3\u5b8f\u6559\u6388 \u570b\u7acb\u9ad8\u96c4\u79d1\u6280\u5927\u5b78", "\u6f58\u4ec1\u7fa9\u6559\u6388 \u570b\u7acb\u4e2d\u6b63\u5927\u5b78", "\u8b1d\u5947\u6587\u6559\u6388 \u570b\u7acb\u4e2d\u6b63\u5927\u5b78", "\u7c21\u6690\u54f2\u6559\u6388 \u570b\u7acb\u6771\u83ef\u5927\u5b78", "\u8607\u6689\u51f1\u6559\u6388 \u570b\u7acb\u864e\u5c3e\u79d1\u6280\u5927\u5b78", "\u738b\u5fd7\u5b87\u6559\u6388 \u4e2d\u592e\u7814\u7a76\u9662\u8cc7\u8a0a\u79d1\u6280\u5275\u65b0\u7814\u7a76\u4e2d\u5fc3", "\u9673\u8018\u5fd7\u6559\u6388 \u570b\u7acb\u6e05\u83ef\u5927\u5b78"]
        }
          , i = e ? [...l.column1, ...l.column2].sort() : {
            column1: l.column1,
            column2: l.column2
        };
        return (0,
        vt.jsxs)("div", {
            style: {
                display: "flex",
                position: "relative"
            },
            children: [(0,
            vt.jsx)(bt, {
                onToggle: e => {
                    a(e)
                }
            }), (0,
            vt.jsx)("div", {
                className: "main-content",
                style: {
                    marginLeft: e ? "0" : n ? "250px" : "0"
                },
                children: (0,
                vt.jsxs)("div", {
                    className: "container",
                    children: [(0,
                    vt.jsx)("header", {
                        className: "header",
                        children: (0,
                        vt.jsx)("h1", {
                            className: "title",
                            children: "WASN \u59d4\u54e1\u6703\u6210\u54e1"
                        })
                    }), (0,
                    vt.jsx)("section", {
                        className: "section ".concat(e ? "section-mobile" : ""),
                        children: (0,
                        vt.jsx)("div", {
                            className: "column-list ".concat(e ? "column-list-mobile" : ""),
                            children: e ? (0,
                            vt.jsx)("ul", {
                                className: "list",
                                children: i.map(( (e, t) => (0,
                                vt.jsx)("li", {
                                    className: "list-item list-item-mobile",
                                    children: e
                                }, t)))
                            }) : (0,
                            vt.jsxs)(vt.Fragment, {
                                children: [(0,
                                vt.jsx)("ul", {
                                    className: "list",
                                    children: l.column1.map(( (e, t) => (0,
                                    vt.jsx)("li", {
                                        className: "list-item",
                                        children: e
                                    }, t)))
                                }), (0,
                                vt.jsx)("ul", {
                                    className: "list",
                                    children: l.column2.map(( (e, t) => (0,
                                    vt.jsx)("li", {
                                        className: "list-item",
                                        children: e
                                    }, t)))
                                })]
                            })
                        })
                    }), (0,
                    vt.jsx)(wt, {})]
                })
            })]
        })
    }
      , Ct = {
        container: {
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "20px"
        },
        mainContent: {
            width: "100%",
            padding: "20px",
            transition: "margin-left 0.3s ease"
        },
        header: {
            textAlign: "center",
            padding: "40px 20px",
            backgroundImage: "url(".concat(kt, ")"),
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
            backgroundColor: "#f4e6d3"
        },
        title: {
            fontSize: "clamp(1.5em, 4vw, 2.2em)",
            fontWeight: "bold",
            color: "#3d1f06",
            textShadow: "1px 1px 0 #f4e6d3, -1px -1px 0 #f4e6d3, 1px -1px 0 #f4e6d3, -1px 1px 0 #f4e6d3"
        },
        subtitle: {
            fontSize: "clamp(1.1em, 3vw, 1.5em)",
            color: "#a0522d",
            marginBottom: "10px",
            textShadow: "1px 1px 0 #f4e6d3, -1px -1px 0 #f4e6d3, 1px -1px 0 #f4e6d3, -1px 1px 0 #f4e6d3"
        },
        highlightText: {
            fontSize: "clamp(1em, 2.5vw, 1.2em)",
            color: "black",
            fontWeight: "normal"
        },
        contentWrapper: {
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "30px",
            marginTop: "30px",
            marginBottom: "30px"
        },
        contentWrapperMobile: {
            gridTemplateColumns: "1fr"
        },
        section: {
            backgroundColor: "#faf5f0",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "20px",
            marginTop: "30px",
            border: "1px solid #e8d5c3"
        },
        tableContainer: {
            overflowX: "auto",
            marginTop: "20px",
            "-webkit-overflow-scrolling": "touch"
        },
        table: {
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: "20px",
            minWidth: "600px"
        },
        th: {
            backgroundColor: "#e9ecef",
            padding: "12px",
            borderBottom: "2px solid #dee2e6",
            textAlign: "center",
            fontSize: "clamp(0.8em, 2vw, 1em)"
        },
        td: {
            padding: "12px",
            borderBottom: "1px solid #dee2e6",
            textAlign: "center",
            verticalAlign: "middle",
            fontSize: "clamp(0.8em, 2vw, 1em)"
        },
        posterBlue: {
            backgroundColor: "#dbe9fa"
        },
        posterGreen: {
            backgroundColor: "#e0f5e0"
        },
        opening: {
            backgroundColor: "#fff2cc"
        },
        keynote: {
            backgroundColor: "#fce8e8"
        },
        break: {
            backgroundColor: "#fff"
        },
        evening: {
            backgroundColor: "#f0f0f0"
        },
        scrollHint: {
            display: "none",
            fontSize: "0.9em",
            color: "#666",
            textAlign: "center",
            marginBottom: "10px"
        },
        scrollHintMobile: {
            display: "block"
        }
    }
      , Tt = () => {
        const [e,t] = (0,
        r.useState)(!1)
          , [n,a] = (0,
        r.useState)(!0);
        (0,
        r.useEffect)(( () => {
            const e = () => {
                const e = window.innerWidth;
                t(e <= 768)
            }
            ;
            return e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
        }
        ), []);
        return (0,
        vt.jsxs)("div", {
            style: {
                display: "flex",
                position: "relative"
            },
            children: [(0,
            vt.jsx)(bt, {
                onToggle: e => {
                    a(e)
                }
            }), (0,
            vt.jsx)("div", {
                style: u(u({}, Ct.mainContent), {}, {
                    marginLeft: e ? "0" : n ? "250px" : "0"
                }),
                children: (0,
                vt.jsxs)("div", {
                    style: Ct.container,
                    children: [(0,
                    vt.jsx)("header", {
                        style: Ct.header,
                        children: (0,
                        vt.jsx)("h1", {
                            style: Ct.title,
                            children: "\u5927\u6703\u8b70\u7a0b"
                        })
                    }), (0,
                    vt.jsxs)("section", {
                        style: Ct.section,
                        children: [(0,
                        vt.jsx)("h1", {
                            style: Ct.subtitle,
                            children: "2025/08/25 \u8b70\u7a0b"
                        }), (0,
                        vt.jsx)("div", {
                            style: u(u({}, Ct.scrollHint), e ? Ct.scrollHintMobile : {}),
                            children: "\u2190 \u5de6\u53f3\u6ed1\u52d5\u67e5\u770b\u5b8c\u6574\u8868\u683c \u2192"
                        }), (0,
                        vt.jsx)("div", {
                            style: Ct.tableContainer,
                            children: (0,
                            vt.jsxs)("table", {
                                style: Ct.table,
                                children: [(0,
                                vt.jsx)("thead", {
                                    children: (0,
                                    vt.jsxs)("tr", {
                                        children: [(0,
                                        vt.jsx)("th", {
                                            style: Ct.th,
                                            children: "\u6642\u9593"
                                        }), (0,
                                        vt.jsx)("th", {
                                            style: Ct.th,
                                            colSpan: "3",
                                            children: "\u6d3b\u52d5"
                                        })]
                                    })
                                }), (0,
                                vt.jsxs)("tbody", {
                                    children: [(0,
                                    vt.jsxs)("tr", {
                                        children: [(0,
                                        vt.jsx)("td", {
                                            style: Ct.td,
                                            children: "09:00-10:00"
                                        }), (0,
                                        vt.jsx)("td", {
                                            style: Ct.td,
                                            colSpan: "3",
                                            children: "\u5831\u5230"
                                        })]
                                    }), (0,
                                    vt.jsxs)("tr", {
                                        children: [(0,
                                        vt.jsx)("td", {
                                            style: Ct.td,
                                            children: "10:00-10:50"
                                        }), (0,
                                        vt.jsxs)("td", {
                                            style: u(u({}, Ct.td), Ct.posterBlue),
                                            children: ["Poster", (0,
                                            vt.jsx)("br", {}), "\u8ad6\u6587\u7814\u7a76\u6210\u679c\u767c\u8868 I ", (0,
                                            vt.jsx)("br", {}), "(\u4e9e\u6b77\u5c71\u5927\u5ef3)"]
                                        }), (0,
                                        vt.jsxs)("td", {
                                            style: u(u({}, Ct.td), Ct.posterGreen),
                                            colSpan: "2",
                                            children: ["Poster", (0,
                                            vt.jsx)("br", {}), "\u570b\u79d1\u6703\u7814\u7a76\u6210\u679c\u767c\u8868 I", (0,
                                            vt.jsx)("br", {}), "(\u6d1b\u514b\u5ef3)"]
                                        })]
                                    }), (0,
                                    vt.jsxs)("tr", {
                                        children: [(0,
                                        vt.jsx)("td", {
                                            style: Ct.td,
                                            children: "11:00-11:20"
                                        }), (0,
                                        vt.jsxs)("td", {
                                            style: u(u({}, Ct.td), Ct.opening),
                                            colSpan: "3",
                                            children: ["\u5927\u6703\u958b\u5e55", (0,
                                            vt.jsx)("br", {}), "(\u8607\u683c\u62c9\u5e95\u5ef3)"]
                                        })]
                                    }), (0,
                                    vt.jsxs)("tr", {
                                        children: [(0,
                                        vt.jsx)("td", {
                                            style: Ct.td,
                                            children: "11:20-12:10"
                                        }), (0,
                                        vt.jsxs)("td", {
                                            style: u(u({}, Ct.td), Ct.keynote),
                                            colSpan: "3",
                                            children: ["Keynote Speech I:", (0,
                                            vt.jsx)("br", {}), "\u8b1b\u8005:\u4e2d\u83ef\u96fb\u4fe1\u7814\u7a76\u9662 \u8607\u6dfb\u8ca1\u9662\u9577", (0,
                                            vt.jsx)("br", {}), "\u4e3b\u984c: AI \u8ce6\u80fd ICT\uff1a\u958b\u555f\u9081\u54116G\u667a\u6167\u61c9\u7528\u65b0\u7bc7\u7ae0", (0,
                                            vt.jsx)("br", {}), "(\u8607\u683c\u62c9\u5e95\u5ef3)"]
                                        })]
                                    }), (0,
                                    vt.jsxs)("tr", {
                                        children: [(0,
                                        vt.jsx)("td", {
                                            style: Ct.td,
                                            children: "12:10-13:20"
                                        }), (0,
                                        vt.jsx)("td", {
                                            style: Ct.td,
                                            colSpan: "3",
                                            children: "\u5348\u9910"
                                        })]
                                    }), (0,
                                    vt.jsxs)("tr", {
                                        children: [(0,
                                        vt.jsx)("td", {
                                            style: Ct.td,
                                            children: "13:20-14:10"
                                        }), (0,
                                        vt.jsxs)("td", {
                                            style: u(u({}, Ct.td), Ct.opening),
                                            colSpan: "3",
                                            children: ["Keynote Speech II:", (0,
                                            vt.jsx)("br", {}), "\u8b1b\u8005:Head AiOT, 59stVentures, Dr. Hwee Pink TAN", (0,
                                            vt.jsx)("br", {}), "\u4e3b\u984c: AIoT Systems for Ageing-in-Place: Lessons Learnt and Future Opportunities", (0,
                                            vt.jsx)("br", {}), "(\u8607\u683c\u62c9\u5e95\u5ef3)"]
                                        })]
                                    }), (0,
                                    vt.jsxs)("tr", {
                                        children: [(0,
                                        vt.jsx)("td", {
                                            style: Ct.td,
                                            children: "14:10-15:00"
                                        }), (0,
                                        vt.jsxs)("td", {
                                            style: u(u({}, Ct.td), Ct.keynote),
                                            colSpan: "3",
                                            children: ["Panel discussion:", (0,
                                            vt.jsx)("br", {}), "\u4e3b\u984c: \u81ea\u4e3b\u667a\u6167\u91cd\u5851\u8de8\u57df\u8207\u5354\u4f5c\u751f\u614b\u7cfb\u7d71", (0,
                                            vt.jsx)("br", {}), "(Autonomous Intelligence Reshaping a Cross-disciplinary and Collaborative Ecosystem)", (0,
                                            vt.jsx)("br", {}), "\u4e3b\u6301\u4eba:", (0,
                                            vt.jsx)("br", {}), "\u6797\u4e00\u5e73 \u6559\u6388 \u570b\u7acb\u967d\u660e\u4ea4\u901a\u5927\u5b78\u8cc7\u8a0a\u5de5\u7a0b\u5b78\u7cfb \u7d42\u8eab\u8b1b\u5ea7\u6559\u6388", (0,
                                            vt.jsx)("br", {}), "\u8207\u8ac7\u5609\u8cd3:", (0,
                                            vt.jsx)("br", {}), "\u4e2d\u592e\u7814\u7a76\u9662 \u674e\u80b2\u6770\u7814\u7a76\u54e1", (0,
                                            vt.jsx)("br", {}), "\u8ca1\u5718\u6cd5\u4eba\u4eba\u5de5\u667a\u6167\u79d1\u6280\u57fa\u91d1\u6703 \u6eab\u6021\u4f36\u57f7\u884c\u9577", (0,
                                            vt.jsx)("br", {}), "\u6210\u529f\u5927\u5b78\u654f\u6c42\u667a\u6167\u904b\u7b97\u5b78\u9662 \u674e\u97f6\u66fc\u52a9\u7406\u6559\u6388", (0,
                                            vt.jsx)("br", {}), "\u5ee3\u9054\u96fb\u8166 \u5f35\u5609\u6df5\u535a\u58eb\u6280\u8853\u9577", (0,
                                            vt.jsx)("br", {}), "(\u8607\u683c\u62c9\u5e95\u5ef3)"]
                                        })]
                                    }), (0,
                                    vt.jsxs)("tr", {
                                        children: [(0,
                                        vt.jsx)("td", {
                                            style: Ct.td,
                                            children: "15:00-15:20"
                                        }), (0,
                                        vt.jsx)("td", {
                                            style: Ct.td,
                                            colSpan: "3",
                                            children: "Coffee break"
                                        })]
                                    }), (0,
                                    vt.jsxs)("tr", {
                                        children: [(0,
                                        vt.jsx)("td", {
                                            style: Ct.td,
                                            children: "15:20-16:10"
                                        }), (0,
                                        vt.jsxs)("td", {
                                            style: u(u({}, Ct.td), Ct.posterGreen),
                                            rowSpan: "2",
                                            children: ["\u570b\u79d1\u6703\u8cc7\u8a0a\u5de5\u7a0b\u5b78\u9580\u5ea7\u8ac7\u6703\u66a8114\u5e74\u5ea6\u7814\u7a76\u6210\u679c\u767c\u8868", (0,
                                            vt.jsx)("br", {}), "(\u8607\u683c\u62c9\u5e95\u5ef3)"]
                                        }), (0,
                                        vt.jsxs)("td", {
                                            style: u(u({}, Ct.td), Ct.posterBlue),
                                            children: ["Poster", (0,
                                            vt.jsx)("br", {}), "\u8ad6\u6587\u7814\u6210\u679c\u767c\u8868 II", (0,
                                            vt.jsx)("br", {}), "(\u4e9e\u6b77\u5c71\u5927\u5ef3)"]
                                        }), (0,
                                        vt.jsxs)("td", {
                                            style: u(u({}, Ct.td), Ct.posterGreen),
                                            children: ["Poster", (0,
                                            vt.jsx)("br", {}), "\u570b\u79d1\u6703\u7814\u7a76\u6210\u679c\u767c\u8868 II", (0,
                                            vt.jsx)("br", {}), "(\u6d1b\u514b\u5ef3)"]
                                        })]
                                    }), (0,
                                    vt.jsxs)("tr", {
                                        children: [(0,
                                        vt.jsx)("td", {
                                            style: Ct.td,
                                            children: "16:10-16:50"
                                        }), (0,
                                        vt.jsx)("td", {
                                            style: Ct.td,
                                            colSpan: "3"
                                        })]
                                    }), (0,
                                    vt.jsxs)("tr", {
                                        children: [(0,
                                        vt.jsx)("td", {
                                            style: Ct.td,
                                            children: "17:40-"
                                        }), (0,
                                        vt.jsx)("td", {
                                            style: u(u({}, Ct.td), Ct.evening),
                                            colSpan: "3",
                                            children: "\u665a\u5bb4 / \u516c\u9928\u85aa\u50d1\u5712\u6c34\u6e90\u6703\u9928"
                                        })]
                                    })]
                                })]
                            })
                        }), (0,
                        vt.jsx)("h1", {
                            style: Ct.subtitle,
                            children: "2025/08/26 \u8b70\u7a0b"
                        }), (0,
                        vt.jsx)("div", {
                            style: u(u({}, Ct.scrollHint), e ? Ct.scrollHintMobile : {}),
                            children: "\u2190 \u5de6\u53f3\u6ed1\u52d5\u67e5\u770b\u5b8c\u6574\u8868\u683c \u2192"
                        }), (0,
                        vt.jsx)("div", {
                            style: Ct.tableContainer,
                            children: (0,
                            vt.jsxs)("table", {
                                style: Ct.table,
                                children: [(0,
                                vt.jsx)("thead", {
                                    children: (0,
                                    vt.jsxs)("tr", {
                                        children: [(0,
                                        vt.jsx)("th", {
                                            style: Ct.th,
                                            children: "\u6642\u9593"
                                        }), (0,
                                        vt.jsx)("th", {
                                            style: Ct.th,
                                            colSpan: "4",
                                            children: "\u6d3b\u52d5"
                                        })]
                                    })
                                }), (0,
                                vt.jsxs)("tbody", {
                                    children: [(0,
                                    vt.jsxs)("tr", {
                                        children: [(0,
                                        vt.jsx)("td", {
                                            style: Ct.td,
                                            children: "08:30-09:00"
                                        }), (0,
                                        vt.jsx)("td", {
                                            style: Ct.td,
                                            colSpan: "4",
                                            children: "\u5831\u5230"
                                        })]
                                    }), (0,
                                    vt.jsxs)("tr", {
                                        children: [(0,
                                        vt.jsx)("td", {
                                            style: Ct.td,
                                            children: "09:00-09:30"
                                        }), (0,
                                        vt.jsxs)("td", {
                                            style: u(u({}, Ct.td), Ct.opening),
                                            rowSpan: "2",
                                            children: ["WASN\u6700\u4f73\u8ad6\u6587\u767c\u8868", (0,
                                            vt.jsx)("br", {}), "(\u62c9\u6590\u723e\u5ef3)"]
                                        }), (0,
                                        vt.jsxs)("td", {
                                            style: u(u({}, Ct.td), Ct.keynote),
                                            rowSpan: "2",
                                            children: ["MC\u6700\u4f73\u8ad6\u6587\u767c\u8868", (0,
                                            vt.jsx)("br", {}), "(\u9054\u6587\u897f\u5ef3)"]
                                        }), (0,
                                        vt.jsx)("td", {
                                            style: Ct.td,
                                            colSpan: "2"
                                        })]
                                    }), (0,
                                    vt.jsxs)("tr", {
                                        children: [(0,
                                        vt.jsx)("td", {
                                            style: Ct.td,
                                            children: "09:30-10:30"
                                        }), (0,
                                        vt.jsxs)("td", {
                                            style: u(u({}, Ct.td), Ct.posterBlue),
                                            children: ["Poster", (0,
                                            vt.jsx)("br", {}), "\u8ad6\u6587\u7814\u7a76\u6210\u679c\u767c\u8868 III", (0,
                                            vt.jsx)("br", {}), "(\u4e9e\u6b77\u5c71\u5927\u5ef3)"]
                                        }), (0,
                                        vt.jsxs)("td", {
                                            style: u(u({}, Ct.td), Ct.posterGreen),
                                            children: ["Poster", (0,
                                            vt.jsx)("br", {}), "\u570b\u79d1\u6703\u7814\u7a76\u6210\u679c\u767c\u8868 III", (0,
                                            vt.jsx)("br", {}), "(\u6d1b\u514b\u5ef3)"]
                                        })]
                                    }), (0,
                                    vt.jsxs)("tr", {
                                        children: [(0,
                                        vt.jsx)("td", {
                                            style: Ct.td,
                                            children: "10:30-11:20"
                                        }), (0,
                                        vt.jsxs)("td", {
                                            style: u(u({}, Ct.td), Ct.opening),
                                            colSpan: "2",
                                            children: ["Keynote Speech IV:", (0,
                                            vt.jsx)("br", {}), "\u8b1b\u8005:\u570b\u7acb\u81fa\u7063\u5927\u5b78\u96fb\u6a5f\u5de5\u7a0b\u5b78\u7cfb", (0,
                                            vt.jsx)("br", {}), "\u9b4f\u5b8f\u5b87\u6559\u6388", (0,
                                            vt.jsx)("br", {}), "\u4e3b\u984c: Smart Edge Computing and AIoT in the 6G Era", (0,
                                            vt.jsx)("br", {}), "(\u62c9\u6590\u723e\u5ef3)"]
                                        }), (0,
                                        vt.jsxs)("td", {
                                            style: u(u({}, Ct.td), Ct.posterBlue),
                                            children: ["Poster", (0,
                                            vt.jsx)("br", {}), "\u8ad6\u6587\u7814\u7a76\u6210\u679c\u767c\u8868 IV", (0,
                                            vt.jsx)("br", {}), "(\u4e9e\u6b77\u5c71\u5927\u5ef3)"]
                                        }), (0,
                                        vt.jsxs)("td", {
                                            style: u(u({}, Ct.td), Ct.posterGreen),
                                            children: ["Poster", (0,
                                            vt.jsx)("br", {}), "\u570b\u79d1\u6703\u7814\u7a76\u6210\u679c\u767c\u8868 IV", (0,
                                            vt.jsx)("br", {}), "(\u6d1b\u514b\u5ef3)"]
                                        })]
                                    }), (0,
                                    vt.jsxs)("tr", {
                                        children: [(0,
                                        vt.jsx)("td", {
                                            style: Ct.td,
                                            children: "11:20-12:00"
                                        }), (0,
                                        vt.jsxs)("td", {
                                            style: u(u({}, Ct.td), Ct.evening),
                                            colSpan: "4",
                                            children: ["\u9589\u5e55 / \u6700\u4f73\u7814\u7a76\u6210\u679c\u9812\u734e", (0,
                                            vt.jsx)("br", {}), "(\u62c9\u6590\u723e\u5ef3)"]
                                        })]
                                    })]
                                })]
                            })
                        })]
                    }), (0,
                    vt.jsx)(wt, {})]
                })
            })]
        })
    }
      , Pt = () => {
        const [e,t] = (0,
        r.useState)(!1)
          , [a,l] = (0,
        r.useState)(!1);
        (0,
        r.useLayoutEffect)(( () => {
            const e = window.matchMedia("(max-width: 768px)")
              , n = e => t(e.matches);
            return n(e),
            e.addEventListener("change", n),
            () => e.removeEventListener("change", n)
        }
        ), []),
        (0,
        r.useLayoutEffect)(( () => {
            l(!1)
        }
        ), []);
        const i = a && e;
        return (0,
        vt.jsxs)("div", {
            style: {
                display: "flex",
                position: "relative"
            },
            children: [i && (0,
            vt.jsx)("div", {
                className: "overlay",
                onClick: () => l(!1)
            }), (0,
            vt.jsx)(bt, {
                onToggle: e => l(e)
            }), (0,
            vt.jsx)("div", {
                className: "main-content",
                style: {
                    marginLeft: e ? "0" : a ? "250px" : "0",
                    transition: "none"
                },
                children: (0,
                vt.jsxs)("div", {
                    className: "container",
                    children: [(0,
                    vt.jsx)("header", {
                        className: "header",
                        style: {
                            backgroundImage: "url(".concat(kt, ")")
                        },
                        children: (0,
                        vt.jsx)("h1", {
                            className: "title",
                            children: "\u5c08\u984c\u6f14\u8b1b"
                        })
                    }), (0,
                    vt.jsx)("div", {
                        className: "speaker-wrapper ".concat(e ? "speaker-wrapper-mobile" : ""),
                        children: (0,
                        vt.jsxs)("div", {
                            className: "speaker-content ".concat(e ? "speaker-content-mobile" : ""),
                            children: [(0,
                            vt.jsx)("div", {
                                className: "speaker-image-container",
                                children: (0,
                                vt.jsx)("img", {
                                    src: n(377),
                                    alt: "\u6559\u63881",
                                    className: "speaker-image ".concat(e ? "speaker-image-mobile" : "")
                                })
                            }), (0,
                            vt.jsxs)("div", {
                                className: "speaker-info",
                                children: [(0,
                                vt.jsx)("h2", {
                                    className: "speaker-name",
                                    children: "\u8607\u6dfb\u8ca1 \u4e2d\u83ef\u96fb\u4fe1\u7814\u7a76\u9662 \u9662\u9577"
                                }), (0,
                                vt.jsx)("ul", {
                                    className: "speaker-bio-list",
                                    children: (0,
                                    vt.jsxs)("li", {
                                        children: [(0,
                                        vt.jsx)("strong", {
                                            children: "\u6f14\u8b1b\u4e3b\u984c\uff1a"
                                        }), "AI \u8ce6\u80fd ICT\uff1a\u958b\u555f\u9081\u54116G\u667a\u6167\u61c9\u7528\u65b0\u7bc7\u7ae0"]
                                    })
                                }), (0,
                                vt.jsxs)("ul", {
                                    className: "speaker-bio-list",
                                    children: [(0,
                                    vt.jsxs)("li", {
                                        children: [(0,
                                        vt.jsx)("strong", {
                                            children: "\u5b78\u6b77\uff1a"
                                        }), "\u6210\u529f\u5927\u5b78\u96fb\u6a5f\u5de5\u7a0b\u78a9\u58eb"]
                                    }), (0,
                                    vt.jsxs)("li", {
                                        children: [(0,
                                        vt.jsx)("strong", {
                                            children: "\u73fe\u8077\uff1a"
                                        }), "\u4e2d\u83ef\u96fb\u4fe1\u7814\u7a76\u9662 \u9662\u9577"]
                                    }), (0,
                                    vt.jsxs)("li", {
                                        children: [(0,
                                        vt.jsx)("strong", {
                                            children: "\u91cd\u8981\u7d93\u6b77\uff1a"
                                        }), (0,
                                        vt.jsxs)("ul", {
                                            children: [(0,
                                            vt.jsx)("li", {
                                                children: "\u6625\u6c34\u5802\u79d1\u6280 \u8463\u4e8b\u9577"
                                            }), (0,
                                            vt.jsx)("li", {
                                                children: "\u500b\u4eba\u5bb6\u5ead\u5206\u516c\u53f8 \u7e3d\u7d93\u7406"
                                            }), (0,
                                            vt.jsx)("li", {
                                                children: "\u5b8f\u83ef\u570b\u969b \u8463\u4e8b\u9577"
                                            }), (0,
                                            vt.jsx)("li", {
                                                children: "\u4e2d\u83ef\u96fb\u4fe1\u884c\u653f\u57f7\u884c\u526f\u7e3d(\u517c\u6295\u8cc7\u9577\u8207\u96fb\u4fe1\u5b78\u9662\u9662\u9577)"
                                            }), (0,
                                            vt.jsx)("li", {
                                                children: "\u4e2d\u83ef\u96fb\u4fe1\u7d93\u71df\u898f\u5283\u8655 \u526f\u7e3d\u7d93\u7406"
                                            }), (0,
                                            vt.jsx)("li", {
                                                children: "\u4e2d\u83ef\u96fb\u4fe1\u96fb\u4fe1\u7814\u7a76\u9662\u50b3\u8f38\u6280\u8853\u7814\u7a76\u5ba4"
                                            })]
                                        })]
                                    })]
                                })]
                            })]
                        })
                    }), (0,
                    vt.jsx)("div", {
                        className: "speaker-wrapper ".concat(e ? "speaker-wrapper-mobile" : ""),
                        children: (0,
                        vt.jsxs)("div", {
                            className: "speaker-content ".concat(e ? "speaker-content-mobile" : ""),
                            children: [(0,
                            vt.jsx)("div", {
                                className: "speaker-image-container",
                                children: (0,
                                vt.jsx)("img", {
                                    src: n(770),
                                    alt: "\u6559\u63882",
                                    className: "speaker-image ".concat(e ? "speaker-image-mobile" : "")
                                })
                            }), (0,
                            vt.jsxs)("div", {
                                className: "speaker-info",
                                children: [(0,
                                vt.jsx)("h2", {
                                    className: "speaker-name",
                                    children: "Dr. Hwee-Pink TAN, Head AiOT, 59stVentures"
                                }), (0,
                                vt.jsx)("ul", {
                                    className: "speaker-bio-list",
                                    children: (0,
                                    vt.jsxs)("li", {
                                        children: [(0,
                                        vt.jsx)("strong", {
                                            children: "Talk tile\uff1a"
                                        }), "AIoT Systems for Ageing-in-Place: Lessons Learnt and Future Opportunities"]
                                    })
                                }), (0,
                                vt.jsx)("p", {
                                    className: "speaker-bio",
                                    children: "Hwee-Pink is an advisor for Singapore's Agency for Science, Technology and Research (A*STAR)'s Scientific Data Strategy Office as well as a consultant for Singapore's Health Promotion Board (HPB) in data change management. He has also been Affiliate Faculty with the Singapore Management University (SMU) Academy since 2019, where he helms the instruction of modules related to Internet of Things (IoT) Technology and Applications and Smart Healthcare. Between 2021 and 2023, as HPB's inaugural Chief Data Officer and Director, Research Collaborations and Analytics, Hwee Pink led new teams to advance the data-driven, evidence-based and citizen-centric approach to health promotion through state-of-the-art data best practices to maximize data quality while promoting safe usage of data. Between 2015 and 2020, as Associate Professor of Information Systems (Practice) as well as Academic Director of the SMU-TCS iCity lab at SMU's School of Information Systems, he led a cross-disciplinary team to bring together IoT technologies, and social-behavioural research to enable ageing-in-place, in close partnership with A*STAR, TCS, various government agencies, regional health systems as well as Social Service Agencies. As Programme Manager for the A*STAR Sense and Sense-abilities Program at the Institute for Infocomm Research (I2R) between 2008 and 2015, he led a research team to design, pilot and evaluate architectures to support large scale and heterogeneous sensor systems to enable Smart City applications. He graduated from the Technion, Israel Institute of Technology, Israel in August 2004 with a Ph.D. In December 2004, he was awarded the A*STAR International Fellowship to conduct postdoctoral research at Eindhoven University of Technology and Trinity College Dublin on the design and evaluation of wireless networks."
                                })]
                            })]
                        })
                    }), (0,
                    vt.jsx)("div", {
                        className: "speaker-wrapper ".concat(e ? "speaker-wrapper-mobile" : ""),
                        children: (0,
                        vt.jsxs)("div", {
                            className: "speaker-content ".concat(e ? "speaker-content-mobile" : ""),
                            children: [(0,
                            vt.jsx)("div", {
                                className: "speaker-image-container",
                                children: (0,
                                vt.jsx)("img", {
                                    src: n(219),
                                    alt: "\u6559\u63883",
                                    className: "speaker-image ".concat(e ? "speaker-image-mobile" : "")
                                })
                            }), (0,
                            vt.jsxs)("div", {
                                className: "speaker-info",
                                children: [(0,
                                vt.jsx)("h2", {
                                    className: "speaker-name",
                                    children: "Prof. Hung-Yu Wei, National Taiwan University"
                                }), (0,
                                vt.jsx)("ul", {
                                    className: "speaker-bio-list",
                                    children: (0,
                                    vt.jsxs)("li", {
                                        children: [(0,
                                        vt.jsx)("strong", {
                                            children: "Talk tile\uff1a"
                                        }), "Smart Edge Computing and AIoT in the 6G Era"]
                                    })
                                }), (0,
                                vt.jsx)("p", {
                                    className: "speaker-bio",
                                    children: "Hung-Yu Wei is a Professor in the Department of Electrical Engineering and Graduate Institute of Communications Engineering (GICE), National Taiwan University (NTU). He is currently the Director of GICE and Chair of IoT Research Center at NTU. From 2019 to 2022, he served as the Interim Chair and Associate Chair of the Department of Electrical Engineering. He received his B.S. degree in electrical engineering from NTU in 1999, and his M.S. and Ph.D. degrees in electrical engineering from Columbia University in 2001 and 2005, respectively. He received the K.T. Li Distinguished Young Scholar Award from ACM Taipei/Taiwan Chapter in 2012, the Excellent Young Engineer Award from CIEE in 2014, the Wu Ta You Memorial Award from MOST in 2015, and the MOST/NSTC Outstanding Research Award in 2020 and 2025. He has also been recognized with the NTU Excellent Teaching Award three times. He serves as Chair of IEEE 1935 working group for edge management and orchestration standard and Chair of IEEE 1934 Working Group for edge/fog computing and networking architecture standard. He is an Associate Editor for IEEE IoT Journal and IEEE IoT magazine. He is an IEEE Fellow and AAIA Fellow."
                                })]
                            })]
                        })
                    }), (0,
                    vt.jsx)(wt, {})]
                })
            })]
        })
    }
      , Lt = () => {
        const [e,t] = (0,
        r.useState)(!1)
          , [a,l] = (0,
        r.useState)(!1);
        (0,
        r.useLayoutEffect)(( () => {
            const e = window.matchMedia("(max-width: 768px)")
              , n = e => t(e.matches);
            return n(e),
            e.addEventListener("change", n),
            () => e.removeEventListener("change", n)
        }
        ), []),
        (0,
        r.useLayoutEffect)(( () => {
            l(!1)
        }
        ), []);
        const i = a && e;
        return (0,
        vt.jsxs)("div", {
            style: {
                display: "flex",
                position: "relative"
            },
            children: [i && (0,
            vt.jsx)("div", {
                className: "overlay",
                onClick: () => l(!1)
            }), (0,
            vt.jsx)(bt, {
                onToggle: e => l(e)
            }), (0,
            vt.jsx)("div", {
                className: "main-content",
                style: {
                    marginLeft: e ? "0" : a ? "250px" : "0",
                    transition: "none"
                },
                children: (0,
                vt.jsxs)("div", {
                    className: "container",
                    children: [(0,
                    vt.jsx)("header", {
                        className: "header",
                        style: {
                            backgroundImage: "url(".concat(kt, ")")
                        },
                        children: (0,
                        vt.jsx)("h1", {
                            className: "title",
                            children: "\u8de8\u57df\u8ad6\u58c7"
                        })
                    }), (0,
                    vt.jsx)("div", {
                        className: "speaker-wrapper ".concat(e ? "speaker-wrapper-mobile" : ""),
                        children: (0,
                        vt.jsxs)("div", {
                            className: "speaker-content ".concat(e ? "speaker-content-mobile" : ""),
                            children: [(0,
                            vt.jsx)("div", {
                                className: "speaker-image-container",
                                children: (0,
                                vt.jsx)("img", {
                                    src: n(233),
                                    alt: "\u5f35\u5609\u6df5 \u535a\u58eb",
                                    className: "speaker-image ".concat(e ? "speaker-image-mobile" : "")
                                })
                            }), (0,
                            vt.jsxs)("div", {
                                className: "speaker-info",
                                children: [(0,
                                vt.jsx)("h2", {
                                    className: "speaker-name",
                                    children: "\u5f35\u5609\u6df5 \u5ee3\u9054\u96fb\u8166 \u6280\u8853\u9577"
                                }), (0,
                                vt.jsxs)("ul", {
                                    className: "speaker-bio-list",
                                    children: [(0,
                                    vt.jsxs)("li", {
                                        children: [(0,
                                        vt.jsx)("strong", {
                                            children: "\u5b78\u6b77\uff1a"
                                        }), "\u6210\u529f\u5927\u5b78\u822a\u7a7a\u592a\u7a7a\u5de5\u7a0b\u7814\u7a76\u6240 \u5b78\u58eb '88, \u78a9\u58eb '92, \u535a\u58eb '96"]
                                    }), (0,
                                    vt.jsxs)("li", {
                                        children: [(0,
                                        vt.jsx)("strong", {
                                            children: "\u73fe\u8077\uff1a"
                                        }), "\u5ee3\u9054\u96fb\u8166 \u6280\u8853\u9577\u66a8\u526f\u7e3d\u7d93\u7406\u3001\u5ee3\u9054\u7814\u7a76\u9662 \u9662\u9577"]
                                    }), (0,
                                    vt.jsxs)("li", {
                                        children: [(0,
                                        vt.jsx)("strong", {
                                            children: "\u91cd\u8981\u7d93\u6b77\uff1a"
                                        }), (0,
                                        vt.jsxs)("ul", {
                                            children: [(0,
                                            vt.jsxs)("li", {
                                                children: [(0,
                                                vt.jsx)("strong", {
                                                    children: "APEC\u4f01\u696d\u8aee\u8a62\u59d4\u54e1\u6703(ABAC)\uff1a"
                                                }), (0,
                                                vt.jsxs)("ul", {
                                                    children: [(0,
                                                    vt.jsx)("li", {
                                                        children: "2025 \u751f\u6280\u8207\u5065\u5eb7\u5de5\u4f5c\u5c0f\u7d44 \u526f\u4e3b\u5e2d BHWG/ABAC2025"
                                                    }), (0,
                                                    vt.jsx)("li", {
                                                        children: "2024 \u4eba\u624d\u8207\u6280\u80fd\u6578\u4f4d\u8f49\u578b\u512a\u5148\u9818\u57df\u53ec\u96c6\u4eba HDWG/ABAC2024"
                                                    }), (0,
                                                    vt.jsx)("li", {
                                                        children: "2023 \u6578\u4f4d\u5275\u65b0\u5de5\u4f5c\u5c0f\u7d44 DAIY\u8a08\u756b\u4e3b\u6301\u4eba DIWG/ABAC2023"
                                                    }), (0,
                                                    vt.jsx)("li", {
                                                        children: "2022 \u6578\u4f4d\u5de5\u4f5c\u5c0f\u7d44 \u5171\u540c\u4e3b\u5e2d DWG/ABAC2022"
                                                    }), (0,
                                                    vt.jsx)("li", {
                                                        children: "2021 \u652f\u6301\u65b0\u8208\u79d1\u6280\u5c0f\u7d44 \u5171\u540c\u53ec\u96c6\u4eba DWG/ABAC2021"
                                                    }), (0,
                                                    vt.jsx)("li", {
                                                        children: "2019~ \u7e3d\u7d71\u4efb\u547d \u4e2d\u83ef\u6c11\u570b\u4ee3\u8868"
                                                    })]
                                                })]
                                            }), (0,
                                            vt.jsxs)("li", {
                                                children: [(0,
                                                vt.jsx)("strong", {
                                                    children: "\u6559\u5b78\u8077\u52d9\uff1a"
                                                }), (0,
                                                vt.jsxs)("ul", {
                                                    children: [(0,
                                                    vt.jsx)("li", {
                                                        children: "2021~ \u570b\u7acb\u53f0\u7063\u5927\u5b78 \u96fb\u6a5f\u8cc7\u8a0a\u5b78\u9662\u7db2\u5a92\u6240 \u5ba2\u5ea7\u6559\u6388"
                                                    }), (0,
                                                    vt.jsx)("li", {
                                                        children: "2021~ \u570b\u7acb\u6210\u529f\u5927\u5b78 \u96fb\u6a5f\u8cc7\u8a0a\u5b78\u9662\u8cc7\u8a0a\u7cfb \u5ba2\u5ea7\u6559\u6388"
                                                    }), (0,
                                                    vt.jsx)("li", {
                                                        children: "2020~ \u570b\u7acb\u967d\u660e\u4ea4\u901a\u5927\u5b78 \u667a\u6167\u79d1\u5b78\u66a8\u7da0\u80fd\u5b78\u9662 \u5408\u8058\u6559\u6388"
                                                    }), (0,
                                                    vt.jsx)("li", {
                                                        children: "2021~ \u79c1\u7acb\u4e9e\u6d32\u5927\u5b78 \u96fb\u6a5f\u8cc7\u8a0a\u5b78\u9662\u8cc7\u8a0a\u7cfb \u517c\u4efb\u8b1b\u5ea7\u6559\u6388"
                                                    })]
                                                })]
                                            }), (0,
                                            vt.jsxs)("li", {
                                                children: [(0,
                                                vt.jsx)("strong", {
                                                    children: "\u7814\u767c\u8a08\u756b\uff1a"
                                                }), (0,
                                                vt.jsxs)("ul", {
                                                    children: [(0,
                                                    vt.jsx)("li", {
                                                        children: "\u5ee3\u9054\u96fb\u8166-\u9ebb\u7701\u7406\u5de5\u5b78\u9662 \u96fb\u8166\u79d1\u5b78\u66a8\u4eba\u5de5\u667a\u6167\u5be6\u9a57\u5ba4MIT CSAIL \u8a08\u5283\u4e3b\u6301\u4eba (Since 2004)"
                                                    }), (0,
                                                    vt.jsx)("li", {
                                                        children: "TParty (2004~2010), Qmulus (2010~2018), AI Medicine (2019~2024), Project AIR (2024~)"
                                                    })]
                                                })]
                                            }), (0,
                                            vt.jsxs)("li", {
                                                children: [(0,
                                                vt.jsx)("strong", {
                                                    children: "\u8463\u4e8b\u8077\u52d9\uff1a"
                                                }), (0,
                                                vt.jsxs)("ul", {
                                                    children: [(0,
                                                    vt.jsx)("li", {
                                                        children: "\u6642\u4ee3\u57fa\u91d1\u6703"
                                                    }), (0,
                                                    vt.jsx)("li", {
                                                        children: "\u6587\u5316\u5167\u5bb9\u7b56\u9032\u9662"
                                                    }), (0,
                                                    vt.jsx)("li", {
                                                        children: "\u4e2d\u83ef\u91ab\u85e5\u4fc3\u9032\u57fa\u91d1\u6703"
                                                    }), (0,
                                                    vt.jsx)("li", {
                                                        children: "\u5ee3\u9054\u91ab\u7642\u79d1\u6280\u57fa\u91d1\u6703"
                                                    })]
                                                })]
                                            })]
                                        })]
                                    }), (0,
                                    vt.jsxs)("li", {
                                        children: [(0,
                                        vt.jsx)("strong", {
                                            children: "\u69ae\u8b7d\u8207\u734e\u9805\uff1a"
                                        }), (0,
                                        vt.jsxs)("ul", {
                                            children: [(0,
                                            vt.jsx)("li", {
                                                children: "2024 IEEE \u79d1\u6280\u7522\u696d\u4eba\u9053\u8ca2\u737b\u734e"
                                            }), (0,
                                            vt.jsx)("li", {
                                                children: "2024 MIT CSAIL Visionary Partner Award (\u5ee3\u9054\u7814\u7a76\u9662)"
                                            }), (0,
                                            vt.jsx)("li", {
                                                children: "2024/2022/2021 \u5fb7\u570b\u7d05\u9ede\u8a2d\u8a08\u734e Red Dot Design Award (\u516d\u5ea7)"
                                            }), (0,
                                            vt.jsx)("li", {
                                                children: "2024/2022/2021/2019/2018/2017 \u5ee3\u9054\u96fb\u8166\u6700\u4f73\u8a2d\u8a08\u5c08\u5229\u91d1\u724c\u734e (\u516d\u5ea7)"
                                            }), (0,
                                            vt.jsx)("li", {
                                                children: "2022 \u65e5\u672cGood Design Best 100 Award \u767e\u5927\u8a2d\u8a08\u734e (OpenTix)"
                                            }), (0,
                                            vt.jsx)("li", {
                                                children: "2021 \u570b\u7acb\u6210\u529f\u5927\u5b78 \u5091\u51fa\u6821\u53cb\u734e"
                                            }), (0,
                                            vt.jsx)("li", {
                                                children: "2021 \u570b\u7acb\u5609\u7fa9\u4e2d\u5b78 \u5091\u51fa\u6821\u53cb\u734e"
                                            }), (0,
                                            vt.jsx)("li", {
                                                children: "2021 \u5fb7\u570bIF\u8a2d\u8a08\u734e IF Design Award (Smart Agriculture)"
                                            }), (0,
                                            vt.jsx)("li", {
                                                children: "2020 CES Innovation Award (\u5ee3\u9054\u4ea4\u5927\u806f\u5408AI\u4e2d\u5fc3)"
                                            }), (0,
                                            vt.jsx)("li", {
                                                children: "2020 \u4e16\u754c\u8cc7\u8a0a\u79d1\u6280\u8207\u670d\u52d9\u806f\u76df WITSA\uff0dPPP Silver Award"
                                            }), (0,
                                            vt.jsx)("li", {
                                                children: "\u5168\u7403\u8d85\u904e\u5169\u767e\u4e03\u5341\u4ef6\u8a2d\u8a08\u8207\u767c\u660e\u5c08\u5229\u6388\u8b49 (by 2024/11)"
                                            })]
                                        })]
                                    })]
                                })]
                            })]
                        })
                    }), (0,
                    vt.jsx)("div", {
                        className: "speaker-wrapper ".concat(e ? "speaker-wrapper-mobile" : ""),
                        children: (0,
                        vt.jsxs)("div", {
                            className: "speaker-content ".concat(e ? "speaker-content-mobile" : ""),
                            children: [(0,
                            vt.jsx)("div", {
                                className: "speaker-image-container",
                                children: (0,
                                vt.jsx)("img", {
                                    src: n(758),
                                    alt: "\u6559\u63882",
                                    className: "speaker-image ".concat(e ? "speaker-image-mobile" : "")
                                })
                            }), (0,
                            vt.jsxs)("div", {
                                className: "speaker-info",
                                children: [(0,
                                vt.jsx)("h2", {
                                    className: "speaker-name",
                                    children: "\u674e\u97f6\u66fc \u570b\u7acb\u6210\u529f\u5927\u5b78 \u52a9\u7406\u6559\u6388"
                                }), (0,
                                vt.jsx)("p", {
                                    className: "speaker-bio",
                                    children: "\u674e\u97f6\u66fc\u70ba\u570b\u7acb\u6210\u529f\u5927\u5b78\u654f\u6c42\u667a\u6167\u904b\u7b97\u5b78\u9662\u53ca\u5fc3\u7406\u5b78\u7cfb\u5408\u8058\u52a9\u7406\u6559\u6388\uff0c\u4e26\u70ba\u570b\u969b\u516c\u6cd5\u5b78\u6703\u53f0\u7063\u5206\u6703\u57f7\u884c\u79d8\u66f8\u3001\u5168\u570b\u5f8b\u5e2b\u806f\u5408\u6703\u7b2c2\u5c46\u4eba\u5de5\u667a\u6167\u767c\u5c55\u8207\u61c9\u5c0d\u59d4\u54e1\u6703\u9867\u554f\u3002 \u674e\u97f6\u66fc\u65bc\u570b\u7acb\u81fa\u7063\u5927\u5b78\u53d6\u5f97\u6cd5\u5b78\u58eb\u53ca\u6cd5\u5b78\u78a9\u58eb\u5b78\u4f4d\uff0c\u96a8\u5f8c\u8d74\u7f8e\u6df1\u9020\uff0c\u65bc\u7f8e\u570b\u8036\u9b6f\u5927\u5b78\u6cd5\u5b78\u9662\u7372\u5f97\u6cd5\u5b78\u78a9\u58eb\u5b78\u4f4d\uff0c\u4e26\u9032\u4e00\u6b65\u65bc\u7f8e\u570b\u52a0\u5dde\u5927\u5b78\u67cf\u514b\u840a\u5206\u6821\u53d6\u5f97\u6cd5\u5b78\u535a\u58eb\u5b78\u4f4d\u3002\u4e3b\u8981\u7814\u7a76\u9818\u57df\u6db5\u84cb\u6cd5\u5f8b\u79d1\u6280\u3001\u6cd5\u5f8b\u5be6\u8b49\u7814\u7a76\u3001\u4ee5\u53ca\u4eba\u5de5\u667a\u6167\u6cd5\u5f8b\u8207\u6cbb\u7406\u8b70\u984c\u3002"
                                })]
                            })]
                        })
                    }), (0,
                    vt.jsx)("div", {
                        className: "speaker-wrapper ".concat(e ? "speaker-wrapper-mobile" : ""),
                        children: (0,
                        vt.jsxs)("div", {
                            className: "speaker-content ".concat(e ? "speaker-content-mobile" : ""),
                            children: [(0,
                            vt.jsx)("div", {
                                className: "speaker-image-container",
                                children: (0,
                                vt.jsx)("img", {
                                    src: n(340),
                                    alt: "\u6559\u63883",
                                    className: "speaker-image ".concat(e ? "speaker-image-mobile" : "")
                                })
                            }), (0,
                            vt.jsxs)("div", {
                                className: "speaker-info",
                                children: [(0,
                                vt.jsx)("h2", {
                                    className: "speaker-name",
                                    children: "\u6eab\u6021\u73b2 \u8ca1\u5718\u6cd5\u4eba\u4eba\u5de5\u667a\u6167\u79d1\u6280\u57fa\u91d1\u6703 \u57f7\u884c\u9577"
                                }), (0,
                                vt.jsx)("p", {
                                    className: "speaker-bio",
                                    children: "\u73fe\u4efb\u8ca1\u5718\u6cd5\u4eba\u4eba\u5de5\u667a\u6167\u79d1\u6280\u57fa\u91d1\u6703\u57f7\u884c\u9577\u3001\u300a\u77e5\u52e2\u300b\u96fb\u5b50\u5831\u7e3d\u7de8\u8f2f\u3001IC\u4e4b\u97f3\u7bc0\u76ee\u4e3b\u6301\u4eba\u3002"
                                }), (0,
                                vt.jsx)("p", {
                                    className: "speaker-bio",
                                    children: "\u66fe\u4efb\u8077\u591a\u5bb6\u8ca1\u7d93\u5a92\u9ad4\uff0c\u6a6b\u8de8\u96fb\u8996\u3001\u96dc\u8a8c\u8207\u7db2\u8def\u5a92\u9ad4\uff0c\u4e26\u64d4\u4efb\u591a\u6240\u5927\u5b78\u53ca\u7d44\u7e54\u8b1b\u5e2b\u30022018\u5e74\u9032\u5165\u4eba\u5de5\u667a\u6167\u9818\u57df\uff0c\u8ca0\u8cac\u53f0\u7063\u4eba\u5de5\u667a\u6167\u5b78\u6821\u71df\u904b\u53ca\u77e5\u8b58\u793e\u7fa4\u7d93\u71df\uff0c2020\u5e74\u63a5\u4efb\u57fa\u91d1\u6703\u57f7\u884c\u9577\u8fc4\u4eca\u3002"
                                }), (0,
                                vt.jsx)("p", {
                                    className: "speaker-bio",
                                    children: "2019\u5e74\u8207\u5df2\u6545\u53f0\u7063\u4eba\u5de5\u667a\u6167\u5b78\u6821\u57f7\u884c\u9577\u9673\u6607\u744b\u535a\u58eb\u5408\u8457\u300a\u4eba\u5de5\u667a\u6167\u5728\u53f0\u7063\uff1a\u7522\u696d\u8f49\u578b\u7684\u5951\u6a5f\u8207\u6311\u6230\u300b\uff0c\u662f\u7b2c\u4e00\u672c\u5f9e\u53f0\u7063\u7522\u696d\u89d2\u5ea6\u51fa\u767c\u3001\u6a6b\u8de8\u6280\u8853\u8207\u5be6\u969b\u61c9\u7528\uff0c\u63a2\u8a0e\u4eba\u5de5\u667a\u6167\u5c0d\u65bc\u7522\u696d\u8f49\u578b\u5f71\u97ff\u7684\u66f8\u7c4d\u3002"
                                }), (0,
                                vt.jsx)("p", {
                                    className: "speaker-bio",
                                    children: "2021\u5e74\u5e95\u51fa\u7248\u8207\u53f0\u7d93\u9662\u666f\u6c23\u9810\u6e2c\u4e2d\u5fc3\u4e3b\u4efb\u5b6b\u660e\u5fb7\u535a\u58eb\u5408\u8457\u300a\u5b6b\u4e3b\u4efb\u7684\u7d93\u6fdf\u7b46\u8a18\u300b\uff0c\u7d50\u5408\u7e3d\u9ad4\u7d93\u6fdf\u5b78\u91cd\u8981\u6307\u6a19\u8207\u6642\u4e8b\uff0c\u6df1\u5165\u6dfa\u51fa\u5206\u6790\u4e2d\u7f8e\u8cbf\u6613\u6230\u53ca\u75ab\u60c5\u4e4b\u5f8c\uff0c\u5168\u7403\u8207\u53f0\u7063\u7d93\u6fdf\u7684\u53ef\u80fd\u8d70\u5411\u548c\u95dc\u9375\u8b8a\u6578\u3002"
                                }), (0,
                                vt.jsx)("p", {
                                    className: "speaker-bio",
                                    children: "2023\u5e746\u6708\u5e95\u51fa\u7248\u8207\u300a\u89aa\u5b50\u5929\u4e0b\u300b\u7de8\u8f2f\u5718\u968a\u5408\u8457\u300aAI\u5982\u4f55\u91cd\u5851\u6559\u80b2\u300b\u3002"
                                })]
                            })]
                        })
                    }), (0,
                    vt.jsx)("div", {
                        className: "speaker-wrapper ".concat(e ? "speaker-wrapper-mobile" : ""),
                        children: (0,
                        vt.jsxs)("div", {
                            className: "speaker-content ".concat(e ? "speaker-content-mobile" : ""),
                            children: [(0,
                            vt.jsx)("div", {
                                className: "speaker-image-container",
                                children: (0,
                                vt.jsx)("img", {
                                    src: n(30),
                                    alt: "\u6559\u63884",
                                    className: "speaker-image ".concat(e ? "speaker-image-mobile" : "")
                                })
                            }), (0,
                            vt.jsxs)("div", {
                                className: "speaker-info",
                                children: [(0,
                                vt.jsx)("h2", {
                                    className: "speaker-name",
                                    children: "Prof. Yuh-Jye Lee, Research Center for Information Technology Innovation"
                                }), (0,
                                vt.jsx)("p", {
                                    className: "speaker-bio",
                                    children: "Prof. Yuh-Jye Lee is a computer scientist who holds a PhD in Computer Sciences from UW-Madison (2001). He has held positions at esteemed universities, including National Chun Cheng University, Taiwan Tech, and National Yang Ming Chiao Tung University."
                                }), (0,
                                vt.jsx)("p", {
                                    className: "speaker-bio",
                                    children: "Prof. Lee also had the opportunity to serve the government from November 2020 to January 2023 as the Deputy Executive Secretary of the Office of Science and Technology Policy, National Science and Technology Council. This office is responsible for Taiwan's science and technology policies, budget allocation, and the review of national-level science and technology projects.  He serves as the Chief Executive Officer of the Taiwan Information Security Center at the Research Center for Information Technology Innovation (CITI), Academia Sinica in the period of Aug. 2023 to Feb. 2024 and Sept. 2018 to Feb. 2021. Now he is a research fellow at CITI."
                                }), (0,
                                vt.jsx)("p", {
                                    className: "speaker-bio",
                                    children: "Prof. Lee's research primarily focuses on AI, data science, machine learning, federated learning, and information security, with a specific interest in developing lightweight anomaly detection techniques for IoT applications. Over the past decade, he has developed numerous efficient machine learning algorithms such as SSVM and RSVM that have been successfully applied in various fields, including breast cancer diagnosis and prognosis, network intrusion detection, and fake news prevention. In essence, his research is centered on AI in security and security in AI. He is also in charge of the TAIDE project, which stands for Trustworthy AI Dialogue Engine."
                                })]
                            })]
                        })
                    }), (0,
                    vt.jsx)(wt, {})]
                })
            })]
        })
    }
      , zt = () => {
        const [e,t] = (0,
        r.useState)(!1)
          , [n,a] = (0,
        r.useState)(!0);
        (0,
        r.useEffect)(( () => {
            const e = () => {
                const e = window.innerWidth;
                t(e <= 768)
            }
            ;
            return e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
        }
        ), []);
        return (0,
        vt.jsxs)("div", {
            style: {
                display: "flex",
                position: "relative"
            },
            children: [(0,
            vt.jsx)(bt, {
                onToggle: e => {
                    a(e)
                }
            }), (0,
            vt.jsx)("div", {
                className: "main-content",
                style: {
                    marginLeft: e ? "0" : n ? "250px" : "0"
                },
                children: (0,
                vt.jsxs)("div", {
                    className: "container",
                    children: [(0,
                    vt.jsx)("header", {
                        className: "header",
                        style: {
                            backgroundImage: "url(".concat(kt, ")")
                        },
                        children: (0,
                        vt.jsx)("h1", {
                            className: "title",
                            children: "MC \u8ad6\u6587"
                        })
                    }), (0,
                    vt.jsxs)("section", {
                        className: "section ".concat(e ? "section-mobile" : ""),
                        children: [(0,
                        vt.jsx)("h2", {
                            className: "subtitle",
                            children: "\u8ad6\u6587\u5fb5\u7a3f\u4e3b\u984c"
                        }), (0,
                        vt.jsxs)("ul", {
                            className: "list",
                            children: [(0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "5G, 6G, LTE, LTE-Advanced, WLAN, WPAN"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "AI Technologies and Applications"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Cloud, Fog, and Edge Computing"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Cyber Security and Privacy"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Device to Device (D2D) Communication"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Energy-Efficient Software and Hardware Design"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Fault Tolerance in Mobile Networks"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Internet of Thing (IoT) Technology"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Mobile and Wireless Network Architectures"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Mobile and Wireless Network Protocol Design"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Mobility and Location Management"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Modeling and Performance Analysis of Wireless Systems"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Network Function Virtualization"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Satellite Networks"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Software-Defined Networks"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Spectrum Management"
                            })]
                        })]
                    }), (0,
                    vt.jsx)(wt, {})]
                })
            })]
        })
    }
      , _t = () => {
        const [e,t] = (0,
        r.useState)(!1)
          , [n,a] = (0,
        r.useState)(!0);
        (0,
        r.useEffect)(( () => {
            const e = () => {
                const e = window.innerWidth;
                t(e <= 768)
            }
            ;
            return e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
        }
        ), []);
        return (0,
        vt.jsxs)("div", {
            style: {
                display: "flex",
                position: "relative"
            },
            children: [(0,
            vt.jsx)(bt, {
                onToggle: e => {
                    a(e)
                }
            }), (0,
            vt.jsx)("div", {
                className: "main-content",
                style: {
                    marginLeft: e ? "0" : n ? "250px" : "0"
                },
                children: (0,
                vt.jsxs)("div", {
                    className: "container",
                    children: [(0,
                    vt.jsx)("header", {
                        className: "header",
                        children: (0,
                        vt.jsx)("h1", {
                            className: "title",
                            children: "MC \u6295\u7a3f"
                        })
                    }), (0,
                    vt.jsxs)("section", {
                        className: "section ".concat(e ? "section-mobile" : ""),
                        children: [(0,
                        vt.jsx)("h2", {
                            className: "subtitle",
                            children: "\u8ad6\u6587\u6295\u7a3f\u8aaa\u660e"
                        }), (0,
                        vt.jsxs)("ul", {
                            children: [(0,
                            vt.jsxs)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: ["\u8ad6\u6587\u6295\u7a3f\u7db2\u5740\uff1a", (0,
                                vt.jsx)("a", {
                                    href: "https://cmt3.research.microsoft.com/MCWASN2025",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "link",
                                    children: "\u8acb\u9ede\u6211"
                                })]
                            }), (0,
                            vt.jsxs)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: ["Call For Papers\uff1a", (0,
                                vt.jsx)("a", {
                                    href: "https://drive.google.com/file/d/1ZsKR6yNjg3U0nO-WKzjj5eYrGW6iJ7wK/view?usp=sharing",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "link",
                                    children: "\u8acb\u9ede\u6211"
                                })]
                            }), (0,
                            vt.jsxs)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: ["\u6295\u7a3f\u8ad6\u6587\u53ef\u70ba2\u9801\u4e4b", (0,
                                vt.jsx)("span", {
                                    className: "red-text",
                                    children: "\u6458\u8981\u8ad6\u6587"
                                }), "\u6216\u81f3\u591a8\u9801\u4e4b", (0,
                                vt.jsx)("span", {
                                    className: "red-text",
                                    children: "\u5b8c\u6574\u8ad6\u6587"
                                }), "\u3002"]
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "\u8ad6\u6587\u8acb\u4ee5A4\u683c\u5f0f\u66f8\u5beb\uff0c\u4e26\u70baTwo Column, Single Spacing\u4e4b\u683c\u5f0f\u8a2d\u5b9a\u3002"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "\u6295\u7a3f\u8ad6\u6587\u8acb\u4ee5 Word \u6a94 (doc \u6216 docx) \u53ca PDF \u6a94\u4e0a\u50b3\u3002"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "\u82e5\u70ba\u570b\u79d1\u6703\u8a08\u756b\u76f8\u95dc\u6210\u679c\uff0c\u8acb\u5728\u8ad6\u6587\u4e4b\u81f4\u8b1d\u4e2d\u8a3b\u660e\u570b\u79d1\u6703\u8a08\u756b\u7de8\u865f\u3002"
                            }), (0,
                            vt.jsxs)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: ["\u5927\u6703\u5c07\u5f9e", (0,
                                vt.jsx)("span", {
                                    className: "red-text",
                                    children: "\u5b8c\u6574\u8ad6\u6587"
                                }), "\u4e2d\u6311\u9078\u51fa\u6578\u7bc7\u512a\u8cea\u8ad6\u6587\uff0c\u9808\u65bc\u6703\u8b70\u73fe\u5834\u53e3\u982d\u767c\u8868\u3002"]
                            })]
                        }), (0,
                        vt.jsx)("h2", {
                            className: "subtitle",
                            children: "\u8ad6\u6587\u683c\u5f0f\u7bc4\u4f8b"
                        }), (0,
                        vt.jsx)("ul", {
                            children: (0,
                            vt.jsxs)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: ["\u8ad6\u6587\u7bc4\u4f8b\u7db2\u5740\uff1a", (0,
                                vt.jsx)("a", {
                                    href: "https://docs.google.com/document/d/1PZljMeg0KHGGlvhgqzasA8rdtbElm5hq/edit?usp=sharing&ouid=115724323665868431051&rtpof=true&sd=true",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "link",
                                    children: "\u8acb\u9ede\u6211"
                                })]
                            })
                        }), (0,
                        vt.jsx)("h2", {
                            className: "subtitle",
                            children: "\u81f4\u8b1d"
                        }), (0,
                        vt.jsxs)("div", {
                            className: "acknowledgment-text",
                            children: [(0,
                            vt.jsxs)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: [(0,
                                vt.jsx)("a", {
                                    href: "https://cmt3.research.microsoft.com",
                                    className: "link",
                                    children: "Microsoft CMT service"
                                }), " was used for managing the peer-reviewing process for this conference."]
                            }), "This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support."]
                        })]
                    }), (0,
                    vt.jsx)(wt, {})]
                })
            })]
        })
    }
      , At = () => {
        const [e,t] = (0,
        r.useState)(!1)
          , [n,a] = (0,
        r.useState)(!0);
        (0,
        r.useEffect)(( () => {
            const e = () => {
                const e = window.innerWidth;
                t(e <= 768)
            }
            ;
            return e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
        }
        ), []);
        return (0,
        vt.jsxs)("div", {
            style: {
                display: "flex",
                position: "relative"
            },
            children: [(0,
            vt.jsx)(bt, {
                onToggle: e => {
                    a(e)
                }
            }), (0,
            vt.jsx)("div", {
                className: "main-content",
                style: {
                    marginLeft: e ? "0" : n ? "250px" : "0"
                },
                children: (0,
                vt.jsxs)("div", {
                    className: "container",
                    children: [(0,
                    vt.jsx)("header", {
                        className: "header",
                        style: {
                            backgroundImage: "url(".concat(kt, ")")
                        },
                        children: (0,
                        vt.jsx)("h1", {
                            className: "title",
                            children: "\u5927\u6703\u8a3b\u518a"
                        })
                    }), (0,
                    vt.jsxs)("section", {
                        className: "section ".concat(e ? "section-mobile" : ""),
                        children: [(0,
                        vt.jsxs)("h2", {
                            className: "subtitle",
                            children: ["\u8a3b\u518a\u8aaa\u660e", (0,
                            vt.jsx)("span", {
                                className: "red-text",
                                children: "(\u8a3b\u518a\u7a0b\u5e8f\u8acb\u898b\u4e0b\u65b9)"
                            })]
                        }), (0,
                        vt.jsx)("p", {
                            className: "section-text red-text",
                            children: "(\u8a3b\u518a\u672a\u958b\u653e)"
                        }), (0,
                        vt.jsx)("ul", {
                            className: "list"
                        }), (0,
                        vt.jsx)("h2", {
                            className: "subtitle",
                            children: "\u8a3b\u518a\u7a0b\u5e8f"
                        }), (0,
                        vt.jsx)("p", {
                            className: "section-text red-text",
                            children: "(\u8a3b\u518a\u672a\u958b\u653e)"
                        })]
                    }), (0,
                    vt.jsx)(wt, {})]
                })
            })]
        })
    }
      , Rt = () => {
        const [e,t] = (0,
        r.useState)(!1)
          , [n,a] = (0,
        r.useState)(!0);
        (0,
        r.useEffect)(( () => {
            const e = () => {
                const e = window.innerWidth;
                t(e <= 768)
            }
            ;
            return e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
        }
        ), []);
        return (0,
        vt.jsxs)("div", {
            style: {
                display: "flex",
                position: "relative"
            },
            children: [(0,
            vt.jsx)(bt, {
                onToggle: e => {
                    a(e)
                }
            }), (0,
            vt.jsx)("div", {
                className: "main-content",
                style: {
                    marginLeft: e ? "0" : n ? "250px" : "0"
                },
                children: (0,
                vt.jsxs)("div", {
                    className: "container",
                    children: [(0,
                    vt.jsx)("header", {
                        className: "header",
                        style: {
                            backgroundImage: "url(".concat(kt, ")")
                        },
                        children: (0,
                        vt.jsx)("h1", {
                            className: "title",
                            children: "WASN \u8ad6\u6587"
                        })
                    }), (0,
                    vt.jsxs)("section", {
                        className: "section ".concat(e ? "section-mobile" : ""),
                        children: [(0,
                        vt.jsx)("h2", {
                            className: "subtitle",
                            children: "\u8ad6\u6587\u5fb5\u7a3f\u4e3b\u984c"
                        }), (0,
                        vt.jsxs)("ul", {
                            className: "list",
                            children: [(0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "AI Technologies in IoT, MANET, WAN, and WSN"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Big Data Analysis, Management, and Storage"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Cyber-Physical Systems (CPS)"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Emerging Applications of IoT"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Location Management"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Mobile Computing Applications"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Mobile Healthcare, Mobile Sensing"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Mobile Social Networks"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Performance Analysis of Wireless Systems"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Pervasive and Ubiquitous Computing"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Security and Privacy"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Smart Home, Smart City, Smart Factory, Smart Living"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Unmanned Aerial Vehicles"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Wearable Technology"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Wireless Communication Protocol and Architecture"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "Wireless Sensor Networks"
                            })]
                        })]
                    }), (0,
                    vt.jsx)(wt, {})]
                })
            })]
        })
    }
      , Ot = () => {
        const [e,t] = (0,
        r.useState)(!1)
          , [n,a] = (0,
        r.useState)(!0);
        (0,
        r.useEffect)(( () => {
            const e = () => {
                const e = window.innerWidth;
                t(e <= 768)
            }
            ;
            return e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
        }
        ), []);
        return (0,
        vt.jsxs)("div", {
            style: {
                display: "flex",
                position: "relative"
            },
            children: [(0,
            vt.jsx)(bt, {
                onToggle: e => {
                    a(e)
                }
            }), (0,
            vt.jsx)("div", {
                className: "main-content",
                style: {
                    marginLeft: e ? "0" : n ? "250px" : "0"
                },
                children: (0,
                vt.jsxs)("div", {
                    className: "container",
                    children: [(0,
                    vt.jsx)("header", {
                        className: "header",
                        children: (0,
                        vt.jsx)("h1", {
                            className: "title",
                            children: "WASN \u6295\u7a3f"
                        })
                    }), (0,
                    vt.jsxs)("section", {
                        className: "section ".concat(e ? "section-mobile" : ""),
                        children: [(0,
                        vt.jsx)("h2", {
                            className: "subtitle",
                            children: "\u8ad6\u6587\u6295\u7a3f\u8aaa\u660e"
                        }), (0,
                        vt.jsxs)("ul", {
                            children: [(0,
                            vt.jsxs)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: ["\u8ad6\u6587\u6295\u7a3f\u7db2\u5740\uff1a", (0,
                                vt.jsx)("a", {
                                    href: "https://cmt3.research.microsoft.com/MCWASN2025",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "link",
                                    children: "\u8acb\u9ede\u6211"
                                })]
                            }), (0,
                            vt.jsxs)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: ["Call For Papers\uff1a", (0,
                                vt.jsx)("a", {
                                    href: "https://drive.google.com/file/d/1ZsKR6yNjg3U0nO-WKzjj5eYrGW6iJ7wK/view?usp=sharing",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "link",
                                    children: "\u8acb\u9ede\u6211"
                                })]
                            }), (0,
                            vt.jsxs)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: ["\u6295\u7a3f\u8ad6\u6587\u53ef\u70ba2\u9801\u4e4b", (0,
                                vt.jsx)("span", {
                                    className: "red-text",
                                    children: "\u6458\u8981\u8ad6\u6587"
                                }), "\u6216\u81f3\u591a8\u9801\u4e4b", (0,
                                vt.jsx)("span", {
                                    className: "red-text",
                                    children: "\u5b8c\u6574\u8ad6\u6587"
                                }), "\u3002"]
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "\u8ad6\u6587\u8acb\u4ee5A4\u683c\u5f0f\u66f8\u5beb\uff0c\u4e26\u70baTwo Column, Single Spacing\u4e4b\u683c\u5f0f\u8a2d\u5b9a\u3002"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "\u6295\u7a3f\u8ad6\u6587\u8acb\u4ee5 Word \u6a94 (doc \u6216 docx) \u53ca PDF \u6a94\u4e0a\u50b3\u3002"
                            }), (0,
                            vt.jsx)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: "\u82e5\u70ba\u570b\u79d1\u6703\u8a08\u756b\u76f8\u95dc\u6210\u679c\uff0c\u8acb\u5728\u8ad6\u6587\u4e4b\u81f4\u8b1d\u4e2d\u8a3b\u660e\u570b\u79d1\u6703\u8a08\u756b\u7de8\u865f\u3002"
                            }), (0,
                            vt.jsxs)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: ["\u5927\u6703\u5c07\u5f9e", (0,
                                vt.jsx)("span", {
                                    className: "red-text",
                                    children: "\u5b8c\u6574\u8ad6\u6587"
                                }), "\u4e2d\u6311\u9078\u51fa\u6578\u7bc7\u512a\u8cea\u8ad6\u6587\uff0c\u9808\u65bc\u6703\u8b70\u73fe\u5834\u53e3\u982d\u767c\u8868\u3002"]
                            })]
                        }), (0,
                        vt.jsx)("h2", {
                            className: "subtitle",
                            children: "\u8ad6\u6587\u683c\u5f0f\u7bc4\u4f8b"
                        }), (0,
                        vt.jsx)("ul", {
                            children: (0,
                            vt.jsxs)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: ["\u8ad6\u6587\u7bc4\u4f8b\u7db2\u5740\uff1a", (0,
                                vt.jsx)("a", {
                                    href: "https://docs.google.com/document/d/1PZljMeg0KHGGlvhgqzasA8rdtbElm5hq/edit?usp=sharing&ouid=115724323665868431051&rtpof=true&sd=true",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "link",
                                    children: "\u8acb\u9ede\u6211"
                                })]
                            })
                        }), (0,
                        vt.jsx)("h2", {
                            className: "subtitle",
                            children: "\u81f4\u8b1d"
                        }), (0,
                        vt.jsxs)("div", {
                            className: "acknowledgment-text",
                            children: [(0,
                            vt.jsxs)("li", {
                                className: "list-item ".concat(e ? "list-item-mobile" : ""),
                                children: [(0,
                                vt.jsx)("a", {
                                    href: "https://cmt3.research.microsoft.com",
                                    className: "link",
                                    children: "Microsoft CMT service"
                                }), " was used for managing the peer-reviewing process for this conference."]
                            }), "This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support."]
                        })]
                    }), (0,
                    vt.jsx)(wt, {})]
                })
            })]
        })
    }
      , Mt = () => (0,
    vt.jsx)("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
        },
        children: (0,
        vt.jsx)("div", {
            style: {
                width: "90%",
                height: "400px",
                borderRadius: "8px",
                overflow: "hidden"
            },
            children: (0,
            vt.jsx)("iframe", {
                title: "Google Map",
                width: "100%",
                height: "400",
                style: {
                    border: 0
                },
                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.6223626491633!2d121.53411317537594!3d25.012944877830094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a98aa2eabfa5%3A0xd5d5d639129dae83!2z6ZuG5oCd5Y-w5aSn5pyD6K2w5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1742393234505!5m2!1szh-TW!2stw",
                allowFullScreen: !0
            })
        })
    })
      , It = () => (0,
    vt.jsx)("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
        },
        children: (0,
        vt.jsx)("div", {
            style: {
                width: "90%",
                height: "400px",
                borderRadius: "8px",
                overflow: "hidden"
            },
            children: (0,
            vt.jsx)("iframe", {
                title: "Google Map",
                width: "100%",
                height: "400",
                style: {
                    border: 0
                },
                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.5963264915263!2d121.52774267609901!3d25.01382913910204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a98c9f01e7af%3A0xa0f269377fe2fc46!2z5YWs6aSo6Jaq5YOR5ZyS5rC05rqQ5ama5a605pyD6aSo!5e0!3m2!1szh-TW!2stw!4v1749827768161!5m2!1szh-TW!2stw",
                allowFullScreen: !0
            })
        })
    })
      , Dt = () => {
        const [e,t] = (0,
        r.useState)(!1)
          , [n,a] = (0,
        r.useState)(!0);
        (0,
        r.useEffect)(( () => {
            const e = () => {
                const e = window.innerWidth;
                t(e <= 768)
            }
            ;
            return e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
        }
        ), []);
        return (0,
        vt.jsxs)("div", {
            style: {
                display: "flex",
                position: "relative"
            },
            children: [(0,
            vt.jsx)(bt, {
                onToggle: e => {
                    a(e)
                }
            }), (0,
            vt.jsx)("div", {
                className: "main-content",
                style: {
                    marginLeft: e ? "0" : n ? "250px" : "0"
                },
                children: (0,
                vt.jsxs)("div", {
                    className: "container",
                    children: [(0,
                    vt.jsx)("header", {
                        className: "header",
                        style: {
                            backgroundImage: "url(".concat(kt, ")")
                        },
                        children: (0,
                        vt.jsx)("h1", {
                            className: "title",
                            children: "\u4ea4\u901a\u8cc7\u8a0a"
                        })
                    }), (0,
                    vt.jsxs)("section", {
                        className: "section ".concat(e ? "section-mobile" : ""),
                        children: [(0,
                        vt.jsx)("h2", {
                            className: "subtitle",
                            children: "\u6d3b\u52d5\u5730\u9ede"
                        }), (0,
                        vt.jsx)("div", {
                            className: "map-container",
                            children: (0,
                            vt.jsx)(Mt, {})
                        })]
                    }), (0,
                    vt.jsxs)("section", {
                        className: "section ".concat(e ? "section-mobile" : ""),
                        children: [(0,
                        vt.jsx)("h2", {
                            className: "subtitle",
                            children: "\u665a\u5bb4\u5730\u9ede"
                        }), (0,
                        vt.jsx)("div", {
                            className: "map-container",
                            children: (0,
                            vt.jsx)(It, {})
                        })]
                    }), (0,
                    vt.jsx)(wt, {})]
                })
            })]
        })
    }
      , Ft = () => {
        const [e,t] = (0,
        r.useState)(!1)
          , [n,a] = (0,
        r.useState)(!0);
        (0,
        r.useLayoutEffect)(( () => {
            const e = window.matchMedia("(max-width: 768px)")
              , n = e => {
                const n = e.matches;
                t(n),
                n && a(!1)
            }
            ;
            return n(e),
            e.addEventListener("change", n),
            () => e.removeEventListener("change", n)
        }
        ), []);
        return (0,
        vt.jsxs)("div", {
            style: {
                display: "flex",
                position: "relative"
            },
            children: [(0,
            vt.jsx)(bt, {
                onToggle: e => {
                    a(e)
                }
            }), (0,
            vt.jsx)("div", {
                className: "main-content",
                style: {
                    marginLeft: e ? "0" : n ? "250px" : "0"
                },
                children: (0,
                vt.jsxs)("div", {
                    className: "container",
                    children: [(0,
                    vt.jsx)("header", {
                        className: "header",
                        style: {
                            backgroundImage: "url(".concat(kt, ")")
                        },
                        children: (0,
                        vt.jsx)("h1", {
                            className: "title",
                            children: "\u8d0a\u52a9\u8fa6\u6cd5"
                        })
                    }), (0,
                    vt.jsxs)("section", {
                        className: "section ".concat(e ? "section-mobile" : ""),
                        children: [(0,
                        vt.jsx)("div", {
                            className: "scroll-hint ".concat(e ? "scroll-hint-mobile" : ""),
                            children: "\u2190 \u5de6\u53f3\u6ed1\u52d5\u67e5\u770b\u5b8c\u6574\u8868\u683c \u2192"
                        }), (0,
                        vt.jsx)("div", {
                            className: "table-container",
                            children: (0,
                            vt.jsxs)("table", {
                                className: "table",
                                children: [(0,
                                vt.jsx)("thead", {
                                    children: (0,
                                    vt.jsxs)("tr", {
                                        children: [(0,
                                        vt.jsx)("th", {
                                            className: "th",
                                            children: "\u7b49\u7d1a\u6a19\u8a8c"
                                        }), (0,
                                        vt.jsx)("th", {
                                            className: "th",
                                            children: "\u947d\u77f3\u7d1a"
                                        }), (0,
                                        vt.jsx)("th", {
                                            className: "th",
                                            children: "\u767d\u91d1\u7d1a"
                                        }), (0,
                                        vt.jsx)("th", {
                                            className: "th",
                                            children: "\u91d1\u7d1a"
                                        })]
                                    })
                                }), (0,
                                vt.jsxs)("tbody", {
                                    children: [(0,
                                    vt.jsxs)("tr", {
                                        children: [(0,
                                        vt.jsx)("td", {
                                            className: "td",
                                            children: "\u8d0a\u52a9\u91d1\u984d"
                                        }), (0,
                                        vt.jsx)("td", {
                                            className: "td",
                                            children: "NT$50,000"
                                        }), (0,
                                        vt.jsx)("td", {
                                            className: "td",
                                            children: "NT$30,000"
                                        }), (0,
                                        vt.jsx)("td", {
                                            className: "td",
                                            children: "NT$15,000"
                                        })]
                                    }), (0,
                                    vt.jsxs)("tr", {
                                        children: [(0,
                                        vt.jsx)("td", {
                                            className: "td",
                                            children: "\u5927\u6703\u5217\u540d"
                                        }), (0,
                                        vt.jsx)("td", {
                                            className: "td",
                                            children: "\u4e3b\u8981\u8d0a\u52a9\u5546"
                                        }), (0,
                                        vt.jsx)("td", {
                                            className: "td",
                                            children: "\u4e3b\u8981\u8d0a\u52a9\u5546"
                                        }), (0,
                                        vt.jsx)("td", {
                                            className: "td",
                                            children: "\u8d0a\u52a9\u5546"
                                        })]
                                    }), (0,
                                    vt.jsxs)("tr", {
                                        children: [(0,
                                        vt.jsx)("td", {
                                            className: "td",
                                            children: "\u5c08\u984c\u6f14\u8b1b"
                                        }), (0,
                                        vt.jsxs)("td", {
                                            className: "td",
                                            children: ["50 \u5206\u9418", (0,
                                            vt.jsx)("br", {}), "(\u6280\u8853\u5167\u5bb9\u70ba\u4e3b\uff0c\u53ef\u8f14\u4ee5\u516c\u53f8\u4ecb\u7d39)"]
                                        }), (0,
                                        vt.jsx)("td", {
                                            className: "td",
                                            rowSpan: 2,
                                            children: (0,
                                            vt.jsxs)("div", {
                                                style: {
                                                    whiteSpace: "pre-wrap"
                                                },
                                                children: ["\u4e8c\u64c7\u4e00", (0,
                                                vt.jsx)("br", {}), "50 \u5206\u9418\uff08\u6280\u8853\u5167\u5bb9\u70ba\u4e3b\uff0c\u53ef\u8f14\u4ee5\u516c\u53f8\u4ecb\u7d39\uff09", (0,
                                                vt.jsx)("br", {}), "1 \u5929"]
                                            })
                                        }), (0,
                                        vt.jsx)("td", {
                                            className: "td",
                                            rowSpan: 2,
                                            children: "\u7121"
                                        })]
                                    }), (0,
                                    vt.jsxs)("tr", {
                                        children: [(0,
                                        vt.jsx)("td", {
                                            className: "td",
                                            children: "\u6524\u4f4d\u6578\u91cf"
                                        }), (0,
                                        vt.jsx)("td", {
                                            className: "td",
                                            children: "1 \u5929"
                                        })]
                                    }), (0,
                                    vt.jsxs)("tr", {
                                        children: [(0,
                                        vt.jsx)("td", {
                                            className: "td",
                                            children: "\u5ee3\u544a\u6587\u5ba3"
                                        }), (0,
                                        vt.jsxs)("td", {
                                            className: "td",
                                            children: ["1. \u96a8\u6703\u520a\u888b\u88dd\u9001 (A4\xd73)", (0,
                                            vt.jsx)("br", {}), "2. \u4e3b\u8981\u54c1\u724c LOGO \u76f4\u65bc\u6703\u5834\u53ca\u7814\u8a0e\u6703\u7db2\u7ad9"]
                                        }), (0,
                                        vt.jsx)("td", {
                                            className: "td",
                                            children: "\u4e3b\u8981\u54c1\u724c LOGO \u76f4\u65bc\u6703\u5834\u53ca\u7814\u8a0e\u6703\u7db2\u7ad9"
                                        }), (0,
                                        vt.jsx)("td", {
                                            className: "td",
                                            children: "\u54c1\u724c LOGO \u76f4\u65bc\u6703\u5834\u53ca\u7814\u8a0e\u6703\u7db2\u7ad9"
                                        })]
                                    }), (0,
                                    vt.jsxs)("tr", {
                                        children: [(0,
                                        vt.jsx)("td", {
                                            className: "td",
                                            children: "\u665a\u5bb4\u5238"
                                        }), (0,
                                        vt.jsx)("td", {
                                            className: "td",
                                            children: "4 \u5f35"
                                        }), (0,
                                        vt.jsx)("td", {
                                            className: "td",
                                            children: "2 \u5f35"
                                        }), (0,
                                        vt.jsx)("td", {
                                            className: "td",
                                            children: "1 \u5f35"
                                        })]
                                    })]
                                })]
                            })
                        }), (0,
                        vt.jsxs)("div", {
                            className: "sponsor-info",
                            children: [(0,
                            vt.jsxs)("p", {
                                children: [(0,
                                vt.jsx)("strong", {
                                    children: "\u5730\u9ede\uff1a"
                                }), "\u96c6\u601d\u53f0\u5927\u6703\u8b70\u4e2d\u5fc3"]
                            }), (0,
                            vt.jsx)("p", {
                                children: (0,
                                vt.jsx)("strong", {
                                    children: "\u5927\u6703\u5c07\u63d0\u4f9b\u8d0a\u52a9\u5ee0\u5546\u512a\u5148\u53c3\u8207\u5ee0\u5546\u6280\u8853\u7814\u8a0e\u3001\u7522\u54c1\u767c\u8868\u4e4b\u6b0a\u5229\u3002"
                                })
                            }), (0,
                            vt.jsx)("p", {
                                className: "note",
                                children: "\u203b\u5099\u8a3b\uff1a\u5927\u6703\u5c0d\u672c\u8d0a\u52a9\u8fa6\u6cd5\u4e4b\u5404\u9805\u5167\u5bb9\u4fdd\u7559\u6700\u5f8c\u6c7a\u5b9a\u6b0a\u3002"
                            })]
                        })]
                    }), (0,
                    vt.jsx)(wt, {})]
                })
            })]
        })
    }
    ;
    a.createRoot(document.getElementById("root")).render((0,
    vt.jsx)(st, {
        children: (0,
        vt.jsxs)(Te, {
            children: [(0,
            vt.jsx)(Ee, {
                path: "/",
                element: (0,
                vt.jsx)(St, {})
            }), (0,
            vt.jsx)(Ee, {
                path: "/committee",
                element: (0,
                vt.jsx)(jt, {})
            }), (0,
            vt.jsx)(Ee, {
                path: "/mc-committee",
                element: (0,
                vt.jsx)(Nt, {})
            }), (0,
            vt.jsx)(Ee, {
                path: "/wasn-committee",
                element: (0,
                vt.jsx)(Et, {})
            }), (0,
            vt.jsx)(Ee, {
                path: "/agenda",
                element: (0,
                vt.jsx)(Tt, {})
            }), (0,
            vt.jsx)(Ee, {
                path: "/speech",
                element: (0,
                vt.jsx)(Pt, {})
            }), (0,
            vt.jsx)(Ee, {
                path: "/discussion",
                element: (0,
                vt.jsx)(Lt, {})
            }), (0,
            vt.jsx)(Ee, {
                path: "/mc-papers",
                element: (0,
                vt.jsx)(zt, {})
            }), (0,
            vt.jsx)(Ee, {
                path: "/mc-submission",
                element: (0,
                vt.jsx)(_t, {})
            }), (0,
            vt.jsx)(Ee, {
                path: "/registration",
                element: (0,
                vt.jsx)(At, {})
            }), (0,
            vt.jsx)(Ee, {
                path: "/wasn-papers",
                element: (0,
                vt.jsx)(Rt, {})
            }), (0,
            vt.jsx)(Ee, {
                path: "/wasn-submission",
                element: (0,
                vt.jsx)(Ot, {})
            }), (0,
            vt.jsx)(Ee, {
                path: "/transportation",
                element: (0,
                vt.jsx)(Dt, {})
            }), (0,
            vt.jsx)(Ee, {
                path: "/sponsorship",
                element: (0,
                vt.jsx)(Ft, {})
            })]
        })
    }))
}
)();
//# sourceMappingURL=main.701a99c4.js.map
