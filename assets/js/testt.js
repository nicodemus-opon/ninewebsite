/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";

    function n(e, t) {
        var n = (t = t || te).createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function i(e) {
        var t = !!e && "length" in e && e.length, n = he.type(e);
        return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function o(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function r(e, t, n) {
        return he.isFunction(t) ? he.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? he.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? he.grep(e, function (e) {
            return se.call(t, e) > -1 !== n
        }) : Se.test(t) ? he.filter(t, e, n) : (t = he.filter(t, e), he.grep(e, function (e) {
            return se.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }

    function s(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    function a(e) {
        var t = {};
        return he.each(e.match(Oe) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function l(e) {
        return e
    }

    function c(e) {
        throw e
    }

    function u(e, t, n, i) {
        var o;
        try {
            e && he.isFunction(o = e.promise) ? o.call(e).done(t).fail(n) : e && he.isFunction(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function d() {
        te.removeEventListener("DOMContentLoaded", d), e.removeEventListener("load", d), he.ready()
    }

    function p() {
        this.expando = he.expando + p.uid++
    }

    function f(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : He.test(e) ? JSON.parse(e) : e)
    }

    function h(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(Pe, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
            try {
                n = f(n)
            } catch (e) {
            }
            Le.set(e, t, n)
        } else n = void 0;
        return n
    }

    function y(e, t, n, i) {
        var o, r = 1, s = 20, a = i ? function () {
                return i.cur()
            } : function () {
                return he.css(e, t, "")
            }, l = a(), c = n && n[3] || (he.cssNumber[t] ? "" : "px"),
            u = (he.cssNumber[t] || "px" !== c && +l) && qe.exec(he.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do {
                r = r || ".5", u /= r, he.style(e, t, u + c)
            } while (r !== (r = a() / l) && 1 !== r && --s)
        }
        return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
    }

    function g(e) {
        var t, n = e.ownerDocument, i = e.nodeName, o = We[i];
        return o || (t = n.body.appendChild(n.createElement(i)), o = he.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), We[i] = o, o)
    }

    function m(e, t) {
        for (var n, i, o = [], r = 0, s = e.length; r < s; r++) (i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = Ie.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && ze(i) && (o[r] = g(i))) : "none" !== n && (o[r] = "none", Ie.set(i, "display", n)));
        for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
        return e
    }

    function v(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && o(e, t) ? he.merge([e], n) : n
    }

    function x(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Ie.set(e[n], "globalEval", !t || Ie.get(t[n], "globalEval"))
    }

    function w(e, t, n, i, o) {
        for (var r, s, a, l, c, u, d = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++) if ((r = e[f]) || 0 === r) if ("object" === he.type(r)) he.merge(p, r.nodeType ? [r] : r); else if (Ke.test(r)) {
            for (s = s || d.appendChild(t.createElement("div")), a = (Be.exec(r) || ["", ""])[1].toLowerCase(), l = Xe[a] || Xe._default, s.innerHTML = l[1] + he.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
            he.merge(p, s.childNodes), (s = d.firstChild).textContent = ""
        } else p.push(t.createTextNode(r));
        for (d.textContent = "", f = 0; r = p[f++];) if (i && he.inArray(r, i) > -1) o && o.push(r); else if (c = he.contains(r.ownerDocument, r), s = v(d.appendChild(r), "script"), c && x(s), n) for (u = 0; r = s[u++];) Ve.test(r.type || "") && n.push(r);
        return d
    }

    function b() {
        return !0
    }

    function _() {
        return !1
    }

    function T() {
        try {
            return te.activeElement
        } catch (e) {
        }
    }

    function S(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in t) S(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = _; else if (!o) return e;
        return 1 === r && (s = o, o = function (e) {
            return he().off(e), s.apply(this, arguments)
        }, o.guid = s.guid || (s.guid = he.guid++)), e.each(function () {
            he.event.add(this, t, o, i, n)
        })
    }

    function C(e, t) {
        return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") ? he(">tbody", e)[0] || e : e
    }

    function k(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function E(e) {
        var t = nt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function A(e, t) {
        var n, i, o, r, s, a, l, c;
        if (1 === t.nodeType) {
            if (Ie.hasData(e) && (r = Ie.access(e), s = Ie.set(t, r), c = r.events)) {
                delete s.handle, s.events = {};
                for (o in c) for (n = 0, i = c[o].length; n < i; n++) he.event.add(t, o, c[o][n])
            }
            Le.hasData(e) && (a = Le.access(e), l = he.extend({}, a), Le.set(t, l))
        }
    }

    function O(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ue.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function j(e, t, i, o) {
        t = oe.apply([], t);
        var r, s, a, l, c, u, d = 0, p = e.length, f = p - 1, h = t[0], y = he.isFunction(h);
        if (y || p > 1 && "string" == typeof h && !pe.checkClone && tt.test(h)) return e.each(function (n) {
            var r = e.eq(n);
            y && (t[0] = h.call(this, n, r.html())), j(r, t, i, o)
        });
        if (p && (r = w(t, e[0].ownerDocument, !1, e, o), s = r.firstChild, 1 === r.childNodes.length && (r = s), s || o)) {
            for (l = (a = he.map(v(r, "script"), k)).length; d < p; d++) c = r, d !== f && (c = he.clone(c, !0, !0), l && he.merge(a, v(c, "script"))), i.call(e[d], c, d);
            if (l) for (u = a[a.length - 1].ownerDocument, he.map(a, E), d = 0; d < l; d++) c = a[d], Ve.test(c.type || "") && !Ie.access(c, "globalEval") && he.contains(u, c) && (c.src ? he._evalUrl && he._evalUrl(c.src) : n(c.textContent.replace(it, ""), u))
        }
        return e
    }

    function D(e, t, n) {
        for (var i, o = t ? he.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || he.cleanData(v(i)), i.parentNode && (n && he.contains(i.ownerDocument, i) && x(v(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function N(e, t, n) {
        var i, o, r, s, a = e.style;
        return (n = n || st(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || he.contains(e.ownerDocument, e) || (s = he.style(e, t)), !pe.pixelMarginRight() && rt.test(s) && ot.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function M(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function I(e) {
        if (e in pt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = dt.length; n--;) if ((e = dt[n] + t) in pt) return e
    }

    function L(e) {
        var t = he.cssProps[e];
        return t || (t = he.cssProps[e] = I(e) || e), t
    }

    function H(e, t, n) {
        var i = qe.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function P(e, t, n, i, o) {
        var r, s = 0;
        for (r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2) "margin" === n && (s += he.css(e, n + Re[r], !0, o)), i ? ("content" === n && (s -= he.css(e, "padding" + Re[r], !0, o)), "margin" !== n && (s -= he.css(e, "border" + Re[r] + "Width", !0, o))) : (s += he.css(e, "padding" + Re[r], !0, o), "padding" !== n && (s += he.css(e, "border" + Re[r] + "Width", !0, o)));
        return s
    }

    function $(e, t, n) {
        var i, o = st(e), r = N(e, t, o), s = "border-box" === he.css(e, "boxSizing", !1, o);
        return rt.test(r) ? r : (i = s && (pe.boxSizingReliable() || r === e.style[t]), "auto" === r && (r = e["offset" + t[0].toUpperCase() + t.slice(1)]), (r = parseFloat(r) || 0) + P(e, t, n || (s ? "border" : "content"), i, o) + "px")
    }

    function q(e, t, n, i, o) {
        return new q.prototype.init(e, t, n, i, o)
    }

    function R() {
        ht && (!1 === te.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(R) : e.setTimeout(R, he.fx.interval), he.fx.tick())
    }

    function z() {
        return e.setTimeout(function () {
            ft = void 0
        }), ft = he.now()
    }

    function F(e, t) {
        var n, i = 0, o = {height: e};
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Re[i], o["margin" + n] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function W(e, t, n) {
        for (var i, o = (B.tweeners[t] || []).concat(B.tweeners["*"]), r = 0, s = o.length; r < s; r++) if (i = o[r].call(n, t, e)) return i
    }

    function U(e, t) {
        var n, i, o, r, s;
        for (n in e) if (i = he.camelCase(n), o = t[i], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = he.cssHooks[i]) && "expand" in s) {
            r = s.expand(r), delete e[i];
            for (n in r) n in e || (e[n] = r[n], t[n] = o)
        } else t[i] = o
    }

    function B(e, t, n) {
        var i, o, r = 0, s = B.prefilters.length, a = he.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (o) return !1;
            for (var t = ft || z(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(i);
            return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
        }, c = a.promise({
            elem: e,
            props: he.extend({}, t),
            opts: he.extend(!0, {specialEasing: {}, easing: he.easing._default}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: ft || z(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var i = he.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(i), i
            },
            stop: function (t) {
                var n = 0, i = t ? c.tweens.length : 0;
                if (o) return this;
                for (o = !0; n < i; n++) c.tweens[n].run(1);
                return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
            }
        }), u = c.props;
        for (U(u, c.opts.specialEasing); r < s; r++) if (i = B.prefilters[r].call(c, e, u, c.opts)) return he.isFunction(i.stop) && (he._queueHooks(c.elem, c.opts.queue).stop = he.proxy(i.stop, i)), i;
        return he.map(u, W, c), he.isFunction(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), he.fx.timer(he.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }

    function V(e) {
        return (e.match(Oe) || []).join(" ")
    }

    function X(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function K(e, t, n, i) {
        var o;
        if (Array.isArray(t)) he.each(t, function (t, o) {
            n || kt.test(e) ? i(e, o) : K(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
        }); else if (n || "object" !== he.type(t)) i(e, t); else for (o in t) K(e + "[" + o + "]", t[o], n, i)
    }

    function Q(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0, r = t.toLowerCase().match(Oe) || [];
            if (he.isFunction(n)) for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function Y(e, t, n, i) {
        function o(a) {
            var l;
            return r[a] = !0, he.each(e[a] || [], function (e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
            }), l
        }

        var r = {}, s = e === $t;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }

    function G(e, t) {
        var n, i, o = he.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && he.extend(!0, e, i), e
    }

    function J(e, t, n) {
        for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i) for (o in a) if (a[o] && a[o].test(i)) {
            l.unshift(o);
            break
        }
        if (l[0] in n) r = l[0]; else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        if (r) return r !== l[0] && l.unshift(r), n[r]
    }

    function Z(e, t, n, i) {
        var o, r, s, a, l, c = {}, u = e.dataTypes.slice();
        if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
        for (r = u.shift(); r;) if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift()) if ("*" === r) r = l; else if ("*" !== l && l !== r) {
            if (!(s = c[l + " " + r] || c["* " + r])) for (o in c) if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                break
            }
            if (!0 !== s) if (s && e.throws) t = s(t); else try {
                t = s(t)
            } catch (e) {
                return {state: "parsererror", error: s ? e : "No conversion from " + l + " to " + r}
            }
        }
        return {state: "success", data: t}
    }

    var ee = [], te = e.document, ne = Object.getPrototypeOf, ie = ee.slice, oe = ee.concat, re = ee.push,
        se = ee.indexOf, ae = {}, le = ae.toString, ce = ae.hasOwnProperty, ue = ce.toString, de = ue.call(Object),
        pe = {}, fe = "3.2.1", he = function (e, t) {
            return new he.fn.init(e, t)
        }, ye = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ge = /^-ms-/, me = /-([a-z])/g, ve = function (e, t) {
            return t.toUpperCase()
        };
    he.fn = he.prototype = {
        jquery: fe, constructor: he, length: 0, toArray: function () {
            return ie.call(this)
        }, get: function (e) {
            return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = he.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return he.each(this, e)
        }, map: function (e) {
            return this.pushStack(he.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(ie.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: re, sort: ee.sort, splice: ee.splice
    }, he.extend = he.fn.extend = function () {
        var e, t, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || he.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], i = e[t], s !== i && (c && i && (he.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && he.isPlainObject(n) ? n : {}, s[t] = he.extend(c, r, i)) : void 0 !== i && (s[t] = i));
        return s
    }, he.extend({
        expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === he.type(e)
        }, isWindow: function (e) {
            return null != e && e === e.window
        }, isNumeric: function (e) {
            var t = he.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== le.call(e) || (t = ne(e)) && ("function" != typeof (n = ce.call(t, "constructor") && t.constructor) || ue.call(n) !== de))
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ae[le.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            n(e)
        }, camelCase: function (e) {
            return e.replace(ge, "ms-").replace(me, ve)
        }, each: function (e, t) {
            var n, o = 0;
            if (i(e)) for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++) ; else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(ye, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : re.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : se.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e
        }, grep: function (e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
            return i
        }, map: function (e, t, n) {
            var o, r, s = 0, a = [];
            if (i(e)) for (o = e.length; s < o; s++) null != (r = t(e[s], s, n)) && a.push(r); else for (s in e) null != (r = t(e[s], s, n)) && a.push(r);
            return oe.apply([], a)
        }, guid: 1, proxy: function (e, t) {
            var n, i, o;
            if ("string" == typeof t && (n = e[t], t = e, e = n), he.isFunction(e)) return i = ie.call(arguments, 2), o = function () {
                return e.apply(t || this, i.concat(ie.call(arguments)))
            }, o.guid = e.guid = e.guid || he.guid++, o
        }, now: Date.now, support: pe
    }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = ee[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        ae["[object " + t + "]"] = t.toLowerCase()
    });
    var xe = function (e) {
        function t(e, t, n, i) {
            var o, r, s, a, l, u, p, f = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!i && ((t ? t.ownerDocument || t : q) !== D && j(t), t = t || D, M)) {
                if (11 !== h && (l = ye.exec(e))) if (o = l[1]) {
                    if (9 === h) {
                        if (!(s = t.getElementById(o))) return n;
                        if (s.id === o) return n.push(s), n
                    } else if (f && (s = f.getElementById(o)) && P(t, s) && s.id === o) return n.push(s), n
                } else {
                    if (l[2]) return Y.apply(n, t.getElementsByTagName(e)), n;
                    if ((o = l[3]) && w.getElementsByClassName && t.getElementsByClassName) return Y.apply(n, t.getElementsByClassName(o)), n
                }
                if (w.qsa && !U[e + " "] && (!I || !I.test(e))) {
                    if (1 !== h) f = t, p = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(xe, we) : t.setAttribute("id", a = $), r = (u = S(e)).length; r--;) u[r] = "#" + a + " " + d(u[r]);
                        p = u.join(","), f = ge.test(e) && c(t.parentNode) || t
                    }
                    if (p) try {
                        return Y.apply(n, f.querySelectorAll(p)), n
                    } catch (e) {
                    } finally {
                        a === $ && t.removeAttribute("id")
                    }
                }
            }
            return k(e.replace(re, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > b.cacheLength && delete e[t.shift()], e[n + " "] = i
            }

            var t = [];
            return e
        }

        function i(e) {
            return e[$] = !0, e
        }

        function o(e) {
            var t = D.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function r(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) b.attrHandle[n[i]] = t
        }

        function s(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && _e(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function l(e) {
            return i(function (t) {
                return t = +t, i(function (n, i) {
                    for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function c(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function u() {
        }

        function d(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function p(e, t, n) {
            var i = t.dir, o = t.next, r = o || i, s = n && "parentNode" === r, a = z++;
            return t.first ? function (t, n, o) {
                for (; t = t[i];) if (1 === t.nodeType || s) return e(t, n, o);
                return !1
            } : function (t, n, l) {
                var c, u, d, p = [R, a];
                if (l) {
                    for (; t = t[i];) if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                } else for (; t = t[i];) if (1 === t.nodeType || s) if (d = t[$] || (t[$] = {}), u = d[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t; else {
                    if ((c = u[r]) && c[0] === R && c[1] === a) return p[2] = c[2];
                    if (u[r] = p, p[2] = e(t, n, l)) return !0
                }
                return !1
            }
        }

        function f(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var o = e.length; o--;) if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function h(e, n, i) {
            for (var o = 0, r = n.length; o < r; o++) t(e, n[o], i);
            return i
        }

        function y(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++) (r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
            return s
        }

        function g(e, t, n, o, r, s) {
            return o && !o[$] && (o = g(o)), r && !r[$] && (r = g(r, s)), i(function (i, s, a, l) {
                var c, u, d, p = [], f = [], g = s.length, m = i || h(t || "*", a.nodeType ? [a] : a, []),
                    v = !e || !i && t ? m : y(m, p, e, a, l), x = n ? r || (i ? e : g || o) ? [] : s : v;
                if (n && n(v, x, a, l), o) for (c = y(x, f), o(c, [], a, l), u = c.length; u--;) (d = c[u]) && (x[f[u]] = !(v[f[u]] = d));
                if (i) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = x.length; u--;) (d = x[u]) && c.push(v[u] = d);
                            r(null, x = [], c, l)
                        }
                        for (u = x.length; u--;) (d = x[u]) && (c = r ? J(i, d) : p[u]) > -1 && (i[c] = !(s[c] = d))
                    }
                } else x = y(x === s ? x.splice(g, x.length) : x), r ? r(null, s, x, l) : Y.apply(s, x)
            })
        }

        function m(e) {
            for (var t, n, i, o = e.length, r = b.relative[e[0].type], s = r || b.relative[" "], a = r ? 1 : 0, l = p(function (e) {
                return e === t
            }, s, !0), c = p(function (e) {
                return J(t, e) > -1
            }, s, !0), u = [function (e, n, i) {
                var o = !r && (i || n !== E) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                return t = null, o
            }]; a < o; a++) if (n = b.relative[e[a].type]) u = [p(f(u), n)]; else {
                if ((n = b.filter[e[a].type].apply(null, e[a].matches))[$]) {
                    for (i = ++a; i < o && !b.relative[e[i].type]; i++) ;
                    return g(a > 1 && f(u), a > 1 && d(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(re, "$1"), n, a < i && m(e.slice(a, i)), i < o && m(e = e.slice(i)), i < o && d(e))
                }
                u.push(n)
            }
            return f(u)
        }

        function v(e, n) {
            var o = n.length > 0, r = e.length > 0, s = function (i, s, a, l, c) {
                var u, d, p, f = 0, h = "0", g = i && [], m = [], v = E, x = i || r && b.find.TAG("*", c),
                    w = R += null == v ? 1 : Math.random() || .1, _ = x.length;
                for (c && (E = s === D || s || c); h !== _ && null != (u = x[h]); h++) {
                    if (r && u) {
                        for (d = 0, s || u.ownerDocument === D || (j(u), a = !M); p = e[d++];) if (p(u, s || D, a)) {
                            l.push(u);
                            break
                        }
                        c && (R = w)
                    }
                    o && ((u = !p && u) && f--, i && g.push(u))
                }
                if (f += h, o && h !== f) {
                    for (d = 0; p = n[d++];) p(g, m, s, a);
                    if (i) {
                        if (f > 0) for (; h--;) g[h] || m[h] || (m[h] = K.call(l));
                        m = y(m)
                    }
                    Y.apply(l, m), c && !i && m.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                }
                return c && (R = w, E = v), g
            };
            return o ? i(s) : s
        }

        var x, w, b, _, T, S, C, k, E, A, O, j, D, N, M, I, L, H, P, $ = "sizzle" + 1 * new Date, q = e.document, R = 0,
            z = 0, F = n(), W = n(), U = n(), B = function (e, t) {
                return e === t && (O = !0), 0
            }, V = {}.hasOwnProperty, X = [], K = X.pop, Q = X.push, Y = X.push, G = X.slice, J = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                return -1
            },
            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            oe = new RegExp(ee + "+", "g"), re = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            se = new RegExp("^" + ee + "*," + ee + "*"), ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), ce = new RegExp(ie),
            ue = new RegExp("^" + te + "$"), de = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + ie),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Z + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            }, pe = /^(?:input|select|textarea|button)$/i, fe = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ge = /[+~]/,
            me = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), ve = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, we = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, be = function () {
                j()
            }, _e = p(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {dir: "parentNode", next: "legend"});
        try {
            Y.apply(X = G.call(q.childNodes), q.childNodes), X[q.childNodes.length].nodeType
        } catch (e) {
            Y = {
                apply: X.length ? function (e, t) {
                    Q.apply(e, G.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, T = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, j = t.setDocument = function (e) {
            var t, n, i = e ? e.ownerDocument || e : q;
            return i !== D && 9 === i.nodeType && i.documentElement ? (D = i, N = D.documentElement, M = !T(D), q !== D && (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", be, !1) : n.attachEvent && n.attachEvent("onunload", be)), w.attributes = o(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = o(function (e) {
                return e.appendChild(D.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = he.test(D.getElementsByClassName), w.getById = o(function (e) {
                return N.appendChild(e).id = $, !D.getElementsByName || !D.getElementsByName($).length
            }), w.getById ? (b.filter.ID = function (e) {
                var t = e.replace(me, ve);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, b.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && M) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (b.filter.ID = function (e) {
                var t = e.replace(me, ve);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, b.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && M) {
                    var n, i, o, r = t.getElementById(e);
                    if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                        for (o = t.getElementsByName(e), i = 0; r = o[i++];) if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                    }
                    return []
                }
            }), b.find.TAG = w.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [], o = 0, r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, b.find.CLASS = w.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && M) return t.getElementsByClassName(e)
            }, L = [], I = [], (w.qsa = he.test(D.querySelectorAll)) && (o(function (e) {
                N.appendChild(e).innerHTML = "<a id='" + $ + "'></a><select id='" + $ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + $ + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + $ + "+*").length || I.push(".#.+[+~]")
            }), o(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = D.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && I.push(":enabled", ":disabled"), N.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
            })), (w.matchesSelector = he.test(H = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && o(function (e) {
                w.disconnectedMatch = H.call(e, "*"), H.call(e, "[s!='']:x"), L.push("!=", ie)
            }), I = I.length && new RegExp(I.join("|")), L = L.length && new RegExp(L.join("|")), t = he.test(N.compareDocumentPosition), P = t || he.test(N.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, B = t ? function (e, t) {
                if (e === t) return O = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === D || e.ownerDocument === q && P(q, e) ? -1 : t === D || t.ownerDocument === q && P(q, t) ? 1 : A ? J(A, e) - J(A, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return O = !0, 0;
                var n, i = 0, o = e.parentNode, r = t.parentNode, a = [e], l = [t];
                if (!o || !r) return e === D ? -1 : t === D ? 1 : o ? -1 : r ? 1 : A ? J(A, e) - J(A, t) : 0;
                if (o === r) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; a[i] === l[i];) i++;
                return i ? s(a[i], l[i]) : a[i] === q ? -1 : l[i] === q ? 1 : 0
            }, D) : D
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== D && j(e), n = n.replace(le, "='$1']"), w.matchesSelector && M && !U[n + " "] && (!L || !L.test(n)) && (!I || !I.test(n))) try {
                var i = H.call(e, n);
                if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {
            }
            return t(n, D, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== D && j(e), P(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== D && j(e);
            var n = b.attrHandle[t.toLowerCase()],
                i = n && V.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
            return void 0 !== i ? i : w.attributes || !M ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.escape = function (e) {
            return (e + "").replace(xe, we)
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [], i = 0, o = 0;
            if (O = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort(B), O) {
                for (; t = e[o++];) t === e[o] && (i = n.push(o));
                for (; i--;) e.splice(n[i], 1)
            }
            return A = null, e
        }, _ = t.getText = function (e) {
            var t, n = "", i = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += _(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else for (; t = e[i++];) n += _(t);
            return n
        }, (b = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: de,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(me, ve), e[3] = (e[3] || e[4] || e[5] || "").replace(me, ve), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(me, ve).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = F[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && F(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, n, i) {
                    return function (o) {
                        var r = t.attr(o, e);
                        return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                    }
                }, CHILD: function (e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                    return 1 === i && 0 === o ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var c, u, d, p, f, h, y = r !== s ? "nextSibling" : "previousSibling", g = t.parentNode,
                            m = a && t.nodeName.toLowerCase(), v = !l && !a, x = !1;
                        if (g) {
                            if (r) {
                                for (; y;) {
                                    for (p = t; p = p[y];) if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                    h = y = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? g.firstChild : g.lastChild], s && v) {
                                for (x = (f = (c = (u = (d = (p = g)[$] || (p[$] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === R && c[1]) && c[2], p = f && g.childNodes[f]; p = ++f && p && p[y] || (x = f = 0) || h.pop();) if (1 === p.nodeType && ++x && p === t) {
                                    u[e] = [R, f, x];
                                    break
                                }
                            } else if (v && (p = t, d = p[$] || (p[$] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === R && c[1], x = f), !1 === x) for (; (p = ++f && p && p[y] || (x = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++x || (v && (d = p[$] || (p[$] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), u[e] = [R, x]), p !== t));) ;
                            return (x -= o) === i || x % i == 0 && x / i >= 0
                        }
                    }
                }, PSEUDO: function (e, n) {
                    var o, r = b.pseudos[e] || b.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[$] ? r(n) : r.length > 1 ? (o = [e, e, "", n], b.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                        for (var i, o = r(e, n), s = o.length; s--;) i = J(e, o[s]), e[i] = !(t[i] = o[s])
                    }) : function (e) {
                        return r(e, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [], n = [], o = C(e.replace(re, "$1"));
                    return o[$] ? i(function (e, t, n, i) {
                        for (var r, s = o(e, null, i, []), a = e.length; a--;) (r = s[a]) && (e[a] = !(t[a] = r))
                    }) : function (e, i, r) {
                        return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                    }
                }), has: i(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }), contains: i(function (e) {
                    return e = e.replace(me, ve), function (t) {
                        return (t.textContent || t.innerText || _(t)).indexOf(e) > -1
                    }
                }), lang: i(function (e) {
                    return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(me, ve).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === N
                }, focus: function (e) {
                    return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: a(!1), disabled: a(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !b.pseudos.empty(e)
                }, header: function (e) {
                    return fe.test(e.nodeName)
                }, input: function (e) {
                    return pe.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: l(function () {
                    return [0]
                }), last: l(function (e, t) {
                    return [t - 1]
                }), eq: l(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: l(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: l(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: l(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }), gt: l(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq;
        for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) b.pseudos[x] = function (e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(x);
        for (x in{submit: !0, reset: !0}) b.pseudos[x] = function (e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(x);
        return u.prototype = b.filters = b.pseudos, b.setFilters = new u, S = t.tokenize = function (e, n) {
            var i, o, r, s, a, l, c, u = W[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (a = e, l = [], c = b.preFilter; a;) {
                i && !(o = se.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ae.exec(a)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(re, " ")
                }), a = a.slice(i.length));
                for (s in b.filter) !(o = de[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                    value: i,
                    type: s,
                    matches: o
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? t.error(e) : W(e, l).slice(0)
        }, C = t.compile = function (e, t) {
            var n, i = [], o = [], r = U[e + " "];
            if (!r) {
                for (t || (t = S(e)), n = t.length; n--;) (r = m(t[n]))[$] ? i.push(r) : o.push(r);
                (r = U(e, v(o, i))).selector = e
            }
            return r
        }, k = t.select = function (e, t, n, i) {
            var o, r, s, a, l, u = "function" == typeof e && e, p = !i && S(e = u.selector || e);
            if (n = n || [], 1 === p.length) {
                if ((r = p[0] = p[0].slice(0)).length > 2 && "ID" === (s = r[0]).type && 9 === t.nodeType && M && b.relative[r[1].type]) {
                    if (!(t = (b.find.ID(s.matches[0].replace(me, ve), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = de.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !b.relative[a = s.type]);) if ((l = b.find[a]) && (i = l(s.matches[0].replace(me, ve), ge.test(r[0].type) && c(t.parentNode) || t))) {
                    if (r.splice(o, 1), !(e = i.length && d(r))) return Y.apply(n, i), n;
                    break
                }
            }
            return (u || C(e, p))(i, t, !M, n, !t || ge.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = $.split("").sort(B).join("") === $, w.detectDuplicates = !!O, j(), w.sortDetached = o(function (e) {
            return 1 & e.compareDocumentPosition(D.createElement("fieldset"))
        }), o(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && o(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || r("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), o(function (e) {
            return null == e.getAttribute("disabled")
        }) || r(Z, function (e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    he.find = xe, he.expr = xe.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = xe.uniqueSort, he.text = xe.getText, he.isXMLDoc = xe.isXML, he.contains = xe.contains, he.escapeSelector = xe.escape;
    var we = function (e, t, n) {
            for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (o && he(e).is(n)) break;
                i.push(e)
            }
            return i
        }, be = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }, _e = he.expr.match.needsContext, Te = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Se = /^.[^:#\[\.,]*$/;
    he.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? he.find.matchesSelector(i, e) ? [i] : [] : he.find.matches(e, he.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, he.fn.extend({
        find: function (e) {
            var t, n, i = this.length, o = this;
            if ("string" != typeof e) return this.pushStack(he(e).filter(function () {
                for (t = 0; t < i; t++) if (he.contains(o[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) he.find(e, o[t], n);
            return i > 1 ? he.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(r(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(r(this, e || [], !0))
        }, is: function (e) {
            return !!r(this, "string" == typeof e && _e.test(e) ? he(e) : e || [], !1).length
        }
    });
    var Ce, ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (he.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || Ce, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ke.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), Te.test(i[1]) && he.isPlainObject(t)) for (i in t) he.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = te.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : he.makeArray(e, this)
    }).prototype = he.fn, Ce = he(te);
    var Ee = /^(?:parents|prev(?:Until|All))/, Ae = {children: !0, contents: !0, next: !0, prev: !0};
    he.fn.extend({
        has: function (e) {
            var t = he(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (he.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var n, i = 0, o = this.length, r = [], s = "string" != typeof e && he(e);
            if (!_e.test(e)) for (; i < o; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
                r.push(n);
                break
            }
            return this.pushStack(r.length > 1 ? he.uniqueSort(r) : r)
        }, index: function (e) {
            return e ? "string" == typeof e ? se.call(he(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), he.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return we(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return we(e, "parentNode", n)
        }, next: function (e) {
            return s(e, "nextSibling")
        }, prev: function (e) {
            return s(e, "previousSibling")
        }, nextAll: function (e) {
            return we(e, "nextSibling")
        }, prevAll: function (e) {
            return we(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return we(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return we(e, "previousSibling", n)
        }, siblings: function (e) {
            return be((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return be(e.firstChild)
        }, contents: function (e) {
            return o(e, "iframe") ? e.contentDocument : (o(e, "template") && (e = e.content || e), he.merge([], e.childNodes))
        }
    }, function (e, t) {
        he.fn[e] = function (n, i) {
            var o = he.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = he.filter(i, o)), this.length > 1 && (Ae[e] || he.uniqueSort(o), Ee.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var Oe = /[^\x20\t\r\n\f]+/g;
    he.Callbacks = function (e) {
        e = "string" == typeof e ? a(e) : he.extend({}, e);
        var t, n, i, o, r = [], s = [], l = -1, c = function () {
            for (o = o || e.once, i = t = !0; s.length; l = -1) for (n = s.shift(); ++l < r.length;) !1 === r[l].apply(n[0], n[1]) && e.stopOnFalse && (l = r.length, n = !1);
            e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
        }, u = {
            add: function () {
                return r && (n && !t && (l = r.length - 1, s.push(n)), function t(n) {
                    he.each(n, function (n, i) {
                        he.isFunction(i) ? e.unique && u.has(i) || r.push(i) : i && i.length && "string" !== he.type(i) && t(i)
                    })
                }(arguments), n && !t && c()), this
            }, remove: function () {
                return he.each(arguments, function (e, t) {
                    for (var n; (n = he.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= l && l--
                }), this
            }, has: function (e) {
                return e ? he.inArray(e, r) > -1 : r.length > 0
            }, empty: function () {
                return r && (r = []), this
            }, disable: function () {
                return o = s = [], r = n = "", this
            }, disabled: function () {
                return !r
            }, lock: function () {
                return o = s = [], n || t || (r = n = ""), this
            }, locked: function () {
                return !!o
            }, fireWith: function (e, n) {
                return o || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
            }, fire: function () {
                return u.fireWith(this, arguments), this
            }, fired: function () {
                return !!i
            }
        };
        return u
    }, he.extend({
        Deferred: function (t) {
            var n = [["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2], ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]],
                i = "pending", o = {
                    state: function () {
                        return i
                    }, always: function () {
                        return r.done(arguments).fail(arguments), this
                    }, catch: function (e) {
                        return o.then(null, e)
                    }, pipe: function () {
                        var e = arguments;
                        return he.Deferred(function (t) {
                            he.each(n, function (n, i) {
                                var o = he.isFunction(e[i[4]]) && e[i[4]];
                                r[i[1]](function () {
                                    var e = o && o.apply(this, arguments);
                                    e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, then: function (t, i, o) {
                        function r(t, n, i, o) {
                            return function () {
                                var a = this, u = arguments, d = function () {
                                    var e, d;
                                    if (!(t < s)) {
                                        if ((e = i.apply(a, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                        d = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(d) ? o ? d.call(e, r(s, n, l, o), r(s, n, c, o)) : (s++, d.call(e, r(s, n, l, o), r(s, n, c, o), r(s, n, l, n.notifyWith))) : (i !== l && (a = void 0, u = [e]), (o || n.resolveWith)(a, u))
                                    }
                                }, p = o ? d : function () {
                                    try {
                                        d()
                                    } catch (e) {
                                        he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= s && (i !== c && (a = void 0, u = [e]), n.rejectWith(a, u))
                                    }
                                };
                                t ? p() : (he.Deferred.getStackHook && (p.stackTrace = he.Deferred.getStackHook()), e.setTimeout(p))
                            }
                        }

                        var s = 0;
                        return he.Deferred(function (e) {
                            n[0][3].add(r(0, e, he.isFunction(o) ? o : l, e.notifyWith)), n[1][3].add(r(0, e, he.isFunction(t) ? t : l)), n[2][3].add(r(0, e, he.isFunction(i) ? i : c))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? he.extend(e, o) : o
                    }
                }, r = {};
            return he.each(n, function (e, t) {
                var s = t[2], a = t[5];
                o[t[1]] = s.add, a && s.add(function () {
                    i = a
                }, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), r[t[0]] = function () {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[t[0] + "With"] = s.fireWith
            }), o.promise(r), t && t.call(r, r), r
        }, when: function (e) {
            var t = arguments.length, n = t, i = Array(n), o = ie.call(arguments), r = he.Deferred(), s = function (e) {
                return function (n) {
                    i[e] = this, o[e] = arguments.length > 1 ? ie.call(arguments) : n, --t || r.resolveWith(i, o)
                }
            };
            if (t <= 1 && (u(e, r.done(s(n)).resolve, r.reject, !t), "pending" === r.state() || he.isFunction(o[n] && o[n].then))) return r.then();
            for (; n--;) u(o[n], s(n), r.reject);
            return r.promise()
        }
    });
    var je = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    he.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && je.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, he.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var De = he.Deferred();
    he.fn.ready = function (e) {
        return De.then(e).catch(function (e) {
            he.readyException(e)
        }), this
    }, he.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --he.readyWait : he.isReady) || (he.isReady = !0, !0 !== e && --he.readyWait > 0 || De.resolveWith(te, [he]))
        }
    }), he.ready.then = De.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(he.ready) : (te.addEventListener("DOMContentLoaded", d), e.addEventListener("load", d));
    var Ne = function (e, t, n, i, o, r, s) {
        var a = 0, l = e.length, c = null == n;
        if ("object" === he.type(n)) {
            o = !0;
            for (a in n) Ne(e, t, a, n[a], !0, r, s)
        } else if (void 0 !== i && (o = !0, he.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
            return c.call(he(e), n)
        })), t)) for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
    }, Me = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    p.uid = 1, p.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Me(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[he.camelCase(t)] = n; else for (i in t) o[he.camelCase(i)] = t[i];
            return o
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(he.camelCase) : (t = he.camelCase(t), t = t in i ? [t] : t.match(Oe) || []), n = t.length;
                    for (; n--;) delete i[t[n]]
                }
                (void 0 === t || he.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !he.isEmptyObject(t)
        }
    };
    var Ie = new p, Le = new p, He = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Pe = /[A-Z]/g;
    he.extend({
        hasData: function (e) {
            return Le.hasData(e) || Ie.hasData(e)
        }, data: function (e, t, n) {
            return Le.access(e, t, n)
        }, removeData: function (e, t) {
            Le.remove(e, t)
        }, _data: function (e, t, n) {
            return Ie.access(e, t, n)
        }, _removeData: function (e, t) {
            Ie.remove(e, t)
        }
    }), he.fn.extend({
        data: function (e, t) {
            var n, i, o, r = this[0], s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = Le.get(r), 1 === r.nodeType && !Ie.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = he.camelCase(i.slice(5)), h(r, i, o[i]));
                    Ie.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function () {
                Le.set(this, e)
            }) : Ne(this, function (t) {
                var n;
                if (r && void 0 === t) {
                    if (void 0 !== (n = Le.get(r, e))) return n;
                    if (void 0 !== (n = h(r, e))) return n
                } else this.each(function () {
                    Le.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                Le.remove(this, e)
            })
        }
    }), he.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Ie.get(e, t), n && (!i || Array.isArray(n) ? i = Ie.access(e, t, he.makeArray(n)) : i.push(n)), i || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = he.queue(e, t), i = n.length, o = n.shift(), r = he._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function () {
                he.dequeue(e, t)
            }, r)), !i && r && r.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Ie.get(e, n) || Ie.access(e, n, {
                empty: he.Callbacks("once memory").add(function () {
                    Ie.remove(e, [t + "queue", n])
                })
            })
        }
    }), he.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = he.queue(this, e, t);
                he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                he.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, i = 1, o = he.Deferred(), r = this, s = this.length, a = function () {
                --i || o.resolveWith(r, [r])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) (n = Ie.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var $e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, qe = new RegExp("^(?:([+-])=|)(" + $e + ")([a-z%]*)$", "i"),
        Re = ["Top", "Right", "Bottom", "Left"], ze = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display")
        }, Fe = function (e, t, n, i) {
            var o, r, s = {};
            for (r in t) s[r] = e.style[r], e.style[r] = t[r];
            o = n.apply(e, i || []);
            for (r in t) e.style[r] = s[r];
            return o
        }, We = {};
    he.fn.extend({
        show: function () {
            return m(this, !0)
        }, hide: function () {
            return m(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ze(this) ? he(this).show() : he(this).hide()
            })
        }
    });
    var Ue = /^(?:checkbox|radio)$/i, Be = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Ve = /^$|\/(?:java|ecma)script/i, Xe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Xe.optgroup = Xe.option, Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead, Xe.th = Xe.td;
    var Ke = /<|&#?\w+;/;
    !function () {
        var e = te.createDocumentFragment().appendChild(te.createElement("div")), t = te.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), pe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", pe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Qe = te.documentElement, Ye = /^key/, Ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Je = /^([^.]*)(?:\.(.+)|)/;
    he.event = {
        global: {}, add: function (e, t, n, i, o) {
            var r, s, a, l, c, u, d, p, f, h, y, g = Ie.get(e);
            if (g) for (n.handler && (r = n, n = r.handler, o = r.selector), o && he.find.matchesSelector(Qe, o), n.guid || (n.guid = he.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (t) {
                return void 0 !== he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0
            }), c = (t = (t || "").match(Oe) || [""]).length; c--;) a = Je.exec(t[c]) || [], f = y = a[1], h = (a[2] || "").split(".").sort(), f && (d = he.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = he.event.special[f] || {}, u = he.extend({
                type: f,
                origType: y,
                data: i,
                handler: n,
                guid: n.guid,
                selector: o,
                needsContext: o && he.expr.match.needsContext.test(o),
                namespace: h.join(".")
            }, r), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), he.event.global[f] = !0)
        }, remove: function (e, t, n, i, o) {
            var r, s, a, l, c, u, d, p, f, h, y, g = Ie.hasData(e) && Ie.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(Oe) || [""]).length; c--;) if (a = Je.exec(t[c]) || [], f = y = a[1], h = (a[2] || "").split(".").sort(), f) {
                    for (d = he.event.special[f] || {}, p = l[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) u = p[r], !o && y !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                    s && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || he.removeEvent(e, f, g.handle), delete l[f])
                } else for (f in l) he.event.remove(e, f + t[c], n, i, !0);
                he.isEmptyObject(l) && Ie.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, n, i, o, r, s, a = he.event.fix(e), l = new Array(arguments.length),
                c = (Ie.get(this, "events") || {})[a.type] || [], u = he.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = he.event.handlers.call(this, a, c), t = 0; (o = s[t++]) && !a.isPropagationStopped();) for (a.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((he.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        }, handlers: function (e, t) {
            var n, i, o, r, s, a = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                for (r = [], s = {}, n = 0; n < l; n++) i = t[n], o = i.selector + " ", void 0 === s[o] && (s[o] = i.needsContext ? he(o, this).index(c) > -1 : he.find(o, this, null, [c]).length), s[o] && r.push(i);
                r.length && a.push({elem: c, handlers: r})
            }
            return c = this, l < t.length && a.push({elem: c, handlers: t.slice(l)}), a
        }, addProp: function (e, t) {
            Object.defineProperty(he.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: he.isFunction(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                }
            })
        }, fix: function (e) {
            return e[he.expando] ? e : new he.Event(e)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== T() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === T() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && o(this, "input")) return this.click(), !1
                }, _default: function (e) {
                    return o(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, he.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, he.Event = function (e, t) {
        return this instanceof he.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? b : _, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), void (this[he.expando] = !0)) : new he.Event(e, t)
    }, he.Event.prototype = {
        constructor: he.Event,
        isDefaultPrevented: _,
        isPropagationStopped: _,
        isImmediatePropagationStopped: _,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = b, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = b, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = b, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, he.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && Ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ge.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, he.event.addProp), he.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        he.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, i = this, o = e.relatedTarget, r = e.handleObj;
                return o && (o === i || he.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), he.fn.extend({
        on: function (e, t, n, i) {
            return S(this, e, t, n, i)
        }, one: function (e, t, n, i) {
            return S(this, e, t, n, i, 1)
        }, off: function (e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, he(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = _), this.each(function () {
                he.event.remove(this, e, n, t)
            })
        }
    });
    var Ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        et = /<script|<style|<link/i, tt = /checked\s*(?:[^=]|=\s*.checked.)/i, nt = /^true\/(.*)/,
        it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    he.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ze, "<$1></$2>")
        }, clone: function (e, t, n) {
            var i, o, r, s, a = e.cloneNode(!0), l = he.contains(e.ownerDocument, e);
            if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e))) for (s = v(a), r = v(e), i = 0, o = r.length; i < o; i++) O(r[i], s[i]);
            if (t) if (n) for (r = r || v(e), s = s || v(a), i = 0, o = r.length; i < o; i++) A(r[i], s[i]); else A(e, a);
            return (s = v(a, "script")).length > 0 && x(s, !l && v(e, "script")), a
        }, cleanData: function (e) {
            for (var t, n, i, o = he.event.special, r = 0; void 0 !== (n = e[r]); r++) if (Me(n)) {
                if (t = n[Ie.expando]) {
                    if (t.events) for (i in t.events) o[i] ? he.event.remove(n, i) : he.removeEvent(n, i, t.handle);
                    n[Ie.expando] = void 0
                }
                n[Le.expando] && (n[Le.expando] = void 0)
            }
        }
    }), he.fn.extend({
        detach: function (e) {
            return D(this, e, !0)
        }, remove: function (e) {
            return D(this, e)
        }, text: function (e) {
            return Ne(this, function (e) {
                return void 0 === e ? he.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return j(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || C(this, e).appendChild(e)
            })
        }, prepend: function () {
            return j(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = C(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return j(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return j(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(v(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return he.clone(this, e, t)
            })
        }, html: function (e) {
            return Ne(this, function (e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !et.test(e) && !Xe[(Be.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = he.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (he.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return j(this, arguments, function (t) {
                var n = this.parentNode;
                he.inArray(this, e) < 0 && (he.cleanData(v(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), he.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        he.fn[e] = function (e) {
            for (var n, i = [], o = he(e), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), he(o[s])[t](n), re.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var ot = /^margin/, rt = new RegExp("^(" + $e + ")(?!px)[a-z%]+$", "i"), st = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    };
    !function () {
        function t() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Qe.appendChild(s);
                var t = e.getComputedStyle(a);
                n = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", o = "4px" === t.marginRight, Qe.removeChild(s), a = null
            }
        }

        var n, i, o, r, s = te.createElement("div"), a = te.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", pe.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), he.extend(pe, {
            pixelPosition: function () {
                return t(), n
            }, boxSizingReliable: function () {
                return t(), i
            }, pixelMarginRight: function () {
                return t(), o
            }, reliableMarginLeft: function () {
                return t(), r
            }
        }))
    }();
    var at = /^(none|table(?!-c[ea]).+)/, lt = /^--/,
        ct = {position: "absolute", visibility: "hidden", display: "block"},
        ut = {letterSpacing: "0", fontWeight: "400"}, dt = ["Webkit", "Moz", "ms"], pt = te.createElement("div").style;
    he.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = N(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {float: "cssFloat"},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = he.camelCase(t), l = lt.test(t), c = e.style;
                return l || (t = L(a)), s = he.cssHooks[t] || he.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t] : ("string" === (r = typeof n) && (o = qe.exec(n)) && o[1] && (n = y(e, t, o), r = "number"), void (null != n && n === n && ("number" === r && (n += o && o[3] || (he.cssNumber[a] ? "" : "px")), pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))))
            }
        },
        css: function (e, t, n, i) {
            var o, r, s, a = he.camelCase(t);
            return lt.test(t) || (t = L(a)), (s = he.cssHooks[t] || he.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = N(e, t, i)), "normal" === o && t in ut && (o = ut[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }), he.each(["height", "width"], function (e, t) {
        he.cssHooks[t] = {
            get: function (e, n, i) {
                if (n) return !at.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? $(e, t, i) : Fe(e, ct, function () {
                    return $(e, t, i)
                })
            }, set: function (e, n, i) {
                var o, r = i && st(e), s = i && P(e, t, i, "border-box" === he.css(e, "boxSizing", !1, r), r);
                return s && (o = qe.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = he.css(e, t)), H(0, n, s)
            }
        }
    }), he.cssHooks.marginLeft = M(pe.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(N(e, "marginLeft")) || e.getBoundingClientRect().left - Fe(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), he.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        he.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + Re[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, ot.test(e) || (he.cssHooks[e + t].set = H)
    }), he.fn.extend({
        css: function (e, t) {
            return Ne(this, function (e, t, n) {
                var i, o, r = {}, s = 0;
                if (Array.isArray(t)) {
                    for (i = st(e), o = t.length; s < o; s++) r[t[s]] = he.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? he.style(e, t, n) : he.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), he.Tween = q, q.prototype = {
        constructor: q, init: function (e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (he.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = q.propHooks[this.prop];
            return e && e.get ? e.get(this) : q.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = q.propHooks[this.prop];
            return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : q.propHooks._default.set(this), this
        }
    }, q.prototype.init.prototype = q.prototype, q.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, q.propHooks.scrollTop = q.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, he.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, he.fx = q.prototype.init, he.fx.step = {};
    var ft, ht, yt = /^(?:toggle|show|hide)$/, gt = /queueHooks$/;
    he.Animation = he.extend(B, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return y(n.elem, e, qe.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Oe);
            for (var n, i = 0, o = e.length; i < o; i++) n = e[i], B.tweeners[n] = B.tweeners[n] || [], B.tweeners[n].unshift(t)
        }, prefilters: [function (e, t, n) {
            var i, o, r, s, a, l, c, u, d = "width" in t || "height" in t, p = this, f = {}, h = e.style,
                y = e.nodeType && ze(e), g = Ie.get(e, "fxshow");
            n.queue || (null == (s = he._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                s.unqueued || a()
            }), s.unqueued++, p.always(function () {
                p.always(function () {
                    s.unqueued--, he.queue(e, "fx").length || s.empty.fire()
                })
            }));
            for (i in t) if (o = t[i], yt.test(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (y ? "hide" : "show")) {
                    if ("show" !== o || !g || void 0 === g[i]) continue;
                    y = !0
                }
                f[i] = g && g[i] || he.style(e, i)
            }
            if ((l = !he.isEmptyObject(t)) || !he.isEmptyObject(f)) {
                d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = g && g.display) && (c = Ie.get(e, "display")), "none" === (u = he.css(e, "display")) && (c ? u = c : (m([e], !0), c = e.style.display || c, u = he.css(e, "display"), m([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === he.css(e, "float") && (l || (p.done(function () {
                    h.display = c
                }), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), l = !1;
                for (i in f) l || (g ? "hidden" in g && (y = g.hidden) : g = Ie.access(e, "fxshow", {display: c}), r && (g.hidden = !y), y && m([e], !0), p.done(function () {
                    y || m([e]), Ie.remove(e, "fxshow");
                    for (i in f) he.style(e, i, f[i])
                })), l = W(y ? g[i] : 0, i, p), i in g || (g[i] = l.start, y && (l.end = l.start, l.start = 0))
            }
        }], prefilter: function (e, t) {
            t ? B.prefilters.unshift(e) : B.prefilters.push(e)
        }
    }), he.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? he.extend({}, e) : {
            complete: n || !n && t || he.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !he.isFunction(t) && t
        };
        return he.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in he.fx.speeds ? i.duration = he.fx.speeds[i.duration] : i.duration = he.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            he.isFunction(i.old) && i.old.call(this), i.queue && he.dequeue(this, i.queue)
        }, i
    }, he.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(ze).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
        }, animate: function (e, t, n, i) {
            var o = he.isEmptyObject(e), r = he.speed(t, n, i), s = function () {
                var t = B(this, he.extend({}, e), r);
                (o || Ie.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        }, stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0, o = null != e && e + "queueHooks", r = he.timers, s = Ie.get(this);
                if (o) s[o] && s[o].stop && i(s[o]); else for (o in s) s[o] && s[o].stop && gt.test(o) && i(s[o]);
                for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                !t && n || he.dequeue(this, e)
            })
        }, finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = Ie.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = he.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, he.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), he.each(["toggle", "show", "hide"], function (e, t) {
        var n = he.fn[t];
        he.fn[t] = function (e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, i, o)
        }
    }), he.each({
        slideDown: F("show"),
        slideUp: F("hide"),
        slideToggle: F("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        he.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), he.timers = [], he.fx.tick = function () {
        var e, t = 0, n = he.timers;
        for (ft = he.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || he.fx.stop(), ft = void 0
    }, he.fx.timer = function (e) {
        he.timers.push(e), he.fx.start()
    }, he.fx.interval = 13, he.fx.start = function () {
        ht || (ht = !0, R())
    }, he.fx.stop = function () {
        ht = null
    }, he.fx.speeds = {slow: 600, fast: 200, _default: 400}, he.fn.delay = function (t, n) {
        return t = he.fx ? he.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function () {
                e.clearTimeout(o)
            }
        })
    }, function () {
        var e = te.createElement("input"), t = te.createElement("select").appendChild(te.createElement("option"));
        e.type = "checkbox", pe.checkOn = "" !== e.value, pe.optSelected = t.selected, (e = te.createElement("input")).value = "t", e.type = "radio", pe.radioValue = "t" === e.value
    }();
    var mt, vt = he.expr.attrHandle;
    he.fn.extend({
        attr: function (e, t) {
            return Ne(this, he.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                he.removeAttr(this, e)
            })
        }
    }), he.extend({
        attr: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? he.prop(e, t, n) : (1 === r && he.isXMLDoc(e) || (o = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void he.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = he.find.attr(e, t)) ? void 0 : i)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!pe.radioValue && "radio" === t && o(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, i = 0, o = t && t.match(Oe);
            if (o && 1 === e.nodeType) for (; n = o[i++];) e.removeAttribute(n)
        }
    }), mt = {
        set: function (e, t, n) {
            return !1 === t ? he.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, he.each(he.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = vt[t] || he.find.attr;
        vt[t] = function (e, t, i) {
            var o, r, s = t.toLowerCase();
            return i || (r = vt[s], vt[s] = o, o = null != n(e, t, i) ? s : null, vt[s] = r), o
        }
    });
    var xt = /^(?:input|select|textarea|button)$/i, wt = /^(?:a|area)$/i;
    he.fn.extend({
        prop: function (e, t) {
            return Ne(this, he.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[he.propFix[e] || e]
            })
        }
    }), he.extend({
        prop: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && he.isXMLDoc(e) || (t = he.propFix[t] || t, o = he.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = he.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : xt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), pe.optSelected || (he.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        he.propFix[this.toLowerCase()] = this
    }), he.fn.extend({
        addClass: function (e) {
            var t, n, i, o, r, s, a, l = 0;
            if (he.isFunction(e)) return this.each(function (t) {
                he(this).addClass(e.call(this, t, X(this)))
            });
            if ("string" == typeof e && e) for (t = e.match(Oe) || []; n = this[l++];) if (o = X(n), i = 1 === n.nodeType && " " + V(o) + " ") {
                for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                o !== (a = V(i)) && n.setAttribute("class", a)
            }
            return this
        }, removeClass: function (e) {
            var t, n, i, o, r, s, a, l = 0;
            if (he.isFunction(e)) return this.each(function (t) {
                he(this).removeClass(e.call(this, t, X(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (t = e.match(Oe) || []; n = this[l++];) if (o = X(n), i = 1 === n.nodeType && " " + V(o) + " ") {
                for (s = 0; r = t[s++];) for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                o !== (a = V(i)) && n.setAttribute("class", a)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function (n) {
                he(this).toggleClass(e.call(this, n, X(this), t), t)
            }) : this.each(function () {
                var t, i, o, r;
                if ("string" === n) for (i = 0, o = he(this), r = e.match(Oe) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else void 0 !== e && "boolean" !== n || ((t = X(this)) && Ie.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Ie.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + V(X(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var bt = /\r/g;
    he.fn.extend({
        val: function (e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = he.isFunction(e), this.each(function (n) {
                var o;
                1 === this.nodeType && (null == (o = i ? e.call(this, n, he(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = he.map(o, function (e) {
                    return null == e ? "" : e + ""
                })), (t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = he.valHooks[o.type] || he.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(bt, "") : null == n ? "" : n : void 0
        }
    }), he.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = he.find.attr(e, "value");
                    return null != t ? t : V(he.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, i, r = e.options, s = e.selectedIndex, a = "select-one" === e.type, l = a ? null : [],
                        c = a ? s + 1 : r.length;
                    for (i = s < 0 ? c : a ? s : 0; i < c; i++) if (((n = r[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
                        if (t = he(n).val(), a) return t;
                        l.push(t)
                    }
                    return l
                }, set: function (e, t) {
                    for (var n, i, o = e.options, r = he.makeArray(t), s = o.length; s--;) i = o[s], (i.selected = he.inArray(he.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), he.each(["radio", "checkbox"], function () {
        he.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = he.inArray(he(e).val(), t) > -1
            }
        }, pe.checkOn || (he.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var _t = /^(?:focusinfocus|focusoutblur)$/;
    he.extend(he.event, {
        trigger: function (t, n, i, o) {
            var r, s, a, l, c, u, d, p = [i || te], f = ce.call(t, "type") ? t.type : t,
                h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || te, 3 !== i.nodeType && 8 !== i.nodeType && !_t.test(f + he.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), c = f.indexOf(":") < 0 && "on" + f, t = t[he.expando] ? t : new he.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : he.makeArray(n, [t]), d = he.event.special[f] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !he.isWindow(i)) {
                    for (l = d.delegateType || f, _t.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (i.ownerDocument || te) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (r = 0; (s = p[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : d.bindType || f, (u = (Ie.get(s, "events") || {})[t.type] && Ie.get(s, "handle")) && u.apply(s, n), (u = c && s[c]) && u.apply && Me(s) && (t.result = u.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = f, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), n) || !Me(i) || c && he.isFunction(i[f]) && !he.isWindow(i) && ((a = i[c]) && (i[c] = null), he.event.triggered = f, i[f](), he.event.triggered = void 0, a && (i[c] = a)), t.result
            }
        }, simulate: function (e, t, n) {
            var i = he.extend(new he.Event, n, {type: e, isSimulated: !0});
            he.event.trigger(i, null, t)
        }
    }), he.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                he.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return he.event.trigger(e, t, n, !0)
        }
    }), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        he.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), he.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), pe.focusin = "onfocusin" in e, pe.focusin || he.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            he.event.simulate(t, e.target, he.event.fix(e))
        };
        he.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this, o = Ie.access(i, t);
                o || i.addEventListener(e, n, !0), Ie.access(i, t, (o || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this, o = Ie.access(i, t) - 1;
                o ? Ie.access(i, t, o) : (i.removeEventListener(e, n, !0), Ie.remove(i, t))
            }
        }
    });
    var Tt = e.location, St = he.now(), Ct = /\?/;
    he.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), n
    };
    var kt = /\[\]$/, Et = /\r?\n/g, At = /^(?:submit|button|image|reset|file)$/i,
        Ot = /^(?:input|select|textarea|keygen)/i;
    he.param = function (e, t) {
        var n, i = [], o = function (e, t) {
            var n = he.isFunction(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function () {
            o(this.name, this.value)
        }); else for (n in e) K(n, e[n], t, o);
        return i.join("&")
    }, he.fn.extend({
        serialize: function () {
            return he.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = he.prop(this, "elements");
                return e ? he.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !he(this).is(":disabled") && Ot.test(this.nodeName) && !At.test(e) && (this.checked || !Ue.test(e))
            }).map(function (e, t) {
                var n = he(this).val();
                return null == n ? null : Array.isArray(n) ? he.map(n, function (e) {
                    return {name: t.name, value: e.replace(Et, "\r\n")}
                }) : {name: t.name, value: n.replace(Et, "\r\n")}
            }).get()
        }
    });
    var jt = /%20/g, Dt = /#.*$/, Nt = /([?&])_=[^&]*/, Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        It = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Lt = /^(?:GET|HEAD)$/, Ht = /^\/\//, Pt = {},
        $t = {}, qt = "*/".concat("*"), Rt = te.createElement("a");
    Rt.href = Tt.href, he.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: It.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": qt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": he.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? G(G(e, he.ajaxSettings), t) : G(he.ajaxSettings, e)
        },
        ajaxPrefilter: Q(Pt),
        ajaxTransport: Q($t),
        ajax: function (t, n) {
            function i(t, n, i, a) {
                var c, p, f, w, b, _ = n;
                u || (u = !0, l && e.clearTimeout(l), o = void 0, s = a || "", T.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (w = J(h, T, i)), w = Z(h, w, T, c), c ? (h.ifModified && ((b = T.getResponseHeader("Last-Modified")) && (he.lastModified[r] = b), (b = T.getResponseHeader("etag")) && (he.etag[r] = b)), 204 === t || "HEAD" === h.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = w.state, p = w.data, f = w.error, c = !f)) : (f = _, !t && _ || (_ = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || _) + "", c ? m.resolveWith(y, [p, _, T]) : m.rejectWith(y, [T, _, f]), T.statusCode(x), x = void 0, d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [T, h, c ? p : f]), v.fireWith(y, [T, _]), d && (g.trigger("ajaxComplete", [T, h]), --he.active || he.event.trigger("ajaxStop")))
            }

            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var o, r, s, a, l, c, u, d, p, f, h = he.ajaxSetup({}, n), y = h.context || h,
                g = h.context && (y.nodeType || y.jquery) ? he(y) : he.event, m = he.Deferred(),
                v = he.Callbacks("once memory"), x = h.statusCode || {}, w = {}, b = {}, _ = "canceled", T = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (u) {
                            if (!a) for (a = {}; t = Mt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return u ? s : null
                    }, setRequestHeader: function (e, t) {
                        return null == u && (e = b[e.toLowerCase()] = b[e.toLowerCase()] || e, w[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == u && (h.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (u) T.always(e[T.status]); else for (t in e) x[t] = [x[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || _;
                        return o && o.abort(t), i(0, t), this
                    }
                };
            if (m.promise(T), h.url = ((t || h.url || Tt.href) + "").replace(Ht, Tt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Oe) || [""], null == h.crossDomain) {
                c = te.createElement("a");
                try {
                    c.href = h.url, c.href = c.href, h.crossDomain = Rt.protocol + "//" + Rt.host != c.protocol + "//" + c.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)), Y(Pt, h, n, T), u) return T;
            (d = he.event && h.global) && 0 == he.active++ && he.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Lt.test(h.type), r = h.url.replace(Dt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(jt, "+")) : (f = h.url.slice(r.length), h.data && (r += (Ct.test(r) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (r = r.replace(Nt, "$1"), f = (Ct.test(r) ? "&" : "?") + "_=" + St++ + f), h.url = r + f), h.ifModified && (he.lastModified[r] && T.setRequestHeader("If-Modified-Since", he.lastModified[r]), he.etag[r] && T.setRequestHeader("If-None-Match", he.etag[r])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) T.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(y, T, h) || u)) return T.abort();
            if (_ = "abort", v.add(h.complete), T.done(h.success), T.fail(h.error), o = Y($t, h, n, T)) {
                if (T.readyState = 1, d && g.trigger("ajaxSend", [T, h]), u) return T;
                h.async && h.timeout > 0 && (l = e.setTimeout(function () {
                    T.abort("timeout")
                }, h.timeout));
                try {
                    u = !1, o.send(w, i)
                } catch (e) {
                    if (u) throw e;
                    i(-1, e)
                }
            } else i(-1, "No Transport");
            return T
        },
        getJSON: function (e, t, n) {
            return he.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return he.get(e, void 0, t, "script")
        }
    }), he.each(["get", "post"], function (e, t) {
        he[t] = function (e, n, i, o) {
            return he.isFunction(n) && (o = o || i, i = n, n = void 0), he.ajax(he.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, he.isPlainObject(e) && e))
        }
    }), he._evalUrl = function (e) {
        return he.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
    }, he.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (e) {
            return he.isFunction(e) ? this.each(function (t) {
                he(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = he(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = he.isFunction(e);
            return this.each(function (n) {
                he(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                he(this).replaceWith(this.childNodes)
            }), this
        }
    }), he.expr.pseudos.hidden = function (e) {
        return !he.expr.pseudos.visible(e)
    }, he.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, he.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    };
    var zt = {0: 200, 1223: 204}, Ft = he.ajaxSettings.xhr();
    pe.cors = !!Ft && "withCredentials" in Ft, pe.ajax = Ft = !!Ft, he.ajaxTransport(function (t) {
        var n, i;
        if (pe.cors || Ft && !t.crossDomain) return {
            send: function (o, r) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                for (s in o) a.setRequestHeader(s, o[s]);
                n = function (e) {
                    return function () {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(zt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                    4 === a.readyState && e.setTimeout(function () {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            }, abort: function () {
                n && n()
            }
        }
    }), he.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), he.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return he.globalEval(e), e
            }
        }
    }), he.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), he.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, o) {
                    t = he("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), te.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var Wt = [], Ut = /(=)\?(?=&|$)|\?\?/;
    he.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Wt.pop() || he.expando + "_" + St++;
            return this[e] = !0, e
        }
    }), he.ajaxPrefilter("json jsonp", function (t, n, i) {
        var o, r, s,
            a = !1 !== t.jsonp && (Ut.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ut, "$1" + o) : !1 !== t.jsonp && (t.url += (Ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
            return s || he.error(o + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
            s = arguments
        }, i.always(function () {
            void 0 === r ? he(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Wt.push(o)), s && he.isFunction(r) && r(s[0]), s = r = void 0
        }), "script"
    }), pe.createHTMLDocument = function () {
        var e = te.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), he.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, o, r;
        return t || (pe.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = te.location.href, t.head.appendChild(i)) : t = te), o = Te.exec(e), r = !n && [], o ? [t.createElement(o[1])] : (o = w([e], t, r), r && r.length && he(r).remove(), he.merge([], o.childNodes))
    }, he.fn.load = function (e, t, n) {
        var i, o, r, s = this, a = e.indexOf(" ");
        return a > -1 && (i = V(e.slice(a)), e = e.slice(0, a)), he.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && he.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            r = arguments, s.html(i ? he("<div>").append(he.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
            s.each(function () {
                n.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        he.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), he.expr.pseudos.animated = function (e) {
        return he.grep(he.timers, function (t) {
            return e === t.elem
        }).length
    }, he.offset = {
        setOffset: function (e, t, n) {
            var i, o, r, s, a, l, c = he.css(e, "position"), u = he(e), d = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), r = he.css(e, "top"), l = he.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (i = u.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, he.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                he.offset.setOffset(this, e, t)
            });
            var t, n, i, o, r = this[0];
            return r ? r.getClientRects().length ? (i = r.getBoundingClientRect(), t = r.ownerDocument, n = t.documentElement, o = t.defaultView, {
                top: i.top + o.pageYOffset - n.clientTop,
                left: i.left + o.pageXOffset - n.clientLeft
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n = this[0], i = {top: 0, left: 0};
                return "fixed" === he.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), o(e[0], "html") || (i = e.offset()), i = {
                    top: i.top + he.css(e[0], "borderTopWidth", !0),
                    left: i.left + he.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - i.top - he.css(n, "marginTop", !0),
                    left: t.left - i.left - he.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === he.css(e, "position");) e = e.offsetParent;
                return e || Qe
            })
        }
    }), he.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        he.fn[e] = function (i) {
            return Ne(this, function (e, i, o) {
                var r;
                return he.isWindow(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o ? r ? r[t] : e[i] : void (r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o)
            }, e, i, arguments.length)
        }
    }), he.each(["top", "left"], function (e, t) {
        he.cssHooks[t] = M(pe.pixelPosition, function (e, n) {
            if (n) return n = N(e, t), rt.test(n) ? he(e).position()[t] + "px" : n
        })
    }), he.each({Height: "height", Width: "width"}, function (e, t) {
        he.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
            he.fn[i] = function (o, r) {
                var s = arguments.length && (n || "boolean" != typeof o),
                    a = n || (!0 === o || !0 === r ? "margin" : "border");
                return Ne(this, function (t, n, o) {
                    var r;
                    return he.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? he.css(t, n, a) : he.style(t, n, o, a)
                }, t, s ? o : void 0, s)
            }
        })
    }), he.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), he.holdReady = function (e) {
        e ? he.readyWait++ : he.ready(!0)
    }, he.isArray = Array.isArray, he.parseJSON = JSON.parse, he.nodeName = o, "function" == typeof define && define.amd && define("jquery", [], function () {
        return he
    });
    var Bt = e.jQuery, Vt = e.$;
    return he.noConflict = function (t) {
        return e.$ === he && (e.$ = Vt), t && e.jQuery === he && (e.jQuery = Bt), he
    }, t || (e.jQuery = e.$ = he), he
}),/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
    function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
    }(this, function () {
        "use strict";

        function e(e) {
            return e && "[object Function]" === {}.toString.call(e)
        }

        function t(e, t) {
            if (1 !== e.nodeType) return [];
            var n = window.getComputedStyle(e, null);
            return t ? n[t] : n
        }

        function n(e) {
            return "HTML" === e.nodeName ? e : e.parentNode || e.host
        }

        function i(e) {
            if (!e || -1 !== ["HTML", "BODY", "#document"].indexOf(e.nodeName)) return window.document.body;
            var o = t(e), r = o.overflow, s = o.overflowX, a = o.overflowY;
            return /(auto|scroll)/.test(r + a + s) ? e : i(n(e))
        }

        function o(e) {
            var n = e && e.offsetParent, i = n && n.nodeName;
            return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === t(n, "position") ? o(n) : n : window.document.documentElement
        }

        function r(e) {
            var t = e.nodeName;
            return "BODY" !== t && ("HTML" === t || o(e.firstElementChild) === e)
        }

        function s(e) {
            return null === e.parentNode ? e : s(e.parentNode)
        }

        function a(e, t) {
            if (!(e && e.nodeType && t && t.nodeType)) return window.document.documentElement;
            var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, i = n ? e : t, l = n ? t : e,
                c = document.createRange();
            c.setStart(i, 0), c.setEnd(l, 0);
            var u = c.commonAncestorContainer;
            if (e !== u && t !== u || i.contains(l)) return r(u) ? u : o(u);
            var d = s(e);
            return d.host ? a(d.host, t) : a(e, s(t).host)
        }

        function l(e) {
            var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
                n = e.nodeName;
            if ("BODY" === n || "HTML" === n) {
                var i = window.document.documentElement;
                return (window.document.scrollingElement || i)[t]
            }
            return e[t]
        }

        function c(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i = l(t, "top"), o = l(t, "left"),
                r = n ? -1 : 1;
            return e.top += i * r, e.bottom += i * r, e.left += o * r, e.right += o * r, e
        }

        function u(e, t) {
            var n = "x" === t ? "Left" : "Top", i = "Left" == n ? "Right" : "Bottom";
            return +e["border" + n + "Width"].split("px")[0] + +e["border" + i + "Width"].split("px")[0]
        }

        function d(e, t, n, i) {
            return X(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], te() ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
        }

        function p() {
            var e = window.document.body, t = window.document.documentElement, n = te() && window.getComputedStyle(t);
            return {height: d("Height", e, t, n), width: d("Width", e, t, n)}
        }

        function f(e) {
            return re({}, e, {right: e.left + e.width, bottom: e.top + e.height})
        }

        function h(e) {
            var n = {};
            if (te()) try {
                n = e.getBoundingClientRect();
                var i = l(e, "top"), o = l(e, "left");
                n.top += i, n.left += o, n.bottom += i, n.right += o
            } catch (e) {
            } else n = e.getBoundingClientRect();
            var r = {left: n.left, top: n.top, width: n.right - n.left, height: n.bottom - n.top},
                s = "HTML" === e.nodeName ? p() : {}, a = s.width || e.clientWidth || r.right - r.left,
                c = s.height || e.clientHeight || r.bottom - r.top, d = e.offsetWidth - a, h = e.offsetHeight - c;
            if (d || h) {
                var y = t(e);
                d -= u(y, "x"), h -= u(y, "y"), r.width -= d, r.height -= h
            }
            return f(r)
        }

        function y(e, n) {
            var o = te(), r = "HTML" === n.nodeName, s = h(e), a = h(n), l = i(e), u = t(n),
                d = +u.borderTopWidth.split("px")[0], p = +u.borderLeftWidth.split("px")[0],
                y = f({top: s.top - a.top - d, left: s.left - a.left - p, width: s.width, height: s.height});
            if (y.marginTop = 0, y.marginLeft = 0, !o && r) {
                var g = +u.marginTop.split("px")[0], m = +u.marginLeft.split("px")[0];
                y.top -= d - g, y.bottom -= d - g, y.left -= p - m, y.right -= p - m, y.marginTop = g, y.marginLeft = m
            }
            return (o ? n.contains(l) : n === l && "BODY" !== l.nodeName) && (y = c(y, n)), y
        }

        function g(e) {
            var t = window.document.documentElement, n = y(e, t), i = X(t.clientWidth, window.innerWidth || 0),
                o = X(t.clientHeight, window.innerHeight || 0), r = l(t), s = l(t, "left");
            return f({top: r - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: i, height: o})
        }

        function m(e) {
            var i = e.nodeName;
            return "BODY" !== i && "HTML" !== i && ("fixed" === t(e, "position") || m(n(e)))
        }

        function v(e, t, o, r) {
            var s = {top: 0, left: 0}, l = a(e, t);
            if ("viewport" === r) s = g(l); else {
                var c;
                "scrollParent" === r ? "BODY" === (c = i(n(e))).nodeName && (c = window.document.documentElement) : c = "window" === r ? window.document.documentElement : r;
                var u = y(c, l);
                if ("HTML" !== c.nodeName || m(l)) s = u; else {
                    var d = p(), f = d.height, h = d.width;
                    s.top += u.top - u.marginTop, s.bottom = f + u.top, s.left += u.left - u.marginLeft, s.right = h + u.left
                }
            }
            return s.left += o, s.top += o, s.right -= o, s.bottom -= o, s
        }

        function x(e) {
            return e.width * e.height
        }

        function w(e, t, n, i, o) {
            var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === e.indexOf("auto")) return e;
            var s = v(n, i, r, o), a = {
                top: {width: s.width, height: t.top - s.top},
                right: {width: s.right - t.right, height: s.height},
                bottom: {width: s.width, height: s.bottom - t.bottom},
                left: {width: t.left - s.left, height: s.height}
            }, l = Object.keys(a).map(function (e) {
                return re({key: e}, a[e], {area: x(a[e])})
            }).sort(function (e, t) {
                return t.area - e.area
            }), c = l.filter(function (e) {
                var t = e.width, i = e.height;
                return t >= n.clientWidth && i >= n.clientHeight
            }), u = 0 < c.length ? c[0].key : l[0].key, d = e.split("-")[1];
            return u + (d ? "-" + d : "")
        }

        function b(e, t, n) {
            return y(n, a(t, n))
        }

        function _(e) {
            var t = window.getComputedStyle(e), n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
                i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
            return {width: e.offsetWidth + i, height: e.offsetHeight + n}
        }

        function T(e) {
            var t = {left: "right", right: "left", bottom: "top", top: "bottom"};
            return e.replace(/left|right|bottom|top/g, function (e) {
                return t[e]
            })
        }

        function S(e, t, n) {
            n = n.split("-")[0];
            var i = _(e), o = {width: i.width, height: i.height}, r = -1 !== ["right", "left"].indexOf(n),
                s = r ? "top" : "left", a = r ? "left" : "top", l = r ? "height" : "width", c = r ? "width" : "height";
            return o[s] = t[s] + t[l] / 2 - i[l] / 2, o[a] = n === a ? t[a] - i[c] : t[T(a)], o
        }

        function C(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0]
        }

        function k(e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function (e) {
                return e[t] === n
            });
            var i = C(e, function (e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }

        function E(t, n, i) {
            return (void 0 === i ? t : t.slice(0, k(t, "name", i))).forEach(function (t) {
                t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var i = t.function || t.fn;
                t.enabled && e(i) && (n.offsets.popper = f(n.offsets.popper), n.offsets.reference = f(n.offsets.reference), n = i(n, t))
            }), n
        }

        function A() {
            if (!this.state.isDestroyed) {
                var e = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
                e.offsets.reference = b(this.state, this.popper, this.reference), e.placement = w(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = "absolute", e = E(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
            }
        }

        function O(e, t) {
            return e.some(function (e) {
                var n = e.name;
                return e.enabled && n === t
            })
        }

        function j(e) {
            for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length - 1; i++) {
                var o = t[i], r = o ? "" + o + n : e;
                if (void 0 !== window.document.body.style[r]) return r
            }
            return null
        }

        function D() {
            return this.state.isDestroyed = !0, O(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[j("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
        }

        function N(e, t, n, o) {
            var r = "BODY" === e.nodeName, s = r ? window : e;
            s.addEventListener(t, n, {passive: !0}), r || N(i(s.parentNode), t, n, o), o.push(s)
        }

        function M(e, t, n, o) {
            n.updateBound = o, window.addEventListener("resize", n.updateBound, {passive: !0});
            var r = i(e);
            return N(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
        }

        function I() {
            this.state.eventsEnabled || (this.state = M(this.reference, this.options, this.state, this.scheduleUpdate))
        }

        function L(e, t) {
            return window.removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
                e.removeEventListener("scroll", t.updateBound)
            }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
        }

        function H() {
            this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = L(this.reference, this.state))
        }

        function P(e) {
            return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
        }

        function $(e, t) {
            Object.keys(t).forEach(function (n) {
                var i = "";
                -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && P(t[n]) && (i = "px"), e.style[n] = t[n] + i
            })
        }

        function q(e, t) {
            Object.keys(t).forEach(function (n) {
                !1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n])
            })
        }

        function R(e, t, n) {
            var i = C(e, function (e) {
                return e.name === t
            }), o = !!i && e.some(function (e) {
                return e.name === n && e.enabled && e.order < i.order
            });
            if (!o) {
                var r = "`" + t + "`";
                console.warn("`" + n + "` modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
            }
            return o
        }

        function z(e) {
            return "end" === e ? "start" : "start" === e ? "end" : e
        }

        function F(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n = ae.indexOf(e),
                i = ae.slice(n + 1).concat(ae.slice(0, n));
            return t ? i.reverse() : i
        }

        function W(e, t, n, i) {
            var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r = +o[1], s = o[2];
            if (!r) return e;
            if (0 === s.indexOf("%")) {
                var a;
                switch (s) {
                    case"%p":
                        a = n;
                        break;
                    case"%":
                    case"%r":
                    default:
                        a = i
                }
                return f(a)[t] / 100 * r
            }
            if ("vh" === s || "vw" === s) {
                return ("vh" === s ? X(document.documentElement.clientHeight, window.innerHeight || 0) : X(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r
            }
            return r
        }

        function U(e, t, n, i) {
            var o = [0, 0], r = -1 !== ["right", "left"].indexOf(i), s = e.split(/(\+|\-)/).map(function (e) {
                return e.trim()
            }), a = s.indexOf(C(s, function (e) {
                return -1 !== e.search(/,|\s/)
            }));
            s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var l = /\s*,\s*|\s+/,
                c = -1 === a ? [s] : [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))];
            return (c = c.map(function (e, i) {
                var o = (1 === i ? !r : r) ? "height" : "width", s = !1;
                return e.reduce(function (e, t) {
                    return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
                }, []).map(function (e) {
                    return W(e, o, t, n)
                })
            })).forEach(function (e, t) {
                e.forEach(function (n, i) {
                    P(n) && (o[t] += n * ("-" === e[i - 1] ? -1 : 1))
                })
            }), o
        }

        for (var B = Math.min, V = Math.floor, X = Math.max, K = ["native code", "[object MutationObserverConstructor]"], Q = "undefined" != typeof window, Y = ["Edge", "Trident", "Firefox"], G = 0, J = 0; J < Y.length; J += 1) if (Q && 0 <= navigator.userAgent.indexOf(Y[J])) {
            G = 1;
            break
        }
        var Z, ee = Q && function (e) {
                return K.some(function (t) {
                    return -1 < (e || "").toString().indexOf(t)
                })
            }(window.MutationObserver) ? function (e) {
                var t = !1, n = 0, i = document.createElement("span");
                return new MutationObserver(function () {
                    e(), t = !1
                }).observe(i, {attributes: !0}), function () {
                    t || (t = !0, i.setAttribute("x-index", n), ++n)
                }
            } : function (e) {
                var t = !1;
                return function () {
                    t || (t = !0, setTimeout(function () {
                        t = !1, e()
                    }, G))
                }
            }, te = function () {
                return void 0 == Z && (Z = -1 !== navigator.appVersion.indexOf("MSIE 10")), Z
            }, ne = function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }, ie = function () {
                function e(e, t) {
                    for (var n, i = 0; i < t.length; i++) n = t[i], n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }

                return function (t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(), oe = function (e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }, re = Object.assign || function (e) {
                for (var t, n = 1; n < arguments.length; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            },
            se = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
            ae = se.slice(3), le = {FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise"},
            ce = function () {
                function t(n, i) {
                    var o = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                    ne(this, t), this.scheduleUpdate = function () {
                        return requestAnimationFrame(o.update)
                    }, this.update = ee(this.update.bind(this)), this.options = re({}, t.Defaults, r), this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    }, this.reference = n.jquery ? n[0] : n, this.popper = i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(re({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
                        o.options.modifiers[e] = re({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
                    }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                        return re({name: e}, o.options.modifiers[e])
                    }).sort(function (e, t) {
                        return e.order - t.order
                    }), this.modifiers.forEach(function (t) {
                        t.enabled && e(t.onLoad) && t.onLoad(o.reference, o.popper, o.options, t, o.state)
                    }), this.update();
                    var s = this.options.eventsEnabled;
                    s && this.enableEventListeners(), this.state.eventsEnabled = s
                }

                return ie(t, [{
                    key: "update", value: function () {
                        return A.call(this)
                    }
                }, {
                    key: "destroy", value: function () {
                        return D.call(this)
                    }
                }, {
                    key: "enableEventListeners", value: function () {
                        return I.call(this)
                    }
                }, {
                    key: "disableEventListeners", value: function () {
                        return H.call(this)
                    }
                }]), t
            }();
        return ce.Utils = ("undefined" == typeof window ? global : window).PopperUtils, ce.placements = se, ce.Defaults = {
            placement: "bottom", eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
            }, onUpdate: function () {
            }, modifiers: {
                shift: {
                    order: 100, enabled: !0, fn: function (e) {
                        var t = e.placement, n = t.split("-")[0], i = t.split("-")[1];
                        if (i) {
                            var o = e.offsets, r = o.reference, s = o.popper, a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top", c = a ? "width" : "height",
                                u = {start: oe({}, l, r[l]), end: oe({}, l, r[l] + r[c] - s[c])};
                            e.offsets.popper = re({}, s, u[i])
                        }
                        return e
                    }
                }, offset: {
                    order: 200, enabled: !0, fn: function (e, t) {
                        var n, i = t.offset, o = e.placement, r = e.offsets, s = r.popper, a = r.reference,
                            l = o.split("-")[0];
                        return n = P(+i) ? [+i, 0] : U(i, s, a, l), "left" === l ? (s.top += n[0], s.left -= n[1]) : "right" === l ? (s.top += n[0], s.left += n[1]) : "top" === l ? (s.left += n[0], s.top -= n[1]) : "bottom" === l && (s.left += n[0], s.top += n[1]), e.popper = s, e
                    }, offset: 0
                }, preventOverflow: {
                    order: 300, enabled: !0, fn: function (e, t) {
                        var n = t.boundariesElement || o(e.instance.popper);
                        e.instance.reference === n && (n = o(n));
                        var i = v(e.instance.popper, e.instance.reference, t.padding, n);
                        t.boundaries = i;
                        var r = t.priority, s = e.offsets.popper, a = {
                            primary: function (e) {
                                var n = s[e];
                                return s[e] < i[e] && !t.escapeWithReference && (n = X(s[e], i[e])), oe({}, e, n)
                            }, secondary: function (e) {
                                var n = "right" === e ? "left" : "top", o = s[n];
                                return s[e] > i[e] && !t.escapeWithReference && (o = B(s[n], i[e] - ("right" === e ? s.width : s.height))), oe({}, n, o)
                            }
                        };
                        return r.forEach(function (e) {
                            var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                            s = re({}, s, a[t](e))
                        }), e.offsets.popper = s, e
                    }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"
                }, keepTogether: {
                    order: 400, enabled: !0, fn: function (e) {
                        var t = e.offsets, n = t.popper, i = t.reference, o = e.placement.split("-")[0], r = V,
                            s = -1 !== ["top", "bottom"].indexOf(o), a = s ? "right" : "bottom", l = s ? "left" : "top",
                            c = s ? "width" : "height";
                        return n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a])), e
                    }
                }, arrow: {
                    order: 500, enabled: !0, fn: function (e, n) {
                        if (!R(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var i = n.element;
                        if ("string" == typeof i) {
                            if (!(i = e.instance.popper.querySelector(i))) return e
                        } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var o = e.placement.split("-")[0], r = e.offsets, s = r.popper, a = r.reference,
                            l = -1 !== ["left", "right"].indexOf(o), c = l ? "height" : "width", u = l ? "Top" : "Left",
                            d = u.toLowerCase(), p = l ? "left" : "top", h = l ? "bottom" : "right", y = _(i)[c];
                        a[h] - y < s[d] && (e.offsets.popper[d] -= s[d] - (a[h] - y)), a[d] + y > s[h] && (e.offsets.popper[d] += a[d] + y - s[h]);
                        var g = a[d] + a[c] / 2 - y / 2, m = t(e.instance.popper, "margin" + u).replace("px", ""),
                            v = g - f(e.offsets.popper)[d] - m;
                        return v = X(B(s[c] - y, v), 0), e.arrowElement = i, e.offsets.arrow = {}, e.offsets.arrow[d] = Math.round(v), e.offsets.arrow[p] = "", e
                    }, element: "[x-arrow]"
                }, flip: {
                    order: 600, enabled: !0, fn: function (e, t) {
                        if (O(e.instance.modifiers, "inner")) return e;
                        if (e.flipped && e.placement === e.originalPlacement) return e;
                        var n = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
                            i = e.placement.split("-")[0], o = T(i), r = e.placement.split("-")[1] || "", s = [];
                        switch (t.behavior) {
                            case le.FLIP:
                                s = [i, o];
                                break;
                            case le.CLOCKWISE:
                                s = F(i);
                                break;
                            case le.COUNTERCLOCKWISE:
                                s = F(i, !0);
                                break;
                            default:
                                s = t.behavior
                        }
                        return s.forEach(function (a, l) {
                            if (i !== a || s.length === l + 1) return e;
                            i = e.placement.split("-")[0], o = T(i);
                            var c = e.offsets.popper, u = e.offsets.reference, d = V,
                                p = "left" === i && d(c.right) > d(u.left) || "right" === i && d(c.left) < d(u.right) || "top" === i && d(c.bottom) > d(u.top) || "bottom" === i && d(c.top) < d(u.bottom),
                                f = d(c.left) < d(n.left), h = d(c.right) > d(n.right), y = d(c.top) < d(n.top),
                                g = d(c.bottom) > d(n.bottom),
                                m = "left" === i && f || "right" === i && h || "top" === i && y || "bottom" === i && g,
                                v = -1 !== ["top", "bottom"].indexOf(i),
                                x = !!t.flipVariations && (v && "start" === r && f || v && "end" === r && h || !v && "start" === r && y || !v && "end" === r && g);
                            (p || m || x) && (e.flipped = !0, (p || m) && (i = s[l + 1]), x && (r = z(r)), e.placement = i + (r ? "-" + r : ""), e.offsets.popper = re({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = E(e.instance.modifiers, e, "flip"))
                        }), e
                    }, behavior: "flip", padding: 5, boundariesElement: "viewport"
                }, inner: {
                    order: 700, enabled: !1, fn: function (e) {
                        var t = e.placement, n = t.split("-")[0], i = e.offsets, o = i.popper, r = i.reference,
                            s = -1 !== ["left", "right"].indexOf(n), a = -1 === ["top", "left"].indexOf(n);
                        return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), e.placement = T(t), e.offsets.popper = f(o), e
                    }
                }, hide: {
                    order: 800, enabled: !0, fn: function (e) {
                        if (!R(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference, n = C(e.instance.modifiers, function (e) {
                            return "preventOverflow" === e.name
                        }).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                }, computeStyle: {
                    order: 850, enabled: !0, fn: function (e, t) {
                        var n = t.x, i = t.y, r = e.offsets.popper, s = C(e.instance.modifiers, function (e) {
                            return "applyStyle" === e.name
                        }).gpuAcceleration;
                        void 0 !== s && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var a, l, c = void 0 === s ? t.gpuAcceleration : s, u = h(o(e.instance.popper)),
                            d = {position: r.position},
                            p = {left: V(r.left), top: V(r.top), bottom: V(r.bottom), right: V(r.right)},
                            f = "bottom" === n ? "top" : "bottom", y = "right" === i ? "left" : "right",
                            g = j("transform");
                        if (l = "bottom" == f ? -u.height + p.bottom : p.top, a = "right" == y ? -u.width + p.right : p.left, c && g) d[g] = "translate3d(" + a + "px, " + l + "px, 0)", d[f] = 0, d[y] = 0, d.willChange = "transform"; else {
                            var m = "bottom" == f ? -1 : 1, v = "right" == y ? -1 : 1;
                            d[f] = l * m, d[y] = a * v, d.willChange = f + ", " + y
                        }
                        var x = {"x-placement": e.placement};
                        return e.attributes = re({}, x, e.attributes), e.styles = re({}, d, e.styles), e.arrowStyles = re({}, e.offsets.arrow, e.arrowStyles), e
                    }, gpuAcceleration: !0, x: "bottom", y: "right"
                }, applyStyle: {
                    order: 900, enabled: !0, fn: function (e) {
                        return $(e.instance.popper, e.styles), q(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && $(e.arrowElement, e.arrowStyles), e
                    }, onLoad: function (e, t, n, i, o) {
                        var r = b(o, t, e),
                            s = w(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", s), $(t, {position: "absolute"}), n
                    }, gpuAcceleration: void 0
                }
            }
        }, ce
    }), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e = e || self).bootstrap = {}, e.jQuery, e.Popper)
}(this, function (e, t, n) {
    "use strict";

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function o(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function r(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}, i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function (t) {
                var i, o, r;
                i = e, r = n[o = t], o in i ? Object.defineProperty(i, o, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[o] = r
            })
        }
        return e
    }

    function s(e, t, n) {
        if (0 === e.length) return e;
        if (n && "function" == typeof n) return n(e);
        for (var i = (new window.DOMParser).parseFromString(e, "text/html"), o = Object.keys(t), r = [].slice.call(i.body.querySelectorAll("*")), s = 0, a = r.length; s < a; s++) !function (e, n) {
            var i = r[e], s = i.nodeName.toLowerCase();
            if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
            var a = [].slice.call(i.attributes), l = [].concat(t["*"] || [], t[s] || []);
            a.forEach(function (e) {
                (function (e, t) {
                    var n = e.nodeName.toLowerCase();
                    if (-1 !== t.indexOf(n)) return -1 === Ae.indexOf(n) || Boolean(e.nodeValue.match(je) || e.nodeValue.match(De));
                    for (var i = t.filter(function (e) {
                        return e instanceof RegExp
                    }), o = 0, r = i.length; o < r; o++) if (n.match(i[o])) return !0;
                    return !1
                })(e, l) || i.removeAttribute(e.nodeName)
            })
        }(s);
        return i.body.innerHTML
    }

    t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
    var a = "transitionend", l = {
        TRANSITION_END: "bsTransitionEnd", getUID: function (e) {
            for (; e += ~~(1e6 * Math.random()), document.getElementById(e);) ;
            return e
        }, getSelectorFromElement: function (e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        }, getTransitionDurationFromElement: function (e) {
            if (!e) return 0;
            var n = t(e).css("transition-duration"), i = t(e).css("transition-delay"), o = parseFloat(n),
                r = parseFloat(i);
            return o || r ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
        }, reflow: function (e) {
            return e.offsetHeight
        }, triggerTransitionEnd: function (e) {
            t(e).trigger(a)
        }, supportsTransitionEnd: function () {
            return Boolean(a)
        }, isElement: function (e) {
            return (e[0] || e).nodeType
        }, typeCheckConfig: function (e, t, n) {
            for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
                var o = n[i], r = t[i],
                    s = r && l.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                if (!new RegExp(o).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
            }
            var a
        }, findShadowRoot: function (e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof e.getRootNode) return e instanceof ShadowRoot ? e : e.parentNode ? l.findShadowRoot(e.parentNode) : null;
            var t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null
        }
    };
    t.fn.emulateTransitionEnd = function (e) {
        var n = this, i = !1;
        return t(this).one(l.TRANSITION_END, function () {
            i = !0
        }), setTimeout(function () {
            i || l.triggerTransitionEnd(n)
        }, e), this
    }, t.event.special[l.TRANSITION_END] = {
        bindType: a, delegateType: a, handle: function (e) {
            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    };
    var c = "alert", u = "bs.alert", d = "." + u, p = t.fn[c],
        f = {CLOSE: "close" + d, CLOSED: "closed" + d, CLICK_DATA_API: "click" + d + ".data-api"}, h = function () {
            function e(e) {
                this._element = e
            }

            var n = e.prototype;
            return n.close = function (e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, n.dispose = function () {
                t.removeData(this._element, u), this._element = null
            }, n._getRootElement = function (e) {
                var n = l.getSelectorFromElement(e), i = !1;
                return n && (i = document.querySelector(n)), i || (i = t(e).closest(".alert")[0]), i
            }, n._triggerCloseEvent = function (e) {
                var n = t.Event(f.CLOSE);
                return t(e).trigger(n), n
            }, n._removeElement = function (e) {
                var n = this;
                if (t(e).removeClass("show"), t(e).hasClass("fade")) {
                    var i = l.getTransitionDurationFromElement(e);
                    t(e).one(l.TRANSITION_END, function (t) {
                        return n._destroyElement(e, t)
                    }).emulateTransitionEnd(i)
                } else this._destroyElement(e)
            }, n._destroyElement = function (e) {
                t(e).detach().trigger(f.CLOSED).remove()
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this), o = i.data(u);
                    o || (o = new e(this), i.data(u, o)), "close" === n && o[n](this)
                })
            }, e._handleDismiss = function (e) {
                return function (t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, o(e, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', h._handleDismiss(new h)), t.fn[c] = h._jQueryInterface, t.fn[c].Constructor = h, t.fn[c].noConflict = function () {
        return t.fn[c] = p, h._jQueryInterface
    };
    var y = "button", g = "bs.button", m = "." + g, v = ".data-api", x = t.fn[y], w = "active",
        b = '[data-toggle^="button"]', _ = ".btn",
        T = {CLICK_DATA_API: "click" + m + v, FOCUS_BLUR_DATA_API: "focus" + m + v + " blur" + m + v}, S = function () {
            function e(e) {
                this._element = e
            }

            var n = e.prototype;
            return n.toggle = function () {
                var e = !0, n = !0, i = t(this._element).closest('[data-toggle="buttons"]')[0];
                if (i) {
                    var o = this._element.querySelector('input:not([type="hidden"])');
                    if (o) {
                        if ("radio" === o.type) if (o.checked && this._element.classList.contains(w)) e = !1; else {
                            var r = i.querySelector(".active");
                            r && t(r).removeClass(w)
                        }
                        if (e) {
                            if (o.hasAttribute("disabled") || i.hasAttribute("disabled") || o.classList.contains("disabled") || i.classList.contains("disabled")) return;
                            o.checked = !this._element.classList.contains(w), t(o).trigger("change")
                        }
                        o.focus(), n = !1
                    }
                }
                n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(w)), e && t(this._element).toggleClass(w)
            }, n.dispose = function () {
                t.removeData(this._element, g), this._element = null
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this).data(g);
                    i || (i = new e(this), t(this).data(g, i)), "toggle" === n && i[n]()
                })
            }, o(e, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(T.CLICK_DATA_API, b, function (e) {
        e.preventDefault();
        var n = e.target;
        t(n).hasClass("btn") || (n = t(n).closest(_)), S._jQueryInterface.call(t(n), "toggle")
    }).on(T.FOCUS_BLUR_DATA_API, b, function (e) {
        var n = t(e.target).closest(_)[0];
        t(n).toggleClass("focus", /^focus(in)?$/.test(e.type))
    }), t.fn[y] = S._jQueryInterface, t.fn[y].Constructor = S, t.fn[y].noConflict = function () {
        return t.fn[y] = x, S._jQueryInterface
    };
    var C = "carousel", k = "bs.carousel", E = "." + k, A = ".data-api", O = t.fn[C],
        j = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0}, D = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        }, N = "next", M = "prev", I = {
            SLIDE: "slide" + E,
            SLID: "slid" + E,
            KEYDOWN: "keydown" + E,
            MOUSEENTER: "mouseenter" + E,
            MOUSELEAVE: "mouseleave" + E,
            TOUCHSTART: "touchstart" + E,
            TOUCHMOVE: "touchmove" + E,
            TOUCHEND: "touchend" + E,
            POINTERDOWN: "pointerdown" + E,
            POINTERUP: "pointerup" + E,
            DRAG_START: "dragstart" + E,
            LOAD_DATA_API: "load" + E + A,
            CLICK_DATA_API: "click" + E + A
        }, L = "active", H = ".active.carousel-item", P = ".carousel-indicators", $ = {TOUCH: "touch", PEN: "pen"},
        q = function () {
            function e(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(P), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }

            var n = e.prototype;
            return n.next = function () {
                this._isSliding || this._slide(N)
            }, n.nextWhenVisible = function () {
                !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
            }, n.prev = function () {
                this._isSliding || this._slide(M)
            }, n.pause = function (e) {
                e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (l.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, n.cycle = function (e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, n.to = function (e) {
                var n = this;
                this._activeElement = this._element.querySelector(H);
                var i = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) t(this._element).one(I.SLID, function () {
                    return n.to(e)
                }); else {
                    if (i === e) return this.pause(), void this.cycle();
                    var o = i < e ? N : M;
                    this._slide(o, this._items[e])
                }
            }, n.dispose = function () {
                t(this._element).off(E), t.removeData(this._element, k), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, n._getConfig = function (e) {
                return e = r({}, j, e), l.typeCheckConfig(C, e, D), e
            }, n._handleSwipe = function () {
                var e = Math.abs(this.touchDeltaX);
                if (!(e <= 40)) {
                    var t = e / this.touchDeltaX;
                    0 < t && this.prev(), t < 0 && this.next()
                }
            }, n._addEventListeners = function () {
                var e = this;
                this._config.keyboard && t(this._element).on(I.KEYDOWN, function (t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && t(this._element).on(I.MOUSEENTER, function (t) {
                    return e.pause(t)
                }).on(I.MOUSELEAVE, function (t) {
                    return e.cycle(t)
                }), this._config.touch && this._addTouchEventListeners()
            }, n._addTouchEventListeners = function () {
                var e = this;
                if (this._touchSupported) {
                    var n = function (t) {
                        e._pointerEvent && $[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                    }, i = function (t) {
                        e._pointerEvent && $[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
                            return e.cycle(t)
                        }, 500 + e._config.interval))
                    };
                    t(this._element.querySelectorAll(".carousel-item img")).on(I.DRAG_START, function (e) {
                        return e.preventDefault()
                    }), this._pointerEvent ? (t(this._element).on(I.POINTERDOWN, function (e) {
                        return n(e)
                    }), t(this._element).on(I.POINTERUP, function (e) {
                        return i(e)
                    }), this._element.classList.add("pointer-event")) : (t(this._element).on(I.TOUCHSTART, function (e) {
                        return n(e)
                    }), t(this._element).on(I.TOUCHMOVE, function (t) {
                        var n;
                        (n = t).originalEvent.touches && 1 < n.originalEvent.touches.length ? e.touchDeltaX = 0 : e.touchDeltaX = n.originalEvent.touches[0].clientX - e.touchStartX
                    }), t(this._element).on(I.TOUCHEND, function (e) {
                        return i(e)
                    }))
                }
            }, n._keydown = function (e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, n._getItemIndex = function (e) {
                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
            }, n._getItemByDirection = function (e, t) {
                var n = e === N, i = e === M, o = this._getItemIndex(t), r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap) return t;
                var s = (o + (e === M ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, n._triggerSlideEvent = function (e, n) {
                var i = this._getItemIndex(e), o = this._getItemIndex(this._element.querySelector(H)),
                    r = t.Event(I.SLIDE, {relatedTarget: e, direction: n, from: o, to: i});
                return t(this._element).trigger(r), r
            }, n._setActiveIndicatorElement = function (e) {
                if (this._indicatorsElement) {
                    var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                    t(n).removeClass(L);
                    var i = this._indicatorsElement.children[this._getItemIndex(e)];
                    i && t(i).addClass(L)
                }
            }, n._slide = function (e, n) {
                var i, o, r, s = this, a = this._element.querySelector(H), c = this._getItemIndex(a),
                    u = n || a && this._getItemByDirection(e, a), d = this._getItemIndex(u),
                    p = Boolean(this._interval);
                if (r = e === N ? (i = "carousel-item-left", o = "carousel-item-next", "left") : (i = "carousel-item-right", o = "carousel-item-prev", "right"), u && t(u).hasClass(L)) this._isSliding = !1; else if (!this._triggerSlideEvent(u, r).isDefaultPrevented() && a && u) {
                    this._isSliding = !0, p && this.pause(), this._setActiveIndicatorElement(u);
                    var f = t.Event(I.SLID, {relatedTarget: u, direction: r, from: c, to: d});
                    if (t(this._element).hasClass("slide")) {
                        t(u).addClass(o), l.reflow(u), t(a).addClass(i), t(u).addClass(i);
                        var h = parseInt(u.getAttribute("data-interval"), 10);
                        this._config.interval = h ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, h) : this._config.defaultInterval || this._config.interval;
                        var y = l.getTransitionDurationFromElement(a);
                        t(a).one(l.TRANSITION_END, function () {
                            t(u).removeClass(i + " " + o).addClass(L), t(a).removeClass(L + " " + o + " " + i), s._isSliding = !1, setTimeout(function () {
                                return t(s._element).trigger(f)
                            }, 0)
                        }).emulateTransitionEnd(y)
                    } else t(a).removeClass(L), t(u).addClass(L), this._isSliding = !1, t(this._element).trigger(f);
                    p && this.cycle()
                }
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this).data(k), o = r({}, j, t(this).data());
                    "object" == typeof n && (o = r({}, o, n));
                    var s = "string" == typeof n ? n : o.slide;
                    if (i || (i = new e(this, o), t(this).data(k, i)), "number" == typeof n) i.to(n); else if ("string" == typeof s) {
                        if (void 0 === i[s]) throw new TypeError('No method named "' + s + '"');
                        i[s]()
                    } else o.interval && o.ride && (i.pause(), i.cycle())
                })
            }, e._dataApiClickHandler = function (n) {
                var i = l.getSelectorFromElement(this);
                if (i) {
                    var o = t(i)[0];
                    if (o && t(o).hasClass("carousel")) {
                        var s = r({}, t(o).data(), t(this).data()), a = this.getAttribute("data-slide-to");
                        a && (s.interval = !1), e._jQueryInterface.call(t(o), s), a && t(o).data(k).to(a), n.preventDefault()
                    }
                }
            }, o(e, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }, {
                key: "Default", get: function () {
                    return j
                }
            }]), e
        }();
    t(document).on(I.CLICK_DATA_API, "[data-slide], [data-slide-to]", q._dataApiClickHandler), t(window).on(I.LOAD_DATA_API, function () {
        for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = e.length; n < i; n++) {
            var o = t(e[n]);
            q._jQueryInterface.call(o, o.data())
        }
    }), t.fn[C] = q._jQueryInterface, t.fn[C].Constructor = q, t.fn[C].noConflict = function () {
        return t.fn[C] = O, q._jQueryInterface
    };
    var R = "collapse", z = "bs.collapse", F = "." + z, W = t.fn[R], U = {toggle: !0, parent: ""},
        B = {toggle: "boolean", parent: "(string|element)"}, V = {
            SHOW: "show" + F,
            SHOWN: "shown" + F,
            HIDE: "hide" + F,
            HIDDEN: "hidden" + F,
            CLICK_DATA_API: "click" + F + ".data-api"
        }, X = "show", K = "collapse", Q = "collapsing", Y = "collapsed", G = '[data-toggle="collapse"]', J = function () {
            function e(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(G)), i = 0, o = n.length; i < o; i++) {
                    var r = n[i], s = l.getSelectorFromElement(r),
                        a = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
                            return t === e
                        });
                    null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }

            var n = e.prototype;
            return n.toggle = function () {
                t(this._element).hasClass(X) ? this.hide() : this.show()
            }, n.show = function () {
                var n, i, o = this;
                if (!(this._isTransitioning || t(this._element).hasClass(X) || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (e) {
                    return "string" == typeof o._config.parent ? e.getAttribute("data-parent") === o._config.parent : e.classList.contains(K)
                })).length && (n = null), n && (i = t(n).not(this._selector).data(z)) && i._isTransitioning))) {
                    var r = t.Event(V.SHOW);
                    if (t(this._element).trigger(r), !r.isDefaultPrevented()) {
                        n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"), i || t(n).data(z, null));
                        var s = this._getDimension();
                        t(this._element).removeClass(K).addClass(Q), this._element.style[s] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(Y).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                            c = l.getTransitionDurationFromElement(this._element);
                        t(this._element).one(l.TRANSITION_END, function () {
                            t(o._element).removeClass(Q).addClass(K).addClass(X), o._element.style[s] = "", o.setTransitioning(!1), t(o._element).trigger(V.SHOWN)
                        }).emulateTransitionEnd(c), this._element.style[s] = this._element[a] + "px"
                    }
                }
            }, n.hide = function () {
                var e = this;
                if (!this._isTransitioning && t(this._element).hasClass(X)) {
                    var n = t.Event(V.HIDE);
                    if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                        var i = this._getDimension();
                        this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", l.reflow(this._element), t(this._element).addClass(Q).removeClass(K).removeClass(X);
                        var o = this._triggerArray.length;
                        if (0 < o) for (var r = 0; r < o; r++) {
                            var s = this._triggerArray[r], a = l.getSelectorFromElement(s);
                            null !== a && (t([].slice.call(document.querySelectorAll(a))).hasClass(X) || t(s).addClass(Y).attr("aria-expanded", !1))
                        }
                        this.setTransitioning(!0), this._element.style[i] = "";
                        var c = l.getTransitionDurationFromElement(this._element);
                        t(this._element).one(l.TRANSITION_END, function () {
                            e.setTransitioning(!1), t(e._element).removeClass(Q).addClass(K).trigger(V.HIDDEN)
                        }).emulateTransitionEnd(c)
                    }
                }
            }, n.setTransitioning = function (e) {
                this._isTransitioning = e
            }, n.dispose = function () {
                t.removeData(this._element, z), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, n._getConfig = function (e) {
                return (e = r({}, U, e)).toggle = Boolean(e.toggle), l.typeCheckConfig(R, e, B), e
            }, n._getDimension = function () {
                return t(this._element).hasClass("width") ? "width" : "height"
            }, n._getParent = function () {
                var n, i = this;
                l.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    r = [].slice.call(n.querySelectorAll(o));
                return t(r).each(function (t, n) {
                    i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
                }), n
            }, n._addAriaAndCollapsedClass = function (e, n) {
                var i = t(e).hasClass(X);
                n.length && t(n).toggleClass(Y, !i).attr("aria-expanded", i)
            }, e._getTargetFromElement = function (e) {
                var t = l.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this), o = i.data(z), s = r({}, U, i.data(), "object" == typeof n && n ? n : {});
                    if (!o && s.toggle && /show|hide/.test(n) && (s.toggle = !1), o || (o = new e(this, s), i.data(z, o)), "string" == typeof n) {
                        if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                        o[n]()
                    }
                })
            }, o(e, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }, {
                key: "Default", get: function () {
                    return U
                }
            }]), e
        }();
    t(document).on(V.CLICK_DATA_API, G, function (e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = t(this), i = l.getSelectorFromElement(this), o = [].slice.call(document.querySelectorAll(i));
        t(o).each(function () {
            var e = t(this), i = e.data(z) ? "toggle" : n.data();
            J._jQueryInterface.call(e, i)
        })
    }), t.fn[R] = J._jQueryInterface, t.fn[R].Constructor = J, t.fn[R].noConflict = function () {
        return t.fn[R] = W, J._jQueryInterface
    };
    var Z = "dropdown", ee = "bs.dropdown", te = "." + ee, ne = ".data-api", ie = t.fn[Z], oe = new RegExp("38|40|27"),
        re = {
            HIDE: "hide" + te,
            HIDDEN: "hidden" + te,
            SHOW: "show" + te,
            SHOWN: "shown" + te,
            CLICK: "click" + te,
            CLICK_DATA_API: "click" + te + ne,
            KEYDOWN_DATA_API: "keydown" + te + ne,
            KEYUP_DATA_API: "keyup" + te + ne
        }, se = "disabled", ae = "show", le = "dropdown-menu-right", ce = '[data-toggle="dropdown"]',
        ue = ".dropdown-menu",
        de = {offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic"}, pe = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        }, fe = function () {
            function e(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }

            var i = e.prototype;
            return i.toggle = function () {
                if (!this._element.disabled && !t(this._element).hasClass(se)) {
                    var i = e._getParentFromElement(this._element), o = t(this._menu).hasClass(ae);
                    if (e._clearMenus(), !o) {
                        var r = {relatedTarget: this._element}, s = t.Event(re.SHOW, r);
                        if (t(i).trigger(s), !s.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var a = this._element;
                                "parent" === this._config.reference ? a = i : l.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(i).addClass("position-static"), this._popper = new n(a, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === t(i).closest(".navbar-nav").length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(ae), t(i).toggleClass(ae).trigger(t.Event(re.SHOWN, r))
                        }
                    }
                }
            }, i.show = function () {
                if (!(this._element.disabled || t(this._element).hasClass(se) || t(this._menu).hasClass(ae))) {
                    var n = {relatedTarget: this._element}, i = t.Event(re.SHOW, n),
                        o = e._getParentFromElement(this._element);
                    t(o).trigger(i), i.isDefaultPrevented() || (t(this._menu).toggleClass(ae), t(o).toggleClass(ae).trigger(t.Event(re.SHOWN, n)))
                }
            }, i.hide = function () {
                if (!this._element.disabled && !t(this._element).hasClass(se) && t(this._menu).hasClass(ae)) {
                    var n = {relatedTarget: this._element}, i = t.Event(re.HIDE, n),
                        o = e._getParentFromElement(this._element);
                    t(o).trigger(i), i.isDefaultPrevented() || (t(this._menu).toggleClass(ae), t(o).toggleClass(ae).trigger(t.Event(re.HIDDEN, n)))
                }
            }, i.dispose = function () {
                t.removeData(this._element, ee), t(this._element).off(te), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, i.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, i._addEventListeners = function () {
                var e = this;
                t(this._element).on(re.CLICK, function (t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, i._getConfig = function (e) {
                return e = r({}, this.constructor.Default, t(this._element).data(), e), l.typeCheckConfig(Z, e, this.constructor.DefaultType), e
            }, i._getMenuElement = function () {
                if (!this._menu) {
                    var t = e._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(ue))
                }
                return this._menu
            }, i._getPlacement = function () {
                var e = t(this._element.parentNode), n = "bottom-start";
                return e.hasClass("dropup") ? (n = "top-start", t(this._menu).hasClass(le) && (n = "top-end")) : e.hasClass("dropright") ? n = "right-start" : e.hasClass("dropleft") ? n = "left-start" : t(this._menu).hasClass(le) && (n = "bottom-end"), n
            }, i._detectNavbar = function () {
                return 0 < t(this._element).closest(".navbar").length
            }, i._getOffset = function () {
                var e = this, t = {};
                return "function" == typeof this._config.offset ? t.fn = function (t) {
                    return t.offsets = r({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
                } : t.offset = this._config.offset, t
            }, i._getPopperConfig = function () {
                var e = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {enabled: this._config.flip},
                        preventOverflow: {boundariesElement: this._config.boundary}
                    }
                };
                return "static" === this._config.display && (e.modifiers.applyStyle = {enabled: !1}), e
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this).data(ee);
                    if (i || (i = new e(this, "object" == typeof n ? n : null), t(this).data(ee, i)), "string" == typeof n) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, e._clearMenus = function (n) {
                if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which)) for (var i = [].slice.call(document.querySelectorAll(ce)), o = 0, r = i.length; o < r; o++) {
                    var s = e._getParentFromElement(i[o]), a = t(i[o]).data(ee), l = {relatedTarget: i[o]};
                    if (n && "click" === n.type && (l.clickEvent = n), a) {
                        var c = a._menu;
                        if (t(s).hasClass(ae) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && t.contains(s, n.target))) {
                            var u = t.Event(re.HIDE, l);
                            t(s).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), i[o].setAttribute("aria-expanded", "false"), t(c).removeClass(ae), t(s).removeClass(ae).trigger(t.Event(re.HIDDEN, l)))
                        }
                    }
                }
            }, e._getParentFromElement = function (e) {
                var t, n = l.getSelectorFromElement(e);
                return n && (t = document.querySelector(n)), t || e.parentNode
            }, e._dataApiKeydownHandler = function (n) {
                if ((/input|textarea/i.test(n.target.tagName) ? !(32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || t(n.target).closest(ue).length)) : oe.test(n.which)) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(se))) {
                    var i = e._getParentFromElement(this), o = t(i).hasClass(ae);
                    if (o && (!o || 27 !== n.which && 32 !== n.which)) {
                        var r = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"));
                        if (0 !== r.length) {
                            var s = r.indexOf(n.target);
                            38 === n.which && 0 < s && s--, 40 === n.which && s < r.length - 1 && s++, s < 0 && (s = 0), r[s].focus()
                        }
                    } else {
                        if (27 === n.which) {
                            var a = i.querySelector(ce);
                            t(a).trigger("focus")
                        }
                        t(this).trigger("click")
                    }
                }
            }, o(e, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }, {
                key: "Default", get: function () {
                    return de
                }
            }, {
                key: "DefaultType", get: function () {
                    return pe
                }
            }]), e
        }();
    t(document).on(re.KEYDOWN_DATA_API, ce, fe._dataApiKeydownHandler).on(re.KEYDOWN_DATA_API, ue, fe._dataApiKeydownHandler).on(re.CLICK_DATA_API + " " + re.KEYUP_DATA_API, fe._clearMenus).on(re.CLICK_DATA_API, ce, function (e) {
        e.preventDefault(), e.stopPropagation(), fe._jQueryInterface.call(t(this), "toggle")
    }).on(re.CLICK_DATA_API, ".dropdown form", function (e) {
        e.stopPropagation()
    }), t.fn[Z] = fe._jQueryInterface, t.fn[Z].Constructor = fe, t.fn[Z].noConflict = function () {
        return t.fn[Z] = ie, fe._jQueryInterface
    };
    var he = "modal", ye = "bs.modal", ge = "." + ye, me = t.fn[he],
        ve = {backdrop: !0, keyboard: !0, focus: !0, show: !0},
        xe = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"}, we = {
            HIDE: "hide" + ge,
            HIDDEN: "hidden" + ge,
            SHOW: "show" + ge,
            SHOWN: "shown" + ge,
            FOCUSIN: "focusin" + ge,
            RESIZE: "resize" + ge,
            CLICK_DISMISS: "click.dismiss" + ge,
            KEYDOWN_DISMISS: "keydown.dismiss" + ge,
            MOUSEUP_DISMISS: "mouseup.dismiss" + ge,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + ge,
            CLICK_DATA_API: "click" + ge + ".data-api"
        }, be = "modal-open", _e = "fade", Te = "show", Se = ".modal-dialog",
        Ce = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", ke = ".sticky-top", Ee = function () {
            function e(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(Se), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }

            var n = e.prototype;
            return n.toggle = function (e) {
                return this._isShown ? this.hide() : this.show(e)
            }, n.show = function (e) {
                var n = this;
                if (!this._isShown && !this._isTransitioning) {
                    t(this._element).hasClass(_e) && (this._isTransitioning = !0);
                    var i = t.Event(we.SHOW, {relatedTarget: e});
                    t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(we.CLICK_DISMISS, '[data-dismiss="modal"]', function (e) {
                        return n.hide(e)
                    }), t(this._dialog).on(we.MOUSEDOWN_DISMISS, function () {
                        t(n._element).one(we.MOUSEUP_DISMISS, function (e) {
                            t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function () {
                        return n._showElement(e)
                    }))
                }
            }, n.hide = function (e) {
                var n = this;
                if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                    var i = t.Event(we.HIDE);
                    if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;
                        var o = t(this._element).hasClass(_e);
                        if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(we.FOCUSIN), t(this._element).removeClass(Te), t(this._element).off(we.CLICK_DISMISS), t(this._dialog).off(we.MOUSEDOWN_DISMISS), o) {
                            var r = l.getTransitionDurationFromElement(this._element);
                            t(this._element).one(l.TRANSITION_END, function (e) {
                                return n._hideModal(e)
                            }).emulateTransitionEnd(r)
                        } else this._hideModal()
                    }
                }
            }, n.dispose = function () {
                [window, this._element, this._dialog].forEach(function (e) {
                    return t(e).off(ge)
                }), t(document).off(we.FOCUSIN), t.removeData(this._element, ye), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, n.handleUpdate = function () {
                this._adjustDialog()
            }, n._getConfig = function (e) {
                return e = r({}, ve, e), l.typeCheckConfig(he, e, xe), e
            }, n._showElement = function (e) {
                var n = this, i = t(this._element).hasClass(_e);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), t(this._dialog).hasClass("modal-dialog-scrollable") ? this._dialog.querySelector(".modal-body").scrollTop = 0 : this._element.scrollTop = 0, i && l.reflow(this._element), t(this._element).addClass(Te), this._config.focus && this._enforceFocus();
                var o = t.Event(we.SHOWN, {relatedTarget: e}), r = function () {
                    n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(o)
                };
                if (i) {
                    var s = l.getTransitionDurationFromElement(this._dialog);
                    t(this._dialog).one(l.TRANSITION_END, r).emulateTransitionEnd(s)
                } else r()
            }, n._enforceFocus = function () {
                var e = this;
                t(document).off(we.FOCUSIN).on(we.FOCUSIN, function (n) {
                    document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                })
            }, n._setEscapeEvent = function () {
                var e = this;
                this._isShown && this._config.keyboard ? t(this._element).on(we.KEYDOWN_DISMISS, function (t) {
                    27 === t.which && (t.preventDefault(), e.hide())
                }) : this._isShown || t(this._element).off(we.KEYDOWN_DISMISS)
            }, n._setResizeEvent = function () {
                var e = this;
                this._isShown ? t(window).on(we.RESIZE, function (t) {
                    return e.handleUpdate(t)
                }) : t(window).off(we.RESIZE)
            }, n._hideModal = function () {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
                    t(document.body).removeClass(be), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(we.HIDDEN)
                })
            }, n._removeBackdrop = function () {
                this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
            }, n._showBackdrop = function (e) {
                var n = this, i = t(this._element).hasClass(_e) ? _e : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), t(this._backdrop).appendTo(document.body), t(this._element).on(we.CLICK_DISMISS, function (e) {
                        n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                    }), i && l.reflow(this._backdrop), t(this._backdrop).addClass(Te), !e) return;
                    if (!i) return void e();
                    var o = l.getTransitionDurationFromElement(this._backdrop);
                    t(this._backdrop).one(l.TRANSITION_END, e).emulateTransitionEnd(o)
                } else if (!this._isShown && this._backdrop) {
                    t(this._backdrop).removeClass(Te);
                    var r = function () {
                        n._removeBackdrop(), e && e()
                    };
                    if (t(this._element).hasClass(_e)) {
                        var s = l.getTransitionDurationFromElement(this._backdrop);
                        t(this._backdrop).one(l.TRANSITION_END, r).emulateTransitionEnd(s)
                    } else r()
                } else e && e()
            }, n._adjustDialog = function () {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, n._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, n._checkScrollbar = function () {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, n._setScrollbar = function () {
                var e = this;
                if (this._isBodyOverflowing) {
                    var n = [].slice.call(document.querySelectorAll(Ce)), i = [].slice.call(document.querySelectorAll(ke));
                    t(n).each(function (n, i) {
                        var o = i.style.paddingRight, r = t(i).css("padding-right");
                        t(i).data("padding-right", o).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                    }), t(i).each(function (n, i) {
                        var o = i.style.marginRight, r = t(i).css("margin-right");
                        t(i).data("margin-right", o).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                    });
                    var o = document.body.style.paddingRight, r = t(document.body).css("padding-right");
                    t(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
                }
                t(document.body).addClass(be)
            }, n._resetScrollbar = function () {
                var e = [].slice.call(document.querySelectorAll(Ce));
                t(e).each(function (e, n) {
                    var i = t(n).data("padding-right");
                    t(n).removeData("padding-right"), n.style.paddingRight = i || ""
                });
                var n = [].slice.call(document.querySelectorAll("" + ke));
                t(n).each(function (e, n) {
                    var i = t(n).data("margin-right");
                    void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
                });
                var i = t(document.body).data("padding-right");
                t(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
            }, n._getScrollbarWidth = function () {
                var e = document.createElement("div");
                e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, e._jQueryInterface = function (n, i) {
                return this.each(function () {
                    var o = t(this).data(ye), s = r({}, ve, t(this).data(), "object" == typeof n && n ? n : {});
                    if (o || (o = new e(this, s), t(this).data(ye, o)), "string" == typeof n) {
                        if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                        o[n](i)
                    } else s.show && o.show(i)
                })
            }, o(e, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }, {
                key: "Default", get: function () {
                    return ve
                }
            }]), e
        }();
    t(document).on(we.CLICK_DATA_API, '[data-toggle="modal"]', function (e) {
        var n, i = this, o = l.getSelectorFromElement(this);
        o && (n = document.querySelector(o));
        var s = t(n).data(ye) ? "toggle" : r({}, t(n).data(), t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var a = t(n).one(we.SHOW, function (e) {
            e.isDefaultPrevented() || a.one(we.HIDDEN, function () {
                t(i).is(":visible") && i.focus()
            })
        });
        Ee._jQueryInterface.call(t(n), s, this)
    }), t.fn[he] = Ee._jQueryInterface, t.fn[he].Constructor = Ee, t.fn[he].noConflict = function () {
        return t.fn[he] = me, Ee._jQueryInterface
    };
    var Ae = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"], Oe = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        }, je = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        De = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i,
        Ne = "tooltip", Me = "bs.tooltip", Ie = "." + Me, Le = t.fn[Ne], He = "bs-tooltip",
        Pe = new RegExp("(^|\\s)" + He + "\\S+", "g"), $e = ["sanitize", "whiteList", "sanitizeFn"], qe = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object"
        }, Re = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, ze = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: Oe
        }, Fe = "show", We = {
            HIDE: "hide" + Ie,
            HIDDEN: "hidden" + Ie,
            SHOW: "show" + Ie,
            SHOWN: "shown" + Ie,
            INSERTED: "inserted" + Ie,
            CLICK: "click" + Ie,
            FOCUSIN: "focusin" + Ie,
            FOCUSOUT: "focusout" + Ie,
            MOUSEENTER: "mouseenter" + Ie,
            MOUSELEAVE: "mouseleave" + Ie
        }, Ue = "fade", Be = "show", Ve = "hover", Xe = "focus", Ke = function () {
            function e(e, t) {
                if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }

            var i = e.prototype;
            return i.enable = function () {
                this._isEnabled = !0
            }, i.disable = function () {
                this._isEnabled = !1
            }, i.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
            }, i.toggle = function (e) {
                if (this._isEnabled) if (e) {
                    var n = this.constructor.DATA_KEY, i = t(e.currentTarget).data(n);
                    i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                } else {
                    if (t(this.getTipElement()).hasClass(Be)) return void this._leave(null, this);
                    this._enter(null, this)
                }
            }, i.dispose = function () {
                clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, i.show = function () {
                var e = this;
                if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                var i = t.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    t(this.element).trigger(i);
                    var o = l.findShadowRoot(this.element),
                        r = t.contains(null !== o ? o : this.element.ownerDocument.documentElement, this.element);
                    if (i.isDefaultPrevented() || !r) return;
                    var s = this.getTipElement(), a = l.getUID(this.constructor.NAME);
                    s.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && t(s).addClass(Ue);
                    var c = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                        u = this._getAttachment(c);
                    this.addAttachmentClass(u);
                    var d = this._getContainer();
                    t(s).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(s).appendTo(d), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, s, {
                        placement: u,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {behavior: this.config.fallbackPlacement},
                            arrow: {element: ".arrow"},
                            preventOverflow: {boundariesElement: this.config.boundary}
                        },
                        onCreate: function (t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function (t) {
                            return e._handlePopperPlacementChange(t)
                        }
                    }), t(s).addClass(Be), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                    var p = function () {
                        e.config.animation && e._fixTransition();
                        var n = e._hoverState;
                        e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), "out" === n && e._leave(null, e)
                    };
                    if (t(this.tip).hasClass(Ue)) {
                        var f = l.getTransitionDurationFromElement(this.tip);
                        t(this.tip).one(l.TRANSITION_END, p).emulateTransitionEnd(f)
                    } else p()
                }
            }, i.hide = function (e) {
                var n = this, i = this.getTipElement(), o = t.Event(this.constructor.Event.HIDE), r = function () {
                    n._hoverState !== Fe && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                };
                if (t(this.element).trigger(o), !o.isDefaultPrevented()) {
                    if (t(i).removeClass(Be), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger.click = !1, this._activeTrigger[Xe] = !1, this._activeTrigger[Ve] = !1, t(this.tip).hasClass(Ue)) {
                        var s = l.getTransitionDurationFromElement(i);
                        t(i).one(l.TRANSITION_END, r).emulateTransitionEnd(s)
                    } else r();
                    this._hoverState = ""
                }
            }, i.update = function () {
                null !== this._popper && this._popper.scheduleUpdate()
            }, i.isWithContent = function () {
                return Boolean(this.getTitle())
            }, i.addAttachmentClass = function (e) {
                t(this.getTipElement()).addClass(He + "-" + e)
            }, i.getTipElement = function () {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, i.setContent = function () {
                var e = this.getTipElement();
                this.setElementContent(t(e.querySelectorAll(".tooltip-inner")), this.getTitle()), t(e).removeClass(Ue + " " + Be)
            }, i.setElementContent = function (e, n) {
                "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = s(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n)) : e.text(n) : this.config.html ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text())
            }, i.getTitle = function () {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, i._getOffset = function () {
                var e = this, t = {};
                return "function" == typeof this.config.offset ? t.fn = function (t) {
                    return t.offsets = r({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
                } : t.offset = this.config.offset, t
            }, i._getContainer = function () {
                return !1 === this.config.container ? document.body : l.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
            }, i._getAttachment = function (e) {
                return Re[e.toUpperCase()]
            }, i._setListeners = function () {
                var e = this;
                this.config.trigger.split(" ").forEach(function (n) {
                    if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                        return e.toggle(t)
                    }); else if ("manual" !== n) {
                        var i = n === Ve ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                            o = n === Ve ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        t(e.element).on(i, e.config.selector, function (t) {
                            return e._enter(t)
                        }).on(o, e.config.selector, function (t) {
                            return e._leave(t)
                        })
                    }
                }), t(this.element).closest(".modal").on("hide.bs.modal", function () {
                    e.element && e.hide()
                }), this.config.selector ? this.config = r({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, i._fixTitle = function () {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, i._enter = function (e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? Xe : Ve] = !0), t(n.getTipElement()).hasClass(Be) || n._hoverState === Fe ? n._hoverState = Fe : (clearTimeout(n._timeout), n._hoverState = Fe, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
                    n._hoverState === Fe && n.show()
                }, n.config.delay.show) : n.show())
            }, i._leave = function (e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? Xe : Ve] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = "out", n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
                    "out" === n._hoverState && n.hide()
                }, n.config.delay.hide) : n.hide())
            }, i._isWithActiveTrigger = function () {
                for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
                return !1
            }, i._getConfig = function (e) {
                var n = t(this.element).data();
                return Object.keys(n).forEach(function (e) {
                    -1 !== $e.indexOf(e) && delete n[e]
                }), "number" == typeof (e = r({}, this.constructor.Default, n, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), l.typeCheckConfig(Ne, e, this.constructor.DefaultType), e.sanitize && (e.template = s(e.template, e.whiteList, e.sanitizeFn)), e
            }, i._getDelegateConfig = function () {
                var e = {};
                if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, i._cleanTipClass = function () {
                var e = t(this.getTipElement()), n = e.attr("class").match(Pe);
                null !== n && n.length && e.removeClass(n.join(""))
            }, i._handlePopperPlacementChange = function (e) {
                var t = e.instance;
                this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, i._fixTransition = function () {
                var e = this.getTipElement(), n = this.config.animation;
                null === e.getAttribute("x-placement") && (t(e).removeClass(Ue), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this).data(Me), o = "object" == typeof n && n;
                    if ((i || !/dispose|hide/.test(n)) && (i || (i = new e(this, o), t(this).data(Me, i)), "string" == typeof n)) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, o(e, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }, {
                key: "Default", get: function () {
                    return ze
                }
            }, {
                key: "NAME", get: function () {
                    return Ne
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return Me
                }
            }, {
                key: "Event", get: function () {
                    return We
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return Ie
                }
            }, {
                key: "DefaultType", get: function () {
                    return qe
                }
            }]), e
        }();
    t.fn[Ne] = Ke._jQueryInterface, t.fn[Ne].Constructor = Ke, t.fn[Ne].noConflict = function () {
        return t.fn[Ne] = Le, Ke._jQueryInterface
    };
    var Qe = "popover", Ye = "bs.popover", Ge = "." + Ye, Je = t.fn[Qe], Ze = "bs-popover",
        et = new RegExp("(^|\\s)" + Ze + "\\S+", "g"), tt = r({}, Ke.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }), nt = r({}, Ke.DefaultType, {content: "(string|element|function)"}), it = {
            HIDE: "hide" + Ge,
            HIDDEN: "hidden" + Ge,
            SHOW: "show" + Ge,
            SHOWN: "shown" + Ge,
            INSERTED: "inserted" + Ge,
            CLICK: "click" + Ge,
            FOCUSIN: "focusin" + Ge,
            FOCUSOUT: "focusout" + Ge,
            MOUSEENTER: "mouseenter" + Ge,
            MOUSELEAVE: "mouseleave" + Ge
        }, ot = function (e) {
            function n() {
                return e.apply(this, arguments) || this
            }

            var i, r;
            r = e, (i = n).prototype = Object.create(r.prototype), (i.prototype.constructor = i).__proto__ = r;
            var s = n.prototype;
            return s.isWithContent = function () {
                return this.getTitle() || this._getContent()
            }, s.addAttachmentClass = function (e) {
                t(this.getTipElement()).addClass(Ze + "-" + e)
            }, s.getTipElement = function () {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, s.setContent = function () {
                var e = t(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle());
                var n = this._getContent();
                "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(".popover-body"), n), e.removeClass("fade show")
            }, s._getContent = function () {
                return this.element.getAttribute("data-content") || this.config.content
            }, s._cleanTipClass = function () {
                var e = t(this.getTipElement()), n = e.attr("class").match(et);
                null !== n && 0 < n.length && e.removeClass(n.join(""))
            }, n._jQueryInterface = function (e) {
                return this.each(function () {
                    var i = t(this).data(Ye), o = "object" == typeof e ? e : null;
                    if ((i || !/dispose|hide/.test(e)) && (i || (i = new n(this, o), t(this).data(Ye, i)), "string" == typeof e)) {
                        if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                        i[e]()
                    }
                })
            }, o(n, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }, {
                key: "Default", get: function () {
                    return tt
                }
            }, {
                key: "NAME", get: function () {
                    return Qe
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return Ye
                }
            }, {
                key: "Event", get: function () {
                    return it
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return Ge
                }
            }, {
                key: "DefaultType", get: function () {
                    return nt
                }
            }]), n
        }(Ke);
    t.fn[Qe] = ot._jQueryInterface, t.fn[Qe].Constructor = ot, t.fn[Qe].noConflict = function () {
        return t.fn[Qe] = Je, ot._jQueryInterface
    };
    var rt = "scrollspy", st = "bs.scrollspy", at = "." + st, lt = t.fn[rt],
        ct = {offset: 10, method: "auto", target: ""},
        ut = {offset: "number", method: "string", target: "(string|element)"},
        dt = {ACTIVATE: "activate" + at, SCROLL: "scroll" + at, LOAD_DATA_API: "load" + at + ".data-api"},
        pt = "active", ft = ".nav, .list-group", ht = ".nav-link", yt = ".list-group-item", gt = ".dropdown-item",
        mt = "position", vt = function () {
            function e(e, n) {
                var i = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + ht + "," + this._config.target + " " + yt + "," + this._config.target + " " + gt, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(dt.SCROLL, function (e) {
                    return i._process(e)
                }), this.refresh(), this._process()
            }

            var n = e.prototype;
            return n.refresh = function () {
                var e = this, n = this._scrollElement === this._scrollElement.window ? "offset" : mt,
                    i = "auto" === this._config.method ? n : this._config.method, o = i === mt ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (e) {
                    var n, r = l.getSelectorFromElement(e);
                    if (r && (n = document.querySelector(r)), n) {
                        var s = n.getBoundingClientRect();
                        if (s.width || s.height) return [t(n)[i]().top + o, r]
                    }
                    return null
                }).filter(function (e) {
                    return e
                }).sort(function (e, t) {
                    return e[0] - t[0]
                }).forEach(function (t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, n.dispose = function () {
                t.removeData(this._element, st), t(this._scrollElement).off(at), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, n._getConfig = function (e) {
                if ("string" != typeof (e = r({}, ct, "object" == typeof e && e ? e : {})).target) {
                    var n = t(e.target).attr("id");
                    n || (n = l.getUID(rt), t(e.target).attr("id", n)), e.target = "#" + n
                }
                return l.typeCheckConfig(rt, e, ut), e
            }, n._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, n._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, n._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, n._process = function () {
                var e = this._getScrollTop() + this._config.offset, t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), n <= e) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o])
                }
            }, n._activate = function (e) {
                this._activeTarget = e, this._clear();
                var n = this._selector.split(",").map(function (t) {
                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                }), i = t([].slice.call(document.querySelectorAll(n.join(","))));
                i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass(pt), i.addClass(pt)) : (i.addClass(pt), i.parents(ft).prev(ht + ", " + yt).addClass(pt), i.parents(ft).prev(".nav-item").children(ht).addClass(pt)), t(this._scrollElement).trigger(dt.ACTIVATE, {relatedTarget: e})
            }, n._clear = function () {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function (e) {
                    return e.classList.contains(pt)
                }).forEach(function (e) {
                    return e.classList.remove(pt)
                })
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this).data(st);
                    if (i || (i = new e(this, "object" == typeof n && n), t(this).data(st, i)), "string" == typeof n) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, o(e, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }, {
                key: "Default", get: function () {
                    return ct
                }
            }]), e
        }();
    t(window).on(dt.LOAD_DATA_API, function () {
        for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = e.length; n--;) {
            var i = t(e[n]);
            vt._jQueryInterface.call(i, i.data())
        }
    }), t.fn[rt] = vt._jQueryInterface, t.fn[rt].Constructor = vt, t.fn[rt].noConflict = function () {
        return t.fn[rt] = lt, vt._jQueryInterface
    };
    var xt = "bs.tab", wt = "." + xt, bt = t.fn.tab, _t = {
        HIDE: "hide" + wt,
        HIDDEN: "hidden" + wt,
        SHOW: "show" + wt,
        SHOWN: "shown" + wt,
        CLICK_DATA_API: "click" + wt + ".data-api"
    }, Tt = "active", St = ".active", Ct = "> li > .active", kt = function () {
        function e(e) {
            this._element = e
        }

        var n = e.prototype;
        return n.show = function () {
            var e = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(Tt) || t(this._element).hasClass("disabled"))) {
                var n, i, o = t(this._element).closest(".nav, .list-group")[0],
                    r = l.getSelectorFromElement(this._element);
                if (o) {
                    var s = "UL" === o.nodeName || "OL" === o.nodeName ? Ct : St;
                    i = (i = t.makeArray(t(o).find(s)))[i.length - 1]
                }
                var a = t.Event(_t.HIDE, {relatedTarget: this._element}), c = t.Event(_t.SHOW, {relatedTarget: i});
                if (i && t(i).trigger(a), t(this._element).trigger(c), !c.isDefaultPrevented() && !a.isDefaultPrevented()) {
                    r && (n = document.querySelector(r)), this._activate(this._element, o);
                    var u = function () {
                        var n = t.Event(_t.HIDDEN, {relatedTarget: e._element}),
                            o = t.Event(_t.SHOWN, {relatedTarget: i});
                        t(i).trigger(n), t(e._element).trigger(o)
                    };
                    n ? this._activate(n, n.parentNode, u) : u()
                }
            }
        }, n.dispose = function () {
            t.removeData(this._element, xt), this._element = null
        }, n._activate = function (e, n, i) {
            var o = this, r = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(St) : t(n).find(Ct))[0],
                s = i && r && t(r).hasClass("fade"), a = function () {
                    return o._transitionComplete(e, r, i)
                };
            if (r && s) {
                var c = l.getTransitionDurationFromElement(r);
                t(r).removeClass("show").one(l.TRANSITION_END, a).emulateTransitionEnd(c)
            } else a()
        }, n._transitionComplete = function (e, n, i) {
            if (n) {
                t(n).removeClass(Tt);
                var o = t(n.parentNode).find("> .dropdown-menu .active")[0];
                o && t(o).removeClass(Tt), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
            }
            if (t(e).addClass(Tt), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), l.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) {
                var r = t(e).closest(".dropdown")[0];
                if (r) {
                    var s = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
                    t(s).addClass(Tt)
                }
                e.setAttribute("aria-expanded", !0)
            }
            i && i()
        }, e._jQueryInterface = function (n) {
            return this.each(function () {
                var i = t(this), o = i.data(xt);
                if (o || (o = new e(this), i.data(xt, o)), "string" == typeof n) {
                    if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                    o[n]()
                }
            })
        }, o(e, null, [{
            key: "VERSION", get: function () {
                return "4.3.1"
            }
        }]), e
    }();
    t(document).on(_t.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (e) {
        e.preventDefault(), kt._jQueryInterface.call(t(this), "show")
    }), t.fn.tab = kt._jQueryInterface, t.fn.tab.Constructor = kt, t.fn.tab.noConflict = function () {
        return t.fn.tab = bt, kt._jQueryInterface
    };
    var Et = "toast", At = "bs.toast", Ot = "." + At, jt = t.fn[Et], Dt = {
            CLICK_DISMISS: "click.dismiss" + Ot,
            HIDE: "hide" + Ot,
            HIDDEN: "hidden" + Ot,
            SHOW: "show" + Ot,
            SHOWN: "shown" + Ot
        }, Nt = "show", Mt = "showing", It = {animation: "boolean", autohide: "boolean", delay: "number"},
        Lt = {animation: !0, autohide: !0, delay: 500}, Ht = function () {
            function e(e, t) {
                this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
            }

            var n = e.prototype;
            return n.show = function () {
                var e = this;
                t(this._element).trigger(Dt.SHOW), this._config.animation && this._element.classList.add("fade");
                var n = function () {
                    e._element.classList.remove(Mt), e._element.classList.add(Nt), t(e._element).trigger(Dt.SHOWN), e._config.autohide && e.hide()
                };
                if (this._element.classList.remove("hide"), this._element.classList.add(Mt), this._config.animation) {
                    var i = l.getTransitionDurationFromElement(this._element);
                    t(this._element).one(l.TRANSITION_END, n).emulateTransitionEnd(i)
                } else n()
            }, n.hide = function (e) {
                var n = this;
                this._element.classList.contains(Nt) && (t(this._element).trigger(Dt.HIDE), e ? this._close() : this._timeout = setTimeout(function () {
                    n._close()
                }, this._config.delay))
            }, n.dispose = function () {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Nt) && this._element.classList.remove(Nt), t(this._element).off(Dt.CLICK_DISMISS), t.removeData(this._element, At), this._element = null, this._config = null
            }, n._getConfig = function (e) {
                return e = r({}, Lt, t(this._element).data(), "object" == typeof e && e ? e : {}), l.typeCheckConfig(Et, e, this.constructor.DefaultType), e
            }, n._setListeners = function () {
                var e = this;
                t(this._element).on(Dt.CLICK_DISMISS, '[data-dismiss="toast"]', function () {
                    return e.hide(!0)
                })
            }, n._close = function () {
                var e = this, n = function () {
                    e._element.classList.add("hide"), t(e._element).trigger(Dt.HIDDEN)
                };
                if (this._element.classList.remove(Nt), this._config.animation) {
                    var i = l.getTransitionDurationFromElement(this._element);
                    t(this._element).one(l.TRANSITION_END, n).emulateTransitionEnd(i)
                } else n()
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this), o = i.data(At);
                    if (o || (o = new e(this, "object" == typeof n && n), i.data(At, o)), "string" == typeof n) {
                        if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                        o[n](this)
                    }
                })
            }, o(e, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }, {
                key: "DefaultType", get: function () {
                    return It
                }
            }, {
                key: "Default", get: function () {
                    return Lt
                }
            }]), e
        }();
    t.fn[Et] = Ht._jQueryInterface, t.fn[Et].Constructor = Ht, t.fn[Et].noConflict = function () {
        return t.fn[Et] = jt, Ht._jQueryInterface
    }, function () {
        if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(), e.Util = l, e.Alert = h, e.Button = S, e.Carousel = q, e.Collapse = J, e.Dropdown = fe, e.Modal = Ee, e.Popover = ot, e.Scrollspy = vt, e.Tab = kt, e.Toast = Ht, e.Tooltip = Ke, Object.defineProperty(e, "__esModule", {value: !0})
}),
//# sourceMappingURL=bootstrap.min.js.map
    function (e) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
            ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Pjax = e()
        }
    }(function () {
        return function () {
            function e(t, n, i) {
                function o(s, a) {
                    if (!n[s]) {
                        if (!t[s]) {
                            var l = "function" == typeof require && require;
                            if (!a && l) return l(s, !0);
                            if (r) return r(s, !0);
                            var c = new Error("Cannot find module '" + s + "'");
                            throw c.code = "MODULE_NOT_FOUND", c
                        }
                        var u = n[s] = {exports: {}};
                        t[s][0].call(u.exports, function (e) {
                            return o(t[s][1][e] || e)
                        }, u, u.exports, e, t, n, i)
                    }
                    return n[s].exports
                }

                for (var r = "function" == typeof require && require, s = 0; s < i.length; s++) o(i[s]);
                return o
            }

            return e
        }()({
            1: [function (e, t, n) {
                var i = e("./lib/execute-scripts.js"), o = e("./lib/foreach-els.js"), r = e("./lib/parse-options.js"),
                    s = e("./lib/switches"), a = e("./lib/uniqueid.js"), l = e("./lib/events/on.js"),
                    c = e("./lib/events/trigger.js"), u = e("./lib/util/clone.js"), d = e("./lib/util/contains.js"),
                    p = e("./lib/util/extend.js"), f = e("./lib/util/noop"), h = function (e) {
                        this.state = {
                            numPendingSwitches: 0,
                            href: null,
                            options: null
                        }, this.options = r(e), this.log("Pjax options", this.options), this.options.scrollRestoration && "scrollRestoration" in history && (history.scrollRestoration = "manual"), this.maxUid = this.lastUid = a(), this.parseDOM(document), l(window, "popstate", function (e) {
                            if (e.state) {
                                var t = u(this.options);
                                t.url = e.state.url, t.title = e.state.title, t.history = !1, t.scrollPos = e.state.scrollPos, e.state.uid < this.lastUid ? t.backward = !0 : t.forward = !0, this.lastUid = e.state.uid, this.loadUrl(e.state.url, t)
                            }
                        }.bind(this))
                    };
                if (h.switches = s, h.prototype = {
                    log: e("./lib/proto/log.js"),
                    getElements: function (e) {
                        return e.querySelectorAll(this.options.elements)
                    },
                    parseDOM: function (t) {
                        var n = e("./lib/proto/parse-element");
                        o(this.getElements(t), n, this)
                    },
                    refresh: function (e) {
                        this.parseDOM(e || document)
                    },
                    reload: function () {
                        window.location.reload()
                    },
                    attachLink: e("./lib/proto/attach-link.js"),
                    attachForm: e("./lib/proto/attach-form.js"),
                    forEachSelectors: function (t, n, i) {
                        return e("./lib/foreach-selectors.js").bind(this)(this.options.selectors, t, n, i)
                    },
                    switchSelectors: function (t, n, i, o) {
                        return e("./lib/switches-selectors.js").bind(this)(this.options.switches, this.options.switchesOptions, t, n, i, o)
                    },
                    latestChance: function (e) {
                        window.location = e
                    },
                    onSwitch: function () {
                        c(window, "resize scroll"), 0 === --this.state.numPendingSwitches && this.afterAllSwitches()
                    },
                    loadContent: function (e, t) {
                        var n = document.implementation.createHTMLDocument("pjax"), i = /<html[^>]+>/gi,
                            o = /\s?[a-z:]+(?:\=(?:\'|\")[^\'\">]+(?:\'|\"))*/gi, r = e.match(i);
                        if (r && r.length && (r = r[0].match(o)).length && (r.shift(), r.forEach(function (e) {
                            var t = e.trim().split("=");
                            1 === t.length ? n.documentElement.setAttribute(t[0], !0) : n.documentElement.setAttribute(t[0], t[1].slice(1, -1))
                        })), n.documentElement.innerHTML = e, this.log("load content", n.documentElement.attributes, n.documentElement.innerHTML.length), document.activeElement && d(document, this.options.selectors, document.activeElement)) try {
                            document.activeElement.blur()
                        } catch (e) {
                        }
                        this.switchSelectors(this.options.selectors, n, document, t)
                    },
                    abortRequest: e("./lib/abort-request.js"),
                    doRequest: e("./lib/send-request.js"),
                    handleResponse: e("./lib/proto/handle-response.js"),
                    loadUrl: function (e, t) {
                        t = "object" == typeof t ? p({}, this.options, t) : u(this.options), this.log("load href", e, t), this.abortRequest(this.request), c(document, "pjax:send", t), this.request = this.doRequest(e, t, this.handleResponse.bind(this))
                    },
                    afterAllSwitches: function () {
                        var e = Array.prototype.slice.call(document.querySelectorAll("[autofocus]")).pop();
                        e && document.activeElement !== e && e.focus(), this.options.selectors.forEach(function (e) {
                            o(document.querySelectorAll(e), function (e) {
                                i(e)
                            })
                        });
                        var t = this.state;
                        if (t.options.history && (window.history.state || (this.lastUid = this.maxUid = a(), window.history.replaceState({
                            url: window.location.href,
                            title: document.title,
                            uid: this.maxUid,
                            scrollPos: [0, 0]
                        }, document.title)), this.lastUid = this.maxUid = a(), window.history.pushState({
                            url: t.href,
                            title: t.options.title,
                            uid: this.maxUid,
                            scrollPos: [0, 0]
                        }, t.options.title, t.href)), this.forEachSelectors(function (e) {
                            this.parseDOM(e)
                        }, this), c(document, "pjax:complete pjax:success", t.options), "function" == typeof t.options.analytics && t.options.analytics(), t.options.history) {
                            var n = document.createElement("a");
                            if (n.href = this.state.href, n.hash) {
                                var r = n.hash.slice(1);
                                r = decodeURIComponent(r);
                                var s = 0, l = document.getElementById(r) || document.getElementsByName(r)[0];
                                if (l && l.offsetParent) do {
                                    s += l.offsetTop, l = l.offsetParent
                                } while (l);
                                window.scrollTo(0, s)
                            } else !1 !== t.options.scrollTo && (t.options.scrollTo.length > 1 ? window.scrollTo(t.options.scrollTo[0], t.options.scrollTo[1]) : window.scrollTo(0, t.options.scrollTo))
                        } else t.options.scrollRestoration && t.options.scrollPos && window.scrollTo(t.options.scrollPos[0], t.options.scrollPos[1]);
                        this.state = {numPendingSwitches: 0, href: null, options: null}
                    }
                }, h.isSupported = e("./lib/is-supported.js"), h.isSupported()) t.exports = h; else {
                    var y = f;
                    for (var g in h.prototype) h.prototype.hasOwnProperty(g) && "function" == typeof h.prototype[g] && (y[g] = f);
                    t.exports = y
                }
            }, {
                "./lib/abort-request.js": 2,
                "./lib/events/on.js": 4,
                "./lib/events/trigger.js": 5,
                "./lib/execute-scripts.js": 6,
                "./lib/foreach-els.js": 7,
                "./lib/foreach-selectors.js": 8,
                "./lib/is-supported.js": 9,
                "./lib/parse-options.js": 10,
                "./lib/proto/attach-form.js": 11,
                "./lib/proto/attach-link.js": 12,
                "./lib/proto/handle-response.js": 13,
                "./lib/proto/log.js": 14,
                "./lib/proto/parse-element": 15,
                "./lib/send-request.js": 16,
                "./lib/switches": 18,
                "./lib/switches-selectors.js": 17,
                "./lib/uniqueid.js": 19,
                "./lib/util/clone.js": 20,
                "./lib/util/contains.js": 21,
                "./lib/util/extend.js": 22,
                "./lib/util/noop": 23
            }], 2: [function (e, t, n) {
                var i = e("./util/noop");
                t.exports = function (e) {
                    e && e.readyState < 4 && (e.onreadystatechange = i, e.abort())
                }
            }, {"./util/noop": 23}], 3: [function (e, t, n) {
                t.exports = function (e) {
                    var t = e.text || e.textContent || e.innerHTML || "", n = e.src || "",
                        i = e.parentNode || document.querySelector("head") || document.documentElement,
                        o = document.createElement("script");
                    if (t.match("document.write")) return console && console.log && console.log("Script contains document.write. Can’t be executed correctly. Code skipped ", e), !1;
                    if (o.type = "text/javascript", "" !== n && (o.src = n, o.async = !1), "" !== t) try {
                        o.appendChild(document.createTextNode(t))
                    } catch (e) {
                        o.text = t
                    }
                    return i.appendChild(o), (i instanceof HTMLHeadElement || i instanceof HTMLBodyElement) && i.removeChild(o), !0
                }
            }, {}], 4: [function (e, t, n) {
                var i = e("../foreach-els");
                t.exports = function (e, t, n, o) {
                    (t = "string" == typeof t ? t.split(" ") : t).forEach(function (t) {
                        i(e, function (e) {
                            e.addEventListener(t, n, o)
                        })
                    })
                }
            }, {"../foreach-els": 7}], 5: [function (e, t, n) {
                var i = e("../foreach-els");
                t.exports = function (e, t, n) {
                    (t = "string" == typeof t ? t.split(" ") : t).forEach(function (t) {
                        var o;
                        (o = document.createEvent("HTMLEvents")).initEvent(t, !0, !0), o.eventName = t, n && Object.keys(n).forEach(function (e) {
                            o[e] = n[e]
                        }), i(e, function (e) {
                            var t = !1;
                            e.parentNode || e === document || e === window || (t = !0, document.body.appendChild(e)), e.dispatchEvent(o), t && e.parentNode.removeChild(e)
                        })
                    })
                }
            }, {"../foreach-els": 7}], 6: [function (e, t, n) {
                var i = e("./foreach-els"), o = e("./eval-script");
                t.exports = function (e) {
                    "script" === e.tagName.toLowerCase() && o(e), i(e.querySelectorAll("script"), function (e) {
                        e.type && "text/javascript" !== e.type.toLowerCase() || (e.parentNode && e.parentNode.removeChild(e), o(e))
                    })
                }
            }, {"./eval-script": 3, "./foreach-els": 7}], 7: [function (e, t, n) {
                t.exports = function (e, t, n) {
                    return e instanceof HTMLCollection || e instanceof NodeList || e instanceof Array ? Array.prototype.forEach.call(e, t, n) : t.call(n, e)
                }
            }, {}], 8: [function (e, t, n) {
                var i = e("./foreach-els");
                t.exports = function (e, t, n, o) {
                    o = o || document, e.forEach(function (e) {
                        i(o.querySelectorAll(e), t, n)
                    })
                }
            }, {"./foreach-els": 7}], 9: [function (e, t, n) {
                t.exports = function () {
                    return window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/)
                }
            }, {}], 10: [function (e, t, n) {
                function i() {
                    window._gaq && _gaq.push(["_trackPageview"]), window.ga && ga("send", "pageview", {
                        page: location.pathname,
                        title: document.title
                    })
                }

                var o = e("./switches");
                t.exports = function (e) {
                    return e = e || {}, e.elements = e.elements || "a[href], form[action]", e.selectors = e.selectors || ["title", ".js-Pjax"], e.switches = e.switches || {}, e.switchesOptions = e.switchesOptions || {}, e.history = e.history || !0, e.analytics = "function" == typeof e.analytics || !1 === e.analytics ? e.analytics : i, e.scrollTo = void 0 === e.scrollTo ? 0 : e.scrollTo, e.scrollRestoration = void 0 === e.scrollRestoration || e.scrollRestoration, e.cacheBust = void 0 === e.cacheBust || e.cacheBust, e.debug = e.debug || !1, e.timeout = e.timeout || 0, e.currentUrlFullReload = void 0 !== e.currentUrlFullReload && e.currentUrlFullReload, e.switches.head || (e.switches.head = o.switchElementsAlt), e.switches.body || (e.switches.body = o.switchElementsAlt), e
                }
            }, {"./switches": 18}], 11: [function (e, t, n) {
                function i(e) {
                    var t = [];
                    for (var n in e.elements) if (!Number.isNaN(Number(n))) {
                        var i = e.elements[n], o = i.tagName.toLowerCase();
                        if (i.name && void 0 !== i.attributes && "button" !== o) {
                            var r = i.attributes.type;
                            if (!r || "checkbox" !== r.value && "radio" !== r.value || i.checked) {
                                var s = [];
                                if ("select" === o) for (var a, l = 0; l < i.options.length; l++) (a = i.options[l]).selected && s.push(a.value || a.text); else s.push(i.value);
                                for (var c = 0; c < s.length; c++) t.push({
                                    name: encodeURIComponent(i.name),
                                    value: encodeURIComponent(s[c])
                                })
                            }
                        }
                    }
                    return t
                }

                function o(e, t) {
                    return e.protocol !== window.location.protocol || e.host !== window.location.host ? "external" : e.hash && e.href.replace(e.hash, "") === window.location.href.replace(location.hash, "") ? "anchor" : e.href === window.location.href.split("#")[0] + "#" ? "anchor-empty" : t.currentUrlFullReload && e.href === window.location.href.split("#")[0] ? "reload" : void 0
                }

                var r = e("../events/on"), s = e("../util/clone"), a = function (e, t) {
                    if (!l(t)) {
                        var n = s(this.options);
                        n.requestOptions = {
                            requestUrl: e.getAttribute("action") || window.location.href,
                            requestMethod: e.getAttribute("method") || "GET"
                        };
                        var r = document.createElement("a");
                        r.setAttribute("href", n.requestOptions.requestUrl);
                        var a = o(r, n);
                        a ? e.setAttribute("data-pjax-state", a) : (t.preventDefault(), "multipart/form-data" === e.enctype ? n.requestOptions.formData = new FormData(e) : n.requestOptions.requestParams = i(e), e.setAttribute("data-pjax-state", "submit"), n.triggerElement = e, this.loadUrl(r.href, n))
                    }
                }, l = function (e) {
                    return e.defaultPrevented || !1 === e.returnValue
                };
                t.exports = function (e) {
                    var t = this;
                    e.setAttribute("data-pjax-state", ""), r(e, "submit", function (n) {
                        a.call(t, e, n)
                    }), r(e, "keyup", function (n) {
                        13 === n.keyCode && a.call(t, e, n)
                    }.bind(this))
                }
            }, {"../events/on": 4, "../util/clone": 20}], 12: [function (e, t, n) {
                function i(e, t) {
                    return t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey ? "modifier" : e.protocol !== window.location.protocol || e.host !== window.location.host ? "external" : e.hash && e.href.replace(e.hash, "") === window.location.href.replace(location.hash, "") ? "anchor" : e.href === window.location.href.split("#")[0] + "#" ? "anchor-empty" : void 0
                }

                var o = e("../events/on"), r = e("../util/clone"), s = "data-pjax-state", a = function (e, t) {
                    if (!l(t)) {
                        var n = r(this.options), o = i(e, t);
                        if (o) e.setAttribute(s, o); else {
                            if (t.preventDefault(), this.options.currentUrlFullReload && e.href === window.location.href.split("#")[0]) return e.setAttribute(s, "reload"), void this.reload();
                            e.setAttribute(s, "load"), n.triggerElement = e, this.loadUrl(e.href, n)
                        }
                    }
                }, l = function (e) {
                    return e.defaultPrevented || !1 === e.returnValue
                };
                t.exports = function (e) {
                    var t = this;
                    e.setAttribute(s, ""), o(e, "click", function (n) {
                        a.call(t, e, n)
                    }), o(e, "keyup", function (n) {
                        13 === n.keyCode && a.call(t, e, n)
                    }.bind(this))
                }
            }, {"../events/on": 4, "../util/clone": 20}], 13: [function (e, t, n) {
                var i = e("../util/clone.js"), o = e("../uniqueid.js"), r = e("../events/trigger.js");
                t.exports = function (e, t, n, s) {
                    if (s = i(s || this.options), s.request = t, !1 !== e) {
                        var a = window.history.state || {};
                        window.history.replaceState({
                            url: a.url || window.location.href,
                            title: a.title || document.title,
                            uid: a.uid || o(),
                            scrollPos: [document.documentElement.scrollLeft || document.body.scrollLeft, document.documentElement.scrollTop || document.body.scrollTop]
                        }, document.title, window.location);
                        var l = n;
                        t.responseURL ? n !== t.responseURL && (n = t.responseURL) : t.getResponseHeader("X-PJAX-URL") ? n = t.getResponseHeader("X-PJAX-URL") : t.getResponseHeader("X-XHR-Redirected-To") && (n = t.getResponseHeader("X-XHR-Redirected-To"));
                        var c = document.createElement("a");
                        c.href = l;
                        var u = c.hash;
                        c.href = n, u && !c.hash && (c.hash = u, n = c.href), this.state.href = n, this.state.options = s;
                        try {
                            this.loadContent(e, this.options)
                        } catch (e) {
                            if (r(document, "pjax:error", s), this.options.debug) throw e;
                            return console && console.error && console.error("Pjax switch fail: ", e), this.latestChance(n)
                        }
                    } else r(document, "pjax:complete pjax:error", s)
                }
            }, {"../events/trigger.js": 5, "../uniqueid.js": 19, "../util/clone.js": 20}], 14: [function (e, t, n) {
                t.exports = function () {
                    this.options.debug && console && ("function" == typeof console.log ? console.log.apply(console, arguments) : console.log && console.log(arguments))
                }
            }, {}], 15: [function (e, t, n) {
                t.exports = function (e) {
                    switch (e.tagName.toLowerCase()) {
                        case"a":
                            e.hasAttribute("data-pjax-state") || this.attachLink(e);
                            break;
                        case"form":
                            e.hasAttribute("data-pjax-state") || this.attachForm(e);
                            break;
                        default:
                            throw"Pjax can only be applied on <a> or <form> submit"
                    }
                }
            }, {}], 16: [function (e, t, n) {
                var i = e("./util/update-query-string");
                t.exports = function (e, t, n) {
                    var o, r = (t = t || {}).requestOptions || {}, s = (r.requestMethod || "GET").toUpperCase(),
                        a = r.requestParams || null, l = r.formData || null, c = null, u = new XMLHttpRequest,
                        d = t.timeout || 0;
                    if (u.onreadystatechange = function () {
                        4 === u.readyState && (200 === u.status ? n(u.responseText, u, e, t) : 0 !== u.status && n(null, u, e, t))
                    }, u.onerror = function (i) {
                        console.log(i), n(null, u, e, t)
                    }, u.ontimeout = function () {
                        n(null, u, e, t)
                    }, a && a.length) switch (o = a.map(function (e) {
                        return e.name + "=" + e.value
                    }).join("&"), s) {
                        case"GET":
                            e = e.split("?")[0], e += "?" + o;
                            break;
                        case"POST":
                            c = o
                    } else l && (c = l);
                    return t.cacheBust && (e = i(e, "t", Date.now())), u.open(s, e, !0), u.timeout = d, u.setRequestHeader("X-Requested-With", "XMLHttpRequest"), u.setRequestHeader("X-PJAX", "true"), u.setRequestHeader("X-PJAX-Selectors", JSON.stringify(t.selectors)), c && "POST" === s && u.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), u.send(c), u
                }
            }, {"./util/update-query-string": 24}], 17: [function (e, t, n) {
                var i = e("./foreach-els"), o = e("./switches");
                t.exports = function (e, t, n, r, s, a) {
                    var l = [];
                    n.forEach(function (n) {
                        var c = r.querySelectorAll(n), u = s.querySelectorAll(n);
                        if (this.log && this.log("Pjax switch", n, c, u), c.length !== u.length) throw"DOM doesn’t look the same on new loaded page: ’" + n + "’ - new " + c.length + ", old " + u.length;
                        i(c, function (i, r) {
                            var s = u[r];
                            this.log && this.log("newEl", i, "oldEl", s);
                            var c = e[n] ? e[n].bind(this, s, i, a, t[n]) : o.outerHTML.bind(this, s, i, a);
                            l.push(c)
                        }, this)
                    }, this), this.state.numPendingSwitches = l.length, l.forEach(function (e) {
                        e()
                    })
                }
            }, {"./foreach-els": 7, "./switches": 18}], 18: [function (e, t, n) {
                var i = e("./events/on.js");
                t.exports = {
                    outerHTML: function (e, t) {
                        e.outerHTML = t.outerHTML, this.onSwitch()
                    }, innerHTML: function (e, t) {
                        e.innerHTML = t.innerHTML, "" === t.className ? e.removeAttribute("class") : e.className = t.className, this.onSwitch()
                    }, switchElementsAlt: function (e, t) {
                        if (e.innerHTML = t.innerHTML, t.hasAttributes()) for (var n = t.attributes, i = 0; i < n.length; i++) e.attributes.setNamedItem(n[i].cloneNode());
                        this.onSwitch()
                    }, replaceNode: function (e, t) {
                        e.parentNode.replaceChild(t, e), this.onSwitch()
                    }, sideBySide: function (e, t, n, o) {
                        var r = Array.prototype.forEach, s = [], a = [], l = document.createDocumentFragment(),
                            c = "animationend webkitAnimationEnd MSAnimationEnd oanimationend", u = 0,
                            d = function (e) {
                                e.target === e.currentTarget && --u <= 0 && s && (s.forEach(function (e) {
                                    e.parentNode && e.parentNode.removeChild(e)
                                }), a.forEach(function (e) {
                                    e.className = e.className.replace(e.getAttribute("data-pjax-classes"), ""), e.removeAttribute("data-pjax-classes")
                                }), a = null, s = null, this.onSwitch())
                            }.bind(this);
                        o = o || {}, r.call(e.childNodes, function (e) {
                            s.push(e), e.classList && !e.classList.contains("js-Pjax-remove") && (e.hasAttribute("data-pjax-classes") && (e.className = e.className.replace(e.getAttribute("data-pjax-classes"), ""), e.removeAttribute("data-pjax-classes")), e.classList.add("js-Pjax-remove"), o.callbacks && o.callbacks.removeElement && o.callbacks.removeElement(e), o.classNames && (e.className += " " + o.classNames.remove + " " + (n.backward ? o.classNames.backward : o.classNames.forward)), u++, i(e, c, d, !0))
                        }), r.call(t.childNodes, function (e) {
                            if (e.classList) {
                                var t = "";
                                o.classNames && (t = " js-Pjax-add " + o.classNames.add + " " + (n.backward ? o.classNames.forward : o.classNames.backward)), o.callbacks && o.callbacks.addElement && o.callbacks.addElement(e), e.className += t, e.setAttribute("data-pjax-classes", t), a.push(e), l.appendChild(e), u++, i(e, c, d, !0)
                            }
                        }), e.className = t.className, e.appendChild(l)
                    }
                }
            }, {"./events/on.js": 4}], 19: [function (e, t, n) {
                t.exports = function () {
                    var e = 0;
                    return function () {
                        var t = "pjax" + (new Date).getTime() + "_" + e;
                        return e++, t
                    }
                }()
            }, {}], 20: [function (e, t, n) {
                t.exports = function (e) {
                    if (null === e || "object" != typeof e) return e;
                    var t = e.constructor();
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    return t
                }
            }, {}], 21: [function (e, t, n) {
                t.exports = function (e, t, n) {
                    for (var i = 0; i < t.length; i++) for (var o = e.querySelectorAll(t[i]), r = 0; r < o.length; r++) if (o[r].contains(n)) return !0;
                    return !1
                }
            }, {}], 22: [function (e, t, n) {
                t.exports = function (e) {
                    if (null == e) return null;
                    for (var t = Object(e), n = 1; n < arguments.length; n++) {
                        var i = arguments[n];
                        if (null != i) for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o])
                    }
                    return t
                }
            }, {}], 23: [function (e, t, n) {
                t.exports = function () {
                }
            }, {}], 24: [function (e, t, n) {
                t.exports = function (e, t, n) {
                    var i = new RegExp("([?&])" + t + "=.*?(&|$)", "i"), o = -1 !== e.indexOf("?") ? "&" : "?";
                    return e.match(i) ? e.replace(i, "$1" + t + "=" + n + "$2") : e + o + t + "=" + n
                }
            }, {}]
        }, {}, [1])(1)
    }), function (e) {
    "use strict";
    e(document).on("pjax:send", function () {
        e("body").addClass("page-loading"), e(document).trigger("pjaxSend")
    }), e(document).on("pjaxSend", function () {
// close the aside on mobile
        e("#aside").modal("hide"), e("body").removeClass("modal-open").find(".modal-backdrop").remove(),
// remove the tags created by plugins
            e(".jqvmap-label, .note-popover, .dz-hidden-input").remove()
    }), e(document).on("refresh", function () {
        i && i.refresh(), o && o.refresh()
    }), e(document).on("pjax:success", function () {
        e("body").removeClass("page-loading"), bootstrap && bootstrap.Util ? e(document).one(bootstrap.Util.TRANSITION_END, function () {
            e(".js-Pjax-onswitch").removeClass("js-Pjax-onswitch"), e(document).trigger("pjaxEnd")
        }).emulateTransitionEnd(600) : e(document).trigger("pjaxEnd")
    });
    var t = {
        addElement: function (t) {
            e("html,body").scrollTop(0), e(".scroll-header").removeClass("scrolled"), e(t).parent().addClass("js-Pjax-onswitch"), e(document).delay(10).queue(function () {
                e(document).trigger("pjaxAddEl").dequeue()
            })
        }, removeElement: function (t) {
            e(t).css("width", e(t).parent().width()), e(document).delay(10).queue(function () {
                e(document).trigger("pjaxRemoveEl").dequeue()
            })
        }
    }, n = {
        classNames: {
// class added on the element that will be removed
            remove: "animate animate-reverse animate-fast animate-no-delay",
// class added on the element that will be added
            add: "animate",
// class added on the element when it go backward
            backward: "slideInRight",
// class added on the element when it go forward (used for new page too)
            forward: "slideInLeft"
        }, callbacks: t
    }, i = new Pjax({
        cacheBust: !1,
        elements: "#aside a:not(.no-ajax), #header a:not(.no-ajax), .ajax",
        selectors: ["title", "#content"],
        switches: {"#content": Pjax.switches.sideBySide},
        switchesOptions: {"#content": n}
    }), o = new Pjax({
        cacheBust: !1,
        elements: "#content-aside a, #content-body a",
        selectors: ["title", "#content-body"],
        switches: {"#content-body": Pjax.switches.sideBySide},
        switchesOptions: {"#content-body": n}
    })
}(jQuery);
// lazyload config
var MODULE_CONFIG = {
    search: ["../libs/list.js/dist/list.js", "../assets/js/app/search.js"],
    list: ["../libs/list.js/dist/list.js", "../assets/js/plugins/list.js"],
    fullscreen: ["../libs/jquery-fullscreen-plugin/jquery.fullscreen-min.js", "../assets/js/plugins/fullscreen.js"],
    jscroll: ["../libs/jscroll/dist/jquery.jscroll.min.js"],
    typeahead: ["../libs/typeahead.js/dist/typeahead.bundle.min.js", "../assets/js/plugins/typeahead.js"],
    plyr: ["../libs/plyr/dist/plyr.polyfilled.min.js", "../libs/plyrist/src/plyrist.css", "../libs/plyrist/src/plyrist.js", "../assets/js/plugins/plyr.js"]
}, MODULE_OPTION_CONFIG = {}, lazyload = lazyload || {};
!function (e, t) {
    "use strict";
    var n = [], i = !1, o = e.Deferred();
    /**
     * Chain loads the given sources
     * @param srcs array, script or css
     * @returns {*} Promise that will be resolved once the sources has been loaded.
     */
    t.load = function (t) {
        return t = e.isArray(t) ? t : t.split(/\s+/), i || (i = o.promise()), e.each(t, function (e, t) {
            i = i.then(function () {
                return n[t] ? n[t].promise() : t.indexOf(".css") >= 0 ? s(t) : r(t)
            })
        }), o.resolve(), i
    }, t.unload = function (t) {
        t = e.isArray(t) ? t : t.split(/\s+/), e.each(t, function (t, i) {
            i.indexOf(".css") >= 0 ? e('link[href="' + i + '"]').remove() : e('script[src="' + i + '"]').remove(), delete n[i]
        })
    };
    /**
     * Dynamically loads the given script
     * @param src The url of the script to load dynamically
     * @returns {*} Promise that will be resolved once the script has been loaded.
     */
    var r = function (t) {
        var i = e.Deferred(), o = document.createElement("script");
        return o.src = t, o.onload = function (e) {
            i.resolve(e)
        }, o.onerror = function (e) {
            i.reject(e)
        }, document.body.appendChild(o), n[t] = i, i.promise()
    }, s = function (t) {
        var i = e.Deferred(), o = document.createElement("link");
        o.rel = "stylesheet", o.type = "text/css", o.href = t, o.onload = function (e) {
            i.resolve(e)
        }, o.onerror = function (e) {
            i.reject(e)
        };
        var r = document.getElementsByTagName("head")[0];
        return r.insertBefore(o, r.firstChild), n[t] = i, i.promise()
    }
}(jQuery, lazyload), function ($, MODULE_CONFIG, MODULE_OPTION_CONFIG) {
    "use strict";
    $.fn.plugin = function () {
        function getOpts(opts, plugin) {
            var options = opts && eval("[" + opts + "]");
            return options && $.isPlainObject(options[0]) && (options[0] = $.extend({}, MODULE_OPTION_CONFIG[plugin], options[0])), options
        }

        return this.each(function () {
            var e = $(this), t = e.find(".loading"), n = e.attr("data-option") || e.attr("data-plugin-option"),
                i = e.attr("data-plugin");
// check if the plugin loaded and has option in the attribute
            e[i] && n ? (
// init plugin with the potion on it's attribute
                    e[i].apply(e, getOpts(n, i)), t.remove()) :
                // load the plugin
                lazyload.load(MODULE_CONFIG[i]).then(function () {
// init plugin with the potion on it's attribute
                    n && e[i].apply(e, getOpts(n, i)),
// call the plugin init()
                    e[i] && e[i].init && e[i].init(),
// call other init()
                    window[i] && window[i].init && window[i].init(), t.remove()
                }), e.removeAttr("data-plugin").removeAttr("data-option")
        })
    }
}(jQuery, MODULE_CONFIG, MODULE_OPTION_CONFIG), function () {
    "use strict";

    function e(n) {
        return void 0 === this || Object.getPrototypeOf(this) !== e.prototype ? new e(n) : (S = this, S.version = "3.3.6", S.tools = new T, S.isSupported() ? (S.tools.extend(S.defaults, n || {}), S.defaults.container = t(S.defaults), S.store = {
            elements: {},
            containers: []
        }, S.sequences = {}, S.history = [], S.uid = 0, S.initialized = !1) : "undefined" != typeof console && console, S)
    }

    function t(e) {
        if (e && e.container) {
            if ("string" == typeof e.container) return window.document.documentElement.querySelector(e.container);
            if (S.tools.isNode(e.container)) return e.container
        }
        return S.defaults.container
    }

    function n(e, t) {
        return "string" == typeof e ? Array.prototype.slice.call(t.querySelectorAll(e)) : S.tools.isNode(e) ? [e] : S.tools.isNodeList(e) ? Array.prototype.slice.call(e) : []
    }

    function i() {
        return ++S.uid
    }

    function o(e, t, n) {
        t.container && (t.container = n), e.config ? e.config = S.tools.extendClone(e.config, t) : e.config = S.tools.extendClone(S.defaults, t), "top" === e.config.origin || "bottom" === e.config.origin ? e.config.axis = "Y" : e.config.axis = "X"
    }

    function r(e) {
        var t = window.getComputedStyle(e.domEl);
        e.styles || (e.styles = {
            transition: {},
            transform: {},
            computed: {}
        }, e.styles.inline = e.domEl.getAttribute("style") || "", e.styles.inline += "; visibility: visible; ", e.styles.computed.opacity = t.opacity, t.transition && "all 0s ease 0s" !== t.transition ? e.styles.computed.transition = t.transition + ", " : e.styles.computed.transition = ""), e.styles.transition.instant = s(e, 0), e.styles.transition.delayed = s(e, e.config.delay), e.styles.transform.initial = " -webkit-transform:", e.styles.transform.target = " -webkit-transform:", a(e), e.styles.transform.initial += "transform:", e.styles.transform.target += "transform:", a(e)
    }

    function s(e, t) {
        var n = e.config;
        return "-webkit-transition: " + e.styles.computed.transition + "-webkit-transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; transition: " + e.styles.computed.transition + "transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; "
    }

    function a(e) {
        var t, n = e.config, i = e.styles.transform;
        t = "top" === n.origin || "left" === n.origin ? /^-/.test(n.distance) ? n.distance.substr(1) : "-" + n.distance : n.distance, parseInt(n.distance) && (i.initial += " translate" + n.axis + "(" + t + ")", i.target += " translate" + n.axis + "(0)"), n.scale && (i.initial += " scale(" + n.scale + ")", i.target += " scale(1)"), n.rotate.x && (i.initial += " rotateX(" + n.rotate.x + "deg)", i.target += " rotateX(0)"), n.rotate.y && (i.initial += " rotateY(" + n.rotate.y + "deg)", i.target += " rotateY(0)"), n.rotate.z && (i.initial += " rotateZ(" + n.rotate.z + "deg)", i.target += " rotateZ(0)"), i.initial += "; opacity: " + n.opacity + ";", i.target += "; opacity: " + e.styles.computed.opacity + ";"
    }

    function l(e) {
        var t = e.config.container;
        t && -1 === S.store.containers.indexOf(t) && S.store.containers.push(e.config.container), S.store.elements[e.id] = e
    }

    function c(e, t, n) {
        var i = {target: e, config: t, interval: n};
        S.history.push(i)
    }

    function u() {
        if (S.isSupported()) {
            f();
            for (var e = 0; e < S.store.containers.length; e++) S.store.containers[e].addEventListener("scroll", d), S.store.containers[e].addEventListener("resize", d);
            S.initialized || (window.addEventListener("scroll", d), window.addEventListener("resize", d), S.initialized = !0)
        }
        return S
    }

    function d() {
        C(f)
    }

    function p() {
        var e, t, n, i;
        S.tools.forOwn(S.sequences, function (o) {
            i = S.sequences[o], e = !1;
            for (var r = 0; r < i.elemIds.length; r++) n = i.elemIds[r], t = S.store.elements[n], _(t) && !e && (e = !0);
            i.active = e
        })
    }

    function f() {
        var e, t;
        p(), S.tools.forOwn(S.store.elements, function (n) {
            t = S.store.elements[n], e = m(t), g(t) ? (t.config.beforeReveal(t.domEl), e ? t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.delayed) : t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.instant), y("reveal", t, e), t.revealing = !0, t.seen = !0, t.sequence && h(t, e)) : v(t) && (t.config.beforeReset(t.domEl), t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.initial + t.styles.transition.instant), y("reset", t), t.revealing = !1)
        })
    }

    function h(e, t) {
        var n = 0, i = 0, o = S.sequences[e.sequence.id];
        o.blocked = !0, t && "onload" === e.config.useDelay && (i = e.config.delay), e.sequence.timer && (n = Math.abs(e.sequence.timer.started - new Date), window.clearTimeout(e.sequence.timer)), e.sequence.timer = {started: new Date}, e.sequence.timer.clock = window.setTimeout(function () {
            o.blocked = !1, e.sequence.timer = null, d()
        }, Math.abs(o.interval) + i - n)
    }

    function y(e, t, n) {
        var i = 0, o = 0, r = "after";
        switch (e) {
            case"reveal":
                o = t.config.duration, n && (o += t.config.delay), r += "Reveal";
                break;
            case"reset":
                o = t.config.duration, r += "Reset"
        }
        t.timer && (i = Math.abs(t.timer.started - new Date), window.clearTimeout(t.timer.clock)), t.timer = {started: new Date}, t.timer.clock = window.setTimeout(function () {
            t.config[r](t.domEl), t.timer = null
        }, o - i)
    }

    function g(e) {
        if (e.sequence) {
            var t = S.sequences[e.sequence.id];
            return t.active && !t.blocked && !e.revealing && !e.disabled
        }
        return _(e) && !e.revealing && !e.disabled
    }

    function m(e) {
        var t = e.config.useDelay;
        return "always" === t || "onload" === t && !S.initialized || "once" === t && !e.seen
    }

    function v(e) {
        return e.sequence ? !S.sequences[e.sequence.id].active && e.config.reset && e.revealing && !e.disabled : !_(e) && e.config.reset && e.revealing && !e.disabled
    }

    function x(e) {
        return {width: e.clientWidth, height: e.clientHeight}
    }

    function w(e) {
        if (e && e !== window.document.documentElement) {
            var t = b(e);
            return {x: e.scrollLeft + t.left, y: e.scrollTop + t.top}
        }
        return {x: window.pageXOffset, y: window.pageYOffset}
    }

    function b(e) {
        var t = 0, n = 0, i = e.offsetHeight, o = e.offsetWidth;
        do {
            isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (n += e.offsetLeft), e = e.offsetParent
        } while (e);
        return {top: t, left: n, height: i, width: o}
    }

    function _(e) {
        var t = b(e.domEl), n = x(e.config.container), i = w(e.config.container), o = e.config.viewFactor, r = t.height,
            s = t.width, a = t.top, l = t.left, c = a + r, u = l + s;
        return function () {
            var t = a + r * o, d = l + s * o, p = c - r * o, f = u - s * o, h = i.y + e.config.viewOffset.top,
                y = i.x + e.config.viewOffset.left, g = i.y - e.config.viewOffset.bottom + n.height,
                m = i.x - e.config.viewOffset.right + n.width;
            return t < g && p > h && d < m && f > y
        }() || "fixed" === window.getComputedStyle(e.domEl).position
    }

    function T() {
    }

    var S, C;
    e.prototype.defaults = {
        origin: "bottom",
        distance: "20px",
        duration: 500,
        delay: 0,
        rotate: {x: 0, y: 0, z: 0},
        opacity: 0,
        scale: .9,
        easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
        container: window.document.documentElement,
        mobile: !0,
        reset: !1,
        useDelay: "always",
        viewFactor: .2,
        viewOffset: {top: 0, right: 0, bottom: 0, left: 0},
        beforeReveal: function (e) {
        },
        beforeReset: function (e) {
        },
        afterReveal: function (e) {
        },
        afterReset: function (e) {
        }
    }, e.prototype.isSupported = function () {
        var e = document.documentElement.style;
        return "WebkitTransition" in e && "WebkitTransform" in e || "transition" in e && "transform" in e
    }, e.prototype.reveal = function (e, s, a, d) {
        var p, f, h, y, g, m;
        if (void 0 !== s && "number" == typeof s ? (a = s, s = {}) : void 0 !== s && null !== s || (s = {}), p = t(s), !(f = n(e, p)).length) return S;
        a && "number" == typeof a && (m = i(), g = S.sequences[m] = {id: m, interval: a, elemIds: [], active: !1});
        for (var v = 0; v < f.length; v++) (y = f[v].getAttribute("data-sr-id")) ? h = S.store.elements[y] : (h = {
            id: i(),
            domEl: f[v],
            seen: !1,
            revealing: !1
        }).domEl.setAttribute("data-sr-id", h.id), g && (h.sequence = {
            id: g.id,
            index: g.elemIds.length
        }, g.elemIds.push(h.id)), o(h, s, p), r(h), l(h), S.tools.isMobile() && !h.config.mobile || !S.isSupported() ? (h.domEl.setAttribute("style", h.styles.inline), h.disabled = !0) : h.revealing || h.domEl.setAttribute("style", h.styles.inline + h.styles.transform.initial);
        return !d && S.isSupported() && (c(e, s, a), S.initTimeout && window.clearTimeout(S.initTimeout), S.initTimeout = window.setTimeout(u, 0)), S
    }, e.prototype.sync = function () {
        if (S.history.length && S.isSupported()) {
            for (var e = 0; e < S.history.length; e++) {
                var t = S.history[e];
                S.reveal(t.target, t.config, t.interval, !0)
            }
            u()
        }
        return S
    }, T.prototype.isObject = function (e) {
        return null !== e && "object" == typeof e && e.constructor === Object
    }, T.prototype.isNode = function (e) {
        return "object" == typeof window.Node ? e instanceof window.Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
    }, T.prototype.isNodeList = function (e) {
        var t = Object.prototype.toString.call(e), n = /^\[object (HTMLCollection|NodeList|Object)\]$/;
        return "object" == typeof window.NodeList ? e instanceof window.NodeList : e && "object" == typeof e && n.test(t) && "number" == typeof e.length && (0 === e.length || this.isNode(e[0]))
    }, T.prototype.forOwn = function (e, t) {
        if (!this.isObject(e)) throw new TypeError('Expected "object", but received "' + typeof e + '".');
        for (var n in e) e.hasOwnProperty(n) && t(n)
    }, T.prototype.extend = function (e, t) {
        return this.forOwn(t, function (n) {
            this.isObject(t[n]) ? (e[n] && this.isObject(e[n]) || (e[n] = {}), this.extend(e[n], t[n])) : e[n] = t[n]
        }.bind(this)), e
    }, T.prototype.extendClone = function (e, t) {
        return this.extend(this.extend({}, e), t)
    }, T.prototype.isMobile = function () {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }, C = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
        window.setTimeout(e, 1e3 / 60)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
        return e
    }) : "undefined" != typeof module && module.exports ? module.exports = e : window.ScrollReveal = e
}(), function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
    "use strict";
    var t = window.Slick || {};
    (t = function () {
        var t = 0;
        return function (n, i) {
            var o, r = this;
            r.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(n),
                appendDots: e(n),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (t, n) {
                    return e('<button type="button" />').text(n + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, r.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(n), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = e(n).data("slick") || {}, r.options = e.extend({}, r.defaults, i, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = t++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
        }
    }()).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
    }, t.prototype.addSlide = t.prototype.slickAdd = function (t, n, i) {
        var o = this;
        if ("boolean" == typeof n) i = n, n = null; else if (n < 0 || n >= o.slideCount) return !1;
        o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : !0 === i ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (t, n) {
            e(n).attr("data-slick-index", t)
        }), o.$slidesCache = o.$slides, o.reinit()
    }, t.prototype.animateHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({height: t}, e.options.speed)
        }
    }, t.prototype.animateSlide = function (t, n) {
        var i = {}, o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({left: t}, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({top: t}, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({animStart: o.currentLeft}).animate({animStart: t}, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function (e) {
                e = Math.ceil(e), !1 === o.options.vertical ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i))
            },
            complete: function () {
                n && n.call()
            }
        })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout(function () {
            o.disableTransition(), n.call()
        }, o.options.speed))
    }, t.prototype.getNavTarget = function () {
        var t = this, n = t.options.asNavFor;
        return n && null !== n && (n = e(n).not(t.$slider)), n
    }, t.prototype.asNavFor = function (t) {
        var n = this.getNavTarget();
        null !== n && "object" == typeof n && n.each(function () {
            var n = e(this).slick("getSlick");
            n.unslicked || n.slideHandler(t, !0)
        })
    }, t.prototype.applyTransition = function (e) {
        var t = this, n = {};
        !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }, t.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, t.prototype.autoPlayClear = function () {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }, t.prototype.autoPlayIterator = function () {
        var e = this, t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
    }, t.prototype.buildArrows = function () {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, t.prototype.buildDots = function () {
        var t, n, i = this;
        if (!0 === i.options.dots) {
            for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
            i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
        }
    }, t.prototype.buildOut = function () {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, n) {
            e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
        }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
    }, t.prototype.buildRows = function () {
        var e, t, n, i, o, r, s, a = this;
        if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
            for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var c = document.createElement("div");
                    for (n = 0; n < a.options.slidesPerRow; n++) {
                        var u = e * s + (t * a.options.slidesPerRow + n);
                        r.get(u) && c.appendChild(r.get(u))
                    }
                    l.appendChild(c)
                }
                i.appendChild(l)
            }
            a.$slider.empty().append(i), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, t.prototype.checkResponsive = function (t, n) {
        var i, o, r, s = this, a = !1, l = s.$slider.width(), c = window.innerWidth || e(window).width();
        if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            o = null;
            for (i in s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
            null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o), t || !1 === a || s.$slider.trigger("breakpoint", [s, a])
        }
    }, t.prototype.changeSlide = function (t, n) {
        var i, o, r, s = this, a = e(t.currentTarget);
        switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), r = s.slideCount % s.options.slidesToScroll != 0, i = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
            case"previous":
                o = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, n);
                break;
            case"next":
                o = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, n);
                break;
            case"index":
                var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
                s.slideHandler(s.checkNavigable(l), !1, n), a.children().trigger("focus");
                break;
            default:
                return
        }
    }, t.prototype.checkNavigable = function (e) {
        var t, n;
        if (t = this.getNavigableIndexes(), n = 0, e > t[t.length - 1]) e = t[t.length - 1]; else for (var i in t) {
            if (e < t[i]) {
                e = n;
                break
            }
            n = t[i]
        }
        return e
    }, t.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.cleanUpSlideEvents = function () {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.cleanUpRows = function () {
        var e, t = this;
        t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
    }, t.prototype.clickHandler = function (e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, t.prototype.destroy = function (t) {
        var n = this;
        n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            e(this).attr("style", e(this).data("originalStyling"))
        }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
    }, t.prototype.disableTransition = function (e) {
        var t = this, n = {};
        n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }, t.prototype.fadeSlide = function (e, t) {
        var n = this;
        !1 === n.cssTransitions ? (n.$slides.eq(e).css({zIndex: n.options.zIndex}), n.$slides.eq(e).animate({opacity: 1}, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }), t && setTimeout(function () {
            n.disableTransition(e), t.call()
        }, n.options.speed))
    }, t.prototype.fadeSlideOut = function (e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, t.prototype.focusHandler = function () {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (n) {
            n.stopImmediatePropagation();
            var i = e(this);
            setTimeout(function () {
                t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())
            }, 0)
        })
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, t.prototype.getDotCount = function () {
        var e = this, t = 0, n = 0, i = 0;
        if (!0 === e.options.infinite) if (e.slideCount <= e.options.slidesToShow) ++i; else for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else if (!0 === e.options.centerMode) i = e.slideCount; else if (e.options.asNavFor) for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return i - 1
    }, t.prototype.getLeft = function (e) {
        var t, n, i, o, r = this, s = 0;
        return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), s = n * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, s = (r.options.slidesToShow - (e - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, s = r.slideCount % r.options.slidesToScroll * n * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (e + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, s = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + s, !0 === r.options.variableWidth && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === r.options.centerMode && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (r.$list.width() - i.outerWidth()) / 2)), t
    }, t.prototype.getOption = t.prototype.slickGetOption = function (e) {
        return this.options[e]
    }, t.prototype.getNavigableIndexes = function () {
        var e, t = this, n = 0, i = 0, o = [];
        for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); n < e;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o
    }, t.prototype.getSlick = function () {
        return this
    }, t.prototype.getSlideCount = function () {
        var t, n, i = this;
        return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function (o, r) {
            if (r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft) return t = r, !1
        }), Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
    }, t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
        this.changeSlide({data: {message: "index", index: parseInt(e)}}, t)
    }, t.prototype.init = function (t) {
        var n = this;
        e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
    }, t.prototype.initADA = function () {
        var t = this, n = Math.ceil(t.slideCount / t.options.slidesToShow),
            i = t.getNavigableIndexes().filter(function (e) {
                return e >= 0 && e < t.slideCount
            });
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({tabindex: "-1"}), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (n) {
            var o = i.indexOf(n);
            e(this).attr({
                role: "tabpanel",
                id: "slick-slide" + t.instanceUid + n,
                tabindex: -1
            }), -1 !== o && e(this).attr({"aria-describedby": "slick-slide-control" + t.instanceUid + o})
        }), t.$dots.attr("role", "tablist").find("li").each(function (o) {
            var r = i[o];
            e(this).attr({role: "presentation"}), e(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + t.instanceUid + o,
                "aria-controls": "slick-slide" + t.instanceUid + r,
                "aria-label": o + 1 + " of " + n,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(t.currentSlide).find("button").attr({"aria-selected": "true", tabindex: "0"}).end());
        for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++) t.$slides.eq(o).attr("tabindex", 0);
        t.activateADA()
    }, t.prototype.initArrowEvents = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
    }, t.prototype.initDotEvents = function () {
        var t = this;
        !0 === t.options.dots && (e("li", t.$dots).on("click.slick", {message: "index"}, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.initSlideEvents = function () {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
    }, t.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {action: "start"}, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {action: "move"}, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {action: "end"}, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
    }, t.prototype.initUI = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, t.prototype.keyHandler = function (e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({data: {message: !0 === t.options.rtl ? "next" : "previous"}}) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({data: {message: !0 === t.options.rtl ? "previous" : "next"}}))
    }, t.prototype.lazyLoad = function () {
        function t(t) {
            e("img[data-lazy]", t).each(function () {
                var t = e(this), n = e(this).attr("data-lazy"), i = e(this).attr("data-srcset"),
                    o = e(this).attr("data-sizes") || r.$slider.attr("data-sizes"), s = document.createElement("img");
                s.onload = function () {
                    t.animate({opacity: 0}, 100, function () {
                        i && (t.attr("srcset", i), o && t.attr("sizes", o)), t.attr("src", n).animate({opacity: 1}, 200, function () {
                            t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), r.$slider.trigger("lazyLoaded", [r, t, n])
                    })
                }, s.onerror = function () {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, n])
                }, s.src = n
            })
        }

        var n, i, o, r = this;
        if (!0 === r.options.centerMode ? !0 === r.options.infinite ? o = (i = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (i = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), o = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (i = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, o = Math.ceil(i + r.options.slidesToShow), !0 === r.options.fade && (i > 0 && i--, o <= r.slideCount && o++)), n = r.$slider.find(".slick-slide").slice(i, o), "anticipated" === r.options.lazyLoad) for (var s = i - 1, a = o, l = r.$slider.find(".slick-slide"), c = 0; c < r.options.slidesToScroll; c++) s < 0 && (s = r.slideCount - 1), n = (n = n.add(l.eq(s))).add(l.eq(a)), s--, a++;
        t(n), r.slideCount <= r.options.slidesToShow ? t(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? t(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && t(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
    }, t.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(), e.$slideTrack.css({opacity: 1}), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, t.prototype.next = t.prototype.slickNext = function () {
        this.changeSlide({data: {message: "next"}})
    }, t.prototype.orientationChange = function () {
        var e = this;
        e.checkResponsive(), e.setPosition()
    }, t.prototype.pause = t.prototype.slickPause = function () {
        var e = this;
        e.autoPlayClear(), e.paused = !0
    }, t.prototype.play = t.prototype.slickPlay = function () {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, t.prototype.postSlide = function (t) {
        var n = this;
        n.unslicked || (n.$slider.trigger("afterChange", [n, t]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()))
    }, t.prototype.prev = t.prototype.slickPrev = function () {
        this.changeSlide({data: {message: "previous"}})
    }, t.prototype.preventDefault = function (e) {
        e.preventDefault()
    }, t.prototype.progressiveLazyLoad = function (t) {
        t = t || 1;
        var n, i, o, r, s, a = this, l = e("img[data-lazy]", a.$slider);
        l.length ? (n = l.first(), i = n.attr("data-lazy"), o = n.attr("data-srcset"), r = n.attr("data-sizes") || a.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function () {
            o && (n.attr("srcset", o), r && n.attr("sizes", r)), n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, n, i]), a.progressiveLazyLoad()
        }, s.onerror = function () {
            t < 3 ? setTimeout(function () {
                a.progressiveLazyLoad(t + 1)
            }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad())
        }, s.src = i) : a.$slider.trigger("allImagesLoaded", [a])
    }, t.prototype.refresh = function (t) {
        var n, i, o = this;
        i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {currentSlide: n}), o.init(), t || o.changeSlide({
            data: {
                message: "index",
                index: n
            }
        }, !1)
    }, t.prototype.registerBreakpoints = function () {
        var t, n, i, o = this, r = o.options.responsive || null;
        if ("array" === e.type(r) && r.length) {
            o.respondTo = o.options.respondTo || "window";
            for (t in r) if (i = o.breakpoints.length - 1, r.hasOwnProperty(t)) {
                for (n = r[t].breakpoint; i >= 0;) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
                o.breakpoints.push(n), o.breakpointSettings[n] = r[t].settings
            }
            o.breakpoints.sort(function (e, t) {
                return o.options.mobileFirst ? e - t : t - e
            })
        }
    }, t.prototype.reinit = function () {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
    }, t.prototype.resize = function () {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
            t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
        }, 50))
    }, t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, n) {
        var i = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
        i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
    }, t.prototype.setCSS = function (e) {
        var t, n, i = this, o = {};
        !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {}, !1 === i.cssTransitions ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)))
    }, t.prototype.setDimensions = function () {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({padding: "0px " + e.options.centerPadding}) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({padding: e.options.centerPadding + " 0px"})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, t.prototype.setFade = function () {
        var t, n = this;
        n.$slides.each(function (i, o) {
            t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(o).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            }) : e(o).css({position: "relative", left: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0})
        }), n.$slides.eq(n.currentSlide).css({zIndex: n.options.zIndex - 1, opacity: 1})
    }, t.prototype.setHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, t.prototype.setOption = t.prototype.slickSetOption = function () {
        var t, n, i, o, r, s = this, a = !1;
        if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) s.options[i] = o; else if ("multiple" === r) e.each(i, function (e, t) {
            s.options[e] = t
        }); else if ("responsive" === r) for (n in o) if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[n]]; else {
            for (t = s.options.responsive.length - 1; t >= 0;) s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), t--;
            s.options.responsive.push(o[n])
        }
        a && (s.unload(), s.reinit())
    }, t.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, t.prototype.setProps = function () {
        var e = this, t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, t.prototype.setSlideClasses = function (e) {
        var t, n, i, o, r = this;
        if (n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode) {
            var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
            t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1 + s, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")
        } else e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
    }, t.prototype.setupInfinite = function () {
        var t, n, i, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (n = null, o.slideCount > o.options.slidesToShow)) {
            for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (t = 0; t < i + o.slideCount; t += 1) n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                e(this).attr("id", "")
            })
        }
    }, t.prototype.interrupt = function (e) {
        var t = this;
        e || t.autoPlay(), t.interrupted = e
    }, t.prototype.selectHandler = function (t) {
        var n = this, i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
            o = parseInt(i.attr("data-slick-index"));
        o || (o = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(o, !1, !0) : n.slideHandler(o)
    }, t.prototype.slideHandler = function (e, t, n) {
        var i, o, r, s, a, l = null, c = this;
        if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e)) if (!1 === t && c.asNavFor(e), i = e, l = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(s, function () {
            c.postSlide(i)
        }) : c.postSlide(i)); else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(s, function () {
            c.postSlide(i)
        }) : c.postSlide(i)); else {
            if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== n ? (c.fadeSlideOut(r), c.fadeSlide(o, function () {
                c.postSlide(o)
            })) : c.postSlide(o), void c.animateHeight();
            !0 !== n ? c.animateSlide(l, function () {
                c.postSlide(o)
            }) : c.postSlide(o)
        }
    }, t.prototype.startLoad = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, t.prototype.swipeDirection = function () {
        var e, t, n, i, o = this;
        return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 ? !1 === o.options.rtl ? "left" : "right" : i <= 360 && i >= 315 ? !1 === o.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical"
    }, t.prototype.swipeEnd = function (e) {
        var t, n, i = this;
        if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
        if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (n = i.swipeDirection()) {
                case"left":
                case"down":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                    break;
                case"right":
                case"up":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
            }
            "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
        } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
    }, t.prototype.swipeHandler = function (e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case"start":
                t.swipeStart(e);
                break;
            case"move":
                t.swipeMove(e);
                break;
            case"end":
                t.swipeEnd(e)
        }
    }, t.prototype.swipeMove = function (e) {
        var t, n, i, o, r, s, a = this;
        return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), n = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
    }, t.prototype.swipeStart = function (e) {
        var t, n = this;
        if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return n.touchObject = {}, !1;
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, t.prototype.unload = function () {
        var t = this;
        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, t.prototype.unslick = function (e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy()
    }, t.prototype.updateArrows = function () {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, t.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
    }, t.prototype.visibility = function () {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
    }, e.fn.slick = function () {
        var e, n, i = this, o = arguments[0], r = Array.prototype.slice.call(arguments, 1), s = i.length;
        for (e = 0; e < s; e++) if ("object" == typeof o || void 0 === o ? i[e].slick = new t(i[e], o) : n = i[e].slick[o].apply(i[e].slick, r), void 0 !== n) return n;
        return i
    }
}), function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.feather = t() : e.feather = t()
}("undefined" != typeof self ? self : this, function () {
    return function (e) {
        function t(i) {
            if (n[i]) return n[i].exports;
            var o = n[i] = {i: i, l: !1, exports: {}};
            return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }

        var n = {};
        return t.m = e, t.c = n, t.d = function (e, n, i) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: i})
        }, t.r = function (e) {
            Object.defineProperty(e, "__esModule", {value: !0})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 61)
    }([function (e, t, n) {
        var i = n(20)("wks"), o = n(11), r = n(1).Symbol, s = "function" == typeof r;
        (e.exports = function (e) {
            return i[e] || (i[e] = s && r[e] || (s ? r : o)("Symbol." + e))
        }).store = i
    }, function (e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function (e, t) {
        var n = e.exports = {version: "2.5.6"};
        "number" == typeof __e && (__e = n)
    }, function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
            return n.call(e, t)
        }
    }, function (e, t, n) {
        e.exports = !n(27)(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (e, t, n) {
        var i = n(13);
        e.exports = function (e) {
            if (!i(e)) throw TypeError(e + " is not an object!");
            return e
        }
    }, function (e, t, n) {
        var i = n(5), o = n(56), r = n(55), s = Object.defineProperty;
        t.f = n(4) ? Object.defineProperty : function (e, t, n) {
            if (i(e), t = r(t, !0), i(n), o) try {
                return s(e, t, n)
            } catch (e) {
            }
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    }, function (e, t, n) {
        var i = n(6), o = n(12);
        e.exports = n(4) ? function (e, t, n) {
            return i.f(e, t, o(1, n))
        } : function (e, t, n) {
            return e[t] = n, e
        }
    }, function (e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o = i(n(35)), r = i(n(33)), s = i(n(32));
        t.default = Object.keys(r.default).map(function (e) {
            return new o.default(e, r.default[e], s.default[e])
        }).reduce(function (e, t) {
            return e[t.name] = t, e
        }, {})
    }, function (e, t, n) {
        var i = n(20)("keys"), o = n(11);
        e.exports = function (e) {
            return i[e] || (i[e] = o(e))
        }
    }, function (e, t) {
        e.exports = {}
    }, function (e, t) {
        var n = 0, i = Math.random();
        e.exports = function (e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36))
        }
    }, function (e, t) {
        e.exports = function (e, t) {
            return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
        }
    }, function (e, t) {
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    }, function (e, t) {
        e.exports = function (e) {
            if (void 0 == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    }, function (e, t) {
        var n = Math.ceil, i = Math.floor;
        e.exports = function (e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e)
        }
    }, function (e, t, n) {
        var i;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
        /*!
      Copyright (c) 2016 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
        !function () {
            "use strict";
            var n = function () {
                function e() {
                }

                function t(e, t) {
                    for (var i = t.length, o = 0; o < i; ++o) n(e, t[o])
                }

                function n(e, n) {
                    if (n) {
                        var r = typeof n;
                        "string" === r ? function (e, t) {
                            for (var n = t.split(o), i = n.length, r = 0; r < i; ++r) e[n[r]] = !0
                        }(e, n) : Array.isArray(n) ? t(e, n) : "object" === r ? function (e, t) {
                            for (var n in t) i.call(t, n) && (e[n] = !!t[n])
                        }(e, n) : "number" === r && function (e, t) {
                            e[n] = !0
                        }(e)
                    }
                }

                e.prototype = Object.create(null);
                var i = {}.hasOwnProperty, o = /\s+/;
                return function () {
                    for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                    var r = new e;
                    t(r, i);
                    var s = [];
                    for (var a in r) r[a] && s.push(a);
                    return s.join(" ")
                }
            }();
            void 0 !== e && e.exports ? e.exports = n : void 0 === (i = function () {
                return n
            }.apply(t, [])) || (e.exports = i)
        }()
    }, function (e, t, n) {
        var i = n(14);
        e.exports = function (e) {
            return Object(i(e))
        }
    }, function (e, t, n) {
        var i = n(6).f, o = n(3), r = n(0)("toStringTag");
        e.exports = function (e, t, n) {
            e && !o(e = n ? e : e.prototype, r) && i(e, r, {configurable: !0, value: t})
        }
    }, function (e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function (e, t, n) {
        var i = n(2), o = n(1), r = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (e.exports = function (e, t) {
            return r[e] || (r[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: i.version,
            mode: n(29) ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        })
    }, function (e, t, n) {
        var i = n(15), o = Math.min;
        e.exports = function (e) {
            return e > 0 ? o(i(e), 9007199254740991) : 0
        }
    }, function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
            return n.call(e).slice(8, -1)
        }
    }, function (e, t, n) {
        var i = n(48), o = n(14);
        e.exports = function (e) {
            return i(o(e))
        }
    }, function (e, t, n) {
        var i = n(54);
        e.exports = function (e, t, n) {
            if (i(e), void 0 === t) return e;
            switch (n) {
                case 1:
                    return function (n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function (n, i) {
                        return e.call(t, n, i)
                    };
                case 3:
                    return function (n, i, o) {
                        return e.call(t, n, i, o)
                    }
            }
            return function () {
                return e.apply(t, arguments)
            }
        }
    }, function (e, t, n) {
        var i = n(1), o = n(7), r = n(3), s = n(11)("src"), a = Function.toString, l = ("" + a).split("toString");
        n(2).inspectSource = function (e) {
            return a.call(e)
        }, (e.exports = function (e, t, n, a) {
            var c = "function" == typeof n;
            c && (r(n, "name") || o(n, "name", t)), e[t] !== n && (c && (r(n, s) || o(n, s, e[t] ? "" + e[t] : l.join(String(t)))), e === i ? e[t] = n : a ? e[t] ? e[t] = n : o(e, t, n) : (delete e[t], o(e, t, n)))
        })(Function.prototype, "toString", function () {
            return "function" == typeof this && this[s] || a.call(this)
        })
    }, function (e, t, n) {
        var i = n(13), o = n(1).document, r = i(o) && i(o.createElement);
        e.exports = function (e) {
            return r ? o.createElement(e) : {}
        }
    }, function (e, t) {
        e.exports = function (e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    }, function (e, t, n) {
        var i = n(1), o = n(2), r = n(7), s = n(25), a = n(24), l = function (e, t, n) {
            var c, u, d, p, f = e & l.F, h = e & l.G, y = e & l.S, g = e & l.P, m = e & l.B,
                v = h ? i : y ? i[t] || (i[t] = {}) : (i[t] || {}).prototype, x = h ? o : o[t] || (o[t] = {}),
                w = x.prototype || (x.prototype = {});
            for (c in h && (n = t), n) d = ((u = !f && v && void 0 !== v[c]) ? v : n)[c], p = m && u ? a(d, i) : g && "function" == typeof d ? a(Function.call, d) : d, v && s(v, c, d, e & l.U), x[c] != d && r(x, c, p), g && w[c] != d && (w[c] = d)
        };
        i.core = o, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
    }, function (e, t) {
        e.exports = !1
    }, function (e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }, r = i(n(16)), s = i(n(8));
        t.default = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if ("undefined" == typeof document) throw new Error("`feather.replace()` only works in a browser environment.");
            var t = document.querySelectorAll("[data-feather]");
            Array.from(t).forEach(function (t) {
                return function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = function (e) {
                        return Array.from(e.attributes).reduce(function (e, t) {
                            return e[t.name] = t.value, e
                        }, {})
                    }(e), i = n["data-feather"];
                    delete n["data-feather"];
                    var a = s.default[i].toSvg(o({}, t, n, {class: (0, r.default)(t.class, n.class)})),
                        l = (new DOMParser).parseFromString(a, "image/svg+xml").querySelector("svg");
                    e.parentNode.replaceChild(l, e)
                }(t, e)
            })
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i, o = (i = n(8)) && i.__esModule ? i : {default: i};
        t.default = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."), !e) throw new Error("The required `key` (icon name) parameter is missing.");
            if (!o.default[e]) throw new Error("No icon matching '" + e + "'. See the complete list of icons at https://feathericons.com");
            return o.default[e].toSvg(t)
        }
    }, function (e) {
        e.exports = {
            activity: ["pulse", "health", "action", "motion"],
            airplay: ["stream", "cast", "mirroring"],
            "alert-circle": ["warning"],
            "alert-octagon": ["warning"],
            "alert-triangle": ["warning"],
            "at-sign": ["mention"],
            award: ["achievement", "badge"],
            aperture: ["camera", "photo"],
            bell: ["alarm", "notification"],
            "bell-off": ["alarm", "notification", "silent"],
            bluetooth: ["wireless"],
            "book-open": ["read"],
            book: ["read", "dictionary", "booklet", "magazine"],
            bookmark: ["read", "clip", "marker", "tag"],
            briefcase: ["work", "bag", "baggage", "folder"],
            clipboard: ["copy"],
            clock: ["time", "watch", "alarm"],
            "cloud-drizzle": ["weather", "shower"],
            "cloud-lightning": ["weather", "bolt"],
            "cloud-rain": ["weather"],
            "cloud-snow": ["weather", "blizzard"],
            cloud: ["weather"],
            codepen: ["logo"],
            coffee: ["drink", "cup", "mug", "tea", "cafe", "hot", "beverage"],
            command: ["keyboard", "cmd"],
            compass: ["navigation", "safari", "travel"],
            copy: ["clone", "duplicate"],
            "corner-down-left": ["arrow"],
            "corner-down-right": ["arrow"],
            "corner-left-down": ["arrow"],
            "corner-left-up": ["arrow"],
            "corner-right-down": ["arrow"],
            "corner-right-up": ["arrow"],
            "corner-up-left": ["arrow"],
            "corner-up-right": ["arrow"],
            "credit-card": ["purchase", "payment", "cc"],
            crop: ["photo", "image"],
            crosshair: ["aim", "target"],
            database: ["storage"],
            delete: ["remove"],
            disc: ["album", "cd", "dvd", "music"],
            "dollar-sign": ["currency", "money", "payment"],
            droplet: ["water"],
            edit: ["pencil", "change"],
            "edit-2": ["pencil", "change"],
            "edit-3": ["pencil", "change"],
            eye: ["view", "watch"],
            "eye-off": ["view", "watch"],
            "external-link": ["outbound"],
            facebook: ["logo"],
            "fast-forward": ["music"],
            film: ["movie", "video"],
            "folder-minus": ["directory"],
            "folder-plus": ["directory"],
            folder: ["directory"],
            gift: ["present", "box", "birthday", "party"],
            "git-branch": ["code", "version control"],
            "git-commit": ["code", "version control"],
            "git-merge": ["code", "version control"],
            "git-pull-request": ["code", "version control"],
            github: ["logo", "version control"],
            gitlab: ["logo", "version control"],
            global: ["world", "browser", "language", "translate"],
            "hard-drive": ["computer", "server"],
            hash: ["hashtag", "number", "pound"],
            headphones: ["music", "audio"],
            heart: ["like", "love"],
            "help-circle": ["question mark"],
            home: ["house"],
            image: ["picture"],
            inbox: ["email"],
            instagram: ["logo", "camera"],
            "life-bouy": ["help", "life ring", "support"],
            linkedin: ["logo"],
            lock: ["security", "password"],
            "log-in": ["sign in", "arrow"],
            "log-out": ["sign out", "arrow"],
            mail: ["email"],
            "map-pin": ["location", "navigation", "travel", "marker"],
            map: ["location", "navigation", "travel"],
            maximize: ["fullscreen"],
            "maximize-2": ["fullscreen", "arrows"],
            menu: ["bars", "navigation", "hamburger"],
            "message-circle": ["comment", "chat"],
            "message-square": ["comment", "chat"],
            "mic-off": ["record"],
            mic: ["record"],
            minimize: ["exit fullscreen"],
            "minimize-2": ["exit fullscreen", "arrows"],
            monitor: ["tv"],
            moon: ["dark", "night"],
            "more-horizontal": ["ellipsis"],
            "more-vertical": ["ellipsis"],
            move: ["arrows"],
            navigation: ["location", "travel"],
            "navigation-2": ["location", "travel"],
            octagon: ["stop"],
            package: ["box"],
            paperclip: ["attachment"],
            pause: ["music", "stop"],
            "pause-circle": ["music", "stop"],
            play: ["music", "start"],
            "play-circle": ["music", "start"],
            plus: ["add", "new"],
            "plus-circle": ["add", "new"],
            "plus-square": ["add", "new"],
            pocket: ["logo", "save"],
            power: ["on", "off"],
            radio: ["signal"],
            rewind: ["music"],
            rss: ["feed", "subscribe"],
            save: ["floppy disk"],
            send: ["message", "mail", "paper airplane"],
            settings: ["cog", "edit", "gear", "preferences"],
            shield: ["security"],
            "shield-off": ["security"],
            "shopping-bag": ["ecommerce", "cart", "purchase", "store"],
            "shopping-cart": ["ecommerce", "cart", "purchase", "store"],
            shuffle: ["music"],
            "skip-back": ["music"],
            "skip-forward": ["music"],
            slash: ["ban", "no"],
            sliders: ["settings", "controls"],
            speaker: ["music"],
            star: ["bookmark", "favorite", "like"],
            sun: ["brightness", "weather", "light"],
            sunrise: ["weather"],
            sunset: ["weather"],
            tag: ["label"],
            target: ["bullseye"],
            terminal: ["code", "command line"],
            "thumbs-down": ["dislike", "bad"],
            "thumbs-up": ["like", "good"],
            "toggle-left": ["on", "off", "switch"],
            "toggle-right": ["on", "off", "switch"],
            trash: ["garbage", "delete", "remove"],
            "trash-2": ["garbage", "delete", "remove"],
            triangle: ["delta"],
            truck: ["delivery", "van", "shipping"],
            twitter: ["logo"],
            umbrella: ["rain", "weather"],
            "video-off": ["camera", "movie", "film"],
            video: ["camera", "movie", "film"],
            voicemail: ["phone"],
            volume: ["music", "sound", "mute"],
            "volume-1": ["music", "sound"],
            "volume-2": ["music", "sound"],
            "volume-x": ["music", "sound", "mute"],
            watch: ["clock", "time"],
            wind: ["weather", "air"],
            "x-circle": ["cancel", "close", "delete", "remove", "times"],
            "x-square": ["cancel", "close", "delete", "remove", "times"],
            x: ["cancel", "close", "delete", "remove", "times"],
            youtube: ["logo", "video", "play"],
            "zap-off": ["flash", "camera", "lightning"],
            zap: ["flash", "camera", "lightning"]
        }
    }, function (e) {
        e.exports = {
            activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
            airplay: '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
            "alert-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line>',
            "alert-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line>',
            "alert-triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12" y2="17"></line>',
            "align-center": '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
            "align-justify": '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
            "align-left": '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
            "align-right": '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
            anchor: '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
            aperture: '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
            archive: '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
            "arrow-down-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
            "arrow-down-left": '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
            "arrow-down-right": '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
            "arrow-down": '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
            "arrow-left-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
            "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
            "arrow-right-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
            "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
            "arrow-up-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
            "arrow-up-left": '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
            "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
            "arrow-up": '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
            "at-sign": '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
            award: '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
            "bar-chart-2": '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
            "bar-chart": '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
            "battery-charging": '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
            battery: '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
            "bell-off": '<path d="M8.56 2.9A7 7 0 0 1 19 9v4m-2 4H2a3 3 0 0 0 3-3V9a7 7 0 0 1 .78-3.22M13.73 21a2 2 0 0 1-3.46 0"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
            bell: '<path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>',
            bluetooth: '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
            bold: '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
            "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
            book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
            bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
            box: '<path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path><polyline points="2.32 6.16 12 11 21.68 6.16"></polyline><line x1="12" y1="22.76" x2="12" y2="11"></line>',
            briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
            calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
            "camera-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
            camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
            cast: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2" y2="20"></line>',
            "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
            "check-square": '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
            check: '<polyline points="20 6 9 17 4 12"></polyline>',
            "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>',
            "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>',
            "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>',
            "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>',
            "chevrons-down": '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
            "chevrons-left": '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
            "chevrons-right": '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
            "chevrons-up": '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
            chrome: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
            circle: '<circle cx="12" cy="12" r="10"></circle>',
            clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
            clock: '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
            "cloud-drizzle": '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
            "cloud-lightning": '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
            "cloud-off": '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
            "cloud-rain": '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
            "cloud-snow": '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="8" y1="20" x2="8" y2="20"></line><line x1="12" y1="18" x2="12" y2="18"></line><line x1="12" y1="22" x2="12" y2="22"></line><line x1="16" y1="16" x2="16" y2="16"></line><line x1="16" y1="20" x2="16" y2="20"></line>',
            cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
            code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
            codepen: '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
            coffee: '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
            command: '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
            compass: '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
            copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
            "corner-down-left": '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
            "corner-down-right": '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
            "corner-left-down": '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
            "corner-left-up": '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
            "corner-right-down": '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
            "corner-right-up": '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
            "corner-up-left": '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
            "corner-up-right": '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
            cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
            "credit-card": '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
            crop: '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
            crosshair: '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
            database: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
            delete: '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
            disc: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
            "dollar-sign": '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
            "download-cloud": '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
            download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
            droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
            "edit-2": '<polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>',
            "edit-3": '<polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon><line x1="3" y1="22" x2="21" y2="22"></line>',
            edit: '<path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>',
            "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
            "eye-off": '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
            eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
            facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
            "fast-forward": '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
            feather: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
            "file-minus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
            "file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
            "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
            file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
            film: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
            filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
            flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
            "folder-minus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
            "folder-plus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
            folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
            gift: '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
            "git-branch": '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
            "git-commit": '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
            "git-merge": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
            "git-pull-request": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
            github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
            gitlab: '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
            globe: '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
            grid: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
            "hard-drive": '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6" y2="16"></line><line x1="10" y1="16" x2="10" y2="16"></line>',
            hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
            headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
            heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
            "help-circle": '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line>',
            home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
            image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
            inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
            info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line>',
            instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>',
            italic: '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
            layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
            layout: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
            "life-buoy": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
            "link-2": '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
            link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
            linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
            list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line>',
            loader: '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
            lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
            "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
            "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
            mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
            "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
            map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
            "maximize-2": '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
            maximize: '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
            menu: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
            "message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
            "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
            "mic-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
            mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
            "minimize-2": '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
            minimize: '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
            "minus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
            "minus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
            minus: '<line x1="5" y1="12" x2="19" y2="12"></line>',
            monitor: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
            moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
            "more-horizontal": '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
            "more-vertical": '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
            move: '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
            music: '<path d="M9 17H5a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm12-2h-4a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z"></path><polyline points="9 17 9 5 21 3 21 15"></polyline>',
            "navigation-2": '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
            navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
            octagon: '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
            package: '<path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path><polyline points="2.32 6.16 12 11 21.68 6.16"></polyline><line x1="12" y1="22.76" x2="12" y2="11"></line><line x1="7" y1="3.5" x2="17" y2="8.5"></line>',
            paperclip: '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
            "pause-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
            pause: '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
            percent: '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
            "phone-call": '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
            "phone-forwarded": '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
            "phone-incoming": '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
            "phone-missed": '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
            "phone-off": '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
            "phone-outgoing": '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
            phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
            "pie-chart": '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
            "play-circle": '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
            play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
            "plus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
            "plus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
            plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
            pocket: '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
            power: '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
            printer: '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
            radio: '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
            "refresh-ccw": '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
            "refresh-cw": '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
            repeat: '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
            rewind: '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
            "rotate-ccw": '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
            "rotate-cw": '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
            rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
            save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
            scissors: '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
            search: '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
            send: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
            server: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6"></line><line x1="6" y1="18" x2="6" y2="18"></line>',
            settings: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
            "share-2": '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
            share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
            "shield-off": '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
            shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
            "shopping-bag": '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
            "shopping-cart": '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
            shuffle: '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
            sidebar: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
            "skip-back": '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
            "skip-forward": '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
            slack: '<path d="M22.08 9C19.81 1.41 16.54-.35 9 1.92S-.35 7.46 1.92 15 7.46 24.35 15 22.08 24.35 16.54 22.08 9z"></path><line x1="12.57" y1="5.99" x2="16.15" y2="16.39"></line><line x1="7.85" y1="7.61" x2="11.43" y2="18.01"></line><line x1="16.39" y1="7.85" x2="5.99" y2="11.43"></line><line x1="18.01" y1="12.57" x2="7.61" y2="16.15"></line>',
            slash: '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
            sliders: '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
            smartphone: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line>',
            speaker: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12" y2="6"></line>',
            square: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
            star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
            "stop-circle": '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
            sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
            sunrise: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
            sunset: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
            tablet: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2" transform="rotate(180 12 12)"></rect><line x1="12" y1="18" x2="12" y2="18"></line>',
            tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7" y2="7"></line>',
            target: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
            terminal: '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
            thermometer: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
            "thumbs-down": '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
            "thumbs-up": '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
            "toggle-left": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
            "toggle-right": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
            "trash-2": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
            trash: '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
            "trending-down": '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
            "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
            triangle: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
            truck: '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
            tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
            twitter: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
            type: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
            umbrella: '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
            underline: '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
            unlock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
            "upload-cloud": '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
            upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
            "user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
            "user-minus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
            "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
            "user-x": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
            user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
            users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
            "video-off": '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
            video: '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
            voicemail: '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
            "volume-1": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
            "volume-2": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
            "volume-x": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
            volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
            watch: '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
            "wifi-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12" y2="20"></line>',
            wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12" y2="20"></line>',
            wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
            "x-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
            "x-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
            x: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
            youtube: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
            "zap-off": '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
            zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
            "zoom-in": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
            "zoom-out": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'
        }
    }, function (e) {
        e.exports = {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": 2,
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
        }
    }, function (e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }, r = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(), s = i(n(16)), a = i(n(34)), l = function () {
            function e(t, n) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.name = t, this.contents = n, this.tags = i, this.attrs = o({}, a.default, {class: "feather feather-" + t})
            }

            return r(e, [{
                key: "toSvg", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return "<svg " + function (e) {
                        return Object.keys(e).map(function (t) {
                            return t + '="' + e[t] + '"'
                        }).join(" ")
                    }(o({}, this.attrs, e, {class: (0, s.default)(this.attrs.class, e.class)})) + ">" + this.contents + "</svg>"
                }
            }, {
                key: "toString", value: function () {
                    return this.contents
                }
            }]), e
        }();
        t.default = l
    }, function (e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var o = i(n(8)), r = i(n(31)), s = i(n(30));
        e.exports = {icons: o.default, toSvg: r.default, replace: s.default}
    }, function (e, t, n) {
        var i = n(0)("iterator"), o = !1;
        try {
            var r = [7][i]();
            r.return = function () {
                o = !0
            }, Array.from(r, function () {
                throw 2
            })
        } catch (e) {
        }
        e.exports = function (e, t) {
            if (!t && !o) return !1;
            var n = !1;
            try {
                var r = [7], s = r[i]();
                s.next = function () {
                    return {done: n = !0}
                }, r[i] = function () {
                    return s
                }, e(r)
            } catch (e) {
            }
            return n
        }
    }, function (e, t, n) {
        var i = n(22), o = n(0)("toStringTag"), r = "Arguments" == i(function () {
            return arguments
        }());
        e.exports = function (e) {
            var t, n, s;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
                try {
                    return e[t]
                } catch (e) {
                }
            }(t = Object(e), o)) ? n : r ? i(t) : "Object" == (s = i(t)) && "function" == typeof t.callee ? "Arguments" : s
        }
    }, function (e, t, n) {
        var i = n(38), o = n(0)("iterator"), r = n(10);
        e.exports = n(2).getIteratorMethod = function (e) {
            if (void 0 != e) return e[o] || e["@@iterator"] || r[i(e)]
        }
    }, function (e, t, n) {
        "use strict";
        var i = n(6), o = n(12);
        e.exports = function (e, t, n) {
            t in e ? i.f(e, t, o(0, n)) : e[t] = n
        }
    }, function (e, t, n) {
        var i = n(10), o = n(0)("iterator"), r = Array.prototype;
        e.exports = function (e) {
            return void 0 !== e && (i.Array === e || r[o] === e)
        }
    }, function (e, t, n) {
        var i = n(5);
        e.exports = function (e, t, n, o) {
            try {
                return o ? t(i(n)[0], n[1]) : t(n)
            } catch (t) {
                var r = e.return;
                throw void 0 !== r && i(r.call(e)), t
            }
        }
    }, function (e, t, n) {
        "use strict";
        var i = n(24), o = n(28), r = n(17), s = n(42), a = n(41), l = n(21), c = n(40), u = n(39);
        o(o.S + o.F * !n(37)(function (e) {
            Array.from(e)
        }), "Array", {
            from: function (e) {
                var t, n, o, d, p = r(e), f = "function" == typeof this ? this : Array, h = arguments.length,
                    y = h > 1 ? arguments[1] : void 0, g = void 0 !== y, m = 0, v = u(p);
                if (g && (y = i(y, h > 2 ? arguments[2] : void 0, 2)), void 0 == v || f == Array && a(v)) for (n = new f(t = l(p.length)); t > m; m++) c(n, m, g ? y(p[m], m) : p[m]); else for (d = v.call(p), n = new f; !(o = d.next()).done; m++) c(n, m, g ? s(d, y, [o.value, m], !0) : o.value);
                return n.length = m, n
            }
        })
    }, function (e, t, n) {
        var i = n(3), o = n(17), r = n(9)("IE_PROTO"), s = Object.prototype;
        e.exports = Object.getPrototypeOf || function (e) {
            return e = o(e), i(e, r) ? e[r] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
        }
    }, function (e, t, n) {
        var i = n(1).document;
        e.exports = i && i.documentElement
    }, function (e, t, n) {
        var i = n(15), o = Math.max, r = Math.min;
        e.exports = function (e, t) {
            return (e = i(e)) < 0 ? o(e + t, 0) : r(e, t)
        }
    }, function (e, t, n) {
        var i = n(23), o = n(21), r = n(46);
        e.exports = function (e) {
            return function (t, n, s) {
                var a, l = i(t), c = o(l.length), u = r(s, c);
                if (e && n != n) {
                    for (; c > u;) if ((a = l[u++]) != a) return !0
                } else for (; c > u; u++) if ((e || u in l) && l[u] === n) return e || u || 0;
                return !e && -1
            }
        }
    }, function (e, t, n) {
        var i = n(22);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
            return "String" == i(e) ? e.split("") : Object(e)
        }
    }, function (e, t, n) {
        var i = n(3), o = n(23), r = n(47)(!1), s = n(9)("IE_PROTO");
        e.exports = function (e, t) {
            var n, a = o(e), l = 0, c = [];
            for (n in a) n != s && i(a, n) && c.push(n);
            for (; t.length > l;) i(a, n = t[l++]) && (~r(c, n) || c.push(n));
            return c
        }
    }, function (e, t, n) {
        var i = n(49), o = n(19);
        e.exports = Object.keys || function (e) {
            return i(e, o)
        }
    }, function (e, t, n) {
        var i = n(6), o = n(5), r = n(50);
        e.exports = n(4) ? Object.defineProperties : function (e, t) {
            o(e);
            for (var n, s = r(t), a = s.length, l = 0; a > l;) i.f(e, n = s[l++], t[n]);
            return e
        }
    }, function (e, t, n) {
        var i = n(5), o = n(51), r = n(19), s = n(9)("IE_PROTO"), a = function () {
        }, l = function () {
            var e, t = n(26)("iframe"), i = r.length;
            for (t.style.display = "none", n(45).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; i--;) delete l.prototype[r[i]];
            return l()
        };
        e.exports = Object.create || function (e, t) {
            var n;
            return null !== e ? (a.prototype = i(e), n = new a, a.prototype = null, n[s] = e) : n = l(), void 0 === t ? n : o(n, t)
        }
    }, function (e, t, n) {
        "use strict";
        var i = n(52), o = n(12), r = n(18), s = {};
        n(7)(s, n(0)("iterator"), function () {
            return this
        }), e.exports = function (e, t, n) {
            e.prototype = i(s, {next: o(1, n)}), r(e, t + " Iterator")
        }
    }, function (e, t) {
        e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    }, function (e, t, n) {
        var i = n(13);
        e.exports = function (e, t) {
            if (!i(e)) return e;
            var n, o;
            if (t && "function" == typeof (n = e.toString) && !i(o = n.call(e))) return o;
            if ("function" == typeof (n = e.valueOf) && !i(o = n.call(e))) return o;
            if (!t && "function" == typeof (n = e.toString) && !i(o = n.call(e))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function (e, t, n) {
        e.exports = !n(4) && !n(27)(function () {
            return 7 != Object.defineProperty(n(26)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (e, t, n) {
        "use strict";
        var i = n(29), o = n(28), r = n(25), s = n(7), a = n(10), l = n(53), c = n(18), u = n(44), d = n(0)("iterator"),
            p = !([].keys && "next" in [].keys()), f = function () {
                return this
            };
        e.exports = function (e, t, n, h, y, g, m) {
            l(n, t, h);
            var v, x, w, b = function (e) {
                    if (!p && e in C) return C[e];
                    switch (e) {
                        case"keys":
                        case"values":
                            return function () {
                                return new n(this, e)
                            }
                    }
                    return function () {
                        return new n(this, e)
                    }
                }, _ = t + " Iterator", T = "values" == y, S = !1, C = e.prototype,
                k = C[d] || C["@@iterator"] || y && C[y], E = k || b(y), A = y ? T ? b("entries") : E : void 0,
                O = "Array" == t && C.entries || k;
            if (O && (w = u(O.call(new e))) !== Object.prototype && w.next && (c(w, _, !0), i || "function" == typeof w[d] || s(w, d, f)), T && k && "values" !== k.name && (S = !0, E = function () {
                return k.call(this)
            }), i && !m || !p && !S && C[d] || s(C, d, E), a[t] = E, a[_] = f, y) if (v = {
                values: T ? E : b("values"),
                keys: g ? E : b("keys"),
                entries: A
            }, m) for (x in v) x in C || r(C, x, v[x]); else o(o.P + o.F * (p || S), t, v);
            return v
        }
    }, function (e, t, n) {
        var i = n(15), o = n(14);
        e.exports = function (e) {
            return function (t, n) {
                var r, s, a = String(o(t)), l = i(n), c = a.length;
                return l < 0 || l >= c ? e ? "" : void 0 : (r = a.charCodeAt(l)) < 55296 || r > 56319 || l + 1 === c || (s = a.charCodeAt(l + 1)) < 56320 || s > 57343 ? e ? a.charAt(l) : r : e ? a.slice(l, l + 2) : s - 56320 + (r - 55296 << 10) + 65536
            }
        }
    }, function (e, t, n) {
        "use strict";
        var i = n(58)(!0);
        n(57)(String, "String", function (e) {
            this._t = String(e), this._i = 0
        }, function () {
            var e, t = this._t, n = this._i;
            return n >= t.length ? {value: void 0, done: !0} : (e = i(t, n), this._i += e.length, {value: e, done: !1})
        })
    }, function (e, t, n) {
        n(59), n(43), e.exports = n(2).Array.from
    }, function (e, t, n) {
        n(60), e.exports = n(36)
    }])
}),
//# sourceMappingURL=feather.min.js.map
    function (e) {
        "use strict";
// ie
        (navigator.userAgent.match(/MSIE/i) || navigator.userAgent.match(/Trident.*rv:11\./)) && e("body").addClass("ie");
// iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
        var t = window.navigator.userAgent || window.navigator.vendor || window.opera;
        /iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/.test(t) && e("body").addClass("touch"),
// fix z-index on ios safari
        /iPhone|iPod|iPad/.test(t) && e(document, ".modal, .aside").on("shown.bs.modal", function (t) {
            var n = e(".modal-backdrop");
            e(t.target).after(e(n))
        }),
//resize
            e(window).on("resize", function () {
                var t = e(window).width();
                t > 1200 && e(".aside-lg").modal("hide"), t > 991 && (e("#aside").modal("hide"), e(".aside-md, .aside-sm").modal("hide")), t > 768 && e(".aside-sm").modal("hide")
            }),
// mousewheel
            e(document).on("DOMMouseScroll mousewheel", function (t) {
                var n = e(".scroll-header");
                t.originalEvent.detail > 0 || t.originalEvent.wheelDelta < 0 ? n.removeClass("scroll-up").addClass("scroll-down") : n.removeClass("scroll-down").addClass("scroll-up"), n.addClass("scrolled"), 0 == e(window).scrollTop() && (n.removeClass("scroll-up scroll-down"), n.removeClass("scrolled"))
            }),
// nav
            e(document).on("click", "[data-nav] a", function (t) {
                var n, i, o, r = e(this);
                o = (i = r.parent()).parents("li"), n = i.closest("[data-nav]").find(".active"), o.addClass("active"), r.next().is("ul") && i.toggleClass("active") && t.preventDefault() || i.addClass("active"), n.not(o).not(i).removeClass("active"), r.attr("href") && "#" != r.attr("href") && e(document).trigger("Nav:changed")
            }),
// collapse
            e("#navbarCollapse").on("show.bs.collapse", function () {
                e(".scroll-header").addClass("bg-dark")
            }), e("#navbarCollapse").on("hide.bs.collapse", function () {
            e(".scroll-header").removeClass("bg-dark")
        }),
// toggleClass
            e(document).on("click", "[data-toggle-class]", function (t) {
                var n = e(this), i = n.attr("data-toggle-class"),
                    o = n.attr("data-toggle-class-target") || n.attr("data-target"), r = n.attr("data-target-closest"),
                    s = i && i.split(",") || "", a = o && o.split(",") || Array(n), l = 0;
                e.each(s, function (t, i) {
                    var o = r ? n.closest(a[1 == a.length ? 0 : l]) : e(a[1 == a.length ? 0 : l]),
                        c = o.attr("data-class"), u = s[t];
                    c != u && o.removeClass(o.attr("data-class")), o.toggleClass(s[t]), o.attr("data-class", u), l++
                }), n.toggleClass("active"), "#" == n.attr("href") && t.preventDefault()
            });
        var n = function () {
            e('[data-toggle="popover"]').popover(), e('[data-toggle="tooltip"]').tooltip(),
// fix scrollreveal in slick
                e(".slick").on("beforeChange", function (t, n, i, o) {
                    var r = e(n.$slides.get(o));
                    e(this).prev().find(".media-content").css("background-image", "url(" + r.attr("data-bg") + ")")
                }),
// init the plugin
                e(document).find("[data-plugin]").plugin(), sr.reveal(".sr .card, .sr .list-item:not(.slick-item), .sr .item, .sr .sr-item", {
                container: e(".is-fullscreen").length ? e(".is-fullscreen.layout-column").length ? "body" : "#content" : document.documentElement,
                duration: 1e3,
                beforeReveal: function (t) {
                    e(t).addClass("is-show")
                },
                afterReveal: function (t) {
                    e(t).addClass("is-shown")
                }
            }), "undefined" != typeof feather && feather.replace({
                width: 16,
                height: 16
            }), e('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
                sr.sync()
            });
// active nav item
            var t = window.location.pathname.split("/");
            t.length > 0 && (t = t[t.length - 1]), e("[data-nav]:not(.auto-nav) li.active").removeClass("active"), e("[data-nav]:not(.auto-nav) a").filter(function () {
                return t == e(this).attr("href") && "#" !== e(this).attr("href")
            }).parents("li").addClass("active"), e('[data-toggle="tab"]').filter(function () {
                return -1 != location.href.indexOf(e(this).attr("data-target") || e(this).attr("href"))
            }).trigger("click")
        };
        window.sr = ScrollReveal(), n(), e(document).on("pjaxEnd fullscreen", function () {
            e("#navbarCollapse").collapse("hide"), n()
        }), e(document).on("pjaxAddEl", function () {
            e(".sr .card, .sr .list-item:not(.slick-item), .sr .item, .sr .sr-item").css("visibility", "hidden"), "undefined" != typeof feather && feather.replace({
                width: 16,
                height: 16
            })
        })
    }(jQuery);