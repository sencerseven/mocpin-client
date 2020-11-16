(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loading\" id=\"spinner\" style=\"position: absolute; z-index: 1 important!;\">\n    <app-loading-spinner></app-loading-spinner>\n</div>\n<router-outlet ></router-outlet>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/core/components/loading-spinner/loading-spinner.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/core/components/loading-spinner/loading-spinner.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"smt-spinner-circle\">\n    <div class=\"smt-spinner\"></div>\n    <div class=\"smt-spinner-inner-circle\"></div>\n    <div style=\"text-align: center;\">Yükleniyor</div> \n </div>");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/auth/auth.module": [
		"./src/app/modules/auth/auth.module.ts",
		"modules-auth-auth-module"
	],
	"./modules/core/components/core.module": [
		"./src/app/modules/core/components/core.module.ts",
		"default~modules-core-components-core-module~src-app-modules-branch-branch-module~src-app-modules-com~9c33fe46",
		"default~modules-core-components-core-module~src-app-modules-account-account-module",
		"modules-core-components-core-module"
	],
	"src/app/modules/account/account.module": [
		"./src/app/modules/account/account.module.ts",
		"default~modules-core-components-core-module~src-app-modules-account-account-module"
	],
	"src/app/modules/branch/branch.module": [
		"./src/app/modules/branch/branch.module.ts",
		"default~modules-core-components-core-module~src-app-modules-branch-branch-module~src-app-modules-com~9c33fe46",
		"default~src-app-modules-branch-branch-module~src-app-modules-company-company-module"
	],
	"src/app/modules/company/company.module": [
		"./src/app/modules/company/company.module.ts",
		"default~modules-core-components-core-module~src-app-modules-branch-branch-module~src-app-modules-com~9c33fe46",
		"default~src-app-modules-branch-branch-module~src-app-modules-company-company-module",
		"src-app-modules-company-company-module"
	],
	"src/app/modules/loyalty/loyalty.module": [
		"./src/app/modules/loyalty/loyalty.module.ts",
		"src-app-modules-loyalty-loyalty-module"
	],
	"src/app/modules/settings/settings.module": [
		"./src/app/modules/settings/settings.module.ts",
		"src-app-modules-settings-settings-module"
	],
	"src/app/modules/user/user.module": [
		"./src/app/modules/user/user.module.ts",
		"src-app-modules-user-user-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#spinner {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  background-color: black;\n  opacity: 0.7;\n  z-index: 1;  \n}\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NwaW5uZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG9wYWNpdHk6IDAuNztcbiAgei1pbmRleDogMTsgIFxufVxuXG5cblxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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


let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'AGM project';
        this.loading = true;
        this.router.events.subscribe((e) => {
            console.log("navigate");
            this.navigationInterceptor(e);
        });
    }
    // Shows and hides the loading spinner during RouterEvent changes
    navigationInterceptor(event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
            this.loading = true;
        }
        setTimeout(() => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.loading = false;
            }
            // Set loading state to false in both of the below events to hide the spinner in case a request fails
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]) {
                this.loading = false;
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
                this.loading = false;
            }
        }, 300);
    }
    ngOnInit() {
        this.title = 'My first AGM project';
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _modules_core_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/core/components/loading-spinner/loading-spinner.component */ "./src/app/modules/core/components/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _modules_core_interceptors_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/core/interceptors/auth-interceptor.service */ "./src/app/modules/core/interceptors/auth-interceptor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};










let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _modules_core_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__["LoadingSpinnerComponent"]
        ],
        providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _modules_core_interceptors_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptorService"], multi: true }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modules_core_enums_Role_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/core/enums/Role.enum */ "./src/app/modules/core/enums/Role.enum.ts");
/* harmony import */ var _modules_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/core/guard/auth.guard */ "./src/app/modules/core/guard/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






