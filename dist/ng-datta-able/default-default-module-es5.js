function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default-default-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/default/default.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/default/default.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoDashboardDefaultDefaultComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-md-6 col-xl-4\" *ngIf=\"is_adminUser === true\">\r\n    <app-card [hidHeader]=\"true\">\r\n        <h6 class=\"mb-4\">Users</h6>\r\n        <div class=\"row d-flex align-items-center\">\r\n          <div class=\"col auto\">\r\n            <i class=\"feather icon-users text-c-green f-30 m-r-10\"></i>\r\n          </div>\r\n          <div class=\"col text-right\">\r\n            <h1 class=\"f-w-300 d-flex align-items-center m-b-0\">{{ totalUsers }}</h1>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"progress m-t-30\" style=\"height: 7px;\">\r\n          <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 100%;\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n        </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6 col-xl-4\">\r\n    <app-card [hidHeader]=\"true\">\r\n      <h6 class=\"mb-4\">Dispensaries</h6>\r\n      <div class=\"row d-flex align-items-center\">\r\n        <div class=\"col auto\">\r\n          <i class=\"feather icon-map-pin text-c-red f-30 m-r-10\"></i>\r\n        </div>\r\n        <div class=\"col text-right\">\r\n          <h1 class=\"f-w-300 d-flex align-items-center  m-b-0\">{{ totalDispensaries }}</h1>\r\n        </div>\r\n        \r\n      </div>\r\n      <div class=\"progress m-t-30\" style=\"height: 7px;\">\r\n        <div class=\"progress-bar progress-c-theme2\" role=\"progressbar\" style=\"width: 100%;\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-12 col-xl-4\" *ngIf=\"is_adminUser === true\">\r\n    <app-card [hidHeader]=\"true\">\r\n      <h6 class=\"mb-4\">Questions</h6>\r\n      <div class=\"row d-flex align-items-center\">\r\n        <div class=\"col auto\">\r\n          <i class=\"feather icon-help-circle text-c-green f-30 m-r-10\"></i>\r\n        </div>\r\n        <div class=\"col text-right\">\r\n          <h1 class=\"f-w-300 d-flex align-items-center  m-b-0\">{{ totalQuestions }}</h1>\r\n        </div>\r\n        \r\n      </div>\r\n      <div class=\"progress m-t-30\" style=\"height: 7px;\">\r\n        <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 100%;\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-xl-12 col-md-12\" *ngIf=\"is_adminUser === true\">\r\n    <app-card cardTitle=\"Recent Users\" cardClass=\"Recent-Users\" blockClass=\"px-0 py-3\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-hover\">\r\n          <tbody>\r\n          <tr class=\"unread\" *ngFor=\"let user of this.recentUsers\">\r\n            <td><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-1.jpg\" alt=\"activity-user\"></td>\r\n            <td>\r\n              <h6 class=\"mb-1\">{{ user.username }}</h6>\r\n              <p class=\"m-0\">{{ user.email }}</p>\r\n            </td>\r\n            <td>\r\n              <h6 class=\"text-muted\"><i class=\"fas fa-circle text-c-green f-10 m-r-15\"></i>{{ user.created }}</h6></td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/demo/dashboard/default/default-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/demo/dashboard/default/default-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: DefaultRoutingModule */

  /***/
  function srcAppDemoDashboardDefaultDefaultRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultRoutingModule", function () {
      return DefaultRoutingModule;
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


    var _default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./default.component */
    "./src/app/demo/dashboard/default/default.component.ts");

    var routes = [{
      path: '',
      component: _default_component__WEBPACK_IMPORTED_MODULE_3__["DefaultComponent"]
    }];

    var DefaultRoutingModule = function DefaultRoutingModule() {
      _classCallCheck(this, DefaultRoutingModule);
    };

    DefaultRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DefaultRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/dashboard/default/default.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/demo/dashboard/default/default.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDemoDashboardDefaultDefaultComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZGFzaGJvYXJkL2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/demo/dashboard/default/default.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/demo/dashboard/default/default.component.ts ***!
    \*************************************************************/

  /*! exports provided: DefaultComponent */

  /***/
  function srcAppDemoDashboardDefaultDefaultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultComponent", function () {
      return DefaultComponent;
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


    var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/user/user.service */
    "./src/app/services/user/user.service.ts");

    var DefaultComponent =
    /*#__PURE__*/
    function () {
      function DefaultComponent(user) {
        _classCallCheck(this, DefaultComponent);

        this.user = user;
        this.totalUsers = 0;
        this.totalDispensaries = 0;
        this.totalQuestions = 0;
      }

      _createClass(DefaultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var admin = JSON.parse(localStorage.getItem('userInfo'));
          this.userID = admin.id;
          console.log(admin.id);

          if (admin.id === 1) {
            this.is_adminUser = true;
            console.log('admin here');
          } else {
            this.is_adminUser = false;
            console.log('business user here'); // window.location.href = '#/admin/dispensary/all';
          }

          this.user.getDashboradData(this.userID).then(function (response) {
            if (response['status'] === 200) {
              _this.totalUsers = response['data'].allUsers;
              _this.totalDispensaries = response['data'].allDispensaries;
              _this.totalQuestions = response['data'].allQuestions;
              _this.recentUsers = response['data'].recentUsers;

              _this.recentUsers.forEach(function (element) {
                element['created'] = _this.formatDate(element['created']);
              });
            }
          });
        }
      }, {
        key: "formatDate",
        value: function formatDate(date) {
          var newDate = new Date(date);
          var month = "" + (newDate.getMonth() + 1);
          var day = "" + newDate.getDate();
          var year = newDate.getFullYear();
          if (month.length < 2) month = "0" + month;
          if (day.length < 2) day = "0" + day;
          return [year, month, day].join("-");
        }
      }]);

      return DefaultComponent;
    }();

    DefaultComponent.ctorParameters = function () {
      return [{
        type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    DefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-default',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./default.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/default/default.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./default.component.scss */
      "./src/app/demo/dashboard/default/default.component.scss")).default]
    })], DefaultComponent);
    /***/
  },

  /***/
  "./src/app/demo/dashboard/default/default.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/demo/dashboard/default/default.module.ts ***!
    \**********************************************************/

  /*! exports provided: DefaultModule */

  /***/
  function srcAppDemoDashboardDefaultDefaultModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultModule", function () {
      return DefaultModule;
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


    var _default_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./default-routing.module */
    "./src/app/demo/dashboard/default/default-routing.module.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _default_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./default.component */
    "./src/app/demo/dashboard/default/default.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var DefaultModule = function DefaultModule() {
      _classCallCheck(this, DefaultModule);
    };

    DefaultModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _default_routing_module__WEBPACK_IMPORTED_MODULE_3__["DefaultRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTabsetModule"]],
      declarations: [_default_component__WEBPACK_IMPORTED_MODULE_5__["DefaultComponent"]]
    })], DefaultModule);
    /***/
  }
}]);
//# sourceMappingURL=default-default-module-es5.js.map