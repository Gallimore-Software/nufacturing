"use strict";
(self.webpackChunknufacturing = self.webpackChunknufacturing || []).push([
  [146],
  {
    4146: (d, e, n) => {
      n.r(e), n.d(e, { OrdersModule: () => l });
      var a = n(6814),
        c = n(1896),
        s = n(5879);
      const i = [
        {
          path: "",
          component: (() => {
            class t {
              static #t = (this.ɵfac = function (r) {
                return new (r || t)();
              });
              static #s = (this.ɵcmp = s.Xpm({
                type: t,
                selectors: [["app-orders"]],
                decls: 2,
                vars: 0,
                template: function (r, h) {
                  1 & r && (s.TgZ(0, "p"), s._uU(1, "orders works!"), s.qZA());
                },
              }));
            }
            return t;
          })(),
          pathMatch: "full",
        },
      ];
      let u = (() => {
          class t {
            static #t = (this.ɵfac = function (r) {
              return new (r || t)();
            });
            static #s = (this.ɵmod = s.oAB({ type: t }));
            static #r = (this.ɵinj = s.cJS({
              imports: [c.Bz.forChild(i), c.Bz],
            }));
          }
          return t;
        })(),
        l = (() => {
          class t {
            static #t = (this.ɵfac = function (r) {
              return new (r || t)();
            });
            static #s = (this.ɵmod = s.oAB({ type: t }));
            static #r = (this.ɵinj = s.cJS({ imports: [a.ez, u] }));
          }
          return t;
        })();
    },
  },
]);
