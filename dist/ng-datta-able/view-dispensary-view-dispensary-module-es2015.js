(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-dispensary-view-dispensary-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dispensaries/view-dispensary/view-dispensary.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dispensaries/view-dispensary/view-dispensary.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <app-card cardTitle=\"Dispensary Profile\" [options]=\"false\">\n            <div class=\"row\" *ngIf=\"dispensaryProfile\">\n                <div class=\"col-md-6\" >\n                    <h4 class=\"mb-4 blue\" id=\"basic-info-heading\">Profile Image</h4>\n                    <img *ngIf=\"dispensaryProfile.image !== null\" class=\"img-fluid img-thumbnail img-rounded\" src=\"{{dispensaryProfile.image}}\" alt=\"Dispensary profile image\" width=\"250\" height=\"250\">\n                    <img *ngIf=\"dispensaryProfile.image === null\" class=\"img-fluid img-thumbnail img-rounded\" src=\"assets/images/admin-user-demo.png\" alt=\"Dispensary profile image\" width=\"250\" height=\"250\">\n                \n                    <div class=\"map-container\">\n                        <h4 class=\"mb-4\" id=\"basic-info-heading\">Map Location</h4>\n                        <agm-map \n                            [latitude]=\"mapLatitude\" \n                            [longitude]=\"mapLongitude\" \n                            [zoom]=\"zoom\" >\n                            <agm-marker \n                                [latitude]=\"mapLatitude\" \n                                [longitude]=\"mapLongitude\"\n                                [markerDraggable]=\"false\"\n                            >\n                            </agm-marker>\n                        </agm-map>\n                    </div>\n                </div> \n                <div class=\"col-md-6 table-responsive-sm\">\n                    <h4 class=\"mb-4\" id=\"basic-info-heading\">Basic Information</h4>\n                    <table class=\"table table-borderless\">\n                        <tbody>\n                            <tr>\n                                <td><b>Title:</b></td>\n                                <td>{{dispensaryProfile.name}}</td>\n                            </tr>\n                            <tr>\n                                <td><b>Longitude:</b></td>\n                                <td>{{dispensaryProfile.longitude}}</td>\n                            </tr>\n                            <tr>\n                                <td><b>Latitude:</b></td>\n                                <td>{{dispensaryProfile.latitude}}</td>\n                            </tr>\n                            <tr>\n                                <td><b>Phone:</b></td>\n                                <td>{{dispensaryProfile.phone}}</td>\n                            </tr>\n                            <tr>\n                                <td><b>Status:</b></td>\n                                <td>\n                                    <span *ngIf=\"dispensaryProfile.status !== '1'\" class=\"badge badge-success\">Active</span>\n                                    <span *ngIf=\"dispensaryProfile.status === '1'\" class=\"badge badge-danger\">Disabled</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td><b>Featured:</b></td>\n                                <td>\n                                    <span *ngIf=\"dispensaryProfile.featured === 'true'\" class=\"badge badge-success\">Featured</span>\n                                    <span *ngIf=\"dispensaryProfile.featured === 'false'\" class=\"badge badge-primary\">Normal</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Working Days:</td>\n                                <td>{{dispensaryProfile.timmings.open_day}} - {{dispensaryProfile.timmings.close_day}}</td>\n                            </tr>\n                            <tr>\n                                <td>Working Hours:</td>\n                                <td>{{dispensaryProfile.timmings.open_time}} - {{dispensaryProfile.timmings.close_time}}</td>\n                            </tr>\n                            <tr>\n                                <td><b>Address:</b></td>\n                                <td>{{dispensaryProfile.address}}</td>\n                            </tr>\n                            <tr>\n                                <td><b>Deal:</b></td>\n                                <td>{{dispensaryProfile.deal}}</td>\n                            </tr>\n                            <tr>\n                                <td><b>Joining Date:</b></td>\n                                <td>{{dispensaryProfile.created}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class=\"col-md-12 mt-3 text-right\" id=\"update-button\">\n                    <button class=\"btn btn-primary btn-sm\" (click)=\"updateDispensary(dispensaryProfile.id)\">Update</button>\n                </div>\n            </div>\n            <!-- <div class=\"row text-center\" *ngIf=\"!dispensaryProfile\">\n                <h1>No Dispensary Available</h1>\n            </div> -->\n        </app-card>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/demo/dispensaries/view-dispensary/view-dispensary-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/demo/dispensaries/view-dispensary/view-dispensary-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ViewDispensaryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDispensaryRoutingModule", function() { return ViewDispensaryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _view_dispensary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-dispensary.component */ "./src/app/demo/dispensaries/view-dispensary/view-dispensary.component.ts");




const routes = [
    {
        path: '',
        component: _view_dispensary_component__WEBPACK_IMPORTED_MODULE_3__["ViewDispensaryComponent"]
    }
];
let ViewDispensaryRoutingModule = class ViewDispensaryRoutingModule {
};
ViewDispensaryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ViewDispensaryRoutingModule);



/***/ }),

