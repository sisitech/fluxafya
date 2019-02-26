(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landingpage-landingpage-module"],{

/***/ "./src/app/landingpage/landingpage.component.html":
/*!********************************************************!*\
  !*** ./src/app/landingpage/landingpage.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 col-md-6 mx-auto\">\n            <div class=\"text-center\">\n                <img src=\"assets/landing/images/logo.png\" alt=\"fluxafya logo\" class=\"logo\">\n            </div>\n            <div class=\"center-text\">\n                <p>Digitize &#8226; Visualize &#8226; Optimize</p>\n            </div>\n            <div class=\"center-text\">\n                <p><b class=\"healthcare-tag\">HEALTH CARE</b></p>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row \">\n        <div class=\"col-sm-12 col-md-6\">\n            <a style=\"cursor: pointer;text-decoration: none;\" (click)=\"goToHealthCareLogin()\">\n                <div class=\"text-center\">\n                    <img src=\"assets/landing/images/health.png\" alt=\"Health Centres\" class=\"img-links\">\n                    <p class=\"sub-title\">Health Centres</p>\n                </div>\n            </a>\n        </div>\n        <div class=\"col-sm-12 col-md-6\">\n            <a style=\"cursor: pointer;text-decoration: none;\" href=\"#\">\n                <div class=\"text-center\">\n                    <img src=\"assets/landing/images/mch.png\" alt=\"Mother &amp; Child\" class=\"img-links\">\n                    <p class=\"sub-title\">Mother &amp; Child</p>\n                </div>\n            </a>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-sm-12 col-md-6 mx-auto\">\n            <a style=\"cursor: pointer;text-decoration: none;\" href=\"#\">\n                <div class=\"text-center\">\n                    <img src=\"assets/landing/images/myafya.png\" alt=\"MyAfya\" class=\"img-links\">\n                    <p class=\"sub-title\">MyAfya</p>\n                </div>\n            </a>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"center-text\">\n                <p>Your Partner in Accelerating Universal Health Coverage</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"center-text\">\n                <a href=\"#\"><b>Join Us</b></a>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row footer\">\n        <div class=\"col-sm-12 col-md-6\">\n            <div class=\"copyright\">\n                <p>©FluxAfya2019</p>\n            </div>\n        </div>\n        <div class=\"col-sm-12 col-md-6\">\n            <ul class='nav-links nav-mobile'>\n                <li>About Us</li>\n                <li>Partners</li>\n                <li>Contact us</li>\n                <img src=\"assets/landing/images/flag.png \" alt=\"Kenyan Flag \" class=\"flag \">\n            </ul>\n            <ul class='nav-links nav-lg float-right'>\n                <li>About Us</li>\n                <li>Partners</li>\n                <li>Contact us</li>\n                <img src=\"assets/landing/images/flag.png \" alt=\"Kenyan Flag \" class=\"flag \">\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/landingpage/landingpage.component.scss":
/*!********************************************************!*\
  !*** ./src/app/landingpage/landingpage.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  width: 60%;\n  padding-top: 20px; }\n\n.img-links {\n  width: 25%; }\n\n.nav-links li {\n  display: inline-block;\n  list-style: none;\n  padding-right: 20px; }\n\n.center-text {\n  text-align: center; }\n\n.top-pad-sm {\n  padding-top: 20px; }\n\n.flag {\n  width: 10%;\n  /* display: inline; */ }\n\n.float-right {\n  text-align: right; }\n\n.float-left {\n  text-align: left; }\n\n.top-pad-m {\n  padding-top: 50px; }\n\np,\na,\nli {\n  color: #cf005d; }\n\na {\n  text-decoration: underline; }\n\n.healthcare-tag {\n  letter-spacing: 2.5px; }\n\n.sub-title {\n  font-size: 14px; }\n\n.col-sm-12 {\n  padding-top: 25px; }\n\n.footer {\n  position: fixed;\n  font-size: 12px;\n  bottom: 0;\n  width: 80%;\n  left: 10%; }\n\n@media (max-width: 779px) {\n  .copyright,\n  .nav-links {\n    text-align: center; }\n  .nav-lg {\n    display: none; } }\n\n@media (min-width: 780px) {\n  .nav-mobile {\n    display: none; }\n  /* .footer {\n        padding-top: 200px;\n    } */ }\n\nbody {\n  background-color: #ffffff; }\n"

/***/ }),

/***/ "./src/app/landingpage/landingpage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/landingpage/landingpage.component.ts ***!
  \******************************************************/
/*! exports provided: LandingpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingpageComponent", function() { return LandingpageComponent; });
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


var LandingpageComponent = /** @class */ (function () {
    function LandingpageComponent(router) {
        this.router = router;
    }
    LandingpageComponent.prototype.ngOnInit = function () {
    };
    LandingpageComponent.prototype.goToHealthCareLogin = function () {
        this.router.navigate(['/account/signin']);
    };
    LandingpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landingpage',
            template: __webpack_require__(/*! ./landingpage.component.html */ "./src/app/landingpage/landingpage.component.html"),
            styles: [__webpack_require__(/*! ./landingpage.component.scss */ "./src/app/landingpage/landingpage.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LandingpageComponent);
    return LandingpageComponent;
}());



/***/ }),

/***/ "./src/app/landingpage/landingpage.module.ts":
/*!***************************************************!*\
  !*** ./src/app/landingpage/landingpage.module.ts ***!
  \***************************************************/
/*! exports provided: LandingpageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingpageModule", function() { return LandingpageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _landingpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landingpage.component */ "./src/app/landingpage/landingpage.component.ts");
/* harmony import */ var _landingpage_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landingpage.routing */ "./src/app/landingpage/landingpage.routing.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LandingpageModule = /** @class */ (function () {
    function LandingpageModule() {
    }
    LandingpageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_landingpage_routing__WEBPACK_IMPORTED_MODULE_3__["LandingpageRoutes"])
            ],
            declarations: [_landingpage_component__WEBPACK_IMPORTED_MODULE_2__["LandingpageComponent"]]
        })
    ], LandingpageModule);
    return LandingpageModule;
}());



/***/ }),

/***/ "./src/app/landingpage/landingpage.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/landingpage/landingpage.routing.ts ***!
  \****************************************************/
/*! exports provided: LandingpageRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingpageRoutes", function() { return LandingpageRoutes; });
/* harmony import */ var _landingpage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landingpage.component */ "./src/app/landingpage/landingpage.component.ts");

var LandingpageRoutes = [
    {
        path: '',
        children: [
            {
                path: '**',
                component: _landingpage_component__WEBPACK_IMPORTED_MODULE_0__["LandingpageComponent"],
                data: {
                    heading: 'Landing page'
                }
            },
        ]
    }
    // tslint:disable-next-line:eofline
];


/***/ })

}]);
//# sourceMappingURL=landingpage-landingpage-module.js.map