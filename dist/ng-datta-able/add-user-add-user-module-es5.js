function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-user-add-user-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/user/add-user/add-user.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/user/add-user/add-user.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoUserAddUserAddUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <app-card cardTitle=\"Add User\" [options]=\"false\">\r\n            <form [formGroup]=\"addUserForm\" (ngSubmit) = \"onAddUserSubmit(addUserForm)\" #myform=\"ngForm\" method=\"POST\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <h4 class=\"mb-4 blue\" id=\"basic-info-heading\">Basic Information</h4>\r\n                        <div class=\"form-group\">\r\n                            <label>Username</label>\r\n                            <input type=\"text\" formControlName=\"userName\" class=\"form-control\" aria-describedby=\"Username\" placeholder=\"Enter Username\" required>\r\n                            <div class=\"mb-3 error-div\">\r\n                                <small *ngIf=\"addUserForm.get('userName').hasError('required') && myform.submitted\">Username Required</small>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Email address</label>\r\n                            <input type=\"email\" formControlName=\"email\" class=\"form-control\" aria-describedby=\"Email\" placeholder=\"Enter Email\">\r\n                            <div class=\"mb-3 error-div\">\r\n                                <small *ngIf=\"addUserForm.get('email').hasError('required') && myform.submitted\">Email Required</small>\r\n                                <small *ngIf=\"!addUserForm.get('email').hasError('required') && addUserForm.get('email').status === 'INVALID' && addUserForm.get('email').touched  && myform.submitted\">Invalid Email Address</small>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>First Name</label>\r\n                            <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" aria-describedby=\"First Name\" placeholder=\"Enter Firstname\" required>\r\n                            <div class=\"mb-3 error-div\">\r\n                                <small *ngIf=\"addUserForm.get('firstName').hasError('required') && myform.submitted\">Firstname Required</small>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Last Name</label>\r\n                            <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" aria-describedby=\"Last Name\" placeholder=\"Enter Lastname\">\r\n                            <div class=\"mb-3 error-div\">\r\n                                <small *ngIf=\"addUserForm.get('lastName').hasError('required') && myform.submitted\">Last Required</small>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Phone</label>\r\n                            <input type=\"text\" formControlName=\"phone\" class=\"form-control\" aria-describedby=\"Phone\" placeholder=\"Enter Phone\" required>\r\n                            <div class=\"mb-3 error-div\">\r\n                                <small *ngIf=\"addUserForm.get('phone').hasError('required') && myform.submitted\">Phone Required</small>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Password</label>\r\n                            <input type=\"password\" formControlName=\"password\" class=\"form-control\" aria-describedby=\"Password\" placeholder=\"Password\">\r\n                            <div class=\"mb-3 error-div\">\r\n                                <small *ngIf=\"addUserForm.get('password').hasError('required') && myform.submitted\">Password Required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6 text-center\">\r\n                        <h4 class=\"mb-4 blue mt-4\" id=\"basic-info-heading\">Profile Image</h4>\r\n                        <img id=\"profile-image\" class=\"img-fluid img-thumbnail img-rounded\" [src]=\"previewUrl ? previewUrl: addUserForm.get('image').value !== null ? addUserForm.get('image').value: 'assets/images/admin-user-demo.png'\" height=\"250\" width=\"250\" />\r\n                        <div class=\"form-group\" id=\"image-wrapper\">\r\n                            <input type=\"file\" formControlName=\"image\" (change)=\"fileProgress($event)\" ng2FileSelect [uploader]=\"uploader\" class=\"form-control\" aria-describedby=\"Image\" style=\"width: 250px\">\r\n                        </div>    \r\n                    </div>\r\n                </div>\r\n                \r\n                <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n            </form>\r\n            </app-card>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/demo/user/add-user/add-user-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/demo/user/add-user/add-user-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: AddUserRoutingModule */

  /***/
  function srcAppDemoUserAddUserAddUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddUserRoutingModule", function () {
      return AddUserRoutingModule;
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


    var _add_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-user.component */
    "./src/app/demo/user/add-user/add-user.component.ts");

    var routes = [{
      path: '',
      component: _add_user_component__WEBPACK_IMPORTED_MODULE_3__["AddUserComponent"]
    }];

    var AddUserRoutingModule = function AddUserRoutingModule() {
      _classCallCheck(this, AddUserRoutingModule);
    };

    AddUserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddUserRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/user/add-user/add-user.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/demo/user/add-user/add-user.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDemoUserAddUserAddUserComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".error-div {\n  color: red; }\n\n#basic-info-heading {\n  color: #3F4D67; }\n\n#image-wrapper input {\n  display: inline !important;\n  max-width: auto; }\n\n#image-wrapper {\n  text-align: center !important;\n  margin: auto; }\n\n#profile-image {\n  max-width: 250px !important;\n  max-height: 250px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94MjMvRG9jdW1lbnRzL0dpdEh1Yi9kYmMtYnVkc2JhbmstYW5ndWxhci9zcmMvYXBwL2RlbW8vdXNlci9hZGQtdXNlci9hZGQtdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSwwQkFBMEI7RUFDMUIsZUFBZSxFQUFBOztBQUduQjtFQUNJLDZCQUE2QjtFQUM3QixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksMkJBQTJCO0VBQzNCLDRCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGVtby91c2VyL2FkZC11c2VyL2FkZC11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLWRpdiB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4jYmFzaWMtaW5mby1oZWFkaW5nIHtcclxuICAgIGNvbG9yOiAjM0Y0RDY3O1xyXG59XHJcbiNpbWFnZS13cmFwcGVyIGlucHV0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4jaW1hZ2Utd3JhcHBlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuI3Byb2ZpbGUtaW1hZ2Uge1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LWhlaWdodDogMjUwcHggIWltcG9ydGFudDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/demo/user/add-user/add-user.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/demo/user/add-user/add-user.component.ts ***!
    \**********************************************************/

  /*! exports provided: AddUserComponent */

  /***/
  function srcAppDemoUserAddUserAddUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddUserComponent", function () {
      return AddUserComponent;
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


    var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/user/user.service */
    "./src/app/services/user/user.service.ts");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);

    var AddUserComponent =
    /*#__PURE__*/
    function () {
      function AddUserComponent(formBuilder, user, router) {
        _classCallCheck(this, AddUserComponent);

        this.formBuilder = formBuilder;
        this.user = user;
        this.router = router;
        this.fileData = null;
        this.previewUrl = null;
        this.fileUploadProgress = null;
        this.uploadedFilePath = null;
        this.uploadAPI = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/user/update/image");
        this.title = 'budsbankadminpanel';
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({
          'url': this.uploadAPI,
          itemAlias: 'image',
          allowedFileType: ['image']
        });
        this.addUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
      }

      _createClass(AddUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
          };

          this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log(item.file.name);
          };

          this.addUserForm = this.formBuilder.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            image: [null]
          });
        }
      }, {
        key: "fileProgress",
        value: function fileProgress(fileInput) {
          this.fileData = fileInput.target.files[0];
          this.preview();
        }
      }, {
        key: "preview",
        value: function preview() {
          var _this = this;

          var mimeType = this.fileData.type;

          if (mimeType.match(/image\/*/) == null) {
            return;
          }

          var reader = new FileReader();
          reader.readAsDataURL(this.fileData);

          reader.onload = function (_event) {
            _this.previewUrl = reader.result;
          };
        }
      }, {
        key: "onAddUserSubmit",
        value: function onAddUserSubmit() {
          var _this2 = this;

          if (!this.addUserForm.invalid) {
            var data = this.addUserForm.value;
            this.user.register(data).then(function (registerResponse) {
              console.log(registerResponse);

              if (registerResponse['status'] === 200) {
                if (_this2.fileData) {
                  _this2.uploader.onBuildItemForm = function (fileItem, form) {
                    form.append('userId', registerResponse['user'].id);
                  };

                  _this2.uploader.uploadAll();

                  _this2.uploader.onSuccessItem = function (item, response, status, headers) {
                    if (response) {
                      var formatedResponse = JSON.parse(response);

                      if (formatedResponse['status'] !== 200) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Error', "".concat(formatedResponse['message']), 'error');
                      }
                    }
                  };
                }

                _this2.router.navigate(['/admin/user/all']);

                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Success', "User Added Successfully", 'success');
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Error', "".concat(registerResponse['message']), 'error');
              }
            });
          }
        }
      }, {
        key: "username",
        get: function get() {
          return this.addUserForm.get('userName');
        }
      }, {
        key: "email",
        get: function get() {
          return this.addUserForm.get('email');
        }
      }, {
        key: "firstname",
        get: function get() {
          return this.addUserForm.get('firstName');
        }
      }, {
        key: "lastname",
        get: function get() {
          return this.addUserForm.get('lastName');
        }
      }, {
        key: "phone",
        get: function get() {
          return this.addUserForm.get('phone');
        }
      }, {
        key: "password",
        get: function get() {
          return this.addUserForm.get('password');
        }
      }, {
        key: "image",
        get: function get() {
          return this.addUserForm.get('image');
        }
      }]);

      return AddUserComponent;
    }();

    AddUserComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/user/add-user/add-user.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-user.component.scss */
      "./src/app/demo/user/add-user/add-user.component.scss")).default]
    })], AddUserComponent);
    /***/
  },

  /***/
  "./src/app/demo/user/add-user/add-user.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/demo/user/add-user/add-user.module.ts ***!
    \*******************************************************/

  /*! exports provided: AddUserModule */

  /***/
  function srcAppDemoUserAddUserAddUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddUserModule", function () {
      return AddUserModule;
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


    var _add_user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-user-routing.module */
    "./src/app/demo/user/add-user/add-user-routing.module.ts");
    /* harmony import */


    var _add_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add-user.component */
    "./src/app/demo/user/add-user/add-user.component.ts");
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

    var AddUserModule = function AddUserModule() {
      _classCallCheck(this, AddUserModule);
    };

    AddUserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_add_user_component__WEBPACK_IMPORTED_MODULE_4__["AddUserComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _add_user_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddUserRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__["SweetAlert2Module"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"]]
    })], AddUserModule);
    /***/
  }
}]);
//# sourceMappingURL=add-user-add-user-module-es5.js.map