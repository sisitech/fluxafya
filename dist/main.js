(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./account/account.module": [
		"./src/app/account/account.module.ts",
		"default~account-account-module~doctors-doctors-module~form-form-module",
		"account-account-module"
	],
	"./admin/admin.module": [
		"./src/app/admin/admin.module.ts",
		"admin-admin-module"
	],
	"./cards/cards.module": [
		"./src/app/cards/cards.module.ts",
		"default~cards-cards-module~taskboard-taskboard-module",
		"cards-cards-module"
	],
	"./charts/charts.module": [
		"./src/app/charts/charts.module.ts",
		"default~charts-charts-module~dashboard-dashboard-module",
		"charts-charts-module"
	],
	"./components/components.module": [
		"./src/app/components/components.module.ts",
		"default~components-components-module~dashboard-dashboard-module~doctors-doctors-module~pharmacy-phar~08a8ea12",
		"components-components-module"
	],
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"default~components-components-module~dashboard-dashboard-module~doctors-doctors-module~pharmacy-phar~08a8ea12",
		"default~charts-charts-module~dashboard-dashboard-module",
		"dashboard-dashboard-module"
	],
	"./datatable/datatable.module": [
		"./src/app/datatable/datatable.module.ts",
		"default~datatable-datatable-module~pages-pages-module",
		"datatable-datatable-module"
	],
	"./docs/docs.module": [
		"./src/app/docs/docs.module.ts",
		"docs-docs-module"
	],
	"./doctors/doctors.module": [
		"./src/app/doctors/doctors.module.ts",
		"default~components-components-module~dashboard-dashboard-module~doctors-doctors-module~pharmacy-phar~08a8ea12",
		"default~account-account-module~doctors-doctors-module~form-form-module",
		"default~doctors-doctors-module~form-form-module",
		"doctors-doctors-module"
	],
	"./email/email.module": [
		"./src/app/email/email.module.ts",
		"email-email-module"
	],
	"./error/error.module": [
		"./src/app/error/error.module.ts",
		"error-error-module"
	],
	"./ext-patient/ext-patient.module": [
		"./src/app/ext-patient/ext-patient.module.ts",
		"ext-patient-ext-patient-module"
	],
	"./finance/finance.module": [
		"./src/app/finance/finance.module.ts",
		"finance-finance-module"
	],
	"./form/form.module": [
		"./src/app/form/form.module.ts",
		"default~account-account-module~doctors-doctors-module~form-form-module",
		"default~doctors-doctors-module~form-form-module"
	],
	"./fullcalendar/fullcalendar.module": [
		"./src/app/fullcalendar/fullcalendar.module.ts",
		"fullcalendar-fullcalendar-module"
	],
	"./labs/labs.module": [
		"./src/app/labs/labs.module.ts",
		"labs-labs-module"
	],
	"./landingpage/landingpage.module": [
		"./src/app/landingpage/landingpage.module.ts",
		"landingpage-landingpage-module"
	],
	"./maps/maps.module": [
		"./src/app/maps/maps.module.ts",
		"maps-maps-module"
	],
	"./media/media.module": [
		"./src/app/media/media.module.ts",
		"media-media-module"
	],
	"./pages/pages.module": [
		"./src/app/pages/pages.module.ts",
		"default~datatable-datatable-module~pages-pages-module",
		"pages-pages-module"
	],
	"./patients/patients.module": [
		"./src/app/patients/patients.module.ts",
		"patients-patients-module"
	],
	"./pharmacy/pharmacy.module": [
		"./src/app/pharmacy/pharmacy.module.ts",
		"default~components-components-module~dashboard-dashboard-module~doctors-doctors-module~pharmacy-phar~08a8ea12",
		"pharmacy-pharmacy-module"
	],
	"./social/social.module": [
		"./src/app/social/social.module.ts",
		"social-social-module"
	],
	"./tables/tables.module": [
		"./src/app/tables/tables.module.ts",
		"tables-tables-module"
	],
	"./taskboard/taskboard.module": [
		"./src/app/taskboard/taskboard.module.ts",
		"default~cards-cards-module~taskboard-taskboard-module",
		"taskboard-taskboard-module"
	],
	"./triage/triage.module": [
		"./src/app/triage/triage.module.ts",
		"triage-triage-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-loading-bar/router */ "./node_modules/@ngx-loading-bar/router/esm5/ngx-loading-bar-router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _core__WEBPACK_IMPORTED_MODULE_13__["MenuComponent"],
                _core__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _core__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"],
                _core__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _core__WEBPACK_IMPORTED_MODULE_13__["AdminLayoutComponent"],
                _core__WEBPACK_IMPORTED_MODULE_13__["AuthLayoutComponent"],
                _core__WEBPACK_IMPORTED_MODULE_13__["AccordionAnchorDirective"],
                _core__WEBPACK_IMPORTED_MODULE_13__["AccordionLinkDirective"],
                _core__WEBPACK_IMPORTED_MODULE_13__["AccordionDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_11__["AppRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                    }
                }),
                _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_10__["LoadingBarRouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");


var AppRoutes = [
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full',
    },
    {
        path: '',
        component: _core__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'email',
                loadChildren: './email/email.module#EmailModule'
            },
            {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule'
            },
            {
                path: 'cards',
                loadChildren: './cards/cards.module#CardsModule'
            },
            {
                path: 'forms',
                loadChildren: './form/form.module#FormModule'
            },
            {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            },
            {
                path: 'datatable',
                loadChildren: './datatable/datatable.module#DatatableModule'
            },
            {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            },
            {
                path: 'maps',
                loadChildren: './maps/maps.module#MapsModule'
            },
            {
                path: 'pages',
                loadChildren: './pages/pages.module#PagesModule'
            },
            {
                path: 'taskboard',
                loadChildren: './taskboard/taskboard.module#TaskboardModule'
            },
            {
                path: 'calendar',
                loadChildren: './fullcalendar/fullcalendar.module#FullcalendarModule'
            },
            {
                path: 'media',
                loadChildren: './media/media.module#MediaModule'
            },
            {
                path: 'social',
                loadChildren: './social/social.module#SocialModule'
            },
            {
                path: 'docs',
                loadChildren: './docs/docs.module#DocsModule'
            },
            {
                path: 'patients',
                loadChildren: './patients/patients.module#PatientsModule'
            },
            {
                path: 'triage',
                loadChildren: './triage/triage.module#TriageModule'
            },
            {
                path: 'finance',
                loadChildren: './finance/finance.module#FinanceModule'
            },
            {
                path: 'doctors',
                loadChildren: './doctors/doctors.module#DoctorsModule'
            },
            {
                path: 'pharmacy',
                loadChildren: './pharmacy/pharmacy.module#PharmacyModule'
            },
            {
                path: 'ext-patient',
                loadChildren: './ext-patient/ext-patient.module#ExtPatientModule'
            },
            {
                path: 'labs',
                loadChildren: './labs/labs.module#LabsModule'
            },
            {
                path: 'admin',
                loadChildren: './admin/admin.module#AdminModule'
            },
            {
                path: 'profile',
                loadChildren: './social/social.module#SocialModule'
            }
        ]
    },
    {
        path: '',
        component: _core__WEBPACK_IMPORTED_MODULE_0__["AuthLayoutComponent"],
        children: [
            {
                path: 'landing',
                loadChildren: './landingpage/landingpage.module#LandingpageModule'
            },
            {
                path: 'account',
                loadChildren: './account/account.module#AccountModule'
            },
            {
                path: 'error',
                loadChildren: './error/error.module#ErrorModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'error/404'
    }
];


/***/ }),

