function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forget-password-forget-password-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/forget-password/forget-password.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/forget-password/forget-password.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoPagesAuthenticationForgetPasswordForgetPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"auth-wrapper\">\n  <ngx-spinner \n      [name]=\"'spinner1'\" \n      [fullScreen]=\"true\" \n      type=\"ball-clip-rotate-multiple\" \n      size=\"medium\"\n  >\n  </ngx-spinner>\n  <div class=\"auth-content\">\n    <!-- <div class=\"auth-bg\">\n      <span class=\"r\"></span>\n      <span class=\"r s\"></span>\n      <span class=\"r s\"></span>\n      <span class=\"r\"></span>\n    </div> -->\n    <div class=\"card\">\n      <div class=\"card-body text-center\">\n        <div class=\"mb-4\">\n          <!-- <i class=\"feather icon-unlock auth-icon\"></i> -->\n           <img id=\"logo-image\" class=\"img-fluid img-rounded\" [src]=\"'assets/images/buds-logo.png'\" height=\"70\" width=\"70\" />\n        </div>\n        <h3 class=\"mb-4\">Reset Password</h3>\n        <form [formGroup]=\"resetPasswordForm\" (ngSubmit)=\"onResetSubmit(resetPasswordForm)\" #myform=\"ngForm\" method=\"POST\">\n          <div class=\"input-group mb-2\">\n            <input type=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\" required>\n          </div>\n          <div class=\"input-group mb-3 error-div\">\n            <small *ngIf=\"resetPasswordForm.get('email').hasError('required') && myform.submitted\">Email Required</small>\n            <small *ngIf=\"!resetPasswordForm.get('email').hasError('required') && resetPasswordForm.get('email').status === 'INVALID' && myform.submitted\">Enter a valid email address</small>\n          </div>\n\n         \n          <button class=\"btn btn-primary mb-4\">Submit</button>\n        </form>\n        \n        <p class=\"mb-2 text-muted\">Do you already have account? <a [routerLink]=\"['/auth/signin']\">Sign in</a></p>\n        <p class=\"mb-0 text-muted\">Don’t have an account? <a [routerLink]=\"['/auth/signup']\">Sign up</a></p>\n      \n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/demo/pages/authentication/forget-password/forget-password-routing.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/demo/pages/authentication/forget-password/forget-password-routing.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ForgetPasswordRoutingModule */

  /***/
  function srcAppDemoPagesAuthenticationForgetPasswordForgetPasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgetPasswordRoutingModule", function () {
      return ForgetPasswordRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _forget_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forget-password.component */
    "./src/app/demo/pages/authentication/forget-password/forget-password.component.ts");

    var routes = [{
      path: '',
      component: _forget_password_component__WEBPACK_IMPORTED_MODULE_3__["ForgetPasswordComponent"]
    }];

    var ForgetPasswordRoutingModule = function ForgetPasswordRoutingModule() {
      _classCallCheck(this, ForgetPasswordRoutingModule);
    };

    ForgetPasswordRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ForgetPasswordRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/pages/authentication/forget-password/forget-password.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/demo/pages/authentication/forget-password/forget-password.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDemoPagesAuthenticationForgetPasswordForgetPasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".error-div {\n  color: red;\n  background-color: white !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94MjMvRG9jdW1lbnRzL0dpdEh1Yi9kYmMtYnVkc2JhbmstYW5ndWxhci9zcmMvYXBwL2RlbW8vcGFnZXMvYXV0aGVudGljYXRpb24vZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVU7RUFDVixrQ0FBa0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvYXV0aGVudGljYXRpb24vZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1kaXYge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/demo/pages/authentication/forget-password/forget-password.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/demo/pages/authentication/forget-password/forget-password.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: ForgetPasswordComponent */

  /***/
  function srcAppDemoPagesAuthenticationForgetPasswordForgetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function () {
      return ForgetPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);

    var ForgetPasswordComponent =
    /*#__PURE__*/
    function () {
      function ForgetPasswordComponent(formBuilder, auth, router, spinner) {
        _classCallCheck(this, ForgetPasswordComponent);

        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
        this.spinner = spinner;
        this.resetPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
      }

      _createClass(ForgetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.resetPasswordForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
          });
        }
      }, {
        key: "onResetSubmit",
        value: function onResetSubmit() {
          var _this = this;

          if (!this.resetPasswordForm.invalid) {
            this.showSpinner('spinner1');
            var email = this.resetPasswordForm.get('email').value;
            console.log(email);
            this.auth.forgetpassword(email).then(function (forgetResponse) {
              console.log(forgetResponse); // if (loginResponse['status'] === 200){
              //   if (loginResponse['data'].length > 0){
              //     this.auth.setUserInfo(loginResponse['data']);
              //     this.router.navigateByUrl('dashboard/default');
              //   }
              // }else{
              //   this.setAuthenticationError(loginResponse['message']);
              // }

              if (forgetResponse['status'] === 200) {
                _this.hideSpinner('spinner1');

                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Success', "Reset Email sent successfully. Please check you email", 'success');

                _this.router.navigateByUrl('auth/signin');
              } else {
                _this.hideSpinner('spinner1');

                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Error', "".concat(forgetResponse['message']), 'error');
              }
            });
          }
        }
      }, {
        key: "showSpinner",
        value: function showSpinner(name) {
          this.spinner.show(name);
        }
      }, {
        key: "hideSpinner",
        value: function hideSpinner(name) {
          this.spinner.hide(name);
        }
      }, {
        key: "email",
        get: function get() {
          return this.resetPasswordForm.get('email');
        }
      }]);

      return ForgetPasswordComponent;
    }();

    ForgetPasswordComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
      }];
    };

    ForgetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forget-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forget-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/forget-password/forget-password.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forget-password.component.scss */
      "./src/app/demo/pages/authentication/forget-password/forget-password.component.scss")).default]
    })], ForgetPasswordComponent);
    /***/
  },

  /***/
  "./src/app/demo/pages/authentication/forget-password/forget-password.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/demo/pages/authentication/forget-password/forget-password.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: ForgetPasswordModule */

  /***/
  function srcAppDemoPagesAuthenticationForgetPasswordForgetPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgetPasswordModule", function () {
      return ForgetPasswordModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./forget-password-routing.module */
    "./src/app/demo/pages/authentication/forget-password/forget-password-routing.module.ts");
    /* harmony import */


    var _forget_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forget-password.component */
    "./src/app/demo/pages/authentication/forget-password/forget-password.component.ts");
    /* harmony import */


    var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @sweetalert2/ngx-sweetalert2 */
    "./node_modules/@sweetalert2/ngx-sweetalert2/fesm2015/sweetalert2-ngx-sweetalert2.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    var ForgetPasswordModule = function ForgetPasswordModule() {
      _classCallCheck(this, ForgetPasswordModule);
    };

    ForgetPasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_4__["ForgetPasswordRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_6__["SweetAlert2Module"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"]],
      declarations: [_forget_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordComponent"]]
    })], ForgetPasswordModule);
    /***/
  }
}]);
//# sourceMappingURL=forget-password-forget-password-module-es5.js.map