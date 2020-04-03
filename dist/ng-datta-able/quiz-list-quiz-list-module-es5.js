function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quiz-list-quiz-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/quizes/quiz-list/quiz-list.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/quizes/quiz-list/quiz-list.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoQuizesQuizListQuizListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n      <app-card cardTitle=\"Questions List\" [options]=\"false\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-hover\">\n            <thead>\n            <tr>\n              <th>Group</th>\n              <th>Uploaded On</th>\n              \n              <th class=\"text-right\">Actions</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let quiz of this.quizes\">\n              <td>Group {{ quiz.group_id }}</td>\n              <td>{{ quiz.created_at }}</td>\n              <td class=\"text-right\">\n                <a \n                  (click)=\"showWarningPopup(quiz.group_id)\"\n                >\n                  <i class=\"feather icon-trash text-c-green m-r-10\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Disable User\"></i></a>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n          <div class=\"mt-3 text-right\">\n            <a (click)=\"loadPrevResults()\" class=\"btn btn-primary\" style=\"color: white; padding: 5px;\">Prev</a>\n            <a (click)=\"loadNextResults()\" class=\"btn btn-primary\" style=\"color: white; padding: 5px;\">Next</a>\n          </div>\n        </div>\n      </app-card>\n    </div>\n  </div>\n  ";
    /***/
  },

  /***/
  "./src/app/demo/quizes/quiz-list/quiz-list-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/demo/quizes/quiz-list/quiz-list-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: QuizListRoutingModule */

  /***/
  function srcAppDemoQuizesQuizListQuizListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizListRoutingModule", function () {
      return QuizListRoutingModule;
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


    var _quiz_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./quiz-list.component */
    "./src/app/demo/quizes/quiz-list/quiz-list.component.ts");

    var routes = [{
      path: '',
      component: _quiz_list_component__WEBPACK_IMPORTED_MODULE_3__["QuizListComponent"]
    }];

    var QuizListRoutingModule = function QuizListRoutingModule() {
      _classCallCheck(this, QuizListRoutingModule);
    };

    QuizListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], QuizListRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/quizes/quiz-list/quiz-list.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/demo/quizes/quiz-list/quiz-list.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDemoQuizesQuizListQuizListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcXVpemVzL3F1aXotbGlzdC9xdWl6LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/demo/quizes/quiz-list/quiz-list.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/demo/quizes/quiz-list/quiz-list.component.ts ***!
    \**************************************************************/

  /*! exports provided: QuizListComponent */

  /***/
  function srcAppDemoQuizesQuizListQuizListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizListComponent", function () {
      return QuizListComponent;
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

    var QuizListComponent =
    /*#__PURE__*/
    function () {
      function QuizListComponent(quizService, spinner) {
        _classCallCheck(this, QuizListComponent);

        this.quizService = quizService;
        this.spinner = spinner;
        this.quizes = [];
        this.pageSize = 10;
        this.pageNumber = 0;
      }

      _createClass(QuizListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAvailableQuiz(this.pageNumber, this.pageSize);
        }
      }, {
        key: "getAvailableQuiz",
        value: function getAvailableQuiz(pageNumber, pageSize) {
          var _this = this;

          console.log(pageNumber);
          console.log(pageSize);
          this.quizService.getAllQuiz(pageNumber, pageSize).then(function (response) {
            console.log(response);

            if (response['status'] === 200) {
              var tempArray = [];
              response['data'].forEach(function (element) {
                var data = {
                  'group_id': element.group_id,
                  'created_at': _this.formatDate(element.created_at)
                };
                tempArray.push(data);
                _this.quizes = tempArray;
              });
            } else {
              if (_this.quizes.length) if (_this.pageNumber !== 0) {
                _this.pageNumber = _this.pageNumber - 10;
              } else {
                _this.quizes = [];
              } // swal.fire({
              //   icon: "error",
              //   title: "error",
              //   text: "No more records available"
              // })
            }

            console.log(_this.quizes);
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
      }, {
        key: "showWarningPopup",
        value: function showWarningPopup(quizId) {
          var _this2 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            icon: "warning",
            title: "Warning",
            text: "Are you sure you want to delete these question?",
            showCancelButton: true
          }).then(function (response) {
            if (response.value) {
              _this2.deleteQuiz(quizId);
            }
          });
        }
      }, {
        key: "deleteQuiz",
        value: function deleteQuiz(quizId) {
          var _this3 = this;

          var data = {
            'quiz_id': quizId
          };
          this.quizService.deleteQuiz(data).then(function (response) {
            if (response['status'] === 200) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: "success",
                title: "Success",
                text: "Questions Deleted Successfully"
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: "error",
                title: "Error",
                text: "Internal Server Error"
              });
            }

            _this3.getAvailableQuiz(_this3.pageNumber, _this3.pageSize);
          });
        }
      }, {
        key: "loadNextResults",
        value: function loadNextResults() {
          var pageNumber = this.pageNumber + 10;
          this.pageNumber = pageNumber;
          this.getAvailableQuiz(pageNumber, this.pageSize);
        }
      }, {
        key: "loadPrevResults",
        value: function loadPrevResults() {
          if (this.pageNumber !== 0) {
            var pageNumber = this.pageNumber - 10;
            this.pageNumber = pageNumber;

            if (pageNumber >= 0 && this.pageSize >= 0) {
              this.getAvailableQuiz(pageNumber, this.pageSize);
            }
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              icon: "error",
              title: "error",
              text: "No more records available"
            });
          }
        }
      }]);

      return QuizListComponent;
    }();

    QuizListComponent.ctorParameters = function () {
      return [{
        type: _services_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]
      }];
    };

    QuizListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-quiz-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./quiz-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/quizes/quiz-list/quiz-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./quiz-list.component.scss */
      "./src/app/demo/quizes/quiz-list/quiz-list.component.scss")).default]
    })], QuizListComponent);
    /***/
  },

  /***/
  "./src/app/demo/quizes/quiz-list/quiz-list.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/demo/quizes/quiz-list/quiz-list.module.ts ***!
    \***********************************************************/

  /*! exports provided: QuizListModule */

  /***/
  function srcAppDemoQuizesQuizListQuizListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizListModule", function () {
      return QuizListModule;
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


    var _quiz_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./quiz-list.component */
    "./src/app/demo/quizes/quiz-list/quiz-list.component.ts");
    /* harmony import */


    var _quiz_list_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./quiz-list-routing.module */
    "./src/app/demo/quizes/quiz-list/quiz-list-routing.module.ts");
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

    var QuizListModule = function QuizListModule() {
      _classCallCheck(this, QuizListModule);
    };

    QuizListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_quiz_list_component__WEBPACK_IMPORTED_MODULE_3__["QuizListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _quiz_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["QuizListRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__["SweetAlert2Module"], ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_8__["SelectDropDownModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"]]
    })], QuizListModule);
    /***/
  }
}]);
//# sourceMappingURL=quiz-list-quiz-list-module-es5.js.map