/***/ "./src/app/core/admin-layout/admin-layout.component.html":
/*!***************************************************************!*\
  !*** ./src/app/core/admin-layout/admin-layout.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading-bar></ngx-loading-bar>\n<mat-sidenav-container class=\"app\" [ngClass]=\"{\n  'mode-boxed': options.boxed,\n  'mode-docked': options.docked,\n  'theme-winter': options.theme === 'winter',\n  'theme-spring': options.theme === 'spring',\n  'theme-autumn': options.theme === 'autumn',\n  'theme-summer': options.theme === 'summer',\n  'theme-eclipse': options.theme === 'eclipse',\n  'no-footer': routeOptions?.removeFooter}\">\n  <mat-sidenav class=\"sidebar-panel\" #sidemenu id=\"sidebar-panel\" [mode]=\"isOver() ? 'over' : 'side'\" [opened]=\"!isOver()\">\n    <app-sidebar (messageEvent)=\"receiveMessage($event)\" (toggleFullscreen)=\"toggleFullscreen()\" class=\"bg-cover\"></app-sidebar>\n  </mat-sidenav>\n\n  <app-header (toggleSidenav)=\"sidemenu.toggle()\" [heading]=\"routeOptions.heading\"></app-header>\n\n  <div class=\"main-content\">\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n  </div>\n\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/core/admin-layout/admin-layout.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/core/admin-layout/admin-layout.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/admin-layout/admin-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/admin-layout/admin-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SMALL_WIDTH_BREAKPOINT = 991;
var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(_element, router, route, translate, titleService, zone) {
        var _this = this;
        this._element = _element;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.titleService = titleService;
        this.mediaMatcher = matchMedia("(max-width: " + SMALL_WIDTH_BREAKPOINT + "px)");
        this.options = {
            lang: 'en',
            theme: 'winter',
            settings: false,
            docked: false,
            boxed: false,
            opened: false
        };
        this.currentLang = 'en';
        this.mediaMatcher.addListener(function (mql) {
            return zone.run(function () {
                _this.mediaMatcher = mql;
            });
        });
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function (event) {
            // Scroll to top on view load
            document.querySelector('.main-content').scrollTop = 0;
            if (_this.isOver()) {
                _this.sidemenu.close();
            }
            _this.runOnRouteChange();
        });
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.ngOnDestroy = function () {
        this._router.unsubscribe();
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        var _this = this;
        this.route.children.forEach(function (route) {
            var activeRoute = route;
            while (activeRoute.firstChild) {
                activeRoute = activeRoute.firstChild;
            }
            _this.routeOptions = activeRoute.snapshot.data;
        });
        if (this.routeOptions.hasOwnProperty('heading')) {
            this.setTitle(this.routeOptions.heading);
        }
    };
    AdminLayoutComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle('Fluxafya - Digital Healthcare System | ' + newTitle);
    };
    AdminLayoutComponent.prototype.isOver = function () {
        return this.mediaMatcher.matches;
    };
    AdminLayoutComponent.prototype.receiveMessage = function ($event) {
        this.options = $event;
    };
    AdminLayoutComponent.prototype.toggleFullscreen = function () {
        var elem = this._element.nativeElement.querySelector('.main-content');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.msRequestFullScreen) {
            elem.msRequestFullScreen();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidebar'),
        __metadata("design:type", Object)
    ], AdminLayoutComponent.prototype, "sidebar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidemenu'),
        __metadata("design:type", Object)
    ], AdminLayoutComponent.prototype, "sidemenu", void 0);
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin-layout.component.html */ "./src/app/core/admin-layout/admin-layout.component.html"),
            styles: [__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/core/admin-layout/admin-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/core/auth-layout/auth-layout.component.html":
/*!*************************************************************!*\
  !*** ./src/app/core/auth-layout/auth-layout.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"theme-winter no-bg\" style=\"height:100%\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/core/auth-layout/auth-layout.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/core/auth-layout/auth-layout.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-checkbox {\n  padding-left: 1.2rem; }\n\n.custom-control-indicator {\n  background: transparent;\n  border: 2px solid rgba(255, 255, 255, 0.54); }\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-indicator {\n  background: transparent; }\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-indicator::before {\n    content: \"\\f3fd\";\n    display: inline-block;\n    font-family: \"Ionicons\";\n    speak: none;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    position: absolute;\n    width: 16px;\n    height: 16px;\n    text-align: center;\n    top: -2px;\n    left: -2px;\n    font-size: 1.2rem;\n    line-height: 16px; }\n"

/***/ }),

/***/ "./src/app/core/auth-layout/auth-layout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/auth-layout/auth-layout.component.ts ***!
  \***********************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth-layout',
            template: __webpack_require__(/*! ./auth-layout.component.html */ "./src/app/core/auth-layout/auth-layout.component.html"),
            styles: [__webpack_require__(/*! ./auth-layout.component.scss */ "./src/app/core/auth-layout/auth-layout.component.scss")]
        })
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/core/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar custom-navbar main-footer small px-3\">\n    <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link text-color\" href=\"javascript:;\">\n                <span>Copyright &copy; 2019 </span> <span class=\"\">FluxAfya</span>. All rights reserved\n            </a>\n        </li>\n    </ul>\n    <ul class=\"navbar-nav hidden-xs-down\">\n        <li class=\"nav-item\">\n            Made in Kenya. Built by&nbsp;<a class=\"nav-link text-color\" target=\"_blank\" href=\"http://sisitech.com\"> Sisitech Limited.</a>\n        </li>\n    </ul>\n</nav>"

/***/ }),

