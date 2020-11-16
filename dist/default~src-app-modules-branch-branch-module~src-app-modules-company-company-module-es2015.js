(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-modules-branch-branch-module~src-app-modules-company-company-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/branch/branch-item/branch-item.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/branch/branch-item/branch-item.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<td>\n    <div class=\"media align-items-center\">\n        <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">\n        <img alt=\"Image placeholder\" src=\"../assets/img/theme/bootstrap.jpg\">\n        </a>\n        <div class=\"media-body\">\n        <span class=\"mb-0 text-sm\">{{ branch.name }}</span>\n        </div>\n    </div>\n</td>\n<td>\n{{ branch.fullAddress }}\n</td>\n \n  \n<td class=\"text-right\">\n<div ngbDropdown placement=\"bottom-right\">\n    <a class=\"btn btn-sm btn-icon-only text-light\" ngbDropdownToggle>\n    <i class=\"fas fa-ellipsis-v\"></i>\n    </a>\n    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\n    <a class=\"dropdown-item\" [routerLink]=\"['edit', branch.id]\" >Editle</a>\n    <a class=\"dropdown-item\" style=\"color:red\" (click)=\"remove(branch.id)\">Sil</a>\n   \n    </div>\n</div>\n</td>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/branch/branch-list/branch-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/branch/branch-list/branch-list.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <!-- Table -->\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"card shadow\">\n          <div class=\"card-header border-0\">\n            <div class=\"row align-items-center\">\n              <div class=\"col\">\n                <h3 class=\"mb-0\">Şube Bilgileri</h3>\n              </div>\n              <div class=\"col text-right\">\n                <a href=\"#!\" class=\"btn btn-sm btn-primary\" [routerLink]=\"['/settings/branch/add']\">Oluştur</a>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"table-responsive\">\n            <table class=\"table align-items-center table-flush\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\">Şube Adı</th>\n                  <th scope=\"col\">Şube Adresi</th>\n                  <th scope=\"col\"></th>\n                </tr>\n              </thead>\n              <tbody style=\"padding: 20px;\">\n                \n                <tr app-branch-item \n                    *ngFor=\"let branchEl of branches; let i = index\"\n                    [branch]=\"branchEl\" \n                    [index]=\"i\"></tr>\n                \n               \n              </tbody>\n            </table>\n          </div>\n          <div class=\"card-footer py-4\">\n            <nav aria-label=\"...\">\n              <ul class=\"pagination justify-content-end mb-0\">\n  \n                <!--\n                <li class=\"page-item \" [ngClass]=\"(pageable?.first) ? 'disabled' : ''\">\n                  <div class=\"page-link\" (click)=\"changePage(0)\" tabindex=\"-1\">\n                    <i class=\"fas fa-angle-left\"></i>\n                    <span class=\"sr-only\">Previous</span>\n                  </div>\n                </li>\n                <li *ngFor=\"let number of counter(pageable?.totalPages); let i = index\" \n                  class=\"page-item\" [ngClass]=\"(pageable?.number == i) ? 'active' : ''\">\n                    <div class=\"page-link\"  (click)=\"changePage(i)\"> {{ i+1 }}</div>\n                </li>\n  \n                <li class=\"page-item\" [ngClass]=\"(pageable?.last) ? 'disabled' : ''\">\n                  <div class=\"page-link\" (click)=\"changePage(pageable?.totalPages-1)\">\n                    <i class=\"fas fa-angle-right\"></i>\n                    <span class=\"sr-only\">Next</span>\n                  </div>\n                </li>\n                -->\n              </ul>\n            </nav>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Dark table -->\n   \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/branch/edit/edit.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/branch/edit/edit.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-8 pt-5 pt-lg-8 d-flex align-items-center\"\n  style=\"min-height: 600px; background-image: url(assets/img/theme/profile-cover.jpg); background-size: cover; background-position: center top;\">\n  <!-- Mask -->\n  <span class=\"mask bg-gradient-danger opacity-8\"></span>\n  <!-- Header container -->\n  <div class=\"container-fluid d-flex align-items-center\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-10\">\n        <div class=\"col-md-12 col-lg-12\">\n          <p class=\"text-white mt-0 mb-2\">Şirket Bilgileri</p>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid mt--7\">\n  <div class=\"row justify-content-md-center\">\n    <div class=\"col-xl-8 order-xl-2\">\n      <form role=\"form\" [formGroup]=\"formBranch\" (ngSubmit)=\"addBranch()\">\n        <div class=\"card bg-secondary shadow\">\n            <div class=\"card-header bg-white border-0\">\n            <div class=\"row align-items-center\">\n                <div class=\"col-8\">\n                <h3 class=\"mb-0\">Şube Kayıt</h3>\n                </div>\n                <div class=\"col-4 text-right\">\n                <button type=\"submit\" class=\"btn btn-sm btn-primary\">Kaydet</button>\n                </div>\n            </div>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"pl-lg-4\"></div>\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <div class=\"form-group\">\n                            <label class=\"form-control-label\" for=\"name\">Şube İsmi :</label>\n                            <input type=\"text\" id=\"name\" formControlName=\"name\" name=\"name\"  class=\"form-control form-control-alternative\"\n                            placeholder=\"name\" >\n                        </div>\n                    </div>\n                </div>\n                \n\n                <div class=\"pl-lg-4\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <app-maps [inputMaps]=\"mapsModel\" (maps)=\"setLatitude($event)\"></app-maps>\n                    </div>\n                </div>\n             \n                </div>\n                \n               \n               \n            </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/modules/branch/branch-item/branch-item.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/modules/branch/branch-item/branch-item.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYnJhbmNoL2JyYW5jaC1pdGVtL2JyYW5jaC1pdGVtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/branch/branch-item/branch-item.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/branch/branch-item/branch-item.component.ts ***!
  \*********************************************************************/
/*! exports provided: BranchItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchItemComponent", function() { return BranchItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/branch.service */ "./src/app/modules/core/services/branch.service.ts");
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


