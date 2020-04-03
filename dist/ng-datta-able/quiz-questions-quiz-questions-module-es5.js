function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quiz-questions-quiz-questions-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/quizes/quiz-questions/quiz-questions.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/quizes/quiz-questions/quiz-questions.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoQuizesQuizQuestionsQuizQuestionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n      <app-card cardTitle=\"All Question\" [options]=\"false\">\n        <!-- <div class=\"search-questions\">\n          <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"searchText\" autocomplete=\"off\" placeholder=\"Search by name\">\n          <button>Search</button>\n        </div> -->\n        <div class=\"table-responsive\">\n          <table class=\"table table-hover\">\n            <thead>\n            <tr>\n              <th>Question ID</th>\n              <th>Question Name</th>\n              <th class=\"text-right\">Actions</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let ques of this.allQuestions\">\n              <td>{{ ques.id }}</td>\n              <td>{{ ques.question }}</td>\n              <td class=\"text-right\">\n                <a (click)=\"viewQuestionDetail(ques.id)\"><i class=\"feather icon-eye text-c-green m-r-10\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"View Question\"></i>\n                </a>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n          <div class=\"mt-3 text-right\">\n            <a (click)=\"loadPrevResults()\" class=\"btn btn-primary\" style=\"color: white; padding: 5px;\">Prev</a>\n            <a (click)=\"loadNextResults()\" class=\"btn btn-primary\" style=\"color: white; padding: 5px;\">Next</a>\n          </div>\n        </div>\n      </app-card>\n    </div>\n  </div>\n  ";
    /***/
  },

  /***/
  "./src/app/demo/quizes/quiz-questions/quiz-questions-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/demo/quizes/quiz-questions/quiz-questions-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: QuizQuestionsRoutingModule */

  /***/
  function srcAppDemoQuizesQuizQuestionsQuizQuestionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizQuestionsRoutingModule", function () {
      return QuizQuestionsRoutingModule;
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


    var _quiz_questions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./quiz-questions.component */
    "./src/app/demo/quizes/quiz-questions/quiz-questions.component.ts");

    var routes = [{
      path: '',
      component: _quiz_questions_component__WEBPACK_IMPORTED_MODULE_3__["QuizQuestionsComponent"]
    }];

    var QuizQuestionsRoutingModule = function QuizQuestionsRoutingModule() {
      _classCallCheck(this, QuizQuestionsRoutingModule);
    };

    QuizQuestionsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], QuizQuestionsRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/quizes/quiz-questions/quiz-questions.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/demo/quizes/quiz-questions/quiz-questions.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDemoQuizesQuizQuestionsQuizQuestionsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcXVpemVzL3F1aXotcXVlc3Rpb25zL3F1aXotcXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/demo/quizes/quiz-questions/quiz-questions.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/demo/quizes/quiz-questions/quiz-questions.component.ts ***!
    \************************************************************************/

  /*! exports provided: QuizQuestionsComponent */

  /***/
  function srcAppDemoQuizesQuizQuestionsQuizQuestionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizQuestionsComponent", function () {
      return QuizQuestionsComponent;
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

    var QuizQuestionsComponent =
    /*#__PURE__*/
    function () {
      function QuizQuestionsComponent(quizService, spinner, router) {
        _classCallCheck(this, QuizQuestionsComponent);

        this.quizService = quizService;
        this.spinner = spinner;
        this.router = router;
        this.allQuestions = [];
        this.pageSize = 10;
        this.pageNumber = 0;
      }

      _createClass(QuizQuestionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllQuestions(this.pageNumber, this.pageSize);
        }
      }, {
        key: "getAllQuestions",
        value: function getAllQuestions(pageNumber, pageSize) {
          var _this = this;

          this.quizService.getAllQuestions(pageNumber, pageSize).then(function (response) {
            console.log(response);

            if (response['status'] === 200) {
              if (response['data'].length > 0) {
                _this.allQuestions = response['data'];
                console.log(_this.allQuestions);
              } else {
                _this.allQuestions = null;
              }
            } else {
              if (_this.pageNumber !== 0) {
                _this.pageNumber = _this.pageNumber - 10;
              }
            }
          });
        }
      }, {
        key: "loadNextResults",
        value: function loadNextResults() {
          var pageNumber = this.pageNumber + 10;
          this.pageNumber = pageNumber;
          this.getAllQuestions(pageNumber, this.pageSize);
        }
      }, {
        key: "loadPrevResults",
        value: function loadPrevResults() {
          if (this.pageNumber !== 0) {
            var pageNumber = this.pageNumber - 10;
            this.pageNumber = pageNumber;

            if (pageNumber >= 0 && this.pageSize >= 0) {
              this.getAllQuestions(pageNumber, this.pageSize);
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
        key: "viewQuestionDetail",
        value: function viewQuestionDetail(quesId) {
          this.router.navigateByUrl("admin/quiz/".concat(quesId));
        }
      }]);

      return QuizQuestionsComponent;
    }();

    QuizQuestionsComponent.ctorParameters = function () {
      return [{
        type: _services_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    QuizQuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-quiz-questions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./quiz-questions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/quizes/quiz-questions/quiz-questions.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./quiz-questions.component.scss */
      "./src/app/demo/quizes/quiz-questions/quiz-questions.component.scss")).default]
    })], QuizQuestionsComponent);
    /***/
  },

  /***/
  "./src/app/demo/quizes/quiz-questions/quiz-questions.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/demo/quizes/quiz-questions/quiz-questions.module.ts ***!
    \*********************************************************************/

  /*! exports provided: QuizQuestionsModule */

  /***/
  function srcAppDemoQuizesQuizQuestionsQuizQuestionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizQuestionsModule", function () {
      return QuizQuestionsModule;
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


    var _quiz_questions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./quiz-questions.component */
    "./src/app/demo/quizes/quiz-questions/quiz-questions.component.ts");
    /* harmony import */


    var _quiz_questions_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./quiz-questions-routing.module */
    "./src/app/demo/quizes/quiz-questions/quiz-questions-routing.module.ts");
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

    var QuizQuestionsModule = function QuizQuestionsModule() {
      _classCallCheck(this, QuizQuestionsModule);
    };

    QuizQuestionsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_quiz_questions_component__WEBPACK_IMPORTED_MODULE_3__["QuizQuestionsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _quiz_questions_routing_module__WEBPACK_IMPORTED_MODULE_4__["QuizQuestionsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__["SweetAlert2Module"], ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_8__["SelectDropDownModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"]]
    })], QuizQuestionsModule);
    /***/
  }
}]);
//# sourceMappingURL=quiz-questions-quiz-questions-module-es5.js.map