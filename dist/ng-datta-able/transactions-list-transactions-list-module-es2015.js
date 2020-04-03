(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transactions-list-transactions-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/payment/transactions-list/transactions-list.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/payment/transactions-list/transactions-list.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>transactions-list works!</p>\n");

/***/ }),

/***/ "./src/app/demo/payment/transactions-list/transactions-list-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/demo/payment/transactions-list/transactions-list-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: TransactionsListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsListRoutingModule", function() { return TransactionsListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _transactions_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transactions-list.component */ "./src/app/demo/payment/transactions-list/transactions-list.component.ts");




const routes = [
    {
        path: '',
        component: _transactions_list_component__WEBPACK_IMPORTED_MODULE_3__["TransactionsListComponent"]
    }
];
let TransactionsListRoutingModule = class TransactionsListRoutingModule {
};
TransactionsListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TransactionsListRoutingModule);



/***/ }),

/***/ "./src/app/demo/payment/transactions-list/transactions-list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/demo/payment/transactions-list/transactions-list.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGF5bWVudC90cmFuc2FjdGlvbnMtbGlzdC90cmFuc2FjdGlvbnMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/demo/payment/transactions-list/transactions-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/demo/payment/transactions-list/transactions-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TransactionsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsListComponent", function() { return TransactionsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TransactionsListComponent = class TransactionsListComponent {
    constructor() { }
    ngOnInit() {
    }
};
TransactionsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transactions-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./transactions-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/payment/transactions-list/transactions-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./transactions-list.component.scss */ "./src/app/demo/payment/transactions-list/transactions-list.component.scss")).default]
    })
], TransactionsListComponent);



/***/ }),

/***/ "./src/app/demo/payment/transactions-list/transactions-list.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/demo/payment/transactions-list/transactions-list.module.ts ***!
  \****************************************************************************/
/*! exports provided: TransactionsListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsListModule", function() { return TransactionsListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _transactions_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transactions-list-routing.module */ "./src/app/demo/payment/transactions-list/transactions-list-routing.module.ts");
/* harmony import */ var _transactions_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transactions-list.component */ "./src/app/demo/payment/transactions-list/transactions-list.component.ts");





let TransactionsListModule = class TransactionsListModule {
};
TransactionsListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_transactions_list_component__WEBPACK_IMPORTED_MODULE_4__["TransactionsListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _transactions_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["TransactionsListRoutingModule"]
        ]
    })
], TransactionsListModule);



/***/ })

}]);
//# sourceMappingURL=transactions-list-transactions-list-module-es2015.js.map