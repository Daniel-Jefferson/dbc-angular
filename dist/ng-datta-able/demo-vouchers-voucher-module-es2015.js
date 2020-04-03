(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-vouchers-voucher-module"],{

/***/ "./src/app/demo/vouchers/voucher-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/demo/vouchers/voucher-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: VoucherRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherRoutingModule", function() { return VoucherRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        children: [
            {
                path: 'all',
                loadChildren: './all/all.module#AllModule'
            }
        ]
    }
];
let VoucherRoutingModule = class VoucherRoutingModule {
};
VoucherRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], VoucherRoutingModule);



/***/ }),

/***/ "./src/app/demo/vouchers/voucher.module.ts":
/*!*************************************************!*\
  !*** ./src/app/demo/vouchers/voucher.module.ts ***!
  \*************************************************/
/*! exports provided: VoucherModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherModule", function() { return VoucherModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _voucher_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voucher-routing.module */ "./src/app/demo/vouchers/voucher-routing.module.ts");




let VoucherModule = class VoucherModule {
};
VoucherModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _voucher_routing_module__WEBPACK_IMPORTED_MODULE_3__["VoucherRoutingModule"]
        ]
    })
], VoucherModule);



/***/ })

}]);
//# sourceMappingURL=demo-vouchers-voucher-module-es2015.js.map