/***/ "./src/app/demo/dispensaries/view-dispensary/view-dispensary.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/dispensaries/view-dispensary/view-dispensary.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n  height: 250px;\n  width: 250px; }\n\n.map-container {\n  margin-top: 5%; }\n\n#basic-info-heading {\n  color: #3F4D67; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94MjMvRG9jdW1lbnRzL0dpdEh1Yi9kYmMtYnVkc2JhbmstYW5ndWxhci9zcmMvYXBwL2RlbW8vZGlzcGVuc2FyaWVzL3ZpZXctZGlzcGVuc2FyeS92aWV3LWRpc3BlbnNhcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZW1vL2Rpc3BlbnNhcmllcy92aWV3LWRpc3BlbnNhcnkvdmlldy1kaXNwZW5zYXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4ubWFwLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuI2Jhc2ljLWluZm8taGVhZGluZyB7XHJcbiAgICBjb2xvcjogIzNGNEQ2NztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/demo/dispensaries/view-dispensary/view-dispensary.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demo/dispensaries/view-dispensary/view-dispensary.component.ts ***!
  \********************************************************************************/
/*! exports provided: ViewDispensaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDispensaryComponent", function() { return ViewDispensaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_dispensaries_dispensaries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dispensaries/dispensaries.service */ "./src/app/services/dispensaries/dispensaries.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");






let ViewDispensaryComponent = class ViewDispensaryComponent {
    constructor(router, dispensary, currentRoute, mapsAPILoader, ngZone) {
        this.router = router;
        this.dispensary = dispensary;
        this.currentRoute = currentRoute;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
    }
    ngOnInit() {
        this.currentRoute.params.subscribe(params => {
            if (params.id !== 'profile') {
                this.dispensary.getDispensaryById(params.id).then(response => {
                    if (response['status'] === 200) {
                        if (response['data'].length > 0) {
                            this.dispensaryProfile = response['data'][0];
                            this.dispensaryProfile['created'] = this.formatDate(this.dispensaryProfile.created);
                            this.setCurrentLocation(this.dispensaryProfile);
                        }
                    }
                    else {
                        console.log(response);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error', 'Internal Server Error', 'error');
                    }
                });
            }
            else {
                this.dispensary.getAdminDispensary().then(response => {
                    if (response['status'] === 200) {
                        if (response['data'].length > 0) {
                            this.dispensaryProfile = response['data'][0];
                            this.dispensaryProfile['created'] = this.formatDate(this.dispensaryProfile.created);
                            this.setCurrentLocation(this.dispensaryProfile);
                        }
                    }
                    else {
                        console.log(response);
                        // swal.fire('Error', 'No Dispensary Added Yet', 'error');
                    }
                });
            }
        });
        this.mapsAPILoader.load().then(() => {
            this.geoCoder = new google.maps.Geocoder;
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
    setCurrentLocation(locationToSet) {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.mapLatitude = locationToSet.latitude;
                this.mapLongitude = locationToSet.longitude;
                this.zoom = 8;
                this.getAddress(this.mapLatitude, this.mapLongitude);
            });
        }
    }
    getAddress(latitude, longitude) {
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
            console.log(results);
            console.log(status);
            if (status === 'OK') {
                if (results[0]) {
                    this.zoom = 12;
                    this.mapAddress = results[0].formatted_address;
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
    updateDispensary(userId) {
        this.router.navigateByUrl(`admin/dispensary/update/${userId}`);
    }
};
ViewDispensaryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_dispensaries_dispensaries_service__WEBPACK_IMPORTED_MODULE_2__["DispensariesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
ViewDispensaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-dispensary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-dispensary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dispensaries/view-dispensary/view-dispensary.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-dispensary.component.scss */ "./src/app/demo/dispensaries/view-dispensary/view-dispensary.component.scss")).default]
    })
], ViewDispensaryComponent);



/***/ }),

/***/ "./src/app/demo/dispensaries/view-dispensary/view-dispensary.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/dispensaries/view-dispensary/view-dispensary.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ViewDispensaryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDispensaryModule", function() { return ViewDispensaryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _view_dispensary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-dispensary.component */ "./src/app/demo/dispensaries/view-dispensary/view-dispensary.component.ts");
/* harmony import */ var _view_dispensary_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-dispensary-routing.module */ "./src/app/demo/dispensaries/view-dispensary/view-dispensary-routing.module.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "./node_modules/@sweetalert2/ngx-sweetalert2/fesm2015/sweetalert2-ngx-sweetalert2.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");









let ViewDispensaryModule = class ViewDispensaryModule {
};
ViewDispensaryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_view_dispensary_component__WEBPACK_IMPORTED_MODULE_3__["ViewDispensaryComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _view_dispensary_routing_module__WEBPACK_IMPORTED_MODULE_4__["ViewDispensaryRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
            _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__["SweetAlert2Module"],
            _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyAcARFFtUPK8IeCXsVmh5I7CIw4hnxejqU',
                libraries: ['places']
            })
        ]
    })
], ViewDispensaryModule);



/***/ })

}]);
//# sourceMappingURL=view-dispensary-view-dispensary-module-es2015.js.map