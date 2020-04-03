function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-list-users-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/user/users-list/users-list.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/user/users-list/users-list.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoUserUsersListUsersListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n      <app-card cardTitle=\"Active Users\" [options]=\"false\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-hover\">\n            <thead>\n            <tr>\n              <!-- <th>#</th> -->\n              <th>Username</th>\n              <th>Email</th>\n              <th>First Name</th>\n              <th>Last Name</th>\n              <th>Phone</th>\n              <th class=\"text-right\">Actions</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let user of this.allUsers\">\n              <!-- <th scope=\"row\">{{ counter + 1 }}</th> -->\n              <td>{{ user.username }}</td>\n              <td>{{ user.email }}</td>\n              <td>{{ user.first_name }}</td>\n              <td>{{ user.last_name }}</td>\n              <td>{{ user.phone }}</td>\n              <td class=\"text-right\">\n                <a (click)=\"viewUserProfile(user.id)\"><i class=\"feather icon-eye text-c-green m-r-10\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"View Profile\"></i></a>\n                <a (click)=\"editUserProfile(user.id)\"><i class=\"feather icon-edit text-c-green m-r-10\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Edit Profile\"></i></a>\n                <a \n                  (click)=\"showWarningPopup(user.id)\"\n                >\n                  <i class=\"feather icon-trash text-c-green m-r-10\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Disable User\"></i></a>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n          <div class=\"mt-3 text-right\">\n            <a (click)=\"loadPrevResults()\" class=\"btn btn-primary\" style=\"color: white; padding: 5px;\">Prev</a>\n            <a (click)=\"loadNextResults()\" class=\"btn btn-primary\" style=\"color: white; padding: 5px;\">Next</a>\n          </div>\n        </div>\n      </app-card>\n    </div>\n  </div>\n  ";
    /***/
  },

  /***/
  "./src/app/demo/user/users-list/users-list-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/demo/user/users-list/users-list-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: UsersListRoutingModule */

  /***/
  function srcAppDemoUserUsersListUsersListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersListRoutingModule", function () {
      return UsersListRoutingModule;
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


    var _users_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./users-list.component */
    "./src/app/demo/user/users-list/users-list.component.ts");

    var routes = [{
      path: '',
      component: _users_list_component__WEBPACK_IMPORTED_MODULE_3__["UsersListComponent"]
    }];

    var UsersListRoutingModule = function UsersListRoutingModule() {
      _classCallCheck(this, UsersListRoutingModule);
    };

    UsersListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UsersListRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/user/users-list/users-list.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/demo/user/users-list/users-list.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDemoUserUsersListUsersListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdXNlci91c2Vycy1saXN0L3VzZXJzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/demo/user/users-list/users-list.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/demo/user/users-list/users-list.component.ts ***!
    \**************************************************************/

  /*! exports provided: UsersListComponent */

  /***/
  function srcAppDemoUserUsersListUsersListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersListComponent", function () {
      return UsersListComponent;
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

    var UsersListComponent =
    /*#__PURE__*/
    function () {
      function UsersListComponent(user, router) {
        _classCallCheck(this, UsersListComponent);

        this.user = user;
        this.router = router;
        this.counter = 1;
        this.pageSize = 10;
        this.pageNumber = 0;
      }

      _createClass(UsersListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadActiveUsers(this.pageNumber, this.pageSize);
        }
      }, {
        key: "loadActiveUsers",
        value: function loadActiveUsers(pageNumber, pageSize) {
          var _this = this;

          this.user.getActiveUsers(pageNumber, pageSize).then(function (response) {
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
          console.log("PageNumber : ", this.pageNumber);
          console.log("pageSize : ", this.pageSize);
          this.loadActiveUsers(pageNumber, this.pageSize);
        }
      }, {
        key: "loadPrevResults",
        value: function loadPrevResults() {
          console.log("PageNumber : ", this.pageNumber);
          console.log("pageSize : ", this.pageSize);

          if (this.pageNumber !== 0) {
            var pageNumber = this.pageNumber - 10;
            this.pageNumber = pageNumber;

            if (pageNumber >= 0 && this.pageSize >= 0) {
              this.loadActiveUsers(pageNumber, this.pageSize);
            }
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              icon: "error",
              title: "error",
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
        key: "disableUser",
        value: function disableUser(userId) {
          var _this2 = this;

          var data = {
            'userId': userId
          };
          this.user.disableUser(data).then(function (response) {
            if (response['status'] === 200) {
              if (_this2.allUsers !== undefined) {
                var size = Object.keys(_this2.allUsers).length;

                if (size == 1) {
                  var newObject;
                  _this2.allUsers = newObject;
                }
              }

              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: "success",
                title: "Success",
                text: "User disabled successfully"
              });

              _this2.loadActiveUsers(_this2.pageNumber, _this2.pageSize);
            }
          });
        }
      }, {
        key: "showWarningPopup",
        value: function showWarningPopup(userId) {
          var _this3 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            icon: "warning",
            title: "Warning",
            text: "Do you want to disable this user?",
            showCancelButton: true
          }).then(function (response) {
            if (response.value) {
              _this3.disableUser(userId);
            }
          });
        }
      }]);

      return UsersListComponent;
    }();

    UsersListComponent.ctorParameters = function () {
      return [{
        type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    UsersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-users-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./users-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/user/users-list/users-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./users-list.component.scss */
      "./src/app/demo/user/users-list/users-list.component.scss")).default]
    })], UsersListComponent);
    /***/
  },

  /***/
  "./src/app/demo/user/users-list/users-list.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/demo/user/users-list/users-list.module.ts ***!
    \***********************************************************/

  /*! exports provided: UsersListModule */

  /***/
  function srcAppDemoUserUsersListUsersListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersListModule", function () {
      return UsersListModule;
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


    var _users_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./users-list.component */
    "./src/app/demo/user/users-list/users-list.component.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _users_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./users-list-routing.module */
    "./src/app/demo/user/users-list/users-list-routing.module.ts");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/index.js");
    /* harmony import */


    var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @sweetalert2/ngx-sweetalert2 */
    "./node_modules/@sweetalert2/ngx-sweetalert2/fesm2015/sweetalert2-ngx-sweetalert2.js");

    var UsersListModule = function UsersListModule() {
      _classCallCheck(this, UsersListModule);
    };

    UsersListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_users_list_component__WEBPACK_IMPORTED_MODULE_3__["UsersListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _users_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsersListRoutingModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__["SweetAlert2Module"]]
    })], UsersListModule);
    /***/
  }
}]);
//# sourceMappingURL=users-list-users-list-module-es5.js.map