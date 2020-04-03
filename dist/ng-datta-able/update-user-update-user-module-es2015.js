(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-user-update-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/user/update-user/update-user.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/user/update-user/update-user.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <app-card cardTitle=\"Update User\" [options]=\"false\">\n            <form [formGroup]=\"updateUserForm\" (ngSubmit) = \"onUpdateUserSubmit(addUserForm)\" #myform=\"ngForm\" method=\"POST\" enctype=\"multipart/form-data\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h4 class=\"mb-4\" id=\"basic-info-heading\">Basic Information</h4>\n                        <div class=\"form-group\">\n                            <label>Username</label>\n                            <input type=\"text\" formControlName=\"username\" class=\"form-control\" aria-describedby=\"Username\" placeholder=\"Enter Username\" required>\n                            <div class=\"mb-3 error-div\">\n                                <small *ngIf=\"updateUserForm.get('username').hasError('required') && myform.submitted\">Username Required</small>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>First Name</label>\n                            <input type=\"text\" formControlName=\"first_name\" class=\"form-control\" aria-describedby=\"First Name\" placeholder=\"Enter Firstname\" required>\n                            <div class=\"mb-3 error-div\">\n                                <small *ngIf=\"updateUserForm.get('first_name').hasError('required') && myform.submitted\">Firstname Required</small>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Last Name</label>\n                            <input type=\"text\" formControlName=\"last_name\" class=\"form-control\" aria-describedby=\"Last Name\" placeholder=\"Enter Lastname\">\n                            <div class=\"mb-3 error-div\">\n                                <small *ngIf=\"updateUserForm.get('last_name').hasError('required') && myform.submitted\">Last Required</small>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Email address</label>\n                            <input type=\"email\" formControlName=\"email\" class=\"form-control\" aria-describedby=\"Email\" placeholder=\"Enter Email\">\n                            <div class=\"mb-3 error-div\">\n                                <small *ngIf=\"updateUserForm.get('email').hasError('required') && myform.submitted\">Email Required</small>\n                                <small *ngIf=\"!updateUserForm.get('email').hasError('required') && updateUserForm.get('email').status === 'INVALID' && addUserForm.get('email').touched  && myform.submitted\">Invalid Email Address</small>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Phone</label>\n                            <input type=\"text\" formControlName=\"phone\" class=\"form-control\" aria-describedby=\"Phone\" placeholder=\"Enter Phone\" required>\n                            <div class=\"mb-3 error-div\">\n                                <small *ngIf=\"updateUserForm.get('phone').hasError('required') && myform.submitted\">Phone Required</small>\n                            </div>\n                        </div>\n                    </div>\n                    <input type=\"hidden\" formControlName=\"user_id\" value=\"{{updateUserForm.get('user_id').value}}\">\n                    <div class=\"col-md-6 text-center\">\n                        <h4 class=\"mb-4\" id=\"basic-info-heading\">Profile Image</h4>\n                        <img id=\"profile-image\" class=\"img-fluid img-thumbnail img-rounded mt-4\" [src]=\"previewUrl ? previewUrl: updateUserForm.get('image').value !== null ? updateUserForm.get('image').value: 'assets/images/admin-user-demo.png'\" height=\"250\" width=\"250\" />\n                        <div class=\"form-group\" id=\"image-wrapper\">\n                            <input type=\"file\" formControlName=\"image\" (change)=\"fileProgress($event)\" ng2FileSelect [uploader]=\"uploader\" class=\"form-control\" aria-describedby=\"Image\" style=\"width: 250px\">\n                        </div>\n                    </div>\n                </div> \n                <button type=\"submit\" class=\"btn btn-primary\">Update</button>\n            </form>\n            </app-card>\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./src/app/demo/user/update-user/update-user-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/demo/user/update-user/update-user-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: UpdateUserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserRoutingModule", function() { return UpdateUserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _update_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-user.component */ "./src/app/demo/user/update-user/update-user.component.ts");




const routes = [
    {
        path: '',
        component: _update_user_component__WEBPACK_IMPORTED_MODULE_3__["UpdateUserComponent"]
    }
];
let UpdateUserRoutingModule = class UpdateUserRoutingModule {
};
UpdateUserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UpdateUserRoutingModule);



/***/ }),

/***/ "./src/app/demo/user/update-user/update-user.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/demo/user/update-user/update-user.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error-div {\n  color: red;\n  background-color: white; }\n\n#image-wrapper input {\n  display: inline !important;\n  max-width: auto; }\n\n#image-wrapper {\n  text-align: center !important;\n  margin: auto; }\n\n#profile-image {\n  max-width: 250px !important;\n  max-height: 250px !important; }\n\n#basic-info-heading {\n  color: #3F4D67; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94MjMvRG9jdW1lbnRzL0dpdEh1Yi9kYmMtYnVkc2JhbmstYW5ndWxhci9zcmMvYXBwL2RlbW8vdXNlci91cGRhdGUtdXNlci91cGRhdGUtdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVM7RUFDVCx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSwwQkFBMEI7RUFDMUIsZUFBZSxFQUFBOztBQUduQjtFQUNJLDZCQUE2QjtFQUM3QixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksMkJBQTJCO0VBQzNCLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdXNlci91cGRhdGUtdXNlci91cGRhdGUtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1kaXYge1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNpbWFnZS13cmFwcGVyIGlucHV0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4jaW1hZ2Utd3JhcHBlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuI3Byb2ZpbGUtaW1hZ2Uge1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LWhlaWdodDogMjUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuI2Jhc2ljLWluZm8taGVhZGluZyB7XHJcbiAgICBjb2xvcjogIzNGNEQ2NztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/demo/user/update-user/update-user.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/demo/user/update-user/update-user.component.ts ***!
  \****************************************************************/
