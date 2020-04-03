(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-quiz-add-quiz-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/quizes/add-quiz/add-quiz.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/quizes/add-quiz/add-quiz.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <app-card cardTitle=\"Add Questions\" [options]=\"false\">\n                <ngx-spinner \n                    [name]=\"'spinner1'\" \n                    [fullScreen]=\"true\" \n                    type=\"ball-clip-rotate-multiple\" \n                    size=\"medium\"\n                >\n                </ngx-spinner>\n            <form [formGroup]=\"addQuizForm\" (ngSubmit) = \"onQuizSUbmit(addQuizForm)\" #myform=\"ngForm\" method=\"POST\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">   \n                        <div class=\"form-group\">\n                            <label>Uplaod File</label>\n                            <input type=\"file\" formControlName=\"file\" class=\"form-control\" (click)=\"emptyErrorList()\" (change)=\"fileProgress($event)\" ng2FileSelect [uploader]=\"uploader\" accept=\"application/json\">\n                            <span style=\"color: red\">*Please upload a json formated file</span>\n                            <div class=\"mb-3 error-div mt-3\">\n                                <small *ngIf=\"addQuizForm.get('file').hasError('required') && myform.submitted\">Please select a JSON file to upload</small>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <a href=\"trivia_sample.json\" download>Downlaod the sample file?</a>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-6\">\n                        <div class=\"error-container\" *ngIf=\"errorDivContent.length > 0\">\n                            <p *ngFor=\"let obj of errorDivContent\">\n                                {{obj | json}}\n                            </p>\n                        </div>\n                    </div>\n                    \n                </div>\n                \n                <button \n                    type=\"submit\" \n                    class=\"btn btn-primary\" \n                    [disabled]=\"errorDivContent.length > 0\"\n                >\n                    Submit\n                </button>\n            </form>\n            </app-card>\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./src/app/demo/quizes/add-quiz/add-quiz-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/demo/quizes/add-quiz/add-quiz-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AddQuizRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuizRoutingModule", function() { return AddQuizRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_quiz_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-quiz.component */ "./src/app/demo/quizes/add-quiz/add-quiz.component.ts");




const routes = [
    {
        path: '',
        component: _add_quiz_component__WEBPACK_IMPORTED_MODULE_3__["AddQuizComponent"]
    }
];
let AddQuizRoutingModule = class AddQuizRoutingModule {
};
AddQuizRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AddQuizRoutingModule);



/***/ }),

/***/ "./src/app/demo/quizes/add-quiz/add-quiz.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/demo/quizes/add-quiz/add-quiz.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error-container {\n  background: rgba(255, 0, 0, 0.2);\n  color: black;\n  border-radius: 2%;\n  padding: 3%; }\n\n.error-container p {\n  color: black; }\n\n.error-div {\n  color: red;\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94MjMvRG9jdW1lbnRzL0dpdEh1Yi9kYmMtYnVkc2JhbmstYW5ndWxhci9zcmMvYXBwL2RlbW8vcXVpemVzL2FkZC1xdWl6L2FkZC1xdWl6LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLFVBQVU7RUFDVix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcXVpemVzL2FkZC1xdWl6L2FkZC1xdWl6LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC4yKTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbn1cclxuXHJcbi5lcnJvci1jb250YWluZXIgcCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5lcnJvci1kaXYge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/demo/quizes/add-quiz/add-quiz.component.ts":
/*!************************************************************!*\
  !*** ./src/app/demo/quizes/add-quiz/add-quiz.component.ts ***!
  \************************************************************/
/*! exports provided: AddQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuizComponent", function() { return AddQuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/quiz/quiz.service */ "./src/app/services/quiz/quiz.service.ts");
/* harmony import */ var _services_dispensaries_dispensaries_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/dispensaries/dispensaries.service */ "./src/app/services/dispensaries/dispensaries.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);









