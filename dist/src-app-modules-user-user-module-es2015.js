(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-user-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-edit/user-edit.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-edit/user-edit.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n    <div class=\"container-fluid\">\n      <div class=\"header-body\">\n        <!-- Card stats -->\n        \n      </div>\n    </div>\n  </div>\n  <!-- Page content -->\n  <div class=\"container-fluid mt--7\">\n  <div class=\"row\">\n    <div class=\"col-xl-12 order-xl-1\">\n      <form role=\"form\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\n        <div class=\"card bg-secondary shadow\">\n          <div class=\"card-header bg-white border-0\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-8\">\n                <h3 class=\"mb-0\">Kullanıcı Ekle</h3>\n              </div>\n              <div class=\"col-4 text-right\">\n                <button type=\"submit\" class=\"btn btn-sm btn-primary\">Kaydet</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-body\">\n\n            <h6 class=\"heading-small text-muted mb-4\">Kişisel Bilgiler</h6>\n            <div class=\"pl-lg-4\">\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-username\">Kullanıcı Adı</label>\n                    <input type=\"text\" formControlName=\"userName\" id=\"input-username\" name=\"userName\"\n                      class=\"form-control form-control-alternative\">\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-password\">Şifre</label>\n                    <input type=\"password\" formControlName=\"password\" id=\"input-password\" name=\"password\"\n                      class=\"form-control form-control-alternative\">\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-repassword\">Şifre Tekrar</label>\n                    <input type=\"password\" formControlName=\"rePassword\" id=\"input-repassword\"  name=\"rePassword\"\n                      class=\"form-control form-control-alternative\" >\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-first-name\">Adı</label>\n                    <input type=\"text\" formControlName=\"firstName\" id=\"input-first-name\" name=\"firstName\"\n                      class=\"form-control form-control-alternative\">\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-last-name\">Soyadı</label>\n                    <input type=\"text\" formControlName=\"lastName\" id=\"input-last-name\"  name=\"lastName\"\n                      class=\"form-control form-control-alternative\" >\n                  </div>\n                </div>\n              </div>\n\n\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\" >\n                    <label *ngIf=\"account.isAdmin()\">\n                        <input type=\"radio\"  value=\"ADMIN\" formControlName=\"role\" (change)=\"handleChange($event.target.value)\">\n                        <span>Admin</span>\n                    </label>\n                    <label>\n                      <input type=\"radio\" value=\"SUPERVISOR\" formControlName=\"role\" (change)=\"handleChange($event.target.value)\">\n                      <span>Supervisor</span>\n                  </label>\n                    <label>\n                        <input type=\"radio\" value=\"STAFF\" formControlName=\"role\" (change)=\"handleChange($event.target.value)\">\n                        <span>Staff</span>\n                    </label>\n                  </div>\n                </div>\n                <div class=\"col-lg-6\" *ngIf=\"account.isAdmin() && branches && (radioRole == 'STAFF' || radioRole == 'SUPERVISOR')\">\n                    <div class=\"form-group\">\n                        <label class=\"form-control-label\" for=\"input-branches\">Şubeler</label>\n                      <select id=\"input-branches\" class=\"form-control form-control-alternative\" formControlName=\"branches\"  >\n                        <option *ngFor=\"let b of branches\" [value]=\"b.id\" >{{ b.name }}</option>\n                       </select> \n                    </div>\n                </div>    \n\n\n              </div>\n\n            </div>\n            <hr class=\"my-4\" />\n         \n          </div>\n        </div>\n        </form>\n    </div>\n  </div>\n</div>\n\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-item/user-item.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-item/user-item.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<th scope=\"row\">\n    <div class=\"media align-items-center\">\n      <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">\n        <img alt=\"Image placeholder\" src=\"../assets/img/theme/bootstrap.jpg\">\n      </a>\n      <div class=\"media-body\">\n        <span class=\"mb-0 text-sm\">{{ user.userName }}</span>\n      </div>\n    </div>\n  </th>\n  <th scope=\"row\">\n    <div class=\"media align-items-center\">\n      <div class=\"media-body\">\n        <span class=\"mb-0 text-sm\">{{ user.firstName }}</span>\n      </div>\n    </div>\n  </th>\n  <th scope=\"row\">\n    <div class=\"media align-items-center\">\n      <div class=\"media-body\">\n        <span class=\"mb-0 text-sm\">{{ user.lastName  }}</span>\n      </div>\n    </div>\n  </th>\n  <th scope=\"row\">\n    <div class=\"media align-items-center\">\n      <div class=\"media-body\">\n        <span class=\"mb-0 text-sm\">{{ user.email  }}</span>\n      </div>\n    </div>\n  </th>\n  <th scope=\"row\">\n    <div class=\"media align-items-center\">\n      <div class=\"media-body\">\n        <span class=\"mb-0 text-sm\">{{ user.roleType.join(', ') }}</span>\n      </div>\n    </div>\n  </th>\n  <td class=\"text-right\">\n    <div ngbDropdown placement=\"bottom-right\">\n      <a class=\"btn btn-sm btn-icon-only text-light\" ngbDropdownToggle>\n        <i class=\"fas fa-ellipsis-v\"></i>\n      </a>\n      <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\n        <a class=\"dropdown-item\" [routerLink]=\"['edit', user.id]\">Editle</a>\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Pasife Çek</a>\n        <a class=\"dropdown-item\" style=\"color:red\" (click)=\"remove(user.id)\">Sil</a>\n      </div>\n    </div>\n  </td>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-list/user-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-list/user-list.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n    <div class=\"container-fluid\">\n      <div class=\"header-body\">\n        <!-- Card stats -->\n        \n      </div>\n    </div>\n  </div>\n  <!-- Page content -->\n  <div class=\"container-fluid mt--7\">\n    <!-- Table -->\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"card shadow\">\n          <div class=\"card-header border-0\">\n            <div class=\"row align-items-center\">\n              <div class=\"col\">\n                <h3 class=\"mb-0\">Kullanıcı Listesi</h3>\n              </div>\n              <div class=\"col text-right\">\n                <a href=\"#!\" class=\"btn btn-sm btn-primary\" [routerLink]=\"['add']\">Oluştur</a>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"table-responsive\">\n            <table class=\"table align-items-center table-flush\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\">Kullanıcı Adı:</th>\n                  <th scope=\"col\">Adı</th>\n                  <th scope=\"col\">Soyadı</th>\n                  <th scope=\"col\">Email</th>\n                  <th scope=\"col\">Rol</th>\n                  <th scope=\"col\"></th>\n                </tr>\n              </thead>\n              <tbody style=\"padding: 20px;\">\n                <ng-container  *ngFor=\"let userEl of users;\" >\n                  <tr app-user-item *ngIf=\"userEl.id != myProfile.accountDetail.id\" [user]='userEl'></tr>\n              </ng-container>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"card-footer py-4\">\n            <nav aria-label=\"...\">\n              <ul class=\"pagination justify-content-end mb-0\">\n  \n                \n                \n              </ul>\n            </nav>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Dark table -->\n   \n  </div>\n  ");

