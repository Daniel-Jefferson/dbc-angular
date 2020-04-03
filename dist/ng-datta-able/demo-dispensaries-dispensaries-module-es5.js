function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-dispensaries-dispensaries-module"], {
  /***/
  "./src/app/demo/dispensaries/dispensaries-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/demo/dispensaries/dispensaries-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: DispensariesRoutingModule */

  /***/
  function srcAppDemoDispensariesDispensariesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DispensariesRoutingModule", function () {
      return DispensariesRoutingModule;
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
    "./node_modules/@angular/router/fesm2015/router.js"); // import { ViewDispensaryComponent } from './view-dispensary/view-dispensary.component';


    var routes = [{
      path: '',
      children: [{
        path: 'add',
        loadChildren: './add-dispensary/add-dispensary.module#AddDispensaryModule'
      }, {
        path: 'all',
        loadChildren: './dispensaries-list/dispensaries-list.module#DispensariesListModule'
      }, {
        path: 'disabled',
        pathMatch: 'full',
        loadChildren: './disabled-dispensaries/disabled-dispensaries.module#DisabledDispensariesModule'
      }, {
        path: ':id',
        loadChildren: './view-dispensary/view-dispensary.module#ViewDispensaryModule'
      }, {
        path: 'update/:id',
        loadChildren: './update-dispensary/update-dispensary.module#UpdateDispensaryModule'
      }, {
        path: 'profile',
        loadChildren: './view-dispensary/view-dispensary.module#ViewDispensaryModule' // component: ViewDispensaryComponent

      }]
    }];

    var DispensariesRoutingModule = function DispensariesRoutingModule() {
      _classCallCheck(this, DispensariesRoutingModule);
    };

    DispensariesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DispensariesRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/dispensaries/dispensaries.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/demo/dispensaries/dispensaries.module.ts ***!
    \**********************************************************/

  /*! exports provided: DispensariesModule */

  /***/
  function srcAppDemoDispensariesDispensariesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DispensariesModule", function () {
      return DispensariesModule;
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


    var _dispensaries_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dispensaries-routing.module */
    "./src/app/demo/dispensaries/dispensaries-routing.module.ts"); // import { ViewDispensaryComponent } from './view-dispensary/view-dispensary.component';


    var DispensariesModule = function DispensariesModule() {
      _classCallCheck(this, DispensariesModule);
    };

    DispensariesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _dispensaries_routing_module__WEBPACK_IMPORTED_MODULE_3__["DispensariesRoutingModule"]]
    })], DispensariesModule);
    /***/
  }
}]);
//# sourceMappingURL=demo-dispensaries-dispensaries-module-es5.js.map