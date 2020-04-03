(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-user-view-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/user/view-user/view-user.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/user/view-user/view-user.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <app-card cardTitle=\"User Profile\" [options]=\"false\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h4 class=\"mb-4\" id=\"basic-info-heading\">Profile Image</h4>\n                    <img *ngIf=\"userProfile.image !== null\" class=\"img-fluid img-thumbnail img-rounded\" src=\"{{userProfile.image}}\" alt=\"user profile image\" width=\"250\" height=\"250\">\n                    <img *ngIf=\"userProfile.image === null\" class=\"img-fluid img-thumbnail img-rounded\" src=\"assets/images/admin-user-demo.png\" alt=\"user profile image\" width=\"250\" height=\"250\">\n                </div>\n                <div class=\"col-md-6 table-responsive-sm\"> \n                    <h4 class=\"mb-4\" id=\"basic-info-heading\">Basic Information</h4>\n                    <table class=\"table table-borderless\">\n                        <tbody>\n                            <tr>\n                                <td><b>Username:</b></td>\n                                <td>{{userProfile.username}}</td>\n                            </tr>\n                            <tr>\n                                <td><b>First Name:</b></td>\n                                <td>{{userProfile.first_name}}</td>\n                            </tr>\n                            <tr>\n                                <td><b>Last Name:</b></td>\n                                <td>{{userProfile.last_name}}</td>\n                            </tr>\n                            <tr>\n                                <td><b>Email:</b></td>\n                                <td>{{userProfile.email}}</td>\n                            </tr>\n                            <tr>\n                                <td><b>Phone:</b></td>\n                                <td>{{userProfile.phone}}</td>\n                            </tr>\n                            <tr>\n                                <td><b>Status:</b></td>\n                                <td>\n                                    <span *ngIf=\"userProfile.status !== '1'\" class=\"badge badge-success\">Active</span>\n                                    <span *ngIf=\"userProfile.status === '1'\" class=\"badge badge-danger\">Disabled</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td><b>Email Verification:</b></td>\n                                <td>\n                                    <span *ngIf=\"userProfile.email_verified_at !== null\" class=\"badge badge-success\">Verified</span>\n                                    <span *ngIf=\"userProfile.email_verified_at === null\" class=\"badge badge-danger\">Unverified</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td><b>Joining Date:</b></td>\n                                <td>{{userProfile.created}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class=\"col-md-12 mt-3 text-right\" id=\"update-button\">\n                    <button class=\"btn btn-primary btn-sm\" (click)=\"updateProfile(userProfile.id)\">Update</button>\n                </div>\n            </div>\n        </app-card>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/demo/user/view-user/view-user-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/demo/user/view-user/view-user-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ViewUserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUserRoutingModule", function() { return ViewUserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _view_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-user.component */ "./src/app/demo/user/view-user/view-user.component.ts");




const routes = [
    {
        path: '',
        component: _view_user_component__WEBPACK_IMPORTED_MODULE_3__["ViewUserComponent"]
    }
];
let ViewUserRoutingModule = class ViewUserRoutingModule {
};
ViewUserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ViewUserRoutingModule);



/***/ }),

/***/ "./src/app/demo/user/view-user/view-user.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/demo/user/view-user/view-user.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media only screen and (max-width: 750px) {\n  #update-button {\n    text-align: center !important; }\n  #basic-info-heading {\n    margin-top: 4%; } }\n\n#basic-info-heading {\n  color: #3F4D67; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94MjMvRG9jdW1lbnRzL0dpdEh1Yi9kYmMtYnVkc2JhbmstYW5ndWxhci9zcmMvYXBwL2RlbW8vdXNlci92aWV3LXVzZXIvdmlldy11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDSSw2QkFBNkIsRUFBQTtFQUdqQztJQUNJLGNBQWMsRUFBQSxFQUNqQjs7QUFHTDtFQUNJLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdXNlci92aWV3LXVzZXIvdmlldy11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkgIHtcclxuICAgICN1cGRhdGUtYnV0dG9uIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAjYmFzaWMtaW5mby1oZWFkaW5nIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0JTtcclxuICAgIH1cclxufVxyXG5cclxuI2Jhc2ljLWluZm8taGVhZGluZyB7XHJcbiAgICBjb2xvcjogIzNGNEQ2NztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/demo/user/view-user/view-user.component.ts":
/*!************************************************************!*\
  !*** ./src/app/demo/user/view-user/view-user.component.ts ***!
  \************************************************************/
/*! exports provided: ViewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUserComponent", function() { return ViewUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let ViewUserComponent = class ViewUserComponent {
    constructor(user, currentRoute, router) {
        this.user = user;
        this.currentRoute = currentRoute;
        this.router = router;
    }
    ngOnInit() {
        this.currentRoute.params.subscribe(params => {
            this.user.getUserById(params.id).then(response => {
                if (response['status'] === 200) {
                    if (response['data'].length > 0) {
                        this.userProfile = response['data'][0];
                        this.userProfile['created'] = this.formatDate(this.userProfile.created);
                    }
                }
                else {
                    console.log(response);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error', 'Internal Server Error', 'error');
                }
            });
        });
    }
    formatDate(date) {
        var newDate = new Date(date);
        let month = "" + (newDate.getMonth() + 1);
        let day = "" + newDate.getDate();
        let year = newDate.getFullYear();
        if (month.length < 2)
            month = "0" + month;
        if (day.length < 2)
            day = "0" + day;
        return [year, month, day].join("-");
    }
    updateProfile(userId) {
        this.router.navigateByUrl(`admin/user/update/${userId}`);
    }
};
ViewUserComponent.ctorParameters = () => [
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ViewUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/user/view-user/view-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-user.component.scss */ "./src/app/demo/user/view-user/view-user.component.scss")).default]
    })
], ViewUserComponent);



/***/ }),

/***/ "./src/app/demo/user/view-user/view-user.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/demo/user/view-user/view-user.module.ts ***!
  \*********************************************************/
/*! exports provided: ViewUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUserModule", function() { return ViewUserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _view_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-user.component */ "./src/app/demo/user/view-user/view-user.component.ts");
/* harmony import */ var _view_user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-user-routing.module */ "./src/app/demo/user/view-user/view-user-routing.module.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






let ViewUserModule = class ViewUserModule {
};
ViewUserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_view_user_component__WEBPACK_IMPORTED_MODULE_3__["ViewUserComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _view_user_routing_module__WEBPACK_IMPORTED_MODULE_4__["ViewUserRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], ViewUserModule);



/***/ })

}]);
//# sourceMappingURL=view-user-view-user-module-es2015.js.map