/***/ }),

/***/ "./src/app/modules/core/resolver/user-edit-resolver.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/core/resolver/user-edit-resolver.service.ts ***!
  \*********************************************************************/
/*! exports provided: UserEditResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditResolver", function() { return UserEditResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/modules/core/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let UserEditResolver = class UserEditResolver {
    constructor(userService) {
        this.userService = userService;
    }
    resolve(route, state) {
        return new Promise((resolve, rejects) => {
            this.userService.getCompanyUser(route.params['id']).subscribe(resData => {
                resolve(resData);
            });
        });
    }
};
UserEditResolver.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }
];
UserEditResolver = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
], UserEditResolver);



/***/ }),

/***/ "./src/app/modules/core/resolver/user-resolver.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/core/resolver/user-resolver.service.ts ***!
  \****************************************************************/
/*! exports provided: UserResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolverService", function() { return UserResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/modules/core/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let UserResolverService = class UserResolverService {
    constructor(userService) {
        this.userService = userService;
    }
    resolve(route, state) {
        return new Promise((resolve, reject) => {
            this.userService.getCompanyUsers().subscribe(resData => {
                console.log("resolve");
                resolve(resData);
            });
        });
    }
};
UserResolverService.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }
];
UserResolverService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
], UserResolverService);



/***/ }),

/***/ "./src/app/modules/core/services/branch.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/core/services/branch.service.ts ***!
  \*********************************************************/
