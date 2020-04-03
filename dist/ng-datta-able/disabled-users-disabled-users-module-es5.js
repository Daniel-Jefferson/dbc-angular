function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["disabled-users-disabled-users-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/user/disabled-users/disabled-users.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/user/disabled-users/disabled-users.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoUserDisabledUsersDisabledUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n      <app-card cardTitle=\"Disabled Users\" [options]=\"false\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-hover\">\n            <thead>\n            <tr>\n              <!-- <th>#</th> -->\n              <th>Username</th>\n              <th>Email</th>\n              <th>First Name</th>\n              <th>Last Name</th>\n              <th>Phone</th>\n              <th class=\"text-right\">Actions</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let user of this.allUsers\">\n              <!-- <th scope=\"row\">{{ counter + 1 }}</th> -->\n              <td>{{ user.username }}</td>\n              <td>{{ user.email }}</td>\n              <td>{{ user.first_name }}</td>\n              <td>{{ user.last_name }}</td>\n              <td>{{ user.phone }}</td>\n              <td class=\"text-right\">\n                <a (click)=\"viewUserProfile(user.id)\"><i class=\"feather icon-eye text-c-green m-r-10\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"View Profile\"></i></a>\n                <a (click)=\"editUserProfile(user.id)\"><i class=\"feather icon-edit text-c-green m-r-10\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Edit Profile\"></i></a>\n                <a \n                  (click)=\"activateUserPopup(user.id)\"\n                >\n                  <i class=\"feather icon-check text-c-green m-r-10\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Activate User\"></i></a>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n          <div class=\"mt-3 text-right\">\n            <a (click)=\"loadPrevResults()\" class=\"btn btn-primary\" style=\"color: white; padding: 5px;\">Prev</a>\n            <a (click)=\"loadNextResults()\" class=\"btn btn-primary\" style=\"color: white; padding: 5px;\">Next</a>\n          </div>\n        </div>\n      </app-card>\n    </div>\n  </div>\n  ";
    /***/
  },

  /***/
  "./src/app/demo/user/disabled-users/disabled-users-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/demo/user/disabled-users/disabled-users-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: DisabledUsersRoutingModule */

  /***/
  function srcAppDemoUserDisabledUsersDisabledUsersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisabledUsersRoutingModule", function () {
      return DisabledUsersRoutingModule;
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


    var _disabled_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./disabled-users.component */
    "./src/app/demo/user/disabled-users/disabled-users.component.ts");

    var routes = [{
      path: '',
      component: _disabled_users_component__WEBPACK_IMPORTED_MODULE_3__["DisabledUsersComponent"]
    }];

    var DisabledUsersRoutingModule = function DisabledUsersRoutingModule() {
      _classCallCheck(this, DisabledUsersRoutingModule);
    };

    DisabledUsersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DisabledUsersRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/user/disabled-users/disabled-users.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/demo/user/disabled-users/disabled-users.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDemoUserDisabledUsersDisabledUsersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdXNlci9kaXNhYmxlZC11c2Vycy9kaXNhYmxlZC11c2Vycy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/demo/user/disabled-users/disabled-users.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/demo/user/disabled-users/disabled-users.component.ts ***!
    \**********************************************************************/

  /*! exports provided: DisabledUsersComponent */

  /***/
  function srcAppDemoUserDisabledUsersDisabledUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisabledUsersComponent", function () {
      return DisabledUsersComponent;
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

    var DisabledUsersComponent =
    /*#__PURE__*/
    function () {
      function DisabledUsersComponent(router, user) {
        _classCallCheck(this, DisabledUsersComponent);

        this.router = router;
        this.user = user;
        this.counter = 1;
        this.pageSize = 10;
        this.pageNumber = 0;
      }

      _createClass(DisabledUsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadDisabledUsers(this.pageNumber, this.pageSize);
        }
      }, {
        key: "loadDisabledUsers",
        value: function loadDisabledUsers(pageNumber, pageSize) {
          var _this = this;

          this.user.getDisabledUsers(pageNumber, pageSize).then(function (response) {
            console.log(response);

            if (response['status'] === 200) {
              if (response['data'].length > 0) {
                _this.allUsers = response['data'];
              } else {
                _this.allUsers = null;
              }
            } else {
              if (_this.pageNumber !== 0) {
                _this.pageNumber = _this.pageNumber - 10;
              }

              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: "error",
                title: "error",
                text: "No more records available"
              });
            }
          });
        }
      }, {
        key: "loadNextResults",
        value: function loadNextResults() {
          var pageNumber = this.pageNumber + 10;
          this.pageNumber = pageNumber;
          this.loadDisabledUsers(pageNumber, this.pageSize);
        }
      }, {
        key: "loadPrevResults",
        value: function loadPrevResults() {
          if (this.pageNumber !== 0) {
            var pageNumber = this.pageNumber - 10;
            this.pageNumber = pageNumber;

            if (pageNumber >= 0 && this.pageSize >= 0) {
              this.loadDisabledUsers(pageNumber, this.pageSize);
            }
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              icon: "warning",
              title: "Warning",
              text: "No more records available"
            });
          }
        }
      }, {
        key: "viewUserProfile",
        value: function viewUserProfile(userId) {
          this.router.navigateByUrl("admin/user/".concat(userId));
        }
      }, {
        key: "editUserProfile",
        value: function editUserProfile(userId) {
          this.router.navigateByUrl("admin/user/update/".concat(userId));
        }
      }, {
        key: "activeUser",
        value: function activeUser(userId) {
          var _this2 = this;

          var data = {
            'userId': userId
          };
          this.user.activateUser(data).then(function (response) {
            if (response['status'] === 200) {
              if (_this2.allUsers !== undefined) {
                var size = Object.keys(_this2.allUsers).length;

                if (size == 1) {
                  var newObject;
                  _this2.allUsers = newObject;
                }
              }

              _this2.loadDisabledUsers(_this2.pageNumber, _this2.pageSize);

              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: "success",
                title: "Success",
                text: "User activated successfully"
              });
            }
          });
        }
      }, {
        key: "activateUserPopup",
        value: function activateUserPopup(userId) {
          var _this3 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            icon: "warning",
            title: "Warning",
            text: "Do you want to activate this user?",
            showCancelButton: true
          }).then(function (response) {
            if (response.value) {
              _this3.activeUser(userId);
            }
          });
        }
      }]);

      return DisabledUsersComponent;
    }();

    DisabledUsersComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    DisabledUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-disabled-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./disabled-users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/user/disabled-users/disabled-users.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./disabled-users.component.scss */
      "./src/app/demo/user/disabled-users/disabled-users.component.scss")).default]
    })], DisabledUsersComponent);
    /***/
  },

  /***/
  "./src/app/demo/user/disabled-users/disabled-users.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/demo/user/disabled-users/disabled-users.module.ts ***!
    \*******************************************************************/

  /*! exports provided: DisabledUsersModule */

  /***/
  function srcAppDemoUserDisabledUsersDisabledUsersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisabledUsersModule", function () {
      return DisabledUsersModule;
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


    var _disabled_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./disabled-users.component */
    "./src/app/demo/user/disabled-users/disabled-users.component.ts");
    /* harmony import */


    var _disabled_users_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./disabled-users-routing.module */
    "./src/app/demo/user/disabled-users/disabled-users-routing.module.ts");
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

    var DisabledUsersModule = function DisabledUsersModule() {
      _classCallCheck(this, DisabledUsersModule);
    };

    DisabledUsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_disabled_users_component__WEBPACK_IMPORTED_MODULE_3__["DisabledUsersComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _disabled_users_routing_module__WEBPACK_IMPORTED_MODULE_4__["DisabledUsersRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__["SweetAlert2Module"]]
    })], DisabledUsersModule);
    /***/
  }
}]);
//# sourceMappingURL=disabled-users-disabled-users-module-es5.js.map