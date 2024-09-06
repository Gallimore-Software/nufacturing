(() => {
  "use strict";
  var e,
    v = {},
    m = {};
  function r(e) {
    var f = m[e];
    if (void 0 !== f) return f.exports;
    var t = (m[e] = { exports: {} });
    return v[e](t, t.exports, r), t.exports;
  }
  (r.m = v),
    (e = []),
    (r.O = (f, t, i, u) => {
      if (!t) {
        var a = 1 / 0;
        for (n = 0; n < e.length; n++) {
          for (var [t, i, u] = e[n], c = !0, o = 0; o < t.length; o++)
            (!1 & u || a >= u) && Object.keys(r.O).every((p) => r.O[p](t[o]))
              ? t.splice(o--, 1)
              : ((c = !1), u < a && (a = u));
          if (c) {
            e.splice(n--, 1);
            var l = i();
            void 0 !== l && (f = l);
          }
        }
        return f;
      }
      u = u || 0;
      for (var n = e.length; n > 0 && e[n - 1][2] > u; n--) e[n] = e[n - 1];
      e[n] = [t, i, u];
    }),
    (r.d = (e, f) => {
      for (var t in f)
        r.o(f, t) &&
          !r.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: f[t] });
    }),
    (r.f = {}),
    (r.e = (e) =>
      Promise.all(Object.keys(r.f).reduce((f, t) => (r.f[t](e, f), f), []))),
    (r.u = (e) =>
      e +
      "." +
      {
        146: "68344b18d1a38606",
        265: "542fc14b96dc487f",
        462: "606d15ddb0b166ec",
        574: "e92e603838d0e68f",
        629: "9fe6ab0b235ef744",
        910: "356099b5ae85f859",
      }[e] +
      ".js"),
    (r.miniCssF = (e) => {}),
    (r.o = (e, f) => Object.prototype.hasOwnProperty.call(e, f)),
    (() => {
      var e = {},
        f = "nufacturing:";
      r.l = (t, i, u, n) => {
        if (e[t]) e[t].push(i);
        else {
          var a, c;
          if (void 0 !== u)
            for (
              var o = document.getElementsByTagName("script"), l = 0;
              l < o.length;
              l++
            ) {
              var d = o[l];
              if (
                d.getAttribute("src") == t ||
                d.getAttribute("data-webpack") == f + u
              ) {
                a = d;
                break;
              }
            }
          a ||
            ((c = !0),
            ((a = document.createElement("script")).type = "module"),
            (a.charset = "utf-8"),
            (a.timeout = 120),
            r.nc && a.setAttribute("nonce", r.nc),
            a.setAttribute("data-webpack", f + u),
            (a.src = r.tu(t))),
            (e[t] = [i]);
          var s = (g, p) => {
              (a.onerror = a.onload = null), clearTimeout(b);
              var h = e[t];
              if (
                (delete e[t],
                a.parentNode && a.parentNode.removeChild(a),
                h && h.forEach((y) => y(p)),
                g)
              )
                return g(p);
            },
            b = setTimeout(
              s.bind(null, void 0, { type: "timeout", target: a }),
              12e4,
            );
          (a.onerror = s.bind(null, a.onerror)),
            (a.onload = s.bind(null, a.onload)),
            c && document.head.appendChild(a);
        }
      };
    })(),
    (r.r = (e) => {
      typeof Symbol < "u" &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e;
      r.tt = () => (
        void 0 === e &&
          ((e = { createScriptURL: (f) => f }),
          typeof trustedTypes < "u" &&
            trustedTypes.createPolicy &&
            (e = trustedTypes.createPolicy("angular#bundler", e))),
        e
      );
    })(),
    (r.tu = (e) => r.tt().createScriptURL(e)),
    (r.p = ""),
    (() => {
      var e = { 666: 0 };
      (r.f.j = (i, u) => {
        var n = r.o(e, i) ? e[i] : void 0;
        if (0 !== n)
          if (n) u.push(n[2]);
          else if (666 != i) {
            var a = new Promise((d, s) => (n = e[i] = [d, s]));
            u.push((n[2] = a));
            var c = r.p + r.u(i),
              o = new Error();
            r.l(
              c,
              (d) => {
                if (r.o(e, i) && (0 !== (n = e[i]) && (e[i] = void 0), n)) {
                  var s = d && ("load" === d.type ? "missing" : d.type),
                    b = d && d.target && d.target.src;
                  (o.message =
                    "Loading chunk " + i + " failed.\n(" + s + ": " + b + ")"),
                    (o.name = "ChunkLoadError"),
                    (o.type = s),
                    (o.request = b),
                    n[1](o);
                }
              },
              "chunk-" + i,
              i,
            );
          } else e[i] = 0;
      }),
        (r.O.j = (i) => 0 === e[i]);
      var f = (i, u) => {
          var o,
            l,
            [n, a, c] = u,
            d = 0;
          if (n.some((b) => 0 !== e[b])) {
            for (o in a) r.o(a, o) && (r.m[o] = a[o]);
            if (c) var s = c(r);
          }
          for (i && i(u); d < n.length; d++)
            r.o(e, (l = n[d])) && e[l] && e[l][0](), (e[l] = 0);
          return r.O(s);
        },
        t = (self.webpackChunknufacturing = self.webpackChunknufacturing || []);
      t.forEach(f.bind(null, 0)), (t.push = f.bind(null, t.push.bind(t)));
    })();
})();
