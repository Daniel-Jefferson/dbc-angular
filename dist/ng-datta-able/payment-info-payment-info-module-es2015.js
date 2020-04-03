(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-info-payment-info-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/payment/payment-info/payment-info.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/payment/payment-info/payment-info.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin-top: 20%;\">\n    <div id=\"form-container\">\n        <div id=\"sq-card-number\"></div>\n        <div class=\"third\" id=\"sq-expiration-date\"></div>\n        <div class=\"third\" id=\"sq-cvv\"></div>\n        <div class=\"third\" id=\"sq-postal-code\"></div>\n        <button id=\"sq-creditcard\" class=\"button-credit-card\" (click)=\"onGetCardNonce($event)\">Pay $1.00</button>\n    </div>\n</div>\n \n <!-- <form id=\"nonceform\" [formGroup]=\"addPaymentForm\" (ngSubmit) = \"onPaymentSubmit(addPaymentForm)\" #myform=\"ngForm\" method=\"POST\">\n    <input formControlName=\"sqId\"  id=\"sq-id\">\n    <input type=\"text\" formControlName=\"cardNonce\" class=\"form-control\" id=\"card-nonce\">\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form> -->\n\n<div style=\"display: none;\">\n    <p id=\"p-nonce\"></p>\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onFormSubmit($event)\" id=\"onFormSubmit\">Submit</button>\n</div>");

/***/ }),

/***/ "./src/app/demo/payment/payment-info/payment-info-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/demo/payment/payment-info/payment-info-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: PaymentInfoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentInfoRoutingModule", function() { return PaymentInfoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _payment_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-info.component */ "./src/app/demo/payment/payment-info/payment-info.component.ts");




const routes = [
    {
        path: '',
        component: _payment_info_component__WEBPACK_IMPORTED_MODULE_3__["PaymentInfoComponent"]
    }
];
let PaymentInfoRoutingModule = class PaymentInfoRoutingModule {
};
PaymentInfoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PaymentInfoRoutingModule);



/***/ }),

