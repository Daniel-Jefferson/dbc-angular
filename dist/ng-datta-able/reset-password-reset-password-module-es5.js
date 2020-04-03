function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reset-password-reset-password-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/reset-password/reset-password.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/reset-password/reset-password.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoPagesAuthenticationResetPasswordResetPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"auth-wrapper\">\n  <ngx-spinner \n      [name]=\"'spinner1'\" \n      [fullScreen]=\"true\" \n      type=\"ball-clip-rotate-multiple\" \n      size=\"medium\"\n  >\n  </ngx-spinner>\n  <div class=\"auth-content\">\n    <!-- <div class=\"auth-bg\">\n      <span class=\"r\"></span>\n      <span class=\"r s\"></span>\n      <span class=\"r s\"></span>\n      <span class=\"r\"></span>\n    </div> -->\n    <div class=\"card\">\n      <div class=\"card-body text-center\">\n        <div class=\"mb-4\">\n          <!-- <i class=\"feather icon-unlock auth-icon\"></i> -->\n          <img id=\"logo-image\" class=\"img-fluid img-rounded\" [src]=\"'assets/images/buds-logo.png'\" height=\"70\" width=\"70\" />\n        </div>\n        <h3 class=\"mb-4\">Reset Password</h3>\n        <form [formGroup]=\"updatePasswordForm\" (ngSubmit)=\"onResetPasswordSubmit(updatePasswordForm)\" #myform=\"ngForm\" method=\"POST\">\n          <div class=\"input-group mb-2\">\n            <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\" required>\n          </div>\n          <div class=\"input-group mb-3 error-div\">\n            <small *ngIf=\"updatePasswordForm.get('password').hasError('required') && myform.submitted\">Password Required</small>\n            <small *ngIf=\"!updatePasswordForm.get('password').hasError('required') && updatePasswordForm.get('password').status === 'INVALID' && myform.submitted\">Enter a valid password address</small>\n          </div>\n\n\n          <div class=\"input-group mb-2\">\n            <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" formControlName=\"confirm_password\" required>\n          </div>\n          <div class=\"input-group mb-3 error-div\">\n            <small *ngIf=\"updatePasswordForm.get('confirm_password').hasError('required') && myform.submitted\">Confirm Password Required</small>\n            <small *ngIf=\"!updatePasswordForm.get('confirm_password').hasError('required') && updatePasswordForm.get('confirm_password').status === 'INVALID' && myform.submitted\">Enter a valid confirm_password address</small>\n          </div>\n\n         \n          <button class=\"btn btn-primary mb-4\">Submit</button>\n        </form>\n        \n        <p class=\"mb-2 text-muted\">Do you already have account? <a [routerLink]=\"['/auth/signin']\">Sign in</a></p>\n        <p class=\"mb-0 text-muted\">Don’t have an account? <a [routerLink]=\"['/auth/signup']\">Sign up</a></p>\n      \n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/demo/pages/authentication/reset-password/reset-password-routing.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/demo/pages/authentication/reset-password/reset-password-routing.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ResetPasswordRoutingModule */

  /***/
  function srcAppDemoPagesAuthenticationResetPasswordResetPasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordRoutingModule", function () {
      return ResetPasswordRoutingModule;
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


    var _reset_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reset-password.component */
    "./src/app/demo/pages/authentication/reset-password/reset-password.component.ts");

    var routes = [{
      path: '',
      component: _reset_password_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordComponent"]
    }];

    var ResetPasswordRoutingModule = function ResetPasswordRoutingModule() {
      _classCallCheck(this, ResetPasswordRoutingModule);
    };

    ResetPasswordRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ResetPasswordRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/pages/authentication/reset-password/reset-password.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/demo/pages/authentication/reset-password/reset-password.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDemoPagesAuthenticationResetPasswordResetPasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".error-div {\n  color: red;\n  background-color: white !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94MjMvRG9jdW1lbnRzL0dpdEh1Yi9kYmMtYnVkc2JhbmstYW5ndWxhci9zcmMvYXBwL2RlbW8vcGFnZXMvYXV0aGVudGljYXRpb24vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1Ysa0NBQWtDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZW1vL3BhZ2VzL2F1dGhlbnRpY2F0aW9uL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLWRpdiB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/demo/pages/authentication/reset-password/reset-password.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/demo/pages/authentication/reset-password/reset-password.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ResetPasswordComponent */

  /***/
  function srcAppDemoPagesAuthenticationResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
      return ResetPasswordComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services/auth.service */
    "./src/app/services/auth.service.ts");
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

    var ResetPasswordComponent =
    /*#__PURE__*/
    function () {
      function ResetPasswordComponent(formBuilder, auth, router, currentRoute, spinner) {
        _classCallCheck(this, ResetPasswordComponent);

        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
        this.currentRoute = currentRoute;
        this.spinner = spinner;
        this.updatePasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
      }

      _createClass(ResetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updatePasswordForm = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            confirm_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }, {
        key: "onResetPasswordSubmit",
        value: function onResetPasswordSubmit() {
          var _this = this;

          if (!this.updatePasswordForm.invalid) {
            this.showSpinner('spinner1'); //const token = this.currentRoute.params.value.id;

            this.currentRoute.params.subscribe(function (params) {
              console.log(params.id);
              _this.token = params.id;
            });
            var password = this.updatePasswordForm.get('password').value;
            var confirm_password = this.updatePasswordForm.get('confirm_password').value;
            console.log(password);
            console.log(confirm_password);
            this.auth.updateResetpassword(password, confirm_password, this.token).then(function (forgetResponse) {
              console.log(forgetResponse); //var getResponse = JSON.parse(forgetResponse);

              if (forgetResponse['status'] === 200) {
                _this.hideSpinner('spinner1');

                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Success', "Password Reset Successfully", 'success');

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
        key: "password",
        get: function get() {
          return this.updatePasswordForm.get('password');
        }
      }, {
        key: "confirm_password",
        get: function get() {
          return this.updatePasswordForm.get('confirm_password');
        }
      }]);

      return ResetPasswordComponent;
    }();

    ResetPasswordComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
      }];
    };

    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reset-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reset-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/reset-password/reset-password.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reset-password.component.scss */
      "./src/app/demo/pages/authentication/reset-password/reset-password.component.scss")).default]
    })], ResetPasswordComponent);
    /***/
  },

  /***/
  "./src/app/demo/pages/authentication/reset-password/reset-password.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/demo/pages/authentication/reset-password/reset-password.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ResetPasswordModule */

  /***/
  function srcAppDemoPagesAuthenticationResetPasswordResetPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordModule", function () {
      return ResetPasswordModule;
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


    var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./reset-password-routing.module */
    "./src/app/demo/pages/authentication/reset-password/reset-password-routing.module.ts");
    /* harmony import */


    var _reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./reset-password.component */
    "./src/app/demo/pages/authentication/reset-password/reset-password.component.ts");
    /* harmony import */


    var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @sweetalert2/ngx-sweetalert2 */
    "./node_modules/@sweetalert2/ngx-sweetalert2/fesm2015/sweetalert2-ngx-sweetalert2.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    var ResetPasswordModule = function ResetPasswordModule() {
      _classCallCheck(this, ResetPasswordModule);
    };

    ResetPasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_6__["SweetAlert2Module"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"]],
      declarations: [_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordComponent"]]
    })], ResetPasswordModule);
    /***/
  }
}]);
//# sourceMappingURL=reset-password-reset-password-module-es5.js.map