let BranchItemComponent = class BranchItemComponent {
    constructor(branchService) {
        this.branchService = branchService;
    }
    ngOnInit() {
    }
    remove(id) {
        this.branchService.removeBranch(id).subscribe();
    }
};
BranchItemComponent.ctorParameters = () => [
    { type: _core_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('branch'),
    __metadata("design:type", Object)
], BranchItemComponent.prototype, "branch", void 0);
BranchItemComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: '[app-branch-item]',
        template: __importDefault(__webpack_require__(/*! raw-loader!./branch-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/branch/branch-item/branch-item.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./branch-item.component.css */ "./src/app/modules/branch/branch-item/branch-item.component.css")).default]
    }),
    __metadata("design:paramtypes", [_core_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]])
], BranchItemComponent);



/***/ }),

/***/ "./src/app/modules/branch/branch-list/branch-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/modules/branch/branch-list/branch-list.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYnJhbmNoL2JyYW5jaC1saXN0L2JyYW5jaC1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/branch/branch-list/branch-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/branch/branch-list/branch-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: BranchListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchListComponent", function() { return BranchListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/branch.service */ "./src/app/modules/core/services/branch.service.ts");
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


let BranchListComponent = class BranchListComponent {
    constructor(branchService) {
        this.branchService = branchService;
    }
    ngOnInit() {
        let branchSubscriber;
        branchSubscriber = this.branchService.companyBranches.subscribe(resData => {
            this.branches = resData;
        });
    }
};
BranchListComponent.ctorParameters = () => [
    { type: _core_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"] }
];
BranchListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-branch-list',
        template: __importDefault(__webpack_require__(/*! raw-loader!./branch-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/branch/branch-list/branch-list.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./branch-list.component.css */ "./src/app/modules/branch/branch-list/branch-list.component.css")).default]
    }),
    __metadata("design:paramtypes", [_core_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]])
], BranchListComponent);



/***/ }),

/***/ "./src/app/modules/branch/branch.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/branch/branch.module.ts ***!
  \*************************************************/
/*! exports provided: BranchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchModule", function() { return BranchModule; });
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _core_components_maps_maps_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/components/maps/maps.component */ "./src/app/modules/core/components/maps/maps.component.ts");
/* harmony import */ var _core_resolver_branch_edit_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/resolver/branch-edit-resolver.service */ "./src/app/modules/core/resolver/branch-edit-resolver.service.ts");
/* harmony import */ var _branch_item_branch_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./branch-item/branch-item.component */ "./src/app/modules/branch/branch-item/branch-item.component.ts");
/* harmony import */ var _branch_list_branch_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./branch-list/branch-list.component */ "./src/app/modules/branch/branch-list/branch-list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/modules/branch/edit/edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