/***/ "./src/app/core/footer/footer.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/core/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar custom-navbar bg-faded main-header px-3\">\n\n    <a href=\"javascript:;\" class=\"nav-link pl-0 d-lg-none\" (click)=\"toggleSidenav.emit()\">\n        <i class=\"icon ion-android-menu\"></i>\n    </a>\n\n    <span class=\"navbar-heading mr-3\">{{heading}}</span>\n\n    <span class=\"nav-divider mx-3 d-none d-sm-block\"></span>\n\n    <ul class=\"navbar-nav mx-3\">\n        <li class=\"nav-item\" ngbDropdown placement=\"bottom-left\">\n            <a href=\"javascript:;\" class=\"nav-link\" ngbDropdownToggle container=\"body\" placement=\"bottom\" ngbTooltip=\"Notifications\">\n                <i class=\"icon ion-ios-bell\"></i>\n                <span class=\"badge badge-danger\" style=\"background-color: #cf005d\">4</span>\n            </a>\n\n            <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right notifications\">\n                <div class=\"notifications-wrapper\">\n                    <a href=\"javascript:;\" class=\"dropdown-item\">\n                        <span class=\"badge badge-warning\">NEW</span> &nbsp;Sean launched a new application\n                        <span class=\"time\">2 seconds ago</span>\n                    </a>\n                    <a href=\"javascript:;\" class=\"dropdown-item\">\n                  Removed calendar from app list\n                  <span class=\"time\">4 hours ago</span>\n                </a>\n                    <a href=\"javascript:;\" class=\"dropdown-item\">\n                  Jack Hunt has joined mailing list\n                  <span class=\"time\">9 days ago</span>\n                </a>\n                    <a href=\"javascript:;\" class=\"dropdown-item\">\n                        <span class=\"text-muted\">Conan Johns created a new list</span>\n                        <span class=\"time\">9 days ago</span>\n                    </a>\n                </div>\n                <div class=\"notification-footer\">\n                    <a href=\"javascript:;\" class=\"dropdown-item\">See all notifications</a>\n                </div>\n            </div>\n        </li>\n        <li class=\"nav-item\" ngbDropdown placement=\"bottom-left\">\n            <a href=\"javascript:;\" class=\"nav-link\" ngbDropdownToggle container=\"body\" placement=\"bottom\" ngbTooltip=\"Finance\">\n                <i class=\"icon ion-card\"></i>\n                <!-- <i><img src=\"assets/images/landing/switch.png\" class=\"icon icons\" alt=\"\"> -->\n                <span class=\"badge badge-danger\" style=\"background-color: #cf005d\">2</span>\n            </a>\n            <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right notifications\">\n                <div class=\"notifications-wrapper\">\n                    <a href=\"javascript:;\" class=\"dropdown-item\">\n                        <span class=\"badge badge-warning\">NEW</span> &nbsp;Sean launched a new application\n                        <span class=\"time\">2 seconds ago</span>\n                    </a>\n                    <a href=\"javascript:;\" class=\"dropdown-item\">\n                  Removed calendar from app list\n                  <span class=\"time\">4 hours ago</span>\n                </a>\n                    <a href=\"javascript:;\" class=\"dropdown-item\">\n                  Jack Hunt has joined mailing list\n                  <span class=\"time\">9 days ago</span>\n                </a>\n                    <a href=\"javascript:;\" class=\"dropdown-item\">\n                        <span class=\"text-muted\">Conan Johns created a new list</span>\n                        <span class=\"time\">9 days ago</span>\n                    </a>\n                </div>\n                <div class=\"notification-footer\">\n                    <a href=\"javascript:;\" class=\"dropdown-item\">See all notifications</a>\n                </div>\n            </div>\n        </li>\n    </ul>\n\n    <span class=\"nav-divider mx-3 d-none d-sm-block\"></span>\n\n    <form class=\"form-search form-inline ml-3 d-none d-sm-block\">\n        <div class=\"d-flex align-items-center\">\n            <i class=\"icon ion-ios-search mr-2\"></i>\n            <input class=\"form-control border-0 no-bg fw-300\" type=\"text\" placeholder=\"Search the system ...\">\n        </div>\n    </form>\n\n    <span class=\"mr-auto\"></span>\n\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n            <a href=\"javascript:;\" class=\"nav-link\" ngbDropdownToggle>\n                <span class=\"widget-icon rounded-circle bg-secondary text-white d-none d-md-inline-block\">{{userinitials}}</span>\n                <span class=\"ml-2\">{{username}}</span>\n            </a>\n            <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\">\n                <a class=\"dropdown-item\" href=\"javascript:;\">\n                    <span>Settings</span>\n                </a>\n                <a class=\"dropdown-item\" href=\"javascript:;\">\n                    <span>Profile</span>\n                </a>\n                <a class=\"dropdown-item\" href=\"javascript:;\">\n                    <span>Notifications</span>\n                </a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\" href=\"javascript:;\">\n                    <span>Help</span>\n                </a>\n                <a (click)=\"logout()\" class=\"dropdown-item\" href=\"javascript:;\">\n                    <span>Sign out</span>\n                </a>\n            </div>\n        </li>\n    </ul>\n\n    <ul class=\"navbar-nav ml-3\">\n        <!-- <li class=\"nav-item\">\n            <a href=\"\" class=\"nav-link\" [routerLink]=\"['/pages/pricing']\">\n                <button class=\"btn btn-secondary btn-sm px-3\">Upgrade</button>\n            </a>\n        </li> -->\n    </ul>\n</nav>"

/***/ }),

/***/ "./src/app/core/header/header.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .widget-icon {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  font-size: 12px;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.toggleSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        var profile = JSON.parse(localStorage.getItem('userprofile'));
        console.log(profile);
        this.username = profile.first_name + ' ' + profile.last_name;
        var initialA = profile.first_name[0].charAt(0).toUpperCase();
        var initialB = profile.last_name[1].charAt(0).toUpperCase();
        this.userinitials = initialA + initialB;
    }
    HeaderComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['account/signin']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "heading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "toggleSidenav", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/core/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/helpers/chartData.ts":
/*!*******************************************!*\
  !*** ./src/app/core/helpers/chartData.ts ***!
  \*******************************************/
