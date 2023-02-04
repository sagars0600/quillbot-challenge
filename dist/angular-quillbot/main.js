(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HP\angular-quillbot\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");














function AppComponent_button_1_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " menu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppComponent_button_1_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5); return _r1.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_button_1_mat_icon_1_Template, 2, 0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AppComponent_button_1_mat_icon_2_Template, 2, 0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_r1.opened);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r1.opened);
} }
let AppComponent = class AppComponent {
    constructor(observer, router) {
        this.observer = observer;
        this.router = router;
    }
    ngAfterViewInit() {
        this.observer
            .observe(['(max-width: 800px)'])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this))
            .subscribe((res) => {
            if (res.matches) {
                this.sidenav.mode = 'over';
                this.sidenav.close();
            }
            else {
                this.sidenav.mode = 'side';
                this.sidenav.open();
            }
        });
        this.router.events
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((e) => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]))
            .subscribe(() => {
            if (this.sidenav.mode === 'over') {
                this.sidenav.close();
            }
        });
    }
};
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, decls: 57, vars: 1, consts: [[1, "mat-elevation-z8"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], ["sidenav", "matSidenav"], ["src", "https://source.unsplash.com/c_GmwfHBDzk/200x200", 1, "avatar", "mat-elevation-z8"], [1, "name"], [1, "designation"], ["mat-button", "", "routerLink", "/discover", 1, "menu-button"], [1, "active"], ["mat-button", "", 1, "menu-button"], [1, "content", "mat-elevation-z8"], ["mat-icon-button", "", 3, "click"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_button_1_Template, 3, 2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Quillbot Challenge\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-sidenav", 0, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Software Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "find_replace");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Discover");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Playlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "movie_creation");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "movie_filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "help");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Watch Later");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "favorite_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Recommended");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "power_settings_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r1.mode === "over");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  background: #1F2A3C;\n  color: white;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n  border-right: none;\n  background: #1F2A3C;\n  color: white;\n  padding: 16px;\n  text-align: center;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #00e0ff !important;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow: auto;\n  background-color: #273244;\n  overflow-y: hidden;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 65px);\n}\n\n.menu-button[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: 1rem;\n}\n\n.menu-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n}\n\n.name[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-weight: normal;\n}\n\n.designation[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: 0.7rem;\n  color: lightgrey;\n}\n\nmat-divider[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 16px;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFDQTtFQUNFLDBCQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQUU7RUFDRSxpQkFBQTtBQUVKOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogIzFGMkEzQztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2IHtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICMxRjJBM0M7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5hY3RpdmV7XHJcbiAgY29sb3I6ICMwMGUwZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MzI0NDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjVweCk7XHJcbn1cclxuXHJcbi5tZW51LWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBmb250LXNpemU6IDFyZW07XHJcblxyXG4gIG1hdC1pY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmRlc2lnbmF0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgY29sb3I6IGxpZ2h0Z3JleTtcclxufVxyXG5cclxubWF0LWRpdmlkZXIge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbn1cclxuIl19 */"] });
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["UntilDestroy"])()
], AppComponent);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "v2M4");
/* harmony import */ var _pages_discover_discover_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/discover/discover.component */ "ZtNt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"], _pages_discover_discover_component__WEBPACK_IMPORTED_MODULE_12__["DiscoverComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]] }); })();


/***/ }),

/***/ "ZtNt":
/*!******************************************************!*\
  !*** ./src/app/pages/discover/discover.component.ts ***!
  \******************************************************/
/*! exports provided: DiscoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverComponent", function() { return DiscoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_discover_module_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/discover-module.service */ "vNNi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





function DiscoverComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Year:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "2021");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Running Time:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "115 Min");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Directed By:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Shawn Levy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Language:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "English");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Guy is a non-player character (NPC) in Free City, a massively multiplayer online role-playing video game (MMORPG) developed by Soonami Studio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Play Movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Watch Trailer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.img1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DiscoverComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DiscoverComponent_div_7_Template_mat_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const i_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.showDetails(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-actions", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", movie_r4.Poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r4.Title);
} }
function DiscoverComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Game of Thrones");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Year:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "2011");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Running Time:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "56 Min");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Writer:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "David Benioff");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Language:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "English");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " While a civil war brews between several noble families in Westeros,the children of the former rulers of the land attempt to rise up to power.Meanwhile a forgotten race, bent on destruction, plans to return after thousands of years in the North. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Play Movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Watch Trailer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.img2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DiscoverComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DiscoverComponent_div_9_Template_mat_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.showDetailsAgain(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-actions", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", movie_r8.Poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r8.Title);
} }
class DiscoverComponent {
    constructor(discoverService) {
        this.discoverService = discoverService;
        this.movies = [];
        this.showMovieDetails = false;
        this.showMovieDetails2 = false;
    }
    ngOnInit() {
        this.getMovieList();
    }
    getMovieList() {
        this.discoverService.getMovieList().subscribe((data) => {
            this.movies = data;
            this.img1 = data[0].Poster;
            this.img2 = data[6].Poster;
            console.log(data);
        });
    }
    showDetails(i) {
        window.scroll(0, 0);
        this.showMovieDetails = true;
        this.showMovieDetails2 = false;
        // if(i <= 4){
        // }else if(i >= 5){
        //   window.scroll(0,0)
        //   this.showMovieDetails2 = true;
        //   this.showMovieDetails=false;
        // }
    }
    showDetailsAgain(i) {
        this.showMovieDetails2 = true;
        this.showMovieDetails = false;
    }
}
DiscoverComponent.ɵfac = function DiscoverComponent_Factory(t) { return new (t || DiscoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_discover_module_service__WEBPACK_IMPORTED_MODULE_1__["DiscoverModuleService"])); };
DiscoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiscoverComponent, selectors: [["app-discover"]], decls: 10, vars: 4, consts: [[1, "row"], [1, "col-md"], ["action", ""], ["class", "paddings", 4, "ngIf"], ["class", "col-md-2 mx-5 mb-4 mt-4 cards", 4, "ngFor", "ngForOf"], ["class", "row paddings-card2", 4, "ngIf"], [1, "paddings"], [1, "box"], [1, "col-md-4"], [1, "img"], ["alt", "", 1, "show-img", 3, "src"], [1, "col-md", "details"], [1, "title-head"], [1, "row", "mt-4"], [1, "col-md-2"], [1, "info"], [1, "row", "mt-3"], [1, "info-para"], [1, "heading-buttons", "d-flex"], ["type", "button", 1, "btn", "btn-Play"], ["type", "button", 1, "btn", "btn-Watch", "mx-2"], [1, "col-md-2", "mx-5", "mb-4", "mt-4", "cards"], [1, "example-card", 3, "click"], ["mat-card-image", "", "alt", "Photo of a Shiba Inu", 1, "mat-img", 3, "src"], [1, "title"], [1, "mb-3"], ["mat-button", "", 1, "btn_mat"], ["src", "../../../assets/images/Union.svg", "alt", "", 1, "icon-svg"], ["src", "../../../assets/images/Vector.svg", "alt", "", 1, "icon-svg"], [1, "row", "paddings-card2"]], template: function DiscoverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DiscoverComponent_div_5_Template, 45, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DiscoverComponent_div_7_Template, 11, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DiscoverComponent_div_8_Template, 45, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DiscoverComponent_div_9_Template, 11, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMovieDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movies.slice(0, 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMovieDetails2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movies.slice(4, 50));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: [".background-frame[_ngcontent-%COMP%] {\n  background: #273244;\n}\n\n.example-card[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  background: #394b61;\n  border-radius: 11px;\n  cursor: pointer;\n}\n\n.paddings[_ngcontent-%COMP%] {\n  padding-left: 3rem;\n  padding-right: 1rem;\n  padding-top: 2rem;\n}\n\n.cards[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.paddings-card2[_ngcontent-%COMP%] {\n  padding-left: 4.5rem;\n  padding-right: 1rem;\n}\n\n.show-img[_ngcontent-%COMP%] {\n  width: 85%;\n  height: 30rem;\n}\n\n.details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.box[_ngcontent-%COMP%] {\n  background: #394b61;\n  border-radius: 11px;\n  display: flex;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n\n.mat-img[_ngcontent-%COMP%] {\n  height: 41vh;\n  padding: 1rem;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 25px;\n  color: #d4d7dd;\n  width: 14rem;\n  line-height: 25px;\n}\n\n.btn_mat[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n}\n\n.icon-svg[_ngcontent-%COMP%] {\n  height: 1.8rem;\n}\n\n.title-head[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 40px;\n  color: #d4d7dd;\n}\n\n.info[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 21px;\n  color: #d4d7dd;\n}\n\n.info-para[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #d4d7dd;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #00e0ff !important;\n}\n\n.btn-Play[_ngcontent-%COMP%] {\n  background-color: #00e0ff;\n  color: black;\n  font-weight: 700;\n  padding: 0.6rem 1.9rem;\n  border-radius: 4px;\n}\n\n.btn-Play[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n  color: #00e0ff;\n  border-color: #00e0ff;\n}\n\n.btn-Watch[_ngcontent-%COMP%] {\n  color: #00e0ff;\n  font-weight: 700;\n  border-color: #00e0ff;\n  padding: 0.6rem 1.9rem;\n  border-radius: 4px;\n}\n\n.btn-Watch[_ngcontent-%COMP%]:hover {\n  background-color: #00e0ff;\n  border-color: #00e0ff;\n  color: black;\n}\n\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .search-btn[_ngcontent-%COMP%], .search-btn[_ngcontent-%COMP%]:before, .search-btn[_ngcontent-%COMP%]:after {\n  transition: all 0.25s ease-out;\n}\n\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .search-btn[_ngcontent-%COMP%] {\n  width: 3em;\n  height: 3em;\n}\n\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:invalid:not(:focus), .search-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.search-bar[_ngcontent-%COMP%], .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid {\n  width: 100%;\n}\n\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:focus)    + .search-btn[_ngcontent-%COMP%]:focus {\n  outline: transparent;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  margin: auto;\n  padding: 1.5em;\n  justify-content: center;\n  display: flex;\n  justify-content: flex-start;\n  \n}\n\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: transparent;\n  border-radius: 1.5em;\n  box-shadow: 0 0 0 0.4em white inset;\n  padding: 0.75em;\n  transform: translate(0.5em, 0.5em) scale(0.5);\n  transform-origin: 100% 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-color: white;\n}\n\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid {\n  background: #1a2536;\n  border-radius: 0.375em 0 0 0.375em;\n  transform: scale(1);\n  color: white;\n  box-shadow: none;\n  border: none;\n  height: 50px;\n}\n\n.search-btn[_ngcontent-%COMP%] {\n  \n  border-radius: 0 0.75em 0.75em 0/0 1.5em 1.5em 0;\n  padding: 0.75em;\n  position: relative;\n  transform: translate(0.25em, 0.25em) rotate(45deg) scale(0.25, 0.125);\n  transform-origin: 0 50%;\n}\n\n.search-btn[_ngcontent-%COMP%]:before, .search-btn[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  opacity: 0;\n  position: absolute;\n}\n\n.search-btn[_ngcontent-%COMP%]:before {\n  border-radius: 50%;\n  box-shadow: 0 0 0 0.2em #f1f1f1 inset;\n  top: 0.75em;\n  left: 0.75em;\n  width: 1.2em;\n  height: 1.2em;\n}\n\n.search-btn[_ngcontent-%COMP%]:after {\n  background: #f1f1f1;\n  border-radius: 0 0.25em 0.25em 0;\n  top: 51%;\n  left: 51%;\n  width: 0.75em;\n  height: 0.25em;\n  transform: translate(0.2em, 0) rotate(45deg);\n  transform-origin: 0 50%;\n}\n\n.search-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  overflow: hidden;\n  width: 1px;\n  height: 1px;\n}\n\n\n\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .search-btn[_ngcontent-%COMP%], .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .search-btn[_ngcontent-%COMP%] {\n  background: #273244;\n  border-radius: 0 0.375em 0.375em 0;\n  transform: scale(1);\n  border-color: #1a2536;\n  height: 50px;\n}\n\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .search-btn[_ngcontent-%COMP%]:before, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .search-btn[_ngcontent-%COMP%]:after, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .search-btn[_ngcontent-%COMP%]:before, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .search-btn[_ngcontent-%COMP%]:after {\n  opacity: 1;\n}\n\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .search-btn[_ngcontent-%COMP%]:hover, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .search-btn[_ngcontent-%COMP%]:hover, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid:not(:focus)    + .search-btn[_ngcontent-%COMP%]:focus {\n  background: #273244;\n}\n\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .search-btn[_ngcontent-%COMP%]:active, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .search-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkaXNjb3Zlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtRkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0UseUJBQUE7QUFFRjs7QUFBQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUdGOztBQUFBO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFHRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUdGOztBQUFBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFHRjs7QUFBQTs7OztFQUlFLDhCQUFBO0FBR0Y7O0FBREE7O0VBRUUsVUFBQTtFQUNBLFdBQUE7QUFJRjs7QUFGQTs7RUFFRSxlQUFBO0FBS0Y7O0FBSEE7OztFQUdFLFdBQUE7QUFNRjs7QUFKQTs7RUFFRSxvQkFBQTtBQU9GOztBQUxBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FBUUY7O0FBTkE7RUFDRSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsNkNBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBU0Y7O0FBUEE7RUFDRSx3QkFBQTtBQVVGOztBQVJBOztFQUVFLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBV0Y7O0FBVEE7RUFDRSx5QkFBQTtFQUNBLGdEQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUVBQUE7RUFDQSx1QkFBQTtBQVlGOztBQVZBOztFQUVFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBYUY7O0FBWEE7RUFDRSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQWNGOztBQVpBO0VBQ0UsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSw0Q0FBQTtFQUNBLHVCQUFBO0FBZUY7O0FBYkE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFnQkY7O0FBYkEsaUJBQUE7O0FBQ0E7O0VBRUUsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBZ0JGOztBQWRBOzs7O0VBSUUsVUFBQTtBQWlCRjs7QUFmQTs7O0VBR0UsbUJBQUE7QUFrQkY7O0FBaEJBOztFQUVFLDBCQUFBO0FBbUJGIiwiZmlsZSI6ImRpc2NvdmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtZnJhbWUge1xyXG4gIGJhY2tncm91bmQ6ICMyNzMyNDQ7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNhcmQge1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBiYWNrZ3JvdW5kOiAjMzk0YjYxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucGFkZGluZ3Mge1xyXG4gIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gIHBhZGRpbmctdG9wOiAycmVtO1xyXG59XHJcblxyXG4uY2FyZHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5wYWRkaW5ncy1jYXJkMiB7XHJcbiAgcGFkZGluZy1sZWZ0OiA0LjVyZW07XHJcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLnNob3ctaW1nIHtcclxuICB3aWR0aDogODUlO1xyXG4gIGhlaWdodDogMzByZW07XHJcbn1cclxuXHJcbi5kZXRhaWxzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gIGJhY2tncm91bmQ6ICMzOTRiNjE7XHJcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLm1hdC1pbWcge1xyXG4gIGhlaWdodDogNDF2aDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiAjZDRkN2RkO1xyXG4gIHdpZHRoOiAxNHJlbTtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxufVxyXG5cclxuLmJ0bl9tYXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmljb24tc3ZnIHtcclxuICBoZWlnaHQ6IDEuOHJlbTtcclxufVxyXG5cclxuLnRpdGxlLWhlYWQge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGNvbG9yOiAjZDRkN2RkO1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDIxcHg7XHJcbiAgY29sb3I6ICNkNGQ3ZGQ7XHJcbn1cclxuXHJcbi5pbmZvLXBhcmEge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogI2Q0ZDdkZDtcclxufVxyXG4uYWN0aXZle1xyXG4gIGNvbG9yOiAjMDBlMGZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bi1QbGF5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBlMGZmO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmc6IDAuNnJlbSAxLjlyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uYnRuLVBsYXk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjMDBlMGZmO1xyXG4gIGJvcmRlci1jb2xvcjogIzAwZTBmZjtcclxufVxyXG5cclxuLmJ0bi1XYXRjaCB7XHJcbiAgY29sb3I6ICMwMGUwZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBib3JkZXItY29sb3I6ICMwMGUwZmY7XHJcbiAgcGFkZGluZzogMC42cmVtIDEuOXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5idG4tV2F0Y2g6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGUwZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDBlMGZmO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnNlYXJjaC1iYXIgaW5wdXQsXHJcbi5zZWFyY2gtYnRuLFxyXG4uc2VhcmNoLWJ0bjpiZWZvcmUsXHJcbi5zZWFyY2gtYnRuOmFmdGVyIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1vdXQ7XHJcbn1cclxuLnNlYXJjaC1iYXIgaW5wdXQsXHJcbi5zZWFyY2gtYnRuIHtcclxuICB3aWR0aDogM2VtO1xyXG4gIGhlaWdodDogM2VtO1xyXG59XHJcbi5zZWFyY2gtYmFyIGlucHV0OmludmFsaWQ6bm90KDpmb2N1cyksXHJcbi5zZWFyY2gtYnRuIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNlYXJjaC1iYXIsXHJcbi5zZWFyY2gtYmFyIGlucHV0OmZvY3VzLFxyXG4uc2VhcmNoLWJhciBpbnB1dDp2YWxpZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnNlYXJjaC1iYXIgaW5wdXQ6Zm9jdXMsXHJcbi5zZWFyY2gtYmFyIGlucHV0Om5vdCg6Zm9jdXMpICsgLnNlYXJjaC1idG46Zm9jdXMge1xyXG4gIG91dGxpbmU6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5zZWFyY2gtYmFyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMS41ZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgLyogbWF4LXdpZHRoOiAzMGVtOyAqL1xyXG59XHJcbi5zZWFyY2gtYmFyIGlucHV0IHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAxLjVlbTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjRlbSB3aGl0ZSBpbnNldDtcclxuICBwYWRkaW5nOiAwLjc1ZW07XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC41ZW0sIDAuNWVtKSBzY2FsZSgwLjUpO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMDtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc2VhcmNoLWJhciBpbnB1dDo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcbi5zZWFyY2gtYmFyIGlucHV0OmZvY3VzLFxyXG4uc2VhcmNoLWJhciBpbnB1dDp2YWxpZCB7XHJcbiAgYmFja2dyb3VuZDogIzFhMjUzNjtcclxuICBib3JkZXItcmFkaXVzOiAwLjM3NWVtIDAgMCAwLjM3NWVtO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG4uc2VhcmNoLWJ0biB7XHJcbiAgLyogYmFja2dyb3VuZDogIzE3MTcxNzsgKi9cclxuICBib3JkZXItcmFkaXVzOiAwIDAuNzVlbSAwLjc1ZW0gMCAvIDAgMS41ZW0gMS41ZW0gMDtcclxuICBwYWRkaW5nOiAwLjc1ZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMjVlbSwgMC4yNWVtKSByb3RhdGUoNDVkZWcpIHNjYWxlKDAuMjUsIDAuMTI1KTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcclxufVxyXG4uc2VhcmNoLWJ0bjpiZWZvcmUsXHJcbi5zZWFyY2gtYnRuOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5zZWFyY2gtYnRuOmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMmVtICNmMWYxZjEgaW5zZXQ7XHJcbiAgdG9wOiAwLjc1ZW07XHJcbiAgbGVmdDogMC43NWVtO1xyXG4gIHdpZHRoOiAxLjJlbTtcclxuICBoZWlnaHQ6IDEuMmVtO1xyXG59XHJcbi5zZWFyY2gtYnRuOmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMC4yNWVtIDAuMjVlbSAwO1xyXG4gIHRvcDogNTElO1xyXG4gIGxlZnQ6IDUxJTtcclxuICB3aWR0aDogMC43NWVtO1xyXG4gIGhlaWdodDogMC4yNWVtO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMmVtLCAwKSByb3RhdGUoNDVkZWcpO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xyXG59XHJcbi5zZWFyY2gtYnRuIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbn1cclxuXHJcbi8qIEFjdGl2ZSBzdGF0ZSAqL1xyXG4uc2VhcmNoLWJhciBpbnB1dDpmb2N1cyArIC5zZWFyY2gtYnRuLFxyXG4uc2VhcmNoLWJhciBpbnB1dDp2YWxpZCArIC5zZWFyY2gtYnRuIHtcclxuICBiYWNrZ3JvdW5kOiAjMjczMjQ0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMC4zNzVlbSAwLjM3NWVtIDA7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBib3JkZXItY29sb3I6ICMxYTI1MzY7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5zZWFyY2gtYmFyIGlucHV0OmZvY3VzICsgLnNlYXJjaC1idG46YmVmb3JlLFxyXG4uc2VhcmNoLWJhciBpbnB1dDpmb2N1cyArIC5zZWFyY2gtYnRuOmFmdGVyLFxyXG4uc2VhcmNoLWJhciBpbnB1dDp2YWxpZCArIC5zZWFyY2gtYnRuOmJlZm9yZSxcclxuLnNlYXJjaC1iYXIgaW5wdXQ6dmFsaWQgKyAuc2VhcmNoLWJ0bjphZnRlciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4uc2VhcmNoLWJhciBpbnB1dDpmb2N1cyArIC5zZWFyY2gtYnRuOmhvdmVyLFxyXG4uc2VhcmNoLWJhciBpbnB1dDp2YWxpZCArIC5zZWFyY2gtYnRuOmhvdmVyLFxyXG4uc2VhcmNoLWJhciBpbnB1dDp2YWxpZDpub3QoOmZvY3VzKSArIC5zZWFyY2gtYnRuOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiAjMjczMjQ0O1xyXG59XHJcbi5zZWFyY2gtYmFyIGlucHV0OmZvY3VzICsgLnNlYXJjaC1idG46YWN0aXZlLFxyXG4uc2VhcmNoLWJhciBpbnB1dDp2YWxpZCArIC5zZWFyY2gtYnRuOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XHJcbn1cclxuXHJcblxyXG4vL2Vjb25kXHJcbiJdfQ== */"] });


/***/ }),

/***/ "v2M4":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 4, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sorry!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Page was not found. Please select a valid page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "vNNi":
/*!*****************************************************!*\
  !*** ./src/app/services/discover-module.service.ts ***!
  \*****************************************************/
/*! exports provided: DiscoverModuleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverModuleService", function() { return DiscoverModuleService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class DiscoverModuleService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    getMovieList() {
        return this.http.get('../../assets/movielist.json');
    }
}
DiscoverModuleService.ɵfac = function DiscoverModuleService_Factory(t) { return new (t || DiscoverModuleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
DiscoverModuleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DiscoverModuleService, factory: DiscoverModuleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_discover_discover_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/discover/discover.component */ "ZtNt");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "v2M4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'discover',
    },
    {
        path: 'discover',
        component: _pages_discover_discover_component__WEBPACK_IMPORTED_MODULE_1__["DiscoverComponent"],
    },
    {
        path: '**',
        component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map