/*! exports provided: BranchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchService", function() { return BranchService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _constant_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constant/constant */ "./src/app/modules/core/constant/constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let BranchService = class BranchService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.companyBranches = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.constant = new _constant_constant__WEBPACK_IMPORTED_MODULE_4__["Constant"]();
    }
    getAllBranchForList() {
        return this.httpClient.get(this.constant.SERVICE_URL + "/manage/branch/all").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(resData => {
            this.companyBranches.next(resData);
        }));
    }
    getBranch(id) {
        return this.httpClient.get(this.constant.SERVICE_URL + "/manage/branch", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('id', '' + id)
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    updateBranch(branch) {
        return this.httpClient.post(this.constant.SERVICE_URL + "/manage/branch", branch).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    removeBranch(id) {
        return this.httpClient.delete(this.constant.SERVICE_URL + "/manage/branch", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('id', '' + id)
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
BranchService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
];
BranchService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
], BranchService);



/***/ }),

/***/ "./src/app/modules/core/services/user.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/core/services/user.service.ts ***!
  \*******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _constant_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constant/constant */ "./src/app/modules/core/constant/constant.ts");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/modules/core/services/local-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let UserService = class UserService {
    constructor(httpClient, localStorageService) {
        this.httpClient = httpClient;
        this.localStorageService = localStorageService;
        this.constant = new _constant_constant__WEBPACK_IMPORTED_MODULE_4__["Constant"]();
        this.userList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    ngOnInit() {
    }
    getCompanyUser(userId) {
        return this.httpClient.get(this.constant.SERVICE_URL + '/manage/user', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('id', '' + userId)
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(resData => {
            console.log(resData);
            this.user.next(resData);
        }));
    }
    getCompanyUsers() {
        return this.httpClient.get(this.constant.SERVICE_URL + '/manage/user/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(resData => {
            let userListTemp = [];
            const response = JSON.parse(JSON.stringify(resData));
            response.forEach(element => {
                userListTemp.push(element);
            });
            this.userList.next(userListTemp);
        }));
    }
    registerUserForCompany(userInput) {
        return this.httpClient.post(this.constant.SERVICE_URL + '/manage/user', userInput).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    removeUserForCompany(userId) {
        return this.httpClient.delete(this.constant.SERVICE_URL + '/manage/user', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('id', '' + userId)
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
    { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] }
];
UserService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]])
], UserService);



/***/ }),

/***/ "./src/app/modules/user/user-edit/user-edit.component.css":
/*!****************************************************************!*\
  !*** ./src/app/modules/user/user-edit/user-edit.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci91c2VyLWVkaXQvdXNlci1lZGl0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/user/user-edit/user-edit.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/user/user-edit/user-edit.component.ts ***!
  \***************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/modules/core/services/auth.service.ts");
/* harmony import */ var _core_services_branch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/branch.service */ "./src/app/modules/core/services/branch.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/user.service */ "./src/app/modules/core/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let UserEditComponent = class UserEditComponent {
    constructor(authService, route, router, branchService, userService) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.branchService = branchService;
        this.userService = userService;
        this.editMode = false;
        this.branchesFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    ngOnInit() {
        this.account = this.authService.getAccount();
        this.editMode = this.route.snapshot.paramMap.get('id') ? true : false;
        this.branchService.getAllBranchForList().subscribe(resData => {
            this.branches = resData;
        });
        let userName = '';
        let firstName = '';
        let lastName = '';
        let role = '';
        if (this.editMode) {
            this.userService.user.subscribe(resData => {
                this.radioRole = resData.roleType[0];
                userName = resData.userName;
                firstName = resData.firstName;
                lastName = resData.lastName;
                role = this.radioRole;
                if (resData.branchId) {
                    this.branchesFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](resData.branchId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                }
            });
        }
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](userName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.conditionalValidator((() => !this.editMode), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)),
            rePassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.conditionalValidator((() => !this.editMode), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](role),
            branches: this.branchesFormControl
        });
    }
    save() {
        if (this.form.valid) {
            console.log(this.form.value);
            const registerForm = this.form.value;
            if (this.editMode) {
                registerForm.id = this.route.snapshot.params['id'];
            }
            this.userService.registerUserForCompany(registerForm).subscribe(resData => {
                this.router.navigate(['/settings/user']);
            });
        }
        else {
            console.log('not valid');
        }
    }
    handleChange(event) {
        this.radioRole = event;
        if ((event == 'STAFF' || event == 'SUPERVISOR') && !this.branches) {
            this.branchService.getAllBranchForList().subscribe();
        }
    }
    conditionalValidator(condition, validator) {
        return (control) => {
            if (!condition()) {
                return null;
            }
            return validator(control);
        };
    }
};
UserEditComponent.ctorParameters = () => [
    { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_services_branch_service__WEBPACK_IMPORTED_MODULE_4__["BranchService"] },
    { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
UserEditComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-user-edit',
        template: __importDefault(__webpack_require__(/*! raw-loader!./user-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-edit/user-edit.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./user-edit.component.css */ "./src/app/modules/user/user-edit/user-edit.component.css")).default]
    }),
    __metadata("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_services_branch_service__WEBPACK_IMPORTED_MODULE_4__["BranchService"], _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
], UserEditComponent);



