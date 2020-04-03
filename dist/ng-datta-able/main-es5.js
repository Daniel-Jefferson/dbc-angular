function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./add-dispensary/add-dispensary.module": ["./src/app/demo/dispensaries/add-dispensary/add-dispensary.module.ts", "default~add-dispensary-add-dispensary-module~add-quiz-add-quiz-module~add-user-add-user-module~updat~04f9e2b5", "default~add-dispensary-add-dispensary-module~update-dispensary-update-dispensary-module~view-dispens~84a55bd4", "add-dispensary-add-dispensary-module"],
      "./add-quiz/add-quiz.module": ["./src/app/demo/quizes/add-quiz/add-quiz.module.ts", "default~add-dispensary-add-dispensary-module~add-quiz-add-quiz-module~add-user-add-user-module~updat~04f9e2b5", "common", "add-quiz-add-quiz-module"],
      "./add-user/add-user.module": ["./src/app/demo/user/add-user/add-user.module.ts", "default~add-dispensary-add-dispensary-module~add-quiz-add-quiz-module~add-user-add-user-module~updat~04f9e2b5", "add-user-add-user-module"],
      "./all/all.module": ["./src/app/demo/vouchers/all/all.module.ts", "all-all-module"],
      "./auth-logout/auth-logout.module": ["./src/app/demo/pages/authentication/auth-logout/auth-logout.module.ts", "auth-logout-auth-logout-module"],
      "./auth-signin/auth-signin.module": ["./src/app/demo/pages/authentication/auth-signin/auth-signin.module.ts", "auth-signin-auth-signin-module"],
      "./auth-signup/auth-signup.module": ["./src/app/demo/pages/authentication/auth-signup/auth-signup.module.ts", "common", "auth-signup-auth-signup-module"],
      "./default/default.module": ["./src/app/demo/dashboard/default/default.module.ts", "default-default-module"],
      "./demo/dashboard/dashboard.module": ["./src/app/demo/dashboard/dashboard.module.ts", "demo-dashboard-dashboard-module"],
      "./demo/dispensaries/dispensaries.module": ["./src/app/demo/dispensaries/dispensaries.module.ts", "demo-dispensaries-dispensaries-module"],
      "./demo/pages/authentication/authentication.module": ["./src/app/demo/pages/authentication/authentication.module.ts", "demo-pages-authentication-authentication-module"],
      "./demo/payment/payment.module": ["./src/app/demo/payment/payment.module.ts", "demo-payment-payment-module"],
      "./demo/quizes/quizes.module": ["./src/app/demo/quizes/quizes.module.ts", "demo-quizes-quizes-module"],
      "./demo/user/user.module": ["./src/app/demo/user/user.module.ts", "demo-user-user-module"],
      "./demo/vouchers/voucher.module": ["./src/app/demo/vouchers/voucher.module.ts", "demo-vouchers-voucher-module"],
      "./disabled-dispensaries/disabled-dispensaries.module": ["./src/app/demo/dispensaries/disabled-dispensaries/disabled-dispensaries.module.ts", "common", "disabled-dispensaries-disabled-dispensaries-module"],
      "./disabled-users/disabled-users.module": ["./src/app/demo/user/disabled-users/disabled-users.module.ts", "common", "disabled-users-disabled-users-module"],
      "./dispensaries-list/dispensaries-list.module": ["./src/app/demo/dispensaries/dispensaries-list/dispensaries-list.module.ts", "common", "dispensaries-list-dispensaries-list-module"],
      "./forget-password/forget-password.module": ["./src/app/demo/pages/authentication/forget-password/forget-password.module.ts", "forget-password-forget-password-module"],
      "./payment-info/payment-info.module": ["./src/app/demo/payment/payment-info/payment-info.module.ts", "common", "payment-info-payment-info-module"],
      "./quiz-detail/quiz-detail.module": ["./src/app/demo/quizes/quiz-detail/quiz-detail.module.ts", "common", "quiz-detail-quiz-detail-module"],
      "./quiz-list/quiz-list.module": ["./src/app/demo/quizes/quiz-list/quiz-list.module.ts", "common", "quiz-list-quiz-list-module"],
      "./quiz-questions/quiz-questions.module": ["./src/app/demo/quizes/quiz-questions/quiz-questions.module.ts", "common", "quiz-questions-quiz-questions-module"],
      "./reset-password/reset-password.module": ["./src/app/demo/pages/authentication/reset-password/reset-password.module.ts", "reset-password-reset-password-module"],
      "./transactions-list/transactions-list.module": ["./src/app/demo/payment/transactions-list/transactions-list.module.ts", "transactions-list-transactions-list-module"],
      "./update-dispensary/update-dispensary.module": ["./src/app/demo/dispensaries/update-dispensary/update-dispensary.module.ts", "default~add-dispensary-add-dispensary-module~add-quiz-add-quiz-module~add-user-add-user-module~updat~04f9e2b5", "default~add-dispensary-add-dispensary-module~update-dispensary-update-dispensary-module~view-dispens~84a55bd4", "common", "update-dispensary-update-dispensary-module"],
      "./update-user/update-user.module": ["./src/app/demo/user/update-user/update-user.module.ts", "default~add-dispensary-add-dispensary-module~add-quiz-add-quiz-module~add-user-add-user-module~updat~04f9e2b5", "update-user-update-user-module"],
      "./users-list/users-list.module": ["./src/app/demo/user/users-list/users-list.module.ts", "common", "users-list-users-list-module"],
      "./view-dispensary/view-dispensary.module": ["./src/app/demo/dispensaries/view-dispensary/view-dispensary.module.ts", "default~add-dispensary-add-dispensary-module~update-dispensary-update-dispensary-module~view-dispens~84a55bd4", "common", "view-dispensary-view-dispensary-module"],
      "./view-user/view-user.module": ["./src/app/demo/user/view-user/view-user.module.ts", "view-user-view-user-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/admin-profile-update/admin-profile-update.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/admin-profile-update/admin-profile-update.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoAdminProfileUpdateAdminProfileUpdateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <app-card cardTitle=\"Update Admin\" [options]=\"false\">\n            <form [formGroup]=\"updateAdminForm\" (ngSubmit) = \"onUpdateAdminSubmit(updateAdminForm)\" #myform=\"ngForm\" method=\"POST\" enctype=\"multipart/form-data\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h4 class=\"mb-4\" id=\"basic-info-heading\">Basic Information</h4>\n                        <div class=\"form-group\">\n                            <label>Name</label>\n                            <input type=\"text\" formControlName=\"name\" class=\"form-control\" aria-describedby=\"name\" placeholder=\"Enter Name\" required>\n                            <div class=\"mb-3 error-div\">\n                                <small *ngIf=\"updateAdminForm.get('name').hasError('required') && myform.submitted\">Name Required</small>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Email</label>\n                            <input type=\"email\" formControlName=\"email\" class=\"form-control\" aria-describedby=\"email\" placeholder=\"Enter Email\" required>\n                            <div class=\"mb-3 error-div\">\n                                <small *ngIf=\"updateAdminForm.get('email').hasError('required') && myform.submitted\">Email Required</small>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <a href=\"javascript:\" (click)=\"passwordPopUp()\"><i class=\"feather icon-lock\"></i> Change Password?</a>\n                        </div>\n                    </div>\n                </div> \n                <button type=\"submit\" class=\"btn btn-primary\">Update</button>\n            </form>\n            </app-card>\n        </div>\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/admin-profile/admin-profile.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/admin-profile/admin-profile.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoAdminProfileAdminProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <app-card cardTitle=\"Admin Profile\" [options]=\"false\">\n            <div class=\"row\">\n                \n                <div class=\"col-md-6 table-responsive-sm\"> \n                    <h4 class=\"mb-4\" id=\"basic-info-heading\">Basic Information</h4>\n                    <table class=\"table table-borderless\">\n                        <tbody>\n                            <tr>\n                                <td><b>Name:</b></td>\n                                <td>{{userProfile.name}}</td>\n                            </tr>\n                            <tr>\n                                <td><b>Email:</b></td>\n                                <td>{{userProfile.email}}</td>\n                            </tr>\n                            <tr>\n                                <td><b>Last Updated at:</b></td>\n                                <td>{{userProfile.updated_at}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class=\"col-md-12 mt-3 text-right\" id=\"update-button\">\n                    <button class=\"btn btn-primary btn-sm\" (click)=\"updateProfile(userProfile.id)\">Update</button>\n                </div>\n            </div>\n        </app-card>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/admin.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/admin.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation class=\"pcoded-navbar\" [ngClass]=\"{'navbar-collapsed' : navCollapsed, 'theme-horizontal': this.dattaConfig['layout'] === 'horizontal', 'mob-open' : navCollapsedMob}\" (onNavCollapse)=\"this.navCollapsed = !this.navCollapsed;\" (onNavCollapsedMob)=\"navMobClick()\"></app-navigation>\n<app-nav-bar class=\"navbar pcoded-header navbar-expand-lg navbar-light\" (onNavCollapsedMob)=\"navMobClick()\"></app-nav-bar>\n<div class=\"pcoded-main-container\">\n  <div class=\"pcoded-wrapper\">\n    <div class=\"pcoded-content\">\n      <div class=\"pcoded-inner-content\">\n        <app-breadcrumb></app-breadcrumb>\n        <div class=\"main-body\">\n          <div class=\"page-wrapper\">\n            <router-outlet></router-outlet>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-configuration></app-configuration>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/configuration/configuration.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/configuration/configuration.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminConfigurationConfigurationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"this.isConfig\" id=\"styleSelector\" class=\"menu-styler\" [ngClass]=\"{'open': styleSelectorToggle}\">\r\n  <div class=\"style-toggler\">\r\n    <a href=\"javascript:\" (click)=\"styleSelectorToggle = !styleSelectorToggle\"></a>\r\n  </div>\r\n  <div class=\"style-block\">\r\n    <h6 class=\"mb-2\">Datta Able Live Menu Customizer</h6>\r\n    <hr class=\"my-0\">\r\n    <h6 *ngIf=\"dattaConfig['pre-layout'] !== 'layout-8'\">Layouts</h6>\r\n    <div *ngIf=\"dattaConfig['pre-layout'] !== 'layout-8'\" class=\"theme-color layout-type\">\r\n      <a href=\"javascript:\" [ngClass]=\"{'active': layoutType === 'menu-dark'}\" (click)=\"setLayout('menu-dark')\" data-value=\"menu-dark\" ngbTooltip=\"Default Layout\"><span></span><span></span></a>\r\n      <a href=\"javascript:\" [ngClass]=\"{'active': layoutType === 'menu-light'}\" (click)=\"setLayout('menu-light')\" data-value=\"menu-light\" ngbTooltip=\"Light\"><span></span><span></span></a>\r\n      <a href=\"javascript:\" [ngClass]=\"{'active': layoutType === 'dark'}\" (click)=\"setLayout('dark')\" data-value=\"dark\" ngbTooltip=\"Dark\"><span></span><span></span></a>\r\n      <a href=\"javascript:\" [ngClass]=\"{'active': layoutType === 'reset'}\" (click)=\"setLayout('reset')\" data-value=\"reset\" ngbTooltip=\"Reset\">Reset to Default</a>\r\n    </div>\r\n    <!-- <h6>Prebuild Layout</h6>\r\n    <p class=\"f-12\"><span class=\"text-c-red\">*</span> in Prebuild Layout you redirect to new page</p>\r\n    <div class=\"theme-color prelayout-color\">\r\n      <a routerLink=\"/layout/layout-2/\" class=\"\" data-value=\"l2\" target=\"_blank\"><span></span><span></span></a>\r\n      <a routerLink=\"/layout/layout-2-2/\" data-value=\"l2-2\" target=\"_blank\"><span></span><span></span></a>\r\n      <a routerLink=\"/layout/layout-3/\" data-value=\"l3\" target=\"_blank\"><span></span><span></span></a>\r\n      <a routerLink=\"/layout/layout-4/\" data-value=\"l4\" target=\"_blank\"><span></span><span></span></a>\r\n      <a routerLink=\"/layout/layout-4-2/\" data-value=\"l4-2\" target=\"_blank\"><span></span><span></span></a>\r\n      <a routerLink=\"/layout/layout-5h/\" data-value=\"l5-h\" target=\"_blank\"><span></span><span></span></a>\r\n      <a routerLink=\"/layout/nav-color/\" data-value=\"l-lite\" target=\"_blank\"><span></span><span></span></a>\r\n      <a routerLink=\"/layout/layout-6/\" data-value=\"l6\" target=\"_blank\"><span></span><span></span></a>\r\n      <a routerLink=\"/layout/layout-8/\" data-value=\"l8\" target=\"_blank\"><span></span><span></span></a>\r\n    </div> -->\r\n    <div class=\"form-group mb-3\">\r\n      <div class=\"switch switch-primary d-inline m-r-10\">\r\n        <input type=\"checkbox\" id=\"icon-colored\" [(ngModel)]='isColoredIcon' (change)=\"setColoredIcon($event)\"> <!--[checked]=\"\"-->\r\n        <label for=\"icon-colored\" class=\"cr\"></label>\r\n        </div>\r\n      <label>Icon Color</label>\r\n    </div>\r\n\r\n    <ngb-tabset type=\"pills\">\r\n      <ngb-tab title=\"Color\" class=\"mb-3\">\r\n        <ng-template ngbTabContent *ngIf=\"dattaConfig['pre-layout'] !== 'layout-6'\">\r\n          <perfect-scrollbar ngClass=\"datta-scroll\" [style.max-height]=\"'calc(100vh - 350px)'\" [usePSClass]=\"'datta'\" [disabled]=\"null\" [autoPropagation] =\"true\">\r\n            <h6>header background</h6>\r\n            <div class=\"theme-color header-color\">\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'header-default'}\" (click)=\"setHeaderBackground('header-default')\" data-value=\"header-default\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'header-blue'}\" (click)=\"setHeaderBackground('header-blue')\" data-value=\"header-blue\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'header-red'}\" (click)=\"setHeaderBackground('header-red')\" data-value=\"header-red\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'header-purple'}\" (click)=\"setHeaderBackground('header-purple')\" data-value=\"header-purple\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'header-lightblue'}\" (click)=\"setHeaderBackground('header-lightblue')\" data-value=\"header-lightblue\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'header-dark'}\" (click)=\"setHeaderBackground('header-dark')\" data-value=\"header-dark\"><span></span><span></span></a>\r\n            </div>\r\n            <h6>Menu background</h6>\r\n            <div class=\"theme-color navbar-color\">\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': navbarBackgroundColor === 'navbar-default'}\" (click)=\"setNavbarBackground('navbar-default')\" data-value=\"navbar-default\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': navbarBackgroundColor === 'navbar-blue'}\" (click)=\"setNavbarBackground('navbar-blue')\" data-value=\"navbar-blue\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': navbarBackgroundColor === 'navbar-red'}\" (click)=\"setNavbarBackground('navbar-red')\" data-value=\"navbar-red\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': navbarBackgroundColor === 'navbar-purple'}\" (click)=\"setNavbarBackground('navbar-purple')\" data-value=\"navbar-purple\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': navbarBackgroundColor === 'navbar-lightblue'}\" (click)=\"setNavbarBackground('navbar-lightblue')\" data-value=\"navbar-lightblue\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': navbarBackgroundColor === 'navbar-dark'}\" (click)=\"setNavbarBackground('navbar-dark')\" data-value=\"navbar-dark\"><span></span><span></span></a>\r\n            </div>\r\n            <h6 *ngIf=\"dattaConfig['layout'] !== 'horizontal'\">Menu Brand Color</h6>\r\n            <div *ngIf=\"dattaConfig['layout'] !== 'horizontal'\" class=\"theme-color brand-color\">\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': brandBackgroundColor === 'brand-default'}\" (click)=\"setBrandBackground('brand-default')\" data-value=\"brand-default\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': brandBackgroundColor === 'brand-blue'}\" (click)=\"setBrandBackground('brand-blue')\" data-value=\"brand-blue\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': brandBackgroundColor === 'brand-red'}\" (click)=\"setBrandBackground('brand-red')\" data-value=\"brand-red\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': brandBackgroundColor === 'brand-purple'}\" (click)=\"setBrandBackground('brand-purple')\" data-value=\"brand-purple\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': brandBackgroundColor === 'brand-lightblue'}\" (click)=\"setBrandBackground('brand-lightblue')\" data-value=\"brand-lightblue\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': brandBackgroundColor === 'brand-dark'}\" (click)=\"setBrandBackground('brand-dark')\" data-value=\"brand-dark\"><span></span><span></span></a>\r\n            </div>\r\n            <h6 *ngIf=\"dattaConfig['layout'] !== 'horizontal'\">Navbar Image</h6>\r\n            <div *ngIf=\"dattaConfig['layout'] !== 'horizontal'\" class=\"theme-color navbar-images\">\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': navBackgorundImage === 'navbar-image-1'}\" (click)=\"setBackgroundImage('navbar-image-1')\" data-value=\"navbar-image-1\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': navBackgorundImage === 'navbar-image-2'}\" (click)=\"setBackgroundImage('navbar-image-2')\" data-value=\"navbar-image-2\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': navBackgorundImage === 'navbar-image-3'}\" (click)=\"setBackgroundImage('navbar-image-3')\" data-value=\"navbar-image-3\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': navBackgorundImage === 'navbar-image-4'}\" (click)=\"setBackgroundImage('navbar-image-4')\" data-value=\"navbar-image-4\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': navBackgorundImage === 'navbar-image-5'}\" (click)=\"setBackgroundImage('navbar-image-5')\" data-value=\"navbar-image-5\"><span></span><span></span></a>\r\n            </div>\r\n          </perfect-scrollbar>\r\n        </ng-template>\r\n        <ng-template ngbTabContent *ngIf=\"dattaConfig['pre-layout'] === 'layout-6'\">\r\n          <perfect-scrollbar ngClass=\"datta-scroll\" [style.max-height]=\"'calc(100vh - 350px)'\" [usePSClass]=\"'datta'\" [disabled]=\"null\" [autoPropagation] =\"true\">\r\n            <h6>Background Color</h6>\r\n            <div class=\"theme-color laybg-color small\">\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackColor === '#04a9f5'}\" (click)=\"setHeaderBackColor('#04a9f5')\" data-value=\"#04a9f5\" style=\"background:#04a9f5\"></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackColor === '#ff5252'}\" (click)=\"setHeaderBackColor('#ff5252')\" data-value=\"#ff5252\" style=\"background:#ff5252\"></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackColor === '#9575CD'}\" (click)=\"setHeaderBackColor('#9575CD')\" data-value=\"#9575CD\" style=\"background:#9575CD\"></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackColor === '#23b7e5'}\" (click)=\"setHeaderBackColor('#23b7e5')\" data-value=\"#23b7e5\" style=\"background:#23b7e5\"></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackColor === '#424448'}\" (click)=\"setHeaderBackColor('#424448')\" data-value=\"#424448\" style=\"background:#424448\"></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackColor === 'linear-gradient(to right, #1de9b6 0%, #1dc4e9 100%)'}\" (click)=\"setHeaderBackColor('linear-gradient(to right, #1de9b6 0%, #1dc4e9 100%)')\" style=\"background:linear-gradient(to right, #1de9b6 0%, #1dc4e9 100%)\"></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackColor === 'linear-gradient(to right, #899FD4 0%, #A389D4 100%)'}\" (click)=\"setHeaderBackColor('linear-gradient(to right, #899FD4 0%, #A389D4 100%)')\" style=\"background:linear-gradient(to right, #899FD4 0%, #A389D4 100%)\"></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackColor === 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)'}\" (click)=\"setHeaderBackColor('linear-gradient(to right, #4facfe 0%, #00f2fe 100%)')\" style=\"background:linear-gradient(to right, #4facfe 0%, #00f2fe 100%)\"></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackColor === 'linear-gradient(to right, #667eea 0%, #764ba2 100%)'}\" (click)=\"setHeaderBackColor('linear-gradient(to right, #667eea 0%, #764ba2 100%)')\" style=\"background:linear-gradient(to right, #667eea 0%, #764ba2 100%)\"></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackColor === 'linear-gradient(to right, #f77062 0%, #fe5196 100%)'}\" (click)=\"setHeaderBackColor('linear-gradient(to right, #f77062 0%, #fe5196 100%)')\" style=\"background:linear-gradient(to right, #f77062 0%, #fe5196 100%)\"></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackColor === 'linear-gradient(to right, #9be15d 0%, #00e3ae 100%)'}\" (click)=\"setHeaderBackColor('linear-gradient(to right, #9be15d 0%, #00e3ae 100%)')\" style=\"background:linear-gradient(to right, #9be15d 0%, #00e3ae 100%)\"></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackColor === 'linear-gradient(to right, #b224ef 0%, #7579ff 100%)'}\" (click)=\"setHeaderBackColor('linear-gradient(to right, #b224ef 0%, #7579ff 100%)')\" style=\"background:linear-gradient(to right, #b224ef 0%, #7579ff 100%)\"></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackColor === 'linear-gradient(to right, #0acffe 0%, #495aff 100%)'}\" (click)=\"setHeaderBackColor('linear-gradient(to right, #0acffe 0%, #495aff 100%)')\" style=\"background:linear-gradient(to right, #0acffe 0%, #495aff 100%)\"></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackColor === 'linear-gradient(to right, #01a9ac 0%, #01dbdf 100%)'}\" (click)=\"setHeaderBackColor('linear-gradient(to right, #01a9ac 0%, #01dbdf 100%)')\" style=\"background:linear-gradient(to right, #01a9ac 0%, #01dbdf 100%)\"></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackColor === 'linear-gradient(to right, #fe5d70 0%, #fe909d 100%)'}\" (click)=\"setHeaderBackColor('linear-gradient(to right, #fe5d70 0%, #fe909d 100%)')\" style=\"background:linear-gradient(to right, #fe5d70 0%, #fe909d 100%)\"></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackColor === 'linear-gradient(to right, #0ac282 0%, #0df3a3 100%)'}\" (click)=\"setHeaderBackColor('linear-gradient(to right, #0ac282 0%, #0df3a3 100%)')\" style=\"background:linear-gradient(to right, #0ac282 0%, #0df3a3 100%)\"></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackColor === 'linear-gradient(to right, #fe9365 0%, #feb798 100%)'}\" (click)=\"setHeaderBackColor('linear-gradient(to right, #fe9365 0%, #feb798 100%)')\" style=\"background:linear-gradient(to right, #fe9365 0%, #feb798 100%)\"></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackColor === 'linear-gradient(to right, #A445B2 0%, #D41872 52%, #FF0066 100%)'}\" (click)=\"setHeaderBackColor('linear-gradient(to right, #A445B2 0%, #D41872 52%, #FF0066 100%)')\" data-value=\"linear-gradient(to right, #A445B2 0%, #D41872 52%, #FF0066 100%)\" style=\"background:linear-gradient(to right, #A445B2 0%, #D41872 52%, #FF0066 100%)\"></a>\r\n            </div>\r\n            <h6>Background Image</h6>\r\n            <hr>\r\n            <div class=\"theme-color bg-images\">\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackColor === 'url(\\'assets/images/bg-images/bg1.jpg\\')'}\" (click)=\"setHeaderBackColor('url(\\'assets/images/bg-images/bg1.jpg\\')')\" style=\"background-image:url('assets/images/bg-images/bg1.jpg'); background-size: 45px 30px;\"></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackColor === 'url(\\'assets/images/bg-images/bg3.jpg\\')'}\" (click)=\"setHeaderBackColor('url(\\'assets/images/bg-images/bg3.jpg\\')')\" style=\"background-image:url('assets/images/bg-images/bg3.jpg'); background-size: 45px 30px;\"></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackColor === 'url(\\'assets/images/bg-images/bg4.jpg\\')'}\" (click)=\"setHeaderBackColor('url(\\'assets/images/bg-images/bg4.jpg\\')')\" style=\"background-image:url('assets/images/bg-images/bg4.jpg'); background-size: 45px 30px;\"></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackColor === 'url(\\'assets/images/bg-images/bg5.jpg\\')'}\" (click)=\"setHeaderBackColor('url(\\'assets/images/bg-images/bg5.jpg\\')')\" style=\"background-image:url('assets/images/bg-images/bg5.jpg'); background-size: 45px 30px;\"></a>\r\n            </div>\r\n            <h6>Background Pattern</h6>\r\n            <hr>\r\n            <div class=\"theme-color bg-images pattern\">\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackColor === 'url(\\'assets/images/bg-images/1.png\\')'}\" (click)=\"setHeaderBackColor('url(\\'assets/images/bg-images/1.png\\')')\" style=\"background-image:url('assets/images/bg-images/1.png'); background-size: 45px 30px;\"></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackColor === 'url(\\'assets/images/bg-images/2.png\\')'}\" (click)=\"setHeaderBackColor('url(\\'assets/images/bg-images/2.png\\')')\" style=\"background-image:url('assets/images/bg-images/2.png'); background-size: 45px 30px;\"></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackColor === 'url(\\'assets/images/bg-images/3.png\\')'}\" (click)=\"setHeaderBackColor('url(\\'assets/images/bg-images/3.png\\')')\" style=\"background-image:url('assets/images/bg-images/3.png'); background-size: 45px 30px;\"></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackColor === 'url(\\'assets/images/bg-images/4.png\\')'}\" (click)=\"setHeaderBackColor('url(\\'assets/images/bg-images/4.png\\')')\" style=\"background-image:url('assets/images/bg-images/4.png'); background-size: 45px 30px;\"></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackColor === 'url(\\'assets/images/bg-images/5.png\\')'}\" (click)=\"setHeaderBackColor('url(\\'assets/images/bg-images/5.png\\')')\" style=\"background-image:url('assets/images/bg-images/5.png'); background-size: 45px 30px;\"></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackColor === 'url(\\'assets/images/bg-images/6.png\\')'}\" (click)=\"setHeaderBackColor('url(\\'assets/images/bg-images/6.png\\')')\" style=\"background-image:url('assets/images/bg-images/6.png'); background-size: 45px 30px;\"></a>\r\n            </div>\r\n          </perfect-scrollbar>\r\n        </ng-template>\r\n      </ngb-tab>\r\n      <ngb-tab title=\"Layouts\" *ngIf=\"dattaConfig['layout'] !== 'horizontal'\">\r\n        <ng-template ngbTabContent>\r\n          <perfect-scrollbar ngClass=\"datta-scroll\" [style.max-height]=\"'calc(100vh - 350px)'\" [usePSClass]=\"'datta'\">\r\n            <div *ngIf=\"dattaConfig['pre-layout'] !== 'layout-8' && dattaConfig['pre-layout'] !== 'layout-6'\" class=\"form-group mb-0\">\r\n              <div class=\"switch switch-primary d-inline m-r-10\">\r\n                <input type=\"checkbox\" id=\"theme-rtl\" [(ngModel)]='rtlLayout' (change)=\"setRtlLayout($event)\">\r\n                <label for=\"theme-rtl\" class=\"cr\"></label>\r\n              </div>\r\n              <label>RTL</label>\r\n            </div>\r\n            <div *ngIf=\"dattaConfig['pre-layout'] !== 'layout-8' && dattaConfig['pre-layout'] !== 'layout-6'\" class=\"form-group mb-0\">\r\n              <div class=\"switch switch-primary d-inline m-r-10\">\r\n                <input type=\"checkbox\" id=\"menu-fixed\" [(ngModel)]='menuFixedLayout' (change)=\"setMenuFixedLayout($event)\">\r\n                <label for=\"menu-fixed\" class=\"cr\"></label>\r\n              </div>\r\n              <label>Menu Fixed</label>\r\n            </div>\r\n            <div *ngIf=\"dattaConfig['pre-layout'] !== 'layout-8' && dattaConfig['pre-layout'] !== 'layout-6'\" class=\"form-group mb-0\">\r\n              <div class=\"switch switch-primary d-inline m-r-10\">\r\n                <input type=\"checkbox\" id=\"header-fixed\" [(ngModel)]='headerFixedLayout' (change)=\"setHeaderFixedLayout($event)\">\r\n                <label for=\"header-fixed\" class=\"cr\"></label>\r\n              </div>\r\n              <label>Header Fixed</label>\r\n            </div>\r\n            <div class=\"form-group mb-0\">\r\n            <div class=\"switch switch-primary d-inline m-r-10\">\r\n              <input type=\"checkbox\" id=\"box-layouts\" [(ngModel)]='boxLayout' (change)=\"setBoxLayout($event)\">\r\n              <label for=\"box-layouts\" class=\"cr\"></label>\r\n            </div>\r\n            <label>Box Layouts</label>\r\n          </div>\r\n          </perfect-scrollbar>\r\n        </ng-template>\r\n      </ngb-tab>\r\n      <ngb-tab title=\"Extra\">\r\n        <ng-template ngbTabContent>\r\n          <perfect-scrollbar ngClass=\"datta-scroll\" [style.max-height]=\"'calc(100vh - 350px)'\" [usePSClass]=\"'datta'\">\r\n            <h6>Menu Dropdown Icon</h6>\r\n            <div class=\"theme-color\">\r\n              <div class=\"form-group d-inline\">\r\n                <div class=\"radio radio-primary d-inline\">\r\n                  <input type=\"radio\" name=\"radio-in-1\" id=\"drpicon-1\" checked (click)=\"setMenuDropdownIcon('style1')\">\r\n                  <label for=\"drpicon-1\" class=\"cr\"><i class=\"feather icon-chevron-right\"></i></label>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group d-inline\">\r\n                <div class=\"radio radio-primary d-inline\">\r\n                  <label>\r\n                    <input type=\"radio\" name=\"radio-in-1\" id=\"drpicon-2\" (click)=\"setMenuDropdownIcon('style2')\">\r\n                    <label for=\"drpicon-2\" class=\"cr\"><i class=\"feather icon-chevrons-right\"></i></label>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group d-inline\">\r\n                <div class=\"radio radio-primary d-inline\">\r\n                  <input type=\"radio\" name=\"radio-in-1\" id=\"drpicon-3\" (click)=\"setMenuDropdownIcon('style3')\">\r\n                  <label for=\"drpicon-3\" class=\"cr\"><i class=\"feather icon-plus\"></i></label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <h6>Menu List Icon</h6>\r\n            <div class=\"theme-color\">\r\n              <div class=\"form-group d-inline\">\r\n                <div class=\"radio radio-primary d-inline\">\r\n                  <input type=\"radio\" name=\"radio-in\" id=\"subitem-1\" (click)=\"setMenuListIcon('style1')\">\r\n                  <label for=\"subitem-1\" class=\"cr\"><i class=\" \"> </i></label>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group d-inline\">\r\n                <div class=\"radio radio-primary d-inline\">\r\n                  <input type=\"radio\" name=\"radio-in\" id=\"subitem-2\" (click)=\"setMenuListIcon('style2')\">\r\n                  <label for=\"subitem-2\" class=\"cr\"><i class=\"feather icon-minus\"></i></label>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group d-inline\">\r\n                <div class=\"radio radio-primary d-inline\">\r\n                  <input type=\"radio\" name=\"radio-in\" id=\"subitem-3\" (click)=\"setMenuListIcon('style3')\">\r\n                  <label for=\"subitem-3\" class=\"cr\"><i class=\"feather icon-check\"></i></label>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group d-inline\">\r\n                <div class=\"radio radio-primary d-inline\">\r\n                  <input type=\"radio\" name=\"radio-in\" id=\"subitem-4\" (click)=\"setMenuListIcon('style4')\">\r\n                  <label for=\"subitem-4\" class=\"cr\"><i class=\"icon feather icon-corner-down-right\"></i></label>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group d-inline\">\r\n                <div class=\"radio radio-primary d-inline\">\r\n                  <input type=\"radio\" name=\"radio-in\" id=\"subitem-5\" (click)=\"setMenuListIcon('style5')\">\r\n                  <label for=\"subitem-5\" class=\"cr\"><i class=\"icon feather icon-chevrons-right\"></i></label>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group d-inline\">\r\n                <div class=\"radio radio-primary d-inline\">\r\n                  <input type=\"radio\" name=\"radio-in\" id=\"subitem-6\" (click)=\"setMenuListIcon('style6')\">\r\n                  <label for=\"subitem-6\" class=\"cr\"><i class=\"icon feather icon-chevron-right\"></i></label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <h6>Active Color</h6>\r\n            <div class=\"theme-color active-color small\">\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': navActiveColor === 'active-default'}\" (click)=\"setNavActiveColor('active-default')\" data-value=\"active-default\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': navActiveColor === 'active-blue'}\" (click)=\"setNavActiveColor('active-blue')\" data-value=\"active-blue\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': navActiveColor === 'active-red'}\" (click)=\"setNavActiveColor('active-red')\" data-value=\"active-red\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': navActiveColor === 'active-purple'}\" (click)=\"setNavActiveColor('active-purple')\" data-value=\"active-purple\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': navActiveColor === 'active-lightblue'}\" (click)=\"setNavActiveColor('active-lightblue')\" data-value=\"active-lightblue\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': navActiveColor === 'active-dark'}\" (click)=\"setNavActiveColor('active-dark')\" data-value=\"active-dark\"><span></span><span></span></a>\r\n            </div>\r\n            <h6 *ngIf=\"dattaConfig['layout'] !== 'horizontal'\">Menu Title Color</h6>\r\n            <div *ngIf=\"dattaConfig['layout'] !== 'horizontal'\" class=\"theme-color title-color small\">\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': navTitleColor === 'title-default'}\" (click)=\"setNavTitleColor('title-default')\" data-value=\"title-default\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': navTitleColor === 'title-blue'}\" (click)=\"setNavTitleColor('title-blue')\" data-value=\"title-blue\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': navTitleColor === 'title-red'}\" (click)=\"setNavTitleColor('title-red')\" data-value=\"title-red\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': navTitleColor === 'title-purple'}\" (click)=\"setNavTitleColor('title-purple')\" data-value=\"title-purple\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': navTitleColor === 'title-lightblue'}\" (click)=\"setNavTitleColor('title-lightblue')\" data-value=\"title-lightblue\"><span></span><span></span></a>\r\n              <a href=\"javascript:\" [ngClass]=\"{'active': navTitleColor === 'title-dark'}\" (click)=\"setNavTitleColor('title-dark')\" data-value=\"title-dark\"><span></span><span></span></a>\r\n            </div>\r\n            <div *ngIf=\"dattaConfig['layout'] !== 'horizontal'\" class=\"form-group mb-0\">\r\n              <div class=\"switch switch-primary d-inline m-r-10\">\r\n                <input type=\"checkbox\" id=\"caption-hide\" [(ngModel)]='menuTitleHide' (change)=\"hideMenuTitle($event)\">\r\n                <label for=\"caption-hide\" class=\"cr\"></label>\r\n              </div>\r\n              <label>Menu Title Hide</label>\r\n            </div>\r\n          </perfect-scrollbar>\r\n        </ng-template>\r\n      </ngb-tab>\r\n    </ngb-tabset>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-bar.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-bar.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminNavBarNavBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\n  <div class=\"m-header\" [style.display]=\"this.headerStyle\">\n    <a class=\"mobile-menu\" id=\"mobile-collapse1\" href=\"javascript:\" (click)=\"this.onNavCollapsedMob.emit();\"><span></span></a>\n    <a [routerLink]=\"['/dashboard/default']\" class=\"b-brand\">\n      <div class=\"b-bg\">\n        <!-- <i class=\"feather icon-trending-up\"></i> -->\n        <img id=\"logo-image\" class=\"img-fluid img-rounded\" [src]=\"'assets/images/budslogo1.png'\" height=\"250\" width=\"250\" />\n      </div>\n      <span class=\"b-title\">Buds Bank</span>\n    </a>\n  </div>\n  <a class=\"mobile-menu\" [ngClass]=\"{'on' : this.menuClass}\" id=\"mobile-header\" href=\"javascript:\" (click)=\"toggleMobOption()\"><i class=\"feather icon-more-horizontal\"></i></a>\n  <div class=\"collapse navbar-collapse\" [style.display]=\"this.collapseStyle\">\n    <!-- <app-nav-left class=\"mr-auto\" [style.display]=\"this.headerStyle\"></app-nav-left> -->\n    <app-nav-right class=\"mr-auto\"></app-nav-right>\n  </div>\n</header>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminNavBarNavLeftNavLeftComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminNavBarNavLeftNavSearchNavSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"main-search\" class=\"main-search\">\n  <div class=\"input-group\">\n    <input type=\"text\" id=\"m-search\" class=\"form-control\" placeholder=\"Search . . .\" [style.width]=\"searchWidthString\">\n    <a href=\"javascript:\" class=\"input-group-append search-close\" (click)=\"searchOff()\">\n      <i class=\"feather icon-x input-group-text\"></i>\n    </a>\n    <span class=\"input-group-append search-btn btn btn-primary\" (click)=\"searchOn()\">\n      <i class=\"feather icon-search input-group-text\"></i>\n    </span>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/chat-msg/chat-msg.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/chat-msg/chat-msg.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminNavBarNavRightChatMsgChatMsgComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"h-list-header\">\n  <h6>{{ chatMessage.name }}</h6>\n  <a href=\"javascript:\" class=\"h-back-user-list\" (click)=\"this.onChatToggle.emit();\"><i class=\"feather icon-chevron-left\"></i></a>\n</div>\n\n<div class=\"h-list-body\">\n  <div class=\"main-chat-cont\">\n    <div class=\"main-friend-chat\">\n      <ng-template #CHATNOTFOUND>\n        <div class=\"media chat-messages text-center\">\n          <div class=\"media-body chat-menu-content\">\n            <div class=\"\">\n              <p class=\"chat-cont\">CHAT NOT FOUND</p>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n      <ng-container *ngIf=\"chatMessage.chat; else CHATNOTFOUND\">\n        <perfect-scrollbar ngClass=\"datta-scroll\" [style.max-width]=\"'350px'\" [style.max-height]=\"'calc(100vh - 170px)'\" [usePSClass]=\"'datta'\" [disabled]=\"null\" [autoPropagation] =\"true\">\n          <div *ngFor=\"let messages of chatMessage.chat\">\n            <div class=\"media chat-messages\">\n              <a *ngIf=\"messages.type\" class=\"media-left photo-table\" href=\"javascript:\">\n                <img class=\"media-object img-radius img-radius m-t-5\" src=\"{{ chatMessage.photo }}\" alt=\"{{ chatMessage.name }}\">\n              </a>\n              <div class=\"media-body\" [ngClass]=\"{'chat-menu-content' : messages.type, 'chat-menu-reply': !messages.type}\">\n                <div class=\"\">\n                  <p class=\"chat-cont\">{{ messages.msg }}</p>\n                </div>\n                <p class=\"chat-time\">{{ messages.time }}</p>\n              </div>\n            </div>\n          </div>\n          <div #newChat [innerHTML]=\"newReplay\"></div>\n          <div *ngIf=\"friendWriting\" class=\"media chat-messages typing\">\n            <a class=\"media-left photo-table\" href=\"javascript:\"><img class=\"media-object img-radius img-radius m-t-5\" src=\"{{chatMessage.photo}}\" alt=\"{{ chatMessage.name }}\"></a>\n            <div class=\"media-body chat-menu-content\">\n              <div class=\"rem-msg\">\n                <p class=\"chat-cont\">Typing . . .</p>\n              </div>\n              <p class=\"chat-time\">now</p>\n            </div>\n          </div>\n        </perfect-scrollbar>\n      </ng-container>\n    </div>\n  </div>\n</div>\n<div class=\"h-list-footer\">\n  <div class=\"input-group\" (focusout)=\"this.message_error = false;\">\n    <input type=\"file\" class=\"chat-attach\" style=\"display:none\">\n    <a href=\"javascript:\" class=\"input-group-prepend btn btn-success btn-attach\" [ngClass]=\"{'btn-danger': message_error === true}\">\n      <i class=\"feather icon-paperclip\"></i>\n    </a>\n    <input type=\"text\" [(ngModel)]=\"message\" name=\"h-chat-text\" class=\"form-control h-send-chat\" placeholder=\"Write hear . . \" (keyup)=\"sentMsg(1)\" (keyup.enter)=\"sentMsg(0)\">\n    <button type=\"submit\" class=\"input-group-append btn-send btn btn-primary\" [ngClass]=\"{'btn-danger': message_error === true}\" (click)=\"sentMsg(0)\">\n      <i class=\"feather icon-message-circle\"></i>\n    </button>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/chat-user-list.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/chat-user-list.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminNavBarNavRightChatUserListChatUserListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"h-list-header\">\n  <div class=\"input-group\">\n    <input type=\"text\" id=\"search-friends\" class=\"form-control\" placeholder=\"Search Friend . . .\">\n  </div>\n</div>\n<div class=\"h-list-body\">\n  <a href=\"javascript:\" class=\"h-close-text\" (click)=\"this.onChatCollapse.emit();\"><i class=\"feather icon-chevrons-right\"></i></a>\n  <div class=\"main-friend-cont scroll-div\">\n    <div class=\"main-friend-list\">\n      <perfect-scrollbar ngClass=\"datta-scroll\" [style.max-width]=\"'350px'\" [style.max-height]=\"'calc(100vh - 85px)'\" [usePSClass]=\"'datta'\" [disabled]=\"null\" [autoPropagation] =\"true\">\n        <ng-container *ngFor=\"let friends of friendsList\">\n          <app-friend (onChatOn)=\"onChatOn(friends.id)\" [friends]=\"friends\"></app-friend>\n        </ng-container>\n      </perfect-scrollbar>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/friend/friend.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/friend/friend.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminNavBarNavRightChatUserListFriendFriendComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"media userlist-box ripple\" (click)=\"innerChatToggle(friends.id)\" [attr.data-id]=\"friends.id\" [attr.data-status]=\"{'online': friends.status, 'offline': !friends.status}\" [attr.data-username]=\"friends.name\">\n  <a class=\"media-left\" href=\"javascript:\"><img class=\"media-object img-radius\" src=\"{{friends.photo}}\" alt=\"{{ friends.name }}\"><div class=\"live-status\" *ngIf=\"friends.new\">{{friends.new}}</div></a>\n  <div class=\"media-body\">\n    <h6 class=\"chat-header\">{{friends.name}}<small class=\"d-block\" *ngIf=\"friends.time\" [ngClass]=\"{'text-c-green': friends.status, 'text-c-red': !friends.status}\">{{friends.time}}</small></h6>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminNavBarNavRightNavRightComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ul class=\"navbar-nav\">\n  <li>\n    <div class=\"dropdown drp-user\" ngbDropdown [placement]=\"['bottom-left', 'bottom-right']\">\n      <a href=\"javascript:\" ngbDropdownToggle data-toggle=\"dropdown\">\n        <i class=\"icon feather icon-settings\"></i>\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right profile-notification\" ngbDropdownMenu>\n        <div class=\"pro-head\">\n          <img src=\"assets/images/user/avatar-1.jpg\" class=\"img-radius\" alt=\"User-Profile-Image\">\n          <span>{{ adminName }}</span>\n          <a href=\"\" (click)=\"doLogout()\" class=\"dud-logout\" title=\"Logout\">\n            <i class=\"feather icon-log-out\"></i>\n          </a>\n        </div>\n        <ul class=\"pro-body\">\n          \n          <li><a href=\"javascript:\" (click)=\"adminProfile()\" class=\"dropdown-item\"><i class=\"feather icon-user\"></i> Profile</a></li>\n          \n          <li><a href=\"\" (click)=\"doLogout()\" class=\"dropdown-item\"><i class=\"feather icon-log-out\"></i> Logout</a></li>\n        </ul>\n      </div>\n    </div>\n  </li>\n</ul>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminNavigationNavContentNavCollapseNavCollapseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"!item.hidden\">\n  <li *ngIf=\"themeLayout === 'horizontal'\" (mouseenter)=\"navCollapse($event)\" data-username=\"dashboard Default Ecommerce CRM Analytics Crypto Project\" class=\"nav-item pcoded-hasmenu\" [routerLinkActive]=\"['active']\">\n    <a [routerLinkActive]=\"['active']\" href=\"javascript:\" class=\"nav-link\">\n      <ng-container *ngTemplateOutlet=\"itemContent\"></ng-container>\n    </a>\n    <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\n  </li>\n  <li *ngIf=\"themeLayout === 'vertical'\" data-username=\"dashboard Default Ecommerce CRM Analytics Crypto Project\" class=\"nav-item pcoded-hasmenu\" [routerLinkActive]=\"['active']\">\n    <a [routerLinkActive]=\"['active']\" href=\"javascript:\" class=\"nav-link\" (click)=\"navCollapse($event)\">\n      <ng-container *ngTemplateOutlet=\"itemContent\"></ng-container>\n    </a>\n    <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\n  </li>\n  <ng-template #itemContent>\n      <span class=\"pcoded-micon\" *ngIf=\"item.icon\">\n        <i class=\"{{item.icon}}\"></i>\n      </span>\n    <span class=\"pcoded-mtext\">{{item.title}}\n      <span *ngIf=\"item.badge && themeLayout === 'horizontal'\" class=\"badge label\" [ngClass]=\"item.badge.type\">\n        {{item.badge.title}}\n      </span>\n    </span>\n    <span *ngIf=\"item.badge && themeLayout === 'vertical'\" class=\"pcoded-badge label\" [ngClass]=\"item.badge.type\">\n        {{item.badge.title}}\n      </span>\n  </ng-template>\n  <ng-template #subMenuContent>\n    <ul class=\"pcoded-submenu\" [routerLinkActive]=\"['active']\">\n      <ng-container *ngFor=\"let item of item.children\">\n        <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\n        <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\n        <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\n      </ng-container>\n    </ul>\n  </ng-template>\n</ng-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminNavigationNavContentNavContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<perfect-scrollbar *ngIf=\"this.dattaConfig['layout'] === 'vertical'\" [exclude]=\"'#mobile-collapse1'\" (clickOutside)=\"navMob()\" id=\"nav-ps-datta\" ngClass=\"datta-scroll\" [style.max-width]=\"'300px'\" [style.max-height]=\"'calc(100vh - 70px)'\" [usePSClass]=\"'datta'\" [disabled]=\"null\" [autoPropagation] =\"true\">\n  <div class=\"navbar-content\">\n    <ul class=\"nav pcoded-inner-navbar\" (clickOutside)=\"fireOutClick()\" (mouseleave)=\"navMob()\">\n      <ng-container *ngFor=\"let item of navigation\">\n        <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\n        <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\n        <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\n      </ng-container>\n    </ul>\n  </div>\n</perfect-scrollbar>\n<div *ngIf=\"this.dattaConfig['layout'] === 'horizontal'\" class=\"navbar-content sidenav-horizontal\" id=\"layout-sidenav\">\n  <a href=\"javascript:\" class=\"sidenav-horizontal-prev\" [ngClass]=\"prevDisabled\" (click)=\"scrollMinus()\"></a>\n  <div #navbarWrapper class=\"sidenav-horizontal-wrapper\"><!-- add 14-4 viral -->\n    <ul #navbarContent id=\"side-nav-horizontal\" class=\"nav pcoded-inner-navbar sidenav-inner\" (clickOutside)=\"fireLeave()\" (mouseleave)=\"fireLeave()\">\n      <ng-container *ngFor=\"let item of navigation\">\n        <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\n        <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\n        <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\n      </ng-container>\n    </ul>\n  </div>\n  <a href=\"javascript:\" class=\"sidenav-horizontal-next\" [ngClass]=\"nextDisabled\" (click)=\"scrollPlus()\"></a>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminNavigationNavContentNavGroupNavGroupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"!item.hidden\">\r\n  <li class=\"nav-item pcoded-menu-caption\"><label>{{item.title}}</label></li>\r\n  <ng-container *ngFor=\"let item of item.children\">\r\n    <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\r\n    <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\r\n    <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\r\n  </ng-container>\r\n</ng-container>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminNavigationNavContentNavItemNavItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"!item.hidden\">\n  <li [ngClass]=\"item.classes\" *ngIf=\"item.url && !item.external\" [routerLinkActive]=\"['active']\">\n    <a class=\"nav-link\" [target]=\"item.target ? '_blank' : '_self'\" [routerLink]=\"[item.url]\" (click)=\"closeOtherMenu($event)\">\n      <ng-container *ngTemplateOutlet=\"itemIcon\"></ng-container>\n      <span class=\"pcoded-mtext\" *ngIf=\"item.icon; else directTitle\">{{ item.title }}</span>\n      <ng-template #directTitle>\n        {{item.title}}\n      </ng-template>\n      <ng-container *ngTemplateOutlet=\"itemBadge\"></ng-container>\n    </a>\n  </li>\n  <li [ngClass]=\"item.classes\" *ngIf=\"item.url && item.external\">\n    <a [target]=\"item.target ? '_blank' : '_self'\" [href]=\"item.url\">\n      <ng-container *ngTemplateOutlet=\"itemIcon\"></ng-container>\n      <span class=\"pcoded-mtext\" *ngIf=\"item.icon; else directTitle\">{{ item.title }}</span>\n      <ng-template #directTitle>\n        {{item.title}}\n      </ng-template>\n      <ng-container *ngTemplateOutlet=\"itemBadge\"></ng-container>\n    </a>\n  </li>\n  <ng-template #itemIcon>\n    <span *ngIf=\"item.icon\" class=\"pcoded-micon\"><i class=\"feather\" [ngClass]=\"item.icon\"></i></span>\n  </ng-template>\n  <ng-template #itemBadge>\n    <span *ngIf=\"item.badge && themeLayout === 'vertical'\" class=\"pcoded-badge label\" [ngClass]=\"item.badge.type\">\n      {{item.badge.title}}\n    </span>\n    <span *ngIf=\"item.badge && themeLayout === 'horizontal'\" class=\"badge label\" [ngClass]=\"item.badge.type\">\n      {{item.badge.title}}\n    </span>\n  </ng-template>\n</ng-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-logo/nav-logo.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-logo/nav-logo.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminNavigationNavLogoNavLogoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"navbar-brand header-logo\">\n  <a [routerLink]=\"['/dashboard/default/']\" class=\"b-brand\">\n    <div class=\"b-bg\">\n      <!-- <i class=\"feather icon-trending-up\"></i> -->\n      <img id=\"logo-image\" class=\"img-fluid img-rounded\" [src]=\"'assets/images/budslogo1.png'\" height=\"250\" width=\"250\" />\n    </div>\n    <span class=\"b-title\">Bud's Bank</span>\n  </a>\n  <a href=\"javascript:\" class=\"mobile-menu\" [ngClass]=\"{'on' : navCollapsed}\" id=\"mobile-collapse\" (click)=\"navCollapse()\"><span></span></a>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/navigation.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/navigation.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminNavigationNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav>\n  <div class=\"navbar-wrapper\">\n    <app-nav-logo [navCollapsed]=\"navCollapsed\" (onNavCollapse)=\"navCollapse()\"></app-nav-logo>\n    <app-nav-content (onNavCollapsedMob)=\"navCollapseMob()\"></app-nav-content>\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/auth/auth.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/auth/auth.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAuthAuthComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-breadcrumb></app-breadcrumb>\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/breadcrumb/breadcrumb.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/breadcrumb/breadcrumb.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeSharedComponentsBreadcrumbBreadcrumbComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngFor=\"let breadcrumb of navigationList; let last = last\">\n  <div class=\"page-header\" *ngIf=\"last && breadcrumb.breadcrumbs !== false\">\n    <div class=\"page-block\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-md-12\">\n          <div class=\"page-header-title\">\n            <ng-container *ngFor=\"let breadcrumb of navigationList; let last = last\"><h5 class=\"m-b-10\" *ngIf=\"last\">{{breadcrumb.title}}</h5></ng-container>\n          </div>\n          <ul class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">\n              <a [routerLink]=\"['/dashboard/default/']\" *ngIf=\"type === 'theme2'\"><i class=\"feather icon-home\"></i></a>\n              <a [routerLink]=\"['/dashboard/default/']\" *ngIf=\"type === 'theme1'\">Home</a>\n            </li>\n            <ng-container *ngFor=\"let breadcrumb of navigationList\">\n              <li class=\"breadcrumb-item\" *ngIf=\"breadcrumb.url !== false\"><a [routerLink]=\"breadcrumb.url\">{{breadcrumb.title}}</a></li>\n              <li class=\"breadcrumb-item\" *ngIf=\"breadcrumb.url === false\"><a href=\"javascript:\">{{breadcrumb.title}}</a></li>\n            </ng-container>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/card/card.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/card/card.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeSharedComponentsCardCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\" [ngClass]=\"cardClass\" [@cardRemove]=\"cardRemove\" #toAnimate animates animatesInitMode=\"show\" [animatesOnInit]=\"{useVisibility: false, disabled: true}\">\n  <div class=\"card-header\" *ngIf=\"!hidHeader\" [ngClass]=\"headerClass\">\n    <h5 *ngIf=\"!customHeader\">{{ cardTitle }}</h5>\n    <div class=\"card-header-right\" *ngIf=\"this.options && !customHeader\">\n      <div class=\"btn-group card-option dropdown\" ngbDropdown>\n        <button type=\"button\" class=\"btn dropdown-toggle btn-icon\" ngbDropdownToggle>\n          <i class=\"feather icon-more-horizontal\"></i>\n        </button>\n        <ul class=\"list-unstyled card-option dropdown-menu dropdown-menu-right\" ngbDropdownMenu>\n          <li class=\"dropdown-item full-card\" (click)=\"fullCardToggle(toAnimate, '', true)\"><a href=\"javascript:\"><span><i class=\"feather\" [ngClass]=\"fullIcon\"></i> {{this.cardClass === 'full-card' ? 'Restore' : 'Maximize'}}</span></a></li>\n          <li class=\"dropdown-item minimize-card\" (click)=\"collapsedCardToggle($event)\"><a href=\"javascript:\"><span><i class=\"feather\" [ngClass]=\"collapsedIcon\"></i> {{this.collapsedCard === 'collapsed' ? 'Expanded' : 'Collapsed'}} </span>\n            <span style=\"display:none\"><i class=\"feather icon-plus\"></i></span></a></li>\n          <li class=\"dropdown-item reload-card\" (click)=\"cardRefresh()\"><a href=\"javascript:\"><i class=\"feather icon-refresh-cw\"></i> Reload</a></li>\n          <li class=\"dropdown-item close-card\" (click)=\"cardRemoveAction()\"><a href=\"javascript:\"><i class=\"feather icon-trash\"></i> Remove</a></li>\n        </ul>\n      </div>\n    </div>\n    <ng-content *ngIf=\"customHeader\" select=\".app-card-header\"></ng-content>\n  </div>\n  <div [@collapsedCard]=\"collapsedCard\">\n    <div class=\"card-block\" [ngClass]=\"blockClass\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <div class=\"card-loader\" *ngIf=\"loadCard\"><i class=\"pct-loader1 anim-rotate\"></i></div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-config.ts":
  /*!*******************************!*\
    !*** ./src/app/app-config.ts ***!
    \*******************************/

  /*! exports provided: DattaConfig */

  /***/
  function srcAppAppConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DattaConfig", function () {
      return DattaConfig;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var DattaConfig = function DattaConfig() {
      _classCallCheck(this, DattaConfig);
    };

    DattaConfig.config = {
      'layout': 'vertical',
      'pre-layout': null,
      'collapse-menu': false,
      'layout-type': 'menu-dark',
      'nav-icon-color': false,
      'header-back-color': 'header-default',
      'nav-back-color': 'navbar-default',
      'nav-brand-color': 'brand-default',
      'nav-back-image': false,
      'rtl-layout': false,
      'nav-fixed-layout': true,
      'header-fixed-layout': false,
      'box-layout': false,
      'nav-dropdown-icon': 'style1',
      'nav-list-icon': 'style1',
      'nav-active-list-color': 'active-default',
      'nav-list-title-color': 'title-default',
      'nav-list-title-hide': false,
      'layout-6-background': '#23b7e5' // used only for pre-layout = layout-6

    };
    /* layout-6 background option*/

    /* 1 - background color */

    /*
    #04a9f5,#ff5252, #9575CD, #23b7e5, #424448
    linear-gradient(to right, #1de9b6 0%, #1dc4e9 100%)
    linear-gradient(to right, #899FD4 0%, #A389D4 100%)
    linear-gradient(to right, #4facfe 0%, #00f2fe 100%)
    linear-gradient(to right, #667eea 0%, #764ba2 100%)
    linear-gradient(to right, #f77062 0%, #fe5196 100%)
    linear-gradient(to right, #9be15d 0%, #00e3ae 100%)
    linear-gradient(to right, #b224ef 0%, #7579ff 100%)
    linear-gradient(to right, #0acffe 0%, #495aff 100%)
    linear-gradient(to right, #01a9ac 0%, #01dbdf 100%)
    linear-gradient(to right, #fe5d70 0%, #fe909d 100%)
    linear-gradient(to right, #0ac282 0%, #0df3a3 100%)
    linear-gradient(to right, #fe9365 0%, #feb798 100%)
    linear-gradient(to right, #A445B2 0%, #D41872 52%, #FF0066 100%)
    */

    /* 2 - background image */

    /*
    url("assets/images/bg-images/bg1.jpg")
    url("assets/images/bg-images/bg3.jpg")
    url("assets/images/bg-images/bg4.jpg")
    url("assets/images/bg-images/bg5.jpg")
    */

    /* 3 - background pattern */

    /*
    url("assets/images/bg-images/1.png")
    url("assets/images/bg-images/2.png")
    url("assets/images/bg-images/3.png")
    url("assets/images/bg-images/4.png")
    url("assets/images/bg-images/5.png")
    url("assets/images/bg-images/6.png")
    */

    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./theme/layout/admin/admin.component */
    "./src/app/theme/layout/admin/admin.component.ts");
    /* harmony import */


    var _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./theme/layout/auth/auth.component */
    "./src/app/theme/layout/auth/auth.component.ts");
    /* harmony import */


    var _services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/auth-guard/auth-guard.service */
    "./src/app/services/auth-guard/auth-guard.service.ts");
    /* harmony import */


    var _demo_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./demo/admin-profile/admin-profile.component */
    "./src/app/demo/admin-profile/admin-profile.component.ts");
    /* harmony import */


    var _demo_admin_profile_update_admin_profile_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./demo/admin-profile-update/admin-profile-update.component */
    "./src/app/demo/admin-profile-update/admin-profile-update.component.ts");

    var redirectRoute = "dashboard/default";
    var uData = JSON.parse(localStorage.getItem('userInfo'));

    if (uData) {
      var role = uData.role;

      if (role === "2" || role === 2) {
        console.log('aaa jaa ywwr');
        redirectRoute = "admin/dispensary/all";
      } else {
        redirectRoute = "dashboard/default";
      }
    }

    var routes = [{
      path: '',
      component: _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
      canActivate: [_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
      children: [{
        path: '',
        redirectTo: redirectRoute,
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        loadChildren: './demo/dashboard/dashboard.module#DashboardModule'
      }, {
        path: 'admin/user',
        loadChildren: './demo/user/user.module#UserModule'
      }, {
        path: 'admin/dispensary',
        loadChildren: './demo/dispensaries/dispensaries.module#DispensariesModule'
      }, {
        path: 'admin/quiz',
        loadChildren: './demo/quizes/quizes.module#QuizesModule'
      }, {
        path: 'admin/profile',
        component: _demo_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_6__["AdminProfileComponent"]
      }, {
        path: 'admin/profile/update/:id',
        component: _demo_admin_profile_update_admin_profile_update_component__WEBPACK_IMPORTED_MODULE_7__["AdminProfileUpdateComponent"]
      }, {
        path: 'admin/payment',
        loadChildren: './demo/payment/payment.module#PaymentModule'
      }, {
        path: 'admin/vouchers',
        loadChildren: './demo/vouchers/voucher.module#VoucherModule'
      }]
    }, {
      path: '',
      component: _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"],
      children: [{
        path: 'auth',
        loadChildren: './demo/pages/authentication/authentication.module#AuthenticationModule'
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.title = 'datta-able';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
              return;
            }

            window.scrollTo(0, 0);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./theme/layout/admin/admin.component */
    "./src/app/theme/layout/admin/admin.component.ts");
    /* harmony import */


    var _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./theme/layout/auth/auth.component */
    "./src/app/theme/layout/auth/auth.component.ts");
    /* harmony import */


    var _theme_layout_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./theme/layout/admin/navigation/navigation.component */
    "./src/app/theme/layout/admin/navigation/navigation.component.ts");
    /* harmony import */


    var _theme_layout_admin_navigation_nav_logo_nav_logo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./theme/layout/admin/navigation/nav-logo/nav-logo.component */
    "./src/app/theme/layout/admin/navigation/nav-logo/nav-logo.component.ts");
    /* harmony import */


    var _theme_layout_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./theme/layout/admin/navigation/nav-content/nav-content.component */
    "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts");
    /* harmony import */


    var _theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./theme/layout/admin/navigation/navigation */
    "./src/app/theme/layout/admin/navigation/navigation.ts");
    /* harmony import */


    var _theme_layout_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./theme/layout/admin/navigation/nav-content/nav-group/nav-group.component */
    "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts");
    /* harmony import */


    var _theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component */
    "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts");
    /* harmony import */


    var _theme_layout_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./theme/layout/admin/navigation/nav-content/nav-item/nav-item.component */
    "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts");
    /* harmony import */


    var _theme_layout_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./theme/layout/admin/nav-bar/nav-bar.component */
    "./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _theme_shared_full_screen_toggle_full_screen__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./theme/shared/full-screen/toggle-full-screen */
    "./src/app/theme/shared/full-screen/toggle-full-screen.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _theme_layout_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./theme/layout/admin/nav-bar/nav-left/nav-left.component */
    "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts");
    /* harmony import */


    var _theme_layout_admin_nav_bar_nav_left_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component */
    "./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.ts");
    /* harmony import */


    var _theme_layout_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./theme/layout/admin/nav-bar/nav-right/nav-right.component */
    "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts");
    /* harmony import */


    var _theme_layout_admin_nav_bar_nav_right_chat_user_list_chat_user_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./theme/layout/admin/nav-bar/nav-right/chat-user-list/chat-user-list.component */
    "./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/chat-user-list.component.ts");
    /* harmony import */


    var _theme_layout_admin_nav_bar_nav_right_chat_user_list_friend_friend_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./theme/layout/admin/nav-bar/nav-right/chat-user-list/friend/friend.component */
    "./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/friend/friend.component.ts");
    /* harmony import */


    var _theme_layout_admin_nav_bar_nav_right_chat_msg_chat_msg_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./theme/layout/admin/nav-bar/nav-right/chat-msg/chat-msg.component */
    "./src/app/theme/layout/admin/nav-bar/nav-right/chat-msg/chat-msg.component.ts");
    /* harmony import */


    var _theme_layout_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./theme/layout/admin/configuration/configuration.component */
    "./src/app/theme/layout/admin/configuration/configuration.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @sweetalert2/ngx-sweetalert2 */
    "./node_modules/@sweetalert2/ngx-sweetalert2/fesm2015/sweetalert2-ngx-sweetalert2.js");
    /* harmony import */


    var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ngx-select-dropdown */
    "./node_modules/ngx-select-dropdown/dist/index.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _demo_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./demo/admin-profile/admin-profile.component */
    "./src/app/demo/admin-profile/admin-profile.component.ts");
    /* harmony import */


    var _demo_admin_profile_update_admin_profile_update_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./demo/admin-profile-update/admin-profile-update.component */
    "./src/app/demo/admin-profile-update/admin-profile-update.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"], _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__["AuthComponent"], _theme_layout_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"], _theme_layout_admin_navigation_nav_logo_nav_logo_component__WEBPACK_IMPORTED_MODULE_10__["NavLogoComponent"], _theme_layout_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_11__["NavContentComponent"], _theme_layout_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_13__["NavGroupComponent"], _theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_14__["NavCollapseComponent"], _theme_layout_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_15__["NavItemComponent"], _theme_layout_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_16__["NavBarComponent"], _theme_shared_full_screen_toggle_full_screen__WEBPACK_IMPORTED_MODULE_17__["ToggleFullScreenDirective"], _theme_layout_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_19__["NavLeftComponent"], _theme_layout_admin_nav_bar_nav_left_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_20__["NavSearchComponent"], _theme_layout_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_21__["NavRightComponent"], _theme_layout_admin_nav_bar_nav_right_chat_user_list_chat_user_list_component__WEBPACK_IMPORTED_MODULE_22__["ChatUserListComponent"], _theme_layout_admin_nav_bar_nav_right_chat_user_list_friend_friend_component__WEBPACK_IMPORTED_MODULE_23__["FriendComponent"], _theme_layout_admin_nav_bar_nav_right_chat_msg_chat_msg_component__WEBPACK_IMPORTED_MODULE_24__["ChatMsgComponent"], _theme_layout_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_25__["ConfigurationComponent"], _demo_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_31__["AdminProfileComponent"], _demo_admin_profile_update_admin_profile_update_component__WEBPACK_IMPORTED_MODULE_32__["AdminProfileUpdateComponent"]],
      imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbTabsetModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ReactiveFormsModule"], ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_29__["SelectDropDownModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_30__["NgxSpinnerModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_28__["SweetAlert2Module"].forRoot()],
      providers: [_theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_12__["NavigationItem"], {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_33__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_33__["HashLocationStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/demo/admin-profile-update/admin-profile-update.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/demo/admin-profile-update/admin-profile-update.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDemoAdminProfileUpdateAdminProfileUpdateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".error-div {\n  color: red;\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94MjMvRG9jdW1lbnRzL0dpdEh1Yi9kYmMtYnVkc2JhbmstYW5ndWxhci9zcmMvYXBwL2RlbW8vYWRtaW4tcHJvZmlsZS11cGRhdGUvYWRtaW4tcHJvZmlsZS11cGRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFTO0VBQ1QsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZW1vL2FkbWluLXByb2ZpbGUtdXBkYXRlL2FkbWluLXByb2ZpbGUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLWRpdiB7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/demo/admin-profile-update/admin-profile-update.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/demo/admin-profile-update/admin-profile-update.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: AdminProfileUpdateComponent */

  /***/
  function srcAppDemoAdminProfileUpdateAdminProfileUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminProfileUpdateComponent", function () {
      return AdminProfileUpdateComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/user/user.service */
    "./src/app/services/user/user.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);

    var AdminProfileUpdateComponent =
    /*#__PURE__*/
    function () {
      function AdminProfileUpdateComponent(formBuilder, user, auth, route) {
        var _this = this;

        _classCallCheck(this, AdminProfileUpdateComponent);

        this.formBuilder = formBuilder;
        this.user = user;
        this.auth = auth;
        this.route = route;
        this.updateAdminForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.updatePassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          previousPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });

        this.onUpdateAdminSubmit = function (adminForm) {
          if (!_this.updateAdminForm.invalid) {
            var profile = _this.updateAdminForm.value;
            profile['id'] = _this.admin.id;

            _this.user.updateAdminProfile(profile).then(function (response) {
              if (response['status'] === 200) {
                // this.auth.setUserInfo(response['admin']);
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Success', 'Profile updated successfully', 'success').then(function (result) {
                  _this.route.navigateByUrl('/admin/profile');
                });
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Error', 'Internal Server Error', 'error').then(function (result) {
                  _this.route.navigateByUrl('/admin/profile');
                });
              }
            });
          }
        };

        this.passwordPopUp = function () {
          var prevPassword = '';
          var newPassword = '';
          var confirmPassword = '';
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            html: '<input id="swal-input1" class="swal2-input" placeholder="Previous Password" type="password">' + '<input id="swal-input2" class="swal2-input" placeholder="New Password" type="password">' + '<input id="swal-input3" class="swal2-input" placeholder="Confirm Password" type="password">',
            showLoaderOnConfirm: true,
            allowOutsideClick: false,
            focusConfirm: false,
            preConfirm: function preConfirm() {
              return new Promise(function (resolve, reject) {
                resolve({
                  prevPassword: $('input[id="swal-input1"]').val(),
                  newPassword: $('input[id="swal-input2"]').val(),
                  confirmPassword: $('input[id="swal-input3"]').val()
                });
              });
            },
            icon: 'info',
            title: 'Change Password',
            showCancelButton: true
          }).then(function (result) {
            var passwordValues = result.value;

            if (passwordValues.newPassword !== passwordValues.confirmPassword) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Error', 'Confirm Password does not match', 'error');
            } else {
              if (passwordValues.newPassword.length < 6) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Error', 'Password should be atleast 6 characters', 'error');
              } else {
                if (passwordValues.prevPassword !== _this.admin.password) {
                  console.log(passwordValues.prevPassword);
                  console.log(_this.admin.password);
                  sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Error', 'Previous password does not match', 'error');
                } else {
                  if (passwordValues.newPassword === _this.admin.password) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Error', 'New password should be different from previous password', 'error');
                  } else {
                    var data = {
                      'id': _this.admin.id,
                      'password': passwordValues.newPassword
                    };

                    _this.user.updateAdminPassword(data).then(function (response) {
                      if (response['status'] === 200) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Success', 'password updated successfully', 'success');
                      } else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Error', 'Internal Server Error', 'error');
                      }
                    });
                  }
                }
              }
            }
          });
        };
      }

      _createClass(AdminProfileUpdateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.admin = JSON.parse(localStorage.getItem('userInfo'));
          console.log(this.admin);
          this.updateAdminForm.controls['name'].setValue(this.admin.name);
          this.updateAdminForm.controls['email'].setValue(this.admin.email);
          console.log(this.updateAdminForm);
          this.updateAdminForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
          });
        }
      }, {
        key: "name",
        get: function get() {
          return this.updateAdminForm.get('name');
        }
      }, {
        key: "email",
        get: function get() {
          return this.updateAdminForm.get('email');
        }
      }]);

      return AdminProfileUpdateComponent;
    }();

    AdminProfileUpdateComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AdminProfileUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-profile-update',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-profile-update.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/admin-profile-update/admin-profile-update.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-profile-update.component.scss */
      "./src/app/demo/admin-profile-update/admin-profile-update.component.scss")).default]
    })], AdminProfileUpdateComponent);
    /***/
  },

  /***/
  "./src/app/demo/admin-profile/admin-profile.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/demo/admin-profile/admin-profile.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDemoAdminProfileAdminProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vYWRtaW4tcHJvZmlsZS9hZG1pbi1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/demo/admin-profile/admin-profile.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/demo/admin-profile/admin-profile.component.ts ***!
    \***************************************************************/

  /*! exports provided: AdminProfileComponent */

  /***/
  function srcAppDemoAdminProfileAdminProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminProfileComponent", function () {
      return AdminProfileComponent;
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


    var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/user/user.service */
    "./src/app/services/user/user.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var AdminProfileComponent =
    /*#__PURE__*/
    function () {
      function AdminProfileComponent(router, auth, user) {
        var _this2 = this;

        _classCallCheck(this, AdminProfileComponent);

        this.router = router;
        this.auth = auth;
        this.user = user;

        this.updateProfile = function (adminId) {
          _this2.router.navigateByUrl("/admin/profile/update/".concat(adminId));
        };
      }

      _createClass(AdminProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          // let admin = JSON.parse(localStorage.getItem('userInfo'));
          var admin = JSON.parse(localStorage.getItem('userInfo'));
          console.log(admin.id);
          this.user.getAdminProfile(admin.id).then(function (data) {
            console.log(data['admin']);
            _this3.userProfile = data['admin'];
            _this3.userProfile['updated_at'] = _this3.formatDate(_this3.userProfile['updated_at']);
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

      return AdminProfileComponent;
    }();

    AdminProfileComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    AdminProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/admin-profile/admin-profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-profile.component.scss */
      "./src/app/demo/admin-profile/admin-profile.component.scss")).default]
    })], AdminProfileComponent);
    /***/
  },

  /***/
  "./src/app/fack-db/friends-list.ts":
  /*!*****************************************!*\
    !*** ./src/app/fack-db/friends-list.ts ***!
    \*****************************************/

  /*! exports provided: FriendsList */

  /***/
  function srcAppFackDbFriendsListTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendsList", function () {
      return FriendsList;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var FriendsList = function FriendsList() {
      _classCallCheck(this, FriendsList);
    };

    FriendsList.friends = [{
      id: 1,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Josephin Doe',
      new: 3,
      status: 1,
      time: 'typing'
    }, {
      id: 2,
      photo: 'assets/images/user/avatar-2.jpg',
      name: 'Lary Doe',
      new: 1,
      status: 1,
      time: 'online'
    }, {
      id: 3,
      photo: 'assets/images/user/avatar-3.jpg',
      name: 'Alice',
      status: 1,
      time: 'online'
    }, {
      id: 4,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Alia',
      status: 0,
      new: 1,
      time: '10 min ago'
    }, {
      id: 5,
      photo: 'assets/images/user/avatar-4.jpg',
      name: 'Suzen',
      status: 0,
      time: '15 min ago'
    }, {
      id: 1,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Josephin Doe',
      new: 3,
      status: 1,
      time: 'typing'
    }, {
      id: 2,
      photo: 'assets/images/user/avatar-2.jpg',
      name: 'Lary Doe',
      new: 1,
      status: 1,
      time: 'online'
    }, {
      id: 3,
      photo: 'assets/images/user/avatar-3.jpg',
      name: 'Alice',
      status: 1,
      time: 'online'
    }, {
      id: 4,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Alia',
      status: 0,
      new: 1,
      time: '10 min ago'
    }, {
      id: 5,
      photo: 'assets/images/user/avatar-4.jpg',
      name: 'Suzen',
      status: 0,
      time: '15 min ago'
    }, {
      id: 1,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Josephin Doe',
      new: 3,
      status: 1,
      time: 'typing'
    }, {
      id: 2,
      photo: 'assets/images/user/avatar-2.jpg',
      name: 'Lary Doe',
      new: 1,
      status: 1,
      time: 'online'
    }, {
      id: 3,
      photo: 'assets/images/user/avatar-3.jpg',
      name: 'Alice',
      status: 1,
      time: 'online'
    }, {
      id: 4,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Alia',
      status: 0,
      new: 1,
      time: '10 min ago'
    }, {
      id: 5,
      photo: 'assets/images/user/avatar-4.jpg',
      name: 'Suzen',
      status: 0,
      time: '15 min ago'
    }, {
      id: 1,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Josephin Doe',
      new: 3,
      status: 1,
      time: 'typing'
    }, {
      id: 2,
      photo: 'assets/images/user/avatar-2.jpg',
      name: 'Lary Doe',
      new: 1,
      status: 1,
      time: 'online'
    }, {
      id: 3,
      photo: 'assets/images/user/avatar-3.jpg',
      name: 'Alice',
      status: 1,
      time: 'online'
    }, {
      id: 4,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Alia',
      status: 0,
      new: 1,
      time: '10 min ago'
    }, {
      id: 5,
      photo: 'assets/images/user/avatar-4.jpg',
      name: 'Suzen',
      status: 0,
      time: '15 min ago'
    }, {
      id: 1,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Josephin Doe',
      new: 3,
      status: 1,
      time: 'typing'
    }, {
      id: 2,
      photo: 'assets/images/user/avatar-2.jpg',
      name: 'Lary Doe',
      new: 1,
      status: 1,
      time: 'online'
    }, {
      id: 3,
      photo: 'assets/images/user/avatar-3.jpg',
      name: 'Alice',
      status: 1,
      time: 'online'
    }, {
      id: 4,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Alia',
      status: 0,
      new: 1,
      time: '10 min ago'
    }, {
      id: 5,
      photo: 'assets/images/user/avatar-4.jpg',
      name: 'Suzen',
      status: 0,
      time: '15 min ago'
    }];
    /***/
  },

  /***/
  "./src/app/fack-db/user-chat.ts":
  /*!**************************************!*\
    !*** ./src/app/fack-db/user-chat.ts ***!
    \**************************************/

  /*! exports provided: UserChat */

  /***/
  function srcAppFackDbUserChatTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserChat", function () {
      return UserChat;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // type 0-send, 1-received


    var UserChat = function UserChat() {
      _classCallCheck(this, UserChat);
    };

    UserChat.chat = [{
      friend_id: 1,
      friend_photo: 'assets/images/avatar-3.jpg',
      messages: [{
        type: 1,
        msg: 'I\'m just looking around. Will you tell me something about yourself?',
        time: '8:20 a.m'
      }, {
        type: 0,
        msg: 'Ohh! very nice',
        time: '8:22 a.m'
      }, {
        type: 1,
        msg: 'can you come with me?',
        time: '8:22 a.m'
      }]
    }, {
      friend_id: 2,
      friend_photo: 'assets/images/avatar-2.jpg',
      messages: [{
        type: 1,
        msg: 'Hiii!!! Good Morning',
        time: '6:48 a.m'
      }, {
        type: 0,
        msg: 'Hello, Very Good Morning',
        time: '6:50 a.m'
      }, {
        type: 0,
        msg: 'How are You?',
        time: '8:50 a.m'
      }, {
        type: 1,
        msg: 'Fine, What do you do?',
        time: '8:51 a.m'
      }]
    }, {
      friend_id: 3,
      friend_photo: 'assets/images/avatar-4.jpg',
      messages: [{
        type: 1,
        msg: 'I\'m just looking around. Will you tell me something about yourself?',
        time: '8:20 a.m'
      }, {
        type: 0,
        msg: 'Ohh! very nice',
        time: '8:22 a.m'
      }, {
        type: 1,
        msg: 'can you come with me?',
        time: '8:22 a.m'
      }]
    }, {
      friend_id: 4,
      friend_photo: 'assets/images/avatar-3.jpg',
      messages: [{
        type: 1,
        msg: 'Hiii!!! Good Morning',
        time: '6:48 a.m'
      }, {
        type: 0,
        msg: 'Hello, Very Good Morning',
        time: '6:50 a.m'
      }, {
        type: 0,
        msg: 'How are You?',
        time: '8:50 a.m'
      }, {
        type: 1,
        msg: 'Fine, What do you do?',
        time: '8:51 a.m'
      }]
    }, {
      friend_id: 5,
      friend_photo: 'assets/images/avatar-2.jpg',
      messages: [{
        type: 1,
        msg: 'I\'m just looking around. Will you tell me something about yourself?',
        time: '8:20 a.m'
      }, {
        type: 0,
        msg: 'Ohh! very nice',
        time: '8:22 a.m'
      }, {
        type: 1,
        msg: 'can you come with me?',
        time: '8:22 a.m'
      }]
    }];
    /***/
  },

  /***/
  "./src/app/services/auth-guard/auth-guard.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/services/auth-guard/auth-guard.service.ts ***!
    \***********************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppServicesAuthGuardAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
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


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/services/auth.service.ts");

    var AuthGuardService =
    /*#__PURE__*/
    function () {
      function AuthGuardService(authService, route) {
        _classCallCheck(this, AuthGuardService);

        this.authService = authService;
        this.route = route;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.authService.isAuthenticated()) {
            return true;
          }

          this.route.navigateByUrl('auth/signin');
          return false;
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
      }

      _createClass(AuthService, [{
        key: "isAuthenticated",
        value: function isAuthenticated() {
          var userData = localStorage.getItem('userInfo');
          console.log("userData", userData);

          if (userData && JSON.parse(userData)) {
            return true;
          }

          return false;
        }
      }, {
        key: "setUserInfo",
        value: function setUserInfo(user) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return localStorage.setItem('userInfo', JSON.stringify(user));

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "validate",
        value: function validate(email, password) {
          var data = {
            'email': "".concat(email),
            'password': "".concat(password)
          };
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/login"), data).toPromise();
        }
      }, {
        key: "forgetpassword",
        value: function forgetpassword(email) {
          var data = {
            'email': "".concat(email)
          };
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/forget-business-password"), data).toPromise();
        }
      }, {
        key: "updateResetpassword",
        value: function updateResetpassword(password, confirm_password, token) {
          var data = {
            'password': "".concat(password),
            'confirm_password': "".concat(confirm_password),
            'token': "".concat(token)
          };
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/update-business-password"), data).toPromise();
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('userInfo');
        }
      }, {
        key: "register",
        value: function register(data) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/register/business"), data).toPromise();
        }
      }, {
        key: "checkEmail",
        value: function checkEmail(email) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/register/check-email"), email).toPromise();
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/user/user.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/user/user.service.ts ***!
    \***********************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
      }

      _createClass(UserService, [{
        key: "register",
        value: function register(user) {
          var setHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Authorization", "Basic " + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authorizationSecret);
          var httpOptions = {
            headers: setHeaders
          };
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/user/add"), user, httpOptions).toPromise();
        }
      }, {
        key: "getActiveUsers",
        value: function getActiveUsers(pageNumber, pageSize) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/user/all?page=").concat(pageNumber, "&size=").concat(pageSize)).toPromise();
        }
      }, {
        key: "getUserById",
        value: function getUserById(userId) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/user/").concat(userId)).toPromise();
        }
      }, {
        key: "update",
        value: function update(user) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/user/update/profile"), user).toPromise();
        }
      }, {
        key: "disableUser",
        value: function disableUser(data) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/user/disable"), data).toPromise();
        }
      }, {
        key: "getDisabledUsers",
        value: function getDisabledUsers(pageNumber, pageSize) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/user/disabled/all?page=").concat(pageNumber, "&size=").concat(pageSize)).toPromise();
        }
      }, {
        key: "activateUser",
        value: function activateUser(data) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/user/activate"), data).toPromise();
        }
      }, {
        key: "getDashboradData",
        value: function getDashboradData(userID) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/dashboard/data?userID=").concat(userID)).toPromise();
        }
      }, {
        key: "updateAdminPassword",
        value: function updateAdminPassword(data) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/profile/password/update"), data).toPromise();
        }
      }, {
        key: "updateAdminProfile",
        value: function updateAdminProfile(data) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/profile/update"), data).toPromise();
        }
      }, {
        key: "getAdminProfile",
        value: function getAdminProfile(id) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/").concat(id)).toPromise();
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/admin.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/theme/layout/admin/admin.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminAdminComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/admin.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/theme/layout/admin/admin.component.ts ***!
    \*******************************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppThemeLayoutAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
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


    var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../app-config */
    "./src/app/app-config.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var AdminComponent =
    /*#__PURE__*/
    function () {
      function AdminComponent(zone, location) {
        _classCallCheck(this, AdminComponent);

        this.zone = zone;
        this.location = location;
        this.dattaConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["DattaConfig"].config;
        var current_url = this.location.path();

        if (this.location['_baseHref']) {
          current_url = this.location['_baseHref'] + this.location.path();
        }

        if (current_url === this.location['_baseHref'] + '/layout/collapse-menu' || current_url === this.location['_baseHref'] + '/layout/box') {
          this.dattaConfig['collapse-menu'] = true;
        }

        this.windowWidth = window.innerWidth;
        this.navCollapsed = this.windowWidth >= 992 ? this.dattaConfig['collapse-menu'] : false;
        this.navCollapsedMob = false;
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navMobClick",
        value: function navMobClick() {
          var _this4 = this;

          if (this.navCollapsedMob && !document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
            this.navCollapsedMob = !this.navCollapsedMob;
            setTimeout(function () {
              _this4.navCollapsedMob = !_this4.navCollapsedMob;
            }, 100);
          } else {
            this.navCollapsedMob = !this.navCollapsedMob;
          }
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/admin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin.component.scss */
      "./src/app/theme/layout/admin/admin.component.scss")).default]
    })], AdminComponent);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/configuration/configuration.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/theme/layout/admin/configuration/configuration.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminConfigurationConfigurationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".menu-styler .nav-pills {\n  margin-bottom: 8px;\n  box-shadow: none; }\n\nbody.datta-dark .menu-styler .tab-content {\n  background: rgba(4, 169, 245, 0.03); }\n\nbody.datta-dark .menu-styler h1,\nbody.datta-dark .menu-styler h2,\nbody.datta-dark .menu-styler h3,\nbody.datta-dark .menu-styler h4,\nbody.datta-dark .menu-styler h5,\nbody.datta-dark .menu-styler p,\nbody.datta-dark .menu-styler h6 {\n  color: #222; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94MjMvRG9jdW1lbnRzL0dpdEh1Yi9kYmMtYnVkc2JhbmstYW5ndWxhci9zcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBR00sbUNBQWtDLEVBQUE7O0FBSHhDOzs7Ozs7O0VBWU0sV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LXN0eWxlciB7XHJcbiAgLm5hdi1waWxscyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuXHJcbn1cclxuYm9keS5kYXR0YS1kYXJre1xyXG4gIC5tZW51LXN0eWxlcntcclxuICAgIC50YWItY29udGVudHtcclxuICAgICAgYmFja2dyb3VuZDpyZ2JhKDQsIDE2OSwgMjQ1LCAwLjAzKTtcclxuICAgIH1cclxuICAgIGgxLFxyXG4gICAgaDIsXHJcbiAgICBoMyxcclxuICAgIGg0LFxyXG4gICAgaDUsXHJcbiAgICBwLFxyXG4gICAgaDZ7XHJcbiAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/configuration/configuration.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/theme/layout/admin/configuration/configuration.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ConfigurationComponent */

  /***/
  function srcAppThemeLayoutAdminConfigurationConfigurationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function () {
      return ConfigurationComponent;
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


    var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../app-config */
    "./src/app/app-config.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ConfigurationComponent =
    /*#__PURE__*/
    function () {
      function ConfigurationComponent(zone, location, router) {
        _classCallCheck(this, ConfigurationComponent);

        this.zone = zone;
        this.location = location;
        this.router = router;
        this.dattaConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["DattaConfig"].config;
        this.setThemeLayout();
      }

      _createClass(ConfigurationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.styleSelectorToggle = false;
          this.layoutType = this.dattaConfig['layout-type'];
          this.setLayout(this.layoutType);
          this.isColoredIcon = this.dattaConfig['nav-icon-color'];
          this.changeIconColor(this.isColoredIcon);
          this.headerBackgroundColor = this.dattaConfig['header-back-color'];
          this.navbarBackgroundColor = this.dattaConfig['nav-back-color'];
          this.brandBackgroundColor = this.dattaConfig['nav-brand-color'];
          this.navBackgorundImage = this.dattaConfig['nav-back-image'];
          this.setHeaderBackground(this.headerBackgroundColor);
          this.setNavbarBackground(this.navbarBackgroundColor);
          this.setBrandBackground(this.brandBackgroundColor);
          this.setBackgroundImage(this.navBackgorundImage);
          this.rtlLayout = this.dattaConfig['rtl-layout'];
          this.changeRtlLayout(this.rtlLayout);
          this.menuFixedLayout = this.dattaConfig['nav-fixed-layout'];

          if (this.dattaConfig['layout'] === 'vertical') {
            this.changeMenuFixedLayout(this.menuFixedLayout);
          }

          this.headerFixedLayout = this.dattaConfig['header-fixed-layout'];
          this.changeHeaderFixedLayout(this.headerFixedLayout);
          this.boxLayout = this.dattaConfig['box-layout'];
          this.changeBoxLayout(this.boxLayout);
          this.menuDropdownIcon = this.dattaConfig['nav-dropdown-icon'];
          this.setMenuDropdownIcon(this.menuDropdownIcon);
          this.menuListIcon = this.dattaConfig['nav-list-icon'];
          this.setMenuListIcon(this.menuListIcon);
          this.navActiveColor = this.dattaConfig['nav-active-list-color'];
          this.setNavActiveColor(this.navActiveColor);
          this.navTitleColor = this.dattaConfig['nav-list-title-color'];
          this.setNavTitleColor(this.navTitleColor);
          this.menuTitleHide = this.dattaConfig['nav-list-title-hide'];
          this.changeMenuTitle(this.menuTitleHide);

          if (this.dattaConfig['pre-layout'] !== '' && this.dattaConfig['pre-layout'] !== null) {
            this.setPreBuildLayout(this.dattaConfig['pre-layout']);
          } // this.router.navigate(['/dashboard/default']);

        }
      }, {
        key: "setThemeLayout",
        value: function setThemeLayout() {
          var current_url = this.location.path();

          if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
          }

          switch (current_url) {
            case this.location['_baseHref'] + '/layout/static':
              this.dattaConfig['layout'] = 'vertical';
              this.dattaConfig['nav-fixed-layout'] = false;
              this.dattaConfig['header-fixed-layout'] = false;
              break;

            case this.location['_baseHref'] + '/layout/fixed':
              this.dattaConfig['layout'] = 'vertical';
              this.dattaConfig['nav-fixed-layout'] = true;
              this.dattaConfig['header-fixed-layout'] = true;
              break;

            case this.location['_baseHref'] + '/layout/nav-fixed':
              this.dattaConfig['layout'] = 'vertical';
              this.dattaConfig['nav-fixed-layout'] = true;
              this.dattaConfig['header-fixed-layout'] = false;
              break;

            case this.location['_baseHref'] + '/layout/nav-image':
              this.dattaConfig['layout'] = 'vertical';
              this.dattaConfig['nav-back-image'] = 'navbar-image-3';
              break;

            case this.location['_baseHref'] + '/layout/collapse-menu':
              this.dattaConfig['layout'] = 'vertical';
              this.dattaConfig['collapse-menu'] = true;
              break;

            case this.location['_baseHref'] + '/layout/horizontal':
              this.dattaConfig['layout'] = 'horizontal';
              break;

            case this.location['_baseHref'] + '/layout/box':
              this.dattaConfig['layout'] = 'vertical';
              this.dattaConfig['box-layout'] = true;
              this.dattaConfig['collapse-menu'] = true;
              break;

            case this.location['_baseHref'] + '/layout/rtl':
              this.dattaConfig['layout'] = 'vertical';
              this.dattaConfig['rtl-layout'] = true;
              break;

            case this.location['_baseHref'] + '/layout/light':
              this.dattaConfig['layout'] = 'vertical';
              this.dattaConfig['layout-type'] = 'menu-light';
              break;

            case this.location['_baseHref'] + '/layout/dark':
              this.dattaConfig['layout'] = 'vertical';
              this.dattaConfig['layout-type'] = 'dark';
              this.dattaConfig['nav-back-color'] = 'navbar-dark';
              this.dattaConfig['nav-brand-color'] = 'brand-dark';
              break;

            case this.location['_baseHref'] + '/layout/icon-color':
              this.dattaConfig['layout'] = 'vertical';
              this.dattaConfig['layout-type'] = 'menu-light';
              this.dattaConfig['nav-icon-color'] = true;
              break;

            case this.location['_baseHref'] + '/layout/layout-2':
              this.dattaConfig['layout'] = 'vertical';
              this.dattaConfig['pre-layout'] = 'layout-2';
              break;

            case this.location['_baseHref'] + '/layout/layout-2-2':
              this.dattaConfig['layout'] = 'vertical';
              this.dattaConfig['pre-layout'] = 'layout-2-2';
              break;

            case this.location['_baseHref'] + '/layout/layout-3':
              this.dattaConfig['layout'] = 'vertical';
              this.dattaConfig['pre-layout'] = 'layout-3';
              break;

            case this.location['_baseHref'] + '/layout/layout-4':
              this.dattaConfig['layout'] = 'vertical';
              this.dattaConfig['pre-layout'] = 'layout-4';
              break;

            case this.location['_baseHref'] + '/layout/layout-4-2':
              this.dattaConfig['layout'] = 'vertical';
              this.dattaConfig['pre-layout'] = 'layout-4-2';
              break;

            case this.location['_baseHref'] + '/layout/layout-5h':
              this.dattaConfig['layout'] = 'horizontal';
              this.dattaConfig['layout-type'] = 'menu-light';
              this.dattaConfig['nav-icon-color'] = true;
              this.dattaConfig['header-back-color'] = 'header-blue';
              break;

            case this.location['_baseHref'] + '/layout/nav-color':
              this.dattaConfig['layout'] = 'vertical';
              this.dattaConfig['layout-type'] = 'menu-light';
              this.dattaConfig['nav-icon-color'] = true;
              this.dattaConfig['header-back-color'] = 'header-lightblue';
              this.dattaConfig['nav-brand-color'] = 'brand-lightblue';
              this.dattaConfig['nav-fixed-layout'] = true;
              this.dattaConfig['header-fixed-layout'] = true;
              break;

            case this.location['_baseHref'] + '/layout/layout-6':
              this.dattaConfig['layout'] = 'vertical';
              this.dattaConfig['pre-layout'] = 'layout-6';
              this.dattaConfig['layout-type'] = 'menu-light';
              this.dattaConfig['nav-icon-color'] = true;
              this.dattaConfig['nav-brand-color'] = 'brand-lightblue';
              this.dattaConfig['nav-fixed-layout'] = false;
              this.dattaConfig['header-fixed-layout'] = false;
              this.dattaConfig['layout-6-background'] = '#23b7e5';
              break;

            case this.location['_baseHref'] + '/layout/layout-8':
              this.dattaConfig['layout'] = 'vertical';
              this.dattaConfig['pre-layout'] = 'layout-8';
              this.dattaConfig['layout-type'] = 'menu-light';
              this.dattaConfig['header-back-color'] = 'header-lightblue';
              this.dattaConfig['nav-brand-color'] = 'brand-lightblue';
              this.dattaConfig['nav-fixed-layout'] = true;
              this.dattaConfig['header-fixed-layout'] = true;
              this.dattaConfig['nav-active-list-color'] = 'active-lightblue';
              break;

            default:
              break;
          }
        }
      }, {
        key: "setPreBuildLayout",
        value: function setPreBuildLayout(pre_layout) {
          if (pre_layout === 'layout-6') {
            document.querySelector('.pcoded-navbar').classList.add('menupos-static');
            this.headerBackColor = this.dattaConfig['layout-6-background'];
            this.setHeaderBackColor(this.headerBackColor);
          }

          if (pre_layout !== 'layout-6' && pre_layout !== 'layout-8') {
            this.isConfig = false;
            document.querySelector('.pcoded-navbar').classList.add(pre_layout);
          } else {
            document.querySelector('body').classList.add(pre_layout);
          }
        }
      }, {
        key: "setHeaderBackColor",
        value: function setHeaderBackColor(color) {
          this.headerBackColor = color;
          document.querySelector('body').style.background = color;
        } // change main layout

      }, {
        key: "setLayout",
        value: function setLayout(layout) {
          this.isConfig = true;
          this.setNavbarBackground(this.dattaConfig['nav-back-color']);
          this.setBrandBackground(this.dattaConfig['nav-brand-color']);
          document.querySelector('.pcoded-navbar').classList.remove('menu-light');
          document.querySelector('.pcoded-navbar').classList.remove('menu-dark');
          document.querySelector('.pcoded-navbar').classList.remove('navbar-dark');
          document.querySelector('.pcoded-navbar').classList.remove('brand-dark');
          document.querySelector('body').classList.remove('datta-dark');
          this.setHeaderBackground('header-default');
          this.layoutType = layout;

          if (layout === 'menu-light') {
            this.setNavbarBackground(this.navbarBackgroundColor);
            this.setBrandBackground(this.brandBackgroundColor);
            document.querySelector('.pcoded-navbar').classList.add(layout);
          }

          if (layout === 'dark') {
            document.querySelector('.pcoded-navbar').classList.add('navbar-dark');
            document.querySelector('.pcoded-navbar').classList.add('brand-dark');
            this.setNavbarBackground('navbar-dark');
            this.setBrandBackground('brand-dark');

            if (this.dattaConfig['pre-layout'] !== 'layout-6') {
              this.setHeaderBackground('header-dark');
            }

            document.querySelector('body').classList.add('datta-dark');
          }

          if (layout === 'reset') {
            this.reset();
          }
        }
      }, {
        key: "reset",
        value: function reset() {
          document.querySelector('.pcoded-navbar').classList.remove('icon-colored');
          this.ngOnInit();
        }
      }, {
        key: "setColoredIcon",
        value: function setColoredIcon(e) {
          var flag = !!e.target.checked;
          this.changeIconColor(flag);
        }
      }, {
        key: "changeIconColor",
        value: function changeIconColor(flag) {
          if (flag) {
            document.querySelector('.pcoded-navbar').classList.add('icon-colored');
          } else {
            document.querySelector('.pcoded-navbar').classList.remove('icon-colored');
          }
        }
      }, {
        key: "setRtlLayout",
        value: function setRtlLayout(e) {
          var flag = !!e.target.checked;
          this.changeRtlLayout(flag);
        }
      }, {
        key: "changeRtlLayout",
        value: function changeRtlLayout(flag) {
          if (flag) {
            document.querySelector('body').classList.add('datta-rtl');
          } else {
            document.querySelector('body').classList.remove('datta-rtl');
          }
        }
      }, {
        key: "setMenuFixedLayout",
        value: function setMenuFixedLayout(e) {
          var flag = !!e.target.checked;
          this.changeMenuFixedLayout(flag);
        }
      }, {
        key: "changeMenuFixedLayout",
        value: function changeMenuFixedLayout(flag) {
          setTimeout(function () {
            if (flag) {
              document.querySelector('.pcoded-navbar').classList.remove('menupos-static');
              document.querySelector('#nav-ps-datta').style.maxHeight = 'calc(100vh - 70px)';
            } else {
              document.querySelector('.pcoded-navbar').classList.add('menupos-static');
              document.querySelector('#nav-ps-datta').style.maxHeight = '100%';
            }
          }, 100);
        }
      }, {
        key: "setHeaderFixedLayout",
        value: function setHeaderFixedLayout(e) {
          var flag = !!e.target.checked;
          this.changeHeaderFixedLayout(flag);
        }
      }, {
        key: "changeHeaderFixedLayout",
        value: function changeHeaderFixedLayout(flag) {
          if (flag) {
            document.querySelector('.pcoded-header').classList.add('headerpos-fixed');
            document.querySelector('.pcoded-header').classList.add('header-blue');
          } else {
            document.querySelector('.pcoded-header').classList.remove('headerpos-fixed');
          }
        }
      }, {
        key: "setBoxLayout",
        value: function setBoxLayout(e) {
          var flag = !!e.target.checked;
          this.changeBoxLayout(flag);
        }
      }, {
        key: "changeBoxLayout",
        value: function changeBoxLayout(flag) {
          if (flag) {
            document.querySelector('body').classList.add('container');
            document.querySelector('body').classList.add('box-layout');
          } else {
            document.querySelector('body').classList.remove('box-layout');
            document.querySelector('body').classList.remove('container');
          }
        }
      }, {
        key: "hideMenuTitle",
        value: function hideMenuTitle(e) {
          var flag = !!e.target.checked;
          this.changeMenuTitle(flag);
        }
      }, {
        key: "changeMenuTitle",
        value: function changeMenuTitle(flag) {
          if (flag) {
            document.querySelector('.pcoded-navbar').classList.add('caption-hide');
          } else {
            document.querySelector('.pcoded-navbar').classList.remove('caption-hide');
          }
        }
      }, {
        key: "setHeaderBackground",
        value: function setHeaderBackground(background) {
          this.headerBackgroundColor = background;
          document.querySelector('.pcoded-header').classList.remove('header-blue');
          document.querySelector('.pcoded-header').classList.remove('header-red');
          document.querySelector('.pcoded-header').classList.remove('header-purple');
          document.querySelector('.pcoded-header').classList.remove('header-lightblue');
          document.querySelector('.pcoded-header').classList.remove('header-dark');

          if (background !== 'header-default') {
            document.querySelector('.pcoded-header').classList.add(background);
          }
        }
      }, {
        key: "setNavbarBackground",
        value: function setNavbarBackground(background) {
          this.setBackgroundImage(this.dattaConfig['nav-back-image']);
          this.navbarBackgroundColor = background;
          document.querySelector('.pcoded-navbar').classList.remove('navbar-blue');
          document.querySelector('.pcoded-navbar').classList.remove('navbar-red');
          document.querySelector('.pcoded-navbar').classList.remove('navbar-purple');
          document.querySelector('.pcoded-navbar').classList.remove('navbar-lightblue');
          document.querySelector('.pcoded-navbar').classList.remove('navbar-dark'); // add default menu brand background color

          document.querySelector('.pcoded-navbar').classList.add('brand-default');

          if (background !== 'navbar-default') {
            document.querySelector('.pcoded-navbar').classList.add(background);
          }
        }
      }, {
        key: "setBrandBackground",
        value: function setBrandBackground(background) {
          this.brandBackgroundColor = background;
          document.querySelector('.pcoded-navbar').classList.remove('brand-default');
          document.querySelector('.pcoded-navbar').classList.remove('brand-blue');
          document.querySelector('.pcoded-navbar').classList.remove('brand-red');
          document.querySelector('.pcoded-navbar').classList.remove('brand-purple');
          document.querySelector('.pcoded-navbar').classList.remove('brand-lightblue');
          document.querySelector('.pcoded-navbar').classList.remove('brand-dark');
          document.querySelector('.pcoded-navbar').classList.add(background);
        }
      }, {
        key: "setBackgroundImage",
        value: function setBackgroundImage(image) {
          document.querySelector('.pcoded-navbar').classList.remove('navbar-image-1');
          document.querySelector('.pcoded-navbar').classList.remove('navbar-image-2');
          document.querySelector('.pcoded-navbar').classList.remove('navbar-image-3');
          document.querySelector('.pcoded-navbar').classList.remove('navbar-image-4');
          document.querySelector('.pcoded-navbar').classList.remove('navbar-image-5');

          if (image) {
            this.navBackgorundImage = image;
            document.querySelector('.pcoded-navbar').classList.add(image);
          }
        }
      }, {
        key: "setMenuDropdownIcon",
        value: function setMenuDropdownIcon(icon) {
          document.querySelector('.pcoded-navbar').classList.remove('drp-icon-style1');
          document.querySelector('.pcoded-navbar').classList.remove('drp-icon-style2');
          document.querySelector('.pcoded-navbar').classList.remove('drp-icon-style3');

          if (icon !== 'style1') {
            document.querySelector('.pcoded-navbar').classList.add('drp-icon-' + icon);
          }
        }
      }, {
        key: "setMenuListIcon",
        value: function setMenuListIcon(icon) {
          document.querySelector('.pcoded-navbar').classList.remove('menu-item-icon-style1');
          document.querySelector('.pcoded-navbar').classList.remove('menu-item-icon-style2');
          document.querySelector('.pcoded-navbar').classList.remove('menu-item-icon-style3');
          document.querySelector('.pcoded-navbar').classList.remove('menu-item-icon-style4');
          document.querySelector('.pcoded-navbar').classList.remove('menu-item-icon-style5');
          document.querySelector('.pcoded-navbar').classList.remove('menu-item-icon-style6');

          if (icon !== 'style1') {
            document.querySelector('.pcoded-navbar').classList.add('menu-item-icon-' + icon);
          }
        }
      }, {
        key: "setNavActiveColor",
        value: function setNavActiveColor(style) {
          this.navActiveColor = style;
          document.querySelector('.pcoded-navbar').classList.remove('active-default');
          document.querySelector('.pcoded-navbar').classList.remove('active-blue');
          document.querySelector('.pcoded-navbar').classList.remove('active-red');
          document.querySelector('.pcoded-navbar').classList.remove('active-purple');
          document.querySelector('.pcoded-navbar').classList.remove('active-lightblue');
          document.querySelector('.pcoded-navbar').classList.remove('active-dark');

          if (style !== 'active-default') {
            document.querySelector('.pcoded-navbar').classList.add(style);
          }
        }
      }, {
        key: "setNavTitleColor",
        value: function setNavTitleColor(style) {
          this.navTitleColor = style;
          document.querySelector('.pcoded-navbar').classList.remove('title-default');
          document.querySelector('.pcoded-navbar').classList.remove('title-blue');
          document.querySelector('.pcoded-navbar').classList.remove('title-red');
          document.querySelector('.pcoded-navbar').classList.remove('title-purple');
          document.querySelector('.pcoded-navbar').classList.remove('title-lightblue');
          document.querySelector('.pcoded-navbar').classList.remove('title-dark');

          if (style !== 'title-default') {
            document.querySelector('.pcoded-navbar').classList.add(style);
          }
        }
      }]);

      return ConfigurationComponent;
    }();

    ConfigurationComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ConfigurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-configuration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./configuration.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/configuration/configuration.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./configuration.component.scss */
      "./src/app/theme/layout/admin/configuration/configuration.component.scss")).default]
    })], ConfigurationComponent);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-bar.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-bar.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminNavBarNavBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts ***!
    \*****************************************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppThemeLayoutAdminNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
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


    var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../app-config */
    "./src/app/app-config.ts");

    var NavBarComponent =
    /*#__PURE__*/
    function () {
      function NavBarComponent() {
        _classCallCheck(this, NavBarComponent);

        this.onNavCollapsedMob = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dattaConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["DattaConfig"].config;
        this.navCollapsedMob = false;
        this.headerStyle = '';
        this.menuClass = false;
        this.collapseStyle = 'none';
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleMobOption",
        value: function toggleMobOption() {
          this.menuClass = !this.menuClass;
          this.headerStyle = this.menuClass ? 'none' : '';
          this.collapseStyle = this.menuClass ? 'block' : 'none';
        }
      }]);

      return NavBarComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NavBarComponent.prototype, "onNavCollapsedMob", void 0);
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-bar.component.scss */
      "./src/app/theme/layout/admin/nav-bar/nav-bar.component.scss")).default]
    })], NavBarComponent);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminNavBarNavLeftNavLeftComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1sZWZ0L25hdi1sZWZ0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts ***!
    \***************************************************************************/

  /*! exports provided: NavLeftComponent */

  /***/
  function srcAppThemeLayoutAdminNavBarNavLeftNavLeftComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavLeftComponent", function () {
      return NavLeftComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavLeftComponent =
    /*#__PURE__*/
    function () {
      function NavLeftComponent() {
        _classCallCheck(this, NavLeftComponent);
      }

      _createClass(NavLeftComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavLeftComponent;
    }();

    NavLeftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-left',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-left.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-left.component.scss */
      "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.scss")).default]
    })], NavLeftComponent);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminNavBarNavLeftNavSearchNavSearchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1sZWZ0L25hdi1zZWFyY2gvbmF2LXNlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: NavSearchComponent */

  /***/
  function srcAppThemeLayoutAdminNavBarNavLeftNavSearchNavSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavSearchComponent", function () {
      return NavSearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavSearchComponent =
    /*#__PURE__*/
    function () {
      function NavSearchComponent() {
        _classCallCheck(this, NavSearchComponent);

        this.searchWidth = 0;
      }

      _createClass(NavSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "searchOn",
        value: function searchOn() {
          var _this5 = this;

          document.querySelector('#main-search').classList.add('open');
          this.searchInterval = setInterval(function () {
            if (_this5.searchWidth >= 170) {
              clearInterval(_this5.searchInterval);
              return false;
            }

            _this5.searchWidth = _this5.searchWidth + 30;
            _this5.searchWidthString = _this5.searchWidth + 'px';
          }, 35);
        }
      }, {
        key: "searchOff",
        value: function searchOff() {
          var _this6 = this;

          this.searchInterval = setInterval(function () {
            if (_this6.searchWidth <= 0) {
              document.querySelector('#main-search').classList.remove('open');
              clearInterval(_this6.searchInterval);
              return false;
            }

            _this6.searchWidth = _this6.searchWidth - 30;
            _this6.searchWidthString = _this6.searchWidth + 'px';
          }, 35);
        }
      }]);

      return NavSearchComponent;
    }();

    NavSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-search.component.scss */
      "./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.scss")).default]
    })], NavSearchComponent);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-right/chat-msg/chat-msg.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-right/chat-msg/chat-msg.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminNavBarNavRightChatMsgChatMsgComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1yaWdodC9jaGF0LW1zZy9jaGF0LW1zZy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-right/chat-msg/chat-msg.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-right/chat-msg/chat-msg.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ChatMsgComponent */

  /***/
  function srcAppThemeLayoutAdminNavBarNavRightChatMsgChatMsgComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatMsgComponent", function () {
      return ChatMsgComponent;
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


    var _fack_db_friends_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../fack-db/friends-list */
    "./src/app/fack-db/friends-list.ts");
    /* harmony import */


    var _fack_db_user_chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../fack-db/user-chat */
    "./src/app/fack-db/user-chat.ts");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");

    var ChatMsgComponent =
    /*#__PURE__*/
    function () {
      function ChatMsgComponent(rend) {
        _classCallCheck(this, ChatMsgComponent);

        this.rend = rend;
        this.onChatToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newReplay = '';
      }

      _createClass(ChatMsgComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.friendsList = _fack_db_friends_list__WEBPACK_IMPORTED_MODULE_2__["FriendsList"].friends;
          this.userChat = _fack_db_user_chat__WEBPACK_IMPORTED_MODULE_3__["UserChat"].chat;
          this.chatMessage = findObjectByKeyValue(this.friendsList, 'id', this.friendId);

          if (this.chatMessage) {
            var message = findObjectByKeyValue(this.userChat, 'friend_id', this.friendId);

            if (message) {
              this.chatMessage['chat'] = message['messages'];
            }
          }
        }
      }, {
        key: "sentMsg",
        value: function sentMsg(flag) {
          var _this7 = this;

          if (this.message === '' || this.message === undefined) {
            this.message_error = true;
          } else {
            if (flag === 1) {
              this.message_error = false;
            } else {
              this.message_error = false;
              var temp_replay = this.message;
              var html_send;
              html_send = '<div class="media chat-messages">' + '<div class="media-body chat-menu-reply">' + '<div class="">' + '<p class="chat-cont">' + this.message + '</p>' + '</div>' + '<p class="chat-time">now</p>' + '</div>' + '</div>';
              this.newReplay = this.newReplay + html_send;
              this.message = '';
              setTimeout(function () {
                _this7.componentRef.directiveRef.scrollToBottom();
              }, 100);
              this.friendWriting = true;
              setTimeout(function () {
                _this7.friendWriting = false;
                var html_replay;
                html_replay = '<div class="media chat-messages">' + '<a class="media-left photo-table" href="javascript:">' + '<img class="media-object img-radius img-radius m-t-5" src="' + _this7.chatMessage.photo + '" alt="' + _this7.chatMessage.name + '">' + '</a>' + '<div class="media-body chat-menu-content">' + '<div class="">' + '<p class="chat-cont">hello superior personality you write</p>' + '<p class="chat-cont">' + temp_replay + '</p>' + '</div>' + '<p class="chat-time">now</p>' + '</div>' + '</div>';
                _this7.newReplay = _this7.newReplay + html_replay;
                setTimeout(function () {
                  _this7.componentRef.directiveRef.scrollToBottom();
                }, 100);
              }, 3000);
            }
          }
        }
      }]);

      return ChatMsgComponent;
    }();

    ChatMsgComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChatMsgComponent.prototype, "friendId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ChatMsgComponent.prototype, "onChatToggle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('newChat', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      static: false
    })], ChatMsgComponent.prototype, "newChat", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarComponent"], {
      static: false
    })], ChatMsgComponent.prototype, "componentRef", void 0);
    ChatMsgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-msg',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-msg.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/chat-msg/chat-msg.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-msg.component.scss */
      "./src/app/theme/layout/admin/nav-bar/nav-right/chat-msg/chat-msg.component.scss")).default]
    })], ChatMsgComponent);

    function findObjectByKeyValue(array, key, value) {
      for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
          return array[i];
        }
      }

      return false;
    }
    /***/

  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/chat-user-list.component.scss":
  /*!***************************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/chat-user-list.component.scss ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminNavBarNavRightChatUserListChatUserListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1yaWdodC9jaGF0LXVzZXItbGlzdC9jaGF0LXVzZXItbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/chat-user-list.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/chat-user-list.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: ChatUserListComponent */

  /***/
  function srcAppThemeLayoutAdminNavBarNavRightChatUserListChatUserListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatUserListComponent", function () {
      return ChatUserListComponent;
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


    var _fack_db_friends_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../fack-db/friends-list */
    "./src/app/fack-db/friends-list.ts");

    var ChatUserListComponent =
    /*#__PURE__*/
    function () {
      function ChatUserListComponent() {
        _classCallCheck(this, ChatUserListComponent);

        this.onChatCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChatToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.friendsList = _fack_db_friends_list__WEBPACK_IMPORTED_MODULE_2__["FriendsList"].friends;
      }

      _createClass(ChatUserListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onChatOn",
        value: function onChatOn(friend_id) {
          this.onChatToggle.emit(friend_id);
        }
      }]);

      return ChatUserListComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ChatUserListComponent.prototype, "onChatCollapse", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ChatUserListComponent.prototype, "onChatToggle", void 0);
    ChatUserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-user-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-user-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/chat-user-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-user-list.component.scss */
      "./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/chat-user-list.component.scss")).default]
    })], ChatUserListComponent);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/friend/friend.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/friend/friend.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminNavBarNavRightChatUserListFriendFriendComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1yaWdodC9jaGF0LXVzZXItbGlzdC9mcmllbmQvZnJpZW5kLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/friend/friend.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/friend/friend.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: FriendComponent */

  /***/
  function srcAppThemeLayoutAdminNavBarNavRightChatUserListFriendFriendComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendComponent", function () {
      return FriendComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FriendComponent =
    /*#__PURE__*/
    function () {
      function FriendComponent() {
        _classCallCheck(this, FriendComponent);

        this.onChatOn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(FriendComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "innerChatToggle",
        value: function innerChatToggle(id) {
          this.onChatOn.emit();
        }
      }]);

      return FriendComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FriendComponent.prototype, "friends", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], FriendComponent.prototype, "onChatOn", void 0);
    FriendComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-friend',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./friend.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/friend/friend.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./friend.component.scss */
      "./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/friend/friend.component.scss")).default]
    })], FriendComponent);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminNavBarNavRightNavRightComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1yaWdodC9uYXYtcmlnaHQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: NavRightComponent */

  /***/
  function srcAppThemeLayoutAdminNavBarNavRightNavRightComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavRightComponent", function () {
      return NavRightComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../app-config */
    "./src/app/app-config.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var NavRightComponent =
    /*#__PURE__*/
    function () {
      function NavRightComponent(config, auth, router) {
        var _this8 = this;

        _classCallCheck(this, NavRightComponent);

        this.auth = auth;
        this.router = router;

        this.adminProfile = function () {
          _this8.router.navigateByUrl("admin/profile");
        };

        config.placement = 'bottom-right';
        this.visibleUserList = false;
        this.chatMessage = false;
        this.dattaConfig = _app_config__WEBPACK_IMPORTED_MODULE_4__["DattaConfig"].config;
      }

      _createClass(NavRightComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var admin = JSON.parse(localStorage.getItem('userInfo'));
          console.log(admin);
          this.adminName = admin['name'];
        }
      }, {
        key: "onChatToggle",
        value: function onChatToggle(friend_id) {
          this.friendId = friend_id;
          this.chatMessage = !this.chatMessage;
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (document.querySelector('body').classList.contains('datta-rtl')) {
            this.dattaConfig['rtl-layout'] = true;
          } else {
            this.dattaConfig['rtl-layout'] = false;
          }
        }
      }, {
        key: "doLogout",
        value: function doLogout() {
          this.auth.logout();
        }
      }]);

      return NavRightComponent;
    }();

    NavRightComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    NavRightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-right',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-right.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.html")).default,
      providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"]],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('slideInOutLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'translateX(100%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'translateX(0%)'
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'translateX(100%)'
      }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('slideInOutRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'translateX(-100%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'translateX(0%)'
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'translateX(-100%)'
      }))])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-right.component.scss */
      "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.scss")).default]
    })], NavRightComponent);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.scss":
  /*!****************************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.scss ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminNavigationNavContentNavCollapseNavCollapseComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1jb2xsYXBzZS9uYXYtY29sbGFwc2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: NavCollapseComponent */

  /***/
  function srcAppThemeLayoutAdminNavigationNavContentNavCollapseNavCollapseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavCollapseComponent", function () {
      return NavCollapseComponent;
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


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../app-config */
    "./src/app/app-config.ts");

    var NavCollapseComponent =
    /*#__PURE__*/
    function () {
      function NavCollapseComponent() {
        _classCallCheck(this, NavCollapseComponent);

        this.visible = false;
        this.dattaConfig = _app_config__WEBPACK_IMPORTED_MODULE_3__["DattaConfig"].config;
        this.themeLayout = this.dattaConfig['layout'];
      }

      _createClass(NavCollapseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navCollapse",
        value: function navCollapse(e) {
          this.visible = !this.visible;
          var parent = e.target;

          if (this.themeLayout === 'vertical') {
            parent = parent.parentElement;
          }

          var sections = document.querySelectorAll('.pcoded-hasmenu');

          for (var i = 0; i < sections.length; i++) {
            if (sections[i] !== parent) {
              sections[i].classList.remove('pcoded-trigger');
            }
          }

          var first_parent = parent.parentElement;
          var pre_parent = parent.parentElement.parentElement;

          if (first_parent.classList.contains('pcoded-hasmenu')) {
            do {
              first_parent.classList.add('pcoded-trigger'); // first_parent.parentElement.classList.toggle('pcoded-trigger');

              first_parent = first_parent.parentElement.parentElement.parentElement;
            } while (first_parent.classList.contains('pcoded-hasmenu'));
          } else if (pre_parent.classList.contains('pcoded-submenu')) {
            do {
              pre_parent.parentElement.classList.add('pcoded-trigger');
              pre_parent = pre_parent.parentElement.parentElement.parentElement;
            } while (pre_parent.classList.contains('pcoded-submenu'));
          }

          parent.classList.toggle('pcoded-trigger');
        }
      }]);

      return NavCollapseComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NavCollapseComponent.prototype, "item", void 0);
    NavCollapseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-collapse',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-collapse.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(-100%)',
        display: 'block'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(0%)'
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(-100%)'
      }))])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-collapse.component.scss */
      "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.scss")).default]
    })], NavCollapseComponent);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminNavigationNavContentNavContentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts ***!
    \************************************************************************************/

  /*! exports provided: NavContentComponent */

  /***/
  function srcAppThemeLayoutAdminNavigationNavContentNavContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavContentComponent", function () {
      return NavContentComponent;
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


    var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../navigation */
    "./src/app/theme/layout/admin/navigation/navigation.ts");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../app-config */
    "./src/app/app-config.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var NavContentComponent =
    /*#__PURE__*/
    function () {
      function NavContentComponent(nav, zone, location) {
        _classCallCheck(this, NavContentComponent);

        this.nav = nav;
        this.zone = zone;
        this.location = location;
        this.onNavCollapsedMob = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dattaConfig = _app_config__WEBPACK_IMPORTED_MODULE_3__["DattaConfig"].config;
        this.windowWidth = window.innerWidth;
        this.navigation = this.nav.get();
        this.prevDisabled = 'disabled';
        this.nextDisabled = '';
        this.scrollWidth = 0;
        this.contentWidth = 0;
      }

      _createClass(NavContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.windowWidth < 992) {
            this.dattaConfig['layout'] = 'vertical';
            setTimeout(function () {
              document.querySelector('.pcoded-navbar').classList.add('menupos-static');
              document.querySelector('#nav-ps-datta').style.maxHeight = '100%';
            }, 500);
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.dattaConfig['layout'] === 'horizontal') {
            this.contentWidth = this.navbarContent.nativeElement.clientWidth;
            this.wrapperWidth = this.navbarWrapper.nativeElement.clientWidth;
          }
        }
      }, {
        key: "scrollPlus",
        value: function scrollPlus() {
          this.scrollWidth = this.scrollWidth + (this.wrapperWidth - 80);

          if (this.scrollWidth > this.contentWidth - this.wrapperWidth) {
            this.scrollWidth = this.contentWidth - this.wrapperWidth + 80;
            this.nextDisabled = 'disabled';
          }

          this.prevDisabled = '';
          document.querySelector('#side-nav-horizontal').style.marginLeft = '-' + this.scrollWidth + 'px';
        }
      }, {
        key: "scrollMinus",
        value: function scrollMinus() {
          this.scrollWidth = this.scrollWidth - this.wrapperWidth;

          if (this.scrollWidth < 0) {
            this.scrollWidth = 0;
            this.prevDisabled = 'disabled';
          }

          this.nextDisabled = '';
          document.querySelector('#side-nav-horizontal').style.marginLeft = '-' + this.scrollWidth + 'px';
        }
      }, {
        key: "fireLeave",
        value: function fireLeave() {
          var sections = document.querySelectorAll('.pcoded-hasmenu');

          for (var i = 0; i < sections.length; i++) {
            sections[i].classList.remove('active');
            sections[i].classList.remove('pcoded-trigger');
          }

          var current_url = this.location.path();

          if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
          }

          var link = "a.nav-link[ href='" + current_url + "' ]";
          var ele = document.querySelector(link);

          if (ele !== null && ele !== undefined) {
            var parent = ele.parentElement;
            var up_parent = parent.parentElement.parentElement;
            var last_parent = up_parent.parentElement;

            if (parent.classList.contains('pcoded-hasmenu')) {
              parent.classList.add('active');
            } else if (up_parent.classList.contains('pcoded-hasmenu')) {
              up_parent.classList.add('active');
            } else if (last_parent.classList.contains('pcoded-hasmenu')) {
              last_parent.classList.add('active');
            }
          }
        }
      }, {
        key: "navMob",
        value: function navMob() {
          if (this.windowWidth < 992 && document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
            this.onNavCollapsedMob.emit();
          }
        }
      }, {
        key: "fireOutClick",
        value: function fireOutClick() {
          var current_url = this.location.path();

          if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
          }

          var link = "a.nav-link[ href='" + current_url + "' ]";
          var ele = document.querySelector(link);

          if (ele !== null && ele !== undefined) {
            var parent = ele.parentElement;
            var up_parent = parent.parentElement.parentElement;
            var last_parent = up_parent.parentElement;

            if (parent.classList.contains('pcoded-hasmenu')) {
              if (this.dattaConfig['layout'] === 'vertical') {
                parent.classList.add('pcoded-trigger');
              }

              parent.classList.add('active');
            } else if (up_parent.classList.contains('pcoded-hasmenu')) {
              if (this.dattaConfig['layout'] === 'vertical') {
                up_parent.classList.add('pcoded-trigger');
              }

              up_parent.classList.add('active');
            } else if (last_parent.classList.contains('pcoded-hasmenu')) {
              if (this.dattaConfig['layout'] === 'vertical') {
                last_parent.classList.add('pcoded-trigger');
              }

              last_parent.classList.add('active');
            }
          }
        }
      }]);

      return NavContentComponent;
    }();

    NavContentComponent.ctorParameters = function () {
      return [{
        type: _navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NavContentComponent.prototype, "onNavCollapsedMob", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navbarContent', {
      static: false
    })], NavContentComponent.prototype, "navbarContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navbarWrapper', {
      static: false
    })], NavContentComponent.prototype, "navbarWrapper", void 0);
    NavContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-content',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-content.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-content.component.scss */
      "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.scss")).default]
    })], NavContentComponent);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.scss":
  /*!**********************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.scss ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminNavigationNavContentNavGroupNavGroupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1ncm91cC9uYXYtZ3JvdXAuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: NavGroupComponent */

  /***/
  function srcAppThemeLayoutAdminNavigationNavContentNavGroupNavGroupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavGroupComponent", function () {
      return NavGroupComponent;
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


    var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../app-config */
    "./src/app/app-config.ts");

    var NavGroupComponent =
    /*#__PURE__*/
    function () {
      function NavGroupComponent(zone, location) {
        _classCallCheck(this, NavGroupComponent);

        this.zone = zone;
        this.location = location;
        this.dattaConfig = _app_config__WEBPACK_IMPORTED_MODULE_3__["DattaConfig"].config;
      }

      _createClass(NavGroupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // at reload time active and trigger link
          var current_url = this.location.path();

          if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
          }

          var link = "a.nav-link[ href='" + current_url + "' ]";
          var ele = document.querySelector(link);

          if (ele !== null && ele !== undefined) {
            var parent = ele.parentElement;
            var up_parent = parent.parentElement.parentElement;
            var last_parent = up_parent.parentElement;

            if (parent.classList.contains('pcoded-hasmenu')) {
              if (this.dattaConfig['layout'] === 'vertical') {
                parent.classList.add('pcoded-trigger');
              }

              parent.classList.add('active');
            } else if (up_parent.classList.contains('pcoded-hasmenu')) {
              if (this.dattaConfig['layout'] === 'vertical') {
                up_parent.classList.add('pcoded-trigger');
              }

              up_parent.classList.add('active');
            } else if (last_parent.classList.contains('pcoded-hasmenu')) {
              if (this.dattaConfig['layout'] === 'vertical') {
                last_parent.classList.add('pcoded-trigger');
              }

              last_parent.classList.add('active');
            }
          }
        }
      }]);

      return NavGroupComponent;
    }();

    NavGroupComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NavGroupComponent.prototype, "item", void 0);
    NavGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-group',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-group.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-group.component.scss */
      "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.scss")).default]
    })], NavGroupComponent);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminNavigationNavContentNavItemNavItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1pdGVtL25hdi1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: NavItemComponent */

  /***/
  function srcAppThemeLayoutAdminNavigationNavContentNavItemNavItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavItemComponent", function () {
      return NavItemComponent;
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


    var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../app-config */
    "./src/app/app-config.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var NavItemComponent =
    /*#__PURE__*/
    function () {
      function NavItemComponent(location) {
        _classCallCheck(this, NavItemComponent);

        this.location = location;
        this.dattaConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["DattaConfig"].config;
        this.themeLayout = this.dattaConfig['layout'];
      }

      _createClass(NavItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeOtherMenu",
        value: function closeOtherMenu(event) {
          var _this9 = this;

          if (this.dattaConfig['layout'] === 'vertical') {
            var ele = event.target;

            if (ele !== null && ele !== undefined) {
              var parent = ele.parentElement;
              var up_parent = parent.parentElement.parentElement;
              var last_parent = up_parent.parentElement;
              var sections = document.querySelectorAll('.pcoded-hasmenu');

              for (var i = 0; i < sections.length; i++) {
                sections[i].classList.remove('active');
                sections[i].classList.remove('pcoded-trigger');
              }

              if (parent.classList.contains('pcoded-hasmenu')) {
                parent.classList.add('pcoded-trigger');
                parent.classList.add('active');
              } else if (up_parent.classList.contains('pcoded-hasmenu')) {
                up_parent.classList.add('pcoded-trigger');
                up_parent.classList.add('active');
              } else if (last_parent.classList.contains('pcoded-hasmenu')) {
                last_parent.classList.add('pcoded-trigger');
                last_parent.classList.add('active');
              }
            }

            if (document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
              document.querySelector('app-navigation.pcoded-navbar').classList.remove('mob-open');
            }
          } else {
            setTimeout(function () {
              var sections = document.querySelectorAll('.pcoded-hasmenu');

              for (var _i = 0; _i < sections.length; _i++) {
                sections[_i].classList.remove('active');

                sections[_i].classList.remove('pcoded-trigger');
              }

              var current_url = _this9.location.path();

              if (_this9.location['_baseHref']) {
                current_url = _this9.location['_baseHref'] + _this9.location.path();
              }

              var link = "a.nav-link[ href='" + current_url + "' ]";
              var ele = document.querySelector(link);

              if (ele !== null && ele !== undefined) {
                var _parent = ele.parentElement;
                var _up_parent = _parent.parentElement.parentElement;
                var _last_parent = _up_parent.parentElement;

                if (_parent.classList.contains('pcoded-hasmenu')) {
                  _parent.classList.add('active');
                } else if (_up_parent.classList.contains('pcoded-hasmenu')) {
                  _up_parent.classList.add('active');
                } else if (_last_parent.classList.contains('pcoded-hasmenu')) {
                  _last_parent.classList.add('active');
                }
              }
            }, 500);
          }
        }
      }]);

      return NavItemComponent;
    }();

    NavItemComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NavItemComponent.prototype, "item", void 0);
    NavItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-item.component.scss */
      "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.scss")).default]
    })], NavItemComponent);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/navigation/nav-logo/nav-logo.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/nav-logo/nav-logo.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminNavigationNavLogoNavLogoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1sb2dvL25hdi1sb2dvLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/navigation/nav-logo/nav-logo.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/nav-logo/nav-logo.component.ts ***!
    \******************************************************************************/

  /*! exports provided: NavLogoComponent */

  /***/
  function srcAppThemeLayoutAdminNavigationNavLogoNavLogoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavLogoComponent", function () {
      return NavLogoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavLogoComponent =
    /*#__PURE__*/
    function () {
      function NavLogoComponent() {
        _classCallCheck(this, NavLogoComponent);

        this.onNavCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.windowWidth = window.innerWidth;
      }

      _createClass(NavLogoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navCollapse",
        value: function navCollapse() {
          if (this.windowWidth >= 992) {
            this.navCollapsed = !this.navCollapsed;
            this.onNavCollapse.emit();
          }
        }
      }]);

      return NavLogoComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NavLogoComponent.prototype, "navCollapsed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NavLogoComponent.prototype, "onNavCollapse", void 0);
    NavLogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-logo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-logo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-logo/nav-logo.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-logo.component.scss */
      "./src/app/theme/layout/admin/navigation/nav-logo/nav-logo.component.scss")).default]
    })], NavLogoComponent);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/navigation/navigation.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/navigation.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminNavigationNavigationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/navigation/navigation.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/navigation.component.ts ***!
    \***********************************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppThemeLayoutAdminNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
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


    var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../app-config */
    "./src/app/app-config.ts");

    var NavigationComponent =
    /*#__PURE__*/
    function () {
      function NavigationComponent() {
        _classCallCheck(this, NavigationComponent);

        this.onNavCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNavCollapsedMob = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dattaConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["DattaConfig"].config;
        this.windowWidth = window.innerWidth;
        this.navCollapsed = this.windowWidth >= 992 ? this.dattaConfig['collapse-menu'] : false;
        this.navCollapsedMob = false;
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navCollapse",
        value: function navCollapse() {
          if (this.windowWidth >= 992) {
            this.navCollapsed = !this.navCollapsed;
            this.onNavCollapse.emit();
          }
        }
      }, {
        key: "navCollapseMob",
        value: function navCollapseMob() {
          if (this.windowWidth < 992) {
            this.onNavCollapsedMob.emit();
          }
        }
      }]);

      return NavigationComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NavigationComponent.prototype, "onNavCollapse", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NavigationComponent.prototype, "onNavCollapsedMob", void 0);
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navigation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/navigation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigation.component.scss */
      "./src/app/theme/layout/admin/navigation/navigation.component.scss")).default]
    })], NavigationComponent);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/navigation/navigation.ts":
  /*!*************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/navigation.ts ***!
    \*************************************************************/

  /*! exports provided: NavigationItem */

  /***/
  function srcAppThemeLayoutAdminNavigationNavigationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationItem", function () {
      return NavigationItem;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var user = JSON.parse(localStorage.getItem('userInfo'));
    console.log("user", user);
    var NavigationItems = [];
    NavigationItems = [{
      id: 'navigation',
      hidden: user && user.role === 1 ? false : true,
      title: 'Navigation',
      type: 'group',
      icon: 'icon-navigation',
      children: [{
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard/default',
        icon: 'feather icon-home',
        classes: 'nav-item'
      }]
    }, {
      id: 'users',
      hidden: user && user.role === 1 ? false : true,
      title: 'Users',
      type: 'collapse',
      icon: 'feather icon-users',
      children: [{
        id: 'add-user',
        title: 'Add User',
        type: 'item',
        icon: 'feather icon-user',
        url: '/admin/user/add',
        classes: 'nav-item'
      }, {
        id: 'users-list',
        title: 'Users List',
        type: 'item',
        icon: 'feather icon-users',
        url: '/admin/user/all',
        classes: 'nav-item'
      }, {
        id: 'users-disabled',
        title: 'Disabled Users',
        type: 'item',
        icon: 'feather icon-users',
        url: '/admin/user/disabled',
        classes: 'nav-item'
      }]
    }, {
      id: 'dispensaries',
      hidden: user && user.role === 1 ? false : true,
      title: 'Dispensaries',
      type: 'collapse',
      icon: 'feather icon-help-circle',
      children: [{
        id: 'add-dispensary',
        title: 'Add Dispensary',
        type: 'item',
        url: '/admin/dispensary/add',
        icon: 'feather icon-file-text',
        classes: 'nav-item'
      }, {
        id: 'dispensaries-list',
        title: 'Dispensaries List',
        type: 'item',
        url: '/admin/dispensary/all',
        icon: 'feather icon-server',
        classes: 'nav-item'
      }, {
        id: 'dispensaries-disabled',
        title: 'Disabled Dispensaries',
        type: 'item',
        url: '/admin/dispensary/disabled',
        icon: 'feather icon-server',
        classes: 'nav-item'
      }]
    }, {
      id: 'questions',
      hidden: user && user.role === 1 ? false : true,
      title: 'Questions',
      type: 'collapse',
      icon: 'feather icon-box',
      children: [{
        id: 'add-questions',
        title: 'Add Questions',
        type: 'item',
        url: '/admin/quiz/add',
        icon: 'feather icon-file-text',
        classes: 'nav-item'
      }, {
        id: 'questions-list',
        title: 'Group Questions List',
        type: 'item',
        url: '/admin/quiz/all',
        icon: 'feather icon-server',
        classes: 'nav-item'
      }, {
        id: 'all-questions',
        title: 'All Questions',
        type: 'item',
        url: '/admin/quiz/questions',
        icon: 'feather icon-file',
        classes: 'nav-item'
      }]
    }, // {
    //   id: 'payment-methods',
    //   hidden: (user && user.role === 1 ? false: true),
    //   title: 'Payment Methods',
    //   type: 'collapse',
    //   icon: 'feather icon-shopping-cart',
    //   children: [
    //     {
    //       id: 'account-info',
    //       title: 'Account Info',
    //       type: 'item',
    //       url: '/admin/payment/info',
    //       icon: 'feather icon-file-text',
    //       classes: 'nav-item'
    //     },
    //     {
    //       id: 'all-transactions',
    //       title: 'Transactions List',
    //       type: 'item',
    //       url: '/admin/payment/all',
    //       icon: 'feather icon-server',
    //       classes: 'nav-item'
    //     }
    //   ]
    // },
    {
      id: 'dispensaries',
      hidden: user && user.role === 2 ? false : true,
      title: 'Dispensaries',
      type: 'collapse',
      icon: 'feather icon-help-circle',
      children: [{
        id: 'add-dispensary',
        title: 'Add Dispensary',
        type: 'item',
        url: '/admin/dispensary/add',
        icon: 'feather icon-file-text',
        classes: 'nav-item'
      }, // {
      //   id: 'dispensaries-list',
      //   title: 'Dispensary Profile',
      //   type: 'item',
      //   url: '/admin/dispensary/profile',
      //   icon: 'feather icon-server',
      //   classes: 'nav-item'
      // },
      {
        id: 'dispensaries-list',
        title: 'Dispensaries List',
        type: 'item',
        url: '/admin/dispensary/all',
        icon: 'feather icon-server',
        classes: 'nav-item'
      }, {
        id: 'dispensaries-disabled',
        title: 'Disabled Dispensaries',
        type: 'item',
        url: '/admin/dispensary/disabled',
        icon: 'feather icon-server',
        classes: 'nav-item'
      }]
    }, {
      id: 'vouchers',
      hidden: user && user.role === 1 ? false : true,
      title: 'Vouchers',
      type: 'item',
      url: '/admin/vouchers/all',
      icon: 'feather icon-anchor',
      classes: 'nav-item'
    }, {
      id: 'logout',
      title: 'Logout',
      type: 'item',
      url: '/auth/logout',
      icon: 'feather icon-log-out',
      classes: 'nav-item'
    }];

    var NavigationItem =
    /*#__PURE__*/
    function () {
      function NavigationItem() {
        _classCallCheck(this, NavigationItem);
      }

      _createClass(NavigationItem, [{
        key: "get",
        value: function get() {
          return NavigationItems;
        }
      }]);

      return NavigationItem;
    }();

    NavigationItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], NavigationItem);
    /***/
  },

  /***/
  "./src/app/theme/layout/auth/auth.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/theme/layout/auth/auth.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAuthAuthComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/theme/layout/auth/auth.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/theme/layout/auth/auth.component.ts ***!
    \*****************************************************/

  /*! exports provided: AuthComponent */

  /***/
  function srcAppThemeLayoutAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
      return AuthComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthComponent =
    /*#__PURE__*/
    function () {
      function AuthComponent() {
        _classCallCheck(this, AuthComponent);
      }

      _createClass(AuthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AuthComponent;
    }();

    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/auth/auth.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auth.component.scss */
      "./src/app/theme/layout/auth/auth.component.scss")).default]
    })], AuthComponent);
    /***/
  },

  /***/
  "./src/app/theme/shared/components/breadcrumb/breadcrumb.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/theme/shared/components/breadcrumb/breadcrumb.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeSharedComponentsBreadcrumbBreadcrumbComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts ***!
    \****************************************************************************/

  /*! exports provided: BreadcrumbComponent */

  /***/
  function srcAppThemeSharedComponentsBreadcrumbBreadcrumbComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
      return BreadcrumbComponent;
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


    var _layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../layout/admin/navigation/navigation */
    "./src/app/theme/layout/admin/navigation/navigation.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var BreadcrumbComponent =
    /*#__PURE__*/
    function () {
      function BreadcrumbComponent(_router, nav, titleService) {
        _classCallCheck(this, BreadcrumbComponent);

        this._router = _router;
        this.nav = nav;
        this.titleService = titleService;
        this.breadcrumbList = [];
        this.navigation = this.nav.get();
        this.setBreadcrumb();
        this.type = 'theme2';
      }

      _createClass(BreadcrumbComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setBreadcrumb",
        value: function setBreadcrumb() {
          var _this10 = this;

          var routerUrl;

          this._router.events.subscribe(function (router) {
            routerUrl = router.urlAfterRedirects;

            if (routerUrl && typeof routerUrl === 'string') {
              _this10.breadcrumbList.length = 0;
              var activeLink = router.url;

              _this10.filterNavigation(activeLink);
            }
          });
        }
      }, {
        key: "filterNavigation",
        value: function filterNavigation(activeLink) {
          var result;
          var title = 'Welcome';
          this.navigation.forEach(function (a) {
            if (a.type === 'item' && 'url' in a && a.url === activeLink) {
              result = [{
                'url': 'url' in a ? a.url : false,
                'title': a.title,
                'breadcrumbs': 'breadcrumbs' in a ? a.breadcrumbs : true,
                'type': a.type
              }];
              title = a.title;
            } else {
              if (a.type === 'group' && 'children' in a) {
                a.children.forEach(function (b) {
                  if (b.type === 'item' && 'url' in b && b.url === activeLink) {
                    result = [
                    /*{
                    'url': ('url' in a) ? a.url : false,
                    'title': a.title,
                    'breadcrumbs': ('breadcrumbs' in a) ? a.breadcrumbs : true,
                      'type': a.type
                    },*/
                    {
                      'url': 'url' in b ? b.url : false,
                      'title': b.title,
                      'breadcrumbs': 'breadcrumbs' in b ? b.breadcrumbs : true,
                      'type': b.type
                    }];
                    title = b.title;
                  } else {
                    if (b.type === 'collapse' && 'children' in b) {
                      b.children.forEach(function (c) {
                        if (c.type === 'item' && 'url' in c && c.url === activeLink) {
                          result = [
                          /*{
                            'url': ('url' in a) ? a.url : false,
                            'title': a.title,
                            'breadcrumbs': ('breadcrumbs' in a) ? a.breadcrumbs : true,
                            'type': a.type
                          },*/
                          {
                            'url': 'url' in b ? b.url : false,
                            'title': b.title,
                            'breadcrumbs': 'breadcrumbs' in b ? b.breadcrumbs : true,
                            'type': b.type
                          }, {
                            'url': 'url' in c ? c.url : false,
                            'title': c.title,
                            'breadcrumbs': 'breadcrumbs' in c ? c.breadcrumbs : true,
                            'type': c.type
                          }];
                          title = c.title;
                        }
                      });
                    }
                  }
                });
              }
            }
          });
          this.navigationList = result;
          this.titleService.setTitle(title + ' | Buds Bank');
        }
      }]);

      return BreadcrumbComponent;
    }();

    BreadcrumbComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BreadcrumbComponent.prototype, "type", void 0);
    BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-breadcrumb',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./breadcrumb.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/breadcrumb/breadcrumb.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./breadcrumb.component.scss */
      "./src/app/theme/shared/components/breadcrumb/breadcrumb.component.scss")).default]
    })], BreadcrumbComponent);
    /***/
  },

  /***/
  "./src/app/theme/shared/components/breadcrumb/breadcrumb.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/theme/shared/components/breadcrumb/breadcrumb.module.ts ***!
    \*************************************************************************/

  /*! exports provided: BreadcrumbModule */

  /***/
  function srcAppThemeSharedComponentsBreadcrumbBreadcrumbModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function () {
      return BreadcrumbModule;
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


    var _breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./breadcrumb.component */
    "./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var BreadcrumbModule = function BreadcrumbModule() {
      _classCallCheck(this, BreadcrumbModule);
    };

    BreadcrumbModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
      declarations: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"]],
      exports: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"]]
    })], BreadcrumbModule);
    /***/
  },

  /***/
  "./src/app/theme/shared/components/card/card.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/theme/shared/components/card/card.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeSharedComponentsCardCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card.full-card {\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  z-index: 99999;\n  border-radius: 0;\n  width: calc(100vw) !important;\n  height: 100vh !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94MjMvRG9jdW1lbnRzL0dpdEh1Yi9kYmMtYnVkc2JhbmstYW5ndWxhci9zcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLHdCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQuZnVsbC1jYXJkIHtcclxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICB0b3A6IDAgIWltcG9ydGFudDtcclxuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICB3aWR0aDogY2FsYygxMDB2dykgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/theme/shared/components/card/card.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/theme/shared/components/card/card.component.ts ***!
    \****************************************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppThemeSharedComponentsCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var css_animator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! css-animator */
    "./node_modules/css-animator/index.js");
    /* harmony import */


    var css_animator__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(css_animator__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var CardComponent =
    /*#__PURE__*/
    function () {
      function CardComponent(animationService, config) {
        _classCallCheck(this, CardComponent);

        config.placement = 'bottom-right';
        this.customHeader = false;
        this.options = true;
        this.hidHeader = false;
        this.cardTitle = 'Card Title';
        this.animator = animationService.builder();
        this.animators = animationService.builder();
        this.animator.useVisibility = true;
        this.fullIcon = 'icon-maximize';
        this.isAnimating = false;
        this.collapsedCard = 'expanded';
        this.collapsedIcon = 'icon-minus';
        this.loadCard = false;
        this.cardRemove = 'open';
      }

      _createClass(CardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.options || this.hidHeader || this.customHeader) {
            this.collapsedCard = 'false';
          }
        }
      }, {
        key: "fullCardToggle",
        value: function fullCardToggle(element, animation, status) {
          var _this11 = this;

          animation = this.cardClass === 'full-card' ? 'zoomOut' : 'zoomIn';
          this.fullIcon = this.cardClass === 'full-card' ? 'icon-maximize' : 'icon-minimize'; // const duration = this.cardClass === 'full-card' ? 300 : 600;

          this.cardClass = this.cardClass === 'full-card' ? this.cardClass : 'full-card';

          if (status) {
            this.animation = animation;
          }

          this.isAnimating = true;
          this.animators.setType(this.animation).setDuration(500).setDirection('alternate').setTimingFunction('cubic-bezier(0.1, -0.6, 0.2, 0)').animate(element).then(function () {
            _this11.isAnimating = false;
          }).catch(function (e) {
            _this11.isAnimating = false;
          });
          setTimeout(function () {
            _this11.cardClass = animation === 'zoomOut' ? '' : _this11.cardClass;

            if (_this11.cardClass === 'full-card') {
              document.querySelector('body').style.overflow = 'hidden';
            } else {
              document.querySelector('body').removeAttribute('style');
            }
          }, 500);
        }
      }, {
        key: "collapsedCardToggle",
        value: function collapsedCardToggle(event) {
          this.collapsedCard = this.collapsedCard === 'collapsed' ? 'expanded' : 'collapsed';
          this.collapsedIcon = this.collapsedCard === 'collapsed' ? 'icon-plus' : 'icon-minus';
        }
      }, {
        key: "cardRefresh",
        value: function cardRefresh() {
          var _this12 = this;

          this.loadCard = true;
          this.cardClass = 'card-load';
          setTimeout(function () {
            _this12.loadCard = false;
            _this12.cardClass = 'expanded';
          }, 3000);
        }
      }, {
        key: "cardRemoveAction",
        value: function cardRemoveAction() {
          this.cardRemove = this.cardRemove === 'closed' ? 'open' : 'closed';
        }
      }]);

      return CardComponent;
    }();

    CardComponent.ctorParameters = function () {
      return [{
        type: css_animator__WEBPACK_IMPORTED_MODULE_3__["AnimationService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "cardTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "cardClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "blockClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "headerClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "hidHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "customHeader", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/card/card.component.html")).default,
      providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"]],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('collapsedCard', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        overflow: 'hidden',
        height: '0px'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        overflow: 'hidden',
        height: _angular_animations__WEBPACK_IMPORTED_MODULE_4__["AUTO_STYLE"]
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('collapsed <=> expanded', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms ease-in-out')])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('cardRemove', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        opacity: 0,
        display: 'none'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('open <=> closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms'))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card.component.scss */
      "./src/app/theme/shared/components/card/card.component.scss")).default]
    })], CardComponent);
    /***/
  },

  /***/
  "./src/app/theme/shared/components/card/card.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/theme/shared/components/card/card.module.ts ***!
    \*************************************************************/

  /*! exports provided: CardModule */

  /***/
  function srcAppThemeSharedComponentsCardCardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardModule", function () {
      return CardModule;
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


    var _card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./card.component */
    "./src/app/theme/shared/components/card/card.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var css_animator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! css-animator */
    "./node_modules/css-animator/index.js");
    /* harmony import */


    var css_animator__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(css_animator__WEBPACK_IMPORTED_MODULE_5__);

    var CardModule = function CardModule() {
      _classCallCheck(this, CardModule);
    };

    CardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"], css_animator__WEBPACK_IMPORTED_MODULE_5__["AnimatorModule"]],
      declarations: [_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]],
      exports: [_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]],
      providers: [css_animator__WEBPACK_IMPORTED_MODULE_5__["AnimationService"]]
    })], CardModule);
    /***/
  },

  /***/
  "./src/app/theme/shared/components/index.ts":
  /*!**************************************************!*\
    !*** ./src/app/theme/shared/components/index.ts ***!
    \**************************************************/

  /*! exports provided: CardModule, BreadcrumbModule */

  /***/
  function srcAppThemeSharedComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _card_card_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./card/card.module */
    "./src/app/theme/shared/components/card/card.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CardModule", function () {
      return _card_card_module__WEBPACK_IMPORTED_MODULE_1__["CardModule"];
    });
    /* harmony import */


    var _breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./breadcrumb/breadcrumb.module */
    "./src/app/theme/shared/components/breadcrumb/breadcrumb.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function () {
      return _breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbModule"];
    });
    /***/

  },

  /***/
  "./src/app/theme/shared/full-screen/toggle-full-screen.ts":
  /*!****************************************************************!*\
    !*** ./src/app/theme/shared/full-screen/toggle-full-screen.ts ***!
    \****************************************************************/

  /*! exports provided: ToggleFullScreenDirective */

  /***/
  function srcAppThemeSharedFullScreenToggleFullScreenTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToggleFullScreenDirective", function () {
      return ToggleFullScreenDirective;
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


    var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! screenfull */
    "./node_modules/screenfull/dist/screenfull.js");
    /* harmony import */


    var screenfull__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);

    var ToggleFullScreenDirective =
    /*#__PURE__*/
    function () {
      function ToggleFullScreenDirective(elements) {
        _classCallCheck(this, ToggleFullScreenDirective);

        this.elements = elements;
      }

      _createClass(ToggleFullScreenDirective, [{
        key: "onClick",
        value: function onClick() {
          if (screenfull__WEBPACK_IMPORTED_MODULE_2__["enabled"]) {
            this.elements.nativeElement.querySelector('.feather').classList.toggle('icon-maximize');
            this.elements.nativeElement.querySelector('.feather').classList.toggle('icon-minimize');
            screenfull__WEBPACK_IMPORTED_MODULE_2__["toggle"]();
          }
        }
      }]);

      return ToggleFullScreenDirective;
    }();

    ToggleFullScreenDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')], ToggleFullScreenDirective.prototype, "onClick", null);
    ToggleFullScreenDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appToggleFullScreen]'
    })], ToggleFullScreenDirective);
    /***/
  },

  /***/
  "./src/app/theme/shared/shared.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/theme/shared/shared.module.ts ***!
    \***********************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppThemeSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components */
    "./src/app/theme/shared/components/index.ts");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var ng_click_outside__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-click-outside */
    "./node_modules/ng-click-outside/lib/index.js");
    /* harmony import */


    var ng_click_outside__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_6__);

    var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
      suppressScrollX: true
    };

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _components__WEBPACK_IMPORTED_MODULE_4__["CardModule"], _components__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_6__["ClickOutsideModule"]],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _components__WEBPACK_IMPORTED_MODULE_4__["CardModule"], _components__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_6__["ClickOutsideModule"]],
      declarations: [],
      providers: [{
        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PERFECT_SCROLLBAR_CONFIG"],
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://localhost:3300/admin',
      authorizationSecret: 'YnVkc0Jhbms6YnVkc0JhbmswMDc=',
      baseUrl: 'http://localhost:3300'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/x23/Documents/GitHub/dbc-budsbank-angular/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map