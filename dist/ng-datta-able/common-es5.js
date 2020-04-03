function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/angular-datatables/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/angular-datatables/index.js ***!
    \**************************************************/

  /*! exports provided: DataTableDirective, DataTablesModule */

  /***/
  function node_modulesAngularDatatablesIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./src/angular-datatables.directive */
    "./node_modules/angular-datatables/src/angular-datatables.directive.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataTableDirective", function () {
      return _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__["DataTableDirective"];
    });
    /* harmony import */


    var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./src/angular-datatables.module */
    "./node_modules/angular-datatables/src/angular-datatables.module.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataTablesModule", function () {
      return _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__["DataTablesModule"];
    });
    /**
     * @license
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
     */

    /**
     * @module
     * @description
     * Entry point from which you should import all public library APIs.
     */
    //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/angular-datatables/src/angular-datatables.directive.js":
  /*!*****************************************************************************!*\
    !*** ./node_modules/angular-datatables/src/angular-datatables.directive.js ***!
    \*****************************************************************************/

  /*! exports provided: DataTableDirective */

  /***/
  function node_modulesAngularDatatablesSrcAngularDatatablesDirectiveJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableDirective", function () {
      return DataTableDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * @license
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
     */


    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var DataTableDirective =
    /** @class */
    function () {
      function DataTableDirective(el) {
        this.el = el;
        /**
         * The DataTable option you pass to configure your table.
         */

        this.dtOptions = {};
      }

      DataTableDirective.prototype.ngOnInit = function () {
        var _this = this;

        if (this.dtTrigger) {
          this.dtTrigger.subscribe(function () {
            _this.displayTable();
          });
        } else {
          this.displayTable();
        }
      };

      DataTableDirective.prototype.ngOnDestroy = function () {
        if (this.dtTrigger) {
          this.dtTrigger.unsubscribe();
        }

        if (this.dt) {
          this.dt.destroy(true);
        }
      };

      DataTableDirective.prototype.displayTable = function () {
        var _this = this;

        this.dtInstance = new Promise(function (resolve, reject) {
          Promise.resolve(_this.dtOptions).then(function (dtOptions) {
            // Using setTimeout as a "hack" to be "part" of NgZone
            setTimeout(function () {
              _this.dt = $(_this.el.nativeElement).DataTable(dtOptions);
              resolve(_this.dt);
            });
          });
        });
      };

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], DataTableDirective.prototype, "dtOptions", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"])], DataTableDirective.prototype, "dtTrigger", void 0);

      DataTableDirective = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[datatable]'
      }), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])], DataTableDirective);
      return DataTableDirective;
    }(); //# sourceMappingURL=angular-datatables.directive.js.map

    /***/

  },

  /***/
  "./node_modules/angular-datatables/src/angular-datatables.module.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/angular-datatables/src/angular-datatables.module.js ***!
    \**************************************************************************/

  /*! exports provided: DataTablesModule */

  /***/
  function node_modulesAngularDatatablesSrcAngularDatatablesModuleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTablesModule", function () {
      return DataTablesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./angular-datatables.directive */
    "./node_modules/angular-datatables/src/angular-datatables.directive.js");
    /**
     * @license
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
     */


    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var DataTablesModule =
    /** @class */
    function () {
      function DataTablesModule() {}

      DataTablesModule_1 = DataTablesModule;

      DataTablesModule.forRoot = function () {
        return {
          ngModule: DataTablesModule_1
        };
      };

      var DataTablesModule_1;
      DataTablesModule = DataTablesModule_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]],
        exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]
      })], DataTablesModule);
      return DataTablesModule;
    }(); //# sourceMappingURL=angular-datatables.module.js.map

    /***/

  },

  /***/
  "./src/app/services/payment/payment.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/payment/payment.service.ts ***!
    \*****************************************************/

  /*! exports provided: PaymentService */

  /***/
  function srcAppServicesPaymentPaymentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentService", function () {
      return PaymentService;
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

    var PaymentService =
    /*#__PURE__*/
    function () {
      function PaymentService(http) {
        _classCallCheck(this, PaymentService);

        this.http = http;
      }

      _createClass(PaymentService, [{
        key: "processPayment",
        value: function processPayment(payment) {
          console.log('-----------');
          console.log('dfdfdfd');
          console.log('-----------');
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/process-payment"), payment).toPromise();
        }
      }]);

      return PaymentService;
    }();

    PaymentService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PaymentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PaymentService);
    /***/
  },

  /***/
  "./src/app/services/quiz/quiz.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/quiz/quiz.service.ts ***!
    \***********************************************/

  /*! exports provided: QuizService */

  /***/
  function srcAppServicesQuizQuizServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizService", function () {
      return QuizService;
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

    var QuizService =
    /*#__PURE__*/
    function () {
      function QuizService(http) {
        _classCallCheck(this, QuizService);

        this.http = http;
      }

      _createClass(QuizService, [{
        key: "uploadQuiz",
        value: function uploadQuiz(data) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/quiz/upload"), data).toPromise();
        }
      }, {
        key: "getAllQuiz",
        value: function getAllQuiz(pageNumber, pageSize) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/quiz/all?page=").concat(pageNumber, "&size=").concat(pageSize)).toPromise();
        }
      }, {
        key: "getAllQuestions",
        value: function getAllQuestions(pageNumber, pageSize) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/quiz/group/questions?page=").concat(pageNumber, "&size=").concat(pageSize)).toPromise();
        }
      }, {
        key: "getQuestionsbyID",
        value: function getQuestionsbyID(questionID) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/quiz/singlequestion/?questionID=").concat(questionID)).toPromise();
        }
      }, {
        key: "deleteQuiz",
        value: function deleteQuiz(data) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/quiz/delete"), data).toPromise();
        }
      }]);

      return QuizService;
    }();

    QuizService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    QuizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], QuizService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map