/*! exports provided: single, multi, bubble, countries, generateGraph, generateData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "single", function() { return single; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multi", function() { return multi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubble", function() { return bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countries", function() { return countries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateGraph", function() { return generateGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateData", function() { return generateData; });
var single = [
    {
        name: 'Fiji',
        value: 40
    },
    {
        name: 'USA',
        value: 49
    },
    {
        name: 'France',
        value: 36
    },
    {
        name: 'UK',
        value: 36
    },
    {
        name: 'Spain',
        value: 33
    },
    {
        name: 'Italy',
        value: 35
    }
];
var multi = [
    {
        name: 'Fiji',
        series: [
            {
                name: '2010',
                value: 40
            },
            {
                name: '2000',
                value: 36
            },
            {
                name: '1990',
                value: 31
            }
        ]
    },
    {
        name: 'USA',
        series: [
            {
                name: '2010',
                value: 49
            },
            {
                name: '2000',
                value: 45
            },
            {
                name: '1990',
                value: 37
            }
        ]
    },
    {
        name: 'France',
        series: [
            {
                name: '2010',
                value: 36
            },
            {
                name: '2000',
                value: 34
            },
            {
                name: '1990',
                value: 29
            }
        ]
    },
    {
        name: 'UK',
        series: [
            {
                name: '2010',
                value: 36
            },
            {
                name: '2000',
                value: 32
            },
            {
                name: '1990',
                value: 26
            }
        ]
    }
];
var bubble = [
    {
        name: 'Fiji',
        series: [
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 80.3,
                r: 80.4
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 80.3,
                r: 78
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 75.4,
                r: 79
            }
        ]
    },
    {
        name: 'USA',
        series: [
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 78.8,
                r: 310
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 76.9,
                r: 283
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 75.4,
                r: 253
            }
        ]
    },
    {
        name: 'France',
        series: [
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 81.4,
                r: 63
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 79.1,
                r: 59.4
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 77.2,
                r: 56.9
            }
        ]
    },
    {
        name: 'UK',
        series: [
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 80.2,
                r: 62.7
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 77.8,
                r: 58.9
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 75.7,
                r: 57.1
            }
        ]
    }
];
var countries = [
    'Abkhazia',
    'Afghanistan',
    'Akrotiri and Dhekelia',
    'Aland',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Ascension Island',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas, The',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Cayman Islands',
    'Central Africa Republic',
    'Chad',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos (Keeling) Islands',
    'Colombia',
    'Comoros',
    'Congo',
    'Cook Islands',
    'Costa Rica',
    "Cote d'lvoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Falkland Islands',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Polynesia',
    'Gabon',
    'Cambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guam',
    'Guatemala',
    'Guemsey',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, N',
    'Korea, S',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macao',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Nagorno-Karabakh',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'Netherlands Antilles',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'Northern Cyprus',
    'Northern Mariana Islands',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Pitcaim Islands',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Sahrawi Arab Democratic Republic',
    'Saint-Barthelemy',
    'Saint Helena',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Martin',
    'Saint Pierre and Miquelon',
    'Saint Vincent and Grenadines',
    'Samos',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'Somaliland',
    'South Africa',
    'South Ossetia',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Svalbard',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tokelau',
    'Tonga',
    'Transnistria',
    'Trinidad and Tobago',
    'Tristan da Cunha',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks and Caicos Islands',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Virgin Islands, British',
    'Virgin Islands, U.S.',
    'Wallis and Futuna',
    'Yemen',
    'Zambia',
    'Zimbabwe'
];
function generateGraph(nodeCount) {
    var nodes = [];
    var links = [];
    for (var i = 0; i < nodeCount; i++) {
        var country = countries[Math.floor(Math.random() * countries.length)];
        nodes.push({
            value: country
        });
        for (var j = 0; j < nodes.length - 1; j++) {
            if (Math.random() < 0.03) {
                links.push({
                    source: country,
                    target: nodes[j].value
                });
            }
        }
    }
    return { links: links, nodes: nodes };
}
function generateData(seriesLength, includeMinMaxRange) {
    var results = [];
    var domain = []; // array of time stamps in milliseconds
    for (var j = 0; j < 8; j++) {
        // random dates between Sep 12, 2016 and Sep 24, 2016
        domain.push(new Date(Math.floor(1473700105009 + Math.random() * 1000000000)));
    }
    for (var i = 0; i < seriesLength; i++) {
        var country = countries[Math.floor(Math.random() * countries.length)];
        var series = {
            name: country,
            series: []
        };
        for (var j = 0; j < domain.length; j++) {
            var value = Math.floor(2 + Math.random() * 5);
            // let timestamp = Math.floor(1473700105009 + Math.random() * 1000000000);
            var timestamp = domain[j];
            if (includeMinMaxRange) {
                var errorMargin = 0.02 + Math.random() * 0.08;
                series.series.push({
                    value: value,
                    name: timestamp,
                    min: Math.floor(value * (1 - errorMargin)),
                    max: Math.ceil(value * (1 + errorMargin))
                });
            }
            else {
                series.series.push({
                    value: value,
                    name: timestamp
                });
            }
        }
        results.push(series);
    }
    return results;
}


/***/ }),

/***/ "./src/app/core/helpers/colors.ts":
/*!****************************************!*\
  !*** ./src/app/core/helpers/colors.ts ***!
  \****************************************/
/*! exports provided: colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
var colors = [
    '#5c6bc0',
    '#66bb6a',
    '#29b6f6',
    '#ffee58',
    '#ef5350',
    '#868e96'
];


/***/ }),

/***/ "./src/app/core/helpers/index.ts":
/*!***************************************!*\
  !*** ./src/app/core/helpers/index.ts ***!
  \***************************************/
/*! exports provided: single, multi, bubble, countries, generateGraph, generateData, colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chartData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chartData */ "./src/app/core/helpers/chartData.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "single", function() { return _chartData__WEBPACK_IMPORTED_MODULE_0__["single"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multi", function() { return _chartData__WEBPACK_IMPORTED_MODULE_0__["multi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bubble", function() { return _chartData__WEBPACK_IMPORTED_MODULE_0__["bubble"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countries", function() { return _chartData__WEBPACK_IMPORTED_MODULE_0__["countries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateGraph", function() { return _chartData__WEBPACK_IMPORTED_MODULE_0__["generateGraph"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateData", function() { return _chartData__WEBPACK_IMPORTED_MODULE_0__["generateData"]; });

/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colors */ "./src/app/core/helpers/colors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return _colors__WEBPACK_IMPORTED_MODULE_1__["colors"]; });





/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: HeaderComponent, SidebarComponent, FooterComponent, AdminLayoutComponent, AuthLayoutComponent, MenuComponent, AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective, single, multi, bubble, countries, generateGraph, generateData, colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"]; });

/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/core/sidebar/sidebar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"]; });

/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]; });

/* harmony import */ var _admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-layout/admin-layout.component */ "./src/app/core/admin-layout/admin-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return _admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__["AdminLayoutComponent"]; });

/* harmony import */ var _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-layout/auth-layout.component */ "./src/app/core/auth-layout/auth-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutComponent"]; });

/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/core/menu/menu.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"]; });

/* harmony import */ var _menu_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-accordion */ "./src/app/core/menu-accordion/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return _menu_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionAnchorDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return _menu_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionLinkDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return _menu_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionDirective"]; });

