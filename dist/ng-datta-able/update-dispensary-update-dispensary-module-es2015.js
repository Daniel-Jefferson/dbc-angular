(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-dispensary-update-dispensary-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dispensaries/update-dispensary/update-dispensary.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dispensaries/update-dispensary/update-dispensary.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <app-card cardTitle=\"Update Dispensary\" [options]=\"false\">\n                <label>Enter address<span class=\"mandatory\">*</span></label>\n                <input type=\"text\" class=\"form-control\" (keydown.enter)=\"$event.preventDefault()\" placeholder=\"Search Nearest Location\" value=\"{{showAddress}}\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" #search>\n                <agm-map \n                    [latitude]=\"mapLatitude\" \n                    [longitude]=\"mapLongitude\" \n                    [zoom]=\"zoom\" >\n                    <agm-marker \n                        [latitude]=\"mapLatitude\" \n                        [longitude]=\"mapLongitude\"\n                        [markerDraggable]=\"true\"\n                        (dragEnd)=\"markerDragEnd($event)\">\n                    </agm-marker>\n                </agm-map>\n            <form [formGroup]=\"updateDispensaryForm\" (ngSubmit) = \"onUpdateDispensarySubmit(updateDispensaryForm)\" #myform=\"ngForm\" method=\"POST\" class=\"mt-3\" enctype=\"multipart/form-data\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Title<span class=\"mandatory\">*</span></label>\n                            <input type=\"text\" formControlName=\"name\" class=\"form-control\" aria-describedby=\"Username\" placeholder=\"Enter Title\" required>\n                            <div class=\"mb-3 error-div\">\n                                <small *ngIf=\"updateDispensaryForm.get('name').hasError('required') && myform.submitted\">Title Required</small>\n                            </div>\n                        </div>\n                        \n                        <div class=\"form-group\">\n                            <label>Opening Time<span class=\"mandatory\">*</span></label>\n                            <input type=\"time\" formControlName=\"open_time\" class=\"form-control\" aria-describedby=\"Opening Time\" placeholder=\"Enter Opening Time\" required>\n                            <div class=\"mb-3 error-div\">\n                                <small *ngIf=\"updateDispensaryForm.get('open_time').hasError('required') && myform.submitted\">Opening Time Required</small>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label>Opening Day<span class=\"mandatory\">*</span></label>\n                            <select class=\"form-control\" formControlName=\"open_day\">\n                                <option value=\"Mon\">Monday</option>\n                                <option value=\"Tue\">Tuesday</option>\n                                <option value=\"Wed\">Wednesday</option>\n                                <option value=\"Thu\">Thursday</option>\n                                <option value=\"Fri\">Friday</option>\n                                <option value=\"Sat\">Saturday</option>\n                                <option value=\"Sun\">Sunday</option>\n                            </select>\n                            <div class=\"mb-3 error-div\">\n                                <small *ngIf=\"updateDispensaryForm.get('open_day').hasError('required') && myform.submitted\">Opening Day Required</small>\n                            </div>\n                        </div>\n\n                        <img *ngIf=\"dispensaryImage !== null\" class=\"img-fluid img-thumbnail img-rounded\" src=\"{{dispensaryImage}}\" alt=\"Dispensary profile image\" width=\"250\" height=\"250\">\n                        <img *ngIf=\"dispensaryImage === null\" class=\"img-fluid img-thumbnail img-rounded\" src=\"assets/images/admin-user-demo.png\" alt=\"Dispensary profile image\" width=\"250\" height=\"250\">\n\n                        <div class=\"form-group\">\n                            <label>Image<span class=\"mandatory\">*</span></label>\n                            <input type=\"file\" formControlName=\"image\" class=\"form-control\" aria-describedby=\"Image\" (change)=\"fileProgress($event)\" ng2FileSelect [uploader]=\"uploader\" accept=\"image/*\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Phone<span class=\"mandatory\">*</span></label>\n                            <input type=\"text\" formControlName=\"phone\" class=\"form-control\" aria-describedby=\"Phone\" placeholder=\"Enter Phone\" required>\n                            <div class=\"mb-3 error-div\">\n                                <small *ngIf=\"updateDispensaryForm.get('phone').hasError('required') && myform.submitted\">Phone Required</small>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label>Closing Time<span class=\"mandatory\">*</span></label>\n                            <input type=\"time\" formControlName=\"close_time\" class=\"form-control\" aria-describedby=\"Closing Time\" placeholder=\"Enter Closing Time\" required>\n                            <div class=\"mb-3 error-div\">\n                                <small *ngIf=\"updateDispensaryForm.get('close_time').hasError('required') && myform.submitted\">Closing Time Required</small>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label>Closing Day<span class=\"mandatory\">*</span></label>\n                            <select class=\"form-control\" formControlName=\"close_day\">\n                                <option value=\"Mon\">Monday</option>\n                                <option value=\"Tue\">Tuesday</option>\n                                <option value=\"Wed\">Wednesday</option>\n                                <option value=\"Thu\">Thursday</option>\n                                <option value=\"Fri\">Friday</option>\n                                <option value=\"Sat\">Saturday</option>\n                                <option value=\"Sun\">Sunday</option>\n                            </select>\n                            <div class=\"mb-3 error-div\">\n                                <small *ngIf=\"updateDispensaryForm.get('close_day').hasError('required') && myform.submitted\">Closing Day Required</small>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\" style=\"display: none;\">\n                        <div class=\"form-group\">\n                            <label>Address<span class=\"mandatory\">*</span></label>\n                            <textarea formControlName=\"address\" class=\"form-control\" aria-describedby=\"Address\"></textarea>\n                            <div class=\"mb-3 error-div\">\n                                <small *ngIf=\"updateDispensaryForm.get('address').hasError('required') && myform.submitted\">Address Required</small>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <label>Deal</label>\n                            <textarea formControlName=\"deal\" class=\"form-control\" aria-describedby=\"Deal\"></textarea>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"sub_lable\">Subscription<span class=\"mandatory\">*</span></label>\n                            <div class=\"subscription_plans_wrapper\">\n                                <div class=\"subscription_plans_wrapper_inner selected\">\n                                    <h3>Free Trial</h3>\n                                    <p>Give us a try free for 3 months!</p>\n                                    <span>FREE</span>\n                                </div>\n                            </div>\n                            <div class=\"subscription_plans_wrapper\">\n                                <div class=\"subscription_plans_wrapper_inner\">\n                                    <h3>Monthly</h3>\n                                    <p>Billed as one payment of $100.00 every month.</p>\n                                    <span>$100.00/month</span>\n                                </div>\n                            </div>\n                            <div class=\"subscription_plans_wrapper\">\n                                <div class=\"subscription_plans_wrapper_inner\">\n                                    <h3>Quarterly</h3>\n                                    <p>Billed as one payment of $270.00 every 3 month.</p>\n                                    <span>$90.00/month</span>\n                                </div>\n                            </div>\n                            <div class=\"subscription_plans_wrapper\">\n                                <div class=\"subscription_plans_wrapper_inner\">\n                                    <h3>Anually</h3>\n                                    <p>Billed as one payment of $960.00 every 12 month.</p>\n                                    <span>$80.00/month</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"custom-control custom-checkbox mb-3\">\n                                <input type=\"checkbox\" value=\"false\" class=\"custom-control-input\" formControlName=\"featured\" id=\"customControlValidation1\">\n                                <label class=\"custom-control-label\" for=\"customControlValidation1\">Featured Dispensary</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                \n                <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n            </form>\n            </app-card>\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./src/app/demo/dispensaries/update-dispensary/update-dispensary-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/demo/dispensaries/update-dispensary/update-dispensary-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: UpdateDispensariesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDispensariesRoutingModule", function() { return UpdateDispensariesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _update_dispensary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-dispensary.component */ "./src/app/demo/dispensaries/update-dispensary/update-dispensary.component.ts");




const routes = [
    {
        path: '',
        component: _update_dispensary_component__WEBPACK_IMPORTED_MODULE_3__["UpdateDispensaryComponent"]
    }
];
let UpdateDispensariesRoutingModule = class UpdateDispensariesRoutingModule {
};
UpdateDispensariesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UpdateDispensariesRoutingModule);



