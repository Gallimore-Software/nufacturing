"use strict";
(self.webpackChunknufacturing = self.webpackChunknufacturing || []).push([
  [629],
  {
    9285: (J, v, s) => {
      s.r(v), s.d(v, { BomModule: () => on });
      var P = s(6814),
        B = s(6216),
        m = s(6223),
        C = s(2296),
        d = s(5195),
        p = s(9157),
        M = s(617),
        h = s(2032),
        I = s(9038),
        S = s(8525),
        x = s(3566),
        i = s(5313),
        A = s(1896),
        t = s(5879);
      let Y = (() => {
        class e {
          constructor(n) {
            (this.router = n), (this.dock = !1);
          }
          toggleDock() {
            this.dock = !this.dock;
          }
          static #t = (this.ɵfac = function (o) {
            return new (o || e)(t.Y36(A.F0));
          });
          static #e = (this.ɵcmp = t.Xpm({
            type: e,
            selectors: [["app-bom"]],
            decls: 2,
            vars: 2,
            consts: [[1, "bom"]],
            template: function (o, l) {
              1 & o &&
                (t.TgZ(0, "section", 0), t._UZ(1, "router-outlet"), t.qZA()),
                2 & o && t.ekj("expanded", l.dock);
            },
            dependencies: [A.lC],
            styles: [
              ".subnav[_ngcontent-%COMP%]{position:fixed;top:25%;right:0;width:20%;height:50vh;display:flex;justify-content:center;margin:auto;align-items:center;background-color:#92929280;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-left:1px solid #ddd;z-index:1000;overflow-y:scroll;padding:20px;box-shadow:-2px 0 5px #0003;transition:right .3s ease}.subnav.collapsed[_ngcontent-%COMP%]{right:-20%}.subnav[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{cursor:pointer;position:absolute;top:10px;left:10px}.subnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}.subnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-bottom:10px;padding:10px 20px;font-size:12px;text-transform:uppercase;color:#fff;background-color:#023f1f;border:none;border-radius:4px;transition:background-color .3s ease,box-shadow .3s ease}.subnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#303f9f}.subnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{background-color:#283593}.subnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{outline:none;box-shadow:0 0 5px #3f51b580}.subnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button.active-link[_ngcontent-%COMP%]{background-color:#1e88e5}.bom[_ngcontent-%COMP%]{margin-right:20%;padding:20px;transition:margin-right .3s ease}.bom.expanded[_ngcontent-%COMP%]{margin-right:0}mat-card[_ngcontent-%COMP%]{margin:10px;width:100%}mat-card-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:500;text-align:center;line-height:64px}mat-form-field[_ngcontent-%COMP%]{margin-bottom:15px}table[_ngcontent-%COMP%]{width:100%}th[_ngcontent-%COMP%]{text-align:left;font-weight:700}td[_ngcontent-%COMP%]{padding:8px}",
            ],
          }));
        }
        return e;
      })();
      var b = s(614),
        _ = s(3814);
      function $(e, a) {
        1 & e && (t.TgZ(0, "mat-header-cell", 19), t._uU(1, " Item "), t.qZA());
      }
      function u(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.item, " ");
        }
      }
      function K(e, a) {
        1 & e &&
          (t.TgZ(0, "mat-header-cell", 19), t._uU(1, " QTY Needed "), t.qZA());
      }
      function N(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.qtyNeeded, " kg ");
        }
      }
      function q(e, a) {
        1 & e && (t.TgZ(0, "mat-header-cell", 19), t._uU(1, " Cost "), t.qZA());
      }
      function j(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.cost, " ");
        }
      }
      function R(e, a) {
        1 & e && (t.TgZ(0, "mat-header-cell", 19), t._uU(1, " MOQ "), t.qZA());
      }
      function G(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.moq, " kg ");
        }
      }
      function z(e, a) {
        1 & e &&
          (t.TgZ(0, "mat-header-cell", 19),
          t._uU(1, " (Without) MOQ "),
          t.qZA());
      }
      function V(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.withoutMoq, " kg ");
        }
      }
      function H(e, a) {
        1 & e &&
          (t.TgZ(0, "mat-header-cell", 19),
          t._uU(1, " Cost QTY Ordered "),
          t.qZA());
      }
      function E(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.costQtyOrdered, " ");
        }
      }
      function L(e, a) {
        1 & e &&
          (t.TgZ(0, "mat-header-cell", 19),
          t._uU(1, " Cost Per Bottle "),
          t.qZA());
      }
      function X(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.costPerBottle, " ");
        }
      }
      function tt(e, a) {
        1 & e && (t.TgZ(0, "mat-header-cell"), t._uU(1, " Actions "), t.qZA());
      }
      function et(e, a) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, "mat-cell")(1, "button", 20),
            t.NdJ("click", function () {
              const r = t.CHM(n).$implicit,
                c = t.oxw();
              return t.KtG(c.editIngredient(r));
            }),
            t.TgZ(2, "mat-icon"),
            t._uU(3, "edit"),
            t.qZA()(),
            t.TgZ(4, "button", 21),
            t.NdJ("click", function () {
              const r = t.CHM(n).$implicit,
                c = t.oxw();
              return t.KtG(c.deleteIngredient(r));
            }),
            t.TgZ(5, "mat-icon"),
            t._uU(6, "delete"),
            t.qZA()()();
        }
      }
      function nt(e, a) {
        1 & e && t._UZ(0, "mat-header-row");
      }
      function at(e, a) {
        1 & e && t._UZ(0, "mat-row");
      }
      function lt(e, a) {
        1 & e && (t.TgZ(0, "mat-header-cell", 21), t._uU(1, " Item "), t.qZA());
      }
      function it(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.item, " ");
        }
      }
      function rt(e, a) {
        1 & e &&
          (t.TgZ(0, "mat-header-cell", 21), t._uU(1, " QTY Needed "), t.qZA());
      }
      function ct(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.qtyNeeded, " kg ");
        }
      }
      function mt(e, a) {
        1 & e && (t.TgZ(0, "mat-header-cell", 21), t._uU(1, " Cost "), t.qZA());
      }
      function st(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.cost, " ");
        }
      }
      function dt(e, a) {
        1 & e && (t.TgZ(0, "mat-header-cell", 21), t._uU(1, " MOQ "), t.qZA());
      }
      function ut(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.moq, " kg ");
        }
      }
      function pt(e, a) {
        1 & e &&
          (t.TgZ(0, "mat-header-cell", 21), t._uU(1, " (With) MOQ "), t.qZA());
      }
      function gt(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.withMoq, " kg ");
        }
      }
      function _t(e, a) {
        1 & e &&
          (t.TgZ(0, "mat-header-cell", 21),
          t._uU(1, " Cost QTY Ordered "),
          t.qZA());
      }
      function ft(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.costQtyOrdered, " ");
        }
      }
      function ht(e, a) {
        1 & e &&
          (t.TgZ(0, "mat-header-cell", 21),
          t._uU(1, " Cost Per Bottle "),
          t.qZA());
      }
      function Ct(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.costPerBottle, " ");
        }
      }
      function xt(e, a) {
        1 & e &&
          (t.TgZ(0, "mat-header-cell", 21),
          t._uU(1, " Max Bottle per MOQ "),
          t.qZA());
      }
      function Zt(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.maxBottlePerMoq, " ");
        }
      }
      function Tt(e, a) {
        1 & e &&
          (t.TgZ(0, "mat-header-cell", 21), t._uU(1, " MOQ in MG "), t.qZA());
      }
      function Pt(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.moqInMg, " ");
        }
      }
      function qt(e, a) {
        1 & e && (t.TgZ(0, "mat-header-cell"), t._uU(1, " Actions "), t.qZA());
      }
      function Mt(e, a) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, "mat-cell")(1, "button", 22),
            t.NdJ("click", function () {
              const r = t.CHM(n).$implicit,
                c = t.oxw();
              return t.KtG(c.editItem(r));
            }),
            t.TgZ(2, "mat-icon"),
            t._uU(3, "edit"),
            t.qZA()(),
            t.TgZ(4, "button", 23),
            t.NdJ("click", function () {
              const r = t.CHM(n).$implicit,
                c = t.oxw();
              return t.KtG(c.deleteItem(r));
            }),
            t.TgZ(5, "mat-icon"),
            t._uU(6, "delete"),
            t.qZA()()();
        }
      }
      function bt(e, a) {
        1 & e && t._UZ(0, "mat-header-row");
      }
      function Ot(e, a) {
        1 & e && t._UZ(0, "mat-row");
      }
      function wt(e, a) {
        1 & e &&
          (t.TgZ(0, "mat-header-cell"), t._uU(1, " Ingredient "), t.qZA());
      }
      function vt(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.get("name").value, " ");
        }
      }
      function Bt(e, a) {
        1 & e &&
          (t.TgZ(0, "mat-header-cell"),
          t._uU(1, " Per Capsule (mg) "),
          t.qZA());
      }
      function At(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.get("perCapsule").value, " ");
        }
      }
      function Nt(e, a) {
        1 & e &&
          (t.TgZ(0, "mat-header-cell"),
          t._uU(1, " NFG Target Capsule (mg) "),
          t.qZA());
      }
      function kt(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.get("nfgTargetCapsule").value, " ");
        }
      }
      function Qt(e, a) {
        1 & e &&
          (t.TgZ(0, "mat-header-cell"), t._uU(1, " Per Bottle "), t.qZA());
      }
      function Ut(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.get("perBottle").value, " ");
        }
      }
      function It(e, a) {
        1 & e &&
          (t.TgZ(0, "mat-header-cell"), t._uU(1, " mg/bottle "), t.qZA());
      }
      function St(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.get("mgPerBottle").value, " ");
        }
      }
      function Ft(e, a) {
        1 & e &&
          (t.TgZ(0, "mat-header-cell"), t._uU(1, " Total mg needed "), t.qZA());
      }
      function Dt(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.get("totalMgNeeded").value, " ");
        }
      }
      function Yt(e, a) {
        1 & e &&
          (t.TgZ(0, "mat-header-cell"),
          t._uU(1, " Conversion to kg "),
          t.qZA());
      }
      function Wt(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.get("conversionToKg").value, " ");
        }
      }
      function $t(e, a) {
        1 & e &&
          (t.TgZ(0, "mat-header-cell"), t._uU(1, " % of total KG "), t.qZA());
      }
      function jt(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.get("percentOfTotalKg").value, " ");
        }
      }
      function Jt(e, a) {
        1 & e &&
          (t.TgZ(0, "mat-header-cell"),
          t._uU(1, " Extra Kg of Waste (8kg) "),
          t.qZA());
      }
      function Kt(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.get("extraKgOfWaste").value, " ");
        }
      }
      function Rt(e, a) {
        1 & e && (t.TgZ(0, "mat-header-cell"), t._uU(1, " Total KG "), t.qZA());
      }
      function Gt(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.get("totalKg").value, " ");
        }
      }
      function zt(e, a) {
        1 & e &&
          (t.TgZ(0, "mat-header-cell"),
          t._uU(1, " Extra Kg of Waste (8kg) in Mg "),
          t.qZA());
      }
      function Vt(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.get("extraKgOfWasteMg").value, " ");
        }
      }
      function Ht(e, a) {
        1 & e &&
          (t.TgZ(0, "mat-header-cell"),
          t._uU(1, " Extra Mg to Bottle "),
          t.qZA());
      }
      function Et(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.get("extraMgToBottle").value, " ");
        }
      }
      function Lt(e, a) {
        1 & e &&
          (t.TgZ(0, "mat-header-cell"),
          t._uU(1, " Intentional Overages (%) "),
          t.qZA());
      }
      function Xt(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.get("intentionalOverages").value, " ");
        }
      }
      function te(e, a) {
        1 & e && (t.TgZ(0, "mat-header-cell"), t._uU(1, " Actions "), t.qZA());
      }
      function ee(e, a) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, "mat-cell")(1, "button", 27),
            t.NdJ("click", function () {
              const r = t.CHM(n).$implicit,
                c = t.oxw();
              return t.KtG(c.editIngredient(r));
            }),
            t.TgZ(2, "mat-icon"),
            t._uU(3, "edit"),
            t.qZA()(),
            t.TgZ(4, "button", 28),
            t.NdJ("click", function () {
              const r = t.CHM(n).$implicit,
                c = t.oxw();
              return t.KtG(c.deleteIngredient(r));
            }),
            t.TgZ(5, "mat-icon"),
            t._uU(6, "delete"),
            t.qZA()()();
        }
      }
      function ne(e, a) {
        1 & e && t._UZ(0, "mat-header-row");
      }
      function ae(e, a) {
        1 & e && t._UZ(0, "mat-row");
      }
      function le(e, a) {
        1 & e && (t.TgZ(0, "mat-header-cell"), t._uU(1, " Item "), t.qZA());
      }
      function ie(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.item, " ");
        }
      }
      function re(e, a) {
        1 & e &&
          (t.TgZ(0, "mat-header-cell"), t._uU(1, " QTY Needed "), t.qZA());
      }
      function ce(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.qtyNeeded, " ");
        }
      }
      function me(e, a) {
        1 & e && (t.TgZ(0, "mat-header-cell"), t._uU(1, " Cost "), t.qZA());
      }
      function se(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.cost, " ");
        }
      }
      function de(e, a) {
        1 & e &&
          (t.TgZ(0, "mat-header-cell"), t._uU(1, " Min Order QTY "), t.qZA());
      }
      function ue(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.minOrderQty, " ");
        }
      }
      function pe(e, a) {
        1 & e &&
          (t.TgZ(0, "mat-header-cell"),
          t._uU(1, " Cost QTY Ordered "),
          t.qZA());
      }
      function ge(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.costQtyOrdered, " ");
        }
      }
      function _e(e, a) {
        1 & e &&
          (t.TgZ(0, "mat-header-cell"), t._uU(1, " Cost Per Bottle "), t.qZA());
      }
      function fe(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.costPerBottle, " ");
        }
      }
      function he(e, a) {
        1 & e &&
          (t.TgZ(0, "mat-header-cell"), t._uU(1, " Cost Per Order "), t.qZA());
      }
      function Ce(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.costPerOrder, " ");
        }
      }
      function xe(e, a) {
        1 & e && (t.TgZ(0, "mat-header-cell"), t._uU(1, " Actions "), t.qZA());
      }
      function Ze(e, a) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, "mat-cell")(1, "button", 18),
            t.NdJ("click", function () {
              const r = t.CHM(n).$implicit,
                c = t.oxw();
              return t.KtG(c.editItem(r));
            }),
            t.TgZ(2, "mat-icon"),
            t._uU(3, "edit"),
            t.qZA()(),
            t.TgZ(4, "button", 19),
            t.NdJ("click", function () {
              const r = t.CHM(n).$implicit,
                c = t.oxw();
              return t.KtG(c.deleteItem(r));
            }),
            t.TgZ(5, "mat-icon"),
            t._uU(6, "delete"),
            t.qZA()()();
        }
      }
      function Te(e, a) {
        1 & e && t._UZ(0, "mat-header-row");
      }
      function Pe(e, a) {
        1 & e && t._UZ(0, "mat-row");
      }
      function Me(e, a) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, "div", 24)(1, "mat-form-field", 2)(2, "mat-label"),
            t._uU(3, "Price"),
            t.qZA(),
            t.TgZ(4, "input", 25),
            t.NdJ("input", function () {
              const r = t.CHM(n).index,
                c = t.oxw();
              return t.KtG(c.calculateScenarioRevenue(r));
            }),
            t.qZA()(),
            t.TgZ(5, "mat-form-field", 2)(6, "mat-label"),
            t._uU(7, "Sales Volume"),
            t.qZA(),
            t.TgZ(8, "input", 26),
            t.NdJ("input", function () {
              const r = t.CHM(n).index,
                c = t.oxw();
              return t.KtG(c.calculateScenarioRevenue(r));
            }),
            t.qZA()(),
            t.TgZ(9, "mat-form-field", 2)(10, "mat-label"),
            t._uU(11, "Revenue"),
            t.qZA(),
            t._UZ(12, "input", 27),
            t.qZA()();
        }
        2 & e && t.Q6J("formGroupName", a.index);
      }
      function be(e, a) {
        1 & e &&
          (t.TgZ(0, "div", 28)(1, "mat-form-field", 2)(2, "mat-label"),
          t._uU(3, "Price"),
          t.qZA(),
          t._UZ(4, "input", 4),
          t.qZA()()),
          2 & e && t.Q6J("formGroupName", a.index);
      }
      function Oe(e, a) {
        1 & e &&
          (t.TgZ(0, "div", 28)(1, "mat-form-field", 2)(2, "mat-label"),
          t._uU(3, "Sales Volume"),
          t.qZA(),
          t._UZ(4, "input", 29),
          t.qZA()()),
          2 & e && t.Q6J("formGroupName", a.index);
      }
      function ye(e, a) {
        1 & e && (t.TgZ(0, "mat-header-cell"), t._uU(1, " Price "), t.qZA());
      }
      function we(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.price, " ");
        }
      }
      function ve(e, a) {
        1 & e &&
          (t.TgZ(0, "mat-header-cell"), t._uU(1, " Sales Volume "), t.qZA());
      }
      function Be(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.salesVolume, " ");
        }
      }
      function Ae(e, a) {
        1 & e && (t.TgZ(0, "mat-header-cell"), t._uU(1, " Revenue "), t.qZA());
      }
      function Ne(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.revenue, " ");
        }
      }
      function ke(e, a) {
        1 & e && t._UZ(0, "mat-header-row");
      }
      function Qe(e, a) {
        1 & e && t._UZ(0, "mat-row");
      }
      function Ie(e, a) {
        1 & e && (t.TgZ(0, "mat-header-cell"), t._uU(1, " Margin "), t.qZA());
      }
      function Se(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.margin, " ");
        }
      }
      function Fe(e, a) {
        1 & e && (t.TgZ(0, "mat-header-cell"), t._uU(1, " Price "), t.qZA());
      }
      function De(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.price, " ");
        }
      }
      function Ye(e, a) {
        1 & e && t._UZ(0, "mat-header-row");
      }
      function We(e, a) {
        1 & e && t._UZ(0, "mat-row");
      }
      function $e(e, a) {
        1 & e && (t.TgZ(0, "mat-header-cell"), t._uU(1, " Margin "), t.qZA());
      }
      function je(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.margin, " ");
        }
      }
      function Je(e, a) {
        1 & e && (t.TgZ(0, "mat-header-cell"), t._uU(1, " Price "), t.qZA());
      }
      function Ke(e, a) {
        if ((1 & e && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", n.price, " ");
        }
      }
      function Re(e, a) {
        1 & e && t._UZ(0, "mat-header-row");
      }
      function Ge(e, a) {
        1 & e && t._UZ(0, "mat-row");
      }
      const F = function () {
        return ["margin", "price"];
      };
      function Ve(e, a) {
        1 & e && (t.TgZ(0, "th", 15), t._uU(1, " MOQ "), t.qZA());
      }
      function He(e, a) {
        if ((1 & e && (t.TgZ(0, "td", 16), t._uU(1), t.qZA()), 2 & e)) {
          const n = a.$implicit;
          t.xp6(1), t.Oqu(n.moq);
        }
      }
      function Ee(e, a) {
        1 & e && (t.TgZ(0, "th", 17), t._uU(1, "Pricing"), t.qZA());
      }
      function Le(e, a) {
        if (
          (1 & e &&
            (t.TgZ(0, "td", 16), t._uU(1), t.ALo(2, "currency"), t.qZA()),
          2 & e)
        ) {
          const n = a.$implicit;
          t.xp6(1), t.hij(" ", t.lcZ(2, 1, n.price), " ");
        }
      }
      function Xe(e, a) {
        1 & e && t._UZ(0, "tr", 18);
      }
      function tn(e, a) {
        1 & e && t._UZ(0, "tr", 19);
      }
      function en(e, a) {
        if (
          (1 & e &&
            (t.TgZ(0, "div", 5)(1, "mat-card-title", 6),
            t._uU(2, " Quote Pricing "),
            t.qZA(),
            t.TgZ(3, "table", 7),
            t.ynx(4, 8),
            t.YNc(5, Ve, 2, 0, "th", 9),
            t.YNc(6, He, 2, 1, "td", 10),
            t.BQk(),
            t.ynx(7, 11),
            t.YNc(8, Ee, 2, 0, "th", 12),
            t.YNc(9, Le, 3, 3, "td", 10),
            t.BQk(),
            t.YNc(10, Xe, 1, 0, "tr", 13),
            t.YNc(11, tn, 1, 0, "tr", 14),
            t.qZA()()),
          2 & e)
        ) {
          const n = t.oxw();
          t.xp6(3),
            t.Q6J("dataSource", n.quotePrices),
            t.xp6(7),
            t.Q6J("matHeaderRowDef", n.displayedColumns),
            t.xp6(1),
            t.Q6J("matRowDefColumns", n.displayedColumns);
        }
      }
      const nn = [
        {
          path: "",
          component: Y,
          children: [
            { path: "", redirectTo: "bom-form", pathMatch: "full" },
            {
              path: "bom-form",
              component: (() => {
                class e {
                  constructor(n, o) {
                    (this.fb = n),
                      (this.globalService = o),
                      (this.quoteForm = this.fb.group({
                        productName: ["Hangover Dog 50ct"],
                        bottlesPerMasterCase: [""],
                        capsulesPerBottle: [""],
                        bottles: [""],
                        capsulesNeededForOrder: [""],
                        setupCapsules: [2e3],
                        totalCapsulesNeeded: [""],
                      }));
                  }
                  ngOnInit() {
                    this.initializeFormValues();
                  }
                  initializeFormValues() {
                    const n = this.globalService.getOrderInfo(),
                      o = this.globalService.getMasterCartonInfo();
                    this.quoteForm.patchValue({
                      bottlesPerMasterCase: o.bottlesPerMasterCase,
                      capsulesPerBottle: n.capsulesPerBottle,
                      bottles: n.launchQty,
                    }),
                      this.updateCapsulesNeededForOrder();
                  }
                  updateCapsulesNeededForOrder() {
                    const n = this.quoteForm.get("capsulesPerBottle")?.value,
                      o = this.quoteForm.get("bottles")?.value;
                    this.quoteForm.patchValue({
                      capsulesNeededForOrder: n * o,
                    }),
                      this.updateTotalCapsulesNeeded();
                  }
                  updateTotalCapsulesNeeded() {
                    const n = this.quoteForm.get("setupCapsules")?.value,
                      o = this.quoteForm.get("capsulesNeededForOrder")?.value;
                    this.quoteForm.patchValue({ totalCapsulesNeeded: n + o });
                  }
                  onSubmit() {
                    console.log(this.quoteForm.value);
                  }
                  static #t = (this.ɵfac = function (o) {
                    return new (o || e)(t.Y36(m.qu), t.Y36(b.a));
                  });
                  static #e = (this.ɵcmp = t.Xpm({
                    type: e,
                    selectors: [["app-bom-form"]],
                    decls: 70,
                    vars: 8,
                    consts: [
                      [
                        "fxLayout",
                        "row",
                        "fxLayoutGap",
                        "20px",
                        1,
                        "container",
                      ],
                      ["fxFlex", "50%"],
                      [3, "formGroup", "ngSubmit"],
                      ["appearance", "fill"],
                      [
                        "matInput",
                        "",
                        "formControlName",
                        "productName",
                        "readonly",
                        "",
                      ],
                      [
                        "matInput",
                        "",
                        "formControlName",
                        "bottlesPerMasterCase",
                        "readonly",
                        "",
                      ],
                      [
                        "matInput",
                        "",
                        "formControlName",
                        "capsulesPerBottle",
                        "readonly",
                        "",
                      ],
                      [
                        "matInput",
                        "",
                        "formControlName",
                        "bottles",
                        "readonly",
                        "",
                      ],
                      [
                        "matInput",
                        "",
                        "formControlName",
                        "capsulesNeededForOrder",
                        "readonly",
                        "",
                      ],
                      [
                        "matInput",
                        "",
                        "formControlName",
                        "setupCapsules",
                        3,
                        "input",
                      ],
                      [
                        "matInput",
                        "",
                        "formControlName",
                        "totalCapsulesNeeded",
                        "readonly",
                        "",
                      ],
                      [
                        "mat-raised-button",
                        "",
                        "color",
                        "primary",
                        "type",
                        "submit",
                      ],
                    ],
                    template: function (o, l) {
                      if (
                        (1 & o &&
                          (t.TgZ(0, "div", 0)(1, "div", 1)(2, "mat-card")(
                            3,
                            "mat-card-title",
                          ),
                          t._uU(4, "Bill of Materials Form"),
                          t.qZA(),
                          t.TgZ(5, "mat-card-content")(6, "form", 2),
                          t.NdJ("ngSubmit", function () {
                            return l.onSubmit();
                          }),
                          t.TgZ(7, "mat-form-field", 3)(8, "mat-label"),
                          t._uU(9, "Product Name"),
                          t.qZA(),
                          t._UZ(10, "input", 4),
                          t.qZA(),
                          t.TgZ(11, "mat-form-field", 3)(12, "mat-label"),
                          t._uU(13, "Bottles per Master Case"),
                          t.qZA(),
                          t._UZ(14, "input", 5),
                          t.qZA(),
                          t.TgZ(15, "mat-form-field", 3)(16, "mat-label"),
                          t._uU(17, "Capsules per Bottle"),
                          t.qZA(),
                          t._UZ(18, "input", 6),
                          t.qZA(),
                          t.TgZ(19, "mat-form-field", 3)(20, "mat-label"),
                          t._uU(21, "Bottles"),
                          t.qZA(),
                          t._UZ(22, "input", 7),
                          t.qZA(),
                          t.TgZ(23, "mat-form-field", 3)(24, "mat-label"),
                          t._uU(25, "Capsules Needed For Order"),
                          t.qZA(),
                          t._UZ(26, "input", 8),
                          t.qZA(),
                          t.TgZ(27, "mat-form-field", 3)(28, "mat-label"),
                          t._uU(29, "Setup Capsules"),
                          t.qZA(),
                          t.TgZ(30, "input", 9),
                          t.NdJ("input", function () {
                            return l.updateTotalCapsulesNeeded();
                          }),
                          t.qZA()(),
                          t.TgZ(31, "mat-form-field", 3)(32, "mat-label"),
                          t._uU(33, "Total Capsules Needed"),
                          t.qZA(),
                          t._UZ(34, "input", 10),
                          t.qZA(),
                          t.TgZ(35, "button", 11),
                          t._uU(36, "Save"),
                          t.qZA()()()()(),
                          t.TgZ(37, "div", 1)(38, "mat-card")(
                            39,
                            "mat-card-title",
                          ),
                          t._uU(40, "Preview"),
                          t.qZA(),
                          t.TgZ(41, "mat-card-content")(42, "p")(43, "strong"),
                          t._uU(44, "Product Name:"),
                          t.qZA(),
                          t._uU(45),
                          t.qZA(),
                          t.TgZ(46, "p")(47, "strong"),
                          t._uU(48, "Bottles per Master Case:"),
                          t.qZA(),
                          t._uU(49),
                          t.qZA(),
                          t.TgZ(50, "p")(51, "strong"),
                          t._uU(52, "Capsules per Bottle:"),
                          t.qZA(),
                          t._uU(53),
                          t.qZA(),
                          t.TgZ(54, "p")(55, "strong"),
                          t._uU(56, "Bottles:"),
                          t.qZA(),
                          t._uU(57),
                          t.qZA(),
                          t.TgZ(58, "p")(59, "strong"),
                          t._uU(60, "Capsules Needed For Order:"),
                          t.qZA(),
                          t._uU(61),
                          t.qZA(),
                          t.TgZ(62, "p")(63, "strong"),
                          t._uU(64, "Setup Capsules:"),
                          t.qZA(),
                          t._uU(65),
                          t.qZA(),
                          t.TgZ(66, "p")(67, "strong"),
                          t._uU(68, "Total Capsules Needed:"),
                          t.qZA(),
                          t._uU(69),
                          t.qZA()()()()()),
                        2 & o)
                      ) {
                        let r, c, f, g, Z, O, T;
                        t.xp6(6),
                          t.Q6J("formGroup", l.quoteForm),
                          t.xp6(39),
                          t.hij(
                            " ",
                            null == (r = l.quoteForm.get("productName"))
                              ? null
                              : r.value,
                            " ",
                          ),
                          t.xp6(4),
                          t.hij(
                            " ",
                            null ==
                              (c = l.quoteForm.get("bottlesPerMasterCase"))
                              ? null
                              : c.value,
                            " ",
                          ),
                          t.xp6(4),
                          t.hij(
                            " ",
                            null == (f = l.quoteForm.get("capsulesPerBottle"))
                              ? null
                              : f.value,
                            " ",
                          ),
                          t.xp6(4),
                          t.hij(
                            " ",
                            null == (g = l.quoteForm.get("bottles"))
                              ? null
                              : g.value,
                            "",
                          ),
                          t.xp6(4),
                          t.hij(
                            " ",
                            null ==
                              (Z = l.quoteForm.get("capsulesNeededForOrder"))
                              ? null
                              : Z.value,
                            " ",
                          ),
                          t.xp6(4),
                          t.hij(
                            " ",
                            null == (O = l.quoteForm.get("setupCapsules"))
                              ? null
                              : O.value,
                            " ",
                          ),
                          t.xp6(4),
                          t.hij(
                            " ",
                            null == (T = l.quoteForm.get("totalCapsulesNeeded"))
                              ? null
                              : T.value,
                            " ",
                          );
                      }
                    },
                    dependencies: [
                      m._Y,
                      m.Fj,
                      m.JJ,
                      m.JL,
                      m.sg,
                      m.u,
                      d.a8,
                      d.dn,
                      d.n5,
                      p.KE,
                      p.hX,
                      h.Nt,
                      _.xw,
                      _.SQ,
                      _.yH,
                      C.lW,
                    ],
                    styles: [
                      ".container[_ngcontent-%COMP%]{padding:20px}header[_ngcontent-%COMP%]{margin-bottom:20px}mat-card-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:500;text-align:center;line-height:64px}mat-card[_ngcontent-%COMP%]{margin-bottom:20px}mat-form-field[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]{width:100%}@media (max-width: 768px){.container[_ngcontent-%COMP%]{flex-direction:column}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex:1 1 100%}}",
                    ],
                  }));
                }
                return e;
              })(),
            },
            {
              path: "ingredient-breakdown-without-moq",
              component: (() => {
                class e {
                  constructor(n, o) {
                    (this.fb = n),
                      (this.globalService = o),
                      (this.displayedColumns = [
                        "item",
                        "qtyNeeded",
                        "cost",
                        "moq",
                        "withoutMoq",
                        "costQtyOrdered",
                        "costPerBottle",
                        "actions",
                      ]),
                      (this.totalCostPerBottle = 0),
                      (this.breakdownForm = this.fb.group({
                        search: [""],
                        items: this.fb.array([]),
                      })),
                      (this.dataSource = new i.by(this.getItems()));
                  }
                  ngOnInit() {
                    this.breakdownForm
                      .get("search")
                      ?.valueChanges.subscribe(() => {
                        this.applyFilter();
                      }),
                      this.calculateBreakdown();
                  }
                  get items() {
                    return this.globalService.getIngredients();
                  }
                  getItems() {
                    const n = this.globalService.getIngredients(),
                      l = this.globalService.getOrderInfo().launchQty;
                    return n.map((r) => {
                      const c = this.calculateQtyNeeded(r.perCapsule),
                        f = parseFloat(r.pricePerKg.replace("$", "")),
                        g = this.calculateWithoutMoq(c);
                      return {
                        item: r.name,
                        qtyNeeded: c.toFixed(4),
                        cost: `$${f.toFixed(2)}`,
                        moq: r.moqKg,
                        withoutMoq: g,
                        costQtyOrdered: `$${(f * g).toFixed(2)}`,
                        costPerBottle: (f * g) / l,
                      };
                    });
                  }
                  calculateQtyNeeded(n) {
                    return 0.11;
                  }
                  calculateWithoutMoq(n) {
                    return Math.ceil(n);
                  }
                  calculateBreakdown() {
                    const n = this.globalService.getOrderInfo().launchQty;
                    let o = 0;
                    this.dataSource.data.forEach((l) => {
                      const f =
                          parseFloat(l.cost.replace("$", "")) * l.withoutMoq,
                        g = f / n;
                      (l.costQtyOrdered = `$${f.toFixed(2)}`),
                        (l.costPerBottle = `$${g.toFixed(4)}`),
                        (o += g);
                    }),
                      (this.totalCostPerBottle = o);
                  }
                  applyFilter(n) {
                    const o = n
                      ? n.target.value
                      : this.breakdownForm.get("search")?.value || "";
                    this.dataSource.filter = o.trim().toLowerCase();
                  }
                  onSubmit() {
                    console.log("Form Submitted", this.breakdownForm.value);
                  }
                  editIngredient(n) {
                    console.log("Edit ingredient", n);
                  }
                  deleteIngredient(n) {
                    console.log("Delete ingredient", n),
                      (this.dataSource.data = this.dataSource.data.filter(
                        (o) => o !== n,
                      )),
                      this.calculateBreakdown();
                  }
                  static #t = (this.ɵfac = function (o) {
                    return new (o || e)(t.Y36(m.qu), t.Y36(b.a));
                  });
                  static #e = (this.ɵcmp = t.Xpm({
                    type: e,
                    selectors: [["app-ingredient-breakdown-without-moq"]],
                    decls: 50,
                    vars: 7,
                    consts: [
                      [
                        "fxLayout",
                        "column",
                        "fxLayoutGap",
                        "20px",
                        1,
                        "container",
                      ],
                      [1, "search-filter-container"],
                      ["appearance", "fill"],
                      ["matInput", "", 3, "input"],
                      [1, "table-container"],
                      [
                        "mat-table",
                        "",
                        "matSort",
                        "",
                        1,
                        "mat-elevation-z8",
                        3,
                        "dataSource",
                      ],
                      ["matColumnDef", "item"],
                      ["mat-sort-header", "", 4, "matHeaderCellDef"],
                      [4, "matCellDef"],
                      ["matColumnDef", "qtyNeeded"],
                      ["matColumnDef", "cost"],
                      ["matColumnDef", "moq"],
                      ["matColumnDef", "withoutMoq"],
                      ["matColumnDef", "costQtyOrdered"],
                      ["matColumnDef", "costPerBottle"],
                      ["matColumnDef", "actions"],
                      [4, "matHeaderCellDef"],
                      [4, "matHeaderRowDef"],
                      [4, "matRowDef", "matRowDefColumns"],
                      ["mat-sort-header", ""],
                      ["mat-icon-button", "", "color", "primary", 3, "click"],
                      ["mat-icon-button", "", "color", "warn", 3, "click"],
                    ],
                    template: function (o, l) {
                      1 & o &&
                        (t.TgZ(0, "div", 0)(1, "header")(2, "h1"),
                        t._uU(3, "Ingredient Breakdown Without MOQ"),
                        t.qZA(),
                        t.TgZ(4, "p"),
                        t._uU(
                          5,
                          " Manage and review the breakdown of ingredients without MOQ considerations. ",
                        ),
                        t.qZA()(),
                        t.TgZ(6, "div", 1)(7, "mat-form-field", 2)(
                          8,
                          "mat-label",
                        ),
                        t._uU(9, "Search Ingredients"),
                        t.qZA(),
                        t.TgZ(10, "input", 3),
                        t.NdJ("input", function (c) {
                          return l.applyFilter(c);
                        }),
                        t.qZA()()(),
                        t.TgZ(11, "mat-card")(12, "mat-card-title"),
                        t._uU(13, "Ingredients List"),
                        t.qZA(),
                        t.TgZ(14, "mat-card-content")(15, "div", 4)(
                          16,
                          "table",
                          5,
                        ),
                        t.ynx(17, 6),
                        t.YNc(18, $, 2, 0, "mat-header-cell", 7),
                        t.YNc(19, u, 2, 1, "mat-cell", 8),
                        t.BQk(),
                        t.ynx(20, 9),
                        t.YNc(21, K, 2, 0, "mat-header-cell", 7),
                        t.YNc(22, N, 2, 1, "mat-cell", 8),
                        t.BQk(),
                        t.ynx(23, 10),
                        t.YNc(24, q, 2, 0, "mat-header-cell", 7),
                        t.YNc(25, j, 2, 1, "mat-cell", 8),
                        t.BQk(),
                        t.ynx(26, 11),
                        t.YNc(27, R, 2, 0, "mat-header-cell", 7),
                        t.YNc(28, G, 2, 1, "mat-cell", 8),
                        t.BQk(),
                        t.ynx(29, 12),
                        t.YNc(30, z, 2, 0, "mat-header-cell", 7),
                        t.YNc(31, V, 2, 1, "mat-cell", 8),
                        t.BQk(),
                        t.ynx(32, 13),
                        t.YNc(33, H, 2, 0, "mat-header-cell", 7),
                        t.YNc(34, E, 2, 1, "mat-cell", 8),
                        t.BQk(),
                        t.ynx(35, 14),
                        t.YNc(36, L, 2, 0, "mat-header-cell", 7),
                        t.YNc(37, X, 2, 1, "mat-cell", 8),
                        t.BQk(),
                        t.ynx(38, 15),
                        t.YNc(39, tt, 2, 0, "mat-header-cell", 16),
                        t.YNc(40, et, 7, 0, "mat-cell", 8),
                        t.BQk(),
                        t.YNc(41, nt, 1, 0, "mat-header-row", 17),
                        t.YNc(42, at, 1, 0, "mat-row", 18),
                        t.qZA()()()(),
                        t.TgZ(43, "mat-card")(44, "mat-card-title"),
                        t._uU(45, "Summary"),
                        t.qZA(),
                        t.TgZ(46, "mat-card-content")(47, "p"),
                        t._uU(48),
                        t.ALo(49, "number"),
                        t.qZA()()()()),
                        2 & o &&
                          (t.xp6(16),
                          t.Q6J("dataSource", l.dataSource),
                          t.xp6(25),
                          t.Q6J("matHeaderRowDef", l.displayedColumns),
                          t.xp6(1),
                          t.Q6J("matRowDefColumns", l.displayedColumns),
                          t.xp6(6),
                          t.hij(
                            "Total Cost Per Bottle: ",
                            t.xi3(49, 4, l.totalCostPerBottle, "1.4-4"),
                            "",
                          ));
                    },
                    dependencies: [
                      d.a8,
                      d.dn,
                      d.n5,
                      p.KE,
                      p.hX,
                      h.Nt,
                      i.BZ,
                      i.fO,
                      i.as,
                      i.w1,
                      i.Dz,
                      i.nj,
                      i.ge,
                      i.ev,
                      i.XQ,
                      i.Gk,
                      _.xw,
                      _.SQ,
                      x.YE,
                      x.nU,
                      C.RK,
                      M.Hw,
                      P.JJ,
                    ],
                    styles: [
                      ".container[_ngcontent-%COMP%]{padding:20px}header[_ngcontent-%COMP%]{margin-bottom:20px}mat-card-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:500;text-align:center;line-height:64px}mat-card[_ngcontent-%COMP%]{margin-bottom:20px}mat-form-field[_ngcontent-%COMP%]{width:100%}.search-filter-container[_ngcontent-%COMP%]{margin-bottom:20px}.table-container[_ngcontent-%COMP%]{overflow-x:auto}mat-header-cell[_ngcontent-%COMP%], mat-cell[_ngcontent-%COMP%]{padding:8px}mat-header-row[_ngcontent-%COMP%], mat-row[_ngcontent-%COMP%]{display:flex}mat-header-cell[_ngcontent-%COMP%], mat-cell[_ngcontent-%COMP%]{flex:1}.mat-elevation-z8[_ngcontent-%COMP%]{border-radius:8px}button[_ngcontent-%COMP%]{display:block;margin:20px auto 0}",
                    ],
                  }));
                }
                return e;
              })(),
            },
            {
              path: "ingredient-breakdown-with-moq",
              component: (() => {
                class e {
                  constructor(n, o) {
                    (this.fb = n),
                      (this.globalService = o),
                      (this.displayedColumns = [
                        "item",
                        "qtyNeeded",
                        "cost",
                        "moq",
                        "withMoq",
                        "costQtyOrdered",
                        "costPerBottle",
                        "maxBottlePerMoq",
                        "moqInMg",
                        "actions",
                      ]),
                      (this.totalCostPerBottle = 0),
                      (this.totalCost = 0),
                      (this.breakdownForm = this.fb.group({
                        search: [""],
                        items: this.fb.array([]),
                      })),
                      (this.dataSource = new i.by(this.getItems()));
                  }
                  ngOnInit() {
                    this.calculateBreakdown();
                  }
                  get items() {
                    return this.globalService.getIngredients();
                  }
                  getItems() {
                    return this.items.map((o) => {
                      const l = this.calculateQtyNeeded(o.perCapsule),
                        r = parseFloat(o.pricePerKg.replace("$", "")),
                        c = o.moqKg,
                        f = 1e6 * c,
                        g = Math.floor(f / l),
                        Z = r * c,
                        O = Z / this.globalService.getOrderInfo().launchQty;
                      return {
                        item: o.name,
                        qtyNeeded: l.toFixed(4),
                        cost: `$${r.toFixed(2)}`,
                        moq: o.moqKg,
                        withMoq: c,
                        costQtyOrdered: `$${Z.toFixed(2)}`,
                        costPerBottle: `$${O.toFixed(4)}`,
                        maxBottlePerMoq: g,
                        moqInMg: f,
                      };
                    });
                  }
                  calculateQtyNeeded(n) {
                    return 0.11;
                  }
                  calculateBreakdown() {
                    const n = this.globalService.getOrderInfo().launchQty;
                    let o = 0,
                      l = 0;
                    this.dataSource.data.forEach((r) => {
                      const g = parseFloat(r.cost.replace("$", "")) * r.withMoq,
                        Z = g / n;
                      (r.costQtyOrdered = `$${g.toFixed(2)}`),
                        (r.costPerBottle = `$${Z.toFixed(4)}`),
                        (o += Z),
                        (l += g);
                    }),
                      (this.totalCostPerBottle = o),
                      (this.totalCost = l);
                  }
                  applyFilter(n) {
                    this.dataSource.filter = n.target.value
                      .trim()
                      .toLowerCase();
                  }
                  editItem(n) {}
                  deleteItem(n) {
                    const o = this.dataSource.data.findIndex(
                      (l) => l.item === n.item,
                    );
                    o > -1 &&
                      (this.dataSource.data.splice(o, 1),
                      (this.dataSource = new i.by(this.dataSource.data)),
                      this.calculateBreakdown());
                  }
                  static #t = (this.ɵfac = function (o) {
                    return new (o || e)(t.Y36(m.qu), t.Y36(b.a));
                  });
                  static #e = (this.ɵcmp = t.Xpm({
                    type: e,
                    selectors: [["app-ingredient-breakdown-with-moq"]],
                    decls: 59,
                    vars: 11,
                    consts: [
                      [
                        "fxLayout",
                        "column",
                        "fxLayoutGap",
                        "20px",
                        1,
                        "container",
                      ],
                      [1, "search-filter-container"],
                      ["appearance", "fill"],
                      ["matInput", "", 3, "input"],
                      [1, "table-container"],
                      [
                        "mat-table",
                        "",
                        "matSort",
                        "",
                        1,
                        "mat-elevation-z8",
                        3,
                        "dataSource",
                      ],
                      ["matColumnDef", "item"],
                      ["mat-sort-header", "", 4, "matHeaderCellDef"],
                      [4, "matCellDef"],
                      ["matColumnDef", "qtyNeeded"],
                      ["matColumnDef", "cost"],
                      ["matColumnDef", "moq"],
                      ["matColumnDef", "withMoq"],
                      ["matColumnDef", "costQtyOrdered"],
                      ["matColumnDef", "costPerBottle"],
                      ["matColumnDef", "maxBottlePerMoq"],
                      ["matColumnDef", "moqInMg"],
                      ["matColumnDef", "actions"],
                      [4, "matHeaderCellDef"],
                      [4, "matHeaderRowDef"],
                      [4, "matRowDef", "matRowDefColumns"],
                      ["mat-sort-header", ""],
                      ["mat-icon-button", "", "color", "primary", 3, "click"],
                      ["mat-icon-button", "", "color", "warn", 3, "click"],
                    ],
                    template: function (o, l) {
                      1 & o &&
                        (t.TgZ(0, "div", 0)(1, "header")(2, "h1"),
                        t._uU(3, "Ingredient Breakdown With MOQ"),
                        t.qZA(),
                        t.TgZ(4, "p"),
                        t._uU(
                          5,
                          " Manage and review the breakdown of ingredients with MOQ considerations. ",
                        ),
                        t.qZA()(),
                        t.TgZ(6, "div", 1)(7, "mat-form-field", 2)(
                          8,
                          "mat-label",
                        ),
                        t._uU(9, "Search Ingredients"),
                        t.qZA(),
                        t.TgZ(10, "input", 3),
                        t.NdJ("input", function (c) {
                          return l.applyFilter(c);
                        }),
                        t.qZA()()(),
                        t.TgZ(11, "mat-card")(12, "mat-card-title"),
                        t._uU(13, "Ingredients List"),
                        t.qZA(),
                        t.TgZ(14, "mat-card-content")(15, "div", 4)(
                          16,
                          "table",
                          5,
                        ),
                        t.ynx(17, 6),
                        t.YNc(18, lt, 2, 0, "mat-header-cell", 7),
                        t.YNc(19, it, 2, 1, "mat-cell", 8),
                        t.BQk(),
                        t.ynx(20, 9),
                        t.YNc(21, rt, 2, 0, "mat-header-cell", 7),
                        t.YNc(22, ct, 2, 1, "mat-cell", 8),
                        t.BQk(),
                        t.ynx(23, 10),
                        t.YNc(24, mt, 2, 0, "mat-header-cell", 7),
                        t.YNc(25, st, 2, 1, "mat-cell", 8),
                        t.BQk(),
                        t.ynx(26, 11),
                        t.YNc(27, dt, 2, 0, "mat-header-cell", 7),
                        t.YNc(28, ut, 2, 1, "mat-cell", 8),
                        t.BQk(),
                        t.ynx(29, 12),
                        t.YNc(30, pt, 2, 0, "mat-header-cell", 7),
                        t.YNc(31, gt, 2, 1, "mat-cell", 8),
                        t.BQk(),
                        t.ynx(32, 13),
                        t.YNc(33, _t, 2, 0, "mat-header-cell", 7),
                        t.YNc(34, ft, 2, 1, "mat-cell", 8),
                        t.BQk(),
                        t.ynx(35, 14),
                        t.YNc(36, ht, 2, 0, "mat-header-cell", 7),
                        t.YNc(37, Ct, 2, 1, "mat-cell", 8),
                        t.BQk(),
                        t.ynx(38, 15),
                        t.YNc(39, xt, 2, 0, "mat-header-cell", 7),
                        t.YNc(40, Zt, 2, 1, "mat-cell", 8),
                        t.BQk(),
                        t.ynx(41, 16),
                        t.YNc(42, Tt, 2, 0, "mat-header-cell", 7),
                        t.YNc(43, Pt, 2, 1, "mat-cell", 8),
                        t.BQk(),
                        t.ynx(44, 17),
                        t.YNc(45, qt, 2, 0, "mat-header-cell", 18),
                        t.YNc(46, Mt, 7, 0, "mat-cell", 8),
                        t.BQk(),
                        t.YNc(47, bt, 1, 0, "mat-header-row", 19),
                        t.YNc(48, Ot, 1, 0, "mat-row", 20),
                        t.qZA()()()(),
                        t.TgZ(49, "mat-card")(50, "mat-card-title"),
                        t._uU(51, "Summary"),
                        t.qZA(),
                        t.TgZ(52, "mat-card-content")(53, "p"),
                        t._uU(54),
                        t.ALo(55, "number"),
                        t.qZA(),
                        t.TgZ(56, "p"),
                        t._uU(57),
                        t.ALo(58, "number"),
                        t.qZA()()()()),
                        2 & o &&
                          (t.xp6(16),
                          t.Q6J("dataSource", l.dataSource),
                          t.xp6(31),
                          t.Q6J("matHeaderRowDef", l.displayedColumns),
                          t.xp6(1),
                          t.Q6J("matRowDefColumns", l.displayedColumns),
                          t.xp6(6),
                          t.hij(
                            "Total Cost Per Bottle: ",
                            t.xi3(55, 5, l.totalCostPerBottle, "1.4-4"),
                            "",
                          ),
                          t.xp6(3),
                          t.hij(
                            "Total Cost: ",
                            t.xi3(58, 8, l.totalCost, "1.4-4"),
                            "",
                          ));
                    },
                    dependencies: [
                      d.a8,
                      d.dn,
                      d.n5,
                      p.KE,
                      p.hX,
                      h.Nt,
                      i.BZ,
                      i.fO,
                      i.as,
                      i.w1,
                      i.Dz,
                      i.nj,
                      i.ge,
                      i.ev,
                      i.XQ,
                      i.Gk,
                      _.xw,
                      _.SQ,
                      x.YE,
                      x.nU,
                      C.RK,
                      M.Hw,
                      P.JJ,
                    ],
                    styles: [
                      ".container[_ngcontent-%COMP%]{padding:20px}header[_ngcontent-%COMP%]{margin-bottom:20px}mat-card-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:500;text-align:center;line-height:64px}mat-card[_ngcontent-%COMP%]{margin-bottom:20px}mat-form-field[_ngcontent-%COMP%]{width:100%}.search-filter-container[_ngcontent-%COMP%]{margin-bottom:20px}.table-container[_ngcontent-%COMP%]{overflow-x:auto}mat-header-cell[_ngcontent-%COMP%], mat-cell[_ngcontent-%COMP%]{padding:8px}mat-header-row[_ngcontent-%COMP%], mat-row[_ngcontent-%COMP%]{display:flex}mat-header-cell[_ngcontent-%COMP%], mat-cell[_ngcontent-%COMP%]{flex:1}.mat-elevation-z8[_ngcontent-%COMP%]{border-radius:8px}button[_ngcontent-%COMP%]{display:block;margin:20px auto 0}",
                    ],
                  }));
                }
                return e;
              })(),
            },
            {
              path: "ingredient-calculation",
              component: (() => {
                class e {
                  constructor(n, o) {
                    (this.fb = n),
                      (this.globalService = o),
                      (this.displayedColumns = [
                        "name",
                        "perCapsule",
                        "nfgTargetCapsule",
                        "perBottle",
                        "mgPerBottle",
                        "totalMgNeeded",
                        "conversionToKg",
                        "percentOfTotalKg",
                        "extraKgOfWaste",
                        "totalKg",
                        "extraKgOfWasteMg",
                        "extraMgToBottle",
                        "intentionalOverages",
                        "actions",
                      ]),
                      (this.totalOfPowder = 0),
                      (this.totalOfFinishedCapsule = 0),
                      (this.totalKgBeforeWaste = 0),
                      (this.total = 0),
                      (this.totalKgAfterWaste = 0),
                      (this.nfgCapsuleFillRange = { min: 0, max: 0 }),
                      (this.targetWeight = 0),
                      (this.ingredientForm = this.fb.group({
                        ingredients: this.fb.array([]),
                        totalBottles: [2e3],
                        setupCapsules: [2e3],
                      })),
                      this.initIngredients();
                  }
                  ngOnInit() {
                    this.ingredientForm.valueChanges.subscribe(() => {
                      this.calculateSummary();
                    });
                  }
                  get ingredients() {
                    return this.ingredientForm.get("ingredients");
                  }
                  initIngredients() {
                    this.globalService.getIngredients().forEach((o) => {
                      this.ingredients.push(
                        this.fb.group({
                          name: [o.name],
                          perCapsule: [o.perCapsule],
                          nfgTargetCapsule: [
                            this.calculateNfgTargetCapsule(o.perCapsule),
                          ],
                          perBottle: [50],
                          mgPerBottle: [{ value: 0, disabled: !0 }],
                          totalMgNeeded: [{ value: 0, disabled: !0 }],
                          conversionToKg: [{ value: 0, disabled: !0 }],
                          percentOfTotalKg: [{ value: 0, disabled: !0 }],
                          extraKgOfWaste: [{ value: 0, disabled: !0 }],
                          totalKg: [{ value: 0, disabled: !0 }],
                          extraKgOfWasteMg: [{ value: 0, disabled: !0 }],
                          extraMgToBottle: [{ value: 0, disabled: !0 }],
                          intentionalOverages: [{ value: 0, disabled: !0 }],
                        }),
                      );
                    }),
                      this.calculateSummary();
                  }
                  calculateNfgTargetCapsule(n) {
                    return n + 0.1 * n;
                  }
                  calculateSummary() {
                    let n = 0,
                      o = 0,
                      l = 0;
                    const r =
                      this.ingredientForm.get("totalBottles")?.value || 0;
                    this.ingredients.controls.forEach((T) => {
                      const y = T.get("perCapsule")?.value,
                        D = T.get("nfgTargetCapsule")?.value,
                        k = T.get("perBottle")?.value,
                        Q = D * k,
                        w = Q * r,
                        U = w / 1e6;
                      T.patchValue(
                        {
                          mgPerBottle: this.toFixed(Q, 4),
                          totalMgNeeded: this.toFixed(w, 4),
                          conversionToKg: this.toFixed(U, 4),
                        },
                        { emitEvent: !1 },
                      ),
                        (n += U),
                        (l += y);
                    }),
                      this.ingredients.controls.forEach((T) => {
                        const y = T.get("conversionToKg")?.value || 0,
                          D = n > 0 ? (y / n) * 100 : 0,
                          k = (D / 100) * 8,
                          Q = y + k,
                          w = 1e6 * k,
                          U = T.get("mgPerBottle")?.value || 1,
                          ln = U > 0 ? w / U : 0,
                          rn = y > 0 ? (w / y) * 100 - 100 : 0;
                        T.patchValue(
                          {
                            percentOfTotalKg: this.toFixed(D, 4),
                            extraKgOfWaste: this.toFixed(k, 4),
                            totalKg: this.toFixed(Q, 4),
                            extraKgOfWasteMg: this.toFixed(w, 4),
                            extraMgToBottle: this.toFixed(ln, 4),
                            intentionalOverages: this.toFixed(rn, 4),
                          },
                          { emitEvent: !1 },
                        ),
                          (o += Q);
                      });
                    const c = l + 124,
                      f = n + o,
                      g = c + 10,
                      Z = g + (g / 100) * 3.5,
                      O = (g + Z) / 2;
                    (this.totalOfPowder = this.toFixed(l, 4)),
                      (this.totalOfFinishedCapsule = this.toFixed(c, 4)),
                      (this.totalKgBeforeWaste = this.toFixed(n, 4)),
                      (this.total = this.toFixed(o, 4)),
                      (this.totalKgAfterWaste = this.toFixed(f, 4)),
                      (this.nfgCapsuleFillRange = {
                        min: this.toFixed(g, 4),
                        max: this.toFixed(Z, 4),
                      }),
                      (this.targetWeight = this.toFixed(O, 4));
                  }
                  toFixed(n, o) {
                    return parseFloat(n.toFixed(o));
                  }
                  onSubmit() {
                    console.log("Form Submitted", this.ingredientForm.value);
                  }
                  editIngredient(n) {
                    n.get("perCapsule").enable(), n.get("perBottle").enable();
                  }
                  deleteIngredient(n) {
                    this.ingredients.removeAt(n), this.calculateSummary();
                  }
                  static #t = (this.ɵfac = function (o) {
                    return new (o || e)(t.Y36(m.qu), t.Y36(b.a));
                  });
                  static #e = (this.ɵcmp = t.Xpm({
                    type: e,
                    selectors: [["app-ingredient-calculation"]],
                    decls: 84,
                    vars: 12,
                    consts: [
                      [
                        "fxLayout",
                        "column",
                        "fxLayoutGap",
                        "20px",
                        1,
                        "container",
                      ],
                      [3, "formGroup", "ngSubmit"],
                      ["appearance", "fill"],
                      ["matInput", "", "formControlName", "totalBottles"],
                      ["matInput", "", "formControlName", "setupCapsules"],
                      [
                        "mat-raised-button",
                        "",
                        "color",
                        "primary",
                        "type",
                        "submit",
                      ],
                      [1, "table-container"],
                      ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"],
                      ["matColumnDef", "name"],
                      [4, "matHeaderCellDef"],
                      [4, "matCellDef"],
                      ["matColumnDef", "perCapsule"],
                      ["matColumnDef", "nfgTargetCapsule"],
                      ["matColumnDef", "perBottle"],
                      ["matColumnDef", "mgPerBottle"],
                      ["matColumnDef", "totalMgNeeded"],
                      ["matColumnDef", "conversionToKg"],
                      ["matColumnDef", "percentOfTotalKg"],
                      ["matColumnDef", "extraKgOfWaste"],
                      ["matColumnDef", "totalKg"],
                      ["matColumnDef", "extraKgOfWasteMg"],
                      ["matColumnDef", "extraMgToBottle"],
                      ["matColumnDef", "intentionalOverages"],
                      ["matColumnDef", "actions"],
                      [4, "matHeaderRowDef"],
                      [4, "matRowDef", "matRowDefColumns"],
                      [1, "summary-section"],
                      ["mat-icon-button", "", "color", "primary", 3, "click"],
                      ["mat-icon-button", "", "color", "warn", 3, "click"],
                    ],
                    template: function (o, l) {
                      1 & o &&
                        (t.TgZ(0, "div", 0)(1, "mat-card")(2, "mat-card-title"),
                        t._uU(3, "Ingredient Form"),
                        t.qZA(),
                        t.TgZ(4, "mat-card-content")(5, "form", 1),
                        t.NdJ("ngSubmit", function () {
                          return l.onSubmit();
                        }),
                        t.TgZ(6, "mat-form-field", 2)(7, "mat-label"),
                        t._uU(8, "Total Bottles"),
                        t.qZA(),
                        t._UZ(9, "input", 3),
                        t.qZA(),
                        t.TgZ(10, "mat-form-field", 2)(11, "mat-label"),
                        t._uU(12, "Setup Capsules"),
                        t.qZA(),
                        t._UZ(13, "input", 4),
                        t.qZA(),
                        t.TgZ(14, "button", 5),
                        t._uU(15, "Save"),
                        t.qZA()()()(),
                        t.TgZ(16, "mat-card")(17, "mat-card-title"),
                        t._uU(18, "Ingredient Calculation"),
                        t.qZA(),
                        t.TgZ(19, "mat-card-content")(20, "div", 6)(
                          21,
                          "table",
                          7,
                        ),
                        t.ynx(22, 8),
                        t.YNc(23, wt, 2, 0, "mat-header-cell", 9),
                        t.YNc(24, vt, 2, 1, "mat-cell", 10),
                        t.BQk(),
                        t.ynx(25, 11),
                        t.YNc(26, Bt, 2, 0, "mat-header-cell", 9),
                        t.YNc(27, At, 2, 1, "mat-cell", 10),
                        t.BQk(),
                        t.ynx(28, 12),
                        t.YNc(29, Nt, 2, 0, "mat-header-cell", 9),
                        t.YNc(30, kt, 2, 1, "mat-cell", 10),
                        t.BQk(),
                        t.ynx(31, 13),
                        t.YNc(32, Qt, 2, 0, "mat-header-cell", 9),
                        t.YNc(33, Ut, 2, 1, "mat-cell", 10),
                        t.BQk(),
                        t.ynx(34, 14),
                        t.YNc(35, It, 2, 0, "mat-header-cell", 9),
                        t.YNc(36, St, 2, 1, "mat-cell", 10),
                        t.BQk(),
                        t.ynx(37, 15),
                        t.YNc(38, Ft, 2, 0, "mat-header-cell", 9),
                        t.YNc(39, Dt, 2, 1, "mat-cell", 10),
                        t.BQk(),
                        t.ynx(40, 16),
                        t.YNc(41, Yt, 2, 0, "mat-header-cell", 9),
                        t.YNc(42, Wt, 2, 1, "mat-cell", 10),
                        t.BQk(),
                        t.ynx(43, 17),
                        t.YNc(44, $t, 2, 0, "mat-header-cell", 9),
                        t.YNc(45, jt, 2, 1, "mat-cell", 10),
                        t.BQk(),
                        t.ynx(46, 18),
                        t.YNc(47, Jt, 2, 0, "mat-header-cell", 9),
                        t.YNc(48, Kt, 2, 1, "mat-cell", 10),
                        t.BQk(),
                        t.ynx(49, 19),
                        t.YNc(50, Rt, 2, 0, "mat-header-cell", 9),
                        t.YNc(51, Gt, 2, 1, "mat-cell", 10),
                        t.BQk(),
                        t.ynx(52, 20),
                        t.YNc(53, zt, 2, 0, "mat-header-cell", 9),
                        t.YNc(54, Vt, 2, 1, "mat-cell", 10),
                        t.BQk(),
                        t.ynx(55, 21),
                        t.YNc(56, Ht, 2, 0, "mat-header-cell", 9),
                        t.YNc(57, Et, 2, 1, "mat-cell", 10),
                        t.BQk(),
                        t.ynx(58, 22),
                        t.YNc(59, Lt, 2, 0, "mat-header-cell", 9),
                        t.YNc(60, Xt, 2, 1, "mat-cell", 10),
                        t.BQk(),
                        t.ynx(61, 23),
                        t.YNc(62, te, 2, 0, "mat-header-cell", 9),
                        t.YNc(63, ee, 7, 0, "mat-cell", 10),
                        t.BQk(),
                        t.YNc(64, ne, 1, 0, "mat-header-row", 24),
                        t.YNc(65, ae, 1, 0, "mat-row", 25),
                        t.qZA()()()(),
                        t.TgZ(66, "mat-card")(67, "mat-card-title"),
                        t._uU(68, "Summary"),
                        t.qZA(),
                        t.TgZ(69, "mat-card-content", 26)(70, "div"),
                        t._uU(71),
                        t.qZA(),
                        t.TgZ(72, "div"),
                        t._uU(73),
                        t.qZA(),
                        t.TgZ(74, "div"),
                        t._uU(75),
                        t.qZA(),
                        t.TgZ(76, "div"),
                        t._uU(77),
                        t.qZA(),
                        t.TgZ(78, "div"),
                        t._uU(79),
                        t.qZA(),
                        t.TgZ(80, "div"),
                        t._uU(81),
                        t.qZA(),
                        t.TgZ(82, "div"),
                        t._uU(83),
                        t.qZA()()()()),
                        2 & o &&
                          (t.xp6(5),
                          t.Q6J("formGroup", l.ingredientForm),
                          t.xp6(16),
                          t.Q6J("dataSource", l.ingredients.controls),
                          t.xp6(43),
                          t.Q6J("matHeaderRowDef", l.displayedColumns),
                          t.xp6(1),
                          t.Q6J("matRowDefColumns", l.displayedColumns),
                          t.xp6(6),
                          t.hij("Total of Powder: ", l.totalOfPowder, " mg"),
                          t.xp6(2),
                          t.hij(
                            "Total of Finished Capsule: ",
                            l.totalOfFinishedCapsule,
                            " mg",
                          ),
                          t.xp6(2),
                          t.hij(
                            "Total Kg Before Waste: ",
                            l.totalKgBeforeWaste,
                            " kg",
                          ),
                          t.xp6(2),
                          t.hij("Total: ", l.total, " kg"),
                          t.xp6(2),
                          t.hij(
                            "Total Kg After Waste: ",
                            l.totalKgAfterWaste,
                            " kg",
                          ),
                          t.xp6(2),
                          t.AsE(
                            " NFG Capsule Fill Range: ",
                            l.nfgCapsuleFillRange.min,
                            " - ",
                            l.nfgCapsuleFillRange.max,
                            " mg ",
                          ),
                          t.xp6(2),
                          t.hij("Target Weight: ", l.targetWeight, " mg"));
                    },
                    dependencies: [
                      m._Y,
                      m.Fj,
                      m.JJ,
                      m.JL,
                      m.sg,
                      m.u,
                      d.a8,
                      d.dn,
                      d.n5,
                      p.KE,
                      p.hX,
                      h.Nt,
                      i.BZ,
                      i.fO,
                      i.as,
                      i.w1,
                      i.Dz,
                      i.nj,
                      i.ge,
                      i.ev,
                      i.XQ,
                      i.Gk,
                      _.xw,
                      _.SQ,
                      C.lW,
                      C.RK,
                      M.Hw,
                    ],
                    styles: [
                      ".container[_ngcontent-%COMP%]{padding:20px}header[_ngcontent-%COMP%]{margin-bottom:20px}mat-card-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:500;text-align:center;line-height:64px}mat-card[_ngcontent-%COMP%]{margin-bottom:20px}mat-form-field[_ngcontent-%COMP%]{width:100%}.table-container[_ngcontent-%COMP%]{overflow-x:auto}table[_ngcontent-%COMP%]{width:100%;margin-bottom:20px;border-spacing:0 10px;border-collapse:separate}.mat-header-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%]{padding:16px;text-align:center;word-wrap:break-word}.mat-header-cell[_ngcontent-%COMP%]{font-weight:700;background-color:#f5f5f5}.mat-cell[_ngcontent-%COMP%]{border-bottom:1px solid #ddd}.mat-row[_ngcontent-%COMP%]:hover{background-color:#f1f1f1}.summary-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:500}button.mat-icon-button[_ngcontent-%COMP%]{margin:0 5px;display:inline-block;vertical-align:middle}.mat-cell[_ngcontent-%COMP%]   button.mat-icon-button[_ngcontent-%COMP%]{margin-right:10px}",
                    ],
                  }));
                }
                return e;
              })(),
            },
            {
              path: "package-breakdown",
              component: (() => {
                class e {
                  constructor(n) {
                    (this.globalService = n),
                      (this.displayedColumns = [
                        "item",
                        "qtyNeeded",
                        "cost",
                        "minOrderQty",
                        "costQtyOrdered",
                        "costPerBottle",
                        "costPerOrder",
                        "actions",
                      ]),
                      (this.dataSource = []),
                      (this.filteredDataSource = []),
                      (this.totalCostPerBottle = 0),
                      (this.totalCostPerOrder = 0);
                  }
                  ngOnInit() {
                    this.initializeData();
                  }
                  initializeData() {
                    const n = [
                      {
                        item: "225 PET Black",
                        qtyNeeded: 2e3,
                        cost: 0.4,
                        minOrderQty: 0,
                        costQtyOrdered: 0.4,
                        costPerBottle: 0.4,
                        costPerOrder: 800,
                      },
                      {
                        item: "#N/A",
                        qtyNeeded: 2e3,
                        cost: 0,
                        minOrderQty: 0,
                        costQtyOrdered: 0,
                        costPerBottle: 0,
                        costPerOrder: 0,
                      },
                      {
                        item: '2.50" X 7.00" White BOPP PET',
                        qtyNeeded: 2e3,
                        cost: 0.3755,
                        minOrderQty: 0,
                        costQtyOrdered: 0.1,
                        costPerBottle: 0.1,
                        costPerOrder: 200,
                      },
                      {
                        item: "Tamper-Proof Sticker-94mm x 0.5mm",
                        qtyNeeded: 2e3,
                        cost: 0.07,
                        minOrderQty: 0,
                        costQtyOrdered: 0.07,
                        costPerBottle: 0.07,
                        costPerOrder: 140,
                      },
                      {
                        item: "Gelatin",
                        qtyNeeded: 102e3,
                        cost: 0.005,
                        minOrderQty: 0,
                        costQtyOrdered: 0.25,
                        costPerBottle: 0.25,
                        costPerOrder: 500,
                      },
                      {
                        item: "Can Liner",
                        qtyNeeded: 2,
                        cost: 0.002,
                        minOrderQty: 0,
                        costQtyOrdered: 0.004,
                        costPerBottle: 0.004,
                        costPerOrder: 8,
                      },
                      {
                        item: "Labor",
                        qtyNeeded: 0,
                        cost: 0,
                        minOrderQty: 0,
                        costQtyOrdered: 0.355,
                        costPerBottle: 0.355,
                        costPerOrder: 710.75,
                      },
                      {
                        item: "NFG TAX",
                        qtyNeeded: 0,
                        cost: 0,
                        minOrderQty: 0,
                        costQtyOrdered: 0.25,
                        costPerBottle: 0.25,
                        costPerOrder: 500,
                      },
                      {
                        item: '16" x 10" x 4" (CEL)',
                        qtyNeeded: 15,
                        cost: 1.08,
                        minOrderQty: 0,
                        costQtyOrdered: 0.008,
                        costPerBottle: 0.008,
                        costPerOrder: 16,
                      },
                      {
                        item: "Testing Costs",
                        qtyNeeded: 0,
                        cost: 0,
                        minOrderQty: 0,
                        costQtyOrdered: 0.257,
                        costPerBottle: 0.257,
                        costPerOrder: 514,
                      },
                      {
                        item: "Silica",
                        qtyNeeded: 2e3,
                        cost: 0.15,
                        minOrderQty: 0,
                        costQtyOrdered: 0.15,
                        costPerBottle: 0.15,
                        costPerOrder: 300,
                      },
                      {
                        item: "Cotton",
                        qtyNeeded: 2e3,
                        cost: 0.05,
                        minOrderQty: 0,
                        costQtyOrdered: 0.05,
                        costPerBottle: 0.05,
                        costPerOrder: 100,
                      },
                    ];
                    (this.dataSource = n),
                      (this.filteredDataSource = n),
                      this.calculateSummary();
                  }
                  applyFilter(n) {
                    const o = n.target.value.trim().toLowerCase();
                    (this.filteredDataSource = this.dataSource.filter((l) =>
                      l.item.toLowerCase().includes(o),
                    )),
                      this.calculateSummary();
                  }
                  calculateSummary() {
                    (this.totalCostPerBottle = this.filteredDataSource.reduce(
                      (n, o) => n + o.costPerBottle,
                      0,
                    )),
                      (this.totalCostPerOrder = this.filteredDataSource.reduce(
                        (n, o) => n + o.costPerOrder,
                        0,
                      ));
                  }
                  editItem(n) {
                    console.log("Edit item:", n);
                  }
                  deleteItem(n) {
                    (this.dataSource = this.dataSource.filter((o) => o !== n)),
                      (this.filteredDataSource = this.filteredDataSource.filter(
                        (o) => o !== n,
                      )),
                      this.calculateSummary(),
                      console.log("Delete item:", n);
                  }
                  static #t = (this.ɵfac = function (o) {
                    return new (o || e)(t.Y36(b.a));
                  });
                  static #e = (this.ɵcmp = t.Xpm({
                    type: e,
                    selectors: [["app-package-breakdown"]],
                    decls: 51,
                    vars: 5,
                    consts: [
                      [
                        "fxLayout",
                        "column",
                        "fxLayoutGap",
                        "20px",
                        1,
                        "container",
                      ],
                      [1, "search-filter-container"],
                      ["appearance", "fill"],
                      [
                        "matInput",
                        "",
                        "placeholder",
                        "Search items",
                        3,
                        "input",
                      ],
                      [1, "table-container"],
                      [
                        "mat-table",
                        "",
                        "matSort",
                        "",
                        1,
                        "mat-elevation-z8",
                        3,
                        "dataSource",
                      ],
                      ["matColumnDef", "item"],
                      [4, "matHeaderCellDef"],
                      [4, "matCellDef"],
                      ["matColumnDef", "qtyNeeded"],
                      ["matColumnDef", "cost"],
                      ["matColumnDef", "minOrderQty"],
                      ["matColumnDef", "costQtyOrdered"],
                      ["matColumnDef", "costPerBottle"],
                      ["matColumnDef", "costPerOrder"],
                      ["matColumnDef", "actions"],
                      [4, "matHeaderRowDef"],
                      [4, "matRowDef", "matRowDefColumns"],
                      ["mat-icon-button", "", "color", "primary", 3, "click"],
                      ["mat-icon-button", "", "color", "warn", 3, "click"],
                    ],
                    template: function (o, l) {
                      1 & o &&
                        (t.TgZ(0, "div", 0)(1, "header")(2, "h1"),
                        t._uU(3, "Package Breakdown"),
                        t.qZA(),
                        t.TgZ(4, "p"),
                        t._uU(
                          5,
                          " Review the cost breakdown for packaging materials and other associated costs. ",
                        ),
                        t.qZA()(),
                        t.TgZ(6, "div", 1)(7, "mat-form-field", 2)(
                          8,
                          "mat-label",
                        ),
                        t._uU(9, "Search"),
                        t.qZA(),
                        t.TgZ(10, "input", 3),
                        t.NdJ("input", function (c) {
                          return l.applyFilter(c);
                        }),
                        t.qZA()()(),
                        t.TgZ(11, "mat-card")(12, "mat-card-title"),
                        t._uU(13, "Package Breakdown"),
                        t.qZA(),
                        t.TgZ(14, "mat-card-content")(15, "div", 4)(
                          16,
                          "table",
                          5,
                        ),
                        t.ynx(17, 6),
                        t.YNc(18, le, 2, 0, "mat-header-cell", 7),
                        t.YNc(19, ie, 2, 1, "mat-cell", 8),
                        t.BQk(),
                        t.ynx(20, 9),
                        t.YNc(21, re, 2, 0, "mat-header-cell", 7),
                        t.YNc(22, ce, 2, 1, "mat-cell", 8),
                        t.BQk(),
                        t.ynx(23, 10),
                        t.YNc(24, me, 2, 0, "mat-header-cell", 7),
                        t.YNc(25, se, 2, 1, "mat-cell", 8),
                        t.BQk(),
                        t.ynx(26, 11),
                        t.YNc(27, de, 2, 0, "mat-header-cell", 7),
                        t.YNc(28, ue, 2, 1, "mat-cell", 8),
                        t.BQk(),
                        t.ynx(29, 12),
                        t.YNc(30, pe, 2, 0, "mat-header-cell", 7),
                        t.YNc(31, ge, 2, 1, "mat-cell", 8),
                        t.BQk(),
                        t.ynx(32, 13),
                        t.YNc(33, _e, 2, 0, "mat-header-cell", 7),
                        t.YNc(34, fe, 2, 1, "mat-cell", 8),
                        t.BQk(),
                        t.ynx(35, 14),
                        t.YNc(36, he, 2, 0, "mat-header-cell", 7),
                        t.YNc(37, Ce, 2, 1, "mat-cell", 8),
                        t.BQk(),
                        t.ynx(38, 15),
                        t.YNc(39, xe, 2, 0, "mat-header-cell", 7),
                        t.YNc(40, Ze, 7, 0, "mat-cell", 8),
                        t.BQk(),
                        t.YNc(41, Te, 1, 0, "mat-header-row", 16),
                        t.YNc(42, Pe, 1, 0, "mat-row", 17),
                        t.qZA()()()(),
                        t.TgZ(43, "mat-card")(44, "mat-card-title"),
                        t._uU(45, "Summary"),
                        t.qZA(),
                        t.TgZ(46, "mat-card-content")(47, "p"),
                        t._uU(48),
                        t.qZA(),
                        t.TgZ(49, "p"),
                        t._uU(50),
                        t.qZA()()()()),
                        2 & o &&
                          (t.xp6(16),
                          t.Q6J("dataSource", l.filteredDataSource),
                          t.xp6(25),
                          t.Q6J("matHeaderRowDef", l.displayedColumns),
                          t.xp6(1),
                          t.Q6J("matRowDefColumns", l.displayedColumns),
                          t.xp6(6),
                          t.hij(
                            "Total Cost Per Bottle: ",
                            l.totalCostPerBottle,
                            "",
                          ),
                          t.xp6(2),
                          t.hij(
                            "Total Cost Per Order: ",
                            l.totalCostPerOrder,
                            "",
                          ));
                    },
                    dependencies: [
                      d.a8,
                      d.dn,
                      d.n5,
                      p.KE,
                      p.hX,
                      h.Nt,
                      i.BZ,
                      i.fO,
                      i.as,
                      i.w1,
                      i.Dz,
                      i.nj,
                      i.ge,
                      i.ev,
                      i.XQ,
                      i.Gk,
                      _.xw,
                      _.SQ,
                      x.YE,
                      C.RK,
                      M.Hw,
                    ],
                    styles: [
                      ".container[_ngcontent-%COMP%]{padding:20px}header[_ngcontent-%COMP%]{margin-bottom:20px}mat-card-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:500;text-align:center;line-height:64px}mat-card[_ngcontent-%COMP%]{margin-bottom:20px}mat-form-field[_ngcontent-%COMP%]{width:100%}.search-filter-container[_ngcontent-%COMP%]{margin-bottom:20px}.table-container[_ngcontent-%COMP%]{overflow-x:auto}",
                    ],
                  }));
                }
                return e;
              })(),
            },
            {
              path: "sales-analysis",
              component: (() => {
                class e {
                  constructor(n) {
                    (this.fb = n),
                      (this.displayedColumns = [
                        "price",
                        "salesVolume",
                        "revenue",
                      ]),
                      (this.dataTable = []),
                      (this.filteredDataTable = []),
                      (this.suggestedPricesWithMOQ = []),
                      (this.suggestedPricesWithoutMOQ = []),
                      (this.totalCostPerBottleWithMOQ = 6.1),
                      (this.totalCostPerBottleWithoutMOQ = 2.9),
                      (this.salesAnalysisForm = this.fb.group({
                        targetRevenue: [1e5, m.kI.required],
                        salesVolume: [
                          { value: 0, disabled: !0 },
                          m.kI.required,
                        ],
                        price: [0, m.kI.required],
                      })),
                      (this.scenarioManagerForm = this.fb.group({
                        scenarios: this.fb.array([]),
                      })),
                      (this.dataTableForm = this.fb.group({
                        priceRange: this.fb.array([this.createPriceRange()]),
                        salesVolumeRange: this.fb.array([
                          this.createSalesVolumeRange(),
                        ]),
                      })),
                      (this.filteredDataTable = this.dataTable);
                  }
                  ngOnInit() {
                    this.initializeScenarios(), this.calculateDataTable();
                  }
                  createPriceRange() {
                    return this.fb.group({ price: [0, m.kI.required] });
                  }
                  createSalesVolumeRange() {
                    return this.fb.group({ salesVolume: [0, m.kI.required] });
                  }
                  get scenarios() {
                    return this.scenarioManagerForm.get("scenarios");
                  }
                  get priceRange() {
                    return this.dataTableForm.get("priceRange");
                  }
                  get salesVolumeRange() {
                    return this.dataTableForm.get("salesVolumeRange");
                  }
                  addScenario() {
                    this.scenarios.push(
                      this.fb.group({
                        price: [0, m.kI.required],
                        salesVolume: [0, m.kI.required],
                        revenue: [{ value: 0, disabled: !0 }],
                      }),
                    );
                  }
                  initializeScenarios() {
                    for (let n = 0; n < 3; n++) this.addScenario();
                  }
                  calculateRevenue() {
                    const n =
                        this.salesAnalysisForm.get("targetRevenue")?.value,
                      o = this.salesAnalysisForm.get("price")?.value;
                    o > 0 &&
                      this.salesAnalysisForm.patchValue({ salesVolume: n / o });
                  }
                  calculateScenarioRevenue(n) {
                    const o = this.scenarios.at(n),
                      l = o.get("price")?.value,
                      r = o.get("salesVolume")?.value;
                    l > 0 &&
                      r > 0 &&
                      o.patchValue({ revenue: l * r }, { emitEvent: !1 });
                  }
                  calculateDataTable() {
                    const n = this.priceRange.value,
                      o = this.salesVolumeRange.value;
                    (this.dataTable = []),
                      n.forEach((l) => {
                        o.forEach((r) => {
                          this.dataTable.push({
                            price: l.price,
                            salesVolume: r.salesVolume,
                            revenue: l.price * r.salesVolume,
                          });
                        });
                      }),
                      (this.filteredDataTable = this.dataTable);
                  }
                  applyFilter(n) {
                    const o = n.target.value.toLowerCase();
                    this.filteredDataTable = this.dataTable.filter(
                      (l) =>
                        l.price.toString().includes(o) ||
                        l.salesVolume.toString().includes(o) ||
                        l.revenue.toString().includes(o),
                    );
                  }
                  onSubmit() {
                    console.log("Form Submitted", this.salesAnalysisForm.value);
                  }
                  calculateSuggestedPrices() {
                    (this.suggestedPricesWithMOQ = []),
                      (this.suggestedPricesWithoutMOQ = []),
                      [10, 15, 20, 25, 30, 35, 40, 45, 50].forEach((o) => {
                        const r =
                          this.totalCostPerBottleWithoutMOQ * (1 + o / 100);
                        this.suggestedPricesWithMOQ.push({
                          margin: `${o}%`,
                          price: `$${(this.totalCostPerBottleWithMOQ * (1 + o / 100)).toFixed(2)}`,
                        }),
                          this.suggestedPricesWithoutMOQ.push({
                            margin: `${o}%`,
                            price: `$${r.toFixed(2)}`,
                          });
                      });
                  }
                  static #t = (this.ɵfac = function (o) {
                    return new (o || e)(t.Y36(m.qu));
                  });
                  static #e = (this.ɵcmp = t.Xpm({
                    type: e,
                    selectors: [["app-sales-analysis"]],
                    decls: 64,
                    vars: 9,
                    consts: [
                      [
                        "fxLayout",
                        "column",
                        "fxLayoutGap",
                        "20px",
                        1,
                        "container",
                      ],
                      [3, "formGroup", "ngSubmit"],
                      ["appearance", "fill"],
                      [
                        "matInput",
                        "",
                        "formControlName",
                        "targetRevenue",
                        "type",
                        "number",
                      ],
                      [
                        "matInput",
                        "",
                        "formControlName",
                        "price",
                        "type",
                        "number",
                      ],
                      [
                        "matInput",
                        "",
                        "formControlName",
                        "salesVolume",
                        "type",
                        "number",
                        "readonly",
                        "",
                      ],
                      ["mat-raised-button", "", "color", "primary", 3, "click"],
                      [3, "formGroup"],
                      ["formArrayName", "scenarios"],
                      [
                        "class",
                        "scenario",
                        3,
                        "formGroupName",
                        4,
                        "ngFor",
                        "ngForOf",
                      ],
                      ["formArrayName", "priceRange"],
                      [3, "formGroupName", 4, "ngFor", "ngForOf"],
                      ["formArrayName", "salesVolumeRange"],
                      [
                        "mat-raised-button",
                        "",
                        "color",
                        "primary",
                        "type",
                        "submit",
                      ],
                      ["matInput", "", 3, "input"],
                      [1, "table-container"],
                      ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"],
                      ["matColumnDef", "price"],
                      [4, "matHeaderCellDef"],
                      [4, "matCellDef"],
                      ["matColumnDef", "salesVolume"],
                      ["matColumnDef", "revenue"],
                      [4, "matHeaderRowDef"],
                      [4, "matRowDef", "matRowDefColumns"],
                      [1, "scenario", 3, "formGroupName"],
                      [
                        "matInput",
                        "",
                        "formControlName",
                        "price",
                        "type",
                        "number",
                        3,
                        "input",
                      ],
                      [
                        "matInput",
                        "",
                        "formControlName",
                        "salesVolume",
                        "type",
                        "number",
                        3,
                        "input",
                      ],
                      [
                        "matInput",
                        "",
                        "formControlName",
                        "revenue",
                        "type",
                        "number",
                        "readonly",
                        "",
                      ],
                      [3, "formGroupName"],
                      [
                        "matInput",
                        "",
                        "formControlName",
                        "salesVolume",
                        "type",
                        "number",
                      ],
                    ],
                    template: function (o, l) {
                      1 & o &&
                        (t.TgZ(0, "div", 0)(1, "header")(2, "h1"),
                        t._uU(3, "Sales Analysis"),
                        t.qZA(),
                        t.TgZ(4, "p"),
                        t._uU(
                          5,
                          " Perform Goal Seek, Scenario Manager, and Data Table analysis on sales data. ",
                        ),
                        t.qZA()(),
                        t.TgZ(6, "mat-card")(7, "mat-card-title"),
                        t._uU(8, "Goal Seek"),
                        t.qZA(),
                        t.TgZ(9, "mat-card-content")(10, "form", 1),
                        t.NdJ("ngSubmit", function () {
                          return l.onSubmit();
                        }),
                        t.TgZ(11, "mat-form-field", 2)(12, "mat-label"),
                        t._uU(13, "Target Revenue"),
                        t.qZA(),
                        t._UZ(14, "input", 3),
                        t.qZA(),
                        t.TgZ(15, "mat-form-field", 2)(16, "mat-label"),
                        t._uU(17, "Price"),
                        t.qZA(),
                        t._UZ(18, "input", 4),
                        t.qZA(),
                        t.TgZ(19, "mat-form-field", 2)(20, "mat-label"),
                        t._uU(21, "Sales Volume"),
                        t.qZA(),
                        t._UZ(22, "input", 5),
                        t.qZA(),
                        t.TgZ(23, "button", 6),
                        t.NdJ("click", function () {
                          return l.calculateRevenue();
                        }),
                        t._uU(24, " Calculate "),
                        t.qZA()()()(),
                        t.TgZ(25, "mat-card")(26, "mat-card-title"),
                        t._uU(27, "Scenario Manager"),
                        t.qZA(),
                        t.TgZ(28, "mat-card-content")(29, "form", 7)(
                          30,
                          "div",
                          8,
                        ),
                        t.YNc(31, Me, 13, 1, "div", 9),
                        t.qZA()()()(),
                        t.TgZ(32, "mat-card")(33, "mat-card-title"),
                        t._uU(34, "Data Table"),
                        t.qZA(),
                        t.TgZ(35, "mat-card-content")(36, "form", 1),
                        t.NdJ("ngSubmit", function () {
                          return l.calculateDataTable();
                        }),
                        t.TgZ(37, "div", 10),
                        t.YNc(38, be, 5, 1, "div", 11),
                        t.qZA(),
                        t.TgZ(39, "div", 12),
                        t.YNc(40, Oe, 5, 1, "div", 11),
                        t.qZA(),
                        t.TgZ(41, "button", 13),
                        t._uU(42, " Calculate "),
                        t.qZA()()()(),
                        t.TgZ(43, "mat-form-field", 2)(44, "mat-label"),
                        t._uU(45, "Search"),
                        t.qZA(),
                        t.TgZ(46, "input", 14),
                        t.NdJ("input", function (c) {
                          return l.applyFilter(c);
                        }),
                        t.qZA()(),
                        t.TgZ(47, "mat-card")(48, "mat-card-title"),
                        t._uU(49, "Data Table"),
                        t.qZA(),
                        t.TgZ(50, "mat-card-content")(51, "div", 15)(
                          52,
                          "table",
                          16,
                        ),
                        t.ynx(53, 17),
                        t.YNc(54, ye, 2, 0, "mat-header-cell", 18),
                        t.YNc(55, we, 2, 1, "mat-cell", 19),
                        t.BQk(),
                        t.ynx(56, 20),
                        t.YNc(57, ve, 2, 0, "mat-header-cell", 18),
                        t.YNc(58, Be, 2, 1, "mat-cell", 19),
                        t.BQk(),
                        t.ynx(59, 21),
                        t.YNc(60, Ae, 2, 0, "mat-header-cell", 18),
                        t.YNc(61, Ne, 2, 1, "mat-cell", 19),
                        t.BQk(),
                        t.YNc(62, ke, 1, 0, "mat-header-row", 22),
                        t.YNc(63, Qe, 1, 0, "mat-row", 23),
                        t.qZA()()()()()),
                        2 & o &&
                          (t.xp6(10),
                          t.Q6J("formGroup", l.salesAnalysisForm),
                          t.xp6(19),
                          t.Q6J("formGroup", l.scenarioManagerForm),
                          t.xp6(2),
                          t.Q6J("ngForOf", l.scenarios.controls),
                          t.xp6(5),
                          t.Q6J("formGroup", l.dataTableForm),
                          t.xp6(2),
                          t.Q6J("ngForOf", l.priceRange.controls),
                          t.xp6(2),
                          t.Q6J("ngForOf", l.salesVolumeRange.controls),
                          t.xp6(12),
                          t.Q6J("dataSource", l.filteredDataTable),
                          t.xp6(10),
                          t.Q6J("matHeaderRowDef", l.displayedColumns),
                          t.xp6(1),
                          t.Q6J("matRowDefColumns", l.displayedColumns));
                    },
                    dependencies: [
                      P.sg,
                      m._Y,
                      m.Fj,
                      m.wV,
                      m.JJ,
                      m.JL,
                      m.sg,
                      m.u,
                      m.x0,
                      m.CE,
                      d.a8,
                      d.dn,
                      d.n5,
                      p.KE,
                      p.hX,
                      h.Nt,
                      i.BZ,
                      i.fO,
                      i.as,
                      i.w1,
                      i.Dz,
                      i.nj,
                      i.ge,
                      i.ev,
                      i.XQ,
                      i.Gk,
                      _.xw,
                      _.SQ,
                      C.lW,
                    ],
                    styles: [
                      ".container[_ngcontent-%COMP%]{padding:20px}header[_ngcontent-%COMP%]{margin-bottom:20px}mat-card-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:500;text-align:center;line-height:64px}mat-card[_ngcontent-%COMP%]{margin-bottom:20px}mat-form-field[_ngcontent-%COMP%]{width:100%}.search-filter-container[_ngcontent-%COMP%]{margin-bottom:20px}table[_ngcontent-%COMP%]{width:100%;overflow-x:auto;display:block}",
                    ],
                  }));
                }
                return e;
              })(),
            },
            {
              path: "calculate-profit",
              component: (() => {
                class e {
                  constructor() {
                    (this.totalCostPerBottleWithMOQ = 6.1),
                      (this.totalCostPerBottleWithoutMOQ = 2.9),
                      (this.suggestedPricesWithMOQ = []),
                      (this.suggestedPricesWithoutMOQ = []);
                  }
                  calculateSuggestedPrices() {
                    (this.suggestedPricesWithMOQ = []),
                      (this.suggestedPricesWithoutMOQ = []),
                      [10, 15, 20, 25, 30, 35, 40, 45, 50].forEach((o) => {
                        const r =
                          this.totalCostPerBottleWithoutMOQ * (1 + o / 100);
                        this.suggestedPricesWithMOQ.push({
                          margin: `${o}%`,
                          price: `$${(this.totalCostPerBottleWithMOQ * (1 + o / 100)).toFixed(2)}`,
                        }),
                          this.suggestedPricesWithoutMOQ.push({
                            margin: `${o}%`,
                            price: `$${r.toFixed(2)}`,
                          });
                      });
                  }
                  static #t = (this.ɵfac = function (o) {
                    return new (o || e)();
                  });
                  static #e = (this.ɵcmp = t.Xpm({
                    type: e,
                    selectors: [["app-calculate-profit"]],
                    decls: 41,
                    vars: 12,
                    consts: [
                      [
                        "fxLayout",
                        "column",
                        "fxLayoutGap",
                        "20px",
                        1,
                        "container",
                      ],
                      [
                        2,
                        "box-shadow",
                        "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                        "font-size",
                        "16px",
                        "width",
                        "100%",
                        "background",
                        "#ff9900",
                        "color",
                        "black",
                      ],
                      ["appearance", "fill"],
                      [
                        "matInput",
                        "",
                        "type",
                        "number",
                        3,
                        "ngModel",
                        "ngModelChange",
                      ],
                      ["mat-raised-button", "", "color", "primary", 3, "click"],
                      [
                        2,
                        "display",
                        "flex",
                        "justify-content",
                        "space-evenly",
                        "align-items",
                        "center",
                      ],
                      ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"],
                      ["matColumnDef", "margin"],
                      [4, "matHeaderCellDef"],
                      [4, "matCellDef"],
                      ["matColumnDef", "price"],
                      [4, "matHeaderRowDef"],
                      [4, "matRowDef", "matRowDefColumns"],
                    ],
                    template: function (o, l) {
                      1 & o &&
                        (t.TgZ(0, "div", 0)(1, "mat-card")(
                          2,
                          "mat-card-title",
                          1,
                        ),
                        t._uU(3, " Total Cost Per Bottle "),
                        t.qZA(),
                        t.TgZ(4, "mat-card-content")(5, "mat-form-field", 2)(
                          6,
                          "mat-label",
                        ),
                        t._uU(7, "Total Cost Per Bottle (With MOQ)"),
                        t.qZA(),
                        t.TgZ(8, "input", 3),
                        t.NdJ("ngModelChange", function (c) {
                          return (l.totalCostPerBottleWithMOQ = c);
                        }),
                        t.qZA()(),
                        t.TgZ(9, "mat-form-field", 2)(10, "mat-label"),
                        t._uU(11, "Total Cost Per Bottle (Without MOQ)"),
                        t.qZA(),
                        t.TgZ(12, "input", 3),
                        t.NdJ("ngModelChange", function (c) {
                          return (l.totalCostPerBottleWithoutMOQ = c);
                        }),
                        t.qZA()(),
                        t.TgZ(13, "button", 4),
                        t.NdJ("click", function () {
                          return l.calculateSuggestedPrices();
                        }),
                        t._uU(14, " Calculate "),
                        t.qZA()()(),
                        t.TgZ(15, "mat-card")(16, "mat-card-content", 5)(
                          17,
                          "div",
                        )(18, "mat-card-title", 1),
                        t._uU(19, " Suggested Sales With MOQ "),
                        t.qZA(),
                        t.TgZ(20, "table", 6),
                        t.ynx(21, 7),
                        t.YNc(22, Ie, 2, 0, "mat-header-cell", 8),
                        t.YNc(23, Se, 2, 1, "mat-cell", 9),
                        t.BQk(),
                        t.ynx(24, 10),
                        t.YNc(25, Fe, 2, 0, "mat-header-cell", 8),
                        t.YNc(26, De, 2, 1, "mat-cell", 9),
                        t.BQk(),
                        t.YNc(27, Ye, 1, 0, "mat-header-row", 11),
                        t.YNc(28, We, 1, 0, "mat-row", 12),
                        t.qZA()(),
                        t.TgZ(29, "div")(30, "mat-card-title", 1),
                        t._uU(31, " Suggested Sales Without MOQ "),
                        t.qZA(),
                        t.TgZ(32, "table", 6),
                        t.ynx(33, 7),
                        t.YNc(34, $e, 2, 0, "mat-header-cell", 8),
                        t.YNc(35, je, 2, 1, "mat-cell", 9),
                        t.BQk(),
                        t.ynx(36, 10),
                        t.YNc(37, Je, 2, 0, "mat-header-cell", 8),
                        t.YNc(38, Ke, 2, 1, "mat-cell", 9),
                        t.BQk(),
                        t.YNc(39, Re, 1, 0, "mat-header-row", 11),
                        t.YNc(40, Ge, 1, 0, "mat-row", 12),
                        t.qZA()()()()()),
                        2 & o &&
                          (t.xp6(8),
                          t.Q6J("ngModel", l.totalCostPerBottleWithMOQ),
                          t.xp6(4),
                          t.Q6J("ngModel", l.totalCostPerBottleWithoutMOQ),
                          t.xp6(8),
                          t.Q6J("dataSource", l.suggestedPricesWithMOQ),
                          t.xp6(7),
                          t.Q6J("matHeaderRowDef", t.DdM(8, F)),
                          t.xp6(1),
                          t.Q6J("matRowDefColumns", t.DdM(9, F)),
                          t.xp6(4),
                          t.Q6J("dataSource", l.suggestedPricesWithoutMOQ),
                          t.xp6(7),
                          t.Q6J("matHeaderRowDef", t.DdM(10, F)),
                          t.xp6(1),
                          t.Q6J("matRowDefColumns", t.DdM(11, F)));
                    },
                    dependencies: [
                      m.Fj,
                      m.wV,
                      m.JJ,
                      d.a8,
                      d.dn,
                      d.n5,
                      p.KE,
                      p.hX,
                      h.Nt,
                      i.BZ,
                      i.fO,
                      i.as,
                      i.w1,
                      i.Dz,
                      i.nj,
                      i.ge,
                      i.ev,
                      i.XQ,
                      i.Gk,
                      _.xw,
                      _.SQ,
                      C.lW,
                      m.On,
                    ],
                    styles: [
                      ".container[_ngcontent-%COMP%]{padding:20px}mat-card[_ngcontent-%COMP%]{margin:10px 0}mat-card-title[_ngcontent-%COMP%]{box-shadow:#00000029 0 1px 4px;font-size:16px;width:100%;background:#ff9900;color:#000;text-align:center;padding:10px}mat-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:20px}.mat-form-field[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]{align-self:flex-start}table[_ngcontent-%COMP%]{width:100%;margin-top:20px}.mat-header-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%]{text-align:center;padding:8px}.mat-elevation-z8[_ngcontent-%COMP%]{box-shadow:#00000029 0 1px 4px}",
                    ],
                  }));
                }
                return e;
              })(),
            },
            {
              path: "calculate-quote-pricing",
              component: (() => {
                class e {
                  constructor(n) {
                    (this.fb = n),
                      (this.displayedColumns = ["moq", "price"]),
                      (this.quotePrices = []),
                      (this.quoteForm = this.fb.group({
                        customerSalePrice: [8.05, m.kI.required],
                      })),
                      this.quoteForm.valueChanges.subscribe((o) => {
                        this.updateQuotePricing(
                          o.customerSalePrice,
                          o.launchQty,
                        );
                      }),
                      this.updateQuotePricing(8.05, 2e3);
                  }
                  updateQuotePricing(n, o) {
                    this.quotePrices = [
                      { moq: 2e3, price: 8.05 },
                      { moq: 5e3, price: 4.9 },
                      { moq: 7500, price: 3.92 },
                      { moq: 1e4, price: 3.68 },
                      { moq: 2e4, price: 3.44 },
                    ].map((c) => ({ moq: c.moq, price: n * (c.price / 8.05) }));
                  }
                  calculateDynamicPrice(n, o) {
                    return n * (2e3 / o);
                  }
                  static #t = (this.ɵfac = function (o) {
                    return new (o || e)(t.Y36(m.qu));
                  });
                  static #e = (this.ɵcmp = t.Xpm({
                    type: e,
                    selectors: [["app-calculate-quote-pricing"]],
                    decls: 11,
                    vars: 2,
                    consts: [
                      [1, "calculate-quote-pricing"],
                      [3, "formGroup"],
                      ["appearance", "fill"],
                      [
                        "matInput",
                        "",
                        "type",
                        "number",
                        "formControlName",
                        "customerSalePrice",
                      ],
                      ["class", "quote-pricing", 4, "ngIf"],
                      [1, "quote-pricing"],
                      [
                        2,
                        "box-shadow",
                        "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                        "font-size",
                        "16px",
                        "width",
                        "100%",
                        "background",
                        "#38761d",
                        "color",
                        "black",
                      ],
                      ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"],
                      ["matColumnDef", "moq"],
                      [
                        "mat-header-cell",
                        "",
                        "style",
                        "background: none",
                        4,
                        "matHeaderCellDef",
                      ],
                      ["mat-cell", "", 4, "matCellDef"],
                      ["matColumnDef", "price"],
                      ["mat-header-cell", "", 4, "matHeaderCellDef"],
                      ["mat-header-row", "", 4, "matHeaderRowDef"],
                      ["mat-row", "", 4, "matRowDef", "matRowDefColumns"],
                      ["mat-header-cell", "", 2, "background", "none"],
                      ["mat-cell", ""],
                      ["mat-header-cell", ""],
                      ["mat-header-row", ""],
                      ["mat-row", ""],
                    ],
                    template: function (o, l) {
                      1 & o &&
                        (t.TgZ(0, "div", 0)(1, "mat-card")(2, "mat-card-title"),
                        t._uU(3, "Calculate Quote Pricing"),
                        t.qZA(),
                        t.TgZ(4, "mat-card-content")(5, "form", 1)(
                          6,
                          "mat-form-field",
                          2,
                        )(7, "mat-label"),
                        t._uU(8, "Customer Sale Price (per bottle)"),
                        t.qZA(),
                        t._UZ(9, "input", 3),
                        t.qZA()(),
                        t.YNc(10, en, 12, 3, "div", 4),
                        t.qZA()()()),
                        2 & o &&
                          (t.xp6(5),
                          t.Q6J("formGroup", l.quoteForm),
                          t.xp6(5),
                          t.Q6J("ngIf", l.quotePrices.length > 0));
                    },
                    dependencies: [
                      P.O5,
                      m._Y,
                      m.Fj,
                      m.wV,
                      m.JJ,
                      m.JL,
                      m.sg,
                      m.u,
                      d.a8,
                      d.dn,
                      d.n5,
                      p.KE,
                      p.hX,
                      h.Nt,
                      i.BZ,
                      i.fO,
                      i.as,
                      i.w1,
                      i.Dz,
                      i.nj,
                      i.ge,
                      i.ev,
                      i.XQ,
                      i.Gk,
                      P.H9,
                    ],
                    styles: [
                      ".calculate-quote-pricing[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{margin:10px;padding:20px}.calculate-quote-pricing[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:500;text-align:center;margin-bottom:20px}.calculate-quote-pricing[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%;margin-bottom:15px}.calculate-quote-pricing[_ngcontent-%COMP%]   .quote-pricing[_ngcontent-%COMP%]{margin-top:20px}.calculate-quote-pricing[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.calculate-quote-pricing[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left;font-weight:700}.calculate-quote-pricing[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:#ff0;color:#000;padding:8px}",
                    ],
                  }));
                }
                return e;
              })(),
            },
          ],
        },
      ];
      let an = (() => {
          class e {
            static #t = (this.ɵfac = function (o) {
              return new (o || e)();
            });
            static #e = (this.ɵmod = t.oAB({ type: e }));
            static #n = (this.ɵinj = t.cJS({
              imports: [A.Bz.forChild(nn), A.Bz],
            }));
          }
          return e;
        })(),
        on = (() => {
          class e {
            static #t = (this.ɵfac = function (o) {
              return new (o || e)();
            });
            static #e = (this.ɵmod = t.oAB({ type: e }));
            static #n = (this.ɵinj = t.cJS({
              imports: [
                P.ez,
                m.UX,
                d.QW,
                p.lN,
                h.c,
                i.p0,
                S.LD,
                I.ie,
                B.o9,
                x.JX,
                d.QW,
                C.ot,
                M.Ps,
                an,
                m.u5,
                P.ez,
                m.UX,
                d.QW,
                p.lN,
                h.c,
                i.p0,
                S.LD,
                I.ie,
                M.Ps,
                B.o9,
              ],
            }));
          }
          return e;
        })();
    },
    9629: (J, v, s) => {
      s.r(v), s.d(v, { QuotesModule: () => $ });
      var P = s(6814),
        B = s(6223),
        m = s(5313),
        C = s(9157),
        d = s(2032),
        p = s(8525),
        M = s(5195),
        h = s(2296),
        I = s(617),
        S = s(1274),
        x = s(1896),
        i = s(5879);
      const t = [
        {
          path: "",
          component: (() => {
            class u {
              static #t = (this.ɵfac = function (q) {
                return new (q || u)();
              });
              static #e = (this.ɵcmp = i.Xpm({
                type: u,
                selectors: [["app-quotes-sheet"]],
                decls: 2,
                vars: 0,
                consts: [[1, "nufacturing_quote"]],
                template: function (q, j) {
                  1 & q &&
                    (i.TgZ(0, "section", 0),
                    i._UZ(1, "router-outlet"),
                    i.qZA());
                },
                dependencies: [x.lC],
                styles: [
                  ".subnav[_ngcontent-%COMP%]{padding:10px;margin:auto;display:flex;justify-content:flex-start;align-items:center;flex-wrap:wrap;height:10vh;position:fixed;width:100%;z-index:1000;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:#00000040 0 54px 55px,#0000001f 0 -12px 30px,#0000001f 0 4px 6px,#0000002b 0 12px 13px,#00000017 0 -3px 5px}.subnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;flex-wrap:wrap;align-items:center;margin:2%}.subnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:10px;margin-bottom:10px;padding:10px 20px;font-size:1rem;font-weight:600;text-transform:uppercase;color:#fff;background-color:#023f1f;border:none;border-radius:4px;transition:background-color .3s ease,box-shadow .3s ease}.subnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#303f9f}.subnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{background-color:#283593}.subnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{outline:none;box-shadow:0 0 5px #3f51b580}.subnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-right:0}.nufacturing_quote[_ngcontent-%COMP%]{width:90%;padding:5%;height:calc(100vh - 80px);justify-content:space-between;align-items:flex-start}mat-card[_ngcontent-%COMP%]{margin:10px;width:100%}mat-card-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:500;text-align:center;line-height:64px}mat-form-field[_ngcontent-%COMP%]{margin-bottom:15px}table[_ngcontent-%COMP%]{width:100%}th[_ngcontent-%COMP%]{text-align:left;font-weight:700}td[_ngcontent-%COMP%]{padding:8px}",
                ],
              }));
            }
            return u;
          })(),
          children: [
            { path: "", redirectTo: "info", pathMatch: "full" },
            {
              path: "info",
              loadChildren: () =>
                Promise.resolve()
                  .then(s.bind(s, 9464))
                  .then((u) => u.InfoModule),
            },
            {
              path: "ingredients",
              loadChildren: () =>
                Promise.resolve()
                  .then(s.bind(s, 3e3))
                  .then((u) => u.IngredientsModule),
            },
            {
              path: "bom",
              loadChildren: () =>
                Promise.resolve()
                  .then(s.bind(s, 9285))
                  .then((u) => u.BomModule),
            },
          ],
        },
      ];
      let Y = (() => {
        class u {
          static #t = (this.ɵfac = function (q) {
            return new (q || u)();
          });
          static #e = (this.ɵmod = i.oAB({ type: u }));
          static #n = (this.ɵinj = i.cJS({
            imports: [x.Bz.forChild(t), x.Bz],
          }));
        }
        return u;
      })();
      var b = s(9464),
        _ = s(9285),
        W = s(3e3);
      let $ = (() => {
        class u {
          static #t = (this.ɵfac = function (q) {
            return new (q || u)();
          });
          static #e = (this.ɵmod = i.oAB({ type: u }));
          static #n = (this.ɵinj = i.cJS({
            imports: [
              P.ez,
              B.UX,
              m.p0,
              C.lN,
              d.c,
              p.LD,
              M.QW,
              h.ot,
              I.Ps,
              S.g0,
              Y,
              W.IngredientsModule,
              b.InfoModule,
              B.u5,
              _.BomModule,
              x.Bz,
            ],
          }));
        }
        return u;
      })();
    },
  },
]);