/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers */ "./src/app/core/helpers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "single", function() { return _helpers__WEBPACK_IMPORTED_MODULE_7__["single"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multi", function() { return _helpers__WEBPACK_IMPORTED_MODULE_7__["multi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bubble", function() { return _helpers__WEBPACK_IMPORTED_MODULE_7__["bubble"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countries", function() { return _helpers__WEBPACK_IMPORTED_MODULE_7__["countries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateGraph", function() { return _helpers__WEBPACK_IMPORTED_MODULE_7__["generateGraph"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateData", function() { return _helpers__WEBPACK_IMPORTED_MODULE_7__["generateData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return _helpers__WEBPACK_IMPORTED_MODULE_7__["colors"]; });











/***/ }),

/***/ "./src/app/core/menu-accordion/accordion.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/core/menu-accordion/accordion.directive.ts ***!
  \************************************************************/
/*! exports provided: AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return AccordionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccordionDirective = /** @class */ (function () {
    function AccordionDirective(router) {
        var _this = this;
        this.router = router;
        this.navlinks = [];
        setTimeout(function () { return _this.checkOpenLinks(); });
    }
    AccordionDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link !== openLink) {
                link.open = false;
            }
        });
    };
    AccordionDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    AccordionDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    AccordionDirective.prototype.checkOpenLinks = function () {
        var _this = this;
        this.navlinks.forEach(function (link) {
            if (link.group) {
                var routeUrl = _this.router.url;
                var currentUrl = routeUrl.split('/');
                if (currentUrl.indexOf(link.group) > 0) {
                    link.open = true;
                    _this.closeOtherLinks(link);
                }
            }
        });
    };
    AccordionDirective.prototype.ngAfterContentChecked = function () {
        var _this = this;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .subscribe(function (e) { return _this.checkOpenLinks(); });
    };
    AccordionDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAccordion]'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AccordionDirective);
    return AccordionDirective;
}());



/***/ }),

/***/ "./src/app/core/menu-accordion/accordionanchor.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/menu-accordion/accordionanchor.directive.ts ***!
  \******************************************************************/
/*! exports provided: AccordionAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return AccordionAnchorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ "./src/app/core/menu-accordion/accordionlink.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionAnchorDirective = /** @class */ (function () {
    function AccordionAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    AccordionAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AccordionAnchorDirective.prototype, "onClick", null);
    AccordionAnchorDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAccordionToggle]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"])),
        __metadata("design:paramtypes", [_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]])
    ], AccordionAnchorDirective);
    return AccordionAnchorDirective;
}());



/***/ }),

/***/ "./src/app/core/menu-accordion/accordionlink.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/menu-accordion/accordionlink.directive.ts ***!
  \****************************************************************/
/*! exports provided: AccordionLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return AccordionLinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion.directive */ "./src/app/core/menu-accordion/accordion.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionLinkDirective = /** @class */ (function () {
    function AccordionLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(AccordionLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
    };
    AccordionLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    AccordionLinkDirective.prototype.toggle = function () {
        this.open = !this.open;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AccordionLinkDirective.prototype, "group", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.open'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AccordionLinkDirective.prototype, "open", null);
    AccordionLinkDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAccordionLink]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"])),
        __metadata("design:paramtypes", [_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"]])
    ], AccordionLinkDirective);
    return AccordionLinkDirective;
}());



/***/ }),

/***/ "./src/app/core/menu-accordion/index.ts":
/*!**********************************************!*\
  !*** ./src/app/core/menu-accordion/index.ts ***!
  \**********************************************/
/*! exports provided: AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionanchor.directive */ "./src/app/core/menu-accordion/accordionanchor.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__["AccordionAnchorDirective"]; });

/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ "./src/app/core/menu-accordion/accordionlink.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]; });

/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.directive */ "./src/app/core/menu-accordion/accordion.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return _accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]; });






/***/ }),

/***/ "./src/app/core/menu/menu.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/menu/menu.component.ts ***!
  \*********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.service */ "./src/app/core/menu/menu.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* tslint:disable:max-line-length */