/***/ }),

/***/ "./src/app/demo/dispensaries/update-dispensary/update-dispensary.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/demo/dispensaries/update-dispensary/update-dispensary.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n  height: 300px; }\n\n.error-div {\n  color: red;\n  background-color: white; }\n\nlabel {\n  font-weight: bold; }\n\n.mandatory {\n  color: red; }\n\n.subscription_plans_wrapper {\n  padding-bottom: 20px;\n  position: relative; }\n\n.subscription_plans_wrapper .subscription_plans_wrapper_inner.selected {\n    background: #59aa70;\n    cursor: pointer; }\n\n.subscription_plans_wrapper .subscription_plans_wrapper_inner.selected h3 {\n      color: #fff; }\n\n.subscription_plans_wrapper .subscription_plans_wrapper_inner.selected p {\n      color: #fff; }\n\n.subscription_plans_wrapper .subscription_plans_wrapper_inner.selected span {\n      color: #fff; }\n\n.subscription_plans_wrapper .subscription_plans_wrapper_inner {\n    background-color: #f7f7f7;\n    padding: 15px 20px;\n    cursor: not-allowed;\n    display: block; }\n\n.subscription_plans_wrapper .subscription_plans_wrapper_inner h3 {\n      font-size: 17px;\n      margin-bottom: 2px;\n      color: #888; }\n\n.subscription_plans_wrapper .subscription_plans_wrapper_inner p {\n      margin: 0px; }\n\n.subscription_plans_wrapper .subscription_plans_wrapper_inner span {\n      position: absolute;\n      right: 50px;\n      font-size: 16px;\n      top: 50%;\n      margin-top: -20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94MjMvRG9jdW1lbnRzL0dpdEh1Yi9kYmMtYnVkc2JhbmstYW5ndWxhci9zcmMvYXBwL2RlbW8vZGlzcGVuc2FyaWVzL3VwZGF0ZS1kaXNwZW5zYXJ5L3VwZGF0ZS1kaXNwZW5zYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLFVBQVU7RUFDVix1QkFBdUIsRUFBQTs7QUFFM0I7RUFDQyxpQkFBaUIsRUFBQTs7QUFFbEI7RUFDQyxVQUFVLEVBQUE7O0FBRVg7RUFDSSxvQkFBb0I7RUFDcEIsa0JBQWtCLEVBQUE7O0FBRnRCO0lBS1MsbUJBQW1CO0lBQ25CLGVBQWUsRUFBQTs7QUFOeEI7TUFRTyxXQUFXLEVBQUE7O0FBUmxCO01BV08sV0FBVyxFQUFBOztBQVhsQjtNQWNPLFdBQVcsRUFBQTs7QUFkbEI7SUFrQksseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYyxFQUFBOztBQXJCbkI7TUF3Qk0sZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixXQUFXLEVBQUE7O0FBMUJqQjtNQThCTSxXQUFXLEVBQUE7O0FBOUJqQjtNQWlDTSxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLGVBQWU7TUFDZixRQUFRO01BQ1IsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZW1vL2Rpc3BlbnNhcmllcy91cGRhdGUtZGlzcGVuc2FyeS91cGRhdGUtZGlzcGVuc2FyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLmVycm9yLWRpdiB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxubGFiZWx7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm1hbmRhdG9yeXtcclxuXHRjb2xvcjogcmVkO1xyXG59XHJcbi5zdWJzY3JpcHRpb25fcGxhbnNfd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAuc3Vic2NyaXB0aW9uX3BsYW5zX3dyYXBwZXJfaW5uZXIuc2VsZWN0ZWR7XHJcbiAgICBcdCAgICBiYWNrZ3JvdW5kOiAjNTlhYTcwO1xyXG4gICAgXHQgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgXHQgICAgIGgze1xyXG5cdCAgICBcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHQgICAgfVxyXG5cdFx0ICAgIHB7XHJcblx0XHQgICAgXHRjb2xvcjogI2ZmZjtcclxuXHRcdCAgICB9XHJcblx0XHQgICAgc3BhbiB7XHJcblx0XHQgICAgXHRjb2xvcjogI2ZmZjtcclxuXHRcdCAgICB9XHJcbiAgICB9XHJcbiAgICAuc3Vic2NyaXB0aW9uX3BsYW5zX3dyYXBwZXJfaW5uZXIge1xyXG5cdCAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG5cdCAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcblx0ICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcblx0ICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuXHQgICAgaDN7XHJcblx0ICAgIFx0Zm9udC1zaXplOiAxN3B4O1xyXG5cdCAgICBcdG1hcmdpbi1ib3R0b206IDJweDtcclxuXHQgICAgXHRjb2xvcjogIzg4ODtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgcHtcclxuXHQgICAgXHRtYXJnaW46IDBweDtcclxuXHQgICAgfVxyXG5cdCAgICBzcGFuIHtcclxuXHRcdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHQgICAgcmlnaHQ6IDUwcHg7XHJcblx0XHQgICAgZm9udC1zaXplOiAxNnB4O1xyXG5cdFx0ICAgIHRvcDogNTAlO1xyXG5cdFx0ICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/demo/dispensaries/update-dispensary/update-dispensary.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/demo/dispensaries/update-dispensary/update-dispensary.component.ts ***!
  \************************************************************************************/
