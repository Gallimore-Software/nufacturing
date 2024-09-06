"use strict";
(self.webpackChunknufacturing = self.webpackChunknufacturing || []).push([
  [910],
  {
    3910: (p, c, o) => {
      o.r(c), o.d(c, { VendorsModule: () => d });
      var i = o(6814),
        r = o(1896),
        n = o(5879);
      let a = (() => {
        class t {
          static #t = (this.ɵfac = function (s) {
            return new (s || t)();
          });
          static #n = (this.ɵcmp = n.Xpm({
            type: t,
            selectors: [["app-vendors"]],
            decls: 2,
            vars: 0,
            template: function (s, h) {
              1 & s && (n.TgZ(0, "p"), n._uU(1, "vendors works!"), n.qZA());
            },
          }));
        }
        return t;
      })();
      const u = [
        { path: "", component: a, pathMatch: "full" },
        { path: "inventory", component: a },
      ];
      let l = (() => {
          class t {
            static #t = (this.ɵfac = function (s) {
              return new (s || t)();
            });
            static #n = (this.ɵmod = n.oAB({ type: t }));
            static #s = (this.ɵinj = n.cJS({
              imports: [r.Bz.forChild(u), r.Bz],
            }));
          }
          return t;
        })(),
        d = (() => {
          class t {
            static #t = (this.ɵfac = function (s) {
              return new (s || t)();
            });
            static #n = (this.ɵmod = n.oAB({ type: t }));
            static #s = (this.ɵinj = n.cJS({ imports: [i.ez, l] }));
          }
          return t;
        })();
    },
  },
]);
