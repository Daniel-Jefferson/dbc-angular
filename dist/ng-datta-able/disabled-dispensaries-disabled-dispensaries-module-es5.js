function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["disabled-dispensaries-disabled-dispensaries-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dispensaries/disabled-dispensaries/disabled-dispensaries.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dispensaries/disabled-dispensaries/disabled-dispensaries.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoDispensariesDisabledDispensariesDisabledDispensariesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n      <app-card cardTitle=\"Disabled Dispensaries\" [options]=\"false\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-hover\">\n            <thead>\n            <tr>\n              <!-- <th>#</th> -->\n              <th>Title</th>\n              <th>Featured</th>\n              <th>Phone</th>\n              <th>Code</th>\n              <th>Longitude</th>\n              <th>Latitude</th>\n              <th class=\"text-right\">Actions</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let dispensaries of this.allDispensaries\">\n              <!-- <th scope=\"row\">{{ counter + 1 }}</th> -->\n              <td>{{ dispensaries.name }}</td>\n              <td *ngIf=\"dispensaries.featured == 'true'\">\n                <a href=\"javascript:\" class=\"badge badge-success theme-bg text-white f-12\">Featured</a>\n              </td>\n              <td *ngIf=\"dispensaries.featured == 'false'\">\n                <a href=\"javascript:\" class=\"badge badge-primary theme-bg2 text-white f-12\">Normal</a>\n              </td>\n              <td>{{ dispensaries.phone }}</td>\n              <td>{{ dispensaries.code }}</td>\n              <td>{{ dispensaries.longitude }}</td>\n              <td>{{ dispensaries.latitude }}</td>\n              <td class=\"text-right\">\n                <a (click)=\"viewDispensary(dispensaries.id)\"><i class=\"feather icon-eye text-c-green m-r-10\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"View Dispensary\"></i></a>\n                <a (click)=\"editDispensary(dispensaries.id)\"><i class=\"feather icon-edit text-c-green m-r-10\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Edit Dispensary\"></i></a>\n                <a \n                  (click)=\"activateDispensaryPopup(dispensaries.id)\"\n                >\n                  <i class=\"feather icon-check text-c-green m-r-10\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Active Dispensary\"></i></a>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n          <div class=\"mt-3 text-right\">\n            <a (click)=\"loadPrevResults()\" class=\"btn btn-primary\" style=\"color: white; padding: 5px;\">Prev</a>\n            <a (click)=\"loadNextResults()\" class=\"btn btn-primary\" style=\"color: white; padding: 5px;\">Next</a>\n          </div>\n        </div>\n      </app-card>\n    </div>\n  </div>\n  ";
    /***/
  },

  /***/
  "./src/app/demo/dispensaries/disabled-dispensaries/disabled-dispensaries-routing.module.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/demo/dispensaries/disabled-dispensaries/disabled-dispensaries-routing.module.ts ***!
    \*************************************************************************************************/

  /*! exports provided: DisabledDispensariesRoutingModule */

  /***/
  function srcAppDemoDispensariesDisabledDispensariesDisabledDispensariesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisabledDispensariesRoutingModule", function () {
      return DisabledDispensariesRoutingModule;
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


    var _disabled_dispensaries_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./disabled-dispensaries.component */
    "./src/app/demo/dispensaries/disabled-dispensaries/disabled-dispensaries.component.ts");

    var routes = [{
      path: '',
      component: _disabled_dispensaries_component__WEBPACK_IMPORTED_MODULE_3__["DisabledDispensariesComponent"]
    }];

    var DisabledDispensariesRoutingModule = function DisabledDispensariesRoutingModule() {
      _classCallCheck(this, DisabledDispensariesRoutingModule);
    };

    DisabledDispensariesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DisabledDispensariesRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/dispensaries/disabled-dispensaries/disabled-dispensaries.component.scss":
  /*!**********************************************************************************************!*\
    !*** ./src/app/demo/dispensaries/disabled-dispensaries/disabled-dispensaries.component.scss ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDemoDispensariesDisabledDispensariesDisabledDispensariesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZGlzcGVuc2FyaWVzL2Rpc2FibGVkLWRpc3BlbnNhcmllcy9kaXNhYmxlZC1kaXNwZW5zYXJpZXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/demo/dispensaries/disabled-dispensaries/disabled-dispensaries.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/demo/dispensaries/disabled-dispensaries/disabled-dispensaries.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: DisabledDispensariesComponent */

  /***/
  function srcAppDemoDispensariesDisabledDispensariesDisabledDispensariesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisabledDispensariesComponent", function () {
      return DisabledDispensariesComponent;
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


    var _services_dispensaries_dispensaries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/dispensaries/dispensaries.service */
    "./src/app/services/dispensaries/dispensaries.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);

    var DisabledDispensariesComponent =
    /*#__PURE__*/
    function () {
      function DisabledDispensariesComponent(dispensaries, router) {
        _classCallCheck(this, DisabledDispensariesComponent);

        this.dispensaries = dispensaries;
        this.router = router;
        this.counter = 1;
        this.pageSize = 10;
        this.pageNumber = 0;
      }

      _createClass(DisabledDispensariesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var admin = JSON.parse(localStorage.getItem('userInfo'));
          this.userID = admin.id;
          this.loadDisabledDispensaries(this.pageNumber, this.pageSize, this.userID);
        }
      }, {
        key: "loadDisabledDispensaries",
        value: function loadDisabledDispensaries(pageNumber, pageSize, userID) {
          var _this = this;

          console.log(userID);
          this.dispensaries.getDisabledDispensaries(pageNumber, pageSize, userID).then(function (response) {
            if (response['status'] === 200) {
              if (response['data'].length > 0) {
                _this.allDispensaries = response['data'];
              } else {
                _this.allDispensaries = null;
              }
            } else {
              if (_this.pageNumber !== 0) {
                _this.pageNumber = _this.pageNumber - 10;
              }

              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error', 'No more records available', 'error');
            }
          });
        }
      }, {
        key: "loadNextResults",
        value: function loadNextResults() {
          var pageNumber = this.pageNumber + 10;
          this.pageNumber = pageNumber;
          this.loadDisabledDispensaries(pageNumber, this.pageSize, this.userID);
        }
      }, {
        key: "loadPrevResults",
        value: function loadPrevResults() {
          if (this.pageNumber !== 0) {
            var pageNumber = this.pageNumber - 10;
            this.pageNumber = pageNumber;

            if (pageNumber >= 0 && this.pageSize >= 0) {
              this.loadDisabledDispensaries(pageNumber, this.pageSize, this.userID);
            }
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              icon: "error",
              title: "error",
              text: "No more previous records available"
            });
          }
        }
      }, {
        key: "viewDispensary",
        value: function viewDispensary(dispensaryId) {
          this.router.navigateByUrl("admin/dispensary/".concat(dispensaryId));
        }
      }, {
        key: "editDispensary",
        value: function editDispensary(dispensaryId) {
          this.router.navigateByUrl("admin/dispensary/update/".concat(dispensaryId));
        }
      }, {
        key: "onActivateDispensary",
        value: function onActivateDispensary(dispensaryId) {
          var _this2 = this;

          var data = {
            'dispensaryId': dispensaryId
          };
          this.dispensaries.activateDispensary(data).then(function (response) {
            if (response['status'] === 200) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Success', 'Dispensary Activated Successfully', 'success');

              if (_this2.allDispensaries !== undefined) {
                var size = Object.keys(_this2.allDispensaries).length;

                if (size == 1) {
                  var newObject;
                  _this2.allDispensaries = newObject;
                }
              }

              _this2.loadDisabledDispensaries(_this2.pageNumber, _this2.pageSize, _this2.userID);
            }
          });
        }
      }, {
        key: "activateDispensaryPopup",
        value: function activateDispensaryPopup(dispensaryId) {
          var _this3 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            icon: "warning",
            title: "Warning",
            text: "Do you want to activate this dispensary?",
            showCancelButton: true
          }).then(function (response) {
            if (response.value) {
              _this3.onActivateDispensary(dispensaryId);
            }
          });
        }
      }]);

      return DisabledDispensariesComponent;
    }();

    DisabledDispensariesComponent.ctorParameters = function () {
      return [{
        type: _services_dispensaries_dispensaries_service__WEBPACK_IMPORTED_MODULE_2__["DispensariesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    DisabledDispensariesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-disabled-dispensaries',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./disabled-dispensaries.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dispensaries/disabled-dispensaries/disabled-dispensaries.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./disabled-dispensaries.component.scss */
      "./src/app/demo/dispensaries/disabled-dispensaries/disabled-dispensaries.component.scss")).default]
    })], DisabledDispensariesComponent);
    /***/
  },

  /***/
  "./src/app/demo/dispensaries/disabled-dispensaries/disabled-dispensaries.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/demo/dispensaries/disabled-dispensaries/disabled-dispensaries.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: DisabledDispensariesModule */

  /***/
  function srcAppDemoDispensariesDisabledDispensariesDisabledDispensariesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisabledDispensariesModule", function () {
      return DisabledDispensariesModule;
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


    var _disabled_dispensaries_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./disabled-dispensaries.component */
    "./src/app/demo/dispensaries/disabled-dispensaries/disabled-dispensaries.component.ts");
    /* harmony import */


    var _disabled_dispensaries_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./disabled-dispensaries-routing.module */
    "./src/app/demo/dispensaries/disabled-dispensaries/disabled-dispensaries-routing.module.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/index.js");
    /* harmony import */


    var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @sweetalert2/ngx-sweetalert2 */
    "./node_modules/@sweetalert2/ngx-sweetalert2/fesm2015/sweetalert2-ngx-sweetalert2.js");

    var DisabledDispensariesModule = function DisabledDispensariesModule() {
      _classCallCheck(this, DisabledDispensariesModule);
    };

    DisabledDispensariesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_disabled_dispensaries_component__WEBPACK_IMPORTED_MODULE_3__["DisabledDispensariesComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__["SweetAlert2Module"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _disabled_dispensaries_routing_module__WEBPACK_IMPORTED_MODULE_4__["DisabledDispensariesRoutingModule"]]
    })], DisabledDispensariesModule);
    /***/
  },

  /***/
  "./src/app/services/dispensaries/dispensaries.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/services/dispensaries/dispensaries.service.ts ***!
    \***************************************************************/

  /*! exports provided: DispensariesService */

  /***/
  function srcAppServicesDispensariesDispensariesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DispensariesService", function () {
      return DispensariesService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var DispensariesService =
    /*#__PURE__*/
    function () {
      function DispensariesService(http) {
        _classCallCheck(this, DispensariesService);

        this.http = http;
      }

      _createClass(DispensariesService, [{
        key: "addDispensary",
        value: function addDispensary(data) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/dispensary/add"), data).toPromise();
        }
      }, {
        key: "getActiveDispensaries",
        value: function getActiveDispensaries(pageNumber, pageSize, userID) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/dispensary/all?page=").concat(pageNumber, "&size=").concat(pageSize, "&userID=").concat(userID)).toPromise();
        }
      }, {
        key: "disableDispensary",
        value: function disableDispensary(data) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/dispensary/disable"), data).toPromise();
        }
      }, {
        key: "getDisabledDispensaries",
        value: function getDisabledDispensaries(pageNumber, pageSize, userID) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/dispensary/disabled/all?page=").concat(pageNumber, "&size=").concat(pageSize, "&userID=").concat(userID)).toPromise();
        }
      }, {
        key: "activateDispensary",
        value: function activateDispensary(data) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/dispensary/activate"), data).toPromise();
        }
      }, {
        key: "getDispensaryById",
        value: function getDispensaryById(dispensaryId) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/dispensary/").concat(dispensaryId)).toPromise();
        }
      }, {
        key: "updateDispensary",
        value: function updateDispensary(data) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/dispensary/update"), data).toPromise();
        }
      }, {
        key: "getActiveDispensariesWithoutPagination",
        value: function getActiveDispensariesWithoutPagination() {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/dispensary/active/all/without-pagination")).toPromise();
        }
      }, {
        key: "getAdminDispensary",
        value: function getAdminDispensary() {
          var admin = JSON.parse(localStorage.getItem('userInfo'));
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/dispensary/admin/").concat(admin.id)).toPromise();
        }
      }]);

      return DispensariesService;
    }();

    DispensariesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    DispensariesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DispensariesService);
    /***/
  }
}]);
//# sourceMappingURL=disabled-dispensaries-disabled-dispensaries-module-es5.js.map