/*! exports provided: UpdateDispensaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDispensaryComponent", function() { return UpdateDispensaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_dispensaries_dispensaries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/dispensaries/dispensaries.service */ "./src/app/services/dispensaries/dispensaries.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);









let UpdateDispensaryComponent = class UpdateDispensaryComponent {
    constructor(router, dispensary, formBuilder, mapsAPILoader, ngZone, currentRoute) {
        this.router = router;
        this.dispensary = dispensary;
        this.formBuilder = formBuilder;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.currentRoute = currentRoute;
        this.fileData = null;
        this.previewUrl = null;
        this.fileUploadProgress = null;
        this.uploadedFilePath = null;
        this.uploadAPI = `${_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl}/dispensary/add/image`;
        this.imageTitle = 'budsbankadminpanel';
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploader"]({
            'url': this.uploadAPI,
            itemAlias: 'image',
            allowedFileType: ['image']
        });
        this.updateDispensaryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            featured: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            open_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            close_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            open_day: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            close_day: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            dispensary_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            deal: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    ngOnInit() {
        this.currentRoute.params.subscribe(params => {
            this.dispensary.getDispensaryById(params.id).then(response => {
                if (response['status'] === 200) {
                    if (response['data'].length > 0) {
                        this.dispensaryProfile = response['data'][0];
                        this.setCurrentLocation(this.dispensaryProfile);
                        this.updateDispensaryForm.controls['dispensary_id'].setValue(response['data'][0].id);
                        if (response['data'][0].featured === true || response['data'][0].featured === 'true') {
                            this.updateDispensaryForm.controls['featured'].setValue(response['data'][0].featured);
                        }
                        if (response['data'][0].image) {
                            this.dispensaryImage = response['data'][0].image;
                        }
                        this.updateDispensaryForm.controls['name'].setValue(response['data'][0].name);
                        this.updateDispensaryForm.controls['phone'].setValue(response['data'][0].phone);
                        this.updateDispensaryForm.controls['address'].setValue(response['data'][0].address);
                        this.updateDispensaryForm.controls['deal'].setValue(response['data'][0].deal);
                        this.showAddress = response['data'][0].address;
                        // this.updateDispensaryForm.controls['image'].setValue(response['data'][0].image); 
                        this.updateDispensaryForm.controls['open_time'].setValue(response['data'][0].timmings.open_time);
                        this.updateDispensaryForm.controls['close_time'].setValue(response['data'][0].timmings.close_time);
                        this.updateDispensaryForm.controls['open_day'].setValue(response['data'][0].timmings.open_day);
                        this.updateDispensaryForm.controls['close_day'].setValue(response['data'][0].timmings.close_day);
                        this.updateDispensaryForm.controls['longitude'].setValue(response['data'][0].longitude);
                        this.updateDispensaryForm.controls['latitude'].setValue(response['data'][0].latitude);
                    }
                }
                else {
                    console.log(response);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Error', `${response['message']}`, 'error');
                }
            });
        });
        this.mapsAPILoader.load().then(() => {
            this.geoCoder = new google.maps.Geocoder;
            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    let place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    this.mapLatitude = place.geometry.location.lat();
                    this.mapLongitude = place.geometry.location.lng();
                    this.changedAddress = place.formatted_address;
                    this.zoom = 12;
                });
            });
        });
        this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
        this.uploader.onCompleteItem = (item) => {
            console.log(item.file.name);
        };
        this.updateDispensaryForm = this.formBuilder.group({
            featured: [null],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            image: [null],
            open_time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            close_time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            open_day: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            close_day: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            dispensary_id: [''],
            latitude: [''],
            longitude: [''],
            deal: ['']
        });
    }
    setCurrentLocation(locationToSet) {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.mapLatitude = locationToSet.latitude;
                this.mapLongitude = locationToSet.longitude;
                this.zoom = 8;
                this.getAddress(this.mapLatitude, this.mapLongitude, 0);
            });
        }
    }
    markerDragEnd($event) {
        console.log($event);
        this.mapLatitude = $event.coords.lat;
        this.mapLongitude = $event.coords.lng;
        this.getAddress(this.mapLatitude, this.mapLongitude, 1);
    }
    getAddress(latitude, longitude, isDrag) {
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
            console.log(results);
            console.log(status);
            if (status === 'OK') {
                if (results[0]) {
                    this.zoom = 12;
                    this.mapAddress = results[0].formatted_address;
                    if (isDrag === 1 || isDrag === '1') {
                        this.showAddress = results[0].formatted_address;
                        this.changedAddress = results[0].formatted_address;
                    }
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    }
    get dispensary_id() {
        return this.updateDispensaryForm.get('dispensary_id');
    }
    get featured() {
        return this.updateDispensaryForm.get('featured');
    }
    get name() {
        return this.updateDispensaryForm.get('name');
    }
    get phone() {
        return this.updateDispensaryForm.get('phone');
    }
    get address() {
        return this.updateDispensaryForm.get('address');
    }
    get deal() {
        return this.updateDispensaryForm.get('deal');
    }
    get image() {
        return this.updateDispensaryForm.get('image');
    }
    get open_time() {
        return this.updateDispensaryForm.get('open_time');
    }
    get close_time() {
        return this.updateDispensaryForm.get('close_time');
    }
    get open_day() {
        return this.updateDispensaryForm.get('open_day');
    }
    get close_day() {
        return this.updateDispensaryForm.get('close_day');
    }
    get latitude() {
        return this.updateDispensaryForm.get('latitude');
    }
    get longitude() {
        return this.updateDispensaryForm.get('longitude');
    }
    fileProgress(fileInput) {
        this.fileData = fileInput.target.files[0];
    }
    onUpdateDispensarySubmit() {
        if (!this.updateDispensaryForm.invalid) {
            var data = this.updateDispensaryForm.value;
            // data['longitude'] = this.mapLongitude;
            // data['latitude'] = this.mapLatitude;
            data['longitude'] = (!this.mapLongitude) ? this.updateDispensaryForm.value.longitude : this.mapLongitude;
            data['latitude'] = (!this.mapLatitude) ? this.updateDispensaryForm.value.latitude : this.mapLatitude;
            data['formatted_address'] = (!this.changedAddress) ? this.updateDispensaryForm.value.address : this.changedAddress;
            if (!this.changedAddress) {
                console.log('yes');
            }
            else {
                console.log('no');
            }
            console.log(data['formatted_address']);
            console.log(this.updateDispensaryForm.value.address);
            if (!data['featured']) {
                data['featured'] = 'false';
            }
            this.dispensary.updateDispensary(data).then(updateResponse => {
                if (updateResponse['status'] === 200) {
                    if (this.fileData) {
                        this.uploader.onBuildItemForm = (fileItem, form) => {
                            form.append('dispensaryId', updateResponse['data'].dispensaryId);
                        };
                        this.uploader.uploadAll();
                        this.uploader.onSuccessItem = (item, response, status, headers) => {
                            if (response) {
                                var formatedResponse = JSON.parse(response);
                                if (formatedResponse['status'] !== 200) {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Error', `${formatedResponse['message']}`, 'error');
                                }
                            }
                        };
                    }
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Success', "Dispensary Updated Successfully", 'success').then((result) => {
                        let admin = JSON.parse(localStorage.getItem('userInfo'));
                        // if(admin.role === 1){
                        this.router.navigateByUrl(`/admin/dispensary/${updateResponse['data'].dispensaryId}`);
                        // }else{
                        //   this.router.navigateByUrl('/admin/dispensary/profile');
                        // }
                    });
                }
                else {
                    console.log(updateResponse);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Error', `${updateResponse['message']}`, 'error');
                }
            });
        }
    }
};
UpdateDispensaryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_dispensaries_dispensaries_service__WEBPACK_IMPORTED_MODULE_3__["DispensariesService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search', { 'static': true })
], UpdateDispensaryComponent.prototype, "searchElementRef", void 0);
UpdateDispensaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-dispensary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-dispensary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dispensaries/update-dispensary/update-dispensary.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-dispensary.component.scss */ "./src/app/demo/dispensaries/update-dispensary/update-dispensary.component.scss")).default]
    })
], UpdateDispensaryComponent);



