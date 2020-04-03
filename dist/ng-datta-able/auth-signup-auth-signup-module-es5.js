function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-signup-auth-signup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/auth-signup/auth-signup.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/auth-signup/auth-signup.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoPagesAuthenticationAuthSignupAuthSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"auth-wrapper\" style=\"padding-top: 5%;\">\n  <ngx-spinner [name]=\"'spinner1'\" [fullScreen]=\"true\" type=\"ball-clip-rotate-multiple\" size=\"medium\">\n  </ngx-spinner>\n  <div class=\"auth-content signup-cart\">\n    <div class=\"card\">\n      <div class=\"content_signup\">\n        <h1>Partner with Bud’s and do more for your business.</h1>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue, tortor non volutpat imperdiet, orci ipsum blandit odio, ac pellentesque eros dui quis ipsum. Sed eu est eu magna iaculis tempor. Integer ut mi non erat tempus tempus. Mauris lobortis mauris elit, sit amet facilisis arcu pretium ac. Morbi gravida pulvinar arcu, a aliquet mauris eleifend eu. Nullam eget orci mi. Mauris neque lectus, dictum nec urna id, faucibus dignissim nunc. Integer pretium erat a turpis iaculis luctus.</p>\n      </div>\n      <div class=\"form_section_left\">\n          <div class=\"card-body text-center\">\n              <div class=\"mb-4\">\n                <!-- <i class=\"feather icon-user-plus auth-icon\"></i> -->\n                <img id=\"logo-image\" class=\"img-fluid img-rounded\" [src]=\"'assets/images/buds-logo.png'\" height=\"70\" width=\"70\" />\n              </div>\n              <div id=\"register-section\">\n                <h3 class=\"mb-4 signup-heading\">Sign up for an account to create multiple listings\n                  with our growing community!</h3>\n                <form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegisterSubmit(registerForm)\" #myform=\"ngForm\" method=\"POST\">\n                  <div class=\"input-group mb-3\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Account Managerial Email\" formControlName=\"email\"\n                      required>\n                      <div class=\"input-group error-div\">\n                        <small *ngIf=\"registerForm.get('email').hasError('required') && myform.submitted\">Email\n                          Required</small>\n                      </div>\n                  </div>\n                  <div class=\"row mb-3\">\n                    <div class=\"col\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"First name\" formControlName=\"firstname\" required>\n                      <div class=\"input-group error-div\">\n                        <small *ngIf=\"registerForm.get('firstname').hasError('required') && myform.submitted\">First Name\n                          required\n                        </small>\n                      </div>\n                    </div>\n\n                    <div class=\"col\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Last name\" formControlName=\"lastname\" required>\n                      <div class=\"input-group error-div\">\n                        <small *ngIf=\"registerForm.get('lastname').hasError('required') && myform.submitted\">Last Name\n                          required\n                        </small>\n                      </div>\n                    </div>\n                  </div>\n                  \n                  \n\n                  <div class=\"input-group mb-3\">\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\" required>\n                    <div class=\"input-group error-div\">\n                      <small *ngIf=\"registerForm.get('password').hasError('required') && myform.submitted\">Password\n                        Required</small>\n                    </div>\n                  </div>\n                  \n                  <div class=\"input-group mb-3\">\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\"\n                      formControlName=\"confirmPassword\" required>\n                  </div>\n                  <div class=\"input-group mb-3 error-div\">\n                    <span *ngIf=\"registerForm.errors?.invalid\">\n                      Password doesn't match\n                    </span>\n                  </div>\n                  <div class=\"input-group mb-3 check_box_buds\">\n                    <input (change)=\"changeCheck($event)\" type=\"checkbox\" class=\"form-check-input\">\n                    <label class=\"form-check-label\">I confirm that I am 21 or over and that I agree to the Bud’s Bank Terms of Use and Privacy Policy. </label>\n                  </div>\n\n                  <div class=\"input-group mb-4 error-div\">\n                    <small *ngIf=\"authenticationError && myform.submitted\">{{ authenticationError }}</small>\n                  </div>\n\n                  <button [disabled]=\"registerForm.errors?.invalid\"\n                    class=\"btn btn-primary shadow-2 mb-4\">CREATE ACCOUNT</button>\n                </form>\n                <p class=\"mb-0 text-muted\">Already have an account? <a [routerLink]=\"['/auth/signin']\"> Log in</a></p>\n              </div>\n          </div>\n          <div id=\"payment-section\" class=\"pay_buds\" style=\"display: none;\">\n            <div id=\"form-container\" class=\"text-center\" style=\"margin-top: 36%;\">\n              <!-- <div class=\"mb-4\" style=\"margin-bottom: 5%;\">\n                <i class=\"feather icon-user-plus auth-icon\"></i>\n              </div> -->\n              <h3 class=\"mb-4\">Payment</h3>\n              <p class=\"mb-4\">Just a one-step away: Complete your subscription by paying the fee and have your business\n                listing on Bud's Bank.</p>\n              <div id=\"sq-card-number\"></div>\n              <div class=\"third\" id=\"sq-expiration-date\"></div>\n              <div class=\"third\" id=\"sq-cvv\"></div>\n              <div class=\"third\" id=\"sq-postal-code\"></div>\n              <button id=\"sq-creditcard\" class=\"btn btn-primary shadow-2 mb-4\" (click)=\"onGetCardNonce($event)\">Pay\n                $1.00</button>\n            </div>\n            <div style=\"display: none;\">\n              <p id=\"p-nonce\"></p>\n              <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onFormSubmit($event)\" id=\"onFormSubmit\">Submit</button>\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./src/app/demo/pages/authentication/auth-signup/auth-signup-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/demo/pages/authentication/auth-signup/auth-signup-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: AuthSignupRoutingModule */

  /***/
  function srcAppDemoPagesAuthenticationAuthSignupAuthSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthSignupRoutingModule", function () {
      return AuthSignupRoutingModule;
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


    var _auth_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth-signup.component */
    "./src/app/demo/pages/authentication/auth-signup/auth-signup.component.ts");

    var routes = [{
      path: '',
      component: _auth_signup_component__WEBPACK_IMPORTED_MODULE_3__["AuthSignupComponent"]
    }];

    var AuthSignupRoutingModule = function AuthSignupRoutingModule() {
      _classCallCheck(this, AuthSignupRoutingModule);
    };

    AuthSignupRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AuthSignupRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/pages/authentication/auth-signup/auth-signup.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/demo/pages/authentication/auth-signup/auth-signup.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDemoPagesAuthenticationAuthSignupAuthSignupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".error-div {\n  color: red;\n  background-color: white !important; }\n\n* {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\niframe {\n  margin: 0;\n  padding: 0;\n  border: 0; }\n\nbutton {\n  border: 0; }\n\nhr {\n  height: 1px;\n  border: 0;\n  background-color: #CCC; }\n\nfieldset {\n  margin: 0;\n  padding: 0;\n  border: 0; }\n\n#form-container {\n  position: relative;\n  width: 360px;\n  margin: 0 auto;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  background-color: white;\n  padding: 10%; }\n\n.label {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: 0.5;\n  text-transform: uppercase; }\n\n.third {\n  float: left;\n  width: calc((100% - 32px) / 3);\n  padding: 0;\n  margin: 0 16px 16px 0; }\n\n.third:last-of-type {\n  margin-right: 0; }\n\n/* Define how SqPaymentForm iframes should look */\n\n.sq-input {\n  box-sizing: border-box;\n  border: 1px solid #E0E2E3;\n  border-radius: 4px;\n  outline-offset: -2px;\n  display: inline-block;\n  -webkit-transition: border-color .2s ease-in-out, background .2s ease-in-out;\n  transition: border-color .2s ease-in-out, background .2s ease-in-out; }\n\n/* Define how SqPaymentForm iframes should look when they have focus */\n\n.sq-input--focus {\n  border: 1px solid #4A90E2;\n  background-color: rgba(74, 144, 226, 0.02); }\n\n/* Define how SqPaymentForm iframes should look when they contain invalid values */\n\n.sq-input--error {\n  border: 1px solid #E02F2F;\n  background-color: rgba(244, 47, 47, 0.02); }\n\n#sq-card-number {\n  margin-bottom: 16px; }\n\n/* Customize the \"Pay with Credit Card\" button */\n\n.button-credit-card {\n  width: 100%;\n  height: 56px;\n  margin-top: 10px;\n  background: #4A90E2;\n  border-radius: 4px;\n  cursor: pointer;\n  display: block;\n  color: #FFFFFF;\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 700;\n  letter-spacing: 0;\n  text-align: center;\n  -webkit-transition: background .2s ease-in-out;\n  transition: background .2s ease-in-out; }\n\n.button-credit-card:hover {\n  background-color: #4281CB; }\n\n#error {\n  width: 100%;\n  margin-top: 16px;\n  font-size: 14px;\n  color: red;\n  font-weight: 500;\n  text-align: center;\n  opacity: 0.8; }\n\n/*Signup*/\n\n.auth-content.signup-cart {\n  width: 1000px; }\n\n.auth-content.signup-cart .card {\n    -webkit-box-orient: initial;\n    -webkit-box-direction: initial;\n            flex-direction: initial; }\n\n@media only screen and (max-width: 768px) {\n      .auth-content.signup-cart .card {\n        display: block;\n        overflow: hidden; } }\n\n.auth-content.signup-cart .card .content_signup {\n      width: 50%;\n      float: left;\n      padding: 116px 20px 0px 29px; }\n\n@media only screen and (max-width: 768px) {\n        .auth-content.signup-cart .card .content_signup {\n          width: 100%; } }\n\n.auth-content.signup-cart .card .content_signup h1 {\n        font-size: 30px; }\n\n.auth-content.signup-cart .card .form_section_left {\n      width: 50%;\n      float: left; }\n\n@media only screen and (max-width: 768px) {\n        .auth-content.signup-cart .card .form_section_left {\n          width: 100%; } }\n\n.auth-content.signup-cart .card .form_section_left .pay_buds #form-container {\n        padding-top: 0px;\n        padding-left: 10px;\n        padding-right: 10px; }\n\n#register-section .signup-heading {\n  font-size: 16px;\n  text-align: left; }\n\n#register-section .check_box_buds {\n  padding: 9px 10px; }\n\n#register-section .check_box_buds input {\n    position: relative;\n    margin: 0;\n    width: 30px;\n    float: left;\n    margin-top: 10px; }\n\n#register-section .check_box_buds .form-check-label {\n    width: calc(100% - 40px);\n    float: left;\n    font-size: 10px;\n    text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94MjMvRG9jdW1lbnRzL0dpdEh1Yi9kYmMtYnVkc2JhbmstYW5ndWxhci9zcmMvYXBwL2RlbW8vcGFnZXMvYXV0aGVudGljYXRpb24vYXV0aC1zaWdudXAvYXV0aC1zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1Ysa0NBQWtDLEVBQUE7O0FBR3RDO0VBQ0ksbUNBQW1DO0VBQ25DLGtDQUFrQyxFQUFBOztBQVVwQztFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUdYO0VBQ0UsU0FBUyxFQUFBOztBQUdYO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVMsRUFBQTs7QUFJWDtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osY0FBYztFQUNkLFFBQVE7RUFDUixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixVQUFVO0VBQ1YscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQixpREFBQTs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsNEVBQTRFO0VBR3BFLG9FQUFvRSxFQUFBOztBQUc5RSxzRUFBQTs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QiwwQ0FBdUMsRUFBQTs7QUFJekMsa0ZBQUE7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIseUNBQXNDLEVBQUE7O0FBR3hDO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCLGdEQUFBOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDhDQUE4QztFQUd0QyxzQ0FBc0MsRUFBQTs7QUFHaEQ7RUFDRSx5QkFBeUIsRUFBQTs7QUFJM0I7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBSWQsU0FBQTs7QUFFQTtFQUNFLGFBQWEsRUFBQTs7QUFEZjtJQUdNLDJCQUF1QjtJQUF2Qiw4QkFBdUI7WUFBdkIsdUJBQXVCLEVBQUE7O0FBQ3ZCO01BSk47UUFLWSxjQUFjO1FBQ2QsZ0JBQWdCLEVBQUEsRUE4QnpCOztBQXBDSDtNQVNRLFVBQVU7TUFDVixXQUFXO01BQ1gsNEJBQTRCLEVBQUE7O0FBRTVCO1FBYlI7VUFjVSxXQUFXLEVBQUEsRUFLZDs7QUFuQlA7UUFpQlUsZUFBZSxFQUFBOztBQWpCekI7TUFxQlEsVUFBVTtNQUNWLFdBQVcsRUFBQTs7QUFFWDtRQXhCUjtVQXlCVSxXQUFXLEVBQUEsRUFVZDs7QUFuQ1A7UUE4QlksZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixtQkFBbUIsRUFBQTs7QUFPL0I7RUFFSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBSHBCO0VBTUksaUJBQWlCLEVBQUE7O0FBTnJCO0lBUU0sa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQixFQUFBOztBQVp0QjtJQWVNLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGVtby9wYWdlcy9hdXRoZW50aWNhdGlvbi9hdXRoLXNpZ251cC9hdXRoLXNpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1kaXYge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuKiB7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgfVxuICBcbi8vICAgYm9keSwgaHRtbCB7XG4vLyAgICAgY29sb3I6ICMzNzNGNEE7XG4vLyAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbi8vICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gICAgIGhlaWdodDogMTAwJTtcbi8vICAgfVxuICBcbiAgaWZyYW1lIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gIH1cbiAgXG4gIGJ1dHRvbiB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG4gIFxuICBociB7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0M7XG4gIH1cbiAgXG4gIGZpZWxkc2V0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gIH1cbiAgXG4gIFxuICAjZm9ybS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMzYwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwJTtcbiAgfVxuICBcbiAgLmxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgXG4gIC50aGlyZCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAzMnB4KSAvIDMpO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwIDE2cHggMTZweCAwO1xuICB9XG4gIFxuICAudGhpcmQ6bGFzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbiAgXG4gIC8qIERlZmluZSBob3cgU3FQYXltZW50Rm9ybSBpZnJhbWVzIHNob3VsZCBsb29rICovXG4gIC5zcS1pbnB1dCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMkUzO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjJzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kIC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAtbW96LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMnMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQgLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICAtbXMtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4ycyBlYXNlLWluLW91dCwgYmFja2dyb3VuZCAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjJzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kIC4ycyBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgLyogRGVmaW5lIGhvdyBTcVBheW1lbnRGb3JtIGlmcmFtZXMgc2hvdWxkIGxvb2sgd2hlbiB0aGV5IGhhdmUgZm9jdXMgKi9cbiAgLnNxLWlucHV0LS1mb2N1cyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzRBOTBFMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc0LDE0NCwyMjYsMC4wMik7XG4gIH1cbiAgXG4gIFxuICAvKiBEZWZpbmUgaG93IFNxUGF5bWVudEZvcm0gaWZyYW1lcyBzaG91bGQgbG9vayB3aGVuIHRoZXkgY29udGFpbiBpbnZhbGlkIHZhbHVlcyAqL1xuICAuc3EtaW5wdXQtLWVycm9yIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTAyRjJGO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LDQ3LDQ3LDAuMDIpO1xuICB9XG4gIFxuICAjc3EtY2FyZC1udW1iZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cbiAgXG4gIC8qIEN1c3RvbWl6ZSB0aGUgXCJQYXkgd2l0aCBDcmVkaXQgQ2FyZFwiIGJ1dHRvbiAqL1xuICAuYnV0dG9uLWNyZWRpdC1jYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNEE5MEUyO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQgLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIC5idXR0b24tY3JlZGl0LWNhcmQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjgxQ0I7XG4gIH1cbiAgXG4gIFxuICAjZXJyb3Ige1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG5cblxuICAvKlNpZ251cCovXG5cbiAgLmF1dGgtY29udGVudC5zaWdudXAtY2FydHtcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgIC5jYXJke1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogaW5pdGlhbDtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnRfc2lnbnVwe1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgcGFkZGluZzogMTE2cHggMjBweCAwcHggMjlweDtcblxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxe1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZm9ybV9zZWN0aW9uX2xlZnR7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcblxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBheV9idWRze1xuICAgICAgICAgICAgI2Zvcm0tY29udGFpbmVye1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgI3JlZ2lzdGVyLXNlY3Rpb24ge1xuICAgIC5zaWdudXAtaGVhZGluZ3tcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgIC5jaGVja19ib3hfYnVkc3tcbiAgICAgIHBhZGRpbmc6IDlweCAxMHB4O1xuICAgICAgaW5wdXR7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICB9XG4gICAgICAuZm9ybS1jaGVjay1sYWJlbHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/demo/pages/authentication/auth-signup/auth-signup.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/demo/pages/authentication/auth-signup/auth-signup.component.ts ***!
    \********************************************************************************/

  /*! exports provided: AuthSignupComponent */

  /***/
  function srcAppDemoPagesAuthenticationAuthSignupAuthSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthSignupComponent", function () {
      return AuthSignupComponent;
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


    var _services_payment_payment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services/payment/payment.service */
    "./src/app/services/payment/payment.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    var addPaymentForm;

    var AuthSignupComponent =
    /*#__PURE__*/
    function () {
      function AuthSignupComponent(formBuilder, auth, router, payment, spinner) {
        _classCallCheck(this, AuthSignupComponent);

        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
        this.payment = payment;
        this.spinner = spinner;
        this.showPayment = false;
        this.showRegister = true;
        this.toggleBool = true;
        this.disabledAgreement = false;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });

        this.passwordValidator = function (password) {
          var valid = false;
          if (password.length > 5) valid = true;
          return valid;
        };
      }

      _createClass(AuthSignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerForm = this.formBuilder.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          }, {
            validator: this.passwordConfirming
          });
        }
      }, {
        key: "passwordConfirming",
        value: function passwordConfirming(c) {
          if (c.get('password').value !== c.get('confirmPassword').value) {
            return {
              invalid: true
            };
          }
        }
      }, {
        key: "onGetCardNonce",
        value: function onGetCardNonce(event) {
          event.preventDefault();
          this.paymentForm.requestCardNonce();
        }
      }, {
        key: "changeCheck",
        value: function changeCheck(event) {
          console.log(event.target.checked);
          this.disabledAgreement = event.target.checked;

          if (this.disabledAgreement) {
            this.setAuthenticationError('');
          }
        }
      }, {
        key: "onFormSubmit",
        value: function onFormSubmit(event) {
          var _this = this;

          this.showSpinner('spinner1');
          this.hit_nonce = document.getElementById('p-nonce').innerHTML;
          var data = {
            cardNonce: this.hit_nonce
          };
          this.payment.processPayment(data).then(function (paymentResponse) {
            // console.log(paymentResponse)
            if (paymentResponse['status'] === 200) {
              _this.data['cardNonce'] = _this.hit_nonce;

              _this.auth.register(_this.data).then(function (registerResponse) {
                if (registerResponse['status'] === 200) {
                  _this.auth.setUserInfo(registerResponse['user']);

                  window.location.href = '/'; // window.location.href = '#/admin/dispensary/all';
                  // this.router.navigateByUrl('dashboard/default');  
                } else {
                  _this.setAuthenticationError(registerResponse['message']);
                }
              });
            }
          });
        }
      }, {
        key: "setAuthenticationError",
        value: function setAuthenticationError(message) {
          this.authenticationError = message;
        }
      }, {
        key: "onRegisterSubmit",
        value: function onRegisterSubmit() {
          var _this2 = this;

          if (!this.disabledAgreement) {
            this.setAuthenticationError('Please Confirm terms and conditions');
          } else {
            if (!this.registerForm.invalid) {
              var name = this.registerForm.get('firstname').value + ' ' + this.registerForm.get('lastname').value;
              var email = this.registerForm.get('email').value;
              var password = this.registerForm.get('password').value;
              this.data = {
                'name': name,
                'email': email,
                'password': password
              };
              var validation = this.passwordValidator(password);

              if (!validation) {
                this.setAuthenticationError('Password must be atleast of 6 characters');
              } else {
                var emailData = {
                  'email': email
                };
                this.auth.checkEmail(emailData).then(function (response) {
                  if (response['status'] === 200) {
                    console.log(_this2.data);

                    _this2.auth.register(_this2.data).then(function (registerResponse) {
                      if (registerResponse['status'] === 200) {
                        _this2.auth.setUserInfo(registerResponse['user']);

                        window.location.href = '/'; // window.location.href = '#/admin/dispensary/all';
                        // this.router.navigateByUrl('dashboard/default');  
                      } else {
                        _this2.setAuthenticationError(registerResponse['message']);
                      }
                    });
                  } else {
                    _this2.setAuthenticationError('Email already exists');
                  }
                });
              }
            } else {
              this.setAuthenticationError('Please Enter Valid Email Address');
            }
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
        key: "firstname",
        get: function get() {
          return this.registerForm.get('firstname');
        }
      }, {
        key: "lastname",
        get: function get() {
          return this.registerForm.get('lastname');
        }
      }, {
        key: "email",
        get: function get() {
          return this.registerForm.get('email');
        }
      }, {
        key: "password",
        get: function get() {
          return this.registerForm.get('password');
        }
      }]);

      return AuthSignupComponent;
    }();

    AuthSignupComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_payment_payment_service__WEBPACK_IMPORTED_MODULE_4__["PaymentService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]
      }];
    };

    AuthSignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth-signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/auth-signup/auth-signup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auth-signup.component.scss */
      "./src/app/demo/pages/authentication/auth-signup/auth-signup.component.scss")).default]
    })], AuthSignupComponent);
    /***/
  },

  /***/
  "./src/app/demo/pages/authentication/auth-signup/auth-signup.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/demo/pages/authentication/auth-signup/auth-signup.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: AuthSignupModule */

  /***/
  function srcAppDemoPagesAuthenticationAuthSignupAuthSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthSignupModule", function () {
      return AuthSignupModule;
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


    var _auth_signup_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth-signup-routing.module */
    "./src/app/demo/pages/authentication/auth-signup/auth-signup-routing.module.ts");
    /* harmony import */


    var _auth_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth-signup.component */
    "./src/app/demo/pages/authentication/auth-signup/auth-signup.component.ts");
    /* harmony import */


    var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @sweetalert2/ngx-sweetalert2 */
    "./node_modules/@sweetalert2/ngx-sweetalert2/fesm2015/sweetalert2-ngx-sweetalert2.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    var AuthSignupModule = function AuthSignupModule() {
      _classCallCheck(this, AuthSignupModule);
    };

    AuthSignupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _auth_signup_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthSignupRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_6__["SweetAlert2Module"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"]],
      declarations: [_auth_signup_component__WEBPACK_IMPORTED_MODULE_5__["AuthSignupComponent"]]
    })], AuthSignupModule);
    /***/
  }
}]);
//# sourceMappingURL=auth-signup-auth-signup-module-es5.js.map