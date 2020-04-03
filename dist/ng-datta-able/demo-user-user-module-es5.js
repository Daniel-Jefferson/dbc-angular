function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-user-user-module"], {
  /***/
  "./src/app/demo/user/user-routing.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/demo/user/user-routing.module.ts ***!
    \**************************************************/

  /*! exports provided: UserRoutingModule */

  /***/
  function srcAppDemoUserUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function () {
      return UserRoutingModule;
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

    var routes = [{
      path: '',
      children: [{
        path: 'add',
        loadChildren: './add-user/add-user.module#AddUserModule'
      }, {
        path: 'all',
        loadChildren: './users-list/users-list.module#UsersListModule'
      }, {
        path: 'disabled',
        pathMatch: 'full',
        loadChildren: './disabled-users/disabled-users.module#DisabledUsersModule'
      }, {
        path: ':id',
        loadChildren: './view-user/view-user.module#ViewUserModule'
      }, {
        path: 'update/:id',
        loadChildren: './update-user/update-user.module#UpdateUserModule'
      }]
    }];

    var UserRoutingModule = function UserRoutingModule() {
      _classCallCheck(this, UserRoutingModule);
    };

    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/user/user.module.ts":
  /*!******************************************!*\
    !*** ./src/app/demo/user/user.module.ts ***!
    \******************************************/

  /*! exports provided: UserModule */

  /***/
  function srcAppDemoUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
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


    var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-routing.module */
    "./src/app/demo/user/user-routing.module.ts");

    var UserModule = function UserModule() {
      _classCallCheck(this, UserModule);
    };

    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"]]
    })], UserModule);
    /***/
  }
}]);
//# sourceMappingURL=demo-user-user-module-es5.js.map