/***/ }),

/***/ "./src/app/modules/user/user-item/user-item.component.css":
/*!****************************************************************!*\
  !*** ./src/app/modules/user/user-item/user-item.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci91c2VyLWl0ZW0vdXNlci1pdGVtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/user/user-item/user-item.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/user/user-item/user-item.component.ts ***!
  \***************************************************************/
/*! exports provided: UserItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserItemComponent", function() { return UserItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/user.service */ "./src/app/modules/core/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let UserItemComponent = class UserItemComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
    }
    remove(userId) {
        this.userService.removeUserForCompany(userId).subscribe(resData => {
            this.userService.getCompanyUsers().subscribe();
        });
    }
};
UserItemComponent.ctorParameters = () => [
    { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], UserItemComponent.prototype, "user", void 0);
UserItemComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: '[app-user-item]',
        template: __importDefault(__webpack_require__(/*! raw-loader!./user-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-item/user-item.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./user-item.component.css */ "./src/app/modules/user/user-item/user-item.component.css")).default]
    }),
    __metadata("design:paramtypes", [_core_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
], UserItemComponent);



/***/ }),

/***/ "./src/app/modules/user/user-list/user-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/modules/user/user-list/user-list.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/user/user-list/user-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/user/user-list/user-list.component.ts ***!
  \***************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/modules/core/services/auth.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/user.service */ "./src/app/modules/core/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let UserListComponent = class UserListComponent {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.account.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(resData => {
            this.myProfile = resData;
        });
        this.userService.userList.subscribe(resData => {
            this.users = resData;
        });
    }
};
UserListComponent.ctorParameters = () => [
    { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
UserListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-user-list',
        template: __importDefault(__webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-list/user-list.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./user-list.component.css */ "./src/app/modules/user/user-list/user-list.component.css")).default]
    }),
    __metadata("design:paramtypes", [_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], UserListComponent);



/***/ }),

/***/ "./src/app/modules/user/user.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/user/user.module.ts ***!
  \*********************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _core_resolver_user_edit_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/resolver/user-edit-resolver.service */ "./src/app/modules/core/resolver/user-edit-resolver.service.ts");
/* harmony import */ var _core_resolver_user_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/resolver/user-resolver.service */ "./src/app/modules/core/resolver/user-resolver.service.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/modules/user/user-edit/user-edit.component.ts");
/* harmony import */ var _user_item_user_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-item/user-item.component */ "./src/app/modules/user/user-item/user-item.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/modules/user/user-list/user-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};










let UserModule = class UserModule {
};
UserModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_9__["UserListComponent"],
            _user_item_user_item_component__WEBPACK_IMPORTED_MODULE_8__["UserItemComponent"],
            _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__["UserEditComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                { path: '', component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_9__["UserListComponent"], resolve: [_core_resolver_user_resolver_service__WEBPACK_IMPORTED_MODULE_6__["UserResolverService"]] },
                { path: 'add', component: _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__["UserEditComponent"] },
                { path: 'edit/:id', component: _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__["UserEditComponent"], resolve: [_core_resolver_user_edit_resolver_service__WEBPACK_IMPORTED_MODULE_5__["UserEditResolver"]], data: { editMode: true } }
            ])
        ],
        exports: []
    })
], UserModule);



/***/ })

}]);
//# sourceMappingURL=src-app-modules-user-user-module-es2015.js.map