(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["error-error-module"],{

/***/ "./src/app/error/error.module.ts":
/*!***************************************!*\
  !*** ./src/app/error/error.module.ts ***!
  \***************************************/
/*! exports provided: ErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return ErrorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _error_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.routing */ "./src/app/error/error.routing.ts");
/* harmony import */ var _error4_error4_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error4/error4.component */ "./src/app/error/error4/error4.component.ts");
/* harmony import */ var _error5_error5_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error5/error5.component */ "./src/app/error/error5/error5.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ErrorModule = /** @class */ (function () {
    function ErrorModule() {
    }
    ErrorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_error_routing__WEBPACK_IMPORTED_MODULE_3__["ErrorRoutes"])],
            declarations: [_error4_error4_component__WEBPACK_IMPORTED_MODULE_4__["Error4Component"], _error5_error5_component__WEBPACK_IMPORTED_MODULE_5__["Error5Component"]]
        })
    ], ErrorModule);
    return ErrorModule;
}());



/***/ }),

/***/ "./src/app/error/error.routing.ts":
/*!****************************************!*\
  !*** ./src/app/error/error.routing.ts ***!
  \****************************************/
/*! exports provided: ErrorRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorRoutes", function() { return ErrorRoutes; });
/* harmony import */ var _error4_error4_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error4/error4.component */ "./src/app/error/error4/error4.component.ts");
/* harmony import */ var _error5_error5_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error5/error5.component */ "./src/app/error/error5/error5.component.ts");


var ErrorRoutes = [
    {
        path: '',
        children: [
            {
                path: '404',
                component: _error4_error4_component__WEBPACK_IMPORTED_MODULE_0__["Error4Component"]
            },
            {
                path: '500',
                component: _error5_error5_component__WEBPACK_IMPORTED_MODULE_1__["Error5Component"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/error/error4/error4.component.html":
/*!****************************************************!*\
  !*** ./src/app/error/error4/error4.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center align-items-center min-height-100 card card-block rounded-0 no-shadow mb-0\">\n  <div class=\"d-flex align-self-center align-items-center p-5\">\n    <div class=\"icon d-flex justify-content-center align-items-center\">\n      <img src=\"assets/images/server.svg\" alt=\"\">\n    </div>\n    <div class=\"ml-5\">\n      <div class=\"error-number fw-100 text-warning\">Page not found :(</div>\n      <h6 class=\"fw-300 mb-1 mt-1\">Error 404</h6>\n      <small class=\"fw-300 d-block mb-1\">Sorry, but the page you were trying to view does not exist.</small>\n      <a class=\"btn btn-primary\" [routerLink]=\"['/']\">Take me home</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/error/error4/error4.component.scss":
/*!****************************************************!*\
  !*** ./src/app/error/error4/error4.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .icon {\n  width: 180px;\n  height: 180px;\n  position: relative;\n  display: inline-block;\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 50%; }\n\n:host img {\n  height: 140px; }\n"

/***/ }),

/***/ "./src/app/error/error4/error4.component.ts":
/*!**************************************************!*\
  !*** ./src/app/error/error4/error4.component.ts ***!
  \**************************************************/
/*! exports provided: Error4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error4Component", function() { return Error4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Error4Component = /** @class */ (function () {
    function Error4Component() {
    }
    Error4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error4',
            template: __webpack_require__(/*! ./error4.component.html */ "./src/app/error/error4/error4.component.html"),
            styles: [__webpack_require__(/*! ./error4.component.scss */ "./src/app/error/error4/error4.component.scss")]
        })
    ], Error4Component);
    return Error4Component;
}());



/***/ }),

/***/ "./src/app/error/error5/error5.component.html":
/*!****************************************************!*\
  !*** ./src/app/error/error5/error5.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center align-items-center min-height-100 card card-block rounded-0 no-shadow mb-0\">\n  <div class=\"d-flex align-self-center align-items-center p-5\">\n    <div class=\"icon d-flex justify-content-center align-items-center\">\n      <img src=\"assets/images/server.svg\" alt=\"\">\n    </div>\n    <div class=\"ml-5\">\n      <div class=\"error-number fw-100 text-danger\">Internal server failure :(</div>\n      <h6 class=\"fw-300 mb-1 mt-1\">Error 500</h6>\n      <small class=\"fw-300 d-block mb-1\">Sorry something went wrong with our servers.</small>\n      <a class=\"btn btn-primary\" [routerLink]=\"['/']\">Report this error!</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/error/error5/error5.component.scss":
/*!****************************************************!*\
  !*** ./src/app/error/error5/error5.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .icon {\n  width: 180px;\n  height: 180px;\n  position: relative;\n  display: inline-block;\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 50%; }\n\n:host img {\n  height: 140px; }\n"

/***/ }),

/***/ "./src/app/error/error5/error5.component.ts":
/*!**************************************************!*\
  !*** ./src/app/error/error5/error5.component.ts ***!
  \**************************************************/
/*! exports provided: Error5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error5Component", function() { return Error5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Error5Component = /** @class */ (function () {
    function Error5Component() {
    }
    Error5Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error5',
            template: __webpack_require__(/*! ./error5.component.html */ "./src/app/error/error5/error5.component.html"),
            styles: [__webpack_require__(/*! ./error5.component.scss */ "./src/app/error/error5/error5.component.scss")]
        })
    ], Error5Component);
    return Error5Component;
}());



/***/ })

}]);
//# sourceMappingURL=error-error-module.js.map