const routes = [
    {
        path: '',
        loadChildren: './modules/core/components/core.module#CoreModule',
        canActivate: [_modules_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        data: { roles: [_modules_core_enums_Role_enum__WEBPACK_IMPORTED_MODULE_4__["Role"].ADMIN, _modules_core_enums_Role_enum__WEBPACK_IMPORTED_MODULE_4__["Role"].SUPERVISOR] }
    },
    {
        path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                useHash: false
            })
        ],
        exports: [],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/modules/core/components/loading-spinner/loading-spinner.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/core/components/loading-spinner/loading-spinner.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".smt-spinner-circle {\r\n  width: 50px;\r\n  height: 50px;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  background: blue;\r\n  border-radius: 50%;\r\n}\r\n\r\n.smt-spinner-inner-circle {\r\n  width: 92%;\r\n  height: 92%;\r\n  background: red;\r\n  border-radius: 50%;\r\n  margin: auto;\r\n  vertical-align: middle;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n\r\n.smt-spinner {\r\n  height: 0;\r\n  width: 0;\r\n  border-radius: 50%;\r\n  border-right: 25px solid rgba(255,255,255,0.6);\r\n  border-top: 25px solid transparent;\r\n  border-left: 25px solid transparent;\r\n  border-bottom: 25px solid transparent;\r\n  -webkit-animation: rotate--spinner 1.6s infinite;\r\n          animation: rotate--spinner 1.6s infinite;\r\n}\r\n\r\n@-webkit-keyframes rotate--spinner {\r\n  from {\r\n    -webkit-transform: rotate(0);\r\n            transform: rotate(0);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes rotate--spinner {\r\n  from {\r\n    -webkit-transform: rotate(0);\r\n            transform: rotate(0);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3JlL2NvbXBvbmVudHMvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsUUFBUTtFQUNSLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7QUFDVjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLDhDQUE4QztFQUM5QyxrQ0FBa0M7RUFDbEMsbUNBQW1DO0VBQ25DLHFDQUFxQztFQUNyQyxnREFBd0M7VUFBeEMsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0U7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb21wb25lbnRzL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbXQtc3Bpbm5lci1jaXJjbGUge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kOiBibHVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnNtdC1zcGlubmVyLWlubmVyLWNpcmNsZSB7XHJcbiAgd2lkdGg6IDkyJTtcclxuICBoZWlnaHQ6IDkyJTtcclxuICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5zbXQtc3Bpbm5lciB7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItcmlnaHQ6IDI1cHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xyXG4gIGJvcmRlci10b3A6IDI1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDI1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBhbmltYXRpb246IHJvdGF0ZS0tc3Bpbm5lciAxLjZzIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZS0tc3Bpbm5lciB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/core/components/loading-spinner/loading-spinner.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/core/components/loading-spinner/loading-spinner.component.ts ***!
  \**************************************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
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

let LoadingSpinnerComponent = class LoadingSpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoadingSpinnerComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-loading-spinner',
        template: __importDefault(__webpack_require__(/*! raw-loader!./loading-spinner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/core/components/loading-spinner/loading-spinner.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./loading-spinner.component.css */ "./src/app/modules/core/components/loading-spinner/loading-spinner.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], LoadingSpinnerComponent);



/***/ }),

/***/ "./src/app/modules/core/constant/constant.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/core/constant/constant.ts ***!
  \***************************************************/
/*! exports provided: Constant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constant", function() { return Constant; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
class Constant {
    constructor() {
        this.SERVICE_URL = 'http://localhost:1234';
        Object.defineProperty(this, "SERVICE_URL", { value: this.SERVICE_URL });
    }
}


/***/ }),

/***/ "./src/app/modules/core/enums/Role.enum.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/core/enums/Role.enum.ts ***!
  \*************************************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Role;
(function (Role) {
    Role["USER"] = "USER";
    Role["ADMIN"] = "ADMIN";
    Role["SUPERVISOR"] = "SUPERVISOR";
})(Role || (Role = {}));


/***/ }),

/***/ "./src/app/modules/core/guard/auth.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/core/guard/auth.guard.ts ***!
  \**************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/modules/core/services/auth.service.ts");
/* harmony import */ var _services_jwttoken_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/jwttoken.service */ "./src/app/modules/core/services/jwttoken.service.ts");
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




