(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-logout-auth-logout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/auth-logout/auth-logout.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/auth-logout/auth-logout.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-logout/auth-logout-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-logout/auth-logout-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AuthLogoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLogoutRoutingModule", function() { return AuthLogoutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_logout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-logout.component */ "./src/app/demo/pages/authentication/auth-logout/auth-logout.component.ts");




const routes = [
    {
        path: '',
        component: _auth_logout_component__WEBPACK_IMPORTED_MODULE_3__["AuthLogoutComponent"]
    }
];
let AuthLogoutRoutingModule = class AuthLogoutRoutingModule {
};
AuthLogoutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthLogoutRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-logout/auth-logout.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-logout/auth-logout.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvYXV0aGVudGljYXRpb24vYXV0aC1sb2dvdXQvYXV0aC1sb2dvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-logout/auth-logout.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-logout/auth-logout.component.ts ***!
  \********************************************************************************/
/*! exports provided: AuthLogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLogoutComponent", function() { return AuthLogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AuthLogoutComponent = class AuthLogoutComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('userInfo'));
        // console.log(this.user);
        if (this.user) {
            localStorage.removeItem('userInfo');
            this.router.navigateByUrl(`/`);
        }
        else {
            this.router.navigateByUrl(`/`);
        }
    }
};
AuthLogoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthLogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth-logout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth-logout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/auth-logout/auth-logout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth-logout.component.scss */ "./src/app/demo/pages/authentication/auth-logout/auth-logout.component.scss")).default]
    })
], AuthLogoutComponent);



/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-logout/auth-logout.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-logout/auth-logout.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AuthLogoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLogoutModule", function() { return AuthLogoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _auth_logout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-logout-routing.module */ "./src/app/demo/pages/authentication/auth-logout/auth-logout-routing.module.ts");
/* harmony import */ var _auth_logout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-logout.component */ "./src/app/demo/pages/authentication/auth-logout/auth-logout.component.ts");





let AuthLogoutModule = class AuthLogoutModule {
};
AuthLogoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_logout_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthLogoutRoutingModule"]
        ],
        declarations: [_auth_logout_component__WEBPACK_IMPORTED_MODULE_4__["AuthLogoutComponent"]]
    })
], AuthLogoutModule);



/***/ })

}]);
//# sourceMappingURL=auth-logout-auth-logout-module-es2015.js.map