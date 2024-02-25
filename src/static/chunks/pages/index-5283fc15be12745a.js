(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        8273: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                CountUp: function() {
                    return i
                }
            });
            var r = function() {
                    return (r = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                        return t
                    }).apply(this, arguments)
                },
                i = function() {
                    function t(t, e, n) {
                        var i = this;
                        this.endVal = e, this.options = n, this.version = "2.8.0", this.defaults = {
                            startVal: 0,
                            decimalPlaces: 0,
                            duration: 2,
                            useEasing: !0,
                            useGrouping: !0,
                            useIndianSeparators: !1,
                            smartEasingThreshold: 999,
                            smartEasingAmount: 333,
                            separator: ",",
                            decimal: ".",
                            prefix: "",
                            suffix: "",
                            enableScrollSpy: !1,
                            scrollSpyDelay: 200,
                            scrollSpyOnce: !1
                        }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.once = !1, this.count = function(t) {
                            i.startTime || (i.startTime = t);
                            var e = t - i.startTime;
                            i.remaining = i.duration - e, i.useEasing ? i.countDown ? i.frameVal = i.startVal - i.easingFn(e, 0, i.startVal - i.endVal, i.duration) : i.frameVal = i.easingFn(e, i.startVal, i.endVal - i.startVal, i.duration) : i.frameVal = i.startVal + (i.endVal - i.startVal) * (e / i.duration);
                            var n = i.countDown ? i.frameVal < i.endVal : i.frameVal > i.endVal;
                            i.frameVal = n ? i.endVal : i.frameVal, i.frameVal = Number(i.frameVal.toFixed(i.options.decimalPlaces)), i.printValue(i.frameVal), e < i.duration ? i.rAF = requestAnimationFrame(i.count) : null !== i.finalEndVal ? i.update(i.finalEndVal) : i.options.onCompleteCallback && i.options.onCompleteCallback()
                        }, this.formatNumber = function(t) {
                            var e, n, r, s = (Math.abs(t).toFixed(i.options.decimalPlaces) + "").split(".");
                            if (e = s[0], n = s.length > 1 ? i.options.decimal + s[1] : "", i.options.useGrouping) {
                                r = "";
                                for (var o = 3, a = 0, u = 0, c = e.length; u < c; ++u) i.options.useIndianSeparators && 4 === u && (o = 2, a = 1), 0 !== u && a % o == 0 && (r = i.options.separator + r), a++, r = e[c - u - 1] + r;
                                e = r
                            }
                            return i.options.numerals && i.options.numerals.length && (e = e.replace(/[0-9]/g, function(t) {
                                return i.options.numerals[+t]
                            }), n = n.replace(/[0-9]/g, function(t) {
                                return i.options.numerals[+t]
                            })), (t < 0 ? "-" : "") + i.options.prefix + e + n + i.options.suffix
                        }, this.easeOutExpo = function(t, e, n, r) {
                            return n * (1 - Math.pow(2, -10 * t / r)) * 1024 / 1023 + e
                        }, this.options = r(r({}, this.defaults), n), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(e), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = !1), this.el = "string" == typeof t ? document.getElementById(t) : t, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, t) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
                            return i.handleScroll(i)
                        }), window.onscroll = function() {
                            window.onScrollFns.forEach(function(t) {
                                return t()
                            })
                        }, this.handleScroll(this)))
                    }
                    return t.prototype.handleScroll = function(t) {
                        if (t && window && !t.once) {
                            var e = window.innerHeight + window.scrollY,
                                n = t.el.getBoundingClientRect(),
                                r = n.top + window.pageYOffset,
                                i = n.top + n.height + window.pageYOffset;
                            i < e && i > window.scrollY && t.paused ? (t.paused = !1, setTimeout(function() {
                                return t.start()
                            }, t.options.scrollSpyDelay), t.options.scrollSpyOnce && (t.once = !0)) : (window.scrollY > i || r > e) && !t.paused && t.reset()
                        }
                    }, t.prototype.determineDirectionAndSmartEasing = function() {
                        var t = this.finalEndVal ? this.finalEndVal : this.endVal;
                        if (this.countDown = this.startVal > t, Math.abs(t - this.startVal) > this.options.smartEasingThreshold && this.options.useEasing) {
                            this.finalEndVal = t;
                            var e = this.countDown ? 1 : -1;
                            this.endVal = t + e * this.options.smartEasingAmount, this.duration = this.duration / 2
                        } else this.endVal = t, this.finalEndVal = null;
                        null !== this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing
                    }, t.prototype.start = function(t) {
                        this.error || (this.options.onStartCallback && this.options.onStartCallback(), t && (this.options.onCompleteCallback = t), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal))
                    }, t.prototype.pauseResume = function() {
                        this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused
                    }, t.prototype.reset = function() {
                        cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal)
                    }, t.prototype.update = function(t) {
                        cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count))
                    }, t.prototype.printValue = function(t) {
                        var e;
                        if (this.el) {
                            var n = this.formattingFn(t);
                            (null === (e = this.options.plugin) || void 0 === e ? void 0 : e.render) ? this.options.plugin.render(this.el, n): "INPUT" === this.el.tagName ? this.el.value = n : "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = n : this.el.innerHTML = n
                        }
                    }, t.prototype.ensureNumber = function(t) {
                        return "number" == typeof t && !isNaN(t)
                    }, t.prototype.validateValue = function(t) {
                        var e = Number(t);
                        return this.ensureNumber(e) ? e : (this.error = "[CountUp] invalid start or end value: ".concat(t), null)
                    }, t.prototype.resetDuration = function() {
                        this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration
                    }, t
                }()
        },
        8312: function(t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(5361)
            }])
        },
        5361: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return D
                }
            });
            var r = n(5893),
                i = n(7294),
                s = n(9289),
                o = n(7037),
                a = n(7506),
                u = n(4139),
                c = class extends a.l {
                    constructor(t, e) {
                        super(), this.#t = void 0, this.#e = t, this.setOptions(e), this.bindMethods(), this.#n()
                    }#
                    e;#
                    t;#
                    r;#
                    i;
                    bindMethods() {
                        this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                    }
                    setOptions(t) {
                        let e = this.options;
                        this.options = this.#e.defaultMutationOptions(t), (0, u.VS)(e, this.options) || this.#e.getMutationCache().notify({
                            type: "observerOptionsUpdated",
                            mutation: this.#r,
                            observer: this
                        }), this.#r ? .setOptions(this.options), e ? .mutationKey && this.options.mutationKey && (0, u.Ym)(e.mutationKey) !== (0, u.Ym)(this.options.mutationKey) && this.reset()
                    }
                    onUnsubscribe() {
                        this.hasListeners() || this.#r ? .removeObserver(this)
                    }
                    onMutationUpdate(t) {
                        this.#n(), this.#s(t)
                    }
                    getCurrentResult() {
                        return this.#t
                    }
                    reset() {
                        this.#r ? .removeObserver(this), this.#r = void 0, this.#n(), this.#s()
                    }
                    mutate(t, e) {
                        return this.#i = e, this.#r ? .removeObserver(this), this.#r = this.#e.getMutationCache().build(this.#e, this.options), this.#r.addObserver(this), this.#r.execute(t)
                    }#
                    n() {
                        let t = this.#r ? .state ? ? (0, s.R)();
                        this.#t = { ...t,
                            isPending: "pending" === t.status,
                            isSuccess: "success" === t.status,
                            isError: "error" === t.status,
                            isIdle: "idle" === t.status,
                            mutate: this.mutate,
                            reset: this.reset
                        }
                    }#
                    s(t) {
                        o.V.batch(() => {
                            if (this.#i && this.hasListeners()) {
                                let e = this.#t.variables,
                                    n = this.#t.context;
                                t ? .type === "success" ? (this.#i.onSuccess ? .(t.data, e, n), this.#i.onSettled ? .(t.data, null, e, n)) : t ? .type === "error" && (this.#i.onError ? .(t.error, e, n), this.#i.onSettled ? .(void 0, t.error, e, n))
                            }
                            this.listeners.forEach(t => {
                                t(this.#t)
                            })
                        })
                    }
                },
                l = n(202);

            function f(t, e) {
                var n, r;
                let s = (0, l.NL)(e),
                    [a] = i.useState(() => new c(s, t));
                i.useEffect(() => {
                    a.setOptions(t)
                }, [a, t]);
                let u = i.useSyncExternalStore(i.useCallback(t => a.subscribe(o.V.batchCalls(t)), [a]), () => a.getCurrentResult(), () => a.getCurrentResult()),
                    f = i.useCallback((t, e) => {
                        a.mutate(t, e).catch(d)
                    }, [a]);
                if (u.error && (n = a.options.throwOnError, r = [u.error], "function" == typeof n ? n(...r) : !!n)) throw u.error;
                return { ...u,
                    mutate: f,
                    mutateAsync: u.mutate
                }
            }

            function d() {}
            var h = n(7675);
            async function p(t, e) {
                let n;
                if ((n = "function" == typeof e.connector ? t._internal.connectors.setup(e.connector) : e.connector).uid === t.state.current) throw new h.wi;
                try {
                    t.setState(t => ({ ...t,
                        status: "connecting"
                    })), n.emitter.emit("message", {
                        type: "connecting"
                    });
                    let r = await n.connect({
                            chainId: e.chainId
                        }),
                        i = r.accounts;
                    return n.emitter.off("connect", t._internal.events.connect), n.emitter.on("change", t._internal.events.change), n.emitter.on("disconnect", t._internal.events.disconnect), await t.storage ? .setItem("recentConnectorId", n.id), t.setState(t => ({ ...t,
                        connections: new Map(t.connections).set(n.uid, {
                            accounts: i,
                            chainId: r.chainId,
                            connector: n
                        }),
                        current: n.uid,
                        status: "connected"
                    })), {
                        accounts: i,
                        chainId: r.chainId
                    }
                } catch (e) {
                    throw t.setState(t => ({ ...t,
                        status: t.current ? "connected" : "disconnected"
                    })), e
                }
            }
            var m = n(9931),
                g = n(7066);
            let y = () => "wagmi@2.5.5";
            class v extends g.G {
                constructor() {
                    super(...arguments), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "WagmiError"
                    })
                }
                get docsBaseUrl() {
                    return "https://wagmi.sh/react"
                }
                get version() {
                    return y()
                }
            }
            class b extends v {
                constructor() {
                    super("`useConfig` must be used within `WagmiProvider`.", {
                        docsPath: "https://wagmi.sh/react/api/WagmiProvider"
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "WagmiProviderNotFoundError"
                    })
                }
            }

            function w(t = {}) {
                let e = t.config ? ? (0, i.useContext)(m.V);
                if (!e) throw new b;
                return e
            }

            function S(t, e) {
                if (t === e) return !0;
                if (t && e && "object" == typeof t && "object" == typeof e) {
                    let n, r;
                    if (t.constructor !== e.constructor) return !1;
                    if (Array.isArray(t) && Array.isArray(e)) {
                        if ((n = t.length) !== e.length) return !1;
                        for (r = n; 0 != r--;)
                            if (!S(t[r], e[r])) return !1;
                        return !0
                    }
                    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === e.valueOf();
                    if (t.toString !== Object.prototype.toString) return t.toString() === e.toString();
                    let i = Object.keys(t);
                    if ((n = i.length) !== Object.keys(e).length) return !1;
                    for (r = n; 0 != r--;)
                        if (!Object.prototype.hasOwnProperty.call(e, i[r])) return !1;
                    for (r = n; 0 != r--;) {
                        let n = i[r];
                        if (n && !S(t[n], e[n])) return !1
                    }
                    return !0
                }
                return t != t && e != e
            }
            let O = [];

            function E(t) {
                let e = t.connectors;
                return S(O, e) ? O : (O = e, e)
            }
            async function V(t, e = {}) {
                let n;
                if (e.connector) n = e.connector;
                else {
                    let {
                        connections: e,
                        current: r
                    } = t.state, i = e.get(r);
                    n = i ? .connector
                }
                let r = t.state.connections;
                n && (await n.disconnect(), n.emitter.off("change", t._internal.events.change), n.emitter.off("disconnect", t._internal.events.disconnect), n.emitter.on("connect", t._internal.events.connect), r.delete(n.uid)), t.setState(t => {
                    if (0 === r.size) return { ...t,
                        connections: new Map,
                        current: void 0,
                        status: "disconnected"
                    };
                    let e = r.values().next().value;
                    return { ...t,
                        connections: new Map(r),
                        current: e.connector.uid
                    }
                }); {
                    let e = t.state.current;
                    if (!e) return;
                    let n = t.state.connections.get(e) ? .connector;
                    if (!n) return;
                    await t.storage ? .setItem("recentConnectorId", n.id)
                }
            }
            let j = [];

            function x(t) {
                let e = [...t.state.connections.values()];
                return "reconnecting" === t.state.status || S(j, e) ? j : (j = e, e)
            }

            function C(t = {}) {
                var e;
                let {
                    mutation: n
                } = t, r = (e = w(t), {
                    mutationFn: t => V(e, t),
                    mutationKey: ["disconnect"]
                }), {
                    mutate: s,
                    mutateAsync: o,
                    ...a
                } = f({ ...n,
                    ...r
                });
                return { ...a,
                    connectors: (function(t = {}) {
                        let e = w(t);
                        return (0, i.useSyncExternalStore)(t => (function(t, e) {
                            let {
                                onChange: n
                            } = e;
                            return t.subscribe(() => x(t), n, {
                                equalityFn: S
                            })
                        })(e, {
                            onChange: t
                        }), () => x(e), () => x(e))
                    })().map(t => t.connector),
                    disconnect: s,
                    disconnectAsync: o
                }
            }

            function R(t) {
                let e = t.state.current,
                    n = t.state.connections.get(e),
                    r = n ? .accounts,
                    i = r ? .[0],
                    s = t.chains.find(t => t.id === n ? .chainId),
                    o = t.state.status;
                switch (o) {
                    case "connected":
                        return {
                            address: i,
                            addresses: r,
                            chain: s,
                            chainId: n ? .chainId,
                            connector: n ? .connector,
                            isConnected: !0,
                            isConnecting: !1,
                            isDisconnected: !1,
                            isReconnecting: !1,
                            status: o
                        };
                    case "reconnecting":
                        return {
                            address: i,
                            addresses: r,
                            chain: s,
                            chainId: n ? .chainId,
                            connector: n ? .connector,
                            isConnected: !!i,
                            isConnecting: !1,
                            isDisconnected: !1,
                            isReconnecting: !0,
                            status: o
                        };
                    case "connecting":
                        return {
                            address: i,
                            addresses: r,
                            chain: s,
                            chainId: n ? .chainId,
                            connector: n ? .connector,
                            isConnected: !1,
                            isConnecting: !0,
                            isDisconnected: !1,
                            isReconnecting: !1,
                            status: o
                        };
                    case "disconnected":
                        return {
                            address: void 0,
                            addresses: void 0,
                            chain: void 0,
                            chainId: void 0,
                            connector: void 0,
                            isConnected: !1,
                            isConnecting: !1,
                            isDisconnected: !0,
                            isReconnecting: !1,
                            status: o
                        }
                }
            }
            var N = n(2798);
            let F = t => "object" == typeof t && !Array.isArray(t);

            function P(t = {}) {
                let e = w(t);
                return function(t, e, n = e, r = S) {
                    let s = (0, i.useRef)([]),
                        o = (0, N.useSyncExternalStoreWithSelector)(t, e, n, t => t, (t, e) => {
                            if (F(t) && F(e) && s.current.length) {
                                for (let n of s.current)
                                    if (!r(t[n], e[n])) return !1;
                                return !0
                            }
                            return r(t, e)
                        });
                    if (F(o)) {
                        let t = { ...o
                        };
                        return Object.defineProperties(t, Object.entries(t).reduce((t, [e, n]) => ({ ...t,
                            [e]: {
                                configurable: !1,
                                enumerable: !0,
                                get: () => (s.current.includes(e) || s.current.push(e), n)
                            }
                        }), {})), t
                    }
                    return o
                }(t => (function(t, e) {
                    let {
                        onChange: n
                    } = e;
                    return t.subscribe(() => R(t), n, {
                        equalityFn(t, e) {
                            let {
                                connector: n,
                                ...r
                            } = t, {
                                connector: i,
                                ...s
                            } = e;
                            return S(r, s) && n ? .id === i ? .id && n ? .uid === i ? .uid
                        }
                    })
                })(e, {
                    onChange: t
                }), () => R(e))
            }

            function _(t) {
                let {
                    name: e,
                    ...n
                } = t, {
                    connectors: s,
                    connect: o
                } = function(t = {}) {
                    let {
                        mutation: e
                    } = t, n = w(t), r = function(t = {}) {
                        let e = w(t);
                        return (0, i.useSyncExternalStore)(t => (function(t, e) {
                            let {
                                onChange: n
                            } = e;
                            return t._internal.connectors.subscribe((t, e) => {
                                n(Object.values(t), e)
                            })
                        })(e, {
                            onChange: t
                        }), () => E(e), () => E(e))
                    }({
                        config: n
                    }), {
                        mutate: s,
                        mutateAsync: o,
                        ...a
                    } = f({ ...e,
                        mutationFn: t => p(n, t),
                        mutationKey: ["connect"]
                    });
                    return (0, i.useEffect)(() => n.subscribe(({
                        status: t
                    }) => t, (t, e) => {
                        "connected" === e && "disconnected" === t && a.reset()
                    }), [n, a]), { ...a,
                        connect: s,
                        connectAsync: o,
                        connectors: r
                    }
                }(), {
                    disconnect: a
                } = C(), u = P();
                return (0, r.jsxs)("div", {
                    className: "dropdown",
                    style: {
                        width: "100%"
                    },
                    children: [(0, r.jsx)("button", {
                        "aria-expanded": "false",
                        "data-bs-toggle": "dropdown",
                        className: "btn_accent notched",
                        type: "button",
                        style: {
                            width: "100%"
                        },
                        children: e
                    }), (0, r.jsxs)("div", {
                        className: "dropdown-menu dropdown-menu-end dropdown-menu-dark connect_menu",
                        children: [s.map((t, e) => (0, r.jsx)("a", {
                            className: "dropdown-item menu_connect_item",
                            href: "#",
                            onClick: () => o({
                                connector: t
                            }),
                            children: t.name
                        }, e)), function() {
                            if (u.isConnected) return (0, r.jsx)("a", {
                                className: "dropdown-item menu_connect_item",
                                href: "#",
                                onClick: () => void(localStorage.removeItem("token"), localStorage.removeItem("expiration"), a()),
                                children: "Disconnect"
                            })
                        }()]
                    })]
                })
            }
            async function A(t) {
                return await fetch("https://gblast.xyz/users/" + t).then(t => t.json())
            }
            var I = n(7857);

            function D() {
                let [t, e] = (0, i.useState)(), n = P(), {
                    disconnect: s
                } = C();
                return (0, i.useEffect)(() => {
                    void 0 === t && n.isConnected && A(n.address).then(t => {
                        e(t)
                    }), n.isConnected || e(void 0)
                }, [n.isConnected]), (0, r.jsxs)("div", {
                    className: "res_wrap",
                    children: [(0, r.jsx)("img", {
                        src: "/IMG_3415.png",
                        className: "app_logo"
                    }), (0, r.jsxs)("div", {
                        className: "total_gbt",
                        children: [(0, r.jsx)("span", {
                            className: "lbl",
                            children: "$GBT RESERVED"
                        }), (0, r.jsx)(I.ZP, {
                            className: "gbt_num",
                            duration: 8,
                            end: 43892576,
                            separator: ","
                        })]
                    }), (0, r.jsx)("div", {
                        className: "personal_space",
                        children: void 0 !== t ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsxs)("div", {
                                className: "total_gbt",
                                children: [(0, r.jsx)("span", {
                                    className: "lbl",
                                    children: "YOUR $GBT SHARE"
                                }), (0, r.jsx)(I.ZP, {
                                    className: "gbt_num",
                                    duration: 8,
                                    end: t.tokens_amount,
                                    separator: ","
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "total_gbt",
                                children: [(0, r.jsx)("span", {
                                    className: "lbl",
                                    children: "YOUR G-BOXES"
                                }), (0, r.jsx)(I.ZP, {
                                    className: "gbt_num",
                                    duration: 3,
                                    end: t.boxes_amount,
                                    separator: ","
                                })]
                            }), (0, r.jsx)("button", {
                                className: "btn_accent notched",
                                type: "button",
                                style: {
                                    width: "100%",
                                    marginTop: "3rem"
                                },
                                onClick: () => {
                                    s()
                                },
                                children: "DISCONNECT"
                            })]
                        }) : (0, r.jsx)(_, {
                            name: "CHECK ADDRESS"
                        })
                    })]
                })
            }
        },
        7857: function(t, e, n) {
            "use strict";
            var r = n(7294),
                i = n(8273);

            function s(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function o(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(n), !0).forEach(function(e) {
                        var r, i;
                        r = e, i = n[e], (r = function(t) {
                            var e = function(t, e) {
                                if ("object" != typeof t || null === t) return t;
                                var n = t[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(t, e || "default");
                                    if ("object" != typeof r) return r;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === e ? String : Number)(t)
                            }(t, "string");
                            return "symbol" == typeof e ? e : String(e)
                        }(r)) in t ? Object.defineProperty(t, r, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[r] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    })
                }
                return t
            }

            function a() {
                return (a = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }

            function u(t, e) {
                if (null == t) return {};
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        s = Object.keys(t);
                    for (r = 0; r < s.length; r++) n = s[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < s.length; r++) n = s[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                }
                return i
            }

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var l = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? r.useLayoutEffect : r.useEffect;

            function f(t) {
                var e = r.useRef(t);
                return l(function() {
                    e.current = t
                }), r.useCallback(function() {
                    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return e.current.apply(void 0, n)
                }, [])
            }
            var d = function(t, e) {
                    var n = e.decimal,
                        r = e.decimals,
                        s = e.duration,
                        o = e.easingFn,
                        a = e.end,
                        u = e.formattingFn,
                        c = e.numerals,
                        l = e.prefix,
                        f = e.separator,
                        d = e.start,
                        h = e.suffix,
                        p = e.useEasing,
                        m = e.useGrouping,
                        g = e.useIndianSeparators,
                        y = e.enableScrollSpy,
                        v = e.scrollSpyDelay,
                        b = e.scrollSpyOnce,
                        w = e.plugin;
                    return new i.CountUp(t, a, {
                        startVal: d,
                        duration: s,
                        decimal: n,
                        decimalPlaces: r,
                        easingFn: o,
                        formattingFn: u,
                        numerals: c,
                        separator: f,
                        prefix: l,
                        suffix: h,
                        plugin: w,
                        useEasing: p,
                        useIndianSeparators: g,
                        useGrouping: m,
                        enableScrollSpy: y,
                        scrollSpyDelay: v,
                        scrollSpyOnce: b
                    })
                },
                h = ["ref", "startOnMount", "enableReinitialize", "delay", "onEnd", "onStart", "onPauseResume", "onReset", "onUpdate"],
                p = {
                    decimal: ".",
                    separator: ",",
                    delay: null,
                    prefix: "",
                    suffix: "",
                    duration: 2,
                    start: 0,
                    decimals: 0,
                    startOnMount: !0,
                    enableReinitialize: !0,
                    useEasing: !0,
                    useGrouping: !0,
                    useIndianSeparators: !1
                },
                m = function(t) {
                    var e = Object.fromEntries(Object.entries(t).filter(function(t) {
                            return void 0 !== (function(t) {
                                if (Array.isArray(t)) return t
                            }(t) || function(t, e) {
                                var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                if (null != n) {
                                    var r, i, s, o, a = [],
                                        u = !0,
                                        c = !1;
                                    try {
                                        if (s = (n = n.call(t)).next, 0 === e) {
                                            if (Object(n) !== n) return;
                                            u = !1
                                        } else
                                            for (; !(u = (r = s.call(n)).done) && (a.push(r.value), a.length !== e); u = !0);
                                    } catch (t) {
                                        c = !0, i = t
                                    } finally {
                                        try {
                                            if (!u && null != n.return && (o = n.return(), Object(o) !== o)) return
                                        } finally {
                                            if (c) throw i
                                        }
                                    }
                                    return a
                                }
                            }(t, 2) || function(t, e) {
                                if (t) {
                                    if ("string" == typeof t) return c(t, e);
                                    var n = Object.prototype.toString.call(t).slice(8, -1);
                                    if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e)
                                }
                            }(t, 2) || function() {
                                throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }())[1]
                        })),
                        n = r.useMemo(function() {
                            return o(o({}, p), e)
                        }, [t]),
                        i = n.ref,
                        s = n.startOnMount,
                        a = n.enableReinitialize,
                        l = n.delay,
                        m = n.onEnd,
                        g = n.onStart,
                        y = n.onPauseResume,
                        v = n.onReset,
                        b = n.onUpdate,
                        w = u(n, h),
                        S = r.useRef(),
                        O = r.useRef(),
                        E = r.useRef(!1),
                        V = f(function() {
                            return d("string" == typeof i ? i : i.current, w)
                        }),
                        j = f(function(t) {
                            var e = S.current;
                            if (e && !t) return e;
                            var n = V();
                            return S.current = n, n
                        }),
                        x = f(function() {
                            var t = function() {
                                return j(!0).start(function() {
                                    null == m || m({
                                        pauseResume: C,
                                        reset: R,
                                        start: F,
                                        update: N
                                    })
                                })
                            };
                            l && l > 0 ? O.current = setTimeout(t, 1e3 * l) : t(), null == g || g({
                                pauseResume: C,
                                reset: R,
                                update: N
                            })
                        }),
                        C = f(function() {
                            j().pauseResume(), null == y || y({
                                reset: R,
                                start: F,
                                update: N
                            })
                        }),
                        R = f(function() {
                            j().el && (O.current && clearTimeout(O.current), j().reset(), null == v || v({
                                pauseResume: C,
                                start: F,
                                update: N
                            }))
                        }),
                        N = f(function(t) {
                            j().update(t), null == b || b({
                                pauseResume: C,
                                reset: R,
                                start: F
                            })
                        }),
                        F = f(function() {
                            R(), x()
                        }),
                        P = f(function(t) {
                            s && (t && R(), x())
                        });
                    return r.useEffect(function() {
                        E.current ? a && P(!0) : (E.current = !0, P())
                    }, [a, E, P, l, t.start, t.suffix, t.prefix, t.duration, t.separator, t.decimals, t.decimal, t.formattingFn]), r.useEffect(function() {
                        return function() {
                            R()
                        }
                    }, [R]), {
                        start: F,
                        pauseResume: C,
                        reset: R,
                        update: N,
                        getCountUp: j
                    }
                },
                g = ["className", "redraw", "containerProps", "children", "style"];
            e.ZP = function(t) {
                var e = t.className,
                    n = t.redraw,
                    i = t.containerProps,
                    s = t.children,
                    c = t.style,
                    l = u(t, g),
                    d = r.useRef(null),
                    h = r.useRef(!1),
                    p = m(o(o({}, l), {}, {
                        ref: d,
                        startOnMount: "function" != typeof s || 0 === t.delay,
                        enableReinitialize: !1
                    })),
                    y = p.start,
                    v = p.reset,
                    b = p.update,
                    w = p.pauseResume,
                    S = p.getCountUp,
                    O = f(function() {
                        y()
                    }),
                    E = f(function(e) {
                        t.preserveValue || v(), b(e)
                    }),
                    V = f(function() {
                        if ("function" == typeof t.children && !(d.current instanceof Element)) {
                            console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');
                            return
                        }
                        S()
                    });
                r.useEffect(function() {
                    V()
                }, [V]), r.useEffect(function() {
                    h.current && E(t.end)
                }, [t.end, E]);
                var j = n && t;
                return (r.useEffect(function() {
                    n && h.current && O()
                }, [O, n, j]), r.useEffect(function() {
                    !n && h.current && O()
                }, [O, n, t.start, t.suffix, t.prefix, t.duration, t.separator, t.decimals, t.decimal, t.className, t.formattingFn]), r.useEffect(function() {
                    h.current = !0
                }, []), "function" == typeof s) ? s({
                    countUpRef: d,
                    start: y,
                    reset: v,
                    update: b,
                    pauseResume: w,
                    getCountUp: S
                }) : r.createElement("span", a({
                    className: e,
                    ref: d,
                    style: c
                }, i), void 0 !== t.start ? S().formattingFn(t.start) : "")
            }
        },
        3250: function(t, e, n) {
            "use strict";
            /**
             * @license React
             * use-sync-external-store-shim.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var r = n(7294),
                i = "function" == typeof Object.is ? Object.is : function(t, e) {
                    return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e
                },
                s = r.useState,
                o = r.useEffect,
                a = r.useLayoutEffect,
                u = r.useDebugValue;

            function c(t) {
                var e = t.getSnapshot;
                t = t.value;
                try {
                    var n = e();
                    return !i(t, n)
                } catch (t) {
                    return !0
                }
            }
            var l = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(t, e) {
                return e()
            } : function(t, e) {
                var n = e(),
                    r = s({
                        inst: {
                            value: n,
                            getSnapshot: e
                        }
                    }),
                    i = r[0].inst,
                    l = r[1];
                return a(function() {
                    i.value = n, i.getSnapshot = e, c(i) && l({
                        inst: i
                    })
                }, [t, n, e]), o(function() {
                    return c(i) && l({
                        inst: i
                    }), t(function() {
                        c(i) && l({
                            inst: i
                        })
                    })
                }, [t]), u(n), n
            };
            e.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : l
        },
        139: function(t, e, n) {
            "use strict";
            /**
             * @license React
             * use-sync-external-store-shim/with-selector.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var r = n(7294),
                i = n(1688),
                s = "function" == typeof Object.is ? Object.is : function(t, e) {
                    return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e
                },
                o = i.useSyncExternalStore,
                a = r.useRef,
                u = r.useEffect,
                c = r.useMemo,
                l = r.useDebugValue;
            e.useSyncExternalStoreWithSelector = function(t, e, n, r, i) {
                var f = a(null);
                if (null === f.current) {
                    var d = {
                        hasValue: !1,
                        value: null
                    };
                    f.current = d
                } else d = f.current;
                var h = o(t, (f = c(function() {
                    function t(t) {
                        if (!u) {
                            if (u = !0, o = t, t = r(t), void 0 !== i && d.hasValue) {
                                var e = d.value;
                                if (i(e, t)) return a = e
                            }
                            return a = t
                        }
                        if (e = a, s(o, t)) return e;
                        var n = r(t);
                        return void 0 !== i && i(e, n) ? e : (o = t, a = n)
                    }
                    var o, a, u = !1,
                        c = void 0 === n ? null : n;
                    return [function() {
                        return t(e())
                    }, null === c ? void 0 : function() {
                        return t(c())
                    }]
                }, [e, n, r, i]))[0], f[1]);
                return u(function() {
                    d.hasValue = !0, d.value = h
                }, [h]), l(h), h
            }
        },
        1688: function(t, e, n) {
            "use strict";
            t.exports = n(3250)
        },
        2798: function(t, e, n) {
            "use strict";
            t.exports = n(139)
        }
    },
    function(t) {
        t.O(0, [888, 774, 179], function() {
            return t(t.s = 8312)
        }), _N_E = t.O()
    }
]);