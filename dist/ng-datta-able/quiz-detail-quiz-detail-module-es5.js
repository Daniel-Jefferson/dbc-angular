function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quiz-detail-quiz-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/quizes/quiz-detail/quiz-detail.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/quizes/quiz-detail/quiz-detail.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoQuizesQuizDetailQuizDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n      <app-card cardTitle=\"Question Detail\" [options]=\"false\">\n      \t<nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard/default']\"><i class=\"feather icon-home\"></i></a></li>\n          <li class=\"breadcrumb-item\"><a [routerLink]=\"['/admin/quiz/questions']\">All Questions</a></li>\n          <li class=\"breadcrumb-item active\" aria-current=\"page\">Question Details</li>\n        </ol>\n      </nav>\n        <div class=\"table-responsive\">\n          <h4>{{ this.questionData.question_name }}</h4>\n          <div>\n          \t<ul class=\"question_options\">\n          \t\t<li *ngFor=\"let option of this.questionData.options\" [ngClass]=\"(option.isAnswer=='true')?'true':'fasle'\">{{ option.option_value }}</li>\n          \t</ul>\n          </div>\n        </div>\n      </app-card>\n    </div>\n  </div>\n  ";
    /***/
  },

  /***/
  "./src/app/demo/quizes/quiz-detail/quiz-detail-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/demo/quizes/quiz-detail/quiz-detail-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: QuizDetailRoutingModule */

  /***/
  function srcAppDemoQuizesQuizDetailQuizDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizDetailRoutingModule", function () {
      return QuizDetailRoutingModule;
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


    var _quiz_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./quiz-detail.component */
    "./src/app/demo/quizes/quiz-detail/quiz-detail.component.ts");

    var routes = [{
      path: '',
      component: _quiz_detail_component__WEBPACK_IMPORTED_MODULE_3__["QuizDetailComponent"]
    }];

    var QuizDetailRoutingModule = function QuizDetailRoutingModule() {
      _classCallCheck(this, QuizDetailRoutingModule);
    };

    QuizDetailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], QuizDetailRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/quizes/quiz-detail/quiz-detail.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/demo/quizes/quiz-detail/quiz-detail.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDemoQuizesQuizDetailQuizDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".question_options li.true {\n  color: green; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94MjMvRG9jdW1lbnRzL0dpdEh1Yi9kYmMtYnVkc2JhbmstYW5ndWxhci9zcmMvYXBwL2RlbW8vcXVpemVzL3F1aXotZGV0YWlsL3F1aXotZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGVtby9xdWl6ZXMvcXVpei1kZXRhaWwvcXVpei1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVlc3Rpb25fb3B0aW9ucyB7XG5cdGxpLnRydWV7XG5cdFx0Y29sb3I6IGdyZWVuO1xuXHR9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/demo/quizes/quiz-detail/quiz-detail.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/demo/quizes/quiz-detail/quiz-detail.component.ts ***!
    \******************************************************************/

  /*! exports provided: QuizDetailComponent */

  /***/
  function srcAppDemoQuizesQuizDetailQuizDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizDetailComponent", function () {
      return QuizDetailComponent;
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


    var _services_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/quiz/quiz.service */
    "./src/app/services/quiz/quiz.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var QuizDetailComponent =
    /*#__PURE__*/
    function () {
      function QuizDetailComponent(quizService, spinner, currentRoute) {
        _classCallCheck(this, QuizDetailComponent);

        this.quizService = quizService;
        this.spinner = spinner;
        this.currentRoute = currentRoute;
      }

      _createClass(QuizDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.currentRoute.params.subscribe(function (params) {
            _this.quizService.getQuestionsbyID(params.id).then(function (response) {
              //console.log(params.id);
              if (response['status'] === 200) {
                _this.questionData = response['data'];
                console.log(_this.questionData);
              } else {
                console.log(response);
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error', 'Question Not Found', 'error');
              }
            });
          });
        }
      }]);

      return QuizDetailComponent;
    }();

    QuizDetailComponent.ctorParameters = function () {
      return [{
        type: _services_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    QuizDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-quiz-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./quiz-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/quizes/quiz-detail/quiz-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./quiz-detail.component.scss */
      "./src/app/demo/quizes/quiz-detail/quiz-detail.component.scss")).default]
    })], QuizDetailComponent);
    /***/
  },

  /***/
  "./src/app/demo/quizes/quiz-detail/quiz-detail.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/demo/quizes/quiz-detail/quiz-detail.module.ts ***!
    \***************************************************************/

  /*! exports provided: QuizDetailModule */

  /***/
  function srcAppDemoQuizesQuizDetailQuizDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizDetailModule", function () {
      return QuizDetailModule;
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


    var _quiz_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./quiz-detail.component */
    "./src/app/demo/quizes/quiz-detail/quiz-detail.component.ts");
    /* harmony import */


    var _quiz_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./quiz-detail-routing.module */
    "./src/app/demo/quizes/quiz-detail/quiz-detail-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @sweetalert2/ngx-sweetalert2 */
    "./node_modules/@sweetalert2/ngx-sweetalert2/fesm2015/sweetalert2-ngx-sweetalert2.js");
    /* harmony import */


    var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-select-dropdown */
    "./node_modules/ngx-select-dropdown/dist/index.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    var QuizDetailModule = function QuizDetailModule() {
      _classCallCheck(this, QuizDetailModule);
    };

    QuizDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_quiz_detail_component__WEBPACK_IMPORTED_MODULE_3__["QuizDetailComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _quiz_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["QuizDetailRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__["SweetAlert2Module"], ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_8__["SelectDropDownModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"]]
    })], QuizDetailModule);
    /***/
  }
}]);
//# sourceMappingURL=quiz-detail-quiz-detail-module-es5.js.map