/***/ }),

/***/ "./src/app/demo/dispensaries/update-dispensary/update-dispensary.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/demo/dispensaries/update-dispensary/update-dispensary.module.ts ***!
  \*********************************************************************************/
/*! exports provided: UpdateDispensaryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDispensaryModule", function() { return UpdateDispensaryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _update_dispensary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-dispensary.component */ "./src/app/demo/dispensaries/update-dispensary/update-dispensary.component.ts");
/* harmony import */ var _update_dispensary_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-dispensary-routing.module */ "./src/app/demo/dispensaries/update-dispensary/update-dispensary-routing.module.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "./node_modules/@sweetalert2/ngx-sweetalert2/fesm2015/sweetalert2-ngx-sweetalert2.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");










let UpdateDispensaryModule = class UpdateDispensaryModule {
};
UpdateDispensaryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_update_dispensary_component__WEBPACK_IMPORTED_MODULE_3__["UpdateDispensaryComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
            _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__["SweetAlert2Module"],
            _update_dispensary_routing_module__WEBPACK_IMPORTED_MODULE_4__["UpdateDispensariesRoutingModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__["FileUploadModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyAcARFFtUPK8IeCXsVmh5I7CIw4hnxejqU',
                libraries: ['places']
            })
        ]
    })
], UpdateDispensaryModule);



/***/ })

}]);
//# sourceMappingURL=update-dispensary-update-dispensary-module-es2015.js.map