let AuthGuard = class AuthGuard {
    constructor(authService, jwtTokenService, router) {
        this.authService = authService;
        this.jwtTokenService = jwtTokenService;
        this.router = router;
    }
    canActivate(route, state) {
        const tokenRole = this.jwtTokenService.getRole();
        const roles = this.getChildRole(route);
        debugger;
        if (!!tokenRole) {
            if (!!roles && !roles.includes(tokenRole[0])) {
                debugger;
                if (this.router.url == '/auth' || this.router.url == '/') {
                    this.router.navigate(['/auth']);
                }
                else {
                    this.router.navigate(['/']);
                }
            }
            return true;
        }
        else {
            this.router.navigate(['/auth']);
        }
    }
    getChildRole(route) {
        const hasRole = !!route.data.roles;
        let role;
        if (!hasRole && !!route.firstChild) {
            role = this.getChildRole(route.firstChild);
        }
        else {
            role = route.data.roles;
        }
        return role;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_jwttoken_service__WEBPACK_IMPORTED_MODULE_3__["JWTTokenService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_jwttoken_service__WEBPACK_IMPORTED_MODULE_3__["JWTTokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/modules/core/interceptors/auth-interceptor.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/core/interceptors/auth-interceptor.service.ts ***!
  \***********************************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_jwttoken_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/jwttoken.service */ "./src/app/modules/core/services/jwttoken.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/local-storage.service */ "./src/app/modules/core/services/local-storage.service.ts");
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







let AuthInterceptorService = class AuthInterceptorService {
    constructor(router, localStorageService, jwtTokenService) {
        this.router = router;
        this.localStorageService = localStorageService;
        this.jwtTokenService = jwtTokenService;
    }
    intercept(req, next) {
        const token = this.jwtTokenService.getJwtToken();
        // this.localStorageService.userTokenChange.pipe(take(1),exhaustMap(user =>{}));
        if (!token) {
            return next.handle(req);
        }
        const modifiedReq = req.clone({ headers: req.headers.set('Authorization', 'bearer' + token._token) });
        return next.handle(modifiedReq)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                if (event.body) {
                    const requestResponse = JSON.parse(JSON.stringify(event.body));
                    return event.clone({
                        body: requestResponse.data
                    });
                }
            }
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    if (err.error.error == 'invalid_token') {
                        this.router.navigate(['/auth']);
                    }
                }
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(err);
        }));
    }
};
AuthInterceptorService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] },
    { type: _services_jwttoken_service__WEBPACK_IMPORTED_MODULE_5__["JWTTokenService"] }
];
AuthInterceptorService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"],
        _services_jwttoken_service__WEBPACK_IMPORTED_MODULE_5__["JWTTokenService"]])
], AuthInterceptorService);



/***/ }),

/***/ "./src/app/modules/core/model/account.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/core/model/account.model.ts ***!
  \*****************************************************/
/*! exports provided: Account */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account", function() { return Account; });
/* harmony import */ var _enums_Role_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/Role.enum */ "./src/app/modules/core/enums/Role.enum.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

class Account {
    constructor(username, accountDetail, id, roleType) {
        this.id = id;
        this.username = username;
        this.accountDetail = accountDetail;
        this.roleType = roleType;
    }
    isAdmin() {
        return this.roleType.includes(_enums_Role_enum__WEBPACK_IMPORTED_MODULE_0__["Role"].ADMIN);
    }
    isSupervisor() {
        return this.roleType.includes(_enums_Role_enum__WEBPACK_IMPORTED_MODULE_0__["Role"].SUPERVISOR);
    }
}


/***/ }),

/***/ "./src/app/modules/core/model/user-token.model.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/core/model/user-token.model.ts ***!
  \********************************************************/
/*! exports provided: UserToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserToken", function() { return UserToken; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
class UserToken {
    constructor(username, _token, _tokenExpirationDate, _rtoken) {
        this.username = username;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
        this._rtoken = _rtoken;
    }
    get token() {
        if (!this._tokenExpirationDate || new Date > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }
}


/***/ }),

/***/ "./src/app/modules/core/services/auth.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/core/services/auth.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _constant_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constant/constant */ "./src/app/modules/core/constant/constant.ts");
/* harmony import */ var _model_account_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/account.model */ "./src/app/modules/core/model/account.model.ts");
/* harmony import */ var _model_user_token_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/user-token.model */ "./src/app/modules/core/model/user-token.model.ts");
/* harmony import */ var _jwttoken_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./jwttoken.service */ "./src/app/modules/core/services/jwttoken.service.ts");
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









