(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-payment-payment-module"],{

/***/ "./src/app/demo/payment/payment-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/demo/payment/payment-routing.module.ts ***!
  \********************************************************/
/*! exports provided: PaymentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentRoutingModule", function() { return PaymentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        children: [
            {
                path: 'info',
                loadChildren: './payment-info/payment-info.module#PaymentInfoModule'
            },
            {
                path: 'all',
                loadChildren: './transactions-list/transactions-list.module#TransactionsListModule'
            },
        ]
    }
];
let PaymentRoutingModule = class PaymentRoutingModule {
};
PaymentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PaymentRoutingModule);



/***/ }),

/***/ "./src/app/demo/payment/payment.module.ts":
/*!************************************************!*\
  !*** ./src/app/demo/payment/payment.module.ts ***!
  \************************************************/
/*! exports provided: PaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModule", function() { return PaymentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-routing.module */ "./src/app/demo/payment/payment-routing.module.ts");




let PaymentModule = class PaymentModule {
};
PaymentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_3__["PaymentRoutingModule"]
        ]
    })
], PaymentModule);



/***/ })

}]);
//# sourceMappingURL=demo-payment-payment-module-es2015.js.map