let BranchModule = class BranchModule {
};
BranchModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__["EditComponent"],
            _core_components_maps_maps_component__WEBPACK_IMPORTED_MODULE_6__["MapsComponent"],
            _branch_list_branch_list_component__WEBPACK_IMPORTED_MODULE_9__["BranchListComponent"],
            _branch_item_branch_item_component__WEBPACK_IMPORTED_MODULE_8__["BranchItemComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_0__["AgmCoreModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: 'add', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__["EditComponent"]
                },
                {
                    path: 'edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__["EditComponent"], resolve: [_core_resolver_branch_edit_resolver_service__WEBPACK_IMPORTED_MODULE_7__["BranchEditResolver"]]
                }
            ])
        ],
        exports: [
            _core_components_maps_maps_component__WEBPACK_IMPORTED_MODULE_6__["MapsComponent"],
            _branch_list_branch_list_component__WEBPACK_IMPORTED_MODULE_9__["BranchListComponent"]
        ]
    })
], BranchModule);



/***/ }),

/***/ "./src/app/modules/branch/edit/edit.component.css":
/*!********************************************************!*\
  !*** ./src/app/modules/branch/edit/edit.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYnJhbmNoL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/branch/edit/edit.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/branch/edit/edit.component.ts ***!
  \*******************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/branch.service */ "./src/app/modules/core/services/branch.service.ts");
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




let EditComponent = class EditComponent {
    constructor(route, router, branchService) {
        this.route = route;
        this.router = router;
        this.branchService = branchService;
    }
    ngOnInit() {
        this.editMode = this.route.snapshot.paramMap.get('id') ? true : false;
        this.formBranch = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        if (this.editMode) {
            this.route.data.subscribe(resData => {
                this.branchOutput = resData[0];
                this.formBranch.patchValue({ name: this.branchOutput.name });
                this.branchInput = {
                    id: this.branchOutput.id,
                    fullAddress: this.branchOutput.fullAddress,
                    latitude: this.branchOutput.latitude,
                    longatitue: this.branchOutput.longatitue,
                    name: this.branchOutput.name
                };
                this.mapsModel = {
                    address: this.branchOutput.fullAddress,
                    latitude: this.branchOutput.latitude,
                    longitude: this.branchOutput.longatitue
                };
            });
        }
    }
    setLatitude(item) {
        debugger;
        if (!this.editMode) {
            this.branchInput = {
                id: null,
                fullAddress: item.address,
                latitude: item.latitude,
                longatitue: item.longitude,
                name: null
            };
        }
        else {
            this.branchInput.latitude = item.latitude;
            this.branchInput.longatitue = item.longitude;
            this.branchInput.fullAddress = item.address;
        }
    }
    addBranch() {
        if (this.formBranch.valid) {
            console.log(this.branchInput);
            debugger;
            this.branchInput.name = this.formBranch.value.name;
            this.branchService.updateBranch(this.branchInput).subscribe(resData => {
                this.router.navigate(['/settings/company']);
            });
        }
    }
};
EditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_services_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"] }
];
EditComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-edit',
        template: __importDefault(__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/branch/edit/edit.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./edit.component.css */ "./src/app/modules/branch/edit/edit.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_services_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"]])
], EditComponent);



/***/ }),

/***/ "./src/app/modules/core/resolver/branch-edit-resolver.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/core/resolver/branch-edit-resolver.service.ts ***!
  \***********************************************************************/
/*! exports provided: BranchEditResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchEditResolver", function() { return BranchEditResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/branch.service */ "./src/app/modules/core/services/branch.service.ts");
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


let BranchEditResolver = class BranchEditResolver {
    constructor(branchService) {
        this.branchService = branchService;
    }
    resolve(route, state) {
        return new Promise((resolve, reject) => {
            return this.branchService.getBranch(route.params['id']).subscribe(resData => {
                resolve(resData);
            });
        });
    }
};
BranchEditResolver.ctorParameters = () => [
    { type: _services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"] }
];
BranchEditResolver = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]])
], BranchEditResolver);



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



/***/ })

}]);
//# sourceMappingURL=default~src-app-modules-branch-branch-module~src-app-modules-company-company-module-es2015.js.map