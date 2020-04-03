(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["all-all-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/vouchers/all/all.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/vouchers/all/all.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-xl-12\">\n      <app-card cardTitle=\"Vouchers\" [options]=\"false\">\n        <!-- <div class=\"search-questions\">\n          <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"searchText\" autocomplete=\"off\" placeholder=\"Search by name\">\n          <button>Search</button>\n        </div> -->\n        <div class=\"table-responsive\">\n          <table class=\"table table-hover\">\n            <thead>\n            <tr>\n              <th>User Name</th>\n              <th>Email</th>\n              <th>Dispensary Name</th>\n              <th>Status</th>\n              <th>Created at</th>\n              <th>Expiry Date</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let voucher of this.allVouchers\">\n              <td>{{ voucher.first_name }} {{ voucher.last_name }}</td>\n              <td>{{ voucher.email }}</td>\n              <td>{{ voucher.name }}</td>\n              <td *ngIf=\"voucher.status == 'true'\">\n                <a href=\"javascript:\" class=\"badge badge-success theme-bg text-white f-12\">Available</a>\n              </td>\n              <td *ngIf=\"voucher.status == 'false'\">\n                <a href=\"javascript:\" class=\"badge badge-primary theme-bg2 text-white f-12\">Redeemed</a>\n              </td>\n              <td>{{ voucher.created | date:'yyyy-MM-dd' }}</td>\n              <td>{{ voucher.expiry | date:'yyyy-MM-dd' }}</td>\n              \n            </tr>\n            </tbody>\n          </table>\n          <div class=\"mt-3 text-right\">\n            <a (click)=\"loadPrevResults()\" class=\"btn btn-primary\" style=\"color: white; padding: 5px;\">Prev</a>\n            <a (click)=\"loadNextResults()\" class=\"btn btn-primary\" style=\"color: white; padding: 5px;\">Next</a>\n          </div>\n        </div>\n      </app-card>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./src/app/demo/vouchers/all/all-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/demo/vouchers/all/all-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AllRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllRoutingModule", function() { return AllRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _all_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all.component */ "./src/app/demo/vouchers/all/all.component.ts");




const routes = [
    {
        path: '',
        component: _all_component__WEBPACK_IMPORTED_MODULE_3__["AllComponent"]
    }
];
let AllRoutingModule = class AllRoutingModule {
};
AllRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AllRoutingModule);



/***/ }),

/***/ "./src/app/demo/vouchers/all/all.component.scss":
/*!******************************************************!*\
  !*** ./src/app/demo/vouchers/all/all.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdm91Y2hlcnMvYWxsL2FsbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/demo/vouchers/all/all.component.ts":
/*!****************************************************!*\
  !*** ./src/app/demo/vouchers/all/all.component.ts ***!
  \****************************************************/
/*! exports provided: AllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllComponent", function() { return AllComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_voucher_voucher_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/voucher/voucher.service */ "./src/app/services/voucher/voucher.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




let AllComponent = class AllComponent {
    constructor(voucherService) {
        this.voucherService = voucherService;
        this.allVouchers = [];
        this.pageSize = 10;
        this.pageNumber = 0;
    }
    ngOnInit() {
        this.getVouchers(this.pageNumber, this.pageSize);
    }
    getVouchers(pageNumber, pageSize) {
        this.voucherService.getVoucher(pageNumber, pageSize).then(response => {
            console.log(response);
            if (response['status'] === 200) {
                if (response['data'].length > 0) {
                    this.allVouchers = response['data'];
                    console.log(this.allVouchers);
                }
                else {
                    this.allVouchers = null;
                }
            }
            else {
                if (this.pageNumber !== 0) {
                    this.pageNumber = this.pageNumber - 10;
                }
            }
        });
    }
    loadNextResults() {
        var pageNumber = this.pageNumber + 10;
        this.pageNumber = pageNumber;
        this.getVouchers(pageNumber, this.pageSize);
    }
    loadPrevResults() {
        if (this.pageNumber !== 0) {
            var pageNumber = this.pageNumber - 10;
            this.pageNumber = pageNumber;
            if (pageNumber >= 0 && this.pageSize >= 0) {
                this.getVouchers(pageNumber, this.pageSize);
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                icon: "error",
                title: "error",
                text: "No more records available"
            });
        }
    }
};
AllComponent.ctorParameters = () => [
    { type: _services_voucher_voucher_service__WEBPACK_IMPORTED_MODULE_2__["VoucherService"] }
];
AllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/vouchers/all/all.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all.component.scss */ "./src/app/demo/vouchers/all/all.component.scss")).default]
    })
], AllComponent);



/***/ }),

/***/ "./src/app/demo/vouchers/all/all.module.ts":
/*!*************************************************!*\
  !*** ./src/app/demo/vouchers/all/all.module.ts ***!
  \*************************************************/
/*! exports provided: AllModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllModule", function() { return AllModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _all_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-routing.module */ "./src/app/demo/vouchers/all/all-routing.module.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _all_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all.component */ "./src/app/demo/vouchers/all/all.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "./node_modules/@sweetalert2/ngx-sweetalert2/fesm2015/sweetalert2-ngx-sweetalert2.js");








let AllModule = class AllModule {
};
AllModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _all_routing_module__WEBPACK_IMPORTED_MODULE_3__["AllRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTabsetModule"],
            _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__["SweetAlert2Module"]
        ],
        declarations: [_all_component__WEBPACK_IMPORTED_MODULE_5__["AllComponent"]]
    })
], AllModule);



/***/ }),

/***/ "./src/app/services/voucher/voucher.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/voucher/voucher.service.ts ***!
  \*****************************************************/
/*! exports provided: VoucherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherService", function() { return VoucherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let VoucherService = class VoucherService {
    constructor(http) {
        this.http = http;
    }
    getVoucher(pageNumber, pageSize) {
        //return this.http.post(`${environment.apiUrl}/voucher/getall?page=${pageNumber}&size=${pageSize}`).toPromise();
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/voucher/getall/?page=${pageNumber}&size=${pageSize}`).toPromise();
    }
};
VoucherService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
VoucherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VoucherService);



/***/ })

}]);
//# sourceMappingURL=all-all-module-es2015.js.map