/***/ "./src/app/demo/payment/payment-info/payment-info.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/demo/payment/payment-info/payment-info.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nbody, html {\n  color: #373F4A;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: normal;\n  height: 100%; }\n\niframe {\n  margin: 0;\n  padding: 0;\n  border: 0; }\n\nbutton {\n  border: 0; }\n\nhr {\n  height: 1px;\n  border: 0;\n  background-color: #CCC; }\n\nfieldset {\n  margin: 0;\n  padding: 0;\n  border: 0; }\n\n#form-container {\n  position: relative;\n  width: 380px;\n  margin: 0 auto;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n.label {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: 0.5;\n  text-transform: uppercase; }\n\n.third {\n  float: left;\n  width: calc((100% - 32px) / 3);\n  padding: 0;\n  margin: 0 16px 16px 0; }\n\n.third:last-of-type {\n  margin-right: 0; }\n\n/* Define how SqPaymentForm iframes should look */\n\n.sq-input {\n  box-sizing: border-box;\n  border: 1px solid #E0E2E3;\n  border-radius: 4px;\n  outline-offset: -2px;\n  display: inline-block;\n  -webkit-transition: border-color .2s ease-in-out, background .2s ease-in-out;\n  transition: border-color .2s ease-in-out, background .2s ease-in-out; }\n\n/* Define how SqPaymentForm iframes should look when they have focus */\n\n.sq-input--focus {\n  border: 1px solid #4A90E2;\n  background-color: rgba(74, 144, 226, 0.02); }\n\n/* Define how SqPaymentForm iframes should look when they contain invalid values */\n\n.sq-input--error {\n  border: 1px solid #E02F2F;\n  background-color: rgba(244, 47, 47, 0.02); }\n\n#sq-card-number {\n  margin-bottom: 16px; }\n\n/* Customize the \"Pay with Credit Card\" button */\n\n.button-credit-card {\n  width: 100%;\n  height: 56px;\n  margin-top: 10px;\n  background: #4A90E2;\n  border-radius: 4px;\n  cursor: pointer;\n  display: block;\n  color: #FFFFFF;\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 700;\n  letter-spacing: 0;\n  text-align: center;\n  -webkit-transition: background .2s ease-in-out;\n  transition: background .2s ease-in-out; }\n\n.button-credit-card:hover {\n  background-color: #4281CB; }\n\n#error {\n  width: 100%;\n  margin-top: 16px;\n  font-size: 14px;\n  color: red;\n  font-weight: 500;\n  text-align: center;\n  opacity: 0.8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94MjMvRG9jdW1lbnRzL0dpdEh1Yi9kYmMtYnVkc2JhbmstYW5ndWxhci9zcmMvYXBwL2RlbW8vcGF5bWVudC9wYXltZW50LWluZm8vcGF5bWVudC1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQW1DO0VBQ25DLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLGNBQWM7RUFDZCwyREFBMkQ7RUFDM0QsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFHZDtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUdYO0VBQ0UsU0FBUyxFQUFBOztBQUdYO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVMsRUFBQTs7QUFJWDtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osY0FBYztFQUNkLFFBQVE7RUFDUixtQ0FBMkI7VUFBM0IsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsVUFBVTtFQUNWLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLGVBQWUsRUFBQTs7QUFHakIsaURBQUE7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLDRFQUE0RTtFQUdwRSxvRUFBb0UsRUFBQTs7QUFHOUUsc0VBQUE7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsMENBQXVDLEVBQUE7O0FBSXpDLGtGQUFBOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHlDQUFzQyxFQUFBOztBQUd4QztFQUNFLG1CQUFtQixFQUFBOztBQUdyQixnREFBQTs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiw4Q0FBOEM7RUFHdEMsc0NBQXNDLEVBQUE7O0FBR2hEO0VBQ0UseUJBQXlCLEVBQUE7O0FBSTNCO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGVtby9wYXltZW50L3BheW1lbnQtaW5mby9wYXltZW50LWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICB9XHJcbiAgXHJcbiAgYm9keSwgaHRtbCB7XHJcbiAgICBjb2xvcjogIzM3M0Y0QTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICBpZnJhbWUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uIHtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbiAgXHJcbiAgaHIge1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDO1xyXG4gIH1cclxuICBcclxuICBmaWVsZHNldCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxuICBcclxuICBcclxuICAjZm9ybS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDM4MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgLmxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICBcclxuICAudGhpcmQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDMycHgpIC8gMyk7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwIDE2cHggMTZweCAwO1xyXG4gIH1cclxuICBcclxuICAudGhpcmQ6bGFzdC1vZi10eXBlIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgLyogRGVmaW5lIGhvdyBTcVBheW1lbnRGb3JtIGlmcmFtZXMgc2hvdWxkIGxvb2sgKi9cclxuICAuc3EtaW5wdXQge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMEUyRTM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4ycyBlYXNlLWluLW91dCwgYmFja2dyb3VuZCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAtbW96LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMnMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIC1tcy10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjJzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kIC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4ycyBlYXNlLWluLW91dCwgYmFja2dyb3VuZCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIERlZmluZSBob3cgU3FQYXltZW50Rm9ybSBpZnJhbWVzIHNob3VsZCBsb29rIHdoZW4gdGhleSBoYXZlIGZvY3VzICovXHJcbiAgLnNxLWlucHV0LS1mb2N1cyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNEE5MEUyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NCwxNDQsMjI2LDAuMDIpO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKiBEZWZpbmUgaG93IFNxUGF5bWVudEZvcm0gaWZyYW1lcyBzaG91bGQgbG9vayB3aGVuIHRoZXkgY29udGFpbiBpbnZhbGlkIHZhbHVlcyAqL1xyXG4gIC5zcS1pbnB1dC0tZXJyb3Ige1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0UwMkYyRjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LDQ3LDQ3LDAuMDIpO1xyXG4gIH1cclxuICBcclxuICAjc3EtY2FyZC1udW1iZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLyogQ3VzdG9taXplIHRoZSBcIlBheSB3aXRoIENyZWRpdCBDYXJkXCIgYnV0dG9uICovXHJcbiAgLmJ1dHRvbi1jcmVkaXQtY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNEE5MEUyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4ycyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbi1jcmVkaXQtY2FyZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4MUNCO1xyXG4gIH1cclxuICBcclxuICBcclxuICAjZXJyb3Ige1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/demo/payment/payment-info/payment-info.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/demo/payment/payment-info/payment-info.component.ts ***!
  \*********************************************************************/
/*! exports provided: PaymentInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentInfoComponent", function() { return PaymentInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_payment_payment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/payment/payment.service */ "./src/app/services/payment/payment.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