let AddQuizComponent = class AddQuizComponent {
    constructor(formBuilder, dispensaryService, quizService, spinner) {
        this.formBuilder = formBuilder;
        this.dispensaryService = dispensaryService;
        this.quizService = quizService;
        this.spinner = spinner;
        this.errorDivContent = [];
        this.fileData = null;
        this.previewUrl = null;
        this.fileUploadProgress = null;
        this.uploadedFilePath = null;
        this.uploadAPI = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/quiz/upload`;
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
    ngOnInit() {
        this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
        this.uploader.onCompleteItem = (item, response, status, headers) => {
            console.log(item.file.name);
        };
        this.addQuizForm = this.formBuilder.group({
            file: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    fileProgress(fileInput) {
        this.quizDataToUpload = [];
        this.fileData = fileInput.target.files[0];
        const fileReader = new FileReader();
        let errorList = [];
        fileReader.readAsText(this.fileData, "UTF-8");
        fileReader.onload = () => {
            var finalResult = JSON.parse(`${fileReader.result}`);
            finalResult.forEach(element => {
                if (element.hasOwnProperty("question_text") && element.hasOwnProperty("answers")) {
                    let answers = element["answers"][0];
                    if (answers.hasOwnProperty("answer_a") && answers.hasOwnProperty("answer_b") && answers.hasOwnProperty("answer_c") && answers.hasOwnProperty("answer_d") && answers.hasOwnProperty("correct_answer")) {
                        this.quizDataToUpload.push(element);
                    }
                    else {
                        errorList.push(element);
                    }
                }
                else {
                    errorList.push(element);
                }
            });
            this.errorDivContent = errorList;
        };
        fileReader.onerror = (error) => {
            errorList.push(error);
        };
    }
    emptyErrorList() {
        if (this.errorDivContent.length > 0) {
            this.errorDivContent = [];
        }
    }
    get file() {
        return this.addQuizForm.get('file');
    }
    onQuizSUbmit() {
        if (!this.addQuizForm.invalid) {
            this.showSpinner('spinner1');
            var data = {};
            data['data'] = this.quizDataToUpload;
            console.log(data);
            this.quizService.uploadQuiz(data).then(response => {
                if (response['status'] === 200) {
                    this.hideSpinner('spinner1');
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Success', 'Quiz importes successfully', 'success');
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Error', 'Internal Server Error', 'error');
                }
            });
        }
    }
    showSpinner(name) {
        this.spinner.show(name);
    }
    hideSpinner(name) {
        this.spinner.hide(name);
    }
};
AddQuizComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_dispensaries_dispensaries_service__WEBPACK_IMPORTED_MODULE_6__["DispensariesService"] },
    { type: _services_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_5__["QuizService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }
];
AddQuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-quiz',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-quiz.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/quizes/add-quiz/add-quiz.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-quiz.component.scss */ "./src/app/demo/quizes/add-quiz/add-quiz.component.scss")).default]
    })
], AddQuizComponent);



/***/ }),

/***/ "./src/app/demo/quizes/add-quiz/add-quiz.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/demo/quizes/add-quiz/add-quiz.module.ts ***!
  \*********************************************************/
/*! exports provided: AddQuizModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuizModule", function() { return AddQuizModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _add_quiz_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-quiz.component */ "./src/app/demo/quizes/add-quiz/add-quiz.component.ts");
/* harmony import */ var _add_quiz_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-quiz-routing.module */ "./src/app/demo/quizes/add-quiz/add-quiz-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "./node_modules/@sweetalert2/ngx-sweetalert2/fesm2015/sweetalert2-ngx-sweetalert2.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-select-dropdown */ "./node_modules/ngx-select-dropdown/dist/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");











let AddQuizModule = class AddQuizModule {
};
AddQuizModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_quiz_component__WEBPACK_IMPORTED_MODULE_3__["AddQuizComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _add_quiz_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddQuizRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__["SweetAlert2Module"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"],
            ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_9__["SelectDropDownModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"]
        ]
    })
], AddQuizModule);



/***/ }),

/***/ "./src/app/services/dispensaries/dispensaries.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/dispensaries/dispensaries.service.ts ***!
  \***************************************************************/
/*! exports provided: DispensariesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispensariesService", function() { return DispensariesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let DispensariesService = class DispensariesService {
    constructor(http) {
        this.http = http;
    }
    addDispensary(data) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/dispensary/add`, data).toPromise();
    }
    getActiveDispensaries(pageNumber, pageSize, userID) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/dispensary/all?page=${pageNumber}&size=${pageSize}&userID=${userID}`).toPromise();
    }
    disableDispensary(data) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/dispensary/disable`, data).toPromise();
    }
    getDisabledDispensaries(pageNumber, pageSize, userID) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/dispensary/disabled/all?page=${pageNumber}&size=${pageSize}&userID=${userID}`).toPromise();
    }
    activateDispensary(data) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/dispensary/activate`, data).toPromise();
    }
    getDispensaryById(dispensaryId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/dispensary/${dispensaryId}`).toPromise();
    }
    updateDispensary(data) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/dispensary/update`, data).toPromise();
    }
    getActiveDispensariesWithoutPagination() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/dispensary/active/all/without-pagination`).toPromise();
    }
    getAdminDispensary() {
        let admin = JSON.parse(localStorage.getItem('userInfo'));
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/dispensary/admin/${admin.id}`).toPromise();
    }
};
DispensariesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DispensariesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DispensariesService);



/***/ })

}]);
//# sourceMappingURL=add-quiz-add-quiz-module-es2015.js.map