/*! exports provided: UpdateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserComponent", function() { return UpdateUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








let UpdateUserComponent = class UpdateUserComponent {
    constructor(formBuilder, user, currentRoute) {
        this.formBuilder = formBuilder;
        this.user = user;
        this.currentRoute = currentRoute;
        this.fileData = null;
        this.previewUrl = null;
        this.fileUploadProgress = null;
        this.uploadedFilePath = null;
        this.uploadAPI = `${_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl}/user/update/image`;
        this.title = 'budsbankadminpanel';
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({
            'url': this.uploadAPI,
            itemAlias: 'image',
            allowedFileType: ['image']
        });
        this.updateUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    ngOnInit() {
        this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
        this.uploader.onCompleteItem = (item, response, status, headers) => {
            console.log(item.file.name);
        };
        this.updateUserForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            first_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            last_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            image: [null],
            user_id: ['']
        });
        this.currentRoute.params.subscribe(params => {
            this.user.getUserById(params.id).then(response => {
                if (response['status'] === 200) {
                    if (response['data'].length > 0) {
                        this.userProfile = response['data'][0];
                        this.updateUserForm.controls['username'].setValue(this.userProfile.username);
                        this.updateUserForm.controls['email'].setValue(this.userProfile.email);
                        this.updateUserForm.controls['first_name'].setValue(this.userProfile.first_name);
                        this.updateUserForm.controls['last_name'].setValue(this.userProfile.last_name);
                        this.updateUserForm.controls['phone'].setValue(this.userProfile.phone);
                        this.updateUserForm.controls['image'].setValue(this.userProfile.image);
                        this.updateUserForm.controls['user_id'].setValue(this.userProfile.id);
                    }
                }
                else {
                    console.log(response);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Error', 'Auth Provider is not available', 'error');
                }
            });
        });
    }
    get username() {
        return this.updateUserForm.get('username');
    }
    get email() {
        return this.updateUserForm.get('email');
    }
    get first_name() {
        return this.updateUserForm.get('first_name');
    }
    get last_name() {
        return this.updateUserForm.get('last_name');
    }
    get phone() {
        return this.updateUserForm.get('phone');
    }
    get image() {
        return this.updateUserForm.get('image');
    }
    get user_id() {
        return this.updateUserForm.get('user_id');
    }
    fileProgress(fileInput) {
        this.fileData = fileInput.target.files[0];
        this.preview();
    }
    preview() {
        var mimeType = this.fileData.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(this.fileData);
        reader.onload = (_event) => {
            this.previewUrl = reader.result;
        };
    }
    onUpdateUserSubmit() {
        if (!this.updateUserForm.invalid) {
            var data = this.updateUserForm.value;
            data['user_id'] = this.userProfile.id;
            this.user.update(data).then(updateResponse => {
                if (updateResponse['status'] === 200) {
                    if (this.fileData) {
                        this.uploader.onBuildItemForm = (fileItem, form) => {
                            form.append('userId', updateResponse['user'].id);
                        };
                        this.uploader.uploadAll();
                        this.uploader.onSuccessItem = (item, response, status, headers) => {
                            if (response) {
                                var formatedResponse = JSON.parse(response);
                                if (formatedResponse['status'] !== 200) {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Error', `${formatedResponse['message']}`, 'error');
                                }
                            }
                        };
                    }
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Success', "User Updated Successfully", 'success');
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Error', `${updateResponse['message']}`, 'error');
                }
            });
        }
    }
};
UpdateUserComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
UpdateUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/user/update-user/update-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-user.component.scss */ "./src/app/demo/user/update-user/update-user.component.scss")).default]
    })
], UpdateUserComponent);



/***/ }),

/***/ "./src/app/demo/user/update-user/update-user.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/demo/user/update-user/update-user.module.ts ***!
  \*************************************************************/
/*! exports provided: UpdateUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserModule", function() { return UpdateUserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _update_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-user.component */ "./src/app/demo/user/update-user/update-user.component.ts");
/* harmony import */ var _update_user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-user-routing.module */ "./src/app/demo/user/update-user/update-user-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "./node_modules/@sweetalert2/ngx-sweetalert2/fesm2015/sweetalert2-ngx-sweetalert2.js");









let UpdateUserModule = class UpdateUserModule {
};
UpdateUserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_update_user_component__WEBPACK_IMPORTED_MODULE_3__["UpdateUserComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _update_user_routing_module__WEBPACK_IMPORTED_MODULE_4__["UpdateUserRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
            _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_8__["SweetAlert2Module"]
        ]
    })
], UpdateUserModule);



/***/ })

}]);
//# sourceMappingURL=update-user-update-user-module-es2015.js.map