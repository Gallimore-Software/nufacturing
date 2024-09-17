"use strict";
(self.webpackChunknufacturing = self.webpackChunknufacturing || []).push([
  [574],
  {
    2574: (ke, D, c) => {
      c.r(D), c.d(D, { InventoryModule: () => Ce });
      var g = c(6814),
        U = c(1896),
        m = c(5313),
        k = c(1476),
        A = c(3566),
        I = c(8077);
      I.kL.register(...I.zX);
      const X = I.kL;
      var r = c(6223),
        v = c(7700),
        t = c(5879),
        y = c(9157),
        S = c(2032),
        O = c(2296),
        d = c(3680),
        F = c(8525),
        N = c(6702),
        T = c(3651),
        b = c(7849),
        _ = c(2495),
        R = c(2831),
        h = c(6825),
        q = c(7394),
        j = c(8645),
        tt = c(4911),
        M = c(3019),
        et = c(2096),
        Z = c(2438),
        f = c(6028),
        it = c(8484),
        ot = c(7921),
        P = c(4664),
        w = c(8180),
        x = c(2181),
        nt = c(7398),
        at = c(9397),
        ct = c(6321),
        st = c(5211),
        lt = c(9360),
        rt = c(8251),
        dt = c(2420),
        ht = c(975),
        ut = c(1631),
        pt = c(4829);
      function E(o, l) {
        return l
          ? (e) =>
              (0, st.z)(
                l.pipe(
                  (0, w.q)(1),
                  (function mt() {
                    return (0, lt.e)((o, l) => {
                      o.subscribe((0, rt.x)(l, dt.Z));
                    });
                  })(),
                ),
                e.pipe(E(o)),
              )
          : (0, ut.z)((e, n) =>
              (0, pt.Xf)(o(e, n)).pipe((0, w.q)(1), (0, ht.h)(e)),
            );
      }
      var gt = c(4825),
        _t = c(9388);
      const vt = ["panel"];
      function bt(o, l) {
        if (1 & o) {
          const e = t.EpF();
          t.TgZ(0, "div", 0, 1),
            t.NdJ("@panelAnimation.done", function (i) {
              t.CHM(e);
              const a = t.oxw();
              return t.KtG(a._animationDone.next(i));
            }),
            t.Hsn(2),
            t.qZA();
        }
        if (2 & o) {
          const e = l.id,
            n = t.oxw();
          t.Q6J("id", n.id)("ngClass", n._classList)(
            "@panelAnimation",
            n.isOpen ? "visible" : "hidden",
          ),
            t.uIk("aria-label", n.ariaLabel || null)(
              "aria-labelledby",
              n._getPanelAriaLabelledby(e),
            );
        }
      }
      const yt = ["*"],
        wt = (0, h.X$)("panelAnimation", [
          (0, h.SB)(
            "void, hidden",
            (0, h.oB)({ opacity: 0, transform: "scaleY(0.8)" }),
          ),
          (0, h.eR)(":enter, hidden => visible", [
            (0, h.ru)([
              (0, h.jt)("0.03s linear", (0, h.oB)({ opacity: 1 })),
              (0, h.jt)(
                "0.12s cubic-bezier(0, 0, 0.2, 1)",
                (0, h.oB)({ transform: "scaleY(1)" }),
              ),
            ]),
          ]),
          (0, h.eR)(":leave, visible => hidden", [
            (0, h.jt)("0.075s linear", (0, h.oB)({ opacity: 0 })),
          ]),
        ]);
      let Ct = 0;
      class At {
        constructor(l, e) {
          (this.source = l), (this.option = e);
        }
      }
      const Ot = (0, d.Kr)(class {}),
        L = new t.OlP("mat-autocomplete-default-options", {
          providedIn: "root",
          factory: function Tt() {
            return {
              autoActiveFirstOption: !1,
              autoSelectActiveOption: !1,
              hideSingleSelectionIndicator: !1,
              requireSelection: !1,
            };
          },
        });
      let Mt = (() => {
          class o extends Ot {
            get isOpen() {
              return this._isOpen && this.showPanel;
            }
            _setColor(e) {
              (this._color = e), this._setThemeClasses(this._classList);
            }
            get autoActiveFirstOption() {
              return this._autoActiveFirstOption;
            }
            set autoActiveFirstOption(e) {
              this._autoActiveFirstOption = (0, _.Ig)(e);
            }
            get autoSelectActiveOption() {
              return this._autoSelectActiveOption;
            }
            set autoSelectActiveOption(e) {
              this._autoSelectActiveOption = (0, _.Ig)(e);
            }
            get requireSelection() {
              return this._requireSelection;
            }
            set requireSelection(e) {
              this._requireSelection = (0, _.Ig)(e);
            }
            set classList(e) {
              (this._classList =
                e && e.length
                  ? (0, _.du)(e).reduce((n, i) => ((n[i] = !0), n), {})
                  : {}),
                this._setVisibilityClasses(this._classList),
                this._setThemeClasses(this._classList),
                (this._elementRef.nativeElement.className = "");
            }
            constructor(e, n, i, a) {
              super(),
                (this._changeDetectorRef = e),
                (this._elementRef = n),
                (this._defaults = i),
                (this._activeOptionChanges = q.w0.EMPTY),
                (this.showPanel = !1),
                (this._isOpen = !1),
                (this.displayWith = null),
                (this.optionSelected = new t.vpe()),
                (this.opened = new t.vpe()),
                (this.closed = new t.vpe()),
                (this.optionActivated = new t.vpe()),
                (this._classList = {}),
                (this.id = "mat-autocomplete-" + Ct++),
                (this.inertGroups = a?.SAFARI || !1),
                (this._autoActiveFirstOption = !!i.autoActiveFirstOption),
                (this._autoSelectActiveOption = !!i.autoSelectActiveOption),
                (this._requireSelection = !!i.requireSelection);
            }
            ngAfterContentInit() {
              (this._keyManager = new b.s1(this.options)
                .withWrap()
                .skipPredicate(this._skipPredicate)),
                (this._activeOptionChanges = this._keyManager.change.subscribe(
                  (e) => {
                    this.isOpen &&
                      this.optionActivated.emit({
                        source: this,
                        option: this.options.toArray()[e] || null,
                      });
                  },
                )),
                this._setVisibility();
            }
            ngOnDestroy() {
              this._keyManager?.destroy(),
                this._activeOptionChanges.unsubscribe();
            }
            _setScrollTop(e) {
              this.panel && (this.panel.nativeElement.scrollTop = e);
            }
            _getScrollTop() {
              return this.panel ? this.panel.nativeElement.scrollTop : 0;
            }
            _setVisibility() {
              (this.showPanel = !!this.options.length),
                this._setVisibilityClasses(this._classList),
                this._changeDetectorRef.markForCheck();
            }
            _emitSelectEvent(e) {
              const n = new At(this, e);
              this.optionSelected.emit(n);
            }
            _getPanelAriaLabelledby(e) {
              return this.ariaLabel
                ? null
                : this.ariaLabelledby
                  ? (e ? e + " " : "") + this.ariaLabelledby
                  : e;
            }
            _setVisibilityClasses(e) {
              (e[this._visibleClass] = this.showPanel),
                (e[this._hiddenClass] = !this.showPanel);
            }
            _setThemeClasses(e) {
              (e["mat-primary"] = "primary" === this._color),
                (e["mat-warn"] = "warn" === this._color),
                (e["mat-accent"] = "accent" === this._color);
            }
            _skipPredicate(e) {
              return e.disabled;
            }
            static #t = (this.ɵfac = function (n) {
              return new (n || o)(
                t.Y36(t.sBO),
                t.Y36(t.SBq),
                t.Y36(L),
                t.Y36(R.t4),
              );
            });
            static #e = (this.ɵdir = t.lG2({
              type: o,
              viewQuery: function (n, i) {
                if ((1 & n && (t.Gf(t.Rgc, 7), t.Gf(vt, 5)), 2 & n)) {
                  let a;
                  t.iGM((a = t.CRH())) && (i.template = a.first),
                    t.iGM((a = t.CRH())) && (i.panel = a.first);
                }
              },
              inputs: {
                ariaLabel: ["aria-label", "ariaLabel"],
                ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
                displayWith: "displayWith",
                autoActiveFirstOption: "autoActiveFirstOption",
                autoSelectActiveOption: "autoSelectActiveOption",
                requireSelection: "requireSelection",
                panelWidth: "panelWidth",
                classList: ["class", "classList"],
              },
              outputs: {
                optionSelected: "optionSelected",
                opened: "opened",
                closed: "closed",
                optionActivated: "optionActivated",
              },
              features: [t.qOj],
            }));
          }
          return o;
        })(),
        kt = (() => {
          class o extends Mt {
            constructor() {
              super(...arguments),
                (this._visibleClass = "mat-mdc-autocomplete-visible"),
                (this._hiddenClass = "mat-mdc-autocomplete-hidden"),
                (this._animationDone = new t.vpe()),
                (this._hideSingleSelectionIndicator =
                  this._defaults.hideSingleSelectionIndicator ?? !1);
            }
            get hideSingleSelectionIndicator() {
              return this._hideSingleSelectionIndicator;
            }
            set hideSingleSelectionIndicator(e) {
              (this._hideSingleSelectionIndicator = (0, _.Ig)(e)),
                this._syncParentProperties();
            }
            _syncParentProperties() {
              if (this.options)
                for (const e of this.options)
                  e._changeDetectorRef.markForCheck();
            }
            ngOnDestroy() {
              super.ngOnDestroy(), this._animationDone.complete();
            }
            _skipPredicate(e) {
              return !1;
            }
            static #t = (this.ɵfac = (function () {
              let e;
              return function (i) {
                return (e || (e = t.n5z(o)))(i || o);
              };
            })());
            static #e = (this.ɵcmp = t.Xpm({
              type: o,
              selectors: [["mat-autocomplete"]],
              contentQueries: function (n, i, a) {
                if ((1 & n && (t.Suo(a, d.K7, 5), t.Suo(a, d.ey, 5)), 2 & n)) {
                  let s;
                  t.iGM((s = t.CRH())) && (i.optionGroups = s),
                    t.iGM((s = t.CRH())) && (i.options = s);
                }
              },
              hostAttrs: ["ngSkipHydration", "", 1, "mat-mdc-autocomplete"],
              inputs: {
                disableRipple: "disableRipple",
                hideSingleSelectionIndicator: "hideSingleSelectionIndicator",
              },
              exportAs: ["matAutocomplete"],
              features: [t._Bn([{ provide: d.HF, useExisting: o }]), t.qOj],
              ngContentSelectors: yt,
              decls: 1,
              vars: 0,
              consts: [
                [
                  "role",
                  "listbox",
                  1,
                  "mat-mdc-autocomplete-panel",
                  "mdc-menu-surface",
                  "mdc-menu-surface--open",
                  3,
                  "id",
                  "ngClass",
                ],
                ["panel", ""],
              ],
              template: function (n, i) {
                1 & n && (t.F$t(), t.YNc(0, bt, 3, 5, "ng-template"));
              },
              dependencies: [g.mk],
              styles: [
                "div.mat-mdc-autocomplete-panel{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);width:100%;max-height:256px;visibility:hidden;transform-origin:center top;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:static;background-color:var(--mat-autocomplete-background-color)}.cdk-high-contrast-active div.mat-mdc-autocomplete-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden}mat-autocomplete{display:none}",
              ],
              encapsulation: 2,
              data: { animation: [wt] },
              changeDetection: 0,
            }));
          }
          return o;
        })();
      const It = { provide: r.JU, useExisting: (0, t.Gpc)(() => B), multi: !0 },
        Y = new t.OlP("mat-autocomplete-scroll-strategy"),
        Zt = {
          provide: Y,
          deps: [T.aV],
          useFactory: function St(o) {
            return () => o.scrollStrategies.reposition();
          },
        };
      let Pt = (() => {
          class o {
            get autocompleteDisabled() {
              return this._autocompleteDisabled;
            }
            set autocompleteDisabled(e) {
              this._autocompleteDisabled = (0, _.Ig)(e);
            }
            constructor(e, n, i, a, s, u, C, W, Ae, Oe, Te) {
              (this._element = e),
                (this._overlay = n),
                (this._viewContainerRef = i),
                (this._zone = a),
                (this._changeDetectorRef = s),
                (this._dir = C),
                (this._formField = W),
                (this._document = Ae),
                (this._viewportRuler = Oe),
                (this._defaults = Te),
                (this._componentDestroyed = !1),
                (this._autocompleteDisabled = !1),
                (this._manuallyFloatingLabel = !1),
                (this._viewportSubscription = q.w0.EMPTY),
                (this._canOpenOnNextFocus = !0),
                (this._closeKeyEventStream = new j.x()),
                (this._windowBlurHandler = () => {
                  this._canOpenOnNextFocus =
                    this._document.activeElement !==
                      this._element.nativeElement || this.panelOpen;
                }),
                (this._onChange = () => {}),
                (this._onTouched = () => {}),
                (this.position = "auto"),
                (this.autocompleteAttribute = "off"),
                (this._overlayAttached = !1),
                (this.optionSelections = (0, tt.P)(() => {
                  const p = this.autocomplete
                    ? this.autocomplete.options
                    : null;
                  return p
                    ? p.changes.pipe(
                        (0, ot.O)(p),
                        (0, P.w)(() =>
                          (0, M.T)(...p.map((Me) => Me.onSelectionChange)),
                        ),
                      )
                    : this._zone.onStable.pipe(
                        (0, w.q)(1),
                        (0, P.w)(() => this.optionSelections),
                      );
                })),
                (this._handlePanelKeydown = (p) => {
                  ((p.keyCode === f.hY && !(0, f.Vb)(p)) ||
                    (p.keyCode === f.LH && (0, f.Vb)(p, "altKey"))) &&
                    (this._pendingAutoselectedOption &&
                      (this._updateNativeInputValue(
                        this._valueBeforeAutoSelection ?? "",
                      ),
                      (this._pendingAutoselectedOption = null)),
                    this._closeKeyEventStream.next(),
                    this._resetActiveItem(),
                    p.stopPropagation(),
                    p.preventDefault());
                }),
                (this._trackedModal = null),
                (this._scrollStrategy = u);
            }
            ngAfterViewInit() {
              const e = this._getWindow();
              typeof e < "u" &&
                this._zone.runOutsideAngular(() =>
                  e.addEventListener("blur", this._windowBlurHandler),
                );
            }
            ngOnChanges(e) {
              e.position &&
                this._positionStrategy &&
                (this._setStrategyPositions(this._positionStrategy),
                this.panelOpen && this._overlayRef.updatePosition());
            }
            ngOnDestroy() {
              const e = this._getWindow();
              typeof e < "u" &&
                e.removeEventListener("blur", this._windowBlurHandler),
                this._viewportSubscription.unsubscribe(),
                (this._componentDestroyed = !0),
                this._destroyPanel(),
                this._closeKeyEventStream.complete(),
                this._clearFromModal();
            }
            get panelOpen() {
              return this._overlayAttached && this.autocomplete.showPanel;
            }
            openPanel() {
              this._attachOverlay(),
                this._floatLabel(),
                this._trackedModal &&
                  (0, b.Zf)(
                    this._trackedModal,
                    "aria-owns",
                    this.autocomplete.id,
                  );
            }
            closePanel() {
              this._resetLabel(),
                this._overlayAttached &&
                  (this.panelOpen &&
                    this._zone.run(() => {
                      this.autocomplete.closed.emit();
                    }),
                  (this.autocomplete._isOpen = this._overlayAttached = !1),
                  (this._pendingAutoselectedOption = null),
                  this._overlayRef &&
                    this._overlayRef.hasAttached() &&
                    (this._overlayRef.detach(),
                    this._closingActionsSubscription.unsubscribe()),
                  this._updatePanelState(),
                  this._componentDestroyed ||
                    this._changeDetectorRef.detectChanges(),
                  this._trackedModal) &&
                  (0, b.iD)(
                    this._trackedModal,
                    "aria-owns",
                    this.autocomplete.id,
                  );
            }
            updatePosition() {
              this._overlayAttached && this._overlayRef.updatePosition();
            }
            get panelClosingActions() {
              return (0, M.T)(
                this.optionSelections,
                this.autocomplete._keyManager.tabOut.pipe(
                  (0, x.h)(() => this._overlayAttached),
                ),
                this._closeKeyEventStream,
                this._getOutsideClickStream(),
                this._overlayRef
                  ? this._overlayRef
                      .detachments()
                      .pipe((0, x.h)(() => this._overlayAttached))
                  : (0, et.of)(),
              ).pipe((0, nt.U)((e) => (e instanceof d.rN ? e : null)));
            }
            get activeOption() {
              return this.autocomplete && this.autocomplete._keyManager
                ? this.autocomplete._keyManager.activeItem
                : null;
            }
            _getOutsideClickStream() {
              return (0, M.T)(
                (0, Z.R)(this._document, "click"),
                (0, Z.R)(this._document, "auxclick"),
                (0, Z.R)(this._document, "touchend"),
              ).pipe(
                (0, x.h)((e) => {
                  const n = (0, R.sA)(e),
                    i = this._formField
                      ? this._formField._elementRef.nativeElement
                      : null,
                    a = this.connectedTo
                      ? this.connectedTo.elementRef.nativeElement
                      : null;
                  return (
                    this._overlayAttached &&
                    n !== this._element.nativeElement &&
                    this._document.activeElement !==
                      this._element.nativeElement &&
                    (!i || !i.contains(n)) &&
                    (!a || !a.contains(n)) &&
                    !!this._overlayRef &&
                    !this._overlayRef.overlayElement.contains(n)
                  );
                }),
              );
            }
            writeValue(e) {
              Promise.resolve(null).then(() => this._assignOptionValue(e));
            }
            registerOnChange(e) {
              this._onChange = e;
            }
            registerOnTouched(e) {
              this._onTouched = e;
            }
            setDisabledState(e) {
              this._element.nativeElement.disabled = e;
            }
            _handleKeydown(e) {
              const n = e.keyCode,
                i = (0, f.Vb)(e);
              if (
                (n === f.hY && !i && e.preventDefault(),
                this.activeOption && n === f.K5 && this.panelOpen && !i)
              )
                this.activeOption._selectViaInteraction(),
                  this._resetActiveItem(),
                  e.preventDefault();
              else if (this.autocomplete) {
                const a = this.autocomplete._keyManager.activeItem,
                  s = n === f.LH || n === f.JH;
                n === f.Mf || (s && !i && this.panelOpen)
                  ? this.autocomplete._keyManager.onKeydown(e)
                  : s && this._canOpen() && this.openPanel(),
                  (s || this.autocomplete._keyManager.activeItem !== a) &&
                    (this._scrollToOption(
                      this.autocomplete._keyManager.activeItemIndex || 0,
                    ),
                    this.autocomplete.autoSelectActiveOption &&
                      this.activeOption &&
                      (this._pendingAutoselectedOption ||
                        (this._valueBeforeAutoSelection =
                          this._element.nativeElement.value),
                      (this._pendingAutoselectedOption = this.activeOption),
                      this._assignOptionValue(this.activeOption.value)));
              }
            }
            _handleInput(e) {
              let n = e.target,
                i = n.value;
              "number" === n.type && (i = "" == i ? null : parseFloat(i)),
                this._previousValue !== i &&
                  ((this._previousValue = i),
                  (this._pendingAutoselectedOption = null),
                  (!this.autocomplete || !this.autocomplete.requireSelection) &&
                    this._onChange(i),
                  i || this._clearPreviousSelectedOption(null, !1),
                  this._canOpen() &&
                    this._document.activeElement === e.target &&
                    this.openPanel());
            }
            _handleFocus() {
              this._canOpenOnNextFocus
                ? this._canOpen() &&
                  ((this._previousValue = this._element.nativeElement.value),
                  this._attachOverlay(),
                  this._floatLabel(!0))
                : (this._canOpenOnNextFocus = !0);
            }
            _handleClick() {
              this._canOpen() && !this.panelOpen && this.openPanel();
            }
            _floatLabel(e = !1) {
              this._formField &&
                "auto" === this._formField.floatLabel &&
                (e
                  ? this._formField._animateAndLockLabel()
                  : (this._formField.floatLabel = "always"),
                (this._manuallyFloatingLabel = !0));
            }
            _resetLabel() {
              this._manuallyFloatingLabel &&
                (this._formField && (this._formField.floatLabel = "auto"),
                (this._manuallyFloatingLabel = !1));
            }
            _subscribeToClosingActions() {
              const e = this._zone.onStable.pipe((0, w.q)(1)),
                n = this.autocomplete.options.changes.pipe(
                  (0, at.b)(() => this._positionStrategy.reapplyLastPosition()),
                  (function ft(o, l = ct.z) {
                    const e = (0, gt.H)(o, l);
                    return E(() => e);
                  })(0),
                );
              return (0, M.T)(e, n)
                .pipe(
                  (0, P.w)(
                    () => (
                      this._zone.run(() => {
                        const i = this.panelOpen;
                        this._resetActiveItem(),
                          this._updatePanelState(),
                          this._changeDetectorRef.detectChanges(),
                          this.panelOpen && this._overlayRef.updatePosition(),
                          i !== this.panelOpen &&
                            (this.panelOpen
                              ? (this._captureValueOnAttach(),
                                this._emitOpened())
                              : this.autocomplete.closed.emit());
                      }),
                      this.panelClosingActions
                    ),
                  ),
                  (0, w.q)(1),
                )
                .subscribe((i) => this._setValueAndClose(i));
            }
            _emitOpened() {
              this.autocomplete.opened.emit();
            }
            _captureValueOnAttach() {
              this._valueOnAttach = this._element.nativeElement.value;
            }
            _destroyPanel() {
              this._overlayRef &&
                (this.closePanel(),
                this._overlayRef.dispose(),
                (this._overlayRef = null));
            }
            _assignOptionValue(e) {
              const n =
                this.autocomplete && this.autocomplete.displayWith
                  ? this.autocomplete.displayWith(e)
                  : e;
              this._updateNativeInputValue(n ?? "");
            }
            _updateNativeInputValue(e) {
              this._formField
                ? (this._formField._control.value = e)
                : (this._element.nativeElement.value = e),
                (this._previousValue = e);
            }
            _setValueAndClose(e) {
              const n = this.autocomplete,
                i = e ? e.source : this._pendingAutoselectedOption;
              i
                ? (this._clearPreviousSelectedOption(i),
                  this._assignOptionValue(i.value),
                  this._onChange(i.value),
                  n._emitSelectEvent(i),
                  this._element.nativeElement.focus())
                : n.requireSelection &&
                  this._element.nativeElement.value !== this._valueOnAttach &&
                  (this._clearPreviousSelectedOption(null),
                  this._assignOptionValue(null),
                  n._animationDone
                    ? n._animationDone
                        .pipe((0, w.q)(1))
                        .subscribe(() => this._onChange(null))
                    : this._onChange(null)),
                this.closePanel();
            }
            _clearPreviousSelectedOption(e, n) {
              this.autocomplete?.options?.forEach((i) => {
                i !== e && i.selected && i.deselect(n);
              });
            }
            _attachOverlay() {
              let e = this._overlayRef;
              e
                ? (this._positionStrategy.setOrigin(
                    this._getConnectedElement(),
                  ),
                  e.updateSize({ width: this._getPanelWidth() }))
                : ((this._portal = new it.UE(
                    this.autocomplete.template,
                    this._viewContainerRef,
                    { id: this._formField?.getLabelId() },
                  )),
                  (e = this._overlay.create(this._getOverlayConfig())),
                  (this._overlayRef = e),
                  (this._viewportSubscription = this._viewportRuler
                    .change()
                    .subscribe(() => {
                      this.panelOpen &&
                        e &&
                        e.updateSize({ width: this._getPanelWidth() });
                    }))),
                e &&
                  !e.hasAttached() &&
                  (e.attach(this._portal),
                  (this._closingActionsSubscription =
                    this._subscribeToClosingActions()));
              const n = this.panelOpen;
              (this.autocomplete._isOpen = this._overlayAttached = !0),
                this.autocomplete._setColor(this._formField?.color),
                this._updatePanelState(),
                this._applyModalPanelOwnership(),
                this._captureValueOnAttach(),
                this.panelOpen && n !== this.panelOpen && this._emitOpened();
            }
            _updatePanelState() {
              if ((this.autocomplete._setVisibility(), this.panelOpen)) {
                const e = this._overlayRef;
                this._keydownSubscription ||
                  (this._keydownSubscription = e
                    .keydownEvents()
                    .subscribe(this._handlePanelKeydown)),
                  this._outsideClickSubscription ||
                    (this._outsideClickSubscription = e
                      .outsidePointerEvents()
                      .subscribe());
              } else
                this._keydownSubscription?.unsubscribe(),
                  this._outsideClickSubscription?.unsubscribe(),
                  (this._keydownSubscription = this._outsideClickSubscription =
                    null);
            }
            _getOverlayConfig() {
              return new T.X_({
                positionStrategy: this._getOverlayPosition(),
                scrollStrategy: this._scrollStrategy(),
                width: this._getPanelWidth(),
                direction: this._dir ?? void 0,
                panelClass: this._defaults?.overlayPanelClass,
              });
            }
            _getOverlayPosition() {
              const e = this._overlay
                .position()
                .flexibleConnectedTo(this._getConnectedElement())
                .withFlexibleDimensions(!1)
                .withPush(!1);
              return (
                this._setStrategyPositions(e), (this._positionStrategy = e), e
              );
            }
            _setStrategyPositions(e) {
              const n = [
                  {
                    originX: "start",
                    originY: "bottom",
                    overlayX: "start",
                    overlayY: "top",
                  },
                  {
                    originX: "end",
                    originY: "bottom",
                    overlayX: "end",
                    overlayY: "top",
                  },
                ],
                i = this._aboveClass,
                a = [
                  {
                    originX: "start",
                    originY: "top",
                    overlayX: "start",
                    overlayY: "bottom",
                    panelClass: i,
                  },
                  {
                    originX: "end",
                    originY: "top",
                    overlayX: "end",
                    overlayY: "bottom",
                    panelClass: i,
                  },
                ];
              let s;
              (s =
                "above" === this.position
                  ? a
                  : "below" === this.position
                    ? n
                    : [...n, ...a]),
                e.withPositions(s);
            }
            _getConnectedElement() {
              return this.connectedTo
                ? this.connectedTo.elementRef
                : this._formField
                  ? this._formField.getConnectedOverlayOrigin()
                  : this._element;
            }
            _getPanelWidth() {
              return this.autocomplete.panelWidth || this._getHostWidth();
            }
            _getHostWidth() {
              return this._getConnectedElement().nativeElement.getBoundingClientRect()
                .width;
            }
            _resetActiveItem() {
              const e = this.autocomplete;
              if (e.autoActiveFirstOption) {
                let n = -1;
                for (let i = 0; i < e.options.length; i++)
                  if (!e.options.get(i).disabled) {
                    n = i;
                    break;
                  }
                e._keyManager.setActiveItem(n);
              } else e._keyManager.setActiveItem(-1);
            }
            _canOpen() {
              const e = this._element.nativeElement;
              return !e.readOnly && !e.disabled && !this._autocompleteDisabled;
            }
            _getWindow() {
              return this._document?.defaultView || window;
            }
            _scrollToOption(e) {
              const n = this.autocomplete,
                i = (0, d.CB)(e, n.options, n.optionGroups);
              if (0 === e && 1 === i) n._setScrollTop(0);
              else if (n.panel) {
                const a = n.options.toArray()[e];
                if (a) {
                  const s = a._getHostElement(),
                    u = (0, d.jH)(
                      s.offsetTop,
                      s.offsetHeight,
                      n._getScrollTop(),
                      n.panel.nativeElement.offsetHeight,
                    );
                  n._setScrollTop(u);
                }
              }
            }
            _applyModalPanelOwnership() {
              const e = this._element.nativeElement.closest(
                'body > .cdk-overlay-container [aria-modal="true"]',
              );
              if (!e) return;
              const n = this.autocomplete.id;
              this._trackedModal &&
                (0, b.iD)(this._trackedModal, "aria-owns", n),
                (0, b.Zf)(e, "aria-owns", n),
                (this._trackedModal = e);
            }
            _clearFromModal() {
              this._trackedModal &&
                ((0, b.iD)(
                  this._trackedModal,
                  "aria-owns",
                  this.autocomplete.id,
                ),
                (this._trackedModal = null));
            }
            static #t = (this.ɵfac = function (n) {
              return new (n || o)(
                t.Y36(t.SBq),
                t.Y36(T.aV),
                t.Y36(t.s_b),
                t.Y36(t.R0b),
                t.Y36(t.sBO),
                t.Y36(Y),
                t.Y36(_t.Is, 8),
                t.Y36(y.G_, 9),
                t.Y36(g.K0, 8),
                t.Y36(N.rL),
                t.Y36(L, 8),
              );
            });
            static #e = (this.ɵdir = t.lG2({
              type: o,
              inputs: {
                autocomplete: ["matAutocomplete", "autocomplete"],
                position: ["matAutocompletePosition", "position"],
                connectedTo: ["matAutocompleteConnectedTo", "connectedTo"],
                autocompleteAttribute: [
                  "autocomplete",
                  "autocompleteAttribute",
                ],
                autocompleteDisabled: [
                  "matAutocompleteDisabled",
                  "autocompleteDisabled",
                ],
              },
              features: [t.TTD],
            }));
          }
          return o;
        })(),
        B = (() => {
          class o extends Pt {
            constructor() {
              super(...arguments),
                (this._aboveClass = "mat-mdc-autocomplete-panel-above");
            }
            static #t = (this.ɵfac = (function () {
              let e;
              return function (i) {
                return (e || (e = t.n5z(o)))(i || o);
              };
            })());
            static #e = (this.ɵdir = t.lG2({
              type: o,
              selectors: [
                ["input", "matAutocomplete", ""],
                ["textarea", "matAutocomplete", ""],
              ],
              hostAttrs: [1, "mat-mdc-autocomplete-trigger"],
              hostVars: 7,
              hostBindings: function (n, i) {
                1 & n &&
                  t.NdJ("focusin", function () {
                    return i._handleFocus();
                  })("blur", function () {
                    return i._onTouched();
                  })("input", function (s) {
                    return i._handleInput(s);
                  })("keydown", function (s) {
                    return i._handleKeydown(s);
                  })("click", function () {
                    return i._handleClick();
                  }),
                  2 & n &&
                    t.uIk("autocomplete", i.autocompleteAttribute)(
                      "role",
                      i.autocompleteDisabled ? null : "combobox",
                    )(
                      "aria-autocomplete",
                      i.autocompleteDisabled ? null : "list",
                    )(
                      "aria-activedescendant",
                      i.panelOpen && i.activeOption ? i.activeOption.id : null,
                    )(
                      "aria-expanded",
                      i.autocompleteDisabled ? null : i.panelOpen.toString(),
                    )(
                      "aria-controls",
                      i.autocompleteDisabled ||
                        !i.panelOpen ||
                        null == i.autocomplete
                        ? null
                        : i.autocomplete.id,
                    )(
                      "aria-haspopup",
                      i.autocompleteDisabled ? null : "listbox",
                    );
              },
              exportAs: ["matAutocompleteTrigger"],
              features: [t._Bn([It]), t.qOj],
            }));
          }
          return o;
        })(),
        xt = (() => {
          class o {
            static #t = (this.ɵfac = function (n) {
              return new (n || o)();
            });
            static #e = (this.ɵmod = t.oAB({ type: o }));
            static #i = (this.ɵinj = t.cJS({
              providers: [Zt],
              imports: [T.U8, d.Ng, d.BQ, g.ez, N.ZD, d.Ng, d.BQ],
            }));
          }
          return o;
        })();
      const Dt = ["switch"];
      function Ut(o, l) {
        1 & o &&
          (t.TgZ(0, "div", 12),
          t.O4$(),
          t.TgZ(1, "svg", 13),
          t._UZ(2, "path", 14),
          t.qZA(),
          t.TgZ(3, "svg", 15),
          t._UZ(4, "path", 16),
          t.qZA()());
      }
      const Ft = ["*"],
        Nt = new t.OlP("mat-slide-toggle-default-options", {
          providedIn: "root",
          factory: () => ({ disableToggleValue: !1, hideIcon: !1 }),
        }),
        Rt = { provide: r.JU, useExisting: (0, t.Gpc)(() => z), multi: !0 };
      class Q {
        constructor(l, e) {
          (this.source = l), (this.checked = e);
        }
      }
      let qt = 0;
      const Et = (0, d.sb)(
        (0, d.pj)(
          (0, d.Kr)(
            (0, d.Id)(
              class {
                constructor(o) {
                  this._elementRef = o;
                }
              },
            ),
          ),
        ),
      );
      let Lt = (() => {
          class o extends Et {
            get required() {
              return this._required;
            }
            set required(e) {
              this._required = (0, _.Ig)(e);
            }
            get checked() {
              return this._checked;
            }
            set checked(e) {
              (this._checked = (0, _.Ig)(e)),
                this._changeDetectorRef.markForCheck();
            }
            get hideIcon() {
              return this._hideIcon;
            }
            set hideIcon(e) {
              this._hideIcon = (0, _.Ig)(e);
            }
            get inputId() {
              return `${this.id || this._uniqueId}-input`;
            }
            constructor(e, n, i, a, s, u, C) {
              super(e),
                (this._focusMonitor = n),
                (this._changeDetectorRef = i),
                (this.defaults = s),
                (this._onChange = (W) => {}),
                (this._onTouched = () => {}),
                (this._required = !1),
                (this._checked = !1),
                (this.name = null),
                (this.labelPosition = "after"),
                (this.ariaLabel = null),
                (this.ariaLabelledby = null),
                (this._hideIcon = !1),
                (this.change = new t.vpe()),
                (this.toggleChange = new t.vpe()),
                (this.tabIndex = parseInt(a) || 0),
                (this.color = this.defaultColor = s.color || "accent"),
                (this._noopAnimations = "NoopAnimations" === u),
                (this.id = this._uniqueId = `${C}${++qt}`),
                (this._hideIcon = s.hideIcon ?? !1);
            }
            ngAfterContentInit() {
              this._focusMonitor
                .monitor(this._elementRef, !0)
                .subscribe((e) => {
                  "keyboard" === e || "program" === e
                    ? ((this._focused = !0),
                      this._changeDetectorRef.markForCheck())
                    : e ||
                      Promise.resolve().then(() => {
                        (this._focused = !1),
                          this._onTouched(),
                          this._changeDetectorRef.markForCheck();
                      });
                });
            }
            ngOnDestroy() {
              this._focusMonitor.stopMonitoring(this._elementRef);
            }
            writeValue(e) {
              this.checked = !!e;
            }
            registerOnChange(e) {
              this._onChange = e;
            }
            registerOnTouched(e) {
              this._onTouched = e;
            }
            setDisabledState(e) {
              (this.disabled = e), this._changeDetectorRef.markForCheck();
            }
            toggle() {
              (this.checked = !this.checked), this._onChange(this.checked);
            }
            _emitChangeEvent() {
              this._onChange(this.checked),
                this.change.emit(this._createChangeEvent(this.checked));
            }
            static #t = (this.ɵfac = function (n) {
              t.$Z();
            });
            static #e = (this.ɵdir = t.lG2({
              type: o,
              inputs: {
                name: "name",
                id: "id",
                labelPosition: "labelPosition",
                ariaLabel: ["aria-label", "ariaLabel"],
                ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
                ariaDescribedby: ["aria-describedby", "ariaDescribedby"],
                required: "required",
                checked: "checked",
                hideIcon: "hideIcon",
              },
              outputs: { change: "change", toggleChange: "toggleChange" },
              features: [t.qOj],
            }));
          }
          return o;
        })(),
        z = (() => {
          class o extends Lt {
            get buttonId() {
              return `${this.id || this._uniqueId}-button`;
            }
            constructor(e, n, i, a, s, u) {
              super(e, n, i, a, s, u, "mat-mdc-slide-toggle-"),
                (this._labelId = this._uniqueId + "-label");
            }
            _handleClick() {
              this.toggleChange.emit(),
                this.defaults.disableToggleValue ||
                  ((this.checked = !this.checked),
                  this._onChange(this.checked),
                  this.change.emit(new Q(this, this.checked)));
            }
            focus() {
              this._switchElement.nativeElement.focus();
            }
            _createChangeEvent(e) {
              return new Q(this, e);
            }
            _getAriaLabelledBy() {
              return this.ariaLabelledby
                ? this.ariaLabelledby
                : this.ariaLabel
                  ? null
                  : this._labelId;
            }
            static #t = (this.ɵfac = function (n) {
              return new (n || o)(
                t.Y36(t.SBq),
                t.Y36(b.tE),
                t.Y36(t.sBO),
                t.$8M("tabindex"),
                t.Y36(Nt),
                t.Y36(t.QbO, 8),
              );
            });
            static #e = (this.ɵcmp = t.Xpm({
              type: o,
              selectors: [["mat-slide-toggle"]],
              viewQuery: function (n, i) {
                if ((1 & n && t.Gf(Dt, 5), 2 & n)) {
                  let a;
                  t.iGM((a = t.CRH())) && (i._switchElement = a.first);
                }
              },
              hostAttrs: [1, "mat-mdc-slide-toggle"],
              hostVars: 11,
              hostBindings: function (n, i) {
                2 & n &&
                  (t.Ikx("id", i.id),
                  t.uIk("tabindex", null)("aria-label", null)("name", null)(
                    "aria-labelledby",
                    null,
                  ),
                  t.ekj("mat-mdc-slide-toggle-focused", i._focused)(
                    "mat-mdc-slide-toggle-checked",
                    i.checked,
                  )("_mat-animation-noopable", i._noopAnimations));
              },
              inputs: {
                disabled: "disabled",
                disableRipple: "disableRipple",
                color: "color",
                tabIndex: "tabIndex",
              },
              exportAs: ["matSlideToggle"],
              features: [t._Bn([Rt]), t.qOj],
              ngContentSelectors: Ft,
              decls: 13,
              vars: 25,
              consts: [
                [1, "mdc-form-field"],
                [
                  "role",
                  "switch",
                  "type",
                  "button",
                  1,
                  "mdc-switch",
                  3,
                  "tabIndex",
                  "disabled",
                  "click",
                ],
                ["switch", ""],
                [1, "mdc-switch__track"],
                [1, "mdc-switch__handle-track"],
                [1, "mdc-switch__handle"],
                [1, "mdc-switch__shadow"],
                [1, "mdc-elevation-overlay"],
                [1, "mdc-switch__ripple"],
                [
                  "mat-ripple",
                  "",
                  1,
                  "mat-mdc-slide-toggle-ripple",
                  "mat-mdc-focus-indicator",
                  3,
                  "matRippleTrigger",
                  "matRippleDisabled",
                  "matRippleCentered",
                ],
                ["class", "mdc-switch__icons", 4, "ngIf"],
                [1, "mdc-label", 3, "for", "click"],
                [1, "mdc-switch__icons"],
                [
                  "viewBox",
                  "0 0 24 24",
                  "aria-hidden",
                  "true",
                  1,
                  "mdc-switch__icon",
                  "mdc-switch__icon--on",
                ],
                [
                  "d",
                  "M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z",
                ],
                [
                  "viewBox",
                  "0 0 24 24",
                  "aria-hidden",
                  "true",
                  1,
                  "mdc-switch__icon",
                  "mdc-switch__icon--off",
                ],
                ["d", "M20 13H4v-2h16v2z"],
              ],
              template: function (n, i) {
                if (
                  (1 & n &&
                    (t.F$t(),
                    t.TgZ(0, "div", 0)(1, "button", 1, 2),
                    t.NdJ("click", function () {
                      return i._handleClick();
                    }),
                    t._UZ(3, "div", 3),
                    t.TgZ(4, "div", 4)(5, "div", 5)(6, "div", 6),
                    t._UZ(7, "div", 7),
                    t.qZA(),
                    t.TgZ(8, "div", 8),
                    t._UZ(9, "div", 9),
                    t.qZA(),
                    t.YNc(10, Ut, 5, 0, "div", 10),
                    t.qZA()()(),
                    t.TgZ(11, "label", 11),
                    t.NdJ("click", function (s) {
                      return s.stopPropagation();
                    }),
                    t.Hsn(12),
                    t.qZA()()),
                  2 & n)
                ) {
                  const a = t.MAs(2);
                  t.ekj(
                    "mdc-form-field--align-end",
                    "before" == i.labelPosition,
                  ),
                    t.xp6(1),
                    t.ekj("mdc-switch--selected", i.checked)(
                      "mdc-switch--unselected",
                      !i.checked,
                    )("mdc-switch--checked", i.checked)(
                      "mdc-switch--disabled",
                      i.disabled,
                    ),
                    t.Q6J("tabIndex", i.tabIndex)("disabled", i.disabled),
                    t.uIk("id", i.buttonId)("name", i.name)(
                      "aria-label",
                      i.ariaLabel,
                    )("aria-labelledby", i._getAriaLabelledBy())(
                      "aria-describedby",
                      i.ariaDescribedby,
                    )("aria-required", i.required || null)(
                      "aria-checked",
                      i.checked,
                    ),
                    t.xp6(8),
                    t.Q6J("matRippleTrigger", a)(
                      "matRippleDisabled",
                      i.disableRipple || i.disabled,
                    )("matRippleCentered", !0),
                    t.xp6(1),
                    t.Q6J("ngIf", !i.hideIcon),
                    t.xp6(1),
                    t.Q6J("for", i.buttonId),
                    t.uIk("id", i._labelId);
                }
              },
              dependencies: [d.wG, g.O5],
              styles: [
                '.mdc-form-field{display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field[hidden]{display:none}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:var(--mdc-elevation-overlay-color)}.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative}.mdc-switch[hidden]{display:none}.mdc-switch:disabled{cursor:default;pointer-events:none}.mdc-switch__track{overflow:hidden;position:relative;width:100%}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%}@media screen and (forced-colors: active){.mdc-switch__track::before,.mdc-switch__track::after{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(-100%)}[dir=rtl] .mdc-switch__track::after,.mdc-switch__track[dir=rtl]::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track[dir=rtl]::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0)}[dir=rtl] .mdc-switch__handle-track,.mdc-switch__handle-track[dir=rtl]{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track,.mdc-switch--selected .mdc-switch__handle-track[dir=rtl]{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto}[dir=rtl] .mdc-switch__handle,.mdc-switch__handle[dir=rtl]{left:auto;right:0}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media screen and (forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-elevation-overlay{bottom:0;left:0;right:0;top:0}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1}.mdc-switch:disabled .mdc-switch__ripple{display:none}.mdc-switch__icons{height:100%;position:relative;width:100%;z-index:1}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mdc-switch{width:var(--mdc-switch-track-width);--mdc-switch-disabled-handle-opacity:0.38;--mdc-switch-disabled-selected-icon-opacity:0.38;--mdc-switch-disabled-track-opacity:0.12;--mdc-switch-disabled-unselected-icon-opacity:0.38;--mdc-switch-handle-height:20px;--mdc-switch-handle-shape:10px;--mdc-switch-handle-width:20px;--mdc-switch-selected-icon-size:18px;--mdc-switch-track-height:14px;--mdc-switch-track-shape:7px;--mdc-switch-track-width:36px;--mdc-switch-unselected-icon-size:18px;--mdc-switch-state-layer-size:40px;--mdc-switch-selected-focus-state-layer-opacity:0.12;--mdc-switch-selected-hover-state-layer-opacity:0.04;--mdc-switch-selected-pressed-state-layer-opacity:0.1;--mdc-switch-unselected-focus-state-layer-opacity:0.12;--mdc-switch-unselected-hover-state-layer-opacity:0.04;--mdc-switch-unselected-pressed-state-layer-opacity:0.1}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-selected-handle-color)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-hover-handle-color)}.mdc-switch.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-focus-handle-color)}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-selected-pressed-handle-color)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-selected-handle-color)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-unselected-handle-color)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-hover-handle-color)}.mdc-switch.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-focus-handle-color)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-unselected-pressed-handle-color)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-unselected-handle-color)}.mdc-switch .mdc-switch__handle::before{background:var(--mdc-switch-handle-surface-color)}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-handle-elevation)}.mdc-switch:disabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-disabled-handle-elevation)}.mdc-switch .mdc-switch__focus-ring-wrapper,.mdc-switch .mdc-switch__handle{height:var(--mdc-switch-handle-height)}.mdc-switch:disabled .mdc-switch__handle::after{opacity:var(--mdc-switch-disabled-handle-opacity)}.mdc-switch .mdc-switch__handle{border-radius:var(--mdc-switch-handle-shape)}.mdc-switch .mdc-switch__handle{width:var(--mdc-switch-handle-width)}.mdc-switch .mdc-switch__handle-track{width:calc(100% - var(--mdc-switch-handle-width))}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:var(--mdc-switch-selected-icon-color)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-selected-icon-color)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:var(--mdc-switch-unselected-icon-color)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-unselected-icon-color)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:var(--mdc-switch-disabled-selected-icon-opacity)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:var(--mdc-switch-disabled-unselected-icon-opacity)}.mdc-switch.mdc-switch--selected .mdc-switch__icon{width:var(--mdc-switch-selected-icon-size);height:var(--mdc-switch-selected-icon-size)}.mdc-switch.mdc-switch--unselected .mdc-switch__icon{width:var(--mdc-switch-unselected-icon-size);height:var(--mdc-switch-unselected-icon-size)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background-color:var(--mdc-switch-selected-hover-state-layer-color)}.mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background-color:var(--mdc-switch-selected-focus-state-layer-color)}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background-color:var(--mdc-switch-selected-pressed-state-layer-color)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background-color:var(--mdc-switch-unselected-hover-state-layer-color)}.mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background-color:var(--mdc-switch-unselected-focus-state-layer-color)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background-color:var(--mdc-switch-unselected-pressed-state-layer-color)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before{opacity:var(--mdc-switch-selected-hover-state-layer-opacity)}.mdc-switch.mdc-switch--selected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:var(--mdc-switch-selected-focus-state-layer-opacity)}.mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}.mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:var(--mdc-switch-selected-pressed-state-layer-opacity)}.mdc-switch.mdc-switch--selected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-selected-pressed-state-layer-opacity)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before{opacity:var(--mdc-switch-unselected-hover-state-layer-opacity)}.mdc-switch.mdc-switch--unselected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:var(--mdc-switch-unselected-focus-state-layer-opacity)}.mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}.mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity)}.mdc-switch.mdc-switch--unselected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity)}.mdc-switch .mdc-switch__ripple{height:var(--mdc-switch-state-layer-size);width:var(--mdc-switch-state-layer-size)}.mdc-switch .mdc-switch__track{height:var(--mdc-switch-track-height)}.mdc-switch:disabled .mdc-switch__track{opacity:var(--mdc-switch-disabled-track-opacity)}.mdc-switch:enabled .mdc-switch__track::after{background:var(--mdc-switch-selected-track-color)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-hover-track-color)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-focus-track-color)}.mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mdc-switch-selected-pressed-track-color)}.mdc-switch:disabled .mdc-switch__track::after{background:var(--mdc-switch-disabled-selected-track-color)}.mdc-switch:enabled .mdc-switch__track::before{background:var(--mdc-switch-unselected-track-color)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-hover-track-color)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-focus-track-color)}.mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mdc-switch-unselected-pressed-track-color)}.mdc-switch:disabled .mdc-switch__track::before{background:var(--mdc-switch-disabled-unselected-track-color)}.mdc-switch .mdc-switch__track{border-radius:var(--mdc-switch-track-shape)}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-handle-elevation-shadow)}.mdc-switch:disabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-disabled-handle-elevation-shadow)}.mat-mdc-slide-toggle .mdc-label{font-family:var(--mat-slide-toggle-label-text-font);font-size:var(--mat-slide-toggle-label-text-size);letter-spacing:var(--mat-slide-toggle-label-text-tracking);line-height:var(--mat-slide-toggle-label-text-line-height);font-weight:var(--mat-slide-toggle-label-text-weight)}.mat-mdc-slide-toggle{display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle .mdc-switch__ripple::after{content:"";opacity:0}.mat-mdc-slide-toggle .mdc-switch:hover .mdc-switch__ripple::after{opacity:.04;transition:opacity 75ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mdc-switch .mdc-switch__ripple::after{opacity:.12}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-mdc-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-elevation-overlay,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}.mat-mdc-slide-toggle .mdc-switch:enabled+.mdc-label{cursor:pointer}',
              ],
              encapsulation: 2,
              changeDetection: 0,
            }));
          }
          return o;
        })(),
        V = (() => {
          class o {
            static #t = (this.ɵfac = function (n) {
              return new (n || o)();
            });
            static #e = (this.ɵmod = t.oAB({ type: o }));
            static #i = (this.ɵinj = t.cJS({}));
          }
          return o;
        })(),
        Qt = (() => {
          class o {
            static #t = (this.ɵfac = function (n) {
              return new (n || o)();
            });
            static #e = (this.ɵmod = t.oAB({ type: o }));
            static #i = (this.ɵinj = t.cJS({
              imports: [V, d.BQ, d.si, g.ez, V, d.BQ],
            }));
          }
          return o;
        })();
      function zt(o, l) {
        if ((1 & o && (t.TgZ(0, "mat-option", 43), t._uU(1), t.qZA()), 2 & o)) {
          const e = l.$implicit;
          t.Q6J("value", e), t.xp6(1), t.Oqu(e);
        }
      }
      function Vt(o, l) {
        if ((1 & o && (t.TgZ(0, "mat-option", 43), t._uU(1), t.qZA()), 2 & o)) {
          const e = l.$implicit;
          t.Q6J("value", e), t.xp6(1), t.Oqu(e);
        }
      }
      function Ht(o, l) {
        if ((1 & o && (t.TgZ(0, "mat-option", 43), t._uU(1), t.qZA()), 2 & o)) {
          const e = l.$implicit;
          t.Q6J("value", e), t.xp6(1), t.Oqu(e);
        }
      }
      function Jt(o, l) {
        if (
          (1 & o &&
            (t.TgZ(0, "tr")(1, "td"),
            t._UZ(2, "input", 45),
            t.qZA(),
            t.TgZ(3, "td"),
            t._UZ(4, "input", 45),
            t.qZA()()),
          2 & o)
        ) {
          const e = l.$implicit;
          t.xp6(2),
            t.MGl("placeholder", "Min Order Quantity ", e, ""),
            t.Q6J("formControlName", "minOrderQuantity" + e),
            t.xp6(2),
            t.MGl("placeholder", "Price Per Quantity ", e, ""),
            t.Q6J("formControlName", "pricePerQuantity" + e);
        }
      }
      const Gt = function () {
        return [1, 2, 3];
      };
      function $t(o, l) {
        1 & o &&
          (t.TgZ(0, "div")(1, "table")(2, "thead")(3, "tr")(4, "th"),
          t._uU(5, "Min Order Quantity"),
          t.qZA(),
          t.TgZ(6, "th"),
          t._uU(7, "Price Per Unit"),
          t.qZA()()(),
          t.TgZ(8, "tbody"),
          t.YNc(9, Jt, 5, 4, "tr", 44),
          t.qZA()()()),
          2 & o && (t.xp6(9), t.Q6J("ngForOf", t.DdM(1, Gt)));
      }
      let H = (() => {
        class o {
          constructor(e, n, i) {
            (this.dialogRef = e),
              (this.fb = n),
              (this.data = i),
              (this.showPricingTable = !1),
              (this.filteredVendors = ["Vendor1", "Vendor2"]),
              (this.filteredFormulas = ["Formula1", "Formula2"]),
              (this.filteredProductSkus = ["Product1", "Product2"]),
              (this.filteredPos = ["PO1", "PO2"]),
              (this.inventoryForm = this.fb.group({
                vendor: ["", r.kI.required],
                displayName: ["", r.kI.required],
                ingredientSku: ["", r.kI.required],
                scientificName: ["", r.kI.required],
                description: [""],
                picture: [null],
                associatedFormulas: [""],
                associatedProductSkus: [""],
                ingredientBatchNumber: [""],
                assignedPo: [""],
                certificateOfAuthenticity: [null],
                inventoryCategory: ["", r.kI.required],
                type: ["", r.kI.required],
                lotCode: [""],
                unitOfMeasurement: ["", r.kI.required],
                minOrderQuantity: [""],
                pricePerQuantity: [""],
                inStock: ["", r.kI.required],
                quantityAvailable: [""],
                onHold: [""],
                onHoldChance: [""],
                allocated: [""],
                quarantined: [""],
                associatedLabTest: [""],
              }));
          }
          togglePricingTable(e) {
            this.showPricingTable = e.checked;
          }
          onFileSelected(e) {
            this.inventoryForm.patchValue({ picture: e.target.files[0] });
          }
          onCertificateUpload(e) {
            this.inventoryForm.patchValue({
              certificateOfAuthenticity: e.target.files[0],
            });
          }
          onSubmit() {
            this.inventoryForm.valid &&
              this.dialogRef.close(this.inventoryForm.value);
          }
          onCancel() {
            this.dialogRef.close();
          }
          static #t = (this.ɵfac = function (n) {
            return new (n || o)(t.Y36(v.so), t.Y36(r.qu), t.Y36(v.WI));
          });
          static #e = (this.ɵcmp = t.Xpm({
            type: o,
            selectors: [["app-new-inventory-dialog"]],
            decls: 123,
            vars: 9,
            consts: [
              ["mat-dialog-title", ""],
              [3, "formGroup", "ngSubmit"],
              ["appearance", "outline", 1, "full-width"],
              [
                "matInput",
                "",
                "formControlName",
                "vendor",
                "placeholder",
                "Search Vendor",
                3,
                "matAutocomplete",
              ],
              ["autoVendor", "matAutocomplete"],
              [3, "value", 4, "ngFor", "ngForOf"],
              ["matInput", "", "formControlName", "displayName"],
              ["matInput", "", "formControlName", "ingredientSku"],
              ["matInput", "", "formControlName", "scientificName"],
              ["type", "file", 3, "change"],
              ["matInput", "", "formControlName", "description"],
              [
                "matInput",
                "",
                "formControlName",
                "associatedFormulas",
                "placeholder",
                "Search Formula",
                3,
                "matAutocomplete",
              ],
              ["autoFormulas", "matAutocomplete"],
              [
                "matInput",
                "",
                "formControlName",
                "associatedProductSkus",
                "placeholder",
                "Search Product SKU",
                3,
                "matAutocomplete",
              ],
              ["autoProductSkus", "matAutocomplete"],
              ["formControlName", "inventoryCategory"],
              ["value", "Nufacturing"],
              ["value", "Customer Supplied"],
              ["value", "Research Lab"],
              ["value", "Ancillary"],
              ["formControlName", "type"],
              ["value", "Raw Materials"],
              ["value", "Components"],
              ["value", "Work in Progress"],
              ["value", "Finished Goods"],
              ["matInput", "", "formControlName", "lotCode"],
              ["formControlName", "unitOfMeasurement"],
              ["value", "kg"],
              ["value", "g"],
              ["value", "mg"],
              ["value", "lb"],
              ["value", "oz"],
              [3, "change"],
              [4, "ngIf"],
              ["matInput", "", "formControlName", "inStock", "type", "number"],
              [
                "matInput",
                "",
                "formControlName",
                "quantityAvailable",
                "type",
                "number",
              ],
              ["matInput", "", "formControlName", "onHold", "type", "number"],
              [
                "matInput",
                "",
                "formControlName",
                "onHoldChance",
                "type",
                "number",
              ],
              [
                "matInput",
                "",
                "formControlName",
                "allocated",
                "type",
                "number",
              ],
              [
                "matInput",
                "",
                "formControlName",
                "quarantined",
                "type",
                "number",
              ],
              ["align", "end"],
              ["mat-button", "", 3, "click"],
              ["mat-button", "", "color", "primary", 3, "disabled"],
              [3, "value"],
              [4, "ngFor", "ngForOf"],
              ["matInput", "", 3, "formControlName", "placeholder"],
            ],
            template: function (n, i) {
              if (
                (1 & n &&
                  (t.TgZ(0, "h2", 0),
                  t._uU(1, "Create New Inventory Item"),
                  t.qZA(),
                  t.TgZ(2, "mat-dialog-content")(3, "form", 1),
                  t.NdJ("ngSubmit", function () {
                    return i.onSubmit();
                  }),
                  t.TgZ(4, "mat-form-field", 2)(5, "mat-label"),
                  t._uU(6, "Vendor"),
                  t.qZA(),
                  t._UZ(7, "input", 3),
                  t.TgZ(8, "mat-autocomplete", null, 4),
                  t.YNc(10, zt, 2, 2, "mat-option", 5),
                  t.qZA()(),
                  t.TgZ(11, "mat-form-field", 2)(12, "mat-label"),
                  t._uU(13, "Display Name"),
                  t.qZA(),
                  t._UZ(14, "input", 6),
                  t.qZA(),
                  t.TgZ(15, "mat-form-field", 2)(16, "mat-label"),
                  t._uU(17, "Ingredient SKU"),
                  t.qZA(),
                  t._UZ(18, "input", 7),
                  t.qZA(),
                  t.TgZ(19, "mat-form-field", 2)(20, "mat-label"),
                  t._uU(21, "Scientific Name"),
                  t.qZA(),
                  t._UZ(22, "input", 8),
                  t.qZA(),
                  t.TgZ(23, "mat-form-field", 2)(24, "mat-label"),
                  t._uU(25, "Picture"),
                  t.qZA(),
                  t.TgZ(26, "input", 9),
                  t.NdJ("change", function (s) {
                    return i.onFileSelected(s);
                  }),
                  t.qZA()(),
                  t.TgZ(27, "mat-form-field", 2)(28, "mat-label"),
                  t._uU(29, "Description"),
                  t.qZA(),
                  t._UZ(30, "textarea", 10),
                  t.qZA(),
                  t.TgZ(31, "mat-form-field", 2)(32, "mat-label"),
                  t._uU(33, "Associated Formulas"),
                  t.qZA(),
                  t._UZ(34, "input", 11),
                  t.TgZ(35, "mat-autocomplete", null, 12),
                  t.YNc(37, Vt, 2, 2, "mat-option", 5),
                  t.qZA()(),
                  t.TgZ(38, "mat-form-field", 2)(39, "mat-label"),
                  t._uU(40, "Associated Product SKUs"),
                  t.qZA(),
                  t._UZ(41, "input", 13),
                  t.TgZ(42, "mat-autocomplete", null, 14),
                  t.YNc(44, Ht, 2, 2, "mat-option", 5),
                  t.qZA()(),
                  t.TgZ(45, "mat-form-field", 2)(46, "mat-label"),
                  t._uU(47, "Certificate of Authenticity"),
                  t.qZA(),
                  t.TgZ(48, "input", 9),
                  t.NdJ("change", function (s) {
                    return i.onCertificateUpload(s);
                  }),
                  t.qZA()(),
                  t.TgZ(49, "mat-form-field", 2)(50, "mat-label"),
                  t._uU(51, "Inventory Category"),
                  t.qZA(),
                  t.TgZ(52, "mat-select", 15)(53, "mat-option", 16),
                  t._uU(54, "Nufacturing"),
                  t.qZA(),
                  t.TgZ(55, "mat-option", 17),
                  t._uU(56, "Customer Supplied"),
                  t.qZA(),
                  t.TgZ(57, "mat-option", 18),
                  t._uU(58, "Research Lab"),
                  t.qZA(),
                  t.TgZ(59, "mat-option", 19),
                  t._uU(60, "Ancillary"),
                  t.qZA()()(),
                  t.TgZ(61, "mat-form-field", 2)(62, "mat-label"),
                  t._uU(63, "Type"),
                  t.qZA(),
                  t.TgZ(64, "mat-select", 20)(65, "mat-option", 21),
                  t._uU(66, "Raw Materials"),
                  t.qZA(),
                  t.TgZ(67, "mat-option", 22),
                  t._uU(68, "Components"),
                  t.qZA(),
                  t.TgZ(69, "mat-option", 23),
                  t._uU(70, "Work in Progress"),
                  t.qZA(),
                  t.TgZ(71, "mat-option", 24),
                  t._uU(72, "Finished Goods"),
                  t.qZA()()(),
                  t.TgZ(73, "mat-form-field", 2)(74, "mat-label"),
                  t._uU(75, "Lot Code"),
                  t.qZA(),
                  t._UZ(76, "input", 25),
                  t.qZA(),
                  t.TgZ(77, "mat-form-field", 2)(78, "mat-label"),
                  t._uU(79, "Unit of Measurement"),
                  t.qZA(),
                  t.TgZ(80, "mat-select", 26)(81, "mat-option", 27),
                  t._uU(82, "kg"),
                  t.qZA(),
                  t.TgZ(83, "mat-option", 28),
                  t._uU(84, "g"),
                  t.qZA(),
                  t.TgZ(85, "mat-option", 29),
                  t._uU(86, "mg"),
                  t.qZA(),
                  t.TgZ(87, "mat-option", 30),
                  t._uU(88, "lb"),
                  t.qZA(),
                  t.TgZ(89, "mat-option", 31),
                  t._uU(90, "oz"),
                  t.qZA()()(),
                  t.TgZ(91, "mat-slide-toggle", 32),
                  t.NdJ("change", function (s) {
                    return i.togglePricingTable(s);
                  }),
                  t._uU(92, "Show Pricing Table"),
                  t.qZA(),
                  t.YNc(93, $t, 10, 2, "div", 33),
                  t.TgZ(94, "mat-form-field", 2)(95, "mat-label"),
                  t._uU(96, "In Stock"),
                  t.qZA(),
                  t._UZ(97, "input", 34),
                  t.qZA(),
                  t.TgZ(98, "mat-form-field", 2)(99, "mat-label"),
                  t._uU(100, "Quantity Available"),
                  t.qZA(),
                  t._UZ(101, "input", 35),
                  t.qZA(),
                  t.TgZ(102, "mat-form-field", 2)(103, "mat-label"),
                  t._uU(104, "On Hold"),
                  t.qZA(),
                  t._UZ(105, "input", 36),
                  t.qZA(),
                  t.TgZ(106, "mat-form-field", 2)(107, "mat-label"),
                  t._uU(108, "On Hold Chance (%)"),
                  t.qZA(),
                  t._UZ(109, "input", 37),
                  t.qZA(),
                  t.TgZ(110, "mat-form-field", 2)(111, "mat-label"),
                  t._uU(112, "Allocated"),
                  t.qZA(),
                  t._UZ(113, "input", 38),
                  t.qZA(),
                  t.TgZ(114, "mat-form-field", 2)(115, "mat-label"),
                  t._uU(116, "Quarantined"),
                  t.qZA(),
                  t._UZ(117, "input", 39),
                  t.qZA()()(),
                  t.TgZ(118, "mat-dialog-actions", 40)(119, "button", 41),
                  t.NdJ("click", function () {
                    return i.onCancel();
                  }),
                  t._uU(120, "Cancel"),
                  t.qZA(),
                  t.TgZ(121, "button", 42),
                  t._uU(122, " Save "),
                  t.qZA()()),
                2 & n)
              ) {
                const a = t.MAs(9),
                  s = t.MAs(36),
                  u = t.MAs(43);
                t.xp6(3),
                  t.Q6J("formGroup", i.inventoryForm),
                  t.xp6(4),
                  t.Q6J("matAutocomplete", a),
                  t.xp6(3),
                  t.Q6J("ngForOf", i.filteredVendors),
                  t.xp6(24),
                  t.Q6J("matAutocomplete", s),
                  t.xp6(3),
                  t.Q6J("ngForOf", i.filteredFormulas),
                  t.xp6(4),
                  t.Q6J("matAutocomplete", u),
                  t.xp6(3),
                  t.Q6J("ngForOf", i.filteredProductSkus),
                  t.xp6(49),
                  t.Q6J("ngIf", i.showPricingTable),
                  t.xp6(28),
                  t.Q6J("disabled", !i.inventoryForm.valid);
              }
            },
            dependencies: [
              g.sg,
              g.O5,
              y.KE,
              y.hX,
              S.Nt,
              O.lW,
              d.ey,
              v.uh,
              v.xY,
              v.H8,
              F.gD,
              r._Y,
              r.Fj,
              r.wV,
              r.JJ,
              r.JL,
              r.sg,
              r.u,
              kt,
              B,
              z,
            ],
            styles: [
              "mat-dialog-content[_ngcontent-%COMP%]{padding:20px;display:flex;flex-direction:column}mat-dialog-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}mat-dialog-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:100%}mat-dialog-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}mat-dialog-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:8px 12px}mat-dialog-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%]{font-weight:500}mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin-top:16px}mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:8px;text-align:left;border-bottom:1px solid #ddd}mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#f2f2f2}mat-dialog-actions[_ngcontent-%COMP%]{padding:16px;display:flex;justify-content:flex-end;gap:8px}mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:120px}mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type{background:transparent;color:#333}mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-of-type{background-color:#3f51b5;color:#fff}mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-of-type:hover{background-color:#303f9f}",
            ],
          }));
        }
        return o;
      })();
      var Kt = c(4506),
        Wt = c(9862);
      let J = (() => {
        class o {
          constructor(e) {
            (this.http = e), (this.apiUrl = `${Kt.N.apiUrl}/inventory`);
          }
          getInventory() {
            return this.http.get(this.apiUrl);
          }
          getInventoryItem(e) {
            return this.http.get(`${this.apiUrl}/${e}`);
          }
          addInventoryItem(e) {
            return this.http.post(this.apiUrl, e);
          }
          updateInventoryItem(e, n) {
            return (
              console.log(`Updating inventory item with ID: ${e}`),
              console.log(`API URL: ${this.apiUrl}/${e}`),
              this.http.put(`${this.apiUrl}/${e}`, n)
            );
          }
          deleteInventoryItem(e) {
            return this.http.delete(`${this.apiUrl}/${e}`);
          }
          createInventory(e) {
            return this.http.post(`${this.apiUrl}`, e);
          }
          static #t = (this.ɵfac = function (n) {
            return new (n || o)(t.LFG(Wt.eN));
          });
          static #e = (this.ɵprov = t.Yz7({
            token: o,
            factory: o.ɵfac,
            providedIn: "root",
          }));
        }
        return o;
      })();
      var Xt = c(20),
        G = c(5195),
        $ = c(617);
      function jt(o, l) {
        if (1 & o) {
          const e = t.EpF();
          t.TgZ(0, "div")(1, "button", 21),
            t.NdJ("click", function () {
              t.CHM(e);
              const i = t.oxw();
              return t.KtG(i.createNewInventory());
            }),
            t._uU(2, " Create New Inventory "),
            t.qZA()();
        }
      }
      function te(o, l) {
        1 & o && (t.TgZ(0, "th", 22), t._uU(1, "Ingredient Name"), t.qZA());
      }
      function ee(o, l) {
        if ((1 & o && (t.TgZ(0, "td", 23), t._uU(1), t.qZA()), 2 & o)) {
          const e = l.$implicit;
          t.xp6(1), t.Oqu(e.ingredientName);
        }
      }
      function ie(o, l) {
        1 & o && (t.TgZ(0, "th", 22), t._uU(1, "Price Per Kg"), t.qZA());
      }
      function oe(o, l) {
        if (
          (1 & o &&
            (t.TgZ(0, "td", 23), t._uU(1), t.ALo(2, "currency"), t.qZA()),
          2 & o)
        ) {
          const e = l.$implicit;
          t.xp6(1), t.hij(" ", t.lcZ(2, 1, e.pricePerKg), " ");
        }
      }
      function ne(o, l) {
        1 & o && (t.TgZ(0, "th", 22), t._uU(1, "Stock Quantity"), t.qZA());
      }
      function ae(o, l) {
        if ((1 & o && (t.TgZ(0, "td", 23), t._uU(1), t.qZA()), 2 & o)) {
          const e = l.$implicit;
          t.xp6(1), t.Oqu(e.stockQuantity);
        }
      }
      function ce(o, l) {
        1 & o && (t.TgZ(0, "th", 22), t._uU(1, "Category"), t.qZA());
      }
      function se(o, l) {
        if ((1 & o && (t.TgZ(0, "td", 23), t._uU(1), t.qZA()), 2 & o)) {
          const e = l.$implicit;
          t.xp6(1), t.Oqu(e.category);
        }
      }
      function le(o, l) {
        1 & o && (t.TgZ(0, "th", 22), t._uU(1, "Type"), t.qZA());
      }
      function re(o, l) {
        if ((1 & o && (t.TgZ(0, "td", 23), t._uU(1), t.qZA()), 2 & o)) {
          const e = l.$implicit;
          t.xp6(1), t.Oqu(e.type);
        }
      }
      function de(o, l) {
        1 & o && (t.TgZ(0, "th", 22), t._uU(1, "SubCategory"), t.qZA());
      }
      function me(o, l) {
        if ((1 & o && (t.TgZ(0, "td", 23), t._uU(1), t.qZA()), 2 & o)) {
          const e = l.$implicit;
          t.xp6(1), t.Oqu(e.subCategory);
        }
      }
      function he(o, l) {
        1 & o && (t.TgZ(0, "th", 24), t._uU(1, "Actions"), t.qZA());
      }
      function ue(o, l) {
        if (1 & o) {
          const e = t.EpF();
          t.TgZ(0, "button", 28),
            t.NdJ("click", function () {
              t.CHM(e);
              const i = t.oxw().$implicit,
                a = t.oxw();
              return t.KtG(a.editInventoryItem(i));
            }),
            t.TgZ(1, "mat-icon"),
            t._uU(2, "edit"),
            t.qZA()();
        }
      }
      function pe(o, l) {
        1 & o && (t.TgZ(0, "mat-icon"), t._uU(1, "remove"), t.qZA());
      }
      function ge(o, l) {
        if (1 & o) {
          const e = t.EpF();
          t.TgZ(0, "button", 29),
            t.NdJ("click", function () {
              t.CHM(e);
              const i = t.oxw().$implicit,
                a = t.oxw();
              return t.KtG(a.deleteInventoryItem(i));
            }),
            t.TgZ(1, "mat-icon"),
            t._uU(2, "delete"),
            t.qZA()();
        }
      }
      function fe(o, l) {
        if (
          (1 & o &&
            (t.TgZ(0, "td", 23),
            t.YNc(1, ue, 3, 0, "button", 25),
            t.YNc(2, pe, 2, 0, "ng-template", null, 26, t.W1O),
            t.YNc(4, ge, 3, 0, "button", 27),
            t.qZA()),
          2 & o)
        ) {
          const e = t.MAs(3),
            n = t.oxw();
          t.xp6(1),
            t.Q6J("ngIf", n.isAdminOrManager)("ngIfElse", e),
            t.xp6(3),
            t.Q6J("ngIf", n.isAdminOrManager);
        }
      }
      function _e(o, l) {
        1 & o && t._UZ(0, "tr", 30);
      }
      function ve(o, l) {
        1 & o && t._UZ(0, "tr", 31);
      }
      const be = function () {
        return [5, 10, 20];
      };
      let K = (() => {
        class o {
          constructor(e, n, i) {
            (this.inventoryService = e),
              (this.authService = n),
              (this.dialog = i),
              (this.displayedColumns = [
                "ingredientName",
                "pricePerKg",
                "stockQuantity",
                "category",
                "type",
                "subCategory",
                "actions",
              ]),
              (this.dataSource = new m.by()),
              (this.isAdminOrManager = !1);
          }
          ngOnInit() {
            this.inventoryService.getInventory().subscribe((e) => {
              const n = e.flatMap((i) =>
                i.items.map((a) => ({
                  ...a,
                  category: i.category,
                  type: i.type,
                  subCategory: i.subCategory,
                })),
              );
              (this.dataSource.data = n),
                (this.dataSource.paginator = this.paginator),
                (this.dataSource.sort = this.sort),
                this.renderChart(n);
            }),
              this.authService.userRole.subscribe((e) => {
                this.isAdminOrManager = "admin" === e || "manager" === e;
              });
          }
          ngAfterViewInit() {
            (this.dataSource.paginator = this.paginator),
              (this.dataSource.sort = this.sort);
          }
          applyFilter(e) {
            this.dataSource.filter = e.target.value.trim().toLowerCase();
          }
          createNewInventory() {
            this.dialog
              .open(H, { width: "450px" })
              .afterClosed()
              .subscribe((n) => {
                console.log("resultin create inventory", n),
                  n &&
                    this.inventoryService.createInventory(n).subscribe((i) => {
                      const a = i.items.map((s) => ({
                        ...s,
                        category: i.category,
                        type: i.type,
                        subCategory: i.subCategory,
                      }));
                      this.dataSource.data = [...this.dataSource.data, ...a];
                    });
              });
          }
          editInventoryItem(e) {
            this.inventoryService.getInventory().subscribe((n) => {
              const i = n.find((a) => a.items.some((s) => s._id === e._id));
              if (i) {
                const a = i._id;
                this.dialog
                  .open(H, { width: "450px", data: e })
                  .afterClosed()
                  .subscribe((u) => {
                    u &&
                      this.inventoryService.updateInventoryItem(a, u).subscribe(
                        () => {
                          this.refreshInventory();
                        },
                        (C) => {
                          console.error("Error updating inventory item:", C);
                        },
                      );
                  });
              } else console.error("Parent item not found for item ID:", e._id);
            });
          }
          refreshInventory() {
            this.inventoryService.getInventory().subscribe((e) => {
              const n = e.flatMap((i) =>
                i.items.map((a) => ({
                  ...a,
                  category: i.category,
                  type: i.type,
                  subCategory: i.subCategory,
                })),
              );
              (this.dataSource.data = n),
                (this.dataSource.paginator = this.paginator),
                (this.dataSource.sort = this.sort),
                this.renderChart(n);
            });
          }
          deleteInventoryItem(e) {
            this.inventoryService.getInventory().subscribe((n) => {
              const i = n.find((a) => a.items.some((s) => s._id === e._id));
              i
                ? this.inventoryService.deleteInventoryItem(i._id).subscribe(
                    () => {
                      this.refreshInventory();
                    },
                    (a) => {
                      console.error("Error deleting inventory item:", a);
                    },
                  )
                : console.error("Parent item not found for item ID:", e._id);
            });
          }
          renderChart(e) {
            const n = document
              .getElementById("inventoryChart")
              .getContext("2d");
            if (!n) return;
            const i = e.map((s) => s.ingredientName),
              a = e.map((s) => s.stockQuantity);
            new X(n, {
              type: "bar",
              data: {
                labels: i,
                datasets: [
                  {
                    label: "Stock Quantity",
                    data: a,
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                  },
                ],
              },
              options: { scales: { y: { beginAtZero: !0 } } },
            });
          }
          static #t = (this.ɵfac = function (n) {
            return new (n || o)(t.Y36(J), t.Y36(Xt.e), t.Y36(v.uw));
          });
          static #e = (this.ɵcmp = t.Xpm({
            type: o,
            selectors: [["inventory"]],
            viewQuery: function (n, i) {
              if ((1 & n && (t.Gf(k.NW, 5), t.Gf(A.YE, 5)), 2 & n)) {
                let a;
                t.iGM((a = t.CRH())) && (i.paginator = a.first),
                  t.iGM((a = t.CRH())) && (i.sort = a.first);
              }
            },
            decls: 36,
            vars: 6,
            consts: [
              [1, "dashboard"],
              [1, "summary-card"],
              ["id", "inventoryChart"],
              [4, "ngIf"],
              [1, "inventory-table"],
              ["appearance", "outline"],
              ["matInput", "", "placeholder", "Search for data", 3, "keyup"],
              ["mat-table", "", "matSort", "", 3, "dataSource"],
              ["matColumnDef", "ingredientName"],
              [
                "mat-header-cell",
                "",
                "mat-sort-header",
                "",
                4,
                "matHeaderCellDef",
              ],
              ["mat-cell", "", 4, "matCellDef"],
              ["matColumnDef", "pricePerKg"],
              ["matColumnDef", "stockQuantity"],
              ["matColumnDef", "category"],
              ["matColumnDef", "type"],
              ["matColumnDef", "subCategory"],
              ["matColumnDef", "actions"],
              ["mat-header-cell", "", 4, "matHeaderCellDef"],
              ["mat-header-row", "", 4, "matHeaderRowDef"],
              ["mat-row", "", 4, "matRowDef", "matRowDefColumns"],
              ["showFirstLastButtons", "", 3, "pageSizeOptions"],
              ["mat-raised-button", "", "color", "primary", 3, "click"],
              ["mat-header-cell", "", "mat-sort-header", ""],
              ["mat-cell", ""],
              ["mat-header-cell", ""],
              ["mat-icon-button", "", 3, "click", 4, "ngIf", "ngIfElse"],
              ["editDisabled", ""],
              ["mat-icon-button", "", "color", "warn", 3, "click", 4, "ngIf"],
              ["mat-icon-button", "", 3, "click"],
              ["mat-icon-button", "", "color", "warn", 3, "click"],
              ["mat-header-row", ""],
              ["mat-row", ""],
            ],
            template: function (n, i) {
              1 & n &&
                (t.TgZ(0, "div", 0)(1, "mat-card", 1)(2, "h3"),
                t._uU(3, "Inventory Summary"),
                t.qZA(),
                t._UZ(4, "canvas", 2),
                t.YNc(5, jt, 3, 0, "div", 3),
                t.qZA()(),
                t.TgZ(6, "div", 4)(7, "mat-form-field", 5)(8, "mat-label"),
                t._uU(9, "Search Data"),
                t.qZA(),
                t.TgZ(10, "input", 6),
                t.NdJ("keyup", function (s) {
                  return i.applyFilter(s);
                }),
                t.qZA()(),
                t.TgZ(11, "table", 7),
                t.ynx(12, 8),
                t.YNc(13, te, 2, 0, "th", 9),
                t.YNc(14, ee, 2, 1, "td", 10),
                t.BQk(),
                t.ynx(15, 11),
                t.YNc(16, ie, 2, 0, "th", 9),
                t.YNc(17, oe, 3, 3, "td", 10),
                t.BQk(),
                t.ynx(18, 12),
                t.YNc(19, ne, 2, 0, "th", 9),
                t.YNc(20, ae, 2, 1, "td", 10),
                t.BQk(),
                t.ynx(21, 13),
                t.YNc(22, ce, 2, 0, "th", 9),
                t.YNc(23, se, 2, 1, "td", 10),
                t.BQk(),
                t.ynx(24, 14),
                t.YNc(25, le, 2, 0, "th", 9),
                t.YNc(26, re, 2, 1, "td", 10),
                t.BQk(),
                t.ynx(27, 15),
                t.YNc(28, de, 2, 0, "th", 9),
                t.YNc(29, me, 2, 1, "td", 10),
                t.BQk(),
                t.ynx(30, 16),
                t.YNc(31, he, 2, 0, "th", 17),
                t.YNc(32, fe, 5, 3, "td", 10),
                t.BQk(),
                t.YNc(33, _e, 1, 0, "tr", 18),
                t.YNc(34, ve, 1, 0, "tr", 19),
                t.qZA(),
                t._UZ(35, "mat-paginator", 20),
                t.qZA()),
                2 & n &&
                  (t.xp6(5),
                  t.Q6J("ngIf", i.isAdminOrManager),
                  t.xp6(6),
                  t.Q6J("dataSource", i.dataSource),
                  t.xp6(22),
                  t.Q6J("matHeaderRowDef", i.displayedColumns),
                  t.xp6(1),
                  t.Q6J("matRowDefColumns", i.displayedColumns),
                  t.xp6(1),
                  t.Q6J("pageSizeOptions", t.DdM(5, be)));
            },
            dependencies: [
              g.O5,
              m.BZ,
              m.fO,
              m.as,
              m.w1,
              m.Dz,
              m.nj,
              m.ge,
              m.ev,
              m.XQ,
              m.Gk,
              k.NW,
              A.YE,
              A.nU,
              y.KE,
              y.hX,
              S.Nt,
              O.lW,
              O.RK,
              G.a8,
              $.Hw,
              g.H9,
            ],
            styles: [
              ".dashboard[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;padding:20px}.summary-card[_ngcontent-%COMP%]{box-shadow:0 4px 8px #0000001a;margin-bottom:20px;padding:20px;border-radius:8px}.summary-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:24px;color:#fff}.summary-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px}.inventory-table[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;padding:20px;border-radius:8px;box-shadow:0 4px 8px #0000001a}.inventory-table[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%;margin-bottom:10px}.inventory-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.inventory-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .inventory-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:8px 12px;text-align:left}.inventory-table[_ngcontent-%COMP%]   .mat-paginator[_ngcontent-%COMP%]{margin-top:20px}@media (max-width: 1024px){.dashboard[_ngcontent-%COMP%]{flex-direction:column}.summary-card[_ngcontent-%COMP%], .inventory-table[_ngcontent-%COMP%]{padding:15px}.mat-paginator[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}}@media (max-width: 768px){.dashboard[_ngcontent-%COMP%], .summary-card[_ngcontent-%COMP%], .inventory-table[_ngcontent-%COMP%]{padding:10px}}",
            ],
          }));
        }
        return o;
      })();
      const ye = [
        { path: "", component: K, pathMatch: "full" },
        { path: "inventory", component: K },
      ];
      let we = (() => {
          class o {
            static #t = (this.ɵfac = function (n) {
              return new (n || o)();
            });
            static #e = (this.ɵmod = t.oAB({ type: o }));
            static #i = (this.ɵinj = t.cJS({
              imports: [U.Bz.forChild(ye), U.Bz],
            }));
          }
          return o;
        })(),
        Ce = (() => {
          class o {
            static #t = (this.ɵfac = function (n) {
              return new (n || o)();
            });
            static #e = (this.ɵmod = t.oAB({ type: o }));
            static #i = (this.ɵinj = t.cJS({
              providers: [J],
              imports: [
                g.ez,
                we,
                m.p0,
                k.TU,
                A.JX,
                y.lN,
                S.c,
                O.ot,
                G.QW,
                d.Ng,
                v.Is,
                F.LD,
                r.UX,
                xt,
                Qt,
                $.Ps,
              ],
            }));
          }
          return o;
        })();
    },
  },
]);
