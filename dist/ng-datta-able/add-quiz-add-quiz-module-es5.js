function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-quiz-add-quiz-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/quizes/add-quiz/add-quiz.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/quizes/add-quiz/add-quiz.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoQuizesAddQuizAddQuizComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <app-card cardTitle=\"Add Questions\" [options]=\"false\">\n                <ngx-spinner \n                    [name]=\"'spinner1'\" \n                    [fullScreen]=\"true\" \n                    type=\"ball-clip-rotate-multiple\" \n                    size=\"medium\"\n                >\n                </ngx-spinner>\n            <form [formGroup]=\"addQuizForm\" (ngSubmit) = \"onQuizSUbmit(addQuizForm)\" #myform=\"ngForm\" method=\"POST\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">   \n                        <div class=\"form-group\">\n                            <label>Uplaod File</label>\n                            <input type=\"file\" formControlName=\"file\" class=\"form-control\" (click)=\"emptyErrorList()\" (change)=\"fileProgress($event)\" ng2FileSelect [uploader]=\"uploader\" accept=\"application/json\">\n                            <span style=\"color: red\">*Please upload a json formated file</span>\n                            <div class=\"mb-3 error-div mt-3\">\n                                <small *ngIf=\"addQuizForm.get('file').hasError('required') && myform.submitted\">Please select a JSON file to upload</small>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <a href=\"trivia_sample.json\" download>Downlaod the sample file?</a>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-6\">\n                        <div class=\"error-container\" *ngIf=\"errorDivContent.length > 0\">\n                            <p *ngFor=\"let obj of errorDivContent\">\n                                {{obj | json}}\n                            </p>\n                        </div>\n                    </div>\n                    \n                </div>\n                \n                <button \n                    type=\"submit\" \n                    class=\"btn btn-primary\" \n                    [disabled]=\"errorDivContent.length > 0\"\n                >\n                    Submit\n                </button>\n            </form>\n            </app-card>\n        </div>\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./src/app/demo/quizes/add-quiz/add-quiz-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/demo/quizes/add-quiz/add-quiz-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: AddQuizRoutingModule */

  /***/
  function srcAppDemoQuizesAddQuizAddQuizRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddQuizRoutingModule", function () {
      return AddQuizRoutingModule;
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


    var _add_quiz_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-quiz.component */
    "./src/app/demo/quizes/add-quiz/add-quiz.component.ts");

    var routes = [{
      path: '',
      component: _add_quiz_component__WEBPACK_IMPORTED_MODULE_3__["AddQuizComponent"]
    }];

    var AddQuizRoutingModule = function AddQuizRoutingModule() {
      _classCallCheck(this, AddQuizRoutingModule);
    };

    AddQuizRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddQuizRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/quizes/add-quiz/add-quiz.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/demo/quizes/add-quiz/add-quiz.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDemoQuizesAddQuizAddQuizComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".error-container {\n  background: rgba(255, 0, 0, 0.2);\n  color: black;\n  border-radius: 2%;\n  padding: 3%; }\n\n.error-container p {\n  color: black; }\n\n.error-div {\n  color: red;\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94MjMvRG9jdW1lbnRzL0dpdEh1Yi9kYmMtYnVkc2JhbmstYW5ndWxhci9zcmMvYXBwL2RlbW8vcXVpemVzL2FkZC1xdWl6L2FkZC1xdWl6LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLFVBQVU7RUFDVix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcXVpemVzL2FkZC1xdWl6L2FkZC1xdWl6LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC4yKTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbn1cclxuXHJcbi5lcnJvci1jb250YWluZXIgcCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5lcnJvci1kaXYge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/demo/quizes/add-quiz/add-quiz.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/demo/quizes/add-quiz/add-quiz.component.ts ***!
    \************************************************************/

  /*! exports provided: AddQuizComponent */

  /***/
  function srcAppDemoQuizesAddQuizAddQuizComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddQuizComponent", function () {
      return AddQuizComponent;
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


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/quiz/quiz.service */
    "./src/app/services/quiz/quiz.service.ts");
    /* harmony import */


    var _services_dispensaries_dispensaries_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/dispensaries/dispensaries.service */
    "./src/app/services/dispensaries/dispensaries.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);

    var AddQuizComponent =
    /*#__PURE__*/
    function () {
      function AddQuizComponent(formBuilder, dispensaryService, quizService, spinner) {
        _classCallCheck(this, AddQuizComponent);

        this.formBuilder = formBuilder;
        this.dispensaryService = dispensaryService;
        this.quizService = quizService;
        this.spinner = spinner;
        this.errorDivContent = [];
        this.fileData = null;
        this.previewUrl = null;
        this.fileUploadProgress = null;
        this.uploadedFilePath = null;
        this.uploadAPI = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl, "/quiz/upload");
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploader"]({
          'url': this.uploadAPI,
          itemAlias: 'file'
        });
        this.quizDataToUpload = [];
        this.addQuizForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          dispensary: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          file: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
      }

      _createClass(AddQuizComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
          };

          this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log(item.file.name);
          };

          this.addQuizForm = this.formBuilder.group({
            file: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }, {
        key: "fileProgress",
        value: function fileProgress(fileInput) {
          var _this = this;

          this.quizDataToUpload = [];
          this.fileData = fileInput.target.files[0];
          var fileReader = new FileReader();
          var errorList = [];
          fileReader.readAsText(this.fileData, "UTF-8");

          fileReader.onload = function () {
            var finalResult = JSON.parse("".concat(fileReader.result));
            finalResult.forEach(function (element) {
              if (element.hasOwnProperty("question_text") && element.hasOwnProperty("answers")) {
                var answers = element["answers"][0];

                if (answers.hasOwnProperty("answer_a") && answers.hasOwnProperty("answer_b") && answers.hasOwnProperty("answer_c") && answers.hasOwnProperty("answer_d") && answers.hasOwnProperty("correct_answer")) {
                  _this.quizDataToUpload.push(element);
                } else {
                  errorList.push(element);
                }
              } else {
                errorList.push(element);
              }
            });
            _this.errorDivContent = errorList;
          };

          fileReader.onerror = function (error) {
            errorList.push(error);
          };
        }
      }, {
        key: "emptyErrorList",
        value: function emptyErrorList() {
          if (this.errorDivContent.length > 0) {
            this.errorDivContent = [];
          }
        }
      }, {
        key: "onQuizSUbmit",
        value: function onQuizSUbmit() {
          var _this2 = this;

          if (!this.addQuizForm.invalid) {
            this.showSpinner('spinner1');
            var data = {};
            data['data'] = this.quizDataToUpload;
            console.log(data);
            this.quizService.uploadQuiz(data).then(function (response) {
              if (response['status'] === 200) {
                _this2.hideSpinner('spinner1');

                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Success', 'Quiz importes successfully', 'success');
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Error', 'Internal Server Error', 'error');
              }
            });
          }
        }
      }, {
        key: "showSpinner",
        value: function showSpinner(name) {
          this.spinner.show(name);
        }
      }, {
        key: "hideSpinner",
        value: function hideSpinner(name) {
          this.spinner.hide(name);
        }
      }, {
        key: "file",
        get: function get() {
          return this.addQuizForm.get('file');
        }
      }]);

      return AddQuizComponent;
    }();

    AddQuizComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_dispensaries_dispensaries_service__WEBPACK_IMPORTED_MODULE_6__["DispensariesService"]
      }, {
        type: _services_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_5__["QuizService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]
      }];
    };

    AddQuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-quiz',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-quiz.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/quizes/add-quiz/add-quiz.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-quiz.component.scss */
      "./src/app/demo/quizes/add-quiz/add-quiz.component.scss")).default]
    })], AddQuizComponent);
    /***/
  },

  /***/
  "./src/app/demo/quizes/add-quiz/add-quiz.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/demo/quizes/add-quiz/add-quiz.module.ts ***!
    \*********************************************************/

  /*! exports provided: AddQuizModule */

  /***/
  function srcAppDemoQuizesAddQuizAddQuizModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddQuizModule", function () {
      return AddQuizModule;
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


    var _add_quiz_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-quiz.component */
    "./src/app/demo/quizes/add-quiz/add-quiz.component.ts");
    /* harmony import */


    var _add_quiz_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add-quiz-routing.module */
    "./src/app/demo/quizes/add-quiz/add-quiz-routing.module.ts");
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


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-select-dropdown */
    "./node_modules/ngx-select-dropdown/dist/index.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    var AddQuizModule = function AddQuizModule() {
      _classCallCheck(this, AddQuizModule);
    };

    AddQuizModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_add_quiz_component__WEBPACK_IMPORTED_MODULE_3__["AddQuizComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _add_quiz_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddQuizRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__["SweetAlert2Module"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"], ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_9__["SelectDropDownModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"]]
    })], AddQuizModule);
    /***/
  },

  /***/
  "./src/app/services/dispensaries/dispensaries.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/services/dispensaries/dispensaries.service.ts ***!
    \***************************************************************/

  /*! exports provided: DispensariesService */

  /***/
  function srcAppServicesDispensariesDispensariesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DispensariesService", function () {
      return DispensariesService;
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

    var DispensariesService =
    /*#__PURE__*/
    function () {
      function DispensariesService(http) {
        _classCallCheck(this, DispensariesService);

        this.http = http;
      }

      _createClass(DispensariesService, [{
        key: "addDispensary",
        value: function addDispensary(data) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/dispensary/add"), data).toPromise();
        }
      }, {
        key: "getActiveDispensaries",
        value: function getActiveDispensaries(pageNumber, pageSize, userID) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/dispensary/all?page=").concat(pageNumber, "&size=").concat(pageSize, "&userID=").concat(userID)).toPromise();
        }
      }, {
        key: "disableDispensary",
        value: function disableDispensary(data) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/dispensary/disable"), data).toPromise();
        }
      }, {
        key: "getDisabledDispensaries",
        value: function getDisabledDispensaries(pageNumber, pageSize, userID) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/dispensary/disabled/all?page=").concat(pageNumber, "&size=").concat(pageSize, "&userID=").concat(userID)).toPromise();
        }
      }, {
        key: "activateDispensary",
        value: function activateDispensary(data) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/dispensary/activate"), data).toPromise();
        }
      }, {
        key: "getDispensaryById",
        value: function getDispensaryById(dispensaryId) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/dispensary/").concat(dispensaryId)).toPromise();
        }
      }, {
        key: "updateDispensary",
        value: function updateDispensary(data) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/dispensary/update"), data).toPromise();
        }
      }, {
        key: "getActiveDispensariesWithoutPagination",
        value: function getActiveDispensariesWithoutPagination() {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/dispensary/active/all/without-pagination")).toPromise();
        }
      }, {
        key: "getAdminDispensary",
        value: function getAdminDispensary() {
          var admin = JSON.parse(localStorage.getItem('userInfo'));
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/dispensary/admin/").concat(admin.id)).toPromise();
        }
      }]);

      return DispensariesService;
    }();

    DispensariesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    DispensariesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DispensariesService);
    /***/
  }
}]);
//# sourceMappingURL=add-quiz-add-quiz-module-es5.js.map