"use strict";
(self.webpackChunknufacturing = self.webpackChunknufacturing || []).push([
  [462],
  {
    6462: (h, s, c) => {
      c.r(s), c.d(s, { ReceivingModule: () => p });
      var r = c(6814),
        o = c(1896),
        n = c(5879);
      let a = (() => {
        class t {
          static #t = (this.ɵfac = function (e) {
            return new (e || t)();
          });
          static #n = (this.ɵcmp = n.Xpm({
            type: t,
            selectors: [["app-receiving"]],
            decls: 2,
            vars: 0,
            template: function (e, m) {
              1 & e && (n.TgZ(0, "p"), n._uU(1, "receiving works!"), n.qZA());
            },
          }));
        }
        return t;
      })();
      const u = [
        { path: "", component: a, pathMatch: "full" },
        { path: "receiving", component: a },
      ];
      let l = (() => {
          class t {
            static #t = (this.ɵfac = function (e) {
              return new (e || t)();
            });
            static #n = (this.ɵmod = n.oAB({ type: t }));
            static #e = (this.ɵinj = n.cJS({
              imports: [o.Bz.forChild(u), o.Bz],
            }));
          }
          return t;
        })(),
        p = (() => {
          class t {
            static #t = (this.ɵfac = function (e) {
              return new (e || t)();
            });
            static #n = (this.ɵmod = n.oAB({ type: t }));
            static #e = (this.ɵinj = n.cJS({ imports: [r.ez, l] }));
          }
          return t;
        })();
    },
  },
]);