var addPaymentForm;
let PaymentInfoComponent = class PaymentInfoComponent {
    constructor(formBuilder, payment, http) {
        this.formBuilder = formBuilder;
        this.payment = payment;
        this.http = http;
        this.addPaymentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            sqId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            cardNonce: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    ngOnInit() {
        this.paymentForm = new SqPaymentForm({
            // Initialize the payment form elements
            //TODO: Replace with your sandbox application ID
            applicationId: "sandbox-sq0idb-wYZM3PO6qGy_G5aAobIYkw",
            inputClass: 'sq-input',
            autoBuild: false,
            // Customize the CSS for SqPaymentForm iframe elements
            inputStyles: [{
                    fontSize: '16px',
                    lineHeight: '24px',
                    padding: '16px',
                    placeholderColor: '#a0a0a0',
                    backgroundColor: 'transparent',
                }],
            // Initialize the credit card placeholders
            cardNumber: {
                elementId: 'sq-card-number',
                placeholder: 'Card Number'
            },
            cvv: {
                elementId: 'sq-cvv',
                placeholder: 'CVV'
            },
            expirationDate: {
                elementId: 'sq-expiration-date',
                placeholder: 'MM/YY'
            },
            postalCode: {
                elementId: 'sq-postal-code',
                placeholder: 'Postal'
            },
            callbacks: {
                cardNonceResponseReceived: function (errors, nonce, cardData) {
                    if (errors) {
                        console.error('Encountered errors:');
                        errors.forEach(function (error) {
                            console.error('  ' + error.message);
                        });
                        alert('Encountered errors, check browser developer console for more details');
                        return;
                    }
                    //alert(`The generated nonce is:\n${nonce}`);
                    // this.http.post('http://localhost:3300/process-payment').subscribe(nonce => {
                    //     console.log('here i am');
                    // });
                    // this.payment.processPayment(nonce).then(paymentResponse => { console.log(paymentResponse)
                    // });
                    //(<HTMLInputElement>document.getElementById('card-nonce')).value = nonce;
                    document.getElementById('p-nonce').innerHTML = nonce;
                    //(<HTMLInputElement>document.getElementById('sq-id')).value = "CBASEC8F-Phq5_pV7UNi64_kX_4gAQ";
                    console.log(document.getElementById('p-nonce').innerHTML);
                    document.getElementById('onFormSubmit').click();
                    //(<HTMLFormElement>document.getElementById('nonceform')).submit();
                    //  fetch('process-payment', {
                    //   method: 'POST',
                    //   headers: {
                    //     'Accept': 'application/json',
                    //     'Content-Type': 'application/json'
                    //   },
                    //   body: JSON.stringify({
                    //     nonce: nonce
                    //   })
                    // })
                    // .catch(err => {
                    //   alert('Network error: ' + err);
                    // })
                    // .then(response => {
                    //   if (!response.ok) {
                    //     return response.text().then(errorInfo => Promise.reject(errorInfo));
                    //   }
                    //   return response.text();
                    // })
                    // .then(data => {
                    //   console.log(JSON.stringify(data));
                    //   alert('Payment complete successfully!\nCheck browser developer console for more details');
                    // })
                    // .catch(err => {
                    //   console.error(err);
                    //   alert('Payment failed to complete!\nCheck browser developer console for more details');
                    // });
                }
            }
        });
        this.paymentForm.build();
        console.log(this.paymentForm);
        this.addPaymentForm = this.formBuilder.group({
            sqId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cardNonce: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    get sqid() {
        return this.addPaymentForm.get('sqId');
    }
    get cardnonce() {
        return this.addPaymentForm.get('cardNonce');
    }
    onGetCardNonce(event) {
        event.preventDefault();
        this.paymentForm.requestCardNonce();
        console.log(this.paymentForm);
        console.log(event);
    }
    // onPaymentSubmit(){
    //     var data = this.addPaymentForm.value;
    //     console.log('---dfdfdfd-----');
    //     console.log(data);
    //     console.log('---dfdfdfd-----');
    //     this.payment.processPayment(data).then(paymentResponse => { console.log(paymentResponse)
    //     });
    // }
    onFormSubmit(event) {
        this.hit_nonce = document.getElementById('p-nonce').innerHTML;
        console.log(this.hit_nonce);
        var data = {
            cardNonce: this.hit_nonce
        };
        console.log(data);
        this.payment.processPayment(data).then(paymentResponse => {
            console.log(paymentResponse);
        });
    }
    ngAfterViewInit() { }
};
PaymentInfoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_payment_payment_service__WEBPACK_IMPORTED_MODULE_3__["PaymentService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
PaymentInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/payment/payment-info/payment-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment-info.component.scss */ "./src/app/demo/payment/payment-info/payment-info.component.scss")).default]
    })
], PaymentInfoComponent);



/***/ }),

/***/ "./src/app/demo/payment/payment-info/payment-info.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/demo/payment/payment-info/payment-info.module.ts ***!
  \******************************************************************/
/*! exports provided: PaymentInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentInfoModule", function() { return PaymentInfoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _payment_info_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-info-routing.module */ "./src/app/demo/payment/payment-info/payment-info-routing.module.ts");
/* harmony import */ var _payment_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment-info.component */ "./src/app/demo/payment/payment-info/payment-info.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let PaymentInfoModule = class PaymentInfoModule {
};
PaymentInfoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_payment_info_component__WEBPACK_IMPORTED_MODULE_4__["PaymentInfoComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _payment_info_routing_module__WEBPACK_IMPORTED_MODULE_3__["PaymentInfoRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        ]
    })
], PaymentInfoModule);



/***/ })

}]);
//# sourceMappingURL=payment-info-payment-info-module-es2015.js.map