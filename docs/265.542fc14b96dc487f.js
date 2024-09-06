"use strict";
(self.webpackChunknufacturing = self.webpackChunknufacturing || []).push([
  [265],
  {
    3265: (ke, J, d) => {
      d.r(J), d.d(J, { CustomersModule: () => Me });
      var w = d(6814),
        Et = d(6223),
        X = d(1896),
        _ = d(5313),
        N = d(1476),
        I = d(3566),
        C = d(7700),
        s = d(5879),
        O = d(2296);
      let It = (() => {
        class o {
          constructor(t, i) {
            (this.dialogRef = t), (this.data = i);
          }
          closeDialog() {
            this.dialogRef.close();
          }
          static #t = (this.ɵfac = function (i) {
            return new (i || o)(s.Y36(C.so), s.Y36(C.WI));
          });
          static #e = (this.ɵcmp = s.Xpm({
            type: o,
            selectors: [["app-customer-details-dialog"]],
            decls: 34,
            vars: 8,
            consts: [
              ["mat-dialog-title", ""],
              ["mat-dialog-content", ""],
              ["mat-dialog-actions", ""],
              ["mat-button", "", 3, "click"],
            ],
            template: function (i, n) {
              1 & i &&
                (s.TgZ(0, "h1", 0),
                s._uU(1, "Customer Details"),
                s.qZA(),
                s.TgZ(2, "div", 1)(3, "p")(4, "strong"),
                s._uU(5, "Company Name:"),
                s.qZA(),
                s._uU(6),
                s.qZA(),
                s.TgZ(7, "p")(8, "strong"),
                s._uU(9, "Display Name:"),
                s.qZA(),
                s._uU(10),
                s.qZA(),
                s.TgZ(11, "p")(12, "strong"),
                s._uU(13, "Primary Contact:"),
                s.qZA(),
                s._uU(14),
                s.qZA(),
                s.TgZ(15, "p")(16, "strong"),
                s._uU(17, "Email:"),
                s.qZA(),
                s._uU(18),
                s.qZA(),
                s.TgZ(19, "p")(20, "strong"),
                s._uU(21, "Phone:"),
                s.qZA(),
                s._uU(22),
                s.qZA(),
                s.TgZ(23, "p")(24, "strong"),
                s._uU(25, "Website:"),
                s.qZA(),
                s._uU(26),
                s.qZA(),
                s.TgZ(27, "p")(28, "strong"),
                s._uU(29, "Estimate:"),
                s.qZA(),
                s._uU(30),
                s.qZA()(),
                s.TgZ(31, "div", 2)(32, "button", 3),
                s.NdJ("click", function () {
                  return n.closeDialog();
                }),
                s._uU(33, "Close"),
                s.qZA()()),
                2 & i &&
                  (s.xp6(6),
                  s.hij(" ", n.data.companyName, ""),
                  s.xp6(4),
                  s.hij(" ", n.data.displayName, ""),
                  s.xp6(4),
                  s.AsE(
                    " ",
                    n.data.primaryContact.firstName,
                    " ",
                    n.data.primaryContact.lastName,
                    " ",
                  ),
                  s.xp6(4),
                  s.hij(" ", n.data.primaryContact.email, ""),
                  s.xp6(4),
                  s.hij(" ", n.data.primaryContact.phone, ""),
                  s.xp6(4),
                  s.hij(" ", n.data.website, ""),
                  s.xp6(4),
                  s.hij(" ", n.data.estimate, ""));
            },
            dependencies: [O.lW, C.uh, C.xY, C.H8],
            styles: [
              ".mat-dialog-content[_ngcontent-%COMP%]{padding:20px;font-size:16px;line-height:1.5}.mat-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0}.mat-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:700}.mat-dialog-actions[_ngcontent-%COMP%]{padding:20px;display:flex;justify-content:flex-end}.mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:10px}h1[_ngcontent-%COMP%]{font-size:24px;margin:0;padding:20px;color:#fff;text-align:center}",
            ],
          }));
        }
        return o;
      })();
      var Ot = d(9862);
      let Mt = (() => {
        class o {
          constructor(t) {
            (this.http = t),
              (this.apiUrl = "http://localhost:3000/api/sales/customers");
          }
          getCustomers() {
            return this.http.get(this.apiUrl);
          }
          createCustomer(t) {
            return this.http.post(this.apiUrl, t);
          }
          updateCustomer(t, i) {
            return this.http.put(`${this.apiUrl}/${t}`, i);
          }
          deleteCustomer(t) {
            return this.http.delete(`${this.apiUrl}/${t}`);
          }
          static #t = (this.ɵfac = function (i) {
            return new (i || o)(s.LFG(Ot.eN));
          });
          static #e = (this.ɵprov = s.Yz7({
            token: o,
            factory: o.ɵfac,
            providedIn: "root",
          }));
        }
        return o;
      })();
      var At = d(20),
        tt = d(5195),
        et = d(617),
        H = d(9157),
        it = d(2032);
      function kt(o, e) {
        if (1 & o) {
          const t = s.EpF();
          s.TgZ(0, "div")(1, "button", 21),
            s.NdJ("click", function () {
              s.CHM(t);
              const n = s.oxw();
              return s.KtG(n.createNewCustomer());
            }),
            s._uU(2, " Create New Customer "),
            s.qZA()();
        }
      }
      function Lt(o, e) {
        1 & o && (s.TgZ(0, "th", 22), s._uU(1, "Company Name"), s.qZA());
      }
      function Zt(o, e) {
        if ((1 & o && (s.TgZ(0, "td", 23), s._uU(1), s.qZA()), 2 & o)) {
          const t = e.$implicit;
          s.xp6(1), s.Oqu(t.companyName);
        }
      }
      function Nt(o, e) {
        1 & o && (s.TgZ(0, "th", 22), s._uU(1, "Display Name"), s.qZA());
      }
      function Ht(o, e) {
        if ((1 & o && (s.TgZ(0, "td", 23), s._uU(1), s.qZA()), 2 & o)) {
          const t = e.$implicit;
          s.xp6(1), s.Oqu(t.displayName);
        }
      }
      function zt(o, e) {
        1 & o && (s.TgZ(0, "th", 22), s._uU(1, "Primary Contact"), s.qZA());
      }
      function Ft(o, e) {
        if ((1 & o && (s.TgZ(0, "td", 23), s._uU(1), s.qZA()), 2 & o)) {
          const t = e.$implicit;
          s.xp6(1),
            s.AsE(
              " ",
              t.primaryContact.firstName,
              " ",
              t.primaryContact.lastName,
              " ",
            );
        }
      }
      function Ut(o, e) {
        1 & o && (s.TgZ(0, "th", 22), s._uU(1, "Email"), s.qZA());
      }
      function Yt(o, e) {
        if ((1 & o && (s.TgZ(0, "td", 23), s._uU(1), s.qZA()), 2 & o)) {
          const t = e.$implicit;
          s.xp6(1), s.hij(" ", t.primaryContact.email, " ");
        }
      }
      function Gt(o, e) {
        1 & o && (s.TgZ(0, "th", 22), s._uU(1, "Contact Number"), s.qZA());
      }
      function Bt(o, e) {
        if ((1 & o && (s.TgZ(0, "td", 23), s._uU(1), s.qZA()), 2 & o)) {
          const t = e.$implicit;
          s.xp6(1), s.hij(" ", t.primaryContact.phone, " ");
        }
      }
      function Vt(o, e) {
        1 & o && (s.TgZ(0, "th", 22), s._uU(1, "Website"), s.qZA());
      }
      function $t(o, e) {
        if ((1 & o && (s.TgZ(0, "td", 23), s._uU(1), s.qZA()), 2 & o)) {
          const t = e.$implicit;
          s.xp6(1), s.Oqu(t.website);
        }
      }
      function qt(o, e) {
        1 & o && (s.TgZ(0, "th", 24), s._uU(1, "Actions"), s.qZA());
      }
      function Wt(o, e) {
        if (1 & o) {
          const t = s.EpF();
          s.TgZ(0, "button", 28),
            s.NdJ("click", function () {
              s.CHM(t);
              const n = s.oxw().$implicit,
                r = s.oxw();
              return s.KtG(r.editCustomer(n));
            }),
            s.TgZ(1, "mat-icon"),
            s._uU(2, "edit"),
            s.qZA()();
        }
      }
      function Kt(o, e) {
        1 & o && (s.TgZ(0, "mat-icon"), s._uU(1, "remove"), s.qZA());
      }
      function Qt(o, e) {
        if (1 & o) {
          const t = s.EpF();
          s.TgZ(0, "button", 29),
            s.NdJ("click", function () {
              s.CHM(t);
              const n = s.oxw().$implicit,
                r = s.oxw();
              return s.KtG(r.deleteCustomer(n));
            }),
            s.TgZ(1, "mat-icon"),
            s._uU(2, "delete"),
            s.qZA()();
        }
      }
      function jt(o, e) {
        if (
          (1 & o &&
            (s.TgZ(0, "td", 23),
            s.YNc(1, Wt, 3, 0, "button", 25),
            s.YNc(2, Kt, 2, 0, "ng-template", null, 26, s.W1O),
            s.YNc(4, Qt, 3, 0, "button", 27),
            s.qZA()),
          2 & o)
        ) {
          const t = s.MAs(3),
            i = s.oxw();
          s.xp6(1),
            s.Q6J("ngIf", i.isAdminOrManager)("ngIfElse", t),
            s.xp6(3),
            s.Q6J("ngIf", i.isAdminOrManager);
        }
      }
      function Jt(o, e) {
        1 & o && s._UZ(0, "tr", 30);
      }
      function Xt(o, e) {
        if (1 & o) {
          const t = s.EpF();
          s.TgZ(0, "tr", 31),
            s.NdJ("click", function () {
              const r = s.CHM(t).$implicit,
                a = s.oxw();
              return s.KtG(a.openCustomerDetails(r));
            }),
            s.qZA();
        }
      }
      const te = function () {
          return [5, 10, 20];
        },
        ee = [
          {
            path: "",
            component: (() => {
              class o {
                constructor(t, i, n) {
                  (this.customerService = t),
                    (this.authService = i),
                    (this.dialog = n),
                    (this.displayedColumns = [
                      "companyName",
                      "displayName",
                      "primaryContact",
                      "email",
                      "phone",
                      "website",
                      "actions",
                    ]),
                    (this.dataSource = new _.by()),
                    (this.isAdminOrManager = !1),
                    (this.totalCustomers = 0);
                }
                ngOnInit() {
                  this.customerService.getCustomers().subscribe((t) => {
                    (this.dataSource.data = t),
                      (this.dataSource.paginator = this.paginator),
                      (this.dataSource.sort = this.sort),
                      (this.totalCustomers = t.length);
                  }),
                    this.authService.userRole.subscribe((t) => {
                      this.isAdminOrManager = "admin" === t || "manager" === t;
                    });
                }
                ngAfterViewInit() {
                  (this.dataSource.paginator = this.paginator),
                    (this.dataSource.sort = this.sort);
                }
                applyFilter(t) {
                  this.dataSource.filter = t.target.value.trim().toLowerCase();
                }
                createNewCustomer() {}
                editCustomer(t) {}
                deleteCustomer(t) {
                  this.customerService.deleteCustomer(t._id).subscribe(
                    () => this.refreshCustomerData(),
                    (i) => console.error("Error deleting customer:", i),
                  );
                }
                refreshCustomerData() {
                  this.customerService.getCustomers().subscribe((t) => {
                    (this.dataSource.data = t),
                      (this.totalCustomers = t.length);
                  });
                }
                openCustomerDetails(t) {
                  this.dialog.open(It, { width: "450px", data: t });
                }
                static #t = (this.ɵfac = function (i) {
                  return new (i || o)(s.Y36(Mt), s.Y36(At.e), s.Y36(C.uw));
                });
                static #e = (this.ɵcmp = s.Xpm({
                  type: o,
                  selectors: [["customers"]],
                  viewQuery: function (i, n) {
                    if ((1 & i && (s.Gf(N.NW, 5), s.Gf(I.YE, 5)), 2 & i)) {
                      let r;
                      s.iGM((r = s.CRH())) && (n.paginator = r.first),
                        s.iGM((r = s.CRH())) && (n.sort = r.first);
                    }
                  },
                  decls: 38,
                  vars: 7,
                  consts: [
                    [1, "dashboard"],
                    [1, "summary-card"],
                    [1, "total-customers"],
                    [4, "ngIf"],
                    [1, "customer-table"],
                    ["appearance", "outline"],
                    [
                      "matInput",
                      "",
                      "placeholder",
                      "Search for data",
                      3,
                      "keyup",
                    ],
                    ["mat-table", "", "matSort", "", 3, "dataSource"],
                    ["matColumnDef", "companyName"],
                    [
                      "mat-header-cell",
                      "",
                      "mat-sort-header",
                      "",
                      4,
                      "matHeaderCellDef",
                    ],
                    ["mat-cell", "", 4, "matCellDef"],
                    ["matColumnDef", "displayName"],
                    ["matColumnDef", "primaryContact"],
                    ["matColumnDef", "email"],
                    ["matColumnDef", "phone"],
                    ["matColumnDef", "website"],
                    ["matColumnDef", "actions"],
                    ["mat-header-cell", "", 4, "matHeaderCellDef"],
                    ["mat-header-row", "", 4, "matHeaderRowDef"],
                    [
                      "mat-row",
                      "",
                      3,
                      "click",
                      4,
                      "matRowDef",
                      "matRowDefColumns",
                    ],
                    ["showFirstLastButtons", "", 3, "pageSizeOptions"],
                    ["mat-raised-button", "", "color", "primary", 3, "click"],
                    ["mat-header-cell", "", "mat-sort-header", ""],
                    ["mat-cell", ""],
                    ["mat-header-cell", ""],
                    ["mat-icon-button", "", 3, "click", 4, "ngIf", "ngIfElse"],
                    ["editDisabled", ""],
                    [
                      "mat-icon-button",
                      "",
                      "color",
                      "warn",
                      3,
                      "click",
                      4,
                      "ngIf",
                    ],
                    ["mat-icon-button", "", 3, "click"],
                    ["mat-icon-button", "", "color", "warn", 3, "click"],
                    ["mat-header-row", ""],
                    ["mat-row", "", 3, "click"],
                  ],
                  template: function (i, n) {
                    1 & i &&
                      (s.TgZ(0, "div", 0)(1, "mat-card", 1)(2, "h3"),
                      s._uU(3, "Total Customers"),
                      s.qZA(),
                      s.TgZ(4, "div", 2)(5, "h1"),
                      s._uU(6),
                      s.qZA()(),
                      s.YNc(7, kt, 3, 0, "div", 3),
                      s.qZA()(),
                      s.TgZ(8, "div", 4)(9, "mat-form-field", 5)(
                        10,
                        "mat-label",
                      ),
                      s._uU(11, "Search Data"),
                      s.qZA(),
                      s.TgZ(12, "input", 6),
                      s.NdJ("keyup", function (a) {
                        return n.applyFilter(a);
                      }),
                      s.qZA()(),
                      s.TgZ(13, "table", 7),
                      s.ynx(14, 8),
                      s.YNc(15, Lt, 2, 0, "th", 9),
                      s.YNc(16, Zt, 2, 1, "td", 10),
                      s.BQk(),
                      s.ynx(17, 11),
                      s.YNc(18, Nt, 2, 0, "th", 9),
                      s.YNc(19, Ht, 2, 1, "td", 10),
                      s.BQk(),
                      s.ynx(20, 12),
                      s.YNc(21, zt, 2, 0, "th", 9),
                      s.YNc(22, Ft, 2, 2, "td", 10),
                      s.BQk(),
                      s.ynx(23, 13),
                      s.YNc(24, Ut, 2, 0, "th", 9),
                      s.YNc(25, Yt, 2, 1, "td", 10),
                      s.BQk(),
                      s.ynx(26, 14),
                      s.YNc(27, Gt, 2, 0, "th", 9),
                      s.YNc(28, Bt, 2, 1, "td", 10),
                      s.BQk(),
                      s.ynx(29, 15),
                      s.YNc(30, Vt, 2, 0, "th", 9),
                      s.YNc(31, $t, 2, 1, "td", 10),
                      s.BQk(),
                      s.ynx(32, 16),
                      s.YNc(33, qt, 2, 0, "th", 17),
                      s.YNc(34, jt, 5, 3, "td", 10),
                      s.BQk(),
                      s.YNc(35, Jt, 1, 0, "tr", 18),
                      s.YNc(36, Xt, 1, 0, "tr", 19),
                      s.qZA(),
                      s._UZ(37, "mat-paginator", 20),
                      s.qZA()),
                      2 & i &&
                        (s.xp6(6),
                        s.Oqu(n.totalCustomers),
                        s.xp6(1),
                        s.Q6J("ngIf", n.isAdminOrManager),
                        s.xp6(6),
                        s.Q6J("dataSource", n.dataSource),
                        s.xp6(22),
                        s.Q6J("matHeaderRowDef", n.displayedColumns),
                        s.xp6(1),
                        s.Q6J("matRowDefColumns", n.displayedColumns),
                        s.xp6(1),
                        s.Q6J("pageSizeOptions", s.DdM(6, te)));
                  },
                  dependencies: [
                    w.O5,
                    tt.a8,
                    et.Hw,
                    H.KE,
                    H.hX,
                    it.Nt,
                    O.lW,
                    O.RK,
                    _.BZ,
                    _.fO,
                    _.as,
                    _.w1,
                    _.Dz,
                    _.nj,
                    _.ge,
                    _.ev,
                    _.XQ,
                    _.Gk,
                    N.NW,
                    I.YE,
                    I.nU,
                  ],
                  styles: [
                    ".dashboard[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;padding:20px}.summary-card[_ngcontent-%COMP%]{box-shadow:0 4px 8px #0000001a;margin-bottom:20px;padding:20px;border-radius:8px;display:flex;flex-direction:column;align-items:center;text-align:center}.summary-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:24px;color:#fff;margin-bottom:10px}.summary-card[_ngcontent-%COMP%]   .total-customers[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:48px;color:#fff;margin:0}.summary-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:20px}.customer-table[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;padding:20px;border-radius:8px;box-shadow:0 4px 8px #0000001a}.customer-table[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%;margin-bottom:10px}.customer-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.customer-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .customer-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:8px 12px;text-align:left}.customer-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:700}.customer-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#3e3e3e}.customer-table[_ngcontent-%COMP%]   .mat-paginator[_ngcontent-%COMP%]{margin-top:20px}@media (max-width: 1024px){.dashboard[_ngcontent-%COMP%]{flex-direction:column}.summary-card[_ngcontent-%COMP%], .customer-table[_ngcontent-%COMP%]{padding:15px}.mat-paginator[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}}@media (max-width: 768px){.dashboard[_ngcontent-%COMP%], .summary-card[_ngcontent-%COMP%], .customer-table[_ngcontent-%COMP%]{padding:10px}}",
                  ],
                }));
              }
              return o;
            })(),
            pathMatch: "full",
          },
        ];
      let ie = (() => {
        class o {
          static #t = (this.ɵfac = function (i) {
            return new (i || o)();
          });
          static #e = (this.ɵmod = s.oAB({ type: o }));
          static #i = (this.ɵinj = s.cJS({
            imports: [X.Bz.forChild(ee), X.Bz],
          }));
        }
        return o;
      })();
      var se = d(2557),
        z = d(6702),
        D = d(2831),
        g = d(2495),
        st = d(7849),
        u = d(8645),
        x = d(7394),
        ne = d(6321),
        oe = d(4825),
        ae = d(927),
        nt = d(5592),
        F = d(3019),
        M = d(9773);
      function Y(o, e, t) {
        for (let i in e)
          if (e.hasOwnProperty(i)) {
            const n = e[i];
            n
              ? o.setProperty(i, n, t?.has(i) ? "important" : "")
              : o.removeProperty(i);
          }
        return o;
      }
      function y(o, e) {
        const t = e ? "" : "none";
        Y(o.style, {
          "touch-action": e ? "" : "none",
          "-webkit-user-drag": e ? "" : "none",
          "-webkit-tap-highlight-color": e ? "" : "transparent",
          "user-select": t,
          "-ms-user-select": t,
          "-webkit-user-select": t,
          "-moz-user-select": t,
        });
      }
      function at(o, e, t) {
        Y(
          o.style,
          {
            position: e ? "" : "fixed",
            top: e ? "" : "0",
            opacity: e ? "" : "0",
            left: e ? "" : "-999em",
          },
          t,
        );
      }
      function A(o, e) {
        return e && "none" != e ? o + " " + e : o;
      }
      function lt(o) {
        const e = o.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3;
        return parseFloat(o) * e;
      }
      function G(o, e) {
        return o
          .getPropertyValue(e)
          .split(",")
          .map((i) => i.trim());
      }
      function B(o) {
        const e = o.getBoundingClientRect();
        return {
          top: e.top,
          right: e.right,
          bottom: e.bottom,
          left: e.left,
          width: e.width,
          height: e.height,
          x: e.x,
          y: e.y,
        };
      }
      function V(o, e, t) {
        const { top: i, bottom: n, left: r, right: a } = o;
        return t >= i && t <= n && e >= r && e <= a;
      }
      function R(o, e, t) {
        (o.top += e),
          (o.bottom = o.top + o.height),
          (o.left += t),
          (o.right = o.left + o.width);
      }
      function ct(o, e, t, i) {
        const { top: n, right: r, bottom: a, left: l, width: c, height: h } = o,
          p = c * e,
          m = h * e;
        return i > n - m && i < a + m && t > l - p && t < r + p;
      }
      d(7398), d(8180), d(7921), d(9397), d(4664), d(9388);
      class ht {
        constructor(e) {
          (this._document = e), (this.positions = new Map());
        }
        clear() {
          this.positions.clear();
        }
        cache(e) {
          this.clear(),
            this.positions.set(this._document, {
              scrollPosition: this.getViewportScrollPosition(),
            }),
            e.forEach((t) => {
              this.positions.set(t, {
                scrollPosition: { top: t.scrollTop, left: t.scrollLeft },
                clientRect: B(t),
              });
            });
        }
        handleScroll(e) {
          const t = (0, D.sA)(e),
            i = this.positions.get(t);
          if (!i) return null;
          const n = i.scrollPosition;
          let r, a;
          if (t === this._document) {
            const h = this.getViewportScrollPosition();
            (r = h.top), (a = h.left);
          } else (r = t.scrollTop), (a = t.scrollLeft);
          const l = n.top - r,
            c = n.left - a;
          return (
            this.positions.forEach((h, p) => {
              h.clientRect && t !== p && t.contains(p) && R(h.clientRect, l, c);
            }),
            (n.top = r),
            (n.left = a),
            { top: l, left: c }
          );
        }
        getViewportScrollPosition() {
          return { top: window.scrollY, left: window.scrollX };
        }
      }
      function dt(o) {
        const e = o.cloneNode(!0),
          t = e.querySelectorAll("[id]"),
          i = o.nodeName.toLowerCase();
        e.removeAttribute("id");
        for (let n = 0; n < t.length; n++) t[n].removeAttribute("id");
        return (
          "canvas" === i
            ? ut(o, e)
            : ("input" === i || "select" === i || "textarea" === i) && gt(o, e),
          pt("canvas", o, e, ut),
          pt("input, textarea, select", o, e, gt),
          e
        );
      }
      function pt(o, e, t, i) {
        const n = e.querySelectorAll(o);
        if (n.length) {
          const r = t.querySelectorAll(o);
          for (let a = 0; a < n.length; a++) i(n[a], r[a]);
        }
      }
      let pe = 0;
      function gt(o, e) {
        "file" !== e.type && (e.value = o.value),
          "radio" === e.type &&
            e.name &&
            (e.name = `mat-clone-${e.name}-${pe++}`);
      }
      function ut(o, e) {
        const t = e.getContext("2d");
        if (t)
          try {
            t.drawImage(o, 0, 0);
          } catch {}
      }
      const mt = (0, D.i$)({ passive: !0 }),
        k = (0, D.i$)({ passive: !1 }),
        $ = new Set(["position"]);
      class ue {
        get disabled() {
          return (
            this._disabled ||
            !(!this._dropContainer || !this._dropContainer.disabled)
          );
        }
        set disabled(e) {
          const t = (0, g.Ig)(e);
          t !== this._disabled &&
            ((this._disabled = t),
            this._toggleNativeDragInteractions(),
            this._handles.forEach((i) => y(i, t)));
        }
        constructor(e, t, i, n, r, a) {
          (this._config = t),
            (this._document = i),
            (this._ngZone = n),
            (this._viewportRuler = r),
            (this._dragDropRegistry = a),
            (this._passiveTransform = { x: 0, y: 0 }),
            (this._activeTransform = { x: 0, y: 0 }),
            (this._hasStartedDragging = !1),
            (this._moveEvents = new u.x()),
            (this._pointerMoveSubscription = x.w0.EMPTY),
            (this._pointerUpSubscription = x.w0.EMPTY),
            (this._scrollSubscription = x.w0.EMPTY),
            (this._resizeSubscription = x.w0.EMPTY),
            (this._boundaryElement = null),
            (this._nativeInteractionsEnabled = !0),
            (this._handles = []),
            (this._disabledHandles = new Set()),
            (this._direction = "ltr"),
            (this.dragStartDelay = 0),
            (this._disabled = !1),
            (this.beforeStarted = new u.x()),
            (this.started = new u.x()),
            (this.released = new u.x()),
            (this.ended = new u.x()),
            (this.entered = new u.x()),
            (this.exited = new u.x()),
            (this.dropped = new u.x()),
            (this.moved = this._moveEvents),
            (this._pointerDown = (l) => {
              if ((this.beforeStarted.next(), this._handles.length)) {
                const c = this._getTargetHandle(l);
                c &&
                  !this._disabledHandles.has(c) &&
                  !this.disabled &&
                  this._initializeDragSequence(c, l);
              } else
                this.disabled ||
                  this._initializeDragSequence(this._rootElement, l);
            }),
            (this._pointerMove = (l) => {
              const c = this._getPointerPositionOnPage(l);
              if (!this._hasStartedDragging) {
                if (
                  Math.abs(c.x - this._pickupPositionOnPage.x) +
                    Math.abs(c.y - this._pickupPositionOnPage.y) >=
                  this._config.dragStartThreshold
                ) {
                  const b =
                      Date.now() >=
                      this._dragStartTime + this._getDragStartDelay(l),
                    P = this._dropContainer;
                  if (!b) return void this._endDragSequence(l);
                  (!P || (!P.isDragging() && !P.isReceiving())) &&
                    (l.preventDefault(),
                    (this._hasStartedDragging = !0),
                    this._ngZone.run(() => this._startDragSequence(l)));
                }
                return;
              }
              l.preventDefault();
              const h = this._getConstrainedPointerPosition(c);
              if (
                ((this._hasMoved = !0),
                (this._lastKnownPointerPosition = c),
                this._updatePointerDirectionDelta(h),
                this._dropContainer)
              )
                this._updateActiveDropContainer(h, c);
              else {
                const p = this.constrainPosition
                    ? this._initialClientRect
                    : this._pickupPositionOnPage,
                  m = this._activeTransform;
                (m.x = h.x - p.x + this._passiveTransform.x),
                  (m.y = h.y - p.y + this._passiveTransform.y),
                  this._applyRootElementTransform(m.x, m.y);
              }
              this._moveEvents.observers.length &&
                this._ngZone.run(() => {
                  this._moveEvents.next({
                    source: this,
                    pointerPosition: h,
                    event: l,
                    distance: this._getDragDistance(h),
                    delta: this._pointerDirectionDelta,
                  });
                });
            }),
            (this._pointerUp = (l) => {
              this._endDragSequence(l);
            }),
            (this._nativeDragStart = (l) => {
              if (this._handles.length) {
                const c = this._getTargetHandle(l);
                c &&
                  !this._disabledHandles.has(c) &&
                  !this.disabled &&
                  l.preventDefault();
              } else this.disabled || l.preventDefault();
            }),
            this.withRootElement(e).withParent(t.parentDragRef || null),
            (this._parentPositions = new ht(i)),
            a.registerDragItem(this);
        }
        getPlaceholderElement() {
          return this._placeholder;
        }
        getRootElement() {
          return this._rootElement;
        }
        getVisibleElement() {
          return this.isDragging()
            ? this.getPlaceholderElement()
            : this.getRootElement();
        }
        withHandles(e) {
          (this._handles = e.map((i) => (0, g.fI)(i))),
            this._handles.forEach((i) => y(i, this.disabled)),
            this._toggleNativeDragInteractions();
          const t = new Set();
          return (
            this._disabledHandles.forEach((i) => {
              this._handles.indexOf(i) > -1 && t.add(i);
            }),
            (this._disabledHandles = t),
            this
          );
        }
        withPreviewTemplate(e) {
          return (this._previewTemplate = e), this;
        }
        withPlaceholderTemplate(e) {
          return (this._placeholderTemplate = e), this;
        }
        withRootElement(e) {
          const t = (0, g.fI)(e);
          return (
            t !== this._rootElement &&
              (this._rootElement &&
                this._removeRootElementListeners(this._rootElement),
              this._ngZone.runOutsideAngular(() => {
                t.addEventListener("mousedown", this._pointerDown, k),
                  t.addEventListener("touchstart", this._pointerDown, mt),
                  t.addEventListener("dragstart", this._nativeDragStart, k);
              }),
              (this._initialTransform = void 0),
              (this._rootElement = t)),
            typeof SVGElement < "u" &&
              this._rootElement instanceof SVGElement &&
              (this._ownerSVGElement = this._rootElement.ownerSVGElement),
            this
          );
        }
        withBoundaryElement(e) {
          return (
            (this._boundaryElement = e ? (0, g.fI)(e) : null),
            this._resizeSubscription.unsubscribe(),
            e &&
              (this._resizeSubscription = this._viewportRuler
                .change(10)
                .subscribe(() => this._containInsideBoundaryOnResize())),
            this
          );
        }
        withParent(e) {
          return (this._parentDragRef = e), this;
        }
        dispose() {
          this._removeRootElementListeners(this._rootElement),
            this.isDragging() && this._rootElement?.remove(),
            this._anchor?.remove(),
            this._destroyPreview(),
            this._destroyPlaceholder(),
            this._dragDropRegistry.removeDragItem(this),
            this._removeSubscriptions(),
            this.beforeStarted.complete(),
            this.started.complete(),
            this.released.complete(),
            this.ended.complete(),
            this.entered.complete(),
            this.exited.complete(),
            this.dropped.complete(),
            this._moveEvents.complete(),
            (this._handles = []),
            this._disabledHandles.clear(),
            (this._dropContainer = void 0),
            this._resizeSubscription.unsubscribe(),
            this._parentPositions.clear(),
            (this._boundaryElement =
              this._rootElement =
              this._ownerSVGElement =
              this._placeholderTemplate =
              this._previewTemplate =
              this._anchor =
              this._parentDragRef =
                null);
        }
        isDragging() {
          return (
            this._hasStartedDragging && this._dragDropRegistry.isDragging(this)
          );
        }
        reset() {
          (this._rootElement.style.transform = this._initialTransform || ""),
            (this._activeTransform = { x: 0, y: 0 }),
            (this._passiveTransform = { x: 0, y: 0 });
        }
        disableHandle(e) {
          !this._disabledHandles.has(e) &&
            this._handles.indexOf(e) > -1 &&
            (this._disabledHandles.add(e), y(e, !0));
        }
        enableHandle(e) {
          this._disabledHandles.has(e) &&
            (this._disabledHandles.delete(e), y(e, this.disabled));
        }
        withDirection(e) {
          return (this._direction = e), this;
        }
        _withDropContainer(e) {
          this._dropContainer = e;
        }
        getFreeDragPosition() {
          const e = this.isDragging()
            ? this._activeTransform
            : this._passiveTransform;
          return { x: e.x, y: e.y };
        }
        setFreeDragPosition(e) {
          return (
            (this._activeTransform = { x: 0, y: 0 }),
            (this._passiveTransform.x = e.x),
            (this._passiveTransform.y = e.y),
            this._dropContainer || this._applyRootElementTransform(e.x, e.y),
            this
          );
        }
        withPreviewContainer(e) {
          return (this._previewContainer = e), this;
        }
        _sortFromLastPointerPosition() {
          const e = this._lastKnownPointerPosition;
          e &&
            this._dropContainer &&
            this._updateActiveDropContainer(
              this._getConstrainedPointerPosition(e),
              e,
            );
        }
        _removeSubscriptions() {
          this._pointerMoveSubscription.unsubscribe(),
            this._pointerUpSubscription.unsubscribe(),
            this._scrollSubscription.unsubscribe();
        }
        _destroyPreview() {
          this._preview?.remove(),
            this._previewRef?.destroy(),
            (this._preview = this._previewRef = null);
        }
        _destroyPlaceholder() {
          this._placeholder?.remove(),
            this._placeholderRef?.destroy(),
            (this._placeholder = this._placeholderRef = null);
        }
        _endDragSequence(e) {
          if (
            this._dragDropRegistry.isDragging(this) &&
            (this._removeSubscriptions(),
            this._dragDropRegistry.stopDragging(this),
            this._toggleNativeDragInteractions(),
            this._handles &&
              (this._rootElement.style.webkitTapHighlightColor =
                this._rootElementTapHighlight),
            this._hasStartedDragging)
          )
            if (
              (this.released.next({ source: this, event: e }),
              this._dropContainer)
            )
              this._dropContainer._stopScrolling(),
                this._animatePreviewToPlaceholder().then(() => {
                  this._cleanupDragArtifacts(e),
                    this._cleanupCachedDimensions(),
                    this._dragDropRegistry.stopDragging(this);
                });
            else {
              this._passiveTransform.x = this._activeTransform.x;
              const t = this._getPointerPositionOnPage(e);
              (this._passiveTransform.y = this._activeTransform.y),
                this._ngZone.run(() => {
                  this.ended.next({
                    source: this,
                    distance: this._getDragDistance(t),
                    dropPoint: t,
                    event: e,
                  });
                }),
                this._cleanupCachedDimensions(),
                this._dragDropRegistry.stopDragging(this);
            }
        }
        _startDragSequence(e) {
          T(e) && (this._lastTouchEventTime = Date.now()),
            this._toggleNativeDragInteractions();
          const t = this._dropContainer;
          if (t) {
            const i = this._rootElement,
              n = i.parentNode,
              r = (this._placeholder = this._createPlaceholderElement()),
              a = (this._anchor =
                this._anchor || this._document.createComment("")),
              l = this._getShadowRoot();
            n.insertBefore(a, i),
              (this._initialTransform = i.style.transform || ""),
              (this._preview = this._createPreviewElement()),
              at(i, !1, $),
              this._document.body.appendChild(n.replaceChild(r, i)),
              this._getPreviewInsertionPoint(n, l).appendChild(this._preview),
              this.started.next({ source: this, event: e }),
              t.start(),
              (this._initialContainer = t),
              (this._initialIndex = t.getItemIndex(this));
          } else
            this.started.next({ source: this, event: e }),
              (this._initialContainer = this._initialIndex = void 0);
          this._parentPositions.cache(t ? t.getScrollableParents() : []);
        }
        _initializeDragSequence(e, t) {
          this._parentDragRef && t.stopPropagation();
          const i = this.isDragging(),
            n = T(t),
            r = !n && 0 !== t.button,
            a = this._rootElement,
            l = (0, D.sA)(t),
            c =
              !n &&
              this._lastTouchEventTime &&
              this._lastTouchEventTime + 800 > Date.now(),
            h = n ? (0, st.yG)(t) : (0, st.X6)(t);
          if (
            (l && l.draggable && "mousedown" === t.type && t.preventDefault(),
            i || r || c || h)
          )
            return;
          if (this._handles.length) {
            const f = a.style;
            (this._rootElementTapHighlight = f.webkitTapHighlightColor || ""),
              (f.webkitTapHighlightColor = "transparent");
          }
          (this._hasStartedDragging = this._hasMoved = !1),
            this._removeSubscriptions(),
            (this._initialClientRect =
              this._rootElement.getBoundingClientRect()),
            (this._pointerMoveSubscription =
              this._dragDropRegistry.pointerMove.subscribe(this._pointerMove)),
            (this._pointerUpSubscription =
              this._dragDropRegistry.pointerUp.subscribe(this._pointerUp)),
            (this._scrollSubscription = this._dragDropRegistry
              .scrolled(this._getShadowRoot())
              .subscribe((f) => this._updateOnScroll(f))),
            this._boundaryElement &&
              (this._boundaryRect = B(this._boundaryElement));
          const p = this._previewTemplate;
          this._pickupPositionInElement =
            p && p.template && !p.matchSize
              ? { x: 0, y: 0 }
              : this._getPointerPositionInElement(
                  this._initialClientRect,
                  e,
                  t,
                );
          const m =
            (this._pickupPositionOnPage =
            this._lastKnownPointerPosition =
              this._getPointerPositionOnPage(t));
          (this._pointerDirectionDelta = { x: 0, y: 0 }),
            (this._pointerPositionAtLastDirectionChange = { x: m.x, y: m.y }),
            (this._dragStartTime = Date.now()),
            this._dragDropRegistry.startDragging(this, t);
        }
        _cleanupDragArtifacts(e) {
          at(this._rootElement, !0, $),
            this._anchor.parentNode.replaceChild(
              this._rootElement,
              this._anchor,
            ),
            this._destroyPreview(),
            this._destroyPlaceholder(),
            (this._initialClientRect =
              this._boundaryRect =
              this._previewRect =
              this._initialTransform =
                void 0),
            this._ngZone.run(() => {
              const t = this._dropContainer,
                i = t.getItemIndex(this),
                n = this._getPointerPositionOnPage(e),
                r = this._getDragDistance(n),
                a = t._isOverContainer(n.x, n.y);
              this.ended.next({
                source: this,
                distance: r,
                dropPoint: n,
                event: e,
              }),
                this.dropped.next({
                  item: this,
                  currentIndex: i,
                  previousIndex: this._initialIndex,
                  container: t,
                  previousContainer: this._initialContainer,
                  isPointerOverContainer: a,
                  distance: r,
                  dropPoint: n,
                  event: e,
                }),
                t.drop(
                  this,
                  i,
                  this._initialIndex,
                  this._initialContainer,
                  a,
                  r,
                  n,
                  e,
                ),
                (this._dropContainer = this._initialContainer);
            });
        }
        _updateActiveDropContainer({ x: e, y: t }, { x: i, y: n }) {
          let r = this._initialContainer._getSiblingContainerFromPosition(
            this,
            e,
            t,
          );
          !r &&
            this._dropContainer !== this._initialContainer &&
            this._initialContainer._isOverContainer(e, t) &&
            (r = this._initialContainer),
            r &&
              r !== this._dropContainer &&
              this._ngZone.run(() => {
                this.exited.next({
                  item: this,
                  container: this._dropContainer,
                }),
                  this._dropContainer.exit(this),
                  (this._dropContainer = r),
                  this._dropContainer.enter(
                    this,
                    e,
                    t,
                    r === this._initialContainer && r.sortingDisabled
                      ? this._initialIndex
                      : void 0,
                  ),
                  this.entered.next({
                    item: this,
                    container: r,
                    currentIndex: r.getItemIndex(this),
                  });
              }),
            this.isDragging() &&
              (this._dropContainer._startScrollingIfNecessary(i, n),
              this._dropContainer._sortItem(
                this,
                e,
                t,
                this._pointerDirectionDelta,
              ),
              this.constrainPosition
                ? this._applyPreviewTransform(e, t)
                : this._applyPreviewTransform(
                    e - this._pickupPositionInElement.x,
                    t - this._pickupPositionInElement.y,
                  ));
        }
        _createPreviewElement() {
          const e = this._previewTemplate,
            t = this.previewClass,
            i = e ? e.template : null;
          let n;
          if (i && e) {
            const r = e.matchSize ? this._initialClientRect : null,
              a = e.viewContainer.createEmbeddedView(i, e.context);
            a.detectChanges(),
              (n = ft(a, this._document)),
              (this._previewRef = a),
              e.matchSize
                ? vt(n, r)
                : (n.style.transform = L(
                    this._pickupPositionOnPage.x,
                    this._pickupPositionOnPage.y,
                  ));
          } else
            (n = dt(this._rootElement)),
              vt(n, this._initialClientRect),
              this._initialTransform &&
                (n.style.transform = this._initialTransform);
          return (
            Y(
              n.style,
              {
                "pointer-events": "none",
                margin: "0",
                position: "fixed",
                top: "0",
                left: "0",
                "z-index": `${this._config.zIndex || 1e3}`,
              },
              $,
            ),
            y(n, !1),
            n.classList.add("cdk-drag-preview"),
            n.setAttribute("dir", this._direction),
            t &&
              (Array.isArray(t)
                ? t.forEach((r) => n.classList.add(r))
                : n.classList.add(t)),
            n
          );
        }
        _animatePreviewToPlaceholder() {
          if (!this._hasMoved) return Promise.resolve();
          const e = this._placeholder.getBoundingClientRect();
          this._preview.classList.add("cdk-drag-animating"),
            this._applyPreviewTransform(e.left, e.top);
          const t = (function de(o) {
            const e = getComputedStyle(o),
              t = G(e, "transition-property"),
              i = t.find((l) => "transform" === l || "all" === l);
            if (!i) return 0;
            const n = t.indexOf(i),
              r = G(e, "transition-duration"),
              a = G(e, "transition-delay");
            return lt(r[n]) + lt(a[n]);
          })(this._preview);
          return 0 === t
            ? Promise.resolve()
            : this._ngZone.runOutsideAngular(
                () =>
                  new Promise((i) => {
                    const n = (a) => {
                        (!a ||
                          ((0, D.sA)(a) === this._preview &&
                            "transform" === a.propertyName)) &&
                          (this._preview?.removeEventListener(
                            "transitionend",
                            n,
                          ),
                          i(),
                          clearTimeout(r));
                      },
                      r = setTimeout(n, 1.5 * t);
                    this._preview.addEventListener("transitionend", n);
                  }),
              );
        }
        _createPlaceholderElement() {
          const e = this._placeholderTemplate,
            t = e ? e.template : null;
          let i;
          return (
            t
              ? ((this._placeholderRef = e.viewContainer.createEmbeddedView(
                  t,
                  e.context,
                )),
                this._placeholderRef.detectChanges(),
                (i = ft(this._placeholderRef, this._document)))
              : (i = dt(this._rootElement)),
            (i.style.pointerEvents = "none"),
            i.classList.add("cdk-drag-placeholder"),
            i
          );
        }
        _getPointerPositionInElement(e, t, i) {
          const n = t === this._rootElement ? null : t,
            r = n ? n.getBoundingClientRect() : e,
            a = T(i) ? i.targetTouches[0] : i,
            l = this._getViewportScrollPosition();
          return {
            x: r.left - e.left + (a.pageX - r.left - l.left),
            y: r.top - e.top + (a.pageY - r.top - l.top),
          };
        }
        _getPointerPositionOnPage(e) {
          const t = this._getViewportScrollPosition(),
            i = T(e)
              ? e.touches[0] || e.changedTouches[0] || { pageX: 0, pageY: 0 }
              : e,
            n = i.pageX - t.left,
            r = i.pageY - t.top;
          if (this._ownerSVGElement) {
            const a = this._ownerSVGElement.getScreenCTM();
            if (a) {
              const l = this._ownerSVGElement.createSVGPoint();
              return (l.x = n), (l.y = r), l.matrixTransform(a.inverse());
            }
          }
          return { x: n, y: r };
        }
        _getConstrainedPointerPosition(e) {
          const t = this._dropContainer ? this._dropContainer.lockAxis : null;
          let { x: i, y: n } = this.constrainPosition
            ? this.constrainPosition(
                e,
                this,
                this._initialClientRect,
                this._pickupPositionInElement,
              )
            : e;
          if (
            ("x" === this.lockAxis || "x" === t
              ? (n =
                  this._pickupPositionOnPage.y -
                  (this.constrainPosition
                    ? this._pickupPositionInElement.y
                    : 0))
              : ("y" === this.lockAxis || "y" === t) &&
                (i =
                  this._pickupPositionOnPage.x -
                  (this.constrainPosition
                    ? this._pickupPositionInElement.x
                    : 0)),
            this._boundaryRect)
          ) {
            const { x: r, y: a } = this.constrainPosition
                ? { x: 0, y: 0 }
                : this._pickupPositionInElement,
              l = this._boundaryRect,
              { width: c, height: h } = this._getPreviewRect(),
              p = l.top + a,
              m = l.bottom - (h - a);
            (i = _t(i, l.left + r, l.right - (c - r))), (n = _t(n, p, m));
          }
          return { x: i, y: n };
        }
        _updatePointerDirectionDelta(e) {
          const { x: t, y: i } = e,
            n = this._pointerDirectionDelta,
            r = this._pointerPositionAtLastDirectionChange,
            a = Math.abs(t - r.x),
            l = Math.abs(i - r.y);
          return (
            a > this._config.pointerDirectionChangeThreshold &&
              ((n.x = t > r.x ? 1 : -1), (r.x = t)),
            l > this._config.pointerDirectionChangeThreshold &&
              ((n.y = i > r.y ? 1 : -1), (r.y = i)),
            n
          );
        }
        _toggleNativeDragInteractions() {
          if (!this._rootElement || !this._handles) return;
          const e = this._handles.length > 0 || !this.isDragging();
          e !== this._nativeInteractionsEnabled &&
            ((this._nativeInteractionsEnabled = e), y(this._rootElement, e));
        }
        _removeRootElementListeners(e) {
          e.removeEventListener("mousedown", this._pointerDown, k),
            e.removeEventListener("touchstart", this._pointerDown, mt),
            e.removeEventListener("dragstart", this._nativeDragStart, k);
        }
        _applyRootElementTransform(e, t) {
          const i = L(e, t),
            n = this._rootElement.style;
          null == this._initialTransform &&
            (this._initialTransform =
              n.transform && "none" != n.transform ? n.transform : ""),
            (n.transform = A(i, this._initialTransform));
        }
        _applyPreviewTransform(e, t) {
          const i = this._previewTemplate?.template
              ? void 0
              : this._initialTransform,
            n = L(e, t);
          this._preview.style.transform = A(n, i);
        }
        _getDragDistance(e) {
          const t = this._pickupPositionOnPage;
          return t ? { x: e.x - t.x, y: e.y - t.y } : { x: 0, y: 0 };
        }
        _cleanupCachedDimensions() {
          (this._boundaryRect = this._previewRect = void 0),
            this._parentPositions.clear();
        }
        _containInsideBoundaryOnResize() {
          let { x: e, y: t } = this._passiveTransform;
          if (
            (0 === e && 0 === t) ||
            this.isDragging() ||
            !this._boundaryElement
          )
            return;
          const i = this._rootElement.getBoundingClientRect(),
            n = this._boundaryElement.getBoundingClientRect();
          if (
            (0 === n.width && 0 === n.height) ||
            (0 === i.width && 0 === i.height)
          )
            return;
          const r = n.left - i.left,
            a = i.right - n.right,
            l = n.top - i.top,
            c = i.bottom - n.bottom;
          n.width > i.width ? (r > 0 && (e += r), a > 0 && (e -= a)) : (e = 0),
            n.height > i.height
              ? (l > 0 && (t += l), c > 0 && (t -= c))
              : (t = 0),
            (e !== this._passiveTransform.x ||
              t !== this._passiveTransform.y) &&
              this.setFreeDragPosition({ y: t, x: e });
        }
        _getDragStartDelay(e) {
          const t = this.dragStartDelay;
          return "number" == typeof t ? t : T(e) ? t.touch : t ? t.mouse : 0;
        }
        _updateOnScroll(e) {
          const t = this._parentPositions.handleScroll(e);
          if (t) {
            const i = (0, D.sA)(e);
            this._boundaryRect &&
              i !== this._boundaryElement &&
              i.contains(this._boundaryElement) &&
              R(this._boundaryRect, t.top, t.left),
              (this._pickupPositionOnPage.x += t.left),
              (this._pickupPositionOnPage.y += t.top),
              this._dropContainer ||
                ((this._activeTransform.x -= t.left),
                (this._activeTransform.y -= t.top),
                this._applyRootElementTransform(
                  this._activeTransform.x,
                  this._activeTransform.y,
                ));
          }
        }
        _getViewportScrollPosition() {
          return (
            this._parentPositions.positions.get(this._document)
              ?.scrollPosition ||
            this._parentPositions.getViewportScrollPosition()
          );
        }
        _getShadowRoot() {
          return (
            void 0 === this._cachedShadowRoot &&
              (this._cachedShadowRoot = (0, D.kV)(this._rootElement)),
            this._cachedShadowRoot
          );
        }
        _getPreviewInsertionPoint(e, t) {
          const i = this._previewContainer || "global";
          if ("parent" === i) return e;
          if ("global" === i) {
            const n = this._document;
            return (
              t ||
              n.fullscreenElement ||
              n.webkitFullscreenElement ||
              n.mozFullScreenElement ||
              n.msFullscreenElement ||
              n.body
            );
          }
          return (0, g.fI)(i);
        }
        _getPreviewRect() {
          return (
            (!this._previewRect ||
              (!this._previewRect.width && !this._previewRect.height)) &&
              (this._previewRect = this._preview
                ? this._preview.getBoundingClientRect()
                : this._initialClientRect),
            this._previewRect
          );
        }
        _getTargetHandle(e) {
          return this._handles.find(
            (t) => e.target && (e.target === t || t.contains(e.target)),
          );
        }
      }
      function L(o, e) {
        return `translate3d(${Math.round(o)}px, ${Math.round(e)}px, 0)`;
      }
      function _t(o, e, t) {
        return Math.max(e, Math.min(t, o));
      }
      function T(o) {
        return "t" === o.type[0];
      }
      function ft(o, e) {
        const t = o.rootNodes;
        if (1 === t.length && t[0].nodeType === e.ELEMENT_NODE) return t[0];
        const i = e.createElement("div");
        return t.forEach((n) => i.appendChild(n)), i;
      }
      function vt(o, e) {
        (o.style.width = `${e.width}px`),
          (o.style.height = `${e.height}px`),
          (o.style.transform = L(e.left, e.top));
      }
      function E(o, e) {
        return Math.max(0, Math.min(e, o));
      }
      class _e {
        constructor(e, t) {
          (this._element = e),
            (this._dragDropRegistry = t),
            (this._itemPositions = []),
            (this.orientation = "vertical"),
            (this._previousSwap = { drag: null, delta: 0, overlaps: !1 });
        }
        start(e) {
          this.withItems(e);
        }
        sort(e, t, i, n) {
          const r = this._itemPositions,
            a = this._getItemIndexFromPointerPosition(e, t, i, n);
          if (-1 === a && r.length > 0) return null;
          const l = "horizontal" === this.orientation,
            c = r.findIndex((v) => v.drag === e),
            h = r[a],
            m = h.clientRect,
            f = c > a ? 1 : -1,
            b = this._getItemOffsetPx(r[c].clientRect, m, f),
            P = this._getSiblingOffsetPx(c, r, f),
            S = r.slice();
          return (
            (function me(o, e, t) {
              const i = E(e, o.length - 1),
                n = E(t, o.length - 1);
              if (i === n) return;
              const r = o[i],
                a = n < i ? -1 : 1;
              for (let l = i; l !== n; l += a) o[l] = o[l + a];
              o[n] = r;
            })(r, c, a),
            r.forEach((v, Ae) => {
              if (S[Ae] === v) return;
              const Rt = v.drag === e,
                j = Rt ? b : P,
                Tt = Rt ? e.getPlaceholderElement() : v.drag.getRootElement();
              (v.offset += j),
                l
                  ? ((Tt.style.transform = A(
                      `translate3d(${Math.round(v.offset)}px, 0, 0)`,
                      v.initialTransform,
                    )),
                    R(v.clientRect, 0, j))
                  : ((Tt.style.transform = A(
                      `translate3d(0, ${Math.round(v.offset)}px, 0)`,
                      v.initialTransform,
                    )),
                    R(v.clientRect, j, 0));
            }),
            (this._previousSwap.overlaps = V(m, t, i)),
            (this._previousSwap.drag = h.drag),
            (this._previousSwap.delta = l ? n.x : n.y),
            { previousIndex: c, currentIndex: a }
          );
        }
        enter(e, t, i, n) {
          const r =
              null == n || n < 0
                ? this._getItemIndexFromPointerPosition(e, t, i)
                : n,
            a = this._activeDraggables,
            l = a.indexOf(e),
            c = e.getPlaceholderElement();
          let h = a[r];
          if (
            (h === e && (h = a[r + 1]),
            !h &&
              (null == r || -1 === r || r < a.length - 1) &&
              this._shouldEnterAsFirstChild(t, i) &&
              (h = a[0]),
            l > -1 && a.splice(l, 1),
            h && !this._dragDropRegistry.isDragging(h))
          ) {
            const p = h.getRootElement();
            p.parentElement.insertBefore(c, p), a.splice(r, 0, e);
          } else (0, g.fI)(this._element).appendChild(c), a.push(e);
          (c.style.transform = ""), this._cacheItemPositions();
        }
        withItems(e) {
          (this._activeDraggables = e.slice()), this._cacheItemPositions();
        }
        withSortPredicate(e) {
          this._sortPredicate = e;
        }
        reset() {
          this._activeDraggables.forEach((e) => {
            const t = e.getRootElement();
            if (t) {
              const i = this._itemPositions.find(
                (n) => n.drag === e,
              )?.initialTransform;
              t.style.transform = i || "";
            }
          }),
            (this._itemPositions = []),
            (this._activeDraggables = []),
            (this._previousSwap.drag = null),
            (this._previousSwap.delta = 0),
            (this._previousSwap.overlaps = !1);
        }
        getActiveItemsSnapshot() {
          return this._activeDraggables;
        }
        getItemIndex(e) {
          return (
            "horizontal" === this.orientation && "rtl" === this.direction
              ? this._itemPositions.slice().reverse()
              : this._itemPositions
          ).findIndex((i) => i.drag === e);
        }
        updateOnScroll(e, t) {
          this._itemPositions.forEach(({ clientRect: i }) => {
            R(i, e, t);
          }),
            this._itemPositions.forEach(({ drag: i }) => {
              this._dragDropRegistry.isDragging(i) &&
                i._sortFromLastPointerPosition();
            });
        }
        _cacheItemPositions() {
          const e = "horizontal" === this.orientation;
          this._itemPositions = this._activeDraggables
            .map((t) => {
              const i = t.getVisibleElement();
              return {
                drag: t,
                offset: 0,
                initialTransform: i.style.transform || "",
                clientRect: B(i),
              };
            })
            .sort((t, i) =>
              e
                ? t.clientRect.left - i.clientRect.left
                : t.clientRect.top - i.clientRect.top,
            );
        }
        _getItemOffsetPx(e, t, i) {
          const n = "horizontal" === this.orientation;
          let r = n ? t.left - e.left : t.top - e.top;
          return (
            -1 === i && (r += n ? t.width - e.width : t.height - e.height), r
          );
        }
        _getSiblingOffsetPx(e, t, i) {
          const n = "horizontal" === this.orientation,
            r = t[e].clientRect,
            a = t[e + -1 * i];
          let l = r[n ? "width" : "height"] * i;
          if (a) {
            const c = n ? "left" : "top",
              h = n ? "right" : "bottom";
            -1 === i
              ? (l -= a.clientRect[c] - r[h])
              : (l += r[c] - a.clientRect[h]);
          }
          return l;
        }
        _shouldEnterAsFirstChild(e, t) {
          if (!this._activeDraggables.length) return !1;
          const i = this._itemPositions,
            n = "horizontal" === this.orientation;
          if (i[0].drag !== this._activeDraggables[0]) {
            const a = i[i.length - 1].clientRect;
            return n ? e >= a.right : t >= a.bottom;
          }
          {
            const a = i[0].clientRect;
            return n ? e <= a.left : t <= a.top;
          }
        }
        _getItemIndexFromPointerPosition(e, t, i, n) {
          const r = "horizontal" === this.orientation,
            a = this._itemPositions.findIndex(
              ({ drag: l, clientRect: c }) =>
                l !== e &&
                (!n ||
                  l !== this._previousSwap.drag ||
                  !this._previousSwap.overlaps ||
                  (r ? n.x : n.y) !== this._previousSwap.delta) &&
                (r
                  ? t >= Math.floor(c.left) && t < Math.floor(c.right)
                  : i >= Math.floor(c.top) && i < Math.floor(c.bottom)),
            );
          return -1 !== a && this._sortPredicate(a, e) ? a : -1;
        }
      }
      class fe {
        constructor(e, t, i, n, r) {
          (this._dragDropRegistry = t),
            (this._ngZone = n),
            (this._viewportRuler = r),
            (this.disabled = !1),
            (this.sortingDisabled = !1),
            (this.autoScrollDisabled = !1),
            (this.autoScrollStep = 2),
            (this.enterPredicate = () => !0),
            (this.sortPredicate = () => !0),
            (this.beforeStarted = new u.x()),
            (this.entered = new u.x()),
            (this.exited = new u.x()),
            (this.dropped = new u.x()),
            (this.sorted = new u.x()),
            (this.receivingStarted = new u.x()),
            (this.receivingStopped = new u.x()),
            (this._isDragging = !1),
            (this._draggables = []),
            (this._siblings = []),
            (this._activeSiblings = new Set()),
            (this._viewportScrollSubscription = x.w0.EMPTY),
            (this._verticalScrollDirection = 0),
            (this._horizontalScrollDirection = 0),
            (this._stopScrollTimers = new u.x()),
            (this._cachedShadowRoot = null),
            (this._startScrollInterval = () => {
              this._stopScrolling(),
                (function re(o = 0, e = ne.z) {
                  return o < 0 && (o = 0), (0, oe.H)(o, o, e);
                })(0, ae.Z)
                  .pipe((0, M.R)(this._stopScrollTimers))
                  .subscribe(() => {
                    const a = this._scrollNode,
                      l = this.autoScrollStep;
                    1 === this._verticalScrollDirection
                      ? a.scrollBy(0, -l)
                      : 2 === this._verticalScrollDirection && a.scrollBy(0, l),
                      1 === this._horizontalScrollDirection
                        ? a.scrollBy(-l, 0)
                        : 2 === this._horizontalScrollDirection &&
                          a.scrollBy(l, 0);
                  });
            }),
            (this.element = (0, g.fI)(e)),
            (this._document = i),
            this.withScrollableParents([this.element]),
            t.registerDropContainer(this),
            (this._parentPositions = new ht(i)),
            (this._sortStrategy = new _e(this.element, t)),
            this._sortStrategy.withSortPredicate((a, l) =>
              this.sortPredicate(a, l, this),
            );
        }
        dispose() {
          this._stopScrolling(),
            this._stopScrollTimers.complete(),
            this._viewportScrollSubscription.unsubscribe(),
            this.beforeStarted.complete(),
            this.entered.complete(),
            this.exited.complete(),
            this.dropped.complete(),
            this.sorted.complete(),
            this.receivingStarted.complete(),
            this.receivingStopped.complete(),
            this._activeSiblings.clear(),
            (this._scrollNode = null),
            this._parentPositions.clear(),
            this._dragDropRegistry.removeDropContainer(this);
        }
        isDragging() {
          return this._isDragging;
        }
        start() {
          this._draggingStarted(), this._notifyReceivingSiblings();
        }
        enter(e, t, i, n) {
          this._draggingStarted(),
            null == n &&
              this.sortingDisabled &&
              (n = this._draggables.indexOf(e)),
            this._sortStrategy.enter(e, t, i, n),
            this._cacheParentPositions(),
            this._notifyReceivingSiblings(),
            this.entered.next({
              item: e,
              container: this,
              currentIndex: this.getItemIndex(e),
            });
        }
        exit(e) {
          this._reset(), this.exited.next({ item: e, container: this });
        }
        drop(e, t, i, n, r, a, l, c = {}) {
          this._reset(),
            this.dropped.next({
              item: e,
              currentIndex: t,
              previousIndex: i,
              container: this,
              previousContainer: n,
              isPointerOverContainer: r,
              distance: a,
              dropPoint: l,
              event: c,
            });
        }
        withItems(e) {
          const t = this._draggables;
          return (
            (this._draggables = e),
            e.forEach((i) => i._withDropContainer(this)),
            this.isDragging() &&
              (t.filter((n) => n.isDragging()).every((n) => -1 === e.indexOf(n))
                ? this._reset()
                : this._sortStrategy.withItems(this._draggables)),
            this
          );
        }
        withDirection(e) {
          return (this._sortStrategy.direction = e), this;
        }
        connectedTo(e) {
          return (this._siblings = e.slice()), this;
        }
        withOrientation(e) {
          return (this._sortStrategy.orientation = e), this;
        }
        withScrollableParents(e) {
          const t = (0, g.fI)(this.element);
          return (
            (this._scrollableElements =
              -1 === e.indexOf(t) ? [t, ...e] : e.slice()),
            this
          );
        }
        getScrollableParents() {
          return this._scrollableElements;
        }
        getItemIndex(e) {
          return this._isDragging
            ? this._sortStrategy.getItemIndex(e)
            : this._draggables.indexOf(e);
        }
        isReceiving() {
          return this._activeSiblings.size > 0;
        }
        _sortItem(e, t, i, n) {
          if (
            this.sortingDisabled ||
            !this._clientRect ||
            !ct(this._clientRect, 0.05, t, i)
          )
            return;
          const r = this._sortStrategy.sort(e, t, i, n);
          r &&
            this.sorted.next({
              previousIndex: r.previousIndex,
              currentIndex: r.currentIndex,
              container: this,
              item: e,
            });
        }
        _startScrollingIfNecessary(e, t) {
          if (this.autoScrollDisabled) return;
          let i,
            n = 0,
            r = 0;
          if (
            (this._parentPositions.positions.forEach((a, l) => {
              l === this._document ||
                !a.clientRect ||
                i ||
                (ct(a.clientRect, 0.05, e, t) &&
                  (([n, r] = (function ve(o, e, t, i) {
                    const n = bt(e, i),
                      r = Pt(e, t);
                    let a = 0,
                      l = 0;
                    if (n) {
                      const c = o.scrollTop;
                      1 === n
                        ? c > 0 && (a = 1)
                        : o.scrollHeight - c > o.clientHeight && (a = 2);
                    }
                    if (r) {
                      const c = o.scrollLeft;
                      1 === r
                        ? c > 0 && (l = 1)
                        : o.scrollWidth - c > o.clientWidth && (l = 2);
                    }
                    return [a, l];
                  })(l, a.clientRect, e, t)),
                  (n || r) && (i = l)));
            }),
            !n && !r)
          ) {
            const { width: a, height: l } =
                this._viewportRuler.getViewportSize(),
              c = { width: a, height: l, top: 0, right: a, bottom: l, left: 0 };
            (n = bt(c, t)), (r = Pt(c, e)), (i = window);
          }
          i &&
            (n !== this._verticalScrollDirection ||
              r !== this._horizontalScrollDirection ||
              i !== this._scrollNode) &&
            ((this._verticalScrollDirection = n),
            (this._horizontalScrollDirection = r),
            (this._scrollNode = i),
            (n || r) && i
              ? this._ngZone.runOutsideAngular(this._startScrollInterval)
              : this._stopScrolling());
        }
        _stopScrolling() {
          this._stopScrollTimers.next();
        }
        _draggingStarted() {
          const e = (0, g.fI)(this.element).style;
          this.beforeStarted.next(),
            (this._isDragging = !0),
            (this._initialScrollSnap =
              e.msScrollSnapType || e.scrollSnapType || ""),
            (e.scrollSnapType = e.msScrollSnapType = "none"),
            this._sortStrategy.start(this._draggables),
            this._cacheParentPositions(),
            this._viewportScrollSubscription.unsubscribe(),
            this._listenToScrollEvents();
        }
        _cacheParentPositions() {
          const e = (0, g.fI)(this.element);
          this._parentPositions.cache(this._scrollableElements),
            (this._clientRect =
              this._parentPositions.positions.get(e).clientRect);
        }
        _reset() {
          this._isDragging = !1;
          const e = (0, g.fI)(this.element).style;
          (e.scrollSnapType = e.msScrollSnapType = this._initialScrollSnap),
            this._siblings.forEach((t) => t._stopReceiving(this)),
            this._sortStrategy.reset(),
            this._stopScrolling(),
            this._viewportScrollSubscription.unsubscribe(),
            this._parentPositions.clear();
        }
        _isOverContainer(e, t) {
          return null != this._clientRect && V(this._clientRect, e, t);
        }
        _getSiblingContainerFromPosition(e, t, i) {
          return this._siblings.find((n) => n._canReceive(e, t, i));
        }
        _canReceive(e, t, i) {
          if (
            !this._clientRect ||
            !V(this._clientRect, t, i) ||
            !this.enterPredicate(e, this)
          )
            return !1;
          const n = this._getShadowRoot().elementFromPoint(t, i);
          if (!n) return !1;
          const r = (0, g.fI)(this.element);
          return n === r || r.contains(n);
        }
        _startReceiving(e, t) {
          const i = this._activeSiblings;
          !i.has(e) &&
            t.every(
              (n) =>
                this.enterPredicate(n, this) ||
                this._draggables.indexOf(n) > -1,
            ) &&
            (i.add(e),
            this._cacheParentPositions(),
            this._listenToScrollEvents(),
            this.receivingStarted.next({
              initiator: e,
              receiver: this,
              items: t,
            }));
        }
        _stopReceiving(e) {
          this._activeSiblings.delete(e),
            this._viewportScrollSubscription.unsubscribe(),
            this.receivingStopped.next({ initiator: e, receiver: this });
        }
        _listenToScrollEvents() {
          this._viewportScrollSubscription = this._dragDropRegistry
            .scrolled(this._getShadowRoot())
            .subscribe((e) => {
              if (this.isDragging()) {
                const t = this._parentPositions.handleScroll(e);
                t && this._sortStrategy.updateOnScroll(t.top, t.left);
              } else this.isReceiving() && this._cacheParentPositions();
            });
        }
        _getShadowRoot() {
          if (!this._cachedShadowRoot) {
            const e = (0, D.kV)((0, g.fI)(this.element));
            this._cachedShadowRoot = e || this._document;
          }
          return this._cachedShadowRoot;
        }
        _notifyReceivingSiblings() {
          const e = this._sortStrategy
            .getActiveItemsSnapshot()
            .filter((t) => t.isDragging());
          this._siblings.forEach((t) => t._startReceiving(this, e));
        }
      }
      function bt(o, e) {
        const { top: t, bottom: i, height: n } = o,
          r = 0.05 * n;
        return e >= t - r && e <= t + r ? 1 : e >= i - r && e <= i + r ? 2 : 0;
      }
      function Pt(o, e) {
        const { left: t, right: i, width: n } = o,
          r = 0.05 * n;
        return e >= t - r && e <= t + r ? 1 : e >= i - r && e <= i + r ? 2 : 0;
      }
      const Z = (0, D.i$)({ passive: !1, capture: !0 });
      let De = (() => {
        class o {
          constructor(t, i) {
            (this._ngZone = t),
              (this._dropInstances = new Set()),
              (this._dragInstances = new Set()),
              (this._activeDragInstances = []),
              (this._globalListeners = new Map()),
              (this._draggingPredicate = (n) => n.isDragging()),
              (this.pointerMove = new u.x()),
              (this.pointerUp = new u.x()),
              (this.scroll = new u.x()),
              (this._preventDefaultWhileDragging = (n) => {
                this._activeDragInstances.length > 0 && n.preventDefault();
              }),
              (this._persistentTouchmoveListener = (n) => {
                this._activeDragInstances.length > 0 &&
                  (this._activeDragInstances.some(this._draggingPredicate) &&
                    n.preventDefault(),
                  this.pointerMove.next(n));
              }),
              (this._document = i);
          }
          registerDropContainer(t) {
            this._dropInstances.has(t) || this._dropInstances.add(t);
          }
          registerDragItem(t) {
            this._dragInstances.add(t),
              1 === this._dragInstances.size &&
                this._ngZone.runOutsideAngular(() => {
                  this._document.addEventListener(
                    "touchmove",
                    this._persistentTouchmoveListener,
                    Z,
                  );
                });
          }
          removeDropContainer(t) {
            this._dropInstances.delete(t);
          }
          removeDragItem(t) {
            this._dragInstances.delete(t),
              this.stopDragging(t),
              0 === this._dragInstances.size &&
                this._document.removeEventListener(
                  "touchmove",
                  this._persistentTouchmoveListener,
                  Z,
                );
          }
          startDragging(t, i) {
            if (
              !(this._activeDragInstances.indexOf(t) > -1) &&
              (this._activeDragInstances.push(t),
              1 === this._activeDragInstances.length)
            ) {
              const n = i.type.startsWith("touch");
              this._globalListeners
                .set(n ? "touchend" : "mouseup", {
                  handler: (r) => this.pointerUp.next(r),
                  options: !0,
                })
                .set("scroll", {
                  handler: (r) => this.scroll.next(r),
                  options: !0,
                })
                .set("selectstart", {
                  handler: this._preventDefaultWhileDragging,
                  options: Z,
                }),
                n ||
                  this._globalListeners.set("mousemove", {
                    handler: (r) => this.pointerMove.next(r),
                    options: Z,
                  }),
                this._ngZone.runOutsideAngular(() => {
                  this._globalListeners.forEach((r, a) => {
                    this._document.addEventListener(a, r.handler, r.options);
                  });
                });
            }
          }
          stopDragging(t) {
            const i = this._activeDragInstances.indexOf(t);
            i > -1 &&
              (this._activeDragInstances.splice(i, 1),
              0 === this._activeDragInstances.length &&
                this._clearGlobalListeners());
          }
          isDragging(t) {
            return this._activeDragInstances.indexOf(t) > -1;
          }
          scrolled(t) {
            const i = [this.scroll];
            return (
              t &&
                t !== this._document &&
                i.push(
                  new nt.y((n) =>
                    this._ngZone.runOutsideAngular(() => {
                      const a = (l) => {
                        this._activeDragInstances.length && n.next(l);
                      };
                      return (
                        t.addEventListener("scroll", a, !0),
                        () => {
                          t.removeEventListener("scroll", a, !0);
                        }
                      );
                    }),
                  ),
                ),
              (0, F.T)(...i)
            );
          }
          ngOnDestroy() {
            this._dragInstances.forEach((t) => this.removeDragItem(t)),
              this._dropInstances.forEach((t) => this.removeDropContainer(t)),
              this._clearGlobalListeners(),
              this.pointerMove.complete(),
              this.pointerUp.complete();
          }
          _clearGlobalListeners() {
            this._globalListeners.forEach((t, i) => {
              this._document.removeEventListener(i, t.handler, t.options);
            }),
              this._globalListeners.clear();
          }
          static #t = (this.ɵfac = function (i) {
            return new (i || o)(s.LFG(s.R0b), s.LFG(w.K0));
          });
          static #e = (this.ɵprov = s.Yz7({
            token: o,
            factory: o.ɵfac,
            providedIn: "root",
          }));
        }
        return o;
      })();
      const Ce = { dragStartThreshold: 5, pointerDirectionChangeThreshold: 5 };
      let q = (() => {
          class o {
            constructor(t, i, n, r) {
              (this._document = t),
                (this._ngZone = i),
                (this._viewportRuler = n),
                (this._dragDropRegistry = r);
            }
            createDrag(t, i = Ce) {
              return new ue(
                t,
                i,
                this._document,
                this._ngZone,
                this._viewportRuler,
                this._dragDropRegistry,
              );
            }
            createDropList(t) {
              return new fe(
                t,
                this._dragDropRegistry,
                this._document,
                this._ngZone,
                this._viewportRuler,
              );
            }
            static #t = (this.ɵfac = function (i) {
              return new (i || o)(
                s.LFG(w.K0),
                s.LFG(s.R0b),
                s.LFG(z.rL),
                s.LFG(De),
              );
            });
            static #e = (this.ɵprov = s.Yz7({
              token: o,
              factory: o.ɵfac,
              providedIn: "root",
            }));
          }
          return o;
        })(),
        Te = (() => {
          class o {
            static #t = (this.ɵfac = function (i) {
              return new (i || o)();
            });
            static #e = (this.ɵmod = s.oAB({ type: o }));
            static #i = (this.ɵinj = s.cJS({
              providers: [q],
              imports: [z.ZD],
            }));
          }
          return o;
        })();
      var Ee = d(8525),
        Ie = d(3680),
        Oe = d(6385);
      let Me = (() => {
        class o {
          static #t = (this.ɵfac = function (i) {
            return new (i || o)();
          });
          static #e = (this.ɵmod = s.oAB({ type: o }));
          static #i = (this.ɵinj = s.cJS({
            imports: [
              w.ez,
              Et.UX,
              ie,
              se.Hi,
              tt.QW,
              Te,
              et.Ps,
              H.lN,
              it.c,
              Ee.LD,
              O.ot,
              _.p0,
              N.TU,
              I.JX,
              Ie.Ng,
              C.Is,
              Oe.t,
            ],
          }));
        }
        return o;
      })();
    },
  },
]);