let AuthService = class AuthService {
    constructor(jwtTokenService, router, httpClient) {
        this.jwtTokenService = jwtTokenService;
        this.router = router;
        this.httpClient = httpClient;
        this.account = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.getAccount());
        this.constant = new _constant_constant__WEBPACK_IMPORTED_MODULE_5__["Constant"]();
    }
    autoLogin() {
        const userData = JSON.parse(localStorage.getItem('auth'));
        if (!userData) {
            return;
        }
        const decodedToken = this.parseJwt(userData._rtoken);
        if (!decodedToken) {
            return;
        }
        const accountDetail = decodedToken['user_detail'];
        const account = new _model_account_model__WEBPACK_IMPORTED_MODULE_6__["Account"](decodedToken['user_name'], accountDetail);
        //   const user = new UserToken(userData.username,userData._token,userData._tokenExpirationDate,userData._rtoken);
        //  this.userToken.next(user);
        //  this.userService.getUserDetail(userData.username);
    }
    login(username, password) {
        var formData = new FormData();
        formData.append('grant_type', 'password');
        formData.append('client_id', 'mocpin');
        formData.append('client_secret', 'mocpinSecret');
        formData.append('username', username);
        formData.append('password', password);
        return this.httpClient.post(this.constant.SERVICE_URL + "/oauth/token", formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(resData => {
            console.log("hello");
            const expirationDate = new Date(new Date().getTime() + +resData.expires_in * 1000);
            const userToken = new _model_user_token_model__WEBPACK_IMPORTED_MODULE_7__["UserToken"](username, resData.access_token, expirationDate, resData.refresh_token);
            this.jwtTokenService.setToken(userToken);
            const account = this.getAccount();
            this.account.next(account);
        }));
    }
    getAccount() {
        const decodedToken = this.jwtTokenService.getDecodeToken();
        if (!!decodedToken) {
            const accountDetail = decodedToken.user_detail;
            var account = new _model_account_model__WEBPACK_IMPORTED_MODULE_6__["Account"](decodedToken['user_name'], accountDetail, null, this.jwtTokenService.getRole());
        }
        return account;
    }
    handleError(errRes) {
        let errorMessage = 'beklenmeyen hata';
        switch (errRes.error.error) {
            case 'invalid_grant':
                errorMessage = 'Kullanıcı Adı/Şifre hatası. Lütfen tekrar deneyiniz.';
                break;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
    logout() {
        this.router.navigate(['/auth']);
        this.jwtTokenService.removeToken();
    }
    parseJwt(token) {
        let jwtData = token.split('.')[1];
        let decodedJwtJsonData = window.atob(jwtData);
        let decodedJwtData = JSON.parse(decodedJwtJsonData);
        return decodedJwtData;
    }
};
AuthService.ctorParameters = () => [
    { type: _jwttoken_service__WEBPACK_IMPORTED_MODULE_8__["JWTTokenService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
];
AuthService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_jwttoken_service__WEBPACK_IMPORTED_MODULE_8__["JWTTokenService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
], AuthService);



/***/ }),

/***/ "./src/app/modules/core/services/jwttoken.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/core/services/jwttoken.service.ts ***!
  \***********************************************************/
/*! exports provided: JWTTokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWTTokenService", function() { return JWTTokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/modules/core/services/local-storage.service.ts");
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


let JWTTokenService = class JWTTokenService {
    constructor(localStorageService) {
        this.localStorageService = localStorageService;
    }
    setToken(token) {
        if (token) {
            this.localStorageService.putUserToken(token);
        }
    }
    getJwtToken() {
        this.jwtToken = JSON.parse(localStorage.getItem("AUTH"));
        return this.jwtToken;
    }
    decodeToken() {
        this.getJwtToken();
        if (!!this.jwtToken) {
            this.decodedToken = JSON.parse(window.atob(this.jwtToken._token.split(".")[1]));
        }
    }
    getDecodeToken() {
        this.decodeToken();
        return this.decodedToken;
    }
    getUser() {
        this.decodeToken();
        return this.decodedToken ? this.decodedToken.displayname : null;
    }
    getRole() {
        this.decodeToken();
        if (this.jwtToken) {
            const authorities = this.decodedToken['authorities'];
            for (let i = 0; i < authorities.length; i++) {
                authorities[i] = authorities[i].replace('ROLE_', '');
            }
            return authorities;
        }
    }
    getEmailId() {
        this.decodeToken();
        return this.decodedToken ? this.decodedToken.email : null;
    }
    getExpiryTime() {
        this.decodeToken();
        return this.decodedToken ? this.decodedToken.exp : null;
    }
    isTokenExpired() {
        const expiryTime = +this.getExpiryTime();
        if (expiryTime) {
            return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;
        }
        else {
            return false;
        }
    }
    removeToken() {
        this.jwtToken = null;
        this.decodedToken = null;
        this.localStorageService.removeTokenUser();
    }
};
JWTTokenService.ctorParameters = () => [
    { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"] }
];
JWTTokenService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]])
], JWTTokenService);



/***/ }),

/***/ "./src/app/modules/core/services/local-storage.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/core/services/local-storage.service.ts ***!
  \****************************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let LocalStorageService = class LocalStorageService {
    putUserToken(userToken) {
        localStorage.setItem('AUTH', JSON.stringify(userToken));
    }
    getUserToken() {
        return JSON.parse(localStorage.getItem("AUTH"));
    }
    removeTokenUser() {
        localStorage.removeItem('AUTH');
    }
    getProvinceList() {
        return JSON.parse(localStorage.getItem("provinceList"));
    }
    setProvinceList(province) {
        localStorage.setItem("provinceList", JSON.stringify(province));
        return JSON.parse(localStorage.getItem("provinceList"));
    }
};
LocalStorageService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
], LocalStorageService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/*!

=========================================================
* Argon Dashboard Angular - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-angular
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sence\Desktop\calisma\argon-dashboard-angular-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map