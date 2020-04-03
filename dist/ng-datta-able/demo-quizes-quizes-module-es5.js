function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-quizes-quizes-module"], {
  /***/
  "./src/app/demo/quizes/quizes-routing.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/demo/quizes/quizes-routing.module.ts ***!
    \******************************************************/

  /*! exports provided: QuizesRoutingModule */

  /***/
  function srcAppDemoQuizesQuizesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizesRoutingModule", function () {
      return QuizesRoutingModule;
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
        loadChildren: './add-quiz/add-quiz.module#AddQuizModule'
      }, {
        path: 'all',
        loadChildren: './quiz-list/quiz-list.module#QuizListModule'
      }, {
        path: 'questions',
        loadChildren: './quiz-questions/quiz-questions.module#QuizQuestionsModule'
      }, {
        path: ':id',
        loadChildren: './quiz-detail/quiz-detail.module#QuizDetailModule'
      } // {
      //   path: 'disabled',
      //   pathMatch: 'full',
      //   loadChildren: './disabled-users/disabled-users.module#DisabledUsersModule'
      // },
      // {
      //   path: ':id',
      //   loadChildren: './view-user/view-user.module#ViewUserModule'
      // },
      // {
      //   path: 'update/:id',
      //   loadChildren: './update-user/update-user.module#UpdateUserModule'
      // }
      ]
    }];

    var QuizesRoutingModule = function QuizesRoutingModule() {
      _classCallCheck(this, QuizesRoutingModule);
    };

    QuizesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], QuizesRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/quizes/quizes.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/demo/quizes/quizes.module.ts ***!
    \**********************************************/

  /*! exports provided: QuizesModule */

  /***/
  function srcAppDemoQuizesQuizesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizesModule", function () {
      return QuizesModule;
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


    var _quizes_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./quizes-routing.module */
    "./src/app/demo/quizes/quizes-routing.module.ts");

    var QuizesModule = function QuizesModule() {
      _classCallCheck(this, QuizesModule);
    };

    QuizesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _quizes_routing_module__WEBPACK_IMPORTED_MODULE_3__["QuizesRoutingModule"]]
    })], QuizesModule);
    /***/
  }
}]);
//# sourceMappingURL=demo-quizes-quizes-module-es5.js.map