var MenuComponent = /** @class */ (function () {
    function MenuComponent(menuService, translate) {
        this.menuService = menuService;
        this.translate = translate;
        this.currentLang = 'en';
    }
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: "\n  <ul class=\"navigation\" appAccordion>\n    <div *ngFor=\"let menuitem of menuService.getAll()\">\n      <li class=\"navigation-item\" appAccordionLink group=\"{{menuitem.state}}\" *ngIf=\"menuitem.type !== 'divider' || menuitem.type !== 'title'\">\n        <a class=\"navigation-link\" appAccordionToggle [routerLink]=\"['/', menuitem.state]\" *ngIf=\"menuitem.type === 'link'\">\n          <i class=\"icon {{ menuitem.icon }} mr-3\"></i>\n          <span class=\"title mr-auto\">{{ menuitem.name | translate }}</span>\n          <span class=\"badge badge-{{ badge.type }} mr-3\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\n        </a>\n        <a class=\"navigation-link\" appAccordionToggle href=\"{{menuitem.state}}\" *ngIf=\"menuitem.type === 'extLink'\">\n          <i class=\"icon {{ menuitem.icon }} mr-3\"></i>\n          <span class=\"title mr-auto\">{{ menuitem.name | translate }}</span>\n          <span class=\"badge badge-{{ badge.type }} mr-3\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\n        </a>\n        <a class=\"navigation-link\" appAccordionToggle href=\"{{menuitem.state}}\" target=\"_blank\" *ngIf=\"menuitem.type === 'extTabLink'\">\n          <i class=\"icon {{ menuitem.icon }} mr-3\"></i>\n          <span class=\"title mr-auto\">{{ menuitem.name | translate }}</span>\n          <span class=\"badge badge-{{ badge.type }} mr-3\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\n        </a>\n        <a class=\"navigation-link\" appAccordionToggle href=\"javascript:;\" *ngIf=\"menuitem.type === 'sub'\">\n          <i class=\"icon {{ menuitem.icon }} mr-3\"></i>\n          <span class=\"title mr-auto\">{{ menuitem.name | translate }}</span>\n          <span class=\"badge badge-{{ badge.type }} mr-3\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\n          <i class=\"menu-caret icon ion-ios-arrow-down\"></i>\n        </a>\n        <ul class=\"navigation-submenu\" *ngIf=\"menuitem.type === 'sub'\">\n          <li class=\"navigation-item\" *ngFor=\"let childitem of menuitem.children\" routerLinkActive=\"open\">\n            <a [routerLink]=\"['/', menuitem.state, childitem.state ]\" class=\"navigation-link relative\">{{ childitem.name | translate }}</a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"navigation-item\" *ngIf=\"menuitem.type === 'divider'\">\n        <hr/>\n      </li>\n      <li class=\"navigation-item\" *ngIf=\"menuitem.type === 'title'\">\n        <span class=\"navigation-title\">{{ menuitem.name | translate }}</span>\n      </li>\n    </div>\n  </ul>",
            providers: [_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]]
        }),
        __metadata("design:paramtypes", [_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/core/menu/menu.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/menu/menu.service.ts ***!
  \*******************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MENUITEMS = [
    {
        type: 'title',
        name: 'MAIN'
    },
    {
        state: '/dashboard',
        name: 'HOME',
        type: 'link',
        icon: 'ion-ios-speedometer'
    },
    {
        state: 'docs',
        name: 'DOCS',
        type: 'link',
        icon: 'ion-ios-help'
    },
    {
        type: 'divider'
    },
    {
        type: 'title',
        name: 'Customer Registration'
    },
    {
        state: 'patients',
        name: 'Reception',
        type: 'sub',
        icon: 'ion-ios-person',
        children: [
            {
                state: 'register',
                name: 'Patient Registration',
                type: 'link',
            },
            {
                state: '',
                name: 'Registered Patients',
                type: 'link',
            }
        ]
    },
    {
        type: 'divider',
    },
    {
        type: 'title',
        name: 'Triage Module'
    },
    {
        state: 'triage',
        name: 'Triage Station',
        type: 'sub',
        icon: 'ion-ios-help',
        children: [
            {
                state: '',
                name: 'Patients',
                type: 'link',
                icon: ''
            },
            {
                state: 'see-patient',
                name: 'Triage form',
                type: 'link',
                icon: ''
            }
        ]
    },
    {
        type: 'divider'
    },
    {
        type: 'title',
        name: 'Finance Module'
    },
    {
        state: 'finance',
        name: 'Finance',
        type: 'sub',
        icon: 'ion-ios-list',
        children: [
            {
                state: '',
                name: 'Patients',
                type: 'link',
                icon: 'ion-ios-people'
            },
            {
                state: 'see-patient',
                name: 'Finance form',
                type: 'link',
                icon: 'ion-ios-people'
            }
        ]
    },
    {
        type: 'divider'
    },
    {
        type: 'title',
        name: 'Doctors Module'
    },
    {
        state: 'doctors',
        name: 'Doctors',
        type: 'sub',
        icon: 'ion-ios-people',
        children: [
            {
                state: '',
                name: 'Patients',
                type: 'link',
                icon: 'ion-ios-people'
            },
            {
                state: 'see-patient',
                name: 'Doctor\'s form',
                type: 'link',
                icon: 'ion-ios-people'
            }
        ]
    },
    {
        type: 'divider',
    },
    {
        type: 'title',
        name: 'Labs Module'
    },
    {
        state: 'labs',
        name: 'Labs',
        type: 'sub',
        icon: 'ion-ios-people',
        children: [
            {
                state: '',
                name: 'Patients',
                type: 'link',
                icon: 'ion-ios-people'
            },
            {
                state: 'see-patient',
                name: 'Lab\'s form',
                type: 'link',
                icon: 'ion-ios-people'
            }
        ]
    },
    {
        type: 'divider',
    },
    {
        type: 'title',
        name: 'Pharmacy Module'
    },
    {
        state: 'pharmacy',
        name: 'Pharmacy',
        type: 'sub',
        icon: 'ion-ios-box',
        children: [
            {
                state: '',
                name: 'Patients',
                type: 'link',
                icon: 'ion-ios-people'
            },
            {
                state: 'see-patient',
                name: 'Pharmacy\'s form',
                type: 'link',
                icon: 'ion-ios-people'
            }
        ]
    },
    {
        type: 'divider',
    },
    {
        type: 'title',
        name: 'Admin Modules'
    },
    {
        state: 'admin',
        name: 'User Admin',
        type: 'sub',
        icon: 'ion-ios-person',
        children: [
            {
                state: '',
                name: 'View Users',
                type: 'link',
                icon: 'ion-ios-people'
            },
            {
                state: 'manage-users',
                name: 'Manage Users',
                type: 'link',
                icon: 'ion-ios-people'
            },
            {
                state: 'see-healthcenter',
                name: 'Add Health Center',
                type: 'link',
                icon: 'ion-ios-people'
            }
        ]
    },
    {
        type: 'divider',
    },
    {
        type: 'title',
        name: 'Account Modules'
    },
    {
        state: 'account',
        name: 'ACCOUNT',
        type: 'sub',
        icon: 'ion-ios-person',
        children: [
            {
                state: 'signin',
                name: 'SIGNIN'
            },
            {
                state: 'signup',
                name: 'SIGNUP'
            },
            {
                state: 'forgot',
                name: 'FORGOT'
            },
            {
                state: 'lockscreen',
                name: 'LOCKSCREEN'
            }
        ]
    }
];
var RECEPTION = [
    {
        type: 'title',
        name: 'MAIN'
    },
    {
        state: '/dashboard',
        name: 'HOME',
        type: 'link',
        icon: 'ion-ios-speedometer'
    },
    {
        state: 'docs',
        name: 'DOCS',
        type: 'link',
        icon: 'ion-ios-help'
    },
    {
        type: 'divider'
    },
    {
        type: 'title',
        name: 'Reception'
    },
    {
        state: 'patients/register',
        name: 'Register',
        type: 'extLink',
        icon: 'ion-document'
    },
    {
        state: 'patients',
        name: 'Patients',
        type: 'extLink',
        icon: 'ion-ios-people'
    },
    {
        type: 'divider'
    },
    {
        type: 'title',
        name: 'Account'
    },
    {
        state: 'profile',
        name: 'Profile',
        type: 'link',
        icon: 'ion-ios-contact'
    },
    {
        state: 'account/change-password',
        name: 'Change Password',
        type: 'extLink',
        icon: 'ion-ios-shuffle'
    },
    {
        state: 'account/lockscreen',
        name: 'Lockscreen',
        type: 'extLink',
        icon: 'ion-ios-locked'
    }
];
var PHARMACY = [
    {
        type: 'title',
        name: 'MAIN'
    },
    {
        state: '/dashboard',
        name: 'HOME',
        type: 'link',
        icon: 'ion-ios-speedometer'
    },
    {
        state: 'docs',
        name: 'DOCS',
        type: 'link',
        icon: 'ion-ios-help'
    },
    {
        type: 'divider'
    },
    {
        type: 'title',
        name: 'Patients'
    },
    {
        state: 'pharmacy',
        name: 'Patients',
        type: 'link',
        icon: 'ion-ios-people'
    },
    {
        type: 'divider'
    },
    {
        type: 'title',
        name: 'Account'
    },
    {
        state: 'profile',
        name: 'Profile',
        type: 'link',
        icon: 'ion-ios-contact'
    },
    {
        state: 'account/change-password',
        name: 'Change Password',
        type: 'extLink',
        icon: 'ion-ios-shuffle'
    },
    {
        state: 'account/lockscreen',
        name: 'Lockscreen',
        type: 'extLink',
        icon: 'ion-ios-locked'
    }
];
var RECFINANCE = [
    {
        type: 'title',
        name: 'MAIN'
    },
    {
        state: '/dashboard',
        name: 'HOME',
        type: 'link',
        icon: 'ion-ios-speedometer'
    },
    {
        state: 'docs',
        name: 'DOCS',
        type: 'link',
        icon: 'ion-ios-help'
    },
    {
        type: 'divider'
    },
    {
        type: 'title',
        name: 'Patients'
    },
    {
        state: 'patients/register',
        name: 'Register',
        type: 'extLink',
        icon: 'ion-document'
    },
    {
        state: 'patients',
        name: 'Patients',
        type: 'link',
        icon: 'ion-ios-people'
    },
    {
        type: 'divider'
    },
    {
        type: 'title',
        name: 'Finance'
    },
    {
        state: 'finance',
        name: 'Patients',
        type: 'link',
        icon: 'ion-ios-people'
    },
    {
        type: 'divider'
    },
    {
        type: 'title',
        name: 'Account'
    },
    {
        state: 'profile',
        name: 'Profile',
        type: 'link',
        icon: 'ion-ios-contact'
    },
    {
        state: 'account/change-password',
        name: 'Change Password',
        type: 'extLink',
        icon: 'ion-ios-shuffle'
    },
    {
        state: 'account/lockscreen',
        name: 'Lockscreen',
        type: 'extLink',
        icon: 'ion-ios-locked'
    }
];
var FINANCE = [
    {
        type: 'title',
        name: 'MAIN'
    },
    {
        state: '/dashboard',
        name: 'HOME',
        type: 'link',
        icon: 'ion-ios-speedometer'
    },
    {
        state: 'docs',
        name: 'DOCS',
        type: 'link',
        icon: 'ion-ios-help'
    },
    {
        type: 'divider'
    },
    {
        type: 'title',
        name: 'Finance'
    },
    {
        state: 'finance',
        name: 'Patients',
        type: 'link',
        icon: 'ion-ios-people'
    },
    {
        type: 'divider'
    },
    {
        type: 'title',
        name: 'Account'
    },
    {
        state: 'profile',
        name: 'Profile',
        type: 'link',
        icon: 'ion-ios-contact'
    },
    {
        state: 'account/change-password',
        name: 'Change Password',
        type: 'extLink',
        icon: 'ion-ios-shuffle'
    },
    {
        state: 'account/lockscreen',
        name: 'Lockscreen',
        type: 'extLink',
        icon: 'ion-ios-locked'
    }
];
var TRIAGE = [
    {
        type: 'title',
        name: 'MAIN'
    },
    {
        state: '/dashboard',
        name: 'HOME',
        type: 'link',
        icon: 'ion-ios-speedometer'
    },
    {
        state: 'docs',
        name: 'DOCS',
        type: 'link',
        icon: 'ion-ios-help'
    },
    {
        type: 'divider'
    },
    {
        type: 'title',
        name: 'Triage'
    },
    {
        state: 'triage',
        name: 'Patients',
        type: 'link',
        icon: 'ion-ios-people'
    },
    {
        type: 'divider'
    },
    {
        type: 'title',
        name: 'Account'
    },
    {
        state: 'profile',
        name: 'Profile',
        type: 'link',
        icon: 'ion-ios-contact'
    },
    {
        state: 'account/change-password',
        name: 'Change Password',
        type: 'extLink',
        icon: 'ion-ios-shuffle'
    },
    {
        state: 'account/lockscreen',
        name: 'Lockscreen',
        type: 'extLink',
        icon: 'ion-ios-locked'
    }
];
var PERSONAL = [
    {
        type: 'title',
        name: 'MAIN'
    },
    {
        state: '/dashboard',
        name: 'HOME',
        type: 'link',
        icon: 'ion-ios-speedometer'
    },
    {
        state: 'docs',
        name: 'DOCS',
        type: 'link',
        icon: 'ion-ios-help'
    },
    {
        type: 'divider'
    },
    {
        type: 'title',
        name: 'Medical'
    },
    {
        state: 'ext-patient/histories',
        name: 'Histories',
        type: 'extLink',
        icon: 'ion-ios-people'
    },
    {
        type: 'divider'
    },
    {
        type: 'title',
        name: 'Account'
    },
    {
        state: 'profile',
        name: 'Profile',
        type: 'link',
        icon: 'ion-ios-contact'
    },
    {
        state: 'account/change-password',
        name: 'Change Password',
        type: 'extLink',
        icon: 'ion-ios-shuffle'
    },
    {
        state: 'account/lockscreen',
        name: 'Lockscreen',
        type: 'extLink',
        icon: 'ion-ios-locked'
    }
];
var DOCTOR = [
    {
        type: 'title',
        name: 'MAIN'
    },
    {
        state: '/dashboard',
        name: 'HOME',
        type: 'link',
        icon: 'ion-ios-speedometer'
    },
    {
        state: 'docs',
        name: 'DOCS',
        type: 'link',
        icon: 'ion-ios-help'
    },
    {
        type: 'divider'
    },
    {
        type: 'title',
        name: 'Triage'
    },
    {
        state: 'triage/patients',
        name: 'Patients',
        type: 'extLink',
        icon: 'ion-ios-people'
    },
    {
        type: 'divider'
    },
    {
        type: 'title',
        name: 'Doctors'
    },
    {
        state: 'doctors/patients',
        name: 'Patients',
        type: 'extLink',
        icon: 'ion-ios-people'
    },
    {
        type: 'divider'
    },
    {
        type: 'title',
        name: 'Account'
    },
    {
        state: 'profile',
        name: 'Profile',
        type: 'link',
        icon: 'ion-ios-contact'
    },
    {
        state: 'account/change-password',
        name: 'Change Password',
        type: 'extLink',
        icon: 'ion-ios-shuffle'
    },
    {
        state: 'account/lockscreen',
        name: 'Lockscreen',
        type: 'extLink',
        icon: 'ion-ios-locked'
    }
];
var LAB = [
    {
        type: 'title',
        name: 'MAIN'
    },
    {
        state: '/dashboard',
        name: 'HOME',
        type: 'link',
        icon: 'ion-ios-speedometer'
    },
    {
        state: 'docs',
        name: 'DOCS',
        type: 'link',
        icon: 'ion-ios-help'
    },
    {
        type: 'divider'
    },
    {
        type: 'title',
        name: 'Laboratory'
    },
    {
        state: 'labs/patients',
        name: 'Patients',
        type: 'extLink',
        icon: 'ion-ios-people'
    },
    {
        type: 'divider'
    },
    {
        type: 'title',
        name: 'Account'
    },
    {
        state: 'profile',
        name: 'Profile',
        type: 'link',
        icon: 'ion-ios-contact'
    },
    {
        state: 'account/change-password',
        name: 'Change Password',
        type: 'extLink',
        icon: 'ion-ios-shuffle'
    },
    {
        state: 'account/lockscreen',
        name: 'Lockscreen',
        type: 'extLink',
        icon: 'ion-ios-locked'
    }
];
var MenuService = /** @class */ (function () {
    function MenuService() {
    }
    MenuService.prototype.getAll = function () {
        var profile = JSON.parse(localStorage.getItem('userprofile'));
        if (profile.role == 'FA') {
            return MENUITEMS;
        }
        else if (profile.role == 'MFA') {
            return MENUITEMS;
        }
        else if (profile.role == 'R') {
            return RECEPTION;
        }
        else if (profile.role == 'P') {
            return PHARMACY;
        }
        else if (profile.role == 'F') {
            return FINANCE;
        }
        else if (profile.role == 'RF') {
            return RECFINANCE;
        }
        else if (profile.role == 'T') {
            return TRIAGE;
        }
        else if (profile.role == 'P') {
            return PERSONAL;
        }
        else if (profile.role == 'D') {
            return DOCTOR;
        }
        else if (profile.role == 'L') {
            return LAB;
        }
    };
    MenuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar custom-navbar main-brand\">\n    <a class=\"navbar-brand mr-auto\" [routerLink]=\"['/']\">\n        <img src=\"/src/assets/images/logo.png\" style=\"width:90%\">\n    </a>\n\n    <a href=\"javascript:;\" class=\"docked-hidden preferances-icon\" container=\"body\" placement=\"bottom\" ngbTooltip=\"Preferances\" (click)=\"options.settings = !options.settings\">\n        <i class=\"icon ion-ios-cog\"></i>\n    </a>\n</nav>\n<br>\n\n<!-- main navigation -->\n<nav class=\"menu\" *ngIf=\"!options.settings\">\n    <app-menu></app-menu>\n</nav>\n\n<nav class=\"menu\" *ngIf=\"options.settings\">\n    <ul class=\"navigation\">\n        <li class=\"navigation-item\">\n            <a class=\"navigation-link\" [routerLink]=\"['/social']\">\n                <i class=\"icon ion-ios-navigate mr-3\"></i>\n                <span class=\"title mr-auto\">Profile</span>\n            </a>\n        </li>\n        <li class=\"navigation-item\">\n            <a class=\"navigation-link\">\n                <i class=\"icon ion-ios-bell mr-3\"></i>\n                <span class=\"title mr-auto\">Notifications</span>\n            </a>\n        </li>\n        <li class=\"navigation-item\">\n            <a class=\"navigation-link\" [routerLink]=\"['/account/lockscreen']\">\n                <i class=\"icon ion-ios-locked mr-3\"></i>\n                <span class=\"title mr-auto\">Lockscreen</span>\n            </a>\n        </li>\n        <li class=\"navigation-item\">\n            <hr />\n        </li>\n        <li class=\"navigation-item\">\n            <div class=\"navigation-link\" (click)=\"options.docked = !options.docked; sendMessage()\">\n                <label class=\"custom-control custom-checkbox mb-0 mr-3\">\n          <input class=\"custom-control-input\" type=\"checkbox\" [(ngModel)]=\"options.docked\">\n          <span class=\"custom-control-label\"></span>\n        </label>\n                <span class=\"title mr-auto\">Docked mode</span>\n            </div>\n        </li>\n        <li class=\"navigation-item\">\n            <a class=\"navigation-link\" (click)=\"toggleFullscreen.emit()\">\n                <i class=\"icon ion-ios-eye mr-3\"></i>\n                <span class=\"title mr-auto\">Fullscreen</span>\n            </a>\n        </li>\n        <li class=\"navigation-item\">\n            <div class=\"navigation-link\" (click)=\"options.boxed = !options.boxed; sendMessage()\">\n                <label class=\"custom-control custom-checkbox mb-0 mr-3\">\n          <input class=\"custom-control-input\" type=\"checkbox\" [(ngModel)]=\"options.boxed\">\n          <span class=\"custom-control-label\"></span>\n        </label>\n                <span class=\"title mr-auto\">Boxed</span>\n            </div>\n        </li>\n        <li class=\"navigation-item\">\n            <hr />\n        </li>\n        <li class=\"navigation-item docked-hidden\">\n            <div class=\"px-4 d-flex align-items-center\">\n                <select class=\"custom-select\" [(ngModel)]=\"options.lang\" #langSelect=\"ngModel\" (ngModelChange)=\"translate.use(options.lang)\" placeholder=\"Select language\" style=\"min-width: 100%;\">\n          <option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\">{{ lang }}</option>\n        </select>\n            </div>\n        </li>\n    </ul>\n</nav>\n<!-- /main navigation -->\n\n<nav class=\"navbar custom-navbar sidebar-footer\">\n    <ul class=\"navbar-nav row no-gutters w-100\">\n        <!-- <li class=\"nav-item col-4 ml-0 docked-hidden\">\n      <a [routerLink]=\"['/email']\" class=\"nav-link m-auto\" container=\"body\" ngbTooltip=\"Inbox\">\n        <i class=\"icon ion-ios-filing\"></i>\n      </a>\n    </li> -->\n        <li class=\"nav-item col-6 ml-0 docked-hidden\">\n            <a [routerLink]=\"['/social']\" class=\"nav-link m-auto\" container=\"body\" ngbTooltip=\"Settings\">\n                <i class=\"icon ion-ios-cog\" style=\"font-size: 24px;\"></i>\n                \n            </a>\n        </li>\n        <li class=\"nav-item col-6 ml-0\">\n            <a [routerLink]=\"['/account/signin']\" class=\"nav-link m-auto\" container=\"body\" ngbTooltip=\"Sign out\">\n                <i class=\"icon ion-log-out\"></i>\n            </a>\n        </li>\n\n    </ul>\n</nav>"

/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-checkbox {\n  padding-left: 1.2rem; }\n\n.custom-control-label {\n  border-color: 1px solid rgba(255, 255, 255, 0.54);\n  display: block !important; }\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before, .custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\n  color: rgba(255, 255, 255, 0.54); }\n"

/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.ts ***!
  \***************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(translate) {
        this.translate = translate;
        this.options = {
            lang: 'en',
            theme: 'winter',
            settings: false,
            docked: false,
            boxed: false,
            opened: false
        };
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleFullscreen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    SidebarComponent.prototype.sendMessage = function () {
        this.messageEvent.emit(this.options);
    };
    SidebarComponent.prototype.setTheme = function (theme) {
        this.options.theme = theme;
        this.sendMessage();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "messageEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "toggleFullscreen", void 0);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/core/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/core/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, BaseUrl, staticData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseUrl", function() { return BaseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticData", function() { return staticData; });
var environment = {
    production: false,
    base_api_url: 'http://api.fluxafya.com/',
};
var BaseUrl = Object.freeze({
    base_api_url: 'http://api.fluxafya.com/',
});
// set this to true to use static data from "data" folder
var staticData = true;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shimanyi/Apps/Fluxafya/App/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map